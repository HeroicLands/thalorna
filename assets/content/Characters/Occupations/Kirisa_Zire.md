---
shortcode: kiriszyrnd
name: {full: Kirisa Zire}
type: being
subType: npc
description: "The cook of a harbor inn at Kalveza, who feeds the masters off the ships and hears a great deal at her tables."
tags: [common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [commoner]
  occupation: Cook
  lore: []
  culture: provenzianclt
  homes: [kalveza]
  affiliations: {kngdmprvnz: {rank: 2}, lizelas: {rank: 1}}
  gender: female
  species: humanflk
  born: 679.57
  height: 5' 10"
  weight: 161 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: greying_brown
    skin_color: olive
    complexion: [sun_kissed]
    extra_features: []
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-cmcs, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-lock, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-txtl, system: {masteryLevelBase: 12}}
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

Kirisa Zire is a 40-year-old woman who stands 5'10" tall and is of medium build, with forearms scalded pink by thirty years of kitchen steam. She has olive skin, sun-browned, a firm chin, wide-set brown eyes and a mouth that does not smile at the customers. Her graying brown hair is tied back under a cloth, and she smells of onions and woodsmoke.

# Dossier {#dossier}

Kirisa Zire is the cook of a harbor inn at [[place-kalveza|Kalveza]], the working port of the southern coast, where the masters, factors and supercargoes of the ships that put in eat her soups and stews and talk business in the harbor tongue.

She learned to cook because her mother died and somebody had to, and she came to the inn's kitchen at sixteen. Over the years she has come to take a plain pride in feeding the men off the ships well and cheaply, and she has no patience with the fashionable kitchens of the hill. She manages a kitchen that feeds a hundred on a busy night, and the masters talk business over her food in the **Volchetarla**, the harbor register of [[skill-provnzlng|Provenzal]], as though the kitchen were not there.

Kalveza is busy on Válaren's fear. With hulls without colors seen off the southern coast, the Vilérian masters who would have put in at [[place-valarencity|Válaren]] are putting in here, and her inn is full every night. Some of what is said at the tables in the harbor tongue would interest the factors of Válaren a great deal.

## Psyche

### Personality

Kirisa is practical, blunt and impatient with fuss. She dismisses fancy cooking and fancy talk alike.

### Motivation

She wants a full kitchen, a fair wage and to be left alone to run it. She has begun to want more than that for her son, who is clever.

### Strengths

She can feed a crowd on very little, run a kitchen without shouting, and hear a great deal while seeming to hear nothing.

### Weaknesses

She has been listening longer than is safe.

## Social

### Companions

The inn's kitchen staff, and the porters and fishermen of the quay who eat at her back door.

### Patrons

The innkeeper, who would close without her, and the masters who ask for her stew by name.

### Enemies

The cook of a fashionable house on the hill who tried to hire her away, failed, and has said she cooks for dogs.

### Affiliations

- **[[affiliation-kngdmprvnz|Kingdom of Provénzia]]**: Kirisa is a Freeman of the crown.
- **[[affiliation-lizelas|Faith of Lizelas]]**: She lights a lamp at the goddess's shrine for her mother each spring.

## Plot Hooks

The Talk at Table
: Kirisa has heard something at her tables that she wants to sell to the right buyer, and she does not know who that is.

:::secret {title="What Kirisa hears"}
Kirisa has picked up enough of the Volchetarla to follow what is said at her tables, though she has never let a customer know it. Two Vilérian masters spoke in the harbor tongue at her table about a payment for staying away from Válaren, and named a Kalveza factor.
:::

The Missing Supercargo
: A supercargo who ate at the inn every night for a month has left his chest in his room and not come back. The innkeeper wants it sold for the bill. Kirisa looked inside.

The Son's Chance
: A factor has offered her son a clerk's place in his counting-house, and asked Kirisa in return to tell him what certain masters say at dinner.
