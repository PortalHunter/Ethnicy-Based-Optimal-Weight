# Team B status · 2026-11-05

**INCOMPLETE after batch 43.** Draft [PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71) remains open/unmerged, branch `research/atlas-team-b-20261104`, base `main`. Verified data SHA [`1e20927dfebe5f31cab326bfd2d38a8c615eb489`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/1e20927dfebe5f31cab326bfd2d38a8c615eb489). Only Team B research files changed; no public website or clinical calculations.

| Measure | Verified result |
|---|---:|
| UN M49 areas × 7 conditions | 248 × 7 = **1,736** |
| Organizations / domiciled areas / missing locally domiciled identity | **375 / 227 / 21** |
| Exact resource relationships / positive area-condition cells | **272 / 248** |
| Zero-resource cells / targeted no-link / no targeted check | **1,488 / 128 / 1,360** |
| Provenance / search logs | **767 / 448** |
| Community records / cross-border edges | **7 / 8** |
| Unresolved issuer-country cases / approved clinical claims | **5 / 0** |

Source-positive cells: diabetes 88, hypertension **37**, high_chol 26, gout 25, lactose 18, celiac 34, hemochromatosis 20. A positive link is **not** proof of a valid medical recommendation or national evidence coverage.

## Batch 43 · 2026-11-05 · five first-party hypertension society sources

Five new verified source leads in five previously unlinked area-condition cells: Dansk Hypertensionsselskab (Denmark 208), SFHTA (France 250), Deutsche Hochdruckliga (Germany 276), SIIA (Italy 380), and British and Irish Hypertension Society (UK 826). **+5 organizations, +5 exact URL relations, +5 source-positive hypertension cells, +10 provenance rows, +5 searches; 0 new M49 domicile areas.**

- Denmark: [DAHS guidance listing](https://www.dahs.dk/guidelines/) includes society-issued guidance and outbound links to other specialties; do not attribute external work to DAHS.
- France: [SFHTA recommendations catalogue](https://www.sfhta.eu/recommandations-de-la-sfhta/) mixes society positions, translations and international guidance. Its [membership page](https://www.sfhta.eu/membres-sfhta/devenir-membre/) explicitly requires parent Société Française de Cardiologie membership; SFHTA is **not** recorded as independently incorporated.
- Germany: [2023 DHL statement](https://www.hochdruckliga.de/pressemitteilung/nvl-pm-20230705-2) records **participation** in the multi-institutional German NVL, not exclusive guideline authorship. [Own imprint](https://www.hochdruckliga.de/impressum) documents its Heidelberg registered-association identity.
- Italy: [original 2024 Italian SIIA 24-hour ambulatory BP monitoring recommendations](https://siia.it/wp-content/uploads/2024/09/Standard-per-esecuzione-ed-interpretazione-MAP-SIIA-2024-2.pdf). Its first PDF page was visually inspected and is explicit about monitoring/reporting; **not** a full treatment guideline or ancestry claim.
- United Kingdom: [BIHS first-party guideline list](https://bihs.org.uk/education/guidelines.aspx) includes 2024 professional statements. UK-based British-and-Irish professional remit neither establishes a single healthcare jurisdiction nor a locally domiciled Irish society.

Source issuer country equals each linked society's first-party page/document publisher, **not** patient ancestry, sampled population or legal guideline jurisdiction. All five new contexts are `research_lead_only`; no treatment, risk, diet or genetics recommendation released. All original 14 diverse-population cautions, five issuer-country unknowns, 21 missing local identities, 7 community records, 8 service edges, historical source distinctions and Mexican 2026 gout abstract 68-vs-67 discrepancy remain unresolved.

**Data SHA:** [`1e20927dfebe5f31cab326bfd2d38a8c615eb489`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/1e20927dfebe5f31cab326bfd2d38a8c615eb489). **Independent immutable validation:** 10/10 exact CSV blobs matched nontruncated 145-entry Git tree; all structural checks 0 errors; Node CLI **not run** (container GitHub DNS inaccessible). 375 organizations in 227 areas; 272 resource relationships, 248 source-positive cells; 1,488 without a linked source (128 previously targeted, 1,360 without targeted check); 767 provenance, 448 logs. This is a source index, not clinical appraisal.


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
