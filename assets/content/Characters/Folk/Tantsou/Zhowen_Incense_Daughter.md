---
shortcode: zhowenincdtr
name:
  full: "Shwonong, Second Daughter of the Incense-Seller of the Clan of Lamps Before the Altar, near Zhowen"
type: being
subType: npc
description: "A Shwonong of Zhowen, thirty-eight, who keeps a funeral and offering-goods shop among the markets along the canals and sells spirit paper and funeral incense to every household that keeps its ancestors."
tags: []
data:
  icon: icon-person
  templatePriority: null
  archetypes: [trader]
  occupation: Shopkeeper
  lore: [shuonong]
  culture: tantsouclt
  homes: [zhowen]
  affiliations: {tantsouempr: {rank: 1}}
  gender: female
  species: humanflk
  born: "681.212"
  died: null
  height: 5' 2"
  weight: 118 lbs
  frame: medium
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
  packFolder: ankaristantsou
  items:
    - {key: ctunic, model: armorgear-ctunic, name: "Merchant's plain clothing", kind: clothing}
    - {key: ltsndls, model: armorgear-ltsndls, kind: clothing}
    - {key: incense, model: miscgear-incense, name: "Funeral incense", kind: miscgear}
    - {key: scalesweig, model: miscgear-scalesweig, kind: miscgear}
    - {key: keys, model: miscgear-keys, name: "Keys of the shop", kind: miscgear}
    - {key: pence, model: miscgear-pence, kind: miscgear, system: {quantity: 12}}
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 46}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 38}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 54}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 18}}
    - {model: skill-tantsoulng, system: {masteryLevelBase: 76}}
    - {model: skill-tengchouscript, system: {masteryLevelBase: 28}}
    - {key: ctunic, model: sohl-sohl-armorgear-ctunic}
    - {key: ltsndls, model: sohl-sohl-armorgear-ltsndls}
    - {key: incense, model: sohl-sohl-miscgear-incense}
    - {key: scalesweig, model: sohl-sohl-miscgear-scalesweig}
    - {key: keys, model: sohl-sohl-miscgear-keys}
    - {key: pence, model: sohl-sohl-miscgear-pence}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 118, calc: "(9 * str) + 50"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
    defaultCombatGroup: null
---

# Appearance {#appearance}

She is a 38-year-old woman who stands 5'2" tall and is of medium build. She keeps her counter in a merchant's plain clothing, and the smoke of the funeral incense she sells is in it.

# Dossier {#dossier}

She is a [[lore-shuonong|Shwonong]] who keeps a funeral and offering-goods shop among the Shwonong markets along the canals of [[place-zhowen|Zhowen]], and the second daughter of an incense-seller. She names herself by her description: Shwonong, Second Daughter of the Incense-Seller of the [Clan of Lamps Before the Altar]{.name data-type="affiliation/lineage"}, near Zhowen. Like every Shwonong, she has no personal name of her own ([[lore-personlnms|Personal Names]]).

## The Shop

**The trade.** Her shop sells spirit paper and funeral incense. Every household of Zhowen keeps an ancestor shrine, so every household comes to a counter like hers sooner or later.

**The Festival of the Dead.** In midwinter the [Festival of the Dead]{.name data-type="lore/gathering"} fills the city with the smoke of burned spirit money, and her counter is busiest in the weeks before it.

**The ladder.** The Shwonong merchants who buy, store and move the city's goods are rich and indispensable, and they are ranked beneath the farmers who grow the city's food. Every crate she takes in at the quays is taxed, entered and sealed.

:::secret {title="The Black Lotus"}
The shop is one of the fronts of [[affiliation-haluozhao|The Black Lotus Society]]. A shop that legitimately sells spirit paper and funeral incense is in contact with every household that performs ancestor worship, and that contact is the cover for the Society's bureaucratic-magical operations. She is an Informant: she supplies her handler with what her counter learns of the households' ledgers, and she knows nothing of the cell above her. The Society knows which households' ledgers are in deficit and which ancestor spirits are being starved of offerings, and her counter is one of the places it learns it. The Society is unclassified, and association with it puts debit entries on the moral ledger of the associate, of her household and of her ancestor spirits.
:::

## Psyche

### Personality

She is courteous to the bereaved and careful with her accounts, and she remembers what each household buys.

### Motivation

She wants her household's petitions moving, its shipments cleared and its rivals' misfortunes kept from her own door.

### Strengths

Every household that keeps its ancestors comes to her counter, and the bereaved talk while they choose their paper.

### Weaknesses

As a Shwonong she stands low on the ladder whatever her trade earns, and a shop that depends on a protector has nobody to answer for it once that protection is withdrawn.

## Social

### Family

- Her father, an incense-seller of the Clan of Lamps Before the Altar.

### Affiliations

- **[[affiliation-tantsouempr|Empire of Tantsou]]**: of the Shwonong.

:::secret {title="The Society"}
**The Black Lotus Society**: Shopkeeper, an Informant who knows only her handler.
:::

## Plot Hooks

1. **The unaccepted offering.** A household that buys its spirit paper at her shop finds a black lotus left on its threshold, and its head wants a party to learn who left it and why.
2. **The stalled petitions.** A merchant of the canal markets finds his petitions stalled, his shipments held at the quays and small misfortunes at his door, and wants a party to learn whose hand is behind it.
3. **The held barges.** Before the Festival of the Dead a barge carrying her spirit paper lies at a canal lock above the city, held by the Governor's officers on a question of seals, and she wants a party to see it released before the households come to her counter.
