# attendontime-landing
Temporary landing page for AttendOnTime

## Custom Domain

This site is deployed to GitHub Pages with a custom domain: **attendontime.com**

The `CNAME` file in the `public/` directory ensures that the custom domain setting is preserved across deployments. During the build process, Vite automatically copies this file from `public/CNAME` to `dist/CNAME`, which is then deployed to the `gh-pages` branch.

**Important:** If you need to change the custom domain in the future, update the `public/CNAME` file with the new domain name.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build output will be in the `dist/` directory and will include the `CNAME` file.

## Deployment

Deployments are automated via GitHub Actions. On every push to `main`, the site is built and deployed to GitHub Pages.

## Releases

This project uses [Release Please](https://github.com/googleapis/release-please) for automated semantic versioning and changelog generation.

- Write commits following the [Conventional Commits](https://www.conventionalcommits.org/) spec (e.g. `feat:`, `fix:`, `chore:`).
- When commits land on `main`, the Release Please GitHub Action automatically opens or updates a Release PR.
- Merging the Release PR creates a GitHub Release and git tag, and bumps the version in `package.json`.

![Alt](https://repobeats.axiom.co/api/embed/dd1fdcdb9261578495a321bd8f6d16cc71277c95.svg "Repobeats analytics image")
