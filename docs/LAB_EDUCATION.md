# Optional laboratory-result education — scope and source audit

**Status:** Educational prototype / research-informed release; not a validated diagnosis, treatment, decision-support or medical-device claim. Original weight algorithms are unchanged. No formal clinical approval is claimed or required to prototype this informational content. High-impact personal medical actions, risk calculations and autonomous prescriptions remain out of scope pending separate verification.

## Scope

The optional section below the weight estimate accepts a lab test, exact reported value, units, the laboratory's high/low/critical flag, optional date and printed interval, and whether a glucose specimen was fasting. It does not calculate an adjusted ideal weight, diagnose a condition, set individualized lab targets, interpret reference intervals on behalf of a laboratory, or estimate treatment efficacy. Only entered values are shown. Missing values are **unknown**; the optional "remainder unflagged" checkbox stores a self-reported statement *for the current view only* without inventing numeric findings.

The initial set is HbA1c, fasting plasma glucose, LDL-C, triglycerides, HDL-C and total cholesterol. Potassium is available for safety/context messaging only. A user may enter another test, but that results in an explicit **not yet supported** message rather than improvised guidance.

## Claim → evidence map (verified against primary sources November 3, 2026)

| Page output | Basis | Boundary |
|---|---|---|
| A1c measures long-term glycemia; red-cell/hemoglobin variant caveats | [ADA Standards of Care 2026, diagnosis, §2, recommendations 2.3–2.4](https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926); DOI 10.2337/dc26-S002 | No genotype inference from self-described ancestry; no diagnosis from one result; check method and discordance |
| High HbA1c or *confirmed fasting* glucose: general high-fiber, quality carbohydrate and beverage patterns | [ADA Standards 2026, §5, recommendations 5.13–5.16 and 5.24–5.25](https://doi.org/10.2337/dc26-S005) | Nutrition is general, preferences and medicines matter; no macros or supplement doses |
| High LDL-C: unsaturated-fat substitution; fruits, vegetables, fiber-rich grains and legumes | [ACC/AHA Dyslipidemia Guideline 2026, §4.1.2.1, COR 1, B-R](https://www.jacc.org/doi/10.1016/j.jacc.2025.11.016) | No personalized cardiovascular-risk estimate or treatment target |
| High triglycerides: limit added sugar/refined carbohydrates and minimize alcohol | [ACC/AHA Dyslipidemia Guideline 2026, §4.1.2.2](https://www.jacc.org/doi/10.1016/j.jacc.2025.11.016) | Severe results need clinician assessment; avoid general advice when TG ≥500 mg/dL (5.7 mmol/L), per [ACC 2021 consensus](https://www.jacc.org/doi/10.1016/j.jacc.2021.06.011) |
| Low measured glucose and severe symptom warning | [CDC Low Blood Sugar](https://www.cdc.gov/diabetes/about/low-blood-sugar-hypoglycemia.html) | Potentially serious; no automated treatment dosing or diagnostic claim |
| Potassium high/low: avoid simple supplement/restriction suggestions; clinician context | [National Kidney Foundation, Hyperkalemia (updated 2025)](https://www.kidney.org/kidney-topics/hyperkalemia-high-potassium) | No automated potassium food prescription; abnormal potassium may need urgent review |
| Distinguish user-supplied reference intervals and flags from actual clinical significance | [NIH MedlinePlus lab-report interpretation](https://medlineplus.gov/lab-tests/how-to-understand-your-lab-results/) | Lab/method reference differences; no universal normal-value table |

The original Team 4 targeted scoping review (42 LAB claims; draft v0.9) remains a **draft research source** on [research PR #13](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/13) and does not independently prove all its claims. The above displayed content uses a deliberately narrower set of externally checked primary and agency references. Citation links are displayed alongside the corresponding output. The application does **not** issue ethnicity-specific numerical lab thresholds, race-based kidney equations, or medication advice.

## Safety and privacy design

- **No uploads, network APIs, cookies, analytics, log calls, persistence or localStorage** in the laboratory script. User-entered values are held in DOM memory only, for the current tab, until clear/reload.
- Lab content is separate from `preview-assets/core.js`. It cannot change the current weight output.
- User content is rendered using DOM `textContent` and never interpolated into HTML. Conservative validation rejects blank, non-numeric, negative and implausibly enormous entries. Values and intervals are only *displayed*, not used to label clinical diagnoses.
- Clinical safety branch: critical flag, potentially severe triglycerides, clinically significant low glucose, or potassium concerns suppress food suggestions for the whole group. Any flag marked *critical* instructs immediate contact with the reporting healthcare team; severe symptoms direct emergency care.
- Potentially harmful gaps remain: age, pregnancy, medication list, specimen quality, symptoms, assay method and diagnoses are not all collected. Therefore this cannot be relied upon to determine safety, urgency, treatment or the appropriate personal eating plan.
- Sources and wording should be periodically reviewed for corrections. Independent user-comprehension and clinical expert appraisal are **recommended before any expansion to individual treatment decisions**; they are not represented as having occurred.

## Known limitations and next work

- This initial prototype does not parse uploaded panels; phase 2 needs explicit security/privacy design and mandatory extraction confirmation.
- No actual lab-side critical flag verification, laboratory system integration, LOINC mapping or longitudinal trend analysis.
- Non-HDL-C, ApoB, Lp(a), kidney/liver/iron/thyroid tests and dietary recommendations for those conditions are withheld pending further marker-specific evidence and context design.
- The separate longstanding concern about the calculator's family-history/diabetes grouping and ancestry-BMI buffer has **not** been resolved or modified by this feature.
- Test fixtures are synthetic. Check the full automated regression suite and spot-test on mobile and assistive technology.

## Release approach

For an openly hosted, free educational site, use an evidence ledger and maintainer review of sources and wording rather than claiming formal clinical certification. Reserve diagnostic output, patient-level risk stratification, medication advice, individualized dietary prescriptions or algorithmic weight changes for a separately controlled project with professional assessment.
