---
shortcode: phsphrsc
name: {full: Phosphorescent Globule}
type: being
subType: creature
description: "A cunning predatory ooze of lightless caves that lures prey with deceptive bioluminescence before striking."
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
    str: 1d6+6
    end: 1d6+14
    dex: 1d6+10
    agl: 1d4+9
    per: 1d4+13
    aur: 1d6+14
    wil: 1d4+13
    rea: 1d6+6
    cre: 1d6+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 51}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Acidic Engulfment
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 69
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Acidic Engulfment
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 10, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, envelop: true}
  system:
    body:
      structure:
        zones:
          - {name: Core, shortcode: corezone, probWeight: 1}
          - {name: Mass, shortcode: masszone, probWeight: 2}
          - {name: Tendrils, shortcode: tendrilzone, probWeight: 1}
        parts:
          - name: Core
            shortcode: corepart
            bodyZoneCode: corezone
            roles: [vital]
            canHoldItem: false
            probWeight: 10
          - name: Mass
            shortcode: masspart
            bodyZoneCode: masszone
            roles: [core, locomotor]
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
          - name: Core
            shortcode: coreloc
            bodyPartCode: corepart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Mass
            shortcode: massloc
            bodyPartCode: masspart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Underside
            shortcode: underbellyloc
            bodyPartCode: masspart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Tendrils
            shortcode: ltendrilloc
            bodyPartCode: ltendrilpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Tendrils
            shortcode: rtendrilloc
            bodyPartCode: rtendrilpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 10, calc: "10"}
      reachBase: 0
      bodyScaleBase: 0.94
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[phsphrsc|Phosphorescent Globule]]{float=top-left}

The adit goes into the mountain farther than the miners said, and your torch is burning low when you see the light ahead: a soft green-blue glow, pulsing gently, filling the end of the gallery. It is beautiful, and it is warm in color, and you walk toward it. Close to, it is a ball of clear jelly as big as a cart-wheel, hanging a foot off the floor with nothing holding it up, lit from inside by a slow, beating glow. Inside it, turning slowly, are a pick-head, a lamp, a belt buckle and the white curve of a jaw. The glow brightens, and brightens again, and fills your eyes.

# Dossier {#dossier}

The Phosphorescent Globule is a small dreadspawn of glowing jelly, four to eight feet across but weighing only ten pounds, which floats slowly through deep, dark places, lures prey with its light and dissolves whatever it engulfs. It changes shape at will, blinds with sudden flares, and splits into pieces when it is hurt. It lives in deep caves and the flooded workings of mines, and one holds an abandoned working in the mountains of [[place-sorvanda|Sórvanda]], on [[place-elavendre|Élavendre]]'s eastern border, where the ore lies under Áelendan ground and an unlicensed working does not continue. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The globule is a roughly round mass of clear or semi-clear jelly, sickly green or pale blue, glowing from inside with a slow, pulsing light. It floats a little off the ground, without wings or any visible means, and drifts slowly. It can stretch, flatten, narrow to squeeze through a crack, or spread into a curtain across a gallery. Inside it, things it has eaten and not yet dissolved hang and turn: bones, metal, tools. It makes no sound and has no smell to speak of, except a faint sharpness, like vinegar, when it is close. Its surface is wet and burns skin that touches it.

## In the Land

Sórvanda's mountains are rich in silver, gold and gemstones, and the ore lies under ground the Áelendan do not permit to be mined; four centuries of crowns have tested that prohibition exactly far enough to know it is real. The globule drifts through one of the old unlicensed workings in the eastern mountains, a set of galleries and shafts driven into the hill by a company that the [[affiliation-alndnwrdns|Áelendan Wardens]] found, and the natural caves beyond them where the galleries broke through into an underground lake. It hunts the bats, cave-fish and blind crickets of the caves, and anything that comes in from outside: foxes, martens, men. It keeps to the dark and to the deep levels and never comes out into daylight.

## Key Behaviors

The globule is patient and nearly sedentary. It settles in a gallery or over the lake, glows, and waits. In the dark its light draws living things toward it, and the glow is soothing and hard to look away from. When prey is near, it either flares, to dazzle it, or dims slowly, so that the prey comes closer to see; then it surges, engulfs and dissolves. It seems near-mindless in its habits and is cunning in its tactics, dimming and brightening, retreating and flowing round its prey. It digests slowly, and what it cannot digest, metal and stone, it carries inside it for a long time.

## What People Do

The Áelendan say the old working is closed and do not go into it. The Wardens leave the globule where it is, because a cave with that in it is a working nobody will reopen. Every few years a prospector from the kingdom hears that silver was found in the old galleries before the Wardens came, and that the company's tools and takings are still in there, and goes up to look; sometimes he comes back with a story about a light in the deep levels, and more often he does not come back. The miners of the licensed workings at the fringes of Sórvanda tell each other never to follow a light underground that is not their own, and to carry fire, not lamps, into old ground.

## Signs

- A soft green or blue glow deep in a gallery or over still water, pulsing slowly, where no lamp is.
- Bats and cave-fish fewer and fewer in a cave, and no bones left behind.
- Metal tools, buckles and lamp-bowls lying on a gallery floor, pitted and clean, with no bodies near them.
- Walls and floors of a passage etched smooth and pale in a broad band, as if something had flowed along them.
- A faint sharp smell, like vinegar, in a passage with no water in it.

## Combat Strategy

The globule opens with light: it flares to dazzle and disorient, then drifts in and engulfs the nearest victim while he cannot see. Blows pass into its jelly and do little lasting harm. When it is badly hurt, it splits into several smaller globules, which drift apart and surround its enemies, and draw back together later. It is slow, and a party that keeps its eyes shaded and keeps moving can get past it. Fire and hard cold are what hurt it.

## Attack Methods

### Acidic Engulfment

The globule surges over a victim and folds itself round him, partly or wholly. Its acid dissolves flesh, bone and equipment, faster the longer it holds, and it grips with a steady, crushing pressure.

## Special Abilities

### Blinding Flash

The globule's light flares to a brilliant blaze that fills the gallery, blinding and disorienting everyone facing it. Dazzled men cannot follow its movements or fight together.

### Bioluminescent Lure

Its glow draws the weak-willed toward it in spite of themselves. A strong will or a clear mind can resist the pull.

### Fragmentation

When it is badly hurt, the globule splits into several smaller globules, each with part of its size and strength, which can flank and surround and which draw back together into one when the danger has passed.

### Acidic Body

Everything that touches it is slowly dissolved. Weapons and armor left in contact with it are eaten away, and bare skin is burned.

### Fire and Cold

Fire disrupts its light and makes its body unstable and painful. Hard cold stiffens it and breaks up its movement.

## Attributes

Strength
: 7-12 (1d6+6)

Endurance
: 15-20 (1d6+14)

Dexterity
: 11-16 (1d6+10)

Agility
: 10-13 (1d4+9)

Perception
: 14-17 (1d4+13)

Aura
: 15-20 (1d6+14)

Will
: 14-17 (1d4+13)

Reasoning
: 7-12 (1d6+6)

Creativity
: 11-16 (1d6+10)
