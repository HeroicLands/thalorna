---
shortcode: samuratrat
name: {full: Samurat Ratamar, en: [Captain Samurat]}
type: being
subType: npc
tags: [tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [mariner]
  occupation: Ship's Master (Retired)
  lore: []
  culture: vedyariclt
  homes: [chandrmukha]
  affiliations: {chendrapur: {rank: 3}, vrnkpnthn: {rank: 2}, rasikara: {rank: 2}}
  gender: male
  species: humanflk
  born: "645.220"
  height: 6' 2"
  weight: 189 lbs
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: dark_brown
    skin_color: dark_brown
    complexion: [clear]
    extra_features: [A white beard cut square, Rasikara's gray ash-mark on his brow at the feasts]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-pilt, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-shpw, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 20}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 45}}
    - {model: skill-rasikara, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-weapongear-stf}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-lrobe}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: miscgear-monsooncloak}
    - {model: sohl-sohl-miscgear-bookbase}
    - {model: miscgear-ashmarkstamp}
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

Samurat is a tall old man of seventy-five, 6'2", dark-skinned and still broad in the chest, with dark brown hair gone white at the edges and a white beard cut square. His eyes are dark brown and are beginning to fail him at distance, which he does not mention. He wears a long cotton robe ashore and walks with a staff he uses to point more than to lean on. At [[affiliation-rasikara|Rasikara]]'s feasts he wears the god's gray ash-mark on his brow.

# Dossier {#dossier}

## The Merchant's Fortune

For forty years Samurat was master of [The Merchant's Fortune]{.name data-type="vehicle"}, a deep-water merchant hull built in the west-side yards at [[place-chandrmukha|the Moon-Mouth]] and owned in eight shares, two of them his. He took her along every coast the Chendrapuri trade reaches, and he was known on all of them for exacting standards and for his refusal to tolerate laziness or negligence in anyone, himself included.

[[being-vishvrmhpr|Vishvara Mahapar]] came aboard her at twelve as a cabin boy and left her twenty years later as first mate. Samurat taught him navigation by stars and currents, the stowage of a hold and the handling of a crew, and he regards Vishvara as the one entirely satisfactory thing he made in forty years at sea. When Samurat retired at seventy the owners offered Vishvara the command, and Vishvara refused it. Samurat was disappointed and said so once.

## The House by the Pilots

He lives in a narrow house in the pilots' quarter, where the old masters live, and keeps the Fortune's logs on a shelf in the front room. The pilots come to him when a bar survey disagrees with what an old hand remembers, and so do the young masters who want to know a coast before they sail it. He is a **Danhija**, born to a family of chandlers, and he has walked the coals of Rasikara's ordeal, which most seamen do not, because the god of fire is also the god of change and the sea is nothing else.

## The Sale

The Fortune has had two masters since Samurat, and neither kept her as he did. Her owners now want to sell her. [[being-garunyataray|Garunya Tarayara]] of [[place-nilatir|Nilatir]], who drives crews and hulls past their endurance and is backed by factors' money, has made the best offer.

The crown's galleys are broken up in the yard that built them when their twenty years are done. Merchant hulls are sold until they sink. Samurat wants the Fortune given the galleys' end, and he has two shares in eight to want it with.

## Psyche

### Personality

Samurat is stern, dry, scrupulously fair and entirely without small talk. He praises seldom and means it when he does. He forgives a mistake once, and he has never forgiven idleness.

### Motivation

He wants The Merchant's Fortune broken up in the yard that built her, before Garunya Tarayara can buy her and drive her under.

### Strengths

Forty Years of the Coast
: He knows every cape, bar and roadstead on the Chendrapuri trade, and his logs record the rest.

The Men He Trained
: A dozen masters and mates on the coast learned their trade from him and still answer when he sends.

### Weaknesses

Two Shares in Eight
: The other six owners want the money, and he cannot outvote them.

His Eyes
: He can no longer read a coastline at distance, and he will not admit it.

## Social

### Patrons and Allies

[[being-vishvrmhpr|Vishvara Mahapar]]
: His cabin boy and first mate, and the best seaman he ever trained.

The pilots of the bar
: Who bring him their surveys to set against his memory.

### Rivals

[[being-garunyataray|Garunya Tarayara]]
: Who wants his old hull and would sail her to death in a season.

The other six owners
: Who want the best price, and think his objection is sentiment.

### Affiliations

[[affiliation-chendrapur|Chendrapur]]
: Danhija, master of a merchant hull, retired.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: Vretin, who has completed one of the gods' Ordeals for Favor.

[[affiliation-rasikara|Rasikara]]
: Vretin of the Walk of Coals.

## Plot Hooks

The Owners' Meeting
: The six other owners meet at the bar to accept Garunya's offer. Samurat hires the party to buy two more shares before they sit down, from owners who do not want to sell.

The Last Passage
: If the Fortune is to be broken up, she must be sailed into the yard by a crew that will take her. Samurat asks the party to find one, and to sail with it.

The Log
: An entry in the Fortune's logs from thirty years ago records a shoal off a southern cape that the current charts do not show. A coaster has just been lost there, and the owners of its cargo want the log.
