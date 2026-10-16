---
shortcode: fox
name: {full: Fox, aliases: []}
type: being
subType: creature
description: "A small, cunning solitary carnivore of forests and settlement margins, notorious for raiding coops and outwitting traps and hounds."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-fox, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+1
    end: 1d6+7
    agl: 1d6+12
    per: 1d6+13
    snt: 1d4+2
    aur: 1d4+2
    wil: 1d6+11
    rea: 1d4+5
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 24}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 75
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -6, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 60
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
      weight: {base: 13, calc: "13"}
      reachBase: 0
      bodyScaleBase: 0.43
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 100
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[fox|Fox]]{float=top-left}

At the edge of the field, where the stubble meets the hedge, a red shape is sitting in the last of the light. It has watched you for some time. It rises, shakes itself, looks back over its shoulder, and trots off along the ditch with its brush held out behind it. A hen-house door stands ajar at the farm below, and one of the hens is missing.

# Dossier {#dossier}

The Fox is the small red hunter of the woods, hedges and field margins, twelve to fifteen inches at the shoulder and up to thirteen pounds. It lives in the clearings of [[place-vrystwald|Vristwald]], the forest-steppe of [[place-velanthrgn|Velanthia]], the Silver Forests of Élavendre, the Nordlands coast and the northern tundra of Ishtem Tsul, and it raids hen-houses, escapes traps and leads dogs astray. It is the wesk of several Varokh villages.

## Presentation

A small, lean, muscular animal with a russet or rust-orange coat and a white underside. The ears are large, pointed and set high, for sharp hearing. The tail is long and bushy, tipped with white or black. The face is narrow, with a sharp muzzle and amber or golden eyes. It is built for quick bursts of speed and agility.

## In the Land

Foxes live in the woods, hedges and field margins of nearly every settled country: the clearings of [[place-vrystwald|Vristwald]], the forest-steppe of [[place-velanthrgn|Velanthia]], the Silver Forests of Élavendre, the cold coast of the Nordlands and the northern tundra of Ishtem Tsul, where the arctic fox grows its white winter coat. A fox digs an earth in a bank or a hollow under roots, ranges several miles at night around the farms, and eats mice, voles, hens, eggs and windfalls.

## Key Behaviors

Foxes are active at dawn, dusk and night. They live alone except in the mating season, when pairs form for a time. A fox holds a home range and hunts mice, voles, rabbits, hares and birds, and takes insects, fruit and scraps. They remember the traps and avoid obvious dangers, and they test the bounds of their surroundings. A fox with a dog or a person after it often leads the pursuit on a long chase and slips away without effort.

## What the Farmers Do

A farmer keeps hens shut in at night and the hen-house door barred, and sets a snare at a gap in the hedge where a fox has been. Hunters of Vristwald ride after a fox with hounds, and trappers sell the fur through the Nordlands trade. The fox is the wesk of Vristwald villages such as Balthhaven and Thornholt. In the Silver Forests the Sinale tell of Kiltas, the Red Fox of the Lower Wood, a thief and bargainer among the Kindred; [[lore-kiltasspr|Kiltas]] is the one spirit there that will renegotiate its terms. Fox pelts are among the furs traded as currency.

## Signs

- Small, narrow tracks in a straight line across a snowfield, one print placed exactly in the last.
- A scatter of feathers in a hen-run, a hole under the fence and no hen.
- A musky, skunk-like smell at the mouth of an earth in a bank.
- A red shape on the edge of a field at dusk that sits down to watch the observer.
- A trap-line sprung, the bait gone and the snare undisturbed.

## Combat Strategy

A fox's only honest combat strategy is immediate flight. Foxes are built for speed and agility, not for sustained combat, and they will abandon engagement with any creature that poses serious threat. If truly cornered or defending a den with young, a fox will fight desperately with bites and scratches, but such desperation is rare. A hunted fox may deliberately lead pursuers through terrain that disadvantages larger bodies—between rocks, through dense brush, across streams—wearing out the pursuer through exhaustion rather than direct engagement.

## Attack Methods

### Quick Bite

A snapping attack using the fox's sharp teeth to bite at limbs, throat, or anything accessible. The fox relies on speed and multiple strikes rather than a single powerful bite.

### Scratching Rake

Using the sharp claws on its paws, the fox rakes at a target's face, legs, or exposed flesh. This is primarily a defensive measure when escape is impossible.

## Special Abilities

### Cunning Escape

The fox possesses a great ability to understand and exploit terrain in its favor. It knows escape routes, hiding places, and can navigate broken ground at full speed while larger creatures stumble. A fox pursued by humanoids or dogs will often lead pursuers in loops and spirals before disappearing entirely.

### Keen Senses

Sharp ears that swivel independently to pinpoint sound sources, excellent low-light vision, and a keen sense of smell give the fox advantages in hunting and in noticing approaching threats before other creatures. A fox can detect movement from a considerable distance and can often tell the nature of an intruder (human, animal, known or unknown) by scent alone.

## Additional Information

Foxes in human-occupied territory often become semi-tame, stealing food but avoiding direct contact with humans. Some characters have successfully befriended foxes through offering consistent food and gentle treatment, eventually training a fox as a companion. A fox's pelt is valuable for clothing and trade. Foxes are featured prominently in folklore and old stories as tricksters and wise advisors—some cultures consider them sacred or taboo to hunt.

## Attributes

- **Strength:** 2-5 (1d4+1)

- **Endurance:** 8-13 (1d6+7)

- **Agility:** 13-18 (1d6+12)

- **Perception:** 14-19 (1d6+13)

- **Scent:** 3-6 (1d4+2)

- **Aura:** 3-6 (1d4+2)

- **Will:** 12-17 (1d6+11)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 7-10 (1d4+6)
