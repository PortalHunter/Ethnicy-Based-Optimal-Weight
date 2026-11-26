# Team B standalone restart checkpoint — batch 82 · 2026-11-06

**INCOMPLETE. DRAFT PR #71 — OPEN / UNMERGED. DO NOT APPROVE CLINICAL CLAIMS, MERGE OR MARK READY.**

## Exact live scope and immutable evidence

- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight; PR https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71; branch `research/atlas-team-b-20261104`, base `main`.
- Verified immutable **data commit** [`f652332c046aaae9f204496dff9fa9529acdf1c6`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/f652332c046aaae9f204496dff9fa9529acdf1c6); parent `f49953b574c904742979d1fea059c1395f9e2705`; complete root Git tree `051a3074c5f6ed7e56c1c27e0628281a8cf8b13f`, **148 entries, truncated=false**.
- Data commit changes **only six Team B CSV files**: `data/specialist_organizations.csv`, `data/condition_organizations.csv`, `data/publication_context.csv`, `data/coverage_by_area_condition.csv`, `PROVENANCE.csv`, and `data/search_log.csv`; all within `docs/atlas/handoffs/team-b/`. The validator and seven-condition M49 roster were not edited. Subsequent documentation commit likewise must alter only Team B handoff files.
- GitHub immutable readback fetched **all ten Team B CSVs and unchanged `validate.mjs` at the data commit** and checked file SHA against the complete tree: **11 of 11 match**. Independent JavaScript reimplementation of CSV width, roster, ID, publication/context, attribution, provenance and search-state joins: **zero errors**. **Actual `node docs/atlas/handoffs/team-b/validate.mjs` was NOT run**: local `git ls-remote` failed due DNS resolving github.com, not a passing executable test. CI at initial data check: Population Phase 1 regression completed-success, Calculator CI in progress; recheck final docs head.
- No public website, formulas, calculators, main or other team directories modified. Not a clinical or legal sign-off.

## Current measurable progress

| Field | Batch 81 | Batch 82 | Delta |
|---|---:|---:|---:|
| Verified local specialist/nonprofit organization identities | 487 | **490** | +3 |
| M49 areas with a locally domiciled identity | 227 / 248 | **227 / 248** | 0 |
| Country/area-condition matrix structural cells | 1,736 | **1,736** | 0 |
| Source-positive area-condition cells | 374 | **378** | +4 previously untouched |
| Targeted but without eligible exact linked source | 171 | **171** | 0 |
| Untouched M49/condition cells | 1,191 | **1,187** | -4 |
| Total without linked source (targeted + untouched) | 1,362 | **1,358** | -4 |
| Exact research-only resource/context pairs | 410 | **414** | +4 |
| Provenance records | 1,107 | **1,117** | +10 |
| Targeted search records | 637 | **641** | +4 |
| Community/subnational records | 10 | **10** | preserved |
| Cross-border service edges | 8 | **8** | preserved |
| Diversity/anti-overgeneralization counterexamples | 14 | **14** | preserved |
| Unknown original-document issuer countries | 5 | **5** | unresolved |
| Approved clinical claims | 0 | **0** | mandatory |

Source-positive condition distribution: diabetes **110**, hypertension **75**, high_chol **48**, gout **40**, lactose **32**, celiac **49**, hereditary hemochromatosis **24**. **227/248 = 91.53% local identity coverage**, but **378/1,736 = 21.77% source-positive cell coverage**; neither measures legal rights, clinical accuracy or all original-language sources.

## Batch 82 primary-source and authorship findings

1. **Saudi Arabia (682), hypertension (previously untouched → source-positive):** new `B-SA-SHA` Saudi Heart Association, Riyadh: [official society identity](https://saudi-heart.com/) and [original 2023 NHC/SHA hypertension guideline PDF](https://saudi-heart.com/wp-content/uploads/2023/12/NHC_SHA-2023-Guidelines-on-the-management-of-Hypertension..pdf), cross-checked against [society guideline catalogue](https://saudi-heart.com/saudi-heart-guidelines/). The original PDF cover was visually viewed and lists the **National Heart Center and Saudi Heart Association jointly**, with separately named individual manuscript authors; Journal of Saudi Heart Association 2023;35:16–39. SHA is **not the sole original author**, the National Heart Center role does not confer a proven binding national government law, and full clinical guidance and licensing were not assessed. Source-country issuer 682 reflects the original jointly named Saudi authorship; organization domicile also 682.
2. **Saudi Arabia (682), high_chol (previously untouched → source-positive):** same `B-SA-SHA`. [Original dated 28 September 2023 LDL-C statement PDF](https://saudi-heart.com/wp-content/uploads/2023/12/SHA-statement-on-LDL-C-management-final.pdf), also listed by [own SHA statements index](https://saudi-heart.com/saudi-heart-statements/). First PDF page visually checked; signed SHA president Waleed Al Habeeb. The cited knowledge survey was **39 physicians in four Saudi centers**. It is **not a nationally representative patient study, familial hypercholesterolaemia genetic ascertainment, proof of clinical efficacy, or statutory guideline**. The statement's clinical targets were not adopted into any patient-facing calculator.
3. **Denmark (208), gout (previously untouched → source-positive):** new independent nonprofit patient association `B-DK-GIGT`, [Gigtforeningen official organizational identity](https://www.gigtforeningen.dk/om-os/) and [original Danish gout education](https://www.gigtforeningen.dk/viden/diagnoser/urinsyregigt-og-podagra/), updated **28 August 2026**. Distinguish **clinical urate-crystal gout from asymptomatic high serum urate**. Educational content is not independently a state guideline or representative Danish gout prevalence study; its treatment descriptions remain unapproved.
4. **Denmark (208), high_chol (previously untouched → source-positive):** new independent nonprofit `B-DK-HF`, [Hjerteforeningen official identity and Copenhagen address](https://hjerteforeningen.dk/om-os/) and [28 April 2026 editorial](https://hjerteforeningen.dk/artikler/alle-artikler/nye-anbefalinger-for-forhoejet-kolesterol/) by **Lotte Juul and Gunnar Gislason**. Its discussion of 2025 **ESC** and Danish physician guidance does **not make the Danish nonprofit the original author of ESC's guideline**, a national regulator, an original FH genotype study or a source of approved patient treatment. No licensed text incorporated.

All four exact relationships carry `clinical_release_state=research_lead_only`. All source URLs are HTTPS and their matching provenance/search entries and author/publisher distinctions are recorded. Original external document edition, legal incorporation, comprehensive methods and rights audits remain open.

## Original acceptance criteria — achieved vs pending

1. **M49 area and condition coverage:** all **248 distinct M49 codes × seven conditions** are structurally enumerated and retained. Only **378** cells have source-positive links; **1,187** have never been condition-researched; **171** were bounded searches lacking eligible exact sources. Bounded nonfindings **are not evidence of national absence**.
2. **Document origin and country/jurisdiction integrity:** each exact relation has organization domicile, issuer-of-linked-page or original document-country basis, named source issuer/publisher, relevant participant/sample context and healthcare-jurisdiction caveat. The **five original imprints still unknown**: Panama HEARTS, Portuguese WGO lactose translation, Portuguese ESPGHAN coeliac translation, Chad OA Pub/JHC, South Sudan PAMJ. Preserve separation between society webpage host, document author, journal publication venue, governing law, sampled people and named subnational groups.
3. **Disease subtype distinctions and clinical safety:** familial hypercholesterolaemia ≠ any raised LDL; gout ≠ isolated hyperuricaemia; hereditary haemochromatosis ≠ elevated ferritin alone; lactase polymorphism ≠ symptomatic lactose intolerance; coeliac HLA susceptibility ≠ confirmed coeliac disease. Neither M49 domicile nor genetic ancestry yields individual diagnosis. **414/414 research leads, zero approved clinical claims**. Issue #27 owns independent clinical appraisal.
4. **Local organizations and original-language resources:** 490 organizations covering 227/248 domiciles. **21 unfilled local-domicile areas**: 010 Antarctica, 074 Bouvet Island, 086 British Indian Ocean Territory, 162 Christmas Island, 166 Cocos (Keeling) Islands, 238 Falkland Islands (Malvinas), 239 South Georgia and South Sandwich Islands, 260 French Southern Territories, 334 Heard Island and McDonald Islands, 336 Holy See, 408 DPR Korea, 520 Nauru, 570 Niue, 574 Norfolk Island, 581 United States Minor Outlying Islands, 612 Pitcairn, 652 Saint Barthélemy, 654 Saint Helena, 732 Western Sahara, 744 Svalbard and Jan Mayen Islands, 772 Tokelau. Do not substitute foreign organizations as locally domiciled or treat no results as proof none exist.
5. **Diversity, governance, and rights:** preserved **14** anti-overgeneralization examples, **10** Indigenous/community/subnational governance-sensitive records, **8** cross-border service edges. They do not by themselves verify Indigenous consent, community ownership, ethics, source licenses, legal registration, clinical applicability or the completeness of population representation.

## Carry-forward limitations and highest-priority research gaps

- Prioritize **1,187 untouched condition cells**, especially original-language gout, lactose, coeliac and hereditary haemochromatosis. Expand **171** bounded no-link checks and the **21** local identity gaps; favor exact first-party provenance, original named authors, edition and original medical-health jurisdiction.
- Resolve the five unknown issuer imprints only from verified original title/colophon evidence, not from website host or a translated mirror. New Saudi NHC/SHA original named co-issuer is **not** a replacement for any of these gaps.
- Retain prior conflicts and hazards: Bangladesh NHFB founding 1978/1979 and Cardiac Society membership differences; Nepal severe-LDL 119-person one-centre data and conflicting cross-sectional/prospective descriptions ≠ FH; Turkish multisociety hypertension authorship; Turkish coeliac site's imprecise allergy characterization, **not endorsed**; Croatian Reumatizam 2012 and Polish PTR 2016 historical rather than 2026 guidance; Polish PTD 2026 fulltext/rights unaudited; Iceland coeliac PDF 502; Irish Croí source-host/author and geographic scope; earlier rights/ethics and child/subpopulation sample caveats.
- Original article claims and prevalence denominator methods, version/lifecycle, conflicting websites, publisher/journal venue, permission and licensing remain unapproved. A journal's or society's position paper is not a statutory legal regulation. Team A owns government authority, Team C journals, Team D international networks and issue #27 medical/clinical review.
- **Local executable validator remains a blocker:** try actual Node CLI from a valid checkout later. The successful independent structural checks and 11/11 GitHub readbacks are **not** equivalent to executing `validate.mjs`, checking every external link or obtaining legal/clinical authorization.
- Before subsequent edits, re-fetch PR #71 state and head, read latest `CONTINUE.md`, `CHECKPOINT.json`, source CSVs and validator. Reconcile any newer commits; never force overwrite another active research run. Commit small, immutable Team B-only batches; read back files/tree at immutable ref. Preserve historical checkpoints and all 10+ community/diversity cases.

## Exact reusable continuation prompt

Continue Research Team B in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71.

Read `docs/atlas/handoffs/team-b/CONTINUE.md` on branch `research/atlas-team-b-20261104`, including its latest checkpoint and original acceptance criteria.

Verify live GitHub state and continue autonomously, prioritizing untouched condition-area cells, missing organizations, source attribution, and research gaps. Preserve existing research, evidence caveats, and scope. Reconcile concurrent changes safely; commit, run validation, and verify readbacks regularly. Modify only Team B's research directory. Do not modify the public website, main, or other teams; do not merge the PR or approve clinical claims.

If unfinished, save a complete standalone GitHub checkpoint. End with a concise status, this same reusable continuation prompt, and updated visual progress bars for geographic organization coverage and source-positive condition-area coverage, including remaining gaps.
