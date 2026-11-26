# Research Team A — COMPLETE STANDALONE Batch 17 checkpoint (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Open DRAFT PR #68 (do not merge/mark ready):** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68  
**Branch:** `research/atlas-team-a-20261104`  
**Immutable independently read-back DATA commit:** `14bf3f2e748d5d439bc645002592c4ae3dc2a41a`  
**Earlier full checkpoint:** [Batch 16](CHECKPOINT_20261105_BATCH16.md) and [continuation](CONTINUE.md). Documentation commit containing this file follows the data commit; always resolve latest live branch HEAD before writing.  
**Original Team A acceptance contract:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`.  
**Geographic reference:** United Nations Statistics Division official M49 table https://unstats.un.org/unsd/methodology/m49/overview/ (archived as `M49_OFFICIAL_SNAPSHOT_20261105.csv`, accessed 2026-11-05).

## Mission and strict scope

Source-verifiable directory of domestic **government and statutory** health authorities across **all 248** UN M49 countries or areas, including non-sovereign, devolved, federal, self-governing, disputed, and uninhabited territories. **A geographic row is not a verified ministry or established legal competence**; governmental identity does not imply complete mandates. Capture local-language name, translation status, body type, jurisdiction, official HTTPS URL, issuer, language, dated verification, legal citations, status and explicit unknown/conflicts. For current renames, disputed/devolved/territorial delegation, require **at least two genuinely independent official government or legislative issuers**, ideally current enacted legal text. Two pages from the same issuing body are not independent. No invented parent M49 cross-area legal relationships. WHO country offices are not domestic ministries. **Proposed consultations and bills are not enacted acts.**

**Write ONLY `docs/atlas/handoffs/team-a/` on the research branch.** Leave `main`, website, calculator, ancestry/clinical/genetic/patient content, other teams' work and private records unchanged. PR #68 must stay **open DRAFT and unmerged**. Preserve earlier source caveats, failures and handoffs; do not replace files with new truncated snapshots.

## Batch 17 exact post-commit audit

| Measure | Result |
|---|---:|
| M49 skeletons individually identical to dated official snapshot (M49, ISO2/3, UN name, region/subregion) | **248 / 248** |
| Principal governmental authority **identity** located | **120 / 248** |
| Explicitly unknown/needs review | **128 / 248** |
| Distinct governmental health body records | **169** |
| Cited within-area institutional relationships | **39** |
| Provenance source records, including qualified and partial legal checks | **253** |
| Country coverage ledger | **248** |
| Unsupported parent-country M49 assignment | **0** |

Batch 17 adds **4** newly located principal identities (Peru 604, Philippines 608, Poland 616, Portugal 620), **5** bodies (including Portugal's separate DGS directorate), **10** dated official-source provenance checks, **1** statutory ministerial-power-of-direction link. Earlier research remains intact. Modified DATA files only: `data/countries.csv`, `data/government_health_bodies.csv`, `data/country_coverage.csv`, `PROVENANCE.csv`, `data/authority_relationships.csv`. The dated UN master is unchanged.

## Official-source findings, limitations and independent issuer appraisal

### Peru — M49 604, `gov-604-001`

Spanish original **Ministerio de Salud (MINSA)**, reviewer translation *Ministry of Health*. National health-policy stewardship and health-sector regulation; regional and local health responsibilities **not** collapsed into the ministry. Official Peru government institutional summary https://www.gob.pe/institucion/minsa/institucional (issuer: MINSA through the national government portal, Spanish); separate MINSA transparency/organization page https://www.minsa.gob.pe/transparencia/dge_organizacion.asp (issuer: same ministry, Spanish) describes executive health-sector role and cites **Decreto Legislativo 1161** and **Decreto Supremo 007-2016-SA**. **Do not mark statutory competence as fully confirmed:** actual current consolidated legal provisions were not independently appraised, and the two ministry sources are not two independent legal issuers. Direct opening of `gob.pe` returned HTTP 418 during this session although its government-issued indexed content was accessible; source limitation recorded. Provenance `PER-MINSA-ROLE-20261105-B17`, `PER-MINSA-ORGAN-20261105-B17`.

### Philippines — M49 608, `gov-608-001`

Official English **Department of Health (DOH)**. DOH Cordillera official mandate quoting Executive Order 292 Title IX https://caro.doh.gov.ph/doh-mandate/ (DOH regional issuer); *independent Philippine judiciary publication* of **1987 Administrative Code/EO 292 Title IX, including Section 2 mandate**, https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/5/53270/1000 (judiciary issuer); independent **10 August 2026 Presidential Communications Office** current DOH-secretary appointment https://pco.gov.ph/news_releases/president-marcos-appoints-edwin-mercado-as-new-doh-secretary-beverly-ho-named-philhealth-president/ (Presidency issuer). The law/press sources support existence and historically established mandate with a current department identity, but do **not** conclusively resolve the post-1991 DOH redirection, UHC framework and current LGU, regional health, financing and PhilHealth division. DOH regional accessibility can vary; no staff-person identity is used as a substitute for institutional law. Provenance `PHL-DOH-MANDATE-20261105-B17`, `PHL-JUDICIARY-EO292-20261105-B17`, `PHL-PCO-DOH-20261105-B17`.

### Poland — M49 616, `gov-616-001`

Polish original **Ministerstwo Zdrowia**, reviewer translation *Ministry of Health*. Official ministerial tasks https://www.gov.pl/web/zdrowie/podstawowe-informacje (Ministry of Health, Polish; last modified 31 March 2025) include NFZ oversight, reimbursement, medical professions, health programmes and emergency medical system. **Separate official Dziennik Ustaw issuer**, 2026 consolidated legal publication index dated 18 September 2026, https://dziennikustaw.gov.pl/DU/2026/1226, establishes a law-index entry, **NOT independently audited full enacted 2026 Article 33**. No claim that ministry page is enacted legal allocation; NFZ, sanitary inspectors, voivodeship/local authorities and precise law amendments remain pending. Provenance `POL-MZ-TASKS-20261105-B17`, `POL-DU-1226-20261105-B17`.

### Portugal — M49 620, `gov-620-001` and `gov-620-002`

Original Portuguese **Ministério da Saúde** (reviewer translation *Ministry of Health*). Current XXV Government cabinet roster confirms ministerial portfolio https://portugal.gov.pt/pt/gc25/governo/composicao (issuer: national executive); separate official **Diário da República** consolidated enacted **Decreto-Lei 87-A/2025, as amended 10 July 2026**, **Article 23** https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2025-926588602 (issuer: formal legislation journal/Presidency of Council) was **read**, establishing national policy mission and a specific ministerial **power of direction**, distinct from superintendence/tutela categories. A separate central government entity page updated **2 March 2026** https://www.gov.pt/entidades/direcao-geral-da-saude confirms **Direção-Geral da Saúde (DGS)** as separate national surveillance, programs and public-health directorate with administrative autonomy. Record new body `gov-620-002`; source-backed directed institutional link `gov-620-001` → `gov-620-002` type `MINISTERIAL_POWER_OF_DIRECTION_ARTICLE23`. This is **not** a general ownership claim over the SNS or Azores/Madeira autonomous regional competence. Full separate organic laws and actual regional split remain open. Provenance `PRT-GOV-CABINET-20261105-B17`, `PRT-DR-2026-ART23-20261105-B17`, `PRT-GOV-DGS-20261105-B17`.

## Exact-SHA independent structural validation — PASSED with limits

After writing DATA commit `14bf3f2e748d5d439bc645002592c4ae3dc2a41a`, fetched **at that immutable SHA** all five normalized CSVs and `M49_OFFICIAL_SNAPSHOT_20261105.csv` again through GitHub and independently re-parsed with a quote-aware parser including escaped quotes. **PASS:** 248 distinct official codes and identical ISO2/ISO3/name/region/subregion; region counts Africa 60, Americas 57, Asia 50, Europe 51, Oceania 29 and Antarctica no region 1; exactly 120 authority-identified rows with linked same-area bodies and 128 unknown without links; 169 distinct body IDs and HTTPS/language/check-date/state fields; 39 existing-body cited links without self-relations; 253 distinct provenance IDs with HTTPS/issuer/language/check-date/state; 248 coverage rows with matching identity statuses; 20 territory/federation/jurisdiction presence sentinels plus new 604/608/616/620; M49 535 remains unknown; no parent M49 assignment; specific Portuguese legal relationship present. Post-QA PR #68 was **open, DRAFT and unmerged**, with DATA SHA as head.

**Python `python docs/atlas/handoffs/team-a/validate.py` was NOT RUN** against this commit. A local `git ls-remote` failed because DNS could not resolve `github.com`; an independent GitHub CSV readback cannot be presented as an execution of the repository Python validator. Structural QA is not a comprehensive external-link check, enacted legal-mandate appraisal, independent-issuer certification for every identity, or clinical authority approval.

## Preserved inherited issues and next queue

**128** primary areas still `UNKNOWN_REVIEW_NEEDED`, not absence of a ministry. High-risk priority: Bouvet 074; BIOT 086; Myanmar 104 (competing ministries/effective control, do not flatten), Belarus 112; Cuba 192; Equatorial Guinea 226 conflicting/possibly proposed portfolios; South Georgia/South Sandwich 239; French Southern Territories 260; State of Palestine 275 (jurisdiction and effective control); Heard/McDonald 334; **Bonaire/Sint Eustatius/Saba 535** special Dutch Caribbean legal division; then rest of actual unknown rows in ascending M49 order. Do not infer parent M49 area assignments in non-resident areas. Nepal 524 should be checked carefully: government `mohp.gov.np` currently appears to present **स्वास्थ्य तथा खाद्य स्वच्छता मन्त्रालय** (*health and food safety*, name change and legal effect pending), not blindly copied as older Ministry of Health and Population. Follow separately.

For ALL **120** identified principals, remaining acceptance includes enacted statutes, current government competencies, disease surveillance, medical regulation, specialist statutory public-health bodies, local and Indigenous roles, original-language translations, federal/devolved powers, independent legislative checks for major renames/disputed/delegated systems. Specific outstanding Portugal Azores/Madeira, Polish voivodeship/NFZ division, Philippine 1991 EO and LGU/UHC, Peru MINSA regional/legal consolidation. Prior Batch 16 Mexico/New Zealand/Spain/Switzerland/Uruguay limitations remain, as do Batch 15 Greenland, Hong Kong, Norway, Sweden, UK and US federal/devolved research. Preserve all prior checkpoint caveats: Gabon/Hungary **2026 proposals are not enacted**; Faroe proposed pharmacy reform; Comoros test/template portal and title-only decree index; Maldives romanized rename and agency affiliation; Guinea official ministry versus old Presidency roster; Eritrea original-language pending; Gibraltar, Åland, Mayotte, Guyane, French Polynesia territorial competences; India states/UT, Ethiopia Amharic, Georgia inaccessible consolidated decree, Chad historical 403, Bosnia canton/Brčko mapping, Myanmar competing systems. No clinical/ancestry inference.

## Standalone next-run procedure

1. Inspect LIVE draft PR #68 and current branch HEAD, this checkpoint and `CONTINUE.md`, original TEAM_A contract, latest CSVs, `PROVENANCE.csv`, `STATUS.md`, `GAPS.md`, `README.md`, `CHANGELOG.md`, `QA_REPORT.md`, `validate.py` and all prior checkpoint source caveats; account for concurrent writes.
2. Research source-backed manageable batches using **current official original-language government and enacted legal/gazette sources** with explicit issuer independence, link accessibility, scope and status caveats. Keep the dated official 248-area UN M49 master immutable.
3. Update ONLY Team A staging files on the same draft branch. Commit with guarded branch HEAD, reread exact immutable SHA and audit CSVs/territory controls; attempt full Python validator when executable checkout becomes possible; never mark it passed without running it.
4. Refresh all live docs, the PR body/title with exact counts, and a new complete standalone GitHub checkpoint. Do not touch website, `main`, other teams, clinical content, or merge/change the draft state.

## Identical short continuation prompt

Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.

Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
