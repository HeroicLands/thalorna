---
shortcode: scklclwt
name: {full: Sickleclaw Troodon, aliases: []}
type: being
subType: creature
description: "A small bipedal predator that overwhelms prey through stealth, patience, and terror rather than brute strength, stalking forests and ruins."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-dinosaurrex, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+7
    end: 1d6+8
    dex: 1d6+13
    agl: 1d6+12
    per: 1d6+11
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d4+6
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Precision Slash
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Precision Slash
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 0, aspect: edged}
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
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Body, shortcode: torsozone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreclaw
            shortcode: lforelegpart
            bodyZoneCode: torsozone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 2
          - name: Right Foreclaw
            shortcode: rforelegpart
            bodyZoneCode: torsozone
            roles: *a1
            canHoldItem: false
            probWeight: 2
          - name: Left Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Right Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
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
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
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
          - name: Left Foreclaw
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreclaw
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 100, calc: "100"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[scklclwt|Sickleclaw Troodon]]{float=top-left}

In the ruins, in the last of the daylight, something is tapping on stone. A light, rapid click-click-click comes from the dark behind you, and a moment later from the left. You turn, and a lean, feathered shape, no taller than your chest, stands in the doorway of a roofless room, brown and gray and mottled. Large, reflective eyes shine at you. The hind foot lifts and shows a curved claw as long as a finger.

# Dossier {#dossier}

The Sickleclaw Troodon is the small, intelligent bipedal hunter of the badlands, ruins and forest edges, three to four feet tall. It hunts in packs and works on its prey's nerves, following for days or weeks just out of sight, tapping its claws on stone and uttering low growls and sudden shrieks until the victim panics. It haunts the scrub and ruins of the [[place-sthmrchsrgn|South Marches]], the ruined stonework of the [[place-sthrnsvnhs|Southern Savannahs]] and the broken ground at the edge of the forests.

## Presentation

A lean, feathered hunter with a body made for balance and precision. The head is relatively small, with large reflective eyes set forward for forward vision in dim light, and a mouth full of needle-like teeth for cutting. The body is covered in fine, downy feathers, dark brown, gray or mottled. On each hind foot is a sickle-shaped claw two to three inches long, made for slashing. The feet are three-toed, for quiet movement. The tail is long and feathered, for balance and steering.

## In the Land

Sickleclaw troodons haunt the scrub and ruins of the South Marches, the ruined stonework of the Southern Savannahs and the broken ground at the edge of the forests. A pack hunts at dusk and through the night, and shelters by day in a ruin or a thicket. They are three or four feet tall, run on two legs and hold their long, curved claws off the ground.

## Key Behaviors

Troodons are clever pack hunters. They stalk their prey for days or weeks, staying just out of view, and the tapping of their claws makes pursuit seem inescapable. Low growls and sudden shrieks panic and disorient. The young are taught to hunt as a pack and learn what the prey does. They are most active at twilight and by night, and hunt at any time when the chance comes. After a kill the remains are sometimes arranged in disturbing patterns, which may be a warning to other packs or a way of talking to them.

## What the Marchers Do

The marcher clans keep their animals within sight of a fire at night and set a watch on the camp. A pack follows a flock or a traveler for days, and the first warning is a faint tapping of claws on stone at the edge of the dark. The clans do not camp in ruins. A pack is driven off with fire and noise, and a sleeping party takes turns on watch. The tales told of troodons in the Marches are tales of being followed and not seen.

## Signs

- A faint click-click-click of claws on stone, behind a camp in the dark.
- Three-toed prints in a line, with a long gap between them, and a gouged mark where the sickle claw touched the ground.
- A flock bunched in its fold, all the animals looking the same way.
- A short, sharp shriek out of the brush that is answered from the other side.
- A kill torn open at the belly, with the neck-bones untouched.

## Combat Strategy

Troodons rarely engage in direct sustained combat, preferring psychological warfare and coordinated ambush. A pack will stalk, harass, and create opportunities for individual troodons to make precision strikes at vital areas. The creatures attack weak points — eyes, throat, unarmored joints — with blinding speed, withdraw, and allow the prey to suffer while the pack continues pursuit. This strategy is designed to demoralize and weaken prey across extended engagement rather than to achieve immediate victory. A cornered troodon becomes more aggressive, and a pack defending young shows suicidal determination.

## Attack Methods

### Precision Slash

The troodon executes a high-speed slash with its sickle claw, targeting eyes, throat, or the vulnerable underside of the arm or leg. The attack is designed for precision rather than raw damage and is extremely difficult to defend against due to speed.

### Bite Attack

The troodon's bite, while not delivering crushing force, is designed to create precision wounds and lacerations. Multiple bites can create severe blood loss and debilitation.

### Coordinated Attack

Pack members attack simultaneously from different directions, making it nearly impossible for a target to defend against all threats. The pack uses vocalizations to coordinate timing and target assignment.

## Special Abilities

### Surgical Precision

The troodon's attacks are calculated to target vital areas and vulnerable points. Its strikes land more surely against unarmored targets and at the vital areas (throat, eyes, joints).

### Psychological Warfare

The troodon's tapping claws, eerie vocalizations, and relentless stalking create cumulative psychological pressure on prey. Prolonged exposure to troodon hunting can cause terror, paranoia, and disorientation in victims.

### Pack Coordination

Troodons communicate through sophisticated vocalizations and body language, allowing coordinated attacks that are nearly impossible for individuals to defend against. Pack members instinctively support each other in combat.

### Reflective Eyes

The troodon's eyes are adapted for maximum light gathering and low-light vision. The creature can navigate and hunt in near-total darkness and is particularly vulnerable to sudden bright light.

### Stealth and Speed

The troodon is very quick and quiet, capable of approaching prey without detection. It is hard to hear or see until it strikes, and it can move at speed while remaining relatively silent.

### Additional Information

Troodons are much less dangerous when isolated from pack support or in well-lit areas. The creatures are vulnerable to sustained, organized defense but are superlative at breaking down demoralized or already-wounded prey. Some humanoid cultures view troodons as omens of death and have elaborate rituals for handling or avoiding encounters. A troodon that has successfully hunted humanoids becomes more likely to target humans in future encounters.

## Attributes

Strength
: 8-13 (1d6+7)

Endurance
: 9-14 (1d6+8)

Dexterity
: 14-19 (1d6+13)

Agility
: 13-18 (1d6+12)

Perception
: 12-17 (1d6+11)

Aura
: 8-11 (1d4+7)

Will
: 10-15 (1d6+9)

Reasoning
: 7-10 (1d4+6)

Creativity
: 6-9 (1d4+5)
