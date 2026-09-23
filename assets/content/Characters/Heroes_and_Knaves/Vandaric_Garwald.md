---
tags:
  - blackpine-wolves
  - brigand
  - vrystwald
  - underworld
  - character
name:
  full: Vandaric Garwald
  title: ""
  given: Vandaric
  clan: Garwald
  aliases:
    - the Liar
packFolder: ankarisvrystwald
shortcode: vndrcgrwld
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Brigand
  stations: []
  lore:
    - varokhiclt
    - slavernk
  homes:
    - vrystwald
  affiliations:
    - blckpnwlvs
    - vrystwldtrbs
  gender: male
  species: null
  age: 35
  birthday: 684/4/19
  height: 1.78
  weight: 74.8
  frame: medium
  appearance:
    eye_color: gray
    hair_color: dark_brown
    skin_color: light
    complexion: sallow
    extra_features:
      - a disarming smile that does not reach his eyes
      - tattoo of a serpent on his forearm
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 14 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 72 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 58 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-mrcn, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 18 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 25 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-weapongear-shrtswd }
    - { model: sohl-sohl-armorgear-ctunic }
    - { model: sohl-sohl-armorgear-cleg }
    - { model: sohl-sohl-armorgear-ltvest }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-containergear-bpchmd }
    - { model: sohl-sohl-miscgear-pence, system: quantity:31 }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-containergear-wtrskin }
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Arms
            shortcode: armszone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Legs
            shortcode: legszone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
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
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: null
        calc: "(9 * str) + 50"
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

![[vndrcgrwld|Vandaric Garwald]]{float: top-left}

Vandaric Garwald does not look like a bandit, which is precisely the point. He is of middling height and medium build, with dark brown hair kept suspiciously clean for a forest outlaw, and gray eyes that sparkle with warmth and humor – neither of which is real. His face is lean and sallow, but handsome enough to be trusted at a glance, and he has a disarming smile that he deploys the way other men deploy weapons: quickly, precisely, and to lethal effect. A tattooed serpent coils around his left forearm, half-hidden by his sleeve. He dresses better than the rest of the gang – a cloth tunic and leggings under a leather vest, maintained with a care the others find baffling. He carries a shortsword and dagger but fights only as a last resort, preferring to talk his way out of – or into – any situation.

# Dossier {#dossier}

Vandaric was born to a Varokh family that operated a roadside inn on the imperial trade road – a legitimate business, or so it appeared. In truth, his father worked as a fence for stolen goods, his mother ran a confidence game on wealthy travelers, and young Vandaric grew up learning that every interaction was a transaction and every smile was a tool. He was charming, clever, and utterly without scruple by the time he was twelve.

He left home at eighteen – not fleeing, but seeking bigger marks. He spent a decade drifting through the border towns between [[place-vrystwald|Vrystwald]] and [[place-vylariargn|Vylaria]], running scams, selling fraudulent goods, impersonating minor officials, and always staying one step ahead of the consequences. He was good enough that he might have made a comfortable living indefinitely, but he had a weakness for gambling and a worse one for drink, and both caught up with him in a border town called Graumarkt. He cheated the wrong man at dice – a Vylarian merchant with connections to the local garrison – and fled into the pines with soldiers on his heels and a price on his head.

He found the Blackpine Wolves a year ago and attached himself to Dágulf through sheer usefulness. He is the gang's voice – the one who scouts potential targets in taverns, learns caravan schedules, identifies which merchants carry the most coin, and occasionally talks guards into looking the other way. Dágulf dislikes him personally but recognizes that Vandaric brings in more intelligence in a week of tavern talk than the rest of the gang manages in a month of skulking.

# Skills and Abilities

Vandaric is the gang's talker, schemer, and intelligence gatherer. His eloquence, creativity, and guile make him a superb liar and confidence man. He can read people quickly, adjust his approach on the fly, and maintain a false identity for weeks at a time. He has passable mercantile knowledge and can assess the value of stolen goods accurately. His combat skills are adequate but unexceptional – he can defend himself with sword and dagger, but he is no warrior and he knows it.

## Psyche

### Personality

Vandaric is glib, charming, and fundamentally hollow. He relates to other people as marks, tools, or obstacles, and he can mimic warmth, sympathy, and friendship with disturbing precision without feeling any of them. He is not needlessly cruel – cruelty is bad for business – but he will betray anyone without hesitation if the calculation favors it. He genuinely enjoys the craft of deception, taking pride in a well-executed con the way an artisan takes pride in fine work. He drinks too much and gambles compulsively, which are the cracks in an otherwise polished surface.

### Motivation

Vandaric wants comfort, excitement, and the satisfaction of outwitting others. He has no loyalty to the gang, to Vrystwald, or to any cause larger than himself. He stays with the Blackpine Wolves because it currently suits him, but he is always calculating his next move. He dreams of pulling off one magnificent score – enough to buy a new identity and a comfortable life in a Provenzian city far from the pines.

### Strengths

His social skills are exceptional. He can talk his way into guarded camps, extract information from wary merchants, and charm serving girls into sharing caravan gossip. His creativity and reasoning make him the gang's best planner, and Dágulf reluctantly relies on his intelligence for ambush timing and target selection.

## Social

## Companions

The Blackpine Wolves, by convenience. He maintains a surface friendliness with everyone and genuine closeness with no one. Skathilda sees through him completely, which makes him nervous.

### Patrons

None currently. He maintains a few contacts in border towns who fence stolen goods, but these are transactional relationships.

### Enemies

The Vylarian merchant he cheated in Graumarkt has not forgotten. There may be outstanding warrants in two or three border towns under various names. His own parents, if still alive, would not be surprised by his career.

## Plot Hooks

1. **The Friendly Stranger** – The party meets Vandaric in a tavern where he is posing as a traveling merchant. He is charming, helpful, and full of useful information about the road ahead – all of it carefully curated to steer the party into an ambush. If the party sees through him, he becomes a valuable source of information about the Blackpine Wolves, provided the price is right.

2. **The Double Cross** – Vandaric approaches a Vylarian merchant guild offering to betray the Blackpine Wolves for gold and safe passage. At the same time, he is feeding Dágulf information about the guild's caravan routes. He is playing both sides, and the party – hired by the guild – walks into a situation far more tangled than a simple bandit hunt.

3. **The Gambler's Debt** – Vandaric has racked up a dangerous gambling debt with a criminal syndicate in a border town, and they have sent enforcers to collect. He is desperate enough to make an offer to the party: help him deal with the enforcers, and he will lead them to the Blackpine Wolves' hidden cache of stolen goods. The offer is genuine – but Vandaric always has a second plan.
