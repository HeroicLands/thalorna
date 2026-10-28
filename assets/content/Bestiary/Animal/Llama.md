---
shortcode: llama
name: {full: Llama}
type: being
subType: creature
description: "A domesticated highland camelid serving as pack animal, fiber and meat source, and guardian of smaller livestock in mountain caravans."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-camelhead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+8
    end: 1d6+10
    dex: 1d4+6
    agl: 1d4+7
    per: 1d6+9
    aur: 1d4+5
    wil: 1d6+9
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 33}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: blunt}
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
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
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
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
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
          - name: Flank
            shortcode: flkloc
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
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 325, calc: "325"}
      reachBase: 0
      bodyScaleBase: 1.06
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 8
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[llama|Llama]]{float=top-left}

The mule-track over the pass is full of llamas, tall and slender-necked, with banana-shaped ears and bright wool tassels. The lead animal turns its head and looks down its nose at you as if you had said something rude. A gurgle rises in its throat. The ears go back flat, the chin goes up, and the herder, without looking round, steps quickly to one side.

# Dossier {#dossier}

The Llama is the pack animal of the high plateau, five to six feet at the head and two hundred fifty to four hundred pounds, kept in the mountain valleys of [[place-kuxiixbalrgn|K'ushi Ish'bal Region]] and [[place-ixilankulrgn|Ish'ilankul Region]]. It carries goods on the roads between the highland city-states, gives fiber, meat, leather and dung fuel, and guards smaller stock. No wild herds remain. A smaller, finer-coated relative gives the luxury fiber prized by the priest-kings. A llama carries loads at altitudes where horses cannot breathe, steady, sure-footed and given to sudden spite.

## Presentation

A tall, slender animal with the height of a small horse and the build of a deer. The neck is long and curved and held erect, which gives it a haughty look. The fiber coat is dense and soft, white, cream, brown, rust, gray or black, often in patterns, finer and warmer than sheep's wool and good for dye. The head is narrow, with large eyes and extraordinary lashes and small, banana-shaped ears curving inward. The split upper lip is mobile and prehensile. The legs are long and slender, ending in padded two-toed feet that wear no trail, which is why the highland roads have lasted. The tail is short and carried low.

## In the Land

Llamas are kept on the high plateau and in the mountain valleys of K'ushi Ish'bal and Ish'ilankul, where the highland city-states lie a week apart over passes no wheel can cross. A herd grazes the thin plateau grass by day and is penned in stone corrals at night. Feral llamas are rare; nearly every animal belongs to a herding family and is known by its ear-tags.

## Key Behaviors

Llamas live in herds with a rank order kept by posture, voice and, when needed, spitting. They hum when content or uneasy, cluck to their young, give a sharp, braying alarm and make an orgling sound in the mating season. They learn quickly, recognize handlers, remember trails and refuse a load they judge too heavy, so a llama that lies down and will not move is overloaded. They give alarm at predators and confront small ones, which makes them useful guards for sheep and goats.

## What the Caravans Do

Llama caravans carry the goods between the highland cities. An animal bears a hundred pounds and no more, and lies down and refuses to rise under a heavier load. The herders shear the wool for cloth and rope, burn the dung for fuel, eat the meat dried and trade the hides. A herder watches the ears: pinned ears and a raised chin mean the animal is about to spit, and the experienced step aside. A few llamas are run with sheep and goat flocks to drive off foxes and dogs.

## Signs

- A long string of animals on a mountain track, each with a bright wool tassel in its ear.
- Round dung heaps in a corner of a corral, collected and dried in the sun.
- A hum from a herd at dusk, rising and falling, and a single alarm-call that sets the rest running.
- A green spatter on a traveler's sleeve, and a llama with its ears flat.
- A stone wall across a pass-head, with a gap just wide enough for a laden animal.

## Combat Strategy

Llamas are not aggressive animals and will flee from serious threats. Their defensive behaviors are primarily deterrent: alarm calling, spitting, and chest-ramming against other llamas or small predators. A llama cornered or defending young will kick with the hind legs and bite, but this is a last resort. Their primary value in a dangerous situation is as an alarm system — the sharp, repeated alarm call carries well and alerts an entire caravan to danger. A panicked llama caravan can be dangerous simply through the chaos of bolting animals and scattered loads on narrow mountain trails.

## Attack Methods

### Defensive Kick

The llama strikes backward with its hind legs — a snap-kick delivered with the padded feet that can bruise but rarely causes serious injury. More startling than damaging.

### Spite Spit

A precisely aimed stream of partially digested stomach contents, delivered at close range. Not physically harmful but deeply unpleasant and surprisingly demoralizing. The smell lingers for hours. Experienced llamas can adjust trajectory for wind.

### Warning Bite

The llama bites when cornered — the teeth are designed for vegetation and do not cause deep wounds, but the bite is painful and delivered with conviction.

## Special Abilities

### Altitude Mastery

Like the yak, the llama thrives at elevations that render horses useless. Its blood carries oxygen efficiently at altitude, its padded feet grip rocky trails, and its efficient digestion extracts nutrition from sparse highland forage. A loaded llama at altitude moves with calm competence while horses gasp and stumble.

### Self-Regulating Load

A llama will refuse to move if overloaded — lying down and declining all persuasion until the load is reduced. This makes them uniquely self-protecting pack animals and prevents the overloading injuries common with horses and donkeys. An experienced herder knows that a llama's refusal is information, not stubbornness.

### Guardian Instinct

Llamas kept with smaller livestock — poultry, young camelids — will actively guard them against small predators, confronting foxes and wild dogs with alarm calls, chest-butts, and kicks. A single llama guardian can protect a flock that would otherwise require a human watchman.

## Attributes

Strength
: 9-14 (1d6+8) — Adequate pack animal; not built for heavy labor

Endurance
: 11-16 (1d6+10) — Excellent altitude and long-distance stamina

Dexterity
: 7-10 (1d4+6) — Adequate; prehensile lip shows surprising manipulation ability

Agility
: 8-11 (1d4+7) — Sure-footed on mountain trails; not fast on flat ground

Perception
: 10-15 (1d6+9) — Alert; good sentinel animal

Aura
: 6-9 (1d4+5) — Essential and valued, but not spiritually elevated

Will
: 10-15 (1d6+9) — Stubborn and opinionated; refuses unsafe or excessive tasks

Reasoning
: 6-9 (1d4+5) — Intelligent; learns routes, recognizes handlers, assesses loads

Creativity
: 4-7 (1d4+3) — Limited
