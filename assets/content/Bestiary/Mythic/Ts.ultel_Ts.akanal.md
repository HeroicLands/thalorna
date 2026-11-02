---
shortcode: mtnshaker
name: {full: "Ts'ultel Ts'akanal", en: [The Mountain-Shaker]}
type: being
subType: creature
description: "A white thing of the Long Winter as large as a hill, felt far more often than seen, whose waking shakes the ice and moves the land a party is walking through."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: sohl-none-icon-mountains
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
  # Nobody fights a mountain-shaker. The one strike mode is what happens to a
  # party standing where it rolls over, and the attributes carry its scale.
  attrRollFormula:
    str: 2d6+80
    end: 2d6+60
    agl: 1d4+1
    per: 1d6+8
    aur: 1d6+14
    wil: 1d6+20
    rea: 1d4+2
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 87}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 67}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 23}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 5}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 100}}
    - name: Roll Over
      type: skill
      system:
        shortcode: rollover
        subType: combattechnique
        masteryLevelBase: 40
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: rollover
          name: Roll Over
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 4, die: 6, modifier: 10, aspect: blunt}
          lengthBase: 30
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: true, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, trample: true}
  system:
    body:
      structure:
        zones:
          - {name: Back, shortcode: backzone, probWeight: 10}
          - {name: Flanks, shortcode: flankzone, probWeight: 4}
          - {name: Underside, shortcode: undersidezone, probWeight: 1}
        parts:
          - name: Back
            shortcode: backpart
            bodyZoneCode: backzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Flanks
            shortcode: flankpart
            bodyZoneCode: flankzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Underside
            shortcode: undersidepart
            bodyZoneCode: undersidezone
            roles: [vital]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Back
            shortcode: backloc
            bodyPartCode: backpart
            bleedingSusceptibility: none
            amputability: none
            shockValue: 1
            probWeight: 10
            protectionBase: &a1 {blunt: 14, edged: 14, piercing: 14, fire: 10}
          - name: Flanks
            shortcode: flankloc
            bodyPartCode: flankpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 1
            probWeight: 10
            protectionBase: *a1
          - name: Underside
            shortcode: undersideloc
            bodyPartCode: undersidepart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 8, piercing: 8, fire: 6}
      weight: {base: 100000, calc: "100000"}
      reachBase: 0
      bodyScaleBase: 5
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: alpine, mode: add, textValue: "0"}
          - {scope: surface_cover, key: barren, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

It starts as a sound below hearing. The snow under your boots buzzes, and the cord in your hand shivers along its whole length, and then the ice moves: a long, slow shudder that runs under the party from somewhere to the south and goes on and on, longer than any earthquake, while the snow pours off the slopes on either side in white rivers. Nobody can stand. When it stops, the silence is the loudest thing you have ever heard. Far off across the white, where a low ridge lay along the horizon at dawn, there is a long hollow in the snow, steaming in the cold, and the ridge is gone.

# Dossier {#dossier}

The ts'ultel ts'akanal is the Mountain-Shaker of the returners' accounts, the largest of the white beasts of [[place-longwinter|the Long Winter]]: a thing as large as a hill, lying under the snow and ice, which is felt far more often than it is seen. When it wakes and moves, the ground shakes for an hour together across a day's walk of ice. Its name in the priests' tongue means the mountain that moves.

## Presentation

Nobody has seen the whole of one. The returners who have seen anything describe a long white back, ridged like a range of low hills and as long as a town, rising out of the snowfield with the snow sliding off it like water off a swimmer, and settling again. The back is rough and white, armored with something like plates of old ice, and it steams. One account at the gate, from a returner who walked close, speaks of a flank like a cliff of white hide, warm, with frost forming on it and falling off it as it breathed. None of the accounts speaks of a head, an eye or a limb.

## In the Land

Mountain-shakers lie in the snowfields and under the glaciers of the Long Winter, from the hills where the ice begins south toward [[place-iceshore|the Ice Shore]]. They are few, and far apart. Nothing in the land shows where one is lying, except that the snow over it lies a little smoother and higher than the snow around.

## Key Behaviors

A mountain-shaker lies still under the snow for most of its life. At long intervals it wakes and moves, slowly, rolling or crawling some miles across the ice, and lies down again. Its moving shakes the ground for a day's walk around. The shaking brings the snow off every slope, opens crevasses across the ice and closes others, and breaks glaciers at their feet. Whether it moves for food or for any other reason, no account says. It takes no notice of a party unless the party is where it is going.

## How the Day Ends

The mountain-shaker ends a day by moving the land. A party caught in a shaking cannot stand, and loses the hour to it, and the slopes it was walking under come down on it. When the ground is still again, the land is not the land it was. The crevasse the party crossed in the morning is a wall of broken ice. The hills to the south are where the hills to the east were. The route a returner sold at the gate, so many knots on the cord to this ridge and so many to that one, no longer matches anything in sight. The party ends the day where it stands, digging out its dead and its baggage, with no sure road forward and no sure road back, in a cold that kills anyone who stops moving.

## What the Returners Do

The few who have come back from the Long Winter teach two things. A party walks wide of any long smooth swell in the snowfields, however much farther that makes the day, and a party that feels the first buzz in the snow gets off the slopes and onto open level ice at once, roped together, and lies flat. They steer by the sun and the stars and never by the land, because a shaking moves every landmark there is.

## Signs

- A buzzing in the snow underfoot and a shiver along a cord held taut, before any shaking.
- A long smooth swell in the snowfield, higher than the snow around it, with no rock under it.
- A column of mist rising from the ice on a still day, a long way off, swelling and fading slowly, like breath.
- A long hollow in the snow, steaming, where a ridge stood the day before.
- Fresh crevasses running for miles across the ice in long curves.

## Combat Strategy

A mountain-shaker does not fight. Spears and arrows thrown at its back go into the snow lying on it. What harms a party is the shaking and the snow it brings down, and anything that stands where the mountain-shaker rolls over is crushed.

## Attack Methods

### Roll Over

It rolls or crawls over whatever lies in its path, and a man or a whole party in the way is crushed into the ice.

## Special Abilities

### The Shaking

When it moves the ground shakes across a day's walk of ice for as long as an hour. No one can stand or keep his footing, snow comes off every slope, and crevasses open and close.

### Size

It is as large as a hill, and nothing a party carries can hurt it in any way that matters.

### Buried

It lies under the snow so long and so still that a party can walk across its back without knowing.

## Attributes

Strength
: 82-92 (2d6+80)

Endurance
: 62-72 (2d6+60)

Agility
: 2-5 (1d4+1)

Perception
: 9-14 (1d6+8)

Aura
: 15-20 (1d6+14)

Will
: 21-26 (1d6+20)

Reasoning
: 3-6 (1d4+2)

Creativity
: 3-6 (1d4+2)

## See Also

[[place-longwinter|The Long Winter]]
: the frozen south where they lie

[[place-iceshore|The Ice Shore]]
: the frozen coast at the continent's end

[[place-xelemixbalrgn|Shelem Ish'bal Region]]
: the waste
