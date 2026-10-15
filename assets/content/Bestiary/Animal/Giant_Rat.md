---
shortcode: giantrat
name: {full: Giant Rat, aliases: []}
type: being
subType: creature
description: "A dog-sized rodent born of magical contamination, infesting sewers, cellars, and granaries wherever darkness meets food waste."
tags: [animal, image-needed]
data:
  packFolder: animals
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
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+4
    end: 1d4+5
    dex: 1d6+10
    agl: 1d6+11
    per: 1d6+10
    aur: 1d4+2
    wil: 1d4+5
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 20}}
    - name: Swarming Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Swarming Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
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
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 15, calc: "15"}
      reachBase: 0
      bodyScaleBase: 0.75
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[giantrat|Giant Rat]]{float=top-left}

The cellar steps go down into water that comes over your boots, and the torch shows a vault of old brick with a grating at the far end where the dark runs on. Something is scratching beyond the grating. Then a pair of eyes catches the light, low and red, and another beside it, and six more behind. The first of them comes through the bars as if they were not there: a rat the size of a dog, gray-black and greasy, with a bald tail as thick as your thumb dragging in the water and two yellow teeth showing under the lip. It stops on the bottom step and looks at you without any fear at all. The smell reaches you a moment later, ammonia and rot, strong enough to water your eyes.

# Dossier {#dossier}

The Giant Rat is the great rat of the old cities: a dog-sized rodent of fifteen pounds and more, which lives in colonies of twenty to fifty in sewers, cellars, granaries, wharves and ship holds, and comes out at night to eat whatever a city throws away and a good deal of what it keeps. The largest and oldest colonies are under [[place-orzara|Ôrzâra]], where the paved streets sit on a celebrated system of sewers and aqueduct channels and the state granaries hold weeks of grain, and the rat has spread from there along the barge-roads and the shipping lanes to every port of the [[place-vylarianse|Vylarian Sea]] that keeps a granary. One rat is a nuisance that bites. A colony in a dark, narrow place is a pack that brings down an armed man and eats him where he falls.

Where the breed came from is argued. The physicians of the Vylarian cities hold that it began where the spill from an alchemist's workshop ran into a granary drain, and point to the size and the fevers as proof; the ratters say a rat that eats well grows, and that the old cities have fed theirs well for a long time. What nobody disputes is that it is established now and that no city that has it has ever got rid of it.

## Presentation

The common rat made large: a low, long body in coarse, greasy fur from dark brown to gray-black, always matted and usually wet, on short legs with clawed, clever feet that climb a brick wall as readily as they run a drain. The head is a long wedge with small dark eyes that throw back torchlight red, round ears that turn independently, and long whiskers that never stop moving. The tail is bare, scaled and as long as the body. The incisors are the thing a ratter looks at: two upper and two lower, yellow-orange, chisel-edged and always growing, worn sharp on wood, leather, rope and mortar. A rat leaves a smear of grease along every wall it runs beside and droppings the size of olive stones wherever it has been.

## In the Land

Giant Rats belong to the built world and to no wild country at all. They are thickest under Ôrzâra, in the sewers the _vêrâmûsândôs_ (curator of the city) of Works keeps and in the cellars and _barnali_ (state granaries) along the riverside wharves, and they are found in the drains and warehouses of the other great cities of [[place-midhalnrgn|Mídhalión]] and in the holds of the grain ships that work between them. A ship that has carried them brings them to its next port, so the harbor quarters of a city have them first and the inland market towns later. They are rare in a village, which has no drain to hide in, and absent from the open countryside. A colony holds a warren of its own digging or of the city's making, with dozens of ways in and out, and a cellar that connects to a sewer is part of the warren whether its owner knows it or not.

## Key Behaviors

A colony sleeps by day in the warren and comes out after dark to forage along fixed runs, the same ones every night, worn greasy along the walls. Rats eat grain, meat, leather, tallow, carrion, the dead of their own colony, and anything else organic, and they gnaw through what stands between them and food. A colony keeps a strict order, settled by constant fighting, and the largest rats feed first. The females breed several times a year, so a colony cut down to a handful is back to its old size within the season. Rats learn: they mark a trap and avoid it, remember a ratter's smell and his dogs, and change their runs when a run has cost them. A lone rat that meets something bigger squeals and runs, and the squeal brings the colony.

## What the Ratters Do

Every city that has the giant rat has ratters, freemen who are paid by households, warehouse-keepers and the city wardens to keep the colonies down, and a good one has a trade that goes from father to daughter. A ratter works with traps, with poisoned bait laid in the runs, and with dogs and ferrets bred for the work, and he goes into a cellar with a lantern on a pole, heavy boots and a leather apron, never alone. He knows that a colony cannot be killed out, only held back, and he charges by the season rather than by the rat. The granary-keepers line their bins with sheet lead and raise their floors on stone piers, and a warehouse that stores grain keeps a cat in every room. A bite is washed at once in vinegar or strong wine and watched for three days, because the fever that follows a bite kills more people than the bite does.

## Signs

- Greasy dark smears along the foot of a wall, at the height of a man's knee, worn into the plaster.
- Droppings like olive stones in a line along a cellar floor.
- A grain sack opened from the bottom and emptied overnight, with gnawed wood in the dust beneath it.
- A dog that will not go down the cellar steps.
- Red eyes in a drain grating that do not move when the lantern does.

## Combat Strategy

One rat runs. A colony comes out together from several holes at once, keeps to the dark at the edge of the light, and closes from every side in a rush that goes for the feet, the ankles and the backs of the legs, biting and darting back. It tries to bring a man down, because a man on the ground can be reached everywhere. Narrow places suit it: a sewer, a cellar or a ship's hold takes away the room to swing a weapon and the chance to retreat. The colony breaks off when it has lost more than a few of its number and goes into the holes, where nothing larger can follow, and it comes back the next night. Fire, dogs and open ground turn it; a man who keeps his back to a wall, his boots laced and a torch in his off hand fights it on fair terms.

## Attack Methods

### Swarming Bite

The rat darts in, bites with a twist of the head that tears rather than punctures, and is back out of reach before the blade comes down. The teeth go through cloth and light leather. One bite is a small wound that bleeds freely; twenty are a man on the floor, and once he is down the rats settle their teeth in and gnaw.

## Special Abilities

### Fouled Bite

The teeth carry the filth the rat lives in. A bite that is not cleaned festers within a day, and some bring the fever the ratters call cellar-ague, which kills in a week. The danger of a fight with rats comes as often in the days after it as during it.

### Sight in the Dark

Rats find their way and hunt in total darkness by whisker, ear and nose. Darkness costs them nothing, and the places they live are dark.

### Overwhelming Rush

A colony coming out all at once is a carpet of bodies, noise and teeth. The weight of it knocks a man off balance, and the squealing of fifty rats in a vaulted cellar breaks the nerve of men who have stood in a battle line.

### Tunnel Escape

A warren has dozens of holes too small for anything but a rat or a ferret. A colony that is losing a fight is gone into them in a few breaths and comes out again behind the party, or waits until the party has left and takes the cellar back.

## Attributes

- **Strength:** 5-8 (1d4+4)
- **Endurance:** 6-9 (1d4+5)
- **Dexterity:** 11-16 (1d6+10)
- **Agility:** 12-17 (1d6+11)
- **Perception:** 11-16 (1d6+10)
- **Aura:** 3-6 (1d4+2)
- **Will:** 6-9 (1d4+5)
- **Reasoning:** 6-9 (1d4+5)
- **Creativity:** 5-8 (1d4+4)
