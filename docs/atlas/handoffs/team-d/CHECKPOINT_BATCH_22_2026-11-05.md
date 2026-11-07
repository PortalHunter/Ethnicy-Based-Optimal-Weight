# Team D — complete standalone research checkpoint, Batch 22 (2026-11-05)

## 1. Live GitHub recovery and write boundaries

- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- PR: **https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70** — observed **OPEN, DRAFT, UNMERGED** at this run's start and after research commits.
- Branch: `research/atlas-team-d-20261104`; PR targets `main`. Team D writes must remain confined to `docs/atlas/handoffs/team-d/`. Do **not** publish to public website, change other teams, merge PR, or close research issues.
- Initial verified head: `95d0a030f9f874e4c2da693f5a09fa0ee7bf4230` (after Batch 21 checkpoint/prompt). Verified post-evidence/validator head before this checkpoint: **`f8dc3c781cccec092aec8095c91cc53ecae4e6eb`**. This checkpoint and later documentation commits advance the head; **refetch PR head and GitHub file blobs before writing**, never trust old SHAs.
- The original assignment is `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` with `DATA_CONTRACT.md` from branch `research/atlas-five-team-handoff-prompts-2026-11-04`. Both were read. Preserve time-aware institutional link semantics, source caveats, full geographic universe, and all seven non-clinical condition references.

## 2. GitHub-committed Batch 22 work, exact commits and paths

1. **`7dbbe72e3d4fe763f9854d9b4caf75bd78170d07`** — created `data/paho_representative_terms_2026.csv`, **12** PAHO representative-source observations. **Five new assignments**:
   - Ian A. Stein: Bahamas **M49 044** and Turks and Caicos Islands **796**, **effective 2026-10-22**, PAHO notice **2026-10-23**.
   - Eldonna V. Boisson: Jamaica **388**, Bermuda **060**, Cayman Islands **136**, **effective 2026-10-29**, PAHO notice **2026-10-30**.
   - **Seven separate historical source observations**: two former-Boisson territory assignments times **two official announcements** (four rows) and three former-Ian area assignments. PAHO **2026-10-23** says Boisson's Bahamas/Turks term ran from **February 2021** to October 2026; PAHO **2026-10-30** instead says **January 2021** to October 2026. Both official monthly statements are retained, neither silently chosen. Ian's previous Jamaica/Bermuda/Cayman term is described as `since 2021` without a verified end day. **Do not infer an interim office holder, gap or overlap between 22 and 29 October**. One representative may cover multiple areas; these links are not dedicated physical offices, WHO regional assignments or constitutional membership.
2. **`05ebd29752117197f3d5cdc1f00f218e0ecbf7fc`** — created `data/paho_local_implementation_evidence_2026.csv`, **four** independently source/date-qualified local activities:
   - Cayman Islands **136**: PAHO October 13, 2026 account of 2023 WHO STEPS survey cooperation, a **September 2025** HEARTS technical-support visit, and HEARTS primary-care implementation and protocol development described in October 2026 without an independently verified exact introduction date, local edition in legal force or clinical outcome appraisal.
   - Dutch Sint Maarten **534**: PAHO article **2026-10-29**, datelined **2026-10-28**, describes technical consultations over a laboratory-policy revision and updated framework with the health ministry and Dutch Caribbean representation; **not proof of enacted policy or new statutory powers**. French Saint Martin **663** remains a different area.
3. **`b0f3e68a6b114b4584f43673ad6e4558fa8564bd`** — appended **four distinct first-party PAHO URL records** `TD-SRC-189–192` to `PROVENANCE.csv`, now **192 unique URLs**. All four are official paho.org news pages returned through the website's search-indexed text; **every attempted direct web open returned HTTP 403** on 2026-11-05. Data and source ledger explicitly mark `OFFICIAL_PAHO_INDEXED_DIRECT_OPEN_403`; this is less than a direct independent page/facsimile review. Source URLs:
   - https://www.paho.org/en/news/23-10-2026-mr-ian-stein-appointed-pahowho-representative-bahamas-and-turks-and-caicos-islands
   - https://www.paho.org/en/news/30-10-2026-pahowho-appoints-dr-eldonna-boisson-representative-jamaica-bermuda-and-cayman
   - https://www.paho.org/en/news/13-10-2026-steps-hearts-new-chapter-cardiovascular-care-cayman-islands
   - https://www.paho.org/en/news/29-10-2026-paho-supports-efforts-strengthen-laboratory-services-sint-maarten
4. **`f8dc3c781cccec092aec8095c91cc53ecae4e6eb`** — updated `validate.mjs`: provenance count 188→192, two new data-input reads, unique IDs, source membership, date-precision checks, the conflicting former-role start-month assertions, country-code checks and WHO-region non-promotion. The source/data files and validator were read back directly from live GitHub.

## 3. Structural validation — precise method and results

**PASS** of the complete checked-in JavaScript structural validator in a **read-only V8/Node-compatible shim**, not native Node execution.

- Retrieved all **50** per-file patches for live PR #70, verified every changed path stayed under Team D. All are newly added relative to the target `main`; reconstructed their current contents from added lines.
- GitHub patch endpoint omitted two oversized datasets, so independently fetched full `data/m49_network_status.csv` and `data/network_memberships.csv` at the current Team D branch.
- Confirmed **31 unique `read(...)`** CSV/provenance dependencies were present; the tested `validate.mjs` was the actual checked-in file. Replaced only Node `fs`, `assert` and `import.meta.url` resolver with read-only compatible JavaScript implementations, then executed every checked-in structural assertion.
- Output: **`result: PASS`**, graph **47 nodes / 616 typed edges / 20 condition references**; **249** M49 candidates, **248** direct UN crosswalk plus **one** seed exception; current WHO regions **205 verified/44 not verified**; **105** April-2026 positive office hosts, **95** supplemental newer audits, **153** survey labels, **228** separate Jan 2021–Dec 2022 historical service rows and **225** historical edges; **34** EMA NCA identity candidates; **192** unique provenance URLs; **24** HEARTS document title entries, **5** aggregate programme observations, **19** regulatory cooperation items, **44** PAHO governance and **21** PAHO technical-cooperation items; new PAHO **12** representative and **4** local cooperation observations. Existing Batch 17–21 checks and all new Batch 22 assertions passed.
- **Limitations:** NOT `node docs/atlas/handoffs/team-d/validate.mjs` in a real checkout, NOT GitHub Actions, NOT full direct source visual validation, NOT binding national statutes or medical efficacy/diagnostic/clinical appraisal. Maintainers must independently inspect official sources (especially four direct-open-403 PAHO pages) and run native Node.

## 4. Preserved prior research — no reclassification or publication

- All six WHO offices represented, full geographic review universe retained; 47 / 616 temporal institutional graph unchanged. Indonesia WPRO effective **2025-05-23** separate from UN geographic region. Liechtenstein WHO/Europe context does **not** justify automatic `438` administrative assignment; unresolved `044/060/136/534/796` etc. remain explicitly unverified where applicable.
- WHO office dashboard: **153** original source labels — **106 April 2026, 46 September 2024, one unavailable**; **105** direct positive April-2026 M49 office-host attestations; **144** without equivalent direct-positive evidence = **unknown, not known absence**. 46/46 older survey labels have supplementary first-party checks, not updated 2026 surveys or continuous premises evidence.
- WHO 2023 report is for **2021–2022** historical office, MCO and focal-point service records; WHO 2019 Eastern Caribbean and WHO July 2021 selective SIDS annex remain historical-only. WHO WER 101 36–37 published in **2026** reports **2025** leprosy surveillance grouping for **15** Caribbean territory codes, none promoted to 2026 WHO administrative membership or offices.
- PAHO 2019, undated and August 2026 Eastern Caribbean listings differ about **French Saint Martin 663** in the 13-vs-14 scope dispute; Dutch **534** is distinct. No inferred controlling roster, effective service date or physical premises.
- North Macedonia had WHO Europe SCI **meeting-observer** evidence in May 2023 and became a **member during 10–12 April 2024**; exact day/instrument unknown. Scientific alliances are not national health laws.
- Eight Africa CDC APPM signed MoUs and 15 intents are aggregate, seven other signed identities unknown; Egypt individually verified in limited agreement context. EMA 34 NCA identities still need agency-specific statutory remit / Team A joins. HEARTS 29 first-version national standards is an aggregate distinct from 35 programme commitments or 2026 HEARTS 2.0 local implementation. ASEAN and seven-condition society links await exact source-identity joins; none supports ancestry-, medication-, weight- or diet-specific advice.

## 5. Remaining original acceptance / review queue

1. **44** current WHO administrative region gaps: seek explicit contemporary primary-office/territory assignments, never inherit parent or surveillance table regions.
2. **144** areas without direct positive April-2026 WHO office-host evidence, operational currency of **46** 2024 office surveys, and precise liaison/physical-office vs multicountry technical service categories.
3. Resolve conflicting PAHO 2021 January/February Boisson prior-role start months and 22–29 October 2026 prior-term transfer if directly documented. Re-open four primary PAHO pages after 403, archive valid capture if permitted; verify national HEARTS protocol edition/adoption and Dutch Sint Maarten laboratory framework legal status independently.
4. PAHO Eastern Caribbean 13/14 French Saint Martin dispute, North Macedonia SCI accession instrument/day, seven other unnamed APPM MoU country identities, EMA NCA statutes, ASEAN implementing partners, local HEARTS 2.0 versions, seven-condition institutional network provenance and exact Team A/B/C crosswalks.
5. Maintain all negative/unknown/obsolete states; no clinical or legal claim can become publishable without a separate scientific/maintainer review. **PR stays open, draft, unmerged.**

## 6. Safe standalone continuation procedure

1. Reopen this checkpoint and `CONTINUATION_PROMPT.md`; fetch current live PR #70 branch and head SHA. Compare with verified last branch state before writes.
2. Read `STATUS.md`, `GAPS.md`, `PROVENANCE.csv`, `CHANGELOG.md`, `VALIDATION.md`, `METHOD.md`, `validate.mjs`, relevant `data/*.csv`, original `TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md`. Avoid duplication with current 192 source URLs.
3. Continue independent primary-source data checks and legal/time-specific jurisdiction separation; commit source-qualified evidence in manageable batches **only under Team D**. Preserve old snapshots as immutable history; do not overwrite other teams, `main`, public medical site or clinical calculator.
4. Update source ledger + validation after each data batch, commit updated docs and another complete standalone checkpoint, read back all changed artifacts from GitHub, compare scope, verify PR stays open/draft/unmerged. Do not describe shim PASS as native Node/Actions or science signoff.

## 7. Exact user continuation prompt

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
