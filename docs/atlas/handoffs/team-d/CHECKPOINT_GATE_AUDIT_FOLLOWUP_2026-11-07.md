# Team D — native-validator reproducibility repair and independent issuer audit (2026-11-07)

**Scope and verified input:** PR #70 remains OPEN/DRAFT/UNMERGED. Only `research/atlas-team-d-20261104` and `docs/atlas/handoffs/team-d/`; input Git HEAD `ac080d38442800b10ef78b6b370cce723ff14411`. Follows [prior gate audit](CHECKPOINT_GATE_AUDIT_2026-11-07.md); previous canonical and original-instrument findings preserved. No instrument case reopened without a new signed primary instrument/custodian reply; the 236-row backlog remains unmodified.

## Reproducibility defect repaired; native execution STILL HELD

The checked-in `validate.mjs` contained **18 current-branch `assert.equal(prov.length,321)` checks** inherited from Batch 57 and earlier. The live current `PROVENANCE.csv` has **328 records / 328 distinct IDs / 328 distinct URLs** after post-consolidation TD-SRC-326–328. The stale checks would fail a current-snapshot full native run even if every canonical source passed. All 18 checks now use `EXPECTED_CURRENT_PROVENANCE_COUNT = 328`, with a dated comment distinguishing historical batch facts from current ledger cardinality. No historical provenance row was deleted or renumbered.

**FULL CURRENT CHECKED-IN NATIVE NODE VALIDATOR NOT RUN.** This runtime reports `node v22.16.0`, but `git ls-remote https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight.git refs/heads/research/atlas-team-d-20261104` fails: `Could not resolve host: github.com`. Connected GitHub access permits exact file/tree inventory and protected Git writes, not a complete local checkout or execution of the repository script. The two successful PR workflows called “Population Phase 1 regression tests” and “Calculator CI” are not substitutes for the Team D native validator. No invented Node stdout/stderr or regression PASS.

**Targeted checks ACTUALLY executed:** 16/16 connector-fetched JavaScript assertions at input HEAD: nine CSV width checks; provenance ID/URL uniqueness; 47 node count; 619 edge count and unique semantic keys; edge source and endpoint joins; seven condition keys and source URLs; 205/249 WHO region counts; 105 distinct April-2026 M49 affirmative roster joins; 34 EMA directory identities; 236 unique backlog cases; and 37 initial independent-audit records. These are limited scoped checks, not the checked-in Node regression, external original-facsimile audit or legal/clinical approval.

## Seven stratified source/semantic audit entries, TD-SEM-038–044

[Audit ledger](data/postconsolidation_evidence_semantic_audit_2026-11-07.csv): **37 → 44 rows (+7)**, with zero new graph edges, source-ledger URLs, institutional condition links or legal packets. First-party independent source observations, all checked on **2026-11-07**:

- **TD-SEM-038 EMA→EMRN**: [EMA issuer network statement](https://www.ema.europa.eu/en/about-us/how-we-work/european-medicines-regulatory-network), directly opened, explicitly distinguishes EMA coordination/scientific opinions, Commission binding central decisions and competent national authorities. No legal NCA packet.
- **TD-SEM-039 ECDC→EU**: [ECDC original institutional page](https://www.ecdc.europa.eu/en/about-us), directly opened, identifies its EU infectious-disease agency role, **not** a medicines authorisation delegation.
- **TD-SEM-040 Africa CDC→AU**: [Africa CDC original role statement](https://africacdc.org/about-us/), directly opened, identifies an autonomous AU health agency; not an independently inspected AU founding instrument or national legal grant.
- **TD-SEM-041 WHL↔ISH**: [WHL original About page](https://www.whleague.org/about-us), directly opened, says official relations with ISH. This does not prove signed cooperation terms, guideline adoption or a Team B local issuer join.
- **TD-SEM-042 WHO SEARO diabetes publication**: [WHO original publication record](https://www.who.int/southeastasia/publications/i/item/9789290222255), directly opened, records **1 June 2026**, WHO editors, WHO regional team and an Indonesia case study. Qualify `published_by`: WHO is the named editor/rights holder, SEARO is identified as regional team. The historical Indonesia case study cannot overturn its May 2025 WPRO administrative assignment.
- **TD-SEM-043 Timor-Leste→ASEAN**: [ASEAN official dated admission notice](https://asean.org/forging-a-new-era-timor-leste-admitted-into-asean/) indexed with **26 October 2025** admission; direct page returned **403**. Retain distinct 2022 observer status and no asserted national healthcare enactment.
- **TD-SEM-044 Liechtenstein→ECDC EU-IBD**: [ECDC original network roster](https://www.ecdc.europa.eu/en/about-us/networks/disease-and-laboratory-networks/eu-ibd) officially indexed as including Liechtenstein in 27-EU-plus-3-EEA/EFTA surveillance scope; direct page returned **429**. It is **not** a specific national legal authority or medicines mandate. Direct full-page verification remains pending.

Sources checked span EU public health, EU medicines, African Union, WHO, ASEAN, and international professional society. **Five directly accessible publisher records, two official-indexed-only records**; no 403/429 source was silently promoted to full facsimile review. Previously sampled 12 provisional society graph endpoints still lack all 12 exact Team B original issuer joins; 21 indexed-only PAHO graph edges still lack original facsimile verification. The larger 619-edge original source/semantic gate is not closed by seven samples.

## Original acceptance and finite backlog

**Original Team D acceptance: 3/5 structurally demonstrated / 2/5 HELD**. Six WHO regional-office relationships with dated transitions, ≥10 distinct properly typed international relationships, and ≥10 boundary examples remain demonstrated. **TD-BL-ACCEPT-001 HELD:** non-exhaustive external issuer/relationship proof, incomplete exact Team B IDs and PAHO indexed-only review. **TD-BL-ACCEPT-002 HELD:** no complete authorized native checked-in Node run or exhaustive independent provenance/facsimile reproduction. Seven condition keys have institutional links only, not clinical approvals. Expanded 34-NCA amended-law/delegation/Team A audit is separate from original acceptance and remains 0/34.

No original instrument reopened. Preserve escalations TD-BL-WHO-533 (Aruba WHO administrative allocation), TD-BL-NET-001 (PAHO ECC 13 undated versus 14 dated), TD-BL-NET-003 (SCI exact signed accession day), TD-BL-NET-004 (APPM seven unnamed signed instruments), TD-BL-NET-007 (AOECS 1991 Codex credential). No negative/absence or authority inference. Explicit closure count **0**; new primary instrument count **0**; newly proven boundary cases **0**; new provenance-only URLs **0**; source/semantic audit rows **+7**; repaired stale validator checks **18**; independent strict gate closures **0**. Existing backlog **236** unchanged.

## Exact 20-slot coverage before → after (current branch, not legal or clinical approval)

```text
WHO current administration    ████████████████░░░░ 205/249 (82.3%) → ████████████████░░░░ 205/249 (82.3%) | Δ +0 | 44 not_verified
April 2026 affirmative M49    ████████░░░░░░░░░░░░ 105/249 (42.2%) → ████████░░░░░░░░░░░░ 105/249 (42.2%) | Δ +0 | 144 lack positive; not office-absent
EMA source-listed identities  ████████████████████ 34/34 (100%)   → ████████████████████ 34/34 (100%)   | Δ +0 | identity only
Full statute+Team A packets   ░░░░░░░░░░░░░░░░░░░░ 0/34 (0%)     → ░░░░░░░░░░░░░░░░░░░░ 0/34 (0%)     | Δ +0 | 34 full audits
Original criteria demonstrated ████████████░░░░░░░░ 3/5 (60%)   → ████████████░░░░░░░░ 3/5 (60%)   | Δ +0 | 2 HELD
Original criteria HELD        ████████░░░░░░░░░░░░ 2/5 (40%)    → ████████░░░░░░░░░░░░ 2/5 (40%)    | Δ +0 | source + native repro
```

**Next priority:** secure an authorized complete checkout or equivalent true native environment, execute the **updated** `node docs/atlas/handoffs/team-d/validate.mjs`, capture exact stdout/stderr, then independently recheck direct issuers and source semantics beyond these samples. Do not count stale-assertion repair as passing Node validation. Preserve source-access and exact identity blockers; avoid reopening already-saturated instruments absent new original leads. No scientific/legal/clinical/maintainer approval or readiness/merge.
