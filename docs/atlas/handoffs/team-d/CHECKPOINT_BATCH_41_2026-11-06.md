# Team D standalone continuation checkpoint — Batch 41 (2026-11-06)

## Repository status, scope and original criteria

- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight ; existing **draft/open/unmerged** [PR #70](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70), branch `research/atlas-team-d-20261104`, base `main`.
- Batch 41 final research/validator SHA: `e4176d2b9d1cc8c22501a3b703e32f161c790d59`. Five research commits since prior branch head `144e4cdc6a257a5c4fc70ebdba5ca2decc9c6be7`; GitHub compare confirms **only four files under this Team D directory**. Subsequent checkpoint/documentation commits advance the live head; fetch it independently before edits.
- Immediately preceding [Batch 40 standalone checkpoint](CHECKPOINT_BATCH_40_2026-11-06.md) remains authoritative for all earlier research and conflicts.
- Original acceptance documents (read and retained): `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`. Cover **all six WHO administrative regions**; >=10 specific sourced dated international institutional relationships, >=10 negative/boundary cases, complete M49-indexed status matrix with explicit unknowns, provenance-stamped typed time-aware edges, and source-scoped institutional representation across `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`. Dataset/structural criteria are not national legal, scientific, or clinical approval.
- Exclusive writable scope: `docs/atlas/handoffs/team-d/`. Do **not** edit public site, main, other teams, clinical calculator or patient's advice. Do not merge, close or mark PR ready. Ancestry/geography is not evidence of genotype, authority, membership or disease.

## New Batch 41 first-party evidence — two observations, two new source URLs

1. **Angola (M49 024) ↔ Namibia (M49 516)**: Directly opened 26 February 2026 WHO Africa news report https://www.afro.who.int/countries/angola/news/angola-and-namibia-strengthen-joint-response-polio-synchronized-border-campaign?country=Angola&name=Angola . WHO says Angola **launched** a subnational polio vaccination campaign in Namacunde, with a stated **24–27 February 2026** activity window in 13 municipalities in four border provinces, **synchronized** with Namibia; Namibian delegation attended. This confirms first-party **reported operational cross-border coordination** but not completion/impact of every planned activity, signed bilateral agreement, national regulation or medical guidance adoption. Polio is not one of the Atlas's seven claim keys. Created `data/crossborder_public_health_coordination_2026.csv`, row `TD-XBPH-001`, source `TD-SRC-274`. No generic graph edge added without ontology/instrument review.
2. **South Sudan (M49 728)–WHO future Juba office premises**: Directly opened WHO Africa report, news date **25 February 2026**: https://www.afro.who.int/countries/south-sudan/news/south-sudan-who-seal-landmark-deal-permanent-who-headquarters?country=South+Sudan&name=South+Sudan . WHO reports a **signed land allocation agreement** by the South Sudan Ministry of Health and WHO for *future* construction of a permanent Juba Country Office. News calls the signing Thursday while the Wednesday 25 February 2026 header is a different weekday: **exact instrument-signature day is uncorroborated**. The signed original, land title/delegation, effectiveness and building occupancy/completion have **not** been independently inspected. Current WHO Country Office operations, a land arrangement and built office premises are separate propositions. Created `data/who_office_premises_agreements_2026.csv`, row `TD-WHO-PREMISES-001`, source `TD-SRC-275`; no April survey or physically verified host count added.

**Research files changed:** `PROVENANCE.csv` (+2 dated first-party URLs, **275** unique source URLs), two new CSVs above (+1 each), `validate.mjs` (+explicit source/date/uncertainty assertions and updated counts). All four source/validator file readbacks confirmed from GitHub and `compare_commits(144e4cdc...e4176d2b)` returned 5 commits/4 Team D paths, behind 0.

## State and caveats after Batch 41

| Distinct metric | Verified | Unknown or unaudited |
|---|---:|---|
| Geographic seed/status rows | 249/249 | Geographic presence does not determine WHO membership |
| WHO current **administrative** regional assignments (all six offices represented) | **205/249 = 82.3%** | **44 unknown**, do not infer a regional assignment from surveillance/service, territory parent or WHO dashboard emergency classifications |
| Direct affirmative **April 2026 WHO office-host** survey join to M49 | **105/249 = 42.2%** | **144 without equivalent affirmative April evidence**, not 144 absent offices |
| Retained **September 2024** WHO office survey replies | **46** | Not new April 2026 attestations |
| Separate **January 2021–December 2022** office/service inventory | **228** | Not proof of present facilities |
| EMA NCA identity candidates with scoped official remit descriptions | **34/34**, 71 observations | Only source-described roles, no fully audited national delegation |
| Current amended national statute/delegation review **and** exact Team A ID join | **0/34** | **34** comprehensive audits/joins remain |
| Network graph and seven-condition institutional references | **47 nodes/617 typed dated edges; 20 condition references across 7 keys** | Not patient advice, law or claim approval |
| First-party provenance URLs | **275** | URL count not a coverage or scientific quality percentage |

**Do not collapse these into a single acceptance percentage.** Original structural/seed/graph thresholds are supported, but complete Team D legal/source, territory assignments, national/local programme status, clinical and A/B/C joins are not.

## Validation and readback

- At exact research SHA `e4176d2b9d1cc8c22501a3b703e32f161c790d59`: checked-in **full** `validate.mjs` structural assertions **PASS: 12,498 assertions across 43 GitHub-derived CSV/provenance dependencies**, using read-only V8 JavaScript shim with 28 complete source-file PR addition patches and 15 direct branch files. Final PASS follows Batch 41 checks. **Not native `node` invocation, Actions run, independent source facsimile authentication, full legal opinion, scientific/clinical signoff or maintainer approval.**
- GitHub compare: prior `144e4cdc6a257a5c4fc70ebdba5ca2decc9c6be7` → `e4176d2b9d1cc8c22501a3b703e32f161c790d59`: **ahead 5, behind 0**, exactly `PROVENANCE.csv`, `validate.mjs`, and the two new Team D tables. GitHub readback confirmed all four paths (data, source and validator).
- Check updated documentation readbacks, newest branch SHA, full since-start changed paths and final PR draft status after saving this standalone checkpoint. Do not assume this documentation commit SHA equals the research SHA.

## Priority unanswered source/legal work and conflicts

1. Resolve the **44** direct-current WHO administrative-region unknowns individually using explicit organization-owned assignment evidence: do not use WHO emergency/surveillance tabulations, inferred parent-country affiliations, PAHO *service* coverage, stale Indonesia SEARO or historical MCO listings. Current Indonesia WPRO assignment effective 23 May 2025; Algeria's WHO AFRO versus UN Northern Africa remain explicit; Liechtenstein WHO Europe membership nuance and 2026 US governance unresolved.
2. Investigate the **144** areas without April-2026 affirmative host survey and distinguish **46** old survey replies, **228** earlier historical records, country offices, MCO service, liaison/focal points and physical buildings. Reported South Sudan future headquarters land allocation is not the new permanent building's occupancy proof.
3. Independently audit **34/34** complete amended medicine laws, delegations, effective dates, authorization decision-makers, national vs Commission competences and exact Team A IDs. Current **71** national regulator remit statements are source-scoped; Malta official grant descriptions conflict. No national law/clinical approval is inferred.
4. Seek original signed network instruments, country memberships and local guidelines: PAHO eastern Caribbean **13/14** and Boisson January-vs-February 2021 role commencement; WHO/Europe SCI North Macedonia accession original/date; Africa CDC APPM **eight** signed (only Egypt named), **15** expressions of intent and **55** targets; IDF NAC **22/23**, AOECS **43+1+3 vs 41+6**, HI/Codex role/formal entry, HEARTS **29** first-version standards vs **35** commitments, ASEAN policy vs signed implementation, local guideline and Team B/C joins. Chad–Central African Republic pooling remains a **discussion objective only**, not an executed procurement or contract. Angola–Namibia synchronisation is a WHO news-reported operational event, not an audited treaty.
5. Maintain all dates, counterparty status, source conflicts, and original human scientific/legal/clinical review requirements. No website or other-team edits.

## Independent visual status

- WHO regional administrative assignments: `████████████████░░░░` **205/249; 44 unknown**
- April 2026 affirmative WHO office hosts: `████████░░░░░░░░░░░░` **105/249; 144 not equally attested**
- EMA official source-scoped agency roles: `████████████████████` **34/34; not legal audit**
- Complete national statutes/delegations & Team A joins: `░░░░░░░░░░░░░░░░░░░░` **0/34; 34 remaining**

## Exact reusable continuation prompt

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`, including its latest checkpoint and original acceptance criteria.

Verify live GitHub state and continue autonomously. Prioritize unresolved WHO assignments, office evidence, regulator authority, and international network relationships. Preserve all historical-versus-current distinctions, source conflicts, existing research, and scope restrictions. Commit, validate, and verify readbacks regularly. Modify only Team D's research directory. Do not modify the public website, main, or other teams; do not merge or mark the PR ready.

If unfinished, save a complete standalone GitHub checkpoint. End with a concise status, this same reusable continuation prompt, and updated visual progress bars for WHO regional assignments, verified office-host evidence, and remaining research gaps. Do not equate structural validation with legal or clinical approval.
```
