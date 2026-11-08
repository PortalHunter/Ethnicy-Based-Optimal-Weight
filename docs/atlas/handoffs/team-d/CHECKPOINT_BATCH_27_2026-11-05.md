# Team D — complete standalone GitHub research checkpoint, Batch 27 (2026-11-05)

## Live state and nonnegotiable scope

- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- Existing draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70, confirmed **OPEN / DRAFT / UNMERGED** directly before this documentation checkpoint commit.
- Research branch: `research/atlas-team-d-20261104`, PR base `main`. Data/validator corrected head before this checkpoint: [`2a760a79569c69ebfa5d7a74f82b355d5e74c31d`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/2a760a79569c69ebfa5d7a74f82b355d5e74c31d). **This checkpoint commit advances the head again**: always refetch live PR metadata before subsequent writing.
- Scope: Team D files ONLY under `docs/atlas/handoffs/team-d/`; do not alter `main`, public website/calculator, patient-facing guidance, other research teams, issue status or merge PR.
- Original acceptance: `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and shared `DATA_CONTRACT.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`. Six WHO offices, M49/WHO distinctions, dated membership relationships, at least ten qualified boundaries and all seven nonclinical condition references are retained. **Completing structural criteria is not a scientific, clinical, legal or maintainer approval.**

## New work in Batches 26 and 27

### Batch 26 — International Diabetes Federation, North America & Caribbean

- Source/data/validator commit: [`a3ec0d92485da866e442536a2edc9d3ef8898599`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/a3ec0d92485da866e442536a2edc9d3ef8898599).
- New machine-readable `data/idf_nac_member_observations_2026.csv`: **25** separate source-qualified observations = **22** country/territory labels in the IDF member-organization map, **21** named organization labels aligned provisionally to those areas, **one Curaçao (531) association-name gap**, and **three distinct transnational-organization members** (Beyond Type 1, Breakthrough T1D, Direct Relief). Geographic M49s were confirmed against the retained UN crosswalk. These are professional/patient federation organizations, **not country governments or Team B authority IDs**; dates of accession unknown, no national medical law or clinical guideline adoption inferred.
- Two directly reviewed original HTML sources, added as **TD-SRC-205/206**:
  - https://idf.org/our-network/regions-and-members/north-america-and-caribbean/
  - https://idf.org/our-network/regions-and-members/north-america-and-caribbean/members/
- **Unresolved contradiction:** IDF regional overview headline reports **22 member associations in 22 countries/territories**, whereas its member-list page reports **23 diabetes organizations in 22 countries/territories**. Regional overview names 21 geographically attributed organizations plus three transnational names; no assumed reconciliation. Source lists do not certify exact legal society identities or dated admissions.

### Batch 27 — Haemochromatosis International (HI)

- Source/data/validator commit: [`f10a7768fb7a939dbfc9946ab3c16cacc11a2c33`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/f10a7768fb7a939dbfc9946ab3c16cacc11a2c33). Provenance column repair: [`2a760a79569c69ebfa5d7a74f82b355d5e74c31d`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/2a760a79569c69ebfa5d7a74f82b355d5e74c31d).
- New `data/hi_membership_source_observations_2026.csv`: **19** observations = **15** country-linked association/support-group member resources, **one Europe federation/regional label (no M49 join)**, and **three separate eligibility/policy observations**: full organizational membership, individual associate membership, and non-member external partnerships (e.g. government agencies, NGOs, research groups and donors).
- The original official member index `https://haemochromatosis-international.org/members/` was **already TD-SRC-008** and is reused, not counted a second time. Two **new** first-party citations:
  - **TD-SRC-207:** https://haemochromatosis-international.org/join/ — eligibility classes, not a roster of accepted individuals.
  - **TD-SRC-208:** https://haemochromatosis-international.org/stakeholders/ — **June 2026** stakeholder policy explicitly distinguishes external partners from members. Site displays `Published Version 07/06/2026`; the exact day/month ordering remains unnormalized and not asserted. Neither membership nor sponsorship creates national statutory or clinical remit.
- Retained all earlier source records and organization IDs; no new WHO-region or authority edges.
- **Bug found and corrected:** first Batch 27 commit omitted the CSV `verification_state` field for TD-SRC-208, causing a full validator FAIL (`width 9 expected 10`). The subsequent correction committed the missing column before re-running the full assertions. Never describe the intermediate failed snapshot as validated.

## Verified final data snapshot and structural execution

- **PASS** on [data/validator correction SHA `2a760a79569c69ebfa5d7a74f82b355d5e74c31d`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/2a760a79569c69ebfa5d7a74f82b355d5e74c31d): **10,567 read-only structural assertions**, entire checked-in `validate.mjs` executed via a V8 JavaScript function with read-only filesystem/assertion adapters. Source files reconstructed from the complete live PR file patches (new-file additions) plus **two separately fetched oversize CSVs** `data/m49_network_status.csv` and `data/network_memberships.csv`. **35 data/provenance dependencies** and **58 Team D PR files** reconstructed/loaded; every validator assertion completed and emitted final JSON `result: PASS`.
- The three initially updated Batch 26 files were independently re-fetched from GitHub with SHA/readback matches; Batch 27's new HI CSV/ledger/validator SHA readbacks also matched their commits, followed by the complete full-shim PASS after the single-line provenance correction.
- **What this is NOT:** no native Node CLI (GitHub host DNS was unavailable from local checkout environment), no GitHub Actions/CI, no direct legal-instrument approval, no clinical/scientific endorsement, no independently audited publication-ready source facsimiles. Structural/shim validation verifies schema and declared invariants only.
- Verified cumulative state **47 nodes / 617 typed dated graph links**, **20** nonappraised references across all seven keys (`diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`). Geographic universe **249** = **248** official UN overview M49 entries plus separately flagged ISO-seed exception `158`. WHO contemporary administrative region assignment **205 verified / 44 unknown**. **105** April-2026 affirmative WHO office-host rows and **144** other candidates without equivalent direct positive attestation (unknown ≠ absent). WHO survey roster **153** = **106** April 2026, **46** September 2024 retained, **one** unavailable; **46/46** older labels have independent evidence checks, **not a refreshed April 2026 survey**. **228 Jan-2021 to Dec-2022 historical WHO office/service records / 225 historical graph edges**, never promoted to current WHO office or member status.
- **208** unique source IDs/URLs after both batches; new professional-network observations **44** (25 IDF + 19 HI), all evidence/role qualified. The earlier **9** WHO SPH event/surveillance region-tag rows, WHO/Europe Greenland MoU, historical SCI observations, PAHO representative/source conflicts, and treaty/agency source caveats are preserved. No site, other-team or `main` change.

## Open work: original acceptance not finally approved

1. **44** WHO administrative regional unknowns remain unresolved; WHO SPH annual reporting/event labels or 2025 WER epidemiological grouping **must not** be upgraded to 2026 administrative region/governance membership. **144** candidates lack equivalent April 2026 direct affirmative host office attestation; 46 older surveys' premises/operational recency remain unconfirmed. Historical services ≠ current offices.
2. **PAHO:** Barbados/Eastern Caribbean **13 versus 14** area coverage and French Saint Martin (663) vs Dutch Sint Maarten (534); representative Boisson former-term **Jan vs Feb 2021** conflicting first-party reports; original direct PAHO article URLs showed HTTP 403. No fabricated transition coverage.
3. **WHO/Europe SCI:** North Macedonia observer in 2023, member during 10–12 April 2024; exact accession day/instrument unverified. Greenland five-year cooperation MoU from 1 July 2024 does not establish 2026 WHO constitutional membership or SCI participation.
4. **Africa CDC APPM:** eight signed and fifteen intent vs 55 target; only Egypt named by an individually verified signature, seven other signed and intent countries unidentified. EDA/UPA agreements need actual signed instruments, national statutory remits and exact Team A IDs; EMA's 34 listed NCA identities likewise need legal competence review.
5. **Country-specific implementation:** PAHO HEARTS 29 first-version adopters vs 35 programme commitments, local editions not automatically enacted; ASEAN health-sector workstreams are not automatically national clinical rules. More independently sourced scientific-society relationships and exact Team B/C joins are required. IDF 22/23 aggregate conflict, Curaçao missing member name, HI regional Europe member identity and precise admission histories need adjudication.
6. Run the **literal checked-in Node validator** in an authorized full checkout and record exit/Actions output; independently inspect first-party documents and obtain scientific, statutory and maintainer review. Until then **do not merge or publish patient-facing medical recommendations**.

## Safe continuation/recovery

At next run: verify live PR #70 head and OPEN/DRAFT/UNMERGED; read this file, `CONTINUATION_PROMPT.md`, `STATUS.md`, `GAPS.md`, `VALIDATION.md`, all data/provenance and original prompts. Use expected-head Git ref updates, commit small source-verified Team D-only batches, re-fetch and run structural validation after each, preserve official claims exactly with typed caveats. Do not repeat completed rows or override other teams' IDs. This standalone checkpoint is saved as a GitHub file; its own documentation commit moves the branch head beyond `2a760a79569c69ebfa5d7a74f82b355d5e74c31d`.

## Exact original user continuation prompt

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
