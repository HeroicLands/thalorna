---
shortcode: agnipartng
name: {full: The Three Partings of the Agmi-pantra, aliases: []}
type: lore
subType: history
description: "The three times the Agmi-pantra broke with the orthodox hierarchy: put out of the city temples about 200 BF over the unburned dead, banned from three capitals about 280 AF for burning Gajastali against the kings' order, and banned from Vyalendra about 560 AF for scouring its first sanctuary, by a council that later put up a statue of the priest it banned."
tags: [history, vedyara]
data:
  culture: vedyariclt
  packFolder: vedyara
  events:
    - id: schismfirst
      when: ~-200
      kind: schism
      depth: region
      sources: [affiliation-agnipantha, affiliation-trimurtisampradaya]
      summary: >-
        The sect refuses the orthodox teaching that the unburned dead are Kalavrata's affair and not a priest's, and is put out of the city temples. Its priests take to the road with their vessels, and the sect has been itinerant since.
      standing: single-source
      where: {locus: [place-vedyarargn]}
      follows:
        - event: lore-kindlford
          how: caused
          note: the doctrine the founder's season taught is the doctrine the temples refused
    - id: schismsecond
      when: ~280
      kind: schism
      depth: region
      sources: [affiliation-agnipantha]
      summary: >-
        Kings of the Hundred Crowns forbid the sect's priests the field of Gajastali, which some of them hold to be their own dead's business. The sect goes anyway, burns the slope in lines for a season, and is banned from three capitals for it. The field is a recurrence before and after.
      standing: single-source
      where: {locus: [place-gajasthali]}
      follows: [{event: lore-fieldelephnt, how: caused, note: the field the kings forbade}]
    - id: schismthird
      when: ~560
      kind: schism
      depth: region
      sources: [affiliation-agnipantha, affiliation-vyalendra2, place-vyalendra3]
      summary: >-
        The sect performs the Scouring of the Temple at the sanctuary of Mahajaya in Vyalendra, kindling a fire at its threshold and staying until the matter it named is addressed. The Loom-Council bans the sect from the city; a generation later the same council puts up a statue of the priest it banned in the cloth-court.
      standing: single-source
      where:
        locus: [place-vyalendra3]
        reach:
          - place: place-vyalendra3
            how: >-
              a flame-priest stands in stone in the cloth-court, put up by the council that banned him
            knowledge: named
      unresolved:
        - what the sect named at the sanctuary; the Council's record enters the scouring and the ban, and the sect does not say
---

The [[affiliation-agnipantha|Agmi-pantra]] has broken with the orthodox hierarchy at least three times, and its priests count the partings the way other sects count their saints. The orthodox count them as three good reasons. **The Three Partings of the Agmi-pantra** are the three the sect itself names.

## The First: the Unburned Dead (about 200 BF)

The sect's founder had spent a season burning a field nobody else would burn ([[lore-kindlford|The Kindling at the Ford]]), and his priests taught that the purging fire is owed to the dead before it is owed to anyone. The orthodox temples taught, and teach, that the unburned dead are [[lore-kalavratadty|Kalavrata]]'s affair and not a priest's, and that a priest who burns a _shorukshetra_ (blood-field) is presuming on the god.

About 200 BF the temples of the cities put the sect out over it. The priests took their vessels onto the road, and the sect has been itinerant since. Its chapters sit in the small towns and the frontier, and the great capitals admit its priests and rarely let them keep a chapter-house.

## The Second: Gajastali (about 280 AF)

A decade after [[lore-fieldelephnt|The Field of Elephants]], the kings of [[lore-hundredcrwn|The Hundred Crowns]] whose dead lay on [[place-gajasthali|Gajastali]] forbade the sect to touch the field. Some held that the dead were their own concern, and some did not want the ground disturbed while the war's quarrels were still open. The sect went anyway. Its priests fasted and burned the slope in lines for a season, and three capitals banned them for it. The field was a recurrence before they came and a recurrence after, which the sect says is because the kings kept the dead's families away.

## The Third: the Scouring at Vyalendra (about 560 AF)

The sect's gravest rite is the [Scouring of the Temple]{.name data-type="lore/custom"}: its priests process to the orthodox temple of a community they have judged corrupt, kindle a fire at the threshold, and stay until the matter they have named is addressed. About 560 AF they scoured the sanctuary of [[affiliation-mahajaya|Mahajaya]] in [[place-vyalendra3|Vyalendra]], first of the city's temples. The [Loom-Council]{.name data-type="affiliation/governmental"} banned the sect from the city.

A generation later the same Council put up a statue of the priest it had banned, in stone, in the cloth-court. The Vyalendri account is that the matter was addressed. The Council has never said what the matter was.

## What It Left

- **An itinerant sect**, with chapters in the small towns and none to speak of in the capitals.
- **The statue** in Vyalendra's cloth-court, where a flame-priest stands in stone with his vessel in the crook of his arm.
- **The sect's uneven welcome:** praised as saints, banned from city limits, and put up in statuary by the councils that banned them.

## See Also

- [[affiliation-agnipantha|Agmi-pantra]]—the sect
- [[lore-kindlford|The Kindling at the Ford]] · [[place-gajasthali|Gajastali]]
- [[place-vyalendra3|Vyalendra]]—the city of the statue
- [[affiliation-trimurtisampradaya|Council of the Triyacharyas]]—the orthodox hierarchy
