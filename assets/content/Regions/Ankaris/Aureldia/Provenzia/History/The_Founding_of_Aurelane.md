---
shortcode: aurelianefound
name: {full: The Founding of Aurelane, aliases: [The Colony on the Great Road]}
type: lore
subType: history
description: "About 110 BF the Vylarian Republic planted a garrison colony on the great road above the southern Provenzal shore, and when the garrison was withdrawn about 80 BF the colony stayed as a town of Vylarian settlers married into Tanevar houses."
tags: [history]
data:
  packFolder: provenzia
  events:
    - when: ~-110
      kind: founding
      depth: region
      sources: [place-aureliane, place-korvathis, affiliation-vylarinmpr, lore-provenzianclt]
      summary: >-
        The Republic, master of the Vylarian Sea, plants a garrison colony on the great road above the southern Provenzal shore, to trade with the Tanevar kings and to watch the western sea-lane. It is laid out on the grid, with an aqueduct, a forum and a basilica. About 80 BF the garrison is withdrawn and the colony stays, a town of Vylarian settlers who marry into Tanevar houses.
      standing: attested
      names:
        - {name: Aurelane, by: place-aureliane}
        - {name: the colony on the great road, by: affiliation-vylarinmpr}
      where:
        locus: [place-aureliane]
        reach:
          - place: place-korvathis
            how: the coast's great houses descend from the settlers who stayed, and the road they were settled on is still the way inland
            knowledge: named
          - place: place-provenzrgn
            how: Provenzian law, learning and architecture are received from a city that was founded as a Vylarian outpost and never stopped being proud of it
            knowledge: named
          - place: place-jalnazdal
            how: the coast's later capital grows rich on trade the colony opened, and spends the next centuries being governed from it
            knowledge: unlinked
      who: [{ref: affiliation-vylarinmpr, role: founder}, {ref: lore-provenzianclt, role: witness}]
      accounts:
        - by: place-aureliane
          says: >-
            We are the oldest city in the kingdom and the heirs of Vylarian civilization in the west, and the grid proves it.
          agrees: full
        - by: lore-provenzianclt
          says: >-
            A town grew on our road, and our daughters married into it, and the names are all that was kept apart.
          agrees: partly
          withholds: how many Tanevar kings paid for the right to trade with it
        - by: affiliation-vylarinmpr
          says: Nothing now. The Republic's rolls for the western colonies are among those lost with the archive.
          agrees: silent
      unresolved:
        - why the Republic withdrew the garrison and left the colony
        - which Tanevar king gave the land the colony stands on
---

The Founding of Aurelane is still visible in the streets of **[[place-aureliane|Aurelane]]**, which run on a grid, straight and square, in a country where every other road follows a river or a ridge. The grid was laid out by an engineer of the [Vylarian Republic]{.name data-type="affiliation/polity"} about 110 BF, and it has outlasted the Republic, the [[affiliation-vylarinmpr|Vylarian Empire]]'s province and the garrison that was meant to hold it.

## Why There

The southern shore of the western country was rich and the Tanevar kings who held it had no navy. The Republic wanted two things from it: a market for its wine, oil and cloth, and a watch on the sea-lane that ran west past the strait. A colony inland on the great road served both. The coast could be reached in a day, the kings' halls in three, and the road gave the settlers a line back to the ships.

## The Colony

The Republic sent a garrison with its settlers and laid the town out as it laid out every colony, on a square grid around a forum, with a basilica for the courts and an aqueduct from the hills. The garrison kept the road and the settlers kept the market. The Tanevar kings traded with the town, sent their sons to it to learn the Republic's law and its letters, and took its silver.

About 80 BF the Republic drew its garrison out. The colony had no orders to leave, and it stayed. The soldiers who chose to remain were absorbed into a town of settlers who had been marrying into Tanevar houses for a generation, and within a few more the colony's Vylarian speech had borrowed so much of the country's that the two could not be told apart at the table. The names stayed Vylarian, and the Provenzian great houses that trace their descent from the colony trace it to the names.

## What It Left

- **The grid, the aqueduct, the forum and the basilica.** The streets, the water and the courts of [[place-aureliane|Aurelane]] all work as they were built, and the city rests its claim to be the heir of Vylarian civilization in the west on them.
- **The Vylarian ancestry of the great houses.** The nobility of the coast counts its blood from the colony, and the Tanevar country does not forget whose daughters married whom.
- **A road with a city at the end of it.** Everything that later came inland from the coast came up the colony's road, and every army that went the other way went down it.

The Empire's [province of the West]{.name data-type="affiliation/polity"} came more than two centuries later, when the legions took the lake country ([[lore-tiravlenbattle|Tiravlen]]) and made Aurelane its capital.

## See Also

- [[place-aureliane|Aurelane]]—the city
- [[lore-tiravlenbattle|Tiravlen]]—the battle that made it a provincial capital
- [[lore-westernwars|The Western Wars]]—the conquests of which the province was a part
- [[place-provenzrgn|Provenzia Region]]
