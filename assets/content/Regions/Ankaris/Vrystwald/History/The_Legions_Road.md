---
shortcode: legionsroad
name: {full: The Legions' Road, aliases: [The Friendly Chiefs, The Posts Given Up]}
type: lore
subType: history
description: "From about 120 AF the Vylarian Empire cut a road north out of Moktur into the Vrystwald and raised forward posts along it; it bought the War Chiefs nearest the road about 200–260, lost a legion at Skathhreth in 291, and gave the posts up about 340, and the road is the Blackpine Wolves' hunting ground now."
tags: [history]
data:
  packFolder: vrystwald
  events:
    - id: road
      when: ~120
      until: ~180
      kind: making
      depth: region
      stated: {calendar: wintertally, text: "1 LR"}
      sources:
        - place-vandstein
        - place-thrastein
        - affiliation-blckpnwlvs
        - affiliation-vrystwldtrbs
        - place-moktur
      summary: >-
        The Empire at its height cuts a road north out of Moktur over the Vandstein highlands toward the crossing at Waldburg, and raises a chain of timber-and-stone forward posts along it, each a day's march from the last. Milestones go up beside it, and Vylarian coin comes up it and never goes back down.
      standing: attested
      names: [{name: the Legions' Road, by: lore-varokhiclt}]
      where:
        locus: [place-vandstein]
        reach:
          - place: place-moktur
            how: the province becomes the base of the northern advance, and its valleys fill with the road's garrisons
            knowledge: named
          - place: place-vrystwald
            how: Vylarian coin becomes the forest's money, carried north by the road and never sent back
            knowledge: named
      who: [{ref: affiliation-vylarinmpr, role: actor}]
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The northern road carried the Empire's peace into the forest as far as the Empire chose to take it.
          agrees: partly
          withholds: that the peace reached exactly as far as the nearest post's walls
      unresolved: [how far north the last post stood before the Moldún]
    - id: chiefs
      when: ~200
      until: ~260
      kind: treaty
      depth: region
      stated: {calendar: wintertally, text: "81 LR"}
      sources: [affiliation-provncmktr, place-pinnhald, place-stennvold, affiliation-vrystwldtrbs]
      summary: >-
        Moktur's governors buy the War Chiefs of the villages nearest the road with iron and silver and call them allies. Hildulf yra Theódhild wur Balthrýth takes the governor's gift and moves his kindred south of the highlands onto land the Empire gives them; his village's elders withdraw their support and acclaim another War Chief, and he goes south a man without a village. The kindreds who went with the friendly chiefs are the Varokh of Moktur now.
      standing: attested
      names: [{name: the Friendly Chiefs, by: affiliation-provncmktr}]
      where:
        locus: [place-vandstein]
        reach:
          - place: place-moktur
            how: Varokh kindreds settle inside the province on granted land, and the half-Varokh towns of Pinnhald and Stennvold begin
            knowledge: named
      who:
        - {ref: affiliation-provncmktr, role: actor}
        - {ref: affiliation-vrystwldtrbs, role: victim}
      follows:
        - event: "lore-legionsroad#road"
          how: enabled
          note: the chiefs bought were the chiefs nearest the road
      accounts:
        - by: affiliation-provncmktr
          says: >-
            Friendly chiefs and their people were settled on good land within the Empire's protection.
          agrees: partly
          withholds: that the chiefs were bought, and that their villages did not go with them
        - by: lore-varokhiclt
          says: >-
            A War Chief who takes from strangers to rule his kin has no seat to sell, and Hildulf found that out on the road south.
          agrees: disputes
      unresolved: []
    - id: posts
      when: ~340
      kind: loss
      depth: region
      stated: {calendar: wintertally, text: "1 SR"}
      sources: [place-vandstein, place-thrastein, place-vrystwald, place-moktur]
      summary: >-
        Unable to supply the posts after Skathhreth and too costly to garrison, the Empire withdraws them one by one to the line of Moktur's mountains. The Varokh burn what will burn and leave the stone, and the reciters begin the count again from the winter the last post burned.
      standing: attested
      names: [{name: the Posts Given Up, by: lore-varokhiclt}]
      where:
        locus: [place-vandstein]
        reach:
          - place: place-moktur
            how: the frontier falls back to the mountains, and Moktur's valleys lie open to the forest
            knowledge: named
      who: [{ref: affiliation-vylarinmpr, role: actor}]
      follows:
        - event: "lore-skathhrethlss#legion"
          how: caused
          note: the road could not be held without the legion it lost
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The northern line was drawn back to defensible ground.
          agrees: partly
          withholds: that nothing north of the mountains was ever retaken
      unresolved: ["whether any post was handed over rather than burned, and to whom"]
---

A Varokh in [[place-vandstein|Vandstein]] who wants to say that a thing is foreign and will not last calls it "a milestone". The road the milestones stand beside is the **Legions' Road**, and it is the only road anyone ever built in [[place-vrystwald|Vrystwald]]. It ran north out of [[place-moktur|Moktur]] for a hundred and sixty years and then stopped running, and every Vylarian ruin in the southern woods stands on it.

## The Road Comes North

About 120 AF the [[affiliation-vylarinmpr|Empire]] at its height cut a road north out of Moktur over the Vandstein highlands, aimed at the river crossing at [[place-waldburg|Waldburg]]. Its engineers raised a chain of timber-and-stone forward posts beside it, each a day's march from the last, and set a milestone at every mile. Vylarian coin came up the road with the garrisons and stayed in the forest when the garrisons went back down it, which is why the aurion is the money of Vrystwald to this day.

The road went where the engineers wanted except in one place. At **Fródhaven** it bends around a sacred shelter of the Varokh village there, and the bend is still in the ruts. The village tells it as the one time the legions were made to ask, and the tellings disagree about what the village was paid.

## The Friendly Chiefs

From about 200 the governors of the [[affiliation-provncmktr|Province of Moktur]] tried a cheaper way of holding the road than garrisons. They bought the War Chiefs of the villages nearest it with iron and silver, called them allies, and offered good land south of the highlands to any who would bring their people. The best remembered is **Hildulf yra Theódhild wur Balthrýth**, War Chief of Balthrýth, who took the governor's gift and led his kindred south over the passes. His village's elders did not go with him. They withdrew their support from him, as a village may, and acclaimed another War Chief from the Hródthúl who had stayed. Hildulf went south a man without a village, and the kindreds who followed him and the others like him are the [[lore-varokhiclt|Varokh]] communities that sit inside Moktur's border now, the half-Varokh blood of [[place-pinnhald|Pinnhald]] and [[place-stennvold|Stennvold]].

Balthrýth's pass scouts will not serve a foreign claimant, and they say so before they are asked. The forest's contempt for an office used to take from kin is older than Hildulf, but he is the man the reciters name when they explain it.

## The Posts Given Up

The road could carry a legion north, and in 291 one marched up it to burn Waldburg and never came back ([[lore-skathhrethlss|The Loss of the Legion at Skathhreth]]). After that the posts could neither be supplied nor safely relieved. About 340 the Empire withdrew them one by one to the line of Moktur's mountains, and the Varokh burned what would burn behind them and left the stone, because there is nothing in stone a village needs. The reciters began the count again from the winter the last post burned, and the forest's southern edge has been the Empire's frontier and not its road ever since.

## What It Left

- **The road.** Overgrown and broken, its bridges gone to the rivers, its ruts still legible under the moss where the ground is dry. The [[affiliation-blckpnwlvs|Blackpine Wolves]] hunt travelers on a stretch of it north of the Vylarian border garrison, among milestones that still count miles to a crossing no legion reached.
- **The posts.** Stone shells in the southern woods, picked over by generations of Varokh treasure-hunters. [[place-thrastein|Thrástein]]'s standing stone watches one, and a Vylarian claimant is presently trying to buy the ground under it; **Ríkstein**'s ruined tower tempts outsiders to claim the ground around it.
- **The Varokh of Moktur.** Kindreds a village disowned, living on the Empire's land under the Empire's lords, and still Varokh in speech and in their totems.
- **Vylarian coin.** The forest's money, which nobody in the forest has ever been taxed in.

A milestone that marks more than distance is a story every Vandstein child knows: one stone on the road was cut with a column of names instead of a number, and the treasure-hunters who have looked for it have found three different stones, each claimed to be the one.

## See Also

- [[lore-skathhrethlss|The Loss of the Legion at Skathhreth]]—the legion the road carried north
- [[place-vandstein|Vandstein]]—the highlands the road crossed
- [[affiliation-provncmktr|Province of Moktur]]—the province that built it and bought the chiefs
- [[lore-wintertally|The Tally of Winters]]—the Legions' Road and the Southern Raiding as the forest counts them
