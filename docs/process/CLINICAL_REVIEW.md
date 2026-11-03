# Clinical-evidence review and release gate

No calculator result is currently clinically validated by these research files. A reviewed citation is **not** the same as evidence of individual prediction accuracy, utility or safe deployment.

For every user-facing high-impact claim or algorithm change record:

- `claim_id`, domain owner (ANC, NUT, PGX), version and reviewer.
- Exact source, publication year, DOI/URL, guideline version, correction/erratum status, data extraction date.
- Study design, population and eligibility, outcome/endpoints, absolute versus relative estimates, limitations, certainty, effect modifiers, and transportability.
- Intended use: informational context, guideline-backed population screening, research hypothesis or individual clinical support (last requires separate clinical/regulatory program).
- Fallback when data are missing, how uncertainty is shown, informed-consent/privacy review, accessibility review, bias/fairness review, numeric boundary tests and prospective validation plan.
- Explicit decision: approved as **educational research**, withheld, or approved for a separately validated clinical pathway.

**Cross-team contracts:** ANC never infers genotype or alters NUT/PGX advice; NUT never modifies BMI/frame thresholds on its own; PGX never suggests drug selection/dose from ancestry. Conflicts must be recorded and jointly resolved before release. Keep provenance in all three domains.

**Current no-go features:** BMI thresholds blended by ancestry percentage as clinical guidance; personal BMI ceilings based on ethnicity/diabetes family history; ancestry-to-genotype inference; condition diagnosis from a checkbox; direct-to-user drug recommendations or dosing; genetic uploads.

Minimum tests: invalid/blank values, units, mixed ancestry semantics, sex/age cases, pregnancy/breastfeeding, citations, and all known numeric baseline samples. Do not update a regression expectation just to make a scientifically significant change pass.

**Release:** Explicit human sign-off with changelog, risk assessment, and rollback tag; the research branch is **not** a clinical release.

