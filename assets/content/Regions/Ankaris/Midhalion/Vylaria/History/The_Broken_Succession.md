---
shortcode: brkensuccsn
name: {full: The Broken Succession, aliases: [The Years of Three Eagles, The Three Orzoi]}
type: lore
subType: history
description: "From about 389 AF the Orzas Barnakis is dead with no heir named and his best army across the sea; the Sorvan, the Senate and the Moktur legions each acclaim a man, and three eagles are carried before three Orzoi for sixteen years."
tags: [history, vylaria, threeeagles]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: succession
      when: ~389
      until: ~405
      kind: accession
      depth: region
      sources:
        - affiliation-vylarinmpr
        - affiliation-sorvan
        - affiliation-seldan
        - affiliation-vylrnmltry
        - place-moktur
      summary: >-
        Barnakis dies with no heir named while the strongest army in the Empire serves a Khelathi king. The Sorvan opens the Guard Camp to its own candidate, Kadelos. The Senate acclaims Sylarion. The legions of Moktur acclaim their felzos, Makandas. Each man holds a part of the Empire and carries an eagle, and the three claims stand for sixteen years.
      standing: attested
      names:
        - {name: the Years of Three Eagles, by: affiliation-vylarinmpr}
        - name: the three Orzoi
          by: affiliation-seldan
          gloss: the Senate's way of counting the claimants without granting any but its own
      where:
        locus: [place-orzara, place-moktur]
        reach:
          - place: place-thaurzurgalis
            how: >-
              the guard learns that the gates of the Guard Camp decide who reigns, and every Orzas since has paid it accordingly
            knowledge: named
          - place: place-arvon
            how: >-
              the Senate sits in the Eagle City under an Orzas of its own choosing, and the habit of choosing outlasts him
            knowledge: named
          - place: place-moktur
            how: >-
              the northern legions march south behind their felzos and come back as the army that put a house on the throne
            knowledge: named
      who:
        - {ref: affiliation-sorvan, role: actor}
        - {ref: affiliation-seldan, role: actor}
        - {ref: affiliation-vylrnmltry, role: instrument}
      follows:
        - event: "lore-deltaexped#delta"
          how: caused
          note: the army that would have settled the succession is across the sea
      accounts:
        - by: affiliation-seldan
          says: >-
            The Senate acclaimed an Orzas in the Pantheon in the form the law requires, and the other two were soldiers' choices.
          agrees: partly
          withholds: that the Senate's choice commanded no legion
        - by: affiliation-sorvan
          says: >-
            The Guard Camp opened its gates to the man the guard could answer for, and the guard answered for him.
          agrees: partly
          withholds: that the guard acted before the Orzas was buried
      unresolved: [whether Barnakis left a will that the Guard Camp suppressed]
---

A junior officer of [[affiliation-sorvan|the Sorvan]], shown the long gallery of Orzoi' busts at [[place-thaurzurgalis|Thaurzurgalis]] (the Guard Camp) on his first day, is told that one niche is empty and two are crowded. "The empty one is the Sorvan's man," his sergeant says, "and the crowded ones are what [[affiliation-seldan|Seldan]] (the Senate) and the legions say. Ask nobody which is which. The gallery was hung by the winner."

## Three Claims

[Barnakis]{.name data-type="being/npc"} died in 389 with no heir named. A reigning Orzas names his successor in his lifetime, and the [[affiliation-vylarinmpr|Empire]] had never needed to settle the matter any other way. His strongest army was across the sea ([[lore-deltaexped|The Delta Expedition]]), and the men left at home had to choose among themselves.

The Sorvan chose first. Within the day the gates of the Thaurzurgalis opened to its own candidate, **[Kadelos]{.name data-type="being/npc"}**, and the guard held the palace hill. The Senate met in [[place-arvon|Arvon]] (the Eagle City) and acclaimed **[Sylarion]{.name data-type="being/npc"}**, a _kurthos_ (senator) of an old house with no army and a great deal of precedent. In the north the legions of [[place-moktur|Moktur]] acclaimed their _felzos_ (legate), **[Makandas]{.name data-type="being/npc"}**, and began to march.

Each claimant carried an eagle and held a part of the Empire's revenue, and none could take the others'. For sixteen years the Empire had three Orzoi.

## What the Years Taught

The Guard Camp learned that the gate decides a reign, and every Orzas since has paid the guard in donatives on accession and at intervals after. The Senate learned how to make an Orzas and how little a made one is worth without a legion. The legions learned that the Senate, the guard and the throne could all be walked over by an army that held the right granaries. The war that settled the claims ([[lore-olcassabtl|The Battle of Olkassa]]) was fought over [[place-hylen|Hilen]]'s granaries.

## What It Left

- **The Guard Camp's lesson.** A guard that knows its gates make reigns, and an Orzas who pays accordingly.
- **The Senate's taste for succession crises.** The habit of acclaiming a candidate of its own whenever a throne falls vacant.
- **The legions' memory.** Moktur's claim to have put the reigning house on its throne, and the quiet pride that goes with it.

## See Also

- [[lore-deltaexped|The Delta Expedition]]—the army that was not at home
- [[lore-olcassabtl|The Battle of Olkassa]]—where the claims were fought out
- [[lore-restorehouse|The Restoration]]—how the years ended
- [[affiliation-sorvan|Sorvan]] · [[affiliation-seldan|Seldan]]
