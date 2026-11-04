# EQUITY_AND_TRANSPORTABILITY.md
## Grok Team C — Ancestry, equity, assay variants, and limits of generalizability

**Date verified:** 2026-11-04

## 1. Distinctions required
- Physiological measurements (actual blood values) vs sample/assay quality (hemolysis, delayed processing, method interference).
- Lab-specific reference flags vs proven disease (single values do not establish diagnosis).
- Genetic assay variants (hemoglobin variants affecting A1c; LPA gene variants affecting Lp(a)) vs self-identified ancestry (social category, not a biological proxy for muscle mass, diet response, or risk).
- Measured Lp(a) preferred over ancestry-estimated or genetically inferred values. Population medians differ (e.g., higher average Lp(a) in some African ancestry groups), but individual measurement is required; proportional risk appears broadly similar across groups in available data.
- Race-free eGFR (CKD-EPI 2021 without race coefficient) is the current standard. Prior race coefficients are not used.

## 2. HbA1c and hemoglobin-variant interference
Hemoglobin variants and red-cell disorders are more prevalent in certain ancestral groups (e.g., HbS in African, Caribbean, Mediterranean, Middle Eastern ancestry; HbE in Southeast Asian). Assay interference is method-dependent and can produce clinically discordant results. ADA guidance: use plasma glucose criteria when interference is suspected or variants known. App must not assume A1c validity from self-identified ancestry alone.

## 3. eGFR and race
NKF-ASN 2021 task force and subsequent guidelines recommend race-free equations. Applying race coefficients previously delayed care in some groups. Reported eGFR must be interpreted with awareness that creatinine is influenced by muscle mass, diet, and medications independent of ancestry.

## 4. Lp(a): measured vs estimated
Ancestral differences in median Lp(a) exist (roughly 2- to 4-fold in some datasets), driven largely by LPA genetic variation. Risk thresholds for clinical action are not currently ancestry-specific in major guidelines. Estimation from ancestry or polygenic scores is not a substitute for measurement. App must not generate or display ancestry-based Lp(a) estimates.

## 5. Transportability of diet evidence
- PREDIMED (Mediterranean-style): Primarily Spanish adults at high CVD risk. Cultural and food-environment adaptation required for other populations. Randomization deviations led to retraction and republication; results remained directionally consistent but certainty is moderate.
- Carbohydrate restriction: Mostly studied in high-income settings with type 2 diabetes and overweight/obesity. Limited data in diverse ancestries, children, pregnancy, advanced CKD, or with SGLT2 inhibitors.
- KDIGO plant-based and sodium guidance: Global intent but evidence base includes mixed study populations; cultural food preferences and food access must be considered. Protein targets require supervision to avoid malnutrition.
- Hypertriglyceridemia lifestyle advice: Broadly applicable but confounded by alcohol, diabetes control, and medications; very high TG is a medical urgency regardless of ancestry.

## 6. Equity considerations and logged disagreements
- Evidence gaps: Under-representation of many ancestral groups, lower-income settings, and people with multimorbidity in primary diet trials.
- Potential harms of over-generalization: Assuming a pattern (e.g., Mediterranean) is equally feasible or beneficial without local food systems, or that lab flags imply the same dietary cause across groups.
- Disagreement log: Some reviewers question residual bias in PREDIMED after corrections; others accept the republished analysis as supportive of the pattern. Disposition remains educational with explicit caveats rather than definitive personal claim. Contrary observational findings on other patterns are preserved and not erased.
- Self-identified ancestry is useful for equity monitoring and cultural tailoring of educational materials but must never be used for genetic inference, risk estimation, or automatic diet selection.

## 7. App-safe framing
All statements must include: “This is educational information from research and guidelines. It is not a diagnosis, prescription, or personal recommendation. Discuss any lab results or diet changes with your clinician, especially if you have other health conditions or take medications.”

No source record authorizes medical device claims, medication changes, dietary prescriptions, genetic inference, lab-determined ideal weights, or automatic personal outcomes.
