---
shortcode: cheetah
name: {full: Cheetah, aliases: []}
type: being
subType: creature
description: "A lightly built sprinting cat of the arid grasslands, built for blistering speed to run down gazelle across open gravel plains."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-lion, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+10
    end: 1d6+8
    dex: 1d6+13
    agl: 1d6+15
    per: 1d6+12
    aur: 1d6+8
    wil: 1d6+8
    rea: 1d4+6
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 33}}
    - name: Suffocation Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 78
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Suffocation Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Slapping Strike
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 78
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Slapping Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: edged}
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
      weight: {base: 110, calc: "110"}
      reachBase: 0
      bodyScaleBase: 1.17
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

![[cheetah|Cheetah]]{float=top-left}

On the gravel flat a line of gazelle lifts its heads together, and a slender, spotted shape rises from a termite mound and is already running. It crosses the open ground in long bounds, low and flat, and the herd breaks into a spray of white rumps. Half a minute later the shape has stopped, and lies panting beside a fallen gazelle, sides heaving, with black lines running from its eyes to its mouth.

# Dossier {#dossier}

The Cheetah is the sprinting cat of the open grass and gravel plains, thirty inches at the shoulder and seventy-five to a hundred forty-five pounds, built for speed at the cost of strength. It hunts gazelle across the [[place-khzryndsrtrgn|Khazryn]] steppe, the edges of the [[place-dunhardsrtrgn|Dunhara Desert]], the plateau of [[place-byzariargn|Byzaría]] and the dry savanna of the south. A cat cannot hold its top speed for more than half a minute, and stronger predators take its kills. Steppe chiefs and nobles keep tamed cheetahs for coursing.

## Presentation

A tall, slender, narrow-bodied cat with a short, coarse golden coat, white on the belly, marked with small solid black spots. The face is small and flat, with high-set amber eyes and black lines from the inner corners of the eyes to the mouth. The chest is deep and narrow. The legs are long and lean, the hind legs longer than the fore, so the back slopes. The claws are only partly retractable and grip like cleats. The long, flat tail works as a rudder in a turn.

## In the Land

Cheetahs hunt the gravel plains and open grassland of the [[place-khzryndsrtrgn|Khazryn]] steppe, the edges of the [[place-dunhardsrtrgn|Dunhara Desert]], the plateau of [[place-byzariargn|Byzaría]] and the dry savanna of the south, wherever gazelle herds graze in the open. A female holds a wide, thinly stocked range and follows the herds; males, often brothers, hold a territory together. A cheetah hunts in the morning and the late afternoon, sits on a termite mound or a rock to scan the plain, and rests in the heat of the day under a lone tree.

## Key Behaviors

Cheetahs hunt by day, when the lions, leopards and hyenas rest. Females are alone except with cubs, while males often keep in coalitions of two to four brothers that hunt together and hold ground together. A cat scans the plain from a termite mound or a rock for herds, stalks to within two or three hundred yards and sprints, and if the prey is not down in half a minute the chase is broken off. After a kill the animal must rest and pant for ten to fifteen minutes before it can eat, and lions, hyenas or even vultures often take the meat.

## What the Nobles Do

Steppe and desert nobles take cubs from a den and raise them as coursing cats. A trained cheetah is carried hooded on a pad behind the saddle or on a cart and unhooded when a herd of gazelle is in sight. The lords of the Southern March run them in their hunts with hounds and hawks. A cheetah that has made a kill must be fed at once from the saddlebag, or it will not run again. The herders of the steppe edge, who keep sheep and goats, shoot the wild cats on sight.

## Signs

- Slender tracks with the claw-marks showing, in a long, widely spaced line across a dry stream-bed.
- A gazelle carcass opened at the flank on a mound, with the cheetah's own kill left to hyenas.
- A line of gazelle running flat out across a plain with nothing visible behind them.
- A low, chirping call like a bird's, from a long yellow shape in the grass.
- A tall termite mound with the top worn bare and flat by a cat's weight.

## Combat Strategy

The cheetah is not built for combat and avoids it whenever possible. Against larger predators — lions, leopards, hyenas — a cheetah will abandon its kill and retreat without contest, relying on its speed to escape. Against threats to its cubs, a female cheetah will attempt to lead the predator away through a combination of distraction displays and bursts of speed, but will not engage in direct combat against anything she cannot clearly overpower. Male coalitions are braver and will stand their ground against single hyenas or jackals, hissing, growling, and making short rushes to drive off the intruder. In the rare circumstance where a cheetah must fight — cornered, defending cubs at close range, or in a dispute with another cheetah — it relies on speed of strike rather than power, delivering rapid swipes with its semi-retractable claws and aiming for the face and eyes. The cheetah's bite is proportionally weak for a large cat — its small head and reduced jaw muscles are an aerodynamic tradeoff — and it kills prey through suffocation rather than the crushing bites of stronger cats, maintaining a throat hold for several minutes until the prey stops breathing.

## Attack Methods

### Sprint and Trip

The cheetah's signature hunting technique. After closing to within striking range through the explosive sprint, the cheetah uses a forepaw to hook the prey's hind leg, tripping it at full speed. The resulting tumble is often violent enough to stun the prey momentarily, giving the cheetah time to secure the throat hold. The trip is delivered with precise timing — too early and the prey may recover, too late and the cheetah's energy is spent.

### Suffocation Bite

Once the prey is down, the cheetah seizes the throat with its jaws and maintains a sustained grip that collapses the windpipe and cuts blood flow. Unlike the crushing bite of a leopard or the spine-severing attack of a lion, the cheetah's kill is slow and controlled — it may take several minutes for the prey to die. The cheetah cannot risk a more aggressive approach because its light build makes it vulnerable to injury from a struggling prey animal.

### Slapping Strike

In defensive or intra-species combat, the cheetah delivers rapid, open-pawed strikes aimed at the face and eyes of the opponent. The semi-retractable claws are less sharp than a leopard's fully retractable claws but still capable of cutting flesh, and the speed of delivery makes the strikes difficult to avoid.

## Special Abilities

### Absolute Speed

The cheetah is the fastest land animal in existence. In a sprint, it achieves speeds that no horse, no gazelle, and no other predator can match — covering ground at a rate that makes pursuit by any other means futile over short distances. This speed is the product of every element of the cheetah's anatomy working in concert: the oversized heart and lungs delivering oxygen, the flexible spine extending and compressing with each stride to double the effective leg length, the semi-retractable claws gripping the earth, and the long tail counterbalancing turns. For twelve to thirty seconds, the cheetah is simply uncatchable.

### Pursuit Agility

Raw speed alone would not catch a gazelle — the prey's evasive turns would defeat a predator that could only run in a straight line. The cheetah combines its speed with extraordinary maneuverability, executing high-speed turns and direction changes that generate forces that would incapacitate a less specialized animal. The long tail works as a counterweight, whipping to the opposite side of each turn, and the semi-retractable claws provide grip through directional changes. A cheetah in pursuit matches its prey's evasive maneuvers stride for stride, turning the gazelle's primary defense into a delaying tactic rather than an escape.

### Elevated Scanning

Cheetahs possess keen distance vision adapted for spotting prey on open terrain. They habitually climb to elevated positions — rock outcrops, termite mounds, fallen trees — to scan the surrounding steppe for game. This behavior makes them excellent scouts of the landscape, and experienced steppe hunters watch cheetah scanning behavior to locate gazelle herds that are invisible from ground level.

### Noble Companion

The cheetah's unique combination of tractability and hunting prowess makes it the only large cat that has been successfully trained as a hunting companion across multiple cultures and centuries. Unlike the caracal, which cooperates on its own terms, a well-trained cheetah will course and kill gazelle on command, returning to the handler after the kill in exchange for a portion of the meat. This trainability — combined with the cheetah's inability to breed reliably in captivity — means that every hunting cheetah must be captured from the wild and individually trained, making each one irreplaceable and immensely valuable. The bond between a cheetah and its handler is real, built on trust and mutual dependence, and the death of a prized hunting cheetah is mourned in steppe camps with rituals normally reserved for horses and hounds.

## Attributes

- **Strength:** 11-16 (1d6+10)

- **Endurance:** 9-14 (1d6+8)

- **Dexterity:** 14-19 (1d6+13)

- **Agility:** 16-21 (1d6+15)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 9-14 (1d6+8)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 6-9 (1d4+5)
