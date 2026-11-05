## Batch 23 — 2026-11-05 — Greenland WHO/Europe cooperation evidence with strict time/legal separation

- Data/source/validator commit `5bb0e50dd3c911941d72c81f1b562323892e4258`: four Greenland records in `data/who_greenland_cooperation_2023_2024.csv`, one dated `m49:304 → WHO_EURO` cooperation link, three directly reviewed WHO URLs `TD-SRC-193–195`. All four edited files independently read back byte-identically. **47 nodes / 617 typed links / 195 unique URLs**; WHO administrative status 205/44 unchanged, no assumed regional membership or local adoption.
- Full checked-in structural validator **PASS** using read-only JS/Node-compatible shim from 52 Team D PR files and 32 CSV/provenance dependencies (two large files fetched separately). Not literal native Node, Actions, signed MoU instrument, legal/clinical appraisal.
- [Complete standalone Batch 23 checkpoint](CHECKPOINT_BATCH_23_2026-11-05.md). Only Team D research branch, PR #70 draft/open/unmerged.

---

## Batch 22 — 2026-11-05 — documented PAHO Caribbean representative succession, local programme evidence and explicit source uncertainty

- `7dbbe72e3d4fe763f9854d9b4caf75bd78170d07`: **12** PAHO assignment-source rows, five new country/area appointments with 2026-10-22 or 2026-10-29 effective dates plus seven older-term claims. Official notices disagree on **Jan vs Feb 2021** start of Boisson's former term; keep both.
- `05ebd29752117197f3d5cdc1f00f218e0ecbf7fc`: **four** Cayman STEPS/HEARTS and Dutch Sint Maarten laboratory-policy cooperation observations, each time-qualified, no binding adoption inferred.
- `b0f3e68a6b114b4584f43673ad6e4558fa8564bd`: **four** first-party PAHO news URLs `TD-SRC-189–192` bring source ledger to **192**, all indexed official excerpts with **HTTP 403 direct-open** caveat.
- `f8dc3c781cccec092aec8095c91cc53ecae4e6eb`: provenance count and new cross-file invariants. **Full structural replay PASS** in read-only JS shim across 50 PR files/31 data reads, not native Node/Actions or legal/clinical validation.
- Graph unchanged 47/616, WHO verified/unknown 205/44, 105 April office positives, 153 survey labels, 228 2021–22 historical service records. Team D-only; PR remains OPEN/DRAFT/UNMERGED. [Complete recovery checkpoint](CHECKPOINT_BATCH_22_2026-11-05.md).

---

## Batch 21 — 2026-11-05 — 2025 WHO reporting-region evidence and structural validator regression fix

- `ce3853587466f12366f8b9c606c375885204ef5f`: 15 individually M49-matched WHO 2025 epidemiological reporting table observations, from 2026 WER volume 101 issues 36–37. Includes 663 French Saint Martin and 534 Dutch Sint Maarten as different labels; zero 2026 WHO administrative region/status promotions.
- `0d352d66dfcb7ee737cfaca3c67352e7a31504d5`: first-party WER source `TD-SRC-188` appended with historical-year and publication-date precision caveats; total 188 unique provenance URLs.
- `b6cf6d66f3d19c675f142d57d20d85f0da96532b`: repaired obsolete `prov.length===170` Batch-18 validator condition, upgraded total to 188, added cross-file WER invariants, and moved JSON PASS output after final assertion.
- **Validation:** complete checked-in structural assertions PASS against 47 reconstructed GitHub PR files/29 data reads using read-only JavaScript shim; three edited core files exact-readback-confirmed. **No native Node, CI, clinical or legal validation.** PR #70 remains draft/unmerged, main/website/other teams untouched. [Batch 21 standalone checkpoint](CHECKPOINT_BATCH_21_2026-11-05.md).

---

## Batch 20 — 2026-11-05 — close older office-survey independent-source queue, not operational recency

- `85d6e1eb25cbf72457e0e3b4fda6d225d580480a` — added **17** first-party WHO/PAHO independent office source observations (`TD-OFFICE-CORROBORATION-030–046`) for the previously unchecked 17 September-2024 survey labels, including two explicitly non-M49 multicountry labels. The original 153 survey rows and 105 April-2026 direct-positive hosts did not change.
- `b1809f88403e0896f822a1a1061622ffb13dc2f0` — registered **17** distinct new URLs `TD-SRC-171–187`; total **187** unique primary-source URLs.
- `406846e114e5e40e3efd815b7b43bf80fdc00715` — amended `validate.mjs` to check **46/46** old-survey crosschecks, preserve 29 earlier cohorts and allow the two non-joined multi-country labels. 21 dated/25 undated source records.
- `6e1b6d4ba62494dce0ca0fcb4c173a4cb7d8e381` — added [standalone Batch 20 checkpoint](CHECKPOINT_BATCH_20_2026-11-05.md) with full recovery inventory, 17 per-source links, current caveats and original continuation prompt.
- **Validation:** read-only GitHub file re-fetch and 18 cross-file targeted assertions PASS. Full native Node/Actions or complete checked-in JS shim **NOT executed**; separate clinical/legal review NOT performed. No website/main/other-team writes; leave PR #70 draft/unmerged.

---

## 2026-11-05 — Batch 19: ten additional WHO independent office-survey checks

- `587083c1dbaab2b7e1f4ec8ec5b6ac2180933a08`: append 10 independent WHO checks (`020`–`029`) against existing retained September 2024 WHO office-survey labels. Eight undated site/biography pages and two date-specific events; no old survey timestamp or April 2026 affirmative office status changed.
- `879589fe19e322f7038f8f4674594dd507ac2b9e`: append 10 unique WHO-source provenance URLs (`TD-SRC-161`–`TD-SRC-170`) with evidence-date limits, source disputes, direct WHO 502 caveats.
- `cdba5ad40eb828728ed8a6fe41a69433d6344fe0`: adjust validator total and restrict old Batch 18 asserts to 010–019; add Batch 19 distinct-ID/code/date assertions. Full checked-in assertions **PASS** against 28 GitHub-derived CSVs in read-only JavaScript shim (**not** native Node or CI).
- State: 29/46 older WHO survey labels independently crosschecked, 17 pending; 170 sources; existing graph 47/616, WHO current assignments 205/44, WHO April 2026 affirmative hosts 105 unchanged.
- [Complete standalone Batch 19 checkpoint](CHECKPOINT_BATCH_19_2026-11-05.md). All writes Team D only; PR #70 remains draft/unmerged.

---

## 2026-11-05 — Batch 18: independent official WHO crosschecks for 10 stale survey profiles

- Research/data commit `dab5056c2aa3c84f5bd1adf22539ffb1b74ebd2d`: add 10 primary-source and date-qualified rows to `data/who_office_independent_checks_2026.csv`, ten unique URLs `TD-SRC-151`–`TD-SRC-160` to `PROVENANCE.csv`, and structural assertions. No April-2026 survey refresh inferred.
- Validator correction `0023c58ca6538d5733a5bc651d66888d1990f741`: update hardcoded provenance count to 160 after full-assertion run detected mismatch; complete 28-CSV and provenance full structural PASS in read-only JS shim (not native Node/Actions).
- Office independent checks now 19/46, source total 160; unchanged 47 nodes/616 edges, current regions 205/44, 105 affirmative April-2026 WHO hosts, 46 retained September 2024 survey entries and historical WHO office layers.
- Added standalone [Batch 18 checkpoint](CHECKPOINT_BATCH_18_2026-11-05.md). All writes Team D only; PR remains open/draft/unmerged.

---

## 2026-11-05 — Batch 17 machine-tag spelling correction and rerun

Corrected 13 source-layer values and one validator assertion from `COVERED_BY_BARBDOS_WHO_MCO_2019` to `COVERED_BY_BARBADOS_WHO_MCO_2019` and aligned standalone checkpoint, commit `95b8bd50759c95f39c4b4c5dd530dda2dc840e71`. Full checked-in validator **PASS again** with 28 GitHub-derived CSVs and provenance (150) via read-only JS shim; no changes to nodes 47, edges 616, current region 205/44 or historical counts 13/14. Native Node and CI still pending.

---

**Full structural regression executed and PASS:** checked-in `validate.mjs` against all 28 GitHub-derived Team D CSVs plus provenance in isolated JS with read-only shims, including new 13/14 assertions; no native Node CLI or CI claim. [Batch 17 standalone checkpoint](CHECKPOINT_BATCH_17_2026-11-05.md).

## 2026-11-05 — Batch 17: WHO 2019 Eastern Caribbean coverage and 2021 historical SIDS region heading

- Added `data/who_region_historical_sids_2021.csv` (13 unique WHO July 2021 AMRO-heading observations which remain unknown in the current 2026 status matrix) and `data/who_ecc_historical_scope_2019.csv` (14 distinct WHO 2019 Barbados/Eastern Caribbean host-or-service observations). Sources TD-SRC-149/150; provenance count 150.
- Validated exact M49 roster, source URLs, no duplicate IDs, 2021 month-only date precision, 2019 report year vs absent exact service start dates, and preserved 205/44 current WHO region statuses. Both source PDFs supplied extracted/indexed official text but screenshots returned HTTP403; therefore report image-level validation as pending.
- WHO 2019 Table 2 and PAHO 2026-08-24 both name French Saint Martin (663); WHO July 2021 SIDS-only grouping is selective and omission cannot establish service withdrawal. Separate Dutch Sint Maarten (534). No graph node/edge, current office, local clinical, law or site modification; prior 47 nodes/616 typed links remain.

---

## 2026-11-05 — Batch 16 SCI historical membership, meeting observers, and full structural regression

- Research/validator data commit `2225b8a883e5fa6dc017c19eec3a6b278238e2f7` added 30 as-of WHO/Europe SCI 2023/2024 snapshots, 30 typed graph edges, three directly read official WHO source URLs TD-SRC-146–148 and expanded validation checks. North Macedonia was a May 2023 meeting observer and joined as member during 10–12 April 2024 (exact day unknown). Five 2023 and two 2024 meeting observers remain **nonmembers** in this event-specific relation.
- Validator follow-up commit `cae759dfc5e05648fcc0f9db62b99dd73abce301` restricted the earlier June 2026 SCI-roster assertions to that specific as-of date; historical edges do not inflate June roster counts.
- Complete current checked-in validator executed with a read-only in-memory JS/FS shim against all 25 GitHub-derived CSVs and provenance: **PASS**; 47 nodes / 616 edges / 148 unique URLs / 53 SCI snapshots, 205 verified/44 unverified WHO region candidates. NOT native Node CLI or Actions, legal or clinical review.
- New fully standalone GitHub recovery handoff `CHECKPOINT_BATCH_16_2026-11-05.md`. Research branch only, PR #70 remains draft and unmerged.

---

## 2026-11-05 — Batch 15 source-date precision and cross-file audit

- Corrected the Montenegro WHO event's 2026-06-16 **event-start date** versus UNKNOWN page publication date; renamed the independent office-check column `source_published_on` to `source_evidence_date`, and amended provenance and validator assertions in commit `7b9cfd7c7d774ad9ce182cf490370a759ce7288b`.
- Fixed Batch 15 standalone checkpoint, restart prompt, batch notes and status so only three WHO office news articles are described as 2026-published; Montenegro is a dated event with unknown webpage publication date.
- Independent read-only targeted cross-file audit of 12 CSVs succeeded: 47 nodes, 586 edge composites without duplicates, 145 unique source URLs and IDs, all referenced node/provisional organization/geography/source IDs, 205 verified/44 unverified WHO regions, 46 older/106 April 2026 survey profiles, 228 historical observations, 23 SCI time-snapshots and nine WHO office checks. **Not** the full checked-in Node validator or GitHub Actions.

---

## 2026-11-05 — Batch 15 SCI and WHO office source audit

Data commit 163c3ed821b44692c6ce678bcb27c7745b7e1890 added one WHO Europe Small Countries Initiative node, 12 explicit June 2026 country-to-initiative links, 23 separated old video topic and 2026 roster observations, nine independently sourced WHO office checks, and 12 additional primary WHO URLs (TD-SRC-134–145). New totals: 47 nodes, 586 graph edges, 145 source URLs. No update to April 2026/September 2024 survey values or 2021–2022 historical observations. Post-commit GitHub readbacks and targeted data integrity checks pass; full native Node validation not executed. Standalone handoff: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/research/atlas-team-d-20261104/docs/atlas/handoffs/team-d/CHECKPOINT_BATCH_15_2026-11-05.md. PR #70 open/draft/unmerged; site/main/other teams not touched.

---

## 2026-11-05 — Batch 14: PAHO categorical governance and Caribbean cooperation

- Data and structural validation commit `6c86061d9b6742780aa8badf95a6a596d6aae1a7`; added `data/paho_governance_categories_2026.csv` (44 official PAHO category observations) and `data/paho_technical_cooperation_2026.csv` (21 PAHO/WHO office cooperation-area observations).
- Added nine formal PAHO *participating/associate/observer* relationships and 21 distinct `receives_technical_cooperation_from` typed links to existing office nodes. Graph now **46 nodes / 574 edges**; 35 original PAHO full-member edges and 225 historical WHO service edges preserved.
- Added TD-SRC-126–133 (eight distinct official PAHO indexed URLs; direct site 403 recorded), provenance now **133**. Added structural tests for category precision, exact 21 area/office joins and French Saint Martin versus Dutch Sint Maarten boundary.
- Before and after GitHub commit full structural tests PASS in read-only JS shim using 23 CSVs reconstructed from PR diff. Five GitHub direct readbacks byte-identical. **Not literal Node CLI/Actions or scientific/legal signoff.** No main, website, other-team or PR merge changes.

## Batch 13 — 2026-11-05 (source-stamped regulatory cooperation and WHO boundary)

- Data/validator commit `59ae6fcd79fefb1723d634f7c1091666c267fa4d`: added `data/regulatory_cooperation_evidence_2026.csv` (17 bilateral MoU self-reports, one eight-party regulatory MoU and one distinct UPA–Africa CDC partnership); added `data/who_region_boundary_evidence_2026.csv` (one Liechtenstein WHO membership boundary, no region assignment); appended TD-SRC-123–125 to provenance and extended structural validator.
- Corrective validator commit is included in final data SHA above; the earlier Batch 13 initial data commit `1809d1404899e5d06babb2d588eb2242e856b5aa` had two over-escaped regex patterns and was promptly fixed in `59ae6fcd79fefb1723d634f7c1091666c267fa4d`. **Do not validate against the intermediate commit.**
- Source distinction: EDA government development-host self-report vs Africa CDC published event-report corroboration of Egypt–Algeria and UPA–Africa CDC. WHO pan-European programme inclusion does not establish WHO European Region membership.
- 125 unique source URLs; institutional graph still 46/544 and WHO evidence temporal statuses unchanged. Full checked-in JS validator assertions PASS against 22 CSV inputs reconstructed from GitHub PR diff; no literal Node CLI/Actions or clinical/legal audit claimed. All changes inside Team D handoff.

---

## 2026-11-05 — Batch 12: first named APPM MoU signatory and ASEAN health governance

- Data and validator commit `f430ad45e83ae183656ba468648d2f0e4123f382`: added `AFRICA_APPM` node; `AFRICA_APPM → AFRICA_CDC` `operated_by` relationship and dated `m49:818 → AFRICA_APPM` `signed_participation_mou` relationship, with the official June 15 Egypt source. No other country programme edge inferred from Africa CDC's eight-signatory aggregate.
- Added `data/asean_health_governance_2026.csv`: six documented ASEAN sector governance and workstream roles (two meetings; four clusters, explicitly not national legal mandates), with 2026–2030 agenda labelling kept separate from country implementation. Avoid stale ASEAN web copy referring to ten states.
- New original provenance TD-SRC-119–122 (**122 unique URLs**). Graph **46 nodes / 544 typed edges**. The prior 205 verified / 44 unresolved WHO regions, 105 April 2026 offices, 46 retained September 2024 office records, 228 historical 2021–2022 WHO service records, 34 EMA candidate agencies, 24 PAHO catalog rows and five aggregate programme facts remain unchanged.
- Checked-in validator full structural assertions **PASS** against 19 GitHub files and one newly authored fixture; independently read back all five changed paths from GitHub after commit. No literal Node CLI or Actions result, medical appraisal, national regulator mandate, or clinical deployment. Draft PR stays unmerged.

---

## 2026-11-05 — Batch 11: PAHO pathway catalog and bounded programme participation

- Data commit `e3959112ad1095c7f0e0c202d323cd3190a1670e`: added `data/hearts_pathway_catalog_2026.csv` (**24** dated PAHO entries; two regional templates, 22 local; three Mexico state labels, two territory labels, one unjoined ambiguous source name) and `data/cross_border_programme_evidence_2026.csv` (**5** aggregate observations: Africa CDC APPM 8 signed/15 intent/55 target; PAHO HEARTS v1 29 adopted national standards vs 35 undated initiative commitments). Added four new source URLs (TD-SRC-115–118) and validation assertions.
- Correction commit `e430702b371b9393603c94f7fc40f9712f61d378`: removed accidental duplicate TD-SRC-119 URL, preserving the existing provenance TD-SRC-024. The validator's uniqueness rule flagged it and full rerun **PASS** on 19 GitHub-hosted CSVs with a read-only JS shim. Unique sources **118**, graph unchanged 45 nodes/542 edges; 2023 WHO history and April 2026 WHO surveys not modified.
- This documentation/checkpoint update records the remaining legal, identity, national adoption and 44/46/144 WHO gaps. No website, main, other team data, medical recommendation, issue closure or PR merge.

---

## 2026-11-05 — Complete standalone Team D continuation checkpoint

- Independently fetched all 17 validator input CSVs at `43b1743a1d01be065530c0a0c2b1996fcc9a5986` and executed stored structural assertions in an isolated JS read-only-file environment: PASS. Re-fetched all 13 touched paths from GitHub and confirmed diff limited to Team D; recorded exact data counts, dated source caveats, remaining priorities and copyable restart prompt in `CHECKPOINT_2026-11-05.md`. PR #70 remains an unmerged draft.

## 2026-11-05 — Batch 10: EMA/EMRN provisional agency identity roster

- Saved 34 EMA-listed human-medicines competent-authority identity candidates in 30 EU/EEA areas, preserving multi-agency distinctions and full source provenance TD-SRC-114. All exact Team A identity joins and individual legal remits remain pending. No graph edges added; source/structural checks updated.

## 2026-11-05 — Batch 9 validator correction

- Replaced overly narrow ordinary-office-only assertion with the WHO source's four evidenced office-type categories. Other boundary/region and historical/current distinctions retained.
- Executed the full checked-in structural assertions using the GitHub-hosted 16 CSV inputs in an isolated JavaScript runtime with a read-only filesystem shim: PASS. This is not a claim that the Node CLI or GitHub Actions executed `validate.mjs`. Recorded in VALIDATION.md.

## 2026-11-05 — Batch 9: full time-qualified WHO office survey roster

- Transcribed 153 entries from the official WHO 2026 reporting-year table; preserved 106 April 2026 / 46 September 2024 / one unavailable distinction. Explicitly retained four non-one-to-one M49 labels without synthetic joins.
- Added 74 new April 2026 positive office-host attestations and 74 typed audit records: now 105 current office hosts and 95 typed April2026 external audits plus 10 existing SEARO assertions. Updated validator and all handoffs, without modifying historical WHO 2023 records or regional/governance metadata.
- Source TD-SRC-113, https://data.who.int/dashboards/country-presence/country-office/office-profile-survey-reporting-year/ (checked 2026-11-05). This is office-head survey metadata, not legal or clinical authorization.

## 2026-11-05 — Batch 8: current WHO office presence expansion

- Added 21 direct April 2026 WHO office survey attestations to the separate current office table, plus 21 typed source-by-source audit records. WHO regional assignments unchanged; historical 2021–2022 office/service report remains separate.
- Added official WHO survey metadata source TD-SRC-113; updated structural validator for 31 current offices, 21 new audits, and 113 provenance entries. Remaining 218 area candidates are not treated as office-absent.
- Source https://data.who.int/dashboards/country-presence/country-office/office-profile-survey-reporting-year/ (checked 2026-11-05). Commit SHA must be obtained from GitHub after this batch is saved.

## 2026-11-05 — Batch 7: WHO country-office service topology (historical)

- Read the official WHO 2023 Country Presence Report, Annexes 2–4. The report states its coverage period is January 2021–December 2022; all rows are historical and exact office opening/closure dates are not imputed.
- Added 154 Annex 2 office-location labels: 153 M49-indexed entries plus Kosovo retained without an inferred M49 code. Kept the Cyprus January 2023 opening date and Israel host-agreement qualification.
- Added 42 Annex 3 office coverage relationships and 32 Annex 4 regional-office focal-point relationships. Focal-point coverage is not modeled as physical office presence or membership. MCO qualification does not mean an area lacks a local office.
- Added nine office nodes and 225 unique M49-indexed edges (two source labels collapse onto the shared Bonaire–Sint Eustatius–Saba M49 code 535); total graph now 45 nodes / 542 edges. Provenance is source 112. Current office presence remains ten records; historical report rows do not establish 2026 status.
- Updated validator, handoff, gap and boundary documentation. No claims about legal membership, adoption of guidance, clinical evidence or personalized recommendations.
- Batch data commit: `a757ec3979d3bce2449e5e9cd6be4c60c8fb6561`; follow-up commit `4869b0486541a5b9f45679cc9ee7ffd0f46da31a` restored the earlier batch log while retaining Batch 7. Verify newer branch head on every resume.

# Team D — Changelog

## 2026-11-05 — Continuation checkpoint after batches4–6

- Research commits: WPRO `b532c3f1da839e6adb9e18798e42152cb86b75ca`; EMRO `76e566dc189882934af3231ffd1f313ce36a3c5d`; AMRO `6f1573cd64fa1343ab84a4a0a358b662f1736f63`.
- Added44 explicit unresolved-area queue records, one conflict-only CPCD source, five boundary cases and expanded validator.
- Current totals 317 edges,205 verified/44 unknown region statuses,111 provenance URLs. No main or calculator edits.


## 2026-11-05 — Batch 6: WHO Americas country profiles

- Independently verified all 35 PAHO state candidates against explicit WHO region/M49 profile metadata.
- Added 35 region statuses/edges, 35 individual audit records and 35 provenance URLs.
- Totals: 317 edges, 205 verified statuses, 44 not_verified, 110 provenance URLs; 56 profile audit records.


## 2026-11-05 — Batch 5: Eastern Mediterranean

- Verified 21 individual WHO country profiles and a separate explicit operational-area source for 275; 22 new statuses/edges.
- Added 21 metadata audit records and 23 provenance URLs. No clinical statistics extracted.
- Totals: 282 edges, 170 verified statuses, 79 not_verified, 75 provenance URLs.


## 2026-11-05 — Batch 4: WHO Western Pacific

- Verified all 38 countries/areas; added 37 statuses and 37 region edges. Indonesia effective date preserved.
- Added 38 source-name match records (28 exact/ten explicit aliases); retained US-territory governance notices.
- Totals: 260 edges, 148 verified statuses, 101 not_verified, 52 provenance URLs.


## 2026-11-05 — Final continuation checkpoint

- Verified substantive commits: batch 1 `5d687ba9d0633354bc5e10d878a76f6e53c2cb28`; batch 2 `8b44fae4fa8472e5b076a166651c699c1cde9752`; batch 3 `8b5e40bc2cfb68ca972d77f59f54d14063b0c20c`.
- Added standalone CONTINUATION_PROMPT.md and updated draft PR metadata; no merge.
- Final local validator passed with 223 edges, 111 verified region statuses, 138 unknowns and 51 source URLs. GitHub readback verification is recorded in the final response.


## 2026-11-05 — Batch 3: WHO African Region

- Verified all 47 countries on current official AFRO directory; added 46 assignments and 46 region edges, rechecked Algeria.
- Documented three explicit country-name aliases. No geography-to-membership or profile-to-office inference.
- Totals: 223 edges, 111 verified region statuses, 138 not_verified, 51 provenance URLs.


## 2026-11-05 — Batch 2: WHO Europe

- Verified 53 current regional assignments by exact UN name matching; added 53 region edges.
- Corroborated region roster with WHO Gateway. Recorded 33-office/53-country boundary without country-level office inference.
- Totals: 177 edges, 65 verified region statuses, 184 not_verified, 50 provenance URLs.


## 2026-11-05 — Batch 1: UN reconciliation and SEARO

- Added 248 official UN crosswalk records and one explicit ISO candidate exception (158), preserving all 249 prior status IDs.
- Verified nine new WHO region assignments and added ten region edges; rechecked Timor-Leste. Twelve region statuses verified, 237 unknown.
- Added ten separate WHO office presence records. Added three provenance URLs and refreshed UN source 012.
- Recorded stale WHO department roster conflict; did not promote inaccessible EMRO search extracts.
- Source, uncertainty and structural validation details: BATCH_2026-11-05.md and VALIDATION.md.


## 2026-11-04 — Research Team D atlas created and committed to dedicated draft PR #70

- Created isolated branch `research/atlas-team-d-20261104` from `main`; opened draft pull request before expansive data collection.
- Documented all six WHO regions, Indonesia's 2025-05-23 transition and Algeria's WHO-versus-UN regional mismatch; distinguished PAHO's institutional dual role from sovereign membership.
- Added formal PAHO 35 Member State records, all 11 dated ASEAN members (including Timor-Leste 2025-10-26), and 30 participants in the narrowly scoped ECDC EU-IBD infectious-surveillance network; no ungrounded inferred blanket regulator links.
- Added 12 individually named society-level membership/affiliation records, marked with provisional Team B joining IDs; independently confirmed PASCAR's ISH affiliate relationship.
- Added international condition networks and programmes covering all seven application keys, including examples in Africa, the Eastern Mediterranean, the Americas, the Western Pacific, South Asia and Europe. Documented programme existence is **not clinical evidence appraisal or legal adoption**.
- Created time-aware graph ontology, 14 network overlap cases, 18 negative/boundary cases, 20 coverage gaps, 45-source provenance ledger and reproducibility method.
- Updated the source- and coverage-limited **249 ISO numeric geographic candidate** index. WHO region values individually verified for only Algeria, Indonesia and Timor-Leste; remaining 246 are explicitly unknown. Numeric candidate list must be reconciled against official UN M49.
- Conducted machine-readable integrity checks: all seven keys present; no orphan network references, unmatched candidate codes, duplicate composite edges or missing relationship-source URLs.
- **Final snapshot:** 36 network nodes, 114 typed edges, 20 condition references, 249 geographic candidates, 20 gaps, 14 overlap cases, 45 source URLs.
- No edits to `main`, other teams' folders, public health content, or issue states. PR remains in draft pending maintainer review.
