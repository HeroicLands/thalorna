---
shortcode: hstkhrd
name: {full: Khorad Host}
type: affiliation
subType: polity
description: "The Velanthian Host of the open steppe margin, nearest the Khazrin's tribes, which breeds the crossbred horses and speaks to the tribes for the prince of Zhitavesh."
tags: [host, velanthia]
data:
  culture: velanthclt
  templatePriority: null
  demonym: Khoradian
  epithet: null
  symbol: null
  governance:
    model: council
    summary: >-
      A hereditary ataman of the founding line, who commands the Host's riders and presides at a council of the clan heads. The Host keeps its own law and its own muster, deals with the steppe tribes on its own account, serves the lowland prince for pay and can walk away.
    ranks:
      - level: 0
        title: Outcast
        description: >-
          Driven from the Host; no clan shelters them and no muster counts them.
      - level: 1
        title: Herdsman
        description: >-
          A keeper of a clan's horse herds on the grass.
      - level: 2
        title: Steppe Rider
        description: >-
          A horseman of a clan, who patrols the frontier and answers the muster.
      - level: 3
        title: Clan Head
        description: >-
          The head of a clan, who sits in the council and speaks for his riders.
      - level: 4
        title: Ataman
        description: >-
          The hereditary head of the Host, who commands its riders and speaks to the prince and the tribes.
    offices:
      Ataman: >-
        Hereditary head of the Host, who commands its riders, presides at its council and serves the prince of Zhitavesh for pay.
      Envoy to the Tribes: >-
        Carries the Host's gifts and ransoms across the frontier and treats with the steppe tribes.
      Horse-Master: >-
        Keeps the Host's herds and the breeding of its crossbred horses.
  seat: krdshv
  population: null
  territorial_population: 80000
  settlements:
    - settlement: Ovranov
      polity: affiliation-hstkhrd
      location: place-velanthrgn
      type: town
      fortification: none
      stronghold: null
      holder: affiliation-hstkhrd
      population: 1500
      market: local
      notes: "A trading town where Khazrin horse-dealers bring their strings."
    - settlement: Sedrashov
      polity: affiliation-hstkhrd
      location: place-velanthrgn
      type: village
      fortification: none
      stronghold: null
      holder: affiliation-hstkhrd
      population: 500
      market: subsistence
      notes: "A well village on the grass."
  economy: []
  lore: [humanflk, thrdorqwnq]
  parents: [prncdmzhtvsh]
  relations: {prncdmzhtvsh: aligned, sqrtrtrb: rival}
  packFolder: velanthia
sohl: {system: {commonSkills: [velanthlng]}}
---

## Overview {#overview}

The Khorad Host is the Velanthian Host of the open steppe margin, the one nearest the tribes of the Khazrin and the one the princes use to speak to them. It breeds the crossbred horses the steppe prizes and the western cavalry buys, and it holds the eastern edge of the land with mounted patrols. About 80,000 people live in its country, which lies inside the [[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]]. Its seat is the muster town of [[place-krdshv|Krodashov]].

## How It Is Ruled {#how-it-is-ruled}

The Host takes its name from its founding ataman, and the office passes in his line. The ataman is [Belukan Kelodov]{.name data-type="being/npc"}. He commands the riders, presides at the council of the clans and serves the prince of the [[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]] for pay. An envoy to the tribes carries the Host's gifts and ransoms across the frontier, and a horse-master keeps the Host's herds and their breeding.

## Current Situation {#present}

The Host has told the river communities on the frontier to stop paying the tribes and has sent its riders to say so. The community of [[place-smkrv|Semukarov]], held by the [[affiliation-sqrtrtrb|Soqritur]], answers that it is protected for what it pays, and the tribe answers with riders of its own. The ataman wants the toll the communities pay for himself and the pay he is owed by the prince for his patrols; the prince wants neither quarrel. Each side watches which way the ataman turns.

## History {#history}

The Host's grass was overrun by the third union of the steppe about 548 AF ([[lore-thrdorqwnq|The Third Orghunoq]]), and its settlers returned to it afterward, with their founding line intact.

## See Also {#see-also}

[[place-krdshv|Krodashov]]
: the seat

[[place-smkrv|Semukarov]]
: the river community the Soqritur hold

[[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]]
: the prince it serves

[[place-bnnrfld|Banner Field]]
: where the three Hosts gather

[[place-velanthrgn|Velanthia Region]]
: the land
