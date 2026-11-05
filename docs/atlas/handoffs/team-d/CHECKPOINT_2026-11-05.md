# Newest standalone Team D handoff — Batch 15 (2026-11-05)

The current complete standalone checkpoint is CHECKPOINT_BATCH_15_2026-11-05.md:

https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/research/atlas-team-d-20261104/docs/atlas/handoffs/team-d/CHECKPOINT_BATCH_15_2026-11-05.md

The Batch 14 material retained below is a HISTORICAL checkpoint. Batch 15 adds WHO Europe SCI date-separated roster evidence (12 current participation edges, 23 older/current source observations), nine WHO office source checks (four dated 2026, five undated), and twelve new first-party URLs. Current totals: 47 network nodes, 586 typed links, 145 provenance URLs. Revised checked-in validator has not been fully executed for this batch. All earlier historical/current boundaries remain applicable. Fetch live branch head before writing.

---

# Standalone Team D checkpoint — Batch 14 (2026-11-05)

**Project:** Ancestry Health — independently sourced cross-border health-authority research, not a diagnostic or clinical recommendation engine.
**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Research branch:** `research/atlas-team-d-20261104`  
**Draft PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 — verified open/draft/unmerged immediately after the Batch 14 data commit.  
**Batch 14 data + structural validator commit:** `6c86061d9b6742780aa8badf95a6a596d6aae1a7`. This standalone checkpoint is in a later documentation commit; independently verify the newest head on every restart.  
**Original assignment:** `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`.

## New Batch 14 findings and exact files

All work remains inside `docs/atlas/handoffs/team-d/`:

- `data/paho_governance_categories_2026.csv`: **44 PAHO official formal categories** (35 member states, three *participating* states France/Netherlands/UK, four *associate* members Aruba/Curaçao/Puerto Rico/Dutch Sint Maarten, two *observer* states Portugal/Spain), with individually recorded published admission date or **month-only** precision. The 35 full-member links already existed. **Nine previously missing distinct typed graph links** now classify non-full-member roles. Official category/admission roster: <https://www.paho.org/en/planning-finance-and-accountability/member-states-pan-american-health-organization>; independent 35/4/3/2 summary: <https://www.paho.org/en/partnerships>. No WHO constitutional membership or sovereign legal authority is inferred from PAHO status.
- `data/paho_technical_cooperation_2026.csv`: **21 independently named M49-area PAHO/WHO office-service observations**, linked through **21 new `receives_technical_cooperation_from`** edges to already-existing office nodes: 14 Barbados/Eastern Caribbean, two Jamaica (Bermuda, Cayman Islands), one Bahamas (Turks and Caicos), four Trinidad/Dutch Caribbean (Aruba, Curaçao, Dutch Sint Maarten, and **one combined M49 535** for Bonaire/Sint Eustatius/Saba). PAHO's **dated 2026-08-24** Eastern Caribbean notice supports 14 and uniquely includes **French Saint Martin (M49 663)**; an **undated** office overview enumerates only 13 and omits it. This is a source-document discrepancy, **not proof of an August 2026 accession or service starting date**. Dutch Sint Maarten (M49 534), covered from Trinidad, is a different jurisdiction. The other three PAHO office pages are undated; **2026-11-05 is a check date, not an asserted effective date**. An office serving a jurisdiction does not prove a WHO physical office within it, PAHO sovereign membership, WHO regional assignment, domestic legal mandate, country guideline adoption, or continuous operation.
- `data/network_memberships.csv`: **30 newly typed links**, now **574**; its pre-existing **225 historical** WHO 2021–2022 office/service relationships remain untouched, still source-as-of the WHO 2023 report, not promoted to April/November 2026.
- `PROVENANCE.csv`: eight new first-party PAHO indexed URLs, **TD-SRC-126–133**; **133 unique URLs**. Public indexed source text was available through search, but direct site-open returned HTTP 403 for several PAHO pages; the new provenance rows explicitly mark **`OFFICIAL_SEARCH_INDEX_TEXT_DIRECT_OPEN_403`**. Re-fetch and inspect authoritative pages independently before production approval. This is *source-level institutional verification with retrieval limitation*, not confirmation of statutory legal effects.
- `validate.mjs`: new assertions for 44 mutually exclusive category codes, published date precision, all 21 service M49/office source links, and non-conflation of French Saint Martin and Dutch Sint Maarten. Every new graph edge has a source-ledger URL.

## Complete retained snapshot at Batch 14 data commit

| Item | Recorded quantity / status |
| --- | --- |
| International and programme nodes | 46 |
| Typed source-stamped graph links | 574, of which 30 added Batch 14 |
| Seven discovery-only condition keys | 20 institutional references across `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`; *not clinically appraised* |
| M49/ISO seed candidates | 249; 248 official UN M49 rows plus one explicit retained exception `158` |
| WHO administrative region assignments | 205 primary-source-verified; 44 `not_verified`, including French Saint Martin (663), Dutch Sint Maarten (534), and Liechtenstein (438) |
| Current-survey-era WHO office findings | 153 roster labels: 106 April 2026 office-head responses, 46 retained September 2024 responses, one unavailable; 105 M49 hosts with April 2026 affirmative evidence; 144 candidates without equivalent positive evidence—not proof of absence |
| Separate historical 2023 WHO presence report | 228 Jan 2021–Dec 2022 service records and 225 *historical* graph links; not current office operation |
| EMA/EMRN human-medicines authority directory | 34 unjoined NCA identity candidates in 30 jurisdictions, legal remits not verified |
| PAHO HEARTS catalog | 24 pathway titles; 22 local and two generic, without inferred official national adoption |
| Aggregate public-health programmes | Five separate PAHO/AFRICA CDC aggregate facts, including APPM eight MoUs/15 intent/55 target and HEARTS 29 initial national standards vs 35 separate commitments |
| ASEAN health-sector roles | Six published governance/workstream rows without per-country clinical/law adoption |
| Egypt regulator/partner evidence | 19 agreement observations, mainly EDA government dev-domain self-report; legal instruments and statutory effects not verified |
| New PAHO data | 44 category records / 21 dated-or-check-dated service links |
| Unique provenance links | 133 |

**Original acceptance criteria:** Six WHO administrative offices and dated transitions covered; 10+ documented cross-border relationships; 10+ documented negative/boundary cases; source-linked typed edges with historical preservation. The *broader research completeness objectives* remain unfinished; these structural counts are not an independent source-law or scientific appraisal.

## Validation — checked, with precise limitations

- At the Batch 14 data SHA `6c86061d9b6742780aa8badf95a6a596d6aae1a7`, full checked-in `validate.mjs` structural assertions **PASS** when run in an isolated JavaScript **read-only filesystem shim** against **23 CSV inputs** reconstructed from the actual 36-file live PR diff. The data commit initially had 34 pre-existing files plus two new CSVs. Validator recorded 46 nodes, 574 links, 205/44 WHO region statuses, 105 recent affirmative WHO host areas, 228 separate historical service records, 44 PAHO governance rows, 21 technical-cooperation rows, 133 provenance URLs.
- **Post-commit independent readback:** the two new PAHO CSVs, expanded network graph, provenance ledger and validator were fetched individually from the GitHub branch; every one **matched the PR diff reconstruction byte-for-byte**. Full structural validator assertions passed again. This is **not a literal `node` CLI run, not a GitHub Actions result, and not a proof of agreement authenticity, clinical validity, treaty effects, or continuous office presence**.
- The Batch 14 commit changed exactly five Team D research paths. No `main`, public website, other research teams' files, human health recommendations, issue states or PR merge were changed. This document is a standalone handoff while PR #70 remains draft for human/scientific review.

## Outstanding research and next safe steps

1. Independently re-open the eight PAHO institutional source URLs and establish which version/date controls the **13 vs 14** Eastern Caribbean service roster; do **not** treat 2026 publication as a service-effective date. Verify regional technical-cooperation offices independently from physical local WHO offices, and if necessary update only evidence-qualified typed relationships. Do not conflate M49 663 French Saint Martin, M49 534 Dutch Sint Maarten or combined M49 535 BES islands.
2. Work through the **44 unresolved WHO administrative regions**, **46 older 2024 survey responses**, and 144 candidates lacking affirmative April 2026 host evidence. No inferred region/office absence from silence or historical coverage. Preserve WHO 2021–2022, September 2024, April 2026, and November 2026 *check dates* as separate.
3. Identify original EDA signed instruments (17 bilateral plus distinct 2025 eight-party MoU), 2026 Algeria cooperation and UPA–Africa CDC APPM support independently; national competence statutes, effective dates and **exact Team A identity** joins. Egyptian state APPM MoU remains a distinct third instrument.
4. Individually source the **seven remaining unnamed** APPM signed states, all 15 intent-country identities, local HEARTS national version adoption and ASEAN 2026–2030 work-plan implementation; do not infer participation from programme target or meeting rosters.
5. Verify EMA/EMRN NCA agency-specific statutory remits and exact Team A IDs, societies and specialist links with Team B, journals/condition evidence with Team C, and less-visible condition research networks with bounded source appraisal. No patient-facing or ancestry-derived medical claims.
6. Keep commits confined to Team D, recheck PR head before writes and compare changed paths; retain standalone GitHub checkpoints and **never** merge PR #70 or modify the website.

## Same user continuation prompt for the next session

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```

---

# Standalone Team D checkpoint — Batch 13 (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Dedicated branch:** `research/atlas-team-d-20261104`  
**Existing draft PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 — verified open/draft/unmerged for this batch  
**Checked-in data and structural validator SHA:** `59ae6fcd79fefb1723d634f7c1091666c267fa4d`  
**Important:** this checkpoint is in a *later documentation commit*; retrieve live head and PR state on each restart. Intermediate data commit `1809d1404899e5d06babb2d588eb2242e856b5aa` contains incorrect validator regex and is superseded by the SHA above.

## New work, all inside Team D

1. `data/regulatory_cooperation_evidence_2026.csv`: **19 primary-source-qualified reported relationships**, each with stable ID, named parties, M49 or explicit multilateral no-code, date/precision, relationship type, issuer/independent source, pending cross-team identity join and unverified statutory effect. **17 dated bilateral Egyptian Drug Authority (EDA)–foreign regulator MoUs**, one **2025-06-25 multilateral eight-authority regulatory-cooperation MoU** (Egypt, Tanzania, Ghana, South Africa, Senegal, Rwanda, Zimbabwe, Nigeria), and one **2026-06-15 UPA–Africa CDC partnership to support APPM operations**. Three bilateral MoUs have month-only dates (Zambia June 2024; Rwanda August 2024; Türkiye February 2026). The EDA government **development subdomain** (<https://dev.edaegypt.gov.eg/en/about-us/foreign-affairs-and-international-memberships/>) is the issuer's claim and is not itself a signed instrument or verified production registry. Africa CDC's dated ExCon report (<https://africacdc.org/download/africa-health-excon-2026-report/>, published 2026-09-17) independently confirms the **Egypt–Algeria EDA–ANPP** agreement and **UPA–Africa CDC** APPM-support partnership, distinct from Egypt's **state APPM MoU** already in the graph. No inferred current implementation, delegated medicines registration, statutory mutual recognition, or national drug approval.
2. `data/who_region_boundary_evidence_2026.csv`: **one direct WHO source boundary**, M49 `438` Liechtenstein. WHO/Europe's **2025-11-05** Protocol report (<https://www.who.int/europe/news/item/05-11-2025-pan-european-protocol-on-water-and-health-at-20--promoting-resilience-amid-global-crises>) explicitly contrasts **53 WHO European Region Member States** with Liechtenstein in the broader pan-European remit. This is evidence **against silently assigning WHO European Region membership** based on geography, IHR reporting or protocol participation. M49 438 remains `not_verified` in WHO region table; it has not been assigned another WHO region.
3. `PROVENANCE.csv`: **TD-SRC-123–125** for Africa CDC report, EDA issuer register and WHO regional distinction; **125 distinct URLs**. Expanded `validate.mjs` with structural assertions for 19 regulator agreement observations, one WHO boundary, URL ledger membership, M49 validity and unknown WHO region preservation. Updated status, history, gaps, boundary examples and restart instructions.

## Complete retained research snapshot

- **46 institutional programme/network nodes; 544 date/source-stamped typed relationships** (unchanged by Batch 13). At least ten documented cross-border relations and at least ten negative/boundary cases are preserved. All seven non-appraised institutional condition discovery keys: `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`. These records do not validate any clinical claim.
- **249 retained M49/ISO seed candidates**: 248 UN M49 overview rows and one separately retained 158 exception; **205 direct-source verified WHO regions / 44 not_verified**. Six WHO regional offices; Indonesia's 2025-05-23 move SEARO→WPRO retained; WHO constitutional U.S. governance remains pending. Liechtenstein's non-member boundary does not reduce the 44 unassigned region records.
- WHO office survey **153 profiles** with **106 April 2026 reports, 46 September 2024 retained responses and one unavailable**; **105** distinct M49 hosts with direct April 2026 affirmative presence evidence and **144** others without equivalent positive evidence (**unknown, not absent**). Four exceptional office labels remain deliberately not mapped to M49.
- Separate WHO *2023 country presence report* documents **228 historical office/service records for January 2021–December 2022** and **225 historically typed graph links**. They are **not** current November 2026 or April 2026 office status, nor are regional-office focal points equivalent to physical offices.
- **34 EMA-listed medicines NCA identity candidates in 30 countries**, exact statutory remits and Team A joins pending. **24 PAHO HEARTS catalog titles** (22 local, 2 generic), and **five aggregate programme observations** (APPM eight signed / 15 intent / 55 target, PAHO 29 v1 national standards vs 35 differently-defined programme commitments); no invented country identities or v2 adoption. **Six ASEAN health governance roles/workstreams**; no national 2026–2030 programme implementation inferred.
- **Provenance 125 unique URLs**, including new EDA dev-site provenance caveat. All institutional agreements remain distinguishable from membership, national law, regulatory approvals, published clinical guidance, ancestral population and the seven health keys. No patient-facing or website changes.

## Validation and GitHub scope

At data/validator SHA `59ae6fcd79fefb1723d634f7c1091666c267fa4d`, all existing `validate.mjs` structural assertions **PASS** against **all 22 CSV inputs** reconstructed from the complete live 34-file GitHub PR diff and a read-only JS filesystem shim. Confirmed that reconstructed **validator, new regulatory data and provenance ledger match their separately fetched GitHub versions exactly**. Separately checked new CSV widths, 125 unique provenance IDs/URLs, 19 unique regulatory IDs, M49 codes and precision, and unchanged Liechtenstein `not_verified` assignment. This is **not literal Node CLI/Actions execution** and **not legal, clinical, effectiveness, treaty or signature authenticity validation**. Run a native Node CLI check separately in a Node-capable checkout when available.

Every changed path is under `docs/atlas/handoffs/team-d/`; no `main` ref update, website, issue closure, other team file, clinical output or merge. The original draft PR remains subject to maintainer/scientific review.

## Outstanding work and safe continuation

1. Obtain original EDA MoUs (including eight-party full signatories and EDA/ANPP instruments), canonical agency production-domain corroboration, in-force dates, national competence laws and *exact* Team A authority IDs before mapping true legal regulator edges. Treat dev-site reports as a limited source tier.
2. Verify the remaining **seven unnamed APPM MoU signers** and **15 expression-of-intent** identities from first-party dates; distinguish the three Egyptian instruments. Never infer 55-target participation or executed procurement.
3. Investigate **44 unresolved WHO regions** using direct WHO area-specific sources (including Liechtenstein), **46 older WHO office survey records** and 144 geographic candidates without April 2026 affirmative presence evidence; do not convert lack of attestation to absence. Preserve 2021–2022 historical vs 2024 vs April 2026 metadata boundaries.
4. Resolve EMA/EMRN agency statutes, exact country programme rosters for ASEAN health 2026–2030, individually named HEARTS first-version national adoption and local editions, and Team B/C evidence joins. Preserve 10+ negative examples, historical membership transitions, explicit unknown states and seven condition-discovery network keys. **No publication of medical/ancestry recommendations.**

**Next session:** independently read newest `CONTINUATION_PROMPT.md`, this checkpoint, latest `STATUS.md`, `GAPS.md`, `PROVENANCE.csv`, full Team D data and `validate.mjs`; original `TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` from `research/atlas-five-team-handoff-prompts-2026-11-04`; and PR #70 head/status. Commit only scoped validated evidence with expected-head branch updates. Do not merge or modify the site.

**Repeat this continuation prompt verbatim:**

Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.

---

# Latest standalone Team D checkpoint — Batch 12 (2026-11-05)

**Project:** Ancestry Health, independent cross-border institutional research atlas. **Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Branch:** `research/atlas-team-d-20261104`  
**Existing review:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 — open/draft/unmerged at this checkpoint.  
**Data and full structural validator commit:** `f430ad45e83ae183656ba468648d2f0e4123f382`.  
**Batch 12 status/batch-log/gap/validation documentation commit:** `96737488e38afec2e614cc0c8e71023e4473ef17`.  
**Scope:** `docs/atlas/handoffs/team-d/` only; no main or live website or other teams' directories modified. GitHub is the source of truth; always recheck live branch head and PR state after this document is committed.

## Batch 12 independently source-verified contributions

1. **Egypt's APPM MoU:** Africa CDC's official **15 June 2026** announcement identifies Egypt as its **first AU Member State to sign the APPM MoU**; the Egyptian Unified Procurement Authority chair signed for the Egyptian government. Its exact independent participation edge is `m49:818 → AFRICA_APPM`, type `signed_participation_mou`, valid_from/as_of `2026-06-15`, valid_to `unknown`. Evidence: https://africacdc.org/news-item/egypt-joins-african-pooled-procurement-mechanism-appm/ (TD-SRC-119). Do not convert an MoU to active national procurement, statutory medicines licensing, medicine approval, or clinical guidance.
2. **APPM programme identity:** New source-verifiable `AFRICA_APPM` institutional node and programme-to-`AFRICA_CDC` `operated_by` edge. AU Assembly endorsed mechanism **February 2024**; Africa CDC describes itself as leading it. Official programme: https://africacdc.org/appm/ (TD-SRC-120). Africa CDC's **15 October 2026** report says **8** AU state MoU signatories, **15** intent expressions and an eventual **55-state target**; aside from separately sourced Egypt, country identities are not identified by that aggregate announcement. National regulators still oversee national product approvals. Aggregate source: https://africacdc.org/news-item/africas-pooled-procurement-mechanism-seeks-to-lower-medical-product-costs/ (existing TD-SRC-118).
3. **ASEAN health structure:** New `data/asean_health_governance_2026.csv` with **six separate official sector roles**: ASEAN Health Ministers' Meeting (AHMM), Senior Officials' Meeting on Health Development (SOMHD), and four Health Clusters (AHC1 healthy lifestyles, AHC2 all hazards/emerging threats, AHC3 health systems/access, AHC4 food safety). The official priorities page places these clusters under an **ASHA 2026–2030** programme heading alongside earlier work-plan cycles. These are sectoral coordination/portal-listing facts, **not** state-by-state project participation, current focal-point membership, binding national health law or patient-specific guidance. Sector source: https://asean.org/our-communities/asean-socio-cultural-community/health/ (TD-SRC-121). Priorities source: https://asean.org/our-communities/asean-socio-cultural-community/health/priority-areas-of-cooperation/ (TD-SRC-122). The sector overview still refers to ten member states in older material; the separately source-verified 2025 Timor-Leste ASEAN accession and its membership graph must not be reversed using that stale sentence.

## Complete preserved dataset inventory, counts and caveats

- **46 international/WHO/programme nodes**, **544 typed and source-stamped graph edges**; **20 institution-level references** covering `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis` (not a clinical appraisal).
- **249 retained geographic/ISO seed candidates**, **248 official UN M49 crosswalk areas** and one explicit seed exception `158`. **205** independently verified WHO administrative-region assignments; **44** still `not_verified` and queued. Six WHO regional offices included. UN statistical region, WHO region, WHO governance, WHO physical office and institution membership must remain separate. Indonesia moved from SEARO to WPRO effective **23 May 2025**; some old WHO CPCD references conflict and are not promoted. U.S. WHO governance unresolved.
- **153** WHO April 2026 dashboard office roster labels: **106** April 2026 office-head responses, **46** retained September 2024 survey results and **one** unavailable. **105** distinct M49 area hosts have affirmative April 2026 self-reported office evidence; **144** others lack such direct evidence (unknown, not absent). Four operational/multicountry labels not forced into M49 joins. Office presence is not a present-day continuous-operations guarantee.
- WHO's **2023 presence report** covers **January 2021–December 2022**. Its **228** historical physical office/MCO/focal-point service observations and **225** typed historical graph edges are **not** 2026 office statuses.
- **34** EMA listed NCA identity candidates in **30** EU/EEA areas; legal powers and exact Team A registry IDs still pending. No automatic national medicines-regulator edges.
- **24** PAHO HEARTS clinical-pathway catalog titles (**22** local, **two** regional standards) and **five** strictly aggregate programme observations. Three Mexico documents are **subnational**; PAHO's `DOMINICA REPUBLIC` title is deliberately unjoined. PAHO's May 2026 **29** first-version national standard adopters differ from its undated **35** initiative commitments; neither confirms any named country adopted HEARTS **2.0**.
- **122 unique provenance URLs**, with TD-SRC-119–122 newly added in Batch 12. No new condition-level efficacy claim, genotype inference, prescription, clinical recommendation or public website change.

## Validation and durable GitHub state

The full checked-in `validate.mjs` structural assertions **PASS** at data SHA `f430ad45e83ae183656ba468648d2f0e4123f382`. Implementation: isolated JavaScript execution with read-only file-read shim, **19 CSV inputs fetched at the exact GitHub data commit plus one exact source-equivalent authored ASEAN governance fixture** (to remain within connector call limits). Result: 46 nodes, 544 edges, 20 condition records, 249 statuses, 205 verified/44 unknown regions, 105 affirmative April 2026 offices, 153 mixed-date survey labels, 34 EMA candidates, 228 historical records, 122 unique provenance URLs, 24 PAHO catalog titles, five programme observations, six ASEAN governance rows. **All five new data/validator paths were independently re-fetched from GitHub** and their updated row counts and source IDs confirmed. This is **not** an assertion that a literal Node CLI command or GitHub Actions ran, or that legal mandates/clinical claims were approved. For independent local validation run `node docs/atlas/handoffs/team-d/validate.mjs` in a Node-capable checkout.

## Remaining original-assignment acceptance work

1. Find direct individual WHO evidence for all **44 unresolved regions**, without extrapolating territories from parent governments or statistical UN geography. Separate Bermuda conflict, Liechtenstein roster omission and stale Indonesia listings.
2. Recheck the **46** WHO September-2024 office survey records for new genuine office-specific sources; audit address, type, MCO/local physical presence, liaison versus focal point, and the **144** other candidate areas without affirmative April-2026 survey records. Unknown does not mean absent.
3. Identify other **seven named APPM signers** and **15 intent countries**, independently date their MoU/intent sources, and verify the Egyptian UPA legal identity/remit with Team A before precise authority joins.
4. Verify country-specific **ASEAN 2026–2030 health programme** participation/focal points, adopted work plans and statutory effects instead of assuming that any of 11 ASEAN members locally implemented the agenda.
5. Verify EMA/EMRN **per-agency statutory remits** and exact joins to Team A, specialized organization relationships to Team B, and evidence to Team C; verify PAHO HEARTS **29 country adopter identities** and current local pathway editions, while separating adoption, catalogue, PAHO advice and national legislation.
6. Maintain at least ten boundary cases, temporal histories, explicit unknowns, provenance and all seven non-clinically-appraised condition discovery keys. This remains a **draft research deliverable for maintainer and scientific review**.

## Mandatory next-run protocol

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md`, this file, `STATUS.md`, `GAPS.md`, `PROVENANCE.csv`, `data/*.csv`, and `validate.mjs` at **the latest live branch head**, plus the original `TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`. Verify PR #70 open/draft/unmerged. Work only inside Team D; source and date every record. Use expected-head branch writes; re-fetch changed artifacts and validate. Do not modify the website, main, issues, other teams' work or clinical deployment. If still unfinished, commit a new standalone GitHub checkpoint.

**Repeat the user's continuation prompt verbatim at the end of every run:**

> Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.
>
> Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.
>
> Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.
>
> If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.


---

# Latest standalone Team D checkpoint — Batch 11 (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Research branch:** `research/atlas-team-d-20261104`  
**Existing draft pull request:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 — open/draft/unmerged at source verification.  
**Validated data/validator commit SHA:** `e430702b371b9393603c94f7fc40f9712f61d378` (the subsequent documentation commit changes branch head; always fetch live PR/head first).  
**Restart instructions:** `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md`.  
**Original assignment:** `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`.

## New independently sourced data and preserved distinctions

- `data/hearts_pathway_catalog_2026.csv`: **24** official PAHO catalog records, **18** source-listed on catalog page 0 and **6** page 1. Two are regional templates (18 Jul 2024 and 8 May 2026); **22** are local 2024 catalog labels. Three represent Mexico **subnational** pathways (Sonora, Yucatán, Chiapas) rather than a national Mexico pathway; Bermuda (060) and British Virgin Islands (092) are area/territory labels; PAHO's “DOMINICA REPUBLIC” is deliberately **not_verified M49** pending exact source identity review, distinct from Dominica 212. Index publication ≠ country legal adoption, national guidance approval or clinical appraisal.
- `data/cross_border_programme_evidence_2026.csv`: **five aggregate provenance-linked programme observations**. Africa CDC APPM official 15 Oct 2026 announcement: **8 MoU signatories**, **15 expressions of interest**, **55-state coverage target**; no signatory identities cited, so no country graph links. PAHO official 15 May 2026 announcement: first HEARTS pathway version adopted nationally in **29** countries (names not supplied). Undated PAHO programme page: **35** countries committed to the initiative (date/denominator distinguished). None establishes that particular countries adopted the 2026 HEARTS 2.0 standard.
- **Four new unique original source URLs** TD-SRC-115 through 118; total `PROVENANCE.csv` **118**. PAHO general site already TD-SRC-024: the duplicate URL detected by validator was removed in correction commit `e430702b371b9393603c94f7fc40f9712f61d378`.
- Research data commit `e3959112ad1095c7f0e0c202d323cd3190a1670e`; uniqueness repair/validated data commit `e430702b371b9393603c94f7fc40f9712f61d378`. No original records were overwritten; no new regulator or programme country-member edge asserted.

## Exact preserved baseline and validation

**45 network nodes, 542 typed sourced edges, 20 non-clinically-appraised seven-condition institutional references.** Geographic 249 ISO-seed candidates / 248 official UN M49 overview rows / special seed exception 158. **205** verified WHO administrative regions and **44** unresolved; all six regional offices. **153** current-dashboard WHO source labels: **106** office-head April 2026 survey entries, **46** retained September 2024, **one** without data. **105** affirmative M49-coded April-2026 WHO host-office evidence entries; other **144** candidates lack equivalent recent affirmative source evidence (not evidence of absent office). **228** 2023 WHO report office/service records refer to **Jan 2021–Dec 2022** and retain **225** typed historical graph links, not silently upgraded to 2026. EMA **34** human-medicines national-competent-authority candidates across 30 areas, with all agency-specific legal remits and Team A identity joins pending.

**PASS:** fetched and ran the *full checked-in* `validate.mjs` structural assertions against **19 GitHub-hosted CSV files**, using a JavaScript read-only-filesystem shim at `e430702b371b9393603c94f7fc40f9712f61d378`; new rules cover PAHO and APPM rows, unique source IDs/URLs and M49 boundaries. This is **not** a literal Node shell run, Actions/CI result, statutory remit validation, national adoption claim or clinical appraisal. Full latest report in `VALIDATION.md`.

## Explicit unresolved research

1. All **44** remaining WHO regional assignment records must receive direct WHO country/area evidence before promotion; no parent geographic inheritance. Bermuda WHO regional CPCD label and Indonesia's stale CPCD SEARO listing remain conflict-only; Indonesia transfer to WPRO effective 2025-05-23 preserved. US WHO constitutional governance remains pending.
2. **46** WHO office records retained from September 2024 need individual later evidence; **144** geographic candidates lack an April 2026 affirmative country-office survey record. Do not reinterpret Jan 2021–Dec 2022 WHO historical Annex 2/3/4 coverage as November 2026 office operation; MCO, liaison, focal-point and physical host differ.
3. Identify **eight actual APPM signatories** and 15 intent countries before any signed/expressed-intent country edges, and verify legal authority of each participant; current source gives only counts.
4. Identify national HEARTS v1 adopters (**29 aggregate**) and separate programme commitments (**35 undated aggregate**), check local ministry versions, dates, publishing vs legal adoption, and distinguish 2026 HEARTS 2.0 availability from country adoption. Confirm identity for source typo “DOMINICA REPUBLIC”. No individualized health advice.
5. Complete per-agency EMA/EMRN national legal remits and exact Team A joins, ASEAN health programme participants, Africa CDC/AU programme identity, professional society links to Team B, local HEARTS editions and study appraisal to Team C only where documented.

## Branch scope and restart

**Only `docs/atlas/handoffs/team-d/` is editable.** No main, live website, calculator, clinical recommendations, cross-team datasets, research issue closure or merge. PR #70 stays draft for maintainer review. Use the GitHub live head, source dates and expected-head ref updates. Validate and re-fetch every changed artifact after each batch; continue until all original acceptance criteria are reviewed.

**Repeat this exact next prompt at end of each run:**

> Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.
>
> Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.
>
> Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.
>
> If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.

---

# Team D — Standalone GitHub continuation checkpoint (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Branch:** `research/atlas-team-d-20261104`  
**Draft PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 (open, draft, unmerged at last verification)  
**Research-data and validation snapshot SHA:** `43b1743a1d01be065530c0a0c2b1996fcc9a5986`. This checkpoint documentation is committed *after* that data snapshot; always re-fetch the live branch head and PR status before any new write.  
**Restart file:** `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md`.

## Preserved scope

Only `docs/atlas/handoffs/team-d/` files were changed. Do not edit main, the calculator or website, other research teams' folders, research issue states, or clinical recommendations; do not merge PR #70. This is an institutional network/source graph for educational discovery, **not** evidence of legal membership or clinical effectiveness, not a diagnostic device. Ancestry is not a proxy for geography, country jurisdiction, biology or network membership.

## Current research artifacts

- `data/international_networks.csv`: 45 organization/programme/WHO office nodes.
- `data/network_memberships.csv`: 542 typed and sourced institution/area relations; no invented national regulatory joins.
- `data/condition_networks.csv`: 20 source-linked institutional discovery records across the seven application health keys; none clinically appraised by inclusion.
- `data/m49_network_status.csv`: 249 retained ISO-seed candidates, of which **205** have independently verified WHO regional assignments, **44** remain `not_verified`. All six WHO administrative regions are represented. UN official M49 roster is **248** separate entries, with ISO 158 retained as a seed exception. Indonesia's 2025-05-23 WPRO transition is preserved; WHO governance and statistical UN regions remain separate.
- `data/who_region_unresolved_queue.csv`: 44 individual unresolved WHO region records; no inherited parent/territory region.
- `data/who_office_coverage_2023.csv`: **228 historical WHO office/service/focal-point records** sourced from the 2023 publication reporting on January 2021–December 2022; 225 historical M49 graph edges. These cannot be labelled 2026 office status.
- `data/who_office_survey_roster_2026.csv`: **153 WHO office profile labels** from the newer WHO dashboard: **106** office-head survey responses from April 2026; **46** retained from September 2024; **one** missing survey response. **149** exact normalized UN-M49 identity joins; **four** unjoined operational/multi-country office labels (Barbados/Eastern Caribbean MCO, South Pacific MCO, oPt office, Pristina). No political M49 inference.
- `data/who_country_office_presence.csv`: **105 distinct affirmative M49 office-host records** with April 2026 source support (including ten pre-existing regional attestations); **144/249** seed candidates have no equivalent recent affirmative entry, *not* an asserted lack of an office.
- `data/who_office_profile_2026_checks.csv`: **95** individual source/date/type audits for April 2026 respondents, beyond the ten pre-existing SEARO positive records. Liaison, multi-country, country-with-territories, ordinary country and territory/area office types must remain distinct.
- `data/emrn_nca_identity_2026.csv`: **34 EMA-listed human-medicines national competent-authority identity candidates** in **30 EU/EEA country areas**, including Germany 2, Netherlands 3 and Poland 2. All require exact Team A identity and source-specific legal remit review; **no NCA graph relationship was promoted**.
- `PROVENANCE.csv`: **114 official/source provenance URLs**, including WHO April 2026 survey evidence TD-SRC-113 and EMA authority directory TD-SRC-114.

## Last validation

At snapshot `43b1743a1d01be065530c0a0c2b1996fcc9a5986`, fetched and ran all checked-in `validate.mjs` **structural assertions** against **17 GitHub-hosted CSV inputs** using an in-memory file-read shim in a JavaScript runtime. **PASS**: nodes 45; edges 542; conditions 20; region status 249 (205 verified, 44 unknown); UN M49 248; 1 seed exception; current office positives 105; typed 2026 office audits 95; 2026 dashboard roster 153; EMA candidate NCA identities 34; historical office/service rows 228; historical typed edges 225; provenance 114. This is **not** a literal local `node` CLI run, GitHub Actions CI claim, clinical evaluation or legal opinion. Execute `node docs/atlas/handoffs/team-d/validate.mjs` in a Node-enabled checkout for an independent Node CLI confirmation.

GitHub readback of **all 13 changed paths** compared with the pre-continuation `e022965536203533862d4d4bc9241f2fbecbf79e` snapshot succeeded. The compare showed changes **only within Team D**.

## Open research

1. Individually source the **44 WHO region unresolved candidates** (do not inherit parent country/UN region).
2. Recheck the **46 old September 2024 WHO office profile surveys** for genuinely newer office-specific evidence. Capture individual physical addresses, WHO office typologies A–E, and exact MCO/liaison/territory service coverage without negative or legal-status inference. Distinguish April 2026 survey status from November 2026 continuous operation.
3. Resolve WHO CPCD stale Indonesia SEARO and Bermuda region conflict only on independent current evidence; preserve US WHO governance as pending, and PAHO vs WHO legal separation.
4. Individually verify Africa CDC/AU, ASEAN programmes and participants, EMA/EMRN agency statutory remit and exact Team A authority identity joins, local HEARTS protocol editions, and specialist professional organization joins, rather than geography-to-participation assumptions.
5. Preserve all original seven-condition institutional references without clinical endorsement, study claim upgrades or individualized advice.

## Continuation protocol

Read original `TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`; read `CONTINUATION_PROMPT.md`, `STATUS.md`, `GAPS.md`, data CSVs and `validate.mjs` from the **latest live Team D head**. Resume in scoped, source-verified batches; preserve previous findings and dated conflicts. Validate, commit and confirm GitHub readback after each batch; use expected-head checks for branch updates, keep draft PR #70 open and unmerged, and update handoff/checkpoint before stopping.

**Next-user-prompt (repeat at the end of every run):**

> Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.
>
> Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.
>
> Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.
>
> If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
