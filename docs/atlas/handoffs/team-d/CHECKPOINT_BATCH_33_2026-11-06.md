# Team D — standalone research checkpoint, Batch 33 (2026-11-06)

## Scope and live state

- Repo: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight ; work branch: `research/atlas-team-d-20261104` ; PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 ; base: `main`.
- PR independently checked **OPEN / DRAFT / UNMERGED** at Batch 33 pre-documentation head `90f85d82c34488964c83f187e7a88f17ab1ca500`. Documentation writes advance HEAD: **refetch live PR/head immediately on restart and before any new mutation**.
- Only authorized changes: `docs/atlas/handoffs/team-d/`. No website, `main`, other research teams, merger, ready-for-review transition, patient-level clinical assertions or national guideline adoption.
- Original criteria: `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`: six WHO offices; at least 10 sourced dated international relationships; >=10 negative/boundary examples; typed time-aware reproducible relationships with source URL; no geography-derived membership or automatic clinical adoption. Structural thresholds do **not** complete statutory/clinical/institutional acceptance.

## New substantive Batch 33: national agency self-description evidence

Eight new direct-first-party observations `TD-NCA-REMIT-019–026` were appended to `data/emrn_nca_national_remit_evidence_2026.csv` for four previously unaudited EMA directory candidate identities; all checked **2026-11-06**:

1. **Belgium (056, TD-EMRN-NCA-002, FAMHP):** Source says FAMHP and ethical committee assess clinical-trial application and minister or delegate makes final approval decision; not equivalent to national medicine product marketing authorisation. A second FAMHP page says PRE, POST and inspection directorates organised from **2009-02-01** (historical internal structure, not current statutory commencement). Pages updated 2024-05-22 and 2026-05-05 respectively.
2. **Finland (246, TD-EMRN-NCA-009, Fimea):** Directly read official About page self-describes central national competent pharmaceutical authority under Ministry of Social Affairs and Health. Specific marketing-route and organisation-detail pages were indexed but **direct opens returned 403**; these were NOT promoted into new direct-evidence observations.
3. **Malta (470, TD-EMRN-NCA-022, Medicines Authority):** Two *different official pages conflict over final national MA decision attribution*: `/howmedicinesregistered` says Medicines Authority assesses and **Licensing Authority issues** national authorisations; `/registration?l=1` says national authorisations are **granted by Medicines Authority**, while Commission grants centralised MAs. Preserve both statements without selecting an instrument or legal delegate. The registration page was **updated 2024-04-04**, not a 2026 legal-effective date. Third first-party page describes postmarketing ADR monitoring through a Malta national database linked to the European pharmacovigilance network. No product-specific safety or clinical claim.
4. **Spain (724, TD-EMRN-NCA-033, AEMPS):** English agency page lists human medicinal-product assessment, authorisation and continuous safety surveillance separately from pharmaceutical-site inspections and clinical trial authorisation. English page marked **2023-07-24 last update**: no 2026 consolidated-statute or individual permission inferred.

All eight rows have `evidence_access=DIRECT_FIRST_PARTY_HTML_REVIEWED`, `legal_audit_state=CONSOLIDATED_NATIONAL_STATUTE_NOT_INDEPENDENTLY_AUDITED`, `team_a_join_state=PENDING_EXACT_TEAM_A_ID_JOIN`, `verification_state=OFFICIAL_NATIONAL_AGENCY_SELF_DESCRIPTION_ONLY`. No `regulates_medicines_in` graph edges or legal Team A joins were invented.

### Seven official URLs and durable provenance (TD-SRC-230–236)
- **TD-SRC-230** https://www.famhp.be/en/the_role_of_the_famhp — Belgian clinical-trial review/minister decision.
- **TD-SRC-231** https://www.famhp.be/en/about_the_famhp/our_organisation/organisation_chart — 2009 FAMHP internal pillars; 2026 page update.
- **TD-SRC-232** https://fimea.fi/en/about_us — Finnish national medicines regulator identity only.
- **TD-SRC-233** https://medicinesauthority.gov.mt/howmedicinesregistered — Maltese separate Licensing Authority grant.
- **TD-SRC-234** https://medicinesauthority.gov.mt/registration?l=1 — Maltese conflicting agency grant wording and Commission boundary.
- **TD-SRC-235** https://medicinesauthority.gov.mt/howmonitorsafetyproduct — Maltese national/European ADR network.
- **TD-SRC-236** https://www.aemps.gob.es/aemps/quienes-somos/ — Spanish AEMPS medicine lifecycle and inspection roles.

## Batch 33 commits and validation
1. `be93ce8acb678601c5c2c9cb3e02e8469730601f` — append eight source-qualified NCA observations.
2. `68f7198aa8f6b22bc71e8024bef1f75cd59afe99` — append seven official provenance records.
3. `90f85d82c34488964c83f187e7a88f17ab1ca500` — structural-validator updates and Maltese-source-conflict invariant.
4. Three files were immediately fetched back from the branch and byte-compared with authored content. Targeted checks: **26 source-qualified NCA role observations**, **236 source URLs**, **11 distinct agency candidate IDs**, unique record/source IDs, all 16/10 CSV columns, exact NCA candidate IDs/M49/agency labels, all NCA URLs present in provenance: **PASS**.
5. **Entire checked-in validator body PASS** in read-only JavaScript/V8 shim: **11,811 assertions, 39 GitHub-derived source dependencies (35 complete addition-only PR patches reconstructed and 4 direct GitHub file reads)**; validator blob `3dd1a6a13c2e103e605740dc5d082de76ab8600b`, validated head `90f85d82c34488964c83f187e7a88f17ab1ca500`. The preceding attempt at 39 individual direct GitHub fetches exceeded connector call limit; patch-plus-four-direct replay succeeded. **Not literal native Node, Actions, legal, clinical, scientific or maintainer signoff.** Literal `node docs/atlas/handoffs/team-d/validate.mjs` in authorized checkout remains required for that claim; local clone here cannot resolve github.com DNS.

## Verified coverage: different axes, not acceptance percentages
- Institutional network **47 nodes / 617 typed and dated edges**; seven condition keys with 20 source-linked observations; all six WHO regions in graph.
- Geographic universe **249 candidate areas**, including 248 UN M49 overview rows and one explicitly tracked seed exception (158). **205/249 (82.3%) directly sourced contemporary WHO administrative regional assignments**, **44/249 (17.7%) unverified**. Historical regional headings and PAHO service coverage do not establish current WHO constitutional/regional assignment.
- **105/249 (42.2%) affirmative April 2026 WHO office-host records**, **144/249 (57.8%) lack equivalent affirmative April data and are *not proven without an office***. Mixed-age WHO survey roster: **106 April 2026**, **46 retained September 2024**, one unavailable. **228** separate Jan 2021–Dec 2022 WHO office/service inventory records must not be promoted to today.
- EMA NCA directory **34 identity candidate rows / 30 EU/EEA areas**; agency self-described remit **11/34 (32.4%)** with **26 role observations**; remaining **23/34 (67.6%)** first-party remit-review gap. **34/34 independently audited currently consolidated statutes and exact Team A joins remain unresolved**. A regulator's task page is not an independently validated statute.
- Provenance now **236** unique source IDs/URLs, with seven newly added official pages.

## Mandatory unresolved work and conflicts
1. **44 current WHO regional assignment queue**: territory/special governance and direct-profile ambiguity; no parent, UN, SIDS historical table, surveillance reporting, PAHO service or inferred assignment. Retain Indonesia's 2025-05-23 transition to WPRO and Algeria's AFRO administrative designation; keep WHO US governance pending.
2. **144 without equivalent April office-host affirmative sources**, old 46 office-survey profiles despite separate corroboration and 228 2021–22 historic records: distinguish physical office premises, country presence, multi-country service, focal point and unknown; check true current source date.
3. **Maltese unresolved dual-agency grant attribution** on two contemporaneously visible first-party pages; audit Malta Medicines Act 2003 (Chapter 458), subsidiary legislation 458.34 and delegation/amendments; preserve national vs Commission decision distinction. Remaining 23 NCA agency role audits and **all 34 legal scope/current statutes and Team A exact IDs** pending. FAMHP clinical trial decision maker distinction also requires legal verification.
4. **PAHO Caribbean** dated 14 versus undated 13 (French Saint Martin versus Dutch Sint Maarten must remain separate), Boisson January/February 2021 term-source conflict. WHO/Europe SCI North Macedonia exact April 2024 accession instrument/day still pending.
5. **Africa CDC APPM** 8 signed/15 expressions/55 target, seven named signatories still missing. IDF North America/Caribbean 22-vs-23, AOECS 43+1+3 versus 41+6 membership categories, HI role separations, Codex claimed 1991 observer instrument unresolved.
6. **HEARTS 2.0** national edition/adoption, ASEAN implementation vs voluntary coordination, seven-condition network governance, exact Team B/C organization IDs, underlying scientific/legal/maintainer review remain.

## Next autonomous continuation and exact user prompt

Fetch live PR/head, this standalone checkpoint, `CONTINUATION_PROMPT.md`, original acceptance and data contract. Preserve all already committed work, dates, conflicts, no-join boundaries and source caveats. Audit official current WHO region and office status first, then statutory national regulators and cross-border programme affiliations. Make only Team D research directory writes, validate accurately, read back each commit and leave PR OPEN/DRAFT/UNMERGED.

```text
Continue Research Team D in [https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70).

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`, including its latest checkpoint and original acceptance criteria.

Verify live GitHub state and continue autonomously. Prioritize unresolved WHO assignments, office evidence, regulator authority, and international network relationships. Preserve all historical-versus-current distinctions, source conflicts, existing research, and scope restrictions. Commit, validate, and verify readbacks regularly. Modify only Team D's research directory. Do not modify the public website, main, or other teams; do not merge or mark the PR ready.

If unfinished, save a complete standalone GitHub checkpoint. End with a concise status, this same reusable continuation prompt, and updated visual progress bars for WHO regional assignments, verified office-host evidence, and remaining research gaps. Do not equate structural validation with legal or clinical approval.
```
