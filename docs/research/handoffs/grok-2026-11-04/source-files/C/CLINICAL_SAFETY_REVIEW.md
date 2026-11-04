# CLINICAL_SAFETY_REVIEW.md
## Grok Team C — Lab-linked nutrition guidance, safety, ancestry and equity
### Conservative applicability and withholding map for manually reported labs

**Date verified:** 2026-11-04  
**Scope:** Manually entered A1c, fasting vs random glucose, LDL-C, triglycerides, HDL-C, total cholesterol, potassium, reported eGFR, urine ACR.  
**Governing principle:** Lab flags alone do not diagnose disease, authorize treatment, or modify ideal-weight calculations. Nutrition discussions are educational or context-only and stop under listed conditions. No universal urgency cutoffs invented. Medication and symptom history often unknown.

## 1. Lab-specific applicability and interference notes

### A1c (HbA1c)
- Reflects average glycemia over ~8–12 weeks but is affected by red-cell lifespan, assay method, and hemoglobin variants.
- Hemoglobin variants (HbS, HbC, HbE, HbD, rare variants such as Hb Wayne) and conditions increasing turnover (hemolysis, G6PD deficiency, recent transfusion, pregnancy, iron deficiency, advanced CKD) can produce falsely high or low results depending on method (HPLC, immunoassay, enzymatic).
- ADA 2026: Marked discordance between A1c and plasma glucose should prompt consideration of interference or alternative criteria (fasting/random plasma glucose, OGTT, fructosamine, CGM).
- **Withhold diet discussion** if user flags “critical,” reports known hemoglobinopathy, or values appear non-physiologic without corroborating glucose data. Educational note on assay limitations only.

### Fasting vs random glucose
- Fasting preferred for diagnosis/monitoring; random can be elevated by recent intake, stress, illness, or medications.
- Serious concerns (e.g., values consistent with symptomatic hyperglycemia or hypoglycemia risk) trigger stop condition. Do not interpret isolated random values as diagnostic.
- Medication confounders (insulin, sulfonylureas, SGLT2 inhibitors) unknown in manual entry → default to caution.

### LDL-C, triglycerides, HDL-C, total cholesterol
- 2026 ACC/AHA guideline (with June/September 2026 corrections): LDL-C and non-HDL-C goals returned; ApoB useful in selected cases (TG ≥150 mg/dL, diabetes, low achieved LDL-C); Lp(a) once in lifetime preferred as measured (not ancestry-estimated).
- Hypertriglyceridemia management prioritizes lifestyle (reduce added sugars, refined carbs, alcohol) plus statin for ASCVD risk. TG ≥1000 mg/dL elevates pancreatitis risk → stop general nutrition output and direct to clinician.
- Non-fasting samples acceptable in many contexts but affect TG more than LDL.
- **Do not** use lab values to infer ideal weight or prescribe diets.

### Potassium
- Abnormal values (high or low) can reflect diet, medications (RAAS inhibitors, diuretics, SGLT2), CKD, or assay issues (hemolysis, delayed processing).
- KDIGO 2024: Individualize potassium intake; fruits/vegetables often encouraged initially but review with declining GFR. Abnormal potassium is a stop condition for general nutrition advice.

### Reported eGFR and urine ACR
- Prefer race-free equations (CKD-EPI 2021 creatinine without race coefficient; cystatin C or combined for confirmation). Older race-adjusted equations are obsolete.
- Single eGFR or ACR does not diagnose CKD (requires persistence >3 months plus cause). Flags may be lab-specific reference intervals, not clinical staging.
- KDIGO 2024: Plant-based emphasis, sodium <2 g/day, protein ~0.8 g/kg/day suggestions for many with CKD G3–G5 (not dialysis). Very-low-protein only under close supervision. Not for metabolically unstable patients.
- Flagged kidney tests → withhold general nutrition; refer for clinician discussion.

## 2. Stop conditions for general nutrition output
Reliable stop (show warning, suppress diet claims):
- Reported critical values (any lab).
- Serious glucose concerns (symptomatic range or very high/low without context).
- Severe triglycerides (levels associated with pancreatitis risk in guidelines; exact numeric threshold not universalized here).
- Abnormal potassium.
- Flagged kidney tests (eGFR or ACR outside typical reference or user-selected high/low/critical).
- Known pregnancy.
- SGLT2 inhibitor use (especially with carbohydrate restriction/fasting — ketoacidosis risk per ADA 2026).
- Insulin or sulfonylurea use with planned strict carb restriction or fasting.
- Known or suspected kidney disease.
- Eating disorder risk or history.
- Uncertain specimen type, units, fasting status, or assay method.

Situations where history is simply unknown (show caution, prefer context_only or withhold personalized claims):
- No medication list, no symptom report, no confirmation of fasting status, no prior diagnosis history.
- Mixed or incomplete panels.
- Self-identified ancestry without measured Lp(a) or hemoglobin variant data.

## 3. Separation of reliable warnings vs unknown history
- Reliable: Critical flags, extreme glucose or TG, abnormal K+, kidney flags, pregnancy, explicit SGLT2/insulin/sulfonylurea + carb restriction intent.
- Unknown: Most manual entries. Default language must state “medication and symptom history not provided; discuss with clinician before dietary changes.”

## 4. Explicit prohibition
The lab module must not modify, influence, or feed into any ideal-weight calculation or output. Ideal-weight math remains untouched and independent.

## 5. Evidence record disposition guidance
See LAB_TO_DIET_CLAIM_MAP.csv. Dispositions: educational (general pattern discussion with caveats), context_only (limited notes with strong referral), withhold (no diet content). Team disagreements (e.g., strength of PREDIMED after corrections) are logged in equity document; primary RCT evidence and current guidelines prioritized within scope.

**Source verification notes:** ADA Standards 2026 (Diabetes Care 2026;49 Suppl 1), 2026 ACC/AHA dyslipidemia guideline (Circulation 2026 with corrections), KDIGO 2024 (Kidney Int 2024;105(4S)). Primary trials (PREDIMED republished) inspected for corrections/errata.
