---
shortcode: brwnbr
name: {full: Brown Bear, aliases: []}
type: being
subType: creature
description: "A colossal, fiercely territorial apex predator of boreal and alpine wilds, the most dangerous large hunter of the northern hemisphere."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-bearhead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+21
    end: 1d6+15
    agl: 1d6+9
    per: 1d6+11
    snt: 1d4+4
    aur: 1d4+3
    wil: 1d6+10
    rea: 1d4+2
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 24}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 76}}
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
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 7, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 1}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 6, aspect: edged}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 3}
          - {name: Torso, shortcode: torsozone, probWeight: 6}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
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
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
      weight: {base: 1650, calc: "1650"}
      reachBase: 0
      bodyScaleBase: 1.66
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 120
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[brwnbr|Brown Bear]]{float=top-left}

A salmon lies on the flat rock, the head and belly eaten and the rest thrown aside. Upstream, in the shallows, something brown is rising out of the water with a fish in its jaws, a mound of wet fur with a hump over the shoulders. The paw it plants on the gravel is as wide as your hand with the fingers spread. It lifts its muzzle, tests the wind and turns its head toward you.

# Dossier {#dossier}

The Brown Bear is the largest hunter of the northern mountains and forests, eight hundred to twenty-five hundred pounds, nine to thirteen feet tall when it rears. It holds the mountain valleys and salmon streams of the [[place-nrdlndsrgn|Nordlands]], the deep taiga of [[place-vrystwald|Vristwald]] and the high valleys of the [[place-graznmntns|Grazian Mountains]], alone, and defends its range and its kills against all comers. Unlike the black bear it seldom gives way to people and often attacks at the first meeting.

## Presentation

A massive, thick-bodied bear on powerful legs, each paw the size of a human hand and armed with claws four to five inches long. The fur runs from tan to dark brown, with long guard hairs over the shoulders that raise a hump. The head is broad, with a longer, more projecting snout than the black bear's, small dark eyes and rounded ears. Old males carry scars on the face from fights with rivals. Reared up, a bear reaches twelve to fourteen feet. It smells of musk, earth and whatever it has last eaten.

## In the Land

Brown bears hold the mountain forests and river valleys of the [[place-nrdlndsrgn|Nordlands]], the deep taiga and uplands of [[place-vrystwald|Vristwald]], and the high valleys of the [[place-graznmntns|Grazian Mountains]]. A big male ranges over several valleys and a stretch of river, and fishes the same run each summer. They are most numerous where salmon spawn and the berries are thick, and they den through the winter in a cave or under a fallen tree on a north slope.

## Key Behaviors

A dominant male holds fifteen to fifty square miles, driving out other males and most females. Summer is spent on salmon, berries and green food, autumn on gorging for the winter sleep, and spring on recovering, when the bears come out lean and savage. At the salmon runs bears crowd along a stream and tolerate each other, though the largest keep the best spots. A sow with cubs is the most dangerous of all. Bears remember kills, runs and boundaries from year to year, and one that has defended a cache or driven off a person grows bolder.

## What the Hunters Do

The Varokh hunt the brown bear last, and only after elk and boar fail, since a bear takes the lives of hunters. The bear wesk is kept by villages such as Mahnwald and Weskstein, whose rites bar the killing of a bear in the village's own woods. In the Nordlands a bear-hunt is a clan matter, with the clan's best spearmen and a rope-line of dogs, and the man who gives the killing thrust takes the claws. The Grazian guides carry noise-makers and keep their goats penned at night in bear country. The hide goes to the clan chief, and the fat to the sick.

## Signs

- Tracks as long as a forearm, with five toes and claw-marks well forward, pressed deep into a stream bank.
- A tree stripped of bark to twice a man's height, with deep claw-scores and a rubbing-patch of brown hair.
- A salmon carcass picked clean at the head and flung aside on a rock.
- A stone turned or a log shredded, with the insects gone, and the pieces cast several yards away.
- A broad trail through the berry thicket, with branches broken at chest height.

## Combat Strategy

A brown bear's typical response to human presence is territorial aggression. It may charge directly, or it may perform a threat display first: standing tall, huffing and snorting, swatting at nearby vegetation to display its strength. Most bears that display will attack if the threat doesn't back away. The charging attack is meant to overwhelm—the bear accelerates to surprising speed given its mass, attempting to knock opponents down with the force of impact. Once a target is on the ground, the bear uses its weight and jaws to cause maximum damage. Against multiple opponents, a brown bear will focus on the closest threat, attempting to isolate and subdue one individual before dealing with others. A wounded bear becomes more aggressive—pain triggers deeper aggression rather than retreat. Unlike black bears, brown bears do not climb well (their claws are less adapted for climbing) and heavy humans cannot safely escape up trees. A brown bear that has killed a prey animal will defend the carcass ferociously, driving off any and all scavengers and would-be competitors.

## Attack Methods

### Charging Impact

The bear accelerates toward its target with surprising speed, using the full mass of its body as a weapon. The impact is devastating—sufficient to knock armored warriors from their feet and drive smaller individuals several feet backward. The force alone can break ribs and crush internal organs. If the charge lands, the bear often follows immediately with bites or swipes without giving the target time to recover.

### Claw Swipe

Once at close quarters, the bear delivers horizontal slashes with its massive claws, attempting to open deep wounds across the chest, face, or limbs. These attacks can sever arteries and remove entire limbs if sufficiently powerful. The claws are angled slightly downward, which makes overhead attacks against raised arms or shields more likely to slip past defenses.

### Mauling Bite

When an opponent is on the ground or secured within the bear's reach, it bites with devastating force, attempting to seize the head, shoulder, or torso. A bear's bite can crush skull bones and fracture spine—a bear that has secured a kill will shake violently to increase damage and finish wounded prey.

### Blunt-force Pummeling

Using its full weight, the bear may simply throw itself atop a knocked-down opponent, crushing them with body weight and continuing to bite and claw. This attack is less precise but highly effective against armor and multiple opponents.

## Special Abilities

### Overwhelming Strength and Resilience

Brown bears possess not just large muscles but muscle density exceeding most predators. They can flip massive boulders to access grubs, move fallen trees, and physically overpower most animals of equivalent weight. Their bone structure is dense and robust, and wounds that would cripple human-sized creatures are mere minor injuries. They are less vulnerable to blood loss than mammals of similar size, possessing great cardiovascular resilience.

### Keen Senses and Territorial Memory

A brown bear's sense of smell is even more acute than a black bear's—some evidence suggests they can smell food sources from twenty miles away on the wind. Combined with keen hearing and a territorial sense that allows them to remember landmarks and previous encounters, this makes brown bears extremely effective predators. They remember productive hunting locations, territorial boundaries, and previous human encounters with great precision.

### Thick Hide and Fur Insulation

The dense fur and thick skin provide substantial protection against slashing weapons and elemental exposure. The fur actually provides some resistance to blunt force trauma, as impact force is distributed across a wider area. Cold and extreme weather have minimal effect on a healthy brown bear due to its metabolic efficiency and insulation.

### Fearlessness and Aggression

Unlike most animals, brown bears do not recognize humans as apex predators to be feared. A brown bear will attack humans with the same tactical calculation it applies to any competitor. This fearlessness, combined with the bear's physical supremacy in most environments, makes brown bears uniquely dangerous. A wounded brown bear will continue attacking rather than retreating; the bear's will to violence does not break easily.

## Attributes

- **Strength:** 22-27 (1d6+21)

- **Endurance:** 16-21 (1d6+15)

- **Agility:** 10-15 (1d6+9)

- **Perception:** 12-17 (1d6+11)

- **Scent:** 5-8 (1d4+4)

- **Aura:** 4-7 (1d4+3)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 3-6 (1d4+2)

- **Creativity:** 3-6 (1d4+2)
