---
shortcode: kawiskaklng
name: {full: Kawiskak Language, kwsk: [kawiskak]}
type: skill
subType: language
description: "The unwritten tongue of the Spruce People of the northern forest: soft, full of w, with only three vowels, and words that close on a breath and a k."
tags: []
data:
  roman: "ahikmnopstwyáíó0123456789-"
  abbreviation: Kaw.
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: ["{given}", "{given} of the {band}"]
    given:
      female:
        - "osipisa"
        - "wasonomin"
        - "apowisa"
        - "wipikwomin"
        - "okiskikwa"
        - "yahkinisa"
        - "ospinosi"
        - "sinapitak"
      male:
        - "kitoskapo"
        - "ahpikapo"
        - "tomaskasin"
        - "pastokitak"
        - "yahkinapo"
        - "kawiskasin"
        - "tapiskostin"
        - "wanoskomin"
    band: ["kopiskak", "okiskak", "apowak", "wipikwak", "ahpikak", "kitoskak", "tapiskak"]
  elements:
    - {form: kawisk, position: opening, sense: a spruce, examples: [kawiskak, kawiskasin]}
    - {form: ahpik, position: opening, sense: a caribou, examples: [ahpikapo, ahpikak]}
    - {form: tomask, position: opening, sense: a moose, examples: [tomaskasin]}
    - {form: kopisk, position: opening, sense: a beaver, examples: [kopiskak]}
    - {form: okisk, position: opening, sense: a fish, examples: [okiskikwa, okiskak, okiskosipa]}
    - {form: osipa, position: either, sense: a lake, examples: [osipisa, okiskosipa, apowosipa]}
    - {form: wanosk, position: opening, sense: snow, examples: [wanoskomin]}
    - {form: kitosk, position: opening, sense: a wolf, examples: [kitoskapo, kitoskak]}
    - {form: apowa, position: opening, sense: a loon, examples: [apowisa, apowak, apowosipa]}
    - {form: wipikwa, position: opening, sense: a birch, examples: [wipikwomin, wipikwak]}
    - {form: kipota, position: opening, sense: a river}
    - {form: ospin, position: opening, sense: fire, examples: [ospinosi]}
    - {form: wasona, position: opening, sense: the sun, examples: [wasonomin]}
    - {form: tapisk, position: opening, sense: copper, examples: [tapiskostin, tapiskak]}
    - {form: sinapa, position: opening, sense: a canoe, examples: [sinapitak]}
    - {form: pastok, position: opening, sense: a snowshoe, examples: [pastokitak]}
    - {form: ospahk, position: opening, sense: the sky}
    - {form: yahkin, position: opening, sense: the north wind, examples: [yahkinisa, yahkinapo]}
    - {form: -apo, position: closing, sense: runs, examples: [kitoskapo, ahpikapo, yahkinapo]}
    - {form: -isa, position: closing, sense: watches, examples: [osipisa, apowisa, yahkinisa]}
    - {form: -osi, position: closing, sense: carries, examples: [ospinosi]}
    - {form: -itak, position: closing, sense: goes far, examples: [sinapitak, pastokitak]}
    - {form: -ikwa, position: closing, sense: brings home, examples: [okiskikwa]}
    - {form: -omin, position: closing, sense: sings, examples: [wasonomin, wipikwomin, wanoskomin]}
    - {form: -asin, position: closing, sense: stands, examples: [tomaskasin, kawiskasin]}
    - {form: -ostin, position: closing, sense: gives, examples: [tapiskostin]}
    - form: -ak
      position: closing
      sense: "the people of it: a band, or a whole people"
      examples: [kawiskak, kopiskak, apowak]
  sounds:
    edges:
      - {edge: openCluster, sounds: []}
      - {edge: closeConsonant, sounds: [k, n]}
      - {edge: closeCluster, sounds: [sk, hk]}
    clusters: {max: 2}
    stress: {two: first, longer: penultimate, mark: acute}
  scope:
    cultures: [kawiskakclt]
    parents: [kawiskakrgn]
    addresses: [lore-kawiskakclt, skill-kawiskaklng, place-kawiskakrgn]
  tongues:
    - {tag: kawiskak, meaning: a Kawiskak name, language: skill-kawiskaklng}
    - {tag: translation, meaning: a name given in the language of these pages}
  register:
    - {name: kawiskak, tongue: kawiskak}
    - {name: Spruce People, tongue: translation}
    - {name: Kawiskak Region, tongue: translation}
    - {name: Kawiskak Language, tongue: translation}
    - {name: okiskosipa, tongue: kawiskak}
    - {name: Fish Lake, tongue: translation}
    - {name: apowosipa, tongue: kawiskak}
    - {name: Loon Lake, tongue: translation}
    - {name: Loon Lake Killing, tongue: translation}
    - {name: Bitter Water, tongue: translation}
    - {name: Copper River, tongue: translation}
    - {name: Barren-Ground People, tongue: translation}
    - {name: Ice-Edge People, tongue: translation}
    - {name: osipisa, tongue: kawiskak}
    - {name: wasonomin, tongue: kawiskak}
    - {name: apowisa, tongue: kawiskak}
    - {name: wipikwomin, tongue: kawiskak}
    - {name: okiskikwa, tongue: kawiskak}
    - {name: yahkinisa, tongue: kawiskak}
    - {name: ospinosi, tongue: kawiskak}
    - {name: sinapitak, tongue: kawiskak}
    - {name: kitoskapo, tongue: kawiskak}
    - {name: ahpikapo, tongue: kawiskak}
    - {name: tomaskasin, tongue: kawiskak}
    - {name: pastokitak, tongue: kawiskak}
    - {name: yahkinapo, tongue: kawiskak}
    - {name: kawiskasin, tongue: kawiskak}
    - {name: tapiskostin, tongue: kawiskak}
    - {name: wanoskomin, tongue: kawiskak}
    - {name: kopiskak, tongue: kawiskak}
    - {name: okiskak, tongue: kawiskak}
    - {name: apowak, tongue: kawiskak}
    - {name: wipikwak, tongue: kawiskak}
    - {name: ahpikak, tongue: kawiskak}
    - {name: kitoskak, tongue: kawiskak}
    - {name: tapiskak, tongue: kawiskak}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Boreal}}

# terran_analog: "Cree, of the Algonquian family, with Woods and Swampy Cree as the guide: its open syllables and its syllables closed on a breath before a stop (hk, ht, hp) or on s before a stop (sk, st, sp), its long built words, its leading sounds k, t, p, s, m, n, w and y, its three short vowels a, i and o, its words that open on a vowel or a single consonant, and its endings on -k, -sk, -hk and -n. Its long vowels are left out with the long e that only they carry, its final -w is left out because a reader cannot say it as written, its th, l and n dialect sound is left out, and none of its words is taken."
---

The Kawiskak Language is the tongue of the [[lore-kawiskakclt|Kawiskak]], the Spruce People of the northern forest. Fluency measures the range of what a speaker can say in it, from a trader's few words of fur, copper and price at the edge of the forest to the speech of someone raised in a winter band and taught its stories. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Every band of the Spruce People speaks the same tongue, from the parkland edge to the treeline and east past the [Bitter Water]{.name data-type="place/feature"}. The bands are small and far apart, and each speaks it a little differently: the northern bands clip their words short, and the bands of the far east have words for seal and salt water that the western bands have never needed. Every speaker understands every other at once, and the summer lakes are where the differences are noticed and laughed at.

The tongue is related to nothing else in the north. The [[affiliation-tenlaya|Grass People]] and the [[affiliation-osetakona|Maple People]] who trade at the forest's edge do it with a few dozen words of each other's speech and a great deal of pointing, and a Spruce trader who has married into a Grass band speaks its tongue as well as his own. Nobody in the south has heard it.

Nobody writes it. The Spruce People keep their stories, their debts and the boundaries of their winter grounds in memory, and the lake keepers at the summer lakes hold the most.

## How the Kawiskak Language sounds

The Kawiskak Language is soft and full of _w_, with only three vowels. A speaker's words run long and close on a quick breath and a _k_: _kawiskak_ is the Spruce People, _osipa_ a lake, and _kitoskapo_ the name Wolf Runs.

**The vowels.** There are three: _a_, which leads by far, then _i_, then _o_. Each has its plain value from the spelling guide. Two vowels never stand side by side.

**The consonants.** _k_, _t_, _p_, _s_, _m_, _n_, _w_ and _y_, with _h_. _k_ and _w_ are the commonest, then _s_, _t_ and _p_. _w_ follows a _k_ often, as in _wipikwa_, a birch.

**Clusters.** Two consonants meet only inside a word or at its end, and only in a few pairs: a breath before a stop, _hk_, _ht_ and _hp_, as in _ahpik_, a caribou; _s_ before a stop, _sk_, _st_ and _sp_, as in _ospin_, fire; and _kw_. Three consonants never stand together.

**Shapes and endings.** A word opens on a vowel or on one consonant, never on two. Short words have two syllables and names run to four or five. About half of all words end on a vowel, most often _a_ or _o_, and the rest close on _k_, _n_, _sk_ or _hk_: _kawisk_, a spruce, _yahkin_, the north wind, _ospahk_, the sky.

**What the Kawiskak Language leaves out.** It has no _e_ and no _u_. It has no _l_, _r_, _b_, _d_, _g_, _f_, _v_, _z_ or _j_, no _sh_, _ch_ or _th_, and none of the catches of the southern tongue. Its neighbours sound nothing like it: the Grass People's tongue opens words on _sk_ and _st_ and is full of _sh_ and _l_, and the Maple People's has no _p_, _m_ or _w_ at all.

## Stress

A word of two syllables is stressed on the first, and a longer word on the second-to-last, by the rule of [[doc-prnncthlrn|Pronouncing Thalorna]]: _osipa_ is o-SI-pa, _kawiskak_ is ka-WIS-kak, and _kitoskapo_ is ki-tos-KA-po. No name needs an accent.

## Script and Literacy

The Kawiskak Language has no script. A winter band marks its trail with a blaze cut in a spruce or a bent sapling pointing the way, and leaves a stick in the snow at a fork to say which way it went and how many days ago. A lodge keeps a birch-bark sheet scratched with the shapes of a shaking lodge's songs. Each of these is a mark that one band reads, and none of them writes a word.

## Naming Traditions {#names}

A child is named at its first summer gathering, by the oldest person of its band, from a dream. A name is two parts set together: a thing of the forest, the water or the sky, and something it does. _Kitoskapo_ is _kitosk_, a wolf, and _-apo_, runs: Wolf Runs. _Osipisa_ is _osipa_, a lake, and _-isa_, watches: Watches the Lake. Where the first part ends on a vowel and the second begins with one, the first vowel drops, so _osipa_ and _-isa_ give _osipisa_ and not _osipaisa_. A person keeps the name for life. A dead person's name is not spoken until the next summer gathering, and a child given a dead grandparent's name receives it there.

A band is named with _-ak_, the people of it, on something it is known for: an animal of its ground, a lake, or a thing it trades. The _Kopiskak_ are the Beaver band and the _Apowak_ the Loon band. A person is "of" the band they winter with, and changes band by moving to another winter ground. The whole people are _kawiskak_, the people of the spruce, the same way.

A place is named by what it is and what is there: _Okiskosipa_ is _okisk_, a fish, and _osipa_, a lake, the Fish Lake, and _Apowosipa_ is the Loon Lake.

### Name elements

**Openings:** _kawisk_ (spruce), _ahpik_ (caribou), _tomask_ (moose), _kopisk_ (beaver), _okisk_ (fish), _osipa_ (lake), _wanosk_ (snow), _kitosk_ (wolf), _apowa_ (loon), _wipikwa_ (birch), _kipota_ (river), _ospin_ (fire), _wasona_ (sun), _tapisk_ (copper), _sinapa_ (canoe), _pastok_ (snowshoe), _ospahk_ (sky), _yahkin_ (north wind)

**Closings:** _-apo_ (runs), _-isa_ (watches), _-osi_ (carries), _-itak_ (goes far), _-ikwa_ (brings home), _-omin_ (sings), _-asin_ (stands), _-ostin_ (gives), and _-ak_ (the people of it) for a band

### Name Lists

**Women's names:** Osipisa, Wasonomin, Apowisa, Wipikwomin, Okiskikwa, Yahkinisa, Ospinosi, Sinapitak

**Men's names:** Kitoskapo, Ahpikapo, Tomaskasin, Pastokitak, Yahkinapo, Kawiskasin, Tapiskostin, Wanoskomin

**Bands:** Kopiskak (Beaver), Okiskak (Fish), Apowak (Loon), Wipikwak (Birch), Ahpikak (Caribou), Kitoskak (Wolf), Tapiskak (Copper)

The Kawiskak Language is unwritten, and the spellings on this page are the setting's one roman transcription of it. The tongue has no capital letters, so its lists stand in lowercase; the prose of these pages capitalizes a name as it does any other.

## Scope {#scope}

The register below holds every name of every note of the Spruce People. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'cultures' THEN 'culture' WHEN 'parents' THEN 'parent' WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-kawiskaklng'
GROUP BY kind ORDER BY CASE kind WHEN 'cultures' THEN 0 WHEN 'parents' THEN 1 WHEN 'addresses' THEN 2 END
```

## Attested names {#attested-names}

Every name the setting gives the Spruce People, their bands, their lakes and their neighbours, with the note where it is met. A name in the reader's tongue is tagged as such.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'kawiskak' THEN ', [[' || tongue_language || '|Kawiskak]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-kawiskaklng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue"
FROM register WHERE language = 'thalorna-note-skill-kawiskaklng' ORDER BY position
```
