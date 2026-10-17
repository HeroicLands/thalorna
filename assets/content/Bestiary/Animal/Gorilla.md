---
shortcode: gorilla
name: {full: Gorilla, aliases: []}
type: being
subType: creature
description: "A massive, intelligent forest primate living in silverback-led troops, peaceful until provoked, when its defending alpha becomes a nightmare of muscle."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-gorilla, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+21
    end: 1d6+15
    dex: 1d6+9
    agl: 1d6+8
    per: 1d6+10
    aur: 1d6+10
    wil: 1d6+12
    rea: 1d6+7
    cre: 1d4+7
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 25}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 55}}
    - name: Devastating Punch
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Devastating Punch
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 7, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Crushing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Crushing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 8, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Arms, shortcode: armszone, probWeight: 5}
          - {name: Torso, shortcode: torsozone, probWeight: 5}
          - {name: Legs, shortcode: legszone, probWeight: 8}
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
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
      weight: {base: 350, calc: "350"}
      reachBase: 0
      bodyScaleBase: 1.71
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[gorilla|Gorilla]]{float=top-left}

The undergrowth ahead of you is being crushed flat by something heavy and slow. A strong, musty smell like a stable comes down the slope. Then a great black shape rises at the edge of the thicket, seven feet tall, with a silver saddle across its back and arms that hang to its knees. It stands very still, looking at you under a heavy brow, and then it drums its chest, a hollow, ringing sound that goes on and on.

# Dossier {#dossier}

The Gorilla is the great ape of the mountain forests, living in troops of eight to fifteen led by an old male, the silverback. The troops live on the cool, wet slopes of the [[place-cntrlrnfrsts|Central Rainforests]], feeding on leaves, stems and fruit. They are peaceful and cause no trouble until they are provoked or their troop is threatened, and then a silverback is a match for armed men.

## Presentation

A silverback is seven to eight feet tall and several hundred pounds, nearly all of it muscle and bone, with an upright or half-upright stance, arms hanging almost to the knees and legs built to take the weight. The hair is dark brown or black, silver across the back and shoulders of a mature male. The face is deep-set, with a broad nose and prominent teeth. The hands are large and strong, with opposable thumbs. It is neither a man nor wholly a beast, and has a depth of feeling that shows in its face.

## In the Land

Gorillas live in the montane forest and the cool, wet slopes of the Central Rainforests. A troop of eight to fifteen, led by a silverback, ranges over a few square miles of forest in a day, feeding on leaves, stems and fruit, and building a fresh nest of bent branches each night. They move to the lower forest in the dry season. They keep away from the river-bottoms, where the leopards and the tribes are.

## Key Behaviors

A troop moves through a fixed territory by day, feeding on leaves, fruit and stems along established paths, and builds a fresh nest of bent branches each night. Members communicate by calls, gestures and displays, and there is a clear order and plenty of affection. The silverback protects the troop, settles quarrels between the others and stands between it and any threat. An infant is nursed for several years, and mother and young stay close.

## What the Hunters Do

Most forest tribes do not hunt gorillas for food. They avoid the slopes where a troop lives, and a hunter who finds a nest-site turns back. When a silverback charges, it is in defence of the troop, and the correct answer is to stand still and look away. Traders who pass through the forest pay the tribes for guides who know the troop ranges. A silverback's skull is kept in a village as a mark of respect.

## Signs

- A loud chest-drumming, like a hollow log being beaten, from somewhere in the trees.
- A bed of bent branches and trampled leaves in the fork of a low tree, with a pile of dung beside it.
- Knuckle-prints, deep, in the soft ground of a forest trail.
- A strong, musty smell, like a stable, rising from a thicket.
- A screaming and crashing in the undergrowth, and a dark shape rising to its full height.

## Combat Strategy

A silverback defending its troop begins with intimidating displays—chest-beating, roaring, and aggressive charging—designed to frighten intruders away. If these displays fail to deter an opponent, the gorilla engages in direct combat with overwhelming strength and power. The silverback uses its massive arms to grapple, strike, and throw opponents, and will not disengage from combat if a threat to its troop remains. A silverback's tactics are straightforward: overwhelm through sheer force and size. The silverback fights with intelligence and experience, using leverage and positioning to maximum advantage.

## Attack Methods

### Crushing Bite

The gorilla's powerful jaws deliver a bite capable of crushing bone—the teeth are designed as weapons, sharp and strong enough to puncture thick hide or leather. A bite from a gorilla is debilitating and potentially lethal.

### Devastating Punch

The gorilla's massive arms deliver strikes with terrible force—a punch from a silverback is capable of breaking bones, shattering armor, or driving a target backward. These strikes are slow but tremendously powerful.

### Grapple and Throw

The gorilla's strength advantage is used to grapple opponents and control them—pinning them to the ground or throwing them with force sufficient to cause serious injury. A grappled target is in grave danger.

## Special Abilities

### Intimidating Presence

The silverback's displays—chest-beating, roaring, and aggressive charging—are designed to frighten and intimidate. A creature facing a silverback's display must maintain composure or risk fleeing or becoming paralyzed with fear.

### Protective Fury

When the silverback's troop is threatened, the gorilla's combat effectiveness increases—it becomes more aggressive and shows less concern for its own safety. A silverback defending its young will pursue threats indefinitely.

## Additional Information

A silverback gorilla's strength is famed, and some cultures revere them as forest spirits or embodiments of protective power. A gorilla that has not been provoked will rarely attack, though they will enforce boundaries around their territory. Attempting to separate a gorilla from its troop is supremely dangerous. Some indigenous peoples report negotiating peace with gorilla troops through specific gestures and respectful behavior.

## Attributes

Strength
: 22-27 (1d6+21)

Endurance
: 16-21 (1d6+15)

Dexterity
: 10-15 (1d6+9)

Agility
: 9-14 (1d6+8)

Perception
: 11-16 (1d6+10)

Aura
: 11-16 (1d6+10)

Will
: 13-18 (1d6+12)

Reasoning
: 8-13 (1d6+7)

Creativity
: 8-11 (1d4+7)
