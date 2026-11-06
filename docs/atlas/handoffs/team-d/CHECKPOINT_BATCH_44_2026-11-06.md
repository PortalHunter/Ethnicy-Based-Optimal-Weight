# Team D — complete standalone continuation checkpoint, Batch 44 (2026-11-06)

## Verified repository state and strict scope
- GitHub repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight ; Team D PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.
- Working PR branch: `research/atlas-team-d-20261104`, base `main`. Live PR verified **OPEN / DRAFT / UNMERGED** after substantive and documentation writes.
- Starting PR head at this run: `fc17dae91553779a34d71e25409d432b7849d87c` (Batch 43). GitHub compare through this checkpoint's pre-commit head `f6d4d88065e6598d0d0f76ad25fc9324af5ac54f`: **ahead 8, behind 0**, exactly **eight changed files**, ALL confined to `docs/atlas/handoffs/team-d/`. This checkpoint is an additional commit; **fetch fresh live head before doing more work**.
- The public site, calculator, `main`, other teams, scientific/clinical claims, PR ready state and merge were NOT modified. Do not merge or mark ready.

## New directly sourced, bounded legal-authority research (4 records / 2 first-party URLs)
The Malta legal-grant attribution conflict was sharpened without falsely treating it as resolved.

1. **Malta Medicines Act, Chapter 458**: read the official 2025-07-22 published consolidated PDF at https://legislation.mt/getpdf/689056a6bed0ed26189a5c41 (new **TD-SRC-281**). Official portal lists amendments through **Act XX of 2025**; **21 Nov 2003** commencement and **22 Jul 2025** publication are distinct. Original PDF pages 9, 17–18 visually inspected (also extracted text). Narrow claims:
   - **Article 3(1)** designates **Superintendent of Public Health** the statutory **Licensing Authority**; Art 3(2)(j) assigns marketing-authorisation issue/renewal/variation/suspension/revocation functions to that office.
   - **Article 20(1)–(6)** distinguishes ordinary marketing-authorisation applications and statutory exceptions; the Medicines Authority assesses applications then forwards findings/recommendations to the Licensing Authority.
   - **Articles 21–23** distinguish appeals/review and the Licensing Authority's ordinary grant/refusal decision after Medicines Authority recommendations.
   - This is a *partial section-level statute inspection*, not a review of every amended article, later amendments, S.L. 458.34, product-specific grants, execution/signature or effective delegation.
2. **Delegation to Medicines Authority Order, S.L. 458.39**: official index at https://legislation.mt/eli/sl/458.39/eng/pdf (new **TD-SRC-282**) identifies the instrument with **22 Jul 2010 portal point-in-time** metadata. The apparent PDF route resolved to a **web index rather than usable original operative text**. No delegation clause, date of original legal effect, signatory, revocation or current scope was confirmed. Do not infer any text from the order's title, nor treat point-in-time as enactment.
3. **Unresolved attribution conflict**: previously preserved first-party Medicines Authority Registration page https://medicinesauthority.gov.mt/registration?l=1 states the agency grants national/MRP/DCP authorisations; its separate How Medicines Registered page https://medicinesauthority.gov.mt/howmedicinesregistered distinguishes assessment from Licensing Authority grant. These remain competing agency descriptions pending the original operative delegation order and a complete current legal audit. The primary Medicines Act and delegation portal metadata establish a plausible *path for investigation*, NOT a judicial finding or final issuer determination.

New file: `data/malta_2026_primary_law_boundary_review.csv`, **4** rows `TD-MT-LAW-001–004`. Every row is scoped to **M49 470**, *provisional EMA candidate* `TD-EMRN-NCA-022`, separate legal section/source date/verification level. All rows explicitly retain `SCOPE_REVIEW_ONLY_NOT_COMPLETE_CURRENT_AMENDED_STATUTE_AUDIT`, `FULL_TEXT_UNVERIFIED` (delegation text), and `PENDING_EXACT_TEAM_A_ID_JOIN`. No extra government-grant or legal approval edges were added to the network.

Two new, deduplicated first-party provenance rows `TD-SRC-281–282` bring total unique provenance URLs to **282**. The pre-existing **71** source-scoped regulator self-descriptions and 34 EMA NCA identity candidates stay unchanged; neither a new regional assignment nor a complete statute/agency ID audit was credited.

## Saved commits and remote readback
1. `a5eb0881f6eed6ee10b9f1dbe8d2d7f2c82d9f54`: four new Malta narrow legal-boundary records.
2. `e910d2579e1d39e6f2396498b4d972a54e2c75f5`: two URLs / provenance ledger, readback **byte identical**; latest provenance blob `b3d56826c6aea527ee58ceb458f452c145b85ba7`.
3. `127a603bab04a7a1f8f1e76278d4f283c8d16257`: checked-in validator new four-row legal-boundary guardrail and expected **282** source count, validator blob `a8a72ca00de3657bd0870e45f812b02ebbe69ffb`.
4. `68be43c6e15e7e3603b575679555a0c72e971bc9`: STATUS; `e5e427539c757e7173e2d3c114c057ae5649e741`: GAPS; `6a62a023643d49f81635281a94235fc5772c4efa`: VALIDATION; `c6bcbe9e9592915ad63a703cb2c0c03984198708`: CONTINUATION; `f6d4d88065e6598d0d0f76ad25fc9324af5ac54f`: CHANGELOG. Each documentation file was re-fetched and checked **byte-identically** after its commit.
5. Source CSV blob `10c31439732350c99f4059754edf0e25591b5bcb`. The 8-commit compare against original head verified all eight changed paths Team D-only; no main/site/other team writes.

## Structural validation — accurately qualified
- **PASS, 18 targeted assertions** on five *current GitHub branch* files: Malta law CSV, provenance, checked-in `validate.mjs`, WHO M49 status and April WHO office host table. Checked CSV parse widths, 4 law records and ordering, 282 distinct source IDs and URLs, source 281–282 association, M49 470 / EMA candidate ID, unreviewed delegation, preserved 249 M49 total and 105 April host rows, validator source expectation and new check entry points.
- The **modified full checked-in validator was not run** on Batch 44 current code. The last complete **Batch 42** read-only V8-shim pass (12,590 assertions over 44 dependencies, at the earlier 278-source snapshot) CANNOT be treated as validation of the 282-source Batch 44 state. Batch 43 had targeted tests, not a full pass. Native `node docs/atlas/handoffs/team-d/validate.mjs` checkout unavailable: `git ls-remote` failed GitHub DNS resolution. Resume with native Node/Actions when possible and fix only Team D, with readbacks. Structural checks are not a legal, primary-instrument, scientific, clinical or maintainer signoff.

## Unchanged baseline: separate non-equivalent metrics
| Metric | Verified amount | Critical limit |
| --- | ---: | --- |
| WHO M49 seed | 249/249 | ISO 158 exception is not WHO recognition |
| **Direct current WHO regional assignments** | **205/249 (82.3%)** | **44 UNKNOWN**: territories, boundary cases, no parent-geography inference |
| **Affirmative April 2026 WHO office host joins** | **105/249 (42.2%)** | **144 without equivalent affirmative April evidence**, not proof offices absent |
| WHO September 2024 survey labels | 46 | Historical survey timestamp unchanged |
| WHO 2021–2022 office/service rows | 228 | Separate historical WHO service period, not current physical premises |
| International institution graph | 47 nodes / 617 time-qualified typed relations | No unverified legal or clinical membership edges |
| Seven Atlas conditions | 20 institutional references across all seven | Science/clinical review not yet performed |
| EMA country agency identity candidates | 34/34 source-described, 71 role records | Still provisional national authority role interpretation |
| **Complete amended legal statute + delegated authority + exact Team A ID audit** | **0/34** | **34 still require comprehensive legal/identity review** |
| Provenance URLs | 282 | 2 new first-party Malta law/delegation-index sources; complete order text absent |

## Original acceptance criteria and remaining independent research tracks
The original Team D specification in `TEAM_D_INTERNATIONAL_NETWORKS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04` calls for six evidence-aware WHO regional offices/status dates; >=10 distinct, typed and time-qualified multinational/international relationships; >=10 explicit negative/boundary cases; a reproducible provenance-linked M49/overlap graph; condition-linked international institutions for all seven Atlas health keys; and a durable draft PR. **Structural coverage and relationship minima do not constitute full legal/scientific/clinical research acceptance.** No parent-jurisdiction WHO region, technical programme service, or shared guideline is automatically country membership, physical office, signed international agreement or law.

1. **44 WHO current region unknowns**: review each territory/source specifically; avoid treating surveillance region labels, PAHO service or historical lists as WHO administrative assignment. Preserve Liechtenstein non-EURO-member boundary, Greenland, Indonesia 2025 reassignment, Algeria UN/WHO difference, U.S. 2026 WHO governance qualification.
2. **144 April-2026 office-host affirmative gaps**: seek true date-qualified firsthand office host surveys/records. Keep 46 September-2024 surveys and 228 2021–22 historic service rows separate. Later representative appointments, news or PAHO annual report coverage are not retrospective April survey positives or necessarily sited premises.
3. **34 full national authority audits**: first obtain Malta S.L. 458.39 *operative original*, any amendments, sections and legal effect; reconcile full amended Chapter 458 + S.L. 458.34 + European Commission centralized vs local authorisation and exact Team A agency identifier. Repeat complete current statute and delegation review across every EMA candidate. Do not mark Malta one of 34 audited merely because 3 original Act articles were directly reviewed.
4. **Original network instruments**: PAHO Eastern Caribbean undated 13 versus 2026 dated 14 with French Saint Martin (663) distinct from Dutch Sint Maarten (534); PAHO Boisson January/February 2021 term discrepancy; WHO-Europe SCI North Macedonia April 2024 accession instrument/exact day; Africa CDC APPM eight signed states with seven signer names missing, 15 expressions of interest and larger aspirational targets; IDF NAC 22/23 organizations; AOECS 43+1+3 versus 41+6 classification and explicitly nonmember groups; HI network members versus partners; Codex reported observer since 1991; HEARTS 29 vs undated 35 and varying nationally adopted protocols; ASEAN cooperation without binding national law; GCTF training participant/contributor does NOT imply formal GCTF membership. Preserve other teams' exact IDs until verified and all source/access qualifications.
5. **Validation/approvals**: native Node runner and GitHub Actions, original legal instrument facsimiles, independent legal/effective-date review, specific scientific/clinical appraisals and maintainer review outstanding. Do not ready/merge.

## Updated visual progress, each metric separate
- WHO current region assignments: **████████████████░░░░ 205/249 (82.3%) — 44 unknown**.
- April 2026 affirmative office-host evidence: **████████░░░░░░░░░░░░ 105/249 (42.2%) — 144 without equivalent positives**.
- Source-described EMA identity/remit coverage: **████████████████████ 34/34 — role statements only**.
- Complete current amended statute/delegation + exact Team A ID: **░░░░░░░░░░░░░░░░░░░░ 0/34 — 34 pending**.
- Current Batch 44 full checked-in regression: **NOT RUN** (18 targeted checks passed; no legal or clinical approval).

## Exact reusable continuation prompt
```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`, including its latest checkpoint and original acceptance criteria.

Verify live GitHub state and continue autonomously. Prioritize unresolved WHO assignments, office evidence, regulator authority, and international network relationships. Preserve all historical-versus-current distinctions, source conflicts, existing research, and scope restrictions. Commit, validate, and verify readbacks regularly. Modify only Team D's research directory. Do not modify the public website, main, or other teams; do not merge or mark the PR ready.

If unfinished, save a complete standalone GitHub checkpoint. End with a concise status, this same reusable continuation prompt, and updated visual progress bars for WHO regional assignments, verified office-host evidence, and remaining research gaps. Do not equate structural validation with legal or clinical approval.
```
