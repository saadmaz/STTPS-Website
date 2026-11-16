# Architecture decision records

An architecture decision record (ADR) captures one significant technical decision: what was decided, what else was considered, and why. ADRs are never edited after acceptance; a later ADR supersedes an earlier one instead.

## Writing a new ADR

1. Copy [TEMPLATE.md](TEMPLATE.md) to `NNNN-short-title.md`, using the next free number.
2. Fill it in and set the status to `Proposed`.
3. Open it in a pull request with the change it describes. It becomes `Accepted` when merged.
4. If it replaces an earlier decision, set the earlier ADR's status to `Superseded by ADR-NNNN`.

## Index

| ADR                                                                      | Decision                                                 | Status   |
| ------------------------------------------------------------------------ | -------------------------------------------------------- | -------- |
| [0001](0001-static-export-served-as-an-assets-only-cloudflare-worker.md) | Static export served as an assets-only Cloudflare Worker | Accepted |
| [0002](0002-all-group-and-brand-content-in-one-typed-data-module.md)     | All group and brand content in one typed data module     | Accepted |
