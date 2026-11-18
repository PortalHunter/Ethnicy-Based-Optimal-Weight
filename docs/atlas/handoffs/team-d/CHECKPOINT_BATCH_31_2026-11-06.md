# Team D — standalone research continuation checkpoint, Batch 31 (2026-11-06)

## Live repository state and scope
- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- Research branch: `research/atlas-team-d-20261104`; PR #70: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70; base branch `main`.
- Independently checked live PR **OPEN, DRAFT, UNMERGED**, and branch HEAD immediately before this documentation checkpoint `4cf2910e756a2fad4baff32c2b5dd0060e41c67f`. This checkpoint commit will advance that head; ALWAYS refetch both before writing.
- Authorized mutations ONLY under `docs/atlas/handoffs/team-d/`. No changes to main, public website/calculator, other teams' deliverables, patient clinical recommendations, GitHub issues, or PR merge status.
- Source caveats, date types, unverified geopolitical and legal membership, Team A/B/C exact-identity boundaries, and original instructions remain governing.

## New substantive Batch 31: national regulator remit-source audit
Created `data/emrn_nca_national_remit_evidence_2026.csv` with **9 source-qualified observations** from **four national agency identity candidates** in the existing 34-row EMA NCA directory dataset:
- **Ireland, M49 372, TD-EMRN-NCA-016:** HPRA self-describes human medicine licensing plus inspections/ongoing medicine-safety surveillance (two observations).
- **Italy, M49 380, TD-EMRN-NCA-017:** AIFA states medicines marketed in Italy require either an AIFA **or European Commission** marketing authorisation; separately describes national health-service drug reimbursement and price negotiation (two observations). EMA's CHMP scientific opinion is not a Commission marketing authorisation.
- **Czechia, M49 203, TD-EMRN-NCA-006:** SÚKL describes itself as a human-medicines national authority under the Ministry of Health, citing Act No 79/1997; separately reports medicine maximum-price and public insurance reimbursement powers from **2008-01-01**, citing Act No 48/1997 (two observations). **2008 is the agency's reported historical start, not a newly verified 2026 effective date.**
- **Norway, M49 578, TD-EMRN-NCA-026:** NOMA self-describes national marketing authorisation and EEA-to-domestic implementation, health-economics pricing/general reimbursement, and application/product-information review (three observations). Source pages state **2025-10-15** and **2026-05-21** *page updates*, not initial statutory effective dates.
- Each row has exact existing candidate ID, M49 code, official URL, observation/check date (2026-11-06), access mode, explicit `CONSOLIDATED_NATIONAL_STATUTE_NOT_INDEPENDENTLY_AUDITED` and `PENDING_EXACT_TEAM_A_ID_JOIN`. **No** Team A cross-team ID has been assigned; no `regulates_medicines_in` graph edge created; no national medication or medical-standard claim authorized.

## Six independently opened first-party HTML sources (new provenance TD-SRC-218–223)
- TD-SRC-218 — HPRA, `https://www.hpra.ie/about-us/our-role/what-and-how-we-regulate`.
- TD-SRC-219 — AIFA, `https://www.aifa.gov.it/en/autorizzazione-dei-farmaci`.
- TD-SRC-220 — AIFA, `https://www.aifa.gov.it/en/mission`.
- TD-SRC-221 — SÚKL, `https://sukl.gov.cz/en/about-us/basic-information/history-and-present/`.
- TD-SRC-222 — NOMA, `https://www.dmp.no/en/about-us/organisation-and-tasks/our-goals-and-tasks`, published 2023-10-09 and updated **2025-10-15**.
- TD-SRC-223 — NOMA, `https://www.dmp.no/en/approval-of-medicines/approval-and-follow-up-of-marketing-authorisation-ma`, published 2023-10-09 and updated **2026-05-21**.
All six directly opened as agency-owned HTML. Their self-described remit is stronger evidence than an EU directory name alone, but **not independent reading of currently consolidated national law**, an administrative decision or exact matching to another team's authority record. Page checked date is not statute commencement.

## Durable commits
1. [`aaf7bf5603a6f97615a69c645d9a98d34932d529`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/aaf7bf5603a6f97615a69c645d9a98d34932d529) — new 9-row `data/emrn_nca_national_remit_evidence_2026.csv`.
2. [`4cf2910e756a2fad4baff32c2b5dd0060e41c67f`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/4cf2910e756a2fad4baff32c2b5dd0060e41c67f) — six `PROVENANCE.csv` rows and updated `validate.mjs`.
3. This checkpoint/documentation commit advances the branch beyond the second commit. Query live branch and PR for its final immutable SHA; all paths remain Team D only.

## Full checked-in structural regression, with exact limit
**PASS** full checked-in `validate.mjs` via a **read-only V8 JavaScript shim** fed **39 GitHub-derived dependencies** (**29 complete addition-only PR patches and 10 direct GitHub file reads**), with **11,598 assertion calls**. Validator blob SHA on GitHub: `e97299aae48c69523bdc473b848fb8c65a8ab6d6`. The shim replaces the Node filesystem/assert imports with in-memory adapters; all checked-in structural assertions execute against GitHub data. Output reports 9 national NCA observations and 223 provenance URLs. **NOT a native Node CLI execution, GitHub Actions run, audit of statutory texts, scientific/clinical validation or maintainer approval.** Local Node was present but git clone failed DNS; never misrepresent this as a native checkout test.

## Preserved verified baseline, unmodified by this batch
- **47** institutional network nodes, **617** typed/time-qualified edges and **20** condition-network records.
- **249** geographic candidates (248 UN M49 overview plus documented ISO exception 158); **205** directly evidenced *current administrative* WHO region assignments and **44** unresolved; all six WHO regions covered.
- **105** directly affirmative April 2026 WHO office hosts and **144** lacking equivalent direct April evidence (**not proven absent**); **153** mixed-age WHO dashboard labels (106 April 2026, **46 September 2024** retained, one unavailable); **228 separate historical Jan-2021–Dec-2022 WHO office/service records**, never promoted to present office operations.
- **34** EMA NCA identity candidate rows across **30 EU/EEA areas**, unchanged; national agency role descriptions in this batch do not resolve original laws or any Team A join.
- **223** unique provenance IDs/URLs after six new agency sources (previous 217).
- PAHO dated **14** versus undated **13** Eastern Caribbean areas remains unresolved; French Saint Martin (663) is separate from Dutch Sint Maarten (534). PAHO Boisson start-month dispute (January versus February 2021), SCI North Macedonia exact April 2024 admission instrument/day, APPM **8 signed/15 intent/55 target** with seven unnamed signers, IDF **22/23**, HI role distinctions, AOECS **43/1/3 vs 41/6** categories and 21 explicit nonmembers, Codex historical observer claim, HEARTS edition/adoption, ASEAN programmes and 44 WHO regions remain open.

## Next bounded work and acceptance gate
1. Independently refetch live PR/head, this checkpoint, `CONTINUATION_PROMPT.md`, `PROVENANCE.csv`, `validate.mjs` and all Team D `data/*.csv`; avoid duplicates. Read original `TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`.
2. For remaining **30 of 34 national-agency candidates**, source first-party mandates; for all **34** (including the four with first-party role descriptions), read current consolidated relevant statutory instruments and resolve exact Team A IDs only after unambiguous match. Do not turn agency self-report into audited legal authority.
3. Continue direct WHO administrative-region 44-case queue; 144 office-host April evidence gaps; 46 older surveys; PAHO 13/14, North Macedonia SCI, APPM signers, current HEARTS/ASEAN and condition organization governance/joins. Preserve source contradictions and snapshots.
4. Validate with literal `node docs/atlas/handoffs/team-d/validate.mjs` in an authorised checkout when feasible; obtain separate legal/scientific/maintainer assessment. Do not publish or merge.

## Exact user continuation prompt
```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read "docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md" on branch "research/atlas-team-d-20261104".

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
