# Protect main — required administrator action

**Status as of 2026-11-02:** `main` was reported `protected: false` by the GitHub branch endpoint. The connected GitHub tool cannot modify branch protection/rulesets (administrative endpoint returned HTTP 403). These controls are **not activated by this document**.

A repository administrator must visit **Settings → Branches → Add branch protection rule** (or **Settings → Rules → Rulesets**) and configure target `main`:

1. Require a pull request before merging, with **at least one approving human review**; dismiss stale approvals when new commits arrive.
2. Require status checks before merging. After the new CI workflow runs once, select the unique job `quality-gates` from `Calculator CI`. Enable up-to-date branch checks as appropriate.
3. Require conversation resolution; prohibit force pushes and deletions. Apply to administrators / disallow bypass where available and appropriate.
4. Restrict direct pushes, avoid broad exceptions; consider signed commits with a reviewed migration plan if existing contributor habits need adjustment.
5. Verify under GitHub's branch page that `protected: true` is reported, and test that an unapproved PR cannot merge.

**Important:** The workflow lives only on the research branch initially; status checks can be selected once GitHub has recorded a run. Merge the reviewed workflow to `main` before requiring it across all PRs.

No automatic deployment or publishing keys are configured. If deployed later, require maintainer approval, release tagging, secret management and rollback notes.

