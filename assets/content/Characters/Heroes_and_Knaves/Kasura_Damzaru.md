---
tags:
  - tamzir-crew
  - tradesfolk
  - character
name:
  full: Kasûra Damzarû
  title: ""
  given: Kasûra
  clan: Damzarû
  aliases: []
packFolder: midhalionharad
shortcode: kasuradmzr
type: being
data:
  banner: tamzirbnr
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Shipwright
  stations: []
  lore:
    - commonerrnk
  homes:
    - haradregin
  affiliations:
    - thetamzir
    - cnfdrtnhrdnstts
  gender: female
  species: null
  born: 696/5/3
  height: 1.68
  weight: 65.8
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: brown
    skin_color: medium
    complexion: sun_kissed
    extra_features:
      - perpetually stained hands
      - an open and expressive face
      - almost always smiling
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 9 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 69 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 71 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 37 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 69 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 37 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 62 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 62 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 66 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 47 } }
    - { model: sohl-sohl-skill-acro, system: { masteryLevelBase: 63 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 29 } }
    - { model: sohl-sohl-skill-pilt, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 78 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 98 } }
    - { model: sohl-sohl-skill-timb, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 54 } }
    - { model: sohl-sohl-armorgear-ctunic }
    - { model: sohl-sohl-armorgear-cleg }
    - { model: sohl-sohl-armorgear-ltvest }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-containergear-bpchmd }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 21 } }
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Arms
            shortcode: armszone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Legs
            shortcode: legszone
            probWeight: 6
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
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: null
        calc: "(9 * str) + 50"
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
    defaultCombatGroup: null
---

# Appearance {#appearance}

![[kasuradmzr|Kasûra Damzarû]]{float: top-left}

Kasûra Damzarû is a young woman whose appearance perfectly reflects her profession. Her brown hair is usually pulled into a haphazard knot, secured with whatever is handy—a nail, a dowel, once a fish bone. Her hazel eyes are bright and curious, set in an open, expressive face that smiles easily and often. Her hands are her most notable feature: strong, callused, and perpetually stained with pitch, sawdust, and oil. She dresses in practical work clothes—a leather vest over a cloth tunic, both bearing the marks of a hundred repairs—and she moves with the unselfconscious grace of someone completely at home in their own body. She is not tall, but she fills a room with sheer vitality.

# Dossier {#dossier}

## Background

### Origin

Kasûra was born in the port of [[place-kashmuret|Kashmuret]], a bustling harbor in the [[affiliation-cnfdrtnhrdnstts|Haradian Confederation]], the daughter of a master shipwright. She grew up in his yard, surrounded by the smell of fresh-cut timber and hot pitch, and from the time she could walk she was underfoot—watching, touching, learning. Her father never formally apprenticed her (the guild traditions were resistant to women in the craft), but she shadowed him so constantly and so eagerly that by twelve she could identify any wood by touch and tell you where it should go in a hull.

### The Gift

Kasûra possesses something that defies easy explanation—an intuitive sense for how things work. She can lay her hand on a hull and _feel_ where the stress is wrong, sense the grain of wood and know how it wants to bend. Her father called it a gift from the sea itself. Others have whispered that it borders on the arcane, though Kasûra has no formal training in any mystical tradition. This instinct has allowed her to learn shipwright skills with astonishing speed, and she can diagnose and repair problems that baffle more experienced craftsmen.

### Joining the Tamzîr

Kasûra came aboard the Tamzîr two years ago when the ship limped into Kashmuret with a cracked keel and her previous carpenter dead of fever. Shâ was desperate—the Tamzîr needed repairs he could not afford, in a yard that would ask too many questions. Kasûra's father owed debts to men who owed debts to Shâ, and through that chain of obligation, Kasûra was offered up as a temporary carpenter. She took one look at the Tamzîr's battered hull, fell in love with the old ship's stubborn refusal to sink, and never left. She has since performed miracles of repair that have kept the vessel seaworthy far beyond any reasonable expectation.

## Psyche

### Personality

Kasûra is sunny, enthusiastic, and possessed of an infectious optimism that seems impervious to the cynicism around her. She chatters about timber joints and hull designs with the same passion other people reserve for love affairs. She is genuinely kind, sees the best in people as a default, and has a gift for making even the most hardened crew members crack a smile. She is also tougher than she appears—growing up in a shipyard among rough workers gave her a resilience that her cheerful demeanor sometimes obscures.

### Motivation

Kasûra loves the Tamzîr. Not as an abstraction—she loves the ship itself, the way its hull moves through water, the particular creak of its timbers, the character of its repairs. She also loves the crew who have become her family, and the freedom of a life at sea. She wants to see the world, fix things that are broken, and build something that lasts.

### Strengths

She is a brilliant shipwright with an almost supernatural talent for understanding vessels. She is also the crew's heart—her warmth and optimism sustain morale. She is a strong swimmer, agile, and more physically capable than her slight frame suggests. Her mechanical intuition extends beyond ships to other devices and structures.

### Weaknesses

Kasûra is naïve about the darker aspects of the crew's work. She knows they smuggle, but she does not think deeply about the moral implications. She can be too trusting, and her desire to see the best in people has occasionally been exploited. She is also young—the youngest of the crew—and sometimes her inexperience with the world's cruelty leaves her unprepared for its realities.

## Social

### Patrons

Her father, **Dalzûru Damzarû**, remains in Kashmuret and worries about her constantly. He is a respected shipwright with connections in the Haradian maritime guilds.

### Enemies

Kasûra has no personal enemies, though the Tamzîr's enemies are by extension hers.

### Affiliations

Shipwright of the **Tamzîr**. Daughter of a Haradian master shipwright. She has formed a particularly close bond with **[[being-cibelasrnt|Cibella Serentia]]**, the troubled young woman aboard the ship, finding in her a kindred spirit despite their vastly different circumstances.

## Plot Hooks

1. **The Ship's Secret**: During a major repair, Kasûra discovers something hidden in the Tamzîr's hull—a sealed compartment containing documents or artifacts that predate Shâ's ownership by decades. The contents could be valuable, dangerous, or both, and they suggest the Tamzîr has a history far more interesting than anyone aboard suspected.

2. **Guild Pressure**: The Haradian Shipwrights' Guild learns that an unguilded woman is practicing the craft aboard a known smuggling vessel. They send an agent to Kasûra's father, threatening his livelihood unless he recalls his daughter. Kasûra must choose between protecting her father and the life she has built at sea.

3. **The Impossible Commission**: A wealthy patron offers a staggering sum if the Tamzîr can be refitted for a specific dangerous voyage. The modifications Kasûra would need to make are technically possible but would fundamentally change the ship she loves. She must weigh the crew's financial needs against her own instincts about what the Tamzîr can and should be.
