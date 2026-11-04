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

## Updated integration status — November 4, 2026

After this draft review was written, a **narrow educational laboratory-result prototype** was merged into `main` as [PR #14](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/14). Its source-linked statements, safeguards and privacy limitations are documented separately in [docs/LAB_EDUCATION.md](../../LAB_EDUCATION.md). That prototype does **not** validate the full Team 4 research ledger or turn the eight draft reports into approved personalized recommendations. The preceding report's pre-implementation language is historical; this paragraph supersedes it.

## Next evidence gate

- Keep [Issue #12](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/12) as the single progress tracker for the educational lab MVP, its outstanding research review, and later full-panel import.
- Independently verify all 42 draft LAB claims against exact source sections and corrections; distinguish the limited claims already used in production from research-only or withheld proposals.
- Reconcile Team 4 with ANC/NUT/PGX evidence; resolve contradictory assumptions before publishing additional lab interpretations.
- Test unit/assay/context caveats, safety suppression, accessibility and fairness with synthetic cases. Consider human clinical appraisal especially before expanding higher-risk personalized outputs.
- The original calculator weight engine remains unchanged. Ancestry/diabetes weight-target limitations remain tracked under [Issue #2](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/2).
- **Research PR #13 is still unmerged pending maintainer review.** The free educational prototype is not represented as formally clinically certified.

## Targeted 42-claim audit update — November 4, 2026

The previous spot-check stage has progressed to an **individual disposition for every one of the 42 LAB records**, recorded in [04_LAB_CLAIM_AUDIT_2026-11-04.md](../evidence/04_LAB_CLAIM_AUDIT_2026-11-04.md). The review was limited to available primary guideline statements, original study abstracts and standards; this is **not** a formal systematic review, full risk-of-bias adjudication or clinical authorization.

- **26 `SUPPORTED_SCOPE`:** a narrow statement was independently corroborated by a relevant primary source; it cannot automatically be turned into an individual diagnosis or numeric treatment target.
- **8 `QUALIFIED`:** part of the evidence is relevant, but a precise citation, clinical scope or inferential step still needs verification.
- **7 `SOURCE_GAP`:** mismatch or insufficiently specific support, including LAB-029 (thyroid testing improperly grounded in ADA nutrition) and LAB-030 (gout/urate inference improperly grounded in KDIGO CKD); withhold corresponding automated interpretations.
- **1 `WITHHELD`:** LAB-040 (no justified lab-triggered personal ideal-weight equation); maintain prohibition on numeric adjustment.

**Verified version-sensitive finding:** the June 22, 2026 ACC/AHA erratum corrects the ApoB-related triglyceride example from >200 to ≥150 mg/dL and two figure references; the September 8, 2026 erratum corrects medication table doses/frequencies, notably a colesevelam unit error. The exact corrections are recorded in the LAB claim audit. The calculator does not provide medication dosing. The [four-team map](../FOUR_TEAM_EVIDENCE_MAP.md) and [136-claim CSV inventory](../UNIFIED_CLAIM_INDEX_2026-11-04.csv) now include the 28 ANC, 30 NUT, 36 PGX and 42 LAB IDs, without falsely claiming the first three teams were re-audited in this pass.

**Outstanding:** source corrections and exact article/paragraph locators for qualified/gap records, amendment-by-amendment lipid check, independent qualified clinical appraisal before higher-consequence personalization, and audit of the earlier ANC/NUT/PGX claims in their own future passes. All eight imported Team 4 research originals remain unchanged; the live calculator and patient-facing scripts remain untouched by this research PR.
