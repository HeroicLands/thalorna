---
shortcode: tantsoulng
name: {full: Tāntsou Language, aliases: []}
type: skill
subType: language
description: "The imperial speech of Tāntsou—tonal and sung, logographic in script, built of single-syllable roots set side by side, with vernaculars that drift the farther one travels from the capital."
tags: []
data: {icon: icon-speaking, templatePriority: null, packFolder: language}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
---

Tāntsou is a tonal tongue of single-syllable words. Fluency measures the sophistication of expression in Tāntsou, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

The language is known natively as **Tāntsou**, the name of the people (_tān_, celestial, and _tsou_, people) and of the country they hold. It is the common tongue of the [[affiliation-tantsouempr|Tāntsou empire]]; [[skill-jurthatlng|Jürthāti]] is its island daughter. This document gives the sounds, the grammar, the way names are built and the compound words of the court, the calendar and the Celestial Order. [[doc-tantsoulexcn|The lexicon]] holds the full word-hoard.

---

## Pronunciation Guide

The sound of Tāntsou is sung. A syllable is an **initial**, a **final** and a **tone**. It opens on a consonant, rests on an open vowel or a gliding pair of vowels, and may close on a soft _-n_ or _-ng_. No hard stop ends a syllable, so speech runs on in a flowing line, and pitch carries meaning as much as the letters do.

### Initials

| Letter(s)        | Pronunciation                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| b, d, g          | the plain stops, said with no puff of breath, as in "spin", "stop", "skin"; _g_ is always hard |
| k, t             | the same stops said with a puff of breath, as in "kin", "tin"                                  |
| f, h, l, m, s, y | as in "fine", "hat", "let", "man", "sit", "yes"                                                |
| n                | as in "no"; it also closes a syllable                                                          |
| r                | the "r" of "rung", never trilled                                                               |
| w                | as in "we"                                                                                     |
| ch, j            | as in "church", "judge"                                                                        |
| ts               | as in "cats"                                                                                   |
| sh, zh           | as in "ship", and as the "s" in "measure"                                                      |

An initial is always written, and a syllable never opens on a vowel. There is no _v_, _th_, _q_, _x_, _c_ or _z_.

### Finals

A final is a vowel, or a gliding pair of vowels, with an optional closing _n_ or _ng_. After _w_ the _u_ that opens _uo_ is dropped, so _w_ with _uo_ is written _wo_.

| Final | Pronunciation              | Final | Pronunciation          |
| ----- | -------------------------- | ----- | ---------------------- |
| a     | as in "father"             | in    | as in "seen"           |
| ai    | as in "aisle"              | ing   | as in "sing"           |
| an    | "on", said with an "ah"    | o     | as in "law"            |
| ao    | as in "cow"                | ong   | "oo" and "ng"          |
| e     | as in "bet"                | ou    | as in "go"             |
| ei    | as in "day"                | ui    | as in "way"            |
| en    | the "u" of "sun", then "n" | uo    | "war", without the "r" |
| eng   | the "u" of "sung"          | i     | as in "machine"        |
| ie    | as in "yeah"               | iao   | as in "yowl"           |

The vowels are _a_, _e_, _i_, _o_ and _u_. There are no rounded front vowels and no central vowels.

### Tones

Tone is contrastive: the same letters in a different tone are a different word. Each syllable has one of four tones, and each is written as a mark on the vowel.

| Tone       | Mark       | Contour               | Example                      |
| ---------- | ---------- | --------------------- | ---------------------------- |
| High level | macron `ā` | held high             | _tān_ celestial, _wō_ sacred |
| Rising     | acute `á`  | from low to high      | _wén_ centre, _léi_ spirit   |
| Falling    | grave `à`  | from high to low      | _wèn_ five, _hò_ fire        |
| Low        | no mark    | low, falling a little | _wou_ court, _ha_ dark       |

The mark stands on the _a_, _e_ or _o_ of the final, and when it has none, on its last vowel. A syllable carries one mark at most. Tone marks are written everywhere: in names, in titles and in running text.

Tones separate words that would otherwise be one:

| Words          | Meanings        |
| -------------- | --------------- |
| _mòu_, _mou_   | wood, green     |
| _nou_, _nòu_   | field, bound    |
| _zhén_, _zhèn_ | boar, snow      |
| _chén_, _chèn_ | emperor, frost  |
| _wén_, _wèn_   | centre, five    |
| _wō_, _wò_     | sacred, warrior |
| _wou_, _wòu_   | court, tortoise |
| _hén_, _hèn_   | chaos, tiger    |

Each syllable keeps its own tone inside a compound, so _Zhazhò_ (life-dragon) is said low, then falling.

---

## Grammar Notes

### Word Order

Tāntsou is a **head-final, modifier-first** language. Adjectives, numbers and possessors precede nouns. The basic sentence order is **Subject–Object–Verb**, and in compound names and titles the pattern is **modifier + head noun**.

Sample phrases and sentences:

- _Rīn zhò_ = red (_rīn_) + dragon (_zhò_) > "a red dragon"
- _Jén chài_ = nine (_jén_) + mountain (_chài_) > "nine mountains"
- _Rong léi_ = myriad (_rong_) + spirit (_léi_) > "countless spirits"
- _Yòu chéng._ = moon (_yòu_) + rises (_chéng_) > "The moon rises."
- _Zhò téng chéng._ = dragon (_zhò_) + sky (_téng_) + ascends (_chéng_) > "The dragon ascends the sky."
- _Léi wa._ = spirit (_léi_) + answers (_wa_) > "The spirit answers."
- _Shòu jóng._ = water (_shòu_) + falls (_jóng_) > "The water falls."
- _Dao chén tsou wa._ = great (_dao_) + emperor (_chén_) + people (_tsou_) + answers (_wa_) > "The people answer the great emperor."

### Compounding

The primary word-formation process is **compounding**: two or more single-syllable words set side by side, the first modifying the second. Nothing joins or alters them, and each keeps its tone.

- _hò_ (fire) + _séi_ (bureau) > _Hò Séi_ (Fire Bureau)
- _sing_ (death) + _wou_ (court) > _Sing Wou_ (Court of the Dead)
- _tuì_ (iron) + _ja_ (blade) > _Tuìja_ (Iron Blade, a personal name)

A compound that is a personal or place name, a god or a caste is written as a single word: _Tānzhò_, _Wéizhuo_, _Raogui_. A descriptive title, an office or an institution keeps its words apart: _Téng Gui_ (Celestial Minister), _Léi Séi_ (Spirit Bureau).

### Suffixes

A small number of words close compounds so often that they act as suffixes:

| Suffix | Meaning               | Example                                                |
| ------ | --------------------- | ------------------------------------------------------ |
| -tsou  | tribe, group, people  | _Nòutsou_ (slaves), _Ha Tsou_ > _Hatsou_ (shadow folk) |
| -wō    | sacred, divine        | _Méiwō_ (Dream Spirit), _Nuòwō_ (Spirit of Decay)      |
| -gui   | official, minister    | _Raogui_ (Thunder Lord), _Yàigui_ (Practitioner)       |
| -gèn   | master, teacher       | _Léigèn_ (Spirit Master), _Chougèn_ (Lore Master)      |
| -zhuo  | lord, sovereign       | _Yozhuo_ (Demon Lord), _Wòzhuo_ (War Lord)             |
| -léi   | spirit                | _Nuòléi_ (Decay Spirit), _Faléi_ (Fortune Spirit)      |
| -yòu   | month                 | _Hòyòu_ (Fire Month), _Tōuyòu_ (Earth Month)           |
| -juì   | festival              | _Hou Léi Juì_ (Harmony Festival)                       |
| -chài  | mountain, peak, place | _Jénchài_ (Nine Mountains), _Wéichài_ (Jade Peak)      |
| -wou   | court, palace, hall   | _Téngwou_ (Celestial Court), _Sing Wou_ (Death Court)  |
| -séi   | bureau, ministry      | _Hò Séi_ (Fire Bureau), _Dou Séi_ (Journey Bureau)     |

### Plurals

Tāntsou does not mark plurality on nouns. Context says whether a word means one or many. The word _rong_ (ten thousand, a myriad) set before a noun gives the sense of "countless": _Rong Léi_ = "Ten Thousand Spirits."

### Honorifics and Titles

Titles follow the name: _Tānzhò Wōzhuo_ = Tānzhò + "Sacred Lord" (a title). In formal address the word _dao_ (great, supreme) may be prefixed: _Daonéi_ (Great Sovereign), _Daoyài_ (Grand Physician).

---

## Compound Words and Titles

Every word below is built from the roots in [[doc-tantsoulexcn|the lexicon]].

### Political Titles

| Tāntsou           | Literal Meaning            | Usage                     |
| ----------------- | -------------------------- | ------------------------- |
| Téngzhéi          | Heaven-Child               | Emperor                   |
| Rongléng Téngzhéi | Myriad-Bright Heaven-Child | Emperor of Jénchài        |
| Wòzhuo            | Warrior-Lord               | Warlord                   |
| Daozhuo           | Great-Lord                 | Greater Warlord (Jénchài) |
| Shuìzhuo          | Lesser-Lord                | Lesser Warlord (Jénchài)  |
| Téng Gui          | Heaven-Official            | Celestial Minister        |
| Guichài           | Office-Mountain            | Provincial Governor       |
| Zhaokuò           | Clan-Ancient               | Clan Elder                |
| Zhaolòu           | Clan-Law                   | Caste Laws                |

### The Eight Castes

| Tāntsou  | Literal Meaning   | Role                                                 |
| -------- | ----------------- | ---------------------------------------------------- |
| Zhazhò   | Life-Dragon       | Imperial family—"Dragon-born"                        |
| Nòuduo   | Bound-Magic       | Chattel Sorcerers                                    |
| Wòhou    | Warrior-Noble     | Warrior Nobility                                     |
| Tānchéi  | Celestial-Scholar | Celestial Scholars                                   |
| Tsàizhao | Craft-House       | Artisans and Craftsmen                               |
| Nouwén   | Field-Centre      | Farmers and Peasants                                 |
| Shuonong | Trade-Folk        | Merchants                                            |
| Nòutsou  | Bound-Tribe       | Slaves and Outcasts                                  |
| Wònong   | Warrior-Folk      | Common soldiers and enforcers within the craft caste |

### Religious Terms

| Tāntsou          | Literal Meaning                   | Usage                                        |
| ---------------- | --------------------------------- | -------------------------------------------- |
| Téngwou Rong Léi | Celestial Court of Myriad Spirits | The Celestial Order (pantheon name)          |
| Léi Séi          | Spirit Bureau                     | Spirit Bureaus (collective)                  |
| Téngwō           | Heaven-Sacred                     | Mandate of Heaven                            |
| Léiwō            | Spirit-Sacred                     | The philosophy of vital energy               |
| Léigèn           | Spirit-Master                     | Spirit priest/practitioner                   |
| Léichéi          | Spirit-Scholar                    | A discipline of breath and vital energy      |
| Tséising         | Self-Death                        | Ritual suicide                               |
| Ruìsing          | Ritual-Death                      | State-ordered ritual suicide                 |
| Hénléi           | Chaos-Spirit                      | The Unclassified; primordial chaos           |
| Dao Chou Léi     | Great Record-Spirit               | The Master Registry of all classified things |

### Medical Terms

| Tāntsou  | Literal Meaning | Usage                        |
| -------- | --------------- | ---------------------------- |
| Yàiwō    | Heal-Sacred     | Physician caste (collective) |
| Yàitsài  | Heal-Craft      | Herbal Master / Apothecary   |
| Zhayài   | Life-Heal       | Physician (general)          |
| Chéishuì | Scholar-Lesser  | Medical student              |
| Yàigui   | Heal-Official   | Practitioner (experienced)   |
| Daoyài   | Great-Heal      | Master Physician             |
| Wōyài    | Sacred-Heal     | Grand Healer (highest rank)  |

### The Celestial Pantheon

| Tāntsou | Epithet                                          | Domain                                |
| ------- | ------------------------------------------------ | ------------------------------------- |
| Tānzhò  | Tānzhò Wōzhuo (Sacred Celestial Dragon Lord)     | Heaven, order, cosmic law             |
| Wéizhuo | Wéizhuo Daonéi (Jade Sovereign)                  | Administration, celestial bureaucracy |
| Raogui  | Raogui Wōdao (Thunder of Divine Might)           | Thunder, storms, justice              |
| Yòuwéi  | Yòuwéi Téngwou (Moon Jade of the Heavenly Court) | Moon, healing, dreams                 |
| Yozhuo  | —                                                | Demon King, ruler of infernal realms  |

### The Eleven Spirit Bureaus

| Tāntsou     | Literal Meaning      | Domain                             |
| ----------- | -------------------- | ---------------------------------- |
| Méi Séi     | Dream Bureau         | Dreams, visions, omens             |
| Sing Wou    | Death Court          | Death, judgment, underworld        |
| Raoshòu Séi | Thunder-Water Bureau | Thunder, rain, storms              |
| Chou Séi    | Knowledge Bureau     | Knowledge, learning, enlightenment |
| Fa Lòu Séi  | Fortune-Law Bureau   | Wealth, prosperity                 |
| Hò Séi      | Fire Bureau          | Fire, the hearth, metallurgy       |
| Tsài Séi    | Creation Bureau      | Life, birth, craft                 |
| Hén Séi     | Chaos Bureau         | Chaos, floods, entropy             |
| Dou Séi     | Journey Bureau       | Travel, pilgrimage, crossroads     |
| Nuò Séi     | Decay Bureau         | Decay, rot, transformation         |
| Léi Séi     | Spirit Bureau        | (General term for all bureaus)     |

### The Five Elemental Lords

| Tāntsou        | Element                         |
| -------------- | ------------------------------- |
| Wéngdao Zhòuwō | Air—Azure Wind of Sacred Breath |
| Rīnhò Daowéng  | Fire—Blazing Fire Great Wind    |
| Daotōu Wōchài  | Earth—Great Earth Sacred Stone  |
| Wōjing Ja      | Metal—Divine Gold Blade         |
| Zhòushòu Zhò   | Water—Azure Water Dragon        |

### Calendar—Month Names

| #   | Tāntsou  | Literal Meaning       |
| --- | -------- | --------------------- |
| 1   | Juìyòu   | Festival Month        |
| 2   | Mòuyòu   | Wood Month            |
| 3   | Hòyòu    | Fire Month            |
| 4   | Houyòu   | Balance Month         |
| 5   | Tōuyòu   | Earth Month           |
| 6   | Jingyòu  | Metal Month           |
| 7   | Shòuyòu  | Water Month           |
| 8   | Wéngyòu  | Wind Month            |
| 9   | Yòujuì   | Moon Festival (Month) |
| 10  | Chiaoyòu | Winter Month          |
| 11  | Zhènyòu  | Snow Month            |
| 12  | Chènyòu  | Frost Month           |

### Calendar—Spirit Animals

| Tāntsou  | Meaning          |
| -------- | ---------------- |
| Wéngzhò  | Wind Dragon      |
| Tuìhèn   | Iron Tiger       |
| Zhīzhài  | Star Bird        |
| Kuòwòu   | Ancient Tortoise |
| Jēi      | Sacred Beast     |
| Buìchéi  | White Sage       |
| Léngzhài | Radiant Phoenix  |
| Léngmài  | Dawn Horse       |
| Buìbéi   | White Ape        |
| Chéisou  | Sage Serpent     |
| Wōzhén   | Righteous Boar   |
| Hazhài   | Shadow Bird      |
| Jingzhò  | Golden Dragon    |
| Wazhò    | Echo Dragon      |
| Zhòuzhài | Azure Bird       |

### Festivals

| Tāntsou      | Meaning                       |
| ------------ | ----------------------------- |
| Hou Léi Juì  | Festival of Harmonious Spirit |
| Wèn Tsài Juì | Festival of Five Elements     |
| Yòu Juì      | Moon Festival                 |
| Singléi Juì  | Festival of the Dead          |

### Organizations and Factions

| Tāntsou     | Meaning                                     |
| ----------- | ------------------------------------------- |
| Ha Luò Zhao | Black Lotus Society (criminal organization) |
| Ha Zhao     | Shadow Sect (subversive cult)               |
| Nuòtsou Ruì | Cult of the Forsaken                        |

### Sample Place Names

| Tāntsou        | Literal Meaning        |
| -------------- | ---------------------- |
| Chéng Zhài Wou | Rising Phoenix City    |
| Rīn Luò Wou    | Red Lotus Palace       |
| Buì Zhī Chài   | Silver Star Valley     |
| Kuò Léng Wou   | Eternal Dawn Fortress  |
| Jingzhò Chài   | Golden Dragon Mountain |
| Rong Luò Wou   | Thousand Flower City   |
| Léng Yòu Shòu  | Bright Moon Lake       |
| Téng Yàn Wou   | Sky Cloud Tower        |
| Hou Shòu Chài  | Still Water Island     |
| Kuò Zhī Dou    | Eternal Star Bridge    |
| Wō Wéng Chài   | Sacred Wind Island     |
| Jén Léng Wou   | Nine Lantern Temple    |

---

## Script & Literacy

Tāntsou employs a **logographic writing system** in which each character represents a morpheme. Characters are organized by semantic radicals and may be combined into compound characters mirroring the language's compounding grammar. Because a character stands for a meaning, the same character serves several words that differ only in tone. The system is extraordinarily rich but demands years of intensive study.

**Formal Script ([[skill-tengchouscript|Téng Chou]], "Celestial Record"):** The standard script used in imperial documents, religious texts, and classical literature. Characters are drawn with precise, angular strokes. Approximately 3,000-4,000 characters are required for general educated reading; scholars may master 6,000 or more.

**Cursive Script ([[skill-tengchouscript|Dou Chou]], "Flowing Record"):** A more rapid, connected hand used for administrative and mercantile purposes. Simplified character forms reduce the stroke count while preserving legibility for trained scribes.

**Literacy:** True literacy—the ability to read and compose continuous text—is confined to the nobility (30-50%), the priesthood, the imperial bureaucracy, and professional scribes. Formal education in classical characters requires 10-15 years of study. Even in major urban centers, most merchants and guildsmen possess only functional recognition of common characters—enough for trade marks, numerals, and familiar signs—and rely on scribes for contracts and correspondence. The vast majority of the population is non-literate.

## Historical Development

Tāntsou is a language isolate with no widely-accepted external relatives. Older forms of the language, preserved in bronze inscriptions and classical texts, show considerable similarity to the modern tongue, a testament to the language's structural conservatism and the continuous scholarly tradition that preserves its forms.

**Classical Period (Age of Dynasties, ~2,300 years ago):** The standardization of the classical language occurred during the early dynasties of the empire. The language of this period is preserved in classical texts and bronze inscriptions, and remains largely comprehensible to educated modern speakers.

**Literary Standardization (~1,200 years ago):** A major literary standardization fixed the characters and their meanings in the _Dao Chou_ ("Great Record"). This standardization has proven remarkably stable; scholars can read texts 2,000 years old with only minor difficulty.

**Modern Tāntsou:** The spoken language has undergone some phonological change—drifting tones, minor vowel shifts—but the conservatism of the writing system and the prestige of classical education have kept the language extraordinarily stable.

## Regional Dialects

**Imperial Dialect:** The prestige standard, spoken in the capital and taught in formal education. Keeps all four tones and every classical grammatical form.

**Northern Tāntsou:** The speech of [[place-jenchairgn|Jénchài]], moderately divergent. Some vowel mergers and simplified compound forms. More borrowing from neighboring steppe languages.

**Southern Tāntsou:** Spoken in the agricultural and mercantile south. Tones lie closer together, speech rhythms run faster, and trade languages lend more words.

**Coastal Trade Dialect:** Extreme simplification for port use. Heavy code-switching with maritime pidgins. Approaching creolization in some trading communities.

## Naming Traditions

In Tāntsou tradition, names are auspicious utterances invoking favorable qualities, celestial principles, or virtuous ancestors. The bestowing of a name is an occasion of considerable importance, often conducted by a learned scholar or priest who consults astrological and classical texts.

Names follow a **family-name-first pattern**. The family name (_zhao_) precedes the given name, creating names of two to four compound elements. Given names are constructed from the vocabulary through compounding—a name like _Tuìja_ ("Iron Blade") or _Léngluò_ ("Bright Lotus") is simultaneously a name and a meaningful phrase. A name is written as one word, and every syllable carries its tone.

**Male given names** often incorporate elements associated with strength, virtue, or celestial forces: _dao_ (great), _wò_ (warrior), _zhò_ (dragon), _jing_ (gold), _chéi_ (scholar), _rao_ (thunder).

**Female given names** often reference beauty, nature, or grace: _luò_ (lotus), _yòu_ (moon), _zhī_ (star), _wéi_ (jade), _léng_ (radiant), _méi_ (dream).

**Family names** are typically monosyllabic and extremely stable across generations, derived from place names, occupations, or ancient clan affiliations.

### Example Names

**Male:** Tānzhò (Celestial Dragon), Tuìja (Iron Blade), Wòdao (Great Warrior), Raléng (Thunder Dawn), Chéiwō (Sacred Scholar), Jingzhén (Golden Boar), Houwéng (Calm Wind), Daohèn (Great Tiger), Léngzhī (Radiant Star), Mòuwō (Sacred Wood)

**Female:** Léngluò (Bright Lotus), Yòuwéi (Moon Jade), Méizhī (Dream Star), Wéiluò (Jade Flower), Zhòuléng (Azure Dawn), Buìyòu (Silver Moon), Houluò (Peaceful Lotus), Rīnyàn (Red Cloud), Shòuwéi (Water Jade), Léngméi (Radiant Dream)

**Family Names:** Tān (celestial), Wéi (jade), Jing (gold), Shòu (water), Hò (fire), Mòu (wood), Léi (spirit), Chài (mountain), Zhī (star), Dou (path), Hou (harmony), Kuò (ancient)

---

## See Also

- [[affiliation-tantsouempr|Tāntsou empire]]—Overview of the empire and its culture
- [[affiliation-tengwouronglei|Téngwou Rong Léi]]—The Celestial Order (pantheon)
- [[lore-phlsphyleiwo|Philosophy of Léiwō]]—The philosophy of vital energy
- [[lore-clndrstrlgy|Calendar and Astrology]]—Calendar, months, and spirit animals
- [[lore-personlnms|Personal Names]]—Naming conventions and examples
