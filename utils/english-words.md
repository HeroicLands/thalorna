# Local English word list

`generate-english-words.mjs` creates one JSON string array containing English
spellings from `wordlist-english` and historical dictionary records. The local
output is `assets/data/english-words.json`. Run the generator from the repository
root with Node 24 or newer. Its implementation uses only Node built-ins.

The array is lowercase, normalized to NFC, sorted and deduplicated. Letters,
diacritics and apostrophe spellings are preserved. Consumers load the array into
a `Set` when checking a proposed, unrecorded coinage for whole-word collisions.
Recorded Aelwythi vocabulary, registered names and explicit exceptions remain
authoritative; membership does not invalidate them. This data records spellings, without
definitions or pronunciation instructions.

## Baseline

Pass the directory of an installed `wordlist-english` package:

```sh
node utils/generate-english-words.mjs \
  --base node_modules/wordlist-english
```

An unpacked npm tarball also works and requires no project dependency change:

```sh
mkdir -p build/english-input
npm pack wordlist-english@1.2.1 --pack-destination build/english-input
tar -xzf build/english-input/wordlist-english-1.2.1.tgz -C build/english-input
```

The generator reads the package's JSON data files directly. It combines the
shared English, American, British, Canadian and Australian lists and executes
none of the package's JavaScript. A package directory must identify itself as
`wordlist-english` and provide all five dialect groups. Use a pinned version for
repeatable membership. A JSON array of strings is also accepted as `--base`.

Every baseline word remains in the merged output. Normalization can combine
spellings that differ only by case or Unicode composition.

## Historical sources

Obtain Wiktextract JSONL from the [Kaikki raw data download page](https://kaikki.org/dictionary/rawdata.html).
Keep the downloaded input under `build/` or another local input directory.
Kaikki's raw English-Wiktionary extraction contains records for multiple
languages; the generator selects English (`en`) and Middle English (`enm`).
The [Wiktextract project](https://github.com/tatuylonen/wiktextract) documents the
source data. The generator does not download any file.

For a complete raw dump:

```sh
node utils/generate-english-words.mjs \
  --base build/english-input/package \
  --input build/english-input/wiktextract.jsonl.gz
```

For local source subsets, repeat `--input`:

```sh
node utils/generate-english-words.mjs \
  --base build/english-input/package \
  --input build/english-input/archaic.jsonl \
  --input build/english-input/obsolete.jsonl \
  --input build/english-input/dated.jsonl \
  --input build/english-input/middle-english.jsonl \
  --out assets/data/english-words.json \
  --provenance build/english-words.sources.json
```

The repository's cached inputs and reviewed additions are regenerated with:

```sh
node utils/generate-english-words.mjs \
  --base nogit/english-word-sources/wordlist-english \
  --input nogit/english-word-sources/archaic.jsonl \
  --input nogit/english-word-sources/obsolete.jsonl \
  --input nogit/english-word-sources/dated.jsonl \
  --input nogit/english-word-sources/middle-english.jsonl \
  --review utils/english-word-review.json \
  --provenance nogit/english-word-sources/english-words.provenance.json
```

This uses the default `assets/data/english-words.json` output. The cached
downloads and detailed provenance are local scratch; the maintained data keeps
its small source manifest and licence notices under `assets/data/`.

Inputs are read as streams. Files ending in `.gz` are decompressed; `--input -`
reads uncompressed JSONL from standard input. Standard input is accepted once.
Both raw dumps and source subsets must use one complete JSON object per line.
Blank lines are ignored. With no `--input`, the output contains the baseline
and any reviewed additions.

## Selection

- English headwords qualify when an entry or a sense is tagged `archaic`,
  `obsolete` or `dated`.
- Middle English headwords qualify by their language code.
- A form qualifies when it carries one of those historical tags, its complete
  entry carries one of them, or its entry is Middle English. One historical
  sense alone does not classify every form of an otherwise current headword.
- A `historical` topic label alone is insufficient: a current word describing
  a historical subject is not thereby an obsolete spelling.
- Proper names, abbreviations, roots, affixes, phrases and symbols are excluded
  from the historical selection. A word can still qualify under a separate
  ordinary lexical entry. Baseline membership is preserved regardless of this
  historical filter.
- Selected spellings contain Unicode letters and combining marks, optionally
  joined by apostrophes or hyphens. Leading and final apostrophes are accepted
  for attested contractions and possessives. Bound leading or final hyphens,
  spaces and digits are excluded from historical candidates.

The result is an inventory of attested English spellings to reserve against
coining. It is not a list of words approved for a particular historical period
or for Aelwythi prose. A label does not establish a date of use; Middle English
membership does not establish that a form belongs to late Middle English.
Admitting a contraction to this collision list does not authorize it in the
Aelwythi writing register. No suffix is appended to manufacture an inflection.

## Reviewed additions and exclusions

Use a small JSON file for documented gaps and editorial exclusions:

```json
{
  "additions": [
    {
      "word": "speaketh",
      "source": "The Aelwythi language note's English present-tense inflection rule"
    }
  ],
  "exclusions": []
}
```

Pass it as `--review assets/data/english-words.review.json`. Only `additions`
and `exclusions` are accepted. Each addition contains `word` and a nonempty
`source`; an exclusion is a string. The same normalization applies to both.
Exclusions can remove historical candidates or reviewed additions. An attempt
to exclude a baseline word is an error. Definitions are unnecessary; the source
identifies why an editor treats a spelling as English.

## Provenance and fixed snapshots

`--provenance <path>` writes a separate JSON report. It records source file
hashes, the baseline package version and its `Copyright` text when supplied
by an unpacked package, per-word evidence with source line numbers, reviewed
decisions, and Wiktionary attribution and licence references. Large datasets
produce large evidence reports, so keep detailed reports under `build/` and
retain the source download URLs, hashes and licence notices with the maintained
word-list data. Preserve the applicable source attribution and licences when
distributing generated data.

The historical inputs are a fixed snapshot. There is no periodic refresh of
the database. Regeneration reproduces the local word list from those same
inputs; a documented correction or an authored Aelwythi inflection can be
recorded in the review file as an explicit editorial change. Generated JSON
contains no timestamp. Identical input spellings and review decisions produce
identical word-array bytes; provenance also depends on the input paths and
file bytes. Translation guidance comes from the authored Aelwythi language
note, not from this spelling list. The [language lookup utility](aelwythi-reference.md) reads that note directly
for meanings and usage.

Invalid JSON, invalid relevant dictionary records, failed gzip decompression,
and invalid review files leave existing outputs untouched. The generator also
refuses outputs that alias an input or each other. Both output files are staged
before either existing destination is replaced. Errors identify their input
file and include the available line and column. Exit status is `0` for success,
`1` for input or output failure, and `2` for invalid command usage.

## Verification

```sh
node --test utils/generate-english-words.test.mjs
```

The focused checks cover dialect merging, historical entry and form selection,
normalization, streaming gzip and standard input, reviewed decisions, malformed
inputs, output preservation and path aliases.
