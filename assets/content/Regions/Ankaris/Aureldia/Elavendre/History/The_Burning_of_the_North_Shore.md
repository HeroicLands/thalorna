---
shortcode: northshorefire
name: {full: The Burning of the North Shore}
type: lore
subType: history
description: "From 519 to 530 AF the Nordmen fleets burned Lísere's villages and Sarmelis more than once, King Thélmoren swore the crown would make no treaty with them, and in the years after the crown raised stone at the narrows and the shore's beacons became a chain."
tags: [history, lisere]
data:
  culture: elavendriclt
  packFolder: elavendre
  events:
    - id: burning
      when: 519
      until: 530
      kind: war
      depth: region
      sources:
        - lore-southrnfleets
        - place-lisere
        - place-liserebay
        - place-sarmelis
        - affiliation-kngdmlvndr
      summary: >-
        The Nordmen fleets of the Southern Fleets come in off the open sea each summer and strike anywhere on Lísere's shore, and are gone before the levy is raised. Villages burn and Sarmelis burns more than once. King Thélmoren swears that the crown will make no treaty with the Nordmen.
      standing: attested
      names:
        - {name: the Burning of the North Shore, by: affiliation-kngdmlvndr}
        - {name: the Southern Fleets, by: affiliation-kngdmlvndr}
      where:
        locus: [place-lisere]
        reach:
          - place: place-sarmelis
            how: the town burns more than once and is rebuilt behind a stone wall, a mole and a boom
            knowledge: named
          - place: place-elavendre
            how: the crown makes no treaty and sends no embassy, and has made none since
            knowledge: named
      who: [{ref: affiliation-kngdmlvndr, role: victim}]
      accounts:
        - by: affiliation-kngdmlvndr
          says: >-
            The Nordmen burned the north shore, and King Thélmoren swore that the crown would make no treaty with them; it has made none.
          agrees: full
      unresolved: [how many villages of the shore were burned and never rebuilt]
    - id: stone
      when: ~535
      kind: founding
      depth: region
      sources:
        - place-durmelen
        - affiliation-durmelengrsn
        - affiliation-beaconfamlys
        - affiliation-brdrmltia
      summary: >-
        After the burning the crown holds the narrows with stone and not only with the shore's boats. It raises the fort at Durmelen on the headland where the earliest Nordmen landings struck, with the Great Fire on its tower, and the beacons that the shore's families have kept on every headland are answered by it and become a chain.
      standing: attested
      names: [{name: the stone at the narrows, by: affiliation-kngdmlvndr}]
      where:
        locus: [place-durmelen]
        reach:
          - place: place-liserebay
            how: the fort at the narrows sees what crosses the bay and lights the fire that the whole shore answers
            knowledge: named
      who:
        - {ref: affiliation-kngdmlvndr, role: actor}
        - {ref: affiliation-beaconfamlys, role: actor}
      follows:
        - event: "lore-northshorefire#burning"
          how: answered
          note: the crown answers the burning with a wall and a chain of lamps
---

The Nordmen came to the north shore before the Southern Fleets did. The earliest landings are older than the stone at [[place-durmelen|Durmelen]] and the stories of them are told by the families whose boats were raided first, and what those families built from them is the beacon chain. The Fleets are what the shore means when it says _the burning_: eleven summers in which the Nordmen did not land and go but came in numbers and stayed to burn.

## The Summers

The Nordmen fleets of the [[lore-southrnfleets|Southern Fleets]] came in off the open sea at the start of each summer, in seagoing ships that needed no narrows and no night's rowing. They struck anywhere on [[place-lisere|Lísere]]'s shore and were gone before a levy could be raised. A village that had burned in one summer was rebuilt, and burned in the next.

[[place-sarmelis|Sarmelis]] burned more than once. Each rebuilding put the stone wall, the mole and the boom on a firmer foundation than the last, and the town's habit of building for the next fire dates from them.

## The Oath

King [Thélmoren]{.name data-type="being/npc"} swore, when the fleets had burned the north shore, that the crown would make no treaty with the Nordmen. The crown has made none. No embassy has gone north and none has been received, and the Castellan of Durmelen takes the oath again on the day he takes the fort. It is the one foreign question on which the Élavendri are not willing to be reasonable.

## The Stone and the Lamps

In the years after, the crown held the narrows with stone and not only with the shore's boats. The fort at Durmelen stands on the headland where the earliest landings struck, and the Great Fire on its tower leads a chain of lamps that the shore's families had already begun to keep. The crown learned to rely on the chain before it learned how the families kept it ([[affiliation-beaconfamlys|The Beacon Families]]).

The sworn men of the [[affiliation-brdrmltia|Border Militia]] were added to the shore's levy in the same years, and the [[affiliation-morthalwtch|Morthal Watch]] was made from the posts of the hill steadings when it became plain that a coast held on one side was entered on the other.

## What It Left

- **The oath.** No treaty, no embassy and no appetite for either, and a Nordman who comes to the gate under a flag is not admitted ([[place-durmelen|Durmelen]]).
- **The chain.** A single fire on the tower for boats on the bay, two for a landing, three for a fleet from the open sea. Three has not been lit in the present Castellan's lifetime.
- **The wall.** Sarmelis's mole and boom, and a shore that sets its villages back from the water.
- **The standing arm.** The sworn companies of the border, which stand beside a levy that cannot be raised in the time a fleet takes to come and go.

## See Also

[[lore-southrnfleets|The Southern Fleets]]
: the Nordmen's account of the same summers

[[place-durmelen|Durmelen]] · [[affiliation-durmelengrsn|Garrison of Durmelen]]
: the stone at the narrows

[[affiliation-beaconfamlys|The Beacon Families]]
: the chain of lamps

[[affiliation-brdrmltia|The Border Militia]] · [[affiliation-morthalwtch|The Morthal Watch]]
: the standing arms the burning made

[[place-lisere|Lísere]] · [[place-sarmelis|Sarmelis]]
: the shore that burned
