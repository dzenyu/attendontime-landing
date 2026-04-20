# Repository Scripts

This directory contains utility scripts for development and release management.

## Release Management

### `force-release-version.sh`

This script is used to force [Release Please](https://github.com/googleapis/release-please) to create a release with a specific version number. It achieves this by creating an empty commit with a `Release-As: <version>` footer.

#### Usage

```bash
# View help
./scripts/force-release-version.sh --help

# Show current version in the manifest
./scripts/force-release-version.sh --current

# Dry-run: Show the git command that would be executed
./scripts/force-release-version.sh -v 1.2.3

# Execute: Create the empty commit
./scripts/force-release-version.sh -v 1.2.3 --execute
```

#### Requirements

- **Branch**: Execution is only allowed on the `main` branch.
- **Git State**: The working tree must be clean (no uncommitted changes).
- **Version**: The target version must be a stable semantic version (X.Y.Z) and must be greater than the current version in `.release-please-manifest.json`.

#### After Running

The script creates a local commit. You must **push** this commit to `origin/main` to trigger the Release Please workflow in GitHub Actions.

```bash
git push origin main
```
