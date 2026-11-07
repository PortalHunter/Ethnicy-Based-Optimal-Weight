"""Regression checks for explicit multi-area scope and unresolved audit integrity.

Run: python -m unittest discover -s docs/atlas/handoffs/team-a -p 'test_*.py'
These are structural rejection tests, not source/mandate certification.
"""
import contextlib
import csv
import io
from pathlib import Path
import shutil
import tempfile
import unittest

import validate


class CensusScopeValidation(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.original = validate.ROOT
        (self.root / "data").mkdir()
        for path in self.original.glob("*.csv"):
            shutil.copy2(path, self.root / path.name)
        for path in (self.original / "data").glob("*.csv"):
            shutil.copy2(path, self.root / "data" / path.name)
        validate.ROOT = self.root

    def tearDown(self):
        validate.ROOT = self.original
        self.temp.cleanup()

    def rewrite(self, file, change):
        path = self.root / file
        with path.open(newline="", encoding="utf-8") as handle:
            reader = csv.DictReader(handle)
            fields, rows = reader.fieldnames, list(reader)
        rows = change(rows)
        with path.open("w", newline="", encoding="utf-8") as handle:
            writer = csv.DictWriter(handle, fieldnames=fields)
            writer.writeheader()
            writer.writerows(rows)

    def verify(self):
        with contextlib.redirect_stdout(io.StringIO()):
            validate.verify()

    def test_current_directory_passes(self):
        self.verify()

    def test_cross_area_link_without_scope_fails(self):
        self.rewrite("data/authority_area_scope.csv", lambda rows: [
            r for r in rows if r["area_m49"] != "652"])
        with self.assertRaisesRegex(AssertionError, "Cross-area body ID mismatch"):
            self.verify()

    def test_scope_missing_provenance_fails(self):
        def corrupt(rows):
            rows[0]["source_ids"] = "NOT-A-SOURCE;B36-312-01"
            return rows
        self.rewrite("data/authority_area_scope.csv", corrupt)
        with self.assertRaisesRegex(AssertionError, "explicit provenance"):
            self.verify()

    def test_duplicate_scope_fails(self):
        self.rewrite("data/authority_area_scope.csv", lambda rows: rows + [rows[0]])
        with self.assertRaisesRegex(AssertionError, "Duplicate authority-area scope"):
            self.verify()

    def test_silent_unresolved_omission_fails(self):
        self.rewrite("data/unresolved_area_audit.csv", lambda rows: rows[1:])
        with self.assertRaisesRegex(AssertionError, "Unresolved audit count mismatch"):
            self.verify()


    def test_legal_ledger_missing_area_fails(self):
        self.rewrite("data/legal_verification_ledger.csv", lambda rows: rows[:-1])
        with self.assertRaisesRegex(AssertionError, "Legal ledger must contain"):
            self.verify()

    def test_premature_legal_completion_fails(self):
        def corrupt(rows):
            rows[0]["legal_review_stage"] = "RESEARCH_COMPLETE_PENDING_EXPERT_REVIEW"
            rows[0]["legal_research_acceptance"] = "RESEARCH_COMPLETE_PENDING_EXPERT_REVIEW"
            rows[0]["last_legal_review_utc"] = "2026-11-06"
            rows[0]["verified_legal_source_ids"] = "UNSD-M49-20261104"
            return rows
        self.rewrite("data/legal_verification_ledger.csv", corrupt)
        with self.assertRaisesRegex(AssertionError, "Premature legal research completion evidence"):
            self.verify()

    def test_research_queue_wrong_lane_fails(self):
        def corrupt(rows):
            rows[0]["work_lane"] = "UNRESOLVED_AREA" if rows[0]["work_lane"] == "PROVISIONAL_LEGAL_REVIEW" else "PROVISIONAL_LEGAL_REVIEW"
            return rows
        self.rewrite("data/research_queue.csv", corrupt)
        with self.assertRaisesRegex(AssertionError, "Research queue lane mismatch"):
            self.verify()

    def test_blocked_queue_needs_reason(self):
        def corrupt(rows):
            rows[0]["queue_state"] = "BLOCKED_NEW_SOURCE_REQUIRED"
            rows[0]["blocked_reason"] = ""
            return rows
        self.rewrite("data/research_queue.csv", corrupt)
        with self.assertRaisesRegex(AssertionError, "Blocked queue item missing source barrier"):
            self.verify()


    def test_historical_repealed_body_not_current_link(self):
        def corrupt(rows):
            for row in rows:
                if row["m49_code"] == "020":
                    row["authority_record_ids"] += ";gov-020-003"
            return rows
        self.rewrite("data/countries.csv", corrupt)
        with self.assertRaisesRegex(AssertionError, "Historical body linked as current authority"):
            self.verify()


if __name__ == "__main__":
    unittest.main()
