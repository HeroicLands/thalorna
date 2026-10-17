---
shortcode: raven
name: {full: Raven, aliases: []}
type: being
subType: creature
description: "A large, uncannily intelligent black bird thriving everywhere from deep wilderness to crowded cities, hovering between wild scavenger and civilized companion."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-raven, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+2
    end: 1d4+4
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+10
    aur: 1d4+5
    wil: 1d6+7
    rea: 1d4+6
    cre: 1d4+7
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 15}}
    - name: Swift Peck
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 54
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Swift Peck
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Rake
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 57
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Rake
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -3, aspect: edged}
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
      weight: {base: 3, calc: "3"}
      reachBase: 0
      bodyScaleBase: 0.6
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 80
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: terrestrial
        feetPerRound: 20
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[raven|Raven]]{float=top-left}

Two big black birds are sitting on the broken wall above the ford. Everything about them is black, the feathers, the heavy beak, even the eyes, so that they look like holes cut in the sky. One of them tilts its head and examines you with a depth of attention that is not like a bird's. It says something in a low, rolling croak. Then both lift off the wall together and follow the road ahead of you.

# Dossier {#dossier}

The Raven is the large black bird of the north, twenty to twenty-five inches tall with a wingspan of three and a half to four feet, living in the cliffs and fjords of the [[place-nrdlndsrgn|Nordlands]], the forests of [[place-vrystwald|Vristwald]] and the mountains of [[place-graznmntns|the Grazian range]]. It is clever, curious and a scavenger, and follows armies, hunts and caravans. [[lore-odvardty|Odvar]]'s two ravens, [[lore-hugvin|Hugvin]] and [[lore-munvin|Munvin]], are read as messengers and teaching figures.

## Presentation

A big bird, entirely black, in feathers that seem to take in the light. The head is large, with a powerful beak that can pierce leather and crack bone and dark eyes with an unsettling depth. The neck is thick and turns to nearly impossible angles. The wings are broad and strong, allowing swift flight and nimble turns. The feet are strong and can grip, clutch or perch indefinitely on rough ground.

## In the Land

Ravens live across the cold north: the cliffs and fjords of the Nordlands, the forests of Vristwald and the mountains of the Grazian range, and they follow armies, hunts and herds for what is left. A pair holds a crag or a tall tree for life and adds to the nest each year. In winter they gather in flocks at carcasses, dumps and the edges of villages.

## Key Behaviors

Ravens learn commands, recognize individual people, remember food-places for months after one visit and use simple tools. They live in families and communities and speak in dozens of calls. They eat nearly anything, scavenge and take small animals. They steal, hide and remember shiny things, and inspect anything new in their ground. At the nest they defend eggs and young fiercely.

## What the Nordmen Do

Odvar keeps two ravens, Hugvin for thought and Munvin for memory, and the Nordmen read the black birds that follow the host as a sign. A raven over a field of battle is a welcome sight, since it shows the dead will be seen to. Farmers dislike the flocks, and shepherds watch for them at lambing, when they take the eyes of a weak lamb. Ravens learn the faces of people who have wronged them, and can be taught to speak a few words. The black feathers are used in fletching and as charms.

## Signs

- A deep, croaking call from a crag, answered from another.
- A pair of black birds tumbling and rolling in the air above a ridge.
- A circle of ravens on the snow around a carcass, hopping and waiting for a wolf to finish.
- A large, black bird on a gallows or a gravestone that watches the road.
- A big stick nest on a ledge, lined with wool and hair.

## Combat Strategy

A raven will not engage larger creatures in direct combat, instead using speed and agility for quick strike-and-retreat tactics. The raven dives at a target, attempting to peck or rake with claws, and immediately pulls away to gain altitude. Against much smaller creatures (small animals, insects, children), ravens become more aggressive. A raven defending a nest or young becomes surprisingly combative, dive-bombing and striking repeatedly despite size disparity. Ravens coordinate effectively when hunting together, with multiple birds attacking from different angles.

## Attack Methods

### Swift Peck

The raven darts in with surprising speed and precision, directing its beak at exposed eyes, faces, or unarmored flesh. The peck is sharp and accurate, designed to wound or distract rather than inflict massive injury, followed immediately by the raven pulling back to a safe distance.

### Rake and Claw

If the raven perches on a target's body or shoulders, it can rake with its feet, using sharp talons and powerful leg muscles to tear exposed skin and inflict bleeding wounds. This attack is brief, as the raven will quickly withdraw.

## Special Abilities

### Keen Intelligence

The raven possesses problem-solving capability beyond typical animal instinct. It can learn commands, adapt tactics based on observation, recognize specific individuals, and solve simple puzzles involving cause and effect. Ravens can use tools in simple ways and remember information for extended periods.

### Acute Perception

The raven's vision is extraordinary, allowing it to spot movement from great distances and perceive details that would escape human notice. It can identify specific individuals from far away and navigate in dim light where humans would struggle.

### Complex Vocalizations

The raven can produce dozens of distinct sounds, some nearly resembling human words. This capability allows sophisticated communication with other ravens and — with training or magical enhancement — potential communication with humanoids.

### Adaptable Diet

The raven can survive on nearly any organic material, from carrion to living prey to plant matter, making it independent of specific food sources. This adaptability allows ravens to thrive in environments where specialized creatures would starve.

### Quick Reflexes

Despite not being the fastest creature, the raven's reactions are sharp and allow it to dodge incoming attacks with significant probability of success.

### Additional Information

Ravens form strong bonds with humans who treat them well and will remember acts of kindness or cruelty for years. A raven can be trained to carry messages, steal specific objects, or scout locations. Ravens are attracted to sources of magical power and often gather near sorcerers, fey locations, or areas of intense spiritual significance. In some cultures, ravens are considered prophetic or sacred, and harming one brings supernatural consequences.

## Attributes

Strength
: 3-6 (1d4+2)

Endurance
: 5-8 (1d4+4)

Dexterity
: 12-17 (1d6+11)

Agility
: 13-18 (1d6+12)

Perception
: 11-16 (1d6+10)

Aura
: 6-9 (1d4+5)

Will
: 8-13 (1d6+7)

Reasoning
: 7-10 (1d4+6)

Creativity
: 8-11 (1d4+7)
