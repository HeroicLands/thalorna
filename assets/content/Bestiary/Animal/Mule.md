---
shortcode: mule
name: {full: Mule, aliases: []}
type: being
subType: creature
description: "A sturdy donkey-horse hybrid combining a donkey's compact toughness with a horse's muscular agility, a hardy pack and draft animal of surefooted temperament."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-donkey, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+22
    end: 1d6+9
    agl: 1d6+9
    per: 1d6+14
    snt: 1d4+1
    aur: 1d4+2
    wil: 1d6+9
    rea: 1d4+3
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 25}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 62}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 39}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 3, aspect: piercing}
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
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
      weight: {base: 525, calc: "525"}
      reachBase: 0
      bodyScaleBase: 1.71
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 120
        leaguesPerWatch: 7
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[mule|Mule]]{float=top-left}

The mule at the head of the string stops on the narrow ledge, ears swiveling, and will not take another step. The muleteer behind it says nothing. Below the ledge the path crosses a slope of loose shale that slides when a stone is dropped on it. The mule looks at it for some time with one large dark eye, then turns, carefully, and sets off back the way it came. The string follows.

# Dossier {#dossier}

The Mule is the pack animal of the hard roads, the offspring of a jack donkey and a mare, four to five feet at the shoulder and four hundred fifty to six hundred pounds. It carries loads over steep and broken country on the passes of [[place-graznmntns|The Grazian Mountains]], the hill roads of the Bizarian [[place-southrnmrch|Southern March]], the gorges of [[place-aelwyth|Aelwyth]] and the mountain tracks of [[place-ixilankulrgn|Ish'ilankul Region]]. It has a donkey's compact build and a horse's muscle and agility, and a long memory and good judgement.

## Presentation

A compact, sturdy animal with the muscle and agility of a horse and the frame of a donkey. The head is broad and angular, with a pronounced jaw, large mobile ears and dark, intelligent eyes set to give nearly all-round sight. The chest is deep and the hindquarters strong. The legs are short and sturdy, ending in tough, hard hooves that rarely need shoeing. The coat is short and coarse, bay, gray or sorrel, with a paler muzzle. The mane is coarse and short and the tail sparse. An old mule carries calluses, scars and brands from years of work.

## In the Land

Mules are bred and worked wherever the roads are hard: the passes of the Grazian Mountains, the hill roads of the Bizarian Southern March, the gorges of Aelwyth and the mountain tracks of Ish'ilankul. A mule lives in a muleteer's yard, grazes the verges and works six days in seven. It cannot breed, so every mule is the product of a mare and a jack kept for the purpose.

## Key Behaviors

Mules are hardy and shrewd. They are used for packing over difficult ground where horses struggle, and they are very sure-footed and will not cross ground they judge unsafe, which makes them safer than horses on bad roads. They are less temperamental than donkeys and more independent than horses, forming their own opinion of a situation instead of simply obeying. They bond with handlers and with the animals they have worked beside. They work long hours on little food and water, and their working lives are long.

## What the Muleteers Do

A muleteer owns a string of six to twenty and walks at its head. He chooses the animal that goes first, which sets the pace and refuses a bad step, and the others follow it. A mule is loaded evenly and unloaded at noon, and the load is checked for rubs. Mules will not cross ground they judge unsafe, and a muleteer who sees one stop lets it stand. They are more sure-footed than horses on ice and scree, and they last longer than donkeys. Armies use them for baggage and for hauling guns and timber on steep ground.

## Signs

- A string of big-eared animals picking down a scree slope, nose to tail.
- Small, hard hoof-prints in a neat row on a narrow ledge, cut deep and square.
- A bell on the lead animal, ringing slowly in a gorge.
- A mule with its feet planted and its ears back, which will not move for any pull.
- A muleteer's whistle on a switchback, answered by every animal in the string.

## Combat Strategy

Mules are not combat animals and strongly prefer to flee or retreat from danger. When cornered or when defending young, they become surprisingly dangerous, delivering powerful kicks with their hind legs and biting if opponents come within reach. A mule's kick can break bones or disarm opponents. They do not charge or pursue; instead, they create distance and, given opportunity, escape. They will repeatedly kick in the direction of a threat if unable to flee.

## Attack Methods

### Hind-Leg Kick

When threatened or cornered, the mule delivers a powerful kick with both hind legs simultaneously, capable of breaking bones or shattering light armor; these kicks are delivered when the opponent is at medium range and can be devastating if both land.

### Defensive Bite

If grappled or if an opponent comes within reach, the mule will bite—not with the killing intent of a predator, but with the defensive fury of a prey animal; the bite can cause serious injury and infection.

## Special Abilities

### Sure-Footed

The mule's sure sense of balance and hoof placement makes it very unlikely to slip, fall or be knocked down; mules will refuse to cross truly treacherous ground and can navigate terrain that would be impassable for horses.

### Hybrid Endurance

The mule combines the strength and speed of the horse with the endurance and durability of the donkey; it can work long hours with minimal food or water, outlasts nearly anything else in harness, and can carry loads that would exhaust horses.

### Intelligent Judgment

Mules have excellent memories and make independent judgments about situations; a mule cannot be forced to cross truly dangerous terrain or to perform obviously suicidal actions, and they often warn handlers to danger through refusal or agitation.

## Attributes

- **Strength:** 23-28 (1d6+22)

- **Endurance:** 10-15 (1d6+9)

- **Agility:** 10-15 (1d6+9)

- **Perception:** 15-20 (1d6+14)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 3-6 (1d4+2)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 5-8 (1d4+4)
