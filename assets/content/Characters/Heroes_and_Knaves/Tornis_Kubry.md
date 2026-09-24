---
tags:
  - hero
  - silent-talon
  - unguilded
  - soldiery
  - character
name:
  full: Tórnis Kúbrý
  title: ""
  given: Tórnis
  clan: Kúbrý
  aliases:
    - Calen
packFolder: aureldiatarvenia
shortcode: torniskbry
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Scout / Spy
  stations: []
  lore:
    - commonerrnk
  homes:
    - tarvenirgn
  affiliations:
    - slntlncmpny
    - kingdmtrvn
  gender: male
  species: null
  born: 686/3/16
  height: 1.78
  weight: 70
  frame: medium
  appearance:
    eye_color: green
    hair_color: dark_blonde
    skin_color: fair
    complexion: null
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 13 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 76 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-lock, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-weapongear-brdswd }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-weapongear-lbw75 }
    - { model: sohl-sohl-weapongear-taburi }
    - { model: sohl-sohl-armorgear-wscoat }
    - { model: sohl-sohl-armorgear-wclk }
    - { model: sohl-sohl-armorgear-wleg }
    - { model: sohl-sohl-armorgear-pvest }
    - { model: sohl-sohl-armorgear-ltcboot }
    - { model: sohl-sohl-armorgear-ltglove }
    - { model: sohl-sohl-containergear-bagleather15 }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-containergear-backpk }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 3 } }
    - { model: sohl-sohl-miscgear-litebdrl }
    - { model: sohl-sohl-containergear-wtrskin }
    - { model: sohl-sohl-containergear-quiversmsh }
    - { model: sohl-sohl-projectilegear-arwlbrd, system: { quantity: 12 } }
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

![[torniskbry|Tórnis Kúbrý]]{float: top-left}

Tórnis is a man of thirty with a slender, roguish appearance—fair-skinned, with dark blonde hair and green eyes. His face is the kind that is easy to forget: pleasant, unremarkable, and perfectly suited to a man who makes his living not being noticed. He moves with an easy, unhurried confidence that makes him look like he belongs wherever he happens to be.

# Dossier {#dossier}

The man who calls himself Tórnis Kúbrý was born Calen, a Tarvénan outlaw who spent years operating with a brigand band along the Ibiria-Provènzia border. He was skilled in stealth, sabotage, and manipulation—known among his comrades for his cunning and his ability to talk his way out of situations that would get a less charming man killed.

That life ended in blood. A betrayal within his group led to a massacre, and Calen barely escaped with his life. He buried his old name, adopted the alias Tórnis, and reinvented himself as a scout and trader—a wanderer who knew the roads, especially the ones people tended to avoid. When Brànwâal recruited him into the Silent Talon, it was for exactly the skills his old life had given him: intelligence-gathering, infiltration, and the ability to neutralize threats without drawing attention.

Tórnis presents himself as a simple, affable traveler. He is charming, easy to like, and always ready with a self-deprecating joke. Beneath the surface, however, he trusts no one completely and keeps everyone at a calculated distance. His past haunts him, and he is determined never to be caught off guard again.

Recently, his carefully maintained emotional walls have developed a crack: he has begun developing genuine feelings for Elýsè, and he is not entirely sure what to do about it.

## Background

### Skills and Abilities

- **Stealth**: Tórnis can move through hostile territory, urban streets, or fortified buildings without being detected. This is his primary professional skill and the reason the Silent Talon hired him.
- **Infiltration**: He can assume identities, blend into crowds, and gain access to places and people that are supposed to be inaccessible.
- **Deception**: A natural liar with the charm to make it convincing. He reads people quickly and tells them what they want to hear.
- **Scouting**: An experienced pathfinder who knows the roads—particularly the ones most people avoid. He is often sent ahead of the band to survey terrain, identify threats, and gather intelligence.
- **Combat**: Tórnis is not a frontline fighter, but he can handle himself in a scrape. He prefers a knife in close quarters and avoids fair fights whenever possible.

## Psyche

### Personality

Tórnis is charming and affable, able to blend into any crowd. However, beneath his smooth exterior lies a deeply cautious and calculating individual. He trusts no one completely, preferring to stay emotionally distant even while maintaining a friendly demeanor. His past haunts him, but he is determined never to let it define him.

### Motivation

Tórnis seeks to distance himself from his past life as a Tarvénan brigand and build something new. The Silent Talon has given him purpose and, in Elýsè, something he did not expect to find. Whether he can let go of the habits that kept him alive as an outlaw—the lies, the distance, the constant readiness to run—remains to be seen.

### Strengths

- **Stealth**
- **Deception**
- **Infiltration**

## Social

## Companions

- **[[being-branwldrgr|Brànwâal Dôrgaar]]**: Captain of the Silent Talon. Tórnis respects Brànwâal's competence and is loyal to him—as loyal as Tórnis is capable of being.
- **[[being-elyseskyrn|Elýsè Skýrn]]**: A developing romantic relationship that Tórnis is unsure how to handle.
- **[[being-chlbrhydyn|Chéleb Rhýddýn]]**: Fellow band member.
- **[[being-dornsyndlr|Dôren Sýndalr]]**: Fellow band member.

### Patrons

None.

### Enemies

Former comrades from his brigand days who survived the massacre and may be looking for Calen.

## Plot Hooks

1. **The Past Returns**: Someone from Tórnis's old life recognizes him—or worse, comes looking for Calen specifically. He must decide whether to run, fight, or finally tell the Silent Talon the truth about who he was before he joined them.

2. **The Double Game**: Tórnis is sent to infiltrate a rival mercenary company, but discovers that the company's employer is connected to the betrayal that destroyed his old brigand band. The mission becomes personal, and Tórnis must choose between the Silent Talon's interests and his own need for answers.

3. **Trust and Deception**: Elýsè begins to sense that Tórnis is hiding something fundamental about himself. As their relationship deepens, the weight of his secrets threatens to destroy the first genuine connection he has allowed himself in years.
