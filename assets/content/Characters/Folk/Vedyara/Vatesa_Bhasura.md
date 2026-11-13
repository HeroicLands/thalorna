---
shortcode: vatesabhasur
name: {full: Vatesa Bhasura, en: [Priest Vatesa]}
type: being
subType: npc
tags: [clergy]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [cleric, courtier]
  occupation: Priest of a Temple of Kamavrata
  lore: []
  culture: vedyariclt
  homes: [chendrapur2]
  affiliations: {chendrapur: {rank: 5}, vrnkpnthn: {rank: 3}, kamavrata: {rank: 2}}
  gender: male
  species: humanflk
  born: "662.30"
  height: 6' 0"
  weight: 145 lbs
  frame: light
  appearance:
    eye_color: amber
    hair_color: dark_brown
    skin_color: golden
    complexion: [smooth]
    hair_style: long
    extra_features: [A fresh flower garland, changed every morning]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 15}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 10}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 55}}
    - {model: skill-kamavrata, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-armorgear-slkrobe}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: sohl-sohl-miscgear-incense}
    - {model: sohl-sohl-miscgear-flutewoode}
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

Vatesa is a tall, slender man of fifty-eight, 6'0", golden-skinned and smooth-faced, with dark brown hair worn long and oiled and amber eyes that are warm until he is crossed. He wears a robe of rose-colored silk and a fresh garland every morning, as the god's clergy do, and he smells faintly of the temple's consecrated oil.

# Dossier {#dossier}

## The Garden Temple

Vatesa is the senior priest of a temple of [[affiliation-kamavrata|Kamavrata]] on the riverbank below [[place-chendrapur2|the Moon City]]: a lotus pond, a garden of flowering vines and a small, beautiful sanctum, where couples walk at dusk for seven evenings and the newly married come to be garlanded. He is ordained of his school and serves the god as its doctrine requires, and he is a **Ritrija** of a priestly family that has kept the temple's garden for six generations.

The temple's spring festival is one of the largest in the city, and Vatesa sets its calendar. Performers who want the festival ground ask him for a day, and the managers of the city's other festivals, who share many of the same performers, defer to his lists more often than they admit.

## The Performance

Three years ago [[being-vishalblry|Vishali Balarnaya]] played the festival ground on its second evening. In front of the largest crowd of the season she gave the seven evenings in the garden, the drop of oil on the wedding night and the clipping from the lotus pond as a piece of comedy, the temple's practice as superstitious theater, and the crowd laughed at all of it.

Vatesa had her struck from his festival's lists that night, and persuaded the managers of several others to strike her from theirs. He counts her an offender against the temple. The bans have made her more famous in the city than the performance did.

## Psyche

### Personality

Vatesa is gracious, musical, proud and long in memory. He is generous to the poor and the nervous, as the god's clergy are expected to be, and turns no one away from the garden. He has never been laughed at before, and he does not know how to forget it.

### Motivation

He wants Vishali Balarnaya to ask the temple's pardon in its own garden, before the same festival crowd that laughed.

### Strengths

The Festival Lists
: Performers across the city need his day, and many of the other festivals follow his lists.

The Garden's Love
: His temple is among the best loved in the city, and the people who come to it are loyal to it.

### Weaknesses

Pride
: He has made a jest into a quarrel, and the quarrel into a reputation for the jester.

The Bans
: They hold only as long as the other festivals keep them, and each season fewer do.

## Social

### Patrons and Allies

The managers of the city's festivals
: Who have kept his bans so far, and whose patience is running short.

The households of the garden
: Couples he has garlanded, and families who walk the garden every spring.

### Rivals

[[being-vishalblry|Vishali Balarnaya]]
: The fool who mocked the temple's practices on its own festival ground.

### Affiliations

[[affiliation-chendrapur|Chendrapur]]
: Ritrija, senior priest of a riverside temple.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: Ordained of a sampradeya.

[[affiliation-kamavrata|Kamavrata]]
: Vretin of the Garden Year.

## Plot Hooks

The Pardon
: Vatesa offers to lift every ban if Vishali comes to the garden and asks pardon in front of the festival crowd. He hires the party to carry the offer to her, and to bring her if she accepts.

The Forged List
: A festival list bearing Vatesa's seal has struck three other performers who mocked nothing. He did not write it. He wants to know who has his seal.

The Second Evening
: Vishali has been booked, under another name, for the garden festival's second evening this year. Vatesa learns of it three days before, and needs the party to find out which of his own priests made the booking.
