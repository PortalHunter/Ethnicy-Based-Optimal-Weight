# Team D — complete standalone research checkpoint, Batch 25 (2026-11-05)

## 1. Live GitHub state, recovery and immutable boundaries

- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- Draft research PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 — verified **OPEN / DRAFT / UNMERGED** immediately before this checkpoint write. Base `main`; head branch `research/atlas-team-d-20261104`. **Do not merge.**
- First inspected branch tip: `bde8f160b95b58564af6f5299d68e9e97e7da18d` (Batch 24 handoff). This batch's atomic **data, ledger, validator** commit: [`f2455ce220cc307b2a0b7797d5baa96c78a838c0`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/f2455ce220cc307b2a0b7797d5baa96c78a838c0). This documentation checkpoint itself will create a **newer** SHA; independently retrieve the live branch and PR head at the next session.
- All writes are restricted to `docs/atlas/handoffs/team-d/`. No `main`, public website, calculator, clinical guidance, other team's data, issue closure or PR merging.
- Original requirements: `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and shared `DATA_CONTRACT.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`. Full 249-seed M49 candidate universe, six WHO offices, dated/typed institutional graph, explicit negative boundaries and seven nonclinical condition references must be retained; do not infer parent-jurisdiction membership or merge Team A/B/C records by name alone.

## 2. New Batch 25 first-party evidence — WHO SPH event reporting versus administration

Three directly opened WHO Strategic Partnership for Health Security and Emergency Preparedness (SPH) **HTML event metadata pages** are now recorded in `data/who_sph_reporting_region_context.csv`:

| Row | M49 area | WHO event reference | WHO SPH regional label | Event year only | Source |
| --- | --- | --- | --- | --- | --- |
| `TD-WHO-SPH-007` | `531` Curaçao | `2020-E000180` COVID-19 | Region of the Americas | 2020 | [WHO SPH Curaçao COVID-19](https://extranet.who.int/sph/coronavirus-disease-covid-19-curacao) |
| `TD-WHO-SPH-008` | `531` Curaçao | `2026-E000066` chikungunya | Region of the Americas | 2026 | [WHO SPH Curaçao chikungunya](https://extranet.who.int/sph/chikungunya-virus-disease-2026-curacao) |
| `TD-WHO-SPH-009` | `254` French Guiana | `2026-E000054` chikungunya | Region of the Americas | 2026 | [WHO SPH French Guiana chikungunya](https://extranet.who.int/sph/chikungunya-virus-disease-2026-french-guiana) |

- Each page was directly opened as original WHO HTML; the displayed `Year` is an **emergency event reference year**, not an independently verified publication date, day of event onset, outbreak burden, formal statutory determination, nor present-day administrative WHO regional assignment.
- These records **do not establish 2026 constitutional WHO membership, permanent physical office presence, enacted clinical guidelines or health-law mandates**. They remain typed `SOURCE_SPECIFIC_WHO_HEALTH_SECURITY_PORTAL_METADATA_ONLY` with `who_admin_assignment_state=not_verified` and `who_membership_state=not_verified`. Both territory codes `254` and `531` remain in the 44-item unresolved region queue.
- Their separate provenance entries are `TD-SRC-202`, `TD-SRC-203`, `TD-SRC-204`. Three new unique official URLs bring the complete ledger from **201 to 204**. WHO SPH observations increase **six to nine across seven distinct M49 codes**. No graph membership/office edges added.

Data/provenance/validator atomic commit `f2455ce220cc307b2a0b7797d5baa96c78a838c0` modified **exactly three files**:
1. `data/who_sph_reporting_region_context.csv`: three new rows with source IDs, M49 links, event reference years, region tags and non-promotion flags.
2. `PROVENANCE.csv`: three distinct first-party WHO event-page citations, verification state and limitations.
3. `validate.mjs`: expected provenance count `204`, SPH row count `9`, seven-area set, event ID/source/time safeguards and explicit preservation of `not_verified` regional status.

## 3. Validation performed, actual limits and GitHub readback

**PASS — targeted, post-commit cross-file assertions**, using the five files fetched afresh from the live GitHub Team D branch:
- `data/who_sph_reporting_region_context.csv` blob `894427879d94768908e7dcbc22e316c2893d43e2`
- `PROVENANCE.csv` blob `93c1226600f6e781da67bb457e6c4e7ba08d756d`
- `data/m49_network_status.csv` blob `04625a58af19da3064e964b95a10f4e0e8f3fc69`
- `data/who_region_unresolved_queue.csv` blob `9789b4d6b9f88c9ad9f9a82a2cd1a6b4ed8e5797`
- `validate.mjs` blob `f7c0ec0e53d8aff0606ebdcc7d90dcc999811407`

Checks actually performed: parse quoted CSV fields correctly; nine SPH records, **204 unique provenance IDs and URLs**, 249 geographic status rows, **205 verified / 44 unknown** WHO regions, 44-row unknown queue, exact three new record IDs / event IDs / source IDs / years / M49 keys, event-year-only precision, reporting metadata relationship and presence in unresolved queue, unchanged `not_verified` status and updated validator expectations. All PASS on live GitHub readbacks.

**Not completed:** full execution of checked-in `validate.mjs` after Batch 25. Attempted a full V8 read-only shim against its **33** CSV/provenance dependencies but the connected GitHub tool rejected the 33-fetch operation with a per-operation call cap. Native `node docs/atlas/handoffs/team-d/validate.mjs` also **not run**: no accessible GitHub checkout in local runtime (GitHub host DNS unavailable). Prior Batch 23 full shim PASS does **not** validate the Batch 24/25 updated script. No GitHub Actions, scientific, clinical or statutory review claimed. Next maintainer must run native Node, inspect the sources and record real exit output.

## 4. Retained unchanged dataset and temporal distinctions

- **47 network nodes / 617 typed and time-qualified graph edges / at least 20 institutional condition references covering seven keys** (`diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`). Institutional coverage is not clinical assessment.
- 249 candidate areas: 248 UN M49 roster codes plus separately noted ISO seed exception `158`. **205 contemporary WHO administrative regions directly verified, 44 unresolved**; Indonesia's 2025-05-23 reassignment to WPRO remains separate from UN statistical regions.
- **105** affirmative WHO host-office attestations dated April 2026 and **144** other candidates lacking equivalent recent direct-positive evidence (UNKNOWN, not absent); **153** survey labels = 106 April 2026, 46 retained September 2024 and one unavailable. All 46 older survey labels have independent source checks but they are not refreshed April 2026 attestations.
- **228 historical January 2021–December 2022 office/service observations / 225 historical service graph edges**, plus separate 2019 Eastern Caribbean, 2021 SIDS and 2025 surveillance evidence, not promoted to current 2026.
- PAHO Barbados/Eastern Caribbean historical/undated/2026 **13-vs-14** area dispute includes **French Saint Martin `663`**, distinct from Dutch Sint Maarten `534`. October PAHO announcements conflict over Eldonna Boisson's earlier start month (January vs February 2021), original direct article opens 403; no unverified handover date. WHO/Europe Greenland 2024 five-year cooperation MoU does not establish 2026 administrative region membership. WHO SPH reporting tags for Liechtenstein, Caribbean areas and new Curaçao/French Guiana entries remain source-specific.
- North Macedonia WHO/Europe SCI **meeting observer 2023**, membership during **10–12 April 2024**, exact instrument/day unverified. Africa CDC APPM **8 signed / 15 intent / 55 target** are distinct aggregates; only Egypt named in independently sourced agreement context. EDA bilateral MoUs and EMA's 34 NCA candidate identities remain subject to signed-instrument/statutory remits. HEARTS 29 v1 national standards, 35 programme commitments and local 2.0 use are distinct unadjudicated layers. ASEAN, societies and Team A/B/C exact joins remain incomplete.

## 5. Remaining original acceptance and review queue

1. Direct 2026 WHO **administrative** evidence for **44** M49 areas; new WHO SPH event-year tags **do not close any**. Verify 144 office-host gaps and operational recency of 46 inherited 2024 surveys without converting historical services to present offices.
2. Reconcile PAHO Eastern Caribbean French Saint Martin scope 13/14 with controlling dates/instruments; directly reopen PAHO 403 sources; resolve PAHO January/February 2021 representative tenure contradiction only with stronger evidence.
3. Locate WHO/Europe North Macedonia SCI accession day/instrument; Africa CDC APPM seven other MoU signatory identities / 15 intent countries; signed EDA/UPA agreements, EMA regulator laws, exact Team A identities; verified country-specific HEARTS versions and ASEAN implementation; sources for scientific societies and Team B/C joins.
4. Run the **actual full checked-in validator** under authorized Node checkout (or fully reconstructed compatible shim) and record exit status. Primary-source legal appraisal, clinical/scientific review and maintainer approval remain pending. **Do not merge or publish to the public website.**

## 6. Safe continuation procedure

Independently refetch PR #70 state and actual branch head; read this checkpoint and `CONTINUATION_PROMPT.md`, `STATUS.md`, `GAPS.md`, `VALIDATION.md`, `PROVENANCE.csv`, `validate.mjs` and all relevant datasets. Prefer direct primary-source historical/date-qualified checks; avoid fabricated certainty and pseudo-current WHO authority. Commit small scoped Team D batches with source rows and validator assertions, read back and validate each commit. If incomplete create a subsequent full standalone GitHub checkpoint. Preserve PR open/draft/unmerged; no user-facing deployment or autonomous background work.

## 7. Exact original user continuation prompt

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
