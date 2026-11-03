# 01 — Clinical Validation Roadmap: Ancestry and Anthropometry

**Version:** 1.0 | **Date:** 2026-11-01 | **Research hypothesis only.** No calculator output is clinically validated by this roadmap.

## 1. Core prospective question

> In nonpregnant adults from prespecified European and Latin American populations, does information about regional/national self-identified background or genetically estimated ancestry **improve prediction of clinically meaningful metabolic outcomes** beyond established BMI, waist/WHtR and routine covariates, after proper local calibration and independent validation?

This is NOT the same as asking whether ancestry groups differ on average, or whether alternative BMI bands look plausible. A positive ancestry association is insufficient. The added predictor must have measurable clinical value and must not worsen calibration, equity or decision quality for smaller groups.

### Preregistered primary outcome

**Incident type 2 diabetes**, ascertained by harmonized biomarkers (HbA1c, fasting glucose and/or OGTT) and adjudicated diagnoses during defined follow-up; specify which laboratory criteria apply, use the same outcome definition at every site, and review potential variation in HbA1c interpretation. A 5-year horizon is an **initial research choice** subject to the available cohorts and event rate, not a proven optimal interval. Avoid training a “prediction” model on preexisting diabetes prevalence and then presenting it as incident risk.

### Secondary endpoints (separate outcome models)

Incident atherosclerotic cardiovascular events (MI/stroke); cardiovascular and all-cause mortality; hypertension/dyslipidemia where accurately ascertained; directly measured excess adiposity/body-fat percentage by DXA; visceral adipose tissue by MRI/CT in optional validation subsets; and incident metabolic syndrome if compatible definitions exist. No composite should mix these without preregistration. Keep **weight or “ideal weight”** outside primary endpoints until health outcomes establish a clear benefit-risk target.

## 2. Data sources and feasibility

| Study/source | Cohort and relevance | Access and critical caveat | Intended role |
|---|---|---|---|
| **HCHS/SOL** | 16,415 baseline diverse U.S. Hispanic/Latino adults (Mexican, Central American, Cuban, Dominican, Puerto Rican, South American) | [NHLBI BioLINCC data request](https://biolincc.nhlbi.nih.gov/studies/hchssol/); staged access, consent and use restrictions; confirm visit-2, follow-up, outcome, genotype availability *in approved package* | External validation of Latino heritage and risk differences; possible derivation if independent validation is assured |
| **Mexico City Prospective Study** | ~159,755 recruited; ancestry and clinical data subsets; ~134,548 in 2026 genomic T2D analysis | [CTSU/Oxford data access](https://www.ctsu.ox.ac.uk/research/mexico-city-prospective-study/data-access): baseline/mortality and genetic data for approved researchers; data-use and platform constraints; carefully confirm time ordering of variables | Mexico external geography, genomic ancestry effects and longitudinal mortality |
| **EPIC-InterAct** | 340,234 participants from eight European countries; 12,403 incident T2D cases in case-cohort analysis | Case-cohort sampling requires appropriate weights; access through investigators/consortium | European derivation/transportability; BMI vs BMI+waist |
| **ELSA-Brasil** | 15,105 recruited civil servants; Brazilian self-identified color categories and follow-up | Recruitment selection; confirm whether needed waist, diabetes, genomic ancestry, SES and end points available | Brazilian external population/context; independent from HCHS heritage labels |
| **CESCAS I** | 7,524 adults in Argentine, Chilean and Uruguayan sites | Validate event follow-up and access; regional/SES selection | Southern Cone descriptive or external validation |
| **CRONICAS Peru** | Baseline 3,088 complete metabolic records, varied Peruvian settings | Confirm follow-up/outcome permissions and altitude variables | Test normal-BMI metabolic-risk blind spots and environment |
| **CARMELA** | 11,550 cross-sectional adults in 7 Latin American cities | Prevalence only; cannot validate prospective incidence without linked outcomes | Site heterogeneity and measurement harmonization |
| **SCORE2 source/validation cohorts** | >677k development + >1.1m validation participants, country-risk regional recalibration | CVD-specific model and eligible age/risk population; do **not** reuse as a diabetes model or weight algorithm | Methodological benchmark for geographic recalibration |
| **NHANES and other external survey/imaging subsets** | US reference anthropometry, labs, some DXA/BMI and diverse self-reports | Confirm survey years, subgroups, imaging availability and that follow-up endpoints match question | Cross-sectional body-composition/measurement benchmarking; NOT substitute for incident-event validation |

**Access is not assumed:** existing data may have privacy, contractual and consent limitations. Consult each custodian, relevant IRB, and legal/data-protection review before analysis. Cohorts with no prospective outcomes are for **diagnostic/phenotype** validation only.

## 3. Data dictionary and harmonization

- **Anthropometrics:** measured height, weight, BMI, WC in cm, **WC measurement site/protocol**, hip circumference if used, sex/age, pregnancy status, repeated weight trajectory, DXA and MRI adiposity subsets; record units and reliability.
- **Clinical baseline:** HbA1c/FPG/OGTT, lipids, BP, family history, smoking, clinical CVD/diabetes status, drugs impacting weight when permitted, physical activity, nutritional exposure (context only, Team 2), social determinants.
- **Origin:** self-identified ethnicity/race, specific heritage or Indigenous nation when available, country of birth, parents' origin when consented, residence and migration duration; never impute a genetic fraction from these.
- **Genomic ancestry:** high-quality global ancestry estimates with reference panel and uncertainty, optional local ancestry/genotype if approved; genotyping quality control, admixture and population structure, missingness and principal components.
- **Social/environmental:** education, income/occupation, neighborhood indices, rurality, altitude, age at migration, healthcare access, sampling weights, recruitment site and calendar period.
- **Labels:** pre-existing vs incident outcome, event date/censoring, method of ascertainment; limit analysis to confirmed eligible individuals.

Harmonize WC protocol (WHO midpoint vs NIH iliac crest), laboratory standardization, and glucose diagnostic timing **before** comparing threshold sensitivity. Explicitly capture missing variables and missing-not-at-random sensitivity scenarios.

## 4. Prespecified, nested comparator models

All models must predict the **same outcome on the same eligible patients and follow-up horizon**. Use transparent methods first and build up only when justified.

| Comparator | Features | Why it is needed |
|---|---|---|
| M0 | BMI (plus age and sex where clinically appropriate) | Conventional minimal reference |
| M1 | M0 + measured WC or WHtR | Test direct central-adiposity improvement without ancestry |
| M2 | M1 + routine clinical variables (e.g. family history, BP, glycemia if not leaking into outcome, lipids, smoking) | Strong, practical clinical comparator |
| M3 | M2 + country/residence/site/migration & SES variables | Separate environment and access from inherited ancestry |
| M4 | M3 + self-identified heritage **as a predictor only** | Test additional social/heritage context; no new BMI cutoff |
| M5 | M3 or M4 + continuously estimated genomic ancestry with ancestry reference-panel uncertainty | Test incremental genomic prediction under explicit consent |
| M6 (negative comparator) | The calculator's ancestry-percentage **interpolated BMI threshold**, held frozen | Directly test whether current experimental blending has any discrimination, calibration or clinical utility |

**Critical:** Models M4 and M5 do not represent treatment rules. The standard of comparison is **M2/M3**, not BMI alone; apparent improvement over a weak baseline can be clinically misleading. Use a common risk prediction scale rather than comparing raw BMI values with probability scores. For ancestry/effects, evaluate flexible interactions only with prespecified regularization and adequate data, not hand-tuned thresholds.

For European country comparisons, include a SCORE2-like *recalibration principle* where valid, not its actual coefficients for T2D. For mixed Latino populations, estimate how much of the ANC-014 observed association is preserved after M2/M3 and whether M5 **improves predictions rather than just coefficients**.

## 5. Study design and bias control

**Phase A — protocol and feasibility (preregistered).** Assemble clinical epidemiologist, obesity/diabetes clinician, statistician, Latin American and European population experts, patient representatives, and data stewards. Register endpoint, covariates, fairness strata, subgroup definitions and decision thresholds. Agree on US-vs-UK guideline interpretation before analyses.

**Phase B — descriptive baseline.** Plot BMI and WC distributions, incidence, sex/age and SES stratification, measurement reliability and missingness by region. Check whether genomic ancestry is adequately represented in rare subgroups; do not claim support when effective sample size is inadequate.

**Phase C — development/internal-external validation.** Fit interpretable flexible regression/survival models with restricted splines for BMI, WC and ancestry; use weights and time-to-event censoring properly. Apply **leave-one-country/site-out** validation and temporal holdout where possible; account for cluster sampling and related participants. Lock preprocessing before holdout testing.

**Phase D — genuinely external validation.** Apply the frozen model unchanged to at least one study in a different setting/period (e.g., HCHS/SOL-developed risk model against an eligible Mexico/Brazil cohort, *only where covariates/outcome definitions align*). If the model is recalibrated, report **before and after** recalibration, without hiding poor initial transportability. Never call repeated resampling of a single cohort external validation.

**Phase E — prospective silent deployment, then impact evaluation.** With governance approvals, prospectively capture input and endpoints without showing experimental advice to patients; assess calibration drift. If useful, evaluate changed **clinical screening decisions and actual outcomes** in a prospective pragmatic study or stepped-wedge trial. Avoid assuming higher sensitivity is automatically better given false positives and downstream costs.

## 6. Required statistics

| Dimension | Metrics to report with 95% CIs and by-group data |
|---|---|
| **Discrimination** | Time-dependent AUROC/C-statistic for incidence; AUPRC if low event prevalence; paired ΔC/AUROC M2→M5 |
| **Calibration** | Overall calibration-in-the-large (intercept), slope, flexible observed-vs-predicted curves, Brier score, observed/expected and site/ancestry-specific curves |
| **Threshold accuracy** | At prespecified screening action points: sensitivity, specificity, PPV, NPV, number needed to evaluate, false-positive/false-negative rates |
| **Clinical utility** | Decision-curve net benefit across **clinician-approved** risk probability thresholds; comparison with screen-all, screen-none and current practice |
| **Adiposity construct** | BMI/WC vs DXA high-fat and MRI/CT visceral adiposity: agreement/error and calibration by sex, age, muscle mass and site |
| **Fairness / transportability** | Outcome capture rates, miscalibration, threshold harms and subgroup sample sizes by sex, age, site, national origin, Indigenous identity where available, and genomic admixture quantiles |
| **Robustness** | Sensitivity to WC protocol, missingness, SES, rurality, migration, medications, variable definitions, population-genetics reference panels and unexpected model interactions |

For decision curves, see [Vickers & Elkin, 2006](https://doi.org/10.1177/0272989X06295361). **Net benefit** must show improvements at *relevant* decision points, not simply a small p-value or a biomarker regression association.

## 7. Sample size and uncertainty

No magic sample-size number can honestly be prescribed without expected incidence, number of parameters, predictors' collinearity, desired calibration precision and subgroup proportions. For **each** subgroup and external cohort, calculate minimum events/non-events needed to bound calibration and sensitivity/specificity CIs and run simulation/power calculations for the smallest clinically meaningful ΔC-statistic/net benefit. Do not subdivide Nordic/Mediterranean, Mexican/Central American, or Indigenous groups if this leaves insufficient events. Pooling is acceptable for *model fitting* with hierarchical partial pooling and transparent stratum-level uncertainty; pooling must not erase subgroup-specific performance reporting.

External validation must reflect complete-case vs multiply-imputed estimates, valid sampling weights and uncertainty in genomic ancestry proportions. Use the same pre-specified pipeline on all datasets.

## 8. Go/no-go criteria

The project should not set numerical “success thresholds” retroactively. The steering group should preregister minimum meaningful net benefit, maximum acceptable calibration error, and acceptable subgroup disparity in harm **before outcomes are viewed**, based on patient/clinician decision consequences. Report actual values and intervals, even if results are negative.

**Go** for a risk-prediction research prototype if the model yields stable, externally reproduced incremental value over BMI+waist+routine clinical factors, is transparently calibrated and auditable, and has acceptable subgroup performance. **No go** for a clinical label/optimal-weight claim if validation relies on a single cohort, ancestry cutoff interpolation, marginal association only, unrepresentative ethnic labels, poor subgroup sample size, or inconsistent outcomes. Clinical-facing changes additionally require clinician review, safety/privacy assessment and prospective utility assessment.

## 9. Reporting and reproducibility

Use [TRIPOD+AI](https://doi.org/10.1136/bmj-2023-078378) to report each predictive model and [PROBAST+AI](https://doi.org/10.1136/bmj-2024-082505) to examine bias/applicability. Keep preregistration, inclusion diagram, data dictionary, code, held-out results, full negative findings, software versions and appropriately de-identified data access protocol. If genomic data are used, follow legal/ethical restrictions and document reference-panel bias. Maintain a traceable mapping from validated claims to ANC IDs before proposing code changes.

## 10. Division of responsibilities and integration gate

- **Team 1:** phenotype and ancestry definitions, population sampling, confounding, comparator risk models, threshold provenance.
- **Team 2:** family history, heritable conditions, nutrition-genotype evidence; new variables must pass incremental validity and should not inherit ancestry coefficients as diet effects.
- **Team 3:** clinically relevant pharmacogenes and allele interpretation; no dosing decisions are derivable from BMI-by-ancestry modeling.
- **Unified steering review:** verifies claims do not conflict, ensures no pathway overrides another, and decides whether findings stay in informational layer, research-only model, or guideline-supported clinical feature.