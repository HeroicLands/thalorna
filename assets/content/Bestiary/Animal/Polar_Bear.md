---
shortcode: plrbr
name: {full: Polar Bear, aliases: [Ice Bear]}
type: being
subType: creature
description: "The apex arctic predator of the far north, a solitary fifteen-hundred-pound hunter of ice and freezing water, a pure carnivore unlike the omnivorous brown bear."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: polarbear, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+25
    end: 1d6+18
    agl: 1d6+7
    per: 1d6+11
    snt: 1d4+5
    aur: 1d4+3
    wil: 1d6+12
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 28}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 84}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 9, aspect: piercing}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 1}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 8, aspect: edged}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
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
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
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
      weight: {base: 1000, calc: "1000"}
      reachBase: 0
      bodyScaleBase: 1.84
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 90
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[plrbr|Polar Bear]]{float=top-left}

The ice stretches away flat and blue-white to the horizon. A long way out, a creamy shape on the floe is moving toward you, head low, swinging from side to side. It is far larger than any bear you have seen. Its neck is long, its paws are as wide as dinner-plates, and it walks with a rolling, tireless stride. It lifts its muzzle and tests the wind, scenting you across a mile of open ice.

# Dossier {#dossier}

The Polar Bear is the great white hunter of the ice, five feet at the shoulder and ten feet when it rears, nine hundred to fifteen hundred pounds, living on the pack-ice and frozen shore of the far north of the [[place-nrdlndsrgn|Nordlands]]. It is a pure meat-eater, taking seals, fish, walrus calves and people, with the keenest nose of any land hunter, able to find prey through feet of ice. It swims for dozens of miles. Among the northern peoples it is the embodiment of the killing cold, and its pelt is among the most valued trophies.

## Presentation

A long, lean, streamlined bear with a long neck and a narrower skull and longer muzzle than the brown bear's, made for gripping and killing. The fur looks white or cream, made of hollow, transparent guard hairs over black skin. The paws are up to twelve inches across and partly webbed, paddles in water and snowshoes on soft snow, with soles covered in soft papillae that grip ice.

## In the Land

Polar bears hunt the pack-ice and the frozen shore of the far north of the [[place-nrdlndsrgn|Nordlands]], where the ice reaches the coast and the seal colonies lie. A bear walks the ice-edge and waits at a seal's breathing-hole, and in summer, when the ice retreats, it comes ashore and lives on its fat. It can swim for miles and range hundreds of miles in a season.

## Key Behaviors

Polar bears live alone and nearly always on or near the sea ice, hunting seals at breathing-holes and along the ice edge. A bear finds a hole by scent, waits motionless and silent for hours, and kills with one blow of a forepaw that can break a seal's skull through the ice. When the ice retreats in summer the bears come ashore and live on carrion, eggs and berries until it returns, and hungry bears at that season are the most dangerous, investigating camps, settlements and boats for food. They have swum for days between floes. They are intelligent, curious and persistent, and will follow prey for miles.

## What the Sealers Do

The sealers of the northern coast watch the ice for bears and work in numbers. A bear that has found a camp returns to it, and a camp keeps its meat in a cache on stilts. Hunters kill a bear with spears and dogs for the hide, which is the warmest bed-cover in the north, and for the fat, which burns well. A bear is taken only when it threatens a camp, and the skull is set on a pole. Boats stay clear of an animal swimming in open water. The old tell of a bear that waited a whole winter for a man who had struck it.

## Signs

- Tracks as wide as a dinner-plate on the ice, with a long, sliding stride.
- A seal carcass with the skin and blubber eaten and the rest left lying.
- A pale shape on the ice at a distance that is not a snowdrift, and moves.
- A heap of snow at a breathing-hole, built up by a patient animal.
- A cache torn open, with the poles splintered and the meat gone.

## Combat Strategy

The polar bear does not bluff. Unlike brown bears, which often charge as a threat display, a polar bear that charges intends to kill. It approaches with deceptive calm — walking steadily, sometimes circling to cut off retreat — then accelerates into a devastating rush. The initial attack is typically a forepaw strike of enormous power, aimed at the head or shoulders to stun or kill outright. If the first strike fails, the bear continues pressing, using its jaws and claws with relentless, methodical aggression. It does not roar or posture during combat — it fights in focused silence. A polar bear will pursue fleeing prey across ice and through water, and it will not abandon a hunt that it has committed to. In water, it is even more dangerous: faster than any swimming human, capable of attacking from below, and able to pull opponents off ice floes or out of boats.

## Attack Methods

### Skull-Crushing Paw Strike

The polar bear's primary killing method — a single, devastating blow from the forepaw, delivered with the full force of the shoulder behind it. This strike is powerful enough to shatter a seal's skull through several inches of ice. Against humanoid targets, it can crush helmets, break necks, and kill instantly.

### Predatory Bite

The jaws close on the neck, skull, or spine with focused, killing pressure. The bite is not the wild mauling of a brown bear but a precise, targeted kill — the polar bear bites to sever the spine or crush the windpipe. The narrow skull allows it to reach into spaces a brown bear's broader head cannot.

### Drag and Drown

In water or near water's edge, the polar bear seizes prey and pulls it into the water, where its swimming superiority is absolute. The victim is held under until drowned. This tactic is used against large prey that the bear cannot kill outright on the ice.

## Special Abilities

### Scent Beyond Measure

The polar bear's olfactory system is the most acute of any land predator. It can detect a seal through three feet of ice and packed snow, smell carrion from miles downwind, and track prey across featureless ice fields where no visible trail exists. It is virtually impossible to hide from a polar bear by scent alone.

### Ice Camouflage

The polar bear's translucent fur renders it nearly invisible against snow and ice. A motionless polar bear on a white background is effectively undetectable by sight at any distance beyond a few dozen paces. Bears have been observed covering their black noses with a paw while stalking — whether this is deliberate camouflage or coincidence remains debated.

### Aquatic Endurance

The polar bear is a tireless swimmer, capable of sustaining continuous swimming for days and covering distances that would exhaust any terrestrial animal. Its partially webbed paws, streamlined body, and thick blubber layer make it as comfortable in freezing water as on ice. It can dive, surface silently, and attack from the water with minimal warning.

## Attributes

- **Strength:** 26-31 (1d6+25)

- **Endurance:** 19-24 (1d6+18)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 12-17 (1d6+11)

- **Scent:** 6-9 (1d4+5)

- **Aura:** 4-7 (1d4+3)

- **Will:** 13-18 (1d6+12)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 4-7 (1d4+3)
