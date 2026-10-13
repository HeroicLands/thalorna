---
shortcode: agrnsntn
name: {full: Aegiron Sentinel, aliases: []}
type: being
subType: creature
description: "An eight-foot construct of interlocking iron plates, forged by arcane engineering to guard sacred sites, treasures, and treasured individuals."
tags: [construct]
data:
  packFolder: constructs
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
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: construct
  attrRollFormula: {str: 1d6+31, agl: 1d4+3, per: 1d6+15}
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 34}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 19}}
    - name: Crushing Blow
      type: skill
      system:
        shortcode: blow
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: blow
          name: Crushing Blow
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 11, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Light Beam
      type: skill
      system:
        shortcode: beam
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: beam
          name: Light Beam
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 60
          drawBase: 0
          traits: {}
  system:
    body:
      structure: {zones: [], parts: [], locations: []}
      weight: {base: 2500, calc: "2500"}
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

![[agrnsntn|Aegiron Sentinel]]{float=top-left}

The inner gate of the treasury court stands open, and in the middle of the gateway stands a figure of iron, eight feet tall, made of overlapping plates fitted as closely as the scales of a fish. Every plate is cut with characters, columns of them, and the cut lines glow a faint, steady gold. It does not move. Its face is a smooth iron mask with two dark holes for eyes, and as you come level with the gate's outer pillar, a light comes on deep inside the holes, and the head turns toward you with a sound like a bolt sliding home.

# Dossier {#dossier}

The Aegiron Sentinel is a construct: an eight-foot figure of interlocking iron plates, as heavy as a laden cart, cut all over with binding characters, which a mage has worked into motion to stand guard over a door, a treasure or a person. It has no will. It does what it was ordered, in the words it was ordered, and it strikes with a crushing iron fist and with a beam of light from its eyes. The finest are the work of the [[lore-wanduo|Wánduo]] artificers of [[affiliation-tantsouempr|Tāntsou]], the sorcerer caste that forges the empire's enchanted arms, and they stand at the treasuries, tombs and inner gates of the great houses of the empire. A sentinel stops where its orders stop, and the first thing a party learns about one is where that line runs.

## Presentation

The sentinel is a tall, heavy, man-shaped figure of iron plates, overlapped and interlocked so closely that no seam shows a gap. Every plate is cut with columns of characters, and the cuts glow a faint gold while the working holds. The head is a smooth iron mask with two dark eye-holes, and when it acts, a light kindles in them. It moves slowly and deliberately, with a sound of iron sliding on iron, and it does not breathe, speak or tire. Close to, it smells of oil and cold metal. Standing at its post, it is a statue, and it can stand there for a hundred years.

## In the Land

In Tāntsou every terrace has a lineage, every lineage has a page, and every page has a seal, and the empire's treasuries and records are guarded with the same care as its borders. The Wánduo, who belong in law to the houses they serve, make the sentinels for those houses: a pair at the inner gate of a Warlord's treasury, one at the door of a ministry's archive, four round the tomb of a [[lore-zhazho|Zhazhò]] lord. Each stands where it was set and does not leave. A sentinel's orders are written into it by its maker as exactly as a clerk writes a register, and they say whom it admits, by seal or word or face, and whom it stops.

## Key Behaviors

A sentinel carries out its orders absolutely, without tiring and without deviation. It stands at its post until something crosses its line without the seal or the word it was given, and then it stops the intruder, by force, and returns to its post. It does not pursue past the edge of its charge, because its orders end there. It cannot be bribed, frightened, persuaded or tricked into talking, because there is nothing in it to reason with. It draws on the ambient magic of its surroundings to repair itself, slowly, and a sentinel that has stood for centuries has been mended many times.

## What the Great Houses Do

A great house that owns a sentinel owns a Wánduo to keep it, and the keeping is a duty: the artificer renews the binding characters, oils the joints against rust, and once a generation rewrites its orders when the house's seals change. A house that has lost its Wánduo, through disgrace or debt, finds its sentinel obeying orders nobody living remembers, and some old gates in the empire are guarded by sentinels whose house has been extinct for a century, admitting no one, while the [[lore-tanchei|Tānchéi]] dispute in their registers who owns what lies behind them. Thieves in Tāntsou do not try the treasuries. Those who try the tombs choose a stormy night, because lightning disrupts the working.

## Signs

- An iron figure standing at a gate or a door with characters cut over every plate, glowing faintly gold.
- Scorched lines burned across a floor or a wall at eye height, as if by a narrow beam of fire.
- A threshold or a line of inlaid stone across a courtyard that no servant of the house steps over.
- A faint smell of oil and cold iron in a still corridor.
- A sound like a bolt sliding home when someone approaches a door.

## Combat Strategy

A sentinel walks at an intruder and strikes. It does not dodge or feint, because it does not need to: blades skate off its plates. It strikes with its fists at anyone close and burns anyone keeping their distance with the light from its eyes, and it does not stop until the intruder is dead, gone back across its line, or it is destroyed. It is slow, and a party that keeps out of its reach and out of its line of sight can outmaneuver it. Lightning disrupts its working and makes it falter, rust weakens it, and the binding characters on its plates hold everything together.

## Attack Methods

### Crushing Blow

The sentinel swings an iron fist with immense strength. The blow crushes shields, breaks bones through armor and drives a man to the ground.

### Light Beam

A narrow beam of white-gold fire shoots from its eyes and burns a line across whatever it touches, through cloth and leather and skin.

## Special Abilities

### Iron Durability

Its plates turn cuts and thrusts almost entirely. Only crushing weight, lightning or the breaking of its characters does it real harm.

### Magical Regeneration

It draws ambient magic to repair itself, slowly closing dents and refitting loosened plates.

### Arcane Attacks

The light in its eyes is the working itself, turned outward; it can burn at a distance as far as it can see.

### Lightning and Rust

Lightning disrupts the working inside it and makes it falter for a time, and rust weakens its frame and slows its joints.

## Attributes

- **Strength:** 32-37 (1d6+31)

- **Agility:** 4-7 (1d4+3)

- **Perception:** 16-21 (1d6+15)
