---
shortcode: bldrbck
name: {full: Boulderback, aliases: []}
type: being
subType: creature
description: "A made creature of animate stone and will that stands as an impassive obstacle in mountains, caves, and magic-rich quarries."
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
    per: 1d6+6
    aur: 1d6+4
    wil: 1d6+14
    rea: 1d6+4
    str: 1d6+39
    end: 1d6+23
    agl: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 42}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 26}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 85}}
    - name: Crushing Blow
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
          name: Crushing Blow
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 15, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Powerful Charge
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 42
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Powerful Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 15, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Stone Throw
      type: skill
      system:
        shortcode: hurl
        subType: combattechnique
        masteryLevelBase: 42
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: hurl
          name: Stone Throw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 17, aspect: blunt}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 80
          drawBase: 0
          traits: {}
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
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 14, edged: 13, piercing: 11, fire: 13}
      weight: {base: 7000, calc: "7000"}
      reachBase: 0
      bodyScaleBase: 2.39
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[bldrbck|Boulderback]]{float=top-left}

The old working is a notch in the cliff above the quarry ramps, abandoned, its floor heaped with spoil. Among the spoil stands a pile of boulders as tall as two men, stacked roughly in the shape of a man, with a ridge of jagged blocks along its back. You have walked past it twice. This time, as your shadow falls across it, the top boulder turns with a long, grinding crack, and in it are two deep hollows like eye sockets, and under them a split like a mouth. Dust sifts off its shoulders. One arm, a column of granite as thick as a temple pillar, lifts off the ground, and the hand at the end of it is a fist of smaller stones closing.

# Dossier {#dossier}

The Boulderback is a dreadspawn of living stone: a fifteen-foot giant of fitted boulders and slabs, weighing as much as a loaded stone barge, made to guard a place and keep on guarding it. It does not eat, does not sleep, and does not leave the ground it was set over. One stands in the quarry cliffs of [[place-legirusiselt|Legirusi Selat]], on the upper river of Aû'Khelâthu, where the empire's fine building stone is cut, and it has stood there longer than the quarry records go back. It is alive, as every dreadspawn is, with a will of a kind and a mind that is very slow and very sure, and it cannot breed. What it was made to guard in the cliff, and by whom, nobody knows.

## Presentation

The boulderback is built of stone: layered boulders and slabs fitted roughly together into a frame with a head, a body, two legs and two long arms. The head is one great boulder with two deep sockets and a horizontal crack for a mouth. The body is a stack of stone six feet across. The limbs are columns of granite and flint, and the hands are clusters of smaller stones that open and close. A jagged ridge of blocks stands out along its back. It is the color of the cliff it stands in and it is weathered like the cliff, with lichen in its cracks and swallows' nests under its shoulders. Every movement grinds and cracks, and dust falls from it when it walks. Standing still, it is a heap of rock.

## In the Land

Legirusi is the river strip with the cliffs at its back, and the boulderback's ground is a stretch of those cliffs above the quarry landings, a few hundred yards of cut faces, ledges, old workings and spoil heaps, with a sealed passage somewhere in it that the quarrymen do not know the entrance to. It walks that ground slowly, examining it, and stands still in it for months at a time. It does not come down to the river and does not go up onto the desert beyond the rim. The quarry gangs have worked round it for generations, and the faces on either side of its stretch are among the best stone in the selat; the stone of its own stretch has never been cut.

## Key Behaviors

The boulderback walks its ground, looks at it, and waits. It does not hunt and does not eat. It feels every footstep and every blow of a pick through the rock, and it knows when something is moving in its ground, even inside the cliff. It ignores anyone who keeps out. Anyone who comes into its ground it walks toward, steadily, and anyone who stays it crushes. Anyone who strikes its cliff with a tool it attacks at once. It follows an intruder only to the edge of its ground, then turns back and resumes its round. It has stood through floods, quakes and the cutting of the faces round it, and it shows no fear, anger or interest, only purpose.

## What the Quarrymen Do

The quarry gangs of Legirusi, who are farmers in the dry months and quarrymen while the flood drowns their fields, mark the edge of the boulderback's ground with painted stones and teach every new hand the line before he is given a pick. Nobody cuts within it. The temple-workshops' master masons regard the creature as a fact of the cliff, like a fault in the rock, and plan around it. Once in a long while a scholar or a treasure-seeker comes up the river convinced that what it guards is worth having; the quarry overseers will take his fee to show him the line, and will not take his body down to the river afterward. The barge pilots say that in the year of a great flood the boulderback stands at the very edge of its ground looking down at the water, and they read it as a sign the flood will be high.

## Signs

- A heap of boulders in the shape of a man where no spoil should be, on a ledge with no ramp to it.
- A stretch of cliff, between two worked faces, that has never been cut.
- A trail of crushed and powdered stone along a ledge, the tread of something very heavy.
- Swallows nesting in a rock face that shifts its position between one season and the next.
- A low grinding inside the cliff at night, felt through the soles of the feet more than heard.

## Combat Strategy

The boulderback does not plan. It walks toward a threat and hits it until it stops moving, and it charges an intruder who is running across its ground. It throws boulders, its own or the cliff's, at anything it cannot reach. It cannot be frightened, bribed, tricked into talking or turned from its purpose. It does not pursue past the edge of its ground, and the edge is the whole of a party's safety: anyone who gets across the line is let go. It is slow to climb, and it cannot follow into narrow passages or up a sheer face.

## Attack Methods

### Crushing Blow

The boulderback swings a fist of stone down or across. The blow shatters shields, breaks bone through armor, and drives a man into the ground.

### Powerful Charge

It walks faster, then runs, with surprising speed for its size, and crashes into a man with its whole weight, driving him back against the cliff or pinning him beneath it.

### Stone Throw

It wrenches a boulder from the cliff or from its own body and throws it. The stone strikes with crushing force at a distance and pins whoever it lands on.

## Special Abilities

### Stone-Bound Durability

Its body is many separate stones, and a blow that breaks one does not kill it. It shrugs off cuts and thrusts entirely, and even crushing blows only chip it; losing a limb slows it without stopping it.

### Tremor Sense

It feels everything that moves on or in its ground through the rock: footsteps, digging, a man hiding behind a wall or deep in a passage. It needs no eyes, and darkness and concealment do not hide anyone from it.

### Slow Regeneration

Standing in stone, it repairs itself. Cracks close, loosened blocks drift back into place, and lost stones are replaced from the cliff over hours and days.

### Frost and Water

Water that gets into its cracks and freezes splits it from inside. On the upper river frost is rare; the quarrymen know that a winter freeze is the one time it is vulnerable.

## Attributes

- **Perception:** 7-12 (1d6+6)

- **Aura:** 5-10 (1d6+4)

- **Will:** 15-20 (1d6+14)

- **Reasoning:** 5-10 (1d6+4)

- **Strength:** 40-45 (1d6+39)

- **Endurance:** 24-29 (1d6+23)

- **Agility:** 5-8 (1d4+4)

- **Creativity:** 3-6 (1d4+2)
