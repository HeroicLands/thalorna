---
shortcode: mssbcktr
name: {full: Mossback Turtle, aliases: []}
type: being
subType: creature
description: "A ton-heavy reptile disguised as a rocky outcrop, its enormous domed shell so overgrown with moss, lichen, and fungi it vanishes into the landscape."
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
    str: 1d6+11
    end: 1d6+14
    dex: 1d4+6
    agl: 1d4+4
    per: 1d6+7
    aur: 1d4+6
    wil: 1d6+9
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Powerful Beak Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 44
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Powerful Beak Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Body Slam
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 34
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Body Slam
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Shell, shortcode: shellzone, probWeight: 9}
          - {name: Limbs, shortcode: limbzone, probWeight: 4}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Shell
            shortcode: shellpart
            bodyZoneCode: shellzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: limbzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: limbzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: limbzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: limbzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: limbzone
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
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Shell
            shortcode: shellloc
            bodyPartCode: shellpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: shellpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
      weight: {base: 2000, calc: "2000"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 15
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aquatic
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[mssbcktr|Mossback Turtle]]{float=top-left}

The canoe slides between flooded trunks, and the paddler steers round a hummock of green that stands out of the water like a little island, thick with moss, ferns and a seedling tree. As you pass it, the island breathes out. A long gray neck unfolds from under the moss, wrinkled and loose-skinned, and a head the size of a water jar turns toward you, with a hooked beak like a parrot's and two small bright eyes that look older than the forest. The water round the hummock heaves as something very large settles on the bottom. The paddler lifts his blade out of the water and holds it there until you are well past.

# Dossier {#dossier}

The Mossback Turtle is a huge, slow, long-lived turtle of the flooded forests of [[place-xelemrgn|Xelem]], eight to ten feet from beak to tail and about a ton, whose domed shell grows so thick with moss, lichen, fungus and seedlings that it looks like a mound of earth or a mossy rock. It grazes water plants, fallen fruit, fungus and leaves, and does not hunt. It is dangerous only when it is disturbed, cornered or stepped on, and then its beak takes off fingers and its weight breaks bones. The river peoples count it among the presences of the forest, and a very old mossback is something they treat with care.

## Presentation

The shell is a high dome, ridged and pitted with age, dark brown or gray where anything shows through the growth on it, and a mature turtle carries a whole small garden: cushions of moss, lichens in gray and orange crusts, shelf fungi along the rim, ferns, and sometimes a sapling rooted in a crack. The limbs are thick as posts and scaled, with heavy blunt claws, and they barely show beneath the shell when the turtle stands. The neck is long, gray and loose, and folds back under the front of the shell. The head is small for the body, flat on top, with a hard, hooked, sharp-edged beak and small, bright, watchful eyes. A mossback smells of wet earth and leaf-mold. In water it is quick and graceful; on land it moves at the pace of a tired old man.

## In the Land

Mossbacks live along the [[place-hanaltzuma|Ha'nal Tz'uma]] and its tributaries, where the forest floods each year and drains again. In the flood they swim among the drowned trunks, grazing the water plants and the fruit that falls into the river, and they sleep on the bottom of the quiet channels. When the water falls they walk out over the forest floor, browsing leaves, fungus and the seedlings that come up in the mud, and they spend the dry months beside the pools and backwaters left behind. They are scarcest near the city of [[place-xelem2|Xelem]] and the busy channels, and commonest in the far reaches where the canoes seldom go. A mossback lives for a very long time—nobody has outlived one to count—and some river villages know particular turtles by the shapes of the saplings on their backs.

## Key Behaviors

A mossback spends most of its life eating and resting. It moves little, keeps to the same few channels and pools year after year, and lies still for days at a time, which is how the growth on its back takes hold. It is solitary and pays other mossbacks no attention except in the breeding season, when the males shove at each other with their shells and bite at each other's necks. The females come out in the dry season to dig nests in sandbanks above the flood line, and they bite anything that comes near the nest. Threatened, a mossback pulls in its head and limbs and waits, and a turtle that is let alone puts its head out again after a while and goes back to eating.

## What the River Peoples Do

The river peoples of Xelem keep the forest as a living presence worthy of offering, and they count the old mossbacks among the things in it that must be treated with respect. Canoes give a mossback in the channel room and do not ram, pole or tie up to it, and a paddler who mistakes one for a mudbank and puts his foot on it is thought to have bought himself a run of bad luck as well as a bite. Nobody takes the eggs of a mossback's nest in the villages that keep the custom, and a village that does is spoken of by its neighbors. The turtles' cast shell-plates, found on the forest floor after a dry season, are carved into bowls and ladles, and a cast plate with its moss still on it hangs in some houses over the door. The priest-navigators who read the river say a mossback that walks out of the water early means an early fall in the flood.

## Signs

- A mound of moss and fern in a channel or pool that was not there in the morning, or is gone the next.
- Broad, round, deeply sunk footprints in drying mud, in pairs, with a shallow drag between them.
- Water plants grazed off in a clean line along a bank.
- A sandbank above the flood line dug over in a wide pit, and then smoothed.
- Fallen fruit missing from under a fruiting tree, with the ground there trodden flat.

## Combat Strategy

A mossback's first defense is the shell. It pulls everything in and lets the threat wear itself out against the dome. If it cannot withdraw—because it is held, overturned, or caught with its head out—it bites, hard and fast, with the beak, and the beak can come out of the shell farther and faster than anyone expects. On land, cornered, it shoves and rears and drops its whole weight on whatever is in front of it. In water it simply goes deep and stays there. It never pursues.

## Attack Methods

### Powerful Beak Bite

The neck shoots out from under the shell and the beak closes. The bite crushes and shears at once: it takes off fingers, breaks a wrist, and tears a deep, ragged wound in a leg.

### Body Slam

The turtle heaves itself forward and drops its weight, or swings the edge of the shell into a man's legs. It knocks him down and can pin him beneath it, and the weight of the shell on a fallen man breaks ribs.

## Special Abilities

### Impenetrable Shell

The shell turns or blunts almost every blow struck at it from above or the sides. The head, the neck and the limbs, when they are out, are what a weapon can reach.

### Natural Camouflage

A still mossback is a mossy hummock or a stone, in or out of water, and a man looking straight at one does not see a turtle. Search does not help much.

### Slow but Steadfast

A mossback that has set itself is very hard to push, lift or overturn, and a turtle lying across a channel or a path stays there until it chooses to move.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 15-20 (1d6+14)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 5-8 (1d4+4)

- **Perception:** 8-13 (1d6+7)

- **Aura:** 7-10 (1d4+6)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 3-6 (1d4+2)
