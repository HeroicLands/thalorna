---
tags:
  - construct
  - creature
name:
  full: Aegiron Sentinel
  aliases: []
description: "An eight-foot construct of interlocking iron plates, forged by arcane engineering to guard sacred sites, treasures, and treasured individuals."
shortcode: agrnsntn
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
    str: 1d6+31
    agl: 1d4+3
    per: 1d6+15
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 34 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 19 } }
  system:
    body:
      structure:
        zones: []
        parts: []
        locations: []
      weight:
        base: 2500
        calc: "2500"
      reachBase: 0
      bodyScaleBase: 2.08
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

![[agrnsntn|Aegiron Sentinel]]{float: top-left}

The presence hits like a physical force: an eight-foot colossus of interlocking iron plates engraved with ancient runes that glow with faint, eerie light. The metallic frame gleams with cold precision, and every movement speaks of immense power held in careful check. The eyes are dark voids illuminated from within by shifting, otherworldly light that conveys watchful awareness and absolute purpose. There is no doubt whatsoever that you are facing something created for a singular purpose: to guard, to protect, and to destroy anything that threatens what it watches.

# Dossier {#dossier}

Aegiron Sentinels are ultimate guardians forged by arcane craft and might, standing 8 feet tall and composed of interlocking iron plates. These constructs are stationed to protect sacred sites, treasures, and important individuals. Adventurers encounter them only when approaching guarded locations or attempting to breach protected areas.

## Presentation

The Aegiron Sentinel is towering, composed entirely of interlocking iron plates forming a humanoid shape. Ancient runes are cut across its frame, glowing faintly with magical power. The eyes are dark voids with shifting light within suggesting consciousness and awareness.

## Key Behaviors

Aegiron Sentinels follow their instructions absolutely, neither tiring nor deviating from their duty. They are relentless and unflinching in defense of their assigned post or charge.

## Combat Strategy

The sentinel attacks with devastating strength, crushing opponents through overwhelming force and magical attacks.

## Attack Methods

### Crushing Blow

The sentinel's strike uses immense strength to crush targets.

### Light Beam

The sentinel projects destructive light from its eyes.

## Special Abilities

### Iron Durability

Nearly immune to cuts and thrusts.

### Magical Regeneration

Absorbs ambient magical energy to repair itself.

### Arcane Attacks

Projects destructive light beams from its eyes.

### Additional Information

Lightning disrupts the workings within the sentinel, and it falters. Rust weakens its frame. The sentinel cannot be reasoned with or bribed.

## Attributes

- **Strength:** 28-33 (1d6+27)

- **Agility:** 4-7 (1d4+3)

- **Perception:** 16-21 (1d6+15)
