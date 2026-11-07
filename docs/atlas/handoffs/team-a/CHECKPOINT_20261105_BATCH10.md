# Team A — standalone Batch 10 verified GitHub checkpoint (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68 (**DRAFT**, never merge automatically)  
**Branch:** `research/atlas-team-a-20261104`  
**Latest fully read-back verified data commit:** `6a8679492553d3d24cba790608fbb3d017b7d854`  
**Updated documentation commit:** this commit; obtain exact SHA from branch HEAD.  
**Original acceptance criteria:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`.

## Current exact scope and counts

248 UN M49 country-or-area records, 248 official per-row comparisons and 248 aligned coverage rows, including territories. **85 principal government authorities identified and 163 unknown.** 126 governmental body records, 31 documented internal governmental organizational edges and 167 evidence-provenance records (including failed/candidate/corroboration checks). This is **governmental directory research staging**, not complete statutory legal competence validation, not ancestry guidance and not a medical device.

## Incremental Batch 10 records

- `gov-148-001` Chad: Ministère de la Santé publique et de la Prévention — 2026 direct ministry page corroborated independently by Primature. Prior 403 kept historically; provincial statutory allocation not settled.
- `gov-231-001` Ethiopia: Ministry of Health — official missions citing Proclamation 1097/2018, with EPHI corroboration. Official Amharic title and later legal amendments need further verification.
- `gov-266-001` Gabon: Ministère de la Santé — ministry 2026 portal and 2026 Presidency council report. Presidency's organizational decree is explicitly **proposed**, not enacted.
- `gov-268-001` Georgia: საქართველოს ოკუპირებული ტერიტორიებიდან დევნილთა, შრომის, ჯანმრთელობისა და სოციალური დაცვის სამინისტრო — 2018 original government resolution via Legislative Herald and June 2026 ministerial gazette. Consolidated text currently restricted; ministry site 403; territory disputes are not resolved by ministry identity.
- `gov-356-001` India: Ministry of Health and Family Welfare — official integrated government directory and own Directorate General of Health Services corroboration. States/UT constitutional roles not settled.
- `gov-231-002` Ethiopian Public Health Institute; `gov-356-002` Indian Department of Health and Family Welfare; `gov-356-003` Indian Directorate General of Health Services. Three source-linked within-government edges. All site/source URLs, issuer language, date, review state and limits are in the normalized files.

## Files & independently verified QA

`data/countries.csv`, `data/country_coverage.csv`, `data/government_health_bodies.csv`, `data/authority_relationships.csv`, `PROVENANCE.csv`. Official comparison `M49_OFFICIAL_SNAPSHOT_20261105.csv`; script `validate.py`; audits `QA_REPORT.md`; queue `GAPS.md`; live resume `CONTINUE.md`.

Independently downloaded all six CSV files **from the exact data commit SHA** and quote-aware checked: 248 official M49 equal on keys/ISO/name/regions; 85 identified/163 unknown status; 126 body unique IDs; 31 valid edges; 167 provenance IDs with required fields; 248 coverage rows with matching status; 20 special territory and no-spurious-parent boundary cases. **PASS structural.** The repository Python validator **was not freshly executed** in this sandbox (no outbound checkout): run on a full checkout and record results. These tests do not prove statutes' currency or legal mandate coverage.

## Next steps and restrictions

Prioritize 074 Bouvet; 104 Myanmar; 112 Belarus; 162 Christmas; 166 Cocos; 174 Comoros; 175 Mayotte; 192 Cuba; 226 Equatorial Guinea; other unresolved areas in M49 order. Research WHO/Government sources as corroboration, with WHO country offices *not* ministries. Fully map state and subnational competence (Bosnia cantons/Brčko, Indian states, Ethiopian regions), health data agencies, regulatory authorities and current law. Disputed/delegated/renamed cases need two independent government/legal checks; no cross-area parent M49 links without legal proof. Do not modify main, live public site, clinical formulas, clinical guidance or other research teams; do not merge or mark draft PR ready. Commit on this branch and maintain every dataset/doc handoff.

## Same next-run continuation prompt

> Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.
>
> Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.
>
> Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.
>
> If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
