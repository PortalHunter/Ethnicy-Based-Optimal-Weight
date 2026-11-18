# Team D standalone checkpoint — Batch 17 — 2026-11-05

## Post-checkpoint integrity correction — 2026-11-05

After the Batch 17 checkpoint was first committed, a machine-readable relationship label typo was fixed in the 2019 ECC CSV, the validator, and this handoff (`BARBDOS` → `BARBADOS`), commit **`95b8bd50759c95f39c4b4c5dd530dda2dc840e71`**. The **complete checked-in structural validator was re-executed and passed** at that corrected commit against **28 CSVs and 150 provenance URLs** using live GitHub source patches and two directly fetched large CSVs in a read-only JavaScript shim. All source evidence, graph counts, 205/44 current-region statuses, 13 historical SIDS rows and 14 historical ECC rows are unchanged. This is not native Node/Actions. **Refetch live branch head after this documentation-only update.**

## Repository authority and strict permissions

- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- Research branch: `research/atlas-team-d-20261104`
- PR #70: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 — verified **open, draft, unmerged** after first Batch 17 data commit; verify again on each restart.
- Batch 16 starting branch head: `965eb1a8935c748f6a1c6dc859c4a7055dc69344`.
- Batch 17 research and validator source/data commit: `d239c2f7398fed62ee526eded2c9b800371d4869`. **This documentation checkpoint creates a later commit; refetch the branch head at restart.**
- Only change `docs/atlas/handoffs/team-d/`. Do not modify `main`, the public site/calculator, other teams, patient-facing advice, clinical rules, issue closure or PR merge.

## New primary-source research — 27 historical observations and 2 unique sources

### 1. WHO July 2021 SIDS Annex — 13 historic AMRO headings, not 2026 assignments

Source: [WHO, *WHO country presence in small island developing states (SIDS), 2021; revised July 2021*](https://iris.who.int/bitstream/handle/10665/344252/9789240033573-eng.pdf?sequence=1), Annex printed page 27, and WHO country presence text from pages 10–11. Report context is **2019–2020**; revised publication month is **2021-07**, **not** a region entry/effective date.

The WHO Annex explicitly places the following **13 currently-unresolved M49 areas** under a **WHO Region of the Americas** column: Bermuda (060), British Virgin Islands (092), Cayman Islands (136), Guadeloupe (312), Martinique (474), Montserrat (500), Curaçao (531), Aruba (533), Sint Maarten Dutch part (534), Puerto Rico (630), Anguilla (660), Turks and Caicos Islands (796), and US Virgin Islands (850). Each is separately recorded in **`data/who_region_historical_sids_2021.csv`**, with direct source URL, `2021-07` month-precision source time, 2019–20 document context and explicit historical-only source type.

**Do not silently upgrade any to current `who_region=AMRO`**. The Annex is an intentionally selected **SIDS list, not a complete region/territory roster**. It is also not WHO constitutional membership, evidence of a local office, a national agency legal jurisdiction or clinical adoption. The 13 corresponding modern M49 statuses and **all 44** unverified records remain `not_verified`.

### 2. WHO 2019 Eastern Caribbean Table 2 — historical host and service roster

Source: [WHO, *WHO presence in countries, territories and areas: report 2019*, section 1.1.4, Table 2](https://iris.who.int/bitstream/handle/10665/311592/WHO-CCU-19.01-eng.pdf). The WHO table identifies the **Barbados-based Eastern Caribbean office** and **13 additional named technical-service areas**: Antigua and Barbuda (028), British Virgin Islands (092), Dominica (212), French Guiana (254), Grenada (308), Guadeloupe (312), Martinique (474), Montserrat (500), Saint Kitts and Nevis (659), Anguilla (660), Saint Lucia (662), French Saint Martin (663), Saint Vincent and the Grenadines (670); Barbados (052) is the **office host**, not falsely counted as another satellite service territory.

All **14** host/service location records are in **`data/who_ecc_historical_scope_2019.csv`**, labelled `OFFICE_HOST_IN_2019` versus `COVERED_BY_BARBADOS_WHO_MCO_2019`. Original report only establishes a **2019 historical report observation**, not an independently confirmed service start date, end date, separate physical WHO office at each territory, or uninterrupted current coverage.

The 2019 WHO table **names French Saint Martin (663)**, as does PAHO's separately existing **2026-08-24** announcement of 14 Barbados/ECC service areas. The **July 2021 SIDS-only Annex** does not name French Saint Martin: this is a list-scope difference, **not documented withdrawal**. PAHO's separate undated overview lists 13; the apparent 13-versus-14 disagreement **remains unresolved** pending confirmation of a current controlling coverage roster, change history, or corrections. **French Saint Martin (663) and Dutch Sint Maarten (534) are different areas**, the latter linked in Team D's 2026 PAHO cooperation data to Trinidad/Dutch Caribbean.

### Retrieval verification boundary

Both WHO URLs are official WHO-hosted publications whose **search-extracted PDF text was read** for the cited table/Annex; the web PDF screenshot/page-image retrieval independently returned **HTTP 403** for each. `PROVENANCE.csv` source IDs **TD-SRC-149** and **TD-SRC-150** explicitly mark this retrieval limitation. Do **not** claim PDF page-image visual review, document facsimile verification or an entirely independent original-text transcription audit. A future reviewer should visually verify page 27 and 2019 Table 2 on an accessible WHO copy before production.

## Full structural validation and preserved dataset

- **PASS:** the **entire checked-in** `validate.mjs` program, including Batch 17 assertions for source URLs, exact 13/14 M49 codes, unique IDs, date precision, historic-versus-current separation, and preserved region status counts, executed in an isolated JavaScript runtime using read-only filesystem/assertion shims.
- Input from live PR #70 GitHub file patches reconstructed **26 smaller CSVs, `PROVENANCE.csv` and `validate.mjs`**, plus **two oversized CSVs fetched directly by GitHub connector**: `data/m49_network_status.csv` and `data/network_memberships.csv`. **28 CSVs** in total.
- Result: **47 institutional nodes; 616 typed edges; 20 seven-condition institutional references; 249 candidate M49/ISO status rows (248 official UN M49 crosswalk + one 158 exception); 205 directly verified current WHO region assignments, 44 `not_verified`; 150 provenance URLs.** Also unchanged: **105** April 2026 affirmative office hosts; **153** WHO survey profile rows (106 April 2026, 46 retained September 2024, 1 unavailable); **228** Jan 2021–Dec 2022 *historical* WHO office/service records (225 historical graph edges); **34** EMA regulator identity candidates; **24** PAHO HEARTS catalog records; **19** regulator cooperation observations; **44** PAHO governance category rows; **21** PAHO 2026 cooperation rows; **53** WHO Europe SCI historical/current snapshots and nine independent WHO office cross-checks.
- **Not** a native `node docs/atlas/handoffs/team-d/validate.mjs` command or GitHub Actions run; these remain to be executed in a Node-capable checkout. Structural checks do **not** constitute legal verification, scientific/clinical appraisal, project acceptance or authorization for patient use.
- Data/provenance/validator files were independently fetched from GitHub after the data commit: new data files contain **13 and 14** records, `PROVENANCE.csv` **150** sources, GitHub branch and PR heads equal the research commit. This checkpoint and other docs must likewise be read back after the documentation commit.
- All **8** initial Batch 17 changed paths are within Team D. No `main`, other-team, public site or patient-facing files touched. PR remained **open/draft/unmerged** on readback.

## Work still pending

1. Identify direct **current** WHO assignment evidence for 44 unresolved M49/exception areas, now with 13 *historical* clues; do not inherit parent jurisdiction or stale SIDS grouping.
2. Recheck 46 September 2024 office survey profiles and 144 M49 candidates without equivalent affirmative April 2026 self-report, while keeping historical 2021–22 and 2019 office service sources separate from current physical presence.
3. Reconcile the undated PAHO **13** versus 2026-08-24 **14** Barbados/ECC roster and request a precise service-effective chronology; verify inaccessible original WHO PDFs visually.
4. Locate North Macedonia's exact SCI admission instrument/day (April 10–12 2024 window verified), regulatory MoU originals and statutes, seven unnamed APPM signatory states/15 intentions, EMA agency remits and exact Team A identity joins.
5. Confirm country-specific HEARTS version/adoption, 2026–2030 ASEAN implementing countries and Team B/C network/society/journal IDs; do not infer legal or clinical adoption from multilateral participation.
6. Run native Node and CI validation and have appropriate scientific/legal/maintainer review before any publication.

## Exact repeatable user continuation prompt

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
