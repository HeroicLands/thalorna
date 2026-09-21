---
tags:
  - dreadspawn
  - creature
name:
  full: Webcrawler
  aliases: []
description: "A supremely cunning spider of dark caverns and ruins that spreads nearly invisible webs across confined spaces to snare prey."
shortcode: wbcrwlr
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
    str: 1d4+5
    end: 1d4+6
    dex: 1d4+14
    agl: 1d4+12
    per: 1d4+8
    aur: 1d4+6
    wil: 1d4+8
    rea: 1d4+6
    cre: 1d4+12
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 15 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 23 } }
    - name: Paralytic Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Paralytic Bite
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
    - name: Web Constriction
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 67
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: grab
          name: Web Constriction
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 8
            aspect: blunt
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
            constrict: true
  system:
    body:
      structure:
        zones:
          - name: Cephalothorax
            shortcode: cephzone
            probWeight: 2
          - name: Abdomen
            shortcode: abdomenzone
            probWeight: 2
          - name: Legs
            shortcode: legszone
            probWeight: 2
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
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
      weight:
        base: 1
        calc: "1"
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[wbcrwlr|Webcrawler]]{float: top-left}

At first you cannot see it — there is only a shimmer in the air, something that might be dew on a thread too fine to see, catching a light that should not reach this far down. Then the spider comes out of hiding, and you see it: a creature the size of a man's torso, its eight thin legs moving with a hunter's grace, its body an iridescent black with hints of deep purple and sick green. The abdomen is grotesquely swollen and never stops paying out a silk that glimmers faintly. Its many-faceted eyes glow, and every one of them fixes on you with a cold calculation. Fangs like curved needles jut from its mouth, dripping a venom that sizzles and steams where it touches the stone. The air around you seems to hum with the tension of its web, and you realise, with a lurch of horror, that you are already inside it — that what you took for empty air is a maze of near-invisible threads waiting to take you.

# Dossier {#dossier}

Webcrawlers are spiders of silk and cunning — intelligent, inventive with venom, and builders who have made the hunting web into something like an art. They live in the dark and the confined: caverns, ruins, the deep parts of old buildings, wherever a web can be strung through three dimensions and prey cannot easily get out. A Webcrawler does not go hunting. It waits, and it builds, and what it builds is meant to catch without fail. Old ones have made traps so elaborate that a human engineer would want months to design them.

## The Web

A Webcrawler claims a volume rather than an area — a cavern, a run of connected chambers, a building several storeys deep — and fills it with a net of near-invisible silk of astonishing complexity. Most of its time goes into the work, spinning new silk and improving what is there. The web catches prey, warns of anything that touches it, carries signals along its own strands, and serves the spider as a road across ground nothing else could cross. There is thought in the design: the spider adjusts it to the prey it expects, lays false paths that lead into killing grounds, and keeps separate tiers for creatures of different sizes, and it changes the pattern according to what has worked and what has not. A web of any complexity takes months or years, and the spider treats it as part of its own body. It will fight for the web where it would not fight for itself, and grows desperate when the web is threatened. The silk is stronger than anything its thinness suggests and carries the spider's weight and a good deal besides.

## The Builder

The body is 5 to 7 feet long and the legs add another 8 to 12 feet of span, so that the whole animal is about the size of a large man. The shell is deep black chitin with purple and green in its sheen. The legs are long, articulated, and tipped with sharp adhesive points that grip any surface and hold the web without slipping. The abdomen is distended and always wet with silk. The head carries eight eyes in a geometric arrangement, each with a sick glow in it, and hollow fangs that drip a greenish-white venom which hisses and steams on stone. It is nearly silent, and in the dark nearly invisible but for the eyes and the occasional gleam of a strand.

## Taking Prey

The web does most of it. Once something is caught, the spider comes along the strands at speed and bites; the venom is fast, numbing the wound at once and spreading through the body into a paralysis that ends in death, and it is made to hold the prey still rather than to kill quickly, so the spider can feed at leisure. The spider does not passively wait for the web to hold: it can draw the strands tight around a caught victim to crush and suffocate, and it can throw new strands into a path prey is about to take, or raise a barrier nobody sees until they walk into it. It stays out of a stand-up fight, using the web to govern where its opponents can move and to keep them from leaving. Hard pressed, it withdraws deeper into the network, where it can go anywhere and knows every inch. On its web it moves over walls and ceilings as a man walks a floor. Off the web it is a different creature — slow and clumsy, with most of its agility gone.

## Fire and Silk

Fire is what it fears. Flame takes a web apart at once and leaves the spider in visible distress, and a burnt section forces it either to retreat or to stop and rebuild; acid does the same to the silk. Cold slows both its venom and its body. The silk itself is worth a great deal — it can be harvested and worked into anything from rope to armour, and alchemists and crafters pay well for good Webcrawler silk.

## Attributes

- **Strength:** 6-9 (1d4+5)

- **Endurance:** 7-10 (1d4+6)

- **Dexterity:** 15-18 (1d4+14)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-12 (1d4+8)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 13-16 (1d4+12)
