# Team A change log

## 2026-11-04 — Batch 1
- Created `research/atlas-team-a-20261104` from `main` and [draft PR #68](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68).
- Staged 248 M49 geographic entries, including territories and Antarctica, with 3-character leading-zero keys using a documented community M49 transcription. Checked count against official UNSD; **row-level UN validation pending**.
- Added governmental health bodies for Australia, Brazil, Germany, Japan and South Africa, with own official pages and limitations.

## 2026-11-04 — Batch 2
- Added 14 more principal governmental health ministry/department authorities (Afghanistan, Albania, American Samoa, Andorra, Angola, Antigua and Barbuda, Azerbaijan, Argentina, Austria, Armenia, Barbados, Belgium, Bhutan, Botswana). Current total **19** confirmed institutional identities, **229** unknown authorities.
- Added **10** distinct governmental institutes, regulators, labs and health statistical agencies; total **29** body records.
- Added **9** sourced organizational relationship edges: Andorra 2, Germany 4, Argentina DEIS 1, Botswana 2. No inferred cross-area delegation relationships.
- Appended provenance to **26** entries; synchronized **248** country coverage ledger records.
- Documented current institutional changes, disputed territories, source limitations and deferred verification; added `validate.py` for offline data integrity.
- No clinical formula, website or user medical record changes. PR remains draft.

## 2026-11-04 — Batch 3
- Researched and committed **15 additional principal official-government health authorities**: Bahrain, Bangladesh, Belize, Cambodia, Canada, Chile, China, Colombia, Costa Rica, Croatia, Cyprus, Czechia, Benin, Denmark and Djibouti.
- Principal governmental institutions located now **34 of 248** M49 areas; **214** explicitly unresolved. All 248 geographic skeleton and coverage rows preserved.
- Captured June 3 2026 Danish governmental health/church portfolio reorganization from its own official sources; distinguished Chinese National Health Commission from separate disease-control administration, and Bangladesh ministry's two divisions.
- Added **11** distinct government health and disease surveillance, regulatory, health-statistics and biomedical institute bodies: now **55** total organizations and **14** officially sourced intra-government links.
- Expanded source provenance to **52** records; passed independent JavaScript audit of **248** geographic and coverage keys, 55 body shape/ID references, 14 edges, government URL fields and six UN region buckets. See `QA_REPORT.md`.
- Retained explicit jurisdiction uncertainty and original-language limitations; no medical application changes; PR remains draft.

## 2026-11-05 — Batch 4
- Added 20 government-source-identified principal health ministries/departments; 54 total and 194 unresolved.
- Added 6 separately classified government health agency/programme records (81 total), five sourced organizational links (19 total) and 26 government/UN provenance entries (78 total).
- Directly checked 21 UNSD M49 geography rows; new reconciliation ledger. Corrected 384 official name to Côte d’Ivoire from secondary mirror Ivory Coast in both country and coverage data. 227 rows still to verify.
- Kept special-territorial and ministerial-rename uncertainties explicit, including Cayman HSA transition, Algeria and DRC title issues. No inferred cross-area jurisdiction.
- Ran JavaScript CSV integrity mirror over complete prospective data, passed. Python validate.py not executed in this connected environment. No clinical or website code modified; PR remains draft.

## 2026-11-05 — full official geography comparison

Compared all 248 official UNSD overview rows with staged geography; added dated official snapshot and one-row correction ledger. Corrected 238 name to Falkland Islands (Malvinas). Preserved historical 21-row ledger. Executed existing Python validator successfully before and after comparison; added full-snapshot equality checks. Authority research unchanged.
