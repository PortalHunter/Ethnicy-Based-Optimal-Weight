"""Synthetic-only contract tests. No network or native dataset mutation."""
import copy
import unittest

from harness import check_packet, check_readback, check_result, eligible, load_state


class ContractTest(unittest.TestCase):
    def setUp(self):
        self.config = load_state()["teams"]["A"]
        self.live = self.config["sha"]
        self.key = "A-01:synthetic"
        self.path = self.config["root"] + "runs/A-01--synthetic.json"
        self.packet = dict(version=1, task="A-01", case="synthetic", expected_sha=self.live,
                           queue_path=self.config["queues"][1], row_key="synthetic",
                           evidence_required=True, paths=[self.path])
        self.result = dict(version=1, key=self.key, input_sha=self.live, disposition="blocked",
                           evidence=[], blocker="Synthetic original unavailable", reopen="Receive original",
                           validation=["Synthetic only"], paths=[self.path])
        self.receipt = dict(version=1, key=self.key, commit="1" * 40, parent=self.live,
                            paths=[self.path], blob_shas={self.path: "2" * 40},
                            pr_state="open/draft/unmerged")

    def check(self, **overrides):
        args = dict(packet=self.packet, config=self.config, live=self.live,
                    completed=set(), occupied=set())
        args.update(overrides)
        return check_packet(**args)

    def test_dry_run(self):
        self.assertEqual(eligible(self.config, set())[0]["id"], "A-01")
        self.assertEqual(self.check(), self.key)
        check_result(self.result, self.key, self.packet)
        check_readback(self.receipt, self.result)

    def test_stale_sha(self):
        with self.assertRaisesRegex(ValueError, "stale"):
            self.check(live="0" * 40)

    def test_malformed(self):
        with self.assertRaisesRegex(ValueError, "malformed"):
            self.check(packet={})

    def test_dependency(self):
        config = copy.deepcopy(self.config)
        config["queue"][0]["depends_on"] = ["A-02"]
        with self.assertRaisesRegex(ValueError, "dependency"):
            self.check(config=config)
        self.assertEqual(self.check(config=config, completed={"A-02"}), self.key)

    def test_duplicate(self):
        with self.assertRaisesRegex(ValueError, "duplicate"):
            self.check(occupied={self.key})

    def test_foreign_paths(self):
        for path in ("index.html", "docs/atlas/handoffs/team-b/data/a.csv",
                     self.config["root"] + "../team-b/a.csv"):
            with self.subTest(path=path), self.assertRaisesRegex(ValueError, "cross-team"):
                self.check(packet={**self.packet, "paths": [self.path, path]})

    def test_evidence_missing(self):
        with self.assertRaisesRegex(ValueError, "missing original"):
            check_result({**self.result, "disposition": "verified_scoped"}, self.key, self.packet)

    def test_indexed_evidence(self):
        evidence = dict(id="synthetic", url="https://example.invalid", locator="1", issuer="synthetic",
                        checked="synthetic", original=True, access="indexed", qualification="indexed only")
        with self.assertRaisesRegex(ValueError, "missing original"):
            check_result({**self.result, "disposition": "verified_scoped", "evidence": [evidence]},
                         self.key, self.packet)

    def test_unprovisioned(self):
        with self.assertRaisesRegex(ValueError, "unprovisioned"):
            self.check(config=load_state()["teams"]["E"])

    def test_blocker_required(self):
        with self.assertRaisesRegex(ValueError, "reopening"):
            check_result({**self.result, "reopen": None}, self.key, self.packet)

    def test_wrong_receipt(self):
        for changes in (dict(parent="3" * 40), dict(blob_shas={}), dict(pr_state="open")):
            with self.subTest(changes=changes), self.assertRaises(ValueError):
                check_readback({**self.receipt, **changes}, self.result)

    def test_native_queue_boundary(self):
        with self.assertRaisesRegex(ValueError, "queue reference"):
            self.check(packet={**self.packet, "queue_path": self.config["queues"][0]})


if __name__ == "__main__":
    unittest.main()
