---
shortcode: heladtruce
name: {full: The Truce of the Games, aliases: [The Herald's Terms]}
type: lore
subType: history
description: "At the Games after the War of the Harbors, about 552 AF, a graduate of the Silver Veil brokers among the cities' heralds the terms by which Helionite cities have fought since: war only in the season between the Games, no city to field a mage, the herald's crossing guaranteed, the dead always returned and no city ever sacked."
tags: [history, hellad, driftage]
data:
  packFolder: helionis
  events:
    - when: ~552
      kind: treaty
      depth: region
      sources:
        - place-helionis
        - affiliation-ctysttshlns
        - affiliation-kalydria
        - place-gamessanct
        - affiliation-ordoarcanis
      summary: >-
        At the Games after the War of the Harbors, a graduate of the Academy of the Silver Veil, Sôthamîra Thelkhîdês, brokers among the cities' heralds the terms by which Helionite cities have fought since: war only in the season between the Games, no city to field a mage, the herald's crossing guaranteed, the dead always returned, and no city sacked. The Thôrdimâlon welcomes the second clause and has enforced it with some pleasure ever since.
      standing: attested
      names:
        - {name: the Herald's Terms, by: affiliation-ctysttshlns}
        - {name: the five clauses, by: affiliation-kalydria}
      where:
        locus: [place-gamessanct]
        reach:
          - place: place-helionis
            how: >-
              a war between two cities is small, seasonal and ritual, and the citizen militias that fight it expect to go home
            knowledge: named
          - place: place-kalydria2
            how: >-
              the Academy's graduates are the region's brokers, and the Truce is the proof the city offers when it is asked why
            knowledge: named
      who:
        - {ref: affiliation-ctysttshlns, role: signatory}
        - {ref: affiliation-kalydria, role: author}
      follows:
        - event: lore-heladharbors
          how: answered
          note: the war that sent the dead home across a ridge is the one the terms are written to keep small
        - event: lore-heladsilverveil
          how: enabled
          note: the Academy trains the graduate who can sit among the heralds and be heard
      accounts:
        - by: affiliation-kalydria
          says: >-
            The cities had a custom and no words for it. A Kalydrian wrote the words down, which is what Kalydria has always been for.
          agrees: full
        - by: affiliation-ordoarcanis
          says: >-
            The Helionite cities have bound themselves not to make war with mages, and the Arcane Order has no quarrel with the Terms and has seen them kept.
          agrees: partly
          withholds: that the clause was written by cities that had already learned, from the Republic's war on them, what a mage in the field costs
      unresolved:
        - whether the five clauses were written down at the Games or recited by the heralds and written afterward
---

A Helionite militiaman, asked what the rules of war are, recites five of them without hesitation and adds that the fifth is the only one anybody has ever tested.

## The Games After the War

The meeting of the cities at the [[place-gamessanct|Sanctuary of the Games]] after [[lore-heladharbors|the War of the Harbors]] was the first at which cities that had fought one another that same year sat down in one sanctuary. The heralds met at the altar to swear the Games' own truce, and a graduate of the [[lore-heladsilverveil|Academy of the Silver Veil]], **Sôthamîra Thelkhîdês**, who had come as the companion of a Kalydrian herald, was asked by the heralds to say what the cities had in fact been doing for three summers.

She told them. The cities had fought in the season when the fields were bare, had sent their heralds across after each battle, had given up the dead and had not burned one another's walls. She proposed that they write down what they had done and keep to it.

## The Five Terms

- **The season.** Cities fight in the season between one Games and the proclamation of the next, and not within the sacred months on either side.
- **The mage.** No city fields a mage in a war against another Helionite city. The cities that remember the mage-warlords of the Republic's war want no more of them.
- **The herald.** A herald crosses any field, in any war, and his person is inviolable on it.
- **The dead.** The dead of a battle are returned to their own city for their own rites, and no city keeps another's.
- **The walls.** No city is sacked. A city that wins a war takes its terms from the loser's council and leaves the walls standing.

## The Arcane Order

The [[affiliation-ordoarcanis|Thôrdimâlon]] has no seat in the Games and no part in the Terms. It welcomes the second clause and enforces it with some pleasure, and it treats a Helionite city's breach of it as a matter for its own courts.

## What the Truce Left

- **The ritualized warfare** of the [[affiliation-ctysttshlns|city-states]], small, seasonal and fought by militias who expect to go home.
- **A season for war** and a season against it, kept by every city.
- **The Silver Veil's reputation** as the region's broker, which the Academy has kept since a graduate spoke at the altar.
- **The Arcane Order's one liking** among the laws of Heliónis.

## See Also

- [[lore-heladharbors|The War of the Harbors]]—the war the terms were written to keep small
- [[lore-firstgames|The First Games]]—the custom of the herald and the dead
- [[lore-heladsilverveil|The Founding of the Silver Veil]]—the Academy of the graduate who spoke
- [[place-gamessanct|The Sanctuary of the Games]]
