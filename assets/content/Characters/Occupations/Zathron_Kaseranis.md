---
shortcode: xthrnksrns
name: {full: Zathron Kaseranis}
type: being
subType: npc
description: "The physician of Polthara, a learned and experimenting man of the propertied order whose dispensary on the square supplies the circuit priest's medicines and treats the district's hurt and sick on market days."
tags: [tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [healer]
  occupation: Physician
  lore: []
  culture: vylarianclt
  homes: [polthara]
  affiliations: {vylarinmpr: {rank: 5}, lizelas: {rank: 1}}
  gender: male
  species: humanflk
  born: 676.162
  height: 5' 9"
  weight: 146 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: chestnut
    skin_color: tanned
    complexion: [weathered]
    extra_features: []
  packFolder: midhalionvylaria
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 17}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 51}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 85}}
    - {model: skill-semrnscrpt, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 17}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-lgdm, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-fltch, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 11}}
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

Zathron Kaseranis is a 43-year-old man who stands 5'9" tall and is of moderate build. He has an angular face with high cheekbones, a narrow forehead, and a sharp jaw that leads to a square chin. His sharp brown eyes sit beneath prominent brows, lending him an incisive gaze. An aquiline nose and wide lips complete his features. He has tanned skin with a weathered complexion. His chestnut hair is kept practical and short, and his fingers are often stained with the salts and powders he grinds.

# Dossier {#dossier}

Zathron Kaseranis is the physician of [[place-polthara|Polthara]], the market town of the [[place-hylen|Hilen]] estate country, and the one the district's people come to when a village remedy has failed. He keeps a house with a dispensary on the street into the square, and on a market day it has a queue: stewards with fevers they caught on the road, carters with crushed hands, tenants' wives with children the circuit priest has sent in.

He is a physician of the learned kind, who reads every treatise he can buy and keeps his own case books, and he has a reputation for trying what the treatises only suggest. He compounds his own medicines from herbs and from mineral salts, and much of what the circuit priest of [[affiliation-lizelas|Lizelas]], [[being-rvthrbrmztr|Revothar Baremzator]], carries round the tenant villages is bought from his dispensary on market days.

## Background

**The family.** The Kaseranis are of the propertied order and hold farms in the district. Zathron was the son with no farm coming to him, and he was sent to study medicine in the provincial capital.

**The town.** He came back to Polthara as a young man because it had no physician. He has been its physician for twenty years, and he has kept a case book of every one of them.

## Psyche

### Personality

Zathron is serious, precise and kind under it, impatient with anyone who will not follow his instructions and gentle with anyone in pain. He is better with patients than with colleagues.

### Motivation

He wants to know why the people of the district fall ill and how to stop them, and he writes up what he learns in the hope that a better physician will read it.

### Strengths

He is a skilled diagnostician and surgeon, he knows his herbs and minerals thoroughly, and his case books are the best record of the district's health that exists.

### Weaknesses

He tries untested remedies when the tested ones fail, and the families of the patients they did not save remember.

## Social

### Enemies

The older physicians of the provincial capital think his methods dangerous and have said so in letters, and a steward whose master died under a new remedy holds him to blame.

### Others

- **[[being-rvthrbrmztr|Revothar Baremzator]]**, the circuit priest, who buys medicines from him and sends him the cases the villages cannot treat. Each thinks the other too stubborn.
- **The stewards of the district**, who pay him in coin on market days and in produce at harvest.

### Affiliations

- **[[affiliation-vylarinmpr|Vilérian Empire]]**: a Gulmen, of the propertied order from which the empire's officers and great commands are filled.
- **[[affiliation-lizelas|Faith of Lizelas]]**: one of the lay faithful, the Devran, who keeps the feasts of the goddess of fertility without office in the temple.

## Plot Hooks

1. **The fever.** A fever has come into the tenant villages on the carts of the market, and Revothar is nursing the sick. Zathron believes he knows the remedy, and the only supply of its chief salt is in the capital. He asks a party to ride for it.
2. **The robbed steward.** A steward robbed on the road home from the market was brought in with a cut across the forearm. He is the third Zathron has stitched this season, each robbed after a good market, and Zathron has begun to keep a note of what each of them tells him over the needle.
3. **The case books.** A physician of the capital has written to ask for Zathron's case books, to be published under the capital physician's name with a line of thanks. He is offering enough to buy the dispensary twice over.
4. **The poisoner's question.** A buyer of the capital who lodges at the [Steward's Rest]{.name data-type="place/structure"} on market nights has asked Zathron, three markets running, which of his salts are fatal and how quickly.

:::secret {title="The Truth of Polthara"}
Each of the three robbed stewards told Zathron over the needle that he had dined the night before with the senior _tavemos_, [Brazemos]{.name data-type="being/npc"}. Brazemos chooses which wagons the bandits of the wooded margins rob, because the register tells him what every steward sold and so what every steward carries home, and he takes a share of every theft. Zathron has the pattern in his notes and has not yet seen what it means.
:::
