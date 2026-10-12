---
shortcode: pyrclsm
name: {full: Pyroclasm, aliases: []}
type: being
subType: creature
description: "A chaotic fire elemental of animate volcanic devastation, born from active volcanoes and consuming everything in its path toward cooler waters."
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
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 36}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 65}}
    - name: Lava Punch
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Lava Punch
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 12, aspect: fire}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Lava Spray
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: spray
          name: Lava Spray
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 13, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 25
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Arms, shortcode: armszone, probWeight: 5}
          - {name: Torso, shortcode: torsozone, probWeight: 5}
          - {name: Legs, shortcode: legszone, probWeight: 8}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
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
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
      weight: {base: 4900, calc: "4900"}
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

![[pyrclsm|Pyroclasm]]{float=top-left}

The mountain has been rumbling for three days, and this morning the shrine on its summit is gone in a cloud of ash. Down the terraced shoulder, through the rice and the burning bamboo, something is walking. It is the shape of a man twice the height of a man, and it is made of lava: orange and white where it flows, black where it crusts and cracks, dripping fire that sets the terraces alight wherever it falls. It has no face, only a glare. It walks straight through a farmhouse, and the farmhouse bursts into flame and is gone. Then it turns toward the village below, and the bells begin to ring.

# Dossier {#dossier}

The Pyroclasm is a fire elemental of volcanic devastation: a spirit of the fire-aspect that manifests out of an active volcano as a twelve-foot giant of incandescent lava and burning rock, and walks out of the crater consuming everything in its path. It is powerful, chaotic, hardly intelligent and destroys everything it reaches, and it does nothing at all to save itself. It comes out of the volcanoes of [[place-jurthatrgn|Jürthāt]], the ring of nine volcanic islands east of Tānvür, when they erupt, and it walks down toward the sea. The Jürthāti read eruptions as heaven's attention to its favored land, and they read the pyroclasm the same way. Like every elemental it can be destroyed in the material world and it comes back, with the next eruption.

## Presentation

The pyroclasm is roughly man-shaped, about twelve feet tall, and built entirely of lava and burning rock: a writhing, dripping mass that flows and yet holds its shape, glowing orange, yellow and white at its core and crusted black where its surface cools and cracks. It has no features, only a blinding glare where a face would be. Fire drips from it and runs from its feet. It moves with a heavy, lurching stride, and everything it touches bursts into flame. The heat round it melts lead and cracks stone, and the roar of it is like a furnace with the door open.

## In the Land

Each of the Nine Mountains of Jürthāt is a volcanic peak, its shoulders terraced for rice and its summit kept for shrines, and the volcanism that built them is still active: eruptions, hot springs and earthquakes are part of ordinary life. A pyroclasm rises out of a mountain in eruption, out of the vent or a lava flow, and walks downhill, toward the sea, burning everything on its way: terraces, villages, cedar and pine forests, bamboo groves, shrines. It seems drawn by heat and burning and by the water at the bottom of the slope, and when it reaches the sea it walks into it and is destroyed in a great storm of steam. Between eruptions there are none.

## Key Behaviors

A pyroclasm is driven by a compulsion to burn and consume. It walks toward the nearest heat and the nearest fuel, and it attacks everything in its way, with no regard for its own safety. It does not hunt, plan or retreat. It senses heat and follows living warmth, and sees in complete darkness. It heals by wading into lava. When it is destroyed, by water, cold or the sea, it breaks into a mass of cooling black rock and steam, and its spirit goes back into the mountain to wait for the next eruption.

## What the Islanders Do

The Jürthāti treat an eruption as heaven's attention and a pyroclasm as heaven's instrument, and they respond with a discipline that outsiders find more frightening than the creature. When a mountain erupts and a pyroclasm comes out of it, the great lord of the island orders the villages in its path cleared, and his retainers hold the roads while the people go. The lord's [[lore-venduk|Vëndük]] retainers and the shrine priests try to turn its path toward the sea along a stream-bed, by flooding the terraces with water from the irrigation channels and building walls of wet earth across the slope, and they sometimes succeed. Where a pyroclasm has burned a village, the village is rebuilt on the same ground, because the ground has been chosen. Mainland [[affiliation-tngvkrrklei|Celestial Order]] scholars class the pyroclasm under the Lord of Fire's wildfire, the fires sent against a region in disorder, and say the islands' eruptions are the proof that the islands are disordered; the islanders say the same of the mainland.

## Signs

- A mountain that has rumbled for days and is throwing ash.
- A line of burning terraces, villages and forest running straight down a mountainside from a vent.
- Black, still-warm rock in a long trail across fields, glassy in places, with nothing growing on it.
- Steam rising in a great column from the sea at the foot of a burned slope.
- Animals of every kind fleeing downhill together, ahead of the fire.

## Combat Strategy

A pyroclasm does not fight with any plan. It walks into whatever is in front of it and strikes, bursts into flame round itself, sprays lava, and makes the ground erupt under its enemies, and it does all of this whether or not its own kind or anything else is caught in it. It does not retreat and does not stop. Water and cold are what stop it: a flood of water hardens its surface and slows it, a large body of water destroys it, and cold magic cracks it. Away from lava and heat it grows weaker.

## Attack Methods

### Lava Punch

The pyroclasm strikes with a fist of molten rock. The blow is crushing and the heat is worse: it melts armor and burns flesh to ash, and a man struck is usually down.

### Lava Spray

It sprays molten rock and burning debris in a wide arc, coating everything it hits in lava that goes on burning.

## Special Abilities

### Fire Burst

It explodes with flame in every direction, engulfing everything near it and setting the whole area alight. Several bursts turn a place into a firestorm.

### Seismic Explosion

It makes the ground under its enemies burst open in fountains of flame and lava, leaving the ground burning.

### Volcanic Resilience

Fire does not harm it, and fire magic heals it. Cold and water harden it, slow it and weaken it.

### Thermal Destruction

Everything near it is subject to terrible heat: metal melts, stone cracks, and wood bursts into flame on its own.

### Lava Immersion

Wading into lava or great heat heals it completely.

### Thermal Sense

It senses heat, follows the warmth of living bodies, and sees in total darkness.

## Attributes

- **Strength:** 34-39 (1d6+33)

- **Endurance:** 13-16 (1d4+12)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 9-12 (1d4+8)

- **Perception:** 7-10 (1d4+6)

- **Aura:** 11-14 (1d4+10)

- **Will:** 11-14 (1d4+10)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 9-12 (1d4+8)
