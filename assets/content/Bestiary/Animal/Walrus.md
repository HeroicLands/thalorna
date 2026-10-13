---
shortcode: walrus
name: {full: Walrus, aliases: []}
type: being
subType: creature
description: "An immense, tusked pinniped weighing up to three thousand pounds, hauling out in aggressive colonies on northern rocky shores and ice floes."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+17
    end: 1d6+16
    dex: 1d4+3
    agl: 1d4+3
    per: 1d6+9
    aur: 1d4+5
    wil: 1d6+11
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 53}}
    - name: Tusk Gore
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 44
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Tusk Gore
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Crushing Weight
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 37
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Crushing Weight
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Body, shortcode: torsozone, probWeight: 5}
          - {name: Tail, shortcode: tailzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Fin
            shortcode: lfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Fin
            shortcode: rfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: tailzone
            roles: [locomotor]
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
            probWeight: 6
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Gills
            shortcode: gillloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Body
            shortcode: bodyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Left Fin
            shortcode: lfinloc
            bodyPartCode: lfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Right Fin
            shortcode: rfinloc
            bodyPartCode: rfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
      weight: {base: 2250, calc: "2250"}
      reachBase: 0
      bodyScaleBase: 1.52
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: aquatic
        feetPerRound: 80
        leaguesPerWatch: 8
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[walrus|Walrus]]{float=top-left}

The beach at the foot of the cliff is a heaving mass of brown, wrinkled bodies, packed so close that none of the stones show. A bellowing rises from them, hoarse and enormous. At the edge, a bull with tusks as long as a man's arm heaves himself up on his flippers, the great head swinging from side to side. The smell reaches you before the bull does, a thick, fishy, animal reek, and the tusks, grooved and chipped, rattle together.

# Dossier {#dossier}

The Walrus is the great tusked seal of the far north, fifteen hundred to three thousand pounds with tusks up to three feet, hauling out in colonies of dozens or hundreds on the rocky shores, skerries and ice floes of the [[place-nrdlndsrgn|Nordlands]] and [[place-vithgard|Vithgard]]. Walrus ivory is a main trade good of the north, the hide goes into ship cordage and shield facings and the blubber into lamp oil and waterproofing. Hunting one is among the most dangerous work in the north, and a walrus in the water can wreck any vessel smaller than a longship.

## Presentation

A barrel-shaped animal of enormous bulk in thick, wrinkled skin, cinnamon-brown in young animals and pinkish gray in old bulls, scarred and weathered; the skin on the neck and shoulders is up to two inches thick. Under it lies four to six inches of blubber. The head is broad and blunt, with tusks, upper canines that grow all through life, curving down and outward and in old bulls over three feet long, grooved and chipped by use as ice-picks, weapons and anchors for hauling. The face is covered with a dense mat of stiff whiskers, each one mobile, that feel for shellfish on the sea floor. The flippers are broad, and the rear pair can turn forward for movement on land.

## In the Land

Walruses haul out on the rocky beaches, skerries and ice floes of the far northern coast of the [[place-nrdlndsrgn|Nordlands]] and [[place-vithgard|Vithgard]]. A colony of dozens or hundreds lies packed on the stones, the biggest-tusked bulls at the best positions. They dive to the sea-bed for clams and move south and north with the ice. A beach holds the same colony season after season.

## Key Behaviors

Walruses live in colonies on favored haul-out sites: rocky beaches, ice floes and sheltered coves. Rank is held by size, and the largest-tusked bulls take the best places and the females. Bulls compete by rearing up, bellowing and clashing tusks, and by fights that can cause deep puncture wounds. In the water they cooperate, and adults defend calves together against polar bears and sharks. They eat clams, mussels and snails, found with the whiskers and sucked out of the sea floor; a feeding walrus takes several thousand clams in one session of dives. They dive deep and hold their breath for a long time but prefer shallow feeding grounds.

## What the Carvers Do

The carvers of [[place-marvstead|Marvstead]] work walrus tusk into combs, hilts and trade goods that carry the name of Vithgard south. The hunters take walrus at the haul-out with spears from a boat, when the herd is asleep, and the hide, blubber and ivory pay for a season. A bull in the water will tip a boat. Hunters stay downwind and approach slowly. A stampede of a colony crushes pups and hunters alike. The meat is shared, and the best tusks go to the carvers.

## Signs

- A mass of brown bodies on a beach, with a great bellowing carrying over the water.
- A bristled, tusked head rising beside a boat.
- A long gouge in the shingle where a walrus has dragged itself ashore.
- Mounds of crushed clam shells on the sea-bed, brought up in a net.
- A tusk lying whole on the shore above the tide-line.

## Combat Strategy

On land, the walrus relies on sheer mass and its tusks. It cannot pursue agile opponents but it does not need to — a walrus holding ground is nearly impossible to dislodge, and anything that comes within tusk range is in mortal danger. The tusks sweep in lateral arcs or stab downward with the full weight of the head and neck behind them. A charging walrus on land is slow but unstoppable — the mass simply bowls over obstacles. In water, the walrus is transformed: fast, agile, and capable of attacking from below. A walrus can capsize a small boat by surfacing beneath it, can puncture hulls with its tusks, and can drag swimmers under. Walruses defending calves or haul-out sites become collectively aggressive, with multiple animals surging toward a threat simultaneously. The most dangerous scenario is a boat that has approached a haul-out colony too closely — panicked walruses plunging into the water can swamp vessels, and an aggressive bull may attack the boat directly.

## Attack Methods

### Tusk Gore

The walrus drives its tusks forward or sweeps them laterally, using the full mass of its head and neck to power the strike. The tusks can puncture wood, leather, and light armor, and the wounds they inflict are deep, ragged punctures that bleed heavily. Against opponents on the ground, the walrus stabs downward with devastating effect.

### Crushing Weight

The walrus simply rolls or surges its body onto an opponent, using its enormous mass to pin and crush. On ice or wet rock, this can happen with startling speed. A pinned opponent beneath a walrus has virtually no chance of freeing themselves without outside assistance.

### Hull Breach

In water, a walrus can attack vessels directly — surfacing beneath small boats to capsize them, or driving tusks through hull planking. A determined bull can reduce a skin-hulled boat to wreckage in minutes.

## Special Abilities

### Blubber Armor

The walrus's hide and blubber combine to form natural armor several inches thick. Cutting weapons lose much of their effectiveness against this layer — blades that would be lethal against thinner-skinned animals merely score shallow wounds in blubber. The neck and shoulders of mature bulls are especially thick, having been reinforced by years of tusk-fighting. Piercing weapons are more effective, but even these must penetrate several inches of insulation before reaching vital organs.

### Aquatic Supremacy

In water, the walrus's apparent clumsiness vanishes entirely. It becomes fast, maneuverable, and capable of diving and surfacing with precision. It can hold its breath for extended periods and can swim distances that would exhaust most land animals. Any encounter with a walrus in its aquatic element is exponentially more dangerous than one on land.

### Vibrissae Sensitivity

The walrus's whiskers are extraordinarily sensitive tactile organs, capable of detecting vibrations and pressure changes in the water. In darkness or murky conditions, the walrus can locate prey and threats by touch alone, making it effectively impossible to sneak up on in the water.

## Attributes

- **Strength:** 18-23 (1d6+17) — Enormous physical power; tusks can pierce hull planking
- **Endurance:** 17-22 (1d6+16) — Blubber insulation and cardiovascular reserves for extreme cold and deep diving
- **Dexterity:** 4-7 (1d4+3) — Nearly helpless for fine manipulation; built for brute force
- **Agility:** 4-7 (1d4+3) — Slow and ungainly on land; transformed in water
- **Perception:** 10-15 (1d6+9) — Excellent tactile and auditory senses; vision adequate
- **Aura:** 6-9 (1d4+5) — Respected and feared, but not sacred
- **Will:** 12-17 (1d6+11) — Aggressive and tenacious; will not yield ground
- **Reasoning:** 5-8 (1d4+4) — Social intelligence within colony hierarchy
- **Creativity:** 3-6 (1d4+2) — Minimal
