---
shortcode: baboon
name: {full: Baboon, aliases: []}
type: being
subType: creature
description: "A powerfully built, highly social monkey of the river lowlands, dwelling in rocky escarpments and river margins near human settlements."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-monkey, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+8
    end: 1d6+7
    dex: 1d6+10
    agl: 1d6+10
    per: 1d6+11
    aur: 1d4+6
    wil: 1d6+8
    rea: 1d6+7
    cre: 1d6+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Canine Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 68
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Canine Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Mauling
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 68
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Mauling
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
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
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 75, calc: "75"}
      reachBase: 0
      bodyScaleBase: 1.06
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 35
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[baboon|Baboon]]{float=top-left}

A bark comes from the rock above the river path, short and flat, and is answered from further along the cliff. A big gray animal sits on the ledge with its knuckles on the stone, watching you with deep-set amber eyes. Its mane is thick over the shoulders and its long muzzle is wrinkled back from teeth as long as a leopard's. Behind it, among the boulders, you can make out a dozen more.

# Dossier {#dossier}

The Baboon is the largest monkey of the river lowlands, fifty to a hundred pounds, living in troops of twenty to over a hundred on the cliffs and rocky escarpments above the great river of [[place-aukhelathrgq|Au'Khelathu Region]] and along the river margins of the [[place-nrthrnfrtlrgn|Northern Fertile Region]]. A lone animal is a nuisance; a troop strips a granary or a field in an hour. The animals are sacred to the scribe-god [[lore-rethsaardty|Reth'Sa'ar]], and the troops of the temple courts are fed by the priests.

## Presentation

A heavy-bodied monkey with a long, doglike muzzle ending in a broad nose, deep-set amber eyes under heavy brows, and canine teeth as long as a leopard's. The males carry a thick gray-brown mane over the shoulders and upper back and stand two to three feet at the shoulder on all fours. The body is compact and muscular. The hands are large and strong, and the tail is of medium length, carried in an arch. The hindquarters have bare, brightly colored patches of hardened skin.

## In the Land

Baboon troops live on the cliffs and rocky escarpments above the great river of Au'Khelathu and along the river margins of the Northern Fertile Region. A troop sleeps on a cliff ledge or in a stand of tall trees, descends at first light to the river bottoms and the fields, and walks the same circuit each day. Troops that have taken to the temple precincts stay in them year-round and are fed from the temple kitchens. Wild troops hold the canyons and mountain passes farther inland.

## Key Behaviors

Troops are led by a dominant male who holds his rank against younger challengers, while the females keep a hierarchy of their own, handed down from mother to daughter. They forage together over a fixed territory with sentries posted on high ground, and eat fruit, seeds, roots, insects, eggs, small animals and whatever can be stolen. They raid in teams, one group distracting the guards while another takes the grain, and they open latches and pull thatch apart. Temple troops, fed for generations, tolerate people but turn on them suddenly in the mating season or when young are near.

## What the Temples Do

The temples of the [[affiliation-rethsaar|Faith of Reth'Sa'ar]] feed the troops that live in their courts and forbid anyone to strike one. A farmer whose granary has been stripped has no remedy under temple law, and the loss falls on the village until the scribes assess it against the temple's tithe. Farmers guard ripe fields with watchers on towers, with drums, and with dogs, and they build granary doors with a bar set high where a baboon's hand cannot lift it. A baboon that kills a child is the one case in which the priests allow the troop's leader to be driven out of the precinct.

## Signs

- Barks and screams from the cliff-tops at dawn, passed along the face from one sentry to the next.
- A thatched roof pulled open from the edge, with the grain bin beneath it emptied.
- A field of ripe barley trampled flat in a band the width of a troop, with seed-heads shredded.
- A watcher on a high rock who does not run when approached and does not take his eyes off the traveler.
- Flat stones turned over along a river bank, and the insects beneath them gone.

## Combat Strategy

A baboon troop's response to threat follows a predictable escalation. Sentries give alarm calls; the troop gathers and faces the threat; dominant males move to the front and begin aggressive displays — jaw-gaping to show canines, barking, ground-slapping, and mock charges. If the threat does not retreat, multiple males will charge simultaneously, attempting to overwhelm through numbers and ferocity. Individual baboons fight with a combination of biting and grappling, using their powerful hands to seize and their long canines to deliver deep puncture wounds. Against predators, the troop acts as a coordinated defense — females and young retreat to high ground while males form an aggressive screen. Against humans, baboons that have learned to associate people with food may bypass threat displays entirely and simply mob individuals carrying food or guarding granaries. A baboon troop that has been attacked will remember the aggressor and respond to similar-looking humans with immediate, preemptive aggression — they do not forget, and they do not forgive easily.

## Attack Methods

### Canine Bite

The baboon's primary weapon. The canines of an adult male are two to three inches long — longer than those of most dogs — and are driven by powerful jaw muscles. The bite targets hands, arms, faces, and throats, and the puncture wounds are deep, ragged, and extremely prone to infection. A baboon in full aggressive mode will bite repeatedly, shaking its head to maximize tissue damage.

### Grappling and Mauling

Using its powerful hands and arms, the baboon seizes its target and pulls it close to deliver repeated bites. The grip is very strong — a baboon that has seized a human arm or leg is extraordinarily difficult to dislodge. Against smaller opponents, a baboon may simply overpower and pin them, biting at the face and throat.

### Troop Swarm

The baboon's most dangerous tactic. Multiple individuals attack simultaneously from different directions, overwhelming the target's ability to defend. While individually a baboon can be driven off, facing five or ten simultaneously is a life-threatening situation. The psychological effect of being swarmed by screaming, biting primates with almost-human faces is devastating to morale.

## Special Abilities

### Primate Intelligence

Baboons are among the most intelligent non-human animals in the world. They use tools — rocks to crack nuts, sticks to extract insects from crevices — and they learn from observation. A baboon that watches another baboon solve a problem will attempt the same solution. They plan ambushes, coordinate raids, and remember individual humans who have threatened or fed them. This intelligence makes them unpredictable and adaptable opponents that cannot be dealt with using simple animal-management techniques.

### Cliff Dwellers

Baboons are superb climbers, using their powerful hands and feet to ascend sheer rock faces that would challenge experienced human climbers. They sleep on cliff ledges and in rock crevices inaccessible to most predators, and they use high ground as both refuge and vantage point. In rocky terrain, a baboon troop has an enormous tactical advantage, raining rocks and debris on threats below while remaining out of reach.

### Social Cohesion

The troop functions as a military unit in defense. Alarm calls are specific — different calls for aerial predators, ground predators, and snakes — and the troop responds to each with practiced coordination. Males will sacrifice themselves to defend females and young, charging leopards and even lions to buy time for the troop to reach safety. This cohesion makes a baboon troop far more dangerous than the sum of its individual members.

### Sacred Status

In the river lands, baboons benefit from religious protection as creatures of the scribe-god. Temple troops are fed, sheltered, and defended by priests, and harming baboons near temple complexes can bring severe legal and social consequences. This protection has made temple baboons unusually bold around humans, and troops that have outgrown their temple territory often expand into surrounding agricultural land with an arrogance born of generations of immunity from human retaliation.

## Attributes

- **Strength:** 9-14 (1d6+8)

- **Endurance:** 8-13 (1d6+7)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 11-16 (1d6+10)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 8-13 (1d6+7)

- **Creativity:** 7-12 (1d6+6)
