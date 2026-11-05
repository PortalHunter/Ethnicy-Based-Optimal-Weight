# Team D — Typed institutional graph ontology

Checked: 2026-11-04. The graph models relationships **between organizations and countries/areas**. Its edges are not clinical findings.

## Node namespaces
- `WHO_*`, `PAHO`, `EMA`, `ECDC`, etc: Team D network IDs defined in `international_networks.csv`.
- `m49:NNN`: country or area node keyed to a three-character M49 candidate code (preserves leading zeros); verified geographic universe must be reconciled with the [UN M49 source](https://unstats.un.org/unsd/methodology/m49/overview).
- `org:*` future joins: Team A ministries, Team B societies and Team C publishing organizations should supply source IDs and explicit match provenance. Do not auto-join by organization name or country.

## Edge vocabulary and precise meanings

| type | Semantics and required caution |
|---|---|
| `member_of` | Dated formal membership; membership class belongs in notes until a membership-tier field is approved. | 
| `WHO_region` | Country/area WHO operational-region designation, **not** geographic location, statutory power or WHO membership status. |
| `regional_office_of` | WHO administrative reporting office; no national laws implied. |
| `serves_as` | One entity executes a second institution's named function (PAHO/WHO-AMRO). |
| `specialized_health_agency_of` | Formal role in separate intergovernmental system (PAHO/Inter-American). |
| `agency_of` | Legal institutional position within a supranational body (Africa CDC/AU, ECDC/EU, EMA/EU). |
| `covered_by` | Operational/geographic coverage only when a source defines it; does not imply national membership. |
| `regulates_medicines_in` | Specific legal medicinal product remit, **requires jurisdiction/procedure/date**; no broad country-level rows asserted yet. |
| `cooperates_with` | Documented partnership without legal national guideline adoption. |
| `publishes_guidance_for` | Source names the jurisdiction/audience of a guidance document, not national adoption (not yet used for a country edge). |
| `official_representative_of` | Requires designation instrument and role term; **not yet populated**. |
| `indexes_articles_from` | Bibliographic indexing only, different from journal ownership and endorsement; **reserved for Team C join**. |
| `study_collaboration` | Documented multicountry study participant/institution role, not organizational membership; **reserved for future evidence-linked work**. |
| `participates_in` | Documented technical network participation, distinguished from institutional or government membership. |
| `coordinates_regulatory_network`, `coordinated_by` | Management/coordinating role within an identified network, not final approval for every jurisdiction. |
| `operated_by`, `regional_implementation_of`, `published_by` | Governance/implementation/publication functions of programmes. |

## Temporal and provenance logic
- `valid_from` and `valid_to`: inclusive dated interval only where substantiated. A blank start means unknown; a blank end means no **verified** conclusion date, never everlasting validity.
- `as_of`: date the current relationship was checked. Each edge has its own primary-source URL.
- `verification_state`: `VERIFIED_PRIMARY` when publisher explicitly confirms the claim, or `PENDING_VERIFICATION` when unresolved. Edges missing critical provenance must not be promoted to verified.
- Do not infer that an organization member country follows an international society guideline, funds a clinical trial or regulates all medical products.
- Treat WHO constitutional membership, WHO operational region, PAHO membership and WHO country office presence as **four different dimensions**.

## Health and population dimensions
The seven exact condition keys are `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`. None is proof of a confirmed diagnosis. Country of publication, study location, jurisdiction, self-identified ancestry and genetically verified variants belong to distinct evidence-ledger fields, not to organization network edges.

## Integrity checks
- Unique key proposal for relationships: `from_id + to_id + relationship_type + country_area_m49 + valid_from + as_of` (using a durable surrogate edge ID is preferable at integration stage).
- Do not allow simultaneous non-overlapping WHO region assignments for the same territory/date without review.
- Never substitute `covered_by` for `member_of`, or vice versa.
- Every future model of an inferred overlap should record the input source IDs and be marked derived rather than `VERIFIED_PRIMARY`.

## 2026-11-05 additions

The captured canonical UN overview crosswalk has 248 rows; the legacy 249 ISO seed retains code 158 as a separately documented exception. Do not label every retained seed code a canonical UN roster entry. New unknown date values are literal unknown; unreviewed region/source/flags are not_verified. These supplement legacy empty cells without changing their historical meaning. Country-office presence uses a separate stable-ID table; profile links or aggregate office counts cannot create country-specific office records.

## Profile metadata and source-label audits after batches4–6

who_region_profile_checks.csv records explicit M49 and WHO regional metadata from individual country profiles; it never assigns constitutional membership. who_region_name_matches.csv retains WPRO original labels and reviewed UN-name joins, with no fuzzy matching. who_region_unresolved_queue.csv enumerates exactly the not_verified status IDs; a pending row is not an absent relationship. Source-conflict ledger entries are not evidence for current assignments. WHO occupied Palestinian territory operational designation and UN State of Palestine code275/PSE are separate labels joined only for the sourced regional record.
