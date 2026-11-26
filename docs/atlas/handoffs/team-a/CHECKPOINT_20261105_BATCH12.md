# Team A — complete standalone Batch 12 checkpoint (2026-11-05)

**Project/repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
**Open draft PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68
**Research branch:** `research/atlas-team-a-20261104`
**Exact independently checked Batch 12 DATA commit:** `3aa199259d0a569e67dfb42980434bbf7b48d4b2`. This document is part of a subsequent DOCUMENTATION commit; always resolve live branch HEAD before editing.
**Primary handoff:** `docs/atlas/handoffs/team-a/CONTINUE.md`
**Original full acceptance criteria:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`.
**UN authoritative master:** `M49_OFFICIAL_SNAPSHOT_20261105.csv` dated 2026-11-05; https://unstats.un.org/unsd/methodology/m49/overview/.

## Mission, contract, boundaries

Team A owns only the governmental/statutory health-authority atlas for ALL 248 UN M49 country/area entries, territories and special-status areas included. It is a research directory, not a clinical or patient-facing source. No ancestry/genetics/clinical formulas, care recommendations, patient data, website, main, other team files, journals, nongovernment professional societies or international network memberships. No merge and do not mark draft ready. WHO country offices cannot substitute for sovereign, territorial or delegated domestic public-health authorities. Never infer a parent-area M49 link without its legal instrument. Keep contested sovereignty, effective control, local legal and ministerial rename histories unresolved unless grounded in independently verifiable governmental/legislative texts. Proposed legislation and consultation documents are NOT law.

Required live files under this directory: `data/countries.csv`, `data/government_health_bodies.csv`, `data/authority_relationships.csv`, `data/country_coverage.csv`, `PROVENANCE.csv`, `M49_OFFICIAL_SNAPSHOT_20261105.csv`, `M49_RECONCILIATION_20261105.csv`, `M49_CORRECTIONS_20261105.csv`, `README.md`, `STATUS.md`, `GAPS.md`, `CHANGELOG.md`, `QA_REPORT.md`, `CONTINUE.md`, `validate.py`, previous Batch 10/11 checkpoints and this Batch 12 checkpoint.

## Current exact dataset (Batch 12)

| Metric | Exact count |
|---|---:|
| Official M49 country-and-area rows individually matched on M49, ISO2, ISO3, official name, region/subregion | **248 / 248** |
| Principal governmental health authority identities located | **95 / 248** |
| Principal area authority unknown and explicitly `UNKNOWN_REVIEW_NEEDED` | **153 / 248** |
| Separately represented government health bodies | **138** |
| Government organization links with cited sources | **33** |
| Dated provenance rows, including partial/candidate/failed checks | **189** |
| Country coverage ledger rows | **248** |
| Cross-area parent M49 links | **0** (none inferred) |

**Coverage is only verified IDENTITY, not legal competence or full original acceptance.** The 248 M49 matched skeletons must not be misrepresented as 248 verified ministries. Each unknown is explicit; unresolved does not mean there is no ministry.

### New primary entries (all 2026-11-05)

| M49 | New principal ID | Governmental institution and scope | Evidence | Unresolved caveat |
|---|---|---|---|---|
| 174 Comoros | `gov-174-001` | Ministère de la Santé et de la Protection Sociale | https://minsante.egouv.km/fr/news-events/news/bienvenue-sur-le-site-web-du-minist%C3%A8re-de-la-sant%C3%A9-et-de-la-protection-sociale/ and official decree index https://www.munganyo.km/decrees?tab=decrets | Ministry portal has test/template content and variant header; Sept 2026 decree is an INDEXED TITLE ONLY, not audited full text; national law and separate Mayotte M49 175 not resolved |
| 234 Faroe Islands | `gov-234-001` | Heilsu- og orkumálaráðið / Ministry of Health and Energy | https://www.homr.fo/fo/um-radid/stovnar/heilsuoekid and October 2026 https://www.homr.fo/fo/kunning/tidindi | Current 2026 portfolio supersedes older 2025 `Heilsumálaráðið` / Social Affairs & Health structures; current renaming effective act, Danish supervision, and powers split not legally checked |
| 440 Lithuania | `gov-440-001` | Lietuvos Respublikos sveikatos apsaugos ministerija | https://sam.lrv.lt/lt/struktura-ir-kontaktine-informacija/vadovybe-2026/sveikatos-apsaugos-ministro-kuruojamos-veiklos-sritys/ and government July 2026 https://lrv.lt/en/news/the-21st-government-of-the-republic-of-lithuania-was-sworn-in-wDGt/ | Identity and limited ministerial policy scope only; current law, cities and regulator authority need review |
| 462 Maldives | `gov-462-001` | Ministry of Health, Family and Welfare; official romanized Dhivehi `Sihhathaai Aailaa-aai Ijjuthimaaee Ehee-aa Behey Vuzaaraa` | Presidency 15 April 2026 Directive 8/2026 notice https://presidency.gov.mv/Press/Article/36477 and ministry https://health.gov.mv/en | April rename verified; original Thaana script and full directive text pending; 2 November tertiary hospital group is presidentially accountable but affiliated with ministry, not necessarily organizationally subordinate |
| 470 Malta | `gov-470-001` | Ministry for Health and Active Ageing | Government Gazette March 2026 https://www.gov.mt/en/Government/DOI/Government%20Gazette/Government%20Notices/Pages/2026/03/GovNotices1003.aspx and government 2026 consultation https://www.gov.mt/en/publicconsultation/Pages/2026/L-0011-2026.aspx | English is an official Maltese-language administration language; Maltese rendering and full health division pending; undated ministry site retains historical Deputy PM title; proposed consultation not law |

**New distinct statutory/government bodies:** `gov-234-002` Faroese `Heilsustýrið`, self-governing health authority established 1 Jan 2023 (https://www.homr.fo/fo/um-radid/stovnar/heilsuoekid/heilsustyrid); `gov-440-002` Lithuanian state accreditation regulator `Valstybinė akreditavimo sveikatos priežiūros veiklai tarnyba prie Sveikatos apsaugos ministerijos` (https://vaspvt.lrv.lt/lt/veiklos-sritys/). Each has one government-institution link to its same-area ministry in `authority_relationships.csv`. Lithuania's English regulator title is a **reviewer translation**; no transnational legal parent asserted. Faroe August 2026 pharmacy transfer legislation was a **consultation draft**: https://www.homr.fo/fo/kunning/uppskot-til-ummaelis/myndugleikauppgavurnar-hja-landsapotekaranum-verda-fluttar-til-apoteksverkid-og-heilsustyrid , NOT enacted.

## Independent exact-SHA structural validation

After committing Batch 12 data at `3aa199259d0a569e67dfb42980434bbf7b48d4b2`, re-fetched **all five normalized data CSVs and official 248-row M49 master from the exact commit**, independently quote-aware parsed and checked: 248/248 row-by-row code/ISO/UN name/region/subregion equality; 95 identified /153 unknown; 138 unique body IDs with correct M49 references; 33 links with extant different body IDs and HTTPS source; 189 unique provenance IDs with issuer/language/check date/state/HTTPS; 248 synchronized coverage entries; 24 special-jurisdiction/small-island/devolution sentinel records; no invented cross-area parents. **ALL PASS structural**. Region counts Africa 60, Americas 57, Asia 50, Europe 51, Oceania 29, blank/unassigned 1. The repository `python docs/atlas/handoffs/team-a/validate.py` was **NOT EXECUTED on Batch 12**, so this is NOT a Python validation pass. Legal, current jurisdiction, disputed sovereignty, delegated territory, 2-independent-source proof, local scripts and scientific/clinical correctness are **NOT certified**. Rerun Python on a full executable checkout.

## Remaining acceptance work — not complete

**153 principal identities unknown.** First revisit 074 Bouvet (uninhabited, Norwegian jurisdiction), 104 Myanmar (competing authorities/effective control), 112 Belarus, 162 Christmas Island, 166 Cocos (Keeling), 175 Mayotte (French administration/sovereignty dispute and Comorian territorial claim), 192 Cuba, 226 Equatorial Guinea (2026 portfolio variants and INSESO prospective transfer), 232 Eritrea, 248 Åland, 254 French Guiana, 258 French Polynesia, 260 French Southern Territories, 292 Gibraltar, 324 Guinea, then in ascending M49 order. Do not invent ministries for non-permanent populations. Continue to verify 95 identified principals' current statutes and legal identity/mandates, cross-border and territorial delegated legal competence, federal/provincial/municipal divisions, subnational health institutes, surveillance, licensing and government biomedical research councils. Bosnia and Herzegovina's 10 cantons and Brčko are still pending. Renamed/disputed/delegated authorities require **two independent official government/legal checks**, not duplicate pages from one institution. Preserve government direct-source failures and all previous Batch 1–11 caveats rather than overwriting them.

**Prior critical caveats continue:** Gabon's October 2026 organizational decree is PROPOSED, not enacted; Hungary October 2026 public consultation is draft and precise health-portfolio legal transition pending; Georgia's 2026 consolidated decree is inaccessible and territorial effective control unverified; Chad 2026 ministry source has historical 403; Ethiopia 2018/2023 legal references need current Amharic/regional check; India federal state and union-territory powers unresolved; Equatorial Guinea's 2026 ministry labels and prospective hospital transfers conflict; Myanmar NUG and competing institutions not flattened into unqualified authority. None of these are resolved by Batch 12.

## Safe continuation protocol

1. Read original Team A instruction on dedicated prompt branch and **all** newest files here. Resolve PR #68 live state, branch HEAD and newer concurrent commits first, before any edits.
2. Search issuing ministries, local-language government pages, independent governmental gazettes/statutes; preserve dates, source issuer, source language, exact URLs and explicit limitations. WHO references are corroboration only. Never promote search snippets, 403, proposed instruments or outdated websites into established law.
3. Write a manageable batch in **only** `docs/atlas/handoffs/team-a/`, update countries, bodies, relationships, provenance, coverage and `STATUS/GAPS/README/CHANGELOG/QA_REPORT/CONTINUE`, maintain 248 official master. Do not repurpose current statuses as full legal verification.
4. Commit, independently reread exact SHA and quote-aware check all CSVs, master and negative controls; run `python docs/atlas/handoffs/team-a/validate.py` when a complete checkout is available. Record unequivocally if not executed. Keep PR #68 **draft, unmerged**, update PR body with accurate counts.
5. Before stopping, commit a fully standalone new checkpoint with latest SHA, coverage, source caveats, tested and untested acceptance criteria, current queue and the identical continuation prompt.

## Same continuation prompt — verbatim

> Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.
> 
> Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.
> 
> Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.
> 
> If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.

No identifiable health/genomic records, licensed full texts, diagnostic conclusions or live website changes are permitted.
