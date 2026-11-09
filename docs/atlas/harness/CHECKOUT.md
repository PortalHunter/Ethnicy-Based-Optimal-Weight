# Atlas checkout protocol · v1

`checkout.json` on `architecture/atlas-harness-v1` is the shared ledger. One active slot per team includes both reserved and running tickets. Different teams can run and publish concurrently on their own branches. Every shared ledger change is a short, atomic commit. Keep PR #75 draft, open and unmerged.

## Manual workflow

1. **Librarian reserves.** In one global chat, select one eligible native row per requested team and verify current branch, draft PR, dependencies and earlier outcomes. Build the v1 packet and choose a unique run ID for each team. Publish reservation events as one ledger update. Return team, run ID, case key, team SHA and immutable ledger commit link only after readback. C/E holds still apply.
2. **Team chat starts.** Paste its launcher and run ID into a fresh chat. Read the live ledger and confirm its ticket, branch and expected team SHA. Generate a fresh random launch ID locally for this invocation. Publish a start event and independently read back the running ticket with that exact launch ID before doing any work. Never copy an existing launch ID into another researcher chat. A second chat with the same ticket cannot start it. If your write response is lost, read back your own launch ID before proceeding.
3. **Team finishes.** Verify and publish the result under the existing team-writer rules. Immediately before publication, confirm that the live ticket is still running under the same launch ID. Team chats return the run ID, launch ID, result and immutable commit references. They leave check-in to the librarian.
4. **Librarian checks in.** Independently fetch and compare each actual manifest, commit, parent, changed paths, blob SHAs and draft PR. Check in one or several verified receipts in one ledger commit. Exact repeats are no-ops. A conflicting receipt stops check-in. Successful check-in releases the team slot and preserves the complete history.
5. **Recover.** Tickets never expire automatically. Resume the original running chat if available. To cancel, the maintainer explicitly confirms the prior worker has stopped, reconciles the actual team head, checks for in-flight writes and records that review. If a result was already published, verify and check it in. If no result was published, cancel and reserve a new run ID. Never cancel or reassign an active writer. Evidence-blocked packets can check in a checkpoint-only result. A completed case remains occupied. Reopening requires explicit architecture-level reconciliation before dispatch.

## Atomic publication

Run `python3 checkout.py checkout.json events.json > proposed.json` against the ledger read at the fresh architecture SHA. The CLI checks transitions offline. The chat must verify GitHub refs, PRs, actual result bytes and authorization separately. Make a direct child commit changing only `docs/atlas/harness/checkout.json`. Publish with an atomic expected-SHA ref update as in the master operating contract. Never substitute an unconditional write. If proposed bytes match the current ledger, return the existing immutable receipt without committing.

On a rejected lease, fetch the live ledger and reapply the intended events against it. Distinct-team changes can be combined in a retry. A team already reserved, a ticket started by another invocation, or a conflicting check-in stops the losing operation. Verify the published commit, parent, single changed file and ledger blob before using the transition. If the connector cannot enforce the lease, stop. The team chat's sole master-branch write authorization is its own start event.

The event file contains a JSON array. Each event includes `action` and `run_id`, plus these fields.

| Action | Additional fields |
|---|---|
| `reserve` | `team`, v1 `packet`, independently observed team `live_sha` |
| `start` | fresh `launch_id`, independently observed team `live_sha` |
| `checkin` | matching `launch_id`, verified `result` and `receipt` |
| `cancel` | `reason`, `review` with maintainer authorization and immutable reconciliation references |

The architecture checkout starts empty. No research case is reserved or dispatched by installing it.
