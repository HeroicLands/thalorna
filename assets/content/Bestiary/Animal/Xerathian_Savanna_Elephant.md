---
tags:
  - animal
  - creature
name:
  full: Xerathian Savanna Elephant
  aliases: []
description: "The largest land creature alive, a towering savanna elephant living in matriarch-led herds across the Xerathian grasslands."
shortcode: xrthnsvn
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: []
  gender: null
  species: null
  age: null
  born: "unknown"
  height: null
  weight: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+53
    end: 1d6+45
    agl: 1d4+5
    per: 1d6+15
    snt: 1d4+5
    aur: 1d4+4
    wil: 1d6+13
    rea: 1d4+6
    cre: 1d4+6
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 56 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 48 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 8 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 90 } }
    - name: Tusk
      type: skill
      system:
        shortcode: tusk
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: tusk
          name: Tusk
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 12
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 23
            aspect: piercing
          lengthBase: 6
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
            armorReduction: 2
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 44
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 24
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 20
            aspect: blunt
          lengthBase: 5
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 7
          - name: Trunk
            shortcode: trunkzone
            probWeight: 3
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 6
          - name: Torso
            shortcode: torsozone
            probWeight: 18
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Trunk
            shortcode: trunkpart
            bodyZoneCode: trunkzone
            roles:
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 1
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 1
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 1
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Trunk
            shortcode: trunkloc
            bodyPartCode: trunkpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 18
              edged: 17
              piercing: 15
              fire: 17
      weight:
        base: 10000
        calc: "10000"
      reachBase: 0
      bodyScaleBase: 2.88
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 90
        leaguesPerWatch: 6
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[xrthnsvn|Xerathian Savanna Elephant]]{float: top-left}

Presence announces itself before sight—the earth trembles rhythmically with footfalls that carry impossible weight. The creature that emerges is a living mountain of gray flesh, powerful beyond immediate comprehension. The long tusks gleam like ivory swords, and the vast ears shaped vaguely like continents fan the air with hypnotic rhythm. The trunk is a second limb, deft and powerful, and the eyes hold a sadness and awareness that speak of deep intelligence and feeling. You understand you are looking at more than the largest of land animals: at a creature that thinks and feels.

# Dossier {#dossier}

The Xerathian Savanna Elephant is the largest land creature in the world, standing 10-13 feet at the shoulder and weighing up to 10-14 tons, found in grasslands across the Xerathian continent and surrounding regions. These magnificent creatures are highly social, traveling in herds led by experienced matriarchs. Adventurers encounter them while crossing savanna regions or when herds conflict with human settlements.

## Presentation

The savanna elephant is enormous, wrinkled and gray-skinned, with long curved tusks and ears proportionally larger than forest cousins. The trunk is powerful and dexterous. The overall presence is both magnificent and intimidating.

## Key Behaviors

Savanna elephants are highly social, traveling in family groups led by matriarchs. They are intelligent and emotional, mourning dead and forming bonds. They spend much of their time foraging. They are generally peaceful unless defending young or territory.

## Combat Strategy

A charging elephant is nearly unstoppable, using tusks to gore and trunk to strike or throw. When defending young or herds, elephants become completely committed to defense.

## Attack Methods

### Tusk Gore

The long tusks gore and crush with devastating force.

### Trunk Strike

The trunk delivers powerful blows that can kill or maim.

### Trampling Stomp

The creature's weight crushes targets under its feet.

## Special Abilities

### Incredible Strength

The elephant possesses strength far exceeding most creatures.

### Herd Coordination

Elephants work together defensively, protecting young and injured members.

### Intelligent Manipulation

The trunk can handle objects and its surroundings with precision.

### Additional Information

Elephants defending young are nearly unbeatable and should be avoided. The tusks can be harvested after death and are extraordinarily valuable. Herds can be dangerous if panicked or threatened.

## Attributes

- **Strength:** 54-59 (1d6+53)

- **Endurance:** 46-51 (1d6+45)

- **Agility:** 6-9 (1d4+5)

- **Perception:** 16-21 (1d6+15)

- **Scent:** 6-9 (1d4+5)

- **Aura:** 5-8 (1d4+4)

- **Will:** 14-19 (1d6+13)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 7-10 (1d4+6)
