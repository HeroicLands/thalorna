---
shortcode: mrrrlng
name: {full: Mirrorling}
type: being
subType: creature
description: "A light-warping predator of paradox that dwells in mirror halls and crystal caverns, wielding fractured reflections as both weapon and shield."
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
    str: 1d6+21
    end: 1d4+8
    dex: 1d4+12
    agl: 1d4+10
    per: 1d4+12
    aur: 1d4+12
    wil: 1d4+10
    rea: 1d4+6
    cre: 1d4+12
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 24}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Reflective Blade Strike
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Reflective Blade Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 6, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
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
      weight: {base: 2250, calc: "2250"}
      reachBase: 0
      bodyScaleBase: 1.66
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[mrrrlng|Mirrorling]]{float=top-left}

The hall of mirrors runs the length of the house, glass from floor to ceiling on both sides, so that the candles in it go on forever. Among the reflections stands a figure as tall as a door, a man-shape made of polished silver, and in its blank face you see yourself, small and pale. You look away to the mirrors, and there are three of it in them, and then six, all turning toward you, and when you look back to the room there are two of it in the room as well. The candle-flames shiver. A faint, high ringing fills the hall, like a wet finger round the rim of a glass, and one of the silver figures raises an arm that has become a long, bright blade.

# Dossier {#dossier}

The Mirrorling is a dreadspawn of living reflection: a figure six to eight feet tall, man-shaped, with a body like liquid silver, and a weight far greater than its size suggests. It lives where light is multiplied—halls of mirrors, polished stone, still water—and it fights with light, throwing out images of itself and turning blows back on whoever struck them. It does not eat. It feeds, as far as anyone can tell, on violence: on blows that strike it and rebound. One has taken up residence in a great house on [[place-selvin|Selvin]] in [[place-orzara|Orzara]], the hill where the rising families of the Vylarian capital build, and its owners would very much like nobody to know. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The mirrorling's whole surface is a perfect, liquid-smooth mirror, like burnished quicksilver. It has the shape of a tall, well-made man, with defined muscle and joints, but its limbs bend too smoothly, as if there were no bone in them. Its face is a blank mirror, and whoever looks into it sees himself. Its arms can draw out into long blades of bright edge. It moves without sound, except for a faint, high ringing like glass, and the light near it bends: candle-flames lean toward it, and reflections of it appear in mirrors where it is not standing. Staring into its surface too long, people report seeing things in it that are not in the room.

## In the Land

Orzara is the heart of the [[affiliation-vylarinmpr|Vylarian Empire]], and Selvin, the greener and newer of its patrician hills, is where new money builds great houses to rival the old villas of [Torvel]{.name data-type="place/feature"}. The mirrorling holds one of those houses: a villa whose builder spent a fortune on a long gallery of mirrors and polished marble, and who did not live long in it. It keeps to the gallery and the rooms that open from it, and to the lit fountain court, and it is seen in the mirrors of the rest of the house at night. It does not leave the house. Its owners, a rising family, have shut the gallery, kept the servants who know, and gone on giving dinners in the other wing.

## Key Behaviors

A mirrorling claims a place full of reflections and stays in it. It does not hunt for food. It comes to violence: a quarrel, a fight, a duel, anything with blows in it, and it attacks whoever is fighting. Every blow struck at it that rebounds off its surface seems to strengthen it, and a mirrorling that has been fought often and long grows stronger and more confident. It is intelligent and patient and enjoys confusion. Darkness weakens it: in a room without light or reflection it slows, and in absolute darkness it grows sluggish and brittle. It avoids the dark.

## What the Household Does

The family keeps the mirror gallery locked and its windows shuttered, and no candle is lit in it, because a dark gallery is a quiet one. Servants are told never to quarrel in the house and never to strike anyone, a rule the steward enforces with dismissal, because a fight in any room with a mirror has brought the creature through the glass. Mirrors in the family's wing have been covered with cloth. A scholar of the [[affiliation-panepistmm|Epistémion]], quietly consulted, advised them to break every mirror in the house and fight it in the dark, and the family, who paid for the mirrors, has not yet done so. Rivals on Torvel have heard rumors, and an invitation to dine on Selvin is now accepted with care.

## Signs

- Reflections in a mirror of a figure that is not standing in the room.
- Candle-flames that lean in one direction, toward a mirror, in a still room.
- A high, faint ringing like a wet finger on glass, heard at night in a quiet house.
- Mirrors covered with cloth throughout a fine house, and a gallery kept locked.
- A servant who will not raise his voice, and a steward who will not let anyone else raise theirs.

## Combat Strategy

The mirrorling opens by multiplying itself: it throws out images that move and seem solid, among the reflections, so that its enemies strike at the wrong one. It keeps moving, using the mirrors and polished surfaces to keep the illusion of numbers. It turns each blow that glances off it back on the striker or on someone beside him, and every blow that misses makes it stronger, so it is content to let its enemies wear themselves out. It strikes with its bladed arms when it sees an opening. In darkness, or among dull surfaces, it loses most of its advantages, and it retreats from the dark.

## Attack Methods

### Reflective Blade Strike

Its arms sharpen into long edges of bright reflection and strike hard and precisely. The wounds are deep and strange, and they bend and blur under the eye.

## Special Abilities

### Mirrored Retaliation

A blow that glances off its surface is sent back, with the same force, along a new line: a sword-cut returns as a flash of cutting light, an arrow is turned aside into a companion.

### Reflective Embodiment

Its body bends and returns light so perfectly that it is hard to strike. Blows go astray, pass through its image or round it, and land on nothing.

### Fractured Image

It throws out images of itself, at least two of which move on their own and seem solid to the touch, and its enemies must guess which is real.

### Void Reflection

A man who stares into its surface sees things there: violence, vanity, scenes of the creature feeding. Those who look too long begin to feel distant and unreal to themselves.

### Darkness Weakness

In darkness, or where nothing reflects, it fights on even terms and its tricks fail. Kept in absolute darkness for more than a few minutes, it grows sluggish and brittle.

## Attributes

Strength
: 22-27 (1d6+21)

Endurance
: 9-12 (1d4+8)

Dexterity
: 13-16 (1d4+12)

Agility
: 11-14 (1d4+10)

Perception
: 13-16 (1d4+12)

Aura
: 13-16 (1d4+12)

Will
: 11-14 (1d4+10)

Reasoning
: 7-10 (1d4+6)

Creativity
: 13-16 (1d4+12)
