# Team D standalone continuation checkpoint — Batch 39 (2026-11-06)

## Authorized work and original acceptance criteria

Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
Draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70  
Branch: `research/atlas-team-d-20261104` (base `main`)  
Batch 39 substantive research + validation commit: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/f6ba340a5ee68e103b5221807744d49562703791

This checkpoint follows and preserves the independent full [Batch 38 checkpoint](CHECKPOINT_BATCH_38_2026-11-06.md). At the start of Batch 39 live PR #70 was OPEN / DRAFT / UNMERGED, starting head `d856df69b64420c852c4e00bc3558af1e2521faf`; the batch research commit above is the post-write head **before this documentation checkpoint commit**. Recheck the actual head at every restart; a documentation commit changes the branch tip.

Original assignment: `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`. Team D must document **all six WHO administrative region offices**, >=10 specific source-dated international/multicountry relationships, >=10 negative/boundary cases, M49-indexed coverage, typed time-aware graph provenance, and institutional references across `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`. Sourced evidence of institutional relationships is **not** a country's clinical guideline adoption, legally effective delegated remit, scientific validation or individualized medical advice.

**Hard restriction:** modify ONLY `docs/atlas/handoffs/team-d/`. Do not modify the website, `main`, any other team, clinical/calculator content or PR readiness. Do not merge or approve legal/clinical claims.

## Substantive direct-primary-source Batch 39 findings

Five newly committed `data/emrn_nca_national_remit_evidence_2026.csv` records `TD-NCA-REMIT-067–071`, citing three new `PROVENANCE.csv` URLs `TD-SRC-269–271`:

1. **Iceland**, exact original EMA directory identity `TD-EMRN-NCA-015`, M49 **352**, official Alþingi legislation `TD-SRC-269`: https://www.althingi.is/lagas/nuna/2020100.html . Direct-open official HTML displays consolidated Iceland Medicinal Products Act **100/2020** in its October **2026-10-01** collection. Article **6** describes Lyfjastofnun regulatory tasks and authorisation/safety/manufacturing-related responsibilities. Article **11** states a general marketing-authorisation requirement plus enumerated exceptions, including trials and certain traditional products. Claimed **2027-01-01** prospective amendment under Act 85/2026 is *not* automatically present law. These two articles were reviewed, **NOT the complete amended law, secondary rules, EEA interfaces or exact Team A identity**. Rows `067–068` are scoped `OFFICIAL_DATED_LEGAL_ARTICLE_SCOPE_ONLY`, not fully audited legal clearance.
2. **Latvia**, EMA identity `TD-EMRN-NCA-018`, M49 **428**, official Latvian legal portal `TD-SRC-270`: https://m.likumi.lv/ta/id/250658-zalu-valsts-agenturas-nolikums . Direct-open amended Cabinet Regulation **537** is labeled operative from **2022-07-08** on the page, distinct from its 2012 adoption and original **2013-01-01** effective date. Article **4** enumerates State Agency of Medicines evaluation/registration, pharmacovigilance, clinical-trial permissions, pharmaceutical licensing, GMP and EEA/international work-sharing. Rows `069–070` remain `OFFICIAL_DATED_LEGAL_ARTICLE_SCOPE_ONLY`; a general power to collaborate is **not** evidence of a signed bilateral MoU, precise accession, European Commission centralized grant or blanket medical advice. The complete Pharmaceutical Law, current amended delegations and exact Team A join remain unaudited.
3. **Sweden**, EMA identity `TD-EMRN-NCA-034`, M49 **752**, official central Government Offices `TD-SRC-271`: https://www.government.se/government-agencies/medical-products-agency-lakemedelsverket-lv/ . Direct official HTML describes Läkemedelsverket's regulation and surveillance of medicine development, manufacturing and sale and public-health remit. Row `071` is an `OFFICIAL_GOVERNMENT_ROLE_DESCRIPTION_ONLY`, not primary statute audit, case-specific grant or exact Team A join; agency-owned JavaScript-only role pages have **not** been upgraded into direct source review.

**Important source difference:** earlier Iceland `island.is` and Latvian agency `zva.gov.lv` access gave HTTP 403, and Sweden's agency HTML was JavaScript-only. Batch 39 uses *different, directly opened* official legislature/government URLs rather than falsely upgrading those inaccessible pages. These source descriptions are evidence of specified **functions**, not certification of each candidate's entire current legal jurisdiction or clinical acceptability. Four of the five new observations are **source-dated legal-article scope only**, one government description.

**Changed three exact research paths in substantive commit**: `PROVENANCE.csv` (+3), `data/emrn_nca_national_remit_evidence_2026.csv` (+5), `validate.mjs` (scoped 39th-batch assertions and counts); no graph membership or WHO mapping/office row was inferred or modified. After commit, exact remote blob readbacks: provenance `af641a2b2ad0db770b8896ea8e3d9be9472193e1`, regulator role data `f8a89ef1f7ac1bc2609b10762d9113f9c64f9c01`, validator `91f49f828d9d94253a17f1c8fb4628a36140ac21`.

## Current quantified coverage — separate evidence dimensions

| Measure | Positive/current evidence | Outstanding and interpretation |
|---|---:|---|
| Retained geography incl. documented ISO seed 158 | **249/249** | M49 coverage does not give WHO or national legal jurisdiction |
| WHO current administrative region by directly suitable source | **205/249 (82.3%)** | **44 unknown**; no parent-state inheritance, disease surveillance reporting geography or political inference |
| Contemporary affirmative April 2026 WHO survey office-host attestation | **105/249 (42.2%)** | **144 without equivalent affirmative current evidence**, **NOT proved to have no office** |
| Retained September 2024 WHO profile surveys | **46** | 2024 responses are not 2026 endorsements |
| Separate historic 2021–2022 office and services report | **228** | Historic services, not November 2026 physical offices |
| EMA directory national candidate identities | **34 across 30 areas** | Agency directory listing is not full statute or precise legal grant |
| Distinct EMA identities with directly opened first-party, source-scoped role evidence | **34/34 (100%)** | **71** individual role observations; some are scoped official excerpts and descriptions |
| Independent **complete current amended statute/delegation and exact Team A authority join** | **0/34** | **All 34 pending**; Malta contradictory official marketing authorisation descriptions remain |
| International network graph | **47 nodes / 617 typed time-qualified edges** | Not national clinical adoption or legal approval |
| Seven-condition institutional network references | **20** covering all **7** keys | No clinical appraisal of claims |
| Distinct provenance URLs | **271** | Primary signed network instruments and legal-effective evidence still incomplete |

## Validation and reconciliation

- Latest substantive research/validator commit `f6ba340a5ee68e103b5221807744d49562703791` is a successful lease-protected fast-forward from the independently verified starting head; three changed files were independently fetched from GitHub at that SHA and text was exactly equal to committed candidate bytes.
- Targeted robust CSV checks **PASS**: 271 unique URL and source IDs, 71 unique sequential `TD-NCA-REMIT-001–071` role IDs, 34 distinct EMA candidate IDs, original display-label and M49 equality for all 71, primary source inclusion in provenance, consistent source review-state flags.
- **Full checked-in structural validator PASS: 12,456 assertions across 39 GitHub-derived dependencies at the substantive commit**, reconstructed from **26 complete addition-only PR file patches plus 13 direct branch file readbacks** and run in a **read-only V8 JavaScript fs/assertion compatibility shim**. Observed 249 geographies, 205 current WHO assignments/44 unknown, 105 recent host positives, 47 nodes/617 typed time-aware edges, 20 condition observations, 34 EMA identities, 71 role records and 271 unique provenance URLs. No errors.
- **Limitations:** this is *not* a native `node docs/atlas/handoffs/team-d/validate.mjs` invocation, not GitHub Actions, not legal acceptance, not an independent all-national-statutes audit, not an original signed instrument audit, and not scientific or clinical signoff. Run native Node and configured CI in a complete checkout where possible. Documentation checkpoint commit/readbacks must be verified independently after writing.
- Before subsequent writes refetch draft PR #70 and SHA, preserve concurrent changes, use lease/strict expected head, modify only Team D directory and verify full new content by readback.

## Remaining research queue and unaltered source conflicts

1. **44 WHO region unknown** in `data/who_region_unresolved_queue.csv`. Direct current WHO administrative assignment required; special territory statuses, Liechtenstein no inherited EURO assumption, Indonesia transfer to WPRO **2025-05-23**, Algeria AFRO distinct from UN Northern Africa, pending United States WHO governance all remain subject to source-specific interpretation. Historical SIDS/WER/SPH/Pacific coverage is not current administrative region assignment.
2. **144 without affirmative April 2026 host survey**, not established absence. Individually test WHO host-vs-service-vs-multi-country-office vs liaison/focal/regional representation, contemporaneity, location, and four unmatched WHO office labels; keep 46 older 2024 profiles and 228 2021–22 history separate.
3. **34/34** full current consolidated amended national medicines authority remit/competency/original statute/delegation audits and **34/34** exact Team A authority joins still open despite complete source-scoped role review; Maltese two official contradictory national grant descriptions remain unresolved; EU EMA/Commission central-grant functions, national grant, inspections, trials ethics and procurement cannot collapse.
4. **PAHO** undated 13 versus dated 14 Eastern Caribbean office service areas (French Saint Martin distinct from Dutch Sint Maarten); Boisson January vs February 2021 start; WHO/EURO **SCI** North Macedonia accession day/document; **Africa CDC APPM** eight signed states with only Egypt named, 15 expressions of intent, 55 target; **IDF NAC** 22/23 count, **AOECS** 43+1+3 versus 41+6 plus affiliate/nonmembers, HI member/partner split, **Codex** observer original 1991 instrument, HEARTS 29 national-standard adopted vs 35 programme initiative counts and national pathway versions, ASEAN nonbinding implementation/membership and original signed instruments; A/B/C cross-team exact IDs and independent scientific review.
5. No current source from this batch established additional WHO admin assignments or physical April host-positive records. No date or network status is inferred from website modification, historical representation, cooperation description or reporting region.

## Simple progress bars (independent dimensions)

- WHO direct current region `████████████████░░░░` **205/249 — 82.3%**, 44 unresolved.
- WHO affirmative April 2026 office hosts `████████░░░░░░░░░░░░` **105/249 — 42.2%**, 144 lack equivalent evidence.
- EMA first-party scoped role descriptions `████████████████████` **34/34 — 100%**, no missing candidate source-described roles.
- Full current national statutory/delegation/legal joins `░░░░░░░░░░░░░░░░░░░░` **0/34 — 0%**, all 34 open.
- Acceptance is **NOT a blended percentage**; structural graph/coverage criteria do not certify legal, regulator, international signed-instrument, national clinical or scientific acceptance.

## Exact user reusable continuation prompt

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`, including its latest checkpoint and original acceptance criteria.

Verify live GitHub state and continue autonomously. Prioritize unresolved WHO assignments, office evidence, regulator authority, and international network relationships. Preserve all historical-versus-current distinctions, source conflicts, existing research, and scope restrictions. Commit, validate, and verify readbacks regularly. Modify only Team D's research directory. Do not modify the public website, main, or other teams; do not merge or mark the PR ready.

If unfinished, save a complete standalone GitHub checkpoint. End with a concise status, this same reusable continuation prompt, and updated visual progress bars for WHO regional assignments, verified office-host evidence, and remaining research gaps. Do not equate structural validation with legal or clinical approval.
```
