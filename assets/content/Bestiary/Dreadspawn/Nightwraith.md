---
tags:
  - dreadspawn
  - creature
name:
  full: Nightwraith
  aliases: []
description: "A corrupted giant bat twisted into a cunning nocturnal killer, hunting the night skies and lightless caverns with ruthless precision."
shortcode: nghtwrth
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
    str: 1d6+10
    end: 1d4+13
    dex: 1d6+14
    agl: 1d6+16
    per: 1d6+16
    aur: 1d6+6
    wil: 1d4+13
    rea: 1d4+9
    cre: 1d6+6
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 20 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 20 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 90 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 90 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 38 } }
    - name: Blood-Draining Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Blood-Draining Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 2
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
    - name: Raking Talons
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: talon
          name: Raking Talons
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 1
            aspect: edged
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
          - name: Head
            shortcode: headzone
            probWeight: 2
          - name: Left Wing
            shortcode: lwingzone
            probWeight: 2
          - name: Body
            shortcode: torsozone
            probWeight: 4
          - name: Right Wing
            shortcode: rwingzone
            probWeight: 2
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 2
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: rwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
              - manipulator
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
            probWeight: 4
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
      weight:
        base: 300
        calc: "300"
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 100
        leaguesPerWatch: 10
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[nghtwrth|Nightwraith]]{float: top-left}

The darkness above you ripples with motion — a shadow moving against the shadows. Then you hear it: not the flap of wings but something worse, a wet, clicking chirp that seems to come from everywhere at once. The air goes cold as an enormous winged shape passes over, blotting out even the starlight, and you catch the reek of blood and cave-rot. Two points of sickly crimson fix on you from above — eyes, and they find you easily in the dark. Fangs the length of fingers curve downward. You hear the thrash of leathery wings as the creature wheels for another pass, and the sound of its hunger is a thousand screaming voices packed into one dripping mouth.

# Dossier {#dossier}

Nightwraiths are giant bats that something — magic or the infernal — has bent into instruments for killing. They hunt the night sky, the deep caves and the lightless places underground, with a cunning their ancestors never had, and they seem to take pleasure in the hunt over and above the feeding.

## The Roost

They are colonial. By day they hang in deep caverns and remote cave systems, dozens or hundreds to a roost; at dusk they scatter to hunt, each to a ground of its own that overlaps its neighbours', and at dawn they come back. They go where prey is thickest, which means where livestock and people are, and a Nightwraith's hearing is fine enough to pick out a single human heartbeat at a distance and to follow a wounded or sick animal with patience until the moment is right.

## The Body

A Nightwraith spans 15 to 20 feet from wingtip to wingtip. The frame is muscular and starved-looking at once, as if no amount of feeding filled it: skin a translucent grey-black like rotted leather stretched over bone, with the veins and sinews visible and moving underneath. The wings are vast membranes that seem to swallow light rather than reflect it and make a wet chittering as they flex. The face is all adaptation — eyes like coals set over a mouth too large for the head, lined with fangs of fearful length. Bristling tufts of fur run along the spine and the upper edges of the wings. It clicks without pause at a pitch a person feels more than hears, and the air around it stinks of blood and corrupt flesh.

## The Hunt

It comes from above and behind when it can, fangs and claws raking on the pass, and climbs out of reach before there is an answer. It is faster and more agile than most things it hunts and makes several passes rather than staying to fight. Against a group, or against armour, it works to cut one out and drag him off where it can finish without interference. The claws are nearly as bad as the fangs and are used to rake, or to hold a victim still while it feeds. The bite drives the long fangs into bare flesh and anchors there; the victim bleeds fast and weakens faster, from the blood loss and from a parasitic venom in the bite. It can focus its clicking into a screech that dazes everything in front of it, ruining balance and breaking a spellcaster's concentration.

In the dark it is blind and sees perfectly: its echolocation shows it the world in detail, and it finds warm creatures by heartbeat, breath and body heat as accurately as any magical sight. In darkness or poor light it moves and strikes better and notices more, and anything trying to follow it or aim at it in the dark is at a heavy disadvantage. Once it has tasted blood it fixes on that one victim and will not be shaken; a bleeding target cannot hide from it. It knows when it is outmatched, though, and a badly wounded Nightwraith goes back to its roost — or circles, and waits for the opponent to tire.

## Guano and Bargains

Light is what it cannot bear. Steady bright light pains it and drives it off; direct sunlight it flees in panic for the nearest dark. Fire does the same and worse, since it swamps the creature's senses and confuses its echolocation. A roost can sometimes be dealt with by smoke, or by sealing the cave mouths so the colony is trapped where the daylight slowly wears it down. The guano that piles up under a roost is worth a great deal to alchemists, and it tends to set into poisonous crystalline forms that can be cut and carried out. Some hard-pressed villages have come to terms with a colony instead, staking out livestock on a schedule so the Nightwraiths take beasts rather than people — an arrangement most of their neighbours think of as a kind of shame.

## Attributes

- **Strength:** 11-16 (1d6+10)

- **Endurance:** 14-17 (1d4+13)

- **Dexterity:** 15-20 (1d6+14)

- **Agility:** 17-22 (1d6+16)

- **Perception:** 17-22 (1d6+16)

- **Aura:** 7-12 (1d6+6)

- **Will:** 14-17 (1d4+13)

- **Reasoning:** 10-13 (1d4+9)

- **Creativity:** 7-12 (1d6+6)
