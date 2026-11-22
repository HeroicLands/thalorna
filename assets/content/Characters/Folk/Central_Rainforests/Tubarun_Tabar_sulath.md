---
shortcode: tubaruntbrslth
name: {full: Tubarun Tabar-suláth}
type: being
subType: npc
description: "Elder of the house of the pouring of the deep water and Master of Works of Magar-thubád Hold, who keeps the water-line, the cistern and the channels of the gardens at the gate."
tags: [gm]
data:
  pack: gm-actors
  icon: icon-person
  templatePriority: null
  archetypes: [artisan, scholar]
  occupation: Master of Works
  lore: [longtunnel]
  culture: khazariclt
  homes: [magarthubad]
  affiliations: {mgrthbdhld: {rank: 3, office: [Elder of a House, Master of Works]}}
  socialTies: {being-likimlkmmln: friend, being-valadrmksmd: acquaintance}
  gender: male
  species: flkkhazar
  born: "681.302"
  died: null
  height: 5' 0"
  weight: 175 lbs
  frame: heavy
  appearance:
    eye_color: grey
    hair_color: dark_brown
    skin_color: medium
    complexion: [rough]
    hair_style: braided
    facial_hair: full_beard
    extra_features: [hands stained gray to the wrist by the lime of the cistern]
  packFolder: xerathiacentralrainforests
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 34}}
    - {model: skill-khazarlng, system: {masteryLevelBase: 80}}
    - {model: skill-drthrkscrpt, system: {masteryLevelBase: 62}}
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
      weight: {base: 175, calc: "175"}
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

Tubarun Tabar-suláth (_too-BAH-roon tah-bahr-soo-LAHTH_) is a Khazár man of 5'0" and heavy build, with medium, rough skin, dark brown hair in a single braid, a full dark brown beard and gray eyes. His hands are stained gray to the wrist by the lime of the cistern. He wears a leather apron over a working coat, always damp, and carries a sounding hammer and a knotted measuring cord at his belt.

# Dossier {#dossier}

**Master of Works of [[affiliation-mgrthbdhld|Magar-thubád Hold]]. Wants the cistern full, the water-line sound, and every channel at the gate running clear of the river.**

Tubarun is an elder of the house of [Tabar-suláth]{.name data-type="affiliation/lineage"}, the pouring of the deep water, whose craft the water is, and sits for it at the council of Magar-thubád Hold. As Master of Works he keeps the water-line, the cistern and the hold's other works, and the channels that water the gardens at the gate. His given name is built on the deep water under the mountain, with the vowel of the work endured, the charge given to a child born in a bad season.

## Background

Tubarun was born in a hungry year, when the hold opened its caches to the gate. He was raised on his house's water-record, the daily count of the cistern that his house has kept since the finding of the cave, and he made his first entry in it before he was ten. He walked the water-line behind his teacher every season of his apprenticeship, sounding the seam by the measure as the account of [[lore-longtunnel|The Long Tunnel]] tells of its cutting.

He is the youngest elder at the council, and he came to the office when his teacher's hearing failed. The council gave him the raising of the channel banks at the gate after the late rains, and he has sent the engineers down.

## Psyche

### Personality

Tubarun is careful, slow to speak and slower to decide, and he will not enter a figure he has not counted himself.

### Motivation

He wants no entry in his house's water-record that his house would have to explain, and he wants the hold never to send to the gate for water again.

### Strengths

He knows the water-line by its sound, measure by measure, and he can read a change in the cistern's count before anyone else in the hold has noticed it.

### Weaknesses

He keeps a doubt to himself until he has proved it, and the council hears his worst news last.

## Social

### Companions

The engineers of his office, and [[being-likimlkmmln|Likim Lakam-mulán]], the Keeper of the Archive, who copies his water-record into the archive.

### Patrons

None. The council sent him to his work.

### Enemies

None. [[being-valadrmksmd|Valad Ramk-sumád]], the Speaker at the Gate, presses him for more hands at the banks than his office has.

### Affiliations

- **[[affiliation-mgrthbdhld|Magar-thubád Hold]]**: Tubarun is an elder of the council and its Master of Works.

## Plot Hooks

1. **The channel banks.** Tubarun's engineers are raising the channel banks at the gate, and the river is still rising. He needs more hands than his office has, and the Pewaye of the gate are already at work in their own gardens.
2. **The sounding.** Tubarun wants the water-line above the bend sounded by a second hammer, and the readers of stone who could do it are out at another hold.
3. **The lime kiln.** The banks at the gate need lime, the hold's kiln is cold for want of dry fuel after the rains, and Tubarun wants fuel brought up the gorge.

:::secret {title="The seam above the bend"}
Since the rains, the cistern has filled faster than the spring-head runs. Tubarun has sounded the water-line and found the bedding seam above the bend taking water from the rains, where the account of the cutting records it dry. The seam the line follows is opening. He has told no one, because he has not yet proved it, and because the line is the house of Khalv-gunáv's work and the hold's pride. A seam that opens under the roof of a line brings the roof down, and the line above the bend carries the whole of the hold's water.

The count stands higher this season than the spring's rate allows, and Tubarun has not yet entered the difference. He has brought [[being-likimlkmmln|Likim Lakam-mulán]] fewer entries of the water-record since the rains than in any season she remembers, and she has asked him why.
:::
