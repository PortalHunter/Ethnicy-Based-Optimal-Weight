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


if __name__ == "__main__":
    unittest.main()
