# Team B validation history

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
