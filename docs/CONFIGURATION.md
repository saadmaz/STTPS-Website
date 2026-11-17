# Configuration

<!-- nav -->

<sub><a href="../README.md">Project README</a> · <a href="README.md">Documentation index</a></sub>

> Settings that control how sttps.co builds and behaves. Part of the [project documentation](README.md).

## Environment variables

The site needs no environment variables or secrets. It builds identically on every machine.

## Configuration files

| File                 | Controls                                                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `next.config.ts`     | Static export, trailing slashes and image handling                                                                           |
| `wrangler.jsonc`     | Cloudflare Worker name, compatibility date, assets directory, `auto-trailing-slash` and `404-page` handling, observability   |
| `public/_headers`    | Content Security Policy, security headers and caching. Keep the CSP in sync with any new script, style, image or font source |
| `public/_redirects`  | Redirects between paths                                                                                                      |
| `src/app/sitemap.ts` | The list of routes published in `sitemap.xml`                                                                                |
| `src/app/robots.ts`  | `robots.txt` rules                                                                                                           |

## Host-level settings

Configured in the Cloudflare dashboard rather than this repository: HTTPS enforcement and the canonical redirect from `www.sttps.co` to `sttps.co`.
