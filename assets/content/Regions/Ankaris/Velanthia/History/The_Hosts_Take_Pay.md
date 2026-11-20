---
shortcode: hostsforpay
name: {full: The Hosts Take Pay, en: [The Founding Lines]}
type: lore
subType: history
description: "From about 470 AF the horse-keeping farmer-warriors of the steppe margin took shape as Hosts under founding atamans and hired their riders to river-princes for silver and grain; after the Third Orghunoq overran their eastern ground about 548 they retook it for the princes within two generations."
tags: [history, velanthia]
data:
  culture: velanthclt
  packFolder: velanthia
  events:
    - id: hosts-form
      when: ~470
      kind: founding
      depth: region
      sources: [place-velanthrgn, affiliation-hsttrvl, affiliation-hstsvrt, affiliation-hstkhrd]
      summary: >-
        Escorts of the grain roads, holders of the river fords and keepers of the margin's horse herds gather round founding atamans and become Hosts. Each Host keeps its own law, its own muster and its own battle-shrine, and sells its riders to a river-prince for silver and grain.
      standing: reconstructed
      where:
        locus: [place-velanthrgn]
        reach:
          - place: place-khzryndsrtrgn
            how: the steppe tribes across the frontier find a settled neighbor that rides as they do and bargains as they do
            knowledge: named
      who:
        - {ref: affiliation-hsttrvl, role: founder}
        - {ref: affiliation-hstsvrt, role: founder}
        - {ref: affiliation-hstkhrd, role: founder}
      accounts:
        - by: affiliation-hstkhrd
          says: >-
            The founding line held the grass before any prince paid for it, and the pay is the prince's thanks for something that was already ours.
          agrees: partly
      unresolved: [which of the three Hosts was the first to take a prince's pay]
    - id: fringe-retaken
      when: ~560
      until: ~600
      kind: migration
      depth: region
      sources:
        - place-velanthrgn
        - affiliation-hstkhrd
        - affiliation-hsttrvl
        - affiliation-prncdmzhtvsh
      summary: >-
        After the third union of the steppe has broken up, the Hosts ride back onto the eastern fringe it overran, and the grain villages of the heartland follow them over two generations. The princes pay the Hosts to hold the retaken ground, and the pay becomes a yearly bargain.
      standing: reconstructed
      follows:
        - event: "lore-thrdorqwnq#raising"
          how: answered
          note: the fringe the union overran is the ground the Hosts retake
      where:
        locus: [place-velanthrgn]
        reach:
          - place: place-khzryndsrtrgn
            how: the Hosts hold the margin the union crossed, and deal with the tribes beyond it on their own account
            knowledge: named
      who:
        - {ref: affiliation-hstkhrd, role: actor}
        - {ref: affiliation-hsttrvl, role: actor}
        - {ref: affiliation-prncdmzhtvsh, role: instrument}
      unresolved:
        - whether the Hosts' own villages were retaken before the princes' grain villages or after them
---

The three Hosts are older than the pay they live on. **The Hosts Take Pay** names the two things that made them what they are: the gathering round founding atamans, about 470 AF, and the long retaking of the eastern fringe after the Third Orghunoq.

## The Founding Lines

The steppe margin was crossed by people who made their living from the road and the herd. The drovers of the [[affiliation-hstsvrt|Sevret Host]] escorted grain barges and wagons along the pass road. The first ataman of the [[affiliation-hsttrvl|Tarvál Host]] held a ford on the eastern caravan road and lived on the toll. The riders who became the [[affiliation-hstkhrd|Khorad Host]] kept horse herds on the open grass and dealt with the steppe tribes across it. About 470 AF each of these groups gathered round an ataman whose line kept the office after him, and each became a Host.

A Host took its form from its work. It kept its own law, its own muster and a battle-shrine that was carried to the gathering ground, and it elected no ruler, since the ataman's office passed in the founding line. The river-princes, who held the rivers and had no riders to spare for the grass, paid in silver and grain for what the Hosts did. Pay and service were one bargain from the start: a Host rode for the prince who paid, and rode away from the prince who did not.

## The Fringe

About 548 AF the third union of the steppe overran the eastern fringe ([[lore-thrdorqwnq|The Third Orghunoq]]). The Hosts lost their eastern villages, and the Khorad Host's grass was trampled to the roots. The union broke up when its orghun died, and the Hosts returned with their founding lines intact.

The retaking took two generations. The Hosts rode back first, and the grain villages of the [[place-velanthrgn|heartland]] followed behind them, as the lowland princes' houses record it ([[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]]). The princes paid the Hosts to hold what had been retaken, and the pay stopped being an occasional contract and became a debt that fell due each harvest. By about 600 AF the fringe was resettled, and every prince who held a stretch of it knew which Host stood between him and the grass.

## What It Left {#what-it-left}

- **The yearly pay.** A prince pays his Host at harvest, in silver and grain, and a late payment is the first thing the Host's council discusses.
- **The founding lines.** Each Host has an ataman of the line that gathered it, and a prince marries into the line where he can.
- **The right of the road.** A Host takes the tolls of the roads it holds and the plunder of the raids it rides, and no prince has bargained either away.

## See Also {#see-also}

[[affiliation-hsttrvl|Tarvál Host]], [[affiliation-hstsvrt|Sevret Host]], [[affiliation-hstkhrd|Khorad Host]]
: the three Hosts

[[lore-thrdorqwnq|The Third Orghunoq]]
: the union that overran the fringe

[[place-velanthrgn|Velanthia]]
: the land the Hosts hold the margin of
