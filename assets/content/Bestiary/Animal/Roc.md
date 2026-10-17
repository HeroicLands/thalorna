---
shortcode: roc
name: {full: Roc, aliases: []}
type: being
subType: creature
description: "A mountain-nesting bird of prey with a hundred-foot wingspan and body weighed in tons, hunting elephant-sized quarry as a living disaster for expeditions."
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
    str: 1d6+37
    end: 1d6+32
    dex: 1d6+11
    agl: 1d6+9
    per: 1d6+13
    aur: 1d6+7
    wil: 1d6+11
    rea: 1d4+6
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 41}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 36}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 95}}
    - name: Diving Talon Strike
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 51
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Diving Talon Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 15, aspect: edged}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Crushing Grip
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Crushing Grip
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 41, aspect: blunt}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 4}
    - name: Beak Strike
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 16, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 5}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 5}
          - {name: Body, shortcode: torsozone, probWeight: 10}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 5}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 5}
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
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
      weight: {base: 6000, calc: "6000"}
      reachBase: 0
      bodyScaleBase: 2.35
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 130
        leaguesPerWatch: 15
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[roc|Roc]]{float=top-left}

The light goes out of the valley all at once, as if a cloud had crossed the sun, and the herdsman on the ridge above you throws himself flat. Then the sound arrives, a shriek that you feel in your teeth, and you look up into a shape that fills a third of the sky: wings a hundred feet across, bronze and gold underneath where the sun comes through the feathers, and below them two legs trailing talons each as long as a man. It comes down the ridge. The mule at the end of the string goes up off the path in those talons as a mouse goes up in an owl's, and the wind of the wings knocks you to your knees.

# Dossier {#dossier}

The Roc is the great bird of the high mountains: a hundred feet and more across the wings, a body weighing several tons, with talons as thick as a man's arm and a hooked beak that shears a tree limb. On the [[place-graznmntns|Grazian north face]] it is the last of the four dangers the guides name to a lowlander, after the [[being-clffstlk|Cliff Stalker]], the [[being-crglrkr|Crag Lurker]] and the [[being-stoneram|Stone Ram]], and the only one of the four that can take a laden mule off a ridge in front of the herdsman who is leading it. It nests on peaks no one climbs and hunts across hundreds of square miles of mountain and the country below. Rocs are rare. The plateau tribes speak of the Roc of the north face, as if there were only one; the guides of the high passes say there are a few, and that they are very old.

## Presentation

A bird of prey built on an impossible scale. The plumage is dark brown on the back, shading to golden-bronze on the breast and the undersides of the wings, finely barred so that a roc at rest on a mountainside reads as a rock slide. The head is huge, with forward-set eyes, pale gold, and a hooked beak as long as a cart. The legs are thick, scaled and feathered to the foot, and the four talons on each are curved claws the length of swords. The wings are long and broad and lift a load of a ton. A roc in flight is silent until it calls, and its call carries for miles.

## In the Land

Rocs nest on the highest and most inaccessible peaks of the Grazian range above the north face, where the glaciers hold year-round, and hunt the ridges, valleys and plateaus below: the high grazing of the stone rams, the passes the caravans use to come down from [[place-vedyarargn|Vedyara Region]], the [[place-grazruins|Ruins and Labyrinths of the Grazian Mountains]] under the glaciers, and the black rock of the [[place-dkrqrrgn|Diqraqor]] beyond. A single bird's range is hundreds of square miles. It takes wild rams, ibex, wild asses, a camel, a mule or a pony from a string, and anything else of that size that stands on open ground. Herds that live under a roc's range learn to stay near cover, and the herdsmen of the plateau keep their beasts off the ridges in the season when the bird is seen.

## Key Behaviors

A roc hunts by day, soaring at a height where it is a speck, and comes down in a stoop that ends with the whole weight of the bird behind its talons. It carries what it takes to a ledge or back to the eyrie and eats there. It must eat a great deal, and hunts most days when it is nesting. A pair nests once every few years and raises one chick, and a nesting roc attacks anything that comes near its peak, and a good deal that does not. Rocs live for centuries and learn: a roc remembers a valley where the herds are thick, a pass where the strings cross, and a party that shot at it. It does not fear anything that walks.

## What the Mountain People Do

The guides who take strings over the north face cross open ridges at dawn and dusk and keep the animals close under the crags in the hours when the roc hunts, and a guide who sees its shadow cross a valley stops the string where it stands, under cover, until it has gone. A string that loses a mule to it lets the mule go: nobody follows a roc. The herdsmen of the plateau pen their beasts in the ravines in the season it is seen. A roc's flight feather, found under a ridge, is longer than a man and is hung over a shrine door; a roc's egg, which nobody now living has seen, is said to have held water for a whole house for a year. Nobody hunts a roc, and the stories of those who tried are told as warnings.

## Signs

- A shadow crossing a valley that is too big and too fast for any cloud.
- A shriek from the high peaks that sets every animal in a string bucking at once.
- The bones of rams and wild asses on a high ledge, some of them dropped from a height and shattered.
- A feather longer than a man lying across a ridge path.
- A whole herd on a plateau crowded into one ravine at midday.

## Combat Strategy

The roc attacks from the air and seldom anywhere else. It stoops from a great height, strikes with the talons, and lifts what it has struck if it can; a man or a mule taken up is crushed in the grip and carried off, or dropped onto rock from a height. If the prey is too big to lift it strikes it down and comes back for it. It stoops again and again at a party on an open ridge until something is taken, and it ignores arrows that do not reach anything vital. Forced to the ground, by a wound or by defending its nest, it fights with beak and talons and is still the most dangerous thing on the mountain. It does not flee unless it is badly hurt. A party under the cover of an overhang or in a narrow gully cannot be stooped on, and that is the whole of a traveler's defense.

## Attack Methods

### Diving Talon Strike

The roc folds its wings and drops, and at the end of the stoop it throws its talons forward. The impact breaks bones on its own, and the talons go through armor; a man or a mule struck squarely is seized and lifted.

### Crushing Grip

A thing held in the talons is crushed with the full strength of the legs, ribs breaking and lungs collapsing. A man in the grip seldom stays conscious long.

### Beak Strike

The hooked beak stabs and shears like a great curved blade, through armor and limb.

## Special Abilities

### Crushing Impact

The roc's weight behind a stoop strikes like a falling building, and even when the talons miss, the blow and the wind of it throw men down.

### Aerial Mastery

For all its size it climbs, banks, stoops and pulls out of a stoop with ease, and it chooses the quarter and the moment of every attack.

### Immense Strength

It lifts a load of a ton or more, carries a laden mule to a peak, and tears a carcass apart in a moment.

### Predatory Vision

It sees a moving ram from a height of thousands of feet and follows a party across a whole range.

### Impenetrable Plumage

Its dense, tough feathers turn most arrows and blades, and a spear that strikes it at an angle skids off.

### Rapid Healing

It mends from wounds that would cripple any other creature, and a roc driven off hurt is flying again in days.

## Attributes

Strength
: 38-43 (1d6+37)

Endurance
: 33-38 (1d6+32)

Dexterity
: 12-17 (1d6+11)

Agility
: 10-15 (1d6+9)

Perception
: 14-19 (1d6+13)

Aura
: 8-13 (1d6+7)

Will
: 12-17 (1d6+11)

Reasoning
: 7-10 (1d4+6)

Creativity
: 5-8 (1d4+4)
