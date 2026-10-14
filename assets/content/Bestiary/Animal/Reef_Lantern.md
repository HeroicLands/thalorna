---
shortcode: rflntrn
name: {full: Reef Lantern, aliases: [Vaelvanu]}
type: being
subType: creature
description: "A drifting, bell-shaped sea animal two to three feet across with trailing filaments that sting hard and a pale glow it gives back when disturbed."
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
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+1
    end: 1d4+3
    dex: 1d4+5
    agl: 1d4+4
    per: 1d4+6
    aur: 1d4+5
    wil: 1d4+3
    rea: 1d4+1
    cre: 1d4+1
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 20}}
    - name: Stinging Filaments
      type: skill
      system:
        shortcode: tentacle
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tentacle
          name: Stinging Filaments
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Mantle, shortcode: mantlezone, probWeight: 4}
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Arms, shortcode: armszone, probWeight: 4}
        parts:
          - name: Mantle
            shortcode: mantlepart
            bodyZoneCode: mantlezone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Arms
            shortcode: larmspart
            bodyZoneCode: armszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Arms
            shortcode: rarmspart
            bodyZoneCode: armszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Mantle
            shortcode: mantleloc
            bodyPartCode: mantlepart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Arms
            shortcode: larmsloc
            bodyPartCode: larmspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Arms
            shortcode: rarmsloc
            bodyPartCode: rarmspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 4, calc: "4"}
      reachBase: 0
      bodyScaleBase: 0.5
      personalFatigue: "enc + 5"
    currentMoveMedium: aquatic
    movementProfiles:
      - medium: aquatic
        feetPerRound: 15
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

On a dark night the water over the shallow reef is lit from below. A pale glow drifts up out of it, bell-shaped and a few feet across, with long thin filaments trailing beneath like threads of smoke. There are dozens more behind it, drifting over the reef in the current, and where the boat's oar touches one, it flares and goes pale-bright. The whole shoal lights the water to the gunwales.

# Dossier {#dossier}

The Reef Lantern, _vaelvanu_ in [[skill-kalihrlng|Kalihári]], "gleam on the water", is a drifting, bell-shaped sea animal two to three feet across with trailing filaments, that gives back a pale glow when disturbed. It lives in the shoals and reefs of the eastern approaches and along the islet coasts. A shoal gathers over the shallowest reefs at night and lights the water. Its filaments sting hard, and swimmers are advised to leave it alone. It is a hazard to a swimmer and a mark to a pilot, and it is not an opponent in the way an animal with a mouth is.

## Presentation

A translucent bell two to three feet across, pale and faintly milky, with four long frilled arms and a fringe of thin filaments that trail several feet beneath. By day it is a ghost in the water. By night it glows a pale, steady white whenever it is touched or the water about it is stirred.

## In the Land

The lanterns drift over the shoals and reefs of the eastern approaches and the islet coasts, gathering over the shallowest reefs after dark. They go where the current takes them and return with it. They are not met in the deep water of the open sea or in the mangrove.

## Key Behaviors

By day a lantern sinks to the reef and hangs in the shade. At night it rises and drifts, feeding on small things that blunder into its filaments. It glows when disturbed, and a shoal passing a boat leaves a trail of light. It has no sense of the swimmer it stings, and the sting is a reflex of the filaments.

## What the Islanders Do

The pilots of [[place-telvari|Telvári]] read the lanterns as a reef marker: the reefs that show nothing on the surface are shown by a glow on dark nights, and a pilot who knows the shoals brings a hull through on that and the current. Fishermen net round a shoal and leave it. A lantern the sea throws up on the beach is left for the tide.

## Signs

- A pale glow in the shallows on a dark night that spreads when the water is disturbed.
- A drifting translucent bell in the daylight shallows, with fine threads beneath it.
- Fine red welts across a swimmer's skin after a swim over a reef.
- Dead lanterns stranded on a beach after a blow, glassy and soft.

## Combat Strategy

A lantern does not fight. A swimmer who touches one is stung by reflex, and the animal drifts on. A shoal at night is best avoided: the filaments of many animals together make a swimmer's passage painful and slow.

## Attack Methods

### Stinging Filaments

The trailing filaments wrap what touches them and sting hard. A few touch a swimmer's skin and leave welts, and a swimmer caught in a shoal is stung everywhere at once.

## Special Abilities

### Glow

The lantern gives back a pale light when it is touched or the water about it is stirred, bright enough to see a boat's hull by. A shoal over a reef lights the water like a lamp.

### Reef Marker

Shoals gather over the shallowest reefs, so that a glow on a dark night shows where the reef lies.

## Attributes

- **Strength:** 2-5 (1d4+1)

- **Endurance:** 4-7 (1d4+3)

- **Dexterity:** 6-9 (1d4+5)

- **Agility:** 5-8 (1d4+4)

- **Perception:** 7-10 (1d4+6)

- **Aura:** 6-9 (1d4+5)

- **Will:** 4-7 (1d4+3)

- **Reasoning:** 2-5 (1d4+1)

- **Creativity:** 2-5 (1d4+1)
