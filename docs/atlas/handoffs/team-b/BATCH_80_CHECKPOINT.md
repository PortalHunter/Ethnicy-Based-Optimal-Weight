# Standalone Team B checkpoint — batch 80 · 2026-11-06

**INCOMPLETE · PR #71 OPEN DRAFT · UNMERGED · research_lead_only · ZERO approved clinical claims.**

## Immutable handoff and exact scope

Repository: [PortalHunter/Ethnicy-Based-Optimal-Weight](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight). Branch: `research/atlas-team-b-20261104`. PR: [#71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71), base `main`. Previous documentation head: `175bff2f2c64a97ac695df7fe9392d82a22f711f`. Research data commit: [`75fe8f609a35876e35b71df9937fee585ff15eb8`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/75fe8f609a35876e35b71df9937fee585ff15eb8), root Git tree `bc78a0e9cee51fd16846f60b3cd65e6921b7f687`, **146 entries, truncated=false**. Six changed files ONLY within `docs/atlas/handoffs/team-b/`: `data/specialist_organizations.csv`, `data/condition_organizations.csv`, `data/publication_context.csv`, `data/coverage_by_area_condition.csv`, `PROVENANCE.csv`, `data/search_log.csv`. Separate documentation commit follows on same Team B-only branch.

## Coverage and change audit

**Batch 80 (2026-11-06):** [standalone checkpoint](BATCH_80_CHECKPOINT.md) · [data commit 75fe8f60](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/75fe8f609a35876e35b71df9937fee585ff15eb8). **485** local specialist/nonprofit organization identities in **227/248** M49 domiciles (21 identity gaps), **372/1,736** source-positive area-condition cells, **171** bounded-unlinked, **1,193** untouched, **1,364** without source link, **408** research-only exact publication/context pairs, **1,101** provenance and **635** logged searches. Added two Bangladesh local organizations and two first-positive Bangladesh cells (hypertension, high_chol/statin-use). Existing **10** community/subnational rows, **8** cross-border edges, **14** diversity counterexamples and **5** unknown issuer imprints preserved. All **408/408 research_lead_only** and **0** approved clinical claims. Immutable complete **146-entry** data tree, **11/11** CSV/unchanged-validator SHA matches, independent JS precommit structural checks 0 errors; **actual Node CLI not run** due local github.com DNS checkout failure. No licensing, legal, clinical, publication-accuracy, or universal link certification. PR #71 must stay draft, open, unmerged.

- Prior batch 79: organizations 483; 227/248 domiciles; 370 source-positive; 171 bounded unlinked; 1,195 untouched; 406 exact contexts; 1,095 provenance; 633 searches.
- This batch: +2 independently sourced organizations (`B-BD-NHFB`, `B-BD-BCS`); +2 original linked sources and typed contexts (`050 hypertension`, `050 high_chol`); +6 source attribution/identity provenance rows; +2 condition-search logs. Two cells formerly `not_yet_researched` converted; none of the 171 bounded checks miscast as absent. No new domicile gained.
- Current condition-positive cells: diabetes 109; hypertension **74**; high_chol **46**; gout 38; lactose 32; celiac 49; hereditary hemochromatosis 24 = **372**.
- 248 M49 roster rows × seven conditions = **1,736 structural slots**. Source-positive **372**, targeted no-eligible-linked-resource **171**, untouched **1,193**. Missing exact sources **1,364**. All 408 publication contexts maintain release state `research_lead_only`.

## New sources, attribution and limitations

Bangladesh NHFB official original [founder chronology](https://epidemiology.nhf.org.bd/founder) says NGO established 1978 while [parent site](https://www.nhf.org.bd/publications) describes founded 1979; do not settle year or invent statutory power. [Bangladesh Cardiac Society's own description](https://banglacardio.org/bangladesh-cardiac-society/) mixes >600 and ~1,500 members (and historical ESC directory 285), so no definitive current number. [2026 hypertension paper](https://epidemiology.nhf.org.bd/publications/jFY4x4kgfEpfwnevprdF) is Global Heart named multi-institutional authorship involving NHFB, DGHS and others, not Foundation-only or a government guideline; enrolled implementation data do not prove population-wide efficacy. [2025 Global Heart statin study](https://pmc.ncbi.nlm.nih.gov/articles/PMC11908426/) uses WHO STEPS Bangladesh 2018 surveyed adults 40–69, n=3,140, and measures statin eligibility/use. It is **not** FH genotype, high-LDL prevalence, population-wide all-ages risk, clinical prescription guidance, or an institution-authored national guideline. Publisher and own-site index differ; rights and methods beyond source text unappraised.

External link and issuer evidence: [NHFB original research department](https://epidemiology.nhf.org.bd/); [independent Global Heart statin article record, PubMed](https://pubmed.ncbi.nlm.nih.gov/40094069/); [Bangladesh Cardiac Society independent society site](https://banglacardio.org/bangladesh-cardiac-society/). Foundation, hospital research department, Bangladeshi Ministry/DGHS, international collaborators, independent article authors and journal publisher are **not interchangeable**. The statin publication is lipid-prevention observational research; familial hypercholesterolemia is a separate diagnosis.

## Acceptance criteria: what is complete vs open

1. **Every M49 area × seven conditions enumerated:** structurally complete (248×7); substantive research incomplete (1,193 untouched and 171 bounded-unlinked; bounded no-source does not imply national absence).
2. **Country of document issuer, study population and clinical jurisdiction separated:** original country, host, authored work, named affiliates, journal publisher, geography of participants and legal remit tracked as distinct fields, but five older document issuer imprints remain unknown: **Panama HEARTS; Portuguese WGO lactose translation; Portuguese ESPGHAN coeliac translation; Chad OA Pub/JHC; South Sudan PAMJ**.
3. **No subtype conflation:** FH != severe LDL or statin eligibility; gout != high urate alone; hereditary haemochromatosis != raised ferritin; lactose malabsorption genotype != symptomatic intolerance; coeliac HLA markers != confirmed disease. No ancestry-risk inference.
4. **Primary organization/site checks, original publications, lifecycle:** the new identities have their own linked sites and original publication affiliation checks, but legal registration/current governance, source edition/full method, conflicts, licensing, rights and publication currency remain open. Retain original Türkiye, Nepal, Croatia, Iceland and Ireland caveats in older checkpoints.
5. **10+ anti-overgeneralization examples:** 14 geographic/population diversity counterexamples previously retained, 10 governance-sensitive community/subnational cases and eight cross-border service edges unchanged. No Indigenous consent, community rights or genetics interpretation approval.

## Validation / reproducibility

Independent precommit JavaScript verified row width, unique IDs, new cell state before update, publication-to-organization and context-to-provenance joins and full new state totals: **zero structural exceptions**. At immutable data commit, GitHub complete nontruncated **146-entry** tree used to check separately retrieved ten Team B CSV files plus unchanged `validate.mjs`: **11/11 exact GitHub-reported file SHA matches to tree**; 248×7 rows, 10 community rows, eight cross-border rows, 485 organizations, 408 contexts and 635 logs read back. Six-file data commit diff confirmed Team B-only. Actual local Node CLI **NOT RUN**: `git ls-remote` failed DNS `Could not resolve host: github.com`; historical successful Node receipts do not apply to this run. These checks are structural/provenance only, **not full-text, copyright, permission, clinical efficacy, medical-device, legal or clinical acceptance**. Recheck GitHub CI on latest documentation commit independently.

## Remaining prioritized work

**21** M49 domiciles without independently verified local organization identities (list in `CHECKPOINT.json`); **1,193** untouched cells, particularly gout, lactose, coeliac and hereditary hemochromatosis; **171** bounded unlinked searches needing broader original-language work; five original issuer imprints; NHFB 1978/1979 founding discrepancy; BCS inconsistent member totals; 2026 Bangladesh HEARTS original multisite author/programme denominator review; statin paper source funding/version and survey-population restrictions; prior original PDF provenance, historical-vs-current lifecycle, journal/publisher-versus-author, copyright, minority/Indigenous consent and issue #27 clinical review. Do not mark the PR ready, merge, touch main, website, clinical formulas, government Team A, journal Team C or international network Team D.

## Mandatory standalone restart

1. Read this checkpoint, then the newest sections of `CONTINUE.md`, `CHECKPOINT.json`, `STATUS.md`, `GAPS.md`, `VALIDATION.md`, `CHANGELOG.md`, all ten CSVs and `validate.mjs`. Also read the original `docs/atlas/research-team-prompts/TEAM_B_CLINICAL_ORGANIZATIONS.md` and `DATA_CONTRACT.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`.
2. Recheck PR #71 open/draft/unmerged, live head, comments/reviews/CI, complete tree, changed paths and any concurrent write. Do not assume batch numbers unique; reconcile exact IDs and URLs. Never overwrite a moved head; commit with parent and expected-head lease.
3. Research untouched condition/area cells, local society identities, issuer attribution, studies and page dates. No site host as automatic document author, no sampled population as all residents, no bounded search as country-wide absence, no ancestry-based diagnosis.
4. Commit ONLY under `docs/atlas/handoffs/team-b/`, run `node docs/atlas/handoffs/team-b/validate.mjs` on a real checkout when possible, independently verify immutable CSV/validator blobs and joins, read back, and update a standalone GitHub checkpoint. Preserve all history/caveats.

## Exact reusable continuation prompt

Continue Research Team B in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71.

Read `docs/atlas/handoffs/team-b/CONTINUE.md` on branch `research/atlas-team-b-20261104`, including its latest checkpoint and original acceptance criteria.

Verify live GitHub state and continue autonomously, prioritizing untouched condition-area cells, missing organizations, source attribution, and research gaps. Preserve existing research, evidence caveats, and scope. Reconcile concurrent changes safely; commit, run validation, and verify readbacks regularly. Modify only Team B's research directory. Do not modify the public website, main, or other teams; do not merge the PR or approve clinical claims.

If unfinished, save a complete standalone GitHub checkpoint. End with a concise status, this same reusable continuation prompt, and updated visual progress bars for geographic organization coverage and source-positive condition-area coverage, including remaining gaps.
