---
shortcode: gntwsp
name: {full: Giant Wasp}
type: being
subType: creature
description: "A vicious aerial carnivore with a devastating sting, forming aggressive colonies whose disturbed swarms can overwhelm entire settlements."
tags: [animal]
data:
  packFolder: animals
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
    str: 1d6+9
    end: 1d6+8
    dex: 1d6+12
    agl: 1d6+13
    per: 1d6+10
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 33}}
    - name: Stinger Strike
      type: skill
      system:
        shortcode: sting
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: sting
          name: Stinger Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Mandible Slash
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: mandible
          name: Mandible Slash
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: edged}
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
          - {name: Thorax, shortcode: thoraxzone, probWeight: 1}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Thorax
            shortcode: thoraxpart
            bodyZoneCode: thoraxzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 8
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Sting
            shortcode: stingloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 30, calc: "30"}
      reachBase: 0
      bodyScaleBase: 1.11
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[gntwsp|Giant Wasp]]{float=top-left}

The guide has stopped under a tree the size of a tower and is looking up with his hand out behind him, palm back. The gray mass in the fork above you is as big as a hut, layered like a paper lantern, and the drone coming out of it is a note you feel in your back teeth. Something the size of a hunting dog drops out of a hole in its side, hangs in the air on a blur of wings, banded black and yellow, with a curved sting as long as a knife trailing under it, and turns its head to look at you.

# Dossier {#dossier}

The Giant Wasp is a dog-sized hunting wasp of the [[place-cntrlrnfrsts|Central Rainforests]], a killer of insects, birds, monkeys and anything else it can sting and cut up, which builds paper nests the size of a hut in the forks of the great trees and defends them in swarms of dozens or hundreds. A single wasp stings a man and leaves him on the ground. The nest, roused, comes out together and follows the party that roused it through the forest for half a mile, and the forest tribes burn a nest that has settled near a village because nothing else makes it leave.

## Presentation

A long, sleek wasp with a narrow waist, armored in glossy chitin banded black and yellow. The head carries two large compound eyes and mandibles that cut like shears. The thorax carries four long wings that beat in a blur and make the drone. The abdomen tapers to a long, barbed, curved sting with a bead of venom at its point. The legs are short and clawed for gripping prey in flight. It flies in short darting rushes that are hard to follow with the eye.

## In the Land

Giant Wasps nest in the canopy of the equatorial forest, in the forks and hollows of the biggest trees, and hunt the clearings, river-banks and forest edges below, where the flying insects, the birds and the monkeys are. A nest is a gray paper mass as big as a hut, built up in layers over years, and a big one holds hundreds of wasps and a queen that never leaves it. The rainforest tribes know every nest within a day's walk of their clearings and route their paths round them; a nest that has settled over a path or near a village is a reason to burn it or to move.

## Key Behaviors

A hunting wasp patrols a stretch of forest by day, in the hot hours, and takes what it finds: dragonflies, beetles, birds off a branch, a monkey out of a troop, a snake. It stings the prey, cuts off what it can carry, and flies it home to the brood. It is bad-tempered away from the nest and savage near it, and anything that touches the tree brings the wasps out of the holes in a stream. They hunt alone and defend together, and a wasp that has stung marks the victim with a scent the rest follow. They are quiet at night and in rain.

## What the Tribes Do

The rainforest tribes burn a nest that threatens a village, at night in the wet season when the wasps are torpid, with green-wood smoke piled under the tree until the nest is choked and then a torch on a long pole; the men who do it go in wrapped in bark-cloth and wet leaves and come back stung anyway. A nest far from the village is left and used: the tribes take the brood-combs from a small nest for the grubs, which are eaten roasted, and the paper of an old nest for tinder. A sting is cut and sucked at once and the limb bound above it; a man stung twice is carried home and watched through the night, and a man stung three times is not. The stings of dead wasps are hafted as awls and darts.

## Signs

- A gray paper mass the size of a hut in the fork of a great tree, with holes in its side.
- A drone under the forest's noise, steady, felt in the teeth.
- Wasps crossing a clearing in a straight line toward one tree, every few breaths, carrying something.
- Dead birds and monkeys under a tree with pieces cut from them cleanly.
- A path that bends away from a stretch of forest for no reason the ground shows.

## Combat Strategy

A lone wasp stoops from above or behind, stings once and climbs away, and comes again if the man is still standing; a single failed pass sends it off. A nest comes out together and attacks several to a man, stinging from every side, cutting one person out of a group and following the marked one wherever he runs. They do not stop while the threat is near the nest and they follow a long way from it. Smoke confuses them, water stops them, and under a low roof or in a thicket they cannot fly and die one at a time to a cloak and a club. In the open air there is nothing to do but run for the river.

## Attack Methods

### Stinger Strike

The wasp drives the sting in and injects. One sting is pain, swelling and a confusion that spreads from the limb; two put a man down; three stop his breath. The barbed sting stays in the wound.

### Mandible Slash

A stung or held victim is cut with the mandibles in quick strokes that take pieces out of flesh and light leather.

## Special Abilities

### Aerial Superiority

In open air the wasp climbs straight up, reverses in its own length and comes in from any side faster than a man can turn. Under cover it loses all of that.

### Rapid Dive Attack

A wasp with height and room comes down on a man at a speed he cannot sidestep, and the sting goes in with the whole weight of the stoop behind it.

## Attributes

Strength
: 10-15 (1d6+9)

Endurance
: 9-14 (1d6+8)

Dexterity
: 13-18 (1d6+12)

Agility
: 14-19 (1d6+13)

Perception
: 11-16 (1d6+10)

Aura
: 8-11 (1d4+7)

Will
: 10-15 (1d6+9)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
