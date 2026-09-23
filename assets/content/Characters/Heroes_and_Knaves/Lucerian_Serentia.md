---
tags:
  - tamzir-crew
  - tradesfolk
  - character
name:
  full: Lucerian Serentia
  title: ""
  given: Lucerian
  clan: Serentia
  aliases: []
packFolder: midhalionvylaria
shortcode: lucernsrnt
type: being
data:
  banner: tamzirbnr
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Physician
  stations: []
  lore:
    - gentryrnk
  homes:
    - vylariargn
  affiliations:
    - thetamzir
    - vylarinmpr
  gender: male
  species: null
  age: 26
  birthday: 693/10/8
  height: 1.78
  weight: 72.6
  frame: medium
  appearance:
    eye_color: green
    hair_color: brown
    skin_color: fair
    complexion: pale
    extra_features:
      - immaculate grooming even in rough conditions
      - carries a fine leather medical bag
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 14 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 46 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 47 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 69 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 119 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 68 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 41 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 66 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 62 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 59 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 17 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 58 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-mysticalability-alch, system: { masteryLevelBase: 74 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 77 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-ctunic }
    - { model: sohl-sohl-armorgear-cleg }
    - { model: sohl-sohl-armorgear-wclk }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-containergear-bpchmd }
    - { model: sohl-sohl-miscgear-surgkit }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 233 } }
    - { model: sohl-sohl-miscgear-gldcrwn, system: { quantity: 3 } }
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

![[lucernsrnt|Lucerian Serentia]]{float: top-left}

Lucerian Serentia is a handsome young man whose appearance screams wealth and education in an environment that has neither. His brown hair is neatly trimmed, his green eyes are sharp and analytical behind an expression of perpetual, slightly anxious alertness, and his clothing—though travel-worn—is of noticeably finer quality than anything else aboard the Tamzîr. He maintains his grooming with fastidious care, a habit his crewmates find equal parts admirable and irritating. He carries a large leather medical bag of exquisite craftsmanship, containing surgical instruments of the finest quality and an extensive supply of drugs and herbs. He also carries an eating fork, which the crew considers the height of pretension.

# Dossier {#dossier}

## Background

### Origin

Lucerian was born in the Vylarian city of [[place-belekos|Belekos]], the son of a wealthy and successful guild merchant. His family occupied the comfortable upper tiers of Vylarian society—not nobility, but close enough to move in those circles. Lucerian was brilliant from childhood, excelling in every academic pursuit, and his parents had every expectation that he would enter the imperial civil service or perhaps the university. Instead, at sixteen, he chose medicine.

### Training

Lucerian apprenticed to a renowned surgeon-physician in Azerya, the intellectual capital of the southern coast, where medical training is considered the finest in the known world. He proved to be a prodigy—his hands were supernaturally steady, his mind was sharp as a scalpel, and his capacity for absorbing complex medical knowledge was extraordinary. By twenty-two he had completed his training and was poised for a brilliant career in the Vylarian medical establishment.

### The Rescue

Everything changed when Lucerian's younger sister, Cibella, was taken by the [[affiliation-ordoarcanis|Ordo Arcanis]].

Cibella had always been different—brilliant, mercurial, and possessed of an extraordinary arcane aura that drew attention from the moment it manifested. The Ordo identified her at thirteen and invited her to study at one of their academies. The family was honored. For two years, Cibella wrote glowing letters home. Then the letters stopped. When Lucerian finally gained access to the academy, what he found destroyed his world. The Ordo had been experimenting on his sister, pushing her abilities beyond safe limits, and the process had left her damaged—erratic, traumatized, and partially broken.

Lucerian sacrificed everything to get her out. He used his family's wealth, called in every favor he had, and ultimately resorted to outright theft and deception to extract Cibella from the Ordo's facility. In doing so, he made himself a fugitive. The Ordo does not forgive theft of their property, and they consider Cibella exactly that—their property.

### Aboard the Tamzîr

Lucerian and Cibella boarded the Tamzîr eighteen months ago in a desperate arrangement brokered through Shâ's network of contacts. Lucerian pays well for their passage and provides the crew with medical care they could never otherwise afford. In return, the Tamzîr's constant movement and the crew's discretion keep the siblings one step ahead of the Ordo's agents. It is a fragile arrangement, and Lucerian lives in constant fear that it will collapse.

## Psyche

### Personality

Lucerian is brilliant, anxious, and deeply out of his depth in the world he now inhabits. He was raised for drawing rooms and lecture halls, not smuggling ships and dockside brawls. He can be prickly, condescending, and socially clumsy—not out of malice but out of a fundamental inability to calibrate his behavior to his surroundings. He is fiercely protective of his sister to the point of obsession, and this protectiveness sometimes makes him rigid, controlling, and blind to Cibella's own agency.

### Motivation

Cibella. Everything Lucerian does is for his sister. He gave up his career, his family, his wealth, and his future to save her, and he would do it again without hesitation. Beyond her safety, he harbors a growing anger toward the Ordo Arcanis—not the hot anger of a revolutionary, but the cold fury of a man who has seen what institutional power does when it operates without accountability.

### Strengths

Lucerian is one of the finest physicians alive. His surgical skill is extraordinary, his pharmacological knowledge is encyclopedic, and his diagnostic ability borders on the intuitive. He is also genuinely brilliant—able to learn quickly, think clearly under pressure, and solve complex problems.

### Weaknesses

He is arrogant about his intelligence and dismissive of people he considers less educated. He has poor social skills in casual settings and can be maddeningly rigid about protocol and propriety. His obsessive focus on protecting Cibella sometimes blinds him to her needs as a person rather than a patient. He is also physically unimposing and nearly useless in a fight.

## Social

### Patrons

Lucerian's family wealth has been largely spent on the escape and subsequent flight. He still has enough gold to pay for passage, but his resources are dwindling. He has no patrons—the Ordo has ensured that anyone who might help him knows the cost.

### Enemies

The **Ordo Arcanis** wants Cibella back, and they want Lucerian punished for taking her. They operate through Vylarian imperial channels—court agents, bounty hunters, political leverage—making every Vylarian port a potential trap. The deeper danger is that the Ordo's interest in Cibella is not merely proprietary; the experiments they conducted suggest they believe she possesses abilities of extraordinary strategic value.

### Affiliations

Passenger aboard the **Tamzîr**. Brother and guardian of **[[being-cibelasrnt|Cibella Serentia]]**. He has formed a grudging mutual respect with **Captain Eshârum Tarûzî**, who reminds him—uncomfortably—that principle and pragmatism are not always compatible.

## Plot Hooks

1. **The Cure That Isn't**: Lucerian hears of a physician in a distant port who claims to have treated patients with damage similar to Cibella's. The treatment is experimental and risky, but it offers hope where there has been none. Reaching the physician means sailing into waters heavily patrolled by Vylarian naval forces.

2. **The Ordo Closes In**: An Ordo agent boards the Tamzîr disguised as a passenger. Lucerian recognizes the signs too late, and the agent has already sent a message revealing their location. The crew has hours to decide whether to run, fight, or negotiate with an organization that does neither in good faith.

3. **Bleeding Dry**: Lucerian's funds are running out. Without coin, he cannot pay for passage or buy the drugs that keep Cibella stable. He is approached with an offer to practice medicine in a port city—but taking the position would mean staying in one place long enough for the Ordo to find them.

4. **Brother's Burden**: Cibella, in a moment of clarity, tells Lucerian that she does not want to be protected anymore—she wants to understand what was done to her and use her abilities on her own terms. Lucerian must confront the possibility that his desperate need to save his sister has become its own kind of cage.
