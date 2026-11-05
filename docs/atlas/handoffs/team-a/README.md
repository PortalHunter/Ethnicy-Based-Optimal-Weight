# Team A — Government and statutory health-authority atlas

Assignment: [Team A prompt](../../research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md)
Branch: `research/atlas-team-a-20261104`. Draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68

## Files
- `data/countries.csv`: 248 UN M49 countries/areas, including territories; 5 official authority identifications, 243 unresolved.
- `data/government_health_bodies.csv`: separate government ministry/department rows with own original-language names, English glosses, competent jurisdiction, official mandate URL, source language and review state.
- `data/authority_relationships.csv`: parent-child legal/delegated relationships only after official evidence; no relationship guessed.
- `data/country_coverage.csv`: by-area coverage status, sources and issue flags.
- `PROVENANCE.csv`, `GAPS.md`, `STATUS.md`, `CHANGELOG.md`: full research continuation handoff.

## Source hierarchy and limitations
The official [UNSD M49 country-or-area overview](https://unstats.un.org/unsd/methodology/m49/overview/) is canonical. Its 2026-11-04 English table has 248 area rows, including Antarctica with no UN region. The initial geography source for this staging file was a [secondary M49-based CSV mirror](https://github.com/datasets/country-codes/blob/main/data/country-codes.csv), filtered to remove code 158 absent from the current official UNSD table. The **UN count matches; individual row values have NOT yet been exhaustively checked against UNSD**. Names and regions therefore require final direct official comparison, with changes documented.

An `OFFICIAL_AUTHORITY_IDENTIFIED` row means an official national government mandate/organizational page was reviewed, **not** that all law, devolved public-health responsibilities, disease surveillance, regulators or biomedical councils are mapped. `UNKNOWN_REVIEW_NEEDED` means unresearched/unresolved, not institution absent. `status=M49_AREA_GOVERNANCE_NOT_REVIEWED` prevents guessing constitutional status. The `source_url` of an unknown area points to the UN geographic basis, not a ministry.

## Rules for continuing research
Verify ministries in original government language using direct local government pages. For disputed governance, change of name and delegation, require at least two independent authoritative checks including statute or official gazette. Identify national ministry, public-health institute, medicine regulator, health data unit and governmental biomedical council as distinct bodies. Do not confuse WHO field offices with statutory national authorities. Never conflate M49 geographical location, ancestry, Indigenous identity and genotype. Do not change medical claims or formulas. Commit each new ~20–40 verified areas to this same branch and update `PROVENANCE.csv`, `STATUS.md`, `GAPS.md` and coverage ledger. Do not merge without maintainer review.
