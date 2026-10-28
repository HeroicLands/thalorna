---
shortcode: wldbst
name: {full: Wildebeest, en: [Gnu]}
type: being
subType: creature
description: "A large, shaggy savannah bovine whose vast migratory herds define the southern grasslands in their sweeping annual movement."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+10
    end: 1d6+10
    dex: 1d6+8
    agl: 1d6+9
    per: 1d6+10
    aur: 1d4+4
    wil: 1d6+8
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Horn Sweep
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Horn Sweep
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Trample
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Trample
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 6}
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
      weight: {base: 475, calc: "475"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[wldbst|Wildebeest]]{float=top-left}

The plain is moving. From horizon to horizon the grass has turned dark, and the dark is made of animals, humped at the shoulder, shaggy in the mane and beard, pressing on together in a slow tide. A low, nasal grunting, gnu, gnu, comes from ten thousand throats, and the dust hangs over them in a yellow cloud. At a river crossing ahead they are pouring into the water, and the crocodiles are waiting.

# Dossier {#dossier}

The Wildebeest, or gnu, is the migratory ox of the southern savanna, four to four and a half feet at the shoulder and three hundred fifty to six hundred pounds. Herds of hundreds of thousands follow the rains around the plains and woodlands of the [[place-sthrnsvnhs|Southern Savannahs]] in a circuit of hundreds of miles. One animal is ordinary, but the herd sustains every predator, every scavenger and every people of the grassland. A wildebeest does not attack a person, though a stampede or a river crossing can kill.

## Presentation

An animal of front-heavy design: the forequarters are high, humped and heavy, with a mane of coarse dark hair from the nape to the withers, while the hindquarters are lean and sloping. The legs are thin for the body, ending in pointed cloven hooves. The coat is short and gray-brown to dark slate, with faint vertical stripes on the flanks. The head is broad, flat-fronted and heavy, with a wide muzzle, small dark eyes and a straggling beard. Both sexes have smooth horns curving out and up like parentheses, thickly bossed at the base in old bulls. It moves with a rocking canter that smooths into a gallop faster than it looks.

## In the Land

Wildebeest graze the short-grass plains and woodland edge of the Southern Savannahs, and each year the herds move in a vast loop. They calve on the short-grass plains in the wet season, thousands within a few weeks, and flow toward the woodlands and the permanent water as the dry season sets in. There is no leader; the herd moves by following its neighbors. The river crossings are where predators gather.

## Key Behaviors

Wildebeest live as a herd, and a lone animal does not last. The herd has no leader; the animals at the front start walking and the rest follow, drawn by the smell of distant rain and fresh grass. They calve in the wet season on the short-grass plains, hundreds of thousands of calves within a few weeks, then move northwest toward woodland and permanent water as the dry season sets in. The route crosses several big rivers, and thousands drown at every major crossing. They crop the grass short, so that it grows back, and their dung and trampling shape the ground. Bulls hold tiny temporary patches in the breeding season, bellowing and clashing horns, and leave them when the herd moves on.

## What the Hunter-Tribes Do

The nomadic hunter-tribes of the savanna time their own movements to the herds' cycle and follow them. The herds supply meat, hide, bone, sinew and horn. A hunting band takes the stragglers and the old at the river crossings, with spears, and does not break up the herd. A crossing is also a hazard, and travelers who find themselves in the path of a herd climb a kopje or a tree. The [[lore-nyalubaclt|Nyáluba]] clans' cattle-drives follow the same routes in the dry season, and a clan avoids a river that is full of dead animals.

## Signs

- A dark band across the horizon that does not stop moving.
- A low, grunting hum carried on the wind, like a swarm of insects.
- Wide trails beaten across the plain, bare and parallel, running to a river.
- A river crossing with a pile of carcasses and crocodiles waiting at the bank.
- A scatter of horns and bones at a ford, bleached white.

## Combat Strategy

A wildebeest does not seek combat and will flee from any predator it detects. The survival strategy is entirely collective: run with the herd, stay in the center, and trust that the sheer number of animals around you makes the odds of being the individual selected by a predator statistically tolerable. Wildebeest that are isolated from the herd — by injury, confusion, or deliberate separation by a hunting predator — panic and attempt to rejoin the nearest group at any cost, running directly toward other wildebeest with a single-mindedness that ignores terrain, obstacles, and occasionally cliffs.

A cornered wildebeest, or one defending a calf, will stand and fight with its horns — lowering the heavy head and sweeping sideways, using the curved horns to hook and slash. The attack is more dangerous than it appears: the horns are heavy and the neck muscles are powerful, and a wildebeest's horn sweep can gut a hunting dog or break a hyena's jaw. Bulls in rut also spar with each other, dropping to their knees and pushing head-to-head in shoving contests that test strength but rarely cause serious injury.

The most dangerous aspect of wildebeest is not the individual but the herd in motion. A stampeding herd of wildebeest is a wall of bodies weighing thousands of tons collectively, and anything in its path — human, horse, camp, or small structure — is simply crushed. Stampedes are triggered by predator attacks, sudden noise, and sometimes by nothing apparent, and the blind momentum of the running herd carries it over cliffs, into rivers, and through terrain where the front ranks die and the rear ranks trample over them. River crossings are stampedes compressed into bottlenecks, and the drowning toll is as much from the crush of bodies as from the water itself.

## Attack Methods

### Horn Sweep

A defensive attack used when cornered or defending young. The wildebeest lowers its head and sweeps the curved horns laterally, hooking at whatever is within range. The horns are not sharp-tipped but the sweeping force, driven by the heavy neck, is sufficient to knock a human off their feet, break ribs, and cause deep bruising or tearing wounds where the horn's curve catches flesh. Against smaller predators — jackals, painted dogs, lone hyenas — the horn sweep is dangerous and can be lethal.

### Herd Stampede

Not an intentional attack but the most lethal phenomenon associated with wildebeest. When the herd panics, the stampede that results is an unstoppable force: thousands of animals running flat-out in the same direction, each one following the animal ahead of it, with no individual capable of stopping or turning against the flow. Anything in the path of a wildebeest stampede — including other wildebeest — is trampled. The force is equivalent to a flash flood of flesh and bone, and escape requires getting to the side of the flow, never to the front.

## Special Abilities

### Migration Instinct

The wildebeest possesses an innate navigational ability that allows herds to follow the rains across hundreds of miles of featureless savanna with great accuracy. They detect distant rainfall through senses that may include smell (the scent of rain on dry earth carries for miles), hearing (distant thunder), or some form of atmospheric pressure sensitivity. This instinct is not learned — calves born in captivity and released onto the savanna will orient toward distant rain without instruction. For the nomadic peoples who follow the herds, the wildebeest's direction of travel is a more reliable weather forecast than any human method.

### Synchronized Calving

Wildebeest females give birth in a synchronized burst, with the majority of the year's calves born within a two-to-three-week window. This strategy overwhelms predators: even if lions, hyenas, and painted dogs hunt continuously during the calving season, they cannot consume more than a tiny fraction of the calves produced. The surviving calves are on their feet and running within minutes of birth — the fastest development of any large ungulate — and within days they are capable of keeping pace with the herd. This synchronized survival strategy is the wildebeest's answer to the predation pressure that accompanies them at every stage of their lives.

### Herd Dilution

The wildebeest's primary survival mechanism. In a herd of fifty thousand, the probability that any individual wildebeest is the one selected by a predator is vanishingly small. This statistical protection is the reason wildebeest form such enormous aggregations — the larger the herd, the safer each individual. The strategy works at the population level even though it fails for the individuals that are taken, and the wildebeest's entire biology is oriented toward herd membership: they are calmer in groups, more alert in groups, and physiologically stressed when isolated.

### Grassland Shaper

The wildebeest migration is not merely an animal event but a geological and ecological force. The herds' grazing maintains the savanna's grassland character by preventing woody vegetation from establishing. Their dung fertilizes millions of acres annually, and the nutrients deposited at river crossings (from the thousands of carcasses that accumulate each year) create localized zones of extraordinary fertility. The trails worn by the migration route persist between years, creating pathways that other animals and humans follow. The wildebeest does not merely inhabit the savanna — it creates and maintains it.

## Attributes

Strength
: 11-16 (1d6+10)

Endurance
: 11-16 (1d6+10)

Dexterity
: 9-14 (1d6+8)

Agility
: 10-15 (1d6+9)

Perception
: 11-16 (1d6+10)

Aura
: 5-8 (1d4+4)

Will
: 9-14 (1d6+8)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
