---
shortcode: ratter
name: {full: Ratter}
type: being
subType: creature
description: "A small, wiry hunting dog bred for relentless efficiency against rodents, guarding farms, mills, and grain stores throughout settled lands."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-hound, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+2
    end: 1d4+5
    agl: 1d6+10
    per: 1d6+15
    snt: 1d4+3
    aur: 1d4+2
    wil: 1d6+10
    rea: 1d4+4
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 25}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -4, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, clench: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
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
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
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
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
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
      weight: {base: 20, calc: "20"}
      reachBase: 0
      bodyScaleBase: 0.52
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 90
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[ratter|Ratter]]{float=top-left}

In the corner of the grain-store a small, wiry dog stands rigid, nose to a crack in the boards and one forefoot lifted. Its short tail is stuck straight up, quivering. It has not moved for several minutes, and does not turn when you come in. Then it whines, once, very softly, and explodes into a frenzy of digging, scattering dust and meal.

# Dossier {#dossier}

The Ratter is the small hunting dog of the farms, mills and grain stores, twelve to eighteen inches tall and ten to twenty pounds, bred to go after rats and small game. It lives in the settled lands of [[place-velanthrgn|Velanthia]], the grain ports of [[place-heladrgn|the Hellad]] and the river towns of [[place-vedyarargn|Vedyara]], kept by a miller, a baker or a granary-keeper. Its mind is on the quarry, and it is bold to fight a creature larger than itself if its owner or ground is threatened.

## Presentation

A compact, muscular dog with a lean body, powerful hindquarters and a deep chest, small enough to enter the tight places where vermin hide. The coat is short and hard, brown, tan, white or mixed. The head looks intelligent, with alert eyes, pointed ears and a long muzzle for probing holes and crevices. The tail is short and carried high. The paws are large for its size, with strong claws for digging and climbing.

## In the Land

Ratters live in the mills, granaries, barns and warehouses of the settled lands, from the farms of Velanthia to the grain-ports of the Hellad and the river towns of Vedyara. A ratter belongs to a household or a mill and sleeps by the grain bins. It works the buildings at dusk, in the yards and in the drains, and a well-kept pair clears a granary in a few weeks.

## Key Behaviors

Ratters are obsessive about small prey. A ratter that has caught the scent of a rodent can hardly be distracted, and will follow it through any burrow or building. They are devoted to their handlers and distressed by separation. Several dogs work together, driving and ambushing in coordination. They learn the layout of the ground they work and remember where the rats are.

## What the Millers Do

A miller, a baker or a granary-keeper keeps a ratter or two and pays no more than their keep. A good ratter is valued by the number of rats it kills in a night, and the best are taken on the road as companions. A ratter is loyal to one person and distressed by separation, and it will wait at a door all day. The animal's hunting instinct overrides everything, and it is not walked near a rabbit-warren or a hen-run. A sack of grain that has been kept by a ratter is sold for more.

## Signs

- A small, wiry dog standing rigid in a corner of a barn with its nose pressed to a crack.
- A row of dead rats laid out on a granary floor in the morning.
- A dog digging furiously at the base of a wall, throwing earth between its hind legs.
- A barn quiet at night, with no scratching in the beams.
- A scatter of small, neat paw-prints in meal-dust on the floor.

## Combat Strategy

The ratter's strategy against creatures of similar or smaller size is ferocious intensity: dash in with maximum speed, bite and shake, and disengage before the opponent can retaliate. Against larger opponents, the ratter uses speed and agility to dart in for quick bites at vulnerable areas — the heels, the back of the legs, the hands — while maintaining mobility to avoid being caught. If cornered or protecting young or owner, the ratter becomes suicidally brave, attacking much larger opponents with bites and shaking, trying to inflict as much damage as possible despite the massive size disadvantage.

## Attack Methods

### Swift Bite

The ratter darts forward at high speed and delivers a quick, powerful bite directed at exposed flesh, joints, or the back legs of larger opponents. The bite is precise and effective, and the ratter immediately withdraws to attack distance rather than engaging in prolonged melee.

### Shake and Tear

Once the ratter has secured a bite on small prey, it shakes violently, using its strength and the small creature's size to inflict terrible damage. This technique is used primarily on creatures small enough to be shaken — mice, rats, small birds, or very small humanoids.

### Pack Coordination

When multiple ratters hunt together, they execute coordinated attacks, with one dog driving prey toward another's position or multiple dogs attacking from different directions simultaneously. This coordination makes packs surprisingly effective against creatures larger than individuals.

## Special Abilities

### Rodent Hunter Specialization

The ratter is superlatively effective against small creatures — rats, mice, rabbits, and similar prey are dispatched with frightening efficiency. Against small targets the ratter is quicker and surer still.

### Keen Olfaction

The ratter's sense of smell is extraordinarily acute, allowing it to track small creatures through undergrowth, detect them in burrows or enclosed spaces, and follow scent trails that are days old. The ratter can locate food, people, and other animals through scent alone.

### Tireless Energy

The ratter can maintain high-intensity activity for extended periods without significant fatigue. It can chase prey for hours, dig through soil for much of a day, and remain alert and focused throughout the process.

### Small Size Advantage

The ratter's diminutive size allows it to access spaces larger creatures cannot reach — burrows, crawlways, gaps in construction — making it impossible to trap or prevent from reaching prey in such spaces.

### Courageous Loyalty

Despite its small size, the ratter will fiercely defend its handler or territory against much larger threats. This loyalty is absolute and not diminished by rational assessment of the danger involved.

### Additional Information

A ratter can be trained to hunt specific quarry types — some specialize in rats, others in mice, still others in rabbits. Ratters lose drive and become depressed if separated from their handlers for extended periods. A ratter trained to one type of game will hunt other small creatures with less efficiency and reliability. In a settlement with severe vermin problems, ratters become local heroes, treated well by residents who depend on their pest control services.

## Attributes

Strength
: 3-6 (1d4+2)

Endurance
: 6-9 (1d4+5)

Agility
: 11-16 (1d6+10)

Perception
: 16-21 (1d6+15)

Scent
: 4-7 (1d4+3)

Aura
: 3-6 (1d4+2)

Will
: 11-16 (1d6+10)

Reasoning
: 5-8 (1d4+4)

Creativity
: 6-9 (1d4+5)
