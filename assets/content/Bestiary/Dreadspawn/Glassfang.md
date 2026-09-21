---
tags:
  - dreadspawn
  - creature
name:
  full: Glassfang
  aliases: []
description: "A small, blindingly fast light-magic predator that hunts nearly invisible through crystalline caverns and radiant magical sites."
shortcode: glssfng
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
    end: 1d4+3
    dex: 1d4+12
    agl: 1d4+12
    per: 1d4+8
    aur: 1d4+8
    wil: 1d4+6
    rea: 1d4+5
    cre: 1d4+8
    str: 1d4+6
  items:
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 8 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 18 } }
    - name: Crystalline Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Crystalline Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: -1
            aspect: piercing
          lengthBase: 0
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
            poison: true
    - name: Shard Release
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: missile
        impairedByRoles:
          - manipulator
        strikeMode:
          type: missile
          shortcode: spray
          name: Shard Release
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 0
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: -1
            aspect: edged
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 15
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - name: Forequarters
            shortcode: fqtrzone
            probWeight: 2
          - name: Torso
            shortcode: torsozone
            probWeight: 2
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 2
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1
              - locomotor
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
      weight:
        base: 80
        calc: "80"
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[glssfng|Glassfang]]{float: top-left}

Nothing is there, and then something is — a shimmer where the light bends wrong, a shadow that is not quite transparent enough. You see it only when it moves, and when it does, your breath catches: the thing is made of glass, or ice, or something harder than either. Curved fangs catch a gleam they should not be able to catch. It is the size of a hunting cat, sleek and low, and it comes at your throat faster than thought, with a hunter's fixed attention in eyes like slivers of crystal.

# Dossier {#dossier}

Glassfangs are born where light-magic gathers thickly enough in the world to take a shape. They are small — a large cat or a small dog — and made almost wholly of transparent crystal: a body drawn out for speed, scales smooth and edged like razors that cut on contact, a mouth of curved crystal fangs that go through most things, and those two dark eyes. In bright light a glassfang is as good as invisible unless it is moving fast. In dim light it can be made out, with difficulty. They turn up in crystal caverns, at old magical sites, in places where light refracts strangely, and around anything that gives off a great deal of magic — hence the wards.

A Glassfang is solitary and rarely still. It hunts constantly, prefers bright ground where nothing can see it, and will work in poorer light if that is where the prey is. It holds no territory and keeps away from its own kind, and it feeds often — on small animals, and on the life in magical beings, which it drains. It reads how prey moves and sets its ambush accordingly. Hurt, it does not go careful; it goes wild.

Everything it does depends on not being seen. It stalks until it is certain, then comes at a speed that beats thought, the first bite aimed at something vital from a place nobody was looking, the edges of the fangs opening a wound that bleeds hard through armour ordinary teeth would not mark. If that does not finish the matter it bites again and again before there is anything to strike back at, and the fangs carry a magical venom that weakens with each bite and, with enough of them, paralyses. Pressed or injured, it can throw off shards of itself — razor slivers, several in succession, at whoever is nearest — and then it runs, faster than anything on legs can follow, bending the light around itself into flashes and distortions until it has broken line of sight. It does not stay to trade blows with anything as hard to kill as itself.

Hardness and clarity are bought with brittleness. A blade skates off the scale edges; a hammer, a club, a loud enough sound or a hard enough vibration cracks the body and can shatter a whole section of it, and the creature is crippled from then on. It is worst met in a small space where there is nowhere to run. In open ground, prey with the wind to keep going can sometimes simply outlast it.

## Attributes

- **Endurance:** 4-7 (1d4+3)

- **Dexterity:** 13-16 (1d4+12)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 9-12 (1d4+8)

- **Will:** 7-10 (1d4+6)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 9-12 (1d4+8)
