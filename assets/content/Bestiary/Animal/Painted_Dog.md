---
shortcode: pntddg
name: {full: Painted Dog, aliases: [Savanna Wild Dog]}
type: being
subType: creature
description: "A lean, endurance-built savannah canid that hunts in coordinated packs of ten to thirty with unmatched efficiency across the open plains."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-hound, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+8
    end: 1d6+10
    dex: 1d6+11
    agl: 1d6+11
    per: 1d6+11
    aur: 1d6+7
    wil: 1d6+9
    rea: 1d4+6
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 33}}
    - name: Pack Tear-Down
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Pack Tear-Down
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
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
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
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
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
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
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 55, calc: "55"}
      reachBase: 0
      bodyScaleBase: 1.06
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[pntddg|Painted Dog]]{float=top-left}

Out on the open grass a loose file of lean, long-legged dogs is trotting steadily through the heat, spread across the plain, huge round ears turning as one. Their coats are patched in black, brown, white and tawny gold, a different pattern on each. A thin, bird-like whistle passes down the line. Ahead of them a herd of antelope lifts its heads, and the file begins, without any signal you could see, to open into a wide arc.

# Dossier {#dossier}

The Painted Dog is the pack hunter of the open savanna, twenty-four to thirty inches at the shoulder and forty to seventy pounds, lean and built for endurance, running in packs of ten to thirty. It ranges the grass, light woodland and scrub of the [[place-sthrnsvnhs|Southern Savannahs]] and the south of [[place-okharisrgn|Okharis Region]], following the migratory herds over hundreds of square miles and sleeping in a different place each night. No single dog is a match for a lion, but a pack kills in about four hunts in five, against one in four for a lion pride.

## Presentation

A lean, long-legged dog with a patchwork coat of black, brown, white and tawny gold, blotched in a pattern unique to each animal, by which the pack knows its members. The coat is short and sparse, with no undercoat. The chest is deep and narrow, the legs long and thin, with four toes on each foot. The head is broad and flat with a short muzzle and heavy jaw muscles, and the teeth are made for shearing flesh and cracking bone. The ears are enormous, rounded and bat-like, and mobile, and carry signals of mood and attention. The eyes are dark brown and set wide.

## In the Land

Painted dogs range the open savanna, light woodland and scrub of the Southern Savannahs and the grass of the south of Okharis wherever the migrating herds pass. A pack of ten to thirty roams over hundreds of square miles, sleeps in a different place each night and dens only to raise pups. The pack arrives in a district without warning and leaves when the game is thin.

## Key Behaviors

Painted dogs are the most social of dogs. A pack shares its kills: the hunters feed first and return to the den to bring up meat for pups, nursing mothers, and sick and old dogs, and no member is left unfed, even an injured one for months. All the pack guards, feeds and teaches the pups. They keep in touch with a high, bird-like whistle and a twittering rally call before a hunt, when the dogs run among each other licking faces, and the number that join in settles whether the hunt goes ahead. A dominant breeding pair leads by influence and not by force, and the pack turns together in a hunt by changes in speed, direction and position with no visible leader.

## What the Hunting Bands Do

The savanna peoples respect the pack's co-operation, and the hunting bands hold it up as an example of how a group overcomes stronger animals. The mottled coat is copied in war-paint and ceremonial decoration. Herders hate the pack as well, since it clears the game from a district and takes calves. A pack near a cattle-fold is met with fire and noise. A hunting band keeps clear of a den with pups. The pack feeds its sick and old, and the hunters tell of a dog that carried its injured mate for days.

## Signs

- Four-toed tracks in a long loose file, with a litter of antelope bones at a dry kill.
- A high, bird-like whistle across the grass, answered from several places.
- Large, rounded ears over the grass, moving together like a flock.
- A pack running down a herd in a long open line without a sound.
- A den-hole in a termite hill, trampled round, with pups' tracks in the mud.

## Combat Strategy

The painted dog pack hunts through cooperative endurance pursuit — a strategy that is unique among the large predators and devastating in its effectiveness. The pack selects a target — typically a wildebeest, gazelle, or other medium-sized herbivore — and begins the chase. Unlike a cheetah, which sprints and must catch its prey in seconds, or a lion, which ambushes from close range, the painted dog pack runs its prey to exhaustion over distances of one to three miles. The pace is not a flat-out sprint but a sustained, relentless run at a speed just above what the prey can comfortably maintain. The prey tires; the pack does not, because individual dogs rotate positions — those at the front of the pursuit drop back to rest while fresh dogs take over the lead, maintaining constant pressure without any single animal bearing the full cost of the chase.

Once the prey begins to slow, the pack closes and the kill begins. This is the aspect of painted dog hunting that disturbs observers most: the pack does not deliver a killing bite. Instead, multiple dogs seize the prey simultaneously — flanks, belly, hindquarters, throat — and begin tearing while the animal is still on its feet. The prey is pulled apart rather than killed and then eaten. This method is brutal but efficient: a painted dog pack can reduce a wildebeest from a living animal to a consumed carcass in under fifteen minutes, a speed that minimizes the risk of losing the kill to lions or hyenas that are attracted by the commotion.

Against threats — lions, hyenas, humans — the pack employs the same coordination but in a defensive register. Individual dogs dart in, snap, and retreat, drawing the threat's attention while other dogs approach from the flanks and rear. The pack does not stand and fight; it harasses, circles, and retreats, maintaining a perimeter of darting, snapping attacks that exhausts and confuses the threat. Against a single lion, a large pack can drive it away through this harassment; against a pride, the pack will retreat but maintain contact, waiting for an opportunity to reclaim its kill.

## Attack Methods

### Coordinated Pursuit

The pack's signature hunting method. Multiple dogs pursue the prey at a sustained pace, rotating lead positions to maintain freshness. The pursuit is relentless — the prey cannot rest, cannot slow, cannot stop — and the pack's endurance exceeds that of any individual prey animal. The pursuit ends when the prey stumbles, slows, or is cut off by flanking dogs that have anticipated its direction of flight.

### Pack Tear-Down

Once the prey is slowed, multiple dogs seize it simultaneously. Two or three dogs grab the hindquarters and flanks, pulling the prey off-balance, while others target the belly and throat. The combined pulling force of multiple dogs prevents the prey from escaping, and the tearing begins immediately. Each dog works independently — ripping, pulling, shaking — but the collective effect is coordinated disassembly. The kill is fast precisely because it is multiple attacks happening at once.

### Harassment Swarm

Against larger threats, the pack uses its numbers and agility to harass from all directions. Individual dogs dash in, deliver a snapping bite, and retreat before the target can retaliate. The attacks come from behind, from the sides, and even from the front in rapid succession, with multiple dogs attacking simultaneously from different angles. The goal is not to kill but to exhaust, confuse, and drive away — and against most single opponents, including lions, this strategy is effective.

## Special Abilities

### Pack Endurance

The painted dog pack's cooperative running strategy allows it to sustain pursuit speeds over distances that exhaust any individual prey animal. By rotating lead runners, the pack effectively has unlimited stamina — fresh dogs replace tired ones at the front of the chase while the tired dogs recover at the back, and the cycle repeats until the prey falters. This rotational endurance means that flight — the primary defense of every savanna herbivore — simply does not work against a painted dog pack. You cannot outrun something that never tires.

### Cooperative Intelligence

The pack's hunting success rate of nearly eighty percent — the highest of any large predator — is a product of coordination rather than individual ability. Painted dogs execute flanking maneuvers, cut off escape routes, and anticipate prey movement through a communication system of whistles, body language, and positional awareness that functions faster than conscious decision-making. Individual dogs make tactical choices — accelerating, cutting wide, holding position — that only make sense in the context of what the rest of the pack is doing, suggesting a level of real-time collective decision-making that approaches the coordinated movement of a single organism.

### Democratic Decision-Making

The pack's pre-hunt rally ritual is a collective assessment of readiness. Researchers observe that the number of dogs that participate in the rally predicts whether the hunt proceeds — a quorum of enthusiasm is required before the pack commits. This mechanism prevents the pack from hunting when too few members are willing or able, conserving energy and reducing the risk of hunts that would fail. For adventurers, the sight of a painted dog pack rallying — the frantic greeting, the face-licking, the rising chorus of twittering calls — is a reliable indicator that a hunt is about to begin.

### Communal Care

The painted dog pack's investment in its members extends beyond the hunt. Injured dogs that cannot hunt are fed. Elderly dogs that have slowed are carried by the pack's collective effort. Pups are raised by the entire group. This communal ethic makes the pack resilient: the loss of a single member does not cripple the group, and the knowledge and experience of older members is preserved through the pack's collective care rather than lost to individual mortality. A painted dog pack is, in a meaningful sense, more than the sum of its members.

## Attributes

- **Strength:** 9-14 (1d6+8)

- **Endurance:** 11-16 (1d6+10)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 8-13 (1d6+7)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 6-9 (1d4+5)
