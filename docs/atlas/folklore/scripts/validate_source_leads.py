#!/usr/bin/env python3
"""Validate folklore link-only lead manifests. Standard library only.

Run:
  python3 docs/atlas/folklore/scripts/validate_source_leads.py \
    docs/atlas/folklore/intake/source-leads-2026-11-18.csv

This checks manifest structure, not source truth, rights, or clinical validity.
"""
import csv
import sys
from collections import Counter
from pathlib import Path
from urllib.parse import urlsplit

REQUIRED = {
    "lead_id", "motif_group_id", "region_as_cited", "title_or_catalog_name",
    "source_kind", "source_url", "potential_health_signal_paraphrase",
    "variant_and_dependency_caveat", "intake_status", "relationship_status",
    "rights_status", "collected_at"
}
ALLOWED_SOURCE_KINDS = {
    "primary_archive_page", "historical_publication", "secondary_synthesis",
    "scholarly_article", "portal_or_collection", "oral_audio", "community_record", "other"
}
ALLOWED_STATUSES = {
    "lead_only", "source_verified", "rights_reviewed", "feature_extracted",
    "hypothesis_proposed", "expert_reviewed",
    "eligible_for_separate_clinical_evidence_review", "quarantined", "restricted"
}
ALLOWED_RELATIONSHIPS = {
    "unknown", "independent_telling", "same_work_edition", "translation",
    "copy", "adaptation", "cross_cultural_analogue", "disputed"
}
ALLOWED_RIGHTS = {
    "unknown", "link_only", "public_domain_verified", "licensed_for_specific_use",
    "permission_required", "restricted", "do_not_archive"
}


def check(path: Path):
    errors = []
    with path.open(newline="", encoding="utf-8") as handle:
        reader = csv.DictReader(handle)
        columns = set(reader.fieldnames or ())
        missing = REQUIRED - columns
        if missing:
            errors.append(f"Missing columns: {sorted(missing)}")
        rows = list(reader)
    seen_ids = set()
    for index, row in enumerate(rows, start=2):
        def require(name):
            return (row.get(name) or "").strip()
        for field in REQUIRED:
            if not require(field):
                errors.append(f"line {index}: empty {field}")
        lead_id = require("lead_id")
        if lead_id in seen_ids:
            errors.append(f"line {index}: duplicated lead_id {lead_id}")
        seen_ids.add(lead_id)
        if require("source_kind") not in ALLOWED_SOURCE_KINDS:
            errors.append(f"line {index}: unknown source_kind")
        if require("intake_status") not in ALLOWED_STATUSES:
            errors.append(f"line {index}: unknown intake_status")
        if require("relationship_status") not in ALLOWED_RELATIONSHIPS:
            errors.append(f"line {index}: unknown relationship_status")
        if require("rights_status") not in ALLOWED_RIGHTS:
            errors.append(f"line {index}: unknown rights_status")
        parsed = urlsplit(require("source_url"))
        if parsed.scheme != "https" or not parsed.netloc:
            errors.append(f"line {index}: invalid https source URL")
    print(f"{path}: {len(rows)} leads, {len(set(r.get('source_url') for r in rows))} distinct URLs")
    print("Motif groups:", dict(Counter(r.get("motif_group_id") for r in rows)))
    for error in errors:
        print("ERROR:", error, file=sys.stderr)
    return 1 if errors else 0


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("usage: validate_source_leads.py FILE.csv", file=sys.stderr)
        raise SystemExit(2)
    raise SystemExit(check(Path(sys.argv[1])))
