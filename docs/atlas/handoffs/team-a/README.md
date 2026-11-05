# Team A — Governmental health authority census

Branch `research/atlas-team-a-20261104`; draft PR https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68. Snapshot 2026-11-05; research staging only, not clinical.

Committed handoff at `docs/atlas/handoffs/team-a/`:

- `data/countries.csv`: **248** M49 country/area skeletons, **54** identified governmental health authorities and **194** explicit unknowns.
- `data/government_health_bodies.csv`: **81** separate ministries/agencies/regulators/public-health and lab programmes.
- `data/authority_relationships.csv`: **19** official-source-supported intra-government connections (no guessed cross-area delegation).
- `data/country_coverage.csv`: **248** area status records.
- `PROVENANCE.csv`: **78** source issuer/language/date/scope/limitations records.
- `M49_RECONCILIATION_20261105.csv`: **21** individual direct UN M49 table checks, correction to name 384 Côte d’Ivoire; **227** remain.
- `STATUS.md`, `GAPS.md`, `CHANGELOG.md`, `QA_REPORT.md`, `validate.py`: current research state, gaps, history, QA, reproducible offline validator.

Official UN M49: https://unstats.un.org/unsd/methodology/m49/overview/. The initial 248-area geography skeleton used a community transcription: equal count is not official verification of each row. Require official original-language government mandate sources. Distinguish provisional authority from legal verification, and require two sources for disputed, delegated and changed portfolios. No inferred parent-area M49 links; avoid WHO field-office substitutions. Geography is not ancestry, ethnicity, genotype or sovereignty.

Resume by retrieving latest existing branch HEAD, reading all handoff files and PR, researching batches of about 20–40 M49 identities, updating all datasets and provenance, performing official UN row checks, executing `python docs/atlas/handoffs/team-a/validate.py` when environment permits, committing to the same branch/PR and leaving full recurring prompt. Never modify main or clinical application, nor merge draft PR without authorization.
