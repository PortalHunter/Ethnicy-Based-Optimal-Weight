# Team 4 laboratory research — initial review status

**2026-11-03 | Draft evidence import only. Not approved for clinical use or implementation.**

Imported from the user-supplied `Research_Team_4_Laboratory_Research_Package.zip` without editing the eight research documents. All source files are version 0.9 drafts, and none has qualified clinical sign-off. This branch deliberately changes **no** HTML, JS, calculator equations, live-site bibliography or deployment workflow.

## Completeness / strengths

- All eight requested reports are present, with 42 claim records (`LAB-001`–`LAB-042`).
- Correctly distinguishes a targeted scoping review from a systematic review.
- Sensible first educational candidates: HbA1c, fasting plasma glucose, LDL-C, triglycerides; collect total cholesterol and HDL-C for contextual lipid interpretation. Non-HDL-C is conditional on verified matching inputs.
- Sensibly defers potassium/electrolytes, kidney and hepatic tests, anemia/iron and severe metabolic abnormalities to safety and clinical-context paths rather than unqualified diet instructions.
- Treats absent measurements as unknown; does not infer variants from self-described ancestry or adjust baseline target weights from lab flags.
- Acknowledges the pre-existing `docs/EVIDENCE_INTEGRATION.md` tension over diabetes family history/diagnosis conflation and experimental weight caps.

## Independently spot-checked references (not a full audit)

- ADA Standards of Care 2026, diagnosis section (DOI `10.2337/dc26-S002`) and nutrition section (`10.2337/dc26-S005`): source exists; A1c assay/physiology limitations are relevant.
- 2026 ACC/AHA Dyslipidemia Guideline (DOI `10.1161/CIR.0000000000001423`): source exists, current guideline replaces 2018 guideline.
- KDIGO 2026 CKD anemia guideline (DOI `10.1016/j.kint.2025.06.006`): published, correct version.
- Chiavaroli et al. 2018 Portfolio dietary pattern (DOI `10.1016/j.pcad.2018.05.004`): 7 comparisons, 439 participants, LDL change -0.73 mmol/L, 95% CI -0.89 to -0.56, *no body weight effect*.
- 2024 EASL/EASD/EASO MASLD guideline (DOI `10.1016/j.jhep.2024.04.031`): adult disease-specific weight-loss goals require a confirmed clinical context.
- NGSP HbA1c assay interference page (https://ngsp.org/interf.asp): October 2026 update documented.
- ADLM lipid guidance 2025 correction (DOI `10.1093/jalm/jfaf021`): correction exists; amended tables not fully audited.

**Only spot checks were performed. Most of the claim ledger has not yet been independently checked against exact source paragraphs, recommendation identifiers, and any corrections.**

## Release-blocking gaps

1. **Evidence audit:** retain exact page/paragraph/table locators, source dates and design-specific certainty, risk of bias, and correction checks for all LAB claims. The internal A/B/C/D labels are *not* clinical recommendation grades or release approval; clarify `clinical_status` for technical standards such as `LAB-042`.
2. **Input/safety:** define supported units, provenance, specimen, fasting, assay, lab-supplied intervals and high/low/critical flags. Clinicians must approve urgent-result handling and conditions that suppress nutrition advice; especially potassium, marked glucose, and severe triglycerides. No single global critical value can be assumed.
3. **Ancestry:** no ethnicity-adjusted laboratory normal ranges or inferred genotypes; distinguish hemoglobin variant assay effects and measured Lp(a) from population associations. Review performance and language for mixed/diaspora populations.
4. **Current calculator discrepancy:** the existing diabetes-risk caps / combined diabetes flag must undergo their own ANC/clinical review; LAB must not inherit or silently change the current formula.
5. **Validation:** qualified clinical pathology, endocrinology/cardiovascular, renal and nutrition sign-off as applicable; synthetic harm cases, regression, accessibility, fairness, privacy assessment and user-comprehension testing.
6. **User-facing scope:** finalize exact approved educational wording. Abnormal lab flags alone are not diagnosis or proof that a specific diet or weight target will work.

## Proposed next gate

Maintain Issue #12 as the research/clinical review gate. Next prepare a separate content specification and synthetic scenario matrix, obtain independent clinical appraisal, and **only then** authorize a lab-entry development branch. Keep the current live calculator and original math unchanged.
