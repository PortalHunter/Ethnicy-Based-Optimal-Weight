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
