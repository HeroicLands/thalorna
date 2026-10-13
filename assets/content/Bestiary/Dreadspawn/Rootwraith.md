---
shortcode: rtwrth
name: {full: Rootwraith, aliases: []}
type: being
subType: creature
description: "A territorial mass of vegetation and ancient malice that rises from the soil of deep forests to punish intruders."
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
    complexion: null
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d4+9
    end: 1d6+10
    dex: 1d4+9
    agl: 1d6+6
    per: 1d4+13
    aur: 1d6+14
    wil: 1d4+13
    rea: 1d6+10
    cre: 1d4+13
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 16}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 51}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 33}}
    - name: Vine Lash
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
          name: Vine Lash
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 4}
    - name: Thorned Appendage
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Thorned Appendage
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 0, aspect: edged}
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
          - {name: Arms, shortcode: armszone, probWeight: 5}
          - {name: Torso, shortcode: torsozone, probWeight: 5}
          - {name: Legs, shortcode: legszone, probWeight: 8}
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
      weight: {base: 600, calc: "600"}
      reachBase: 0
      bodyScaleBase: 1.06
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: mixed_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: woodland, mode: add, textValue: "0"}
          - {scope: surface_cover, key: needleleaf_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: cold_woodland, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[rtwrth|Rootwraith]]{float=top-left}

The farmstead was burned a long time ago, and the forest has taken it back: birch saplings through the floor of the hall, a fallen roof-tree furred with moss, nettles where the byre was. In the middle of what was the yard stands a figure taller than a man, and for a moment you take it for a charred post. Then it turns its head. It is made of roots, knotted and twisted into the shape of a man, bark for skin, and in the hollow where its face should be are two points of pale green light. The ground under your feet moves. Roots are coming up out of the earth round your boots, slowly, like fingers closing.

# Dossier {#dossier}

The Rootwraith is a dreadspawn of root, vine and bark in the shape of a tall man, seven to nine feet high and about six hundred pounds, which rises out of the soil of the deep forest, commands the plants round it, and kills anything living that comes into its ground. It does not eat; it drains the life from what it catches and leaves it to rot. It is patient, slow and implacable. One holds the burned ground on the eastern border of [[place-targud|Targud]], the no-man's-land of burned farmsteads and abandoned watchtowers between the Nordmen kingdom and the Grukar of [[place-grkrhlmrgn|Grukarhölm]], and it treats Nordmen and Grukar alike. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The rootwraith's body is roots, vines and bark knotted so tightly together that they make a frame: a body, two long arms, two legs that taper into root-ends, and a head with a hollow face. Its joints bend at wrong angles and its limbs lengthen when it reaches. In the hollow of its face are two points of pale green light. Moss and fungus grow on it, small plants root in its shoulders, and dead leaves cling to it. It moves slowly, with a creak of wood, and it can stand so still that it is a stump or a dead tree. Near it the air smells of turned earth and rot, and living things feel tired and heavy.

## In the Land

In [[lore-burningeast|the Burning of the East]], from 604 to 614 AF, a Grukar horde burned Targud's eastern districts, and the frontier drew back a day's walk down the river. The ground the horde took is the burned east: farmsteads, watchtowers and the old royal hall at Nulthgard abandoned, and the forest growing back over all of it. The rootwraith holds a stretch of that ground, a few miles of young forest and burned holdings round one of the old ford-roads. It does not leave it, and it goes into the soil and comes up again anywhere inside it. It is most active at dusk and dawn. The forest in its ground grows faster and thicker than the forest round it, and a burned farmstead there is gone under trees in a few years.

## Key Behaviors

The rootwraith is a sentinel. It does not hunt for food; it kills what comes into its ground, Nordmen scouts, Grukar raiders, trappers, deer and wolves, and leaves the bodies to the soil, where roots grow through them quickly. It drains the life from what it holds, and the plants round it grow on what it has drained. It is patient and deliberate: it lets the forest close round an intruder, waits for him to tire, and comes for him slowly. It sinks into the soil or into a tree to move and to hide, and comes out where it is not expected.

## What the Watch Does

Nobody crosses the east alone, and the forts that hold Targud's line pass their duty from one district to the next by the rotation every bóndi of the kingdom owes. The watch at [[place-tvalgard|Tvalgard]] knows the rootwraith's ground and does not send scouts through it; patrols go round it, a day's march longer. The Grukar seem to know it too, and their raiding parties do not come through it either, which means that stretch of the frontier is the one the watch worries about least. Trappers who work the burned ground set their lines elsewhere. The skald who sings every last stand in Targud's memory does not sing about the rootwraith. The farmers on the wall say it came up out of the burned ground after the horde, and nobody can say whether that is true.

## Signs

- A stretch of burned land where the forest has grown back faster and denser than anywhere round it.
- Bodies of men and animals found grown through with roots, as if they had lain there for years, though the clothes on them are new.
- Ground that is torn up in a ring, as if something had come up out of it, with no tracks leading away.
- A stump or dead tree, shaped too much like a man, that is not in the same place the next day.
- A heaviness and weariness that comes over a party on one stretch of path and lifts when they leave it.

## Combat Strategy

The rootwraith opens by turning the forest on its enemies: roots erupt from the ground to seize their legs, vines lash from the branches, trees lean to close the path behind them. While they struggle, it comes forward slowly, sure of itself, and strikes with its vines and its thorned limbs, and drains what it touches. It lets the forest and its draining aura wear its enemies down, and it is in no hurry. When it is hurt, it sinks into the soil and heals, and comes up behind them. Fire is its great weakness, and cutting down the plants round it starves it.

## Attack Methods

### Vine Lash

Long, whiplike vines unfurl from its body and lash out from well beyond arm's reach, from the side or from above, cutting, wrapping and dragging.

### Thorned Appendage

Its arms lengthen and harden into thorned spikes and rakes, and it drives them precisely into gaps in armor and into exposed flesh.

## Special Abilities

### Decay Touch

When the rootwraith holds living flesh it drains the life from it, and the flesh begins to rot while its owner is still alive, with a burning pain.

### Forest Authority

Every plant it can see answers to it. Roots erupt from the soil, vines seize, branches block, and the forest itself becomes its weapon.

### Life Drain

Its presence saps the living. Those near it grow weak, sick and tired, and feel their strength running out into the ground.

### Terrain Melding

It sinks into the earth, merges into a tree, or vanishes into undergrowth, and comes out again elsewhere in its ground. In forest it is nearly impossible to track.

### Regeneration Through Plant Life

While it touches living plants, it heals. Cut off from them, or in ground stripped of growth, it weakens slowly.

### Fire Weakness

Fire burns its body and cuts it off from the plants round it, and it fears fire above everything.

## Attributes

- **Strength:** 10-13 (1d4+9)

- **Endurance:** 11-16 (1d6+10)

- **Dexterity:** 10-13 (1d4+9)

- **Agility:** 7-12 (1d6+6)

- **Perception:** 14-17 (1d4+13)

- **Aura:** 15-20 (1d6+14)

- **Will:** 14-17 (1d4+13)

- **Reasoning:** 11-16 (1d6+10)

- **Creativity:** 14-17 (1d4+13)
