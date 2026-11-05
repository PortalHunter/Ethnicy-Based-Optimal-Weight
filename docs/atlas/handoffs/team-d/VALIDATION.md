## Batch 9 structural verification (2026-11-05)

Validator now checks 153 source-labeled office survey records; 106 latest April 2026 / 46 latest September 2024 / 1 unavailable; four deliberately unmatched area-to-M49 joins; 105 distinct current affirmative office codes, 95 typed individual 2026 audit records, ten retained SEARO records. All 105 current office-host codes must appear among the official 248 UN M49 codes and among the 106 WHO April 2026 survey rows, without status contradictions. This does not turn unobserved office coverage into negative facts. The earlier historical WHO 2023 data and graph constraints remain unchanged. This GitHub connector session performed its own runtime structural tests and GitHub readback. It does **not** assert local execution of `node validate.mjs` or that GitHub Actions have succeeded.

## Batch 8 structural-check delta (2026-11-05)

Data invariants added to validate.mjs: current office table 31 distinct M49 codes, preserves all 10 SEARO office attestations; 21 April 2026 WHO country-office survey audits with valid M49 and matching separately source-backed region/status; new official source TD-SRC-113 exists in provenance; total provenance 113. Other fixed baseline invariants remain 45 nodes, 542 edges, 205 verified regions, 44 unresolved and 228 historical WHO 2023 service records. **The validator script was updated and reviewed; a local `node validate.mjs` execution is not claimed by this connector-only session.** GitHub readback and connector-side structural checks are recorded in the final checkpoint.

# Team D — validation, 2026-11-05

Run `node validate.mjs` from this directory. CSV parser rejects inconsistent row widths and honors quoted commas and newlines. Checks unique IDs, edge composite uniqueness, node endpoints, internal code references, all seven condition keys, source-ledger closure, UN-versus-seed reconciliation, explicit missing WHO status fields and SEARO office/region boundary cases. Also checks Indonesia WPRO and US governance-pending protections.

Batch 1 expected: 36 nodes, 124 edges, 20 conditions, 249 retained candidate statuses, 248 official UN crosswalk rows, 1 seed exception, 12 verified region statuses, 237 not_verified region statuses, 10 office-presence records, 48 provenance URLs. The UN seed exception is code 158. Historical 2026-11-04 results are retained in Git history.

Structural validation does not establish clinical evidence quality, complete WHO governance or country-office coverage, or legal guideline adoption. The latest source review and retrieval limitations are in BATCH_2026-11-05.md.

Batch 2 expected: 177 edges, 65 verified region statuses, 184 not_verified and 50 provenance URLs; other table counts unchanged. Validator checks exactly 53 EURO assignments and specifically prevents inferring Liechtenstein's region from EEA participation.

Batch 3 expected: 223 edges, 111 verified region statuses, 138 not_verified and 51 provenance URLs. Other counts unchanged. Exactly 47 AFRO assignments required; Algeria recheck does not add a duplicate edge. Boundary cases now total 23.

Batch 4 expected: 260 edges; 148 verified region statuses; 101 not_verified; 52 provenance URLs; 38 source-name match rows (ten aliases). WPRO exactly 38; Indonesia transfer date preserved; ISO-only 158 unassigned; US-territory cautions retained. Other counts unchanged.

Batch 5 expected: 282 edges, 170 verified statuses, 79 not_verified, 75 provenance URLs and 21 individual-profile checks. Exactly 22 EMRO country/area assignments; 275 has independent explicit regional source and no WHO constitutional membership inference.

Batch 6 expected: 317 edges; 205 verified statuses; 44 not_verified; 110 sources; 56 individual-profile checks (21 EMRO plus35 AMRO). All 35 Americas region records require matching individual WHO profile audit record. US governance remains pending.

Final handoff after batch6: 317 edges;205 verified statuses;44 not_verified;111 source URLs;44 unresolved queue rows exactly matching unknown status IDs;56 WHO profile audit records;38 WPRO name matches. Boundary cases total28. Queue reasons do not assert absent relationships.


## Batch 7 expected results — WHO office topology

- 45 nodes; 542 relationships; 112 provenance URLs; 228 historical rows in `who_office_coverage_2023.csv` (154 Annex 2 source labels, 42 MCO coverage, 32 focal-point coverage).
- 153 Annex 2 rows have a candidate M49 join; Kosovo is retained without an M49 join. One Cyprus row records Jan 2023 establishment; Israel host-agreement uncertainty retained.
- Structural validator checks source closure, unique historical row IDs, M49-indexed endpoints, office-node endpoints, exact type counts and separation of current ten SEARO office attestations from historical 2023 report data.
- The historical batch does not establish current 2026 office presence or country/area absences. Regional focal point is not physical office; MCO coverage is not WHO constitutional membership.
