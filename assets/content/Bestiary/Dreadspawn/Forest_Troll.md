---
shortcode: frsttrll
name: {full: Forest Troll, aliases: []}
type: being
subType: creature
description: "A massive woodland apex predator born of primal earth-magic that moves through dense old-growth forest as easily as open ground."
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
    str: 1d6+29
    end: 1d6+23
    dex: 1d4+6
    agl: 1d4+6
    per: 1d4+8
    aur: 1d4+9
    wil: 1d4+10
    rea: 1d4+5
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 32}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 27}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 75}}
    - name: Mighty Blow
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Mighty Blow
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 10, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Grapple and Tear
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Grapple and Tear
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 32, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 6}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Arms, shortcode: armszone, probWeight: 8}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Legs, shortcode: legszone, probWeight: 12}
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
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
      weight: {base: 2300, calc: "2300"}
      reachBase: 0
      bodyScaleBase: 2
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 55
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[frsttrll|Forest Troll]]{float=top-left}

The old trackway runs between stones furred with moss, under oaks so old and so twisted that the mist hangs in them like wool. One of the oaks at the edge of the track is wider than the rest, and its bark is greener. As you pass it, it turns. It is a giant, twice your height, bark-skinned and gray-green, with roots and vines running in and out of its skin and a mass of twigs and leaves for hair, in which small birds are nesting. Its hand, when it reaches out, is the size of a cartwheel, with fingers like branches. Behind you, along the track, the ferns are moving where there is no wind, and something is drawing tight round your ankles.

# Dossier {#dossier}

The Forest Troll is a dreadspawn of the old woods: a giant twelve to fourteen feet tall and more than a ton in weight, with bark-like skin grown through with living roots and vines, and a body that regrows lost limbs. It holds a whole forest as its own, knows every tree in it, makes the forest itself grip and block its prey, and kills anything that does not belong. The [[place-pshtrwldrns|Peshtar Wilderness]], the ungoverned highland quarter of [[place-aelwyth|Aelwyth]], has one, in the oldest of its oak and hazel woods, and the Peshtar tribes, who answer to no lowland king, have come to an arrangement with it. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The forest troll is huge and long-armed, with a deep chest and a small head on heavy shoulders. Its skin is thick, ridged and fissured like bark, gray-green to brackish brown, and roots and vines run in and out of it, some of them moving on their own. Its hair is a thicket of twigs, leaves and living growth, with moss and fern in it, and birds, mice and beetles live there. Its hands are broad and paw-like, with long, branching fingers and hooked nails. Its eyes are small and dark under a heavy brow. It smells of leaf-mold and sap. In its own forest it moves through dense growth as easily as a man walks a road, without a sound, and when it stands still it is a tree.

## In the Land

The troll holds an old-growth wood in the Peshtar highlands: oak, pine and ancient hazel in a mist-choked valley, crossed by one of the ancient stone trackways whose builders no one remembers. Its ground runs from the moor above the valley to the river below it, and it knows every tree, path and clearing in it. It hunts deer, boar, wolves and anything else that comes in, and it does not leave the wood. Outside it, it is slower and heals more slowly, and it does not seem to want to go. The Peshtar say the wood is the troll's and the troll is the wood's, and outsiders who have tried to cut a road through it have not been seen again.

## Key Behaviors

The troll patrols its wood steadily and attacks anything that comes into it uninvited. It hunts with patience and intelligence: it learns its prey's habits, drives it with the forest's help into narrows, bogs and drops, and wears it down over days. It makes the forest work for it: roots rise from the soil and seize, branches close a path, brambles grow across a clearing. It kills more than it eats. It tolerates some smaller creatures in its wood, and it tolerates people who keep the bargain with it, and that tolerance holds only as long as they do.

## What the Peshtar Do

The Peshtar regard the old stones and trackways as sacred and deny any kinship with the people who built them, and they say the same of the troll: it is not theirs, but it is part of the land, and the land is not to be fought. The clan whose ground borders the wood keeps the bargain. Its hunters do not cut green wood there, do not hunt the wood's deer, and do not light fires under its oaks; they leave a portion of each autumn's slaughter at the stone where the trackway enters the wood. In return the troll lets the clan's people cross the wood by the trackway, in daylight, in silence. Lowland mercenary recruiters who come into the Peshtar country have been warned off that valley by the same clan, and the clan does not warn them twice. The older Aureldian clergy suspect the Peshtar worship the troll. The Peshtar say they worship nothing so obvious.

## Signs

- Trees bent, split or uprooted along a line, as if by something walking through the wood without bothering to go round.
- Roots grown up out of the ground and coiled round deer bones, the skulls held up off the earth.
- A path that was open in the morning closed by bramble and fallen branches in the afternoon.
- Birds that sing everywhere in the wood except round one great tree, which is not always in the same place.
- A smell of crushed leaves and sap, very strong, on a still day.

## Combat Strategy

The troll fights with the forest. It separates a party with roots and closing branches, drives its members into narrow places and toward bogs and drops, and attacks the one it has isolated, usually with a grab from surprise. Once it is fighting it relies on its strength and its healing to outlast anything, tearing at whatever it holds and battering whatever it does not. It pursues relentlessly inside its wood and not a step beyond it. Fire is the one thing it fears: fire burns its living wood and stops its healing.

## Attack Methods

### Mighty Blow

The troll swings a fist or an arm in a wide arc. Its reach is enormous, and the blow breaks bone through armor and knocks a man across a clearing.

### Grapple and Tear

The troll seizes a man in one huge hand and squeezes, and tears at him with the other, or lifts him and hurls him against a tree. Its grip crushes by degrees for as long as it holds.

## Special Abilities

### Root Entanglement

The roots and vines in the troll's body reach out to seize and bind, and it can hold several men at once while it deals with another.

### Woodland Camouflage

In its own forest, still, the troll is a tree, and it surprises men who are looking straight at it.

### Regeneration

The troll heals astonishingly fast in its own forest and much more slowly outside it. Sustained fire stops its healing for as long as the fire lasts.

### Limb Regrowth

A severed limb regrows in hours, and worse injuries in days or weeks. Its body has no obvious vital place, and killing it means burning it, or destroying every piece.

### Forest Manipulation

In its own wood, the troll makes the forest move: roots erupt from the soil, branches close round a man, brambles grow across a path. The forest answers it as a hand answers a man.

## Attributes

Strength
: 30-35 (1d6+29)

Endurance
: 24-29 (1d6+23)

Dexterity
: 7-10 (1d4+6)

Agility
: 7-10 (1d4+6)

Perception
: 9-12 (1d4+8)

Aura
: 10-13 (1d4+9)

Will
: 11-14 (1d4+10)

Reasoning
: 6-9 (1d4+5)

Creativity
: 6-9 (1d4+5)
