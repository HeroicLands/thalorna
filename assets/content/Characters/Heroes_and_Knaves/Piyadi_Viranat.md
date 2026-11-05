---
shortcode: pydvrnt
name: {full: Piyadi Viranat}
type: being
subType: npc
tags: [heroes-and-knaves, common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [infiltrator]
  occupation: Ore-Carrier and Courier
  lore: []
  culture: vedyariclt
  homes: [slvrgorges]
  affiliations: {shikhalaya: {rank: 0}}
  gender: female
  species: humanflk
  born: "694.211"
  height: 5' 2"
  weight: 112 lbs
  frame: light
  appearance:
    eye_color: black
    hair_color: black
    skin_color: brown
    complexion: [weathered]
    extra_features: [Her left wrist wrapped in gray rag over the struck line]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-armorgear-rhtunic}
    - {model: sohl-sohl-armorgear-rhbrch}
    - {model: sohl-sohl-armorgear-rhshoe}
    - {model: sohl-sohl-armorgear-wclk}
    - {model: miscgear-pledgecord}
    - {model: sohl-sohl-miscgear-stdrtns, system: {quantity: 2}}
    - {model: sohl-sohl-containergear-bgsmcvs}
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

Piyadi is a small, wiry woman of twenty-six, 5'2", with brown skin, black eyes and black hair hacked short with a knife. She has the forearms and the stoop of somebody who has carried baskets up ladders since she could walk, and a cough she does not mention. She wears rough homespun and a wool cloak, all of it the color of dust. A traveler's cord hangs at her neck, knotted at every shrine she has passed and has not entered. Her left wrist is wrapped in gray rag.

Under the rag the wrist-line is struck through. She keeps a knife where nobody can see it, because in the orthodox lowlands an Outcaste who bears arms is killed for it.

# Dossier {#dossier}

## The Workings

[[place-slvrgorges|The Silver Gorges]] carry lapis, silver and a little tin, and they have been worked continuously for longer than [[affiliation-shikhalaya|Shikhalaya]] has existed. The hereditary smithing clans hold the workings and lease the ore directly to [[affiliation-mrchntclctvvdyr|the Merchant Collective]]. Most of the men below are bonded. The ones who carry the ore up the ladders from the deep workings, and the waste back down, are **Outcastes**, because nobody else will.

Piyadi was born in the camp of the Outcastes under the clans' toll-gate and carried baskets from the age of seven. She is barred from the wells, the temples and the courts. The clans owe her no protection and have given her none.

## The Courier Nobody Looks At

At eighteen she was given other work. The clans keep their own weights and their own tally at the gate where the gorge road leaves the workings. Every month in the open season the gate's tally of ore out went down the road to the Collective's agent at [[place-suryagarha|Suryagarha]], sealed, by hand. The clans sent it by an Outcaste, because no thief on the road would touch one, no clerk at the city gate would ask to see her wrist, and nobody in Suryagarha would speak to her long enough to ask what she carried.

She carried the tally for eight years. She cannot read it. But she was in the room at the gate when every weighing was called aloud, month after month, and she remembers every figure, because she had nothing else to do on the road down but say them over.

What the Collective returns to the customs-house at Suryagarha is not what the gate weighed. The crown collects on the road and not on the rock, and has been careful for four generations not to ask what the difference is worth. Piyadi knows, to the basket.

## The Deck

At the end of the last open season she did not come back up the road. She walked south instead, under the traveler's cord with her wrist wrapped, down the terrace road and through the lowland market towns, sleeping outside villages and buying bread from people who did not look at her hands. She is making for [[place-chandrmukha|the Moon-Mouth]], where a crew signs on at the quay and nobody asks to see a wrist.

A runaway who reaches Chendramukhva is safe until the season ends and is safe afterward only if she sails. She means to be aboard a hull outside the bar before the rains make the roadstead untenable, and she does not much care where it goes.

## Psyche

### Personality

Piyadi is watchful, quiet and quick. She speaks only when she must, and then to the point. She does not expect kindness and is suspicious of it. She has a dry, bleak humor that comes out at night by a fire and is gone by morning.

She has never seen the sea and does not know what to expect of it.

### Motivation

She wants a berth on a hull that clears the bar at Chendramukhva before the rains.

### Strengths

Invisible
: She has spent her life being looked past, and she knows how to be.

The Figures
: She carries eight years of the clans' gate tally in her head, exactly.

Endurance
: She can walk all day under a load and sleep on stone.

### Weaknesses

The Wrist
: If the rag comes off in the wrong village, she is dead.

The Courier Missed
: The clans know their tally stopped coming. The Collective's agent knows it too.

No Coin
: She has almost no money and no way of earning it on the road that does not show her hands.

## Social

### Patrons and Allies

The deck
: Which she has never seen and is counting on.

### Rivals

The smithing clans of the Gorges
: Whose courier she was, and who would like to know where she has gone and what she remembers.

The Collective's agent at Suryagarha
: Who received the tally for eight years and has the most to lose from the figures.

### Affiliations

[[affiliation-shikhalaya|Shikhalaya]]
: An Outcaste, put out of every order of the kingdom.

## Plot Hooks

On the Road Behind
: Two men of the clans have come down the terrace road asking after a woman with a wrapped wrist. Piyadi has been sharing the party's fire for three nights without saying who she is. On the fourth she asks them to walk her as far as the river.

The Price of a Berth
: At Chendramukhva a ship's master wants a fee before he will sign on a woman with no papers and no trade. Piyadi has no money. She has the figures, and she offers them to the party for the price of the berth.

The Headman's Question
: At a well in a lowland village the headman asks to see her wrist before she draws water. The party is standing beside her.
