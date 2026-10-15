---
shortcode: crow
name: {full: Crow, aliases: []}
type: being
subType: creature
description: "A clever, adaptable passerine thriving alongside humans, showing curiosity, problem-solving, and a memory that lends each bird real personality."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-crowdive, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4
    end: 1d4+6
    agl: 1d6+7
    per: 1d6+19
    snt: 1d4+1
    aur: 1d4+4
    wil: 1d6+7
    rea: 1d4+6
    cre: 1d6+7
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 2}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 22}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 15}}
    - name: Talon
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 40
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -9, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Beak
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 44
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -8, aspect: piercing}
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
          - {name: Body, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: headzone
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
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
      weight: {base: 1.5, calc: "1.5"}
      reachBase: 0
      bodyScaleBase: 0.33
      personalFatigue: enc + 5
    currentMoveMedium: aerial
    movementProfiles:
      - medium: aerial
        feetPerRound: 200
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: terrestrial
        feetPerRound: 20
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[crow|Crow]]{float=top-left}

A flock lifts off the stubble field all at once, a ragged black cloud cawing, and settles again on the fence. One bird stays on the post nearest you. It tilts its head and watches you with one bright eye, then drops to the ground, takes something shiny from the grass and flies off with it. The others go on calling, to each other and about you.

# Dossier {#dossier}

The Crow is the black bird of the fields, villages and battlefields, sixteen to twenty-one inches long and one to two pounds, found from the clearings of [[place-vrystwald|Vrystwald]] and the grain country of [[place-velanthrgn|Velanthia]] to the towns of every kingdom south of them. It is clever, curious and a thief, and it recognizes the faces of the people who have harmed it. A single crow is no danger, and a flock will harry and distract. The crow is the wesk of several Varokh villages.

## Presentation

A medium-sized black bird whose plumage shows blue and purple in the light. The head is large, with a bright eye at the side, and the beak is thick, strong and slightly curved. The tail is squared and works as a rudder. The feet grip a perch firmly and hold food. The build is for steady flight and careful handling of objects rather than for speed.

## In the Land

Crows live wherever there are people: on the fields and farm-clearings of [[place-vrystwald|Vrystwald]], in the grain country of [[place-velanthrgn|Velanthia]], around the villages and harbors of the Nordlands and in the towns of every kingdom to the south. A flock roosts in a stand of tall trees and spreads out by day to the fields, the middens and the roads. Pairs nest in the same tree each year, and a flock of dozens may share a roost.

## Key Behaviors

Crows live in flocks of dozens to hundreds, ruled by dominant birds that control food. They recognize human faces, remember those who have harmed them and tell the flock about them. They use sticks to draw insects out of crevices, call in many different voices, and appear to play. They are thieves of shiny objects, which they hide, and scavengers that follow hunters and eat what the hunters leave. They pair for life. They eat anything from insects and seeds to small animals and refuse, and live twenty-five years or more.

## What the Villages Do

The Varokh villages that keep the crow as their wesk, among them Hildrýth, Skathrýth and Rádholt, will not harm one. Elsewhere farmers scare crows from sown fields with scarecrows, clappers and boys with slings, and pay a bounty for a pair of feet. Crows learn the face of a person who has harmed them, and teach it to the flock. A shepherd on a hillside watches them, since a flock that gathers is a sign of a carcass, a fox or a wounded animal. The black feathers are used for fletching and for the quills of the lower scribes.

## Signs

- A flock rising together from a field with a harsh chorus, wheeling and settling again.
- A single bird on a fence-post that watches a person pass and turns its head to follow.
- A ring of crows standing around a carcass in the road, too wary to eat.
- Shiny bits of tin, glass and wire in the crotch of a tree, among old sticks.
- A bird that drops a nut on a road, waits for a cart to break it and hops down after.

## Combat Strategy

Individual crows rarely engage in direct combat with humans or large animals. When threatened, they prefer to flee to the air, where they are safer from ground-based threats. In flocks, however, crows become considerably bolder. Multiple crows will mob predators—a coordinated behavior where the flock works together to distract, harass, and attack. While individual pecks cause minimal damage, dozens or hundreds of pecks over sustained time can cause significant injury and blood loss. Crows attacking in groups focus on eyes, face, and exposed hands, attempting to cause discomfort and distraction sufficient to drive the threat away. Crows will also steal food, distract opponents, and use intelligence to identify weaknesses in a target's defenses.

## Attack Methods

### Pecking Attack

A single peck from a crow's beak causes minor trauma but can target sensitive areas: eyes, face, ears, or hands. Multiple pecks accumulate damage and cause progressive pain and distraction. Crows often target the eyes, attempting to blind or at least discomfort the target.

### Dive-bombing

Using aerial superiority, a crow will dive at a target from above, attempting to strike the head, face, or back. The momentum of the dive adds force to the impact. Repeated dives can daze or confuse targets.

### Coordinated Group Harassment

When multiple crows coordinate, they create sustained harassment through simultaneous attacks from multiple angles. The target cannot defend against all attacks simultaneously, ensuring that some pecks land while others are blocked.

## Special Abilities

### Intelligence and Problem-solving

Crows are problem-solvers capable of understanding cause and effect, spatial relationships, and even basic tool use. This intelligence allows them to exploit weaknesses in defenses, identify vulnerable targets, and adapt tactics in real-time. A crow or group of crows may engage in deception: creating distraction to allow steal attempts, or driving prey toward obstacles.

### Aerial Superiority and Maneuverability

Crows are skilled fliers with superior maneuverability to most other birds. They can hover, turn sharply, and navigate complex terrain from the air. This aerial advantage makes them difficult to target and allows them to attack from positions that ground-based opponents cannot defend against effectively.

### Complex Communication and Coordination

Crows communicate through a sophisticated system of vocalizations and body language. Flocks demonstrate collective behavior, including coordinated attacks, shared defense, and problem-solving. Information about dangerous humans, food sources, and threats is transmitted through populations—a crow that has learned a human is dangerous will communicate that information to other crows, and that information may spread far beyond the original encounter.

### Persistence and Grudge-holding

Crows have been documented holding grudges against individual humans for years, and corvids are known to recognize faces and communicate about dangerous individuals. A crow that has been harmed by a particular human may actively harass that human in future encounters, and may communicate that information to other crows, leading to group harassment from birds the human has never directly encountered.

## Attributes

- **Strength:** 1-4 (1d4)

- **Endurance:** 7-10 (1d4+6)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 20-25 (1d6+19)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 5-8 (1d4+4)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 8-13 (1d6+7)
