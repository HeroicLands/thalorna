---
tags:
  - history
  - spine
description: "Around 3100 BF the Khazári cut Vorgald in the eastern Ironfells – the westernmost hold they ever placed and the only one reached across open sea – and make the farmers beneath it who become the Vardain."
type: lore
subType: history
name:
  full: The Cutting of Vorgald
  aliases:
    - The Khazári Reach Aelwyth
shortcode: vorgaldcut
packFolder: settinglore
event:
  kind: raising
  depth: world
  when:
    year: -3100
    precision: century
  sources:
    - place-ironfells
    - lore-flkkhazar
    - lore-grukaraelwyth
  summary: >-
    In the late centuries of Khazártúrn the Khazári carry a hold further west than they ever carry
    another, across open sea, and cut Vorgald in the eastern Ironfells of Aelwyth. Because a hold
    cannot import what it eats, the founding begins with the making of farmers beneath it. Those
    communities become the Vardain, and Aelwyth becomes the one country where both Elder Races are
    living on the same ground.
  standing: single-source
  where:
    locus:
      - place-vorgald
    reach:
      - place: place-vardainvalleys
        how: >-
          grain, cheese, meat, fodder and fuel have gone up to the Gate on a schedule unaltered in
          centuries, and Khazári engineers come down to keep the terraces and the rock-cut granaries
          working
        knowledge: named
      - place: place-aelwyth
        how: >-
          the island is the one country in the world where Sinalë and Khazári hold ground together,
          which is why what happens elsewhere seven centuries later is answered here rather than
          accepted
        knowledge: named
  who:
    - ref: lore-flkkhazar
      role: actor
    - ref: lore-pelwarpepl
      role: instrument
  follows:
    - event: lore-khazturnrsd
      how: enabled
      note: a late work of Khazártúrn's own centuries rather than of the first settlement
    - event: lore-firstfarmr
      how: enabled
      note: the practice of making farmers at a gate was two thousand years old when it was carried across the water
  accounts:
    - by: lore-flkkhazar
      says: >-
        The date is ours and it is approximate. Vorgald is the far western end of the reach, on an
        island, across open water, at the edge of the country its founders knew.
      agrees: partly
      withholds: everything else about the hold
    - by: place-aelwyth
      says: Nothing. No Aelwythan record goes anywhere near it.
      agrees: silent
  unresolved:
    - how a date held inside a hold reaches anybody outside it
---

Somewhere in the eastern heights of the **[[place-ironfells|Ironfells]]**, where the range meets the
sea cliffs, is **[[place-vorgald|Vorgald]]**. That it exists is known. Very little else is.

The Deep Folk came to this range while [[lore-khazarturn|Khazártúrn]] still stood and its people were
still carrying holds outward from it. Vorgald is the far western end of that reach: a hold on an
island, across open water, at the edge of the country its founders knew. Because a hold cannot import
what it eats, making one here meant first making farmers beneath it, and the
[[lore-vardain|Vardain]] of the valleys below have fed this mountain ever since.

What it settles is the ground everything else in the island's elder history stands on. Seven centuries
later Khazártúrn fell and the two Elder Races stopped dealing with one another everywhere in the
world – except here, where they were already neighbors, and where instead they tried to repair it.
