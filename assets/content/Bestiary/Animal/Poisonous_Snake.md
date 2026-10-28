---
shortcode: psnssnk
name: {full: Poisonous Snake}
type: being
subType: creature
description: "An efficient ambush predator armed with a specialized venom delivery system, striking swiftly from forests, badlands, and diverse patient-hunting niches."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-snake, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+2
    end: 1d6+7
    agl: 1d6+11
    per: 1d6+7
    snt: 1d4+2
    aur: 1d4
    wil: 1d4+6
    rea: 1d4
    cre: 1d4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 2}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 2}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 2}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 28}}
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
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -2, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Forebody, shortcode: torsozone, probWeight: 3}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 6
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindbodyzone
            roles: [locomotor]
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
            probWeight: 4
            protectionBase: {blunt: -2, edged: 0, piercing: -1, fire: -2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: -2, edged: 0, piercing: -1, fire: -2}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: -2, edged: 0, piercing: -1, fire: -2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            isStumble: true
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: -2, edged: 0, piercing: -1, fire: -2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -2, edged: 0, piercing: -1, fire: -2}
      weight: {base: 10, calc: "10"}
      reachBase: 0
      bodyScaleBase: 0.52
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[psnssnk|Poisonous Snake]]{float=top-left}

The flat stone in the sun has a faint pattern on it that was not there a moment ago. It moves: a loop of body no thicker than your wrist lifts from the rock, brown and gray with darker banding, and a flat, triangular head slides out of it. A forked tongue flicks twice, testing. There is a dry, rasping hiss, and the head draws back into an S, level with your boot.

# Dossier {#dossier}

The Poisonous Snake is a venomous ambush hunter of the warm country, three to six feet long, lying coiled in the rocky gorges and thorn scrub of the Bizarian [[place-southrnmrch|Southern March]], the dry chaparral of the [[place-sthmrchsrgn|South Marches]], the rock country of the [[place-dunhardsrtrgn|Dunhara Desert]] and the forest floor of wetter lands. The coloring depends on kind and country. A snake waits motionless for hours beside a game-trail for something to come within reach, and a bite from one can kill.

## Presentation

A snake's look follows its kind and country: some wear bold red, yellow and black bands as a warning, others the earth tones, stripes or mottling that make them hard to see against stone or dry plants. The head is triangular or spade-shaped, with eyes set for a flat, predatory stare. The scales are smooth and shining or keeled and dull. The body tapers to the tail, which in some kinds ends in a rattle or shakes when the snake is threatened. The venom is delivered through grooved or hollow fangs.

## In the Land

Venomous snakes lie in the rocky gorges and thorn scrub of the Bizarian Southern March, the dry chaparral of the South Marches, the rock country of the Dunhara Desert and the forest floor of the wetter countries. A snake lies in one spot for hours or days beside a game-trail, under a rock or a fallen log, and moves little in the cold. It hunts at dusk and in the first hours of dark.

## Key Behaviors

Venomous snakes lie in wait for hours or days in one spot. They are active in warm daylight and early evening and slow in the cold. They live alone and hold ground, tolerating each other only in the mating season. They hunt by vibration and scent, tasting the air and ground with the tongue. They can fast for weeks between meals and spend the time almost motionless.

## What the Herders Do

Herders and field-workers wear high boots and watch where their hands and feet go. A bitten limb is bound above the wound, washed and kept still, and the victim is taken to a healer; the herb-wives of the hill villages keep remedies in their stores. Children are told to turn a stone over with a stick. A house with a bad name for snakes is kept clear of woodpiles and old thatch. A snake killed in the yard is burnt, and the head buried.

## Signs

- A slender S-shaped track across a dusty patch, with a smooth edge.
- A dry, rasping hiss from the rock beside a path.
- A shed skin, whole and thin as paper, caught in a bush.
- A dead mouse or lizard by a log, stiff and swollen.
- A coiled shape in the sun on a stone wall that is gone when looked at again.

## Combat Strategy

The snake's strategy is simplicity itself: strike with deadly precision and retreat to a defensible location while venom does its work. It will rattle or hiss loudly if given warning space, communicating danger through sound and display to avoid wasting venom on creatures that will leave it alone. If cornered or defending eggs, it becomes aggressive, striking repeatedly and relentlessly. Antivenin or magical healing renders the snake's primary advantage irrelevant, after which it will attempt to flee by moving through vegetation, into crevices, or under cover. The snake cannot engage in prolonged physical combat and will not pursue once prey escapes to open ground where the creature cannot move quickly.

## Attack Methods

### Venomous Bite

The snake strikes with explosive speed, unhinges its jaw, and drives hollow or grooved fangs into target flesh, injecting a specialized venom that may cause paralysis, necrosis, or hemorrhage depending on species. The venom takes seconds to minutes to affect the victim, during which the snake has already withdrawn to a safe distance to wait for the prey to succumb.

### Constriction Attempt

If the snake is large enough or the target small enough, it coils around the victim in an attempt to immobilize and suffocate, though this is a secondary strategy used only if a bite proves ineffective or if prey is very small.

### Tail Lash

Smaller poisonous snakes without potent venom may use their tails to strike faces or eyes, creating distraction and disorientation while the snake positions for a bite.

## Special Abilities

### Venom Delivery

The snake's venom is produced in specialized glands and delivered through precisely evolved fang structures, allowing accurate injection of a potent neurotoxin or hemotoxin that incapacitates or kills prey far larger than the snake itself. The venom's effectiveness varies with species and the individual creature's age and health.

### Thermal Sensing

Some poisonous snakes (particularly pit vipers) possess specialized heat-sensing pits along their jaws that allow them to detect warm-blooded creatures in complete darkness, which helps them hunt in caves, thick vegetation, or at night.

### Rapid Strike Reflexes

The snake's entire body is built for explosive acceleration. It can strike from coil to full extension in a fraction of a second, making it very difficult to dodge or prevent the bite once the creature has positioned itself for attack.

### Camouflage

Many poisonous snakes possess coloration and patterning that blends seamlessly with their chosen environment — rocks, leaf litter, sandy ground, or vegetation. A motionless snake may be nearly impossible to detect until it moves or strikes.

### Additional Information

Most poisonous snakes will not attack unless threatened or defending eggs or a recent kill. Adventurers who move carefully and pay attention to their surroundings can often avoid encounters entirely. Antivenin made from the snake's own venom or from magical sources can neutralize the effects of a bite, making knowledge of local snake species valuable. Snakes are ectothermic and move slowly in cold weather, making them predictable and easy to avoid during winter months or high mountain travel.

## Attributes

Strength
: 3-6 (1d4+2)

Endurance
: 8-13 (1d6+7)

Agility
: 12-17 (1d6+11)

Perception
: 8-13 (1d6+7)

Scent
: 3-6 (1d4+2)

Aura
: 1-4 (1d4)

Will
: 7-10 (1d4+6)

Reasoning
: 1-4 (1d4)

Creativity
: 1-4 (1d4)
