---
tags:
  - construct
  - creature
name:
  full: Rockhide Golem
  aliases: []
description: "A towering ten-foot guardian of fused stone, engineered for brute force to defend treasures within ancient ruins and fortifications."
shortcode: rckhdglm
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: []
  gender: null
  species: null
  age: null
  height: null
  weight: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: construct
  attrRollFormula:
    str: 1d6+33
    agl: 1d4+3
    per: 1d6+13
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 36 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 17 } }
  system:
    body:
      structure:
        zones: []
        parts: []
        locations: []
      weight:
        base: 3500
        calc: "3500"
      reachBase: 0
      bodyScaleBase: 2.16
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[rckhdglm|Rockhide Golem]]{float: top-left}

The ground trembles as the massive stone construct rises, its form an assemblage of layered rocks and boulders fused into something approaching humanoid shape. The exterior is armored in thick stone plates, and magical runes glow faintly across the surface. The eyes are deep-set, glowing like molten lava, burning with a single fixed purpose. You are looking at something created from stone and sorcery, given movement and will through magical binding.

# Dossier {#dossier}

Rockhide Golems are made for defense and brute force, standing 10-12 feet tall and composed of fused stone and rock. These relentless guardians protect valuable treasures and important locations throughout ancient ruins and fortifications. Adventurers encounter them when approaching guarded sites or attempting theft from protected locations.

## Presentation

A humanoid figure constructed from massive stones and boulders fused together, with magical runes glowing across the surface. The overall form is powerful and imposing, sized to intimidate and overpower.

## Key Behaviors

Rockhide Golems carry out their instructions absolutely, defending assigned areas with relentless commitment and no deviation.

## Combat Strategy

The golem relies on overwhelming brute force and crushing strength to destroy threats.

## Attack Methods

### Crushing Blow

The golem delivers devastating impacts using immense strength.

### Boulder Throw

The golem tears loose stone and throws it as a projectile weapon.

## Special Abilities

### Stone Armor

Highly resistant to blows and to fire.

### Structural Reassembly

If broken into pieces, the golem can reassemble itself from the scattered stone.

### Terrain Advantage

Uses landscape tactically, moving through rocky terrain with ease.

### Additional Information

Water and loud sound disrupt the golem’s structure. The golem cannot be negotiated with or destroyed by ordinary weapons alone.

## Attributes

- **Strength:** 26-31 (1d6+25)

- **Agility:** 4-7 (1d4+3)

- **Perception:** 14-19 (1d6+13)
