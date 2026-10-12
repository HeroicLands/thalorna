---
shortcode: heladeastwar
name: {full: The Eastern War, aliases: [The Annexation of the League]}
type: lore
subType: history
description: "Between about 209 and about 214 AF, in the Age of Conquest under the Augustar Kàromphôs, the legions come over the mountains from Heliónis, a fleet takes the harbors in a season and the Byzarian League is annexed as a province, its Compact dissolved by edict and its passes, tariffs and muster passed to imperial officers."
tags: [history, hellad]
data:
  packFolder: byzaria
  events:
    - when: ~209
      until: ~214
      kind: conquest
      depth: region
      sources:
        - place-byzariargn
        - affiliation-byzarianlg
        - place-eastrnmrch
        - affiliation-vylarinmpr
        - affiliation-magnumclgm
      summary: >-
        The legions come over the mountains from Heliónis, and a fleet from the Vylarian coast takes the harbors in a season. The League is annexed as a province of the Empire. The Compact is dissolved by edict. The cities keep their councils, as Heliónis's did, and lose the passes, the tariffs and the muster to imperial officers.
      standing: attested
      names: [{name: the Annexation of the League, by: affiliation-byzarianlg}]
      where:
        locus: [place-byzariargn]
        reach:
          - place: place-eastrnmrch
            how: >-
              the imperial frontier forts are built in the passes, and the League later takes them as its marches
            knowledge: named
          - place: place-argyrteikhos2
            how: >-
              the pass-city holds out for two years before it surrenders on terms
            knowledge: named
          - place: place-byzariargn
            how: >-
              the province's ledgers are kept in the Sêmarion script and dated by the Vylarian Calendar for three centuries
            knowledge: named
      who:
        - {ref: affiliation-vylarinmpr, role: actor}
        - {ref: affiliation-byzarianlg, role: victim}
      follows:
        - event: lore-heladcompact
          how: ended
          note: the edict that annexes the League dissolves the Compact the cities swore
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The east came into the Empire by arms, as the west did, and the Empire left its cities their councils and their weights.
          agrees: full
        - by: affiliation-byzarianlg
          says: >-
            The Compact was dissolved by edict and kept in the cities' ledgers, and it was sworn again as soon as the garrisons thinned.
          agrees: full
      unresolved:
        - why the Empire turned east in the Age of Conquest, when its armies were committed to the west
---

The Collegium's own account of how Byzaría joined the system is a single phrase, "by formal conquest", and it is accurate. The conquest took five years.

## The Legions

The Augustar **Kàromphôs** reigned over the Empire in the Age of Conquest, from about 209, and in the first years of his reign the legions that were fighting in the west were not the only ones he sent out. A force came over the mountains from [[place-helionis|Heliónis]], where the Republic's old province had given the Empire a road, and a fleet from the Vylarian coast took the harbors of the eastern straits in a single season. The five cities of the League were cut from the sea and then from each other.

## The Edict

The Augustar annexed the League as a province by edict. The edict dissolved the Compact. The cities kept their councils, as Heliónis's cities had kept theirs after the conquest, and lost the passes, the tariffs and the muster to imperial officers. The League's council in the Merchant Hall of [[affiliation-khryshteikhos|Khrýshteíkhos]] ceased to meet.

[[lore-heladcitadel|The Silver Citadel]] held for two years behind its walls before it surrendered on terms, and its siege is the longest part of the war.

## What the War Left

- **The province of Byzaría**, which lasted three centuries.
- **The imperial frontier forts** in the passes, which the League takes as its marches after the legions leave.
- **The Sêmarion ledgers and the Vylarian Calendar**, which the province keeps for the rest of its imperial age.
- **The "formal conquest"** of the Magnum Collegium's account, which dates to this war and to no other.

## See Also

- [[lore-heladcitadel|The Siege of the Silver Citadel]]—the longest siege of the war
- [[lore-heladcompact|The Compact of the Five]]—the pact the edict dissolved
- [[affiliation-vylarinmpr|Vylarian Empire]] · [[affiliation-magnumclgm|Magnum Collegium]]
- [[skill-semrnscrpt|Sêmarion]]
