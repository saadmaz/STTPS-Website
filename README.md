# STTPS Website

The corporate website for STTPS, a Sri Lankan group building and operating
service-focused brands: Tank Sudda, Team Sudda, Polish Station and STOPWASH.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, static export via `output: "export"`)
- React 19 + TypeScript
- Tailwind CSS 4
- [Bun](https://bun.sh) as the package manager and script runner
- [Motion](https://motion.dev) for animation, [Sonner](https://sonner.emilkowal.ski) for toasts

The site builds to fully static HTML — no Node server at runtime — and
deploys as static files to a cPanel host, with routing and security headers
handled by `public/.htaccess`.

## Getting started

```bash
bun install
bun run dev
```

The dev server runs at `http://localhost:3000`.

## Scripts

| Command             | Description                                   |
| -------------------- | ---------------------------------------------- |
| `bun run dev`         | Start the Next.js dev server                   |
| `bun run build`       | Build the static production export into `out/` |
| `bun run start`       | Serve the production build locally             |
| `bun run lint`        | Run ESLint                                      |
| `bun run format`      | Format the codebase with Prettier               |
| `bun run scripts/optimize-images.mjs` | Regenerate responsive WebP variants for images in `src/assets` |

## Project structure

```
src/
  app/          Routes (App Router) — one folder per page/section
  components/
    site/       Shared layout chrome (nav, footer)
    ui/         Reusable UI primitives
  data/         Static content for companies, pages, etc.
  assets/       Source images (optimized into responsive variants)
  lib/          Shared utilities
public/         Static files served as-is (favicon, robots.txt, .htaccess)
```

## Deployment

Pushes to `main` run CI (typecheck, lint, build) via GitHub Actions and, on
success, ship the static export in `out/` to the production cPanel host over
SSH. See [.github/workflows/ci.yml](.github/workflows/ci.yml).
