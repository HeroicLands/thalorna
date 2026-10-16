---
shortcode: hrndtd
name: {full: Horned Toad, aliases: []}
type: being
subType: creature
description: "A four-foot desert reptile armored in jagged bony plates, its sand-colored, warty hide letting it vanish against rocky badlands terrain."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-hornedreptile, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+7
    end: 1d6+9
    dex: 1d6+8
    agl: 1d6+7
    per: 1d6+10
    aur: 1d4+5
    wil: 1d6+7
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Tail Sweep
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Sweep
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
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
            roles: &a1 [locomotor]
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
            roles: [manipulator]
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 5, calc: "5"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 20
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[hrndtd|Horned Toad]]{float=top-left}

You take it for a stone until a pair of eyes swivel in different directions in the same stone. It sits flat on the gravel, four feet from nose to tail, tan and gray and dusty brown, with a crown of horns on its flat head and a row of spines down its back and ringed tail. A long, sticky tongue flicks out and returns, and an ant is gone.

# Dossier {#dossier}

The Horned Toad is a four-foot desert reptile armored in jagged plates, living in the stony badlands and gravel flats of the [[place-dunhardsrtrgn|Dunhara Desert]], the Desert of Hek'ar and the sand seas and mesas of [[place-chakultzklrgn|Ch'akul Tsa'kul]]. It lies unseen against the ground and eats ants, beetles and small lizards. Its spines and its eyes make a stranger leave it alone.

## Presentation

A squat, heavy reptile on short, strong legs that carry it quickly over desert ground. The head is broad and flat, crowned with a row of horns and spikes, and the body tapers to a thick tail ringed with spines. The scales are dull tan, brown and gray with darker mottling and match the ground. The eyes are large, unblinking and swivel independently to cover nearly every direction. The tongue is long and sticky.

## In the Land

Horned toads live in the stony badlands and gravel flats of the [[place-dunhardsrtrgn|Dunhara Desert]], the Desert of Hek'ar and the sand seas and mesas of [[place-chakultzklrgn|Ch'akul Tsa'kul]]. A toad has a burrow under a rock or a bush and a small territory it patrols each day, and it eats ants, beetles and the smaller lizards. It stands motionless against the ground for hours, and its sand and gravel colors make it almost invisible.

## Key Behaviors

Horned toads eat small arthropods, striking with the tongue in rapid shots, through most of the day. Each holds a home range that it patrols daily. In extreme heat it burrows into the sand or hides under rocks, and it is active in the cooler mornings and evenings. Threatened, it forces blood into the sinuses behind its eyes and sprays it out with force and accuracy in a crimson burst that startles and disorients an attacker.

## What the Nomads Do

The nomads walk round the stony ground where they know one lives, and a camel will not be led across it. They do not eat the flesh, and the tribes of Dunhara cut horns from the plates for amulets. A bitten animal is led to water and rested. Children are shown how to find a toad by its shadow, and told not to pick one up. Prospectors in the badlands sleep with their boots upside down.

## Signs

- A rock that is not a rock, with a hooked row of spines, sitting on the flat.
- A small, deep pit at the base of a shrub, with a smooth tail-drag leading to it.
- A line of ants running to one point and vanishing.
- A dog yelping and backing away from a stony patch, its face wet.
- A tail-track like a broom handle dragged through gravel.

## Combat Strategy

Horned toads strongly prefer to flee or hide when threatened, using their camouflage and low profile to escape notice. If cornered or trapped, they resort to their defensive arsenal: a display of spines and horns to appear larger and more formidable, a powerful tail swipe that can puncture or lacerate, and finally the blood spray if an attacker presses close. They are not aggressive combatants and typically will not pursue fleeing opponents.

## Attack Methods

### Tail Sweep

The horned toad lashes its thick, spined tail with surprising force, capable of knocking smaller foes off balance, inflicting puncture wounds, or driving back melee combatants.

### Blood Spray

If pressed into direct contact or threatened with grappling, the creature forces blood to the back of its eyes and expels it in a forceful burst up to 10 feet; this spray causes momentary blindness and disorients targets, and the blood itself is caustic to mucous membranes.

## Special Abilities

### Spiked Body

The array of bony protrusions covering the horned toad’s body inflicts damage on any opponent attempting to grapple, pin, or tackle it; these spikes are particularly effective against unarmed combat.

### Desert Camouflage

When still, the horned toad’s coloration and texture allow it to blend nearly perfectly with rocky or sandy terrain, making it nearly impossible to spot without careful observation or magical assistance.

## Attributes

- **Strength:** 8-13 (1d6+7)

- **Endurance:** 10-15 (1d6+9)

- **Dexterity:** 9-14 (1d6+8)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 6-9 (1d4+5)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 3-6 (1d4+2)
