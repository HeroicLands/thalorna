---
shortcode: hstsvrt
name: {full: Sevret Host}
type: affiliation
subType: polity
description: "The Velanthian Host of the south-eastern margin under the range, which holds the pass roads for the prince of Zhitavesh and rides escort for the drovers of the grain road."
tags: [host, velanthia]
data:
  culture: velanthclt
  templatePriority: null
  demonym: Sevretian
  epithet: null
  symbol: null
  governance:
    model: council
    summary: >-
      A hereditary ataman of the founding line, who commands the Host's riders and presides at a council of the clan heads. The Host keeps its own law and its own muster, patrols the pass roads for the lowland prince for pay, and can walk away.
    ranks:
      - level: 0
        title: Outcast
        description: >-
          Driven from the Host; no clan shelters them and no muster counts them.
      - level: 1
        title: Escort
        description: >-
          A drover's rider who guards the grain road for a share of the pay.
      - level: 2
        title: Pass Rider
        description: >-
          A horseman of a clan, who rides the pass patrols and answers the muster.
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
        Hereditary head of the Host, who commands its riders, presides at its council and serves the prince of Zhitavesh for pay.
      Warden of the Passes: >-
        Keeps the patrol rosters of the pass roads and the signals between the posts.
      Keeper of the Muster: >-
        Holds the Host's banner and the roll of its riders.
  seat: tvsknv
  population: null
  territorial_population: 100000
  settlements:
    - settlement: Sulvikov
      polity: affiliation-hstsvrt
      location: place-velanthrgn
      type: town
      fortification: none
      stronghold: null
      holder: affiliation-hstsvrt
      population: 2000
      market: local
      notes: "A grain-and-horse market on the pass road."
    - settlement: Mevrekov
      polity: affiliation-hstsvrt
      location: place-velanthrgn
      type: village
      fortification: none
      stronghold: null
      holder: affiliation-hstsvrt
      population: 600
      market: subsistence
      notes: "A honey-and-barley village on the pass road."
  economy: []
  lore: [humanflk, hostsforpay]
  parents: [prncdmzhtvsh]
  relations: {prncdmzhtvsh: aligned}
  packFolder: velanthia
sohl: {system: {commonSkills: [velanthlng]}}
---

## Overview {#overview}

The Sevret Host is the Velanthian Host of the south-eastern margin, under [[place-krvgr|Karvogora]], the range that divides Velanthia from Helionis and Bizaria. It holds the pass roads for the grain prince, rides escort for the drovers who winter on the Northern March, and farms the foothill fields below the passes. About 100,000 people live in its country, which lies inside the [[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]].

## How It Is Ruled {#how-it-is-ruled}

The Host takes its name from its river, and its ataman holds the office in the founding line. He is [Sovidan Volketich]{.name data-type="being/npc"}. He commands the riders, presides at the council of the clans, and speaks to the prince of the [[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]], whom the Host serves for pay in grain and silver. A warden of the passes keeps the patrol rosters, and a keeper of the muster holds the banner and the roll.

## Current Situation {#present}

The passes are the Host's work and its worry. Marauders come down from the mining country on the far side, the road carries grain south and ore north, and the patrols that keep it open are paid at harvest. If the pay is late the riders collect their own tolls at the pass. The prince of Zhitavesh counts the days to harvest more carefully than the weather.

## History {#history}

The Host grew from the drovers' escorts that guarded the grain road, and took its first ataman from among them ([[lore-hostsforpay|The Hosts Take Pay]]).

## See Also {#see-also}

[[place-tvsknv|Tveskanov]]
: the seat

[[place-tvskvsh|Tveskavesh]]
: the pass market its patrols guard

[[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]]
: the prince it serves

[[place-krvgr|Karvogora]]
: the range its patrols watch

[[place-bnnrfld|Banner Field]]
: where the three Hosts gather

[[place-velanthrgn|Velanthia Region]]
: the land
