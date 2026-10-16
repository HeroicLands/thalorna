---
shortcode: glowvine
name: {full: Glowvine, aliases: []}
type: being
subType: creature
description: "A made predatory plant that lures unwary prey with bioluminescent beauty in shadowed forests and lightless caves."
tags: [dreadspawn]
data:
  packFolder: dreadspawn
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
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d6+10
    end: 1d6+10
    dex: 1d4+9
    agl: 1d6+6
    per: 1d4+9
    aur: 1d4+9
    wil: 1d6+6
    rea: 1d6+4
    cre: 1d6+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Constricting Tendril
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Constricting Tendril
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 14, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, constrict: true, impTA: 4}
    - name: Thorned Whipping
      type: skill
      system:
        shortcode: tentacle
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tentacle
          name: Thorned Whipping
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Crown, shortcode: crownzone, probWeight: 2}
          - {name: Stem, shortcode: stemzone, probWeight: 4}
          - {name: Tendrils, shortcode: tendrilzone, probWeight: 3}
        parts:
          - name: Crown
            shortcode: crownpart
            bodyZoneCode: crownzone
            roles: [vital]
            canHoldItem: false
            probWeight: 10
          - name: Stem
            shortcode: stempart
            bodyZoneCode: stemzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Tendrils
            shortcode: ltendrilpart
            bodyZoneCode: tendrilzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Tendrils
            shortcode: rtendrilpart
            bodyZoneCode: tendrilzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Crown
            shortcode: crownloc
            bodyPartCode: crownpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Stem
            shortcode: stemloc
            bodyPartCode: stempart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Tendrils
            shortcode: ltendrilloc
            bodyPartCode: ltendrilpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Tendrils
            shortcode: rtendrilloc
            bodyPartCode: rtendrilpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 20
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: mixed_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: needleleaf_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: woodland, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[glowvine|Glowvine]]{float=top-left}

The light is a little way off the path, low among the trees: a cluster of soft glowing beads, green and blue and a deep violet, pulsing slowly, like a necklace of lit gems hung on a branch. It is the most beautiful thing you have seen in this forest. The beads brighten and dim in a rhythm that is almost a tune, and you find you have stepped off the path toward them without deciding to. Up close, they hang along dark, thorny strands that trail from the branches all round you. One strand lifts, slowly, as if in a breeze. There is no breeze.

# Dossier {#dossier}

The Glowvine is a dreadspawn made in the shape of a plant: a central knot of dark, woody growth from which thorned tendrils two to four feet long hang in every direction, studded with beads of living light that pulse to draw prey close. It catches what comes near, wraps it, crushes it, and digests it with acid. It is rooted, or nearly, and it does not hunt; it waits. It is met in the [[place-forestnoroad|Forest of No Road]], the unclaimed forest below the Eastern Reach of Vedyara, where the hostel-keepers of the pilgrim road tell of lights among the trees that do not move as a camp's fire moves. Some of those lights are glowvines. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The glowvine's central mass is a knot of dark, twisted wood and fiber the size of a barrel, usually lodged in the fork of a tree, under an overhang or in a hollow, and from it hang dozens of tendrils, dark green going to black, armed with small sharp thorns. Along the tendrils run beads of light the size of a thumbnail, green, blue and a sickly violet, which pulse in slow, shifting patterns that are hard to look away from. The tendrils move slowly all the time, as if stirred by air, and very fast when they strike. A glowvine smells sweet, like overripe fruit, and under the sweetness, faintly, of rot.

## In the Land

The Forest of No Road is the country at the headwaters of the [[place-bharavarivr|Bharava]] that no janapoda has ever sent an assembly into and no temple has ever claimed. There are ways through it but no road, and the glowvines grow along those ways, in the canopy over game trails, in the hollows under great roots, and in the mouths of the caves in the limestone gullies. They want dark and damp, and they need prey that moves at night and is drawn to light: monkeys, deer, wild pigs, owls and moths, and men. A glowvine that has found a good place stays in it for years and grows larger. They are not found in the endowed forest of the lower river, where the gatherers have cut them out.

## Key Behaviors

A glowvine hangs still and glows. Animals that see the lights come to look, and the pulsing slows and soothes them so that they come closer than they meant to. When something is within reach, the tendrils strike together, wrap it, and pull it against the central mass, where they squeeze and burn it with acid until it stops moving, and the glowvine feeds on it slowly over days. It releases clouds of spores when it is disturbed or when it has something in its grip, and the spores make those who breathe them see things that are not there. It does not move from its place except very slowly, over many seasons, along the branch or the root it grows on.

## What the Forest's People Do

The gathering peoples who work the margins of the forest, and the renunciants who go into it for years, tell newcomers the same thing: a light in the forest at night that does not flicker like fire is not a fire, and nobody walks toward it. Gatherers who find a glowvine near their season's path burn it out with pitch torches in daylight, when its lights are dim and its spores weak, and they never go near one after dark. The hostel-keepers at the margin say that ascetics who came back from the deep forest have described lights that sang to them, and that the ones who did not come back may have walked toward them. The beads of a dead glowvine keep their glow for a month, and they are sold at the margin to pilgrims, who are told they are lights from the Sinale enclaves rumored in the forest, and who believe it.

## Signs

- Soft, pulsing lights low among the trees at night, green, blue and violet, that do not flicker and do not move.
- A sweet smell of overripe fruit with no fruiting tree near.
- The bones of monkeys and small deer in a heap under a branch or a ledge, etched and pitted by acid.
- Moths and night insects clustered thickly round a hollow in the forest, and many of them dead.
- A path that seems to bend toward a light, and footprints that leave the path in that direction.

## Combat Strategy

The glowvine does not pursue. It lures prey into reach with its light, strikes with as many tendrils as it can bring to bear, wraps, and pulls. Once it has hold, it squeezes, burns with acid, and releases spores to confuse anyone trying to help. Its tendrils are flexible and slippery under a blade but not armored, and a man who keeps out of reach is safe from it entirely. Fire destroys it and bright light makes it dormant, and a party that has seen it for what it is can simply go round.

## Attack Methods

### Constricting Tendril

Several tendrils wrap a victim together and haul him in toward the central mass. They squeeze harder the longer they hold, and he cannot easily pull free.

### Thorned Whipping

The tendrils lash out and slash with their thorns, cutting through light armor and opening bleeding wounds, to drive a victim off balance before the wrapping begins or to beat off a rescuer.

## Special Abilities

### Corrosive Acid

A victim held against the glowvine is burned by an acid the tendrils exude, which eats into skin, leather and cloth.

### Bioluminescent Lure

The pulsing lights draw the eye and the curiosity. They do not compel, but a creature drawn by them is slow to notice danger and drifts closer than it means to.

### Hallucinogenic Spores

The glowvine releases clouds of spores that make those who breathe them see and hear things that are not there and misjudge where things are. They are worst in still air and confined places, and a wind disperses them.

### Verdant Resilience

Its tendrils give and slip under blades, so that cuts and thrusts do little, but it burns readily and heavy blows break its woody core.

### Regeneration in Darkness

In darkness and damp it slowly regrows what it loses. Bright light stops its growth, and fire, kept up, destroys it.

## Attributes

- **Strength:** 11-16 (1d6+10)

- **Endurance:** 11-16 (1d6+10)

- **Dexterity:** 10-13 (1d4+9)

- **Agility:** 7-12 (1d6+6)

- **Perception:** 10-13 (1d4+9)

- **Aura:** 10-13 (1d4+9)

- **Will:** 7-12 (1d6+6)

- **Reasoning:** 5-10 (1d6+4)

- **Creativity:** 7-12 (1d6+6)
