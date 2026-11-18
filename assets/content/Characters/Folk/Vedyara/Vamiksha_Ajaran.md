---
shortcode: vamikshaajar
name: {full: Vamiksha Ajaran, en: [Captain Vamiksha]}
type: being
subType: npc
tags: [common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [scholar, woodsman]
  occupation: Explorer
  lore: []
  culture: vedyariclt
  homes: [nurvhrn]
  affiliations: {hvarnguides: {rank: 1}, vrnkpnthn: {rank: 1}}
  gender: female
  species: humanflk
  born: "678.95"
  height: 5' 4"
  weight: 146 lbs
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: golden
    complexion: [weathered]
    hair_style: braided
    extra_features: [Two fingers of the left hand lost to frost, A wrapped left wrist]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 40}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 55}}
    - {model: skill-hvarnlng, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-weapongear-spr}
    - {model: sohl-sohl-armorgear-bvcloak}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-miscgear-map}
    - {model: sohl-sohl-miscgear-hvyblkt}
    - {model: sohl-sohl-miscgear-rope12hemp}
    - {model: sohl-sohl-containergear-backpk}
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

Vamiksha is a short, heavy, weathered woman of forty-two, 5'4", golden-skinned under a face lined by wind, with black hair in a single plait and brown eyes that look past whoever she is talking to, at the horizon behind them. She has lost two fingers of her left hand to frost and keeps that wrist wrapped. She dresses in a Hvarn beaver cloak and lowland boots, and carries a spear she uses as a staff and a case of maps she does not let out of her sight.

# Dossier {#dossier}

## The Captain Without a Ship

Vamiksha styles herself Captain because she has led parties. She was born to a merchant family of [[place-suvargeri|Suvargeri]], trained as a surveyor, and left the janpoda at twenty with a borrowed sighting-staff and a debt she has never paid. She has walked further than any other Vedyari living and drawn maps of most of it.

Her reputation is wide and somewhat disreputable. Some of her maps are excellent and some were sold to merchants who could not check them. Of the nine who went with her into [[place-forestnoroad|the Forest of No Road]] six years ago, two came out with her. She will say what she saw there only in the words she used on the first day, and the two who came out with her say less.

## The Winter House

The [[affiliation-hvarnguides|Hvarn]] found her on the margin of the Forest that autumn, starving and frostbitten, and took her to [[place-nurvhrn|Nurvharn]]. A hearth there took her in, and she has wintered in the long house every year since as a **Taken-in**: sheltered, fed and of no hearth's blood. She speaks the Hvarn tongue badly and fluently. She pays her keep in maps of the lowlands, which the hearth sells to nobody.

## The Southern Kingdom

Vamiksha has a new expedition and a backer for it. She means to go south, past the farthest country any Vedyari map shows, into the jungle beyond the southern border, where she says a kingdom stands that has never been visited. She wants [[being-pdmvldnrkrt|Padmavali Danurkirti]] of Suvargeri as cartographer and historian, at a fee that would keep Padmavali for years, and she wants two Hvarn guides. The Hvarn work their crossings by turn, and the council has never assigned a guide to a road that is not theirs.

## Psyche

### Personality

Vamiksha is restless, charming, brave and not entirely honest. She tells a story better than the truth and sometimes cannot tell the difference. She is fiercely loyal to the people who kept her alive, and less so to everyone else.

### Motivation

She wants to reach the kingdom she says lies in the jungle beyond the southern border and come back with a map that carries her name.

### Strengths

Endurance
: She has survived country that killed seven of the nine who went into it with her.

A Surveyor's Training
: Her good maps are the best in Vedyara, and she can draw one from memory.

### Weaknesses

Reputation
: Her bad maps are remembered better than her good ones, and so are the seven.

Debts
: She owes her backers, her old family in Suvargeri and the hearth that took her in.

## Social

### Patrons and Allies

The hearth that took her in
: Who have fed her every winter for six years and expect nothing for it.

Her backer
: A merchant house of [[place-chendrapur2|the Moon City]] that has not given its name, and wants the first look at whatever she brings back.

### Rivals

[[being-dlzhvrstn|Delzh Vrestun]]
: The Turn-keeper of the winter council, who will not let a lowland purse draw a guide out of the turn.

The families of the seven
: Who want to know what happened in the Forest of No Road.

### Affiliations

[[affiliation-hvarnguides|The Hvarn]]
: Taken-in, sheltered by a hearth at Nurvharn through the closed months.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: Upasoka, who lights a lamp for the seven at every feast she is present for.

## Plot Hooks

The Cartographer
: Vamiksha asks the party to go to Suvargeri and persuade Padmavali to join the expedition, or to come as her escort if Padmavali will not come without one.

Outside the Turn
: Two young Hvarn guides have agreed to go south with Vamiksha without the council's leave. The Turn-keeper wants them stopped, and their hearth wants them protected. Both ask the party.

The Third Survivor
: A man has come to Nurvharn saying he was one of the nine and did not die. Vamiksha does not recognize him. The two who came out with her say nothing.
