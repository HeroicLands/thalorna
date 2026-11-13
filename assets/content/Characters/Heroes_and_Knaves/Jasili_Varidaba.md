---
shortcode: jslvrdb
name: {full: Jasili Varidaba}
type: being
subType: npc
tags: [heroes-and-knaves, tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [trader]
  occupation: Lodging-House Keeper
  lore: []
  culture: vedyariclt
  homes: [nilatir]
  affiliations: {vyalendra2: {rank: 3}, vrnkpnthn: {rank: 1}}
  gender: female
  species: humanflk
  born: "677.190"
  height: 5' 6"
  weight: 160 lbs
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: dark_brown
    complexion: [sun_kissed]
    hair_style: cropped
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-pilt, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 40}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-weapongear-clb}
    - {model: sohl-sohl-armorgear-ctunic}
    - {model: sohl-sohl-armorgear-cleg}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: miscgear-monsooncloak}
    - {model: sohl-sohl-miscgear-scalesweig}
    - {model: sohl-sohl-miscgear-waxtablet}
    - {model: sohl-sohl-containergear-bpchlg}
    - {model: sohl-sohl-miscgear-torch}
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

Jasili is a heavy, handsome woman of forty-three, 5'6", with dark brown skin, a loud laugh and brown eyes that take in a stranger's hands and feet before his face. She wears plain cotton, a monsoon cloak in the rains and sandals in all weathers. Her black hair is cropped short, which nobody on the street does but sailors. She wears a silver ring in her left ear for every hull she has crewed in full, and there are nineteen of them.

She carries a dagger openly and a cudgel behind the counter.

# Dossier {#dossier}

## The House at the Landward End

[[place-nilatir|Nilatir]] is one street a mile long, with the bale-yards on the seaward side and the boat-quays on the landward. The crews are made up in the lodging houses at the landward end, and Jasili's is the largest of them: three floors round a court, a kitchen that feeds sixty, and a counter where a ship's master who needs hands comes to ask for them.

A ship's master does not ask to see a wrist, and neither does Jasili. A third of the men who sleep in her house are **Outcastes**, and some number she does not count are bonded servants who came down the river without a token. She feeds them, lodges them on account, finds them a berth and takes her fee from the master. When the sea opens and the yards empty, for eleven weeks the street works at night as well as by day, and in those weeks her counter is the busiest in the town.

She is **Danhija**, born to a family of cloth-factors at [[place-vyalendra3|the City of Ten Thousand Looms]] who did badly, and she has lived in Nilatir since she was sixteen.

## The Road Above the Town

A runaway who reaches the yards at Nilatir is not sent back. The temples take the position that what happens on a deck is outside their province, and the [Loom-Council]{.name data-type="affiliation/governmental"} takes the position that the cloth has to move. A runaway who is taken on the river road above the town is sent back, and the households whose bonded men run know exactly where to wait.

Jasili has spent fifteen years making the road shorter. She pays boatmen to carry men down under the bales and pays them more to forget it. She keeps a house of her own two days up the river where a man can sleep in a loft and come down on the next boat. She knows the household agents on the road by name, and they know her.

The bales are the hard part. Every bale is opened at the **Koshadyoksha**'s shed at the head of the street, and the seals counted against the boat's manifest. A broken seal is not a matter for the town: the bolt is held, the boat's master is held with it, and both go back up the river to the Council. A man hidden in a bale has to be out of it before the shed, and every season one is not.

## Psyche

### Personality

Jasili is loud, generous, quick-tempered and very hard to fool. She keeps her accounts in her head and on a wax tablet, and both are right. She likes sailors, distrusts priests, and is unfailingly polite to the Koshadyoksha's clerks, who are the only people in the town who can close her house.

She does not talk about the road above the town to anyone who has not slept under her roof.

### Motivation

She wants the river road above the town made as safe for a runaway as the yards are.

### Strengths

The Counter
: Every master who needs hands at Nilatir comes to her first, and she knows which of them pay and which drown their crews.

The Street
: She knows everybody on it, what they owe and to whom.

The Boatmen
: A dozen of the river boatmen will carry what she asks and not look.

### Weaknesses

The Seals
: One broken seal traced to her house would close it, and the Council would send her up the river with the bolt.

Debts on Account
: Half her lodgers owe her a season's board. If the season fails, so does she.

## Social

### Patrons and Allies

The ship's masters of the coasting trade
: Who need her crews and ask her nothing.

The four temples of Nilatir
: Whose silence on the deck she pays for in kind, at every feast.

### Rivals

The household agents on the river road
: Bond-takers who wait two days above the town for men without tokens.

The master of the yards
: A Loom-Master's factor, who wants the boats faster and the street quieter.

### Affiliations

[[affiliation-vyalendra2|Vyalendra City-State]]
: Danhija, keeper of a lodging house at Nilatir.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: She keeps a lamp at her threshold and goes to the temple at the feasts.

## Plot Hooks

The Broken Seal
: A boat comes down with a seal broken because a man was hidden in the bale, and the boat's master and the bolt are to go back up the river in the morning. Jasili needs the man out of the shed before then, and the master kept from naming her house to the Council.

Forty Hands
: A [[affiliation-chendrapur|Chendrapuri]] master wants forty hands before the bar closes, and the street has twenty. The rest are on the road above the town, in a loft two days up the river, waiting for boats that the household agents are now stopping and searching. Jasili hires the party to bring them down.

Another Man's Token
: A man reaches her counter wearing a [[miscgear-bondtoken|Bond-Token]] that is not his own and asking for a berth under the name on it. Jasili wants to know whose token it is, and where its owner went.
