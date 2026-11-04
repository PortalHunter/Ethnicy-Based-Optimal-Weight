# Contributing and review policy

**Everyone is welcome to contribute.** The project invites physicians, researchers, registered dietitians, pharmacists, geneticists, statisticians, health educators, software contributors, students, and interested members of the public. You can contribute by challenging a claim, submitting research, suggesting a module, improving accessibility, or proposing code. Scientific criticism is welcome even when it questions existing methods; professional credentials are not required to comment.

**Starting with an issue is enough:** [submit evidence](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/new?template=01-scientific-evidence.md), [request a correction](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/new?template=02-evidence-correction.md), [propose a new module](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/new?template=03-module-proposal.md), or [share accessibility/general feedback](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/new?template=04-general-feedback.md). For scholarly source requirements, review outcomes, conflict-of-interest disclosure and copyright boundaries, see [Scientific Contributions](docs/SCIENTIFIC_CONTRIBUTIONS.md).

The steps below apply to **code or content changes proposed for merge**, not to people merely reporting a problem or asking a question.

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

## Licensing and research-content contributions

The repository's software is [MIT-licensed](LICENSE). Eligible original educational prose and research summaries are **also** available under the [CC BY 4.0 content notice](LICENSE-CONTENT.md). When submitting original educational writing for inclusion under that notice, confirm you have the rights to contribute it under both applicable licenses. If you are contributing with other copyright holders, identify them and obtain any permissions needed; do not assume the repository can relicense their work.

Do not add externally published figures, full-text journal papers, proprietary illustrations, or substantial third-party text without appropriate rights and a clear source-specific license. Citations and hyperlinks to external scientific works are not a grant of CC BY rights in those works. Preserve source attribution, research uncertainty and correction notices.

## Pull-request acceptance criteria examples

- **Age:** Given an age under 18 or over 120, when the user calculates, then the calculator shows a clear error and no weight range.
- **Units:** Given the same measurement expressed in valid imperial and metric units, when converted, then output is equivalent within a tested tolerance.
- **Empty required:** Given missing height, weight, wrist or age, when submitted, then the error identifies the field and no stale result is shown.
- **Mixed ancestry:** Given percentages summing to 90, when submitted, then the tool rejects the mix. Given an unselected mixed-background identity, it must not **infer identity** from percentages in future implementations.
- **Pregnancy:** Given pregnancy or breastfeeding checked with otherwise valid values, when calculated, then no weight-range recommendation appears.

Known baseline behavior and research critiques are separate; do not change baseline tests silently to bless a new clinical rule.

