---
shortcode: trrcml
name: {full: Terrace Mole, aliases: [Manulua]}
type: being
subType: creature
description: "A dog-sized burrower with broad forelimbs and soft grey fur that works the terrace banks by night, and whose tunnels carry water through the terrace walls."
tags: [animal, creature, image-needed]
data:
  packFolder: animals
  culture: kaliharanclt
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+6
    end: 1d6+8
    dex: 1d4+7
    agl: 1d4+7
    per: 1d6+8
    aur: 1d4+3
    wil: 1d4+6
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 32}}
    - name: Digging Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Digging Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Snapping Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Snapping Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 3}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
      weight: {base: 45, calc: "45"}
      reachBase: 0
      bodyScaleBase: 0.85
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 35
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

Before dawn the terrace bank is quiet. Then a clod of earth lifts at the foot of the wall, a blunt snout pushes out of it, and a dog-sized animal in soft grey fur heaves itself up on broad forelimbs and shakes the soil from its coat. It noses along the wall for grubs, digs once, twice, and stops with its head up. It has heard you, and it is not frightened. It looks at you with the flat, irritated patience of something that has work to do.

# Dossier {#dossier}

The Terrace Mole, _manulua_ in [[skill-kalihrlng|Kalihari]], "root dawn", for the animal that comes up out of the ground with the first light, is a dog-sized burrower with broad forelimbs, a blunt snout and soft grey fur. It lives in the terraced river valleys of [[place-klhrcntnnt|Kalihara]], especially the broad eastern ones, and works in the terrace banks by night. At dawn it comes up to feed on grubs and roots. Its tunnels run along the terrace walls and carry water through them. It is not a danger to anyone who leaves it alone, but a manulua that is cornered bites hard, and the terraces keep their runs open by leaving the animals be.

## Presentation

A thickset animal the size of a dog, with a blunt snout, small eyes, soft grey fur and forelimbs that are broad, flat and heavily clawed. The back carries a loose plated hide under the fur, and the tail is short. On the ground it moves in a rolling, hurried trot, and in the earth it moves faster than a person can dig.

## In the Land

The manulua lives in the terrace banks and walls of the river valleys, and the broad eastern valleys hold the most. Its runs follow the line of the terrace walls, and the water of a terrace drains through them. It does not climb into the high forest and it is not met on the shore.

## Key Behaviors

By night the animal digs in the bank, and at dawn it comes up to feed on grubs and the roots of the terrace crops. It keeps a set of runs that it extends and mends, and the tunnels of neighboring animals join. It is short-tempered at its burrow mouth and will snap at anything that comes between it and the entrance. When it is frightened it goes to ground in a moment, with its hind feet kicking the earth shut behind it.

## What the Islanders Do

Terrace households tend the manulua as part of the terrace. A bank honeycombed with its runs drains well and a bank without them slumps, and the terrace-keepers keep the runs open and leave the animals alone. A manulua digging in an unexpected place is the first sign that a terrace is changing, and it is one of the signs the [[affiliation-kalihara|Master of the Terraces]] asks the households to report.

## Signs

- A fresh mound of loose soil at the foot of a terrace wall at dawn.
- A tunnel mouth along the line of a wall, with a stream of clear water running out of it.
- Small cone-shaped pits in the bank where an animal has dug for grubs.
- Digging in a place where there has been none: a sign that the terrace is shifting.

## Combat Strategy

A manulua avoids a fight and digs in. Cornered at its burrow mouth, it turns to face the threat and bites, and rakes with its forepaws if the bite is not enough. It does not pursue.

## Attack Methods

### Digging Claws

The broad forepaws rake with the whole weight of the shoulders behind them. They open skin and leave long gouges.

### Snapping Bite

A short, sharp bite at a hand or a lower leg from a cornered animal.

## Special Abilities

### Plated Hide

The plates under the fur turn a glancing blow, and the animal rolls against a wall to keep its belly covered.

### Master Burrower

The manulua digs into a terrace bank in moments and is lost to a pursuer in its own runs, which a person cannot follow.

## Attributes

Strength
: 7-12 (1d6+6)

Endurance
: 9-14 (1d6+8)

Dexterity
: 8-11 (1d4+7)

Agility
: 8-11 (1d4+7)

Perception
: 9-14 (1d6+8)

Aura
: 4-7 (1d4+3)

Will
: 7-10 (1d4+6)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
