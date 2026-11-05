# Team D — validation, 2026-11-05

Run `node validate.mjs` from this directory. CSV parser rejects inconsistent row widths and honors quoted commas and newlines. Checks unique IDs, edge composite uniqueness, node endpoints, internal code references, all seven condition keys, source-ledger closure, UN-versus-seed reconciliation, explicit missing WHO status fields and SEARO office/region boundary cases. Also checks Indonesia WPRO and US governance-pending protections.

Batch 1 expected: 36 nodes, 124 edges, 20 conditions, 249 retained candidate statuses, 248 official UN crosswalk rows, 1 seed exception, 12 verified region statuses, 237 not_verified region statuses, 10 office-presence records, 48 provenance URLs. The UN seed exception is code 158. Historical 2026-11-04 results are retained in Git history.

Structural validation does not establish clinical evidence quality, complete WHO governance or country-office coverage, or legal guideline adoption. The latest source review and retrieval limitations are in BATCH_2026-11-05.md.

Batch 2 expected: 177 edges, 65 verified region statuses, 184 not_verified and 50 provenance URLs; other table counts unchanged. Validator checks exactly 53 EURO assignments and specifically prevents inferring Liechtenstein's region from EEA participation.

Batch 3 expected: 223 edges, 111 verified region statuses, 138 not_verified and 51 provenance URLs. Other counts unchanged. Exactly 47 AFRO assignments required; Algeria recheck does not add a duplicate edge. Boundary cases now total 23.

Batch 4 expected: 260 edges; 148 verified region statuses; 101 not_verified; 52 provenance URLs; 38 source-name match rows (ten aliases). WPRO exactly 38; Indonesia transfer date preserved; ISO-only 158 unassigned; US-territory cautions retained. Other counts unchanged.

Batch 5 expected: 282 edges, 170 verified statuses, 79 not_verified, 75 provenance URLs and 21 individual-profile checks. Exactly 22 EMRO country/area assignments; 275 has independent explicit regional source and no WHO constitutional membership inference.
