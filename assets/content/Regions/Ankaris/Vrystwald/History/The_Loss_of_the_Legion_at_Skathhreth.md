---
shortcode: skathhrethlss
name:
  full: The Loss of the Legion at Skathhreth
  aliases: [The Breaking of the Talisman, The Sundered Talisman]
type: lore
subType: history
description: "In 291 AF a Vylarian legion marched up the Legions' Road to burn Waldburg; the first common muster anyone can name let it reach the Moldún and took it at the ford in the rain, and the next spring the elders broke the talisman of the common command so that its War Chief could not keep it."
tags: [history]
data:
  culture: varokhiclt
  packFolder: vrystwald
  events:
    - id: legion
      when: ~291
      kind: battle
      depth: region
      stated: {calendar: wintertally, text: "172 LR"}
      sources:
        - place-skathhreth
        - place-moldunriver
        - place-waldburg
        - affiliation-vylrnmltry
        - affiliation-vrystwldtrbs
      summary: >-
        A legion of about five thousand marches up the Legions' Road in late summer to burn Waldburg and end the raids. The villages along its line raise the first common muster anyone can name and acclaim Dorgulf yra Grimskorn wur Thrastein its War Chief. The muster lets the legion reach the Moldún and takes it at the ford in the rain, with the column strung out across the water. Almost none of the legion leaves the forest, and its eagle goes into the river.
      standing: attested
      names:
        - {name: Skathhreth, by: lore-varokhiclt}
        - {name: the loss of the northern legion, by: affiliation-vylarinmpr}
      where:
        locus: [place-skathhreth]
        reach:
          - place: place-moktur
            how: the province loses its field army in an afternoon, and remembers the Varokh as the army-eaters
            knowledge: named
          - place: place-waldburg
            how: the crossing the legion marched for becomes the place elders meet when danger is common to all of them
            knowledge: named
      who:
        - {ref: affiliation-vrystwldtrbs, role: actor}
        - {ref: affiliation-vylarinmpr, role: victim}
      follows:
        - event: "lore-legionsroad#road"
          how: enabled
          note: the road carried the legion to the ford
      accounts:
        - by: lore-varokhiclt
          says: >-
            The villages along the road agreed for once, and the legion found out what the forest is when it agrees.
          agrees: full
        - by: affiliation-vylarinmpr
          says: >-
            The legion was lost on campaign beyond the northern frontier and struck from the list, as a legion that loses its eagle must be.
          agrees: partly
          withholds: where, to whom, and that the eagle was never recovered
      unresolved:
        - where in the riverbed the eagle went down
        - how many of the legion were taken alive, and what became of them
    - id: talisman
      when: ~292
      kind: dissolution
      depth: region
      stated: {calendar: wintertally, text: "173 LR"}
      sources: [place-waldburg, lore-frodradrnk, being-thrnkbldtscbr]
      summary: >-
        Dorgulf keeps the muster in arms through the winter after the battle and calls himself War Chief of the tribes. In the spring the elders who acclaimed him meet at Waldburg, and Vandilda yra Vethskald wur Dunkelwald, a Deepwood Shaman, breaks the talisman that stood for the common command so that nobody can hold it again; each village carries a fragment home. Dorgulf's own war-band leaves him, and the tellings disagree about how he died.
      standing: legendary
      names: [{name: the Breaking of the Talisman, by: lore-varokhiclt}]
      where:
        locus: [place-waldburg]
        reach:
          - place: place-vrystwald
            how: a common War Chief's command ends with the response, and the elders who acclaim one bring their fragments to prove it
            knowledge: named
      who: [{ref: affiliation-vrystwldtrbs, role: actor}]
      follows:
        - event: "lore-skathhrethlss#legion"
          how: caused
          note: the victory made a War Chief who would not give the command back
      accounts:
        - by: lore-varokhiclt
          says: >-
            The elders broke it at Waldburg so that the forest would never again have to take a command back from the man it gave it to.
          agrees: full
      unresolved: [how Dorgulf died, "how many fragments there were, and how many are still kept"]
---

Every Vylarian officer posted to [[place-moktur|Moktur]] learns the forest's name for the [[place-moldunriver|Moldún River]]'s ford before he learns the passes: [[place-skathhreth|Skathhreth]], the harm ford. The Loss of the Legion at Skathhreth came in 291, when the largest force the [[affiliation-vylarinmpr|Vylarian Empire]] ever sent into [[place-vrystwald|Vristwald]] marched to the ford and almost none of it came back. The Varokh remember the battle for what it proved and the winter after it for what it nearly cost them.

## The March to Waldburg

By the end of the second century AF [[lore-legionsroad|The Legions' Road]] ran north out of Moktur through [[place-vandstein|Vandstein]] with a post at every day's march, and the friendly chiefs the _therkoi_ (governors) had bought had been disowned by their own villages one after another. The raids on the road did not stop. In the late summer of 291 a legion of about five thousand marched up it to burn [[place-waldburg|Waldburg]], the river crossing where the raiders sold what they took, and to end the raids where they were paid for.

The villages along the road did something they had never done. Their elders met, agreed that the danger was common to all of them, and acclaimed one War Chief for the response: **[Dorgulf yra Grimskorn wur Thrastein]{.name data-type="being/npc"}**, War Chief of [[place-thrastein|Thrastein]], whose village the road ran past. It was the first common muster anyone can name. Dorgulf did not meet the legion on the road. He let it march, burned what it left behind it, and kept his war-bands in the trees on either side of the column for nine days.

## The Ford in the Rain

The legion reached the Moldún in heavy rain, with the river high and the ford barely passable, and began to cross because the alternative was another week in the forest. Dorgulf waited until the column was strung out across the water, its van on the north bank and its baggage still on the south, and then the muster came out of the trees on both banks at once. A legion in a river cannot form a line. The fight lasted an afternoon, and the river did as much of the killing as the war-bands did. The eagle went into the water with the men around it, and nobody on either side saw where.

The Empire struck the legion from its list, as a legion that loses its eagle must be struck. In the forest the dead were not carried home, because there was nobody to carry them home to: several thousand men died far from their gods' ground and no rite was performed over any of them. The ford has been a thin [[lore-bloodfield|blood-field]] since.

## The Winter He Would Not Give It Back

A common War Chief's command ends with the response. Dorgulf's did not. He kept the muster in arms through the winter after the battle, fed it from the villages that had raised it, and called himself War Chief of the tribes. He had a case: the Empire still held the road, and a muster that went home could not be raised again in time. The elders had a better one, which every Varokh still knows by heart. A man who keeps a command after the danger has passed has made himself something the forest has never had and never wanted.

In the spring the elders who had acclaimed him met at Waldburg. The talisman of the common command had stood for the muster's agreement since the elders first met, and **[Vandilda yra Vethskald wur Dunkelwald]{.name data-type="being/npc"}**, Shaman of [[place-dunkelwald|Dunkelwald]], broke it before them so that nobody could hold it again. Each village took a fragment home. A common War Chief is acclaimed now only when the elders lay their fragments together, and the command ends when they take them back. Dorgulf's own war-band left him that spring.

The tellings disagree about what became of him, and the Varokh keep all three:

- **The Thrastein telling.** He walked into the Moldún at the ford alone and went down where the eagle had, and the ford keeps him with the legion.
- **The [[place-vethwald|Vethwald]] (Deepwood) telling.** The elders sent men after him, and Vandilda would not say whose.
- **The telling nobody admits to.** He went south over the passes and took the _therkos_'s silver, as [Vristulf yra Theodhild wur Balthreth]{.name data-type="being/npc"} had, and died in Moktur an old man. Thrastein's reciters call this the Mokturan telling, and the Mokturans have never heard it.

## What It Left

- **[[place-skathhreth|Skathhreth]].** The thinnest blood-field in the forest, upstream of which Vylarian loggers are felling the [Garskald]{.name data-type="affiliation/lineage"}'s sacred trees without knowing what the ford is.
- **The eagle in the river.** Moktur has wanted it back for four centuries, and a _Lusar_ who raised it would make a career.
- **The Sundered Talisman.** Fragments kept by village elders across the forest, laid together at Waldburg when a common War Chief is acclaimed. Some villages' fragments have been lost, traded or stolen in four hundred winters, and nobody has ever counted how many remain.
- **The rule.** The forest's suspicion of any War Chief whose renown outgrows his village. [[being-thrnkbldtscbr|Thornak Bludtusk Barsk]]'s ambition to rally the villages against [[affiliation-sonsmuspell|The Sons of Eldheim]] is measured against Dorgulf's winter by every elder who hears it.

## See Also

[[place-skathhreth|Skathhreth]]
: the ford and the field

[[lore-legionsroad|The Legions' Road]]
: the road the legion marched up, and the posts it cost

[[place-waldburg|Waldburg]]
: where the elders broke the talisman

[[lore-frodradrnk|Frodrád]]
: the elders' seats and the common command
