# Team 1 — Ancestry Evidence Matrix

**Version:** 1.0 | **Evidence cutoff:** 2026-11-01 | **Scope:** anthropometric/metabolic ancestry questions, not nutrition or pharmacogenetic prescribing.

## Interpretation rules

- Each record is a distinct claim, not a group-level causal judgment. `ANC-*` identifiers are stable for cross-team merges.
- Grade A = current relevant guideline or robust consensus; B = substantial cohort or observational evidence; C = smaller, cross-sectional, or methodologically limited evidence; D = unsupported exploratory hypothesis or evidence gap. These are **project review grades**, not GRADE certainty. A guideline-supported *policy* can still have observational underpinning.
- `effect_estimate_and_uncertainty = not available` means it was **not present in the verified source material**, not an estimate of zero.
- `clinical_status` uses only: guideline-supported, observational, exploratory, insufficient, contradicted.
- Clinical recommendations are jurisdictional and context-specific; no BMI-risk association is equivalent to an individually optimal weight.

## ANC-001 — BMI action points; Asian populations

- `claim_id`: ANC-001
- `domain`: BMI action points; Asian populations
- `population_definition`: Asian population groups in WHO 2004 expert synthesis, not one homogeneous ancestry
- `exposure_or_variant`: BMI; cardiometabolic risk
- `outcome`: Risk occurs below international BMI 25 in some groups
- `effect_estimate_and_uncertainty`: Observed-risk levels varied approximately BMI 22–25; high-risk levels 26–31; action points 23 and 27.5 proposed; no pooled effect/CI supplied in consultation abstract
- `study_design`: WHO expert consultation, evidence synthesis (2004)
- `source_doi_pmid_or_url`: https://doi.org/10.1016/S0140-6736(03)15268-3
- `evidence_grade`: A—authoritative consensus, heterogeneous underpinning
- `clinical_status`: guideline-supported
- `limitations`: WHO retained international categories and did not set a unique biologic threshold for every Asian subgroup. Action point is not ideal weight.
- `cross_stream_dependencies`: Team 2: condition-specific risk may modify screening, not BMI algebra
- `integration_target`: Guideline registry / threshold provenance
- `validation_next_step`: Retain reference thresholds with explicit source and country applicability; check current local policies.

## ANC-002 — UK BMI screening

- `claim_id`: ANC-002
- `domain`: UK BMI screening
- `population_definition`: UK residents identifying as South Asian, Chinese, other Asian, Middle Eastern, Black African or African-Caribbean
- `exposure_or_variant`: NICE NG246 BMI categories
- `outcome`: Overweight/obesity assessment
- `effect_estimate_and_uncertainty`: NICE practical lower bands: overweight 23–27.4; obesity ≥27.5 kg/m²; guideline recommendation, not sample-based effect estimate
- `study_design`: NICE guideline NG246 recommendation 1.9.11 (2022 wording in 2025 guideline)
- `source_doi_pmid_or_url`: https://www.nice.org.uk/guidance/ng246/chapter/Identifying-and-assessing-overweight-obesity-and-central-adiposity
- `evidence_grade`: A—current guideline
- `clinical_status`: guideline-supported
- `limitations`: NICE recommendations are jurisdictional, not proof that all included ancestries share the same biology. No Latin-American-specific thresholds.
- `cross_stream_dependencies`: Team 3: do not extrapolate to medication dosing
- `integration_target`: Jurisdiction-specific screening profile
- `validation_next_step`: Distinguish NICE mode from ADA mode in test vignettes and documentation.

## ANC-003 — US obesity assessment

- `claim_id`: ANC-003
- `domain`: US obesity assessment
- `population_definition`: Nonpregnant adults; ADA-defined Asian background versus non-Asian background
- `exposure_or_variant`: BMI plus waist-to-height ratio or waist circumference
- `outcome`: Excess adiposity screening; classification of overweight/obesity
- `effect_estimate_and_uncertainty`: ADA 2026: non-Asian screening BMI ≥25, obesity ≥30 or BMI ≥25 plus WHtR ≥0.5 / WC ≥88 cm women, ≥102 cm men; Asian BMI ≥23, obesity ≥27.5 or BMI ≥23 plus WHtR ≥0.5 / WC ≥80 cm women, ≥90 cm men; recommendation grade B
- `study_design`: ADA Obesity Standards of Care 2026, recommendations 3.2–3.3
- `source_doi_pmid_or_url`: https://doi.org/10.2337/doci26-0003
- `evidence_grade`: A—current guideline; recommendations B
- `clinical_status`: guideline-supported
- `limitations`: Screening/diagnostic categories are not personalized optimal weight. Muscle mass, older age, clinical context matter.
- `cross_stream_dependencies`: Team 2: disease and family history modify follow-up, not classification equation
- `integration_target`: US screening profile / source date
- `validation_next_step`: Reproduce ADA guideline vignettes, verify exact BMI/waist rules and contrast with NICE.

## ANC-004 — Mixed background policy

- `claim_id`: ANC-004
- `domain`: Mixed background policy
- `population_definition`: People reporting mixed race, ethnicity or ancestral background
- `exposure_or_variant`: Guideline acknowledgement of mixed-background uncertainty
- `outcome`: Clinical BMI/waist rule selection
- `effect_estimate_and_uncertainty`: ADA 2026 explicitly notes evidence gap; advises clinicians to use background with which individual identifies; no effect size or percentage-based formula validated
- `study_design`: Current guideline commentary
- `source_doi_pmid_or_url`: https://doi.org/10.2337/doci26-0003
- `evidence_grade`: A for existence of guidance; D for hypothetical interpolation
- `clinical_status`: guideline-supported
- `limitations`: Not an automated largest-genomic-share algorithm; user selection should be explicit. Clinical utility of identity-based rule itself needs validation.
- `cross_stream_dependencies`: Team 2/3: use specific measured/genotyped traits where indicated, not ethnicity as substitute
- `integration_target`: Mixed-background user flow; algorithm guardrails
- `validation_next_step`: Compare rule choices against measured outcomes; test that no default infers clinical identity from largest percentage.

## ANC-005 — European T2D prediction

- `claim_id`: ANC-005
- `domain`: European T2D prediction
- `population_definition`: EPIC-InterAct, 340,234 adults from 26 centers in 8 European countries, 12,403 incident T2D
- `exposure_or_variant`: BMI plus waist circumference
- `outcome`: Incident type 2 diabetes
- `effect_estimate_and_uncertainty`: Combined high BMI ≥35 and high WC (>102 men/>88 women) vs low BMI 18.5–22.4 and low WC HR 22.0 (95% CI 14.3–33.8) men; 31.8 (25.2–40.2) women
- `study_design`: Prospective case-cohort, 3.99 million person-years
- `source_doi_pmid_or_url`: https://pubmed.ncbi.nlm.nih.gov/22679397/
- `evidence_grade`: B—large prospective cohort
- `clinical_status`: observational
- `limitations`: Extreme category contrast; estimates do not imply Nordic-vs-Mediterranean cutoffs or an optimal weight.
- `cross_stream_dependencies`: Team 2: risk-modifier contexts
- `integration_target`: BMI + WC feature comparison
- `validation_next_step`: Use multiple European cohorts; test waist incremental value and clinical outcome calibration by country.

## ANC-006 — European CVD geographic context

- `claim_id`: ANC-006
- `domain`: European CVD geographic context
- `population_definition`: Europe: 45 derivation cohorts in 13 countries, n=677,684; 25 external validation cohorts n=1,133,181
- `exposure_or_variant`: European residence-country CVD mortality risk region
- `outcome`: Predicted 10-year fatal/nonfatal CVD risk
- `effect_estimate_and_uncertainty`: 30,121 derivation and 43,492 validation events; C indices 0.67–0.81; illustrative male risk 5.9% low-risk vs 14.0% very-high-risk region under identical factors
- `study_design`: Derivation/recalibration/external validation of SCORE2
- `source_doi_pmid_or_url`: https://doi.org/10.1093/eurheartj/ehab309
- `evidence_grade`: A for validated region-calibrated CVD risk model
- `clinical_status`: observational
- `limitations`: Risk regions represent geography/population incidence, not inherited Nordic, Slavic, or Mediterranean metabolic phenotypes; SCORE2 applicability excludes prior CVD/diabetes and targets ages 40–69.
- `cross_stream_dependencies`: Team 2: existing risk factors; Team 3 none for weight thresholds
- `integration_target`: Country-of-residence risk context, separate from ancestry
- `validation_next_step`: Test country calibration and transportability; do not port SCORE2 coefficients into weight estimator.

## ANC-007 — European prediction transportability

- `claim_id`: ANC-007
- `domain`: European prediction transportability
- `population_definition`: EPIC-InterAct case-cohort in 8 European countries, n=27,779 including 12,403 cases
- `exposure_or_variant`: 12 existing non-laboratory T2D risk scores
- `outcome`: External discrimination and calibration
- `effect_estimate_and_uncertainty`: C statistics 0.76–0.81 overall; DPoRT overpredicted 34% (95% CI 29–39); Cambridge overpredicted 40% (28–52); p heterogeneity <0.0001 for most models
- `study_design`: External validation study (2014)
- `source_doi_pmid_or_url`: https://doi.org/10.1016/S2213-8587(13)70103-7
- `evidence_grade`: B—multi-country validation
- `clinical_status`: observational
- `limitations`: Performance differed by country, age, sex and adiposity; scores developed mostly for European-origin samples.
- `cross_stream_dependencies`: Team 2: risk factors; Team 3 none
- `integration_target`: Calibration protocol / geographic covariates
- `validation_next_step`: Require per-country calibration tables and held-out validation for ancestry refinement.

## ANC-008 — European genetic population structure

- `claim_id`: ANC-008
- `domain`: European genetic population structure
- `population_definition`: ~3,000 European participants with >500,000 common SNP markers
- `exposure_or_variant`: Geographic genetic structure, not disease variants
- `outcome`: Ability to infer geographic origin
- `effect_estimate_and_uncertainty`: Genetic structure tracked geography despite low mean differentiation; no obesity or diabetes effect size estimated
- `study_design`: Population-genetic characterization (2008)
- `source_doi_pmid_or_url`: https://doi.org/10.1038/nature07331
- `evidence_grade`: B—genotype structure; D for clinical risk extrapolation
- `clinical_status`: observational
- `limitations`: Ancestry gradients not proof of independent metabolic-risk effects. Historical sampling, limited modern representativeness.
- `cross_stream_dependencies`: Team 2/3: variant frequencies can vary within Europe
- `integration_target`: Optional provenance descriptor, never cutoffs
- `validation_next_step`: Test genetic-region incremental value for clinical outcomes after geography and socioeconomic adjustment.

## ANC-009 — Ethnic comparators for T2D risk

- `claim_id`: ANC-009
- `domain`: Ethnic comparators for T2D risk
- `population_definition`: England EHR cohort n=1,472,819; White 1,333,816; South Asian 75,956; Black 49,349; Chinese 10,934; Arab 2,764
- `exposure_or_variant`: BMI level producing same T2D incidence as White BMI 30
- `outcome`: Incident type 2 diabetes
- `effect_estimate_and_uncertainty`: Equivalence: South Asian BMI 23.9 (95% CI 23.6–24.0); Black 28.1 (28.0–28.4); Chinese 26.9 (26.7–27.2); Arab 26.6 (26.5–27.0); 97,823 T2D diagnoses
- `study_design`: Population-based EHR cohort; median 6.5 years follow-up
- `source_doi_pmid_or_url`: https://pubmed.ncbi.nlm.nih.gov/33989535/
- `evidence_grade`: B—large adjusted observational cohort
- `clinical_status`: observational
- `limitations`: Equivalence pertains to one outcome and UK social context; broad ethnicity groups; modest Arab n; should not silently replace ADA or NICE numbers.
- `cross_stream_dependencies`: Team 2: incident disease risk; not dietary target
- `integration_target`: Threshold provenance and cross-jurisdiction caveat
- `validation_next_step`: Externally validate equivalence against other outcomes and measured ancestry/waist data.

## ANC-010 — Latino diabetes heterogeneity

- `claim_id`: ANC-010
- `domain`: Latino diabetes heterogeneity
- `population_definition`: HCHS/SOL 16,415 enrolled, 16,385 in analyzed diabetes table; U.S. adults 18–74 from four urban centers; self-identified national origins
- `exposure_or_variant`: Hispanic/Latino background
- `outcome`: Prevalent diabetes
- `effect_estimate_and_uncertainty`: Weighted prevalence 16.9% (95% CI 16.11–17.69); Mexican 18.3% (16.84–19.86); Central American 17.7% (15.36–20.22); Cuban 13.4% (12.03–14.91); Dominican 18.1% (16.21–20.13); Puerto Rican 18.1% (16.30–19.98); South American 10.2% (8.36–12.29)
- `study_design`: Multicenter population-based baseline cross-sectional analysis
- `source_doi_pmid_or_url`: https://doi.org/10.2337/dc13-2939
- `evidence_grade`: B—large sample, measured glycemic phenotypes
- `clinical_status`: observational
- `limitations`: US urban heritage groups not genetic ancestry or full nations; prevalence confounded by age, access, duration in US, SES, lifestyle, selection.
- `cross_stream_dependencies`: Team 2: baseline disease burden; Team 3: no extrapolation to allele frequencies
- `integration_target`: Latino disaggregation / contextual risk notes
- `validation_next_step`: Compare calibrated incident-risk models across groups with harmonized covariates and sites.

## ANC-011 — Latino environment and adiposity

- `claim_id`: ANC-011
- `domain`: Latino environment and adiposity
- `population_definition`: HCHS/SOL 16,415 adults 18–74 in four U.S. cities
- `exposure_or_variant`: Acculturation, migration and background
- `outcome`: Measured obesity prevalence
- `effect_estimate_and_uncertainty`: 42.4% of women and 36.5% of men had obesity; varied by recruitment site and background; exact adjusted associations not extracted for this evidence record
- `study_design`: Cross-sectional observational associations
- `source_doi_pmid_or_url`: https://doi.org/10.1155/2015/186276
- `evidence_grade`: B for prevalence; C for causal interpretation
- `clinical_status`: observational
- `limitations`: Acculturation proxies imperfect; urban participants and cross-sectional design cannot prove causality.
- `cross_stream_dependencies`: Team 2: dietary context without prescribing diet
- `integration_target`: Confounder register
- `validation_next_step`: Test migration age, duration of residence and SES interactions in incident outcomes.

## ANC-012 — Latino waist validation

- `claim_id`: ANC-012
- `domain`: Latino waist validation
- `population_definition`: HCHS/SOL n=16,289, men 6,526 women 9,763, self-identified U.S. Hispanic/Latino adults
- `exposure_or_variant`: Waist circumference and prevalent coronary heart disease
- `outcome`: CHD discrimination
- `effect_estimate_and_uncertainty`: Study-derived WC criterion: ~102 cm men sensitivity 50.6%, specificity 64.0%; ~97 cm women 65.4%/51.3%; women at 88 cm 87.7%/24.2%
- `study_design`: Cross-sectional ROC cut-point optimization (2020)
- `source_doi_pmid_or_url`: https://doi.org/10.2337/dc19-1855
- `evidence_grade`: C—outcome-specific cross-sectional discrimination
- `clinical_status`: exploratory
- `limitations`: Prevalent CHD not prospective CVD; Youden optimization can overfit and ignores clinical costs; site and sex differences; NOT guideline threshold. Paper uses > in narrative and tabulates 97/102.
- `cross_stream_dependencies`: Team 2: clinical CVD outcomes; Team 3 none
- `integration_target`: Waist threshold candidate only in research track
- `validation_next_step`: External prospective validation against new CHD events and decision-curve net benefit; keep ADA waist thresholds in clinical display.

## ANC-013 — Mexican general vs central adiposity

- `claim_id`: ANC-013
- `domain`: Mexican general vs central adiposity
- `population_definition`: Mexico City prospective sample 159,755 recruited, main analytic n=115,400 aged 35–<75 free of major disease
- `exposure_or_variant`: BMI, waist and waist-to-hip ratio
- `outcome`: All-cause mortality
- `effect_estimate_and_uncertainty`: Above BMI 25 each +5 kg/m² associated with mortality HR 1.30 (95% CI 1.24–1.36); BMI mortality minimum at 25–<27.5 in this observational population
- `study_design`: Prospective recruitment 1998–2004; exclusion of baseline disease; first 5y excluded
- `source_doi_pmid_or_url`: https://pubmed.ncbi.nlm.nih.gov/31404923/
- `evidence_grade`: B—large longitudinal cohort
- `clinical_status`: observational
- `limitations`: J-shaped minimum does not constitute healthy BMI target; competing causes, selection, reverse causality, population-specific baseline mortality.
- `cross_stream_dependencies`: Team 2: diabetes and disease status; avoid translating mortality nadir into diet targets
- `integration_target`: Central adiposity alongside BMI; caution re ideal weight
- `validation_next_step`: Compare BMI+WHtR/WC for incident diabetes, mortality, and CVD with external datasets.

## ANC-014 — Genomic ancestry and diabetes in Mexico

- `claim_id`: ANC-014
- `domain`: Genomic ancestry and diabetes in Mexico
- `population_definition`: Mexico City Prospective Study n=134,548 genetically profiled Mexican adults; mean Indigenous American genomic ancestry 66.2% (SD 17.9)
- `exposure_or_variant`: Per +20 percentage-point Indigenous American genomic ancestry
- `outcome`: Prevalent T2D and prediabetes
- `effect_estimate_and_uncertainty`: Adjusted OR for T2D 1.33 (95% CI 1.31–1.36) and prediabetes 1.18 (1.16–1.20), controlling for SES, lifestyle, BMI, waist-hip ratio and demographics; age/sex only OR 1.45 and 1.28
- `study_design`: Cross-sectional genetic and clinical analysis published 2026
- `source_doi_pmid_or_url`: https://doi.org/10.1016/S2468-2667(25)00305-6
- `evidence_grade`: B—large adjusted observational genomic cohort
- `clinical_status`: observational
- `limitations`: Residual social/population stratification and reverse causation of adiposity; diabetes defined partly by HbA1c; not proof of causal ancestry or calibrated individual risk; no optimal BMI threshold or percentage blending supported.
- `cross_stream_dependencies`: Team 2: genetic disease susceptibility / polygenic scores; Team 3: ancestry != drug allele genotype
- `integration_target`: Ancestry research-only risk feature; no action point
- `validation_next_step`: Test incremental discrimination, calibration, decision utility of ancestry % beyond clinical variables in independent Mexican/Latino cohorts, plus SES sensitivity.

## ANC-015 — Ancestry and socioeconomic confounding

- `claim_id`: ANC-015
- `domain`: Ancestry and socioeconomic confounding
- `population_definition`: Case-control Mexico 163 cases/72 controls; Medellín Colombia 499 cases/197 controls
- `exposure_or_variant`: Estimated European genetic ancestry and socioeconomic status
- `outcome`: Type 2 diabetes case-control odds
- `effect_estimate_and_uncertainty`: Colombia ancestry OR 0.26 (95% CI 0.08–0.78) unadjusted for SES, then 0.64 (0.19–2.12) with SES; Mexico 0.06 (0.02–0.21) then 0.17 (0.04–0.71)
- `study_design`: Observational case-control with 67 ancestry markers (2009)
- `source_doi_pmid_or_url`: https://pubmed.ncbi.nlm.nih.gov/19526211/
- `evidence_grade`: C—small case-control; illustrates confounding
- `clinical_status`: observational
- `limitations`: OR contrasts represent model ancestry scaling as authored; do not interpret as per 1% ancestry. Wide CI, sparse markers and historical sample.
- `cross_stream_dependencies`: Team 2: gene-environment interaction design
- `integration_target`: Confounder and fairness checks
- `validation_next_step`: Replicate with genome-wide markers and prospectively recorded SES, site and access to care.

## ANC-016 — Within-Latino ancestry BMI associations

- `claim_id`: ANC-016
- `domain`: Within-Latino ancestry BMI associations
- `population_definition`: HCHS/SOL n=7,075 with genetic data; six heritage groups
- `exposure_or_variant`: Amerindigenous ancestry, BMI polygenic score, migration/diet modifiers
- `outcome`: BMI association
- `effect_estimate_and_uncertainty`: Pooled AME-BMI slope β≈−0.001, p=0.044, association becomes null after group stratification; no validated clinical threshold
- `study_design`: Survey-weighted stratified and joint genetic association modeling (2025)
- `source_doi_pmid_or_url`: https://doi.org/10.1016/j.xhgg.2025.100451
- `evidence_grade`: C—observational genetic/environmental interaction study
- `clinical_status`: exploratory
- `limitations`: Weak pooled association; stratification suggests group confounding, and BMI PGS transferability issues. Does not authorize personal dietary advice.
- `cross_stream_dependencies`: Team 2: PGS and diet-response hypotheses only; Team 3 none
- `integration_target`: No direct BMI adjustment; stratified design
- `validation_next_step`: Test replicated interactions with correction for multiplicity and external cohorts.

## ANC-017 — Peruvian metabolically unhealthy normal BMI

- `claim_id`: ANC-017
- `domain`: Peruvian metabolically unhealthy normal BMI
- `population_definition`: CRONICAS n=3,088 participants ≥35 across Lima, Tumbes, urban/rural Puno
- `exposure_or_variant`: Standard BMI categories and metabolic testing
- `outcome`: Metabolic abnormalities despite BMI 18.5–24.9
- `effect_estimate_and_uncertainty`: Among normal BMI, 43.1% had ≥2 metabolic abnormalities; 19.0% had ≥3 risk factors versus 54.9% overweight and 77.7% obese (p<0.001)
- `study_design`: Cross-sectional baseline of longitudinal cohort (2015)
- `source_doi_pmid_or_url`: https://doi.org/10.1371/journal.pone.0138968
- `evidence_grade`: B—well-characterized observational sample
- `clinical_status`: observational
- `limitations`: Composite includes inflammatory markers and insulin resistance and differs from conventional MetS; geography/altitude and socioeconomic confounding; does not validate low BMI cutoffs.
- `cross_stream_dependencies`: Team 2: condition prevalence and lab-test follow-up
- `integration_target`: Warn BMI-only under-recognition; prioritize clinical measurements
- `validation_next_step`: Prospective incidence and replicated outcomes in Peru/other Andean communities.

## ANC-018 — Latin American urban variability

- `claim_id`: ANC-018
- `domain`: Latin American urban variability
- `population_definition`: CARMELA n=11,550 adults age 25–64 in Barquisimeto, Bogotá, Buenos Aires, Lima, Mexico City, Quito, Santiago
- `exposure_or_variant`: City of residence, metabolic markers
- `outcome`: Obesity, diabetes, metabolic syndrome, plaque
- `effect_estimate_and_uncertainty`: City prevalence ranges: obesity (BMI ≥30) 18–27%, diabetes 4–9%, metabolic syndrome 14–27%; pooled obesity 23%
- `study_design`: Multicountry urban cross-sectional probability sample (2008)
- `source_doi_pmid_or_url`: https://doi.org/10.1016/j.amjmed.2007.08.038
- `evidence_grade`: B—regional population sample, descriptive
- `clinical_status`: observational
- `limitations`: Cities not national representativeness; no genome-wide ancestry; different healthcare access and years.
- `cross_stream_dependencies`: Team 2: condition frequencies for research planning
- `integration_target`: Geography/context, not personalized ancestry cutoff
- `validation_next_step`: Re-estimate with recent population-based national cohorts, collect SES and migration.

## ANC-019 — Southern Cone cardiometabolic burden

- `claim_id`: ANC-019
- `domain`: Southern Cone cardiometabolic burden
- `population_definition`: CESCAS I n=7,524 age 35–74; four urban/rural sites in Argentina, Chile, Uruguay
- `exposure_or_variant`: BMI and waist; geography
- `outcome`: Metabolic syndrome and risk factors
- `effect_estimate_and_uncertainty`: Obesity 35.7%, central obesity 52.9%, diabetes 12.4%, metabolic syndrome 37.4% (descriptive; no CI in abstract)
- `study_design`: Cross-sectional population-based baseline (2010–11)
- `source_doi_pmid_or_url`: https://pubmed.ncbi.nlm.nih.gov/25662056/
- `evidence_grade`: B—population-based standardized measurement
- `clinical_status`: observational
- `limitations`: Not a national-origin ethnicity comparison and cannot infer European/Indigenous/African ancestry or optimal thresholds.
- `cross_stream_dependencies`: Team 2: disease surveillance, no diet directive
- `integration_target`: Southern Cone underrepresented sample / candidate validation data
- `validation_next_step`: Seek prospective follow-up and country/ancestry variables before modeling.

## ANC-020 — Brazilian ancestry and social categories

- `claim_id`: ANC-020
- `domain`: Brazilian ancestry and social categories
- `population_definition`: ELSA-Brasil n=15,105 employed/retired civil servants recruited in six Brazilian cities
- `exposure_or_variant`: Self-identified White, Black and Brown (pardo) categories
- `outcome`: Population representation of ancestry/race
- `effect_estimate_and_uncertainty`: At baseline: 52.2% White, 16.1% Black, 28.2% Brown; descriptive only, no BMI efficacy estimate
- `study_design`: ELSA-Brasil cohort profile (2014)
- `source_doi_pmid_or_url`: https://doi.org/10.1093/ije/dyu027
- `evidence_grade`: B—established longitudinal cohort, no threshold test here
- `clinical_status`: observational
- `limitations`: Brazilian race/color categories are social and not genomic fractions; civil service/education sample is nonrepresentative of country; categories do not cleanly map to other Latin nations.
- `cross_stream_dependencies`: Team 2: hereditary risk independent of Brazilian color labels; Team 3: PGx requires genotype
- `integration_target`: Brazil-specific data integration taxonomy
- `validation_next_step`: Assess access to longitudinal BMI, waist, diabetes and measured genomic ancestry; test transportability.

## ANC-021 — Waist protocol reliability

- `claim_id`: ANC-021
- `domain`: Waist protocol reliability
- `population_definition`: 120-study review cited by international visceral obesity consensus across adult populations
- `exposure_or_variant`: WHO midpoint vs NIH iliac crest waist measurement
- `outcome`: Reproducibility and category assignment
- `effect_estimate_and_uncertainty`: Associations with morbidity/mortality broadly similar across protocols; absolute measured differences larger in women and classification may change; numeric pooled difference not given in statement
- `study_design`: Expert consensus and systematic-review synthesis (2020)
- `source_doi_pmid_or_url`: https://pmc.ncbi.nlm.nih.gov/articles/PMC7027970/
- `evidence_grade`: B—consensus grounded in systematic review
- `clinical_status`: guideline-supported
- `limitations`: Method must be captured in validation; never interchange cut-points without examining protocol.
- `cross_stream_dependencies`: Team 2/3: shared measured phenotype definitions
- `integration_target`: Data dictionary; measurement instructions
- `validation_next_step`: Record site/protocol, repeat measurements, assess error and category switching by sex.

## ANC-022 — Clinical obesity vs screening

- `claim_id`: ANC-022
- `domain`: Clinical obesity vs screening
- `population_definition`: International Lancet Diabetes Endocrinology Commission (2025), general adult clinical context
- `exposure_or_variant`: BMI vs confirmed adiposity and organ dysfunction
- `outcome`: Clinical obesity diagnostic construct
- `effect_estimate_and_uncertainty`: Consensus: BMI alone may misclassify adiposity; confirm adiposity and assess organ/tissue dysfunction for clinical obesity; no universal effect size
- `study_design`: Expert commission consensus
- `source_doi_pmid_or_url`: https://doi.org/10.1016/S2213-8587(24)00316-4
- `evidence_grade`: A—authoritative consensus, not one outcome trial
- `clinical_status`: guideline-supported
- `limitations`: Commission definition is not identical to ADA 2026 criteria; display differences and do not relabel the calculator as making a clinical diagnosis.
- `cross_stream_dependencies`: Team 2: organ dysfunction and condition domains
- `integration_target`: Terminology and non-diagnostic language
- `validation_next_step`: Validate against direct adiposity and end-organ outcomes, not only BMI group.

## ANC-023 — Diabetes screening context USA

- `claim_id`: ANC-023
- `domain`: Diabetes screening context USA
- `population_definition`: ADA 2026 adults with overweight/obesity plus risk factor; high-risk ethnic/racial groups included
- `exposure_or_variant`: BMI and family history, high-risk demographic context
- `outcome`: Recommendation to consider diabetes testing
- `effect_estimate_and_uncertainty`: Consider testing when BMI ≥25 or ≥23 in Asian ancestry plus one or more risk factors including Latino / Native American status; no effect size because recommendation
- `study_design`: ADA 2026 Standards of Care in Diabetes, ch. 2
- `source_doi_pmid_or_url`: https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes
- `evidence_grade`: A—current guideline
- `clinical_status`: guideline-supported
- `limitations`: Screening eligibility is not a special Latino BMI criterion, nor a clinical claim for ideal BMI.
- `cross_stream_dependencies`: Team 2: hereditary disease/family history; avoid numerical weight target
- `integration_target`: Cross-ref referral/testing prompt
- `validation_next_step`: Independent guideline review and user testing that triggers screening note not dosage/diet advice.

## ANC-024 — Calculator method: ancestry fractional interpolation

- `claim_id`: ANC-024
- `domain`: Calculator method: ancestry fractional interpolation
- `population_definition`: Mixed users selecting calculator blend option; no validation cohort
- `exposure_or_variant`: Linear combination of BMI 25/30 and 23/27.5 using percent assigned to low category
- `outcome`: Computed overweight/obesity thresholds and weight bands
- `effect_estimate_and_uncertainty`: Formula in current source: weighted interpolation; e.g. 50% produces overweight 24.0 and obesity 28.8; no observational effect estimate or trial
- `study_design`: Source-code audit (lines ~3038–3068), compared with mixed-background guideline gap
- `source_doi_pmid_or_url`: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/optimal_body_weight_calculator-9.html ; https://doi.org/10.2337/doci26-0003
- `evidence_grade`: D—unsourced model construct
- `clinical_status`: insufficient
- `limitations`: Ethnicity labels overlap and genetic percentages are not screening-rule effect sizes; no calibration, calibration slope or transportability; ADA does not recommend blending.
- `cross_stream_dependencies`: Team 2/3: must never inherit this multiplier into genetic disease or drug data
- `integration_target`: Nonclinical exploratory sandbox only
- `validation_next_step`: Benchmark vs unadjusted BMI+waist; require preregistered external validation and decision benefit before any deployment.

## ANC-025 — Calculator method: ancestry-conditioned diabetes cap

- `claim_id`: ANC-025
- `domain`: Calculator method: ancestry-conditioned diabetes cap
- `population_definition`: Asian background or fractional ancestry with diabetes/prediabetes/family history selected
- `exposure_or_variant`: BMI 22 buffer start, blended with 25 for mixed, automatic upper weight cap 0.1 below
- `outcome`: Suggested personal weight ceiling
- `effect_estimate_and_uncertainty`: Code uses 22.0 for Asian-derived buffer, scaled by ancestry percentage, and cap at 21.9 for 100% Asian before family-history check; no validated effect/CI
- `study_design`: Source-code audit (lines ~3194–3245 and 3424–3428)
- `source_doi_pmid_or_url`: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/optimal_body_weight_calculator-9.html ; https://doi.org/10.1016/S0140-6736(03)15268-3
- `evidence_grade`: D—unsupported translation of population association to individual prescription
- `clinical_status`: insufficient
- `limitations`: WHO 2004 risk continuum is NOT a validated treatment target; automatic cap can suggest unnecessarily low weight; no clinical outcome trial.
- `cross_stream_dependencies`: Team 2: condition/medical target assessment, avoid nutrition instructions
- `integration_target`: Remove from clinical-facing range; retain descriptive risk note at most
- `validation_next_step`: Require separate clinician-led outcomes trial before implementing weight-target logic.

## ANC-026 — European subdivision thresholds

- `claim_id`: ANC-026
- `domain`: European subdivision thresholds
- `population_definition`: Nordic/Scandinavian, Mediterranean, Central and Eastern European descent and residence, not assumed to be genetic bins
- `exposure_or_variant`: Regional group labels as proposed predictors
- `outcome`: Different ideal BMI, waist thresholds or metabolic risk
- `effect_estimate_and_uncertainty`: No verified guideline or externally validated outcome-equivalent numeric cutoffs identified by this targeted review; effect estimate not available
- `study_design`: Negative evidence gap from guideline audit and large European risk studies
- `source_doi_pmid_or_url`: https://www.nice.org.uk/guidance/ng246/chapter/Identifying-and-assessing-overweight-obesity-and-central-adiposity
- `evidence_grade`: D—no clinically actionable cutoffs verified
- `clinical_status`: insufficient
- `limitations`: Absence of established standard is not evidence of identical physiology; review not formal systematic meta-analysis.
- `cross_stream_dependencies`: Team 2/3: geography may inform frequencies, never untested weight bands
- `integration_target`: Research-only geographic details
- `validation_next_step`: Preregister harmonized cohorts comparing clinical metrics with/without regional or genetic predictors.

## ANC-027 — Frame-adjusted ideal weight heuristic

- `claim_id`: ANC-027
- `domain`: Frame-adjusted ideal weight heuristic
- `population_definition`: Adults with wrist/elbow frame measurement; source calculator uses Hamwi/Devine/Robinson/Miller
- `exposure_or_variant`: Height/wrist and elbow cutoffs; Hamwi ±10%, formula intersection with BMI
- `outcome`: Proposed optimal weight band
- `effect_estimate_and_uncertainty`: No validated ancestry-specific calibration or clinical outcome effect reported for this combination
- `study_design`: Source-code audit (lines ~3154–3192); classic formula review
- `source_doi_pmid_or_url`: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/optimal_body_weight_calculator-9.html ; https://pmc.ncbi.nlm.nih.gov/articles/PMC4841935/
- `evidence_grade`: D—legacy heuristic not proven to identify metabolic optimum
- `clinical_status`: insufficient
- `limitations`: Formulas were developed for other purposes incl. drug dosing; untested waist/ancestry interaction; subjective false precision.
- `cross_stream_dependencies`: Team 2/3: should not be used for diet target or medication dose
- `integration_target`: Separate anthropometric exploratory display
- `validation_next_step`: Directly compare outputs with DXA adiposity and longitudinal outcomes; remove individualized optimal claim pending validation.

## ANC-028 — Subcontinental genomic ancestry data representation

- `claim_id`: ANC-028
- `domain`: Subcontinental genomic ancestry data representation
- `population_definition`: All of Us Research Program; diverse US participants including self-reported Hispanic/Latino groups
- `exposure_or_variant`: Subcontinental genetic ancestry vs broad continental groups
- `outcome`: Distribution and BMI associations
- `effect_estimate_and_uncertainty`: Study finds extensive three-way admixture in Latinos and different BMI directions for West-Central vs East African ancestry; effect estimates not available in abstract
- `study_design`: Population genetics and observational phenotype association (2025)
- `source_doi_pmid_or_url`: https://pubmed.ncbi.nlm.nih.gov/40480197/
- `evidence_grade`: C—research associations, phenotype methods need review
- `clinical_status`: exploratory
- `limitations`: Broad subcontinental inference depends on reference panels, selection, geography, and SES; no clinical cutoffs.
- `cross_stream_dependencies`: Team 2/3: variant interpretation requires ancestry-matched panels, individual genotype
- `integration_target`: Ancestry ontology research registry
- `validation_next_step`: Evaluate subgroup representativeness and portability; no algorithmic display without consent/data governance.

## Source and audit notes

Direct calculator review: [optimal_body_weight_calculator-9.html](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/optimal_body_weight_calculator-9.html). Literature identifiers are canonical DOI/PMID/official guideline URLs as individually stated; this matrix does not imply full systematic-search completeness. All listed sample sizes and intervals are study-specific and cannot be pooled naïvely.