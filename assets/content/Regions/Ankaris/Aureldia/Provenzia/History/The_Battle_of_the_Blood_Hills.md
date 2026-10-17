---
shortcode: bloodhillsbtl
name: {full: The Battle of the Blood Hills, aliases: [The Battle of Keravel's Blood Hills]}
type: lore
subType: history
description: "About 248 AF the Black Flame's war-bands in the western province met the Knights of the Sacred Forge in the hills east of Keravel; the warlord Hazarak Bloodhand fell, a storm ended the fighting, and the Maul of Gashang was lost."
tags: [history]
data:
  packFolder: provenzia
  events:
    - when: ~248
      kind: battle
      depth: region
      sources:
        - place-bloodhills
        - place-ceravelvale
        - place-belsaren
        - affiliation-blackflame
        - affiliation-sacredforge
        - scenario-maulgashng
      summary: >-
        A generation after the Schism the Black Flame's war-bands in the western province gather under the Ashlord Hazarak Bloodhand and burn the Forge's temples along the Tarvénian frontier. The Knights of the Forge meet them in the hills east of Keravel. The therkos, bound by the Empire's tolerance of both faiths, does not intervene. Hazarak falls to a flank attack led by Sir Ilendor; a storm ends the fighting, and the Maul of Gashang is lost.
      standing: attested
      names:
        - {name: the Battle of Keravel's Blood Hills, by: affiliation-sacredforge}
        - {name: the Blood Hills, by: place-ceravelvale}
      where:
        locus: [place-bloodhills]
        reach:
          - place: place-ceravelvale
            how: shepherds will not graze the slope, and bandits shelter in it because pursuers will not follow
            knowledge: named
          - place: place-belsaren
            how: its lords covet the road into the hills, where the Black Flame's relic is said to lie
            knowledge: named
          - place: place-provenzrgn
            how: the Sacred Forge keeps the greatest political influence it holds anywhere in the province where the Flame was beaten, and its Hamsarnor resides there
            knowledge: named
      who:
        - {ref: affiliation-blackflame, role: actor}
        - {ref: affiliation-sacredforge, role: actor}
        - {ref: affiliation-vylarinmpr, role: witness}
      follows:
        - event: lore-ustaranschsm
          how: caused
          note: the quarrel between the Forge-Lord's two faiths becomes a war in a province whose therkos will not choose
        - event: lore-westernwars
          how: enabled
          note: the province the Flame fought in is the one the legions made
      accounts:
        - by: affiliation-sacredforge
          says: >-
            The Flame came out of the hills with fire and the Forge's knights put it down.
          agrees: full
          withholds: that the storm, and not the knights, ended the fighting
        - by: affiliation-blackflame
          says: >-
            Hazarak's maul went into the hills because the god took it back, and the zealots who hid it keep faith with the god.
          agrees: partly
        - by: affiliation-vylarinmpr
          says: >-
            A disturbance between two licit faiths in the western province, on which the therkos properly took no action.
          agrees: partly
          withholds: how many temples burned
      unresolved:
        - where in the hills the Maul of Gashang now lies
        - whether the storm was the Flame's working or a storm
---

The Battle of the Blood Hills was [[affiliation-blackflame|The Black Flame]]'s most infamous battle, fought in the hills east of [[place-ceravelvale|Keravel Vale]], and the ground is still called **[[place-bloodhills|The Blood Hills]]**. The battle was the first great war between the two faiths of [[lore-ustarondty|Ústaron]], the Forge-Lord, and it was fought a generation after [[lore-ustaranschsm|The Ústaran Schism]] had split them.

## Two Faiths in One Province

The [[affiliation-vylarinmpr|Vylarian Empire]]'s _therkoi_ (governors) in the western province permitted both faiths. [[affiliation-sacredforge|The Sacred Forge]] kept the temples and the endowments and the Flame kept what the Forge had not wanted, and in the frontier country east of [[place-aureliane|Aurelane]] the second grew faster than the first. By about 248 AF its war-bands had put themselves under one Ashlord, **[Hazarak Bloodhand]{.name data-type="being/npc"}**, a warlord known for his cruelty and his mastery of war, who carried the **[[scenario-maulgashng|Maul of Gashang]]**, a spiked mace the Flame's priest-artificers had made.

Hazarak's bands burned the Forge's temples along the Tarvénian frontier, and the Forge called out its knights. The _therkos_, who held that the law protected both faiths, did not move a legion.

## The Hills

The two hosts met in the hills east of Keravel. The [Cohorts of Gashang]{.name data-type="affiliation"} took the high ground and pushed the Forge's line back through the morning. Hazarak fought at the head of his cohorts, and the knights who faced him faltered before the maul.

**Sir [Ilendor]{.name data-type="being/npc"}**, a commander of the Forge, led a flank round the ridge and struck Hazarak down. The Flame's line began to give. Both sides were already ruined, and a storm broke over the hills before either could finish. The hosts left the field, and the maul stayed where it had fallen.

## After

The storm cleared to a hillside strewn with the dead, and the Flame's zealots and the Forge's knights each tried to get back to the maul. Neither side held the field long enough to take it. The Flame's loyalists found it in time and moved it to a cave shrine nearby, where they set traps to keep it for a worthy successor.

The Forge made the battle its own. It had beaten the Flame at the cost of its knights, and in the province the victory is its own. The Empire's _therkoi_, who had watched the whole of it from Aurelane, drew the conclusion that the quarrel was one the province's faiths would settle among themselves. The Forge drew another, and it carried the grievance against an Empire that would not choose between the faiths for the next three and a half centuries ([[lore-charterwar|The War of the Charter]]).

## What It Left

- **The Blood Hills.** A blood-field east of Keravel ([[place-bloodhills|The Blood Hills]]).
- **The Gashang shrine.** A cave the zealots made, whose traps still guard the relic ([[scenario-maulgashng|The Maul of Gashang]]).
- **The Forge's standing in the [[place-provenzrgn|Provenzia Region]].** The faith's greatest influence and the seat of its Hamsarnor.

## See Also

- [[place-bloodhills|The Blood Hills]]—the ground the battle left
- [[affiliation-sacredforge|The Sacred Forge]] · [[affiliation-blackflame|The Black Flame]]
- [[lore-ustaranschsm|The Ústaran Schism]]—the split that made the two faiths
- [[lore-charterwar|The War of the Charter]]—where the Forge's grievance came due
