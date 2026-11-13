---
shortcode: garunyataray
name: {full: Garunya Tarayara, en: [Captain Garunya the Reckless, Captain Garunya]}
type: being
subType: npc
tags: [tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [mariner]
  occupation: Master of a Coaster
  lore: []
  culture: vedyariclt
  homes: [nilatir]
  affiliations: {vyalendra2: {rank: 2}, vrnkpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: "688.310"
  height: 5' 10"
  weight: 142 lbs
  frame: light
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: dark_brown
    complexion: [clear]
    hair_style: cropped
    extra_features: [Rope-scarred palms, A wrapped left wrist]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-pilt, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-weapongear-clb}
    - {model: sohl-sohl-armorgear-ctunic}
    - {model: sohl-sohl-armorgear-cleg}
    - {model: miscgear-monsooncloak}
    - {model: sohl-sohl-miscgear-rope12hemp}
    - {model: sohl-sohl-containergear-wtrskin}
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

Garunya is a lean, dark-skinned man of thirty-two, 5'10", all rope and sinew, with black hair cropped close and brown eyes that measure the sky before anything else. His palms are scarred from the rope-walk he worked as a boy. He wears plain cotton and a monsoon cloak he seldom bothers to put on, and he keeps his left wrist wrapped ashore.

# Dossier {#dossier}

## The Rope-Walk Boy

Garunya is a **Karmija** of [[place-nilatir|Nilatir]], born behind the street to a family that made rope, and he was walking strands at the rope-walk at seven. At twelve he went to sea because a deck was the one place in the town where nobody asked to see his wrist. At twenty-four he was master of a coaster, which is young for it anywhere and unheard of for a man of his birth. He has kept the wrap since, on land, out of habit and because it costs nothing.

He sails for a cloth-factor of the street who owns the hull, the [Kingfisher]{.name data-type="vehicle"}, and pays him by the voyage. The Kingfisher carries the bales the galleys cannot wait for, down the coast to the bar at [[place-chandrmukha|the Moon-Mouth]] and back.

## The Reckless

They call him the Reckless on the street, and he answers to it. He puts out on the first clear day after the rains, which the old masters will not do. He keeps the sea at night off the capes where the old masters anchor. He drives a crew watch on watch for a week and pays it well at the end, if it is still standing. He has lost one hull's worth of bales and no hull, and two men, and he counts that a good record for the time he makes.

[[being-vishvrmhpr|Vishvara Mahapar]] sailed under him one voyage and walked off at the bar with half the crew behind him. The two have quarreled on the quay at Nilatir every season since, in front of the lodging houses, and it has become personal. Vishvara calls Garunya a drowner of men. Garunya calls Vishvara's practices old men's habits, kept up by men too slow to need anything else.

## Twice in a Season

The cloth year is the monsoon's, and a coaster makes one run to the bar and back in the eleven weeks of open sea. Garunya means to make two. He has a wager on it with three factors of the street, and the factors have money on the second cargo. To do it he needs the bales sealed and cleared through the **Koshadyoksha**'s shed before the yards are full, and a hull faster than the Kingfisher.

He has offered for [The Merchant's Fortune]{.name data-type="vehicle"}, whose owners at the bar are selling, with the factors' money.

## Psyche

### Personality

Garunya is brave, vain, generous with money and careless with men. He is honestly puzzled that anyone thinks the sea owes them a safe passage. He respects one thing without reservation, which is a crew that keeps up with him.

### Motivation

He wants to make the run from Nilatir to the bar and back twice in one season, which no master has done.

### Strengths

Seamanship
: He can handle a coaster in weather that keeps every other master on the beach.

The Factors' Money
: Three factors of the street are backing him, and they stand to gain by it.

### Weaknesses

The Crews
: Hands who sail with him once do not usually sail with him again.

The Wager
: If he loses it, he owes three factors a cargo's worth, and he has nothing to pay it with.

## Social

### Patrons and Allies

The cloth-factors of the street
: Who own the Kingfisher and are backing the second run.

### Rivals

[[being-vishvrmhpr|Vishvara Mahapar]]
: Who calls him a drowner of men on every quay, and whose old practices Garunya calls an obstacle to everything.

[[being-samuratrat|Samurat Ratamar]]
: The old master of The Merchant's Fortune, who means to keep the hull out of his hands.

### Affiliations

[[affiliation-vyalendra2|Vyalendra City-State]]
: Karmija, master of a coaster at Nilatir.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: Upasoka, who goes to the temple at the feasts when he is ashore for them, which is seldom.

## Plot Hooks

The Second Run
: Garunya needs the Kingfisher's second cargo through the Koshadyoksha's shed in a day, not the usual four. He hires the party to make it happen, honestly or otherwise.

The Fortune
: Garunya wants the party to persuade the owners of The Merchant's Fortune at the bar that her old master's objection should not count.

Off the Capes
: The Kingfisher comes in one man short, and the man's brother says Garunya put him over the side for refusing a watch. Garunya says he fell. The party is asked by the street to find out which.
