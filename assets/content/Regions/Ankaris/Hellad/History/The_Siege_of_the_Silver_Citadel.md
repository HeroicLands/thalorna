---
shortcode: heladcitadel
name: {full: The Siege of the Silver Citadel, aliases: [The Two Winters]}
type: lore
subType: history
description: "From about 212 to about 214 AF the pass-city of Argirteikhos holds for two years against the legions under Mathirkar Gheranikot, fed by its mines' tunnels after the road is cut, and surrenders on terms that leave it its walls, its own garrison and a seat beside an imperial usos."
tags: [history, hellad, peaceage]
data:
  packFolder: byzaria
  events:
    - when: ~212
      until: ~214
      kind: siege
      depth: region
      sources:
        - affiliation-argyrteikhos
        - place-argyrteikhos2
        - place-eastrnmrch
        - affiliation-vylarinmpr
      summary: >-
        The pass-city holds for two years under Mathirkar Gheranikot, fed by its mines' tunnels after the road is cut. It surrenders on terms: the city keeps its walls and its own garrison under an imperial usos of the pass, who sits with the city council. The usos's office survives the Empire as the military governor's seat on the League council.
      standing: attested
      names:
        - {name: the Two Winters, by: affiliation-argyrteikhos}
        - {name: the Vylarian Steps, by: place-argyrteikhos2}
      where:
        locus: [place-argyrteikhos2]
        reach:
          - place: place-eastrnmrch
            how: >-
              the imperial frontier forts of the pass road are built in the years after the siege, and the League later takes them as its marches
            knowledge: named
          - place: place-byzariargn
            how: >-
              the League council keeps a seat for the pass-city's military governor, which the other four cities have never been able to remove
            knowledge: named
      who:
        - {ref: affiliation-argyrteikhos, role: victim}
        - {ref: affiliation-vylarinmpr, role: actor}
      follows:
        - event: lore-heladeastwar
          how: caused
          note: the siege is the longest part of the legions' war in the east
      accounts:
        - by: affiliation-argyrteikhos
          says: >-
            The mines fed us when the road did not, and the terms we took were the terms we would have asked for on the first day.
          agrees: partly
          withholds: how many of the garrison died of the second winter
        - by: affiliation-vylarinmpr
          says: >-
            The pass-city was taken on honorable terms, and its walls and garrison were left it as a mark of respect.
          agrees: partly
      unresolved:
        - how the city was fed through two winters, and which of the mine tunnels carried the grain
---

The children of [[place-argyrteikhos2|Argirteikhos]] play on a mountainside below the walls, on a ramp and two level camps left by The Siege of the Silver Citadel that the garrison calls **the [Vylarian Steps]{.name data-type="place/site"}**, and they call it what their parents do.

## The Siege

When the legions came over the pass the commander of the citadel, **[Mathirkar Gheranikot]{.name data-type="being/npc"}**, shut the gates and cut the road behind him. The legions built their ramp up the mountain below the walls and their two camps beside it, and for two years they did not move. The city lay above them with its silver mines. The mines ran in tunnels under the mountain, and the tunnels carried grain and water into the city and, some say, the sick out of it. The tunnels are why a siege that should have ended in one winter ended in the third.

## The Terms

The Citadel surrendered on terms. The city kept its walls and its own garrison, and the [[affiliation-vylarinmpr|Vylarian Empire]] placed over it an imperial _usos_ (prefect) of the pass, who sat with the city council and spoke for the Orzas. The _usos_'s office outlasted the Empire's rule: when the legions marched away it became the **military governor**, and the governor sits to this day on the council of the [[affiliation-byzarianlg|Bizarian League]] beside the merchant-princes.

## What the Siege Left

- **The Vylarian Steps**, the ramp and two camps on the mountain, where the garrison drills.
- **The military governor's seat** on the League council.
- **The sealed tunnels**, some of the mine workings closed since the siege.
- **The city's own garrison**, which the Empire left under arms and which the League inherits.

## See Also

- [[lore-heladeastwar|The Eastern War]]—the war this siege belongs to
- [[affiliation-argyrteikhos|Argirteikhos]] · [[place-argyrteikhos2|The city of Argirteikhos]]
- [[place-eastrnmrch|Eastern March]]
