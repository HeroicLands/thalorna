---
shortcode: brkensuccsn
name: {full: The Broken Succession, aliases: [The Years of Three Eagles, The Three Augustars]}
type: lore
subType: history
description: "From about 389 AF the Augustar Barnâkîs is dead with no heir named and his best army across the sea; the Praetar, the Senate and the Moktur legions each acclaim a man, and three eagles are carried before three Augustars for sixteen years."
tags: [history, vylaria, threeeagles]
data:
  packFolder: vylaria
  events:
    - id: succession
      when: ~389
      until: ~405
      kind: accession
      depth: region
      sources:
        - affiliation-vylarinmpr
        - affiliation-pratrgstrm
        - affiliation-curiavylar
        - affiliation-vylrnmltry
        - place-moktur
      summary: >-
        Barnâkîs dies with no heir named while the strongest army in the Empire serves a Khelâthi king. The Praetar Augustarum opens the Castra to its own candidate, Kàdelôs. The Senate acclaims Sylârion. The legions of Moktur acclaim their legate, Makândas. Each man holds a part of the Empire and carries an eagle, and the three claims stand for sixteen years.
      standing: attested
      names:
        - {name: the Years of Three Eagles, by: affiliation-vylarinmpr}
        - name: the three Augustars
          by: affiliation-curiavylar
          gloss: the Senate's way of counting the claimants without granting any but its own
      where:
        locus: [place-orzara, place-moktur]
        reach:
          - place: place-castraprtr
            how: >-
              the guard learns that the gates of the Castra decide who reigns, and every Augustar since has paid it accordingly
            knowledge: named
          - place: place-urbsaquiln
            how: >-
              the Senate sits in the Eagle City under an Augustar of its own choosing, and the habit of choosing outlasts him
            knowledge: named
          - place: place-moktur
            how: >-
              the northern legions march south behind their legate and come back as the army that put a house on the throne
            knowledge: named
      who:
        - {ref: affiliation-pratrgstrm, role: actor}
        - {ref: affiliation-curiavylar, role: actor}
        - {ref: affiliation-vylrnmltry, role: instrument}
      follows:
        - event: "lore-deltaexped#delta"
          how: caused
          note: the army that would have settled the succession is across the sea
      accounts:
        - by: affiliation-curiavylar
          says: >-
            The Senate acclaimed an Augustar in the Pantheon in the form the law requires, and the other two were soldiers' choices.
          agrees: partly
          withholds: that the Senate's choice commanded no legion
        - by: affiliation-pratrgstrm
          says: >-
            The Castra opened its gates to the man the guard could answer for, and the guard answered for him.
          agrees: partly
          withholds: that the guard acted before the Augustar was buried
      unresolved: [whether Barnâkîs left a will that the Castra suppressed]
---

A junior officer of the Praetar Augustarum, shown the Castra's long gallery of Augustars' busts on his first day, is told that one niche is empty and two are crowded. "The empty one is the Praetar's man," his sergeant says, "and the crowded ones are what the Senate and the legions say. Ask nobody which is which. The gallery was hung by the winner."

## Three Claims

Barnâkîs died in 389 with no heir named. A reigning Augustar names his successor in his lifetime, and the Empire had never needed to settle the matter any other way. His strongest army was across the sea ([[lore-deltaexped|The Delta Expedition]]), and the men left at home had to choose among themselves.

The [[affiliation-pratrgstrm|Praetar Augustarum]] chose first. Within the day the gates of the [[place-castraprtr|Castra Praetoria]] opened to its own candidate, **Kàdelôs**, and the guard held the palace hill. The [[affiliation-curiavylar|Senate]] met in the Eagle City and acclaimed **Sylârion**, a senator of an old house with no army and a great deal of precedent. In the north the legions of [[place-moktur|Moktur]] acclaimed their legate, **Makândas**, and began to march.

Each claimant carried an eagle and held a part of the Empire's revenue, and none could take the others'. For sixteen years the Empire had three Augustars.

## What the Years Taught

The Castra learned that the gate decides a reign, and every Augustar since has paid the guard in donatives on accession and at intervals after. The Senate learned how to make an Augustar and how little a made one is worth without a legion. The legions learned that the Senate, the guard and the throne could all be walked over by an army that held the right granaries. The war that settled the claims ([[lore-olcassabtl|The Battle of Olcassa]]) was fought over Hylen's granaries.

## What It Left

- **The Castra's lesson.** A guard that knows its gates make reigns, and an Augustar who pays accordingly.
- **The Senate's taste for succession crises.** The habit of acclaiming a candidate of its own whenever a throne falls vacant.
- **The legions' memory.** Moktur's claim to have put the reigning house on its throne, and the quiet pride that goes with it.

## See Also

- [[lore-deltaexped|The Delta Expedition]]—the army that was not at home
- [[lore-olcassabtl|The Battle of Olcassa]]—where the claims were fought out
- [[lore-restorehouse|The Restoration]]—how the years ended
- [[affiliation-pratrgstrm|Praetar Augustarum]] · [[affiliation-curiavylar|Curia Vylaria]]
