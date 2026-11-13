---
shortcode: brakshrlns
name: {full: Brakos Harlanis}
type: being
subType: npc
description: "A rider of the legion at Korvenara and the best of Kauren Iltheris's irregular riders, whose honest bandit report has made an enemy of the Imperial prefect."
tags: [soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Man-at-Arms
  lore: []
  culture: vylarianclt
  homes: [corvinus]
  affiliations: {vylarinmpr: {rank: 4}, vylrnmltry: {rank: 2}, arldnpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: 695.84
  height: 5' 4"
  weight: 115 lbs
  frame: scant
  appearance:
    eye_color: amber
    hair_color: red
    skin_color: fair
    complexion: []
    hair_style: cropped
    face_shape: long
    mouth: thin
    extra_features: [tattoo on arm]
  packFolder: midhalionvylaria
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 29}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 31}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 51}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 28}}
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

Brakos Harlanis is 24 years old.

Brakos is a compact man, standing just 5'4" with a wiry, scant frame that barely fills his borrowed armor. His fair skin burns easily in the Vilérian sun, and his close-cropped red hair marks him as an oddity among the dark-haired ranks of the legion at [[place-corvinus|Korvenara]]. His honey-brown eyes are sharp and restless, constantly scanning doorways and rooflines with the wariness of a man who learned early that trouble comes from unexpected directions. His face is narrow, with high cheekbones and a thin-lipped mouth that rarely smiles. A faded tattoo of a coiled serpent wraps around his left forearm—a youthful indiscretion he declines to explain. He wears his garrison-issue padded tunic and leather bracers with the casual disregard of a soldier who cares more about function than appearance.

# Dossier {#dossier}

Brakos Harlanis is a rider of the legion stationed at [[place-corvinus|Korvenara]], the garrison town of [[affiliation-provinclys|the Province of Alessa]], and the best of the irregular riders commanded by [[being-khaurenilthe|Kauren Iltheris]]. Kauren's riders scout the province's roads and hill tracks for bandits, smugglers and dissidents, and Brakos brings back the reports that Kauren trusts.

The camp he rides out of is half splendid and half empty, built for a full legion and holding well short of one, and an officer is coming from Orzara to inspect it. His report on bandit activity once contradicted the reports of [[being-orthemiskorv|Orthemis Korvathandis]], the _usos_ (prefect) of the Imperial Offices sent to Alessar, and she has obstructed his advancement and called him soft on dissidents ever since. Kauren has said plainly that he will protect Brakos from court-martial for as long as Brakos brings him accurate intelligence.

## Background

**The third son.** Brakos is the third son of the Harlanis, a minor noble family of [[place-alyssa|Alessa]] with little left but its name. His elder brothers took the family's holdings, and his sister [[being-lothnhrlns|Lothona]] went to the urban cohort of [[place-mercavia|Delalara]]. He walked into Korvenara and took the legion's oath.

**The courier.** He served first as a courier, riding dispatches along the province's roads. On one run an ambush caught a supply wagon on the road with eight foot soldiers beside it. Brakos was the only man mounted. He left the wagon and rode for the camp, shouting to the infantry to scatter, and seven of the eight reached shelter. The wagon and its driver were lost. The camp commended him and gave him to Kauren's riders.

**The patrols.** With Kauren he has learned to read the small signs: disturbed earth, an abandoned camp, the difference between a refugee's tracks and a raider's. He has also learned how little the empire believes in itself. His family still expects him to send money home, and his pay barely feeds his horse.

## Psyche

### Personality

Brakos masks his disillusionment with sardonic wit and deliberate care. In the field he speaks little and notes everything. Among soldiers he allows himself dark jokes about death and incompetence, and he avoids close attachments, because comrades die.

### Motivation

He wants to reach thirty alive with enough coin to walk away. He still sends money home, because the Harlanis name is the last thing that ties him to something larger than himself.

### Strengths

He reads ground and danger signs very well, his horse is the best-trained in the camp, and he keeps his judgment under immediate threat.

### Weaknesses

He is too educated for the ranks and too blunt for the officers, he has made an enemy who writes to the capital, and his safety rests on one captain.

## Social

### Enemies

- [[being-orthemiskorv|Orthemis Korvathandis]]: The prefect whose bandit reports his contradicted, who means to see him disgraced.

### Others

- [[being-khaurenilthe|Kauren Iltheris]]: The senior irregular-war officer of the garrison, his captain, who shields him for the sake of his intelligence. The bargain is transactional and real.
- [[being-lothnhrlns|Lothona Harlanis]]: His elder sister, who supervises the night patrol on the quays of Delalara.

### Affiliations

- **[[affiliation-vylarinmpr|Vilérian Empire]]**: a citizen by his house's station.
- **[[affiliation-vylrnmltry|The Vilérian Military]]**: a _vandor_, a full soldier of the legion at Korvenara, riding with its irregular riders.
- **[[affiliation-arldnpnthn|Aureldian Pantheon]]**: one of the lay faithful.

## Plot Hooks

1. **The parade.** The officer from Orzara means to count the legion on parade. Kauren wants his riders seen and counted, and he asks Brakos to bring the patrols in on the day. Brakos asks a party to ride out with the last patrol and make sure it reaches the camp in time.
2. **The leak.** Imperial dispatches have been found among a smuggler's goods, and Orthemis wants the leak traced to the garrison's riders. Brakos knows someone in the camp is selling the courier routes, and he needs a party from outside the legion to find the seller before the prefect names him.
3. **The inheritance.** Brakos's eldest brother has died without heirs, and the family's mortgaged estate is his if he claims it in person within the season. Leave is Kauren's to give, and Orthemis is waiting to call him a deserter the day he rides. He asks a party to carry his claim and his letters while he stays.
4. **The courier.** A dispatch rider brings Kauren sealed orders and stays a night longer than she needs to, asking Brakos about the patrols and who reads their reports. Kauren wants to know whom else she has spoken to in the camp.

:::secret {title="The rolls and the report"}
The legion's muster rolls carry a full legion while the camp holds rather more than half of one, and the Vallar spends the missing men's pay on the camp's roofs, fuel and bread. Brakos has ridden enough empty barrack streets to guess it. Kauren's riders are among the men who do exist, and if the officer from Orzara counts the parade, they are what the legion has.

Orthemis wrote her first report on the bandits before she had seen the hills, and Brakos's report is the only paper in the province that contradicts it. She has asked a clerk of the garrison to lose it. The clerk has kept a copy against the day he needs a favor.
:::
