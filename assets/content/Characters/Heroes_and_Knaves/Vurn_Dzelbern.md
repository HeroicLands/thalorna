---
shortcode: vrndzlbrn
name: {full: Vurn Dzelbern}
type: being
subType: npc
tags: [heroes-and-knaves, common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [woodsman]
  occupation: Reach-guide
  lore: []
  culture: hvarnclt
  homes: [nurvhrn]
  affiliations: {hvarnguides: {rank: 5}}
  gender: male
  species: humanflk
  born: "692.41"
  height: 5' 7"
  weight: 146 lbs
  frame: light
  appearance:
    eye_color: grey
    hair_color: black
    skin_color: tanned
    complexion: [weathered]
    extra_features: [Rope-burn scars across both palms]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 20}}
    - {model: skill-vedyarlng, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-weapongear-stf}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-armorgear-ltvest}
    - {model: sohl-sohl-armorgear-wshirt}
    - {model: sohl-sohl-armorgear-wtrsr}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-armorgear-bvcloak}
    - {model: sohl-sohl-armorgear-ltglove}
    - {model: sohl-sohl-miscgear-rope12hemp, system: {quantity: 3}}
    - {model: sohl-sohl-miscgear-grphook}
    - {model: sohl-sohl-miscgear-hvyblkt}
    - {model: sohl-sohl-miscgear-frtns, system: {quantity: 4}}
    - {model: sohl-sohl-miscgear-tndrbx}
    - {model: sohl-sohl-containergear-backpk}
    - {model: sohl-sohl-containergear-wtrskin}
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

Vurn stands 5'7" and is built narrow and long in the arm, with the light frame of a man who spends the open months on a rope and the closed months on short rations. His skin is tanned and weathered, his black hair is cut short above the ears, and his eyes are a pale gray that looks lighter against the snow-burn. Both palms are crossed with old rope-burn, white and shiny, from the day he held a party's weight on a shelf alone.

He wears leather over wool and a beaver cloak, and he carries three ropes, greased dark, coiled over the pack. When he is asked his name he answers with a place.

# Dossier {#dossier}

## The Name at the Dzelbern Fire

A Hvarn child is named for someone in the roll of the dead, and carries the duty of knowing where that person was found. Vurn was named for [Vurn]{.name data-type="being/npc"} of the Rhonzhel hearth, who went round the Butter Stone on the upper shelf of [[place-jnanadvar|the Scholars' Door]] with a pack when the lip under it had gone soft with the thaw. The Rhonzhel hearth brought her up from the scree, a day's work down, and gave her name to the Dzelbern fire. When the Bone-bringer reached her in the recitation at [[place-nurvhrn|Nurvharn]], it was Vurn, as a boy, who stood and said the place.

He has walked the Butter Stone every season since he was old enough to be put on a rope, with his hand on the stone like everybody else. He is a **Reach-guide** now, trusted with a crossing of [[place-estrnreach|the Eastern Reach]] alone and answerable to the winter council for whoever does not come back. Nobody has failed to come back on his rope.

## Shemli

The Dzelbern hearth has one name it has not given. [Shemli]{.name data-type="being/npc"}, his mother's sister, went along the Long Lip in the dark to bring back a lowland man's beast that had gone on by itself, and she went off the rope. She is under the middle of the lip, on a ledge the rope does not reach, and the ledge is wet all summer. The roll says of her what it says of nobody else on the shelf: not brought up yet.

The hearth has been down for her three times, and the Bone-bringer once went down with them. Vurn was on the rope the last time, at nineteen, and got close enough to see where she lies and not close enough to touch her. That was the day of the scars on his hands. The rope frayed on the lip above him, and he held the man below him until the man above them both could take the weight.

A child is named for a person who was found. Until Shemli is brought up her name is at no fire, and the hearth has a daughter coming this winter whom the women of the hearth mean to name for her. The council has not pressed the Dzelbern hearth about it, because Shemli went off the rope by her own choice and the hearth lost nobody through fault. But an unplaced body is an unfinished account, and the long house wants its accounts settled before midwinter.

## What It Will Take

Vurn has thought about the ledge more than about anything else in his life, and he has come to a conclusion the hearth does not like. A Hvarn rope from the lip will not reach her, and a Hvarn party cannot hold a second rope from below, because there is no below: the gorge falls away under the ledge to water nobody has seen. What it will take is a fixed line from the far wall of the gorge, which means a climber on the far wall, which means somebody who climbs rock rather than shelves. The Hvarn do not.

There are such people below the shrines. The Shikhalayan clans of the side valleys hunt on rock. The Silver Gorges work it. [[place-sangrafort|The Sangra-fort]]'s commander has men who have been up the signal-tower's face in winter. None of them owes the Dzelbern hearth anything, and the Hvarn ask lowlanders for nothing as a rule. Vurn means to ask anyway, at the thaw, and to pay out of his own share of the season's fee, and he has not yet told the hearth.

## Psyche

### Personality

Vurn is quiet, patient and exact. He checks every rope twice and his own knots three times, and he does not hurry anybody on a shelf. On the floor of the long house he says little, and when he speaks it is to put an entry right. He laughs easily, mostly at himself, and he greases rope through the closed months with the old men, because he likes the sayings.

He does not like lowlanders much and does not dislike them. He thinks of them as people who do not know where their dead are.

### Motivation

He wants Shemli brought up off the Long Lip, so that a child of his hearth can be given her name.

### Strengths

The Shelf
: He knows the upper shelf of Jnanadvar stone by stone, from the roll and from his feet. He climbs, holds and reads weather as well as any Hvarn of his age.

A Clean Rope
: No party has been lost on his rope, and the council knows it.

The Long Lip
: He has been closer to Shemli than anyone living, and he knows exactly what the ledge needs.

### Weaknesses

Asking
: He has never asked a lowlander for anything, does it badly, and expects to be refused.

The Hearth's Leave
: He means to spend his share and bring strangers onto Hvarn ground without the hearth's word. A Reach-guide who does that answers to the council for it.

Careless of Himself
: He takes the risks on a rope himself, every time, and has not yet been made to pay for it.

## Social

### Patrons and Allies

[Rhistne]{.name data-type="being/npc"} of the Dzelbern hearth
: An old Reach-guide who taught him the Reach, and who went down for Shemli the first time.

The Bone-bringer
: Who keeps the roll, has been down to the ledge once, and would like to say a different line at the Long Lip before he hands on the office.

### Rivals

The hearth-head of the Dzelbern hearth
: His uncle, who has forbidden a third descent until the council says it is worth a second life.

### Affiliations

[[affiliation-hvarnguides|The Hvarn]]
: Reach-guide of the Dzelbern hearth.

## Plot Hooks

The Far Wall
: Vurn comes down to the eastern janpodas at the thaw looking for climbers who work rock, and finds the party. He offers his share of the season's fee, a crossing of Jnanadvar with the best guide on the Reach, and a place at a Hvarn fire, which no lowlander he has met has been offered. The ledge is wet all summer and the fixed line has to be set from a wall nobody has climbed.

The Beast
: The lowland man whose beast Shemli went after is in the crossing-register at the summit [[place-pssshrines|the Pass-Shrines]], and his grandson has written to Nurvharn asking whether anything the beast carried came up the gorge. Vurn does not know what the beast carried and wants to know why anyone would ask after so long.

The Daughter
: The child is born before the thaw. The hearth will name her for Shemli at midwinter only if Shemli has been found, and the women of the hearth have asked Vurn, privately, whether he can promise it.
