---
shortcode: direwolf
name: {full: Dire Wolf, aliases: []}
type: being
subType: creature
description: "An enormous pack-hunting canine of deep wilderness, twice the size of a gray wolf yet retaining its cousins' tactical intelligence."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-wolfhead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+16
    end: 1d6+14
    dex: 1d6+9
    agl: 1d6+11
    per: 1d6+12
    aur: 1d6+8
    wil: 1d6+12
    rea: 1d6+7
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 48}}
    - name: Crushing Bite
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
          name: Crushing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
          lengthBase: 1
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
      bodyScaleBase: 1.47
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 7
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[direwolf|Dire Wolf]]{float=top-left}

The deer's carcass has been dragged thirty yards across the snow and torn open, the long bones cracked and the marrow gone. The tracks around it are as broad as your hand, spread flat, and there are three sets of them. Then a long howl rises out of the trees upslope. It is answered from the left, and from the right, and a gray shape the size of a pony steps out of the spruce and stands looking down at you.

# Dossier {#dossier}

The Dire Wolf is the great wolf of the deep forest, four feet at the shoulder and seven to nine feet long, twice the size of a gray wolf. A pack of five to fifteen holds the deep forest of [[place-vrystwald|Vristwald]] north of the Vylarian border, the marsh forests of [[place-grkrhlmrgn|Grukarholm Region]] and the high taiga of the [[place-nrdlndsrgn|Nordlands Region]], and takes elk. Packs have hunted people, and a lone dire wolf, usually an outcast from a pack, is the likeliest to attack.

## Presentation

A massive wolf, lean and muscular, with long legs for sustained running and heavy shoulders. The head is broad, with a powerful muzzle, and the eyes are yellow or amber. The ears are erect and turn independently. The fur is thick and unkempt, gray, black or reddish brown, paler beneath. Adults carry scars from territorial fights and hunts. The canines are an inch and a half long or more, and the tail is long and thick.

## In the Land

Dire wolves hold the deep forest of Vristwald north of the Vylarian border, the marsh forests of Grukarholm and the high taiga of the Nordlands, country that few people enter and none live in. A pack of five to fifteen keeps a range of a hundred miles or more and follows the elk and the caribou through the seasons. They den in a rock cleft or under a root-wall. In deep winter, when the herds have gone, a pack comes down to the margin of the farms.

## Key Behaviors

Packs are matriarchal, led by the alpha female with the alpha male supporting her, and a rank order fixes the feeding and the breeding. Members communicate by howling, growling, scent and posture. They hunt together: some drive the prey toward a kill zone while others wait in ambush, and they will follow a quarry for hours or days. A pack holds twenty to fifty square miles against rival packs. A pack that has learned that people carry food or are weak prey hunts them. They remember the hunters who have opposed them.

## What the Hunters Do

The hunting companies of Vristwald, such as [[affiliation-wldjgrrndgrskld|Wuljagar erund Garskald]] of the [Garskald]{.name data-type="affiliation/polity"}, know the ranges of the big packs and keep to the edges of them. A dire wolf kill is a feast and a clan matter, since a pack that is attacked and not finished comes back for the hunters. Villages that keep the wolf as their wesk, such as [[place-harholt|Harholt]] and [Wulfreth]{.name data-type="place/settlement"}, forbid the killing of a wolf in their own woods and ask the Weskár when one has been seen near the houses. In winter, villages bring their stock indoors at dusk and post a watch with a horn. A dire wolf pelt is worth a horse.

## Signs

- Tracks as broad as a man's hand spread flat, in a line, and a second line beside it, and a third.
- A deer carcass pulled apart across thirty yards of snow, the bones cracked for marrow.
- A long howl at dusk that is answered from three directions.
- Hair on a low branch, gray and coarse, a full arm's length above the ground.
- A herd of elk bunched in open ground at midday, all facing the same way.

## Combat Strategy

A Dire Wolf pack's hunting strategy involves positioning individuals to maximize tactical advantage: some create distraction while others attack from flank or rear, some harry prey toward terrain advantages, some focus on disabling limbs while others attack vital areas. A coordinated pack can surround and incapacitate prey far larger than any individual wolf. Against humans, packs typically isolate and attack a single individual, pulling them from the group and overwhelming them before the group can mount effective defense. A solitary Dire Wolf employs hit-and-run tactics, testing for weaknesses and exploiting them ruthlessly.

## Attack Methods

### Crushing Bite with Canine Teeth

The Dire Wolf accelerates and attempts to bite, targeting the neck, throat, or limbs with devastating force. The bite can crush bone and sever arteries. Multiple bites in rapid succession are common, with the wolf moving to fresh wounds between bites.

### Pack Coordination Attacks

Multiple Dire Wolves attacking simultaneously from different angles prevent a target from defending in all directions. While one wolf attacks from front, others attack from flank or rear, making coordinated defense nearly impossible.

### Hamstringing and Leg Attacks

Dire Wolves will frequently target legs, attempting to sever tendons and cripple prey. A hamstrung target cannot flee or maintain standing position.

### Throwing and Pinning

Using their bite, Dire Wolves can seize and shake prey violently, potentially breaking bones or dislocating joints. Multiple wolves can pin prey by seizing different extremities simultaneously.

## Special Abilities

### Pack Intelligence and Coordination

Dire Wolves are intelligent enough to execute complex hunting strategies requiring planning, communication, and coordination. A pack can surround prey, cut off escape routes, and attack in precisely coordinated waves. This intelligence makes them far more dangerous than animals relying on instinct alone.

### Strength and Endurance

Dire Wolves can sustain pursuit for hours, traveling at speeds that exhaust human runners. Their bite force exceeds that of bears, and their physical resilience allows them to sustain injuries that would incapacitate lesser predators.

### Keen Senses and Tracking

Dire Wolves can follow scent trails days old over any terrain. Their hearing allows detection of prey sounds from miles away. This sensory advantage makes escape through stealth nearly impossible.

### Territorial Fury and Pack Loyalty

A Dire Wolf defending its territory or protecting pack members fights with suicidal determination. Pack members will defend one another to the death, and a pack that has bonded is capable of executing complex group tactics in support of individual members.

## Attributes

- **Strength:** 17-22 (1d6+16)

- **Endurance:** 15-20 (1d6+14)

- **Dexterity:** 10-15 (1d6+9)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 9-14 (1d6+8)

- **Will:** 13-18 (1d6+12)

- **Reasoning:** 8-13 (1d6+7)

- **Creativity:** 6-9 (1d4+5)
