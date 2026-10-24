---
shortcode: lmnshd
name: {full: Luminshade, aliases: []}
type: being
subType: creature
description: "A paradoxical liminal spirit born where light and shadow meet, dwelling in reflections and dusk, alien and incomprehensible though not inherently hostile."
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
    str: 1d4+8
    end: 1d4+10
    dex: 1d4+12
    agl: 1d4+14
    per: 1d4+12
    aur: 1d4+12
    wil: 1d4+8
    rea: 1d4+8
    cre: 1d4+12
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Shadow Strike
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Shadow Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Light Blast
      type: skill
      system:
        shortcode: bolt
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: bolt
          name: Light Blast
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 45
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[lmnshd|Luminshade]]{float=top-left}

The sun is down behind the mountains and the great lake has gone still as a mirror, half gold and half dark, and the causeway out to the island temple runs across it like a line drawn on glass. Halfway along the causeway someone is standing who was not there a moment ago. Tall, too tall, with limbs too long and too graceful, and made of light and shadow in equal parts that do not mix: one side of the figure glows like the lake's gold, the other is as dark as its depths, and the two halves shift and trade places as you watch. It turns its head and considers you, with great interest and no warmth at all.

# Dossier {#dossier}

The Luminshade is a spirit of the boundary between light and shadow, a tall, graceful, man-shaped figure made of the two in perfect balance, which dwells in reflections, at dusk and dawn, and wherever light behaves strangely. It is curious, alien and not hostile, though it is no friend either: it cares for beauty, symmetry and interesting patterns, and it judges people by whether they provide them. It is seen most often at [[place-ixkulchalix|Ishkul Ch’alish]], the temple-city on the sacred lake of [[place-kuxiixbalrgn|K'ushi Ish'bal]] in [[place-southkiichchik|Southern Ki'ich'chik]], where the lake is said to be the eye through which the gods observe the mortal world and the boundary between the mortal and the divine grows thin.

## Presentation

A luminshade stands about six feet tall, shaped roughly like a person but plainly not one: its limbs are too long, its movements too smooth, its face a blank shifting of bright and dark. Its body is light and shadow in exact balance, neither winning, and the two move independently across it, so that it seems now mostly bright and now mostly dark. Where it walks, light bends: reflections come too sharp, shadows fall the wrong way, and colors brighten or drain. It makes no sound. It appears in a reflection before it appears in the world, and it can step out of a mirror or a still pool as easily as through a door.

## In the Land

The great lake of Ishkul Ch'alish dominates the eastern reaches of K'ushi Ish'bal, and the temple-city on its northern shore is built entirely toward the water, its primary pyramid placed to catch the first light of dawn reflected across the lake. Luminshades come there at dawn and dusk, when the lake is a mirror, and walk the causeways, the viewing platforms and the ritual bathing pools, and the surface of the lake itself. They are drawn to places of change and of strange light: twilight, the edges of the lake's reflections, the polished stone of the temples. They do not stay long, and they seem to go back into the reflections they came out of.

## Key Behaviors

A luminshade is driven by curiosity and by an aesthetic sense no one has been able to describe. It watches people, imitates them, rearranges light and shadow round them as if trying out patterns, and sometimes speaks, in riddles or in plain words that mean something other than they seem. It is not malevolent, but its ideas of harm and help are not human, and it can blind, chill or terrify someone simply to see what happens. It can sometimes be bargained with, on grounds that appeal to its sense of beauty, and it scorns crude offers. It fights reluctantly, and it may refuse to fight an opponent it finds dull.

## What the Priests Do

The priesthood of Ishkul Ch'alish maintains absolute control over access to the lake's waters, and it treats the luminshades as part of what the lake is: a sign that the boundary is thin and the gods are watching. Priests do not speak to them, and pilgrims are told not to answer one that speaks. The city's quiet character, where loud voices and raucous behavior are unusual, suits the luminshades; the priests say a luminshade that is shown something ugly, a quarrel or a cruelty on the causeway, becomes dangerous, and a pilgrim who behaves badly at dusk may be blinded by it before the temple guards reach him. The temple's craftspeople make offerings of polished obsidian mirrors and set them along the causeways at dusk, and the luminshades are seen looking into them.

## Signs

- Reflections in still water that are sharper and brighter than the scene they reflect, or show something that is not there.
- Shadows falling the wrong way from a lamp at dusk.
- A tall figure on a causeway or a terrace at twilight that is not there in full daylight or full dark.
- Colors that brighten or drain in one spot, round nothing.
- Polished mirrors set out in a row at dusk, facing the water.

## Combat Strategy

A luminshade fights playfully and creatively, to make a fight interesting more than to end it. It blinds with bursts of light, chills with lashes of shadow, steps out of one reflection and into another to strike from behind, and turns its enemies' own light against them. It may stop fighting, suddenly, when it loses interest. It is weakest when forced wholly into darkness or wholly into blinding light, where its balance fails.

## Attack Methods

### Shadow Strike

The luminshade draws the shadows round it into tendrils and lashes out. The blow is cold and leaves the victim feeling diminished, as if some light inside him had been drained.

### Light Blast

It focuses its brightness into a burst or a beam. The victim feels as if he had looked into the sun: his eyes stream and his sight blurs, and repeated blasts can blind him for hours.

## Special Abilities

### Light Manipulation

It bends, redirects and concentrates light: it makes blinding flashes, turns reflections into mirrors that show false images, and turns a beam of light on a target again and again.

### Shadow Weaving

It deepens shadows into invisibility, makes pockets of darkness light cannot enter, and forms shadows solid enough to slow and tangle those who move through them.

### Translocation Through Light

It steps into one reflection or pool of light and out of another it can see, instantly.

### Paradox Nature

Light and dark magic both slide off it. Forced into total darkness or total light, its balance fails and it becomes vulnerable.

## Attributes

Strength
: 9-12 (1d4+8)

Endurance
: 11-14 (1d4+10)

Dexterity
: 13-16 (1d4+12)

Agility
: 15-18 (1d4+14)

Perception
: 13-16 (1d4+12)

Aura
: 13-16 (1d4+12)

Will
: 9-12 (1d4+8)

Reasoning
: 9-12 (1d4+8)

Creativity
: 13-16 (1d4+12)
