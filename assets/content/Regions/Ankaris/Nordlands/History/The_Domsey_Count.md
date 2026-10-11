---
shortcode: domseycount
name: {full: The Dómsey Count, aliases: [The Sitting-Count, The Count of the Sittings]}
type: lore
subType: calendar
description: "How the Nordlands reckon years: counted from the first sitting of the King of All Clans on Dómsey, divided by the four turns of the year, and dated by sittings, by winters notched on the Hnarvdal post, and by the ages the skalds name."
tags: [reference, calendar, nordlands]
data:
  epoch: "287.1"
  months:
    - {name: Sumarmál, abbreviation: Sum, days: 122}
    - {name: Midsumar, abbreviation: Mid, days: 91}
    - {name: Vetrnaetr, abbreviation: Vet, days: 61}
    - {name: Jól, abbreviation: Jól, days: 91}
  seasons:
    - {name: the summer half, abbreviation: Sumar, start: 1}
    - {name: the winter half, abbreviation: Vetr, start: 214}
  namedDays:
    - {name: Sumarmál, day: 1}
    - {name: Midsumar, day: 123}
    - {name: Vetrnaetr, day: 214}
    - {name: the first night of Jól, day: 275}
    - {name: the ninth night of Jól, day: 283}
    - {name: the twelfth night of Jól, day: 286}
  eras:
    - shortcode: beforesits
      name: Before the Sittings
      abbreviation: BS
      marker: NBS
      start: null
    - {shortcode: fivecrowns, name: The Five Crowns, abbreviation: FC, marker: NFC, start: 1}
    - {shortcode: kinwars, name: The Kin-Wars, abbreviation: KW, marker: NKW, start: 134}
    - shortcode: hungerfleets
      name: The Hunger and the Fleets
      abbreviation: HF
      marker: NHF
      start: 226
    - {shortcode: burnedground, name: The Burned Ground, abbreviation: BG, marker: NBG, start: 289}
    - shortcode: stormveldgen
      name: The Stormveld Generation
      abbreviation: SG
      marker: NSG
      start: 374
    - shortcode: presentreck
      name: The Present Reckoning
      abbreviation: PR
      marker: NPR
      start: 415
  formats: {std: "D MMMM Y GGG"}
  packFolder: nordlands
---

Ask a Nordman when a thing happened and he answers with a sitting: "the thirty-fourth sitting", "two sittings before the fleets went south", "the year before the sixty-third." The **Dómsey count** is the reckoning behind the answer. It numbers the years from the first time the five kings sat together on [[place-domsey|Dómsey]], in 287 AF by the [[lore-commoncal|Vylarian reckoning]], and because the kings have sat there every seventh year since, a year of the count divides by seven into a sitting. The present year is the four hundred and thirty-fourth of the count, written 434 PR, and the sixty-third sitting falls at the next [[lore-sumarmal|Sumarmál]].

## Three Ways to Date an Event

The north kept no year-count of its own before the sittings, and it still prefers to date by things a hall can remember. A skald gives a year three ways, and a careful one gives all three.

- **By the sitting.** The Nth sitting falls in count year 7N − 6: the first in year 1, the thirty-fourth in 232, the sixty-second in 428 and the sixty-third in 435. A year between sittings is "the second year after the fortieth sitting". This is the reckoning the Lawspeakers use, because a judgment is remembered by the sitting that gave it.
- **By the winters.** The elders of [[place-hnarvdal|Hnarvdal]] cut a notch in the valley's reckoning-post every midwinter, and have done so, by their own count, since before Vithgard had kings. A claim dated "ninety winters by the Hnarvdal post" is dated by that notch, and a king's reeve who wants a year moved has never yet moved it. The post reaches back past the first sitting into the years the count writes BS, Before the Sittings.
- **By the year's name.** Every hall names a year for what happened in it: the year the fleets went south, the whale winter, the year the ice took the king. A skald's genealogy is strung on such years, and the Circle's work is to say which named year is which sitting.

## The Four Turns

The year is divided by the sky rather than by the moon, into the four turns every hall keeps, and a day is so many nights after the last turn. The turns are unequal because the sky is: the summer solstice falls a hundred and twenty-two days after the first morning of summer, the autumn turn ninety-one after that, midwinter sixty-one after the autumn turn, and the year ends ninety-one days later on the eve of Sumarmál.

| Turn                          | Days | Opens on                       | What it holds                                                                                                                                     |
| ----------------------------- | ---- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[lore-sumarmal\|Sumarmál]]   | 122  | the first morning of summer    | ships to the water, warriors from winter quarters, cattle to the high pasture; the tings and the boundary walk; the sitting on Dómsey in its year |
| [[lore-midsumar\|Midsumar]]   | 91   | the summer solstice            | the bonfires, the raiding and trading season, the hay and the whale strand                                                                        |
| [[lore-vetrnaetr\|Vetrnaetr]] | 61   | the autumn turn                | the slaughter, the salting and the honoring of the dead; the sixty-one nights to midwinter                                                        |
| [[lore-jol\|Jól]]             | 91   | the first of the twelve nights | the midwinter vigil, the Jól-Ride, the hero-sagas; then the long dark to the thaw                                                                 |

A date is written as the night and the turn, then the count year and its age: the thirty-fourth sitting's oath was sworn on 9 Sumarmál 232 HF, the ninth night of the summer turn in the two hundred and thirty-second year of the count, in the age of the Hunger and the Fleets. The summer half of the year runs from Sumarmál to Vetrnaetr and the winter half from Vetrnaetr to Sumarmál, and a contract for a half-year is the commonest bargain in the north.

## The Ages of the North

The skalds divide the count into ages, each named for what the north did in it, and a Nordman who cannot give a year can usually give the age. The ages are the Circle's teaching, not a law, and the kingdoms argue about where one ends and the next begins.

| Age                       | Written | Its years (count)       | Vylarian years     |
| ------------------------- | ------- | ----------------------- | ------------------ |
| Before the Sittings       | BS      | counted back from 1 BS  | 286 AF and earlier |
| The Five Crowns           | FC      | 1 to 134                | 287 to 420         |
| The Kin-Wars              | KW      | 134 to 226              | 420 to 512         |
| The Hunger and the Fleets | HF      | 226 to 289              | 512 to 575         |
| The Burned Ground         | BG      | 289 to 374              | 575 to 660         |
| The Stormveld Generation  | SG      | 374 to 415              | 660 to 701         |
| The Present Reckoning     | PR      | 415 to the present, 434 | 701 to the present |

An age shares its last year with the first year of the next, and the shared year is entered under the age it opens: year 134 is the first of the Kin-Wars.

### Before the Sittings

Everything older than the first sitting is written BS, and the skalds tell three things in it without numbering any of them.

**The Fjord-Taking.** The stock that came out of the [[lore-varkhadcnq|Varkhad conquest]] of the eastern grasslands pushed north and west into the fjord country over centuries, carrying a rune-row first learned under the Khazári and a refusal to admit either debt. They found the coast already sacred: the stones at [[place-horgsvangr|Hörgsvangr]] and [[place-vyldvangr|Vyldvangr]] were old when they arrived, and the sea had a power of its own, **Hafvald**, whom the coast placated before the Ásvinir came into the songs and whom [[place-hvarnvik|Hvarnvík]]'s fishers still count with a thumb tucked under. Nothing in this age can be dated, and the skalds do not try.

**The Age of Halls.** Every fjord was its own hall's, under a hall-lord and his godi, with no king above them, and a district's ting kept its own peace. About a hundred and ten years after the Founding the hall-skalds swore the [[affiliation-skaldscrcl|Skalds' Circle]] at [[place-hringstead|Hringstead]], so that a judgment given in one fjord could be recited in another. The singers of the [[doc-heroessgrd|Heroes of Asguard]] set every hero's deeds in this age, "before the kings", and whether the heroes lived at all is a question the Circle leaves to the halls that claim them. [[place-odholm|Ódholm]]'s hof claims this age for its founding, and the Hnarvdal post was first notched in it.

**The Acclamations.** Between about 260 and 285 the five district tings each acclaimed a king, as [[lore-nordfirstsit|The First Sitting]] tells, and in 287 the five kings met on Dómsey and the count began.

### The Five Crowns, 287 to 419

The age of the new kings. Dómsey was hallowed and given to Nordheim's keeping after the slaughter on its strand ([[lore-nordfirstsit|The First Sitting]]); **Snilthorv** of the **Knalthidrokh** convened the first sittings; the [[affiliation-eidhond|Order of the Sworn Hand]] was founded at [[place-logstead|Lögstead]] about 330, so that a district could get a ruling against its own jarl; and the captain in the Thraldfjord ship-grave was laid in his howe. It ends when the succession of Nordheim's fifth king is claimed by a Malagnan cousin, the first of the dynastic quarrels the north has had since.

### The Kin-Wars, 420 to 511

Nordheim and Malagna contested the north for two generations, by raid, by marriage and twice by host ([[lore-nordkinwars|The Kin-Wars]]). The war ended on the ice of [[place-skalfvatn|Skalfvatn]] in 466, where Malagna's host and its king went through, and in the Peace of Asgarthul of 471, which Norgaad's king brokered and which founded the Great Moot. Malagna turned west to trade; Nordheim kept the island and the first seat.

### The Hunger and the Fleets, 512 to 574

Three winters ran together with no Sumarmál between them ([[lore-threewinters|The Three Winters]]), and at the thirty-fourth sitting the kings swore that no hall should send its old to the fell while another had bread. The famine sent every hull south: from 519 to 530 the Nordheim fleets struck the empire's western provinces ([[lore-southrnfleets|The Southern Fleets]]), and the Malagna yards grew rich building them. The age ends as raiding turns to hire, with the empire paying Nordmen to garrison what the fleets had loosened and the free companies signing their compact at Hringstead ([[lore-compactsignd|The Signing of the Compact]]).

### The Burned Ground, 575 to 659

Nordmen silver was earned under southern skies, and at home the eastern frontier broke. A Grukar horde burned Targud's eastern districts, the first royal hall fell at [[place-nulthgard|Nulthgard]] and its garrison died at the ford below it, and the king moved his hall to [[place-tvalgard|Tvalgard]] and founded the fort-rotation ([[lore-burningeast|The Burning of the East]]). Vithgard lost [[place-isdal|Ísdal]] to sickness in 630, and a shipyard killing at Gnarthborg became the Málstead wergild about 645.

### The Stormveld Generation, 660 to 700

Nordheim's king sent the fleets of three kingdoms over open sea to take Aelwyth's plain ([[lore-stormveldtkn|The Taking of Stormveld]]), and an iron-man was made at [[place-vrathavn|Vrathavn]] while they were away. The hungry whaling winter of 679 ended in the burning at [[place-askholm|Askholm]]; the king of Norgaad's brother was lost on the Saddle in 688; the Stormhand Brotherhood was broken in Vrystwald about 692; and Vithgard's king died in 694 and his sons fought for seven summers ([[lore-vthgrdsccwrs|The Vithgard Succession Wars]]).

### The Present Reckoning, from 701

The truce holds in Vithgard. Nordheim settlers carried hall-posts into a Varokh grove in 708 ([[lore-nalthmrktkng|The Nalthmark Land-Taking]]). Targud's crown has passed three times in a quarter-century, Malagna's aging king has no acclaimed heir and two great clans on the edge of war, the sea is going wrong as Njörven stirs, and the sixty-third sitting is due at the next Sumarmál. The age is the present and does not end.

## Who Keeps It

Nobody by office. The Lawspeakers of the five kingdoms count the sittings, because each recites at them; the Circle keeps the ages and the named years; and the elders of Hnarvdal keep the winters. The three reckonings agree because the Circle makes them agree, and where a king's reeve and the Hnarvdal post disagree about a year, the post has never given way.

## See Also

- [[lore-nordfirstsit|The First Sitting on Dómsey]]—the year the count begins
- [[place-domsey|Dómsey]]—the island and the sitting
- [[place-hnarvdal|Hnarvdal]]—the reckoning-post that counts the winters
- [[affiliation-skaldscrcl|Skalds' Circle]]—the keepers of the ages and the named years
- [[lore-sumarmal|Sumarmál]] · [[lore-midsumar|Midsumar]] · [[lore-vetrnaetr|Vetrnaetr]] · [[lore-jol|Jól]]—the four turns of the year
- [[lore-commoncal|The Vylarian Calendar]]—the reckoning these pages give beside the count
