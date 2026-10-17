---
shortcode: ondarethfall
name: {full: The Fall of the Last King of Ondareth, aliases: [The Rising at Thornbury]}
type: lore
subType: history
description: "About 440 AF the coast levies under Zalmen threw down King Tralkar's castle at Thornbury, and the shipmasters who had paid for the rising built a republic out of what travelers had told them about Vylaria."
tags: [history]
data:
  culture: aelwythanclt
  packFolder: aelwyth
  events:
    - when: ~440
      kind: revolt
      depth: region
      sources: [affiliation-repblcndrth, place-thornbury, place-ondareth]
      summary: >-
        Tralkar, the last king of Aelwyth's western coast, taxes the carrying trade to ruin and hangs the captains who complain. The coast's levies under Zalmen take Thornbury and throw his castle down, and the captains, who need a government that is not a king, build one out of what travelers have told them of Vylaria: a Senate, senators, mantles and magistracies with Vylarian names. They get the forms and miss the meaning, and the republic has kept both.
      standing: attested
      where:
        locus: [place-thornbury]
        reach:
          - place: place-ondareth
            how: a coast that had lived under a king becomes a republic of shipmasters and landholders with a levy of citizens
            knowledge: named
          - place: place-cntrlhghlnds
            how: the highland farms supply the levies that Zalmen marched
            knowledge: named
      who: [{ref: affiliation-repblcndrth, role: actor}]
      follows:
        - event: lore-vylarirpbl
          how: enabled
          note: the story of the Vylarian Republic, as travelers told it on the Thornbury quays, gave the captains their model
      accounts:
        - by: affiliation-repblcndrth
          says: >-
            Citizens and soldiers threw down a tyrant and have governed themselves ever since.
          agrees: partly
          withholds: that the shipmasters who ran the rising took the government for themselves
        - by: affiliation-vylarinmpr
          says: Nothing. No imperial clerk records an event on the far shore of that island.
          agrees: silent
      unresolved:
        - what Tralkar's castle looked like before it was thrown down
        - which traveler first described the Vylarian Senate on the Thornbury quays
---

The Fall of the Last King of Ondareth began as a tax dispute in [[place-ondareth|Ondareth]], the only part of [[place-aelwyth|Aelwyth]] that was a republic on purpose. **[Tralkar]{.name data-type="being/npc"}**, the last king of the western coast, taxed the carrying trade until it could not pay and then hanged the captains who said so. The captains of the coast were the one class on it with ships, money and men used to command, and they were the ones he ought not to have hanged.

## The Rising

The levies came from the coast towns and the highland farms behind them, and **[Zalmen]{.name data-type="being/npc"}** led them. He took [[place-thornbury|Thornbury]] in a season and threw the king's castle down on its rock, so completely that no wall stands above the second course. Tralkar did not survive the siege, and no one claimed his place.

## A Government Out of Hearsay

The captains had won a war and needed a way to govern what they had won, and they needed it not to be a king. They knew of one model. Shipmasters who had reached the mainland, and mainland factors who had put in at Thornbury, had told them about [[lore-vylarirpbl|the Vylarian Republic]]: a Senate of landholders, officers who held command for a year, a people who deposed their last king and went on to rule half the world. The captains took it down as it had been told and built it. Senators were named and given mantles, magistracies were established with Vylarian names, and a civic calendar of processions was assembled from what the speakers remembered.

Almost no one in Thornbury has ever seen the original, and the Senate has never been corrected. The forms were copied without being understood, and Ondareth has performed them in earnest for nearly three centuries.

## What It Left

- **The [[affiliation-repblcndrth|Republic of Ondareth]].** A Senate at Thornbury whose seats are bought and whose legions are the best-drilled on the island.
- **The Senate house and its portico.** Raised by masons working from descriptions of buildings none of them had seen.
- **The tyrant's rock.** The broken castle above [[place-thornbury|Thornbury]], climbed by the Senate once a year.
- **The citizen-soldier tradition.** Service in the levy as the road to office, from Zalmen's army.

## See Also

[[affiliation-repblcndrth|The Republic of Ondareth]]
: the government the rising made

[[place-thornbury|Thornbury]]
: the Senate house and the tyrant's rock

[[lore-vylarirpbl|The Establishment of the Vylarian Republic]]
: the story the captains copied
