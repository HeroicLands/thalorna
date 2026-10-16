---
shortcode: firstgames
name: {full: The First Games, aliases: [The Founding of the Truce]}
type: lore
subType: history
description: "About 880 BF the cities of the peninsulas meet at one sanctuary for contests in running, wrestling and the chariot, under a truce their heralds proclaim, and from that meeting come the Games, the herald's inviolability and the custom of the herald who asks for the dead."
tags: [history, hellad, landingsage]
data:
  packFolder: helionis
  events:
    - when: ~-880
      kind: founding
      depth: region
      sources: [place-helionis, place-gamessanct, affiliation-ctysttshlns]
      summary: >-
        The cities of the peninsulas meet at one sanctuary for contests in running, wrestling and the chariot, under a truce that the heralds of every city proclaim. While the truce holds, the heralds' persons are inviolable, and over the next century the rule extends to every herald at all times. After a battle between cities the loser's herald crosses the field under truce and takes the dead home.
      standing: reconstructed
      names:
        - {name: the First Games, by: place-helionis}
        - {name: the Truce, by: affiliation-ctysttshlns}
      where:
        locus: [place-gamessanct]
        reach:
          - place: place-helionis
            how: >-
              taking part in the Games becomes a sacred duty of every city, a herald's person is inviolable even between enemies, and a war between cities ends with the dead exchanged
            knowledge: named
      who: [{ref: affiliation-ctysttshlns, role: founder}]
      follows:
        - event: lore-heladlandngs
          how: enabled
          note: the cities fill their valleys and need a way to meet without fighting
      accounts:
        - by: place-helionis
          says: >-
            The gods asked us to run and wrestle for them, and a city that will not meet its neighbors at the sanctuary has refused the gods, not the neighbors.
          agrees: partly
          withholds: that the first truce was a bargain between cities that had just stopped raiding one another's flocks
      unresolved:
        - which city proposed the first meeting, which every city claims
        - where the founding sanctuary lay before the oldest stadium was built on it
---

The Games are held in the oldest stadium in Helionis, at the **Sanctuary of the Games**, and every Helionite city sends athletes and a herald. A runner from [[affiliation-thyrenae|Thirenae]] and a runner from [[affiliation-pelagora|Pelagora]] race side by side there, and a season later their cities may be at war. The First Games are why both of those are true.

## The Meeting

The cities of the peninsulas, a few generations past the [[lore-heladlandngs|Landings]], were close enough to raid one another's flocks and far enough apart that nobody could say who began it. Somewhere about 880 BF they agreed to meet at one sanctuary and settle their quarrels over the year in contests: running, wrestling and the chariot. The gods of the sanctuary were asked to witness, and the heralds of each city proclaimed a truce for the days of the meeting.

## The Herald's Person

For the length of the truce a herald could not be touched, and the cities found that they preferred it. Over the next century the rule spread to every herald at every time, and the office of herald in every Helionite constitution carries the same sentence: his person is inviolable, even between enemies. A city that harms a herald is struck out of the Games, and none has.

## The Dead Come Home

After a battle between two cities the loser's herald walks onto the field under truce and asks for the dead. The winner gives them up, the herald takes them home, and the cities fight again when the Games allow. This custom is why the wars between Helionite cities leave no [[lore-bloodfield|blood-field]]: every city's dead are carried home to their own rites. The one field no herald could cross is [[place-sourplain|the Sour Plain]].

## What the Meeting Left

- **The Games**, held at the [[place-gamessanct|Sanctuary of the Games]], with taking part a sacred duty.
- **The herald's inviolability**, written into every city's offices.
- **The return of the dead**, the reason Helionite wars end with the field cleared.

## See Also

- [[lore-heladlandngs|The Landings]]—the settlement that made the cities
- [[lore-daughtercts|The Daughter-Cities]]—what the cities do next
- [[affiliation-ctysttshlns|City-States of Helionis]]—the offices and the herald
- [[place-gamessanct|The Sanctuary of the Games]]
