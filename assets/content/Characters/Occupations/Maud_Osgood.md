---
tags:
  - draft
  - common-folk
  - character
name:
  full: Maud Osgood
  title: ""
  given: Maud
  clan: Osgood
  home: greywater
  aliases: []
packFolder: aureldiaaelwyth
shortcode: maudosgood
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Beggar
  stations: []
  lore:
    - aelwythanclt
    - commonerrnk
  homes:
    - aelwyth
  affiliations:
    - kngdmldrth
  gender: female
  species: null
  age: 62
  birthday: 658/6/10
  height: 1.65
  weight: 52
  frame: scant
  appearance:
    eye_color: green
    hair_color: dark_blonde
    skin_color: light
    complexion: freckled
    extra_features:
      - a scar on the back of the left arm
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 9 } }
    - { model: affiliation-morvana }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 18 } }
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

Maud Osgood is a 62-year-old woman who stands 5'5" tall and is slight of build. She has an angular face with sharp cheekbones, a broad forehead, and a narrow jaw that leads to a delicate chin. Her hooded green eyes sit beneath expressive brows, lending her a guarded gaze. A slightly upturned nose and narrow lips complete her features. She has light skin with a lightly freckled complexion. Her dark blonde hair is flowing past her shoulders.

# Dossier {#dossier}

Born in the [[place-aelwyth|Aelwyth]] region to a freeman family of Aelwythan heritage, Maud Osgood came into the world of the beggar through a combination of circumstance and aptitude.

Maud has been living on the streets for most of her life, begging for scraps and coins. Once a domestic servant, she fell into poverty after the death of her employer, leaving her with no family or means to survive. Maud is resourceful and has learned how to navigate the dangers of city life, relying on both charity and cunning to get by.

Now at 62 years of age, Maud Osgood has established herself as a known figure among the beggars of Aelwyth. Her reputation, for better or worse, precedes her in the circles where such things matter.

## Psyche

### Personality

Frail and prone to illness due to long-term malnutrition.

### Motivation

Maud is driven by the desire to master her craft and secure a stable future. The uncertainties of life in beggar work keep her vigilant and adaptable.

### Strengths

Resourceful, excellent at reading people's intentions.

## Social

Maud is affiliated with Informal network of beggars who look out for each other..

As a Aelwythan beggar, Maud occupies a recognized social niche within Aelwyth society.

## Companions

### Patrons

Maud's primary patron is Occasionally helped by a local charity or sympathetic individuals.. This relationship provides both opportunity and obligation.

### Enemies

Street thugs who extort money from beggars.

## Plot Hooks

1. **The Beggar's Dilemma**—Maud faces a professional crisis that threatens her livelihood. A choice must be made between principle and survival, and the consequences will ripple through her community in Aelwyth.

2. **Old Grudges**—Street thugs who extort money from beggars. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past**—Something from Maud's earlier life resurfaces unexpectedly, forcing her to confront unfinished business that she thought was long buried.

4. **Shifting Winds**—Political changes in Aelwyth threaten to upend the social order that Maud depends upon. She must decide whether to adapt, resist, or flee.

5. **The Opportunity**—A chance encounter offers Maud the possibility of advancement beyond anything she has dared hope for—but the price may be higher than it first appears.
