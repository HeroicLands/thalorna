---
shortcode: heladordinance
name: {full: The Ordinance of Arbiters, aliases: [The Burnt Yards Ordinance]}
type: lore
subType: history
description: "About 584 AF a feud between two shipping houses of Nesthiros burns the yards and half the harbor district in a night, and the League council answers with an ordinance: a dispute between chartered men goes to an arbiter both sides name, the guilds enforce the ruling, and a man who takes private revenge loses his charter and his contracts."
tags: [history, hellad, driftage]
data:
  packFolder: byzaria
  events:
    - when: ~584
      kind: law
      depth: region
      sources:
        - affiliation-byzarianlg
        - affiliation-nesthiros
        - place-nesthiros2
        - affiliation-khryshteikhos
        - lore-byzarianclt
      summary: >-
        A feud between two Nesthirian shipping houses burns the yards and half the harbor district in one night. The League council answers with an ordinance: a dispute between chartered men goes to an arbiter both sides name, the guilds enforce the ruling, and a man who takes private revenge loses his charter and his contracts. The first named arbiter, Sáfireze Dorashidek, sits in the rebuilt yards.
      standing: attested
      names:
        - {name: the Burnt Yards Ordinance, by: affiliation-nesthiros}
        - {name: the Arbiters' Charter, by: affiliation-byzarianlg}
      where:
        locus: [place-nesthiros2]
        reach:
          - place: place-byzariargn
            how: >-
              a dispute between houses goes to a named arbiter and not to the field, and the country has very little feud
            knowledge: named
          - place: place-khryshteikhos2
            how: >-
              the Merchant Hall passes the ordinance, and the guilds' enforcement of rulings begins as the Hall's decision
            knowledge: named
      who:
        - {ref: affiliation-byzarianlg, role: author}
        - {ref: affiliation-nesthiros, role: victim}
      follows:
        - event: lore-heladreswear
          how: enabled
          note: a council that has sworn to act together can pass an ordinance that binds every city's houses
      accounts:
        - by: affiliation-nesthiros
          says: >-
            Two houses burned the yards over a contract, and the city built them again in stone. The ordinance was the price of the stone.
          agrees: full
        - by: affiliation-byzarianlg
          says: >-
            Feud is a cost the League cannot carry. The ordinance counted it, and the arbiters have been cheaper ever since.
          agrees: partly
          withholds: that the two houses were the ordinance's first customers, and that the first ruling put the greater damages on the house that had broken the contract
      unresolved:
        - which of the two houses set the fire, which the arbiter's ruling does not say and the houses' own records dispute
---

A Bizarian asked why his country has so little feud answers that it is cheaper not to, and tells the story of the yards.

## The Fire

About 584 two shipping houses of [[place-nesthiros2|Nesthiros]] fell out over a contract for the carriage of silver, and each house decided that the other's ships were the proper price of the quarrel. On one night in that year the yards where both houses built and mended their hulls burned, and the fire took half the harbor district with it. The city's admiralty could not say which house had set it, and neither house would say.

## The Ordinance

The League council met in the Merchant Hall of Krusteikhos to count the cost, and answered with an ordinance in three parts.

- **The arbiter.** A dispute between chartered men goes to an arbiter whom both sides name, and the ruling is made on the clause and not on the man.
- **The guilds.** A ruling is enforced by the guilds and not by the city. A man who defies it is answerable to his guild's seal.
- **The revenge.** A man who takes private revenge loses his charter and his contracts. He is a Bizarian without the paper that makes him one.

## The First Arbiter

The first named arbiter, **Sáfireze Dorashidek**, sat in the yards when they were rebuilt in stone, and her first ruling was between the two houses that had burned them. The ruling names which of the two broke the contract, what the damages were and who paid for the stone, and neither house contested it. The stone yards stand on the same ground.

## What the Ordinance Left

- **The professional arbitrators**, who are named by both sides and paid by the quarrel.
- **Bizaria's "very little feud"**, a calm that the League's council counts as a saving.
- **Nesthiros's stone yards**, rebuilt after the fire.
- **A tolerance** for rival houses that began as arithmetic and has become a manner.

## See Also

- [[lore-byzarianclt|Bizarian]]—the culture of the bargain, in which arbitration stands in for feud
- [[lore-heladreswear|The Re-swearing of the Compact]]—the council that passed the ordinance
- [[affiliation-nesthiros|Nesthiros]]—the city the fire burned
