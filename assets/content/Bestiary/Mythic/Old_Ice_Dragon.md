---
shortcode: oldicdrg
name: {full: Old Ice Dragon, aliases: [Frost Wyrm]}
type: being
subType: creature
description: "A colossal, ancient ice-wyrm exceeding forty feet, embodying merciless patience and predatory cunning honed across centuries of frozen dominion."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: icon-dragonheadft
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
  kbcat: mythic
  attrRollFormula:
    str: 1d6+57
    end: 1d6+42
    dex: 1d4+6
    agl: 1d4+6
    per: 1d6+12
    snt: 1d4+1
    aur: 1d6+11
    wil: 1d6+18
    rea: 1d6+14
    cre: 1d6+10
    emp: 1d6+10
    elo: 1d6+14
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 60}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 45}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 17}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 95}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 93}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 84
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 25, aspect: piercing}
          lengthBase: 10
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 3}
    - name: Claw
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
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 24, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: 24, aspect: edged}
          lengthBase: 9
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 75
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 32, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 23, aspect: blunt}
          lengthBase: 11
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 96
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: breath
          name: Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 19, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 80
          drawBase: 0
          traits: {breath: true, impactBands: 19 · 15 · 11 · 7}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 16}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 16}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 12}
          - {name: Torso, shortcode: torsozone, probWeight: 16}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 12}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 16}
          - {name: Tail, shortcode: tailzone, probWeight: 12}
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
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: rwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: tailzone
            roles: [locomotor]
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
            protectionBase: &a1 {blunt: 28, edged: 30, piercing: 29, fire: 27}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 7
            protectionBase: *a1
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 7
            protectionBase: &a2 {blunt: 28, edged: 30, piercing: 29, fire: 27}
          - name: Left Fore Foot
            shortcode: lfftloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a3 {blunt: 26, edged: 28, piercing: 27, fire: 25}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 7
            protectionBase: *a2
          - name: Right Fore Foot
            shortcode: rfftloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: *a3
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: &a5 {blunt: 22, edged: 24, piercing: 23, fire: 21}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: &a4 {blunt: 28, edged: 30, piercing: 29, fire: 27}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: *a4
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: *a5
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 7
            protectionBase: &a6 {blunt: 28, edged: 30, piercing: 29, fire: 27}
          - name: Left Hind Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a7 {blunt: 26, edged: 28, piercing: 27, fire: 25}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 7
            protectionBase: *a6
          - name: Right Hind Foot
            shortcode: rhftloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: *a7
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 26, edged: 28, piercing: 27, fire: 25}
      weight: {base: 8000, calc: "8000"}
      reachBase: 0
      bodyScaleBase: 3.01
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 180
        leaguesPerWatch: 18
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The ice sheet runs white to every horizon, and the katabatic wind has dropped for the first time in nine days, and in the silence you hear the ice groan. A nunatak of black rock stands out of the plain ahead, and the ice round its foot is moving. A head comes up out of it, then a neck, then shoulders like a ship's hull, a dragon so large the ice seems to have grown it, white and gray and the blue of deep crevasses, forty feet of it and more. Its breath does not smoke. It glows. It looks at you for a long time, without hurry, the way the ice itself looks at things, and the cold that reaches you is not weather. Your lamp-oil turns to jelly in its flask.

# Dossier {#dossier}

The Old Ice Dragon is an ice dragon of four to eight centuries or more: thirty-two to forty-eight feet long, with wings of sixty feet and more, and eight thousand pounds of patience and cold. It has outlived whole bloodlines of the heroes who came to kill it, and it moves with the slowness of a thing that has time. Its breath flash-freezes living flesh, its cold kills at two hundred feet, and it is old enough that the oldest of its kind may remember the dragons' war in the west and the betrayal that followed it. Like every dragon it is a mortal creature with a vast soul, and magic does not hold near it. One lives in the interior of [[place-isrncntnnt|Iseron]], the ice continent at the southern pole, the least known country in the world, and the few expeditions that have returned from Iseron bring back the rumor of it with the rumors of ruins under the ice.

## Presentation

An old ice dragon is colossal and heavy, built more like a glacier than an animal. Its scales are nearly as hard as diamond, white, gray and the deep blue of crevasse ice, many of them centuries old, and its hide is crusted with ice that never melts. Its head is massive, its horns grown into a crown, and its eyes are pale, clear and very old. Its breath is a supercooled mist that glows faintly with its own light. The cold round it is absolute: unprotected flesh dies in minutes, and wards against cold begin to fail. It moves with complete economy and almost never fast.

## In the Land

Iseron is a continent of ice, a sheet covering the interior broken by nunatak peaks where buried mountain ranges break through, with glaciers flowing to coasts that show bare rock only in the brief southern summer. The old ice dragon holds the interior, the ice plains and the nunataks, and its lair is said to be in a great cavern under the ice beneath a ring of black peaks. It hunts the coasts in summer, seals, whales, the great seabird colonies, and in winter it sleeps or broods in the dark. Whether its lair has anything to do with the ruins rumored under Iseron's ice, nobody who has come back can say. It has had centuries to move glaciers by small increments of will, and the expedition masters say the ice of the interior is not where the charts left it.

## Key Behaviors

An old ice dragon's patience is beyond measure. It waits a century for circumstances to arrange themselves as it wishes, and it arranges what it can toward that end, slowly, by increments. It is merciless and cunning, and it does nothing quickly that can be done slowly and surely. It speaks, when it chooses, and it is a great mind, with long memory and long views; it does not need anything from anyone and is not easily moved. It tolerates no rival in its country. It remembers the wrongs done to dragonkind, and it has nothing but time in which to consider them.

## What Expeditions Do

The expedition masters who still sail south, and the handful of crews that have come back, treat the old ice dragon as they treat the katabatic wind: as a fact of the interior that kills those who are careless. They do not go into the interior at all if they can help it, and when they do they travel in the dead of the brief summer, when the dragon hunts the coasts and its country is empty. They carry far more fuel than they need, because fire is the only thing that hurts it. Scholars in the west who study dragons, and the [[affiliation-ordoarcanis|Thordimalon]], which has hoped for centuries that the dragons would forget, have funded expeditions to find it and learn what it knows. Two of those expeditions did not come back. One came back short of half its people, with its leader unwilling to say what had been said to him.

## Signs

- Ice that has moved between one season and the next where no glacier should flow.
- A breath of cold so sudden and so deep that lamp-oil thickens and iron cracks.
- A glow under the ice at night, faint and blue, moving.
- Whale and seal carcasses on a coast in summer, frozen solid, with bites larger than a boat.
- Expedition cairns found broken and the stones laid out again in an order no expedition used.

## Combat Strategy

An old ice dragon fights with the economy of centuries. It does not maneuver like a young dragon; every movement is chosen. It breathes its flash-freezing mist over its enemies from a distance, lets its cold aura break their wards and their bodies, and finishes those still standing with a bite or a sweep of its tail. It fights from its own ground, the ice it has shaped, where crevasses open and walls of ice stand where it wants them. It has seen every weapon men bring against dragons and outlived the men who brought them. It does not pursue; it waits, and the cold pursues for it.

## Attack Methods

### Bite

The jaws close with crushing force, and flesh round the bite freezes solid.

### Claw

It rakes and pins with claws like scythes of ice, shearing through armor.

### Tail

Its tail, as thick as a man's body and nearly as long as its own, sweeps with terrible deliberation, knocking everything in its path off its feet and toppling towers.

### Breath

It breathes a spreading cloud of supercooled, glowing mist sixty feet long that freezes living flesh instantly. Those caught in it die in moments unless something extraordinary protects them.

## Special Abilities

### Wing Buffet

It snaps its wings outward in a shockwave like an avalanche that hurls everything within thirty feet down and back, snaps trees and cracks walls.

### Flight

It flies vast distances over the ice and the southern ocean.

### Armored Scales

Its scales are nearly as hard as diamond. Swords shatter on them, arrows glance off, and even enchanted weapons struggle to bite.

### Cold Aura

Within two hundred feet the cold kills the unprotected steadily, and magical protection against cold begins to fail near it.

### Draconic Presence

Those near it feel its age and power as dread; animals panic and men freeze.

### Cold Immunity

Cold does not harm it. Only great heat and fire hurt it.

### Spell Resistance

Magic aimed at it slides off or fails, as much from its age and will as from its nature.

### Lair Awareness

In its own country it knows what moves on the ice and under it.

### Unraveling Presence

Its channeling floods the currents of magic for a long way round it. Near it, no mage's working holds: spells misfire, wards collapse, and half-channeled power discharges wildly.

## Attributes

Strength
: 58-63 (1d6+57)

Endurance
: 43-48 (1d6+42)

Dexterity
: 7-10 (1d4+6)

Agility
: 7-10 (1d4+6)

Perception
: 13-18 (1d6+12)

Scent
: 2-5 (1d4+1)

Aura
: 12-17 (1d6+11)

Will
: 19-24 (1d6+18)

Reasoning
: 15-20 (1d6+14)

Creativity
: 11-16 (1d6+10)

Empathy
: 11-16 (1d6+10)

Eloquence
: 15-20 (1d6+14)
