---
shortcode: heladweighing
name: {full: The Weighing at Krusteikhos, en: [The Brass Standard]}
type: lore
subType: history
description: "About 455 AF the city weigher of Krusteikhos weighs the tax-farmers' brass standard against the city's own in the Merchant Hall and proves it heavy, a riot burns the customs house, and the Orzas's commissioners concede that customs in the five cities are weighed on the cities' own standards, kept by an officer each city elects."
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
        - affiliation-tolvan
        - lore-byzarianclt
      summary: >-
        A generation after the Tolvan put Bizaria's customs out to tax-farmers, the city weigher of Krusteikhos, Dokharash Harmodakit, publicly weighs the tax-farmers' brass standard against the city's in the Merchant Hall and proves it heavy. The riot that follows burns the customs house. The Orzas's commissioners concede that customs in the five cities are weighed on the cities' own standards, kept by an officer each city elects.
      standing: attested
      names: [{name: the Brass Standard, by: affiliation-khryshteikhos}]
      where:
        locus: [place-khryshteikhos2]
        reach:
          - place: place-byzariargn
            how: >-
              every city keeps its standard in its Merchant Hall under an elected Warden of the Weights, and the office is the highest civic honor in the League; the five councils won the concession by acting together for the first time since the Compact
            knowledge: named
      who: [{ref: affiliation-khryshteikhos, role: actor}, {ref: affiliation-tolvan, role: victim}]
      follows:
        - event: "lore-arzanasedict#edicts"
          how: caused
          note: the Tolvan and its tax-farmers are the Edicts' creation, and their standard is the one proved false
        - event: lore-heladcompact
          how: enabled
          note: the councils that act together were first bound together by the Compact
      accounts:
        - by: affiliation-khryshteikhos
          says: >-
            The city's weight was true and the tax-farmers' was not, and the Hall said so with the two on a scale.
          agrees: full
        - by: affiliation-tolvan
          says: >-
            A Tolar's standard was found heavy in one city, and the Orzas's commissioners corrected the error on the spot.
          agrees: partly
          withholds: that the customs house burned and the correction was a concession
      unresolved:
        - how heavy the standard was, which the Hall's record states and the Tolvan's does not
---

The highest civic honor in any of the five cities is to be named Warden of the Weights, and the first Warden is named for The Weighing at Krusteikhos, an afternoon in the [Merchant Hall]{.name data-type="place/structure"}.

## The Standard

A generation after [[lore-arzanasedict|the Edicts of Arzanas]] gave [[affiliation-tolvan|the Tolvan]] its charter, the customs of [[place-byzariargn|Bizaria]] were farmed out to Tolari. A Tolar paid the Tolvan for the right to collect and made his profit above his bid, and the surest way to profit above a bid was to weigh the merchants' goods on a heavy standard.

The city weigher of [[place-khryshteikhos2|Krusteikhos]], [Dokharash Harmodakit]{.name data-type="being/npc"}, suspected the tax-farmers' standard was brass cast heavy. In about 455 he had it carried into the Merchant Hall, set the city's own standard on one pan of a balance and the Tolari's on the other, and weighed them in front of the council, the guilds and the whole of the floor. The standard was heavy.

## The Riot

The merchants who had paid on that standard for a generation did not wait for the Tolvan to answer. They burned the customs house that night. The Orzas's commissioners came east with the legions, found a province that had weighed its own truth in public, and conceded the point. Customs in the five cities would be weighed on the cities' own standards, and each city would keep its standard in its own Merchant Hall under an officer it elected.

## What the Weighing Left

- **The Warden of the Weights**, the elected officer who keeps each city's standard, and whose office is the highest civic honor in the [[affiliation-byzarianlg|League]].
- **The standards**, kept in each Merchant Hall.
- **The first common act** of the five councils since [[lore-heladcompact|the Compact]], remembered whenever the councils swear the Compact.
- **A conviction** that a reputation for keeping terms is infrastructure, which the [[lore-byzarianclt|Bizarian]] people count from this afternoon.

## See Also

- [[lore-arzanasedict|The Edicts of Arzanas]]—the edicts that created the Tolvan
- [[lore-heladcompact|The Compact of the Five]]—the pact whose councils acted together again
- [[affiliation-khryshteikhos|Krusteikhos]]
- [[lore-byzarianclt|Bizarian]]—the culture of the bargain
