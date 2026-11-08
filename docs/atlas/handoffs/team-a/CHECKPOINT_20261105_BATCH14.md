# Research Team A — full standalone Batch 14 continuation checkpoint (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Draft PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68 — MUST REMAIN DRAFT AND UNMERGED  
**Branch:** `research/atlas-team-a-20261104`  
**Exact independently audited data commit:** `b9603d7ced8ea7c3b84595ad3cbe690dbca08fb4`  
**Current documentation/checkpoint commit:** the GitHub branch HEAD commit containing this file, later than the data commit; always re-fetch current PR HEAD before writing.  
**Original acceptance contract:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`.  
**Dated official UN master:** `docs/atlas/handoffs/team-a/M49_OFFICIAL_SNAPSHOT_20261105.csv`; https://unstats.un.org/unsd/methodology/m49/overview/ checked 2026-11-05.

## Research purpose and non-negotiable scope

Build a complete source-auditable directory of government or statutory entities competent for health policy, prevention, infectious-disease surveillance, health regulation, clinical care and national or devolved public-health systems for *every* UN M49 country or area. This is research staging; **not** ancestry-derived advice, genetic risk inference, a validated medical device, or professional clinical recommendation.

For each geographic area distinguish the government ministry/portfolio, healthcare delivery agency, regulatory/public-health institute, devolved or overseas government services, original native-language name, verified legal source and independently qualified jurisdiction. No WHO country office may substitute for a domestic ministry. M49 is **geography**, not a sovereignty or ancestry indicator. No laws proposed or discussed in 2026 should be treated as enacted without the enacted legal instrument. For disputed/delegated/renamed authorities seek **two independent official legal or governmental checks** and distinguish independent issuers from two webpages at one issuer. Do not invent parent-area M49 delegations. Record date, issuer, language, precise URL, scope, effective/verification state and unresolved source caveats.

**Exclusive editable scope:** `docs/atlas/handoffs/team-a/`. No `main`, website, calculator, patient-facing/clinical/ancestry/genomic content, independent clinical societies (Team B), journals (Team C), international networks (Team D), private data. Do not mark PR ready, merge or close it.

## Exact Batch 14 data state

| Measure | Audited current value |
|---|---:|
| M49 geographic skeleton rows individually matching official dated master | **248/248** |
| Principal governmental health **identities located** (not complete legal remit) | **105/248** |
| Explicit unknown `UNKNOWN_REVIEW_NEEDED` | **143/248** |
| Separate governmental body records | **153** |
| Within-area organizational policy/stewardship relationships | **38** |
| Source provenance rows including partial/legal/conflict checks | **215** |
| Synchronized area coverage ledger rows | **248** |
| Unproven cross-area parent M49 allocations | **0** |

Data SHA `b9603d7ced8ea7c3b84595ad3cbe690dbca08fb4` changed **only**:
- `data/countries.csv`
- `data/government_health_bodies.csv`
- `data/authority_relationships.csv`
- `data/country_coverage.csv`
- `PROVENANCE.csv`

### Five newly located principals, six bodies, one relationship, eleven source checks

1. **Mayotte M49 175**: `gov-175-001` *Agence régionale de santé de Mayotte*, French autonomous public regional health agency active since **1 Jan 2020**, not a locally independent ministry. **Primary source:** French prefecture https://www.mayotte.gouv.fr/Services-de-l-Etat/Agence-Regionale-de-Sante-ARS . **Separate French administration check:** https://lannuaire.service-public.gouv.fr/gouvernement/80475047-cee9-4fb0-a37f-56c03e85dc03 . Confirms ARS national ministerial tutelle. Not full code de la santé publique legal audit, county/communal allocations, or cross-M49 250 delegation. Provenance `MAY-PREF-20261105-B14`, `MAY-ANNUAIRE-20261105-B14`.

2. **Åland Islands M49 248**: `gov-248-001` **Ålands landskapsregering – social- och miljöavdelningen, hälso- och sjukvårdsbyrån**, the self-government health policy/planning bureau; separately `gov-248-002` **Ålands hälso- och sjukvård (ÅHS)** for public health-care service. **Parliament steering document** https://www.lagtinget.ax/dokument/styrning-halso-och-sjukvarden-61143 ; **separate 2026 parliamentary strategy** https://www.lagtinget.ax/dokument/halso-och-sjukvardsstrategi-aland-61137 . These describe the self-government legal framework (1991:71 §18(12); landskapslag 2011:114), yet are **from the same parliament** and are NOT two independent issuing authorities. The strategy adopted 29 October 2026 proposes *future* organizational revisions; proposals are not enacted laws. New edge `gov-248-001→gov-248-002` describes policy steering, not legally proven bureau ownership. Finnish reserved and infectious-disease responsibilities remain to be mapped. Provenance `ALA-LAGTING-STEER-20261105-B14`, `ALA-LAGTING-STRATEGY-20261105-B14`.

3. **French Guiana M49 254**: `gov-254-001` **Agence régionale de santé de Guyane** as French state regional public-health actor, *distinct* from Collectivité territoriale de Guyane (CTG). **French prefecture 2026 program** https://www.guyane.gouv.fr/Publications/Appels-a-Projets/2026/Subvention-aux-associations-de-l-education-de-l-environnement-et-de-la-sante-environnement ; **separate prefecture joint competence notice** https://www.guyane.gouv.fr/Publications/Appels-a-Projets/Appel-a-projets-Politique-de-la-ville/Designation-de-personne-qualifiee-pour-le-territoire-de-la-Guyane-sur-le-secteur-medico-social . The latter explicitly distinguishes exclusive/joint medico-social authorization, not all health-law powers. Both from **same prefectural issuer**, so do not claim two independent legal sources. No invented legal parent link to M49 250. Provenance `GUY-PREF-ENV-20261105-B14`, `GUY-PREF-CTG-20261105-B14`.

4. **French Polynesia M49 258**: `gov-258-001` **Direction de la santé de Polynésie française** (territorial government directorate), not assumed to be full current health ministry. **Directorate 2026 active site** https://www.service-public.pf/dsp/ ; **own mandate/2021 order reference** https://www.service-public.pf/dsp/nosmissions/ ; **historic Jan 2023 public service directory** https://www.service-public.pf/voir/annuaire/dsp-direction-de-la-sante-publique/ . 2021 arrêté 1771/CM organizational text is *referenced* rather than independently consolidated/read; 1992/2004 regime also requires review. Territorial health minister current name, ARASS legal split, France reserved powers and cross-M49 250 parent remain unresolved. All three are within territorial government issuer. Provenance `PF-DSP-2026-20261105-B14`, `PF-DSP-MISSION-20261105-B14`, `PF-DSP-DIR-20261105-B14`.

5. **Luxembourg M49 442**: `gov-442-001` **Ministère de la Santé et de la Sécurité sociale** (reviewer English: Ministry of Health and Social Security), current 2026 public health and social security policy ministry. **Ministry 2026 portal:** https://m3s.gouvernement.lu/fr.html ; **21 Oct 2026 separate central government communiqué** https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2026/10-octobre/21-comite-quadripartite.html . Mandate subject to internal government regulation, which was *not* read; separate Direction de la santé and social security regulators remain to map. Provenance `LUX-MIN-20261105-B14`, `LUX-GOV-OCT-20261105-B14`.

All eleven sources recorded as French (fr) or Swedish (sv), with source issuer, 2026-11-05 check, precise URL, scope, state and caveat. No ancestry, diagnosis or private patient information.

## Independent immutable commit QA, exact scope

Independently re-fetched all five normalized CSVs and the dated official M49 master at `b9603d7ced8ea7c3b84595ad3cbe690dbca08fb4` by live GitHub connector after the commit. Quote-aware field parser: **14/14 structural controls PASS**. 248 unique M49 records and full code/ISO2/ISO3/UN name/region/subregion per-row match; 105/143 principal statuses; 153 unique bodies correctly mapped; 38 edges with existing endpoints and HTTPS sources; 215 distinct provenance IDs with required issuer/language/date/state/HTTPS fields; 248 synchronized ledger; 32 complex jurisdiction existence sentinels; withheld candidate/contested/nonresident areas stay unknown; region totals: Africa 60, Americas 57, Asia 50, Europe 51, Oceania 29, unassigned Antarctica 1; no parent M49 inference.

An initial audit incorrectly treated existing `LOCAL_NAMES_PENDING` (plural) as disallowed instead of accepting both `LOCAL_NAMES_PENDING` and `LOCAL_NAME_PENDING` like the repository's actual validator. The corrected complete immutable readback **passed all 14 controls**; no dataset rewrite was necessary.

**Python validator `python docs/atlas/handoffs/team-a/validate.py` WAS NOT RUN on Batch 14:** local host `github.com` DNS resolution failed, so no full local checkout; prior older-batch Python pass MUST NOT be transferred. Structural integrity does NOT mean live URL accessibility of every historical source, exhaustive legal powers, independently enacted laws or territorial effective control.

## Remaining work / next steps

**143 unknown principal governmental identities** (not "no ministry") still need official source discovery. Prioritize Bouvet 074, Myanmar 104 competing/effective jurisdiction, Belarus 112, Cuba 192, Equatorial Guinea 226 ministry conflict/INSESO proposal, French Southern Territories 260 and Heard/McDonald 334 no permanent populations, Caribbean Netherlands 535 special legal status, then the remaining ascending M49. Do NOT promote unverified search excerpts. Continue Bosnia cantons/Brčko, national regulators/research councils, devolved state/provincial powers, health surveillance, original scripts/English translation flags, separate agency records and actual enactment/effective dates. Two truly **independent** government/legislative checks are incomplete for many renamed, devolved or overseas entities.

**Preserve inherited caveats:** Gabon and Hungary 2026 *draft* proposals not enacted statutes; current Guinea ministry site versus undated presidency minister roster; Comoros portal example/test copy vs actual founding decree; Eritrea government English name without local original; Faroe reorganization vs draft pharmacy transfer, Danish division; Maldives April 2026 presidential ministry rename and hospital reassignment; 2025-26 Australian IOT administration/WA SDA division; Gibraltar portfolio vs GHA and Public Health, UK reserved powers; Georgia restricted consolidated decree/effective control; Chad old 403; Ethiopia Amharic/regional authorities; India state and UT legal responsibility; DRC/Cayman/other restructuring. All old `PROVENANCE.csv`, `GAPS.md` and historical checkpoints remain intact.

**Restart procedure:** verify live DRAFT PR #68 branch HEAD and latest `CONTINUE.md`; read original acceptance, current `GAPS.md`, `QA_REPORT.md`, all six CSVs, `validate.py`; carry out primary-government-source batches; commit only inside Team A directory; independently validate exact immutable SHA and counts; update documents/checkpoint and PR without merging. Use full Python validator in complete executable local checkout when feasible. Next run must emit this **same short continuation prompt unchanged**:

> Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.
>
> Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.
>
> Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.
>
> If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
