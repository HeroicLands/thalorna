---
shortcode: glsslzrd
name: {full: Glass Lizard, aliases: []}
type: being
subType: creature
description: "A sleek, semi-arboreal reptilian predator over ten feet long, blending into rocky scrubland where it basks by day and hunts by night."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-gecko, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+7
    end: 1d6+8
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+10
    aur: 1d4+6
    wil: 1d6+7
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Quick Strike Bite
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
          name: Quick Strike Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Lash
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Lash
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: blunt}
          lengthBase: 1
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
      weight: {base: 20, calc: "20"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[glsslzrd|Glass Lizard]]{float=top-left}

A thin line of bright metal runs across the warm rock, copper in one angle of the light and silver in the next, and then it is not there. You look again and see that it has not moved. A long, legless body lies along the stone, the polished scales throwing back the sun in broken flashes, and the sharp, triangular head is turned toward you, eyes forward. Then the whole length slides off the rock without a sound.

# Dossier {#dossier}

The Glass Lizard is a long, legless lizard of ten feet or more, found in the rocky scrub and mesa country of the [[place-dunhardsrtrgn|Dunhara Desert]], the dry chaparral of the [[place-sthmrchsrgn|South Marches]] and the stony ridges at the edge of the savanna. It basks on warm rock and cliff by day, hunts small mammals, birds and other reptiles at dawn and dusk, and keeps a small territory that it defends fiercely.

## Presentation

A long, slender, legless lizard, more like a snake than a lizard. The scales are hard, smooth and highly polished, throwing back the light in shimmers of gold, silver or copper that shift with the angle and with the animal's mood, so that it is hard to follow in sunlight. The head is triangular and tapers to a point, with forward-facing eyes. The mouth holds sharp, backward-curving teeth. The tail makes up much of the length and can be shed in segments when the animal is threatened.

## In the Land

Glass lizards live in the rocky scrub and mesa country of the [[place-dunhardsrtrgn|Dunhara Desert]], the dry chaparral of the [[place-sthmrchsrgn|South Marches]] and the stony ridges at the edge of the savanna. A lizard basks on a warm rock in the morning, hunts at dawn and dusk and shelters in a crack in the rock through the heat. It lies along a ledge or a branch, and its polished scales break the sunlight into flashes that make it hard to follow against stone.

## Key Behaviors

Glass lizards bask on warm rocks and exposed surfaces through the day and hunt at dawn and dusk, when they are not visible against the sun. A hunting lizard covers a lot of ground looking for small mammals, birds and other reptiles, and eats carrion if it finds it. It lives alone and patrols a small territory. In the mating season the males are noticeably more aggressive and territorial.

## What the Herders Do

The pastoral clans of the South Marches keep their lambs penned in the evenings and look at the rocks before they sit. A herder checks a ledge with a stick before he reaches over it. The Dunhari take a glass lizard for the skin, which dries as hard and clear as horn, and which they cut into lamp-shades and small windows. A bitten animal is cut open and drained. Children are told to go round rock outcrops and not over them. Travelers keep their packs off the ground at a camp.

## Signs

- A faint smear on the rock where a body has lain, warm to the touch in the morning.
- A scatter of small bones and fur on a ledge, with no nest.
- A long, shed skin, thin as paper and almost clear, caught in a bush.
- A lamb gone from a pen, with a scrape on the rail.
- The head of a lizard turned toward the observer on the top of a boulder, and then not there.

## Combat Strategy

A Glass Lizard prefers to strike quickly and retreat if the target is dangerous—it bites, attempts to swallow if the prey is small, and retreats to await the prey's weakening if the target is larger. If forced to defend itself against a threat, the lizard lashes with its tail and attempts to flee, dropping portions of its tail as distraction. A glass lizard has no real capacity for sustained combat and relies entirely on speed and agility to avoid conflict. A captured glass lizard will bite desperately and shed its tail, leaving the tail writhing as a distraction while the lizard escapes.

## Attack Methods

### Quick Strike Bite

A rapid, precise bite targeting small prey or soft tissue on larger prey. The backward-curving teeth are designed to catch and hold, and the lizard attempts to swallow whole if the prey is small.

### Tail Lash

The long tail is brought to bear as a striking weapon, creating sharp impacts that are more painful than dangerous. The tail is also used as a balance and climbing tool.

## Special Abilities

### Light Refraction Camouflage

The Glass Lizard's polished, refractive scales scatter and bend light in ways that make the creature difficult to visually track, especially in bright sunlight. A stationary glass lizard is nearly invisible in certain lighting conditions.

### Tail Autotomy

When threatened or cornered, the Glass Lizard can shed portions of its tail—the severed tail continues to wriggle and thrash, distracting predators while the lizard escapes. The tail regrows slowly over weeks or months.

## Additional Information

Glass Lizards are sometimes captured for collections, as their unique appearance makes them valuable as exotic pets. The creatures are not particularly long-lived compared to other reptiles. In some regions, glass lizards are considered harbingers of drought or heat—their appearance signals the driest times of year.

## Attributes

- **Strength:** 8-13 (1d6+7)

- **Endurance:** 9-14 (1d6+8)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 13-18 (1d6+12)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 7-10 (1d4+6)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
