# Ancestry-Adjusted Optimal Body Weight & Nutrition Calculator

Open-source **educational** calculator for adult weight ranges, body frame, optional waist measurements, and evidence-linked nutritional and population health information. **Not medical advice or a validated individual risk prediction.** A clinician's advice, diagnoses, relevant laboratory results, individual genetic findings and family history take precedence.

## Use the calculator

[Open the standalone HTML calculator](optimal_body_weight_calculator-9.html) in a web browser. The page performs its calculations locally and does not submit ancestry or health information to a server. If opening a downloaded copy, keep JavaScript enabled.

## Population and heritage selection — Phase 1

The form starts with a broad region/heritage category and optionally offers one of **62 specific population subgroups across 11 families**. Mixed ancestry (up to three selections with self-reported percentages) remains supported. A separate optional family/founder-heritage field adds information about selected inherited conditions. Every subgroup inherits its established broad BMI classification; **none of the 62 options creates a new weight equation, risk score or BMI cutoff**. The pre-existing percentage-blending option is explicitly marked experimental and is not clinical guidance.

The research notes are linked to their original sources in the result and compiled in the [Phase 1 evidence and methods register](research/PHASE1_POPULATION_PROFILES.md). Exploratory subgroups are included for inclusive self-description and deliberately do not trigger unsubstantiated health guidance. Ancestry/ethnicity does not determine genotype, and the app never excludes people from screening on that basis.

## Research and methods

- [Phase 1: population taxonomy, evidence levels, safeguards and sources](research/PHASE1_POPULATION_PROFILES.md)
- Calculation methods, legacy references and limitations are documented directly in the calculator's **Limitations and how this calculator works** section and numbered **References** displayed with results.
- [Population regression tests](tests/population-phase1.test.mjs) — run with `node tests/population-phase1.test.mjs`.

## Validation status and scope

The calculator is a research/educational implementation, **not clinically validated**. Weight ranges combine established BMI action points with older ideal-body-weight formulas and body-frame estimates in a project-specific way. These algorithms have not been prospectively validated for individual outcomes. Some ethnic BMI action points differ between WHO/NICE/ADA authorities; the interface identifies them. Detailed population findings are educational only until clinically validated.

No medications are prescribed; dietary advice should be individualized. Do not use the calculator for children, pregnancy, or personalized medical weight targets established by a clinician. Review the full on-page limitations.
