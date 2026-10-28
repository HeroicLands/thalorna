---
shortcode: threesistrs
name: {full: The Battle of the Three Sisters, en: [The End of the Elder Kingdom]}
type: lore
subType: history
description: "In 984 BF the Sinale king of the joint Aelwythan kingdom is killed at the Three Sisters by the Varkhad—and the Sinale abandon the crown, the kingdom and every claim outside the Hallowwood."
tags: [history, spine]
data:
  packFolder: settinglore
  events:
    - when: -984
      kind: battle
      depth: world
      sources: [place-threesisters, place-aelwyth, place-hallowwood]
      summary: >-
        The Sinale king of the joint Sinale–Khazari kingdom of Aelwyth is killed at the Three Sisters amid the Great War by the Varkhad among the settlers, in a manner the tradition is consistent only in calling more than an army's work. The surviving Sinale abandon the crown, the kingdom and every claim outside the Hallowwood and withdraw permanently. The Khazari finish the war alone. It ends the only attempt either Elder Race has made to repair the breach that began at Khazartúrn.
      standing: attested
      where:
        locus: [place-threesisters]
        reach:
          - place: place-hallowwood
            how: the Sinale withdraw into this forest, admit no outsider, and receive nobody who asks why
            knowledge: named
          - place: place-ironfells
            how: >-
              the Deep Folk finish a war alone that they entered as one half of a crown, and have not spoken to the Sinale since
            knowledge: named
          - place: place-aelwyth
            how: >-
              a single crown over the whole island ends, and every realm on the map today stands in the ground it left
            knowledge: named
          - place: place-vardainvalleys
            how: the valley people keep the only human telling of it there is, and tell it plainly, as a thing that happened to their lords
            knowledge: named
      who:
        - {ref: lore-flksinale, role: victim}
        - {ref: lore-flkkhazar, role: actor}
        - {ref: lore-pelwarpepl, role: actor}
        - {ref: lore-varkhadcnq, role: actor}
      follows:
        - event: lore-jointcrown
          how: ended
          note: the crown the Sinale and Khazari raised over the island about 1585 BF ends with its king
        - event: lore-fallkhazturn
          how: ended
          note: the reconciliation attempted here was the answer to that breach, and this is where the answer stopped
        - event: lore-pelwarmigr
          how: caused
          note: two centuries of arrival, pressure and reprisal became the Great War the king died in
      accounts:
        - by: lore-vardain
          says: >-
            The joint kingdom under a Sinale king, the war, the king's death, and the retreat into the forest that the Khazari have never forgiven.
          agrees: full
          withholds: nothing, and they do not know whether it is the great sundering or only its Aelwythan chapter
        - by: lore-flkkhazar
          says: >-
            The Sinale walked away from us in a crisis, for the second time, having spent six hundred years persuading us it would not happen again.
          agrees: partly
          withholds: why the withdrawal has never been forgiven, beyond that it has not
        - by: lore-flksinale
          says: Nothing. The Hallowwood will not receive anyone who asks.
          agrees: silent
      unresolved:
        - how the Varkhad killed the Sinale king, which the tradition is consistent only in calling more than an army's work
        - whether this is the great sundering between the Elder Races or only its Aelwythan chapter
---

Before there were kingdoms on [[place-aelwyth|Aelwyth]] there was one, and both Elder Races held it.
After [[lore-fallkhazturn|the Fall of Khazartúrn]] the [[lore-flksinale|Sinale Folk]] and
[[lore-flkkhazar|Khazár Folk]] ceased dealing with one another everywhere in the world—except on this
island, where instead they tried to repair it. In time they united Aelwyth under a single crown held by a
Sinale king and governed it together for six centuries. It is the only such attempt either race has
ever made.

It was ended by refugees, and then by a battle. The [[lore-pelwarpepl|Pelwar]] reached the island in [[lore-pelwarmigr|the Pelwar Migration]] with
nowhere else to go, and an island has a fixed amount of good land; two centuries of arrival and
pressure and reprisal became the [Great War]{.name data-type="lore/history"}. At [[place-threesisters|the Three Sisters]] in what is
now [[place-cntrlhghlnds|the Central Highlands]] the king was killed by the [Varkhad]{.name data-type="lore/folk"} among them.

What was lost there is more than a king and more than a war. It ended in the way most calculated to
make it irrecoverable: not in a quarrel, but with the Sinale walking away from the Khazari in a
crisis, for the second time, having spent six hundred years persuading them it would not happen again.

Nearly every human on Aelwyth today descends from those refugees, the Peshtar among them. The exception is [[lore-vardain|the Vardain]], who descend from the humans the Khazari brought across before them, a much older line that is not Pelwar.
