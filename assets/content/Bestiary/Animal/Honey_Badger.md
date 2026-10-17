---
shortcode: hnybdgr
name: {full: Honey Badger, aliases: []}
type: being
subType: creature
description: "A small but ferocious mustelid whose rubbery, twisting hide lets it bite attackers even when pinned, fighting far above its thirty-five pounds."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-badger, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+13
    dex: 1d6+9
    agl: 1d6+7
    per: 1d6+10
    aur: 1d6+8
    wil: 1d6+13
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Sharp Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Sharp Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Powerful Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Powerful Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 25, calc: "25"}
      reachBase: 0
      bodyScaleBase: 1.22
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

![[hnybdgr|Honey Badger]]{float=top-left}

The wild fig by the dry river-bed has been torn open at the root, and a bee-tree beyond it is shedding wax. Something low and black and white is crossing the sand toward you with a rolling gait, no taller than your knee, with its head down. It is a creature the size of a dog that has no intention of stepping aside. It stops, and the coarse hair stands up along its back.

# Dossier {#dossier}

The Honey Badger is a small, ferocious badger, two to three feet long and up to thirty-five pounds, with a black coat and a pale stripe from head to tail. It lives on the savanna and dry woodland of the [[place-sthrnsvnhs|Southern Savannahs]], the scrub of the [[place-sthmrchsrgn|South Marches]] and the hills of [[place-okharisrgn|Okharis Region]], raiding bee-trees, killing snakes and attacking animals many times its size. Its skin is so loose that it can twist and bite an attacker that has hold of it.

## Presentation

A compact, heavily muscled animal on stocky legs ending in strong claws for digging and tearing. The fur is coarse and dense. A black coat is marked by a white or pale stripe from the head along the spine to the tail. The ears are small and set flat to the head, and the snout is short with sharp teeth. It moves with a rolling gait and is much quicker than it looks.

## In the Land

Honey badgers live on the savanna and in the dry woodland of the Southern Savannahs, the scrub of the South Marches and the hills of the Okharis country. A badger digs a burrow in a bank, ranges a few miles at night and by day for bees, snakes, small animals and carrion, and follows the honey-guide birds to the hives. It moves from one burrow to the next and holds no fixed den.

## Key Behaviors

Honey badgers fear nothing and attack animals much larger than themselves. They hunt bees, snakes including venomous ones, small mammals and insects. Each holds and defends a territory against all comers, and once a fight starts it rarely breaks off, even badly hurt. They are mainly nocturnal, and hunt by day when food is plentiful.

## What the Herders Do

The herding clans lose hens, kids and honey to it. They hang their hives from tall branches on wires and sticks and put the henhouse on legs. A badger that has got into a pen is killed with spears and clubs, and the loose skin makes it hard to hold. The honey-hunters watch for the black-and-white animal at the base of a tree, since where it digs is where the bees are. Traders do not buy the pelt, which is too thick and rubbery for any use. A herder who has been bitten knows to keep the wound clean.

## Signs

- A hive-tree with a gaping hole torn in the trunk and wax strewn around the base.
- A deep burrow in a bank with a wide, ragged mouth and a spray of dug earth.
- The skin of a snake, flayed whole, lying at the mouth of a hole.
- A black-and-white shape, low and fast, crossing a dry watercourse at dusk.
- A hen-house wall torn through at the base.

## Combat Strategy

Honey badgers charge directly at opponents with reckless aggression, targeting vulnerable areas like eyes, faces, and throats. They rely on their low profile and loose hide to slip past attacks and retaliate with vicious bites and claws. If momentarily overwhelmed, a honey badger will curl defensively, using its thick hide as armor while waiting for an opening. When cornered, they become even more dangerous, explosive in their counterattacks.

## Attack Methods

### Sharp Claws

Delivered in rapid slashing attacks or used to dig into opponents; these claws can rake across flesh, inflict deep wounds, or disarm enemies.

### Powerful Bite

The honey badger's jaws are capable of crushing bone and can latch onto soft or vital areas with devastating results; once clamped, breaking free requires considerable effort.

## Special Abilities

### Thick, Loose Hide

The honey badger's skin is very elastic and can slip within itself, allowing it to escape many grabs or constrictions and rotate to bite attackers who think they have pinned it. This hide also resists cuts, bites, and stings from most sources.

### Relentless Fury

Honey badgers continue fighting with undiminished aggression even when severely wounded, and they fight harder when injured and defending their territory or young.

## Attributes

Strength
: 12-17 (1d6+11)

Endurance
: 14-19 (1d6+13)

Dexterity
: 10-15 (1d6+9)

Agility
: 8-13 (1d6+7)

Perception
: 11-16 (1d6+10)

Aura
: 9-14 (1d6+8)

Will
: 14-19 (1d6+13)

Reasoning
: 6-9 (1d4+5)

Creativity
: 5-8 (1d4+4)
