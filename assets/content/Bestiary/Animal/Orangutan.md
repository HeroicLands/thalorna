---
shortcode: orngtn
name: {full: Orangutan}
type: being
subType: creature
description: "A highly intelligent, solitary rainforest ape and peaceful herbivore of the distant jungle canopy, turning violent only to defend itself or its young."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-monkey, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+15
    end: 1d6+11
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+9
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d6+8
    cre: 1d6+7
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Powerful Grapple
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 77
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Powerful Grapple
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 19, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 6}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
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
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
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
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 120, calc: "120"}
      reachBase: 0
      bodyScaleBase: 1.43
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 35
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[orngtn|Orangutan]]{float=top-left}

Fruit-skins and seeds drop through the leaves onto the forest floor in front of you. Forty feet up, along a branch of the fig, a huge red-orange shape moves with a deliberate, hand-over-hand patience. Its arms hang in loops, and its leathery face turns, large and grave, with deep-set eyes that regard you for a long while. It does not hurry. Then it goes back to choosing a fig.

# Dossier {#dossier}

The Orangutan is the red forest ape of the southern forests of [[place-vedyarargn|Vedyara]], five to six feet tall with arms that span up to ten feet, living alone in the high canopy. It is gentle, thoughtful and very intelligent, and violent only when it is attacked or its young are in danger. It spends nearly its whole life in the trees and comes to the ground only to cross between patches of forest or to drink.

## Presentation

A big ape that looks bigger because of the arms, which can span up to ten feet from fingertip to fingertip. The fur is coarse, reddish brown to deep orange, thicker and darker with age. The face is large, leathery and expressive, with deep-set, intelligent eyes that shift from dark brown to amber. The hands and feet are large and clever, with opposable thumbs and a powerful grip. Old males grow a shoulder hump and a throat pouch that deepens their calls into a resonant sound that echoes through the canopy.

## In the Land

Orangutans live high in the canopy of the great forests of southern Vedyara, where the fig, the durian and the jackfruit fruit in turn through the year. An animal keeps a large range, alone, moves from tree to tree by swinging and climbing and rarely comes to the ground. Each evening it builds a new nest of folded branches in a fork, high up, and it rests through the rains under a roof of leaves.

## Key Behaviors

Orangutans live alone, each holding a large range and its fruit trees, which it holds by presence rather than by fighting. They spend hours picking insects from the bark or studying a tree to choose the ripest fruit. They recognize individual people and remember them for years. A mother keeps her young one for six or seven years, teaching it to find its way, to forage and to survive.

## What the Forest Villages Do

The forest villages call the orangutan the old man of the trees and leave it alone. They do not hunt it, and a woodcutter who finds one in a tree he has marked takes another. Fruit-gatherers know the tree an animal is working by the rain of skins and seeds beneath it. A mother with a young one is given plenty of room. Hunters who take the young for a menagerie find that the mother follows for days. The orangutan is gentle until a young animal is threatened.

## Signs

- A rain of fruit-skins and seeds dropping from a tree-crown onto the path.
- A nest of folded branches in the fork of a high tree, fresh green at the edges.
- A long, rolling call that rises and breaks off, from deep in the forest at dawn.
- A branch bending under a great red-brown shape that moves slowly and deliberately.
- A fig or jackfruit with one bite taken, thrown on the ground.

## Combat Strategy

An orangutan's first response to threat is retreat — it climbs higher into the canopy where its superior branch-navigation ability provides safety. If escape is impossible, it will attempt to intimidate through vocalizations and displays, standing bipedally on branches, swaying the canopy violently, and emitting deep warning calls. Only when directly attacked or when young are threatened will an orangutan fight. When forced to combat, it uses its overwhelming strength advantage and long reach to grapple and subdue attackers, preferring to restrain rather than injure. It will use the environment tactically — swinging across gaps to create distance, breaking branches to create obstacles, and using height advantage for leverage in wrestling matches.

## Attack Methods

### Powerful Grapple

The orangutan closes distance with rapid brachiation and uses its long arms and tremendous strength to wrap around an opponent's torso or limbs, pinning them with crushing force. The creature's grip is nearly impossible to break without significant strength or leverage.

### Branch Break and Throw

The orangutan breaks dead wood from its current branch and hurls fragments — ranging from fist-sized chunks to substantial pieces — at targets below or at distance. While primarily a distraction tactic, larger projectiles can cause serious injury.

### Bite

If a grapple is successful, the orangutan may bite at exposed flesh, particularly face, shoulder, or limb, inflicting puncture wounds from its powerful jaw and large canine teeth.

## Special Abilities

### Arboreal Mastery

The orangutan moves through the forest canopy with effortless grace and speed that defies gravity. It can brachiate across gaps, swing in complex patterns, and position itself on branches humans cannot reach, giving it unmatched tactical mobility in forest combat. In the trees it moves faster and more surely than any person.

### Incredible Strength

An orangutan's muscular build is deceptive — an adult male can weigh as much as three humans but possesses strength well beyond that ratio. It can bend saplings, tear open termite mounds, and manipulate objects humans would struggle with.

### Intelligent Problem Solving

The orangutan can assess situations with startling clarity and adjust tactics mid-combat. It remembers previous encounters with humans and can anticipate repeated behaviors, making it unpredictable in prolonged conflicts.

### Intimidating Displays

When threatened, the orangutan performs elaborate threat displays — rocking branches violently, emitting deep resonant calls that seem to shake the forest itself, and creating the visual impression of a far larger, more aggressive creature than it truly is. These displays can unnerve unprepared adventurers.

### Additional Information

Orangutans are generally docile toward humans who do not threaten them, and some forest-dwelling peoples have learned to coexist peacefully. Capturing or injuring an orangutan, however, creates a dangerous and implacable enemy that will stalk and harass the perpetrator for months. The creatures' intelligence means they can be tracked and anticipated — but they also learn and adapt to countermeasures.

## Attributes

Strength
: 16-21 (1d6+15)

Endurance
: 12-17 (1d6+11)

Dexterity
: 12-17 (1d6+11)

Agility
: 13-18 (1d6+12)

Perception
: 10-15 (1d6+9)

Aura
: 8-11 (1d4+7)

Will
: 10-15 (1d6+9)

Reasoning
: 9-14 (1d6+8)

Creativity
: 8-13 (1d6+7)
