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

To the human ear, Khazári sounds hard and percussive: short, consonant-heavy words that crack and resound like hammer-blows on stone. There are few long vowels and few flowing transitions. The language runs on sharp stops, rolled liquids and back fricatives that carry in cavernous spaces. A Khazári speaker sounds strong and commanding even when speaking softly.

What makes the language strange to a human ear is not its sound but its build. A Khazári word is not a stem with endings glued on. It is a **skeleton of three consonants**, carrying the meaning, into which a **frame of vowels** is poured, carrying the grammar. The same three consonants yield the stone, the mason, the quarrying and the quarry, and a listener who knows the skeleton can follow a word he has never heard. Where a human tongue makes a new word by hanging a piece on the end of an old one, Khazári makes it by pouring a different frame through the same skeleton.

## Phonology

### Consonants

The inventory is laid out in three clean series, and Khazári grammarians teach it as a grid rather than a list:

- **Stops:** _p_ / _b_, _t_ / _d_, _k_ / _g_—all unaspirated and firmly articulated
- **Fricatives:** _f_ / _v_, _th_ / _dh_ (dental, as in _thin_ and _then_), _s_ / _z_, _kh_ / _gh_ (back, scraped at the soft palate), and _h_
- **Nasals:** _m_, _n_
- **Liquids:** _r_ (heavily rolled), _l_
- **Glottal stop** ('): rare, and used only to hold two vowels apart

The four digraphs—_th_, _dh_, _kh_, _gh_—are single sounds and count as single consonants everywhere in the grammar below. **Consonant clusters are common**, which is unusual on Thalorna: _thamr_, _darkh_, _zamd_ and _khaln_ are ordinary words, and the density is the point. More meaning travels per syllable than any human tongue manages.

### Vowels

Khazári has **five vowels**—_a_, _e_, _i_, _o_, _u_—and strongly prefers them short. Long vowels are written with an acute (_á_, _é_, _í_, _ó_, _ú_), are uncommon, and never occur by accident: a long vowel is part of a grammatical frame and is always doing work. Diphthongs are rare, compressed, and confined to a handful of ancient words.

### Stress

**Stress falls on the syllable carrying the acute. A word with no acute is stressed on its first syllable.** There are no exceptions and no secondary stresses, so any Khazári word can be said correctly on sight: _DALK_, _KHAR-van_, _dal-ka-thu-MÁR_.

### Skeletons and frames

Meaning in Khazári lives in a **skeleton**—a _marg_, literally a bone—of exactly three consonants, written with hyphens between them: **d-l-k** "stone", **th-m-r** "to strike", **kh-r-v** "unlit". A skeleton is never spoken on its own. To say it, a speaker pours a **frame**—a _vald_, a binding—of vowels through it, and the frame says what kind of word comes out.

One phonotactic rule governs every frame. **The second and third consonants of a skeleton stand together only when the second is _l_, _r_, _m_, _n_ or _s_; otherwise a short _a_ stands between them.** So d-l-k gives _dalk_ but k-v-l gives _kaval_, and no frame can override it.

The frames are taught on the model skeleton **k-l-d**, "to lay a course of stone":

| Frame          | Shape                   | What it makes      | On k-l-d  | On d-l-k  | On th-m-r  |
| -------------- | ----------------------- | ------------------ | --------- | --------- | ---------- |
| **bare**       | K1aK2K3                 | the thing itself   | _kald_    | _dalk_    | _thamr_    |
| **worker**     | K1aK2K3 + _-ir_         | one who does it    | _kaldir_  | _dalkir_  | _thamrir_  |
| **deed**       | K1uK2**á**K3            | the doing of it    | _kulád_   | _dulák_   | _thumár_   |
| **place**      | _hu-_ + K1aK2K3         | where it is done   | _hukald_  | _hudalk_  | _huthamr_  |
| **done thing** | K1iK2K3 + _-ath_        | what has been made | _kildath_ | _dilkath_ | _thimrath_ |
| **name**       | K1VK2K3 + _-Vn_ or _-V_ | a person (below)   | _Kaldan_  | _Dalka_   | _Thamran_  |
| **house**      | bare + _-a-_ + deed     | a lineage (below)  | —         | —         | —          |

So from **d-l-k** alone: _dalk_ "stone", _dalkir_ "mason", _dulák_ "the cutting of stone", _hudalk_ "quarry", _dilkath_ "a dressed block". A Khazári hearing _dalkir_ for the first time does not learn a word; he recognises a skeleton in a frame he already knows.

The frames are a closed set. A speaker who needs a word Khazári has not got does not borrow one—he takes the nearest skeleton and pours a frame through it, and every other speaker understands the result at once. This is why the language has absorbed so little from its neighbours, and why the Khazári regard borrowing as an admission of poverty rather than a courtesy.

## Grammar Notes

### Sentence Structure

Khazári is **Subject-Verb-Object**, and the order does not move:

- _Dalkir thumár-ak kald_—"The mason strikes the course"

The actor, the act and the thing acted upon, in that sequence. Khazári rhetoric treats any other order as evasion.

### Verbs

A verb is a skeleton in the **deed** frame with a tense suffix. Person is carried by a separate pronoun and never by the verb:

- **Present**: _-ak_—_thumár-ak_ "strikes"
- **Past**: _-ag_—_thumár-ag_ "struck"
- **Future**: _-aktor_—_thumár-aktor_ "will strike"

Aspect is a prefix rather than a suffix:

- **Perfective** (the act completed): _kr-_—_kr-thumár_ "has struck"
- **Habitual** (the act as a practice): _gl-_—_gl-thumár_ "strikes as a trade"

Pronouns: _ak_ "I", _dur_ "you", _ol_ "he, she, it", _akhn_ "we", _durn_ "you (many)", _oln_ "they".

### Nouns

Nouns decline for case by suffix. The six cases are the same six Sinalë keeps, which is the strongest single piece of evidence for the common ancestor:

| Case       | Suffix | Example   | Sense           |
| ---------- | ------ | --------- | --------------- |
| Nominative | —      | _dalk_    | stone (subject) |
| Accusative | _-am_  | _dalkam_  | stone (object)  |
| Genitive   | _-ith_ | _dalkith_ | of stone        |
| Dative     | _-an_  | _dalkan_  | to stone        |
| Ablative   | _-ol_  | _dalkol_  | from stone      |
| Locative   | _-um_  | _dalkum_  | in stone        |

Gender is grammatical and not semantic—every noun is masculine, feminine or neuter, and adjectives agree with it.

### Adjectives

Adjectives are skeletons in the bare frame, agreeing with their noun in gender, number and case, and standing before it:

- _kharv dalk_—"unlit stone"
- _kharvith dalkith_—"of the unlit stone"

Poetic inversion is permitted and is immediately recognisable as poetry.

### Compounds

Khazári compounds two skeletons by setting the first in the bare frame, the second in the deed frame, and putting a linking _-a-_ at the seam:

- _dalk_ and _thumár_ give _dalkathumár_, "the striking of stone"
- _gald_ and _vulád_ give _galdavulád_, "the binding of fire"—the tempering of a blade
- _barz_ and _guráz_ give _barzaguráz_, "the guarding of the gate"

The compound is one word, stressed on its acute, and it means exactly what its two skeletons mean in that order. The same device makes house names, which is why a Khazári house name is a sentence about a craft and not a description of a person.

## Script and Literacy

Khazári is written in [[skill-drthrkscrpt|Durthrak]], an **angular, geometric script** that resembles runes carved into stone—or rather, the runes of the Pelwar peoples resemble it, being in all likelihood a reduced work-row taught to the Proto-Pelwar tribes when those tribes were Khazári subjects, and simplified twice over since. Letters are angular and blocky, designed to be carved efficiently into rock or metal. The script is written left-to-right, top-to-bottom, but letters do not connect—each is distinct.

Key features:

- **Letter forms**: Straight lines, right angles, sharp vertices
- **Inscription tradition**: Designed for carving into stone, metal, or wood
- **Diacritical marks**: Notches, dots, and lines indicate the acute and the skeleton boundaries
- **Formality variants**: More elaborate, decorative versions for monuments or sacred texts

Durthrak writes the three consonants of a skeleton larger than the vowels of the frame, so a carved word shows its own grammar: the bone is cut deep and the binding is scored between. A Khazári reader takes in the skeleton first and the frame second, which is how a worn inscription can still be read when half the vowel-scoring has weathered away.

The runic rows of the Nordlands, where anyone there writes at all, are near enough to Durthrak that a Khazári can pick out most of the staves. What they do not share is that depth of cut. A Nordman's staves all stand equal, because Nordmal has no skeleton to pick out; Khazári grades its own, and a stroke that carries grammar in one hand carries nothing in the other. Khazári who have compared the two rows say the northern one looks like a tool being held by the wrong end.

Literacy in Khazári is **nearly universal among the Khazári**—writing is fundamental to their culture of craftsmanship, record-keeping, and genealogy. However, human literacy in Khazári is **very rare**. Only dedicated scholars or those with Khazári kinship learn to read or write the language.

## Historical Development

Khazári is one of the **two surviving Elder Tongues**, sharing a common ancestor with Sinalë but diverging sharply in development. The language emerged from the **deep stone halls** where the Khazári built their civilization, and it reflects that origin: compact, resonant, designed for communication in cavernous spaces.

Historical layers in Khazári:

- **Primordial layer** (oldest, archaic): Rare frames, ancient craft vocabulary, astronomical and geological terminology
- **Classical layer** (the main body of Khazári tradition): The form preserved in genealogies, craft records, and ancestral epics
- **Modern layer** (contemporary Khazári): Philosophical vocabulary reflecting Khazári concerns with craft, honor, and legacy

The language has **absorbed minimal borrowings** from other tongues, for the reason the frames make plain: a Khazári who meets a foreign thing coins a skeleton for it rather than taking the foreign word, and the coinage is transparent to everyone at once. Khazári pride in linguistic purity is legendary, and it is cheaper for them than for anybody else.

## Regional Dialects

Khazári is fragmented geographically, with scattered strongholds and communities:

- **Northern stronghold dialect** (high mountains): The prestige form, slowest and most formal
- **Southern hall dialects** (foothills and lower regions): Slightly faster, some vowel shifts, minor vocabulary variations
- **Far-distant isolate dialects** (legendary hidden strongholds): Archaic frames, unique skeletons, extremely different from the modern standard

Inter-stronghold communication is maintained through formal written records and periodic gatherings, limiting dialect divergence. However, a Khazári from the northern peaks will sound notably different from one of the southern halls.

## Sample Phrases

- _Ol dalkir, ol kr-kulád hukaldum_—"He is a mason; he has laid the course in the workhall" (an introduction, and a claim to competence)
- _Thamr-ol tharn, vald-ol varn_—"From the blow, the hammer-fall; from the binding, the true line" (a proverb: results follow method)
- _Ak gl-thumár, dur gl-zumád_—"I strike as a trade, you assay as a trade" (a division of work, and by extension an acknowledgment of another's mastery)
- _Kald kr-sumád, kald thumár-aktor_—"The course has been raised; the course will be struck again" (said over a finished work, and at funerals)
- _Vanthith dalk, vanthith marg_—"Oath of stone, oath of bone" (the strongest form of undertaking)

## Related Languages

Khazári is one of the **two surviving Elder Tongues**, descended from a **common Elder ancestor** shared with Sinalë. The kinship is not audible. Sinalë runs on open syllables, long vowels and a soft inventory; Khazári runs on clusters, short vowels and back fricatives, and a speaker of either needs to be told the two are related before he will believe it.

What the two share is a habit no human tongue on Thalorna has: **both make a new word by altering the body of an old one rather than by hanging a piece on its end.** Khazári pours a different vowel frame through a fixed skeleton; Sinalë changes the consonant a word begins with according to the work the word is doing. Case and number are suffixed in both, but that is the shallow layer—the deep one is inside the word.

Beyond that instinct the two agree on:

- **The same six cases**, marked by suffix in both, and three of the six suffixes are close enough that no one argues about them
- **The same division of aspect** into the completed and the habitual, marked in both by a prefix
- **A closed inventory of derivational shapes** rather than an open one, so neither language borrows readily

The shared ancestor is extinct and no text preserves it. Scholars debate whether the Elder Races deliberately drove their languages apart or whether geography and craft pulled them.

## Naming Traditions

### Structure and Philosophy

A Khazári carries a **given name** and a **house name**, and the two are built by different frames, so no Khazári has ever mistaken one for the other:

1. A **given name** is a single skeleton in the **name frame**. It is short—two or three syllables—it never carries an acute, and it always ends in a vowel or in that vowel followed by _-n_.
2. A **house name** is **two skeletons compounded**, exactly as any other Khazári compound is built. It is four or five syllables, it always carries the acute of the deed frame, and it always ends in a consonant.

Length, the acute and the final sound therefore separate the two on sight, which matters in a culture that carves both onto the same lintel.

Khazári hold that a name is not a label but a **charge**: it names work the bearer is expected to do, and a name given carelessly is an insult to the child. Naming is performed by the elders of the house, who choose the skeleton and are held to account for the choice.

### Given Names

The name frame takes any of the five vowels, and the choice is meaningful rather than decorative. The **frame vowel is repeated in the ending**: _-an_, _-en_, _-in_, _-on_, _-un_ for a man, and the bare vowel _-a_, _-e_, _-i_, _-o_, _-u_ for a woman. From **d-l-k** "stone": _Dalkan_ and _Dalka_, _Delken_ and _Delke_, _Dilkin_ and _Dilki_, _Dolkon_ and _Dolko_, _Dulkun_ and _Dulku_.

The five vowels carry the five senses in which a charge can be laid:

- **a**—the work as it stands. The commonest, and the plainest.
- **e**—the work hoped for, laid on a child born to a house that needs it.
- **i**—the work of a named forebear, taken up again.
- **o**—the work as an inheritance, used where a line would otherwise end.
- **u**—the work endured, given to a child born in a bad season or a bad year.

A Khazári therefore reads a stranger's given name twice: once for the skeleton, which says what he is for, and once for the vowel, which says why.

### House Names

A house name compounds two skeletons and states a craft as an act: _dalk_ "stone" and _thumár_ "striking" give **Dalkathumár**, the house of the striking of stone. The name is not a description of anybody. It is the work the house holds, and the house is answerable for it.

House names descend patrilineally and do not change. A Khazári who accomplishes something no existing house can account for may be granted a **new** house name, compounded for the occasion by the elders of several holds together; this happens perhaps twice in a century, and it founds a line.

Because both halves are Khazári skeletons, a house name means the same thing to every Khazári and nothing at all to anyone else. Written out for outsiders it is glossed, never translated into a foreign compound, and Khazári are notably short with human scholars who try.

### Gender and Naming

The skeletons are not gendered: a woman and a man may be named from the same skeleton and frequently are, within a house and within a generation. Only the ending distinguishes them.

House names have no gendered form at all. A woman of Dalkathumár is of Dalkathumár, and the convention some human chroniclers report—that certain houses are "women's houses"—is a misreading of holds where the senior craft happened to descend through sisters.

## Name Lists

### Male Given Names

Kaldan, Kildin, Kuldun, Dalkan, Delken, Dolkon, Thamran, Thimrin, Thumrun, Kevalen, Kivalin, Sekaren, Sikarin, Sokaron, Narvan, Nirvin, Nurvun, Gelden, Gildin, Guldun, Kherden, Khirdin, Khordon, Vezaden, Vuzadun, Varthan, Virthin, Vorthon, Melthen, Milthin, Tergen, Tirgin, Zamdan, Zimdin, Falnan, Filnin, Fulnun, Kharvan, Khirvin, Ganvan, Gunvun, Palthan, Pilthin, Vanthan, Vinthin, Derkhen, Dorkhon, Mirgin, Murgun, Thernen, Thornon, Thurnun, Valdan, Voldon, Gamzan, Gimzin, Helben, Holbon, Garfan, Girfin, Balgan, Bulgun, Samdan, Simdin, Tevaren, Tovaron, Zerken, Zorkon, Ferden, Furdun, Khalnan, Khilnin, Revaden, Rovadon, Demgen, Domgon, Thalgan, Thilgin, Vernen, Vornon, Berzen, Borzon, Lekamen, Lokamon, Hanthan, Hinthin, Ranthan, Rinthin, Salthan, Silthin, Gerzen, Gorzon, Tamkan, Timkin, Khevanen, Khivanin, Sakalan, Sikalin

### Female Given Names

Kalda, Kildi, Kuldu, Dalka, Delke, Dolko, Thimri, Thumru, Kevale, Kivali, Sekare, Sokaro, Nirvi, Nurvu, Gelde, Gildi, Kherde, Khirdi, Vezade, Vuzadu, Vartha, Virthi, Melthe, Milthi, Terge, Tirgi, Zamda, Zimdi, Falna, Filni, Kharva, Khirvi, Ganva, Gunvu, Paltha, Pilthi, Vantha, Vinthi, Derkhe, Dorkho, Mirgi, Murgu, Therne, Thorno, Velde, Voldo, Gamza, Gimzi, Helbe, Holbo, Garfa, Girfi, Balga, Bulgu, Samda, Simdi, Tevare, Tovaro, Zerke, Zorko, Ferde, Furdu, Khalna, Khilni, Revade, Rovado, Demge, Domgo, Thalga, Thilgi, Verne, Vorno, Berze, Borzo, Lekame, Lokamo, Hantha, Hinthi, Rantha, Rinthi, Saltha, Silthi, Gerze, Gorzo, Tamka, Timki, Khevane, Sakala, Sikali

### House Names (Patrilineal)

Dalkathumár—"the striking of stone" Sakarapuláth—"the folding of iron" Galdavulád—"the binding of fire" Kharvagunáv—"the delving of the unlit" Barzaguráz—"the guarding of the gate" Tavarasuláth—"the pouring of the deep water" Margavuráth—"the bearing of the bone" Halbazumád—"the assay of silver" Thalgahunáth—"the spanning of the snow" Ravadarunáth—"the reckoning of the vein" Kaldasumád—"the raising of the course" Vanthakhuván—"the chanting of the oath" Narvafurád—"the enduring of the cold" Zarkaguráf—"the whetting to brightness" Falnadurákh—"the holding of the deep" Lakamakhulán—"the lamp in the silence" Balgatumák—"the trust of copper" Malthaturág—"the root of salt" Targasumád—"the raising from deep ground" Vazadakulád—"the course that endures" Khardavurán—"the hold set true" Damgathurán—"the note of the hammer-fall" Ganvadumág—"the note of the delving" Valdasukár—"the binding of iron" Kavalazurák—"the shaping to brightness"

## External References

- Khazári Names (given names and patrilineal house names)
- Elder Tongue comparative linguistics
- Khazári genealogies and craft records
- Stronghold records and monuments
