---
shortcode: southfamine
name: {full: The Famine in the South}
type: lore
subType: history
description: "The southern rice harvests of Tantsou failed several years running while the rain called by Wongsen's sorcerers kept the delta green, and the dry provinces bought Wongsen's rice; the records give it no year."
tags: [history, tantsou]
data:
  culture: tantsouclt
  packFolder: tantsou
  events:
    - when: unknown
      kind: famine
      depth: region
      sources:
        - affiliation-mwonouprv
        - affiliation-wongsenprv
        - place-jaunou
        - place-zhowen
        - lore-tantsouclt
      summary: >-
        The southern rice harvests fail several years running: crops wither, smaller rivers dry in their beds, and the granaries of the southern uplands stand empty. The rain the water-gifted Wandwo of the Prince of Wongsen call keeps falling on the delta, and the dry provinces buy his rice at the price he names.
      standing: single-source
      where:
        locus: [place-mwonouplnd]
        reach:
          - place: place-wongsendlta
            how: >-
              the delta's harvests rise while other provinces go dry, and the other Princes come to its granaries to buy rice
            knowledge: named
          - place: place-zhowen
            how: >-
              the tribute grain of the dry provinces falls short, and the price of rice on both shores follows the granaries of Wongsen
            knowledge: named
      who: [{ref: lore-nouwen, role: victim}]
      unresolved:
        - whether the Prince of Wongsen's sorcerers are behind the drought
        - whether the failure is a breakdown of classification in the domains of Earth and Water or a sign that the Mandate of Heaven is weakening
---

The Famine in the South is the failure of the southern rice harvests of the [[affiliation-tantsouempr|Empire of Tantsou]], several years running. Crops withered, smaller rivers dried in their beds, and the granaries of the southern uplands stood empty. The records give it no year; its years are the first years of the young Emperor's reign ([[lore-tantsouaccsn|The Young Emperor's Accession]]).

[[place-jaunou|Jaunou]], the Yellow Field, stands at its heart, where the river is dry in its bed and the district granaries are open and empty, and the famine of the southern uplands is the famine of [[affiliation-mwonouprv|Mwonou Province]]. The delta of [[affiliation-wongsenprv|Wongsen Province]] is the exception. Among its Prince's [[lore-wanduo|Wandwo]] is a gifted set with an affinity for water, the rain they call falls on the delta and its coast, and his harvests have risen while the other provinces went dry. The other Princes, and the granaries of [[place-zhowen|Zhowen]], buy his rice at the price he names.

Some at court say the Prince of Wongsen's sorcerers are behind the drought, and nobody has proven it. The [[lore-tanchei|Tanchei]] are divided between a reading of broken classification in the domains of Earth and Water and a reading that the [[lore-mandatehvn|Mandate of Heaven]] is weakening, which no scholar puts in writing.

## See Also {#see-also}

[[affiliation-mwonouprv|Mwonou Province]]
: the province whose uplands the famine holds

[[affiliation-wongsenprv|Wongsen Province]]
: the province whose sorcerers bring rain to the delta

[[place-jaunou|Jaunou]]
: the market town at the heart of the famine

[[lore-tantsouclt|The Tantsou]]
: the two readings of the failed harvests
