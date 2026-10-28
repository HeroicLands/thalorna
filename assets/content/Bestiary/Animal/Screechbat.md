---
shortcode: scrchbt
name: {full: Screechbat}
type: being
subType: creature
description: "A small, pack-coordinated cave predator with an eight-foot wingspan, weaponizing echolocation and sonic screeches to disorient prey before the kill."
tags: [animal]
data:
  packFolder: animals
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
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+6
    end: 1d4+9
    dex: 1d6+14
    agl: 1d6+16
    per: 1d4+13
    aur: 1d6+6
    wil: 1d6+10
    rea: 1d4+9
    cre: 1d6+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 28}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Claw Rake
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Claw Rake
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -1, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
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
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
      weight: {base: 8, calc: "8"}
      reachBase: 0
      bodyScaleBase: 0.94
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 80
        leaguesPerWatch: 6
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[scrchbt|Screechbat]]{float=top-left}

The old gallery runs on past the last timber prop, and the air in it is warm and sour with droppings. Your lamp shows the roof crusted with something dark that shifts. Then the sound comes, a shriek so high and hard that it lands like a blow, and it goes through your ears into your teeth. The lamp-flame shudders. The dark roof comes loose all at once and turns into wings, wide leathery wings with thin bodies slung between them, wheeling round your head in the gallery, and the shriek comes again from every side, and you cannot hear the man beside you shouting.

# Dossier {#dossier}

The Screechbat is a large, lean, pack-hunting bat, two to three feet tall hanging, with a wingspan of eight to ten feet and a body that weighs about eight pounds. It roosts in colonies in caves and old mine workings, comes out at dusk to hunt birds, bats and small animals, and in a pack it attacks larger prey by screaming at it until it is deaf, dazed and helpless, and then biting. In the [[place-moktur|Moktur]] heights, where the empire's mines have been cutting galleries into the mountains for generations, the worked-out levels are full of them, and the miners know them as the thing that lives in the dark beyond the last lamp.

## Presentation

A screechbat is mostly wing. The membranes are dark brown or black and leathery, stretched over long finger-bones, and when it hangs it wraps them round itself like a cloak. The body slung between them is thin and bony, furred short and dark, with hooked feet made for hanging and raking. The head is large for the body, with big, ridged ears, a pushed-in snout folded with skin, tiny weak eyes, and a wide mouth full of small sharp teeth. In flight it is silent except for its clicks, which a sharp-eared man can just hear, and its screech, which nobody can miss. A roost smells strongly of ammonia and old droppings, and the floor under it is deep in dung.

## In the Land

Screechbats roost in deep, dark, still places in steep country, and the mountains of Moktur give them caves, gorges and, most of all, the worked-out galleries of the iron, copper and silver lodes above [[place-ferrovan|Zargonara]] and [[place-stennvold|Stennvold]]. A colony of a few dozen to a few hundred takes an abandoned level and stays for generations. At dusk the colony streams out of the adit-mouths and over the forested slopes toward the [[place-vrystwald|Vristwald]], hunting birds, other bats, mice and lizards, and comes back before dawn. In winter the colonies sleep, packed tight in the deepest galleries where the rock keeps warm, and a miner who breaks into a sleeping colony wakes it.

## Key Behaviors

Screechbats hunt in packs and find everything by sound. Each one clicks constantly in flight and listens to the echoes, and a pack hunting together calls among itself in a running chatter of clicks and chirps that coordinates the hunt. They take small prey on the wing. For larger prey, a lone goat on a ledge, a deer in a gorge, a man on a night path or in a gallery, the pack surrounds it and screams, all together, until it falls or freezes, and then they drop on it. They are clever and learn the habits of the mines: they know which galleries have men in them and at what hours. They are nearly blind in strong light and will not fly in daylight or into a bright fire.

## What the Miners Do

The mining camps of Moktur close off a worked-out level with a timber door or a wall of dry stone, and a gallery that opens into an old level is not worked without a lamp-boy at the back keeping a second light burning. Miners go into old ground with wax or wool in their ears, and they carry bright lamps and pitch torches, which the bats will not face. The half-[[lore-varokhiclt|Varokhi]] crews at Stennvold leave the colony in the old levels a share of the carcass of every goat they slaughter, set out at the adit-mouth at dusk, and they say that a fed colony does not come into the working levels; the overseers call it waste and have never stopped it. The bat-dung from the roosts is dug out and sold to the farms below as fertilizer, and the men who dig it go in at midday, in the hours the colony sleeps soundest.

## Signs

- A sharp reek of ammonia from an adit-mouth or a cave, and dung deep on the floor beneath a roost.
- A stream of large dark wings pouring out of a mountainside at dusk and back in before dawn.
- A faint clicking overhead on a still night, just at the edge of hearing.
- Birds and bats found dead with small, many-toothed bites at the neck, and no other mark.
- Dogs and mules that will not go past the mouth of an old working after dark.

## Combat Strategy

A pack attacks only what it has surrounded or what has come into its roost. It screams first, all the bats together, from every side and above, to deafen, daze and frighten its prey, and it keeps screaming while it attacks. The bats isolate one victim, the smallest or the one who falls, and drop on him to bite and rake while the rest keep screaming at the others. They stay out of reach of weapons when they can, darting in and out. In a confined gallery the sound is far worse than in the open. Light breaks a pack faster than steel: a bright fire or a burst of flame scatters it, and when a pack has lost several bats it flees back into the dark.

## Attack Methods

### Bite

The bat drops onto a man who is already deafened or down and bites at the face, the eyes, the neck and the hands. Each bite is small and bleeds freely, and a pack bites many times.

### Claw Rake

Landing on a man, the bat rakes with its hooked feet to hold on and tear, and it rakes as it lifts away again. The claws scratch and cut exposed skin and catch in hair and clothing.

## Special Abilities

### Sonic Scream

The screech is a narrow, piercing blast of sound aimed forward, which causes pain, deafness, dizziness and terror in whoever it strikes. One bat is painful; a pack screaming together in a gallery can drop a man to his knees, leave him deaf for hours, and keep him from hearing orders or from thinking clearly. Wax or wool in the ears helps a little.

### Echolocation Mastery

The bats see by sound. In complete darkness they know the shape of a gallery and the place and movement of everything in it, and darkness and concealment do not hide anyone from them.

### Aerial Agility

They turn and dart in flight faster than a man can follow, inside a gallery as easily as in the open, and they are very hard to strike with a hand weapon.

### Pack Coordination

The pack talks constantly in clicks and chirps and hunts as one, surrounding, isolating and taking turns, so that a man who turns to strike one is screamed at and bitten from behind.

### Night Adaptation

Screechbats hunt in near-total darkness but are nearly blinded by sudden bright light. A strong lamp or a fire held up in a gallery dazzles and disorders them.

## Attributes

Strength
: 7-12 (1d6+6)

Endurance
: 10-13 (1d4+9)

Dexterity
: 15-20 (1d6+14)

Agility
: 17-22 (1d6+16)

Perception
: 14-17 (1d4+13)

Aura
: 7-12 (1d6+6)

Will
: 11-16 (1d6+10)

Reasoning
: 10-13 (1d4+9)

Creativity
: 7-12 (1d6+6)
