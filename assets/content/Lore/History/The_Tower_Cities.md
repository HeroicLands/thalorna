---
shortcode: towercities
name: {full: The Tower Cities, aliases: [The Lantern League]}
type: lore
subType: history
description: "A league of caravan cities on the first road across the Khazryn, from about 1000 BF to about 190 BF, whose tall towers were lit at night so a string of camels could march in the cool hours and steer for the next well; the steppe sacked the last of them, and the road still drinks from the wells they dug."
tags: [history]
data:
  packFolder: settinglore
  events:
    - when: ~-1000
      precision: century
      kind: founding
      depth: region
      sources: [place-khzryndsrtrgn, place-jilaq, place-wilud, place-ruinsarkor]
      summary: >-
        The caravan cities of the Tower League rise along the first road across the Khazryn, each with a light-tower in its crown that burns from sunset to dawn. They dig the deep wells the road still drinks from and hold together by one interest, the safe passage of goods, and one rule, that a city's light is never allowed to go out.
      standing: reconstructed
      where:
        locus: [place-jilaq]
        reach:
          - place: place-wilud
            how: >-
              a city of the league is drowned by moving dunes when its well fails
            knowledge: named
          - place: place-ruinsarkor
            how: >-
              the league's westernmost city, nearest the Eastern March, is buried
            knowledge: named
      accounts:
        - by: place-khzryndsrtrgn
          says: >-
            The tribes call every tall ruin in the waste a lamp-tower, and most of them were. They hold the wells in trust until the owners return.
          agrees: full
      unresolved:
        - what the league called itself, and what its counting-houses wrote
        - why its cities stood so far apart that a string needed three nights between them
    - when: ~-190
      precision: decade
      kind: dissolution
      depth: region
      sources: [place-khzryndsrtrgn, place-jilaq]
      summary: >-
        The league ends when the steppe is forced into its first great union and the cities that refuse tribute are taken one after another. The wells pass to the tribes, who keep them and sell passage, and the towers go dark.
      standing: reconstructed
      where:
        locus: [place-jilaq]
        reach:
          - place: place-hskrrgn
            how: >-
              the tribes of the sand country take the wells of the road and sell water to every string that crosses
            knowledge: named
      follows:
        - event: lore-frstorqwnq
          how: caused
          note: the first union demanded tribute that the cities refused
      accounts:
        - by: place-khzryndsrtrgn
          says: >-
            The league grew rich, the steppe grew hungry, and the lights went out in order.
          agrees: partly
          withholds: that the league's merchants could have paid the toll and chose not to
      unresolved: ["how many cities fell, and in what order"]
---

A caravan that leaves a well at dusk and marches through the cool of the night needs one thing the desert does not give it, a mark to steer by. The Tower Cities supplied it. Each city of the league raised a tall, slender tower at its edge, lit a fire in its crown from sunset to dawn, and set its caravan yard at the foot. A string coming in from the open waste saw the nearest light on the horizon two nights before it saw the walls, and steered for it as a ship steers for a harbor.

## When

The league rises about 1000 BF, four centuries after the Varkhad send their kin south into the deserts, and with [[affiliation-tanvurempr|Tānvür]] old enough to have silk worth carrying west. Its cities are traders' towns, strung along the first road across the waste, each a march of several days from the next. They hold together for some eight centuries by one interest, the safe passage of goods, and by one rule, that a city's light is never allowed to go out. The league ends about 190 BF, when the steppe tribes are forced into the first of their great unions and the cities that refused to pay it are taken one after another. The span, in the Vylarian Calendar, is about 1000 BF to 190 BF; the Vylarian Republic is founded 350 years into it.

## What They Built

- **The light-towers.** Slender towers of baked brick and cut stone, some of them two hundred feet high, with a lamp-chamber of ground glass lenses at the top. The tribes call every tall ruin in the waste a lamp-tower, and most of them were.
- **The deep wells.** The league dug the wells the road still drinks from, roofed and stepped for camels, spaced a march apart. The tribes who keep them now do not say they inherited them; they say they hold them in trust until the owners return.
- **The caravan yards.** Walled courts with stables, cisterns and counting-houses, and warehouses that kept the goods of a dozen peoples under one seal.

## What Is Left

The great ruins sit in three places. [[place-wilud|Wilud]], in the sands of the Hosikor, is the city a moving dune sea drowned when its well failed. [[place-ruinsarkor|Bolid, the Ruins of Arkor]], at the western margin, is the city the league founded closest to the Eastern March, and lies buried. [[place-jilaq|Jilaq]], the league's chief city, stands in the central waste, and the road bends three days round it. Beyond those three, a hundred miles of the road are lined with fallen light-towers that serve now as landmarks, and the tribes who water at their wells still leave a lamp at the foot of the tower on the night the last city fell.

## What the League Left Unanswered

Nobody knows what the league called itself, what language its counting-houses wrote in, or why its cities stood so far apart that a string needed three nights between them. The tribes tell it as a fall for greed: the league grew rich, the steppe grew hungry, and the lights went out in order. The league's merchants, to judge by the ledgers that surface in the sand, were rich enough to pay a toll and chose not to.
