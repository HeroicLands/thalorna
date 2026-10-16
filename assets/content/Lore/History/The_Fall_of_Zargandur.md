---
shortcode: zargandfall
name: {full: The Fall of Zargandur, aliases: [The Sortie from the North Gate]}
type: lore
subType: history
description: "In the second year of the Breaking, about 620 AF, the war-house of Zargandur rides out of the north gate to meet the Atarzád host and dies to the last rider; the city falls by noon and the pasture becomes the blood-field of Henhutpedin."
tags: [history]
data:
  packFolder: settinglore
  events:
    - when: ~620
      kind: fall
      depth: region
      sources:
        - place-zargandur
        - place-henhulpedin
        - affiliation-tribestrzd
        - affiliation-khzrncnfdrtn
      summary: >-
        On the last morning the strongest cavalry in the belt rides out of Zargandur's north gate to meet the Zhoqarod host on the pasture and is killed to the last rider, the house's princes among them. The city falls by noon, the first of the four the Atarzád take. The Tellumi dead are left unreceived and driven into a trench three days later.
      standing: attested
      where:
        locus: [place-henhulpedin]
        reach:
          - place: place-zargandur
            how: >-
              the city is held by the Zhoqarod ever since, and the House of Zargandur sits in exile
            knowledge: named
      who:
        - {ref: affiliation-tribestrzd, role: actor}
        - {ref: affiliation-khzrncnfdrtn, role: victim}
      accounts:
        - by: affiliation-khzrncnfdrtn
          says: >-
            The names of the riders were not read from the tablets, and the lamps were not lit.
          agrees: full
      unresolved: [how many riders the war-house put on the field]
---

[[place-zargandur|Zargandur]] was the war-city of the Tellumi, and it was the first the Atarzád took.

## The Last Morning

In the second year of the Breaking, about 620 AF, the war-house's cavalry rode out of the north gate to meet the Zhoqarod host on the pasture. It was the strongest cavalry in the belt. It was killed there to the last rider, the house's princes among them, and the city fell by noon.

## What Was Left

The Atarzád gave their own dead to the flame that night. The Tellumi dead were left, with no Delkoshekh beyond the wall and no names read. Three days later the Zhoqarod drove the bodies into a trench and filled it. The ground is [[place-henhulpedin|Henhutpedin]], a moderate blood-field of recurrence that the Zhoqarod keep for their own use.

## See Also

- [[place-henhulpedin|Henhutpedin]]—the field it made
- [[place-zargandur|Zargandur]]—the city it opened the war for
- [[lore-khazrynclt|The Tellumi]]—who call the war Turem, the Breaking
