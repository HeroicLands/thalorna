---
shortcode: vorgaldcut
name: {full: The Cutting of Vorgald, en: [The Khazari Reach Aelwyth]}
type: lore
subType: history
description: "Around 3100 BF the Khazari cut Vorgald in the eastern Ironfells—the westernmost hold they ever placed and the only one reached across open sea—and bring across the farmers beneath it who become the Vardain."
tags: [history, spine]
data:
  packFolder: settinglore
  events:
    - when: ~-3100
      kind: raising
      depth: world
      sources: [place-ironfells, lore-flkkhazar, lore-grukaraelwyth]
      summary: >-
        In the late centuries of Khazartúrn the Khazari carry a hold further west than they ever carry another, across open sea, and cut Vorgald in the eastern Ironfells of Aelwyth. Because a hold cannot import what it eats, the Khazari bring a small company of humans across with them to farm beneath it, a much older people than the Pelwar. Their descendants become the Vardain, and Aelwyth becomes the one country where both Elder Races are living on the same ground.
      standing: single-source
      where:
        locus: [place-vorgald]
        reach:
          - place: place-vardainvalleys
            how: >-
              grain, cheese, meat, fodder and fuel have gone up to the Gate on a schedule unaltered in centuries, and Khazari engineers come down to keep the terraces and the rock-cut granaries working
            knowledge: named
          - place: place-aelwyth
            how: >-
              the island is the one country in the world where Sinale and Khazari hold ground together, which is why what happens elsewhere seven centuries later is answered here rather than accepted
            knowledge: named
      who: [{ref: lore-flkkhazar, role: actor}, {ref: lore-vardain, role: instrument}]
      follows:
        - event: lore-khazturnrsd
          how: enabled
          note: a late work of Khazartúrn's own centuries rather than of the first settlement
        - event: lore-firstfarmr
          how: enabled
          note: the practice of making farmers at a gate was two thousand years old when it was carried across the water
      accounts:
        - by: lore-flkkhazar
          says: >-
            The date is ours and it is approximate. Vorgald is the far western end of the reach, on an island, across open water, at the edge of the country its founders knew.
          agrees: partly
          withholds: everything else about the hold
        - by: place-aelwyth
          says: Nothing. No Aelwythan record goes anywhere near it.
          agrees: silent
      unresolved: [how a date held inside a hold reaches anybody outside it]
---

The Cutting of Vorgald made a hold somewhere in the eastern heights of [[place-ironfells|the Ironfells]], where the range meets the
sea cliffs: [[place-vorgald|Vorgald]]. That it exists is known. Very little else is.

The [[lore-flkkhazar|Khazár Folk]], the Deep Folk, came to this range while the city described in [[lore-khazarturn|the Fall of Khazartúrn]] still stood and its people were
still carrying holds outward from it. Vorgald is the far western end of that reach: a hold on an
island, across open water, at the edge of the country its founders knew. Because a hold cannot import
what it eats, making one here meant bringing farmers across with the founders, and
[[lore-vardain|the Vardain]] of the valleys below, their descendants, have fed this mountain ever since.

What it settles is the ground everything else in the island's elder history stands on. Seven centuries
later Khazartúrn fell and the two Elder Races stopped dealing with one another everywhere in the
world—except here, where they were already neighbors, and where instead they tried to repair it.
