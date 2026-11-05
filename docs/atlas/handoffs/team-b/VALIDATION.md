# Research Team B — structural validation record

Run date: **2026-11-04**. Scope: committed CSV files in `docs/atlas/handoffs/team-b/` after three research batches. **Result: 0 CSV structural failures.** This report does not certify research quality, live link permanence, legal mandates, geographic completeness of organization discovery, clinical applicability or permission to reuse copyrighted publications.

## Assertions actually checked

| Rule | Result |
|---|---|
| Seven exact condition keys `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis` | Pass |
| M49 area-code row count and uniqueness | 248, pass |
| M49×condition row count and unique composite key | 1,736, pass |
| Organization ID uniqueness and known area references | 60, pass |
| Publication organization foreign keys and seven-condition constraints | 60, pass |
| Publication title, original-language field, URL, relationship and review-state present | Pass |
| Organization HTTPS official and source URLs, language, checked date, identity state populated | Pass (syntactic only) |
| Condition area cells with source evidence agree with source records | 57 positive, pass |
| All remaining coverage rows labeled `not_yet_researched` | 1,679, pass |
| Separate subnational/Indigenous source entities | 3, pass |
| Provenance index count | 121, recorded |
| Clinical approval | 0 |

## Important checks not claimed as passed

- Current UNSD machine-readable M49 export comparison; the local 248-code roster is **pending** a reproducible independent diff.
- Real-time HTTP success of **all** distinct source URLs, redirected canonical destinations, inactive or archived endpoints. Verified from official website pages during research, but full crawl not performed.
- Country/subnational jurisdiction-specific guideline legal validity, recency/supersession, conflict of interest, authorship and copyright licensing.
- Clinical study sampling and risk-of-bias appraisal; no ethnicity- or genetic-risk inferencing is approved.
- Review of medical positions by licensed clinicians or human maintainers.

## Reproducible developer checks

Parse each CSV according to RFC 4180; enforce expected header fields from `README.md`; ensure each organization ID unique; verify `area_m49` exists in area index; `condition_organizations.org_id` and `publication_context.org_id` reference a real organization; join each condition row to its source country's M49 code and confirm the corresponding coverage cell records positive discovery. Count coverage `not_yet_researched` explicitly. Flag any discontinued organization or duplicate consortium publication before presenting current sources. Do not conflate external host, contributor, author, funder and clinical regulator.

## 2026-11-05 — Batch 4 structural check (local in-memory, pre-commit)

- Checks executed: M49 count (248), seven-condition matrix count and unique composite keys (1,736), organization ID uniqueness (71), publication-to-organization ID and condition joins (67), HTTPS publication URLs, positive-vs-unresearched cell count (64/1672), publication-context row count (67).
- Result: **0 observed structural check failures**; counts and indexed foreign keys passed. This does **not** establish complete M49 code-set equivalence, external link accessibility, legal identity, resource authenticity or guideline medical validity.
- Pending: full UNSD numeric roster diff, actual live HTTP crawl, source-governance and publication copyright review; Ghana co-authorship/copyright, Barbados page accuracy, Tanzania/Zanzibar remit, historical Netherlands NDF status re-audit.