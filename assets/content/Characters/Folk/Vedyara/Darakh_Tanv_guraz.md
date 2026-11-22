---
shortcode: darakhtnvgrz
name: {full: Darakh Tanv-guráz, en: [The Warden of the Watch]}
type: being
subType: npc
description: "Elder of the house of the guarding of the gate and Warden of the Watch of Talg-nugár Hold, who keeps the watch on the cols of the Eastern Reach and wants the slope the silver prospector means to climb brought down before the thaw."
tags: [gm]
data:
  pack: gm-actors
  icon: icon-person
  templatePriority: null
  archetypes: [warrior, woodsman]
  occupation: Warden of the Watch
  lore: []
  culture: khazariclt
  homes: [hvolvern]
  affiliations: {talgnugarhld: {rank: 3, office: [Elder of a House, Warden of the Watch]}}
  socialTies: {being-kavalannlpfrd: rival, being-hamaktlghnth: rival}
  gender: female
  species: flkkhazar
  born: "684.301"
  died: null
  height: 4' 10"
  weight: 170 lbs
  frame: massive
  appearance:
    eye_color: grey
    hair_color: black
    skin_color: pale
    complexion: [scarred]
    hair_style: braided
    facial_hair: short_beard
    extra_features: [the tips of two fingers on her left hand lost to frost]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 58}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 46}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 62}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 48}}
    - {model: skill-khazarlng, system: {masteryLevelBase: 80}}
    - {model: skill-drthrkscrpt, system: {masteryLevelBase: 40}}
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
      weight: {base: 170, calc: "170"}
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

Darakh Tanv-guráz (_DAH-rahkh tahnv-goo-RAHZ_) is a Khazár woman of 4'10" and massive build, with pale skin scarred by wind and ice, black hair braided tight to the head, a short black beard and gray eyes. Frost has taken the tips of two fingers on her left hand. On the cols she wears a white felt cloak over mail and carries a short heavy spear and a coil of rope.

# Dossier {#dossier}

**Warden of the Watch of [[affiliation-talgnugarhld|Talg-nugár Hold]]. Wants nobody on the slopes above the valley who has not been seen first, and nobody at the cliff at all.**

Darakh is an elder of the house of [Tanv-guráz]{.name data-type="affiliation/lineage"}, the guarding of the gate, and sits for it at the council of Talg-nugár Hold. Her house keeps gates and approaches in more than one hold, and as Warden of the Watch she keeps the watchers on the cols of [[place-estrnreach|the Eastern Reach]] and on the slopes above the [Lunvharn]{.name data-type="affiliation"} valley. Her given name is built on holding fast.

## Background

Darakh is the youngest elder the council of the hold has seated, raised to it when her mother died on the col in a storm she had gone out into after a lost yak-train. She has spent more of her life above the snow line than in the rock, and the watchers of the cols are hers by choice as well as by office.

It was her watchers who saw the silver prospector on the valley track last summer before the Lunvharn did. She holds that a stranger who has been turned back once and is coming again with rope and porters is a stranger the old way has already failed, and on the council she wants the slope above the terraces brought down before the thaw so that the way he means to climb is gone.

## Psyche

### Personality

Darakh is blunt, restless and short of patience with any argument that ends in waiting.

### Motivation

She wants the cliff kept as it has always been kept, unseen by anyone the hold did not choose to show it to.

### Strengths

She knows every col, gully and slope of the Reach above the valley in every season, and her watchers follow her into weather that would turn the Hvarn back.

### Weaknesses

She mistakes speed for safety, and she has no ear for stone, so she argues about a slope she cannot read.

## Social

### Companions

The watchers of the cols, most of them younger than she is.

### Patrons

None. The council raised her.

### Enemies

The [[lore-grukarfolk|Grukar]], whom her house kills on sight wherever they are found. On the council, [[being-kavalannlpfrd|Kavalan Nalp-furád]] and [[being-hamaktlghnth|Hamak Talg-hunáth]] oppose her over the prospector.

### Affiliations

- **[[affiliation-talgnugarhld|Talg-nugár Hold]]**: Darakh is an elder of the council and its Warden of the Watch.

## Plot Hooks

1. **The second climb.** Darakh wants to know the day the prospector's party means to leave the Gorges, and how many ropes it carries.
2. **The lost train.** The yak-train her mother went out after was never found, and Darakh still wants to know where on the col it went over.
3. **A watcher missing.** One of her watchers has not come in from the northern col for nine days, and Darakh wants him found before the hold has to send a party into the snow.

:::secret {title="The marked slope"}
Darakh has walked the slope above the terraces and marked the stones where a fall would come down with the least cut. If the prospector's party climbs before the council decides, she will bring it down herself, without the council's leave, and stand at the council afterward to take whatever the record enters against her name, exile included.
:::
