---
shortcode: eskarilng
name: {full: Eskari Language}
type: skill
subType: language
description: "The tongue of the Eskárathi of Tarvénia's northern highlands, related to no other: open vowels, a trilled rr and a hard z, and names that close on a vowel or on n, r, z or ts."
tags: []
data:
  roman: "abdegiklmnoprstuz0123456789-"
  abbreviation: Esk.
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: ["{given} {clan}"]
    given:
      female: ["gerdoia", "ibotse", "egoza", "soraine", "uzarne", "aidarne", "oldane", "elutse"]
      male: ["gaztoro", "arruno", "otsanar", "zorgan", "ibunar", "suloin", "elutsar", "mendurko"]
    clan:
      - "gerdoiena"
      - "ibotsena"
      - "mendurena"
      - "arrunena"
      - "otsanena"
      - "leparena"
      - "oldena"
      - "egozena"
  elements:
    - {form: mendur, position: opening, sense: a mountain, examples: [mendurko, mendurena]}
    - {form: gaztor, position: opening, sense: a height or a peak, examples: [gaztoro, gaztorai]}
    - {form: sorai, position: either, sense: a high meadow, examples: [soraine, gaztorai]}
    - {form: ibots, position: opening, sense: a spring, examples: [ibotse, ibotsena, ibotsain]}
    - {form: gerdoi, position: opening, sense: an oak, examples: [gerdoia, gerdoiena, gerdoibun]}
    - {form: arrun, position: either, sense: a stone, examples: [arruno, arrunena, leparrun]}
    - {form: lepar, position: opening, sense: a pass, examples: [leparena, leparrun]}
    - {form: ibun, position: either, sense: a valley, examples: [ibunar, gerdoibun]}
    - {form: uzar, position: opening, sense: a stream, examples: [uzarne]}
    - {form: eluts, position: opening, sense: snow, examples: [elutse, elutsar]}
    - {form: egoz, position: opening, sense: the sun, examples: [egoza, egozena]}
    - {form: aidar, position: opening, sense: the spirit of a place, examples: [aidarne]}
    - {form: aitsen, position: opening, sense: "the forebears, the dead of a clan"}
    - {form: orrai, position: opening, sense: a household and its hall}
    - {form: zorga, position: opening, sense: a sling, examples: [zorgan]}
    - {form: olda, position: opening, sense: a flock or a herd, examples: [oldane, oldena]}
    - {form: suloi, position: opening, sense: a hearth fire, examples: [suloin]}
    - {form: otsan, position: opening, sense: a wolf, examples: [otsanar, otsanena]}
    - form: -ain
      position: closing
      sense: "the place of it, for a settlement"
      examples: [ibotsain]
    - form: -ena
      position: closing
      sense: "the house of it, for a clan"
      examples: [gerdoiena, oldena]
    - {form: -a, position: closing, sense: a woman's name, examples: [gerdoia, egoza]}
    - {form: -e, position: closing, sense: a woman's name, examples: [ibotse, elutse]}
    - form: -ne
      position: closing
      sense: a woman's name
      examples: [soraine, uzarne, aidarne, oldane]
    - {form: -o, position: closing, sense: a man's name, examples: [gaztoro, arruno]}
    - {form: -ko, position: closing, sense: a man's name, examples: [mendurko]}
    - {form: -ar, position: closing, sense: a man's name, examples: [otsanar, ibunar, elutsar]}
    - {form: -n, position: closing, sense: a man's name, examples: [zorgan, suloin]}
  sounds:
    edges: [{edge: openCluster, sounds: []}, {edge: closeConsonant, sounds: [n, r, z, ts]}]
    clusters: {max: 2}
    stress: {two: first, longer: penultimate, mark: acute}
  scope:
    addresses:
      - skill-eskarilng
      - place-eskarath
      - affiliation-frtrtryskrth
      - affiliation-biltzarrath
      - affiliation-eskrthsprts
      - place-gaztorai
      - place-ibotsain
      - place-leparrun
      - place-gerdoibun
      - being-elutsaribot
  tongues:
    - {tag: eskari, meaning: an Eskari name, language: skill-eskarilng}
    - {tag: translation, meaning: a name given in the language of these pages}
  register:
    - {name: Eskari, tongue: translation}
    - {name: Eskari Language, tongue: translation}
    - {name: gaztorai, tongue: eskari, gloss: the high meadow}
    - {name: The Council Meadow, tongue: translation}
    - {name: ibotsain, tongue: eskari, gloss: the place of the spring}
    - {name: leparrun, tongue: eskari, gloss: the stone of the pass}
    - {name: gerdoibun, tongue: eskari, gloss: the valley of the oaks}
    - {name: The Spirits of Eskarath, tongue: translation}
    - {name: The Eskárathi Spirit Tradition, tongue: translation}
    - {name: gerdoia, tongue: eskari}
    - {name: ibotse, tongue: eskari}
    - {name: egoza, tongue: eskari}
    - {name: soraine, tongue: eskari}
    - {name: uzarne, tongue: eskari}
    - {name: aidarne, tongue: eskari}
    - {name: oldane, tongue: eskari}
    - {name: elutse, tongue: eskari}
    - {name: gaztoro, tongue: eskari}
    - {name: arruno, tongue: eskari}
    - {name: otsanar, tongue: eskari}
    - {name: zorgan, tongue: eskari}
    - {name: ibunar, tongue: eskari}
    - {name: suloin, tongue: eskari}
    - {name: elutsar, tongue: eskari}
    - {name: mendurko, tongue: eskari}
    - {name: gerdoiena, tongue: eskari}
    - {name: ibotsena, tongue: eskari}
    - {name: mendurena, tongue: eskari}
    - {name: arrunena, tongue: eskari}
    - {name: otsanena, tongue: eskari}
    - {name: leparena, tongue: eskari}
    - {name: oldena, tongue: eskari}
    - {name: egozena, tongue: eskari}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Eskari (isolate)}}

# terran_analog: "Basque, the isolate beside a Romance neighbour: its five plain vowels with a and e leading, its trilled rr, its z and its ts, its words that open on a vowel as often as on a consonant and never on r, its two- and three-syllable words and three- and four-syllable names, and its endings on a vowel or on n, r, z and ts. Its f, h and j are left out, and its x and tx (sh and ch) are left out to keep the palette small; none of its words is taken. Eskarath and Biltzarrath are registered as Tarveni forms and stand outside this palette. The name these pages give the tongue, Eskari, is a whole Basque word (a request), so it is registered as a translation."
---

The Eskari Language is the tongue of the [[affiliation-frtrtryskrth|Free Territory of Eskarath]], spoken in the highlands of [[place-eskarath|Eskarath]] along Tarvénia's northern border. Fluency measures the range of what a speaker can say in it. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Eskari is a linguistic isolate with no known relatives. It is older in the highlands than [[skill-tarvenlng|Tarveni]], and the Eskárathi speak it first and Tarveni second. This page gives its sounds and the parts its names are built from.

## How Eskari sounds

Eskari is a speech of open vowels and hard consonants. Its words run to two and three syllables and its names to three and four: _ibots_ is a spring, _gerdoi_ an oak, and _Gerdoibun_ the valley of the oaks.

**The vowels.** _a_ and _e_ lead, then _i_, _o_ and _u_, each with its plain value from the spelling guide. Two vowels glide together only as _ai_ and _oi_, as in _sorai_, a high meadow, and _gerdoi_.

**The consonants.** _r_ and _rr_, _z_, _n_, _l_, _s_ and _ts_ are the commonest, with the stops _k_, _g_, _t_, _d_, _b_ and _p_, and _m_. The trilled _rr_ stands only between vowels, as in _arrun_, a stone, and _ts_ stands anywhere, as in _otsan_, a wolf.

**Shapes.** A word opens on a vowel as often as on a consonant, and never on _r_ or on two consonants: _egoz_ is the sun, _aidar_ the spirit of a place, _uzar_ a stream. Two consonants meet only inside a word, as in _gaztor_, a peak, and _mendur_, a mountain.

**Endings.** A word ends on a vowel, or on _n_, _r_, _z_ or _ts_: _olda_, a flock, _lepar_, a pass, _eluts_, snow.

**What Eskari leaves out.** It has no _f_, _v_, _w_, _h_, _j_ or _y_, no _th_, _sh_, _ch_ or _zh_, no _kh_ or _gh_, and none of the catches of other tongues. It carries no marks. Its neighbour Tarveni is full of _th_ and closes words on _d_, _k_ and _l_, and none of those is Eskari's.

## Stress

A word of two syllables is stressed on the first, and a longer word on the second-to-last, by the rule of [[doc-prnncthlrn|Pronouncing Thalorna]]: _ibots_ is I-bots, _gerdoia_ is ger-DOI-a, and _gaztorai_ is gaz-TO-rai. No Eskari name needs an accent.

## Naming Traditions {#names}

An Eskárathi carries a given name and the name of a clan.

A given name is a thing of the highlands with a closing. A woman's name closes on _-a_, _-e_ or _-ne_: _Gerdoia_ is _gerdoi_, an oak, with _-a_, and _Soraine_ is _sorai_, a high meadow, with _-ne_. A man's name closes on _-o_, _-ko_, _-ar_ or _-n_: _Gaztoro_ is _gaztor_, a peak, with _-o_, and _Otsanar_ is _otsan_, a wolf, with _-ar_.

A clan is named with _-ena_, the house of it, on a thing of its ground: the _Gerdoiena_ are the house of the oak, and the _Ibotsena_ the house of the spring. Where the first part ends on _a_, the _a_ drops, so _olda_ and _-ena_ give _Oldena_.

A settlement is named with _-ain_, the place of it, or by setting two things together: _Ibotsain_ is the place of the spring, and _Leparrun_ is _lepar_, a pass, and _arrun_, a stone.

### Name elements

**Openings:** _mendur_ (a mountain), _gaztor_ (a height or a peak), _sorai_ (a high meadow), _ibots_ (a spring), _gerdoi_ (an oak), _arrun_ (a stone), _lepar_ (a pass), _ibun_ (a valley), _uzar_ (a stream), _eluts_ (snow), _egoz_ (the sun), _aidar_ (the spirit of a place), _aitsen_ (the forebears, the dead of a clan), _orrai_ (a household and its hall), _zorga_ (a sling), _olda_ (a flock or a herd), _suloi_ (a hearth fire), _otsan_ (a wolf)

**Closings:** _-ain_ (the place of it) for a settlement; _-ena_ (the house of it) for a clan; _-a_, _-e_ and _-ne_ for a woman; _-o_, _-ko_, _-ar_ and _-n_ for a man

### Name Lists

**Women's names:** Gerdoia, Ibotse, Egoza, Soraine, Uzarne, Aidarne, Oldane, Elutse

**Men's names:** Gaztoro, Arruno, Otsanar, Zorgan, Ibunar, Suloin, Elutsar, Mendurko

**Clans:** Gerdoiena (oak), Ibotsena (spring), Mendurena (mountain), Arrunena (stone), Otsanena (wolf), Leparena (pass), Oldena (flock), Egozena (sun)

The spellings on this page are the setting's one roman transcription of Eskari. It is caseless, so its lists stand in lowercase; the prose of these pages capitalizes a name as it does any other.

## Scope {#scope}

The register below holds every name of the Eskárathi notes. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-eskarilng'
GROUP BY kind ORDER BY CASE kind WHEN 'addresses' THEN 0 END
```

## Attested names {#attested-names}

Every Eskari name the setting gives, with the note where it is met. A name in the reader's tongue is tagged as such.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'eskari' THEN ', [[' || tongue_language || '|Eskari]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-eskarilng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue"
FROM register WHERE language = 'thalorna-note-skill-eskarilng' ORDER BY position
```
