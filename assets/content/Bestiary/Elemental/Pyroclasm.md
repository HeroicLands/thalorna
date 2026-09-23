---
tags:
  - elemental
  - creature
name:
  full: Pyroclasm
  aliases: []
description: "A chaotic fire elemental of animate volcanic devastation, born from active volcanoes and consuming everything in its path toward cooler waters."
shortcode: pyrclsm
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
  kbcat: elemental
  attrRollFormula:
    str: 1d6+33
    end: 1d4+12
    dex: 1d4+6
    agl: 1d4+8
    per: 1d4+6
    aur: 1d4+10
    wil: 1d4+10
    rea: 1d4+6
    cre: 1d4+8
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 36 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 65 } }
    - name: Lava Punch
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: punch
          name: Lava Punch
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 12
            aspect: fire
          lengthBase: 1
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
    - name: Lava Spray
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: missile
        impairedByRoles:
          - manipulator
        strikeMode:
          type: missile
          shortcode: spray
          name: Lava Spray
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 0
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 13
            aspect: fire
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 25
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 2
          - name: Arms
            shortcode: armszone
            probWeight: 5
          - name: Torso
            shortcode: torsozone
            probWeight: 5
          - name: Legs
            shortcode: legszone
            probWeight: 8
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
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
            probWeight: 200
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
      weight:
        base: 4900
        calc: "4900"
      reachBase: 0
      bodyScaleBase: 2.16
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - scope: surface_cover
            key: wetlands
            mode: override
            textValue: "0"
          - scope: surface_cover
            key: dunes
            mode: override
            textValue: "0"
          - scope: surface_cover
            key: mixed_forest
            mode: override
            textValue: "0"
          - scope: surface_cover
            key: barren
            mode: override
            textValue: "0"
          - scope: surface_cover
            key: ruins
            mode: override
            textValue: "0"
          - scope: hydrology
            key: shallow
            mode: override
            textValue: "0"
          - scope: hydrology
            key: deep
            mode: override
            textValue: "0"
        disabled: false
---

# Appearance {#appearance}

![[pyrclsm|Pyroclasm]]{float: top-left}

Before you stands contained catastrophe – a roughly humanoid shape twelve feet tall, composed of roiling lava and burning rock held in violent cohesion. Its movements are aggressive and jerky, as if barely contained by the effort of maintaining form. Where it stands, the ground melts and the air shimmers. Magma drips from its limbs like sweat, and its breath is literally fire. The noise it makes is the hiss of lava striking water, the roar of volcanic eruption, the crackle of a world burning. When it looks at you, you are certain you are looking at something that simply wants to incinerate everything.

# Dossier {#dossier}

A Pyroclasm is volcanic devastation made animate – a fire elemental of tremendous power but less intelligent and more chaotic than larger fire creatures. It is born from active volcanoes and is drawn to places of heat and burning. A Pyroclasm encountered away from volcanic regions is likely an escaped binding, and it will consume and destroy everything in its path toward cooler water. In volcanic regions, Pyroclasms are natural phenomena, as inevitable as earthquakes and as destructive.

## Presentation

A Pyroclasm is roughly humanoid in shape, standing about twelve feet tall, and composed entirely of incandescent lava and burning rock. Its body is a writhing mass of molten matter that drips and flows but somehow maintains cohesion. Its core is white-hot and glows with extreme intensity. Where it moves, the ground melts or cracks from heat. Its hands and feet are defined by the flowing nature of lava, and it leaves trails of burning material in its wake.

## Key Behaviors

Pyroclasms are aggressive and destructive by nature. They are driven by hunger for fuel and by the compulsion to burn and incinerate. They show minimal intelligence and seem to have no instinct for self-preservation. They will continue attacking even when clearly losing, driven by rage and instinct. They are most active in volcanic regions and near sources of flame, and they become more aggressive and more powerful in such environments.

## Combat Strategy

Pyroclasms fight with destructive directness, charging and striking with overwhelming force. They use fire-based attacks indiscriminately, affecting everything around them including their own allies if present. They are too enraged to employ tactics and simply attack the nearest threat until it is defeated or flees. They are nearly fearless and will pursue enemies into dangerous terrain. Against water and cold, they become more cautious and evasive but rarely flee entirely.

## Attack Methods

### Lava Punch

The Pyroclasm strikes with a fist of molten matter, and the impact combines physical force with catastrophic heat. The strike can melt armor and burn flesh to ash. Victims struck are often incapacitated by the impact and the heat together.

### Fire Burst

The Pyroclasm explodes with flame in every direction, engulfing everything nearby in searing heat. The attack spreads to flammable materials and can ignite an entire area. Several bursts in succession can turn a location into a full conflagration.

### Lava Spray

The Pyroclasm vomits or sprays magma and burning material in a wide arc, coating everything it touches in dripping lava that continues to burn.

### Seismic Explosion

The Pyroclasm can cause localized eruptions of flame and lava that burst from the ground beneath opponents, leaving the ground burning and scorching everyone within reach.

## Special Abilities

### Volcanic Resilience

The Pyroclasm is immune to fire and heals from fire-based magic. It is harmed primarily by cold and water, which cause it to solidify and become slower and weaker.

### Thermal Destruction

The Pyroclasm's presence is inherently destructive. Everything nearby is subject to extreme heat. Metals melt, stone cracks, and wood ignites spontaneously.

### Lava Immersion

The Pyroclasm can immerse itself in lava or sources of extreme heat to heal and restore itself fully.

### Thermal Sense

The Pyroclasm can sense heat sources and can pursue victims by tracking their body heat. It can see in complete darkness.

## Additional Information

Water is the Pyroclasm's primary weakness. Large bodies of water can immobilize or harm it, and cold-based magic is highly effective. A Pyroclasm cannot remain in frozen terrain or in intense cold. A Pyroclasm destroyed far from lava sources may not reform. One destroyed in volcanic regions will likely return after several seasons. Permanent destruction requires either collapsing it into a large body of cold water, or taking it to regions of such intense cold that its heat cannot sustain its form. A settlement threatened by a Pyroclasm can sometimes force it toward water or cold regions to eliminate the threat without direct combat.

## Attributes

- **Strength:** 13-16 (1d4+12)

- **Endurance:** 13-16 (1d4+12)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 9-12 (1d4+8)

- **Perception:** 7-10 (1d4+6)

- **Aura:** 11-14 (1d4+10)

- **Will:** 11-14 (1d4+10)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 9-12 (1d4+8)
