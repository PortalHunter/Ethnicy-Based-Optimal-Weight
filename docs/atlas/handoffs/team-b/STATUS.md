# Team B status · 2026-11-05

**Incomplete after batch 38.** Work on the existing branch `research/atlas-team-b-20261104` and [draft PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71).

| Measure | Count |
|---|---:|
| UN M49 areas / unique area-condition cells | 248 / 1,736 |
| Organizations / areas with a domiciled organization | 363 / 226 |
| Areas without a verified domiciled organization | 22 |
| Resource relationships / cells with a linked resource | 252 / 232 |
| Cells without a linked resource | 1,504 |
| Of those, cells with / without a logged targeted check | 129 / 1,375 |
| Provenance records / targeted search checks | 732 / 423 |
| Community records / cross-border service edges | 7 / 8 |
| Approved clinical claims | 0 |

Cells with linked resources by condition · diabetes 84 · hypertension 31 · high_chol 25 · gout 23 · lactose 17 · celiac 32 · hemochromatosis 20.

Batch 38 adds two rheumatology society identities (Morocco SMR; Indonesian IRA) and three gout resources (SMR 2019 recommendations; IRA 2026 IJR recommendations; TRA 2026 guideline PDF), raising gout-positive cells from 21 to 23. Batch 37 still supplies the SPM/Futuna/BES identity triage, final Añisok PLoS ONE paper and four issuer-country resolutions.

## Original acceptance criteria

| Criterion | Verified position at batch 38 |
|---|---|
| Every M49 area crosses all seven streams | Complete enumeration of 248 × 7 cells. Uncovered cells retain their discovery state. |
| Separate source country, study population and clinical jurisdiction | All 252 relationships have separate fields. Five issuer-country records remain unresolved. |
| Preserve disease subtypes and checkbox boundaries | Hyperuricaemia vs gout kept distinct in new SMR/IRA/TRA notes. Zero approved clinical claims. |
| Check official websites, original-language lists and organizational lifecycle | Incomplete. 22 areas without a documented domestic body; 1,375 zero-link cells without a logged condition-specific check. |
| Document at least ten broad-label counterexamples | 14 cases are documented in [GAPS.md](GAPS.md). |

See [VALIDATION.md](VALIDATION.md) and [CONTINUE.md](CONTINUE.md). The latest research commit is [34ecd66b59c24da0b15ed321bc76b8d01a758c70](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/34ecd66b59c24da0b15ed321bc76b8d01a758c70).
