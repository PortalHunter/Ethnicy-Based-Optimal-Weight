# Team B status · 2026-11-05

**Incomplete after batch 36.** Work on the existing branch `research/atlas-team-b-20261104` and [draft PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71). The session started from `7133fb56aaf3e14d843177d95d3e91fd8a5bcab7`. The independently checked parent for this batch is `88f2acd640d37c12f66e07f865fd546a5f823c30`.

| Measure | Count |
|---|---:|
| UN M49 areas / unique area-condition cells | 248 / 1,736 |
| Organizations / areas with a domiciled organization | 358 / 223 |
| Areas without a verified domiciled organization | 25 |
| Resource relationships / cells with a linked resource | 245 / 228 |
| Cells without a linked resource | 1,508 |
| Of those, cells with / without a logged targeted check | 128 / 1,380 |
| Provenance records / targeted search checks | 711 / 407 |
| Community records / cross-border service edges | 7 / 8 |
| Approved clinical claims | 0 |

Cells with linked resources by condition · diabetes 83 · hypertension 30 · high_chol 25 · gout 21 · lactose 17 · celiac 32 · hemochromatosis 20.

This batch adds seven organizations, seven resource relationships, four newly linked area-condition cells and four cross-border service records. Kiribati, Tuvalu and the Turks and Caicos Islands now have documented domestic organizations. The session has added 45 organizations across 22 additional areas and 53 relationships across 46 additional cells.

The Kiribati clinic’s advertised services, Tuvalu’s committee roster and the historical Pacific survey are distinguished from delivered programmes. The Australian programme’s visits to Kiribati, Niue and Naoero/Nauru are documented separately. A 2025 Añisok adult study names an Equatorial Guinean university author and reports on diabetes and measured lipids. Its method describes both weekday allocation and groups defined by blood pressure and BMI.

The count of source links measures discovery. A condition entry can be a dated programme report or education item. Each source requires its own appraisal before any clinical use. The corroboration, dates, roles, scope and outstanding checks are in [GAPS.md](GAPS.md), [CHECKPOINT.json](CHECKPOINT.json) and [VALIDATION.md](VALIDATION.md).

## Original acceptance criteria

| Criterion | Verified position at batch 36 |
|---|---|
| Every M49 area crosses all seven streams | Complete enumeration of 248 × 7 cells. Uncovered cells retain their discovery state. |
| Separate source country, study population and clinical jurisdiction | All 245 relationships have separate fields. Nine issuer-country records remain unresolved. Individual studies can have limited or unverified geographic applicability. |
| Preserve disease subtypes and checkbox boundaries | The records retain study-specific endpoints and release status. There are zero approved clinical claims. |
| Check official websites, original-language lists and organizational lifecycle | Incomplete. There are 25 areas without a documented domestic body and 1,380 zero-link cells without a logged condition-specific check. Partner-only, historical, redirected and registry-only sources require further verification. Document justified gaps without assuming an organization exists. |
| Document at least ten broad-label counterexamples | 14 cases are documented in [GAPS.md](GAPS.md). |

All seven batch receipts are recorded in [VALIDATION.md](VALIDATION.md). The latest research commit is [f917e48b0a181a391b2e30d7b39c987d5171e86e](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/f917e48b0a181a391b2e30d7b39c987d5171e86e).
