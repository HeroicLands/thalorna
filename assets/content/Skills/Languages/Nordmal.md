---
tags: []
name:
  full: Nordmal Language
  aliases:
    - Nordmal
description: "The hardy, runic-scripted tongue of the five Nordmen kingdoms, bending its vowels with every fjord."
shortcode: nordmalng
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
    lang_family: Pelwar
---

Nordmal is a tongue of the Pelwar family. Fluency measures the sophistication of expression in Nordmal, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

Nordmal is the tongue of the frozen north, spoken across the five Nordmen kingdoms of [[affiliation-kngdmnrdhm|Kingdom of Nordheim]], [[affiliation-kingdomlgn|Kingdom of Malagna]], [[affiliation-kingdmnrgd|Kingdom of Norgaad]], [[affiliation-kingdmtrgd|Kingdom of Targud]], and [[affiliation-kngdmvthgrd|Kingdom of Vithgard]], as well as in portions of western [[place-aelwyth|Aelwyth]] where Nordman settlers have established communities among the Élavendri lands. A language of harsh beauty, Nordmal reflects the strength, resilience, and warrior culture of its speakers.

## Overview

Nordmal speakers are known for direct, forceful speech. The language employs strong stress patterns, guttural consonants, and harsh consonant clusters that give it a martial character. Yet beneath this severity lies a poetic tradition of considerable depth—the skalds (bards and poets) of the north compose intricate verse in Nordmal, using complex alliterative patterns and kennings (metaphorical names) that require years of training to master.

The language stands apart from southern Pelwar tongues, having developed in relative isolation across centuries of harsh climate and independent kingdom politics. Mutual intelligibility with Vylari exists but requires effort; Nordmal speakers and southern Pelwar speakers often resort to simplified trade speech or the more neutral Provenzal when diplomatic precision is required.

## Phonology

Nordmal employs a consonant-heavy inventory with particular emphasis on stops and fricatives, creating the characteristic "harsh" quality northern speakers are known for:

**Consonants:** The language employs a full complement of stop consonants (p, b, t, d, k, g) with strong aspiration in some contexts. Fricatives include f, v, s, z, the voiceless dental fricative _th_ (as in _thin_), and the uvular fricative kh/x (from Proto-Pelwar heritage). Nordmal has **no voiced dental fricative**: the sound older Pelwar carried in that slot merged into plain _d_ generations before the five kingdoms were founded, which is why _seidr_ is said SAI-dur and not SAY-thur. The runic row still keeps two separate staves for a distinction the tongue gave up, and rune-masters treat that as proof the staves are older than the speech. The combination of these fricatives with the heavy stress patterns creates the characteristic "crackling" sound of Nordmal speech. Initial consonant clusters are common and well-tolerated (str-, skr-, kn- are typical).

**Vowels:** Nordmal maintains six vowel positions (a, e, i, o, u, y) with systematic length distinctions marked by accent marks (á, é, í, ó, ú, ý for long vowels). Diphthongs are limited in inventory but phonemic. Nasal vowels do not occur.

**Stress and Rhythm:** Stress is predictable, falling primarily on the first syllable of words (STÓRáldur, HJÓRdis). This creates a hammer-blow rhythm characteristic of Nordmal speech. The language employs alliterative verse patterns where lines are bound by consonant repetition rather than end rhyme.

**Distinctive Features:** The uvular fricative (kh/x) marks the boundary between everyday and formal speech, appearing most frequently in archaic texts and high ritual contexts. The combination of initial consonant clusters with the strong initial stress gives Nordmal a distinctive "punch" in speech. Nordmal also preserves some archaic Pelwar features—like the instrumental case and a dual number—that other branches have lost.

### Name-stems and name-endings

A Nordmal name is built from two bound pieces, and neither is a word of the language standing on its own. A **name-stem** (_nafnstofn_) carries the sense. A **name-ending** (_nafnending_) carries none at all, and says only what kind of name this is. Because the ending is empty, a Nordmal name states one thing and not two, and there is no second piece in it for a hearer to translate. This is the line between a name and a **kenning**: a skald who wants to call a man a cliff-warden says so in the words for cliff and for warden, and every listener hears both. A name does no such thing.

**The stems ablaut.** Every name-stem is spoken in one of three grades — the **hard** grade in _a_, the **middle** in _i_, and the **deep** in _u_ — and in a name the grade is the generation mark: a child takes the grade after the name-giver's, hard to middle, middle to deep, deep to hard again. A hall's genealogy therefore rings through its vowels, which is why a skald recites eleven generations of a line without faltering, and why a wrong grade is heard at once.

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
| _enth_   | _inth_   | _unth_   | the far side of a pass                        |

**The endings.** A man's name takes `-vir`, `-mýl`, `-thann` or `-orv`. A woman's takes `-rinna`, `-selda`, `-thýra` or `-ynda`. The stems are not gendered and a brother and sister are frequently named from one, so the ending is the whole of the difference.

A clan's name takes one of the four **ting-endings**, and each says the footing on which the clan holds the name, as the ting would read it out:

- **`-arukh`** — **a charge kept**: a pass, a strand, a beacon, a march held against something.
- **`-endikh`** — **a holding**: land, hall, harbour, fishery, mine.
- **`-umakh`** — **a craft**: work the clan answers for and others come to it for.
- **`-idrokh`** — **a forebear**: a line reckoned from a name-giver the clan can still recite to.

Every ting-ending carries the formal _kh_, because a clan name is a thing read out at the ting and not spoken across a kitchen. **No given name carries a _kh_ anywhere in it**, and that is the whole of the rule that separates the two on hearing.

Where a stem and an ending meet on the same consonant, one of them is written: _alth-_ and `-thann` give **Althann**, _vrath-_ and `-thýra` give **Vrathýra**. Stress is initial in a name as in every other word, so any of these can be said correctly on sight — AL-thann, VRA-thý-ra, HLARTH-a-rukh.

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
that **a romanized name must be typeable**: a reader who meets Thórr in a saga and
goes looking for him has to find him by typing what they saw.

That rules out any letter a search cannot fold away. An accent is a decoration
sitting on an ordinary letter, so á, ó and ö reduce to a, o and o by themselves—they cost a reader nothing, and Nordmal keeps them to mark vowel length. Thorn,
eth and ash are not decorations but letters in their own right, and nothing
reduces them: a search for _thorr_ never reaches a name spelled with a thorn,
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

- **"Hûn ér stórald ok djarflig kvárna."** – "She is tall and bold woman." (Description, using instrumental/adjectival agreement.)
- **"Vír kómad skrídar-búd."** – "We come with peace-words" / "We come in peace." (Formal diplomatic formula.)
- **"Thrúnvald vákir, úlfskarn drékhar!"** – "The war-god wakes, wolves thirst!" (Battle cry, invoking both god and warrior heritage.)
- **"Thétvar ér djarfligásta dréngthal!"** – "This is the boldest deed!" (Praise formula.)
- **"Stórald okkhár lifír í gréthum ok sárkheim."** – "Our saga lives in stone and sorrow." (Poetic statement about endurance and memory.)

## Related Languages

Nordmal stands closest to [[skill-varokhlng|Varokhi]], sharing many archaic Pelwar features and phonetic similarities. The two languages are technically mutually intelligible to speakers with training, though the difference in written forms (Nordmal uses runes, Varokhi has no written form) and regional divergence create barriers.

The relationship to southern Pelwar languages ([[skill-vylarilng|Vylari]], [[skill-provnzlng|Provenzal]], [[skill-tarvenlng|Tarvéni]]) is more distant. Nordmal speakers find southern languages overly soft and imprecise; southern speakers find Nordmal difficult to understand due to its phonetic severity and archaic grammar.

[[skill-elvndrlng|Élavendri]] has had some influence on Nordmal in frontier regions, particularly in western Aelwyth, but the languages remain largely separate. No clear cognates or structural similarities suggest the two languages were ever mutually intelligible.

## Naming Traditions

A Nordman carries a **given name** and a **clan name**, and the tongue builds the two by different operations, so a herald calling a muster never has to ask which he is holding:

1. A **given name** is a name-stem in one of the eight bestowal endings. It runs two to four syllables and closes on a liquid, a nasal or a vowel.
2. A **clan name** is a name-stem in one of the four ting-endings. It closes on the formal _kh_, which no given name does.

A name-giver therefore chooses two things and not four: the stem, which says what the name is about, and the ending, which says what the name is for. The sense a name carries is the stem's alone, glossed when a stranger asks and never rendered into another tongue, because a stem translated is a stem lost.

The Nordmen tradition of _aettarnafn_ (earned cognomen) stands beside this and is central to the culture: a man performs a great deed and thereby earns a second name used of him thereafter, and over generations such a name becomes the clan name of his line. An earned name is **granted whole rather than built**, so it takes whatever shape the deed gives it. The oldest clans of the north are known by one — Frostulf, Járnskel, Sólvargr, Drekanótt, Sköllbrandr — and because these close the way a given name closes, only position tells them from one: the second name in a pair is the clan.

**What an earned name may be made of.** Its pieces are the north's own and not the hearer's. Nordmal stands close enough to Provenzal and to the trade speech that a handful of its plainest words arrive at a southern ear already translated, and a cognomen built out of those is read rather than heard — a description in northern spelling, which is the one thing a cognomen must never be. A skald reaching for an earned name reaches past them, which is why the cognomens of the north open into a sentence only for someone who holds the tongue whole, and why a jarl will refuse one that a factor from the south can repeat back to him with its meaning attached.

**A clan has more than one member.** A name in these lists is a clan and not a person: brothers, cousins, a widow and her household and three generations of a hall all carry the same one. Reaching for an unused clan name where an existing clan would serve is how a hall of forty comes to be written as forty halls of one.

Patronymic forms are common, particularly in genealogical contexts. The suffix -sen (son) or -dóttir (daughter) may be appended to a parent's name when formal identification is required. Fixed clan names deriving from an ancestor are also in use, particularly among the nobility, and a line that can recite its name-giver takes the `-idrokh` ending to say so.

## Male Given Names

Aevarr, Alarík, Aldrik, Althann, Althmýl, Armund, Arnthor, Athalwulf, Bálrik, Balthur, Banrik, Björgúlf, Braldmýl, Braldvir, Brithgár, Bruthgar, Byrnjolf, Dágulf, Dalmarr, Danmarr, Dellrik, Denrik, Díormaith, Dithmar, Dórimar, Draskmýl, Draskthann, Druthgar, Duthgar, Duthmar, Dvalgmýl, Dvalgthann, Dvarnmýl, Dvarnvir, Earmundr, Eatamir, Eatheling, Eathmar, Eathrik, Edmark, Edrígar, Edrik, Eikar, Eldrik, Elfar, Elihorn, Elimar, Elius, Enthorv, Enthvir, Flarnorv, Flarnthann, Frithgar, Frodgar, Fulkír, Gárimund, Garkir, Garmund, Garthar, Garulf, Geirfinn, Gislinn, Glarvmýl, Glarvthann, Gnaldrmýl, Gnaldrvir, Gnarthorv, Gnarthvir, Gnildrmýl, Grasir, Gráthunn, Gravir, Greinar, Grindill, Grithel, Groldell, Hlarthmýl, Hlarthvir, Hlaskorv, Hlaskvir, Hlirthmýl, Hliskvir, Hnarvmýl, Hnarvthann, Hnirvmýl, Hrandorv, Hrandvir, Hrindvir, Hvalgmýl, Hvalgthann, Hvarnorv, Hvarnthann, Hvilgthann, Hvirnorv, Knalthann, Knalthorv, Knarvmýl, Knarvthann, Knilthorv, Knirvthann, Kraldmýl, Kraldthann, Marvmýl, Marvthann, Nalthmýl, Nalthvir, Ralthann, Ralthorv, Skalfmýl, Skalfthann, Skraldmýl, Skraldvir, Snalthann, Snalthmýl, Snarvmýl, Snarvthann, Svalthmýl, Svalthvir, Thalmorv, Thalmthann, Thraldorv, Thraldvir, Thraskmýl, Thraskvir, Tvalgorv, Tvalgthann, Tvarnorv, Tvarnvir, Vraldmýl, Vraldthann, Vrathann, Vrathorv

## Female Given Names

Aelrún, Aelsía, Alfrúd, Alríd, Alrún, Alsa, Alsía, Althselda, Althýra, Alveig, Alvida, Alvidr, Alvig, Alwildr, Ama, Ambúd, Anakra, Anatla, Andís, Aneira, Aneka, Anemara, Anemora, Aneza, Anfrídr, Angrúd, Aniata, Anida, Aninka, Anitr, Aniza, Annara, Braldrinna, Draskselda, Draskthýra, Dvalgselda, Dvalgthýra, Dvarnrinna, Dvarnselda, Enthynda, Flarnthýra, Flarnynda, Glarvrinna, Glarvynda, Gnaldrselda, Gnaldrthýra, Gnarthrinna, Gnarthynda, Hlarthrinna, Hlarthselda, Hlaskrinna, Hlaskynda, Hnarvrinna, Hnarvselda, Hrandrinna, Hrandynda, Hvalgselda, Hvalgthýra, Hvarnthýra, Hvarnynda, Knalthynda, Knalthýra, Knarvselda, Knarvthýra, Kraldselda, Kraldthýra, Marvrinna, Marvynda, Nalthrinna, Nalthselda, Ralthynda, Ralthýra, Skalfrinna, Skalfynda, Skraldrinna, Skraldselda, Snalthselda, Snalthýra, Snarvthýra, Snarvynda, Svalthrinna, Svalthselda, Thalmthýra, Thalmynda, Thraldrinna, Thraldynda, Thraskrinna, Thraskselda, Tvalgthýra, Tvalgynda, Tvarnrinna, Tvarnynda, Vraldselda, Vraldthýra, Vrathynda, Vrathýra

## Clan Names

Althendikh, Althumakh, Ásgrind, Bjargskorn, Blóthöll, Braldarukh, Braldendikh, Draskendikh, Draskumakh, Drekanótt, Drengkarl, Driskumakh, Dróttgar, Dvalgendikh, Dvalgumakh, Dvarnarukh, Dvarnendikh, Dvilgumakh, Dvirnendikh, Eilífúd, Einkennir, Eldskari, Endalaus, Entharukh, Enthidrokh, Flarnidrokh, Flarnumakh, Flirnidrokh, Fródbán, Frostulf, Gárskald, Garwald, Glarvarukh, Glarvidrokh, Glirvarukh, Gnaldrarukh, Gnaldrendikh, Gnartharukh, Gnarthidrokh, Gnildrendikh, Gnirtharukh, Hafringr, Hildskorn, Hildvith, Hlartharukh, Hlarthendikh, Hlaskarukh, Hlaskidrokh, Hlirthendikh, Hliskarukh, Hnarvarukh, Hnarvendikh, Hnirvendikh, Hrafnsvald, Hrandarukh, Hrandendikh, Hrindarukh, Hvalgendikh, Hvalgumakh, Hvarnidrokh, Hvarnumakh, Hvilgumakh, Hvirnidrokh, Íseldr, Járnskel, Knalthidrokh, Knalthumakh, Knarvendikh, Knarvumakh, Knilthidrokh, Knirvumakh, Kraldendikh, Kraldumakh, Marvarukh, Marvidrokh, Mýrdal, Myrkelis, Naltharukh, Nalthendikh, Ralthidrokh, Ralthumakh, Skáldrith, Skalfarukh, Skalfidrokh, Skathhelm, Skilfarukh, Sköllbrandr, Skraldarukh, Skraldendikh, Skrildendikh, Skýrekkr, Skýrn, Snalthendikh, Snalthumakh, Snarvidrokh, Snarvumakh, Snilthumakh, Snirvidrokh, Sólvargr, Steinblót, Stormrót, Sundrýth, Svaltharukh, Svalthendikh, Svilthendikh, Sýndalr, Thalmidrokh, Thalmumakh, Thilmidrokh, Thraldarukh, Thraldendikh, Thraskarukh, Thraskendikh, Thrildarukh, Thriskendikh, Tvalgidrokh, Tvalgumakh, Tvarnarukh, Tvarnidrokh, Tvilgidrokh, Tvirnarukh, Vetrdómr, Vindrkvé, Vithrúnd, Vörnheim, Vorthrim, Vraldendikh, Vraldumakh, Vrathidrokh, Vrathumakh, Vrildumakh, Vrithidrokh
