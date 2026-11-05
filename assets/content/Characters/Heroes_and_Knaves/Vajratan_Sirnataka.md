---
shortcode: vjrtnsrntk
name: {full: Vajratan Sirnataka}
type: being
subType: npc
tags: [heroes-and-knaves, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [mariner, warrior]
  occupation: Nau-senapavi
  lore: []
  culture: vedyariclt
  homes: [chandrmukha]
  affiliations: {chendrapur: {rank: 0}}
  gender: male
  species: humanflk
  born: "670.31"
  height: 5' 10"
  weight: 182 lbs
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: grey
    skin_color: dark_brown
    complexion: [weathered, scarred]
    extra_features: [The wrist-line on his left wrist struck through and left bare]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 16}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-pilt, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-shpw, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-acro, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-weapongear-falcn}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-weapongear-rndsh}
    - {model: sohl-sohl-armorgear-ltvest}
    - {model: sohl-sohl-armorgear-ctunic}
    - {model: sohl-sohl-armorgear-cleg}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: miscgear-monsooncloak}
    - {model: sohl-sohl-miscgear-sealsignat}
    - {model: sohl-sohl-miscgear-map}
    - {model: sohl-sohl-containergear-bpchlg}
    - {model: sohl-sohl-miscgear-tndrbx}
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

Vajratan is a heavy, square man of fifty, 5'10", with dark brown skin, gray hair cropped to the skull and a rower's shoulders that thirty years of command have not softened. His face is scarred across the left cheek and his hands are knotted from the oar. He dresses like a galley master, in cotton and a leather vest, with a falchion at his hip and a monsoon cloak in the rains.

He does not wrap his left wrist. The wrist-line on it is struck through, and he has left it bare at every audience in the Moon House.

# Dossier {#dossier}

## The Beach

Vajratan was born on the beach at [[place-chandrmukha|the Moon-Mouth]], an **Outcaste**, to a mother who handled cargo for whoever was standing on the sand at dawn. At twelve he signed on as a rower on a coasting hull, because a crew signs on at the quay and nobody asks to see a wrist. At twenty he was on the oars of a war-galley. At thirty he was its master.

The deck is the one place in [[affiliation-chendrapur|Chendrapur]] where Sentija who owe the Maharava service serve beside men the temples will not admit, and Vajratan has commanded both for twenty years. He has fought the galleys in every sailing season since, spent the ten months between building, victualling and arguing about money, and brought the fleet through two seasons of fighting on the Khelathi passage that the court still talks about.

## The Office

Three years ago the Maharava of [[place-moonhouse|the Moon House]] named him **Nau-senapavi**, commander of the fleet, who answers for the river mouth and the coast and lets the galleys out by the sailing season. It is an office, and the Maharava fills the offices of his court as he pleases.

It is also a royal act, and no royal act is complete without the sanction of the Ritrija. The temples confirm the Maharava's appointments as they confirm the Maharava. For three years they have neither confirmed Vajratan's nor refused it. The court has not been asked to decide whether an Outcaste can hold the fleet, and it has not decided. It has watched him come up the river stair to the Moon House every season with his wrist bare, and it cannot unsee it.

He holds the command. The crews follow him without question, because he is the best master on the coast and they know where he came from. But an appointment the temples have not confirmed can be set aside by the next Purohata who finds it convenient, and the Nine Houses have three candidates of their own for the fleet.

## The Hire

[[affiliation-vyalendra2|Vyalendra City-State]] has the cargo and keeps no fleet, and it hires its escort from the galleys at Chendramukhva. The rate is settled fresh every sailing season, and settled late, which suits Chendrapur. The Nau-senapavi lets the galleys out, and the lateness of the hire is his to manage.

Vyalendra's Dutsa has made him an offer. Vyalendra's Triyacharya will speak for his confirmation before the temples of the coast if the hire is fixed for three years at this season's rate. It would be the first fixed hire between the two cities in living memory, the Maharava would lose a lever he values, and the temples would confirm him because another city asked them to.

## Psyche

### Personality

Vajratan is blunt, patient and very hard to embarrass. He speaks to a Kulena exactly as he speaks to a rower, and he has never once apologized for his birth. He is a careful seaman and a reckless politician, and he knows it.

He has a long memory for the men who died under his command and a short one for insults.

### Motivation

He wants his command confirmed by the temples, or the fleet made to lose him openly, in front of everyone.

### Strengths

The Fleet
: The crews of every galley at Chendramukhva would follow him into the roadstead in the rains if he asked.

The Coast
: He knows the bar, the roadstead and the Khelathi passage better than any pilot in the shrena.

The Maharava's Grant
: He holds the office by the king's own word, and the king has not withdrawn it.

### Weaknesses

The Wrist
: He is barred from every temple whose sanction he needs.

The Unconfirmed Act
: His appointment can be set aside without a hearing.

Pride
: He would rather lose the fleet than be confirmed by a forgery or a favor, and his allies find this exasperating.

## Social

### Patrons and Allies

The Maharava
: Who named him and has not explained why.

The crews and [[affiliation-nshrnchmk|the pilots' shrena of Chendramukhva]]
: Who know what he is worth at sea.

### Rivals

The Purohata
: The royal chaplain, who performs the rites a royal act rests on and has not performed this one.

The Nine Houses
: Three of whose Kulena have kinsmen they would like to see command the fleet.

The Yuvarava
: Who governs the customs of the river mouth as his apprenticeship and finds an Outcaste commanding in the same yards an embarrassment.

### Affiliations

[[affiliation-chendrapur|Chendrapur]]
: Nau-senapavi, an Outcaste by birth, holding the office by the Maharava's grant.

## Plot Hooks

The Rite at the River Stair
: The Purohata proposes to hold the rite of confirmation at the foot of the river stair, outside the temple, so that the Nau-senapavi can attend without entering. Two Kulena have hired men to see that the rite does not happen. Vajratan wants the party at the stair, and wants them unarmed, because an armed escort at a rite is an insult to the temples.

The Three-Year Hire
: Vajratan has not answered Vyalendra's Dutsa. He sends the party up the coast to [[place-nilatir|Nilatir]] to learn whether Vyalendra's Triyacharya actually agreed to speak for him, or whether the Dutsa offered something that was never his.

A Clean Wrist
: A Ritrija scribe offers, for a price, to swear that the struck line on Vajratan's wrist is an old wound over a Sentija's mark. It would make him confirmable. Vajratan wants to know who sent the scribe, and he wants the scribe's offer made again in front of witnesses.
