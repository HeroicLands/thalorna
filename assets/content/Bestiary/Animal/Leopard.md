---
shortcode: leopard
name: {full: Leopard, aliases: []}
type: being
subType: creature
description: "A solitary, nocturnal ambush cat of the eastern hills and river forests, pound-for-pound among the strongest and most adaptable of all great cats."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-feline, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+13
    end: 1d6+10
    dex: 1d6+12
    agl: 1d6+13
    per: 1d6+12
    aur: 1d6+8
    wil: 1d6+10
    rea: 1d4+6
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Throat Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Throat Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: edged}
          lengthBase: 1
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
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[leopard|Leopard]]{float=top-left}

Something is hanging in the fork of the big fig, twelve feet up: the carcass of a half-grown antelope, hauled there whole and neatly opened. Beneath it the bark is scored with fresh claw-marks. A rasping cough, like a saw going through wood, sounds close by in the dark, and above the branch two pale eyes with round pupils open and gleam as they catch your lamp.

# Dossier {#dossier}

The Leopard is the climbing ambush cat of the river forests and hills, a hundred to two hundred pounds, hunting alone and by night. It lives in the [[place-cntrlrnfrsts|Central Rainforests]], the forest fringe of the savanna, the hills and river forests of [[place-okharisrgn|Okharis]] and the gorges of the Bizarian [[place-southrnmrch|Southern March]]. It is the only big cat that carries its kills into trees, hauling a carcass three times its own weight into the branches to keep it from lions and hyenas. In the river kingdoms leopard skins are the mark of priestly authority and the animal is tied to sacred feminine power and divine wrath, so it is hunted for its skin and protected by religious rule.

## Presentation

A medium-large cat, compact and heavy-boned, shorter and heavier than a lion, with a broad head, strong jaw and short, thick legs. The coat is short and dense, golden-yellow to tawny with a white belly, marked with dark rosettes that disappear in dappled light. The ears are small and round, and the large pale eyes, green, gold or amber, open wide in the dark. The whiskers are long and sensitive. The paws are broad, with sharp retractable claws, and the long, thick tail balances the cat in climbing and leaping.

## In the Land

Leopards live in the rain-forest of the [[place-cntrlrnfrsts|Central Rainforests]], the forest fringe on the southern edge of the savanna, the hills and river forests of [[place-okharisrgn|Okharis]], and the gorges and high ridges of the Bizarian [[place-southrnmrch|Southern March]], where a few are still taken. A leopard keeps a territory of ten to thirty miles, rests by day in a tree, a rock crevice or thick cover, and hunts alone at night. It drags a kill up into a fork to keep it from hyenas and lions.

## Key Behaviors

Leopards live alone apart from mating and rearing. A male holds fifteen to thirty square miles, overlapping those of several females and defended against rival males, and marks it with urine, scat and claw-marks on trees. By day it rests in thick cover, a rock crevice or along a branch. At night it stalks one animal for hours, closes inch by inch and rushes from cover, killing with a bite to the throat or skull. It then drags the kill into a tree and feeds on it over several days. It eats anything it can catch, from insects and rodents to antelope, livestock, dogs and occasionally people, and one that has taken to eating people is among the most dangerous animals alive.

## What the Sengala Do

The Sengala, the leopard-clan of the Nyáluba, are the trade-tribe on the northern margin of the Nyáluba lands, at the southern edge of the rain-forest, and the leopard guide is their clan's ancestral presence and not only an animal. Their parties are bound by the observances of the Leopard Totem. In the forest the hidden city of [[place-lpdkngcrt|the Leopard King's Court]] is said to be ruled by a king who takes the cat's shape at night. In Au'Khelathu a priestess wears a leopard-skin robe. Villages keep stock penned at night, and a hunter who kills a leopard must give its skin to the headman.

## Signs

- Round paw-prints with no claw-marks, in a line, on a river bank.
- A carcass hanging in the fork of a tree, well above a man's reach.
- A rasping, sawing cough in the dark, repeated at regular intervals.
- Scratches on a tree-trunk at the height of a standing cat, with the scent of musk.
- Dogs that cringe at the door of a hut, and a goat gone without a sound.

## Combat Strategy

A leopard's entire approach to combat is built around ambush. It does not charge across open ground like a lion or bear — it stalks, positions, and strikes from concealment with an explosive burst of speed that closes the distance before the target can react. The preferred attack is from above — dropping from a tree branch or rock ledge onto the target's back, using the impact to drive the prey to the ground while simultaneously seizing the throat. Against humans, a leopard will stalk from cover and attack from behind, targeting isolated individuals at the margins of camps or on paths through dense vegetation. If a leopard's ambush is detected or fails, it will typically disengage immediately, vanishing into cover with startling speed. A leopard rarely commits to a prolonged fight — it prefers to break contact and attempt another ambush from a different angle. However, a cornered leopard or one defending cubs fights with a berserk ferocity that belies its relatively modest size, and a wounded leopard in dense cover is one of the most dangerous situations a hunter can face.

## Attack Methods

### Ambush Pounce

The leopard's signature attack. From concealment — a tree branch, a rock ledge, tall grass — the cat launches itself at the target in a short, explosive leap, driving its full weight into the target's back or shoulders. The impact alone can knock a human to the ground, and the claws are deployed on contact, sinking deep into the flesh to anchor the leopard to its prey.

### Throat Bite

Once on the target, the leopard seizes the throat with its powerful jaws, applying a crushing bite that collapses the windpipe and severs the blood supply to the brain. This is the killing bite — the leopard holds it until the prey stops moving. Against armored or protected targets, the leopard may instead bite the base of the skull or the back of the neck, attempting to sever the spine.

### Raking Claws

In close combat, the leopard uses its hind legs to rake the belly and legs of its target with repeated, powerful kicks that drive the rear claws through clothing and flesh. This disemboweling motion is instinctive and devastatingly effective — a leopard that has secured a grip with its forepaws and teeth will rake continuously with the hind claws, inflicting catastrophic wounds in seconds.

### Hit and Fade

When facing alert opponents or groups, the leopard strikes from cover, inflicts damage, and immediately disengages into the surrounding terrain. It may circle and attack again from a completely different direction within minutes, using its knowledge of the local terrain to move unseen. Against groups, this tactic can create panic as the leopard picks off individuals one by one from the margins.

## Special Abilities

### Supreme Stealth

The leopard is the most effective ambush predator of its size class. Its spotted coat provides near-perfect camouflage in dappled light, and its movement through vegetation is almost completely silent. A leopard can approach within feet of its prey without being detected, and even experienced hunters may fail to spot a leopard in plain sight among the branches. At night, the leopard's stealth is absolute — its dark-adapted eyes allow it to navigate and hunt in conditions where humans are effectively blind.

### Arboreal Mastery

Leopards are powerful climbers, capable of ascending vertical tree trunks with explosive speed and descending headfirst with controlled grace. They can carry prey weighing more than their own body weight up into trees, using jaw strength and grip to haul carcasses into secure caching positions. This arboreal ability gives leopards access to refuges and ambush positions that are unavailable to ground-bound predators.

### Pound-for-Pound Power

Despite being smaller than lions, leopards possess extraordinary strength relative to their size. Their bite force and grip strength exceed what their body mass would suggest, and their muscular density allows them to overpower prey animals substantially heavier than themselves. A leopard is capable of killing animals twice its weight through technique and strength combined.

### Nocturnal Hunter

The leopard's eyes are specifically adapted for low-light conditions, with a reflective layer behind the retina that amplifies available light. In the darkness where it does most of its hunting, the leopard sees clearly while its prey — including humans — is effectively blind. This sensory advantage, combined with its natural stealth, makes the leopard an almost supernaturally effective nocturnal predator.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 11-16 (1d6+10)

- **Dexterity:** 13-18 (1d6+12)

- **Agility:** 14-19 (1d6+13)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 9-14 (1d6+8)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 6-9 (1d4+5)
