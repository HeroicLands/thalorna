---
shortcode: mntrlzrd
name: {full: Monitor Lizard, aliases: []}
type: being
subType: creature
description: "A large, agile reptile five to seven feet long with a camouflaged hide and muscular neck, a lean predator of arid and rocky terrain."
tags: [animal, creature]
data: {packFolder: animals, icon: gecko, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+9
    end: 1d6+7
    dex: 1d6+9
    agl: 1d6+8
    per: 1d6+8
    aur: 1d4+6
    wil: 1d6+7
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Powerful Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Powerful Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Lash
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 54
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Lash
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 20, calc: "20"}
      reachBase: 0
      bodyScaleBase: 1.11
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

![[mntrlzrd|Monitor Lizard]]{float=top-left}

A slab of the sun-heated rock moves. It is a lizard, yellow-brown and gray, with darker bands across its back, five or six feet long. The rough scales along its spine and tail stand up in knobs. A forked tongue flicks out and back. It turns a small dark eye toward you, then spins and runs, fast, across the stones, tail whipping, and goes headlong into the river and swims.

# Dossier {#dossier}

The Monitor Lizard is the five- to seven-foot lizard of the dry margins, fifteen to thirty-five pounds, found at the desert edge of [[place-aukhelathrgq|Aû'Khelâthu]], in the river margins and hot forest of [[place-vedyarargn|Vedyara]] and in the scrub of the [[place-dunhardsrtrgn|Dunhara Desert]] near the wells. It hunts on the ground, climbs after birds' eggs and dives after fish, and eats carrion.

## Presentation

A large, agile lizard with rough, knobbed scales in yellow, brown and gray with darker banding or mottling that matches rock and sand, ridged along the spine and tail. The build is lean and muscular. The head is small and triangular from above, with a strong jaw and small dark eyes. The tail is nearly half the length and is used for balance, swimming and fighting. The claws are sharp and curved for climbing, and the tongue is long and forked.

## In the Land

Monitor lizards live on the dry scrub and rocky ground at the edge of the desert in [[place-aukhelathrgq|Aû'Khelâthu]], in the river margins and hot forest of [[place-vedyarargn|Vedyara]] and in the scrub of the [[place-dunhardsrtrgn|Dunhara Desert]] near the wells. A lizard keeps a burrow under a rock or in a bank and ranges a few miles. It climbs into trees after eggs, swims after fish and runs down rats, and several will meet at a carcass.

## Key Behaviors

Monitors take whatever comes: prey on the ground, nests in the trees, fish in the water. They live alone but gather at carcasses and rich feeding grounds. They climb, swim and run well, hunt by sight, and are active by day, retreating to burrows or crevices at night or in extreme heat.

## What the Villages Do

Villages tolerate the monitors that stay at the edge of the fields, since they eat rats and snakes. They shut their hen-houses at night and keep egg-baskets off the ground. A boy sent to take a lizard's eggs wears thick boots. The hide is tough and is made into drum-heads and sandals, and the meat is eaten in lean years. A bite from a big one is washed and bound at once. Traders who cross the desert margin sleep with their food hung from a pole.

## Signs

- A broad, shallow trail in sand with a wavy line of tail-drag down the middle.
- A long, yellow-and-gray lizard flat on a hot rock that scuttles off at a run when approached.
- Eggshells scattered under a nesting tree and a rope of drag-marks to a burrow.
- A forked tongue tasting the air at the edge of a pond.
- A hole in a mud bank the width of a man's thigh with claw-scratches around it.

## Combat Strategy

Monitor lizards prefer to use speed and agility to advantage, striking from unexpected angles or retreating before a stronger opponent can mount an effective counterattack. They bite and claw at the head and neck of prey to disable it quickly. If facing a larger or more formidable opponent, they rely on hit-and-run tactics, biting and escaping to higher ground. Their tail is used as a secondary weapon to create distance and inflict slashing damage on pursuers.

## Attack Methods

### Powerful Bite

The monitor lizard lunges to clamp its jaws on the target’s head, limb, or body, delivering puncture damage and tearing; the bite can sever fingers or toes and can cause serious bleeding.

### Tail Lash

The lizard sweeps its whip-like tail to strike opponents at distance or to defend itself from threats; the tail strike can knock smaller opponents off balance, disarm weapons, or inflict slashing damage.

## Special Abilities

### Climber’s Grip

Monitor lizards can traverse vertical and inverted surfaces with ease, using their sharp claws for grip; they climb and escape quickly, and can retreat to places opponents cannot easily follow.

### Swift Strike

Monitor lizards have quick reflexes and often strike first or twice before an opponent has reacted, because of their speed and agility.

### Aquatic Hunter

Monitor lizards are equally at home in water as on land, able to hold breath for extended periods and move with perfect grace through aquatic environments.

## Attributes

- **Strength:** 10-15 (1d6+9)

- **Endurance:** 8-13 (1d6+7)

- **Dexterity:** 10-15 (1d6+9)

- **Agility:** 9-14 (1d6+8)

- **Perception:** 9-14 (1d6+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
