---
tags:
  - blackpine-wolves
  - brigand
  - vrystwald
  - underworld
  - character
name:
  full: Thráwald Hildskorn
  title: ""
  given: Thráwald
  clan: Hildskorn
  aliases: []
packFolder: ankarisvrystwald
shortcode: thrwldhldskrn
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
  born: 678/6/14
  height: 1.91
  weight: 102.1
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: graying_brown
    skin_color: tanned
    complexion: weathered
    extra_features:
      - missing two fingers on left hand
      - thick neck
      - nose broken multiple times
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 5 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-thorr }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 72 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 38 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 25 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-weapongear-baxe }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-ltvest }
    - { model: sohl-sohl-armorgear-ltcboot }
    - { model: sohl-sohl-armorgear-psht }
    - { model: sohl-sohl-armorgear-rhcap }
    - { model: sohl-sohl-containergear-bpchmd }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 7 } }
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

![[thrwldhldskrn|Thráwald Hildskorn]]{float: top-left}

Thráwald Hildskorn is the largest man in Dágulf's gang and looks every year of the hard life he has led. He is tall and thick-bodied, with slablike shoulders and a barrel chest gone slightly soft around the middle. His graying brown hair is cropped close to the skull, and his broad, weathered face has been rearranged by violence—his nose has been broken so many times it sits crooked and flat, and two fingers are missing from his left hand, lost to a [[affiliation-vylarinmpr|Vylarian]] soldier's sword years ago. His brown eyes are dull and watchful, set deep beneath a heavy brow. He moves with a lumbering deliberateness that belies surprising quickness when the axe comes out. He wears a padded shirt under a scarred leather vest, rawhide cap, and heavy boots, and carries a battered battleaxe that he handles with grim familiarity.

# Dossier {#dossier}

Thráwald was born into the Hildskorn clan, a minor Varokh family of shepherds and woodcutters in the deep pine country of [[place-vrystwald|Vrystwald]]. He was always big—big enough that the Vylarian garrison conscripted him at sixteen to serve as labor on a border fortification. He spent three years hauling stone and timber, learned to hate the empire with a pure and uncomplicated fury, and deserted the first winter the garrison was short-handed enough to let discipline slip.

He drifted for years after that, hiring on as muscle for petty traders and cattle thieves. He killed his first man in a drunken brawl over a gambling debt and discovered he felt nothing about it. That emptiness defined his career. He joined Dágulf's band five years ago, when his previous gang was broken up by a Vylarian patrol—he was the only one who escaped, and only because he was relieving himself in the woods when the soldiers struck. He is now the longest-serving member of the Blackpine Wolves after Dágulf himself, and the closest thing the gang has to a second-in-command, though Dágulf trusts no one with real authority.

# Skills and Abilities

Thráwald is a brutal close-quarters fighter whose main asset is raw strength and endurance. He swings a battleaxe with terrible force, and his high shock resistance means he can absorb punishment that would drop smaller men. He is a passable woodsman—he can track, forage, and build a fire—but he has no subtlety whatsoever. He cannot read, has no head for planning, and his attempts at stealth are hampered by his size.

## Psyche

### Personality

Thráwald is quiet, incurious, and accepts the world as it is without complaint. He does not think about the future, harbors no ambitions beyond his next meal and his next drink, and follows Dágulf's orders because doing so requires less effort than making his own decisions. He is not cruel for cruelty's sake—he simply does not care. Violence is work, and he does the work. He occasionally shows a rough kindness to animals, particularly horses and dogs, which is the closest thing to tenderness anyone has observed in him.

### Motivation

Thráwald wants to be left alone. He has no grand desires, no grudges to settle, and no loyalties beyond the immediate practical value of the gang. If a better opportunity appeared—steadier food, warmer shelter, less risk—he would take it without a backward glance. He stays with Dágulf because the alternative is worse.

### Strengths

His strength and toughness are genuine assets in a fight. He is also remarkably calm under pressure—not brave, exactly, but too dull to panic. He can endure cold, hunger, and discomfort without complaint.

## Social

## Companions

[[being-dagulfvthr|Dágulf Véthar]]'s gang, the Blackpine Wolves. He is nominally second-in-command by seniority and size, though Dágulf does not formally delegate authority.

### Patrons

None.

### Enemies

The Vylarian garrison he deserted from may still have his name on a list somewhere, though after twenty-five years it is unlikely anyone cares. A cattle merchant in a border town would very much like to see him hanged for a theft some years back.

## Plot Hooks

1. **The Slow Defection**—Thráwald is growing tired of Dágulf's increasingly erratic leadership. If approached carefully—perhaps with the promise of a warm bed and steady work—he might be persuaded to betray the gang's camp location. But his loyalty, such as it is, comes cheap, and whoever buys it should not expect it to last.

2. **The Deserter's Reckoning**—A retired Vylarian officer, now a local magistrate, recognizes Thráwald in a border tavern and sends word to the garrison. The party is hired to bring the deserter in alive for trial. Thráwald will not go willingly, and cornering him means cornering the entire gang.

3. **The Horse Thief**—Thráwald has stolen a horse from a traveling merchant—not to sell, but because the animal was being mistreated and something in him snapped. Dágulf is furious because the theft draws attention to their territory. The party encounters Thráwald alone in the forest with the stolen horse, and must decide what to do with a bandit who committed a crime for something resembling a decent reason.
