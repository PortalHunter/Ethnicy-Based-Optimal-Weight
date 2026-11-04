# Research Team 4 — Laboratory Biomarker Research Review

**Research draft v0.9 | Search and evidence cutoff: November 3, 2026 | Intended use: literature synthesis only.**  
**No clinical sign-off; no changes to Ancestry Health calculator, weight equations, production advice, or GitHub repository.**  
**Companion artifacts:** [LAB evidence matrix](04_Laboratory_Evidence_Matrix.md), [ancestry interactions](04_Ancestry_Laboratory_Interactions.md), [nutrition matrix](04_Nutrition_Intervention_Matrix.md), [safety](04_Laboratory_Safety_Framework.md), [prioritization](04_Laboratory_Feature_Prioritization.md), [integration](04_Laboratory_Integration_Handoff.md), [validation](04_Clinical_Validation_Roadmap.md).

## Executive decisions

1. **First educational candidates:** laboratory HbA1c, fasting plasma glucose, LDL-C, triglycerides and non-HDL-C. All require a numeric value, unit, date, test context and laboratory-provided flag where present. Total cholesterol/HDL-C may be captured to preserve a complete lipid profile without producing isolated HDL treatment advice. **Measured Lp(a)** is a useful risk explanation, but only conditional and not a dietary target.
2. **First safety/context candidates, not self-care recommendations:** potassium, creatinine or reported race-free eGFR, urine ACR, CBC/hemoglobin, ferritin and ALT/AST. They should be displayed for clinician discussion, withhold food prescriptions when clinical information is insufficient, and be reviewed before release.
3. **Stronger nutrition evidence:** supported dietary patterns for glucose control and diabetes prevention; saturated-fat substitution and high-fiber/plant-food patterns for LDL; lower added sugar/refined carbohydrates and alcohol minimization for elevated TG; condition-specific dietary/weight interventions for **confirmed** metabolic liver disease. No biomarker establishes a scientifically individualized *ideal weight* in kilograms.
4. **Ancestry improves test validity in selected cases**, especially verified hemoglobin variant/erythrocyte phenotype and measured Lp(a). Most important is *recognizing an assay limitation and requesting confirmatory data*, not assigning ancestry-specific reference intervals. Race must not enter eGFR equations; self-identified ancestry cannot infer genotype.
5. **Withhold automatic diet suggestions** for potassium/sodium abnormalities, markedly abnormal glucose, severe hypertriglyceridemia, unexplained anemia, high iron indices, non-specific liver abnormalities, certain CKD settings, pregnancy, pediatric cases and other medically complex presentations.
6. **Missing results remain unknown**, even when users supply only flagged tests. An explicit claim that the rest of a panel was not flagged may be stored as `self_reported_unflagged_other_results=true` without constructing values or treating it as normal tests.
7. **Pre-release requirements:** clinical pathology and dietetics review, formal critical-value governance, human-readable uncertainty, unit/method tests, independent chart abstraction, fairness tests and a separate efficacy study before any clinical-benefit claim.

## 1. Methods: reproducible targeted scoping review

**Dates:** electronic searches and source inspection performed November 3, 2026, with publications available by that date. **Sources searched:** web-indexed professional-society guideline pages (ADA, AHA/ACC, KDIGO, AASLD, EASL/EASD/EASO, Endocrine Society, AGA, NICE), publisher full text, PubMed-indexed article records, NIDDK/NIH, NGSP, clinical laboratory literature and HL7 FHIR. Search examples (exact themes; not an exhaustive MEDLINE search log):

- `2026 ADA Standards diagnosis A1c variants discordance glucose`; `ADA 2026 nutrition medical nutrition therapy`; `2026 ACC AHA dyslipidemia LDL triglycerides ApoB Lp(a)`;
- `KDIGO 2024 CKD eGFR ACR race cystatin C diet potassium`; `KDIGO 2026 anemia CKD iron guideline`; `EASL 2024 MASLD weight-loss guideline`;
- `AASLD NAFLD FIB-4 ALT`; `Endocrine Society 2024 vitamin D screening dark complexion`; `NGSP October 2026 A1c assay interference`;
- `PREDIMED republished 2018 trial`; `DPP prevention 58%`; `Portfolio diet LDL meta-analysis`; `DASH sodium blood pressure trial`;
- `iron deficiency anemia ferritin AGA`; `NICE B12 NG239`; `EASL haemochromatosis TSAT`; `critical results laboratory medicine`; `Lp(a) mg/dL nmol/L no universal conversion`; `FHIR Observation laboratory LOINC UCUM`.

**Selection:** prioritized guideline versions still operative by 2026-11-03, randomized trials and systematic reviews with explicit outcomes and populations, and authoritative laboratory measurement statements. Included studies on biochemical endpoints **and** patient outcomes while distinguishing them. Excluded advertisements, unsupported ethnicity-matched dietary claims, unverified precise subgroup thresholds, and papers from which the outcome or population could not be established. Earlier landmark RCTs were included when underlying current guideline recommendations still cited their causal evidence. Current 2026 guidelines supersede corresponding 2018 cholesterol guidance; the 2026 KDIGO anemia guideline supersedes 2012 CKD anemia guidance. PREDIMED is cited using the **2018 corrected republication**, not the retracted 2013 article.

**Limitations:** This is a **targeted evidence appraisal, not an exhaustive systematic review or PRISMA process**: no exported PubMed query history, dual independent blinded screening, citation deduplication log, unpublished-data search, risk-of-bias scoring for every RCT, pooled meta-analysis, or universal GRADE assessment has been completed. Search engines can omit paywalled studies. Geographic, age and disease spectrum coverage is unequal. Numeric effect sizes are presented only where directly verified; absent data are not zeros. The 42 LAB records are a deliberately auditable **claim ledger**, not a claim of exhaustive evidence retrieval. Additional formal systematic searches are a validation gate.

**Evidence taxonomy:** (i) guideline-backed, with jurisdiction/version; (ii) trial-intervention with comparator/outcome; (iii) observational association; (iv) mechanistic or exploratory; (v) insufficient. Matrix local grades A/B/C/D are not GRADE, ADA recommendation grades, ACC levels of evidence or a clinical-device clearance.

## 2. Broad marker discovery and clinical relevance

| Clinical system | Markers examined (including those absent from common panels) | Initial interpretation boundary |
|---|---|---|
| Glucose | HbA1c; fasting/random plasma glucose; 75-g 2-hour OGTT; fructosamine; glycated albumin; fasting insulin/HOMA-IR; ketones/β-hydroxybutyrate | HbA1c and true fasting glucose strong for education; OGTT and alternate glycated proteins need protocol; insulin not useful for generalized consumer diet assignment; ketones primarily safety/clinical |
| Atherogenic lipids | Total cholesterol; direct/calculated LDL-C; HDL-C; TG; non-HDL-C; ApoB; Lp(a); LDL particle number | LDL/TG/non-HDL evidence stronger; ApoB and measured Lp(a) risk context; no HDL-raising supplement algorithm |
| Kidney | Serum creatinine, BUN, laboratory-reported eGFRcr, cystatin C/eGFRcr-cys; **urine** ACR; urinalysis protein/hematuria | Kidney status cannot be inferred from BUN or a single abnormal creatinine. Race-free equations; chronicity and albuminuria matter |
| Electrolytes/acid-base | Serum/plasma potassium, sodium, chloride, bicarbonate/total CO2, calcium (total/ionized), magnesium, phosphorus; occasionally osmolality | High immediate harm risk and multiple artifacts; no independent DIY electrolyte restriction/replacement instructions |
| Liver | ALT, AST, ALP, GGT, total/direct bilirubin, albumin, INR, platelet count, FIB-4 input values | ALT and AST nonspecific; albumin and INR potentially reflect synthetic function; automated FIB-4 not in MVP |
| Hematology/iron | CBC, hemoglobin/hematocrit, RBC count, MCV, RDW, platelets, reticulocytes, ferritin, serum iron, transferrin/TIBC, TSAT, soluble transferrin receptor, CRP | CBC/ferritin/TSAT require pattern and cause; microcytosis ≠ nutritional iron deficiency |
| Endocrine and other | TSH/free T4, urate, vitamin B12, methylmalonic acid, folate, 25-hydroxyvitamin D, PTH, CRP, urine iodine/other deficiency markers | Most conditional; missing clinical indications, assay limitations and treatment risks outweigh simple personalization |

**Specimen identity:** distinguish serum/plasma glucose from finger-stick and CGM, serum from urine sodium/potassium, random urine ACR from 24-hour protein, and whole blood HbA1c from serum proteins. Clinical decision values are **not** necessarily the testing laboratory's `H`/`L` reference-interval flag.

### Glucose and HbA1c

ADA 2026 section 2 permits diagnosis in **nonpregnant individuals** using standardized laboratory HbA1c ≥6.5%, fasting plasma glucose ≥126 mg/dL, two-hour 75-g OGTT ≥200 mg/dL, or random plasma glucose ≥200 mg/dL **with classic symptoms**. In the absence of unequivocal hyperglycemia, **confirmation is required**. This is **diagnostic guideline context**, not permission for Ancestry Health to diagnose. HbA1c is an indirect indicator of mean glucose, and may disagree with measured glucose because of red-cell turnover, iron-deficiency anemia, pregnancy, kidney failure, transfusion, G6PD deficiency, hemoglobin variants or method-specific interferences. Clinicians should use plasma glucose criteria in conditions that alter A1c–glycemia relationships. Alternative glycated proteins have a selective **monitoring** role where HbA1c is unreliable; neither is a drop-in population-screening replacement. [ADA-DX], [NGSP-26], [NIDDK-A1C].

ADA 2026 section 5 favors individualized meal plans and registered dietitian nutritionists, nutrient-dense higher-fiber foods, reduced sugar-sweetened drinks and, where suitable, lower processed-carbohydrate intake; it explicitly states that no single macronutrient distribution is ideal for everyone. A dietary micronutrient supplement is **not recommended for glycemic benefit alone**. An RCT in high-risk adults (DPP) found a 58% relative reduction in new diabetes over 2.8 years with an intensive lifestyle program versus placebo (95% CI 48–66%; incidence 4.8 vs 11.0 cases/100 person-years). This **intervention outcome** does not forecast the effect of viewing an app, and prevention trial eligibility was principally based on impaired glucose tolerance rather than any isolated high HbA1c. [ADA-NUT], [DPP].

### Lipids and cardiovascular risk

The March 2026 ACC/AHA/multisociety dyslipidemia guideline explicitly replaces the 2018 cholesterol guideline. It supports a dietary pattern rich in fruits, vegetables, nuts, legumes, whole grains and fiber, replacing saturated/trans fats with unsaturated fats to reduce LDL-C and cardiovascular risk (COR 1, LOE B-R). LDL-C plus non-HDL-C remains interpretable; ApoB is **selectively** useful to refine atherogenic particle risk. Low HDL-C and total cholesterol are context, not independent targets for supplements. High LDL-C—particularly severe, inherited or in a person with ASCVD—can require medical therapy beyond diet; an app must not suggest it can be resolved through food alone. [ACC-26].

A 2018 meta-analysis of seven Portfolio-diet comparisons (439 hyperlipidemic participants) showed LDL-C lower by 0.73 mmol/L (95% CI −0.89 to −0.56) versus a Step II diet, ~17% relative reduction; **body weight did not change** in that synthesis. This is unusually useful evidence for maintaining separate biomarker progress and weight-range outputs. It is not proof that an app-guided Portfolio diet lowers cardiovascular events. PREDIMED's corrected 2018 publication provides trial-level cardiovascular event evidence for a Mediterranean-pattern intervention in high-risk Spanish adults, not proof that a Mediterranean *ancestry* benefits more. [PORTFOLIO], [PREDIMED].

The 2026 lipid guideline distinguishes fasting TG 150–499 from 500–999 and ≥1000 mg/dL, with intensifying clinical concern for pancreatitis at severe levels. Diet-related measures differ and severe values **must first trigger medical review**. Lp(a) is a substantially genetically determined **measured** risk-enhancing factor; distributions vary by ancestry, but its relationship with ASCVD risk is largely continuous across ancestry groups. Healthier habits reduce overall CVD risk, **not reliably the Lp(a) concentration itself**. mg/dL and nmol/L are not directly convertible with a universal factor because apo(a) isoform size and measurement method differ. [ACC-26], [EAS-LPA], [ADLM-LIPID].

### Kidney, potassium and other electrolytes

KDIGO 2024 recommends evaluating kidney health by **both GFR and albuminuria**. If cystatin C is available, combined eGFRcr-cys can improve precision when appropriate. Avoid race in the calculation. A single low eGFR is not proof of CKD without chronicity or other evidence of persistent kidney damage; transient kidney injury/dehydration may be present. Random urine ACR ≥30 mg/g needs appropriate first-morning confirmation. Unentered ACR is **unknown**, not negative. BUN is particularly affected by hydration and protein intake, so it is a poor independent diet target. [KDIGO-24].

Protein/sodium advice in established CKD differs from general wellness guidance, and low muscle mass, frailty, pregnancy, dialysis or malnutrition can change it. KDIGO suggests individualized protein around 0.8 g/kg/day for CKD G3–G5 and sodium <2 g/day in relevant adult CKD contexts; **these are not app-generated user instructions**. Potassium high or low may reflect renal impairment, diuretics, ACE-inhibitors/ARBs, mineralocorticoid antagonists, gastrointestinal losses, insulin shifts or sample hemolysis. The safe default is clinical review rather than a banana/leafy-greens restriction. Serum sodium is about fluid balance, not merely dietary salt; bicarbonate abnormalities require acid–base context. No single universal laboratory critical cutoff exists across facilities/settings. [KDIGO-24], [POTASSIUM], [CRITICAL].

### Liver and weight management

Mildly high ALT/AST can accompany metabolic dysfunction-associated steatotic liver disease (MASLD) but is nonspecific: alcohol, viral hepatitis, medications, strenuous exercise/muscle injury and other liver disorders must be considered. **Normal ALT cannot rule out significant disease**. FIB-4 requires age, AST, ALT and platelet count, plus age/setting caveats; calculating it from isolated flags would create false confidence. ALP/GGT, bilirubin, albumin and INR can raise concerns about cholestasis/synthetic function and should not be converted to a diet-plan selection. [AASLD-23], [EASL-24].

In **adults with established MASLD and overweight**, the 2024 EASL/EASD/EASO guideline supports sustained weight reductions ≥5% for liver fat, 7–10% for inflammation and ≥10% for fibrosis improvement (LoE 2, strong recommendation); it also notes insufficient long-term data for liver-related mortality. AASLD 2023 reports steatosis improvement with ~3–5% and often >10% for NASH/fibrosis. Differences reflect endpoints and evidence framing—not competing equations for universal ideal weight. These figures should only appear as **condition-specific clinician-directed intervention discussions**, never substituted into Ancestry Health's kilogram-range calculation. [EASL-24], [AASLD-23].

### Hematology, iron, B12 and folate

Low hemoglobin and/or low MCV can reflect iron deficiency, inherited thalassemia trait, inflammation, blood loss, renal disease and other conditions. AGA 2020 recommends ferritin **45 ng/mL**, not 15, as a diagnostic criterion **in patients with anemia**—not a universal threshold for everyone. Ferritin is an acute-phase reactant; iron deficiency in CKD requires the newer **KDIGO 2026 anemia** definitions involving ferritin and transferrin saturation. A patient's high ferritin can reflect inflammation, liver dysfunction or metabolic disease without iron overload. In suspected hereditary hemochromatosis, TSAT, appropriate HFE or other genetic findings and evidence of iron loading are essential. Iron-containing supplements cannot be recommended from the word “low,” especially in thalassemia or iron overload contexts. [AGA-IDA], [KDIGO-26], [EASL-IRON].

NICE NG239 supports nuanced B12 interpretation after symptoms and risk factors; deficiency can cause neurologic problems **without anemia/macrocytosis**. An indeterminate serum B12 often needs methylmalonic acid in context, not automatic diet advice. Malabsorption, gastric or ileal surgery and some medications require management beyond dietary intake. Folate abnormality must be considered with B12 status, pregnancy and medication use. [NICE-B12].

### Vitamin D, thyroid and other tests

The 2024 Endocrine Society prevention guideline **suggests against routine 25(OH)D screening** of otherwise healthy adults on the basis of dark complexion or obesity; an established clinical indication (e.g., hypocalcemia/osteomalacia) is separate. No ancestry-specific threshold should be installed. An abnormal thyroid TSH, urate or CRP may prompt clinician discussion, but it is **not** a defensible coefficient for shifting the personal optimal-weight range. Thyroid and urate require diagnosis-specific context; asymptomatic hyperuricemia in CKD is not a reason to launch an automated low-purine diet or medication suggestion. [ENDO-D], [KDIGO-24].

## 3. Meaningful multi-result patterns: discussion, not diagnosis

| Pattern | Evidence-consistent educational interpretation | Information absent / why automated diet can be unsafe |
|---|---|---|
| High HbA1c + high TG ± central adiposity | Separate glycemic and atherogenic risk measures may warrant combined clinical risk review | Confirmation, diabetes phenotype, fasting, meds, BP, kidney function; cannot diagnose insulin resistance from pair alone |
| HbA1c–glucose discordance | Consider assay interference, RBC lifespan, iron deficiency or lab error; review test methodology | Requires dates, repeated glucose, CBC, potential variants, pregnancy/transfusion/CKD status; no automatic A1c correction |
| High creatinine/low eGFR + abnormal potassium | Potential kidney-related electrolyte risk, possibly urgent | AKI vs CKD, hemolysis, ECG, medicines, symptoms, repeat measurement; **withhold diet** |
| High ALT ± TG/A1c | MASLD one possibility, **not** an automatic diagnosis | Alcohol, viral hepatitis, medication, imaging, platelets, age, other liver studies; no FIB-4 from missing components |
| Low Hb + small MCV + low ferritin | Iron deficiency is possible; other causes still require assessment | Menstrual/GI bleeding, diet, inflammation, CKD, thalassemia; no blind iron supplementation |
| High ferritin + high TSAT | Possible iron overload work-up | Repeat iron tests, inflammation, liver disease, genotype/phenotype; diet not definitive treatment |
| Elevated LDL/ApoB + diabetes or CKD | Increased cumulative atherogenic risk needs clinician risk-based evaluation | Treatment history, ASCVD, lipid medications, age, family history; no change to personal weight equation |
| High TG >=500 mg/dL | Pancreatitis risk and treatment decisions exceed a wellness tool | Fasting confirmation, symptoms, other conditions/medications; promptly refer |

## 4. Weight management: permissible inferences

**Allowed:** communicate evidence that a clinically supported lifestyle intervention may reduce glucose-related or atherogenic risk, provide independent time-series of biomarker values and anthropometric measures, and provide clinician discussion topics for a **diagnosed** disease. Discuss relative percent-weight-loss intervention goals only within their proven population and condition; explain that laboratory progress may occur without substantial weight loss.

**Not allowed:** add or subtract kilograms from the calculator's estimated range based on HbA1c, lipids, potassium, ALT, TSH or inflammation; derive ethnicity-by-lab interactions; classify “metabolically healthy” as a guarantee; treat A1c normalization as proof the person's weight is optimal. No reviewed trial or guideline provides validated per-lab kg or BMI adjustment for this calculator [LAB-040].

## 5. User-experience evidence and uncertainty

The scientific evidence supports **clinical-system grouping** because sources address different biological/clinical questions, but **direct comparative usability evidence for grouping versus a sequential list was not established in this search**. Treat grouping as a **design hypothesis requiring testing**, not as an evidence-proven superior interface. Proposed groups: Glucose, Cardiovascular lipids, Kidney/electrolytes, Liver, Blood/iron, Other. Show high-priority clinician-review prompts ahead of educational modules.

Each test card should show: user-entered name and exact numeric value/unit; `H/L` flag with the **original laboratory reference interval** if known; collection date, specimen and method; explanation; what cannot be determined; relevant connected values *only if actually entered*; diet considerations keyed to independently reviewed evidence (or “No reliable dietary recommendation from this result alone”); ancestry caveat only if meaningful; clinician questions; and claim IDs with source/year/certainty. If any core datum missing, downgrade or withhold interpretation. Never show an individualized medical diagnosis.

For future full-panel uploads, require human confirmation of each extracted value, unit, analyte identity, abnormal indicator, interval, specimen, date, fasting state, method/assay if relevant, age and relevant clinical context. Map LOINC concepts and UCUM units, preserve source terminology, and represent `Observation.code`, `valueQuantity`, `interpretation`, `referenceRange`, `effectiveDateTime`, `specimen`, `method` and `dataAbsentReason` in an HL7 FHIR-compatible internal model. Image/PDF extraction error can shift a decimal, confuse serum with urine, or mislabel LDL and HDL; no assessment is safe until reviewed. [FHIR], [LOINC], [UCUM].

## 6. High-priority gaps and next research

- **External generalizability:** interventions under-represent some Indigenous American, Caribbean, Middle Eastern, heterogeneous African and mixed-heritage subgroups. Do not retrofit false precision to Scandinavian/Mediterranean, Central/South American or other regional labels.
- **A1c calibration:** verify NGSP **October 2026** method table and assay model/version, not just inherited variant name. A1c–glucose discordance needs further clinical follow-up; race-wide numeric correction is prohibited.
- **Ancestry fairness:** validate same value receives same medical explanation regardless of self-identified ancestry except a carefully worded *test-reliability caveat*, and avoid over-alerting selected groups without confirmation.
- **Geriatric/complex disease:** CKD, dialysis, frailty, malignancy, liver cirrhosis, recent blood loss, active pregnancy, minors and eating disorders need separately reviewed pathways; educational-only defaults may still be unsafe.
- **Nutritional endpoints:** identify further RCTs linking specific diets to hard clinical outcomes independent of medication and weight loss, and document uncertainty; population-stratified randomized evidence remains scarce.
- **Source audit:** finish formal PubMed/MEDLINE search strategy and independent bibliographic/erratum review, including the 2025 correction to the 2024 ADLM lipid guidance (DOI 10.1093/jalm/jfaf021). Audit whether any guideline released after the listed versions and before freeze date superseded particular subsections.
- **Clinical thresholds:** no global critical-value table may be imported without laboratory medicine governance and jurisdiction. Adverse event capture and standardized escalation must be tested.

## 7. Principal primary-source register

Full bibliographic entries and stable URLs for all claim-linked sources appear in [04_Laboratory_Evidence_Matrix.md](04_Laboratory_Evidence_Matrix.md#source-register-exact-primary-titles-stable-links-and-version-notes). Particularly important sources:

- **[ADA-DX]** ADA Professional Practice Committee. *Diagnosis and Classification of Diabetes: Standards of Care in Diabetes—2026.* 2026. https://doi.org/10.2337/dc26-S002
- **[ADA-NUT]** ADA Professional Practice Committee. *Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes—2026.* 2026. https://doi.org/10.2337/dc26-S005
- **[ACC-26]** Blumenthal et al./ACC/AHA and multisociety. *Guideline on the Management of Dyslipidemia.* 2026. https://doi.org/10.1161/CIR.0000000000001423
- **[KDIGO-24]** Levin et al. *Executive Summary of the KDIGO 2024 CKD Guideline.* 2024. https://doi.org/10.1016/j.kint.2023.10.016
- **[KDIGO-26]** KDIGO Anemia Work Group. *Anemia in CKD Guideline.* 2026. https://doi.org/10.1016/j.kint.2025.06.006
- **[EASL-24]** EASL/EASD/EASO. *MASLD Clinical Practice Guideline.* 2024. https://doi.org/10.1016/j.jhep.2024.04.031
- **[NGSP-26]** NGSP. *HbA1c Assay Interferences.* Updated October 2026. https://ngsp.org/interf.asp
- **[ENDO-D]** Endocrine Society. *Vitamin D for the Prevention of Disease.* 2024. https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease
- **[DPP]** Knowler et al. *Reduction in the Incidence of Type 2 Diabetes with Lifestyle Intervention or Metformin.* 2002. https://doi.org/10.1056/NEJMoa012512
- **[PORTFOLIO]** Chiavaroli et al. *Portfolio Dietary Pattern and Cardiovascular Disease.* 2018. https://doi.org/10.1016/j.pcad.2018.05.004

**Interpretive reminder:** Guideline consensus and surrogate endpoint improvements are not proof that this app improves outcomes. This document is research-only pending specialist review.
