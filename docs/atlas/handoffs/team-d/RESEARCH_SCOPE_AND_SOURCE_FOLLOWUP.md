# Current scope and source verification workflow — 18 November 2026

The user selected: **“Use the original graph scope: verify each stated claim, retain unknowns and conflicts, and move full legal audits to follow-up.”** The user also instructed that a useful but incompletely verified source should receive its own issue, stating exactly what to verify and where.

This decision supersedes older instructions that make completion of all34 legal packets, exact cross-team agency IDs, every historical office/region gap, or independent legal review a prerequisite for the original institutional graph handoff. It does not change any verified data numerator, historical record, clinical conclusion or legal conclusion. Earlier checkpoints and full-audit metrics remain historical and inspectable.

The original brief is `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` at prompt commit `29d3b1f38cfee796520ed866c795302926040159`. Its deliverable is a sourced, time-aware institutional relationship graph. It expressly permits pending relationships. All six WHO regions, typed/date-qualified relationships, explicit negative/boundary examples, M49 status, provenance, overlap inventory and all seven condition keys remain in scope.

## Source-level operating standard

1. State only the proposition the inspected source actually supports, with issuer, date, scope and access mode. A first-party press report can support that the issuer reported a signing; it does not prove uninspected executed terms. An indexed passage remains indexed evidence.
2. If useful evidence has a material verification gap, retain its qualification and create one issue per canonical source URL. Deduplicate existing issues. Several affected rows share the same issue; a comparison source may be named in the verification steps.
3. Each issue identifies the source and provenance ID, exact uncertain assertion, documents/sections/dates to inspect, official verification locations, update destination and resolution criteria. A documented unavailable or ambiguous result is a valid disposition; it never becomes factual verification or absence.
4. Do not restart broad source discovery merely because an issue remains open. Reopen for a new original record, material source change or a relevant response. Do not send correspondence without separate authorization.
5. Use scope-appropriate findings in this research handoff. Reserve full statutory/delegation/signature audits for claims that require those legal conclusions. Keep country-level clinical adoption and scientific appraisal separate. Full legal packets remain0/34; the required change is workflow, not an inflated closure count.

[Source issue index](data/source_verification_issues_2026-11-18.csv) maps21 unique sources to21 verified open GitHub issues, #76–#96. The index is reusable by Teams A–E; other teams' prompts/files are not modified. [Research dispositions](data/research_disposition_2026-11-18.csv) classify all236 original backlog records under this decision while preserving zero original strict full closures.

## Original-scope acceptance audit

| Requirement | Current evidence | Disposition |
|---|---|---|
| All six WHO regional offices and meaningful status/date distinctions | Six regional nodes/office edges;205 verified current assignments,44 retained unknowns; Indonesia dated transfer and pending US governance retained | Covered with explicit unknowns |
| At least10 documented international relationships, with time semantics | 47 nodes,619 typed sourced edges; all619 have time fields and explanatory notes;270 have explicit valid-from/to fields | Met; qualified edges retain their labels |
| No geography-to-membership or automatic clinical-adoption inference | Separate UN/ISO and WHO fields;44 assignments remain unverified; membership, cooperation, observer and office/service edge types remain separate; condition rows are not clinically appraised | Boundaries preserved; no new factual promotion |
| At least10 negative/boundary examples | 34 numbered cases in BOUNDARY_CASES.md, plus later documented examples | Met; no invented current office-absence finding |
| Reproducible, provenance-stamped, understandable graph |423 unique source URLs; graph/source joins and typed ontology checked; access-limited and reported-only evidence labelled with source-specific follow-up | Research handoff met with declared source limitations; independent full-source review remains separate |
| Institutional initiatives for all seven condition keys |20 links across diabetes,hypertension,high_chol,gout,lactose,celiac,hemochromatosis | Met as institutional links; clinical appraisal not claimed |
| Durable handoff and geographic/overlap datasets | Existing draftPR70, TeamD-only files, CSV provenance,249 candidate matrix including248 UN areas and one separately documented ISO exception, ontology/method/status/gap files | Present; no public-site or calculator changes |

[Measured audit](original_scope_audit_2026-11-18.json) records counts and qualifications. Of619 edges,594 retain their existing VERIFIED_PRIMARY label;21 retain OFFICIAL_PAHO_INDEXED, one PENDING_VERIFICATION and three issuer-reported/press-notice-only labels. This audit does not pretend that all619 sources were newly reauthenticated or independently reviewed. Every source behind those25 qualified edges has a source-specific issue. All12 network questions retain source/date/class/identity qualifications; source follow-ups cover uncertain assertions rather than blocking the entire graph.

Remaining work is explicitly follow-up:44 unverified regional assignments;144 historical April-office evidence gaps despite105 positives;34 complete national legal packets; unresolved network dates/counts/identities; and two independent full-source/semantic review gates. These are not silently closed. No merge, PR readiness change, clinical/legal certification or public deployment is authorized.
