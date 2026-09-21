---
tags:
  - animal
  - creature
name:
  full: Crag Lurker
  aliases: []
description: "A horse-sized ambush spider that scales sheer cliffs in ghostly silence before striking prey in rocky, vertical terrain."
shortcode: crglrkr
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
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+10
    dex: 1d6+9
    agl: 1d6+8
    per: 1d6+11
    aur: 1d4+5
    wil: 1d6+7
    rea: 1d4+4
    cre: 1d4+3
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 6 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 38 } }
    - name: Envenoming Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Envenoming Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 3
            aspect: piercing
          lengthBase: 1
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
    - name: Leg Grapple
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 61
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: grab
          name: Leg Grapple
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 15
            aspect: blunt
          lengthBase: 1
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
          - name: Cephalothorax
            shortcode: cephzone
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenzone
            probWeight: 3
          - name: Legs
            shortcode: legszone
            probWeight: 4
        parts:
          - name: Cephalothorax
            shortcode: cephpart
            bodyZoneCode: cephzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 5
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Cephalothorax
            shortcode: cephloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase:
              blunt: 6
              edged: 5
              piercing: 4
              fire: 6
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase:
              blunt: 6
              edged: 5
              piercing: 4
              fire: 6
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 6
              edged: 5
              piercing: 4
              fire: 6
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 6
              edged: 5
              piercing: 4
              fire: 6
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 6
              edged: 5
              piercing: 4
              fire: 6
      weight:
        base: 250
        calc: "250"
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - scope: topography
            key: steep
            mode: add
            textValue: "0"
          - scope: surface_cover
            key: alpine
            mode: add
            textValue: "0"
          - scope: surface_cover
            key: barren
            mode: add
            textValue: "0"
        disabled: false
---

# Appearance {#appearance}

![[crglrkr|Crag Lurker]]{float: top-left}

Your eye passes over the rocky crevice and registers nothing — until movement gives the game away. What you took for stone shifts, and shows itself as carapace the colour of weathered rock, textured like the living cliff. The spider is enormous: a body as large as a horse, with eight legs reaching further than you are tall. It moves with a precise economy, each limb set down with disturbing grace on sheer stone that should be impossible to cross. Eight black eyes in two rows gleam faintly when the light catches them, and the mandibles — each as long as your hand — click together softly, with a sound like flint on stone.

# Dossier {#dossier}

The Crag Lurker is a spider grown to the size of a horse and fitted, by long selection, to be the perfect ambush hunter of steep and broken rock. It weighs three to five hundred pounds and its legs run eight to ten feet, and for all that mass it climbs a vertical cliff in silence. It lives in the mountains and the high hill country wherever there are crevices and overhangs to shelter in, holds a hunting ground of several square miles, and knows what moves on it through the hairs on its body and the web lines it has strung across the rock. Lurkers are met by climbers, by people camping high, and by anyone poking about a rocky canyon, an old cliff-dwelling or an abandoned mountain hold that a Lurker has taken for its lair.

## The Lines

A Lurker's territory — five to twenty square miles of suitable rock — is strung with silk: anchor lines from cliff to outcrop, funnel webs across the ways prey comes by, retreat webs near the lair. The lines are its senses. Every vibration that runs along them reaches the Lurker, and it can tell from the tremor where something is, how big it is and how fast it is moving, in total darkness, from its lair. It very seldom meets prey by chance. It waits — days, weeks — motionless in its crevice, until the lines tell it something has come, and then it goes out to it fast. It spins and mends quickly, replacing a torn section or laying a new trap within hours, so the network shifts as its needs do. It swallows prey whole and digests it slowly in the abdomen; it moults from time to time, and is soft and vulnerable while the new shell hardens; and it rarely leaves its own rocks.

## The Animal

A massive arachnid built for strength rather than speed. The head and thorax are compact under heavy chitin; the abdomen is round and somewhat pendulous and holds the silk. The legs are long, jointed and surprisingly deft, each ending in several hooked claws for rock. The whole carapace is grey or dull brown and textured to match weathered stone — the surface itself is sculpted like rock grain, not only coloured like it — so that a still Lurker cannot be told from the cliff. The eyes are eight, in two rows, four forward and four to the sides, and they are unremarkable until they catch light, when their gleam is sometimes the only thing that gives the animal away. The mandibles are large, sharp, and curved slightly downward. The animal smells strongly of musk and of scents that warn some creatures off and that people mostly cannot smell.

## The Bite

The usual hunt is a web across a known path and a wait. When something blunders in, the Lurker comes down from its lair at a run and bites it, several times, before it can cut free — the mandibles go through leather and light armour, and the venom is a neurotoxin that paralyses the nerves and the muscles that move the limbs: it drops a small animal within minutes and badly weakens a large one, and enough bites will stop the breathing of a large man. It is not instantly fatal, which suits the Lurker, who wants the prey held rather than dead. Prey that avoids the webs it chases, up and over rock it can cross and its prey cannot, driving them onto ground where the silk is thick or into a dead end. It can throw fresh silk directly onto a target as well as trap it in a built web; the strands are hugely strong and sticky, hold by sheer tensile strength, and tighten as the victim struggles, and getting out takes a sharp blade or great strength. With several legs at once it pins a struggling opponent, controlling limbs or holding him still, and it can immobilise a large man that way. A Lurker guarding its lair or in the middle of a hunt is very aggressive and follows prey a long way from its lines. Hurt, or up against something clearly beyond it, it goes back to the lair, where its colour and the inaccessibility of the place keep it from being followed.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 11-16 (1d6+10)

- **Dexterity:** 10-15 (1d6+9)

- **Agility:** 9-14 (1d6+8)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 6-9 (1d4+5)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
