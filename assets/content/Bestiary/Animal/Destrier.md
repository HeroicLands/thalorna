---
shortcode: destrier
name: {full: Destrier, aliases: []}
type: being
subType: creature
description: "A colossal armored warhorse bred as a living fortress, carrying rider and full plate into the most violent battles without faltering."
tags: [animal, creature]
data: {packFolder: animals, icon: horsehead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+27
    end: 1d6+9
    agl: 1d6+7
    per: 1d6+14
    snt: 1d4+2
    aur: 1d4+2
    wil: 1d6+9
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 30}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 53}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 59}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 75}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 68
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 7, aspect: blunt}
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
          impactBase: {numDice: 1, die: 4, modifier: 5, aspect: piercing}
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
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
      weight: {base: 2100, calc: "2100"}
      reachBase: 0
      bodyScaleBase: 1.92
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 120
        leaguesPerWatch: 8
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[destrier|Destrier]]{float=top-left}

The horse standing in the castle yard is bigger than the cart beside it. It is black, with a thick neck, a wide chest and haunches like a bull's, and its ears have been cropped short and square. A groom stands at its head with a hand on the bridle, holding a basket of oats, and the whole bulk shifts its weight from one forefoot to the other without a sound. The hoof comes down as wide as a dinner-plate.

# Dossier {#dossier}

The Destrier is the heaviest warhorse, seventeen to eighteen hands high and eighteen to twenty-four hundred pounds, carrying a rider in full plate as if he weighed nothing. It is slower than a courser and slower off the mark than a charger, but nothing stops its advance. It is kept in the stables of the great houses and royal castles of [[place-aureldirgn|Aurèldía]] and [[place-aelwyth|Aelwyth]], where the knights who can afford both horse and training ride it. A single destrier can break a cavalry charge, and a line of them can shatter infantry.

## Presentation

An enormous horse built for weight and strength, stockier and broader than any other breed, with heavy development in the chest, shoulders and haunches. The legs have denser bone and stronger joints. The head is large and blocky, the neck thick with muscle from jaw to shoulder, and the back compact and strong. The hooves are large and hard. The coat is black, bay, gray or chestnut, and old horses carry battle scars at the face and shoulders. Many have the ears cropped short and square.

## In the Land

Destriers are kept in the stables of the great houses and royal castles of [[place-aureldirgn|Aurèldía]] and [[place-aelwyth|Aelwyth]], where the landed knights who ride them hold their fiefs. A destrier lives in the best stall, is fed on oats, and is groomed, shod and walked every day. It is a mount for war and the tourney and is not used on the road or in the field. The breeding stud of a house is managed by its master of horse, and a house with a famous line guards it.

## Key Behaviors

Destriers bond with their riders, often for life, and answer the slightest shift of weight or rein. They are trained for years to advance into chaos and stand when terrified, and only horses with the right temper pass the selection. They are more aggressive than farm horses, and stallions challenge other horses and hold ground they have claimed. A destrier eats more than twice the feed of a lighter horse. They live thirty years and grow strong personalities with age. An experienced destrier anticipates its rider's intention.

## What the Great Houses Do

A knight rides a destrier into battle and a palfrey on the road, and leads his destrier behind him until the fight. A destrier costs more than a village. The great houses breed them for generations, and a stallion's line is kept in the house's records. A knight's squire is judged by how he handles his master's destrier. A destrier is lamed or killed more often than its rider, and a house that loses its line loses standing.

## Signs

- A very large horse led by a groom in a covered yard, its coat shining.
- A hoof-print as wide as a dinner-plate, sunk deep in the mud of a castle yard.
- A stable-door with iron bands and a bar, and a stallion's scream behind it.
- A heavy saddle, high before and behind, hung on a peg above a stall.
- A line of armoured horses in the field at dawn, steaming in the cold.

## Combat Strategy

A Destrier's primary strategy is to advance—the horse charges, collides, and breaks through obstacles or enemies using pure mass and strength. At impact, the collision force is extraordinary, sufficient to knock mounted knights from lighter horses, to break through fortifications, to trample enemies under hoof. In sustained combat, a Destrier uses its strength to maintain position, its hooves to trample, and its sheer presence to dominate. Multiple Destriers in formation can become an unstoppable force, breaking through defenses and scattering enemies. A wounded Destrier becomes more aggressive, not less. The horse has been trained to ignore pain signals and continue advancing. A Destrier with a dying rider will sometimes continue executing its last commands, oblivious to the loss of the rider.

## Attack Methods

### Charging Impact

The Destrier accelerates and collides with full force, using the combined mass of horse, rider, armor, and momentum as a weapon. The force is extraordinary—sufficient to break bones, crush ribs, and knock even armored opponents from their feet or from other horses. The collision impact is often fatal to smaller or less armored opponents.

### Hoof Strikes and Stomping

Once engaged, the Destrier delivers powerful strikes with its hooves, focusing on downed opponents or opponents pinned against obstacles. Each hoof strike carries the full weight of the animal concentrated into a small area, capable of crushing armor and bone.

### Biting and Rearing

When fighting on foot or when forced into hand-to-hand with unmounted opponents, the Destrier will bite with power greater than lighter horses. When reared, the Destrier becomes a towering weapon, front hooves capable of striking from above with force that crushes whatever they contact.

### Charging Through Obstacles

A Destrier will accelerate directly through obstacles that would stop lighter horses: wooden fortifications, hastily-erected barricades, even structures built to stop cavalry. The sheer mass and momentum overwhelm most obstacles, allowing the Destrier and its rider to break through.

## Special Abilities

### Overwhelming Strength and Collision Force

A Destrier's physical power is famed. It can carry weight that would cripple lighter horses, accelerate to devastating speed despite its mass, and deliver impacts with the force of siege weapons. In direct collision, a Destrier is virtually unstoppable—few things in nature can withstand the impact of a Destrier-mounted knight charging at full gallop.

### Discipline and Battle-Hardness

A Destrier has been trained from youth to advance into chaos, to ignore pain and fear, to execute commands even in the face of death. This discipline is absolute—a properly trained Destrier will charge into fire, over obstacles, through storms of arrows, and into melee combat without hesitation. This unwavering commitment makes the Destrier exponentially more valuable than an untrained horse of similar size.

### Resilience and Endurance

Despite their size, Destriers have great endurance for their weight. They can march for days, sustain combat for hours, and recover from injuries that would disable lighter horses. The dense bone and muscle structure provides natural armor, making them more resistant to injury than their weight alone would suggest.

### Battlefield Presence and Psychological Impact

The presence of a Destrier on a battlefield carries psychological weight far exceeding its physical threat. Lesser cavalry will often break and flee rather than engage a Destrier directly. Infantry facing Destrier charges often panic and disorder before the impact occurs. This psychological dominance has decided many battles independently of the physical destruction the horse causes.

## Attributes

- **Strength:** 28-33 (1d6+27)

- **Endurance:** 10-15 (1d6+9)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 15-20 (1d6+14)

- **Scent:** 3-6 (1d4+2)

- **Aura:** 3-6 (1d4+2)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 4-7 (1d4+3)
