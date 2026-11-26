# Team A — COMPLETE STANDALONE Batch 22 GitHub recovery checkpoint (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
**OPEN DRAFT PR #68 — DO NOT MERGE OR MARK READY:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68
**Existing research branch:** `research/atlas-team-a-20261104`
**Exact independently re-fetched DATA commit:** [`1b861eeece12671b88ae242b387cee2eb26ad3b3`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/1b861eeece12671b88ae242b387cee2eb26ad3b3). Documentation commit is a later child; always verify live branch and PR head before updates.
**Earlier standalone checkpoint with all historic facts/source limitations:** [Batch 21](CHECKPOINT_20261105_BATCH21.md), earlier Batches 1–20 preserved in the same Team A folder.
**Canonical original acceptance contract:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`.
**Archived primary geographic control:** `M49_OFFICIAL_SNAPSHOT_20261105.csv` from United Nations Statistics Division M49 https://unstats.un.org/unsd/methodology/m49/overview/ (checked 2026-11-05).

## Mission and non-negotiable permissions

Create and improve an original-language, authoritative governmental/statutory health-authority census for all **248** official UN M49 areas (including nonsovereign, autonomous, disputed and no-resident territories). A geographic row is **NOT** a certified national ministry; identity identified is **NOT** verification of legal/current responsibilities. Capture the principal health policymaking body, separately record public-health institutes, regulators, data/research agencies and delegated units where officially evidenced, and carefully distinguish state, provincial, municipal, territorial and independent competence. For every assertion maintain exact official URLs, source issuer, language, checked date, geographic remit and verification state. Significant renames, disputed authorities and territorial delegations require at least two actually **independent** legal/government source checks, preferably authentic **enacted and current** acts. Multiple pages repeating one law are not multiple independent statutes; a WHO office is not a domestic ministry; a proposed bill or decree does **NOT** prove law. Never invent parent-country M49 ties.

**Only edit paths within `docs/atlas/handoffs/team-a/` on the existing research branch.** Do not modify `main`, public website/calculator, clinical/ancestry/genetic/patient-facing advice, journal and society research, international networks, other teams, or confidential medical/genomic data. **Leave PR #68 OPEN DRAFT and unmerged.** Preserve all previous batches and historical-vs-current source caveats.

## Verified Batch 22 metrics from immutable GitHub DATA SHA

| Metric | Exact audited status |
|---|---:|
| Official UN M49 geography exact code/ISO2/ISO3/UN name/region/subregion | **248/248** |
| Principal government health authority identities located | **142/248** |
| Explicit unresolved principal identities `UNKNOWN_REVIEW_NEEDED` | **106/248** |
| Separate governmental health authority/body records | **197** |
| Citation-backed same-area organization relations | **44** |
| Distinct dated provenance records including limitations and negative checks | **319** |
| Reconciled area review/coverage ledger rows | **248** |
| Unsupported inferred `parent_country_m49` | **0** |

**Batch 22 addition:** +6 principal identities `728` South Sudan, `740` Suriname, `748` Eswatini, `762` Tajikistan, `764` Thailand and `768` Togo; +6 principal body rows, +19 distinct source records; **0 new organizational edges** because exact legal delegations remain insufficiently proved. Before Batch 22: 136 identities, 112 unresolved, 191 bodies, 44 relations, 300 provenance. This is **57.3% identity coverage**, not completion of statutory mandate review or patient-facing approval.

The DATA commit modifies **only four normalized Team A research CSVs**:
- `data/countries.csv`
- `data/government_health_bodies.csv`
- `data/country_coverage.csv`
- `PROVENANCE.csv`

`data/authority_relationships.csv` and `M49_OFFICIAL_SNAPSHOT_20261105.csv` remain unchanged. QA confirmed the diff is Team A-only. New body IDs `gov-728-001`, `gov-740-001`, `gov-748-001`, `gov-762-001`, `gov-764-001`, `gov-768-001`.

## Batch 22 jurisdiction and source evidence — 5 November 2026

### 728 — South Sudan
**Original English:** *Ministry of Health* (`gov-728-001`). Ministry [About Us](https://www.moh.gov.ss/about-us.php), an official ministry issuer, identifies the national ministry, policy mission, state health ministries and county health departments. Separate [South Sudan government eServices Ministry portal](https://health.eservices.gov.ss/) corroborates ministry identity. The ministry About Us names apparently older personnel; a differently named minister is indexed on a newer ministry home page that returned **HTTP403 on direct open**. **Do not assert current incumbent**. A distinct 3 March 2026 [South Sudan General Medical Council official government site](https://ssgmc.gov.ss/news/view/7) explicitly describes its supervision by the **Ministry of Cabinet Affairs**, so do **NOT** silently add it as a subordinate to Health. State/county legal powers, professional council organic law, and current health ministry statute remain open. Sources: `SSD-MOH-ABOUT-B22`, `SSD-GOV-ESERV-B22`, `SSD-GMC-2026-B22`.

### 740 — Suriname
**Dutch original:** *Ministerie van Volksgezondheid, Welzijn en Arbeid* (`gov-740-001`), reviewer English *Ministry of Public Health, Welfare and Labour*. [Current national government ministry directory](https://gov.sr/ministeries/ministerie-van-volksgezondheid-welzijn-arbeid/) identifies the combined portfolio; [Over ons](https://gov.sr/ministeries/ministerie-van-volksgezondheid-welzijn-arbeid/over-ons/) describes public-health policy and care availability but retains legacy shorter *Ministerie van Volksgezondheid* wording. Dated [4 September 2026 government VWA notice](https://gov.sr/nationale-commissie-veiligheid-gezondheid-en-welzijn-geinstalleerd/) uses the combined portfolio, but concerns an occupational-safety advisory commission, not public-health legal delegation. All three pages share the **same Government of Suriname publishing platform**; **do NOT call them independent issuers or infer exact rename/merger effective date**. Signed cabinet/organic acts, regulator and district duties outstanding. Sources: `SUR-GOV-PORTFOLIO-B22`, `SUR-GOV-ABOUT-B22`, `SUR-GOV-SEP2026-B22`.

### 748 — Eswatini
**Original English:** *Ministry of Health* (`gov-748-001`). [Kingdom government ministry profile](https://www.gov.sz/index.php/ministries-departments/ministry-of-health) publishes health policy/prevention objectives; [Cabinet ministry listing](https://www.gov.sz/index.php?catid=65&id=755&view=article) separately includes the Health portfolio, both same central government. The profile still uses historical *Swaziland* phrasing and its separate Administration page has older-looking personnel; direct ministry-profile open timed out after search-index retrieval. **Neither cabinet rosters nor mission statements prove current officeholders or enacted legal allocations.** Regional statutory responsibilities and 2026 ministry legal instrument pending. Source IDs `SWZ-MOH-GOV-B22`, `SWZ-CABINET-GOV-B22`.

### 762 — Tajikistan
**Tajik original:** *Вазорати тандурустӣ ва ҳифзи иҷтимоии аҳолии Ҷумҳурии Тоҷикистон* (`gov-762-001`), reviewer English *Ministry of Health and Social Protection of the Population of the Republic of Tajikistan*. The [Ministry statute/structure page](https://moh.tj/vazorat/) reproduces Government Resolution No. 148 (3 March 2014, subsequently amended) with national health and social protection policy functions. Independent issuer [Tajikistan Ministry of Justice ADLIA register](https://mmih.adlia.tj/SEARCH/DocumentView?DocumentId=121414&compareid=165473) confirms legal-document identity and an **older 2023 active version**, while indexed text indicates **later amendments through March 2026**; the authentic latest consolidated text has **not** been separately inspected. Separate [national eGovernment ministry directory](https://egov.tj/site/minzdrav-tjk?lang=tg) confirms the broad central executive role; [17 October 2026 ministry account](https://moh.tj/az-faoliyati-vazorati-tandurust-va-ifzi-i-timoii-a-ol-dar-9-mo-i-soli-2026-nati-agir-karda-shud/) corroborates activity and mentions regions. **Critical website-integrity caveat:** ministry statute page displays unrelated gambling/spam links; do not rely on those links or treat the page as an authenticated binding publication. Provincial/GBAO competence and ministry inspectorates unreviewed. Source IDs `TJK-MOH-REG-B22`, `TJK-ADLIA-REG-B22`, `TJK-EGOV-ID-B22`, `TJK-MOH-OCT2026-B22`.

### 764 — Thailand
**Thai original:** *กระทรวงสาธารณสุข* (`gov-764-001`), reviewer English *Ministry of Public Health*. [Official ministry About page](https://moph.go.th/about) and [homepage](https://moph.go.th/) are visible in official search results; About **direct open returned HTTP403**. Official [Office of Permanent Secretary press portal](https://pr.moph.go.th/) posts 2026 ministry activities in Thai and provides a second departmental webpage, **not an independent legislative issuer**. The About page mixes older and 2026 minister/secretary entries; no personnel claim made. Thai BE **2569 = Gregorian 2026**. Current ministry organic law, provinces, Bangkok duties and regulator statutes pending. Source IDs `THA-MOPH-ABOUT-B22`, `THA-MOPH-HOME-B22`, `THA-PR-NOV2026-B22`.

### 768 — Togo
**French original:** *Ministère de la Santé, de l’Hygiène Publique, de la Couverture Sanitaire Universelle et des Assurances* (`gov-768-001`), reviewer English *Ministry of Health, Public Hygiene, Universal Health Coverage and Insurance*. [Current 2026 government ministry portal](https://sante-assurances.gouv.tg/) identifies this current ministry name, but its [Attributions et Objectifs page](https://sante-assurances.gouv.tg/ministere/attributions) is **headings without substantive statute**. Independent [archived Presidency 23 August 2024 cabinet appointment](https://archive.presidence.gouv.tg/2024/08/23/politique-le-chef-de-letat-a-nomme-les-membres-du-nouveau-gouvernement/) used a **different prior health-coverage portfolio**: do not infer 2026 formation date or automatic duties. Another [1 June 2023 Presidency discussion](https://archive.presidence.gouv.tg/2023/06/01/conseil-des-ministres-du-1er-juin-2023-dimportants-projets-de-decret-examines/) concerns a **proposed** decree on State-versus-commune health responsibilities; **not verified as enacted law**. Current signed organic acts, commune health delegations and INAM/CNSS legal responsibilities remain open. IDs `TGO-MINISTRY-2026-B22`, `TGO-ATTR-EMPTY-B22`, `TGO-PRES-HIST-B22`, `TGO-PRES-DRAFT2023-B22`.

## Independent immutable GitHub structural QA

After DATA commit `1b861eeece12671b88ae242b387cee2eb26ad3b3`, retrieved all **six** CSVs afresh from that **exact SHA** (not merely reusing prewrite strings): four updated files, unchanged relationships and unchanged official snapshot. An independent quote-aware CSV parser checked all row widths, escaped quotes, uniqueness, full 248-M49 per-code/ISO/name/region/subregion identity; regional totals Africa 60, Americas 57, Asia 50, Europe 51, Oceania 29, Antarctica unassigned 1; 142 government identity references correctly matched to their 197 bodies; 106 unknowns have no body links; 248 status-aligned coverage ledger rows; 44 same-M49 sourced edges; 319 unique provenance rows with issuer/language/check date/HTTPS/verification state; no inferred parent M49; territorial/complex-jurisdiction sentinels such as Antarctica, Myanmar, Belarus, Caribbean Netherlands 535, Palestine 275 and new Batch 22 areas preserved. Compared immediate previous HEAD `47967869e4513bb05636deb49d82efce482a0ce5` to DATA commit and found only the four named Team A CSV edits. **PASS structural/integrity only.**

The repository Python `python docs/atlas/handoffs/team-a/validate.py` **WAS NOT RUN** against Batch 22: sandbox `git ls-remote https://github.com/...` returned `Could not resolve host: github.com`. An independent GitHub connector CSV parser is not a Python test pass. No full current legal powers or independent issuer completion certified. These are **not clinical/patient-facing** records.

## Unfinished original acceptance and ordered next priorities

1. **106 unresolved principal identities**, not evidence of absence. Immediate remaining ascending unknowns/high-risk include `010` Antarctica, `074` Bouvet, `086` BIOT, `104` Myanmar competing effective/recognized systems, `112` Belarus, `192` Cuba, `226` Equatorial Guinea, `239` South Georgia, `260` French Southern Territories, `275` Palestine, `334` Heard/McDonald, `535` Caribbean Netherlands, then `706` Somalia, `729` Sudan, `732` Western Sahara, `744` Svalbard/Jan Mayen, `776` Tonga, `780` Trinidad and Tobago, `784` UAE, `792` Türkiye, `800` Uganda, `804` Ukraine, `807` North Macedonia, `818` Egypt, `834` Tanzania, `894` Zambia (and other actual remaining unknown codes). Review sensitive disputed regimes as multiple institutions and distinct effective control; do not simplify to a single falsely universal authority.
2. **142 identified principals do not yet satisfy all legal/territorial statutory acceptance criteria.** Focus newly added 728 state/county and SSGMC Cabinet Affairs; 740 rename; 748 dated legal acts; 762 ADLIA authentic 2026 text and site integrity; 764 historic vs current cabinet and Bangkok/local responsibilities; 768 modern organic decree and proposed-vs-enacted commune powers. Earlier batches also need signed enacted law, independent issuers and delegation. Preserve **all** Batch 1–21 caveats in linked prior checkpoint: Slov-Lex binding PDF uninspected, Viet Nam Decree 313/2026 enacted vs 42/2025 superseded but signed PDF unread, Slovenia October **draft**, Qatar transfer started not completed, Seychelles future Dec1 personnel, Comoros template blocks, Faroes/Gabon/Hungary **drafts**, Guinea cabinet conflict, Bosnia cantons/Brčko, Pacific territories and no-resident areas, legal force vs actual control.
3. Mapping independent health agencies and valid legally limited organizational relations remains incomplete. No edge/parent M49 inferred from mere same-domain listings. All original 248 geographic skeletons retained.

## Recovery, writes and validation protocol

1. Read **this entire checkpoint** first, then `CONTINUE.md`, `GAPS.md`, `QA_REPORT.md`, `STATUS.md`, `CHANGELOG.md`, `README.md`, the **five** normalized CSVs, six-file official M49 control, and the original `TEAM_A_GOVERNMENT_CENSUS.md` acceptance contract. Re-fetch live PR #68 head and compare to last checkpoints; another agent might have added work.
2. Use original-language official ministry, independent justice/gazette/parliament/government sources; capture issuers, checked date, exact URL, geographic legal scope, source failures, effective-vs-historical and draft status. Separate identity check from legislation/full powers; keep unresolveds as `UNKNOWN_REVIEW_NEEDED`.
3. Commit manageable **Team A-only** research batches on the same branch, preserving previous rows/old caveats; do **not** change PR draft status, merge, or modify the site. Validate each data commit by independently re-fetching exact SHA six CSVs, quote-aware parse and full M49/reference/status/source checks. Execute `validate.py` when runnable and report truthfully if not.
4. Add new fully standalone checkpoint and update all six handoff documentation files without removing historical evidence. Include complete sources, counts, live DATA and docs SHAs, caveats and **repeat the exact continuation prompt** at end.

## Same short continuation prompt for next run

```text
Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.

Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
