---
shortcode: heladwells
name: {full: The Battle of the Wells, aliases: [The Eleven Days]}
type: lore
subType: history
description: "In 158 BF a great host from the steppe comes over the eastern passes in late summer, when the springs are lowest, and the five eastern cities wall the springs of the foothills instead of meeting it in the open, so that the host breaks itself on the spring-forts over eleven days and dies of arrows and thirst in the dry country below the passes."
tags: [history, hellad]
data:
  packFolder: byzaria
  events:
    - when: -158
      kind: battle
      depth: region
      sources:
        - place-eastrnmrch
        - affiliation-argyrteikhos
        - place-argyrteikhos2
        - place-thirstground
        - place-khzryndsrtrgn
      summary: >-
        A great host from the steppe, which the eastern records call a khanate, comes over the passes in late summer, when the springs are lowest. The five eastern cities muster under Strátimos Ghéranîdês of the pass-city and wall the springs of the foothills instead of meeting the host in the open. The host breaks itself on the spring-forts over eleven days and dies between them, of arrows and of thirst, in the dry country below the passes. No eastern record names its khan.
      standing: reconstructed
      names: [{name: the Eleven Days, by: place-eastrnmrch}]
      where:
        locus: [place-thirstground]
        reach:
          - place: place-eastrnmrch
            how: >-
              the spring-forts of the foothills are the March's forts, and the saying that an army from the east dies before it reaches the walls is first said of this host
            knowledge: named
          - place: place-argyrteikhos2
            how: >-
              the walls of the pass-city are rebuilt thicker in the years after the host, and its garrison holds the passes in common with the other four cities
            knowledge: named
      who:
        - {ref: affiliation-argyrteikhos, role: actor}
        - {ref: affiliation-byzarianlg, role: actor}
      follows:
        - event: lore-daughtercts
          how: enabled
          note: the cities the host marches on are the harbors and plateau towns the daughter-cities founded
      accounts:
        - by: place-eastrnmrch
          says: >-
            The host could have had any army in the open. It had no army that could be fed on a dry road, and the cities only had to hold the water.
          agrees: full
        - by: place-khzryndsrtrgn
          says: >-
            The tribes count three unions in their history, and this host was none of them. A great gathering rode east that year behind a leader the steppe did not follow afterward.
          agrees: partly
          withholds: which tribes rode, since a host that does not return leaves no account of itself
      unresolved:
        - the khan's name and tribe, which no eastern record gives
        - how many riders came over the passes
---

A sergeant of the Eastern March, asked by a recruit why the way-forts stand a day's march apart and each one on a spring, answers with the date of the Eleven Days, and the recruit is given a bucket and sent to the nearest well.

## The Host

In the summer of 158 BF a host of the steppe came up out of the Khazryn and over the eastern passes. The eastern records call it a khanate and give it no more than that: no khan's name, no tribe, no count of riders. It chose its season well. The foothills below the passes have few springs, and in late summer they run lowest. A host that crossed the passes in that month could reach the plateau only by water it did not carry.

## The Walling of the Springs

The five eastern cities mustered under **Strátimos Ghéranîdês** of the pass-city. He did not take the host in the open, where it would have had the advantage of every horse it rode. He walled the springs. Each spring of the foothills was ringed with a fort of stone and turf, garrisoned and stocked, and the host found that every water it could reach lay under arrows.

The fighting went on for eleven days. The host attacked the spring-forts one after another and took none. Its horses and riders died of arrows at the walls and then of thirst in the open ground between them, in the dry country below the passes, and the survivors went back toward the steppe by the way they had come.

## What the Wells Left

- **The Thirsting Ground**, the [[place-thirstground|blood-field]] in the foothills, where the host's dead lay unburied between the forts.
- **The spring-forts**, which are the Eastern March's forts, still built on springs.
- **Argýrteíkhos's walls**, rebuilt thicker in the years after the host.
- **The passes held in common.** The five cities kept the garrisons they had mustered, and [[lore-heladcompact|the Compact]] made the practice a law the next year.
- **The March's saying**, that an army from the east dies before it reaches the walls.

## See Also

- [[place-eastrnmrch|Eastern March]]—the district the spring-forts became
- [[place-thirstground|The Thirsting Ground]]—the field the host left
- [[lore-heladcompact|The Compact of the Five]]—the pact made the year after
- [[place-khzryndsrtrgn|Khazryn Desert Region]]—the country the host came from
