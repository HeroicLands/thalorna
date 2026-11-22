---
shortcode: mazekeeper
name: {full: Varmesh Hagmen, en: [The Maze-Keeper]}
type: being
subType: creature
description: "A made hunter with a bull's head on a man's heavy body that keeps the cut passages under the Grazian Mountains and drives whatever enters them deeper in."
tags: [dreadspawn, image-needed]
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
    str: 1d6+25
    end: 1d6+27
    dex: 1d4+5
    agl: 1d4+5
    per: 1d4+8
    aur: 1d4+9
    wil: 1d4+13
    rea: 1d4+5
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 28}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 31}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 75}}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 8, aspect: edged}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Terrible Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Terrible Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 9, aspect: piercing}
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
            roles: [vital, manipulator]
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
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
      weight: {base: 1300, calc: "1300"}
      reachBase: 0
      bodyScaleBase: 1.84
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

The passage forks for the fourth time in a hundred paces, and the right-hand way is scarred. Something has dragged itself along the wall at shoulder height, again and again, until the cut stone is gouged in long grooves, and the floor is pocked with prints the size of a bucket, cloven like a bull's. The air smells of musk and old straw. Then the lamp finds it, twenty paces off where the passage bends: a shape too tall for the passage, stooped under the roof, on two legs. It has the body of a heavy man, broad and slab-muscled, and on its shoulders a bull's head with a pair of horns that scrape the ceiling. It lowers the head. Behind you, in the dark you came through, something else is moving.

# Dossier {#dossier}

**Varmesh Hagmen** (the Maze-Keeper) is a dreadspawn hunter of cut passages, named in the [[skill-tellumilng|Tellumi Language]] from _varmesh_, a junction where a passage branches, and _hagmen_, a keeper: _the keeper of the branchings_. It has a bull's head on the heavy body of a man and stands half again as tall as one. It lives in the cut passages under [[place-graznmntns|The Grazian Mountains]], warrens and galleries driven into the rock by builders nobody names, and it keeps them. It wants prey kept in: whatever enters its passages it drives deeper, and it never follows anything out into the daylight. Like every dreadspawn it was made, it is alive, and it does not breed. The [[lore-khazrynclt|Tellumi]] know it from the climbers who go into the north face after the signs cut on the passages' lintels, and they know more than one passage that has its own keeper.

## Presentation

A varmesh hagmen stands nine feet tall when it straightens, and it rarely straightens, because the passages it keeps are lower than that. Its body is a man's, heavy and thick through the shoulders, with long arms and hands that end in thick, blunt nails like a bear's. Its legs end in cloven hooves. Its head is a bull's, black or dun, with a wide pair of horns, and its eyes are small and bloodshot and see well in the dark. It wears nothing. It smells strongly of musk, and the smell hangs in a passage for days after it has gone through.

## In the Land

The north face of the Grazian Mountains rises above the Tellumi belt, and in it are doorways into passages cut before anyone kept a record, passages that branch and climb and branch again. Some of them are ruined: roofs fallen, floors broken by ice, galleries choked with rubble. A varmesh hagmen keeps a warren of such passages as its own, a few miles of them, and it learns every junction. It eats what comes in, the cave beasts, the climbers' mules and the climbers, and it lairs in a chamber at the deep end of its warren. It does not come out of the rock.

## Key Behaviors

A varmesh hagmen herds. It lets a party come in and pass a few junctions, then shows itself at the junction behind them, between them and the way out, and drives them deeper with charge after charge, turning them at every junction toward the dead ends and the deep chambers. It does not hurry. A party that runs from it runs further in, and it follows at a walk until the party is lost, tired and out of light, and then it kills. It never follows anyone into the open: a party that reaches a doorway and steps out into daylight is let go, and it turns back into the dark. It is cunning in its own passages and nowhere else.

## What the Climbers Do

Climbers who go into the north face for the lintel signs mark every junction they pass with chalk, so that they can find the way out at a run. They go in with more light than they think they need, and in numbers, and they learn to listen for the sound of hooves on stone behind them. A climber who has met a varmesh hagmen and come out knows that the way to live is to go back the way he came and not the way it drives him, and the houses that hire climbers pay more for one who has.

## Signs

- Walls gouged at shoulder height along a passage too low for a man to have done it.
- Cloven prints the size of a bucket in the dust of a passage floor, going in both directions.
- A strong smell of musk at a junction, and old straw and bones heaped in a side chamber.
- Climbers' chalk marks at a junction rubbed out, and new marks made, pointing the wrong way.
- The bones of mules and men at the dead end of a passage, a long way from its doorway.

## Combat Strategy

A varmesh hagmen fights by charging, head down, along a passage too narrow to step aside in, and its weight drives everything in front of it back or under. It charges from a junction, at a party strung out along a passage, and pins the one in front against the wall. In close quarters it strikes with its heavy hands and gores and bites. In a passage its bulk is everything; in a wide chamber or in the open it is clumsy, slow to turn, and easier to strike.

## Attack Methods

### Raking Claws

Its heavy nails rake and tear, and the weight of its arm behind them throws a man against the wall.

### Terrible Bite

A bull's jaws are made for grass; its jaws are not. It bites with a predator's teeth behind the blunt muzzle.

## Special Abilities

### The Charge

Head down along a narrow passage, it hits with its horns and its whole weight, and anything it strikes is thrown down and trampled.

### Keeper of the Branchings

It knows every junction and dead end of its warren and moves through it in the dark without light.

### Dark Sight

It sees in the dark of its passages as well as a man sees by day.

## Attributes

Strength
: 26-31 (1d6+25)

Endurance
: 28-33 (1d6+27)

Dexterity
: 6-9 (1d4+5)

Agility
: 6-9 (1d4+5)

Perception
: 9-12 (1d4+8)

Aura
: 10-13 (1d4+9)

Will
: 14-17 (1d4+13)

Reasoning
: 6-9 (1d4+5)

Creativity
: 6-9 (1d4+5)

## Hooks {#hooks}

- **The climbers who went deeper.** A Tellumi house hired climbers to find a lintel sign in the north face, and two of them came back saying the passage was kept. The house wants the sign, and the climbers will not go back without a party in front of them.
- **The wrong chalk.** A party finds its own chalk marks rubbed out and new ones made, pointing deeper, and must decide whether to trust its memory of the way out or the marks.
- **A warren worth having.** Herders want the lower passages of a warren for winter shelter for their flocks, and pay for it to be cleared of whatever has been taking their goats.
- **The other bones.** A scholar has seen a drawing of bones from the dead end of a kept warren, bones of no beast anyone knows, and wants a party to bring her one.

:::secret {title="What beats a varmesh hagmen"}

- **Open ground.** It is clumsy and slow to turn outside a passage. A party that draws it into a wide chamber, or out to a ledge or a doorway, fights it at a great advantage.
- **The charge lane.** Its charge needs a straight run. A passage blocked with rubble, a cart or a row of grounded spears breaks the charge, and it stands bewildered for a moment before it turns.
- **Water and rockfall.** Its warren can be used against it. A passage flooded from a spring, or a roof brought down on it, traps or kills it, and closes the passage too.

:::

:::secret {title="Its lair and its leavings"}

- **The deep chamber.** It lairs in the deepest chamber of its warren, on a bed of straw and hides carried in from dead mules. What the climbers it killed carried, lamps, tools, rope, coin and the rubbings they made of lintel signs, is heaped there.
- **The other dead.** In the dead ends of its warren lie bones of things that are not mules or men: other made creatures, of shapes nobody knows, that it killed or that died there. Whoever made it made them too, and a warren cleared of its keeper is a place to learn what else was made.

:::

## See Also

[[lore-dreadspawncrtr|Dreadspawn]]
: the made creatures, and how they differ from constructs and undead

[[place-graznmntns|The Grazian Mountains]]
: the range whose north face holds its passages

[[lore-khazrynclt|Tellumi]]
: the people of the belt below the north face
