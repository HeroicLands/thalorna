---
shortcode: nordmalng
name: {full: Nordmal Language, aliases: [Nordmal]}
type: skill
subType: language
description: "The hardy, runic-scripted tongue of the five Nordmen kingdoms, bending its vowels with every fjord."
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
  flags: {"thalorna": {lang_family: Pelwar}}
---

Nordmal is a tongue of the Pelwar family. Fluency measures the sophistication of expression in Nordmal, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

Nordmal is the tongue of the frozen north, spoken across the five Nordmen kingdoms of [[affiliation-kngdmnrdhm|Kingdom of Nordheim]], [[affiliation-kingdomlgn|Kingdom of Malagna]], [[affiliation-kingdmnrgd|Kingdom of Norgaad]], [[affiliation-kingdmtrgd|Kingdom of Targud]], and [[affiliation-kngdmvthgrd|Kingdom of Vithgard]], as well as in portions of western [[place-aelwyth|Aelwyth]] where Nordman settlers have established communities among the Élavendri lands. A language of harsh beauty, Nordmal reflects the strength, resilience, and warrior culture of its speakers.

## Overview

Nordmal speakers are known for direct, forceful speech. The language employs strong stress patterns, guttural consonants, and harsh consonant clusters that give it a martial character. Yet beneath this severity lies a poetic tradition of considerable depth—the skalds (bards and poets) of the north compose intricate verse in Nordmal, using complex alliterative patterns and kennings (metaphorical names) that require years of training to master.

The language stands apart from southern Pelwar tongues, having developed in relative isolation across centuries of harsh climate and independent kingdom politics. Mutual intelligibility with Vylari exists but requires effort; Nordmal speakers and southern Pelwar speakers often resort to simplified trade speech or the more neutral Provenzal when diplomatic precision is required.

## Phonology

Nordmal employs a consonant-heavy inventory with particular emphasis on stops and fricatives, creating the characteristic "harsh" quality northern speakers are known for:

**Consonants:** The language employs a full complement of stop consonants (p, b, t, d, k, g) with strong aspiration in some contexts. Fricatives include f, v, s, z, the voiceless dental fricative _th_ (as in _thin_), and the uvular fricative kh/x (from Proto-Pelwar heritage). Nordmal has **no voiced dental fricative**: the sound older Pelwar carried in that slot merged into plain _d_ generations before the five kingdoms were founded, which is why _seidr_ is said SAI-dur and not SAY-thur. The runic row still keeps two separate staves for a distinction the tongue gave up, and rune-masters treat that as proof the staves are older than the speech. The combination of these fricatives with the heavy stress patterns creates the characteristic "crackling" sound of Nordmal speech. Initial consonant clusters are common and well-tolerated (str-, skr-, kn- are typical).

**The letters are a closed set.** Nordmal writes the consonants `b d f g h j k l m n p r s t v z` and the two digraphs `th` and `kh`, and the vowels `a e i o u y` and `ö`, each of the first six having a long partner written `á é í ó ú ý`. It writes no `c`, no `q`, no `w` and no `x`, and marks no vowel long that the six acutes do not cover, so there is no long `ö`. A word carrying any of those four letters belongs to another tongue.

**Vowels:** Nordmal maintains six vowel positions (a, e, i, o, u, y) with systematic length distinctions marked by accent marks (á, é, í, ó, ú, ý for long vowels). Diphthongs are limited in inventory but phonemic. Nasal vowels do not occur.

**Stress and Rhythm:** Stress is predictable, falling primarily on the first syllable of words (STÓRáldur, HLARTHarukh). This creates a hammer-blow rhythm characteristic of Nordmal speech. The language employs alliterative verse patterns where lines are bound by consonant repetition rather than end rhyme.

**Distinctive Features:** The uvular fricative (kh/x) marks the boundary between everyday and formal speech, appearing most frequently in archaic texts and high ritual contexts. The combination of initial consonant clusters with the strong initial stress gives Nordmal a distinctive "punch" in speech. Nordmal also preserves some archaic Pelwar features—like the instrumental case and a dual number—that other branches have lost.

### Openings and closings

Two inventories decide whether a name can be Nordmal at all, and both are closed. A name that opens or closes outside them belongs to some other tongue however well its middle behaves, and the closing is the stronger cue of the two, because the last sound by itself places a name in its class. Ordinary words keep the same openings and take a wider range of closings, so _skip_ and _hof_ are Nordmal and no name is.

**What may open a name.** A single consonant, one of the clusters below, or a vowel with nothing in front of it.

| consonants | the openings                                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| one sound  | `b` `d` `f` `g` `h` `j` `k` `l` `m` `n` `p` `r` `s` `t` `v` `th`                                                             |
| two        | `bj` `bl` `br` `dr` `dv` `fj` `fl` `fr` `gl` `gn` `gr` `hl` `hn` `hr` `hv` `kn` `kr` `nj` `sk` `sm` `sn` `st` `sv` `tv` `vr` |
| three      | `frj` `skj` `skr` `stj` `str` `thr`                                                                                          |
| none       | a vowel stands first                                                                                                         |

The `kh` never opens anything. It sits at the end of a clan name and in the body of a ritual word, and nowhere else.

**An element that opens a compound stands first in the name**, so its own spelling has to open on one of these. An element whose opening is not in the table above is an element no name can carry.

**What may close a name.** A vowel, or one consonant from a set of nine.

| closing                 | what may stand there                                  |
| ----------------------- | ----------------------------------------------------- |
| any name                | a vowel, or `d` `g` `k` `l` `m` `n` `r` `t` `v`       |
| a clan name at the ting | `kh`, which nothing else ends in                      |
| written double          | `ll` `nn` `rr`, as in Vígvöll, Knalthann, Thrúnhamarr |

No Nordmal name ends in `b`, `f`, `h`, `j`, `p`, `s`, `th` or `z`. A name whose last element would otherwise close on `f` takes the strong ending `-r` instead, which is why the wolf is _úlfr_ and the fire _eldr_.

**The consonant band.** Nordmal carries about two and a third consonants for every vowel, and a name has to sit inside the band its class occupies. A compound runs heavier than a bound name, because the two elements bring their codas together at the seam. Below the floor a coinage stops sounding northern: a name with more vowels in it than consonants belongs to a southern tongue.

| class of name                 | consonants per vowel | syllables  |
| ----------------------------- | -------------------- | ---------- |
| a bestowed or ting-built name | `1.0` to `3.5`       | `2` to `3` |
| a compound                    | `1.0` to `5.0`       | —          |

**There is no glottal stop.** No name carries an apostrophe and no two vowels stand in hiatus. A vowel pair is a single diphthong spoken in one beat, and the free pairs are `ae`, `au`, `ei` and `ey`. An element carries whatever pair its own spelling has, so `-guard` and `-stead` keep theirs wherever they stand.

### Weight, foot and beat

Stress falls on the first syllable of every word without exception, so a Nordmal name has exactly one beat and it lands at the front. That is what lets a name be said correctly on sight: AL-thmýl, VRA-thý-ra, HLARTH-a-rukh.

A name-stem is one syllable and carries a short vowel, so in a given name or a ting-built clan name every long vowel falls after the stress, inside the ending. A stem-and-ending name therefore runs two syllables or three and never one or four: a trochee where the ending is one syllable, a dactyl where it is two. A compound has as many syllables as its elements bring and no fixed count, and it may carry its length in the stressed syllable, which is the audible difference between a bestowed name and a made one—Sólrún and Thrúnvald open long, Althmýl and Hlartharukh open short.

Alliteration binds, and end rhyme does nothing. A skald binds a line by repeating the onset, and a hall binds its generations the same way: a line whose name-giver was Hlarthvir names its sons Hlirthmýl and its grandsons Hlurthann, so the onset holds steady down the generations while the ablaut grade turns over. A coined name that alliterates with nothing in the hall it belongs to is as wrong as a coined name with the wrong grade.

## Grammar Notes

**Word Order:** Nordmal employs a basic SVO word order but allows significant flexibility due to its rich case system. Case marking through nominal suffixes allows pragmatic reordering for emphasis. Archaic texts show greater flexibility than modern speech.

**Noun Cases:** Nordmal preserves the most elaborate case system of any Pelwar language, with five cases: nominative, accusative, genitive, dative, and instrumental. This allows precise expression of relationships without relying on prepositions or word order.

**Number:** The language maintains singular, dual, and plural distinctions. The dual is used for naturally paired entities (hands, eyes, two-person teams) and is considered more precise than using singular or plural forms.

**Gender:** Nordmal maintains three genders (masculine, feminine, neuter) with consistent agreement patterns. Gender often corresponds to semantic features but irregular assignments persist, marking archaisms.

**Verbs:** Verbs conjugate according to person, number, tense (past, present, future), and aspect (perfective/imperfective). The subjunctive mood is well-developed. Strong verbs (employing vowel ablaut) are more numerous in Nordmal than in southern Pelwar languages, and irregular forms are respected as markers of education.

**Articles:** Nordmal employs enclitic articles (attached to nouns) rather than separate words, distinguishing definite and indefinite forms. The choice of article can indicate degree of certainty or emotional distance.

## Script & Literacy

Nordmal traditionally employs a runic script (the ancient [[skill-thuravarkscript|Thurávark]], adapted for Pelwar sounds, and in all likelihood inherited, by way of a Proto-Pelwar row learned from the Khazári when the Pelwar tribes were their subjects—a claim no Norman will hear) for formal and sacred writing. The runic system is considered more noble and traditional than the alphabetic script used for trade and common writing. High-status texts—legal documents, genealogies, religious texts—are written in runes.

### Romanizing Nordmal

Nordmal is written in runes. Every Latin spelling in these pages is therefore a
romanization rather than the language's own writing, and the rule governing it is
that **a romanized name must be typeable**: a reader who meets Sólrún in a saga and
goes looking for her has to find him by typing what they saw.

That rules out any letter a search cannot fold away. An accent is a decoration
sitting on an ordinary letter, so á, ó and ö reduce to a, o and o by themselves—they cost a reader nothing, and Nordmal keeps them to mark vowel length. Thorn,
eth and ash are not decorations but letters in their own right, and nothing
reduces them: a search for _thurs_ never reaches a name spelled with a thorn,
because there is no _t_ and no _h_ inside it to find. They are written out
instead:

| sound                         | written       | never    |
| ----------------------------- | ------------- | -------- |
| voiceless dental fricative    | `th`          | thorn    |
| its merged voiced counterpart | `d`           | eth      |
| the low front vowel           | `ae`          | ash      |
| the rounded back vowel        | `ö`           | o-ogonek |
| long vowels                   | `á é í ó ú ý` | —        |

The assembly is the one place the rule bends toward the older hard _t_. Spelled
_th_ the word comes out _thing_, which is an ordinary English noun and would bury
it past finding, so the northern word for a lawful gathering is the **ting**—and
the handful of names that traveled with it, Torvald among them, keep the same
hard opening.

[[skill-varokhlng|Varokhi]] is romanized off the same table with the row for the
rounded back vowel struck out. The southern tongue's length distinction is
phonemic and marked, so a Varokhi name writes the dental fricative `th`, its
voiced counterpart `d`, the low front vowel `ae` and the acute for a long vowel
exactly as a Nordmal name does. The mark therefore tells the two tongues
nothing apart, and the letters do: **Nordmal writes no `w` and no `c`**, and
Varokhi writes both freely, as Thráwald, Garwald and Wítharic show, while the
`ö` of Blóthöll and Vörnheim belongs to the north alone. The closings part them
a second time—a Nordmal name closes on `g`, `t` or `v` and a Varokhi name on
`c`, `s` or `th`, and neither closes a name the way the other does.

The [[skill-semrnscrpt|Sêmarion]] alphabet has become increasingly common for practical purposes, particularly in trade and maritime contexts. True literacy remains rare—confined to the priesthood, professional scribes, and a small minority of the nobility (perhaps 10-20%). Many jarls and thanes consider reading a scribe's task, not a warrior's, and keep household scribes for correspondence and record-keeping. Even in trading cities, most merchants rely on scribes for contracts and correspondence; a guildsman may recognize common trade marks and numerals but cannot read continuous text. Inland and rural populations are almost entirely non-literate. However, the cultural prestige of poetry and sagas means many non-literate Nordmen can recite extensive oral literature from memory.

## Historical Development

Nordmal descended from Proto-Pelwar stock along with [[skill-varokhlng|Varokhi]], but followed a unique evolutionary path in isolation across the frozen north. The language preserves many archaic Pelwar features (instrumental case, dual number, strong verbs) that have been lost or simplified in southern branches, suggesting Nordmal represents a more conservative development path.

The five Nordmen kingdoms maintained relative political independence, preventing standardization. Instead, Nordmal developed as a family of related dialects tied to specific kingdoms. This diversity is a source of pride (each kingdom claims its variant is the "truest" Nordmal) but can create difficulties in inter-kingdom diplomacy.

## Regional Dialects

**Nordheim Standard:** The prestige dialect of the greatest kingdom, used in formal contexts and literature. Shows the most conservative phonetics.

**Malagna Coastal:** Spoken in the more temperate coastal regions, showing some phonetic simplification and loanwords from trading contacts with Provenzal speakers.

**Interior Highland:** Spoken in mountainous regions inland, preserves more archaic features, particularly in the case system and strong verb forms.

**Frontier Speech (Aelwyth Nordmal):** A mixed variety spoken in western Aelwyth, incorporating some Élavendri vocabulary and showing phonetic simplification due to bilingual contact.

## Sample Phrases

- **"Hersvald kallar tingit."**—"The host-wielder calls the assembly." (Plain statement, showing the enclitic article `-it` on a neuter noun.)
- **"Vér gangum í frídi."**—"We come in peace." (Formal diplomatic formula; _frídi_ is the dative of _frídr_, the peace a hall owes a guest.)
- **"Thrúnvald vakir, úlfar thyrsta!"**—"The Thunder-Wielder wakes, the wolves thirst!" (Battle cry, bound by its alliteration on _th_ rather than by rhyme.)
- **"Tvau skip, ein ferd."**—"Two ships, one voyage." (The dual _tvau_, said of two people who answer for one another.)
- **"Stóraldit lifir í steini ok í minni."**—"The saga lives in stone and in memory." (Two datives in parallel; _minni_ is memory recited, not memory written.)

## Vocabulary

A skald teaching you the tongue starts with the words a hall cannot do without: the words of its verse, its hearth and its boats, the words for the whale and the seal that feed it through the winter, and the words it speaks over its dead. Every one of them is built the way the tongue builds anything. A word is an element of the lexicon standing alone, an element in the strong `-r`, or elements joined at a seam, and many are a stem in the fourth grade that only words take. The third column shows the building, so you can take a word apart the way the skald does.

### Verse and its kinds

A skald's craft has a word for every kind of thing he makes, and a hall judges him partly by whether he knows which one he has made. A _gyldra_ is paid for with a ring; a _hnúra_ is never paid for at all. A piece is called by its kind before anything else, so a lament for a ship's crew is a _skiphnúra_ and needs no other title. The saga itself is _stórald_, one of the words the tongue keeps whole.

| word        | what it names                                        | how it is built                                                              |
| ----------- | ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| `gyldra`    | a praise-poem, made for a lord and paid with a ring  | a root of its own; `gyldr-` in front of a seam                               |
| `hnerv`     | a refrain, the line that returns between stanzas     | _hnarv_, the notch cut to count off a year, in the fourth grade              |
| `hulma`     | a kenning, a thing named in other words              | a root of its own; `hulm-` in front of a seam                                |
| `hnúra`     | a lament                                             | a root of its own; `hnúr-` in front of a seam                                |
| `skreld`    | a flyting, an exchange of insults in verse           | _skrald_, a cry the wind carries further than it should, in the fourth grade |
| `snerv`     | a prophecy, a seeress's foretelling                  | _snarv_, the hour before weather arrives, in the fourth grade                |
| `knelth`    | a charm, a binding sung and never written down       | _knalth_, an oath that binds without being written, in the fourth grade      |
| `relth`     | a telling, a tale short of a saga, given at a hearth | _ralth_, how far a voice carries over water, in the fourth grade             |
| `dyrma`     | a lay, a poem that tells a story                     | a root of its own                                                            |
| `haugminni` | the grave-ale, the cup drunk to the dead at the howe | `haug-`, a howe, and `-minni`, a cup drunk to a memory                       |

### The hearth and the hall

The hearth words are the first a child learns and the last a traveler thinks to ask for. Two of them come straight out of the stems: the coal kept alive overnight is the stem for a banked fire turned into a thing, and the stone at the edge of a claim is the stem for something set down that will not be moved. Every hall has one _höfudsveld_, and a king or a jarl who sits at the ting sits in a _tingsveld_.

| word         | what it names                                        | how it is built                                                         |
| ------------ | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| `vyld`       | grain                                                | a root of its own                                                       |
| `gnúm`       | a clay pot                                           | a root of its own                                                       |
| `breld`      | a coal, an ember kept alive                          | _brald_, a fire banked to keep overnight, in the fourth grade           |
| `fölm`       | sickness                                             | a root of its own                                                       |
| `hrend`      | a boundary marker, a stone set at a claim's edge     | _hrand_, a thing set down that will not be moved, in the fourth grade   |
| `sveld`      | a seat                                               | a root of its own                                                       |
| `höfudsveld` | the high seat of a hall, where its jarl or king sits | `höfud-`, the head of a body of men, and `-sveld`, with a genitive `-s` |
| `tingsveld`  | a seat at the ting, held by a king or a jarl         | `ting-` and `-sveld`, with a genitive `-s`                              |

### The boat and the beacon

A boat's keel is named for the sound it makes running up onto shingle, and a beacon for the light it keeps: both words are stems in the fourth grade, and a skald who makes a kenning of either has the stem's sense waiting for him.

| word     | what it names | how it is built                                                  |
| -------- | ------------- | ---------------------------------------------------------------- |
| `thresk` | a keel        | _thrask_, a keel taking shingle, in the fourth grade             |
| `dresk`  | a beacon      | _drask_, a light kept burning on a headland, in the fourth grade |

### Whale and seal

A coast that misses its whales goes hungry before midwinter, so the hunt has its own words and a child on the strand knows them all. The oil is named for what it does on water and in a lamp, and the ice-edge for the shudder the ice gives before it breaks, which is what a sealer on the edge watches for.

| word        | what it names                                      | how it is built                                                                      |
| ----------- | -------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `hvelm`     | a whale                                            | a root of its own                                                                    |
| `dvön`      | a seal                                             | a root of its own                                                                    |
| `hvelmgeir` | a harpoon                                          | `hvelm-`, a whale, and `-geir`, a spear                                              |
| `flöm`      | blubber                                            | a root of its own                                                                    |
| `glerv`     | oil rendered from blubber and burned in a lamp     | _glarv_, light lying flat on water, in the fourth grade                              |
| `skelfr`    | the ice-edge, where sea ice meets open water       | _skalf_, the shudder in ice before it gives, in the fourth grade and the strong `-r` |
| `dvönvangr` | a rookery, the shore where seals haul out to breed | `dvön-`, a seal, and `-vangr`, a field                                               |

### The body and the grave

The tongue speaks of the dead plainly and of death slant. A grave is a grave, and a pyre is a fire's grave and a ship-burial a ship's, while death itself is the cold that comes off open water. A howe is _haug_, the barrow raised over a grave, and it stands in the element lexicon.

| word        | what it names | how it is built                                                      |
| ----------- | ------------- | -------------------------------------------------------------------- |
| `knerv`     | a body        | _knarv_, a joint made to take strain, in the fourth grade            |
| `merv`      | a bone        | _marv_, the grain in worked antler, in the fourth grade              |
| `vrell`     | blood         | a root of its own                                                    |
| `hnoll`     | a skull       | a root of its own                                                    |
| `dvern`     | a birth       | _dvarn_, a door that is never barred, in the fourth grade            |
| `svelth`    | death         | _svalth_, the cold that comes off open water, in the fourth grade    |
| `dulm`      | a grave       | a root of its own                                                    |
| `eldsdulm`  | a pyre        | `eld-`, fire, and `-dulm`, with a genitive `-s`: the fire's grave    |
| `skipsdulm` | a ship-burial | `skip-`, a ship, and `-dulm`, with a genitive `-s`: the ship's grave |

### The making of the world

The giant is _thurs_, the void beyond creation is _ginn_ and an age is _ald_, and all three stand in the element lexicon. The words below are the ones a völva needs when she speaks of how an age ends and what is left for the next.

| word        | what it names                                         | how it is built                                    |
| ----------- | ----------------------------------------------------- | -------------------------------------------------- |
| `heimsaldr` | a world-age, the world from its kindling to its end   | `heims-`, the world's, and `-aldr`, an age         |
| `fösk`      | ash, what a fire leaves                               | a root of its own                                  |
| `tvelg`     | a remnant, what is left when the greater part is gone | _tvalg_, the lesser of a pair, in the fourth grade |

## Related Languages

Nordmal stands closest to [[skill-varokhlng|Varokhi]], sharing many archaic Pelwar features and phonetic similarities. The two languages are technically mutually intelligible to speakers with training, though the difference in written forms (Nordmal uses runes, Varokhi has no written form) and regional divergence create barriers.

The relationship to southern Pelwar languages ([[skill-vylarilng|Vylari]], [[skill-provnzlng|Provenzal]], [[skill-tarvenlng|Tarvéni]]) is more distant. Nordmal speakers find southern languages overly soft and imprecise; southern speakers find Nordmal difficult to understand due to its phonetic severity and archaic grammar.

[[skill-elvndrlng|Élavendri]] has had some influence on Nordmal in frontier regions, particularly in western Aelwyth, but the languages remain largely separate. No clear cognates or structural similarities suggest the two languages were ever mutually intelligible.

## Naming Traditions

Nordmal builds a name by one of two operations, and every class of name uses one or the other. A **bound** name is a name-stem in a name-ending, and the ending carries no sense of its own: given names and the clan names the ting reads out are built this way. A **compound** name is two or more elements each of which means something on its own: gods, offices, orders, places, earned clan names and a seeress's name are built this way. Nothing formed any third way is a Nordmal name.

A Nordman carries a **given name** and a **clan name**, and the tongue builds the two by different operations, so a herald calling a muster never has to ask which he is holding:

1. A **given name** is a name-stem in one of the eight bestowal endings. It runs two syllables or three and closes on a vowel or on `l`, `n`, `r` or `v`.
2. A **clan name** is a name-stem in one of the four ting-endings, closing on the formal `kh`, or else an earned name built as a compound. The `kh` decides the question one way: a name carrying one is a clan name, and no given name carries one anywhere.

A name-giver therefore chooses two things and not four: the stem, which says what the name is about, and the ending, which says what the name is for. The sense a name carries is the stem's alone, glossed when a stranger asks and never rendered into another tongue, because a stem translated is a stem lost.

_The name lists at the foot of this note are samples, not a roster._ Each list gives one name for every stem in every grade, so you can hear how each stem sounds under an ending, and a hall chooses from the rule rather than from the page. Any stem in any grade under any ending of the right class is as lawful as a listed name: _knirv-_ in the middle grade under `-ynda` gives **Knirvynda**, which no list prints and any hall may give its daughter.

**A clan has more than one member.** A name in these lists is a clan and not a person: brothers, cousins, a widow and her household and three generations of a hall all carry the same one. Reaching for an unused clan name where an existing clan would serve is how a hall of forty comes to be written as forty halls of one.

Patronymic forms are common, particularly in genealogical contexts. The suffix -sen (son) or -dóttir (daughter) may be appended to a parent's name when formal identification is required. A line that can recite its name-giver takes the `-idrokh` ending to say so.

### Name-stems and name-endings

A Nordmal name is built from two bound pieces, and neither is a word of the language standing on its own. A **name-stem** (_nafnstofn_) carries the sense. A **name-ending** (_nafnending_) carries none at all, and says only what kind of name this is. Because the ending is empty, a Nordmal name states one thing and not two, and there is no second piece in it for a hearer to translate. This is the line between a name and a **kenning**: a skald who wants to call a man a cliff-warden says so in the words for cliff and for warden, and both words keep their own sense.

**The stems ablaut.** Every name-stem is spoken in one of three grades—the **hard** grade in _a_, the **middle** in _i_, and the **deep** in _u_—and in a name the grade is the generation mark: a child takes the grade after the name-giver's, hard to middle, middle to deep, deep to hard again. A hall's genealogy therefore rings through its vowels, which is why a skald recites eleven generations of a line without faltering, and why a wrong grade is heard at once.

| hard     | middle   | deep     | what it names                                 |
| -------- | -------- | -------- | --------------------------------------------- |
| _hlarth_ | _hlirth_ | _hlurth_ | the slope a hall is set on                    |
| _hrand_  | _hrind_  | _hrund_  | a thing set down that will not be moved       |
| _hvarn_  | _hvirn_  | _hvurn_  | water that will not freeze                    |
| _hvalg_  | _hvilg_  | _hvulg_  | a bay that shelters in any wind               |
| _hnarv_  | _hnirv_  | _hnurv_  | the notch cut to count off a year             |
| _hlask_  | _hlisk_  | _hlusk_  | the hush that follows heavy snow              |
| _knalth_ | _knilth_ | _knulth_ | an oath that binds without being written      |
| _knarv_  | _knirv_  | _knurv_  | a joint made to take strain                   |
| _gnaldr_ | _gnildr_ | _gnuldr_ | floes grinding on one another                 |
| _gnarth_ | _gnirth_ | _gnurth_ | the set of a jaw that will not open           |
| _vrath_  | _vrith_  | _vruth_  | the temper iron takes from the fire           |
| _vrald_  | _vrild_  | _vruld_  | the weight a rope will take                   |
| _thrask_ | _thrisk_ | _thrusk_ | a keel taking shingle                         |
| _thrald_ | _thrild_ | _thruld_ | the pull of a current under calm water        |
| _thalm_  | _thilm_  | _thulm_  | the still air inside a drift                  |
| _drask_  | _drisk_  | _drusk_  | a light kept burning on a headland            |
| _skrald_ | _skrild_ | _skruld_ | a cry the wind carries further than it should |
| _skalf_  | _skilf_  | _skulf_  | the shudder in ice before it gives            |
| _snarv_  | _snirv_  | _snurv_  | the hour before weather arrives               |
| _snalth_ | _snilth_ | _snulth_ | the line frost leaves along a stone           |
| _svalth_ | _svilth_ | _svulth_ | the cold that comes off open water            |
| _tvarn_  | _tvirn_  | _tvurn_  | two things that must be counted as one        |
| _tvalg_  | _tvilg_  | _tvulg_  | the lesser of a pair                          |
| _dvalg_  | _dvilg_  | _dvulg_  | sleep taken standing, on watch                |
| _dvarn_  | _dvirn_  | _dvurn_  | a door that is never barred                   |
| _glarv_  | _glirv_  | _glurv_  | light lying flat on water                     |
| _flarn_  | _flirn_  | _flurn_  | a flake of stone split off by frost           |
| _krald_  | _krild_  | _kruld_  | a load a beast carries without complaint      |
| _nalth_  | _nilth_  | _nulth_  | the last hour of a watch                      |
| _marv_   | _mirv_   | _murv_   | the grain in worked antler                    |
| _ralth_  | _rilth_  | _rulth_  | how far a voice carries over water            |
| _alth_   | _ilth_   | _ulth_   | the limit a claim reaches                     |
| _brald_  | _brild_  | _bruld_  | a fire banked to keep overnight               |
| _anth_   | _inth_   | _unth_   | the far side of a pass                        |

Where a stem and an ending meet on the same consonant, one of them is written: _alth-_ and `-thann` give **Althann**, _vrath-_ and `-thýra` give **Vrathýra**. Stress is initial in a name as in every other word, so any of these can be said correctly on sight—AL-thann, VRA-thý-ra, HLARTH-a-rukh.

_The fourth grade is for words._ The three grades above belong to names, and no name takes any other. The tongue's ordinary words keep a fourth grade in _e_ that no name carries, and a word built on it turns the stem's sense into a thing you can point at: _brald_, a fire banked to keep overnight, gives _breld_, a coal, and _drask_, a light kept burning on a headland, gives _dresk_, the beacon itself. A boy named **Draskmýl** hears his name in every beacon on the coast, and nobody mistakes him for one. The words the fourth grade makes stand in § _Vocabulary_.

### The bestowal endings

A bestowal ending is what a name-giver puts on a stem at a naming. The stems are not gendered and a brother and sister are frequently named from one, so the ending is the whole of the difference.

| ending   | names   |
| -------- | ------- |
| `-vir`   | a man   |
| `-mýl`   | a man   |
| `-thann` | a man   |
| `-orv`   | a man   |
| `-rinna` | a woman |
| `-selda` | a woman |
| `-thýra` | a woman |
| `-ynda`  | a woman |

### The ting-endings

A clan's name takes one of the four ting-endings, and each says the footing on which the clan holds the name, as the ting would read it out. Every ting-ending carries the formal `kh`, because a clan name is a thing read out at the assembly and not spoken across a kitchen.

| ending    | the footing                                                                |
| --------- | -------------------------------------------------------------------------- |
| `-arukh`  | a charge kept: a pass, a strand, a beacon, a march held against something  |
| `-endikh` | a holding: land, hall, harbor, fishery, mine                               |
| `-umakh`  | a craft: work the clan answers for and others come to it for               |
| `-idrokh` | a forebear: a line reckoned from a name-giver the clan can still recite to |

### The element lexicon

An **element** is a piece that means something and does not stand alone as a word. Every compound name is elements and nothing else, so the lexicon is the whole of what a compound may be made of. The thirty-four name-stems are elements too, and the ones that carry the most weight: a place or a person named from a stem is named from the stock the halls themselves are named from.

Four things happen at a seam. A stem and an ending that meet on one consonant write it once, which is the bound seam's rule and only the bound seam's: a compound seam writes both, so _storm-_ and `-maelendir` give Stormmaelendir. An element may take a genitive `-s` or `-a` before the seam, which is why the world-ash is Heimsask and the skalds' circle Skaldahringr; that seam genitive belongs to an element, and § _Place names_ gives the two genitives a whole name takes. An element that would leave a name ending in `f` takes the strong `-r`, so the wolf closes a compound as `-úlfr`. And any element may stand alone as a name by taking that same `-r` in place of a second element, which is how Bjartr and Minnir are built.

**A kept word is not an element.** The words in _The words the tongue keeps_
are given whole, and no compound is built from one. An element that shares a
kept word's sense earns its own row in the tables below, and `stórald-` is the
row that carries the saga.

**An element that stands on both sides of a seam is published in both tables**,
because a row is read in one direction only. The hammer opens Hamarsmál and
closes Thrúnhamarr, so `hamar-` and `-hamarr` are two rows for one piece, and
the closing row carries whatever the strong `-r` or the doubled letter adds.

**Elements that open a compound.**

| element                   | what it names                             |
| ------------------------- | ----------------------------------------- |
| `ald-`, `aldr-`, `aldar-` | an age, and the age's                     |
| `ás-`, `as-`              | a god of the defending kin                |
| `bandalag-`               | a league of sworn companies               |
| `berg-`, `bjarg-`         | a crag                                    |
| `bjarn-`                  | a bear                                    |
| `bjart-`                  | bright                                    |
| `blót-`                   | a sacrifice made at a hof                 |
| `breld-`                  | a coal, an ember kept alive               |
| `bú-`                     | an estate worked for a lord               |
| `dag-`                    | a day                                     |
| `dreka-`                  | a dragon                                  |
| `dresk-`                  | a beacon                                  |
| `drótt-`                  | a war-band sworn to one man               |
| `dulm-`                   | a grave                                   |
| `dvern-`                  | a birth                                   |
| `dvön-`                   | a seal                                    |
| `eid-`                    | an oath sworn at a spear-point            |
| `eld-`                    | fire                                      |
| `flöm-`                   | blubber                                   |
| `fölm-`                   | sickness                                  |
| `fösk-`                   | ash, what a fire leaves                   |
| `frjáls-`                 | free, and sworn to no lord                |
| `frost-`                  | frost                                     |
| `fród-`                   | the peace that wisdom buys                |
| `ginn-`                   | the yawning void beyond creation          |
| `glerv-`                  | oil rendered for a lamp                   |
| `gnúm-`                   | a clay pot                                |
| `grím-`                   | a mask                                    |
| `grön-`                   | green, and growing                        |
| `grá-`                    | gray                                      |
| `gull-`                   | gold                                      |
| `gyldr-`                  | a praise-poem                             |
| `haf-`                    | the open sea                              |
| `hallar-`                 | a great hall's                            |
| `hamar-`                  | a hammer                                  |
| `haug-`                   | a howe, a barrow                          |
| `heims-`                  | the world's                               |
| `hers-`                   | a host under arms                         |
| `hird-`                   | a king's household troop                  |
| `hnerv-`                  | a refrain                                 |
| `hnoll-`                  | a skull                                   |
| `hnúr-`                   | a lament                                  |
| `hofs-`                   | belonging to a hof                        |
| `höfud-`                  | the head of a body of men                 |
| `hönd-`                   | a hand                                    |
| `hrafn-`                  | a raven                                   |
| `hrend-`                  | a boundary marker                         |
| `hrím-`                   | rime                                      |
| `hring-`                  | a ring given at a hall                    |
| `hug-`                    | thought                                   |
| `hulm-`                   | a kenning                                 |
| `hvelm-`                  | a whale                                   |
| `ís-`                     | ice                                       |
| `járn-`                   | iron                                      |
| `jól-`                    | the midwinter feast                       |
| `knelth-`                 | a charm                                   |
| `knerv-`                  | a body                                    |
| `konungs-`                | the king's                                |
| `land-`                   | the ground a realm holds                  |
| `lid-`                    | a company in the field                    |
| `lög-`                    | the law as it is recited                  |
| `mál-`                    | speech, and a suit at law                 |
| `mann-`                   | a man, and mankind                        |
| `merki-`                  | a standard carried in battle              |
| `merv-`                   | a bone                                    |
| `minni-`                  | memory held rather than written           |
| `mót-`                    | a shape, a mould                          |
| `mun-`                    | memory recited                            |
| `ná-`                     | a corpse                                  |
| `njör-`                   | the open sea's deep                       |
| `nótt-`                   | night                                     |
| `ód-`                     | fury, and the seer's fit                  |
| `ódal-`, `odal-`          | land held by inheritance and not by grant |
| `orm-`                    | a wyrm                                    |
| `relth-`                  | a telling                                 |
| `rún-`                    | a rune                                    |
| `sár-`                    | a wound                                   |
| `sigr-`                   | a victory won                             |
| `skald-`, `skalda-`       | a skald, and the skalds'                  |
| `skelf-`                  | the ice-edge                              |
| `skip-`                   | a ship                                    |
| `skjálf-`                 | a shaking                                 |
| `skreld-`                 | a flyting                                 |
| `ský-`                    | cloud                                     |
| `smid-`                   | a craftsman                               |
| `snerv-`                  | a prophecy                                |
| `sól-`                    | the sun                                   |
| `stál-`                   | steel                                     |
| `stein-`                  | stone                                     |
| `stórald-`                | a saga                                    |
| `storm-`                  | a storm                                   |
| `svart-`                  | black                                     |
| `sveld-`                  | a seat                                    |
| `svelth-`                 | death                                     |
| `tal-`                    | speech made on another's behalf           |
| `thresk-`                 | a keel                                    |
| `thrún-`, `thrumu-`       | thunder                                   |
| `thurs-`                  | a giant                                   |
| `ting-`                   | the lawful assembly                       |
| `tvelg-`                  | a remnant                                 |
| `úlf-`                    | a wolf                                    |
| `val-`                    | the slain                                 |
| `vatn-`                   | water                                     |
| `vél-`                    | a wile                                    |
| `vetr-`                   | winter                                    |
| `víg-`                    | a battle joined                           |
| `vind-`                   | wind                                      |
| `vörn-`                   | a defense held                            |
| `vrell-`                  | blood                                     |
| `vyld-`                   | grain                                     |

**Elements that close a compound.**

| element                     | what it names                            |
| --------------------------- | ---------------------------------------- |
| `-aett`                     | a kin reckoned together                  |
| `-aldr`                     | an age                                   |
| `-ask`                      | an ash-tree                              |
| `-auga`                     | an eye                                   |
| `-bandalag`                 | a league of sworn companies              |
| `-beri`                     | one who bears a thing                    |
| `-blót`                     | a sacrifice                              |
| `-borinn`                   | one born of a thing                      |
| `-börn`                     | children                                 |
| `-brandr`                   | a brand, either a firebrand or a blade   |
| `-brunnr`                   | a well                                   |
| `-dómr`                     | a judgment given                         |
| `-drengir`                  | warriors                                 |
| `-dulm`                     | a grave                                  |
| `-dyrma`                    | a lay                                    |
| `-efnir`                    | one in the making                        |
| `-eldr`                     | fire                                     |
| `-fadir`, `-módir`          | the father or mother of a hof            |
| `-gar`, `-geir`             | a spear                                  |
| `-gengir`                   | ones that go                             |
| `-godi`                     | a priest-chieftain                       |
| `-grímr`                    | a mask                                   |
| `-grind`                    | a gate                                   |
| `-guard`                    | an enclosed world                        |
| `-gyldra`                   | a praise-poem                            |
| `-hamarr`                   | a hammer                                 |
| `-heim`                     | a home                                   |
| `-hild`                     | a battle                                 |
| `-hnerv`                    | a refrain                                |
| `-hnúra`                    | a lament                                 |
| `-höfdingi`                 | a chieftain                              |
| `-höll`                     | a great hall                             |
| `-hönd`                     | a hand                                   |
| `-hringr`, `-ringr`         | a ring, and a circle of sworn men        |
| `-hulma`                    | a kenning                                |
| `-káppar`                   | champions                                |
| `-lid`                      | a company in the field                   |
| `-lok`                      | a close, an end                          |
| `-madr`                     | a man holding a station                  |
| `-maelir`, `-maelendir`     | one that speaks, and ones that speak     |
| `-mál`                      | speech, and the voice a body speaks with |
| `-minni`                    | a cup drunk to a memory                  |
| `-nár`                      | a corpse, and the dead that linger       |
| `-nótt`                     | night                                    |
| `-ormr`                     | a wyrm                                   |
| `-reid`                     | a ride                                   |
| `-rót`                      | a root                                   |
| `-rún`                      | a rune                                   |
| `-sal`                      | a hall raised for a god                  |
| `-skald`                    | a poet whose verse is a realm's memory   |
| `-skari`                    | a troop                                  |
| `-skel`                     | a shell, and a plate of iron             |
| `-skírdr`                   | one made clean                           |
| `-skjöldr`                  | a shield                                 |
| `-skreld`                   | a flyting                                |
| `-snerv`                    | a prophecy                               |
| `-stjóri`                   | the master of a thing                    |
| `-sveld`                    | a seat                                   |
| `-systur`                   | sisters                                  |
| `-thur`                     | a giant                                  |
| `-ting`                     | the lawful assembly                      |
| `-úlfr`                     | a wolf                                   |
| `-vald`                     | one who wields                           |
| `-vangr`                    | a field                                  |
| `-var`, `-vördr`, `-verdir` | a ward, a keeper                         |
| `-vargr`                    | an outlaw, a wolf in the law's eye       |
| `-ven`                      | one who dwells in a place                |
| `-vin`, `-vinir`            | a friend                                 |
| `-völl`                     | the field a battle is fought on          |

### Place names

A place name is an element and a generic, and the generic says what kind of place it is. The generic is what makes it a place rather than a person, and it is never the piece that changes. A generic is a closing element like any other, so the same piece that names a place can close a god's name or an order's. The third column gives the generic in the genitive, which is the form a place name takes when it governs another word.

| generic   | what it names                      | in the genitive |
| --------- | ---------------------------------- | --------------- |
| `-borg`   | a stronghold on a height           | `-borgar`       |
| `-brekka` | a slope                            | `-brekkar`      |
| `-dal`    | a dale                             | `-dalar`        |
| `-ey`     | an island                          | `-eyjar`        |
| `-fell`   | a bare hill                        | `-fellar`       |
| `-fjall`  | a mountain                         | `-fjallar`      |
| `-fjord`  | a fjord                            | `-fjordar`      |
| `-gard`   | an enclosed yard and its buildings | `-gardar`       |
| `-havn`   | a haven                            | `-havnar`       |
| `-heim`   | a home, and a settled place        | `-heimar`       |
| `-holm`   | an islet                           | `-holmar`       |
| `-höll`   | a great hall                       | `-hallar`       |
| `-mark`   | a march, ground held at an edge    | `-markar`       |
| `-nes`    | a headland                         | `-nesar`        |
| `-sal`    | a hall                             | `-salar`        |
| `-stead`  | a farmstead                        | `-stadar`       |
| `-thul`   | a seat where the law is recited    | `-thular`       |
| `-vangr`  | an open field                      | `-vangar`       |
| `-vatn`   | a lake                             | `-vatnar`       |
| `-vík`    | an inlet                           | `-víkar`        |

**What stands first is what the place is held from.** Ground held from nothing but itself takes a name-stem, so one stock names a hall's people and the ground they hold. Ground held from a god takes the god's name, which is the oldest layer of the family's toponymy and the pattern behind Odinsve, Torsberg and Ullevi; ground held from the man who broke it takes his, as Grimsstadir carries the name of its Grimr; ground held from the assembly takes the assembly's, as Thingvellir and Logberg carry theirs. A god's name enters clipped to its first element, because a compound name gives a compound place name its opening and no more, so Thrúnvald's seat is Thrúnborg and his mountain Thrumufjall. Ground the god dwells on rather than merely holds takes the name whole instead, with a genitive `-s` or `-a` at the seam, so Ódvar's hall is Ódvarshöll and Sólrún's is Sólrúnshöll. A founder's given name enters whole, with a genitive at the seam in the same way. Ground named for what it bears takes the element for that thing, so **Askholm** is the islet of the ash-tree and **Ísdal** the dale of ice, and a beach where the seals haul out is named from _dvön-_ before anyone thinks to name it for a man. The ting's island is held from the judgment given on it, which is why the assembly of the **King of All Clans** convenes at **Dómsey**.

| held from                     | what stands first                                       |
| ----------------------------- | ------------------------------------------------------- |
| the ground alone              | a name-stem, in any of its three grades                 |
| a god                         | that god's name, clipped to its first element           |
| a god dwelling there          | that god's whole name, with a genitive `-s` or `-a`     |
| a founder                     | that founder's given name, with a genitive `-s` or `-a` |
| the ting and its law          | `ting-`, `lög-`, `mál-`, `hring-`, `dóms-`              |
| what the ground bears         | `ask-`, `ís-`, `stein-`, `vyld-`, `hvelm-`, `dvön-`     |
| a sanctuary cut into the rock | `hola-`, `hofs-`, `hörgs-`                              |
| the gods' world               | `asgar-`                                                |

**Only a god's name stands there whole.** The row admits the name of one of the north's own gods, built the way § _Theonyms_ builds one, and admits nothing else. An element in the genitive is not a god's name and neither is a name-stem in the genitive, so neither opens a place name by this row—the row above it and the founder's row say what those do. A word carrying a genitive `-s` before a generic is a place name held from a god only where that word is a god's name entire.

**The clause reaches place names and nothing else.** In every other compound—an office, an order, a god's own name, an earned clan name—the first element is an element from the lexicon, and a god's or a founder's name does not stand there. A place is held from a god and the name records the holding; a station is held from a king, so an office built on a god's name would say something the rank ladder does not mean, and an earned name built on one would have a hall claiming descent from a god.

**A place name in the genitive inflects on its generic.** The generic is the noun the name is built on and the first element only describes it, so the first element never changes and the ending falls on the generic alone. The ending is `-ar`. A generic closing on a vowel drops it before the ending and a generic carrying the strong `-r` drops that, which gives `-brekka` the genitive `brekkar` and `-vangr` the genitive `vangar`. Three generics change more than their ending: `-ey` takes a linking `j` for `eyjar`, and `-höll` and `-stead` open their vowel to `a` for `hallar` and `stadar`. Every generic's own genitive stands in the third column of the table above, so a reader inflects Nalthmark to Nalthmarkar and Dvalgheim to Dvalgheimar by reading the row rather than working the change out.

**The genitive of a place name is a word and not a piece of one.** It governs what follows it across a space and joins nothing at a seam, so the Voice of Lögstead is _Lögstadar Mál_ in two words and the man who holds the seat is Hróaldr Lögstadar. Three genitives are in play in this section and they do different work: an element's `-s` or `-a` joins the seam inside one word, a god's whole name takes the same `-s` or `-a` and joins the seam in the same way, and a place name's `-ar` stands free. The last is the only one that inflects a whole name without compounding it, and it is the only one that changes a stem.

### Ranks, offices and orders

An office is an element and one of the office suffixes, and the suffix says what kind of authority it is. An order takes the same shape, with a plural suffix where the order is its members rather than its head.

| suffix              | what it makes                 |
| ------------------- | ----------------------------- |
| `-aett`             | a kin taken as a body         |
| `-beri`             | the bearer of a thing         |
| `-fadir`, `-módir`  | the head of a hof             |
| `-godi`             | a priest-chieftain            |
| `-madr`             | a man of a station            |
| `-mál`              | the voice a body speaks with  |
| `-stjóri`           | the master of a thing         |
| `-vald`             | one who wields an authority   |
| `-vördr`, `-verdir` | the ward or keeper of a thing |

**An office suffix answers for something—a hof, a kin, a station, an authority, a thing kept or wielded—rather than naming what a member has become.** A closing element that marks a stage climbed in a ladder of trust, a trial survived, or a deed done is not an office suffix, however senior the standing it carries: `-höfdingi` names a chieftain's seniority among peers and stays in the general lexicon, while `-stjóri` names the one office of a muster's or a household's master and stands in the table above. `-mál` makes the chair an order elects to speak for it, so the chair of [[affiliation-thursborn|the Giant's Children]] is the **Sármál**, that of [[affiliation-gronverdir|the Green Wardens]] the **Grönmál** and that of [[affiliation-ordrstrmspkrs|the Storm-Speakers]] the **Hamarsmál**, and [[affiliation-malldbndlg|the Compact]] names its Speaker the **Bandalagstalsmadr**, a man of the league's speech. The nine suffixes are closing elements like any other, so a compound that takes one is judged the same way every compound is; what sets an office apart from a rank is never the element alone but what it is asked to answer for.

**The words the tongue keeps.** These are words and not names, given whole rather than formed, and a reader meets them as the north's own vocabulary.

| kept word                          | what it is                                     |
| ---------------------------------- | ---------------------------------------------- |
| jarl                               | the holder of a province under a king          |
| godi, gydja                        | a priest-chieftain, and a priestess-chieftain  |
| hird, hirdman                      | a king's household troop, and a man of it      |
| ting, tingfridr                    | the lawful assembly, and the peace it holds    |
| skald                              | a poet whose verse is a realm's memory         |
| stórald                            | a saga                                         |
| thrall                             | a man owned outright                           |
| bóndi                              | a farmer holding his own land                  |
| níding                             | a man outlawed at the ting                     |
| drengr                             | a warrior of standing                          |
| blót                               | a sacrifice                                    |
| hof, hörgr                         | a roofed temple, and an open stone altar       |
| völva                              | a seeress                                      |
| seidr, ergi                        | the trance-craft, and the shame attached to it |
| rúnagaldr, rúnameistari            | rune-craft, and a master of it                 |
| odal                               | land held by inheritance and not by grant      |
| Jól, Sumarmál, Midsumar, Vetrnaetr | the four turns of the year                     |

### Bynames

A byname is earned and is **rendered in the reader's tongue**, exactly as a saga translation renders Fairhair and Bloodaxe: the north says it in Nordmal and the page says it in the reader's own words. Stormborn, Oakheart, Fire-Tongue and the Crow are therefore not Nordmal words, are held to none of the rules above, and the Nordmal behind one is not written down. Position tells a byname from a clan name: a clan name stands second in a pair of Nordmal words, a byname stands second in the reader's own.

A handful of titles and folk words reach the page the same way, and the list is closed: King, Queen, Lawspeaker, Freedman, Harbour-reeve, huscarl, wergild, Asguardian, Helspawn, the Ring-Sisters, the Sworn Hand, the Green Wardens, the Giant's Children, the Bonebreakers, the Jól-Ride, the Shattered Peaks.

### Earned clan names

The Nordmen tradition of _aettarnafn_ stands beside the bestowal endings and is central to the culture: a man performs a great deed, takes a second name for it, and where the deed outlives him the name becomes his line's. An earned name is **granted rather than bestowed**, so it takes no ending and is built as a compound of elements—Járnskel, Sólvargr, Drekanótt, Steinblót, Stormrót. It closes the way a compound closes and not on the ting's `kh`, so position is what tells it from a given name: the second of two Nordmal names is the clan.

### A seeress's name

A völva who takes the high seat of a hall is known by a seeress's name rather than the one she was given at her naming. The name is granted, as an earned clan name is, so it takes no bestowal ending and is built as a compound of elements, closing the way a compound closes. **Aldrhildr**, who taught at [[place-thrunborg|Thrúnborg]] and whom the [[lore-vthgdhstry|Vithgard histories]] name at the burning of Askholm, carries `aldr-`, an age in its strong form, and `-hild`, a battle, closing in the strong `-r`: the woman who stands against the age.

### Theonyms

A god's name is a compound, and its closing element says what the god is or does: a ward, a wielder, a mask, a brand, a battle, a giant, a friend, a spear. It takes no bestowal ending, because a god is not given a name at a naming, and it never carries the ting's `kh`, because a god is not a clan. A god named from a single element takes the strong `-r` in place of a second element, which is how Bjartr is built.

### The names that stand

Five names are older than the stem system and are not formed by any rule in it: **Nordheim**, **Malagna**, **Norgaad**, **Targud** and **Vithgard**, the five realms, with **Nordlands** for the whole. Asguard, the gods' world, and Mannguard, the north's own name for the world underfoot, are compounds under the rule above rather than names of that older layer. Nothing else in Nordmal stands outside the formation rules.

## Male Given Names

Althmýl, Braldvir, Brildmýl, Bruldthann, Draskmýl, Driskthann, Druskorv, Dvalgmýl, Dvarnvir, Dvilgthann, Dvirnmýl, Dvulgorv, Dvurnthann, Anthorv, Flarnthann, Flirnorv, Flurnvir, Glarvorv, Glirvir, Glurvmýl, Gnaldrvir, Gnarthorv, Gnildrmýl, Gnirthvir, Gnuldrthann, Gnurthmýl, Hlarthvir, Hlaskorv, Hlirthmýl, Hliskvir, Hlurthann, Hluskmýl, Hnarvir, Hnirvmýl, Hnurvthann, Hrandorv, Hrindvir, Hrundmýl, Hvalgmýl, Hvarnthann, Hvilgthann, Hvirnorv, Hvulgorv, Hvurnvir, Ilthann, Inthvir, Knalthann, Knarvmýl, Knilthorv, Knirvthann, Knulthvir, Knurvorv, Kraldmýl, Krildthann, Kruldorv, Marvorv, Mirvir, Murvmýl, Nalthvir, Nilthmýl, Nulthann, Ralthann, Rilthorv, Rulthvir, Skalforv, Skilfvir, Skraldvir, Skrildmýl, Skruldthann, Skulfmýl, Snalthmýl, Snarvthann, Snilthann, Snirvorv, Snulthorv, Snurvir, Svalthvir, Svilthmýl, Svulthann, Thalmthann, Thilmorv, Thraldorv, Thraskvir, Thrildvir, Thriskmýl, Thruldmýl, Thruskthann, Thulmvir, Tvalgthann, Tvarnorv, Tvilgorv, Tvirnvir, Tvulgvir, Tvurnmýl, Ulthorv, Unthmýl, Vraldmýl, Vrathann, Vrildthann, Vrithorv, Vruldorv, Vruthvir

## Female Given Names

Althselda, Braldrinna, Brildselda, Bruldthýra, Draskselda, Driskthýra, Druskynda, Dvalgselda, Dvarnrinna, Dvilgthýra, Dvirnselda, Dvulgynda, Dvurnthýra, Anthynda, Flarnthýra, Flirnynda, Flurnrinna, Glarvynda, Glirvrinna, Glurvselda, Gnaldrinna, Gnarthynda, Gnildrselda, Gnirthrinna, Gnuldrthýra, Gnurthselda, Hlarthrinna, Hlaskynda, Hlirthselda, Hliskrinna, Hlurthýra, Hluskselda, Hnarvrinna, Hnirvselda, Hnurvthýra, Hrandynda, Hrindrinna, Hrundselda, Hvalgselda, Hvarnthýra, Hvilgthýra, Hvirnynda, Hvulgynda, Hvurnrinna, Ilthýra, Inthrinna, Knalthýra, Knarvselda, Knilthynda, Knirvthýra, Knulthrinna, Knurvynda, Kraldselda, Krildthýra, Kruldynda, Marvynda, Mirvrinna, Murvselda, Nalthrinna, Nilthselda, Nulthýra, Ralthýra, Rilthynda, Rulthrinna, Skalfynda, Skilfrinna, Skraldrinna, Skrildselda, Skruldthýra, Skulfselda, Snalthselda, Snarvthýra, Snilthýra, Snirvynda, Snulthynda, Snurvrinna, Svalthrinna, Svilthselda, Svulthýra, Thalmthýra, Thilmynda, Thraldynda, Thraskrinna, Thrildrinna, Thriskselda, Thruldselda, Thruskthýra, Thulmrinna, Tvalgthýra, Tvarnynda, Tvilgynda, Tvirnrinna, Tvulgrinna, Tvurnselda, Ulthynda, Unthselda, Vraldselda, Vrathýra, Vrildthýra, Vrithynda, Vruldynda, Vruthrinna

## Clan Names

Althendikh, Braldarukh, Brildendikh, Bruldumakh, Draskendikh, Driskumakh, Druskidrokh, Dvalgendikh, Dvarnarukh, Dvilgumakh, Dvirnendikh, Dvulgidrokh, Dvurnumakh, Anthidrokh, Flarnumakh, Flirnidrokh, Flurnarukh, Glarvidrokh, Glirvarukh, Glurvendikh, Gnaldrarukh, Gnarthidrokh, Gnildrendikh, Gnirtharukh, Gnuldrumakh, Gnurthendikh, Hlartharukh, Hlaskidrokh, Hlirthendikh, Hliskarukh, Hlurthumakh, Hluskendikh, Hnarvarukh, Hnirvendikh, Hnurvumakh, Hrandidrokh, Hrindarukh, Hrundendikh, Hvalgendikh, Hvarnumakh, Hvilgumakh, Hvirnidrokh, Hvulgidrokh, Hvurnarukh, Ilthumakh, Intharukh, Knalthumakh, Knarvendikh, Knilthidrokh, Knirvumakh, Knultharukh, Knurvidrokh, Kraldendikh, Krildumakh, Kruldidrokh, Marvidrokh, Mirvarukh, Murvendikh, Naltharukh, Nilthendikh, Nulthumakh, Ralthumakh, Rilthidrokh, Rultharukh, Skalfidrokh, Skilfarukh, Skraldarukh, Skrildendikh, Skruldumakh, Skulfendikh, Snalthendikh, Snarvumakh, Snilthumakh, Snirvidrokh, Snulthidrokh, Snurvarukh, Svaltharukh, Svilthendikh, Svulthumakh, Thalmumakh, Thilmidrokh, Thraldidrokh, Thraskarukh, Thrildarukh, Thriskendikh, Thruldendikh, Thruskumakh, Thulmarukh, Tvalgumakh, Tvarnidrokh, Tvilgidrokh, Tvirnarukh, Tvulgarukh, Tvurnendikh, Ulthidrokh, Unthendikh, Vraldendikh, Vrathumakh, Vrildumakh, Vrithidrokh, Vruldidrokh, Vrutharukh

## Standing compounds

A standing compound names the claim its body grants. An empty level in a ladder grants no claim of its own. The oath compounds serve the fighting orders where their candidate, senior-peer and expelled standings exist; the Green Wardens admit candidates directly to the sworn standing.

| Compound       | Elements                          | Sense                            |
| -------------- | --------------------------------- | -------------------------------- |
| Eidefnir       | `eid-` + `-efnir`                 | One in the making for the oath   |
| Eidhöfdingi    | `eid-` + `-höfdingi`              | Senior among the sworn peers     |
| Eidvargr       | `eid-` + `-vargr`                 | Outlaw whose sworn vows are void |
| Skaldefnir     | `skald-` + `-efnir`               | A skald in the making            |
| Skaldavargr    | `skalda-` + `-vargr`              | The skalds' outlaw               |
| Bandalagsmadr  | `bandalag-` + genitive + `-madr`  | Man on the league's roll         |
| Bandalagsvargr | `bandalag-` + genitive + `-vargr` | The league's outlaw              |
| Höfudvald      | `höfud-` + `-vald`                | The head who wields authority    |
| Hrímmadr       | `hrím-` + `-madr`                 | Man of the rime's station        |
| Hrímvin        | `hrím-` + `-vin`                  | Friend of the rime               |
| Blótlok        | `blót-` + `-lok`                  | The sacrifice closed to him      |
| Návargr        | `ná-` + `-vargr`                  | The corpse-goddess's outlaw      |
| Bjartgengir    | `bjart-` + `-gengir`              | Those who go to the light        |
| Bjartlok       | `bjart-` + `-lok`                 | The light closed to him          |

`-vargr` names membership revoked from someone received; `-lok` names admission withheld. `-höfdingi` names seniority among peers who choose a chair; `-stjóri` names a master's office. **Lidstjóri**, `lid-` + `-stjóri`, means master of a company and is deliberately unused as a Compact rung: its Signed Captain is a standing before the league, while the league's administrative chair is its Speaker. The Giant's Children's senior standing is not Eidhöfdingi: their Fathers of the Halls choose the chair by virtue of office.
