---
shortcode: lyrnvlskyr
name: {full: Liren Valskir}
type: being
subType: npc
description: "The housekeeper of the supply merchant Tuleme Serdalis at Pirnebris, who keeps his house, resents him, and has seen his ledgers."
tags: [common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [commoner]
  occupation: Domestic Servant
  lore: []
  culture: provenzianclt
  homes: [pirnebris]
  affiliations: {kngdmprvnz: {rank: 2}, lizelas: {rank: 1}}
  socialTies: {being-tulemeserdal: patron}
  gender: female
  species: humanflk
  born: 682.55
  height: 6'
  weight: 161 lbs
  frame: medium
  appearance:
    eye_color: green
    hair_color: brown
    skin_color: olive
    complexion: []
    extra_features: []
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-embl, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-slng, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-cmcs, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-masn, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-txtl, system: {masteryLevelBase: 52}}
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
      weight: {base: null, calc: "(9 * str) + 50"}
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

Liren Valskir is a 37-year-old woman who stands 6'0" tall and is of medium build. She has olive skin, an even complexion, a high forehead and hooded green eyes that miss nothing in a room, and she keeps her brown hair swept up and held with carved combs that were a gift from a mistress long dead. She wears a housekeeper's keys at her belt and walks quietly.

# Dossier {#dossier}

Liren Valskir is the housekeeper of the house of [[being-tulemeserdal|Tuleme Serdalis]], the supply merchant, at [[place-pirnebris|Pirnebris]], the walled cherry town of the eastern march.

She went into service at fourteen as a scullery maid in a merchant house of the town and rose to run one: she manages the servants, the stores and the household accounts, and Tuleme's house runs as smoothly as his wagons because of her. She is organized and exact. She is also undervalued and knows it, because Tuleme has never once said so, and she has a long memory for each time he failed to.

Pirnebris has shut its gates once already this summer, with half the orchard hands outside the walls, and the merchants who supplied the garrison did very well out of the week. Liren keeps the household accounts, and Tuleme's house account and his trading account are kept in the same room.

## Psyche

### Personality

Liren is meticulous, reserved and proud, and she holds a grudge with the same care she gives a linen press.

### Motivation

She wants to be valued for the house she keeps, and she has begun to want a house of her own.

### Strengths

She is highly organized, reliable and observant, and she knows every servant in every merchant house of the town.

### Weaknesses

Her resentment of her master is close enough to the surface that the wrong offer could reach it.

## Social

### Companions

The servants of Tuleme's house, who fear and trust her in about equal measure, and the housekeepers of the other merchant houses.

### Patrons

Tuleme Serdalis, who pays her well and has never thanked her.

### Enemies

The younger servants who think her too strict, and one who thinks he could do her work and has said so to Tuleme.

### Affiliations

- **[[affiliation-kngdmprvnz|Kingdom of Provénzia]]**: Liren is a Freeman of the crown.
- **[[affiliation-lizelas|Faith of Lizelas]]**: She keeps the goddess's festivals and her small household shrine.

## Plot Hooks

The Ledger
: Liren has seen what Tuleme's house charged the garrison for the week the gates were shut, and she knows the [[affiliation-wntrassize|Winter Assize]] would want to see it. She will give it to a party who can promise her a place in another house afterward.

The Philosopher's Dinner
: Tuleme has invited the tavern philosopher [[being-vornantlgn|Vornan Tolgen]] to dine, which he has never done before, and has told Liren to serve the wine herself.

The Shutting
: The alarm sounds again, and Pirnebris shuts its gates with Tuleme's wagons outside. He orders Liren to have the house's men open the postern for them, against the Warden's order.
