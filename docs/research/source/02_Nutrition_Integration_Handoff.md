# Research Team 2 — Integration Handoff for Teams 1 and 3
**2026-11-01 | Proposal, no independent changes to other streams**

## Integration contract

Team 2 **does not own** BMI cutoff/anthropometric calculations (Team 1), pharmacogenetics or drug-specific guidance (Team 3). It owns a modular evidence registry of inherited disorders, dietary safety and general nutrition response research. No data stream may silently override another. Rules affecting another stream require **joint evidence review**, named owner, versioned acceptance and clinical safety testing.

**Integration architecture:**

```text
User history / diagnoses / labs / symptoms / preferences / provenance
       |                     |                    |
 Team 1: BMI/waist/ancestry  Team 2: genetics + nutrition  Team 3: medication safety + PGx
       |                     |                    |
       +---------- evidence IDs + condition status + flags --------+
                                |
                       Independent policy arbitration
                       (safety -> verified diagnosis -> labs
                        -> measured response -> education
                        -> ancestry/genetics research context)
                                |
                     User explanation + actions + uncertainty
```

The central evidence registry uses these exact keys for each claim: `claim_id`, `domain`, `population_definition`, `exposure_or_variant`, `outcome`, `effect_estimate_and_uncertainty`, `study_design`, `source_doi_pmid_or_url`, `evidence_grade`, `clinical_status`, `limitations`, `cross_stream_dependencies`, `integration_target`, `validation_next_step`. IDs begin `NUT-`. Grades A/B/C/D are project judgments; statuses are restricted to the five prescribed values.

## Handoff to Team 1 — ancestry, population-specific thresholds and anthropometrics

**Decisions requested (not instructions):**

1. **Do not equate broad European category with an HFE C282Y result**. Both prevalence and penetrance vary by genotype and age/sex. Current European-only `foodRecs` iron caution needs non-diagnostic wording [NUT-003, NUT-004].
2. **Lactase persistence is locally adaptive and multi-allelic**, not synonymous with “Northern European can drink milk; African/Asian cannot.” Ancestry note may cover prevalence but no automatic diet/avoidance [NUT-006].
3. **AMY1 starch and FADS2 fat notes** remain explanatory only, not grams-of-food or supplement recommendations [NUT-020, NUT-021].
4. **Population average T2D risk vs individual disease**: group BMI/waist considerations may be independently evaluated by Team 1, but T2D family history and PRS must not alter a BMI equation/weight buffer without trial evidence [NUT-001, NUT-002].
5. **Mixed ancestry portability**: avoid assuming one identity fully covers variant prevalence or T2D risk score calibration; record if a risk algorithm is only validated in sampled populations [NUT-002].
6. **DASH and cardioprotective guidance are not race-exclusive**; measured BP and LDL guide discussion. Team 1 should preserve anthropometric context without constraining diet to ancestral stereotypes [NUT-014, NUT-016].

**Conflict requiring team vote:** Current calculator uses the merged diabetes checkbox to activate a **buffered weight range**. If family history alone triggers it, that merges a screening risk state with a weight equation. Team 2 recommends removing that causal connection pending explicit anthropometric evidence review; Team 1 has decision authority over the weight-target logic.

**Deliverable needed from Team 1:** table of population definitions and outcome-specific calibration for each proposed ancestry distinction, including admissible use (risk context vs equation vs screening) and transparent conflict logic for mixed ancestries.

## Handoff to Team 3 — pharmacogenetics and drug–nutrition interactions

**Medication interaction flags, not medication instructions:**

| Flag | Why Team 3 review is necessary | Team 2 claim IDs |
|---|---|---|
| SGLT2 inhibitor + ketogenic eating | Potential euglycemic DKA; ADA discourages ketogenic pattern in users at risk | NUT-013, NUT-025 |
| Insulin or hypoglycemia-prone therapy + substantial carbohydrate decrease | Hypoglycemia risk; medication review by prescriber | NUT-012, NUT-025 |
| HNF1A/HNF4A/HNF1B/GCK diabetes | Genetic diagnosis changes usual treatment context; not a generalized diet response | NUT-007 |
| FH / high LDL / keto-associated LDL rise | Medical lipid treatment cannot be replaced by nutrition advice | NUT-003, NUT-015 |
| PKU or FAO disorder / HFI and prescribed products | Specialized nutrients/formulations and excipients can interact with disease-specific safety rules | NUT-008, NUT-009, NUT-010 |
| Warfarin, vitamin K patterns or diet changes; other nutrient–drug interactions | Team 3 to decide if an evidence-based interaction rule is warranted, without suggesting patients stop medication | Cross-stream proposed, **not yet validated NUT claim** |

**Deliverable needed from Team 3:** narrowly defined medication-class flags, clinical status/contraindication wording, clinical escalation owner, severity, provenance and versioned evidence; avoid broad PGx predictions of dietary choice.

## Shared dependencies / arbitration rules

1. **Evidence for physical outcome ≠ evidence for dietary prediction.** Example: HFE prevalence → possible screening context, not ancestral low-iron diet.
2. **Safety flags override preference for a specific diet but do not rewrite anthropometrics.** Example: MCAD changes permissible diet, not BMI calculation.
3. **Clinically confirmed disease overrides speculative genetic association but does not erase a person's measured outcome.** Example: FH + lower keto TG + higher apoB: show both results and flag clinician review.
4. **Genotype change control:** no VUS or unverified raw DNA call triggers intervention. Appropriate confirmation and interpretation required.
5. **Medication actions remain clinician-owned.** Team 2 documents nutrition exposure; Team 3 documents drug–diet risks.
6. **Missingness is explicit:** missing LDL, unknown medication, unknown diagnosis cannot be treated as reassuring normal values.

## Integration issue register

| Issue | Teams | Owner / status | Resolution acceptance test |
|---|---|---|---|
| Celiac HLA-positive vs celiac confirmed | 2 with clinical review | Team 2 / open | Positive HLA alone never triggers lifelong gluten-free dietary advice |
| European background vs HFE iron cautions | 1,2 | Joint / open | No ancestry-only iron-supplement avoidance; correct diagnosis pathway |
| Diabetes family-history flag influences BMI buffer | 1,2 | Team 1 decision + Team 2 evidence / open | Family-only profile doesn't acquire diagnosed-T2D guidance |
| FH label vs ordinary high LDL | 2,3 | Team 2 clinical facts + Team 3 medication / open | FH referral, lipid management and nonmedication language separated |
| Keto + SGLT2 | 2,3 | Team 3 drug safety / open | Appropriate warning/referral, zero automated dosage instructions |
| FAO defect + keto/fasting | 2,3 | Team 2 safety primary / open | All FAO test cases block inappropriate unsupervised diet suggestions |
| AMY1/FADS explanatory research notes | 1,2 | Joint / open | No genetic prediction of carbohydrate or omega-3 target |
| Diet–genotype matching from APOA2 post hoc result | 1,2,3 if drug interactions | Team 2 research / hold | No clinical recommendation until independently validated interaction/utility trial |

## Data transfer and implementation checklist

- Import `02_Nutrition_Evidence_Matrix.md` preserving strings exactly; **all 14 fields required**; no “clinical grade A” inferred from effect size alone.
- Confirm in the other streams which claims create user-facing *screening*, *education*, *dietary intervention*, or *research-only* content; record approver and date.
- Run jointly curated regression profiles before merged release, including FH + high-fat keto, T2D family-only, HFE carrier + anemia, HLA-positive, diagnosed celiac, MCAD, pregnancy and SGLT2.
- Distinguish a **score of risk**, **measured disease**, **treatment response**, **subgroup association**, and **clinical utility trial** in UI text and telemetry.
- Apply a common evidence version/review cycle and a 'withdrawn/contradicted' flag; source update alone should not silently promote research to clinical status.

## Questions for joint review

1. Which exact audience is in scope for first clinical validation: adult prediabetes, diagnosed diabetes, severe LDL, or general wellness? The answer affects contraindications, endpoints, and test design.
2. What threshold of new external randomized evidence is required before genotype-by-diet rules can be turned on?
3. Will condition status be verified from records, self-reported, or both—and how is uncertainty represented?
4. Who reviews special-population safety (pregnancy, pediatrics, kidney disease, metabolic disorders)?
5. Should pharmacogenetics be a separate clinician-verified feature rather than importing raw variants directly into diet logic?
6. What is the joint minimum validation standard for BMI-buffer changes vs nutrition messages?

## High-priority shared sources

- PortalHunter. optimal_body_weight_calculator-9.html, main branch, inspected 2026-11-01. https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/optimal_body_weight_calculator-9.html
- American Diabetes Association. Standards of Care in Diabetes—2026, section 5. DOI: 10.2337/dc26-S005. https://doi.org/10.2337/dc26-S005
- ACC/AHA et al. 2026 guideline on management of dyslipidemia. DOI: 10.1161/CIR.0000000000001423. https://doi.org/10.1161/CIR.0000000000001423
- EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2022;77:479–502. DOI: 10.1016/j.jhep.2022.03.033; PMID: 35662478. https://pubmed.ncbi.nlm.nih.gov/35662478/
- Rubio-Tapia et al. American College of Gastroenterology Guidelines Update: Celiac Disease. Am J Gastroenterol. 2023;118:59–76. DOI: 10.14309/ajg.0000000000002075; PMID: 36602836. https://pubmed.ncbi.nlm.nih.gov/36602836/
- Gardner et al. JAMA. 2018;319:667–679. DOI: 10.1001/jama.2018.0245; PMID: 29466592. https://pubmed.ncbi.nlm.nih.gov/29466592/
- Livingstone et al. BMJ. 2016;354:i4707. DOI: 10.1136/bmj.i4707; PMID: 27650503. https://pubmed.ncbi.nlm.nih.gov/27650503/
- GeneReviews. Medium-chain acyl-CoA dehydrogenase deficiency; updated Sep 2024. https://www.ncbi.nlm.nih.gov/books/NBK1424/
- Australian and New Zealand joint society consensus: genetic testing for monogenic diabetes in adults. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12579922/
- Lai et al. Obesity. 2025;33:1048–1057. DOI: 10.1002/oby.24288; PMID: 40310284. https://pubmed.ncbi.nlm.nih.gov/40310284/
- Polygenic risk score for type 2 diabetes shows context-dependent effects across populations. Nat Commun. 2025. DOI: 10.1038/s41467-025-63546-4. https://www.nature.com/articles/s41467-025-63546-4