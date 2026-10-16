---
shortcode: cmmnshrk
name: {full: Common Shark, aliases: []}
type: being
subType: creature
description: "A sleek oceanic predator honed for efficient killing, cruising warm and temperate seas and tracking prey through acute senses."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-sharkjaws, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+9
    dex: 1d6+7
    agl: 1d6+10
    per: 1d6+11
    aur: 1d4+7
    wil: 1d6+8
    rea: 1d4+3
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Strike
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 53
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Ram
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 53
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Ram
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: blunt}
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
      weight: {base: 400, calc: "400"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aquatic
        feetPerRound: 80
        leaguesPerWatch: 8
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[cmmnshrk|Common Shark]]{float=top-left}

The harbor water is flat and green, and a gray fin stands up out of it a hundred yards from the quay, moving in a slow circle. Under the surface a long, pale shape slides between the pilings with its tail sweeping once. Then the fin sinks and the water closes. The dockhands who were fishing from the end of the pier have all stepped back from the edge.

# Dossier {#dossier}

The Common Shark is the shark of the warm and temperate seas, ten to fifteen feet long and three to five hundred pounds. It cruises the Vylarian Sea, the island channels of [[place-taruzelrgn|Taruzel]], the waters off [[place-jenchairgn|Jenchai]] and the fjord coast of the [[place-nrdlndsrgn|Nordlands]], and comes into harbors and shallows for offal and blood. A shark finds blood in the water from miles away, and a swimmer is treated as food.

## Presentation

A torpedo-shaped fish, slate gray above and white below, with rough skin. The tall dorsal fin stands up in the water, and the broad pectoral fins steer. The tail is uneven, the upper lobe longer than the lower. The gill slits are visible. The mouth lies on the underside of the head and opens on rows of teeth, with new teeth moving forward to replace those that wear or break. The eyes are large and set at the sides.

## In the Land

Sharks cruise the warm and temperate seas, from the Vylarian Sea and the island channels of [[place-taruzelrgn|Taruzel]] to the waters off [[place-jenchairgn|Jenchai]] and the cold fjord coast of the [[place-nrdlndsrgn|Nordlands]], where they come in with the summer herring. They follow the fish runs, the whale carcasses and the offal from the quays, and they come into shallow water to feed at dusk. A shark is met more often in a harbor mouth than in open water.

## Key Behaviors

Sharks move with the seasons between feeding and breeding grounds. They hunt alone but gather at a dead whale, a fish run or a crowd of prey. A shark follows the smell of blood first and uses its eyes at the end to judge the size of what it has found. It eats other sharks if one is smaller. It feels injury without being deterred, and a wounded shark grows more aggressive at the scent of its own blood.

## What the Coast People Do

The fishing towns drive the sharks away from their nets with noise and lines of floats. The pearl and sponge divers of the island channels dive in numbers, with a watcher in the boat and a knife in the hand, and come up at once when the water goes still. Shark-liver oil is burnt in lamps, and the skin, dried and stretched, is used to polish wood and bone. Garhaven in Vristwald takes the shark as its wesk. Swimmers do not bathe near a slaughter-house or a fish-market outfall.

## Signs

- A dark triangular fin cutting the surface in a slow circle.
- Seabirds crowding one patch of water and diving into a boil of small fish.
- A net hauled up with half its catch missing and the mesh bitten through in a curve.
- A gray shape under the keel, longer than the boat, at the turn of the tide.
- Blood in the water from a gutted catch, and then nothing beneath it, and then everything.

## Combat Strategy

A shark's hunting strategy in combat situations is surprisingly consistent with predatory instinct. It circles prey while assessing size and threat level, approaches from an angle that minimizes the prey's ability to see it, and attacks with explosive force. The initial attack is typically the most powerful, aimed at disabling the prey—removing limbs, severing arteries, or crushing organs. If the initial attack succeeds and prey is disabled, the shark continues attacking until prey is dead or escapes the water. If prey mounts effective resistance or is too large to quickly disable, the shark may break off and circle again, reassessing. A shark that has taken significant injury may continue attacking (blood scent triggering feeding response) or may retreat if the injury is severe enough. Multiple sharks scavenging a carcass or coordinating on prey (rare, but documented) can overwhelm much larger creatures.

## Attack Methods

### Bite with Multiple Rows of Teeth

The shark accelerates and bites with devastating force, its upper and lower jaws each containing multiple rows of sharp, triangular teeth. The teeth penetrate flesh and bone with ease, and the bite itself is often sufficient to sever limbs or open arteries. Unlike mammalian predators, the shark cannot manipulate prey with its jaws; instead, it shakes violently side to side to tear flesh away. Multiple bites in rapid succession are common, with the shark circling back for successive attacks on fresh wounds.

### Tail Strike

Using its powerful caudal fin as a weapon, the shark can strike prey with tremendous force, potentially breaking bones or stunning the target. This attack is less common than biting but effective against prey that the shark cannot close distance on or prey that is already incapacitated.

### Ram Attack

A shark approaching at high speed will sometimes deliberately ram prey, using the impact of its entire body to stun or knock down the target. This is a preliminary attack meant to disorient prey for a subsequent bite attack.

## Special Abilities

### Sensory Hunting Precision

The shark can detect blood in water from extraordinary distances—the ability to follow a scent trail to its source with precision is unmatched among predators. Additionally, the shark can sense electrical impulses generated by prey's nervous system, allowing it to locate prey even in murky water, darkness, or when direct line of sight is blocked. This sensory package makes escaping a determined shark nearly impossible in water.

### Aquatic Dominance and Speed

In water, the shark is apex predator, capable of accelerating to speeds that exceed human swimming capability by factors of three or more. It maneuvers with precision, banks and turns instantly, and can position itself advantageously regardless of terrain. A swimmer has almost no chance against a shark.

### Feeding Frenzy and Escalating Aggression

When a shark detects blood or feeding opportunity, it enters an escalated state sometimes called feeding frenzy. Sensory input becomes increasingly dominant, and the shark's aggression escalates dramatically. An injured shark that tastes blood may become progressively more aggressive rather than retreating. This can result in situations where the shark's own injuries amplify its danger rather than diminishing it.

### Regenerating Tooth Rows

If a shark loses teeth during feeding or hunting, replacement teeth migrate forward automatically to take their place. This replacement cycle is continuous across the shark's lifetime, allowing it to sustain unlimited hunting even if significant portions of its dentition are damaged.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 10-15 (1d6+9)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 11-16 (1d6+10)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 8-11 (1d4+7)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 3-6 (1d4+2)
