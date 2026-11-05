---
shortcode: dlzhvrstn
name: {full: Delzh Vrestun}
type: being
subType: npc
tags: [heroes-and-knaves, administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [courtier]
  occupation: Hearth-head and Turn-keeper
  lore: []
  culture: hvarnclt
  homes: [nurvhrn]
  affiliations: {hvarnguides: {rank: 6}}
  gender: female
  species: humanflk
  born: "679.302"
  height: 5' 4"
  weight: 132 lbs
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: tanned
    complexion: [weathered]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 15}}
    - {model: skill-vedyarlng, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-weapongear-stf}
    - {model: sohl-sohl-armorgear-wdress}
    - {model: sohl-sohl-armorgear-wcoat}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-armorgear-bvcap}
    - {model: sohl-sohl-armorgear-ltglove}
    - {model: sohl-sohl-miscgear-hvyblkt}
    - {model: sohl-sohl-miscgear-rope12hemp}
    - {model: sohl-sohl-miscgear-tndrbx}
    - {model: sohl-sohl-containergear-bpchmd}
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

Delzh is a compact woman of forty-one, 5'4" and broad through the shoulders, with a tanned, weathered face and dark brown eyes that settle on whoever is speaking and stay there. Her black hair is braided down her back, with one white streak over the left temple that she has had since her twenties. She wears a wool dress under a heavy coat, a beaver cap and good boots, and a single greased rope over one shoulder, which she has not walked a crossing with in years and carries anyway.

She remembers everything said on the floor of the long house in every winter since she was a girl, and it shows in the way she listens.

# Dossier {#dossier}

## The Ear

[Delzh]{.name data-type="being/npc"} of the Dzelbern hearth died at the Ear on the upper shelf of [[place-jnanadvar|the Scholars' Door]], where the storm comes up first, and her name went to the Vrestun fire. Delzh was the girl who stood in the long house at [[place-nurvhrn|Nurvharn]] and said "The Ear" when the Bone-bringer reached it. She answers to the name, and to the place, and she has never walked the Ear without stopping there.

She is head of the Vrestun hearth now, sitting on the winter council and speaking for those who eat at her fire. She is also the **Turn-keeper**.

## The Turn

[[affiliation-hvarnguides|The Hvarn]] share their two crossings out rather than holding them by descent. Each winter the hearth-heads sit in the middle of the long house and assign the coming season between them: who takes [[place-jnanadvar|Jnanadvar]], who takes [[place-shankhadvr|Shankhadvar]], who draws the pack-trains for [[place-sangrafort|the Sangra-fort]], and what the last season left owing between hearths. The rotation is made aloud and written nowhere. The Turn-keeper keeps it: the order of the draw, the debts it leaves, and the reasons for both.

Delzh has kept it for nine winters. She can say which hearth drew the conch-door three winters running and what it was owed for that, which hearth lost a party and when it was given a road again, and what each hearth thinks it is owed and is not. She says it aloud before the council when the council asks, and she is corrected from the floor less often than any Turn-keeper the old women remember.

## The Purses

The rotation works because nobody can buy a place in it. A hearth that draws Shankhadvar draws it because its turn came, and a hearth that is owed a road is given one because the floor agrees it is owed. Delzh holds that the whole people stands on this, because a road the Hvarn shared for money would be a road they no longer shared.

Two purses have come to Nurvharn in the last year. The first was the eastern janpodas'. The fort contract falls due at the next renewal, and their factor has proposed, with every courtesy, that the pack-trains for the fort be drawn by one hearth for the whole three years, for steadiness, at a better rate. The second was [[affiliation-shikhalaya|Shikhalaya]]'s. A Shikhalayan **Dutsa** came to the edge of the village in the last open weeks and asked whether a hearth that drew the fort's trains might carry one of the crown's men up with them, at a price, to see what the kingdom has never been let to see. The kingdom considers the whole northern frontier its own to watch, and the Hvarn are the confederation's eyes on it.

Neither offer was made to the council. Both were made to hearths. Delzh has reason to think one hearth has taken Shikhalayan silver into its winter store already, against a draw that has not been made, and she means to know which before the council sits.

## Psyche

### Personality

Delzh is patient, formal and very hard to move. She speaks slowly, in the old order of speaking, and gives a reason for everything she says. She does not lose her temper on the floor. She loses it afterward, at her own fire, and her hearth has learned to let her.

She likes the closed months best, when the whole people is under one roof and a debt can be said to the face of the hearth that owes it.

### Motivation

She wants no crossing ever drawn in the turn because a lowland purse has paid for the draw.

### Strengths

The Memory of the House
: She holds the rotation and its debts for nine winters back, and her account is the one the floor trusts.

The Order of Speaking
: She knows the council's procedure better than the Winter-speaker does, and uses it.

Lowland Speech
: She speaks [[skill-vedyarlng|Vedyari Language]] well enough to deal with a factor or an envoy, which few Hvarn do.

### Weaknesses

Suspicion
: She is sure a hearth has been bought and is not sure which, and she has begun to treat every hearth-head as the one.

The Contract
: The fort contract is the people's largest income. If she breaks the janpodas' offer, she may break the contract, and the hearths will remember whose winter it was.

The Rope She Carries
: She has not taken a party over a crossing in years, and the younger guides say so.

## Social

### Patrons and Allies

[Hevrel]{.name data-type="being/npc"} of the Klemverd hearth
: The Fort-carrier, who keeps the contract and wants it renewed on the old terms.

The Winter-speaker
: Who presides over the council and leaves the rotation entirely to her.

### Rivals

The janpodas' factor
: Who wants one hearth for three years and has the contract to bargain with.

The Shikhalayan Dutsa
: Who wants a man on the fort's trains and has silver to spend on it.

### Affiliations

[[affiliation-hvarnguides|The Hvarn]]
: Hearth-head of the Vrestun hearth and Turn-keeper of the winter council.

## Plot Hooks

The Silver in the Store
: A hearth's winter store holds coin the Hvarn do not use, struck at [[place-suryagarha|Suryagarha]]. Delzh needs to know whose store it is and what was promised for it before the council sits after midwinter, and she cannot ask without saying why. Strangers wintering at Nurvharn can look where she cannot.

The Renewal
: The fort contract falls due. Hevrel goes down to meet the janpodas' factor at the edge of the village, and Delzh asks the party to go with him and hear the offer made, so that it can be said aloud on the floor in the factor's own words.

The Crown's Man
: A lowlander turns up on a fort pack-train at the col, traveling as a drover, and the Sangra-fort's commander does not know him. Delzh wants him brought down before the turn is drawn, and quietly, since a Hvarn hearth brought him up.
