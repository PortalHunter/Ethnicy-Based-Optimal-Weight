# Team B research status — 2026-11-04

**Phase:** First primary-source-backed batch committed; ongoing geographic discovery; this handoff is intentionally incomplete.

- M49 identifier rows: **248**; seven-condition skeleton rows: **1736**.
- Official-site identified organizations: **26**, spanning **12** country/area codes.
- Linked condition-source records: **23**; condition-area cells with a verified source link: **23**; remaining cells `not_yet_researched`: **1713**.
- Indigenous/community-specific research bodies recorded: **3**; no unauthorized raw community data included.
- Scientific claim approval: **0**. Legal institutional governance fully audited: **0**.

## Resume checklist

1. Retrieve this PR branch; validate every CSV's headers, unique `org_id`, area M49 codes, and foreign keys. Do not merge without maintainer review.
2. Work next on geographically varied local-language sources. Carry condition-specific publication titles and the issuing organization, not general relevance by specialty name.
3. Recheck source URLs and date before switching any coverage cell to verified; use `specialist_research_only` when a published local study exists without society evidence.
4. Preserve `authored`, `hosted`, `endorsed` and `describes_external_guideline` as distinct; do not conflate study population and source-country.
5. Escalate any potentially patient-facing proposition to issue #27 for separate appraisal and clinician review.

No patient data, protected copyrighted full texts or confidential tokens committed.
