---
shortcode: twothrones
name: {full: The War of the Two Thrones, aliases: []}
type: lore
subType: history
description: "From 1525 ST to 1531 ST the Galezkara house of Zu'Magetu fought the Gar-Aû of Lenen-Nezut up and down the river, and the war ended in the wheatland of Iqeru with the death of Zab'el'Psaqa III and the crowning of Quz'el'Qar I at Galezkara."
tags: [history, khelathu]
data:
  packFolder: regkhhist
  events:
    - when: -586
      until: -580
      stated: {calendar: khelathclndr, text: "1525 ST"}
      precision: year
      kind: battle
      depth: region
      sources: [lore-garauu, lore-thronelnz, place-iqeru, place-lenennezut]
      summary: >-
        The Galezkara house of Zu'Magetu takes the field against the Gar-Aû of Lenen-Nezut, and six years of war on the river end in a battle in the wheatland of Iqeru, where Zab'el'Psaqa III is killed. The victor is crowned Quz'el'Qar I at Galezkara in 1531 ST, the Lenen-Nezut line of Gar-Aûu is closed, and the upriver granaries are left half burned.
      standing: single-source
      where:
        locus: [place-iqeru]
        reach:
          - place: place-lenennezut
            how: the royal line is ended and the house is kept as Halzi'a
            knowledge: named
          - place: place-galezkara
            how: the victor is crowned on the mound and the delta houses hold the throne for eight decades
            knowledge: named
          - place: place-iqeruselat
            how: the granaries along the river are left half burned
            knowledge: named
      who:
        - {ref: affiliation-empireakhlth, role: actor}
        - {ref: affiliation-selatlennnzt, role: victim}
        - {ref: affiliation-selatiqeru, role: witness}
      follows:
        - event: lore-thronelnz
          how: caused
          note: the claimants the list left out of its count take the field against the upriver house
      accounts:
        - by: affiliation-empireakhlth
          says: >-
            A battle fought in the wheat. The king-list enters the death of the Lenen-Nezut Gar-Aû and the crowning of the next in the same year, and enters nothing between them.
          agrees: full
          withholds: the number of years the war ran before the list took notice
        - by: affiliation-selatlennnzt
          says: >-
            The house of the ram was not beaten on the field. It was betrayed from the barges, and the delta paid for the boats that did it.
          agrees: partly
          withholds: who held the barges at Iqeru
      unresolved:
        - which army broke first at Iqeru
        - whether Zab'el'Psaqa III fell in the line or was taken and killed after
---

A farmer of the Iqeru wheat turns up a spearhead in the furrow and carries it to the temple, where a Lem'Nelgir sets it with the others in a basket by the door. "Another one," he says. "Put it in the basket. It is a very old war and a very tidy one."

The war is why the Gar-Aûu of the upper river are buried in their own city and not in the necropolis, and why the house at Lenen-Nezut keeps a throne room it cannot use.

## The Six Years

The house of **Zu'Magetu** held Galezkara, and the king-list had given its claimants no reign since the upriver Gar-Aû [[lore-thronelnz|Zab'el'Psaqa III]] was crowned in Lenen-Nezut in 1519 ST. In 1525 ST (586 BF) Zu'Magetu took the field, and the war that followed was fought on the river itself. The upper valley's grain went downstream on barges, and a house that held the barges held the capital's bread. So the two armies went up and down the river's banks for six years, taking the granaries along it in turn. Some they emptied and some they burned, and the upriver granaries were left half burned when the war ended.

## The Field at Iqeru

The last battle was fought in the irrigated wheatland of [[place-iqeru|Iqeru]], in the season before the harvest, with the canals full and the ground soft. Zab'el'Psaqa III stood with the Lenen-Nezut levies; Zu'Magetu stood with the delta chariots and the temple levies it had bought. By the end of the day the Gar-Aû of Lenen-Nezut was dead, and with him the line of Geze'el'Anlaghu as a line of Gar-Aûu.

The victor was crowned **Quz'el'Qar I** at [[place-galezkara|Galezkara]] in 1531 ST (580 BF). The king-list enters the death of one and the crowning of the other in the same year, and the house of Zu'Magetu began to count its years from it.

## Why the Dead Were Not Left

Iqeru is a temple town, and the war was fought between two armies that kept the same rites. When the day ended, the priests of Iqeru sent for the embalmers; the Lenen-Nezut dead went home upriver to their tombs, the delta dead went home to Galezkara, and every man of either army who could be named was named and received. The dead who could not be named were read together at the temple of Uqa'â by the priests of Iqeru, and the field was farmed the next flood. Nothing was left on the ground unread, and the field at Iqeru is therefore **not** a blood-field: its ghosts, if it has any, are the ordinary ones every old battlefield keeps, and the farmers do not mention them.

## What It Left

- **The Field at Iqeru.** An ordinary battlefield, farmed, with a basket of spearheads in the temple and a harvest-custom of setting the first sheaf at the field's edge.
- **A closed line.** The Lenen-Nezut house ceased to be Gar-Aûu, was kept as Halzi'a, and has held the selat since.
- **The feud.** Lenen-Nezut's pride has a grievance in it against the capital, and the capital's against the town.
- **A precedent.** The upper river had crowned a Gar-Aû and could do it again, and the priesthood and the court remember both.
- **The weakened valley.** The granaries took years to refill, and eight decades later the hill-nomads who came down on the valley found it still thin ([[lore-thaulgau|the Coming of the Tha'Ulgau]]).

## See Also

- [[lore-thronelnz|The Throne at Lenen-Nezut]]—the line the war closed
- [[place-iqeru|Iqeru]] · [[place-lnzways|The Lenen-Nezut Ways]]
- [[lore-thaulgau|The Coming of the Tha'Ulgau]]—what the weakened valley met
- [[lore-akhdivriver|The Divided River]]—the age this belongs to
