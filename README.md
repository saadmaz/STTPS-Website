<div align="center">

# STTPS

**We build the companies that raise the standard of everyday life.**

The corporate website of STTPS, the Sri Lankan group building and operating Tank Sudda, Team Sudda, Polish Station and STOPWASH.

[![Website](https://img.shields.io/badge/website-sttps.co-374151?style=flat-square&labelColor=111827)](https://sttps.co)
[![CI](https://github.com/saadmaz/STTPS-Website/actions/workflows/ci.yml/badge.svg)](https://github.com/saadmaz/STTPS-Website/actions/workflows/ci.yml)
[![Version](https://img.shields.io/badge/version-v1.0.0-374151?style=flat-square&labelColor=111827)](https://github.com/saadmaz/STTPS-Website/releases)
![License](https://img.shields.io/badge/license-proprietary-374151?style=flat-square&labelColor=111827)

[**sttps.co**](https://sttps.co) · [Documentation](docs/README.md) · [Report a bug](https://github.com/saadmaz/STTPS-Website/issues/new?template=bug_report.yml) · [Request a change](https://github.com/saadmaz/STTPS-Website/issues/new?template=feature_request.yml)

</div>

---

## Contents

- [About](#about)
- [Features](#features)
- [Architecture](#architecture)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Project structure](#project-structure)
- [Quality checks](#quality-checks)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Releases and versioning](#releases-and-versioning)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## About

STTPS builds and operates everyday-care companies across three areas: water and hygiene, property and operations, and vehicle care. This repository powers [sttps.co](https://sttps.co), the group's home for investors, partners, candidates and press.

|                  |                                           |
| ---------------- | ----------------------------------------- |
| **Organisation** | STTPS (Pvt) Ltd                           |
| **Status**       | Live                                      |
| **Website**      | [sttps.co](https://sttps.co)              |
| **Contact**      | [hello@sttps.co](mailto:hello@sttps.co)   |
| **Maintainer**   | [Saad Mazhar](https://github.com/saadmaz) |

## Features

- **Group story:** About, board, industries, what we do, beliefs, how we build and governance.
- **Portfolio:** An ecosystem view of every brand, grouped by category, with companies in operation and in development, and a page per brand.
- **Capabilities, careers and sustainability** pages, plus news and legal pages.
- **Fully static:** Every route is prebuilt HTML. No server code runs on a request.
- **Hardened delivery:** A strict Content Security Policy, security headers and immutable caching for hashed assets.
- **Responsive imagery:** Source photos are optimised into 640, 1024 and 1400 pixel WebP variants with `srcset`.
- **SEO:** Per-page metadata, a generated sitemap and `robots.txt`.

## Architecture

A fully static Next.js export served from Cloudflare as an assets-only Worker: every route is prebuilt HTML and no application code runs on a request. Security headers, the Content Security Policy and redirects ship with the assets.

The full picture, with diagrams, is in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Significant decisions are recorded as [ADRs](docs/adr/README.md).

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

## Configuration

The site needs no environment variables or secrets. Build, routing, headers and redirects are controlled by `next.config.ts`, `wrangler.jsonc`, `public/_headers` and `public/_redirects`. All group and brand content lives in `src/data/sttps.ts`.

Every variable, where it is set and which are secret: [docs/CONFIGURATION.md](docs/CONFIGURATION.md). How to update content is in [docs/CONTENT.md](docs/CONTENT.md).

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

## Quality checks

Every push and pull request to `main` runs the [CI workflow](.github/workflows/ci.yml): type check, lint, formatting and a production build. Run the same checks locally before opening a pull request:

```sh
bun run lint && bun run format:check && bun run typecheck && bun run build
```

## Deployment

| Environment | Branch    | URL                                  |
| ----------- | --------- | ------------------------------------ |
| Development | `develop` | [dev.sttps.co](https://dev.sttps.co) |
| Production  | `main`    | [sttps.co](https://sttps.co)         |

Cloudflare Workers Builds builds and serves each branch; the Deploy workflow verifies the build and the live URL. Work merges into `develop` and deploys to development; a release pull request from `develop` into `main` deploys to production.

Environments, setup, secrets and post-deployment checks are in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). To release or roll back, follow the [runbooks](docs/runbooks/README.md).

## Documentation

All documentation lives in [`docs/`](docs/README.md), using the same layout in every STTPS repository.

| Document                                  | Covers                                              |
| ----------------------------------------- | --------------------------------------------------- |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md)   | How the system is built and how data flows          |
| [CONFIGURATION.md](docs/CONFIGURATION.md) | Environment variables and configuration files       |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md)       | Hosting, the delivery pipeline and first-time setup |
| [CONTENT.md](docs/CONTENT.md)             | Updating copy, business data, imagery and articles  |
| [adr/](docs/adr/README.md)                | Architecture decision records                       |
| [runbooks/](docs/runbooks/README.md)      | Release and rollback procedures                     |

Product and reference documents for this project are listed in the [documentation index](docs/README.md).

## Releases and versioning

The project follows [Semantic Versioning](https://semver.org). Each release is tagged `vX.Y.Z` and published on the [Releases](https://github.com/saadmaz/STTPS-Website/releases) page. Notable changes are recorded in [CHANGELOG.md](CHANGELOG.md), and the release procedure is in [docs/runbooks/release.md](docs/runbooks/release.md).

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the branching model, commit conventions and pull request checklist. All participants are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please do not report security issues in public issues. See [SECURITY.md](SECURITY.md) for how to report a vulnerability privately.

## License

Copyright © 2026 STTPS (Pvt) Ltd. All rights reserved.

This is proprietary software. No permission is granted to use, copy, modify or distribute it without prior written consent. See [LICENSE](LICENSE).
