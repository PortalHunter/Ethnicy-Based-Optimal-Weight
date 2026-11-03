# Ancestry-Adjusted Body Weight & Nutrition Calculator

An **educational, research-stage** static HTML calculator. **Not** a diagnostic tool, prescribing system, treatment target generator, or clinically validated personal-risk score. The source code, published evidence, developer-proposed heuristics and research hypotheses must be distinguished.

## Start here

- **Original implementation (unchanged):** [optimal_body_weight_calculator-9.html](optimal_body_weight_calculator-9.html)
- **New, results-below-form UI preview (experimental):** [optimal_body_weight_calculator-11-ui-preview.html](optimal_body_weight_calculator-11-ui-preview.html) — two fields for feet/inches, results immediately below the form, compact detail panels, no upward jump; math and reference registry unchanged.
- **Previous research UI preview (archived):** [optimal_body_weight_calculator-10-research-preview.html](optimal_body_weight_calculator-10-research-preview.html)
- **Public-facing scientific bibliography:** [research-preview.html](research-preview.html) — published sources only; no internal handoffs or development commentary
- **Full research bibliography and 17-document inventory:** [docs/research/SOURCE_INDEX.md](docs/research/SOURCE_INDEX.md)
- **Team 1–3 original handoffs and evidence matrices:** [docs/research/source](docs/research/source)
- **Safety and integration decisions:** [docs/EVIDENCE_INTEGRATION.md](docs/EVIDENCE_INTEGRATION.md)
- **Clinical review requirements:** [docs/CLINICAL_REVIEW.md](docs/CLINICAL_REVIEW.md)
- **Privacy:** [PRIVACY.md](PRIVACY.md)

The v11 layout is an interface-only preview. Once the user submits the form, the weight-range estimate appears directly below it. The original calculator and its source citation keys remain unchanged; no new evidence or medical logic has been applied to the math. The original program's experimental ancestry and health-condition assumptions remain explicitly labeled as such.

## Local preview

Open the HTML file directly in a modern browser (no server required). For automated tests: install Node.js 22+, then run `npm ci --prefix tests` and `npm test --prefix tests`. Browser-based tests require an installed Chrome/Chromium browser; specify `CHROME_PATH=/path/to/chrome` if it is not in a standard location. CI **must ensure Chrome is installed** rather than silently skipping the browser suite.

## Inputs and limits

The original calculator accepts adult ages 18–120; sex-specific historical body-frame formulas use male/female inputs; height, weight, wrist, and age are required; elbow and waist are optional; height in inches/cm, weight lb/kg, body lengths inches/cm. Mixed ancestry percentages may sum to 100 within 1 percentage point for rounding. Inputs for pregnancy/breastfeeding suppress weight-range output. These are **existing software assumptions**, not clinical eligibility guidelines.

The original includes experimental ancestry-weighted thresholds and a diabetes-related BMI buffer/cap. Research teams have identified these as **not independently clinically validated**. See [docs/EVIDENCE_INTEGRATION.md](docs/EVIDENCE_INTEGRATION.md) before using or revising them. A BMI screening threshold, weight estimate, clinical diagnosis and personalized target are **different concepts**.

## Repository workflow

Use short-lived `feature/...` branches from `main`, reviewed pull requests and passing CI; do not push directly to `main`. The research integration branch is **not production**. Medical or ancestry-related claims require a primary-source review and human authorization before publication. See [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/REPOSITORY_PROTECTION.md](docs/REPOSITORY_PROTECTION.md).

## Versioning, release and rollback

Use SemVer tags `vMAJOR.MINOR.PATCH` for reviewed releases. Do not create a release tag or publish until CI, scientific review and explicit human approval are complete. To roll back, redeploy the last approved tag; avoid force-pushing or deleting history. Current files are exploratory and **not automatically released**.

## Licensing and security

Code currently uses MIT (see [LICENSE](LICENSE)). MIT controls redistribution and warranty terms, **not** clinical safety, patent clearance, security or user-data protection. License changes require a separate legal/maintainer decision and may not revoke prior grants. See [SECURITY.md](SECURITY.md) and [docs/LICENSE_REVIEW.md](docs/LICENSE_REVIEW.md).

## Evidence

Each original study/report has distinct methods, populations and limitations. All 17 unmodified research submissions are under `docs/research/source/`. This repository has not independently verified every source citation or guideline update; claim promotion to user-facing clinical output is gated by [docs/CLINICAL_REVIEW.md](docs/CLINICAL_REVIEW.md).

