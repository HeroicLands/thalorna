---
tags:
  - dreadspawn
  - creature
name:
  full: Abyssdrake
  aliases: []
description: "A rare, intelligent draconic ambush predator of lightless depths that guards sunken ruins, trenches, and corrupted underwater sanctuaries."
shortcode: abyssdrk
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
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d4+14
    end: 1d4+14
    dex: 1d4+10
    agl: 1d4+12
    per: 1d4+12
    aur: 1d4+16
    wil: 1d4+14
    rea: 1d4+8
    cre: 1d4+10
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 19 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 13 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 54 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 43 } }
    - name: Serpent Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Serpent Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 4
            aspect: piercing
          lengthBase: 2
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
    - name: Shadow Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: claw
          name: Shadow Claws
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 8
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 3
            aspect: edged
          lengthBase: 3
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
    - name: Corrosive Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 73
        combatCategory: missile
        impairedByRoles:
          - manipulator
        strikeMode:
          type: missile
          shortcode: breath
          name: Corrosive Breath
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 0
            modifier: 0
          impactBase:
            numDice: 1
            die: 4
            modifier: 5
            aspect: fire
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 60
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 4
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 8
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 4
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1
              - locomotor
              - manipulator
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
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles:
              - manipulator
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
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
      weight:
        base: 1500
        calc: "1500"
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 100
        leaguesPerWatch: 10
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[abyssdrk|Abyssdrake]]{float: top-left}

The stench reaches you first — brine, and under it something sulfurous, rotten, wrong. Then the water goes cold, and a sinuous shape moves through it: a long body, serpentine, scaled in the deepest obsidian, barely visible even in daylight because the scales seem to drink the light rather than give it back. When it turns, your breath stops. Its eyes burn with a cold, hard blue, and along its spine a line of jagged fins trails a glow of sickly green and violet. The scales catch the light in a way that hurts to watch, as though the thing were not quite in the same water as you.

# Dossier {#dossier}

Abyssdrakes come out of the crushing dark of the sea floor, or out of caverns so deep that light is something to be used against them. They are ambush hunters of unusual intelligence, and they lair in sunken ruins, in abyssal trenches, and in the flooded passages that run between one world and another. Where one is met, it is usually guarding something — a drowned temple, a portal, a sanctuary gone foul — that it has taken for its own.

## The Body

A slender, wingless drake, twenty to thirty feet long. The snout tapers to a point and is lined with teeth that curve backward, so that what it has taken does not come out. Above each eye a ridge of jagged, backswept fins stands up, and a mane of the same spikes runs the whole length of the spine, every one edged in phosphorescent violet or green. The claws are long, wickedly sharp, and look like black iron. It is as much at home on land as in water, and it gives off a low thrumming hiss that is felt in the chest and the bones before it is heard. In the dark, or in murky water, it is very nearly invisible, and in total darkness it has every advantage over anything that cannot see there.

## Its Ground

An Abyssdrake hunts alone over a great territory and keeps to the deepest part of it — lightless caves, sunken halls, narrow ways where its long body can turn and a swimmer's cannot. It will hang motionless for days for one ambush. It reasons about its ground the way a hunter reasons about a tool, choosing it and defending it, and it will drive a rival out of its territory without bothering to eat it; the point is possession. Wounded, or starving, it stops being careful and becomes erratic and savage.

## In the Water

The attack comes out of darkness or silt: a lunge with the whole body behind it, the jaws closing to seize and crush, and if the grip holds, the victim is carried in the mouth toward deeper water, with the fore-claws raking to keep him from getting purchase. It exhales a stream of caustic vapour and liquid that eats flesh and corrodes armour, and the burns go on working into the skin for some while after. It bites, tears and withdraws to see what it has done. In a long fight it uses the terrain to break line of sight and heals in the dark while it waits — as long as it stays in shadow or water its wounds close quickly. It does not fight to the death; when the thing turns against it, it goes down into water no pursuer can follow it into. It is at its most cunning in a confined space against something larger, or against several.

## Light

Sunlight stops the healing outright, and so does any long exposure to bright light; a party with enchanted torches or a spell of light can drive one from its lair and keep it from mending. It is very hard to hurt with ordinary weapons and shows no discomfort at any depth, and the scholarly guess for both is that it is not wholly of this world.

## Attributes

- **Strength:** 15-18 (1d4+14)

- **Endurance:** 15-18 (1d4+14)

- **Dexterity:** 11-14 (1d4+10)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 13-16 (1d4+12)

- **Aura:** 17-20 (1d4+16)

- **Will:** 15-18 (1d4+14)

- **Reasoning:** 9-12 (1d4+8)

- **Creativity:** 11-14 (1d4+10)
