"""Synthetic checkout, race reconciliation and check-in tests."""
import unittest

from checkout import apply
from harness import load_state


class CheckoutTest(unittest.TestCase):
    def setUp(self):
        self.state = load_state()
        self.empty = {"version": 1, "runs": {}}
        self.a = self.reserve("A")
        self.b = self.reserve("B")

    def reserve(self, team):
        config = self.state["teams"][team]
        task = config["queue"][0]
        return dict(action="reserve", run_id=team, team=team, live_sha=config["sha"],
                    packet=dict(version=1, task=task["id"], case="synthetic",
                                expected_sha=config["sha"], queue_path=task["queues"][0],
                                row_key="synthetic", evidence_required=True,
                                paths=[config["root"] + f'runs/{task["id"]}--synthetic.json']))

    def start(self, reservation, launch="first"):
        return dict(action="start", run_id=reservation["run_id"], launch_id=launch,
                    live_sha=reservation["live_sha"])

    def checkin(self, running, reservation):
        run_id = reservation["run_id"]
        run = running["runs"][run_id]
        paths = reservation["packet"]["paths"]
        parent = reservation["live_sha"]
        result = dict(version=1, key=run["key"], input_sha=parent, disposition="blocked",
                      evidence=[], blocker="Synthetic", reopen="Original arrives",
                      validation=["Synthetic"], paths=paths)
        receipt = dict(version=1, key=run["key"], commit="1" * 40, parent=parent,
                       paths=paths, blob_shas={paths[0]: "2" * 40}, pr_state="open/draft/unmerged")
        return dict(action="checkin", run_id=run_id, launch_id=run["launch_id"],
                    result=result, receipt=receipt)

    def run_events(self, ledger, *events):
        return apply(ledger, list(events), self.state)

    def test_same_team_race(self):
        winner = self.run_events(self.empty, self.a)
        with self.assertRaisesRegex(ValueError, "already checked out"):
            self.run_events(winner, {**self.a, "run_id": "other"})
        self.assertEqual(self.run_events(winner, self.a), winner)

    def test_same_ticket_two_launches(self):
        reserved = self.run_events(self.empty, self.a)
        running = self.run_events(reserved, self.start(self.a))
        with self.assertRaisesRegex(ValueError, "already started"):
            self.run_events(running, self.start(self.a, "second"))

    def test_stale_team_head(self):
        reserved = self.run_events(self.empty, self.a)
        with self.assertRaisesRegex(ValueError, "stale"):
            self.run_events(reserved, {**self.start(self.a), "live_sha": "0" * 40})

    def test_parallel_teams_check_in_together(self):
        reserved = self.run_events(self.empty, self.a, self.b)
        running = self.run_events(reserved, self.start(self.a), self.start(self.b, "second"))
        a, b = self.checkin(running, self.a), self.checkin(running, self.b)
        both = self.run_events(running, a, b)
        self.assertEqual(both, self.run_events(self.run_events(running, b), a))
        self.assertEqual(both, self.run_events(both, a, b))
        with self.assertRaisesRegex(ValueError, "duplicate task"):
            self.run_events(both, {**self.a, "run_id": "repeat"})
        next_packet = {**self.a["packet"], "case": "new", "paths": [
            self.a["packet"]["paths"][0].replace("synthetic", "new")]}
        self.assertEqual(self.run_events(both, {**self.a, "run_id": "next", "packet": next_packet})
                         ["runs"]["next"]["status"], "reserved")

    def test_conflicting_checkin(self):
        running = self.run_events(self.empty, self.a, self.start(self.a))
        event = self.checkin(running, self.a)
        with self.assertRaisesRegex(ValueError, "launch ID"):
            self.run_events(running, {**event, "launch_id": "wrong"})
        checked = self.run_events(running, event)
        with self.assertRaisesRegex(ValueError, "conflicting"):
            self.run_events(checked, {**event, "receipt": {**event["receipt"], "commit": "3" * 40}})

    def test_cancel_requires_review_and_allows_new_run(self):
        running = self.run_events(self.empty, self.a, self.start(self.a))
        event = dict(action="cancel", run_id="A", reason="Synthetic recovery", review="")
        with self.assertRaisesRegex(ValueError, "reconciliation"):
            self.run_events(running, event)
        cancelled = self.run_events(running, {**event, "review": "Synthetic immutable review"})
        self.assertEqual(self.run_events(cancelled, {**self.a, "run_id": "replacement"})
                         ["runs"]["replacement"]["status"], "reserved")


if __name__ == "__main__":
    unittest.main()
