---
shortcode: flmwrth
name: {full: Flamewraith, aliases: []}
type: being
subType: creature
description: "A volatile fire-spirit born from pyromancers consumed by their own infernos, drawn to flame and capable of devastating whole regions once unbound."
tags: [spirit]
data:
  packFolder: spirit
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
  kbcat: spirit
  attrRollFormula:
    str: 1d4+6
    end: 1d4+8
    dex: 1d4+12
    agl: 1d4+14
    per: 1d4+8
    aur: 1d4+12
    wil: 1d4+10
    rea: 1d4+6
    cre: 1d4+8
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 25}}
    - name: Incendiary Touch
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Incendiary Touch
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: fire}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Fireball
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: spray
          name: Fireball
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 15
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 0.88
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: wetlands, mode: override, textValue: "0"}
          - {scope: surface_cover, key: dunes, mode: override, textValue: "0"}
          - {scope: surface_cover, key: mixed_forest, mode: override, textValue: "0"}
          - {scope: surface_cover, key: barren, mode: override, textValue: "0"}
          - {scope: hydrology, key: shallow, mode: override, textValue: "0"}
          - {scope: hydrology, key: deep, mode: override, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[flmwrth|Flamewraith]]{float=top-left}

The hill-fort burned so long ago that grass grows over the fallen roof-beams, but the stones of the inner tower are still black, and fused like glass on one side. In the doorway of the tower, something is standing that the wind does not move. It is the shape of a man, made of fire: crimson at the edges, white at the heart, flickering and blurring and re-forming, with two darker hollows where eyes would be. The grass at its feet does not burn. It looks at you, and then it looks at the torch in your hand, and it comes out of the doorway toward the torch with a sound like a long indrawn breath.

# Dossier {#dossier}

The Flamewraith is a spirit of fire: most often what is left of a mage who died in his own fire, his soul unreceived and bound to the place or the thing that burned him, and now a shape of living flame that hungers for fuel and burns what it touches. It passes through walls, it bursts into flame round itself, and it cannot be ended while the object it is bound to survives. The flamewraith best known in the west haunts a burned hill-fort in the hills of [[place-helionis|Heliónis]], near [[affiliation-theradon|Therádon]]. It dates from the Helionite war against the Vylarian Republic, when the Republic's dragons made the mage-warlords' spells turn back on them, and some of those mages burned in their own sorcery.

## Presentation

A flamewraith has the shape of a person, six feet or so tall, made entirely of fire, crimson and orange at the edges and white at the heart, constantly shifting, its outline blurring and re-forming. Where its face would be there are only darker hollows. It moves without footsteps, and it can pass through stone and timber as smoke passes through a screen. The heat round it is fierce and metal near it grows hot. It does not burn what it does not mean to burn, and it means to burn almost everything.

## In the Land

During the war of 335 to 312 BF the mage-warlords of Heliónis held forts in the hills, and near the Republic's dragons their sorceries misfired and detonated in their hands. The hill-fort above the road to Therádon is one of the places where that happened, and the flamewraith is bound there: to the tower where it died, and to something in the tower, a mage's focus or a ring, that the Helionites say was never found. It does not leave the fort's ruins by day. At night, when it senses fire, a shepherd's lamp, a traveler's camp, a burning field, it goes toward it, and it has burned farmsteads in the valley below.

## Key Behaviors

A flamewraith hungers for fuel and burns compulsively. It is drawn to flame of any kind and will abandon anything else to go to a fire it senses. It does not sleep, eat or rest; it rages, or it waits. It remembers little of whoever it was, and what it remembers is the burning. When its fire is put out or scattered, it is gone for a time and re-forms, after three days, at the object it is bound to, and it cannot be ended until that object is destroyed. Some flamewraiths are made deliberately: a spirit summoned and bound to a burning object by a mage who means to use it, which is a bad bargain for the mage.

## What the Valley People Do

The farmers and shepherds of the valley below the hill-fort light no fires after dark in sight of the fort, keep their lamps behind shutters, and roof their barns with tile. A household that sees a light moving down from the fort at night throws water on its hearth and goes out of the house. The [[affiliation-ordoarcanis|Ordo Arcanis]], whose founding college the mage-warlords came from, has sent scholars to the fort to find the object the flamewraith is bound to, because destroying it would end the creature and studying it would tell them what the mage-warlords knew. None of the scholars has found it. Helionite teachers of the older colleges bring their students to the valley, in daylight, as a lesson in what the ethical limits of arcane power look like when they are ignored.

## Signs

- A ruin whose stones are blackened and fused like glass on one side, and grass growing round them unburned.
- A light moving at night through a ruin where nobody lives, brightening and dimming like breathing.
- Fires that start in a valley on still nights, at lamps and hearths, with no one to light them.
- A sudden heat on the skin in the dark, and metal growing warm in the hand.
- Shepherds who keep their fires out and their lamps shuttered in a cold season.

## Combat Strategy

A flamewraith fights without fear, because it knows it will re-form. It circles its enemies, passing through walls and trees to strike from new directions, and touches them to burn. When they bunch, it pulls in its fire and bursts outward. Against those who cannot hurt it with their weapons, it takes its time. It breaks off any fight at once to go to a bigger fire. Cold and water weaken it badly, and a large body of water can trap it; destroying the bound object ends it.

## Attack Methods

### Incendiary Touch

The flamewraith touches flesh or cloth and the heat spikes at once to agony, burning through armor and clothes into the muscle beneath. The burn is deep and slow to heal.

### Fireball

The flamewraith draws its scattered fire together and bursts outward in a blast of flame and burning debris that engulfs everyone near it and sets alight whatever will burn.

## Special Abilities

### Incorporeal Form

It passes through solid matter like mist and is only partly present in the world, so that weapons do it little harm. Cold and water touch it fully.

### Binding Anchor

Its existence is tied to one object. While that object survives, the flamewraith cannot be ended: put out, it re-forms fully after three days. Destroying the object ends it.

### Heat Aura

The air within thirty feet of it is hot enough to burn exposed skin over time, anything that will burn near it catches fire, and metal grows too hot to hold.

## Attributes

- **Strength:** 7-10 (1d4+6)

- **Endurance:** 9-12 (1d4+8)

- **Dexterity:** 13-16 (1d4+12)

- **Agility:** 15-18 (1d4+14)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 13-16 (1d4+12)

- **Will:** 11-14 (1d4+10)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 9-12 (1d4+8)
