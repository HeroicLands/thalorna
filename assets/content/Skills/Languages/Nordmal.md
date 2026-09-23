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

Nordmal names are typically compound constructions combining roots that evoke strength, battle, wisdom, or natural forces. A name might literally mean "Wolf-slayer" or "Storm-rider" or "Bone-breaker," reflecting parental hopes for the child's character or achievements.

The Nordmen tradition of _aettarnafn_ (earned cognomen) is central to culture: a person performs a great deed and thereby earns a second name that is used thereafter. Thus Eiríkr might earn the title "Stormrot" (Storm-broken/Stormwreck) after surviving a legendary storm. Over generations, such earned names become hereditary family surnames.

Patronymic forms are common, particularly in genealogical contexts. The suffix -sen (son) or -dóttir (daughter) may be appended to a parent's name when formal identification is required. However, fixed family surnames deriving from ancestor names are also in use, particularly among the nobility.

Women's names often employ the -a/-la endings, while men's names more commonly end in consonants or -r/-ur. Names are drawn from a core list of traditional elements, ensuring cultural continuity and easy recognition across the five kingdoms.

## Male Given Names

Aevarr, Alarík, Aldrik, Aleifr, Amund, Armund, Arnthor, Asbjorn, Asmundr, Athalwulf, Balthur, Bálrik, Banrik, Björgúlf, Bjorn, Brandr, Brithgár, Bruthgar, Búi, Byrnjolf, Dágulf, Dalmarr, Danmarr, Darradr, Dellrik, Denrik, Derwin, Díormaith, Dithmar, Dórimar, Druthgar, Duthgar, Duthmar, Eadwulf, Earmundr, Eatamir, Eatheling, Eathmar, Eathrik, Edmark, Edmere, Edrígar, Edrik, Edwin, Eikar, Eirik, Eiríkr, Eldgrimr, Eldred, Eldrik, Elfar, Elfred, Elgin, Elihorn, Elimar, Elius, Folki, Frithgar, Frodgar, Fulkír, Garkir, Garulf, Gárimund, Garmund, Garthar, Garwald, Geir, Geirfinn, Geirlaug, Gislinn, Glamr, Glynn, Godric, Godwin, Gramr, Grandi, Grasir, Gráthunn, Gravir, Greinar, Grendel, Grenulf, Gretgar, Gretmar, Grethil, Grethun, Gretram, Gretrik, Grettor, Gretwald, Gretwulf, Grevin, Grewald, Greylin, Greymon, Greywulf, Grímr, Grindill, Grithel, Grithir, Grithun, Gritmar, Gritrik, Grittor, Groldell, Gromald, Grondel, Grondor, Grorald, Grorholm, Grormark, Grorrik, Grorstein, Grorvald, Grorwold, Groscal, Groscen, Groscil, Grosdin, Groscrim, Grosfinn, Grosheld, Groshil, Groshkim, Grosholm, Groslind, Grosmeld, Grosmer, Grosmil, Grosmin, Grosmond, Grosmund, Grosmunn, Grosneld, Grosnold, Grosred, Grosrik, Grosrom, Grosror, Grosrum, Grosrund, Grosrunne, Grosruth, Grosvald, Grosvalk, Grosvall, Grosvan, Grosvang, Grosvarg, Grosvari, Grosvark, Grosvarr, Grosvart, Grosvatek, Grosvatem, Grosvath, Grosvatik, Grosvatin, Grosvatla, Grosvatley, Grosvatne, Grosvatol, Grosvatom, Grosvattur, Grosvatun, Grosvatur, Grosvatz, Grosvel, Grosveld, Grosvelem, Grosvelin, Grosvelm, Grosvelt, Grosvemar, Grosven, Grosvend, Grosvendt, Grosvenor, Grosvensa, Grosvense, Grosventa, Grosvent, Grosventur, Grosvenza

## Female Given Names

Aelrún, Aelsía, Ailbhe, Ailene, Ailín, Ailís, Akanna, Alfrúd, Almara, Alrún, Alríd, Alsa, Alsía, Alva, Alveig, Alvida, Alvidr, Alvig, Alwildr, Ama, Amara, Ambúd, Anakra, Anara, Anatla, Andela, Andís, Aneira, Aneka, Anemara, Anemora, Anesia, Aneta, Aneza, Anfrídr, Angrúd, Angula, Aniata, Anika, Anina, Aninka, Anida, Anisa, Anita, Anitr, Aniza, Annara, Annarík, Annata, Annava, Annavaig, Annavela, Annaveig, Annavig, Annavidr, Annavild, Annawildr, Annayla, Annera, Annerika, Annerín, Annería, Annerún, Annesa, Anneta, Annetra, Anneva, Annevaig, Annevel, Annever, Annevig, Annevidr, Annevik, Annevila, Annevild, Annewilda, Annewildr, Annewilm, Annewilma, Annewindt, Annewind, Annewindus, Annewinnie, Annewitka, Annewitte, Annexa, Annianna, Annialba, Anniana, Annianna, Annibella, Anniberghe, Anniberta, Annida, Annidia, Annidra, Annietha, Annietta, Annifa, Anniga, Annigela, Annigilde, Annigilds, Annigirde, Annigirld

## Clan Names

Asgrind, Drekanótt, Frostulf, Garwald, Hildvith, Jarnskel, Solvargr, Stormrot, Vetrdomr, Vindrkve, Vornheim, Eldskari, Dreadmadr, Drengkarl, Eilífúd, Einkennir, Endalaus, Endalheim, Endalsöng, Endavald, Endavík, Endalvál, Endalveig, Endalveldur, Endalvik, Endalvika, Endalwildr, Endalwilt, Endalwind, Endalwing, Endalwinn, Endalwinne, Endalwinta, Endalwinte, Endalwinter, Endalwintra, Endalwinture, Endalwintur, Endalwintura, Endalwinture, Endalwinty, Endalwisa, Endalwise, Endalwista, Endalwiste, Endalwita, Endalwite, Endalwith, Endalwithe, Endalwithiel, Endalwithir, Endalwithre, Endalwithra, Endalwithral, Endalwithram
