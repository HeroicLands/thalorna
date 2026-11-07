---
shortcode: aldwngrylng
name: {full: Aldwald Grailing}
type: being
subType: npc
description: "Aldwald Grailing begs beside the inspection quay at Ravenmoor."
tags: [common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [commoner]
  occupation: Beggar
  lore: []
  culture: aelwythanclt
  homes: [ravenmoor]
  affiliations: {kingdmdnvr: {rank: 2}, morvana: {rank: 1}}
  gender: male
  species: humanflk
  born: "672.270"
  height: 6'
  weight: 172 lbs
  frame: medium
  appearance:
    eye_color: green
    hair_color: dark_brown
    skin_color: fair
    complexion: []
    extra_features: [a tattoo of a phoenix on the chest]
  packFolder: aureldiaaelwyth
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-eng, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 60}}
    - {model: skill-aelwthlng, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-acro, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-lgdm, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 30}}
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

Aldwald Grailing is a 47-year-old man who stands 6'0" tall and is of moderate build. He has a heart-shaped face with broad cheekbones, a smooth forehead, and an angular jaw that leads to a rounded chin. His sharp green eyes sit beneath straight brows, lending him an incisive gaze. A slightly upturned nose and narrow lips complete his features. He has fair skin with a fair complexion. His dark brown hair is short and swept back.

# Dossier {#dossier}

**Age 47. Beggar.**

Aldwald Grailing begs beside the inspection quay at [[place-ravenmoor|Ravenmoor]]. He offers to carry a bundle or sweep a landing before he asks for bread. His hands know farm work, and he measures a sack by its weight against his hip. Shipmasters waiting through the compulsory call sometimes pay him to mind their shoreward goods.

The talk of a final campaign against the [[affiliation-saelvri|Seilvri]] brings buyers of provisions to the quay. Aldwald wants a place among the paid hands, with meals and a wage stated plainly. He refuses recruitment money that nobody can explain without lowering a voice.

## Psyche

He is stubborn about earning his food and impatient with pity. He works steadily when someone gives him a definite task. Hunger makes him accept bad terms; pride makes him conceal how bad they are.

## Social

Porters share scraps and news with him. The quay officers tolerate him while he keeps passages clear, but a master accusing him of theft carries more weight than his own account. He worships through the [[affiliation-morvana|Faith of Morvana]] and accepts bread there when he cannot find work.

## Plot Hooks

A place on the wagon
: A provisioning contractor offers Aldwald work inland but refuses to state where the wagons are bound. Aldwald asks a literate traveler to read the hiring paper before he puts his mark to it.

The blocked landing
: Cargo awaiting inspection occupies the corner where the porters sleep. Aldwald offers to lead the owners to a dry store, provided someone helps secure permission to move the goods under the inspectors' eyes.
