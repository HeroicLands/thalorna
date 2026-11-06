---
shortcode: belrktrvnl
name: {full: Melrik Tárvenel}
type: being
subType: npc
description: "A sworn man of the Border Militia at Valdun who scouts the forest margin and wants to know how a Varokh party knew his patrol's road."
tags: [soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior, woodsman]
  occupation: Man-at-Arms
  lore: []
  culture: elavendriclt
  homes: [valdun]
  affiliations: {kngdmlvndr: {rank: 2}, brdrmltia: {rank: 2}, arldnpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: 685.246
  height: 5' 7"
  weight: 170 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: auburn
    skin_color: fair
    complexion: [sun_kissed]
    extra_features: [prominent scar on neck]
  packFolder: aureldiaelavendre
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 43}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 54}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 35}}
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

Melrik Tárvenel is a 34-year-old man who stands 5'7" tall and is of medium build, compact and quietly strong rather than imposing. His auburn hair falls past his collar in loose waves, and his warm brown eyes carry the slightly distant look of a man more used to watching treelines than people. His fair skin has been browned by years of outdoor service, and a prominent scar runs along the right side of his neck, a pale, ropy line from a blade that came closer to killing him than he likes to remember. His face is angular, with a narrow jaw and high cheekbones. He wears a leather tunic over quilted padding, leather knee boots and a longbow across his back, with a hunting knife on his belt and a cloak of mottled green-brown.

# Dossier {#dossier}

Melrik Tárvenel is a sworn man of [[affiliation-brdrmltia|the Border Militia]] at [[place-valdun|Valdun]], an [[lore-elavendrnppl|Élavendren]] freeman who scouts the hills and the forest margin of the eastern march for the crown's sworn company.

He was born on a steading at the margin, the son of a hunter who knew the old wood's edge as well as anyone in the hills and a mother from the town. He inherited his father's discomfort with walls and his mother's ease with people, and at twenty he took the crown's oath and asked for the scouting. For fourteen years he has walked the margin: watching the passes for [[lore-varokhiclt|Varokh]] war-parties and [[lore-grukarfolk|Grukar]] bands, tracking raiders through country that loses other men and keeping the march's steadings warned. He is happier with a bow than a sword and among trees than in the town's barracks.

The scar on his neck is from an ambush five years ago, when a Varokh scouting party caught his patrol in a defile above the ridge road. He lived through luck and knowing the ground better than they did, and the scouts were taken and hanged at Valdun, all but one, who was wounded and went into the wood. Melrik has not stopped thinking about how they knew where the patrol would be.

## Psyche

### Personality

Melrik is quiet and observant, patient to the point of stoicism and more comfortable with animals and weather than with most people. He is kind to those who come to him with respect, his few friendships are deep, and he slips away from every gathering in the barracks.

### Motivation

He wants the march's steadings kept safe and the margin kept as it is. He is loyal to the land more than to any captain, and he wants to know how the Varokh knew his patrol's road.

### Strengths

He is an outstanding tracker, an accurate archer at long range, and he knows the margin of the old wood better than nearly anyone in the march.

### Weaknesses

He is ill at ease in company and suspect to the older officers, who prefer a man they can read, and his question about the ambush makes enemies.

## Social

The young militiamen think him a legend, and the older serjeants think him half a hunter and not quite a soldier.

### Companions

Two young scouts he is training, and the hunters of the margin steadings, who feed him when he passes.

### Patrons

[[being-elenorthaurn|Captain Élenor Thaurnde]], who commands the crown's sworn company at Valdun, respects his skill and has kept him from being posted to the coast. She has quietly let him go on asking about the ambush.

### Enemies

The Varokh scout who went into the wood five years ago, who has been leaving signs on Melrik's patrol routes: a dead hare on a stake, a cold fire in a place only Melrik camps.

### Affiliations

- **[[affiliation-brdrmltia|The Border Militia]]**: Melrik is a Sworn Man of the crown's sworn company at Valdun.
- **[[affiliation-kngdmlvndr|Kingdom of Élavendre]]**: He is a Freeman of the crown.

## Plot Hooks

One Plan
: Captain Élenor wants the hill levy brought into one plan with the militia, and she sends Melrik to ride with [[being-jeldormorlin|Jeldor Mórlineth]]'s levy for a muster and report how they fight. The levy knows why he has come.

The Unrusted Helmet
: The hill hunter who brought in the imperial helmet came out of the wood at a place Melrik knows, by a trail Melrik did not know was there. The [[affiliation-ordoarcanis|Order]]'s antiquarians want the trail, and Melrik wants to know who else has been using it.

The Signs on the Route
: The Varokh scout's last sign was left inside the march, a day's walk from the town, on the road that Melrik's patrol takes tomorrow. Someone in Valdun told the scout the route, as someone told the war-party five years ago.

The Wounded Guard
: A guard the Order hired came back over the margin with a Warden's arrow in him, swearing he was never warned. Melrik found him, and Melrik saw the Warden's warning cut into the tree a hundred yards back.
