---
shortcode: grukarcomes
name: {full: The Grukar Come to Aelwyth, aliases: [The Landing in the Holds]}
type: lore
subType: history
description: "About 20 BF a splinter of a northern Grukar tribe crossed to Aelwyth in the holds of trading ships, too few to be noticed, and within a century held the empty third of the island, which they have not left."
tags: [history]
data:
  culture: aelwythanclt
  packFolder: aelwyth
  events:
    - when: ~-20
      kind: arrival
      depth: region
      sources: [lore-grukaraelwyth, lore-grukarfolk, place-aelwyth, place-pshtrwldrns]
      summary: >-
        A fragment of a northern Grukar tribe, shed in the Grukar way when its ground ran short, crosses to Aelwyth in the holds of vessels trading between the northern lands and the island's coast. Grukar cannot build a ship, and the numbers are too small for anyone aboard to notice or care. Within a century they hold the empty third of the island, the deep interior forest and the uplands and bog nobody works, and they have never left it.
      standing: attested
      where:
        locus: [place-aelwyth]
        reach:
          - place: place-pshtrwldrns
            how: the forest peoples begin a war that has not stopped, and organize their lives around it
            knowledge: named
          - place: place-wyndmarch
            how: the frontier steadings of the east budget losses to the forest edge as a standing cost
            knowledge: named
          - place: place-vorgald
            how: the hold's rule of killing Grukar on sight, kept since Khazartúrn, finds new work on the island
            knowledge: named
          - place: place-aldorathrgn
            how: the crown mounts formal campaigns against them about a dozen times in the centuries that follow, each declared a success
            knowledge: named
      who: [{ref: lore-grukarfolk, role: actor}]
      follows:
        - event: lore-grukarapp
          how: caused
          note: the species that appeared at Khazartúrn three thousand years earlier sheds a faction across the sea
      accounts:
        - by: lore-grukaraelwyth
          says: >-
            They have always been here, in the way rats have always been in a granary, and every generation believes the trouble is worse than it was.
          agrees: partly
          withholds: that the first of them were carried over without anyone noticing
        - by: place-pshtrwldrns
          says: >-
            The forest peoples have fought them without pause for longer than the oldest song remembers.
          agrees: full
          withholds: nothing; the forest peoples keep no record of a first fight
      unresolved:
        - which northern tribe shed the first faction, and which ships carried it
        - whether the Khazari knew the Grukar had landed before the forest peoples did
---

In The Grukar Come to Aelwyth, nobody on [[place-aelwyth|Aelwyth]] remembers the landing, which is the usual way for the [[lore-grukarfolk|Grukar]] to arrive in a country. A tribe that outgrows its ground sheds a faction outward, and a faction needs no fleet when the trading hulls of the northern lands are putting in along the island's coast with room to spare below the deck. Grukar cannot build a ship. They can sit in the hold of one.

## The Third of the Island

The faction that came over about 20 BF was small enough that the crews took it for rats, and it landed on a coast with a great deal of ground that nobody held. The island's good land was settled, and the [[lore-pelwarpepl|Pelwar]] who farmed it lived in the river valleys and on the open uplands. What lay between them was deep forest, bog and moor that no one had troubled to plow. The newcomers spread into it as their kind do: a tribe forms around an Ahk, outgrows its ground, and sheds another. Within a century the empty third of Aelwyth was theirs in the only sense a Grukar tribe holds ground, which is that nothing else lives there for long.

By the time of [[lore-kingshlwcrwn|the Crowning at Kingshollow]], when [Drethar of Kingshollow]{.name data-type="being/npc"} was crowned about 120 AF, the forest peoples of the interior and the southern woods were already at war with them.

## What the Settled Country Did

The tribal peoples took the weight of it and took it for good. A society that fights an enemy it cannot finish arranges itself around the fight, and the lowlanders who call these peoples barbarians are mostly describing that arrangement. The settled realms took the edges: the frontier steadings of [[place-wyndmarch|the Wyndmarch]], the upland farms of [[place-nordfells|the Nordfells]], the forest margin of every realm whose land runs into trees. Each treats the losses as routine, a few farms a year and a patrol that does not return. [[affiliation-kngdmldrth|Aldorath]] has mounted formal campaigns about a dozen times, and the chronicles of each one record a victory.

The [[lore-flkkhazar|Khazari]] of [[place-vorgald|Vorgald]] kill Grukar without exception and without the patience they extend to anything else on the island, and the landing gave that rule a new field. The Grukar of Aelwyth had no part in [[lore-khazarturn|Khazartúrn]], and the hatred does not ask. It is older than the landing by twenty-four centuries.

## What It Left

- **The forest peoples' war.** A war without campaigns or treaties, fought in every generation by everyone who lives in the interior.
- **The Wyndmarch's losses.** A standing line in the steadings' accounts.
- **Vorgald's rule.** Kill on sight, wherever found.
- **Aldorath's campaigns.** Perhaps a dozen, each declared a success, none visibly a difference.

## See Also

- [[lore-grukaraelwyth|The Grukar of Aelwyth]]—where they live and how the island lives beside them
- [[lore-grukarapp|The Appearing of the Grukar]]—their first record, at Khazartúrn
- [[place-pshtrwldrns|The Peshtar Wilderness]] · [[place-wyndmarch|the Wyndmarch]]
