# Writing in the tongues of Thalorna

This guide states how to write words, names, passages and verse in the
invented languages of Thalorna, and how to draw them in the setting's scripts.
It is for human authors and for agents, and it is written so that a reader who
has only this guide, the language note of the tongue in question and the
repository's commands can produce a correctly marked passage that passes every
check.

It states rules. The mechanism behind the markup, the mapping notes and the
checks belongs to `@heroiclands/package-build`, and its guide, `docs/guides/writing-in-invented-scripts.md`
(installed under `node_modules/@heroiclands/package-build/docs/guides/`), is the
reference for how a mapped run is converted and which finding each fault
produces. This guide does not restate the mechanism. It states what Thalorna
decides, where each decision lives, and what to run.

## Contents

1. [The rules at a glance](#1-the-rules-at-a-glance)
2. [The standard roman spelling](#2-the-standard-roman-spelling)
3. [How a language note defines its language](#3-how-a-language-note-defines-its-language)
4. [Stress as data](#4-stress-as-data)
5. [Coining a word](#5-coining-a-word)
6. [The core vocabulary and the `core` report](#6-the-core-vocabulary-and-the-core-report)
7. [Registering a name](#7-registering-a-name)
8. [Scripts, fonts and mappings](#8-scripts-fonts-and-mappings)
9. [Marking text](#9-marking-text)
10. [What the build checks on a mapped run](#10-what-the-build-checks-on-a-mapped-run)
11. [Verse](#11-verse)
12. [Scripts written in columns, and the `scroll` fence](#12-scripts-written-in-columns-and-the-scroll-fence)
13. [Logographic writing: Zethu](#13-logographic-writing-zethu)
14. [Typing natively](#14-typing-natively)
15. [The workflow for writing a passage](#15-the-workflow-for-writing-a-passage)
16. [The guards an author runs](#16-the-guards-an-author-runs)
17. [Common mistakes](#17-common-mistakes)

## 1. The rules at a glance

Each rule has one home. A fact that a check or a generator reads is a declared
key in frontmatter, and prose is never parsed for it.

| Rule                                                                                                                          | Where it lives                                                    | What enforces it                                                    |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------- |
| One sound, one spelling, no silent letters, for every tongue                                                                  | `assets/content/Lore/Pronouncing_Thalorna.md`                     | The author, and `data.sounds` in each language note                 |
| Each tongue has its own flavour: favoured sounds, endings and shapes, and what it leaves out                                  | The language note: `data.sounds` for data, its prose for the rest | The author; the owner's approval of every coinage                   |
| A word that a tongue's model language writes whole is replaced                                                                | `SOURCES` in `utils/earth-words.mjs`                              | `npm run lint:earth-words`                                          |
| A word a passage uses is in the language's lexicon first                                                                      | `data.words` in the language note                                 | `package-build lint`, on every mapped run                           |
| A name a passage uses is in the language's register first                                                                     | `data.register` in the language note                              | `package-build lint`, on every mapped run                           |
| A text is marked by what it is: `lang=` its language, `font=` its face, `map=` the rewrite into a script                      | The attribute block of a span, a `:::` block or a fence           | `package-build lint`, the site, the Foundry compile and the book    |
| A script has one mapping note, shared by every language written in it                                                         | `assets/content/Lore/Scripts/`                                    | `package-build lint`                                                |
| A mark that changes nothing is left out                                                                                       | Every script and mapping                                          | The author                                                          |
| Mood, questions and quotation are carried by words, not marks, unless a tongue's own note says its scribes use a mark         | The tongue's note                                                 | `package-build lint`: a mark with no row in the mapping is an error |
| Nothing is required to be complete: gender, plurals and verb patterns exist only where a note states them                     | The language note                                                 | No check demands a form                                             |
| The language system does not grow: before adding a rule, a key or a check about an invented language, ask if a player notices | This guide                                                        | The owner                                                           |
| The owner approves every coinage                                                                                              | [Coining a word](#5-coining-a-word)                               | Review                                                              |

**A script is not a language.** Several tongues share one script, as many
Earth languages share the Latin alphabet. A script has one mapping note, and
what differs between the tongues written in it is their dictionaries. A tongue
that borrows a script may give a glyph a different sound or meaning, and add a
few glyphs of its own where it needs them.

**Chance resemblance to an Earth script is no defect.** A glyph is never
redrawn or restricted because it resembles a letter or sign of Earth.

**Grukar has no spoken words.** The Grukar converse by body language and scent,
with grunts, growls and bellows for emphasis, and have no script. Their language
note states no `data.words`, and a passage never gives them words.

## 2. The standard roman spelling

Every tongue of the setting is written in roman letters by one guide,
`assets/content/Lore/Pronouncing_Thalorna.md`. The peoples write in their own
scripts, and the roman spelling is the transcription every reader learns once.

The rules of the guide:

- **One sound, one spelling.** Each vowel letter has one sound, and a final _e_
  is never silent. Vowels are sounded one at a time unless they form a listed
  pair (_ai_, _au_, _ei_, _oi_, _ou_, the long _aa_, _ii_, _uu_, and _ie_, _uo_,
  _ae_). A pair that is not in the table is sounded apart, as in _Zoë_.
- **Some pairs belong to some tongues.** _ee_ and _oo_ are written only by
  Sinale and Sovidur, _ea_ only by Aelwythi, _ao_ only by Tantsou, _ui_ only by
  Tantsou and Jurthati. _bh_ is written only by a tongue whose own note says
  so. A letter pair outside the guide is used only by a language whose note
  allows it.
- **Consonants have their usual English values**, with the guide's points: _g_
  is always hard, _kh_ is the Scottish _loch_, _y_ is a consonant before a
  vowel and a vowel _i_ elsewhere, _ng_ may open a word. The letter _c_ appears
  only inside _ch_. The letter _x_ is never used.
- **No silent letters.** A word is written the way it sounds.
- **Stress** falls on the first syllable of a two-syllable word and on the
  second-to-last syllable of a longer word. See [Stress as data](#4-stress-as-data).
- **Marks.** A word carries at most one mark. An acute marks a stressed syllable
  the rule would not choose. A diaeresis marks a vowel sounded apart from the
  vowel before it. No other mark exists: no circumflex, grave, macron, tilde,
  umlaut or tone mark. A mark that marks neither stress nor a changed sound is
  left out.
- **The apostrophe** marks a catch in the throat. It is not a mark, and a word
  carries at most two.
- **Length** is written only by a doubled vowel. Tone and nasal vowels are not
  written.

**Worked example.** The guide's own words: _Kelara_ is said ke-LA-ra, and
_Kelarán_ carries an acute because the rule would stress the middle syllable
and the word stresses the last. The Vylari word _k'aralzon_ (the kept fire)
carries a catch, and the catch is a letter-sized part of the word, not a mark.

### Readable beats correct

A name or word a player meets must be readable and pronounceable without a
grammar course. Real people read these at the table. Where a language rule
makes a word harder to read or say, the word stays readable and the rule gives
way.

- **Words look like English syllables**, with letters at their usual English
  values. Frequent words are short.
- **Diacritics are rare and purposeful.** At most one mark in a word, and only
  where it marks stress or changes how a letter sounds.
- **Mood, questions and quotation are carried by words and context** in every
  tongue's script, never by marks, unless that tongue's own note says its
  scribes use a mark. Do not add a question mark, quotation mark or mood marker
  to a script or a mapping unless the owner rules that a tongue uses it. The
  ruled exception: Pirzath has quotation marks, and the tongues written in it
  use them, and the Pirzath script note describes its sentence end and imperative
  mark. Vylari asks, commands and exclaims with an opening word, quotes with
  _vethor_ and emphasises with words; its only punctuation is the catch and the
  one pause point.
- **The roman transcription keeps English punctuation.** A passage typed in
  roman for mapping into a script uses only the marks that script's mapping has
  rows for.
- **A tongue sounds like its model without copying it.** See [Coining a word](#5-coining-a-word).

## 3. How a language note defines its language

A language is a note of `type: skill` and `subType: language`, under
`assets/content/Skills/Languages/`. Everything a check or a generator reads is
frontmatter under `data`. The body is for a reader and is never mined for data.

A language is declared to the build in `package-build.config.yaml`, under
`languages`, by a short name (four letters by this repository's convention, with
`vyl` for Vylari the exception), a BCP 47 tag `art-x-<name>` and the address of
its note:

```yaml
languages:
  vyl: { tag: art-x-vyl, note: skill-vylarilng }
  khel: { tag: art-x-khel, note: skill-khelathlng }
```

`lang=vyl` on a run names the declared language. A language with no `note` is
only tagged: it has no dictionary and no lexicon check.

The keys below are those a language note states. Every key is optional, and a
note states only what it uses. The authoritative list, with every value's
shape, is the language table in
`node_modules/@heroiclands/package-build/docs/reference/format-details.md`
under "A language's words" and "A language's register, sounds and history". An
unknown key, a missing required key or a wrongly shaped key is an error at its
own line and column.

### 3.1 `data.sounds` and the flavour palette

`data.sounds` states the letters and the rules a word keeps. It is the data half
of the language's **flavour palette**: favoured sounds, endings and shapes. The
prose half is the note's "How the language sounds" section, which also states
what the language leaves out. The palette follows the tongue's model language,
its "leaves out" line included.

Vylari's, as its note states it:

```yaml
sounds:
  edges:
    - { edge: openCluster, sounds: [st, pr, pl, tr, kr, kl, br, bl, dr, gr, gl, fr, fl, thr] }
    - { edge: closeConsonant, sounds: [s, n, r, l] }
  clusters: { max: 3 }
  stress: { two: first, longer: penultimate, mark: acute }
  syllables: { vowelPairs: [ai, au, oi, aa, ii, uu] }
```

Read it as: a Vylari word may open on one of those clusters, may close on _s_,
_n_, _r_ or _l_, holds at most three consonants together, stresses by the
spelling guide's rule with an acute for an exception, and keeps the vowel pairs
listed. The prose of the note then says the rest: "Most words have two or three
syllables, and a word ends on a vowel or on _s_, _n_ or _r_", and, under "What
Vylari leaves out", that it has no _kh_, _gh_ or _dh_ and no _ei_ or _eu_.

The closed vocabulary of `data.sounds` is: `letters`, `edges` (`openConsonant`,
`openCluster`, `closeConsonant`, `closeCluster`, `innerCluster`, `vowelPair`,
`glide`, `syllabic`), `clusters`, `stress`, `finals`, `syllables`, `joining`,
`joins`, `marks`, `skeleton`, `frames`, `readPast` and `mutations`. A value
outside a closed list is an error at the value.

**Every coined or respelled word is checked against the palette**, as well as
against Earth words, so simplifying never flattens the tongues into one sound.
The check is a reading: compare the word with the `data.sounds` of the note and
with the prose palette, then with a few existing words of the same tongue.

### 3.2 `data.words`: the lexicon

Each word is one entry of `data.words`, and the language of a word is the note
it sits on. Vylari's `ulthas` and `zalvon`:

```yaml
- form: ulthas
  class: n
  field: The hallowed and the gods
  gloss: "a god; anything hallowed"
  source: { kind: inherited }
  built: ["ulth-", "-as"]
- form: zalvon
  class: n n
  plural: zalvar
  field: The hallowed and the gods
  gloss: "the worship of the state; the imperial cult"
  source: { kind: inherited, form: dhalwon }
```

| Key             | Meaning                                                                                                                                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `form`          | The word as the setting writes it, in the roman spelling. A form stands once in a language; a second is an error at the second.                                                                                                                                       |
| `class`         | A base and its modifiers, separated by spaces: `n`, `v`, `adj`, `adv`, `pron`, `num`, `part`, `art`, `conj`, `dem`, `rel`, `call`, `name`, `stem`, `pref`. `n f` is a feminine noun, `n n` a neuter. A modifier must be declared in the note's `data.classModifiers`. |
| `field`         | One of the names in the note's `data.fields`. A field the note does not declare is an error.                                                                                                                                                                          |
| `gloss`         | What the word means: one sense as a string, or a list of senses.                                                                                                                                                                                                      |
| `plural`        | Only where the noun's plural differs from the language's plural rule. `zalvon` is `n n` with the plural `zalvar`.                                                                                                                                                     |
| `built`         | The pieces the word is made of: lexicon words and affixes, written as the lexicon writes them (`ulth-`, `-as`). A piece that no word, affix or element of the lineage glosses is a warning.                                                                           |
| `source`        | `kind` is one of `borrowed` (with the `language`), `inherited`, `kept`, `worn`, `coined`, `substrate`, `island`. `inherited`, `kept` and `worn` give the older `form` where the note knows it.                                                                        |
| `variants`      | Other forms of the word, such as a short form beside a long one. A variant is a known word to the lexicon check.                                                                                                                                                      |
| `concept`       | The id of the core concept the word serves, or a list of ids. See [the core vocabulary](#6-the-core-vocabulary-and-the-core-report).                                                                                                                                  |
| `native`        | An exception to the script's sound rules: `{map, font?, text}`. See [Native forms](#83-native-forms-the-dictionarys-exceptions).                                                                                                                                      |
| `pronunciation` | A respelling, where the note gives one.                                                                                                                                                                                                                               |
| `note`          | What a source says of the word beyond its pieces.                                                                                                                                                                                                                     |

Gender and plural are written only where a language's notes use them:
**nothing is filled in for completeness**, and no lint checks them.

### 3.3 `data.grammar`

Grammar is optional, and only a stated key's shape is checked. A language may
state one plural rule, one regular verb pattern or that its verbs do not
change, that its adjectives and pronouns agree with nouns by taking the noun
endings for gender and number, and that its participles attach to the verb
root. There are no cases, declensions, tenses, moods or irregular verbs, and
no sound-change derivation.

Vylari states all four:

```yaml
grammar:
  plural:
    - { ending: alon, becomes: alar }
    - { ending: os, becomes: oi }
    - { ending: on, becomes: oi }
    - { ending: is, becomes: oi }
    - { ending: as, becomes: oi }
    - { ending: a, becomes: ai }
    - { ending: e, becomes: oi }
    - { ending: i, becomes: oi }
    - { ending: o, becomes: oi }
    - { ending: u, becomes: oi }
    - { ending: "", becomes: oi }
  verbs:
    replaces: then
    persons: { I: men, you: zen, heShe: zor, we: mar, youAll: zar, they: zoi }
  agreement: { classes: [adj, pron], endings: [os, a, on, as] }
  participles: { root: [athen, ethen], affixes: ["-andar", "-thos"] }
```

- **`plural`** is a list of `{ending, becomes}`; the first row that fits supplies
  the plural of a noun, and a noun's own `plural` wins. An empty `ending`
  appends; an empty `becomes` removes. An entry gives its plural only where it
  breaks the rule.
- **`verbs`** is `{invariant: true}` (Tantsou, Kalihari and Valtari state this)
  or the six present forms in order: I, you, he/she, we, you all, they. With
  `replaces`, the endings take the place of the citation form's closing letters:
  `lokathen` gives `lokamen`, `lokazor` and the rest.
- **`agreement`** names the classes that agree with a noun and the singular
  endings they agree by, one per gender. `alathos`, a pronoun, gives `alatha`
  and `alathon`, and the plural rule gives their plurals.
- **`participles`** names the verb-root endings and the suffixes that attach to
  the root. `lokathen` has the root `lok-`, which gives `lokandar` and
  `lokthos`.

The word check **recognises** these forms and never demands one. A noun stated
with its own plural and the plural the rule gives both pass.

### 3.4 `data.affixes`

An affix states how it joins a stem. The check reads only declared keys:

```yaml
- form: "-as"
  gloss: "a hallowed noun: a god, a founder, a hallowed thing"
  attaches: "replaces the final vowel"
  replaces: vowel
  examples: ["ulth- > ulthas"]
- form: "-thos"
  gloss: "done, suffered: the past participle"
  attaches: "added"
  examples: ["kelmar- > kelmarthos"]
```

- **`replaces`** is `vowel` for any closing vowel, or the letters it takes the
  place of (`replaces: andar`). An affix with no `replaces` is added to the
  whole stem.
- **`attachesTo`** limits a suffix to the word classes it lists:
  `attachesTo: [n]`.
- **`attaches`** is prose for a reader. The check never reads it. An affix whose
  `attaches` says it replaces, drops or takes the place of a closing sound but
  states no `replaces` is an error from `npm run lint:affix-replaces`.
- **`front`** gives the form after front vowels in a language with vowel harmony.

**Words win over affix rules.** When an affix rule and an established word
disagree, the affix changes: correct its `replaces`, `attachesTo` or `front`
until the word is one of its regular forms, and leave the established word
as it is. To see every form a language's rules give, each beside its word:

```console
$ package-build lexicon vyl --map semaron --derived | grep -P '\tulthathen$'
```

Vedyari's affix `-ija` states `replaces: vowel` and the example
`karmu > karmija`, and its station names `danhija`, `sentija` and `ritrija` are
lexicon words that name their pieces in `built`.

### 3.5 `data.register` and the tongue tags

The register lists every name the setting gives in the language's reach, each
with the tongue it is in. A name a mapped run uses must be in the register of
the run's own language. See [Registering a name](#7-registering-a-name).

`data.tongues` declares the tags a register row may use, each with its meaning:

```yaml
tongues:
  - { tag: vylari, meaning: a Vylari name, language: skill-vylarilng }
  - { tag: kept, meaning: "a loanword kept in its source tongue's spelling, by ruling" }
  - { tag: translation, meaning: a name given in the language of these pages }
  - { tag: exonym:<tongue>, meaning: "a name another people gives, in the tongue named" }
  - tag: other:<tongue>
    meaning: "a name in another tongue of the setting, as its speakers give it"
  - { tag: other, meaning: a name in no tongue these pages name }
  - { tag: ancient, meaning: "a letter of ancient Vylari" }
```

| Tag                | Meaning                                                                                                    | Checked against another register |
| ------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `<own>` (`vylari`) | A name in this language. Its `language` key links the tag to the language note.                            | No                               |
| `translation`      | A name given in the language of the pages, the English rendering. It never counts as a word of the tongue. | No                               |
| `other:<tongue>`   | A name in another tongue of the setting, as its speakers give it.                                          | Yes                              |
| `exonym:<tongue>`  | A name another people gives, in the tongue named.                                                          | Yes                              |
| `kept`             | A loanword kept in its source tongue's spelling, by ruling.                                                | No                               |
| `other`            | A name in no tongue these pages name.                                                                      | No                               |
| `ancient`          | A letter of the ancient stage of the language, where a note declares it.                                   | No                               |

`translation` is accepted everywhere without being declared. Every other tag a
row uses must be declared in `data.tongues`, and a declared family tag
(`other:<tongue>`) stands for every tongue after the colon.

### 3.6 The remaining keys

| Key                       | What it holds                                                                                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data.fields`             | The named fields that `field` on a word chooses from, each `{name, holds}`.                                                                                               |
| `data.classModifiers`     | The modifiers a word's `class` may carry in this language (`m`, `f`, `n`).                                                                                                |
| `data.family`             | The parent language note. A daughter reads the parent's words as its own, and the parent's parent's in turn. Grammar is not inherited. Provenzal and Tarveni name Vylari. |
| `data.core`               | `true` where the language must cover the core vocabulary. Not inherited.                                                                                                  |
| `data.emphasis`           | `rubric`, `overline` or `words`: how the language marks a stressed word. `words` refuses stars in the language's runs. Vylari states `words`.                             |
| `data.retired`            | Forms the setting does not write, each with `instead` and `why`. `{form: Murkas, instead: Pozerandi, why: a month named with an echo of an Earth god}`.                   |
| `data.cognates`           | The form one older word takes in each language of a set, on the eldest language.                                                                                          |
| `data.names`              | Name lists for generating names.                                                                                                                                          |
| `data.scope`              | The notes the register covers.                                                                                                                                            |
| `data.elements`, `roots`  | What the language's names or words are built from.                                                                                                                        |
| `data.older`              | Words and names older than the language's rules.                                                                                                                          |
| `data.soundChanges`       | Named sets of ordered changes between related languages.                                                                                                                  |
| `data.negation`, `naming` | How a verb is negated; the shapes, edges and sources of names.                                                                                                            |

### 3.7 Findings in a language note

Each finding is at the key at fault. These are real, from this repository's
build.

| Finding                                                                                                                                                                                                                       | Fix                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `` `zaron` stands twice in this language, first at `data.words[0]` ``                                                                                                                                                         | Delete the second entry, or give the second a different form.         |
| `` the field `Law` is not one of this language's `data.fields` ``                                                                                                                                                             | Use a field the note declares, or declare the field.                  |
| ``the class `noun`: `noun` is not a word class base``                                                                                                                                                                         | Write the base: `n`, `v`, `adj` and the rest.                         |
| `` "colour" is not a key of `data.words[2]`; it takes only `form`, `variants`, `name_sort`, `class`, `plural`, `field`, `gloss`, `concept`, `source`, `built`, `note`, `pronunciation`, `tones`, `root`, `frame`, `native` `` | Remove the key; the vocabulary is closed.                             |
| `` `smel-noun` is not a core concept; did you mean `smell-noun`? ``                                                                                                                                                           | Write the id the concept list declares.                               |
| `` the tongue `nordmal` is not declared in `data.tongues` ``                                                                                                                                                                  | Declare the tag, or use a declared one.                               |
| `` `Dunharra` is registered as `other:dunhari`, but the register of Dunhari Language (skill-dunharlng) lists no `dunhari` name `Dunharra`; … ``                                                                               | Correct the spelling, or register the name in its own language first. |
| `` `data.grammar.agreement.classes[0]` is `adjective`, which is not a word class; did you mean `adj`? ``                                                                                                                      | Write the class base.                                                 |
| `` `data.words[4].native[0]` states what the rows already give: … a native form is stated only where the rows spell the word differently ``                                                                                   | Delete the `native` entry.                                            |
| ``the piece `ulth-` of `ulthas` matches no word, affix or element of this language or its ancestors, so it prints with no gloss`` (a warning)                                                                                 | Add the stem as an element or word, or correct the piece.             |

## 4. Stress as data

A language's stress rule is a key, `data.sounds.stress`:

```yaml
stress: { two: first, longer: penultimate, mark: acute }
```

- **`two`** places the stress in a word of two syllables: `first` or `last`.
- **`longer`** places it in a word of three or more, counted from the end:
  `antepenultimate`, `penultimate` or `final`.
- **`mark`** is the diacritic that marks a stress the rule would not choose and
  moves the stress to the syllable it sits on: `acute`, `grave` or
  `circumflex`. The roman spelling uses the acute.

**Syllables are vowel groups.** A vowel is a letter whose base is _a_, _e_, _i_,
_o_ or _u_, and a pair that the language lists in
`data.sounds.syllables.vowelPairs` is one syllable. Vylari lists
`[ai, au, oi, aa, ii, uu]`, so _kaira_ has two syllables and is stressed on the
first.

**What reads it.** A `verse` fence with `scan=` counts beats by this rule (see
[Metre](#metre)). Prose in a note that gives an example of stress follows the
same rule: a word the rule stresses correctly carries no acute, and a word that
leaves the rule carries one, on the syllable that is stressed. A language that
states no `data.sounds.stress` cannot be scanned.

**Worked example.** By the spelling guide, _Kelara_ is ke-LA-ra and _Torin_ is
TO-rin. _Kelarán_ is ke-la-RAN, because the acute moves the stress to the last
syllable.

## 5. Coining a word

A coinage is a word the language's lexicon does not hold. **The owner approves
every coinage**, so the workflow is propose, approve, apply.

### 5.1 The rules a coinage meets

1. **It fits the palette.** Compare it with `data.sounds` and the note's prose
   palette, and with real words of the tongue. A word that uses a sound the
   tongue leaves out, or ends in a way the tongue never ends, is refused.
2. **It is not an Earth collision.** An Earth collision is a **whole word of the
   culture's own model language**. A Vylari word that is Latin, a Nordmal word
   that is Old Norse, a Vedyari word that is Sanskrit or Hindi is replaced. An
   overlap with any other Earth language is coincidence, and a stem or a root
   never counts, so a stem or affix written with a hyphen at either end is not
   compared. The model languages are in `SOURCES` in `utils/earth-words.mjs`.
   Khazari's model is Tolkien's Khuzdul, and like Tolkien it writes a two-root
   name as two dashed parts. Tolkien's words are his: a whole Khuzdul word is a
   collision for Khazari, and a whole Quenya or Sindarin word is one for Sinale,
   whose Finnish model Quenya shares. `SOURCES` holds no list for Khazari, so
   no command catches a Khuzdul collision: compare by reading.
3. **A replacement keeps the tongue's length weighting.** Only a whole Earth word
   or name is replaced; an Earth-like root inside a compound is flavour. A
   replacement may be longer or shorter than the form it replaces, so long as
   the tongue's words and names, taken together, keep its model's
   syllable-count weighting.
4. **It is readable.** See [Readable beats correct](#readable-beats-correct).
5. **It is not a form the setting has retired.** `data.retired` in the language
   note lists the forms the setting does not write, each with what is written
   instead. `npm run lint:retired` sweeps prose for the names in its table and in
   the Nordmal concordance.
6. **It enters `data.words` before it is used.** A passage never uses a word
   the lexicon does not hold.

### 5.2 The workflow

1. **Propose.** A question for the owner goes on the issue or pull request it
   concerns, with `@toastygm` and the `status/question` label. A proposal lists,
   for each coinage:

   | Field                     | Content                                                         |
   | ------------------------- | --------------------------------------------------------------- |
   | `form`                    | The roman spelling.                                             |
   | `class`, `field`, `gloss` | As the entry would state them.                                  |
   | `built`, `source`         | The pieces, and `coined` or the older form.                     |
   | `concept`                 | The core concept it serves, if any.                             |
   | Palette note              | Which sounds and endings of the tongue it uses.                 |
   | Earth check               | The result of `npm run lint:earth-words` where the lists exist. |
   | Reading                   | How an English reader says it.                                  |

2. **The owner approves.** An agent stops here and writes no passage that uses
   the coinage. A proposal that the owner changes is changed, not defended.
3. **Apply.** Add the entry to `data.words` of the language note, in the field
   it belongs to, and use the word. Run `package-build lint` and
   `npm run lint:earth-words`.

A word that is only a new regular form of an existing word (a plural, a verb
form, an affixed form whose affix states `replaces`, an agreeing form or a
participle) is not a coinage and is not added: the word check recognises it.
`package-build lexicon vyl --map semaron --derived` lists the forms the
language's rules give.

## 6. The core vocabulary and the `core` report

`assets/content/Reference/Core_Vocabulary.md` (a `doc` note) lists the concepts
every human language of Thalorna has a word for: the senses, the passions, the
loves, the parts of the body, the common needs, the common things of a
household, the numbers, the colours, kinship and the basic verbs. The tongues
of the other folk, and the drum register of Nyaluban, are outside it.

**Each human language covers every concept, and the owner approves every
coinage that covers one.** Three keys carry it:

| Key                    | On              | Meaning                                                           |
| ---------------------- | --------------- | ----------------------------------------------------------------- |
| `data.concepts`        | a `doc` note    | `{id, gloss, group}` entries, in the order the report lists them. |
| `data.core`            | a language note | `true` where the language must cover the list.                    |
| `data.words[].concept` | a word          | The id of the concept the word serves, or a list of ids.          |

An entry of `data.concepts`:

```yaml
- { id: smell-noun, gloss: "a smell; a scent", group: senses }
```

A word that serves a concept:

```yaml
- form: varelon
  class: n n
  field: The hallowed and the gods
  gloss: "faith; trust; the holding of a thing true"
  concept: faith
  source: { kind: coined }
```

A `concept` that names no id of the list is an error at the id, with the
nearest id offered: `` `smel-noun` is not a core concept; did you mean `smell-noun`? ``.

**The report** lists, for each language that states `core: true`, the concepts
it has no word for, grouped and counted:

```console
$ package-build core --language skill-vylarilng
$ package-build core --json
```

`--language` reports one language by name, shortcode or reference whether or
not it states `core`; `--json` serves an agent working through it. **A missing
concept is never a lint failure.** The report is the work list, and the exit
status stays 0. To fill a gap: choose the concept, propose a word under
[Coining a word](#5-coining-a-word), and after approval add it with `concept:`.
An existing word that already means the concept gets the `concept:` key and no
new word.

A daughter language reads the words of its `data.family` chain as its own, so a
parent's tagged word covers the daughter's concept. `data.core` is not
inherited.

## 7. Registering a name

A name used in a mapped run goes into the language note's `data.register`
before it is used, with its tongue:

```yaml
register:
  - { name: Thordimalon, tongue: vylari }
  - { name: The Arcane Order, tongue: translation }
  - { name: Brazemandi, tongue: vylari, built: [brazem-, -andi] }
  - { name: Epistémion, tongue: other:helonic }
```

- **A name in this language** takes the language's own tag, `vylari`, with
  `built` when the name is made of the language's words and affixes.
- **A foreign name used in this language's text** is listed as `other:<tongue>`
  (a name in another tongue as its speakers give it) or `exonym:<tongue>` (a
  name this people gives to another). **It must also be in its own language's
  register**: the build checks it. `Epistémion` is listed in Vylari as
  `other:helonic`, and Helonic's register lists `Epistémion` as `helonic`. The
  tag `helonic` is declared in Helonic's note with `language: skill-helonclng`,
  and that declaration is what links the tag to the note. A tongue that no
  declaration links to one language note, or that two declarations link, is an
  error at the row's `tongue`. A misspelt foreign name is an error at its name:

  > `` `Dunharra` is registered as `other:dunhari`, but the register of Dunhari Language (skill-dunharlng) lists no `dunhari` name `Dunharra`; correct the spelling, or register the name there first ``

- **`translation`** rows are English renderings and never count as words of the
  tongue.
- **Bare `other`, `kept`, `ancient` and `translation`** rows are not checked
  against another register.
- **A multi-word name** is checked word by word.
- **A new name passes the invented-word rules** like a coinage: palette, Earth
  collisions and readability.
- **A name is not a word in prose.** A proper name in the setting's prose is
  marked and linked as described in `CONTRIBUTING.md`, "Names in prose".

## 8. Scripts, fonts and mappings

### 8.1 Which script, which font, which mapping

A script is a `type: skill`, `subType: script` note under
`assets/content/Skills/Scripts/`, whose `data.script` lists the faces it is
drawn in, and how it marks emphasis. A mapping is a `doc` note under
`assets/content/Lore/Scripts/`, **one per script, shared by every language
written in it**.

| Script         | Script note                        | Faces (`font=`)                                         | Mapping (`map=`) | Direction     |
| -------------- | ---------------------------------- | ------------------------------------------------------- | ---------------- | ------------- |
| Semaron        | `Skills/Scripts/Semaron.md`        | `semaron-kuriale`                                       | `semaron`        | left to right |
| Pirzath        | `Skills/Scripts/Pirzath.md`        | `pirzath-carved`, `pirzath-hand`, `pirzath-hand-lifted` | `pirzath`        | left to right |
| Thuravark      | `Skills/Scripts/Thuravark.md`      | `thuravark-carved`                                      | `thuravark`      | left to right |
| Qalezu         | `Skills/Scripts/Qalezu.md`         | `qalezu-hand`                                           | `qalezu`         | right to left |
| Khelathi-zethu | `Skills/Scripts/Khelathi_zethu.md` | `khelathi-zethu-glyphs`                                 | none             | right to left |

The other script notes state no `data.script`, so no face and no mapping draws
them. Every face is a face of `@heroiclands/fonts`; `font=` names it by its
class without `hl-` (`hl-semaron-kuriale` is `font=semaron-kuriale`), or one of
the generic families `mono`, `serif` and `sans`.

**A default script per language is not available.** A language does not name a
script, so a run states `font=` and `map=` every time. A run that states
`lang=vyl` alone is tagged Vylari, in roman, in the page's font.

The scripts in use with a language:

| Language          | Script written in | Run                                               |
| ----------------- | ----------------- | ------------------------------------------------- |
| Vylari (`vyl`)    | Semaron           | `{lang=vyl font=semaron-kuriale map=semaron}`     |
| Khazari (`khaz`)  | Pirzath           | `{lang=khaz font=pirzath-carved map=pirzath}`     |
| Nordmal (`nord`)  | Thuravark         | `{lang=nord font=thuravark-carved map=thuravark}` |
| Khelathi (`khel`) | Qalezu            | `{lang=khel font=qalezu-hand map=qalezu}`         |

Other tongues are written in these scripts by the same mappings: a tongue
borrowing Semaron uses `map=semaron` with its own `lang=` and its own
dictionary.

### 8.2 What a mapping row is

A mapping note's `data.map` holds the rewrite from roman spelling into a
script's code points:

```yaml
data:
  map:
    name: semaron
    vowels: "aeiouAEIOUáéíóúÁÉÍÓÚ"
    rows:
      - ["a", "\U000F0230"]
      - ["th", "\U000F0250"]
      - ["ch", "\U000F0241\U000F0240\U000F0236"]
      - ["aa", "\U000F0248"]
      - { from: "y", to: "\U000F0245", before: vowel }
      - [".", "\U000F0268"]
      - [",", "\U000F0268"]
    fonts: [{ font: semaron-kuriale }]
```

The rows above are an excerpt of `Lore/Scripts/Semaron_Spelling.md`. The file
stores the characters themselves, each row ending in a comment naming its code
points (`# U+F0230`), because formatting rewrites an escape into the character.
The escape is shown here so the excerpt reads in any viewer.

- **`name`** is what `map=` names: lowercase letters, digits and `-`, unique.
- **A row** is `[from, to]` or `{from, to, before?, at?}`. `from` is one or more
  characters, and `to` is any number of them, none included (a script that
  drops vowels writes `to: ""`). `before` is `vowel` or `consonant`. `at` is
  `start` or `end`.
- **The longest match wins.** `th` is one letter, and `t` and `h` are read only
  where `th` does not match. Among rows of one length, a row whose condition
  holds comes before one with none.
- **A row whose condition fails is skipped.** `y` before a vowel is the glide
  letter; elsewhere it takes its plain row.
- **Capitals and marks need rows of their own.** `L` and `l` are two rows, and
  a script with no capitals gives both the same code point. The full stop and
  the comma are characters too: a run that holds one needs a row for it.
- **A character no row matches passes through unchanged**, and the face-coverage
  check then reports it.
- **`fonts`** lists each face the mapping may be used with. A face may carry
  rows of its own, tried first.
- **The code points come from the face's own `fonts.json`.** Every row's `to`
  must be drawn by every face listed.

The "From the Spelling Guide to Semaron" section of the mapping note states in
prose how each part of the spelling guide lands in the script (_ch_ is three
letters because the script has no _c_; a doubled _a_, _i_ or _u_ is the long
vowel; every pause is the one point). The rows are the data, and the prose is
for the reader.

### 8.3 Native forms: the dictionary's exceptions

The sound rules belong to the script, and the exceptions belong to the
language. With `lang=` naming a language that has a `note`, the build reads the
language's `data.words` before the rows. A word that states a `native` form for
the run's mapping is written by it whole:

```yaml
- form: zaron
  class: n
  field: Law
  gloss: an oath
  native:
    - { map: semaron, text: "\U000F0246\U000F0248\U000F023F\U000F023D\U000F023C" }
```

This entry is the sample in package-build's guide, not a thalorna entry; no
language of the repository states a `native` form, because the shared rows
spell every word.

- **A native form states only an exception.** A form equal to what the rows give
  is an error ("states what the rows already give"), which keeps a dictionary
  to its exceptions.
- **There are no stem-level exceptions.** The plural of an exception word is
  another word, and the rows spell it.
- **Capitals.** A capitalised word found only in lowercase takes its capital
  from the rows. When the native form does not begin the way the rows spell the
  first letter, the capitalised word is an error at its place, and the fix is
  the one the message names: state the capitalised word as a lexicon word of
  its own with its native form.

## 9. Marking text

Three optional keys mark text, on a span, a `:::` block or a `verse` fence.
They are independent.

| Written                                                       | What it is                                                                       |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `[Daimela, helthos.]{lang=vyl}`                               | Vylari, tagged `art-x-vyl`, in roman and in the page's font. Unchecked.          |
| `[…]{font=semaron-kuriale}`                                   | The code points exactly as typed, in Semaron Kuriale. Checked for coverage only. |
| `[Zaron tholmeza]{lang=vyl font=semaron-kuriale map=semaron}` | Vylari typed in roman, mapped through the dictionary and the rows, and checked.  |
| `[…]{map=semaron}` with no `lang=`                            | The rows alone: no dictionary, no lexicon check.                                 |
| `[ad astra]{lang=la font=serif}`                              | A real language's tag, unchecked, in the reader's serif.                         |
| `::: {lang=… font=… map=…}` … `:::`                           | The same keys for a passage of paragraphs.                                       |
| A `verse` fence opened with `{lang=… font=… map=…}`           | The same keys for a poem.                                                        |

### 9.1 The three cases

1. **Roman, tagged** (`{lang=vyl}`). The text is roman and unchecked. Use it
   for a word or phrase quoted in the page's own font.
2. **Native code points typed directly** (`{font=…}`). The characters reach the
   page exactly as written. Nothing is checked against any language. The only
   check is face coverage: every character must be one the face draws. The
   characters are the face's own code points, typed with a keyboard layout or
   an input method (see [Typing natively](#14-typing-natively)).
3. **Roman mapped** (`{lang=vyl font=… map=…}`). The roman is converted by the
   dictionary and the rows, then checked against the language's lexicon and
   register, then checked for face coverage. This is the usual choice for a
   language with a dictionary, because the note's source stays readable and
   diffable.

**Real runs in the tree.** From `Skills/Scripts/Semaron.md`, the opening of a
sworn oath in High Vylari, as a block:

```markdown
::: {lang=vyl font=semaron-kuriale map=semaron}
Voza ulthoi okethen denon zaron, ul kalmetharoi.
:::
```

From `Skills/Scripts/Pirzath.md`, the same words in two faces:

```markdown
::: {lang=khaz font=pirzath-carved map=pirzath}
Dalík bant, maríg bant.
:::

::: {lang=khaz font=pirzath-hand map=pirzath}
Dalík bant, maríg bant.
:::
```

From `Skills/Scripts/Thuravark.md`, a span in running prose:

```markdown
[hrend]{lang=nord font=thuravark-carved map=thuravark}
```

### 9.2 The keys

- **`lang=`** is read in this order: a short name declared in `languages`, then
  a BCP 47 tag for a real language (`la`, `grc`, `en-GB`), checked for its form
  alone. A declared name wins over a tag spelled the same way. A well-formed tag
  one edit from a declared name draws a warning that names the declared one.
- **`font=`** is a face of `@heroiclands/fonts` or a generic family. An unknown
  name is an error that suggests the nearest face. A package that has not
  installed `@heroiclands/fonts` cannot name a face.
- **`map=`** is the `data.map.name` of a mapping note. A `font=` with `map=` is
  one of the faces the mapping lists.

### 9.3 Inheritance

A span inside a marked block or fence takes the passage's keys, and its own keys
win. A Khelathi phrase inside a Vylari passage is checked against Khelathi's
lexicon and tagged Khelathi, but still drawn through Semaron's rows:

```markdown
::: {lang=vyl font=semaron-kuriale map=semaron}
Zaron lonak, [Gar-Anlagh]{lang=khel}, lokamen zaron.
:::
```

To draw it in Qalezu instead, the span states its own face and mapping:
`[Gar-Anlagh]{lang=khel font=qalezu-hand map=qalezu}`. Qalezu runs right to
left inside the left-to-right line with no `dir=` written. To set a gloss in
the page's own font, `[an oath]{lang=en font=serif}` inside the passage drops
both the face and the map by naming new ones.

### 9.4 What a run may hold

- A marked span or verse line is **plain text**: no link, image, footnote,
  wikilink, code or HTML. Text set in a face takes emphasis as stars.
- A marked div holds paragraphs and line breaks only: no heading, list, block
  quote, code fence, table or nested block.
- The text is read as written, so `[`, `]`, `"`, `<<`, `>>`, `!` and
  `@ # $ % ^ &` are characters. A bracket pair is markup only when `(` makes a
  link, `{` a span or a second `[` a wikilink. An unbalanced bracket takes a
  backslash, `\[`.
- A code fence is verbatim: `[…]{…}` inside it stays literal text.
- Text marked with a real language's tag alone keeps its Markdown.

### 9.5 Emphasis in a script

No script marks a stressed word by a bold or a slant. Inside a run set in a
face, `*…*` and `**…**` are set by the scribal convention the language states
in `data.emphasis`, else the script note states in `data.script.emphasis`
(`rubric`, red ink; `overline`, a line above). The text stays an `<em>` or a
`<strong>`, and the face keeps its Regular.

A language whose `data.emphasis` is `words` marks stress with a word, and stars
in its runs are an error: `` `vyl` marks emphasis with a word, not a mark; write the word ``.
Vylari states `words`, so a Vylari run carries no stars. Underscores and
strikethrough are errors in a face. A star inside a word splits it, so enclose
a stressed word whole.

### 9.6 Where marked text is set

One pre-pass rewrites marked text at the head of every target: the site,
the Foundry compile, the book and the preview. It wraps the converted run in the
face's class, gives it the `lang` from the language's tag, and gives a block in a
right-to-left face `dir="rtl"`. It never writes `<bdo>`, `<bdi>` or a Unicode
direction control. A run converted for a right-to-left face is hidden from the
site's search index. Readers install nothing: the site, Foundry and the book
carry the faces a note uses.

## 10. What the build checks on a mapped run

A run with `lang=`, `font=` and `map=`, whose language has a `note`, is checked
word by word. Every finding is `file:line:column: severity: message`, the path
relative to the working directory, at the character it concerns.

| Stage         | Reads                                | Reports                                    |
| ------------- | ------------------------------------ | ------------------------------------------ |
| Keys          | `lang=`, `font=`, `map=`             | An unknown language, font or map           |
| Dictionary    | The language's `data.words[].native` | A native form the rows cannot capitalise   |
| Rows          | The mapping's `data.map.rows`        | Nothing: a character with no row passes on |
| Lexicon check | The language's words and register    | A word the language does not hold          |
| Face coverage | The face's `fonts.json` code points  | A character the face does not draw         |

### 10.1 What the lexicon check accepts

A word passes when it is any of these. The comparison is case folded and NFC,
with `’` read as `'`.

1. **A lexicon word:** a `data.words[].form`, or a form listed in a word's
   `variants`. A multi-word or compound form contributes each of its parts.
2. **A word of a registered name:** a word of a `name` in the language's own
   `data.register`, under any tongue except `translation`. A name of several
   words is checked word by word.
3. **A regular form of a lexicon word,** made by one rule the language states:
   a noun's plural (its own `plural`, else the first `grammar.plural` row that
   fits); a verb with one ending of `grammar.verbs.persons`; a suffix of
   `data.affixes` that states `replaces`, or its `front` form; an agreeing form
   or a participle.

A compound that is not a word whole is split at its hyphens and en dashes, and
each part is checked. A word with no letter, such as a numeral, is skipped. A
prefix, and an affix that states no `replaces`, make no form.

Any other word is an error at its first character, reported once per run. The
fix is one of: **coin the word** ([Coining a word](#5-coining-a-word)),
**register the name** ([Registering a name](#7-registering-a-name)), or correct
the spelling.

### 10.2 Every finding, with its fix

Each message below is a real finding from this repository's build.

| Finding                                                                                                                                                                                          | Meaning                                                          | Fix                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `` `kelvothar` is not a word of the `vyl` lexicon, a registered name, or a regular form of one; coin it in the lexicon (or register the name) first ``                                           | The word is in no lexicon, register or regular form.             | Coin it after approval, register the name, or correct the spelling.                                                                       |
| `` `semaron-kurial` is not a font: `font=` names an installed face, or `mono`, `serif` or `sans`; did you mean `semaron-kuriale`? ``                                                             | The face does not exist.                                         | Write the face the message suggests.                                                                                                      |
| `` `semron` is not a map: `map=` names the `data.map.name` of a mapping note; did you mean `semaron`? ``                                                                                         | The mapping does not exist.                                      | Write the name a mapping note declares.                                                                                                   |
| `` `q` is not a declared language (`languages` in package-build.config.yaml) or a BCP 47 tag ``                                                                                                  | The language is neither declared nor a valid tag.                | Write a declared short name.                                                                                                              |
| `` `vly` is read as a BCP 47 tag; did you mean the declared language `vyl`? `` (a warning)                                                                                                       | A near miss of a declared name, which is also a valid tag.       | Write the declared name.                                                                                                                  |
| `` `?` (U+003F) is not drawn by the font `semaron-kuriale`, and the map `semaron` has no row for it ``                                                                                           | A mark the script does not have. Questions are carried by words. | Write the question in words, and leave the mark out.                                                                                      |
| `` `x` (U+0078) is not drawn by the font `semaron-kuriale` ``                                                                                                                                    | Roman letters under `font=` with no `map=`.                      | Add `map=`, or type the face's own code points.                                                                                           |
| `` `X` (U+0058) is not drawn by the font `semaron-kuriale`, and the map `semaron` has no row for it ``                                                                                           | A letter the script lacks (_c_, _q_, _x_).                       | Respell with the guide's letters, or remove it.                                                                                           |
| `` `thuravark-carved` is not a font of the map `semaron`; it is for `semaron-kuriale` ``                                                                                                         | The face is not one the mapping lists.                           | Use a face the mapping lists. Further findings follow, one per mapped character, each naming the code point the other face does not draw. |
| `` `vyl` marks emphasis with a word, not a mark; write the word ``                                                                                                                               | Stars in a run of a `words` language.                            | Remove the stars and write the word the language stresses with.                                                                           |
| `` `Dunhara` is not a word of the `vyl` lexicon, a registered name, or a regular form of one; … ``                                                                                               | A foreign name not in this language's register.                  | Register it as `other:<tongue>` or `exonym:<tongue>`.                                                                                     |
| `` `ch` maps to U+F0299 in the map `semaron`, which the font `semaron-kuriale` does not draw ``                                                                                                  | A row writes a code point the face lacks.                        | Correct the row's `to` from `fonts.json`.                                                                                                 |
| `` `zaron` is written U+F0299 by the lexicon of `vyl` for the map `semaron`, which the font `semaron-kuriale` does not draw ``                                                                   | A native form holds a code point the face lacks.                 | Correct the word's `native` text.                                                                                                         |
| `` `Orlan` is capitalised, and the native form … does not begin as the rows spell its first letter, so the rows cannot capitalise it; state `Orlan` as a word of its own with its native form `` | A capitalised exception the rows cannot capitalise.              | State the capitalised word as its own lexicon entry.                                                                                      |
| `` `data.words[0].native[0]` states what the rows already give … ``                                                                                                                              | A redundant exception.                                           | Delete the `native` entry.                                                                                                                |

## 11. Verse

### A poem in a `verse` fence

A poem is written in a `verse` fence, whose lines and stanzas the build
preserves. The keys go on the fence. Prettier leaves the contents of a fence
byte for byte, so indentation, line breaks and spans survive formatting.

````markdown
```verse {lang=vyl font=semaron-kuriale map=semaron}
Lokazor lonak,
  lokamen zaron.
```
````

**The fence word is `verse`.** A fence opened with `poetry` is not a verse: it
renders as a plain code listing, the build stays green and no finding is
reported by `package-build lint`. `npm run lint:verse-fences` refuses it:
`a poetry fence renders as code; write the fence as verse`.

A poem is composed, not reference writing. Spelling, dashes, line breaks and
punctuation rules for prose do not apply to it, and a pass over a note never
rewords, trims, reflows or re-punctuates a poem.

### Verse in columns

A poem can be set beside its translation, or in both script and roman. `col1=`
names what the left column shows and `col2=` the right, each column stacking
one or more entries joined by `:`. An entry is `language[/mapping[/font]]`.
`numstep=N` numbers the lines (`numstep=1` every line, `numstep=5` every fifth).
`form=` records the poem's kind and is not read.

The body is one fence with interleaved `lang` spans. Each verse line is a group
of lines separated by a blank line; each line of a group is a span giving the
verse line in one language. A line of only `***` breaks a stanza. From
`Lore/Cultures/Vylarian/The_Walking_of_the_Line.md`:

````markdown
```verse {form=epic lang=en numstep=5 col1=vyl/semaron/semaron-kuriale col2=en:vyl}
[The hallowed boundary I sing,]{lang=en}
[Thiruthriman sorimamen,]{lang=vyl}

[and the one who walked it, and the stones]{lang=en}
[ul alathas kedis alatha valmazor, ul talothoi]{lang=vyl}
```
````

The Vylari is typed once in roman. The first entry of `col1=` maps it into
Semaron; the second entry of `col2=` sets the same line in roman. The rules:

- `font=` and `map=` belong to the entries, not to the poem.
- Every verse line gives one span for each language its columns name, and none
  for a language they do not.
- A line is not indented, and its span takes only `lang=`.

The findings, each an error at the text that is wrong:

```text
<note>:37:1: error: this verse line has no `en` line, which `col2=` sets
<note>:18:1: error: this verse line gives `en` twice; give each language once
<note>:22:1: error: no column sets `khel`; a verse line gives the languages `col1=` and `col2=` name
```

### Metre

`scan=` turns on a beat check. It names a metre declared once in the package,
as an entry of a `doc` note's `data.metres`:

```yaml
data:
  metres:
    - { name: trimeter, beats: 3, kind: accentual }
```

`kind` is `accentual`, the only kind: a beat falls on a stressed syllable. The
fence states `scan=` with the declared name and a `lang=` whose language note
states `data.sounds.stress` (see [Stress as data](#4-stress-as-data)):

````markdown
```verse {lang=vyl scan=trimeter}
Lokazor lonak zaron.
Lokamen lonak zaron.
```
````

This example is package-build's, not a note of this repository: no `doc` note
here declares `data.metres`. A line that cannot scan is a warning at that line.
The beat convention: a word of two or more syllables has one beat, on its
stressed syllable; a one-syllable noun, verb, adjective, numeral or name has a
beat, and a one-syllable particle, preposition, conjunction, adverb or pronoun
has none; a word of four or more syllables may take a second, lighter beat on
its first syllable; the caesura is not written. `scan=` is refused with
`lang=` missing, with a language that states no stress rule, and on a verse in
columns.

## 12. Scripts written in columns, and the `scroll` fence

Teng Chou is written in vertical columns on handscrolls, in classical style,
read top to bottom with the columns read from the right. A passage in a script
written in columns is set with a `scroll` fence. **Inline spans run
horizontally**: a short phrase in the same script sits in a line of prose and
sets its characters left to right.

```text
scroll {rows=25 cols=12 lang=<language> map=<mapping>}
```

The fence opens a real code fence, so Markdown never reformats its body.

- **Paragraphs.** The lines of a paragraph are joined into one text, so where
  the source breaks a line makes no difference to where a column breaks. A blank
  line starts a new paragraph, flush at the top of a fresh column, with no
  indent and no mark between paragraphs. This is classical practice.
- **`rows=`** is the number of characters in a column, and **`cols=`** the number
  of columns in a panel. Each is a whole number above zero, and either may be
  left out.
- **`lang=`, `font=` and `map=`** work as on a verse fence. If the fence names no
  `font=`, it takes the face of its map, provided the map is drawn in exactly
  one face.
- **The direction comes from the script.** The script note states
  `direction: vertical-rl` in its `data.script`. A script that states no
  direction is written in lines, and a `scroll` fence set in it is an error.
  Markup never states a direction itself.

On the site, in the preview and in Foundry a scroll is a `<div class="scroll">`
with one paragraph per paragraph of text, set with `writing-mode: vertical-rl`.
In the book, each panel is drawn as an image from the face's outlines, and its
alt text is the roman text it was written from.

**What this repository has.** No script note here states `direction`, and no
mapping note exists for Teng Chou, so no `scroll` fence is written in a note.
The package-build this repository installs (24.0.1) does not read a `scroll`
fence: in a note it is an ordinary code block, so the fence is written only
against a package-build whose documentation describes it. The Khelathi-zethu script note says its text is written
either right to left in lines or top down in columns, and the font lays out a
line; a column is laid out by the page.

## 13. Logographic writing: Zethu

Khelathi has one lexicon and two writing systems. **Qalezu writes sounds**:
the `qalezu` mapping's rows, with exceptions only. **Zethu writes meanings**:
no rule turns sound into a Zethu writing.

For a logographic mapping (`logographic: true` in `data.map`), a word's writing
is resolved in this order:

1. **The word's own stored writing:** a `native` entry for the mapping. This
   covers irregular words and set compounds written their own way.
2. **Otherwise its parts' writings, joined:** the roots from the entry's
   `built` list, in order, then the grammar's endings (`data.grammar.native`
   states the plural and the persons once), each carrying its own `native`. An
   affix's `native` states the affix's writing for a `built` piece naming it.
3. **Otherwise its hyphenated parts**, each by the same steps.
4. **Otherwise an error at the word.** **A word is never guessed.**

The rows of a logographic mapping write only the text between words: spaces and
points. A word never falls through to the rows.

**Ambiguity.** One roman form with two entries and different writings is an
error naming every entry's gloss. **Ambiguous forms are resolved by sense:** list the
words with

```console
$ package-build lexicon khel --map zethu
```

where the third column says where each writing comes from: `own`, `parts`,
`none` or `ambiguous`. An ambiguous word's second column is still that entry's
own writing. Pick the entry by its gloss, and write those signs directly in the
run. Signs typed in a run hold no letter, so they are no word and pass through
as typed.

**Foreign names are spelled deliberately.** A registered name is written like
any other word, so a name with no writing is an error. A foreign name is written
in sound signs, or in Manuel de Codage (sign ids and joiners) through a mapping
whose rows read that notation, used on a run with `map=` and no `lang=`. Nothing
is spelled by sound unless the author does it deliberately.

**Format controls.** Khelathi Zethu Glyphs lays out quadrats and cartouches
itself, from controls typed between its signs: the vertical and horizontal
joiners, the four corner insertions, begin and end segment, and begin and end
enclosure (the cartouche). **A note that holds Zethu stores the font's own twin
controls, U+1EC60 to U+1EC6D**, and not Unicode's Egyptian Hieroglyph Format
Controls at U+13430 to U+1343D. The twins are right to left and belong to no
script, like the signs, so a browser, Foundry or any HarfBuzz-based renderer
shapes them in the same run as the signs; the Unicode controls belong to the
Egyptian script, and in a browser they fall out of the run and the quadrat
comes apart.

**What this repository has.** The Khelathi-zethu script note lists the face
`khelathi-zethu-glyphs`. No mapping note named `zethu` or `zethu-mdc` exists,
and no Khelathi word states a `native` writing for one. Zethu text in a note is
therefore typed as the face's own code points under `font=khelathi-zethu-glyphs`
(case 2 of [the three cases](#91-the-three-cases)), passed through verbatim and
checked only for face coverage. Zethu signs are typed by sign id in Emacs (see
[Typing natively](#14-typing-natively)).

Teng Chou is also logographic: one character per morpheme, in Tantsou one
syllable, shared by Tantsou and Jurthati. It has no mapping note in this
repository, so it is written as native code points when a note needs a
character.

## 14. Typing natively

A note records Unicode characters, and nothing else. Which keyboard typed them
is the author's business, and the markdown and the build neither know nor care.

`@heroiclands/fonts` ships, under `keyboards/`:

- **macOS layouts** in `keyboards/macos/HeroicLands.bundle`: HL Semaron,
  HL Pirzath, HL Thuravark and HL Qalezu. Copy the bundle to
  `~/Library/Keyboard Layouts/`, log out and in, and add each layout under
  System Settings, Keyboard, Text Input, Input Sources.
- **Windows layouts**: `keyboards/windows/<script>.klc`, the Microsoft Keyboard
  Layout Creator source of each layout. The installer is built on Windows.
- **Linux layouts**: `keyboards/linux/hl_<script>`, XKB symbols files.
- **Emacs input methods**: `keyboards/emacs/heroiclands-<script>.el`, a Quail
  input method per script. Put the directory on `load-path`, evaluate
  `(require 'heroiclands-semaron)`, then `M-x set-input-method RET heroiclands-semaron`.
  Emacs has no Option key, so Option+x is typed `\` and then the key x types.
- **Zethu** has an Emacs input method only, `heroiclands-zethu`, typed by sign
  id (`08-001` inserts that sign), because its signs far outnumber a keyboard's
  keys. `keyboards/zethu.md` lists the ids.
- **Cheatsheets**: `keyboards/<script>.md` gives each key, its Emacs sequence,
  its code point, its glyph and its kind.

A note typed natively needs `font=` and no `map=`. Typing roman and letting
`map=` convert it keeps the source readable and diffable, so it is the usual
choice for a language with a dictionary.

**Seeing the characters.** A script's code points draw only in a face that draws
them: the separate faces of `@heroiclands/fonts` (Semaron Kuriale, the Pirzath
faces, Thuravark Carved, Qalezu Hand, Khelathi Zethu Glyphs). In an editor or a
viewer that does not use one of them the characters show as boxes. A combined
editor font that carries every script and the roman text is not available; set
the editor to the face of the script being typed. A mapping note's rows carry a
trailing comment with each row's code points (`# U+F0230`) so the note reads in
any editor.

**Never hand-assemble code points.** A passage is either roman under `map=`, or
typed through a layout or an input method. An agent that writes raw code points
from memory produces characters that no face draws or that mean another sound.

## 15. The workflow for writing a passage

The steps are the same for an agent and a human. The passage here is verse in
Vylari; a prose passage skips the fence.

1. **Read the language note.** Its frontmatter holds the lexicon (`data.words`),
   the grammar (`data.grammar`), the affixes, the sounds and the stress rule
   (`data.sounds`), and the names register (`data.register`). Its prose states
   the palette. `Lore/Pronouncing_Thalorna.md` gives which roman letters stand
   for which sounds.
2. **Write the passage in roman, from the lexicon.** Use lexicon words and their
   regular forms. Write the question, the command and the quotation in words,
   as the language does.
3. **Coin and register first.** A word that is not in the lexicon is a coinage:
   propose it, wait for the owner's approval, and add it to `data.words` before
   the passage uses it ([Coining a word](#5-coining-a-word)). A name goes into
   `data.register`, and a foreign name also needs its row in its own language's
   register ([Registering a name](#7-registering-a-name)).
4. **Mark the passage once.** For verse, open the fence as
   `verse {lang=vyl font=semaron-kuriale map=semaron}`. For prose, use a `:::`
   block or a span with the same keys. The source stays roman, readable
   and diffable, and is never rewritten into code points.
5. **The build converts and checks it,** deterministically: dictionary, rows,
   lexicon check and face coverage.
6. **Proof it with the two commands.**
   - `package-build transliterate semaron --lang vyl --hex "Lokazor lonak, lokamen zaron."`
     prints the code points the build writes, exactly as it writes them.
   - `package-build lexicon vyl --map semaron` lists every word of the language
     with its native form, class and gloss, and whether it is an exception;
     `--derived` adds the regular forms.
7. **Run the guards** in [The guards an author runs](#16-the-guards-an-author-runs).

For Zethu, translate into roman Khelathi from the lexicon, check each word's
writing with `package-build lexicon khel --map zethu`, and report any word with
no stored writing or any ambiguous word rather than inventing a writing.

**An agent stops and asks when:**

- a word the passage needs is not in the lexicon;
- a name the passage needs is in no register;
- a question turns on intent that the language note does not state;
- the passage would need a mark, a letter or a key the tongue does not have.

The language system does not grow to fit a passage. Before adding a rule, a key
or a check about an invented language, ask whether a player would notice; if
not, do not add it.

`transliterate` prints:

```console
$ package-build transliterate semaron --lang vyl --hex "Lokazor lonak, lokamen zaron."
U+F020A U+F023D U+F0239 U+F0230 U+F0246 U+F023D U+F023F U+0020 U+F023A U+F023D U+F023C U+F0230 U+F0239 U+F0268 U+0020 U+F023A U+F023D U+F0239 U+F0230 U+F023B U+F0233 U+F023C U+0020 U+F0246 U+F0230 U+F023F U+F023D U+F023C U+F0268
```

`Lokazor` begins with the capital _L_ of the rows (U+F020A), the comma and full
stop are the script's one point (U+F0268), and `zaron` is spelled by the rows
because no Vylari word states a native form.

## 16. The guards an author runs

Scope the run to what the change can break. The full `npm run lint` runs in
continuous integration; it reads every note and takes minutes.

| Command                                                       | What it checks                                                                                                                                                   | A finding means                                                                                                     |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `npm run lint:addresses` (`package-build lint`)               | Addresses and frontmatter of every note: language keys, registers, mappings, native forms, every marked run (keys, lexicon, names, face coverage), verse columns | The finding names the fault and its fix; see [every finding](#102-every-finding-with-its-fix)                       |
| `npm run lint:markdown`                                       | Markdown style of every markdown file                                                                                                                            | A style rule broken at the line                                                                                     |
| `npm run lint:format` and `npm run format`                    | Prettier formatting; `format` writes. Format only the files changed: `npm run format -- <paths>`                                                                 | A file would be rewritten                                                                                           |
| `npm run lint:content-links`                                  | Every link in the content tree lands somewhere                                                                                                                   | A broken link or wikilink                                                                                           |
| `npm run lint:earth-words`                                    | Every `data.words` form against the word lists of its model language (`SOURCES`)                                                                                 | `"<form>" is a word of the <model> list`: a whole-word Earth collision. Replace the word, with the owner's approval |
| `npm run lint:earth-names`                                    | No Earth proper name in a note: a language, country, city, people, religion, person or work. "English", "French" and "Latin" are refused as whole words          | Recast the name as a gloss or a rendering                                                                           |
| `npm run lint:observer`                                       | The banned sentence shape: a fact followed by a hypothetical person who notices, judges or corrects it                                                           | End the sentence at the fact, or make the consequence the subject                                                   |
| `npm run lint:verse-fences`                                   | No `poetry` fence                                                                                                                                                | Write the fence as `verse`                                                                                          |
| `npm run lint:affix-replaces`                                 | An affix whose `attaches` prose says it replaces a closing sound but states no `replaces`                                                                        | Add `replaces: vowel` or the letters it takes the place of                                                          |
| `npm run lint:retired`                                        | Retired names do not survive in prose; the Nordmal drift sweep                                                                                                   | A retired name stands where its replacement belongs                                                                 |
| `npm run lint:nordmal-concordance`                            | The Nordmal concordance table agrees with the tree                                                                                                               | A row the tree contradicts                                                                                          |
| `npm run lint:chronology`, `lint:reference-people`            | Dates and people in notes                                                                                                                                        | A date out of order, a person unresolved                                                                            |
| `npm run lint:lang`                                           | The localization files in `lang/` (not the tongues)                                                                                                              | A localization file fault                                                                                           |
| `npx package-build transliterate <map> --lang <lang> --hex …` | The conversion of a passage, as the build makes it                                                                                                               | A fault names the unknown map, language or face                                                                     |
| `npx package-build lexicon <lang> --map <map> [--derived]`    | A language's words with their native forms                                                                                                                       | A fault names the unknown language, map or face                                                                     |
| `npx package-build core [--language <name>]`                  | The concepts a language has no word for                                                                                                                          | Nothing: a missing concept is the work list, and the exit status is 0                                               |

Notes on the table:

- **`lint:earth-words` reads word lists the running machine keeps.** The
  repository holds no list and no word of any real language. The lists are the
  `<language>.txt` and `<language>.tsv` files of the directories named by
  `--wordlists <dir>`, else the `KHAZRYN_WORDLISTS` environment variable, else
  `lists/` and `base/` of an `earth-wordlists` clone beside the checkout. With
  none, the check says so once and exits 0, so a pass on a machine without the
  lists proves nothing. Short Tantsou and Jurthati words collide constantly, so
  there a collision needs a shared meaning as well as a shared form.
- **`lint:addresses` needs the dependency index.** Run `npm run build:deps`
  (`package-build deps fetch`) once; without it the lint stops with
  `sohl is a declared dependency but its content index has not been fetched`.
- **Run `npm ci` first in a fresh checkout or worktree.** A build reads the
  installed `@heroiclands/package-build`, and a checkout without its own
  `node_modules` resolves a parent's.
- **Markdown in `docs/` and in notes** is linted by `lint:markdown`; the build
  of the site and the book reads only `assets/`.

## 17. Common mistakes

Each is a real finding or a real trap.

1. **Using a word the lexicon does not hold.**
   `` `kelvothar` is not a word of the `vyl` lexicon … coin it in the lexicon (or register the name) first ``.
   The word needs the owner's approval and an entry in `data.words` before the
   passage.
2. **Assuming a name is a word.** A foreign name, such as a place of another
   people, is an unknown word in the run until it is registered as
   `other:<tongue>`, and the same row must exist in that tongue's register.
3. **Typing roman under `font=` with no `map=`.** Every roman letter is "not drawn
   by the font". Add `map=`.
4. **Typing a question mark in a mapped run.** The mark has no row in the
   mapping, and the language asks in words.
5. **Putting stars in a Vylari run.** Vylari marks emphasis with a word.
6. **Naming a face the mapping does not list.** One mismatch reports once for the
   face and again for every character that face cannot draw.
7. **Misspelling `font=` or `map=`.** The message suggests the nearest name.
8. **Writing `lang=vly`.** A valid tag for another language, so it warns rather
   than fails, and the passage is unchecked.
9. **Opening a poem with `poetry`.** `package-build lint` reports nothing, the
   page shows a code listing, and only `npm run lint:verse-fences` catches it.
10. **Giving a column line one language.** A verse in columns needs one span for
    each language its columns name.
11. **Stating a `native` form the rows already give.** A native form is an
    exception; delete the redundant entry.
12. **Changing an established word to fit an affix.** Words win: correct the
    affix.
13. **Stating an affix's replacement only in `attaches`.** The check reads only
    `replaces`; `lint:affix-replaces` finds the omission.
14. **Adding a gender, a plural or a verb pattern "for completeness".** None is
    required, none is checked, and none is added.
15. **Adding a mark, a letter pair or a key because a passage seems to want one.**
    The language system does not grow. A mark that changes nothing is left out.
16. **Passing `lint:earth-words` on a machine with no word lists.** The check
    exits 0 with a note on stderr.
17. **Appending an invented observer.** A fact followed by a hypothetical person
    who notices, judges or corrects it fails `lint:observer`. Stop at the fact, or
    make the consequence the subject.
18. **Guessing a Zethu writing, or choosing one of two ambiguous entries.** Look
    the sense up in `package-build lexicon khel --map zethu`, and write those
    signs directly.
19. **Writing a `scroll` fence in a script that states no direction.** The fence
    is an error there; a script written in columns states
    `direction: vertical-rl`.
20. **Storing Unicode's Egyptian controls (U+13430 to U+1343D) in a Zethu note.**
    Store the font's twins, U+1EC60 to U+1EC6D.
21. **Reading the Pirzath marks into every tongue.** Pirzath has quotation marks
    and the tongues written in it use them; no other tongue's script does.
22. **Writing code points from memory.** Type through a layout, or write roman
    under `map=`.
