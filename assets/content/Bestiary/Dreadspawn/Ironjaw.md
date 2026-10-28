---
shortcode: ironjaw
name: {full: Ironjaw}
type: being
subType: creature
description: "A metal-fused pack predator that hunts mountains and industrial wastes, marking territory with bones and claw-scratches."
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
    str: 1d4+12
    end: 1d4+12
    dex: 1d4+6
    agl: 1d4+8
    per: 1d4+8
    aur: 1d4+6
    wil: 1d4+10
    rea: 1d4+5
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Metal-Edged Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Metal-Edged Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Armour Charge
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Armour Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: blunt}
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
            roles: [vital, manipulator]
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
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
      weight: {base: 250, calc: "250"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[ironjaw|Ironjaw]]{float=top-left}

The thing at the head of the ravine is the shape of a wolf and the color of an old pot: gray, bronze and green-crusted, its whole body scaled in overlapping plates of something that rings faintly when it moves. Its head is too big for it, all jaw, and the jaw is lined with too many teeth, each with the dull shine of filed iron. It walks toward you slowly, and its claws strike sparks on the rock. Its breath smokes in the cold morning and smells of a forge. Behind it, on the ravine rim, three more of the same shape have stood up.

# Dossier {#dossier}

The Ironjaw is a dreadspawn, a made thing: a hunting beast the size and shape of a big wolf, two hundred and fifty pounds, plated all over in scales of metal that grow out of its hide, with a jaw of iron-hard teeth that bites through mail. It hunts in packs of four to eight across the stone uplands and badlands of the [[place-khzryndsrtrgn|Khazryn]]—the black rock of the [[place-dkrqrrgn|Diqraqor]] and the hollow ridges of [[place-idwkrrgn|Idvaqor]]—and holds a territory there that it marks with scratched rock and heaps of bones and defends against everything. The tribes say it was a wolf that dark magic got into and turned to metal. The scholars who class it with the dreadspawn say it was made as it is and made as a pack, since it cannot breed and every pack has always been met at full strength; nobody has seen a young one.

## Presentation

The build is a wolf's, long-legged and deep-chested, heavier through the shoulder. From nose to tail it is covered in scales of metal fused to the skin, some polished bright, some bronze, some crusted green and pitted, so that no two ironjaws look alike. The head is disproportionately large and the jaw juts forward, crowded with teeth that look like filed iron. The eyes are pale and very bright. The claws are metal-edged and spark on stone. The animal runs hot: its breath smokes in cool air and smells of forge-smoke, and the rock it has lain on is warm for an hour after. It grinds faintly as it moves, a sound like distant armor.

## In the Land

Ironjaw packs hold territories of many miles in the stone uplands: ravine systems in the Diqraqor, where the cisterns and the tombs of [[place-osikor|Oshiqor]] lie, and the ridges of Idvaqor that the road passes through on its last stretch toward the east. A pack marks its edges with deep claw-scores on prominent boulders and with heaps of cracked bones laid out at a ravine mouth, and the guides read those marks as plainly as a boundary stone. Inside its territory the pack hunts wild asses, gazelle, goats and anything else that walks; outside it, the pack turns for home. They den in caves and old workings in the rock, where the heat of their bodies keeps the cold off in the winter nights.

## Key Behaviors

A pack hunts by day or night as it pleases, in silence, and drives its prey toward a dead-end ravine, a drop or a place where the rest of the pack waits. It wounds and wears down its prey before it closes, each animal biting in turn while the rest circle. The pack has a leader, and the others give way to it. Ironjaws recognize a man they have met and remember a fight. When one of the pack is killed the rest stand over the body for a moment, and then attack harder than before. They are not hungry often; they kill to hold their ground as much as to eat, and a pack's bone-heaps hold more than it could ever have eaten.

## What the Tribes Do

The riders who sell passage through the ridges know where each pack's ground begins and take the strings round it, and a guide who finds fresh claw-scores on the path ahead turns back. A tribe whose grazing borders a pack's ground lets the border be. When a pack must be fought, the tribes fight it with mauls, axes and stones from above, because a sword or a spear point skids off the plates. Sour wine or vinegar thrown on the scales makes them pit and weaken, and a fight with ironjaws is a fight the tribes prepare for with jars of it. A dead ironjaw's plates are worth more than its weight in silver to the smiths of the oasis towns, who say no forge in [[place-worldthlrn|the World of Thalorna]] makes metal like it and none of them can work it.

## Signs

- Claw-scores cut deep and bright into dark boulders at a ravine mouth, at the height of a man's knee.
- A heap of cracked bones laid out in the open, more than any pack could have eaten.
- Prints like a big wolf's, with each claw-point scratched into the stone.
- Rock warm to the touch in a cave in the cold of the morning.
- A faint ringing grind on the wind at night from a ridge above the track.

## Combat Strategy

The pack surrounds, cuts one man out of the group and wears him down, biting in rotation while the others keep the rest of the party busy. It drives its prey toward a place it has chosen. When it judges a man is weak or off balance, an ironjaw charges and knocks him flat with its plated weight, and the others close. A lone ironjaw separated from the pack tries to rejoin it, and if it cannot, it fights to the death. Killing the leader throws the pack into confusion for a few moments, which is the best chance a party has. Blades do little; mauls, falling rock, acid and cold do more.

## Attack Methods

### Metal-Edged Bite

The jaws close with a grinding force that crushes bone and goes through mail. The iron teeth bite into metal that would blunt any natural fang.

### Raking Claws

The metal-edged claws slash at a man's legs and body and catch on armor, tearing away straps and links.

### Armor Charge

The ironjaw lowers its head and hits at a run with its plated body, knocking a man off his feet and driving him back into rock or over a drop.

## Special Abilities

### Metallic Plating

Cuts and thrusts skid off the plates. Heavy crushing blows do more, and acid and corrosion eat the plating and weaken it.

### Pack Coordination

Within sight or hearing of one another, ironjaws fight as one animal and strike harder and more surely. The death of the leader throws the pack into confusion for a few moments until another takes its place.

### Heat Resistance

The ironjaw runs hot and shrugs off fire and heat. Hard cold slows it and makes its plates brittle.

### Temporary Hardening

For a short time the ironjaw can harden its plates further, so that even a heavy blow does little, and it needs a rest before it can do so again.

### Endurance

An ironjaw fights on with terrible damage to its body as long as its head and chest are whole.

## Attributes

Strength
: 13-16 (1d4+12)

Endurance
: 13-16 (1d4+12)

Dexterity
: 7-10 (1d4+6)

Agility
: 9-12 (1d4+8)

Perception
: 9-12 (1d4+8)

Aura
: 7-10 (1d4+6)

Will
: 11-14 (1d4+10)

Reasoning
: 6-9 (1d4+5)

Creativity
: 6-9 (1d4+5)
