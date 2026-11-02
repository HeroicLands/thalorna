---
shortcode: macaw
name: {full: Macaw}
type: being
subType: creature
description: "A large, loud, long-tailed parrot of the southern jungle canopy, scarlet, yellow and blue, whose feathers are among the continent's most valued trade goods."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-crowdive, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4
    end: 1d6+6
    dex: 1d6+10
    agl: 1d6+12
    per: 1d6+11
    aur: 1d6+8
    wil: 1d6+6
    rea: 1d4+7
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 10}}
    - name: Talon
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 40
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -8, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Hooked Beak
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Hooked Beak
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -6, aspect: piercing}
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
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
      weight: {base: 3, calc: "3"}
      reachBase: 0
      bodyScaleBase: 0.36
      personalFatigue: enc + 5
    currentMoveMedium: aerial
    movementProfiles:
      - medium: aerial
        feetPerRound: 180
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: terrestrial
        feetPerRound: 20
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

A scream tears across the canopy, then another, and the trees overhead fill with color: two great birds, scarlet from the beak to the trailing tail, with yellow and blue flashing across the wings. They land on a limb, rock from side to side, and look down at you with a pale bare face and a heavy black hooked beak. One lifts a nut to its mouth in a clawed foot, and the shell splits with a crack like a snapped twig.

# Dossier {#dossier}

The Macaw is a large parrot with a body about a foot long and a tail nearly twice that, three pounds in weight, that flies over the canopy in pairs and small flocks. It lives in the river jungles of [[place-xelemrgn|Shelem Region]], the jungle valleys of [[place-ixbaltzakurgn|Ish'bal Tsa'ku Region]] and the isthmus forests of [[place-neokbaatergn|Ne'ok Ba'ate Region]]. Its feathers are a luxury of the Itsani nobility and travel as far north as the nations beyond the desert.

## Presentation

A big parrot in bright primary colors: a scarlet head, body and tail, a band of yellow across the wing, and blue flight feathers and tail tip. The face is bare and pale, lined with rows of tiny feathers, and the beak is huge, black, and strongly hooked. The tail is long and tapering. The feet have two toes forward and two back, and the bird climbs and holds food with them like hands.

## In the Land

Macaws live in the tall trees of the lowland and river jungle. They feed in the canopy on nuts, seeds and fruit and fly long distances between feeding trees at dawn and dusk. They come in the early morning to clay banks along the rivers, where they gather in noisy flocks to eat the earth. They roost in tall dead trees and nest in hollows in the trunks. The birds of Shelem, the Land of Birds, are among the most numerous and bright on the continent.

## Key Behaviors

Macaws pair for life and fly side by side, with their tails streaming. Their calls are loud, harsh screams that carry for a mile, and a flock at dawn or dusk makes the forest ring. They crack nuts and seeds that no other bird can open, with a beak strong enough to snap a finger. They are intelligent, curious and social, and mimic sounds and voices; birds kept in captivity learn words. A pair guards its nest hollow fiercely, and drives off other birds and climbing animals with screams and bites. In the wild, macaws are wary and take flight at a sound.

## What the Itsani Do

The [Itsani]{.name data-type="lore/culture"} prize macaw feathers, and Shelem's feathers command prices that only the wealthiest nobles can pay. Gatherers collect the feathers from beneath roost trees and from birds kept in village courtyards, dry them and ship them downriver. The feathers pass through Ne'ok Ba'ate and Ish'bal Tsa'ku and go north in canoes and caravans; a few cross the desert in the packs of traders and pilgrims, and a macaw feather is a rare thing among the [[affiliation-teyumi|Turquoise People]] and the [[affiliation-tenlaya|Grass People]], where a war leader wears it for a season and then gives it away. Living birds are kept in the courtyards of the rich for their color and their voices.

## Signs

- A scream overhead, harsh and carrying, from a pair flying in line above the canopy.
- A bright red or blue feather lying in the leaf litter beneath a tall tree.
- Cracked nut shells in a litter under a feeding tree, split cleanly in two.
- A clay bank on the river scraped bare by beaks and crowded with birds at dawn.
- A hollow high in a trunk with fresh claw-marks and wood chips on the ground below.

## Combat Strategy

The macaw's strategy is the wings. At any hint of a threat it takes off, screaming, and the scream sends the whole flock up with it. A cornered or captive macaw fights with its beak, a hooked nutcracker that crushes fingers, and with its claws. A pair at the nest dives at an intruder in the air, screaming and striking, and drives away even large animals. In flight, a macaw is almost impossible to catch.

## Attack Methods

### Hooked Beak

The macaw bites with its huge hooked beak, a crushing grip that can break a finger or tear skin to the bone. It holds on and twists, and lets go only when the threat is gone.

### Talon

The macaw clutches and rakes with its strong feet, scoring with the claws. A bird perched on a hand or shoulder clings hard, and a frightened one tears.

### Alarm Flight

The macaw takes off in a storm of screaming and wing-beats, often with its flock, buffeting the face and eyes of whoever is nearest. The noise alone can startle a hunter or a predator into stopping.

## Special Abilities

### Crushing Beak

The macaw's beak is strong enough to crack the hardest nuts and snap bones as thick as a man's finger. Its bite does far more damage than its size suggests.

### Piercing Voice

A macaw's scream carries for a mile and sets off every bird near it. A flock of macaws warns the whole forest of a hunter, and prey animals take the warning as their own.

### Mimicry

The macaw copies the sounds it hears, including words, whistles and animal calls. A bird raised among people learns a handful of words.

## Attributes

Strength
: 1-4 (1d4) — Nothing in the body; all its force is in the beak

Endurance
: 7-12 (1d6+6) — Flies long distances twice a day between roost and feeding trees

Dexterity
: 11-16 (1d6+10) — Handles nuts, branches and food with clever feet and beak

Agility
: 13-18 (1d6+12) — A fast, powerful flier with rolling turns through the canopy

Perception
: 12-17 (1d6+11) — Keen sight and hearing; sees color well and spots hawks at a distance

Aura
: 9-14 (1d6+8) — Bright and loud; the Itsani treat its color as a sign of rank

Will
: 7-12 (1d6+6) — Stubborn in defense of a mate and a nest hollow, but flies at once from danger

Reasoning
: 8-11 (1d4+7) — Intelligent for a bird; learns words, places and people

Creativity
: 7-10 (1d4+6) — Curious, playful and inventive with food and objects
