# Team B status · 2026-11-05

**INCOMPLETE after batch 42.** [Draft PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71) is open, unmerged; branch `research/atlas-team-b-20261104`, base `main`. Verified data commit: [`db5b050d6a9139959e5ced1cecfefe0828b5eb4d`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/db5b050d6a9139959e5ced1cecfefe0828b5eb4d). Only Team B research directory changed; all resources remain `research_lead_only`.

| Measure | Verified result |
|---|---:|
| UN M49 areas × seven conditions | 248 × 7 = **1,736** |
| Organizations / domiciled areas / missing identities | **370 / 227 / 21** |
| Resource relationships / positive area-condition cells | **267 / 243** |
| Unlinked cells / targeted no-link / without targeted check | **1,493 / 128 / 1,365** |
| Provenance / condition-search logs | **757 / 443** |
| Indigenous/community records / cross-border edges | **7 / 8** |
| Unresolved issuer-country cases / approved claims | **5 / 0** |

Source-positive by condition: diabetes **88**, hypertension **32**, high_chol **26**, gout **25**, lactose **18**, celiac **34**, hemochromatosis **20**. The new lactose-positive Chile 152 cell is an **archival programme**, not clinical research evidence; other four newly linked lactose resources are in already source-positive areas.

## Batch 42 · two organizations and five first-party lactose resource links

- **Chile (152):** newly indexed Sociedad Chilena de Gastroenterología, own 2021 Spanish *Segundo Congreso de pacientes* agenda naming a lactose-intolerance vs IBS educational talk. The 2021 **schedule** does not prove the lecture occurred, content was published or guidance adopted; PDF text was retrieved but screenshot attempt failed. One new source-positive lactose cell, **not** a validated clinical source.
- **New Zealand (554):** newly indexed Coeliac New Zealand and own first-party associated-conditions page about secondary lactose intolerance. National/legal governance not separately verified; broad genetic/diet assertions are unappraised.
- **Australia (036), United Kingdom (826), Spain (724):** added Coeliac Australia, Coeliac UK and FACE own-language educational articles. They distinguish coeliac-linked secondary lactose intolerance from other diagnoses, but are **not** original evidence of lactase genotype, ancestry-linked risk or guideline issuer status.
- Batch deltas: **+2** organizations, **+0** new domiciled areas, **+5** exact resource relationships, **+1** source-positive cell, **+7** provenance, **+5** search logs, **0** community or cross-border changes.

**Readback validation:** The ten CSVs were fetched at immutable data SHA `db5b050d6a9139959e5ced1cecfefe0828b5eb4d`, checked against a **nontruncated Git recursive tree (10/10 exact blob matches)**, and validated with independent JavaScript equivalents of the checked-in `validate.mjs`: full M49 × seven roster, CSV widths, unique IDs, all resource/context/provenance joins, original issuer-country bases, coverage and log reconciliation, and community/cross-border foreign keys. **Zero structural errors. Actual Node CLI not run** because container network cannot resolve GitHub to clone this branch. Not a clinical, source copyright, comprehensive URL, or Indigenous permission audit.

The original 14 diversity failure examples, former NDF and Monaco legal-status boundaries, five edition-specific issuer-country unknowns, Mexico gout abstract's 68-versus-67 inconsistency and historical/current source distinctions remain open. See GAPS.md, VALIDATION.md and CONTINUE.md.

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
