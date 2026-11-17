# ADR-0001: Static export served as an assets-only Cloudflare Worker

| Status   | Date       |
| -------- | ---------- |
| Accepted | 2026-11-16 |

## Decision

Build the site with Next.js `output: "export"` and serve the `out/` directory from Cloudflare as an assets-only Worker configured in `wrangler.jsonc`, with headers and redirects in `public/_headers` and `public/_redirects`.

## Alternatives considered

cPanel shared hosting (the previous setup); a server-rendered Next.js deployment through OpenNext.

## Rationale

The site has no per-request logic, so prebuilt HTML is the fastest and cheapest option with nothing to patch at runtime. Keeping `wrangler.jsonc` in the repository also stops Wrangler's framework auto-detection from attempting an OpenNext migration that cannot work with a static export.
