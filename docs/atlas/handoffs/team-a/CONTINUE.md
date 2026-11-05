# CURRENT standalone Team A continuation — Batch 10 (2026-11-05)

**Read this current block first; the older Batch 9 full handoff below is preserved as historical context.** Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight. Draft PR **#68** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68; research branch `research/atlas-team-a-20261104`; latest fully verified **data commit** `6a8679492553d3d24cba790608fbb3d017b7d854`. This accompanying documentation commit follows the data commit; **resolve current live PR HEAD** before any new mutation.

**Source of original full assignment:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`; see `DATA_CONTRACT.md` as applicable. Team A exclusively owns the **governmental and statutory public-health directory**, not non-government clinical societies (Team B), independent journals (Team C), international network membership (Team D), or clinical formula/content. All work is educational research staging; do not touch `main`, the public website, calculator, personal medical data, other teams, patient-facing recommendations, or merge/mark draft PR ready.

**Latest exact Batch 10 dataset totals:** 248/248 dated official M49 country-or-area rows matched individually on code, ISO alpha2/3, UN English name and region/subregion. 85/248 official ministry/department **identities** found and 163 explicitly `UNKNOWN_REVIEW_NEEDED` (not 'no ministry'); 126 separately recorded government bodies; 31 source-linked intra-government relationships; 167 provenance rows (some source failures/candidate-only records), and 248 country coverage rows. Identity found is **not** legal statute completeness and 85/248 is **not** total research acceptance completion.

**New this run:** Chad `gov-148-001`; Ethiopia `gov-231-001`; Gabon `gov-266-001`; Georgia `gov-268-001`; India `gov-356-001`. Additional EPHI `gov-231-002`, Indian Department of Health and Family Welfare `gov-356-002`, Indian DGHS `gov-356-003`. Three source-backed within-government relationships; no speculative cross-area M49 parent IDs. Original French, Georgian, and official English names recorded as available; missing Amharic and current legal consolidation remain explicit. All limited scope, source names and exact URLs in `data/government_health_bodies.csv`, `PROVENANCE.csv` and `GAPS.md`.

**Legal/source cautions that MUST persist:** Chad's identity supported by ministry 2026 + Primature 2026 after historical 403; current decree/province powers unverified. Ethiopia mission cites Proclamation 1097/2018; EPHI cites Regulation 529/2023, independent reading needed; ministry script/regional competencies pending. Gabon Oct 2026 Presidency describes a **DRAFT** ministry organizational decree, never treat as enacted. Georgia's original 2018 government Decree 473 and June 2026 government gazette order establish name and limited functions; 2026 consolidated rules restricted, ministry site 403, territorial effective control **not** adjudicated. India central directory and DGHS establish national ministry and attachment; **not** full state/UT competence. Do not infer cross-border delegated authority, declare any disputed sovereignty resolved or treat WHO country office as a domestic ministry.

**Validation:** Independently re-fetched **all 5 data CSVs and official dated M49 snapshot** from exact SHA `6a8679492553d3d24cba790608fbb3d017b7d854`, quote-aware parsed, checked 248 per-row official geography fields, count/status synchronization, all 126 body mappings, 31 relationship edges, 167 provenance unique IDs, 248 coverage records, 20 special-territory sentinels. Structural **PASS**. **Python validate.py was not executed on Batch 10** because sandbox cannot checkout remote GitHub; run `python docs/atlas/handoffs/team-a/validate.py` in a complete writable checkout. Structural checks are not full legal accuracy assessment.

**Resume queue:** 074 Bouvet, 104 Myanmar competing institutions, 112 Belarus, 162 Christmas Island, 166 Cocos, 174 Comoros source placeholder/title issue, 175 Mayotte French competencies, 192 Cuba, 226 Equatorial Guinea ministry rename and proposed INSESO transfer, then 232 Eritrea, 234 Faroe, 248 Åland and ascending remaining unknown M49 areas. Continue Bosnia canton/Brčko, health regulators, government institutes, legal enactment/rename review, and detailed national vs subnational powers. For disputed/delegated/renamed cases prioritize **two independent primary government/legal sources**. Do not promote snippets and search failures. Every new area row requires dated government-issuer original source URL, verified state, jurisdiction scope, explicit unknown legal effective dates, and accurate original-language text, avoiding guessed translations.

**Workflow:** Read complete current `CONTINUE.md` including historical limits, `STATUS.md`, `GAPS.md`, `QA_REPORT.md`, `README.md`, `CHANGELOG.md`, 5 normalized CSVs, M49 dated official snapshot and `validate.py`. Check live PR HEAD for newer work. Stage manageable sourced batches **only in `docs/atlas/handoffs/team-a/`**; commit and independently fetch exact SHA for validation; update all handoff/QA documents and PR body with accurate counts; preserve historical source-failure records. Keep draft, unmerged, no production changes. At end give current SHA, PR, counts, remaining gaps and repeat the same exact prompt below.

## Same required short continuation prompt, unchanged

> Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.
>
> Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.
>
> Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.
>
> If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.

---

## Previous standalone handoff — Batch 9 (historical; current Batch 10 above supersedes totals)

# Ancestry Health — Team A complete standalone GitHub continuation

Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
Open **DRAFT** PR #68: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68  
Existing research branch: `research/atlas-team-a-20261104`  
Latest data commit (Batch 9): `f0d289e1e3660212b8afd9b60c07e6450853dcfc`  
Handoff date: 2026-11-05; this file is in a subsequent accompanying documentation commit. Resolve the current **exact HEAD** from GitHub before new writes; newer commits supersede this checkpoint.

## Assignment & original acceptance criteria

Continue Team A: comprehensive **government and statutory public-health authority census for all UN M49 country/area records**, including all territories and special-status areas. On research branch `research/atlas-five-team-handoff-prompts-2026-11-04`, read `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` and `DATA_CONTRACT.md`. Then read every current Team A file under `docs/atlas/handoffs/team-a/`: `README.md`, `STATUS.md`, `GAPS.md`, `CHANGELOG.md`, `QA_REPORT.md`, `CONTINUE.md`, `PROVENANCE.csv`, `data/*.csv`, `validate.py`, official dated M49 snapshot, corrections and Montserrat source check. GitHub is authoritative memory; do not rely on the old chat.

Only government/territorial ministries, statutory public-health authorities, national public-health institutes, health regulatory agencies, public government research councils and devolved/delegated government responsibilities belong here. Independent journals (Team C), non-government clinical societies (Team B) and international networks (Team D) are out of scope. Do not change main, live website, calculator, clinical math, health advice, or other teams' handoffs. Do not merge or mark this PR ready for review. All datasets are **research staging**, not approved clinical or patient guidance.

## Exact data state

- Official UN M49 snapshot: 248/248 country-or-area records separately compared for codes, ISO, English UN names and region/subregion to `M49_OFFICIAL_SNAPSHOT_20261105.csv`. Geography is not sovereign recognition, legal health authority, ancestry or genotype.
- Principal governmental authority **identities located: 80/248; unresolved: 168/248** explicitly `UNKNOWN_REVIEW_NEEDED`. Identity/mission source is not proof of current full statutory competence or complete devolution. Keep unknown effective dates and unlabeled translations qualified.
- Government health-body rows **118**; sourced internal relationships **28**; provenance records **154** including primary checks, second governmental checks, access failures and global official geography evidence; coverage ledger **248**. Provenance counts are not equivalent to 154 mandates verified.
- Batch 9 data commit: `f0d289e1e3660212b8afd9b60c07e6450853dcfc`. New principals: 238 Falkland Islands (Malvinas) gov-238-001; 316 Guam gov-316-001; 340 Honduras gov-340-001; 360 Indonesia gov-360-001; 376 Israel gov-376-001; 398 Kazakhstan gov-398-001; 404 Kenya gov-404-001. New units and 4 legitimate intra-government structural edges: gov-238-002 Falkland Islands Public Health Unit; gov-316-002 Guam Division of Public Health; gov-404-002 Kenya State Department for Medical Services; gov-404-003 Kenya State Department for Public Health and Professional Standards. All 5 committed CSVs independently read back from this exact SHA and compared to the 248-row official M49 snapshot: PASS, 80/168 coverage, 118 bodies, 28 relationships, 154 provenance. Quote-aware JavaScript structural checks with 17 complex/special-jurisdiction sentinels passed. Python `validate.py` was NOT rerun for Batch 9 due no outbound GitHub clone in the tool environment; earlier batches ran Python. Re-run full Python validator on newest branch checkout when available.
- Previous Batch 8 data SHA `413def180d3982ddae65f7cacf453017e389c5c2` and accompanying docs SHA `83abb1c02731a69719cac3056d21d5de165cf56d`: 73 identified/175 unresolved; 107 bodies, 24 relationships, 136 provenance. Batch 9 builds directly on them and preserves notes/sources.

## Immediate work queue and scientific/legal discipline

1. **Research unresolved principal area authorities** first: 074 Bouvet, 104 Myanmar, 112 Belarus, 148 Chad, 162 Christmas Island, 166 Cocos, 174 Comoros, 175 Mayotte, 192 Cuba, 226 Equatorial Guinea. Then unresolved areas by ascending M49, including 231 Ethiopia, 232 Eritrea, 234 Faroe, 248 Åland, 254/258/260 French territories, 266 Gabon, 268 Georgia, 292 Gibraltar, 324 Guinea, 356 India. Previous blocked/placeholder searches are in `PROVENANCE.csv` and GAPS.md and **must not be promoted to verified** on the strength of snippets or failed access. Comoros title conflict, Myanmar competing/NUG authority and no-permanent-population cases require careful source distinction.
2. For disputed, delegated, renamed or substantial devolved legal competence: use at least **two independent official governmental or legislative sources**. Never invent cross-area parent M49 links. Batch 9's Falklands 238 sovereign dispute, Guam 316 US/federal-territorial authority, Israel 376 versus separate State of Palestine M49 275, Kenya 404 counties and state departments require separate legal interpretation. Country membership does not mean legal delegation or ancestry. Myanmar competing bodies cannot be turned into an unqualified sole health ministry.
3. Continue extensive government institutional coverage: Bosnia & Herzegovina cantons and Brčko district, ministries of regions/states, public-health institutes, national health regulatory bodies and health data/government biomedical councils. Preserve separate government/independent society distinction and agency hierarchy only with sourced edges. Review major renames and legal effective dates. Source every body with original-language exact name, explicit English translation when by reviewer, issuer, specific governmental source URL, checked date, geographic and population scope, mandate, verification state and caveats. WHO country office is not national ministry evidence.
4. Research manageable official-primary batches. Update five normalized CSVs plus STATUS/GAPS/README/CHANGELOG/QA_REPORT/CONTINUE consistently. Run `python docs/atlas/handoffs/team-a/validate.py` from a full checkout, and at least 10 jurisdiction/negative controls. If not executable, use complete structural mirror and **say so**, as in Batch 9. Independently reread actual GitHub commit files, verify 248 official M49 equality, ID consistency, counts, and source limitations. Commit at checkpoints on `research/atlas-team-a-20261104` **only under `docs/atlas/handoffs/team-a/`**. Keep draft PR #68 updated with honest counts, no merge. Never touch production.
5. Before end of any session, save a fully standalone GitHub checkpoint even if not finished and report exact branch HEAD SHA, PR, coverage, new record IDs, full QA outcomes and outstanding legal/source gaps. Return the **same exact short continuation prompt** reproduced below.

## Same next-run continuation prompt (repeat unchanged)

> Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.
>
> Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.
>
> Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.
>
> If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.

No governmental directory record authorizes a diagnostic, therapeutic, ancestry-derived or other patient-facing clinical recommendation.
