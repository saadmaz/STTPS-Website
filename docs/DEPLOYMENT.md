# Deployment

> How sttps.co reaches production. Part of the [project documentation](README.md).

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
