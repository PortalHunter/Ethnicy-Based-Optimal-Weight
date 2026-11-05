# Team B status · 2026-11-05

**INCOMPLETE after batch 41.** [Open draft PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71) on `research/atlas-team-b-20261104`, base `main`. No edits to website/calculator/main, other teams' work or PR merge state. [Verified data commit](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/1c323d266f523967c538dd58ee4bb690044b5332).

| Measure | Verified result |
|---|---:|
| UN M49 areas / seven-condition cells | 248 / 1,736 |
| Organizations / domiciled areas | 368 / 227 |
| Areas without eligible domiciled identity | 21 |
| Exact resource relationships / positive cells | 262 / 242 |
| Zero-source cells | 1,494 |
| Zero-source: targeted check / no targeted check | 128 / 1,366 |
| Provenance rows / condition search rows | 750 / 438 |
| Community records / cross-border edges | 7 / 8 |
| Unresolved source-country issuers / approved clinical claims | 5 / 0 |

Source-positive cells: diabetes **88**, hypertension **32**, high_chol **26**, gout **25**, lactose **17**, celiac **34**, hemochromatosis **20**.

## Batch 41 · +5 resource relationships, +5 positive cells, +6 provenance, +7 searches

- **Côte d'Ivoire (384)**: AODCI's original French 2021 activities archive describes historical joint diabetes/HTA screening in Songon-Agban. Separate diabetes and hypertension relationships refer to the **same archive**, not independent studies, guidelines or numerical outcomes.
- **Saint Lucia (662)**: SLDHA's original 2025 World Diabetes Day *press brief*, not a guideline, covers public education and local programmes. Its IDF/STEPS prevalence quotations have **not** been separately checked. The association's Sept 2026 AGM notice is recent activity, **not proof that the meeting occurred**. Hypertension service pages were inspected without finding a standalone authored guideline in those pages.
- **Trinidad and Tobago (780)**: DATT's own blog records a UWI Test2Prevent diabetes outreach activity; the article date, cohort and outcome verification are unknown. An old blog is not evidence of present activity.
- **Mexico (484)**: CMR hosts the February 2026 LIV Congreso supplement of **Reumatología Clínica**, with gout conference abstract **CG030** (printed p.234). Author affiliation is Hospital Civil de Guadalajara/ISSSTE, **not CMR authorship**. Journal country of publication is **Spain (724)** per NLM's Spanish-edition ISSN record; research location Mexico, organization domicile Mexico, no clinical guideline jurisdiction. It reports 68 cases, but listed risk groups 28+26+13 = 67: **unresolved abstract discrepancy**. The PDF cover and p.234 were visually inspected; full methodology was not independently appraised.
- **India (356)**: own rheumatology association's guideline index currently says “Coming Soon”; logged as a limited first-party negative check, **not** a conclusion that Indian gout research does not exist.

## Original acceptance gates

| Requirement | Current state |
|---|---|
| Full M49 × seven-condition roster | Structurally met, 248×7. |
| Separate source country, population and healthcare jurisdiction | Fields present in 262 contexts; 5 issuer unknowns and substantial paper appraisal remain. |
| Disease-subtype boundaries and safe educational release | Retained, no ancestry-based diagnosis, all `research_lead_only`, no approved clinical claims. |
| First-party original-language guidance lists, current/defunct organization review | Still incomplete: 21 domicile gaps, 1,366 unsearched zero-resource cells, and many historical/source-lifecycle checks. |
| At least 10 diversity cautions | 14 preserved in GAPS.md. |

**Validation:** Prewrite ten-CSV structural checks produced zero errors. Independently reread all ten CSVs from immutable data commit `1c323d266f523967c538dd58ee4bb690044b5332`, matched **10/10 exact Git tree blob IDs**, confirmed tree was nontruncated, and independently reconciled resource/context/coverage/search joins and counts with zero errors. **Actual Node CLI was not run** because local GitHub network resolution was unavailable. Not a clinical/permissions/total URL crawl. See VALIDATION.md.

Only commit under `docs/atlas/handoffs/team-b/`. Continue from CONTINUE.md.
