---
shortcode: seal
name: {full: Seal, aliases: [Grey Seal]}
type: being
subType: creature
description: "A sleek, fish-eating pinniped of northern coasts whose meat, blubber, and hide sustain coastal communities through bitter winters."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+6
    end: 1d6+8
    dex: 1d6+10
    agl: 1d6+9
    per: 1d6+10
    aur: 1d4+4
    wil: 1d4+6
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 28}}
    - name: Defensive Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 61
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Defensive Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: piercing}
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
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Gills
            shortcode: gillloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Body
            shortcode: bodyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Fin
            shortcode: lfinloc
            bodyPartCode: lfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Fin
            shortcode: rfinloc
            bodyPartCode: rfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 400, calc: "400"}
      reachBase: 0
      bodyScaleBase: 0.88
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: aquatic
        feetPerRound: 80
        leaguesPerWatch: 8
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[seal|Seal]]{float=top-left}

The skerry off the point is crowded with dark, glistening bodies, humped on the weed-covered rock like sacks of grain. A round head with huge, liquid eyes comes up beside your boat, whiskers streaming, and looks at you with an open, unalarmed curiosity. It sinks without a ripple. On the rock a bull barks, a hoarse, bellowing note that is answered from the water.

# Dossier {#dossier}

The Seal is the common seal of the cold northern coasts, fjords and island chains of the [[place-nrdlndsrgn|Nordlands Region]] and [[place-vithgard|Vithgard]], a fish-eating swimmer of one hundred fifty to six hundred pounds. It is the everyday subsistence animal of the coast: meat, blubber for lamp oil and waterproofing, hides for clothing and boat-skins, and bone and sinew for a hundred uses. Where the reindeer defines the tundra, the seal defines the coast. Its breathing-holes in the sea ice are where the polar bear hunts it.

## Presentation

A smooth, tapered cylinder with no external ears and a close coat of dense fur over thick blubber. The coat is mottled gray to dark brown with irregular spots and blotches that blend with rocky shores and dappled water. The head is round, with large, forward-facing, dark, liquid eyes made for dim light underwater. The whiskers are long and sense the wake of a fish. The forelimbs are short flippers for steering and the rear flippers drive the swimmer faster than any person. On land the animal hauls itself along in caterpillar-like undulations.

## In the Land

Seals swim the cold coasts, fjords and island chains of the Nordlands and Vithgard. A colony hauls out on a rocky island or a skerry to breed in spring and pup, and the animals fish singly in the water, taking cod and herring. In winter they follow the fish into the fjords and rest on the ice.

## Key Behaviors

Seals gather in colonies to breed, pup and rest, and hunt alone in the water. They eat cod, herring and other shoaling fish, chasing them in three dimensions. They dive deep and hold their breath for a long time, though most dives for food are shallow. Breeding colonies form on rocky islands and remote shores, where bulls compete for ground and females by calling and fighting. Pups are born on land and nursed for several weeks before being left to fend for themselves. Seals are curious and unafraid of people in places where they are not hunted heavily, and wary and hard to approach where they are.

## What the Fjord People Do

The fjord people live by the seal. Its meat feeds a household through winter, its blubber gives lamp-oil and waterproofing, and its hide is made into clothing, boots and boat-skins. A hunter waits at a haul-out or a breathing-hole with a club and a harpoon, and a boy is taught to wait without moving for an hour. Sealskin is traded south as currency. The sealers of the northern coast share their catch with the household of a man lost at sea. A colony is not hunted at pupping.

## Signs

- A round, whiskered head in the water that watches a boat and sinks.
- A black shape on a skerry, humped and shining, with others beside it.
- A barking and moaning from a rock, rising at dusk.
- A trail of flipper-prints and body-drag from the water to a rock.
- Fishing nets torn and emptied, with a bite taken from the best fish.

## Combat Strategy

Seals are not aggressive toward humans and will flee from any threat they can escape. On land, their only strategy is to reach the water — once swimming, they are effectively untouchable by any land-based pursuer. A cornered seal will bite defensively, and the bite of a large bull is powerful enough to sever fingers or inflict deep wounds. Females defending pups are more aggressive, and a breeding colony that perceives a threat to its young will produce a collective response of barking, lunging, and biting that can drive off predators through sheer numbers and noise. In water, a seal simply outruns any threat.

## Attack Methods

### Defensive Bite

The seal's jaws are strong and lined with sharp, conical teeth designed for gripping slippery fish. When cornered, the bite is delivered with a sharp, snapping motion and can inflict serious puncture and tearing wounds. A large bull's bite can break small bones.

### Flee to Water

The seal's primary defensive action is to reach the water as quickly as possible. On land, this means a lurching, surprisingly fast scramble toward the nearest water's edge. Once in the water, the seal can outswim any natural predator except the orca.

## Special Abilities

### Aquatic Grace

In water, the seal is transformed from an ungainly land creature into one of the most agile and graceful swimmers in the northern seas. It can accelerate, turn, dive, and surface with a precision and speed that makes underwater pursuit futile. The contrast between its land and water capabilities is extreme.

### Deep Diving

Seals can dive to depths and hold their breath for durations that exceed most marine mammals of their size. Their physiology includes specialized oxygen-storing proteins in the blood and muscles, a collapsible rib cage that resists pressure at depth, and the ability to slow their heart rate dramatically during dives.

### Whisker Sensitivity

The seal's vibrissae can detect the hydrodynamic wake of a fish swimming nearby, even in total darkness or murky water. This allows the seal to hunt effectively in the perpetual twilight of northern winter waters and under sea ice where visibility is negligible.

## Attributes

- **Strength:** 7-10 (1d4+6) — Adequate for their size; jaws are strong but body is built for speed, not power
- **Endurance:** 9-14 (1d6+8) — Good cold tolerance and diving stamina; blubber reserves for lean seasons
- **Dexterity:** 11-16 (1d6+10) — Superb in water; capable of precision swimming and fish capture
- **Agility:** 10-15 (1d6+9) — Excellent in water; clumsy on land
- **Perception:** 11-16 (1d6+10) — Extraordinary underwater senses; large eyes for low-light vision
- **Aura:** 5-8 (1d4+4) — Common and familiar; no special spiritual significance
- **Will:** 7-10 (1d4+6) — Mild-tempered; prefers flight to fight
- **Reasoning:** 6-9 (1d4+5) — Curious and somewhat intelligent; learns to avoid hunters
- **Creativity:** 4-7 (1d4+3) — Limited
