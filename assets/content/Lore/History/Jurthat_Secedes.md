---
tags:
  - history
  - spine
description: "Over a thousand years ago the island province of Jürthāt broke away from the Empire of Tānvür in a bloody war of secession, and no imperial expedition has ever reasserted sovereignty over the archipelago."
type: lore
subType: history
name:
  full: The Secession of Jürthāt
  aliases:
    - The Breaking Away
shortcode: jurthatscs
packFolder: settinglore
event:
  kind: secession
  depth: world
  when:
    year: -280
    precision: century
    derived: over a thousand years ago
  sources:
    - affiliation-jurthatempr
    - affiliation-tanvurempr
  summary: >-
    The island province of Jürthāt breaks away from the Empire of Tānvür in a bloody war of secession,
    led by the imperial governor from whom its emperors claim unbroken descent. No imperial expedition
    has ever reasserted sovereignty over the archipelago. The empire has never formally recognized the
    loss and calls the kingdom a renegade province in open rebellion; the practical reality is a
    sovereign kingdom that raids the coast.
  standing: attested
  names:
    - name: Thātvōng
      by: affiliation-tanvurempr
      gloss: Kingdom of Mountains and Seas, the dismissive name the mainland uses
  where:
    locus:
      - place-jurthatrgn
    reach:
      - place: place-tanvuregin
        how: >-
          the eastern frontier has been a thousand-year stalemate of raid and counter-raid, and the
          empire's real threats have come from here or from inside rather than from the west
        knowledge: named
  who:
    - ref: affiliation-jurthatempr
      role: actor
    - ref: affiliation-tanvurempr
      role: victim
  accounts:
    - by: affiliation-jurthatempr
      says: >-
        Heaven blessed the act. The gods withdrew their favor from the empire and bestowed it on the
        Nine Mountains, and the unbroken line is the proof: where the mainland's has been interrupted
        by conquest and civil war, ours has endured.
      agrees: partly
    - by: affiliation-tanvurempr
      says: A province in open rebellion, and it remains one.
      agrees: disputes
  unresolved: []
---

**[[affiliation-jurthatempr|Jürthāt]]** is a mountainous island kingdom to the south-east of
[[affiliation-tanvurempr|Tānvür]], separated from the mainland by a treacherous strait. It was once a
province. It broke away in a bloody war of secession and has since developed a fiercely independent
culture.

The two sides have not agreed on a single word of it in a thousand years. The empire still refers to
Jürthāt by a dismissive name, has never formally recognized its sovereignty, and considers it a
renegade province; the practical reality is a sovereign kingdom that raids the imperial coast and has
never been retaken.

The islanders' reading is religious. They hold that when their ancestors broke away heaven itself
blessed the act – the gods withdrawing their favor from the empire and bestowing it on the Nine
Mountains – and they offer the unbroken imperial lineage as proof, where the mainland's line has been
interrupted by conquest and civil war. To the islanders this is evidence that they are heaven's chosen
people and the mainland a fallen realm.

The date is the empire's own count of the stalemate rather than a year either archive gives.
