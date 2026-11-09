"""Validate checkout transitions and print the proposed ledger. No network writes."""
import argparse
import copy
import json
from pathlib import Path

from harness import CASE, check_packet, check_readback, check_result, exact, load_state, require

ACTIVE = {"reserved", "running"}


def apply(ledger, events, state):
    exact(ledger, "version runs")
    require(ledger["version"] == 1 and isinstance(ledger["runs"], dict), "ledger version or runs")
    require(isinstance(events, list) and events, "at least one event required")
    proposed = copy.deepcopy(ledger)
    runs = proposed["runs"]
    for event in events:
        transition(runs, event, state)
    return proposed


def transition(runs, event, state):
    action = event["action"]
    fields = {
        "reserve": "team packet live_sha",
        "start": "launch_id live_sha",
        "checkin": "launch_id result receipt",
        "cancel": "reason review",
    }
    require(action in fields, "unknown checkout action")
    exact(event, "action run_id " + fields[action])
    run_id = event["run_id"]
    require(isinstance(run_id, str) and CASE.fullmatch(run_id), "invalid run ID")
    run = runs.get(run_id)
    if action == "reserve":
        team = event["team"]
        config = state["teams"][team]
        if run and run["status"] == "reserved" and run["team"] == team and run["packet"] == event["packet"]:
            require(event["live_sha"] == run["packet"]["expected_sha"], "stale team head")
            return
        require(run is None, "run ID already used")
        require(not any(r["team"] == team and r["status"] in ACTIVE for r in runs.values()),
                "team already checked out")
        occupied = {r["key"] for r in runs.values() if r["status"] != "cancelled"}
        key = check_packet(event["packet"], config, event["live_sha"], set(), occupied)
        runs[run_id] = dict(team=team, key=key, packet=event["packet"], status="reserved")
        return
    require(run is not None, "unknown ticket")
    if action == "start":
        launch = event["launch_id"]
        require(isinstance(launch, str) and CASE.fullmatch(launch), "invalid launch ID")
        require(run["status"] == "reserved", "ticket already started or closed")
        require(event["live_sha"] == run["packet"]["expected_sha"], "stale team head")
        run.update(status="running", launch_id=launch)
    elif action == "checkin":
        require(run["status"] in {"running", "checked_in"} and event["launch_id"] == run["launch_id"],
                "ticket is not running under this launch ID")
        result, receipt = event["result"], event["receipt"]
        check_result(result, run["key"], run["packet"])
        check_readback(receipt, result)
        if run["status"] == "checked_in":
            require(run["receipt"] == receipt and run["result"] == result, "conflicting check-in")
            return
        run.update(status="checked_in", receipt=receipt, result=result)
    else:
        require(all(isinstance(event[k], str) and event[k].strip() for k in ("reason", "review")),
                "cancellation requires reason and reconciliation record")
        if run["status"] == "cancelled":
            require(run["cancellation"] == event, "conflicting cancellation")
            return
        require(run["status"] in ACTIVE, "ticket is closed")
        run.update(status="cancelled", cancellation=event)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("ledger", type=Path)
    parser.add_argument("events", type=Path)
    args = parser.parse_args()
    proposed = apply(json.loads(args.ledger.read_text()), json.loads(args.events.read_text()), load_state())
    print(json.dumps(proposed, indent=2) + "\n", end="")


if __name__ == "__main__":
    try:
        main()
    except (ValueError, TypeError, KeyError, OSError) as error:
        raise SystemExit(f"BLOCKED: {error}")
