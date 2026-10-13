---
shortcode: quetzal
name: {full: Quetzal, aliases: [Sacred Quetzal]}
type: being
subType: creature
description: "A small, brilliantly iridescent jungle trogon whose trailing green tail feathers are prized above gold across the highland civilizations."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+1
    end: 1d4+3
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+10
    aur: 1d6+11
    wil: 1d4+4
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 13}}
    - name: Beak Peck
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 54
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak Peck
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -3, aspect: piercing}
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
      weight: {base: 0.5, calc: "0.5"}
      reachBase: 0
      bodyScaleBase: 0.52
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: terrestrial
        feetPerRound: 15
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[quetzal|Quetzal]]{float=top-left}

In the green dimness of the cloud forest a flash of emerald catches the light, high on a branch. It is a small bird with a rounded, helmet-like crest and a crimson breast. Then it launches itself into the air with two long green streamers pouring out behind it, longer than a man's arm, rippling and undulating, and hovers in front of a fruit-tree. It plucks a berry, and a soft, melodious whistle drifts down through the mist.

# Dossier {#dossier}

The Quetzal is the sacred bird of the cloud forest, a trogon about twelve inches long with a male's tail streamers adding two or three feet and weighing half a pound. It lives in the mist forests between the lowland jungle and the highland plateau above [[place-xelemrgn|Xelem]], [[place-neokbaatergn|Ne'ok Ba'ate]] and [[place-ixbaltzakurgn|Ix'bal Tza'ku]]. Its tail feathers are the most valuable natural material of the highland civilizations of [[place-kchchkcntnnt|K'ich'chik]], worth more than their weight in gold. The bird is tied to the wind god and to freedom, and it is said to die in a cage.

## Presentation

A small bird of dazzling beauty. The male's head, back and upper breast are iridescent, shifting between emerald, gold and turquoise with the light, the color seeming to glow from inside. The lower breast and belly are deep crimson. The head carries a rounded crest of green feathers, and the beak is short and yellow. The eyes are large and dark. Two upper tail coverts hang far beyond the true tail as flowing green streamers more than three feet long, which ripple in flight.

## In the Land

Quetzals live in the mist-wrapped cloud forest between the hot lowland jungle and the highland plateau, above [[place-xelemrgn|Xelem]], [[place-neokbaatergn|Ne'ok Ba'ate]] and [[place-ixbaltzakurgn|Ix'bal Tza'ku]]. A bird sits quietly in the middle canopy and plucks small fruit on the wing, hovering. A male has a green tail-streamer two or three feet long. In the breeding season it leaps from the tree-tops and spirals down, trailing it.

## Key Behaviors

Quetzals live alone or in pairs in the cloud-forest canopy and eat small fruit, which they pluck in hovering flight, along with insects, small frogs and lizards. In courtship the male rises above the canopy and spirals down with his streamers trailing. They nest in tree cavities, and the male's long tail feathers protrude from the hole during incubation. They are shy and keep to the deepest forest. The call, a soft, melodious whistle, is used in temple music and poetry.

## What the Itzáni Do

The Itzáni prize the quetzal's tail-feathers above gold. Plumes are worn by rulers and priests, and the feather-workers of the highland cities make headdresses and cloaks from them. Bird-catchers take the long feathers from the living bird and let it go, and a bird killed for its feathers is a sacrilege. The feathers of the quetzal and the macaw are among the goods sent from the valleys of Ix'bal Tza'ku to the cities. A male's streamers are measured in the market with a knotted cord.

## Signs

- A flash of green at the edge of a cloud-forest clearing and a glimpse of a red breast.
- A long, emerald plume on the mossy ground below a nesting hole in a rotten trunk.
- A low, liquid whistle from a tree-crown that carries through mist.
- A hole in a dead tree-trunk with a bird's tail curled out of it.
- A bird-catcher's lime-twigs on a bare branch above a fruiting tree.

## Combat Strategy

The quetzal has no combat strategy. It is a small, fragile bird that flees from any threat by disappearing into the canopy, where its green plumage provides effective camouflage despite its brilliance — in the dappled green light of the cloud forest, the iridescent feathers become surprisingly difficult to track. A cornered quetzal will peck and flutter, but this is desperation, not defense.

## Attack Methods

### Beak Peck

A small, sharp beak capable of piercing fruit — functionally useless as a weapon against anything larger than an insect. Mentioned only for completeness.

## Special Abilities

### Freedom or Death

The highland peoples believe the quetzal cannot survive captivity — that it will die of despair rather than endure a cage. Whether this is literal physiology (the bird is fragile and stress-sensitive) or cultural mythology elevated to law, the practical effect is absolute: quetzals are never caged, and the elaborate live-trapping and release system used to harvest feathers is built around this principle.

### Sacred Immunity

The quetzal's protected status surpasses even the peacock's or the crane's elsewhere. Killing a quetzal is a capital offense — the perpetrator may be sacrificed to the wind deity. This protection extends to the cloud forest habitat, and logging or clearing land where quetzals nest requires temple dispensation that is almost never granted. The economic value of quetzal feathers, combined with the death penalty for killing the birds, has created an entire specialized profession of live-trappers whose techniques are closely guarded guild secrets.

### Canopy Camouflage

Despite its vivid coloration, the quetzal is very difficult to spot in its natural habitat. The iridescent green feathers match the play of light through cloud forest canopy almost exactly, and a motionless quetzal on a moss-covered branch is effectively invisible until it moves or calls.

## Attributes

- **Strength:** 2-5 (1d4+1) — Negligible; a bird weighing half a pound
- **Endurance:** 4-7 (1d4+3) — Fragile; stress-sensitive; short-flight specialist
- **Dexterity:** 12-17 (1d6+11) — Precise hovering flight for fruit-plucking
- **Agility:** 13-18 (1d6+12) — Extraordinary aerial maneuverability in dense canopy
- **Perception:** 11-16 (1d6+10) — Good forest-interior senses; adapted for low light
- **Aura:** 12-17 (1d6+11) — The highest Aura of any creature in the bestiary; feathers worth more than gold
- **Will:** 5-8 (1d4+4) — Gentle and retiring; no aggression
- **Reasoning:** 4-7 (1d4+3) — Standard bird intelligence
- **Creativity:** 4-7 (1d4+3) — Limited
