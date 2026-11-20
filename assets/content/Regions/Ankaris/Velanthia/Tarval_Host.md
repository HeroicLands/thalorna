---
shortcode: hsttrvl
name: {full: Tarvál Host}
type: affiliation
subType: polity
description: "The Velanthian Host of the eastern caravan roads, which serves the prince of Brelavesh for pay and holds the toll posts where the Khazrin's goods enter the land."
tags: [host, velanthia]
data:
  culture: velanthclt
  templatePriority: null
  demonym: Tarválian
  epithet: null
  symbol: null
  governance:
    model: council
    summary: >-
      A hereditary ataman of the founding line, who commands the Host's riders and presides at a council of the clan heads. The Host keeps its own law and its own muster, serves the prince of the port for pay, and can walk away.
    ranks:
      - level: 0
        title: Outcast
        description: >-
          Driven from the Host; no clan shelters them and no muster counts them.
      - level: 1
        title: Drover
        description: >-
          A herdsman or farm hand of a clan, who rides with the herds.
      - level: 2
        title: Rider
        description: >-
          A horseman of a clan, who answers the muster and takes his share of the pay.
      - level: 3
        title: Clan Head
        description: >-
          The head of a clan, who sits in the council and speaks for his riders.
      - level: 4
        title: Ataman
        description: >-
          The hereditary head of the Host, who commands its riders and speaks to the prince.
    offices:
      Ataman: >-
        Hereditary head of the Host, who commands its riders, presides at its council and serves the prince of Brelavesh for pay.
      Muster Officer: >-
        Keeps the roll of riders and the Host's banner, and calls the muster.
      Toll-Keeper: >-
        Collects what the caravans owe at the Host's toll posts on the eastern roads.
  seat: null
  range: [velanthrgn]
  population: null
  territorial_population: 120000
  settlements:
    - settlement: Volkavesh
      polity: affiliation-hsttrvl
      location: place-velanthrgn
      type: town
      fortification: palisade
      stronghold: null
      holder: affiliation-hsttrvl
      population: 3500
      market: regional
      notes: "The Host's muster town, where its ataman sits and the caravans pay the toll."
    - settlement: Duvavesh
      polity: affiliation-hsttrvl
      location: place-velanthrgn
      type: town
      fortification: none
      stronghold: null
      holder: affiliation-hsttrvl
      population: 2500
      market: local
      notes: "A horse-fair town on the eastern caravan road."
    - settlement: Dobrashov
      polity: affiliation-hsttrvl
      location: place-velanthrgn
      type: village
      fortification: none
      stronghold: null
      holder: affiliation-hsttrvl
      population: 700
      market: subsistence
      notes: "A village of horse-keepers beside a river well."
  economy: []
  lore: [humanflk, thrdorqwnq]
  parents: [prncdmbrlvsh]
  relations: {prncdmbrlvsh: aligned}
  packFolder: velanthia
sohl: {system: {commonSkills: [velanthlng]}}
---

## Overview {#overview}

The Tarvál Host is the Velanthian Host of the eastern caravan roads. It lives in horse-keeping villages and muster towns on the steppe margin, farms enough to feed its riders, and holds the toll posts on the roads that bring the Khazrin's horses, salt and silver west. About 120,000 people live in its country, which lies inside the [[affiliation-prncdmbrlvsh|Princedom of Brelavesh]].

## How It Is Ruled {#how-it-is-ruled}

The Host is named for its founding ataman, and the office passes in his line. The ataman is [Volkar Kodogorich]{.name data-type="being/npc"}. He commands the riders, presides at the Host's council, where the heads of the clans sit, and speaks for the Host to the prince of the [[affiliation-prncdmbrlvsh|Princedom of Brelavesh]], whom the Host serves for pay. The muster officer keeps the roll of riders and the banner, and the toll-keeper collects what the caravans owe at the posts. The Host keeps its own law and carries a battle-shrine to the gathering ground.

## Current Situation {#present}

The Host wants autonomy, pay and the right to what the roads yield, and the prince of Brelavesh is the one who pays it. The ataman has been offered more by the steppe tribes who share his roads, and he lets the prince hear about it. The prince pays more. Neither says what it would mean to stop.

## History {#history}

The Host's first ataman held a ford on the caravan road, and the Host grew around his tolls. It lost its eastern villages to the third union of the steppe about 548 AF ([[lore-thrdorqwnq|The Third Orghunoq]]) and took them back within two generations.

## See Also {#see-also}

[[affiliation-prncdmbrlvsh|Princedom of Brelavesh]]
: the prince it serves

[[place-velanthrgn|Velanthia Region]]
: the land
