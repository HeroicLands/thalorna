---
shortcode: sealedwordfnd
name: {full: The Founding of the Sealed Word, aliases: [The Chartering at Ólvestria]}
type: lore
subType: history
description: "About 421 AF, when the Edicts of Arzánas closed the western wars, Árdavon's priesthood chartered a sworn order at Ólvestria to ride to broken oaths, hear them and compel the remedy."
tags: [history]
data:
  packFolder: tarvenia
  events:
    - when: ~421
      kind: founding
      depth: region
      sources:
        - affiliation-ordrsldwrd
        - place-olvestria
        - affiliation-ardavon
        - affiliation-arldnpnthn
        - affiliation-kingdmtrvn
      summary: >-
        When the Edicts of Arzánas close the western wars, the crowns of Aurèldía lose the one power that had kept oaths between them, the legions. Árdavon's priesthood charters a sworn order at Ólvestria to ride to broken oaths, hear them and compel the remedy, and the first entry in its register is a boundary oath between two Tarvénian lords.
      standing: attested
      names:
        - {name: the Order of the Sealed Word, by: affiliation-ordrsldwrd}
        - {name: the Oath-Wardens, by: place-olvestria}
      where:
        locus: [place-olvestria]
        reach:
          - place: place-tarvenirgn
            how: the Tarvénian lords, who settled oaths with the sword, bring their disputes to a hearing that answers in a god's name
            knowledge: named
          - place: place-aureldirgn
            how: each crown of Aurèldía licenses the order to hold hearings in its courts and renews the license as a political act
            knowledge: named
          - place: place-provenzrgn
            how: the merchant cities, whose contracts the Empire's courts once protected, take their oath-disputes to the order's chapter houses
            knowledge: named
      who:
        - {ref: affiliation-ardavon, role: founder}
        - {ref: affiliation-ordrsldwrd, role: founder}
        - {ref: affiliation-kingdmtrvn, role: signatory}
      follows:
        - event: lore-arzanasedict
          how: caused
          note: the edicts that closed the western conquests took away the Empire's courts and legions, which had kept the crowns' oaths
      accounts:
        - by: affiliation-ordrsldwrd
          says: >-
            An oath sworn before Árdavon binds until it is released, and someone must ride to the one who broke it.
          agrees: full
        - by: affiliation-kingdmtrvn
          says: >-
            The order is licensed to hold hearings in the High King's courts, and its rulings bind nobody.
          agrees: partly
          withholds: that the license rests on the crown's goodwill and can be refused
      unresolved: [which two lords swore the oath that opened the register]
---

The first entry in the master register at Ólvestria is a boundary oath between two lords of Tarvénia. The order that keeps the register was founded to hear exactly that kind of dispute, and the register has not stopped growing.

## The Gap

For three centuries the legions had kept the peace between the crowns of Aurèldía, in the sense that no crown could break an oath with another without the Empire noticing. The Edicts of Arzánas closed the western wars about 418 AF ([[lore-arzanasedict|The Edicts of Arzánas]]), and with them closed the Empire's willingness to be the court of last appeal. Oaths sworn between lords, between cities and between crowns were now guaranteed by nothing except the swearer's honor, and the swearers knew it.

## The Charter

The priesthood of [[affiliation-ardavon|Árdavon]], the god of oaths and gates, saw the gap before the crowns did. It chartered a sworn order at [[place-olvestria|Ólvestria]], the city of oaths and gates, with a rule that was simple to state: a brother of the order would ride to where a binding oath had been broken, hear the matter, and compel the oath-breaker to make it good, by trial-by-combat if no other remedy answered. The order's brothers were knights, so that a petitioner whose oath-breaker was too strong for the local magistrates could still be answered.

The first petition the order accepted was a boundary oath between two Tarvénian lords, sworn on a stone and broken within the year. The brother who rode to hear it ruled in a day and was obeyed. Neither lord had expected the order to rule against the stronger.

## The Register

The order keeps a master register at Ólvestria of every contested oath it has ruled on, and its **Council of the Seal** meets there every quarter. It is licensed by each of the Aurèldían crowns to hold hearings in their courts, and the license is renewed as a political matter. Its rulings bind nobody in law and are obeyed in practice, because the order refuses petitions it cannot substantiate and does not favor the powerful.

## What It Left

- **The mother-house and master register at Ólvestria.** The archive of three centuries of contested oaths, whose keys the Senior Brothers wear at the throat ([[affiliation-ordrsldwrd|The Order of the Sealed Word]]).
- **The Council of the Seal.** Twelve Senior Brothers from the five kingdoms.
- **The order's license in each crown.** A standing that every crown is reluctant to confirm and unwilling to refuse.

## See Also

- [[affiliation-ordrsldwrd|The Order of the Sealed Word]]—the order
- [[place-olvestria|Ólvestria]]—where it was chartered
- [[lore-arzanasedict|The Edicts of Arzánas]]—the edicts that left the gap
- [[affiliation-ardavon|The Faith of Árdavon]]
