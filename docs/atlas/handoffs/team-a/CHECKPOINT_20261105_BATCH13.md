# Team A — standalone research checkpoint, Batch 13 (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
**Open DRAFT PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68
**Research branch:** `research/atlas-team-a-20261104`
**Exact independently audited DATA commit:** `c7049a1293112ae93b91962802d732b5931e7bf2`. This handoff is in a subsequent docs commit; always recheck current PR branch HEAD before writing.
**Original Team A acceptance contract:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`.
**UN official master:** `docs/atlas/handoffs/team-a/M49_OFFICIAL_SNAPSHOT_20261105.csv`, 2026-11-05, https://unstats.un.org/unsd/methodology/m49/overview/ .

## Mission and source contract

Build a government and statutory national/territorial health-authority directory for all UN M49 areas, including contested, devolved, nonsovereign and no-resident areas. Do not mislabel 248 geographic rows as 248 verified ministries. Every identified body must have source URL, issuer, language, dated check, legal/jurisdiction qualifications, original local name when found, translation flag when inferred, and explicit verification state. For major renames and delegated/disputed systems obtain at least two **independent** government/legal checks, preferably enacted statutes. A homepage or a WHO office is not a legal authority certification. Proposed acts and consultations are **not law**. Do NOT invent parent-area M49 ties or conflate political sovereignty with actual effective health competence.

**Only edit files in `docs/atlas/handoffs/team-a/`.** No modifications to `main`, website, calculator, clinical/ancestry/genomic or patient-facing outputs, journals, independent medical societies, international networks, or other teams. Keep the existing PR **DRAFT** and unmerged. Never upload sensitive patient/genomic information.

## Batch 13 counts and exact-SHA checks

| Measure | Result |
|---|---:|
| UN M49 rows exactly reconciled to official name/ISO2/ISO3/region/subregion | **248 / 248** |
| Principal health-authority identities located | **100 / 248** |
| Explicit unknown `UNKNOWN_REVIEW_NEEDED` | **148 / 248** |
| Distinct government body records | **147** |
| Intra-government links | **37** |
| Unique source provenance rows including partial, failed, conflict checks | **204** |
| Synchronized country coverage ledger rows | **248** |
| Cross-area inferred parent-country M49 links | **0** |

**Data commit `c7049a1293112ae93b91962802d732b5931e7bf2`** updated all five normalized data CSVs. Independent second retrieval of the five CSVs and official dated M49 snapshot at this exact commit passed quote-aware per-row geography comparison, status↔body concordance, 147 unique bodies and area membership, all 37 edge references and source states, 204 distinct provenance IDs/date/language/issuer/HTTPS requirements, all 248 coverage records, region counts Africa 60/Americas 57/Asia 50/Europe 51/Oceania 29/Antarctica unassigned 1, and 24 sensitive territory/devolution/no-parent sentinels. **PASS structural only.** The repository's `python docs/atlas/handoffs/team-a/validate.py` **WAS NOT EXECUTED** against Batch 13 (local Git checkout failed DNS); do not claim a Python pass. Neither full current statutory competence nor independent two-source completion is certified.

## Batch 13 research — 5 new principal identities; 9 body records, 4 links, 15 source rows

**162 Christmas Island:** principal `gov-162-001` = Australian Government Department of Infrastructure, Transport, Regional Development, Communications, Sport and the Arts as administrator of territory state-type health services; distinct `gov-162-002` = IOTHS Christmas Island health delivery. Official department overview https://www.infrastructure.gov.au/territories-regions/territories/indian-ocean-territories-christmas-island-and-cocos-keeling-islands ; detailed health services and WA Department of Health SDA https://www.infrastructure.gov.au/territories-regions-cities/territories/indian-ocean-territories/health-service . **Independent governmental check:** Australian National Audit Office's December 2025 report https://www.anao.gov.au/work/performance-audit/management-of-service-delivery-arrangements-australias-external-territories . ANAO says management was only partly effective. Do NOT create an autonomous island ministry or claim all statutory powers; relevant enacted Commonwealth and WA legal instruments and parent M49 036 link unverified.

**166 Cocos (Keeling) Islands:** `gov-166-001` Australian Commonwealth department territorial administrator, separately represented for the distinct M49 area; `gov-166-002` IOTHS Home Island and West Island clinics. Same three department/ANAO government sources apply. WA service delivery arrangements support limited policy/regulation and specialist advice, not proof WA has ALL island health competence. Enacted health regulatory legal acts, SDA text and cross-area parent M49 036 still unresolved. Do NOT pretend local independent health ministry.

**232 Eritrea:** `gov-232-001` Ministry of Health (English-language identity published by Eritrea Ministry of Information). Government 20 August 2026 speech https://shabait.com/amp/2026/08/20/statement-of-the-ministry-of-health-of-the-state-of-eritrea-at-fourth-regional-ministerial-steering-committee-resco/ ; government report on Ministry branches 13 January 2026 https://shabait.com/2026/01/13/ministry-of-health-branch-in-srs-conducts-activity-assessment-meetings/ . Both from **same issuing Ministry of Information**, NOT two independent statutory checks; no separate Ministry-owned page or verified original Tigrinya name, so `LOCAL_NAME_PENDING` explicit. National mandate and regional branch legal powers still unverified.

**292 Gibraltar:** `gov-292-001` Government of Gibraltar's *Minister for Health, Care and Business portfolio* — NOT a separately proved ministry legal entity. Portfolio https://www.gibraltar.gov.gi/ministers/portfolios lists Gibraltar Health Authority and Public Health Gibraltar; distinct `gov-292-002` GHA https://www.gibraltar.gov.gi/contacts/gha-gibraltar-health-authority-27 with dated March 2026 current activity https://www.gibraltar.gov.gi/press-releases/dr-paul-bosio-begins-as-director-general-of-the-gibraltar-health-authority-1252026-11740 ; distinct `gov-292-003` Department of Public Health https://www.gibraltar.gov.gi/health/public-health . Minister portfolio→GHA/Public Health relationships are sourced **portfolio listings**, not a verified organizational statutory hierarchy. Formal acts, UK reserved roles and cross-area parent M49 826 remain pending.

**324 Guinea:** `gov-324-001` Ministère de la Santé et de l’Hygiène Publique; reviewer English translation *Ministry of Health and Public Hygiene*. Source in French https://sante.gov.gn/mission-et-attributions/ lists health policy, draft legislation, local authority support, licensing and monitoring; current 2026 ministry home https://sante.gov.gn/ identifies institution and names Khaité Sall. Undated Presidency composition https://presidence.gov.gn/composition/ instead names Oumar Diouhé Bah. **Personnel conflict kept unresolved**; no current individual/effective legal decree asserted. Local government division and full signed statute pending.

Four added same-area links: Australian department→IOTHS (each of 162 and 166) and Gibraltar minister portfolio→GHA plus →Public Health. No cross-area parent authority assigned. Previous 138 bodies and 33 links preserved; Batch 13 brings 147/37. All previously logged source limitations are preserved in PROVENANCE and historical checkpoints.

## Unfinished original acceptance, next research priorities

**148 principal identities remain unknown**; high-risk queue 074 Bouvet Island, 104 Myanmar competing institutions/effective control, 112 Belarus current ministry/legal portal, 175 Mayotte disputed and French delegated competence, 192 Cuba ministry direct official website, 226 Equatorial Guinea cabinet conflict and prospective INSESO transfer, 248 Åland, French overseas 254 French Guiana/258 French Polynesia/260 French Southern Territories, and then other unknowns in ascending M49 order. Formerly unknown 162/166/232/292/324 now have identities but NOT full statutory mandate reviews. Audit exact Commonwealth/WA Indian Ocean Territories legal instruments and service delivery agreement; Gibraltar health law and UK responsibilities; Eritrea Tigrinya/local ministry source; Guinea signed dated ministry appointments and current policy decree.

Retain all pre-existing **critical caveats** from previous batches: Comoros portal with template/test copy and September 2026 decree **title-only**; Faroes 2025→2026 health portfolio transition and August pharmacy-transfer **draft**; Lithuania regulator not fully legally audited; Maldives April 2026 rename and November presidential tertiary hospital affiliation not necessarily legal subordination; Malta 2026 government gazette vs stale undated ministry portal; Hungary October **draft** act and exact health portfolio transfer; Gabon October **draft** organizational decree; Georgia consolidated 2026 act inaccessible and territorial control unresolved; Chad historical 403; Ethiopia original Amharic and 2018/2023 acts; India's state/UT duties; Equatorial Guinea conflicting labels; Bosnia cantons and Brčko; WHO offices not domestic ministries. Preserve all earlier direct-source failures rather than overwriting them.

### Recovery and validation protocol

1. Read this `CONTINUE.md` (full current content with historical sections below), newest standalone `CHECKPOINT_20261105_BATCH13.md`, `README.md`, `STATUS.md`, `GAPS.md`, `QA_REPORT.md`, `CHANGELOG.md`, all five normalized CSVs and dated official M49 master; review original Team A criteria on five-team prompt branch. Resolve live PR #68 HEAD, review newer concurrent changes.
2. Perform official government/gazette/legal research in original languages. Log independent government and legislative sources with exact issuer, URL, check date, geographic scope, research outcome including negative access, verification state and specific caveats. Keep unknown unresolved if proof is inadequate. Never infer M49 parent without legal instrument.
3. Commit manageable research-only batches on existing branch and draft PR. Independently re-fetch exact DATA commit for all CSV structural integrity, execute Python `validate.py` in runnable checkout when available, then update all documentation and a standalone new checkpoint with accurate counts and explicit remaining gaps. Keep previous data/history unchanged. Do not merge PR or edit website.
4. Return PR URL, exact branch HEAD SHA, data SHA, coverage and outstanding limitations, and this short continuation prompt exactly.

## Exact short continuation prompt for next run

Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.

Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
