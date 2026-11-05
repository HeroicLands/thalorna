---
shortcode: lothnhrlns
name: {full: Lothona Harlanis}
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
  homes: [mercavia]
  affiliations: {vylarinmpr: {rank: 4}, arldnpnthn: {rank: 1}}
  gender: female
  species: humanflk
  born: 685.354
  height: 5' 8"
  weight: 159 lbs
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: chestnut
    skin_color: tanned
    complexion: [freckled]
    extra_features: [calloused knuckles]
  packFolder: midhalionvylaria
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 57}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 31}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 43}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 22}}
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

Lothona stands 5'8" with a solid, medium build that carries its weight in the shoulders and arms. Her chestnut hair is kept practical—tied back and pinned when on duty, falling to her shoulders when loose. Her dark brown eyes are direct and unblinking, the kind that make petty criminals confess before she has asked a question. Her tanned skin is freckled across the bridge of her nose and cheeks, and her face is broad and strong-featured, with a firm jaw and a mouth that settles naturally into a skeptical line. Her knuckles are visibly calloused from years of hand-to-hand training. She wears the standard [[place-mercavia|Delalara]] guard kit—padded tunic over linen, leather bracers, a short sword and truncheon on her belt—with the settled ease of a woman who stopped thinking about her uniform a decade ago.

# Dossier {#dossier}

Lothona Harlanis is the supervisor of the night patrol of the urban cohort quartered on the quays of [[place-mercavia|Delalara]], the port of [[affiliation-provincvld|the Province of Salkalon]]. The cohort guards the [Customs House]{.name data-type="place/structure"} and walks the mile of waterfront after dark, and for most of her service the patrol has come out with clubs only for a riot, an attack on the Customs House or a crime in the foreign quarters, because order on the quays rests on the shipping houses, their quay-masters and the harbor-master.

She keeps that balance by knowing it. She knows which quay-master settles a theft before the owner has missed the goods, which crews will cool at the sight of a cohort tunic and which fights need a club, and which berths take cargo after dark. The merchants and the dock workers know her as fair and not for sale. This spring the cohort has a new commander, [[being-elthezasolte|Eltheza Solterates]], who calls the patrol soft and has ordered Lothona to carry out searches on the berths and arrests on the quays.

## Background

**The cohort.** Lothona joined the cohort on the quays at seventeen and spent her first years breaking up crew brawls under the warehouse cranes. Her younger brother [[being-brakshrlns|Brakos]] took the legion's oath at [[place-corvinus|Korvenara]] years later.

**The night patrol.** In her late twenties she was made supervisor of the night patrol, the post that stands between the cohort's officers and the work on the waterfront. She has declined promotion twice, preferring the quays to the forum.

## Psyche

### Personality

Lothona is tough without being cruel and fair without being soft. She speaks plainly, has no patience for excuses and arrests a thief with regret rather than satisfaction. Her humor is dark.

### Motivation

She wants the quays kept quiet and the people on them kept from the worst of the waterfront. She also wants it understood that she holds her post by her own work, not her family's name.

### Strengths

She can calm a fight before it starts, she is strong and skilled with club and short sword, and she understands how the quays' trade and people work better than any single merchant or quay-master.

### Weaknesses

She has bent the cohort's rules on the waterfront for years, for good reasons, and a commander who wants an example could make one of her.

## Social

Lothona is a citizen of the [[affiliation-vylarinmpr|Vylarian Empire]] by her house's station, since the Harlanis are a minor noble family, though the name brings her no money and no favor on the docks. On the quays she is respected by the dock workers and the merchants both, and accepted fully into neither world.

### Enemies

- [[being-elthezasolte|Eltheza Solterates]]: The cohort's new commander, who means to turn the patrol into hard enforcement and has ordered Lothona to break the balance she has kept.

### Others

- **The harbor-master**, the town council's officer, who has asked for her by name for delicate work on the quays for twelve years.
- **The quay-masters of the shipping houses**, who settle their own thefts and tell her what she needs to know.

### Affiliations

- **[[affiliation-vylarinmpr|Vylarian Empire]]**: a citizen by her house's station.
- **[[affiliation-arldnpnthn|Aureldian Pantheon]]**: one of the lay faithful.

## Plot Hooks

1. **The searches.** Eltheza orders a search of a Taruzelian factor's warehouse in the Eastern Quarter in the very spring his waiver from the _therkos_ is late. Lothona asks a party to warn the factor's clerks before the patrol arrives, so that the search finds nothing worth a diplomatic quarrel.
2. **The hidden dock.** The slaver who works from a dock no harbor-master admits to has taken a sailor's child from the waterfront. Lothona has walked every yard of the quays for years and believes she knows the stretch, and she cannot search it without Eltheza's leave.
3. **The repainted ship.** A Delalara ship reported lost off the [[place-tamzirshoals|Tamzir Shoals]] has been seen in [[place-qudumel2|Kudumel]] under another name. One of Lothona's patrol saw her cargo loaded at night the week before she sailed, and the house that owned her has asked the harbor-master which of the patrol was on the quay.
4. **The second chalk.** A Hilen wine merchant was charged the customs twice on one cargo, the second time at a warehouse door by men carrying the Customs House's chalk. Lothona wants a party to find those men before Eltheza blames the patrol.

:::secret {title="The nephew on the patrol"}
A young guard of Lothona's own patrol, the nephew of a merchant family with friends on the town council, takes a smuggler's money to let contraband past the patrol. Lothona knows. His family has just won a contract from the council that keeps the harbor, and the harbor-master has asked her, as a favor, to leave the boy alone. If she arrests him she loses her best patron. If she leaves him and Eltheza finds him first, the arrest is Eltheza's, and so is the patrol.
:::
