---
shortcode: heladreswear
name: {full: The Re-swearing of the Compact, aliases: [The Garrison Oath]}
type: lore
subType: history
description: "About 571 AF, with the imperial garrisons in the passes at a third of their strength and unpaid, the five cities' councils meet in the Merchant Hall of Krusteikhos, re-swear the Compact of 157 BF from the old text, pay the frontier forts' garrisons themselves, and take the three frontier districts as common territory under lords they commission."
tags: [history, hellad, driftage]
data:
  packFolder: byzaria
  events:
    - when: ~571
      kind: founding
      depth: region
      sources:
        - affiliation-byzarianlg
        - affiliation-khryshteikhos
        - place-khryshteikhos2
        - place-byzariargn
        - place-eastrnmrch
        - place-southrnmrch
        - place-northrnmrch
      summary: >-
        Almost six decades into the Drift the imperial garrisons in the passes are a third of their old strength and unpaid. The five cities' councils meet in the Merchant Hall of Krusteikhos under Kerdhanáhr Fótamikot, the council's chair, and re-swear the Compact of 157 BF from the old text. They pay the frontier forts' garrisons themselves, and because no city will let another hold the forts, the council takes the three frontier districts as common territory under lords it commissions.
      standing: attested
      names:
        - {name: the Garrison Oath, by: affiliation-khryshteikhos}
        - {name: the re-swearing, by: affiliation-byzarianlg}
      where:
        locus: [place-khryshteikhos2]
        reach:
          - place: place-byzariargn
            how: >-
              the League as it stands is the Compact sworn a second time, and the province's councils are a confederation again
            knowledge: named
          - place: place-eastrnmrch
            how: >-
              the imperial pass-forts become the League's way-forts, garrisoned by conscripts the five cities raise and paid from the common treasury
            knowledge: named
          - place: place-southrnmrch
            how: >-
              the southern caravan road becomes common territory under a lord the council commissions
            knowledge: named
          - place: place-northrnmrch
            how: >-
              the grain road's passes become common territory, and the lord's seat is by custom given to a house of the capital
            knowledge: named
      who:
        - {ref: affiliation-byzarianlg, role: founder}
        - {ref: affiliation-khryshteikhos, role: actor}
      follows:
        - event: lore-heladcompact
          how: enabled
          note: the text sworn in the Merchant Hall is the Compact of the five cities, read from the old copy
        - event: lore-heladeastwar
          how: answered
          note: the edict that dissolved the Compact is undone by the cities' own oath, whatever the chancery's roll says
        - event: lore-heladweighing
          how: enabled
          note: the councils that act together have done so before, in the Merchant Hall, over a pair of scales
      accounts:
        - by: affiliation-byzarianlg
          says: >-
            The Compact was never revoked, only unread. The councils read it aloud and found that it still said what it had always said.
          agrees: full
        - by: affiliation-khryshteikhos
          says: >-
            The garrisons were unpaid and the passes were open, and a city that waited for another to pay would be waiting still. The Hall paid.
          agrees: partly
          withholds: that Krusteikhos's bankers held the paper on which the garrisons were later paid
      unresolved:
        - whether the text read aloud at each session is the old copy, or a copy corrected since the council last read the original
---

The chair of the council of the [[affiliation-byzarianlg|Bizarian League]] opens each session by reading [[lore-heladcompact|The Compact of the Five]] aloud, and the clerks of the [Merchant Hall]{.name data-type="place/structure"} know the old text well enough to hear a clause go by that is not in it. The custom dates from The Re-swearing of the Compact, the afternoon the Compact was sworn a second time.

## The Garrisons

Almost six decades into [The Drift]{.name data-type="lore/calendar"}, the legions that had held the passes of the [[place-byzariargn|Bizaria Region]] were not coming back. The imperial garrisons in the way-forts had fallen to about a third of their old strength, and the chancery's paymaster sent coin to the east in smaller sums and later. A garrison that is not paid sells the passes, and the smugglers and the steppe bands had begun to buy.

No city could pay the forts alone. No city would let another pay them, because a garrison belongs to whoever holds its purse. For a generation the passes were held by the soldiers' loyalty to their own commanders and by nobody else's.

## The Hall

In about 571 the councils of the five cities met in the Merchant Hall of [[place-khryshteikhos2|Krusteikhos]] under **[Kerdhanáhr Fótamikot]{.name data-type="being/npc"}**, the chair of the council, and had the old copy of the [[lore-heladcompact|Compact]] brought out and read. The edict of the Orzas that had dissolved it was on the chancery's roll and nowhere else. The councils swore the old text over again, in the order of the old text, and in the Hall where the five had first met.

They did three things. They paid the garrisons themselves, from a common treasury the five filled in proportion to their trade. They took the three frontier districts as common territory, outside any city's charter, because each city would sooner see a district belong to none than to another. And they set a lord over each district by commission of the council, answerable to the council and to nobody else.

## The Chancery

The chancery did not contest the oath. The Orzas's roll kept the province of Bizaria, and the League's council sat in the Merchant Hall and dealt with the east. When the [[affiliation-vylarinmpr|Vylarian Empire]] settled with its former provinces some five decades later, it treated the League as a signatory ([[lore-crownssettle|The Settlement of the Crowns]]).

## What the Oath Left

- **The three marches**, the [[place-eastrnmrch|Eastern March]], the [[place-southrnmrch|Southern March]] and the [[place-northrnmrch|Northern March]], each under a lord the council commissions.
- **The League as it stands**, a confederation of five cities with a joint army and a common treasury.
- **The custom** that the chair of the council reads the Compact aloud at each session's opening.
- **The way-forts**, which were the Empire's and are the League's.

## See Also

- [[lore-heladcompact|The Compact of the Five]]—the oath sworn again
- [[lore-heladeastwar|The Eastern War]]—the annexation that dissolved it
- [[lore-crownssettle|The Settlement of the Crowns]]—the settlement that recognized what the oath had made
- [[affiliation-byzarianlg|Bizarian League]] · [[affiliation-khryshteikhos|Krusteikhos]]
