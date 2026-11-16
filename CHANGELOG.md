# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-11-16

First versioned release of [sttps.co](https://sttps.co).

### Added

- Home page with hero, beliefs, ecosystem and portfolio sections.
- About section with board, industries, what we do and per-topic sub-pages.
- Companies overview, companies in operation, companies in development and a page per brand.
- How we build, capabilities, governance, sustainability, news and careers (with open positions) pages.
- Contact page and privacy and terms pages.
- Per-brand contact methods, falling back to the contact page when none is confirmed.
- Responsive WebP image variants and an image optimisation script.
- Strict Content Security Policy, security headers and immutable caching for hashed assets.
- Continuous integration: type check, lint, formatting and production build on every push and pull request.
- Project governance: proprietary licence, security policy, contribution guidelines, code of conduct, issue forms, pull request template, CODEOWNERS and Dependabot.

### Changed

- Rebuilt on Next.js 16 with a fully static export.
- Hosting moved from cPanel to Cloudflare as an assets-only Worker.
- Typography updated to IBM Plex Sans and Azeret Mono.

[Unreleased]: https://github.com/saadmaz/STTPS-Website/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/saadmaz/STTPS-Website/releases/tag/v1.0.0
