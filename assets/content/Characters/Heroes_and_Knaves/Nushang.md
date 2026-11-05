---
shortcode: nshng
name: {full: Nushang}
type: being
subType: npc
tags: [heroes-and-knaves, common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [woodsman]
  occupation: Guide-mother
  lore: []
  culture: osketclt
  homes: [tsokhar]
  affiliations: {osketguides: {rank: 6}}
  gender: female
  species: humanflk
  born: "664.12"
  height: 5' 3"
  weight: 128 lbs
  frame: medium
  appearance:
    eye_color: black
    hair_color: grey
    skin_color: tanned
    complexion: [weathered, wrinkled]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-weapongear-stf}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-armorgear-wdress}
    - {model: sohl-sohl-armorgear-bvcloak}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-armorgear-bvcap}
    - {model: sohl-sohl-armorgear-ltglove}
    - {model: miscgear-guidecord}
    - {model: sohl-sohl-miscgear-hvyblkt}
    - {model: sohl-sohl-miscgear-frtns, system: {quantity: 3}}
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

Nushang is a small woman of fifty-six with a broad, deeply lined face and black eyes that go to a stranger's boots, then his hands, then the sky behind him. Her hair is gray and worn in two plaits under a beaver cap. She wears a wool dress and a beaver cloak, gloves of old leather and boots resoled more often than anyone else at her hearth, because she walks more. Her hearth's guide-cord is looped three times round her left wrist, and she touches it when she is thinking.

She speaks no lowland tongue, and she does not need to. Her word on the weather is the end of the question.

# Dossier {#dossier}

## The Hearth of Shomber

[[place-tsokhar|Tsokhar]] is the poorest village on the western wall and the richest in the one thing nobody says aloud. Two caravans a year come over the storm-door in a good season, and the village lives off its yaks and its horses. Its lineages also hold the sixth road, [[place-gudesroad|the Guides' Road]], which no shrine blesses, no customs-house weighs and no crown admits is there.

Nushang is **Guide-mother** of the hearth of Shomber. She holds its knowledge of both roads and says whether each is open. A stranger who must be told whom he is dealing with is told the road first and the woman second, and she gives the storm-door, because that is the road a lowlander is allowed to know her by.

## The Short Store

The Shomber hearth lost most of its herd to a murrain two winters ago. The common store at [[place-oskhelt|Oskhelt]] is the [[place-suryadvar|Sun-Door]] lineages' habit, not Tsokhar's, and a Tsokhar hearth that cannot feed itself through the closed months feeds itself on the generosity of the hearth next door, which has its own children. The hearth of Shomber has been taken in once already, in a winter the village still tells of. Nushang did not mean it to be taken in again.

In the last open weeks a lowlander came up to Tsokhar, as one does in most years, from a long way off and without saying from where. He did not ask to be taken over the sixth road hooded, as such people do. He asked to be shown it. He offered gold enough to restock the hearth twice.

[[affiliation-osketguides|The Osket]] put out of every lineage anyone who sells a road, and nobody takes the Roadless over the wall again. The two occasions on which a lineage sold the sixth road are remembered by the Osket in detail. Nushang knew all of it when she said yes. She took him over unhooded, let him count his stages and see the shelves, and brought him back. The herd at Shomber is restocked. Nobody at Tsokhar has asked where the beasts came from, and she has not said.

## Before the Window

The sixth road opens when the western doors are shut and shuts when nothing else is, and only the Osket can say which. At the thaw it opens first. If the man she sold it to walks it, or takes anyone else over it, or sells what he knows to whoever paid him to learn it, it will be known below the shrines before the window on the western doors opens, and then her hearth will be Roadless and the sixth road will be the Osket's no longer.

She wants him dead before the window opens. She cannot go below the last [[place-pssshrines|the Pass-Shrines]] herself in the closed months, and she cannot ask anyone of the blood without telling them why. She has the name he gave, which is not his, his face, and the town he went down to.

## Psyche

### Personality

Nushang is short-spoken, precise and entirely without small talk. She keeps the three ways of knowing apart in everything she says: what she saw, what she was told and what she infers. Her hearth's children think she is the hardest woman in the village and are right.

She feeds every stranger who reaches her door, as the rule requires, and she watches every one of them eat.

### Motivation

She wants the man she sold the sixth road to dead before the window opens.

### Strengths

Two Roads
: She knows the storm-door and the sixth road as well as anyone alive, and reads the summit and the stillness before snow without fault.

The Last Word
: Inside her hearth her word on a road ends the question.

### Weaknesses

The Sale
: If it is known, she is Roadless and her hearth with her.

No Lowland Hands
: She has no one below the shrines and no tongue to hire anyone in.

A Doubt
: She has begun to wonder whether he was sent by someone who means to send more.

## Social

### Patrons and Allies

Her hearth
: Who are fed this winter because of what she did, and do not know it.

### Rivals

The man she sold it to
: A lowlander who gave a name that is not his.

The Speaker of the Cols
: Who will convene the lineages the day the sale is known.

The watch at Tsokhar
: Which keeps the approaches through the open months and sees more than it says.

### Affiliations

[[affiliation-osketguides|The Osket]]
: Guide-mother of the hearth of Shomber, at Tsokhar.

## Plot Hooks

The Name He Gave
: The party winters at Tsokhar, fed from Shomber's store, and Nushang asks them through a drover who speaks both tongues to find a man in [[place-suryagarha|Suryagarha]]'s caravanserai by his face and a false name before the thaw. She will not say why, and she will pay in gold of a weight the party has not seen come out of an Osket hand.

The Light on the Approach
: Tsokhar's watch has seen a light on the high approach in the closed months, where no lowlander should be able to come. Nushang asks the party to go out with her and find who carried it before the watch does.

The Second Buyer
: In the lowlands someone offers the party a great deal of money for the way over the sixth road. He already knows the first three stages, and he knows them exactly.
