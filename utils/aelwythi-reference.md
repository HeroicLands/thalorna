# Language-note lookup

`assets/content/Skills/Languages/Aelwythi.md` is the canonical Aelwythi
resource. Its existing `data.words` frontmatter supplies vocabulary, modern
meanings and attested variants. Its anchored prose supplies pronunciation,
grammar, naming conventions and examples. Grammar tables remain in that
prose and are read directly when the tool runs. The parsed table records exist
only in memory.

The note describes the language. Instructions for tools and translation
workflows belong in this utility documentation.

## Read the linguistic guide

From the repository root, with Node 24 or newer and the repository's installed
`yaml` dependency:

```sh
node utils/aelwythi-lookup.mjs --guide
```

The tool extracts the note's anchored pronunciation, writing rules and naming
sections. It returns their authored prose, with wikilinks rendered as readable
labels and publication div wrappers removed. Fenced examples and SQL queries
are excluded. Vocabulary frontmatter and native glyph data are not printed.

For translation, read or supply that prose as the language reference, then
retrieve relevant words with the queries below. Preserve person, addressee
number, tense, aspect, modality, negation and intended meaning. If modern `you`
is ambiguous between one person and several, establish the addressee number.
Keep prose as prose and preserve the requested verse constraints. The authored
Aelwythi rules take precedence over generic Shakespearean style.

Ordinary English words use the historical readings specified by the note;
coined forms use its fixed pronunciation rules and foreign names receive
pronounceable Aelwythi adaptations. The frozen English spelling database serves
collision checks. It does not supply Aelwythi meanings, grammar or permissible
usage, and the lookup tool does not read it.

## Retrieve words and meanings

```sh
node utils/aelwythi-lookup.mjs saith
node utils/aelwythi-lookup.mjs permission
node utils/aelwythi-lookup.mjs "a gift presented" --limit 5
node utils/aelwythi-lookup.mjs \
  --note assets/content/Skills/Languages/Aelwythi.md \
  --limit 10 say
```

The default `--note` path is the canonical Aelwythi note. Every query reads its
current frontmatter and body. Queries do not write files or create a generated
reference asset.

Queries are case-insensitive and normalized to NFC. Exact cited forms, exact
variants and exact present-table forms are combined, with cited forms ranked
first, then variants and explicit paradigms. An entry is returned once by its
positional id. Separate records with the same spelling remain separate senses.
An exact noun does not hide another verb's attested inflection of the same
spelling. If no exact match exists, lookup searches whole terms in modern
glosses, ranking exact complete glosses first. It does not stem words, guess
conjugations or substitute a correction for an unknown form.

For `saith`, the response includes the source's `say` record, its variant list,
the explicit present table row and relevant anchored prose. An unsupported
`sayeth` gives no match rather than being silently interpreted as `saith`.

A flat variant list does not assign grammatical roles. A listed `said` is not
on that evidence alone labelled as past tense or participle. The authored
present table explicitly supplies `say`, `sayst`, `saith` and `sayen`. An absent
form is not explicitly attested in the lexical data, but the authored regular
agreement rules can still license its formation. Explicit forms take precedence;
translation must not invent exceptional forms or undocumented variant roles.

## Source data and output

The tool preserves every lexical form, class, modern gloss, variant, field,
concept or concepts, pronunciation and note. A single gloss is presented as a
one-element `glosses` array; multiple glosses remain separate strings. Native
script writings are omitted from the Roman lookup response. Runtime positional
ids identify source-order entries and change when earlier records are inserted.

Results are JSON containing `query`, `found`, `match`, `total`, `truncated`,
`entries`, `paradigms`, `modals` and `guidance`. Guidance items contain the real
source `anchor` and its authored prose `text`. Present-table column labels and
forms are preserved exactly. Nothing is added to the source note.

The default limit is ten lexical records; `--limit` accepts integers from one
to one hundred. `total` reports the matching lexical count before limiting;
`truncated` identifies a limited result. An unsuccessful query returns
`found: false`, `match: none` and empty results.

Exit statuses are `0` for a match or guide output, `1` for an invalid or
unreadable note, `2` for invalid usage and `3` for a query with no match. A caller
should read the JSON from status `3` as an ordinary lookup outcome. Diagnostics
identify the note and include the available source position. Malformed YAML,
invalid lexical records, duplicate explicit anchors and unresolved local
anchor links are errors.

## Reusable source anchors

The lookup helper uses the existing language-note frontmatter shape. Another
`skill` / `language` note can be selected with `--note`; it does not need English
pronouns, verb endings or paradigms. Optional body anchors expose the relevant
source prose and tables:

| Anchor                              | Source content                                             |
| ----------------------------------- | ---------------------------------------------------------- |
| `#pronunciation`                    | Complete pronunciation section                             |
| `#english-pronunciation`            | Conventional English historical readings, where applicable |
| `#coined-pronunciation`             | Fixed coined spellings                                     |
| `#vowels`, `#consonants`, `#stress` | Sound and stress details                                   |
| `#foreign-names`, `#naming-palette` | Name adaptation and preferred forms                        |
| `#writing-rules`                    | Writing and punctuation conventions                        |
| `#present-agreement`                | Agreement prose, optional `Verb` and `Use` tables          |
| `#modals-and-questions`             | Modal/question prose and optional `Modal` table            |
| `#vocabulary-and-meaning`           | Meaning distinctions and word order                        |
| `#register`                         | Register and verse conventions                             |
| `#speech-and-emphasis`              | Speech, emphasis and optional worked `Meaning` table       |
| `#names`                            | Naming traditions                                          |

The table's first header identifies its role. Remaining column labels and all
forms come from the authored table, without an English person or tense model
being imposed. Absent tables produce no paradigms. Guidance refers only to
anchors present in the selected note. `--guide` returns the relevant anchored
linguistic sections; a note with none of those anchors returns its prose with
publication fences removed.

These anchors organize ordinary linguistic sections. The note does not contain
programmatic instructions, model prompts or custom generated-reference keys.

## Verification

```sh
node --test utils/aelwythi-reference.test.mjs
```

The focused checks derive the expected lexical inventory and explicit paradigms
from fixture notes. They also cover same-spelling senses and inflections,
whole-term meaning search, source immutability, malformed data and anchors,
linguistic guide extraction, and another language without English paradigms.
