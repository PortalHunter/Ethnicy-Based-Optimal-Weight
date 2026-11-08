# Independent read-only review of proposed validation workflow

Reviewer `/root/argentina_verifier`; 2026-11-08. Files under `/tmp/atlas-transition` were coordinator-authored and not edited by reviewer. This review is separate from `/tmp/atlas-argentina-verifier-report.md` and proves no GitHub Actions execution.

No blocking correctness/security defect identified for the exact current Argentina **published** request. Python AST and request JSON parse pass. Workflow branch/path trigger, immutable action pins, `contents: read`, `persist-credentials: false`, bounded timeout, stdout/exit logs, failure artifact upload and separate disposable immutable worktrees are appropriate for this authorized scope. Commands use argv without shell interpolation. Parent/input, actual paths/modes, harness result/receipt, actual Team A validator/all unit tests and pinned harness/checkout tests are present.

Recommended strengthening:

1. `validate_request.py` lines137–143 compares frozen newly computed fingerprints; additionally compare independent approval's approved fingerprints, status, run/input/launch against current ticket and publication. The separate reviewer report has already checked the approved fingerprints for this exact publication. A file called approval-reference alone does not confer independent approval, as script comments correctly state.
2. Preservation checks do not independently test Argentina legal/status fields, issuer PARTIAL/NO, or original directory byte identity. The report accurately retains a separate semantic/status audit requirement; the separate native report supplies these exact pinned checks. Do not present this generic Actions PASS alone as completing all preservation/legal gates.
3. `prepublication` mode still requires a fetchable remote commit whose sole parent is the reserved input; it cannot validate a strictly local unpublished proposal. Limit the advertised mode accordingly or support a separately approved staging commit.
4. API reads are unauthenticated; hosted-runner shared IP rate limits can cause fail-closed BLOCKED. Do not mistake such a failure for a data regression. No token scope expansion is needed for this public read-only task.
5. Only request path changes trigger this workflow. A correction to workflow/validator alone needs request-byte change or another supported rerun mechanism.

No publication, ref write, workflow dispatch, check-in, dataset edit or production change performed by reviewer.
