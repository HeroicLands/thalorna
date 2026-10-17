---
shortcode: dsrtsghthnd
name: {full: Desert Sighthound, aliases: []}
type: being
subType: creature
description: "A lean, elegant desert sighthound of ancient lineage, built entirely for speed to course gazelle and hare across open dunes."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-hound, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+6
    end: 1d6+8
    dex: 1d6+11
    agl: 1d6+13
    per: 1d6+12
    aur: 1d6+7
    wil: 1d6+8
    rea: 1d4+6
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 28}}
    - name: Coursing Bite
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
          name: Coursing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
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
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 50, calc: "50"}
      reachBase: 0
      bodyScaleBase: 0.88
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

![[dsrtsghthnd|Desert Sighthound]]{float=top-left}

Beside the tent door, on a cushion, lies something you take at first for a long cream-colored fur laid out to dry. It lifts a narrow head, the ears falling back in fine feathers, and looks at you with large dark eyes, calm and measuring, with no eagerness in them. Then its head turns toward the plain, where a hare has broken from a bush, and the whole long body is a line, trembling.

# Dossier {#dossier}

The Desert Sighthound is the lean hunting dog of the desert tribes, twenty-three to twenty-eight inches at the shoulder and thirty-five to sixty-five pounds, built for coursing gazelle and hare. It is kept in the tent-camps of the [[place-khzryndsrtrgn|Khazryn Desert Region]] and the tribal confederations of [[place-dunharargn|Dunhara Region]]. It runs near full speed for miles, which a cheetah cannot. It is the one dog the desert tribes count as clean, sleeping beside its master, and its lineage is remembered as a family's is.

## Presentation

A long-legged, deep-chested hound with a narrow waist and a tucked belly, all curves and no bulk. The coat is short and silky, with long fine feathering on the ears, tail and backs of the legs, in cream, gold, red, grizzle, tricolor, black and tan or white with patches. The head is long, narrow and refined, with large oval dark eyes and long ears set high. The gait is smooth and ground-covering, and at a gallop all four feet leave the ground twice in a stride.

## In the Land

Desert sighthounds belong to the tent-camps of the Khazryn and the tribal confederations of [[place-dunhardsrtrgn|Dunhara Desert Region]], and are kept by the Bizarian lords of the plateau. A hound lives with its master's family, sleeps in the tent and rides on a camel in the hunt. A few escaped hounds live as strays along the desert margin and hunt hare and scavenge at the edge of the camps. The hounds are slow to breed and the tribes keep the lines of the best ones in memory.

## Key Behaviors

Sighthounds are quiet, reserved and independent, closer to cats than to eager working dogs. They bond with one handler, tolerate strangers and show attachment by lying near him. Movement at the edge of sight sets them off, and nothing in training stops a hound that sees a running hare, a gazelle or a blowing cloth. Between hunts they lie almost motionless for hours. They hunt with falcons and, in rich households, with cheetahs: the falcon flushes the quarry, the hound courses and holds it, and the rider comes up. A hound that is struck or shouted at withdraws and will not work.

## What the Tribes Do

Most dogs are unclean in the desert and are kept outside the tent as guards, but a sighthound is clean and sleeps beside its master, eats from the household food and is mourned like kin. Its lineage is remembered as a family's is. A chief's hound is a mark of his honor, and a well-bred puppy given from one chief to another is an offer of peace. In the hunt a falcon spots the quarry, the hound runs it down and holds it, and a rider comes up to make the kill. Strangers keep their hands from another man's sighthound.

## Signs

- A lean, long-legged hound lying like a dropped cloak on a cushion at the door of a tent.
- Narrow, deep tracks with the toes splayed, in a line across a gravel flat and then a long gap.
- A hound that rises quietly, stares at the horizon and begins to tremble.
- A hare killed cleanly and left unmarked on the sand beside a rider's stirrup.
- A line of three riders on camels, a falcon on a wrist and a hound running alongside.

## Combat Strategy

A desert sighthound is not a combat dog. It lacks the mass, the jaw strength, and the aggressive temperament of guard breeds. It will not attack humans on command, it will not defend property, and it has no interest in confrontation for its own sake. Against threats, a desert sighthound's instinct is to evade — it is fast enough to outrun virtually anything that might threaten it, and it will use that speed without hesitation.

However, a desert sighthound engaged with prey — or defending itself when cornered — fights with the lean, efficient violence of a coursing predator. It strikes at the quarry's legs and flanks with snapping bites delivered at speed, aiming to trip or hamper rather than to deliver a killing blow. Against larger prey that has been brought to bay, it circles and darts, keeping the quarry's attention divided until the hunter arrives. A desert sighthound will not hold a quarry like a bulldog or tear like a wolf — it harasses, exhausts, and contains, functioning as one element of a coordinated hunting system rather than a solo killer.

A desert sighthound defending its master — the one circumstance in which it will stand and fight rather than flee — is a different animal entirely. The bond with the primary handler overrides the self-preservation instinct, and a desert sighthound that perceives a direct threat to its person will interpose itself with a fierce, barking aggression that surprises people accustomed to the breed's usual reserve. It is still not a mastiff, but a thirty-five-to-sixty-five-pound dog moving at the speed of a desert sighthound and targeting the face and hands is not a negligible threat.

## Attack Methods

### Coursing Bite

The desert sighthound's hunting attack. At full speed, the dog delivers a snapping bite to the quarry's hind legs, flanks, or hamstrings, aiming to trip or slow rather than to kill. The bite is quick and precise — a single snap delivered in passing, the dog already moving away before the quarry can retaliate. Against hare-sized prey, the coursing bite may be sufficient to break the neck; against gazelle, it serves to slow the quarry until the hunter can close.

### Darting Snap

In close combat or when defending its handler, the desert sighthound darts in, delivers a rapid bite to hands, face, or throat, and retreats before a counter-blow can land. The speed of the attack makes it difficult to intercept, and the dog's lateral agility allows it to change direction instantly, attacking from a new angle before the target can reorient.

## Special Abilities

### Coursing Speed

The desert sighthound is the fastest sustained runner among domestic animals — faster than any horse over a mile, and capable of maintaining near-maximum speed for distances that exhaust both horses and cheetahs. This speed is not merely raw velocity but includes the ability to match a fleeing gazelle's evasive turns stride for stride, adjusting course at full run with a flexibility that heavier dogs cannot achieve. A desert sighthound in open pursuit is one of the most beautiful and efficient running machines in the natural world.

### Sighthound Vision

The desert sighthound hunts primarily by sight, not scent. Its eyes are adapted for detecting motion at extreme distance across open terrain — a running hare at half a mile, a fleeing gazelle at a mile or more. This visual acuity, combined with the dog's elevated eye position (tall for its weight), makes it a very good detection platform. A hunting party accompanied by desert sighthounds effectively has a perimeter of visual surveillance that extends far beyond human sight, as the dogs' body language — the fixed stare, the lifted ears, the shift of weight onto the forelimbs — signals the presence and direction of prey long before the human eye can find it.

### Sacred Hound

The desert sighthound's unique ritual status in desert culture provides practical benefits beyond the spiritual. A desert sighthound is welcome in tents and settlements where other dogs would be driven out, giving the hunter and his dog access to hospitality that a handler with a common cur would be denied. The genealogies of prized desert sighthound bloodlines are known and valued across tribal boundaries, and a desert sighthound of distinguished lineage is a social passport — proof that its owner is a person of quality, worthy of respect and hospitality under the [Laws of the Well]{.name data-type="lore/law"}. Conversely, mistreatment of a desert sighthound is a serious social offense, and a guest who kicks a host's desert sighthound has committed an insult that may have consequences far beyond the immediate discomfort.

### Desert Endurance

Like all desert animals, the desert sighthound is adapted to extreme arid conditions. It requires less water than other dogs its size, tolerates heat well, and maintains condition on sparse, irregular feeding — hunting dogs are traditionally fed once daily, and a desert sighthound can fast for days without significant performance loss. This metabolic efficiency, combined with its speed and hunting skill, means a desert sighthound can survive indefinitely in the desert as a feral animal — a fact that cuts both ways, since escaped or orphaned desert sighthounds form semi-wild packs that compete with jackals and foxes for small prey.

## Attributes

- **Strength:** 7-10 (1d4+6)

- **Endurance:** 9-14 (1d6+8)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 14-19 (1d6+13)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 8-13 (1d6+7)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 5-8 (1d4+4)
