---
shortcode: dpwtrfsh
name: {full: Deepwater Fish, aliases: [Koavanu]}
type: being
subType: creature
description: "A pale, eyeless-looking bottom fish of twelve to fifteen feet that lives in the deep water around the Massif and rises to the surface of the Bowl Lake in the dry season."
tags: [animal, creature, image-needed]
data:
  packFolder: animals
  icon: sohl-none-icon-sharkjaws
  templatePriority: 0
  culture: kaliharanclt
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+14
    end: 1d6+12
    dex: 1d6+5
    agl: 1d6+6
    per: 1d6+5
    aur: 1d4+7
    wil: 1d6+7
    rea: 1d4+3
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Tail Strike
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Capsizing Ram
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Capsizing Ram
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: blunt}
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
          - {name: Body, shortcode: torsozone, probWeight: 5}
          - {name: Tail, shortcode: tailzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Fin
            shortcode: lfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Fin
            shortcode: rfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: tailzone
            roles: [locomotor]
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
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Gills
            shortcode: gillloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Body
            shortcode: bodyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Fin
            shortcode: lfinloc
            bodyPartCode: lfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Fin
            shortcode: rfinloc
            bodyPartCode: rfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 1200, calc: "1200"}
      reachBase: 0
      bodyScaleBase: 1.5
      personalFatigue: enc + 5
    currentMoveMedium: aquatic
    movementProfiles:
      - medium: aquatic
        feetPerRound: 30
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

In the dry season the lake is clear to a great depth, and the water off [[place-klhrmassif|the Massif]]'s shore is very still. Then a long pale shape rises out of the blue under the boat, with barbels trailing from its jaw, a wide toothless mouth and eyes so small you do not see them. It breaks the surface with a swirl and lies there, longer than the boat, and does not move.

# Dossier {#dossier}

The Deepwater Fish, _koavanu_ in [[skill-kalihrlng|Kalihari]], "deep water", is a pale, long-bodied bottom fish of twelve to fifteen feet, with barbels, a toothless sucking mouth and almost no eyes. It lives in the deep water of [[place-klhrlake|the Bowl Lake]] around the Massif. It rises to the surface in the dry season, when the lake is clear, and hangs there for days. It is not aggressive, but a fish that size capsizes a boat when it surfaces beneath one.

## Presentation

A pale, heavy, long-bodied fish, whitish-grey and almost translucent along the belly, with a broad flat head, a wide toothless mouth under the snout, four long barbels and eyes that are no more than dark specks. The skin is smooth and scaleless. It moves slowly with a sweep of the tail.

## In the Land

The Deepwater Fish keeps to the deep water of the lake around the Massif. It lives near the bottom and is not seen for most of the year. It does not come into the reed-beds of the margins, and it is not found in any other water on the island.

## Key Behaviors

For most of the year the fish feeds on the bottom, sucking up what it finds with its barbeled mouth. In the dry season, when the water is clear, it rises to the surface and hangs there for days, drifting with the current. It does not attack. A boat that is over it when it rises is lifted and overturned, and the fish takes no notice.

## What the Islanders Do

The lake lineages read its rising as the sign that the water is clear and the season has turned, and carry the day it surfaces into the household's account. They fish round it and never for it, and a boat that meets one keeps still and lets it pass. That the lake keeps something so large unseen for most of the year is a standing reason to look.

## Signs

- A slow swirl on a still surface in the dry season, with no wind to cause it.
- A long pale shape under the boat in clear water.
- A boat lifting without a wave to lift it.
- Barbels trailing at the surface, and a wide mouth opening and closing slowly.

## Combat Strategy

The fish has no teeth and no reason to fight. A threat to it, such as a spear or a hook, makes it dive, and in diving or in rising it overturns whatever is above it. If struck it turns and rams, and lashes its tail against the boat.

## Attack Methods

### Capsizing Ram

The fish drives up into whatever is over it with the whole of its head. A boat is lifted and rolled, and its occupants are thrown into the water.

### Tail Strike

The tail sweeps sideways and knocks swimmers and small boats aside with a heavy blow.

## Special Abilities

### Capsize

A fish this size rising beneath a boat overturns it, whatever the boat's size. A passenger in the water has to swim clear of the fish and of the wreck.

### Deep Dweller

The fish lives in the dark of the deep water and has almost no eyes. It finds its way by its barbels and by the movement of the water, and is nearly blind in clear light.

## Attributes

Strength
: 15-20 (1d6+14)

Endurance
: 13-18 (1d6+12)

Dexterity
: 6-11 (1d6+5)

Agility
: 7-12 (1d6+6)

Perception
: 6-11 (1d6+5)

Aura
: 8-11 (1d4+7)

Will
: 8-13 (1d6+7)

Reasoning
: 4-7 (1d4+3)

Creativity
: 3-6 (1d4+2)
