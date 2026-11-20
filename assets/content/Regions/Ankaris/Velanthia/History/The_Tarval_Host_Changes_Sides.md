---
shortcode: tarvalturn
name: {full: The Tarvál Host Changes Sides, en: [The Port Pay]}
type: lore
subType: history
description: "In 697 AF the Tarvál Host, which had ridden for the prince of Zhitavesh, took the pay of the prince of Brelavesh instead; the princes have feared a Host changing sides since, and the rivalry of the three houses took its present form."
tags: [history, velanthia]
data:
  culture: velanthclt
  packFolder: velanthia
  events:
    - id: turn
      when: 697
      kind: treaty
      depth: region
      sources:
        - place-velanthrgn
        - affiliation-hsttrvl
        - affiliation-prncdmbrlvsh
        - affiliation-prncdmzhtvsh
      summary: >-
        The Tarvál Host, whose pay from the lowland prince is late after a short harvest, takes a better offer from the prince of the port. Its ataman moves his muster to the port's pay and keeps the eastern caravan road. The lowland prince loses his tolls, and the other princes learn that a Host can change princes without leaving the frontier.
      standing: attested
      names: [{name: the Port Pay, by: affiliation-prncdmzhtvsh}]
      where:
        locus: [place-velanthrgn]
        reach:
          - place: place-khzryndsrtrgn
            how: the tribes across the frontier learn that the Hosts' loyalty has a price and offer their own
            knowledge: named
      who:
        - {ref: affiliation-hsttrvl, role: actor}
        - {ref: affiliation-prncdmbrlvsh, role: signatory}
        - {ref: affiliation-prncdmzhtvsh, role: victim}
      follows:
        - event: "lore-hostsforpay#hosts-form"
          how: answered
          note: the bargain of pay and service made the Hosts able to leave
      accounts:
        - by: affiliation-hsttrvl
          says: >-
            The ataman rode for the prince who paid. The lowland prince kept him waiting for his pay, and the port prince did not.
          agrees: partly
        - by: affiliation-prncdmzhtvsh
          says: >-
            A Host that sells its road to the highest prince has no loyalty to sell.
          agrees: partly
      unresolved: [whether the ataman was bought or driven by riders who had gone unpaid]
---

The rivalry of the three princes has the shape it has because of one harvest. **The Tarvál Host Changes Sides**, 697 AF, is the year a Host took its pay from another prince, and the princes of [[place-velanthrgn|Velanthia]] have lived with the fear since.

## The Short Harvest

Until 697 AF the [[affiliation-hsttrvl|Tarvál Host]] rode for the prince of Zhitavesh, as the other two Hosts do, and held the tolls of the eastern caravan road for him. The harvest of that year was short, and the pay that falls due at harvest was late. The ataman of the time, the father of the present ataman, waited through the autumn while his riders went unpaid.

The prince of [[affiliation-prncdmbrlvsh|Princedom of Brelavesh]] had silver. The port took its tolls in coin, and its merchant houses were glad to see the caravan road held by riders that the port paid. He sent his offer to the ataman at the muster town, and the ataman took it.

## The Turn

The Host did not leave the frontier. It kept the muster town, the toll posts and the road, and the ataman's riders held the same ground for a different prince. The tolls that had gone to Zhitavesh went to the port. The Tarvál Host's country passed from the princedom of Zhitavesh to that of Brelavesh in 697 AF. The [[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]] lost the eastern road, and its prince, who held the lowlands and the other two Hosts, could neither compel the Host nor replace it.

The abbots of the [[affiliation-grnrymnstrs|Granary Monasteries of Lizelas]] met the princes and the ataman at a gathering of the Hosts and kept the quarrel from becoming a war. The peace they made left the Host with the port and the lowland prince with a grievance.

## The Present {#the-present}

The change of 697 AF is what the three houses remember when they speak of the Hosts. A prince whose Host has been offered silver by another prince, or by a steppe tribe, remembers that a Host can change princes without leaving the frontier. The princes pay their Hosts more each year and marry into their founding lines, and a late payment is read as a message.

The port prince buys mills upriver, and the lowland prince reads it as a threat, because the port has shown what its silver does to a Host. The frontier prince's wardens are owed months, and the princes' fear is that a Host which can change princes can also change to a side that is not a prince's at all.

## What It Left {#what-it-left}

- **The Tarvál Host's service.** It serves the prince of Brelavesh for pay and holds the road for the port.
- **The fear.** A Host that changes sides takes the riders and the toll roads with it, and no levy of the heartland can hold the grass without them.
- **The gathering.** The abbots mediate between the princes and the Hosts whenever the pay is late.

## See Also {#see-also}

[[affiliation-hsttrvl|Tarvál Host]]
: the Host that changed princes

[[affiliation-prncdmbrlvsh|Princedom of Brelavesh]]
: the prince who paid

[[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]]
: the prince who lost the road

[[lore-hostsforpay|The Hosts Take Pay]]
: the bargain that made the turn possible
