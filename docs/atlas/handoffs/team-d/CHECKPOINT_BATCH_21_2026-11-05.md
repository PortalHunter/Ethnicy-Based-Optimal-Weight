# Team D — complete standalone research checkpoint, Batch 21 (2026-11-05)

## 1. GitHub recovery and branch control

- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- Pull request: **https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70**
- Exclusive branch: **`research/atlas-team-d-20261104`** (PR target `main`).
- Independently verified PR **OPEN, DRAFT, UNMERGED**, both before and after data/document commits.
- Starting branch tip at this restart: `93dd126f14210d0f6c74cd3a5d59690523dadfff` (end of Batch 20).
- Latest observed post-documentation tip before this checkpoint: `fea761e96d4464d17294dce3ed58523c9c7e2afb`. **The checkpoint commit and subsequent continuation edits will move the tip. Always refetch the live head.**
- `compare_commits` from original Batch 20 head to the post-documentation tip: **nine commits ahead, zero behind; all nine changed paths are exclusively under `docs/atlas/handoffs/team-d/`**. No other-team files, `main`, public website, medical calculator, or clinical rules modified.
- **Never merge PR #70 or publish medical/network claims into the website without human review.**

## 2. Completed and GitHub-readback-verified Batch 21 changes

1. **Data — `ce3853587466f12366f8b9c606c375885204ef5f`**
   - Created `data/who_territory_wer_regional_reporting_2025.csv`.
   - **15** unique source-qualified WHO territory observations, checked **2026-11-05**.
   - Source: [WHO Weekly Epidemiological Record, Volume 101, Issues 36–37](https://www.who.int/publications/journals/weekly-epidemiological-record/wer101-36-37/), Table 5: *Global leprosy situation by WHO Region and country or territory, 2025*.
   - Publication venue is a **2026** WER issue marked epidemiological weeks **31 August–13 September 2026**; **underlying epidemiologic year is 2025**. Do **not** confuse the issue's week labels with an independently verified exact publication day, the surveillance year, or a 2026 WHO administrative assignment.
   - Row codes under the Table 5 **Region of the Americas** section: `060,092,136,254,312,474,500,531,533,534,630,660,663,796,850`.
   - Source-label crosswalk: Bermuda `060`, British Virgin Islands `092`, Cayman Islands `136`, French Guiana `254`, Guadeloupe `312`, Martinique `474`, Montserrat `500`, Curacao `531`, Aruba `533`, Sint Maarten (Dutch) `534`, Puerto Rico `630`, Anguilla `660`, Saint Martin (French) `663`, Turks and Caicos Islands `796`, US Virgin Islands `850`.
   - WHO table **includes `Saint Martin` and `Sint Maarten` as separate rows**, supporting the recorded M49 identity distinction without proving either office service remit or resolving the PAHO 13/14 Eastern Caribbean roster conflict.
   - Table entries with dash marks (e.g., Cayman Islands, Puerto Rico, Saint Martin, USVI) do not imply zero cases, completed national disease data, or an office absence.
   - All **15** associated administrative region statuses remain **`not_verified`**. WHO epidemiologic grouping is **not** automatically WHO constitutional membership, a 2026 admin region, a WHO country office, statutory medicines regulation, or local clinical guidance.

2. **Primary-source ledger — `0d352d66dfcb7ee737cfaca3c67352e7a31504d5`**
   - New unique record `TD-SRC-188`, the original WHO WER page, with `2025` vs `2026` dating and semantic limitations.
   - **188** unique source URLs and stable source IDs (previously 187). Full ledger direct GitHub readback exact.

3. **Validator regression repair and new invariant checks — `b6cf6d66f3d19c675f142d57d20d85f0da96532b`**
   - Corrected the main provenance count invariant from `187` to `188`.
   - Identified a **preexisting contradiction**: the old Batch-18 verification block still asserted `prov.length===170` after later batches had legitimately increased source count. Replaced with a cohort-specific assertion for `TD-SRC-151` through `TD-SRC-160`.
   - Added new WER cross-file assertions for exactly 15 unique M49 codes, original WHO URL and ledger ID, year/issue distinction, exact Table 5 section, unchanged 44 unresolved administrative statuses, and distinct `Saint Martin` `663` vs `Sint Maarten` `534`.
   - Moved the JSON `PASS` output to **the end of all assertions**; previous positioning allowed a misleading success print before appended checks.
   - Exact GitHub readback matched the updated validator.

4. **Documentation commits** — `STATUS.md` `050cb162ba1eba7dc10eaf3b8376ee05ce3f5ab5`; `GAPS.md` `3554e9646ece61a3d3198363533256b82c5da7bc`; `VALIDATION.md` `07112f62aa571d590265c10c0cc95216115323dd`; `CHANGELOG.md` `05eb59f663541c9f1a1b037039013b6c7c05041e`; `README.md` `bb96929cf952ff2755327933f1397aab69e0e6ec`; `METHOD.md` `fea761e96d4464d17294dce3ed58523c9c7e2afb`.
   - All six read back **byte-for-byte exact** after sequential GitHub updates.

## 3. Validation evidence and precise limits

**Full checked-in structural assertion replay: PASS** at Batch 21 data/validator snapshot, through a connector-backed, read-only JavaScript shim:

- Retrieved the actual live PR #70 unified diff (1,157,522 characters at test time).
- Parsed **47 added Team D file paths**; all were new-file patches, with no missing/removed-file reconstruction errors.
- Reconstructed the text files and confirmed all **29 `read('...')`** dependencies of the checked-in `validate.mjs` were present, including `PROVENANCE.csv`.
- Executed the checked-in validation logic in a V8 JavaScript execution context, replacing only Node imports/path resolution with readonly shims and simplified compatible assertion helpers.
- The **final** emitted JSON contained `result: PASS`, 47 nodes, 616 edges, 20 condition references, 249 status candidates, 248 official UN rows, 1 exception, 205 verified/44 unverified WHO regions, 105 April-2026 affirmative office hosts, 95 supplemental April office audits, 153 office survey labels, 34 EMA agency candidates, 228 historical 2021–2022 service observations, 225 historical edges, 188 provenance URLs, 24 HEARTS source-title catalog entries, 5 aggregate programme records, 19 regulatory-cooperation observations, 44 PAHO governance records and 21 PAHO technical-cooperation observations.
- Batch 17, 18, 19, 20 and new Batch 21 assertions each reached their expected PASS messages.

**Do not mislabel this as native Node CLI, GitHub Actions, full independent semantic reproduction of WHO sources, a legal or clinical appraisal, or public publishing approval.** Native follow-up in a network-authorized checkout: `node docs/atlas/handoffs/team-d/validate.mjs` from any directory. The checked-in comments also support running from the file directory. Keep clinical site unchanged. If any new source is added, update the global provenance count invariant carefully and use cohort-scoped checks for historical counts.

## 4. Preserved background research — not promoted from historical evidence

- Graph: **47 institutional nodes, 616 typed dated edges**, 20 institutional research references spanning all seven shared health keys; these are **not clinically appraised recommendations**.
- WHO six regional offices represented; **205 direct-current WHO administrative area assignments and 44 `not_verified`** among 249 candidates. Indonesia reassigned to WPRO **2025-05-23**, without altering UN geographic classification. Liechtenstein `438` remains explicitly `not_verified` after WHO/Europe scope distinction.
- Office roster **153 labels**: **106 April 2026**, **46 September 2024**, **1 unavailable**. **105** M49 April 2026 affirmative host attestations vs **144** candidate areas without *equivalent direct positive evidence* (**unknown, not absent**).
- **46/46 older September-2024 survey labels** separately corroborated by official WHO/PAHO evidence: **21 day-level 2026 events/news and 25 undated institution pages**. Do not turn corroboration into a 2026 country-office survey or guarantee of continuous premises.
- WHO **2021–2022** office/service inventory: **228 historical observations**, plus WHO **2019** Barbados/ECC scope and WHO **2021** selective SIDS Annex. No historical data silently promoted into 2026.
- WHO Europe SCI: **53 historical participant snapshots**, with North Macedonia *meeting observer* 2023 then member during **10–12 April 2024**, exact day/instrument unknown.
- PAHO: **44 formal status observations** separate from **21 Caribbean technical-service observations**; contested undated 13-area vs dated 2026 14-area roster and distinct French `663` vs Dutch `534`.
- EMA/EMRN: **34 identity candidates** without invented statutory remits or Team A matches.
- PAHO HEARTS **24** source titles, separate reported **29** first-version national standards vs **35** programme commitments; no automated national adoption.
- Africa CDC APPM **8** named-in-aggregate signed MoUs, **15** expressions of intent, **55** target, only Egypt individually verified as a signatory; no other unnamed country edges. Other government/regulator agreements and ASEAN structures remain differentiated.
- All source caveats, adverse/negative/unknown states, obsolete assignments and identity conflicts remain.

## 5. Outstanding acceptance / priority queue

1. **44 current WHO administrative regional statuses**: 15 now have a separate **2025 reporting-section** cue, **not** current assignment verification; seek contemporary explicit WHO geographic/administrative primary evidence. Do not inherit countries' regions for territories, nor promote 2021 SIDS headings.
2. **144 without equivalent April 2026 direct-positive WHO office-host evidence** and currency/physical operation of the **46** retained 2024 office surveys. Distinguish official host, multicountry hub, served territory, liaison, focal point, and event activity. Retained PAHO 13/14 French Saint Martin scope conflict.
3. WHO Europe SCI North Macedonia exact joining instrument/effective day; no observer/member conflation.
4. APPM seven other unnamed MoU states and 15 intent states; Egyptian UPA–Africa CDC agreement vs EDA–Algeria regulator MoU and national medicines-authority legal remit; agency-specific EMA NCA statutes and exact Team A identity joins.
5. Country/subnational PAHO HEARTS 2.0 adoption and version-in-force; ASEAN named implementing participants/time-steps; seven-condition scientific/professional network joins and Team B/C ID crosswalks.
6. Indigenous/overseas/dependent territory governance, geography and disease claims must remain distinct; no population ancestry, genetics, diagnostic, medication, weight or diet recommendation inferred from an institutional link.

Acceptance criteria are **not entirely closed**, notwithstanding graph breadth and successful structural assertions. Source interpretation and legal-current-status gaps require further evidence and human reviewer approval.

## 6. Next run protocol and exclusivity

1. Re-read this complete checkpoint, current `CONTINUATION_PROMPT.md`, `STATUS.md`, `GAPS.md`, `METHOD.md`, `PROVENANCE.csv`, `VALIDATION.md`, `CHANGELOG.md`, `validate.mjs`, all relevant `data/*.csv`.
2. Re-read original `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`.
3. **Independently verify live PR #70 is OPEN/DRAFT/UNMERGED** and latest branch SHA, inspect newly added commits and compare for non-Team-D paths before writing. Historical SHAs in this checkpoint are only snapshots.
4. Perform independent WHO/PAHO/official regulator research; prefer exact contemporaneous primary documents. Preserve review states and historic/current source years. Do **not** change public calculator or publish medical claims.
5. Commit in recoverable evidence batches, source ledger/structural tests and GitHub readbacks. Only write under `docs/atlas/handoffs/team-d/`. No `main`, no Team A/B/C/E edits, no PR merge or issue closure.
6. If unfinished, create a **new complete standalone checkpoint** with live head, all commit SHAs, counts, gaps, validation method and repeat the original user continuation prompt verbatim.

## 7. Exact original user continuation prompt

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
