---
shortcode: asharhrrds
name: {full: Ashara Harordas}
type: being
subType: npc
description: "A swordmaster of Tirellan who keeps a fencing yard in the garrison lanes below the Horse Yards, teaching the sword and the thrown blade to merchants' sons, border households and garrison officers."
tags: [guilded, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Swordmaster
  lore: []
  culture: vylarianclt
  homes: [tyrellan]
  affiliations: {vylarinmpr: {rank: 3}, brazemas: {rank: 1}}
  gender: female
  species: humanflk
  born: 686.99
  height: 6'
  weight: 176 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: dark_brown
    skin_color: tanned
    complexion: [sun_kissed]
    face_shape: square
    mouth: thin
    extra_features: [a tattoo of a dragonfly on the neck]
  packFolder: midhalionvylaria
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 45}}
    - {model: skill-vylarilng, system: {masteryLevelBase: 56}}
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

Ashara Harordas is a 33-year-old woman who stands 6'0" tall and is of moderate build. She has a square face with angular cheekbones, a high forehead, and a square jaw that leads to a square chin. Her round brown eyes sit beneath prominent brows and give her a candid gaze. She has a prominent nose and thin lips. She has sun-tanned skin with a sun-kissed complexion. Her dark brown hair is swept up and held with carved combs, which leaves bare the small dragonfly tattooed on the side of her neck.

# Dossier {#dossier}

Ashara Harordas is a swordmaster of [[place-tyrellan|Tirellan]], the walled capital of [[place-moktur|Moktur]], who keeps a fencing yard in a lane below the [Horse Yards]{.name data-type="place/site"}, among the armorers and saddlers who work for the garrison. She teaches the sword: to the sons of the merchant houses who sit on the town's council, to young men of the border lords' households who have learned the spear in their lords' yards and want a blade as well, and to any officer of the garrison who can pay her by the month.

Tirellan is a city of soldiers, and a fencing master there is judged by soldiers. Ashara has fought every challenger who has come to her gate and lost to few, and her pupils win the bouts that the households hold among themselves in the long evenings of winter. She teaches the throwing of knives and javelins as well as the sword, and she is better at that than any rider of the auxiliaries she has met.

## Background

**The frontier.** Ashara grew up in the lanes below the Keep, a saddler's daughter who watched the auxiliaries drill on the training ground at the foot of the Horse Yards and copied them with a stick.

**The yard.** She learned the sword in the garrison lanes, won her bouts against every challenger, and opened her own yard when her name was made. Her pupils have multiplied each year since.

## Psyche

### Personality

Ashara is quick, proud and fiercely competitive. She cannot turn down a challenge, and she lets her pride decide when her judgment should.

### Motivation

She wants her yard to be the first in Moktur and her name to be the one the border lords send their sons to.

### Strengths

She has very fast hands and a sharp eye, she is a fine teacher of the sword and a better one of the thrown blade, and the lanes of the garrison respect her.

### Weaknesses

Her pride. She takes every bout as a matter of honor and has made enemies of men she should have let win.

## Social

### Enemies

A master of the spear in one of the border lords' towers, who tells the young men of his house that a sword is a townsman's weapon, and whose best pupil she beat in front of his lord.

### Others

- **The sons of the merchant houses**, who pay her by the month and boast of her in the forum.
- **The armorers and saddlers of the garrison lanes**, her neighbors, who send her their customers' sons.
- **The officers of the garrison**, some of whom come to her yard to keep their hand in.

### Affiliations

- **[[affiliation-vylarinmpr|Vilérian Empire]]**: a Palvethos, a free resident under imperial law without the citizenship, and liable to the Empire's taxes.
- **[[affiliation-brazemas|Faith of Brazemas]]**: one of the lay faithful, the Devran, who keeps the feasts of the Thunderer without office in the temple.

## Plot Hooks

1. **The pay chest.** The _tarkelos_ needs extra blades to bring the auxiliaries' pay chest down from [[place-korrast|Korras]] by the first of the month, with a war-band on the march. Ashara has been asked to choose them from her best pupils, and the pupils want her to ride with them.
2. **The tower's challenge.** The master of the spear has challenged her to fight his best man before the households in midwinter, spear against sword. If she loses, half her border pupils go back to the spear.
3. **The surveyor's guard.** The clerk of the [[affiliation-imperialoffices|Imperial Offices]] who is measuring the road has asked her for a guard, because the last man sent on the same errand came back with a broken leg. Several of her pupils are sons of the _pozerus_'s men.
4. **The eagle.** One of her pupils, the son of a family of the Fourth's cashiered officers, has been seen at the [Eagle Shrine]{.name data-type="place/structure"} after dark. He asks her not to say so.
