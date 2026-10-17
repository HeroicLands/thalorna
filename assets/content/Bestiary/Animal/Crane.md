---
shortcode: crane
name: {full: Crane, aliases: [Celestial Crane]}
type: being
subType: creature
description: "A tall, elegant wading bird of temperate wetlands, so revered in imperial culture that harming one carries legal punishment."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+2
    end: 1d4+5
    dex: 1d6+10
    agl: 1d6+11
    per: 1d6+11
    aur: 1d6+9
    wil: 1d4+6
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 18}}
    - name: Beak Stab
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak Stab
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Wing Buffet
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 45
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Wing Buffet
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -3, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Body, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: headzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
      weight: {base: 12, calc: "12"}
      reachBase: 0
      bodyScaleBase: 0.6
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 80
        leaguesPerWatch: 8
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[crane|Crane]]{float=top-left}

The pool is mirror-flat in the morning light, and in the shallows two tall white birds stand facing each other. One bows, the long neck sweeping low, and the other leaps straight up with its wings spread and drops back down. A cloud of reeds goes spinning into the air from a beak. Their trumpeting rolls across the water and comes back from the far shore.

# Dossier {#dossier}

The Crane is the tall wading bird of the river basins of [[place-tantsouregin|Tantsou Region]], four to five feet high with a wingspan of seven to eight feet, and the empire protects it. Cranes stand in the marshes, shallow lakes and flooded fields. They mate for life and live for decades, and they are the emblem of fidelity, long life and order: they appear on imperial documents, on the robes of the court astronomers and on temple banners, and they are danced at court. Killing one is punished.

## Presentation

A tall, slender bird, white or pale gray and clean, with black flight feathers seen only when the wings spread. A bare patch of crimson skin crowns the head and brightens in display. The neck is long and sinuous, held in curves while standing and stretched out in flight. The legs are long, thin and dark, with feet for soft mud. The beak is long, straight and sharp, for spearing fish, frogs and small creatures.

## In the Land

Cranes stand in the marshes, shallow lakes and flooded rice-fields of the river basins of Tantsou, and winter in the warmer provinces to the south. A pair returns to the same nest-site every spring and builds it again from reeds in the shallows. The imperial lakes and temple pools keep tame cranes in their gardens, and wild pairs nest on the edges of the same water. They fly in long, ragged lines at dawn and dusk, calling.

## Key Behaviors

Cranes pair for life, and a bird that loses its mate may stay alone for years. A pair defends its nesting territory with display and, if needed, a fight. The courtship dance, in which the pair bow, leap, spread their wings, toss reeds and trumpet together, is performed throughout the year to keep the bond. Cranes migrate between the northern breeding grounds and the southern wetlands, and their arrival and departure are marked in the imperial calendar. They wade slowly and strike with great speed at fish, frogs, insects, grain and small mammals.

## What the Court Does

The empire protects its cranes by law. The crane is the symbol of fidelity and long life, and it is painted on the robes of the court astronomers and on temple banners, and danced at court. A person who kills a crane is punished, and the officials of a district where cranes nest on a farm or a road leave the nest alone, whatever the inconvenience. Farmers set their drainage ditches away from the nesting-reeds. A white crane carved in jade or ivory is given as a wish for a long marriage.

## Signs

- A tall gray bird standing on one leg in a flooded field, in no hurry to move.
- A trumpeting call carried across a lake in the early morning, answered from the other side.
- A pair facing each other in a shallow pool, bowing, leaping and flinging reeds in the air.
- A raised mound of reeds in the shallows, with a big pale egg on top.
- A line of birds, long-necked and long-legged, crossing the moon on an autumn night.

## Combat Strategy

Cranes are not aggressive toward humans and will generally retreat from confrontation by taking flight. When defending a nest, however, they become fierce — a nesting crane will spread its wings to appear larger, trumpet loudly, and strike with its beak at the eyes and face of any intruder. The beak is a real weapon: sharp, driven by the muscular neck with stabbing force, and aimed with precision at vulnerable areas. A pair defending a nest will coordinate their attacks, with one bird distracting while the other strikes from the flank. Against natural predators such as foxes or small cats, this defense is very effective.

## Attack Methods

### Beak Stab

The crane drives its long, sharp beak forward with the full extension of its neck, targeting the eyes, face, or other vulnerable areas. The strike is fast and precise, and the beak is sharp enough to draw blood and potentially blind an attacker.

### Wing Buffet

The crane strikes with the leading edge of its spread wing — a bony joint that delivers a surprisingly forceful blow capable of stunning small predators and disorienting larger ones.

## Special Abilities

### Courtship Dance

The crane's dance is not merely mating behavior — in the context of imperial culture, it has acquired almost ritual significance. Cranes that dance on the grounds of temples or imperial estates are interpreted as auspicious omens, and their movements are studied by the court astronomers for cosmological meaning. A pair of cranes establishing a nesting territory near a settlement is considered a blessing.

### Trumpeting Call

The crane's call is a clear, resonant trumpet produced by an elongated, coiled trachea that amplifies the sound. The call carries for miles across flat terrain and has a distinctive, piercing quality that is impossible to mistake for any other bird. In practical terms, cranes serve as effective sentinels — their alarm calls alert an area to the presence of predators or intruders.

### Sacred Protection

In the empire, the crane's protected legal status creates a practical game mechanic: harming or killing a crane within imperial jurisdiction is a serious offense. This protection extends to nesting sites, meaning that a crane nesting in an inconvenient location — a bridge, a granary, a military fortification — creates a real bureaucratic crisis that no official wants to resolve by ordering the nest removed.

## Attributes

Strength
: 3-6 (1d4+2) — Minimal; a wading bird, not built for power

Endurance
: 6-9 (1d4+5) — Decent migratory stamina; can fly long distances

Dexterity
: 11-16 (1d6+10) — Precise beak strikes and delicate wading movements

Agility
: 12-17 (1d6+11) — Graceful in air and on ground; the dance requires great coordination

Perception
: 12-17 (1d6+11) — Alert sentinel; excellent vision and hearing

Aura
: 10-15 (1d6+9) — Deep cultural and spiritual significance; symbol of cosmic order

Will
: 7-10 (1d4+6) — Determined nest defenders; otherwise peaceful

Reasoning
: 5-8 (1d4+4) — Intelligent bird; recognizes individual humans and remembers locations

Creativity
: 4-7 (1d4+3) — Limited
