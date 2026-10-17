---
shortcode: cnpyglr
name: {full: Canopy Glider, aliases: [Luorithuri]}
type: being
subType: creature
description: "A cat-sized, long-limbed night feeder of the unbroken canopy that crosses a hundred yards of forest between trees on a fold of skin without touching the ground."
tags: [animal, creature, image-needed]
data:
  packFolder: animals
  icon: sohl-none-icon-monkey
  templatePriority: 0
  culture: kaliharanclt
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+2
    end: 1d4+4
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+10
    aur: 1d4+5
    wil: 1d4+6
    rea: 1d6+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 15}}
    - name: Bite
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
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -3, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Legs, shortcode: legszone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
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
            isFumble: true
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 8, calc: "8"}
      reachBase: 0
      bodyScaleBase: 0.55
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 120
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

A bough high in the canopy shivers and something pale-bellied lets go of it. It drops, and the loose fold of skin from its wrist to its ankle opens into a flat grey-green sail. It slides across the gap between two trees with a hundred yards of forest below it, banks on its flat tail, and lands head-up on a trunk with its large dark eyes turned toward you. It has crossed the whole of the clearing without touching the ground.

# Dossier {#dossier}

The Canopy Glider, _luorithuri_ in the [[skill-kalihrlng|Kalihari Language]], "canopy wind", is a cat-sized, long-limbed mammal of the unbroken canopy over the ridgelines and the lower forest of [[place-klhrcntnnt|Kalihara Continent]]. A loose fold of skin runs from wrist to ankle on each side, and with it the animal launches from a high bough and crosses a hundred yards of forest between trees, steering with a flat tail. It feeds at night on fruit, flower-nectar and insects. It is solitary and silent except in [Stillwater]{.name data-type="lore/calendar"}, when pairs call across the canopy. It is no danger to anyone, and a traveler on the ridge paths is more likely to hear one land than to see it.

## Presentation

A long-limbed animal about the size of a cat, grey-green above and pale below, with a soft, close coat, a flat tail and large dark eyes set for night sight. At rest the skin-fold lies in loose pleats along its flanks and it looks like an ordinary climbing animal. Spread, it is a flat sheet with the limbs at its corners and the tail trailing as a rudder.

## In the Land

Gliders keep to the unbroken canopy of the ridgelines and the lower forest, where the trees stand close enough for a crossing. They do not come down into the cleared valleys, because the terraces leave no bough to launch from, and they are not met on the shore. Each animal keeps a stretch of canopy and a set of crossing-lines between the trees it uses, and it uses the same lines season after season.

## Key Behaviors

The glider sleeps in a hollow or a fork by day and feeds from dusk. It climbs to a high bough, launches, and crosses to the next tree on a long flat slide, so that a feeding animal moves through a grove without once touching the ground. It takes fruit and the nectar of flowering trees, and snatches insects from the bark. Pairs are silent most of the year. In Stillwater they call to each other across the canopy through the night, and the calling carries a long way.

## What the Islanders Do

Children learn the gliders' crossing-lines as the first forest paths: a line that has been used season after season shows in scuffed bark on the launching bough and on the landing trunk, and it marks a route a person can follow. Households whose part is a grove keep a count of the gliders in it in the sílhari manual, and a grove that stops holding them is written down as a grove in trouble. Nobody hunts them and nobody keeps one.

## Signs

- Scuffed bark on a high bough and a matching scuff on a trunk a long way off, in a line.
- Fruit husks and half-eaten flowers scattered on the forest floor under one tree and not its neighbors.
- Paired calling across the canopy in the dark, in Stillwater.
- A pale shape crossing a gap at dusk without any sound of wings.

## Combat Strategy

A glider does not fight. Disturbed, it climbs and launches, and a pursuer on the ground cannot follow it across a gap it takes in one slide. Cornered, or taken from a hollow, it bites and rakes with all four feet at once and goes on biting until it is let go.

## Attack Methods

### Bite

A quick, small bite from a cornered animal. It breaks the skin and does little more.

## Special Abilities

### Glide

The skin-fold carries the animal a hundred yards between trees from a high launch. It moves through the canopy at the speed of a glide and not the speed of a climb, and it lands with all four feet on a trunk.

### Canopy Crossing

A glider in the canopy can leave a ground pursuer behind in one launch, and lands out of sight in the foliage. On the ground it is slow and clumsy.

## Attributes

- **Strength:** 3-6 (1d4+2)

- **Endurance:** 5-8 (1d4+4)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 13-18 (1d6+12)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 6-9 (1d4+5)

- **Will:** 7-10 (1d4+6)

- **Reasoning:** 5-10 (1d6+4)

- **Creativity:** 4-7 (1d4+3)
