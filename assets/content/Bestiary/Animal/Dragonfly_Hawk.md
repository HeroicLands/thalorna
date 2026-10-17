---
shortcode: drgnflyh
name: {full: Dragonfly Hawk, aliases: []}
type: being
subType: creature
description: "A dragonfly scaled to nightmare size, an agile aerial hunter of rivers, marshes, and coasts that strikes prey by sight."
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
    str: 1d6+8
    end: 1d6+9
    dex: 1d6+13
    agl: 1d6+14
    per: 1d6+11
    aur: 1d4+7
    wil: 1d6+8
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 33}}
    - name: Shearing Mandible
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 68
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: mandible
          name: Shearing Mandible
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: edged}
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
          - {name: Thorax, shortcode: thoraxzone, probWeight: 1}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Thorax
            shortcode: thoraxpart
            bodyZoneCode: thoraxzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 15, calc: "15"}
      reachBase: 0
      bodyScaleBase: 1.06
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

![[drgnflyh|Dragonfly Hawk]]{float=top-left}

The boat is halfway across the lake when the whine starts, high and thin, like a saw on metal somewhere behind the reeds. The boatman stops rowing. It comes in low over the water at the speed of a stooping falcon, five feet of blue-green segments flashing in the sun, four wings a blur, and checks dead in the air above the stern with the hum beating down on you. Two eyes like faceted jewels the size of fists turn, and the mandibles under them open and close.

# Dossier {#dossier}

The Dragonfly Hawk is a dragonfly five to seven feet long with a wingspan of six to eight, a hunter of the open water of [[place-vrystwldrvrs|Vristwald Rivers]] and lakes and the marshes of [[place-grkrhlmrgn|Grukarholm Region]], which takes birds, fish and small animals on the wing and from the surface and will take a child or a dog from a landing. It weighs fifteen pounds, most of it wing-muscle, and it is the fastest thing in the air over the northern forest. The Varokh fishing villages along the rivers know each one that hunts their stretch of water by its perch.

It is dangerous to a grown man only when he is in a boat or on a bank with nowhere to go. There it comes in again and again, and nothing a man carries reaches it.

## Presentation

A long, slim body of jointed chitin that shows blue, green or violet by the light, ending in a flattened tail. The head is small and nearly all eye: two faceted domes that see almost the whole sky at once. Below them the mandibles are a pair of shearing blades. The thorax carries four long clear wings that beat too fast to see and make the whine the villages listen for, and six legs hang from it, hooked, folded for flight and spread to seize. The whole animal gleams like oiled metal.

## In the Land

Dragonfly Hawks hunt the slow brown rivers, the lake systems and the flooded margins of the central forest belt, and the great marsh of Grukarholm to the east, and they are found down the rivers of [[place-vrystwald|Vristwald]] as far as the landings. Each holds a stretch of water from a perch over it, a dead snag or an overhanging branch, and returns to the same perch every evening. They are commonest where the water is broad and open, at the lake mouths and the river bends, and absent from the deep forest and the dry uplands. They hunt by day and roost by night, and the first cold of autumn puts them down until the thaw.

## Key Behaviors

The hawk patrols its water in long, fast passes and hovers to look. It takes a bird out of the air, a fish from just under the surface, a frog from a lily-pad, a duckling, a water-rat, and, where it has learned the habit, a chicken from a landing or a small dog from a jetty. It hunts alone except in the few days of the midsummer mating, when a lake may carry a dozen at once, which is the week the fishing villages keep their children indoors. It sees everything that moves below it and learns a boat's times.

## What the Villages Do

A fishing village that has a hawk on its water knows its perch and its hours and nets the other side of the lake at midday. Children are kept off the landings when the whine is heard. A man working a boat alone keeps a net to hand, since a hawk that has been netted once is wary of that boat afterward, and a few of the river villages set a tall frame of poles and cord over the landing, which stops the stoop. The wings, dried flat, are hung in the longhouses as a thing worth having; the eyes are taken by the Weskár of the owl villages for a reason they do not explain.

## Signs

- A high, thin whine over open water on a still day, like a saw on metal, rising and falling.
- A dead snag or a leaning birch over a bend with the bark worn at one place and fish-bones at its foot.
- Fish lying on a bank with the heads sheared off clean.
- Waterfowl that will not settle on one reach of the lake.
- A flash of blue-green crossing the water faster than a bird, low, and gone.

## Combat Strategy

The hawk stoops and climbs. It comes in low and fast, strikes once with the mandibles, and is away before a man has turned round; then it comes again from another quarter. It never closes to grapple a thing it cannot lift, and against a party in the open it wounds one person repeatedly rather than fighting several. On water a boat can do nothing but keep rowing for the reeds, where the hawk will not follow among the stems. A net or a thrown cloak across the wings brings it down; so does a bow in a steady hand, because the stoop comes in on a straight line.

## Attack Methods

### Shearing Mandible

The hawk dives and bites as it passes. The mandibles shear through flesh and light leather and take a piece out of whatever they close on. The pass is too fast to parry.

## Special Abilities

### Blinding Aerial Speed and Maneuverability

Over open water the hawk outflies a galloping horse and turns in its own length. It hovers, stops dead, flies backward, and nothing on the ground or the water keeps pace with it.

### Multifaceted Vision

The eyes see nearly the whole sphere at once. Nothing comes at it from behind.

### Chitinous Armor

The shell turns a sword cut and a club. A thrust or an arrow goes in between the segments.

## Attributes

- **Strength:** 9-14 (1d6+8)
- **Endurance:** 10-15 (1d6+9)
- **Dexterity:** 14-19 (1d6+13)
- **Agility:** 15-20 (1d6+14)
- **Perception:** 12-17 (1d6+11)
- **Aura:** 8-11 (1d4+7)
- **Will:** 9-14 (1d6+8)
- **Reasoning:** 5-8 (1d4+4)
- **Creativity:** 4-7 (1d4+3)

### Razor Mandibles

Capable of cutting through light armor and flesh.
