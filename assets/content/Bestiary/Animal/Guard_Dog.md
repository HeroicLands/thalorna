---
shortcode: guarddog
name: {full: Guard Dog, aliases: []}
type: being
subType: creature
description: "A large, disciplined canine bred for protection, obeying its handler's commands while defending settlements and charges with the aggression of a trained predator."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-hound, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+8
    end: 1d6+7
    agl: 1d6+10
    per: 1d6+14
    snt: 1d4+3
    aur: 1d4+2
    wil: 1d6+11
    rea: 1d4+4
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 55}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, clench: true, armorReduction: 1}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor]
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 120
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[guarddog|Guard Dog]]{float=top-left}

The dog lies across the gate of the yard, a big, short-coated animal the color of wet slate, with its chin on its paws. It has not barked. It watches you come along the lane with calm eyes that follow every step, and when you reach the gatepost it stands, all at once, standing two feet at the shoulder with the muscle moving under the coat. A low note starts in its chest and holds.

# Dossier {#dossier}

The Guard Dog is the big protection dog of the villages and strongholds, about two feet at the shoulder and a hundred twenty to a hundred eighty pounds. It is kept in the villages of [[place-vrystwald|Vristwald]], on the estates of [[place-velanthrgn|Velanthia]], at the gates of the cities of [[place-byzariargn|Bizaria]] and in the keeps of [[place-aelwyth|Aelwyth]], and it guards a fold, a granary, a wall or a person. A dog like this is worth several armed men in defence.

## Presentation

A powerfully built dog with broad shoulders and a deep chest. The coat is short and dense, black, brown or mottled. The head is large, with a broad muzzle and strong jaws. The eyes are intelligent and read a person's mood quickly. The dog looks noble and dangerous at once.

## In the Land

Guard dogs are kept in the villages of Vristwald, on the farms and estates of Velanthia, at the gates of the walled cities of Bizaria and in the keeps of Aelwyth. A dog lives with its handler's household, sleeps at the door or in the yard, and works a fixed beat around a fold, a granary or a wall. It is fed well and trained from a puppy to answer a few words and hand-signs.

## Key Behaviors

Guard dogs are loyal to their handlers and obey them to the death. They are territorial and hostile to anything that threatens their ground or their charge, but they are trained to hold back until they are told. A good dog answers hand signals and voice with precision. It works mainly by day, and can be trained to work at night.

## What the Households Do

A shepherd, a miller, a gate-warden or a lord keeps a dog or a pair, and a good dog is not for sale. The handler walks it on a chain through the market so that the dog knows the faces, and teaches it to hold a stranger at bay without biting. A village keeps the dogs of the watch together and feeds them from the common store. A dog that has bitten without a command is killed, and a dog that has saved a household is fed from the table. Travelers coming at night call out their names at the gate and wait for the handler.

## Signs

- A big, short-coated dog lying across a doorway with its chin on its paws and its eyes open.
- A deep, level bark from a farmyard that stops the moment a door opens.
- A chain-worn patch of bare earth around a post in a yard.
- A dog that walks along a fence-line at a measured pace, stops at the gate and sits.
- A pair of dogs on the road ahead of a flock, at an even distance from the sheep.

## Combat Strategy

A guard dog fights with discipline and strategy, not wild aggression. If commanded to attack, the dog lunges with focused purpose, attempting to grapple and immobilize. If defending a charge, the dog positions itself between threat and protected individual. A guard dog fighting for its handler commits fully and shows great reluctance to retreat.

## Attack Methods

### Powerful Bite

The dog's bite is designed to grip and hold—the dog bites a limb or torso and attempts to drag the target down or away from protected charge. The bite is painful and causes serious injury.

### Tackling Charge

The dog uses its weight to knock opponents down—running directly at threats and impacting at waist height or lower, driving targets backward or to the ground.

## Special Abilities

### Protective Loyalty

When defending its handler or designated charge, the guard dog fights with far greater force. The dog will not retreat if its charge is threatened.

### Command Obedience

The dog responds instantly to voice commands and hand signals from its handler, executing complex maneuvers with precision. This coordination makes the dog-handler pair far more effective than individual components.

## Attributes

Strength
: 9-14 (1d6+8)

Endurance
: 8-13 (1d6+7)

Agility
: 11-16 (1d6+10)

Perception
: 15-20 (1d6+14)

Scent
: 4-7 (1d4+3)

Aura
: 3-6 (1d4+2)

Will
: 12-17 (1d6+11)

Reasoning
: 5-8 (1d4+4)

Creativity
: 6-9 (1d4+5)
