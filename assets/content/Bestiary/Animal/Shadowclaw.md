---
shortcode: shdwclw
name: {full: Shadowclaw, aliases: []}
type: being
subType: creature
description: "A highly intelligent pack-hunting reptile up to twelve feet long, coordinating sophisticated ambushes across jungles and rocky valleys as an apex predator."
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
    str: 1d6+12
    end: 1d6+10
    dex: 1d6+13
    agl: 1d6+14
    per: 1d6+14
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d6+8
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Slashing Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 76
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Slashing Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Hooked Talon Kick
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 76
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Hooked Talon Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 76
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
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Body, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreclaw
            shortcode: lforelegpart
            bodyZoneCode: torsozone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 2
          - name: Right Foreclaw
            shortcode: rforelegpart
            bodyZoneCode: torsozone
            roles: *a1
            canHoldItem: false
            probWeight: 2
          - name: Left Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Right Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [manipulator]
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
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
          - name: Left Foreclaw
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreclaw
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 250, calc: "250"}
      reachBase: 0
      bodyScaleBase: 1.28
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: mixed_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: needleleaf_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: woodland, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[shdwclw|Shadowclaw]]{float=top-left}

The cedars here are so tall and so close that the light at midday is green and dim, and the ground is soft with a hundred years of fallen needles. Nothing moves. Then a fern beside the trail moves the wrong way, against the drip from the branches, and you see the eye: emerald green, at the height of your own, looking at you from a head that the forest light has painted the same green-brown as the ferns. It stands on two legs, as tall as a man, with a long feathered tail held out straight behind it, and on each hind foot one claw is lifted clear of the ground, hooked like a pruning knife. It whistles once, softly. Something on the other side of the trail whistles back.

# Dossier {#dossier}

The Shadowclaw is a large, two-legged, pack-hunting reptile, ten to twelve feet from snout to tail-tip, five to six feet tall, and about two hundred and fifty pounds, with scales that take on the colors of whatever it stands in and a hooked killing claw on each hind foot. It lives in the cedar rainforest and the rocky valleys of [[place-ixbalkiahkrgn|Ix'bal Ki'ahk]], on the western coast of Northern K'ich'chik, and hunts in family packs of three to eight. It is clever, patient and coordinated, it plans its ambushes, and it learns. It takes elk, mountain goats and anything else it can isolate and run down, men included. Nearly everything the K'ich'chik know of it comes from traders who have been allowed to the border sites, from captives, and from the few who went into the forest uninvited and came back.

## Presentation

A shadowclaw stands on long, powerful hind legs with its body held level and its tail out behind it for balance. Its scales are small and iridescent, and they shift slowly to the greens, browns and grays round it, so that a still shadowclaw in forest light is very hard to see. Along the tail and the back of the neck the scales give way to short, stiff, dark feathers, and a row of bony ridges along the spine lifts when it is angry or displaying. The forelimbs are shorter, each with three curved talons for gripping and slashing. The hind feet carry the weapon it is known for: on each, the second toe holds a great hooked claw, kept lifted off the ground as it walks, long as a dagger. The head is long, the jaws lined with serrated teeth, the eyes large, forward-facing and bright green. It moves in quick, birdlike bursts with stillness in between, and a pack talks constantly in clicks, whistles and low growls.

## In the Land

Shadowclaws hold the coastal rainforest and the mountain spine of Ix'bal Ki'ahk, from the dim cedar and redwood stands that run down to the fjords up into the boulder-strewn valleys and high meadows below the volcanic peaks. They want cover to hunt from and prey to hunt: the elk and deer of the forest, the mountain goats of the valleys, and in the autumn the bears and eagles that gather at the salmon rivers. Each pack holds a territory of many miles, marked with scent and with deep claw-scores on the trees, and it moves round it with the seasons. They do not go out onto open ground for long, and they are not met east of the spine where the cedar gives way to spruce and the plateau begins.

## Key Behaviors

A pack is a family led by a mated pair. It hunts by ambush: the pack spreads out silently through the trees round its prey, using its camouflage to get close, and on a signal from the leaders it attacks from several sides at once. It isolates one animal from a herd or one man from a party and pulls it down with the hind-claw kicks. Pack members feed each other, protect the young together, and fight to the death for each other. Packs learn and remember: they learn a trail's habits, its traffic, and the faces of men who have killed one of them, and they change their hunting accordingly. A shadowclaw sees nearly as well in darkness as by day and hunts at any hour. Sudden bright light dazzles it, and alone it is far more cautious.

## What the Xak'nal Do

The **Xak'nal** of [[affiliation-ixbalkiahk|Ix'bal Ki'ahk]] do not let outsiders far into their forest, and the K'ich'chik traders who meet them at the border sites have to take their word for most of what lies inside it. What they report is that Xak'nal parties travel the forest in numbers, never alone, and carry fire; that shadowclaw hind-claws are worn on cords by Xak'nal hunters as proof of a kill; and that a shadowclaw carved into a pole marks ground the traders are not to enter. Captives who have come out of the forest say the Xak'nal treat a pack as they treat any other power of the forest, with ceremony and great care, and kill one only with full preparation. A shadowclaw hide traded south is prized by K'ich'chik nobles for a cloak, and a hind-claw set in a handle makes a knife a war leader carries.

## Signs

- Deep, parallel claw-scores high on cedar trunks at the edge of a territory, in threes, renewed often.
- Three-toed prints in mud, deep and narrow, with no mark of the hooked toe, which is held off the ground.
- Soft whistles and clicks answering each other in the trees, from several directions, and then silence.
- An elk or goat carcass opened along the belly by long, clean cuts.
- Small birds and squirrels falling silent in a wide circle round a trail.

## Combat Strategy

A pack never attacks a party head on. It shadows it, sometimes for hours, learning its order of march and its weak member, and then attacks from several sides at once, usually at a halt, a stream crossing or the end of a day, when the party is tired or spread out. While some of the pack hold the party's attention, others take the chosen victim, kicking with the hooked claws to cut him open or cripple him. They retreat as fast as they come if the fight goes wrong and come again later from a new direction. A shadowclaw separated from its pack is far less dangerous and usually runs. Fire and sudden bright light break up an attack.

## Attack Methods

### Slashing Claw

The shadowclaw slashes with its forelimbs, three talons together, quickly and repeatedly. The cuts are long and deep, tear through light armor, and bleed heavily.

### Hooked Talon Kick

Balancing on one leg or leaping with both, the shadowclaw kicks forward and down with the great hooked claw. The kick opens a man's belly or thigh, cuts tendons, and cripples. It is the attack the pack uses to bring large prey down.

### Bite

The jaws close on a limb or the neck and the serrated teeth tear. A shadowclaw bites a victim the pack has already pinned or brought down.

## Special Abilities

### Chameleon Scales

The scales shift toward the colors round the shadowclaw. Still, it is nearly invisible in forest or broken rock; moving, it is still hard to see and hard to track.

### Enhanced Vision

It sees well in near-total darkness and follows the smallest movement. Sudden bright light dazzles it for a time.

### Pack Coordination

A pack talks in calls and body signs and fights as one: it surrounds, isolates, draws attention and strikes from behind, and members protect each other at the cost of their own lives.

### Acrobatic Mastery

Shadowclaws climb steep rock and leaning trunks, leap long distances, and move through broken ground and dense forest faster than a man can follow.

### Predatory Intelligence

Shadowclaws learn, plan and remember. They remember faces, they learn a party's habits, and a trick that worked against them once does not work twice.

### Light Bones

For all their speed, shadowclaws are lightly built, and a heavy blow from a club, a mace or a falling rock breaks bones that a cut would not reach.

## Attributes

- **Strength:** 13-18 (1d6+12)

- **Endurance:** 11-16 (1d6+10)

- **Dexterity:** 14-19 (1d6+13)

- **Agility:** 15-20 (1d6+14)

- **Perception:** 15-20 (1d6+14)

- **Aura:** 8-11 (1d4+7)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 9-14 (1d6+8)

- **Creativity:** 6-9 (1d4+5)
