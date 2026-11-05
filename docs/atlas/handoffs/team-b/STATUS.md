# Team B status · 2026-11-05

**Incomplete after batch 37.** Work on the existing branch `research/atlas-team-b-20261104` and [draft PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71). The session started from `a031f8e4f5e738ba1782e713a776ef7da743bd92`. The independently checked parent for this batch is `a031f8e4f5e738ba1782e713a776ef7da743bd92` (prior validated research head `f917e48b0a181a391b2e30d7b39c987d5171e86e`).

| Measure | Count |
|---|---:|
| UN M49 areas / unique area-condition cells | 248 / 1,736 |
| Organizations / areas with a domiciled organization | 361 / 226 |
| Areas without a verified domiciled organization | 22 |
| Resource relationships / cells with a linked resource | 249 / 230 |
| Cells without a linked resource | 1,506 |
| Of those, cells with / without a logged targeted check | 129 / 1,377 |
| Provenance records / targeted search checks | 726 / 420 |
| Community records / cross-border service edges | 7 / 8 |
| Approved clinical claims | 0 |

Cells with linked resources by condition · diabetes 84 · hypertension 31 · high_chol 25 · gout 21 · lactose 17 · celiac 32 · hemochromatosis 20.

This batch adds three organizations in three previously empty areas, four resource relationships, two newly linked area-condition cells (Caribbean Netherlands diabetes and hypertension), and resolves four issuer-country unknowns (five remain). The final PLoS ONE Añisok geriatric paper is indexed separately from the 2025 adult Anales Médicos study; matching 1,500/202 group sizes are flagged. Diabète SPM and AFDD are identity-only. Saint Helena checks remain government-only.

The count of source links measures discovery. A condition entry can be a dated programme report or education item. Each source requires its own appraisal before any clinical use. The corroboration, dates, roles, scope and outstanding checks are in [GAPS.md](GAPS.md), [CHECKPOINT.json](CHECKPOINT.json) and [VALIDATION.md](VALIDATION.md).

## Original acceptance criteria

| Criterion | Verified position at batch 37 |
|---|---|
| Every M49 area crosses all seven streams | Complete enumeration of 248 × 7 cells. Uncovered cells retain their discovery state. |
| Separate source country, study population and clinical jurisdiction | All 249 relationships have separate fields. Five issuer-country records remain unresolved. Individual studies can have limited or unverified geographic applicability. |
| Preserve disease subtypes and checkbox boundaries | The records retain study-specific endpoints and release status. There are zero approved clinical claims. |
| Check official websites, original-language lists and organizational lifecycle | Incomplete. There are 22 areas without a documented domestic body and 1,377 zero-link cells without a logged condition-specific check. Partner-only, historical, redirected and registry-only sources require further verification. Document justified gaps without assuming an organization exists. |
| Document at least ten broad-label counterexamples | 14 cases are documented in [GAPS.md](GAPS.md). |

Batch 37 validation is recorded in [VALIDATION.md](VALIDATION.md). The latest research commit SHA is filled after push.
