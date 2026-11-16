# Content

> How to update copy, brands and imagery on sttps.co. Part of the [project documentation](README.md).

Group and brand content lives in [`src/data/sttps.ts`](../src/data/sttps.ts).

| Task                                                           | Where                                                                                                       |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Edit a brand's description, status, category or contact method | The brand entry in `src/data/sttps.ts`                                                                      |
| Edit the board                                                 | The directors list in `src/data/sttps.ts`                                                                   |
| Replace a brand photo                                          | Add the source image to `src/assets/`, then run `bun run scripts/optimize-images.mjs`                       |
| Add a page                                                     | Create a folder in `src/app/` with a `page.tsx` that exports `metadata`, and add it to `src/app/sitemap.ts` |
| Change security headers or the CSP                             | `public/_headers` (keep it in sync with any new script, style or image source)                              |
| Add a redirect                                                 | `public/_redirects`                                                                                         |

A brand without a confirmed contact channel falls back to the generic `/contact` page rather than showing an unverified number.
