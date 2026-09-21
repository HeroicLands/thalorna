---
tags:
  - dreadspawn
  - creature
name:
  full: Forest Troll
  aliases: []
description: "A massive woodland apex predator born of primal earth-magic that moves through dense old-growth forest as easily as open ground."
shortcode: frsttrll
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: []
  gender: null
  species: null
  age: null
  birthday: null
  height: null
  weight: null
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
    str: 1d6+29
    end: 1d6+23
    dex: 1d4+6
    agl: 1d4+6
    per: 1d4+8
    aur: 1d4+9
    wil: 1d4+10
    rea: 1d4+5
    cre: 1d4+5
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 32 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 27 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 8 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 75 } }
    - name: Mighty Blow
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: punch
          name: Mighty Blow
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 6
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 10
            aspect: blunt
          lengthBase: 2
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
    - name: Grapple and Tear
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: grab
          name: Grapple and Tear
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 12
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 32
            aspect: blunt
          lengthBase: 2
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 2
          - name: Arms
            shortcode: armszone
            probWeight: 8
          - name: Torso
            shortcode: torsozone
            probWeight: 8
          - name: Legs
            shortcode: legszone
            probWeight: 12
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
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
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase:
              blunt: 9
              edged: 8
              piercing: 6
              fire: 8
      weight:
        base: 2300
        calc: "2300"
      reachBase: 0
      bodyScaleBase: 2
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

![[frsttrll|Forest Troll]]{float: top-left}

The old oak in front of you shifts. Bark cracks like skin, and what you took for gnarled wood straightens into limbs and a torso. Moss and vines slide off it like a dropped robe, and the skin under them is as green as rotting wood. The thing is twice your height and built of nothing but raw strength — limbs thick as tree trunks, hands like woven roots and bone. Its breath smells of wet earth and decay. Leaves are matted into hair that might be plant and might be vermin. It makes no sound as it comes toward you, for all its size. It simply is closer than it was.

# Dossier {#dossier}

Forest trolls are the lords of the deep woods, born of old earth-magic and hunger, and they move through close growth as easily as a man crosses a field. They are found in the oldest forests, in country the wild has taken back, and wherever settlement has not yet cut in deep.

## The Thing Itself

A Forest Troll stands twelve to fourteen feet. The skin runs from a sick green to a brackish brown and is textured like bark. Vines and roots are not draped on it but grown into it, threading the flesh, and now and then they move on their own. The hair is a tangle of twig, leaf and living growth with insects and small animals nesting in it. The hands are huge, more paw than hand, the fingers ending in points like thorns; the feet are broad, splayed, gnarled like roots. The eyes are deep-set, an unsettling greenish brown, and there is thought in them. The mouth is full of irregular rows of teeth, some like stone, some like bone, some like wood. It is silent for its bulk, arriving in a clearing rather than walking into it, and it carries a faint stench of turned earth and old rot.

## How It Hunts

A troll claims an enormous ground — sometimes a whole forest — and walks it methodically, and it knows every tree, path and clearing in it. Anything that comes in is attacked. It hunts to feed, never for sport, but it will defend the ground whether or not it is hungry, and it uses the forest as a weapon: separating a party, forcing it into a narrow way, driving it toward a cliff or a river. It understands how prey behaves, times its attack, and knows how to frighten. The opening is usually a charge or a grab from surprise. After that it relies on its strength and on healing faster than it is hurt. It follows anything that runs, through woods where it knows every root, as far as the edge of its territory and no farther. Against something clearly stronger it withdraws to its lair and waits to heal, and outlasts the intruder. Trolls have nothing to do with each other; where two territories meet, the fight is total. Between hunts a troll lies up in the deepest wilderness it has.

The grip of one hand crushes and keeps crushing. A swing of the arm breaks bone and armour alike, and the reach is longer than any man's weapon. A held victim may be torn, or picked up and thrown against a tree. The vines and roots in the troll's body reach out and wrap several people at once, and hold as long as they keep contact. The forest itself does what the troll wants: vines snare, branches close a path, roots come up out of the soil. It is not a spell. The wood obeys its oldest predator. And in dense woodland the troll is nearly impossible to tell from the trees around it; it takes people by surprise while they are looking straight at it.

## What Kills It

Fire. A troll's wounds close with unnatural speed inside its own forest and much more slowly outside it; a severed arm regrows in hours, a ruined torso in days or weeks; there are no vital organs to find, the damage simply spreads out and heals. Burning stops the healing for as long as the fire lasts, and a troll cut into pieces will knit back together unless every piece is destroyed. Water magic does little. The troll is weakest away from its own ground, where the healing slows and the trees are not its allies. Some trolls tolerate small creatures, and now and then a settlement of people, inside their forests so long as neither threatens the troll or the trees. The arrangement holds until something disturbs it.

## Attributes

- **Strength:** 28-33 (1d6+27)

- **Endurance:** 24-29 (1d6+23)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 10-13 (1d4+9)

- **Will:** 11-14 (1d4+10)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 6-9 (1d4+5)
