---
shortcode: lthgnt
name: {full: Lithogiant, aliases: []}
type: being
subType: creature
description: "A titanic earth elemental that wanders mountain ranges by inscrutable paths, usually solitary but an apocalyptic threat when agitated or territorial."
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
    str: 1d6+52
    end: 1d4+16
    dex: 1d4+3
    agl: 1d4+3
    per: 1d4+5
    aur: 1d4+5
    wil: 1d4+8
    cre: 1d4+3
    rea: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 55}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 93}}
    - name: Crushing Blow
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Crushing Blow
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 9, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 22, aspect: blunt}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Seismic Stomp
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 42
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Seismic Stomp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 18, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 20, aspect: blunt}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Rock Throw
      type: skill
      system:
        shortcode: hurl
        subType: combattechnique
        masteryLevelBase: 42
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: hurl
          name: Rock Throw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 24, aspect: blunt}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 160
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Arms, shortcode: armszone, probWeight: 12}
          - {name: Torso, shortcode: torsozone, probWeight: 12}
          - {name: Legs, shortcode: legszone, probWeight: 18}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
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
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
      weight: {base: 49000, calc: "49000"}
      reachBase: 0
      bodyScaleBase: 2.85
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[lthgnt|Lithogiant]]{float=top-left}

The pass is a notch in the ridge, and beyond it the next valley is full of mist. Out of the mist, on the far side, a hill is walking. It is a giant, taller than a watchtower, built of rock and earth and grown over with turf and stunted pine, and it moves with immense slowness, one step and then a long pause and then another. Every step shakes the ground under your feet a mile away. Scree pours off its shoulders. It does not look at you. It looks at nothing; it is going somewhere, along a line only it can see, and the line goes through the pass you are standing in.

# Dossier {#dossier}

The Lithogiant is an earth elemental of titanic size: a spirit of the earth-aspect manifested as a man-shaped mass of stone and soil twenty-five to thirty feet tall and of a weight past measuring, which wanders the high mountain ranges along paths only it understands. It is usually solitary and usually indifferent to anything as small as a man, and when it is angered or something stands in its way, it is a disaster. One walks the [[place-vylariargn#the-cervaron-spine|Kervaron Spine]], the great arc of high mountains between the Vylarian peninsula and the eastern reaches of [[place-elavendre|Élavendre]], which the empire lists as its territory and the [[affiliation-aelndntrbs|Áelendan Tribes]] hold as sacred country. Like every elemental it can be destroyed in the material world, and it comes back, after a very long time.

## Presentation

The lithogiant has the rough shape of a man, two legs, a body, two arms and a head, but its proportions shift as it moves, and its body is stone and earth: slabs of granite, boulders, packed soil, gravel, with turf, moss and even small trees growing on its shoulders and back. Its eyes are deep hollows with a faint light far back in them. It moves so slowly that it seems to stop between steps, and every step shakes the ground for miles. When it stands still, it is a crag, and it may stand still for a season. It makes no sound but the grinding of its stone and the rattle of falling scree.

## In the Land

The Kervaron is snow on the peaks, forest in the deep valleys, glacier-fed rivers and high pastures that bloom for two months of the year, and its dozen narrow passes are the only practicable crossings from east to west. The lithogiant walks the length of the range, slowly, over years, from one end to the other and back. It seems drawn to places where the earth's power shows: old standing stones, sites of past earthquakes, glacier springs, places where the rock is strange. It goes over ridges and through valleys alike, and it does not go round anything. Where it has stood for a season, the ground is unstable for years afterward, and landslips and small quakes follow its track.

## Key Behaviors

The lithogiant walks its paths and stands still at its stopping places, sometimes for months. It pays no attention to men, herds or caravans that keep out of its way. It does not eat or sleep. When something attacks it or stands across its path, it destroys it, with overwhelming force and without any malice that anyone can see, and then walks on; it does not pursue, but it does flatten what is in front of it. It seems to know when the earth is about to move, and it is sometimes found at a place a few days before an earthquake strikes there. When its body is destroyed, it collapses into a heap of rock and earth, and its spirit takes years, perhaps centuries, to gather itself and rise again.

## What the Clans and the Caravans Do

The Áelendan of the Kervaron, whose religion holds the high peaks to be the dwellings of [[affiliation-firstgods|The First Gods]], know the lithogiant's paths, and they watch it as they watch the weather. When it comes toward a pass, the clan that holds the pass closes it to caravans and moves its herds off the high pastures, and the passage-gift that Vylarian mule-trains pay at the first camp buys, among other things, the news of where the walker is. The clans do not fight it; one elder says that a people who live on a mountain do not quarrel with it. Vylarian chancery maps mark the range as imperial territory with boundary-stones at the principal passes, and the lithogiant has walked through two of those stones and left nothing standing. The clans regard this as a comment.

## Signs

- A crag or a hill where there was none, on a ridge or in a valley, with fresh scree at its foot.
- Footprints the size of a threshing floor, pressed deep into turf and stone, at long intervals.
- Small quakes that come in a slow, regular rhythm, felt underfoot.
- Landslips and broken ground along a line across a valley, as if something had walked through it.
- Herds moved off the high pastures and a pass closed to caravans in the middle of the season.

## Combat Strategy

The lithogiant does not fight with cunning. It walks toward where it is going, and if anything attacks it or stands in its way, it strikes with overwhelming force: crushing blows, earthquakes from its stamp, thrown boulders and ground that buckles and opens under its enemies. It does not pursue those who flee, but it will methodically destroy whatever obstacle is in front of it. Water is its great weakness: flowing water erodes it and a flood or a deep river can do it real harm, and magic of wind can scatter what holds it together.

## Attack Methods

### Crushing Blow

The lithogiant swings an arm or brings down a fist, with the weight of a moving hillside behind it. A man struck is killed or shattered, and a building struck is rubble.

### Seismic Stomp

It raises a foot and brings it down, and the ground quakes for a long way round: walls fall, the earth cracks, and riders are thrown.

### Rock Throw

It tears boulders and slabs from the mountainside and hurls them, crushing buildings and anything sheltering behind them.

## Special Abilities

### Ground Manipulation

The ground under it shifts and buckles at its will, opening cracks and chasms, raising obstacles, and turning firm ground to sliding scree under its enemies.

### Titanic Strength

It moves boulders weighing hundreds of tons and reshapes the landscape without effort.

### Seismic Presence

The earth trembles round it, and the ground stays unstable where it has stood.

### Earth Elemental Resilience

Its body of stone and earth is nearly indestructible, and earth magic heals it. Water erodes and cracks it, and wind can scatter it.

### Geological Awareness

It perceives the structure of the mountains and knows where the earth is strange or about to move, and it walks accordingly.

## Attributes

- **Strength:** 53-58 (1d6+52)

- **Endurance:** 17-20 (1d4+16)

- **Dexterity:** 4-7 (1d4+3)

- **Agility:** 4-7 (1d4+3)

- **Perception:** 6-9 (1d4+5)

- **Aura:** 6-9 (1d4+5)

- **Will:** 9-12 (1d4+8)

- **Creativity:** 4-7 (1d4+3)

- **Reasoning:** 4-7 (1d4+3)
