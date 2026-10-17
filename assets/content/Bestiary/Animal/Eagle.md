---
shortcode: eagle
name: {full: Eagle, aliases: []}
type: being
subType: creature
description: "A solitary apex raptor of high ridges and passes, patrolling vast territory to snatch small mammals and fish with sudden violence."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-eaglehead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+2
    end: 1d6+7
    agl: 1d6+7
    per: 1d6+23
    snt: 1d4+1
    aur: 1d4+3
    wil: 1d6+7
    rea: 1d4+6
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 26}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 28}}
    - name: Talon
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: -5, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Beak
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 40
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -4, aspect: piercing}
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
          - {name: Left Wing, shortcode: lwingzone, probWeight: 1}
          - {name: Body, shortcode: torsozone, probWeight: 2}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 1}
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
            bodyZoneCode: lwingzone
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
            bodyZoneCode: rwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
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
            probWeight: 4
            protectionBase: {blunt: -2, edged: -3, piercing: -4, fire: -2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: -2, edged: -3, piercing: -4, fire: -2}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -2, edged: -3, piercing: -4, fire: -2}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: -2, edged: -3, piercing: -4, fire: -2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: -2, edged: -3, piercing: -4, fire: -2}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -2, edged: -3, piercing: -4, fire: -2}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -2, edged: -3, piercing: -4, fire: -2}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -2, edged: -3, piercing: -4, fire: -2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -2, edged: -3, piercing: -4, fire: -2}
      weight: {base: 20, calc: "20"}
      reachBase: 0
      bodyScaleBase: 0.52
      personalFatigue: enc + 5
    currentMoveMedium: aerial
    movementProfiles:
      - medium: aerial
        feetPerRound: 300
        leaguesPerWatch: 10
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: terrestrial
        feetPerRound: 25
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[eagle|Eagle]]{float=top-left}

A shadow slides over the scree, much faster than any cloud, and you look up. The bird is a thousand feet over the ridge, wings flat, turning in a long circle on the wind. It is so high that it is no bigger than a thumb-nail. It stops turning. For a moment it hangs, and then it folds and falls, and the sound of the stoop comes down the mountain a long time after.

# Dossier {#dossier}

The Eagle is the great raptor of the high ridges, four feet tall with a wingspan of six feet or more, hunting small mammals, fish and anything it can take from the ground or the water. It nests on crags and rock spires in [[place-graznmntns|The Grazian Mountains]], the [[place-nrdlndsrgn|Nordlands Region]] and above the forests of [[place-vrystwald|Vristwald]], where a pair keeps several valleys to itself. A road that crosses a pair's range crosses their hunting ground, and a parent at the eyrie strikes at anything that climbs toward it.

## Presentation

A big raptor, dark brown to black, with pale plumage on the head and neck that gives it an old, stern face. The eyes are pale gold or amber. The talons are the color of old bone, curved, each as long as a man's finger. The beak is massive and hooked. It walks with deliberate steps on the ground and in the air makes every turn and dive without wasted motion.

## In the Land

Eagles nest on the cliffs and crags of the Grazian Mountains, on the rock spires of the Nordlands and above the forests of Vristwald. A pair keeps one range of several valleys and one nest on a ledge, adding sticks to it each spring until it is as wide as a cart. They hunt in the morning and the evening and soar over open slopes at midday.

## Key Behaviors

Eagles hunt alone, and a mated pair defends its nesting range through the breeding season. A bird patrols a large hunting ground, returning to favored perches and updrafts to scan for movement, and circles for hours until it sees it. It takes small mammals and fish, and sometimes grouse or hares. It hunts in the hour after dawn and before dusk, and at any time when hunger presses.

## What the Mountain People Do

The eagle is the wesk of Vristwald villages such as [[place-arnholt|Arnholt]], [Arnwald]{.name data-type="place/settlement"} and [Arngrund]{.name data-type="place/settlement"}, who keep a watch on the cliff where it nests and take a pair's flights as omens. The [[lore-nyalubaclt|Nyáluba]] eagle-clan, the [Ngonzi]{.name data-type="affiliation/polity"}, count the [[lore-eaglengonzispr|Eagle Spirit]], their guide, as their ancestral presence and not as the bird alone. Shepherds in the passes pen their lambs under the crags in spring and keep dogs near the flock. An eyrie holds the bones of every kill, and a feather from it is worth a good knife. Falconers do not take eagles, which are too heavy for the wrist and too fierce to train.

## Signs

- A broad shadow sliding across a slope with no cloud above it.
- A lamb or a hare gone from the high pasture between one look and the next.
- A harsh yelp from a crag, repeated, and then silence.
- A bulky stick nest on a ledge, white with droppings, and bones below.
- A gold-brown feather as long as a forearm lying on a stone.

## Combat Strategy

An eagle's primary tactic is the dive—gaining altitude, then plummeting at tremendous speed to rake prey with talons while passing overhead. If the strike connects, it will attempt to carry small prey aloft; if the target is too heavy or puts up significant resistance, the eagle climbs again for another pass. A cornered or defending eagle uses its talons in close combat, raking with one foot while striking with the beak. It is quick to retreat if injured, climbing skyward where most terrestrial enemies cannot follow. If defending a nest, however, an eagle becomes almost fearless, making repeated passes and pressing attacks even against opponents that outweigh it.

## Attack Methods

### Talon Strike

A raking attack delivered from above or in close combat—the eagle extends its powerful legs to hook with curved talons, causing deep lacerating wounds. At range, this is devastating due to the velocity of the dive; in close quarters, the eagle can execute multiple strikes in rapid succession.

### Beak Tear

A vicious pecking and tearing attack, usually pressed once the eagle has grappled prey with its talons. The hooked beak can tear through hide and light armor, and does not require much positioning to be effective once the eagle has engaged.

## Special Abilities

### Keen Eyesight

An eagle's vision is famed among birds—it can detect the movement of a rabbit from a thousand paces away and can track a flying target across open sky with perfect clarity. It is hard to surprise or ambush from a distance.

### Powerful Wings

The eagle's massive wings allow it to climb and maneuver at speeds that leave most terrestrial creatures behind. Once aloft, it can dive with punishing acceleration and recover from a dive into a steep climb that no land-bound pursuer can match. This makes it the master of any fight in open air.

## Additional Information

Eagles mate for life and establish nesting territories that they defend with fierce dedication. A prospective character might trade favors for an eagle's aid—or its enmity if they interfere with a nest. Eagle feathers, particularly primary feathers from the wings, are prized for fletching and ceremonial purposes. A truly bold hunter might seek an eagle egg to raise a companion, though this requires either theft from a defended nest or negotiation with a territorial pair.

## Attributes

Strength
: 3-6 (1d4+2)

Endurance
: 8-13 (1d6+7)

Agility
: 8-13 (1d6+7)

Perception
: 24-29 (1d6+23)

Scent
: 2-5 (1d4+1)

Aura
: 4-7 (1d4+3)

Will
: 8-13 (1d6+7)

Reasoning
: 7-10 (1d4+6)

Creativity
: 7-10 (1d4+6)
