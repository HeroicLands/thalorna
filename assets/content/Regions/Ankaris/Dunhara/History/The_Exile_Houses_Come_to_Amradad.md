---
shortcode: exilecoming
name: {full: The Exile Houses Come to Amradad}
type: lore
subType: history
description: "From about 620 to 629 AF, as a disputed succession ended in the Kingdom of Amradad, the four Tellumi princely houses whose cities fell in the Breaking came to Shebarakhend one by one, and the Shebarader received them as guests of the throne and allowed them discreet protective retinues but no military activity in the Kingdom; about 660 the High Shekhul of Ahurdaen took up the convening of their Council."
tags: [history, dunhara]
data:
  culture: dunhariclt
  packFolder: dunhara
  events:
    - id: succession
      when: ~618
      until: ~622
      kind: accession
      depth: region
      sources: [affiliation-kngdmmrdd, place-shebarakhend]
      summary: >-
        A Shebarader dies without having made plain which of his sons is to follow him. The great officers divide between two of them, the divans stop sending orders out of Shebarakhend, and the Kingdom answers no appeal from abroad until the Grand Vashkader and the Ghedvader of the Host declare for one son and the other yields.
      standing: attested
      where:
        locus: [place-shebarakhend]
        reach:
          - place: place-swoasisbelt
            how: >-
              the Tellumi cities send to the Kingdom for help in the first years of the Breaking, and no host comes
            knowledge: named
      who: [{ref: affiliation-kngdmmrdd, role: ruler}]
      unresolved: ["whether either son was offered Tellumi gold to march, and by which house"]
    - id: arrival
      when: ~620
      until: ~629
      kind: arrival
      depth: region
      sources: [affiliation-kngdmmrdd, affiliation-khzrncnfdrtn, place-shebarakhend]
      summary: >-
        As each Tellumi city falls to the Atarzád, its princely house comes over the desert road to Shebarakhend with its genealogies, its household priests and what it can carry of its archive: Zargandur's heirs after the sortie from the north gate, who wait for the throne to be filled, then Ashkarad, Kethramír and, last, Shirvan with the surviving tablets of the Great Temple. The new Shebarader receives each house as a guest of the throne, gives it ground in the city and forbids its retinue any military activity in the Kingdom.
      standing: attested
      where:
        locus: [place-shebarakhend]
        reach:
          - place: place-amradadrgn
            how: >-
              a Tellumi quarter of exile courts grows inside Shebarakhend, and Tellumi exiles of lesser rank buy orchards and trading houses along the coast
            knowledge: named
          - place: place-swoasisbelt
            how: >-
              the four lost cities keep their princes only in exile, across the desert
            knowledge: named
      follows:
        - event: lore-zargandfall
          how: caused
          note: the first house to come is Zargandur's, after its princes died at the north gate
      who:
        - {ref: affiliation-khzrncnfdrtn, role: victim}
        - {ref: affiliation-kngdmmrdd, role: ruler}
        - {ref: affiliation-tribestrzd, role: actor}
      accounts:
        - by: affiliation-khzrncnfdrtn
          says: >-
            The Kingdom, which should have marched, was quarreling over its own throne at the decisive moment, and gave the houses a roof when a host was owed.
          agrees: partly
        - by: affiliation-kngdmmrdd
          says: >-
            The throne owed the Tellumi cities no host and gave their princes what no other power offered: a city to live in and the Shebarader's protection.
          agrees: partly
      unresolved:
        - how much of the Shirvan archive came out with the house and how much is kept back by the other three
    - id: convenor
      when: ~660
      kind: council
      depth: region
      sources: [affiliation-cnclprinces, affiliation-ahurdaen, affiliation-kngdmmrdd]
      summary: >-
        The High Shekhul of Ahurdaen at the Great Fire-Temple of Amradad agrees to convene the yearly Council of the Princes as a neutral party, and the Kingdom underwrites the Council through him in perpetuity, on ground it lends.
      standing: attested
      where: {locus: [place-shebarakhend]}
      follows:
        - event: "lore-exilecoming#arrival"
          how: enabled
          note: the exile houses sit in Shebarakhend
      who:
        - {ref: affiliation-ahurdaen, role: actor}
        - {ref: affiliation-cnclprinces, role: witness}
---

The four princely houses of the [[affiliation-khzrncnfdrtn|Tellumi]] that keep their courts at [[place-shebarakhend|Shebarakhend]] came there in the nine years their cities fell, and they came to a kingdom that had sent their cities no help. **The Exile Houses Come to Amradad** is the Kingdom's part of the war the Tellumi call the Breaking.

## The Empty Throne

About 618 a Shebarader of [[affiliation-kngdmmrdd|Amradad]] died without having made plain which of his sons should follow him. Every standing in the Kingdom is the Shebarader's grant, so the great officers had no throne to serve until one was filled, and they divided between two sons. For some four years the divans sent few orders out of Shebarakhend, and the Kingdom answered no appeal from abroad.

The appeals came from the Tellumi cities. The [[affiliation-tribestrzd|Tribes of Atarzád]] rose against their hosts in the belt about 619, and in the second year of the war the war-house of [[place-zargandur|Zargandur]] died at its own north gate ([[lore-zargandfall|the Fall of Zargandur]]). The cities sent to Shebarakhend for a host. None came. About 622 the Grand Vashkader and the Ghedvader of the Host declared for one son, the other yielded, and the new Shebarader inherited a war on his border.

## The Houses at the Gate

He received the houses instead. Zargandur's heirs came first, over the desert road, with the house's genealogies and what was left of its elders, and waited in the oasis villages until the throne was filled. The [[affiliation-hseashkarad|House of Ashkarad]] followed when its city fell about 623, the [[affiliation-hsekethramir|House of Kethramír]] about 626, and about 629 the [[affiliation-hseshirvan|House of Shirvan]], senior of the seven, carrying the tablets of the Great Temple that survived the burning of its archive.

The Shebarader gave each house ground in Shebarakhend and the standing of a guest of the throne, which is a courtesy and no rank: a Tellumi prince stands on the Kingdom's ladder nowhere, and the Tellumi of the quarter stand at law as Amradi subjects. He set one condition, and the Kingdom's law keeps it: the houses' retinues are tolerated while they stay discreet, and they may undertake no military activity in the Kingdom. Tellumi exiles of lesser rank followed the houses and bought orchards and trading houses along the coast, and their merchant-houses took up the trade of the strait.

## The Council on Lent Ground

The houses' yearly [[affiliation-cnclprinces|Council of the Princes]] met in Amradad from the first years of the exile, on ground the Kingdom lent it. About 660 the High Shekhul of [[affiliation-ahurdaen|Ahurdaen]] at the [[place-grtfiretmpl|Great Fire-Temple of Amradad]] agreed to convene it as a neutral party, and the Kingdom undertook to underwrite the Council through him in perpetuity. Every session since has opened at the Great Fire-Temple, with the princes walking to it in procession.

## What It Left {#what-it-left}

- **The quarter.** The Tellumi quarter of Shebarakhend holds the four exile courts, each a household of a few hundred souls with its genealogies and its priests.
- **The grievance.** The Tellumi recite the Kingdom's absence in every telling of the Breaking, and the Kingdom answers with the roof it gave.
- **The gap.** A prince's blood counts for everything among the Tellumi and for nothing at the Shebarader's court, and the houses' petitions for standing in Amradad are about that gap.
- **The money.** The exile houses spend the trade of the strait and the donations of the Tellumi abroad inside a city whose great houses hold their standing only by grant.

## See Also {#see-also}

[[affiliation-kngdmmrdd|Kingdom of Amradad]]
: the realm that received the houses

[[place-shebarakhend|Shebarakhend]]
: the city of the exile courts

[[affiliation-khzrncnfdrtn|Tellumi Confederation]]
: the seven houses, three ruling and four in exile

[[affiliation-cnclprinces|Council of the Princes]]
: the yearly council on ground the Kingdom lends

[[lore-zargandfall|The Fall of Zargandur]]
: the first city lost, and the first house to come
