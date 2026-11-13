---
shortcode: threesistrs
name: {full: The Battle of the Three Sisters, en: [The End of the Elder Kingdom]}
type: lore
subType: history
description: "In 984 BF the Senali king of the joint Eilwìthan kingdom is killed at the Three Sisters by the Varkhad—and the Senali abandon the crown, the kingdom and every claim outside Seirasto."
tags: [history, spine]
data:
  packFolder: settinglore
  events:
    - when: -984
      kind: battle
      depth: world
      sources: [place-threesisters, place-eilwith, place-hallowwood]
      summary: >-
        The Senali king of the joint Senali–Khazari kingdom of Eilwìth is killed at the Three Sisters amid the Great War by the Varkhad among the settlers, in a manner the tradition is consistent only in calling more than an army's work. The surviving Senali abandon the crown, the kingdom and every claim outside Seirasto and withdraw permanently. The Khazari finish the war alone. It ends the only attempt either Elder Race has made to repair the breach that began at Khazartúrn.
      standing: attested
      where:
        locus: [place-threesisters]
        reach:
          - place: place-hallowwood
            how: the Senali withdraw into this forest, admit no outsider, and receive nobody who asks why
            knowledge: named
          - place: place-ironfells
            how: >-
              the Deep Folk finish a war alone that they entered as one half of a crown, and have not spoken to the Senali since
            knowledge: named
          - place: place-eilwith
            how: >-
              a single crown over the whole island ends, and every realm on the map today stands in the ground it left
            knowledge: named
          - place: place-vardainvalleys
            how: the valley people keep the only human telling of it there is, and tell it plainly, as a thing that happened to their lords
            knowledge: named
      who:
        - {ref: lore-flksenali, role: victim}
        - {ref: lore-flkkhazar, role: actor}
        - {ref: lore-pelwarpepl, role: actor}
        - {ref: lore-varkhadcnq, role: actor}
      follows:
        - event: lore-jointcrown
          how: ended
          note: the crown the Senali and Khazari raised over the island about 1585 BF ends with its king
        - event: lore-fallkhazturn
          how: ended
          note: the reconciliation attempted here was the answer to that breach, and this is where the answer stopped
        - event: lore-pelwarmigr
          how: caused
          note: two centuries of arrival, pressure and reprisal became the Great War the king died in
      accounts:
        - by: lore-vardain
          says: >-
            The joint kingdom under a Senali king, the war, the king's death, and the retreat into the forest that the Khazari have never forgiven.
          agrees: full
          withholds: nothing, and they do not know whether it is the great sundering or only its Eilwìthan chapter
        - by: lore-flkkhazar
          says: >-
            The Senali walked away from us in a crisis, for the second time, having spent six hundred years persuading us it would not happen again.
          agrees: partly
          withholds: why the withdrawal has never been forgiven, beyond that it has not
        - by: lore-flksenali
          says: Nothing. Seirasto will not receive anyone who asks.
          agrees: silent
      unresolved:
        - how the Varkhad killed the Senali king, which the tradition is consistent only in calling more than an army's work
        - whether this is the great sundering between the Elder Races or only its Eilwìthan chapter
---

Before there were kingdoms on [[place-eilwith|Eilwìth]] there was one, and both Elder Races held it.
After [[lore-fallkhazturn|the Fall of Khazartúrn]] the [[lore-flksenali|Senali Folk]] and
[[lore-flkkhazar|Khazár Folk]] ceased dealing with one another everywhere in the world—except on this
island, where instead they tried to repair it. In time they united Eilwìth under a single crown held by a
Senali king and governed it together for six centuries. It is the only such attempt either race has
ever made.

It was ended by refugees, and then by a battle. The [[lore-pelwarpepl|Pelwar]] reached the island in [[lore-pelwarmigr|the Pelwar Migration]] with
nowhere else to go, and an island has a fixed amount of good land; two centuries of arrival and
pressure and reprisal became the [Great War]{.name data-type="lore/history"}. At [[place-threesisters|the Three Sisters]] in what is
now [[place-cntrlhghlnds|the Central Highlands]] the king was killed by the [Varkhad]{.name data-type="lore/folk"} among them.

What was lost there is more than a king and more than a war. It ended in the way most calculated to
make it irrecoverable: not in a quarrel, but with the Senali walking away from the Khazari in a
crisis, for the second time, having spent six hundred years persuading them it would not happen again.

Nearly every human on Eilwìth today descends from those refugees, the Peshtar among them. The exception is [[lore-vardain|the Vardain]], who descend from the humans the Khazari brought across before them, a much older line that is not Pelwar.

## Who Stood There

On one side stood the host of the elder kingdom: the Senali under their king, the Khazari of
[[place-vorgald|Vorgald]], and the crown's subjects, the Vardain and the small Pelwar parties who had
come over early and been taken in. On the other stood the Pelwar settled in the island's interior,
and the Varkhad who had driven them off the mainland and followed them across the water. The field
was beneath the three peaks in the open grazing of [[place-cntrlhghlnds|the Central Highlands]], in
984 BF, after two centuries of arrival and reprisal.

How the Varkhad killed the king is the part of every account that is vague. A Senali king of that
age was not a thing that mortals killed, and the tradition is consistent only in saying that it was
**more than an army's work**: some other force, spiritual in nature, was present on that field.

## What It Cost the Senali

The king, first, and with him those of his household who stood beside him. The Senali give no count
of their dead to anyone. The effect on the living was not defeat but heart-failure: they stopped.

Then everything else. The Senali gave up the crown, the settled country, the coasts, the avenues
they had planted along the crown's roads and every claim of any kind outside the deep forest of the
south. They gave up the Khazari, who had fought beside them and who have not spoken to them since.
And Seirasto has never said where the king lies.

:::secret {title="The envoy at Wenlorne"}
On the last night of the war a Senali envoy came down the Crown Road from the forest to
[[place-wenlornestage|Wenlorne Stage]] to ask for the king's body and was turned away at the gate.
The reeve of Wenlorne wrote it in the stage's last ledger, and the Senali do not know it was written
down.
:::

## What It Made of Seirasto

The survivors went into the southern forest that is now [[place-hallowwood|Seirasto]] and
stayed. The wood's paths have turned outsiders aside since that year. The hearths raised a Keeper of
the Wood in place of a king, and the [[affiliation-nclvhllwwd|Enclave of Seirasto]] has raised
no king since. Seirasto does not sing [[lore-onewhostays|the Praise of the One Who Stays]], the
king's own praise-song, which survives only in the valleys of the Vardain, and it receives nobody who
asks about the crown or the battle.

## What It Left {#what-it-left}

- **Seirasto as it is.** A closed wood, held by a Keeper and nothing more, which receives
  Élavendre and the Áelendan, tolerates Dúnavarre and has never received the Vardain.
- **Two elder peoples who do not speak.** The Khazari count the withdrawal the second abandonment,
  and the Senali do not discuss it.
- **An island for the humans.** The Khazari finished the war alone and kept only what a hold needs,
  and every realm on Eilwìth stands on the ground the elder kingdom left ([[lore-endgreatwar|the Ending of the Great War]]).
- **Iron in the turf.** The herders of the Three Sisters turn up blade-ends and mail after heavy rain,
  and nothing on the field marks what happened there.

## See Also {#see-also}

[[place-threesisters|The Three Sisters]]
: the field

[[lore-jointcrown|The Joint Crown of Eilwìth]]
: the kingdom it ended

[[lore-endgreatwar|The Ending of the Great War]]
: what the Khazari did next

[[place-hallowwood|Seirasto]] · [[affiliation-nclvhllwwd|Enclave of Seirasto]]
: where the Senali went
