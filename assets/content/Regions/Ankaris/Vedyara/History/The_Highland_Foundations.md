---
shortcode: hghlndfndn
name: {full: The Highland Foundations}
type: lore
subType: history
description: "Fifteen centuries ago the highland janpodas laid down the three institutions they still live by: Suvargeri's gold temples and constitution, Danurkot's four archery academies, and the first forest gift of the Bharava-Devabhona."
tags: [history, vedyara]
data:
  culture: vedyariclt
  packFolder: vedyara
  events:
    - id: foundingtemples
      when: ~-780
      kind: founding
      depth: region
      sources: [affiliation-suvrgrjnpd, place-goldmountain, place-bhrvdvstna]
      summary: >-
        The villages of the Bharava highlands raise three great temples of Mahajaya around the gold-bearing mountain, within a century of each other, and begin the constitution that keeps the gold from making any one priesthood or family rich. Half of the mountain's yield goes to the temples, and out of that share they keep the pilgrim hostels of the Bharava road.
      standing: single-source
      where:
        locus: [place-suvargerijnpd]
        reach:
          - place: place-bharavarivr
            how: >-
              the wash of the mountain funds the temples of the highland janpodas and the hostels of the pilgrim road down the river
            knowledge: named
      who:
        - {ref: affiliation-suvrgrjnpd, role: founder}
        - {ref: affiliation-mahajaya, role: witness}
      accounts:
        - by: affiliation-suvrgrjnpd
          says: >-
            The provisions came in one at a time, each after a near-failure of the one before, and in fifteen centuries the janpoda has neither failed nor become a kingdom.
          agrees: full
      unresolved:
        - which of the three temples was raised first; the janpoda holds them of a size and rotates the convening among them so that the question does not matter
    - id: foundingacademies
      when: ~-780
      kind: founding
      depth: region
      sources: [affiliation-dnrktjnpd, place-bowfort, place-highdraw]
      summary: >-
        The four archery academies are founded inside the bow-fort on the upper Sarveda, and from them Danurkot begins to staff the missile companies of every major Vedyari kingdom. The bow comes into the janpoda's name after them.
      standing: single-source
      where:
        locus: [place-bowfort]
        reach:
          - place: place-vedyarargn
            how: >-
              the elite archers of every major kingdom are Danurkot graduates, and Vyalendra's watch commander has been one by a custom nobody remembers beginning
            knowledge: named
      who: [{ref: affiliation-dnrktjnpd, role: founder}]
      accounts:
        - by: place-highdraw
          says: The hall's foundation is placed in the dim past.
          agrees: partly
          withholds: any date, which nobody else's account supplies either
      unresolved:
        - who laid the fort's megalithic foundations, which are older than the academies, the janpoda and perhaps the language
    - id: foundingforest
      when: ~-780
      kind: founding
      depth: region
      sources: [affiliation-bhrvdvbhon, place-bharavaban]
      summary: >-
        The first forest of the lower Bharava is given to a temple in perpetuity, as the god's portion out of which it is fed. The gift is made again many times over the following centuries, and what accumulates is the Bharava-Devabhona, the one country in Vedyara where no assembly sits.
      standing: single-source
      where: {locus: [place-bharavaban]}
      who: [{ref: affiliation-bhrvdvbhon, role: founder}]
      accounts:
        - by: affiliation-bhrvdvbhon
          says: The forest was given, and given again, and is the god's.
          agrees: full
      unresolved: ["which temple received the first gift, and from whom"]
---

A priest of [[place-uppersuvtmpl|the Upper Temple]] at [[place-suvargeri|Suvargeri]], walking a newcomer down the pilgrim road, counts the highlands' age on his fingers: the temples, the bow, the forest. All three are fifteen centuries old, about 780 BF by the western count, which puts them three centuries before [[lore-stndrdmdstn|the standardization at Madustan]] and its count of years. Nobody in the highlands dates them closer than the century, and **the Highland Foundations** are the three institutions the upper country of [[place-vedyarargn|Vedyara]] has lived by ever since.

## The Gold Temples

The villages of the [[place-bharavarivr|Bharava highlands]] raised three great temples of [[affiliation-mahajaya|Mahajaya]] around [[place-goldmountain|the Gold Mountain]], within a century of one another and of a size, and no one of them controls the gold. Those temples are the beginning of [[affiliation-suvrgrjnpd|Suvargeri Janpoda]]'s constitution. Its provisions came in one at a time across the fifteen centuries since, each written after a near-failure of the arrangement before it, and the janpoda has neither failed nor become a kingdom in all that time.

Half of what the mountain yields belongs to the temples. Out of that half they keep their fabric, their schools and [[place-bhrvdvstna|the Bharava-Devastena Hostels]], the pilgrim hostels of the Bharava road—an arrangement that is fifteen centuries old and has never been put to a vote of the sabhra. The panning families have been refining their technique for fifty generations.

## The Bow

On the upper reaches of [[place-sarvedarivr|the Sarveda]], inside [[place-bowfort|the Bow-Fort]], four archery academies were founded in the same age, and their graduates have staffed the elite missile companies of every major Vedyari kingdom since. [[place-highdraw|The High Draw]] is the oldest of the four and places its own foundation in the dim past; nobody else's account dates it closer. The bow came into [[affiliation-dnrktjnpd|Danurkot Janpoda]]'s name after the academies did.

The fort they were founded in is older than they are. Its megalithic foundations are unmortared blocks no living mason can explain, older than the janpoda and perhaps than the language, and nobody claims to know who laid them.

## The God's Portion

Down the river, the first forest of [[place-bharavaban|Bharavaban]] was given to a temple in perpetuity as _devabhona_, the god's portion out of which the temple is fed. The gift was made again and again over the centuries that followed, and what accumulated is the [[affiliation-bhrvdvbhon|Bharava-Devabhona]]: six hundred miles of forest held in temple estates, where no assembly sits and no sabhra meets.

## See Also

[[affiliation-suvrgrjnpd|Suvargeri Janpoda]]
: the gold temples and their constitution

[[affiliation-dnrktjnpd|Danurkot Janpoda]]
: the four academies

[[affiliation-bhrvdvbhon|Bharava-Devabhona]]
: the temple forest

[[lore-janpdform|The Janpoda Form]]
: the older pattern the highland janpodas follow
