---
shortcode: ttnbtl
name: {full: Titan Beetle, aliases: []}
type: being
subType: creature
description: "A massive armored herbivorous beetle six to eight feet long that fiercely defends its territory in dense forests, badlands, and caves."
tags: [animal]
data:
  packFolder: animals
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
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+17
    end: 1d6+15
    dex: 1d4+6
    agl: 1d4+5
    per: 1d6+7
    aur: 1d4+5
    wil: 1d6+10
    rea: 1d4+2
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 50}}
    - name: Mandible Crush
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: mandible
          name: Mandible Crush
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Body Slam
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 38
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Body Slam
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Thorax, shortcode: thoraxzone, probWeight: 2}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Thorax
            shortcode: thoraxpart
            bodyZoneCode: thoraxzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase: {blunt: 10, edged: 9, piercing: 7, fire: 9}
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 10, edged: 9, piercing: 7, fire: 9}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 7, fire: 9}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 7, fire: 9}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 7, fire: 9}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 7, fire: 9}
      weight: {base: 400, calc: "400"}
      reachBase: 0
      bodyScaleBase: 1.52
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[ttnbtl|Titan Beetle]]{float=top-left}

The felling crew has stopped work, and you can hear why: a creaking, grinding sound from the far side of the great fallen trunk, like a cart with a dry axle. Over the trunk comes a beetle. It is longer than a man is tall, black as a cooking pot and shining like one, and its head carries two jaws curved down like a pair of sickles. It walks over the log on six thick hooked legs without hurrying, and its shell rings faintly when a branch scrapes it. It stops at the end of the trunk where the men were cutting, lowers its head, and opens the jaws. The foreman says, very quietly, to put down the axes and walk backward.

# Dossier {#dossier}

The Titan Beetle is a giant beetle, six to eight feet long, armored in thick black chitin, with downcurved mandibles strong enough to snap a sapling or a man's leg. It eats bark, leaves and soft wood and does not hunt, and it is peaceable until something crowds it, touches it, or comes near its eggs, and then it charges and keeps charging. It lives in hot, dense forest and the broken country at its edges, and in the [[place-okharisrgn|Okharis Region]] it is the forest tribes' great nuisance and an occasional killer, because it lives in the same hardwood stands they fell for timber and charcoal.

## Presentation

A titan beetle is long, broad and low, with a body plated in segments of thick, polished black chitin that look like burnished iron, and that ring when they are struck. The head is broad and flat, with small eyes on the sides and a pair of heavy mandibles that curve down and inward like sickles, serrated along their inner edges. Short, thick antennae sweep the air ahead of it. Six legs, each as thick as a man's forearm, end in hooked claws that grip bark and rock. The wing-cases are fused, and it does not fly. It moves slowly and steadily, with a constant creak of plate against plate, and a beetle in a hurry is a sound like a cart going downhill.

## In the Land

Titan beetles live in the hot forest of western Okharis, where the rains keep the trees thick along the watercourses and the forest thickens southward toward the wall of the [[place-cntrlrnfrsts|Central Rainforests]]. They eat the bark of the great hardwoods, the leaves of the understory and the soft rotten wood of fallen trunks, and they keep to a few acres of forest round a stand of old trees for years. The females lay their eggs in the rotting heart of a fallen hardwood, and the grubs live in it for years before they come out. Beetles are found too in the broken, rocky country at the forest edge and in caves, where they shelter in the hottest weather. They do not go out onto the open grassland.

## Key Behaviors

A titan beetle spends its days feeding and its nights sheltering in a hollow, a cave mouth or under a fallen trunk. It strips bark in long ragged swathes, chews through saplings and bores into rotten logs. It is solitary and keeps other beetles off its trees, and two males that meet in the breeding season fight by locking jaws and shoving until one is turned over. It ignores people who keep their distance and go about their business. It defends itself, its feeding trees and above all a log with eggs in it, and a female guarding eggs attacks anything that comes near the log, men and cattle included. It goes a long time without food, and a beetle shut in a cave or a pit is still alive weeks later.

## What the Forest Tribes Do

The [[affiliation-dongarutrb|Dóngaru]], who fell the forest's hardwoods and burn charcoal in earth-covered stacks round [[place-dongaruvlg|Dóngaru Village]], meet titan beetles in every season's felling. A crew that finds a beetle on a stand it means to cut moves to another stand, and a fallen trunk with a female on it is left to rot. A beetle that will not leave a felling ground is smoked out with green wood or driven off with fire by men carrying long poles. Killing one is hard work and seldom worth it, but a dead beetle is valuable: the chitin plates are cut into shields and breast-plates that turn a spear, and the temple-cities' smiths buy the mandibles to set on the hafts of ceremonial axes. The grubs dug from a rotten log are eaten roasted, and the Dóngaru count a log full of them a good find, provided its mother is elsewhere.

## Signs

- Bark stripped from the trunks of big hardwoods in long, ragged swathes, as high as a man can reach.
- Saplings cut through cleanly at knee height, as if with a sickle.
- A fallen trunk bored through with holes as wide as a fist, with sawdust spilling out of them.
- Broad, six-legged tracks in soft ground, with deep claw-marks, and a drag between them.
- A creaking, grinding sound in the undergrowth, very steady, moving slowly.

## Combat Strategy

A titan beetle that has been roused charges straight at whatever roused it, as fast as it can move, and closes its mandibles on the first thing it reaches. It does not dodge and barely notices blows: it simply keeps coming, biting and shoving with its weight, until the threat is gone or it is. A beetle that is hurt badly and can get away does get away, slowly, into the undergrowth. A female guarding eggs does not retreat at all. The beetle is slow and a man who keeps his distance can usually walk away from it, unless he is cornered against a trunk, a stack or a ravine.

## Attack Methods

### Mandible Crush

The beetle closes its sickle jaws on a leg, an arm or a body. The serrated edges cut through leather and flesh and the pressure breaks bone, and a beetle that has hold of a limb shakes its head and does not let go easily.

### Body Slam

The beetle drives its armored weight into a man and shoves, knocking him down, pinning him against a tree or a rock, and crushing him there.

## Special Abilities

### Natural Armor

The chitin protects the beetle as well as heavy armor against cuts and thrusts. Blows that find the joints between the plates, under the head or at the legs, do far more harm.

### Immovable Mass

The beetle is low and heavy for its size and grips the ground with six clawed feet, and it is nearly impossible to knock over, shove aside or move against its will.

### Relentless Strength

Once it is fighting the beetle keeps on, untroubled by pain or wounds, until the threat is gone or it is dead.

## Attributes

Strength
: 18-23 (1d6+17)

Endurance
: 16-21 (1d6+15)

Dexterity
: 7-10 (1d4+6)

Agility
: 6-9 (1d4+5)

Perception
: 8-13 (1d6+7)

Aura
: 6-9 (1d4+5)

Will
: 11-16 (1d6+10)

Reasoning
: 3-6 (1d4+2)

Creativity
: 3-6 (1d4+2)
