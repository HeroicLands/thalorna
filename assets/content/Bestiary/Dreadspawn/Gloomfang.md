---
shortcode: glmfng
name: {full: Gloomfang, aliases: []}
type: being
subType: creature
description: "A made rodent-thing that hunts deep caverns in hive-minded packs, overwhelming prey through numbers and coordinated viciousness."
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
    complexion: []
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d4+9
    end: 1d4+13
    dex: 1d4+13
    agl: 1d6+16
    per: 1d6+14
    aur: 1d6+4
    wil: 1d6+10
    rea: 1d6+6
    cre: 1d6+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 76}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Coordinated Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 80
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Coordinated Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Claw Slashing
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 80
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw Slashing
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 0, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
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
            roles: []
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
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 100, calc: "100"}
      reachBase: 0
      bodyScaleBase: 1.06
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[glmfng|Gloomfang]]{float=top-left}

The hall cut into the hillside is dry, and that is a mercy after three days of bog: dry floor, a stone bench along the wall, the remains of a fire someone else made. You are unrolling your blanket when the first eyes come on in the passage at the back of the hall, two greenish points low to the floor. Then two more beside them, and four more behind, and then the passage is full of them, pairs and pairs of glowing eyes, and a chittering starts up all together, rising and falling as if they were talking. The first one comes into the firelight on all fours: a rat as big as a wolfhound, matted and filthy, its head too large and its yellow teeth too long for its mouth.

# Dossier {#dossier}

The Gloomfang is a dreadspawn made in the shape of a giant rat, the size of a big dog, that hunts in packs under a single will. A colony of them holds a cave system or an abandoned working, hunts what comes into it and what lives round it, and attacks in coordinated waves. The colony the deer-herders and seal-hunters of the [[place-gwtkrrgn|Ghotaqor]] fear lives in one of the [[place-nrthnhlds|Old Holds of the Northern Taiga]], the cut-stone halls in the northern forest that nobody has surveyed. Like every dreadspawn, gloomfangs were made and cannot breed. A colony was made all at once, and it has never grown: every gloomfang killed is one fewer, for good.

## Presentation

A gloomfang is a lean, long-bodied rat as big as a wolfhound, five to six feet tall when it rears on its hind legs. Its fur is matted dirty brown, stiff in places with old blood. The head is too large for the body and the jaws too full of long yellow-brown teeth to close properly. The claws are long and curved and grip rock like a squirrel's grip bark. The eyes glow a faint greenish yellow, and in the dark a colony is a field of paired lights. Gloomfangs chitter constantly among themselves, in rising and falling bursts that sound like speech, and they smell of musk, wet fur and rot.

## In the Land

The Ghotaqor is the cold forest of the northern Khazryn, dark spruce, unthawing bog and long frozen lakes, and the Old Holds in it are cut stone under moss and dry halls in hillsides, the best shelter for forty miles. The gloomfang colony holds one: its galleries and the caves behind it, which run deeper than anyone has followed. By day the pack stays deep, away from light. By night it hunts the forest for miles round, deer, wolves, seals hauled out on the coast and the deer-herders' animals, and it comes back before dawn. Herders who have lost animals near a certain hillside, where moss lies over squared stone and the deer will not graze, have stopped taking their herds there.

## Key Behaviors

A gloomfang pack moves and thinks together, as if one mind looked out through every pair of eyes, and the colony as a whole answers to one creature larger than the rest. They are tireless, they climb walls and cave roofs as easily as floors, and they hunt by wearing prey down: a pack follows a deer or a man for miles, attacking in waves, falling back, and attacking again from a new side. They defend their hold against everything. They have learned to take particular prey, the herders' young animals and the seals in the pupping season, and they have learned that a dry hall brings travelers in to sleep.

## What the Northern Bands Do

The small bands of the northern forest have no chiefs and no towns, and they deal with the gloomfangs the only way they can, by staying away. A hunter of the bands tells a stranger the one rule: never sleep in a dry hall, however wet the night, because a dry hall is a door, and nobody knows what is on the other side of it. Herders move their animals away from the hold's hillside before the long dark of winter, when the pack hunts farthest. The bands have learned that fire and strong light break the pack's coordination and drive it back, and anyone who must pass near the hold at night carries pitch torches and keeps them burning. The coast-hunters say the sea keeps what it is given, and they say the hold keeps what it is given too.

## Signs

- Pairs of greenish lights in a dark passage or among the trees at night, many of them, all moving together.
- Chittering in bursts that rise and fall like speech, coming from underground.
- Deer and seal carcasses stripped to the bone in a night, with the gnawing of many large teeth.
- Claw marks on the walls and ceiling of a cave as well as on its floor.
- A dry hall with old fires in it and gnawed bones under the bench, and no sign of who made the fires.

## Combat Strategy

A gloomfang pack attacks in waves. The first wave rushes in to bite and claw and distract, while the next moves round to the flanks and the rear, until the prey is surrounded. Then they drag it down by weight of numbers and tear at it. They withdraw from a wave that is not working and come again from a different angle, and they redouble their attack on anyone who kills one of them. They are worst in confined spaces, where there is nowhere to run. Fire and bright light disrupt them, and killing the large one that leads them scatters the pack, for a time.

## Attack Methods

### Coordinated Bite

Several gloomfangs bite in quick succession from different sides, tearing at exposed flesh, and the bites land worse and worse as the victim is surrounded or pulled down.

### Claw Slashing

They rake with long curved claws that tear through leather and open bleeding wounds, climbing onto a victim as they slash.

## Special Abilities

### Pack Tackle

Several gloomfangs throw themselves at one man together to drag him to the ground. Once he is down, the pack goes for his throat, his face and his belly.

### Darkvision Dominance

Gloomfangs see perfectly in total darkness and nearly as well in ordinary light, and no light condition hampers them much, though bright light and fire distress them.

### Pack Coordination

The pack thinks as one under the colony's leader. Killing the leader throws the pack into confusion until another takes its place.

### Endurance and Resilience

They do not tire, they shrug off poison and sickness, and they follow prey for longer than a man can run.

### Climbing and Vertical Movement

They climb walls and run along cave roofs as easily as along the floor, and they come at a man from above as readily as from the side.

## Attributes

- **Strength:** 10-13 (1d4+9)

- **Endurance:** 14-17 (1d4+13)

- **Dexterity:** 14-17 (1d4+13)

- **Agility:** 17-22 (1d6+16)

- **Perception:** 15-20 (1d6+14)

- **Aura:** 5-10 (1d6+4)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 7-12 (1d6+6)

- **Creativity:** 5-10 (1d6+4)
