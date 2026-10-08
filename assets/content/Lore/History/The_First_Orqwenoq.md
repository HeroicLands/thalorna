---
shortcode: frstorqwnq
name: {full: The First Orqwenoq, aliases: [The Lantern Union]}
type: lore
subType: history
description: "About 190 BF the steppe tribes are forced together for the first time under one orqwen, who demands tribute of the Tower Cities and kills their chief city, Jilaq, when it refuses; the union breaks up on the orqwen's death and the count of the Lantern Union begins."
tags: [history]
data:
  packFolder: settinglore
  events:
    - id: raising
      when: ~-190
      kind: raising
      depth: region
      sources: [place-khzryndsrtrgn, lore-towercities, lore-swdsclndr]
      summary: >-
        An orqwen of the steppe forces the independent tribes into a single union under a personal dictatorship, the first of the three great unions the tribes remember. The union demands tribute of every city of the Tower League for the road across the waste. It breaks up into the tribes it was made from when the orqwen dies.
      standing: reconstructed
      names:
        - name: the Lantern Union
          by: place-khzryndsrtrgn
          gloss: the first great union, counted as year 1 of the steppe reckoning
      where:
        locus: [place-hskrrgn]
        reach:
          - place: place-khzryndsrtrgn
            how: >-
              the road across the waste passes from the cities to the tribes whose wells and grazing it crosses
            knowledge: named
      accounts:
        - by: place-khzryndsrtrgn
          says: >-
            The tribes have no tale of the orqwen's name or birth. They say a union was made, that it asked for what the cities would not give, and that it fell when the one who held it died.
          agrees: partly
      unresolved:
        - the founding orqwen's name and tribe
        - how long the union held before the orqwen died
    - id: fall
      when: ~-190
      kind: fall
      depth: region
      sources: [place-jilaq, lore-towercities, lore-bloodfield]
      summary: >-
        Jilaq, the chief city of the Tower League, refuses tribute as the league's charter requires, and the host sits before its ring wall for a season. When the wall is opened the city is killed in a day and a night, from the factors of a dozen peoples to the lamp-keepers and their families. The riders take what they can carry and lay out none of the dead, and the ground becomes a thin blood-field.
      standing: reconstructed
      where:
        locus: [place-jilaq]
        reach:
          - place: place-hskrrgn
            how: >-
              the tribes of the south edge of the sand country keep riders at the last cairn and charge for the detour
            knowledge: named
      accounts:
        - by: place-khzryndsrtrgn
          says: >-
            The city's dead were strangers to every rite the riders kept, and nobody has found a way to speak a city's worth of names to the four winds.
          agrees: full
      unresolved: [how many cities beside Jilaq refused and were taken]
---

The first of the steppe's great unions is remembered by what it did at one city, and the city is [[place-jilaq|Jilaq]].

## The Union

The tribes of the [[place-khzryndsrtrgn|Khazryn]] are independent, each under its own dowek, and nothing binds them to one another. For a few years about 190 BF one will did. An orqwen rose who forced the tribes together under a personal dictatorship, and the union he or she made, the orqwenoq, is the first of the three that the tribes count their years from. The tribes tell nothing of the orqwen's name. They tell what the union asked for and what it cost.

## The Demand

The union put one demand to every city of [[lore-towercities|the Tower League]]: pay tribute for the road. The league's charter forbade it, and the cities that refused were taken one after another. Jilaq, the chief city, held a season behind its ring wall and fell in a day and a night. The riders took the stock and the glass and rode out. They laid out none of the dead and spoke no names, because the league's dead were strangers to every rite the riders kept.

## What It Left

- **The field.** Jilaq is a thin blood-field, and the road bends three days south round it.
- **The wells.** With the cities gone, the wells of the road passed to the tribes whose grazing they stand on. The tribes keep them and sell passage, tribe by tribe.
- **The count.** The year the union rose is year 1 of the Lantern Union in the [[lore-swdsclndr|steppe reckoning]], and the count runs until the next banner rises.

The union broke up when its orqwen died, and the tribes went back to their wells.

## See Also

- [[place-jilaq|Jilaq]]—the city it killed
- [[lore-towercities|The Tower Cities]]—the league it ended
- [[lore-swdsclndr|The Sowides Reckoning]]—the count that begins with it
- [[lore-hndrdbnnrs|The Storm of the Hundred Banners]]—the second union
