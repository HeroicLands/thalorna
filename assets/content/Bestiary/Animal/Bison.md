---
shortcode: bison
name: {full: Bison}
type: being
subType: creature
description: "A huge, shaggy grassland bovine of the northern plains, the herd animal that the Grass People hunt on foot and that sets the rhythm of their year."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-bull, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+20
    end: 1d6+16
    dex: 1d4+2
    agl: 1d6+6
    per: 1d6+8
    aur: 1d6+6
    wil: 1d6+10
    rea: 1d4+2
    cre: 1d4+1
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 24}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Horn Gore
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Horn Gore
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Trample
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Trample
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
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
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 6}
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
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
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 1800, calc: "1800"}
      reachBase: 0
      bodyScaleBase: 1.3
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

The ground trembles before any sound arrives. Along the rim of the grass a dark line is moving, and then the line becomes bodies: thousands of humped, shaggy shapes with their heads low and the dust rising behind them in a brown wall. A bull stands apart on a rise, heavy through the shoulders and thin through the hips, steam on his breath. He watches you with one small dark eye and does not move his head.

# Dossier {#dossier}

The Bison is the great grazer of the northern plains, five to six feet at the hump and one thousand to two thousand pounds in a bull, a herd animal that lives and travels by the thousand. It ranges the grassland of [[place-tenlayargn|Tenlaya Region]], the home of the [[affiliation-tenlaya|Grass People]], from the tall wet prairie of [[place-watotenlargn|Long Grass]] to the high short-grass plain of [[place-wehioshtergn|Cairn Plain]]. The herds set the seasons of that nation, and the cairn lanes and cliffs of the western plain exist to kill them.

## Presentation

A massive animal built forward: a huge head carried low, a high hump of muscle over the shoulders, and a shaggy front that tapers to slim hindquarters and a tufted tail. The coat is dark brown and woolly over the head, hump and forelegs, shorter and paler behind, and it comes away in the summer in great ragged mats. Both sexes carry short, curved, black horns. A newborn calf is a bright reddish tan.

## In the Land

Bison graze the whole of the Grass People's grassland. They winter on the short grass of Cairn Plain, where the wind strips the snow, and drift east to the tall grass of Long Grass in spring, after the bands have burned it and the new growth has come up green. Small herds cross the passes into the dry plateaus west of the mountains, and the western bands hunt them only there. The herds follow routes worn into the ground over centuries, toward water and fresh grass, and a herd that is turned from a route finds the next one.

## Key Behaviors

Bison live in herds of cows, calves and young animals led by old cows, with the bulls ranging alone or in small bachelor groups until the late-summer rut, when they gather to bellow, wallow and fight. A herd grazes through the day, drinks at the same crossings and lies down to chew in the heat. Bison see poorly and smell very well, and a herd startled by a scent or a shape runs together, a mass that does not turn quickly and does not stop. A bull that raises his tail stiffly and paws is about to charge. Wounded animals, cows with calves and bulls in the rut stand and fight, and they turn with a speed that surprises people who think of them as slow.

## What the Grass People Do

The [[affiliation-tenlaya|Grass People]] live by the herds. The bands hunt bison on foot, steering a herd along lanes of stone cairns toward a known cliff or into a pound of logs and stone, and a band that can do this eats through the winter. Knowing where the herds are and where they are going is the first thing a band child learns, before the bow. The meat is dried and pounded with berries, the fat and the robes are traded, and the hides become lodge covers, clothing and bull boats. Bison fat, pounded meat and robes go north to the [[lore-kawiskakclt|Spruce People]] and east to the [[affiliation-osetakona|Maple People]] and the [[affiliation-tokchiaska|One Fire]]. The western bands of the Grass People take them only where small herds cross the passes.

## Signs

- A trail worn knee-deep into the sod, a hand's breadth wide at each hoof-print, running toward water.
- A bare, dusty wallow with rubbed fur caught on the edge, where a bull has rolled.
- Dung in drying cakes across a whole hillside, with wolves and ravens at the edges.
- A far-off drone like wind, a brown haze on the skyline and a trembling in the ground.
- Lines of stone cairns running for miles across the plain toward a cliff edge.

## Combat Strategy

The bison's strategy is the mass and the charge. A herd under threat bunches, the calves move to the center and the cows and bulls face outward; when it runs, it runs together, and anything in its path is trampled. A lone animal that is cornered or wounded lowers its head, grunts, paws the ground and charges in a straight line, pivoting at the last moment to hook with the horns. It turns far more quickly than its bulk suggests and follows a retreating enemy for a short distance only. A bull in the rut is the most dangerous, and a cow with a calf is the next. Against a pack, the herd keeps its calves inside a ring of horns and gives up only the weak and old.

## Attack Methods

### Horn Gore

The bison swings its head low and hooks upward with short, thick, curved horns, driving them into the belly, thigh or ribs of the enemy and tossing the victim aside. The heavy skull behind the horns puts the weight of the whole forequarters into the blow.

### Trample

A bison that knocks an enemy down goes over the body with its forefeet and its weight, and a charging animal does not stop to avoid what is under it. The attack crushes ribs and limbs and is worst when the herd runs together.

### Charge

The bison runs straight at the target with its head down and its tail raised, building speed over a short distance and striking with the whole shoulder and skull. The impact alone can throw a man from his feet or break a cart.

### Stampede

A herd frightened into running becomes a single weapon. Everything in its path is struck, thrown and trodden, and a stampede cannot be turned by a single hunter. Hunters use it deliberately, driving the herd along a lane toward a cliff.

## Special Abilities

### Thick Skull and Hump

The bison's skull and the heavy mat of hair and muscle across the neck and hump take blows that would split another animal's head. Blows to the front of a charging bison that land on skull or hump are partly absorbed.

### Surprising Turn

In spite of its bulk, a bison can pivot and change direction in its own length at a run. Attackers who circle to the side of a charging animal are not safe there.

### Winter Forager

A bison swings its head to sweep snow from the grass and feeds through the winter on the plains where other grazers starve. A herd survives weather that kills cattle.

## Attributes

Strength
: 21-26 (1d6+20) — Among the heaviest and most powerful animals of the continent; the shoulders and neck carry the whole weight of a charge

Endurance
: 17-22 (1d6+16) — Travels and grazes through hard winters and runs for miles when startled

Dexterity
: 3-6 (1d4+2) — Clumsy at fine work; its hooves and horns are blunt instruments

Agility
: 7-12 (1d6+6) — Surprisingly quick to turn and to start, though not nimble

Perception
: 9-14 (1d6+8) — Smells and hears well at a distance, but sees poorly

Aura
: 7-12 (1d6+6) — Gives the sense of a presence: the herd as a single thing that the Grass People hold in awe

Will
: 11-16 (1d6+10) — Stubborn and fearless when cornered or wounded; stands and fights rather than flees

Reasoning
: 3-6 (1d4+2) — Herd-minded; learns routes, crossings and places

Creativity
: 2-5 (1d4+1) — Little improvisation; follows the herd and the ground
