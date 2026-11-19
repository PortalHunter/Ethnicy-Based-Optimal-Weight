# Team B — standalone batch 92 checkpoint · 2026-11-07

> **RESEARCH INCOMPLETE · DRAFT/OPEN/UNMERGED PR #71 · ZERO APPROVED CLINICAL CLAIMS.** This checkpoint is independently restartable; never merge/mark ready. Branch `research/atlas-team-b-20261104` → `main`. Read [RUNBOOK.md](RUNBOOK.md), [QUALITY_AND_COMPLETION.md](QUALITY_AND_COMPLETION.md), [QUEUE.md](QUEUE.md), [CONTINUE.md](CONTINUE.md), [CHECKPOINT.json](CHECKPOINT.json), all 10 original Team B CSVs, audit and reconciliation ledgers, and unchanged `validate.mjs`.

## Immutable data commit and validator receipt

- Data commit: [`3cb0eaae19950bae88ebbdd06c1c8f53e958f304`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/3cb0eaae19950bae88ebbdd06c1c8f53e958f304), parent `2e9f8d9702f3b4d9d31d9688036682b2b1da4005`, root Git tree `61d663004aed1b810e6e8649fd119d574838bcb1`, **159 entries, truncated=false**. Documentation follow-up commit is the branch commit that contains this checkpoint.
- Seven changed **Team B-only** files: `data/specialist_organizations.csv`, `data/condition_organizations.csv`, `data/publication_context.csv`, `data/coverage_by_area_condition.csv`, `data/search_log.csv`, `data/research_quality_audit.csv`, `PROVENANCE.csv`. No canonical history deleted, no unrelated directories touched.
- **13/13 exact SHA-to-GitHub-tree readbacks:** 10 core CSVs, unchanged `validate.mjs`, quality audit CSV and metadata-only reconciliation CSV. Independent JavaScript full-file CSV row widths, unique 248 M49 units × 7, 423 resource/context joins, 1,134 provenance foreign keys, 656 search ID-to-cell relationships, issuer-country enums, context release states, quality audit and metadata reconciliation joins, 10 community cases and 8 cross-border edges: **zero detected structural errors**.
- **Actual `node docs/atlas/handoffs/team-b/validate.mjs` NOT RUN** because direct git/GitHub checkout DNS was unavailable and executable exact-file reconstruction was not completed. Do **not** claim CLI validation from structural JS or historical receipts. GitHub Actions on immutable data commit: **Calculator CI and Population Phase 1 regression tests both completed/success**; combined-status endpoint listed zero statuses. CI does **not** assess evidence sufficiency, rights, medicine, source edition or Indigenous permissions.

## Recomputed before → after metrics

| Measure | Batch 91 before | Batch 92 after | Δ |
|---|---:|---:|---:|
| Nongovernmental/institutional organization identities | 495 | **496** | **+1** |
| M49 areas with at least one locally domiciled identity | 227 / 248 | **227 / 248** | **0** |
| Raw source-positive condition-area cells | 381 / 1736 | **382 / 1736** | **+1** |
| Targeted searched but source-unlinked | 175 | **175** | **0** |
| Untouched area-condition cells | 1180 | **1179** | **−1** |
| Exact resource/context pairs, all research leads | 422 | **423** | **+1** |
| Provenance rows | 1132 | **1134** | **+2** |
| Search logs | 655 | **656** | **+1** |
| Individually source-quality audited contexts | 25 | **34** | **+9** |
| Source contexts not individually audited | 397 | **389** | **−8** |
| Unresolved original issuer-country imprints | 5 | **5** | **0** |
| Clinically approved claims | 0 | **0** | **0** |

**Quality tiers**, original 25 → current 34: S1 **6 → 7**, S2 **11 → 15**, H **0 → 0**, M **7 → 11**, U **1 → 1**. Source quality audit percentages are **34/423**, not 382 fully verified substantive sources. Raw cell positivity still includes M metadata-only old URLs; the separate [metadata reconciliation ledger](data/metadata_only_reconciliation.csv) records seven historical M cases, five with separate replacement substantive URLs and two with no original substantive source independently verified.

**Search disposition:** Historical quality depth D1=3, D2=4, D3=0 (unchanged). Only **4** of the **175** structurally unlinked cells have active individual D2 entries, leaving **171** without active D2. A legacy targeted search is not automatically adequately bounded.

## Exact new source and attribution limits

**Kenya M49 404 · `lactose` · `B-KE-AKUHN`:** [Aga Khan University Hospital, Nairobi original Lactose Intolerance educational page](https://hospitals.aku.edu/kenya/encyclopedia/lactose-intolerance), direct first-party child-oriented article with substantive explanation (**S2 education only**, undated and no named author). [Hospital local contact](https://hospitals.aku.edu/kenya/contact-us) verifies Nairobi operating unit (3rd Parklands Avenue). Its parent university is international, and Kenyan legal incorporation/domicile of parent is **not** adjudicated. No original Kenyan prevalence denominator, genetic subgroup study, medical guideline, treatment adoption or rights approval. Apparent imprecise malabsorption/symptom timing language requires independent clinical audit. New org, one exact resource/context, one newly source-positive cell, two provenance rows and one search log; M49 identity reach unchanged because Kenya was already covered. All data **research_lead_only**.

## Individual quality audits of eight already linked records

| Area / condition / org | Tier | Exactly audited legacy URL | Evidence boundary |
|---|---|---|---|
| Brazil 076 diabetes `B-BR-SBD` | **S1** | [SBD 2026 detailed original chapter](https://diretriz.diabetes.org.br/manejo-do-diabetes-mellitus-tipo-2/) | Named authors, DOI and 7 Aug 2026 revision; methods/rights still unappraised |
| Belgium 056 coeliac `B-BE-VCV` | **S2** | [Dutch first-party education](https://coeliakie.be/vcv/wat-is-coeliakie) | Substantive educational content, not clinical guideline or national cohort |
| Portugal 620 hemochromatosis `B-PT-APH` | **S2** | [Portuguese hereditary HH education](https://aphemocromatose.org/a-hemocromatose/) | No checked HFE frequencies, diagnostic cutoffs or treatment claims |
| Netherlands 528 lactose `B-NL-NCV` | **S2** | [Dutch lactose/coeliac education](https://www.glutenvrij.nl/ziek-van-gluten/coeliakie/gerelateerde-aandoeningen/lactose-intolerantie) | Coeliac-associated secondary deficiency distinguished from primary congenital/genetic situations |
| Singapore 702 gout `B-SG-SSR` | **M** | [Historical guest lecture list](https://www.rheumatology.org.sg/feng-pao-hsii/lectures) | Lecture title/speaker only; no substantive original paper or transcript |
| USA 840 gout `B-US-ACR` | **M** | [Generic ACR guidelines catalogue](https://rheumatology.org/Practice-Quality/Clinical-Support/Clinical-Practice-Guidelines) | Separate 2020 original gout guideline is not this navigation page |
| UK 826 diabetes `B-GB-DUK` | **M** | [Diabetes UK position directory](https://www.diabetes.org.uk/about-us/about-the-charity/our-strategy/position-statements) | Separate 2026 prevention-policy original still requires exact context |
| Canada 124 diabetes `B-CA-DC` | **M** | [Diabetes Canada development-hosted guidelines catalogue](https://dev.diabetes.ca/for-professionals/full-guidelines) | Distinct 2018 base, 2024 and 2025 chapter updates; no synthetic 2026 edition |

Historical raw links remain for auditability, but **M does not qualify as substantive content**. Original PDF full text/rights not systematically reviewed, nor legally adopted or clinically approved. These classifications supplement, not replace, original context, caveats and historical provenance.

## Unresolved and prioritized next queue

1. **1179 untouched** across the matrix; prioritize original-language first-party **haemochromatosis, lactose, gout, coeliac** and rotate regions. Kenya coeliac/HH and Peru and Morocco substantive original routes remain plausible; avoid index-only sources and false geographic domicile claims.
2. **389/423 source links** remain unclassified. Resolve legacy M-only **Peru gout (SPR scheduled programme)** and **Morocco diabetes (SMEDIAN videotheque catalogue)** without converting planned sessions or titles to research. The four newly flagged M catalogues need exact original dated texts. For nonqualifying M raw cells, preserve history and distinguish effective qualified coverage from raw counts in reconciliation.
3. **175 searched-unlinked cells**, of which **171** lack active individual D2. Find truly independent native-language second paths or evidence-limited D3 escalation; never infer national absence.
4. **21 M49 local identity gaps**, particularly difficult sparse/restricted territories, remain evidence-limited, not fabricated. Five original issuer-country imprints still unknown: Panama HEARTS, Portuguese WGO lactose translation, Portuguese ESPGHAN coeliac translation, Chad OA Pub/JHC and South Sudan PAMJ; original colophon evidence only. Preserve 14 diversity/anti-generalization examples, 10 community/subnational and eight cross-border records with sovereignty and consent caveats.
5. Legal incorporation, local legal authority, data licensing, original publication methods/edition, clinical adoption, Indigenous governance/permissions and clinical claim review [issue #27](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/27) **remain separate and unapproved**. Do not infer individual genetics/medical risk from ethnicity, geography or ancestry.

## 20-slot raw discovery bars and run delta

```text
Local M49 identity   [██████████████████··] 227/248 (91.53%); 21 gaps     227 → 227 (Δ 0)
Area×condition raw   [████░░··············] positive 382/1736 (22.00%)    381 → 382 (Δ +1)
                      ░ searched-unlinked 175/1736 (10.08%)                 175 → 175 (Δ 0)
                      · untouched 1179/1736 (67.91%)                       1180 → 1179 (Δ −1)
Legend: █ linked research lead, ░ searched without eligible link, · untouched.
Per stream (out of 248): diabetes 110, hypertension 75, high_chol 48, gout 41,
 lactose 34, celiac 50, hemochromatosis 24.
```

**Re-use this exact short continuation prompt:** Continue Research Team B in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71. On branch `research/atlas-team-b-20261104`, read `docs/atlas/handoffs/team-b/RUNBOOK.md`, `QUEUE.md`, and the latest `CONTINUE.md`. Follow the queue and safeguards; research, commit, validate, read back, and checkpoint Team B-only changes. Keep PR #71 draft/unmerged; approve no clinical claims. End with quantified run deltas, remaining gaps, and the required labeled progress bar graphs. Repeat this prompt.
