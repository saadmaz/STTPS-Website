# ADR-0002: All group and brand content in one typed data module

<!-- nav -->

<sub><a href="../../README.md">Project README</a> · <a href="../README.md">Documentation index</a></sub>

| Status   | Date       |
| -------- | ---------- |
| Accepted | 2026-09-01 |

## Decision

Keep every brand, director, category and contact method in `src/data/sttps.ts`, and have pages compose that data.

## Alternatives considered

Content hard-coded in each page; a headless CMS.

## Rationale

One typed module keeps facts consistent across the home page, portfolio and brand pages, and lets non-engineers make routine edits safely. A CMS can replace it later without touching page layouts.
