# Team B status · 2026-11-05

**Incomplete after batch 32.** Work on the existing branch `research/atlas-team-b-20261104` and [draft PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71). The session started from `7133fb56aaf3e14d843177d95d3e91fd8a5bcab7`. The independently checked parent for this batch is `f65ea551d832aa84dd9d486cc78b74201d33f0a9`.

| Measure | Count |
|---|---:|
| UN M49 areas / unique area-condition cells | 248 / 1,736 |
| Organizations / areas with a domiciled organization | 329 / 208 |
| Areas without a verified domiciled organization | 40 |
| Resource relationships / cells with a linked resource | 214 / 202 |
| Cells without a linked resource | 1,534 |
| Of those, cells with / without a logged targeted check | 120 / 1,414 |
| Provenance records / targeted search checks | 586 / 343 |
| Community records / cross-border service edges | 7 / 2 |
| Approved clinical claims | 0 |

Cells with linked resources by condition · diabetes 72 · hypertension 23 · high_chol 23 · gout 20 · lactose 15 · celiac 31 · hemochromatosis 18.

Reconciled all 1,736 matrix cells to all 343 search records by exact M49 and condition key. Among the 1,534 cells without a link, 120 have a documented targeted check and 1,414 lack a matching condition-specific log. The 202 positive cells retain their actual resource counts.

Each row now lists its exact search IDs or none_logged. The historical Monaco dissolution note and all other area-specific caveats remain available. A negative or inaccessible source check has a limited scope and does not prove absence.

The count of source links measures discovery. A condition entry can be a dated programme report or education item. Each source requires its own appraisal before any clinical use. The corroboration, dates, roles, scope and outstanding checks are in [GAPS.md](GAPS.md), [CHECKPOINT.json](CHECKPOINT.json) and [VALIDATION.md](VALIDATION.md).
