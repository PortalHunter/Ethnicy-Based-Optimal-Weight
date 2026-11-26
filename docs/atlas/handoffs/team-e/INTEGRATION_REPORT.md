# Integration and maintainer review

## Findings

The official M49 English table field comparison passed for all 248 areas, with no added or missing keys or discrepancies in ISO, names and UN geography. The four incoming datasets represent unassigned Antarctic region fields differently. The intake reconciles those explicit null forms and preserves ISO candidate 158 outside the M49 universe.

Seven confirmed institutional crosswalks join Team D to pinned A or B identities at their cited scope. The D listings for Danish Medicines Agency, BfArM, Paul-Ehrlich-Institut and the Luxembourg ministry retain separately sourced remit questions. The other three are society or affiliated-organization records, including InaSH. Exact URL or DOI identity reduces 673 publication and claim references to 605 resource records. Context rows retain their own author/host/issuer relationships and original source keys.

The WHO reassignment requires two dates. The official SEARO history gives 23 May 2025 for the operational change. WHA78.25 gives 27 May for the plenary event. The integrated edge keeps the inherited operational interval and qualifies legal-effective-date semantics. Algeria remains WHO AFRO and UN Northern Africa. PAHO and WHO AMRO retain both graph roles with one organizational display when aggregating. EMA's scientific evaluation, Commission authorization and national regulatory work are distinct.

The clinical ledger contains 35 claims across seven keys. The 41 proposed selector links retain the original mapping status. All case issues #28–#62 were open and had no comments at the review date. Bibliographic review records the sampled population only where the source establishes it. Conflicting or overbroad assertions retain limitations and source traceability. No claim, population association or clinical action was cleared for display.

## Review and rollback

1. Review the isolated draft diff and compare `inputs.json` to the verified A–D handoff heads. Validate each CSV and inspect the selected high-risk cases in `data/provenance_review.csv`. Recheck the original authority before refining any contested record.
2. Run the pinned rebuild and validator. Materialize an optional disposable SQLite copy. Check consumer joins on M49, select only reviewed research-index fields, and preserve unknowns, redacted links and edition restrictions. Keep provisional and clinical tables out of the public payload.
3. Stage any UI and map work in a separate implementation PR after the data review. Use the accessible map and table spec with keyboard and screen-reader checks. Request maintainer decision before repository integration. Domain reviewers must clear the separate clinical, legal, rights and community claims they own.
4. Keep the previously approved input version and immutable manifest addressable. If a candidate release fails, point the new consumer build back to the previous reviewed dataset or disable the optional map feature, then review the affected source assertion. If merged later, revert only the reviewed handoff commit path through a follow-up PR. Existing calculators and clinical content do not require changes for this rollback.
