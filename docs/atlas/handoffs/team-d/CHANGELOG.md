# Team D — Changelog

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
