---
shortcode: brthrslthr
name: {full: Drethar Salthar}
type: being
subType: npc
description: "A charcoal burner of Valdun on the hill levy's roll, stubborn about his clamps and his coppices."
tags: [common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [artisan, woodsman]
  occupation: Charcoaler
  lore: []
  culture: elavendriclt
  homes: [valdun]
  affiliations: {kngdmlvndr: {rank: 2}, brdrmltia: {rank: 1}, karnavos: {rank: 1}}
  gender: male
  species: humanflk
  born: 669.245
  height: 6' 2"
  weight: 183 lbs
  frame: heavy
  appearance:
    eye_color: blue
    hair_color: greying_brown
    skin_color: fair
    complexion: [weathered]
    face_shape: long
    nose: upturned
    brow: straight
    mouth: full
    extra_features: [a tattoo of a mystical symbol on the forearm]
  packFolder: aureldiaelavendre
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-embl, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 8}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-jewl, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 60}}
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

Drethar Salthar is a 50-year-old man who stands 6'2" tall and is of heavy build. He has a long face with high cheekbones, a narrow forehead and an angular jaw that leads to a delicate chin. His round blue eyes sit beneath straight brows and give him a candid gaze. He has a slightly upturned nose, full lips and fair skin weathered by smoke and wind. His brown hair is graying and combed to one side, and a tattoo of a mystical symbol, half lost under burn scars, marks his right forearm. He smells of the clamp at every hour.

# Dossier {#dossier}

Drethar Salthar is a charcoal burner of [[place-valdun|Valdun]], an [[lore-elavendriclt|Élavendri]] freeman who works the coppices on the slopes above the ridge road and sells his charcoal in the town.

He has built and watched clamps for most of his life: the stacked billets, the turf skin, the days and nights of watching the smoke for the color that says the fire has found a hole. Valdun's smiths and the eastern bloomeries buy what he burns, and the iron that goes out of the town's market was smelted over some of it. The work is hard and solitary, and it has made him stubborn. He has his own way of building a clamp and does not take advice on it, from his sons or anyone.

He is on the roll of the hill levy, as every man with a pony and a spear in the hills is, and he has mustered under the walls more times than he can count. He has opinions about the sworn company of [[affiliation-brdrmltia|the Border Militia]] that keeps the town now, and he gives them freely.

## Psyche

### Personality

Drethar is gruff, stubborn and slow to change his mind. He is generous to a neighbor and blunt to everyone else.

### Motivation

He wants his coppices left to him, his clamps left alone and his sons to take the trade on as he does it. He wants the levy led by men who know the hills.

### Strengths

He is strong and tireless, he knows every slope within a day of the town, and he can read weather and smoke.

### Weaknesses

He will not take advice, and he quarrels with men he needs.

## Social

### Companions

His two sons, who burn with him, and the hill levy's men at the muster.

### Patrons

The smiths of Valdun and the factors who buy for the eastern bloomeries.

### Enemies

A younger burner who has started cutting in Drethar's coppices, saying the slope is common.

### Affiliations

- **[[affiliation-kngdmlvndr|Kingdom of Élavendre]]**: Drethar is a Freeman of the crown.
- **[[affiliation-brdrmltia|The Border Militia]]**: He is on the hill levy's roll as a Levyman.

## Plot Hooks

The Smoke on the Ridge
: Drethar saw riders on the ridge above his clamps at dawn, too many and too quiet for drovers. [[being-elenorthaurn|Captain Élenor Thaurnde]] wants his report brought to the militia, and [[being-jeldormorlin|Jeldor Mórlineth]] wants it brought to the levy first.

The Helmet's Slope
: The hill hunter who brought in the unrusted helmet came down past Drethar's coppice with mud on his boots from the old wood. The [[affiliation-ordoarcanis|Order]]'s antiquarians offer the burner silver to show them the hunter's track.

The Common Slope
: The younger burner has built a clamp in Drethar's coppice, and Drethar means to kick it in before it is fired. The quarrel will go to [[being-ilseviletirv|the magistrate]], and neither man has a paper for the slope.
