---
shortcode: helladcal
name: {full: The Hellád Calendar, aliases: [The Seven Ages]}
type: lore
subType: calendar
description: "The older count of the Hellád cities, kept beside the Vylarian Calendar by the old families, the Games, the temples and the farming country: twelve months named for the work and the festivals of the year, and seven ages, from the Landings to the Free Cities, each numbering its own years."
tags: [reference, calendar, history, hellad]
data:
  culture: helioniteclt
  epoch: "-800.1"
  months:
    - {name: Ánthir, abbreviation: Anth, days: 30}
    - {name: Spórin, abbreviation: Spor, days: 31}
    - {name: Thálimin, abbreviation: Thal, days: 30}
    - {name: Thérisin, abbreviation: Ther, days: 31}
    - {name: Álohin, abbreviation: Aloh, days: 30}
    - {name: Théldin, abbreviation: Thel, days: 31}
    - {name: Trúghir, abbreviation: Trug, days: 30}
    - {name: Elaíshin, abbreviation: Elai, days: 30}
    - {name: Nýkhtin, abbreviation: Nykh, days: 31}
    - {name: Khêmion, abbreviation: Khem, days: 30}
    - {name: Ánevin, abbreviation: Anev, days: 31}
    - {name: Phýlin, abbreviation: Phyl, days: 30}
  seasons:
    - {name: Ánthira, abbreviation: Ant, start: 1}
    - {name: Thérimos, abbreviation: Thm, start: 92}
    - {name: Trúghira, abbreviation: Tru, start: 183}
    - {name: Khêmôn, abbreviation: Khm, start: 274}
  eras:
    - {shortcode: landingsage, name: The Landings, abbreviation: HL, marker: YHL, start: null}
    - {shortcode: daughterage, name: The Daughter-Cities, abbreviation: HD, marker: YHD, start: 1}
    - shortcode: federationage
      name: The Federation and the Fire
      abbreviation: HF
      marker: YHF
      start: 401
    - shortcode: provinceage
      name: The Province and the Compact
      abbreviation: HP
      marker: YHP
      start: 489
    - {shortcode: peaceage, name: The Imperial Peace, abbreviation: HI, marker: YHI, start: 1009}
    - {shortcode: driftage, name: The Drift, abbreviation: HR, marker: YHR, start: 1312}
    - {shortcode: freecitiesage, name: The Free Cities, abbreviation: HC, marker: YHC, start: 1420}
  formats: {std: "D MMMM [yearInEra] GGG"}
  packFolder: hellad
---

An old Helionite family of Thyrenae dates its deed of sale twice: once in the year of the [[lore-commoncal|Vylarian Calendar]], which the clerk of the province requires, and once in the year of its own age, which the family's steward writes in the margin because his grandfather did. The first is the official count. The second is the **Hellád Calendar**, the reckoning of the Hellád cities from the days of the Daughter-Cities onward, and it survives unofficially among the people who have no reason to let it go: the old families, who date their records in it; the keepers of the Games, whose truce-rolls run in it; the temples, whose High Judges and priests reckon their lines in it; and the farming country, where the months are the work of the year.

The Hellád Calendar divides its years into **seven ages**. A date names the year of its age, the way a Vedyaran date does, and each age numbers its own years from 1. The first year of the Daughter-Cities is the first year of the count, 800 BF in the Vylarian Calendar, and the Landings are the years before it, outside the reckoning. The boundaries before the Federation are reckoned from the traditions of the cities, and the dates carry an "about".

## The Year

The year has twelve months and four seasons, and the year is the Vylarian year in length: it opens on the same morning, at the spring equinox, so a Hellád month and a Vylarian month begin on the same day. The months are named for the work and the festivals they carry.

| Month    | Days | What it is                                                |
| -------- | ---- | --------------------------------------------------------- |
| Ánthir   | 30   | the blooming, when the orchards flower                    |
| Spórin   | 31   | the sowing                                                |
| Thálimin | 30   | the month the sea lanes open to the sailing fleets        |
| Thérisin | 31   | the reaping of the grain                                  |
| Álohin   | 30   | the threshing                                             |
| Théldin  | 31   | the festival month, in which the Games are held           |
| Trúghir  | 30   | the vintage                                               |
| Elaíshin | 30   | the olive pressing                                        |
| Nýkhtin  | 31   | the lengthening nights                                    |
| Khêmion  | 30   | the storm season, when the sea lanes close                |
| Ánevin   | 31   | the winds                                                 |
| Phýlin   | 30   | the guarding of the stores through the last of the winter |

The seasons are Ánthira, the blossoming; Thérimos, the sailing summer; Trúghira, the gathering; and Khêmôn, the storm winter. They open on the first days of the Vylarian spring, summer, fall and winter. The count keeps no named weekdays: a market keeps its own days.

## Converting to the Vylarian Calendar

An age begins on a Vylarian year, and a year of the age is counted from there. To convert, take the Vylarian year in which the age begins and count on.

- A year of the Daughter-Cities, _m_, is the year 801 - _m_ BF, so year 1 is 800 BF and year 400 is 401 BF.
- A year of the Federation and the Fire is the year 401 - _m_ BF.
- A year of the Province and the Compact is the year 313 - _m_ BF up to year 312, which is 1 BF; year 313 is 1 AF, and from there the year is _m_ - 312 AF.
- A year of the Imperial Peace is the year 208 + _m_ AF, of the Drift 511 + _m_ AF, and of the Free Cities 619 + _m_ AF.

So 1 Lîzêlândi 571 in the Vylarian Calendar is 1 Ánthir 60 HR, the first morning of the sixtieth year of the Drift, and the present year, 720 AF, is the hundred and first of the Free Cities.

## The Seven Ages

| Age                          | Written | Its years (Vylarian Calendar) | What marks it                                                                                |
| ---------------------------- | ------- | ----------------------------- | -------------------------------------------------------------------------------------------- |
| The Landings                 | HL      | about 1300 BF to about 800 BF | ships from the north-west, the first sanctuaries, and the first Games                        |
| The Daughter-Cities          | HD      | about 800 BF to about 400 BF  | the cities send colonists over the sea and up onto the eastern plateau                       |
| The Federation and the Fire  | HF      | about 400 BF to 312 BF        | the Panepistemium federates the schools, and the Republic's war breaks them                  |
| The Province and the Compact | HP      | 312 BF to about 209 AF        | Heliónis keeps its councils under the Republic, and the five eastern cities bind themselves  |
| The Imperial Peace           | HI      | 209 to 512                    | Byzaría annexed, the Celestial Road at its busiest, and Heliónis the empire's cultural heart |
| The Drift                    | HR      | 512 to 620                    | the legions leave, the cities defend themselves, and the Compact is sworn again              |
| The Free Cities              | HC      | 620 to the present, 720       | a province on paper, a neutral League, and forts the empire no longer pays                   |

### The Landings, about 1300 BF to about 800 BF

A seafaring people who speak Proto-Helonic come down the coast and take the peninsulas and islands, burying their dead beside tombs already old ([[lore-heladlandngs|The Landings]]). The cities that grow in the valleys meet at one sanctuary for contests under a herald's truce ([[lore-firstgames|The First Games]]). The age ends when the valleys are full and the younger sons begin to cross the sea.

### The Daughter-Cities, about 800 BF to about 400 BF

Cities short of land send out colonists: Pelagora plants Bethûa on the southern shore, and settlers found the harbors of the eastern straits and climb to the plateau ([[lore-daughtercts|The Daughter-Cities]]). Thyrenae's schools grow, and mages study in them as one branch of philosophy. The age ends when the leading schools federate as the [[affiliation-panepistmm|Panepistemium]].

### The Federation and the Fire, about 400 BF to 312 BF

A century of the Panepistemium is followed by the Republic's war on Heliónis ([[lore-helionscnq|The Conquest of Heliónis]]). A Korinthean mage-warlord's working turns on his own levy ([[lore-heladturnedwrk|The Turned Working]]), Pelagora makes a separate peace ([[lore-heladpelagtrty|The Pelagoran Treaty]]), and Thyrenae falls ([[lore-heladthyrsiege|The Siege of Thyrenae]]). It ends when the Senate's commissioners walk into the colleges.

### The Province and the Compact, 312 BF to about 209 AF

Heliónis is a province whose cities keep their councils and teach their conquerors; the Academy of the Silver Veil is founded to win by influence what was lost by arms ([[lore-heladsilverveil|The Founding of the Silver Veil]]). In the east the five cities break a steppe host at the springs ([[lore-heladwells|The Battle of the Wells]]) and bind themselves ([[lore-heladcompact|The Compact of the Five]]). It ends when the legions come over the mountains into Byzaría ([[lore-heladeastwar|The Eastern War]]).

### The Imperial Peace, 209 to 511

Byzaría is annexed after a two-year siege of the Silver Citadel ([[lore-heladcitadel|The Siege of the Silver Citadel]]), and a Black Flame cohort is settled on the high passes ([[lore-heladvezhnur|The Vezhnur Settlement]]). The Celestial Road fills the ports with every tongue, and the city weigher of Khrýshteíkhos proves the tax-farmers' standard false ([[lore-heladweighing|The Weighing at Khrýshteíkhos]]). It ends when three winters run together in the north and the legions march away from the east.

### The Drift, 512 to 619

The cities defend themselves. Heliónis fights its first war among its own cities in eight and a half centuries ([[lore-heladharbors|The War of the Harbors]]) and invents the rules that keep the next one small ([[lore-heladtruce|The Truce of the Games]]). The five re-swear the Compact ([[lore-heladreswear|The Re-swearing of the Compact]]) and ban private revenge ([[lore-heladordinance|The Ordinance of Arbiters]]). It ends when the Settlement of the Crowns writes down what the cities have already taken ([[lore-crownssettle|The Settlement of the Crowns]]).

### The Free Cities, 620 to the present

The present: Heliónis a province on paper with its own magistrates, the League neutral and indispensable, unpaid forts in the interior, and the arrangement between the philosophers and the Ordo that still holds ([[lore-heladconcordat|The Concordat of Theory]]).

## See Also

- [[lore-commoncal|The Vylarian Calendar]]—the official count the ages are converted to
- [[lore-vylariages|The Vylarian Ages]]—the ages of the Empire that rules Hellád in the middle years
- [[place-heladrgn|Hellád Region]]—the country whose history the ages divide
- [[lore-helioniteclt|Helionite]], [[lore-byzarianclt|Byzarian]]—the two cultures that keep them
