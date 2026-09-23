---
tags:
  - animal
  - creature
name:
  full: Dragonfly Hawk
  aliases: []
description: "A dragonfly scaled to nightmare size, an agile aerial hunter of rivers, marshes, and coasts that strikes prey by sight."
shortcode: drgnflyh
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
  birthday: "unknown"
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
    str: 1d6+8
    end: 1d6+9
    dex: 1d6+13
    agl: 1d6+14
    per: 1d6+11
    aur: 1d4+7
    wil: 1d6+8
    rea: 1d4+4
    cre: 1d4+3
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 6 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 33 } }
    - name: Shearing Mandible
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 68
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: mandible
          name: Shearing Mandible
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 1
            aspect: edged
          lengthBase: 0
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
    - name: Leg Grasp
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 73
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: grab
          name: Leg Grasp
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 12
            aspect: blunt
          lengthBase: 0
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
            probWeight: 1
          - name: Thorax
            shortcode: thoraxzone
            probWeight: 1
          - name: Abdomen
            shortcode: abdomenzone
            probWeight: 1
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Thorax
            shortcode: thoraxpart
            bodyZoneCode: thoraxzone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: thoraxzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 2
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: thoraxzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 2
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: thoraxzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: thoraxzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
      weight:
        base: 15
        calc: "15"
      reachBase: 0
      bodyScaleBase: 1.06
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 100
        leaguesPerWatch: 8
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[drgnflyh|Dragonfly Hawk]]{float: top-left}

The sound reaches you first: a high-pitched whine like a distant saw cutting metal, growing closer with terrifying rapidity. Then you see it: a creature of nightmare proportions—a dragonfly magnified to lethal size, a body five feet long composed of gleaming segments of iridescent chitin. The wings beat so rapidly they're nearly invisible, producing a high, unceasing hum that sounds almost like pain. The mandibles—massive, shearing structures—snap open and shut in patterns suggesting hunger. The eyes—faceted, capturing light like a thousand tiny mirrors—fix directly on you with predatory intensity as the creature circles, testing, assessing.

# Dossier {#dossier}

The Dragonfly Hawk is an aerial predator of nightmare proportions: a dragonfly scaled to lethal size. Measuring five to seven feet from head to tail tip, with a wingspan of six to eight feet, these creatures are found in areas with water: rivers, lakes, marshes, and coastal regions. They are solitary hunters except during brief mating periods, when multiple individuals may congregate. A Dragonfly Hawk hunts by sight, pursuing prey from the air with speed and maneuverability that few creatures can match. They are known to hunt creatures as large as humans, though they prefer smaller prey. Their armor-like exoskeleton and speed advantage make them extremely difficult to threaten. Adventurers encounter them while traveling near water, camping on riverbanks, or crossing open terrain where an aerial predator has the upper hand.

## Presentation

An enormous insect with an elongated body composed of articulated segments of iridescent chitin, colored blue, green, or purple depending on light. The head is relatively small with enormous compound eyes and powerful mandibles capable of shearing. The thorax is muscular, supporting four wings of transparent membrane. The wings beat at frequencies that produce an audible hum. The abdomen is elongated and somewhat flattened, used for balance and maneuverability. The entire creature gleams with an almost metallic shine. Multiple sets of legs hang from the thorax, used for grasping prey during dives.

## Key Behaviors

Dragonfly Hawks are strictly aerial predators. They patrol territories, hunting insects and small animals from the air. They are capable of hovering, rapid acceleration, and precise maneuvering. They prefer open water or grassland where their command of the air counts most. They rest on perches above water, returning to the same sites repeatedly. They are most active during daylight and rest at night.

## Combat Strategy

A Dragonfly Hawk attacks from the air using hit-and-run tactics. It dives at prey, attempts to strike with mandibles, then climbs away before the target can respond. Multiple dives let the hawk wound its prey again and again. Prey on the ground that cannot reach the sky is at its mercy.

## Attack Methods

### Shearing Mandible Strike

The Dragonfly Hawk dives and attempts to bite with mandibles capable of shearing through flesh and light armor. The strike is fast enough that defending is difficult.

### Leg Grasping and Lifting

The Dragonfly Hawk can grasp prey with its legs and lift it from the ground, carrying it aloft and potentially dropping it.

## Special Abilities

### Blinding Aerial Speed and Maneuverability

The Dragonfly Hawk moves through air with speed exceeding mounted horses. Its maneuverability allows it to perform aerial tactics impossible for ground-bound creatures. Prey on the ground has almost no defense against a predator in the air.

### Multifaceted Vision

Compound eyes see in many directions at once, making surprise nearly impossible.

### Chitinous Armor

The exoskeleton provides significant protection against cutting and crushing blows from ground-based weapons. Thrusts and arrows do better.

## Attributes

- **Strength:** 9-14 (1d6+8)
- **Endurance:** 10-15 (1d6+9)
- **Dexterity:** 14-19 (1d6+13)
- **Agility:** 15-20 (1d6+14)
- **Perception:** 12-17 (1d6+11)
- **Aura:** 8-11 (1d4+7)
- **Will:** 9-14 (1d6+8)
- **Reasoning:** 5-8 (1d4+4)
- **Creativity:** 4-7 (1d4+3)

### Razor Mandibles

Capable of cutting through light armor and flesh.
