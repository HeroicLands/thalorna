---
shortcode: reindeer
name: {full: Reindeer, aliases: [Caribou]}
type: being
subType: creature
description: "A hardy northern cervid in which both sexes grow antlers, supremely adapted to survive and sustain entire cultures in bitter arctic cold."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-deer, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+8
    end: 1d6+10
    dex: 1d4+7
    agl: 1d6+10
    per: 1d6+10
    aur: 1d4+5
    wil: 1d6+9
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 33}}
    - name: Antler Sweep
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Antler Sweep
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Hoofstrike
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Hoofstrike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
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
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 400, calc: "400"}
      reachBase: 0
      bodyScaleBase: 1.06
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 90
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[reindeer|Reindeer]]{float=top-left}

A low, clicking noise reaches you across the snow, a sound like thousands of dry twigs snapping. It comes out of a gray line on the horizon that lengthens and thickens as you watch. Reindeer, hundreds upon hundreds, pour over the rise, heads down, antlers swaying in a forest of branching bone, their breath rising in a cloud. The ground shakes. They pass you at a walk, in a river the width of a valley, and the clicking goes on.

# Dossier {#dossier}

The Reindeer is the deer of the far north, three to four feet at the shoulder and three to five hundred pounds, the only deer in which both sexes grow antlers. Wild herds of thousands cross the tundra and pine forest of the [[place-nrdlndsrgn|Nordlands]] and the subarctic north of [[place-northkiichchik|Northern Ki'ich'chik]] in seasonal migrations that have followed the same routes for millennia. The northern peoples and the highland clans use every part: transport, milk, leather, sinew, bone tools and meat.

## Presentation

A compact, broad-chested deer on short, powerful legs ending in wide, splayed hooves that work as snowshoes on soft ground and paddles in water. The coat is extremely dense, hollow guard hairs over a thick undercoat, dark gray-brown on the back and flanks and pale cream on the chest, belly and rump. The face is broad with a furred muzzle that warms the air before it reaches the lungs. A bull's antlers are massive and complex, sweeping back and up with many tines and a forward brow tine that overhangs the face; a cow's are smaller and kept through the winter after the bulls have shed theirs. The ankle tendons click audibly as the animal walks, which lets the herd keep together.

## In the Land

Reindeer, called caribou in the north, live in great herds on the tundra and the pine forest of the Nordlands and on the tundra of Northern Ki'ich'chik. A herd of hundreds moves in spring from the sheltered winter forest to the summer tundra and back in autumn, by routes led by the old cows, and crosses the same rivers at the same fords each year. The cold slows nothing; the herd feeds by pawing the snow away from lichen.

## Key Behaviors

Reindeer live in herds ruled by the seasons. The routes between winter forest and summer tundra are hundreds of miles each way and are led by experienced cows, who remember the crossings and the timing. Bulls join in autumn for the rut, with antler displays and sparring that are vigorous but rarely fatal, and the winner takes a harem. Reindeer swim rivers and even fjord channels. They eat grasses, sedges and lichens, and smell lichen under deep snow and dig for it, which no other large grazer can do.

## What the Caribou Clans Do

The caribou clans of the northern plateaus live by the herds. They follow the migration with their tents and sleds, take the meat and the hides, use the sinew for thread and the antlers for tools, and drink the milk. At the carvers' town of [[place-marvstead|Marvstead]], reindeer antler is worked into combs and hilts alongside walrus tusk. The clans herd tame animals as draft and riding beasts, and they take wild animals at the river crossings. Wolves, bears and eagles follow the herds, and the clans lose calves to them every spring.

## Signs

- A broad trail of cloven prints trampled into snow or tundra, miles long.
- A clicking sound in the dark, from the tendons of a herd on the move.
- Shed antlers on the ground in a heap, gnawed by mice.
- Pits in the snow where the animals have pawed to the lichen.
- A column of animals crossing a river, heads up, with wolves behind.

## Combat Strategy

Reindeer are fundamentally non-aggressive outside the rut and prefer flight to confrontation, relying on herd cohesion and sheer numbers for protection. A stampeding herd is itself a weapon — the thundering mass of hundreds of animals will trample anything in its path. During the rut, bulls become territorial and will charge perceived rivals, including humanoids who approach too closely. A bull uses its antlers to sweep and gore, driving with the full force of its stocky body. Females defending calves will kick with sharp hooves and may charge. Domesticated reindeer are generally docile but can become panicked and dangerous if startled, and a sled team in full bolt is extremely difficult to stop.

## Attack Methods

### Antler Sweep

The bull lowers its massive antlers and charges forward, using the broad rack to sweep opponents off their feet or gore them with the tines. The brow tine is particularly dangerous, positioned to catch targets in the face and torso at close range.

### Hoofstrike

The wide, sharp-edged hooves deliver powerful kicks capable of cracking bone. The splayed shape means the strike cuts as well as impacts, and a rearing reindeer can deliver strikes from both forelimbs simultaneously.

### Herd Stampede

When a herd panics, the resulting stampede is a force of nature — hundreds of animals moving as a wall of muscle and antler, trampling everything in their path. The noise alone can disorient, and the dust or snow thrown up reduces visibility to nothing.

## Special Abilities

### Arctic Adaptation

The reindeer's hollow-hair insulation, furred muzzle, and specialized nasal passages allow it to survive temperatures that would kill most mammals within hours. It can sleep in the open during blizzards, swim icy rivers without hypothermia, and maintain activity in conditions where other animals must shelter or die.

### Snow Foraging

Reindeer can detect lichen buried under several feet of snow through scent alone, then dig through the snowpack with their hooves to reach it. This ability makes them the only large herbivore that can sustain itself through northern winters on natural forage, and it makes them invaluable to any group traveling through winter tundra.

### Tendon Click Communication

The distinctive clicking sound produced by the ankle tendons works as a passive communication system, allowing herd members to maintain cohesion in darkness, fog, or blizzard whiteout conditions. A herd moving at night produces a continuous clicking rhythm that can be heard at significant distance — both a navigation aid for the herd and an early warning to anything in its path.

## Attributes

Strength
: 9-14 (1d6+8) — Compact and powerful, built for hauling loads and pushing through deep snow

Endurance
: 11-16 (1d6+10) — Great stamina for migration and extreme cold survival

Dexterity
: 8-11 (1d4+7) — Adequate but not refined; built for function, not precision

Agility
: 11-16 (1d6+10) — Sure-footed across tundra, snowfield, and river crossing

Perception
: 11-16 (1d6+10) — Keen senses, particularly smell; can detect lichen under deep snow

Aura
: 6-9 (1d4+5) — Respected as the lifeblood of the north, but not spiritually charged

Will
: 10-15 (1d6+9) — Migratory determination; domesticated animals are relatively docile

Reasoning
: 5-8 (1d4+4) — Standard cervid intelligence

Creativity
: 4-7 (1d4+3) — Limited
