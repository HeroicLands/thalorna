---
shortcode: blknsrtn
name: {full: Balakin Saratin}
type: being
subType: npc
tags: [heroes-and-knaves, common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [woodsman]
  occupation: Drover
  lore: []
  culture: vedyariclt
  homes: [vandyabhumi]
  affiliations: {gomarga: {rank: 1}, vrnkpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: "697.190"
  height: 5' 10"
  weight: 152 lbs
  frame: light
  appearance:
    eye_color: amber
    hair_color: black
    skin_color: dark_brown
    complexion: [sun_kissed]
    hair_style: cropped
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-weapongear-stf}
    - {model: sohl-sohl-weapongear-slng}
    - {model: sohl-sohl-projectilegear-sston}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-armorgear-hstunic}
    - {model: sohl-sohl-armorgear-hstrsr}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: sohl-sohl-armorgear-wclk}
    - {model: miscgear-bondtoken}
    - {model: sohl-sohl-miscgear-flutewoode}
    - {model: sohl-sohl-miscgear-stdrtns, system: {quantity: 3}}
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

Balakin is a lean young man of 5'10", long-legged and dark-skinned, with black hair cropped short against lice and the dust, and amber eyes that look lighter than they are in a sunburned face. He wears a homespun tunic and trousers, sandals, and a wool cloak he sleeps in. A household's bond-token hangs on a cord at his throat, stamped with the Karyona mark and notched with what he still owes. He carries a drover's staff, a sling and a wooden flute, and he plays the flute to the herd at night because the cattle settle to it.

# Dossier {#dossier}

## The Tally

Balakin's wrist carries the sign of the **Karmija**, the serving station, and his household walked other men's cattle for generations. In a dry year when he was nine the herd his father was walking for a Karyona household lost forty head between two wells. The household did not hold the father to blame. It held him to the debt, and the father pledged his son's labor against it.

Balakin has walked the Karyona herds for fourteen years as a **Bonded Servant**. He holds neither stock nor water in his own name, he travels only with the [[miscgear-bondtoken|Bond-Token]], and a man found on the plateau without one is a runaway. The tally on the token is notched at each settling, and every year the debt has shrunk by less than he expected. He is good at the work: he can walk a herd a month between wells and lose nothing, he knows where the grass is before the household's own sons do, and the cattle follow him.

## No Door

A Bonded Servant's debt is bought out in one of two ways. The bond-holders come to the great pilgrim assembly to be paid, or a [[affiliation-mrchntclctvvdyr|Merchant Collective]] letter of credit pays it at any member's house. [[affiliation-gomarga|The Kingdom of the Cattle-Road]] sends nobody to the [Mahva-Melka]{.name data-type="lore/gathering"} in most cycles, because the assembly meets in the season the herds move, and the Collective has no factor on the plateau at all. A bondsman of the plateau has no door out that does not mean leaving it.

A runaway who reaches the sea or the pass-kingdoms is not returned. Balakin knows exactly how far the sea is, and he has never gone. His mother and his sisters live at the winter wells, in the shadow of the **Rojni**'s standing camp, and a runaway's family answers for him.

## The Dead Droveway

[[being-gmtkryn|Gamuti Karyona]], the Kupapala who speaks for the lineage, has sent him east. The Karyona mean to reopen [[place-shunyakupa|the Empty Well]], the great well they filled with stones three centuries ago, and they cannot do it while something on the dead droveway takes stock at night and leaves no tracks a drover recognizes. Gamuti needs to know what it is. She has promised, before two elders of the lineage, to strike Balakin's tally if he finds out.

He has been watching the empty well-villages for twenty nights with a borrowed herd as bait. He has lost three beasts. He has found where they went into the dark, and nothing past it. He has not told Gamuti what he heard on the eighteenth night, because he is not certain he heard it and because he wants the tally struck more than he wants to be believed.

## Psyche

### Personality

Balakin is cheerful, talkative with animals and quiet with people. He jokes with the other drovers and sings at the troughs, and goes silent when a lineage's son comes near. He is quick, practical and brave in the way of a man who has nothing to lose but a debt, and he takes risks with his own life that he would never take with a herd.

He is also patient. He has waited fourteen years.

### Motivation

He wants to walk into the winter wells with his tally struck, a free man, past the standing camp where his family lives and in sight of the households that bonded him.

### Strengths

Drovecraft
: He can walk a herd across the plateau, find water and grass, read weather and keep cattle alive through a dry month.

Fieldcraft
: He tracks, hides and moves at night across open country, and he is deadly with a sling.

Endurance
: He walks for a living, and he can walk farther than most riders ride.

### Weaknesses

The Token
: Without it he is a runaway, and with it he answers for everything to a household that is not his.

No Standing
: He cannot hold property, bring a suit, or speak at a sabhra, and his word against a Danhija's counts for nothing in a court.

Hope
: He wants the tally struck so badly that he will hide what he should report and believe what he should doubt.

## Social

### Patrons and Allies

[[being-gmtkryn|Gamuti Karyona]]
: The Kupapala who has promised to strike his tally, and who keeps her promises to the letter and not further.

The drovers of the north-eastern circuit
: Men and women of his own station who walk other lineages' cattle, and who share water, news and songs at the troughs.

### Rivals

The Karyona household that holds his bond
: Whose head would rather keep a good drover than free one, and who was not one of the two elders present when the promise was made.

The thing on the dead droveway
: Whatever takes the stock, and whatever he heard on the eighteenth night.

### Affiliations

[[affiliation-gomarga|Gomarga]]
: A Bonded Servant, Karmija by birth, walking a Karyona household's herds under its token.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: He keeps the household's rites, not his own, and touches the household's shrine before every drove.

## Plot Hooks

Bait
: Balakin needs help to watch the dead villages on the nights the herd is staked out, and he has nothing to pay with but a share of the water-rights the Karyona have offered. He says nothing about the eighteenth night until the party has been out with him at least once.

The Unpresent Elder
: The head of the household that holds Balakin's bond claims Gamuti had no right to promise to strike his tally. He sends riders to bring Balakin back to the herd before the villages are cleared. The party is with Balakin when they arrive.

The Road to the Sea
: If the promise is broken, Balakin will run, and he will need someone who knows the road down off the plateau and the price of passage on a coasting hull. His mother asks the party to talk him out of it.
