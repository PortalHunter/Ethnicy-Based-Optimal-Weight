# Team B status · 2026-11-05

**INCOMPLETE after batch 40.** [Draft PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71) on `research/atlas-team-b-20261104`. No website, calculator, main or merge changes. [Data commit 1d7f0a326be34482b782ef704bb57b84f29677ec](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/1d7f0a326be34482b782ef704bb57b84f29677ec).

| Measure | Verified result |
|---|---:|
| UN M49 areas / seven-condition cells | 248 / 1,736 |
| Organizations / domiciled areas | 368 / 227 |
| Areas without domiciled organization | 21 |
| Exact resource relationships / positive cells | 257 / 237 |
| Without a linked resource | 1,499 |
| Unlinked: condition-targeted check / not checked | 130 / 1,369 |
| Provenance records / targeted searches | 744 / 431 |
| Community records / cross-border edges | 7 / 8 |
| Unresolved source issuer countries / clinical claims approved | 5 / 0 |

Positive cells by condition: diabetes **85**, hypertension **31**, high_chol **26**, gout **24**, lactose **17**, celiac **34**, hemochromatosis **20**.

## Batch 40: Monaco identities and Saint-Barthélemy boundary

- New Monaco domiciled identities: **Croix-Rouge monégasque** (first-party 2026 website, NGO prevention role) and **M-CRIN** (official 2025 legal declaration, association hosted at the *public* Monaco Scientific Centre, but separate legal entity). Do not relabel public CSM as a nongovernmental society or claim M-CRIN authored partners' studies.
- One new **diabetes awareness/event notice**, issued by Monaco Red Cross for November 2025 public screening. It is not clinical guidance, a completed trial, a representative prevalence result or proof that all planned event outcomes occurred.
- One Monaco hypertension hospital-research catalogue check without a qualifying independent hypertension guideline. Two Saint-Barthélemy targeted checks note that Le Coeur de Saint Barth's registry-derived **registered seat is Saint-Martin (663)**, while **Saint-Barthélemy (652)** is the intended service area. No NGO domicile or clinical publication assigned to 652 from that mirror.
- All resource metadata remain `research_lead_only`; none of these links approves a clinical claim. Old Monaco diabetes association's documented dissolution remains unchanged.

## Original acceptance gates

| Requirement | State |
|---|---|
| Full 248 × 7 M49 matrix | **Structurally met.** |
| Source issuer country, study population and healthcare jurisdiction separately | **Structurally met** for 257 contexts; five issuer-country unknowns and source-quality limits remain. |
| Diagnostic/condition subtype boundaries and safe educational release | **Maintained.** Zero clinical approvals; no ancestry-to-risk shortcut. |
| Verify own official original-language guideline lists and organizational lifecycle worldwide | **Incomplete.** 21 missing domiciles, 1,369 zero-resource cells with no targeted search, and study/permission reviews outstanding. |
| Ten or more broad-label conflation cases | **14 preserved** in GAPS.md. |

Validation: **zero structural errors** on 10 GitHub-fetched CSVs, read back from immutable data commit 1d7f0a326be34482b782ef704bb57b84f29677ec; all 10 matched Git tree blob IDs. Equivalent JavaScript implementation of the checked-in validator; **Node CLI was not run**, and this is not a clinical, lifecycle, external-URL or permission audit. See VALIDATION.md and CHECKPOINT.json. Continue only within `docs/atlas/handoffs/team-b/`.
