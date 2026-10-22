---
shortcode: atarzadilng
name: {full: Atárzadi Language, aliases: []}
type: skill
subType: language
description: "The harsh, long-voweled tongue of the Atarzád, a Desert-family cousin of Dunhari."
tags: []
data:
  core: true
  abbreviation: Atz.
  writtenIn: {map: qalezu, font: qalezu-hand}
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: "{given} {tribe}"
    given:
      female:
        - "Yuremat"
        - "Leqoshat"
        - "Amulezat"
        - "Sekholat"
        - "Hozhirat"
        - "Zoghelat"
        - "Keshumat"
        - "Helbazat"
        - "Zuqelat"
        - "Koshinat"
        - "Aqeshat"
        - "Lekhimat"
        - "Huleshat"
        - "Tolezat"
        - "Niqoshat"
        - "Emuzhat"
        - "Yalishat"
        - "Kurbelat"
        - "Uzhemat"
        - "Khumezat"
        - "Zhurikat"
        - "Nileshat"
        - "Yelqimat"
        - "Eshurat"
        - "Lozhekat"
        - "Qimurat"
        - "Oshenat"
        - "Yotekhat"
        - "Teqemat"
        - "Gizhelat"
      male:
        - "Gherosor"
        - "Zhoqaror"
        - "Khemozor"
        - "Bizhunor"
        - "Gholutor"
        - "Tulqenor"
        - "Shekhulor"
        - "Yotekhor"
        - "Zhudekor"
        - "Rezhulor"
        - "Sighotor"
        - "Nozhikor"
        - "Khorbetor"
        - "Keloshor"
        - "Ghodenor"
        - "Burqalor"
        - "Teqemor"
        - "Zelumor"
        - "Ghazrelor"
        - "Eshuror"
        - "Oshenor"
        - "Zhurikor"
        - "Kelumor"
        - "Zhimelor"
        - "Ghuzolor"
        - "Noghezor"
        - "Helbazor"
        - "Zuqelor"
        - "Koshinor"
        - "Aqeshor"
        - "Qimuror"
        - "Lozhekor"
        - "Dokhimor"
        - "Yelqimor"
        - "Bozekhor"
        - "Nulezhor"
        - "Qeshumor"
        - "Azhuror"
        - "Deghoshor"
        - "Ebozor"
        - "Burekhor"
    tribe:
      - "Gherosod"
      - "Bozekhod"
      - "Kelumod"
      - "Zhimelod"
      - "Ghuzolod"
      - "Noghezod"
      - "Helbazod"
      - "Zuqelod"
      - "Koshinod"
      - "Zhoqarod"
      - "Shekhulod"
      - "Toshelod"
      - "Ezhirod"
      - "Ghodenod"
      - "Burqalod"
      - "Keloshod"
      - "Oshenod"
      - "Zhurikod"
      - "Umrelod"
      - "Zhudekod"
      - "Rezhulod"
      - "Sighotod"
      - "Khemozod"
      - "Bizhunod"
      - "Gholutod"
      - "Tulqenod"
      - "Hozhirod"
      - "Yotekhod"
      - "Nozhikod"
      - "Zoghelod"
      - "Keshumod"
  sounds:
    syllables:
      onsets: single
      codas: [b, t, d, k, g, q, m, n, r, l, s, z, sh, zh, kh, gh]
      finals: [t, d, k, q, m, n, r, l, s, z, sh, kh]
      doubled: []
      vowelPairs: []
      initialVowel: true
      finalVowel: false
      signature: [a, ē, i, ō, ū]
    joins: [{meeting: C+C, rule: merge}]
  affixes:
    - {form: -un, gloss: a people}
    - {form: -od, gloss: a tribe}
    - {form: -ez, gloss: a place or holding}
    - {form: -ekh, gloss: one who does}
    - {form: -or, gloss: a man's given name, kind: name, given: man}
    - {form: -at, gloss: a woman's given name, kind: name, given: woman}
  tongues:
    - tag: atarzadi
      meaning: "an Atárzadi name, built from Atárzadi stems"
      language: skill-atarzadilng
    - {tag: faith, meaning: a name built on a word of the Ashaian faith}
  scope:
    folders: [khazryndesert, ankariskhazryndesert]
    cultures: [khazrynclt]
    lore: [khazrynclt]
    parents: [khzryndsrtrgn, swoasisbelt, hekardesert]
    addresses: [skill-khazrilng, skill-sowideslng, skill-atarzadilng]
  elements:
    - {form: uzhem, sense: water}
    - {form: kurbel, sense: well}
    - {form: deshak, sense: road}
    - {form: khumez, sense: sand}
    - {form: yalish, sense: salt}
    - {form: gheros, sense: horse}
    - {form: bozekh, sense: camel}
    - {form: toshel, sense: "kin, clan"}
    - {form: ezhir, sense: guest}
    - {form: qaltum, sense: debt}
    - {form: yudesh, sense: "passage, safe-conduct, toll"}
    - {form: oshen, sense: sky}
    - {form: zhurik, sense: wind}
    - {form: kelosh, sense: tower}
    - {form: ghoden, sense: city}
    - {form: burqal, sense: mountain}
    - {form: mozhel, sense: the dead}
    - {form: qeshum, sense: north}
    - {form: nulezh, sense: south}
    - {form: azhur, sense: east}
    - {form: deghosh, sense: west}
    - {form: shekhul, sense: flame}
    - {form: yotekh, sense: "promise, covenant"}
    - {form: ghizol, sense: twelve}
    - {form: umrel, sense: tribe}
    - {form: zhudek, sense: judge}
    - {form: rezhul, sense: prince of a tribe}
    - {form: sighot, sense: elder}
    - {form: lukhem, sense: council}
    - {form: tozhir, sense: law}
    - {form: elkush, sense: oath}
    - {form: kholib, sense: bondage}
    - {form: zelum, sense: "freedom, going out"}
    - {form: hamekh, sense: to wander}
    - {form: kunesh, sense: black}
    - {form: gizhel, sense: "stone, rock"}
    - {form: teqem, sense: holy}
    - {form: olgez, sense: "house, seat"}
    - {form: zhoqar, sense: war}
    - {form: khemoz, sense: sword}
    - {form: bizhun, sense: spear}
    - {form: gholut, sense: bow}
    - {form: tulqen, sense: shield}
    - {form: noghez, sense: herd}
    - {form: kelum, sense: sheep}
    - {form: zhimel, sense: goat}
    - {form: ghuzol, sense: dog}
    - {form: hozhir, sense: date palm}
    - {form: leqosh, sense: garden}
    - {form: amulez, sense: oasis}
    - {form: sekhol, sense: spring}
    - {form: zoghel, sense: gold}
    - {form: keshum, sense: silver}
    - {form: dumekh, sense: blood}
    - {form: ghesur, sense: bone}
    - {form: eboz, sense: father}
    - {form: emuzh, sense: mother}
    - {form: burekh, sense: son}
    - {form: tolez, sense: daughter}
    - {form: niqosh, sense: child}
    - {form: homzel, sense: "people, folk"}
    - {form: shumek, sense: name}
    - {form: delkosh, sense: word}
    - {form: yurem, sense: song}
    - {form: lozhek, sense: night}
    - {form: qimur, sense: day}
    - {form: helbaz, sense: sun}
    - {form: zuqel, sense: moon}
    - {form: koshin, sense: star}
    - {form: aqesh, sense: dawn}
    - {form: duzhel, sense: smoke}
    - {form: roqesh, sense: ash}
    - {form: khorbet, sense: iron}
    - {form: nezhol, sense: copper}
    - {form: tumoz, sense: clay}
    - {form: qembur, sense: wall}
    - {form: sholqet, sense: gate}
    - {form: bushkel, sense: market}
    - {form: teghum, sense: trade}
    - {form: ezbol, sense: gift}
    - {form: lekhim, sense: bread}
    - {form: hulesh, sense: milk}
    - {form: qozhur, sense: meat}
    - {form: ghazrel, sense: great}
    - {form: nilesh, sense: small}
    - {form: dokhim, sense: old}
    - {form: yelqim, sense: new}
    - {form: eshur, sense: first}
    - {form: zurkhem, sense: "to conquer, to take"}
    - {form: toqel, sense: "to hold, to keep"}
    - {form: khezul, sense: to break}
    - {form: urtekh, sense: "land, ground"}
    - {form: bayel, sense: "waste, desert"}
    - {form: ghisham, sense: fear}
    - {form: nozhik, sense: victory}
  fields:
    - name: Derived words
      holds: "The names and words built from the stems, each with the pieces it is made of."
  words:
    - form: Kurbelukhem
      class: name
      field: Derived words
      gloss: the council of the well
      built: [kurbel, lukhem]
    - form: Zhoqarod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of war; the largest tribe, the war-tribe; `Bahram` is retired"
      built: [zhoqar, -od]
    - form: Homzelun
      class: name
      field: Derived words
      gloss: the whole people
      built: [homzel, -un]
    - form: Shekhulez
      class: name
      field: Derived words
      gloss: the place of the flame
      built: [shekhul, -ez]
    - {form: Zhoqarekh, class: name, field: Derived words, gloss: a warrior, built: [zhoqar, -ekh]}
    - form: Gherosor
      class: name
      field: Derived words
      gloss: "a man's name: horse"
      built: [gheros, -or]
    - form: Yuremat
      class: name
      field: Derived words
      gloss: "a woman's name: song"
      built: [yurem, -at]
    - form: Toqel
      class: name
      field: Derived words
      gloss: "to keep: Keeper of the Unconsuming Flame"
      built: [toqel]
    - form: Zhudek
      class: name
      field: Derived words
      gloss: "judge: the leader acclaimed in a crisis; `Dukhen` is retired"
      built: [zhudek]
    - form: Rezhul
      class: name
      field: Derived words
      gloss: "prince of a tribe: a tribe's hereditary chieftain"
      built: [rezhul]
    - form: Shekhulat
      class: name
      field: Derived words
      gloss: "a woman's name: flame"
      built: [shekhul, -at]
    - form: Ezbolor
      class: name
      field: Derived words
      gloss: "a man's name: gift"
      built: [ezbol, -or]
    - form: Qemburor
      class: name
      field: Derived words
      gloss: "a man's name: wall; `Darius` is retired"
      built: [qembur, -or]
    - form: Gholutod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the bow"
      built: [gholut, -od]
    - form: Teghumod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of trade; the merchant-tribe of Ashkarad; `Ardashír` is retired"
      built: [teghum, -od]
    - form: Burqalod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the mountain; the keeper-tribe of Mount Shofar; `Khorshad` is retired"
      built: [burqal, -od]
    - form: Tozhirod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the law; the scholar-tribe of Kethramír; `Zarvan` is retired"
      built: [tozhir, -od]
    - form: Teqemod
      class: name
      field: Derived words
      gloss: "a tribe: the holy sons; the militant tribe of Shirvan; `Mihran` is retired"
      built: [teqem, -od]
    - form: Kelumod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the sheep; `Vaspur` is retired"
      built: [kelum, -od]
    - form: Zhimelod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the goat; `Savash` is retired"
      built: [zhimel, -od]
    - form: Hozhirod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the date palm; `Yazdanbar` is retired"
      built: [hozhir, -od]
    - form: Noghezod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the herd; `Parmida` is retired"
      built: [noghez, -od]
    - form: Bizhunod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the spear; `Darvaz` is retired"
      built: [bizhun, -od]
    - form: Ghuzolod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the dog; `Ardvi` is retired"
      built: [ghuzol, -od]
    - form: Ebozor
      class: name
      field: Derived words
      gloss: "a man's name: father; the patriarch of the twelve tribes; `Atarpat` is retired"
      built: [eboz, -or]
    - form: Yotekhor
      class: name
      field: Derived words
      gloss: "a man's name: covenant; the prophet of the Exodus; `Mushara` is retired"
      built: [yotekh, -or]
    - form: Nozhikor
      class: name
      field: Derived words
      gloss: "a man's name: victory; the Zhudek of the Conquest; `Yáhoshí` is retired"
      built: [nozhik, -or]
    - form: Sighotor
      class: name
      field: Derived words
      gloss: "a man's name: elder; the Toqel, son of Nozhikor; `Aspansár` is retired"
      built: [sighot, -or]
    - form: Khemozor
      class: name
      field: Derived words
      gloss: "a man's name: sword; the Rezhul of the Zhoqarod; `Yázdarmid` is retired"
      built: [khemoz, -or]
    - form: Tulqenor
      class: name
      field: Derived words
      gloss: "a man's name: shield; the war-leader exiled for reaching for a crown; `Artáz` is retired"
      built: [tulqen, -or]
    - form: Zelumor
      class: name
      field: Derived words
      gloss: "a man's name: freedom; the renegade merchant-prince in Amradad; `Parviz` is retired"
      built: [zelum, -or]
    - form: Aqeshat
      class: name
      field: Derived words
      gloss: "a woman's name: dawn; the young prophet; `Hana` is retired"
      built: [aqesh, -at]
    - form: Khemozekh
      class: name
      field: Derived words
      gloss: "sword-bearer: the warrior society of the Zhoqarod; `Sardá` is retired"
      built: [khemoz, -ekh]
    - form: Tulqenekh
      class: name
      field: Derived words
      gloss: "shield-bearer: the warrior society of the Burqalod; `Armán` is retired"
      built: [tulqen, -ekh]
    - form: Ghishamekh
      class: name
      field: Derived words
      gloss: "fear-bringer: the warrior society of the Teqemod; `Zharván` is retired"
      built: [ghisham, -ekh]
    - form: Roqeshekh
      class: name
      field: Derived words
      gloss: "ash-keeper: the Fire-Keeper, the first rung of the Ashaian priesthood; `Athravan` is retired"
      built: [roqesh, -ekh]
    - form: Delkoshekh
      class: name
      field: Derived words
      gloss: "word-bearer: the teacher-priest, the working Ashaian priesthood; `Herbad` is retired"
      built: [delkosh, -ekh]
    - form: Shekhul
      class: name
      field: Derived words
      gloss: "elder of the flame: the senior priest of a major fire-temple; `Mobad` is retired"
      built: [shekhul, sighot]
    - form: Shekhulukhem
      class: name
      field: Derived words
      gloss: "council of the flame: the body of the priesthood; `Mobadate` is retired"
      built: [shekhul, lukhem]
    - form: Leqoshzuqel
      class: name
      field: Derived words
      gloss: "the garden moon: the priesthood's name for the Tellumi Fourth month"
      built: [leqosh, zuqel]
  register:
    - {name: Atárzadi Language, tongue: faith, why: built on the people's name}
    - {name: Atarzadi Language, tongue: faith, why: an unmarked spelling of the above}
    - {name: Tribes of Atarzád, tongue: faith}
    - {name: Atárzádegan, tongue: faith}
    - {name: Atarzád, tongue: faith}
    - {name: Atarzad, tongue: faith}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Desert}}
---

Atárzadi is the tongue of the [[affiliation-tribestrzd|Tribes of Atarzád]], the twelve tribes who took four of the [[lore-khazrynclt|Tellumi]] cities in the oasis belt at the foot of [[place-graznmntns|the Grazian Mountains]]. It is a tongue of the Desert family, a cousin of [[skill-dunharlng|Dunhari]], and like Dunhari it is an oral tongue, kept in memory and recitation, and written only in the settled courts, in [[skill-qalzscrscrpt|Qalezu]]. Fluency measures the sophistication of expression in the language, from the halting phrases of a traveler to the nuanced discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## How Atárzadi sounds

Atárzadi is the harsh cousin of Dunhari, with longer vowels and endings that close hard.

**The vowels.** _o_, _e_ and _u_ lead, unlike Dunhari's _a_.

**The consonants.** _zh_, _gh_, _q_, _kh_, _sh_, _l_, _m_ and _r_.

**Clusters.** Few: _lq_, _rb_ and _zh_ before a vowel.

**Endings.** Atárzadi words end in _-od_, _-or_, _-at_, _-ekh_ or _-ul_.

**What Atárzadi leaves out.** It has no _v_ and no Dunhari _-vad_ or _-bun_.

## Sounds

Atárzadi is the harshest tongue of the belt: full of _kh_, _gh_, _sh_ and _zh_, heavy with long vowels, and closed at the end of every word by a consonant. It shares Dunhari's fricatives and its uvular _q_ but none of its gliding vowels, and it lacks Dunhari's _p_, _f_ and _w_. The two build offices and places on different endings, and one pair looks regular: the place ending _-ez_ answers Dunhari _-adez_, the fort. Speakers of the two tongues understand each other's numbers, kin-words and a good part of their trade talk, and very little else.

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Syllables

```sql
SELECT "Rule", "Forms" FROM (
SELECT 0 AS o, 'Onsets' AS "Rule", CASE onsets WHEN 'single' THEN 'a single consonant' END AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 1 AS o, 'Codas' AS "Rule", array_to_string(list_transform(codas, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 2 AS o, 'Finals' AS "Rule", array_to_string(list_transform(finals, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 3 AS o, 'Doubled' AS "Rule", coalesce(nullif(array_to_string(list_transform(doubled, x -> '`' || x || '`'), ' '), ''), 'none') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 4 AS o, 'Vowel pairs' AS "Rule", coalesce(nullif(array_to_string(list_transform(vowelPairs, x -> '`' || x || '`'), ' '), ''), 'never') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 5 AS o, 'Initial vowel' AS "Rule", CASE WHEN initialVowel THEN 'yes' ELSE 'no' END AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 6 AS o, 'Final vowel' AS "Rule", CASE WHEN finalVowel THEN 'yes' ELSE 'no' END AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 7 AS o, 'Signature' AS "Rule", array_to_string(list_transform(signature, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
) ORDER BY o
```

A syllable opens on one consonant or on nothing and closes on any consonant but _h_ or _y_. A word never sets two vowels side by side, never doubles a letter, and **always ends on a consonant**: _uzhem_ "water", _deshak_ "road", _khumez_ "sand". **Every stem holds a long vowel**, so a name built from Atárzadi stems always carries a long vowel.

### Stress

Stress falls on the last long vowel of a word: de-**SHAK**, **UZH**-em. A word with no long vowel is stressed on its last syllable.

## Building words

Every Atárzadi word is a stem, two stems set together, or a stem with a suffix after it. The stems and their senses are in the [[skill-khazrilng#lexicon|Khazryn Lexicon]]. The thing described comes first: _kurbel_ "well" and _lukhem_ "council" make _kurbelukhem_, the council of the well.

### Joins

```sql
SELECT '`' || meeting || '`' AS "Meeting", '`' || rule || '`' AS "Rule", coalesce(array_to_string(list_transform(letters, x -> '`' || x || '`'), ' '), '') AS "Letters"
FROM joins WHERE language = 'thalorna-note-skill-atarzadilng' ORDER BY position
```

Two of the same consonant meeting become one, as the _l_ of _kurbel_ and _lukhem_ does. Every other meeting leaves both parts as they are.

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", gloss AS "Sense"
FROM affixes WHERE language = 'thalorna-note-skill-atarzadilng' ORDER BY position
```

### Names

| Name      | Built from        | Meaning                  |
| --------- | ----------------- | ------------------------ |
| Zhoqarod  | _zhoqar_ + _-od_  | a tribe: the sons of war |
| Homzelun  | _homzel_ + _-un_  | the whole people         |
| Shekhulez | _shekhul_ + _-ez_ | the place of the flame   |
| Zhoqarekh | _zhoqar_ + _-ekh_ | a warrior                |
| Gherosor  | _gheros_ + _-or_  | a man's name: horse      |
| Yuremat   | _yurem_ + _-at_   | a woman's name: song     |

**A tribe** is named by the stem of its founder or its emblem with _-od_, "the sons of". **A holding** takes _-ez_ after what it holds: a spring, a garden, a flame. **A given name** is one stem with _-or_ for a man or _-at_ for a woman; a tribe's name follows it.

## Atárzadi Lexicon {#lexicon}

The stems of Atárzadi, the names built from them and the register of its names. The rules the three tongues share, and the senses every tongue has a stem for, stand in the [[skill-khazrilng#lexicon|Khazryn Lexicon]].

### Stems

```sql
SELECT '`' || form || '`' AS "Stem", sense AS "Sense"
FROM elements WHERE language = 'thalorna-note-skill-atarzadilng' ORDER BY position
```

### Derived words

Worked names and words, each built from the stems above.

```sql
SELECT form AS "Word", '`' || 'atarzadi' || '`' AS "Tongue", gloss AS "Gloss", array_to_string(list_transform(built, x -> '`' || x || '`'), ' + ') AS "Derivation"
FROM words WHERE language = 'thalorna-note-skill-atarzadilng' AND field = 'Derived words' ORDER BY position
```

### Attested names

Every name of every note in the region stands in the register of the tongue it belongs to, with the note it names and its tag. A name in one of the three tongues carries its derivation.

```sql
SELECT name AS "Name", coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|]]'), ', '), '—') AS "Address", '`' || tongue || '`' AS "Language",
       CASE WHEN why IS NOT NULL THEN why
            WHEN tongue = 'older' THEN 'a name older than the rules'
            WHEN tongue = 'gloss' THEN CASE WHEN built IS NULL THEN '—' ELSE 'a glossed name on ' || array_to_string(list_transform(built, x -> '`' || x || '`'), ' and ') END
            WHEN built IS NOT NULL THEN array_to_string(list_transform(built, x -> '`' || x || '`'), ' + ')
            ELSE '—' END AS "Derivation"
FROM register WHERE language = 'thalorna-note-skill-atarzadilng' ORDER BY position
```

#### Language tags

```sql
SELECT tag AS "Tag", meaning AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-atarzadilng' ORDER BY position
```
