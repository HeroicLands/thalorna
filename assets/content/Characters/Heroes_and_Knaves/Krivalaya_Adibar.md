---
shortcode: krvlydbr
name: {full: Krivalaya Adibar}
type: being
subType: npc
tags: [heroes-and-knaves, tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [trader, skirmisher]
  occupation: Bow-Merchant
  lore: []
  culture: vedyariclt
  homes: [danurkot]
  affiliations: {dnrktjnpd: {rank: 3}, vrnkpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: 674.88
  height: 5' 9"
  weight: 158 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: golden
    complexion: [clear]
    extra_features: [A thin scar across the bridge of the nose from a snapped bowstring]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 20}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-weapongear-lbw100}
    - {model: sohl-sohl-projectilegear-arwstd}
    - {model: sohl-sohl-containergear-quiversmsh}
    - {model: sohl-sohl-weapongear-shrtswd}
    - {model: sohl-sohl-armorgear-slkshirt}
    - {model: sohl-sohl-armorgear-ltvest}
    - {model: sohl-sohl-armorgear-wtrsr}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-armorgear-wmntl}
    - {model: miscgear-letterofcredit}
    - {model: sohl-sohl-miscgear-sealsignat}
    - {model: sohl-sohl-miscgear-scalesweig}
    - {model: sohl-sohl-containergear-bpchlg}
    - {model: sohl-sohl-miscgear-tndrbx}
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

Krivalaya is a lean, quick man of forty-six, 5'9", with golden skin, black hair oiled back and a thin scar across the bridge of his nose where a bowstring parted on him at fifteen. His eyes are brown and amused. He dresses well, in a silk shirt under a leather vest and a wool mantle, and he carries a longbow of his own house's make, strung, wherever the law lets him.

He talks a great deal and says less than it sounds like.

# Dossier {#dossier}

## The Bow Trade

The [[affiliation-dnrktjnpd|Janpoda of the Bow-Fort]] trains the archers of every kingdom in Vedyara, and its **Danhija** households handle the considerable trade in arms that follows. Danurkot bows and arrows are sold across the subcontinent. Krivalaya's house has sold them for four generations, south by the river, west to [[affiliation-bhumipal|Bhumipal]]'s companies and north over the wall to the edge-towns of the desert, and he has run it for twelve years.

The northern trade is the best and the worst. Bows sell beyond the wall for three times their weight in silver, and they cross the wall once a year, in the same few weeks as everything else, on a pass-token dated at the clerk's pleasure at [[place-suryagarha|Suryagarha]]. A merchant who crosses late sells to buyers who have already bought.

## Once Over the Sixth Road

Four years ago a buyer beyond the wall needed a sealed packet from Krivalaya in the closed months, and paid for it to be carried by [[place-gudesroad|the Guides' Road]]. Krivalaya carried it himself. He went over hooded, on foot, holding a cord, behind an [[affiliation-osketguides|Osket]] guide from [[place-tsokhar|Tsokhar]] whose name he never learned, and arrived on the far side a month and a half later with no idea of where he had been. He remembers the cold, the cord in his hand, and the count of his own steps, which he lost on the third day.

The road carries passage and not goods. It is paid for in advance and in gold, and neither end of it is written down. Krivalaya has been trying ever since to make it carry bows.

## A Year's Profit

He has offered the guide who took him a year's caravan profit to take a load of bows over the sixth road in the closed months, on yaks, hooded or not as the Osket please. He has sent the offer up to Tsokhar three times by drovers. The guide has refused every sum, and the third time sent back the drover with a message that the drover would not repeat.

Meanwhile the [[place-pssshrines|Pass-Shrines]] have begun asking. A shrine-ushtaka came down to Suryagarha last open season and asked, in the yards, which guide it was who took a Danurkot merchant over the road the shrines do not bless. The shrines keep the only record of traffic on the wall that is not a customs document, and they have never recorded a crossing of the sixth road. The crown's formal position is that the road does not exist.

## Psyche

### Personality

Krivalaya is cheerful, persistent and charming, and he does not take no for an answer from anybody he has not yet paid enough. He is a good archer and a better salesman, and he has a gambler's patience with long odds. He does not think he has done the guide any harm by asking.

He has not told anyone at Danurkot where he was in the winter of the packet.

### Motivation

He wants a load of Danurkot bows taken over the wall in the closed months, by the road no token dates.

### Strengths

Danurkot Bows
: He can sell bows to anyone, and he can shoot them as well as most of his customers.

Credit
: He holds a [[miscgear-letterofcredit|Collective Letter of Credit]] of the Merchant Collective and can raise money anywhere in Vedyara in a week.

Once Over
: He is one of the very few lowlanders living who has crossed the sixth road and come back.

### Weaknesses

He Does Not Know the Way
: He was hooded, and he lost his count.

Talk
: He likes to be thought daring, and he has told the story of the packet to more people than he should have.

## Social

### Patrons and Allies

His buyer beyond the wall
: A house of the edge-towns whose name he does not give, which pays in gold and asks for things carried in winter.

The Sabhra of Danurkot
: Which is glad of the trade and has not asked how it is done.

### Rivals

The Osket guide of Tsokhar
: Who took him over once and will not do it again for any price.

The Pass-Shrine ushtakas
: Who want to know which guide it was.

The customs-house at Suryagarha
: Which would very much like to know what crosses the wall without a token.

### Affiliations

[[affiliation-dnrktjnpd|Danurkot Janpoda]]
: Danhija, head of a bow-trading house.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: He keeps the household observances and the Festival of the Drawn Bow.

## Plot Hooks

Which Guide
: The shrine-ushtaka who asked in the yards comes to Krivalaya directly, and then, when he will not say, to the party he has hired. The ushtaka is polite, patient and offers nothing, and the guide's lineage would be in grave trouble if he were told.

The Second Packet
: The buyer beyond the wall sends for another packet in the closed months. Krivalaya hires the party to carry it to Tsokhar and ask for passage on his behalf, with a fourth offer, larger than the third.

The Man Who Knows the Way
: A man in the caravanserai at Suryagarha tells Krivalaya he can take him over the sixth road without the Osket, for half what the Osket would charge, and names its first three stages correctly. Krivalaya wants the party to go with them.
