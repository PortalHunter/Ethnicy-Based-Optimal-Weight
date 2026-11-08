# ChatGPT Atlas operation

The authority remains the **live** [architecture harness](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/tree/architecture/atlas-harness-v1/docs/atlas/harness): read README.md, CHECKOUT.md, checkout.json, state.json and LAUNCH.md at a freshly read immutable architecture head. Copies on this validation branch are not live control state. Never infer authorization from account access or a successful test. No scheduler, new queue, automatic publication or automatic check-in is installed.

Use separate fresh conversations for Researcher, Verifier, Writer and Librarian. One conversation must never approve its own work. Separate conversations may reference immutable GitHub files; attachments and lengthy prompt histories are unnecessary. If a connector cannot read required evidence or enforce the expected-SHA lease, stop the affected transition.

## One case

1. Librarian reads live refs, draft PRs, holds, dependencies and native outcomes. Reserve only the single maintainer-authorized case using checkout.py and an atomic expected-SHA architecture update. Return its immutable ticket link. Do not choose another case implicitly.
2. Researcher reads that ticket and the exact queue row and native instructions. Generate a fresh launch ID, win the atomic start transition and independently read it back before work. Prepare only the packet's allowlisted files and evidence. Preserve source, original/translation, legal, clinical, rights and expert distinctions. Freeze a proposed commit directly parented by the packet's expected team SHA and its independently reviewable evidence references. A candidate commit need not advance the team ref. Stop at the packet boundary.
3. A separate read-only Verifier independently checks the original evidence and exact proposed bytes. An explicitly authorized coordinator or Writer submits the bounded native request below; the Verifier independently audits every required check, command, exit and limitation. An Actions pass is software evidence, not Verifier approval. Record approval bound to exact paths, byte hashes and immutable commits in an authorized GitHub evidence location through a separate authorized writer; do not rewrite the research result to self-certify.
4. The separately named canonical Writer rechecks the running launch, live team SHA, PR and exact independently approved bytes. Publish one direct child using the harness's atomic expected-SHA update. Independently read back parent, complete paths, modes, blobs and PR. Stop on failed validation, stale head, conflicting ticket or lease failure.
5. A separate authorized Librarian independently audits the publication receipt and validation evidence, repeats the live checks, and applies only the original ticket's checkin event through checkout.py. Publish a direct child changing only live architecture checkout.json with expected-SHA protection. Read back the exact transition. A successful check-in releases the slot and keeps the case occupied. Never merge, mark ready or release another team's reservation.

## Bounded native request

This isolated branch is `validation/atlas-native-v1`. Its push-triggered workflow is `.github/workflows/atlas-native-validation.yml`; it is not installed on main and uses no workflow_dispatch endpoint. The only request entrypoint is `docs/atlas/validation/requests/current.json`. Do not accept arbitrary commands or dispatch workers.

Read the live validation branch head and runner/workflow first. Create a single direct-child Git commit replacing only current.json with exactly these fields: version=1; team=A/B/C/D; run_id=the running ticket; harness_sha=a freshly read immutable live architecture commit; commit=the immutable candidate or published team commit; mode=prepublication or published; approval_commit and approval_path=an immutable existing GitHub evidence reference. The reference is presented to the independent Verifier, never treated by software as approval. The Argentina calibration additionally requires its frozen manifest. Use the live refs and ticket to derive pins; do not copy old calibration SHAs into future requests.

Build the blob/tree/commit off the freshly observed validation head, verify its single parent and sole changed request path, then advance the branch with `github_update_ref(expected_sha=observed_head, force=false)`. On mismatch, read and reconcile; never overwrite a concurrent request. Do not use Contents API updates as a substitute for branch-level expected-SHA protection. GitHub runs the workflow from that request commit. The runner executes pinned harness structural checks, all 18 harness/checkout unit tests, and the selected team's existing native commands; Team A includes all its native Python unit tests and provenance/foreign-row preservation. No added dependencies or production deployment runs. Teams C/E authorization holds remain authoritative; E is unsupported.

## Audit GitHub evidence

Use the GitHub connector to GET `/repos/PortalHunter/Ethnicy-Based-Optimal-Weight/actions/runs?head_sha=REQUEST_COMMIT` (via its supported workflow-run collection), then fetch that exact run's jobs, steps, decoded logs and artifacts. Match event=push, branch, exact request head, workflow path and attempt. Read report.json and complete logs, including failures. Each command has argv, working directory, exit code and raw log; the report identifies input commits, live observations, limitations and run URL. All required commands must exit zero and report outcome=PASS; missing artifacts/logs or truncation block approval. Use the artifact's ID/digest and exact attempt when available. Artifacts have a 90-day retention; preserve independently audited evidence in an authorized documentation branch before expiry if it must remain durable.

A separate Verifier must still authenticate sources and audit preservation/status fields and the receipt against exact blobs. Later live movement can make a previously passing run stale. Recheck immediately before publication/check-in; no script publishes or releases a slot. Historical runs after check-in may fail the running-ticket guard by design.

## Short role launchers

Prefix each with the repository URL and this guide URL; then supply only a GitHub ticket/request/approval link and the bounded authorization.

- **Librarian:** Read the live authority and specified ticket. Reserve only the explicitly named case, or independently check in only the specified verified receipt. Use expected-SHA publication and readback. Stop on any missing gate.
- **Researcher:** Read the live authority and specified reserved ticket. Start only that ticket with a fresh launch ID; prepare its bounded evidence packet. Stop for independent verification. No canonical publication.
- **Verifier:** Read the live authority and specified immutable packet/commit. Remain read-only. Independently audit sources, bytes, native run and receipt. Return exact approval or blocker. Never submit writes, publish research or check in.
- **Writer:** Read the live authority, specified running ticket and independent exact-byte approval/native evidence. Publish only those approved paths to the designated team branch with expected-SHA protection and independent readback. Leave check-in to Librarian.

For the next handoff, link this guide, the live harness and one immutable GitHub ticket or finding. Name one role, one bounded stage and its stop condition. Never dispatch new research merely because a slot is free.

## Readiness

Installation and end-to-end GitHub execution must be proven before use. See TRANSITION_STATUS.md on this branch for tested evidence or the exact blocker. A local pass alone does not establish GitHub readiness.
