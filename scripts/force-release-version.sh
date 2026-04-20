#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
MANIFEST_PATH="${PROJECT_ROOT}/.release-please-manifest.json"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() {
    echo -e "${BLUE}[INFO] $1${NC}"
}

log_success() {
    echo -e "${GREEN}[OK] $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}[WARN] $1${NC}"
}

log_error() {
    echo -e "${RED}[ERROR] $1${NC}" >&2
}

usage() {
    cat << EOF
Usage: $0 --current
       $0 -v <version> [--execute]

Force the next Release Please release version by creating an empty git commit
with a Release-As footer.

Options:
  --current      Print the current version from the Release Please manifest
  -v <version>   Target stable release version in X.Y.Z format
  --execute      Run the git commit instead of printing it
  -h, --help     Show this help message

Behavior:
  - --current prints the manifest version and exits.
  - Dry-run is the default. The script prints the git commit command and exits.
  - Execute mode requires a clean git working tree and index.
  - Target versions must be stable semantic versions greater than the current
    version in .release-please-manifest.json.

Examples:
  $0 --current
  $0 -v 12.4.3
  $0 -v 12.5.0 --execute

EOF
}

require_clean_git_tree() {
    if [ -n "$(git status --porcelain)" ]; then
        log_error "Git working tree must be clean before using --execute"
        log_info "Commit, stash, or discard local changes, then retry"
        exit 1
    fi
}

is_stable_semver() {
    [[ "$1" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]
}

compare_versions() {
    local left="$1"
    local right="$2"
    local left_major left_minor left_patch
    local right_major right_minor right_patch

    IFS='.' read -r left_major left_minor left_patch <<< "$left"
    IFS='.' read -r right_major right_minor right_patch <<< "$right"

    if (( left_major > right_major )); then
        return 0
    fi

    if (( left_major < right_major )); then
        return 1
    fi

    if (( left_minor > right_minor )); then
        return 0
    fi

    if (( left_minor < right_minor )); then
        return 1
    fi

    if (( left_patch > right_patch )); then
        return 0
    fi

    return 1
}

read_current_version() {
    if [ ! -f "${MANIFEST_PATH}" ]; then
        log_error "Release Please manifest not found: ${MANIFEST_PATH}"
        exit 1
    fi

    local current_version
    current_version=$(sed -n 's/.*"\.": "\([0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*\)".*/\1/p' "${MANIFEST_PATH}")

    if [ -z "${current_version}" ]; then
        log_error "Could not read current version from ${MANIFEST_PATH}"
        exit 1
    fi

    echo "${current_version}"
}

require_main_branch() {
    local current_branch
    current_branch=$(git branch --show-current)

    if [ "${current_branch}" != "main" ]; then
        log_error "Force release is only allowed from the main branch"
        log_info "Current branch: ${current_branch:-detached-head}"
        exit 1
    fi
}

TARGET_VERSION=""
EXECUTE=false
SHOW_CURRENT=false

while [[ $# -gt 0 ]]; do
    case "$1" in
        --current)
            SHOW_CURRENT=true
            shift
            ;;
        -v)
            if [ -z "$2" ]; then
                log_error "Missing value for -v"
                usage
                exit 1
            fi
            TARGET_VERSION="$2"
            shift 2
            ;;
        --execute)
            EXECUTE=true
            shift
            ;;
        -h|--help)
            usage
            exit 0
            ;;
        *)
            log_error "Unknown option: $1"
            usage
            exit 1
            ;;
    esac
done

cd "${PROJECT_ROOT}"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    log_error "Project root is not inside a git repository"
    exit 1
fi

CURRENT_VERSION=$(read_current_version)

if [ "${SHOW_CURRENT}" = true ]; then
    if [ -n "${TARGET_VERSION}" ] || [ "${EXECUTE}" = true ]; then
        log_error "--current cannot be combined with -v or --execute"
        usage
        exit 1
    fi

    echo "${CURRENT_VERSION}"
    exit 0
fi

if [ -z "${TARGET_VERSION}" ]; then
    log_error "Target release version is required"
    usage
    exit 1
fi

require_main_branch

if ! is_stable_semver "${TARGET_VERSION}"; then
    log_error "Invalid target version '${TARGET_VERSION}'"
    log_info "Use a stable semantic version in X.Y.Z format only"
    exit 1
fi

if ! compare_versions "${TARGET_VERSION}" "${CURRENT_VERSION}"; then
    log_error "Target version ${TARGET_VERSION} must be greater than current version ${CURRENT_VERSION}"
    exit 1
fi

COMMIT_SUBJECT="chore: force next release to ${TARGET_VERSION}"
COMMIT_FOOTER="Release-As: ${TARGET_VERSION}"
COMMIT_COMMAND="git commit --allow-empty -m \"${COMMIT_SUBJECT}\" -m \"${COMMIT_FOOTER}\""

log_info "Current release version: ${CURRENT_VERSION}"
log_info "Target release version: ${TARGET_VERSION}"

if [ "${EXECUTE}" = false ]; then
    log_warning "Dry run mode. No git commit was created."
    echo "${COMMIT_COMMAND}"
    exit 0
fi

require_clean_git_tree

log_info "Creating empty git commit for Release Please"
eval "${COMMIT_COMMAND}"
log_success "Created commit to force next release to ${TARGET_VERSION}"