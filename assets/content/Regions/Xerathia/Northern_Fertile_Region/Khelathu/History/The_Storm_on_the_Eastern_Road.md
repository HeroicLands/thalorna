---
shortcode: eastroad
name: {full: The Storm on the Eastern Road, aliases: []}
type: lore
subType: history
description: "In 315 AF the steppe host of the Storm of the Hundred Banners crossed Dunhara and struck the wells of Aû'Khelâthu's eastern road; a frontier commander seized the throne to meet it and did not complete his year, and the empire walled the wells in the decades after."
tags: [history, khelathu]
data:
  packFolder: regkhhist
  events:
    - when: 315
      stated: {calendar: khelathclndr, text: "2425 ST"}
      precision: year
      kind: catastrophe
      depth: region
      sources:
        - lore-hndrdbnnrs
        - place-khuqetmiglet
        - place-zuletqar
        - affiliation-dunhartrbs
        - lore-garauu
      summary: >-
        In the spring of 315 the steppe host of the Storm of the Hundred Banners overruns the march of Vedyara. The same year it crosses Dunhara and strikes the wells of Aû'Khelâthu's eastern road; refugees come down on the wells, raiders follow in the host's wake, and the caravans stop. A frontier commander of Shethes'Râlu seizes the throne to meet the danger and is crowned Quz'Uqa II, a name that recalls the nomad conqueror. He does not complete his year, and Let'Thariu is raised the same year. The host reaches the walls of Amradad late in 315 and breaks up over the winter. In the decades after, the empire walls the wells of Khuqet-Miglet.
      standing: single-source
      where:
        locus: [place-khuqetmiglet]
        reach:
          - place: place-dunharargn
            how: some western clans raid in the host's wake, and most stand out of its way
            knowledge: named
          - place: place-zuletqar
            how: the largest wells on the road are left alone by the raiders, and the truce there outlasts the year
            knowledge: named
          - place: place-galezkara
            how: a commander crowns himself in the capital and is gone within the year
            knowledge: named
          - place: place-amradadrgn
            how: the host's march ends under the Sultanate's walls, and its breakup follows over the winter
            knowledge: named
      who:
        - {ref: affiliation-empireakhlth, role: victim}
        - {ref: affiliation-dunhartrbs, role: witness}
      follows:
        - event: lore-hndrdbnnrs
          how: caused
          note: the host the Storm brought down the Western Descent is the host that crosses Dunhara
      accounts:
        - by: affiliation-empireakhlth
          says: >-
            The list enters one Gar-Aû's death in the night, a commander crowned in his place whose year was not completed, and a new house in the same year, and says nothing of the danger that brought it.
          agrees: partly
          withholds: how the commander's year ended
        - by: affiliation-dunhartrbs
          says: >-
            The host went over the sand like weather, and a clan that is not in front of weather does not argue with it. A few went after what it dropped.
          agrees: partly
          withholds: which clans went, and who fouled the wells
      unresolved:
        - which Dunhari clans raided in the host's wake, and which stood out of its way
        - who fouled the Burned Wells, the host's riders or Dunhari raiders, since the Laws of the Well forbid a Dunhari to foul water
        - who ended the commander's year; the king-list enters only that it was not completed
---

"These have a name and no water," a caravan guide tells a driver on his first crossing, and nods toward a ring of dry stone to the north of the road. "They are the Burned Wells. We go round them, and so do you."

The **Storm on the Eastern Road** is the year that gave the wells their name.

## The Year of the Storm

In the spring of 315 a steppe host under one khan came down the Western Descent and overran the march of [[place-vedyarargn|Vedyara]] ([[lore-hndrdbnnrs|the Storm of the Hundred Banners]]). The same year it crossed [[place-dunharargn|Dunhara]]. The first the Khelâthi knew of it was the Dunhari families coming in ahead of it.

The host did not enter the valley. It struck the eastern road, the line of wells that carries the empire's trade to the desert and the Khazryn, and it did so as a host does on any road: its riders took the northern wells for water, the Dunhari families ahead of it fled onto the garrisons, and refugees and herds crowded the wells of [[place-khuqetmiglet|Khuqet-Miglet]] until the caravans stopped. Some of the western Dunhari clans raided in the host's wake, taking what it dropped. Most stood out of its way. The wells at [[place-zuletqar|Zulet'Qar]], where by long custom no blood is shed, were left alone, and the truce there held through the year.

## The Commander

The list enters what followed in its own formulas. The Gar-Aû **Gez'el'Qar II** went to the West in the night, and a frontier commander of **Shethes'Râlu** was crowned in his place as **Quz'Uqa II**, a name that recalls the hill-nomad who first took the throne. He had taken the throne to meet the host, and the list says only that his year was not completed. The priesthood of [[lore-uqaadty|Uqa'â]] raised **Let'Thariu** in the same year, and its first Gar-Aû, Legir'el'Retha I, reigned twenty years.

Late in 315 the host reached the walls of Amradad, the side nobody had built them to face, and over the winter it broke up on its khan's death.

## What It Left

- **The fort line.** In the decades after, the empire walled and garrisoned the wells of Khuqet-Miglet. Each fort stands on a well, and the garrisons dug or deepened most of the wells.
- **The Overseer of the March.** The commander of the imperial garrison, a crown appointment answerable to the capital's military officers and to no Halzi'a, dates from the walling.
- **The Burned Wells.** A ring of wells beside the first forts was filled with carcasses in the host's wake and has never been cleared. The garrison and the clans each name the other as having done it.
- **The Khelâthi account of the Dunhari.** Whether the Dunhari rode with the host or stood out of its way is argued wherever the Storm is told. The garrisons of the eastern road answer that both are true: some clans raided in its wake, and most stood back.

## See Also

- [[lore-hndrdbnnrs|The Storm of the Hundred Banners]]—the host
- [[lore-akhpriestthr|The Priests' Thrones]]—the age it belongs to
- [[place-khuqetmiglet|Khuqet-Miglet]] · [[place-zuletqar|Zulet'Qar]]—the march and its truce wells
- [[place-dunharargn|Dunhara Region]] · [[affiliation-dunhartrbs|Dunhara Tribes]]
- [[lore-garauu|Gar-Aûu]]—the king-list that enters the commander's year
