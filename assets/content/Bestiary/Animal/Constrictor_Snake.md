---
shortcode: cnstrctr
name: {full: Constrictor Snake, aliases: []}
type: being
subType: creature
description: "A huge non-venomous snake of tropical regions that kills through patient, crushing coils, subduing prey far larger than its own head."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-snake, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+9
    agl: 1d4+7
    per: 1d6+10
    snt: 1d4+1
    aur: 1d4
    wil: 1d4+6
    rea: 1d4
    cre: 1d4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 2}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 2}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 2}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 52}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 53
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: piercing}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, clench: true, armorReduction: 2}
    - name: Grab
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 73
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: grab
          name: Grab
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 14, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, constrict: true, impTA: 6}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forebody, shortcode: torsozone, probWeight: 11}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 6
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindbodyzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 4, edged: 6, piercing: 5, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 6, piercing: 5, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 6, piercing: 5, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            isStumble: true
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 6, piercing: 5, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 6, piercing: 5, fire: 4}
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[cnstrctr|Constrictor Snake]]{float=top-left}

The bank is a mat of roots and dead leaves, and a smooth furrow as wide as a man's thigh runs down through it into the water. A branch overhead is bowed under a dark, patterned weight, coiled over it in loops. A small, blunt head lifts out of the coils, a forked tongue flicking, and the heavy body begins to shift on the branch.

# Dossier {#dossier}

The Constrictor Snake is the big non-venomous snake of the hot forests and swamps, fifteen to twenty-five feet long and forty to two hundred pounds. It lives in the jungle lowlands of [[place-kaliharargn|Kalihara Region]], the [[place-cntrlrnfrsts|Central Rainforests]], the forest of [[place-xelemrgn|Shelem Region]] and the river country of the south. It kills by tightening its coils around its prey with every breath the animal takes, and it can kill an animal far larger than its own head.

## Presentation

An enormous snake, thick-bodied and heavily muscled. The head is small and roughly triangular, with the snout tapering, vertical pupils and a mouth that opens very wide. The teeth are small, thin and curved back for gripping. The body is much thicker behind the head. The keeled scales run from earth-brown to bold patterns of contrasting color that blend into soil, leaves and shadow. The tapering tail can grip a branch or a crevice. The belly scales are larger than those on the back and worn from travel.

## In the Land

Rock pythons and their kin live in the jungle lowlands of Kalihara, the Central Rainforests, the hot forest of Shelem and the river country of the south. A constrictor lies along a branch over a game-trail, in the edge of a swamp or in a hollow under a bank, and it hunts at night. A big snake stays in one stretch of river for years, and it feeds once in a month or two.

## Key Behaviors

Constrictors live alone with overlapping ranges that they patrol by season. A snake lies nearly motionless for days beside a game-trail, a pool or a branch, and rushes when prey comes in range. After a big meal it digests for weeks and does not need to hunt. It prefers warmth and slows in the cool season. Some snakes have learned to come near a settlement at night, when people sleep. The young are independent from birth, and an adult may live thirty years.

## What the Hunters Do

The forest tribes and the hunters of the river country know the pools where a big snake has its den, and they take the water from another place. A snake that has eaten is slow, and hunters take it then, tied to a pole, for the hide and the fat. The hide is cut into belts, drum-skins and shield-covers; the fat is rubbed on joints. A village that loses a goat to a snake sets a watch for several nights. A traveler sleeping on the ground of a river camp takes a lamp and a cut staff with him, and wakes if the dogs go quiet.

## Signs

- A long, flat furrow in the leaf litter or the mud of a bank, as wide as a man's thigh.
- A branch over a trail bowed under a dark, coiled weight.
- A goat or pig gone from a pen, with no blood, and the fence unbroken.
- Dogs that will not go near a pool, or a hollow bank, and stand at the edge whining.
- A shed skin, longer than a rowboat, caught in a thorn bush.

## Combat Strategy

A constrictor's preferred hunting strategy is to wait in ambush until prey passes within striking distance. The strike is explosive: the snake launches forward, opens its mouth, and attempts to grab the target around the head, neck, or torso. Once it has bitten and is holding its teeth in flesh, the snake immediately coils around the target's body, placing successive coils around the torso and limbs, then tightening all coils progressively. With each breath the prey takes, the constrictor adjusts its coils tighter, reducing the volume of the torso until respiration becomes impossible. The prey loses consciousness within a few minutes and dies shortly after. Against multiple opponents, the constrictor will target the largest or closest threat, attempting to disable that individual while ignoring others. A disturbed constrictor that has not yet eaten will defend itself by striking and coiling, though it prefers to retreat to a hiding place if possible.

## Attack Methods

### Striking Bite and Initial Coiling

The snake accelerates and opens its jaws wide, attempting to strike the target around the head, neck, shoulders, or torso. The backward-curving teeth, while not designed for piercing, dig into flesh and prevent prey escape. The snake immediately begins coiling, wrapping its body around the target with muscular force. The first coil is typically the most constricting, applied to the torso.

### Progressive Constriction

As the prey struggles, the snake adjusts its coils, tightening them with each movement, each breath, each struggle of the victim. The constriction is designed to make breathing progressively more difficult. What was painful initially becomes crushing, then becomes asphyxiating. The snake has effectively unlimited time—its own breathing is not significantly hampered by the coils, and it can sustain pressure until the prey is dead.

### Coil-mediated Bone Crushing

For very large or particularly resistant prey, the snake may apply pressure sufficient to break ribs, crush organs, or break the spine. This is not the primary killing method but occurs when prey is particularly large or resistant. The crushing force is extraordinary—a large constrictor can exert pressure exceeding the breaking strength of human bone.

## Special Abilities

### Crushing Strength and Coiling Efficiency

The muscular power of a large constrictor is extraordinary. The force generated by a single coil can restrict breathing, break ribs, and crush internal organs. Multiple coils can incapacitate prey far larger than the snake's head, allowing it to consume animals weighing far more than itself. Once the snake has established its coils, escape is nearly impossible without external assistance or extraordinary strength.

### Ambush Predator and Patience

A constrictor can remain completely motionless for days or weeks, waiting for prey to come within striking range. This patience, combined with excellent camouflage and positioning, makes constrictors difficult to detect before an attack occurs. Once a constrictor has selected an ambush location, it may wait indefinitely for suitable prey to pass.

### Slow Digestion and Extended Prey Processing

A constrictor can swallow prey with a head width approaching its own body diameter. Once swallowed, digestion proceeds slowly—a large meal may take weeks to process completely. This allows the constrictor to have extended periods of inactivity between kills, reducing the frequency of risky hunting behavior. From a human perspective, a recently fed constrictor is less aggressive than a hungry individual.

### Prehensile Tail and Climbing Ability

The tail is muscular and dexterous, capable of gripping branches, vines, or rocky surfaces. This allows constrictors to navigate vertical terrain with ease and hunt prey in locations humans cannot easily reach. A constrictor can position itself above prey or move between hunting grounds using elevation advantage.

## Attributes

Strength
: 12-17 (1d6+11)

Endurance
: 10-15 (1d6+9)

Agility
: 8-11 (1d4+7)

Perception
: 11-16 (1d6+10)

Scent
: 2-5 (1d4+1)

Aura
: 1-4 (1d4)

Will
: 7-10 (1d4+6)

Reasoning
: 1-4 (1d4)

Creativity
: 1-4 (1d4)
