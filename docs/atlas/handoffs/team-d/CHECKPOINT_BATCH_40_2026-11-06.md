# Team D standalone continuation checkpoint — Batch 40 (2026-11-06)

## Repository, authority, acceptance and boundaries

- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- PR #70: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 — verified **OPEN / DRAFT / UNMERGED** at start; recheck live status when resuming
- Existing research branch: `research/atlas-team-d-20261104`, base `main`; **do not merge or mark ready**
- Batch 40 source research and validator commit: `f85ff3c4d9f9c5eb881c0c415d7f13a7963bf4ab` (parent `68bfbf02325f8fc14b4a217beb226977673e0f94`)
- Documentation checkpoint commit follows the research commit and will advance the actual live branch head; always fetch live branch SHA before editing
- Prior checkpoint: [Batch 39](CHECKPOINT_BATCH_39_2026-11-06.md); retained without alteration
- Original acceptance criteria: `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` plus `DATA_CONTRACT.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`. All **six WHO regional offices**, >=10 specific time-qualified cross-border relationships, >=10 boundary/negative cases, M49-based coverage, reproducible typed dated provenance, and institutional evidence for `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`; this does **not** require or imply automatic national clinical guideline adoption.
- **Exclusive write scope:** `docs/atlas/handoffs/team-d/` only; never edit site, `main`, other teams or clinical calculator. Respect legal/medical caveats and no unaudited statute, approval, membership or physical office inference.

## New source-checked Batch 40 findings and source dates

**Two directly inspected original WHO sources, new provenance IDs `TD-SRC-272–273` and two dated office activity followups `TD-OFFICE-2026-ACTIVITY-001–002`:**

1. **Chad, M49 148**, original WHO Chad Country Office mission report: https://www.afro.who.int/sites/default/files/2026-08/BA_RD_Mission_Report_Chad_June2026%201.pdf . Direct source page one was visually inspected in addition to WHO PDF text. It explicitly titles the author as **WHO Country Office in Chad** and dates its Regional Director mission **7–11 June 2026** with **June 2026** report cover. The report describes Chad representative and meeting with the country team. The document is dated by *cover month*, not a separately authenticated upload/publication day: URL path `2026-08` is not a substitute for report issue date. This is contemporaneous institution/activity corroboration for an older September **2024** office survey and prior undated Chad country-page address; **it is NOT a new April 2026 survey, nor fresh proof of the precise physical office premises or a newly assigned WHO region**.
2. **Armenia, M49 051**, direct official WHO/Europe HTML: https://www.who.int/europe/news/item/12-10-2026-albania-and-armenia-achieve-hepatitis-b-control-milestone--strengthening-the-who-european-region-s-path-to-elimination . WHO publication dated **2026-10-12** says Armenian WHO Country Office **held** a ceremony **2026-10-06**. This is evidence of office institutional activity after Armenia's existing April 2026 self-reported survey, **not** an additional surveyed host, specific building address, clinical appraisal for any seven Atlas conditions, or national medicine authority.
3. **Chad–Central African Republic (M49 148/140)**, record `TD-PLANNED-COOP-001` in newly added `data/crossborder_planned_cooperation_2026.csv`, **same WHO Chad report**. Section 2 lists *discussion of pooling health-product procurement between Chad and the Central African Republic* as an **objective**. This is not evidence that the proposed meeting occurred, a joint procurement program exists, contracts were signed, medicines were mutually authorized, or clinical standards adopted. It is a *research lead*, **not a relationship edge or signed international instrument**.

New research paths in Batch 40: `data/who_office_2026_activity_followups.csv` (**2 rows**), `data/crossborder_planned_cooperation_2026.csv` (**1 objective row**), `PROVENANCE.csv` (**2 added sources, total 273**), `validate.mjs` (Batch 40 structural assertions). Earlier `data/who_office_independent_checks_2026.csv` (**46 retained 2024 labels**) and April survey index **not overwritten**.

## Quantified state; keep definitions separate

| Evidence dimension | At Batch 40 | Not established |
|---|---:|---|
| M49/ISO geographic seed matrix | **249/249**, including explicit ISO exception 158 | Not WHO membership or jurisdiction |
| WHO current administrative regional assignments | **205/249 (82.3%)**, all six regions represented | **44 NOT VERIFIED**; no parent state/service/surveillance inference |
| Direct affirmative **April 2026** WHO office-host survey rows joinable to M49 | **105/249 (42.2%)** | **144 without equivalent affirmative survey**, not proof of absence; 106 April surveys overall includes a nonexact join |
| Older retained **September 2024** survey labels | **46** | Not April 2026 attestations; separately corroborated and now two additional dated followups |
| Separate historical January 2021–December 2022 office/services dataset | **228** records | Not present-day premises |
| Current WHO original region office categories | **6** | Territory-specific administrative assignments still need explicit evidence |
| EMA NCA directory candidate identities with official scoped remit descriptions | **34/34 (100%)**, 71 role observations | Not legal authority clearance |
| Independently complete current amended national statute/delegation audit and exact Team A authority-ID join | **0/34 (0%)** | **34 remaining** |
| Network graph | **47 nodes / 617 typed dated edges** | No new signed or implemented Chad–CAR procurement edge inferred |
| Condition institutional references | **20 across seven keys** | No scientific/clinical signoff |
| Unique provenance source URLs | **273**, plus 2 new independently source-dated office followups | New source count is not evidence acceptance |

## Validation and exact GitHub research readback

- Research commit `f85ff3c4d9f9c5eb881c0c415d7f13a7963bf4ab` was created from live expected head `68bfbf02325f8fc14b4a217beb226977673e0f94` with branch lease; successful GitHub readback confirmed the four submitted paths, and the compare returned **one commit / exactly four Team D files**.
- Targeted precommit CSV/source validation PASS: **273 distinct source IDs/URLs**, both new date-qualified office activity records, one objective-only proposed cross-border record, references to provenance, and fixed validator source counts.
- **Full checked-in read-only V8 structural validator PASS at committed research SHA: 12,476 assertions / 41 GitHub-derived dependencies**, reconstructed from **27 complete addition-only PR patches + 14 direct branch file reads**. Confirmed old baseline **249** areas, **205** region positives / **44** unknown, **105** April hosts, **47/617** graph, **20** condition records, **34** EMA NCA identities / **71** scope-limited remit observations, **273** provenance, new **2** office activity followups and **1** nonexecuted discussion objective. No validator failures.
- This is **not native `node validate.mjs` or GitHub Actions**; no full statute review, legal validity, clinical or scientific claim signoff, or signed international instrument inspection implied.
- After writing this checkpoint and updating doc headers, independently verify doc blob readbacks, PR draft/unmerged state, final branch tip SHA and strict changed-path compare. If source files changed concurrently, reconcile instead of overwriting.

## Remaining open research queue / known conflicts

1. **WHO current administrative areas:** individually source the **44** `data/who_region_unresolved_queue.csv` entries with explicit current WHO *administrative assignment*, not UN geography, 2025 WER surveillance/reporting groups, WHO Country Presence service arrangements, PAHO office coverage or other territory's parent-country region. Preserve Indonesia effective WPRO **2025-05-23**, Algeria AFRO despite UN Northern Africa, Liechtenstein non-WHO-member SCI nuance, WHO U.S. governance unresolved and disputed territory boundaries. Indexed PAHO material on Bermuda/BVI/Aruba 2026 service is *not* new regional assignment and may be blocked on direct open.
2. **WHO physical country-office presence:** **144** geographic candidates without equivalent affirmative April 2026 survey, including special offices/MCO service. Preserve **46** 2024 survey replies and **228** 2021–22 historical office/service records separately. Chad and Armenian 2026 dated institutional activity is **not** an extra dashboard response, or an office absence determination.
3. **Medicines agencies / legal:** although all **34** EMA directory identities have an official scoped role description (71 records), **all 34** complete currently amended national statutes, delegated regulations, legal-effective dates and exact Team A IDs remain unreviewed. Malta contradictory official marketing-authorization descriptions remain; national versus Commission centralized grant, trials ethics, inspections, wholesale permits and EEA interfaces differ.
4. **Primary network instruments and disputed rosters:** PAHO eastern Caribbean **13/14** office services and Boisson January/February 2021 representative dates; WHO/Europe SCI North Macedonia accession instrument/day; Africa CDC APPM eight signed only Egypt individually named, 15 intent and 55 targets; IDF NAC **22/23**, AOECS **43+1+3 vs 41+6**, HI member/partner categories, Codex observer claimed 1991 without original instrument, HEARTS **29** first-version national standards vs **35** initiative/commitment entries and local clinical versions, ASEAN unbinding vs legal adoption; cross-team Teams A/B/C exact joins. Chad–CAR procurement is **mission discussion objective only**.
5. Full original acceptance completion requires independent source/legal/join review, and later human clinical/scientific governance review; don't synthesize one overall progress percentage from structural counts.

## Visual progress dimensions (independent)

- WHO current administrative assignments: `████████████████░░░░` **205/249, 82.3%; 44 unknown**
- April 2026 affirmative office hosts: `████████░░░░░░░░░░░░` **105/249, 42.2%; 144 without equivalent survey**
- EMA first-party role descriptions: `████████████████████` **34/34, 100%; source-scoped only**
- Complete national statutes/delegation and Team A legal joins: `░░░░░░░░░░░░░░░░░░░░` **0/34, 0%; 34 still open**
- Regional gap and office gaps are *unknowns*, not negatives. Never convert any chart into clinical/legal approval.

## Exact reusable continuation prompt

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`, including its latest checkpoint and original acceptance criteria.

Verify live GitHub state and continue autonomously. Prioritize unresolved WHO assignments, office evidence, regulator authority, and international network relationships. Preserve all historical-versus-current distinctions, source conflicts, existing research, and scope restrictions. Commit, validate, and verify readbacks regularly. Modify only Team D's research directory. Do not modify the public website, main, or other teams; do not merge or mark the PR ready.

If unfinished, save a complete standalone GitHub checkpoint. End with a concise status, this same reusable continuation prompt, and updated visual progress bars for WHO regional assignments, verified office-host evidence, and remaining research gaps. Do not equate structural validation with legal or clinical approval.
```
