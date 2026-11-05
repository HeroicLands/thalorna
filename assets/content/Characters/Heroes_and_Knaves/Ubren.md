---
shortcode: ubrn
name: {full: Ubren}
type: being
subType: npc
tags: [heroes-and-knaves, common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [woodsman, warrior]
  occupation: Carrier (Pass-Guide of Suryadvar)
  lore: []
  culture: osketclt
  homes: [oskhelt]
  affiliations: {osketguides: {rank: 4}}
  gender: male
  species: humanflk
  born: "686.150"
  height: 5' 9"
  weight: 165 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: tanned
    complexion: [weathered, scarred]
    extra_features: [Two fingers of the right hand lost to frostbite]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 20}}
    - {model: skill-vedyarlng, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-weapongear-stf}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-weapongear-slng}
    - {model: sohl-sohl-projectilegear-sston, system: {quantity: 10}}
    - {model: sohl-sohl-armorgear-ltvest}
    - {model: sohl-sohl-armorgear-wshirt}
    - {model: sohl-sohl-armorgear-wtrsr}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-armorgear-bvcloak}
    - {model: sohl-sohl-armorgear-ltglove}
    - {model: miscgear-guidecord}
    - {model: sohl-sohl-miscgear-rope12hemp}
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

Ubren is a big, deep-chested man of thirty-four, 5'9", with the slow walk of somebody who carries for a living. His face is broad and weathered, and the frostbite that took two fingers of his right hand left a white seam across the back of it. His hair is black and cut short, his eyes are brown, and he looks at the summit before he looks at the person speaking to him.

He wears leather over wool, a beaver cloak and gloves with two fingers sewn shut. A guide-cord hangs from his belt, and he carries a sling, which no lowlander expects of an Osket and which he uses on hares.

# Dossier {#dossier}

## The Hearth of Randug

[[affiliation-osketguides|The Osket]] lineages of [[place-suryadvar|the Sun-Door]] are the richest on the wall. The hearth of Randug is one of them. It holds a share of the greatest pass by descent, takes caravans over it every open season and provisions the common store at [[place-oskhelt|Oskhelt]] out of its fees. Ubren's mother is its **Guide-mother**. His cousin, six years younger, is its road-holder.

Ubren is a **Carrier**. He has walked Suryadvar under another's word every season for fifteen years, carried loads, broken caravans down onto yaks at the caravanserai, and taken lowlanders up to the col and down the far side more often than he can count. He is the pass-guide caravan masters ask for by name. He has never been given the road.

## The Morning

Fifteen years ago, at nineteen, Ubren carried for the caravan [[being-asvrshmbtn|Asvari Shambatan]] sent up against his mother's morning. The Guide-mother of Randug had said the col would close in two days. The caravan belonged to [[affiliation-mrchntclctvvdyr|the Merchant Collective]] and its token was about to run out. The new clan-warden, in her first season, overruled the lineage, and the lineage would not take the caravan.

Ubren took it. The warden paid him himself, at her own yard, and he went up as the one Osket on the rope. The weather came a day early. He came down with three of the warden's men. Eleven people did not. The [[place-pssshrines|Pass-Shrines]] at the summit entered them in its register before anyone below knew they were gone.

His hearth did not put him out. A party lost through carelessness makes a guide Roadless, and the floor at the col held that the party was lost to the warden's order and not to his feet. But the hearth's cord keeps the Eleven at the shelf where the road had them, with a knot beside them that says who walked them there against the morning. When his uncle died the hearth gave the road to his cousin. Nobody has told Ubren why, and nobody needs to.

## The Thaw

This spring the thaw on the col has brought something down out of the ice: a pack-frame with a Collective seal, off the caravan of the Eleven. Ubren carried a load on that rope, and he knows what was on the frames beside his. He also knows what the manifest at the customs-house said, because he has made it his business to find out. They are not the same.

What was on the frames is the reason the caravan could not wait two days. If it is shown, the fault for the Eleven sits where the Osket have always said it sat, below the shrines, and Ubren means to ask his hearth again for the road.

## Psyche

### Personality

Ubren is steady, slow to speak and slower to anger. He prefers carrying to talking and is better at it. With lowlanders he is easy and good-humored, and he speaks their pidgin badly and without embarrassment. With his own people he is careful, because he knows the knot on the cord.

He has never taken coin from Asvari Shambatan since the morning, and has refused it twice. He does not hate her.

### Motivation

He wants the road-holder's right on Suryadvar, which his hearth has withheld from him since the morning he went up against his mother's word.

### Strengths

The Greatest Pass
: He knows Suryadvar from the caravanserai to the far descent, every stage, shelf and shelter, in all its weathers.

A Carrier's Back
: He is strong, enduring and almost impossible to tire on a slope.

Known Below
: Caravan masters, yard-masters and clerks at [[place-suryagarha|Suryagarha]] know him by name and trust him.

### Weaknesses

The Knot
: Every Osket of the Suryadvar lineages knows what the knot beside the Eleven means.

Lowland Coin
: He was paid once by a lowlander to go against his own blood, and he has not stopped paying for it.

## Social

### Patrons and Allies

The yard-masters of the caravanserai
: Who give him the caravans that want a guide with lowland speech.

The Pass-Shrine register-writer at Suryadvar
: Who entered the Eleven and has always been civil to him.

### Rivals

His cousin, the road-holder of Randug
: Who holds the road Ubren was owed and is good at it.

The Collective's factor at Suryagarha
: Who has also heard about the frame.

### Affiliations

[[affiliation-osketguides|The Osket]]
: Carrier of the hearth of Randug, on Suryadvar.

## Plot Hooks

The Frame
: Ubren wants the pack-frame off the col before the Collective's factor reaches the thaw-line, and he wants lowland witnesses there when it is opened, because no Osket's word about lowland goods will be heard below the shrines.

The Book Turned Round
: The register-writer at the summit shrine turns the book round for anyone who asks and can read it, and will not copy a page. Ubren cannot read. He needs someone who can to read him the entry for the Eleven, and to remember it exactly, before the lineages meet at the col.

The Closed-Season Road
: [[being-vkrbrvrjyr|The Maharava]] needs a far chieftain brought down to Suryagarha before the snow lifts, by a route the Osket keep. Ubren is the only Carrier of the Suryadvar lineages willing to take the work, and doing it will either earn him the road or make him Roadless.
