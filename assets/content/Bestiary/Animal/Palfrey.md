---
shortcode: palfrey
name: {full: Palfrey, aliases: []}
type: being
subType: creature
description: "A refined, smooth-gaited riding horse bred by nobility for comfort over long distances, favored by ladies, couriers, and wealthy merchants."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-horsehead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+23
    end: 1d6+7
    agl: 1d6+8
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
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 36}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 55
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
        masteryLevelBase: 44
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 4, aspect: piercing}
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
      weight: {base: 1000, calc: "1000"}
      reachBase: 0
      bodyScaleBase: 1.75
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 130
        leaguesPerWatch: 10
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[palfrey|Palfrey]]{float=top-left}

The lady's horse waits at the inn door, a gray palfrey with a long neck and a fine head, standing quietly in a saddle with a quilted pad and a bridle bright with small brass bosses. It lifts its ears as she comes out and puts its nose into her hand. When she mounts, it sets off at once on a long, even walk that carries the whole string of riders out of the yard without a hurried step.

# Dossier {#dossier}

The Palfrey is the riding horse of comfort and distance, fourteen to fifteen hands high and eight hundred to a thousand pounds, bred by the nobility for a smooth, steady gait. Ladies, couriers and wealthy merchants ride it for steady progress and not for speed or war. It is kept in the stables of the noble houses of [[place-aureldirgn|Aureldia]], on the post-roads of the Bizarian League and at the inns along the trade routes, where one can be hired by the stage.

## Presentation

A horse of refined proportions with a long, graceful neck, sloping shoulders and legs built for stamina. The coat is a clear solid color, chestnut, gray, bay or black, well kept and often marked by fine trappings, decorated saddles and tack. The face is alert and kindly, with large, intelligent eyes and ears that answer a light touch. It looks lighter and more elegant than a warhorse and lacks its mass and presence.

## In the Land

Palfreys are kept in the stables of the noble houses of [[place-aureldirgn|Aureldia]], on the post-roads of the Bizarian League and at the inns and posting-houses along the long trade routes. A palfrey is stabled in a town or at a manor and sent out on a road by the day. Merchants hire one by the stage, and the best are bred for their gait on the studs of the river valleys.

## Key Behaviors

Palfreys are calm and answer their riders, selected over generations for obedience and steady nerves. They give their whole mind to the road and keep a distance-eating gait across rough ground. They travel well in company and bond with the people who ride them. They work by day and settle at dusk. They eat grass, grain and hay and need regular water and rest. Without an experienced handler they become anxious and may refuse to go on.

## What the Road Does

Ladies, couriers, factors and merchants ride a palfrey, because the animal's steady walk will cover thirty miles a day for a week without tiring a rider. A noble house gives one to a daughter at her marriage. The inns on the trade roads keep horses for hire and ask a deposit. A good palfrey costs more than a plough team, and a thief who takes one is hanged. The animal is neither fast nor strong, and it is not a war-horse; it is walked cool and watered at every ford.

## Signs

- A neat bay or dun horse at a hitching-rail, saddled with a side-saddle or a padded pack.
- Even hoof-prints in the dust of a road, long-striding, at a walk.
- A string of riders on the road with a lady in the middle on a gray palfrey.
- A stable with a row of horses of one size and color, tied and rugged against the cold.
- A horse that stands calm in the middle of a busy yard.

## Combat Strategy

A palfrey has no combat training and will attempt to flee from violence whenever possible. If startled or cornered, it becomes unpredictable, rearing and bucking in panic rather than engaging with calculated strategy. Without a skilled rider providing direction and confidence, the palfrey's instinct is to run. If trapped or blocked from escape and directly attacked, it will use its hooves defensively, striking at immediate threats, but combat is antithetical to its nature. Wise riders recognizing danger will dismount and lead the palfrey away rather than attempting to fight mounted.

## Attack Methods

### Hoof Strike

Cornered or panicked, the palfrey rears slightly and lashes out with a foreleg strike, using its weight and muscle to injure something nearby. These strikes are desperate defensive reactions rather than tactical combat moves.

### Rear and Buck

A palfrey surprised by violence often rears up on hind legs and then kicks backward with both hind legs in a panic response. This can unseat an unprepared rider and cause injury to threats approaching from behind, though the horse is purely reacting to fear rather than fighting with intent.

## Special Abilities

### Endurance Gait

The palfrey moves with a distinctive, smooth four-beat gait that minimizes rider fatigue and allows steady progress across long distances. It can maintain a controlled pace for hours without tiring, making it the mount of choice for journeys spanning days or weeks. The horse's natural rhythm and comfortable motion make travel less exhausting for the rider.

### Steady Temperament

Palfreys are bred for emotional stability and will not spook at common sights, sounds, or situations. They remain calm in crowded markets, on uncertain footing, and during weather changes. This reliability makes them trustworthy on difficult terrain where panic would be dangerous.

### Additional Information

Palfreys have little resale value after injury or significant training loss — nobles will abandon an injured palfrey rather than attempt recovery. Their calm nature makes them unsuitable for theft; they will not move willingly with an unfamiliar handler. A palfrey's shoes must be regularly reset and its hooves maintained, making them expensive to own and care for. In wilderness areas without established stables or farrier services, palfrey owners face serious logistical challenges.

## Attributes

- **Strength:** 24-29 (1d6+23)

- **Endurance:** 8-13 (1d6+7)

- **Agility:** 9-14 (1d6+8)

- **Perception:** 15-20 (1d6+14)

- **Scent:** 3-6 (1d4+2)

- **Aura:** 3-6 (1d4+2)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 3-6 (1d4+2)

- **Creativity:** 3-6 (1d4+2)
