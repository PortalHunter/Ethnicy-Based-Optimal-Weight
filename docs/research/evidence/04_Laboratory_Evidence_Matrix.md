# Research Team 4 — Laboratory Evidence Matrix

**Version:** 0.9 research draft | **Evidence search:** 2026-11-03 | **Cutoff:** 2026-11-03 | **Status:** not clinician-reviewed, not authorization to implement.  
**Ownership:** `LAB-` claims; preserve ANC/NUT/PGX separate ownership and cross-stream dependency. A/B/C/D below are **local appraisal categories, not formal GRADE**. A = direct current guideline or robust trial evidence for a narrow claim; B = relevant guideline or credible qualified evidence; C = indirect/exploratory; D = unsupported for individualized use. `clinical_status` is limited to guideline-supported, observational, exploratory, insufficient, contradicted. `disposition` A/B/C/D follows the feature document and is independent of evidence quality.

Evidence available from publicly indexed publisher, clinical society, and PubMed searches; this is a **targeted scoping synthesis, not a registered systematic review**. The literature screening and unresolved bibliographic checks are documented in the main Research Review. In particular, no additional pooled effect estimates are inferred when not available. These claim records are **proposals** and are not production clinical rules.

## Quick claim index

| Claim | Domain | Evidence class | Feature disposition |
|---|---|---|---|
| LAB-001 | HbA1c | A / guideline-supported | A |
| LAB-002 | Fasting plasma glucose | A / guideline-supported | A |
| LAB-003 | Oral glucose tolerance / random glucose | A / guideline-supported | B |
| LAB-004 | Diabetes prevention | A / guideline-supported | A |
| LAB-005 | Diabetes nutrition | A / guideline-supported | A |
| LAB-006 | Fructosamine/glycated albumin | B / guideline-supported | B |
| LAB-007 | Fasting insulin/HOMA-IR | D / insufficient | C |
| LAB-008 | LDL-C | A / guideline-supported | A |
| LAB-009 | LDL-C diet trial | A / guideline-supported | A |
| LAB-010 | Non-HDL-C/ApoB | A / guideline-supported | B |
| LAB-011 | Triglycerides 150-499 | A / guideline-supported | A |
| LAB-012 | Severe triglycerides | A / guideline-supported | B |
| LAB-013 | Lp(a) | A / guideline-supported | B |
| LAB-014 | HDL-C/total cholesterol | B / insufficient | B |
| LAB-015 | eGFR creatinine/urine ACR | A / guideline-supported | B |
| LAB-016 | Kidney nutrition | B / guideline-supported | B |
| LAB-017 | Potassium | B / guideline-supported | B |
| LAB-018 | Sodium and bicarbonate | B / insufficient | B |
| LAB-019 | Calcium, magnesium and phosphorus | C / insufficient | B |
| LAB-020 | ALT/AST | A / guideline-supported | B |
| LAB-021 | MASLD intervention | B / guideline-supported | B |
| LAB-022 | Bilirubin, ALP, albumin | C / insufficient | B |
| LAB-023 | CBC/hemoglobin/MCV | B / guideline-supported | B |
| LAB-024 | Low ferritin/TSAT | B / guideline-supported | B |
| LAB-025 | High ferritin/TSAT | A / guideline-supported | B |
| LAB-026 | Vitamin B12 | B / guideline-supported | B |
| LAB-027 | Folate and iron indices | C / insufficient | B |
| LAB-028 | 25-OH vitamin D | B / guideline-supported | C |
| LAB-029 | TSH/free T4 | C / insufficient | B |
| LAB-030 | Uric acid | B / guideline-supported | B |
| LAB-031 | A1c hemoglobin variants | A / guideline-supported | B |
| LAB-032 | G6PD and A1c | B / guideline-supported | B |
| LAB-033 | Ancestry Lp(a) | B / guideline-supported | B |
| LAB-034 | Race-free eGFR | A / guideline-supported | A |
| LAB-035 | Hemochromatosis nutrition | B / guideline-supported | B |
| LAB-036 | Critical results | B / guideline-supported | A |
| LAB-037 | A1c+triglycerides | C / insufficient | B |
| LAB-038 | Creatinine+potassium | B / guideline-supported | B |
| LAB-039 | Low Hb+MCV+ferritin | B / insufficient | B |
| LAB-040 | Weight equation | D / insufficient | D |
| LAB-041 | Metabolic response without weight change | A / guideline-supported | A |
| LAB-042 | Lab interoperability | B / guideline-supported | B |

## Standardized claim records

### LAB-001 — HbA1c

```yaml
claim_id: "LAB-001"
domain: "HbA1c"
claim: "A1c is a glycemic risk/monitoring indicator but cannot diagnose diabetes by app; confirm abnormal results."
population_definition: "Nonpregnant people; confirmed by certified method"
exposure_or_variant: "A1c is a glycemic risk/monitoring indicator but cannot diagnose diabetes by app; confirm abnormal results."
outcome: "Diagnostic decision threshold >=6.5% (48 mmol/mol); confirm absent unequivocal hyperglycemia; no RCT effect"
effect_estimate_and_uncertainty: "Diagnostic decision threshold >=6.5% (48 mmol/mol); confirm absent unequivocal hyperglycemia; no RCT effect"
study_design: "Guideline synthesis"
source_doi_pmid_or_url: "https://doi.org/10.2337/dc26-S002; https://ngsp.org/interf.asp"
source_keys: "ADA-DX;NGSP-26"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "RBC turnover, variants, CKD, pregnancy, transfusion; clinical diagnosis needs confirmation"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition A"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "A"
```

### LAB-002 — Fasting plasma glucose

```yaml
claim_id: "LAB-002"
domain: "Fasting plasma glucose"
claim: "FPG is a validated glycemic screening measure and can be compared with A1c cautiously."
population_definition: "Nonpregnant adults; fasting >=8 hours"
exposure_or_variant: "FPG is a validated glycemic screening measure and can be compared with A1c cautiously."
outcome: "Diagnostic threshold >=126 mg/dL (7.0 mmol/L) with confirmation; not a reference interval"
effect_estimate_and_uncertainty: "Diagnostic threshold >=126 mg/dL (7.0 mmol/L) with confirmation; not a reference interval"
study_design: "Guideline synthesis"
source_doi_pmid_or_url: "https://doi.org/10.2337/dc26-S002"
source_keys: "ADA-DX"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Acute illness, fasting status, specimen glycolysis, discordance; single result not diagnosis"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition A"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "A"
```

### LAB-003 — Oral glucose tolerance / random glucose

```yaml
claim_id: "LAB-003"
domain: "Oral glucose tolerance / random glucose"
claim: "OGTT and symptom-associated random plasma glucose are diagnostic contexts requiring test protocol and clinician interpretation."
population_definition: "Nonpregnant adults"
exposure_or_variant: "OGTT and symptom-associated random plasma glucose are diagnostic contexts requiring test protocol and clinician interpretation."
outcome: "75-g 2-hour glucose >=200 mg/dL or random >=200 plus classic symptoms; confirmation rules vary"
effect_estimate_and_uncertainty: "75-g 2-hour glucose >=200 mg/dL or random >=200 plus classic symptoms; confirmation rules vary"
study_design: "Guideline synthesis"
source_doi_pmid_or_url: "https://doi.org/10.2337/dc26-S002"
source_keys: "ADA-DX"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Must know OGTT load/time, pregnancy-specific standards, symptoms; not interchangeable with fasting"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-004 — Diabetes prevention

```yaml
claim_id: "LAB-004"
domain: "Diabetes prevention"
claim: "Structured lifestyle intervention reduces incident diabetes among high-risk adults; benefit is not personalized prediction."
population_definition: "DPP: 3,234 adults with impaired glucose tolerance/high risk; diverse US sample"
exposure_or_variant: "Structured lifestyle intervention reduces incident diabetes among high-risk adults; benefit is not personalized prediction."
outcome: "58% relative incidence reduction vs placebo, 95% CI 48–66%, 2.8 years; absolute 11.0 vs 4.8 cases per 100 person-years"
effect_estimate_and_uncertainty: "58% relative incidence reduction vs placebo, 95% CI 48–66%, 2.8 years; absolute 11.0 vs 4.8 cases per 100 person-years"
study_design: "Randomized controlled trial"
source_doi_pmid_or_url: "https://doi.org/10.1056/NEJMoa012512; https://doi.org/10.2337/dc26-S005"
source_keys: "DPP;ADA-NUT"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "High-contact program; not a claim about ethnicity-tailored diets or app alone"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition A"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "A"
```

### LAB-005 — Diabetes nutrition

```yaml
claim_id: "LAB-005"
domain: "Diabetes nutrition"
claim: "Individualized healthy dietary patterns support glycemic management; no universal ideal macronutrient split."
population_definition: "Prediabetes and diabetes across adult settings"
exposure_or_variant: "Individualized healthy dietary patterns support glycemic management; no universal ideal macronutrient split."
outcome: "No one numerical A1c response guaranteed; ADA grades vary by recommendation"
effect_estimate_and_uncertainty: "No one numerical A1c response guaranteed; ADA grades vary by recommendation"
study_design: "Guideline synthesis"
source_doi_pmid_or_url: "https://doi.org/10.2337/dc26-S005"
source_keys: "ADA-NUT"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Medication-associated hypoglycemia, CKD, pregnancy; no supplements for glycemic benefit"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition A"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "A"
```

### LAB-006 — Fructosamine/glycated albumin

```yaml
claim_id: "LAB-006"
domain: "Fructosamine/glycated albumin"
claim: "Useful selectively when A1c and measured glucose are persistently discordant; not stand-alone screening in consumer app."
population_definition: "People with diabetes where A1c unreliable"
exposure_or_variant: "Useful selectively when A1c and measured glucose are persistently discordant; not stand-alone screening in consumer app."
outcome: "Alternative biomarkers may be considered for monitoring; outcome impact not established here"
effect_estimate_and_uncertainty: "Alternative biomarkers may be considered for monitoring; outcome impact not established here"
study_design: "Guideline synthesis"
source_doi_pmid_or_url: "https://doi.org/10.2337/dc26-S002"
source_keys: "ADA-DX"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Albumin turnover, nephrotic syndrome, liver disease; specialized reference limits"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-007 — Fasting insulin/HOMA-IR

```yaml
claim_id: "LAB-007"
domain: "Fasting insulin/HOMA-IR"
claim: "Single fasting insulin or HOMA-IR should not be used to choose personal diets or weight targets."
population_definition: "General wellness populations"
exposure_or_variant: "Single fasting insulin or HOMA-IR should not be used to choose personal diets or weight targets."
outcome: "No validated patient-level dietary target identified"
effect_estimate_and_uncertainty: "No validated patient-level dietary target identified"
study_design: "Evidence gap assessment"
source_doi_pmid_or_url: "https://doi.org/10.2337/dc26-S002; https://doi.org/10.2337/dc26-S005"
source_keys: "ADA-DX;ADA-NUT"
evidence_grade: "D (internal; not GRADE)"
clinical_status: "insufficient"
limitations: "Assay variability; indication dependent; not routine disease diagnosis"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition C"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "C"
```

### LAB-008 — LDL-C

```yaml
claim_id: "LAB-008"
domain: "LDL-C"
claim: "Dietary replacement of saturated/trans fats with unsaturated fats, high-fiber whole foods is recommended for LDL reduction and ASCVD risk management."
population_definition: "Adults and children with/without ASCVD"
exposure_or_variant: "Dietary replacement of saturated/trans fats with unsaturated fats, high-fiber whole foods is recommended for LDL reduction and ASCVD risk management."
outcome: "Guideline COR 1; LOE B-R; individualized LDL response not guaranteed"
effect_estimate_and_uncertainty: "Guideline COR 1; LOE B-R; individualized LDL response not guaranteed"
study_design: "2026 multisociety guideline"
source_doi_pmid_or_url: "https://doi.org/10.1161/CIR.0000000000001423; https://doi.org/10.1056/NEJMoa1800389"
source_keys: "ACC-26;PREDIMED"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Severe LDL, familial hypercholesterolemia, ASCVD may need drug therapy; do not imply diet suffices"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition A"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "A"
```

### LAB-009 — LDL-C diet trial

```yaml
claim_id: "LAB-009"
domain: "LDL-C diet trial"
claim: "Portfolio dietary pattern improves LDL-C, but pooled LDL reduction does not directly prove lower events for that intervention."
population_definition: "7 comparisons, n=439, hyperlipidemia"
exposure_or_variant: "Portfolio dietary pattern improves LDL-C, but pooled LDL reduction does not directly prove lower events for that intervention."
outcome: "LDL-C -0.73 mmol/L (95% CI -0.89 to -0.56), ~17% relative vs comparison; body weight unaffected"
effect_estimate_and_uncertainty: "LDL-C -0.73 mmol/L (95% CI -0.89 to -0.56), ~17% relative vs comparison; body weight unaffected"
study_design: "Systematic review/meta-analysis of controlled trials"
source_doi_pmid_or_url: "https://doi.org/10.1016/j.pcad.2018.05.004"
source_keys: "PORTFOLIO"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Small trials and surrogate endpoints; adherence matters"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition A"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "A"
```

### LAB-010 — Non-HDL-C/ApoB

```yaml
claim_id: "LAB-010"
domain: "Non-HDL-C/ApoB"
claim: "Atherogenic particle measures add context; ApoB selective measurement can refine assessment."
population_definition: "ASCVD risk contexts incl high triglycerides, metabolic dysfunction"
exposure_or_variant: "Atherogenic particle measures add context; ApoB selective measurement can refine assessment."
outcome: "No universal dietary effect estimate attributable to ApoB measurement itself"
effect_estimate_and_uncertainty: "No universal dietary effect estimate attributable to ApoB measurement itself"
study_design: "2026 multisociety guideline"
source_doi_pmid_or_url: "https://doi.org/10.1161/CIR.0000000000001423; https://academic.oup.com/jalm/article/9/5/1040/7717178"
source_keys: "ACC-26;ADLM-LIPID"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Require measured values and ASCVD context; ApoB not generated by arbitrary formula"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-011 — Triglycerides 150-499

```yaml
claim_id: "LAB-011"
domain: "Triglycerides 150-499"
claim: "Diet low in added sugars, refined carbs, saturated fats and minimizing alcohol benefits triglycerides and ASCVD risk."
population_definition: "Adults with fasting TG 150–499 mg/dL"
exposure_or_variant: "Diet low in added sugars, refined carbs, saturated fats and minimizing alcohol benefits triglycerides and ASCVD risk."
outcome: "COR 1, LOE A; numeric personal reduction unknown"
effect_estimate_and_uncertainty: "COR 1, LOE A; numeric personal reduction unknown"
study_design: "2026 multisociety guideline"
source_doi_pmid_or_url: "https://doi.org/10.1161/CIR.0000000000001423"
source_keys: "ACC-26"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Fasting status; diabetes control; meds, alcohol, inherited dyslipidemias"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition A"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "A"
```

### LAB-012 — Severe triglycerides

```yaml
claim_id: "LAB-012"
domain: "Severe triglycerides"
claim: "Very high TG may carry pancreatitis risk; diet-only consumer advice is unsafe."
population_definition: "Adults with TG >=500 mg/dL; particularly >=1000 mg/dL"
exposure_or_variant: "Very high TG may carry pancreatitis risk; diet-only consumer advice is unsafe."
outcome: "Guideline distinguishes 500–999 vs >=1000 mg/dL management; no individual risk prediction"
effect_estimate_and_uncertainty: "Guideline distinguishes 500–999 vs >=1000 mg/dL management; no individual risk prediction"
study_design: "2026 multisociety guideline"
source_doi_pmid_or_url: "https://doi.org/10.1161/CIR.0000000000001423"
source_keys: "ACC-26"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Requires clinician-led evaluation; no auto low-fat prescription without review"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-013 — Lp(a)

```yaml
claim_id: "LAB-013"
domain: "Lp(a)"
claim: "Measured Lp(a) is genetically influenced risk-enhancing biomarker; lifestyle does not reliably lower Lp(a)."
population_definition: "Across ancestry groups; inherited variation"
exposure_or_variant: "Measured Lp(a) is genetically influenced risk-enhancing biomarker; lifestyle does not reliably lower Lp(a)."
outcome: ">=125 nmol/L or >=50 mg/dL indicates high risk per 2026 guideline; ~40% relative ASCVD risk elevation vs low Lp(a) from source synthesis"
effect_estimate_and_uncertainty: ">=125 nmol/L or >=50 mg/dL indicates high risk per 2026 guideline; ~40% relative ASCVD risk elevation vs low Lp(a) from source synthesis"
study_design: "2026 multisociety guideline/2022 consensus"
source_doi_pmid_or_url: "https://doi.org/10.1161/CIR.0000000000001423; https://academic.oup.com/eurheartj/article/43/39/3925/6670882"
source_keys: "ACC-26;EAS-LPA"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Cannot equate thresholds by multiplying mg/dL and nmol/L; no ancestry adjusted threshold; risk individualized clinically"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-014 — HDL-C/total cholesterol

```yaml
claim_id: "LAB-014"
domain: "HDL-C/total cholesterol"
claim: "Useful components of risk description, not stand-alone diet-selection or supplement targets."
population_definition: "Adults with lipid panels"
exposure_or_variant: "Useful components of risk description, not stand-alone diet-selection or supplement targets."
outcome: "No intervention-specific clinical outcome estimate for raising HDL independently"
effect_estimate_and_uncertainty: "No intervention-specific clinical outcome estimate for raising HDL independently"
study_design: "2026 guideline synthesis"
source_doi_pmid_or_url: "https://doi.org/10.1161/CIR.0000000000001423"
source_keys: "ACC-26"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "insufficient"
limitations: "Do not suggest niacin/supplement to raise HDL solely from low value"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-015 — eGFR creatinine/urine ACR

```yaml
claim_id: "LAB-015"
domain: "eGFR creatinine/urine ACR"
claim: "GFR and urine albumin together assess kidney risk; race-free equations and chronicity are necessary."
population_definition: "Adults at risk for CKD"
exposure_or_variant: "GFR and urine albumin together assess kidney risk; race-free equations and chronicity are necessary."
outcome: "Positive urine ACR >=30 mg/g requires confirmation; CKD persists >=3 months; no dietary effect inferred"
effect_estimate_and_uncertainty: "Positive urine ACR >=30 mg/g requires confirmation; CKD persists >=3 months; no dietary effect inferred"
study_design: "Global KDIGO guideline"
source_doi_pmid_or_url: "https://doi.org/10.1016/j.kint.2023.10.016"
source_keys: "KDIGO-24"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Muscle mass, medications, dehydration, AKI; confirm cystatin C when appropriate"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-016 — Kidney nutrition

```yaml
claim_id: "LAB-016"
domain: "Kidney nutrition"
claim: "CKD G3–G5 may require individualized sodium/protein counselling; not appropriate from one isolated creatinine value."
population_definition: "Adults with established CKD G3–G5"
exposure_or_variant: "CKD G3–G5 may require individualized sodium/protein counselling; not appropriate from one isolated creatinine value."
outcome: "Guideline suggests protein ~0.8 g/kg/day (2C) and sodium <2g/day (2C) in indicated settings, not app targets"
effect_estimate_and_uncertainty: "Guideline suggests protein ~0.8 g/kg/day (2C) and sodium <2g/day (2C) in indicated settings, not app targets"
study_design: "KDIGO guideline"
source_doi_pmid_or_url: "https://doi.org/10.1016/j.kint.2023.10.016"
source_keys: "KDIGO-24"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Risk of malnutrition, age/pregnancy/dialysis/AKI; clinician/dietitian lead"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-017 — Potassium

```yaml
claim_id: "LAB-017"
domain: "Potassium"
claim: "High/low potassium demands clinical context, hemolysis check and sometimes urgent evaluation; no generic potassium food list."
population_definition: "Adults with serum/plasma potassium deviations"
exposure_or_variant: "High/low potassium demands clinical context, hemolysis check and sometimes urgent evaluation; no generic potassium food list."
outcome: "No single threshold selected for app; lab critical policies vary"
effect_estimate_and_uncertainty: "No single threshold selected for app; lab critical policies vary"
study_design: "Clinical review plus KDIGO"
source_doi_pmid_or_url: "https://www.aafp.org/afp/2023/0100/potassium-disorders-hypokalemia-hyperkalemia; https://doi.org/10.1016/j.kint.2023.10.016; https://doi.org/10.1093/clinchem/hvae120"
source_keys: "POTASSIUM;KDIGO-24;CRITICAL"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Kidney function, ECG/symptoms, meds, sample handling, diuretics; potassium salt substitutes"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-018 — Sodium and bicarbonate

```yaml
claim_id: "LAB-018"
domain: "Sodium and bicarbonate"
claim: "Abnormal sodium or CO2/bicarbonate may indicate fluid/acid-base disturbance; do not infer dietary sodium needs."
population_definition: "Adults with electrolyte abnormalities"
exposure_or_variant: "Abnormal sodium or CO2/bicarbonate may indicate fluid/acid-base disturbance; do not infer dietary sodium needs."
outcome: "No validated diet adjustment from isolated flagged value"
effect_estimate_and_uncertainty: "No validated diet adjustment from isolated flagged value"
study_design: "Clinical/laboratory safety review"
source_doi_pmid_or_url: "https://doi.org/10.1093/clinchem/hvae120; https://doi.org/10.1016/j.kint.2023.10.016"
source_keys: "CRITICAL;KDIGO-24"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "insufficient"
limitations: "Acute symptomatic hyponatremia, volume status, specimen, medication history"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-019 — Calcium, magnesium and phosphorus

```yaml
claim_id: "LAB-019"
domain: "Calcium, magnesium and phosphorus"
claim: "Mineral abnormalities often require calcium/albumin, renal and endocrine context."
population_definition: "Adults with altered minerals"
exposure_or_variant: "Mineral abnormalities often require calcium/albumin, renal and endocrine context."
outcome: "No stand-alone universal food or supplement target"
effect_estimate_and_uncertainty: "No stand-alone universal food or supplement target"
study_design: "Clinical guideline synthesis"
source_doi_pmid_or_url: "https://doi.org/10.1016/j.kint.2023.10.016; https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease"
source_keys: "KDIGO-24;ENDO-D"
evidence_grade: "C (internal; not GRADE)"
clinical_status: "insufficient"
limitations: "Corrected/ionized calcium, kidney function, PTH, medication and vitamin D status"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-020 — ALT/AST

```yaml
claim_id: "LAB-020"
domain: "ALT/AST"
claim: "Mild elevation can prompt clinical assessment of liver and metabolic risk, but is nonspecific."
population_definition: "Adults at risk for MASLD"
exposure_or_variant: "Mild elevation can prompt clinical assessment of liver and metabolic risk, but is nonspecific."
outcome: "Normal ALT does not exclude significant fibrosis; FIB-4 needs age, AST, ALT and platelets"
effect_estimate_and_uncertainty: "Normal ALT does not exclude significant fibrosis; FIB-4 needs age, AST, ALT and platelets"
study_design: "AASLD/EASL guidance"
source_doi_pmid_or_url: "https://doi.org/10.1097/HEP.0000000000000323; https://doi.org/10.1016/j.jhep.2024.04.031"
source_keys: "AASLD-23;EASL-24"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Alcohol, viral hepatitis, medications, muscle injury and non-MASLD liver diseases"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-021 — MASLD intervention

```yaml
claim_id: "LAB-021"
domain: "MASLD intervention"
claim: "In diagnosed MASLD with overweight, sustained weight reduction improves liver fat/inflammation and potentially fibrosis."
population_definition: "Adults with MASLD and overweight"
exposure_or_variant: "In diagnosed MASLD with overweight, sustained weight reduction improves liver fat/inflammation and potentially fibrosis."
outcome: ">=5% reduce liver fat; 7–10% inflammation; >=10% fibrosis, LoE 2 strong recommendation; long-term mortality data limited"
effect_estimate_and_uncertainty: ">=5% reduce liver fat; 7–10% inflammation; >=10% fibrosis, LoE 2 strong recommendation; long-term mortality data limited"
study_design: "EASL guideline evidence synthesis"
source_doi_pmid_or_url: "https://doi.org/10.1016/j.jhep.2024.04.031; https://doi.org/10.1097/HEP.0000000000000323"
source_keys: "EASL-24;AASLD-23"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Disease-specific weight-loss percentage is not a new target weight for calculator; not for patients with advanced liver disease without supervision"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-022 — Bilirubin, ALP, albumin

```yaml
claim_id: "LAB-022"
domain: "Bilirubin, ALP, albumin"
claim: "Abnormal liver synthetic/cholestatic markers require diagnosis-oriented assessment, not metabolic dieting."
population_definition: "Adults with abnormal liver chemistry"
exposure_or_variant: "Abnormal liver synthetic/cholestatic markers require diagnosis-oriented assessment, not metabolic dieting."
outcome: "No established isolated nutrition prescription"
effect_estimate_and_uncertainty: "No established isolated nutrition prescription"
study_design: "AASLD guidance"
source_doi_pmid_or_url: "https://doi.org/10.1097/HEP.0000000000000323"
source_keys: "AASLD-23"
evidence_grade: "C (internal; not GRADE)"
clinical_status: "insufficient"
limitations: "Bilirubin fractionation, GGT, INR, hemolysis, albumin loss and hepatic synthetic function"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-023 — CBC/hemoglobin/MCV

```yaml
claim_id: "LAB-023"
domain: "CBC/hemoglobin/MCV"
claim: "Anemia and microcytosis are not synonymous with iron deficiency; defer empiric iron advice."
population_definition: "Adults with abnormal CBC"
exposure_or_variant: "Anemia and microcytosis are not synonymous with iron deficiency; defer empiric iron advice."
outcome: "No effect estimate for food-only intervention without etiology"
effect_estimate_and_uncertainty: "No effect estimate for food-only intervention without etiology"
study_design: "Guideline synthesis"
source_doi_pmid_or_url: "https://gastro.org/clinical-guidance/gastrointestinal-evaluation-of-iron-deficiency-anemia/; https://doi.org/10.1016/j.kint.2025.06.006"
source_keys: "AGA-IDA;KDIGO-26"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Thalassemia traits, iron deficiency, inflammation, renal disease, bleeding"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-024 — Low ferritin/TSAT

```yaml
claim_id: "LAB-024"
domain: "Low ferritin/TSAT"
claim: "Ferritin supports evaluation of iron deficiency in anemia but thresholds depend on clinical context."
population_definition: "Adults with anemia; CKD separate"
exposure_or_variant: "Ferritin supports evaluation of iron deficiency in anemia but thresholds depend on clinical context."
outcome: "AGA recommends ferritin 45 ng/mL threshold vs 15 in anemia; CKD 2026 uses disease-specific iron criteria"
effect_estimate_and_uncertainty: "AGA recommends ferritin 45 ng/mL threshold vs 15 in anemia; CKD 2026 uses disease-specific iron criteria"
study_design: "AGA/KDIGO guideline synthesis"
source_doi_pmid_or_url: "https://gastro.org/clinical-guidance/gastrointestinal-evaluation-of-iron-deficiency-anemia/; https://doi.org/10.1016/j.kint.2025.06.006"
source_keys: "AGA-IDA;KDIGO-26"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Inflammation elevates ferritin; iron supplementation must await cause assessment; GI bleeding possible"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-025 — High ferritin/TSAT

```yaml
claim_id: "LAB-025"
domain: "High ferritin/TSAT"
claim: "High ferritin alone does not prove hemochromatosis; TSAT and phenotype/genotype are needed."
population_definition: "People evaluated for iron overload"
exposure_or_variant: "High ferritin alone does not prove hemochromatosis; TSAT and phenotype/genotype are needed."
outcome: "No single threshold applicable to all causes/genotypes; HFE criteria have specific context"
effect_estimate_and_uncertainty: "No single threshold applicable to all causes/genotypes; HFE criteria have specific context"
study_design: "EASL guideline"
source_doi_pmid_or_url: "https://doi.org/10.1016/j.jhep.2022.03.033; https://www.niddk.nih.gov/health-information/liver-disease/hemochromatosis/eating-diet-nutrition"
source_keys: "EASL-IRON;NIDDK-IRON"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Inflammation, liver disease, metabolic syndrome; ethnicity is not HFE genotype"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-026 — Vitamin B12

```yaml
claim_id: "LAB-026"
domain: "Vitamin B12"
claim: "Low or equivocal B12 requires symptom/risk assessment; neuropathy may occur without anemia."
population_definition: "People >16 years under NG239 (UK)"
exposure_or_variant: "Low or equivocal B12 requires symptom/risk assessment; neuropathy may occur without anemia."
outcome: "NICE total B12 <180 ng/L likely deficiency; 180–350 indeterminate; jurisdiction and assay dependent"
effect_estimate_and_uncertainty: "NICE total B12 <180 ng/L likely deficiency; 180–350 indeterminate; jurisdiction and assay dependent"
study_design: "NICE guideline"
source_doi_pmid_or_url: "https://www.nice.org.uk/guidance/ng239/chapter/recommendations"
source_keys: "NICE-B12"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Metformin/PPI, vegan diet, malabsorption, bariatric surgery; neurological symptoms"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-027 — Folate and iron indices

```yaml
claim_id: "LAB-027"
domain: "Folate and iron indices"
claim: "Folate deficiency is one possible macrocytosis mechanism; isolated measurement does not prove dietary cause."
population_definition: "Adults with abnormal hematology"
exposure_or_variant: "Folate deficiency is one possible macrocytosis mechanism; isolated measurement does not prove dietary cause."
outcome: "No effect estimate extrapolatable to personal weight"
effect_estimate_and_uncertainty: "No effect estimate extrapolatable to personal weight"
study_design: "NICE/KDIGO synthesis"
source_doi_pmid_or_url: "https://www.nice.org.uk/guidance/ng239/chapter/recommendations; https://doi.org/10.1016/j.kint.2025.06.006"
source_keys: "NICE-B12;KDIGO-26"
evidence_grade: "C (internal; not GRADE)"
clinical_status: "insufficient"
limitations: "Pregnancy and medications, B12 status, alcohol, reticulocytes"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-028 — 25-OH vitamin D

```yaml
claim_id: "LAB-028"
domain: "25-OH vitamin D"
claim: "Routine 25-OH D screening in otherwise healthy adults with dark complexion or obesity is not supported."
population_definition: "Generally healthy adults including dark-complexioned and adults with obesity"
exposure_or_variant: "Routine 25-OH D screening in otherwise healthy adults with dark complexion or obesity is not supported."
outcome: "Against routine screening in these groups; recommendation 2 conditional/low certainty; no universal benefit-based threshold"
effect_estimate_and_uncertainty: "Against routine screening in these groups; recommendation 2 conditional/low certainty; no universal benefit-based threshold"
study_design: "Endocrine Society guideline"
source_doi_pmid_or_url: "https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease"
source_keys: "ENDO-D"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Different rules for osteomalacia, hypocalcemia and other clinical indications; ethnicity not replacement for measured deficiency"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition C"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "C"
```

### LAB-029 — TSH/free T4

```yaml
claim_id: "LAB-029"
domain: "TSH/free T4"
claim: "Thyroid tests may explain context for weight changes but not define an ancestry-specific ideal weight."
population_definition: "Adults with clinician-suspected thyroid disease"
exposure_or_variant: "Thyroid tests may explain context for weight changes but not define an ancestry-specific ideal weight."
outcome: "No validated regression coefficient for personal target weight"
effect_estimate_and_uncertainty: "No validated regression coefficient for personal target weight"
study_design: "Clinical context assessment"
source_doi_pmid_or_url: "https://doi.org/10.2337/dc26-S005"
source_keys: "ADA-NUT"
evidence_grade: "C (internal; not GRADE)"
clinical_status: "insufficient"
limitations: "TSH lab variability, age, biotin, acute illness, medication and pregnancy"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-030 — Uric acid

```yaml
claim_id: "LAB-030"
domain: "Uric acid"
claim: "Isolated asymptomatic hyperuricemia should not trigger gout diagnosis or severe purine restriction."
population_definition: "CKD adults with and without gout"
exposure_or_variant: "Isolated asymptomatic hyperuricemia should not trigger gout diagnosis or severe purine restriction."
outcome: "KDIGO suggests against urate-lowering drugs for asymptomatic hyperuricemia to delay CKD progression (2D)"
effect_estimate_and_uncertainty: "KDIGO suggests against urate-lowering drugs for asymptomatic hyperuricemia to delay CKD progression (2D)"
study_design: "KDIGO guideline"
source_doi_pmid_or_url: "https://doi.org/10.1016/j.kint.2023.10.016"
source_keys: "KDIGO-24"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Gout/stone history, meds, kidney status; diet is secondary to clinical treatment in gout"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-031 — A1c hemoglobin variants

```yaml
claim_id: "LAB-031"
domain: "A1c hemoglobin variants"
claim: "A1c assay can be affected by HbS/HbC/HbE/HbD, HbF and red cell turnover; method-specific review required."
population_definition: "Known variant carriers, not everyone with regional ancestry"
exposure_or_variant: "A1c assay can be affected by HbS/HbC/HbE/HbD, HbF and red cell turnover; method-specific review required."
outcome: "Effect depends on assay/variant; no universal race-based correction"
effect_estimate_and_uncertainty: "Effect depends on assay/variant; no universal race-based correction"
study_design: "ADA guideline and NGSP assay validation"
source_doi_pmid_or_url: "https://doi.org/10.2337/dc26-S002; https://ngsp.org/interf.asp; https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test-race-ethnicity"
source_keys: "ADA-DX;NGSP-26;NIDDK-A1C"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Obtain lab assay method if discordant; use plasma glucose criteria in altered A1c/glycemia states"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-032 — G6PD and A1c

```yaml
claim_id: "LAB-032"
domain: "G6PD and A1c"
claim: "G6PD deficiency can alter RBC lifespan and A1c relationship; no inference from ancestry alone."
population_definition: "Individuals with confirmed G6PD phenotype/genotype"
exposure_or_variant: "G6PD deficiency can alter RBC lifespan and A1c relationship; no inference from ancestry alone."
outcome: "No universal adjustment validated; ADA recommends glucose-based diagnostic criteria in altered states"
effect_estimate_and_uncertainty: "No universal adjustment validated; ADA recommends glucose-based diagnostic criteria in altered states"
study_design: "ADA guideline"
source_doi_pmid_or_url: "https://doi.org/10.2337/dc26-S002"
source_keys: "ADA-DX"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "X-linked phenotypic variation; ancestry does not prove G6PD deficiency"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-033 — Ancestry Lp(a)

```yaml
claim_id: "LAB-033"
domain: "Ancestry Lp(a)"
claim: "Ancestry distributions of Lp(a) differ, but measured concentration rather than broad origin should drive interpretation."
population_definition: "Race/ancestry strata in diverse cohorts"
exposure_or_variant: "Ancestry distributions of Lp(a) differ, but measured concentration rather than broad origin should drive interpretation."
outcome: "Continuous relative ASCVD risk association irrespective of ancestry"
effect_estimate_and_uncertainty: "Continuous relative ASCVD risk association irrespective of ancestry"
study_design: "2026 guideline evidence synthesis"
source_doi_pmid_or_url: "https://doi.org/10.1161/CIR.0000000000001423; https://academic.oup.com/eurheartj/article/43/39/3925/6670882"
source_keys: "ACC-26;EAS-LPA"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Do not infer value or threshold from ethnicity"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-034 — Race-free eGFR

```yaml
claim_id: "LAB-034"
domain: "Race-free eGFR"
claim: "Race in GFR calculation should be avoided; ancestry must not recalculate eGFR."
population_definition: "Adults with creatinine/cystatin C data"
exposure_or_variant: "Race in GFR calculation should be avoided; ancestry must not recalculate eGFR."
outcome: "KDIGO practice point 1.2.4.2; no direct clinical effect size"
effect_estimate_and_uncertainty: "KDIGO practice point 1.2.4.2; no direct clinical effect size"
study_design: "KDIGO guideline"
source_doi_pmid_or_url: "https://doi.org/10.1016/j.kint.2023.10.016"
source_keys: "KDIGO-24"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Equation choice, method, age, body size, clinical indication"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition A"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "A"
```

### LAB-035 — Hemochromatosis nutrition

```yaml
claim_id: "LAB-035"
domain: "Hemochromatosis nutrition"
claim: "Diet does not substitute for therapy in diagnosed iron overload."
population_definition: "Confirmed hereditary iron overload"
exposure_or_variant: "Diet does not substitute for therapy in diagnosed iron overload."
outcome: "NIDDK: diet alone smaller impact than phlebotomy; no pooled effect quantified"
effect_estimate_and_uncertainty: "NIDDK: diet alone smaller impact than phlebotomy; no pooled effect quantified"
study_design: "EASL guideline and NIDDK clinical education"
source_doi_pmid_or_url: "https://doi.org/10.1016/j.jhep.2022.03.033; https://www.niddk.nih.gov/health-information/liver-disease/hemochromatosis/eating-diet-nutrition"
source_keys: "EASL-IRON;NIDDK-IRON"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Do not auto exclude all iron-containing foods or propose phlebotomy from app"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-036 — Critical results

```yaml
claim_id: "LAB-036"
domain: "Critical results"
claim: "Lab flags and critical values are not interchangeable; critical notification lists differ by lab/setting."
population_definition: "Hospitalized vs outpatients, laboratory-defined critical results"
exposure_or_variant: "Lab flags and critical values are not interchangeable; critical notification lists differ by lab/setting."
outcome: "No universal global critical cutoff endorsed for web app"
effect_estimate_and_uncertainty: "No universal global critical cutoff endorsed for web app"
study_design: "2024 laboratory-medicine review"
source_doi_pmid_or_url: "https://doi.org/10.1093/clinchem/hvae120"
source_keys: "CRITICAL"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Local threshold, collection time, symptoms, contacts required"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition A"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "A"
```

### LAB-037 — A1c+triglycerides

```yaml
claim_id: "LAB-037"
domain: "A1c+triglycerides"
claim: "Co-occurrence may suggest shared cardiometabolic risk but cannot diagnose insulin resistance or metabolic syndrome alone."
population_definition: "Adults with two reported high values"
exposure_or_variant: "Co-occurrence may suggest shared cardiometabolic risk but cannot diagnose insulin resistance or metabolic syndrome alone."
outcome: "No predictive accuracy for app-based multi-marker combination established"
effect_estimate_and_uncertainty: "No predictive accuracy for app-based multi-marker combination established"
study_design: "Cross-guideline synthesis"
source_doi_pmid_or_url: "https://doi.org/10.2337/dc26-S002; https://doi.org/10.1161/CIR.0000000000001423"
source_keys: "ADA-DX;ACC-26"
evidence_grade: "C (internal; not GRADE)"
clinical_status: "insufficient"
limitations: "Need BP, waist, medication, kidney function, fasting and other labs"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-038 — Creatinine+potassium

```yaml
claim_id: "LAB-038"
domain: "Creatinine+potassium"
claim: "Reduced kidney function with potassium abnormality may require urgent clinical assessment instead of diet output."
population_definition: "Adults with coincident abnormalities"
exposure_or_variant: "Reduced kidney function with potassium abnormality may require urgent clinical assessment instead of diet output."
outcome: "No reliable app-only escalation model validated"
effect_estimate_and_uncertainty: "No reliable app-only escalation model validated"
study_design: "KDIGO/clinical review"
source_doi_pmid_or_url: "https://doi.org/10.1016/j.kint.2023.10.016; https://www.aafp.org/afp/2023/0100/potassium-disorders-hypokalemia-hyperkalemia"
source_keys: "KDIGO-24;POTASSIUM"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Dehydration, AKI, serum hemolysis and symptoms can change urgency"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-039 — Low Hb+MCV+ferritin

```yaml
claim_id: "LAB-039"
domain: "Low Hb+MCV+ferritin"
claim: "Pattern may motivate anemia evaluation but is not a definitive diagnosis nor a supplement trigger."
population_definition: "Adults with abnormal CBC and iron studies"
exposure_or_variant: "Pattern may motivate anemia evaluation but is not a definitive diagnosis nor a supplement trigger."
outcome: "No combined sensitivity/specificity established in current review"
effect_estimate_and_uncertainty: "No combined sensitivity/specificity established in current review"
study_design: "Guideline synthesis"
source_doi_pmid_or_url: "https://gastro.org/clinical-guidance/gastrointestinal-evaluation-of-iron-deficiency-anemia/; https://doi.org/10.1016/j.kint.2025.06.006"
source_keys: "AGA-IDA;KDIGO-26"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "insufficient"
limitations: "Hereditary thalassemia, blood loss, inflammation, pregnancy"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

### LAB-040 — Weight equation

```yaml
claim_id: "LAB-040"
domain: "Weight equation"
claim: "No identified evidence justifies mathematically adjusting the calculator ideal weight range from lab flags."
population_definition: "Educational consumer calculator"
exposure_or_variant: "No identified evidence justifies mathematically adjusting the calculator ideal weight range from lab flags."
outcome: "No validated lab-derived kg or BMI coefficient"
effect_estimate_and_uncertainty: "No validated lab-derived kg or BMI coefficient"
study_design: "Scoping appraisal of reviewed guidelines"
source_doi_pmid_or_url: "https://doi.org/10.2337/dc26-S005; https://doi.org/10.1161/CIR.0000000000001423; https://doi.org/10.1016/j.kint.2023.10.016; https://doi.org/10.1016/j.jhep.2024.04.031"
source_keys: "ADA-NUT;ACC-26;KDIGO-24;EASL-24"
evidence_grade: "D (internal; not GRADE)"
clinical_status: "insufficient"
limitations: "Biomarkers inform risk stratification and separate counseling, not numeric weight target"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition D"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "D"
```

### LAB-041 — Metabolic response without weight change

```yaml
claim_id: "LAB-041"
domain: "Metabolic response without weight change"
claim: "LDL or glycemic measurements can improve without a numeric weight-target change."
population_definition: "Adults with hyperlipidemia or diabetes"
exposure_or_variant: "LDL or glycemic measurements can improve without a numeric weight-target change."
outcome: "Portfolio diet LDL -0.73 mmol/L while no effect on body weight; not a personal prediction"
effect_estimate_and_uncertainty: "Portfolio diet LDL -0.73 mmol/L while no effect on body weight; not a personal prediction"
study_design: "Controlled trials/guidelines"
source_doi_pmid_or_url: "https://doi.org/10.1016/j.pcad.2018.05.004; https://doi.org/10.2337/dc26-S005"
source_keys: "PORTFOLIO;ADA-NUT"
evidence_grade: "A (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Results and risk differ by baseline; confounding from medicines and illness"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition A"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "A"
```

### LAB-042 — Lab interoperability

```yaml
claim_id: "LAB-042"
domain: "Lab interoperability"
claim: "LOINC + UCUM + FHIR Observation support future structured lab representation after human verification."
population_definition: "Future native FHIR import or parsed lab reports"
exposure_or_variant: "LOINC + UCUM + FHIR Observation support future structured lab representation after human verification."
outcome: "No clinical efficacy estimate; implementation validation required"
effect_estimate_and_uncertainty: "No clinical efficacy estimate; implementation validation required"
study_design: "Technical standards"
source_doi_pmid_or_url: "https://hl7.org/fhir/R4/observation.html; https://loinc.org/; https://ucum.org/ucum"
source_keys: "FHIR;LOINC;UCUM"
evidence_grade: "B (internal; not GRADE)"
clinical_status: "guideline-supported"
limitations: "Mapped concepts must match specimen, timing, method; units explicit; OCR unreliable"
cross_stream_dependencies: "ANC for population language; NUT for nutrition/condition claims; PGX medication-related flags only"
integration_target: "research/educational candidate only; disposition B"
validation_next_step: "Clinician and lab-specialist verification of source scope, units, assay and vignette; no automatic clinical release"
disposition: "B"
```

## Source register (exact primary titles, stable links and version notes)

- **ADA-DX** — American Diabetes Association Professional Practice Committee for Diabetes. *2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes—2026*. 2026. US guideline; Diabetes Care 49(S1). https://doi.org/10.2337/dc26-S002
- **ADA-NUT** — American Diabetes Association Professional Practice Committee for Diabetes. *5. Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes—2026*. 2026. US guideline; Diabetes Care 49(S1). https://doi.org/10.2337/dc26-S005
- **ADA-GLY** — American Diabetes Association Professional Practice Committee for Diabetes. *6. Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises: Standards of Care in Diabetes—2026*. 2026. US guideline; Diabetes Care 49(S1). https://doi.org/10.2337/dc26-S006
- **ACC-26** — Blumenthal RS et al.; ACC/AHA and nine partner societies. *2026 ACC/AHA/Multisociety Guideline on the Management of Dyslipidemia*. 2026. US guideline; published March/April 2026; replaces 2018 cholesterol guideline. https://doi.org/10.1161/CIR.0000000000001423
- **KDIGO-24** — Levin A et al.; KDIGO CKD Work Group. *Executive summary of the KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease*. 2024. Global CKD guideline; Kidney Int 105:684–701. https://doi.org/10.1016/j.kint.2023.10.016
- **KDIGO-26** — KDIGO Anemia Work Group; Tonelli M, Babitt JL et al.. *KDIGO 2026 Clinical Practice Guideline for the Management of Anemia in Chronic Kidney Disease*. 2026. Global CKD anemia guideline; Kidney Int 109 S1–S99. https://doi.org/10.1016/j.kint.2025.06.006
- **EASL-24** — EASL–EASD–EASO guideline panel; Tacke F et al.. *EASL–EASD–EASO Clinical Practice Guidelines on the management of MASLD*. 2024. European guideline; J Hepatol 81:492–542. https://doi.org/10.1016/j.jhep.2024.04.031
- **AASLD-23** — Rinella ME et al.. *AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease*. 2023. US practice guidance; NAFLD older terminology; newer AASLD 2025 agent-specific update does not replace whole document. https://doi.org/10.1097/HEP.0000000000000323
- **ENDO-D** — Demay MB et al.; Endocrine Society. *Vitamin D for the Prevention of Disease: An Endocrine Society Clinical Practice Guideline*. 2024. US/international guideline; last updated June 3, 2024. https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease
- **NICE-B12** — National Institute for Health and Care Excellence. *Vitamin B12 deficiency in over 16s: diagnosis and management (NG239)*. 2024. England/UK guideline. https://www.nice.org.uk/guidance/ng239/chapter/recommendations
- **AGA-IDA** — Ko CW et al.; AGA Institute. *Gastrointestinal evaluation of iron deficiency anemia*. 2020. US guideline; ferritin threshold conditional on anemia. https://gastro.org/clinical-guidance/gastrointestinal-evaluation-of-iron-deficiency-anemia/
- **EASL-IRON** — European Association for the Study of the Liver; Zoller H et al.. *EASL Clinical Practice Guidelines on haemochromatosis*. 2022. European guideline; J Hepatol 77:479–502. https://doi.org/10.1016/j.jhep.2022.03.033
- **NIDDK-A1C** — National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK). *The A1C Test & Race/Ethnicity*. n.d., accessed 2026. US public-health technical education. https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test-race-ethnicity
- **NGSP-26** — National Glycohemoglobin Standardization Program (NGSP). *HbA1c Assay Interferences*. 2026. Assay-specific technical table; updated October 2026. https://ngsp.org/interf.asp
- **PORTFOLIO** — Chiavaroli L et al.. *Portfolio Dietary Pattern and Cardiovascular Disease: A Systematic Review and Meta-analysis of Controlled Trials*. 2018. 7 comparisons; 439 hyperlipidemia participants; lipid surrogate outcomes. https://doi.org/10.1016/j.pcad.2018.05.004
- **DPP** — Knowler WC et al.; Diabetes Prevention Program Research Group. *Reduction in the Incidence of Type 2 Diabetes with Lifestyle Intervention or Metformin*. 2002. RCT; 3,234 high-risk adults; incident diabetes clinical outcome. https://doi.org/10.1056/NEJMoa012512
- **PREDIMED** — Estruch R et al.; PREDIMED Study Investigators. *Primary Prevention of Cardiovascular Disease with a Mediterranean Diet Supplemented with Extra-Virgin Olive Oil or Nuts*. 2018. Re-analysis/corrected republication after 2013 randomization irregularities; high CV risk in Spain. https://doi.org/10.1056/NEJMoa1800389
- **DASH** — Sacks FM et al.; DASH-Sodium Collaborative Research Group. *Effects on Blood Pressure of Reduced Dietary Sodium and the DASH Diet*. 2001. 412-person randomized feeding/crossover; BP surrogate. https://doi.org/10.1056/NEJM200101043440101
- **POTASSIUM** — Kim MJ, Valerio C, Knobloch GK. *Potassium Disorders: Hypokalemia and Hyperkalemia*. 2023. Clinical review; use for qualitative safety, not production critical limits. https://www.aafp.org/afp/2023/0100/potassium-disorders-hypokalemia-hyperkalemia
- **CRITICAL** — Kobe Truijens, Glynis Frans, Pieter Vermeersch. *Critical Results in Laboratory Medicine*. 2024. Review; threshold lists differ by clinical setting. https://doi.org/10.1093/clinchem/hvae120
- **EAS-LPA** — Kronenberg F et al.; European Atherosclerosis Society. *Lipoprotein(a) in atherosclerotic cardiovascular disease and aortic stenosis: a European Atherosclerosis Society consensus statement*. 2022. European consensus; cautions against direct mg/dL–nmol/L conversion. https://academic.oup.com/eurheartj/article/43/39/3925/6670882
- **ADLM-LIPID** — Jing Cao, Leslie Donato, Joe M El-Khoury, Anne Goldberg, Jeffrey W Meeusen, Alan T Remaley. *ADLM Guidance Document on the Measurement and Reporting of Lipids and Lipoproteins*. 2024. Clinical laboratory measurement guidance; corrected in 2025 (DOI 10.1093/jalm/jfaf021), including fasting/nonfasting and pediatric reference details. https://academic.oup.com/jalm/article/9/5/1040/7717178
- **NIDDK-IRON** — NIDDK. *Eating, Diet, & Nutrition for Hemochromatosis*. 2020 (site reviewed). US patient education; diet not substitute for iron removal. https://www.niddk.nih.gov/health-information/liver-disease/hemochromatosis/eating-diet-nutrition
- **FHIR** — HL7 International. *FHIR R4 Observation resource*. 2019 (R4). Technical specification; not a clinical recommendation. https://hl7.org/fhir/R4/observation.html
- **LOINC** — Regenstrief Institute. *LOINC laboratory terminology*. accessed 2026. Technical terminology; concept-specific mapping must be validated. https://loinc.org/
- **UCUM** — Regenstrief Institute / UCUM. *The Unified Code for Units of Measure*. accessed 2026. Measurement unit syntax; analyte-specific conversion restrictions. https://ucum.org/ucum
- **NICE-OB** — National Institute for Health and Care Excellence. *Overweight and obesity management (NG246)*. 2025. UK guideline; anthropometric screening context. https://www.nice.org.uk/guidance/ng246

## Verification constraints

1. **CRITICAL** author list and PMID 39245958 checked against PubMed; **ADLM-LIPID** authors and PMID 39225455 verified against PubMed and ADLM. **ADLM-LIPID was corrected in 2025** (https://doi.org/10.1093/jalm/jfaf021); verify the amended text and tables rather than copying outdated quotes from uncorrected versions.
2. Source-specific internal recommendation grades are not interchangeable (ADA A/B/E, ACC COR/LOE, KDIGO 1/2 + evidence certainty, EASL LoE, this local A–D).
3. All quantified effects are trial-level or guideline-level; none are predicted individual benefit. Lp(a) paired conventional thresholds are **not** a mathematically licensed conversion.
4. Markers not assigned distinct claims are still assessed in the main review and feature prioritization; no implicit endorsement for their use.
