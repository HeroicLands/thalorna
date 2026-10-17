---
shortcode: saelvricrusade
name: {full: The Saelvri Crusade, aliases: [The Hunting of the Saelvri]}
type: lore
subType: history
description: "Between about 694 and 703 AF the Synod of Dúnavarre sent the Order of the Just Blade to end the Saelvri, a forest people of the south-eastern woods, and the last of them were killed with their children in the Hushwood."
tags: [history]
data:
  culture: aelwythanclt
  packFolder: aelwyth
  events:
    - when: ~694
      until: ~703
      kind: war
      depth: region
      sources:
        - affiliation-kingdmdnvr
        - affiliation-saelvri
        - affiliation-justbladeordr
        - place-hushwood
        - place-dunavarre
      summary: >-
        The Synod of Dúnavarre declares the Saelvri, a forest people of the south-eastern woods, a danger to the island and sends the Order of the Just Blade to end them. Over nine years they are hunted out of their valleys, and the last of them, several thousand with their children, are killed in the wood they had kept, in three days at the turn of the year. The Synod's stated reason is raiding. The Order's knights hear others, and one Knight-Captain holds the crusade to be a betrayal of everything the Order swears.
      standing: attested
      names:
        - {name: the Saelvri Crusade, by: affiliation-justbladeordr}
        - {name: the Hunting, by: affiliation-saelvri}
      where:
        locus: [place-hushwood]
        reach:
          - place: place-dunavarre
            how: the kingdom's own records name the Saelvri its nemesis, and its patrols lose men in the wood they cleared
            knowledge: named
          - place: place-aelwyth
            how: the island's forest peoples learn that a realm will end a people it fears, and trust the Synod accordingly
            knowledge: named
      who:
        - {ref: affiliation-kingdmdnvr, role: actor}
        - {ref: affiliation-justbladeordr, role: instrument}
        - {ref: affiliation-saelvri, role: victim}
        - {ref: being-toradhtaravren, role: witness}
      follows:
        - event: lore-dunavarresynod
          how: enabled
          note: only a government that answers to nobody outside its closed session could order an extermination and not be asked to explain it
      accounts:
        - by: affiliation-kingdmdnvr
          says: >-
            A raiding people was a danger to the island, and the danger was ended.
          agrees: full
          withholds: why the Synod sought the end of a people whose raiding it never proved
        - by: being-toradhtaravren
          says: >-
            The crusade is a betrayal of the Order's oaths and of Árdavon's principles.
          agrees: disputes
          withholds: that she has said it aloud to anyone
        - by: affiliation-saelvri
          says: Nothing. No Saelvri is known to remain who could say what they kept.
          agrees: silent
      unresolved:
        - what the Saelvri kept that the Synod wanted gone with them
        - whether any Saelvri survived the three days, and whether a child was carried out of the wood
---

In The Saelvri Crusade, the [[affiliation-kingdmdnvr|Kingdom of Dúnavarre]]'s own records call the **[[affiliation-saelvri|Saelvri]]** its nemesis. The crusade that ended them is the thing the [[affiliation-justbladeordr|Order of the Just Blade]] is least willing to describe and the [[affiliation-dunavarsynod|Dúnavarre Synod]] is most willing to describe briefly, as a necessary campaign against raiders. Neither account says why a people who raided could not be answered with a garrison.

## Nine Years

The Saelvri lived in the valleys and woods of [[place-aelwyth|Aelwyth]]'s south-east, among the forest peoples of the island, with their own speech, their own rites and their own dead. The Synod declared them a danger to the island in about 694 AF, and the Order of the Just Blade took the field. The Knight-Captains drove them out valley by valley, burning steadings and taking the passes, and the Saelvri withdrew toward the oldest of their woods. By the turn of the year about 703 AF the last of them, several thousand with their children, were gathered in it, and the Order went in. The killing took three days.

## What the Knights Heard

The stated reason was raiding, and the Order's knights, who were sent to answer raids, found little to support it. The knights heard others from the Synod's _marendoi_ (masters) and from one another: that the Saelvri held a thing the Synod wanted, that they had refused it and that they were dangerous for it. The accounts did not agree and none was confirmed. Most of the Order's Knight-Captains did their duty and have not spoken of it. One of them, [[being-toradhtaravren|Dame Torad Taravren]], fought in the crusade as a decorated warrior of several campaigns and holds it contrary to the principles of the Order and of the [[affiliation-ardavon|Faith of Árdavon]], whose god the Order serves. She has said so to no one.

## The Wood

The ground where the last of them fell is [[place-hushwood|The Hushwood]], the newest blood-field in the [[place-aureldirgn|Aureldia Region]]. The Saelvri's own rite for their dead is unknown to the living, and their dead are not the Synod's to settle.

## What It Left

- **The Hushwood.** A blood-field in the south-eastern woods, forbidden by the Synod and avoided by the forest peoples.
- **A nemesis in the records.** Dúnavarre's registers name the Saelvri an enemy and say no more.
- **A Knight-Captain's secret.** Dame Torad Taravren's conscience, which the Order does not know it has.
- **A question the Synod cannot answer.** What the Saelvri kept, and who still wants it.

## See Also

- [[affiliation-saelvri|The Saelvri]]—the people
- [[place-hushwood|The Hushwood]]—the wood where the last of them died
- [[affiliation-justbladeordr|The Order of the Just Blade]]—the Synod's arm
- [[lore-dunavarresynod|The Mages Take Dúnavarre]]—the government that ordered it
