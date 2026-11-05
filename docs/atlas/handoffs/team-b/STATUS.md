# Team B status — 2026-11-05

**INCOMPLETE — batch26 validated against committed Team B structural rules in orchestration JavaScript; original acceptance criteria remain open.**

| Metric | Count |
|---|---:|
| M49 areas / area-condition cells | 248 / 1736 |
| Organization identities / domiciled areas | 306 / 195 |
| Resource relationships / source-positive cells | 186 / 178 |
| Cells lacking linked source | 1558 |
| Provenance / targeted search logs | 506 / 286 |
| Community-specific identities / cross-border service edges | 4 / 2 |
| Approved clinical claims | 0 |

Positive cells by condition: diabetes 65; hypertension 17; high_chol 21; gout 17; lactose 14; celiac 27; hemochromatosis 17. These record published-source discovery, **not** verified nationwide condition coverage or clinically appraised recommendations. 53 areas still lack a locally domiciled verified organization; cross-border service reach is separate from domicile.

Batch26: Liechtenstein's private nonprofit university (UFL) with German original research listings for diabetes and GAPP blood-pressure work; Swiss diabetesGL-GR-FL regional society separately domiciled M49 756, expressly serving Liechtenstein 438, with Vaduz counselling location. Two normalized cross-border edges prevent false 438 domicile. Six targeted search records include unresolved Comoros ACLD, Solomon Islands historical/inactive-at-survey society and Gibraltar Diabetes Gibraltar name/official-site leads. Zero speculative local organization credit for those three areas. Old caveats retained in GAPS.

Data and validation restrictions: 10 CSVs including new cross_border_services.csv; unchanged retained UN 248-code snapshot, not freshly verified source; committed validate.mjs core+overview plus cross-border checks reproduced in orchestration JS, 0 errors; Node CLI **not** run. Full live URL crawl, legal/WHO/UN direct-export comparison, per-study population appraisal, and clinical review **not** done. All resource release states research_lead_only; no website/main edit or PR merge. See CHECKPOINT.json and CONTINUE.md for immutable SHA/readback status and resumable work.


Batch26 independently read-back substantive SHA: **0761c580b39b3c62502f7c8408c9572e39e80912**. All18 handoff files matched Git tree blob SHAs;10 CSVs passed independent core+overview+cross-border checks with zero errors; Node CLI not run. Following checkpoint metadata commit does not alter CSV contents.


**Batch27 quality check:** Official Journal de Monaco authorizes former diabetes society in1996 and documents dissolution effective27March2023, despite surviving commercial directory listing. Logged3 provenance and3 search rows, no active Monaco identity or published clinical source. Totals remain 306/195 identities/areas and186/178 resource/positive cells; provenance **509**, search **289**,53 domiciled-area gaps,1558 unlinked source cells. Narrow check does not prove no newer Monaco associations. Research incomplete.
