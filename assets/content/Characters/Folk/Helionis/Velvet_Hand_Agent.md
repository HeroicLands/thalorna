---
shortcode: vlvthndgnt
name: {full: Velvet Hand Agent}
type: being
subType: npc
description: "A companion, tutor or servant in a Kalidrian or Helionite household who reports what the household says to the Velvet Hand, and who is trained to be overlooked."
tags: []
data:
  icon: icon-person
  templatePriority: null
  archetypes: [courtier, infiltrator]
  occupation: Companion
  lore: []
  culture: helioniteclt
  homes: [kalydria2]
  affiliations: {velvethand: {rank: 3}}
  socialTies: {}
  gender: female
  species: humanflk
  born: null
  died: null
  height: null
  weight: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
  packFolder: helladhelionis
  items:
    - {key: estc, model: weapongear-estc, kind: weapon}
    - {key: slkdress, model: armorgear-slkdress, kind: clothing}
    - {key: vglv, model: armorgear-vglv, kind: clothing}
    - {key: ltshoe, model: armorgear-ltshoe, kind: clothing}
    - {key: slkclk, model: armorgear-slkclk, kind: clothing}
    - key: silverflask
      name: "Silver flask (fine work, engraved)"
      kind: miscgear
      system: {weight: 1}
    - key: theatricalmask
      name: "Theatrical mask (leather, decorated)"
      kind: miscgear
      system: {weight: 1}
    - {key: velvetcoinpurse, name: Velvet coin purse, kind: miscgear, system: {weight: 1}}
    - {key: pence, model: miscgear-pence, kind: miscgear, system: {quantity: 75}}
    - {key: gldcrwn, model: miscgear-gldcrwn, kind: miscgear}
    - {key: bpchmd, model: containergear-bpchmd, kind: container}
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 16}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 13}}
    - {model: skill-semrnscrpt, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-masn, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-txtl, system: {masteryLevelBase: 13}}
    - {key: estc, model: sohl-sohl-weapongear-estc}
    - {key: slkdress, model: sohl-sohl-armorgear-slkdress}
    - {key: vglv, model: sohl-sohl-armorgear-vglv}
    - {key: ltshoe, model: sohl-sohl-armorgear-ltshoe}
    - {key: slkclk, model: sohl-sohl-armorgear-slkclk}
    - key: silverflask
      name: Silver flask (fine work, engraved)
      type: miscgear
      system: {shortcode: silverflask, weight: 1, value: 100, durability: 3}
    - key: theatricalmask
      name: Theatrical mask (leather, decorated)
      type: miscgear
      system: {shortcode: theatricalmask, weight: 1, value: 100, durability: 3}
    - key: velvetcoinpurse
      name: Velvet coin purse
      type: miscgear
      system: {shortcode: velvetcoinpurse, weight: 1, value: 100, durability: 3}
    - {key: pence, model: sohl-sohl-miscgear-pence, system: {quantity: 75}}
    - {key: gldcrwn, model: sohl-sohl-miscgear-gldcrwn}
    - {key: bpchmd, model: sohl-sohl-containergear-bpchmd}
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

A Velvet Hand Agent is a Helionite woman of any age past twenty who is easy to forget. She dresses to the household she serves, speaks when spoken to, and stands where the talk is.

# Dossier {#dossier}

**Companion, tutor or servant in a household of [[place-kalydria2|Kalidria]]. Reports to the [[affiliation-velvethand|Velvet Hand]].**

A Velvet Hand Agent holds a place in a household whose talk the [[affiliation-velvethand|Velvet Hand]] wants to hear, as a companion at its table, a tutor to its children or a maid in its rooms. Her cover is a good reference and a pleasant manner. The Hand recruits such women from the graduates and dropouts of the [[affiliation-slvrvlacdmy|Academy of the Silver Veil]], whose skills make an excellent hetairin and an excellent spy, and from the servants, musicians and tutors that a placement agency supplies.

## Background

**The training.** She learned to listen before she learned to speak, and to remember a conversation word for word.

**The placement.** A placement agency or a patron's recommendation put her in the household. She keeps the place by being useful, and she is rarely sent away.

**Now.** Her cell knows only its handler, and she knows only hers.

## Psyche

### Personality

She is warm, attentive and unremarkable by design. She agrees with whoever is speaking.

### Motivation

She wants her place kept and her reports delivered. She wants to be worth more to the Hand than the household is to her.

### Strengths

She remembers what she hears, reads a room and passes a coded phrase in ordinary small talk.

### Weaknesses

She has no one in the household to trust and no one in the Hand to ask. She does not fight.

## Social

### Affiliations

- **[[affiliation-velvethand|The Velvet Hand]]**: made member, placed in a household and answerable to a handler.

## Plot Hooks

1. **The new tutor.** A merchant about to sign a contract at a patron family's table wants a party to learn whether the tutor the children adore is what she seems, before the family hears what he has said in front of her.
2. **The courted dropout.** A girl who left the Academy before her license has taken a place in a patron's house, and the Academy wants to know who placed her there and what she has already said.
3. **The quotation.** A line of Helionite poetry said at a dinner draws the answer of a complementary verse from a servant, and a party member who knows the second line is watched.
4. **The leaving.** A trusted companion gives notice with no reason, and the household's master wants a party to find out where she goes.

:::secret {title="What she reports"}
She is a made member of the Velvet Hand, and her place in the household is the Hand's listening post. She writes down what she hears and passes it to her handler by a courier she knows by sight and not by name. Which household she serves, who her handler is, what she has already sold and to whom, and which verses she answers to are the Game Master's choice for the table.

She has never met the Hand's council and could not betray it if she tried. A party that exposes her learns the name of her handler and no more, and the Hand sells the party's interest in her to whoever asks.

**Hook: the verse.** A party that answers her verse correctly is taken for an initiate and offered a letter to carry.

**Hook: the reader of letters.** The household's master suspects a servant and asks the party to watch the wrong one.
:::
