---
tags:
  - construct
  - creature
name:
  full: Terrakith Sentinel
  aliases: []
description: "An eight-foot golem sculpted from magically infused clay, engineered as a relentless enforcer guarding temples, crypts, and mages' chambers."
shortcode: trrkthsn
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
  birthday: null
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
    str: 1d6+21
    agl: 1d4+3
    per: 1d6+9
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 24 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
  system:
    body:
      structure:
        zones: []
        parts: []
        locations: []
      weight:
        base: 1000
        calc: "1000"
      reachBase: 0
      bodyScaleBase: 1.66
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

![[trrkthsn|Terrakith Sentinel]]{float: top-left}

The ground seems to shudder as the figure rises, an 8-foot-tall form sculpted from gray-brown clay with roughly hewn features that suggest both crude construction and undeniable power. The clay surface is perpetually moist, glistening with an earthen sheen, and archaic runes are carved across every surface. When it moves, low grinding sounds emerge – the noise of shifting earth given form. The eyes are empty sockets yet somehow radiate unyielding determination and primal intelligence through their very emptiness. You understand you are facing something created through mystical craftsmanship and powerful enchantment, brought to unnatural life with relentless purpose.

# Dossier {#dossier}

Terrakith Sentinels are constructs sculpted from dense, magically-infused clay and standing 8 feet tall, made to be guardians and enforcers. These relentless golems protect sacred temples, crypts, and chambers of powerful mages. Adventurers encounter them when approaching protected locations or disturbing guarded areas.

## Presentation

A humanoid figure of rough-hewn gray-brown clay, perpetually moist with earthen sheen. Runes are carved across the surface, and the overall form radiates power and purpose. The empty eye sockets somehow convey awareness and intelligence.

## Key Behaviors

Terrakith Sentinels carry out their instructions absolutely, driven by relentless commitment to fulfill their master's commands.

## Combat Strategy

The sentinel relies on brute force, delivering crushing blows and using shockwaves from ground impacts to destabilize opponents.

## Attack Methods

### Crushing Blow

The sentinel delivers devastating impacts using immense strength.

### Ground Stomp

The sentinel stomps the ground, creating shockwaves that destabilize and damage nearby foes.

## Special Abilities

### Clay Durability

Highly resistant to conventional weapons and slashing/stabbing attacks.

### Surprising Speed

Despite sluggish appearance, the sentinel can exhibit bursts of speed when pursuing threats.

### Relentless Drive

The golem cannot be swayed from its purpose and continues fighting despite damage.

### Additional Information

Water-based attacks soften the clay structure, reducing effectiveness. Extreme heat can cause cracking. The golem cannot be negotiated with.

## Attributes

- **Strength:** 18-23 (1d6+17)

- **Agility:** 4-7 (1d4+3)

- **Perception:** 10-15 (1d6+9)
