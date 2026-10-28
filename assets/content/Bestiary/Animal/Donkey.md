---
shortcode: donkey
name: {full: Donkey}
type: being
subType: creature
description: "A small, sure-footed equine prized for endurance and long life, hauling loads through rough terrain that would defeat a horse."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-donkey, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+21
    end: 1d6+10
    agl: 1d6+9
    per: 1d6+15
    snt: 1d4+1
    aur: 1d4+2
    wil: 1d6+9
    rea: 1d4+2
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 24}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
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
          attack: {disabled: false, spread: 6, modifier: 0}
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
          attack: {disabled: false, spread: 3, modifier: 0}
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
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 7}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
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
      weight: {base: 600, calc: "600"}
      reachBase: 0
      bodyScaleBase: 1.66
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 110
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[donkey|Donkey]]{float=top-left}

At the top of the stony slope a small gray animal stands with its legs braced, ears up, and a load of baskets roped to its back. It looks at the path, which is steeper than any you would care to climb, and then at the man tugging on its halter. It does not move. When it does set off, a minute later, it chooses its own line down, picking the small stones with its hooves.

# Dossier {#dossier}

The Donkey is the small pack animal of the rough country, ten to fourteen hands high and five to nine hundred pounds, kept in the hill villages of the [[place-southrnmrch|Southern March]], the passes of [[place-graznmntns|the Grazian Mountains]] and the caravan stations of the desert. It carries loads over ground that stops a horse, eats and drinks less, and often lives past thirty. It is intelligent and refuses a task it judges likely to injure it. A donkey defending itself or its foal kicks and bites hard.

## Presentation

A compact animal with a stocky frame and short, strong legs set for stability. The head is large, with long, mobile ears and a long, flexible muzzle. The coat is coarse, gray or brown, and the tail is thin. The hooves are small and hard and suit rock. Many donkeys carry scars from pack-straps, saddles and old injuries.

## In the Land

Donkeys are kept in every country where a road is rough: the hill villages of the Southern March, the mountain passes of the Grazian Mountains, the oases and caravan stations of [[place-khzryndsrtrgn|Khazryn Desert Region]] and [[place-dunharargn|Dunhara Region]], the terraced valleys of [[place-aukhelathrgq|Au'Khelathu]] and the salt-works of [[place-swoasisbelt|Tellumel]]. A donkey lives in the yard of the house it works for, grazes on thin pasture and eats little, and walks a mountain path with a load that would stop a horse.

## Key Behaviors

Donkeys live in herds and bond with other donkeys and with people. They remember routes, recognize handlers and prefer some companions. They will not do what they think is dangerous, which looks like stubbornness and is a sound judgement. They defend the space they hold. They live long, and each develops a strong character of its own with clear likes and dislikes.

## What the Caravans Do

A caravan driver buys donkeys for the passes and the short desert stages and uses camels on the long ones. The priests of [[affiliation-pelgun|Pelgun]] bless the first string of a young driver at the temple at [[place-iqu|Iku]], and he takes a donkey for the road and another for the fields. A farmer's donkey carries the harvest, the water and the wood. Salt-cutters stack blocks in pairs on a donkey's panniers and walk beside it. A donkey that stops cannot be driven on, and a driver who wants a donkey to move stands before it with a handful of feed. Mules are bred from them.

## Signs

- A short, dust-colored animal with ears like a hare's, standing in the sun at the top of a hill and refusing to move.
- A string of donkeys, tied nose to tail, picking its way down a stony slope with panniers swaying.
- A loud, rasping bray from a village at dawn that sets off every other donkey in the valley.
- Small, neat hoof-prints on a mountain path, in a line, exactly where a horse would have fallen.
- A cross-shaped dark stripe on a gray back, over the withers.

## Combat Strategy

Donkeys prefer flight to fight but will defend themselves vigorously when cornered. They use powerful rear-leg kicks and bites. A donkey defending young is very aggressive.

## Attack Methods

### Rear-leg Kick

The donkey's powerful hind legs deliver crushing blows, capable of breaking bones. The kick is the primary defense mechanism.

### Bite

The donkey will bite when grabbed or cornered, delivering sharp bites capable of drawing blood.

## Special Abilities

### Endurance and Sure-footedness

A donkey can carry substantial loads over terrain that would defeat horses: narrow mountain passes, rocky ground, and unstable surfaces. It can travel days with minimal water and food. Its footing on dangerous terrain is superior to horses.

### Stubbornness and Self-preservation

A donkey will refuse tasks it assesses as dangerous. This is not stupidity but intelligent self-preservation. A donkey that refuses to proceed may be showing wisdom about danger ahead.

### Longevity and Intelligence

Donkeys live thirty or more years and develop real relationships with handlers. They remember routes, recognize individuals, and show emotions including grief.

## Attributes

Strength
: 22-27 (1d6+21)

Endurance
: 11-16 (1d6+10)

Agility
: 10-15 (1d6+9)

Perception
: 16-21 (1d6+15)

Scent
: 2-5 (1d4+1)

Aura
: 3-6 (1d4+2)

Will
: 10-15 (1d6+9)

Reasoning
: 3-6 (1d4+2)

Creativity
: 4-7 (1d4+3)
