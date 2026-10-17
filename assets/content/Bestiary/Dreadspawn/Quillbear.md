---
shortcode: qllbr
name: {full: Quillbear, aliases: []}
type: being
subType: creature
description: "A reclusive abomination of bear strength and porcupine quills that lairs in deep burrows and turns explosively aggressive when threatened."
tags: [dreadspawn]
data:
  packFolder: dreadspawn
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d6+18
    end: 1d6+14
    dex: 1d4+9
    agl: 1d6+6
    per: 1d6+10
    aur: 1d6+6
    wil: 1d4+13
    rea: 1d6+4
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 22}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 50}}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 5, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Quill Barrage
      type: skill
      system:
        shortcode: quill
        subType: combattechnique
        masteryLevelBase: 57
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: quill
          name: Quill Barrage
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Pile-Driver Charge
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Pile-Driver Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: *a1
            canHoldItem: false
            probWeight: 1
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
      weight: {base: 300, calc: "300"}
      reachBase: 0
      bodyScaleBase: 1.57
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[qllbr|Quillbear]]{float=top-left}

The shepherd's path climbs through scrub oak and stops at a bank of raw earth, a great heap of it, thrown out of a hole in the hillside wide enough to drive a cart into. Something is in the hole. You hear it first, a low, irritable grunting and a dry rattle like a sheaf of arrows shaken in a quiver. Then it comes out backward, and turns: a bear, far bigger than any bear, and every inch of it bristles with quills as long as your forearm, black banded with white, all of them rising as it sees you, until it is twice its size and looks like a thicket of spears. It shakes itself, and the rattle becomes a roar.

# Dossier {#dossier}

The Quillbear is a dreadspawn in the shape of a huge bear covered in long, barbed, venomous quills: ten to fourteen feet long, seven to nine feet tall standing, and very heavy, though not as heavy as its size suggests. It digs deep, many-chambered burrows and lives in them alone, and it is reclusive and unaggressive until something comes near its burrow, and then it is murderous: it charges, rakes and shoots quills that paralyze. One lives in the [[place-thuravelhills|Túravel Hills]] of southern [[place-provenzrgn|Provenzia Region]], the low, wooded, poorly mapped hills that people who live near them do not go far into without a reason. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The quillbear is built like a bear, with massive shoulders, thick limbs and a broad heavy head, but its body is covered almost entirely in quills six to twelve inches long, black banded with white, barbed at the tips and slick with venom. When it is calm the quills lie flat and it looks like a shaggy black bear; when it is roused they rise and rattle and it doubles in apparent size. Its face and belly are bare, gray-skinned and scarred, and its claws are long and heavy, made for digging. Its eyes are small and red-brown. It smells strongly of earth and musk, and it grunts and mutters to itself constantly as it goes about.

## In the Land

The Túravel Hills are good pasture and fair timber, thinly held, and mapped with a vagueness unusual in so well-surveyed a kingdom. The quillbear's burrow is in a deep fold of the higher hills, a hillside riddled with tunnels, several entrances and heaped spoil, and it ranges over a few miles of oak scrub and pasture round it. It eats roots, acorns, honey, carrion, sheep and anything else it can dig up or catch, and it stores food in its burrow. In winter it sleeps there. It does not come near the villages at the hills' edges and has never been seen on the roads that skirt them.

## Key Behaviors

The quillbear spends most of its time in or near its burrow, digging, extending its tunnels, and dragging food in. It is a fine engineer: the burrow has many entrances, vaulted sleeping chambers and store-chambers, and it can close a tunnel or bring one down on purpose. It is reclusive and avoids men when it can. When something comes near the burrow, or corners it, it raises its quills and attacks. It eats plants that are poisonous to other animals without harm, and its own venom does not touch it.

## What the Hill People Do

The shepherds who take flocks onto the higher ground keep to paths that are not written down anywhere, and those paths go well round the fold where the quillbear lives. A shepherd who loses a ewe on that side of the hill does not go after it. The villagers at the hills' edges do not talk about the creature to outsiders any more than about anything else in the hills, and the antiquarians who come collecting the old ballads have not been told of it; one of the ballads, about a "spear-backed bear" that guards a hill and cannot be killed by a man who goes alone, is reckoned among the most fanciful. Dead quills, shed on the hillside, are gathered by the villagers and sold at the coast as needles for sailmakers, with the barbs filed off. The [[affiliation-ordoarcanis|Thordimalon]], which takes an interest in the hills, has not yet learned what the needles are.

## Signs

- Great banks of fresh earth heaped at the mouths of holes in a hillside, wide enough to crawl into standing.
- Black-and-white quills a foot long lying in the grass and stuck in tree bark, barbed at the tip.
- Oak scrub and pasture dug over in long trenches, as if for roots.
- A grunting, muttering voice under the ground, heard through the soil on a still day.
- Sheep found dead with quills in them, and paralyzed but living sheep lying near them.

## Combat Strategy

A quillbear charges first, with its whole weight, to knock its enemies down and drive its quills into them. Once it is close it rakes with its claws and grapples, and every contact drives in more quills. At a distance it shakes itself and launches a barrage of quills. It does not run short of quills for long, because they grow back fast. If it is pressed near its burrow it retreats underground and comes out of another entrance behind its enemies, or brings a tunnel down on whoever follows it in. Fire is the thing it fears: its quills and its fur burn, and smoke drives it out of its burrow.

## Attack Methods

### Raking Claws

The quillbear rakes with its huge digging claws, quickly and in combination, tearing through leather and mail and opening deep wounds.

### Quill Barrage

The quillbear shakes and flexes and launches a spray of quills at its enemies, fast and accurate over a surprising distance. Each quill drives in deep, the barbs hold, and the venom goes in with it.

### Pile-Driver Charge

The quillbear hurls its whole quilled body at its enemy at a run. The blow knocks him down and breaks bones, and the quills drive into him as it hits.

## Special Abilities

### Quill Regeneration

Its quills grow back fast, and it can launch dozens in a fight and still be fully covered.

### Paralyzing Venom

The venom on the quills enters the blood and paralyzes by degrees, outward from the wound, until the victim cannot move; untreated, it can kill.

### Burrow Network

It digs fast and well, and its burrow has many exits and chambers. It retreats underground, seals tunnels behind it, and brings tunnels down on pursuers.

### Venom Immunity

Its own venom and most other poisons do not harm it.

### Fire Weakness

Fire burns its quills and fur and drives it into a panic, and smoke forces it out of its burrow.

## Attributes

- **Strength:** 19-24 (1d6+18)

- **Endurance:** 15-20 (1d6+14)

- **Dexterity:** 10-13 (1d4+9)

- **Agility:** 7-12 (1d6+6)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 7-12 (1d6+6)

- **Will:** 14-17 (1d4+13)

- **Reasoning:** 5-10 (1d6+4)

- **Creativity:** 6-9 (1d4+5)
