---
tags:
  - draft
  - common-folk
  - character
name:
  full: Arkálòrdâs Kâlmâkanês
  title: ""
  given: Arkálòrdâs
  clan: Kâlmâkanês
  home: aelissium
  aliases: []
packFolder: midhalionvylaria
shortcode: arklrdsklmkns
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Common Seaman
  stations: []
  lore:
    - vylarianclt
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - vylarinmpr
  gender: male
  species: null
  age: 37
  birthday: 687/4/10
  height: 1.93
  weight: 89
  frame: heavy
  appearance:
    eye_color: gray
    hair_color: black
    skin_color: tanned
    complexion: olive_toned
    extra_features:
      - a scar on the right calf and a Seaman's Guild tatoo on his right arm
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: affiliation-murkir }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-eng, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pilt, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 9 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-cmcs, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-mill, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 28 } }
    - { model: skill-vylarilng, system: { masteryLevelBase: 50 } }
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Arms
            shortcode: armszone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Legs
            shortcode: legszone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
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
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: null
        calc: "(9 * str) + 50"
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

Arkálòrdâs Kâlmâkanês is a 37-year-old man who stands 6'4" tall and is broad and solidly built. He has a diamond face with broad cheekbones, a smooth forehead, and a square jaw that leads to a strong chin. His narrow gray eyes sit beneath straight brows and give him a keen gaze. He has an aquiline nose and narrow lips. He has tanned skin with an olive-toned complexion. His black hair is receding at the temples.

# Dossier {#dossier}

Arkálòrdâs Kâlmâkanês is a common seaman of Aelissium, a trade city of [[place-vylariargn|Vylaría]], a Vylarian freeman who has worked the merchant ships of the Vylarian Sea for twenty years and is the hand the captains ask for by name.

Arkálòrdâs went to sea from Aelissium at seventeen and has been aboard something ever since: grain ships to the capital, timber ships to Vald, and the long runs east to Heliónis and, before the war, to Harad. He has been through the weather that sinks ships and has come home from it, which is the whole of a seaman's reputation. He is no officer and has never wanted to be one, but he has been the senior hand on every deck for ten years, the man the captain asks before he turns for a lee shore. He teaches the boys: how to reef, how to stow, what the sea looks like the hour before it kills a man. He has buried enough of them to teach hard.

## Psyche

### Personality

Arkálòrdâs is steady, stubborn and set in the ways he learned, and distrusts any way of working a ship he has not seen tested in a gale.

### Motivation

Arkálòrdâs wants the ship he is on to come home with every hand it left with, and he wants to keep the standing that makes the captains ask for him. The young officers do not ask.

### Strengths

Long experience at sea, a natural leader on deck, a fine seaman.

## Social

Arkálòrdâs is on the roll of the Seamen's Collegium of Aelissium, whose mark is on his right arm, and hires by the voyage as the seamen of Vylaria do.

## Companions

### Patrons

Arkálòrdâs's patrons are the merchant captains of Aelissium, who ask for him when the cargo matters, and the crews who sign because he has.

### Enemies

A young mate on the Heliónis run who learned his trade in a Haradian yard and has told his captain that the old hand is slowing the deck; and a Haradian privateer who took a ship Arkálòrdâs was aboard and did not take him.

## Plot Hooks

1. **The Shoals**—A captain has offered double wages to take a cargo through the Tamzîr channels, which Haradian pilots know and Vylarian seamen do not, and the crew will not sign without Arkálòrdâs.

2. **The Letters of Marque**—A Haradian ship carrying letters against Vylarian trade has been seen off the Heliónis coast, and it is the privateer's. Arkálòrdâs's ship is the next out.

3. **The Navy's Need**—The empire's navy is short of seamen and is paying the collegium for its rolls. Arkálòrdâs's name is at the top of one.

4. **The Young Mate**—The mate has been given the deck for the Heliónis run and has set the ship the Haradian way, with half the hands aloft that Arkálòrdâs would keep there. The weather is coming.
