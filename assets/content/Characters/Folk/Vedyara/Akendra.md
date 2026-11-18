---
shortcode: akendra2
name: {full: Akendra, en: [Chef Akendra]}
type: being
subType: npc
tags: [tradesfolk, guilded]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [guildsperson, artisan]
  occupation: Chef
  lore: []
  culture: vedyariclt
  homes: [rajepur]
  affiliations: {rajeprjnpd: {rank: 3}, vrnkpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: "676.221"
  height: 5' 10"
  weight: 170 lbs
  frame: heavy
  appearance:
    eye_color: amber
    hair_color: black
    skin_color: ebony
    complexion: [clear]
    hair_style: cropped
    extra_features: [Knife-scarred fingers, Gold rings in both ears]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-armorgear-slktunic}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: sohl-sohl-containergear-satchltmd}
    - {model: sohl-sohl-miscgear-ringgold}
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

Akendra is a heavy, handsome man of forty-four, 5'10", with ebony skin, a clear face and amber eyes that miss nothing on a plate. His black hair is cut close and his fingers are scarred from knives. He dresses well, in silk, and wears gold rings in both ears, because his patrons do.

# Dossier {#dossier}

## The Kitchen at Rajepur

Akendra keeps a cookhouse near the temple at [[place-rajepur|Rajepur]], with a kitchen behind it that he runs like a galley and a dining court in front where the janpoda's well-off eat when they want to be seen to. He is a **Danhija** and holds his cookhouse by the sabhra's leave, and he cooks in a style of his own: pepper and cardamom from [[place-bharavaban|the Bharava Forest]], sugar from the janpoda's own boiling-houses, dishes from the coast and from the Tantsou quarter at Suryagarha, all of it done fast and over fierce heat.

The style has gone downriver. The great houses of [[place-chendrapur2|the Moon City]] send their cooks to learn it and now and again send for Akendra himself, and Chendrapuri tables serve dishes he invented as if they were old. The traditional cooks call it novelty dressed up, and he calls their cooking pedestrian and artistically limited, in public.

## Vanika

The traditional cook he means is [[being-vanikartns|Vanika Ratnisen]]. They have quarreled across the town for years, in front of their patrons, and the quarrel sells meals for both of them. It became serious when the Achorya [[being-mandulikulan|Manduli Kulanaya]] gave Vanika the commission to cook Rasikara's feast-meal at the great temple's fire chamber. Akendra had asked for it first.

## Psyche

### Personality

Akendra is brilliant, vain, funny, extravagant and hard on his kitchen. He is generous to apprentices who are quick and dismissive of everyone else. He believes good food is a thing a city learns from the cook who dares, and that he is that cook.

### Motivation

He wants to be sent for by [[place-moonhouse|the Moon House]], to cook a feast for the Maharava's own table.

### Strengths

A Name in Chendrapur
: The great houses of the city know him, and two of them send for him every season.

The Kitchen
: His cookhouse is the best-run kitchen in the janpoda, and his apprentices are sought everywhere.

### Weaknesses

His Tongue
: He has insulted half the cooks in Rajepur and some of the priests.

Fashion
: What the houses of Chendrapur admire this season they may not admire the next.

## Social

### Patrons and Allies

The great houses of Chendrapur
: Who send for his dishes, and occasionally for him.

### Rivals

[[being-vanikartns|Vanika Ratnisen]]
: The traditional cook he has publicly dismissed for years.

[[being-mandulikulan|Manduli Kulanaya]]
: Who gave Vanika the feast-meal he wanted.

### Affiliations

[[affiliation-rajeprjnpd|The Janpoda of the King's-Town]]
: Danhija, keeper of a cookhouse by the sabhra's leave.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: Upasoka, who sends a dish to the household shrine before any feast he cooks.

## Plot Hooks

The Summons
: A steward of the Moon House has come to Rajepur to choose a cook for a feast, and has dined at both Akendra's court and Vanika's table. Akendra hires the party to learn what the steward has been told about him, and by whom.

The Spice Barge
: The season's pepper is late from the forest, and Akendra's rivals have bought up what came. He needs a barge brought up the river before a Chendrapuri house's wedding feast.

The Apprentice
: Akendra's best apprentice has gone to Vanika's kitchen, taking his recipe book. Akendra wants the book back, and is less sure he wants the apprentice.
