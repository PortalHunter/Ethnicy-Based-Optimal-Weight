# Team D — complete standalone checkpoint, Batch 28 (2026-11-05)

## Authoritative branch/PR state and scope
- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- Draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70; verified **OPEN / DRAFT / UNMERGED** before this checkpoint write. Do not merge or publish.
- Research head at this checkpoint composition: `23ca55172849ccce786427d0475809d05883a9b9` on `research/atlas-team-d-20261104` (base `main`). **The new checkpoint commit will advance head**; always independently retrieve the live head on resumption.
- Write restriction: `docs/atlas/handoffs/team-d/` only. No changes to public calculator/website, main, Team A/B/C folders, medical recommendations, other issues or PR merge state.
- Source of original requirements: `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`. This is a sourced institutional graph, **not** a patient-care rule engine. Ancestry is not inferred from residence or membership.

## Batch 28 source findings and durable commits

**68 named AOECS society-role observations:** [`data/aoecs_society_role_observations_2026.csv`](data/aoecs_society_role_observations_2026.csv), committed in [`bac43d5e461e862200fba5e4843f2b9ec93d77a5`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/bac43d5e461e862200fba5e4843f2b9ec93d77a5).
- 43 organizations in the source's **full-member** section, one explicitly **associate** and three explicitly **affiliate** societies. AOECS's own member directory headline is 43 full / 1 associate / 3 affiliates (47 enrolled total).
- 21 additional named societies are under its explicit **“Other coeliac societies” not members** section. They are retained as NONMEMBER_COLLEAGUE_LISTED rather than automatically converted to members or signed partnerships. Among the boundaries: two listed US nonmembers are not the same as the separately listed US full member; a Faroe Islands nonmember is not part of Denmark's society record by inference.
- All 68 rows have separate stable IDs, exact official organization-name labels, source section, membership class, M49 *geographic labels* crosschecked against retained official UN M49 crosswalk, `unknown` accession/end dates, and `2026-11-05` checking date. **61 distinct geographic area codes**; multiple organizations per country retained. The source's geographically titled European section also contains **Jordan, Mexico and the USA**; it is *not* an EU or WHO Europe membership list.
- Two full-section Swiss entries (ARC and Italian-speaking Swiss group) lack a visible individual membership-certificate hyperlink on the directory page. The source section is directly observed but we have not manufactured an individual certificate. No Team B identity joins, domestic clinical adoption or statutory jurisdiction inferred.

**6 separately typed AOECS organizational-role observations:** [`data/aoecs_crossborder_role_observations_2026.csv`](data/aoecs_crossborder_role_observations_2026.csv), [commit `42c471e102d7e3f914959b40c2fec0710e9a3824`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/42c471e102d7e3f914959b40c2fec0710e9a3824).
- AOECS describes collaboration with **ESPGHAN**, **ESsCD**, **ISSCD**, **EPHA**, and **UEG**. These are **five nonmembership professional collaboration listings**, not documented signed agreements or automatic AOECS members. AOECS self-reports **Codex Alimentarius observer status since 1991**: that year is a claim by AOECS, not an independently verified admission instrument. The official FAO/WHO Codex indexed roster separately identifies AOECS as an NGO observer but direct observer detail browsing redirected to a generic home page; independent historical start-date corroboration is still needed. Observer status is **not a member-state vote** and does not enact any local food law.

**Official-source class conflict (retained, not 'resolved'):**
- [AOECS member directory](https://www.aoecs.org/about-us/members/) says **43 full + 1 associate + 3 affiliates**.
- [AOECS about-us page](https://www.aoecs.org/about-us/) says **41 full + 6 affiliated**, while also saying 47 enrolled societies. Both totals are 47 but **class allocation differs**. No assumption that associate = affiliate, no inferred timing of reclassification, and no normalization against absent minutes.
- Missing joining dates and names/legal identities in Team B remain pending.

**Provenance**: `TD-SRC-013/014` were **reused and clarified**, `TD-SRC-209` ([AOECS health-care collaborators](https://www.aoecs.org/about-us/friends/health-care-organisations/)), `TD-SRC-210` ([AOECS advocacy/1991 observer claim](https://www.aoecs.org/advocacy/)), and `TD-SRC-211` ([Codex indexed observer list](https://www.fao.org/fao-who-codexalimentarius/about-codex/observers/observers/obs-list/de/)) added, bringing unique source IDs/URLs to **211**. Ledger commit [`0b7b2ed6f8d4d4ccc56eee88489625a25ba66287`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/0b7b2ed6f8d4d4ccc56eee88489625a25ba66287).

## Validation and unchanged protected state

- Checked-in validator update [`23ca55172849ccce786427d0475809d05883a9b9`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/23ca55172849ccce786427d0475809d05883a9b9) asserts exact 68/6 role totals, class boundaries, unique source IDs and URLs, geographic M49 joins, blank-certificate caveats, unresolved original conflicts and invariant graph/WHO counts.
- **PASS: 11,366 assertions** running the complete checked-in `validate.mjs` in a **read-only V8 JavaScript function** with `fs.readFileSync`/strict-assertion substitutes. `fetch_pr_patch` provided **61 PR files**, 58 patch-reconstructed files plus 3 direct GitHub fetches (oversize `m49_network_status.csv` and `network_memberships.csv`, plus `validate.mjs`); **37/37** unique data/provenance inputs available. Final result `PASS`. GitHub-sourced current code blob `ebe89a18e106f5d723a56a3c70b6ad84b621cfb0`. Counts checked: **47 nodes**, **617 dated edges**, **20 condition references across seven keys**, **249 geographic candidates**, **205 verified/44 unresolved contemporary WHO region assignments**, **105 direct April 2026 office hosts**, **153 office-survey roster rows** (106 April 2026 / 46 older September 2024 / 1 unavailable), **228 distinct historical 2021–22 office/service observations**, **211** provenance URLs, **25** IDF/19 HI/68 AOECS society/6 AOECS role observations.
- **No native Node CLI or Actions run.** Current local container has Node but GitHub DNS failed, preventing repository clone. The shim validates checked-in program invariants, not medical, legal, statutory, source-facsimile or peer-reviewed claims. Do not claim the source interpretation is externally approved.

## Important outstanding gaps (all earlier caveats retained)

1. **44 WHO administrative region unknowns**: partial/event or historical region labels remain different from contemporary official regional affiliation. **144** retained M49 areas lack equivalent April 2026 affirmative WHO office-host evidence; **46** older 2024 office-survey profiles still need current operational recency verification. Jan 2021–Dec 2022 service inventory is *not* 2026 host evidence.
2. **PAHO** 13-versus-14 Barbados/Eastern Caribbean coverage and French Saint Martin (663) versus Dutch Sint Maarten (534); representative Boisson January-vs-February 2021 official date conflict; PAHO article direct openings returned 403. Local cooperation is not enacted policy.
3. **WHO Europe SCI** North Macedonia 2023 observer vs April 2024 member; exact admission date/instrument unknown. Greenland WHO/Europe 2024 MoU is not constitutional membership.
4. **Africa CDC APPM** eight MoU signers/fifteen intent countries/fifty-five targets, only Egypt signed identity individually corroborated; other named instruments, statutory remits and exact Team A identities missing. EMA's 34 NCA candidate labels likewise require legal competence joins.
5. **HEARTS**, ASEAN and national implementation remain differentiated from aggregate commitments; no nation-wide clinical policy inferred. IDF NAC organization count **22 vs 23** conflict and Curaçao name gap; HI Europe link is not M49 and HI partner/member class difference retained. AOECS **43/1/3 vs 41/6** discrepancy, two missing certificate links, exact society accession histories and Team B joins are new follow-ups.
6. Native Node in a full checkout, source-page recapture/Codex detail verification, exact legal instruments, and independent scientific/legal/maintainer review are required before PR readiness or publication. **PR remains draft and unmerged.**

## Recovery procedure

Retrieve the latest live PR head/status, this checkpoint, `CONTINUATION_PROMPT.md`, `STATUS.md`, `GAPS.md`, `VALIDATION.md`, `PROVENANCE.csv`, every `data/*.csv` and `validate.mjs`; compare the checked-in original Team D and data-contract prompts. Use Team D-only branch commits with source-date and provenance evidence, run checked-in structural validation, independently refetch changed artifacts, record final HEAD, and leave PR OPEN/DRAFT/UNMERGED. Never silently force unknown WHO status into confirmed membership.

## Original continuation prompt (verbatim)

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
