---
shortcode: viduliyadan
name: {full: Viduliya Danasur, en: [High Priestess Viduliya]}
type: being
subType: npc
tags: [clergy]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [cleric, scholar]
  occupation: Parema-Achorya of the Temple of Jnanasura
  lore: []
  culture: vedyariclt
  homes: [suryagarha]
  affiliations:
    shikhalaya: {rank: 5}
    vrnkpnthn: {rank: 3}
    vyalendravada: {rank: 4}
    jnanasura: {rank: 2}
  gender: female
  species: humanflk
  born: "658.280"
  height: 5' 7"
  weight: 144 lbs
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: grey
    skin_color: tawny
    complexion: [weathered]
    extra_features: [Reading-callus on the right forefinger]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 10}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 80}}
    - {model: skill-vyalendravada, system: {masteryLevelBase: 70}}
    - {model: skill-jnanasura, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-armorgear-lrobe}
    - {model: sohl-sohl-armorgear-wclk}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: sohl-sohl-miscgear-booktrvl}
    - {model: sohl-sohl-miscgear-penquill}
    - {model: sohl-sohl-miscgear-inkblk}
    - {model: sohl-sohl-miscgear-candlestal}
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
      weight: {base: null, calc: "(9 * str) + 50"}
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

Viduliya is a woman of sixty-two, 5'7", tawny-skinned and weathered by the highland, with gray hair cut short and hazel eyes that make a speaker finish his argument before she answers it. She wears a plain linen robe and a wool cloak, carries a traveling book and a pen, and has a reading-callus on her right forefinger.

# Dossier {#dossier}

## The Temple Under the Summit

The temple of [[affiliation-jnanasura|Jnanasura]] at [[place-suryagarha|Suryagarha]] stands on the last terrace above the citadel, with its sanctum door facing up the pass toward [[place-suryashkhr|Suryashikhar]], the peak the older mountain reckoning gives to the god. It is a temple of the [[affiliation-vyalendravada|Vyalendravada]], which holds that a well-proportioned temple is the fullest argument its doctrine has, and it is the grandest building in the city and the grandest temple of the god in the region.

Viduliya is its **Parema-Achorya**, the senior priest, a post the school grants only after a rigorous philosophical examination to a priest who has published. She passed the examination at forty and has published three commentaries since. She is a **Ritrija** of a priestly family of the terrace valleys, and she sits in Shikhalaya's [Priestly Court]{.name data-type="affiliation/governmental"} for the temple.

## The Glass

The temple's east wall has a great window and nothing in it but shutters. Viduliya has commissioned [[being-nrvtjnnd|Narava Tejanand]] of [[place-vyalendra3|the City of Ten Thousand Looms]] to fill it with sacred stained glass, telling the stories of spiritual enlightenment in light and color. She regards his work as a form of religious expression in its own right, and the temple pays him a stipend that keeps his workshop steady.

The glass is made in Vyalendra and must come by river and road to the foot of the terrace road, and up it on pack-beasts. Of the first three crates, one arrived whole.

## The Court

The Priestly Court and the Martial Council are divided over whether the Maharava may have his son acclaimed heir in his own lifetime, which the kingdom has never done, and both sides are counting the ushtakas. Viduliya has not said how she will speak. She means to have the window finished first, and the temple's treasury is not large enough to pay for it without a gift from one side or the other.

## Psyche

### Personality

Viduliya is calm, exacting, dry and generous with her time to anyone who argues well. She dislikes haste and flattery equally. She takes great pleasure in beautiful things and makes no secret of it, which her school approves.

### Motivation

She wants the east window glazed with Narava's glass in her lifetime, every pane carried up the terrace road whole.

### Strengths

The Examination
: Her standing in the school was won by argument and is not questioned.

A Seat in the Court
: Her voice in the Priestly Court is one both sides of the acclamation question need.

### Weaknesses

The Treasury
: The window costs more than the temple has, and money for it can come only from someone who wants something.

The Road
: Every crate that breaks on the terrace road is a season lost.

## Social

### Patrons and Allies

[[being-nrvtjnnd|Narava Tejanand]]
: The glassworker of Vyalendra she has commissioned, and supports.

### Rivals

Both sides of the acclamation question
: The Martial Council's chieftains and the Maharava's party, each of whom would pay for the window on terms of its own.

### Affiliations

[[affiliation-shikhalaya|Shikhalaya]]
: Ritrija, sitting in the Priestly Court.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: Ordained of a sampradeya.

[[affiliation-vyalendravada|Vyalendravada]]
: Parema-Achorya of the temple of Jnanasura at Suryagarha.

[[affiliation-jnanasura|Jnanasura]]
: Vretin, who has completed the god's Silent Year of Reading.

## Plot Hooks

The Glass Convoy
: The next crates of Narava's glass are at the foot of the terrace road. Viduliya hires the party to bring them up whole, and somebody on the road has been paid to see that they do not arrive.

A Gift for the Window
: A Samonta offers the temple the whole cost of the window, on the day before the Priestly Court is to sit on the acclamation. Viduliya asks the party to find out who sent him.

The Wrong Figure
: One of the panes that arrived whole shows a figure that is not in Narava's drawing. Viduliya wants to know whether Narava put it there, and why.
