---
tags:
  - tamzir-crew
  - tradesfolk
  - character
name:
  full: Féthar Dhárel
  title: ""
  given: Féthar
  clan: Dhárel
  aliases:
    - Féth
packFolder: aureldiaprovenzia
shortcode: fethardhrl
type: being
data:
  banner: tamzirbnr
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Pilot
  stations: []
  lore:
    - commonerrnk
  homes:
    - provenzrgn
  affiliations:
    - thetamzir
    - kngdmprvnz
  gender: male
  species: humanflk
  born: 685/5/20
  height: 1.83
  weight: 77.1
  frame: medium
  appearance:
    eye_color: blue
    hair_color: red
    skin_color: fair
    complexion: freckled
    extra_features:
      - an infectious grin
      - often wears outrageously patterned clothing
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 58 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 41 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 43 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 61 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 46 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 41 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 57 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 59 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 72 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 29 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 21 } }
    - { model: sohl-sohl-skill-pilt, system: { masteryLevelBase: 119 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 66 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 37 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 31 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-ctunic }
    - { model: sohl-sohl-armorgear-cleg }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-containergear-bpchmd }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 88 } }
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

![[fethardhrl|Féthar Dhárel]]{float: top-left}

Féthar Dhárel is a man who looks like he wandered off a Provenzian promenade and somehow ended up at the helm of a disreputable trading vessel. He is six feet tall with a mop of unruly red hair, a constellation of freckles, and blue eyes that perpetually carry the gleam of a man enjoying a private joke. His most notable feature is his wardrobe—he favors elaborately patterned tunics and embroidered tabards that clash spectacularly with the grimy reality of shipboard life. He is gangly and loose-limbed, without the hardened look of a fighter, but his hands on the helm are sure and steady as stone.

# Dossier {#dossier}

## Background

### Origin

Féthar grew up in a landlocked river town in northern [[place-provenzrgn|Provènzia]], the son of a dyer. From childhood he had an inexplicable fascination with water and boats, spending every spare hour messing about on the river in whatever craft he could borrow or build. He was an excellent fisherman, supplementing his family's income, but there was always something restless in him—a pull toward horizons he could not see from the riverbank.

### Finding the Sea

At seventeen, Féthar left home with his family's reluctant blessing, traveling south to the Provenzian coast where he apprenticed himself to a pilot. He discovered that his river-born instincts translated magnificently to open water. He had an uncanny feel for wind, current, and tide—an intuitive understanding of how a vessel moved through water that his mentors found remarkable. Within five years he had earned a reputation as one of the finest pilots on the southern coast.

### Aboard the Tamzîr

Féthar joined the Tamzîr seven years ago, hired as a replacement pilot after the previous one was arrested for smuggling (independently of the Tamzîr's own smuggling). Shâ was skeptical of the cheerful Provenzian with the ridiculous clothing, but Féthar's first demonstration of his skills—threading the Tamzîr through a reef passage at night during a storm to escape an imperial patrol—ended all debate. He is, by any measure, a crackerjack pilot. If anyone can navigate the Tamzîr through impossible waters, it is Féthar.

### Marriage

Féthar married [[being-slvrvlskyr|Sélvara Válskyr]] three years ago, and their relationship is the ship's worst-kept secret turned open joy. He is besotted with his wife in a way that is both genuine and slightly comedic, and he is amusingly insecure about measuring up to the legendary warrior woman he somehow convinced to marry him. The crew alternately finds this endearing and insufferable.

## Psyche

### Personality

Féthar is the Tamzîr's emotional counterweight—warm, funny, and relentlessly optimistic in a crew that trends toward cynicism and brooding. He uses humor to defuse tension and deflects his own anxieties with jokes. He is genuinely kind, with an easy way about him that puts strangers at ease. But beneath the clowning is a sharp mind and a steel nerve—in a crisis at the helm, Féthar becomes utterly focused, making split-second decisions with a calm that surprises those who know only his lighter side.

### Motivation

Féthar is motivated by love—for his wife, for the sea, for the strange family he has found aboard the Tamzîr. He does not have grand ambitions or political grievances. He wants to sail, to be with the people he cares about, and to see what lies beyond the next horizon.

### Strengths

He is arguably the finest pilot on the [[place-vylarianse|Vylarian Sea]], with an almost supernatural feel for ships and water. He is also the crew's emotional glue—his humor and warmth keep morale from collapsing during hard times. He is clever, observant in his own way, and possessed of a courage that is all the more impressive for being quiet rather than dramatic.

### Weaknesses

Féthar is not a fighter. He can handle a dagger in self-defense, but he is outmatched by any trained combatant. His insecurity about his value to the crew beyond piloting sometimes leads him to take unnecessary risks to prove himself. He can be naïve about people's darker motivations, and his optimism occasionally prevents him from seeing danger until it is too late.

## Social

### Patrons

None formally. Féthar's family in Provènzia are respectable tradespeople who worry about him constantly.

### Enemies

Féthar has no personal enemies, but the Tamzîr's enemies are his enemies by association.

### Affiliations

Pilot of the **Tamzîr**. Husband of **Sélvara Válskyr**. He maintains occasional correspondence with his family in Provènzia.

## Plot Hooks

1. **The Pilot's Price**: A wealthy Provenzian shipping magnate offers Féthar a legitimate position as lead pilot for his fleet—good pay, respectability, and safety. Féthar is torn between the security this would offer Sélvara and the life he has built aboard the Tamzîr. The offer may also not be as innocent as it appears.

2. **River and Sea**: Féthar receives word that his hometown is threatened by flooding after a dam collapse upriver. His family needs help, and his intimate knowledge of the river system could save lives—but reaching them means leaving the Tamzîr at a critical moment.

3. **The Uncharted Passage**: An ancient chart surfaces suggesting a hidden sea passage through a treacherous archipelago that could cut weeks off the journey between Harad and the northern ports. Only a pilot of extraordinary skill could navigate it. The potential profit is enormous, but the chart may be incomplete—or a trap.
