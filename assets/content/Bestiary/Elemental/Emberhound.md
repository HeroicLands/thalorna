---
shortcode: embrhnd
name: {full: Emberhound}
type: being
subType: creature
description: "A cunning fire elemental in animal form, combining a predator's tactics with living flame, hunting for fuel or bound to guard places of power."
tags: [elemental]
data:
  packFolder: elementals
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
  kbcat: elemental
  attrRollFormula:
    str: 1d4+10
    end: 1d4+12
    dex: 1d4+10
    agl: 1d4+8
    per: 1d4+10
    aur: 1d4+6
    wil: 1d4+12
    rea: 1d4+6
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Fiery Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Fiery Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: fire}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Flaming Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: breath
          name: Flaming Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 3, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 15
          drawBase: 0
          traits: {}
    - name: Tail Whip
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Whip
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: *a1
            canHoldItem: false
            probWeight: 1
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
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [manipulator]
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
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 300, calc: "300"}
      reachBase: 0
      bodyScaleBase: 1.11
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[embrhnd|Emberhound]]{float=top-left}

The forge-yard gate is open, and the heat that comes out of it is too much for a forge at rest. Lying across the threshold of the smithy, where a dog would lie, is a dog made of fire: as long as a horse, shaped like a great lean hound out of shifting orange and yellow flame over a body of glowing coal, with eyes like two white-hot rivets. The paving under it is cracked and black. It lifts its head as you come in, and the air between you wavers. Then it stands, and its tail sweeps once across the yard, leaving a line of small flames on the stones, and it walks toward you without a sound, and the sword at your hip begins to grow warm.

# Dossier {#dossier}

The Emberhound is a fire elemental in the shape of a great hound: a spirit of the fire-aspect manifested in the material world as a body of living flame and coal, eight to ten feet long, which thinks, hunts and guards. Emberhounds are drawn to fire, to forges and to places where the boundary with the spirit realm is thin, and they are often bound to a place by someone who knows how. One lies at the gate of a swordsmith's forge at [Tsaigen]{.name data-type="place/settlement"} on [[place-tsuijai|Tsuijai]], one of the [Nine Mountains of Jenchai]{.name data-type="place/feature"} in [[place-jenchairgn|Jenchai Region]], where the Jenchai make blades that are among the finest in [[place-worldthlrn|Thalorna]], and it has guarded that forge for generations. Like every elemental, it can be destroyed in the material world and it comes back.

## Presentation

An emberhound has the shape of a large, lean, deep-chested hound, but its body is shifting flame, orange, yellow and white, over a core of glowing coal that shows through like ribs. Its eyes are points of white heat. Its mouth, when it opens, is a furnace. It leaves scorched prints and small fires wherever it walks, and the air round it shimmers and roars faintly, like a forge drawing. It can run on the air itself for short stretches, carried up on its own heat, and it leaps onto roofs and over walls. It smells of hot iron and burned charcoal. Close to it, the heat is painful, and metal grows too hot to hold.

## In the Land

The Jenchai islands are volcanic, and fire is never far from anything there. The emberhound is bound to a single forge-yard at Tsaigen: a famous swordsmith's lineage keeps the forge, and the hound keeps the gate. It lies across the threshold by day and walks the yard and the lineage's charcoal-stores by night, and it does not leave the forge's ground. It needs fuel, and the forge feeds it: charcoal, offcuts of iron, and the slag of every heat. Wild emberhounds, unbound, are met near the islands' volcanoes and in burned-over forests, and a wild one wanders, hunting whatever it can burn.

## Key Behaviors

An emberhound is not mindless. It thinks, hunts, remembers, and understands tactics, and a bound one understands its orders exactly. It is territorial and aggressive, and it attacks anything that enters its ground uninvited. It hunts actively, running down and cornering prey, and it burns what it kills. It must have fuel to keep its body, and a starving emberhound is restless and dangerous. When its body is destroyed, it is gone in a burst of smoke and sparks, and it comes back, after hours or days, to the same place, with a grievance against whoever drove it off.

## What the Swordsmiths Do

The lineage that keeps the forge says its founder bound the hound to the gate with the help of a [[lore-wanduo|Wanduo]] in a great lord's service, one of the sorcerers who on the islands serve the lords as retainers; the binding is renewed by each master of the forge, with a rite and a payment the lineage does not discuss. Apprentices are introduced to the hound on their first day, by name, and are not burned. Customers wait outside the gate until a master walks out to them. The lineage's blades are quenched, they say, in water the hound has breathed on, and no one has ever stolen one. A lord's retainers who came to take the forge in a feud did not get past the gate, and the lord, a man who prized refinement, had a poem written about it instead of trying again.

## Signs

- Paw-prints scorched into stone or burned into earth, each the size of a dinner plate.
- A threshold or gateway whose paving is cracked and blackened in a long oval, as if something hot lies there.
- Small fires starting along a line, one after another, with no one to light them.
- Air that wavers with heat at the mouth of a yard on a cold night.
- Metal tools left in a yard found bent and discolored as if from the forge.

## Combat Strategy

An emberhound fights directly and aggressively. It closes fast, bites, breathes flame on a group, and sweeps its tail at anyone behind it, and it does not fear fire or blades. It uses fire as a weapon of ground as well as of attack, setting the area round it alight to trap its enemies. Cold and water are what hurt it: a bucket of water hisses on it and dims it, a large body of water can trap and drown its fire, and sustained cold weakens it. A bound hound does not chase anyone past the edge of its ground.

## Attack Methods

### Fiery Bite

The hound's jaws close with crushing force, and the victim is seared by the fire inside its mouth as well as torn. The wound is both a bite and a deep burn.

### Flaming Breath

The hound breathes a cone of flame that engulfs everyone in its path and sets alight whatever will burn, spreading fire across the ground.

### Tail Whip

The burning tail swings with surprising force, knocking a man off his feet and setting his clothes alight, and leaving a line of flame behind it.

## Special Abilities

### Fire Absorption

Fire does not harm it; fire-based magic feeds it and heals it instead.

### Thermal Resistance

Its body of flame and coal is hard to strike effectively, and ordinary weapons do little. Cold and water hurt it.

### Heat Aura

Within thirty feet the heat is painful, exposed skin burns, cloth and wood near it catch fire, and metal weapons grow too hot to hold for long.

### Ember Trail

Fire follows it. It leaves burning marks and small fires wherever it goes, and in dry country they join into a blaze.

### Cold Iron and Water

A large body of water can trap and smother it, sustained cold weakens it, and it cannot cross a barrier of cold iron.

## Attributes

Strength
: 11-14 (1d4+10)

Endurance
: 13-16 (1d4+12)

Dexterity
: 11-14 (1d4+10)

Agility
: 9-12 (1d4+8)

Perception
: 11-14 (1d4+10)

Aura
: 7-10 (1d4+6)

Will
: 13-16 (1d4+12)

Reasoning
: 7-10 (1d4+6)

Creativity
: 6-9 (1d4+5)
