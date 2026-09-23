---
tags:
  - blackpine-wolves
  - brigand
  - vrystwald
  - underworld
  - character
name:
  full: Skathilda Fródbán
  title: ""
  given: Skathilda
  clan: Fródbán
  aliases:
    - the Weasel
    - Skathilda Frodban
packFolder: ankarisvrystwald
shortcode: skthldfrdbn
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
  gender: female
  species: null
  age: 27
  birthday: 692/1/9
  height: 1.6
  weight: 52.2
  frame: scant
  appearance:
    eye_color: green
    hair_color: dark_blonde
    skin_color: pale
    complexion: rough
    extra_features:
      - a thin scar from ear to jawline on the right side
      - sharp pointed features
      - moves with coiled restless energy
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 4 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 74 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 78 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 62 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-acro, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 38 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 18 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 8 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-weapongear-dgr, name: Dagger 1, system: { shortcode: Dgr1 } }
    - { model: sohl-sohl-weapongear-dgr, name: Dagger 2, system: { shortcode: Dgr2 } }
    - { model: sohl-sohl-weapongear-shrtswd }
    - { model: sohl-sohl-armorgear-ltvest }
    - { model: sohl-sohl-armorgear-ltbrcr }
    - { model: sohl-sohl-armorgear-ltcboot }
    - { model: sohl-sohl-armorgear-ltcap }
    - { model: sohl-sohl-containergear-bpchmd, system: { quantity: 2 } }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 22 } }
    - { model: sohl-sohl-miscgear-tndrbx }
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

![[skthldfrdbn|Skathilda Fródbán]]{float: top-left}

Skathilda Fródbán is small, pale, and utterly terrifying. She stands barely over five feet, with a scant wiry frame that looks like it would snap in a strong wind – an impression that has cost several men their lives. Her dark blonde hair is hacked short and uneven, as though cut with a knife by feel, and her sharp, pointed face is dominated by watchful green eyes that hold the flat, assessing calm of a predator deciding when to strike. A thin white scar runs from her right ear down to the jawline, the souvenir of a fight she won decisively. She dresses in dark leathers – vest, bracers, cap, and calf boots – and carries a shortsword and two daggers with the ease of long practice. She moves with a coiled, restless energy, always shifting, always circling, never still. The other bandits call her the Weasel, but only behind her back.

# Dossier {#dossier}

Skathilda was born the youngest of four children in a woodcutter's family deep in the [[place-vrystwald|Vrystwald]] pines. Her father drank, her mother died young, and her three older brothers treated her as a servant and a target. She endured it until she was thirteen, when her eldest brother came home drunk and tried to sell her to a passing Vylarian merchant for a cask of wine. She stabbed her brother in the thigh with his own belt knife, fled into the forest, and never went back.

She survived alone in the pines for nearly a year – stealing from traplines, raiding smokehouse stores, sleeping in hollowed logs. A roving band of poachers took her in when they found her half-starved in a snowdrift, and she repaid their charity by learning everything they could teach her about moving unseen, picking pockets, and cutting throats. When the poachers' leader tried to force himself on her two years later, she opened his belly with a skinning knife while he slept and vanished before dawn.

She joined Dágulf's gang three years ago, drawn by the practical arrangement: safety in numbers, a share of the takings, and no one stupid enough to lay a hand on her twice. Dágulf recognized her value immediately – she is the gang's best scout, its most reliable killer in close quarters, and the member most likely to slit his throat if he ever shows weakness. They maintain a wary mutual respect built on the understanding that each is dangerous to the other.

# Skills and Abilities

Skathilda is extraordinarily fast and agile, with a natural gift for stealth and close-quarters knife work. She fights with a vicious, economical style – no flourishes, no wasted motion, just speed and lethality aimed at vulnerable points. Her dexterity makes her adept at legerdemain and she is a skilled pickpocket and lockpick. She is a talented liar and manipulator when she bothers, and her guile is the sharpest in the gang. She lacks physical strength and cannot overpower a larger opponent in a grapple, so she never allows a fight to become one.

## Psyche

### Personality

Skathilda is cold, calculating, and deeply mistrustful of everyone. She speaks little, watches constantly, and has a memory for slights that stretches back years. She does not bluster or threaten – she simply acts, suddenly and without warning, which is why even Thráwald, who outweighs her by fifty kilograms, gives her space. She has a dark, cutting humor that she deploys rarely and to devastating effect. She despises weakness in others because she cannot afford it in herself, and she has no patience for self-pity, excuses, or sentimentality.

### Motivation

Survival. Skathilda learned early that the world is divided into predators and prey, and she will never be prey again. Beyond that, she craves autonomy – the freedom to come and go as she chooses, beholden to no one. She stays with the Blackpine Wolves because the arrangement serves her, and she will leave or take over the moment it doesn't. She harbors a cold, patient ambition that Dágulf senses but cannot quite pin down.

### Strengths

Her speed, stealth, and ruthlessness make her the most dangerous fighter in the gang despite her small size. She is difficult to surprise, thinks quickly under pressure, and never hesitates. Her high aura gives her an unsettling presence that makes people instinctively wary.

## Social

## Companions

The Blackpine Wolves. She maintains a functional working relationship with Dágulf based on mutual wariness. She tolerates Thráwald because he is predictable. She openly despises Brunjár for his cowardice and considers the younger members beneath her notice.

### Patrons

None. Skathilda answers to no one.

### Enemies

Her surviving brothers, if they still live, would not welcome a reunion. The families of the poacher leader and at least one other man she has killed might seek vengeance if they knew who was responsible. More immediately, her cold manner has made enemies within the gang itself.

## Plot Hooks

1. **The Weasel's Offer** – Skathilda approaches the party covertly, offering to sell out the Blackpine Wolves' camp location, patrol routes, and Dágulf's habits in exchange for guaranteed safe passage and a modest sum. She is planning to leave the gang anyway and sees an opportunity. Whether she can be trusted is another question entirely.

2. **A Knife in the Dark** – Someone is murdering travelers on the Vrystwald road with a single cut to the throat, but the killings don't match the Blackpine Wolves' usual pattern of ambush and robbery. Nothing is stolen. The party investigates and discovers Skathilda has been settling old scores on her own time – the victims are all connected to the men who wronged her in childhood.

3. **The Better Offer** – A Vylarian merchant guild wants to hire the party to eliminate the Blackpine Wolves, but Skathilda has independently approached the same guild offering to deliver the gang herself – for a price. The party arrives to find the situation more complicated than a simple bandit hunt, and must decide whether to work with, against, or around the most dangerous member of the gang.
