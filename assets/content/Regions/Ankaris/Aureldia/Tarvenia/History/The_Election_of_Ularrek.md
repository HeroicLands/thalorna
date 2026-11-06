---
shortcode: ularrekelect
name: {full: The Election of Ularrek, en: [The Blocking Election]}
type: lore
subType: history
description: "About 709 AF the lords of Tarvénia met in the High Hall at Lezkora and, because each of the greater candidates could block the others, elected Ularrek Garrundeta, an old lord of Asturath's high valleys, High King; his reign is the present one."
tags: [history]
data:
  packFolder: tarvenia
  events:
    - when: ~709
      kind: accession
      depth: region
      sources:
        - affiliation-kingdmtrvn
        - affiliation-kngdmstrth
        - affiliation-kingdmlnrk
        - place-lezkora
        - place-lezkorahall
        - being-ularrekgarr
        - being-zenotholtr
      summary: >-
        The hearth of the High Hall goes out and the lords of the three kingdoms climb to Lezkora with twelve sworn men each. No greater candidate can gather two voices in every three, the king of Lyenrik among them, and each can block the others. The lords give their voices instead to Ularrek Garrundeta, an old mountain lord of Asturath's high valleys, who swears the terms at the oath stone and lights the hearth.
      standing: attested
      names: [{name: the blocking election, by: affiliation-kingdmlnrk}]
      where:
        locus: [place-lezkora]
        reach:
          - place: place-leonrik
            how: the lowland lords who could not make a Liénriki king begin, years later, to send their men up the road again for the next election
            knowledge: named
          - place: place-valthari
            how: the new High King swears to keep the city's charter, and the city pays him the year's tribute
            knowledge: named
      who:
        - {ref: affiliation-kingdmtrvn, role: actor}
        - {ref: affiliation-kngdmstrth, role: actor}
        - {ref: affiliation-kingdmlnrk, role: victim}
      follows:
        - event: lore-tarvfallsawy
          how: enabled
          note: the High Kingship and its election at Lezkora date from the first High King
      accounts:
        - by: affiliation-kngdmstrth
          says: >-
            The lords chose a mountain lord who keeps an oath, as they have most often done.
          agrees: partly
          withholds: that he was chosen because no one else could win
        - by: affiliation-kingdmlnrk
          says: >-
            The mountain lords would rather have an old man than a Liénriki king.
          agrees: partly
      unresolved: [how many voices were bought on the last morning, and by whom]
---

In [[affiliation-kingdmtrvn|Tarvénia]] the present reign began with a deadlock. About 709 AF the hearth of [[place-lezkorahall|the High Hall]] went out, the crown's heralds rode to the lords, and the lords of the three kingdoms climbed to [[place-lezkora|Lezkora]] to elect a High King.

## The Deadlock

The greater candidates were each strong enough to stop the others and too weak to win. The king of [[affiliation-kingdmlnrk|Lyenrik]], [[being-zenotholtr|Zenoth Oltris]], stood with the lowland lords behind him and was outvoted by lords who could not stand a Liénriki king. No one gathered two voices in every three, and the lords went back into the city to bargain each night and returned to the oath stone each morning.

## The Old Lord

The voices went in the end to [[being-ularrekgarr|Ularrek Garrundeta]], an old lord of the high valleys of [[affiliation-kngdmstrth|Asturath]] and one of the king of Asturath's own mountain lords, whose house was known to keep an oath and who threatened none of the greater candidates. He swore the terms of the crown at the stone, each lord gripped his forearm and said the ban, and he lit the hearth with fire from the Sacred Forge's temple in the city.

## What It Left {#what-it-left}

- **Two courts at Lezkora.** The High King holds his court in the High Hall as the guest of the king of Asturath, [[being-alzemozold|Alzemo Zolduregi]], and passes through that king's gate.
- **The next election.** The High King is old. Zenoth Oltris means to stand again, and the lowland lords have begun sending their men up the road one and two at a time.

## See Also

[[affiliation-kingdmtrvn|Kingdom of Tarvénia]]
: the crown that was elected

[[being-ularrekgarr|Ularrek Garrundeta]]
: the High King it made

[[place-lezkorahall|The High Hall]]
: where the lords voted

[[lore-tarvfallsawy|Tarvénia Falls Away]]
: the first election, which set the pattern
