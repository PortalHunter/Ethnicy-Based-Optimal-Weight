# Team 2 — Standardized Nutrition Evidence Matrix
**Version 1.0 | 2026-11-01 | 30 claim records | Shared cross-stream format**

Every record includes the exact 14 required fields, including `NUT-` ID. These fields can be parsed from fenced YAML. Strings are JSON-quoted for safe YAML parsing (JSON string literals are valid YAML scalars). `evidence_grade` is an **internal project rating, not formal GRADE**: A = strong direct guideline/trial evidence for the narrow claim; B = credible but qualified; C = limited/secondary; D = nonvalidated or unresolved. `clinical_status` is distinct from grade. `contradicted` marks **only the tested diet-matching hypothesis**, not whether the gene exists or is associated with baseline risk. `integration_target` explicitly marks whether the action is screening, education, dietary intervention, or research-only. All effect estimates retain comparator/population limitations; “no pooled estimate” means one was not verified, not evidence of zero effect.

```text
Source verification: DOI/PMID/URLs were checked against publicly indexed publisher, PubMed, professional-guideline, or GeneReviews pages on 2026-11-01. No quantitative effect was fabricated where an estimate was unavailable.
```

## NUT-001 — diabetes prevention

```yaml
claim_id: "NUT-001"
domain: "diabetes prevention"
population_definition: "Adults with impaired glucose tolerance/high diabetes risk in DPP"
exposure_or_variant: "Intensive lifestyle vs placebo"
outcome: "Incident T2D"
effect_estimate_and_uncertainty: "Relative incidence reduction 58% in lifestyle arm; DPP effect not by ancestry-genetic matching"
study_design: "Randomized trial"
source_doi_pmid_or_url: "PMID:11832527 https://pubmed.ncbi.nlm.nih.gov/11832527/"
evidence_grade: "A"
clinical_status: "guideline-supported"
limitations: "High-contact program; relative effect not automatically generalizable to app-only users"
cross_stream_dependencies: "Team 1: BMI/waist risk"
integration_target: "screening + patient education; general prevention"
validation_next_step: "Trial utility of added module vs standard DPP-style recommendations"
```

## NUT-002 — T2D polygenic risk

```yaml
claim_id: "NUT-002"
domain: "T2D polygenic risk"
population_definition: "Multi-ancestry 2025 evaluation: 244,637 cases and 637,891 controls"
exposure_or_variant: "T2D PRS"
outcome: "Risk discrimination, not dietary response"
effect_estimate_and_uncertainty: "OR 1.75 (95% CI 1.71–1.78) per SD; AUC 0.641 (0.636–0.645)"
study_design: "Multi-cohort association/validation"
source_doi_pmid_or_url: "DOI:10.1038/s41467-025-63546-4 https://www.nature.com/articles/s41467-025-63546-4"
evidence_grade: "B"
clinical_status: "observational"
limitations: "Association does not establish clinical utility or genotype-diet interaction; portability differs"
cross_stream_dependencies: "Team 1: ancestry/admixture, Team 3: therapy risk factors"
integration_target: "research only; optional screening context if externally calibrated"
validation_next_step: "Externally compare net benefit vs HbA1c/family-history/clinical model across ancestries"
```

## NUT-003 — familial hypercholesterolemia

```yaml
claim_id: "NUT-003"
domain: "familial hypercholesterolemia"
population_definition: "Adults with FH, possible FH or severe LDL elevation"
exposure_or_variant: "Pathogenic variants LDLR/APOB/PCSK9 and LDL phenotype"
outcome: "Lifetime ASCVD risk; referral/cascade screening"
effect_estimate_and_uncertainty: "Monogenic FH approx 1:250; genetic and clinical phenotype vary; no universal penetrance"
study_design: "2026 clinical practice guideline"
source_doi_pmid_or_url: "DOI:10.1161/CIR.0000000000001423 https://www.jacc.org/doi/10.1016/j.jacc.2025.11.016"
evidence_grade: "A"
clinical_status: "guideline-supported"
limitations: "Negative panel does not exclude clinical FH; LDL response to diet may not normalize disease"
cross_stream_dependencies: "Team 3: lipid pharmacotherapy; Team 1: no BMI change"
integration_target: "screening + patient education + dietary intervention adjunct"
validation_next_step: "Audit referral precision and cascade screening completion"
```

## NUT-004 — hemochromatosis genetics

```yaml
claim_id: "NUT-004"
domain: "hemochromatosis genetics"
population_definition: "HFE C282Y homozygotes Northern European cohort ages 40–69, follow-up ~12 y"
exposure_or_variant: "HFE p.C282Y homozygote vs other genotypes"
outcome: "Documented iron overload related disease"
effect_estimate_and_uncertainty: "Men 28.4% (CI 18.8–40.2); women 1.2% (CI 0.03–6.5); genotype alone not iron overload"
study_design: "Population cohort"
source_doi_pmid_or_url: "DOI:10.1056/NEJMoa073286 PMID:18199861 https://pubmed.ncbi.nlm.nih.gov/18199861/"
evidence_grade: "B"
clinical_status: "observational"
limitations: "Sex, age, cohort and case definition-dependent penetrance; not generalizable to single allele carriers"
cross_stream_dependencies: "Team 1: prevalence not diagnosis"
integration_target: "screening; education only until confirmed disease"
validation_next_step: "Validate TSAT/ferritin gating and avoid false iron restrictions"
```

## NUT-005 — celiac dietary management

```yaml
claim_id: "NUT-005"
domain: "celiac dietary management"
population_definition: "Adults with clinically diagnosed celiac disease"
exposure_or_variant: "Confirmed celiac disease; gluten ingestion"
outcome: "Symptoms, intestinal injury, nutritional status"
effect_estimate_and_uncertainty: "Lifelong strict gluten-free diet recommended; quantitative effect not pooled here"
study_design: "ACG 2023 clinical guideline"
source_doi_pmid_or_url: "DOI:10.14309/ajg.0000000000002075 PMID:36602836 https://pubmed.ncbi.nlm.nih.gov/36602836/"
evidence_grade: "A"
clinical_status: "guideline-supported"
limitations: "Do not apply to positive HLA alone; test on gluten-containing diet"
cross_stream_dependencies: "Team 1: HLA prevalence"
integration_target: "dietary intervention with RD; screening if suspected"
validation_next_step: "Verify confirmed-diagnosis gate and nutrient deficiency prompts"
```

## NUT-006 — lactose tolerance

```yaml
claim_id: "NUT-006"
domain: "lactose tolerance"
population_definition: "Adults with symptomatic suspected lactose intolerance"
exposure_or_variant: "LCT/MCM6 variation vs actual lactose exposure"
outcome: "Lactose digestion and gastrointestinal symptoms"
effect_estimate_and_uncertainty: "No universally appropriate effect estimate across variants; breath test plus symptoms assesses intolerance"
study_design: "Clinical diagnostic guidance and genotype-mechanism studies"
source_doi_pmid_or_url: "https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/diagnosis"
evidence_grade: "B"
clinical_status: "guideline-supported"
limitations: "Allele coverage differs by ancestry; symptoms depend on dose/other conditions"
cross_stream_dependencies: "Team 1: lactase allele diversity"
integration_target: "patient education; dietary alternatives if symptomatic"
validation_next_step: "Track symptom/rechallenge response and calcium adequacy"
```

## NUT-007 — monogenic diabetes

```yaml
claim_id: "NUT-007"
domain: "monogenic diabetes"
population_definition: "Adults with young-onset atypical diabetes or family pattern"
exposure_or_variant: "GCK/HNF1A/HNF4A/HNF1B clinically pathogenic variants"
outcome: "Accurate diabetes subtype and treatment triage"
effect_estimate_and_uncertainty: "Gene-specific; no generalizable diet-by-genotype effect estimate"
study_design: "Professional consensus"
source_doi_pmid_or_url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12579922/"
evidence_grade: "B"
clinical_status: "guideline-supported"
limitations: "Referral requires phenotype; do not conflate MODY and T2D; pregnancy exception"
cross_stream_dependencies: "Team 3: treatment/PGx review"
integration_target: "screening/referral; not diet-genotype matching"
validation_next_step: "Measure inappropriate T2D labels and genetics referral yield"
```

## NUT-008 — PAH deficiency / PKU

```yaml
claim_id: "NUT-008"
domain: "PAH deficiency / PKU"
population_definition: "Confirmed PAH deficiency with untreated Phe >360 µmol/L"
exposure_or_variant: "PAH pathogenic variants; phenylalanine exposure"
outcome: "Neurocognitive and metabolic outcomes"
effect_estimate_and_uncertainty: "ACMG advises lifelong treatment above threshold; no pooled effect size here"
study_design: "2023 ACMG evidence-based guideline, published 2024"
source_doi_pmid_or_url: "DOI:10.1016/j.gim.2024.101289 PMID:39630157 https://pubmed.ncbi.nlm.nih.gov/39630157/"
evidence_grade: "A"
clinical_status: "guideline-supported"
limitations: "Specialist-managed; avoid self-prescribing generic high-protein diets"
cross_stream_dependencies: "Team 3: special formulations"
integration_target: "dietary intervention, metabolic RD referral"
validation_next_step: "Validate high-protein generic suggestion blocked in confirmed PKU"
```

## NUT-009 — fatty acid oxidation defects

```yaml
claim_id: "NUT-009"
domain: "fatty acid oxidation defects"
population_definition: "Clinically diagnosed MCAD deficiency"
exposure_or_variant: "Biallelic ACADM; fasting/high-fat ketogenic exposure"
outcome: "Hypoketotic hypoglycemia and metabolic crisis"
effect_estimate_and_uncertainty: "Severe potentially fatal decompensation; numerical risk not provided"
study_design: "GeneReviews clinical synthesis"
source_doi_pmid_or_url: "https://www.ncbi.nlm.nih.gov/books/NBK1424/"
evidence_grade: "A"
clinical_status: "guideline-supported"
limitations: "Rare; diagnosis/clinical suspicion requires metabolic care"
cross_stream_dependencies: "Team 3: treatment/excipient safety"
integration_target: "dietary safety intervention; block unsupervised keto/fasting"
validation_next_step: "Zero unsafe diet prescriptions in clinical test-case audit"
```

## NUT-010 — hereditary fructose intolerance

```yaml
claim_id: "NUT-010"
domain: "hereditary fructose intolerance"
population_definition: "People with confirmed HFI or strong clinical suspicion"
exposure_or_variant: "Biallelic ALDOB; fructose, sucrose, sorbitol"
outcome: "Hypoglycemia, liver/renal injury from exposure"
effect_estimate_and_uncertainty: "Potential life-threatening reactions; no generic threshold; avoid provocative fructose challenge"
study_design: "GeneReviews clinical synthesis"
source_doi_pmid_or_url: "https://www.ncbi.nlm.nih.gov/books/NBK333439/"
evidence_grade: "A"
clinical_status: "guideline-supported"
limitations: "Unlike simple fructose malabsorption; specialist supervised"
cross_stream_dependencies: "Team 3: medicine excipients"
integration_target: "dietary intervention / urgent referral if suspected and symptomatic"
validation_next_step: "Safety rule test and diagnosis-state differentiation"
```

## NUT-011 — long chain FAO defects

```yaml
claim_id: "NUT-011"
domain: "long chain FAO defects"
population_definition: "Confirmed LCHAD / trifunctional protein deficiency"
exposure_or_variant: "HADHA/HADHB; high-fat keto/fasting"
outcome: "Metabolic decompensation"
effect_estimate_and_uncertainty: "Potential severe harm; no reliable single risk percentage"
study_design: "GeneReviews clinical synthesis"
source_doi_pmid_or_url: "PMID:36063482 https://pubmed.ncbi.nlm.nih.gov/36063482/"
evidence_grade: "A"
clinical_status: "guideline-supported"
limitations: "Disease-specific fat management differs; do not generalize MCT advice"
cross_stream_dependencies: "Team 3: formulation safety"
integration_target: "dietary safety intervention; specialist-only"
validation_next_step: "Zero high-fat/fasting recommendations for known disorder"
```

## NUT-012 — diabetes carbohydrate counseling

```yaml
claim_id: "NUT-012"
domain: "diabetes carbohydrate counseling"
population_definition: "Adults with T2D/prediabetes where reduction is safe"
exposure_or_variant: "Reduced carbohydrates with nutrient quality and medical supervision"
outcome: "Glycemia"
effect_estimate_and_uncertainty: "ADA considers reducing carbohydrate intake for some adults; no single optimal percentage"
study_design: "ADA Standards of Care 2026"
source_doi_pmid_or_url: "DOI:10.2337/dc26-S005 https://doi.org/10.2337/dc26-S005"
evidence_grade: "A"
clinical_status: "guideline-supported"
limitations: "Not all adults, no universal keto superiority; caution CKD/pregnancy/children"
cross_stream_dependencies: "Team 3: glycemic medication interactions"
integration_target: "patient education / optional dietary intervention"
validation_next_step: "Pragmatic trial on HbA1c, adherence and safety"
```

## NUT-013 — ketogenic vs Mediterranean

```yaml
claim_id: "NUT-013"
domain: "ketogenic vs Mediterranean"
population_definition: "40 adults prediabetes or T2D; 33 complete primary data; 12 weeks per pattern"
exposure_or_variant: "Well-formulated keto vs Mediterranean-plus"
outcome: "HbA1c, TG, LDL"
effect_estimate_and_uncertainty: "No significant HbA1c difference; TG −16% vs −5%; LDL +10% vs −5%"
study_design: "Randomized crossover"
source_doi_pmid_or_url: "DOI:10.1093/ajcn/nqac154 PMID:35641199 https://pubmed.ncbi.nlm.nih.gov/35641199/"
evidence_grade: "B"
clinical_status: "guideline-supported"
limitations: "Small sample and short follow-up; effects not cardiovascular events"
cross_stream_dependencies: "Team 3: medication safety; Team 1: no ancestry extrapolation"
integration_target: "patient education; diet intervention requires lipid monitoring"
validation_next_step: "Longer head-to-head active comparator trial with apoB and adverse events"
```

## NUT-014 — DASH and sodium

```yaml
claim_id: "NUT-014"
domain: "DASH and sodium"
population_definition: "Adults with and without high BP in DASH-Sodium feeding trial"
exposure_or_variant: "Low-sodium DASH vs high-sodium control"
outcome: "Systolic BP"
effect_estimate_and_uncertainty: "−11.5 mm Hg in participants with hypertension; −7.1 without hypertension"
study_design: "Randomized controlled feeding"
source_doi_pmid_or_url: "PMID:11136953 https://pubmed.ncbi.nlm.nih.gov/11136953/"
evidence_grade: "A"
clinical_status: "guideline-supported"
limitations: "Feeding contrast; cannot extrapolate exact effects to routine counseling"
cross_stream_dependencies: "Team 1: avoid race-specific restriction"
integration_target: "dietary intervention / education for BP"
validation_next_step: "Measure home/ambulatory BP changes in prospective trial"
```

## NUT-015 — atherogenic lipids

```yaml
claim_id: "NUT-015"
domain: "atherogenic lipids"
population_definition: "Adults with high LDL/apoB and cardiovascular risk"
exposure_or_variant: "Mediterranean/DASH/plant-forward fat quality vs high saturated-fat intake"
outcome: "LDL-C, apoB, ASCVD risk"
effect_estimate_and_uncertainty: "2026 guideline: favorable LDL profiles; some ketogenic diets substantially increase LDL; no pooled per-person estimate"
study_design: "2026 guideline/synthesis"
source_doi_pmid_or_url: "DOI:10.1161/CIR.0000000000001423 https://www.jacc.org/doi/10.1016/j.jacc.2025.11.016"
evidence_grade: "A"
clinical_status: "guideline-supported"
limitations: "Lipid response heterogeneity; diet not a substitute for FH clinical care"
cross_stream_dependencies: "Team 3: lipid drug management"
integration_target: "dietary intervention with lipid monitoring"
validation_next_step: "Audit LDL/apoB change and FH safety referral"
```

## NUT-016 — Mediterranean prevention

```yaml
claim_id: "NUT-016"
domain: "Mediterranean prevention"
population_definition: "7,447 high-CVD-risk adults; PREDIMED revised analysis ~5 years"
exposure_or_variant: "Mediterranean plus EVOO or nuts vs control"
outcome: "Major CVD composite"
effect_estimate_and_uncertainty: "HR 0.69 (CI 0.53–0.91) EVOO and 0.72 (0.54–0.95) nuts"
study_design: "Intervention study reanalyzed after randomization irregularities"
source_doi_pmid_or_url: "DOI:10.1056/NEJMoa1800389 PMID:29897866 https://pubmed.ncbi.nlm.nih.gov/29897866/"
evidence_grade: "B"
clinical_status: "guideline-supported"
limitations: "Protocol deviations; high-risk mostly Spanish population; effect not genetic"
cross_stream_dependencies: "Team 1: population applicability"
integration_target: "patient education / dietary intervention"
validation_next_step: "Compare module vs standard Mediterranean education in diverse sites"
```

## NUT-017 — Mediterranean secondary prevention

```yaml
claim_id: "NUT-017"
domain: "Mediterranean secondary prevention"
population_definition: "1,002 adults with established coronary heart disease (82.5% men)"
exposure_or_variant: "Mediterranean vs low-fat diet"
outcome: "Major cardiovascular events over ~7 years"
effect_estimate_and_uncertainty: "87 vs 111 events; adjusted HRs 0.719–0.753 depending model"
study_design: "Randomized controlled trial CORDIOPREV"
source_doi_pmid_or_url: "DOI:10.1016/S0140-6736(22)00122-2 PMID:35525255 https://pubmed.ncbi.nlm.nih.gov/35525255/"
evidence_grade: "B"
clinical_status: "guideline-supported"
limitations: "Secondary prevention, underrepresentation of women"
cross_stream_dependencies: "Team 3: secondary prevention treatment"
integration_target: "patient education / dietary intervention"
validation_next_step: "Measure clinical adherence and lipid outcomes in other populations"
```

## NUT-018 — low-carbohydrate remission

```yaml
claim_id: "NUT-018"
domain: "low-carbohydrate remission"
population_definition: "23 RCTs, 1,357 T2D adults, six and twelve month follow-up"
exposure_or_variant: "LCD/VLCD vs control diets"
outcome: "HbA1c-defined T2D remission, TG, weight"
effect_estimate_and_uncertainty: "Six-month remission 57% vs 31% under one definition; reported RD 0.32 (CI 0.17–0.47); 12-month benefits attenuate"
study_design: "Systematic review/meta-analysis RCTs"
source_doi_pmid_or_url: "DOI:10.1136/bmj.m4743 PMID:33441384 https://pubmed.ncbi.nlm.nih.gov/33441384/"
evidence_grade: "B"
clinical_status: "guideline-supported"
limitations: "Different remission definitions, medication use and adherence affect outcome"
cross_stream_dependencies: "Team 3: medication interactions"
integration_target: "patient education / optional dietary intervention"
validation_next_step: "Trial 12–24 month durable glycemia with balanced diet quality and safety"
```

## NUT-019 — genotype diet matching

```yaml
claim_id: "NUT-019"
domain: "genotype diet matching"
population_definition: "609 overweight adults without diabetes; DIETFITS 12 months"
exposure_or_variant: "3-SNP diet matching panel; low-fat vs low-carb"
outcome: "Weight loss interaction"
effect_estimate_and_uncertainty: "Mean diff 0.7 kg (CI −0.2 to 1.6); genotype interaction p=0.20; insulin interaction p=0.47"
study_design: "Randomized trial prespecified interaction"
source_doi_pmid_or_url: "DOI:10.1001/jama.2018.0245 PMID:29466592 https://pubmed.ncbi.nlm.nih.gov/29466592/"
evidence_grade: "A"
clinical_status: "contradicted"
limitations: "Contradicts tested simple panel only; low-carb arm averaged 30% energy carb at 12 mo"
cross_stream_dependencies: "Team 1: no ancestry diet labels"
integration_target: "research only; prohibit tested genetic diet recommendation"
validation_next_step: "Independent prespecified trials for entirely new predictors"
```

## NUT-020 — AMY1/starch

```yaml
claim_id: "NUT-020"
domain: "AMY1/starch"
population_definition: "Populations and cohorts with different salivary amylase copy counts"
exposure_or_variant: "AMY1 copy number; habitual starch"
outcome: "Obesity, glycemia, glucose response"
effect_estimate_and_uncertainty: "Conflicting associations; no clinically validated starch-gram prescription"
study_design: "2026 narrative review + association studies"
source_doi_pmid_or_url: "PMID:42730263 https://pubmed.ncbi.nlm.nih.gov/42730263/"
evidence_grade: "D"
clinical_status: "insufficient"
limitations: "CNV assay issues; historical population ecology not individual response; no outcome RCT"
cross_stream_dependencies: "Team 1: ancestry frequency context"
integration_target: "research only"
validation_next_step: "Replicated genotype-by-randomized-diet trial controlling intake"
```

## NUT-021 — FADS2 fatty acid metabolism

```yaml
claim_id: "NUT-021"
domain: "FADS2 fatty acid metabolism"
population_definition: "Selected global populations; South Asian allele frequency examples"
exposure_or_variant: "FADS2 insertion/deletion; PUFA metabolism"
outcome: "Endogenous arachidonic-acid synthesis"
effect_estimate_and_uncertainty: "Mechanistic genotype association; no intervention effect on clinical events established"
study_design: "Population genetics and biochemical association"
source_doi_pmid_or_url: "PMID:27188529 https://pubmed.ncbi.nlm.nih.gov/27188529/"
evidence_grade: "C"
clinical_status: "exploratory"
limitations: "Ancestry frequency and biochemical conversion cannot prescribe omega-3 dose"
cross_stream_dependencies: "Team 1: contextual allele frequency"
integration_target: "research only; general omega-3 food advice independent"
validation_next_step: "Randomized dose-by-genotype outcomes with external replication"
```

## NUT-022 — FTO weight response

```yaml
claim_id: "NUT-022"
domain: "FTO weight response"
population_definition: "9,563 participants across eight RCTs of weight loss"
exposure_or_variant: "FTO rs9939609 or proxy"
outcome: "Modification of weight loss"
effect_estimate_and_uncertainty: "No significant modification of BMI, weight or waist response"
study_design: "Individual participant meta-analysis of RCTs"
source_doi_pmid_or_url: "DOI:10.1136/bmj.i4707 PMID:27650503 https://pubmed.ncbi.nlm.nih.gov/27650503/"
evidence_grade: "A"
clinical_status: "contradicted"
limitations: "Conclusion about FTO response modifier; obesity risk association exists"
cross_stream_dependencies: "Team 1: do not infer ancestry diet"
integration_target: "research only; do not market FTO diet matcher"
validation_next_step: "New independent interactions if distinct mechanism asserted"
```

## NUT-023 — APOA2 diet interaction

```yaml
claim_id: "NUT-023"
domain: "APOA2 diet interaction"
population_definition: "DIETFITS secondary subset adhering to saturated fat criteria"
exposure_or_variant: "APOA2 rs5082 × saturated fat intake/diet"
outcome: "Weight loss at 3,6,12 months"
effect_estimate_and_uncertainty: "Genotype-by-saturated-fat intake interaction reported at 12 months; numerical interaction effect not available from abstract"
study_design: "Secondary analysis of RCT subset, 2025"
source_doi_pmid_or_url: "DOI:10.1002/oby.24288 PMID:40310284 https://pubmed.ncbi.nlm.nih.gov/40310284/"
evidence_grade: "C"
clinical_status: "exploratory"
limitations: "Post hoc exposure restriction, multiple testing, no independent prospective validation"
cross_stream_dependencies: "Team 1: ancestry portability; Team 3: cardiac safety"
integration_target: "research only"
validation_next_step: "Prospective preregistered randomized treatment interaction and external test"
```

## NUT-024 — gout diet

```yaml
claim_id: "NUT-024"
domain: "gout diet"
population_definition: "Adults with diagnosed gout (not merely family history/high urate)"
exposure_or_variant: "Alcohol/purine/HFCS intake; weight management"
outcome: "Flares/serum urate"
effect_estimate_and_uncertainty: "ACR conditional recommendations; certainty low/very low for several lifestyle claims"
study_design: "Clinical guideline with evidence appraisal"
source_doi_pmid_or_url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/"
evidence_grade: "B"
clinical_status: "guideline-supported"
limitations: "Diet has modest urate effect; should not replace indicated clinical therapy"
cross_stream_dependencies: "Team 3: urate-lowering medication"
integration_target: "patient education / optional dietary intervention"
validation_next_step: "Measure gout flare burden and side-effect-free adherence"
```

## NUT-025 — medication nutrition safety

```yaml
claim_id: "NUT-025"
domain: "medication nutrition safety"
population_definition: "People with diabetes using SGLT2 inhibitors"
exposure_or_variant: "SGLT2 plus ketogenic eating"
outcome: "Diabetic ketoacidosis"
effect_estimate_and_uncertainty: "ADA recommends discouraging ketogenic pattern in at-risk treated patients; no pooled interaction risk estimate here"
study_design: "ADA 2026 professional guideline"
source_doi_pmid_or_url: "DOI:10.2337/dc26-S005 https://doi.org/10.2337/dc26-S005"
evidence_grade: "A"
clinical_status: "guideline-supported"
limitations: "Medication details and current indications require prescriber verification"
cross_stream_dependencies: "Team 3 owner: medication and dosing"
integration_target: "patient education + urgent medication safety review flag"
validation_next_step: "Team 3 approval and zero missed conflict test profiles"
```

## NUT-026 — monogenic obesity

```yaml
claim_id: "NUT-026"
domain: "monogenic obesity"
population_definition: "Pediatric extreme obesity starting before age five with hyperphagia and/or family extreme obesity"
exposure_or_variant: "MC4R/POMC/LEPR/PCSK1/Bardet-Biedl etiologies"
outcome: "Genetic evaluation yield and care options"
effect_estimate_and_uncertainty: "Guideline recommends considering genetic tests in clinical phenotype; no universal penetrance/weight target"
study_design: "Endocrine Society pediatric guideline"
source_doi_pmid_or_url: "https://www.endocrine.org/clinical-practice-guidelines/pediatric-obesity"
evidence_grade: "B"
clinical_status: "guideline-supported"
limitations: "Not an adult universal genotyping rule or diet-genetic matching"
cross_stream_dependencies: "Team 1: pediatric BMI outside adult scope; Team 3: disease-targeted treatment"
integration_target: "screening/referral only"
validation_next_step: "Measure genetic referral appropriateness and correct scope exclusions"
```

## NUT-027 — personalized nutrition efficacy

```yaml
claim_id: "NUT-027"
domain: "personalized nutrition efficacy"
population_definition: "Adults overweight or obese in randomized PN trials"
exposure_or_variant: "Heterogeneous personalized nutrition vs controls"
outcome: "BMI, weight, body fat, lipids, glycemia"
effect_estimate_and_uncertainty: "Small weight/body fat reductions; no consistent effect BMI/waist/lipid/glycemic biomarkers"
study_design: "2026 systematic review/meta-analysis"
source_doi_pmid_or_url: "DOI:10.1186/s12986-026-01130-3 PMID:42106813 https://pubmed.ncbi.nlm.nih.gov/42106813/"
evidence_grade: "B"
clinical_status: "exploratory"
limitations: "Synthesis of RCTs but many non-genetic PN interventions; mixed comparators; poor standardization"
cross_stream_dependencies: "Teams 1 and 3: utility benchmark"
integration_target: "research only for genotype-specific conclusions"
validation_next_step: "Prespecify algorithm, comparator, safety, clinical and patient outcomes"
```

## NUT-028 — celiac HLA testing

```yaml
claim_id: "NUT-028"
domain: "celiac HLA testing"
population_definition: "General population and people referred for potential celiac"
exposure_or_variant: "HLA-DQ2/DQ8 risk alleles"
outcome: "Likelihood of celiac and diagnostic exclusion"
effect_estimate_and_uncertainty: "~20–30% DQ2.5 carriage in general population; near-universal risk HLA in cases, but positive result insufficient"
study_design: "GeneReviews clinical synthesis and ACG guideline"
source_doi_pmid_or_url: "https://www.ncbi.nlm.nih.gov/books/NBK1727/ ; DOI:10.14309/ajg.0000000000002075"
evidence_grade: "B"
clinical_status: "guideline-supported"
limitations: "Allelic configurations more diverse than simple DQ2/DQ8 yes/no; negative highly useful only in context"
cross_stream_dependencies: "Team 1: allele prevalence"
integration_target: "screening/education not gluten-free prescription"
validation_next_step: "Test false-positive diet decisions on HLA-only profiles"
```

## NUT-029 — iron-overload guidance

```yaml
claim_id: "NUT-029"
domain: "iron-overload guidance"
population_definition: "Adults with clinically diagnosed hereditary hemochromatosis and biochemical iron overload"
exposure_or_variant: "Supplemental iron/C, alcohol and phlebotomy"
outcome: "Iron loading and end-organ risk"
effect_estimate_and_uncertainty: "Guideline: iron removal primary, avoid iron supplements and supplemental C; no absolute food ban effect estimated"
study_design: "EASL clinical guideline"
source_doi_pmid_or_url: "DOI:10.1016/j.jhep.2022.03.033 PMID:35662478 https://pubmed.ncbi.nlm.nih.gov/35662478/"
evidence_grade: "A"
clinical_status: "guideline-supported"
limitations: "Do not overextend to iron-deficient people or asymptomatic heterozygotes"
cross_stream_dependencies: "Team 1: stop ancestry trigger; Team 3: supplement/interaction review"
integration_target: "dietary education adjunct to medical care"
validation_next_step: "Test no supplement restrictions solely from ancestry"
```

## NUT-030 — diet saturated-fat intervention

```yaml
claim_id: "NUT-030"
domain: "diet saturated-fat intervention"
population_definition: "17 randomized trials, 66,337 adults"
exposure_or_variant: "Reducing/modifying saturated fat"
outcome: "Mortality, myocardial infarction, stroke"
effect_estimate_and_uncertainty: "All-cause mortality RR 0.96 (CI 0.88–1.06); nonfatal MI RR 0.86 (CI 0.70–1.06); effects uncertain"
study_design: "2026 systematic review of RCTs"
source_doi_pmid_or_url: "DOI:10.7326/ANNALS-25-02229 PMID:41397264 https://pubmed.ncbi.nlm.nih.gov/41397264/"
evidence_grade: "B"
clinical_status: "insufficient"
limitations: "Synthesis includes different replacements, baseline risk and adherence; lipid LDL effect and hard endpoints distinct"
cross_stream_dependencies: "Team 3: cardiovascular risk context"
integration_target: "patient education; avoid false certainty of event reductions"
validation_next_step: "Stratified clinical outcomes and LDL/apoB monitoring with diet change"
```

## Integration caveat

The `clinical_status` field describes the specific record. A variant with a strong association but no diet intervention evidence must not be silently upgraded to `guideline-supported` dietary intervention. When merging with Teams 1 and 3, use a compound identity (`claim_id`,`source version`,`population`,`outcome`,`action`), preserve provenance, and escalate conflicting clinical statuses to a qualified reviewer. Ancestry thresholds, medication recommendations and adult BMI equations are not adjudicated by Team 2.