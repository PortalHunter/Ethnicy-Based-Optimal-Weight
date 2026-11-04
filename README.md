# Ancestry Health: body weight range calculator

A free, browser-only calculator that estimates a healthy weight range from your height, frame size, age, and ancestry, with notes on health conditions.
It runs entirely in your browser. Nothing you type is sent anywhere.

An optional **Lab Results & Nutrition Guidance** section lets you enter values from your own laboratory report, including units and the lab's high/low/critical flag when supplied. It offers source-linked explanations, practical questions for your clinician and general food-pattern examples where supported. Reported eGFR and urine ACR receive kidney-context notes only; unsupported tests receive no invented interpretation. **Lab entries never change the weight estimate or make diagnoses.** The optional section also contains a **separate, expandable diet-research comparison** (Mediterranean, DASH, Portfolio, lower-carb, keto, plant-forward and time-restricted eating), including study findings, limitations and safety cautions. Source-linked comparisons may be shown for selected reported high lab flags **only when no safety suppression is active**; they are prompts for discussion with a doctor or dietitian, never an individually prescribed eating plan. The evidence scope and limitations are documented in [Lab Education](docs/LAB_EDUCATION.md) and the [diet-pattern review](docs/research/DIET_PATTERN_EVIDENCE_2026-11-04.md).

**[Open the calculator](https://portalhunter.github.io/Ethnicy-Based-Optimal-Weight/)**

## Contribute research, corrections, or ideas

**Ancestry Health welcomes scientific and community scrutiny.** Clinicians, registered dietitians, researchers, pharmacists, geneticists, statisticians, software developers, students, and the public can submit relevant studies, point out limitations, challenge existing claims, improve accessibility, or propose additional educational modules. No credentials are required to submit a question or correction.

- **[Submit a scientific study or guideline](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/new?template=01-scientific-evidence.md)** — including contrary or negative findings.
- **[Question or correct a health claim](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/new?template=02-evidence-correction.md)** — evidence-based criticism is especially welcome.
- **[Propose a new module](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/new?template=03-module-proposal.md)** — extensions are welcome when they support the educational mission.
- **[Share general or accessibility feedback](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/new?template=04-general-feedback.md)** — help make the project clearer and more inclusive.
- **[Browse and discuss open issues](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues)** or contribute code/documentation through a pull request.

See the [scientific contribution and review policy](docs/SCIENTIFIC_CONTRIBUTIONS.md) and [contributor guide](CONTRIBUTING.md). Submissions are evaluated for evidence quality, uncertainty, safety, scope and copyright, not accepted automatically. Research contributions do not authorize clinical advice, medication decisions or unvalidated changes to weight calculations. **Please do not post real patient records or genomic data in public issues.**

## How it works

- **Your ancestry sets the healthy BMI range.** Some groups get the lower cut-offs recommended by WHO and NICE. With mixed ancestry, the cut-offs follow the background you identify with.
- **Your frame size narrows it down.** Wrist size (and elbow, if you enter it) adjusts four classic ideal-weight formulas, and the suggested range is where those formulas overlap the healthy range.
- **Conditions add context.** Diabetes risk can lower the top of the range for groups where the evidence supports it, and an optional waist measurement adds the ADA 2026 waist check.

**This is an educational estimate, not medical advice.** It isn't clinically validated, and it doesn't replace a target set by your own doctor. It doesn't give a range for under-18s or during pregnancy or breastfeeding.

## What's in this repository

- [`index.html`](index.html) and [`preview-assets/`](preview-assets/): the live calculator.
- [`optimal_body_weight_calculator-9.html`](optimal_body_weight_calculator-9.html): the classic single-file calculator, which uses the same calculation engine.
- [`research-preview.html`](research-preview.html): the public list of sources.
- [`docs/`](docs/README.md): how the calculator works, the research behind it, and maintainer notes.
- [`tests/`](tests/) and [`scripts/`](scripts/): automated checks.
- [PRIVACY.md](PRIVACY.md), [SECURITY.md](SECURITY.md), [CONTRIBUTING.md](CONTRIBUTING.md), [LICENSE](LICENSE) (MIT software) and [LICENSE-CONTENT.md](LICENSE-CONTENT.md) (CC BY 4.0 for eligible original educational content).

## Licensing

Ancestry Health uses **two clearly scoped licenses**:

- **Software — [MIT License](LICENSE):** the calculator's HTML, CSS, JavaScript, calculation engine, tests and software files remain available under the existing MIT license.
- **Original educational and research prose — [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE-CONTENT.md):** an **additional licensing option** for original research summaries, explanations and documentation where the authors own or have permission to license the content. See the notice for precise scope and [CC BY 4.0 terms](https://creativecommons.org/licenses/by/4.0/).

CC BY 4.0 permits reuse, adaptations and commercial use with appropriate attribution, a license link and indication of changes. Existing MIT permissions are not withdrawn. **External journal articles, publisher figures, third-party media and other material not owned by this project are not relicensed.** Licensing educational content does not mean it is verified medical guidance.

## Running the tests

You need Node.js 22 or newer and Chrome or Chromium.

```
npm ci --prefix tests
npm test --prefix tests
node tests/population-phase1.test.mjs
node scripts/check-evidence.mjs
node scripts/check-links.mjs
```

If Chrome isn't in a standard location, set `CHROME_PATH=/path/to/chrome`. The same checks run automatically on every push to `main` and on pull requests.
