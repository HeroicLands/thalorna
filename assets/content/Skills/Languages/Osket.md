---
shortcode: osketlng
name: {full: Osket Language, aliases: []}
type: skill
subType: language
description: "The tongue of the guide-people of the western and central Grazian crossings—related to nothing spoken in any lowland, and learned by outsiders almost never."
tags: []
data:
  core: true
  abbreviation: Osk.
  fields:
    - name: The road and the col
      holds: "The crossings, their stages and shelves, and what a party carries over them."
    - {name: "Weather, ground, beast and state", holds: "The words a personal name is taken from."}
    - name: The hearth and the cord
      holds: "The hearth, its herd and store, the cord and the dead it records."
  words:
    - form: ghauk
      class: "n"
      field: The road and the col
      gloss: "a road over the wall, held by a lineage by descent"
    - form: tsum
      class: "n"
      field: The road and the col
      gloss: "a col, the saddle at the top of a road"
    - form: besk
      class: "n"
      field: The road and the col
      gloss: "a stage, a day's walk between shelters"
    - form: wung
      class: "n"
      field: The road and the col
      gloss: "a shelf, the ledge a road follows"
    - form: dulkh
      class: "n"
      field: The road and the col
      gloss: "a load, what one beast carries"
    - {form: moiq, class: "n", field: The road and the col, gloss: "a rope"}
    - {form: nushang, class: "n", field: "Weather, ground, beast and state", gloss: "hail"}
    - form: yulmum
      class: "n"
      field: "Weather, ground, beast and state"
      gloss: "deep snow, lying past the knee"
    - form: uchom
      class: "n"
      field: "Weather, ground, beast and state"
      gloss: "frost-smoke, the breath over still air at dawn"
    - form: ghuqom
      class: "n"
      field: "Weather, ground, beast and state"
      gloss: "the stillness before snow"
    - {form: sunash, class: "n", field: "Weather, ground, beast and state", gloss: "the thaw"}
    - form: golkash
      class: "n"
      field: "Weather, ground, beast and state"
      gloss: "scree, a slope of loose stone"
    - {form: baidosk, class: "n", field: "Weather, ground, beast and state", gloss: "a ridge"}
    - form: goich
      class: "n"
      field: The hearth and the cord
      gloss: "a hearth, a house with its herd, its pasture and its road"
      concept: hearth
    - {form: poich, class: "n", field: The hearth and the cord, gloss: "a yak"}
    - {form: rul, class: "n", field: The hearth and the cord, gloss: "the common winter store"}
    - form: shom
      class: "n"
      field: The hearth and the cord
      gloss: "a door, and the shelter owed to whoever reaches it"
      concept: door
    - {form: wugh, class: "n", field: The hearth and the cord, gloss: "a knotted cord"}
    - {form: boik, class: "n", field: The hearth and the cord, gloss: "a knot"}
    - form: yoigh
      class: "n"
      field: The hearth and the cord
      gloss: "the dead, those a road has kept"
    - form: ghaukwugh
      class: "n"
      field: The hearth and the cord
      gloss: "a guide-cord, the knotted record of a road"
      built: [ghauk, wugh]
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: ["{given}", "{hearth}, {given}"]
    given:
      female:
        - "Tsum"
        - "Orghat"
        - "Nushang"
        - "Nashken"
        - "Urtal"
        - "Ghomse"
        - "Belkhat"
        - "Yulmum"
        - "Uchom"
        - "Rhankel"
        - "Ghuqom"
        - "Shogme"
        - "Ubren"
        - "Kharsel"
        - "Yolte"
        - "Sunash"
        - "Omker"
        - "Tselbat"
        - "Nureg"
        - "Golkash"
      male:
        - "Tsum"
        - "Orghat"
        - "Nushang"
        - "Nashken"
        - "Urtal"
        - "Ghomse"
        - "Belkhat"
        - "Yulmum"
        - "Uchom"
        - "Rhankel"
        - "Ghuqom"
        - "Shogme"
        - "Ubren"
        - "Kharsel"
        - "Yolte"
        - "Sunash"
        - "Omker"
        - "Tselbat"
        - "Nureg"
        - "Golkash"
    hearth:
      - "Tsokhar"
      - "Oskhelt"
      - "Ghelmun"
      - "Burnakh"
      - "Qarsolt"
      - "Utenkhar"
      - "Shomber"
      - "Rhandug"
  sounds:
    edges:
      - {edge: openCluster, sounds: [sk, st, kr, gr, bl, tr]}
      - {edge: closeConsonant, sounds: any}
      - {edge: closeCluster, sounds: [lt, rk, rt, nt, sk, lkh, rq, lq, nk]}
      - {edge: vowelPair, sounds: [ai, au, oi]}
    clusters: {max: 3}
  scope:
    lore: [osketclt]
    addresses:
      - lore-osketclt
      - skill-osketlng
      - affiliation-osketguides
      - place-oskhelt
      - place-tsokhar
      - doc-osketadvguide
      - miscgear-guidecord
  tongues:
    - {tag: osket, meaning: an Osket name, language: skill-osketlng}
    - {tag: translation, meaning: a name given in the language of these pages}
  register:
    - {name: Carrier, tongue: translation}
    - {name: Cord-keeper, tongue: translation}
    - {name: Fee-reckoner, tongue: translation}
    - {name: Fosterling, tongue: translation}
    - {name: Guide-mother, tongue: translation}
    - {name: Hearth-kin, tongue: translation}
    - {name: Hearth-warden, tongue: translation}
    - {name: Herdholder, tongue: translation}
    - {name: Osket, tongue: osket}
    - {name: Osket Adventurer's Guide, tongue: translation}
    - {name: Osket Guide-Cord, tongue: translation}
    - {name: Osket Language, tongue: translation}
    - {name: Osket Lexicon, tongue: translation}
    - {name: Oskhelt, tongue: osket}
    - {name: Road-holder, tongue: translation}
    - {name: Roadless, tongue: translation}
    - {name: Snow-watcher, tongue: translation}
    - {name: Speaker of the Cols, tongue: translation}
    - {name: The Osket, tongue: translation}
    - {name: Tsokhar, tongue: osket}
  retired:
    - {form: Tsök, instead: Tsum, why: "an Earth word, in the name lists"}
    - {form: Kelbü, instead: Nushang, why: "an Earth word, in the name lists"}
    - {form: Tümür, instead: Yulmum, why: "an Earth given name, in the name lists"}
    - {form: Öske, instead: Uchom, why: "an Earth word, in the name lists"}
    - {form: Qadür, instead: Ghuqom, why: "an Earth word, in the name lists"}
    - {form: Danghü, instead: Sunash, why: "an Earth word, in the name lists"}
    - {form: Khöltan, instead: Golkash, why: "an Earth word, in the name lists"}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Trans-Grazian}}
---

Osket is the tongue of [[affiliation-osketguides|the Osket]], who hold the western and central crossings of [[place-graznmntns|the Grazian Mountains]]. Fluency measures the range of what a speaker can say in it, from a caravan-master's twenty words of road-command to the fluent speech of someone raised at a hearth. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Osket is related to nothing in any lowland family. It shares no root stock with [[skill-vedyarlng|Vedyari]], with [[skill-khazrilng|Tellumi]], with [[skill-tantsoulng|Tantsou]] or with anything else that has been compared with it, and the comparisons have been made: a Vedyari grammarian spent four seasons at [[place-oskhelt|Oskhelt]] two centuries ago and published a careful, competent account whose conclusion was that there was nothing to connect it to.

Almost no outsider speaks it. What lowlanders learn is a road-pidgin of perhaps two hundred words—loads, weather, halt, go, water, rope, dead—and the Osket teach that pidgin willingly and the language not at all. There is no prohibition. There is simply no occasion on which an Osket has ever needed a lowlander to understand more.

## How Osket sounds

Osket is held at the back of the throat. It is slower than [[skill-hvarnlng|Hvarn]], with more vowels.

**The vowels.** _o_, _u_ and _a_, with _oi_ and _au_.

**The consonants.** _gh_, _q_, _kh_, _sh_, _ts_, _l_, _m_ and _ng_.

**Clusters.** _-sk_ and _-lk_ close words. Otherwise a syllable is a consonant and a vowel.

**Endings.** Osket words end in _-osk_, _-om_, _-ang_, _-ash_ or _-el_.

**What Osket leaves out.** It has no _dz_, _zh_ or _hv_, which are Hvarn's, and no run of three consonants.

## Phonology

### Consonant System

**Unvoiced:** p, t, k, q (uvular)

**Voiced:** b, d, g

**Affricates:** ts, ch

**Fricatives:** s, sh, kh (velar), gh (voiced velar), h

**Nasals:** m, n, ng

**Liquids & Approximants:** l, r, w, y

### Vowel System

**Vowels:** a, e, i, o, u, and two front rounded vowels, said with the tongue forward and the lips rounded

**Diphthongs:** ai, au, oi

The two front rounded vowels are the feature an outsider hears first and produces last. They are phonemic, they are frequent, and a lowlander who substitutes the unrounded vowel for either of them will be understood and will also be identified as a lowlander by anyone within earshot.

### Phonotactic Patterns

Consonant Clusters
: Freely admitted at the start and end of a word alike; _[[place-tsokhar|Tsokhar]]_ opens on an affricate and closes on a liquid, _Oskhelt_ sets _s_ and _kh_ together inside and closes on _lt_

Syllable Structure
: Heavy, and commonly closed; long vowels are not distinguished

Final Consonants
: Unrestricted—a word may end on any consonant or any cluster of them, which is the plainest structural difference from every lowland tongue

Word Length
: Short. Two syllables is the norm and four is rare, and compounds are formed by juxtaposition without linking material

## Grammar Notes

Word order is verb-final and rigid. There is no verb "to have." Evidentiality is obligatory on every finite verb—a speaker cannot report that the pass is open without marking whether he saw it, was told it, or infers it, and the pidgin's failure to carry this distinction is the single greatest source of misunderstanding between guides and the people they take over.

## Script & Literacy

There is no script. The Osket keep records in knotted cord—route, stage, load, day, and the dead—and the cord is read by the keeper of the lineage that tied it and by nobody else. Cord-keeping is taught to one person in a generation, and a cord whose keeper dies untimely is not read again by anyone.

A few Osket of the [[place-suryadvar|Suryadvar]] lineages read and write lowland Vedyari, for contracts. None of them writes Osket in it.

## Naming Traditions

A personal name is a single word, most often two syllables, drawn from weather, ground, beast or condition, and is not inherited. A lineage name is the road: a person is of this crossing or that one, and the crossing is named first when a stranger must be told who he is dealing with.

### Name Lists

**Given Names:** Tsum, Orghat, Nushang, Nashken, Urtal, Ghomse, Belkhat, Yulmum, Uchom, Rhankel, Ghuqom, Shogme, Ubren, Kharsel, Yolte, Sunash, Omker, Tselbat, Nureg, Golkash

**Hearth Names:** Tsokhar, Oskhelt, Ghelmun, Burnakh, Qarsolt, Utenkhar, Shomber, Rhandug

## Osket Lexicon {#lexicon}

An [[affiliation-osketguides|Osket]] lineage is a hearth, a herd, a high pasture and one road, and its tongue names each of them in a word of one syllable: _goich_ is the hearth, _poich_ the yak, _ghauk_ the road held by descent. Osket is related to nothing spoken in any lowland, and its words owe nothing to Vedyari. This page is the word-hoard of the tongue: its words, the rules a new word is built by, and the register of every name the setting gives the Osket and the places they hold.

A compound sets two words side by side with no linking material, the first saying which and the second saying what: _ghauk_ is the road and _wugh_ a knotted cord, so _ghaukwugh_ is the guide-cord, the record of a road. A personal name is a single word taken from weather, ground, beast or condition, so the words of the dictionary are also the names the Osket give their children.

The sound of Osket is heavy and closed. A word may end on any consonant, the front rounded _ö_ and _ü_ are the vowels an outsider hears first, and the uvular _q_ is made far back in the throat. Long vowels are not distinguished.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited. A word made of smaller parts names the words the form is made of, joined by `+`, and the form is exactly those words set side by side.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-osketlng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Word edges

A word opens on a vowel, a single consonant or one of the pairs below, and closes on any consonant or one of the pairs below.

```sql
SELECT CASE edge WHEN 'openCluster' THEN 'Pairs that may open a word' WHEN 'closeConsonant' THEN 'Consonants that close a word' WHEN 'closeCluster' THEN 'Pairs that may close a word' WHEN 'vowelPair' THEN 'Vowels that may stand together' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-osketlng' ORDER BY position
```

### Clusters

```sql
SELECT 'Most consonants together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-osketlng'
```

## Making names {#making-names}

**A person** carries one word, most often of two syllables, taken from weather, ground, beast or condition: _Nushang_ is hail and _Yulmum_ deep snow. The name is not inherited. What is inherited is the road, and a stranger is told the crossing first and the person second: _Suryadvar, Yolte_.

**A place** of the Osket is older than the words on this page: [[place-oskhelt|Oskhelt]] and [[place-tsokhar|Tsokhar]] stand in the register with `—`. The crossings themselves are named in Vedyari, and the [[skill-vedyarlng#lexicon|Vedyari lexicon]] registers them.

## Scope {#scope}

The register below holds every name of every note of the Osket. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'lore' THEN 'lore' WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-osketlng'
GROUP BY kind ORDER BY CASE kind WHEN 'lore' THEN 0 WHEN 'addresses' THEN 1 END
```

## Attested names {#attested-names}

Every name the setting gives the Osket, their offices and the places they hold, with the note where it is met. A name built from this page shows how; a name the tongue uses that is not built from it shows `—`, and a name in the reader's tongue is tagged as such.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'osket' THEN ', [[' || tongue_language || '|Osket]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-osketlng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-osketlng' ORDER BY position
```

## Retired names {#retired-names}

A retired name is one the setting does not write: a word or a name of an Earth language. Each stands below with the name written in its place, and no page writes it, however accented. A `terran_analog` comment names the Earth source on purpose and is not read.

```sql
SELECT '`' || form || '`' AS "Retired",
       coalesce(array_to_string(list_transform(instead, x -> '`' || x || '`'), ', '), '—') AS "Written instead",
       why AS "Why"
FROM retired WHERE language = 'thalorna-note-skill-osketlng' ORDER BY position
```
