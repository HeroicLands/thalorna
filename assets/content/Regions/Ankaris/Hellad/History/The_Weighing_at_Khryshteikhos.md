---
shortcode: heladweighing
name: {full: The Weighing at Khrýshteíkhos, aliases: [The Brass Standard]}
type: lore
subType: history
description: "About 455 AF the city weigher of Khrýshteíkhos weighs the tax-farmers' brass standard against the city's own in the Merchant Hall and proves it heavy, a riot burns the customs house, and the Augustar's commissioners concede that customs in the five cities are weighed on the cities' own standards, kept by an officer each city elects."
tags: [history, hellad, peaceage]
data:
  packFolder: byzaria
  events:
    - when: ~455
      kind: charter
      depth: region
      sources:
        - place-khryshteikhos2
        - affiliation-khryshteikhos
        - affiliation-byzarianlg
        - affiliation-curiafscls
        - lore-byzarianclt
      summary: >-
        A generation after the Curia Fiscalis put Byzaría's customs out to tax-farmers, the city weigher of Khrýshteíkhos, Dôkharash Harmôdákit, publicly weighs the tax-farmers' brass standard against the city's in the Merchant Hall and proves it heavy. The riot that follows burns the customs house. The Augustar's commissioners concede that customs in the five cities are weighed on the cities' own standards, kept by an officer each city elects.
      standing: attested
      names: [{name: the Brass Standard, by: affiliation-khryshteikhos}]
      where:
        locus: [place-khryshteikhos2]
        reach:
          - place: place-byzariargn
            how: >-
              every city keeps its standard in its Merchant Hall under an elected Warden of the Weights, and the office is the highest civic honor in the League; the five councils won the concession by acting together for the first time since the Compact
            knowledge: named
      who:
        - {ref: affiliation-khryshteikhos, role: actor}
        - {ref: affiliation-curiafscls, role: victim}
      follows:
        - event: "lore-arzanasedict#edicts"
          how: caused
          note: the Curia Fiscalis and its tax-farmers are the Edicts' creation, and their standard is the one proved false
        - event: lore-heladcompact
          how: enabled
          note: the councils that act together were first bound together by the Compact
      accounts:
        - by: affiliation-khryshteikhos
          says: >-
            The city's weight was true and the tax-farmers' was not, and the Hall said so with the two on a scale.
          agrees: full
        - by: affiliation-curiafscls
          says: >-
            A Publicar's standard was found heavy in one city, and the Augustar's commissioners corrected the error on the spot.
          agrees: partly
          withholds: that the customs house burned and the correction was a concession
      unresolved:
        - how heavy the standard was, which the Hall's record states and the Curia's does not
---

The highest civic honor in any of the five cities is to be named Warden of the Weights, and the first Warden is named for an afternoon in the Merchant Hall.

## The Standard

A generation after [[lore-arzanasedict|the Edicts of Arzánas]] gave the [[affiliation-curiafscls|Curia Fiscalis]] its charter, the customs of Byzaría were farmed out to Publicarii. A Publicar paid the Curia for the right to collect and made his profit above his bid, and the surest way to profit above a bid was to weigh the merchants' goods on a heavy standard.

The city weigher of [[place-khryshteikhos2|Khrýshteíkhos]], **Dôkharash Harmôdákit**, suspected the tax-farmers' standard was brass cast heavy. In about 455 he had it carried into the Merchant Hall, set the city's own standard on one pan of a balance and the Publicarii's on the other, and weighed them in front of the council, the guilds and the whole of the floor. The standard was heavy.

## The Riot

The merchants who had paid on that standard for a generation did not wait for the Curia to answer. They burned the customs house that night. The Augustar's commissioners came east with the legions, found a province that had weighed its own truth in public, and conceded the point. Customs in the five cities would be weighed on the cities' own standards, and each city would keep its standard in its own Merchant Hall under an officer it elected.

## What the Weighing Left

- **The Warden of the Weights**, the elected officer who keeps each city's standard, and whose office is the highest civic honor in the League.
- **The standards**, kept in each Merchant Hall.
- **The first common act** of the five councils since the Compact, remembered whenever the councils swear the Compact.
- **A conviction** that a reputation for keeping terms is infrastructure, which the Byzarians count from this afternoon.

## See Also

- [[lore-arzanasedict|The Edicts of Arzánas]]—the edicts that created the Curia Fiscalis
- [[lore-heladcompact|The Compact of the Five]]—the pact whose councils acted together again
- [[affiliation-khryshteikhos|Khrýshteíkhos]]
- [[lore-byzarianclt|Byzarian]]—the culture of the bargain
