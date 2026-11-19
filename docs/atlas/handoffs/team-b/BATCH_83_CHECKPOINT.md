# Team B · standalone batch 83 checkpoint · 2026-11-06

**PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71 · **branch:** `research/atlas-team-b-20261104` → `main`. **Draft/open/unmerged; incomplete; no clinical claims approved.** Team B-only paths were changed. Research data is **immutable at [`f2c23da058a350bbbec68a04dc1d481ec29a1022`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/f2c23da058a350bbbec68a04dc1d481ec29a1022)** (parent `6e9b29629c91786fa3e1b5a79d838d030179215c`); complete Git tree `374304961a4f14ac85638349937672ce9b6139cd`, 151 entries, `truncated=false`. Documentation will commit separately on the same branch; the PR must remain draft.

## Scope and original acceptance

Team B independently catalogs nongovernmental professional societies, disease organizations, independent research groups and community-controlled/subnational bodies for **248 UN M49 areas × seven condition keys** (diabetes, hypertension, high_chol, gout, lactose, celiac, haemochromatosis), with original-language exact sources, organization domicile, document/page publisher, original author, study denominator and healthcare jurisdiction separated. All 1,736 cells exist *structurally*, not substantively verified. Bounded/unlinked cells are legitimate search outcomes, **not proof of national absence**. Team A handles statutory government; C independent journal census; D WHO/international networks. Indigenous governance, cross-border limitations, 14 anti-overgeneralization cases and no ethnicity-to-individual-health inference preserved. Clinical appraisal is separately governed by issue #27; source-positive does not mean clinical, legal, method, copyright or community-use approval.

## Exact verified progress and run deltas

| Metric | Start (batch 82) | End (batch 83) | This run |
|---|---:|---:|---:|
| Organizations | 490 | **492** | **+2** |
| Verified locally domiciled M49 areas | 227/248 | **227/248** | **+0** |
| Source-positive condition-area cells | 378/1,736 | **379/1,736** | **+1** |
| Bounded searched but unlinked cells | 171/1,736 | **174/1,736** | **+3** |
| Untouched cells | 1,187/1,736 | **1,183/1,736** | **−4** |
| Exact resource and context pairs | 414 | **415** | **+1** |
| Provenance records | 1,117 | **1,121** | **+4** |
| Search logs | 641 | **645** | **+4** |
| Unknown original issuer-country imprints | 5 | **5** | **0** |
| Community/subnational | 10 | **10** | **0** |
| Cross-border edges | 8 | **8** | **0** |
| Approved clinical claims | 0 | **0** | **0** |

Source-positive cells by condition (out of 248 each): **diabetes 110, hypertension 75, high_chol 48, gout 41, lactose 32, celiac 49, haemochromatosis 24**. Sum 379; **415/415 context clinical_release_state=research_lead_only**. No new M49 domicile area: 21 identity gaps remain.

## New original sources and exact limitations

1. **Peru 604 gout — positive research PROGRAM INDEX, NOT clinical guideline.** Newly documented Peru-resident [Sociedad Peruana de Reumatología](https://socreuma.org.pe/new/) `B-PE-SPR`. Its [original Spanish 2025 educational course programme PDF](https://socreuma.org.pe/new/_recursos/eventos/archivos/202506201252189886.pdf) was opened and **page 5 visually inspected**: it lists a scheduled *Gota* talk on 23 August 2025, speaker **Dr Elmer García Salazar**, and society course/office imprint (Av. José Pardo 138, Miraflores, Lima). It does NOT establish talk was delivered, full lecture text, patient cohort, original study, therapeutic efficacy, current guideline or statutory adoption. The paper's publisher vs presenter is separated; `source_country_m49=604`, `source_country_basis=issuer_of_linked_page`.
2. **Indonesia 360 society identity and bounded celiac search.** New `B-ID-PGI` [Perkumpulan Gastroenterologi Indonesia](https://pbpgigastro.com/tentang-kami/) is first-party documented as an autonomous Indonesian professional society formed 1975, with Jakarta address. Its original-language [consensus directory](https://pbpgigastro.com/pedoman/konsensus/) includes other GI documents but showed no attributable exact celiac work in inspected entries; this **does not** prove Indonesian national absence. No original-document issuer conjectured.
3. **India 356 lactose — bounded.** Indian Society of Gastroenterology [own teaching index](https://www.isg.org.in/master-class) inspected using society/lactose/breath-test terms: no verified exact ISG-issued lactose resource on inspected page. Other original GI investigations and local languages remain open.
4. **Egypt 818 gout — bounded.** [EGYSIR official society site](https://egysir.org/) inspected. The separate [2022 Egyptian gout consensus](https://link.springer.com/article/10.1186/s43166-022-00123-3) has named Egyptian/international authors and a Springer journal publisher; **EGYSIR authorship or endorsement not verified**. Team C primary-journal ownership preserved. No Egyptian epidemiology or legal efficacy claim.

## Validation and GitHub write/readback receipts

- Research commit `f2c23da058a350bbbec68a04dc1d481ec29a1022`, root tree `374304961a4f14ac85638349937672ce9b6139cd`, **151 paths, nontruncated**, all 10 Team B CSVs and unchanged `validate.mjs` fetched individually at immutable SHA and **11/11 exact GitHub blob/tree matches**. Independent JavaScript recreation of validator checks: **0 structural errors** (CSV widths; IDs/URLs; 248×7 and UN overview; resource/context roles, domicile, publisher-country basis, provenance, logged-search references; 10 community and eight cross-border joins). Exact source methodology, link currency, journal ownership, national sampling, licensing, genetics and clinical appraisal are NOT certified.
- **Actual `node docs/atlas/handoffs/team-b/validate.mjs` NOT RUN** — local GitHub clone could not resolve github.com (DNS) despite available Node. This is not represented as a CLI pass. Previously documented Node receipts belong to earlier runs.
- Compare parent → data commit shows **six Team B CSV paths only**. Initial CI on data SHA: **Population Phase 1 regression tests success; Calculator CI success**. Later documentation commit CI state must be checked separately; CI does not approve health claims.

## Remaining gaps and queue

**21 local identity gaps:** 010 Antarctica; 074 Bouvet Island; 086 British Indian Ocean Territory; 162 Christmas Island; 166 Cocos (Keeling) Islands; 238 Falkland Islands; 239 South Georgia and South Sandwich Islands; 260 French Southern Territories; 334 Heard Island and McDonald Islands; 336 Holy See; 408 DPR Korea; 520 Nauru/Naoero; 570 Niue; 574 Norfolk Island; 581 US Minor Outlying Islands; 612 Pitcairn; 652 Saint Barthélemy; 654 Saint Helena; 732 Western Sahara; 744 Svalbard and Jan Mayen; 772 Tokelau. Inaccessible/uninhabited territories must never be filled with invented societies, foreign domiciles or national-absence claims.

**Five unresolved original document issuer-country imprints:** C1 Panama HEARTS; C2 Portuguese WGO lactose translation; C3 Portuguese ESPGHAN coeliac translation; C4 Chad OA Pub/JHC; C5 South Sudan PAMJ. Do not close without the original imprint, document issuer and publication country. **1,183 untouched** and **174 bounded/unlinked** cells remain. Prior Bangladesh founding year/member conflicts, Nepal severe LDL vs FH, Saudi joint-source roles and 39 physician survey, historic Polish/Croatian gout, Iceland inaccessible PDF, Turkish celiac wording, Indigenous consent, journal vs society ownership, original editions, full-text/rights and medical methodology remain unresolved.

**Next:** follow [QUEUE.md](QUEUE.md) A1/A2/A3/A4/A5/A6 with new untargeted cells (prefer haemochromatosis/lactose/celiac/gout) across 2+ geographies, each with primary-source URLs or a bounded logged negative; audit one original issuer imprint if feasible; never re-assign independent journal articles to a society; run actual Node CLI when checkout possible. **Do not merge, mark ready or approve clinical claims.**

## Durable restart / run book

Read [RUNBOOK.md](RUNBOOK.md), [QUEUE.md](QUEUE.md), [CONTINUE.md](CONTINUE.md), [CHECKPOINT.json](CHECKPOINT.json), this checkpoint, [VALIDATION.md](VALIDATION.md) and original Team B acceptance. Verify live PR head before writing; recalc numbers from current 10 CSVs; make Team B-only safe CAS commits; independently validate and read back immutable tree; checkpoint without losing history. Source-positive research ≠ clinical acceptance.

**Run completion bars:** 227/248 geographic identity (91.53%), gaps 21; 379/1736 source-positive (21.83%), 174/1736 bounded (10.02%), 1183/1736 untouched (68.15%). The additive three segments total 1,736.
