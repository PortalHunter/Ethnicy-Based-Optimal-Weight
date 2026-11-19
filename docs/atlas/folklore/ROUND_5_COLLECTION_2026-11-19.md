# Folklore discovery — round 5, 2026-11-19: verified catalog locations and variant leads

## Exact snapshot boundaries

The [2026-11-18 frozen 903-row manifest](intake/catalog-manifest-2026-11-18.json) remains intact. New [2026-11-19 manifest](intake/catalog-manifest-2026-11-19.json) records **1,013 metadata rows**: 903 prior + 110 newly indexed.

| New batch | Rows | Type | Distinctiveness |
|---|---:|---|---|
| [Irish 1912 and 1893 collections](intake/catalog-irish-narrator-provenance-2026-11-19-batch-005.csv) | 44 | 26 `Folk Tales of Breffny` stories; 18 `West Irish Folk-Tales and Romances` stories | The Larminie 1893 table prints named narrator and locality for each of its 18 stories. Hunt 1912 acknowledges a principal older teller and friends but does not attribute each title to an identified narrator. |
| [Flemish printed collections](intake/catalog-flanders-printed-2026-11-19-batch-006.csv) | 47 | 24 `Beasts & Men` (1918) animal and fairy stories; 23 `Christmas Tales of Flanders` items | Regional edited English books; source-genealogy and original Flemish storyteller still unknown. Many are excellent negative controls for overinterpreting animal fables as medicine. |
| [Furness 1899 Borneo passage index](intake/borneo-furness-1899-passages-2026-11-19-batch-007.csv) | 17 | 17 distinct numbered or located passages in **one single book** | Distinguishes Kayan, Baram and Rejang claims and caveats. **Not 17 independent witnesses.** Colonial source and modern cultural governance review are especially important. |
| [Original-language Philippine work leads](intake/philippines-original-language-work-leads-2026-11-19-batch-008.csv) | 2 | `El Folk-lore Filipino` Tomo I in Spanish / local vocabulary; `Ibong Adarna` in historical Tagalog spelling | These are *work-level* source leads, not individually attested oral stories. Original published dates, comparison editions, and derivative relationships remain unresolved. |

**Latest total: 1,013 unique internal record identifiers; 25 unverified variant/source-dependency watchlist groups.** Neither number counts confirmed independent oral storytellers or scientific medical signals. Multiple story records point at the same book URL and may be copied from one another.

## Five especially useful directions (interpretations deferred)

1. **Irish: Kate Ellen's Wake — Bampton Hunt 1912 p.21.** Narrative describes fluttering of heart, apparent death-like periods, and drowning dreams, embedded in fairy lore. It is a folkloric story, not clinical observation. Compare narratorial context before hypothesizing sleep, heart rhythm, fainting, trance or anything else. The source alone does not establish literal medical events. Original: https://www.gutenberg.org/files/54724/54724-h/54724-h.htm
2. **Irish: Morraha — William Larminie 1893 p.10.** Table explicitly names P. M'Grale of Dugort, Achill Island as the narrator. Joseph Jacobs 1894 `More Celtic Fairy Tales` indexes the same title. Investigate **possible reuse of the same oral witness**, not automatic corroboration. Original: https://www.gutenberg.org/cache/epub/57858/pg57858-images.html
3. **Borneo: Gamong — Furness 1899 pp.18–20.** A Kayan legend claims fever, death, a three-day spirit journey, and reawakening. The *author* states he received the account orally from a Kayan person of Tinjar Valley. Record it as a legendary resurrection claim, not documented near-death physiology, infectious disease, or diagnostic evidence. Source: https://www.gutenberg.org/cache/epub/30233/pg30233-images.html
4. **Flanders / Norway: Why Bear Has a Stumpy Tail.** An analogous etiological animal fable appears in a Flemish edited anthology (1918 p.168) and a 19th-century English translation from Norwegian collectors. This is a **negative control** to test whether our research erroneously treats common motif repetition as independent scientific observations. Source: https://www.gutenberg.org/files/46960/46960-h/46960-h.htm ; https://www.gutenberg.org/ebooks/8933
5. **Philippines: `Ibong Adarna`.** A historically spelled Tagalog printed corrido is available as a dedicated text (Project Gutenberg 16157), whereas Fansler 1921 cites two `Adarna Bird` versions in editorial notes. Do not assume these are different oral witnesses or that the song of a magical bird constitutes a biomedical remedy. Sources: https://www.gutenberg.org/ebooks/16157 ; https://www.fulltextarchive.com/book/Filipino-Popular-Tales/

## Method notes worth retaining

- Source dates: Bampton Hunt 1912, William Larminie 1893, Furness Borneo sketch 1899, de Bosschère 1918. `Christmas Tales of Flanders` publication year was **not established** in this batch, and is explicitly left unresolved.
- Historical English (or Spanish) editions differ from original-language telling. The named Irish narrators are printed provenance leads, *not* permission to identify any living descendant or community members.
- Colonial-era descriptions often essentialize or mistranslate Indigenous communities. If a passage has mixed group labels, do not infer it represents the entire region or all speakers of a language.
- Indigenous birth, healing, death and ritual narratives can be culturally sensitive. Limit public GitHub to source links, non-sensitive catalog metadata and restrained summaries; obtain community consent and respect restrictions before storing more detailed original accounts or making datasets.
- A possible health-like detail is a hypothesis prompt only. Historical names like `fever`, `death`, `illness` may not correspond to modern diagnoses. Supernatural causation, miraculous resurrection and healing remain narrative elements.
- Distinguish direct attestation, fiction, author's speculation, scholarly paraphrase, derivative translation and oral family retelling. Represent unknown relationships as unknown.
- Keep nonmedical fables as controls; test model propensity to hallucinate rare conditions from improbable fairy-tale events.

## Follow-up tasks

1. Source-check direct dependency Larminie 1893 → Jacobs 1894 `Morraha` with notes and text comparison; do not count duplicate retellings as independent.
2. Find original Flemish versions and narrator details for the two Belgian volumes, differentiate `Christmas Tales` translations and original local traditions.
3. Trace Furness (1899) Kayan, Dayak/Baram and Rejang creation variants through community-led archives, rather than extracting ritual knowledge wholesale.
4. Analyze Tagalog `Ibong Adarna` edition chronology and compare to Fansler 1921 bibliography; original Spanish `El Folk-lore Filipino` may contain relevant cross-references but chapter content has not been screened.
5. Run an expert-controlled, culturally respectful medical-feature screening only after explicit source and rights review; do not use it to alter clinical Atlas.
