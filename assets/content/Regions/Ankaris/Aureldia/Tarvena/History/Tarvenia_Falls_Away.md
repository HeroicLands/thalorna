---
shortcode: tarvfallsawy
name: {full: Tarvénia Falls Away, aliases: [The First High King]}
type: lore
subType: history
description: "From about 538 to about 545 AF the occupied lowlands of Tarvénia stopped paying the Empire, the mountain lords elected Garváneth of Astúrath the first High King to drive out the garrisons, and Valthári bought a charter of self-government."
tags: [history]
data:
  packFolder: tarvenia
  events:
    - when: ~538
      until: ~545
      kind: secession
      depth: region
      sources:
        - place-tarvenirgn
        - affiliation-kingdmtrvn
        - affiliation-kngdmstrth
        - affiliation-frctyvlthr
        - affiliation-kingdmlnrk
        - place-lezkora
      summary: >-
        With the legions drawn north to the hunger raids and the soldiers' pay cut, the occupied lowlands stop paying. The mountain lords meet at Lezkóra and elect Garváneth of Astúrath the first High King to drive the garrisons out; Liénrik's watchtowers are turned to face the coast. Short of silver to pay the lords who elected him, Garváneth sells Valthári a charter of self-government for a yearly tribute.
      standing: attested
      names:
        - {name: the First High King, by: affiliation-kngdmstrth}
        - {name: the falling away, by: affiliation-vylarinmpr}
      where:
        locus: [place-tarvenirgn, place-lezkora]
        reach:
          - place: place-leonrik
            how: the watchtowers built to warn of risings are turned to face the coast, and the families who keep them charge for the light
            knowledge: named
          - place: place-valthari
            how: the port buys a charter and its council, the Consejárath, governs it ever after
            knowledge: named
          - place: place-provenzrgn
            how: the Tarvénian hosts that follow the garrisons out press west on a province still imperial
            knowledge: named
      who:
        - {ref: affiliation-kngdmstrth, role: actor}
        - {ref: affiliation-kingdmtrvn, role: founder}
        - {ref: affiliation-frctyvlthr, role: signatory}
        - {ref: affiliation-vylarinmpr, role: victim}
      follows:
        - event: "lore-threewinters#winters"
          how: enabled
          note: the legions are drawn north to meet the hunger raids and the western garrisons thin
        - event: lore-empirdclne
          how: enabled
          note: an Empire that cannot pay its western soldiers cannot keep them in the field
      accounts:
        - by: affiliation-kngdmstrth
          says: >-
            The mountain lords took back what the Empire had held, and chose a king to keep it.
          agrees: full
        - by: affiliation-kingdmtrvn
          says: >-
            The High King is elected by the lords and has no army of his own.
          agrees: partly
          withholds: that the first election was bought with the sale of a charter
        - by: affiliation-vylarinmpr
          says: >-
            The garrisons were withdrawn to meet the northern emergency, and the lowlands had stopped paying.
          agrees: partly
      unresolved: [how many of the lords who voted for Garváneth had been paid in advance]
---

The election of a High King of Tarvénia is half ceremony and half brawl, and the first one set the pattern. The lords of the mountains met at Lezkóra, and the ones who voted for **Garváneth** of Astúrath voted for the man who would drive out the garrisons.

## The Coin Fixed

The lowlands had been paying the Empire since about 140 AF, in taxes and in the upkeep of the garrisons that sat on them ([[lore-lowlandstaken|The Lowlands Taken]]). When the Three Winters ran together in the north ([[lore-threewinters|The Three Winters]]), the Empire drew its legions toward the hunger raids and cut the pay of the soldiers it left behind. The garrisons in the Tarvénian lowlands were under-strength and underpaid, and the lowlands stopped paying them.

## The Election

The mountain lords had never had a king over them, and now they had a reason to elect one: the lowlands were falling away from the Empire, and somebody would take them. They met at [[place-lezkora|Lezkóra]], elected Garváneth, an Astúrathi lord with the largest following, and pledged him their levies for as long as it took to drive the garrisons out. The Liénriki, who had kept the Empire's watchtowers for four centuries, turned them from the highlands to the coast.

The garrisons were out within seven years, and the High King found he had no silver to pay the lords who had elected him. He sold **Valthári** a charter of self-government: the free city would pay him a yearly tribute and govern itself, with its own courts and its own council, the Consejárath. The port had been the Empire's, and it was now the High King's, on terms the merchants could live with.

## What It Left

- **The elected High Kingship.** A crown that has no army, no bureaucracy and a vote that is rarely quiet ([[affiliation-kingdmtrvn|The Kingdom of Tarvénia]]).
- **Valthári's charter.** The free city's independence, bought and paid for each year ([[affiliation-frctyvlthr|The Free City of Valthári]]).
- **The turned watchtowers.** Liénrik's chain of towers facing the coast, still lit by the families who keep them.
- **Tarvénian hosts pressing west.** The lords the garrisons had held down now looked at the province across the mountains ([[lore-malnebris|Malnebrìs]]).

## See Also

- [[affiliation-kingdmtrvn|The Kingdom of Tarvénia]]—the elected crown
- [[affiliation-frctyvlthr|The Free City of Valthári]]—the city that bought its charter
- [[lore-lowlandstaken|The Lowlands Taken]]—the occupation the lowlands ended
- [[lore-empirdclne|The Decline of the Vylarian Empire]]
