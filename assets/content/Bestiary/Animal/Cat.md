---
shortcode: cat
name: {full: Cat, aliases: []}
type: being
subType: creature
description: "A small solitary predator living between wild and tame, hunting vermin with lethal efficiency while tolerating the humans it shares hearths with."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-cat, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+1
    end: 1d4+6
    agl: 1d6+15
    per: 1d6+13
    snt: 1d4+1
    aur: 1d4+2
    wil: 1d6+15
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 15}}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -7, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 54
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -5, aspect: piercing}
          lengthBase: 0
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
            roles: &a1 [locomotor, manipulator]
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
            roles: []
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
            protectionBase: {blunt: -3, edged: -4, piercing: -5, fire: -3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: -3, edged: -4, piercing: -5, fire: -3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -3, edged: -4, piercing: -5, fire: -3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -3, edged: -4, piercing: -5, fire: -3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: -3, edged: -4, piercing: -5, fire: -3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: -3, edged: -4, piercing: -5, fire: -3}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: -3, edged: -4, piercing: -5, fire: -3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -3, edged: -4, piercing: -5, fire: -3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -3, edged: -4, piercing: -5, fire: -3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -3, edged: -4, piercing: -5, fire: -3}
      weight: {base: 10, calc: "10"}
      reachBase: 0
      bodyScaleBase: 0.43
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[cat|Cat]]{float=top-left}

The granary is dim and smells of dust and old grain. On the beam above the door two green-gold points shine out of the dark and do not blink. A small, sleek shape is lying along the timber with its tail hanging, quite still. Then the tail twitches, the shape drops soundlessly to the floor and crosses it, and there is a sharp, quick sound in the corner.

# Dossier {#dossier}

The Cat is the house cat of the villages, granaries, ports and temple precincts of the settled lands, five to fifteen pounds and eight to ten inches at the shoulder. It keeps the rats and mice out of the grain and lives half-tamed beside people, as a hearth cat, a street cat or a field cat. A cat feeds and sleeps where it likes, tolerates other cats while food is plentiful, and bites and rakes if it is cornered or handled roughly.

## Presentation

A small, sleek animal with a flexible, muscular body built for stealth and climbing. The head is broad, with pointed ears that turn independently and large forward-set eyes that shine in the dark. The teeth are sharp and the tongue is rough. The claws are retractable and kept sharp by use. The tail, a third of the cat's length, serves for balance and signals. The coat runs from short and sleek to long and full, in every color from snow-white to jet black. Males mark their ground with a pungent scent.

## In the Land

Cats live wherever grain is stored: in the villages of [[place-vrystwald|Vristwald]], the granaries of [[place-velanthrgn|Velanthia Region]], the warehouses of the ports of [[place-heladrgn|Hellád Region]] and the temple precincts of [[place-aukhelathrgq|Au'Khelathu Region]]. A house cat keeps a few rooms, a kitchen and a barn loft, and a street cat the alleys of a quarter. Some keep to the fields and live as wild animals, and these are leaner and more watchful than the hearth cats.

## Key Behaviors

Cats rest through the day in warm, high places and become active at dusk, hunting mice, rats, birds, insects and small reptiles. A cat watches a hunting ground for many minutes before it pounces. Males hold ranges and fight other cats for them. Cats bond with people and with cats they grew up beside, and spend a good part of the day grooming. A cat that has been ill-treated avoids the person for good, and one that has been fed and treated kindly seeks out his company. Wild cats are largely nocturnal.

## What People Do

A household keeps a cat to hold down mice and rats around the grain, and feeds it with the scraps. A ship's cat is carried on a long voyage and is held to bring good luck. Granary-keepers pay for a good mouser and keep her through the winter. In the great ports they live on the quays and in the fish-markets, and the fishermen leave them the guts of the catch. A cat that is cornered or handled roughly bites and rakes, and the wounds fester easily.

## Signs

- A pair of eyes shining from a granary beam at night, and then no mice in the morning.
- A row of small, neat paw-prints across a floured table or a dusty windowsill.
- A dead rat laid on a doorstep.
- A pile of feathers in the corner of a garden where a bird-table stood.
- A purr, a long yowl in the dark and a clatter of tiles.

## Combat Strategy

Cats defend territory against other cats through ritualized display and direct fighting, but they avoid confrontation with larger animals. If cornered or if protecting young, a cat will fight with surprising ferocity, using both claws and teeth to inflict wounds. Their strategy is to inflict rapid damage and then retreat to a place of safety—usually elevated terrain or enclosed space. Cats use speed and agility to avoid being struck, dodging attacks and moving in unpredictable patterns. A cornered cat will present a much larger silhouette by raising its fur, arching its back, and turning sideways—this display is meant to intimidate. If the threat does not back off, the cat will attack the face and eyes with claws, attempting to blind or injure the attacker severely enough to allow escape.

## Attack Methods

### Claw Strike

The cat rakes with its claws, using its front paws in rapid succession. The claws are razor-sharp and designed to penetrate skin and cause bleeding. While individual scratches are shallow, multiple rapid strikes can create wounds that become infected or bleed excessively. Cats instinctively target the face and eyes, seeking to disable attackers by compromising vision.

### Bite

The cat's teeth are small and sharp, designed to pierce soft targets and sever small arteries. A bite to the face, neck, or hands can cause significant blood loss and severe pain. Cats often bite and hold, shaking their head to increase damage. The bite itself is less dangerous than the claws but carries high infection risk due to the fine puncture wounds.

### Grappling and Kicking

When a larger opponent attempts to grab a cat, the cat often wraps its front legs around the threat while using its hind legs to kick and rake. The hind legs are particularly powerful, and claws embedded in both front and hind limbs can prevent escape and inflict severe lacerations.

## Special Abilities

### Silent Movement and Stealth

Cats move with minimal sound due to the soft pads of their paws and their naturally graceful, controlled movement. Their lightweight frames and joint flexibility allow them to navigate cluttered terrain without disturbing objects. In dim light or cluttered environments, a cat can approach unseen and achieve surprise without difficulty.

### Superior Agility and Balance

Cats possess extraordinary balance and proprioception, allowing them to land feet-first from falls that would injure humans, to navigate narrow ledges and precarious terrain, and to dodge with great precision. Their flexibility allows them to contort their spine in ways that let them escape grapples and reach targets that seem inaccessible.

### Acute Senses

Cats possess keen night vision, seeing clearly in light levels that appear dark to humans. Their hearing is acute enough to detect ultrasonic sounds that humans cannot perceive. Their sense of smell is strong, allowing them to track prey and navigate by scent alone. Combined, these senses make cats very aware of their surroundings and difficult to surprise.

### Territorial Aggression

When defending territory, young, or personal space, cats fight with disproportionate ferocity. A small cat cornered will attack much larger opponents with suicidal intensity, targeting vulnerable areas and attempting to inflict maximum damage rapidly. This aggression is not rational but instinctive—a cornered cat will not flee merely because the threat is larger.

## Attributes

Strength
: 2-5 (1d4+1)

Endurance
: 7-10 (1d4+6)

Agility
: 16-21 (1d6+15)

Perception
: 14-19 (1d6+13)

Scent
: 2-5 (1d4+1)

Aura
: 3-6 (1d4+2)

Will
: 16-21 (1d6+15)

Reasoning
: 4-7 (1d4+3)

Creativity
: 4-7 (1d4+3)
