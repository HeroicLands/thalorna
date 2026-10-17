---
shortcode: jenchaiscs
name: {full: The Secession of Jenchai, aliases: [The Breaking Away]}
type: lore
subType: history
description: "Over a thousand years ago the island province of Jenchai broke away from the Empire of Tantsou in a bloody war of secession, and no imperial expedition has ever reasserted sovereignty over the archipelago."
tags: [history, spine]
data:
  packFolder: settinglore
  culture: jenchaiclt
  events:
    - when: ~-280
      kind: secession
      depth: world
      sources: [affiliation-jenchaiempr, affiliation-tantsouempr]
      summary: >-
        The island province of Jenchai breaks away from the Empire of Tantsou in a bloody war of secession, led by the imperial governor from whom its emperors claim unbroken descent. No imperial expedition has ever reasserted sovereignty over the archipelago. The empire has never formally recognized the loss and calls the kingdom a renegade province in open rebellion; the practical reality is a sovereign kingdom that raids the coast.
      standing: attested
      names:
        - name: Chaiwong
          by: affiliation-tantsouempr
          gloss: Kingdom of Mountains and Seas, the dismissive name the mainland uses
      where:
        locus: [place-jenchairgn]
        reach:
          - place: place-tantsouregin
            how: >-
              the eastern frontier has been a thousand-year stalemate of raid and counter-raid, and the empire's real threats have come from here or from inside rather than from the west
            knowledge: named
      who:
        - {ref: affiliation-jenchaiempr, role: actor}
        - {ref: affiliation-tantsouempr, role: victim}
      accounts:
        - by: affiliation-jenchaiempr
          says: >-
            Heaven blessed the act. The gods withdrew their favor from the empire and bestowed it on the Nine Mountains, and the unbroken line is the proof: where the mainland's has been interrupted by conquest and civil war, ours has endured.
          agrees: partly
        - by: affiliation-tantsouempr
          says: A province in open rebellion, and it remains one.
          agrees: disputes
      unresolved: []
---

[[affiliation-jenchaiempr|Jenchai]] is a mountainous island kingdom east of [[affiliation-tantsouempr|Tantsou]], off its south-eastern coast, separated from the mainland by a treacherous strait. It was once a
province. It broke away in a bloody war, and has since developed a fiercely independent
culture.

The two sides have not agreed on a single word of it in a thousand years. The empire still refers to
Jenchai by a dismissive name, has never formally recognized its sovereignty, and considers it a
renegade province; the practical reality is a sovereign kingdom that raids the imperial coast and has
never been retaken.

The islanders' reading is religious. They hold that when their ancestors broke away heaven itself
blessed the act—the gods withdrawing their favor from the empire and bestowing it on the Nine
Mountains—and they offer the unbroken imperial lineage as proof, where the mainland's line has been
interrupted by conquest and civil war. To the islanders this is evidence that they are heaven's chosen
people and the mainland a fallen realm.

The date is the empire's own count of the stalemate rather than a year either archive gives.
