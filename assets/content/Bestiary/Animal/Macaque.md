---
shortcode: macaque
name: {full: Macaque, aliases: [Temple Monkey]}
type: being
subType: creature
description: "A stocky, intelligent medium-sized monkey of the monsoon south thriving everywhere from temples to cities by stealing and extorting food from humans."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: monkey, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+5
    end: 1d4+6
    dex: 1d6+11
    agl: 1d6+11
    per: 1d6+10
    aur: 1d4+5
    wil: 1d4+7
    rea: 1d6+7
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 23}}
    - name: Canine Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Canine Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: piercing}
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
          - {name: Arms, shortcode: armszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Legs, shortcode: legszone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 25, calc: "25"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[macaque|Macaque]]{float=top-left}

A small gray-brown monkey sits on the temple wall with its knees up, eating your neighbor's rice-cake. Its face is bare and pinkish, with a short, upturned muzzle that is oddly human. Its hand, with fingers and a thumb and fingernails, reaches out and unties the string of a market bag as you watch. It checks to see whether you have noticed, and then it does not run. It bares its teeth.

# Dossier {#dossier}

The Macaque is the common monkey of the monsoon south, twenty inches long on all fours and ten to twenty-five pounds, found in the forests, temple complexes, towns and fields of [[place-vedyarargn|Vedyara]]. It sits on temple walls, steals from market stalls, raids granaries and snatches food from pilgrims' hands. Monkeys are sacred in the south, and the temple troops that are fed by priests and pilgrims are fearless and aggressive, and cannot be killed or removed without religious and legal trouble, even when a big male bites children or a troop ruins a field.

## Presentation

A compact, muscular monkey with a stocky, strong body, heavier-boned than a langur. The coat is coarse and dense, gray-brown to olive-brown, paler on the belly. The face is bare, pink to reddish brown, with prominent brows, deep-set eyes and a short, upturned muzzle. Cheek pouches hold a lot of stolen food. The hands have four fingers, a thumb, nails and fingerprints, and can untie knots, open latches and pick pockets. The feet work as a second pair of hands. The tail is of medium length and is used for balance. An adult male's long canines show in a threat yawn.

## In the Land

Macaques live in the forests, temple complexes, river towns and cities of [[place-vedyarargn|Vedyara]]. A troop of twenty to a hundred holds a stretch of forest edge or a quarter of a city, sleeps in the high trees and on temple roofs and comes down to the markets and granaries at dawn. A troop in the wild forest is shy; a troop that has lived among people is bold, and the same animal knows which stall-keepers carry sticks.

## Key Behaviors

Macaques live in troops of twenty to a hundred or more, ruled by a matrilineal order in which a female takes her mother's rank, kept by alliance, grooming and enforced by violence. Males leave their birth troop and fight their way into another, where they follow a looser order of their own. Alliances, favors and grudges fill troop life. They remember individuals for years, including human faces, and a monkey that has stolen from a person tries again, while one that has been chased away avoids him. In towns they know which stalls are watched, which people feed them and which chase them, and some troops steal a hat or an offering and drop it only for a food bribe. They eat nearly anything, including the leather of a belt, candle wax and paper.

## What the Temples Do

Monkeys are sacred in the south, and the temples feed their troops and forbid anyone to strike one. Pilgrims buy fruit at the gate to give them. A stall-holder has no remedy against a theft, and learns to hang his goods out of reach and to keep a boy with a stick to scare, not to hit. A farmer whose field has been stripped may ask the priests to move the troop, which they do by feeding it elsewhere. The macaques know which people give and which people chase, and teach it to the young. A pilgrim holds a bag close and does not show food.

## Signs

- A row of animals on a temple wall, watching a pilgrim's hands.
- A basket of fruit upset in the market, with a streak of fur and a screech leaving it.
- A thatch roof pulled to pieces from the edge, with the store beneath it empty.
- A troop moving along a roofline in single file, the young riding on their mothers' backs.
- A snatched cloth or a cap lying on a wall, returned for a coin.

## Combat Strategy

A single macaque confronted by a human will generally retreat — not out of fear but out of pragmatic assessment. A troop of macaques confronted by a single human will not retreat. Macaque aggression follows the mathematics of numbers: a macaque that is outnumbered is submissive; a macaque with allies is bold; a macaque in a large troop on home territory is capable of real violence.

Aggressive encounters with humans follow a predictable escalation. The macaque begins with a threat display: staring, brow-lowering, ground-slapping, and the open-mouthed yawn that shows the canines. If the human does not back down, the macaque may charge — a short, explosive rush accompanied by screaming that is designed to panic rather than injure. If the human still does not retreat, the macaque (especially if supported by troop-mates) will attack with real intent: lunging, biting, and scratching with a frenetic speed that makes defense difficult.

Macaque attacks on humans are rarely life-threatening but are always unpleasant. The bites are deep puncture wounds from the canines, the scratches are long and ragged from the nails, and both are prone to infection. A troop of macaques mobbing a single human — biting, scratching, pulling hair, screaming — is a psychologically overwhelming experience even if the physical injuries are individually minor. The cumulative effect of a dozen simultaneous attacks from creatures that can climb onto your back, shoulders, and head is panic, which is exactly the macaques' intent.

## Attack Methods

### Canine Bite

The macaque lunges and bites with its prominent canines, targeting hands, forearms, faces, and any exposed skin. The canines are sharp enough to puncture through to the bone in thin-fleshed areas like the hand, and the bite is delivered with a snapping speed that makes it difficult to block. Male macaques in particular can inflict wounds that require medical attention.

### Mob Attack

Multiple macaques attack simultaneously from different positions — ground level, walls, tree branches, rooftops — leaping onto the target, biting, scratching, and pulling. The combined weight of several macaques hanging from a human's body is substantial, and the disorientation of being attacked from multiple angles by shrieking primates with human-like hands is deeply unsettling. The goal is to overwhelm through numbers and psychological shock rather than through individual damage.

### Theft-and-Flee

Not technically a combat attack, but the macaque's most practiced skill. The monkey darts in, seizes an item — from a hand, a belt, a pocket, a table — and bolts, accelerating to full speed instantly and heading for the nearest vertical surface where it knows humans cannot follow. The theft is executed with a dexterity and timing that professional pickpockets would envy.

## Special Abilities

### Urban Intelligence

Macaques are among the most intelligent animals in the south, capable of observational learning, tool use, problem-solving, and social manipulation. They learn the routines of human settlements, they remember productive theft locations across seasons, and they teach their offspring through demonstration. A troop of macaques that has lived near humans for several generations has accumulated a body of cultural knowledge about human behavior, human containers, human food storage, and human vulnerabilities that makes them extraordinarily effective exploiters of the human environment.

### Four-Limbed Climbing

Macaques are supreme climbers, capable of ascending walls, trees, buildings, and any surface that offers holds for their grasping hands and feet. They move through urban environments three-dimensionally — running along walls, leaping between rooftops, ascending and descending vertical surfaces — at speeds that ground-bound humans cannot match. This climbing ability gives them access to escape routes, attack positions, and theft opportunities that are inaccessible to their human targets.

### Troop Memory

A macaque troop maintains a collective memory of individual humans. A person who feeds the troop will be recognized, approached, and solicited — potentially forever. A person who has attacked a troop member will be recognized, avoided, and potentially targeted for group aggression. This facial recognition extends to people wearing different clothes, carrying different equipment, or approaching from different directions. The troop knows who you are, and it remembers what you did.

### Sacred Nuisance

Like the peacock, macaques benefit from religious protection in southern settlements. Harming a temple monkey carries social and legal consequences, and communities that have lived with macaque troops for generations have developed elaborate accommodations — designated feeding areas, monkey-proofed storage, accepted loss ratios for market goods — that reflect the reality that the monkeys are simultaneously sacred, protected, and a constant, inescapable headache. For adventurers unfamiliar with southern customs, the discovery that the monkey that just stole their coin purse cannot be legally retaliated against is a formative cultural experience.

## Attributes

- **Strength:** 6-9 (1d4+5)

- **Endurance:** 7-10 (1d4+6)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 6-9 (1d4+5)

- **Will:** 8-11 (1d4+7)

- **Reasoning:** 8-13 (1d6+7)

- **Creativity:** 7-10 (1d4+6)
