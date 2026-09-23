---
tags:
  - history
  - spine
description: "From 335 BF to 312 BF the Vylarian Republic takes the Helionite city-states one by one, and in the aftermath the Senate carves the College of Arcane Philosophy out of the Panepistemium and places it under a magistracy that holds the Republic's arcanists as state property."
type: lore
subType: history
name:
  full: The Conquest of Heliónis
  aliases:
    - The Constituting of the Praefectura Arcana
shortcode: helionscnq
packFolder: settinglore
event:
  kind: conquest
  depth: world
  when:
    year: -335
    precision: span
    span:
      from: -335
      to: -312
  sources:
    - decided-midhalion
    - decided-chronology
    - place-helionis
    - affiliation-ctysttshlns
    - affiliation-vylarinmpr
    - affiliation-panepistmm
  summary: >-
    The Vylarian Republic takes the Helionite city-states over twenty-three years, ending with the
    last of them. The city-states answer the legions with their mages and the worst magical warfare
    western Ankaris has seen, and the Republic answers with the Dragon Riders, near whom a working
    turns back on the one who made it. In the year the last city falls the Senate reaches into the
    Panepistemium, extracts its College of Arcane Philosophy,
    and places it under a magistracy – the Praefectura Arcana – which holds the Republic's arcanists
    as state property, teaches nothing, publishes nothing and decides nothing.
  standing: attested
  names:
    - name: the Praefectura Arcana
      by: affiliation-vylarinmpr
      gloss: an office of the war ministry with a register, a garrison and no doctrine
  where:
    locus:
      - place-helionis
    reach:
      - place: place-midhalnrgn
        how: >-
          every arcanist born inside the Republic goes onto a register held by a prefect who changes
          with the year's magistracies, and is lent out to whoever the Senate owes
        knowledge: named
      - place: place-vylariargn
        how: >-
          a standing appropriation is renewed every year for the keeping of a thing the docket names
          only by a number, and goes on being renewed for two hundred and thirty-nine
        knowledge: unlinked
      - place: place-byzariargn
        how: >-
          the Helionite academies that gave the Republic its arcane theory keep their remaining
          colleges and lose their standing
        knowledge: named
  who:
    - ref: affiliation-vylarinmpr
      role: actor
    - ref: affiliation-ctysttshlns
      role: victim
    - ref: affiliation-panepistmm
      role: victim
  follows:
    - event: lore-panepistfnd
      how: ended
      note: the federation of colleges of equal standing does not survive the extraction of one of them
    - event: lore-vylarirpbl
      how: enabled
      note: the Republic that could do this had been growing for three centuries
  accounts:
    - by: place-helionis
      says: >-
        The Ordo's terminology is Vylari and its foundations are thoroughly Helionite, and we have
        never let the Vylarians forget it.
      agrees: partly
      withholds: that it was Helionite mages who made the institution necessary
    - by: affiliation-vylarinmpr
      says: >-
        The Dragon Riders broke the great mages of Heliónis where legions could not. How the Republic
        first secured the dragons' aid is poorly documented.
      agrees: partly
      withholds: the terms of the bargain, and what the Republic took at Théradon
    - by: affiliation-panepistmm
      says: >-
        In institutional terms it was a vivisection. The remaining colleges were left in place,
        diminished and shaken, but still functioning.
      agrees: full
  unresolved:
    - what the Republic promised the dragons for their part in it, which is written nowhere
    - what the standing appropriation was keeping, which the chancery's own word for it does not say
---

The Vylarian Republic turned its legions against the Helionite city-states in 335 BF and took the
last of them twenty-three years later. The city-states fought back with the most devastating weapon at their disposal: their mages. Desperate to resist
superior conventional forces, they unleashed sorceries that shattered formations, poisoned the land
and killed on a scale that swords could not. Some of the most powerful became mage-warlords their own
city-states could not fully control. The [[affiliation-panepistmm|Epistemium]], which had theorized
about the ethical limits of arcane power for generations, proved helpless to stop its own members
weaponizing the knowledge it had helped systematize.

The Republic's answer was the **Dragon Riders**, near whom spells misfired, wards collapsed and
arcane energy turned back on its wielder. The mage-generals who had shattered legions with a word
found their own sorceries detonating in their hands. The city-states fell. What the Republic gave for
that arm is [[lore-thebargain|a separate matter]], and it is not in any account of the war.

The last city fell in 312 BF.

What the Senate made afterward was not a college but a **magistracy**. The
**Praefectura Arcana** held the conquered Helionite masters and, in time, every arcanist born inside
the Republic, under a prefect who changed with the year's magistracies. It had a register and a
garrison and no doctrine. Its registered mages were state property, lent out to whoever the Senate
owed, and as the Republic's own last century turned violent the register became a weapon: factions
borrowed mages from each other's prefects, and a man's name on the roll was a thing that could be
sold.

Two and a third centuries stand between that year and [[lore-lexarcana|the charter]] that produced
the Ordo Arcanis, and the institution that fills them is the one the world's records are thinnest about.
