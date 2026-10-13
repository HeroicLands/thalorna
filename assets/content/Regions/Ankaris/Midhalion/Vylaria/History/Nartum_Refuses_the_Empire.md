---
shortcode: nartumrefuse
name:
  full: Nartûm Refuses the Empire
  aliases: [The Anointing of Dharonôs, The Break with the Ôrkhaimâ]
type: lore
subType: history
description: "About 224 AF, after the Ústaran Schism, the Ôrzâs Kàromphôs declines to proscribe the Black Flame; Nartûm's high priesthood withdraws from imperial obedience, anoints its own king, Dharonôs, and raises the Order of the Sacred Flame to hold its walls."
tags: [history, vylaria, ageconquest]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: break
      when: ~224
      kind: secession
      depth: region
      sources:
        - affiliation-hlykngdmnrtm
        - place-nartum
        - place-nartumkngdm
        - affiliation-blackflame
        - affiliation-sacredforge
      summary: >-
        After the Ústaran Schism the orthodox clergy ask the Ôrzâs Kàromphôs to proscribe the Black Flame, and he declines, because it has temples in his capital and officers in his legions. The high priesthood of Nartûm, the oldest sacred city of the heartland, withdraws from imperial obedience and anoints a king of its own, Dharonôs. It raises the Order of the Sacred Flame to hold its walls. The legions sent to reduce the city turn back at the first winter, and no Ôrzâs has tried again.
      standing: attested
      where:
        locus: [place-nartum]
        reach:
          - place: place-nartumkngdm
            how: >-
              the land the priesthood holds keeps no Vylarian magistrate, speaks an archaic dialect of Vylari as a mark of the break, and is ruled by anointed kings
            knowledge: named
          - place: place-orzara
            how: >-
              the Black Flame keeps a great temple of its own in the Temple District, beside the temples of the pantheon whose clergy asked the throne to close it
            knowledge: named
          - place: place-alyssa
            how: >-
              the Night of Ashes is a public festival in the commercial cities, which the throne's refusal to proscribe the faith has left the orthodox clergy no way to stop
            knowledge: named
      who:
        - {ref: affiliation-hlykngdmnrtm, role: actor}
        - {ref: affiliation-vylarinmpr, role: victim}
        - {ref: affiliation-blackflame, role: instrument}
      follows:
        - event: lore-ustaranschsm
          how: caused
          note: the orthodox clergy asked the throne to proscribe a faith that had not existed a generation earlier
      accounts:
        - by: affiliation-hlykngdmnrtm
          says: >-
            The Empire is a corrupted institution that strayed from the true path, and Nartûm kept the path.
          agrees: partly
          withholds: that the first winter, and not the kingdom's arms, turned the legions back
        - by: affiliation-vylarinmpr
          says: >-
            Nartûm is a wayward province that will come back, and the Empire's policy of toleration was never the cause.
          agrees: disputes
      unresolved: [whether the legions were ordered to take the city or to withdraw]
---

The secretary of a Nartûmese priest-noble, briefing an envoy from Ôrzâra before an audience, gives the kingdom's version in one sentence: "Your throne was asked to choose between the fire that makes and the fire that takes, and he said that both were welcome in his capital." It is the whole of the quarrel, and neither side has found a way to add to it.

## The Request

The [[lore-ustaranschsm|Ústaran Schism]] split the Forge-Lord's faith into the [[affiliation-sacredforge|Sacred Forge]] and the [[affiliation-blackflame|Black Flame]] about 220. The orthodox clergy of the Empire went to the Ôrzâs **Kàromphôs** and asked him to proscribe the new faith. He refused. The Black Flame had temples in his capital and officers in his legions, and the Empire's law permitted every faith that did not threaten the stability of the state.

## The Withdrawal

The high priesthood of [[place-nartum|Nartûm]], the oldest sacred city of the heartland, did not accept the answer. About 224 it withdrew from imperial obedience. It anointed a king of its own, **Dharonôs**, the first to take the throne from the priesthood's hand, and raised the Order of the Sacred Flame, a body of knights, to hold the city's walls and the land around it.

The Ôrzâs sent legions to bring the city back. They reached Nartûm in the autumn, found its gates shut and its knights on the walls, and turned back at the first winter. No Ôrzâs has sent a second army.

## What It Left

- **The Holy Kingdom.** An independent theocratic monarchy in the heartland of the Empire, whose king is anointed by the priesthood and has been deposed by it.
- **Two verdicts.** Nartûm calls the Empire a corrupted institution that has strayed, and the Empire calls Nartûm a wayward province that will come back. Both are said politely, in the same language.
- **An archaic dialect.** Nartûm's people speak an older form of Vylari as a mark of the break, and Vylarian envoys learn it before they go.
- **No Ordo.** The Ordo Arcanis has no presence in the kingdom, where mages who work answer to the priesthood.
- **The open temples of the Black Flame.** In Ôrzâra and in the commercial cities of Alyssa, where the Night of Ashes is a public festival.

## See Also

- [[lore-ustaranschsm|The Ústaran Schism]]—the quarrel the Ôrzâs would not settle
- [[affiliation-hlykngdmnrtm|Holy Kingdom of Nartûm]]—the kingdom the withdrawal made
- [[place-nartum|Nartûm]]—the holy city that held its walls
- [[affiliation-blackflame|The Black Flame]]—the faith the Empire has never proscribed
