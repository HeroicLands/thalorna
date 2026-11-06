---
shortcode: chlbrhydyn
name: {full: Chelebe Riddin, given: Chelebe, clan: Riddin}
type: being
subType: character
description: "The Silent Talon's Áelendan tracker and archer, come down from the Drenavar Spine to learn the lowland world, and quartered with the company at Belsaren."
tags: [hero, silent-talon, unguilded, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [skirmisher, woodsman]
  occupation: Hunter / Scout
  lore: []
  culture: provenzianclt
  homes: [belsaren]
  affiliations: {slntlncmpny: {rank: 3}, kngdmprvnz: {rank: 2}}
  gender: male
  species: humanflk
  born: 688.233
  height: 5' 11"
  weight: 154 lbs
  frame: light
  appearance:
    eye_color: hazel
    hair_color: dark_brown
    skin_color: pale
    complexion: [weathered]
    extra_features: []
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 9}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 78}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-fltch, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 88}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-weapongear-lbw75}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-cshirt}
    - {model: sohl-sohl-armorgear-cbrch}
    - {model: sohl-sohl-armorgear-cswd}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-containergear-backpk}
    - {model: sohl-sohl-miscgear-stdrtns, system: {quantity: 3}}
    - {model: sohl-sohl-miscgear-litebdrl}
    - {model: sohl-sohl-projectilegear-arwlbrd, system: {quantity: 30}}
    - {model: sohl-sohl-containergear-wtrskin}
    - {model: sohl-sohl-containergear-quiversmsh}
    - {model: sohl-sohl-containergear-bagleather15}
    - {model: sohl-sohl-miscgear-tndrbx}
    - {model: sohl-sohl-miscgear-iconwdsm}
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

![[chlbrhydyn|Chelebe Riddin]]{float=top-left}

Chelebe Riddin is a 31-year-old man who stands 5'11" tall and is of light build, lithe and wiry. His pale skin is weather-tanned, his dark brown hair is tied back with a leather thong, and his hazel eyes are watchful. He dresses in green and brown and stands so still at the edge of a camp that strangers walk past him.

# Dossier {#dossier}

Chelebe Riddin is an [[lore-aelendnppl|Áelendan]] hunter from the high valleys of [[place-drenavrspn|the Drenavar Spine]] in northern [[place-provenzrgn|Provénzia]], and the tracker and archer of [[affiliation-slntlncmpny|the Silent Talon]], which is quartered this season at [[place-belsaren|Belsaren]] in [[place-ceravelvale|Keravel Vale]].

He was trained from childhood in the old ways of tracking, archery and survival, and he belongs to the [[place-eshalshldg|Ésalosa lodge]]. His bond with the land and its spirits is a practice and not a belief: he greets a ridge before he crosses it, and he will not camp where the ground tells him not to. He did not join the Talon for coin. He came down from the mountains to learn the world that is pressing on his people, and he means to carry back enough silver and knowledge to keep the lowlanders off their sacred places. [[being-branwldrgr|Branval Dorgal]] values his eyes and his knowledge of country more than any sword in the band.

The vale troubles him. East of Belsaren rise [[place-bloodhills|the Blood Hills]], where a great battle was fought and something of the Black Flame's is said to lie hidden, and the outlaws use the broken country below them to vanish. Chelebe has found their trails, and some of them lead somewhere outlaws have no business going.

## Psyche

### Personality

Chelebe is quiet and inward, and he speaks when there is something to say. He is fiercely loyal to those who earn it and guarded with everyone else. He is not unfriendly; he is more at ease among trees than among people.

### Motivation

He wants to secure a future for his tribe and the sacred places of the Áelendan, and he wants to understand the lowland quarrels before they reach the high valleys.

### Strengths

He is a master tracker who follows a trail over rock and through water, a patient and deadly bowman, and a scout who can live off any country he is set down in.

### Weaknesses

He will leave a contract the moment a sacred site is threatened, and he does not always say so first.

## Social

### Companions

[[being-branwldrgr|Branval Dorgal]], his captain, and the rest of the Talon: [[being-elyseskyrn|Élithe Sarneth]], [[being-torniskbry|Tornis Kubri]] and [[being-dornsyndlr|Doren Sindalre]].

### Patrons

His tribe and the Ésalosa lodge, to whom he sends what he earns.

### Enemies

Anyone who digs at a sacred site, whether for treasure, for timber or for a faith.

### Affiliations

- **[[affiliation-slntlncmpny|The Silent Talon]]**: Chelebe is a Sworn Member and the company's scout.
- **[[affiliation-kngdmprvnz|Kingdom of Provénzia]]**: The crown counts him a Freeman, and he does not count himself the crown's.

## Plot Hooks

The Trail into the Hills
: The outlaws' trail out of the last raid runs not into the vale's woods but up into the Blood Hills, and someone has been digging there. Chelebe wants to follow it with a party before he tells Branval, because Branval's patron would want the find.

The Spirit's Warning
: Chelebe will not let the band camp on a rise above the Belsaren road, and he cannot say why except that the ground refused him. That night the outlaws strike the convoy camped there in the Talon's place.

The Defiled Grove
: Word comes down from the Spine that loggers have cut into a grove of the Ésalosa lodge. Chelebe must persuade the Talon to leave the Belsaren contract unfinished, or go alone.
