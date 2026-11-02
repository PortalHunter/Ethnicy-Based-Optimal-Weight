# Contributing and review policy

1. Create a short-lived branch from `main` (e.g. `feature/improve-ancestry-labels`). Keep `main` deployable.
2. Describe the intended change and attach **Given / When / Then** acceptance criteria. Include numeric boundary and invalid-input cases.
3. Add failing tests **before** changing behavior; retain unit, browser and citation tests.
4. For health-related or ancestry-related logic: record claim ID, source URL/DOI, year/version, jurisdiction, population, outcome, evidence tier, and whether the change is guideline-backed or experimental.
5. Distinguish race, self-reported heritage, country of origin and genetically verified variants. Do not infer an individual's genotype, disease status or medication response from ancestry.
6. Open a pull request and request at least one human reviewer. For changes in clinical claims also request qualified clinical-source review.
7. CI must pass, including **executed** browser tests; never waive or silently skip those tests.
8. Merge and tag only with explicit maintainer authorization and a reviewed release note/rollback path.

**High-impact rule:** Changes to BMI thresholds, ancestral grouping, diabetes buffer/caps, clinical conditions, nutrition advice or PGx claims are blocked from release until reviewed by a relevant domain specialist and approved by the maintainer.

**Privacy:** Never submit genuine personal health/ancestry/genomic data in issues, browser tests or logs. Use synthetic fixtures. Do not introduce telemetry, server submissions, storage or genetics uploads without privacy/legal review.

## Pull-request acceptance criteria examples

- **Age:** Given an age under 18 or over 120, when the user calculates, then the calculator shows a clear error and no weight range.
- **Units:** Given the same measurement expressed in valid imperial and metric units, when converted, then output is equivalent within a tested tolerance.
- **Empty required:** Given missing height, weight, wrist or age, when submitted, then the error identifies the field and no stale result is shown.
- **Mixed ancestry:** Given percentages summing to 90, when submitted, then the tool rejects the mix. Given an unselected mixed-background identity, it must not **infer identity** from percentages in future implementations.
- **Pregnancy:** Given pregnancy or breastfeeding checked with otherwise valid values, when calculated, then no weight-range recommendation appears.

Known baseline behavior and research critiques are separate; do not change baseline tests silently to bless a new clinical rule.

