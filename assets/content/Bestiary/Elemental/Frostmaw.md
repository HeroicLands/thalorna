---
shortcode: frostmaw
name: {full: Frostmaw, aliases: []}
type: being
subType: creature
description: "A titanic elemental of glacial destruction that lingers in frozen wastes for years, deepening winter and expanding its icy territory as it roams."
tags: [elemental]
data:
  packFolder: elementals
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: elemental
  attrRollFormula:
    str: 1d6+45
    end: 1d4+14
    dex: 1d4+6
    agl: 1d4+6
    per: 1d4+6
    aur: 1d4+6
    wil: 1d4+12
    rea: 1d4+5
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 48}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 83}}
    - name: Crushing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Crushing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 19, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Freezing Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 61
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: breath
          name: Freezing Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 15, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 60
          drawBase: 0
          traits: {}
    - name: Glacial Crush
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Glacial Crush
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 18, aspect: blunt}
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
          - {name: Forelegs, shortcode: forelegszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
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
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
      weight: {base: 23000, calc: "23000"}
      reachBase: 0
      bodyScaleBase: 2.61
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[frostmaw|Frostmaw]]{float=top-left}

The glacier's snout is a wall of blue ice above the stony beach, and the expedition has camped in its shelter for three days waiting for the wind to drop. On the fourth morning the wall is closer. A section of it as long as a ship has pulled away from the rest and stands on the beach on four legs as thick as towers, and it is shaped like a bear, and its whole surface is carved with lines and angles that move, slowly, like the facets of a turning gem. Its head lowers toward the tents. The cold that comes off it is so fierce that the canvas cracks like glass, and the breath freezes in your chest.

# Dossier {#dossier}

The Frostmaw is a great ice elemental: a spirit of the cold manifested as a bear-shaped body of solid blue-white ice some thirty feet long and many tons in weight, which lingers in the frozen places of the world for years at a time, deepening the winter round it and spreading the ice. It is drawn to heat and life, and it hunts them. It is the elemental that the few expeditions to [[place-isrncntnnt|Iseron]], the ice continent at the southern pole, bring back word of, and most of what is said about it is said by the survivors of those expeditions, which is to say by very few people. Like every elemental it can be destroyed in the material world, and it comes back; a frostmaw destroyed far from its ice may take a very long time.

## Presentation

The frostmaw is roughly bear-shaped and enormous, heavy-shouldered and massive-headed, built entirely of blue-white ice so dense it looks like stone. Its surface is cut with geometric patterns, lines and facets, which shift and realign themselves as it moves, so that it seems always to be slowly turning inside itself. Its eyes are deep blue hollows. Its jaws are a cavern of icicles. When it stands still, it is a block of glacier, and snow settles on it. When it moves, it groans and cracks like a glacier calving. The cold round it kills.

## In the Land

Iseron is a continent of ice, its interior a sheet broken only by mountain peaks, its coast a wall of ice cliffs above rocky shores that show only in the brief southern summer, and its approaches choked with pack ice and icebergs. The frostmaw ranges the coastal glaciers and the ice shelves, and expeditions report it near the few geothermally warm coastal places, where liquid water and bare ground let anything live, because warmth and life draw it. It stays in one region for years, and the ice spreads round it: bays freeze that were open, glaciers advance, and the summer thaw does not come. It sleeps through the summer as a block of glacier, and wakes with the winter.

## Key Behaviors

A frostmaw is solitary and territorial, and it claims huge stretches of glacier. It is driven by a hunger for heat and life: it goes after warm-blooded creatures, seals, whales, birds, men and their fires, with single-minded determination, and kills them with cold. It is intelligent enough to use its ice, thickening it, raising walls of it, cutting off retreats, and to lie in wait as a glacier for something warm to come close. It hibernates as ice through the warm months and is nearly impossible to tell from a natural glacier. When its body is destroyed, it breaks apart into ice that melts, and its spirit gathers itself and returns, over years or decades, to the cold.

## What Expeditions Do

The handful of expeditions that have come back from Iseron agree on three pieces of advice, and the expedition masters who still go south repeat them to every crew: never camp at the foot of a glacier; never light a fire larger than the camp needs, because a large fire is seen from very far away by things that are not men; and carry more fuel than the voyage could ever use, because fire is the one thing that drives a frostmaw back, and an expedition that runs out of fuel has run out of time. The reclusive coastal communities rumored to live in Iseron's warm places have never been met by anyone who could ask them what they do about it. Expedition masters believe that the frostmaw is the reason some of those warm places have been abandoned.

## Signs

- A glacier that has advanced across a beach or a bay since the last season.
- Seals, whales and seabirds frozen solid where they lay, in a warm season.
- Lines and facets in a wall of ice that are not where they were an hour ago.
- A cold that falls suddenly, out of a clear sky, so fierce that canvas cracks and iron breaks.
- A groaning and cracking from the ice like a glacier calving, from a glacier that is not moving.

## Combat Strategy

A frostmaw fights with terrible directness: it charges, bites, and breathes freezing air that turns the ground round its enemies to ice and freezes them where they stand. It brings ice down on them from the air and smashes the frozen ground into shards. It uses its control of the ice to cut off retreat. It is fearless. Fire is its only serious weakness: a large, sustained fire hurts it, and fire magic does it real harm. In its own cold it heals faster than anyone can hurt it.

## Attack Methods

### Crushing Bite

The jaws close with crushing force, and the victim is crushed and frozen at once. The cold makes him sluggish and desperate, and the bite is hard to escape.

### Freezing Breath

The frostmaw breathes a torrent of bitter air and ice that freezes whole stretches of ground solid, turns water to ice, and freezes men where they stand.

### Glacial Crush

It brings its whole weight down on the frozen ground, and the ice cracks and explodes outward in shards, throwing men down and cutting them.

## Special Abilities

### Falling Ice

It makes the air crystallize into falling spears of ice that strike like weapons and spread their cold.

### Glacial Regeneration

It mends itself by freezing moisture from the air onto its body. In cold or damp it heals quickly, and in its own country it cannot be outlasted.

### Frozen Mastery

It commands the ice and snow of its ground: it thickens ice, raises walls and obstacles, and uses the glacier as shield and weapon.

### Extreme Cold

Within a hundred feet of it, exposed flesh freezes in minutes, and every movement is slow and painful.

### Hibernation Cycle

In the warm months it lies dormant, indistinguishable from glacier ice, and wakes with winter or if disturbed.

### Fire Weakness

A large, sustained fire harms it, and fire magic does it real damage.

## Attributes

- **Strength:** 46-51 (1d6+45)

- **Endurance:** 15-18 (1d4+14)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 7-10 (1d4+6)

- **Aura:** 7-10 (1d4+6)

- **Will:** 13-16 (1d4+12)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 6-9 (1d4+5)
