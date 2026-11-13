---
shortcode: bbdnblgnm
name: {full: Bibudan Belginum}
type: being
subType: npc
description: "A sapper in the pay of a guild watch on Sazumun's quays, who knows how the bonded warehouses are built and so how they are broken into."
tags: [soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior, artisan]
  occupation: Man-at-Arms (Sapper)
  lore: []
  culture: taruzelianclt
  homes: [sazumun2]
  affiliations: {cnfdrtntrzlnstts: {rank: 3}, brazemas: {rank: 1}}
  gender: male
  species: humanflk
  born: 694.67
  height: 5' 11"
  weight: 157 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: greying_black
    skin_color: tawny
    complexion: []
    face_shape: oval
    nose: straight
    brow: arched
    extra_features: [a tattoo of a fish on the lower back]
  packFolder: midhaliontaruzel
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-eng, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 15}}
    - {model: skill-merazanscrpt, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-pilt, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-fltch, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-masn, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 39}}
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

Bibudan Belginum is a 25-year-old man who stands 5'11" tall and is of moderate build. He has an oval face with high cheekbones, a high forehead, and an angular jaw that leads to a strong chin. His large brown eyes sit beneath arched brows, lending him an expressive gaze. A straight nose and curved lips complete his features. He has tawny skin, and his black hair, already graying, is combed neatly to one side. A fish is tattooed on the small of his back. He goes about the quays in a padded coat with a mason's rule and a sounding-rod slung beside his sword.

# Dossier {#dossier}

Bibudan Belginum is a man-at-arms of [[place-sazumun2|Sazumun]], a freeman on the city's register who serves in the watch of the guild that keeps his stretch of the quays. Every quay and warehouse in Sazumun belongs to a guild, and the guild's own watchmen keep it. Bibudan is the one man of his watch who is a sapper: he knows how a wall is laid, how a floor carries its load and how a lock is let into stone, and so he knows how each of them is broken.

His work is the bonded warehouses, three and four floors high behind the quays, with iron-barred doors and a seal on every lock. He walks their walls at low water, sounds their floors, checks the barred doors against the warehouse clerks' ledgers, and is sent for when a bale goes missing from a store whose seals are whole. Thieves in Sazumun do not break seals, because a broken seal is noticed at once. They come through a wall or under a floor, and Bibudan is the man who finds the hole.

## Background

**The south bank.** Bibudan learned masonry and the reckoning of loads on the south bank of the river mouth, carrying stone for the slipways and the walls of the timber basin, and taught himself the figures from the masons' books.

**The watch.** He took the guild's pay as a man-at-arms when a warehouse wall on its quay was undermined from the lane behind and the watch could not say how. He found the tunnel in a morning, and the guild has kept him since.

## Psyche

### Personality

Bibudan is careful, patient and slow to commit to anything he has not measured twice. He is calm in a collapsing cellar and uneasy at a guild dinner.

### Motivation

He wants every wall on his quay sound and every theft through one found. He also wants to be paid as a sapper and not as a watchman, which the guild has not yet agreed to.

### Strengths

He is a fine mason and a better reckoner, calm under pressure, and good with a sword in a confined space.

### Weaknesses

He is not as strong as the porters and watchmen he works beside, and his caution makes him late to every decision that has to be made in the moment.

## Social

### Enemies

Two men of the lane behind the warehouses lost their places when he found the tunnel they had cut under a warehouse floor. They have not left Sazumun.

### Others

- **The sergeant of his watch**, who values him and cannot get the guild to pay him more.
- **The masons of the south bank**, who still lend him their tools and their opinions.

### Affiliations

- **[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]**: a Freeman on the register of Sazumun, entitled to petition the [[affiliation-grandcouncil|Grand Council]] through his state's councilors.
- **[[affiliation-brazemas|Faith of Brazemas]]**: one of the lay faithful, the Devran, who keeps the storm god's feasts and waits for the first strike of the [[lore-thunderheadvigil|Thunderhead Vigil]] with the rest of the quays.

## Plot Hooks

1. **The river door.** Walking a warehouse of the [[affiliation-hitusuni|Hitusuni]] at low water, Bibudan finds the hinges of its river door bright with fresh grease. The warehouse ledger says the door has not been opened in years. He has told nobody yet, and he wants a witness before he does.
2. **The channel.** A harbor pilot fined for one of the three foreign merchantmen stuck on the bar since spring asks Bibudan to survey the marked channel with him at low water, because the pilot swears he steered by the marks and the marks were wrong.
3. **The strongroom.** A factor of the slope offers Bibudan a year's pay, in advance, to build a strongroom under his house that no tally-man knows of and no warehouse ledger records.
4. **The second tunnel.** A store on his quay has lost three bales of silk with its seals whole, and Bibudan can find no hole. The only way in that he has not sounded is through the next warehouse, which belongs to another guild.
