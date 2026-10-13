---
shortcode: drhnybdg
name: {full: Dire Honey Badger, aliases: []}
type: being
subType: creature
description: "A four-foot, four-hundred-pound honey badger scaled to lethal size, proportionally stronger, tougher, and even more relentlessly aggressive."
tags: [animal]
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
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+21
    end: 1d6+19
    dex: 1d6+11
    agl: 1d6+9
    per: 1d6+11
    aur: 1d6+10
    wil: 1d6+17
    rea: 1d4+6
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 25}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 23}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 51}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 60}}
    - name: Slashing Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Slashing Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 7, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Crushing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Crushing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 8, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
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
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: *a1
            canHoldItem: false
            probWeight: 1
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
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
      weight: {base: 400, calc: "400"}
      reachBase: 0
      bodyScaleBase: 1.71
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

![[drhnybdg|Dire Honey Badger]]{float=top-left}

The cattle have bunched at the far end of the pan and will not come to the water, and the herd-boys are up on the rocks shouting at something you cannot see in the grass. Then the grass parts, and an animal the height of your chest walks out of it toward the pool with no more hurry than a bull. Black, a white stripe from the brow down the spine, loose skin rolling over heavy shoulders, claws the length of your fingers clicking on the stone. The smell reaches you a moment later, musk and something acrid. It drinks. Then it lifts its head and looks at the herd-boys, and the shouting stops.

# Dossier {#dossier}

The Dire Honey Badger is a four-hundred-pound mustelid of the open country of the [[place-sthrnsvnhs|Southern Savannahs]], four feet at the shoulder and seven or eight feet long, black with a white stripe down its back: a honey badger grown to the size of a bear and no gentler for it. It is solitary, it holds a range of five to twenty square miles against everything in it, and it attacks lions, hyenas and men with the same lack of hesitation. The cattle people of the savanna rank it with drought and the raiding of neighbors among the things that take cattle, and they do not hunt it.

It is not a hunter of men by choice. It kills what crosses it, and a man who has hurt one is a thing it remembers.

## Presentation

A heavy, low-slung animal on legs longer than a badger's ought to be, with a thick, loose hide that slides over the muscle beneath so that a bite or a spear-point that lands does not hold. The coarse fur is glossy black, with a broad white stripe from the forehead down the back to the tail, and some animals carry white patches besides. The face is small and blunt, with little dark eyes and a nose built for scenting; the jaws are deep and full of working teeth. The foreclaws are curved and as long as a man's fingers, made for digging and tearing. The ears are small and set back, and the tail is short. It fills more of a place than its size accounts for.

## In the Land

Dire Honey Badgers live in the tall-grass belt south of the [[place-cntrlrnfrsts|Central Rainforests]] and across the open central savanna, wherever there are termite mounds to break, bee-trees to rob and small game to dig out, and they follow the great herds at a distance for the calves and the carrion. The wet-season pans and the rock outcrops with their dens hold the most of them. They are less common in the dry southwest and absent from the deep forest. A range with good hunting is five square miles; a poor one is twenty, and the animal walks all of it.

## Key Behaviors

The badger is out at dawn and dusk and at any hour it pleases. It eats whatever it finds: grubs and honey dug out of a bee-tree with its claws, snakes, hares, ground birds, roots, carrion, and a calf or an antelope fawn when it comes on one. It marks its range heavily and walks its boundaries, and it meets another badger at the boundary with a fight. It does not run from a larger animal. Herders on the savanna tell of lions driven off a kill by one badger and of hyena packs that broke and scattered, and the stories are true often enough that the lions themselves give it room. It lives twenty years, and an old one carries the scars of all of them. A badger that has been speared and lived knows the smell of the man who did it.

## What the Herders Do

The cattle clans of the savanna treat a badger's range as a thing to be known and gone round. The herd-boys learn its den sites and its bee-trees, water the cattle at another pan when the animal is at this one, and never set the dogs on it, because the dogs die. A clan that loses a calf to one loses the calf. The honey-hunters of the forest margin follow a badger's diggings to find bee-trees and take their share after it has gone. Its hide, with the loose fold that turns a point, is cut into shields by the clans of the central grass and is worth several head of cattle, and the few men who kill one for it do it from a tree, with spears, over a kill the animal will come back to.

## Signs

- Termite mounds torn open from the side, with the earth thrown back in a heap.
- A bee-tree ripped to the heartwood, the comb gone and the bees still swarming the wound.
- Broad five-toed prints with long claw marks, walking straight across a cattle track without turning.
- Cattle bunched at the far end of a pan and refusing the water.
- A heavy musk in the air near rocks, strong enough to make the dogs whine and sit down.

## Combat Strategy

The badger goes straight in. It charges whatever has provoked it, goes for the legs and then the belly and throat, and does not stop. Pain and the smell of its own blood make it worse. It fights one opponent at a time, the nearest, and turns to the next when that one is down. It does not retreat while it can move, and a party that wants to live through meeting one either kills it outright, from a distance, or gets out of its range and stays out. A spear-thrust finds flesh under the loose hide only when it goes in deep.

## Attack Methods

### Slashing Claws

The foreclaws rake fast and low, at the legs first, opening the long muscles and the vessels behind the knee. They cut leather and light mail.

### Crushing Bite

The jaws close on an arm, a leg or a throat and break what is in them. Once it has bitten the badger holds, and drives its weight forward to bring the man down. A man on the ground is opened at the belly.

## Special Abilities

### Throwing and Slamming

The badger knocks a standing man off his feet with its shoulder and weight and drives him into the ground or against rock, then bites.

### Suicidal Aggression and Fearlessness

The badger attacks animals many times its size without hesitation and goes on attacking while it is dying. It does not recognize that it is losing.

### Exceptional Durability and Armor

The loose hide slides over the muscle, so that a bite or a point that lands does not reach what it was aimed at, and a cut that would open another animal opens a fold of skin.

### Strength Disproportionate to Size

It throws a grown man, breaks a thigh-bone in its jaws and drags a calf by the neck. Its strength is a bear's.

### Pain Tolerance and Continued Function

Broken bones, deep wounds and a spear through the body do not slow it while it has blood left. It fights at full strength until it falls.

## Attributes

- **Strength:** 22-27 (1d6+21)

- **Endurance:** 20-25 (1d6+19)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 10-15 (1d6+9)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 11-16 (1d6+10)

- **Will:** 18-23 (1d6+17)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 5-8 (1d4+4)
