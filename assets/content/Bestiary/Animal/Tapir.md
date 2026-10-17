---
shortcode: tapir
name: {full: Tapir, aliases: []}
type: being
subType: creature
description: "A shy, barrel-bodied jungle herbivore with a trunk-like nose, foraging riverbanks by night and swimming to escape confrontation."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+10
    end: 1d6+9
    dex: 1d4+6
    agl: 1d4+7
    per: 1d6+10
    aur: 1d4+5
    wil: 1d4+7
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Battering Charge
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Battering Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
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
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
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
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 7}
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
            roles: &a1 [locomotor]
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
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Flank
            shortcode: flkloc
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
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 600, calc: "600"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[tapir|Tapir]]{float=top-left}

The jungle trail is worn smooth and narrow, a trough in the leaf litter that runs straight to the river. At its end the mud is printed with broad, three-toed tracks, and the water is still stirring. Something large lies half-submerged in the shallows, its short snout lifted to snuffle at the surface, round ears edged with white. It sees you, plunges, and passes along the river bottom with only the tip of its snout showing.

# Dossier {#dossier}

The Tapir is the largest land animal of the lowland forests, four to seven hundred pounds, barrel-bodied and trunk-nosed, living on the forest floor, river margins and wetlands of [[place-xelemrgn|Shelem]] and [[place-neokbaatergn|Ne'ok Ba'ate]]. It is shy, comes out at night and avoids a fight, and swims well. In [[place-kchchkcntnnt|K'ich'chik]] it is the oldest animal, the forest's first inhabitant, tied to water and the lower world, and harming one needlessly is bad manners and not a crime. It is prey for the jaguar, and it raids crops at the edge of the clearings.

## Presentation

A heavy, barrel-shaped animal on short, sturdy legs, with a head that tapers into a short, prehensile snout of upper lip and nose, always moving to smell and handle plants. The eyes are small, deep-set and often half hidden in folds; the animal sees poorly and relies on hearing and smell. The ears are round and edged with white. The coat is short and dense, dark to reddish brown in adults, and spotted and striped white on young animals. The tail is vestigial and the hindquarters are powerful, for forcing through undergrowth. The feet are splayed and partly webbed, with four toes in front and three behind.

## In the Land

Tapirs live on the floor of the lowland forest and along the rivers and marshes of Shelem and Ne'ok Ba'ate. A tapir keeps to a range around a water-hole and a river bank, comes out at night to browse leaves, fruit and water-plants with its trunk-like snout and spends the day lying up in dense cover. It swims and dives well, and takes to the water when alarmed.

## Key Behaviors

Tapirs live alone and feed at night, each keeping a range around water. They eat leaves, fruit, twigs and water-plants, reaching and stripping with the snout. They use fixed trails, so well worn and predictable that hunters and travelers use them as guides. They swim and dive eagerly, to feed, cool off, escape and travel, and can walk along a river bottom with the snout as a snorkel. They flee from any disturbance, crashing through undergrowth head down with the solid body as a ram. Cornered or wounded, a tapir bites and tramples.

## What the Hunters Do

Hunters follow the tapir paths, which are worn smooth and predictable, and wait by a water-hole at night with a spear. The meat is eaten in the villages of the lowlands, and the thick hide makes shields and sandals. A tapir is harmless, and a hunter who corners one and gets a bite learns otherwise. The paths are also used by the jaguar, and a hunter on one at dusk watches the trees above. Children are taught to walk beside a path and not on it.

## Signs

- A narrow, well-worn path through the undergrowth, ending at a river bank.
- Three-toed prints at the water's edge, wide-spaced, with a trail of dung.
- A crashing in the undergrowth and a splash as a heavy animal enters a pool.
- Leaves stripped from low branches along a trail, the stalks gnawed.
- A wallow churned in the mud of a stream-bed.

## Combat Strategy

The tapir's combat strategy is simple: flee. It runs with its head down, crashing through undergrowth with enough mass to clear a path, and makes for the nearest water where it can swim to safety. If cornered, a tapir becomes surprisingly aggressive — it bites with powerful jaws designed for processing tough vegetation, and it uses its body mass to slam and trample opponents. A wounded or cornered tapir will charge directly at a threat, head lowered, using its dense skull and heavy forequarters as a battering ram. These charges are not sophisticated but they are powerful, and a seven-hundred-pound animal moving at speed through close quarters is dangerous.

## Attack Methods

### Battering Charge

The tapir lowers its head and charges directly at a threat, using its dense skull and heavy forequarters as a ram. The charge is straight-line and unsophisticated but delivers tremendous impact, capable of knocking humanoids off their feet and trampling them.

### Crushing Bite

The tapir's jaws, designed for processing tough vegetation, can deliver a powerful bite when defending itself. The teeth are blunt but the jaw pressure is significant — capable of crushing bone and inflicting serious wounds.

### Water Escape

Not an attack but the tapir's primary survival strategy — plunging into the nearest water source where it can swim, dive, and walk along the bottom until the threat passes. A tapir in water is effectively untouchable by land-based predators.

## Special Abilities

### Aquatic Refuge

The tapir is an accomplished swimmer and diver that uses water as its primary escape route and sanctuary. It can swim strongly, dive to the bottom of rivers and pools, and walk along the river bed using its proboscis as a snorkel. In water, the tapir is faster, more agile, and more confident than on land, and it will always prefer aquatic escape to terrestrial flight.

### Jungle Ram

The tapir's heavy, low-slung body and dense skull allow it to charge through undergrowth that would stop lighter animals. A fleeing tapir creates a temporary trail through even dense vegetation, and this crashing flight can itself be a navigational cue for hunters and forest travelers.

### Trail Memory

Tapirs follow the same paths through the forest for years, creating well-worn trails that connect feeding areas, water sources, and resting sites. These trails are so consistent and well-maintained that they function as a secondary trail network through otherwise trackless jungle — used by hunters, other animals, and adventurers who learn to recognize them.

## Attributes

Strength
: 11-16 (1d6+10) — Heavy and powerful; the battering charge is dangerous

Endurance
: 10-15 (1d6+9) — Solid; good swimming stamina but not a long-distance runner

Dexterity
: 7-10 (1d4+6) — Adequate; proboscis provides some manipulation ability

Agility
: 8-11 (1d4+7) — Decent in water; ungainly on land but surprisingly quick in a straight line

Perception
: 11-16 (1d6+10) — Excellent hearing and smell compensate for poor eyesight

Aura
: 6-9 (1d4+5) — Respected as the forest's oldest inhabitant; not sacred

Will
: 8-11 (1d4+7) — Shy and retiring; prefers flight; will fight when cornered

Reasoning
: 5-8 (1d4+4) — Adequate; remembers trails and water sources

Creativity
: 4-7 (1d4+3) — Limited
