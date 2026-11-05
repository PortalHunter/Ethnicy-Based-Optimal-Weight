# Research Team A — standalone Batch 18 continuation checkpoint (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**DRAFT unmerged PR (leave draft):** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68  
**Existing research branch:** `research/atlas-team-a-20261104`  
**Independently audited immutable Batch 18 DATA SHA:** `6329a090951f5e6fa518fdbfec15764e77bff94e`  
**Prior full checkpoint:** [Batch 17](CHECKPOINT_20261105_BATCH17.md). **Living handoff:** [CONTINUE.md](CONTINUE.md).  
**Original full acceptance contract:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`.  
**Official geography:** https://unstats.un.org/unsd/methodology/m49/overview/ archived in `M49_OFFICIAL_SNAPSHOT_20261105.csv` (248 distinct country-or-area rows, not 248 ministries).

## Mission, scope and non-negotiable restrictions

Independent, source-verifiable atlas of governmental and statutory health authorities for **each of 248** UN M49 country/area entries: geographic identity, *competent domestic or delegated authority*, local-language name and marked English translation, date, source issuer/language, organization type, legal and jurisdictional remit, separate bodies/relations, unresolved and historic/source-state flags. Current ministry identity is NOT legal certification of every power. For significant renames, disputed/devolved and delegated jurisdictions, require at least two genuinely independent government/legislative issuers and inspect enacted legal provisions when possible. WHO offices are not national ministries. New or proposed agencies and in-progress transfer procedures are NOT proof of completed transfer. No inferred M49 parent-country delegation without enacted allocation.

**Only change `docs/atlas/handoffs/team-a/` on the existing branch.** Never change `main`, the public website, calculator, ancestry/genetic/clinical content, other teams' documents or patient data. Do not merge or mark PR ready. Preserve source contradictions and prior records; do not truncate older checkpoints.

## Batch 18 — exact audited numbers

| Measure | Result |
|---|---:|
| Country/area M49 skeletons with official matched code, ISO2, ISO3, UN name, region and subregion | **248/248** |
| Principal governmental health-authority **identity** located | **125/248** |
| Principal identities explicitly `UNKNOWN_REVIEW_NEEDED` | **123/248** |
| Distinct government health body rows | **175** |
| Cited within-area organizational relationships | **40** |
| Dated provenance records (includes partial/in-progress checks) | **266** |
| Synchronized area review/coverage records | **248** |
| Unsupported `parent_country_m49` assignments | **0** |

Batch 18 added **5 principal** areas `626`, `630`, `634`, `642`, `646`, **6 government body records** (five principal + Timor-Leste INSP-TL), **one explicitly limited ministerial-portfolio listing** within Timor-Leste, and **13 distinct issuer-specific provenance checks**. Changes made to precisely five normalized data files: `data/countries.csv`, `data/country_coverage.csv`, `data/government_health_bodies.csv`, `data/authority_relationships.csv`, and `PROVENANCE.csv`. UN source snapshot unmodified. All previous 120 identities and source caveats preserved.

## Source-by-source research and legal limits (all reviewed 2026-11-05)

### Timor-Leste (626), `gov-626-001` / `gov-626-002`

- Local Portuguese original **Ministério da Saúde**; English reviewer translation *Ministry of Health*. The official IX Government ministerial composition https://timor-leste.gov.tl/?lang=En-US&p=13 assigns the health/pharmaceutical policy portfolio, epidemic-control coordination, technical support to municipal health services and lists **Instituto Nacional de Saúde Pública (INSP-TL)** separately within the ministerial dependency listing. Distinct institute `gov-626-002` has an explicitly **listing-level verification only**, not a certified complete statutory research/surveillance remit. One within-area link `gov-626-001` → `gov-626-002` is typed `LISTED_IN_CURRENT_IX_GOVERNMENT_MINISTERIAL_PORTFOLIO` to avoid claiming every legal power.
- Independent **Ministry of Justice / Jornal da República**, **19 February 2026** Série I No. 7, p. 165, enacted ministerial Diploma **3/2026**: https://www.mj.gov.tl/jornal/public/docs/2026/serie_1/SERIE_I_NO_7.pdf . Its preamble quotes **Decreto-Lei 46/2023, Article 20** ministerial health/pharmacy policy role, and **Decreto-Lei 51/2023** ministry organics; actual regulation addresses a specific Health Project Management Unit. Examined scanned page 165. Neither current consolidated legal text of the two 2023 decrees nor municipality, RAEOA/Oe-Cusse and Ataúro health powers has been fully audited; original Tetum ministry name pending. Issuer distinction: cabinet executive vs Justice Gazette publication (not two independent full current health laws).

### Puerto Rico (630), `gov-630-001`

- Spanish original **Departamento de Salud**, reviewer English translation *Department of Health*. Current **Puerto Rico government agency directory** https://www.pr.gov/directorio-de-agencias/departamento-de-salud-ds-d lists organic **Ley 81 de 14 marzo 1912**, central regulation and oversight; current departmental website https://www.salud.pr.gov/ shows 2026 health activity.
- **Independent Puerto Rico OGP Virtual Library** fully amended Ley 81 compilation **revised 24 June 2026** https://bvirtualogp.pr.gov/ogp/Bvirtual/LeyesOrganicas/Pages/81-1912.pdf: read Article 1 and dated amendment list; the law expressly excepts **maritime quarantine** from the health secretary's general assigned remit. The separate **Legislative Assembly SUTRA** https://sutra.oslpr.org/prontuarios/leyes-aprobadas/153729 confirms signed **Ley 117-2026 (22 June)** amending Ley 81 Article 5 in emergency professional licensing.
- This is a **territorial authority**, not an independent sovereign ministry. US federal, Medicaid/insurance, municipalities and other island agencies have distinct obligations: no blanket delegation/ownership inferred, and **`parent_country_m49` remains empty** until direct legal allocation reviewed.

### Qatar (634), `gov-634-001`

- Official Arabic local **وزارة الصحة العامة**, official English *Ministry of Public Health*. Government Communications Office's **Arabic current ministerial responsibilities** https://www.gco.gov.qa/ar/state-of-qatar/state-institutions/council-of-ministers/members-of-the-cabinet/minister-of-public-health/ cover public health policy, prevention, healthcare provision, professional and private-establishment regulation.
- Separate **Al Meezan legal portal** English translation of **Amiri Decision 57/2021**, Article 7, https://almeezan.qa/EnglishLaws/572021.pdf gives historically assigned ministry competences; independent **Amiri Diwan** decision issuance https://diwan.gov.qa/en/briefing-room/legislations/2021/october/19/lg02 . Do not assume the 2021 task list remains entirely unchanged.
- **Dated 5 November 2026 Qatar News Agency** https://qna.org.qa/en/news/news-details?date=5%2F11%2F2026&id=moph-commences-transfer-of-food-safety-mandates-to-general-authority-for-food-safety reports **START of procedures** for transfer of food-safety duties to a **General Authority for Food Safety** after Amiri Decision 41/2026. The *full 2026 decree and completion/effective allocation remain unreviewed*. **Do not represent transfer as already completed** or assume that all food safety remains exclusively with MOPH.

### Romania (642), `gov-642-001`

- Romanian original **Ministerul Sănătății**, reviewer translation *Ministry of Health*. Official ministry announcement **20 October 2026** https://www.ms.ro/ro/centrul-de-presa/declara%C8%9Bia-ministrului-interimar-al-s%C4%83n%C4%83t%C4%83%C8%9Bii-cseke-attila/ confirms live ministry and change away from interim ministerial leadership without relying on a guessed current office-holder.
- Distinct Romanian Government legislation portal **HG 144/2010, Articles 1–2 as amended**, https://legislatie.just.ro/Public/DetaliiDocumentAfis/292516 establishes central health authority and health-policy/coordination roles. Legal portal is governmental but the later **2026 consolidated currentness and amendments** require reconfirmation. CNAS, public health institutes, county directorates, local providers and professional regulators still need distinct organic scope checks.

### Rwanda (646), `gov-646-001`

- Official original Kinyarwanda **Minisiteri y’Ubuzima**, English *Ministry of Health*. Current ministry mission https://www.moh.gov.rw/about/overview (also 2026 ministry activities https://www.moh.gov.rw/).
- A separate **Prime Minister's enacted order published by the Republic of Rwanda Official Gazette**: **Order No. 011/03 of 26 February 2024**, **Special Gazette 27 February 2024**, trilingual Kinyarwanda/English/French text https://www.moh.gov.rw/index.php?eID=dumpFile&f=94364&t=f&token=101d032ffc8db643b70902b9f18ea0d61638e487 . Examined **Articles 2–3** in original scanned Gazette: national mission and coordination/responsibility categories. Although hosted on ministry domain, legal **issuer is the Prime Minister and Gazette**, distinct from ministry's own web summary. Detailed post-2024 amendments, districts, RBC and attached authority structure remain pending.

## Independent immutable data readback (PASS; not Python execution)

After writing data commit `6329a090951f5e6fa518fdbfec15764e77bff94e`, retrieved **all five live normalized CSVs** and the unchanged dated official M49 master via GitHub connector at that **exact SHA**. A separate quote-aware parser checked escaped double quotes and per-record fields, exact individual code/ISO2/ISO3/UN name/region/subregion matches for 248 rows, no duplicates; regions Africa 60, Americas 57, Asia 50, Europe 51, Oceania 29 and no UN region 1; **125 identified/123 explicitly unknown**, same-area authority IDs, **175** unique governmental bodies, local-name or explicitly pending flags and source HTTPS/date/language/state, **40** valid non-self within-area cited links, **266** unique provenance IDs and issuer/HTTPS/language/check-date/state, **248** coverage statuses synchronized, **35** complex-system/country/territory sentinels, M49 **535** remains unresolved and all `parent_country_m49` empty. PR confirmed **open DRAFT, unmerged** at validation. **Result PASS structural.** Existing `gov-004-001` intentionally has local-name-pending marker; initial overly strict QA expected a nonempty local name, then rerun using actual repository `validate.py`'s accepted pending flags **passed**.

**Python `python docs/atlas/handoffs/team-a/validate.py`: NOT RUN on Batch 18.** Local `git ls-remote` returned **Could not resolve host github.com**, hence no executable full checkout. A prior Python pass does not transfer to this batch. The successful readback cannot certify external-site availability, post-2026 legislative currency, independent legal delegation or clinical suitability. Do not report any patient-facing/clinical acceptance.

## Unfinished acceptance, next queue, and recovery instructions

All **248** UN M49 skeletons are complete, but **123 area principal identities remain `UNKNOWN_REVIEW_NEEDED`** and even the **125 located identities mostly lack independent, current full statutory/devolved power mapping**. Prior high-risk queue **074 Bouvet, 086 BIOT, 104 Myanmar, 112 Belarus, 192 Cuba, 226 Equatorial Guinea, 239 South Georgia/South Sandwich, 260 French Southern Territories, 275 Palestine, 334 Heard/McDonald, 535 Caribbean Netherlands** still needs full legal research. Additional unresolved in ascending M49 include **624 Guinea-Bissau, 638 Réunion, 643 Russian Federation** and many smaller territories; **626/630/634/642/646 no longer identity-unknown**. For all disputed/devolved/territorial places require genuinely separate legal/government issuers. Examine full enacted legal text for Puerto Rico's US federal quarantine carve-out, Qatar Decision 41/2026 final authority transfer, Romania's current consolidated 2026 changes, Timor-Leste full 2023 organics/municipal division, and Rwanda affiliated institutes and districts.

Preserve prior nuanced exclusions: Hungary and Gabon **draft** acts are not enacted; Guinea cabinet personnel conflict; Comoros ministry test-content/decree title only; Faroes draft pharmacy transfer; Maldives April 2026 rename but tertiary hospital affiliations differ; Malta old portal; Philippines post-1991/UHC local powers; Peru direct source HTTP 418; Poland 2026 legislative **index only**; Portugal enacted Article 23 direction vs autonomous regions; Greenland, Hong Kong, Åland, Mayotte, French territories, Gibraltar, Guiana, Myanmar competing authority, IOT Australian/WA SDA and sovereign/cross-area legal questions. WHO country-office data is not domestic authority proof.

**Resume protocol:** (1) Resolve *live* PR #68 HEAD and read `CONTINUE.md`, this checkpoint, latest `QA_REPORT.md`, `GAPS.md`, `STATUS.md`, five data CSVs and official M49 snapshot, original prompt. (2) Validate current exact dataset, preserve existing rows and source caveats; research official original language/cabinet/gazette/legal sources and independently issued second check when necessary. (3) Commit small source-backed changes **only in Team A directory**, read back **exact immutable data SHA** and run Python validator if checkout becomes available; update docs and a new standalone checkpoint. (4) Leave PR draft/unmerged and website unchanged, return link, exact SHAs and same short continuation prompt.

## Exact short continuation prompt for next session

Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.

Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
