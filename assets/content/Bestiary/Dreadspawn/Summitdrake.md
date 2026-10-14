---
shortcode: smmtdrk
name: {full: Summitdrake, aliases: []}
type: being
subType: creature
description: "A tyrannical, fiercely territorial drake of harsh high peaks that holds its storm-lashed dominion against all challengers for centuries."
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
    str: 1d6+18
    end: 1d6+18
    dex: 1d4+9
    agl: 1d4+13
    per: 1d6+14
    aur: 1d4+9
    wil: 1d6+14
    rea: 1d6+10
    cre: 1d4+9
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 22}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 22}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 55}}
    - name: Crushing Bite
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
          name: Crushing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Raking Claws
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
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 5, aspect: edged}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Sweep
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Sweep
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Wings, shortcode: wingszone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 6}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: wingszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: wingszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1 [locomotor, manipulator]
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
            probWeight: 8
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [manipulator]
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
      weight: {base: 1500, calc: "1500"}
      reachBase: 0
      bodyScaleBase: 1.57
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: topography, key: steep, mode: add, textValue: "0"}
          - {scope: surface_cover, key: alpine, mode: add, textValue: "0"}
          - {scope: surface_cover, key: barren, mode: add, textValue: "0"}
        disabled: false
      - medium: aerial
        feetPerRound: 110
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[smmtdrk|Summitdrake]]{float=top-left}

The wind on the upper shoulder of the mountain is hard enough to lean on, and the snow it carries stings. Above you the summit rocks stand black against a sky full of driven cloud. One of the rocks unfolds. It is a drake, long as a barge, gray and rust-colored and scaled in plates that look like split stone, and it stands up on the summit and spreads a pair of broad, ragged wings into the gale and does not move with it. Its head turns toward you. Its eyes are pale gold. It opens its jaws, and the sound that comes out is not a roar but a long, grinding hiss, and then it drops off the summit and comes down the wind at you.

# Dossier {#dossier}

The Summitdrake is a dreadspawn in the shape of a great winged drake, fifteen to twenty-five feet long and heavier than a war-horse, scaled in gray and rust like the rock of the high peaks. It claims a mountain and holds it, for centuries, against everything large enough to be a rival, and it hunts whatever it likes on the slopes below. It is intelligent, patient and tyrannical. One holds the summit of [[place-hydravenmnt|Mount Hýdraven]], the great peak of Provènzia's northern mountains and the source of the kingdom's water, which the [[affiliation-aelndntrbs|Áelendan Tribes]] hold sacred. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The summitdrake is long and heavy, built like a great lizard, with four powerful clawed legs, a long heavy tail and a pair of broad leathery wings folded along its back. Its scales are thick overlapping plates of gray, brown and rust, patterned like stratified rock, and they turn arrows and most blades. Its head is long and heavy-jawed, crowned with a ridge of horn, and its eyes are pale gold. It climbs rock as easily as a spider climbs a wall, flies strongly in gales that ground every bird, and stands motionless on a summit for days in the coldest weather. It hisses; it does not roar. It smells of cold stone and old blood.

## In the Land

Hýdraven is the highest of the northern mountains, where Provènzia's cold uplands run up toward Élavendre, and the great springs that water the kingdom rise on its shoulders. The summitdrake holds the upper mountain: the summit rocks, the high ridges, the snowfields and the cirques above the springs. It hunts the slopes below, mountain goats and ibex, the sheep of the lower pastures in summer, bears, and anything else large, and it patrols the ridges on regular rounds. It attacks anything large enough to challenge it on sight and ignores what is too small to matter. It does not come down below the high pastures, and the springs themselves it seems to leave alone.

## Key Behaviors

The summitdrake is solitary and territorial past any animal's measure. It patrols, it watches from the summit, and it drives out or kills every rival: eagles, bears, wolves and, once in a generation, a younger drake. It plans: it knows its mountain in every detail, remembers every intruder, recognizes weapons and armor and formations, and adjusts its attack to suit. It eats when it hunts and leaves the rest. It has held the mountain longer than anyone's records, and it behaves as though it expects to hold it forever.

## What the Shepherds and the Tribes Do

The shepherds who use Hýdraven's lower pastures by arrangements older than the kingdom keep their flocks below the line of the last juniper, and every summer they lose a few sheep anyway, and count them as part of the arrangement. Pilgrims who come the customary way are let alone by the tribes, and the pilgrims' way does not go above the springs. The Áelendan do not explain the drake to outsiders and do not, so far as anyone can tell, hunt it. Provènzia's three attempts to survey the watershed were turned back by the tribes before they got high enough to meet it. The bodies that come down with the thaw most years, carried to the nearest Provenzian village without comment, are mostly those of men who climbed too high in the wrong season, and some of them were not killed by the cold.

## Signs

- A great shape on a summit that is there one day and gone the next, and back again.
- The carcasses of ibex and bears on high ridges, opened by huge claws and only partly eaten.
- A long, grinding hiss carried down the wind from the high rocks.
- Claw-scored rock on the lips of high ledges, where something heavy lands and takes off.
- No eagles anywhere on the upper mountain.

## Combat Strategy

A summitdrake attacks from above and from the high ground, diving out of the wind or charging down a slope. It fights with its whole strength: crushing bites, raking claws, and tail sweeps that throw men off ridges. It uses the mountain, keeping its enemies below it, on ice and loose rock, and fighting where they cannot stand together. It recognizes formations and weapons it has seen before and avoids what has hurt it. If a fight goes badly it takes to the air and comes back another day, in worse weather.

## Attack Methods

### Crushing Bite

The jaws close with bone-breaking force on a limb, a shoulder or a body, crushing armor and bone, and a bite can take off an arm or kill outright.

### Raking Claws

The forefeet strike in quick succession, the claws piercing armor and tearing deep wounds.

### Tail Sweep

The heavy tail swings in a wide arc, knocking several men off their feet at once, or crushing one, and on a ridge throwing them off it.

## Special Abilities

### Mountain Mastery

It climbs sheer faces as readily as a spider climbs a wall and moves over broken rock, ice and snow faster than over level ground. On its wings it rides gales that ground everything else.

### Thermal Resilience

It shrugs off cold that would freeze a man solid and thrives on the highest, coldest ground.

### Predatory Intellect

It plans, remembers and adapts, recognizes weapons, armor and formations, and changes its tactics to defeat them.

### Regeneration in Natural Habitat

On its own mountain it heals slowly but surely. Away from the high rock, its wounds heal no faster than any beast's.

### Fire Resistance

Fire and heat barely trouble it. Water, ice and bitter cold worked by magic slow it far more than any flame.

## Attributes

- **Strength:** 19-24 (1d6+18)

- **Endurance:** 19-24 (1d6+18)

- **Dexterity:** 10-13 (1d4+9)

- **Agility:** 14-17 (1d4+13)

- **Perception:** 15-20 (1d6+14)

- **Aura:** 10-13 (1d4+9)

- **Will:** 15-20 (1d6+14)

- **Reasoning:** 11-16 (1d6+10)

- **Creativity:** 10-13 (1d4+9)
