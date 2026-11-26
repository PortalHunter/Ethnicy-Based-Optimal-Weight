# Team A — COMPLETE STANDALONE Batch 19 GitHub checkpoint (2026-11-05)

**Live research repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Existing OPEN DRAFT PR #68, NEVER MERGE OR MARK REVIEW READY:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68  
**Research branch:** `research/atlas-team-a-20261104`  
**Immutable independently QA-checked Batch 19 DATA commit:** `0d7c71823fd4ad552cce2a77122f197f545b4ec0`  
**Prior fully recoverable work:** [Complete Batch 18 checkpoint](CHECKPOINT_20261105_BATCH18.md), all older checkpoints and [CONTINUE.md](CONTINUE.md).  
**Original acceptance contract:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`.  
**Dated geographical authority:** UN Statistical Division M49 https://unstats.un.org/unsd/methodology/m49/overview/ archived in `M49_OFFICIAL_SNAPSHOT_20261105.csv`.

## Mission, scope and status

Build an evidence-linked directory of **government and statutory public health authorities** across every **248 UN M49 country-or-area skeletons**. Record original local-script ministry/department names, clear reviewer translations, geographic and legally delegated authority, source URLs and independent issuing bodies, date and legal status (enacted vs proposed vs merely indexed), exceptions, historical renames, local/territorial/federal/devolved duties and separately identified government public-health institutes. **A 248-row geographical census is NOT 248 verified ministries**. Governmental authority **IDENTITY is not completed current statutory mandate verification**. WHO country offices cannot substitute for national health authorities. Disputed, devolved, federated, delegated and renamed cases require at least two *independent official government/legal issuers* and inspection of current enacted instruments. Do not invent M49 cross-area parent assignments or assert in-progress legal transfers completed.

**Scope:** only edit `docs/atlas/handoffs/team-a/` on existing research branch. **Never edit `main`, live website, calculators, clinical/medical/ancestry/genetic/patient-facing guidance, other teams' files, private patient records.** Leave PR DRAFT, open, and unmerged. Preserve previous results and contradictory/deprecated/failed-access evidence.

## Exact Batch 19 post-write audit

| Metric | Exact result |
|---|---:|
| Geographical M49 skeleton rows with official master code, ISO2/3, name, region and subregion fully matched | **248/248** |
| Principal governmental health authority **identities located** | **128/248** |
| Principal authorities explicitly `UNKNOWN_REVIEW_NEEDED` | **120/248** |
| Government/statutory health bodies separately represented | **180** |
| Source-backed same-area organizational links | **41** |
| Unique provenance records including incomplete/negative checks | **275** |
| Area review ledger records aligned with M49/status | **248** |
| Invented/unsupported parent country M49 assignments | **0** |

**Batch 19:** +3 new principal identity areas (**Saint Lucia 662; San Marino 674; Saudi Arabia 682**), +5 separate government health bodies (including **Saint Lucia Bureau of Health** as an internal department and **San Marino ISS** as a separate autonomous public entity), +1 government-directory-supported **internal department listing** for Saint Lucia, +9 issuer-specific provenance checks (including failed direct access). This is incremental to **Batch 18** (125 identified/123 unknown, 175 bodies, 40 links, 266 provenance); all older sources/caveats intact. Only five data files changed in the DATA commit: `data/countries.csv`, `data/country_coverage.csv`, `data/government_health_bodies.csv`, `data/authority_relationships.csv`, `PROVENANCE.csv`. Official M49 snapshot unchanged.

## Primary findings, issuers, original names and explicit legal qualifications (checked 2026-11-05)

### 662 — Saint Lucia

**`gov-662-001` current official English identity: Ministry of Health, Wellness and Nutrition.** National Government directory https://www.govt.lc/ministries/health-wellness-human-services-and-gender-relations explicitly displays this *current title*, government ministerial site, mission and health-service departmental list. **Its URL slug still says older `health-wellness-human-services-and-gender-relations`**: historical path and modern heading must not be merged into a purported legal rename/effective date without current Cabinet instrument. English is an official original-language name; no translation claim needed. Limited national-government policy and direction mandate, without assuming autonomous hospital statutory functions.

**`gov-662-002` Bureau of Health** is separately recorded as a **listed internal Ministry department**, *not* separately confirmed autonomous agency; official same directory displays Bureau of Health under Departments. Relationship `gov-662-001` → `gov-662-002`, **`LISTED_MINISTRY_HEALTH_DEPARTMENT_BUREAU`**, cites directory and means listing, not enacted all-powers hierarchy. Direct departmental page https://www.govt.lc/ministries/health-wellness-human-services-and-gender-relations/bureau-of-health **timed out**; independent official Ministry website https://health.govt.lc/ also timed out. Both failure/limitations documented in provenance; source directory and ministry site are **not two successful independent legal checks**. Missing: current enacted ministerial legal instrument and exact effective rename, hospital regulation/devolution, bureau actual organic responsibilities.

**Issuer/source IDs:** `LCA-GOV-HEALTH-B19`, `LCA-GOV-BUREAU-B19`, `LCA-HEALTH-ACCESS-B19`.

### 674 — San Marino

**`gov-674-001` official Italian original:** **Segreteria di Stato per la Sanità e la Sicurezza Sociale, gli Affari Sociali e le Pari Opportunità**; reviewer English *State Secretariat for Health, Social Security, Social Affairs and Equal Opportunities*. Current **Congresso di Stato executive cabinet roster** https://www.congressodistato.sm/pub1/CongressoSM/Composizione-del-Congresso-di-Stato/Membri-del-Congresso-di-Stato.html independently confirms existing health portfolio. **Do not incorrectly relabel it as a separately established Ministry of Health or assert all service delivery authority.**

**`gov-674-002` separate:** **Istituto per la Sicurezza Sociale (ISS)**, reviewer translation *Social Security Institute*, current **Republic of San Marino national administrative government directory** explicitly lists ISS among **Enti Autonomi**: https://www.gov.sm/pub2/GovSM/Amministrazione-Trasparente/Organizzazione-dell-Amministrazione/Enti-Autonomi.html . Distinct `https://www.iss.sm/` institution site. **No fabricated State Secretariat→ISS statutory ownership link**; directorates and policy coordination must be determined from enacted law.

Separate **Consiglio Grande e Generale** parliamentary/legislation index https://www.consigliograndeegenerale.sm/on-line/home/organismi-istituzionali-e-commissioni-consiliari/commissioni-consiliari-permanenti/scheda17187164.html lists **Decreto Delegato 119 of 12 August 2024** (ISS organization), **ratified 6 November 2024**, with link to **Decreto Delegato 171/2024**. This is **metadata/index corroboration only**, not full legal-text appraisal. Parliament page expressly cautions online copies **lack legal authenticity** and can have mistakes; complete authentic, currently consolidated ISS organic act and State Secretariat legal relations remain **unexamined**. Keep status limited; do not confuse another government body's listing or legal index with two fully independently audited statutory mandates.

**Issuer/source IDs:** `SMR-CONGRESS-B19`, `SMR-GOV-AUTONOMOUS-ISS-B19`, `SMR-PARL-ISS-2024-B19`.

### 682 — Saudi Arabia

**`gov-682-001` official Arabic original `وزارة الصحة`**, reviewer English *Ministry of Health* (also official English usage). **Arabic Ministry institutional/organizational page** https://www.moh.gov.sa/Ministry/Structure/Pages/default.aspx directly states public-health prevention, care, public/private sector health regulation, monitoring, research, regional offices and organizational structure, with Arabic page modified during 1448 AH/2026. **Ministry's English overview** https://www.moh.gov.sa/en/Ministry/About/Pages/default.aspx explicitly updated **8 June 2026**, documents active ministry and **historical 1951 founding royal decree**. Historical decree is **not proof of current division of statutory competence**, especially amid reforms to regional clusters and autonomous bodies. Both official Arabic/English sites are the **same issuing Ministry**, so NOT two independent governmental legal corroborations.

**Separate national Digital Government directory** https://my.gov.sa/en/agencies/17639 returned **HTTP 403** on direct opening, recorded as an unsuccessful check and **not counted as evidence**. Independent 2026 enacted health statutes, regulations affecting non-MOH autonomous providers, Saudi Health Holding Company and regional health clusters, and licensed medical professional regulators remain unreviewed. Historical regional names and modern competence boundaries must not be inferred from high-level ministry summaries.

**Issuer/source IDs:** `SAU-MOH-AR-STRUCT-B19`, `SAU-MOH-EN-OVERVIEW-B19`, `SAU-PORTAL-403-B19`.

## Independent, immutable post-data-commit QA and limits

Read back at **exact DATA SHA `0d7c71823fd4ad552cce2a77122f197f545b4ec0`** all five normalized CSVs plus official dated M49 snapshot through GitHub, independent of the prior write buffers. Quote-aware CSV parser handles internal escaped double quotes and per-line column counts; all 248 individual M49 fields exactly match the official archived country-and-area master; no duplicate keys; region totals **Africa 60 / Americas 57 / Asia 50 / Europe 51 / Oceania 29 / unassigned Antarctica 1**; 128 identified rows with source-linked same-area government bodies, 120 unknown rows without body links; **180** unique body IDs with HTTPS source/site, original-language names or explicit pending flags, source language/date/state and valid M49 area; **41** cited non-self intra-area links; **275** unique provenance IDs with HTTPS, issuer/language/date/state; **248** matching coverage ledger statuses; **39** small-island, territorial, contested, regional/devolved and newly added 662/674/682 sentinel areas present; **M49 535 Caribbean Netherlands stays unresolved**; **zero cross-M49 parent assignments**; PR **open DRAFT/unmerged** at data QA. **PASS structural**.

**Python `python docs/atlas/handoffs/team-a/validate.py` NOT RUN against Batch 19.** Local GitHub DNS access for executable full checkout was unavailable; prior script runs cannot be treated as current-batch PASS. QA proves data structural consistency, **NOT current legal mandate, independence of all issuer pairs, full separate government agencies, live third-party source uptime or any patient-facing clinical validity**. Repeat Python test in an executable Git checkout and redo law/source validity checks.

## Remaining acceptance and prioritized queue

**120 identities remain unresolved**; even **128 identified national/territorial principals are not 128 fully audited legal delegations or guidance mandates**. High-risk unresolved examples: **074 Bouvet**, **086 British Indian Ocean Territory**, **104 Myanmar** competing/effective health authority, **112 Belarus**, **192 Cuba**, **226 Equatorial Guinea** disputed ministerial changes, **239 South Georgia/South Sandwich**, **260 French Southern Territories**, **275 Palestine**, **334 Heard/McDonald**, **535 Caribbean Netherlands**. For local gaps after Batch 19: **Saint Lucia** enacted health ministry renaming, complete Bureau of Health statute, distinct hospital body powers; **San Marino** authentic full 2024 ISS Decrees 119 and 171 as amended, State Secretary executive/ISS coordination act, municipality services; **Saudi Arabia** independent legislation/issuers, regional MOH directorates and health clusters, interagency separation. Batch18 still open: **Timor-Leste** current 2023 ministerial organic laws, municipal Oe-Cusse/Ataúro remit and Tetum; **Puerto Rico** territorial/federal health/quarantine and statutory powers; **Qatar** Nov 5 2026 food safety TRANSFER JUST STARTED, full Decision41/2026 and effective end-state pending; **Romania** current legal consolidation/CNAS and county; **Rwanda** current post-2024 amendments and district/RBC responsibilities.

Preserve **all previous Batch 1–18 caveats**: Hungary/Gabon draft acts not enacted; Peru govt portal HTTP418; Poland 2026 legal index only; Portugal enacted Art23 ministerial *direction* over DGS, not all SNS; Philippines EO292 historic vs UHC/1991 local laws; Maldives name change vs legally independent hospital; Comoros portal test copy and decree title only; Faroe proposed pharmacy law, Greenland/Åland/France overseas delegated competence; Algeria local Arabic; Guinea minister/personnel mismatch; Myanmar competing institutions; Gibraltar portfolio vs autonomous GHA; Australian IOT WA agreements; Bosnia cantons/Brčko; ambiguous later renamed legal sources. **Do not invent parent-area M49** (all still empty) or use WHO country offices as ministries. New identity additions 662/674/682 **do not require further identity search** but urgently require statutory mandates.

## Standalone recovery protocol

1. Query **live** PR #68 metadata and current branch `research/atlas-team-a-20261104` HEAD. Start with `docs/atlas/handoffs/team-a/CONTINUE.md`, this checkpoint, prior Batch 18, `GAPS.md`, `STATUS.md`, `README.md`, `QA_REPORT.md`, all five data CSVs and authoritative M49 snapshot. Read original source criteria on `research/atlas-five-team-handoff-prompts-2026-11-04`. Treat all older batches' counts as historical.
2. Continue official-government/cabinet/gazette/legislative evidence, **original local languages**, issuing body, dates, current enactment vs historical index, domestic vs devolved legal scope and negative/failed accesses. For disputed/delegated and recent renames, independently check two *actually distinct* issuing government/legal authorities; do not mark unknown as absence. Do not clobber existing rows/notes or invent links.
3. Commit small research batches, independently re-fetch exact immutable DATA SHA with quote-aware structural tests, run repository `validate.py` if Git checkout works, then append rather than overwrite detailed source/gaps/status/QA and write new full standalone checkpoint. Check PR DRAFT unmerged; do not touch public site/main/other teams.
4. End with PR link, exact latest branch SHA and immutable data SHA, counts and limitations, and **repeat the following same short prompt**.

## Exact short continuation prompt

Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.

Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
