---
shortcode: stnbst
name: {full: Stonebeast, aliases: []}
type: being
subType: creature
description: "An ancient earth-and-stone guardian that lies dormant in caverns until disturbed, then becomes an implacable force of destruction."
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
    end: 1d4+16
    dex: 1d4+3
    per: 1d4+9
    aur: 1d4+5
    wil: 1d4+13
    rea: 1d6+6
    cre: 1d4+5
    str: 1d6+47
    agl: 1d4+3
  items:
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 50}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 88}}
    - name: Crushing Stomp
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 40
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Crushing Stomp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 17, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Shattering Punch
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Shattering Punch
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 19, aspect: edged}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Rock Throw
      type: skill
      system:
        shortcode: hurl
        subType: combattechnique
        masteryLevelBase: 40
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: hurl
          name: Rock Throw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 21, aspect: blunt}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 120
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
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
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
      weight: {base: 27000, calc: "27000"}
      reachBase: 0
      bodyScaleBase: 2.68
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: topography, key: steep, mode: add, textValue: "0"}
          - {scope: surface_cover, key: alpine, mode: add, textValue: "0"}
          - {scope: surface_cover, key: barren, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[stnbst|Stonebeast]]{float=top-left}

The cave under the col is bigger than it looked from outside, and its floor is heaped with fallen rock, and in the middle of the heap is a mound of black stone and gray crystal as long as two wagons. The garrison's quarrymen were cutting stone from the cave wall when the mound moved. Now it is rising: blocks of stone grinding apart and settling into four legs, a body like a fallen tower, a squared head that turns toward the light of the cave mouth. Two eyes of black glass are set deep in it, and something burns behind them. Dust and pebbles pour off its back. When it takes its first step the whole cave shakes, and the roof above the cave mouth begins to crack.

# Dossier {#dossier}

The Stonebeast is a dreadspawn of living stone: a four-legged mass of rock and crystal twenty feet long and many tons in weight, which lies dormant in caverns, sometimes for centuries, and wakes when something disturbs it. Then it destroys whatever woke it, slowly and completely, and goes back to sleep. One sleeps in a cavern under the col of [[place-sankhadvra|Shankhadvara]], beneath the black face of [[place-kalashkhra|Kalashikhara]] at the end of the Eastern Reach, a few hundred yards from [[place-sanghafort|the Sangha-fort]], the one standing garrison the temple-republics of Vedyara keep. It has woken twice in the fort's four centuries. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The stonebeast is shaped roughly like a great four-legged beast built of stone: an irregular mass of black and gray blocks, the black rock of Kalashikhara, run through with gray and clear crystal, with legs like piers and a squared, heavy head. Its eyes are polished black glass set deep in the head, with a dull glow behind them when it is awake. It has no mouth that anyone has seen. When it moves, the blocks grind and shift against each other and dust pours off it; when it is still it is a heap of rock, and grass and lichen grow on it. Its footsteps shake the ground for a mile.

## In the Land

Shankhadvara is the easternmost and worst of the crossings of the wall, treacherous and lightly traveled, and the Sangha-fort on its col is a squat stone work with a cistern, a granary, a signal-tower and sixty men. The stonebeast's cavern is in the rock below the col on the Vedyari side, a deep cave that runs back into the mountain. It does not eat, drink or rest beyond stillness, and it lies there. It wakes when stone is taken from its cave or the rock round it, when there is a heavy tremor, or when intruders go deep into its cavern, and then it comes out and destroys what woke it and anything near it, and goes back. The steep, bare, broken rock of the high pass is its ground, and it moves over it slowly but without difficulty.

## Key Behaviors

Dormant, the stonebeast is a heap of rock and does nothing at all, for years. Woken, it is methodical and inevitable: it walks toward whatever disturbed it at its own pace, crushes it, and does not stop until it is gone. It repeats what works. It reshapes the stone round it, slowly, opening cracks, bringing down roofs, and it heals itself out of the rock it stands on. When it has finished, it goes back to its cavern and is still again. The two times it woke in the fort's history, it came up onto the col; the first time it brought down the fort's original signal-tower.

## What the Garrison Does

The fort is manned in rotation by the janapadas of the Bharava circuit, and every new commander, who serves three years, is told the rules about the cave before anything else: nobody cuts stone within a long bowshot of it, nobody goes into it, and nobody sets off the signal-fire's great drum within its hearing during the season the rock is frozen and carries sound. The fort's stone is brought up from the Vedyari side on [[affiliation-hvarnguides|Hvarn]] pack-trains, at great cost, for that reason. The shrine-ushtaka seconded from the Pass-Shrine above keeps the cave mouth swept and marks the cistern wall each spring with a line of white. The Hvarn who take caravans under the peak give its western side a wide berth for reasons they describe as weather; some of the garrison say the stonebeast is the reason no shrine was ever built on Kalashikhara, and the ushtakas do not say so.

## Signs

- A cave mouth on a mountain col with a broad, smooth trail worn from it, as if something very heavy had dragged itself out and back.
- A heap of black rock and gray crystal in a cave that grass and lichen grow on, shaped a little like a lying beast.
- Old fortifications or buildings near a cave smashed flat and never rebuilt.
- Rock faces nearby cracked in long, fresh lines with no frost or quake to account for them.
- A tremor that comes in regular beats, like footsteps, from inside a mountain.

## Combat Strategy

A woken stonebeast advances on whatever woke it at its own pace and crushes it, with stamps, blows and thrown rock. It barely changes its tactics: it repeats what works and stops doing what does not. It cannot be frightened, bargained with or turned aside. It works the stone round it to trap and bury its enemies. When it has destroyed what woke it, it goes back to sleep. Water is the one thing it shrinks from, because flowing water wears it away, and the garrison keeps the cistern full for that reason as much as for drinking.

## Attack Methods

### Crushing Stomp

It raises a leg like a pier and brings it down, and the ground breaks in a ring round the blow, throwing men down and leaving the rock broken and treacherous.

### Shattering Punch

It strikes with a forelimb from a surprising distance, and the blow shatters bone and armor alike. A man hit squarely is crippled if he lives.

### Rock Throw

It tears stone from the mountain or from its own body and hurls it, hard and accurately, at anything out of reach.

## Special Abilities

### Stone Resilience

Swords, arrows and spears barely mark it. Only very heavy blows, acid, sustained magic or water do lasting harm.

### Earthen Authority

Slowly, it commands the stone round it: walls shift, floors crack and give way, roofs come down. The work takes time, and nothing stops it.

### Regeneration Through Stone

In contact with stone it slowly mends itself. Cut off from stone, or worked on by sustained magic, it can be worn down.

### Water Weakness

Flowing water erodes it and long immersion dissolves it. It shrinks from water and will retreat from it.

## Attributes

- **Endurance:** 17-20 (1d4+16)

- **Dexterity:** 4-7 (1d4+3)

- **Perception:** 10-13 (1d4+9)

- **Aura:** 6-9 (1d4+5)

- **Will:** 14-17 (1d4+13)

- **Reasoning:** 7-12 (1d6+6)

- **Creativity:** 6-9 (1d4+5)

- **Strength:** 48-53 (1d6+47)

- **Agility:** 4-7 (1d4+3)
