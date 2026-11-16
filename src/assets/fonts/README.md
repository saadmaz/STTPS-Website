# Self-hosted fonts

Two variable woff2 files, latin subset only, loaded via `next/font/local` in
[`src/app/layout.tsx`](../../app/layout.tsx).

| File                                 | Family        | Axis range | Used for                                                 |
| ------------------------------------ | ------------- | ---------- | -------------------------------------------------------- |
| `ibm-plex-sans-latin-variable.woff2` | IBM Plex Sans | 400–700    | Display and body (`--font-sans-family`)                  |
| `azeret-mono-latin-variable.woff2`   | Azeret Mono   | 400–600    | Panel labels, readouts, unit tags (`--font-mono-family`) |

## Why these are committed rather than fetched

They used to be loaded with `next/font/google`, which downloads the files
from `fonts.googleapis.com` / `fonts.gstatic.com` **at build time**. That put
an external network call on the critical path of every deploy, and it failed
in CI with a Turbopack font-resolution error (`Module not found: Can't
resolve '@vercel/turbopack-next/internal/font/google/font'`, 24 errors) on a
commit whose previous build had succeeded with identical application code.

Committing the files removes the fetch entirely: the build no longer depends
on Google being reachable, and the exact bytes shipped to users are pinned in
git rather than re-fetched per build.

## Provenance

These are the files Google serves for the `latin` subset of each family,
captured from the output of a successful `next/font/google` build (they were
emitted to `out/_next/static/media/`, where the generated CSS identified each
by `unicode-range: U+0000-00FF, …`). Both families are variable, so one file
per family covers the whole weight range — the previous build used the same
single file for every declared weight.

Both are licensed under the SIL Open Font License 1.1, which permits
redistribution:

- IBM Plex Sans — https://fonts.google.com/specimen/IBM+Plex+Sans
- Azeret Mono — https://fonts.google.com/specimen/Azeret+Mono

## Replacing or extending them

Only the latin subset is here, which is what the site needs and what the
previous `subsets: ["latin"]` config preloaded. Supporting another script
(cyrillic, greek, vietnamese) means adding that subset's file and a matching
`next/font/local` declaration — do not switch back to `next/font/google` to
get it, or the build-time fetch comes back with it.
