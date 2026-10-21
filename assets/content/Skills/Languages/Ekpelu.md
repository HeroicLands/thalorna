---
shortcode: ekpelulng
name: {full: Ekpelu Language, aliases: []}
type: skill
subType: language
description: "The common tongue of the forest peoples of central Zerathia: small, open and unwritten, spoken with a different accent and a different word for the sacred by each of the four traditions."
tags: []
data:
  core: true
  abbreviation: Ekp.
  fields:
    - name: The people and the bands
      holds: "A person, a band, a tribe, the fire, and the four standings within a tribe."
    - name: The forest and the water
      holds: "The river, the forest, the trail, the weather and the beasts that matter most."
    - name: Spirits and manners
      holds: "The spirits, the places they hold, and what is owed to them."
    - {name: Qualities, holds: "Size, depth and darkness, the words that finish a name."}
    - name: The traditions
      holds: "The four ways of being a forest person, each named for what it keeps or dwells by."
    - name: Words of one tradition
      holds: "The words for sacred things that one tradition uses and the others do not."
  affixes:
    - form: "-ndo"
      gloss: "the keeper of it: one who tends and holds it"
      attaches: "added"
      examples: ["luwa > luwando, a keeper of the river"]
      tones: L
    - form: "-ma"
      gloss: "the child of it: one who is fed by it"
      attaches: "added"
      examples: ["yeso > yesoma, a child of the forest"]
      tones: H
    - form: "-ye"
      gloss: "the dweller beside it: one who lives at its border"
      attaches: "added"
      examples: ["pewa > pewaye, a dweller at the edge"]
      tones: L
    - form: "-la"
      gloss: "the band of it: those who follow or camp by it"
      attaches: "added"
      examples: ["luwa > luwala, the river's band"]
      tones: H
  words:
    - form: ekpelu
      class: "n"
      field: The people and the bands
      gloss: "speech, the common tongue of the forest peoples"
      tones: LHL
    - form: biko
      class: "n"
      field: The people and the bands
      gloss: "a person, one of the people"
      tones: HL
    - form: sepo
      class: "n"
      field: The people and the bands
      gloss: "a child"
      tones: LH
      concept: child
    - form: dumo
      class: "n"
      field: The people and the bands
      gloss: "a band, those who camp and eat together"
      tones: HL
    - form: ndaro
      class: "n"
      field: The people and the bands
      gloss: "a tribe, the bands who follow one leader"
      tones: HH
    - form: hoba
      class: "n"
      field: The people and the bands
      gloss: "a fire, the fire a band eats at"
      concept: fire
      tones: LL
    - form: gbulu
      class: "n"
      field: The people and the bands
      gloss: "an ancestor, one of the dead who are still spoken to"
      concept: ancestor
      tones: HL
    - form: tolu
      class: "n"
      field: The people and the bands
      gloss: "a dependent: a child, a captive, or a stranger not yet taken in"
      tones: LH
    - form: wibo
      class: "n"
      field: The people and the bands
      gloss: "a member, a full adult with a voice in the band"
      tones: HH
    - form: mbeli
      class: "n"
      field: The people and the bands
      gloss: "an elder, a member whose memory and dealings with the spirits count"
      tones: LL
    - form: kpaso
      class: "n"
      field: The people and the bands
      gloss: "the tribal leader, the one person the tribe follows"
      tones: HL
    - form: gbolo
      class: "n"
      field: The people and the bands
      gloss: "an outsider, one who is not of the people"
      tones: LH
    - form: gbeni
      class: "n"
      field: The people and the bands
      gloss: "a trade-friendship, the hereditary bond between a forest family and an outside one"
      tones: HH
    - form: gbenindo
      class: "n"
      field: The people and the bands
      gloss: "a trade-keeper, one who holds a trade-friendship by inheritance"
      built: [gbeni, "-ndo"]
      tones: HHL
    - {form: luwa, class: "n", field: The forest and the water, gloss: "a river", tones: LH}
    - form: yeso
      class: "n"
      field: The forest and the water
      gloss: "the forest, the living forest, the canopy and what it holds"
      tones: HL
    - form: pewa
      class: "n"
      field: The forest and the water
      gloss: "the edge, where the forest ends"
      tones: LL
    - {form: gbele, class: "n", field: The forest and the water, gloss: "a tree", tones: HL}
    - {form: kiro, class: "n", field: The forest and the water, gloss: "a trail", tones: LH}
    - form: mbala
      class: "n"
      field: The forest and the water
      gloss: "a swamp, flooded ground"
      tones: HH
    - {form: rano, class: "n", field: The forest and the water, gloss: "rain", tones: LL}
    - {form: wene, class: "n", field: The forest and the water, gloss: "mist", tones: HL}
    - {form: ngoto, class: "n", field: The forest and the water, gloss: "an elephant", tones: LH}
    - {form: kpalu, class: "n", field: The forest and the water, gloss: "a leopard", tones: HH}
    - {form: sewi, class: "n", field: The forest and the water, gloss: "a serpent", tones: LL}
    - {form: liho, class: "n", field: The forest and the water, gloss: "a fish", tones: HL}
    - form: kubi
      class: "n"
      field: Spirits and manners
      gloss: "a spirit-court, a place held by one spirit and its etiquette"
      tones: LH
    - {form: mbosa, class: "n", field: Spirits and manners, gloss: "a spirit", tones: HL}
    - {form: dipo, class: "n", field: Spirits and manners, gloss: "an offering", tones: LL}
    - form: kele
      class: v
      field: Spirits and manners
      gloss: "keep, tend, observe the etiquette of"
      tones: HH
    - {form: hira, class: v, field: Spirits and manners, gloss: "give", tones: LH}
    - form: dibo
      class: v
      field: Spirits and manners
      gloss: "share, divide among all"
      tones: HL
    - {form: sogo, class: v, field: Spirits and manners, gloss: "sing", tones: HH}
    - {form: dano, class: v, field: Spirits and manners, gloss: "walk, follow a trail", tones: LL}
    - {form: bolu, class: adj, field: Qualities, gloss: "great, old", tones: HL}
    - {form: sini, class: adj, field: Qualities, gloss: "small, young", tones: LH}
    - {form: gbasa, class: adj, field: Qualities, gloss: "dark", tones: HH}
    - {form: moro, class: adj, field: Qualities, gloss: "deep", tones: LL}
    - form: luwando
      class: "n"
      field: The traditions
      gloss: "a river-keeper, one who keeps the river"
      built: [luwa, "-ndo"]
      tones: LHL
    - form: yesoma
      class: "n"
      field: The traditions
      gloss: "a canopy forager, a child of the forest"
      built: [yeso, "-ma"]
      tones: HLH
    - form: kubindo
      class: "n"
      field: The traditions
      gloss: "a court-keeper, one who keeps a spirit-court"
      built: [kubi, "-ndo"]
      tones: LHL
    - form: pewaye
      class: "n"
      field: The traditions
      gloss: "an edge-person, one who dwells where the forest ends"
      built: [pewa, "-ye"]
      tones: LLL
    - form: yobe
      class: "n"
      field: Words of one tradition
      gloss: "the river as host, the spirit that brings guests and feeds them; said by the river-keepers"
      tones: HL
    - form: dombe
      class: "n"
      field: Words of one tradition
      gloss: "guest-right, the three nights owed to anyone the river brings; said by the river-keepers"
      tones: LH
    - form: ewudi
      class: "n"
      field: Words of one tradition
      gloss: "the bark boat that carries one of the dead downstream; said by the river-keepers"
      tones: LHL
    - form: iyemo
      class: "n"
      field: Words of one tradition
      gloss: "the forest as parent, mother-and-father in one; said by the canopy foragers"
      tones: HLH
    - form: kpeti
      class: "n"
      field: Words of one tradition
      gloss: "a share, the part of every kill and comb each person is owed; said by the canopy foragers"
      tones: HL
    - form: sogola
      class: "n"
      field: Words of one tradition
      gloss: "the band of song that sings the forest awake at night; said by the canopy foragers"
      built: [sogo, "-la"]
      tones: HHH
    - form: hewo
      class: "n"
      field: Words of one tradition
      gloss: "a camp left to the dead; said by the canopy foragers"
      tones: LH
    - form: mbuyo
      class: "n"
      field: Words of one tradition
      gloss: "the manners of one spirit-court, what its spirit demands; said by the court-keepers"
      tones: HL
    - form: kelendo
      class: "n"
      field: Words of one tradition
      gloss: "the keeper, the eldest who knows a court's manners entire; said by the court-keepers"
      built: [kele, "-ndo"]
      tones: HHL
    - form: ngobe
      class: "n"
      field: Words of one tradition
      gloss: "the night-sitting at a court, by which the spirit makes a leader; said by the court-keepers"
      tones: LH
    - form: tegbo
      class: "n"
      field: Words of one tradition
      gloss: "the stretch of edge a family holds; said by the edge-people"
      tones: HH
    - form: hokpe
      class: "n"
      field: Words of one tradition
      gloss: "the grave-post that faces out of the forest; said by the edge-people"
      tones: LL
    - form: bewu
      class: "n"
      field: Words of one tradition
      gloss: "the leader's gift, brought from outside for every member; said by the edge-people"
      tones: HL
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: ["{given}", "{given} {band}"]
    given:
      female:
        - "Sepo"
        - "Dano"
        - "Wene"
        - "Rano"
        - "Biko"
        - "Sogo"
        - "Dipo"
        - "Liho"
        - "Moro"
        - "Kiro"
        - "Gbulu"
        - "Hira"
        - "Dibo"
        - "Kele"
        - "Sini"
      male:
        - "Sepo"
        - "Dano"
        - "Wene"
        - "Rano"
        - "Biko"
        - "Sogo"
        - "Dipo"
        - "Liho"
        - "Moro"
        - "Kiro"
        - "Gbulu"
        - "Hira"
        - "Dibo"
        - "Kele"
        - "Sini"
    band: ["Luwala", "Ngotola", "Kpalula", "Sewila", "Gbelela"]
  sounds:
    edges:
      - {edge: openCluster, sounds: [mb, nd, ng]}
      - {edge: closeConsonant, sounds: [n]}
      - {edge: vowelPair, sounds: []}
    clusters: {max: 2}
  scope:
    addresses:
      - skill-ekpelulng
      - lore-bikoclt
      - lore-luwandoclt
      - lore-yesomaclt
      - lore-kubindoclt
      - lore-pewayeclt
  tongues:
    - {tag: ekpelu, meaning: an Ekpelu name, language: skill-ekpelulng}
    - {tag: translation, meaning: a name given in the language of these pages}
  register:
    - {name: Biko, tongue: ekpelu, built: [biko]}
    - {name: Canopy Foragers, tongue: translation}
    - {name: Court-keepers, tongue: translation}
    - {name: Edge-people, tongue: translation}
    - {name: Ekpelu Language, tongue: translation}
    - {name: Ekpelu Lexicon, tongue: translation}
    - {name: The Forest Peoples, tongue: translation}
    - {name: Kubindo, tongue: ekpelu, built: [kubi, -ndo]}
    - {name: Luwando, tongue: ekpelu, built: [luwa, -ndo]}
    - {name: Pewaye, tongue: ekpelu, built: [pewa, -ye]}
    - {name: River-keepers, tongue: translation}
    - {name: Yesoma, tongue: ekpelu, built: [yeso, -ma]}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Isolate}}
---

Ekpelu is the tongue of the forest peoples of the [[place-cntrlrnfrsts|Central Rainforests]]. The [[lore-luwandoclt|Luwando]] (River-keepers), the [[lore-yesomaclt|Yesoma]] (Canopy foragers), the [[lore-kubindoclt|Kubindo]] (Court-keepers) and the [[lore-pewayeclt|Pewaye]] (Edge-people) all speak it, and a band from one tradition can be understood by a band from another. Fluency measures how much of it a speaker commands, from the trade words a river-trader picks up to the full speech of a song-band at night. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

_Ekpelu_ is the people's own word for speech, and they use it for no other tongue: a stranger's speech is noise, and a stranger who learns Ekpelu is said to have been taken in. It is a small language, with few words and many of them concrete. It names the river, the fire, the band, the beast and the spirit exactly, and it leaves much else to song and gesture.

The four traditions speak it with different accents and use different words for their sacred things, but there are no branches of the language and no grammar that separates one from another. Outsiders do not hear the accents, and the words for the sacred are not spoken to outsiders.

Outsiders have never agreed on a name for it. River-traders speaking [[skill-okharclng|Okharik Language]] call it the speech of the shadow, after the shade of the forest, caravan-masters speaking [[skill-nyalbnlng|Nyáluban Language]] the quiet speech, and northern scholars, who have set down only a few hundred words of it, the common tongue of the forest.

## How Ekpelu sounds

Ekpelu is small and open, spoken across the forest by peoples with four different words for the sacred.

**The vowels.** _a_, _e_, _i_, _o_ and _u_. Every word ends on a vowel.

**The consonants.** _gb_ and _kp_, each said as one sound, together with _mb_, _nd_, _ng_, _b_, _d_, _k_, _l_, _m_, _s_ and _w_.

**Clusters.** _gb_, _kp_, _mb_, _nd_ and _ng_ only.

**Endings.** Ekpelu words end in _-o_, _-e_, _-u_, _-a_ or _-i_.

**What Ekpelu leaves out.** It has no closed syllable and no other cluster.

## Phonology

### Consonant System

**Stops:** p, t, k, b, d, g

**Double-closure stops:** kp, gb

**Fricatives:** s, h

**Nasals:** m, n, ny

**Liquids & Approximants:** l, r, w, y

### Vowel System

**Vowels:** a, e, i, o, u

### Phonotactic Patterns

Consonant Clusters
: A nasal and a stop open many words (_mb_, _nd_, _ng_); otherwise no more than two consonants meet

Syllable Structure
: Open, a consonant and a vowel

Final Consonants
: Only _n_

Word Length
: Two or three syllables

### Tone

Ekpelu is a tonal tongue with two level tones, high and low. Tone tells words apart, so a word's tones are part of its form as much as its consonants and vowels. Because the pitch carries the meaning, the forest peoples can call to one another across a long distance in pitch alone, without shaping a single consonant. Names and prose are written here without tone marks, as the people's own speech is not written; the [[skill-ekpelulng#lexicon|Ekpelu Lexicon]] shows the tones of every word.

## Grammar Notes

Word order is subject, object, verb. Nouns are not inflected for number. Four endings on a root say how a person stands toward it: the keeper of it, the child of it, the dweller beside it and the band of it. The [[skill-ekpelulng#lexicon|Ekpelu Lexicon]] sets out the words and the endings.

## Script & Literacy

There is no script. What a band needs to remember it keeps in song and in the spirit-posts at its camps.

## Naming Traditions

A person carries one name, a root of the forest or a thing seen on the day of the birth, and in company is known by the band set after it. Bands are named for the river, tree or beast they follow, rivers and places for a head word and its quality, and spirit-courts for what they hold. The lexicon gives the rules.

### Name Lists

**Given Names:** Sepo, Dano, Wene, Rano, Biko, Sogo, Dipo, Liho, Moro, Kiro, Gbulu, Hira, Dibo, Kele, Sini

**Band Names:** Luwala, Ngotola, Kpalula, Sewila, Gbelela

## Ekpelu Lexicon {#lexicon}

The forest peoples of central [[place-xerathia|Zerathia]] keep no books, and this page is the nearest thing to one: the word-hoard of Ekpelu, their common tongue. The vocabulary is small and concrete. It names the river, the fire, the band, the spirit and the four standings a person can hold, and it leaves finer matters to gesture, song and the long habit of living together.

An Ekpelu word is built from a short root, and an ending says how a person stands toward it: _luwa_ is a river, _luwando_ is one who keeps a river, and _luwala_ is the band that follows it. A name is two words, the head first and the quality after: _Luwa Gbasa_ is the Dark River.

The sound of Ekpelu is open and unhurried. Almost every syllable is a consonant and a vowel, a word closes on a vowel or on _n_, and a nasal before a stop opens many words: _mb_, _nd_, _ng_. Each tradition sounds the vowels a little differently, and none of them writes the difference down. Ekpelu is a tonal tongue: every vowel is sung on a high or a low pitch, and the pitch is part of the word.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited. A word made of smaller parts names the words the form is made of, joined by `+`, and the form is exactly those words set side by side.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-ekpelulng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Tones

Ekpelu has two level tones, high (`H`) and low (`L`), and each syllable carries one. Two words spelled alike with different tones are different words, so a word's tones are as much a part of its form as its letters. The lexicon writes them in the Tones column, one letter to a syllable, and nowhere else: names and prose on every other page are spelled without tone marks, since the people's own speech is not written.

An ending carries its own tone whatever the root, so a built word's tones are its root's followed by the ending's: `luwa` (`LH`) with `-ndo` (`L`) is `luwando` (`LHL`).

### Word edges

A word opens on a vowel, a single consonant or one of the pairs below, and closes on a vowel or on _n_.

```sql
SELECT CASE edge WHEN 'openCluster' THEN 'Pairs that may open a word' WHEN 'closeConsonant' THEN 'Consonants that close a word' WHEN 'vowelPair' THEN 'Vowels that may stand together' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-ekpelulng' ORDER BY position
```

### Clusters

```sql
SELECT 'Most consonants together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-ekpelulng'
```

## Building words {#building-words}

Two moves make every built word on this page. **An ending on a root:** the ending says how a person stands toward the root. **A head and its quality:** a name sets the head word first and the word that qualifies it after, with nothing between them.

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", attaches AS "Stem", gloss AS "Makes", coalesce(nullif(array_to_string(list_transform(examples, e -> regexp_replace(e, '^(\S+) > ([^\s,;]+)', '_\1_ > _\2_')), ', '), ''), '—') AS "Example", '`' || tones || '`' AS "Tones"
FROM affixes
WHERE language = 'thalorna-note-skill-ekpelulng'
ORDER BY position
```

## Words {#words}

### The people and the bands

Every tribe has the same four standings, and the words for them are the plainest on this page. A _tolu_ is held by the band without yet being a full part of it, a _wibo_ speaks and is heard, a _mbeli_ is heard first, and the one the tribe follows is the _kpaso_. The standing is a state a person is in, never a title passed from parent to child.

### Spirits and manners

A forest person owes the forest what a guest owes a host: gifts, restraint and good manners. The _kubi_ is a place that one spirit holds, together with the etiquette owed there, and a band that serves one keeps it.

### The traditions

The four traditions are named by what each keeps or lives beside, and the names are the common tongue's. A tradition's own words for its sacred things differ from one to the next.

### Words of one tradition

Each tradition keeps a handful of words for its sacred things, and the others do not use them. They are common Ekpelu in sound and building, and a forest person of another tradition knows what they mean without saying them.

## Making names {#making-names}

**A person** carries one name, a root of the forest or a thing seen on the day of the birth: _Sepo_, _Dano_, _Wene_. A person is known in company by the band set after the name: _Wene Luwala_ is Wene of the river's band. **A band** is named for the river, tree or beast it follows, with _-la_: _Ngotola_ follows the elephant. **A river or a place** is a head word and its quality: _Luwa Gbasa_, the Dark River. **A spirit-court** is named for what it holds: _Kubi Sewi_, the court of the serpent. **A standing** is set before the band: _Kpaso Luwala_ is the leader of the river's band.

## Scope {#scope}

The register below holds every name of every note of the forest peoples' tongue and of their culture and traditions. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-ekpelulng'
GROUP BY kind ORDER BY CASE kind WHEN 'addresses' THEN 0 END
```

## Attested names {#attested-names}

Every name the setting gives the forest peoples, with the note where it is met. A name built from this page shows how; a name the tongue uses that is not built from it shows `—`, and a name in the reader's tongue is tagged as such.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'ekpelu' THEN ', [[' || tongue_language || '|Ekpelu]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-ekpelulng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-ekpelulng' ORDER BY position
```
