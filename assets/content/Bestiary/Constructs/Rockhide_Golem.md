---
shortcode: rckhdglm
name: {full: Rockhide Golem, aliases: []}
type: being
subType: creature
description: "A towering ten-foot guardian of fused stone, engineered for brute force to defend treasures within ancient ruins and fortifications."
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
    complexion: []
    extra_features: []
sohl:
  kbcat: construct
  attrRollFormula: {str: 1d6+33, agl: 1d4+3, per: 1d6+13}
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 36}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
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
          impactBase: {numDice: 1, die: 6, modifier: 12, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Boulder Throw
      type: skill
      system:
        shortcode: boulder
        subType: combattechnique
        masteryLevelBase: 42
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: boulder
          name: Boulder Throw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 12, aspect: blunt}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 80
          drawBase: 0
          traits: {}
  system:
    body:
      structure: {zones: [], parts: [], locations: []}
      weight: {base: 3500, calc: "3500"}
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

![[rckhdglm|Rockhide Golem]]{float=top-left}

The old watch-fort holds the pass the way a fist holds a stone: walls of fitted blocks, a gate-tower, a courtyard choked with fallen masonry. Among the fallen blocks, against the inner wall, is a heap of them taller than the gate. As you climb over the threshold, the heap stands up. Stone grinds on stone. Boulders fused together into the shape of a giant man, twelve feet tall, with plates of slate over its chest and arms and lines of faint red light running in the joints between them, and in its head two deep-set points of the same red, glowing like coals. It takes one step toward the gate, and the courtyard floor cracks under its foot.

# Dossier {#dossier}

The Rockhide Golem is a construct: a ten-to-twelve-foot figure of fused stone, armored in slabs of rock and bound together with signs that glow in its joints, which a mage has worked into motion to guard a place. It has no will; it does what it was told, for as long as the working holds, and it reassembles itself from its own rubble when it is broken. The rockhide golems of [[place-helionis|Heliónis]] are the work of the Helionite mage-warlords of the war against the Vylarian Republic, who set them in the passes and fortresses they held, and some of those golems are still standing, guarding forts that have been empty for six centuries. The [[affiliation-ordoarcanis|Ordo Arcanis]], born out of the college those mage-warlords came from, would very much like to know how they were made.

## Presentation

A rockhide golem is a giant man-shape of stones and boulders fused together, with great slabs of slate and granite laid over its chest, shoulders and arms like armor. The signs that bind it are cut into the stones and glow a dull red along the joints. Its head is a single boulder with two deep-set red lights. It is heavy and slow and moves with a grinding of stone, and every step cracks paving. Standing still, it is a heap of masonry, and grass and lichen grow on it. It makes no other sound, and it never speaks.

## In the Land

Heliónis is olive-clad hills, narrow valleys and abrupt mountain ranges, and the roads through the passes connect the cities and, as often, divide them. During the war of 335 to 312 BF the mage-warlords who commanded forces their own cities could not control held forts in those passes, and they set golems in them to hold the gates. The forts were abandoned when the city-states fell. The golems were not told to stop. A few still stand in the mountain forts between the cities, in the courtyard or the gate-tower they were set in, and they let no one through the gate.

## Key Behaviors

A rockhide golem carries out its orders exactly and without end: it guards its gate or its courtyard and destroys anything that tries to pass. It does not leave its post and does not pursue past the line its orders set. It does not tire, eat or sleep, and it feels no pain. When it is broken, its stones drift back together and it rises again, more slowly each time; a golem that has been broken many times stands a little lopsided. Its orders were given by a mage who has been dead for six centuries, in words no one now living heard, and what it was told to admit, if anything, is unknown.

## What the Helionites and the Ordo Do

The cities' herdsmen and travelers use the passes round the old forts and not through them, and every child in the mountain villages knows which gate-towers have a golem in them. The cities have never tried to remove the golems, because each was set by some city's mage-warlord and each city prefers not to remember which. The Ordo Arcanis, which holds a legal monopoly on arcane practice and controls the Epistemium in practice, sends scholars to the forts to study the binding signs from beyond the golem's line, and once sent a party in to take one apart. The party is not discussed. Helionite scholars of the older colleges, who argued for generations about the ethical limits of arcane power, use the golems in their lectures.

## Signs

- An abandoned fort in a pass whose gate is still clear of rubble, as if someone keeps it.
- A heap of fused boulders in a courtyard with faint red lines in the cracks between them.
- Bones of animals and men lying in a gateway, crushed flat, and nothing beyond the gate disturbed.
- Paving cracked in a line of huge footprints from a courtyard wall to the gate and back.
- A herders' path that goes a long way round a pass with a good road through it.

## Combat Strategy

The golem walks at whatever has crossed its line and strikes with its fists until it stops moving. It throws stones at anyone it cannot reach. It does not dodge or protect itself, it does not care about its wounds, and it cannot be argued with. It is slow and cannot climb, and a party that keeps its distance and stays beyond its line is not touched. Water seeping into its joints and loud ringing sound loosen what holds it, and the signs cut into it hold the working together.

## Attack Methods

### Crushing Blow

The golem swings a fist of fused stone with enormous strength. The blow breaks shields and bones and throws a man across a courtyard.

### Boulder Throw

The golem wrenches a stone from the walls round it or from its own body and hurls it at anyone out of reach, crushing whoever it strikes.

## Special Abilities

### Stone Armor

Its slabs turn cuts, thrusts and blows, and fire does it no harm at all.

### Structural Reassembly

When it is broken apart, its stones drift back together and it rises again from its own rubble, slowly.

### Terrain Advantage

It moves over rubble and broken rock without slowing, and it uses the walls and fallen stone of its fort as weapons.

### Water and Sound

Water working into its joints loosens the binding, and loud ringing sound shakes the signs; both weaken it.

## Attributes

- **Strength:** 34-39 (1d6+33)

- **Agility:** 4-7 (1d4+3)

- **Perception:** 14-19 (1d6+13)
