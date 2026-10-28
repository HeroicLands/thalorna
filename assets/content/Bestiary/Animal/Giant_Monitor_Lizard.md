---
shortcode: gntmntrlzrd
name: {full: Giant Monitor Lizard}
type: being
subType: creature
description: "The largest living lizard, a heavily muscled nine-to-ten-foot reptile whose broad-jawed, coarse-scaled body makes it a formidable ambush hunter."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-gecko, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+9
    dex: 1d6+7
    agl: 1d4+7
    per: 1d6+9
    aur: 1d6+7
    wil: 1d6+8
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Venomous Bite
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
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Tail Strike
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
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
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [manipulator]
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
            probWeight: 3
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 250, calc: "250"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[gntmntrlzrd|Giant Monitor Lizard]]{float=top-left}

The scrub above the beach is hot and still, and the air smells of rot and musk. A broad furrow runs through the sand with a line of tail-drag down the middle. At the end of it a thing the color of wet bronze lies half out of its burrow, nine feet from snout to tail, its forked tongue tasting the wind. The small eyes turn toward you, and the heavy body begins to lift on its legs.

# Dossier {#dossier}

The Giant Monitor Lizard is the largest lizard, nine to ten feet long and two to three hundred pounds, living on the dry islands of [[place-surtaislnds|the Surta-samedra Islands]], the rocky scrub of southern [[place-vedyarargn|Vedyara]] and the lowlands of the [[place-jenchairgn|Jenchai islands]]. It lies in ambush on a game-trail and smells carrion from far off. Its saliva carries venom and infection, so a bite goes on weakening an animal after the lizard has lost the fight.

## Presentation

A heavily built, muscular lizard with rough, knobbed scales in gray-brown or bronze-black that darken with age, and ridges along the spine and tail. The head is broad and flattened, with a wide mouth that opens very far and small eyes set forward of center. The claws are sharp from constant use. The tail is almost as long as the body, muscular and whip-like. A musky, acrid smell surrounds it.

## In the Land

Giant monitors live on the warm, dry islands of the Surta-samedra Islands, on the rocky scrub of the south coast of Vedyara and in the lowlands of the Jenchai islands. A lizard keeps a territory of a few miles of beach, scrub and dry stream-bed, a burrow under a rock and a basking-place on a warm slope. It lies in ambush on a game trail and follows the scent of carrion for miles, and several will gather at a carcass.

## Key Behaviors

Giant monitors hunt alone, resting in a burrow, under rocks or in thick cover and waiting for prey by day. They gather at a carcass and at places with plenty of prey, and rank decides who feeds first. They sense carrion from far away. They rest at night. A bitten animal sickens as the venom and infection spread, so the lizard can let it go and follow it until it weakens.

## What the Islanders Do

Fishing villages leave animal offal in the surf and keep their children from the scrub behind the beach. Herders count their goats at dusk and keep them penned at night. The islanders hunt the monitor with spears and dogs for the hide, which makes drum-heads and sword-grips, and for the claws, which they sell. A person bitten by one is taken at once to a healer, since the bite festers and the fever follows. The old lizards are known by name along the shore, and a village leaves a pig at a known lizard's beach in a bad year.

## Signs

- A broad, scraped trail through sand or leaf litter, with a line of tail-drag down the middle.
- A forked tongue tasting the air at the mouth of a burrow in a bank.
- Foot-prints with five long toes and claws, spread wide, set in a staggering line.
- A goat or a deer carcass dragged into the shade, with bite wounds that have gone black.
- A smell of rot, sweet and strong, carried on a warm wind off the scrub.

## Combat Strategy

Giant monitor lizards employ ambush and patience above all else. A lizard will position itself along known prey trails or near water sources and remain motionless until prey comes within striking range, then execute a devastating bite attack before retreating to let venom and infection do their work. If forced into direct combat with an alert opponent, the lizard will use its tail to create distance and its venom to progressively weaken the enemy. A lizard will abandon a prey animal if it escapes without injury; the lizard reserves energy for more promising hunts.

## Attack Methods

### Venomous Bite

The lizard lunges to clamp its powerful jaws on the target, delivering a bite laden with venom and pathogenic saliva; the bite causes immediate damage and ongoing poison damage that increases in severity as the venom spreads.

### Tail Strike

The lizard lashes its whip-like tail to keep opponents at distance, knock them off balance, or inflict slashing damage; the tail is precise enough to target specific limbs or weapons.

## Special Abilities

### Venomous Saliva

The giant monitor lizard's bite injects a complex venom mixed with pathogenic bacteria; victims experience immediate puncture damage and progressive poison damage that persists and worsens without treatment, potentially causing paralysis or death.

### Ambush Master

The giant monitor lizard strikes hardest from surprise; in terrain of its choice, it is nearly undetectable until it chooses to strike.

## Attributes

Strength
: 12-17 (1d6+11)

Endurance
: 10-15 (1d6+9)

Dexterity
: 8-13 (1d6+7)

Agility
: 8-11 (1d4+7)

Perception
: 10-15 (1d6+9)

Aura
: 8-13 (1d6+7)

Will
: 9-14 (1d6+8)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
