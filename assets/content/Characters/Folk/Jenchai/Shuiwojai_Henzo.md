---
shortcode: henzoshuiwo
name: {full: Shuiwojai Henzo, en: [Henzo, Lord Henzo, Tiger Lord]}
type: being
subType: npc
description: "The Dauzhwo of Shuiwojai, forty-seven, whose silver has carried the court's budget for three years, who leads the Strait bloc and who wants the vacant office of Teng Ja."
tags: []
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior, mariner, courtier]
  occupation: Dauzhwo
  lore: []
  culture: jenchaiclt
  homes: [hawu]
  affiliations: {shuiwojaidmn: {rank: 5, office: Dauzhwo}, jenchaiempr: {rank: 7}}
  gender: male
  species: humanflk
  born: "672.150"
  died: null
  height: 5' 10"
  weight: 176 lbs
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: greying_black
    skin_color: tawny
    complexion: [weathered]
    hair_texture: straight
    hair_style: knotted
    face_shape: square
    nose: straight
    brow: heavy
    mouth: wide
    extra_features: [a white scar across the left cheek, a lacquered topknot]
  packFolder: ankarisjenchai
  items:
    - key: slkcoat
      model: armorgear-slkcoat
      name: "Dark blue silk with salt-white seams"
      kind: clothing
    - {key: brdswd, model: weapongear-brdswd, name: "Long sword", kind: weapon}
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 46}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 46}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 22}}
    - {model: skill-jurthatlng, system: {masteryLevelBase: 80}}
    - {key: slkcoat, model: sohl-sohl-armorgear-slkcoat}
    - {key: brdswd, model: sohl-sohl-weapongear-brdswd}
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 176, calc: "(9 * str) + 50"}
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

Shuiwojai Henzo is a 47-year-old man who stands 5'10" tall and is of medium build. He has tawny, weathered skin, a square face with a white scar across the left cheek, black hair gone gray at the temples and tied in a lacquered topknot, and dark brown eyes under heavy brows. He wears dark blue silk with salt-white seams and a long sword he does not hand to attendants. He laughs readily, and his eyes do not join in.

# Dossier {#dossier}

Shuiwojai Henzo (Tiger Lord) is the Dauzhwo of the [[affiliation-shuiwojaidmn|Shuiwojai Domain]]. He holds [[place-rojai|Rojai]] by the Emperor's patent and rules it from the castle town of [[place-hawu|Hawu]], with the largest army and fleet of the eight houses: 1,950 men and 60 ships. He leads [The Strait]{.name data-type="affiliation"} bloc, which stands at 2,600 men and 85 ships with Rinjai sworn to him, and he wants the office of Teng Ja.

## Background

**The formation.** He was born at [[place-hawu|Hawu]], and grew up in the granary and the yards, where he learned salt, ships and what a creditor can ask.

**The mountain.** He became Dauzhwo in 700 AF, at twenty-eight, and built the largest fleet of the eight houses.

**The quarrel of 709.** He stood with Wojai against conferring the office on a regency, and the War of the Empty Seat followed.

**The silver.** For three years his silver has covered the shortfall in the court's budget, and the court is in his debt.

**The petition.** He has petitioned for the office, and [[being-weilengjnch|Weileng]] has answered with a sealed letter. It crosses Muwojai ground before it reaches Hawu, and Henzo does not trust the hands that carry it.

## Psyche

### Personality

He is hearty, calculating and proud of both. He speaks to envoys as a creditor.

### Motivation

He wants the Teng Ja, and wants the Emperor to give it because the realm has no other choice. He has named a price to Zenjai and Wojai, and either one joining a bloc ends the balance.

### Strengths

He has the most ships, the most men and the court's debt.

### Weaknesses

The houses that fear a Teng Ja bought with money are the houses he needs. He cannot see the Emperor's letter until it reaches him.

## Social

### Others

- [[being-hojarinjai|Rinjai Hoja]]: The young lord of the lesser island, sworn to him.
- [[being-reweihojujai|Hojujai Rewei]]: The regent of the rival house.

### Affiliations

- **[[affiliation-shuiwojaidmn|Shuiwojai Domain]]**: Dauzhwo, holding Rojai by the Emperor's patent.
- **[[affiliation-jenchaiempr|Jenchai Empire]]**: Dauzhwo of the Empire, sworn to the Emperor.

## Plot Hooks

1. **The ferry at Zuju.** The letter from Zojai must cross Muwojai's ferry. Henzo pays a party to meet the courier on the far bank and bring the letter to Hawu unopened.
2. **The named price.** Henzo hires a party as envoys to carry his price to [[affiliation-wojaidmn|Wojai Domain]] and [[affiliation-zenjaidmn|Zenjai Domain]]. Each lord asks what the other was offered.
3. **The prefect's ransom.** Rinjai holds a Tantsou prefect. Henzo wants the ransom and sends a party to Rinwu to remind Hoja whose oath he swore.
