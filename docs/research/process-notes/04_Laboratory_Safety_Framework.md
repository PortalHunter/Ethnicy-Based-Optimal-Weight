# Research Team 4 — Laboratory Safety Framework

**Status: proposed safety requirements, not validated decision support. November 3, 2026.**  
**Applies to:** future self-reported lab flags and full-panel imports in an educational adult wellness calculator. All alert wording, numeric thresholds, escalation pathways and exceptional-population rules require local clinical review and governance before any deployment. This document contains **no production-ready critical-value algorithm**.

## 1. Non-negotiable control hierarchy

**Tier 0 — Input provenance and validity.** A record must have a recognized analyte, numeric result, supported unit, specimen type, collection date, and source laboratory flag/range or clear missingness. When missing, show a *neutral description* and request information; do not calculate or presume abnormal clinical severity. A visible `H`, `L`, `critical` or `abnormal` indicator is a **source report flag**, not the system's independent clinical finding. Unknown test values and unentered biomarkers are **unknown**. Never synthesize a normal full panel.

**Tier 1 — Is the person potentially experiencing a medical emergency?** If current severe symptoms or laboratory report says **critical/urgent**, do not offer diet, weight changes or ancestry personalization. Direct to emergency services/urgent local clinical pathways as appropriate. The site cannot verify the result or provide emergency triage. If unresponsive/confused, having seizure, chest pain, serious weakness/palpitations or other alarming symptoms, emergency assistance takes priority over reviewing a website. Urgency is determined clinically; users should follow instructions on their actual laboratory report.

**Tier 2 — Result combinations with high potential for harm.** Examples include markedly abnormal serum/plasma potassium with renal impairment or arrhythmia symptoms; very low glucose with altered behavior; severe hyperglycemia with vomiting, dehydration or ketones; markedly abnormal sodium with neurologic symptoms; severe hypertriglyceridemia especially with abdominal pain; unexpected marked hemoglobin decrease or bleeding; abnormal liver synthetic markers with jaundice/confusion. Suppress self-directed diet and refer for clinical assessment. Because **no universal numeric critical list** fits all specimens/ages/clinical settings, no hard-coded international cutoffs are approved here.

**Tier 3 — Clinically conditional findings.** New eGFR decline/albuminuria, liver enzymes, iron studies, CBC, B12, thyroid, total calcium, phosphorus, magnesium and complex dyslipidemia are often inappropriate to act on without context. Educate about what the test measures, uncertainty and the next clinician question, not how to self-treat.

**Tier 4 — General lifestyle education.** HbA1c/glucose (after validity checks), LDL, non-HDL and non-severe TG can display *qualified evidence-based health information* after Tier 0–3 screening; avoid patient-specific diagnosis, prescribed nutrient targets or guaranteed lab/weight changes. All advice still requires prepublication sign-off.

## 2. High-risk examples, not automated thresholds

| Reported finding or scenario | Why high-risk | Immediate content policy | Evidence and clinician validation required |
|---|---|---|---|
| Laboratory explicitly labels any result **critical** | Critical-value communication is lab- and context-specific; an out-of-range flag is not necessarily a critical flag | State “Contact the ordering clinician or the laboratory using the instructions on your report promptly”; for alarming symptoms, emergency care | Laboratory's local critical notification policy; [CRITICAL] |
| Confirmed very low glucose or hypoglycemia symptoms | Neurocognitive/physical danger | Do not present a weight-loss or carbohydrate-restriction plan. Prompt immediate clinical response appropriate to the symptom; urgent emergency help if inability to swallow/unresponsive | ADA 2026 defines <70 mg/dL as alert level and <54 mg/dL as level 2 **for diabetes-care contexts**, not a universal lab critical rule; [ADA-GLY] |
| Severe high glucose with ketones, vomiting, confusion, rapid breathing or dehydration | Possible acute metabolic crisis | Emergency escalation; no “try eating less sugar for several days” | ADA 2026 glycemic crises guidance; need specimen and medication context [ADA-DX], [ADA-GLY] |
| High or low potassium, especially with kidney disease, symptoms or medication exposure | Cardiac conduction and muscle risk; pseudohyperkalemia from hemolysis possible | Withhold food lists and supplements; direct clinician evaluation; urgent response for alarming symptoms or critical result | Serum vs plasma; repeat sample, hemolysis index, ECG, medication list; [POTASSIUM], [KDIGO-24] |
| Sodium, bicarbonate/CO2, ionized/total calcium abnormal with neurological or cardiac symptoms | Water/acid-base/endocrine or metabolic emergency | No salt, fluid or calcium DIY correction; clinician or emergency review | Volume status, meds, specimen method, albumin; [CRITICAL], [KDIGO-24] |
| TG ≥500 mg/dL, especially ≥1000 mg/dL | Pancreatitis risk; may require urgent medical assessment | Clinician prompt; no autonomous total-fat targets or blanket diet | 2026 ACC dietary categories; fasting state, meds, alcohol, abdominal symptoms; [ACC-26] |
| Very low hemoglobin, rapidly falling count or bleeding | Hemorrhage/hemolysis/marrow pathology and severe anemia risk | No “take iron and eat spinach” result; urgent clinical prompt especially with symptoms | CBC trajectory, retics, ferritin/TSAT, bleeding, CKD; [AGA-IDA], [KDIGO-26] |
| Elevated bilirubin with jaundice, markedly high enzymes, low albumin, INR changes or confusion | Liver disease may be unrelated to diet/weight; synthetic dysfunction | Withhold MASLD assumptions and weight-loss prompts | AASLD/EASL liver assessment and differential; [AASLD-23], [EASL-24] |
| Pregnancy/postpartum/lactation; child/adolescent | Different intervals, physiology, diagnostic and dietary targets | Out of initial intended-scope individualized interpretation; educational definitions only | Obstetrics/pediatric standards required |
| Dialysis, advanced CKD, transplant, malignancy, frailty, malnutrition, eating disorder or acute illness | High risk of harm from generic protein, potassium, fluid or energy restriction | Withhold personalized food quantities and intentional weight-loss discussion; advise clinician/dietitian | KDIGO 2024 and 2026, relevant specialties |

**Note:** The laboratory's provided critical threshold and actual clinician directions **supersede this research summary**. A publicly accessible tool must not simulate emergency department triage.

## 3. Laboratory-data contract for manual entry

Required fields per observation:

```text
observation_id (local pseudonymous ID; no patient name)
source_test_name (verbatim from report)
canonical_analyte_id (reviewed dictionary mapping; no guess)
value_raw (exact text)
value_numeric (parsed with locale-aware decimal validation)
unit_raw (verbatim)
unit_canonical (UCUM where applicable; only validated conversions)
flag_raw (H/L/critical/other/unflagged as shown; user-reported if self-entry)
reference_low_raw / reference_high_raw / reference_text_raw (optional, never manufactured)
collection_date_time (and timezone if known)
result_release_date_time (optional, not same as collection)
specimen (serum/plasma/whole blood/random urine/24h urine/other)
fasting_status (yes/no/unknown; hours if available)
assay_method/manufacturer (optional, required for certain A1c interpretation)
lab_id / lab_report_source (optional, user-controlled local provenance)
user_confirmation_state (unverified | manually_confirmed)
clinical_context_status (unknown | self_reported | clinician_confirmed)
```

**Companion questionnaire:** adult age; pregnancy/lactation status; relevant symptoms *now*; known diabetes, CKD, liver disease, anemia or hemoglobin variants; current medicines/supplements (optionally broad medication classes to avoid sensitive data overcollection); recent transfusion; major illness/exercise; patient-reported confirmation that *other test results were unflagged* (yes/no/unknown) without interpreting those results. If unavailable, state **no individual conclusion**. Sex-related reference ranges and pregnancy are laboratory-specific; the existing calculator's sex input must **not** silently determine sex-specific medical interpretation.

**Unentered tests:** display `unknown/not supplied`, not zero, not normal, not in range. `other_results_not_flagged_self_report=true` is a statement about a user's observation of a report, **not** verification of values, method or clinical significance. A lab may use wide intervals for risk-related biomarkers, and a lab result may be unflagged yet above a clinical decision threshold.

## 4. Units and assay/method traps

| Trap | Example | Safe behavior |
|---|---|---|
| mg/dL vs mmol/L vs mmol/mol | Glucose, LDL, A1c | Store raw units, independently validate conversions with an analyte-specific library and known molecular basis; show both only when verified |
| Same label, different analyte/specimen | Serum glucose vs urine glucose; serum potassium vs urine potassium | **Never merge**; require specimen and precise test identity |
| Lp(a) mg/dL vs nmol/L | Mass vs particle concentration with variable apo(a) size | **No single universal mathematical conversion**; use reported native unit and unit-specific guidance [EAS-LPA] |
| HbA1c % vs mmol/mol | NGSP/DCCT vs IFCC reporting | Use independently verified conversion; no value if method/units ambiguous; know assay interference table updated October 2026 [NGSP-26] |
| Serum total calcium vs ionized calcium | Albumin may change total measurement | Do not infer from total calcium without proper context |
| Urine ACR ratio vs albumin alone | mg/g, mg/mmol, mg/L urine albumin | Do not equate without urine creatinine and validated conversion |
| eGFR vs measured GFR | mL/min/1.73m2 vs mL/min, race correction | Do not reverse-engineer or race-adjust; retain laboratory reporting equation |
| Hemolysis / sample artifact | Spurious high potassium, altered analytes | If flagged hemolyzed or biologically discordant, withhold advice and defer confirmation |
| Derived vs directly measured lipid results | Calculated LDL unreliable at high TG in some circumstances | Preserve `direct/calculated/unknown`; do not overstate precision; needs assay-specific review |
| Decimal/locale transcription | `1,234` vs `1.234`, `>` or `<` detection limits | Force user confirmation; do not silently parse ambiguous quantity or inequality |

## 5. Contraindication and interference checklist

- **HbA1c:** anemia, hemoglobinopathy, G6PD, transfusion, hemolysis, erythropoietin, HIV therapy, advanced kidney disease, pregnancy, assay method, discordance with glucose. ADA 2026 recommends glucose criteria in altered RBC/A1c relationships; not an ethnicity correction.
- **Glucose:** fasting duration, glucose-lowering medication, recent acute illness, pregnancy, glucose collection processing. A1c–glucose disagreement is a **review prompt**.
- **Lipids:** nonfasting TG, secondary hyperlipidemia/thyroid disease, alcohol, medications, pregnancy, genetic lipid disorders, calculated vs direct LDL, personal/family ASCVD history. Lp(a) mass and molar unit handling.
- **Kidney:** acute kidney injury/dehydration, muscle mass/creatine use, cystatin C (when measured), urine infection/exercise, chronicity ≥3 months, medication changes, urine albumin confirmation. Do not alter race-free GFR.
- **Electrolytes:** hemolysis, specimen transport delay, diuretics, RAAS blockers, potassium supplements/salt substitutes, vomiting/diarrhea, ECG/symptoms; no self-directed replacement or restriction.
- **Liver:** alcohol, viral hepatitis, medications/herbals, muscle injury, bilirubin fraction, albumin/INR/platelets, imaging and fibrosis assessment; never diagnose MASLD by ALT alone.
- **Blood/iron:** menstrual/GI bleeding, pregnancy, inflammation, hemoglobinopathy, CKD, ferritin vs TSAT, B12/malabsorption; avoid unverified iron or folate dosing.

## 6. Example user language for clinician review (NOT approved production copy)

**Insufficient context:** “This result is reported as high/low, but a laboratory flag alone does not determine its cause or the right dietary response. Your other laboratory values have not been provided.”

**Possible A1c interference:** “HbA1c can be less reliable with some blood conditions or testing methods. If this A1c does not match your blood glucose measurements, discuss the discrepancy and assay method with your clinician.”

**Potassium alert:** “Potassium results can sometimes require prompt medical attention. Do not try to correct this number by starting supplements or avoiding foods based on this page. Follow any urgent instructions on your report and contact your care team.”

**Critical report or significant symptoms:** “Your laboratory report indicates an urgent result, or you reported symptoms that may require immediate assessment. Seek emergency medical help for serious symptoms; otherwise contact the ordering clinician/laboratory promptly using your report instructions.”

**No diet evidence:** “There is not enough reliable evidence to suggest a specific dietary change from this result by itself.”

These are proposed educational messages, **not validated triage advice**, and must be reviewed by appropriate clinical specialists, regulatory/privacy counsel and a patient comprehension panel.

## 7. Clinical approval and stop-release criteria

**Mandatory reviewers:** board-certified clinical pathologist/medical laboratory scientist; internal medicine or primary care physician; registered dietitian; nephrologist (kidney, potassium); endocrinologist/diabetologist (glucose); cardiologist/lipid specialist (lipids); hepatologist and hematologist for corresponding modules; clinical informaticist; legal/privacy and human-factors reviewers.

**Block release** if any of the following exists: an unapproved severity threshold; absent or untested unit conversion; lab-panel missing values treated as normal; an output recommends drugs or supplement doses; an ancestry-specific test cutoff without evidence; A1c diagnostic claims from unreliable methods; severe outlier yields a routine food suggestion; pregnancy/minor pathway slips through; critical alert routes to a dead end; an unapproved rule changes existing weight equations; false citations or source supersession; inability to roll back. Changes to critical-value governance need explicit reviewer/date, source, exception process, simulation logs and a rollback procedure.

## 8. Core sources

- [CRITICAL] *Critical Results in Laboratory Medicine*. **Clinical Chemistry** 2024;70:1220–1230. https://doi.org/10.1093/clinchem/hvae120. Notes laboratory/setting variation.
- [ADA-GLY] ADA Professional Practice Committee. *Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises—2026.* https://doi.org/10.2337/dc26-S006.
- [POTASSIUM] Kim MJ, Valerio C, Knobloch GK. *Potassium Disorders: Hypokalemia and Hyperkalemia.* American Family Physician 2023;107:59–70A. https://www.aafp.org/afp/2023/0100/potassium-disorders-hypokalemia-hyperkalemia.
- [KDIGO-24] Levin et al. *CKD 2024 Executive Summary.* https://doi.org/10.1016/j.kint.2023.10.016.
- [ACC-26] ACC/AHA et al. *2026 Dyslipidemia Guideline.* https://doi.org/10.1161/CIR.0000000000001423.
- [NGSP-26] NGSP. *HbA1c Assay Interferences,* updated October 2026. https://ngsp.org/interf.asp.
- [EAS-LPA] Kronenberg et al. *Lp(a) EAS Consensus.* 2022. https://academic.oup.com/eurheartj/article/43/39/3925/6670882.
- [FHIR] HL7 FHIR R4 Observation. https://hl7.org/fhir/R4/observation.html.

**Scientific/legal boundary:** This educational project cannot independently evaluate the urgency of an actual laboratory critical result. All numerical rules and any action-oriented messages remain withheld pending qualified validation.
