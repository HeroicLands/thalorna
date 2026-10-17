---
shortcode: gntarmdl
name: {full: Giant Armadillo, aliases: []}
type: being
subType: creature
description: "A solitary armored mammal exceeding twelve feet, a living fortress of bony plates that fiercely defends its vast nocturnal burrows."
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
    str: 1d6+11
    end: 1d6+13
    dex: 1d4+6
    agl: 1d4+5
    per: 1d6+7
    aur: 1d4+6
    wil: 1d6+9
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Talon Slash
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Talon Slash
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Armored Ram
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 46
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Armored Ram
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: blunt}
          lengthBase: 1
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
      weight: {base: 200, calc: "200"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[gntarmdl|Giant Armadillo]]{float=top-left}

What you took for a boulder in the long grass at the foot of the ruined wall is breathing. It is twelve feet from the tapered snout to the end of the tail, roofed in overlapping plates the gray of river stone and crusted with dried mud, and the claws on its forefeet are the length of your forearm. It has been digging; the hole beside it goes down into the dark under the old paving. It lifts its small head, regards you with two shrewd little eyes, snorts once, and goes on digging.

# Dossier {#dossier}

The Giant Armadillo is a twelve-foot, plated, burrowing animal of the [[place-sthrnsvnhs|Southern Savannahs]], thickest in the green southeastern highlands where the old stone enclosures stand, and found along the forest margin to the north. It eats termites, grubs and roots, digs warrens hundreds of feet long, and wants nothing from people except to be left in its burrow. Its burrows run under the ruins the savanna peoples will not enter and the treasure-hunters will, and a frightened armadillo rolls into a ball that a party with picks takes a day to open.

## Presentation

A squat, immensely heavy-looking animal with a back of overlapping plates of bone and horn, dull gray or brown and caked with mud and the resin of the insects it eats. The belly is bare, sparsely haired skin. The head is small for the body and ends in a long, tapering snout with a small mouth and a long tongue. The eyes are small and set high and it sees poorly; it hears and smells well. The legs are short, thick and powerful and the forefeet carry claws up to a foot long. The tail is long and tapering and armored like the back.

## In the Land

Giant Armadillos live where the ground is deep enough to dig and the termite mounds are thick: the highland belt of the southeast, where the rivers run all year and the grass is dense, and the stone-walled enclosures and raised platforms of the old builders, whose paving a burrow undermines and whose dry chambers an armadillo breaks into from below. The savanna clans leave the ruins alone and leave the armadillos with them. They are rarer on the open central plains and absent from the dry southwest.

## Key Behaviors

An armadillo is out at night and underground by day. Its warren is a worked thing: several entrances, sleeping chambers, chambers it feeds in, and tunnels that may run several hundred feet. It digs a new section every season and abandons old ones, and the abandoned galleries are taken by snakes, hyenas and whatever else wants a hole. It marks its ground and drives off other armadillos, and it ignores everything smaller than itself. It is slow, deliberate and without fear of anything, because nothing on the savanna can open it.

## What the Clans Do

The cattle clans of the southeast dig no well and pitch no camp on ground an armadillo has undermined, because a burrow collapses under a bull. A clan that finds a burrow mouth in its grazing stakes a thorn fence round it and moves the herd. A shed plate, found at a burrow mouth after the animal has grown, is cut into shield-bosses and the breast-pieces of the clan's war-dress, and a whole shell from a dead animal roofs a granary. Nobody hunts one for meat: it is a day's work with picks to kill it in its ball, and the clans have cattle.

## Signs

- A hole in a hillside the width of a doorway, with a fan of fresh earth below it.
- Termite mounds dug out from the base and left as hollow shells.
- A line of sunken ground across a slope or a paved court where a tunnel has settled.
- Broad, deep claw-marks in the floor of a ruined chamber, and a hole in one corner going down.
- A gray boulder in the grass that was not in that place yesterday.

## Combat Strategy

The armadillo does not fight if it can avoid it. Threatened, it curls, plates outward, head and belly inside, and stays that way for as long as it takes. Driven out of its burrow or cut off from it, it walks for home over or through whatever is in the way, ignoring blows. It uncurls and fights only when it cannot reach cover, and then it rakes with the foreclaws and drives with its head; a party that finds itself fighting one has usually blocked its hole. The belly is the one place a weapon does anything, and the belly is inside the ball.

## Attack Methods

### Talon Slash

The foreclaws rake with slow, heavy strokes that open a man from chest to hip or take a leg from under him. The blow is easy to see coming and hard to stand against.

### Armored Ram

The animal lowers its head and drives forward with its whole weight, knocking a man flat and treading on him as it passes.

## Special Abilities

### Segmented Armor

The plates turn a cut, a thrust and a club alike, and spread the force of a blow across the body. The belly is unarmored.

### Defensive Curl

Rolled into a ball, the armadillo offers nothing but plate on every side. It cannot attack in this posture and does not need to; it waits until the danger goes away.

### Master Burrower

It digs through earth and soft rock faster than men with picks, and is out of sight underground in a few minutes. Following it down the hole means fighting it in a tunnel it fills.

## Attributes

Strength
: 12-17 (1d6+11)

Endurance
: 14-19 (1d6+13)

Dexterity
: 7-10 (1d4+6)

Agility
: 6-9 (1d4+5)

Perception
: 8-13 (1d6+7)

Aura
: 7-10 (1d4+6)

Will
: 10-15 (1d6+9)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
