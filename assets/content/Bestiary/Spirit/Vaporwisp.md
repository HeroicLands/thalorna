---
shortcode: vprwsp
name: {full: Vaporwisp}
type: being
subType: creature
description: "A boundary-dwelling spirit at home in neither realm, drawn to fog, mist, and thresholds where day and night or forest and clearing meet."
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
    complexion: []
    extra_features: []
sohl:
  kbcat: spirit
  attrRollFormula:
    str: 1d6+4
    end: 1d6+6
    dex: 1d4+13
    agl: 1d6+14
    per: 1d6+10
    aur: 1d4+13
    wil: 1d4+9
    rea: 1d6+6
    cre: 1d4+9
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 23}}
    - name: Cold Touch
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 76
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Cold Touch
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Core, shortcode: corezone, probWeight: 1}
          - {name: Shroud, shortcode: shroudzone, probWeight: 2}
        parts:
          - name: Core
            shortcode: corepart
            bodyZoneCode: corezone
            roles: [vital, core]
            canHoldItem: false
            probWeight: 10
          - name: Shroud
            shortcode: shroudpart
            bodyZoneCode: shroudzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Core
            shortcode: coreloc
            bodyPartCode: corepart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Shroud
            shortcode: shroudloc
            bodyPartCode: shroudpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[vprwsp|Vaporwisp]]{float=top-left}

The fog came in off the sea at dusk and has filled the lane between the stone walls so thickly that you can see only the wall beside your hand. Ahead, where the lane meets the old standing stone, the fog is thicker still, and it is the wrong shape: taller than a man, roughly a man, with two faint pale lights where eyes would be. It does not walk toward you. It thins where it is and thickens where you are, and the cold comes first, a cold that is not the fog's, deeper than the sea's, that goes in through your coat and your skin and settles somewhere behind your ribs.

# Dossier {#dossier}

The Vaporwisp is a spirit of the boundary, at home in neither the material world nor the spirit realm: a shape of mist and fog, roughly man-sized, with two pale lights for eyes, that comes where one thing turns into another, fog banks, dusk and dawn, the edges of woods, the thresholds of graves. It drains warmth and life by its touch and can smother a man with its mist. It is met on the fog-bound western coast of [[place-galvaren|Galvaren]], where the coast is littered with stone circles, standing stones and passage graves older than the Tarveni, and where the folk keep a body of belief about the places where the mortal world thins.

## Presentation

A vaporwisp is a shape without clear edges, a roughly human form of mist five to seven feet tall, held together by something no one understands. Its size and outline shift with the fog round it, and in a thick fog it is the fog. Its only steady feature is its eyes, two faint pale lights. It makes no sound, except sometimes a sound like breath let out slowly. The air round it is bitterly cold, a deep cold that seems to go into the spirit as well as the flesh, and it leaves a rime of frost on stone where it has passed.

## In the Land

Galvaren is a country of rain, fog, deep forests and rocky shores facing the open ocean, and its fishing fleets are the largest in western [[place-ankrscntnnt|Ankaris]]. The vaporwisps come with the sea-fog, at dusk and dawn and through foggy nights, and they haunt the thresholds of the coast: the passage graves and the stone circles, the edges of the woods where they meet the fields, the fords, and the harbor mouths of the fishing towns where the fog lies thickest. They are drawn to water, mist and cold and to places touched by recent death. When the fog lifts they go with it, and sunlight drives them into the stones.

## Key Behaviors

A vaporwisp drifts where the boundary is thin and comes on whatever living thing is in it. It does not hunt in any ordinary sense; it seems drawn to warmth and life, and it takes them by touch, leaving its victim cold, weak and slow to recover, sometimes dead of the cold in a mild night. It surrounds a man's head with its mist when it wants him dead, and he chokes. It passes through walls and stones and comes out of them. It avoids fights and slips away into fog or stone if threatened.

## What the Galváreni Do

The Galváreni take their ghost stories more seriously than anyone else in [[place-tarvenirgn|Tarvénia]], and the vaporwisp is the reason some of their customs exist. A fisherman's family lights a lamp in the window on a foggy night and keeps it burning till the boats are home, because the wisps shun a steady light. Nobody walks between the standing stones in a fog. A man found at dawn on the shore, cold and weak, is put by the fire and made to talk, and kept awake till noon, because a man the wisp has touched who sleeps cold sometimes does not wake. The fishing crews carry a smith's hammer in the boat, because iron struck hard breaks up a wisp's shape, and the priests of the faiths of the [[affiliation-arldnpnthn|Aureldian Pantheon]] who tolerate the old stories with varying patience bless the harbor stones at the turn of the year all the same.

## Signs

- A fog that is thicker and colder in one place, round a standing stone or a grave, than anywhere else.
- Frost on stones on a mild night, in a line, as if something cold had walked there.
- Two pale lights in the fog at the height of a man's eyes, which go out when looked at.
- Livestock found at dawn standing with their heads down, shivering, in the middle of a field.
- Lamps lit in every window of a fishing village on a foggy night.

## Combat Strategy

A vaporwisp avoids a straight fight. It comes out of a wall or a stone to touch and drain, and slips back through. It surrounds its target's head with mist to smother him, and it wraps a group in fog so thick they cannot see each other. It withdraws when it is hurt. Blunt blows, a hammer or a mace, break up its shape, fire and explosions scatter it, and blessed ground and warded doors keep it out.

## Attack Methods

### Cold Touch

Mist solidifies enough to touch, and the touch is a cold that goes past the flesh into the spirit. The victim feels his strength and his will drain, as if the creature were taking his warmth.

## Special Abilities

### Mist Suffocation

The wisp wraps its mist round a man's head and fills his mouth and lungs. The mist is more like smoke than water, and he slowly chokes.

### Surprise Ambush

It comes out of solid stone or a wall to strike without warning, and goes back through to escape.

### Fog Form

It becomes nearly pure fog, invisible but for its eyes, moves through mist as if through open air, and is almost immune to weapons in that form.

### Phase Shift

It passes through stone, wood and metal. Blessed ground and warded thresholds stop it.

### Chilling Aura

Within thirty feet the air is cold enough to tire and weaken those who stay, and the harm builds the longer they stay.

### Life Drain

Its touch draws warmth and life from the living, leaving them weak and diminished.

### Blunt Force and Fire

Heavy blunt blows break up its shape and fire scatters it; it fears both.

## Attributes

Strength
: 5-10 (1d6+4)

Endurance
: 7-12 (1d6+6)

Dexterity
: 14-17 (1d4+13)

Agility
: 15-20 (1d6+14)

Perception
: 11-16 (1d6+10)

Aura
: 14-17 (1d4+13)

Will
: 10-13 (1d4+9)

Reasoning
: 7-12 (1d6+6)

Creativity
: 10-13 (1d4+9)
