---
shortcode: gntoctps
name: {full: Giant Octopus, aliases: []}
type: being
subType: creature
description: "A solitary, fiercely territorial deep-water cephalopod whose crushing tentacles can splinter a small boat's hull, among the most intelligent creatures known."
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
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+15
    end: 1d6+11
    dex: 1d6+9
    agl: 1d6+10
    per: 1d6+11
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d6+10
    cre: 1d6+9
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Tentacle Grapple
      type: skill
      system:
        shortcode: tentacle
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tentacle
          name: Tentacle Grapple
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 6}
    - name: Beak Bite
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Mantle, shortcode: mantlezone, probWeight: 4}
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Arms, shortcode: armszone, probWeight: 4}
        parts:
          - name: Mantle
            shortcode: mantlepart
            bodyZoneCode: mantlezone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Arms
            shortcode: larmspart
            bodyZoneCode: armszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Arms
            shortcode: rarmspart
            bodyZoneCode: armszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Mantle
            shortcode: mantleloc
            bodyPartCode: mantlepart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Beak
            shortcode: beakloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Arms
            shortcode: larmsloc
            bodyPartCode: larmspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Arms
            shortcode: rarmsloc
            bodyPartCode: rarmspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 300, calc: "300"}
      reachBase: 0
      bodyScaleBase: 1.43
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aquatic
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[gntoctps|Giant Octopus]]{float=top-left}

The water under the boat goes dark, as if a cloud had crossed the sun, and the sealers at the oars stop rowing. Something is coming up from under the keel. It takes shape slowly: a sack of mottled flesh the size of a skin tent, two eyes as large as plates, and eight arms, each as thick as a man's body, unrolling toward the surface with their undersides pale and ridged with suckers. The nearest arm comes over the gunwale without haste and lies along the thwart. The boat heels.

# Dossier {#dossier}

The Giant Octopus is a deep-water octopus with arms that span twenty feet and a body of three hundred pounds, which lives in the cold fjords and off the rocky coasts of the [[place-nrdlndsrgn|Nordlands]], and is reported from the deeps of the [[place-vylarianse|Vylarian Sea]] by sailors who are not always believed. It holds a den and a hunting ground on the sea floor, eats fish, crab, seal and anything else it can hold, and it is clever beyond any other animal of the sea. The sealers and whalers of the fjords know it as a thing that takes a man from a boat and a boat from the water, and they know the dens.

## Presentation

A boneless, bag-like body with two large, prominent eyes set at its widest point, and eight arms radiating from the mouth, each lined with two rows of suckers and able to move and feel on its own. The skin changes color and texture in a moment, from the gray of rock to the red of anger to the pale of sand, and a resting octopus is the bottom it lies on. The mouth, under the body where the arms meet, is a hard black beak that cracks a crab's shell and a man's thigh-bone alike. A funnel beside it drives the animal backward through the water in a rush and pours out ink.

## In the Land

Giant Octopuses den in the rock of the fjord walls below the tide-line and in the broken ground off the headlands, where the water is deep, cold and full of fish and seal. Each holds its den alone and a hunting ground round it, and the sealing crews of [[lore-nrdlndsseal|the ice-edge and the rookeries]] know a den by the heap of cleaned shells and seal bones below it. They are thickest where the seals haul out. In the south they are a sailor's story from the deep channels of the Vylarian Sea, told in the harbors with the usual enlargements and a few true details.

## Key Behaviors

An octopus lies in its den by day and hunts at dusk and by night, crawling over the bottom and jetting between rocks, taking crab and lobster from the stones and fish from the kelp, and a seal from under a haul-out. It kills by holding and biting. It learns: a den-octopus that has once taken a seal from a sealer's line takes the next one, and one that has been struck from a particular boat knows the boat. It opens a lobster-pot, lifts a stone, and carries a shell home to block its door. It changes color to show its temper, and a red octopus is an angry one. It comes into the shallows after a wounded seal and after bait, and that is where boats meet it.

## What the Sealers Do

A fjord crew that works a haul-out with a den under it hauls its seals into the boat fast and does not trail a carcass. A boat that feels an arm over the gunwale cuts at it with the flensing knives at once, because the second arm follows the first and the boat goes over when three are on it. Dens are marked and left alone, and a den that has taken a man is dealt with at low water on a still day: the crews fill the mouth with stones and pour fish-oil and burning tow on the water, and sometimes it works. The beak is kept as a trophy and carved; the arms are eaten, and the fjord people say the meat of an old one tastes of the men it has had.

## Signs

- A heap of cleaned crab shells, mussel shells and seal bones at the foot of a rock wall under clear water.
- Lobster-pots hauled up open and empty, with the bait gone and the lid unlatched.
- A stretch of bottom that changes color when the boat's shadow crosses it.
- Seals hauled out high and nervous on a skerry, watching the water and not the boat.
- A dark cloud spreading under the surface after a splash, and nothing visible in it.

## Combat Strategy

The octopus lies on the bottom in the color of the bottom until the prey is close, then seizes it with two or three arms and draws it in to the beak, holding the rest of its arms ready for whatever else comes. Against a boat it takes hold of the gunwale and the men together and pulls, and the boat capsizes before the men can cut it free. It does not let go of an arm that is being cut; it brings another. Hurt, it fills the water with ink and jets away into deep water, and it is not caught there. It defends its den with everything it has and follows a thing that has robbed it for a long way. In the water a man has no defense but a knife at the suckers; in the boat he has the knife and his friends, and he uses them in the first moments or not at all.

## Attack Methods

### Tentacle Grapple

An arm takes hold with its suckers and squeezes with the strength to crack ribs, and the grip does not come loose without cutting. Several arms take several men, or wind together round one and crush him.

### Beak Bite

A held thing is drawn under the body to the beak, which bites through mail, splinters bone and opens the belly.

## Special Abilities

### Chromatic Camouflage

The skin takes the color and the grain of rock, sand or weed in a moment. On the bottom the octopus cannot be seen until it moves, and in open water it is hard to follow.

### Ink Defensive Barrage

The funnel pours a cloud of black ink that blinds anything in the water and tastes foul, and the octopus is gone behind it before the cloud thins.

### Intelligence

It learns a boat, a line and a trap, remembers a place and a face, opens what is closed and sets a snare of its own with a baited stone. Its arms think for themselves, and the whole animal thinks better than most of the men who hunt it.

## Attributes

Strength
: 16-21 (1d6+15)

Endurance
: 12-17 (1d6+11)

Dexterity
: 10-15 (1d6+9)

Agility
: 11-16 (1d6+10)

Perception
: 12-17 (1d6+11)

Aura
: 8-11 (1d4+7)

Will
: 10-15 (1d6+9)

Reasoning
: 11-16 (1d6+10)

Creativity
: 10-15 (1d6+9)
