---
shortcode: bovine
name: {full: Bovine, aliases: []}
type: being
subType: creature
description: "A massive domesticated herbivore bred for docility and labor, standing up to six feet at the shoulder yet capable of goring the careless."
tags: [animal, creature]
data: {packFolder: animals, icon: cow, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+29
    end: 1d6+15
    agl: 1d4+6
    per: 1d6+11
    snt: 1d4+1
    aur: 1d4+1
    wil: 1d6+7
    rea: 1d4+1
    cre: 1d4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 32}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 2}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 51}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 45
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: blunt}
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
            roles: [vital]
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
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
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
      weight: {base: 1500, calc: "1500"}
      reachBase: 0
      bodyScaleBase: 2
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

![[bovine|Bovine]]{float=top-left}

The pasture gate has been chained against the lane, and in the field behind it a red-brown bull stands by himself with his head low, his tail lashing and a front hoof scraping the turf. The cows have drifted to the far hedge. The bull's breath smokes in the cold, and he has not taken his eyes off you since you reached the gate.

# Dossier {#dossier}

Bovines are the cattle of the farms and herds of every farming country, four to six feet at the shoulder and eight hundred to two thousand pounds, the bull heaviest. Villages keep them for the plough, the milk and the hide, and the herding clans of the [[place-sthrnsvnhs|Southern Savannahs]] reckon their wealth in them. A herd is placid, but a bull in the autumn rut, a cow with a young calf and an animal that has been struck or cornered all charge.

## Presentation

A heavy-bodied animal on four thick, pillar-like legs, almost all muscle under a short coat that runs from black to white, brown or red. Bulls are bigger than cows, with a thick neck and heavy shoulders. Horns depend on the breed: some herds are polled, and others carry horns up to three feet long, sweeping out and forward. The face is broad, the nose large and often paler than the coat, and the eyes dark, set at the sides of the head. The tail ends in a tassel. A warm, earthy smell hangs about a herd, stronger in damp weather.

## In the Land

Cattle are kept in every farming country in the setting, from the river-prince estates of [[place-velanthrgn|Velanthia]] to the pasture-uplands of the [[place-southrnmrch|Southern March]] and the herding country of the [[place-sthrnsvnhs|Southern Savannahs]]. A farm's herd grazes the home meadow by day and is penned or tethered at night; a village's cattle are driven to the summer pasture under one herder. Bulls are kept apart from the cows in a separate pen, a stout paddock or a field with a deep ditch.

## Key Behaviors

Cattle live as a herd, and a single animal cut off from it becomes nervous. They graze, chew the cud and sleep in short bouts. Cows guard a new calf closely and charge any threat. Bulls turn territorial in the autumn, and some become more aggressive with age, learning that a charge works. Cattle recognize people, and a bull that has been struck or cornered by one person looks for him again. If one animal bolts in fright the rest follow, and a stampede wrecks fences, crops and houses.

## What the Herders Do

The savanna clans measure wealth in cattle and keep them with great care, and a herd is the first thing a clan brings to a bargain. In the farming countries a bull is kept for breeding and nothing else, and a herder will not turn him loose in a field where a path crosses it. Oxen draw the plough and the heavy wagon. Cows are milked, and the hide, horn and tallow go to the tanner, the comb-maker and the chandler. On the road, a drover goes ahead of a herd to clear the way, and a traveler who finds a bull in a lane waits at a gate until the herder arrives.

## Signs

- A worn track between pasture and byre, churned to mud at each gate.
- Dung pats in the road, one or two days old, and the smell of a herd behind a hill.
- A bull pawing the ground at the corner of a field, head low, tail lashing.
- A bell on a dun cow, ringing slowly across a valley at dusk.
- A fence rail broken outward, with hair on the splinters.

## Combat Strategy

Most cattle defend themselves by charging and using their horns as primary weapons. A horned bovine will lower its head, accelerate forward, and attempt to gore an opponent on the horns or bash them with the skull behind. If it successfully impacts a target, it will continue forward, attempting to drive the opponent backward and downward. Bulls with experience fighting (from jousting with other bulls during rut) are notably more tactical—they will feint, test an opponent's stance, and exploit openings. In groups, cattle instinctively form a protective circle around calves or wounded members, with adults facing outward. A startled herd will stampede if the path of flight is clear—and a stampeding herd is one of the most destructive forces in nature. A single mounted rider cannot reliably stop a panicked stampede; the momentum and mass is simply too great.

## Attack Methods

### Horned Charge

The bull lowers its head and accelerates toward the target, seeking to gore with its horns or bash with the crown of its skull. The force is sufficient to crack ribs and can drive an opponent backward several feet. A successful impact may lift the target off the ground and hurl them backward. Horned cattle are dramatically more dangerous than hornless ones.

### Trample

Once an opponent is on the ground or flanked, the bovine may deliberately step on them with legs like pillars, each hoof impact delivering the full weight of the animal concentrated into a small area. This attack is particularly devastating against armored opponents, as the impact can crush plates and joints beneath the weight.

### Kick

When attacked from behind or to the side, a bovine will sometimes turn and deliver a powerful rear-leg kick. This is less precise than a charge but can catch unwary opponents and inflict significant trauma.

## Special Abilities

### Herd Instinct and Stampede

A group of cattle amplifies individual aggression through herd behavior. When one panics, others follow. When one charges, others may do the same. A stampeding herd becomes an unstoppable force capable of destroying structures and killing dozens of people. This ability manifests more dramatically with larger herds—a stampede of fifty cattle is dramatically more dangerous than five, which may stop of their own accord if the threat is removed.

### Surprising Strength and Resilience

Despite their herbivorous nature, bovines are very strong and robust. Their muscle and bone density exceed that of predators of comparable size. The thick skin and body structure provide some resistance to both slashing and piercing attacks, and blunt force trauma to the body is less likely to incapacitate them than cutting attacks.

### Keen Senses and Herd Awareness

Cattle have excellent hearing and smell, and they rely on their collective senses to detect threats. A herd will often notice predators or humans long before an individual animal would, communicating through vocalizations and body language. A nervous herd becomes a warning system for others in the area.

## Attributes

- **Strength:** 30-35 (1d6+29)

- **Endurance:** 16-21 (1d6+15)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 12-17 (1d6+11)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 2-5 (1d4+1)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 2-5 (1d4+1)

- **Creativity:** 1-4 (1d4)
