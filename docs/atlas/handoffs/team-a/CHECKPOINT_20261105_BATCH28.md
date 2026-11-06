# Team A — Batch28 complete standalone GitHub recovery (2026-11-05; research-only DRAFT)

## Repository, exact commits, restrictions
- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- Existing open **DRAFT** PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68 . **DO NOT MERGE, CLOSE OR MARK READY.**
- Working branch: `research/atlas-team-a-20261104` (do not create a replacement).
- Starting live PR HEAD immediately before Batch28: `118d5e8922fcf304ce7e6d8aba192d49dc003e13`.
- **Exact immutable audited Batch28 DATA SHA**: [`a09586a810923bbd5198e824abfc7b055f893153`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/a09586a810923bbd5198e824abfc7b055f893153).
- Previous Batch27 immutable DATA SHA: `2cff26c5d211fa45b3dfd8711838b8005825328c`; [full Batch27](CHECKPOINT_20261105_BATCH27.md), original [CONTINUE](CONTINUE.md). This checkpoint and later status commits do **NOT** change the immutable DATA SHA. Re-read live head before new writes.
- **ONLY `docs/atlas/handoffs/team-a/`** may be edited. No main, website, clinical/calculator/ancestry data, other teams, private patient/genomic data or copyrighted full texts. No merge or patient-facing use.
- Original acceptance contract on `research/atlas-five-team-handoff-prompts-2026-11-04`: `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md`; official master `M49_OFFICIAL_SNAPSHOT_20261105.csv` from https://unstats.un.org/unsd/methodology/m49/overview . Team A owns government/statutory national/territorial bodies, not Team B societies, Team C journals or Team D networks.

## Exact immutable Batch28 data state — independently fetched/checked
| Metric | Count |
|---|---:|
| Dated official UN M49 geographic country/area rows | **248/248** |
| Principal governmental health-authority **identities located** | **177/248** |
| Principal records explicitly `UNKNOWN_REVIEW_NEEDED` | **71/248** |
| Distinct governmental health-body records | **242** |
| Existing source-limited within-area institutional links | **45** |
| Dated source/provenance entries (positive, partial, negative, historical) | **420** |
| Synchronized area coverage rows | **248** |
| Unsupported inferred cross-area `parent_country_m49` assignments | **0** |

Six new principal authorities: `516` Namibia `gov-516-001` Ministry of Health and Social Services; `548` Vanuatu `gov-548-001` Ministry of Health; `583` Federated States of Micronesia `gov-583-001` Department of Health and Social Affairs; `584` Marshall Islands `gov-584-001` Ministry of Health and Human Services; `585` Palau `gov-585-001` Ministry of Health and Human Services; `591` Panamá `gov-591-001` Ministerio de Salud. **Identities only**, no certification of present comprehensive enacted mandate.

Four separate additional government units, not automatically independent legal entities: `gov-548-002` Vanuatu Surveillance, Research and Emergency Response Unit; `gov-548-003` Vanuatu Health Research Ethics Committee; `gov-585-002` Palau Bureau of Public Health; `gov-585-003` Palau Health Preparedness Policy and Research Office. **No new institutional edges**: even official co-listing or ministry affiliation does not replace an enacted organizational instrument. No cross-border parent M49 guessed.

### Batch28 original source ledger (each independently saved as detailed PROVENANCE.csv row)
Every source below was checked or its access failure explicitly logged **2026-11-05**, and is *not* a claim of current enacted law.

| M49 | Source ID | Issuer | Language | URL | Precise scope/qualification |
|---|---|---|---|---|---|
| 516 | `NAM-MHSS-HOME-B28` | Namibia Ministry of Health and Social Services | en | [source](https://nrpa.gov.na/web/mhss/home) | official ministry identity, not enacted mandate |
| 516 | `NAM-MHSS-LEGAL-B28` | Namibia MHSS legal services index | en | [source](https://wch.gov.na/web/mhss/legislation/-/document_library/wzzr/view_file/7588157) | search indexed; direct URL failed; same ministry issuer, NO signed legal instrument |
| 548 | `VUT-MOH-HOME-B28` | Vanuatu Ministry of Health | en | [source](https://moh.gov.vu/index.php) | ministry and decentralized vision; homepage 2025 news historical |
| 548 | `VUT-GOV-DCDT-B28` | Vanuatu Department of Communications and Digital Transformation | en | [source](https://dcdt.gov.vu/) | independent government-hosted Health ministry link, not statute |
| 548 | `VUT-MOH-SURV-B28` | Vanuatu Ministry of Health surveillance unit | en | [source](https://moh.gov.vu/index.php/public-health/surveillance-unit) | says government approved in 2010; original approval unread |
| 548 | `VUT-HREC-PORTAL-B28` | Vanuatu government health research ethics portal | en | [source](https://healthresearch.gov.vu/) | HREC and review guidelines, NOT enacted exclusive competence; other committees may apply |
| 583 | `FSM-DHSA-NEWS-B28` | FSM Department of Health and Social Affairs | en | [source](https://hsa.gov.fm/) | 2 Nov 2026 current departmental own-source news, not federal/state legal allocation |
| 583 | `FSM-OPA-PHIG-B28` | FSM Office of Personnel Administration | en | [source](https://personnel.gov.fm/public-health-infrastructure-grant-phig-financial-specialist-fsm-department-of-health-and-social-affairs-pohnpei-open-until-filled/) | separate July 2026 government agency identity and PHIG staff, not act |
| 583 | `FSM-CONGRESS-RES-B28` | FSM Congress | en | [source](https://www.cfsm.gov.fm/24th-resolutions/) | September 2026 grant resolution index references DHSA; full state mandates not proven |
| 584 | `RMI-PRES-REASSIGN-B28` | Republic of Marshall Islands Office of President and Cabinet | en;mh | [source](https://rmigov.com/?p=2351) | 12 May 2026 presidential announcement for 14 May ministerial assignment, not health statute |
| 584 | `RMI-CIA-ROSTER-B28` | US Central Intelligence Agency | en | [source](https://www.cia.gov/resources/world-leaders/foreign-governments/marshall-islands/) | US government September 2026 cabinet corroboration, NOT domestic enacted authority |
| 585 | `PLW-MHHS-DIR-B28` | Republic of Palau Government | en | [source](https://www.palaugov.pw/executive-branch/ministries/health/) | MHHS identity; website has shorter postal Ministry of Health label; not enacted regulation |
| 585 | `PLW-BPH-B28` | Republic of Palau Government | en | [source](https://www.palaugov.pw/executive-branch/ministries/health/bureau-of-public-health/) | Bureau of Public Health role and law-enforcement claim on own portal, particular enabling law unread |
| 585 | `PLW-HPPR-B28` | Republic of Palau Government | en | [source](https://www.palaugov.pw/executive-branch/ministries/health/health-preparedness-policy-research-office/) | MHHS internal office housing IRB and preparedness, not legally autonomous |
| 591 | `PAN-MINSA-SEP-B28` | Panamá Ministerio de Salud | es | [source](https://www.minsa.gob.pa/noticia/ministro-de-salud-encargado-sostiene-reunion-estrategica-con-directores-regionales-para) | 14 Sep 2026 acting minister and regional directors; not full legal competencies |
| 591 | `PAN-PRES-SEP-B28` | Presidencia de Panamá | es | [source](https://www.presidencia.gob.pa/publicacion/mulino-lanza-plataformas-para-transformacion-y-modernizacion-digital-del-sistema-de-salud-panameno) | 10 Sep 2026 independent presidency Ministry identification, not act |
| 591 | `PAN-MINSA-COMARCA-B28` | Panamá Ministerio de Salud | es | [source](https://minsa.gob.pa/noticia/minsa-fortalece-coordinacion-de-acciones-de-salud-en-veraguas-y-la-comarca-ngabe-bugle) | 26 Sep 2026 Indigenous Affairs / Ngäbe Buglé coordination not exclusive comarca legal power |

### Legal/territorial caveats requiring additional work
- **Namibia:** official portal gives ministry identity and regional directorates; another ministry legal index is **same issuer**, search-indexed but direct-open failed/timed out. Original current statutes, regulator status and regional legal allocation not inspected.
- **Vanuatu:** own MoH mission says decentralized system, but visible homepage news remains 2025. Government DCDT provides separate domain link, *not* enacted legal corroboration. Surveillance Unit claims government approval in 2010 **unread**. HREC health-research portal guidelines do not prove exclusive legal regulatory status and explicitly recognize other committee approvals. Island/province powers pending.
- **Federated States of Micronesia:** Nov 2 2026 own DHSA site, July 7 2026 separately issuing national Personnel Administration, and Sep 2026 FSM Congressional grant-resolution index corroborate present name. None alone proves Kosrae, Pohnpei, Chuuk and Yap state statutory divisions. Congressional **resolutions index** is not independent original state health enabling law.
- **Marshall Islands:** President's May 12 2026 bilingual Marshallese/English portfolio announcement says allocation effective May 14 (cites Constitution Art V 6(3) without original law read); separate September CIA cabinet list is **foreign governmental roster, NOT domestic legal competence**. Outer island service and original enabling instruments pending.
- **Palau:** executive government directory lists ministry, Bureau of Public Health and Health Preparedness Policy and Research Office. Bureau claims health-law enforcement but exact enacted statutory basis not inspected; policy office includes institutional review board and preparedness, **not autonomous legal status**. All three sourced from **same Palau government publisher**; independent enacted law checks and state powers pending.
- **Panamá:** Sept 14 Ministry and independent Sept 10 Presidency identify MINSA. Ministry Sept 26 announcement documents Indigenous Health Affairs coordination in Veraguas/Ngäbe Buglé, **not** exclusive jurisdiction or full legal division with Caja de Seguro Social/Indigenous comarcas. Current enacted acts and regions pending.

### Structural QA protocol / what was NOT tested
At immutable DATA SHA `a09586a810923bbd5198e824abfc7b055f893153` independently re-fetched six CSVs: `data/countries.csv`, `data/government_health_bodies.csv`, `data/authority_relationships.csv`, `data/country_coverage.csv`, `PROVENANCE.csv`, `M49_OFFICIAL_SNAPSHOT_20261105.csv`. Quote-aware parser checked schema width and unique IDs; row-by-row official M49 name, ISO2, ISO3, region and subregion; expected 248 rows with Africa 60, Americas 57, Asia 50, Europe 51, Oceania 29, Antarctica no assigned region; 177 identity/body same-area refs and 71 explicit unknown; 242 body HTTPS/issuer/language/date fields, 45 existing valid links, 420 unique source checks, 248 synchronized coverage; empty cross-M49 parent fields; no 158, 535 still unknown and 016 parent blank. **PASS STRUCTURAL ONLY.**

Compared starting documentation HEAD `118d5e8922fcf304ce7e6d8aba192d49dc003e13` through exact DATA SHA: exactly **four** modified Team A CSVs: `data/countries.csv`, `data/government_health_bodies.csv`, `data/country_coverage.csv`, `PROVENANCE.csv`. Five sequential GitHub commit operations (four data CSVs, then Namibia access-caveat correction; GitHub commit chain spans `62bf4e0847883e3c7296a9227bff393679015800` to `a09586a810923bbd5198e824abfc7b055f893153`). No official master, relationship CSV, validator or other-team/app changes.

**Repository Python `python docs/atlas/handoffs/team-a/validate.py`: NOT RUN.** Container's `git ls-remote` failed `Could not resolve host: github.com`, so full checkout unavailable. Independent JS structural audit is **not** a Python test, nor a legal/clinical certification. This audit did not establish current enacted mandates, full subnational coverage, original signed gazette versions, independence of issuing government offices in every country, effectiveness of territorial control, URL uptime or clinical validity. Retain all Batch27 and older negative/historical/draft source caveats.

## Complete 71-area unresolved principal identity queue (ascending official M49)

010 Antarctica; 074 Bouvet Island; 086 British Indian Ocean Territory; 104 Myanmar; 112 Belarus; 192 Cuba; 226 Equatorial Guinea; 239 South Georgia and the South Sandwich Islands; 260 French Southern Territories; 275 State of Palestine; 312 Guadeloupe; 334 Heard Island and McDonald Islands; 336 Holy See; 364 Iran (Islamic Republic of); 368 Iraq; 384 Côte d’Ivoire; 408 Democratic People's Republic of Korea; 434 Libya; 446 China, Macao Special Administrative Region; 466 Mali; 474 Martinique; 478 Mauritania; 492 Monaco; 520 Naoero; 528 Netherlands (Kingdom of the); 531 Curaçao; 533 Aruba; 534 Sint Maarten (Dutch part); 535 Bonaire, Sint Eustatius and Saba; 540 New Caledonia; 558 Nicaragua; 562 Niger; 570 Niue; 574 Norfolk Island; 580 Northern Mariana Islands; 581 United States Minor Outlying Islands; 586 Pakistan; 598 Papua New Guinea; 600 Paraguay; 612 Pitcairn; 624 Guinea-Bissau; 638 Réunion; 643 Russian Federation; 652 Saint Barthélemy; 654 Saint Helena; 659 Saint Kitts and Nevis; 660 Anguilla; 663 Saint Martin (French Part); 666 Saint Pierre and Miquelon; 670 Saint Vincent and the Grenadines; 678 Sao Tome and Principe; 706 Somalia; 729 Sudan; 732 Western Sahara; 744 Svalbard and Jan Mayen Islands; 760 Syrian Arab Republic; 772 Tokelau; 788 Tunisia; 795 Turkmenistan; 796 Turks and Caicos Islands; 798 Tuvalu; 831 Guernsey; 832 Jersey; 833 Isle of Man; 850 United States Virgin Islands; 854 Burkina Faso; 860 Uzbekistan; 862 Venezuela (Bolivarian Republic of); 876 Wallis and Futuna Islands; 882 Samoa; 887 Yemen.

`UNKNOWN_REVIEW_NEEDED` means unverified **NOT** nonexistent; no populated-versus-uninhabited, delegated, sovereign, disputed or special area may be assigned a parent without precise independent current legal/government proof. Excluded code 158 stays excluded.

## Remaining original acceptance criteria and next autonomous work
1. Re-read this file, `CONTINUE.md`, prior Batch27/earlier checkpoints and original `TEAM_A_GOVERNMENT_CENSUS.md`; verify live PR #68 **OPEN DRAFT**, head SHA, last data SHA and absence of concurrent writes before edit.
2. All 248 geographic rows present, but **71 principals still unknown** and **177 identified principals NOT verified as complete enacted mandates**. Prioritize 010 Antarctica, 074 Bouvet, 086 BIOT, 104 Myanmar conflicting administrations, 112 Belarus, 192 Cuba, 226 Equatorial Guinea, 239 South Georgia, 260 TAAF, 275 Palestine, 334 Heard, 336 Holy See, 446 Macao, 535 Caribbean Netherlands, 581 minor US islands, 612 Pitcairn, 732 Western Sahara, 744 Svalbard, 772 Tokelau and other ascending unknowns; also attempt tractable 586 Pakistan, 598 PNG, 600 Paraguay and 882 Samoa where official identity may be available.
3. Expand legal proof for existing ministries especially complex/renamed/devolved cases with **two truly independent official government/statutory issuers**, current enacted authenticated primary law and dates. Distinguish draft/consultation, gazette index, cabinet news, self-description, foreign/WHO/archived material from enacted jurisdiction. Delineate federal, state, province, municipalities, Indigenous/tribal territories, regulators, institutes, public research councils and disease surveillance. **Do not invent organizational/parent M49 edges.**
4. Preserve exact historical limitations including Batch27 Madagascar domain alias timeout, Malawi legacy health name, Moldova 2026 draft and Transnistria control, Montenegro institute project-only link, Mozambique 2025 historic cabinet and unsigned 2026 regulation news; Batch26 Kyrgyz legal versions, Laos outdated items, Lesotho unread legal notices, Liberia cabinet/ministry naming, Liechtenstein cross-border; old Nepal renamed Gazette, Bosnia cantons/Brčko, India state/UT, Qatar Nov 2026 transfer only starting, Gabon/Hungary draft statutes and all prior earlier sources.
5. Commit small source-backed batches to **existing branch** only. Re-fetch exact immutable DATA SHA and structurally audit all six CSVs after edits; run actual Python validator if full checkout becomes possible; compare changed paths to Team A scope. Update `STATUS.md`, `README.md`, `GAPS.md`, `QA_REPORT.md`, `CHANGELOG.md`, `CONTINUE.md`, PR body and complete new checkpoint. Keep PR **OPEN DRAFT/UNMERGED** and all public-site/clinical data untouched.

## Identical user continuation prompt

```text
Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.

Read "docs/atlas/handoffs/team-a/CONTINUE.md" on branch "research/atlas-team-a-20261104".

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
