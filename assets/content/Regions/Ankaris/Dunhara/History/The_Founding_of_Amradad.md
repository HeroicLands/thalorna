---
shortcode: amradfndng
name: {full: The Founding of Amradad}
type: lore
subType: history
description: "About 220 AF a confederation of the northern circuits settled for good at the great oases behind the Vilérian shore, walled the water and built in stone, and its war-leader became the first Shebarader of the Kingdom of Amradad; after the Storm of the Hundred Banners reached its walls in 315, the Kingdom raised Tahrodan to face every road."
tags: [history, dunhara]
data:
  culture: dunhariclt
  packFolder: dunhara
  events:
    - id: founding
      when: ~220
      kind: founding
      depth: region
      sources: [affiliation-kngdmmrdd, place-shebarakhend, place-amradadrgn]
      summary: >-
        A confederation of the northern circuits, whose tribes have wintered at the great oases behind the Vilérian shore for generations, stops leaving them. It walls the springs, cuts stone channels to the gardens and builds a court on the highest ground of the largest oasis. Its war-leader takes the title of Shebarader, and every standing among the settled tribes becomes his to grant.
      standing: attested
      where:
        locus: [place-shebarakhend]
        reach:
          - place: place-amradadrgn
            how: >-
              the oases of the northwest become a kingdom with fixed borders, a court and a standing army
            knowledge: named
          - place: place-dunhardsrtrgn
            how: >-
              the wells the confederation walls are closed to the tribes that shared them, and the tribes of the open desert count the settled Amradi as cousins gone soft
            knowledge: named
      who:
        - {ref: affiliation-kngdmmrdd, role: founder}
        - {ref: affiliation-dunhartrbs, role: witness}
      accounts:
        - by: affiliation-kngdmmrdd
          says: >-
            The Amradi were the only Dunhari clever enough to stop walking. The first Shebarader was war-leader of every tribe that answered his call, and the throne's claim over all the Dunhari peoples is that office kept.
          agrees: partly
        - by: affiliation-dunhartrbs
          says: >-
            The confederation walled water that every tribe had drunk from under the Laws of the Well. Its war-leader led the tribes for one season and named himself king of them for the rest of time.
          agrees: partly
      unresolved:
        - which tribes of the confederation settled and which went back to the circuits
        - whether the first Shebarader was ever chosen war-leader by any tribe outside his own confederation
    - id: walls
      when: ~316
      kind: raising
      depth: region
      sources: [affiliation-kngdmmrdd, place-tahrodan]
      summary: >-
        The Storm of the Hundred Banners reaches the Kingdom's walls from the east, the side they were not built to face, and breaks up there on its orghun's death. The Shebarader raises a citadel at the crossroads where the roads from Bizaria, Vedyara and the Khazrin meet, and walls Tahrodan to face every road.
      standing: attested
      where:
        locus: [place-tahrodan]
        reach:
          - place: place-amradadrgn
            how: >-
              every caravan from the interior passes under the citadel, and the toll taken there becomes the Kingdom's great revenue
            knowledge: named
      follows:
        - event: lore-hndrdbnnrs
          how: caused
          note: the host came at the walls from the unguarded side
      who: [{ref: affiliation-kngdmmrdd, role: actor}]
---

The Kingdom of Amradad dates itself from the season a confederation of the northern circuits stopped walking. **The Founding of Amradad**, about 220 AF, made the one settled realm of the [[place-dunharargn|Dunhara]], and the Storm that reached its walls a century later fixed where the Kingdom keeps its strength.

## The Confederation at the Oases

The great oases behind the [[place-vylarianse|Vilérian]] shore are the wettest ground in the desert. A confederation of the northern circuits wintered at them for generations, as other tribes did, and moved on with the grass in spring. About 220 AF it stayed. Its tribes walled the springs, cut stone channels from them to the gardens, and built on the highest ground of the largest oasis a court for their war-leader, who took the title of **Shebarader**. The place became [[place-shebarakhend|Shebarakhend]], the seat of the court.

The first Shebarader had led many tribes in war before he settled, and the Amradi say he settled as war-leader of them all. The tribes of the open desert remember the founding differently. Their poets say the confederation walled water that every tribe had drunk from under the [Laws of the Well]{.name data-type="lore/law"}, and that a war-leader chosen for one season named himself king for good. The two accounts agree on what happened and disagree on what it meant, and the arrangement they describe, a sovereign kingdom beside independent tribes, has held since.

## The Walls That Face Every Road

The Kingdom's first walls were built against raiders of the desert edge, and none faced east. In 315 [[lore-hndrdbnnrs|the Storm of the Hundred Banners]] came across the desert from the march of [[place-vedyarargn|Vedyara]] and reached them from that side. It broke up under the walls when its orghun died, and its bands scattered along the Amradi shore ([[lore-easternline|The Eastern Line]]).

The Shebarader of the time drew the lesson. At the crossroads where the roads from [[place-byzariargn|Bizaria]], from Vedyara and from the [[place-khzryndsrtrgn|Khazrin]] meet, he raised a citadel and walled [[place-tahrodan|Tahrodan]] around it, with walls facing every road. Every caravan from the interior passed under it on the way to the sea, and the toll taken at its gate became the Kingdom's great revenue. About 325 the new masters of the Vedyaran march, the [[affiliation-bhumipal|Bhumipal]], swore their first treaty with the Kingdom ([[lore-bhmplraise|the Raising of Bhumipal]]), and the caravan road from Vedyara to the sea has run through Tahrodan since.

## What It Left {#what-it-left}

- **The grant.** The Shebarader gave every standing among the settled tribes himself, by appointment, and could take it back. A sheikh who settled became an officer or a governor at his word, or became nothing, and no house of the [[affiliation-kngdmmrdd|Kingdom]] holds its place by blood but the throne's own.
- **The court.** The founders modeled their court on the old cities of the [[affiliation-ashanpnthn|Ashaian faith]], the princely courts of the [[affiliation-khzrncnfdrtn|Tellumi]] along the Grazian foothills, and raised fire-temples at the walled springs. The court poets set the meters and formal registers of the courtly tongue, which the Dunhari call Amradi.
- **The claim.** The Shebarader's heirs keep the founder's war-leadership as a claim over every Dunhari people. The tribes have never granted it.
- **The grudge.** The walled springs stay walled, and the tribes of the open desert count the Amradi as cousins who closed the water and went soft behind it.
- **The toll.** Tahrodan's citadel stands over the crossroads, and the silver taken at its gate pays for the court, the army and the temples.

## See Also {#see-also}

[[affiliation-kngdmmrdd|Kingdom of Amradad]]
: the realm the founding made

[[place-shebarakhend|Shebarakhend]]
: the oasis where the confederation settled

[[lore-easternline|The Eastern Line]]
: the hill forts the Empire raised against the Storm's scattered bands

[[place-tahrodan|Tahrodan]]
: the citadel raised at the crossroads

[[lore-hndrdbnnrs|The Storm of the Hundred Banners]]
: the host that reached the walls from the east

[[lore-bhmplraise|The Raising of Bhumipal]]
: the first treaty with the march kingdom

[[affiliation-dunhartrbs|Dunhara Tribes]]
: the cousins who kept walking
