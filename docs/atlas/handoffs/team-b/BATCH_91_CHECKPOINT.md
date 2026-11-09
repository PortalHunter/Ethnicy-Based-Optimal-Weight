# Team B — standalone metadata-only reconciliation checkpoint, batch 91 (2026-11-06)

> **RESEARCH INCOMPLETE · DRAFT PR #71 · DO NOT MERGE · NO APPROVED CLINICAL CLAIMS**. Restartable without chat history. Read [RUNBOOK.md](RUNBOOK.md), [QUALITY_AND_COMPLETION.md](QUALITY_AND_COMPLETION.md), [QUEUE.md](QUEUE.md), then the exact CSVs, [CONTINUE.md](CONTINUE.md) and [CHECKPOINT.json](CHECKPOINT.json).

## Canonical GitHub state and immutable receipts

- Repository: [PortalHunter/Ethnicy-Based-Optimal-Weight](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight); [draft PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71), branch `research/atlas-team-b-20261104` versus `main`.
- Reconciliation **data commit:** [`56eb5532bb6356e38c9703ccbc2984504d6244f0`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/56eb5532bb6356e38c9703ccbc2984504d6244f0); immutable root tree `2db13111e6a8f44ddacc4e796f97229820353133`, **158 entries, truncated=false**. Final *documentation* head is the commit that includes this checkpoint and all latest status/handoff updates, to be read live.
- Changed files from preceding Batch 90 data: `data/condition_organizations.csv`, `data/publication_context.csv`, `data/coverage_by_area_condition.csv`, `PROVENANCE.csv`, `data/search_log.csv`, `data/research_quality_audit.csv`; created `data/metadata_only_reconciliation.csv`. All inside `docs/atlas/handoffs/team-b/`.
- Exact immutable SHA readback **13/13** (10 canonical CSV + unchanged `validate.mjs` + quality audit + new reconciliation CSV); no mismatches. Independent JS structural checks zero errors. **Actual unchanged Node CLI NOT RUN**: local `git ls-remote` cannot resolve github.com; no exact-byte runnable local reconstruction succeeded. CI at data commit: Population Phase 1 regression completed success, Calculator CI still in progress. No clinical, full manuscript, legal, statutory, publication rights or Indigenous consent validation.
- No modification to public website, main, formulas, calculators, patient records, Teams A/C/D, clinical claim issue #27, PR merge or review readiness. No existing provenance, contexts, searches or historical checkpoints deleted.

## What was reconciled and what remains M-only

Historical M rows were retained as verifiable event/index history but `source_review_status` changed to `metadata_only_reconciled_nonqualifying_B91`. The new separate reconciliation CSV establishes **quality-eligible** source count for the exact seven target cells, so no M-only record is presented as evidence of substantive research. Five entirely new exact original sources and first-party education publications are indexed separately, with publication context, original issuer, role, date, provenance, quality tier and `research_lead_only` state.

| Target area/stream | Organization | Resolution | Exact replacement or independent search route | Source-specific guardrail |
| --- | --- | --- | --- | --- |
| US 840 · diabetes | `B-US-ADA` | S1 | [Exact source/secondary route](https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diab) | ADA Professional Practice Committee original 2026 Diabetes Care diabetes diagnosis/classification chapter; journal volume 2026, online Dec 2025; clinical methods and permissions not independently appraised. |
| US 840 · hypertension | `B-US-AHA` | S1 | [Exact source/secondary route](https://doi.org/10.1161/CIR.0000000000001356) | Jones/Ferdinand/Taler 2025 AHA/ACC multisociety jointly developed original; 2026 version update not new guideline, no exclusive AHA authorship or clinical/legal adoption. |
| Canada 124 · coeliac | `B-CA-CC` | S1 | [Exact source/secondary route](https://www.celiac.ca/wp-content/uploads/2020/11/CCA-Gluten-Challenge-for-MDs-Final-2019.pdf) | CCA Professional Advisory Council lead Dominica Gidrewicz, 2019 original 3 pages visually inspected; 2020 upload path not edition; explicit copyright prohibition, sample limitations and HLA-not-diagnosis caveat. |
| Tanzania 834 · diabetes | `B-TZ-TDA` | S2 | [Exact source/secondary route](https://tdatz.or.tz/understand-diabetes.php?lang=en) | Own first-party educational type 1/2/gestational diabetes page; not original Tanzanian study or government guideline. |
| Norway 578 · diabetes | `B-NO-DF` | S2 | [Exact source/secondary route](https://www.diabetes.no/diabetes-type-2/) | Own substantive Norwegian type 2 patient education; no attribution of external research funding findings, clinical guidance or national prevalence. |
| Peru 604 · gout | `B-PE-SPR` | M pending | [Exact source/secondary route](https://congresoperuanodereumatologia2026.com/) | Original SPR 2025 scheduled gout talk remains M; 2026 December upcoming programme is not a completed substantive publication. Original source still unverified. |
| Morocco 504 · diabetes | `B-MA-SMEDIAN` | M pending | [Exact source/secondary route](https://smedian.net/videotheque-47e-congres/) | 47th congress video catalogue lists diabetes talk titles but full transcript/original research not inspected; SMEDIAN 2026 congress homepage alone stays M. |

**5 verified substantive replacement sources** (S1 3, S2 2; no H), **2 unresolved original-publication gaps**. Two additional original-site search logs added for Peruvian December 2026 *planned* talk and Moroccan videotheque catalogue. Original metadata-only event pages are still present in raw links for traceability, **not** deemed S1/S2/H and not licensed for scientific/clinical claims. No clinical practice instruction or copied paper text stored.

## Before versus after (exactly reconciled)

| Metric | Batch 90 | Batch 91 | Delta |
| --- | ---: | ---: | ---: |
| Local M49 identities | 227 / 248 | 227 / 248 | 0 |
| Verified organizations | 495 | 495 | 0 |
| Raw linked area-condition cells | 381 / 1,736 | 381 / 1,736 | 0 |
| Raw searched-unlinked cells | 175 | 175 | 0 |
| Untouched cells | 1,180 | 1,180 | 0 |
| Resource/context links | 417 | **422** | **+5** |
| Provenance | 1,127 | **1,132** | **+5** |
| Search logs | 653 | **655** | **+2** |
| Individually source-quality classified | 20 | **25** | **+5** |
| Source classifications S1/S2/H/M/U | 3/9/0/7/1 | **6/11/0/7/1** | +3/+2/0/0/0 |
| Source contexts not yet individually quality audited | 397 | 397 | 0 |
| Historical audited search-depth D1/D2/D3 | 3/4/0 | 3/4/0 | 0 |
| Original issuer-country unknown imprints | 5 | 5 | 0 |
| Independently qualified replacements among seven M target cells | 0 | **5** | +5 |
| Historically M-only target cells with **no qualified source** | 7 | **2** | −5 |
| Clinical claims approved | 0 | 0 | 0 |

**Raw source-positive 381 is NOT quality-qualified source-positive coverage**. The new reconciliation ledger shows the seven specifically audited historical M cases separately: 5 now have S1/S2 replacements; 2 have zero eligible substantive source. Of the other raw contexts, 397 are still individually unaudited and should not be silently promoted to evidence-qualified. Metrics per condition remain: diabetes 110, hypertension 75, high_chol 48, gout 41, lactose 33, celiac 50, hemochromatosis 24 (each / 248).

```text
M49 locally domiciled organization coverage [██████████████████··] 227/248 (91.53%); gaps 21
Raw M49-condition discovery coverage     [████░░··············] 381 linked / 175 searched-unlinked / 1180 untouched
                                                       21.95%          10.08%             67.97%
Metadata-only seven-cell audit           [██████████████░░░░░░] five newly qualified, two remain M-only
```

## Risks, exact remaining acceptance gaps and next actions

1. **Peru gout `B-PE-SPR`:** Original 2025 event programme and 2026 December scheduled congress entry remain metadata-only. Seek a completed original paper, substantive society-written patient page, educational transcript/film actually checked or independently attributable study. A speaker and lecture *title* are not authorship or society-endorsed clinical recommendations. Raw cell's `findings_count=1` is retained for historical structural join, but reconciliation's `quality_eligible_resources_in_cell=0` is authoritative.
2. **Morocco diabetes `B-MA-SMEDIAN`:** 2026 congress homepage and older videotheque recordings catalogue are no proof of a qualifying society-original paper. Check actual full original recording/transcript, third-party sponsorship, full author/issuer and reuse rights, or specific substantive authored education. `findings_count=1` is legacy M, quality eligible=0.
3. **Five qualified replacements:** inspect ADA and AHA complete guideline methods and version history; 2019 Canadian advisory full methods/revision and express no-reprint rights; TDA and Diabetesforbundet editorial sources and all medical/population percentages. No DOI or journal venue automatically licenses republication; HLA predisposition ≠ diagnosis, clinical advice outside Team B scope.
4. **Long-tail intake:** still **1,180 untouched cells**, **175 searched-unlinked** including 171 without independent D2 audit, 397 source-context quality audits pending, 21 M49 domicile identity gaps, five original-issuer-country unknowns: Panama HEARTS, Portuguese WGO lactose translation, Portuguese ESPGHAN coeliac translation, Chad OA Pub/JHC, South Sudan PAMJ. Do not fake local specialty bodies or infer national absence; prioritize low-coverage gout, lactose, coeliac and haemochromatosis. Protect 10 Indigenous/community and 8 cross-border records plus 14 anti-overgeneralization counterexamples.
5. **Disease interpretation:** familial hypercholesterolaemia ≠ high LDL; clinically diagnosed gout ≠ asymptomatic serum urate; hereditary haemochromatosis ≠ ferritin; lactase genotype ≠ symptomatic intolerance; coeliac HLA markers ≠ diagnosis. No ancestry-based individual risk, treatment, medical-device claims, or clinical release.

## Resumable workflow

Verify live PR #71 head/draft/open/unmerged, recent changed paths and workflows. Read RUNBOOK + QUALITY_AND_COMPLETION + QUEUE + this checkpoint + CONTINUE + CHECKPOINT, **all ten canonical CSVs**, unchanged `validate.mjs`, `data/research_quality_audit.csv`, and `data/metadata_only_reconciliation.csv`. Compute fresh metrics before each write. Verify metadata audit-ledger links, follow two M-only remaining first; next risk-tier source audits and D2 searches. Preserve old source traces but exclude M from eligible quality metrics. Run Node validation on a full local branch checkout or exact-byte reconstruction when executable; otherwise report actual Node CLI NOT RUN and independent JS. Make small Team B-only commits, nontruncated tree + exact blob readbacks, independently recheck final PR state, and save standalone checkpoint; do not merge.

**Reusable prompt:** Continue Research Team B in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71 on branch `research/atlas-team-b-20261104`. Read `docs/atlas/handoffs/team-b/RUNBOOK.md`, QUALITY_AND_COMPLETION.md, QUEUE.md and latest BATCH_91_CHECKPOINT.md; verify head/draft state. Resolve Peru/Morocco M-only evidence where possible, preserve historical provenance and quality classifications, progress other original accepted criteria. Commit, run available validation and immutable readbacks; update standalone GitHub checkpoint if incomplete. Change only Team B. Do not modify website/main, endorse clinical claims, or merge. Report current raw versus individually quality-audited metrics and progress bars.
