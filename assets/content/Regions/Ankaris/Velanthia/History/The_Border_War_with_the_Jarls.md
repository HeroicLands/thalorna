---
shortcode: northernwar
name: {full: The Border War with the Jarls, en: [The Stone Forts War]}
type: lore
subType: history
description: "From about 625 to about 631 AF the jarls of Malagna and Norgaad pressed down the northwestern frontier; the Hosts marched west for the first time at the river-princes' pay, the frontier forts were rebuilt in stone, and the borders were renegotiated."
tags: [history, velanthia]
data:
  culture: velanthclt
  packFolder: velanthia
  events:
    - id: jarls
      when: ~625
      until: ~631
      kind: war
      depth: region
      sources:
        - place-velanthrgn
        - place-malagna
        - place-norgaad
        - affiliation-prncdmbrvvsh
        - affiliation-prncdmbrlvsh
        - affiliation-prncdmzhtvsh
      summary: >-
        Jarls of Malagna and Norgaad ride south into the river-princes' northwestern country, taking villages, cattle and river landings. The princes call a council, the Hosts of the east are paid to march west, and the war ends in a renegotiated border, and the frontier forts are rebuilt in stone in the years after.
      standing: attested
      names: [{name: the Border War, by: affiliation-prncdmbrvvsh}]
      where:
        locus: [place-velanthrgn]
        reach:
          - place: place-malagna
            how: the jarls learn what a river-prince can raise when he pays a Host to come to him
            knowledge: named
          - place: place-norgaad
            how: the jarls that rode from Norgaad return north with a border they had not asked for
            knowledge: named
          - place: place-grkrhlmrgn
            how: the rebuilt forts watch the Grukar margin as well as the Nordmal road
            knowledge: named
      who:
        - {ref: affiliation-prncdmbrvvsh, role: actor}
        - {ref: affiliation-prncdmbrlvsh, role: actor}
        - {ref: affiliation-prncdmzhtvsh, role: actor}
        - {ref: affiliation-hsttrvl, role: actor}
      accounts:
        - by: affiliation-prncdmbrvvsh
          says: >-
            The jarls took the villages in a season and the stone took them back in six years. A timber fort burns, and the princes paid for stone.
          agrees: partly
      unresolved:
        - which prince first called the Hosts west, since each of the three houses records that he did
        - whether the jarls fought for a king's grant or for plunder
---

The border the river-princes keep in the northwest was drawn in a war with the jarls. **The Border War with the Jarls**, about 625 to 631 AF, was the only time the Hosts of the eastern margin marched to the other end of the land, and it left the frontier forts of stone.

## The Jarls

Nordmal incursions into [[place-velanthrgn|Velanthia Region]] are limited frontier wars that resolve into renegotiated borders within a generation. This one was larger than most. About 625 AF jarls of [[place-malagna|Malagna]] and [[place-norgaad|Norgaad]] rode south in the same season, took villages and landings along the northwestern rivers and held them through a winter. The forts of the frontier were timber, and the forts that stood were the ones the jarls did not trouble to burn.

The river-princes met in one of their occasional councils, which have no executive and no standing, and agreed to pay for a defense together. The [[affiliation-prncdmbrvvsh|Princedom of Brevavesh]] held the frontier and fed its wardens on the lowland princes' grain. The [[affiliation-prncdmbrlvsh|Princedom of Brelavesh]] sent silver from the port.

## The Hosts March West

The princes had no riders of their own to match the jarls', and they paid the Hosts to come. The [[affiliation-hsttrvl|Tarvál Host]] rode west first, with riders from the other two Hosts, and the campaign was fought as a hired war. The Hosts took their pay in silver at the start and a share of the plunder at the end, and the ataman of each Host stood in the council as an equal of the princes who paid him. The riders drove the jarls back across the border by about 631 AF, and the princes agreed a border that the jarls' kings could accept.

## The Stone Forts {#the-stone-forts}

The princes wanted a border held by neither borrowed war-bands nor hired Hosts, and did not trust one that the Hosts would have to be paid to hold. In the years after the war the Brevavesh frontier was rebuilt in stone, each fort raised at a prince's expense, with a warden appointed by him and paid from the port's silver. The forts that now stand along the northwestern margin date from those years, and the villages beneath them keep their watch of bells and signal fires.

The Hosts took a lesson of their own. A Host that had ridden to the far end of the land for pay knew its price, and the princes learned that the price rose with the distance.

## What It Left {#what-it-left}

- **The stone forts.** The wardens of the frontier hold stone forts at the princes' cost, and the cost is what the lowland grain and the port silver leave late.
- **The council.** The princes met for the war and dissolved the council when it ended, and they have met in council only when a threat forced them since.
- **The price of distance.** A Host that is asked to ride far asks for more, and each prince knows what his Host would ask.

## See Also {#see-also}

[[affiliation-prncdmbrvvsh|Princedom of Brevavesh]]
: the frontier the forts hold

[[affiliation-prncdmbrlvsh|Princedom of Brelavesh]]
: the silver that pays the wardens

[[affiliation-hsttrvl|Tarvál Host]]
: the Host that rode west first

[[lore-hostsforpay|The Hosts Take Pay]]
: the bargain the war tested
