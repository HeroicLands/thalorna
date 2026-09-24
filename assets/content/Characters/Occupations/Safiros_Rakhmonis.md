---
tags:
  - draft
  - soldiery
  - character
name:
  full: Sàfîros Râkhmônis
  title: ""
  given: Sàfîros
  clan: Râkhmônis
  home: kalydria2
  aliases: []
packFolder: helladhelionis
shortcode: sfrsrkhmns
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Yeoman Infantry
  stations: []
  lore:
    - helioniteclt
    - commonerrnk
  homes:
    - helionis
  affiliations:
    - kalydria
  gender: male
  species: null
  born: 678/2/28
  height: 1.91
  weight: 89
  frame: heavy
  appearance:
    eye_color: hazel
    hair_color: dark_brown
    skin_color: tanned
    complexion: olive_toned
    extra_features:
      - a tattoo of a lion's mane on the chest
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-taranon }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-masn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 13 } }
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

Sàfîros Râkhmônis is a 42-year-old man who stands 6'3" tall and is broad and solidly built. He has an angular face with sharp cheekbones, a prominent forehead, and an angular jaw that leads to a prominent chin. His piercing hazel eyes sit beneath heavy brows, lending him a penetrating gaze. A strong nose and firm lips complete his features. He has tanned skin with an olive-toned complexion. His dark brown hair is tied in a low tail.

# Dossier {#dossier}

Born in the [[place-helionis|Heliónis]] region to a freeman family of Helionite heritage, Sàfîros Râkhmônis came into the world of the yeoman infantry through a combination of circumstance and aptitude.

Sàfîros is a seasoned veteran who has fought in numerous skirmishes and battles. He is tough and resilient, respected for his leadership on the battlefield. Sàfîros often trains younger yeomen in the arts of melee combat and defense. Despite his gruff demeanor, he cares deeply for those who fight beside him.

Now at 42 years of age, Sàfîros Râkhmônis has established himself as a known figure among the yeoman infantrys of Heliónis. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Gruff and demanding, struggles with delegating tasks.

### Motivation

Sàfîros is driven by the desire to master his craft and secure a stable future. The uncertainties of life in yeoman infantry work keep him vigilant and adaptable.

### Strengths

Strong, resilient, skilled in melee and defensive tactics.

## Social

Sàfîros is affiliated with Local Militia.

As a Helionite yeoman infantry, Sàfîros occupies a recognized social niche within Heliónis society.

## Companions

### Patrons

Sàfîros's primary patron is The local lord who values his experience in training new recruits.. This relationship provides both opportunity and obligation.

### Enemies

Rival soldiers and mercenaries who have clashed with him in the past.

## Plot Hooks

1. **The Yeoman Infantry's Dilemma**—Sàfîros faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Heliónis.

2. **Old Grudges**—Rival soldiers and mercenaries who have clashed with him in the past. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past**—Something from Sàfîros's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds**—Political changes in Heliónis threaten to upend the social order that Sàfîros depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity**—A chance encounter offers Sàfîros the possibility of advancement beyond anything he has dared hope for—but the price may be higher than it first appears.
