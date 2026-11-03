# Ancestry-Adjusted Body Weight & Nutrition Calculator

An **educational, research-stage** static HTML calculator. **Not** a diagnostic tool, prescribing system, treatment target generator, or clinically validated personal-risk score. The source code, published evidence, developer-proposed heuristics and research hypotheses must be distinguished.

## Live website

**[Open the Ancestry Health Calculator](https://portalhunter.github.io/Ethnicy-Based-Optimal-Weight/)**

Direct website URL: https://portalhunter.github.io/Ethnicy-Based-Optimal-Weight/

## Explore the project

- **Current website source:** [index.html](index.html) — redesigned interface, separate feet/inches inputs, results directly below the form, and expanded ancestry selection.
- **Phase 1 reference calculator:** [optimal_body_weight_calculator-9.html](optimal_body_weight_calculator-9.html) — preserved weight equations, 62 optional population subgroups, and cited health notes.
- **Public scientific bibliography:** [research-preview.html](research-preview.html).
- **Research bibliography and 17-document inventory:** [docs/research/SOURCE_INDEX.md](docs/research/SOURCE_INDEX.md).
- **Research archive and evidence matrices:** [docs/research](docs/research) — population health and anthropometry, hereditary conditions and nutrition, and pharmacogenetics.
- **Evidence integration and safeguards:** [docs/EVIDENCE_INTEGRATION.md](docs/EVIDENCE_INTEGRATION.md).
- **Clinical review requirements:** [docs/process/CLINICAL_REVIEW.md](docs/process/CLINICAL_REVIEW.md).
- **Privacy:** [PRIVACY.md](PRIVACY.md).

The live website combines the redesigned layout with the detailed ancestry selector and source-linked educational notes. After form submission, the estimated weight range appears directly below the inputs. The established mathematical core is preserved; subgroup information does not introduce new individual weight thresholds. Experimental ancestry blending and diabetes-related assumptions remain explicitly labeled.

## Phase 1 population selection and research profiles

The calculator supports 11 broad population categories and 62 optional subgroups. The [Phase 1 population profiles](docs/research/PHASE1_POPULATION_PROFILES.md) document the source register, evidence grading, safeguards, and limitations. Mixed ancestry and an independent founder-heritage selection are supported. Subgroup research notes do not alter the weight formulas.

Run `node tests/population-phase1.test.mjs` to check numerical equivalence across all 62 subgroups.

## Local preview

Use the live GitHub Pages link above, or open the HTML source directly in a modern browser for local development (no server required). For automated tests: install Node.js 22+, then run `npm ci --prefix tests` and `npm test --prefix tests`. Browser-based tests require an installed Chrome/Chromium browser; specify `CHROME_PATH=/path/to/chrome` if it is not in a standard location. CI **must ensure Chrome is installed** rather than silently skipping the browser suite.

## Inputs and limits

The original calculator accepts adult ages 18–120; sex-specific historical body-frame formulas use male/female inputs; height, weight, wrist, and age are required; elbow and waist are optional; height in inches/cm, weight lb/kg, body lengths inches/cm. Mixed ancestry percentages may sum to 100 within 1 percentage point for rounding. Inputs for pregnancy/breastfeeding suppress weight-range output. These are **existing software assumptions**, not clinical eligibility guidelines.

The calculator includes experimental ancestry-weighted thresholds and a diabetes-related BMI buffer/cap. These assumptions are **not independently clinically validated**. See [docs/EVIDENCE_INTEGRATION.md](docs/EVIDENCE_INTEGRATION.md) before using or revising them. A BMI screening threshold, weight estimate, clinical diagnosis and personalized target are **different concepts**.

## Repository workflow

Use short-lived `feature/...` branches from `main`, reviewed pull requests and passing CI. The primary source branch is `main`, and the public GitHub Pages site is deployed from `gh-pages`. Medical or ancestry-related claims require a primary-source review and human authorization before publication. See [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/process/REPOSITORY_PROTECTION.md](docs/process/REPOSITORY_PROTECTION.md).

## Versioning, release and rollback

Use SemVer tags `vMAJOR.MINOR.PATCH` for reviewed releases. Do not create a release tag or publish until CI, scientific review and explicit human approval are complete. To roll back, redeploy the last approved tag; avoid force-pushing or deleting history. Current files are exploratory and **not automatically released**.

## Licensing and security

Code currently uses MIT (see [LICENSE](LICENSE)). MIT controls redistribution and warranty terms, **not** clinical safety, patent clearance, security or user-data protection. License changes require a separate legal/maintainer decision and may not revoke prior grants. See [SECURITY.md](SECURITY.md) and [docs/process/LICENSE_REVIEW.md](docs/process/LICENSE_REVIEW.md).

## Evidence

Each original study/report has distinct methods, populations and limitations. The 17 research documents are available under `docs/research/evidence/ and docs/research/process-notes/`. This repository has not independently verified every source citation or guideline update; claim promotion to user-facing clinical output is gated by [docs/process/CLINICAL_REVIEW.md](docs/process/CLINICAL_REVIEW.md).

