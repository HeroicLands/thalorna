---
shortcode: valadrmksmd
name: {full: Valad Ramk-sumád}
type: being
subType: npc
description: "Elder of the house of the raising of the course and Speaker at the Gate of Magar-thubád Hold, who hears the Pewaye of the gate and holds that the tie with them is the hold's first work."
tags: [gm]
data:
  pack: gm-actors
  icon: icon-person
  templatePriority: null
  archetypes: [courtier, scholar]
  occupation: Speaker at the Gate
  lore: []
  culture: khazariclt
  homes: [magarthubad]
  affiliations: {mgrthbdhld: {rank: 3, office: [Elder of a House, Speaker at the Gate]}}
  socialTies: {being-likimlkmmln: friend, being-tubaruntbrslth: acquaintance}
  gender: female
  species: flkkhazar
  born: "652.088"
  died: null
  height: 4' 6"
  weight: 140 lbs
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: grey
    skin_color: medium
    complexion: [weathered]
    hair_style: braided
    facial_hair: long_beard
    extra_features: [a forearm ringed with the pale scars of old burns from the forge of her youth]
  packFolder: xerathiacentralrainforests
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 38}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 20}}
    - {model: skill-khazarlng, system: {masteryLevelBase: 82}}
    - {model: skill-drthrkscrpt, system: {masteryLevelBase: 58}}
    - {model: skill-ekpelulng, system: {masteryLevelBase: 62}}
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
      weight: {base: 140, calc: "140"}
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

Valad Ramk-sumád (_VAH-lahd rahmk-soo-MAHD_) is a Khazár woman of 4'6" and heavy build, with medium, weathered skin, gray hair braided close to the head, a long gray beard tied off with a ring of plain iron, and brown eyes. Her left forearm is ringed with the pale scars of old burns. At the gate she wears a coat of undyed goat's wool over a leather jerkin, dark with the damp of the gorge, and she carries a staff of black iron.

# Dossier {#dossier}

**Speaker at the Gate of [[affiliation-mgrthbdhld|Magar-thubád Hold]]. Wants the gardens at the gate fed with water and iron, the gorge kept, and the tie between the hold and the [[lore-pewayeclt|Edge-people]] of the gate, the Pewaye, kept as the record keeps it.**

Valad is an elder of the house of [Ramk-sumád]{.name data-type="affiliation/lineage"}, the raising of the course, and sits for it at the council of Magar-thubád Hold, where no elder sits first. The council sends her to the gate as its Speaker, to hear the eldest of the Pewaye of the gate and to give the hold's answer. Her given name is built on the binding of a bond, with the vowel of the work as it stands, the plainest charge.

## Background

Valad learned the forge before she learned the course, and the burns on her arm are from the years she spent at a quenching trough before her house called her back to its own craft. She raised stairs and channel walls in the gorge for thirty years, and she knows every course of stone between the gate and the river. She came to the gate when the Speaker before her went out to another hold with his work in order.

Her house keeps the hold's account of the year its water failed, when the timber it had brought up for its own line was given to the gate. She holds that the gift was the house's best entry in the record, and that the gate's gardens are as much the hold's work as any hall in the rock.

## Psyche

### Personality

Valad is warm at the gate and curt at the council, patient with the Pewaye and short with any elder who speaks of the gate as a supply.

### Motivation

She wants the gate's gardens to outlast every flood, and she wants the hold to give the gate more than the gate needs to ask for.

### Strengths

She knows the families of the gate, their gardens and their quarrels, and the eldest of the Pewaye brings her the community's word before it brings it anywhere else.

### Weaknesses

She takes the gate's side in every quarrel at the council, and the other elders discount her word on the gate for it.

## Social

### Companions

[[being-likimlkmmln|Likim Lakam-mulán]], the Keeper of the Archive, who reads her the old entries of the gate when a question turns on them.

### Patrons

None. The council sent her to the gate.

### Enemies

None. She finds [[being-tubaruntbrslth|Tubarun Tabar-suláth]] too sparing of hands at the channel banks, and says so.

### Affiliations

- **[[affiliation-mgrthbdhld|Magar-thubád Hold]]**: Valad is an elder of the council and its Speaker at the Gate.

## Plot Hooks

1. **The flooded gardens.** The river has risen into the lowest gardens twice, and the hold's engineers are raising the channel banks at the gate. Valad wants more hands on the banks before the next rise than the Master of Works has given them, from the hold or from anyone else she can find.
2. **The gate's tally.** Valad keeps the gate's tally of what comes up from the gardens and what goes down to them, and she wants it carried up to the archive before the rains wash out the stair again.
3. **A stranger in the gorge.** A traveler who comes up the river is met by the Pewaye, and the Pewaye bring the matter to Valad at the gate, never to the council.

:::secret {title="The iron sent down"}
For years Valad has sent down to the gate more iron than the council apportions to it, from her own house's share, because the gardens at the gate have grown and the council's count has not. The record shows the share of Ramk-sumád smaller each year, and no elder has asked why. The machete that the Pewaye trader sold downriver is one of the blades she sent down. Any reckoning of the gate's iron leads the council to her gifts and to the trader together.

She decides some things at the gate that the council should hear first, and this is the largest of them. If word reaches the gate that an [[affiliation-empireakhlth|Au'Khelathu]] factor is asking where the river's iron comes from, Valad is the first in the hold to hear it, and she decides what the council hears. If the council does hear of the iron downriver, [[being-likimlkmmln|Likim Lakam-mulán]] brings up every entry of iron sent to the gate, and the entries do not agree with the count.
:::
