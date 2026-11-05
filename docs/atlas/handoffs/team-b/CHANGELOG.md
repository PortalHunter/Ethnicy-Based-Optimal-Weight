# Team B changelog

## 2026-11-04 — First substantive primary-source batch

- Started dedicated team branch from `main`; seeded full 248-area M49 × seven-condition discovery status matrix.
- Recorded 26 source-identified organizations in 12 areas and 23 observed official publication/resource links across seven streams.
- Added separate Indigenous/community-led research organizations with explicit scope limits; added source provenance and publication jurisdictions.
- Documented 14 broad-label failure cases and open issues; preserved claim-level release gate.
- Unresearched status is not evidence of absence; remaining geographic batches pending.

## 2026-11-04 — Regional second batch

- Added 26 official-site society/foundation identities and 29 original-source publication index entries across Asia, Africa, Europe, Americas and Oceania.
- Added explicit historical `defunct_2026-01-01_official_source` state for Netherlands NDF and retained a distinct active Netherlands patient association.
- Recorded joint authorship and hosting distinctions for Philippine PCEDM/DOH, Indonesia PERKENI, Thailand society collaborations and Italian SID/AMD.

## 2026-11-04 — Condition diversification third batch and structural QA

- Added 8 organizations with original links: Japan hypertension, UK FH, Brazil gout, Spain/France celiac, Australia/Canada hereditary iron overload, South Africa hypertension.
- Aggregated totals: 248 M49 areas, 1,736 condition rows, 60 organizations in 33 areas, 60 condition publication/resource records, 57 positive condition-area cells and 1,679 unresearched cells.
- Ran structural CSV integrity checks: no duplicated org or M49 IDs; valid publication → org refs; all 57 source-positive coverage cells backed by source rows. No structural validation failures; source-site currency and full UNSD roster still require human audit.

## 2026-11-05 — Batch 4 (Africa and Caribbean, source-aware)

- Added 11 organization identities in 11 previously unindexed areas (Senegal, Burkina Faso, Ghana, Rwanda, Tanzania, Kenya, Cameroon, Nigeria, Zambia, Barbados, Trinidad and Tobago). IDF/ISE directory-only identity states are explicitly provisional pending source-owner corroboration.
- Added seven distinct resource rows (six areas) including Ghana government-issued 2023 diabetes guidance (DEMSoG is technical contributor/host, not sole issuing authority), Rwanda type 1 EMR research, a Senegal hypertension-resource index, Burkina cardiology workshop, Tanzania research programme, and Barbados patient education for diabetes and hypertension.
- Workshop/programme/educational resources are not independent studies or scientifically validated guidelines. Preserve all clinical release gates and URL/copyright review flags.

## 2026-11-05 — Batch 5 (Central Asia, Pacific, Latin America)

- Added 13 organization identities across 11 M49 areas (Kazakhstan, Uzbekistan (two distinct associations), Samoa, Fiji, Tonga, Papua New Guinea, Dominican Republic, El Salvador, Panama; plus celiac-specific Argentina and Chile); 7 condition-resource rows and 6 newly positive area-condition keys.
- Indexed explicit 2025 Argentine pediatric celiac expert-consensus authorship and **CC BY-NC-ND 4.0** license without reproducing its text. Added separate Argentine patient celiac association and Chilean voluntary celiac registry; latter is **not** a national population sample.
- Panama's Society of Cardiology **endorsed** an older HEARTS hypertension protocol; Panama Ministry of Health approved it and PAHO hosts. Its historical 2019 revision requires supersession review.
- Samoa's two condition links refer to **one** proposed/active cardiometabolic pilot with conflicting ethics-status descriptions; no published efficacy evidence. Uzbekistan's own diabetology article listing is not a verified peer-reviewed recommendation. IDF-only Fiji/Tonga/PNG/El Salvador remain identity-only; PNG self-reports restructuring.
- Uzbekistan's NAEU (2018 charter) and IDF's EDAU (renamed 2009) are indexed as **separate identities with unresolved legal continuity**; do not merge without source evidence.

## 2026-11-05 — Batch 6

- Added German lactose education, Polish celiac resource index, Austrian FH education, UK BSH historic hereditary haemochromatosis guidance listing.
- Preserved DGE 20-vs-28-page conflict, BSH 2018 listing/2017 title, undated Polish guide. Full-text appraisal not claimed.
- Corrected pre-existing Samoa status/notes field placement, empty provenance notes and inconsistent programme coverage classification; evidence uncertainty unchanged.
- AILI direct open returned JavaScript shell: deferred, not counted. Discarded invalid guessed DGE about path; used navigation-discovered mission page.
- Enhanced CSV checks passed: 88 identities, 78 resources, 73 positive and 1663 unresearched cells; 0 failures after explicit corrections.

## 2026-11-05 — Batch 7

- Added Bermuda, Jersey, Guernsey and Uruguay identities (4 new areas); 3 first-party condition resources, no Guernsey source-positive cell.
- Separated Guernsey directory corroboration/current-registration uncertainty, Jersey/Guernsey/UK jurisdictions, Bermuda screening attendees from national prevalence, and ACELU licensing from public regulation.
- Structural checks repeated: 0 failures, 92 organizations, 81 resources, 76 positive/1660 unresearched cells and 175 provenance rows.
- Batch 6 verified on GitHub at 82c4990d773bc8f636c9a578fc38d8a0d386b21c; exact publication CSV readback matched.

## 2026-11-05 — Batch 8: European celiac discovery

- Added 20 organization identities in 19 areas, including 14 previously unindexed areas; 14 first-party resource relationships in 13 new positive cells. Added detailed targeted-search ledger (20 rows) and reproducible structural validator.
- Croatia, Estonia, Iceland, Ireland and Luxembourg remain directory-corroborated only after inaccessible/insufficient first-party retrieval. Hungary identity-only: legal-continuity/footer inconsistencies retained. Directory identities do not promote cells to researched.
- Distinguished two Belgian language-community associations; Czech ministry-supported education from government authorship; Danish external government guide; DZG external DGVS/ESPGHAN links; Italian Ministry report and broken dynamic counters.
- Refreshed STATUS.md to show current rather than historical counts first. Prior snapshots remain in history.
- Validation core evaluated against eight CSVs: 0 failures; 112 identities/72 areas/95 resources/89 positive/1647 unresearched/209 provenance/20 logged searches.

## 2026-11-05 — Batch 9

- Added 20 organization identities (19 new areas), six first-party condition resources and 22 targeted-search log entries. Distinguished 14 directory-only identities from six resource-bearing official organizations.
- Rejected unsupported Eswatini project partner attribution; separated Kinshasa DRC from Republic of Congo; preserved two Nepal bodies, Maldives site uncertainty and Botswana launch-date disagreement.
- Independently extracted all 248 English UNSD overview rows; exact code-set equality to retained roster, zero missing/extra/duplicates. Added normalized source snapshot and validator assertion; updated roster check state without claiming direct export verification.
- Nine-CSV structural validator core: zero failures; totals 132 identities/91 areas/101 resources/95 positive/1641 unresearched/236 provenance/42 searches.

## 2026-11-05 — Batch 10: iron overload, gout and lactose

- Added 20 national-body identities, 22 source relationships, 22 positive cells, 22 targeted-search entries. Linked thirteen iron-overload resources, five gout sources, Swiss/Swedish/Dutch lactose resources and Swedish celiac school education.
- Distinguished Brazil university-hosted group governance, French 2021 FFAMH merger, national patient education vs clinical guideline; rejected genotype/ancestry as clinical penetrance.
- Located current Malaysian Ministry PDF after old404 and society502; MaHTAS publisher/copyright and MSR listed distribution-host role preserved. Japanese third-edition supplement/errata noted with copyright limits. Hong Kong Delphi consensus not primary trial; Singapore lecture listing not guideline or society-conducted trial.
- Validation core zero errors: 152 identities/93 areas/123 resources/117 positive/1619 unresearched/278 provenance/64 searches. Batch9 fourteen-file immutable readbacks matched.

## 2026-11-05 — Batch11: FH national organizations

- Added20 identities across20areas (8 new areas),14resources,14positivecells and21search-log entries. Current FHEF network used for leads with own-site follow-up; historical2016 roster not treated as current.
- Preserved Chinese service-company footer governance uncertainty and selected HoFH sample; detected suspicious FHPortugal domain replacement and omitted clinical source. Seven identity-only/provisional records do not change source coverage.
- Nine-CSV core checks zero failures:172 identities/101areas/137resources/131positive/1605unresearched/312provenance/85searches.


## Batch 12 — 2026-11-05
Added 18 directory/site-corroborated identities in 18 new Caribbean/territory areas, including New Caledonia hospital corroboration. Added one Papiamento resource index for Aruba; 17 identity-only rows have no coverage credit. Totals190 organizations/119 areas/138 resources/132 positive/1604 unresearched/331 provenance/103 search rows. Nine-CSV checks zero errors. Original scope incomplete.


## Batch 13 — 2026-11-05
Verified Haiti French diabetes and hypertension education and Belize non-www patient education (3 resources); upgraded Haiti, Belize and Saint Lucia identities. Logged five unresolved/identity-only resource follow-ups and current Suriname government corroboration. Totals: {"organizations":190,"areas":119,"resources":141,"positive":135,"unresearched":1601,"provenance":335,"search_log":111,"community":3,"by_condition":{"diabetes":49,"hypertension":14,"high_chol":19,"gout":9,"lactose":5,"celiac":23,"hemochromatosis":16},"current_unsd_overview_codes":248}. Zero structural errors.


## Batch 14 — 2026-11-05
Added7 specialist/patient identities and8 lactose source relationships across8 areas; all research leads. Logged Italy in-development project and inaccessible Portuguese lead without coverage credit. Totals: {"organizations":197,"areas":119,"resources":149,"positive":143,"unresearched":1593,"provenance":350,"search_log":121,"community":3,"by_condition":{"diabetes":49,"hypertension":14,"high_chol":19,"gout":9,"lactose":13,"celiac":23,"hemochromatosis":16},"current_unsd_overview_codes":248}. Zero structural errors.


## Batch 15 — 2026-11-05
Added20 organization identities in18 newly covered M49 areas and6 resource relationships (Lebanon,Pakistan,Tunisia,Saudi Arabia,Qatar diabetes and lipids). Fourteen identities remain directory-led; Oman own-site identity only. Regulatory supervision, foundation membership, hosting,publishing and guideline coordination distinguished. Totals: {"organizations":217,"areas":137,"resources":155,"positive":149,"unresearched":1587,"provenance":376,"search_log":149,"community":3,"by_condition":{"diabetes":54,"hypertension":14,"high_chol":20,"gout":9,"lactose":13,"celiac":23,"hemochromatosis":16},"current_unsd_overview_codes":248}. Zero structural errors.


## Batch 16 — 2026-11-05
Added9 rheumatology/patient identities and7 gout resources in7 areas; India/Mexico identity-only. Argentine page CPPD/gout mixture explicitly flagged; Chile2007 archive specialist-only; funding/currency/ancestry issues retained. Totals: {"organizations":226,"areas":137,"resources":162,"positive":156,"unresearched":1580,"provenance":392,"search_log":158,"community":3,"by_condition":{"diabetes":54,"hypertension":14,"high_chol":20,"gout":16,"lactose":13,"celiac":23,"hemochromatosis":16},"current_unsd_overview_codes":248}. Zero structural errors.


## Batch 17 — 2026-11-05
Added20 identities across16 previously uncovered areas; Russian guideline catalogue and Faroese type2 education add2 resource cells. Vietnamese resource withheld for site-integrity concerns; Ukrainian live suspension, Mongolia/Moldova access failures and directory-only identities explicit. Totals: {"organizations":246,"areas":153,"resources":164,"positive":158,"unresearched":1578,"provenance":414,"search_log":182,"community":3,"by_condition":{"diabetes":56,"hypertension":14,"high_chol":20,"gout":16,"lactose":13,"celiac":23,"hemochromatosis":16},"current_unsd_overview_codes":248}. Zero structural errors.


## Run checkpoint and handoff refresh — 2026-11-05
Verified immutable data commit 6c2519f5e1ebb64513cc50b553b3f355419fb593; batches13–17 add56 identities/34 new areas/26 resource relationships. Replaced accumulated continuation text with standalone current prompt; added machine-readable CHECKPOINT.json. Current totals246/153/164/158/1578;95 areas lack identity. Historical counts explicitly marked superseded. No additional clinical/data claims in this handoff-only change.
