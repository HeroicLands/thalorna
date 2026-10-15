---
shortcode: heladthyrsiege
name: {full: The Siege of Thyrenae, aliases: [The Last City]}
type: lore
subType: history
description: "In 313 and 312 BF the legions besiege Thyrenae by land while Pelagoran ships hold its coast, and the last free city of Heliónis falls on terms its archon negotiates: one gate is breached, the libraries and colleges are left standing, and the Senate's commissioners enter that gate the same month."
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
        Thyrenae is the last city standing, besieged by the legions on land while Pelagoran ships hold its coast. It falls in 312 BF on terms its archon Sôthanos Kôshamîdês negotiates: the walls are breached at one gate only, the libraries and the colleges are left standing, and the Senate's commissioners enter through that gate the same month to take the College of Arcane Philosophy out of the Plûmepistémion.
      standing: attested
      names:
        - {name: the Last City, by: place-helionis}
        - {name: the Commissioners' Gate, by: place-thyrenae2}
      where:
        locus: [place-thyrenae2]
        reach:
          - place: place-helionis
            how: >-
              the Plûmepistémion's birthplace is where its arcane college is taken out of it, and the other colleges are left standing in the city
            knowledge: named
          - place: place-pelagora2
            how: >-
              the Thyrenaean account of the siege names the Pelagoran ships along the coast and the Pelagoran treaty behind them
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
            We opened one gate so that the rest of the city, and every book in it, could stand. The Archon did not surrender Thyrenae; he bought it.
          agrees: partly
        - by: affiliation-vylarinmpr
          says: >-
            The last city fell on terms, and the terms were honored to the letter.
          agrees: full
          withholds: what the commissioners took through the gate
      unresolved:
        - what the commissioners carried out of the college's rooms, which no inventory the city kept survives to name
---

Thyrenae's walls have a long scar on the western side where a gate was walled up and never reopened. It is the **Commissioners' Gate**, and it marks where the last free city of Heliónis let the Republic in.

## The Siege

By 313 BF Thyrenae was the last city of Heliónis that had not yielded. The legions drew their lines on the landward side, and Pelagoran ships, bought by the [[lore-heladpelagtrty|Pelagoran Treaty]] a year before, held the coast. The city had its walls, its academies and a council of senior scholars who had never planned for a war with the legions of a republic, and it held out through the winter.

## The Terms

The Archon of the year, **Sôthanos Kôshamîdês**, sent to the _phêlzândôs_ (legate) and came back with terms. The walls would be breached at one gate and no other. The libraries and the colleges would stand untouched. The Republic's commissioners would enter through the breach the same month. The council voted for them, and in 312 BF the gate came down and the commissioners went in. They took the College of Arcane Philosophy out of the [[affiliation-panepistmm|Plûmepistémion]] that same month, and the Senate placed it under the Kandral.

## What the Siege Left

- **The Commissioners' Gate**, walled up in the days after and never reopened. Antiquarians go to see it, and nobody else uses the street.
- **The Library of Thyrenae**, whole, and the colleges around it, which are the reason the city still teaches.
- **The day of the extraction**, which the colleges keep as a day of silence.
- **Thyrenae's claim** to be the birthplace of the Arcane Order and its first victim.

## See Also

- [[lore-helionscnq|The Conquest of Heliónis]]—the war this siege ends
- [[lore-heladpelagtrty|The Pelagoran Treaty]]—what the ships on the coast were bought with
- [[affiliation-thyrenae|Thyrenae]] · [[place-thyrenae2|The city of Thyrenae]]
- [[affiliation-panepistmm|Plûmepistémion]]
