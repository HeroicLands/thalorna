---
shortcode: stnclmbr
name: {full: Stoneclimber, aliases: []}
type: being
subType: creature
description: "A patient, cunning apex predator of rocky highlands, perfectly adapted to ambush prey across steep three-dimensional terrain."
tags: [dreadspawn]
data:
  packFolder: dreadspawn
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
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d6+14
    end: 1d6+14
    dex: 1d4+13
    agl: 1d4+13
    per: 1d6+14
    aur: 1d6+6
    wil: 1d4+13
    rea: 1d4+9
    cre: 1d4+9
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Rending Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Rending Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Snapping Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Snapping Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 3}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
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
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [manipulator]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
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
      weight: {base: 200, calc: "200"}
      reachBase: 0
      bodyScaleBase: 1.38
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: topography, key: steep, mode: add, textValue: "0"}
          - {scope: surface_cover, key: alpine, mode: add, textValue: "0"}
          - {scope: surface_cover, key: barren, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[stnclmbr|Stoneclimber]]{float=top-left}

The gorge is so narrow and so deep that the sky is a strip of blue far overhead, and the walls are rust-red and gray and glittering with flecks of mica. The ore-mule in front of you stops and will not go on. Halfway up the wall above the path, a piece of the rock face has a different shape from the rest: long, low, heavy, studded with crystals that catch the sun exactly as the wall does. It is clinging upside down under an overhang. As you look at it, its head turns, slowly, and it walks down the wall headfirst toward the path, its claws hooking into cracks you cannot see, as easily as a lizard on a garden wall, and it is as long as the mule.

# Dossier {#dossier}

The Stoneclimber is a dreadspawn shaped like a great, low, thick-bodied lizard, twelve to sixteen feet long and about two hundred pounds, scaled like the rock it lives on and studded with crystal, which climbs sheer faces and overhangs as if they were level ground and hunts from above. It is patient, cunning and solitary, and it knows every crack and ledge of its ground. It holds a stretch of the [[place-slvrgorges|Silver Gorges]], the deep, narrow valleys on the Vedyari flank of the Eastern Reach, worked for lapis and silver by hereditary smithing clans, and it takes their mules and, now and then, their men. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The stoneclimber is long and low, with a broad, flat, powerful body, short thick legs set wide, and long hooked claws that grip rock like grappling irons. Its scales are gray, brown and rust-red, each one rough and textured like stone, and many of them are set with flecks of quartz, mica and feldspar, so that it glitters in the sun exactly as the rock does. Its tail is long and heavy. The head is broad and blunt, with strong jaws and small, deep-set eyes. It moves slowly and deliberately on rock, placing each foot, and very fast when it strikes. It leaves faint scratches and a musky smear along the routes it uses.

## In the Land

The Silver Gorges are steep, narrow valleys carrying lapis, silver and a little tin, and the road up them is also the road to [[place-tamradvara|Tāmradvāra]], the copper-door to the Khazryn. The stoneclimber holds a few miles of one gorge above the workings, from the river up to the rim, and patrols its walls along routes it marks with scratches and scent. It hunts the wild goats and sheep of the gorge walls, the eagles and vultures on their ledges, and the mules and men on the road below, and it lies up in a crevice high on a sunlit face. It does not come out onto the open uplands above the rim, where there is nothing to climb.

## Key Behaviors

A stoneclimber spends most of its time still, clinging to a wall above a path or a ledge, waiting for something to pass beneath. It strikes from above and behind, dropping or lunging onto its prey and dragging it off its feet, and it uses the ground: it drives prey toward drops and loose rock and knocks it off ledges. It knows the location of every escape route and hiding place within miles. It is solitary, though it tolerates a neighbor that keeps to its own stretch of wall. It survives falls, cold and heat that would kill anything else, and its wounds close slowly but surely.

## What the Smithing Clans Do

The hereditary smithing clans who hold the workings, by a right they say is older than the kingdom's charter, run their own toll-gate on the gorge road, and the clans' gate-keepers now also tell every caravan where the stoneclimber was last seen. Ore-mules on that stretch go in strings of twenty with a man on the slope above them watching the walls. The clans have tried to kill it with crossbows and failed, and with fire, which drove it off its stretch for a season; it came back. The clans' forges, the best in the highlands, take commissions no temple would put its name to, and they have quietly made one for themselves: a long-hafted fire-lance, a pole with a pot of burning oil on the end, kept at the gate. The crown's customs-house downstream has not been told about the stoneclimber, because the clans have been careful for four generations not to tell the crown anything.

## Signs

- A piece of rock face that glitters in the sun and is not quite the shape of the rest of the wall.
- Fine, parallel claw-scratches running up a sheer face and across the underside of an overhang.
- Goat and mule bones at the foot of a wall, below a ledge nothing could climb to.
- A musky smear on the rock at intervals along the same line across a cliff.
- Mules that stop on a narrow stretch of road and will not go on.

## Combat Strategy

A stoneclimber attacks from a position of advantage: from above, from behind, or from an angle its prey cannot answer. It strikes, drags its victim toward an edge, and goes back up the wall where nothing can follow it. It wears its prey down with repeated attacks from different places. It does not stand and fight on level ground, where it is far less dangerous, and it retreats up the rock when pressed. Fire is the thing it fears: flame damages its scales and loosens its grip, and it will leave a stretch of wall where there is fire.

## Attack Methods

### Rending Claw

The stoneclimber drives its hooked claws into its prey and tears, often while clinging to the rock above with its other feet, so that the pull of its weight adds to the blow.

### Snapping Bite

Its jaws close on a neck or a limb with great force, and it uses its weight and leverage to wrestle its victim off balance and off the path.

## Special Abilities

### Diving Strike

From a height, the stoneclimber launches itself down onto its prey and hits with its whole weight, claws and jaws together.

### Cliffhanger Supremacy

It moves over sheer faces, ceilings, overhangs and loose rock as if they were level ground, and takes positions no other creature could.

### Environmental Camouflage

On rock its scales blend perfectly with the stone, and it is all but invisible until it chooses to move.

### Predatory Awareness

On its own ground it knows every escape route, hiding place and vantage point for miles.

### Resilient Frame

It survives falls, cold and heat that would kill a man, and heals slowly from its wounds.

### Fire Weakness

Fire damages its scales and loosens its grip, pains it, and drives it away from a stretch of rock.

## Attributes

- **Strength:** 15-20 (1d6+14)

- **Endurance:** 15-20 (1d6+14)

- **Dexterity:** 14-17 (1d4+13)

- **Agility:** 14-17 (1d4+13)

- **Perception:** 15-20 (1d6+14)

- **Aura:** 7-12 (1d6+6)

- **Will:** 14-17 (1d4+13)

- **Reasoning:** 10-13 (1d4+9)

- **Creativity:** 10-13 (1d4+9)
