# Final integration QA

The versioned inputs, normalized exports and provenance were validated with `validate.py`. The checks cover M49 and ISO uniqueness, 1,736 coverage pairs, selector keys, source URLs and foreign keys, origin bounds, dates, role types, scoped identity joins, hierarchy cycles, source-country inference, claim preservation and release controls. The validator checks the 623 Team B contexts and the 15 Team C article contexts against their pinned coverage and attribution rules. The data retain 744 unverified discovery leads. The seven confirmed institutional joins carry their original source-backed match locators and bounded remit.

The independent check compared the English UNSD live table to all 248 area records fieldwise. Team E recorded 62 scoped source-inspection assertions, including the 35 claim references as documented in [data/provenance_review.csv](data/provenance_review.csv). Records carrying an inherited qualification without a Team E review assertion retain their upstream review level. Reference, abstract, portal and original-provision checks have different coverage and legal weight. No independent medical or legal release was granted.

## Adversarial fixtures

- mixed ancestry preserves separate entries · EXPECTED_SAFE_RESULT
- other / unlisted displayed without mapping · EXPECTED_SAFE_RESULT
- multiple conditions remain separate · EXPECTED_SAFE_RESULT
- missing condition yields no mapping · EXPECTED_SAFE_RESULT
- unknown ancestry · REJECTED
- unsupported condition · REJECTED
- invalid non-list selection · REJECTED
- private medical input field · REJECTED
- unauthorized clinical approval · REJECTED
- inferred self-identification · REJECTED
- missing edge source · REJECTED
- missing edge target · REJECTED
- unsupported relationship · REJECTED
- invalid statutory date · REJECTED
- reversed edge dates · REJECTED
- noncanonical ISO candidate substituted for M49 · REJECTED
- organization domicile substituted for source country · REJECTED
- disputed territory has no single authority · EXPECTED_SAFE_RESULT
- delegated area is retained with scope · EXPECTED_SAFE_RESULT
- duplicate translations stay distinct without identity evidence · EXPECTED_SAFE_RESULT
- incorrect translated-name merge · REJECTED
- competing current WHO memberships · REJECTED
- unidentified or incompletely appraised publication retained as evidence gap · EXPECTED_SAFE_RESULT
- WHO Indonesia date conflict retained with two events · EXPECTED_SAFE_RESULT
- PAHO institutional overlap retains typed roles · EXPECTED_SAFE_RESULT

The map and table were specified and the coverage view was tested as data. Accessibility testing against a deployed implementation remains a subsequent task.

The disposable SQLite export passed SQLite integrity checking and returned 1,736 rows from the joined map-condition view and 35 candidate records.
