---
shortcode: deltaexped
name: {full: The Delta Expedition, aliases: [The Crossing to the Delta]}
type: lore
subType: history
description: "In 377 AF the Orzas Barnakis sends the Empire's strongest field army across the sea to the Khelathi delta; it breaks the chariot corps at Khelaga, its commander is crowned in the Khelathi manner, and the chancery enters him as a traitor and stops writing his name."
tags: [history, vylaria, ageconquest]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: delta
      when: 377
      kind: conquest
      depth: region
      sources:
        - affiliation-vylarinmpr
        - affiliation-vylrnmltry
        - affiliation-empireakhlth
        - place-khelaga
        - lore-vylconquest
      summary: >-
        The Orzas Barnakis sends the strongest field army the Empire has across the sea to the delta of the Khelathi river. It breaks the chariot corps at Khelaga, and the priesthood of the river crowns its commander under the throne name Zab'el'Qar. He never comes home. The chancery enters him as a traitor and from that day does not write his name.
      standing: attested
      names:
        - {name: the Delta Expedition, by: affiliation-vylarinmpr}
        - name: the Vylarian Conquest
          by: affiliation-empireakhlth
          gloss: the Khelathi name for the battle and the occupation that followed it
      where:
        locus: [place-khelaga]
        reach:
          - place: place-chariotfld
            how: >-
              the reed-flat below Khelaga holds the corps' dead and a pit of Vylarian dead, and neither set was received by its own rites
            knowledge: named
          - place: place-shortway
            how: >-
              the commander and his son lie in the short Way at Zu-Gezer, the only tombs in the necropolis with a Vylarian eagle over a Khelathi door
            knowledge: named
          - place: place-orzara
            how: >-
              a senatorial house keeps a forebear's name out of its rolls, and the capital's best legions are missing from the balance of power at home
            knowledge: unlinked
      who:
        - {ref: affiliation-vylarinmpr, role: actor}
        - {ref: affiliation-vylrnmltry, role: instrument}
        - {ref: affiliation-empireakhlth, role: victim}
      follows:
        - event: "lore-westernwars#wars"
          how: enabled
          note: three centuries of campaigning leave an army that can be sent across a sea
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The legions crossed the sea, took the delta apex in a single field battle, and held the province for the Orzas for as long as the Orzas could spare men to hold it.
          agrees: partly
          withholds: the legions' losses, the commander's name and the fact that he did not return
        - by: affiliation-empireakhlth
          says: >-
            The list enters two kings of a house it calls Amralo'Methu by their throne names alone, and says nothing of where the first of them came from.
          agrees: partly
          withholds: the commander's birth name
      unresolved:
        - the commander's Vylarian name, which neither record gives
        - which senatorial house will not speak of him
---

An archivist at the [Imperial Offices]{.name data-type="place/structure"}, asked by a visiting scholar for the muster rolls of the year 377, brings the roll and lays it on the table open at the right place. The strongest field army in the [[affiliation-vylarinmpr|Empire]] is entered in full, legion by legion, as it embarks. Its return is not entered, and the archivist does not offer a reason. "The roll ends at the quay," he says. "What happened after is in the other column."

## The Crossing

The Orzas [Barnakis]{.name data-type="being/npc"} reigned from about 362 and spent the first fifteen years of his reign on the Empire's other frontiers. In 377 he did what no Orzas before him had tried and sent the whole of a field army, the best of the legions [[lore-westernwars|the Western Wars]] had made, across 570 miles of open sea to the [[place-aukhelathrgq|Khelathi delta]]. The fleets that carried it were the largest the Empire had assembled, and the grain that fed it had to follow in more.

The army landed at the delta and marched on [[place-khelaga|Khelaga]], where the river first divides. The Gar-Au met it with the chariot corps, and the corps broke on the legions' line ([[lore-vylconquest|The Vylarian Conquest]] tells the battle from the Khelathi bank).

## The Crowning

The river's priesthood crowns the commander of any army that holds the apex, and it crowned this one on the mound under the throne name [Zab'el'Qar I]{.name data-type="being/npc"}. He ruled as a Gar-Au for twelve years and was buried in the Khelathi manner. His son reigned after him, and the house closed in 395.

The chancery in [[place-orzara|Orzara]] heard of the crowning within the year. It entered the commander as a traitor, struck his name from every roll that carried it, and did not write it again. His own legions entered the Khelathi service with him, and the Empire's best army stayed on the far side of the sea.

## What It Cost

The Empire lost its strongest field force for as long as the house reigned. Barnakis died in 389, twelve years after the crossing, with no heir named and the army still across the water, and the succession that followed ([[lore-brkensuccsn|The Broken Succession]]) was fought without it.

## What It Left

- **[[place-chariotfld|The Chariot Field]].** The reed-flat below Khelaga, where the corps' dead and the Vylarian pit lie unread.
- **[[place-shortway|The short Way]].** Two tombs at [[place-zugezer|Zu-Gezer]], one of them a Vylarian general's under a Khelathi lintel.
- **A name nobody writes.** A senatorial house that does not speak of a forebear and a chancery that keeps no entry for him.
- **A saying.** The Khelathi say that even those who conquer the empire end by serving its gods.

## See Also

- [[lore-vylconquest|The Vylarian Conquest]]—the same battle from the Khelathi side
- [[lore-westernwars|The Western Wars]]—the campaigns that built the army
- [[lore-brkensuccsn|The Broken Succession]]—what followed the Orzas's death
- [[place-chariotfld|The Chariot Field]] · [[place-shortway|the Short Way of Amralo'Methu]]—what it left across the sea
- [[affiliation-vylarinmpr|Vylarian Empire]]
