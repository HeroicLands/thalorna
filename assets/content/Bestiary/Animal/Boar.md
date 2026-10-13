---
shortcode: boar
name: {full: Boar, aliases: []}
type: being
subType: creature
description: "A compact, aggressive tusked ungulate of forests and scrublands, quick to charge with muscle and violence when its territory is crossed."
tags: [animal, creature]
data: {packFolder: animals, icon: boar, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+13
    agl: 1d4+7
    per: 1d6+7
    snt: 1d4+2
    aur: 1d4+2
    wil: 1d6+12
    rea: 1d4+4
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 75}}
    - name: Tusk
      type: skill
      system:
        shortcode: tusk
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tusk
          name: Tusk
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 1}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
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
      weight: {base: 200, calc: "200"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 110
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[boar|Boar]]{float=top-left}

The leaf litter along the path has been turned over in long, black furrows, and the bark of the nearest oak is rubbed smooth and plastered with mud. A hot, rank smell hangs in the air. Then a stocky shape rises out of a hollow ten paces off, bristles up along its neck and spine, and the small eyes fix on you.

# Dossier {#dossier}

The Boar is the wild pig of the woods and scrub, three to four feet at the shoulder and two to four hundred pounds, with curved tusks and a coat of coarse bristles. It roots through the oak and beech of [[place-vrystwald|Vrystwald]], the gorges of the Byzarian [[place-southrnmrch|Southern March]] and the thickets of many lowland valleys, eating roots, grubs, small animals and carrion. Boars are quick to anger, slow to retreat, and most dangerous in the autumn rut and with piglets.

## Presentation

A stocky pig with a heavy head tapering to a muzzle made for rooting, on short, powerful legs. The tusks curve out and up, four to six inches long on a mature animal, yellow and chipped in an old boar. The coat is thick and coarse, dark brown to nearly black, and the hair stands up on the neck and spine when the animal is roused. The eyes are small and set high. The tail is thin and carried up when alert. A strong musk marks it.

## In the Land

Wild boar root through the oak and beech woods of [[place-vrystwald|Vrystwald]], the gorges and scrub of the [[place-southrnmrch|Southern March]] above Byzaría, and the river thickets and reed-beds of many lowland valleys. A sow with her sounder holds a few square miles around a wallow and a mast-bearing stand of trees. Boars are bolder where farms meet woodland, and a field of roots or grain at the forest edge is rooted over before the harvest.

## Key Behaviors

Mature boars hold a home range, marking trees with tusks and scent, and fight rivals in the autumn rut. Sows live in small related groups, and a sow with piglets is more dangerous than a lone boar. Boars turn soil for grubs and tubers and ruin a planted field in a night. They follow the same paths to water and the same wallows, and a hunted boar becomes wary, shifts its hours and avoids people, while one that meets no opposition comes closer to farms each season.

## What the Villages Do

The Varokh hunt boar in winter on foot, with dogs to hold the animal and a crossbar on the spear-head to keep it from running up the shaft. Farmers in the clearings plant ditches and thorn-hedges around field-crops and keep dogs for the night. In the Southern March the lords of the League ride after boar in hunts that double as political occasions. Boar meat is salted for winter, the hide is tanned for boot-leather, and the bristles are sold for brushes. The tusk-caps of a famous boar hang over a hunter's door. Boar are among the animals that the Atarzad tribes of the Khazryn forbid as unclean, so they are neither hunted nor eaten there.

## Signs

- A swath of turned earth through the leaf litter, as if a plough had been dragged through it.
- A mud-wallow in a hollow, churned black, with bristles stuck to the trees around it.
- A trunk rubbed smooth and muddy at the height of a man's knee.
- Cloven tracks, deep and splayed, with the dew-claws showing in soft ground.
- Grunting and snapping of twigs in a thicket, and then silence.

## Combat Strategy

A boar's primary tactic is a devastating charge from which it will not deviate unless severely wounded or overcome with fear. It will lower its head, steel itself into a narrow profile to minimize exposure, and accelerate directly at the threat with tusks angled upward to impale and disembowel. If the charge connects and the target is knocked down, the boar will continue to attack, slashing with its tusks and attempting to gore any vulnerable area. Boars rarely flee once engaged—they will continue attacking until the threat is neutralized, they themselves are mortally wounded, or they have achieved sufficient distance to charge again. A wounded boar becomes progressively more dangerous; pain and blood-scent trigger deeper aggression. When forced to retreat, a boar will back away slowly, maintaining eye contact and readiness to charge if the threat advances.

## Attack Methods

### Charging Gore

The boar accelerates toward its target and drives upward with its tusks, seeking to impale the abdomen, thigh, or chest. The sheer force of a charging boar can knock even armored opponents from their feet. Once an opponent is on the ground, the boar typically wheels to attack again rather than pursuing a downed target.

### Tusk Slash

With the target at close quarters, the boar swings its head violently side to side, its tusks describing arcs capable of opening deep wounds and severing tendons. This attack is often used to follow up a charge when an opponent is still mobile, or when multiple attackers surround the boar.

### Trample and Stomp

A boar will sometimes attempt to knock an opponent down and then trample them with all four hooves, focusing on the legs and torso. This tactic is less common than charging, but more aggressive individuals will use it to disable opponents quickly.

## Special Abilities

### Relentless Aggression

Once a boar is engaged, it pursues combat with suicidal determination. It does not tire easily, will not break combat to pursue other threats, and will continue attacking even when clearly outmatched. This trait makes boars more dangerous than animals of equal strength—they simply will not stop. Magical terror or overwhelming pain can break this aggression, but ordinary threats do not.

### Tough Hide and Resilience

A boar's skin is thick and leathery, and the bristling coat provides some protection against cutting and slashing attacks. The animal's bone density is greater than it first appears, making it more resistant to blunt force trauma than expected. Arrows penetrate well; slashing weapons often glance off.

### Keen Sense of Smell

Boars rely heavily on scent and can track wounded prey for considerable distances. They can detect the presence of humans and other large animals at impressive ranges and will investigate food scents obsessively. This sensory advantage makes them difficult to ambush if the wind carries human scent toward them.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 14-19 (1d6+13)

- **Agility:** 8-11 (1d4+7)

- **Perception:** 8-13 (1d6+7)

- **Scent:** 3-6 (1d4+2)

- **Aura:** 3-6 (1d4+2)

- **Will:** 13-18 (1d6+12)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 6-9 (1d4+5)
