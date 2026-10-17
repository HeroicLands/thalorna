---
shortcode: gnttrts
name: {full: Giant Tortoise, aliases: []}
type: being
subType: creature
description: "A centuries-old herbivorous reptile and near-indestructible walking fortress, peaceful and indifferent as it grazes slowly through the ages."
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
    str: 1d6+13
    end: 1d6+17
    dex: 1d4+3
    agl: 1d4+2
    per: 1d4+7
    aur: 1d4+6
    wil: 1d6+10
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 48}}
    - name: Powerful Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 40
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Powerful Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Crushing Advance
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 30
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Crushing Advance
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Shell, shortcode: shellzone, probWeight: 9}
          - {name: Limbs, shortcode: limbzone, probWeight: 4}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Shell
            shortcode: shellpart
            bodyZoneCode: shellzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: limbzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: limbzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: limbzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: limbzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: limbzone
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
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Shell
            shortcode: shellloc
            bodyPartCode: shellpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: shellpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
      weight: {base: 800, calc: "800"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 15
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[gnttrts|Giant Tortoise]]{float=top-left}

The ground shakes under your feet, slowly, once every few breaths, and the dune-grass ahead of you is going down in a swath. A shell the size of a cart comes over the rise, domed and scarred and the color of old leather, with a head on a long wrinkled neck swinging from side to side as it crops, and legs like tree-stumps that come down one at a time with a thud you feel in your knees. It stops when it sees you. It looks at you for a long moment with two small, dark, untroubled eyes, and then it goes back to eating.

# Dossier {#dossier}

The Giant Tortoise is a grazing tortoise eight feet long and more, with a domed shell that turns a spear, which lives for centuries on the desert margins of [[place-dunharargn|Dunhara Region]] and in the dry southwestern reaches of the [[place-sthrnsvnhs|Southern Savannahs]], walking the same grazing circuit through the same seasons for longer than any tribe has kept count. It eats grass, scrub, leaves and fallen fruit, it fears nothing because nothing can hurt it, and it is dangerous only to what stands in its way. The Dunhari count the years of a lineage by the tortoise that grazes its wells, and a tribe that has had the same one for seven generations treats it as a kinsman.

## Presentation

A huge tortoise under a domed shell of weathered brown, gray and tan, the plates worn, scarred and ringed with age, with a flat plastron below as thick as the shell above. The head is small for the body and sits on a long, deeply wrinkled neck that draws back into the shell; the eyes are small, dark and calm. The jaws are a horny beak that shears a branch. The legs are columns with heavy claws, and the whole animal weighs as much as a horse. An old one carries a garden of lichen on its back.

## In the Land

Giant Tortoises graze the scrub and grass where the Dunhari desert meets the farmed margins, the dry pans and acacia country of the southwestern savanna, and the river-margins of both in the dry season when the grass is gone elsewhere. Each walks a circuit of its own, miles long, that brings it to the same wells, the same shade trees and the same wallows at the same time of year, and the tribes who share the circuit know where it will be in any month. They are not territorial and several share a stretch of country in peace. They are not found in the deep sand or the deep forest.

## Key Behaviors

A tortoise eats for most of the day and sleeps in the shade or half-buried in sand through the heat, and it walks its circuit at a pace a child keeps up with. It is unmoved by predators, by people and by weather. It lives for centuries, and the oldest the Dunhari know of has been grazing the same wells since before the tribe that waters there came out of the deep desert. A female digs a nest in sand once a year and leaves it; the hatchlings are the size of a hand and most are eaten. An adult has no enemies but the pit-trap and the flood.

## What the Tribes Do

The Dunhari treat a lineage's tortoise as a thing that belongs to the lineage and the lineage to it. It is named, its circuit is the tribe's own, and a sheikh's household water it from a trough at the well when it comes. Its passing is mourned and its shell roofs the grave of a sheikh. A tortoise with no lineage is left alone; the meat is good and the shell is worth a fortune, and killing one is a day's work with a pick for a tribe that has camels to eat. The savanna clans of the southwest, who keep no such custom, ride on them for a joke and count the shell-rings to settle arguments about the age of a well. A stranger who kills a named tortoise on Dunhari ground has killed a kinsman, and is treated as a man who has.

## Signs

- A swath of cropped grass and broken scrub as wide as a cart, running straight across country.
- Round prints the size of a shield, pressed deep, in a line a child could step between.
- A domed rock on a hillside at dusk that was not there at dawn.
- A shallow pit in the sand of a dry riverbank, with broken white eggshells scattered round it.
- Dunhari watering a trough at a well for no animal anyone can see.

## Combat Strategy

The tortoise does not fight. Attacked, it ignores the attack and goes on eating, and a party that goes on hitting it blunts its weapons. Pressed, it draws head and legs into the shell and waits, and in that state nothing a man carries will open it. If a man stands between it and where it is going it walks over him, and if something has hold of its head it bites and does not let go. The soft points are the neck and the legs when they are out, which they are not when anyone is attacking it.

## Attack Methods

### Powerful Bite

The beak shears what is between the jaws, a wrist or a spear-shaft, slowly and once.

### Crushing Advance

The tortoise walks forward, and whatever is under its feet or its shell is crushed. It is slow and it does not stop.

## Special Abilities

### Impenetrable Shell

Sword, spear, arrow and mace do nothing to the shell, and the plastron below is nearly as thick. A blow spreads across the dome and is lost.

### Withdrawal Defense

Drawn in, the tortoise is a boulder with nothing to strike. It waits for as long as the danger lasts and comes out when it has gone.

## Attributes

Strength
: 14-19 (1d6+13)

Endurance
: 18-23 (1d6+17)

Dexterity
: 4-7 (1d4+3)

Agility
: 3-6 (1d4+2)

Perception
: 8-11 (1d4+7)

Aura
: 7-10 (1d4+6)

Will
: 11-16 (1d6+10)

Reasoning
: 5-8 (1d4+4)

Creativity
: 3-6 (1d4+2)
