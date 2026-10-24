---
shortcode: worldthlrn
name: {full: The World of Thalorna, aliases: [Thalorna, Mannguard]}
type: place
subType: world
data:
  demonym: null
  lore: []
  parents: []
  population: 370000000
  world: {equatorialCircumferenceKm: 40000, surfaceGravityG: 1.0, axialTiltDegrees: 23.5}
  year: {days: 365, hoursPerDay: 24, minutesPerHour: 60, secondsPerMinute: 60}
  packFolder: setting

# cascade:
#   - target:
#       kind: section
#     build:
#       render: never
#       list: never

# terran_analog: Thalorna is patterned loosely after an alternate Earth; its continents and civilizations echo Terran geography and history.
---

The World of Thalorna has four days in its year that never move. The equinoxes and solstices fall on the same dates in every year that has ever been counted, and every people counts them from a different calendar, so one morning carries several names depending on whose priest or astronomer is speaking. Beyond that shared sky the world spreads from lush subtropical regions through vast deserts to icy wastes, and each continent keeps histories and societies shaped by millennia of human and otherworldly influence.

For pantheon-to-region mapping, see [[lore-pnthnrgnlmp|Pantheon Regional Map]].

## The World and its Year

Thalorna is round, 40,000 kilometers at the equator, with a surface gravity of 1.0 g and an axial tilt of 23.5 degrees. The tilt is what gives the world seasons. Without it the sun would sit over the equator all year, and there would be no equinox or solstice to mark the year at all.

The solar year is 365 days, with no leap year and no drift, and it never has had either. A day is twenty-four hours, an hour sixty minutes, a minute sixty seconds, with no fractions anywhere in the count. Four days each year are fixed and never move: the vernal equinox, the summer solstice, the autumnal equinox, the winter solstice. Because the year never varies, the same four dates carry the same four events in every year that has been or ever will be counted.

Every people on Thalorna divides these 365 days differently. [[lore-commoncal|The Vylarian Calendar]], [[lore-khzrnclndr|the Tellumi Calendar]], [[lore-khelathclndr|the Khelathi Calendar]] and the calendar of the [[affiliation-tantsouempr|Empire of Tantsou]] (see [[lore-clndrstrlgy|Calendar and Astrology]]) each cut the same year into their own months, and none of them is wrong for doing it differently. The year is the world's; what a people does with it is theirs.

The present, and the date this corpus states as canon, is the year **720**. Everything at or before it belongs to the setting; everything after belongs to the table it is played at.

## Continents

```sql
SELECT address.slug AS _ref,
       name.full    AS "Continent",
       description  AS "Overview"
FROM notes
WHERE type = 'place'
  AND list_contains(tags, 'continent')
ORDER BY name.full COLLATE NOCASE
```

### The Elder Races

Before humanity, before empires, before recorded history, Thalorna was home to two older peoples whose presence stretches back at least seven thousand years before [[lore-thefounding|the Founding]]—and probably far longer.

#### Sinale

The [[lore-flksinale|Sinale]]. The Firstborn. The Star-Kindled. A tall, graceful, long-lived people with a deep kinship to the natural world and a form of magic that bears no resemblance to anything the [[affiliation-ordoarcanis|Thordimalon]] can systematize. The Sinale live in hidden enclaves—deep forests, mist-shrouded valleys, island sanctuaries—scattered across every continent but appearing on no human map. They are profoundly insular, with almost no interest in human affairs. Sustained contact with human civilizations exists in only a handful of places: [[place-elavendre|Élavendre]], where the royal family has maintained a warm relationship with local Sinalean communities for centuries; the [[affiliation-tantsouempr|Empire of Tantsou]], where a more formal (and possibly coerced) arrangement links the enclaves to the imperial court; and [[place-kiichchik|Ki'ich'chik Continent]], where the nature of the connection is poorly understood by western scholars.

#### Khazari

The [[lore-flkkhazar|Khazari]]. The Deep Folk. The Stone-Wrights. A shorter, broader, immensely strong people who inhabit mountain holds in the cliff faces and the caves behind them, worked with engineering skill no human can match. Like the Sinale, they are vanishingly rare, deeply insular, and uninterested in human politics. Their craft—metalwork, stonework, engineering—is legendary, though most humans encounter it only in ancient ruins and priceless artifacts from an age before humanity.

#### The Old Compact

In the deepest past, the Sinale and the Khazari lived and worked together under some form of shared accord—what fragmentary traditions call [[lore-oldcompact|the Old Compact]]. This cooperation produced wonders that neither race could have achieved alone. But something shattered the Compact in an age before human memory, and the two elder races separated completely. They do not speak to each other. They do not trade. Neither will discuss the breach with humans. Whatever happened, it has not been forgiven across thousands of years of silence.

## Pantheons

```sql
SELECT address.slug AS _ref,
       name.full    AS "Pantheon",
       description  AS "Overview"
FROM notes
WHERE list_contains(tags, 'pantheon')
ORDER BY name.full COLLATE NOCASE
```

## Characters

Thalorna is populated by warriors, scholars, rulers, rogues, priests, bards, and everyone in between—the people whose choices shape the world's ongoing history. Browse [[doc-being|Beings]], the full catalog, or discover them in context on the regions, polities, and faiths where they live.

## Creatures

From the great river-beasts of [[place-aukhelathrgq|Au'Khelathu]] to the mountain-wights of [[place-aelwyth|Aelwyth]] and the spirit-fauna of the [[place-cntrlrnfrsts|Central Rainforests]], Thalorna's creatures are as varied as its peoples. Browse the full [[doc-being|catalog of beings]].

## Companies

Adventuring bands, mercenary companies, and sworn fellowships whose members travel, fight, trade, and survive together.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Company",
       description  AS "Overview"
FROM notes
WHERE list_contains(tags, 'company')
ORDER BY name.full COLLATE NOCASE
```

## Organizations

Institutions, guilds, orders, and syndicates that shape Thalornan civilization from within and without.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Organization",
       description  AS "Overview"
FROM notes
WHERE list_contains(tags, 'organization')
ORDER BY name.full COLLATE NOCASE
```

## See Also

- [[doc-lnggsthlrn|Languages of Thalorna]]
- [[lore-pnthnrgnlmp|Pantheon Regional Map]]
