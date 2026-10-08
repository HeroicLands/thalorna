---
shortcode: thrdorqwnq
name: {full: The Third Orqwenoq, aliases: [The Silent Market Union]}
type: lore
subType: history
description: "About 548 AF the third great union of the steppe rides south down the spur in the week of the autumn market and kills every soul in Qìmod, then overruns the eastern fringe of Velanthia before it breaks up on its orqwen's death."
tags: [history]
data:
  packFolder: settinglore
  events:
    - when: ~548
      precision: year
      kind: raising
      depth: region
      sources: [place-khzryndsrtrgn, place-velanthrgn, place-tanvuregin, lore-swdsclndr]
      summary: >-
        An orqwen forces the independent tribes into the third great union, the one the steppe counts as the Silent Market. It overruns the eastern fringe of Velanthia and never seriously threatens Tānvür. It breaks up into the tribes it was made from when the orqwen dies.
      standing: reconstructed
      names:
        - name: the Silent Market
          by: place-khzryndsrtrgn
          gloss: the third great union, named for the town it killed
      where:
        locus: [place-hskrrgn]
        reach:
          - place: place-velanthrgn
            how: >-
              the eastern fringe is overrun, as it is overrun more than once
            knowledge: named
          - place: place-tanvuregin
            how: >-
              the empire is never seriously threatened from the west, and the union does not reach its marches
            knowledge: named
      accounts:
        - by: place-khzryndsrtrgn
          says: >-
            The third union was the last, and the tribes expect a fourth.
          agrees: partly
      unresolved:
        - the founding orqwen's name and tribe
        - how long the union held before the orqwen died
    - when: ~548
      precision: year
      kind: fall
      depth: region
      sources: [place-qimod, lore-bloodfield]
      summary: >-
        In the week of the autumn market the union's orqwen rides south down the spur to Qìmod, where the gate stands open for the fair and Tellumi, Vedyari, Byzarian, Tānvüri and Sowides traders are gathered. By nightfall everyone in the walls is dead. The host rides on at dawn with the stock and leaves the people where they lie, and the town becomes a thin blood-field of the silence.
      standing: reconstructed
      where:
        locus: [place-qimod]
        reach:
          - place: place-shrzrtrb
            how: >-
              the Shirzâri hold the well and sell its water from outside the gate
            knowledge: named
      accounts:
        - by: place-khzryndsrtrgn
          says: >-
            Each of the dead belonged to a people with a rite of its own, and none of the rites was performed.
          agrees: full
      unresolved: [how many were in the town on the night]
---

The third of the steppe's great unions is named for a town that was full of strangers and then silent.

## The Union

About 548 AF an _orqwen_ forced the independent tribes of the [[place-khzryndsrtrgn|Khazryn]] together for the third time. The union overran the eastern fringe of [[place-velanthrgn|Velanthia]], as the steppe has done more than once, and it never came near enough to [[place-tanvuregin|Tānvür]] to threaten it. It broke up when its orqwen died, and the tribes went back to their wells.

## The Fair

[[place-qimod|Qìmod]] stands on the southern spur, and in the week of the autumn market it was full. Tellumi horse-dealers, Vedyari spice factors, a Byzarian wine-agent, Tānvüri silk-brokers and Sowides herdsmen had come to trade, and the gate stood open for the fair. The orqwen rode down the spur and by nightfall nobody in the walls was alive. The host took the stock and rode on at dawn. The dead lay where they fell, each belonging to a people whose rite was not performed.

## What It Left

- **The town.** Qìmod's walls stand whole, with no one in them, over a thin blood-field of silence.
- **The count.** The year the union rose is year 1 of the Silent Market in the [[lore-swdsclndr|steppe reckoning]], and the count is still running.

## See Also

- [[place-qimod|Qìmod]]—the town it killed
- [[lore-swdsclndr|The Sowides Reckoning]]—the count that begins with it
- [[lore-hndrdbnnrs|The Storm of the Hundred Banners]]—the union before it
