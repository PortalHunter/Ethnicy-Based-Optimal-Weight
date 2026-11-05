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

