# Research atlas presentation specification

The default experience is a searchable table. The map is an optional synchronized view of the same filtered records. Both show documented research coverage, institutional locations and evidence status. Users can complete the same tasks in either mode.

| View element | Data and behavior |
| --- | --- |
| Area layer | Use `map_coverage.csv` on `m49`. Keep ISO-only intake outside the official M49 layer. Areas with incomplete evidence receive text labels for their disposition and a distinguishable hatch. |
| Area details | Show governmental authority, documented scope, unresolved issues, separate WHO assignment and date. Shared authorities link to each supported scope with its evidence. The disputed-territory label describes the documentation without deciding sovereignty. |
| Institutions | Filter by organization type and recorded location or scope. Domicile, jurisdiction and cross-border services are distinct columns or selectable layers. Center a marker only when approved geocoding is available. The initial dataset uses area-level views. |
| Publications | Show title in its original script with declared translation, venue, publisher, review state, source and access limits. Journal publisher area, article study area and original issuer are separate. Raw leads are available only in an explicitly labeled research queue. |
| Networks | Typed links show membership, voluntary participation, operational office, legal/regulatory remit or cooperation with a source date. PAHO and WHO AMRO have distinct roles and an explicit operational link. Use a single display entry when collapsing role aliases. |
| Conditions | Join `condition_availability.csv` by M49 and condition. Distinguish qualified sources, bounded search, unresolved publisher and unsearched combinations. Counts are records in this intake. Empty and zero counts display “No record established in this handoff” where applicable. |
| Evidence links | Show an accessibly named “Source” action, original-language title, date, exact bounded assertion, and an issue link for correction. Escalation and legal review states stay visible. |

## Searchable table

Use a native HTML table with caption, column headers, sort announcement and keyboard-operable search and filters. Search area name, M49, ISO, original-language institution names and translated labels. Preserve the source string when accent-insensitive search finds it. Announce the filtered result count politely. Offer pagination or a stable rendered page size. Retain focus after updates and return it to the triggering control after closing details.

## Map interaction

Offer controls for zoom, pan, reset, selected area and layer changes. Every mouse-only or gesture action has a keyboard alternative. An area selection links to its corresponding table row. Provide a text legend and redundant shapes or patterns, visibly focused controls, contrast across states, text enlargement and reduced-motion support. Use native buttons for map controls and no hover-only details. Include small territories in the searchable list even when a point is difficult to select on the map. Add a non-sovereignty boundary note near map controls.

Check keyboard traversal, screen-reader result announcements, searching in original script, zoom and narrow layout, text contrast, reduced motion and non-color state detection during implementation. Use the [WCAG 2.2 specification](https://www.w3.org/TR/WCAG22/).

The public research-index projection excludes candidate clinical statements, ancestry filters that imply population risk, individual health inputs and private data. Unknown coverage stays visible throughout. Geographic selection controls evidence discovery and has no effect on an individual's calculated health results.
