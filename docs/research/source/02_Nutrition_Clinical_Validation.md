# Clinical Validation Roadmap — Nutrition and Hereditary Disease Module
**Research Team 2 | Proposal for qualified clinical investigators | 2026-11-01**

## Claim to test

Does evidence-tiered, phenotype- and verified-diagnosis-informed nutrition guidance improve **clinically important outcomes**, beyond a high-quality standard dietary counseling tool, *without increasing medical risk, inappropriate genetic labeling, or health inequity*? Tests of disease risk prediction and tests of treatment benefit must be separate.

## Precondition: do not trial unverified high-risk advice

Before clinical testing, obtain independent review by physicians/registered dietitians, genetics and ethics expertise; specify who provides medical care, who handles critical laboratory values, who adjudicates related adverse events, and when participants receive conventional referrals. Research consent must not substitute for clinician diagnosis. Pre-screen and appropriately exclude/route pregnancy, minors, eating-disorder risk, uncontrolled metabolic disease, FAO defects and other strong contraindications to the selected intervention. Obtain IRB/ethics review and prospective registration where appropriate.

## Phase 0 — evidence governance and rule verification (no human interventional inference)

**Inputs:** frozen version of calculator, six-field source citations for each rule, dated guidelines, clinical triggers, disease-status dictionary, 14-field NUT evidence matrix. **Method:** blinded evidence adjudication by at least one geneticist, lipid/diabetes clinician and RD, consensus for disagreements; compare outputs to 50–100 deliberately challenging synthetic patient profiles, including every condition conflict. **Primary outcome:** zero unsafe auto-prescriptions and zero false 'diagnosed from ancestry/genotype' outputs; adjudication inter-rater agreement; link completeness; rule coverage. **Stop:** any algorithm that advises keto in FAO disorders, an HLA-positive person to self-diagnose celiac, or supplements avoidance solely from ancestry.

## Phase 1 — observational / external predictive validation

**Research question:** Does a preregistered model using family history and genotype/PRS meaningfully improve prediction over a baseline model using age, measurements, HbA1c/glucose, blood pressure, LDL/TG, kidney status, medication category and other routine clinically relevant variables?

**Population:** independent, multi-center retrospective/prospective adults (the disease-specific subgroup must have adequate events); prespecify ancestry/self-reported identity, genetic ancestry when available and admixed populations, sex/gender reporting, baseline disease state, medication, food-access covariates. **Never choose BMI cutoffs based on the outcome you plan to 'validate' in the same dataset.**

**Analyses:** frozen derivation algorithm; external test site and/or time split; discrimination (AUROC for binary events, C-index if time-to-event); **calibration** intercept/slope, observed/expected, Brier score, threshold-based sensitivity/specificity, decision curves/net benefit, subgroup miscalibration, and fairness review. Missing-data handling registered in advance; compare model 0 clinical vs model 1 clinical + family history vs model 2 + risk genetics/PRS vs model 3 + ancestry context. A PRS can improve AUROC without demonstrating that the diet algorithm changes patient outcomes. **Do not present a risk score as dietary response.** [PRS25, PRS26]

**Endpoints:** incident diabetes (diagnosed using accepted criteria), severe dyslipidemia recognition, missed FH referrals, and validated clinical risk states over 1–5 years where longitudinal datasets allow. Evaluate risk/benefit of misclassification and referral volume, not only prediction accuracy. No invented power calculation without event prevalence and clinically meaningful minimum effect.

## Phase 2 — prospective feasibility and implementation pilot

**Design:** 3–6-month pilot, e.g., 60–120 consenting adults, sample size finalized after feasibility and outcome variance estimates. All receive baseline clinically appropriate care. Test comprehensibility and whether recommended actions are valid. **Outcomes:** consent completion; validated dietary literacy/comprehension; RD agreement; rate of inappropriate restrictions; dietitian time; recruitment/retention; food insecurity/access; app engagement; adverse events; lab completeness; satisfaction and validated treatment burden. Genotype research messages only if separately consented; no nonvalidated genetic dietary assignment.

**Stopping/monitoring:** independent safety clinician reviews potential DKA, serious hypoglycemia, biochemical LDL rise, symptomatic hyperuricemia/gout, kidney deterioration, clinically meaningful malnutrition/disordered eating or other serious problems. Predefine referral thresholds with the clinical team rather than inventing universal cutoffs in the app. Track harms *per participant and per exposure*.

## Phase 3 — pragmatic randomized trial of **utility**, not merely prediction

**Arms:**

- **Control:** evidence-based high-quality standard care nutrition education + access to usual RD/clinician care, using current 2026 ADA/AHA recommendations; equal contact/attention.
- **Intervention:** the same clinical care plus validated module that stratifies by **confirmed disease**, relevant safety flags, current biomarkers and measured individual dietary responses. Genotype-specific dietary rules withheld unless independently supported by a prospective interaction study.

**Eligible adults:** those with prediabetes or T2D and/or dyslipidemia/overweight in outpatient care; consider separate stratified trials by clinical condition if outcomes differ. Randomize participants (or clinics if contamination risk) and stratify by baseline HbA1c, LDL status, pharmacotherapy and site. No routine randomization into unsafe diet patterns.

**Endpoint options:** choose **one primary** per focused population: 12-month change in HbA1c (diabetes trial) *or* 12-month LDL-C/apoB (lipid trial). Coprimary endpoints require multiplicity adjustment. **Secondary:** TG, BP, body weight/waist, eGFR, nutrient status, adherence (diet recall with appropriate validation), validated health-related QoL, patient activation/decisional conflict, hypoglycemia and ED-risk scales. Long-term 24-month maintenance desirable. Clinically meaningful adverse lipid changes **must not be hidden in a favorable average HbA1c**.

**Analysis:** intention-to-treat; prespecified baseline covariates and subgroup hypotheses; blinded laboratory and outcome assessors; multiple imputation/sensitivity for missing data; between-arm change with 95% CIs; adverse events, changes in medications, dietary exposure, contact time, adherence, all reported transparently. Estimate costs and clinician workload. **Sample size must be computed prospectively** from a selected minimal clinically important difference and realistic SD, attrition, clustering if needed and error rates. Avoid fabricated recruitment or effect sizes.

## Phase 4 — only if genetically matched diets remain plausible

**Predictor discovery is distinct from clinical validation.**

1. Run a *preregistered* genotype-by-diet **interaction** RCT (e.g., variants with replicated mechanisms; 12 months minimum). Randomize to two safe, nutritionally adequate matched-support diets independent of genotype. Genotype must not determine assignment.
2. Preselect variants and interaction outcomes, gene dosage and ancestry handling; multiple-testing correction; include adherence and saturated fat exposure; test external generalizability.
3. Validate an algorithm on an independent trial *without refitting*.
4. **Clinical-utility trial:** randomize individuals to genotype-guided vs standard phenotype-guided diet selection, equal counseling, real clinical outcomes and safety endpoints. Only a positive result here justifies implementation. Exploratory associations (e.g., APOA2 secondary analysis) cannot substitute for these steps [APOA2, DIETFITS].

## Established questions vs genuine research gaps

| Question | Existing evidence and interpretation | New study needed? |
|---|---|---|
| Does lifestyle intervention prevent diabetes in high-risk adults? | DPP reduced incidence ~58% vs placebo; strong baseline comparator [DPP] | Not for proof of general efficacy |
| Does short-term carbohydrate reduction improve some T2D outcomes? | Multiple RCTs/reviews suggest benefit at 6 months; attenuated later [BMJLCD, ADA26] | Yes for durability, specific populations, safety and active comparators |
| Is keto superior to healthy Mediterranean for HbA1c at 12 weeks? | Keto–Med found no significant advantage in small crossover [KETOMED] | Larger and longer trials only for unanswered subgroups/outcomes |
| Does the DIETFITS 3-SNP panel match diets for 12-month weight loss? | Primary interaction negative [DIETFITS] | New model needs independent discovery and strict replication; do not repackage null result |
| Does FTO genotype determine weight-loss responsiveness? | IPD meta-analysis negative [FTO] | Routine diet matching unjustified |
| Does FH warrant lipid screening and cascade evaluation? | 2026 guideline supports this [FH26] | Implementation studies helpful; no need to rediscover FH |
| Does HLA-DQ2 alone diagnose celiac? | No; guideline supports diagnostic testing [ACG23] | No |
| Does AMY1/FADS2/PRS choose optimal carbs? | Unproven; observational/mechanistic findings [AMY26, PRS25] | Randomized interactions and external validation needed |
| Does this actual calculator improve HbA1c, LDL, or patient outcomes? | Not tested | **Yes:** proposed clinical-utility RCT |

## Feasibility / sample-size illustration (not a calculated proposal)

Primary HbA1c difference must be specified with **clinician-accepted MCID**, estimated SD from the target clinic, expected follow-up, type I error and desired power. LDL trials require separate assumptions. E.g., a desired detectable difference of 0.3 HbA1c percentage points is **only an illustrative planning parameter**, not a recommendation or a fact from this tool. Generate the final power analysis once variance/event rates and design have been confirmed; account for multiple outcomes and cluster randomization if applicable.

## Clinical governance, privacy, and dissemination

- Clinical safety committee including RD, endocrinology, lipidology, clinical genetics, and medication expertise (Team 3); document escalation, referrals, adverse event definitions and discontinuation criteria.
- Patient consent separately for genetic data, ancestry, health record linkage and research-use retention; secure storage, access logging, deletion policies, and bias/privacy audit.
- Public protocol, preregistered analysis, versioned datasets and models where consent allows; reproducible code and test cases; negative/contradictory findings must be published. Data management should follow appropriate HIPAA and institutional requirements where applicable.
- Report model version, consent population, missingness, subgroup performance and what changed after adverse events. Use transparent reporting frameworks applicable to prediction models and trials (e.g., TRIPOD+AI, CONSORT; STARD for diagnostic accuracy where appropriate).

## References

- American Diabetes Association. Standards of Care in Diabetes—2026, section 5. DOI: 10.2337/dc26-S005. https://doi.org/10.2337/dc26-S005
- ACC/AHA et al. 2026 guideline on management of dyslipidemia. DOI: 10.1161/CIR.0000000000001423. https://doi.org/10.1161/CIR.0000000000001423
- Knowler et al. N Engl J Med. 2002;346:393–403; PMID: 11832527. https://pubmed.ncbi.nlm.nih.gov/11832527/
- Gardner et al. JAMA. 2018;319:667–679. DOI: 10.1001/jama.2018.0245; PMID: 29466592. https://pubmed.ncbi.nlm.nih.gov/29466592/
- Livingstone et al. BMJ. 2016;354:i4707. DOI: 10.1136/bmj.i4707; PMID: 27650503. https://pubmed.ncbi.nlm.nih.gov/27650503/
- Gardner et al. Am J Clin Nutr. 2022;116:640–652. DOI: 10.1093/ajcn/nqac154; PMID: 35641199. https://pubmed.ncbi.nlm.nih.gov/35641199/
- Goldenberg et al. BMJ. 2021;372:m4743. DOI: 10.1136/bmj.m4743; PMID: 33441384. https://pubmed.ncbi.nlm.nih.gov/33441384/
- Polygenic risk score for type 2 diabetes shows context-dependent effects across populations. Nat Commun. 2025. DOI: 10.1038/s41467-025-63546-4. https://www.nature.com/articles/s41467-025-63546-4
- Multi-ancestry polygenic risk scores for prediction of type 2 diabetes and complications. 2026; PMID: 42061389. https://pubmed.ncbi.nlm.nih.gov/42061389/
- Lai et al. Obesity. 2025;33:1048–1057. DOI: 10.1002/oby.24288; PMID: 40310284. https://pubmed.ncbi.nlm.nih.gov/40310284/
- GeneReviews. Medium-chain acyl-CoA dehydrogenase deficiency; updated Sep 2024. https://www.ncbi.nlm.nih.gov/books/NBK1424/
- Rubio-Tapia et al. American College of Gastroenterology Guidelines Update: Celiac Disease. Am J Gastroenterol. 2023;118:59–76. DOI: 10.14309/ajg.0000000000002075; PMID: 36602836. https://pubmed.ncbi.nlm.nih.gov/36602836/
- 2026 ACC/AHA dyslipidemia guideline, FH testing and cascade screening. DOI: 10.1161/CIR.0000000000001423. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001423