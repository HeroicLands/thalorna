---
shortcode: fireflit
name: {full: Fireflit, aliases: []}
type: being
subType: creature
description: "A small, clever fire elemental serving as scout or messenger, harmless alone but a genuine threat when gathered into a burning swarm."
tags: [elemental]
data:
  packFolder: elementals
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
    complexion: null
    extra_features: []
sohl:
  kbcat: elemental
  attrRollFormula:
    end: 1d4+3
    dex: 1d6+16
    agl: 1d6+18
    per: 1d6+10
    aur: 1d4+9
    wil: 1d4+8
    rea: 1d6+6
    cre: 1d6+10
    str: 1d4
  items:
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 22}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 2}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 10}}
    - name: Scorching Touch
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 69
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Scorching Touch
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -5, aspect: fire}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Fire Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: breath
          name: Fire Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 0, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 10
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Body, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: headzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
      weight: {base: 1, calc: "1"}
      reachBase: 0
      bodyScaleBase: 0.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 100
        leaguesPerWatch: 8
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[fireflit|Fireflit]]{float=top-left}

The temple clerk feeds the last of the petitions into the brazier, sheet by sheet, and the paper curls and goes up in a column of sparks. One of the sparks does not go out. It hangs over the brazier, the size of a sparrow, a little lizard of flame with wings that beat so fast they are only a blur of light, and two bright points for eyes. It turns in the air and looks at you. Then it darts across the courtyard, so fast your eyes cannot follow it, and stops an inch from your face, and you feel its heat on your eyelashes, and smell your hair begin to singe, and it is gone again into the brazier with what you could swear was a laugh.

# Dossier {#dossier}

The Fireflit is a small fire elemental: a spirit of the fire-aspect that manifests as a winged lizard of flame no bigger than a sparrow, quick, clever, mischievous, and harmless alone. Fireflits are drawn to flames, to bright things and to places where fire is used with ceremony, and they serve larger fire spirits and some mages as scouts and messengers. In a swarm they are dangerous. They are commonest round the temples of [[place-tantsouregin|Tāntsou]], where the burning of written petitions is the ordinary way of sending a request to heaven, and the Tāntsou have their own understanding of what the fireflits are doing there. Like every elemental, a fireflit can be put out, and it comes back.

## Presentation

A fireflit is a slender lizard-shape of flame, about the length of a hand, with wings like flickering sheets of fire that beat hundreds of times a breath and blur into a hum. Its eyes are bright points of white. It glows orange to yellow to near white as it moves, and it sheds a trail of sparks. It moves faster than the eye can follow, darting and stopping and darting again. It makes a faint crackling hum, and when it is pleased, a sound like a laugh made of sparks. Up close, it is hot enough to singe hair and blister skin.

## In the Land

Fireflits gather wherever fire is plentiful and handled with care or with ceremony: round forges, kilns and great hearths, round volcanic vents and burning ground, and round places where the spirit realm lies close. In Tāntsou they cluster round the temples, where braziers burn petitions day and night, and round the compounds of the [[lore-wanduo|Wánduo]], whose artificers work the elemental energies into the empire's enchanted arms. They live in the fires themselves, moving from one to another through any fire that joins them, and they leave when a fire dies. A large fire draws them from a distance.

## Key Behaviors

Fireflits are curious and playful. They are drawn to shiny objects, bright lights and fires of every kind, and they play tricks: they singe a sleeve, steal a spark from a lamp and carry it into a hayloft, dart through a candle-flame and make it gutter. They remember faces and take to particular people, following them about, and take against others. They talk with each other and with larger fire spirits in ways no one can follow. A single fireflit rarely does real harm. A swarm, roused, is something else: dozens of them darting in and out, burning, setting everything alight. When one is put out, it goes up in a puff of smoke, and comes back, usually within hours, usually to the same fire.

## What the Tāntsou Do

The [[affiliation-tengwouronglei|Celestial Order]] holds that burning a petition transmits it to the celestial bureaus, a category of fire, ritual-fire, kept by the Lord of Fire, [[affiliation-wojingja|Wōjing Ja]], in close and quarrelsome coordination with the Bureau of Transformation. Many temple clerks hold that fireflits are the lowest clerk-spirits of that service, carrying the burned petitions up, and they treat a fireflit hovering over a brazier with the respect owed to a courier: they do not swat it, they do not put out its fire, and they finish their burning before they speak. The [[lore-tanchei|Tānchéi]] who keep the formal theology have never confirmed the belief and never forbidden it. Temple wardens keep water-jars by every brazier all the same, and a swarm that has got into a temple's archive is put out by the jarful, the clerks apologizing to it as they pour. Wánduo artificers summon fireflits as scouts and errand-runners, and pay them in charcoal.

## Signs

- A spark that hangs in the air over a fire and does not go out.
- Small burns and singed spots on cloth, paper and hair, as if from a hundred tiny touches.
- Candles and lamps that gutter all at once in a still room, then flare.
- Small fires started in strange places, a hayloft, a bookshelf, a purse, with no one near.
- A crackling hum and a sound like laughter at the edge of a fire at night.

## Combat Strategy

A fireflit avoids a real fight. It harasses, darting in to burn and out again before anyone can strike, and it uses its speed to stay out of reach. Fireflits fight together when they fight at all, attacking a man from every side at once, setting his clothes and hair alight, and using fires round them as cover and as roads. They retreat into any large fire when they are threatened. Water puts one out at once, and a bucket of water thrown into a swarm puts out many.

## Attack Methods

### Scorching Touch

The fireflit darts in and touches bare skin or cloth. The burn is small and very hot, and cloth, paper or hair catches fire from it.

### Fire Breath

The fireflit breathes a tiny, very hot jet of flame that burns skin and sets alight anything that will burn. Many breathing together are a real danger.

## Special Abilities

### Fiery Wing Strike

At full speed its wings cut like edges of flame, small slashing burns, quick and hard to defend against.

### Preternatural Speed

It changes direction in an instant, and no ordinary blow can follow it.

### Merge with Flames

It slips into any fire larger than itself and is hidden and protected there, and it passes instantly through any fires that touch each other. Putting out the fire drives it out.

### Heat Aura

The air round it is hot, and anything that will burn near it may catch fire if it stays.

### Fire Empathy

It senses and speaks with other fire spirits and with flames themselves. It can coax a fire to spread, and it deals with larger fire spirits as an equal.

### Water Weakness

A splash of water or a touch of ice puts it out at once.

## Attributes

- **Endurance:** 4-7 (1d4+3)

- **Dexterity:** 17-22 (1d6+16)

- **Agility:** 19-24 (1d6+18)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 10-13 (1d4+9)

- **Will:** 9-12 (1d4+8)

- **Reasoning:** 7-12 (1d6+6)

- **Creativity:** 11-16 (1d6+10)

- **Strength:** 1-4 (1d4)
