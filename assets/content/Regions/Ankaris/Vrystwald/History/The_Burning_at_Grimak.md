---
shortcode: grimakburning
name: {full: The Burning at Grimak, aliases: [The Waking at Grimak, The Empty Mound]}
type: lore
subType: history
description: "About 532 AF a Grukar tribe woke in a marsh thicket in the famine-emptied forest of Skathwald and took three Varokh villages in a winter; four winters later the Skathwald villages went in over the frozen marsh and burned the nest with its spawner in it, and Mahnreth raised an empty mound for the people the Grukar had taken."
tags: [history]
data:
  culture: varokhiclt
  packFolder: vrystwald
  events:
    - id: waking
      when: ~532
      kind: catastrophe
      depth: region
      stated: {calendar: wintertally, text: "193 SR"}
      sources: [place-skathwald, place-grkrhlmrgn, lore-grukarfolk, place-grimak]
      summary: >-
        A Grukar tribe that has outgrown its ground carries a young spawner deep into the famine-emptied forest of Skathwald and wakes a new nest in a marsh thicket among Varokh villages. In one winter it takes three villages. The survivors walk west under Mahnilda yra Erthrúnd wur Mahnreth, a household mistress of one of them, and cut the clearing that becomes Mahnreth.
      standing: attested
      names: [{name: the Waking at Grimak, by: lore-varokhiclt}]
      where:
        locus: [place-grimak]
        reach:
          - place: place-skathwald
            how: three villages are gone in a winter, and the reach's survivors scatter to their neighbors
            knowledge: named
      who: [{ref: lore-grukarfolk, role: actor}, {ref: affiliation-vrystwldtrbs, role: victim}]
      follows:
        - event: "lore-threewinters#winters"
          how: enabled
          note: the famine had emptied the eastern forest the tribe budded into
      accounts: []
      unresolved:
        - which of the three villages fell first, and why none of them called the others
    - id: burning
      when: ~536
      kind: battle
      depth: region
      stated: {calendar: wintertally, text: "197 SR"}
      sources: [place-skathwald, place-grimak, lore-grukarfolk, lore-bloodfield]
      summary: >-
        Four winters after the waking, the Skathwald villages raise a common muster under Grimulf yra Skathrúnd wur Grimstein, go in over the frozen marsh in deep winter and burn the nest with its spawner in it. The fight in the thicket kills most of the tribe and a third of the muster. Mahnreth raises an empty mound, Mahnhrum, for the people the Grukar had taken, since nothing of them was left to bury.
      standing: attested
      names: [{name: the Burning at Grimak, by: lore-varokhiclt}]
      where:
        locus: [place-grimak]
        reach:
          - place: place-skathwald
            how: the reach's villages settle into the shapes they keep now, and the thicket becomes a field nobody enters
            knowledge: named
      who: [{ref: affiliation-vrystwldtrbs, role: actor}, {ref: lore-grukarfolk, role: victim}]
      follows:
        - event: "lore-grimakburning#waking"
          how: answered
          note: the muster answered the villages taken
      accounts:
        - by: lore-varokhiclt
          says: >-
            The muster burned the nest and named its own dead and burned them, and the people the Grukar took had no one to name them.
          agrees: full
      unresolved: ["what received the people the Grukar took, if anything did"]
---

The account of The Burning at Grimak begins at [[place-mahnryth|Mahnreth]] in [[place-skathwald|Skathwald]], where the village raises its lament at the seasonal turning beside a mound with nobody in it. The mound is [[place-mahnhrom|Mahnhrum]], the kinsmen's mound, and it was raised for the people the [[lore-grukarfolk|Grukar Folk]] took in the winters of the Waking, of whom nothing was left to bury. Every Skathwald child is taken to it once, and told why the village sings there and never at the thicket a day's walk east.

## The Waking

The famine of [[lore-threewinters|The Three Winters]] emptied the eastern forest. Villages that had held Skathwald's clearings against the Grukar for centuries lost a third of their people, and the ones that were left drew in toward each other and stopped walking their old bounds. The [[place-grkrhlmrgn|Grukarholm Region]] is a prevalence and not a country, and a Grukar tribe that outgrows its ground does not cross a border to bud: a faction carries a young spawner, an Ahk, far enough from its parent to wake, and any unclaimed forest will serve.

About 532 one did, in a marsh thicket among Varokh villages in the emptied east. Nobody saw it coming, because nobody was walking that ground any more. In one winter the new tribe took three villages. The reciters do not agree which fell first or why none of them called the others in time, and the question is still asked in Skathwald with an edge in it. The survivors of the three walked west in deep winter under **[Mahnilda yra Erthrúnd wur Mahnreth]{.name data-type="being/npc"}**, a household mistress of one of them, carrying what stores they had left, and cut a clearing a day's walk from the nearest village. It became Mahnreth, the clearing of the kinsmen. One of the lost villages had kept its totem in a standing stone, and its scattered families still visit the stone at [[place-weskstein|Weskstein]], where a village has grown up around it since.

## The Burning

For four winters the nest grew, and the raids out of the thicket grew with it. In 536 the Skathwald villages did what the reach had never done against the Grukar: their elders met, agreed that the danger was common to all of them, and acclaimed one War Chief, **[Grimulf yra Skathrúnd wur Grimstein]{.name data-type="being/npc"}**. He waited for the hardest freeze of the winter, when the marsh would bear a man, and took the muster in over the ice at first light.

The Grukar fight hardest at the spawner, and the muster had to cut its way to the spawn-chamber at the thicket's heart through the whole tribe. It burned the chamber with the Ahk in it and fired the thicket behind it. Most of the tribe died in the burning and the fight before it, and so did a third of the muster. The muster's own dead were carried out, named and burned, and went home. The people the Grukar had taken in the four winters before had already been eaten, and there was nothing of them to carry.

## What It Left

- **[[place-grimak|Grimak]], the fierce thicket.** A ring of burned stumps around a black hollow, regrown with thorn. It is a [[lore-bloodfield|blood-field]]: the people taken there died unreceived, and something in the thicket calls Varokh names in a grandmother's voice.
- **[[place-mahnhrom|Mahnhrum]], the empty mound.** A kinsmen's mound with grave goods and no dead in it, for the taken. A Grukar raid that takes another of the village's people opens the old argument at once: whether to open the mound for the new name, or raise another.
- **[[place-mahnryth|Mahnreth]].** A refugee clearing that became a lasting village, whose old people can still say which of the three lost villages their kindred came from.
- **The custom at [[place-frithholt|Frithholt]].** Frithholt, the village nearest the old lost ground, shelters displaced kin without claiming them as its own, and has since the Waking.
- **The [[place-radholt|Radholt]] alarm.** The grove council at Radholt sounds its alarm if anyone is missing near the thicket, and the whole village goes out with torches before dark.

## See Also

[[place-grimak|Grimak]]
: the thicket and the field

[[place-skathwald|Skathwald]]
: the reach where the Grukar thicken

[[lore-grukarfolk|Grukar]]
: spawners, tribes and how a tribe buds

[[lore-wintertally|The Tally of Winters]]
: the Southern Raiding as the forest counts it
