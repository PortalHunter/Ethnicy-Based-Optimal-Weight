## Team B batch 80 — immutable-data validation · 2026-11-06

**Batch 80 (2026-11-06):** [standalone checkpoint](BATCH_80_CHECKPOINT.md) · [data commit 75fe8f60](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/09e3d63c55e7ced5e0303f2ea315a4f6e8a1c0d9). **485** local specialist/nonprofit organization identities in **227/248** M49 domiciles (21 identity gaps), **372/1,736** source-positive area-condition cells, **171** bounded-unlinked, **1,193** untouched, **1,364** without source link, **408** research-only exact publication/context pairs, **1,101** provenance and **635** logged searches. Added two Bangladesh local organizations and two first-positive Bangladesh cells (hypertension, high_chol/statin-use). Existing **10** community/subnational rows, **8** cross-border edges, **14** diversity counterexamples and **5** unknown issuer imprints preserved. All **408/408 research_lead_only** and **0** approved clinical claims. Immutable complete **147-entry** data tree, **11/11** CSV/unchanged-validator SHA matches, independent JS precommit structural checks 0 errors; **actual Node CLI not run** due local github.com DNS checkout failure. No licensing, legal, clinical, publication-accuracy, or universal link certification. PR #71 must stay draft, open, unmerged.

Immutable data commit `09e3d63c55e7ced5e0303f2ea315a4f6e8a1c0d9`, root tree `e27e9bcc215818ee42e2fe94aad0e10deb2c5fc7`, 147 entries nontruncated, 11/11 exact GitHub SHA/tree readbacks; independent precommit JS structural checks 0 errors, 248×7 roster, 10 community, eight cross-border entries present. **Node CLI NOT RUN** (local github.com DNS failure); no clinical, legal, rights, or full-text approval. CI at documentation head requires recheck.


**Post-check correction (same batch 80, 2026-11-06):** The full Team B validator logic exposed that two new source-country basis values were outside its allowed enum. Both context rows now use `issuer_of_linked_page` for first-party Bangladesh NHFB research-department citation pages, explicitly distinguishing their Bangladesh page host from Global Heart's independent journal authors/publisher. The statin lead now links [NHFB's exact first-party paper index](https://epidemiology.nhf.org.bd/publications/b4dI5w7B2PwtX7rBs6YC) with the [original journal full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC11908426/) retained as supporting evidence; the hypertension paper remains separately multi-institution authored. Initial six-CSV commit [75fe8f60](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/75fe8f609a35876e35b71df9937fee585ff15eb8) was followed by [four-file attribution correction 09e3d63c](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/09e3d63c55e7ced5e0303f2ea315a4f6e8a1c0d9). **Current immutable validated data revision** `09e3d63c55e7ced5e0303f2ea315a4f6e8a1c0d9`, root tree `e27e9bcc215818ee42e2fe94aad0e10deb2c5fc7`, **147 entries, truncated=false**. Ten CSVs plus unchanged validator SHA/tree **11/11**; full independent JavaScript reimplementation of Team B validator **zero errors**; actual `node` CLI not run due local GitHub DNS failure. All changes remained Team B-only.
---

## Team B batch 79 — immutable research-data readback, 2026-11-06

**Data commit:** [152146e89c701b31d4356cafaf133a6c9c0fbb75](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/152146e89c701b31d4356cafaf133a6c9c0fbb75); **root Git tree** `648b0227c8c015e426df34839eb7b2b30a58fd62` (145 entries, `truncated=false`). Ten CSVs plus unchanged `validate.mjs`: **11/11** direct GitHub file blob SHAs matching immutable tree. Independent JavaScript structural cross-file/foreign-key/coverage/search/issuer checks: **0 errors**. 248×7 complete as roster, 483 organizations/227 domiciles, 406 research-only contexts and 370 source-positive cells. Community 10/cross-border 8 preserved. Only six Team B CSV paths edited. **Node CLI was NOT executed** this batch; historical successful Node/CI receipts are not fresh runs. No clinical, medical device, legal, current original-edition, comprehensive PDF, rights/licensing, community consent or external-live-link certification. See [full restart and caveats](BATCH_79_CHECKPOINT.md).

---

## Team B batch 78-R980 — data commit readback · 2026-11-06

**Commit:** [6f1710c0fe00b1dc3fe8251111141e9f4175ae3f](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/6f1710c0fe00b1dc3fe8251111141e9f4175ae3f); tree `4d0fd9bf801ceacec03ef51cb3dd2eeae3620a4b` (145 entries, `truncated=false`). On immutable data commit, all **10 Team B CSVs + untouched `validate.mjs`** were independently refetched and their GitHub file blob SHAs matched the exact tree entries **11/11**, zero mismatch. Independent JavaScript postwrite checks of 248 M49×7 cells, 248 overview records, CSV widths, exact resource/context/role/provenance joins, organization domicile/issuer attribution, coverage/search log joins and preservation of 10 community/subnational and eight cross-border relations: **0 structural errors**. Precommit independent join checks also returned zero errors. Changed only six Team B research CSV files; comparison parent `1b5c438065eb06b0f22f01a5ea5546689d1cd886` versus new commit shows no out-of-scope path.

**Actual Node CLI: NOT RUN.** Local Node v22.16.0 exists, but `git ls-remote https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight.git HEAD` failed `Could not resolve host: github.com`, so no Git checkout or execution of `node docs/atlas/handoffs/team-b/validate.mjs` occurred. No independent local Git object hash recomputation. Prior Node or CI passes belong to earlier checkpoints; do not call them current-batch CLI runs. This validates structure/provenance joins, **not** full texts, current external-link availability, original medical evidence, licensing, legal issuer authority, Indigenous consent, clinical appraisals or absence of global gaps.

**Metrics:** {"organizations":480,"areas":227,"resources":402,"positive":366,"without_linked_source":1370,"targeted_no_source":171,"unresearched":1199,"provenance":1085,"search_log":629,"community":10,"cross_border_edges":8,"issuer_country_unresolved":5,"issuer_country_differs_from_domicile":28,"by_condition":{"diabetes":109,"hypertension":72,"high_chol":44,"gout":37,"lactose":32,"celiac":48,"hemochromatosis":24},"current_unsd_overview_codes":248}.

**New source boundaries:** Nepal 2023 journal expert-consensus authors distinct from society/site, conflicting own membership counts; Ireland ESC guideline linked from Croí is externally authored, charity has regional focus; Iceland original PDF indexed but direct/screenshot HTTP 502 (not fully inspected). All 402 resources retain `research_lead_only`, clinical claims approved 0; 21 local organization gaps, 171 bounded no-resource and 1,199 untouched cells persist. PR #71 open draft/unmerged.

---

## Team B batch 77-R911 — immutable postcommit structural readback, 2026-11-06

**Immutable data commit:** [`4a782e09f3505bc6acfcee48182760ca9b87d49c`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/4a782e09f3505bc6acfcee48182760ca9b87d49c). **Tree:** `9253855254c1d19fb1b51eeb82b11288f848f21d`; **145 entries, truncated=false**. Ten research CSVs and the unchanged `validate.mjs` independently read from the immutable SHA: **11/11 GitHub file blob SHA matches against complete tree**, 0 mismatches. Distinct from actual `node validate.mjs`: the latter **was not executed** this run because an external clone could not resolve github.com. Independent JavaScript post-write checks performed: correct CSV widths, unique organization/provenance/resource/context/search/area IDs, all 248 M49 areas × 7 conditions, 248 overview rows, every resource matched to exact `publication_context` URL/role and same-domicile source provenance, issuer basis validity, every coverage count and search ID match, retained 10 subnational/community joins and eight cross-border provenance relations. **0 errors**. No independent local Git blob hashing, all-link crawl, fulltext, edition, copyright, legal or clinical validation.

**Validated metrics:** `{"organizations":479,"areas":227,"resources":399,"positive":363,"without_linked_source":1373,"targeted_no_source":172,"unresearched":1201,"provenance":1079,"search_log":626,"community":10,"cross_border_edges":8,"issuer_country_unresolved":5,"issuer_country_differs_from_domicile":28,"by_condition":{"diabetes":109,"hypertension":70,"high_chol":44,"gout":37,"lactose":32,"celiac":47,"hemochromatosis":24},"current_unsd_overview_codes":248}`.

**Specific scope and research caveats:** Ghana GSC self-reported 2023 five-zone screening is not a random national survey or independent medical guideline; article author and original media source recorded separately from site host. Kenya KCS first-party indexed study pages conflict on recruitment/prospective status and could not be fully retrieved (HTTP 403); no positive study effects accepted, and Othaya is not Kenya-wide. Kenya society founding-year 1980 versus 1981 disputed. Ghana high-chol targeted no-eligible-resource is limited to two first-party inspected pages; no inference of national absence. All **399 resources** remain `research_lead_only`; **zero clinical claims approved**.

**Acceptance status:** M49×7 enumeration passes structurally; **21** locally based identity gaps, **1,201** untouched condition cells and **172** bounded unlinked cells prevent research completion. Source population versus original issuer, organization domicile and healthcare jurisdiction remain separated, with **five** original-document issuer imprints unresolved. **14** geographic diversity counterexamples and governance-sensitive 10 community and eight cross-border records retained; reuse and consent need specialist review. PR #71 open draft, not merged; no changes to public website, main, calculators, formulas or other teams.

---

## Team B batch 76-R850 — immutable postcommit readback, 2026-11-06

**Data commit:** [b0a453ebdf6d477d10e63351d8bb774a8d7ce9b3](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/b0a453ebdf6d477d10e63351d8bb774a8d7ce9b3); complete **145-entry nontruncated** immutable Git tree `bae48ae548c910ec698e7a078d02993037865465`. Independently retrieved all **10 Team B CSVs plus unchanged validate.mjs** at that data commit: **11/11 GitHub blob SHA-to-tree matches**. Independent JavaScript postwrite readback of CSV widths, unique IDs, 248×7 coverage and UNSD roster, exact source/context/role/provenance joins, issuer basis, search references, retained community and cross-border relations: **0 errors**. Full local Git blob hashes were **not** independently recomputed this run. **Actual Node CLI not executed** due local GitHub DNS/checkout failure (prior batch's Node CLI pass is historical). These are structural and traceability checks, **not** full-text, rights/licensing, source-currency, clinical or legal approval. Only six Team B CSV files changed in the data commit.

**Metrics at validated data commit:** `{"organizations":477,"areas":227,"resources":397,"positive":361,"without_linked_source":1375,"targeted_no_source":171,"unresearched":1204,"provenance":1074,"search_log":623,"community":10,"cross_border_edges":8,"issuer_country_unresolved":5,"issuer_country_differs_from_domicile":28,"by_condition":{"diabetes":109,"hypertension":68,"high_chol":44,"gout":37,"lactose":32,"celiac":47,"hemochromatosis":24},"current_unsd_overview_codes":248}`.

**Acceptance gates:** 248 M49 areas × seven conditions structurally enumerated; official research index remains incomplete (1,204 untouched and 171 narrowly targeted no-resource cells, 21 local organization identity gaps). Source issuer, source country basis, organization domicile, study population and healthcare jurisdiction stored separately, not inferred from hosting. All 397 source contexts research_lead_only; zero accepted clinical claims. Original 14 diversity counterexamples and 10 community-sensitive rows preserved; neither structural validation nor indexed source discovery establishes legal, clinical, intellectual-property or consent approval.

---

## Team B batch 75-R808 — data commit readback, 2026-11-06

**Immutable data verification:** [commit `d5c9a35d2bceef8a3fea4c0a87c3483322229023`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/d5c9a35d2bceef8a3fea4c0a87c3483322229023); [complete 145-entry tree](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/tree/d5c9a35d2bceef8a3fea4c0a87c3483322229023) reported **not truncated**; all **10 Team B CSVs and unchanged validator matched their immutable Git tree SHA entries 11/11**. An independent JavaScript structural check after readback found **zero** CSV, key, condition-state, exact URL/context/provenance join, search-cell count, geography or retained-community/edge errors. Only six Team B CSVs changed in this data commit. Actual local Node CLI **was not run** (local `github.com` DNS failure); earlier Node CLI passes are historical. **Local Git blob hashes were not independently recomputed in this run**; SHA-to-tree comparison is GitHub-side and the independent join checks are content-level. No legal, copyright, clinical, source-currency, original-PDF or universal live-link approval.

**Audit counts at immutable data commit:** {"organizations":474,"areas":227,"resources":392,"positive":358,"without_linked_source":1378,"targeted_no_source":170,"unresearched":1208,"provenance":1064,"search_log":619,"community":10,"cross_border_edges":8,"issuer_country_unresolved":5,"issuer_country_differs_from_domicile":28,"by_condition":{"diabetes":109,"hypertension":67,"high_chol":42,"gout":37,"lactose":32,"celiac":47,"hemochromatosis":24},"current_unsd_overview_codes":248}. Checks included matrix 248 × 7, identifier uniqueness, published source/context exact-URL and role matching, source and identity provenance, country/domicile separation, search-to-coverage evidence, positive/no-source state distinctions, retained 10 community rows and eight cross-border edges. All five newly linked condition cells came from formerly untouched rows; no source, historical record or other team was overwritten. New source clinical/rights/original-author appraisal remains pending.

---

## Batch 74-R738 — immutable data readback, 2026-11-06

Immutable [data commit `128f18d7a620b34e0a9d2616cade46769c70606c`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/128f18d7a620b34e0a9d2616cade46769c70606c) has a **complete nontruncated 145-entry Git tree**, 11/11 GitHub Team B ten-CSV-plus-unchanged-validator SHA/tree matches and independent readback. **Zero independent JS structural join/state/metadata errors** after readback; **actual Node CLI was not run** in this session (local GitHub checkout cannot resolve github.com). Previous actual Node CLI receipts are historical. This is not clinical, rights, original-edition, live-link or legal approval. Diff against parent changes only six Team B CSVs.

**Checks passed:** 248 M49 records × seven conditions (1736 rows); all 10 CSVs plus unchanged `validate.mjs` have immutable GitHub file SHA matching tree entry (11/11); nontruncated 145-entry tree; unique organization/resource/context/coverage/search/provenance/edge keys; organization and resource URL provenance; context exact URL/role/issuer/release-state match; jurisdiction/domicile and cross-area attribution checks; six new coverage-to-search associations; all original 10 community and eight cross-border rows; 0 independent JS structural errors. Original research rows outside six modified cells preserved, and all six CSV changes restricted to Team B.

**Metric ledger:** {"organizations":472,"areas":227,"resources":387,"positive":353,"without_linked_source":1383,"targeted_no_source":166,"unresearched":1217,"provenance":1055,"search_log":610,"community":10,"cross_border_edges":8,"issuer_country_unresolved":5,"issuer_country_differs_from_domicile":28,"by_condition":{"diabetes":106,"hypertension":65,"high_chol":42,"gout":37,"lactose":32,"celiac":47,"hemochromatosis":24},"current_unsd_overview_codes":248}.

**Runtime warning:** independent JavaScript structure checks ran against fetched immutable GitHub files; **Node CLI was not run on a local checkout in this batch** due GitHub hostname DNS resolution failure. Existing historical Node CLI receipts below are untouched. This does not verify all external links, original PDF visual impressions, copyright, clinical correctness, claim certification, legal status or total research coverage.

**Hong Kong SAR (M49 344), six formerly untouched cells:** +3 first-party organization identities; +4 source-positive education-resource cells; +2 bounded no-topic checks. Distinguish original issuer/venue, web host, author and profession:

- **B-HK-DHK — 香港糖尿聯會 / Diabetes Hongkong**: own [purpose](https://diabetes-hk.org/purpose/) and [IDF English-name corroboration](https://idf.org/our-network/regions-and-members/western-pacific/members/hong-kong/diabetes-hongkong/). [Diabetes education leaflets](https://diabetes-hk.org/educational-leaflets/) give the diabetes research lead, not an original study or endorsed clinical guideline; full leaflet editions/rights unappraised. [降膽固醇八式](https://diabetes-hk.org/8-ways-to-lower-cholesterol/) gives a separate high-chol **education-only** lead. Its numeric claims, effect-size promises and apparent **BMI formula error** require review; this is not familial-hypercholesterolaemia evidence.
- **B-HK-HKNA — 香港營養學會 / Hong Kong Nutrition Association**: own [professional identity](https://www.hkna.org.hk/). [調味減鈉小技巧](https://www.hkna.org.hk/%E8%AA%BF%E5%91%B3%E6%B8%9B%E9%88%89%E5%B0%8F%E6%8A%80%E5%B7%A7/) mentions hypertension, **original am730 2026-05-13**, own upload **2026-06-03**, joint HKNA/StartSmart taskforce; not a blood-pressure guideline or single-author society publication. [「食物過敏」與「食物不耐症」大不同](https://www.hkna.org.hk/zh-hant/%E3%80%8C%E9%A3%9F%E7%89%A9%E9%81%8E%E6%95%8F%E3%80%8D%E8%88%87%E3%80%8C%E9%A3%9F%E7%89%A9%E4%B8%8D%E8%80%90%E7%97%87%E3%80%8D%E5%A4%A7%E4%B8%8D%E5%90%8C/) is an **am730 2019-03-07** article with named HKNA council-officer authorship; lactose intolerance is not allergy, genetic lactase nonpersistence, population prevalence or clinical diagnosis.
- **B-HK-HKSGE — 香港腸胃學會 / Hong Kong Society of Gastroenterology**: [own society](https://www.hksge.org/about-us/) and catalogues. [Public education](https://www.hksge.org/public-education-resources/) presents GI/GERD material, not verified local celiac research; a separately linked 2026 Melbourne international celiac conference is not HKSGE authorship. [Position statements](https://www.hksge.org/professional-resources/position-statement/) list H. pylori and GI-bleeding anaemia, not hereditary haemochromatosis. Both are **bounded searches without eligible verified exact resources**, never evidence of national absence or interchangeability of iron-deficiency anaemia with hereditary iron overload.

---

## Batch 73-0712 · immutable data audit (November 6, 2026)

[Immutable data commit 06a10f43633536f04d557e1b07287f2ed45d24bd](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/06a10f43633536f04d557e1b07287f2ed45d24bd) was read back: all ten Team B CSVs and unchanged validator matched a complete 145-entry nontruncated Git tree; **11/11** independently computed local UTF-8 Git blob SHA-1 hashes matched GitHub's file and tree SHAs. Git tree for this data commit: `7330075f63611174146feef490833c059d2e3535`. Precommit independent JavaScript structural join/CSV/state checks returned **0 errors**. **Actual Node CLI not run for this batch** (github.com DNS failed for checkout); older Node validation receipts remain historical, not a new run. Structural/provenance validation does NOT certify medical reliability, current full text, copyright, clinical claims, source accuracy or global completeness.

**Structural prepublication checks:** all 248 M49×7 condition rows; exact organization and resource/context joins, URL-linked provenance, distinct original issuer and org domicile, research-only release states, unique IDs, CSV widths/quoting, six coverage-search joins, original 8 cross-border edges and 10 community records. Original data entries outside six targeted coverage rows were retained byte-for-byte. Actual local Node execution was NOT performed in this batch; prior Node receipts must not be misrepresented as current.

469 organizations / 227 of 248 M49 domiciles (21 locally domiciled identity gaps); 349/1736 source-positive condition cells, 164 bounded no-resource searches, 1223 untouched, 1387 source-unlinked; 383 research-only exact resources; 1045 provenance rows, 604 condition-search rows; 10 subnational/community records, 8 cross-border edges, 5 original-document issuer-country unknowns. All links research_lead_only, zero approved clinical claims.

---

# Team B standalone continuation — five batches 68-8967 through 72-8967

**INCOMPLETE · DRAFT · OPEN · UNMERGED · RESEARCH LEADS ONLY.** Checked 2026-11-06 UTC (November 6 Central). This run completed five research batches, using suffix8967 to avoid collisions with a concurrent session. Seven new organizations, four exact resources and fifteen documented condition checks came from this run; concurrent branch contributions were preserved separately.

Current combined branch: **466 organizations in 227/248 domiciles**,21 local-identity gaps. Of1736 condition cells: **347 source-positive**, 160 bounded without resource and **1229 untouched**; 1389 total source-unlinked. 381 exact resources, 1036 provenance rows, 598 searches, 10 community/subnational records and 8 cross-border edges. Five original issuer-country uncertainties remain. Zero approved clinical claims.

Final audited data commit: `44b39bec2ee094c3b10303e6f841e5996bc6fe84`. Actual Node v24.22.1 validator passed with zero errors. All ten CSVs plus unchanged validator independently fetched at immutable SHA, matched the complete nontruncated145-entry tree and11 locally computed Git blob hashes. All449 starting organizations,368 original resource/context rows and all other noncoverage CSV rows preserved exactly; all original Markdown history remains. Six original specialist_research_only classifications restored during final semantic audit. PP43 Malaysian cohort is explicit in publication_context rather than generic study-unspecified text.

## Resume from repository alone

1. Verify live PR71 remains draft/open/unmerged, base main and branch research/atlas-team-b-20261104. Read comments/reviews/checks, full recursive tree and any AGENTS.md. Starting145-entry tree had no AGENTS.md; starting population-tests and quality-gates both succeeded. No reviews or inline threads were returned at final audit. No check-runs were yet returned for final data snapshot 44b39bec2ee094c3b10303e6f841e5996bc6fe84; check independently.
2. Read original TEAM_B_CLINICAL_ORGANIZATIONS.md and DATA_CONTRACT.md under docs/atlas/research-team-prompts/ on research/atlas-five-team-handoff-prompts-2026-11-04, then all18 TeamB files. Preserve historical caveats and14 diversity boundary examples. Run `node docs/atlas/handoffs/team-b/validate.mjs`.
3. Next distinct candidate batch: lactose discovery in Sri Lanka144, Bangladesh050 and Nepal524, using original-language terms and first-party gastroenterology/nutrition/academic sources. Reconcile live matrix first; another session is active. Continue untouched cells,21 domicile gaps and five issuer-imprint uncertainties. A failed bounded check is never national absence. Revisit BRS legacy/patient-education pages and NRA versus NCRD publication attribution separately.
4. Write only docs/atlas/handoffs/team-b/. Before each commit reread live branch and reconcile new rows/history; update with expected-head lease. Never force-overwrite. Use unique run-scoped search/provenance IDs. Do not assume numeric batch labels identify unique sessions. Independently fetch immutable CSVs/validator and recompute local Git blob hashes before claiming readback; update checkpoint last.
5. Keep publisher, host, document issuer, domicile, service jurisdiction, study location/population and genotype distinct. Government/journal/network work belongs to other teams; medical appraisal belongs to issue27. All resources remain research_lead_only. Do not alter public website,main,calculators,formulas,other teams or merge PR71.

## This run's source and recovery caveats

- Bulgaria coeliac.bg current organization and education verified; no assumed continuity with older bacbg.org association. Lithuania AOECS Other societies listing is not membership; begliuteno.lt now presents as personal blog. Concurrent Lithuanian gastroenterology resource is separately retained.
- ARIG lactose PDF direct open returned verification loader despite indexed excerpt; no original imprint, fulltext or positive credit. Separate school-programme check and2026 guide announcement preserved.
- Sri Lankan college's2026 gout programme is a scheduled professional education record, not verified attendance/outcomes or clinical guideline. Separate rheumatology.lk ownership unbridged. Bangladesh society catalogue shell and Nepal homepage not credited as gout publications; NCRD-affiliated survey not automatically NRA-authored.
- NFDD lactose education's broad ancestry and dietary/testing claims unappraised; Yakult sponsorship recorded. MSGH current Putrajaya site separate from historical experiencesense committee copy. PSG component-society structure distinct from joint journal ownership.
- MSGH GUT2012 PP43 is a historical selected high-risk hospital pilot with named hospital/IMR/CRC authors; antibody-based atypical label is not biopsy-confirmed disease or national prevalence. Printed104/PDFordinal106; selected text only. Screenshot calls returned placeholders, no visual review claimed. GUT2022 foreign-speaker oration is separate historical programme.
- Iron checks in NFDD/MSGH/PSG are bounded catalogue checks. Cirrhosis, iron-deficiency anaemia, thalassaemia/transfusion iron and haemophilia are not interchangeable with hereditary haemochromatosis. No national-absence or clinical claims approved.
- First attempted data assembly commit4e2f698a failed independent readback due a line-splitting bug that truncated files. Repair5761b175 restored complete history and passed11/11 exact remote/local hashes before work continued. Unreferenced e6df712d object never moved branch. Later lease rejections caused reconciliation, never force-overwrite. Final audited snapshot and preserved-row checks establish recovery; do not treat the failed intermediate commit as a validated dataset.

## Immutable receipts

| Batch | Verified commit | Readback |
|---|---|---|
| 68-8967 | `5761b17511474cc3b395092e156d5c29a612754b` | 11/11 exact content, tree/blob and local Git hashes |
| 69-8967 | `26cd9ca14fb3e270674592fa4a2004d428ce5089` | 11/11 exact content, tree/blob and local Git hashes |
| 70-8967 | `a20a963c8625c6bd2f026c9bbf8934dde173b607` | 11/11 exact content, tree/blob and local Git hashes |
| 71-8967 | `f71b7e8474bec03bfd42c9b0e20f3dc8256d85e0` | 11/11 exact content, tree/blob and local Git hashes |
| 72-8967 | `55e62cc21a2eb07c231a8f419139bb31f6107c32` | 11/11 exact content, tree/blob and local Git hashes |
| audit-8967 | `7c2b0f8157d693f0f7e90e34496a9dbeb641560d` | 11/11 exact content, tree/blob and local Git hashes |

Research remains incomplete. Structural validation and readback do not certify clinical accuracy, original fulltext/visual appraisal, rights, legal currency, universal live links or exhaustive discovery.

---

## Preserved earlier checkpoints and caveats

# Validation receipt — batches63–67 — 2026-11-05

Data commit `6d5dc37241526f2cbc2657463819c481d625ae38`, actual root tree `a01eb316827143d7f6135a8fb9a173f09b666e6d`. All ten CSVs and unchanged validate.mjs independently fetched from each of the five immutable batch commits; 11/11 exact content and GitHub tree/blob SHA matches per batch. Final data commit additionally verified with 11 independently computed local Git blob hashes. Actual Node v24.22.1 CLI passed at each batch and final readback-matching snapshot, zero structural errors. CSV widths, exact resource/context joins, M49 coverage, attribution evidence, search IDs and research-only state passed. This does not certify clinical accuracy, copyright clearance, complete original fulltext or visual appraisal, universal live links, legal registry currency, or exhaustive discovery.

Five batch commits: 63=39c93617aa924f7537a02f8e3f34fcf0d7ce5922, 64=70f03445ff4a1a57c06c540a0611037d262ff027, 65=72c7f13a1ce30d5a39c9c258debd2d2982cf2f66, 66=52d537a6df81fc0b1037729c3c64e46e3daf6c23, 67=6d5dc37241526f2cbc2657463819c481d625ae38.

Startup PR71 draft/open/unmerged, no reviews/comments returned; complete145-entry tree had no AGENTS.md. Both startup GitHub checks passed. At batch67 check, population-tests passed and quality-gates was running; no completed final CI claim yet. Compare starting head ce9cbe8120ed59b03c059172cb685e8fb267b24e to batch67: five commits, all11 changed paths within TeamB. Data rows are append-only except16 coverage cells updated. Validator unchanged, all historical sources/caveats retained.

No clinical validation, legal registry certification, comprehensive PDF visual review, copyright clearance or global-completeness claim.368 resources remain research_lead_only.

Final local blob receipts:

| Path | Git blob SHA |
|---|---|
| docs/atlas/handoffs/team-b/PROVENANCE.csv | 49993a8c0155bcd6191b196fc90ed29cfe12989e |
| docs/atlas/handoffs/team-b/data/condition_organizations.csv | 3b3a5a39478e78783531942a2e4eb4ef827715ce |
| docs/atlas/handoffs/team-b/data/coverage_by_area_condition.csv | ef63da71bc77ae27f63401f4084d857d4f4cf6b0 |
| docs/atlas/handoffs/team-b/data/cross_border_services.csv | b1fec349b5c670cdacabc33e73f5567a9340842d |
| docs/atlas/handoffs/team-b/data/m49_area_codes.csv | 80da341f3a5d18ccb4eac30fdede82b0d4870629 |
| docs/atlas/handoffs/team-b/data/m49_verified_overview.csv | 062b70cb9f19de17ac564d336c5580d622379f05 |
| docs/atlas/handoffs/team-b/data/publication_context.csv | bedb3c2e06f63268699e259ef8dcf8a69e182a5a |
| docs/atlas/handoffs/team-b/data/search_log.csv | 26b0a57401e17feec41349a822e90d8a7f247c16 |
| docs/atlas/handoffs/team-b/data/specialist_organizations.csv | 7d76c84e328e40430f55aa7f859addf433ef5920 |
| docs/atlas/handoffs/team-b/data/subnational_and_indigenous_organizations.csv | 889947bf051306491e415baa23626b5afa47505c |
| docs/atlas/handoffs/team-b/validate.mjs | 4d40ac04963d30d0ec809c2f066eaa1a0c538a36 |

---

# Team B validation — batches 59–62 — 2026-11-05

**INCOMPLETE · DRAFT · UNMERGED · RESEARCH LEADS ONLY.** 442 organizations across 227/248 domiciles (21 identity gaps). Of 1,736 cells: 325 source-positive, 146 bounded targeted without verified resource, 1265 untouched; 1411 total source-unlinked. 356 exact resource/context leads; 941 provenance rows, 551 search logs, 8 subnational/community records, eight cross-border edges; five original-document issuer-country unknowns and 28 known issuer/domicile differences. Every resource remains research_lead_only; zero clinical claims approved.

Immutable data commit [`73e73c6c2fab15c9ca370d1307e9819005df92c0`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/73e73c6c2fab15c9ca370d1307e9819005df92c0), complete nontruncated 145-entry tree `61e045325365b1955f7adb1776364326c529cef4`. All ten CSVs plus unchanged validate.mjs independently fetched at immutable SHA: 11/11 GitHub blob SHAs equal tree entries AND independently computed local Git blob hashes. Actual Node v24.22.1 CLI executed on matching local files: zero structural errors. CSV widths, exact joins, attribution evidence, coverage/search IDs, source-country/domicile, research-only release, 8 subnational/community and eight cross-border records passed. This verifies structure and readback, not clinical accuracy, original fulltext appraisal, copyright clearance, universal live links or comprehensive discovery. Startup PR checks population-tests and quality-gates both succeeded at 114c2314c4ae9b2db0d673d677541fb07344f53d; later CI must be checked separately.

All prior source caveats remain binding: NDF ceased Jan 2026; dissolved Monaco society versus M-CRIN; MoPoTsyo direct-service phaseout September 2026; foreign/government originals versus society hosting; historical source editions and uncorrected proofs; 14 broad-label counterexamples, original seven community/subnational records (plus new Pichincha professional chapter) and eight cross-border relationships. FH is not all elevated LDL; gout is not asymptomatic urate; inherited iron overload is not high ferritin; hypolactasia is not symptomatic lactose intolerance; HLA susceptibility is not coeliac diagnosis. Teams A/C/D own government/journals/international networks.

---

# Team B validation — batches 59–60 — 2026-11-05

**INCOMPLETE · DRAFT · UNMERGED · RESEARCH LEADS ONLY.** 430 organizations across 227/248 domiciles (21 identity gaps). Of 1,736 cells: 311 source-positive, 141 bounded targeted without verified resource, 1284 untouched; 1425 total source-unlinked. 341 exact resource/context leads; 908 provenance rows, 531 search logs, seven community records, eight cross-border edges; five original-document issuer-country unknowns and 28 known issuer/domicile differences. Every resource remains research_lead_only; zero clinical claims approved.

Immutable data commit [`fa906311bc395a0b4cffdf5dc4178909bf692ff1`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/fa906311bc395a0b4cffdf5dc4178909bf692ff1), complete nontruncated 145-entry tree `1b25bf7e7b5dbb642537df3ecec5b9d3f3916ed8`. All ten CSVs plus unchanged validate.mjs independently fetched at immutable SHA: 11/11 GitHub blob SHAs equal tree entries AND independently computed local Git blob hashes. Actual Node v24.22.1 CLI executed on matching local files: zero structural errors. CSV widths, exact joins, attribution evidence, coverage/search IDs, source-country/domicile, research-only release, seven community and eight cross-border records passed. This verifies structure and readback, not clinical accuracy, original fulltext appraisal, copyright clearance, universal live links or comprehensive discovery. Startup PR checks population-tests and quality-gates both succeeded at 114c2314c4ae9b2db0d673d677541fb07344f53d; later CI must be checked separately.

All prior source caveats remain binding: NDF ceased Jan 2026; dissolved Monaco society versus M-CRIN; MoPoTsyo direct-service phaseout September 2026; foreign/government originals versus society hosting; historical source editions and uncorrected proofs; 14 broad-label counterexamples, seven community-governance-sensitive records and eight cross-border relationships. FH is not all elevated LDL; gout is not asymptomatic urate; inherited iron overload is not high ferritin; hypolactasia is not symptomatic lactose intolerance; HLA susceptibility is not coeliac diagnosis. Teams A/C/D own government/journals/international networks.

---

# Team B validation — batch 58 — 2026-11-05

**Immutable batch-58 data commit:** [`a18d5e31e96ddbccc9fe9f4c6623122979e5e26d`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/a18d5e31e96ddbccc9fe9f4c6623122979e5e26d), complete **145-entry nontruncated GitHub tree** (Git tree `57b93a68c803e09911e5e7d7897fee741aa8d9ab`). Independently refetched all 10 CSVs plus unchanged `validate.mjs` at immutable commit; **11/11 GitHub-reported blob SHAs matched complete tree entries**. Independently implemented JavaScript precommit structural check found **0 errors** for 248×7 M49 coverage, CSV widths, unique IDs, publication/context/exact-URL relationship and attribution evidence, source-country and domiciles, provenance and search references, research-only releases, seven community and eight cross-border records. **Actual Node CLI not executed** because local `git ls-remote` failed DNS lookup for github.com; batch-49–50 historical CLI receipts preserved. SHA equality is GitHub-reported, not separately hashed offline. No full PDF/rights/copyright appraisal, clinical validation, epidemiological inference, universal external-site recheck, or global source-completeness certification.

**Persisted metrics at data commit:** 418 organizations in 227 M49 domiciles; 321 resource/context records, 293 source-positive cells, 139 targeted without source, 1,304 untouched; 872 provenance, 509 searches, 7 community, 8 cross-border, 5 unknown issuer countries, 28 source-country/domicile differences, 248 M49 overview codes. Per-condition source-positive: diabetes 100, hypertension 56, high_chol 37, gout 27, lactose 18, celiac 35, hemochromatosis 20. **321/321 research_lead_only; zero approved clinical claims.**

**Scope of Git update:** six CSV files under `docs/atlas/handoffs/team-b/`; all other data references plus validator untouched. Full tree has 145 entries, 11/11 immutable GitHub blob checks; no `AGENTS.md` found. Structural precommit validation is not a substitute for actual Node CLI or independent medical, publisher, licence, or source-currency review. No clinical approval.

---

# Team B validation — batch 57 — 2026-11-05

**Immutable batch-57 data validation:** [commit `ba8a51b930f47a5aa5d1b744885c64f658599873`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/ba8a51b930f47a5aa5d1b744885c64f658599873) has an independently refetched **145-entry, nontruncated** Git tree `285e771ae15dd6098a4ba611049428220e32afb6`. All **11/11** GitHub-reported tree blob SHAs matched fresh reads of the ten CSVs and unchanged `validate.mjs`. An independently implemented JavaScript structural validator checked CSV widths, ID uniqueness, 248 × 7 geography, exact organization/condition/URL attribution, research-only release states, provenance, issuer-country basis, search joins, seven community and eight cross-border records and found **0 errors**. **Node CLI not executed** in this batch because the environment could not resolve github.com for a checkout; historical actual Node receipts from batches 49–50 remain preserved. GitHub blob hashes were not recalculated locally. This is **not** a live-link census, original full-PDF review, licensing clearance, clinical or epidemiological appraisal, current-guideline certification, or full-world-completeness approval. On initial check, the Population Phase 1 workflow was successful and Calculator CI was still in progress; do not infer a later CI outcome.

**Metrics after immutable data commit:** 417 organizations / 227 geographic domiciles; 318 research-only resources and exact contexts; 292 source-positive cells, 139 targeted but unlinked, 1,305 untouched (1,444 unlinked); 868 provenance, 507 logged searches; 7 community, 8 cross-border, 5 unresolved issuer-country, 28 known cross-country-issuer differences. Per positive condition: diabetes **100**, hypertension **56**, high_chol **36**, gout **27**, lactose **18**, celiac **35**, hemochromatosis **20**. M49 snapshot **248/248** codes.

**Scope:** Only six Team B CSVs changed in data batch 57. `validate.mjs` and the 4 other CSV reference tables remain byte-for-byte unchanged; all 11 expected GitHub tree blobs match the new immutable commit. The independent structural check is not a substitute for actual Node CLI or outside clinical source review.

---

# Team B validation — batch 56 — 2026-11-05

**INCOMPLETE · DRAFT · UNMERGED · RESEARCH LEADS ONLY.** **415** locally indexed organizations in **227/248** UN M49 areas (21 domiciled identity gaps). Of 1,736 condition cells, **288** link at least one research source, **139** have bounded no-eligible-resource searches and **1,309** have not been condition-targeted (**1,448** without linked sources). **314** exact resource/context rows, **862** provenance, **503** searches, **7** community-subnational and **8** cross-border records, **5** unresolved original-document issuer countries. **314/314 research_lead_only; 0 approved clinical claims.**

**Batch 56:** Two new locally domiciled professional hypertension organization identities in Singapore and Vietnam; one already-indexed Cambodian NGO acquired a specifically dated 2026 hypertension outreach/service-transition lead. Three previously untouched hypertension cells source-positive; **+2 organizations, +3 resource/context rows, +5 provenance, +3 searches**; no new domiciled M49 area or change to unresolved imprints/community/cross-border cases.

- **Singapore (702) · B-SG-SHS · hypertension:** [Singapore Hypertension Society first-party identity and Singapore office](https://www.shs.org.sg/about-us/); [own medical practitioner resource catalogue](https://www.shs.org.sg/medical-practitioner-resources/) links a toolkit and several hypertension topics. The linked PDFs may originate with **third parties**, including copyrighted historical materials. Catalogue hosting is not proof of SHS-authored national recommendations or current 2026 editions. The site's **April 2024–March 2026** council list is historical, not evidence of current officeholders.
- **Vietnam (704) · B-VN-VSH · hypertension:** [Phân hội Tăng huyết áp Việt Nam own identity](https://tanghuyetap.vn/phan-hoi-tang-huyet-ap-viet-nam) and [original-language 2024 expert-view consensus summary](https://tanghuyetap.vn/tai-lieu/dong-thuan-quan-diem-cua-mot-so-chuyen-gia-cua-phan-hoi-tang-huyet-ap-vsh-vnha-2024-ve). It credits **some VSH/VNHA experts**, not necessarily the entire society or a legally mandated national standard. Linked full Google Drive document and its rights are unappraised. Website's **2022 VSH/VNHA guideline link returned 404**, not re-dated 2026. External Korean and Malaysian 2026 conference links do not transfer authorship to the Vietnam society.
- **Cambodia (116) · B-KH-MOPOTSYO · hypertension:** [MoPoTsyo own Q3 report posted 2026-10-22](https://mopotsyo.org/2026-q3-quarterly-review/) explicitly states **its direct Revolving Drug Fund sales, laboratory services and consultations ceased across 37 scheduled facilities by 2026-09-30** following the Ministry-directed handover, while school outreach including hypertension and hyperglycaemia screening of teachers continued. The [NGO home page](https://mopotsyo.org/) still describes older peer educator/clinical service activities without these phaseout dates, so it cannot be treated as evidence of current direct drug/lab/clinical service availability. Q3 operational results are NGO self-report, not independently audited population-level hypertension epidemiology, formal care standard or medical efficacy evidence.

**Immutable batch-56 data validation:** [commit `3063c15e03e7e46e4aeb6f1316a35afe0b954d0b`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/3063c15e03e7e46e4aeb6f1316a35afe0b954d0b) has a complete **145-entry nontruncated GitHub tree**; all **11/11** refetched ten CSV inputs plus unchanged `validate.mjs` GitHub blob SHA values match tree entries. Independent JavaScript precommit structural checks found **zero errors** across CSV widths, IDs, 248 × 7 geographic rows, exact publication/context/provenance attribution, source-country and domicile, exact search coverage, seven community and eight cross-border records. **Node CLI not run** (local github.com checkout DNS unavailable); batches 49–50 retain historical actual Node receipts. Hashes were GitHub-reported, not independently recalculated; **no comprehensive live-link review, original PDF appraisal, clinical recommendations, rights/licensing clearance, source-currency or completion certification** was made.

**Remaining:** 1,309 untouched condition cells, 139 bounded no-resource searches (not proof of absence), 21 domiciled-organization identity gaps, 5 unverified original document issuer imprints, original full-text and source currency/rights audits. Preserve 14 diversity counterexamples, seven community sensitive records and eight cross-border relationships. Team A government / C journal / D international network ownership; issue #27 controls clinical claim appraisal. No changes to public website, main, calculators, formulas, personal records or other teams. Never merge.

---

# Team B validation — batch 55 — 2026-11-05

**INCOMPLETE · DRAFT · UNMERGED.** Team B: **413** organizations across **227/248** M49 areas (21 missing local domiciles); 1,736 condition cells comprise **285** source-positive, **139** targeted without eligible source and **1,312** untouched (1,451 source-unlinked). **311** exact source/context links, **857** provenance, **500** search entries, **7** community and **8** cross-border records, **5** unresolved original-document issuer countries. **311/311 `research_lead_only` and zero approved clinical claims.**

**Batch 55 delta:** 3 first-party hypertension cells investigated in Philippines, Malaysia and Indonesia; +3 society identities, +3 resource/context leads, +6 provenance records, +3 search logs, +3 source-positive cells. No new domiciled area, community/cross-border entry or resolved issuer imprint.

- **Philippines 608 · B-PH-PSH:** [own-site identity/clinic/registry index](https://www.philippinesocietyofhypertension.org.ph/) and Pasig City office. Clinic and data registry descriptions are NOT proof of a completed published study, representative outcomes, patient data availability or an authored clinical guideline.
- **Malaysia 458 · B-MY-MSH:** [own membership identity](https://www.msh.my/membership), [2024–2026 congress archive](https://www.msh.my/congress). Announced 2027 congress is future. Archive is a research activity index, not original findings; 2025 talk previewing a sixth CPG edition is NOT proof of issuance, authorship or currency.
- **Indonesia 360 · B-ID-PERHI:** [original-language society identity](https://www.inash.or.id/aboutUs.do) and [2024 resistant-hypertension consensus notice](https://inash.or.id/news-detail.do?id=451). The original linked PDF, clinical evidence and rights were NOT appraised. A society notice crediting PERHI/InaSH and Ministry participation is distinct from the [2026 Ministry-issued PNPK](https://kemkes.go.id/id/adult-hypertension-management-protocol-indonesia-2026), which belongs to Team A. Resistant HTN is a subtype, not all hypertension.

**Validated immutable batch-55 data:** [`f3def656d0087261ea5a6356269603e8e7a4a876`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/f3def656d0087261ea5a6356269603e8e7a4a876). Complete nontruncated 145-entry GitHub tree, **11/11** independently refetched blob SHA/tree matches for ten CSVs and unchanged `validate.mjs`; **0** independent JavaScript precommit structural validation errors (M49 × 7, CSV widths/uniqueness, source/context/provenance, issuer/domicile, coverage/search logs, 7 community and 8 cross-border relationships). **Node CLI not run** because local github.com DNS resolution blocks checkout; prior batches 49–50 have actual CLI receipts. Hash values are GitHub-reported and not separately recomputed. No medical appraisal, rights review, original-PDF full text, all-source live URL/edition audit or world-completeness claim.

**Unfinished:** 1,312 unsearched cells, 139 bounded no-source cells (not an absence finding), 21 domiciled organization gaps, 5 unresolved original-document issuer imprints, source-edition and rights audits. Preserve 14 diversity counterexamples, 7 permission-sensitive community records and 8 cross-border edges. Team A owns government, C journals, D international networks. Issue #27 governs claim appraisal; no ancestry-based clinical inference or website/formula/calculator/main/other-team changes. Never merge.

---

# Team B validation — batch 54 — 2026-11-05

**INCOMPLETE · DRAFT · UNMERGED · RESEARCH-LEAD-ONLY.** 410 organizations across 227/248 M49 areas (21 local identity gaps). Of 1,736 condition cells, **282** source-positive, **139** targeted but without eligible verified resource and **1,315** not yet condition-targeted (1,454 source-unlinked). **308** source/context links, **851** provenance, **497** searches, 7 community records, 8 cross-border edges and 5 unresolved original-document issuer countries. **308/308 research_lead_only; zero approved clinical claims.**

**Batch 54:** three new locally domiciled professional society identities and three previously untouched hypertension cells researched (348, 642, 100); +2 eligible index/context research leads and +2 first-positive cells, +6 provenance and +3 searches, no new M49 domicile, original issuer-country resolution or community/cross-border change.

- **Hungary 348 · B-HU-MHT · hypertension (identity + bounded search, no Team B resource):** [official Hungarian/English society portal](https://hypertension.hu/) identifies the Magyar Hypertonia Társaság. Its [society-hosted 2025-09-15 clinical document](https://hypertension.hu/tarsasag/hypertension/upload/hypertension/document/hn_mht_iranyelv_2025_megj_szept_15_j_20251022.pdf?web_id=) is explicitly **issued by the Belügyminisztérium/Interior Ministry**, document ID 002311, on the cover and imprint. The journal/society logos and website hosting are not society-issued healthcare authority. The government directive falls to Team A; no Team B source-positive credit or clinical extraction. This bounded search does not exclude separate Hungarian society research.
- **Romania 642 · B-RO-SRH · hypertension (first-positive):** [Romanian society home](https://societate-hipertensiune.ro/) lists 2026 congress activity and outreach; [first-party registration/contact](https://societate-hipertensiune.ro/contact) lists its Bucharest address and CIF 29324498. This is a **society-published event and research-activity index**, not an original paper, released guideline, verified trial, epidemiological cohort or statutory clinical standard. The described 2027 school is future, not delivered.
- **Bulgaria 100 · B-BG-BHL · hypertension (first-positive):** [own Bulgarian league identity](https://www.hypertensionleaguebg.info/%D0%B7%D0%B0-%D0%B1%D0%BB%D1%85/) identifies a Sofia-based independent nonprofit and [original-language scientific-abstract catalogue](https://www.hypertensionleaguebg.info/bg/science-info/) references **2013** historical hypertension conference abstracts with named authors. [Newer event-focused site](https://hypertension.bg/) is distinct from the legacy archive. The league publishes the index but is not thereby author of every abstract; historic conference snippets are not 2026 Bulgaria population estimates, complete studies or current clinical guidelines. Current governance and article editions still need audit.

**Immutable batch-54 data validation:** [commit `b0220d29378e2548ecbf4033fa9c4ee00b772ffc`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/b0220d29378e2548ecbf4033fa9c4ee00b772ffc) has a **complete, nontruncated 145-entry Git tree**; all **11/11** freshly refetched blobs (10 CSVs plus unchanged `validate.mjs`) agree with tree SHA entries; independent JavaScript checks of CSV widths/IDs, 248×7 M49 enumeration, exact source/context/provenance joins, organization and document domicile, issuer country, coverage/search IDs, seven community and eight cross-border links returned **0 errors**. **Node CLI was not run** (local github.com DNS/checkout unavailable); historical batch 49–50 CLI receipts remain. No clinical, original-PDF full-text, copyright/licence, live-site comprehensiveness or source-edition approval is implied. The document in the Hungarian PDF was inspected only for issuer/cover attribution, not treatment recommendations.

**Remaining:** 1,315 untouched condition cells, 139 bounded no-resource cells (not national absence), 21 domiciled-organization identity gaps, 5 unresolved issuer-country imprints. Preserve 14 diversity counterexamples, all source attribution and historical/current caveats. Teams A/C/D keep government/journal/international-network scopes; issue #27 governs clinical appraisal. No public site, main, calculators, formulas or other-team changes. Never merge.

**Postcommit counts:** {"organizations":410,"areas":227,"resources":308,"positive":282,"without_linked_source":1454,"targeted_no_source":139,"unresearched":1315,"provenance":851,"search_log":497,"community":7,"cross_border_edges":8,"issuer_country_unresolved":5,"issuer_country_differs_from_domicile":28,"by_condition":{"diabetes":100,"hypertension":49,"high_chol":35,"gout":26,"lactose":18,"celiac":34,"hemochromatosis":20},"current_unsd_overview_codes":248}. Structural runtime: independently implemented JavaScript checks on immutable GitHub-fetched CSV inputs; not the checked-out Node CLI.

---

# Team B validation — batch 53 — 2026-11-05

**Source data commit:** [`a4733616e177cf5c39026b64f835ca50ffec0781`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/a4733616e177cf5c39026b64f835ca50ffec0781).

**Postcommit immutable verification:** [immutable batch 53 data commit `a4733616e177`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/a4733616e177cf5c39026b64f835ca50ffec0781) was re-fetched as a complete **145-entry, nontruncated** Git tree, with **11/11** GitHub blob SHA/tree matches for all ten CSVs and unchanged `validate.mjs`. An independently run JavaScript implementation of the validator's structural invariants on immutable postcommit content found **0 errors** (roster, CSV widths, IDs, source/context/provenance joins, source-country basis, organization domicile, search coverage and 248×7 enumeration). **Node CLI was not executed**: this container cannot resolve github.com for a checkout; Git object hashes were not recomputed locally. Historical batch 49–50 actual Node CLI receipts remain in prior sections. No universal live-link audit, clinical appraisal, copyright/licence clearance, full original publication examination, or completeness certification is implied.

**Verified metrics:** 407 organizations across 227/248 M49 areas (21 locally domiciled identity gaps). 1,736 condition cells: **280 source-positive**, **138 bounded targeted with no verified resource**, **1,318 not yet condition-targeted** (1,456 zero-link cells total). **306** exact source/context relationships, **845** provenance records, **494** condition-search logs, **7** community/subnational records, **8** cross-border services, **5** unresolved original-document issuer-country cases. All **306** links remain `research_lead_only`; **0** clinically approved claims. By-condition first-positive cells: diabetes 100, hypertension 47, high_chol 35, gout 26, lactose 18, celiac 34, hemochromatosis 20. Known source-country/domicile differences: 28; unresolved source-country values: 5. All relationships release-state `research_lead_only`.

**Source scope:**
- **Hungary (348), B-HU-MDT, diabetes:** [society's own public Hungarian-language portal](https://diabet.hu/tarsasag/diabetes/) and [Budapest secretariat](https://diabet.hu/info.aspx?sp=45&web_id=). Public page shows dated 2026 type 2 diabetes research/education digests and other distinct diabetes subtypes. Its *Irányelvek, ajánlások* guidance link [redirected to a login screen](https://diabet.hu/info.aspx?sp=86&web_id=); no members-only material was viewed, no original guideline edition, statutory adoption or medical claim approved. Its news citations do not transfer authorship of underlying research.
- **Romania (642), B-RO-SRDNBM, diabetes:** [own Romanian society homepage](https://societate-diabet.ro/), [society treatise HTML index](https://societate-diabet.ro/tratat-diabet/) advertising a **2026** treatise, and [own conference site's registered Bucharest address](https://congres2025.societate-diabet.ro/termeni-si-conditii/). The linked 2026 full PDF, contributor chapters and rights were **not inspected or appraised**. The separately co-issued **2021** Romanian diabetes guide is not a 2026 clinical guideline; a textbook index is not proof of binding healthcare directives.
- **Bulgaria (100), B-BG-BDE, diabetes:** [own identity and Sofia address](https://endo-bg.org/who-we-are/) and [original-language, dated 17 October 2023 article](https://endo-bg.org/preporaki-za-kontrol-na-hiperglikemiyata-pri-zaharen-diabet-tip-2-2022/). The page identifies author **Ц. Танкова** and discusses an **external September 2022 ADA/EASD** consensus. It is a Bulgarian society-hosted article, not a newly issued 2026 Bulgarian national guideline, independent locally authored consensus or current statutory adoption. The linked-page publisher and the source document's original issuer are not conflated.

**Limitations and next checks:** **Remaining acceptance work:** 1,318 untouched condition cells, 21 verified-local-domicile organization identity gaps and 5 unresolved original document issuer-country imprints; 138 bounded searches without a source are not proof of national absence. Preserve 14 diversity counterexamples, 7 community governance-sensitive records, 8 cross-border relationships, all prior historical/current edition boundaries and the distinction between source issuer, document issuer, study population, healthcare jurisdiction and organization domicile. Any medical claims require separate appraisal under issue #27. Team A government, Team C journals, Team D international networks remain outside Team B. No patient data, public website, main, formula, calculator, other-team changes or PR merge. The executable Node validator remains the required next-check on a materialized checkout; this batch used independent equivalent structural logic rather than claiming its CLI was run.

---

# Team B validation — batch 52 — 2026-11-05

**Source data:** [`8b9e9cad1e3f57b7b00167f5fc38d9ad56b076b4`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/8b9e9cad1e3f57b7b00167f5fc38d9ad56b076b4). Readback ran by fetching the immutable commit's complete Git tree (145 entries, `truncated=false`) and independently re-fetching every one of the **10 CSV inputs** plus unchanged `validate.mjs`. Their returned GitHub blob SHA values matched all corresponding tree entries (**11/11**, zero mismatch). Independent JavaScript parse/structure verification on postcommit retrieved data found **0 errors** in CSV widths, duplicate IDs, M49 roster, exact resources and contexts, source attribution provenance IDs, organization domiciles, issuer-country coding, clinical-release state and coverage/search-log joins.

**Limitations:** The actual `node docs/atlas/handoffs/team-b/validate.mjs` command **was not executed in batch 52**. The local environment could not resolve github.com to clone the branch; JavaScript checks applied the validator's core invariants, but are not the CLI itself. Git blob SHA comparisons against tree were from independent GitHub connector responses rather than locally recomputed cryptographic hashes. Historical actual Node CLI passes in batches 49–50 remain in prior sections.

**Metrics from independent readback:** 404 organization records across 227/248 M49 areas (21 verified-local-domicile identity gaps). 1,736 area-condition cells: **277 source-positive**, **138 bounded condition searches without a verified resource**, **1,321 not yet condition-targeted**. **303** exact resources/contexts, **839** provenance records, **491** condition-search logs, **7** community/subnational records, **8** cross-border relationships, **5** unresolved original-document issuer countries. All **303** links remain `research_lead_only`; **0** clinically approved claims.

**Sources and scope:** - **Estonia (233), B-EE-EDIABET, diabetes:** [association's Tallinn register and member list](https://www.diabetes.ee/kontakt) and [own original-language explainer](https://www.diabetes.ee/mis-on-diabeet). Undated education distinguishes type 1, type 2, gestational and other diabetes; historical/undated prevalence counts, diagnostic thresholds and treatment suggestions are **not** current verified statistics or approved guidance. Member affiliates are not separately inferred as nationwide issuers.
- **Latvia (428), B-LV-LDF, diabetes:** [federation's Riga legal contact](https://www.diabets.lv/kontakti) and [Latvian education catalogue](https://www.diabets.lv/informativi-materiali). Own index shows separately labelled type 1 and type 2 materials, including a type 2 handbook and external IDF Europe material. Catalogue hosting does **not** confer sole authorship, clinical authority, latest-edition or licensing status. The similarly named Latvian Diabetes Association is a different organization; older third-party address listings may be stale.
- **Lithuania (440), B-LT-LDA, diabetes:** [association's first-party site/search index](https://www.dia.lt/), [historic original-language Diabetas issue with publisher imprint](https://www.dia.lt/laikrastis/45/index.html), and [IDF Europe society profile](https://idf.org/europe/our-network/our-members/lithuania/lithuanian-diabetes-association/). The own search-indexed homepage advertises issue 131 and educational leaflets; **live homepage open timed out**. Historic paper imprint verifies prior publisher role, not authorship or edition year of issue 131. No current issue, medical claim or national guideline was clinically inspected.

No all-source URL verification, independent current-edition review, biomedical content appraisal, intellectual-property/permission review, representative population review or deployment approval was performed. All `research_lead_only`; 0 clinical claims. Branch and PR remain draft/unmerged. Only the six listed Team B CSV files changed in the data commit; this subsequent checkpoint changes only Team B documentation.

---

# Team B validation — batch 51 — 2026-11-05

Immutable [data commit](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/fb0614580f0a84b877e0443c60264c3c9a8688cd) readback: complete nontruncated 145-entry Git tree; all ten CSV inputs plus unchanged validator blob SHA values independently matched, 11/11. An independent JavaScript structural check of matrix, ID uniqueness, exact resource-context-provenance joins, issuer/organization domicile, search IDs and coverage counts detected zero errors. The Node CLI **was not run in batch 51**; earlier batches 49–50 have separate Node CLI receipts. No clinical, rights, source-currency or complete-world coverage review was performed.

Metrics: 401 organizations; 227 domiciled areas; 300 resource/context rows; 274 positive cells; 1,462 zero-link cells (138 targeted and 1,324 unsearched); 833 provenance; 488 searches; 7 community; 8 cross-border; 5 issuer imprints unknown; 0 clinical approvals. Four coverage rows changed without normalizing the other coverage row endings. Run the actual `node docs/atlas/handoffs/team-b/validate.mjs` at next checkout.

---

## Previous research and audit history retained

# Team B validation · batches 49–50 · 2026-11-05

The actual `node docs/atlas/handoffs/team-b/validate.mjs` CLI ran on locally materialized branch files at baseline, before writes and on independently fetched immutable data. Both source batches returned zero structural errors after readback. Final [validated data commit](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/4ef562c15d6f9d37198f481f4f86bdef2c9b0355) has a nontruncated 145-entry Git tree, actual root tree `cfa3799edb8c590ec7c3e253fbac45f443dd97b3`. All ten CSV inputs plus the unchanged validator were independently fetched as base64, decoded and locally recomputed as Git blob hashes: **11/11 match**, 0 mismatches; Node reproduced the metrics above with 0 errors. The ten CSV inputs are not assumed valid from a write response: each saved input was fetched and hashed; the line-ending correction's unchanged blobs were also compared to the final tree. Source-batch 49: `f3e8380068b2c4be03f00ad2f6da8beb6f50ea81`; batch 50: `b8913e2cf17de42b3ac6c4877b916dd7fbfb83fd`; final formatting-preservation commit: `4ef562c15d6f9d37198f481f4f86bdef2c9b0355`. GitHub compare from restart head `f9a597d6697be5933e04cfb6d7bff9f7b1f4b9ad` shows only six Team B CSVs, with exactly ten changed coverage rows. A serializer initially normalized coverage line endings; final commit restores original per-row endings without changing research values. Prior data rows remain preserved. Baseline CI population-tests and quality-gates passed; latest-head CI must be checked separately. No clinical, copyright, permissions, statutory adoption, full-site completeness or source-currency certification is implied.

397 organizations in 227 of 248 M49 areas; 21 local identity gaps. Of 1,736 condition cells, 270 have sources, 138 have bounded searches with no verified resource, and 1,328 await a targeted search. There are 296 source contexts, 825 provenance rows, 484 searches, 7 community records, 8 cross-border links and 5 unresolved issuer countries. All 296 contexts are research leads; zero clinical claims approved.

---

# Team B validation history · batch 48 · 2026-11-05

The checked-out Node validator passed at restart and before publication. An independent fetch of [data commit](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/9ce76f0631aa73f4e25ee772894ade8ae96953b5) matched the entire prepared Git tree (ad9bb33a43cd14ed2c56ed28686af0188f1ddb7a); running the validator from the fetched archive reproduced all metrics with zero errors. Validation covers structural consistency. Clinical appraisal, source currency and permissions require separate review.

---

# Team B validation history

## Batch 47 · independent immutable data readback `bfebee420dc0c8158e372b7173920a407ae6e59e` · 2026-11-05

- Additions: 4 newly domiciled (but no *new* M49 domiciles) non-government professional/charitable organizations, five exact source relationships including Brazilian SBR's additional gout press and four newly positive condition cells. Source issuers = linked first-party website page, not inferred document imprint or independent author; no additional cross-area or Indigenous records.
- **Prewrite:** full ten-input JavaScript structural equivalent of the local `validate.mjs`: CSV row width, 248 M49 × seven complete cells, unique organization/resource/context/provenance/search IDs, exact resource-context roles, home/issuer attribution, coverage counts and search links, community/cross-border references: **0 errors**.
- **Independent immutable postwrite:** branch commit [`bfebee420dc0c8158e372b7173920a407ae6e59e`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/bfebee420dc0c8158e372b7173920a407ae6e59e); full nontruncated **145-entry** Git tree SHA `eb436e02b424f9663591749c77b7378c6df5998f`; fetched **all ten** CSV inputs at that immutable commit, SHA compared against tree: **10/10 matched**, independent structural checks on saved rows/joins: **0 errors**. Six changed files were the Team B CSVs `PROVENANCE.csv`, `data/specialist_organizations.csv`, `data/condition_organizations.csv`, `data/publication_context.csv`, `data/coverage_by_area_condition.csv`, `data/search_log.csv`.
- **Metrics:** 392 orgs in 227 M49 domiciles, 290 source/context relations, 264 positive cells, 1,472 zero-link (127 targeted empty, 1,345 unsearched), 803 provenance rows, 466 search logs, 7 community, 8 cross-border, 5 issuer-country unknown, **0** clinical approvals. By condition: 88/44/34/26/18/34/20 in canonical key order.
- **Limits:** `node docs/atlas/handoffs/team-b/validate.mjs` was **not executed** in a real checkout: `git ls-remote` could not resolve `github.com` (DNS). This independent structural check does **not** validate external URL freshness, full text, clinical accuracy, current edition, legal authority, licensing, Indigenous permissions or population representativeness.

## Batch 46 · independent immutable data readback `1cb3f79606cfe5ea2cab88eeb6e831883dc1f52f` · 2026-11-05

- Source additions: Japan JAS (2022/2023 different originals and 2024 errata), Korea KSoLA 2026-09-10 own new edition, Korea KSH 2026-05-22 revised sixth edition, Greece EEY's external-issuer professional guideline catalogue. Four organizations and exact resources, four positive cells, eight provenance, four search checks. No other team files.
- **Prewrite structural equivalent:** 0 errors for six modified CSVs with 248 × 7 M49, original organization/resource/context/provenance and search joins. **Independent postcommit** connector fetched all **10** CSV inputs by immutable commit SHA, matched **10/10** exact Git blob SHAs in nontruncated **145-item** tree (`a24342f19155b6168c3add870df2450046499a67`), checked unique stable IDs and references, all exact link contexts, origin-country basis, every matrix cell's search IDs, 7 community and 8 cross-border edges: **0 errors**. Git compare from previous checkpoint found only six changed CSVs under Team B.
- **Verified totals:** 388 orgs / 227 domiciles / 285 linked resources / 260 positive cells / 1,476 zero-link cells (127 targeted, 1,349 not targeted) / 794 provenance / 461 search logs / 5 issuer unknowns / 0 approved claims. Positive by condition: 88, 44, 31, 25, 18, 34, 20 in canonical condition order.
- **Execution caveat:** This was not an actual `node docs/atlas/handoffs/team-b/validate.mjs` CLI invocation; GitHub checkout was unavailable from container DNS. Independent JavaScript equivalent and immutable readback are structural, not live-URL, full clinical, legal, licensing, copyright, Indigenous permissions, final text or effective-edition review.


## Batch 45 · independently verified data SHA `5d5bb3654aba9b4870c8e848754598ddf34bced5` · 2026-11-05

- First-party source-backed entries in Argentina, Czechia, Spain and Poland add **four** independently indexed society identities; four exact high_chol resource/context links; **3** new source-positive cells (Spain already had one); **8** organization/resource provenance records and **4** targeted search logs.
- **Persistence fault and correction:** Commit `f628cf194e6315256b327491aa93919590fd5507` unintentionally persisted matrix edits without appended organization, resource, context, provenance and search rows because prewrite serialization used the wrong array after appending. The first *independent immutable readback* caught **11** foreign-key/matrix/log errors. **Do not use that intermediate commit as a validated dataset.** Corrective commit [`5d5bb3654aba9b4870c8e848754598ddf34bced5`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/5d5bb3654aba9b4870c8e848754598ddf34bced5) restored original CSV formatting, appended all missing rows, and reconciled matrix counts and prior search IDs. Both commits remain auditable; no rewritten history.
- Final independent readback of **all 10 CSVs** at immutable `5d5bb3654aba9b4870c8e848754598ddf34bced5` matched exactly **10/10 Git blob SHAs** from nontruncated **145-entry** recursive tree (`f3685c7d65965eb74641183483645c55a7dbce29`). Independent JavaScript structural equivalent of checked-in `validate.mjs` checked row widths, unique IDs, 248×7 M49 cells, complete organization and resource/context/provenance joins, separate issuer country/population/care jurisdiction, all search/matrix IDs, seven community records, eight cross-border edges and coverage states. **Final structural errors: 0.**
- Verified totals: **384 organizations / 227 domiciled M49 areas / 281 links / 256 positive cells / 1,480 empty (127 bounded targeted; 1,353 no targeted check) / 786 provenance / 457 logs / 7 community / 8 cross-border / 5 unknown issuer countries / 0 approved clinical claims.**
- **Actual `node docs/atlas/handoffs/team-b/validate.mjs` CLI not run.** Direct checkout unavailable in this tool runtime. The independent connector-orchestrated equivalent is a structural check, **not** a full source-reachability, guideline-currency, efficacy, legal/copyright, Indigenous cultural-permission or clinical appraisal.


## Batch 44 · immutable data SHA `0eb0b70f1102a9911588e3b1c3d427efc31a6e96` · 2026-11-05

- PR #71: open/draft/unmerged; existing branch `research/atlas-team-b-20261104`. Five hypertension society identities (Belgium, Netherlands, Portugal, Spain and Poland), five exact first-party resource links and contexts, 11 provenance rows (including separate Polish university announcement), five search logs and five positive matrix cells added across **six CSV files**.
- Data was saved as regular GitHub file commits, not one atomic multi-file commit. A CRLF search-log reference parsing error on the five new coverage cells was detected by an **independent full 10-CSV validation**, explicitly corrected in commit `16ed4e283b5221d04554ff2e0e1fef88385c0e83`. Five publisher-name fields were made human-readable in `fa66ae9d54b2a0b49cfd3fbf66edc86a19b35f86`. Final Polish board-succession evidence was added in `0eb0b70f1102a9911588e3b1c3d427efc31a6e96`.
- **Post-correction, immutable 10/10 data CSVs fetched by final SHA** and all matched the **nontruncated 145-entry Git recursive tree**, zero mismatches; 18 Team B files in the tree. Full independent JavaScript structural validator-equivalent: CSV row widths; 248 M49 codes × seven conditions = 1,736; exact organization/resource/context joins; 277/277 issuer/population/healthcare-jurisdiction fields; 778 provenance IDs; 453 searches and coverage references; seven community and eight cross-border links. **0 errors**.
- Final: **380** organizations in **227** M49 domiciles, **277** source relationships and **253** positive cells; **1,483** empty cells (**128** bounded checks, **1,355** no targeted check); **5** unknown issuer-country attributions; **0** clinically approved claims.
- **Actual Node CLI not run.** Direct local clone cannot resolve `github.com`; connector data cannot be injected into the checkout. Independent JS checks follow the committed `validate.mjs` invariants but do **not** constitute clinical appraisal, current-guideline review, complete live-link verification, legal/rights clearance or Indigenous governance permission.

## Batch 42 · immutable data commit `db5b050d6a9139959e5ced1cecfefe0828b5eb4d` · 2026-11-05

- At write: PR #71 open/draft/unmerged, expected branch `research/atlas-team-b-20261104`. Batch source commit `8136a5710150566ddc12ef938967fb15c7f7461b` updated six Team B CSV files; subsequent `db5b050d6a9139959e5ced1cecfefe0828b5eb4d` corrected two new organization-provenance IDs. No public site, formulas, main, or other team touched.
- At readback: fetched **all 10 CSVs by immutable SHA**. The Git tree was **nontruncated**; **10/10 content blob SHAs matched**, 0 mismatches.
- Independently parsed all ten CSVs and ran checked-in Node-validator-equivalent JavaScript checks across 248 M49 codes, 1,736 seven-condition cells, unique IDs, 370 orgs and provenance matches, 267 exact publication/context joins and issuer bases, all search-log-to-coverage IDs, 7 community and 8 cross-border foreign keys. **Zero errors**. 757 provenance; 443 search logs. Five issuer countries remain unknown; 0 approved clinical claims.
- Coeliac-linked lactose source materials are educational, not original independent clinical studies. The Chilean 2021 programme is a **historical scheduled talk**; the original PDF text was retrieved but the web screenshot returned an error, so **no visual inspection is claimed**.
- **Actual Node CLI was NOT run**: Node exists in the local container, but GitHub cloning fails DNS resolution and the connected GitHub files cannot be shared directly into that container. No URL-wide recrawl, quantitative claim appraisal, legal/copyright or Indigenous permission audit was performed.

## Batch 41 · data commit `1c323d266f523967c538dd58ee4bb690044b5332` · 2026-11-05

- The existing PR #71 was checked **open, draft, unmerged** with expected parent `c6c231f90e7cc811caef646bc7ea16d6e2785b7c`. Five CSVs updated as one Git tree/commit with expected-head lease; no other project paths changed.
- Before writing, parsed all **10 CSV inputs** and ran committed-validator-equivalent JavaScript checks: fixed columns; M49 code roster 248; full seven-condition matrix 1736; uniqueness; exact org/resource/context joins; source-country and source-population/jurisdiction fields; independent journal-country provenance; coverage count/search IDs; community and cross-border FKs. **Zero errors**.
- After GitHub write, independently fetched all **10/10 CSVs** using immutable commit `1c323d266f523967c538dd58ee4bb690044b5332`. A nontruncated Git recursive tree matched each exact fetched **blob SHA**, zero mismatches. Independent readback checks verified context/resource 1:1 links, all 1,736 cell counts and search-log ID joins, provenance uniqueness and new counts: 368 organizations, 227 areas, 262 resources, 242 positive cells, 750 provenance, 438 search logs, 5 issuer unknowns. **Zero readback structural errors**.
- Batch 41 linked exactly five first-party/historical/hosted resources; **none is a validated clinical recommendation**. Mexican gout abstract's 68 versus 67 risk-group mismatch, Spain issuer vs Mexico study site and institutional author distinct from professional-journal host are recorded explicitly. No numerical risk inference accepted.
- **Actual `node docs/atlas/handoffs/team-b/validate.mjs` was not executed in this runtime**: the local container cannot resolve github.com, and connector content is not mounted there. Do not equate JavaScript structural checks with original clinical publication appraisal, permission review or a comprehensive external URL check. No patient data or copyright full-text ingested.


## Batch 40 · data commit 1d7f0a326be34482b782ef704bb57b84f29677ec · 2026-11-05

- PR #71 verified **open, draft, unmerged**, on `research/atlas-team-b-20261104`; six data-file changes stay within Team B. Original 248-code M49/1736-cell matrix retained.
- After pushing [data commit 1d7f0a326be34482b782ef704bb57b84f29677ec](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/1d7f0a326be34482b782ef704bb57b84f29677ec), all **10 CSV inputs** were fetched by that immutable commit SHA, independently parsed and checked against the checked-in `validate.mjs` invariants: width and key uniqueness; 248×7 coverage; exact publication→organization→provenance/context joins; separate issuer basis/area and study-population fields; target-search ID reconciliation; community and cross-border foreign keys; original UNSD code-set equality. **Zero structural errors**.
- Immutable Git tree `aab96a8178329374cada6e4f209a1335956704e5` returned **non-truncated**; all **10/10 CSV blob SHAs** matched the fetched files; zero data mismatches.
- Counts: 368 organizations/227 areas; 257 resources/237 positive cells; 1,499 unlinked cells with 130 targeted checks and 1,369 no targeted check; 744 provenance, 431 search logs; 7 community, 8 cross-border; 5 unresolved issuers; zero clinical approvals.
- Actual **Node CLI was not run** because the attached GitHub connector does not expose a shared local repository and local git networking is unavailable. This is equivalent JavaScript verification, **not** proof of original-paper reading, live link traversal, organization licence/permissions, guideline currency, ethics review, legal jurisdiction or clinical claim validity.
- Two registered Monaco associations and an own-site diabetes **event notice** were added; no outcome/prevalence or treatment claims. Saint-Martin 663 registry seat vs Saint-Barthélemy 652 service boundary remains only secondary-corroborated.


## Verified checkpoint · batches 30–36 · 2026-11-05

## Batch 38 · 2026-11-05

Prepared in actual Node v24.22.1. All ten CSVs passed the committed validator with zero errors before commit. Verified parent: `ac84f4a0f5b2609abf837c8ccd2e1f8ef4955699`. Primary checks: smr.ma, RMR gout HTML, reumatologi.or.id, IJR abstract/about pages, TRA 2026 PDF title pages. Not a clinical appraisal.


## Batch 37 · 2026-11-05

Prepared in actual Node v24.22.1. All ten CSVs passed the committed validator with zero errors before commit. Verified parent: `a031f8e4f5e738ba1782e713a776ef7da743bd92`. Independent immutable readback follows the branch update. Primary checks included the SPM association PDF, AFDD registry mirror, PCC zorgaanbod HTML, PLoS ONE final HTML (affiliations/methods), Vanuatu abstract PDF, ISSN 1654-9880 record, KU portal record, SGF catalogue shell, and Saint Helena government notices. Not a clinical appraisal, full URL crawl or legal-registry audit.


For each batch, all 18 Team B files fetched by immutable SHA matched the prepared content and the GitHub tree's blob hashes. The ten CSV inputs passed the committed validator under Node v24.22.1 before the branch write and again on the byte-matched files after readback. Every row below had zero structural errors.

| Batch | Verified commit | Organizations | Home areas | Resource relationships | Cells with a source |
|---|---|---:|---:|---:|---:|
| 30 | [09fd48481c10658452b8084b4d11cb7065a85866](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/09fd48481c10658452b8084b4d11cb7065a85866) | 320 | 208 | 203 | 192 |
| 31 | [f65ea551d832aa84dd9d486cc78b74201d33f0a9](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/f65ea551d832aa84dd9d486cc78b74201d33f0a9) | 329 | 208 | 214 | 202 |
| 32 | [0bd62e5ad33b21e56f6b12a5fc4d2c459d912455](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/0bd62e5ad33b21e56f6b12a5fc4d2c459d912455) | 329 | 208 | 214 | 202 |
| 33 | [6facc9e33263b26ca52b80948747d7e2a998c289](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/6facc9e33263b26ca52b80948747d7e2a998c289) | 329 | 208 | 214 | 202 |
| 34 | [bec0e063b4a32c5094773bbdc31857ad822527e0](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/bec0e063b4a32c5094773bbdc31857ad822527e0) | 339 | 216 | 226 | 213 |
| 35 | [88f2acd640d37c12f66e07f865fd546a5f823c30](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/88f2acd640d37c12f66e07f865fd546a5f823c30) | 351 | 220 | 238 | 224 |
| 36 | [f917e48b0a181a391b2e30d7b39c987d5171e86e](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/f917e48b0a181a391b2e30d7b39c987d5171e86e) | 358 | 223 | 245 | 228 |

Batch 32 reconciled targeted searches with the matrix. Batch 33 keyed each publication context to its exact URL and separated the issuer from the organization’s home area. The final local perturbation checks rejected six deliberately corrupted inputs. Data validity and clinical interpretation require separate review. Earlier notes anticipating immutable checks are closed by these receipts.

## Earlier validation records

Nine CSVs validated after each of batches23,24,25 using committed validate.mjs core+overview in orchestration JavaScript:zero errors. Node CLI not run. Structural/geographic/key/provenance/relationship checks only; retained248-code UN snapshot,not fresh verification. No full link,legal registry,WHO/direct-UN-export or clinical audit claimed.

{
  "errors": [],
  "metrics": {
    "organizations": 304,
    "areas": 194,
    "resources": 184,
    "positive": 176,
    "unresearched": 1560,
    "provenance": 497,
    "search_log": 280,
    "community": 4,
    "by_condition": {
      "diabetes": 64,
      "hypertension": 16,
      "high_chol": 21,
      "gout": 17,
      "lactose": 14,
      "celiac": 27,
      "hemochromatosis": 17
    },
    "current_unsd_overview_codes": 248
  }
}

Batch23 immutable19098e95ea86b1ee4fc1aa77ebcc7d391fd5f0c8 and batch24 immutable d627375974dce6aeea709f754c69595e0b308870:17 exact file readbacks each; batch24 nine fetched CSVs revalidated zero errors. Resolve current branch for later batch25 and immutable readback.

Final immutable batch25 verification: 01f67a5dd6a8993f208153df2b3d05e591a60159;17 exact file readbacks;9 fetched CSVs core+overview zero errors. No writes/readbacks failed this session.


## Batch26 — 2026-11-05

Ten CSVs (nine previous plus explicit cross-border edges) checked for structural width, unique IDs and M49/code roster, 1736 seven-key cells, resource-context/provenance relationships, release states and new edge based-in/serves/provenance foreign keys; 0 errors. Result: {"organizations":306,"areas":195,"resources":186,"positive":178,"unresearched":1558,"provenance":506,"search_log":286,"community":4,"cross_border_edges":2,"by_condition":{"diabetes":65,"hypertension":17,"high_chol":21,"gout":17,"lactose":14,"celiac":27,"hemochromatosis":17},"current_unsd_overview_codes":248}. Validator source modified to check the new CSV. Runtime: orchestration JavaScript equivalent of committed validate.mjs, not Node CLI. Historical retained UNSD 248 snapshot only. No full URL crawl, original PDF visual confirmation for large UFL magazine, external primary-study/clinical validation, legal registry or live UN export audit.


Batch26 immutable verification: 0761c580b39b3c62502f7c8408c9572e39e80912. Independently fetched all18 handoff files from immutable commit and compared each GitHub contents blob SHA against the recursive Git tree (all18 matched; tree not truncated). Revalidated10 CSVs with independently reconstructed committed core+overview+cross-border structural checks:zero errors. Node CLI not run; source pages/PDFs not all live-checked. This checkpoint documentation commit does not alter substantive data.


Batch27: 10 CSVs revalidated after Monaco source-integrity annotations (core+retained M49 overview+cross-border edge FKs, uniqueness, published-resource coverage, research_lead_only);0 errors, metrics {"organizations":306,"areas":195,"resources":186,"positive":178,"unresearched":1558,"provenance":509,"search_log":289,"community":4,"cross_border_edges":2,"by_condition":{"diabetes":65,"hypertension":17,"high_chol":21,"gout":17,"lactose":14,"celiac":27,"hemochromatosis":17},"current_unsd_overview_codes":248}. Monaco historical dissolution remains research-only lead with no fabricated current organizational publication. Node CLI/full URL/legal registry/clinical review not run. Immutable data readback documented in following checkpoint.


**Batch27 immutable readback:** `df0ffd28c60e86ae30f23ec7790b06899ae883db`, all18 Team B files independently fetched and their contents blob SHA matched against Git tree; no mismatches, tree not truncated. All10 CSVs independently re-parsed for row width and key metrics (306/195/186/178/1558;509 provenance;289 searches;2 edges), zero structural errors; full original core+overview+edge checks passed before write. Node CLI not run; complete live URL/clinical/registry audits NOT done.


## Batch28 actual Node validation — 2026-11-05

Baseline18 files independently fetched at 2fec11a5e585a7a3dabcb487cdac93b44f62d4fe matched recursive Git-tree blob SHAs. All10 CSVs validated by executing committed validate.mjs in Node v24.22.1, zero errors. Prepared batch28 passes the same validator in orchestration JavaScript and actual Node v24.22.1 before commit, zero errors. Validation checks structural references/counts, not clinical accuracy, external URL availability, all Indigenous governance requirements or worldwide absence. Full URL crawl, legal/WHO audit and direct UN export not done. All190 resources research_lead_only. Latest metrics in CHECKPOINT.json.


## Batch29 — 2026-11-05

Batch28 immutable substantive SHA a43641bef34981c77faf4d72c1a46415df0882b2: all18 files independently fetched and exact contents/Git tree blobs matched,10 CSVs core+overview+cross-border revalidated with zero errors. Batch29 prepared validation zero errors in committed-validator JavaScript; actual Node v24.22.1 also ran with zero errors before commit; immutable readback receipt follows. No new clinical appraisal. Source PDFs title pages and Gibraltar selected registry pages visually inspected,not full-page clinical audits. No fresh UN export,full URL crawl or worldwide legal survey.


**Batch29 immutable verification receipt:** b0ee31156c660b05379b2006abafddf1d3bb3890. Independently fetched all18 handoff files; zero content/blob mismatches. All10 CSV files in the actual Node execution were checked against immutable Git blob hashes:zero mismatches. Re-ran committed validate.mjs in actual Node v24.22.1:zero errors. Independently reran core+overview+cross-border using retrieved contents:zero errors. Dataset totals313/201 identities/areas;192/182 resource relationships/positive cells;1554 unlinked cells;535 provenance;311 search logs;5 community;2 cross-border;0 approved claims. Metadata-only receipt does not alter any data file. This is not clinical validation.


## Batch 30 · 2026-11-05

Prepared in actual Node v24.22.1. All ten CSVs passed the committed validator with zero errors. Verified parent: `7133fb56aaf3e14d843177d95d3e91fd8a5bcab7`. Independent immutable readback follows the branch update. Baseline 18 immutable files matched the previous branch tree and the baseline validator reported zero errors. Selected sources were checked in original HTML or PDF text; full visual PDF appraisal was not performed.


## Batch 31 · 2026-11-05

Prepared in actual Node v24.22.1. All ten CSVs passed the committed validator with zero errors. Verified parent: `09fd48481c10658452b8084b4d11cb7065a85866`. Independent immutable readback follows the branch update. Batch 30 source SHA 09fd48481c10658452b8084b4d11cb7065a85866 independently verified across 18 files and all ten Node CSV inputs. Batch 31 checked the image of the affected ACG page and selected sections/abstracts of other sources; no wholesale PDF or clinical review.


## Batch 32 · 2026-11-05

Prepared in actual Node v24.22.1. All ten CSVs passed the committed validator with zero errors. Verified parent: `f65ea551d832aa84dd9d486cc78b74201d33f0a9`. Independent immutable readback follows the branch update. Counts reconciled independently in Python against the ten input tables. The 120/1,414 split partitions the 1,534 source gaps. Perturbation checks target a removed search ID, a wrong state and a false resource count.


## Batch 33 · 2026-11-05

Prepared in actual Node v24.22.1. All ten CSVs passed the committed validator with zero errors. Verified parent: `0bd62e5ad33b21e56f6b12a5fc4d2c459d912455`. Independent immutable readback follows the branch update. Re-ran all existing checks and targeted malformed search/reference and context cases, including URL swaps, a missing foreign-issuer evidence ID and a known country with an unresolved basis.


## Batch 34 · 2026-11-05

Prepared in actual Node v24.22.1. All ten CSVs passed the committed validator with zero errors. Verified parent: `6facc9e33263b26ca52b80948747d7e2a998c289`. Independent immutable readback follows the branch update. Checked original paper/author affiliation and selected methods or population descriptions, paired publisher references for cross-area sources, and re-ran the Node validator and six deliberate input perturbations. Verified all 18 prior handoff files at 6facc9e33263b26ca52b80948747d7e2a998c289.


## Batch 35 · 2026-11-05

Prepared in actual Node v24.22.1. All ten CSVs passed the committed validator with zero errors. Verified parent: `bec0e063b4a32c5094773bbdc31857ad822527e0`. Independent immutable readback follows the branch update. The exact-URL contexts and search-ID joins were checked against all ten CSV inputs. Original-language paper, publisher, funder and/or organization sources were used for individual roles. Structural checks do not appraise study validity or verify that an organization with missing data does not exist.


## Batch 36 · 2026-11-05

Prepared in actual Node v24.22.1. All ten CSVs passed the committed validator with zero errors. Verified parent: `88f2acd640d37c12f66e07f865fd546a5f823c30`. Independent immutable readback follows the branch update. Primary source checks included the territorial exempt-NPO section, programme reports, government committee list, historical survey tables, the adult study’s full methods and tables, and the NLM record for its journal country. Geriatric journal record identified in a secondary index. Final primary full text of that separate paper is outstanding.

**Batch37 immutable verification receipt:** `8becb1962fa1baf9fa8f79ef446ed49b9998f488`. Independently fetched all 18 handoff files; zero content/blob mismatches. Re-ran committed validate.mjs in Node v24.22.1 on archived CSVs: zero errors. Metrics 361/226/249/230; 1,506 without linked source; 129 targeted / 1,377 unresearched; 726 provenance; 420 searches; 5 unresolved issuers; 0 approved claims. Metadata-only checkpoint commit that follows does not alter substantive data.

**Batch38 immutable verification receipt:** . Archived ten CSVs revalidated with committed validate.mjs in Node v24.22.1: zero errors. Metrics 363/226/252/232; gout positives 23; 5 unresolved issuers; 0 approved claims. Following docs checkpoint does not alter CSVs.


## Batch 39 · 2026-11-05 · source and structural integrity receipt

- Baseline PR #71 open/draft/unmerged, head `6bf5f74c64c75bae505fe371d7df7627a29970c9`; recursive tree was non-truncated, with no AGENTS.md. Original ten CSVs and six checkpoint files were fetched and GitHub contents blob IDs matched tree. Data-only final commit: `45f84996012c3b8e458526763d0809fc40bc9bde`.
- Following six CSV mutations, all ten CSV inputs were freshly read from the current branch and checked using a JavaScript implementation of the committed `validate.mjs` invariants: 248 × 7 matrix; widths; unique IDs; exact URLs and organization/condition/source roles; source-country basis; counts; per-cell search references; metadata; M49 and cross-border/community foreign keys; original UNSD snapshot coverage.
- Result: **zero structural errors**. Metrics: 366 organizations, 226 domiciled areas, 256 resources, 236 positive cells, 1,500 unlinked (128 with targeted check; 1,372 no logged check); 739 provenance; 427 searches; 7 community; 8 cross-border; 5 unknown issuer countries; 0 clinical approvals.
- **Actual Node CLI not run**: direct connector access supplies file content but no shared filesystem required by Node. This is structurally equivalent verification, not a claim that the committed command was executed. No complete original research-paper results appraisal, clinical validity, host-legal jurisdiction, all-language/country absence, full live-URL crawl or licensing/permission review is asserted. Immutable post-commit blob readback should be checked on next head verification.


**Batch 39 immutable GitHub readback (2026-11-05):** Commit `963342355814d850a0466a325eb27e4eac421e02` independently fetched against a non-truncated recursive tree. All **18/18** Team B file contents blob IDs matched the tree; **0 mismatches**. PR #71 remained open/draft/unmerged, with 18/18 changed paths confined to `docs/atlas/handoffs/team-b/`. This GitHub integrity check does not establish any external-source or clinical validity; actual Node CLI still not run.

## Batch 43 · 2026-11-05 · immutable six-CSV hypertension batch

- Parent branch data SHA before commit: `de235538dafffc08c85be12d9d18ea2f269ebfb5`. Atomic six-CSV source commit `1e20927dfebe5f31cab326bfd2d38a8c615eb489`: organizations, condition resources, exact publication contexts, M49×7 coverage, provenance, search logs. No modifications outside Team B.
- Prewrite full JavaScript-equivalent validator: baseline **0 errors** (370/267/243/757/443). Prepared new sources verified structurally **0 errors** (375/272/248/767/448).
- Independent **post-commit immutable readback** fetched all ten CSV inputs at `1e20927dfebe5f31cab326bfd2d38a8c615eb489` and compared their blob SHA to the nontruncated 145-entry Git recursive tree: **10/10 matched**, zero blob mismatches. Rebuilt full structural invariants on actual committed CSVs, **0 errors**: 248 M49 areas × seven conditions, M49 snapshot alignment, per-row CSV widths, unique IDs, exact resource/context/role joins, source country bases and evidence IDs, complete condition count/search-log foreign keys, seven community records, eight cross-border foreign keys, all ten original input tables. Counters: 375 organizations across 227 domicile areas; 272 exact relations, 248 positive cells; 1,488 zero-source cells (128 targeted; 1,360 without targeted check); 767 provenance, 448 search logs; five unknown issuer countries.
- **Node CLI was not executed**: local container cannot resolve GitHub to clone the repository, and GitHub connector data are not mounted there. Equivalent JavaScript checks are **not** a claim of actual execution of `node docs/atlas/handoffs/team-b/validate.mjs`.
- External source checks were bounded: original society pages and guideline lists inspected; first page of the SIIA 2024 PDF visually checked. No full clinical, legal, ethical, cultural-permission, source-lifecycle or complete site crawl asserted. All claims remain `research_lead_only`. PR remains draft/unmerged.
