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
