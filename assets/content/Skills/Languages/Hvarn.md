---
shortcode: hvarnlng
name: {full: Hvarn Language, aliases: []}
type: skill
subType: language
description: "The tongue of the guide-people of the Eastern Reach—unrelated to any lowland family, unwritten, and the one trans-Grazian language a lowlander occasionally learns."
tags: []
data:
  abbreviation: Hv.
  fields:
    - name: The people and the house
      holds: "The people, the long house, its hearths and what the hearths owe one another."
    - name: The road and the party
      holds: "The crossings of the Eastern Reach, the rope and the party that walks on it."
    - name: The roll
      holds: "The dead, the places they were found, and the recitation that keeps both."
    - name: The winter council
      holds: "The offices of the council, each a compound of two words."
  words:
    - form: hvrn
      class: "n"
      field: The people and the house
      gloss: "the people, the Hvarn as they name themselves"
    - form: vhrn
      class: "n"
      field: The people and the house
      gloss: "the long house, one roof over the whole people"
    - form: kuzh
      class: "n"
      field: The people and the house
      gloss: "a hearth, a household at one fire"
    - form: douzn
      class: "n"
      field: The people and the house
      gloss: "winter, the closed months"
    - {form: ruvn, class: "n", field: The people and the house, gloss: "a debt between hearths"}
    - form: sevd
      class: "n"
      field: The people and the house
      gloss: "the turn, the rotation by which the crossings are shared"
    - {form: vosh, class: "n", field: The road and the party, gloss: "a crossing of the Reach"}
    - form: geiv
      class: "n"
      field: The road and the party
      gloss: "a shelf, the ledge a crossing follows above a gorge"
    - {form: wuvd, class: "n", field: The road and the party, gloss: "a gorge"}
    - {form: kleizd, class: "n", field: The road and the party, gloss: "a storm of the Reach"}
    - {form: zvazd, class: "n", field: The road and the party, gloss: "a rope"}
    - form: muvn
      class: "n"
      field: The road and the party
      gloss: "a party, those who walk on one rope"
    - {form: rouzn, class: "n", field: The roll, gloss: "the roll of the dead"}
    - {form: hozd, class: "n", field: The roll, gloss: "the place where one of the dead was found"}
    - {form: dzevd, class: "n", field: The roll, gloss: "a bone"}
    - {form: poudz, class: v, field: The roll, gloss: "bring up from below"}
    - {form: zourd, class: v, field: The roll, gloss: "recite, say aloud before the council"}
    - {form: nezn, class: v, field: The roll, gloss: "read the weather"}
    - form: dzevdpoudz
      class: "n"
      field: The winter council
      gloss: "the bone-bringer, who recovers the dead and keeps the roll"
      built: [dzevd, poudz]
    - form: kleizdnezn
      class: "n"
      field: The winter council
      gloss: "the storm-reader, whose refusal ends a day's travel"
      built: [kleizd, nezn]
    - form: douznzourd
      class: "n"
      field: The winter council
      gloss: "the winter-speaker, who presides over the council"
      built: [douzn, zourd]
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: "{given} {hearth}"
    given:
      female:
        - "Hvrel"
        - "Tsevrel"
        - "Rhanvi"
        - "Delzh"
        - "Vurn"
        - "Shemli"
        - "Brdnu"
        - "Zhavel"
        - "Ourn"
        - "Klemsi"
        - "Rhevzhn"
        - "Tudzelv"
        - "Vnesh"
        - "Melrhu"
        - "Dzorin"
        - "Habvrn"
        - "Sulzhe"
        - "Trmen"
        - "Ovru"
        - "Rhistne"
      male:
        - "Hvrel"
        - "Tsevrel"
        - "Rhanvi"
        - "Delzh"
        - "Vurn"
        - "Shemli"
        - "Brdnu"
        - "Zhavel"
        - "Ourn"
        - "Klemsi"
        - "Rhevzhn"
        - "Tudzelv"
        - "Vnesh"
        - "Melrhu"
        - "Dzorin"
        - "Habvrn"
        - "Sulzhe"
        - "Trmen"
        - "Ovru"
        - "Rhistne"
    hearth:
      - "Nurvharn"
      - "Tsedvrn"
      - "Rhonzhel"
      - "Klemvrd"
      - "Hvurnash"
      - "Dzelbrn"
      - "Vrestun"
      - "Shulnrh"
  sounds:
    edges:
      - {edge: openCluster, sounds: [hv, hvr, vh, vr, vn, kl, tr, br, dr, zv]}
      - {edge: closeConsonant, sounds: any}
      - edge: closeCluster
        sounds: [rn, rd, rzh, lv, lk, nk, sk, vd, zd, zn, lzh, rv, nd, vn, dn, rk, lt]
      - {edge: vowelPair, sounds: [ei, ou]}
      - {edge: syllabic, sounds: [r, rh, l, m, n]}
    clusters: {max: 3}
  scope:
    lore: [hvarnclt]
    addresses:
      - lore-hvarnclt
      - skill-hvarnlng
      - affiliation-hvarnguides
      - place-nurvhrn
      - doc-hvarnadvguide
  tongues:
    - {tag: hvarn, meaning: a Hvarn name, language: skill-hvarnlng}
    - {tag: translation, meaning: a name given in the language of these pages}
  register:
    - {name: Bone-bringer, tongue: translation}
    - {name: Drover, tongue: translation}
    - {name: Fort-carrier, tongue: translation}
    - {name: Hearth-head, tongue: translation}
    - {name: Hearth-kin, tongue: translation}
    - {name: Hvarn, tongue: hvarn}
    - {name: Hvarn Adventurer's Guide, tongue: translation}
    - {name: Hvarn Language, tongue: translation}
    - {name: Hvarn Lexicon, tongue: translation}
    - {name: Nurvharn, tongue: hvarn}
    - {name: Reach-guide, tongue: translation}
    - {name: Roadwalker, tongue: translation}
    - {name: Storm-Reader, tongue: translation}
    - {name: Taken-in, tongue: translation}
    - {name: The Hvarn, tongue: translation}
    - {name: Turn-keeper, tongue: translation}
    - {name: Unhoused, tongue: translation}
    - {name: Winter-speaker, tongue: translation}
  retired:
    - {form: Tudra, instead: Tudzelv, why: "an Earth word, in the name lists"}
    - {form: Tsune, instead: Tsevrel, why: "an Earth given name, in the name lists"}
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

Hvarn is the tongue of the [[affiliation-hvarnguides|Hvarn]] of [[place-estrnreach|the Eastern Reach]]. Fluency measures how much of it a speaker commands, from the fort-contract vocabulary a lowland factor picks up to the full speech of the winter house. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Hvarn is not related to [[skill-osketlng|Osket]], which surprises everyone who has assumed it must be. The two peoples live three hundred miles apart along the same wall, do much the same work, marry across the gap occasionally, and speak languages with no demonstrable common stock—a fact both peoples state without interest and lowland scholars find difficult to accept.

It is the trans-Grazian language outsiders most often learn, which is to say that perhaps forty lowlanders speak it. They are the factors who renegotiate the garrison contract, a handful of eastern janapada clerks, and the occasional soldier of [[place-sanghafort|the Sangha-fort]] who has wintered at [[place-nurvhrn|Nurvharn]] and come back fluent and strange.

## How Hvarn sounds

Hvarn is the dense, short speech of the eastern guide-people. Most of its words are one syllable.

**The vowels.** _e_, _a_, _o_ and _u_, with _ou_ and _ei_ common. Every word has a vowel.

**The consonants.** _hv_, _dz_, _zh_, _v_, _z_, _r_, _l_, _n_ and _d_.

**Clusters.** _hv-_ and _dz-_ open words, and _-zd_, _-vn_ and _-zn_ close them.

**Endings.** Hvarn words end on _-n_, _-d_, _-v_ or _-l_. Names add _-i_ or _-el_.

**What Hvarn leaves out.** It has no word without a vowel, and no _r_ standing for a vowel between consonants.

## Phonology

### Consonant System

**Unvoiced:** p, t, k

**Voiced:** b, d, g

**Affricates:** ts, dz

**Fricatives:** f, v, s, z, sh, zh, h

**Nasals:** m, n

**Liquids & Approximants:** l, r, rh (voiceless), w

### Vowel System

**Vowels:** a, e, i, o, u, and a front rounded vowel, said with the tongue forward and the lips rounded

**Diphthongs:** ei, ou

Hvarn admits syllabic liquids and nasals, so that a word may be spoken with no vowel in it at all: _Nurvharn_ carries its second syllable on the r, and _hvrn_, the people's own word for themselves, has none. Lowlanders supply a vowel where there is none.

### Phonotactic Patterns

- **Consonant Clusters:** Heavy in every position, and the initial cluster _hv-_ is the people's own name
- **Syllable Structure:** Closed, and frequently vowelless; stress falls on the first syllable without exception
- **Final Consonants:** Unrestricted, and a final cluster of three is ordinary
- **Word Length:** Short and dense; a two-syllable Hvarn word routinely carries what Vedyari needs five for

## Grammar Notes

Word order is verb-final. Verbs do not mark tense; when an action happened is left to the adverbs. Nouns are not inflected for number. The most elaborated part of the grammar is a system of paired forms distinguishing what a speaker has done himself from what he has done as one of a party, which is exactly the distinction a people who work in roped groups would elaborate.

## Script & Literacy

There is no script and there is no cord. What the Hvarn keep, they keep by recitation: the roll of the dead and where each was found, the rotation of the crossings, the debts between hearths. The Bone-bringer recites the roll at the winter council each year, and a fault in the recitation is corrected from the floor by anyone who catches it.

## Naming Traditions

A person carries a given name and a hearth name, and the hearth name changes if he is taken into another hearth. Given names are drawn from the roll: a child is named for a person in it, and the naming carries the obligation to know where that person was found.

### Name Lists

**Given Names:** Hvrel, Tsevrel, Rhanvi, Delzh, Vurn, Shemli, Brdnu, Zhavel, Ourn, Klemsi, Rhevzhn, Tudzelv, Vnesh, Melrhu, Dzorin, Habvrn, Sulzhe, Trmen, Ovru, Rhistne

**Hearth Names:** Nurvharn, Tsedvrn, Rhonzhel, Klemvrd, Hvurnash, Dzelbrn, Vrestun, Shulnrh

## Hvarn Lexicon {#lexicon}

The [[affiliation-hvarnguides|Hvarn]] call themselves _hvrn_, a word with no vowel in it, and the vowel a lowlander hears there is the one he supplied. [[skill-hvarnlng|Hvarn]] is short and heavy: a word of one syllable carries what Vedyari says in a phrase, and a compound of two such words names an office of the winter council. This page is the word-hoard of the tongue: its words, the rules a new word is built by, and the register of every name the setting gives the Hvarn and the places they hold.

A Hvarn compound sets two words side by side, the first saying which and the second saying what: _dzevd_ is bone and _poudz_ is to bring up from below, so _dzevdpoudz_ is the bone-bringer, who recovers the dead from the eastern gorges. The words are written whole at the seam, however many consonants meet there.

The sound of Hvarn is dense. Clusters stand at the start and the end of a word, a final cluster of three is ordinary, and the liquids and nasals carry a syllable of their own where no vowel stands beside them: _hvrn_ is spoken _hv-_, a syllable on the _r_, and a closing _n_. Stress falls on the first syllable without exception.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited. A word made of smaller parts names the words the form is made of, joined by `+`, and the form is exactly those words set side by side.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-hvarnlng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Word edges

A word opens on a vowel, a single consonant, or one of the clusters below, and closes on any consonant or one of the clusters below. A liquid or a nasal between consonants, or closing a word after one, carries the syllable itself and stands where a vowel would.

```sql
SELECT CASE edge WHEN 'openCluster' THEN 'Pairs that may open a word, and three' WHEN 'closeConsonant' THEN 'Consonants that close a word' WHEN 'closeCluster' THEN 'Pairs that may close a word' WHEN 'vowelPair' THEN 'Vowels that may stand together' WHEN 'syllabic' THEN 'Consonants that may carry a syllable' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-hvarnlng' ORDER BY position
```

### Clusters

```sql
SELECT 'Most consonants together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-hvarnlng'
```

## Words {#words}

### The people and the house

The long house at [[place-nurvhrn|Nurvharn]] is _vhrn_, the roof that holds the whole people through the closed months, and every household along it is a _kuzh_, a hearth. The name _Nurvharn_ is older than the words on this page.

## Making names {#making-names}

**A person** carries a given name and a hearth name, the given name first: _Hvrel, of the Klemvrd hearth_. A given name comes off the [[skill-hvarnlng|roll]], so it is as old as the person it remembers and is not built from the words on this page. A hearth name is the winter house's, and changes when a person is taken into another hearth.

**An office** of the winter council is a compound of what the holder handles and what he does with it, as _dzevdpoudz_, the bone-bringer, is. The notes give the offices in the reader's tongue, and the register tags them so.

## Scope {#scope}

The register below holds every name of every note of the Hvarn. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'lore' THEN 'lore' WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-hvarnlng'
GROUP BY kind ORDER BY CASE kind WHEN 'lore' THEN 0 WHEN 'addresses' THEN 1 END
```

## Attested names {#attested-names}

Every name the setting gives the Hvarn, their offices and the places they hold, with the note where it is met. A name built from this page shows how; a name the tongue uses that is not built from it shows `—`, and a name in the reader's tongue is tagged as such.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'hvarn' THEN ', [[' || tongue_language || '|Hvarn]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-hvarnlng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-hvarnlng' ORDER BY position
```

## Retired names {#retired-names}

A retired name is one the setting does not write: a word or a name of an Earth language. Each stands below with the name written in its place, and no page writes it, however accented. A `terran_analog` comment names the Earth source on purpose and is not read.

```sql
SELECT '`' || form || '`' AS "Retired",
       coalesce(array_to_string(list_transform(instead, x -> '`' || x || '`'), ', '), '—') AS "Written instead",
       why AS "Why"
FROM retired WHERE language = 'thalorna-note-skill-hvarnlng' ORDER BY position
```
