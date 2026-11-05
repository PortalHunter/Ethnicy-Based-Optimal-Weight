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


## 2026-11-05 — Batch18 Africa

Batch18:16 identities in13 newly represented African areas and3 resource relationships (Malawi diabetes education; Benin integrated diabetes/hypertension programme). Malawi WDF12-0714 reports completed education outputs; Benin WDF20-1787 remains completion-phase with expected results. Neither establishes clinical efficacy. Directory-only identities receive no resource credit.
22 additional targeted search-log rows and19 provenance rows. Totals:262 identities,166 areas,167 relationships,161 positive cells,1575 not_yet_researched cells. Nine-CSV core validation:zero errors; Node CLI not separately run.


## 2026-11-05 — Batch19 Latin America

Added14 identities in10 new areas (Bolivia,Ecuador,Guatemala,Paraguay,Costa Rica,Honduras,Nicaragua,Venezuela,Cuba,Puerto Rico) and3 research-index/education relationships (Ecuador diabetes,Paraguay celiac,Puerto Rico diabetes).17 provenance and21 search rows. Totals276 identities/176 areas/170 resources/164 positive cells/1572 not_yet_researched. Full-text access and source-quality caveats retained; no clinical claims approved. Nine-CSV core:zero errors.


## 2026-11-05 — Batch20 Pacific and SE Asia

Added7 identities across5 new areas (Guam,French Polynesia,Marshall Islands,Cambodia,Laos),2 source relationships (MoPoTsyo course outline,KDC community programme interview),1 community-specific record,9 provenance and15 search rows. Historical Pacific survey separated from current organizational status; Vanuatu/ADOPF unresolved leads not promoted. Totals283 identities/181 areas/172 relationships/166 positive/1570 not_yet_researched; zero clinical approvals; nine-CSV core zero errors.


## 2026-11-05 — Batch21 celiac/hemochromatosis quality review

Added2 Swedish identities and2 net new source relationships (Luxembourg celiac,Sweden hereditary iron overload). Upgraded Malta existing guide-index edge to substantive diagnosis page without double counting; reverified ALIG own identity,Andorra registry and Cyprus translation concern.8 provenance/8 search rows added. Totals285 identities/181 areas/174 resources/168 positive/1568 not_yet_researched. Nine-CSV core zero errors. No clinical approvals.


## 2026-11-05 — Batch22 territories

Added8 identities in8 new areas (Isle of Man,Cayman Islands,Curacao,Aland,Martinique,French Guiana,Guadeloupe,Mayotte) andone substantive Mayotte diabetes education edge.10 provenance/14 search rows. Identity-only activity report and mission pages not counted as resources. Greenland government-service exclusion and Gibraltar naming gap logged. Totals293 identities/189 areas/175 resources/169 positive/1567 not_yet_researched; zero clinical approvals; nine-CSV core zero errors.


## 2026-11-05 — Immutable batch22 handoff checkpoint

Verified substantive SHA b0e80aad880909bbf3eacdd838f7bacf1d5e3850;17 exact file readbacks and9 CSVs revalidated with zero errors. This handoff-only update records verified SHA and exact59-area missing-identity list. Run total47 identities/36 new areas/11 new relationships/one resource upgrade/one community record. Research remains incomplete; all clinical release states research_lead_only.


## 2026-11-05 — Batch23
Added3 own-site identities in2 new areas (Reunion,Montenegro),3 education links (Brazil lactose/celiac,France hereditary iron overload),8 search rows and6 provenance rows. Cross-border Liechtenstein scope logged without false domicile. Zero structural errors. Metrics: {"organizations":296,"areas":191,"resources":178,"positive":170,"unresearched":1566,"provenance":483,"search_log":270,"community":4,"by_condition":{"diabetes":63,"hypertension":15,"high_chol":20,"gout":16,"lactose":13,"celiac":26,"hemochromatosis":17},"current_unsd_overview_codes":248}.


## 2026-11-05 — Batch24
Added6 identities (Philippines,Chile,Colombia,Bhutan,Niger,Macao),3 new geographic identity areas,4 source relationships across gout,hypertension,lipids and diabetes;10 provenance/8 search rows. Nine-CSV core+overview zero errors. {"organizations":302,"areas":194,"resources":182,"positive":174,"unresearched":1562,"provenance":493,"search_log":278,"community":4,"by_condition":{"diabetes":64,"hypertension":16,"high_chol":21,"gout":17,"lactose":13,"celiac":26,"hemochromatosis":17},"current_unsd_overview_codes":248}
Batch23 immutable SHA19098e95ea86b1ee4fc1aa77ebcc7d391fd5f0c8: all17 files matched readbacks.


## 2026-11-05 — Batch25 and acceptance review
Added2 Portuguese organization identities and2 external-guideline hosting relationships (lactose,celiac);4 provenance/2 search rows. Session batches23–25 add11 identities in5 newly represented areas,9 relationships,20 provenance and18 search rows. All seven streams have at least one newly indexed resource relationship; no clinical approvals. {"organizations":304,"areas":194,"resources":184,"positive":176,"unresearched":1560,"provenance":497,"search_log":280,"community":4,"by_condition":{"diabetes":64,"hypertension":16,"high_chol":21,"gout":17,"lactose":14,"celiac":27,"hemochromatosis":17},"current_unsd_overview_codes":248}. Nine-CSV core+overview zero errors. Batch24 immutable d627375974dce6aeea709f754c69595e0b308870:17 exact file readbacks and9 CSVs revalidated.


## Batch25 immutable checkpoint
01f67a5dd6a8993f208153df2b3d05e591a60159 independently read back:17 files exact and9 CSVs zero errors. Handoff-only refresh records SHA and resumption instructions; no additional data or clinical claims.


## 2026-11-05 — Batch26: Liechtenstein local research and Swiss cross-border service normalization

Added 2 first-party verified non-government identities (UFL in LI 438; diabetesGL-GR-FL in CH 756), 2 UFL research/publication-index relationships (LI diabetes and hypertension), 2 source-specific cross-border service edges 756 -> 438, 9 provenance rows and 6 targeted source-log rows. Added data/cross_border_services.csv and edge foreign-key/provenance validation. Comoros, Solomon Islands and Gibraltar findings recorded only as unresolved leads, without invented standalone official sites or disease-guidance endorsements. All linked publication claims unappraised; larger magazine PDF screenshot unavailable due file-size limit, HTML index retrieved. Counts: {"organizations":306,"areas":195,"resources":186,"positive":178,"unresearched":1558,"provenance":506,"search_log":286,"community":4,"cross_border_edges":2,"by_condition":{"diabetes":65,"hypertension":17,"high_chol":21,"gout":17,"lactose":14,"celiac":27,"hemochromatosis":17},"current_unsd_overview_codes":248}. Verified structural/data attribution in orchestration JS, zero errors; Node CLI/full URL/clinical/legal audit not run. Branch and PR remain open draft/unmerged; readback and exact immutable SHA recorded in subsequent checkpoint.


## 2026-11-05 — Batch27 Monaco historical association lifecycle and directory integrity

Three original-source/secondary provenance records and three targeted search records added (1996 founding authorization, 2023 official dissolution, inconsistent surviving commercial directory). Monaco diabetes coverage note now documents narrow source check, still findings_count0/not_yet_researched by schema because no independently qualifying current own publication. No active/domiciled identity inferred; 306 identities/195 domiciled areas,186 resources/178 source-positive cells/1558 without linked sources,509 provenance/289 searches,2 cross-border edges,0 clinical approvals. Ten-CSV core+overview+cross-border JavaScript structural validation:0 errors. Independent PDF,legal registry-wide,clinical appraisal/Node CLI not run.


## Batch28 — 2026-11-05

Added5 identities in5 previously unrepresented areas (Gabon266, Brunei096, Timor-Leste626, Palau585, FSM583),4 published-resource relationships,1 community record,13 provenance rows and10 targeted checks. Distinguished journal endorsement from article authorship, government from professional society, programme interview from guideline, and suspended own site from indexed historical content. No clinical claims approved. Node committed validator executed on baseline and prepared batch: zero structural errors (post-write output retained in checkpoint validation). Existing IDs and all source caveats preserved. Only TeamB handoff directory changed.


## Batch29 — 2026-11-05

Added2 Gibraltar charity identities in1 new area,2 SPGP externally authored English resource relationships (existing Portugal cells),13 provenance and12 targeted search/audit rows. No new source-positive area-condition cells. Verified Gibraltar registry pages visually and retained conflicting GCA footer number. Checked IRA and CMR original own publication navigation without inventing gout sources. Located final2022 breath-paper version and2019 iron-guideline correction; full clinical appraisal not done. Totals313 identities/201 areas,192 resources/182 positive cells,535 provenance,311 search logs,5 community records,2 cross-border edges. No website/main/merge changes.
