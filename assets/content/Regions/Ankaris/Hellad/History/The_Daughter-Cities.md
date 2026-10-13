---
shortcode: daughtercts
name: {full: The Daughter-Cities, aliases: [The Sending Out]}
type: lore
subType: history
description: "From about 700 BF to about 450 BF Helionite cities short of land send colonists over the sea: Pelagora plants Bethûa on the southern shore about 650 BF, and settlers from several cities found the harbors of the eastern straits and climb to the plateau, so that the east becomes Helonic at root."
tags: [history, hellad, daughterage]
data:
  packFolder: helionis
  events:
    - when: ~-700
      until: ~-450
      kind: founding
      depth: region
      sources:
        - place-helionis
        - affiliation-pelagora
        - place-bethuargn
        - place-byzariargn
        - affiliation-kostaros2
        - place-kostaros
        - affiliation-nesthiros
      summary: >-
        Helionite cities with more sons than land send colonists over the sea. Pelagora plants Bethûa on the southern shore, about 650 BF, and governs it through a council in Pelagora. Settlers from several cities found harbors in the eastern straits, among them the isle of Nêsthiros, and along the coast, and Kostaros sends a daughter-port that keeps its mother's name. From the harbors the settlers climb to the plateau, and the east becomes Helonic at root.
      standing: attested
      names: [{name: the Sending Out, by: place-helionis}]
      where:
        locus: [place-bethuargn, place-byzariargn]
        reach:
          - place: place-bethuargn
            how: >-
              a council in Pelagora governs the colony for twelve centuries, and the Bethûan tongue and faith are Helonic descendants of those years
            knowledge: named
          - place: place-byzariargn
            how: >-
              the harbors of the straits are Helionite foundations, and the plateau above them is settled from the harbors
            knowledge: named
          - place: place-kostarosdst
            how: >-
              the daughter-port keeps the mother's name, and travelers have confused the two ever since
            knowledge: named
      who:
        - {ref: affiliation-pelagora, role: founder}
        - {ref: affiliation-kostaros2, role: founder}
      follows:
        - event: lore-firstgames
          how: enabled
          note: cities that meet in peace at the Games can send their sons out without sending them to war
      accounts:
        - by: affiliation-pelagora
          says: >-
            Bethûa is Pelagora's daughter, planted by our ships and governed by our council, and a daughter has no standing to forget it.
          agrees: full
        - by: affiliation-mtrrchybth
          says: >-
            We were planted from across the sea, and the women of the colony kept the temples, the clans and the stores through every council that sat over us.
          agrees: partly
          withholds: the colony's own account of the first landing, which survives only in the temple rolls
      unresolved:
        - which cities sent settlers to the eastern harbors besides Kostaros, which the harbors' own histories do not agree on
        - whether any colony of these years lies behind the tradition at the Old Mole of Calypsa
---

A Pelagoran ship's master, asked where Bethûa lies, answers by pointing across the water and adding that the council of Pelagora governed it for twelve centuries. The **Daughter-Cities** are the colonies that Helionite cities planted over the sea in the two and a half centuries after the [[lore-firstgames|First Games]], when the valleys were full and younger sons had no land.

## Bethûa

[[affiliation-pelagora|Pelagora]] sends its colonists south to a shore it has seen from its own harbor, and plants [[place-bethuargn|Bethûa]] there about 650 BF. A council in Pelagora governs the colony, appoints the officers who keep its harbor and collects its dues, and the arrangement lasts through the republic, the empire and the age of the legions. Bethûa takes the Helonic tongue and the Aurèldían faith with it, and in time makes both its own.

## The Eastern Straits

Colonists and traders from several cities found the harbors of the eastern straits, among them the fortress isle of [[affiliation-nesthiros|Nêsthiros]], and settle the coast on either side. From the harbors they climb the escarpments to the plateau, where the Landings had left a burial ground and little else. The east becomes Helonic at root: the Byzarians are of Helonic stock and carry the tongue in a shape that the harbors clipped.

[[affiliation-kostaros2|Kostaros]] sends a daughter-port that keeps its mother's name, and the two have been taken for one another since. A [[place-kostaros|Byzarian port]] of that name still stands on the coast, and a debt contracted at one is sometimes sued for at the other.

## What the Colonies Left

- **Bethûa's Helonic tongue and faith**, and the long tie between the island city and Pelagora.
- **The two Kostaros**, a Helionite city-state and a Byzarian port of one name.
- **The Byzarian stock**, Helonic at root, which centuries of trade across the straits have hardened into a people of its own.
- **Nêsthiros's sea-trade**, which the eastern harbors have kept for as long as there have been captains to keep it.

## See Also

- [[lore-firstgames|The First Games]]—the peace the cities keep while they send their sons out
- [[lore-heladpelagtrty|The Pelagoran Treaty]]—how Pelagora keeps Bethûa through the conquest
- [[place-bethuargn|Bethûa]] · [[place-byzariargn|Byzaría Region]]
