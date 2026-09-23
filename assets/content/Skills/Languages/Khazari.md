---
tags: []
name:
  full: Khazári Language
  aliases:
    - Khazári
    - Khazari
    - Dwarven
    - Elder Tongue
description: "The second of the Elder Tongues—short, percussive, and consonant-heavy, kept alive in the holds of the Khazári."
shortcode: khazarlng
type: skill
subType: language
data:
  icon: icon-speaking
  templatePriority: null
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
packFolder: language
flags:
  "thalorna":
    lang_family: Elder
---

Khazári is a tongue of the Elder family. Fluency measures the sophistication of expression in Khazári, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Khazári is the language of the **Khazári** (known in human legends as "dwarves"), the second of the Elder Races and one of the oldest peoples on Thalorna. The Khazári are vanishingly rare—fewer than one in ten thousand inhabitants of Thalorna—and their language is nearly as rare, spoken only in isolated mountain strongholds and passed down within closely-guarded family traditions.

To the human ear, Khazári sounds hard and percussive: short, consonant-heavy words that crack and resound like hammer-blows on stone. There are few long vowels, few flowing transitions. Instead, the language emphasizes sharp stops, rolling liquids, and harsh consonants that seem to echo in cavernous spaces. A Khazári speaker sounds strong and commanding, even when speaking softly.

Khazári grammar is deceptively simple in structure but profound in content. The language compresses meaning into short, powerful constructions. Where Sinalë employs flowing diphthongs and vowel gradation, Khazári uses consonantal hardening and compound concatenation. What appears to outsiders as blunt is often precisely articulate and philosophically loaded.

## Phonology

### Consonants

Khazári consonantal inventory emphasizes hard, resonant sounds:

- **Hard stops**: K, T, P (all unaspirated but clearly articulated)
- **Rolled liquids**: R (heavily rolled), L (sometimes trilled)
- **Nasals**: M (deep), N (nasal closure), NG (velar nasal, powerful)
- **Fricatives**: F, S, TH (hard dental)
- **Affricates**: KR (combination), GR (combination)
- **Glottal stop** ('): Rare, used for emphatic separation

**Consonant clusters are common** in Khazári, unlike most other Thalorna languages. Words like _Krdol_ or _Thrakn_ contain two consonants in sequence. This contributes to the language's dense, compact quality—more information per syllable.

### Vowels

Khazári distinguishes **five basic vowels**, with short forms strongly preferred:

- **A** (short, ah-like)—bright, metallic
- **E** (short, eh-like)—clear, direct
- **I** (short, ih-like)—sharp, cutting
- **O** (short, oh-like)—deep, resonant
- **U** (short, uh-like)—rounded, muffled

**Long vowels** are rare and marked, typically indicating emphasis or importance:

- **Â** (long a)—emphasis, power, significance

Diphthongs are **extremely rare** in Khazári. When they do occur, they are compressed and abbreviated (AE, AU, OI), and they carry strong semantic weight.

### Stress and Prosody

Stress in Khazári is **regular and predictable**: the first syllable of any word receives primary stress. This gives the language a characteristic "punching" rhythm—the beginning of each word is emphasized, then the word trails off.

Example: **THRAL**-dir (stress on THRAL) vs. Sinalë **Thain**-dor (more even distribution)

The language employs **minimal pitch variation**. Formal speech is nearly monotone; questions are marked primarily by word order and particles rather than intonation. This flatness contributes to the language's perception as blunt or severe.

## Grammar Notes

### Sentence Structure

Khazári employs **Subject-Verb-Object (SVO)** word order, identical to most human languages:

- _Durinor throk hamardin_—"Durinor forges the hammer" (direct, unambiguous)

This straightforward structure reflects Khazári philosophical practicality: the actor, action, and result are presented in logical sequence. No philosophical mysteries, no poetic ambiguity—just what is.

### Verbs

Khazári verbs **conjugate extensively for tense and aspect** through a system of suffixes:

**Tense Markers (suffixes):**

- **Present**: _-ak_ (e.g., _throk-ak_—"forges" / "is forging")
- **Past**: _-ag_ (e.g., _throk-ag_—"forged")
- **Future**: _-ak-tor_ (e.g., _throk-ak-tor_—"will forge")

**Aspect Markers (prefixes):**

- **Perfective** (completed action): _kr-_ (e.g., _kr-throk_—"has forged")
- **Habitual** (repeated action): _gl-_ (e.g., _gl-throk_—"forges habitually" / "is a forger")

**Person is marked through separate pronouns, not verb suffixes:**

- _Ak throk-ak_—"I forge"
- _Dur throk-ak_—"You (singular) forge"
- _Ol throk-ak_—"He/she/it forges"

### Nouns

Nouns **decline for case** through suffixes:

**Case System:**

- **Nominative**: No suffix (subject)
- **Accusative**: _-am_ suffix (direct object)
- **Genitive**: _-ir_ suffix (possession)
- **Dative**: _-an_ suffix (indirect object)
- **Ablative**: _-ol_ suffix (from / away from)
- **Locative**: _-um_ suffix (location)

Example: _Hamar_ (hammer-nom.) > _Hamarim_ (hammer's) > _Hamarum_ (in the hammer)

**Gender** is grammatical but not semantic: every noun is classified as masculine, feminine, or neuter, affecting adjective agreement:

- _Grimbold Thraldir_—"Gray (masc.) forge" (forge is masculine)
- _Grimda Khazta_—"Gray (fem.) stone" (stone is feminine)

### Adjectives

Adjectives **agree with nouns** in gender, number, and case:

- _Grimbold Thraldir-ir_—"of the Gray Forge" (adjective and noun both in genitive)

Adjectives typically **precede nouns**, though poetic inversion is allowed.

### Compound Words

Khazári extensively employs **compound nouns**, where two or more elements fuse:

- _Hamarthrok_ = "hammer-forge" (a place where hammers are forged)
- _Stonehammer_ = "stone-hammer" (a hammer for stone-working)
- _Forgethunder_ = "forge-thunder" (the sound of forging, metaphorically lightning from the forge)

Compounds are written as single words, and their meaning is understood through literal concatenation: Khazári culture values directness and clarity, so a compound means exactly what its parts suggest.

## Script and Literacy

Khazári is written in [[skill-drthrkscrpt|Durthrak]], an **angular, geometric script** that resembles runes carved into stone—or rather, the runes of the Pelwar peoples resemble it, being in all likelihood a reduced work-row taught to the Proto-Pelwar tribes when those tribes were Khazári subjects, and simplified twice over since. Letters are angular and blocky, designed to be carved efficiently into rock or metal. The script is written left-to-right, top-to-bottom, but letters do not connect—each is distinct.

Key features:

- **Letter forms**: Straight lines, right angles, sharp vertices
- **Inscription tradition**: Designed for carving into stone, metal, or wood
- **Diacritical marks**: Notches, dots, and lines indicate pronunciation variants or emphasis
- **Formality variants**: More elaborate, decorative versions for monuments or sacred texts

Literacy in Khazári is **nearly universal among the Khazári**—writing is fundamental to their culture of craftsmanship, record-keeping, and genealogy. However, human literacy in Khazári is **very rare**. Only dedicated scholars or those with Khazári kinship learn to read or write the language.

## Historical Development

Khazári is one of the **two surviving Elder Tongues**, sharing a common ancestor with Sinalë but diverging sharply in development. The language emerged from the **deep stone halls** where the Khazári built their civilization, and it reflects that origin: compact, resonant, designed for communication in cavernous spaces.

Historical layers in Khazári:

- **Primordial layer** (oldest, archaic): Rare verb forms, ancient craft vocabulary, astronomical and geological terminology
- **Classical layer** (main body of Khazári tradition): The form preserved in genealogies, craft records, and genealogical epics
- **Modern layer** (contemporary Khazári): Philosophical vocabulary reflecting Khazári concerns with craft, honor, and legacy

The language has **absorbed minimal borrowings** from other tongues. Khazári pride in linguistic purity is legendary. When foreign concepts arise, Khazári prefer to construct new words from existing Khazári roots or coin compounds from craft terminology.

## Regional Dialects

Khazári is fragmented geographically, with scattered strongholds and communities:

- **Northern stronghold dialect** (high mountains): The prestige form, slowest and most formal
- **Southern hall dialects** (foothills and lower regions): Slightly faster, some vowel shifts, minor vocabulary variations
- **Far-distant isolate dialects** (legendary hidden strongholds): Archaic forms, unique vocabulary, extremely different from modern standard

Inter-stronghold communication is maintained through formal written records and periodic gatherings, limiting dialect divergence. However, a Khazári from the northern peaks will sound notably different from one of the southern halls.

## Sample Phrases

- _Durinor! Ol hamarthrok-ir throk-ak thrungol_—"Durinor! He forges with honor in the great forge" (greeting or acknowledgment)
- _Stonehammer throk-ag, vamirthur throk-ak-tor_—"The Stonehammer forged, and thunder will forge again" (reference to legendary weapons or ancestral craft)
- _Ol grinmold Thraldir-um_—"He stands in the Gray Forge" (statement of location or identity)
- _Krol throk-ag-ol, krol throk-ak-tor_—"Stone forged, stone will forge forever" (eternal principle)
- _Hamarthrok-ir vamirth, Durinor-ir vamirth_—"Forge's pride, Durinor's pride" (affirmation of honor)

## Related Languages

Khazári is one of the **two surviving Elder Tongues**, descended from a **common Elder ancestor** shared with Sinalë. Both languages preserve fragments of the ancient grammar, but they diverged sharply:

**Sinalë** chose the path of vowel harmony, soft consonants, and flowing melody.

**Khazári** chose the path of consonantal density, short vowels, and percussive strength.

To a human speaker, the languages sound completely unrelated. To speakers of the Elder Tongues, the kinship is evident in:

- Identical **VSO to SVO transition** across both languages (ancient SVO appears in ritual speech)
- **Identical case systems** (six cases, marked by suffixes)
- **Identical verb aspect system** (perfective/habitual markers)

The shared ancestor is extinct; no text preserves it. Scholars debate whether the Elder Races deliberately diverged their languages or whether geography and culture naturally pulled them apart.

## Naming Traditions

### Structure and Philosophy

Khazári names are **short, powerful compounds** that encapsulate identity. Names typically consist of two elements, sometimes three:

1. **Personal name** (descriptive or ancestral): Often a quality, achievement, or lineage reference
2. **Clan name** (patrilineal, literal compound): Encodes craft, geological feature, or martial quality

Khazári believe names are not merely labels but **destiny markers**—a name shapes the bearer's path and duty. Naming is a sacred act, performed by elders with great ceremony.

### Personal Names

Personal names are usually one or two syllables, reflecting Khazári phonological compactness:

- _Durin_—"lasting" / "enduring" (strength, longevity)
- _Throin_—"bold" / "fierce" (courage)
- _Balak_—"mighty" (power, authority)
- _Falka_—"swift" (speed, agility)

Names often reference:

- **Qualities of stone and metal**: Strength, hardness, durability, shine
- **Martial qualities**: Courage, ferocity, honor, defiance
- **Craft-related concepts**: Making, forging, building, crafting

Parents name children to mark births, achievements, or circumstances. A child born during battle might be _Thrak_ ("strike"). A child born after a triumph might be _Grinmold_ ("gray victory").

### Clan Names

Clan names are **inherited patrilineally** and carry **literal, compound meanings** tied to craft, geology, or quality:

- _Stonehammer_—literal: "stone" + "hammer" (family of stone-workers and smiths)
- _Ironkeep_—literal: "iron" + "keep" (family that maintains iron fortresses)
- _Deepdelver_—literal: "deep" + "delver" (family of miners, those who dig deep)
- _Forgebinder_—literal: "forge" + "binder" (family of master smiths, those who bind metals)

Clan names are not poetic or metaphorical. A Khazári named _Stonehammer_ comes from a lineage of literal stone-workers and blacksmiths. The name encodes ancestry, profession, and responsibility.

When a Khazári achieves extraordinary deeds, they may earn a **new clan name** through legend. This is rare and deeply significant—it marks the establishment of a new lineage. The new name is then passed to descendants.

### Gender and Naming

Khazári names are **not gendered**. Females bear the same personal names as males. However, tradition dictates slightly different clan name formations:

- **Masculine clan names**: Often emphasize action or construction (Stonehammer, Forgebinder)
- **Feminine clan names**: Often emphasize steadiness or protection (Deepstone, Strongshield, Steadfast)

This is convention, not law. A female warrior might bear a traditionally masculine clan name; a male artisan might bear a traditionally feminine one. Identity is more important than convention.

## Name Lists

### Male Given Names

Durinor, Thrainar, Grimbald, Dwalinor, Kildar, Orinvald, Bofrik, Frornir, Fundal, Thorbrin, Grothin, Barakl, Thaldin, Balrim, Dornak, Grimnar, Haldorn, Brandir, Skorli, Fargrim, Garbal, Thrundal, Borlin, Naldur, Kolmar, Durnir, Finrak, Mordin, Braldur, Tormak, Rathak, Throndal, Varli, Glarnak, Norgrim, Hrothir, Fralnir, Varnak, Thrunir, Garlin, Skarvin, Falkir, Gorlin, Dwalrak, Brundir, Holgar, Thaldir, Frornak, Durkar, Krorlin, Haldrim, Kildorn, Brandrak, Gorri, Thurnar, Borgrim, Gorthak, Fundir, Valthorn, Hrothrak, Skarnor, Balrik, Bormir, Durrin, Thalkar, Frondir, Dornir, Valdor, Garak, Rornak, Skorgrim, Thorlin, Hildor, Kurnak, Thorgar, Graldor, Barlin, Kolrin, Mordrak, Drornir, Holmir, Skargrim, Durbar, Grimdor, Throgar, Nornak, Borkir, Krulmir, Rathorn, Gorthan, Varkar, Skornir, Brunar, Haldrak, Thrundur, Valrim, Brorlin, Dwalnir

### Female Given Names

Thraineth, Durilda, Gildruna, Borlina, Frida, Grimhild, Dvalga, Throrrin, Kilvara, Barilda, Haldina, Skorlieth, Orlida, Drusilda, Falkineth, Gorhelga, Thrandis, Fundina, Norlina, Bronneth, Graldis, Eldrida, Dalkira, Grimlith, Valdira

### Clan Names (Patrilineal)

Stonehammer Ironfist Deepdelver Thunderforge Rockbreaker Forgebinder Stormbeard Firehelm Oakenshield Anvilsong Blackstone Frostforge Steelmantle Mountainborn Ironkeep Battlebrow Runevein Emberaxe Flintforge Darkdelver Stonearm Bronzefoot Grimbeard Deepstone Coldshield

## External References

- Khazári Names (personal names and patrilineal clan names)
- Elder Tongue comparative linguistics
- Khazári genealogies and craft records
- Stronghold records and monuments
