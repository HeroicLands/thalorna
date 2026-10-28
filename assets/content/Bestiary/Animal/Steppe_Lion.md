---
shortcode: stppln
name: {full: Steppe Lion}
type: being
subType: creature
description: "A massive solitary ambush predator of open steppes, holding and fiercely defending enormous territories against all intruders."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-lion, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+9
    dex: 1d6+10
    agl: 1d6+11
    per: 1d6+12
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Devastating Bite
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
          name: Devastating Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Raking Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
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
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
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
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[stppln|Steppe Lion]]{float=top-left}

The grass on the knoll is pressed flat in a long oval, and the rock beside it is scored with claw-marks as high as a standing man's chest and smelling sharply of cat. In the shade of the rocks a tawny shape rises from the stems, much bigger than a hunting dog, a dark mane framing the broad, golden-eyed face. It is alone. It looks at you, and then at your horses, and takes its time.

# Dossier {#dossier}

The Steppe Lion is the lone maned lion of the grass and rocky steppe, four to five feet at the shoulder and ten to twelve feet long, hunting dozens of square miles of the [[place-khzryndsrtrgn|Khazryn]] steppe, the open forest of the [[place-velanthrgn|Velanthian steppe margin]] and the dry uplands of the Bizarian [[place-southrnmrch|March]]. Unlike the lions of the south it does not live in prides. Each cat holds its range alone, resting in a thicket or a rock-pile and watching the herds from cover.

## Presentation

A massive, heavily muscled cat with a golden-tan to pale-brown coat, darker mottling and faint stripes, most visible near the tail and on the legs. A thick, dark mane frames the head and runs down the neck and chest. The face is broad and powerful, with forward-facing amber eyes and strong jaw muscles. The shoulders and forequarters are heavier than the hindquarters. The claws are large and curved. The tail is long and muscular.

## In the Land

Steppe lions hunt the grass and rocky country of the Khazryn steppe, the open forest of the Velanthian steppe margin and the dry uplands of the Bizarian March. Unlike the lions of the south they live alone, each cat holding a range of dozens of square miles, resting in a thicket or a rock-pile and watching the herds from cover. It marks its ground with scent and claw-marks and hunts at night and in the cool of the day.

## Key Behaviors

Steppe lions hunt alone and hold huge ranges of dozens of square miles against other lions. They rest in vegetation or rocky cover and keep an eye on likely prey, and they mark their ground with claw-marks on rocks and trees and scent. They are active in the cooler hours and at night. They are intelligent, remember productive grounds and dangerous hunters, and learn tactics. Outside the mating season they tolerate no other lion on their ground; in it they tolerate a mate for a time, and then part for good.

## What the Tribes Do

The steppe tribes guard their herds at night with fires and dogs and move them from the range of a known cat. A steppe lion that has taken to stock is tracked and killed by a party of riders with spears and bows. The mane is worn by a tribal champion, and the skin is a mark of rank. Travelers on the long road camp in numbers and do not leave the road at dusk. A tribe that sells a camel road by the mile sells a safe camp with it.

## Signs

- Tracks as wide as a hand, four toes and a broad pad, crossing a game-trail.
- A wild horse or onager carcass hauled into a rock-pile, with the haunch eaten.
- A thundering roar at night from a ridge, and then silence.
- Claw-marks and a spray of scent on a boulder at a path junction.
- A band of horses bunched and facing the same way, snorting.

## Combat Strategy

The steppe lion's primary strategy is patience and positioning — the creature waits for prey to pass within range, then attacks with explosive power and speed. The initial strike is designed to kill quickly through catastrophic injury to the neck or spine. If the attack succeeds, the lion feeds. If the initial strike fails, the lion may pursue or may retreat, depending on the threat posed by the prey. Once engaged with a threat it cannot immediately kill, the lion fights ferociously, using claws and teeth to inflict maximum damage while maintaining positioning. A wounded lion becomes more aggressive and dangerous.

## Attack Methods

### Devastating Bite

The steppe lion latches onto prey with its powerful jaw, attempting to sever the carotid artery or crush the trachea through direct throat attack. Alternatively, it bites at the base of the skull, attempting to sever the spinal cord. The bite is powerful enough to puncture bone.

### Raking Claw Attack

Using its powerful forelimbs, the lion slashes with claws capable of tearing through leather and light armor, creating deep lacerations that bleed profusely. Multiple rakes in rapid succession can cause disembowelment.

### Crushing Body Slam

The lion uses its massive weight and momentum to knock opponents off balance or directly to the ground, positioning for follow-up attacks.

## Special Abilities

### Steppe Camouflage

The lion's coloration is extraordinarily effective in grasslands and rocky terrain. It is very hard to see in steppe country and can remain nearly invisible when still.

### Explosive Speed

Despite its size, the steppe lion can accelerate rapidly over short distances, allowing it to close distance on fleeing prey. The initial pounce is devastating in effectiveness.

### Ambush Predator

The lion is superlatively effective when attacking from cover or from a position of advantage. It strikes harder and more surely from ambush or from a hidden position.

### Devastating Strength

A creature of such size and muscle possesses overwhelming strength. The lion can knock large animals and armored humanoids off balance or directly to the ground.

### Territorial Dominance

Within its claimed territory, the lion fights with enhanced confidence and aggression, knowing the terrain and having established superiority in the region.

### Additional Information

Steppe lions are most dangerous in grasslands and open terrain where they maintain complete advantage. In dense vegetation or confined spaces, their dominance is reduced. The creatures are primarily nocturnal and avoid humans except during times of severe hunger or territorial intrusion. A steppe lion that has successfully hunted humanoids becomes more bold and likely to target humans in future encounters. The creature's hide is extraordinarily valuable and can be harvested after death to create armor or other protective items. A lion defending a fresh kill or established territory fights with suicidal determination.

## Attributes

Strength
: 12-17 (1d6+11)

Endurance
: 10-15 (1d6+9)

Dexterity
: 11-16 (1d6+10)

Agility
: 12-17 (1d6+11)

Perception
: 13-18 (1d6+12)

Aura
: 8-11 (1d4+7)

Will
: 10-15 (1d6+9)

Reasoning
: 6-9 (1d4+5)

Creativity
: 5-8 (1d4+4)
