# Deployment

<!-- nav -->

<sub><a href="../README.md">Project README</a> · <a href="README.md">Documentation index</a></sub>

> How sttps.co reaches production. Part of the [project documentation](README.md).

## Environments

| Environment   | Branch    | URL                                  | Deploys                                                                      |
| ------------- | --------- | ------------------------------------ | ---------------------------------------------------------------------------- |
| `development` | `develop` | [dev.sttps.co](https://dev.sttps.co) | Automatically on every merge into `develop`                                  |
| `production`  | `main`    | [sttps.co](https://sttps.co)         | Automatically when `develop` is promoted to `main` by a release pull request |

Cloudflare Workers Builds builds and serves each branch; the Deploy workflow verifies the build and the live URL. Each environment is a GitHub Environment with its own variables (`APP_URL` and host settings) and secrets, so one workflow serves both. Production accepts deployments from `main` only; development from `develop` only.

Development deploys are switched on per repository by setting the `DEVELOPMENT_ENABLED` repository variable to `true` once the development host exists. Until then, `develop` is built and tested by CI but not deployed.

### Setting up development

Cloudflare: set the `develop` branch build to deploy to the development Worker and attach `dev.sttps.co`.

### Promotion

1. Feature branches merge into `develop` and deploy to development.
2. When development is verified, open a release pull request from `develop` into `main` (see [runbooks/release.md](runbooks/release.md)).
3. Merging it deploys to production.

Cloudflare builds and publishes from the connected repository, so there are no deploy secrets in this repository. Every push to `main` goes live once the build finishes.

| Setting        | Value                 |
| -------------- | --------------------- |
| Build command  | `bun run build`       |
| Deploy command | `npx wrangler deploy` |

[`wrangler.jsonc`](../wrangler.jsonc) ships `out/` as an **assets-only Worker**: there is no `main` entry, so no Worker code runs on a request. The file also stops `wrangler deploy` from running its framework auto-detection, which would otherwise treat the project as a server-rendered Next.js app, run the OpenNext migration and fail, because `output: "export"` never produces a standalone server build. **Do not remove `wrangler.jsonc`**, and ignore any dashboard "output directory" setting: the config file wins.

`public/_headers` and `public/_redirects` are copied into `out/` by the build and read from the root of the deployed assets. Host-level rules live in the Cloudflare dashboard: HTTPS enforcement and the canonical redirect from `www.sttps.co` to `sttps.co`.

## Post-deployment checks

1. Open https://sttps.co and two inner pages; confirm they load without console errors.
2. Confirm https://www.sttps.co redirects to https://sttps.co.
3. Check the response headers of the home page include the Content Security Policy.
4. Confirm https://sttps.co/sitemap.xml lists every page.
