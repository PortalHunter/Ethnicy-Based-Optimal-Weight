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

## 2026-11-05 — complex authority and access-failure batch

Added six body records: gov-070-001 through gov-070-005 and gov-140-001; two internal structural edges; 12 source provenance entries. Coverage now 56 identified / 192 unresolved; 87 bodies; 21 relationships; 91 provenance records. Bosnia state coordination distinguished from entity/cantonal/district powers. CAR identity corroborated while old homepage currency is qualified. Chad 403, Brcko timeout, Myanmar competing/title questions and Comoros template concerns retained without guessed resolutions. Rewrote current summary files and added standalone CONTINUE.md. Python structural and boundary checks run; no clinical or main changes.

## 2026-11-05 — five-area integration batch

## Current batch checkpoint — 2026-11-05

This section supersedes earlier coverage counts: **61 identified areas / 187 unresolved**, 93 health bodies, 22 sourced relationships, 111 provenance rows and 248 coverage rows. Official geography remains 248/248 compared. Provenance includes failed retrievals; 111 is not a count of verified sources.

Added gov-233-001 Estonia, gov-300-001 Greece, gov-332-001 Haiti, gov-500-001 Montserrat, gov-702-001 Singapore and gov-500-002 Montserrat Environmental Health Department; one ministry structural relationship. The standalone Montserrat source check is now integrated. All six records preserve identity/mandate limits and unknown effective dates; no parent-country delegation inferred. Fourteen access/placeholder/security failures were recorded with explicit unverified states.

Python validate.py passed against the complete datasets. Pending sources include Fiji, Finland, Ethiopia, Ghana, Gambia, Guyana, Jamaica, Guam, France, Ireland, Italy, Malaysia, Rwanda and Zambia; no failed retrieval is evidence of an absent authority. Continue remaining unknown areas in ascending M49 order, seeking alternate official sources for blocked pages. Legal/devolved/rename requirements remain in GAPS.md. The commit containing this section is the batch checkpoint; resolve exact SHA from live branch. Prior parent: 61ae4d2fdfa7e818e7560d43cae28162ca0fb902.


## 2026-11-05 — Batch 8: 12 principal authorities plus 2 government health bodies

- Used current government-issued sources to identify Fiji 242, Finland 246, France 250, The Gambia 270, Ghana 288, Kiribati 296, Grenada 308, Guatemala 320, Guyana 328, Ireland 372, Italy 380 and Jamaica 388. Added gov-270-002 and gov-288-002 and two genuinely sourced intra-government edges. A prior failed URL was not overwritten as proof of absence.
- Full aligned data committed as `413def180d3982ddae65f7cacf453017e389c5c2` and independently fetched back. 73 identified / 175 unknown, 107 bodies, 24 relationships, 136 provenance rows, and 248 M49+coverage rows. All rows matched dated official UN geography snapshot.
- Executed quote-aware full CSV structural checks and 17 special-area sentinels; did not execute Python against new commit due outbound Git clone restriction (previous batch Python pass recorded separately). Staged research only; main/public site/clinical content unchanged.

## 2026-11-05 — Batch 9: 7 governmental health authorities and 4 institutional units

Seven official-government identity and limited mandate records added: 238 Falkland Islands (Malvinas) gov-238-001; 316 Guam gov-316-001; 340 Honduras gov-340-001; 360 Indonesia gov-360-001; 376 Israel gov-376-001; 398 Kazakhstan gov-398-001; 404 Kenya gov-404-001. Four additional internal government health units: gov-238-002 Falkland Islands Public Health Unit; gov-316-002 Guam Division of Public Health; gov-404-002 Kenya State Department for Medical Services; gov-404-003 Kenya State Department for Public Health and Professional Standards. Added four government-source structural edges. Every edited row has a country M49 key, date, original-language name where supplied, source URL/issuer and territorial/devolution limitations. No inferred cross-area parent. Data commit `f0d289e1e3660212b8afd9b60c07e6450853dcfc` independently fetched and validated against official 248-row M49 snapshot. Totals: **80 identified / 168 unknown**, 118 bodies, 28 edges, 154 provenance, 248 geography/coverage. Quote-aware JS validator PASS and 17 special jurisdiction sentinels PASS; no Batch 9 Python execution was claimed. Public website, main, calculator and clinical guidance unchanged; PR remains draft.
