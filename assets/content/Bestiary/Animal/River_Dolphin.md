---
shortcode: riverdolphin
name: {full: River Dolphin}
type: being
subType: creature
description: "A pink-gray, long-beaked freshwater dolphin of the southern rivers, curious and intelligent, hard to see in brown water, and followed by canoes through dangerous channels."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-spermwhale, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+10
    end: 1d6+13
    dex: 1d6+8
    agl: 1d6+13
    per: 1d6+13
    aur: 1d6+10
    wil: 1d6+8
    rea: 1d4+9
    cre: 1d4+8
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Ramming Strike
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Ramming Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Fluke
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Fluke
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Snapping Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Snapping Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 8}
          - {name: Body, shortcode: torsozone, probWeight: 24}
          - {name: Tail, shortcode: tailzone, probWeight: 8}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Fin
            shortcode: lfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Fin
            shortcode: rfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: tailzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Body
            shortcode: bodyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Fin
            shortcode: lfinloc
            bodyPartCode: lfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Fin
            shortcode: rfinloc
            bodyPartCode: rfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
      weight: {base: 300, calc: "300"}
      reachBase: 0
      bodyScaleBase: 0.82
      personalFatigue: enc + 5
    currentMoveMedium: aquatic
    movementProfiles:
      - medium: aquatic
        feetPerRound: 100
        leaguesPerWatch: 12
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

The river is the color of tea, and something exhales beside the canoe: a sharp huff, and a pale pink back rolling through the surface. A long, slender beak lifts, with a rounded forehead behind it, and a small eye looks at you from the side of the head. The animal turns and swims ahead of you, slowly, and stops. Where it stopped the surface is smooth over a sunken tree.

# Dossier {#dossier}

The River Dolphin is a freshwater dolphin of six to eight feet and about three hundred pounds, a slow, curious swimmer of muddy channels. It lives in the rivers and flooded forest of [[place-xelemrgn|Shelem Region]], in [[place-hanaltzuma|the Misty River]] (Ha'nal Ts'uma) and [[place-hanalxilik|the Blue River]] (Ha'nal Shilik) and the channels between them. The river peoples hold it to be a guide through dangerous water.

## Presentation

A stocky dolphin with a long, narrow beak set with stiff bristles at the tip and a rounded, bulging forehead that changes shape as the animal sends out its clicks. The skin is gray at birth and pinkish with age, bright pink in old males, and often scarred. A low ridge runs down the back in place of a fin, the flippers are broad paddles, and the neck is flexible so that the head turns freely. The eyes are small.

## In the Land

River dolphins live in the large rivers, their confluences and the lakes and channels beside them, and in the flooded forest in the wet season, where they swim among the tree trunks. They feed on fish, crabs and small turtles, hunting in murky water by sound, and they gather in the deep channels at river mouths and bends. They are slow and graceful swimmers, and they often surface to breathe with an audible huff.

## Key Behaviors

River dolphins travel alone, in pairs, or in small groups. They hunt by sending out clicks and reading the echoes, and they find fish in water so brown that sight is useless. They are curious, and they approach boats and canoes, follow them for a distance and sometimes swim alongside. They play with sticks, weed and floating fruit. They rarely leap. They are not aggressive and avoid fighting, though a dolphin tangled in a net or cornered in a channel can ram, bite and lash with its tail. In the dry season they gather in the deep pools that remain.

## What the People of Shelem Do

The priesthood of Shelem blends the official Itsani cosmology with the veneration of local spirits, and the river dolphins that guide canoes through dangerous water are among them. Boatmen follow a dolphin through shifting channels and treacherous water, and those who can read the movements of the dolphins as omens are respected as seers. Fishers do not hurt one, and a dolphin that follows a canoe is taken as a good sign. The animal is not hunted.

## Signs

- A sharp huff of breath on the river at dawn, with a ring of ripples.
- A pink back rolling through the brown surface of a channel.
- A school of fish leaping from the water near a bank in a panic.
- A clicking sound heard through the hull of a canoe at night.
- Smooth water around a sunken log, where a dolphin has paused over it.

## Combat Strategy

The river dolphin avoids fights. It is fast and agile in water, and its response to a threat is to leave. When it cannot, it rams with its hard forehead and snaps with its toothed beak, and it lashes out with its tail. A pair or group defends a calf as a unit. The animal cannot leave the water, and an enemy on land is safe from it.

## Attack Methods

### Ramming Strike

The dolphin drives its heavy forehead into the target, a blow that can break ribs or capsize a small canoe. It uses the strike to push enemies away rather than to kill.

### Tail Fluke

The dolphin slaps with its broad tail, striking anything behind it. The blow is quick and hard, and it hurts.

### Snapping Bite

The dolphin snaps its long beak, closing the rows of small, sharp teeth on a hand or arm. The bite is meant to make an enemy let go of a net or a calf, not to kill.

## Special Abilities

### Echolocation

The river dolphin hears its surroundings by sound, and it finds prey, sunken logs and shoals in water where nothing can be seen. It is never lost in brown water.

### Channel Guide

A dolphin that swims ahead of a canoe finds the deep channel, and avoids snags and shallows. Boatmen following one cross water that would otherwise be dangerous.

### Flexible Neck

The river dolphin turns its head freely in any direction, which lets it work through flooded trees and around obstacles that would stop a stiffer animal.

## Attributes

Strength
: 11-16 (1d6+10) — Strong for its size, with a heavy skull and powerful tail

Endurance
: 14-19 (1d6+13) — Swims and hunts for hours in strong current

Dexterity
: 9-14 (1d6+8) — Maneuvers precisely through flooded trees and around obstacles

Agility
: 14-19 (1d6+13) — One of the most agile swimmers on the river; turns in its own length

Perception
: 14-19 (1d6+13) — Hears and feels through sound; sees poorly but never loses its way

Aura
: 11-16 (1d6+10) — A gentle, intelligent presence; the river peoples treat it as a spirit

Will
: 9-14 (1d6+8) — Calm; defends a calf but does not seek a fight

Reasoning
: 10-13 (1d4+9) — Intelligent; remembers channels, boats and people

Creativity
: 9-12 (1d4+8) — Curious and inventive; plays with objects and finds new ways to hunt
