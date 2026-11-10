---
shortcode: pzsnkhdzm
name: {full: Pazasan Khidizum}
type: being
subType: npc
description: "A watchman of the Sazumun quay guild who reads manifests for the gaps and kept a record of the Hitusuni warehouses' untaxed night cargoes, until it vanished from his lodgings and the house's head began calling him corrupt."
tags: [soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Town Guard
  lore: []
  culture: taruzelianclt
  homes: [sazumun2]
  affiliations: {cnfdrtntrzlnstts: {rank: 3}, arldnpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: 688.327
  height: 5' 11"
  weight: 146 lbs
  frame: medium
  appearance:
    eye_color: amber
    hair_color: dark_brown
    skin_color: medium
    complexion: [clear]
    extra_features: [scar through left eyebrow]
  packFolder: midhaliontaruzel
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 38}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 27}}
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

Pazasan Khidizum is 31 years old.

Pazasan stands 5'11" with a medium build—rangy and loose-limbed, with the easy posture of a man comfortable in his own skin. His dark brown hair is thick and slightly curling, worn to his ears in the [[lore-taruzelianclt|Taruzelian]] style, and his dark amber eyes are sharp and calculating beneath a left eyebrow bisected by a thin white scar—the only visible evidence of a fight with smugglers on the quays five years past. His medium-toned skin is clear and unblemished, and his face is long and narrow, with a straight nose and a neatly trimmed beard that follows his jawline. He wears the coat of his guild's watch: a light padded tunic, leather bracers, and soft-soled boots designed for quiet movement on wooden dock planking. He carries a short sword, but his hands—long-fingered and precise—seem better suited to counting coins than drawing steel.

# Dossier {#dossier}

Pazasan Khidizum is a watchman of the guild that keeps the warehouse quays of [[place-sazumun2|Sazumun]], where every quay, warehouse and market row belongs to a guild and the guild's own watchmen keep it. The watch guards the bonded warehouses, three and four floors high behind the quays, checks their lead seals against the tally-men's counts and stops theft. Most of the warehouses on his stretch of the quay belong to the [[affiliation-hitusuni|Hitusuni]], the great house of the city.

Most watchmen look at a manifest and count the bales. Pazasan reads it and finds the gaps: where goods are hidden, where a tariff is being dodged, where a merchant is cheating the city and his partners at once. His colleagues think him too fond of paper. He holds that the crimes of the quays are ledger crimes, and that the proof of them is in the numbers.

For years he kept a record of the cargoes that leave the Hitusuni warehouses at night with their seals unbroken and their tariffs unpaid: dates, stores, bale-counts and the boats that took them, which fly no house's mark. This spring the record went missing from his lodgings. He does not know who took it, and the house's head, [[being-ashurazhitus|Ashuraz Hitusuni]], has begun saying at good dinners that Pazasan is corrupt.

## Background

**The family.** Pazasan was born to a [[lore-taruzelianclt|Taruzelian]] merchant family and chose the watch's coat over the counting-room at seventeen.

**The scar.** Five years ago, following a gap in a merchant's manifest, he met smugglers on the quay who fought rather than explain, and one of them laid open his left eyebrow. He pressed the charge, and the guild's court convicted them.

## Psyche

### Personality

Pazasan is methodical, precise and dry, and he does not make friends easily. He will spend an evening on a column of figures that would bore anyone else, and he is amused by the ingenuity people bring to fraud.

### Motivation

He wants to know how wealth really moves through Sazumun, and he wants the frauds that rot honest trade brought into the open. He is driven by the puzzle more than by any cause.

### Strengths

He reads manifests, seals and accounts better than any watchman on the quays, he is patient with tedious work, and he knows which merchant deals with which.

### Weaknesses

He has no proof that would stand before the House of Factors, his record is gone, and a house that sits in the House has begun to ruin his name.

## Social

### Enemies

- [[being-ashurazhitus|Ashuraz Hitusuni]]: The head of the Hitusuni, whose untaxed night cargoes Pazasan documented. Ashuraz has nothing personal against him and means to see him dismissed and disgraced.

### Others

- **The master of the guild watch on the warehouse quays**, who has relied on Pazasan for years and has so far kept him from reassignment.
- **The honest merchants of the quays**, who value him because he cannot be bought.

### Affiliations

- **[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]**: a Freeman, enrolled in the register of [[affiliation-sazumun|Sazumun]].
- **[[affiliation-arldnpnthn|Aureldian Pantheon]]**: one of the lay faithful.

## Plot Hooks

1. **The missing record.** Pazasan's record of the untaxed cargoes has gone from his lodgings, and he does not believe Ashuraz took it. He wants a party to find who has it before they decide what to do with it, and before Ashuraz's talk of corruption reaches his guild.
2. **The bale on the beach.** A girl who walks the beaches after a storm has brought a sealed bale to the apothecary's counter in the lane behind the warehouses, and its lead seal is a Hitusuni seal, unbroken. Pazasan wants the bale before anyone from the house hears of it.
3. **The crates.** Crates under a seal of the [[affiliation-mrchntryvl|Merchantry of the Veil]] have come into a Hitusuni warehouse on his stretch since the winter, and they go out at night heavier than any silk. Pazasan asks a party to watch the coves the night boats make for.
4. **The black board.** Ashuraz's friends in the [[place-houseoffactors|House of Factors]] are asking whether a watchman who slanders a house is outside protocol. Pazasan wants a party to learn who is pressing for his name on the black board, and how soon.

:::secret {title="What the night boats carry"}
The bale on the beach went over the side of one of the night boats that carry the Merchantry's cargoes out of the Hitusuni warehouses with their seals unbroken and their tariffs unpaid, and its seal is the proof Pazasan has never had. The crates are crossbows, boarding pikes and Vilérian silver, paid for by an agent of the [[affiliation-vylarinmpr|Vilérian Empire]] through a broker and carried to the coves of the [[affiliation-freecaptains|Free Captains]] and to the veterans' halls of [[place-yamuzel2|Yamuzel]]. Pazasan has not guessed what is in them. If he opens one, he holds a cause for war, and a house that has arranged for the proof to stop at a broker.
:::
