---
shortcode: tiger
name: {full: Tiger, aliases: []}
type: being
subType: creature
description: "The world's largest cat, a solitary ambush hunter sitting atop every food chain across jungle, grassland, and river margin."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-tiger, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+16
    end: 1d6+12
    dex: 1d6+11
    agl: 1d6+11
    per: 1d6+11
    aur: 1d6+10
    wil: 1d6+11
    rea: 1d4+6
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Throat Crush
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
          name: Throat Crush
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Forepaw Strike
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Forepaw Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 4, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
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
      weight: {base: 530, calc: "530"}
      reachBase: 0
      bodyScaleBase: 1.47
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[tiger|Tiger]]{float=top-left}

In the bamboo the light falls in vertical bars. The fresh pug-mark in the mud is as wide as a dinner-plate, and the langurs overhead have all stopped screaming at once. You see nothing, and then you see that one of the bars of shadow is orange. The huge head turns, broad and round, with white patches about the eyes, and two amber eyes look straight at you, quite without hurry.

# Dossier {#dossier}

The Tiger is the largest cat, three to three and a half feet at the shoulder and nine to twelve feet long, four hundred to six hundred sixty pounds, a lone ambush hunter of jungle, tall grass, river margin and mountain forest. It lives in [[place-vedyarargn|Vedyara Region]] and the forested hills of [[place-tantsouregin|Tantsou Region]]. In the south it is sacred to the god of destruction and transformation, and its image is on temple walls, warrior shields and thrones. Killing one is either a supreme feat or a sacrilege, depending on the circumstances and the priesthood consulted.

## Presentation

A massive animal, long and deep-chested, on shorter, thicker legs than a lion's, with a low, heavy outline. The forelimbs are enormously strong, and the paws are as broad as dinner-plates with thick, curved retractable claws. The head is broad and round, wider than a lion's, with heavy jaw muscles; the canines, three to four inches, are the longest of any living cat. The coat is rich orange-gold to tawny with vertical black stripes that differ between tigers, so that trackers know individuals by them; the belly and inner legs are white or cream. The ears are round and black with a white spot. The tail is long and thick, ringed with dark bands. In dappled forest light the stripes break up the outline, and a six-hundred-pound animal can be invisible at twenty feet.

## In the Land

Tigers live in the jungle, tall grass, river margins and mountain forests of Vedyara and the forested hills of Tantsou. A male holds twenty to forty square miles of prime ground, and a female a smaller range inside it. A tiger lies up through the heat in dense cover or in water and hunts at dusk, dawn and by night, stalking to a few strides and charging. It drags the carcass to a hiding-place and feeds on it for days.

## Key Behaviors

Tigers live alone, a male holding twenty to forty square miles that he defends against rival males by calls, scent and sometimes a fight that kills both. A female's range is smaller and lies within his. They are active at dawn, dusk and night and rest by day in dense cover near water. They swim and lie in water readily. They hunt by ambush, locating prey by ear and scent, stalking for an hour or more to within thirty or fifty feet, and rushing the last ten to twenty yards. They kill with a bite to the throat or the back of the neck, and against big prey hook the animal down with a forepaw or hamstring it. They eat sixty to eighty pounds at a sitting and stay near a big carcass for days, dragging it to cover. A man-eater, usually an injured or old tiger that finds people easier to kill than deer, learns when villagers go to the well and which paths they take to the fields, and has taken victims from huts, boats and armed hunting parties.

## What the Villages Do

The tiger is sacred to the god of destruction and transformation, and its image is on temple walls, shields and thrones. Villages on the jungle edge live within hearing of one and accept losses of stock as a toll. A human killed is met with grief and religious resignation, and the villagers raise a shrine at the spot. A man-eater, usually an old or injured animal, is hunted by the king's huntsmen, and killing one is a deed of heroism. Villagers walk to the fields in groups and wear masks on the back of the head.

## Signs

- A round pug-mark as wide as a man's hand-span, with no claws, in a river bank.
- A deep, rolling call in the night, repeated at intervals across the jungle.
- Scratched bark on a trunk, higher than a man can reach, and a patch of scent.
- A deer's alarm bark that changes into a general panic.
- Langurs shrieking in the trees, all looking at the same place.

## Combat Strategy

A tiger does not engage in combat — it conducts executions. The entire architecture of the tiger's predatory strategy is designed to end the encounter in the first three seconds: an explosive ambush from concealment, the impact of several hundred pounds of muscle driving the prey to the ground, and the killing bite to the throat or spine. If this sequence succeeds — and against unprepared targets, it almost always does — the fight is over before it begins.

Against a target that detects the ambush and faces the tiger, the calculus changes. Tigers are not cowards, but they are pragmatists: a frontal approach against an alert, armed opponent risks injury, and an injured tiger may be unable to hunt, which means death. A tiger that has been detected will often break off the attack, circling to attempt another ambush from a different angle. This is not retreat — it is repositioning. The tiger will try again, and the second attempt benefits from everything it learned during the first.

If forced into direct combat — cornered, wounded, defending cubs, or in the frenzy of a charge that cannot be stopped — the tiger is the most physically dangerous animal an adventurer can face short of an elephant or dragon. It strikes with both forepaws, the claws fully extended, delivering sweeping blows that can decapitate a human, disembowel a horse, or shatter a shield. It bites with a jaw force that can crush a skull through a helmet. It uses its body weight to overbear opponents, pinning them beneath its mass while the claws and teeth do their work. A tiger in close combat generates injuries so rapidly and so catastrophically that most engagements are decided within seconds.

Against groups, a tiger's instinct is to avoid engagement unless the group is in its territory and threatening cubs. A tiger that does attack a group will focus on a single target — typically the rearmost, most isolated individual — taking that target down with an ambush strike and dragging it away before the group can organize a response. This is not foolhardy bravery but cold tactical sense: eliminate one target quickly, withdraw with the kill, and the threat is reduced by one while the tiger loses nothing.

## Attack Methods

### Ambush Strike

The defining tiger attack. From concealment — tall grass, undergrowth, shadow — the tiger launches a short, explosive charge that covers the final distance in a single bound, crashing into the target with the full force of its body. The impact alone is sufficient to knock most targets to the ground, and the forepaws — claws fully deployed — hook into the shoulders, back, or neck to anchor the tiger to its prey. The throat bite follows within a heartbeat.

### Throat Crush

Once the prey is down, the tiger seizes the throat in its jaws and closes with a sustained, crushing bite that collapses the windpipe and severs the blood supply to the brain. Against large prey, the tiger holds this bite for minutes, applying constant pressure until the struggling stops. Against armored targets, the tiger may shift to the back of the neck, attempting to drive the long canines between the cervical vertebrae to sever the spinal cord.

### Forepaw Strike

In direct combat, the tiger delivers devastating blows with its forepaws — sweeping, hooking strikes powered by the massive shoulder and forelimb musculature. The claws are thick, curved, and three to four inches long, capable of tearing through leather, mail, and flesh with equal facility. A single forepaw strike carries enough force to break a human arm, shatter ribs, or open wounds that are immediately life-threatening. The tiger alternates forepaw strikes rapidly, each paw targeting from a different angle, creating a barrage of incoming damage that overwhelms any single-weapon defense.

### Raking Disembowelment

A tiger that has seized a target with its forepaws and teeth will bring the hind legs forward and rake with the rear claws — long, thick, and driven by the most powerful muscles in the animal's body. This instinctive raking motion targets the belly and groin, opening catastrophic abdominal wounds. Against a target the tiger has pinned beneath its body, the raking continues until the struggling stops.

## Special Abilities

### Jungle Ghost

The tiger's striped camouflage, combined with its ability to move through dense vegetation in near-total silence, makes it effectively invisible in its preferred habitat. A tiger stalking through bamboo, tall grass, or forest undergrowth displaces almost no vegetation, makes almost no sound, and presents a visual profile that the human eye cannot assemble into a recognizable shape until it is far too late. Experienced southern hunters state that the only reliable way to detect a stalking tiger is to listen for the silence — when the jungle stops making noise, the tiger is close.

### Apex Predator

The tiger sits at the absolute top of the southern food chain. There is nothing in the jungle, the grassland, or the river margin that hunts tigers. This ecological dominance shapes every aspect of the tiger's behavior: it moves through its territory with a confidence that borders on contempt, it does not flee from threats but instead assesses and responds, and it treats everything it encounters as either prey, rival, or irrelevance. Adventurers accustomed to animals that flee from humans must recalibrate their expectations immediately — a tiger will not run from a party of armed humans unless it has specific reason to associate humans with danger.

### Water Hunter

Unlike most cats, the tiger is a powerful and willing swimmer, capable of crossing rivers, hunting in marshland, and pursuing prey into water. Tigers have been documented swimming miles across open water and taking prey — deer, boar, even humans in boats — from the water's edge. In the river margins and floodplains of the south, a tiger's hunting territory extends seamlessly from land to water, and the assumption that a river provides safety from pursuit is dangerously incorrect.

### Man-Eater Potential

A tiger that has killed and eaten a human may develop a preference for human prey — the beginning of a man-eating career that can claim dozens of victims before it ends. Man-eaters are not aberrant or insane; they are tigers that have made a rational assessment that humans are abundant, predictable, and easy to kill compared to their natural prey. A man-eater learns human patterns and exploits them with a patience and intelligence that makes it the most dangerous animal phenomenon in the tropical south. Communities afflicted by a man-eater live in a state of siege, and the hunter or adventurer who kills a confirmed man-eater earns a reputation that lasts a lifetime.

## Attributes

- **Strength:** 17-22 (1d6+16)

- **Endurance:** 13-18 (1d6+12)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 11-16 (1d6+10)

- **Will:** 12-17 (1d6+11)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 6-9 (1d4+5)
