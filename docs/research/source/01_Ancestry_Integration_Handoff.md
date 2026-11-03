# 01 — Ancestry Integration Handoff for Teams 2 and 3

**Version:** 1.0 | **Prepared:** 2026-11-01  
**Scope:** Team 1 reports population/ancestry and metabolic-risk findings; **no endorsement or decision by Teams 2/3 is presumed**.  
**Source of truth for claim records:** `01_Ancestry_Evidence_Matrix.md` (ANC-001 through ANC-028).  
**Current calculator:** [repository HTML source](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/optimal_body_weight_calculator-9.html). No modifications were made.

## 1. Executive handoff

**What is clinically usable now:** source-labelled adult BMI/waist screening rules from ADA 2026 and NICE NG246 as appropriate to clinical context, alongside non-prescriptive waist/WHtR interpretation. **What is research, not clinical:** European sub-regional weight cutoffs, Latino subpopulation-specific weight cutoffs, genomic ancestry-to-BMI threshold interpolation, and the automated BMI-22 weight ceiling.

**Most relevant new 2026 finding:** In 134,548 Mexican adults, Indigenous American genomic ancestry was associated with measured diabetes prevalence independent of several clinical/social variables (adjusted T2D OR **1.33, 95% CI 1.31–1.36, per 20 percentage points**; ANC-014). **Do not** propagate this estimate as a genotype effect on dietary response, metabolism for medication dosing, or ideal-weight threshold. It is a cohort-level **association**, and its own independent predictive utility has not been established.

## 2. Stable records to consume

| ANC ID(s) | Finding / interface implication | Status | Team dependency |
|---|---|---|---|
| ANC-001–004 | WHO/NICE/ADA BMI/waist standards and mixed-background limitation | Guideline-supported rules; mixed interpolation unsupported | Both teams need awareness of screening vs mechanistic claims |
| ANC-005–008, 026 | European country/region variation does not establish Nordic/Mediterranean/Central/Eastern BMI cutoffs; SCORE2 uses *country risk* recalibration | Observational risk context; proposed subregional thresholds insufficient | Team 2: familial and nutrition conditions; Team 3: pharmacogene frequency may vary by population but requires genotype |
| ANC-009 | UK ethnic BMI equivalents for **incident diabetes** vary; not necessarily applicable to unrelated countries or outcomes | Observational | Neither team should promote numeric equivalences to dose/diet rules |
| ANC-010–012 | Mexican, Central American, Caribbean and South American U.S. heritage groups differ in diabetes prevalence and candidate WC performance | Observational / exploratory | Team 2: ascertain environment and family history; Team 3: do not infer pharmacogenotype from Latino label |
| ANC-013–015 | Mexico BMI/central adiposity predict mortality; Indigenous genomic ancestry associated with T2D; SES alters ancestry associations | Observational, cohort-specific | Team 2: heritable risk hypotheses to verify; Team 3: allele-specific testing only |
| ANC-016, 028 | Within Latino cohorts, genetic-BMI associations may depend on heritage/migration and subcontinental ancestry | Exploratory | Both: justify explicit reference panels and analytic ancestry definitions |
| ANC-017–020 | Peru, seven Latin American cities, Southern Cone and Brazil demonstrate contextual heterogeneity | Observational | Team 2: phenotype/economic/diet context; Team 3: no direct pharmacogenetic inferences |
| ANC-021–023 | Accurate waist protocol, clinical obesity framing and diabetes-testing triggers | Guideline-supported / consensus | Both: keep clinical outcomes and direct measurements ahead of broad ethnicity |
| ANC-024, 025, 027 | Current calculator's fractional BMI blending, diabetes-buffer weight cap and classic formula intersection lack external outcome validation | Insufficient | **Neither team should re-use these numerical outputs** as a causal input for nutrition or drug dosing |

## 3. Requests to Team 2 — hereditary disease, nutrition and diet response

**Dependency T2-A: distinguish variant frequency from phenotype.** Team 1's Nordic, Mediterranean and Central/Eastern European descriptions are proposed *heritage descriptors*, not validated weight classes. If Team 2 reviews lactase persistence, HFE hemochromatosis, celiac susceptibility, lipid pathways or other conditions, provide **specific allele/variant and gene, penetrance, study population and direct clinical testing criteria** rather than “Scandinavian genotype,” “Mediterranean diet required,” or “European iron absorption.”

**Dependency T2-B: Latino admixture evidence.** ANC-014 is diabetes risk associated with **estimated Indigenous American ancestry** in one Mexico City cohort. We ask Team 2 to independently evaluate whether *specific* inherited disease or insulin-secretion pathways contribute; use actual variant evidence and adjust for SES/environment, and **do not translate ANC-014 into carbohydrate or keto recommendations**. The user’s desired nutrition pathway must validate diet response separately.

**Dependency T2-C: diet and polygenic analyses.** ANC-016 describes BMI polygenic score/diet/migration interactions; it does **not** establish diet treatment effect. Require trial, replication or validated intervention-specific evidence before personalized diet guidance.

**Dependency T2-D: clinical context.** Distinguish whether diabetes is prevalent, predicted or genetically predisposed. Team 2 may propose family-history input that complements Team 1 screening, but **cannot convert family history into a BMI 21.9 weight cap** without intervention validation.

### Questions for Team 2

1. Which ancestry-linked heritable conditions have variant-specific, clinically meaningful penetrance and actionable testing guidance in a **defined** population?
2. Which outcomes for individual dietary response are supported by trials versus small nutritional-genetics associations?
3. What genotype/phenotype fields can be independently validated without assuming ancestry percentages are causal?
4. How should the tool avoid race- or country-based assumptions about diet, family history, cultural practices and food access?

## 4. Requests to Team 3 — pharmacogenetics

**Dependency T3-A: ancestry is not genotype.** Team 1 provides no drug-response effects. Population enrichment of a pharmacogene allele does not mean any individual has it. Team 3 must ground treatment claims in relevant **clinical guidelines (e.g., CPIC/DPWG when applicable), tested alleles/diplotypes, phenotype translation, dose adjustment and recommendation strength**, after checking current versions. Do not infer genotype from “Nordic,” “Latino,” “Indigenous” or “Black.”

**Dependency T3-B: subpopulation representation.** A generic “Hispanic” category obscures many admixed populations (ANC-010–020); Team 3 should track reference population, sampling ascertainment and subcontinental variability in allele-frequency summaries, particularly Caribbean versus Andean versus Mexican participants. Never use ancestry weights to average medication doses.

**Dependency T3-C: causal separation.** If Team 3 studies an allele enriched in Indigenous American ancestry, it must demonstrate an *allele-specific* drug exposure/response association. **ANC-014 is a diabetes-prevalence association, not a pharmacokinetic or pharmacodynamic finding.**

**Dependency T3-D: repository isolation.** Pharmacogenetics content needs its own evidence registry and patient safety controls; do not embed into `groupForAncestries`, `bufferZone` or body-frame formulas. Broad cardiovascular/diabetes risk flags never substitute for medication-genotype guidance.

### Questions for Team 3

1. Which ancestry-sensitive pharmacogene frequencies are sufficiently documented for **informational** maps, and what is their uncertainty by local population?
2. Which drug–gene pairs carry practice guidelines and what *direct genotyping* is required before any patient-specific recommendation?
3. How are gene copy-number, structural variation, rare alleles and reference-panel bias addressed across admixed populations?
4. What clinical and privacy protections are necessary before displaying any user-uploaded DNA interpretation?

## 5. Conflicts requiring joint review (none presumed resolved)

| Potential conflict | Why it matters | Interim resolution |
|---|---|---|
| ADA Asian-only lower screening criteria vs NICE broad lower groups | Different jurisdictions, evidence/methods and patient populations | Record guideline version and region; never collapse into one purported universal rule |
| Genomic ancestry % vs ethnicity/self-identification | Can differ; each has different meaning and methodological bias | Separate fields; no automatic conversion |
| Observational ancestry–diabetes OR vs inherited diet-response mechanism | Risk association not genotype-by-diet interaction or treatment effect | Team 2 cannot inherit ANC-014 OR for meal/weight advice |
| Allele-frequency variation vs individual medication response | Ecology is not personal genotype | Team 3 requires actual genotype and pharmacogenetic guideline |
| “Optimal weight” equation vs healthy metabolic phenotype | An algorithmic weight band has no outcomes validation | Keep formula exploratory; clinical screening independent |
| Privacy of genetic uploads vs open-source transparency | DNA is sensitive and difficult to truly anonymize | No raw DNA upload feature authorized by this project stage |

## 6. Unified integration contract

1. **Claims are atomic** and retain all standardized fields: `claim_id`, `domain`, `population_definition`, `exposure_or_variant`, `outcome`, `effect_estimate_and_uncertainty`, `study_design`, `source_doi_pmid_or_url`, `evidence_grade`, `clinical_status`, `limitations`, `cross_stream_dependencies`, `integration_target`, `validation_next_step`.
2. Stable prefixes: Team 1 uses `ANC-`; Teams 2 and 3 choose **different prefixes** and publish their own matrices.
3. **Evidence mapping:** A rule must cite the exact claim IDs for the domain(s) it consumes; cross-domain inference requires additional **jointly approved claim**, not just citation to a related ancestry cohort.
4. **No dominance:** Approval of one stream does not alter another's output unless evidence directly validates that interaction; record dissent and unresolved conflicts.
5. **Clinical gating:** label results `guideline-supported`, `observational`, `exploratory`, `insufficient` or `contradicted` with intended geography, target outcome and effective date. A source-specific guideline recommendation takes precedence over an unvalidated heuristic for clinical labeling, but does not establish a nutrition or drug recommendation.
6. **No data-pipeline leakage:** user DNA files, if a future independently approved project, do not flow into this calculator by default; avoid storage/exposure without informed consent and security review.
7. **Versioning:** Include source date, ontology version, study accession, model version, chosen clinical guideline and documentation of every changed output.
8. **Clinical validation:** merge only after the Team 1 protocol tests ancestry features against BMI+WC+routine clinical factors with independent holdouts, calibration and clinical utility; Teams 2/3 contribute separate primary outcomes and metrics.

## 7. Next joint-review agenda

- Approve the terminology layer separating **screening**, **clinical phenotype**, **observational risk context**, **research-only ancestry inference**, and **individualized intervention**.
- Agree whether the BMI-22 cap and interpolated BMI thresholds should be visibly quarantined at the next code revision; Team 1 recommends that they should.
- Confirm a shared data dictionary for phenotype, family history, genotype, country, migration and self-identification, with explicit null/unknown states.
- Determine what additional studies / trial endpoints each team needs to justify its own claims. Team 1's validation plan covers *metabolic-risk prediction* and cannot certify personalized nutrition or drugs.
- Review privacy, fairness, risk of stereotypes and clinically inappropriate certainty before implementing any extra ancestry dropdowns.

## Verified source anchors

- [ADA obesity standards 2026](https://doi.org/10.2337/doci26-0003) and [NICE NG246](https://www.nice.org.uk/guidance/ng246/chapter/Identifying-and-assessing-overweight-obesity-and-central-adiposity).
- [Berumen et al. 2026, Indigenous American genomic ancestry and T2D](https://doi.org/10.1016/S2468-2667(25)00305-6).
- [HCHS/SOL diabetes prevalence](https://doi.org/10.2337/dc13-2939); [Mexico City adiposity/mortality](https://pubmed.ncbi.nlm.nih.gov/31404923/); [European SCORE2](https://doi.org/10.1093/eurheartj/ehab309).
- All source-linked granular records: `01_Ancestry_Evidence_Matrix.md`.