"""Atlas v1 structural contract. Runs offline and never writes to GitHub."""
import argparse
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
SHA = re.compile(r"[0-9a-f]{40}")
CASE = re.compile(r"[A-Za-z0-9_.:-]{1,100}")
TEAMS = set("ABCDE")


def require(condition, message):
    if not condition:
        raise ValueError(message)


def exact(value, fields):
    require(isinstance(value, dict) and set(value) == set(fields.split()), "malformed fields")


def load_state():
    state = json.loads((HERE / "state.json").read_text())
    require(state["version"] == 1 and set(state["teams"]) == TEAMS, "state version or teams")
    require(SHA.fullmatch(state["main_base"]) and SHA.fullmatch(state["assignment_sha"]), "state pins")
    tasks = {}
    for team, config in state["teams"].items():
        require(config["root"] == f"docs/atlas/handoffs/team-{team.lower()}/", "team root")
        if config["branch"] is None:
            require(team == "E" and all(config[k] is None for k in ("sha", "writer", "pr")), "unprovisioned state")
        else:
            require(config["branch"].startswith(f"research/atlas-team-{team.lower()}-")
                    and SHA.fullmatch(config["sha"]) and config["writer"]
                    and config["pr_state"] == "open/draft/unmerged", "branch contract")
        for path in config["read"] + config["queues"] + ([config["current"]] if config["current"] else []):
            require(safe_path(path, config["root"]), "foreign input")
        for task in config["queue"]:
            tid = task["id"]
            require(tid.startswith(team + "-") and tid not in tasks, "duplicate or foreign task")
            require(task["status"] in {"ready", "held"} and task["reopen"], "task state")
            require(task["status"] != "held" or task["blocker"], "missing blocker")
            require(type(task["priority"]) is int and task["priority"] > 0, "invalid priority")
            require(set(task["queues"]) <= set(config["queues"]), "foreign lane queue")
            tasks[tid] = task
    for task in tasks.values():
        pending = list(task["depends_on"])
        seen = set()
        while pending:
            dep = pending.pop()
            require(dep in tasks and dep != task["id"], "unknown or cyclic dependency")
            if dep not in seen:
                seen.add(dep)
                pending.extend(tasks[dep]["depends_on"])
    return state


def safe_path(path, root):
    return (isinstance(path, str) and path.startswith(root)
            and all(part not in ("", ".", "..") for part in path.split("/"))
            and "\\" not in path and not any(ord(char) < 32 for char in path))


def eligible(config, completed):
    return sorted(
        (task for task in config["queue"] if task["status"] == "ready"
         and set(task["depends_on"]) <= completed),
        key=lambda task: (task["priority"], task["id"]),
    )


def check_packet(packet, config, live, completed, occupied):
    exact(packet, "version task case expected_sha queue_path row_key evidence_required paths")
    require(type(packet["version"]) is int and packet["version"] == 1, "packet version")
    require(config["branch"] and config["writer"], "unprovisioned writer")
    require(isinstance(live, str) and SHA.fullmatch(live) and packet["expected_sha"] == live, "stale SHA")
    require(isinstance(packet["case"], str) and CASE.fullmatch(packet["case"]), "invalid case")
    task = next((t for t in eligible(config, completed) if t["id"] == packet["task"]), None)
    require(task is not None, "held or unresolved dependency")
    require(packet["queue_path"] in task["queues"] and isinstance(packet["row_key"], str)
            and packet["row_key"].strip(), "missing native queue reference")
    require(packet["evidence_required"] is True, "evidence policy")
    key = f'{packet["task"]}:{packet["case"]}'
    require(key not in occupied, "duplicate task selection")
    paths = packet["paths"]
    require(isinstance(paths, list) and paths and all(safe_path(p, config["root"]) for p in paths)
            and len(paths) == len(set(paths)), "cross-team or invalid path")
    require(f'{config["root"]}runs/{key.replace(":", "--", 1)}.json' in paths, "missing durable checkpoint path")
    return key


def check_result(result, key, packet):
    exact(result, "version key input_sha disposition evidence blocker reopen validation paths")
    require(type(result["version"]) is int and result["version"] == 1 and result["key"] == key
            and result["input_sha"] == packet["expected_sha"], "result identity")
    require(result["disposition"] in {"verified_scoped", "blocked", "no_change"}, "result disposition")
    checkpoint = next(p for p in packet["paths"] if p.endswith(f'/runs/{key.replace(":", "--", 1)}.json'))
    require(isinstance(result["paths"], list) and checkpoint in result["paths"]
            and set(result["paths"]) <= set(packet["paths"])
            and len(result["paths"]) == len(set(result["paths"])), "unexpected result path")
    if result["disposition"] != "verified_scoped":
        require(result["paths"] == [checkpoint], "blocked/no-change packet can only record a checkpoint")
    require(isinstance(result["validation"], list) and result["validation"]
            and all(isinstance(v, str) and v.strip() for v in result["validation"]), "validation missing")
    require(isinstance(result["evidence"], list), "malformed evidence")
    for evidence in result["evidence"]:
        exact(evidence, "id url locator issuer checked original access qualification")
        require(all(isinstance(evidence[k], str) and evidence[k].strip() for k in evidence if k != "original")
                and evidence["url"].startswith("https://") and type(evidence["original"]) is bool
                and evidence["access"] in {"direct", "indexed", "blocked", "metadata"}, "malformed provenance")
    if result["disposition"] == "verified_scoped" and packet["evidence_required"]:
        require(any(e["original"] and e["access"] == "direct" for e in result["evidence"]), "missing original evidence")
    if result["disposition"] == "blocked":
        require(all(isinstance(result[k], str) and result[k].strip() for k in ("blocker", "reopen")),
                "missing blocker or reopening condition")


def check_readback(receipt, result):
    exact(receipt, "version key commit parent paths blob_shas pr_state")
    require(receipt["version"] == 1 and receipt["key"] == result["key"], "receipt identity")
    require(isinstance(receipt["commit"], str) and SHA.fullmatch(receipt["commit"])
            and receipt["parent"] == result["input_sha"] and receipt["commit"] != receipt["parent"], "wrong commit or parent")
    require(sorted(receipt["paths"]) == sorted(result["paths"])
            and set(receipt["blob_shas"]) == set(result["paths"])
            and all(SHA.fullmatch(sha) for sha in receipt["blob_shas"].values()), "readback paths or blobs")
    require(receipt["pr_state"] == "open/draft/unmerged", "PR protection")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("team", nargs="?", choices=sorted(TEAMS))
    parser.add_argument("--live-sha", help="Freshly read branch head")
    parser.add_argument("--packet", type=Path)
    parser.add_argument("--result", type=Path)
    parser.add_argument("--receipt", type=Path)
    parser.add_argument("--occupied", nargs="*", default=[])
    parser.add_argument("--completed", nargs="*", default=[])
    args = parser.parse_args()
    state = load_state()
    if args.team is None:
        require(not any((args.live_sha, args.packet, args.result, args.receipt)), "team required")
        print("PASS Atlas v1 state")
        return
    config = state["teams"][args.team]
    if args.packet is None:
        require(args.result is None and args.receipt is None, "packet required")
        print(json.dumps({"team": args.team, "snapshot": config["sha"],
                          "eligible_lanes": [t["id"] for t in eligible(config, set(args.completed))],
                          "queue": config["queue"], "dispatch_authorized": False}, indent=2))
        return
    packet = json.loads(args.packet.read_text())
    key = check_packet(packet, config, args.live_sha, set(args.completed), set(args.occupied))
    if args.result:
        result = json.loads(args.result.read_text())
        check_result(result, key, packet)
        if args.receipt:
            check_readback(json.loads(args.receipt.read_text()), result)
    else:
        require(args.receipt is None, "result required")
    print(f"PASS structural contract for {key}")


if __name__ == "__main__":
    try:
        main()
    except (ValueError, TypeError, KeyError, OSError) as error:
        raise SystemExit(f"BLOCKED: {error}")
