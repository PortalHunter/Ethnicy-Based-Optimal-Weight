# Team B — standalone Batch 93 research checkpoint · 2026-11-07

> **RESEARCH INCOMPLETE · DRAFT OPEN UNMERGED PR #71 · 0 APPROVED CLINICAL CLAIMS.** Branch `research/atlas-team-b-20261104` → `main`. Only Team B material may change; no website, calculators, main, other teams, clinical/rights or Indigenous-governance approval. Restart with [RUNBOOK.md](RUNBOOK.md), [QUALITY_AND_COMPLETION.md](QUALITY_AND_COMPLETION.md), [QUEUE.md](QUEUE.md), [CONTINUE.md](CONTINUE.md), [CHECKPOINT.json](CHECKPOINT.json), the ten canonical CSVs, supplemental quality/reconciliation ledgers and unchanged `validate.mjs`.

## Immutable data snapshot and checks

- Data commit [`c261fdfbdc48a5049e7560b6ad182829791af017`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/c261fdfbdc48a5049e7560b6ad182829791af017), parent [`3cb0eaae19950bae88ebbdd06c1c8f53e958f304`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/3cb0eaae19950bae88ebbdd06c1c8f53e958f304); root Git tree `0ab44774273ee3bff72c6b13cf4e69c63bce909a` with **160 nontruncated entries**. Exactly one research data file changed: `data/research_quality_audit.csv`; 12 additive source-audit rows, no changed or removed historical source records.
- At immutable data SHA, individually refetched ten original CSVs, `validate.mjs`, `data/research_quality_audit.csv` and `data/metadata_only_reconciliation.csv`: **13/13** blob SHA-to-tree matches. Independently checked RFC-style CSV quoted fields/widths, 248×7 unique matrix, roster, 423 exact condition/context joins, all `research_lead_only`, issuer-country enums, 1134 provenance entries, 656 search logs and coverage joins, 46 source-audit joins and uniqueness, historical superseded depth rows, seven reconciliations, 10 subnational/community and eight cross-border rows: **0 structural errors**.
- **The actual `node docs/atlas/handoffs/team-b/validate.mjs` CLI was NOT RUN.** The available container has Node v22.16.0 but `git ls-remote` failed with `Could not resolve host: github.com`; exact-file temporary Node reconstruction not completed. Independent tool-side JS and successful GitHub Actions are not a Node receipt. On data commit the GitHub Actions `Population Phase 1 regression tests` and `Calculator CI` both completed/success. Combined-status endpoint returned zero statuses. None of these tests certifies evidence accuracy, licensing, edition status, medical safety or legal adoption.

## Before → after, this run only

| Measure | Batch 92 | Batch 93 | Δ |
|---|---:|---:|---:|
| Independent/professional organization identities | 496 | **496** | 0 |
| Verified local M49 domiciles / 248 | 227 | **227** | 0 |
| Raw source-positive condition-area cells / 1736 | 382 | **382** | 0 |
| Searched/unlinked | 175 | **175** | 0 |
| Untouched | 1179 | **1179** | 0 |
| Exact context URLs | 423 | **423** | 0 |
| Provenance/search logs | 1134 / 656 | **1134 / 656** | 0 / 0 |
| Individually source-quality classified | 34 | **46** | **+12** |
| Unreviewed original source contexts | 389 | **377** | **−12** |
| S1/S2/H/M/U | 7/15/0/11/1 | **8/19/0/18/1** | +1/+4/0/+7/0 |
| Depth audits D1/D2/D3 (historical rows) | 3/4/0 | **3/4/0** | 0 |
| Original issuer-country unknowns | 5 | **5** | 0 |
| Clinical claim approvals | 0 | **0** | 0 |

The **382 raw links are discovery leads**, not 382 quality-qualified publications. M audit decisions are about the **exact original indexed URL**; a different substantive linked document is a distinct record, never a silent replacement. S1/S2 are research inventory categories, not permissions or medically approved guidance.

## Exact original-URL research audits — quality tier and caution

| Area / condition / org | Tier | Inspected original URL | Evidence conclusion and next verification |
|---|---|---|---|
| Philippines 608 gout · B-PH-PRA | **S1** | https://www.rheumatologyph.org/_files/ugd/02c6de_81b9b111d65f4a538a85ed37f1f1e44a.pdf | Society-labelled substantial **2009** original guideline inside PPD Compendium 11th edition, older not a current adoption claim. Verify original committee, current edition and reuse license; urate ≠ clinical gout. |
| South Africa 710 gout · B-ZA-SARAA | **S2** | https://saraa.co.za/wp-content/uploads/2020/10/Gout-Pamphlet.pdf | Named author Dr Anita Lai, **May 2020** updated original patient-education PDF, not an original trial or adopted guideline; separately review clinical accuracy, images and rights. |
| New Zealand 554 celiac · B-NZ-CNZ | **S2** | https://coeliac.org.nz/diagnosis-information/ | Detailed society first-party educational diagnosis pathway; historical linked Starship regional pediatric remit **Auckland/Waitemata/Counties Manukau**, no verified current nationwide adoption; HLA predisposition not diagnosis. |
| Türkiye 792 celiac · B-TR-CLY | **S2** | https://colyak.org.tr/colyak-nedir/ | Substantive association Turkish explanatory page; describes coeliac as an 'allergy/sensitivity,' a clinically questionable characterization **not endorsed**; byline/date and rights unverified. |
| Singapore 702 lactose · B-SG-NFDD | **S2** | https://nfdd.sg/understanding-the-digestive-systems/lifestyle-preventative-health-and-mediations/lactose-intolerance/ | Direct condition-specific first-party education; ancestry/descent frequency generalizations lack an identified study population denominator; genotype, malabsorption and symptoms are distinct. |
| Sweden 752 celiac · B-SE-CELIAKI | **M** | https://www.celiaki.se/celiaki-i-skolan/ | School brochure catalogue, not the actual independent substantive brochure; examine linked PDF separately. |
| Denmark 208 celiac · B-DK-DCF | **M** | https://coeliaki.dk/informationsmateriale/ | Brochure download/shop index, not contents of an inspected original brochure; separately named **2026 Sundhedsstyrelsen** guide is government-authored, not this nongovernment society's authorship. |
| UK 826 gout · B-GB-BSR | **M** | https://www.rheumatology.org.uk/guidelines | General BSR guideline catalogue links **2017** gout guidance; the exact index is not the original substantive manuscript. |
| Canada 124 hemochromatosis · B-CA-CHS | **M** | https://www.toomuchiron.ca/hemochromatosis/resources/research-publications/ | Bibliography of externally authored provincial/international guidelines, not society-authored original medical article. |
| US 840 celiac · B-US-CDF | **M** | https://celiac.org/nutrition-education/ | Registration/announcement page for nutrition education classes, not underlying lesson text/transcript. |
| Switzerland 756 lactose · B-CH-MDL | **M** | https://www.magendarmliga.ch/krankheiten | General condition menu with one-line lactose teaser; follow exact linked standalone lactose article. |
| Lithuania 440 hemochromatosis · B-LT-LGD | **M** | https://gastroenterologija.lt/pasiruosimai-tyrimams/feritinas-ir-gelezies-tyrimai/ | Generic ferritin/iron testing education mentioning suspected haemochromatosis once; not hereditary HH-specific study/education. High ferritin is not proof of hereditary HH. |

## Remaining acceptance gaps and priority sequence

1. **377 / 423 original URLs remain unaudited**; recheck exact original S1/S2/H eligibility before counting qualified substantive publications. Seven new **M** cases require separately inspected original PDFs/articles; do not mutate original links/cell states based on a catalogue alone. Original Peru gout 2025 scheduled lecture and Morocco SMEDIAN diabetes video catalogue remain M-only without substantive original verified (original seven-case reconciliation in ledger remains).
2. **1179 untouched**, **175 searched-unlinked** (of these **171** lack an active D2 quality audit). Rotate low-covered **haemochromatosis 24, lactose 34, gout 41, celiac 50** source-positive streams; use official local-language condition documents with independently verifiable issuer. D1 single navigation is not D2 bounded evidence, and negative checks never prove nationwide absence.
3. **21/248** M49 areas have no independently verified locally domiciled eligible group; remote/restricted cases may stay evidence-limited. Do not count foreign chapters/foreign service scope as native domicile. Five original issuer-country imprints still unknown: Panama HEARTS; Portuguese WGO lactose translation; Portuguese ESPGHAN coeliac translation; Chad OpenAlex/JHC; South Sudan PAMJ. Require original colophon not author/participant or host-country inference.
4. Preserve anti-generalization **14 examples**, **10 community/subnational organizations**, **8 cross-border edges**, all lineage/source caveats and original research without erasure. Indigenous governance, legal incorporation, copyrights, publication recency and clinical claims remain external review gates (issue #27).

### 20-slot discovery progress and difference

```text
Local M49 identity    ██████████████████·· 227/248 = 91.53% (21 gaps); 227 → 227 Δ 0
Area×condition (1736) ████░░··············
   █  linked raw research leads         382/1736 = 22.00%; 382 → 382 Δ 0
   ░  searched-unlinked                 175/1736 = 10.08%; 175 → 175 Δ 0
   ·  untouched                        1179/1736 = 67.91%; 1179 → 1179 Δ 0
Original source audit ██·················· 46/423 = 10.87%; 34 → 46 Δ +12
```

**Restart prompt (repeat exactly):** Continue Research Team B in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71. On branch "research/atlas-team-b-20261104", read "docs/atlas/handoffs/team-b/RUNBOOK.md", "QUEUE.md", and the latest "CONTINUE.md". Follow the queue and safeguards; research, commit, validate, read back, and checkpoint Team B-only changes. Keep PR #71 draft/unmerged; approve no clinical claims. End with quantified run deltas, remaining gaps, and the required labeled progress bar graphs. Repeat this prompt.
