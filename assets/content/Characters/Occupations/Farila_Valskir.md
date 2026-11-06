---
shortcode: farlvlskyr
name: {full: Farila Valskir}
type: being
subType: npc
description: "A physician of Kalveza who serves the harbor and the Faith of Lizelas's house of healing, and has three sailors off one ship sick with a fever she does not know."
tags: [tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [healer]
  occupation: Physician
  lore: []
  culture: provenzianclt
  homes: [kalveza]
  affiliations: {kngdmprvnz: {rank: 5}, lizelas: {rank: 1}}
  gender: female
  species: humanflk
  born: "689.30"
  height: 5' 7"
  weight: 143 lbs
  frame: light
  appearance:
    eye_color: grey
    hair_color: black
    skin_color: fair
    complexion: [sun_kissed]
    extra_features: []
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 17}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 51}}
    - {model: sohl-sohl-skill-embl, system: {masteryLevelBase: 17}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 85}}
    - {model: skill-semrnscrpt, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 51}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 54}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 51}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 51}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 26}}
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

Farila Valskir is a 30-year-old woman who stands 5'7" tall and is of light build. She has fair skin browned by the harbor sun, black hair pinned in a neat twist that comes down by evening, and round gray eyes that look straight at a patient. Her narrow nose and thin lips give her a severe look until she speaks, and her hands smell of the vinegar she washes them in.

# Dossier {#dossier}

Farila Valskir is a physician of [[place-kalveza|Kalveza]], the working port of the southern coast, who keeps a practice near the warehouses and gives two days a week to the house of healing of the [[affiliation-lizelas|Faith of Lizelas]] by the harbor.

She is a daughter of a minor noble house that expected her to marry, and she studied medicine instead, first with the priests of Lizelas and then with a physician of the academies who took her as a pupil because nobody else would. She treats the harbor's sailors, porters and warehousemen as well as the merchant houses that pay her, and she asks about their work, their lodgings and their food as well as their symptoms, which the older physicians think a waste of time. She teaches the women of the waterfront what to do for a fever and a birth, and the priests of Lizelas let her.

Kalveza is busy on Válaren's fear. With hulls without colors seen off the southern coast, the Vilérian masters who would have put in at [[place-valarencity|Válaren]] are putting in here, the warehouses are full to the roofs and the lodging-houses by the quay are crowded beyond anything she has seen. This week she has treated three sailors off one ship for a fever she does not recognize.

## Psyche

### Personality

Farila is idealistic, blunt and quick to lose patience with rules that keep her from a patient. She is kind to the sick and short with the healthy.

### Motivation

She wants the sick of the harbor treated as well as the rich of the hill, and she wants to be taken seriously by physicians who think a noblewoman's medicine is a hobby.

### Strengths

She knows herbal medicine and the academies' learning both, she is good with frightened people, and she explains things so that they are understood.

### Weaknesses

She cannot keep quiet about a danger, even when the people who pay her would rather she did.

## Social

### Companions

The priests and nurses of the house of healing, and the women of the waterfront who send for her.

### Patrons

The merchant families of the hill, who pay her fees, and the priests of Lizelas, who give her a room.

### Enemies

An older physician of the city who has the charter council's ear and says her medicine is superstition with a noble name.

### Affiliations

- **[[affiliation-kngdmprvnz|Kingdom of Provénzia]]**: Farila is of the Lesser Nobility by birth.
- **[[affiliation-lizelas|Faith of Lizelas]]**: She serves in the goddess's house of healing by the harbor.

## Plot Hooks

The Fever off the Ship
: Three sailors off one Vilérian ship are sick with a fever Farila does not know, and the ship's master swears they caught it ashore. If she reports it, the charter council will close the quay to ships from the south while the warehouses are full and credit is tight, and the factors have made clear what they think of that.

The Warehouseman's Lungs
: Porters from one warehouse keep coming to her with burned throats and coughing blood. The warehouse holds goods bought on Válaren paper, and its owner will not let her inside.

The Physician's Complaint
: Her rival has brought a complaint against her before the charter council, and a family whose child she saved will speak for her only if she sees to their grandfather, whom the rival killed.
