---
shortcode: darmejadar
name: {full: Darmeja Daranir, en: [Captain Darmeja]}
type: being
subType: npc
tags: [tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [mariner, trader]
  occupation: Master of the Crimson Sail
  lore: []
  culture: vedyariclt
  homes: [chandrmukha]
  affiliations: {chendrapur: {rank: 3}, vrnkpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: "675.330"
  height: 6' 1"
  weight: 169 lbs
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: dark_brown
    skin_color: tawny
    complexion: [smooth]
    hair_style: short
    facial_hair: none
    extra_features: [A red silk sash, dyed to match his sail]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-pilt, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shpw, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 30}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-armorgear-slktunic}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: miscgear-monsooncloak}
    - {model: miscgear-letterofcredit}
    - {model: sohl-sohl-miscgear-sealsignat}
    - {model: sohl-sohl-miscgear-ringgold}
    - {model: sohl-sohl-containergear-bpchlg}
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

Darmeja is a tall, quick-moving man of forty-five, 6'1", with tawny skin, a smooth face kept closely shaved and dark brown hair worn short. His eyes are dark brown and seldom still. Ashore he wears a silk tunic and a red sash of the same dye as his sail, and a gold ring with the hull's mark cut in it. At sea he wears the sash and very little else.

He carries a long knife and the seal of the hull's owners.

# Dossier {#dossier}

## The Crimson Sail

The [Crimson Sail]{.name data-type="vehicle"} is a deep-water merchant hull built in the yards on the west side of the channel at [[place-chandrmukha|the Moon-Mouth]], where the merchant houses build what they own outright. Darmeja is her master and holds three of her eight shares. Her mainsail is dyed red at [[place-nilatir|Nilatir]], and it is the only red sail on the coast.

She is the fastest hull on the southern run, and Darmeja makes her so. He sails short-handed and loaded to the marks. He puts to sea in the first clear week after the rains, when the older masters are still on the beach, and he comes home in the last week before the roadstead closes. A merchant who must be first into a market pays Darmeja's rate, which is the highest on the beach, and in fifteen years he has never once been second.

Crews do not last aboard her. Two men went over the side in his last season and one the season before. [[being-senpvvkrmd|Senapavi Vikramada]] signed on with him once, read the hull and her stores on the first morning, and walked down the plank again before she sailed. He has said why on every quay between the bar and Nilatir, and Darmeja has not forgiven him for it.

## The Bar

Speed buys Darmeja everything except the bar. The channel through it shifts with every flood season and is surveyed after every monsoon by [[affiliation-nshrnchmk|the Pilots' Shrena of Chendramukhva]], whose charts are not sold. A master who comes in without a pilot pays the same fee, and at the opening of the season the hulls lie in the roadstead in the order the pilots reach them. The first hull over the bar in a season gets the best price in [[place-chendrapur2|the Moon City]], and the order of the queue is the pilots' to give.

Two seasons ago Darmeja paid a pilot's apprentice for a copy of the chart. It was the previous year's, and the Crimson Sail touched the bar on a falling tide and lay there until morning with her hold full. He has not stopped trying.

## Psyche

### Personality

Darmeja is cheerful, quick, impatient and contemptuous of caution in other men. He pays a crew that makes good time better than anyone on the coast and puts a slow one ashore at the next landing without its wages. He keeps the rites of the household shrine at home because his mother did, and goes to the temple at the feasts because the merchants he carries for are there.

### Motivation

He wants this season's chart of the bar in his own cabin, so that the Crimson Sail can cross in the dark ahead of the pilots' queue.

### Strengths

The Fastest Hull on the Coast
: No hull on the southern run makes the passage faster, and the merchants who need to be first know it.

Nerve
: He will sail when others will not, and he has been right more often than wrong.

### Weaknesses

Crews That Will Not Sign
: The lodging houses at Nilatir send him the men nobody else will take, and the quay at the bar knows the names of the men he lost.

The Wrong Chart
: One chart has already nearly cost him the hull. A second wrong one would cost him the shares.

## Social

### Patrons and Allies

The merchants who must be first
: Factors in Chendrapur who pay his rate and ask no questions about how he keeps it.

The west-side yards
: Who built the Crimson Sail and keep her, and who would sooner see her fast than safe.

### Rivals

[[being-senpvvkrmd|Senapavi Vikramada]]
: The bosun who refused to serve aboard and says why to anyone hiring hands.

[[affiliation-nshrnchmk|The pilots' shrena]]
: Whose queue and whose chart stand between him and the first price of the season.

### Affiliations

[[affiliation-chendrapur|Chendrapur]]
: Danhija, master and part-owner of a merchant hull.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: Upasoka, keeping the household shrine and the feasts.

## Plot Hooks

The Apprentice's Chart
: A second pilot's apprentice has offered Darmeja this season's chart, and the shrena has learned that someone is selling. Darmeja hires the party to collect it from a sail-loft at night. The shrena is watching the loft.

Six Hands Short
: The Crimson Sail needs six hands to sail before the bar closes, and [[being-jslvrdb|Jasili Varidaba]]'s counter at Nilatir will not send him any. Darmeja asks the party to find him a crew, or to be one.

Over the Side
: The widow of a man lost from the Crimson Sail says her husband was sent aloft in a gale with a sprained hand. She wants the party to find the two men who saw it, both now ashore at the bar, before Darmeja finds them.
