# Team B live research and verification queue (v1, initialized at batch 82)

This is an **ordered, evidence-sensitive queue**, not a substitute for the full 248×7 coverage CSV. [RUNBOOK.md](RUNBOOK.md) controls methods, validation and completion claims. **Before acting, recheck each cell in live `data/coverage_by_area_condition.csv`**; skip/reclassify anything already researched by another run. Update this queue after substantive research with attempted date, source URLs or blockers, result, and next action, preserving historical entries. Use `GAPS.md` for detailed source conflicts and `CHECKPOINT.json` for canonical numeric counters.

**Verified initial snapshot (batch 82, 2026-11-06, data `f652332c046aaae9f204496dff9fa9529acdf1c6`):** 490 organizations; 227/248 locally domiciled M49 reach; 378 source-positive, 171 bounded-unlinked, 1,187 untouched (1,358 without linked source) out of 1,736 cells; 414 research-only contexts, 1,117 provenance, 641 search logs; 5 unknown issuer imprints. This snapshot is historical once new commits land.

## A. First-pass untouched cells — rotate regions and low-covered conditions

All targets below were **`not_yet_researched` at batch 82**. A logged bounded search is a valid outcome; do not force source-positive links. First inspect existing official organization identities in the source data and seek original-language first-party resources, with original authorship/edition. Prioritize A1–A6 but rotate so a run covers more than one region and condition.

| ID | M49 / geography | Untouched condition candidates | First investigation / acceptance gate | Current queue status |
|---|---|---|---|---|
| A1 | 356 India | `lactose`, `hemochromatosis` | Check existing B-IN-ISG / B-IN-IAPM and original Indian clinical/research society source, exact issuer and cohort, not imported practice statements | 2026-11-06: lactose bounded first-party ISG catalogue; hemochromatosis pending |
| A2 | 360 Indonesia | `lactose`, `celiac`, `hemochromatosis` | Seek Indonesian-language nonprofit/professional source and original publication; never infer regional genetic traits | 2026-11-06: celiac bounded Bahasa PGI consensus index; lactose/hemochromatosis pending |
| A3 | 404 Kenya | `gout`, `lactose`, `celiac`, `hemochromatosis` | Verify actual Kenyan organization/author and exact local scope, not an external continent-wide document | pending; verify live cell |
| A4 | 604 Peru | `gout`, `lactose`, `celiac`, `hemochromatosis`, `high_chol` | Search Spanish-language national professional/patient societies and original journals/position indexes; separate FH from ordinary lipids | 2026-11-06: gout first-positive SPR 2025 programme p.5 only, NOT guideline; other cells pending |
| A5 | 410 Republic of Korea | `lactose`, `celiac`, `hemochromatosis` | Korean-language original professional sources with local author/publisher; phenotype/genotype boundaries | pending; verify live cell |
| A6 | 818 Egypt | `gout`, `lactose`, `celiac`, `hemochromatosis` and HT/lipids | Check Egyptian professional bodies and authored country sources; current source-positive count was zero at snapshot, bounded diabetes search exists | 2026-11-06: gout bounded EGYSIR vs independently authored Springer paper; other cells pending |
| A7 | 586 Pakistan | `gout`, `hemochromatosis`, `lactose` | Seek locally attributed society/patient research and original documents beyond the existing diabetes/celiac organizations | pending; verify live cell |
| A8 | 682 Saudi Arabia | `gout`, `lactose`, `celiac`, `hemochromatosis` | Broaden outside the already linked 2023 SHA hypertension/lipid statements; no statutory adoption inference | pending; verify live cell |
| A9 | 288 Ghana | `gout`, `lactose`, `celiac`, `hemochromatosis` | First-party Ghanaian societies and original population denominator; do not generalize from selected surveys | pending; verify live cell |
| A10 | 566 Nigeria | `hypertension`, `high_chol`, `gout` | Try independently attributable first-party societies/issuer sources; all previously logged disease searches must be preserved | pending; verify live cell |
| A11 | 524 Nepal | `hemochromatosis` | Check local hematology/hepatology society or original Kathmandu studies; never treat ferritin as hereditary iron diagnosis | pending; verify live cell |

**Selection rule:** choose a mix of 4–10 live untouched cells across ≥2 geographies when feasible; always retain disease balance. Once a task is researched, mark the exact outcomes: first-source-positive; searched/no eligible link; existing source upgraded; attribution conflict unresolved; inapplicable after concurrent change. Append date, source URL or named blocker; don't simply delete the row.

## B. Previously bounded, no exact source — revisit strategically

- **B1 India (356) gout**: already bounded at batch 82; revisit only with a new original-source lead/hypothesis, not the same failed queries.
- **B2 Ghana (288) high_chol**: already bounded; distinguish familial hypercholesterolaemia genetic evidence from a general lipid screening sample.
- **B3 Nepal (524) gout/lactose/celiac**: already bounded; select a new original-language or original PDF/imprint avenue, without recharacterizing regional scope.
- **B4 Nigeria (566) diabetes/lactose/celiac/hemochromatosis**: already bounded; nonfindings cannot prove no Nigerian research.
- **B5 All remaining bounded cells**: programmatically select from live `search_log.csv` + `coverage_by_area_condition.csv` when an identifiable publisher/index or language route offers new information.

For each B task record what changed **relative to the earlier search**: new domain, original language, named issuer evidence, publication edition, or fresh service lifecycle; otherwise defer and rotate.

## C. Five known original-document issuer-country imprints (high-value legal/source attribution; not clinical approval)

| ID | Unknown at batch 82 | Evidence required for closure | State |
|---|---|---|---|
| C1 | Panama HEARTS page/source | Original publication's issuing imprint and edition; distinguish regional WHO/PAHO collaboration, site hosting and Panama healthcare jurisdiction | unresolved |
| C2 | Portuguese WGO lactose translation | Original WGO document issuer and jurisdiction vs Portuguese translator/site host | unresolved |
| C3 | Portuguese ESPGHAN celiac translation | Original ESPGHAN author/issuer imprint vs translation and local Portuguese page | unresolved |
| C4 | Chad OA Pub/JHC | Original document/journal colophon and verified publication-country attribution; do not infer from URL host | unresolved |
| C5 | South Sudan PAMJ | Journal's original publication location and original paper imprint vs South Sudan study population | unresolved |

If original accessible evidence cannot establish the issuer, leave `source_country_m49=unknown`, `source_country_basis=unresolved`, preserve provenance, and say what primary evidence remains missing. Resolve **only** with verified original imprint, not convenience.

## D. M49 identity gaps and governance risk

There were **21** M49 areas with no verified locally domiciled organization at batch 82; exact names and codes are in `CHECKPOINT.json` → `areas_without_identity`. Many are Antarctic/uninhabited territories, isolated islands or legally complex; a resident research society may genuinely not be evidenced. Do **not** treat foreign public health offices, a nearby state's society or regional WHO office as locally domiciled. Select the most plausible inhabited/locally organized ones first (e.g., Nauru 520, Niue 570, Saint Helena 654, Tokelau 772, DPR Korea 408), but do not fabricate identity or institutional independence. Record exact failed queries, local name, dated source and lifecycle uncertainty. Hard legal/geopolitical classification should be explicitly held for Team A or maintainer review.

## E. Existing credibility conflicts — do not lose in future high-volume work

Keep current/historical source differences and pending reviews in [GAPS.md](GAPS.md): Bangladesh NHFB founder 1978/1979 and society membership conflicts; Nepal severe LDL ≠ FH and conflicting study design; Saudi SHA/NHC joint authorship and 39-physician survey limitations; Turkish multi-society hypertension report and medically imprecise celiac "allergy" language **not endorsed**; historic Croatian 2012 and Polish PTR 2016 rheumatology items not current guideline; Iceland inaccessible PDF; Irish Croí vs ESC source role; original author versus journal host versus translated mirror; Indigenous/community control/permission; legal copyright, rights/licensing, clinical and fulltext methodology still unapproved.

## End-of-run queue maintenance

At each checkpoint: (i) mark attempted A/B/C/D IDs with date, precise outcome and source/blocker; (ii) remove no historical negative evidence; (iii) add next candidate cells driven by **actual live** coverage; (iv) state what changed in clinical/source uncertainty; (v) recompute bar graphs and checkpoint metrics. If nothing changed in data, explicitly report a zero-data delta and do not claim a new batch of scientific findings.


## Batch 83 queue outcomes (2026-11-06; data f2c23da058a350bbbec68a04dc1d481ec29a1022)

- A1 India 356 / lactose: **bounded and unlinked** after first-party [ISG teaching catalogue](https://www.isg.org.in/master-class) review and English society-specific terms; no original lactose paper on inspected index. Next: Indian local-language GI teaching/peer-reviewed original issuer search (Team C for primary journal census). Haemochromatosis remains untouched.
- A2 Indonesia 360 / celiac: **bounded and unlinked** after Bahasa [PGI consensus index](https://pbpgigastro.com/pedoman/konsensus/) inspection; none of the inspected listed documents is a celiac-specific society issue. Verified [PGI Jakarta identity](https://pbpgigastro.com/tentang-kami/). Next: Indonesian paediatric gastroenterology and exact named authors/imprint; other A2 conditions remain untouched.
- A4 Peru 604 / gout: **first positive research-index link** to [SPR's original 2025 scheduled-course programme](https://socreuma.org.pe/new/_recursos/eventos/archivos/202506201252189886.pdf), visual p.5, *Gota*, named speaker Dr Elmer García Salazar; neither delivered lecture nor clinical guideline verified. Verified locally based [SPR](https://socreuma.org.pe/new/). Next: original 2025 lecture transcript/2026 congress proceedings and Peru-specific original research without inventing guidance; remaining A4 cells untouched.
- A6 Egypt 818 / gout: **bounded and unlinked** after [EGYSIR independent society site](https://egysir.org/), with separately verified [2022 Egyptian consensus journal article](https://link.springer.com/article/10.1186/s43166-022-00123-3) by named authors *not proven EGYSIR-authored or hosted*; do not import a primary journal paper into an independent society attribution. Next: find directly attributable society original or non-government patient resource; other A6 cells untouched.

**Recomputed:** identity 227/248, source-positive 379/1736, bounded 174/1736, untouched 1183/1736. Run delta: +2 organizations, +1 resource, +1 source-positive, +3 bounded, -4 untouched, +4 provenance, +4 search logs, zero new covered domiciles. Clinical approvals zero, five unknown issuer imprints remain. Rotate geography, retain prior failures.
