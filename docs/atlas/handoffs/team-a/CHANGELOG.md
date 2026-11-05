## 2026-11-05 — Batch 22 six official ministry identities and independent immutable six-file QA

- Committed DATA **`1b861eeece12671b88ae242b387cee2eb26ad3b3`**: resolved **728 South Sudan, 740 Suriname, 748 Eswatini, 762 Tajikistan, 764 Thailand, 768 Togo**, adding six separate body rows and **19** official-source checks, with **0 new unsupported organizational edges**. Only `data/countries.csv`, `data/government_health_bodies.csv`, `data/country_coverage.csv`, `PROVENANCE.csv` changed.
- Verified **248/248** exact dated M49 geographies; **142 identified/106 explicit unknown**, **197** government bodies, **44** source-limited same-area relationships, **319** provenance entries, **248** coverage records, **0** inferred cross-area parent keys. Source caveats: SSD old/new personnel conflict and regulator under Cabinet Affairs; SUR merged portfolio vs legacy page; SWZ old naming; TJK official website spam and latest ADLIA version pending; THA historic/current mixed and source 403; TGO 2023 commune-law **proposal** and 2024 cabinet portfolio distinct from current 2026 ministry name.
- Independent exact-SHA six CSV quote-aware readback and sensitive sentinel references **PASS structural**. Python `validate.py` **NOT RUN** owing GitHub DNS failure in container, no complete legal/clinical verification. [Full standalone Batch22 checkpoint](CHECKPOINT_20261105_BATCH22.md). PR OPEN DRAFT/unmerged; website and all other teams unaffected.

---

## 2026-11-05 — Batch 21 government source and current enacted law research

- Immutable audited DATA commit **`7fca741cdf7f705d572f907d342153269750b456`** resolves principal identities **703 Slovakia `gov-703-001`**, **704 Viet Nam `gov-704-001`**, **705 Slovenia `gov-705-001`**, **716 Zimbabwe `gov-716-001`**. Added two Vietnamese decree-listed **internal, nonautonomous** units `gov-704-002` Cục Phòng bệnh and `gov-704-003` Cục Quản lý Dược, two 313/2026 Article3 **effective Aug18 2026** listing links, 12 original-government/parliamentary official provenance rows. Changed only five Team A data CSVs.
- New validated totals **248** official geographies, **136** identities found / **112** explicit unknown, **191** body entries, **44** institutional links, **300** source checks, **248** aligned coverage, **0** speculative M49 parent keys. Critical qualifications: Slovakia Slov-Lex HTML **informative not binding legal PDF**; Vietnam 313/2026 supersedes 42/2025, authentic signed PDF unexamined, separate delegated unit/local law pending; Slovenia October 2026 proposed accessibility legislation **not enacted**; Zimbabwe Parliament and Embassy confirm identity not all legal competences. Old batches retained.
- Independently re-fetched immutable six-CSV DATA SHA and quote-aware QA **PASS structural with 46 territorial/complex sentinel records**. Repository Python `validate.py` **NOT RUN** (GitHub DNS). [Complete standalone Batch21 checkpoint](CHECKPOINT_20261105_BATCH21.md). PR open DRAFT/unmerged; website, calculator, other teams and clinical output untouched.

---

## 2026-11-05 — Team A Batch 20 four additional official government authority identities

- **Immutable independently audited data commit `f0069dc868ba619302343c651161ca032c63d110`** adds four principals: **686 Senegal `gov-686-001`**, **688 Serbia `gov-688-001`**, **690 Seychelles `gov-690-001`**, **694 Sierra Leone `gov-694-001`**, plus distinct Seychelles public health body `gov-690-002` and **one limited ministry component-listing-only same-area relation**. Appended **13** provenance checks recording independently issuing sources and historical/current conflicts. Changed exactly five normalized Team A CSV files; pre-existing records untouched.
- Now **248** exact official M49 geographies, **132** identities found / **116** unknown (not nonexistent), **185** bodies, **42** cited internal edges, **288** provenance sources, **248** ledgers, **0** speculative cross-M49 parents. Source limitations: Senegal same presidential Decree 1130 mirrored on different websites vs unresolved service law; Serbia provincial/contested effective scope; Seychelles future dated Dec1 2026 personnel entry and conflicting care-agency vs department; Sierra Leone historic *Health and Sanitation* on DHSE. Identity != audited contemporary legal mandate.
- Independent exact-SHA six-file geography/body/relationship/provenance mirror audit **PASS** with **40** sensitive area controls; Python `validate.py` **NOT RUN** due local GitHub DNS. [Complete standalone Batch 20 recovery](CHECKPOINT_20261105_BATCH20.md). Only Team A handoff folder; PR remains DRAFT/unmerged; website/clinical outputs untouched.

---

## 2026-11-05 — Team A Batch 19 source-backed governmental identity additions

- Independently read-back/structurally audited DATA SHA **`0d7c71823fd4ad552cce2a77122f197f545b4ec0`**: three new principals **662 Saint Lucia** `gov-662-001`, **674 San Marino** `gov-674-001`, **682 Saudi Arabia** `gov-682-001`; two additional distinct bodies **Saint Lucia Bureau of Health** internal department `gov-662-002` and **San Marino ISS** autonomous public institution `gov-674-002`; one limited `gov-662-001` → `gov-662-002` official department-listing relation; **9** separate provenance records including explicit site timeout/HTTP403.
- Exact data counts **248** official M49 geographic skeletons, **128/248** identified / **120** explicitly unresolved, **180** separate government bodies, **41** supported intra-area relations, **275** dated provenance checks, **248** coverage ledger, **0** speculative legal parent-area assignments. Only five normalized Team A CSV files changed; prior historical/source/issuer limitations preserved.
- San Marino ISS legal source currently **official legislative index, not audited full act**; Saudi Arabic+English are SAME issuer; Saint Lucia current ministry directory header differs historic URL slug. Full statute/rename/agency roles pending. Independently refetched six files exact-SHA structural **PASS**, local Python validator **NOT RUN** (GitHub DNS). Complete [Batch 19 standalone checkpoint](CHECKPOINT_20261105_BATCH19.md), PR DRAFT/unmerged, website untouched.

---

## 2026-11-05 — Team A Batch 18 governmental health authorities

- **DATA SHA `6329a090951f5e6fa518fdbfec15764e77bff94e`**: five new official-source primary identity entries **626 Timor-Leste** `gov-626-001`, **630 Puerto Rico** `gov-630-001`, **634 Qatar** `gov-634-001`, **642 Romania** `gov-642-001`, **646 Rwanda** `gov-646-001`; distinct Timor-Leste **INSP-TL** `gov-626-002` and source-limited ministerial dependency listing link. **13** issuer-specific source/provenance rows. Changes only to `data/countries.csv`, `data/country_coverage.csv`, `data/government_health_bodies.csv`, `data/authority_relationships.csv`, `PROVENANCE.csv`.
- Totals **248** UN M49 geography, **125** identity-located / **123** unknown; **175** bodies, **40** links, **266** provenance, **248** coverage rows, **0** inferred parent M49 links. Distinguish territory and federal powers; Qatar 5 Nov 2026 food safety transfer START not completion.
- Independent immutable six-CSV structural readback **PASS**; `validate.py` **NOT RUN** due local DNS failure. New [standalone Batch 18 checkpoint](CHECKPOINT_20261105_BATCH18.md). Existing research and older caveats untouched; PR remains DRAFT/unmerged; no website/clinical edits.

---

## 2026-11-05 — Batch 17: four new principals, Portugal statutory DGS relationship

- Immutable DATA SHA `14bf3f2e748d5d439bc645002592c4ae3dc2a41a`: ONLY Team A `data/countries.csv`, `data/government_health_bodies.csv`, `data/country_coverage.csv`, `PROVENANCE.csv`, `data/authority_relationships.csv`. Added Peru 604, Philippines 608, Poland 616, Portugal 620 principal identities; Portuguese DGS directorate separate, statutory direction Article 23 link; **4** principals / **5** body records / **10** source entries / **1** relationship; zero prior sources removed and zero invented parent M49.
- **248/248** official UN M49 geography, **120** identified / **128** unknown, **169** bodies, **39** links, **253** provenance, **248** coverage. Exact GitHub immutable six-CSV quote-aware audit **PASS structural**; **Python validator NOT RUN** due local DNS. Full source-issuer and enactment distinctions in [complete checkpoint](CHECKPOINT_20261105_BATCH17.md).
- DRAFT PR #68 remains open/unmerged; public website, main, calculator, clinical and other teams unchanged.

---

## 2026-11-05 — Batch 16: five governmental principals and original-language names

- **DATA SHA `fa345c550e47213c780557038a881fb8e612b75d`** updates only Team A `data/countries.csv`, `data/government_health_bodies.csv`, `data/country_coverage.csv`, `PROVENANCE.csv`. New area identities Mexico 484, Aotearoa New Zealand 554, Spain 724, Switzerland 756, Uruguay 858; five distinct body records and **12** dated official provenance entries; **0** new relationship edges.
- Overall **248/248 official M49** geographic records; **116 located identities / 132 explicit unknowns**; **164** government bodies; **38** relationships; **243** provenance; **248** coverage. No inferred cross-M49 legal parent, no deleted prior research.
- Independent immutable DATA SHA six-GitHub-CSV quote-aware readback **PASS** with row-for-row UNSD geographic matching, sources, links, region counts and sensitive jurisdiction checks. Python validator **NOT RUN** because local GitHub DNS fails. Distinct legal/2026 proposal and statute limitations in [Batch 16 standalone checkpoint](CHECKPOINT_20261105_BATCH16.md).
- Entire Team A handoff only, open DRAFT PR #68 unmerged; no website, patient-facing or other-team changes. Earlier Batch 15 full work preserved below.

---

## 2026-11-05 — Batch 15 six original-language/current health authorities

- **DATA commit `96ab1bae36eee3171793a0f0dae87bb765611623`** changed only four Team A CSVs: `data/countries.csv`, `data/government_health_bodies.csv`, `data/country_coverage.csv`, `PROVENANCE.csv`; no relationship changes. Promoted six previously unknown principals (304 Greenland, 344 Hong Kong SAR, 578 Norway, 752 Sweden, 826 UK, 840 USA). Added six body IDs and sixteen dated government-source records with language, source issuer, scope, same-issuer/legal-status caveats.
- New totals **111 identified / 137 unknown** across 248 official M49 geographical records; **159** bodies, **38** pre-existing cited links, **231** provenance records, **248** ledger rows, **0** inferred cross-M49 parent assignments.
- Separate exact-DATA-SHA independent GitHub re-fetch of six CSVs, quote-aware structural/audit readback PASS: official master row equality, statuses, references, source metadata, high-risk sentinels. **Python `validate.py` NOT RUN**; local GitHub DNS failed. Details in [standalone Batch 15 checkpoint](CHECKPOINT_20261105_BATCH15.md).
- Greenland 2026 devolution proposal and Hong Kong 2026 amendment bill NOT enacted merely by announcement; Swedish caretaker cabinet, UK devolved jurisdictions and US federal-state-tribal split preserved. PR #68 DRAFT/unmerged. No public website, calculator or other team edits.

---

## 2026-11-05 — Batch 14 five jurisdiction governmental health authorities

- Data commit `b9603d7ced8ea7c3b84595ad3cbe690dbca08fb4` promotes **five** previously unknown principals: M49 175 Mayotte, 248 Åland, 254 French Guiana, 258 French Polynesia, 442 Luxembourg; adds six bodies (including ÅHS as separate from Åland government policy bureau), one internal policy-steering relationship and 11 primary government provenance rows.
- Counts: 248/248 dated official M49 geography, **105 located identities / 143 unknown**, **153** bodies, **38** organizational edges, **215** provenance records (not all independent statutory checks), **248** coverage ledger. Cross-area parent M49 links remain blank until legal verification.
- Two official French government sources corroborate Mayotte; one Åland parliamentary steering description and separate adopted strategy document confirm bureau/ÅHS but do **not** prove every rule is enacted; French Guyane prefecture distinguishes regional ARS from CTG, same issuer; Polynesian directorate current activity, 2021 order reference and historic directory are not independent statutes; Luxembourg official ministry with October 2026 dated governmental corroboration.
- Independent exact-SHA readback six CSVs and 14 structural/32 sensitive controls **PASS**; **Python validator NOT RUN**. See full standalone [Batch 14 checkpoint](CHECKPOINT_20261105_BATCH14.md).
- Research branch only; PR #68 remains DRAFT/unmerged. No public website, clinical/patient-facing, calculator or other-team changes. Prior source caveats preserved.

---

## 2026-11-05 — Batch 13 official-government authority census enrichment

- **Data commit `c7049a1293112ae93b91962802d732b5931e7bf2`**: source-verified 5 formerly unknown M49 principal administrative health identities (162 Christmas, 166 Cocos, 232 Eritrea, 292 Gibraltar, 324 Guinea). New 9 distinct government bodies, 4 within-government relations, 15 provenance rows. 100 identity located / 148 unresolved, 147 bodies, 37 links, 204 provenance, 248 official M49 geography and ledger.
- Independent Australian ANAO + Commonwealth administrative checks distinguish territory health authority from IOTHS services and WA SDA; Eritrea Ministry of Information 2026 sources have local Tigrinya/statutory caveat; Gibraltar sources identify ministerial *portfolio* not free-standing ministry; Guinea ministry 2026 site conflicts with undated presidential personnel directory. No inferred parent M49, no enacted claims based on draft law.
- Exact DATA SHA 6-CSV independent structural audit **PASS**; Python validator **NOT RUN**. Complete GitHub [Batch 13 standalone checkpoint](CHECKPOINT_20261105_BATCH13.md) and renewed source/QA/handoff docs. Prior caveats untouched, PR draft/unmerged, no website/medical changes.

---

## 2026-11-05 — Batch 12 official-source governmental directory enrichment

- **DATA commit:** `3aa199259d0a569e67dfb42980434bbf7b48d4b2`; latest documentation commit is a separate follow-up. Promoted five formerly explicit unknown principal M49 entries to source-backed *identity/limited-remit* findings: 174 Comoros `gov-174-001`, 234 Faroe Islands `gov-234-001`, 440 Lithuania `gov-440-001`, 462 Maldives `gov-462-001`, 470 Malta `gov-470-001`. No assumption of complete legal authority.
- Added government bodies `gov-234-002` Faroese public-health authority and `gov-440-002` Lithuanian accreditation regulator; added two locally sourced within-area agency relations; **12** issuer/date/language/scope/limitations provenance rows. No cross-area inferred parent delegations.
- Counts now **248/248** official M49 geographic rows; **95 identified / 153 unresolved**, **138 bodies**, **33 relationships**, **189 provenance**, **248 ledger**. All previous records and caveats retained.
- Independent exact-data-SHA quote-aware readback of six CSVs including official M49 master PASS; per-field geography, ID/edge/source checks and **24** high-risk sentinels. Python `validate.py` NOT EXECUTED on latest Batch 12. See `QA_REPORT.md` for bounds.
- Current-government changes caveated: Comoros portal template vs indexed decree; Faroese 2025-versus-2026 ministry restructures and proposed transfer; Maldives April 2026 ministry rename and November tertiary group; Malta stale copy and legal scope; Lithuania current statutory devolution.
- Updated `CHECKPOINT_20261105_BATCH12.md`, `CONTINUE.md`, `STATUS.md`, `GAPS.md`, `README.md`, `CHANGELOG.md`, `QA_REPORT.md`; PR stays draft and unmerged; no production or other-team files changed.

---

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

## 2026-11-05 — Batch 10: five primary government authorities and three statutory/attached bodies

- On the Team A research branch only, added principal ministry identities for Chad 148, Ethiopia 231, Gabon 266, Georgia 268 and India 356. New government health bodies: Ethiopian Public Health Institute, India's Department of Health and Family Welfare and Directorate General of Health Services; three source-linked within-government relationship edges. Current government/legislative sources include 2026 Chad ministry/Primature, Ethiopia health ministry+EPHI, 2026 Gabon Ministry+Presidency, Georgian original government decree plus 2026 official published order, and Indian central government directory+DGHS.
- Explicit caveats: previously blocked webpages retained historically; Ghana and Kenya etc previous batches untouched. No adoption of Gabon's **draft** 2026 decree as enacted law; Georgia's consolidated document remains restricted; no cross-area parent M49 link inferred; Ethiopia/India federated or regional competence incomplete. No guess about legally effective mandate dates.
- Data commit **`6a8679492553d3d24cba790608fbb3d017b7d854`**, verified by independent GitHub exact-SHA readback. M49 248/248, 85 principal identities, 163 unknown, 126 government bodies, 31 internal edges, 167 provenance rows, 248 coverage rows. Full quote-aware structural checks and 20 legal/territory sentinels PASS. Python `validate.py` **not executed** on this checkpoint due sandbox Git checkout restrictions; do not claim otherwise.
- Saved a standalone checkpoint and updated `STATUS.md`, `GAPS.md`, `QA_REPORT.md`, `README.md`, `CHANGELOG.md`, `CONTINUE.md`. All changes research-only; main/public site/clinical copy untouched; draft PR #68 not merged.

## 2026-11-05 — Batch 11: five additional independently sourced governmental ministries

Batch 11 (2026-11-05) source-backed principal identities: Hungary 348 `gov-348-001` (**Egészségügyi Minisztérium**, a separate 2026 health ministry, prior Interior ministry portfolio historical; transition statute and effective date pending); Iceland 352 `gov-352-001` (**Heilbrigðisráðuneytið**, current ministerial division specified in presidential allocation instrument pending); Jordan 400 `gov-400-001` (**وزارة الصحة**, ministry's 2026 organizational guide and portal, Higher Health Council authority must be separately reviewed); Republic of Korea 410 `gov-410-001` (**보건복지부**, own current ministry organizational site; no assertion about DPR Korea M49 408); Latvia 428 `gov-428-001` (**Veselības ministrija**, government current mission and historical ministry dates; regulators and local roles not fully checked). No cross-area legal parent M49 links or clinical content changes.

Data commit `f777fa04b567b41a8ae8810f4422dafec47c1906`. **90/248** M49 principal governmental health authority identities found, **158/248** explicitly unresolved; **248/248** official M49 areas individually reconciled; **131** governmental health-body records, **31** within-government source-backed links, **177** provenance rows (including failed/candidate entries) and **248** country coverage rows. Independent exact-SHA GitHub readback of all five normalized data CSVs plus the 248-row dated official M49 master: **PASS** quote-aware rows, codes, ISO/name/regions, 90/158 statuses, all 131 unique body IDs, all 31 relationship references, 177 unique provenance IDs and fields, 248 synced ledger rows, 20 high-risk territorial/scope sentinels. **Python `validate.py` was NOT executed on Batch 11** (no outbound Git checkout); a prior earlier-batch Python pass is not transferable. Structural checks do not establish current statutes, jurisdiction delegation or clinical authority.

Research team A files only; all prior evidence/failed site checks preserved, no site, main, medical/clinical copy, cross-team handoff or merge changes. Standalone checkpoint and continuing prompt committed.
