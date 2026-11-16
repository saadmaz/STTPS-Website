<div align="center">

# STTPS

**We build the companies that raise the standard of everyday life.**

The corporate website of STTPS, a Sri Lankan group building and operating service brands: Tank Sudda, Team Sudda, Polish Station and STOPWASH.

[![Website](https://img.shields.io/badge/website-sttps.co-111111?style=flat-square&labelColor=000000)](https://sttps.co)
[![CI](https://github.com/saadmaz/STTPS-Website/actions/workflows/ci.yml/badge.svg)](https://github.com/saadmaz/STTPS-Website/actions/workflows/ci.yml)
![License](https://img.shields.io/badge/license-proprietary-000000?style=flat-square)

[**sttps.co**](https://sttps.co) · [Report a bug](https://github.com/saadmaz/STTPS-Website/issues/new?template=bug_report.yml) · [Request a change](https://github.com/saadmaz/STTPS-Website/issues/new?template=feature_request.yml)

</div>

---

## Contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Content management](#content-management)
- [Quality checks](#quality-checks)
- [Deployment](#deployment)
- [Releases and versioning](#releases-and-versioning)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## About

STTPS builds and operates everyday-care companies across three areas: water and hygiene, property and operations, and vehicle care. This repository powers [sttps.co](https://sttps.co), the group's home for investors, partners, candidates and press.

|                  |                                           |
| ---------------- | ----------------------------------------- |
| **Organisation** | STTPS (Pvt) Ltd                           |
| **Website**      | [sttps.co](https://sttps.co)              |
| **Contact**      | [hello@sttps.co](mailto:hello@sttps.co)   |
| **Maintainer**   | [Saad Mazhar](https://github.com/saadmaz) |

### Group companies

| Company        | Focus                        | Repository                                                                                                                                       |
| -------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tank Sudda     | Water tank and sump cleaning | [Tank-Sudda-Website-TypeScript](https://github.com/saadmaz/Tank-Sudda-Website-TypeScript)                                                        |
| Team Sudda     | Home and office cleaning     | [Team-Sudda](https://github.com/saadmaz/Team-Sudda)                                                                                              |
| Polish Station | Automotive detailing         | [Polish-Station-Website](https://github.com/saadmaz/Polish-Station-Website), [Polish-Station-POS](https://github.com/saadmaz/Polish-Station-POS) |
| STOPWASH       | Vehicle-care network         | [Stopwash-Website](https://github.com/saadmaz/Stopwash-Website), [Stopwash-POS](https://github.com/saadmaz/Stopwash-POS)                         |
| STTPS ERP      | Group operations platform    | [STTPS-ERP](https://github.com/saadmaz/STTPS-ERP)                                                                                                |

## Features

- **Group story:** About, board, industries, what we do, beliefs, how we build and governance.
- **Portfolio:** An ecosystem view of every brand, grouped by category, with companies in operation and in development, and a page per brand.
- **Capabilities, careers and sustainability** pages, plus news and legal pages.
- **Fully static:** Every route is prebuilt HTML. No server code runs on a request.
- **Hardened delivery:** A strict Content Security Policy, security headers and immutable caching for hashed assets.
- **Responsive imagery:** Source photos are optimised into 640, 1024 and 1400 pixel WebP variants with `srcset`.
- **SEO:** Per-page metadata, a generated sitemap and `robots.txt`.

## Tech stack

| Layer     | Technology                                                                                    |
| --------- | --------------------------------------------------------------------------------------------- |
| Framework | [Next.js](https://nextjs.org) 16 (App Router, static export via `output: "export"`)           |
| Language  | TypeScript (strict)                                                                           |
| Styling   | Tailwind CSS 4                                                                                |
| Motion    | [Motion](https://motion.dev) for animation, [Sonner](https://sonner.emilkowal.ski) for toasts |
| Hosting   | Cloudflare, as an assets-only Worker                                                          |
| Tooling   | Bun, ESLint, Prettier                                                                         |

## Getting started

### Prerequisites

- [Bun](https://bun.sh) 1.4 or later
- Node.js 20.9 or later

### Install and run

```sh
git clone https://github.com/saadmaz/STTPS-Website.git
cd STTPS-Website
bun install
bun run dev
```

The dev server runs at **http://localhost:3000**.

### Scripts

| Command                               | Description                                                    |
| ------------------------------------- | -------------------------------------------------------------- |
| `bun run dev`                         | Start the Next.js development server                           |
| `bun run build`                       | Build the static production export into `out/`                 |
| `bun run start`                       | Serve the production build locally                             |
| `bun run typecheck`                   | Generate Next.js types and run `tsc --noEmit`                  |
| `bun run lint`                        | Lint with ESLint                                               |
| `bun run format` / `format:check`     | Format with Prettier, or check without writing                 |
| `bun run scripts/optimize-images.mjs` | Regenerate responsive WebP variants for images in `src/assets` |

## Project structure

```
.
├── .github/              # CI workflow, issue and pull request templates
├── public/               # Static files served as-is: favicon, robots.txt, _headers, _redirects
├── scripts/              # Image optimisation
├── src/
│   ├── app/              # Routes (App Router), one folder per page or section
│   ├── assets/           # Source images and their optimised variants
│   ├── components/
│   │   ├── site/         # Layout chrome: navigation, footer
│   │   └── ui/           # Reusable UI primitives
│   ├── data/sttps.ts     # All group and brand content
│   └── lib/              # Shared utilities
├── next.config.ts        # Static export configuration
└── wrangler.jsonc        # Cloudflare assets-only Worker configuration
```

## Content management

Group and brand content lives in [`src/data/sttps.ts`](src/data/sttps.ts).

| Task                                                           | Where                                                                                                       |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Edit a brand's description, status, category or contact method | The brand entry in `src/data/sttps.ts`                                                                      |
| Edit the board                                                 | The directors list in `src/data/sttps.ts`                                                                   |
| Replace a brand photo                                          | Add the source image to `src/assets/`, then run `bun run scripts/optimize-images.mjs`                       |
| Add a page                                                     | Create a folder in `src/app/` with a `page.tsx` that exports `metadata`, and add it to `src/app/sitemap.ts` |
| Change security headers or the CSP                             | `public/_headers` (keep it in sync with any new script, style or image source)                              |
| Add a redirect                                                 | `public/_redirects`                                                                                         |

A brand without a confirmed contact channel falls back to the generic `/contact` page rather than showing an unverified number.

## Quality checks

Every push and pull request to `main` runs the [CI workflow](.github/workflows/ci.yml): type check, lint, formatting and a production build. Run the same checks locally before opening a pull request:

```sh
bun run typecheck && bun run lint && bun run format:check && bun run build
```

## Deployment

Cloudflare builds and publishes from the connected repository, so there are no deploy secrets in this repository. Every push to `main` goes live once the build finishes.

| Setting        | Value                 |
| -------------- | --------------------- |
| Build command  | `bun run build`       |
| Deploy command | `npx wrangler deploy` |

[`wrangler.jsonc`](wrangler.jsonc) ships `out/` as an **assets-only Worker**: there is no `main` entry, so no Worker code runs on a request. The file also stops `wrangler deploy` from running its framework auto-detection, which would otherwise treat the project as a server-rendered Next.js app, run the OpenNext migration and fail, because `output: "export"` never produces a standalone server build. **Do not remove `wrangler.jsonc`**, and ignore any dashboard "output directory" setting: the config file wins.

`public/_headers` and `public/_redirects` are copied into `out/` by the build and read from the root of the deployed assets. Host-level rules live in the Cloudflare dashboard: HTTPS enforcement and the canonical redirect from `www.sttps.co` to `sttps.co`.

## Releases and versioning

The project follows [Semantic Versioning](https://semver.org). Each release is tagged `vX.Y.Z` and published on the [Releases](https://github.com/saadmaz/STTPS-Website/releases) page. Notable changes are recorded in [CHANGELOG.md](CHANGELOG.md).

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the branching model, commit conventions and pull request checklist. All participants are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please do not report security issues in public issues. See [SECURITY.md](SECURITY.md) for how to report a vulnerability privately.

## License

Copyright © 2026 STTPS (Pvt) Ltd. All rights reserved.

This is proprietary software. No permission is granted to use, copy, modify or distribute it without prior written consent. See [LICENSE](LICENSE).
