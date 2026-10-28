---
shortcode: nghtwrth
name: {full: Nightwraith}
type: being
subType: creature
description: "A giant bat made into a cunning nocturnal killer, hunting the night skies and lightless caverns with ruthless precision."
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
    str: 1d6+10
    end: 1d4+13
    dex: 1d6+14
    agl: 1d6+16
    per: 1d6+16
    aur: 1d6+6
    wil: 1d4+13
    rea: 1d4+9
    cre: 1d6+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Blood-Draining Bite
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
          name: Blood-Draining Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Raking Talons
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
          name: Raking Talons
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: edged}
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
          - {name: Left Wing, shortcode: lwingzone, probWeight: 2}
          - {name: Body, shortcode: torsozone, probWeight: 4}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
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
            bodyZoneCode: rwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 300, calc: "300"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 100
        leaguesPerWatch: 10
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[nghtwrth|Nightwraith]]{float=top-left}

The oldest quarter of the city of the dead is all stepped tombs and stairs going down into the limestone, and at dusk the stairs begin to breathe. A warm, sour wind comes up out of them, and then the first shape: a bat with a wingspan wider than a cart is long, gray-black and thin as a starved dog, its skin like old leather pulled tight over the bones so that every vein shows. It hangs for a moment in the stairwell, turning its head with its great ears toward you. Then another comes up past it, and another, and they rise over the tombs in a slow spiral against the last of the light, and the sound they make is too high to hear and goes into your teeth.

# Dossier {#dossier}

The Nightwraith is a dreadspawn made in the shape of a giant bat, fifteen to twenty feet across the wings and about three hundred pounds, gaunt and gray-black, which hunts by night, drinks the blood of what it catches, and stuns its prey with a focused scream. Nightwraiths roost together in deep, dark places by day and hunt alone by night. A colony of them roosts under the oldest quarter of [[place-nykhtion|Nikhtion]], the city of the dead of the [[affiliation-byzarianlg|Bizarian League]] in the arid highlands inland from [[place-nesthiros2|Nesthiros]], where the stepped tombs and rock-cut chambers go down into the limestone further than anyone has mapped. Like every dreadspawn they were made and they cannot breed. The colony was made all at once and only gets smaller.

## Presentation

A nightwraith is mostly wing: vast, membranous wings of dark, dull skin that takes no shine, stretched on long finger-bones and hooked at the thumbs. The body between them is lean to the point of emaciation, its skin translucent gray-black like rotted leather, with veins and sinews visible beneath it. The head is long-muzzled, with huge ridged ears, small dark eyes, and long, slender fangs. The feet end in hooked talons strong enough to hold a man. It flies silently except for the scream, which is mostly too high to hear and is felt as pressure and pain. A roost smells of ammonia, old blood and dust.

## In the Land

Nikhtion has been in use for more than two thousand years, and its oldest quarter holds monumental tombs in styles nobody remembers, stepped pyramids and underground chambers cut into the limestone. The nightwraith colony roosts in the deepest of those chambers, dozens of them hanging together in the dark through the day. At dusk they come up out of the stairways and spread out over the arid highlands to hunt, each to its own range: goats and sheep on the hill pastures, donkeys at the caravan halts on the Nesthiros road, deer, dogs, and travelers sleeping out. They are back underground before dawn. Daylight is nearly unbearable to them.

## Key Behaviors

A nightwraith hunts alone at night and comes back to the colony by day. It finds prey by sound, by its echoes and by the heat and heartbeat of a living body, and attacks from above and behind, raking with its talons and biting, and it feeds by drinking blood, clinging to its victim with its talons while it drinks. Once it has tasted a particular victim's blood it fixes on him and pursues him, and a bleeding man cannot hide from it. It is clever and remembers: it learns the habits of the herders and the halts, the hours of the tomb-keepers' rounds, and which of them carry fire.

## What the Tomb-Keepers Do

The hereditary keepers of Nikhtion, who say they do not sell graves but keep them, keep the colony too, in their way: nobody is allowed into the deep chambers of the oldest quarter, the stairways down to them are gated, and the keepers' rounds there are made at midday with lamps. At dusk the keepers withdraw from the oldest quarter, and the night watches stand in the newer districts with braziers burning. Mourning families who come for the festivals are told to be indoors by dark. The council of priests and keepers has never asked the League's cities for help against the colony, and a merchant house that suggested clearing it was reminded, politely, that its own ancestors lie in the oldest quarter and might be disturbed. Herders on the highlands round the city fold their flocks at night under roofs and keep fires burning.

## Signs

- A warm, sour wind rising out of a tomb stairway at dusk.
- Large shapes spiraling up over the tombs at dusk and coming down before dawn.
- Sheep and goats found dead in the morning, drained and pale, with long talon-scratches on the back and two deep punctures at the neck.
- Ammonia reek and old droppings at the gate of a deep stairway.
- A pressure in the ears and an ache in the teeth at night with no sound to account for them.

## Combat Strategy

A nightwraith attacks from above and behind, rakes and bites, and climbs out of reach again before its prey can strike back. It makes pass after pass. Against several men it screams to daze them, then picks one, seizes him in its talons and drags him away from the rest to feed. It pursues a bleeding victim with fixed determination. Bright light pains it and fire overwhelms its senses; daylight sends it fleeing for darkness, and a party with strong lights and fire is a party it avoids.

## Attack Methods

### Blood-Draining Bite

The nightwraith drops onto its victim and drives its fangs into exposed flesh, anchors itself with its talons, and drinks. He loses blood fast and weakens, and the bite carries a venom that keeps the wound bleeding.

### Raking Talons

It rakes with its hooked talons as it passes over, opening long cuts, and it clamps them on a victim to hold him while it feeds or to carry him off.

## Special Abilities

### Sonic Screech

The nightwraith focuses its scream at the men in front of it. It dazes and disorients them, throws them off balance, and breaks the concentration of anyone working magic.

### Echolocation Mastery

It sees everything in complete darkness by its echoes, and it senses heartbeat, breath and body heat with an accuracy close to sight.

### Nocturnal Predation

In darkness and low light it moves and strikes faster and perceives more, and anyone trying to strike or follow it in the dark finds it very hard.

### Blood Hunger

Once it has tasted a victim's blood it fixes on that one and pursues him relentlessly, and a bleeding man cannot easily hide from it.

### Light Weakness

Bright light pains it and drives it off, and fire overwhelms its hearing. Caught in daylight, it flees for the nearest darkness.

## Attributes

Strength
: 11-16 (1d6+10)

Endurance
: 14-17 (1d4+13)

Dexterity
: 15-20 (1d6+14)

Agility
: 17-22 (1d6+16)

Perception
: 17-22 (1d6+16)

Aura
: 7-12 (1d6+6)

Will
: 14-17 (1d4+13)

Reasoning
: 10-13 (1d4+9)

Creativity
: 7-12 (1d6+6)
