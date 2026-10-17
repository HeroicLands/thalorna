---
shortcode: lion
name: {full: Lion, aliases: []}
type: being
subType: creature
description: "A massive tawny carnivore second only to the tiger among great cats, the maned males weighing up to five hundred pounds of social pride-hunting power."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-lion, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+9
    end: 1d6+10
    agl: 1d6+15
    per: 1d6+13
    snt: 1d4+2
    aur: 1d4+3
    wil: 1d6+13
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 60}}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 85
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 0, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
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
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 1}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
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
            roles: &a1 [locomotor, manipulator]
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
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
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
      weight: {base: 400, calc: "400"}
      reachBase: 0
      bodyScaleBase: 1.06
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 160
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[lion|Lion]]{float=top-left}

On the flat top of the kopje a tawny shape lies stretched in the shade of a thorn tree, its tail flicking. Cubs tumble about it. Further off, among the long grass at the edge of the pan, five more heads rise and turn together. The male at the top of the rock stands up. His mane, black at the edges, hangs to his shoulders, and the roar that comes out of him shakes the stones under your feet.

# Dossier {#dossier}

The Lion is the great social cat, three to five hundred pounds, males much heavier than females, living in prides of four to thirty on the plains and acacia woodland of the [[place-sthrnsvnhs|Southern Savannahs]] and the savanna of the south of [[place-okharisrgn|Okharis Region]]. It is the only cat that lives in groups. The lionesses hunt together, and the males hold the ground and guard the cubs. A pride defends a huge range against other prides.

## Presentation

A massive, heavily muscled cat with short tawny fur from pale gold to deep reddish brown and white spots on the ears and face. The male has a thick, long mane over the neck, shoulders and parts of the face, darkening with age to almost black; it is bigger and darker on the oldest, strongest males. The head is broad and powerful, with jaws that crush bone and large forward-facing eyes. The ears are rounded. The tail, nearly a yard long, ends in a tuft. The claws are sharp and partly retractable.

## In the Land

Lions hold the plains, acacia woodland and rocky kopjes of the Southern Savannahs and the grass and savanna of the south of Okharis, following the migrating herds. A pride of four to thirty keeps a territory of many miles around a few shady resting-places and a water-hole, the lionesses hunting and the males patrolling the boundaries. The pride rests through the heat of the day and hunts at dusk and at dawn. The roar carries for miles.

## Key Behaviors

A pride has a firm rank order and divides its work, the females doing most of the hunting while the males patrol and guard. The pride hunts together, surrounding prey and cutting off escape before a coordinated strike. Lions rest up to twenty hours a day and hunt mostly at dawn and dusk. Males patrol the boundaries and mark them with scent and signs.

## What the Herding Clans Do

The [[lore-nyalubaclt|Nyáluba]] clan of the [Ruwozi]{.name data-type="affiliation/polity"} are the lion-clan, the cattle-herders of the central plains and the first among the five clans, and for them the [[lore-lionruwozispr|Lion Spirit]], their guide, is an ancestral presence and not only an animal. At the [Great Lubemo]{.name data-type="affiliation/governmental"} at [[place-hetolubemo|Heto Lubemo]] the [[affiliation-nyalblion|Lion Totem]] cult keeps the memory-song of the [Long Pact]{.name data-type="lore/law"}. Herders bring the cattle into a thorn cattle-fold at night and kindle fires, and a boy keeps watch on the roof of the hut. A lion that takes a man is hunted down by a party of spears. The forest-hunters of the [[lore-khelathiclt|Khelathi]] guild take lion in the savanna fringe.

## Signs

- Paw-prints as wide as a man's hand, four toes and a broad pad, in a line along a dry river-bed.
- A zebra or antelope carcass dragged into a shaded thicket, with vultures walking round it.
- A deep, coughing roar at night that rolls across the plain, and then a second from the other side.
- A tawny shape stretched in the shade of a tree, flicking its tail, with cubs tumbling about it.
- Herds that bunch and stare in one direction, and the grass moving.

## Combat Strategy

When hunting in pride, lions execute coordinated attacks: some lionesses drive prey toward waiting ambushers while others move to cut off escape. A lion will charge directly when confident, using its strength to knock prey down and deliver a killing bite. Males defend against rivals using their strength and mane as both weapon and shield. A wounded lion becomes more dangerous, not less, using its strength and intelligence to lure attackers into positions of disadvantage.

## Attack Methods

### Powerful Bite

The lion lunges to clamp powerful jaws on the target's neck, throat, or vulnerable areas; the bite can crush bone and is often instantly fatal to large prey, dealing devastating damage to any opponent caught in the lion's powerful grip.

### Claw Swipe

The lion rakes its claws across an opponent, capable of delivering deep lacerations, disarming weapons, or knocking a man down; the swipe is often a follow-up to a successful charge.

## Special Abilities

### Strength of Kings

The lion possesses extraordinary raw strength and uses this to overpower opponents; it can do feats of strength that lesser creatures cannot.

### Pack Hunter

Lions fight far more effectively alongside other pride members, and they can execute coordinated attacks with preternatural synchronization, communicating through subtle roars and body language.

## Attributes

Strength
: 10-15 (1d6+9)

Endurance
: 11-16 (1d6+10)

Agility
: 16-21 (1d6+15)

Perception
: 14-19 (1d6+13)

Scent
: 3-6 (1d4+2)

Aura
: 4-7 (1d4+3)

Will
: 14-19 (1d6+13)

Reasoning
: 4-7 (1d4+3)

Creativity
: 4-7 (1d4+3)
