---
shortcode: wrthblm
name: {full: Wraithbloom, aliases: []}
type: being
subType: creature
description: "The animated spirit of ancient magic-steeped plants, haunting old groves and sacred gardens where the veil between living and dead has worn thin."
tags: [spirit]
data:
  packFolder: spirit
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
  kbcat: spirit
  attrRollFormula:
    str: 1d4+3
    end: 1d4+6
    dex: 1d4+8
    agl: 1d4+10
    per: 1d4+12
    aur: 1d4+8
    wil: 1d4+6
    rea: 1d4+5
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 20}}
    - name: Spectral Vines
      type: skill
      system:
        shortcode: tentacle
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tentacle
          name: Spectral Vines
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -3, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 4}
  system:
    body:
      structure:
        zones:
          - {name: Crown, shortcode: crownzone, probWeight: 1}
          - {name: Stem, shortcode: stemzone, probWeight: 2}
          - {name: Tendrils, shortcode: tendrilzone, probWeight: 2}
        parts:
          - name: Crown
            shortcode: crownpart
            bodyZoneCode: crownzone
            roles: [vital]
            canHoldItem: false
            probWeight: 10
          - name: Stem
            shortcode: stempart
            bodyZoneCode: stemzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Tendrils
            shortcode: ltendrilpart
            bodyZoneCode: tendrilzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Tendrils
            shortcode: rtendrilpart
            bodyZoneCode: tendrilzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Crown
            shortcode: crownloc
            bodyPartCode: crownpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Stem
            shortcode: stemloc
            bodyPartCode: stempart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Tendrils
            shortcode: ltendrilloc
            bodyPartCode: ltendrilpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Tendrils
            shortcode: rtendrilloc
            bodyPartCode: rtendrilpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 0.67
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 20
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: mixed_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: needleleaf_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: woodland, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[wrthblm|Wraithbloom]]{float=top-left}

The oldest bed in the shrine's garden is behind a wall of its own, and the gardener who unlocked the gate for you has not followed you in. The plants inside are old and heavy with scent, and in the middle of the bed, a few feet above the ground, a flower is hanging in the air. It is as wide as a cart-wheel, its petals pale and translucent as moonlight on water, ringed round a cluster of ghostly vines and stamens that sway without a breeze. It turns toward you as a sunflower turns. A cloud of glittering pollen drifts off it, and the scent becomes overwhelming, sweet and drowsy, and the garden begins, very gently, to tilt.

# Dossier {#dossier}

The Wraithbloom is the spirit of an ancient plant: a flower or vine from ground so long tended and so full of power that its death became only another kind of growth, and that now haunts its garden as a spectral bloom three to five feet across. It defends its garden with spectral vines, with pollen that brings waking dreams and sleep, and by drawing the life out of those it holds. It is not vicious, and it can be dealt with. It is found in old groves and sacred gardens where the veil between living and dead has worn thin, and the best known haunts a walled bed in one of the healing-shrines of [[place-garlutselat|Gar-Lut Selat]], the small, devout selat of the upper river of [[place-aukhelathrgq|Au'Khelathu]] whose herb-gardens the rest of the empire knows it for.

## Presentation

A wraithbloom is a hovering assemblage of spectral plants: translucent petals, pale as moonlight, in a corona round a cluster of ghostly vines and stamens, three to five feet across, floating a few feet off the ground. It glows faintly at dusk and is hard to see at noon. Its vines trail and sway with no wind and can reach out a long way. It gives off a heavy, sweet scent that grows overwhelming when it is roused, and clouds of luminous pollen. It makes no sound, and it moves slowly, turning toward whatever interests it.

## In the Land

The healing-shrines of Gar-Lut belong to the [[affiliation-uznera|Faith of Uzn'era]], honoring [[lore-uzneradty|Uzn'era]], the mother goddess of fertility, renewal and healing, and their gardens keep the plants the healers use; a herb-gardener tells a novice that everything in the beds is somebody's cure. The wraithbloom haunts the oldest bed of the oldest shrine's garden, walled off from the rest, where the plants have been tended in the same ground for longer than the temple's records go back. It does not leave the bed, and if it is taken far from it, it fades. Inside its bed the plants grow larger, stronger and more potent than anywhere else, and the bed spreads, slowly, year by year, into the beds round it.

## Key Behaviors

A wraithbloom is bound to its place and tends it. It encourages the plants round it to grow and spread, and it defends them: it attacks whoever damages them, roots them up or cuts them carelessly, and it is indifferent to those who come in and leave them alone. It draws its strength from the plants of its garden and heals from them. It can be approached respectfully and bargained with, through gifts to the garden and the right kind of care, and a gardener who knows how can cut from its bed and come out again. It does not like fire or bright sun.

## What the Gardeners Do

The gardeners of the shrine say that what grows in the walled bed is the goddess's own planting, and that the wraithbloom is the bed's keeper, and they treat it with the courtesy owed to an old and touchy colleague. Only the eldest gardener goes into the bed, at dawn, when the bloom is faint, bringing water from the shrine's own well and a cutting of something new for the bed, and she asks before she cuts. The healers pay a great deal for what she brings out, because remedies made from that bed work when others do not. Novices are not allowed past the gate. A thief who climbed the wall one night for the bed's herbs was found the next morning asleep among them, and slept for nine days, and woke much thinner, and has not been well since.

## Signs

- A walled garden bed whose plants are larger, greener and more fragrant than any round it.
- A faint pale glow over a garden at dusk with no lamp in it.
- A sweet, drowsy scent that grows stronger the closer one comes to a particular bed.
- Glittering pollen on the paths in the morning, and birds asleep among the plants.
- Gardeners who will not go past a gate and an old woman who goes in alone at dawn.

## Combat Strategy

A wraithbloom does not seek a fight, and it fights only to defend its garden. It releases its pollen to confuse and drowse its enemies, wraps them in its vines, and draws their life while they dream. It is hard to strike with weapons, which pass partly through it, and it heals from the plants round it. It is not vicious: it aims to drive intruders away or put them to sleep, not to kill, unless they keep coming. Fire, sunlight and light magic harm it badly.

## Attack Methods

### Spectral Vines

The wraithbloom reaches out with thorny spectral vines that wind round a victim and draw him toward the bloom. The vines pass partly through armor, and the victim feels both the grip and a drain of strength.

## Special Abilities

### Toxic Pollen

It releases clouds of luminous pollen that bring hallucinations, drowsiness and confusion. A man who breathes deeply is lost in waking dreams and cannot tell them from the world, and long exposure brings a sleep that is hard to wake from.

### Life Drain

A victim held in its vines or lost in its pollen has his life drawn out slowly and steadily, his strength and will fading as the bloom feeds.

### Spectral Nature

It is partly incorporeal, and weapons pass through it with little effect. Fire, sunlight and light magic harm it badly.

### Pollen Cloud

It fills a space with a cloud of pollen in which everyone sees their own fears and wishes and grows drowsy and dull.

### Plant Regeneration

It heals by drawing on the plants round it, and in its own garden it cannot be outlasted.

### Territorial Bond

It is bound to its garden and is stronger there. Taken far from it, it weakens and fades.

## Attributes

Strength
: 4-7 (1d4+3)

Endurance
: 7-10 (1d4+6)

Dexterity
: 9-12 (1d4+8)

Agility
: 11-14 (1d4+10)

Perception
: 13-16 (1d4+12)

Aura
: 9-12 (1d4+8)

Will
: 7-10 (1d4+6)

Reasoning
: 6-9 (1d4+5)

Creativity
: 7-10 (1d4+6)
