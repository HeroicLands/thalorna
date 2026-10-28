---
shortcode: embermaw
name: {full: Embermaw}
type: being
subType: creature
description: "A powerful elemental of molten heat drawn to volcanic regions, feeding on the earth's fire and driven by hunger and territorial aggression alike."
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
    str: 1d6+27
    end: 1d4+12
    dex: 1d4+6
    agl: 1d4+8
    per: 1d4+8
    aur: 1d4+12
    wil: 1d4+10
    rea: 1d4+6
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 30}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 58}}
    - name: Ember Bite
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
          name: Ember Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 10, aspect: fire}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Fire Breath
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
          name: Fire Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 9, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 25
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
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 7, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
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
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
      weight: {base: 2600, calc: "2600"}
      reachBase: 0
      bodyScaleBase: 1.92
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: wetlands, mode: override, textValue: "0"}
          - {scope: surface_cover, key: dunes, mode: override, textValue: "0"}
          - {scope: surface_cover, key: mixed_forest, mode: override, textValue: "0"}
          - {scope: surface_cover, key: barren, mode: override, textValue: "0"}
          - {scope: surface_cover, key: ruins, mode: override, textValue: "0"}
          - {scope: hydrology, key: shallow, mode: override, textValue: "0"}
          - {scope: hydrology, key: deep, mode: override, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[embermaw|Embermaw]]{float=top-left}

From the rim of the caldera the lake of lava below is crusted black and cracking orange, and the heat comes up in waves that make the far wall swim. Something is moving on the crust. It crawls up out of a crack in the lava as if out of water: a reptile as long as two men, built of molten rock, its body glowing red and orange through a skin of black cooling stone that splits and reforms as it moves. Its head swings up toward the rim. Its eyes are two holes into white heat. It opens its jaws, and a sound like a forge-bellows comes out, and then a gout of flame and burning rock that reaches halfway up the caldera wall.

# Dossier {#dossier}

The Embermaw is a great fire elemental: a spirit of the fire-aspect that manifests as a twelve-foot reptile of living lava and burning rock, drawn to volcanoes and places where the earth's own fire comes close to the surface. It feeds on that fire, it attacks almost anything that comes into its ground, and it ruins the land round it simply by being there. It is the larger and more dangerous cousin of the [[being-embrhnd|Emberhound]]. One holds a caldera among the volcanic peaks along the eastern edge of [[place-ixilankulrgn|Ish'ilankul]], the highland heart of the Ki'ich'chik faith, whose eruptions the priests remember as moments when the gods grew angry. Like every elemental, it can be destroyed in the material world, and it comes back.

## Presentation

The embermaw is shaped like a great heavy lizard or a wingless drake, with a broad head, short powerful legs and a long tail, and its whole body is molten rock: glowing orange-red where it flows, crusted black where it cools, splitting and reforming as it moves. Its eyes are white-hot. Smoke and sulfur fumes stream off it. It moves through lava as a crocodile moves through water and over cooled rock with a heavy, cracking crawl, and it leaves a trail of fresh rock behind it. The heat round it is enough to kill a man who stays near, and the noise of it, hissing, cracking and roaring like a furnace, can be heard a long way off.

## In the Land

The Ish'ilankul plateau rises in high valleys between volcanic peaks, and a north-south spine of them marks the region's eastern edge, rich with obsidian and lined with cloud forest. The embermaw holds one of the calderas in that spine, a crater with a lava lake in it, and the slopes round it, and it ranges down the slopes in times of eruption and back up as the lava cools. It feeds on the earth's fire; it does not need to eat, but it hunts anyway, and burns what it catches. Where it goes, forest becomes ash, streams boil away and rock cracks and melts, so that the slopes of its peak are bare black stone in a mountain range otherwise green.

## Key Behaviors

An embermaw is solitary and territorial, and it attacks almost any intrusion into its ground. It hunts actively when it is out of the lava, running down deer and peccary on the slopes. It grows stronger when the volcano is active and quieter when it is calm. It does not tolerate other fire elementals in its caldera and drives them out. When its body is destroyed, it collapses into a pool of cooling rock and is gone, and after a time, months or years, it rises again out of the same lava.

## What the Priests Do

The Ch'alishbal, the ordained priests of Ish'ilankul, read the calderas as they read the heavens, and the embermaw's caldera is one where the gods' anger is remembered. The priests do not hunt it. They make offerings at the rim at the appointed days of the calendar, cast down into the lava, and they read the creature's movements as part of the volcano's temper: an embermaw that comes down the slope means the mountain is waking. The obsidian gatherers who work the lower slopes keep a watch on the rim, and when the creature comes out they abandon the slope at once, because obsidian can wait and the embermaw cannot be outrun once it is close. The farming villages of the valley below keep their terraces watered and their canals full, because a stream of water is the one thing that has turned it back from the fields.

## Signs

- A volcanic slope bare and black in a range otherwise green with forest.
- Streams that run dry where they cross a slope, their beds steaming.
- Fresh rock, still warm, in a long trail down a mountainside, with no lava flow above it.
- A deep, bellows-like roar from a crater, carried on the wind.
- Smoke and sulfur fumes far stronger than the volcano's own, rising from one place on its flank.

## Combat Strategy

An embermaw fights from the lava or among hot rock, where it is strongest and heals as it fights. It breathes fire and burning rock over everything in front of it, bites, and sweeps its tail through anyone close. It is fearless and pursues a wounded enemy. It is weakest away from heat, on cold wet ground, and cold water hurts it badly: a stream, a canal, a downpour, or cold worked by magic slows it, cracks its crust and drives it back toward the lava.

## Attack Methods

### Fire Breath

The embermaw breathes a torrent of flame and molten rock over everything in front of it, burning flesh, melting armor and weapons, and setting the ground alight.

### Ember Bite

Its jaws close on a victim and crush and burn at once, and molten matter clings to the wound and goes on burning.

### Tail Whip

The lava tail sweeps in wide arcs with tremendous force, knocking men down and leaving a trail of burning rock.

## Special Abilities

### Magma Spray

It rears and sprays molten rock and burning debris in a wide arc, catching many at once, less fiercely than its breath.

### Molten Composition

Fire does not harm it and fire-based magic heals it. Weapons pass into its flowing body with little effect. Cold and water are what hurt it.

### Lava Mastery

It moves through lava like water, and in active volcanic country it is stronger and harder to harm.

### Heat Aura

Within fifty feet the air is hot enough to cause pain, exposed skin burns, and anything that will burn catches fire without being touched.

### Environmental Destruction

Forests become ash, water boils away and stone cracks and melts wherever it goes, whether it means to destroy or not.

### Thermal Regeneration

In lava or beside great heat it heals very fast. Away from heat it heals slowly, and in cold it weakens.

## Attributes

Strength
: 28-33 (1d6+27)

Endurance
: 13-16 (1d4+12)

Dexterity
: 7-10 (1d4+6)

Agility
: 9-12 (1d4+8)

Perception
: 9-12 (1d4+8)

Aura
: 13-16 (1d4+12)

Will
: 11-14 (1d4+10)

Reasoning
: 7-10 (1d4+6)

Creativity
: 7-10 (1d4+6)
