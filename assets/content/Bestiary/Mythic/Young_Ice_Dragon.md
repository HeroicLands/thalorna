---
shortcode: yngicdrg
name: {full: Young Ice Dragon}
type: being
subType: creature
description: "A young apex ice-wyrm of high peaks and glaciers, methodical and cold rather than aggressive, mastering the frozen air."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: icon-dragonheadft
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
    str: 1d6+33
    end: 1d6+24
    dex: 1d4+4
    agl: 1d6+7
    per: 1d6+12
    snt: 1d4+1
    aur: 1d6+9
    wil: 1d6+14
    rea: 1d6+8
    cre: 1d4+7
    emp: 1d4+5
    elo: 1d6+8
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 36}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 27}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 71
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 13, aspect: piercing}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 3}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: 12, aspect: edged}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 11, aspect: blunt}
          lengthBase: 6
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 75
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: breath
          name: Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 11, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 40
          drawBase: 0
          traits: {breath: true, impactBands: 11 · 7}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 4}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 3}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
          - {name: Tail, shortcode: tailzone, probWeight: 3}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Torso
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
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: tailzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: &a1 {blunt: 16, edged: 18, piercing: 17, fire: 15}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 7
            protectionBase: *a1
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 7
            protectionBase: &a2 {blunt: 16, edged: 18, piercing: 17, fire: 15}
          - name: Left Fore Foot
            shortcode: lfftloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a3 {blunt: 14, edged: 16, piercing: 15, fire: 13}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 7
            protectionBase: *a2
          - name: Right Fore Foot
            shortcode: rfftloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: *a3
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: &a5 {blunt: 10, edged: 12, piercing: 11, fire: 9}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: &a4 {blunt: 16, edged: 18, piercing: 17, fire: 15}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: *a4
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: *a5
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 7
            protectionBase: &a6 {blunt: 16, edged: 18, piercing: 17, fire: 15}
          - name: Left Hind Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a7 {blunt: 14, edged: 16, piercing: 15, fire: 13}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 7
            protectionBase: *a6
          - name: Right Hind Foot
            shortcode: rhftloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: *a7
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 14, edged: 16, piercing: 15, fire: 13}
      weight: {base: 1000, calc: "1000"}
      reachBase: 0
      bodyScaleBase: 2.16
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 200
        leaguesPerWatch: 14
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The glacier fills the head of the valley like a frozen river, blue in its cracks, and the wind off it is bitter. Something moves on the ice. A dragon, white and pale blue, the color of the glacier itself, about the length of a longship, picking its way along a ridge of ice with slow, deliberate steps, its long neck swinging as it looks down into the valley. Frost smokes from its nostrils. It stops, and turns its head, and fixes you with eyes as pale and clear as meltwater, and holds the look for a long time, quite still. Then it opens its wings, and the cold that comes down the valley ahead of it freezes the breath in your beard.

# Dossier {#dossier}

The Young Ice Dragon is an ice dragon in its first century or so: sixteen to twenty-four feet long, with wings of twenty-four feet and more, a hunter of high peaks and glaciers that is methodical and cold where a young fire dragon would be reckless. It masters the frozen air, breathes supercooled mist that freezes flesh, and radiates a cold that kills. Like every dragon it is a mortal creature with a soul of vast scale, and its channeling floods the magic round it so that a mage's workings misfire near it. It was hatched long after the [Vylarian Republic]{.name data-type="affiliation/polity"} broke faith with the dragons, and it carries that memory as every dragon does. One hunts the glacial valleys and high tundra behind the coast of [[place-nordheim|Nordheim]], where the caribou herds cross the high plateau and the most isolated clans of the north live far from any harbor.

## Presentation

A young ice dragon is lean, long-necked and long-tailed, built for climbing ice and riding cold winds. Its scales are white, pale blue and gray, translucent at the edges like old ice, and frost forms on them in still air. Its eyes are pale and clear. Its wings are broad and pale, and when they are spread the light through them is blue. Frost smokes from its nostrils and its breath leaves rime on rock. The air round it is bitterly cold, and frostbite comes quickly to those who stay near. It moves deliberately and silently, and it watches for a long time before it acts.

## In the Land

Behind Nordheim's fjord coast the interior mixes boreal forest, glacial valleys and high tundra, and in the long winter the country is dark for months. The young ice dragon has claimed a glacier at the head of a valley in the high country, with a lair in the ice caves under it, and it hunts the plateau round it: caribou, elk, musk-oxen and the herds of the clans that follow the caribou. In winter it ranges widely through the dark, and in summer it keeps to the glacier and the high snow. It is still building its territory and its hoard, and it is seen more often than an older dragon would be, sitting on a ridge of ice above a valley, watching.

## Key Behaviors

A young ice dragon is patient and methodical. It studies its prey and its ground before it hunts, chooses its moment, and strikes from above out of a winter storm or the dark. It does not waste effort. It is territorial and drives off other predators, wolves, bears, other dragons, but it is slower to rage than a young fire dragon, and it can be curious about men and watch them for days. It gathers a hoard of what it takes, bright metal and carved bone from the clans' camps. It remembers what its kind remembers about humans, and it is wary of them.

## What the Clans Do

The highland clans of the plateau, who follow the caribou far from any harbor and keep to the old places, have lived beside ice dragons in the high country for longer than the kingdom's skalds can count, and they treat the dragon as part of the winter. They move their herds away from the glacier when the frost comes early, leave the carcass of a caribou on the ice at the start of each winter where the dragon can see it, and do not hunt on its glacier. A clan that has lost herds to it sends its best hunters to the coast to ask the hall for help, and the hall, which is a long way off and has its own troubles, sends advice. The skalds in the coastal halls tell of heroes who went up to the ice to kill a dragon, and in the halls nearest the high country the tales end badly.

## Signs

- A glacier that has advanced down a valley faster than glaciers move.
- Caribou and musk-oxen found frozen solid where they stood, with great bites taken from them.
- Rime on the rocks of a ridge in summer, in a line, as if something cold had lain there.
- Wing-shaped shadows on the snow under a clear sky, and a sudden fall in the cold.
- Ice caves at the snout of a glacier that breathe out air colder than the glacier itself.

## Combat Strategy

A young ice dragon fights with patience. It strikes from the air out of storm or darkness, breathes its freezing mist to slow and trap its enemies, and closes on those the cold has caught. It keeps out of reach, uses the ice and the snow as its ground, and leads its enemies onto ice that will not hold them. It retreats from a fight that goes badly and comes back when the weather is worse. Fire and heat are what it fears.

## Attack Methods

### Bite

The dragon bites with long, sharp teeth, and its bite freezes as well as tears: the flesh round the wound goes white and numb.

### Claw

It rakes with hooked claws made for gripping ice, tearing armor and flesh and pinning what it seizes.

### Tail

It sweeps its long tail to knock men down, onto the ice and off ledges.

### Breath

It breathes a spreading cloud of supercooled mist and ice crystals fifteen feet long. Those caught in it are seared by the cold, slowed and stiffened, and left open to the next attack.

## Special Abilities

### Flight

It flies strongly and rides the cold winds of the high country with ease, fighting in the air for as long as it likes.

### Armored Scales

Its scales turn most blows; ordinary weapons rarely bite deep.

### Cold Aura

Within fifty feet the cold is lethal over time: a man's warmth drains in minutes and frostbite follows, the worse the closer and the longer.

### Cold Immunity

Cold does not harm it. Fire and heat hurt it more than anything else.

### Unraveling Presence

Its channeling floods the currents of magic round it. Near it, a mage's workings come apart: spells misfire, wards fail, and partly channeled power discharges wildly, often on the mage.

## Attributes

Strength
: 34-39 (1d6+33)

Endurance
: 25-30 (1d6+24)

Dexterity
: 5-8 (1d4+4)

Agility
: 8-13 (1d6+7)

Perception
: 13-18 (1d6+12)

Scent
: 2-5 (1d4+1)

Aura
: 10-15 (1d6+9)

Will
: 15-20 (1d6+14)

Reasoning
: 9-14 (1d6+8)

Creativity
: 8-11 (1d4+7)

Empathy
: 6-9 (1d4+5)

Eloquence
: 9-14 (1d6+8)
