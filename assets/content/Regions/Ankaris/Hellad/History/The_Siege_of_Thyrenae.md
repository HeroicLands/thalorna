---
shortcode: heladthyrsiege
name: {full: The Siege of Thirenae, en: [The Last City]}
type: lore
subType: history
description: "In 313 and 312 BF the legions besiege Thirenae by land while Pelagoran ships hold its coast, and the last free city of Helionis falls on terms its arsir negotiates: one gate is breached, the libraries and colleges are left standing, and the Senate's commissioners enter that gate the same month."
tags: [history, hellad, federationage]
data:
  packFolder: helionis
  events:
    - when: -313
      until: -312
      kind: siege
      depth: region
      sources:
        - place-helionis
        - affiliation-thyrenae
        - place-thyrenae2
        - affiliation-panepistmm
        - affiliation-vylarinmpr
        - affiliation-pelagora
      summary: >-
        Thirenae is the last city standing, besieged by the legions on land while Pelagoran ships hold its coast. It falls in 312 BF on terms its arsir Sothanos Kosamides negotiates: the walls are breached at one gate only, the libraries and the colleges are left standing, and the Senate's commissioners enter through that gate the same month to take the College of Arcane Philosophy out of the Epistémion.
      standing: attested
      names:
        - {name: the Last City, by: place-helionis}
        - {name: the Commissioners' Gate, by: place-thyrenae2}
      where:
        locus: [place-thyrenae2]
        reach:
          - place: place-helionis
            how: >-
              the Epistémion's birthplace is where its arcane college is taken out of it, and the other colleges are left standing in the city
            knowledge: named
          - place: place-pelagora2
            how: >-
              the Thirenaean account of the siege names the Pelagoran ships along the coast and the Pelagoran treaty behind them
            knowledge: named
      who:
        - {ref: affiliation-vylarinmpr, role: actor}
        - {ref: affiliation-thyrenae, role: victim}
        - {ref: affiliation-pelagora, role: instrument}
      follows:
        - event: lore-helionscnq
          how: ended
          note: the siege is the last of the war's twenty-three years
        - event: lore-heladpelagtrty
          how: enabled
          note: the blockade that Pelagoran ships hold is what the Treaty buys
      accounts:
        - by: affiliation-thyrenae
          says: >-
            We opened one gate so that the rest of the city, and every book in it, could stand. The Arsir did not surrender Thirenae; he bought it.
          agrees: partly
        - by: affiliation-vylarinmpr
          says: >-
            The last city fell on terms, and the terms were honored to the letter.
          agrees: full
          withholds: what the commissioners took through the gate
      unresolved:
        - what the commissioners carried out of the college's rooms, which no inventory the city kept survives to name
---

[[place-thyrenae2|Thirenae]]'s walls have a long scar on the western side where a gate was walled up and never reopened. It is the [Commissioners' Gate]{.name data-type="place/structure"}, and it marks where the last free city of [[place-helionis|Helionis]] let the [Vylarian Republic]{.name data-type="affiliation/polity"} in during The Siege of Thirenae.

## The Siege

By 313 BF [[affiliation-thyrenae|Thirenae]] was the last city of Helionis that had not yielded. The legions drew their lines on the landward side, and Pelagoran ships, bought by [[lore-heladpelagtrty|the Pelagoran Treaty]] a year before, held the coast. The city had its walls, its academies and a council of senior scholars who had never planned for a war with the legions of a republic, and it held out through the winter.

## The Terms

The Arsir of the year, [Sothanos Kosamides]{.name data-type="being/npc"}, sent to the _felzos_ (legate) and came back with terms. The walls would be breached at one gate and no other. The libraries and the colleges would stand untouched. The Republic's commissioners would enter through the breach the same month. The council voted for them, and in 312 BF the gate came down and the commissioners went in. They took the [[affiliation-ordoarcanis|College of Arcane Philosophy]] out of the [[affiliation-panepistmm|Epistémion]] that same month, and [[affiliation-seldan|Seldan]], the Senate, placed it under the [Kandral]{.name data-type="affiliation/governmental"}.

## What the Siege Left

- **The Commissioners' Gate**, walled up in the days after and never reopened. Antiquarians go to see it, and nobody else uses the street.
- **The [Library of Thirenae]{.name data-type="place/structure"}**, whole, and the colleges around it, which are the reason the city still teaches.
- **The day of the extraction**, which the colleges keep as a day of silence.
- **Thirenae's claim** to be the birthplace of the [[affiliation-ordoarcanis|Arcane Order]] and its first victim.

## See Also

- [[lore-helionscnq|The Conquest of Helionis]]—the war this siege ends
- [[lore-heladpelagtrty|The Pelagoran Treaty]]—what the ships on the coast were bought with
- [[affiliation-thyrenae|Thirenae]] · [[place-thyrenae2|the city of Thirenae]]
- [[affiliation-panepistmm|Epistémion]]
