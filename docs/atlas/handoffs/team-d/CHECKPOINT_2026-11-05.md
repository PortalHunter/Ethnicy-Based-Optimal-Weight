# Latest standalone Team D checkpoint — Batch 11 (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Research branch:** `research/atlas-team-d-20261104`  
**Existing draft pull request:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 — open/draft/unmerged at source verification.  
**Validated data/validator commit SHA:** `e430702b371b9393603c94f7fc40f9712f61d378` (the subsequent documentation commit changes branch head; always fetch live PR/head first).  
**Restart instructions:** `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md`.  
**Original assignment:** `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`.

## New independently sourced data and preserved distinctions

- `data/hearts_pathway_catalog_2026.csv`: **24** official PAHO catalog records, **18** source-listed on catalog page 0 and **6** page 1. Two are regional templates (18 Jul 2024 and 8 May 2026); **22** are local 2024 catalog labels. Three represent Mexico **subnational** pathways (Sonora, Yucatán, Chiapas) rather than a national Mexico pathway; Bermuda (060) and British Virgin Islands (092) are area/territory labels; PAHO's “DOMINICA REPUBLIC” is deliberately **not_verified M49** pending exact source identity review, distinct from Dominica 212. Index publication ≠ country legal adoption, national guidance approval or clinical appraisal.
- `data/cross_border_programme_evidence_2026.csv`: **five aggregate provenance-linked programme observations**. Africa CDC APPM official 15 Oct 2026 announcement: **8 MoU signatories**, **15 expressions of interest**, **55-state coverage target**; no signatory identities cited, so no country graph links. PAHO official 15 May 2026 announcement: first HEARTS pathway version adopted nationally in **29** countries (names not supplied). Undated PAHO programme page: **35** countries committed to the initiative (date/denominator distinguished). None establishes that particular countries adopted the 2026 HEARTS 2.0 standard.
- **Four new unique original source URLs** TD-SRC-115 through 118; total `PROVENANCE.csv` **118**. PAHO general site already TD-SRC-024: the duplicate URL detected by validator was removed in correction commit `e430702b371b9393603c94f7fc40f9712f61d378`.
- Research data commit `e3959112ad1095c7f0e0c202d323cd3190a1670e`; uniqueness repair/validated data commit `e430702b371b9393603c94f7fc40f9712f61d378`. No original records were overwritten; no new regulator or programme country-member edge asserted.

## Exact preserved baseline and validation

**45 network nodes, 542 typed sourced edges, 20 non-clinically-appraised seven-condition institutional references.** Geographic 249 ISO-seed candidates / 248 official UN M49 overview rows / special seed exception 158. **205** verified WHO administrative regions and **44** unresolved; all six regional offices. **153** current-dashboard WHO source labels: **106** office-head April 2026 survey entries, **46** retained September 2024, **one** without data. **105** affirmative M49-coded April-2026 WHO host-office evidence entries; other **144** candidates lack equivalent recent affirmative source evidence (not evidence of absent office). **228** 2023 WHO report office/service records refer to **Jan 2021–Dec 2022** and retain **225** typed historical graph links, not silently upgraded to 2026. EMA **34** human-medicines national-competent-authority candidates across 30 areas, with all agency-specific legal remits and Team A identity joins pending.

**PASS:** fetched and ran the *full checked-in* `validate.mjs` structural assertions against **19 GitHub-hosted CSV files**, using a JavaScript read-only-filesystem shim at `e430702b371b9393603c94f7fc40f9712f61d378`; new rules cover PAHO and APPM rows, unique source IDs/URLs and M49 boundaries. This is **not** a literal Node shell run, Actions/CI result, statutory remit validation, national adoption claim or clinical appraisal. Full latest report in `VALIDATION.md`.

## Explicit unresolved research

1. All **44** remaining WHO regional assignment records must receive direct WHO country/area evidence before promotion; no parent geographic inheritance. Bermuda WHO regional CPCD label and Indonesia's stale CPCD SEARO listing remain conflict-only; Indonesia transfer to WPRO effective 2025-05-23 preserved. US WHO constitutional governance remains pending.
2. **46** WHO office records retained from September 2024 need individual later evidence; **144** geographic candidates lack an April 2026 affirmative country-office survey record. Do not reinterpret Jan 2021–Dec 2022 WHO historical Annex 2/3/4 coverage as November 2026 office operation; MCO, liaison, focal-point and physical host differ.
3. Identify **eight actual APPM signatories** and 15 intent countries before any signed/expressed-intent country edges, and verify legal authority of each participant; current source gives only counts.
4. Identify national HEARTS v1 adopters (**29 aggregate**) and separate programme commitments (**35 undated aggregate**), check local ministry versions, dates, publishing vs legal adoption, and distinguish 2026 HEARTS 2.0 availability from country adoption. Confirm identity for source typo “DOMINICA REPUBLIC”. No individualized health advice.
5. Complete per-agency EMA/EMRN national legal remits and exact Team A joins, ASEAN health programme participants, Africa CDC/AU programme identity, professional society links to Team B, local HEARTS editions and study appraisal to Team C only where documented.

## Branch scope and restart

**Only `docs/atlas/handoffs/team-d/` is editable.** No main, live website, calculator, clinical recommendations, cross-team datasets, research issue closure or merge. PR #70 stays draft for maintainer review. Use the GitHub live head, source dates and expected-head ref updates. Validate and re-fetch every changed artifact after each batch; continue until all original acceptance criteria are reviewed.

**Repeat this exact next prompt at end of each run:**

> Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.
>
> Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.
>
> Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.
>
> If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.

---

# Team D — Standalone GitHub continuation checkpoint (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Branch:** `research/atlas-team-d-20261104`  
**Draft PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 (open, draft, unmerged at last verification)  
**Research-data and validation snapshot SHA:** `43b1743a1d01be065530c0a0c2b1996fcc9a5986`. This checkpoint documentation is committed *after* that data snapshot; always re-fetch the live branch head and PR status before any new write.  
**Restart file:** `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md`.

## Preserved scope

Only `docs/atlas/handoffs/team-d/` files were changed. Do not edit main, the calculator or website, other research teams' folders, research issue states, or clinical recommendations; do not merge PR #70. This is an institutional network/source graph for educational discovery, **not** evidence of legal membership or clinical effectiveness, not a diagnostic device. Ancestry is not a proxy for geography, country jurisdiction, biology or network membership.

## Current research artifacts

- `data/international_networks.csv`: 45 organization/programme/WHO office nodes.
- `data/network_memberships.csv`: 542 typed and sourced institution/area relations; no invented national regulatory joins.
- `data/condition_networks.csv`: 20 source-linked institutional discovery records across the seven application health keys; none clinically appraised by inclusion.
- `data/m49_network_status.csv`: 249 retained ISO-seed candidates, of which **205** have independently verified WHO regional assignments, **44** remain `not_verified`. All six WHO administrative regions are represented. UN official M49 roster is **248** separate entries, with ISO 158 retained as a seed exception. Indonesia's 2025-05-23 WPRO transition is preserved; WHO governance and statistical UN regions remain separate.
- `data/who_region_unresolved_queue.csv`: 44 individual unresolved WHO region records; no inherited parent/territory region.
- `data/who_office_coverage_2023.csv`: **228 historical WHO office/service/focal-point records** sourced from the 2023 publication reporting on January 2021–December 2022; 225 historical M49 graph edges. These cannot be labelled 2026 office status.
- `data/who_office_survey_roster_2026.csv`: **153 WHO office profile labels** from the newer WHO dashboard: **106** office-head survey responses from April 2026; **46** retained from September 2024; **one** missing survey response. **149** exact normalized UN-M49 identity joins; **four** unjoined operational/multi-country office labels (Barbados/Eastern Caribbean MCO, South Pacific MCO, oPt office, Pristina). No political M49 inference.
- `data/who_country_office_presence.csv`: **105 distinct affirmative M49 office-host records** with April 2026 source support (including ten pre-existing regional attestations); **144/249** seed candidates have no equivalent recent affirmative entry, *not* an asserted lack of an office.
- `data/who_office_profile_2026_checks.csv`: **95** individual source/date/type audits for April 2026 respondents, beyond the ten pre-existing SEARO positive records. Liaison, multi-country, country-with-territories, ordinary country and territory/area office types must remain distinct.
- `data/emrn_nca_identity_2026.csv`: **34 EMA-listed human-medicines national competent-authority identity candidates** in **30 EU/EEA country areas**, including Germany 2, Netherlands 3 and Poland 2. All require exact Team A identity and source-specific legal remit review; **no NCA graph relationship was promoted**.
- `PROVENANCE.csv`: **114 official/source provenance URLs**, including WHO April 2026 survey evidence TD-SRC-113 and EMA authority directory TD-SRC-114.

## Last validation

At snapshot `43b1743a1d01be065530c0a0c2b1996fcc9a5986`, fetched and ran all checked-in `validate.mjs` **structural assertions** against **17 GitHub-hosted CSV inputs** using an in-memory file-read shim in a JavaScript runtime. **PASS**: nodes 45; edges 542; conditions 20; region status 249 (205 verified, 44 unknown); UN M49 248; 1 seed exception; current office positives 105; typed 2026 office audits 95; 2026 dashboard roster 153; EMA candidate NCA identities 34; historical office/service rows 228; historical typed edges 225; provenance 114. This is **not** a literal local `node` CLI run, GitHub Actions CI claim, clinical evaluation or legal opinion. Execute `node docs/atlas/handoffs/team-d/validate.mjs` in a Node-enabled checkout for an independent Node CLI confirmation.

GitHub readback of **all 13 changed paths** compared with the pre-continuation `e022965536203533862d4d4bc9241f2fbecbf79e` snapshot succeeded. The compare showed changes **only within Team D**.

## Open research

1. Individually source the **44 WHO region unresolved candidates** (do not inherit parent country/UN region).
2. Recheck the **46 old September 2024 WHO office profile surveys** for genuinely newer office-specific evidence. Capture individual physical addresses, WHO office typologies A–E, and exact MCO/liaison/territory service coverage without negative or legal-status inference. Distinguish April 2026 survey status from November 2026 continuous operation.
3. Resolve WHO CPCD stale Indonesia SEARO and Bermuda region conflict only on independent current evidence; preserve US WHO governance as pending, and PAHO vs WHO legal separation.
4. Individually verify Africa CDC/AU, ASEAN programmes and participants, EMA/EMRN agency statutory remit and exact Team A authority identity joins, local HEARTS protocol editions, and specialist professional organization joins, rather than geography-to-participation assumptions.
5. Preserve all original seven-condition institutional references without clinical endorsement, study claim upgrades or individualized advice.

## Continuation protocol

Read original `TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`; read `CONTINUATION_PROMPT.md`, `STATUS.md`, `GAPS.md`, data CSVs and `validate.mjs` from the **latest live Team D head**. Resume in scoped, source-verified batches; preserve previous findings and dated conflicts. Validate, commit and confirm GitHub readback after each batch; use expected-head checks for branch updates, keep draft PR #70 open and unmerged, and update handoff/checkpoint before stopping.

**Next-user-prompt (repeat at the end of every run):**

> Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.
>
> Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.
>
> Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.
>
> If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
