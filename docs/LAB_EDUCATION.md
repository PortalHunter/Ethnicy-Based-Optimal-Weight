# Optional laboratory-result education — scope and source audit

**Status:** Educational prototype / research-informed release; not a validated diagnosis, treatment, decision-support or medical-device claim. Original weight algorithms are unchanged. No formal clinical approval is claimed or required to prototype this informational content. High-impact personal medical actions, risk calculations and autonomous prescriptions remain out of scope pending separate verification.

## Scope

The optional section below the weight estimate accepts a lab test, exact reported value, units, the laboratory's high/low/critical flag, optional date and printed interval, and whether a glucose specimen was fasting. It does not calculate an adjusted ideal weight, diagnose a condition, set individualized lab targets, interpret reference intervals on behalf of a laboratory, or estimate treatment efficacy. Only entered values are shown. Missing values are **unknown**; the optional "remainder unflagged" checkbox stores a self-reported statement *for the current view only* without inventing numeric findings.

The supported nutrition-education markers remain HbA1c, confirmed fasting plasma glucose, LDL-C and triglycerides (with HDL-C and total cholesterol used only as supporting context). Potassium remains safety/context only. **Reported eGFR and urine albumin-to-creatinine ratio (uACR)** are now accepted as **kidney discussion context only**, based on KDIGO 2024; they never trigger a kidney-specific food plan, a diagnosis, race-adjusted eGFR or a calculation of kidney risk. A user may enter an unsupported test, but that results in an explicit **not yet supported** message rather than improvised guidance.

## Claim → evidence map (verified against primary sources November 3, 2026)

| Page output | Basis | Boundary |
|---|---|---|
| A1c measures long-term glycemia; red-cell/hemoglobin variant caveats | [ADA Standards of Care 2026, diagnosis, §2, recommendations 2.3–2.4](https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926); DOI 10.2337/dc26-S002 | No genotype inference from self-described ancestry; no diagnosis from one result; check method and discordance |
| High HbA1c or *confirmed fasting* glucose: general high-fiber, quality carbohydrate and beverage patterns | [ADA Standards 2026, §5, recommendations 5.13–5.16 and 5.24–5.25](https://doi.org/10.2337/dc26-S005) | Nutrition is general, preferences and medicines matter; no macros or supplement doses |
| High LDL-C: unsaturated-fat substitution; fruits, vegetables, fiber-rich grains and legumes | [ACC/AHA Dyslipidemia Guideline 2026, §4.1.2.1, COR 1, B-R](https://www.jacc.org/doi/10.1016/j.jacc.2025.11.016) | No personalized cardiovascular-risk estimate or treatment target |
| High triglycerides: limit added sugar/refined carbohydrates and minimize alcohol | [ACC/AHA Dyslipidemia Guideline 2026, §4.1.2.2](https://www.jacc.org/doi/10.1016/j.jacc.2025.11.016) | Severe results need clinician assessment; avoid general advice when TG ≥500 mg/dL (5.7 mmol/L), per [ACC 2021 consensus](https://www.jacc.org/doi/10.1016/j.jacc.2021.06.011) |
| Low measured glucose and severe symptom warning | [CDC Low Blood Sugar](https://www.cdc.gov/diabetes/about/low-blood-sugar-hypoglycemia.html) | Potentially serious; no automated treatment dosing or diagnostic claim |
| Potassium high/low: avoid simple supplement/restriction suggestions; clinician context | [National Kidney Foundation, Hyperkalemia (updated 2025)](https://www.kidney.org/kidney-topics/hyperkalemia-high-potassium) | No automated potassium food prescription; abnormal potassium may need urgent review |
| Reported eGFR and urine ACR: kidney health requires both markers, prior results, chronicity and clinical context | [KDIGO 2024 CKD Guideline, §§1.1–1.3](https://doi.org/10.1016/j.kint.2023.10.016) | No CKD diagnosis from one result, no universal kidney diet, no race factor in eGFR, no risk scores. Abnormal flags suppress general food tips pending clinical review |
| Distinguish user-supplied reference intervals and flags from actual clinical significance | [NIH MedlinePlus lab-report interpretation](https://medlineplus.gov/lab-tests/how-to-understand-your-lab-results/) | Lab/method reference differences; no universal normal-value table |

The original Team 4 targeted scoping review (42 LAB claims; draft v0.9) remains a **draft research source** on [research PR #13](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/13) and does not independently prove all its claims. The above displayed content uses a deliberately narrower set of externally checked primary and agency references. Citation links are displayed alongside the corresponding output. The application does **not** issue ethnicity-specific numerical lab thresholds, race-based kidney equations, or medication advice.

## Safety and privacy design

- **No uploads, network APIs, cookies, analytics, log calls, persistence or localStorage** in the laboratory script. User-entered values are held in DOM memory only, for the current tab, until clear/reload.
- Lab content is separate from `preview-assets/core.js`. It cannot change the current weight output.
- User content is rendered using DOM `textContent` and never interpolated into HTML. Conservative validation rejects blank, non-numeric, negative and implausibly enormous entries. Values and intervals are only *displayed*, not used to label clinical diagnoses.
- Clinical safety branch: **any laboratory-reported low glucose flag** (even without a numerical severe threshold), critical flag, potentially severe triglycerides, clinically significant low glucose, potassium concerns **or a flagged kidney measurement** suppress food suggestions for the whole group. Any flag marked *critical* instructs immediate contact with the reporting healthcare team; severe symptoms direct emergency care.
- Potentially harmful gaps remain: age, pregnancy, medication list, specimen quality, symptoms, assay method and diagnoses are not all collected. Therefore this cannot be relied upon to determine safety, urgency, treatment or the appropriate personal eating plan.
- Sources and wording should be periodically reviewed for corrections. Independent user-comprehension and clinical expert appraisal are **recommended before any expansion to individual treatment decisions**; they are not represented as having occurred.


## Optional guidance experience — November 4, 2026

- This form is **separate** from the ideal-weight calculator. Opening it, entering values or receiving notes never modifies the weight calculation engine.
- Users may enter one or more measured lab results with exact units, the laboratory's **explicit** flag (default not flagged/unsure), and optionally the collection date, printed interval and fasting status. Missing values remain unknown; an unflagged measurement is not assumed healthy or disease-free.
- Cards display the supplied measurement and flag, a source-linked description, a **question to bring to a clinician**, and—only for a supported high HbA1c, confirmed fasting glucose, LDL-C or non-severe triglycerides—concrete examples of *general* guideline-supported food patterns. They do not estimate an individual benefit or prescribe a plan.
- High-risk or potentially complicated entries suppress generic food suggestions for the set of entered values. Pregnancy, symptoms, clinical diagnoses, prescriptions, assay methods and other vital context are not fully collected; users should not rely on this section to judge urgency or manage treatment.
- Every informational suggestion is explicitly limited to the citation supporting that type of guidance; questions are not a diagnosis. No medication adjustment, genotype inference, ancestry-based lab threshold, personal risk score or lab-driven weight calculation is offered.

## Dietary-pattern study comparison — November 4, 2026

A second **collapsed, optional "Compare diets studied in research"** panel offers brief primary-source trial comparisons for **Mediterranean, DASH, Portfolio, quality-focused lower carbohydrate, ketogenic, plant-forward/healthy low-fat, and time-restricted eating**. See the [primary-source dietary evidence review](research/DIET_PATTERN_EVIDENCE_2026-11-04.md) for studies, populations, outcomes, corrections, limitations and the critical keto-vs-Mediterranean distinction. It covers PREDIMED's **2018 reanalysis**, CORDIOPREV, Keto-Med **and its 2022 figure-axis correction**, DASH-Sodium, Chiavaroli Portfolio meta-analysis, DIETFITS, ADA Standards 2026, and a time-restricted eating RCT.

**Result-linked suggestions are strictly limited:** when a user **explicitly flags** supported A1c, confirmed fasting glucose, LDL or non-severe TG as high, the result panel shows **two or three distinct study-linked pattern cards**, never an eligibility verdict or ranking. Mediterranean-style is shown as general cardiometabolic context; Portfolio if LDL is flagged high; quality-focused lower-carbohydrate if glycemic or non-severe triglycerides are flagged high. When both lipid and glycemic flags are present, the list is capped at three distinct patterns rather than repeating or stacking unlimited suggestions. A **separate, explicitly non-recommended Keto-Med comparison** explains the HbA1c null result and opposing triglyceride/LDL findings, plus SGLT2/medication concerns. This is not a diet prescription, a recommendation to begin keto, a risk score or a prediction of clinical benefit. Unconfirmed fasting glucose, unknown or unflagged measurements do not trigger condition-specific study cards. Source provenance and limitation labels are visible within each card.

The newly indexed 26 Grok handoff records in [the source-gated integration register](research/handoffs/grok-2026-11-04/README.md) are **not** automatic authorization to change the patient-facing text. That register preserves the difference between an independently checked study anchor and a validated diet selection rule. The current cards retain the previously checked primary/guideline studies and no demographic/genotype response model.

**Any critical/unsafe result, severe TG or low glucose, potassium concern, or flagged kidney test continues to suppress all result-linked food and study suggestions.** The independent, collapsed research library remains available as non-tailored reference material for anyone who opts to open it; its appearance is not a verdict that a diet is safe. The app does not collect medication details, disordered-eating risk or other context to clear ketogenic/fasting safety.

Media personalities (including Dr. Eric Berg, D.C.) may be a source of *hypotheses to check* but not independent evidence: no branded or influencer regimen is endorsed. The research review cites his own biography only for credential/claim provenance and evaluates published studies separately. The calculator engine and all ideal-weight outputs remain unchanged.

## Adversarial laboratory safety regression — November 4, 2026

The separate `tests/lab-adversarial.test.mjs` suite exercises **21 synthetic laboratory-panel scenarios** drawn from Team C's [32-case research handoff](research/handoffs/grok-2026-11-04/source-files/C/USER_COMPREHENSION_CASES.md), plus malformed numeric input checks. It verifies source-linked educational cards, the three-pattern cap, fasting uncertainty, special cases where numeric values trigger a warning even without a lab flag, and withholding when **critical flags, potassium, flagged kidney results, severe triglycerides, clinically significant low glucose or a laboratory-reported low glucose flag** coexist with otherwise diet-eligible results.

**New conservative safety gate:** a self-reported *low* laboratory glucose flag now withholds all generic diet suggestions for that entered set, including when another test (e.g. LDL) is flagged high. It does not automatically diagnose hypoglycemia from the number. The clinician note references the [CDC low-blood-sugar guidance](https://www.cdc.gov/diabetes/about/low-blood-sugar-hypoglycemia.html); the severe numeric exception remains separately defined in the existing function.

**Important coverage limitation:** the form does **not** ask about pregnancy, medication use (SGLT2 inhibitors, insulin/sulfonylureas), disordered eating, measured genotype, symptoms or assay interference. Consequently, tests **cannot** demonstrate that the site recognizes such information; these factors remain unknown, and no restrictive or ketogenic eating plan should be inferred to be safe. Team C's proposed clinical stop conditions that require missing inputs are research hypotheses for a future separate usability/safety design review, not implemented risk screening.

The original weight engine, ancestry inputs and ideal-weight formula are unchanged. These browser regressions test limited behavior, **not** clinical validation, diagnosis accuracy, treatment suitability or human-factors usability.

## Known limitations and next work

- This initial prototype does not parse uploaded panels; phase 2 needs explicit security/privacy design and mandatory extraction confirmation.
- No actual lab-side critical flag verification, laboratory system integration, LOINC mapping or longitudinal trend analysis. A default **'Not flagged / not sure'** option prevents interpreting an entered value as high by default. High/low/critical flags are always reported by the user; the app does not independently verify or generate them. Except for named low-glucose and severe-triglyceride safety branches, numeric values are shown without medical threshold classification.
- Non-HDL-C, ApoB, Lp(a), liver/iron/thyroid and other kidney tests and dietary recommendations for those conditions remain withheld pending further marker-specific evidence and context design. eGFR and urine ACR are shown as **context only**; no kidney dietary advice or staging is generated.
- The separate longstanding concern about the calculator's family-history/diabetes grouping and ancestry-BMI buffer has **not** been resolved or modified by this feature.
- Test fixtures are synthetic. Check the full automated regression suite and spot-test on mobile and assistive technology.

## Release approach

For an openly hosted, free educational site, use an evidence ledger and maintainer review of sources and wording rather than claiming formal clinical certification. Reserve diagnostic output, patient-level risk stratification, medication advice, individualized dietary prescriptions or algorithmic weight changes for a separately controlled project with professional assessment.
