---
shortcode: drtpjdvtn
name: {full: Dritapaja Devatuni}
type: being
subType: npc
tags: [heroes-and-knaves, clergy]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [cleric, scholar]
  occupation: Dorshaka (Keeper of the Dream-Record)
  lore: []
  culture: vedyariclt
  homes: [svapnastambha]
  affiliations: {bhumipal: {rank: 5}, vrnkpnthn: {rank: 3}, svapnasarisameja: {rank: 3}}
  gender: male
  species: humanflk
  born: 666.244
  height: 5' 8"
  weight: 139 lbs
  frame: light
  appearance:
    eye_color: hazel
    hair_color: white
    skin_color: tawny
    complexion: [weathered, wrinkled]
    extra_features: [Ink stains on the right thumb and forefinger]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 15}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 70}}
    - {model: skill-svapnasarisameja, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-weapongear-stf}
    - {model: sohl-sohl-armorgear-lrobe}
    - {model: sohl-sohl-armorgear-wmntl}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: sohl-sohl-miscgear-incense}
    - {model: sohl-sohl-miscgear-bookbase}
    - {model: sohl-sohl-miscgear-inkblk}
    - {model: sohl-sohl-miscgear-penquill}
    - {model: sohl-sohl-miscgear-candlestal}
    - {model: sohl-sohl-miscgear-liteblkt}
    - {model: sohl-sohl-containergear-wtrskin}
    - {model: sohl-sohl-miscgear-tndrbx}
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

Dritapaja is a thin, stooped man of fifty-four, 5'8", with tawny skin lined by sun and wind and white hair worn long and tied back. His hazel eyes are tired and kind, and they look at a petitioner for a long time before he says anything. He wears a linen robe and a wool mantle against the cold that comes off the sand at night. The thumb and forefinger of his right hand are stained with ink that has not come out in thirty years.

He walks with a staff on the stair of the tower and without it everywhere else.

# Dossier {#dossier}

## The Last Roof

[[place-svapnastambha|Svapnastambha]] stands on the rock shelf above the wells of [[place-marukupa|Marukupa]], the westernmost house of the [[affiliation-svapnasarisameja|Svapnasari-sameja]] anywhere, and the last roof in Vedyara a traveler sleeps under before the sand. A caravan master going west on [[place-marchroad|the March Road]] sleeps in one of its upper chambers, a keeper watches him, and what he brings back is read in the morning and written into the house's record. The reading costs nothing. The grain left afterward keeps the house.

Dritapaja is a **Dorshaka** of the house and its Keeper of the Dream-Record. He was born to a Ritrija household of [[place-sandyapur|Sandyapur]], came to the tower at nineteen as a Nidrapala, and has kept the record for twenty years. It runs back three hundred years, in the old abjad, in the hands of every keeper before him. A new dream is read against it, and he is the one who reads it.

## Whose Dream

The house holds that a dream given in its chambers belongs to the one who dreamed it. The reading is given to the petitioner and to nobody else. The record is consulted by the keeper, for the reading, and by nobody else. Caravan masters have come back to the tower for twenty years to ask what they dreamed before a crossing that went badly, and Dritapaja has read each of them his own entry and none of them anyone else's.

The crown's post below shares a cistern with the tower and, in a bad season, a wall. Its commander decides whether a caravan may go on, and a party that goes on against his word is not looked for. The tower asks nothing of the post and the post has never asked anything of the tower.

## The Lean Season

[[affiliation-bhumipal|Bhumipal]] knows a lean season is coming. The tribes of [[affiliation-dunhartrbs|Dunhara]] raid in lean seasons and trade in fat ones, and the companies on the march road are not paid. The Maharava's Montrin at Sandyapur has asked, by letter, whether the tower's record shows what the masters who crossed the sand this year dreamed of, and whether those dreams agree. Dunhari petitioners sleep at the tower as well as lowland masters, and the Montrin believes the record would show a raid coming.

The commander of the post has gone further. He has asked to sit in on the morning readings for the rest of the season, so that he can hold a caravan whose master dreamed badly. Dritapaja has refused both, politely and in writing. The commander has the Montrin's letter, and the Montrin has the Maharava's ear.

## Psyche

### Personality

Dritapaja is gentle, scrupulous and extremely stubborn. He speaks softly, listens for a long time and gives a reading with every qualification it needs and none it does not. He likes the caravan masters, who are frightened and honest in the mornings, and dislikes officers, who are neither.

He has never told a petitioner what to do. He tells them what they dreamed and what the record has seen like it, and stops.

### Motivation

He wants the tower's readings kept from the crown's post, so that no caravan is ever held on a dream.

### Strengths

The Record
: He knows three hundred years of dreams on the march road better than anyone alive, and reads a new one against them with great skill.

The Last Roof
: Every master on the road has slept under it, and most of them trust him.

Ritrija
: His station and his school protect him from any officer of the crown.

### Weaknesses

Frailty
: He is not strong and not young, and the tower is a long way from anyone who could help.

The Letter
: The Montrin's request was polite, and the next one may not be.

## Social

### Patrons and Allies

The Svopna-Achorya of the tower
: The master of the house, who agrees with him and would rather not be asked.

The caravan masters of the march road
: Who come back to the tower year after year, and would stop coming if their dreams were read to the post.

### Rivals

The commander of the post at Marukupa
: Who wants to hold caravans on the tower's readings.

The Maharava's Montrin at Sandyapur
: Who wants the record read for the tribes.

### Affiliations

[[affiliation-bhumipal|Bhumipal]]
: Ritrija by birth.

[[affiliation-svapnasarisameja|Svapnasari-sameja]]
: Dorshaka of Svapnastambha and Keeper of its Dream-Record.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: Ordained of the Svapnasari-sameja.

## Plot Hooks

The Copied Page
: A page in Dritapaja's own hand, an entry from this season's record, turns up in the post commander's quarters. Somebody in the tower copied it. He asks the party to find out who before the Svopna-Achorya does, because the house will put the copyist out.

The Sheikh's Son
: A young [[affiliation-dunhartrbs|Dunhari]] man of a sheikh's house sleeps at the tower on his way east, and the commander wants to know what he dreamed. The young man asks the party to see him safely past the post in the morning, whatever the reading.

The Captain's Question
: [[being-umrtdrtn|Umarti Daritan]]'s company comes through Marukupa unpaid, and the march-captain asks Dritapaja, as a petitioner, to sleep in the chamber herself. Her dream is hers to give to the Montrin if she chooses. The commander knows she is in the tower and is waiting at the foot of the stair.
