---
shortcode: manatee
name: {full: Manatee}
type: being
subType: creature
description: "A slow, gentle, round-bodied sea cow of the warm southern rivers, lagoons and coasts that grazes the weed beds all day and is harmless unless a boat strikes it."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+16
    end: 1d6+14
    dex: 1d4+2
    agl: 1d6+4
    per: 1d6+8
    aur: 1d6+8
    wil: 1d6+6
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Shove
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 35
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Shove
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Body, shortcode: torsozone, probWeight: 5}
          - {name: Tail, shortcode: tailzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Fin
            shortcode: lfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Fin
            shortcode: rfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: tailzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Body
            shortcode: bodyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Left Fin
            shortcode: lfinloc
            bodyPartCode: lfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Right Fin
            shortcode: rfinloc
            bodyPartCode: rfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
      weight: {base: 1000, calc: "1000"}
      reachBase: 0
      bodyScaleBase: 1.2
      personalFatigue: enc + 5
    currentMoveMedium: aquatic
    movementProfiles:
      - medium: aquatic
        feetPerRound: 30
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

A shape drifts beneath the green water of the lagoon, gray and shapeless and as long as a canoe. It rises without hurry; a blunt whiskered snout breaks the surface, two nostrils close and open with a soft sigh, and a round, wrinkled face with tiny eyes regards you. A paddle-like flipper lifts and settles. Then the animal sinks back to the weed bed and goes on eating.

# Dossier {#dossier}

The Manatee is a slow, plant-eating water mammal of eight to ten feet and about a thousand pounds. It lives in the warm lagoons, river mouths and mangrove channels of the eastern coast: the sheltered waters of [[place-kankulrgn|K'ankul Region]] and [[place-neokbaatergn|Ne'ok Ba'ate Region]], and the lower channels of the rivers of [[place-xelemrgn|Shelem Region]]. It is the gentlest large animal on the coast, and it is dangerous only to boats.

## Presentation

A huge, rounded, spindle-shaped animal with thick, wrinkled gray-brown skin sparsely covered with bristles. The head is small and blunt, with a split, prehensile upper lip bristling with whiskers and tiny, deep-set eyes. The forelimbs are broad paddle-shaped flippers; there are no hind limbs, and the body ends in a broad, flat, rounded tail that drives the animal up and down in the water. Old animals are scarred along the back.

## In the Land

Manatees live in warm, shallow, sheltered water: seagrass beds, mangrove channels, river mouths and slow lower rivers, moving between fresh water and salt as the season and the weed dictate. They rise to the surface every few minutes to breathe and rest on the bottom between meals. In cool weather they retreat to warm springs and deep channels. Their grazing keeps the channels clear of weed.

## Key Behaviors

Manatees graze for six to eight hours a day on seagrass, water plants and mangrove leaves, plucking with the whiskered lip and the flippers. They live alone or in loose groups, a cow with her calf or a few animals resting together. They swim slowly, a few miles an hour, and rarely hurry. They call to one another with chirps and squeaks. The animal dives and vanishes at the sound of a paddle, and its only defense is to flee. It does not attack, and the danger it brings is its size: a frightened manatee surfacing under a canoe or rolling against one can overturn it.

## What the Coast and River Villages Do

The coast and river villages of Shelem, K'ankul and Ne'ok Ba'ate harpoon manatees for meat, fat and hide. A single animal feeds a village for days, and the meat is smoked to keep. The thick hide is cut into straps and the bones are carved. Hunters take the animals from canoes in quiet water, and the work is slow and quiet. A manatee that is left alone is a harmless neighbor in a fishing village's lagoon, and fishers learn the channels where one grazes.

## Signs

- A broad, flat swirl on the surface of calm water where something large has dived.
- Torn clumps of seagrass floating in a channel, the roots chewed off.
- A soft sigh of breath at the surface and a pair of nostrils opening.
- A line of bubbles rising above a weed bed in warm, shallow water.
- A long scar along the back of an old animal, from a keel or a harpoon.

## Combat Strategy

The manatee has no strategy but flight. It sinks and moves off into deep water or a thicker weed bed at a sound or a shadow. If it is cornered, trapped in a net or struck by a boat, it thrashes, shoves with its flippers and body and rolls, and its sheer weight can crush a swimmer against a hull or capsize a canoe. It does not bite, does not charge and does not pursue. A manatee left alone is no danger to anybody.

## Attack Methods

### Shove

The manatee pushes with its body and flippers against whatever is hemming it in, a blow with the force of a rolling log. It uses the push to get free, not to hurt, but its weight is considerable.

### Capsizing Roll

A manatee that is struck from below or panicked beside a small boat rolls and surges, lifting or tipping the boat. The animal is trying to escape, and the boat and the people in it are the casualties.

## Special Abilities

### Slow Breath

The manatee holds its breath for ten minutes or more when resting and surfaces only to take a quick breath. It is difficult to find when it chooses to stay down.

### Thick Hide and Blubber

The manatee's hide is dense and wrinkled and takes light blows without damage; the layer of fat beneath it deadens the rest.

### Gentle Nature

The manatee does not fight. Even wounded, it flees if it can, and a hunter can approach one quietly and work at close range.

## Attributes

Strength
: 17-22 (1d6+16) — A huge animal; its weight is its strength, and a shove is a danger to a boat

Endurance
: 15-20 (1d6+14) — Grazes for hours and holds its breath for many minutes

Dexterity
: 3-6 (1d4+2) — Plucks weed with the whiskered lip, but its body is clumsy

Agility
: 5-10 (1d6+4) — Slow and ponderous; steers with the flippers and tail

Perception
: 9-14 (1d6+8) — Good hearing in water and sensitive whiskers; sees poorly

Aura
: 9-14 (1d6+8) — A quiet, benign presence in the lagoon

Will
: 7-12 (1d6+6) — Calm and not easily stirred, but not brave

Reasoning
: 5-8 (1d4+4) — Learns the channels and the habits of boats

Creativity
: 3-6 (1d4+2) — Little improvisation; grazes and flees
