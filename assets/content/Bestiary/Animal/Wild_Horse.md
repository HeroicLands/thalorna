---
shortcode: wldhrs
name: {full: Wild Horse, aliases: []}
type: being
subType: creature
description: "A stocky, powerful equine ancestor of domestic breeds, roaming the open steppe in bands with heavy bone and tireless endurance."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-horsehead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+23
    end: 1d6+7
    agl: 1d4+9
    per: 1d6+14
    snt: 1d4+2
    aur: 1d4+2
    wil: 1d6+7
    rea: 1d4+2
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 26}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 8, aspect: piercing}
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
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
      weight: {base: 700, calc: "700"}
      reachBase: 0
      bodyScaleBase: 1.75
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 140
        leaguesPerWatch: 10
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[wldhrs|Wild Horse]]{float=top-left}

The steppe ahead is empty until a ripple in the grass resolves into a band of small, heavy-boned horses, dun and sand-colored, with dark stripes down their backs and short, upright manes. The stallion stands at the front with his head high. Their eyes are dark and watchful. Then a mare whinnies, and the band wheels as one animal and thunders away along the skyline.

# Dossier {#dossier}

The Wild Horse is the untamed ancestor of the steppe breeds, thirteen to fifteen hands high and six to eight hundred pounds, living in bands of five to twenty on the steppe, gravel plains and dry grassland of the [[place-khzryndsrtrgn|Khazryn]] and the southern steppe margin of [[place-velanthrgn|Velanthia]]. It is smaller and heavier-boned than most tame breeds, with a toughness no stable-raised animal has. The steppe nomads hold it sacred as the spirit of the steppe and the source of their own mounts' bloodlines. Taking and breaking one is a test of manhood among some tribes.

## Presentation

A compact, heavily built horse, rougher and wilder than any tame breed. The body is barrel-shaped with a deep chest and short, strong back. The legs are shorter and thicker than a tame horse's, heavy in bone, built for endurance over rough ground. The head is large and rather coarse, with small ears and wary dark eyes. The mane is short, stiff and upright. The coat is dun, from sandy yellow to dark brown, with a dark stripe from poll to tail, dark lower legs and sometimes faint stripes on the legs. The tail is short and coarse. Stallions have heavier necks and jaws.

## In the Land

Wild horses graze the steppe, gravel plains and dry grassland of the Khazryn and the southern steppe margin of Velanthia. A band of a stallion, a lead mare and her kin keeps to a range of many miles between water and grazing. The old mare chooses where the band feeds and drinks, and the stallion guards the rear. In winter the bands paw through the snow to the grass.

## Key Behaviors

Wild horses live in bands led by a dominant stallion and a lead mare. The stallion defends the band against rivals and predators, and the mare, the oldest and most experienced, decides where it grazes, drinks and rests. A band ranges over fifty to a hundred square miles, following grass and water, and seldom stays in one place more than a day or two. They graze the tough steppe grass and scrub that sustains little else, and drink once a day when they can. Stallions fight savagely for bands, rearing and biting.

## What the Tribes Do

The steppe tribes catch wild horses to improve their herds, and a Khazryn stud is built on a few such animals. Foals are taken by riders who run a band down and rope the youngsters, and mares are broken to the saddle by hunger and patience. A wild stallion is killed when it threatens a tribal herd. The tribes know the wild bands by their colors and keep count of them. The hide and meat are used in hard winters. A tribe that holds a water-hole keeps wild bands off it.

## Signs

- A band of horses on the horizon, motionless, heads high, facing the same way.
- A stamped circle of earth where a stallion has fought.
- Dung in a heap at a regular dropping-ground beside a track.
- A pattern of hoof-prints pawed into snow and the grass beneath eaten.
- A mare whinnying from a ridge and an answer from the plain.

## Combat Strategy

A wild horse's primary defense is flight — bands will run from threats across open ground where their endurance and speed give them a decisive advantage. The lead mare initiates flight while the stallion positions himself between the band and the threat, screening the retreat with aggressive displays. If forced into direct confrontation, a wild horse is a formidable opponent. The stallion fights with a combination of rearing strikes, biting, and powerful kicks that can break bones and crush skulls. Against predators, the band may form a defensive circle with foals in the center, adults facing outward with hindquarters positioned to deliver kicks. Against a lone predator, a stallion will charge directly, attempting to trample and bite the threat. Wild horses that have been cornered or separated from their band fight with a desperate ferocity amplified by panic — a trapped wild horse is one of the most dangerous animals on the steppe, lashing out in all directions with hooves and teeth.

## Attack Methods

### Rearing Strike

The horse rears onto its hind legs and brings the forelegs crashing down on the target. The hard hooves carry the weight of the animal's shoulders and forequarters behind them, and a strike to the head, shoulders, or spine of a human-sized target can be immediately fatal. Stallions use this attack against rival males and against predators, often rearing repeatedly to drive the threat back.

### Kick

The classic equine defense. The horse turns its hindquarters toward the threat and lashes out with one or both hind legs. The kick delivers enormous force — enough to shatter ribs, break arms, and knock a human-sized target several feet through the air. Wild horses are more willing to kick than domestic animals, having relied on this defense against predators throughout their lives.

### Bite

Wild horses bite with far more aggression than domestic animals. The jaws are powerful, the incisors are heavy, and a stallion will seize a predator's neck, shoulder, or leg and shake violently, tearing flesh and crushing tissue. Stallion-on-stallion fights feature sustained biting at the neck and legs, and a wild stallion will readily bite a human who approaches too closely.

## Special Abilities

### Steppe Endurance

Wild horses possess an endurance that exceeds any domestic breed. Generations of survival on the open steppe — where the only response to predators, drought, and seasonal hardship is to keep moving — have bred an animal capable of sustained travel over distances and through conditions that would break domestic horses. A wild horse band can cover thirty to forty miles in a day at a steady pace, day after day, without supplemental feed or rest. Pursuing a wild horse band on domestic mounts is an exercise in futility unless the pursuers can cut off the band's route.

### Unbreakable Will

The wild horse's defining characteristic. These animals have never been selected for docility, and their instinct for independence is so deep that captured wild horses resist breaking with a tenacity that borders on suicidal. A wild stallion will fight a rope until it collapses from exhaustion, and even horses that are nominally broken retain a willfulness and unpredictability that makes them unsuitable for inexperienced riders. Among the steppe tribes, the rare warrior who successfully bonds with a wild-caught horse gains a mount of extraordinary toughness and loyalty — but also one that will never fully submit.

### Herd Cohesion

A wild horse band responds to threats as a coordinated unit. The lead mare directs movement while the stallion provides rear-guard defense, and the band executes complex maneuvers — splitting around obstacles, reforming on the far side, changing direction in response to the mare's lead — with practiced efficiency. This coordination makes wild horse bands extremely difficult to corner or separate, and attempts to cut individual animals from the herd are consistently frustrated by the band's collective response.

### Primitive Hardiness

Wild horses thrive in conditions that debilitate domestic breeds. They tolerate extreme heat and cold, subsist on forage that domestic horses cannot digest, and maintain condition through seasonal scarcity that would leave a stable-raised animal starving. Their hooves are naturally harder and more resistant to wear than domestic horses', requiring no shoeing even on rocky ground. Their immune systems are robust, resistant to many of the parasites and diseases that plague domestic herds. This hardiness is the product of millennia of natural selection in one of the harshest environments in the world.

## Attributes

Strength
: 10-15 (1d6+9)

Endurance
: 12-17 (1d6+11)

Dexterity
: 10-15 (1d6+9)

Agility
: 11-16 (1d6+10)

Perception
: 11-16 (1d6+10)

Aura
: 8-13 (1d6+7)

Will
: 12-17 (1d6+11)

Reasoning
: 6-9 (1d4+5)

Creativity
: 5-8 (1d4+4)
