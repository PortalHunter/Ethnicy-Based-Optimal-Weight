# Research Team A — COMPLETE STANDALONE Batch 16 checkpoint (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**DRAFT PR #68 — NEVER MERGE OR MARK READY:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68  
**Branch:** `research/atlas-team-a-20261104`  
**Batch 16 exact independently audited DATA SHA:** `fa345c550e47213c780557038a881fb8e612b75d`  
**Batch 15 DATA SHA:** `96ab1bae36eee3171793a0f0dae87bb765611623`; **Batch 15 complete preserved checkpoint:** [CHECKPOINT_20261105_BATCH15.md](CHECKPOINT_20261105_BATCH15.md).  
**Documentation HEAD:** the branch HEAD holding this checkpoint, later than above data SHA; **re-check latest PR HEAD each run**.  
**Original full assignment:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`.  
**Geography:** Official UN Statistics Division M49 country-or-area table https://unstats.un.org/unsd/methodology/m49/overview/ checked 2026-11-05, archived as `M49_OFFICIAL_SNAPSHOT_20261105.csv`.

## Mission and absolute boundaries

Construct complete, source-verifiable government/statutory health authority records for *all* 248 official UN M49 countries AND territories/areas, including uninhabited, colonial/nonsovereign, devolved, self-governing and contested areas. Skeleton coverage does NOT equal full verified government health institution, legal authority, identity, nationality or ancestry. Locate original local-language names, declare reviewer translation, distinguish ministry/minister portfolio from regulatory agency, surveillance unit, public-health institute, insurer, territorial service, regional/local health authority. Capture precise HTTPS official issuer/source, source language, jurisdiction, legal/mandate limits, verified date, recent changes, status and conflicts. Official WHO country offices do NOT substitute for domestic ministries. **Do not infer parent-country M49 relationships**; legal/official instruments must establish actual competent delegation. Proposed bills, 2026 consultations, draft decrees, current press intentions and future regulations are **NOT enacted laws**. For major renames, delegated, disputed and devolved powers require **two genuinely independent official governmental/legal issuers**, preferably enacted instruments; two pages on a single ministry site are not independent.

Exclusive write scope: **`docs/atlas/handoffs/team-a/` on this research branch and draft PR**. NO `main`, public website, calculator, patient guidance, diagnostic/genomic/ancestry/clinical content, patient data, Team B societies, Team C journals or Team D international networks. Do not merge/close PR #68 or mark review ready.

## Exact post-Batch 16 audit numbers (identity, NOT complete legal competence)

| Audited measure | Count |
|---|---:|
| Official UN M49 code+ISO2+ISO3+UN name+region/subregion skeletons | **248/248** |
| Principal government health-policy **identities** located | **116/248** |
| Explicit `UNKNOWN_REVIEW_NEEDED` area identities | **132/248** |
| Distinct governmental health body records | **164** |
| Cited organizational relationships | **38** (unchanged) |
| Provenance records (including same-issuer, partial and conflicted) | **243** |
| Synchronized 1-per-area coverage records | **248** |
| Unproven cross-M49 parent assignment | **0** |

This session advanced 105→111→**116** identities with **eleven** separate primary governmental bodies and **28** official-source records total across Batches 15 and 16. Batch 16 changed only `data/countries.csv`, `data/government_health_bodies.csv`, `data/country_coverage.csv`, `PROVENANCE.csv`: **5** previously unresolved principal identities, **5** new body records, **12** new dated source/provenance checks, **0** new organizational edges. Previous records, sources and caveats were not removed. The full six earlier territorial/devolved/federal case studies and their 16 URLs are preserved in [standalone Batch 15 checkpoint](CHECKPOINT_20261105_BATCH15.md).

## Batch 16 researched institutions and limitations

### M49 484 Mexico — `gov-484-001`
Local Spanish `Secretaría de Salud`; English *Ministry of Health* is explicitly a **reviewer translation**, not literal Secretaría. Ministry primary mandate https://www.gob.mx/salud/que-hacemos says federal promotion/prevention and national health-policy role; separately dated 1 September 2026 official annual-report listing https://www.gob.mx/salud/documentos/informe-de-labores-de-la-secretaria-de-salud establishes current activity. Both from **same Secretariat/executive issuer** and do NOT provide two independent enacted legal checks. Ministry page links a founding/organizational decree; this batch did **not examine full enacted text**. Federation-state authorities, IMSS/ISSSTE and service providers distinct. Provenance `MEX-SECRETARIAT-20261105-B16`; `MEX-REPORT-20261105-B16`.

### M49 554 Aotearoa New Zealand — `gov-554-001`
Official dual English/te reo Māori `Ministry of Health – Manatū Hauora`: national policy adviser, regulatory steward and system-performance monitor, NOT all direct healthcare delivery. Ministry role https://www.health.govt.nz/about-us/our-role ; detailed 2025-26 annual report **published 20 October 2026** https://www.health.govt.nz/publications/ministry-of-health-manatu-hauora-annual-report-for-the-year-ended-30-june-2026-online-version ; official emergency management division-of-functions https://www.health.govt.nz/strategies-initiatives/programmes-and-initiatives/emergency-management/health-emergency-management-in-context . **All three Ministry-issued**, not three independent statutes. Health New Zealand–Te Whatu Ora separately commissions/delivers; statutory medical officers and Indigenous iwi partnerships have distinct roles. Annual report states a Pae Ora amendment received Royal assent **9 July 2026**; the consolidated enacted law was **not independently appraised** here. Māori Health Authority disestablishment continues under formal Waitangi Tribunal/court scrutiny as reported; do not characterize the matter settled. Provenance `NZL-MINISTRY-ROLE-20261105-B16`, `NZL-ANNUAL-20261105-B16`, `NZL-EMERGENCY-20261105-B16`.

### M49 724 Spain — `gov-724-001`
Original Spanish `Ministerio de Sanidad`, reviewer translation *Ministry of Health*. Ministry health quality and SNS policy description https://www.sanidad.gob.es/areas/calidadAsistencial/ cites **Real Decreto 718/2024** for its national organisational responsibilities (enacted text not read here); separately dated 9 June 2026 official ministry medicines verification announcement https://www.sanidad.gob.es/gabinete/notasPrensa.do?id=6932 confirms ongoing departmental remit. **Same ministry issuer**. September 2026 waiting-list decree was **proposed**, NOT an enacted regulation. Autonomous communities retain distinct health service and public-health responsibilities, requiring statutory-by-community review. IDs `ESP-MINSAN-QUALITY-20261105-B16`, `ESP-MINSAN-RX-20261105-B16`.

### M49 756 Switzerland — `gov-756-001`
Original German `Bundesamt für Gesundheit (BAG)` / *Federal Office of Public Health*: a **federal public-health office within the Federal Department of Home Affairs (EDI)**; do not invent a standalone federal health ministry. Own 2026 mandate https://www.bag.admin.ch/de/auftrag-und-ziele lists federal health strategy, prevention, insurance and implementation alongside **cantons**. Separately issued Swiss Federation Fedlex EDI organisational ordinance https://www.fedlex.admin.ch/eli/cc/2000/282/en provides enacted-rule entry point; exact current BAG statutory provisions and legal delineation were **not fully audited**, notwithstanding partial legal portal access. Cantons' competent health authorities still require research. IDs `CHE-BAG-MANDATE-20261105-B16`, `CHE-FEDLEX-EDI-20261105-B16`.

### M49 858 Uruguay — `gov-858-001`
Original Spanish `Ministerio de Salud Pública` (reviewer *Ministry of Public Health*). Dated ministry news and licensing/epidemiology service sections https://www.gub.uy/ministerio-salud-publica/inicio ; March 2026 strategy https://www.gub.uy/ministerio-salud-publica/institucional/plan-estrategico/plan-estrategico-del-ministerio-salud-publica-2025-2029 ; **separate Presidency government** October 2026 decree and appointment index https://www.gub.uy/presidencia/tematica/ministerio-salud-publica . Strategy ≠ enacted law, decree **index ≠ individually audited enacted legal text**. Service delivery by ASSE and integrated-system providers, departmental ministerial units and regulator legal scope unresolved. IDs `URY-MSP-PORTAL-20261105-B16`, `URY-MSP-STRATEGY-20261105-B16`, `URY-PRES-MSP-20261105-B16`.

Every source ID has separate dated exact URL, issuer, language, check state and explicit limitation in `PROVENANCE.csv`. Other countries' older primary evidence and caveats retained.

## Independent immutable GitHub structural QA and limitations

After Batch 16 DATA commit `fa345c550e47213c780557038a881fb8e612b75d` and fast-forward of branch, **independently re-fetched** the five normalized CSVs `data/countries.csv`, `data/government_health_bodies.csv`, `data/authority_relationships.csv`, `data/country_coverage.csv`, `PROVENANCE.csv` **plus** `M49_OFFICIAL_SNAPSHOT_20261105.csv`, all at that exact immutable commit. Separate quote-aware CSV parser (supports escaped CSV quotes and embedded field newlines) and post-write controls **PASSED**: 248 unique official M49 master code/ISO2/ISO3/name/region/subregion matches; region totals Africa 60, Americas 57, Asia 50, Europe 51, Oceania 29, Antarctica unassigned 1; 116 identified with valid same-M49 linked governmental records and 132 empty-body explicit unknowns; 164 unique bodies with HTTPS site/source, language, verified-on and explicit state; 38 organizational source-backed relationships with valid IDs; 243 unique provenance sources with HTTPS, issuer, language and date/state; 248 synced coverage rows; **39 sensitive territory/federation sentinel records** checked for existence including unresolved Caribbean Netherlands `535`; all country parent M49 blank; PR draft/open/unmerged at data-QA time. These tests assert **structural integrity only**, not full current law, independent issued legal checks, sovereignty/clinical recommendations or all live external URLs.

**Python `python docs/atlas/handoffs/team-a/validate.py`: NOT RUN against Batch 16.** Local sandbox DNS failure for github.com/api.github.com prevents a full executable checkout. Previous Python validation from older batches cannot be transferred to current SHA. The independent quote-aware live GitHub audit is not equivalent to executing the repository Python test.

## Inherited caveats and unfinished original acceptance

**132 principal identities still UNKNOWN**, not proof of absent ministries: prioritize 074 Bouvet, 086 British Indian Ocean Territory, 104 Myanmar disputed/effective health administration, 112 Belarus, 192 Cuba, 226 Equatorial Guinea rival current ministry / proposed INSESO, 239 South Georgia, 260 French Southern Territories, 275 State of Palestine, 334 Heard/McDonald, 535 Bonaire/Sint Eustatius/Saba special Dutch Caribbean legal competences, then all remaining unknowns (list from actual `data/countries.csv`; do not infer absence for uninhabited areas). In depth audit of 116 newly/previously located principals' actual current legal mandate, sub-ministerial institutes, cross-border/devolved statutory acts, minority/Indigenous responsibilities, original scripts/translations, dated rename/draft vs enacted reforms, and two genuinely independent official checks is **unfinished**. New focus: New Zealand's 9 July 2026 consolidated legal text and Māori health legal proceedings, Swiss cantonal law and EDI/BAG statute, Spain autonomous community competencies, Mexico federation and health insurers, Uruguay ASSE, and all six Batch 15 delegated/federal systems.

Preserve all historic caveats and negative-source checks in `GAPS.md`, `PROVENANCE.csv`, prior standalone checkpoints and `CONTINUE.md`: Hungary/Gabon 2026 **drafts**, Comoros official portal template/test content and only title-index decree, Maldives April renaming and hospital affiliation not proof of ownership, Eritrea Tigrinya pending, Guinea current minister vs old Presidency list, Danish Faroe 2025/2026 transition and proposed pharmacy role, Australian WA/Indian Ocean Territory SDA and Commonwealth authority, Gibraltar minister portfolio vs GHA/Public Health, Åland Swedish/Finnish power split and October **future strategy**, Mayotte/Guyane French legal competencies, Polynesia health directorate versus regulator and reserved France power, India states/UT, Chad historic 403, Ethiopia Amharic, Georgia unread current act and territorial control, Bosnia canton and Brčko. Two sources from one issuer are not independently enacted legal confirmation; neither are a WHO office or consultation. No inferred parent M49 and no clinical/ancestry content.

## Standalone restart / validation instructions

1. Re-read `CONTINUE.md`, this latest standalone checkpoint, Batch 15 and earlier source caveats, original Team A assignment and current draft PR #68 status/branch HEAD. All sources are in GitHub, not dependent on this chat.
2. Inspect `README.md`, `STATUS.md`, `GAPS.md`, `QA_REPORT.md`, `CHANGELOG.md`, `PROVENANCE.csv`, all five normalized CSVs, dated M49 master, `validate.py`, and compare later concurrent commits.
3. Systematically research primary local government/legislation sources. Record issuer, language, date, exact URL, original name, translation marker, jurisdiction, conflict/proposed vs enacted and explicit identity/mandate state. Preserve all prior work; no inferred M49 parents.
4. Commit ONLY files inside Team A handoff directory on branch `research/atlas-team-a-20261104`. Validate after each manageable source-backed batch with exact immutable re-fetch and structural checks; run Python validator in a runnable complete checkout when available and be explicit if not.
5. Finish with refreshed complete standalone checkpoint, reconciled documents, draft PR #68 open/unmerged, exact data/docs SHA, counts, remaining limitations and same prompt exactly.

## Same short continuation prompt, unchanged

Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.

Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
