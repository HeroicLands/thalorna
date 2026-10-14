---
shortcode: duneclaw
name: {full: Duneclaw, aliases: []}
type: being
subType: creature
description: "A massive venomous desert arthropod that rules its dune-fields with crushing force, cunning, and predatory instinct."
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
    str: 1d6+16
    end: 1d6+14
    dex: 1d6+10
    agl: 1d6+10
    per: 1d4+13
    aur: 1d6+6
    wil: 1d4+13
    rea: 1d4+9
    cre: 1d6+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 48}}
    - name: Crushing Pincer
      type: skill
      system:
        shortcode: pincer
        subType: combattechnique
        masteryLevelBase: 57
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: pincer
          name: Crushing Pincer
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Stinger Strike
      type: skill
      system:
        shortcode: sting
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: sting
          name: Stinger Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
  system:
    body:
      structure:
        zones:
          - {name: Cephalothorax, shortcode: cephzone, probWeight: 5}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 5}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Cephalothorax
            shortcode: cephpart
            bodyZoneCode: cephzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Cephalothorax
            shortcode: cephloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
      weight: {base: 2000, calc: "2000"}
      reachBase: 0
      bodyScaleBase: 1.47
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: [{scope: surface_cover, key: dunes, mode: add, textValue: "0"}]
        disabled: false
---

# Appearance {#appearance}

![[duneclaw|Duneclaw]]{float=top-left}

The salt flat glares white to the horizon on your left, and on your right the old shore dunes lie in a long gray line, and the guide keeps the string on the narrow strip between them at a fast walk. Something moves in the lee of a dune. The sand there slides downward in a sheet, and out of it comes a scorpion the length of a river barge, black-brown and scarred, its pincers as thick as a man's body, its tail arched high over its back with a stinger that drips something that shines like oil. A cluster of eyes on its head turns, all together, toward the last camel in the string. It does not hurry. It knows how far the camel is from the salt.

# Dossier {#dossier}

The Duneclaw is a dreadspawn, a made thing: a scorpion twenty feet long and more, armored in dark chitin with a faint sheen like oil on water, with pincers each the size of a man and a stinger that drives a paralyzing venom through plate. One lives in the old shore dunes at the edge of [[place-ewod|Evöd]], the dead lake basin of the [[place-hskrrgn|Khoshiqor]], and has lived there longer than any tribe remembers, striking from the lee of a dune at whatever crosses between the salt and the sand. The herders who graze the edge of the basin lose a goat a season to it and do not go near the shore dunes at night. Others of the same shape are met elsewhere in the deep sands, far apart, and nobody has seen two together; like every dreadspawn it has no young, and no one knows whether the ones in the deep sands were made at the same time as the one at Evöd or long after.

The tribes call it by the stars. The Sahri star-song of the lake under the sand, [[lore-waterunder|The Buried Water]], sets the Claw—three bright stars bent like a hook that rise out of the Salt at midnight in the cold season—over the duneclaw at the edge of the white, and the herders say it comes out when the Claw is up.

## Presentation

A vast scorpion, low and broad, its body a chain of plates each as big as a cart-bed, dark brown to black and scoured dull by sand except where the faint sheen of its making shows through. The pincers are as long as a man is tall and as thick, toothed along their inner edges. The tail rises in a high arch of narrowing segments to a curved stinger as long as a sword, wet with a venom that catches the light in colors. The eyes are clusters of lenses round the front of the head, and they move together. It stands on eight jointed legs with broad feet that hold on sand. Moving, it scrapes, a sound like a millstone on grit, and the ground shakes under it.

## In the Land

The Duneclaw of Evöd holds the old shore dunes along the western edge of the basin, in the lee of the dunes where the salt meets the sand, and it lairs in a burrow under them that no one has found. Its ground is the strip a traveler must cross to get on or off the salt, and it knows every hardpan and every place a herd passes. The lake people's brick stairs and stepped mounds stand along that old shore, and the [[being-yolequd|Yolaqud]] walks the salt beyond it, so a party that has come for what the Basin Builders left has the duneclaw behind it and the salt-spirit in front. The others of its kind live in the deep sands of the Khoshiqor, each alone on a stretch of dune many miles across.

## Key Behaviors

The duneclaw spends most of its life buried in its burrow, still, and comes up to hunt in the cool hours. It feels a footfall through the sand from a long way off, moves under the surface toward it, and waits in the lee of a dune until the thing is in reach. It takes goats, gazelle, wild asses, a straggling camel, and any man who crosses its strip alone. It knows its ground as a herdsman knows his pasture, and it sets itself where prey habitually passes. It marks the edges of its ground with crushed carcasses left in the open. It does not feed often. A duneclaw that has fed goes back under the sand for weeks.

## What the Tribes Do

The herders who graze the margins of Evöd keep their flocks off the shore dunes and away from the edge of the salt after dusk, and they count the goat they lose each season as the price of the grazing. A string going onto the salt crosses the shore strip at noon, fast and close together, never strung out, because the duneclaw takes the last animal in a line. The slab-cutters who work the salt for trade come and go by one crossing they trust, and leave an old goat tethered on the dunes at the start of the season; whether that keeps the duneclaw off them or only feeds it, they do not argue. Nobody has killed the one at Evöd. A stinger from one of the deep-sand duneclaws, brought into [[place-qisomrktcmp|Qiiso]] by a tribe that found the creature dead, sold to a Tellumi alchemist for more than the tribe's herd was worth.

## Signs

- A goat carcass left crushed and uneaten on open sand, at the edge of a stretch of dunes.
- The lee slope of a dune slumped and smoothed in a broad fan, as if something had gone down under it.
- A trench in the sand a yard wide, running from the dunes toward the salt and ending in nothing.
- A smell of hot chitin and something sharp and oily on the wind off the dunes.
- The Claw rising out of the salt at midnight, which the herders treat as a warning.

## Combat Strategy

The duneclaw rises out of the sand beside its prey, seizes it in a pincer and crushes, and drives the stinger in at once. It holds a struggling thing and stings it again until it stops moving. If the prey gets away it pursues across the sand, faster than a camel on soft ground, and tramples what it catches. It goes for the last in a line, the one apart, the one already hurt. Against a force it judges too strong it goes back under the sand and is gone; a badly wounded duneclaw goes down into its burrow and does not come out until it has mended. Cold slows it badly, and on a winter night it is sluggish and fights poorly.

## Attack Methods

### Crushing Pincer

A pincer closes on a man or a camel and tightens. It breaks bones through mail, and a man held in one cannot pull free without great strength or the pincer being struck open. The duneclaw lifts what it holds and tears it apart between both pincers.

### Stinger Strike

The tail whips down over the body and the stinger drives in with force enough to pierce plate, and the venom goes with it.

## Special Abilities

### Venomous Injection

The venom weakens the muscles and spoils the hands' grip. Each sting makes a man weaker and clumsier, and three or four leave him unable to move.

### Chitinous Armor

The plates turn cuts and thrusts. A heavy blunt blow does more, and still less than it would to anything else.

### Trampling Charge

Across open sand the duneclaw builds speed and runs down what it is chasing, battering it flat under its weight and plates.

### Sand Tunneling

It moves under the sand at a good pace, comes up where it pleases, and sinks out of reach in a few breaths.

### Vibration Sensing

It feels every footfall on its ground through the sand and knows where a thing is, how heavy and how fast, though it sees little beyond a few yards.

## Attributes

- **Strength:** 17-22 (1d6+16)

- **Endurance:** 15-20 (1d6+14)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 11-16 (1d6+10)

- **Perception:** 14-17 (1d4+13)

- **Aura:** 7-12 (1d6+6)

- **Will:** 14-17 (1d4+13)

- **Reasoning:** 10-13 (1d4+9)

- **Creativity:** 7-12 (1d6+6)
