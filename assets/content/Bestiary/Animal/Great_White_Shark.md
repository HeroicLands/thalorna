---
shortcode: grtwhtsh
name: {full: Great White Shark, aliases: []}
type: being
subType: creature
description: "An apex ocean predator exceeding twenty feet and several tons, a solitary killing machine that patrols deep and shallow waters unchanged for millions of years."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-sharkjaws, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+15
    end: 1d6+12
    dex: 1d6+7
    agl: 1d6+9
    per: 1d6+12
    aur: 1d6+8
    wil: 1d6+10
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Devastating Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 61
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Devastating Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Ramming Charge
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 51
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Ramming Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 5}
          - {name: Body, shortcode: torsozone, probWeight: 11}
          - {name: Tail, shortcode: tailzone, probWeight: 4}
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
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Gills
            shortcode: gillloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Body
            shortcode: bodyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Fin
            shortcode: lfinloc
            bodyPartCode: lfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Fin
            shortcode: rfinloc
            bodyPartCode: rfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 6000, calc: "6000"}
      reachBase: 0
      bodyScaleBase: 1.43
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aquatic
        feetPerRound: 100
        leaguesPerWatch: 10
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[grtwhtsh|Great White Shark]]{float=top-left}

The seal colony on the skerry has stopped barking. Every animal is crowded to the high rocks, heads up, looking at the water. The sea beyond is a flat, cold gray with a long swell. Fifty yards from the rocks a tall, triangular fin rises without a ripple and stays above the surface, moving slowly along the shore. Below it, a pale shape much longer than your boat rolls once and sinks.

# Dossier {#dossier}

The Great White Shark is the largest of the sharks, over twenty feet and several tons, a lone hunter of the cold and temperate seas. It follows the seal colonies and whale grounds off the fjord coast of the [[place-nrdlndsrgn|Nordlands]], the open Vylarian Sea and the western ocean, in shallow water and deep, and kills whatever enters its range. A single shark may be seen once in a lifetime in any given bay, and an encounter at sea or in the water is rarely survived.

## Presentation

A streamlined fish tapering from broad shoulders to a powerful tail, smooth gray above and white below, so that it is hard to see against the dark depths from above and against the bright surface from below. The head tapers to a pointed snout with the nostrils to either side. The eyes are small and set to the sides. The enormous mouth holds rows of serrated teeth, with replacements moving forward as the front ones wear away. The dorsal fin is large and triangular, and the tail is crescent-shaped.

## In the Land

Great white sharks patrol the cold and temperate seas: the fjord coast of the [[place-nrdlndsrgn|Nordlands]], the open water of the Vylarian Sea and the seal rocks and whale grounds of the western ocean. A shark follows the seal colonies and the schools of tuna, cruises the shallows at dawn and dusk, and rises from the depths under its prey. They are rare and wide-ranging, and a single shark may be seen once in a lifetime in any given bay.

## Key Behaviors

Great whites hunt alone over huge ranges, taking seals, dolphins, large fish and anything else that enters the water. They attack from below, rising out of the depths for a single explosive strike, and they sense the electrical fields of moving muscle at a distance. They feed only every few weeks or months when the prey is large, and digest slowly.

## What the Fishing Towns Do

The fishing towns keep to the inshore water when a big shark has been seen, and the boats stay in at the turn of the tide. Sealers working the rocks approach them from the land side and use a boat only on a calm day. Whalers cut away the carcass as soon as it is dead, because the sharks gather. A fisherman who has seen one tells the story for years, and a tooth the length of a hand is kept as a charm. A harpooner who kills one is paid by the town.

## Signs

- A gray fin, tall and triangular, cutting the surface with no wake.
- A seal colony gone silent, with the pups crowded to the highest rocks.
- The remains of a whale carcass with great scallops bitten from the flanks.
- A boat's hull scored by a single set of curved grooves, a hand's width apart.
- A calm, empty bay in the hours before dawn, when no fish are rising.

## Combat Strategy

A Great White's attack is designed for one-hit killing—the initial bite is intended to be catastrophic, severing limbs or killing instantly. If the initial strike succeeds, the shark retreats to wait for the prey to weaken before feeding. If the strike fails or if the prey survives, the shark may make additional strikes, though it generally does not engage in prolonged combat. A shark in confined space (like a ship or shallow water) becomes more predictable and aggressive, making repeated attacks rather than retreating.

## Attack Methods

### Devastating Bite

The shark's bite is one of the most powerful in the animal kingdom—rows of serrated teeth deliver crushing force capable of severing limbs, smashing bone, and inflicting catastrophic trauma. A successful bite is nearly always fatal or crippling.

### Ramming Charge

The shark uses its massive body weight and speed to ram prey, knocking them off balance or into deeper water. The impact alone can cause serious injury.

## Special Abilities

### Apex Hunter

The shark's senses are supremely keen—it can detect electrical fields, smell blood from miles away, and sense movement through water vibrations. The shark is nearly impossible to surprise in water.

### Aquatic Mastery

In water, the Great White is supremely graceful and fast, capable of striking faster than humanoid reflexes can follow. Out of water, the shark is helpless.

## Additional Information

A Great White Shark's territory should be avoided—the risk is simply too great. Some cultures revere sharks as embodiments of power or hunting prowess. A dead shark's teeth can be worked into weapons or jewelry. The jaw of a great white shark is famed.

## Attributes

- **Strength:** 16-21 (1d6+15)

- **Endurance:** 13-18 (1d6+12)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 10-15 (1d6+9)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 9-14 (1d6+8)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 3-6 (1d4+2)
