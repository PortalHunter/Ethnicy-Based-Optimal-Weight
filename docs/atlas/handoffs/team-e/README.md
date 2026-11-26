# Global Medical Authority Atlas · Team E

This directory contains the integrated research database and QA handoff for the four inputs pinned in [inputs.json](inputs.json). The [data inventory](data/input_inventory.json) records exact source paths, schemas, row counts and SHA-256 fingerprints. Upstream acceptance and validation are summarized in [the A–D readiness manifest](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/64#issuecomment-7202523641). Team E is tracked in [draft PR #150](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/150).

## Reproduce from the repository root

Use Python 3.10+ and Node. A fresh clone needs the Git objects for the input branches. If a branch has advanced, Git can fetch the immutable commit listed in `inputs.json`.

```sh
git fetch origin main \
  research/atlas-team-a-20261104 research/atlas-team-b-20261104 \
  research/atlas-team-c-20261104-local-journals-1851 research/atlas-team-d-20261104 \
  feature/regional-diabetes-research-2026-11-04 \
  research/global-authority-atlas-batch-a-2026-11-04 \
  research/atlas-five-team-handoff-prompts-2026-11-04
PYTHONDONTWRITEBYTECODE=1 python3 docs/atlas/handoffs/team-e/build.py
PYTHONDONTWRITEBYTECODE=1 python3 docs/atlas/handoffs/team-e/validate.py
```

Rebuild reads immutable Git objects and checked-in Team E review facts. It makes no network requests. The input branch names help acquire objects. The SHAs determine every read. The build has no production dependency and can run in a detached checkout.

Start with [areas](data/areas.csv), [institutions](data/institutions.csv), [relationships](data/relationships.csv), [publications](data/publications.csv), [publication contexts](data/publication_contexts.csv), [candidate claims](data/candidate_claims.csv), and [provenance](PROVENANCE.csv). The map and table use [area coverage](data/map_coverage.csv) and [condition availability](data/condition_availability.csv). See the [schema](SCHEMA.md), [QA results](QA_RESULTS.md), [known exceptions](GAPS.md), and [integration and rollback](INTEGRATION_REPORT.md).

For local queries, run `python3 docs/atlas/handoffs/team-e/sqlite_export.py /tmp/atlas-research.sqlite` with a fresh destination. The disposable copy preserves text identifiers and adds indexes plus the `map_condition_coverage` view. CSV remains the canonical versioned format.
