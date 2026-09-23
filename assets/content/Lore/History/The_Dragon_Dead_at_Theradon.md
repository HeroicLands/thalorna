---
tags:
  - history
  - spine
description: "In 330 BF the Vylarian Republic takes Therádon and its mage-warlord's workshop, and carries away what is in it: the dead of dragons, bound and kept in jars, and the only thing in the world a dragon can be threatened with."
type: lore
subType: history
name:
  full: The Dragon Dead at Therádon
  aliases:
    - The Taking of the Workshop
shortcode: dragondead
packFolder: settinglore
event:
  kind: discovery
  depth: world
  when:
    year: -330
    precision: year
  sources:
    - decided-midhalion
    - decided-chronology
    - place-theradon2
    - lore-soulspirts
  summary: >-
    A Helionite mage-warlord of Therádon kills dragons and, at the transit of death, takes their
    souls and binds them into sealed jars. The Republic takes Therádon in the war's early years,
    takes his workshop with it, and carries the jars away. A dragon cannot be threatened with its
    body: it is a mortal creature of vast Aura, and its dead belong in the ancestor pool that is its
    totem and its afterlife at once. What the Republic now holds is the one thing in the world that
    can be held over a dragon, and it is still holding it.
  standing: single-source
  where:
    locus:
      - place-theradon2
    reach:
      - place: place-helionis
        how: >-
          a city-state loses its own mage-warlord and everything in his workshop in a single season,
          and what was carried out of it appears in no account the academies keep
        knowledge: unlinked
      - place: place-midhalnrgn
        how: >-
          dragons appear over Republican armies within the year, and no record anywhere states what
          was given for them
        knowledge: unlinked
  who:
    - ref: affiliation-vylarinmpr
      role: actor
    - ref: affiliation-theradon
      role: victim
  follows:
    - event: lore-helionscnq
      how: enabled
      note: the war is what puts a Republican magistrate inside a Helionite workshop
  accounts:
    - by: affiliation-vylarinmpr
      says: >-
        Therádon fell early and its sorcerers were a menace to their own side. What the Republic
        recovered from the city is a matter for the war ministry.
      agrees: partly
      withholds: what was recovered, and what was done with it
    - by: place-helionis
      says: >-
        The mage-warlords were the city-states' own doing and their own shame, and the Republic's
        account of the war is written by the side that won it.
      agrees: partly
    - by: affiliation-ordoarcanis
      says: >-
        Nothing. The binding of a soul stands at the head of its prohibited list, and it has never
        explained why it is so particular.
      agrees: silent
  unresolved:
    - how many were taken, which no surviving inventory states
    - whether a soul bound this long can still be received by the pool it belongs in
    - what else came out of the workshop, and where the rest of that work went
---

Dragons are mortal. They are not gods and not spirits: they are creatures of the material plane with
real bodies, long lives and souls of vast scale, and when they die their souls transit to the spirit
realm like anybody else's. The [[lore-soulspirts|transit of death]] is the most dangerous window in a
soul's existence, and a soul pulled back out of it and bound to a corporeal medium is not where it
should be and cannot get to where it should be.

A dragon cannot be threatened with its body. It can be threatened with its dead.

In the early years of [[lore-helionscnq|the Helionite war]] a mage-warlord of
[[affiliation-theradon|Therádon]] did the thing that follows from those two facts. He killed dragons,
took their souls at the transit, and bound them. The Republic took his city in 330 BF, took his
workshop with it, and found the jars: bronze, lead-sealed, lettered in Helonic with an inventory
number and nothing else.

Therádon is an inland city of terraced marble and old libraries, and it fell early. Nothing about the
way it fell is remarkable, which is a large part of why nobody has ever looked closely at what left
it. What the Republic carried out of that workshop is the reason the rest of the war went the way it
did, and the debt it created has never been discharged.
