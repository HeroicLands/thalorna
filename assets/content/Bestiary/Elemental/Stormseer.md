---
shortcode: strmsr
name: {full: Stormseer, aliases: []}
type: being
subType: creature
description: "An arrogant elemental of sky and lightning born from violent storms, heralding severe weather that some believe its very presence conjures."
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
    str: 1d4+6
    end: 1d4+10
    dex: 1d4+10
    agl: 1d4+12
    per: 1d4+12
    aur: 1d4+10
    wil: 1d4+8
    rea: 1d4+8
    cre: 1d4+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 28}}
    - name: Gust of Wind
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 45
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Gust of Wind
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Lightning Strike
      type: skill
      system:
        shortcode: bolt
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: bolt
          name: Lightning Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 120
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 3}
          - {name: Body, shortcode: torsozone, probWeight: 6}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Body
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
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
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
            probWeight: 4
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 0.88
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 110
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[strmsr|Stormseer]]{float=top-left}

The sky over the gulf was clear at noon. Now a wall of black cloud stands out over the open ocean, and it is coming in against the wind. At its leading edge, outlined by the lightning that runs through it, is a shape: an eagle as wide as a merchant galley is long, made of cloud and storm, with lightning crawling in its feathers and two points of blue-white fire for eyes. It hangs over the harbor mouth, looking down at the ships, and the look is not hungry. It is contemptuous. Then it opens its wings, and the wind that comes off them lays the fishing boats over on their sides.

# Dossier {#dossier}

The Stormseer is an air elemental of storm and lightning: a spirit of the sky manifested as a great eagle of thundercloud and electricity, thirty feet or more across the wings, which rides storms and makes them, attacks with lightning, wind and thunder, and regards everything that walks or sails as beneath its notice. It is intelligent and arrogant. One haunts the [[place-batarengulf|Gulf of Batáren]], the one deep harbor on Provènzia's cold ocean coast, and the sea-roads north from it toward Élavendre and Aelwyth. The fishermen and the shipmasters of [[place-batarencity|Batáren City]] believe that the stormseer brings the storms that close the gulf, and the belief is hard to argue with. Like every elemental, it can be destroyed in the material world, and it comes back with the next great storm.

## Presentation

The stormseer is shaped like a great eagle, but its body is cloud: dark, roiling thundercloud, visible as a shape only because lightning runs through it, outlining wings, head and talons in flickering blue-white light. Its eyes are two steady points of blue fire. Rain and hail fall out of it, and the wind follows it. Thunder rolls when it moves its wings. The air near it smells sharp and burned, and hair stands on end. It flies fast and effortlessly into and against the wind, and it can hang in place over the sea in a gale.

## In the Land

The Gulf of Batáren is a broad, deep, sheltered bay biting inland from the cold ocean, and everything that comes there comes down from Élavendre and Aelwyth and out of the northern seas. The stormseer ranges over the gulf and the open ocean beyond it, and over the cliff coast to either side, and it comes in with the autumn and winter storms. It seems to claim the sky over the gulf and the weather in it as its own: when it is there, storms come in against the forecast and stay longer than they should, and the harbor is closed. It roosts, if it roosts at all, in the storm clouds themselves, and in calm weather it is not seen.

## Key Behaviors

A stormseer is territorial about the sky and the weather. It understands what men do and why, and treats them with disdain; it attacks ships, boats and men on the cliffs when they annoy it, when they cross its sky in a storm, or for no reason anyone can see. It does not eat. It stays in a region for weeks or months, and the longer it stays the stormier the weather there becomes. When its body is destroyed it disperses in a blast of wind and rain, and the storm breaks up, and the spirit comes back with the next great storm off the ocean.

## What the Harbor Does

Batáren City lives by the gulf, and its shipmasters have made the stormseer part of their calendar. When the stormseer is seen over the harbor mouth, no ship sails, whatever the cargo and whatever the merchant who chartered it says, and the harbor-master closes the boom. Ships caught at sea run for the gulf with their masts struck, because a mast in a stormseer's storm draws lightning. The great houses of the city have fitted their towers with iron rods that run down to the ground, and the harbor's warehouses have them too. The sailors leave an offering of salt on the end of the mole before every winter voyage; the [[affiliation-arldnpnthn|Aurèldían]] priests disapprove of the salt and bless the ships anyway. Nordheim raiders came into this gulf two centuries ago, and the old men of the harbor say a stormseer would have kept them out if it had been watching.

## Signs

- A storm that comes in against the wind out of a clear sky, and stays over the gulf for days.
- Lightning striking the same headland, tower or mast again and again in one storm.
- A shape of wings outlined in lightning at the leading edge of a cloud bank.
- The smell of burned air on the quay before any storm is visible.
- Ship's masts found split from top to deck after a storm, and boats capsized in a single gust.

## Combat Strategy

A stormseer fights from the air and does not come within reach. It throws lightning from a distance, buffets its enemies with wind to knock them down and turn aside their arrows, and claps thunder to stun them, and it builds a storm round itself to make everything harder. It focuses on whoever it finds most insolent. It is hard to hurt with anything a man can throw. Earth and sound hurt it most: grounding rods and iron carried to the earth take the force out of its lightning, and magic of the earth or of sound can scatter it.

## Attack Methods

### Gust of Wind

The stormseer beats its wings and drives a blast of wind at its enemies that knocks men off their feet, blows away anything loose, throws a boat over on its side and turns arrows in the air.

### Lightning Strike

It calls down a bolt of lightning on its target. A direct hit can kill a man outright, and a near miss burns and throws him.

## Special Abilities

### Thunder Clap

It claps its wings or releases its charge in a shock of sound and force that deafens and stuns everyone near and can knock them down.

### Storm Generation

It raises a storm round itself, with rain, wind, lightning and thunder, which follows it and grows worse the longer it stays.

### Aerial Mastery

It is supremely fast and agile in the air, and nothing on the ground or the water can follow it.

### Lightning Affinity

Lightning does not harm it, and lightning magic heals it. It feels the charge in the air and finds its way in total darkness.

### Electrical Sensitivity

It senses the living by the faint charge of their bodies, and ordinary concealment does not hide anyone from it.

### Thunder's Echo

The thunder it makes carries a force that stuns and dazes, even a man who has stopped his ears.

## Attributes

- **Strength:** 7-10 (1d4+6)

- **Endurance:** 11-14 (1d4+10)

- **Dexterity:** 11-14 (1d4+10)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 13-16 (1d4+12)

- **Aura:** 11-14 (1d4+10)

- **Will:** 9-12 (1d4+8)

- **Reasoning:** 9-12 (1d4+8)

- **Creativity:** 11-14 (1d4+10)
