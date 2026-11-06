---
shortcode: vrynbrnwyld
name: {full: Verinna Branvilde}
type: being
subType: npc
description: "A priestess of Zunelas at Aurelane, trained at Argenna, who reads the dreams of the city's families and lawyers and doubts her own gift."
tags: [clergy]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [cleric, healer]
  occupation: Priestess
  lore: []
  culture: provenzianclt
  homes: [aureliane]
  affiliations: {kngdmprvnz: {rank: 2}, zunelas: {rank: 3}}
  gender: female
  species: humanflk
  born: 690.235
  height: 5' 7"
  weight: 143 lbs
  frame: light
  appearance:
    eye_color: blue
    hair_color: dark_brown
    skin_color: medium
    complexion: [scarred]
    extra_features: [a scar on the left thigh]
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-acro, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-lgdm, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-cmcs, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-fltch, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-mill, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-mysticalability-trnc, system: {masteryLevelBase: 75}}
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

Verinna Branvilde is a 29-year-old woman who stands 5'7" tall and is of light build. She has medium-toned skin, dark brown hair braided and wound about her head under the gray veil of the Dreamer's priesthood, and round blue eyes that seem always to have been awake too long. An old scar on her left thigh makes her favor that leg on stairs.

# Dossier {#dossier}

Verinna Branvilde is a priestess of [[affiliation-zunelas|Zunelas]], the Veiled Dreamer, at [[place-aureliane|Aurelane]], the old city of law and learning, where she reads the dreams that the city's families, lawyers and petitioners bring to the Dreamer's temple.

She was chosen young, when a dream of hers foretold a flood on the great road that came, and she was sent to the god's sanctuary at [[place-argenna|Argenna]] to be trained. She has served the temple at Aurelane for more than ten years: she keeps the dream-chambers where the faithful sleep for a sending, reads what they dream, divines omens for marriages and suits, and treats the sick who come to the temple with herbs and with sleep. She is good at all of it and doubts that she is, and she would sometimes give a great deal to be an ordinary woman who dreams of nothing.

The high courts are the city's power this season, and they are full. The crown's loan against the salt revenue has raised the [[lore-chrtrrghts|Charter's]] oldest question before the high court, and both the crown's lawyers and the Peers' have argued it. A justice of the court has come to the temple at night, asking Verinna to read a dream he will not describe to anyone else.

## Psyche

### Personality

Verinna is gentle, conscientious and hesitant, slow to decide and slower to trust her own gift.

### Motivation

She wants her readings to be true and to do no harm, and she wants to be sure, once, that what she sees is the god's and not her own.

### Strengths

She is skilled in divination and dream-reading, experienced in herbal medicine, and trusted by the people who sleep in her temple.

### Weaknesses

She doubts herself at the moment she most needs to be certain, and she cannot refuse anyone who asks for help.

## Social

### Companions

The priests of the temple and the sleepers of the dream-chambers, and an old priestess at Argenna who taught her and still writes.

### Patrons

The families of Aurelane, whose offerings keep the temple, and the elders of the faith at Argenna.

### Enemies

A lawyer of the high courts who calls dream-reading fraud and has twice asked the court to forbid a party from citing an omen.

### Affiliations

- **[[affiliation-zunelas|Faith of Zunelas]]**: Verinna is a priestess of the Dreamer, of the rank of Dunir.
- **[[affiliation-kngdmprvnz|Kingdom of Provénzia]]**: She is a Freeman of the crown.

## Plot Hooks

The Justice's Dream
: The justice wants to know what his dream means before he rules, and the crown's lawyers and the Peers' would each pay to know what Verinna told him.

:::secret {title="The justice's dream"}
The justice dreamed of the salt pans of [[place-lizela|Lizela]] burning, and of his own hand setting the fire.
:::

The Sleeper Who Would Not Wake
: A student of the academies slept in the dream-chamber for a sending and has not woken in three days. He is breathing, and he is speaking in a tongue nobody in the temple knows.

The Omen for Sale
: A family in an inheritance suit has asked Verinna for an omen in their favor, and offered the temple a new roof. She has read their dream, and it says the opposite.
