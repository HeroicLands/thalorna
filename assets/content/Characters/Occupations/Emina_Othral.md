---
shortcode: emynaothrl
name: {full: Émina Othral}
type: being
subType: npc
description: "A courtesan of Valdun, a noble daughter her family put out, at whose table the march's lords and the Order's fellows talk."
tags: [administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [courtier]
  occupation: Courtesan
  lore: []
  culture: elavendriclt
  homes: [valdun]
  affiliations: {kngdmlvndr: {rank: 5}, olvenia: {rank: 1}}
  gender: female
  species: humanflk
  born: 684.261
  height: 5' 3"
  weight: 123 lbs
  frame: light
  appearance:
    eye_color: grey
    hair_color: blonde
    skin_color: fair
    complexion: [scarred]
    extra_features: [a scar on the left side of the neck]
  packFolder: aureldiaelavendre
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 17}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 15}}
    - {model: skill-thrvrdhscrpt, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-cmcs, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-glas, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 22}}
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

Émina Othral is a 35-year-old woman who stands 5'3" tall and is of light build. She has a heart-shaped face with angular cheekbones, a wide forehead and a narrow jaw that leads to a narrow chin. Her narrow gray eyes sit beneath thin brows and give her a keen gaze. She has a delicate nose, thin lips and fair skin, and a fine pale scar runs down the left side of her neck, which she does not trouble to hide. Her blonde hair is dressed high in the fashion of Péravel, and she dresses better than most of the women in Valdun who call themselves her betters.

# Dossier {#dossier}

Émina Othral is a courtesan of [[place-valdun|Valdun]], the walled border town of the eastern march, a daughter of a noble house of the [[lore-elavendriclt|Élavendri]] who keeps a house of her own on the ridge road.

She was raised to marry well and did not. What happened is told three ways in Valdun, and she corrects none of them: her family put her out, she kept her name, and she made her own living with it. Her rooms are the best conversation in the town. The officers of the garrison, the lords who keep houses on the ridge road, the factors of the drove fairs and the fellows of the [[affiliation-ordoarcanis|Order]] who come to hire guards for the interior all come to her for wine, for news and for her company, and she is careful about which of them meets which. She is welcome everywhere in the town but her family's door.

Valdun is long on opinions this year, and most of them are spoken at her table. [[being-vargenhalmes|Lord Vargen Hálmesende]] says there, in company, that the tribes' ground should be opened to the crown's roads, and the Order's fellows listen to him closely.

## Psyche

### Personality

Émina is graceful, witty and guarded. She is watchful of her reputation, because she has seen how quickly a town takes one away.

### Motivation

She wants her house, her independence and her name, and she wants the old scandal to stay asleep. She has begun to want something of the men who talk at her table beyond their silver.

### Strengths

She reads a room, keeps a confidence and knows who in Valdun owes whom.

### Weaknesses

Her caution over the old scandal makes her easy to threaten, and her independence depends on patrons who expect discretion.

## Social

### Companions

Her housekeeper and her harper, who have been with her since she came to the town.

### Patrons

The gentry and officers of the march and the factors of the drove fairs, who pay for her company and her table.

### Enemies

A former suitor of her own rank, now a knight of the march, who resents that she refused him and says so.

### Affiliations

- **[[affiliation-kngdmlvndr|Kingdom of Élavendre]]**: Émina is of a Noble house, whatever her family says.

## Plot Hooks

The Talk at the Table
: Lord Vargen has begun bringing an Order fellow to Émina's table, and the two speak of a road beyond the tree line as if it were already surveyed. She asks a party to learn whom the fellow answers to before she decides what to do with what she has heard.

The Wounded Guard
: A guard the Order hired came back from the interior with a wound and has been telling Émina's housekeeper what he saw past the margin. He means to bring a complaint before [[being-ilseviletirv|Ílsevile Tírvalnde]], and the fellow who hired him has asked Émina to stop him.

The Old Letter
: A letter from the scandal that put her out of her family has turned up in the hands of her former suitor. She asks a party to get it back without a fight that the town will hear of.
