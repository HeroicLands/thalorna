---
shortcode: slndtrtl
name: {full: Island Turtle, aliases: [Reikula]}
type: being
subType: creature
description: "A sea turtle of seven to nine feet and half a ton, its green-black shell crusted with growth, that circles Kalihara on a route fishermen know and comes ashore on the same beaches each Wet-Turn."
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
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+13
    end: 1d6+17
    dex: 1d4+3
    agl: 1d4+2
    per: 1d4+7
    aur: 1d4+6
    wil: 1d6+10
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 48}}
    - name: Beak Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 40
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Beak Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Flipper Slam
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 30
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Flipper Slam
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Shell, shortcode: shellzone, probWeight: 9}
          - {name: Limbs, shortcode: limbzone, probWeight: 4}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Shell
            shortcode: shellpart
            bodyZoneCode: shellzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: limbzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: limbzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: limbzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: limbzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: limbzone
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Shell
            shortcode: shellloc
            bodyPartCode: shellpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: shellpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
      weight: {base: 1000, calc: "1000"}
      reachBase: 0
      bodyScaleBase: 1.4
      personalFatigue: "enc + 5"
    currentMoveMedium: aquatic
    movementProfiles:
      - medium: aquatic
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: terrestrial
        feetPerRound: 10
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

At low tide on the eastern islet a boulder at the waterline lifts itself on four paddle-limbs and starts up the beach. It is a turtle, seven or nine feet from beak to tail, with a green-black shell crusted with barnacles and a fringe of weed. It drags itself up the sand a few yards, rests, and goes on. Behind it the tide leaves a track like a cart's.

# Dossier {#dossier}

The Island Turtle, _reikula_ in [[skill-kalihrlng|Kalihári]], "the old one that goes round", is a sea turtle of seven to nine feet and half a ton, with a green-black shell crusted with growth. It circles the island on a route fishermen know and comes ashore on the same beaches each Wet-Turn. It lives for a very long time and moves slowly. It is found in the sea round the island and on the shore beaches, mainly those of the eastern islets, where it shares the sand with the [[being-mngbhmth|Mangrove Behemoth]]. It does not hunt people and does not need to.

## Presentation

A huge sea turtle with a high-domed green-black shell, a heavy head with a hooked beak and four broad flippers. Barnacles, weed and small shells crust the shell so thickly that an old animal looks like a piece of reef. The eyes are small, dark and unhurried. On land it moves in slow, heaving strokes with long rests between them.

## In the Land

The Island Turtle circles the island in the sea on a route that the fishermen of [[place-telvari|Telvári]] and the pilots know, and comes ashore to lay on the shore beaches, mainly on the eastern islets. Each animal returns to the same beach in the Wet-Turn. A beach where a turtle has laid for generations stays bare of growth at its upper edge and shows the worn tracks of past years.

## Key Behaviors

The turtle feeds as it travels, on weed, sponge and soft-bodied sea life, and follows the same circuit through the year. In the Wet-Turn it comes ashore at night to dig a nest above the tide line and lay, then returns to the water. It lives for a very long time and does not hurry. It is not aggressive, but an animal blocked in the shallows or surprised on the beach defends itself with its beak and its flippers.

## What the Islanders Do

The Telvári fishermen and the pilots know individual turtles by their shells and by the beach each returns to, and some names are passed down the households as the turtle outlives its watchers. The beach is a part with a household that tends it, and a beach whose turtle is late is written in the manual. Eggs are never taken.

## Signs

- A broad drag-track in the sand running from the tide line up to a shallow pit.
- A shell crusted with barnacles and weed rising out of the shallows.
- A pit of sand above the tide line, covered over and smoothed.
- A circle of worn sand where a turtle has turned to go back to the sea.

## Combat Strategy

The Island Turtle does not fight unless it is cornered. In the water it swims away at speed. On the beach, surprised, it turns the head and shell to the threat and bites at what comes within reach, and a flipper blow knocks a person off their feet.

## Attack Methods

### Beak Bite

The hooked beak closes on a hand or a leg with enough force to break bone.

### Flipper Slam

A broad flipper swings in a short arc and strikes with the weight of the whole animal behind it.

## Special Abilities

### Impenetrable Shell

The domed shell turns almost any blow. Weapons skid off the crust of growth, and the head and flippers are the only places that can be hurt.

### Encrusted Growth

The weed and shell on the carapace break up the turtle's outline in the water, and on a reef or a weedy shore a resting animal looks like part of the bottom.

### Slow but Steadfast

The turtle is slow on land and tireless in the sea, and it does not turn aside from its route.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 18-23 (1d6+17)

- **Dexterity:** 4-7 (1d4+3)

- **Agility:** 3-6 (1d4+2)

- **Perception:** 8-11 (1d4+7)

- **Aura:** 7-10 (1d4+6)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 3-6 (1d4+2)
