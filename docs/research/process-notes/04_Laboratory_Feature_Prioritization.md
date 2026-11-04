# Research Team 4 — Laboratory Feature Prioritization and Proposed User Experience

**Version:** 0.9 research draft | **Evidence cutoff:** November 3, 2026 | **Release status:** proposal only; **no feature is clinically approved**.

**Decision:** start with a small *educational* glucose/lipid interpretation experience, with mandatory contextual capture and safety routing. Show a separate clinical-context section; do **not** modify the ancestry-adjusted weight formula, BMI cutoffs, body-frame model, or calculations. Numbers outside the proposed set must not produce improvised dietary advice. This document is a feature-planning artifact, not a clinical decision-support algorithm.

## 1. Classification contract

Four feature dispositions are assigned independently of study quality and may change after clinical review:

- **A — Ready for educational presentation:** credible, sufficiently specific evidence supports a cautious explanation, *conditional on data and safety checks*. This is **not approval to deploy automated medical advice**.
- **B — Conditional:** context, companion measurements, professional interpretation, or safeguards are necessary before meaningful interpretation. Can be collected as a clinician-discussion prompt; targeted advice withheld unless independently approved.
- **C — Research only:** plausible relevance but not sufficient incremental value or clinical utility for individualized recommendations.
- **D — Exclude/withhold:** numerical interpretation, weight adjustment, or a proposed dietary recommendation is unsuitable or potentially harmful.

A high/low label alone is not enough for the proposed MVP: users must enter a **numeric result, exact unit, lab interval/flag, date, specimen, and relevant context**; blank entries mean **unknown**, never normal. An explicit statement that the rest of the panel was not flagged is preserved as *unverified self-report*, not as numerical normality.

## 2. Proposed launch shortlist, ranked by usefulness and hazard

| Order | Marker or group | Disposition | Reason to prioritize | Mandatory caveat / missing-data fallback | Ancestry relevance | Suggested initial output |
|---:|---|---|---|---|---|---|
| 1 | **HbA1c** | **A** | Evidence-based glycemic context and structured diabetes-prevention education | Numeric % or mmol/mol, assay/discordance/hemoglobin disorder warnings, pregnancy exclusion; never app diagnosis | Hemoglobin variants / RBC turnover, **not** ethnic correction factor | Meaning, limits, clinician follow-up, nutrition pattern discussion |
| 2 | **Fasting plasma glucose** | **A** | Complements HbA1c, well-characterized clinical decision thresholds | Document fast duration, plasma specimen, acute illness, confirmation; if fast unknown label interpretation conditional | None as independent numeric threshold | Meaning, why A1c may disagree, clinician discussion |
| 3 | **LDL-C** | **A** | Strong dietary substitution and cardiovascular-risk evidence; supported by trials/guidelines | Units, direct vs calculated, TG interference, medication and ASCVD context; very high levels merit clinician assessment | No ancestry-specific numeric target inferred | Diet-pattern education, optional swaps, follow-up |
| 4 | **Triglycerides** | **A** for routine elevations; **B** for severe/potentially acute | Nutrition-related cardiometabolic information; marked elevation changes safety priorities | Fasting status, alcohol/medication/diabetes context; suspected severe elevation should not receive generic web-only advice | No validated ancestry-specific critical cutoff | Education or prompt assessment according to professional review |
| 5 | **Non-HDL cholesterol** | **A** for educational calculation if measured TC and HDL are available; **B** for independent therapeutic use | Complements LDL-C and triglycerides in broader risk discussion | Calculate only from *confirmed compatible* TC minus HDL in matching units; require complete entries | No ancestry-derived target | Explanation, not a treatment decision |
| 6 | **HDL-C and total cholesterol** | **B** in isolation | Necessary for complete lipid-panel understanding and non-HDL; HDL improvement itself is not a treatment target | No isolated recommendations to "raise HDL"; contextualize with LDL, TG and clinical risk | Population distributions do not mandate tailored ranges | Combined lipid summary only |

**Minimal proposed first release:** HbA1c; fasting plasma glucose; LDL-C; triglycerides; total cholesterol and HDL-C (to present an entered lipid panel together); optional non-HDL if input or calculated after user confirmation. The number of on-screen fields should stay small and grouped, while allowing an "other abnormal result" selection that states that the result is outside current interpretation scope instead of generating unverified text. The first-release content is **not approved** until all safety, clinical, unit, and accessibility gates in the validation roadmap are passed.

**Exceptional values:** the same interface must allow a medically urgent result to be entered without treating it as routine education. It must not make medical decisions from one numeric threshold taken from a website. Critical values depend on laboratory notification policies, context, and symptoms. See the Safety Framework for safe escalation language and when to suppress nutritional content.

## 3. Other marker dispositions — broad discovery inventory

The table distinguishes **collecting** a result from **personally interpreting** it. “Later” means staged research and validation, not promise of an individual clinical feature.

| System | Candidate | Disposition | Phase | Why not routine first-release automated diet guidance? |
|---|---|:---:|---|---|
| Glucose | 75-g 2-h OGTT glucose / timed series | B | Later | Requires exact challenge protocol, duration, clinical context; pregnancy uses different criteria |
| Glucose | Random plasma glucose | B | Later | Symptoms and clinical confirmation essential; casual interval comparison misleading |
| Glucose | Fructosamine | B | Later specialty | Protein turnover and local methods/reference limitations; alternative when A1c unreliable |
| Glucose | Glycated albumin | B | Later specialty | Albumin kinetics, renal/liver conditions; limited population screening utility |
| Glucose | Fasting insulin | C | Research | Non-standardized application for individualized diet selection |
| Glucose | HOMA-IR / derived insulin resistance | C | Research | Population/assay variation; no validated diet personalization rule |
| Glucose | Ketones / β-hydroxybutyrate | B | Specialty/safety | Result may be relevant to acute metabolic illness; not a consumer diet target |
| Lipid | ApoB | B | Later | Clinically relevant when LDL/non-HDL discordant; treatment assessment depends on global risk |
| Lipid | Lp(a) | B | Later | Often inherited and useful for ASCVD discussion but **not a diet-response marker**; assay units noninterchangeable |
| Lipid | LDL particle number/subfractions | C | Research | Added clinical utility beyond routine lipids/ApoB not established for this tool |
| Kidney | Serum creatinine | B | Later with safety | Reflects muscle mass, dehydration, assay, AKI; cannot infer diet from lone result |
| Kidney | Reported eGFR | B | Later with safety | Interpretation needs equation, age, persistence, clinical context; no race multiplier |
| Kidney | Cystatin C / combined eGFRcr-cys | B | Later | Useful to confirm selected cases; assay and clinical context required |
| Kidney | BUN / urea | B | Later | Dehydration, protein intake and renal function interact; not an isolated protein directive |
| Kidney, urine | Urine albumin/creatinine ratio (uACR) | B | Later | **Urine** test; repeat/persistence and transient effects required; cannot be compared with serum values |
| Kidney, urine | Urinalysis protein/blood/glucose/ketones | B | Later specialty | Different analytes and methods, sometimes urgent clinical context; no universal nutrition algorithm |
| Electrolyte | Serum potassium | B | Later safety only | Harm from blanket potassium restriction/supplementation; renal function, drugs, hemolysis and urgency critical |
| Electrolyte | Serum sodium | B | Later safety only | Volume status and acuity matter; a low result is not a general instruction to eat salt |
| Electrolyte | Chloride | B | Later as panel component | Requires acid-base and neighboring measures |
| Electrolyte | Bicarbonate / total CO2 | B | Later safety only | Acid-base/renal interpretation requires clinical review |
| Mineral | Calcium (total and ionized) | B | Later specialty | Albumin, pH, specimen and symptoms must be considered; no automatic calcium supplementation |
| Mineral | Magnesium | B | Later safety/context | Kidney/drug/GI factors and symptoms; indiscriminate supplements unsafe |
| Mineral | Phosphate/phosphorus | B | Later specialty | Kidney and nutritional context; potential harm from blanket restrictions |
| Liver | ALT | B | Later | Multiple causes, persistence and fibrosis risk; NAFLD/MASLD not inferred from ALT alone |
| Liver | AST | B | Later | Muscle/alcohol and other sources; AST/ALT ratio not diagnosis |
| Liver | ALP | B | Later specialty | Liver versus bone origin requires tests/symptoms |
| Liver | Bilirubin, direct/total | B | Later safety | Distinct benign and potentially urgent etiologies; no generic diet change |
| Liver | Albumin, total protein | B | Later | Inflammation, liver, kidney and nutritional status; not equivalent to protein deficiency |
| Liver | GGT | B | Later | Nonspecific; medicines/alcohol/other causes; context needed |
| Liver | INR / prothrombin time | B | Specialty/safety | May reflect impaired hepatic synthesis or anticoagulation; not a nutritional intervention from a lone flag |
| Hematology | CBC: hemoglobin, hematocrit, RBC, WBC, platelets | B | Later | Complete blood-count context and age/sex/gestation; never diagnose anemia cause from one flag |
| Hematology | MCV, MCH, RDW, reticulocytes | B | Later | Workup context for anemia/hemoglobinopathy, not food prescription |
| Iron | Ferritin | B | Later | Acute-phase reactant; iron overload vs deficiency cannot be assigned by flag alone |
| Iron | Serum iron, transferrin, TIBC, TSAT | B | Later | Interpreted together, fasting/method context and inflammation matter |
| Nutrient | Vitamin B12 | B | Later | Confirming etiology and neuro symptoms important; thresholds assay-dependent |
| Nutrient | Methylmalonic acid / holotranscobalamin | B | Specialty | May supplement B12 evaluation, but kidney function and assay context matter |
| Nutrient | Folate | B | Later | B12 deficiency can coexist; do not automatically give folic acid advice |
| Nutrient | 25-OH vitamin D | C for routine personalized wellness; B when clinician-directed | Research/specialty | Evidence does not justify universal ancestry/skin-color screening or weight-target change |
| Endocrine | TSH and free T4 | B | Later | Biotin/illness, gestation, drugs; treatment decisions are clinical |
| Endocrine | Parathyroid hormone | B | Specialty | Interpret with calcium, kidney function and 25-OH D; not general weight guidance |
| Endocrine | Free T3, reverse T3 | C | Research | Low incremental usefulness for general nutrition/weight screening; inappropriate routine personalization |
| Metabolic | Uric acid | B | Later | Asymptomatic elevation not gout; stones and drugs determine context |
| Other | CRP / hsCRP | C | Research | Inflammation not a dietary diagnosis; infection/illness can dominate |
| Other, urine | Urine iodine / urine sodium/osmolality | B for specialist interpretation; C routine | Specialty | Urinary measures reflect different physiology and collection; no broad personal diet targets |
| Other | Vitamin A/E/K, selenium, zinc, copper | B only with defined indication; C otherwise | Specialty | Deficiency/toxicity, assay and supplement interactions require specialist assessment |
| Other | Direct-to-consumer metabolomic or microbiome scores | D | Exclude | No established, transferable personalized intervention algorithm for this calculator |
| Other | Genotype-inferred lab values without a measured test | D | Exclude | Ethnicity or inferred variant is not a measured biomarker |
| Other | "Optimal-weight adjustment" calculated from any lab | D | Exclude | No validated equation or evidence of improved patient outcomes |

For tests outside an in-scope adult population—including pregnancy, pediatrics, complex kidney/liver disease, recent hospitalization, transfusion, and highly unusual or incompatible units—default to **B/specialist interpretation or D/withhold advice** until dedicated validation exists. This is a *population-scope* restriction, not an inference about individuals.

## 4. Staged research-to-feature plan

| Stage | Preconditions and deliverable | Scope | No-go boundary |
|---|---|---|---|
| **Stage 0 — scientific and safety gate** | Verify source DOI and exact recommendation, external clinical reviewer signoffs, tested unit definitions, documented governance, privacy and threat model | Research-only content; approved wording library; data dictionary and clinical risk register | No public personalized lab output until completed |
| **Stage 1 — manual-entry educational pilot** | Controlled fields, evidence label, clinician discussion, urgent-result fallback, manual date/unit/flag, user confirms source | Glycemia and common lipids only; no diagnosis, therapy plan, personal risk score, or numeric weight adjustment | No automatic diagnosis, medication recommendation, supplement dose or dietary restriction |
| **Stage 2 — context and constrained panels** | Independently validated CKD, liver and hematology clinical contexts, multi-value capture, false-negative analysis | Kidney/uACR, ALT/AST, CBC/ferritin/TSAT, potassium/sodium and selected additional lipids | No "CKD diet" or potassium restriction from an isolated flagged value |
| **Stage 3 — complete-panel upload research** | Validated parser and secure data handling; LOINC/UCUM/FHIR; human verification of each extracted observation | PDF/images/coded FHIR panels with human-confirmed review | An uploaded report is not equivalent to verified data; no silent OCR decisions |
| **Stage 4 — optional clinical study** | IRB/ethics/regulatory assessment, external validation, monitoring and clinical partner | Compare education and care-seeking behavior; evaluate clinical utility prospectively | No claimed improved outcomes without outcome-level evidence |

Recommended product architecture even in an educational release: **keep the existing weight result above and independent of the lab discussion**; show a collapsed "Lab results (research / educational)" area with a visible separation, not a new input into the weight engine. Risk context (e.g., high A1c and elevated triglycerides) can be educational text, not a synthetic metabolic score or individualized weight prescription.

## 5. Proposed UX contract (copy and interaction, not code)

**Before entry:** “This educational tool can help you understand selected results and prepare questions for your clinician. It does not diagnose disease or tell you how to treat an abnormal result.” Ask whether the result is from a laboratory report and whether the user is entering only flagged items.

**During entry:** Select test by standardized name (display common synonyms); capture number and *report’s exact unit*; capture high/low flag **as printed**, report reference interval or decision threshold if supplied, collection date, fasting status, specimen, and relevant medication/condition caveats. Explain that missing tests remain unknown. Offer a separate confirmation: “I have not entered the other results; I believe they were not flagged by my laboratory” (self-report only).

**Results display:** Organize by **glycemia, lipids, kidney/electrolytes, liver, blood/nutrients**, with separate tabs/sections for “Your entered results,” “What this test measures,” “What might affect the result,” “Evidence-based food patterns (where applicable),” “When to contact a clinician,” and “Evidence / source.” Grouping by system is a reasonable usability hypothesis, **not a proven superior design**; compare with chronological/sequential layout through user testing.

**Example educational template (not approved release copy):**

> **LDL cholesterol — marked high on your report.** Entered: [value] [unit] on [date]. LDL is a marker used in cardiovascular risk assessment. Dietary patterns emphasizing unsaturated fats instead of saturated fats and soluble fiber can lower LDL in studied groups; the benefit varies and does not determine whether you need medication. Your clinician may consider other risk factors and measurements. **Evidence:** ACC/AHA 2026 and controlled dietary trials. **Limitations:** your overall cardiovascular risk and medications are not known to this tool.

The bracketed placeholders represent user-confirmed values; do not synthesize absent values or automatically assume unit conversion. Use source-backed copy variants only after clinician signoff.

## 6. Implementation prerequisites and decision scorecard

Before any LAB claim becomes a visible personal output, reviewers must record (1) intended-use classification; (2) original population and external validity; (3) exact source locator and correction state; (4) assay and specimen compatibility; (5) effect and outcome type; (6) unit/interval test coverage; (7) unsafe-input and missing-data behavior; (8) clinical and laboratory-medicine signatures; (9) subgroup fairness; and (10) date and rollback protocol. User understanding and referral language should be tested alongside scientific correctness.

**Proposed feature ranking dimensions:** direct actionable evidence (0–4), clinical prevalence/usefulness (0–3), cost/entry effort (0–3), expected avoidance of harm (0–4), ancestry-specific interpretive utility (0–2), and risk of misuse (negative 0–5). These are **planning rubric weights only**, not empirical performance scores or validated medical benefit coefficients; do not calculate a pseudo-clinical score from them without stakeholder review. Safety gating is non-compensatory: a strong evidence score never overrides contraindications.

## 7. Traceability and pending review

- Glycemia: `LAB-001`–`LAB-007`, `LAB-031`–`LAB-032`; ADA Standards of Care 2026, DPP, NGSP (October 2026).
- Lipids: `LAB-008`–`LAB-014`, `LAB-033`; 2026 ACC/AHA guideline, EAS lipoprotein(a) statement, Portfolio meta-analysis.
- Kidney/electrolytes: `LAB-015`–`LAB-019`, `LAB-034`, `LAB-038`; KDIGO 2024, potassium clinical review.
- Liver, blood and nutrients: `LAB-020`–`LAB-030`, `LAB-035`; EASL 2024 MASLD, AGA 2020 iron-deficiency anemia, KDIGO 2026 CKD anemia, NICE 2024 B12, Endocrine Society 2024 vitamin D.
- Safety, patterns, equations and interoperability: `LAB-036`–`LAB-042`.

Full source titles, links, design, available effects, limitations and current verification gaps: [04_Laboratory_Evidence_Matrix.md](04_Laboratory_Evidence_Matrix.md). Unresolved source checks are not evidence of validation. Integrate with the existing [Clinical Review](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/docs/process/CLINICAL_REVIEW.md); update repository-relative links only after the maintainer selects final file locations.

**Decision:** first *research prototype* should emphasize understanding **A1c, fasting glucose, LDL-C and triglycerides** with other lipid-panel context. No lab value will modify the weight range. Strong clinical safety boundaries and independent review are prerequisites to any public rollout.
