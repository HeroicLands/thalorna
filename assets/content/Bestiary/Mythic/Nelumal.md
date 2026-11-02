---
shortcode: jarkeeper
name: {full: "Ne'lumal", en: [The Jar-Keeper]}
type: being
subType: creature
description: "A long armored thing of the waste, neither snake nor lizard, that lies under the gravel or the swamp water by day and comes at night for the water a party carries."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: sohl-none-icon-sandsnake
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
    str: 1d6+16
    end: 1d6+16
    agl: 1d6+6
    per: 1d6+10
    snt: 1d6+14
    aur: 1d6+6
    wil: 1d6+10
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 70}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, clench: true, armorReduction: 1}
    - name: Roll
      type: skill
      system:
        shortcode: roll
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: roll
          name: Roll
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 4, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forebody, shortcode: torsozone, probWeight: 9}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 8}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindbodyzone
            roles: []
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
            protectionBase: &a1 {blunt: 6, edged: 7, piercing: 6, fire: 6}
          - name: Eye Ridge
            shortcode: eyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 1, fire: 2}
          - name: Forebody
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: *a1
          - name: Flank Legs
            shortcode: flanklegloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 1
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 2, fire: 3}
          - name: Hindbody
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: *a1
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: *a1
      weight: {base: 1200, calc: "1200"}
      reachBase: 0
      bodyScaleBase: 1.6
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: barren, mode: add, textValue: "0"}
          - {scope: surface_cover, key: wetlands, mode: add, textValue: "0"}
          - {scope: hydrology, key: shallow, mode: add, textValue: "0"}
        disabled: false
      - medium: aquatic
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
---

# Appearance {#appearance}

You wake because the waterskin under your head is moving. It is cold, and thin, and going slack. In the starlight a long gray back lies across the camp from the embers to the brush, heavy as a fallen tree and rough as the gravel it came out of, and at its near end a flat head lies on your pile of skins with its jaw a hand's breadth from your ear. A reed-thin tongue runs from its mouth into the leather. Along its side, row after row, short legs you did not see a moment ago are unfolding out of slots in its skin, and the gravel shifts under all of them at once. On top of its head, two eyes watch you, quite close together, and blink.

# Dossier {#dossier}

The ne'lumal is the Jar-Keeper of the returners' accounts, the massive reptilian thing of the waste that is neither snake nor lizard: a long, low, armored body with legs that fold away into its sides, so that it has many legs or none as it pleases. It lies under the gravel of [[place-thethirst|the Thirst]] and under the brown water of [[place-deadwater|the Dead Water]], and it comes out at night for one thing above all, the water a party carries. Its name in the priests' tongue means the jar-keeper.

## Presentation

A ne'lumal is as long as three men lying head to foot, and as thick through as a barrel. Its back and flanks are covered in small, close, gravel-colored scales that look like the ground it lies in, and its belly is paler and softer. Its head is flat and wedge-shaped, with a narrow mouth full of short teeth, and its two eyes sit together on a low ridge on top, so that it can lie buried with only the ridge above the gravel or the water. Its tongue is long, hollow and stiff, like a reed, and it drinks through it.

Along each side of its body runs a row of slots, and in each slot a short, many-jointed leg folds flat. Under the gravel or in water it keeps them folded and moves like a snake. On open ground it unfolds them, forty or more, and walks quickly and low, with its whole length clear of the ground, like nothing else that lives.

## In the Land

In the Thirst it lies under the gravel near the springs and along the routes between them, in the heat of the day, and comes up after dark. In the Dead Water it lies in the channels and along the sand ridges, with its eye ridge above the surface, and it is the swamp's commonest large beast. It does not enter [[place-sweetwater|the Sweet Water]].

## Key Behaviors

A ne'lumal smells water a long way off, through a skin, a jar or the wall of a cask, and it comes to the water a party carries rather than to any spring or channel. It drinks the swamp water and the poisoned springs of the Thirst as readily as clean water and takes no harm from either. It drinks as much as a party carries in a week, at one sitting, through its tongue, and then goes back under for a month.

It does not hunt men. It bites whatever stands between it and the water, and it bites hard, and it rolls over a man who strikes at it.

## How the Day Ends

The ne'lumal ends a party's day before the day begins. It comes in the middle of the night, under the gravel to the edge of the camp and up through it, and the party wakes, if it wakes at all, to a long gray back across the camp and its waterskins going slack. In the morning there is a trench in the gravel leading away, a smell of wet stone, and nothing to drink.

In the Thirst that means a day that has to be walked to the nearest spring, wherever the cords put it, and the nearest spring is commonly a week off. In the Dead Water it means a party poling through a swamp full of water it cannot drink, with its casks holed and empty. Either way, the party that met a ne'lumal in the night spends the next days doing nothing but trying to reach water.

## What the Returners Do

A party in the Thirst sleeps on its water, with the skins piled under the sleepers in the middle of the camp, so that nothing reaches them without lifting a man. Returners carry one skin filled at the last poisoned spring, mark it with a knot, and bury it a bowshot outside the camp each night, and many mornings it is gone and the rest are not. On a raft in the Dead Water, the casks ride in the middle of the deck, and the pole-men strike at any eye ridge in the water near them.

Its scales come back to the gate in packs and sell as a curiosity: a scale held in the hand turns cold whenever there is water nearby, and a few treasure-seekers carry one for that reason.

## Signs

- A low ridge in the gravel near a spring, with two small knobs at one end.
- A trench in the gravel a yard wide, running from nowhere to a camp's edge and away again.
- Two eyes close together on a ridge above the surface of a channel, which sink when looked at.
- A waterskin found flat and dry with a single small round hole in it.
- Rows of small paired footprints, many abreast, in the mud of a sand ridge.

## Combat Strategy

The ne'lumal comes for the water and fights only to reach it. It bites whatever is between it and the water, holds it, and rolls, dragging the man over and under its weight. Once it has drunk it goes back under the gravel or the water, and it cannot be dug out or followed. A ne'lumal that is hurt badly goes under at once and is gone, and a party that has driven one off by wounding it usually finds its skins already empty.

## Attack Methods

### Bite

The narrow jaws close on a limb and hold, and the short teeth go through leather and cotton armor alike.

### Roll

It turns its whole length over on top of what it holds, crushing it into the gravel or holding it under the water.

## Special Abilities

### Many Legs or None

It moves like a snake with its legs folded and walks like a long, low beast with them out, and it changes between the two in a moment.

### Scaled Hide

The close scales turn cuts and thrusts, and it lies so still in the gravel or the water that a party walks past it in daylight.

### Burrowing

It goes through gravel and mud as easily as through water, and comes up where it pleases.

### Water Sense

It smells water through leather, clay and wood from a long way off, and knows which of a party's skins are full.

## Attributes

Strength
: 17-22 (1d6+16)

Endurance
: 17-22 (1d6+16)

Agility
: 7-12 (1d6+6)

Perception
: 11-16 (1d6+10)

Scent
: 15-20 (1d6+14)

Aura
: 7-12 (1d6+6)

Will
: 11-16 (1d6+10)

Reasoning
: 6-9 (1d4+5)

Creativity
: 4-7 (1d4+3)

## See Also

[[place-thethirst|The Thirst]]
: the gravel desert, where it lies under the plains

[[place-deadwater|The Dead Water]]
: the swamps, where it lies in the channels

[[place-xelemixbalrgn|Shelem Ish'bal Region]]
: the waste
