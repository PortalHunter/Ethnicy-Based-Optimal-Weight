# Validation — batch 12, 2026-11-05

Nine CSV tables validated using the committed validate.mjs core plus overview checks in the orchestration JavaScript runtime. Zero errors. Node CLI wrapper not separately executed.

Checks: CSV widths, unique IDs and composite keys, M49/organization references, seven conditions per area, 248×7 matrix, exact resource counts, publication/context matching, research_lead_only release state, provenance source support, metadata and HTTPS syntax. Current UNSD rendered overview code-set exact match248; zero missing/extra.

Metrics: {"organizations":190,"areas":119,"resources":138,"positive":132,"unresearched":1604,"provenance":331,"search_log":103,"community":3,"by_condition":{"diabetes":47,"hypertension":13,"high_chol":19,"gout":9,"lactose":5,"celiac":23,"hemochromatosis":16},"current_unsd_overview_codes":248}

Targeted primary-source retrieval is not a full URL crawl, legal registration audit, clinical appraisal, direct downloadable UN export diff or WHO jurisdiction audit. Zero approved clinical claims. Directory-only identities are not counted as positive resource cells.
