---
shortcode: calypsacivilwar
name: {full: The Civil War of Kalipsa}
type: lore
subType: history
description: "About 470 AF a Harbormaster who would not give up the office brought on a civil war among Kalipsa's houses, fought in the harbor and the streets of the old city; the houses that won it limited the Harbormaster to a single term and built the Sea-Law Hall."
tags: [history]
data:
  culture: kalipsanclt
  packFolder: calypsa
  events:
    - when: ~470
      kind: war
      depth: region
      sources:
        - affiliation-calypsa
        - place-calypsacity
        - place-calypsaisle
        - place-sealawhall
        - affiliation-captnscncl
        - affiliation-hsetvarnidrok
      summary: >-
        A Harbormaster who will not give up the office brings on a civil war among the houses of Kalipsa, fought in the harbor and in the streets of the old city. The houses that win it give the Harbormaster a single term with no second to follow, and they build the Sea-Law Hall so that the Sea-Law is heard under a roof that belongs to no house. House Tvarnidrok fights on the winning side. The rule has been honored since without exception.
      standing: attested
      where:
        locus: [place-calypsacity, place-calypsaisle]
        reach:
          - place: place-sealawhall
            how: the hall that is built after the war is the Sea-Law's own roof, and the arbitrators have heard the Sea-Law there ever since
            knowledge: named
      who:
        - {ref: affiliation-hsetvarnidrok, role: actor}
        - {ref: affiliation-captnscncl, role: instrument}
      accounts:
        - by: affiliation-calypsa
          says: >-
            A Harbormaster would not give up the office, and the houses fought it out in the harbor and the old streets; the houses that won gave the office one term and the Sea-Law a roof of its own.
          agrees: full
      unresolved:
        - who the Harbormaster was, and which houses stood with him
        - how long the fighting lasted
---

In Kalipsa the Harbormaster serves a single three-year term and may not serve the next. The civil war of about 470 AF gave the rule, and it has been honored since without exception.

## The War

A Harbormaster would not give up the office, and that refusal brought on a civil war among the houses of [[place-calypsacity|Kalipsa]]. It was fought in the harbor and in the streets of the old city. The island's accounts say no more of it: no name for the Harbormaster, no list of the houses that stood with him, no length for the fighting.

[[affiliation-hsetvarnidrok|House Tvarnidrok]] fought on the side that won.

## The Settlement

The houses that won did two things. They gave the Harbormaster a single term with no second to follow it ([[affiliation-captnscncl|The Captains' Council]]). They also built [[place-sealawhall|the Sea-Law Hall]], so that the [[lore-sealaw|Sea-Law]] would be heard under a roof that belonged to no house. The arbitrators had heard cases on the quay before there was a hall.

The war falls in the years when the Empire's western conquests were closed and the west paid and was left alone ([[lore-arzanasedict|The Edicts of Arzanas]]).

## What It Left

- **The single term.** The Harbormaster is elected at the spring sitting of a term's last year, and the outgoing Harbormaster may not serve the next term ([[affiliation-captnscncl|The Captains' Council]]).
- **The Sea-Law Hall.** The present hall, with a roll of hearings that runs back unbroken to its building ([[place-sealawhall|The Sea-Law Hall]]).
- **Tvarnidrok's standing.** The house fought on the winning side, and four of its heads have held the office since ([[affiliation-hsetvarnidrok|Tvarnidrok]]).

## See Also

- [[affiliation-calypsa|Kalipsa]]—the city-state the war was fought in
- [[place-calypsacity|Kalipsa, the city]] · [[place-calypsaisle|the Isle of Kalipsa]]
- [[lore-sealaw|The Sea-Law]]—heard in the hall the houses built
- [[lore-southrnfleets|The Southern Fleets]]—the shared event that followed
