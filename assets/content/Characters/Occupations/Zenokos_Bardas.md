---
shortcode: xenoksbrds
name: {full: Zenokos Bardas}
type: being
subType: npc
tags: [todo-warrior, draft, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Town Guard
  lore: []
  culture: vylarianclt
  homes: [alyssar]
  affiliations: {vylarinmpr: {rank: 3}, arldnpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: 698.353
  height: 5' 9"
  weight: 132 lbs
  frame: light
  appearance:
    eye_color: amber
    hair_color: dark_brown
    skin_color: pale
    complexion: [scarred]
    extra_features: [scar across forehead]
  packFolder: midhalionvylaria
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 59}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 23}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 29}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 43}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 54}}
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

Zenokos is young and still growing into himself—twenty-one years old, 5'9", with a light build that makes him look more like a clerk than a guardsman. His dark brown hair is worn longer than regulation permits, falling across his forehead in a way that his sergeant has remarked upon more than once. His honey-brown eyes sit in a pale, almost sallow face that rarely sees sunlight, and a thin scar runs across his forehead from an incident during his first month on duty that he would prefer to forget. His features are fine-boned and [[lore-vylarianclt|Vilérian]] in the classical sense: high forehead, straight nose, narrow chin. He wears his district guard uniform of the [[affiliation-provinclys|Province of Alessa]]—padded tunic, leather bracers, short sword at his hip—with the self-conscious stiffness of someone who has not yet learned to forget he is wearing it.

# Dossier {#dossier}

Zenokos Bardas is a guard of the province's urban cohort quartered in the watch-house below the [Governor's House]{.name data-type="place/structure"} in [[place-alyssar|Alessar]], the seat of [[affiliation-provinclys|the Province of Alessa]]. He walks the central district, the richest and most crowded quarter of the city, where merchants, minor nobles and prosperous tradespeople live beside their servants and the city's poor, and at assize time he walks the inns of [Petitioners' Row]{.name data-type="place/feature"} at night with the rest of the cohort.

He joined eighteen months ago at twenty, full of idealism about protecting his home city, and the idealism has held up better than he expected. He is conscientious and quick to learn, and still green. The old captain of the district, [[being-ganothisdora|Ganothis Dorandates]], has taken him under his wing, and this year a new senior officer, [[being-zurmelosorth|Zurmelos Orthemandis]], has taken command of the station over Ganothis's head.

## Background

**The scar.** In his first month on patrol a drunk merchant in the market caught him with a bottle while he broke up a brawl, and the stitches left the scar across his forehead. He was back on the street within a week.

**The importer.** Twice he has begun asking questions about a spice importer of the central district whose business looks to him like a black market wearing a respectable sign, and twice the importer's advocates, friends and hints have made him stop.

## Psyche

### Personality

Zenokos is earnest and polite to everyone, including people who resent it. He tries too hard to be fair, and older thieves have learned to use his good nature against him. He doubts himself.

### Motivation

He wants to be a good guard, not merely a competent one, and to prove that he belongs in the cohort despite his youth and his slight build.

### Strengths

He is very fast, wholly committed and literate, which makes him useful with the station's paperwork and the law it answers to.

### Weaknesses

He cannot tell when fairness is being turned against him, and he believes that a crime, once seen, must be reported.

## Social

### Enemies

- **The spice importer of the central district**, who has twice made him drop his questions and regards him as beneath contempt.

### Others

- [[being-ganothisdora|Ganothis Dorandates]]: The old senior captain of the district, his mentor, who keeps him from the guards who would teach him to take bribes.
- [[being-zurmelosorth|Zurmelos Orthemandis]]: The station's new senior officer, whose searches and heavy hand contradict everything Ganothis has taught him.

### Affiliations

- **[[affiliation-vylarinmpr|Vilérian Empire]]**: a Palvethos, a free resident under imperial law without the citizenship, and liable to the Empire's taxes.
- **[[affiliation-arldnpnthn|Aureldian Pantheon]]**: one of the lay faithful.

## Plot Hooks

1. **The guard on the importer's books.** Zenokos has learned that an older guard of his own squad takes the spice importer's money, and has for years. Ganothis has told him to let it go. Zenokos asks a party to find proof that the station cannot ignore.
2. **The robbed petitioner.** A petitioner on Petitioners' Row has been robbed of the papers for his hearing in the night, and Zenokos was on the Row. He wants the papers found before the case is called and the robbery is entered against his watch.
3. **The young lord.** Zenokos has seen the son of a family with friends on the square beat a servant nearly to death, before witnesses. Ganothis says that an arrest would cost the station more than it is worth, and Zurmelos wants the numbers that an arrest would give him. Zenokos asks a party what the servant's family wants.
4. **The rider from Vennara.** Zenokos has stood the night watch at the foot of the Long Stair through the spring, and on no night before a reading on the steps has he seen a courier come up from the Vennara road. He mentioned it to Zurmelos, who told him not to repeat gossip about the _therkos_, and he wants to know whether it is gossip.
