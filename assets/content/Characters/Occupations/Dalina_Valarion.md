---
tags:
  - draft
  - tradesfolk
  - character
name:
  full: Dálina Valárion
  title: ""
  given: Dálina
  clan: Valárion
  home: castamere
  aliases: []
packFolder: aureldiatarvenia
shortcode: dalinavlrn
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Pilot
  stations: []
  lore:
    - tarvenanclt
    - landedlordrnk
  homes:
    - tarvenirgn
  affiliations:
    - kingdmtrvn
  gender: female
  species: null
  age: 32
  birthday: 692/6/9
  height: 1.75
  weight: 65
  frame: light
  appearance:
    eye_color: amber
    hair_color: dark_brown
    skin_color: olive_tanned
    complexion: tanned
    extra_features:
      - a scar running down the right leg
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-murkir }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-mrcn, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 15 } }
    - { model: skill-semrnscrpt, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-pilt, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-slng, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-cmcs, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 12 } }
    - { model: skill-tarvenlng, system: { masteryLevelBase: 48 } }
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

Dálina Valárion is a 32-year-old woman who stands 5'9" tall and is slender. She has a long face with defined cheekbones, a prominent forehead, and a sharp jaw that leads to a square chin. Her large amber eyes sit beneath straight brows, lending her an expressive gaze. A hawkish nose and thin lips complete her features. She has olive-tanned skin with a sun-tanned complexion. Her dark brown hair is falling in dark cascades.

# Dossier {#dossier}

Born in the Tarvénia region to a noble family of Tarvénan heritage, Dálina Valárion came into the world of the pilot through a combination of circumstance and aptitude.

Dálina is an accomplished pilot who specializes in cargo transport. She has a talent for managing her crew and ensuring that shipments arrive safely and on time. Known for her strong leadership skills, she is respected among her colleagues and has built a solid reputation for reliability. Dálina is passionate about her work and often advocates for improved working conditions in the aviation industry.

Now at 32 years of age, Dálina Valárion has established herself as a known figure among the pilots of Tarvénia. Her reputation, for better or worse, precedes her in the circles where such things matter.

## Psyche

### Personality

Can be too focused on logistics, sometimes struggles with the technical aspects of piloting.

### Motivation

Dálina is driven by the desire to master her craft and secure a stable future. The uncertainties of life in pilot work keep her vigilant and adaptable.

### Strengths

Strong leader, excellent communicator, skilled in cargo management.

## Social

Dálina is affiliated with Local Pilots' Guild.

As a Tarvénan pilot, Dálina occupies a recognized social niche within Tarvénia society.

## Companions

### Patrons

Dálina's primary patron is Merchants seeking dependable cargo transport services.. This relationship provides both opportunity and obligation.

### Enemies

Few; generally well-respected but may have rivals in the cargo industry.

## Plot Hooks

1. **The Pilot's Dilemma** — Dálina faces a professional crisis that threatens her livelihood. A choice must be made between principle and survival, and the consequences will ripple through her community in Tarvénia.

2. **Old Grudges** — Few; generally well-respected but may have rivals in the cargo industry. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Dálina's earlier life resurfaces unexpectedly, forcing her to confront unfinished business that she thought was long buried.

4. **Shifting Winds** — Political changes in Tarvénia threaten to upend the social order that Dálina depends upon. She must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Dálina the possibility of advancement beyond anything she has dared hope for — but the price may be higher than it first appears.
