---
shortcode: swmpglm
name: {full: Swampgolem, aliases: []}
type: being
subType: creature
description: "A malevolent animate mass of mud, rot, and drowned bones, formed by the swamp itself to lash out at intruders."
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
    str: 1d6+31
    end: 1d6+14
    per: 1d6+4
    aur: 1d6+4
    wil: 1d4+9
    cre: 1d4+3
    agl: 1d4+4
    rea: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 34}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 65}}
    - name: Mud Crush
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Mud Crush
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 11, aspect: blunt}
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
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
      weight: {base: 4800, calc: "4800"}
      reachBase: 0
      bodyScaleBase: 2.08
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[swmpglm|Swampgolem]]{float=top-left}

The papyrus closes over the channel so that the reed-boat moves through a green tunnel, and the fowler at the bow has stopped singing. Ahead, the channel opens into a pool, and on the far side of the pool is a bank of black mud as high as a house, studded with old reed-stems and white sticks that are not sticks. The bank leans forward. It pulls itself up out of the water, a shape like a giant man made of mud and rotten reed, bones showing through it like stones in a wall, a boat's broken prow lodged in its shoulder. Water and slime pour off it. It lifts one arm, as long as the boat, and brings it down, and the pool rises in a wave of black mud toward you.

# Dossier {#dossier}

The Swampgolem is a dreadspawn made of the marsh itself: a giant twelve to sixteen feet tall and many tons in weight, built of mud, clay, rotting reed and the bones of drowned things, which holds a stretch of swamp and crushes and drowns whatever threatens it. It is not quick and not clever, but it is very strong, it heals while it stands in water, and the marsh fights for it. One holds a part of the papyrus marshes of [[place-garshebztslt|Gar-Shebazet Selat]] in the delta of [[place-aukhelathrgq|Au'Khelathu Region]], where the fowlers work the open water and the reed-cutters cut the stems that become the empire's paper. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The swampgolem is roughly man-shaped and vast, a mass of black mud, gray clay and rotting papyrus, held together by something that is not visible. Bones of fish, birds, crocodiles, cattle and men show in its surface, along with stones, broken wood, a pot, an old boat's prow. Its shape is never quite the same twice, because it sheds and gathers mud as it moves. It has a head with two hollows for eyes. It moves slowly, with a sucking, squelching sound, and pours water and slime as it goes. It smells of rot and stagnant water. Lying still in the marsh, it is a mudbank.

## In the Land

Gar-Shebazet's marshes are papyrus, open water and channels, and the chief temple of the [[affiliation-shebazet|Faith of Shebazet]], honoring [[lore-shebazetdty|Shebazet]], the cobra-goddess of the marsh, holds much of them. The swampgolem holds a stretch of the inner marsh, a mile or two of reed-beds, pools and channels round a deep, still pool that is its heart, and it does not leave it. It does not eat in any ordinary way; it draws in the mud, plants and dead things of its marsh and grows on them. It reacts to threats to its ground: boats coming too often, reed-cutters cutting into its beds, fire, and men who fight in its water. Elsewhere in the marsh life goes on as usual. In its stretch, the reed grows thicker than anywhere else.

## Key Behaviors

The swampgolem stays at the heart of its stretch most of the time, lying in its pool as a mudbank. It is territorial in a slow, defensive way: it does not hunt, but when its ground is threatened it rises and attacks whoever is threatening it, crushing them and dragging them under, and then it goes back. It is aware and it reacts, but it is not quick to understand, and it can be confused. Dry weather weakens it, and in the low-water months before the flood it lies deep in its pool and does not come out.

## What the Fowlers and Cutters Do

The fowlers answer a stranger who asks why the goddess is a cobra and the reeds are hers by pointing at the marsh, and they answer questions about the swampgolem the same way. The Warden of the Papyrus Harvest, who blesses and oversees the cutting, leaves the golem's reed-beds uncut, and they are the best beds in the selat, and every season some young cutter goes in after them. The Priest of the Fowling-Grounds forbids fowling in its pool. Boats pass through its stretch only by the outer channels, without stopping, and never during the high-water months, when it is strongest. The temple of Shebazet does not say what the golem is, and a fowler asked whether it is the goddess's says that if it were, it would be a cobra.

## Signs

- A mudbank in a pool that is in a different place on different days, studded with bones.
- Reed-beds thicker and greener in one stretch of marsh than anywhere round it, and uncut.
- Bones of cattle, crocodiles and men showing in the mud along a channel bank.
- A deep, sucking sound in still water with no wind and no animal visible.
- A reed-boat found upside down and pressed deep into the mud, as if stepped on.

## Combat Strategy

The swampgolem uses its weight and strength: it brings its fists down on boats and men, and it raises the marsh against them, mud waves and grasping arms of mud from the bottom, to drag them into deep water and drown them. It pushes its enemies toward its pool and the deep channels, where they cannot stand and it can. It is slow and not cunning, and a party that stays on firm ground and keeps its distance can outpace it. Fire is the thing that hurts it: flame dries and cracks its body and stops it healing, and dry ground weakens it.

## Attack Methods

### Mud Crush

The swampgolem raises a huge arm and brings it down, crushing whatever is beneath. The blow shakes the ground, breaks boats and bones, and leaves the mud round it churned and treacherous.

## Special Abilities

### Slime Sludge Wave

The golem sends a wave of liquid mud and thick slime across the water, swamping boats, blinding and choking men, and washing them toward deeper water.

### Swamp Regeneration

While it stands in water and touches mud and rotting plants, it heals slowly. On dry ground or in drought, it weakens.

### Swamp Camouflage

In thick mud and murky water it is a mudbank, very hard to see until it rises.

### Terrain Mastery

Round it, the mud is deeper and the footing worse, and men in its marsh move slowly and keep their feet only with difficulty.

### Fire Weakness

Fire dries and cracks it and stops it healing, and enough fire can destroy it entirely.

## Attributes

Strength
: 32-37 (1d6+31)

Endurance
: 15-20 (1d6+14)

Perception
: 5-10 (1d6+4)

Aura
: 5-10 (1d6+4)

Will
: 10-13 (1d4+9)

Creativity
: 4-7 (1d4+3)

Agility
: 5-8 (1d4+4)

Reasoning
: 3-6 (1d4+2)
