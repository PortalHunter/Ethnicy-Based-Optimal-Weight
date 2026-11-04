# Ancestry Health: body weight range calculator

A free, browser-only calculator that estimates a healthy weight range from your height, frame size, age, and ancestry, with notes on health conditions.
It runs entirely in your browser. Nothing you type is sent anywhere.

An optional **Lab Results & Nutrition Guidance** section lets you enter values from your own laboratory report, including units and the lab's high/low/critical flag when supplied. It offers source-linked explanations, practical questions for your clinician and general food-pattern examples where supported. Reported eGFR and urine ACR receive kidney-context notes only; unsupported tests receive no invented interpretation. **Lab entries never change the weight estimate or make diagnoses.** The optional section also contains a **separate, expandable diet-research comparison** (Mediterranean, DASH, Portfolio, lower-carb, keto, plant-forward and time-restricted eating), including study findings, limitations and safety cautions. Source-linked comparisons may be shown for selected reported high lab flags **only when no safety suppression is active**; they are prompts for discussion with a doctor or dietitian, never an individually prescribed eating plan. The evidence scope and limitations are documented in [Lab Education](docs/LAB_EDUCATION.md) and the [diet-pattern review](docs/research/DIET_PATTERN_EVIDENCE_2026-11-04.md).

**[Open the calculator](https://portalhunter.github.io/Ethnicy-Based-Optimal-Weight/)**

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
- [PRIVACY.md](PRIVACY.md), [SECURITY.md](SECURITY.md), [CONTRIBUTING.md](CONTRIBUTING.md), [LICENSE](LICENSE) (MIT).

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
