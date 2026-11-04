#!/usr/bin/env python3
"""Verify and optionally stage the four original Grok diet handoffs.

No network calls; no medical interpretation; no change to the weight calculator.
Usage:
  python scripts/import-grok-diet-handoffs.py /path/to/Ancestry_Health_Grok_Reviewed_Research_Package_2026-11-04.zip
  python scripts/import-grok-diet-handoffs.py /path/to/package.zip --stage

The original 16 handoffs and four normalized CSVs are now committed in
docs/research/handoffs/grok-2026-11-04/source-files/. Running without --stage
checks an external package read-only. --stage will refuse to overwrite any
existing archived file, preventing accidental loss of the raw originals.
GitHub CI separately verifies every committed source byte against SHA-256.
"""
from __future__ import annotations
import argparse
import csv
import hashlib
import io
import json
from pathlib import Path
from zipfile import ZipFile, BadZipFile

ROOT = Path(__file__).resolve().parent.parent
EVIDENCE = ROOT / "docs/research/handoffs/grok-2026-11-04"
WIDTHS = {
    "normalized/KETO_SOURCES.csv": (16, 5),
    "normalized/DIET_PATTERN_TRIAL_MATRIX.csv": (22, 8),
    "normalized/LAB_TO_DIET_CLAIM_MAP.csv": (22, 6),
    "normalized/CONTRADICTION_REGISTER.csv": (24, 7),
}
RAW_BAD_ROWS = {
    "A/KETO_SOURCES.csv": (16, [16, 16, 15, 16, 16]),
    "C/LAB_TO_DIET_CLAIM_MAP.csv": (22, [28, 22, 22, 22, 22, 22]),
}


def verify_package(path: Path) -> dict[str, bytes]:
    manifest = json.loads((EVIDENCE / "SOURCE_CHECKSUMS.json").read_text(encoding="utf-8"))
    assert len(manifest["raw_files"]) == 16
    assert len(manifest["normalized_csvs"]) == 4
    accepted: dict[str, bytes] = {}
    with ZipFile(path) as archive:
        names = archive.namelist()
        required = {
            x["relative_path"]
            for x in manifest["raw_files"] + manifest["normalized_csvs"]
        }
        if len(names) != len(set(names)):
            raise ValueError("Duplicate ZIP paths are not allowed")
        missing = required - set(names)
        if missing:
            raise ValueError("Missing expected ZIP files: " + ", ".join(sorted(missing)))
        unexpected = set(names) - required - {"REVIEW_MANIFEST.json", "HANDOFF_INTEGRATION_REVIEW.md"}
        if unexpected:
            raise ValueError("Unexpected ZIP contents: " + ", ".join(sorted(unexpected)))
        for entry in manifest["raw_files"] + manifest["normalized_csvs"]:
            relative = entry["relative_path"]
            info = archive.getinfo(relative)
            if info.is_dir() or info.file_size > 300_000:
                raise ValueError("Unsafe ZIP member: " + relative)
            payload = archive.read(relative)
            if len(payload) != entry["bytes"]:
                raise ValueError("File length mismatch: " + relative)
            actual_sha = hashlib.sha256(payload).hexdigest()
            if actual_sha != entry["sha256"]:
                raise ValueError("SHA-256 mismatch: " + relative)
            accepted[relative] = payload
        for relative, (width, rows) in WIDTHS.items():
            parsed = list(csv.reader(io.StringIO(accepted[relative].decode("utf-8-sig"))))
            if len(parsed[0]) != width or len(parsed) != rows + 1:
                raise ValueError("Curated CSV header or row count mismatch: " + relative)
            if any(len(row) != width for row in parsed):
                raise ValueError("Curated CSV alignment error: " + relative)
        # Source CSV defects are intentionally preserved in originals.
        for relative, (width, expected_row_widths) in RAW_BAD_ROWS.items():
            parsed = list(csv.reader(io.StringIO(accepted[relative].decode("utf-8-sig"))))
            if len(parsed[0]) != width or [len(r) for r in parsed[1:]] != expected_row_widths:
                raise ValueError("Expected original CSV defect not found: " + relative)
    return accepted


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("package", type=Path)
    ap.add_argument("--stage", action="store_true",
                    help="Write verified original and normalized files to local repo staging")
    args = ap.parse_args()
    if not args.package.is_file():
        ap.error("Package file does not exist")
    try:
        accepted = verify_package(args.package)
    except (OSError, ValueError, BadZipFile, UnicodeError) as exc:
        ap.error(str(exc))
    print(f"Verified {len(accepted)} files: 16 unchanged originals, four normalized CSVs")
    if args.stage:
        # Fail without writing when files already exist; prevent accidental overwrite.
        targets = {rel: EVIDENCE / "source-files" / rel for rel in accepted}
        exists = [str(p) for p in targets.values() if p.exists()]
        if exists:
            ap.error("Refusing to overwrite staged files: " + ", ".join(exists))
        for relative, out in targets.items():
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_bytes(accepted[relative])
        print(f"Staged original research under {EVIDENCE / 'source-files'}")
        print("Review and commit staged sources explicitly. Do not mark them verified clinical advice.")


if __name__ == "__main__":
    main()
