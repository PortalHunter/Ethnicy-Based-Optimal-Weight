## Batch 27 checked-in structural validation — 2026-11-05

**PASS** at corrected data head [`2a760a79569c69ebfa5d7a74f82b355d5e74c31d`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/2a760a79569c69ebfa5d7a74f82b355d5e74c31d). The entire checked-in `validate.mjs` ran under a read-only V8 JavaScript `fs.readFileSync`/assertion adapter using **35** current GitHub CSV/provenance dependencies reconstructed from **58** changed Team D PR files, including **two GitHub direct-fetch oversized datasets**. **10,567 structural assertions passed**; final JSON counts: 47 nodes, 617 edges, 20 institutional condition records, 249 M49 candidates, 205 verified WHO regions/44 unknown, 105 April direct WHO host positives, 228 historical office/service records, 208 provenance URLs, 25 IDF source observations and 19 HI source observations.

An earlier full check correctly **FAILED** on the initial Batch 27 data commit (`TD-SRC-208` had nine rather than ten provenance columns); the error was repaired in the subsequent GitHub commit before re-executing the complete suite successfully. Batch 26 dataset/ledger/validator and Batch 27 HI/ledger/validator files were re-fetched with verified blob SHAs after writes. **Not a native Node CLI or GitHub Actions run**: local runtime's GitHub hostname could not be resolved. This is reproducible structural/provenance checking, not original source-law, clinical, scientific or maintainer approval. Preserve source-specific/report-year versus current WHO administrative distinctions, no legal authority or country guideline inference. [Standalone checkpoint](CHECKPOINT_BATCH_27_2026-11-05.md).

---

## Batch 25 post-commit verification — 2026-11-05

- Commit [`f2455ce220cc307b2a0b7797d5baa96c78a838c0`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/f2455ce220cc307b2a0b7797d5baa96c78a838c0), Team D data/ledger/validator only.
- **PASS** live GitHub five-file targeted cross-check: nine SPH rows / seven area codes, 204 source IDs and URL uniqueness, three new event IDs and years/M49 keys, `not_verified` preservation in 249-country status table and 44-row pending queue, 205 known assignments, validator expectations, precise event-reference-year semantics. File hashes and check detail in [Batch 25 checkpoint](CHECKPOINT_BATCH_25_2026-11-05.md).
- **No full checked-in validator PASS claimed.** Attempted complete shim read of 33 inputs failed due GitHub connector tool-call cap; native Node checkout inaccessible from this session. Last earlier full compatible shim PASS applies to **Batch 23**, not Batch 25. Do not conflate these checks with legal/medical/scientific signoff or live CI.

---

## Batch 24 validation — 2026-11-05, method and scope

- Verified research commit `aa8e5c74b649b4481c61780cac74356198374467` and PR #70 open/draft/unmerged.
- Independently fetched `data/who_sph_reporting_region_context.csv`, `PROVENANCE.csv`, `validate.mjs`, `data/m49_network_status.csv`, and `data/who_region_unresolved_queue.csv` at the new branch head.
- **Targeted checks PASS:** six width-valid WHO SPH records / six unique IDs / 201 unique source IDs and URLs / five required M49 codes / all source URLs joined to provenance / all five M49 areas in unresolved queue with administrative WHO state `not_verified` / region totals 205 verified and 44 unknown / revised validator includes Batch-24 assertions and new provenance count.
- **Not run:** native `node docs/atlas/handoffs/team-d/validate.mjs`, GitHub Actions, or a full executable JS shim of the revised Batch-24 validator. The **prior** complete structural JavaScript-shim PASS was for Batch 23. Targeted checks do not establish that *all* assertions in the new file execute, nor primary document/legal validity or clinical clearance.
- Pending: run full checked-in validator in authorized Node checkout, record exit/tool output, archive/review primary page captures as needed, obtain scientific and legal review. Historical/source-specific regional reporting must remain separate from current administration, constitutional membership, governance and office operation.

---

## Batch 23 structural validation — PASS (2026-11-05)

At commit `5bb0e50dd3c911941d72c81f1b562323892e4258`, fetched 52 Team D-only PR file patches; reconstructed 50 added files and fetched oversized `data/m49_network_status.csv` / `data/network_memberships.csv` directly; read back `validate.mjs` to verify patch identity. Supplied all **32 unique inputs** to complete checked-in assertions in **read-only JavaScript with Node-style shims**. Terminal `result: PASS`: 47 nodes, 617 edges, 20 seven-condition references, 249 geographic candidates, 205 verified/44 unknown WHO current regions, 105 April office hosts, 153 survey labels, 228 historical office/service records, 195 distinct provenance URLs and four new Greenland records. Edited data, source ledger and validator files matched direct GitHub readback. **Not native `node`**, GitHub Actions, legal/clinical/scientific acceptance. [Complete Batch 23 checkpoint](CHECKPOINT_BATCH_23_2026-11-05.md).

---

## Batch 22 — complete checked-in structural validation replay PASS (2026-11-05)

At validator SHA `f8dc3c781cccec092aec8095c91cc53ecae4e6eb`, retrieved **50** live PR #70 per-file patches, confirmed Team D-only paths, reconstructed new-file text and directly fetched the two oversized CSVs absent from GitHub's patch text (`m49_network_status.csv`, `network_memberships.csv`). All **31** checked-in `read(...)` dependencies present; all assertions executed in a V8 read-only Node-`fs`/`assert` shim. Final **PASS**: 47 nodes, 616 graph edges, 249 candidates, 205 WHO regions verified/44 unknown, 105 positive April office-hosts, 153 WHO survey labels, 228 historical service rows, **192** provenance records, plus **12** new PAHO representative records and **4** local cooperation rows. New assertions verify four new distinct URLs, 22 vs 29 Oct effective appointments, conflicting 2021-01/2021-02 former-term start months, Cayman 2023/2025 time precision, Sint Maarten 534 distinct from 663 and unchanged WHO administrative classifications.

**Qualification:** Not native Node CLI or GitHub Actions; original PAHO pages were indexed but **direct opens returned 403**, so not a page-facsimile audit; no legal, clinical or scientific certification. Native next step: `node docs/atlas/handoffs/team-d/validate.mjs` in approved checkout. [Standalone Batch 22 checkpoint](CHECKPOINT_BATCH_22_2026-11-05.md).

---

## Batch 21 read-only full structural replay PASS — 2026-11-05

Source: live draft PR #70 unified GitHub diff, which contained **47 newly created Team D paths**. Reconstructed their added UTF-8 text in an isolated JavaScript tool context, confirmed all **29** `read(...)` CSV/provenance dependencies were present, transformed only the two Node imports and `new URL(file,import.meta.url)` file resolver, supplied a read-only `fs.readFileSync` shim and assert-compatible equality/array/regex checks, and ran the complete checked-in `validate.mjs` logic. The resulting final JSON was `PASS` with 47 nodes, 616 edges, 249 statuses, 205 verified/44 unverified WHO administrative regions, 105 direct April hosts, 153 survey labels, 188 provenance URLs, 15 supplementary WER observations. All Batch 17–20 cohort assertions also passed.

Repaired existing validator inconsistency: earlier Batch-18 section asserted total provenance length **170** after Batch 20 had already raised it to 187; replaced this stale global equality with a specific Batch-18 source-lineage check for `TD-SRC-151–160`. Updated overall count from 187 to **188** and ensured the overall JSON `PASS` prints only after every assertion, including new WER checks. Verified exact GitHub readback for the three changes (new 15-row data, source ledger and validator).

**Qualification:** this is a full logical replay with a simplified read-only JavaScript harness, **not** native Node `node docs/atlas/handoffs/team-d/validate.mjs`, not a GitHub Actions execution and not a medical, legal, or semantic certification. Future maintainers should run native Node in an authorized checkout, review references, and preserve all historical/current source distinctions. Final draft PR should not be merged as a consequence of structural PASS.

---

## Batch 20 read-only validation — 2026-11-05

**Targeted cross-file audit PASS (18 named assertions) on GitHub-re-fetched branch blobs**, after commits `85d6e1e`, `b1809f8`, `406846e`: 46 unique independent-check IDs/source URLs/labels; 187 unique provenance IDs/URLs; 46 old and 106 April dashboard survey labels; exact match of 44 coded older survey M49s and two retained `not_verified` multi-country labels; 21 day-level sources plus 25 undated; all 46 new/old check URLs referenced in ledger; 17 new check IDs and 17 new ledger IDs; unchanged 44 unresolved WHO regions; revised `validate.mjs` contains cohort and date assertions. GitHub readback blobs: independent checks `38078506dc0712950ff758ac8253d1ff54f1b19e`, provenance `3bb2b08164c3d42d1127e42c42a0588f78b3423e`, validator `f95be66b94998788b65dfa0317dc80fb982ec5e4`, older survey roster `6c785c28535a6eb80d3f487449f86d4b7e962ba5`. **The full checked-in Node validator was NOT run**; an attempted connector-backed complete JS replay exceeded per-invocation call limits before executing. Prior Batch 19 full read-only shim PASS belongs to a different data snapshot and must not be re-labeled a Batch 20 PASS. Neither the targeted audit nor a structural test provides legal or clinical appraisal. Follow-up: `node docs/atlas/handoffs/team-d/validate.mjs` in an authorized checkout. [Complete Batch 20 checkpoint](CHECKPOINT_BATCH_20_2026-11-05.md).

---

## Batch 19 — complete checked-in structural validator PASS (2026-11-05)

At data/validator SHA `cdba5ad40eb828728ed8a6fe41a69433d6344fe0`, the complete `validate.mjs` body **PASSED** using an isolated read-only JavaScript filesystem/assertion shim with **28 GitHub-derived CSV files** (26 addition-only PR-patch reconstructed files, including provenance, and two large direct branch fetches). Metrics: 47 nodes, 616 edges, 249 geography statuses, 205 direct WHO regional assignments and 44 unknown, 153 survey labels, 105 affirmative April 2026 office hosts, 228 old service observations, 170 unique source URLs, and 29 independent checks of 46 retained older surveys. Cohort assertions confirm 10 Batch 19 checks, eight undated plus two dated-source event observations, preserving date precision and the 2024/2026 survey boundary. Batch 17/18 source-layer assertions also passed. GitHub readbacks verified three changed evidence/validator files; three commits changed only those three Team D paths from preceding checkpoint.

**Not** native `node` CLI, GitHub Actions, legal/regulatory or clinical appraisal. Native rerun: `node docs/atlas/handoffs/team-d/validate.mjs`. In indexed WHO source review, Libya and Sudan direct opens yielded 502; representative-name conflicts and undated WHO sites explicitly retained. [Standalone Batch 19 checkpoint](CHECKPOINT_BATCH_19_2026-11-05.md).

---

## Batch 18 complete checked-in structural assertion pass — 2026-11-05

**PASS** at corrected `0023c58ca6538d5733a5bc651d66888d1990f741`: checked-in `validate.mjs` assertions executed against **28 GitHub-derived Team D CSVs and 160 provenance records** (26 smaller additions-only PR patches + two directly fetched large CSVs) via isolated read-only JS filesystem/assertion shim. Result: 47 nodes, 616 edges, 205 verified/44 unknown current WHO region assignments, 105 current April-2026 office-positive hosts, 153 mixed-year roster rows, 19 independent older-office checks with 7 dated/12 undated source entries, 13 2021 SIDS and 14 2019 ECC historical-only observations, 160 unique source URLs. The initial run detected a stale 150-source assertion after the ten additions; this was fixed in a dedicated follow-up commit, and the complete validator rerun passed. **This is not native Node CLI or GitHub Actions, nor legal/clinical validation.** See [Batch 18 checkpoint](CHECKPOINT_BATCH_18_2026-11-05.md).

---

## Batch 17 full checked-in validator — 2026-11-05

**Corrected post-checkpoint validator SHA `95b8bd50759c95f39c4b4c5dd530dda2dc840e71` also PASS**, including spelling-correct historic ECC tag, with all 28 CSVs and 150 provenance rows from the latest GitHub patch and two oversized direct CSV downloads in the same read-only shim; *not native Node/CI*. Earlier Batch 17 data commit remains `d239c2f7398fed62ee526eded2c9b800371d4869`.

**PASS** at data/validator SHA `d239c2f7398fed62ee526eded2c9b800371d4869`. Entire checked-in `validate.mjs` executed in isolated JavaScript with read-only `fs.readFileSync` and assertion shims. Inputs: **28 GitHub-derived CSVs** (26 reconstructed intact from PR #70 additive patches; two oversized `m49_network_status.csv` and `network_memberships.csv` fetched directly by GitHub connector), plus `PROVENANCE.csv`; validator source also from live GitHub PR patch. Result: 47 nodes, 616 edges, 20 condition refs, 249 status rows, 205 source-verified WHO regions, 44 not_verified, 105 April 2026 positive office hosts, 153 office-survey rows, 228 strictly historical 2021–22 service rows, 150 unique provenance URLs, 13 historical SIDS AMRO heading records, 14 WHO 2019 ECC host/coverage records; all old and new assertions passed. This is **not** native Node CLI or GitHub Actions; legal/clinical appraisal unperformed. Both additional WHO source PDFs' indexed/extracted text was reviewed but page-image screenshot fetch returned 403. See [full standalone Batch 17 checkpoint](CHECKPOINT_BATCH_17_2026-11-05.md).

---

## Batch 16 full structural validator execution — 2026-11-05

**PASS.** Executed the complete committed `validate.mjs` assertion logic in an isolated JavaScript runtime with equivalent strict assert methods and a read-only `fs.readFileSync` shim. Inputs: **25 Team D CSV data files and one PROVENANCE.csv**, reconstructed from the live PR #70 GitHub-added patches; two oversize patch-omitted files (`data/network_memberships.csv`, `data/m49_network_status.csv`) were fetched directly from the branch. Executed after test correction `cae759dfc5e05648fcc0f9db62b99dd73abce301` with full checks for unique record/edge/source keys, referential integrity, M49/WHO region boundaries, temporal WHO office histories, PAHO, EMA, regulator evidence, SCI time roles, and unchanged historical 2026 survey boundaries. Validator output: **47 nodes; 616 edges; 20 condition rows; 249 statuses; 248 UN entries; 205 WHO region verified and 44 unknown; 105 office-present; 95 office audits; 153 survey roster; 228 historical office records; 225 historical office edges; 148 sources; 24 HEARTS pathways; five programme facts; 19 regulatory observations; 44 PAHO statuses; 21 PAHO service observations**. SCI snapshots 53 separately asserted. The in-memory validation rewrote only Node imports and file reads in the runtime, not the checked-in validation logic. **Not a literal Node CLI run, a GitHub Actions check, a legal jurisdiction verification, nor a clinical evidence appraisal.**

---

## Batch 15 post-write independent targeted CSV audit — 2026-11-05

**PASS: independently fetched and parsed 12 GitHub CSV datasets** after Batch 15 (including provenance, nodes, edges, UN M49 crosswalk, WHO region status, office historical/service and survey datasets, PAHO governance/service datasets, SCI snapshots and the nine independent office checks). Confirmed 145 unique source URLs/IDs, 47 network nodes, 586 composite-unique typed graph links, valid source references and known network/provisional organization or M49 link endpoints, 249 M49 candidates with 248 official UN geographic areas, WHO 205 direct-region verified / 44 unverified, 46 retained September 2024 surveys / 106 April 2026 roster survey labels, 228 distinct historical WHO 2021–2022 service rows, 12 direct 2026 SCI membership edges, 11 metadata-tag 2022 entries versus 12 direct 2026 roster entries, and all nine office source-check M49 codes matched existing September 2024 surveys.

**Date-precision fix:** commit `7b9cfd7c7d774ad9ce182cf490370a759ce7288b` renamed `source_published_on` to `source_evidence_date` because the WHO Montenegro event webpage documents an **event start** of 2026-06-16, NOT an independently verified webpage publication date. Revised `validate.mjs` asserts `PUBLICATION_DATE_UNKNOWN` for that case. Three other sources are dated 2026 publication items; five are undated WHO institutional pages.

**Do not overclaim:** The targeted audit above is NOT a full execution of the revised checked-in `validate.mjs`, not literal Node CLI, not a GitHub Actions check, and not independent verification of legal effects or clinical recommendations. Prior Batch 14 full JavaScript-shim PASS is limited to the Batch 14 snapshot. Native regression remains: `node docs/atlas/handoffs/team-d/validate.mjs` in a Node-enabled checkout. Latest standalone handoff: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/research/atlas-team-d-20261104/docs/atlas/handoffs/team-d/CHECKPOINT_BATCH_15_2026-11-05.md

---

## Batch 15 validation boundary — 2026-11-05

Research and edited validator SHA: 163c3ed821b44692c6ce678bcb27c7745b7e1890. Pre-commit in-memory CSV parsing and checks passed for field widths, 47/586/145 counts, 23 SCI snapshots, nine office checks, unique source IDs/URLs and typed-edge composite keys, SCI M49 crosswalk identity, and nine matches to retained September 2024 survey areas. GitHub read back each of the six modified research/validator files; compare_commits found only those six Team D paths. WARNING: This is NOT a full run of the updated checked-in validate.mjs (neither native Node nor full JS shim), and it does not supersede Batch 14's historical full shim result. In a Node checkout run: node docs/atlas/handoffs/team-d/validate.mjs. No legal/clinical acceptance is claimed. See https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/research/atlas-team-d-20261104/docs/atlas/handoffs/team-d/CHECKPOINT_BATCH_15_2026-11-05.md

---

## Batch 14 structural test and readback — 2026-11-05

**Research and validator SHA:** `6c86061d9b6742780aa8badf95a6a596d6aae1a7`. 23 CSV inputs reconstructed from the complete 36-file GitHub PR diff; all checked-in `validate.mjs` assertions **PASS** before data write and again on the committed PR diff through a **read-only JavaScript filesystem shim**. Full result: 46 nodes, **574** typed edges, 20 seven-key institutional condition discovery records, 249 area candidates/248 M49 authoritative rows, 205 WHO region verified/44 unverified, 105 April 2026 affirmative office hosts, 153 mixed-date office survey source records, 228 historical WHO service records/225 historical edges, 34 EMA NCA candidates, 24 PAHO pathway catalog titles, 5 aggregates, 19 regulator agreement reports, one WHO Liechtenstein boundary, 44 PAHO governance rows, 21 PAHO service entries, **133** unique provenance URLs.

Independently fetched from GitHub after commit: both new PAHO CSVs, network memberships, provenance ledger and validator; **all five exactly matched reconstructed GitHub PR diff bytes**. Existing 2021–2022 service edges were not promoted; the nine formal PAHO category edges and 21 service-coverage edges have different source/meaning and date fields. PAHO pages were checked via first-party search-indexed content, while direct opening returned HTTP 403 for several; provenance labels that limitation. `source_observed_on=2026-11-05` on undated pages is a **research check date**, not a service-effective date.

**Limits:** Not a native `node` CLI invocation or GitHub Actions check; not independent primary source PDF archival verification, legal/regulatory authority determination or clinical appraisal. Native reproducible check in a real checkout: `node docs/atlas/handoffs/team-d/validate.mjs`. All changes confined to Team D.

---

## Batch 13 validation — 2026-11-05

**Data/validator SHA** `59ae6fcd79fefb1723d634f7c1091666c267fa4d` (corrects two regex errors in intermediate `1809d1404899e5d06babb2d588eb2242e856b5aa`). **PASS:** executed the exact checked-in `validate.mjs` assertion body (imports/file URL replaced by read-only equivalent) against complete content of all **22 CSV inputs** reconstructed from the live GitHub PR #70 unified diff, whose 34 changed paths are all Team D. The compiled source, newly added regulator CSV and `PROVENANCE.csv` exactly matched independent `fetch_file` responses for the data SHA. Both standalone new data sources also underwent independent CSV column-width, ID-uniqueness, M49 reference, date-precision and source-ledger checks.

Validator output: `nodes=46; edges=544; conditions=20; statuses=249; verified_regions=205; unverified_regions=44; office_presence=105; office_survey_roster=153; emrn_candidates=34; historical_office_records=228; historical_office_edges=225; provenance=125; hearts_catalog=24; programme_evidence=5; regulatory_agreements=19; who_region_boundary_evidence=1`.

This was **not** a literal `node docs/atlas/handoffs/team-d/validate.mjs` command in a Node checkout, a GitHub Actions run, full original agreement-text verification, statutory/legal appraisal, or scientific/clinical evidence appraisal. Such claims require separate execution/review. On a Node-capable checkout, run `node docs/atlas/handoffs/team-d/validate.mjs` and preserve the resulting log.

---

## Batch 12 validation — 2026-11-05

**PASS (structural assertions):** full checked-in `validate.mjs` body, data/validator commit `f430ad45e83ae183656ba468648d2f0e4123f382`, evaluated under a read-only JavaScript filesystem shim using **19 CSV inputs fetched from GitHub** plus **one newly authored exact ASEAN governance fixture**. Independent GitHub readback afterward confirmed the five committed changed paths: `data/international_networks.csv` (**46 nodes**), `data/network_memberships.csv` (**544 typed edges**), `PROVENANCE.csv` (**122 unique source URLs**), `data/asean_health_governance_2026.csv` (**6 source roles**) and `validate.mjs` (new APPM and ASEAN consistency assertions). Other asserted counts: 20 condition records; 249 candidates (248 official M49 + special exception); 205 verified and 44 unverified WHO regions; 105 affirmative April 2026 office hosts; 95 additional office audits; 153 mixed-year survey labels; 34 EMA agency candidates; 228 *historical* office/service records and 225 linked historical edges; 24 HEARTS catalog titles; five aggregate programme observations.

**Execution caveat:** The ASEAN fixture was supplied in the JS runtime rather than loaded from the GitHub API within that particular pass to respect connector operation limits; subsequently re-fetched GitHub content confirmed the six named roles. This is **not** an independent literal `node docs/atlas/handoffs/team-d/validate.mjs` shell execution or a GitHub Actions pass. No clinical appraisal, statutory remit validation, automatic AU/ASEAN member-state adoption or 2026 physical office operation is claimed. Reviewer should run the literal Node CLI in a Node-enabled checkout.

---

## Batch 11 verified runtime structural validation — 2026-11-05

**PASS**, GitHub data snapshot `e430702b371b9393603c94f7fc40f9712f61d378`. Fetched the current checked-in `validate.mjs` and **19 input CSV files** directly from this commit; executed its full structural assertion body in an isolated JavaScript runtime, replacing Node's filesystem reads with exact read-only GitHub file strings. Result: nodes **45**; edges **542**; institutional condition references **20**; retained region candidates **249**; official UN M49 **248**; one exception; verified WHO regions **205** / unknown **44**; positive current office hosts **105**; 2026 office audits **95**; WHO survey roster **153**; EMA NCA identity candidates **34**; historic WHO office/service records **228** and typed graph edges **225**; provenance **118** unique URLs; PAHO catalog **24**; programme observations **5**. The exact program was checked in and the four changed data/validator files were fetched back from GitHub; a prior duplicated provenance URL was caught and corrected at commit `e430702b371b9393603c94f7fc40f9712f61d378`.

**Limitations:** This does **not** assert a literal shell/Node invocation of `node docs/atlas/handoffs/team-d/validate.mjs`, a GitHub Actions CI success, a full scientific appraisal, legal/adoption verification or uninterrupted office operation in November 2026. A Node-enabled checkout should still run the Node CLI. This batch asserts no new participant-country edges and keeps April 2026 versus September 2024 WHO office survey data and 2021–2022 historical office coverage separate.

---

## Final Batch 10 GitHub-snapshot structural execution — 2026-11-05

Snapshot `43b1743a1d01be065530c0a0c2b1996fcc9a5986`: **PASS**, with 17 GitHub-hosted CSV inputs evaluated by executing the checked-in `validate.mjs` assertions under an isolated JavaScript read-only-file shim. Output: 45 nodes, 542 edges, 20 condition keys, 249 statuses, 248 UN crosswalk, 1 seed exception, 205 verified/44 unverified regions, 105 current positive offices, 95 typed 2026 audits, 153 time-qualified office survey rows, 34 EMA NCA identity candidates, 228 historical office/service rows, 225 historical edges, 114 provenance records. GitHub readback of all 13 changed data/docs paths succeeded. **No literal Node CLI invocation or GitHub Actions success asserted.** See `CHECKPOINT_2026-11-05.md`.

## Batch 10 structural checks (2026-11-05)

Added 34 unique EMA-listed authority/country candidates, exactly 30 official M49 geographic joins, Germany 2 / Netherlands 3 / Poland 2, source validity, and mandatory unresolved statutory remits and Team A identity states. Provenance is 114; existing WHO historical/current, graph and seven-condition checks remain active. Execute validation at the final saved SHA; no Node CLI run is claimed merely from this edit.

## Batch 9 validator correction and execution-equivalent check (2026-11-05)

The prior Batch 8 audit rule assumed all audited April 2026 offices were ordinary single-country offices. After adding the complete survey roster, that assertion was too restrictive: the WHO source separately identifies country offices also covering territories, multi-country offices and country liaison offices. The rule has been corrected to accept **only these four explicit source-labelled types**; row-level M49, survey date, provenance and cross-file assertions remain in force.

**PASS:** 16 CSV files were fetched at saved GitHub commit `b32202dc552ab72076d187d2ce0ee9e6d7a3692b`; the checked-in validator's assertions were executed in a JavaScript runtime with read-only GitHub file contents substituted for Node's filesystem reads. This is equivalent for the checked structural assertions, but **not** an invocation of the Node CLI or an assertion of GitHub Actions success. Report: 45 nodes, 542 edges, 20 condition references, 249 statuses, 248 UN crosswalk, one seed exception, 205 verified/44 unresolved regions, 105 positive current office codes, 95 additional typed April-2026 office audits, 153 time-qualified office roster entries, 228 historical office records, 225 historical office edges, and 113 source URLs.

## Batch 9 structural verification (2026-11-05)

Validator now checks 153 source-labeled office survey records; 106 latest April 2026 / 46 latest September 2024 / 1 unavailable; four deliberately unmatched area-to-M49 joins; 105 distinct current affirmative office codes, 95 typed individual 2026 audit records, ten retained SEARO records. All 105 current office-host codes must appear among the official 248 UN M49 codes and among the 106 WHO April 2026 survey rows, without status contradictions. This does not turn unobserved office coverage into negative facts. The earlier historical WHO 2023 data and graph constraints remain unchanged. This GitHub connector session performed its own runtime structural tests and GitHub readback. It does **not** assert local execution of `node validate.mjs` or that GitHub Actions have succeeded.

## Batch 8 structural-check delta (2026-11-05)

Data invariants added to validate.mjs: current office table 31 distinct M49 codes, preserves all 10 SEARO office attestations; 21 April 2026 WHO country-office survey audits with valid M49 and matching separately source-backed region/status; new official source TD-SRC-113 exists in provenance; total provenance 113. Other fixed baseline invariants remain 45 nodes, 542 edges, 205 verified regions, 44 unresolved and 228 historical WHO 2023 service records. **The validator script was updated and reviewed; a local `node validate.mjs` execution is not claimed by this connector-only session.** GitHub readback and connector-side structural checks are recorded in the final checkpoint.

# Team D — validation, 2026-11-05

Run `node validate.mjs` from this directory. CSV parser rejects inconsistent row widths and honors quoted commas and newlines. Checks unique IDs, edge composite uniqueness, node endpoints, internal code references, all seven condition keys, source-ledger closure, UN-versus-seed reconciliation, explicit missing WHO status fields and SEARO office/region boundary cases. Also checks Indonesia WPRO and US governance-pending protections.

Batch 1 expected: 36 nodes, 124 edges, 20 conditions, 249 retained candidate statuses, 248 official UN crosswalk rows, 1 seed exception, 12 verified region statuses, 237 not_verified region statuses, 10 office-presence records, 48 provenance URLs. The UN seed exception is code 158. Historical 2026-11-04 results are retained in Git history.

Structural validation does not establish clinical evidence quality, complete WHO governance or country-office coverage, or legal guideline adoption. The latest source review and retrieval limitations are in BATCH_2026-11-05.md.

Batch 2 expected: 177 edges, 65 verified region statuses, 184 not_verified and 50 provenance URLs; other table counts unchanged. Validator checks exactly 53 EURO assignments and specifically prevents inferring Liechtenstein's region from EEA participation.

Batch 3 expected: 223 edges, 111 verified region statuses, 138 not_verified and 51 provenance URLs. Other counts unchanged. Exactly 47 AFRO assignments required; Algeria recheck does not add a duplicate edge. Boundary cases now total 23.

Batch 4 expected: 260 edges; 148 verified region statuses; 101 not_verified; 52 provenance URLs; 38 source-name match rows (ten aliases). WPRO exactly 38; Indonesia transfer date preserved; ISO-only 158 unassigned; US-territory cautions retained. Other counts unchanged.

Batch 5 expected: 282 edges, 170 verified statuses, 79 not_verified, 75 provenance URLs and 21 individual-profile checks. Exactly 22 EMRO country/area assignments; 275 has independent explicit regional source and no WHO constitutional membership inference.

Batch 6 expected: 317 edges; 205 verified statuses; 44 not_verified; 110 sources; 56 individual-profile checks (21 EMRO plus35 AMRO). All 35 Americas region records require matching individual WHO profile audit record. US governance remains pending.

Final handoff after batch6: 317 edges;205 verified statuses;44 not_verified;111 source URLs;44 unresolved queue rows exactly matching unknown status IDs;56 WHO profile audit records;38 WPRO name matches. Boundary cases total28. Queue reasons do not assert absent relationships.


## Batch 7 expected results — WHO office topology

- 45 nodes; 542 relationships; 112 provenance URLs; 228 historical rows in `who_office_coverage_2023.csv` (154 Annex 2 source labels, 42 MCO coverage, 32 focal-point coverage).
- 153 Annex 2 rows have a candidate M49 join; Kosovo is retained without an M49 join. One Cyprus row records Jan 2023 establishment; Israel host-agreement uncertainty retained.
- Structural validator checks source closure, unique historical row IDs, M49-indexed endpoints, office-node endpoints, exact type counts and separation of current ten SEARO office attestations from historical 2023 report data.
- The historical batch does not establish current 2026 office presence or country/area absences. Regional focal point is not physical office; MCO coverage is not WHO constitutional membership.
