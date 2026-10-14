---
shortcode: mntntrll
name: {full: Mountain Troll, aliases: []}
type: being
subType: creature
description: "A primordial alpine guardian of immense weight and strength, roaming high peaks and caverns as a solitary omnivore that tolerates no rival."
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
    str: 1d6+39
    end: 1d6+24
    dex: 1d4+5
    agl: 1d4+6
    per: 1d4+8
    aur: 1d4+9
    wil: 1d6+10
    rea: 1d4+5
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 42}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 28}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 88}}
    - name: Fist Strike
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
          name: Fist Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 15, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Earthshaker Stomp
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Earthshaker Stomp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 13, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Boulder Crush
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Boulder Crush
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 15, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
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
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 8, fire: 10}
      weight: {base: 7000, calc: "7000"}
      reachBase: 0
      bodyScaleBase: 2.39
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

![[mntntrll|Mountain Troll]]{float=top-left}

The pass is a notch of bare rock between two shoulders of snow, and the cairn at the top of it is the size of a house. Then the cairn stands up. It goes on standing up, rock grinding on rock, until it is three times the height of a man and blots out half the sky: a giant with skin like cracked gray leather veined with darker stone, boulders grown out of its shoulders, a head like a slab. Dark fluid weeps slowly from the cracks in its hide. It looks down at you without hurry, takes one step, and the whole pass shudders under your feet, and the snow on the shoulder above you begins to slide.

# Dossier {#dossier}

The Mountain Troll is the greatest of the trolls: a dreadspawn sixteen to twenty feet tall and as heavy as a cottage, with a hide half turned to stone, a body that heals almost anything, and strength enough to tear boulders from a mountainside. It holds a range of high country twenty miles across or more, sleeps for weeks in a deep cave, and eats prodigiously when it wakes. One holds a pass of the [[place-talothe|Talòthe]], the cold mountain march between Provènzia and Tarvénia, and it has done what neither crown could: it has closed one of the raiding roads altogether. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The mountain troll is enormous and massive, broad as a barn, with a small heavy head sunk between boulder shoulders. Its skin is gray-brown and cracked like old leather or weathered stone, run through with seams of something darker and harder, like veins of ore, and boulders and crusts of mineral grow out of its shoulders, back and forearms. The cracks in its hide weep a slow, dark fluid. Its hands are each as big as a cart. It moves slowly and deliberately, and every step shakes the ground; it can stand still for so long that snow drifts against it and lichen grows on it. It smells of wet stone and old blood.

## In the Land

The Talòthe's mountains close from the first snow to the thaw, and between thaw and snow the border families of both kingdoms raid each other over pasture, passes and precedence, a war nobody declares. The mountain troll holds the high country round one of those passes, from the summer pastures on the Provenzian side to the snowfields on the Tarvénian, with its lair in a deep cave under the pass. It eats everything: summer sheep and cattle, goats, bears, carrion, roots, lichen by the cartload. It follows the same rounds through its range year after year, and it sleeps through the worst of the winter. It tolerates no other large creature in its range, and it treats raiders from either side the same.

## Key Behaviors

The troll is territorial to obsession and solitary. It wakes, hunts its range on its habitual rounds, eats until it is full, and goes back to its cave to sleep, sometimes for weeks. It attacks anything large that it meets in its range, and it is in no hurry about it: it advances slowly, lets its prey understand what is coming, and then kills it. It uses the mountain as a weapon, starting rockfalls and snowslides with its stamping and throwing boulders. It is not clever, but it learns its ground and the habits of what moves in it, and it remembers the men who have hurt it.

## What the Marchers Do

The border families on both sides of the march have quietly dropped the troll's pass from their raiding calendar, and the pass has been empty of raiders for longer than anyone in [[place-durvalis|Durvalìs]] likes to say. Shepherds on both sides graze the summer pastures at the edges of its range only in the weeks it sleeps, and post a boy on a high rock to watch the cave mouth. The Winter Assize at Durvalìs has heard several cases in which one family accused another of driving cattle onto the troll's ground to lure it toward a rival's flocks; none was proved. There is a bounty on the troll from both crowns, the only thing the two crowns have agreed on in a generation, and nobody has collected it.

## Signs

- Boulders the size of a cart rolled down onto a path, with fresh scars on the slope above where they were torn out.
- Footprints in snow or mud as long as a man is tall, sunk deep.
- Whole sheep and cattle carcasses stripped and the bones broken open, in a heap at a cave mouth.
- A tremor in the ground, felt underfoot at regular intervals, coming nearer.
- A pass that is clear of snow and rockfall and has no one on it in the raiding season.

## Combat Strategy

A mountain troll opens slowly, advancing so that its enemies feel what they are facing and break. It herds them toward cliff edges, snow slopes and loose ground, where a single blow or a single stamp finishes them. When it strikes it puts its whole weight into the blow. It throws boulders at anything out of reach, and it stamps to bring down snow and rock on a party below it. It does not flee and does not care about its wounds. Fire and acid hurt it and slow its healing; nothing else seems to.

## Attack Methods

### Fist Strike

The troll swings its fists one after the other with the weight of its shoulders behind them. A direct blow crushes a man and breaks heavy armor.

### Earthshaker Stomp

The troll raises a foot and brings it down, and the ground convulses: men are thrown off their feet, rocks crack, and snow and loose stone slide from the slopes round it.

### Boulder Crush

The troll tears a boulder from the mountainside and brings it down on its enemy, or hurls it at him. The impact shatters shields and armor and cracks the rock underneath.

## Special Abilities

### Stone-Touched Resilience

Its hide and its flesh are partly turned to stone, and cuts, thrusts and blows are all blunted by it.

### Regeneration

It heals with astonishing speed, regrowing flesh and bone in minutes or hours. Fire and acid stop its healing while they burn.

### Undaunted Fortitude

It marches for days across the high country without rest, shrugs off cold that would kill anything else, and fights on through grievous wounds.

### Heat Weakness

Long heat and drought dry its skin and crack the stone in it, and fire pains it. A story told in Durvalìs says that its heart is a stone in the middle of its chest and that breaking it kills the troll; no one has been close enough to try.

## Attributes

- **Strength:** 40-45 (1d6+39)

- **Endurance:** 25-30 (1d6+24)

- **Dexterity:** 6-9 (1d4+5)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 10-13 (1d4+9)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 6-9 (1d4+5)
