<!-- SPDX-License-Identifier: CC-BY-SA-4.0 -->

# Setting checks for proposed place names

`utils/setting-checks.mjs` supplies the five checks a place-name proposer
needs before it accepts a candidate: `spelling`, `language`, `earthWords`,
`earthNames` and `indexedNames`. Each is a synchronous callback called as
`(candidate, context)`. The factory runs only when an author or a tool calls it.
No lint, build or CI step calls it, and it generates no names and writes no
notes.

## Supported scope

A candidate is one plain opening element followed by one plain closing element
of a supported language note. The supported languages are Eilwìthi
(`skill-aelwthlng`, language code `aelw`) and Dunhari (`skill-dunharlng`,
language code `dunh`); `SUPPORTED_LANGUAGES` lists them, and the language a
context names is matched by package, type, subtype, shortcode and language code.
For each language:

- the opening element's `position` is `opening` or `either`, and the closing
  element's is `closing` or `either`;
- each element's `kind` is `place` or absent, and neither carries a `joining`
  form;
- the language's `data.naming.draws` holds one `place` draw that permits
  `place` elements.

Each language is read from its own record and carries its own vowel groups and
model-language lists. A language whose record is absent from the index, or whose
model-language lists are not supplied, is unavailable on its own: the other
supported language keeps its verdicts.

The elements are resolved from the captured language record's declarations at
the indexed positions, never from the context's own fields. A link element, an
element limited to given names or bynames, an element in the wrong position, an
element with a joining form, any third language and any other composition is
outside the scope. Every callback returns `{available: false, check, reason}`
for an out-of-scope context before it judges the candidate; it never reports a
pass. A candidate that differs from the composition of a supported pair is in
scope, and the `language` callback reports it as available and invalid. Because
the scope is resolved from the index, every callback needs the `index` resource.

## Inputs

Importing `utils/setting-checks.mjs` reads no content, scans no directory and
does not depend on the working directory. The factory performs no I/O: it takes
preloaded resources and snapshots them at setup, and it never reads a resource
again. Two ways supply the resources, and the factory treats them alike.

**Explicit files.** `loadSettingCheckResources` reads only the files and
directories it is given, each within a size limit, and returns
`{resources, problems}`:

```js
import { createSettingChecks, loadSettingCheckResources } from "./utils/setting-checks.mjs";

const { resources, problems } = loadSettingCheckResources({
  guideFile: "/path/to/Pronouncing_Thalorna.md",
  englishWordsFile: "/path/to/english-words.json",
  englishSourcesFile: "/path/to/english-words.sources.json",
  indexFile: "/path/to/build/content-index/thalorna-metadata.jsonl",
  // wordlistDirs: ["/path/to/lists"],   only for a language that declares model lists
  // limits: { indexFile: 256 * 1024 * 1024 },
});
const checks = createSettingChecks(resources, { selected: chosenNames });
// checks.validators is { spelling, language, earthWords, earthNames, indexedNames }
```

A file that is not named, cannot be read, is above its limit or does not parse
leaves its resource out and adds a line to `problems`; the callbacks that need
it return `{available: false}`.

Each file is opened once. The loader takes the file's status from that same
descriptor and requires a regular file, so a directory, FIFO, device or a link
to one is refused and cannot block the read. It checks the size against the
limit, then reads at most one byte more than the limit from that descriptor and
refuses the file if more arrive, so a file that grows after the size check
cannot exceed its bound. The digest covers exactly the bytes read.

The word-list directories are read in one bounded pass: at most
`wordlistEntries` directory entries and `wordlistDirs` bytes of `.txt` and
`.tsv` files in all, each file read once as above. The lists are parsed from
those captured bytes and the files are never read again; a path that is not a
directory is skipped. The digest covers the directory position, name, length
and bytes of every file read, in order.

The default limits (`DEFAULT_LIMITS`) are 4 MiB for the guide, 64 MiB for the
English list, 1 MiB for its source manifest, 512 MiB for the index, 512 MiB in
total for the word-list directories and 10,000 word-list directory entries.
`limits` overrides them by option name. An override is a non-negative integer;
any other value (`undefined`, `NaN`, `Infinity`, a negative or fractional
number) is a problem for the resource it bounds, which is then left out, and
never disables the limit. The `earthNames` resource needs no file: its matcher
is built in memory, and the only other read is the manifest of the installed
`countries-list` package, which gives its version.

**Captured data.** A caller that has already read and snapshotted its inputs
passes them as the `resources` object directly, with no loader. The factory
copies what it needs, so the objects may be frozen. Resources passed to
`createSettingChecks` are used as given; nothing is merged with a loaded set.

`createSettingChecks(resources, { selected })` reads only what it is given:

- **`resources`** holds the resources below. Each carries an `id` of
  `{name, version, source}`, every part a nonempty string. A resource's content
  is identified by a SHA-256 digest: `id.digest` when the loader or caller states
  it (`sha256:` and 64 hex digits), otherwise a digest the factory computes from
  the data. The loader states the digest of the exact bytes it read. Every
  result's `resource` evidence and `checks.resources` repeat each identity with
  its digest, so the caller compares them with its own captured session. A
  digest that is not well formed makes the resource unavailable.
- **`selected`** is the list of names the current operation has already chosen:
  an array or a `Set` of nonempty strings that the caller keeps up to date, or a
  function returning one. A string, an iterator or generator, a `Map` or any
  other value, and a non-string member, make `indexedNames` unavailable.
  The proposer's context carries no selected names, so the caller passes the same
  list as the proposer's `exclusions` and as `selected`.
  It is read at every `indexedNames` call, so a name selected after the factory
  was built still collides. An empty list is stated explicitly as `[]`.

Each callback receives the candidate and a context. The context identifies the
indexed language record (`package`, `type`, `subType`, `shortcode`,
`languageCode`) and carries `elements`, the opening and closing components as
`{index, form}`, where `index` is the position in the language record's
`data.elements`. The proposer supplies both.

## Resources and their sources

| Resource         | Shape           | Source                                                                                                                                                                                                      | Needed by      |
| ---------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `guide`          | `{id, text}`    | The Pronouncing Thalorna note, from `guideFile`.                                                                                                                                                            | `spelling`     |
| `englishWords`   | `{id, words}`   | `englishWordsFile`, the English spelling list (`assets/data/english-words.json`); its `id.version` names the baseline word list that `englishSourcesFile` records.                                          | `earthWords`   |
| `earthWordLists` | `{id, earth}`   | The model-language lists of `lint:earth-words`, loaded from directories the caller names. Needed for a language that declares model lists, which Dunhari does (Persian and Arabic); Eilwìthi declares none. | `earthWords`   |
| `earthNames`     | `{id, matcher}` | The matcher of `lint:earth-names` and the `countries-list` version it reads.                                                                                                                                | `earthNames`   |
| `index`          | `{id, records}` | The records of `indexFile`, the standard `build/content-index/thalorna-metadata.jsonl` written by `npm run build:content-index`.                                                                            | every callback |

## What each callback checks

Every result carries `check` (the callback's name), `resource` (the identities
of the resources it read) and `evidence`, a list of `{rule, ok, ...}` entries.
`valid` is true only when every entry is `ok`.

- **`spelling`** applies the governing pronunciation guide through the
  repository's own guards. The candidate is one written word (letters and marks
  only); it passes the spelling guard's alphabet, mark and `y` rules, has no
  closing `ay`, `ey` or `oy`, and has no diaeresis that changes nothing. The
  guard's `held` respellings do not apply to a new name.
- **`language`** reads the context's language record from the captured index. The two
  elements must be the language's own declarations at the indexed positions and
  compose the candidate exactly; every letter of the candidate is in the
  language's declared `roman` inventory; the candidate is not one of the
  language's `data.retired` forms; and it is not already a recorded word,
  variant, plural, name or register name of the language. The language's
  prose is never read.
- **`earthWords`** rejects a candidate that is a whole word of the English
  list, with and without its accents. For a language that declares model
  languages in the Earth-word guard, a whole word of each model list is a
  collision too. A Dunhari verdict names the model-language lists among its
  `resource` identities.
- **`earthNames`** applies the Earth-name guard to the candidate written with an
  initial capital, as the setting writes a name: countries, capitals,
  continents, languages, peoples, religions, persons and works of fiction, the
  Greek names, and the reader's own languages.
- **`indexedNames`** rejects a candidate whose name equals any name in the
  captured index. Names are compared with case, accents, spaces, hyphens and
  apostrophes removed, so `Stoniwold`, `Stoni Wold` and `Stoni-wold` are one name.
  The names read are a note's `full`, `sort`, `given` and `clan` names, its
  aliases and other language forms, the typed name spans the index records for
  its prose, every language's `register` and `data.names` entries, and the
  `settlement` of each row of a polity's declared `data.settlements`. A name
  already selected in the same operation collides as well. The match is on the
  whole name; no prose is read.

The personal-name drawer is not consulted, and no language rule is inferred
beyond the declared data.

## Not checked

The five callbacks enforce declared data and the repository's existing guards.
They do not enforce:

- the language's flavour palette, which is prose; a candidate inherits it only
  by being built from declared elements. The proposer's contract places flavour
  and shape constraints under `language`, and neither language declares them as
  data;
- stress across the composed name;
- readability where the two elements join: names such as `Highhaugh`,
  `Ashhaugh` and `Kolddale` pass all five callbacks;
- the model language's syllable-count weighting across the tongue's names;
- Earth place names below country and capital level, such as `Ashdale`,
  `Irondale`, `Kingford` and `Highmoor`;
- gaps in the English word list, such as `stormwater`;
- the corpus-wide retired names that the utility tests sweep; only the
  language's own `data.retired` forms are consulted.

The captured index is not tied to the content tree. A stale index silently
misses names authored after it was built, so the caller supplies an index built
from the current tree in the same operation. The standard index carries no
commit or timestamp, so the index is identified by the digest of its content.

## Unavailable cases

A callback returns `{available: false, check, reason}` when it cannot decide,
and the proposer treats that as a missing check, never as acceptance. That
happens when:

- a resource it needs is absent, has no full `id`, is empty or malformed, or is
  a promise rather than loaded data;
- the guide declares no alphabet, or the English list holds no word;
- the Earth-name matcher is not a global pattern;
- the captured index has no language record for the supported language the
  context names (`aelwthlng` with language code `aelw`, `dunharlng` with
  `dunh`), or that record lacks its `roman`, `elements` or place draw;
- an element in the context is not the language's declaration at its index;
- the candidate is not a nonempty string, or the context is outside the
  supported scope;
- `selected` is absent, throws, is not an array or a set (a string, an iterator, a promise), or contains a non-name;
- the context's language declares model lists (Dunhari does) and
  `earthWordLists` is absent or lacks one of them; Eilwìthi needs no such lists.

A callback never throws and never returns a promise or thenable. An error inside
a check is reported as unavailable.

## Results

```js
{ available: true, valid: true, check: "indexedNames",
  resource: [{ name: "content-index", version: "sha256:…", source: "build/content-index/thalorna-metadata.jsonl" }],
  evidence: [{ rule: "unique-name", ok: true }] }
```

A rejection lists what it found in the failing entry: the `issues` of a
spelling, the `outside` letters of the roman inventory, the `hits` of an
Earth-word list, the `findings` of the Earth-name guard, or the `matches` of
the index, each with the matching name, its `kind` (`name`, `alias`,
`name-span`, `register` or `selected`) and, where it has one, its note address.

The returned object also lists `resources` (the identities each callback read,
the model-language word lists included when a supported language uses them),
`unavailable` (the reason each callback is unavailable for every language, from
a resource that every language needs) and `languages`. `languages` holds one
entry per supported language, `{shortcode, languageCode, address, unavailable}`,
whose `unavailable` maps each callback that cannot give a verdict for that
language to its reason: a missing language record, missing model-language word
lists, or a resource shared by every language.

Pass `checks.validators` as the `validators` of the proposer.

## Tests

`node --test utils/setting-checks.test.mjs` covers accepted and rejected
candidates for each callback, every unavailable resource, and the refusal of
asynchronous or throwing inputs. `node --test utils/setting-checks-dunhari.test.mjs`
covers the Dunhari language: declared and wrong compositions, name collisions,
model-language word lists, a language record missing from the index, undeclared
elements, an unsupported third language and a malformed guide. Both run with the
other utility tests.
