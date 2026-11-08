# Architecture bootstrap checkpoint

The master branch is based on the `main_base` in state.json. Team A–D pins were read from GitHub refs and reconciled with the branch-native checkpoints, since several PR descriptions lag their heads. Team E's original assignment exists in #67, but there is no Team E canonical branch or dataset. A–D research PRs are open, draft and unmerged. Assignment PR #67 is open, non-draft and unmerged. No acceptance statuses were advanced.

At the exact A–D baseline commits in state.json, complete detached checkouts reproduced the checked-in native validators using Python 3.12.14 and Node 24.22.1. Team A validator and 10 unittests passed. Team B CLI returned zero errors. Team C CLI passed and rejected 17/17 negative fixtures. Team D CLI passed with 619 typed edges and 330 provenance entries. These are software integrity results. Original-source authentication, expert review, legal and clinical clearance remain separate.

The bootstrap architecture test run passed 12 synthetic contract tests and all five read-only entrypoints. The synthetic dry run selected a lane, stopped on missing original evidence, generated a blocked manifest and checked a synthetic receipt. No research case was selected. The default-branch ruleset was inspected and remains in force. Legacy branch-protection details were inaccessible through the connector. The single-writer rule is an operating boundary backed by expected-SHA publication, rather than a newly installed GitHub access rule.

For independent bootstrap readback, verify the architecture commit's single parent against state.json, check that the entire diff is in this directory, compare immutable blob contents, and recheck the main and team refs and PR flags. The first architecture branch creation requires the ref to be absent. Later changes require an explicit expected SHA.

## Checkout ledger addendum

The empty checkout ledger and its v1 transitions were validated with 18 synthetic harness tests. These include simultaneous reservation reconciliation, duplicate starts, stale team heads, two-team batched and sequential check-in, conflicting receipts and explicit cancellation. No live ticket was created. The librarian remains responsible for independently validating remote evidence, authorization and receipt bytes.
