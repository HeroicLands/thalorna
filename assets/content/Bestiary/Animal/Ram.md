---
shortcode: ramanml
name: {full: Ram, aliases: []}
type: being
subType: creature
description: "The heavily built dominant male of sheep herds, wielding massive curved horns and a fierce temper that turns lethal during the autumn rut."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-sheep, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+13
    end: 1d6+11
    agl: 1d6+11
    per: 1d6+14
    snt: 1d4+2
    aur: 1d4+1
    wil: 1d6+12
    rea: 1d4+1
    cre: 1d4+1
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 3}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Gore
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Gore
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
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
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
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
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
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
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 300, calc: "300"}
      reachBase: 0
      bodyScaleBase: 1.28
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 120
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[ramanml|Ram]]{float=top-left}

A hundred yards up the hillside two rams stand facing each other with their heads lowered, their curled horns nearly touching. Neither moves. Then they rear and come together, and the crack of horn on horn rolls down the valley like a felled tree. They back off, shake their heads and do it again. The flock grazes on, indifferent.

# Dossier {#dossier}

The Ram is the dominant male of the sheep flocks, three to four feet at the shoulder and 250 to 350 pounds, kept on the upland pastures of the Byzarian [[place-southrnmrch|Southern March]], the [[place-graznmntns|Grazian Mountains]], the hill farms of [[place-aureldirgn|Aurèldía]] and the steppe margin of [[place-velanthrgn|Velanthia]]. It has massive curved horns and a hard temper, worst in the autumn rut. It defends the flock against predators and attacks whatever it takes for a rival.

## Presentation

A squat, densely built animal of solid muscle and bone under a thick coat of wool, white, brown, gray or black. The horns spiral out and back from the skull, up to three feet long and fifteen pounds each, of dense bone, scarred and chipped by fights. The head is massive and blocky with a strong jaw, and the neck is thick and muscular, with powerful shoulders. Males sometimes show a throat pouch, and in the breeding season give off a musk. The hooves are hard and suit rock.

## In the Land

Rams run with the flocks of the upland pastures: the dry uplands of the Byzarian [[place-southrnmrch|Southern March]], the passes of the [[place-graznmntns|Grazian Mountains]], the hill farms of [[place-aureldirgn|Aurèldía]] and the steppe margin of [[place-velanthrgn|Velanthia]]. A ram stays with his ewes in the breeding season, and outside it with other rams on the higher ground. In autumn the rams butt their way to rank, and the sound carries a mile.

## Key Behaviors

Rams are territorial and ordered by rank, settled by headbutting matches that can last for hours. In the autumn rut they charge anything they take for a threat or a rival, and outside it they are still aggressive. They guard ewes and lambs, and attack predators that come near them. They know the slopes well and cross difficult ground with confidence.

## What the Shepherds Do

A shepherd keeps one ram to a flock of thirty ewes and chooses him for his horns, his fleece and his temper. He walks the flock behind a dog, and a ram in rut is penned apart. The curled horns are carved into drinking horns, combs and the handles of tools. A ram that charges a person is killed for the pot, since it will do it again. Rams defend a flock against a dog or a fox, and against a wolf, a ram will stand in front of the ewes. Strangers in the pasture do not turn their backs on one.

## Signs

- A crack like a split log, repeated, from a hillside where two rams have met.
- A big, heavy-horned animal standing in front of a flock and watching a stranger with its head lowered.
- Hoof-scars on bare ground where rams have backed up and charged.
- A strong musky smell on a hill-pasture in autumn.
- A fence rail splintered at a ram's height.

## Combat Strategy

The ram's strategy is simplicity itself: charge directly at the opponent, build maximum velocity, and deliver impact using its horns and forehead as a battering ram. It relies on surprise, weight, and impact force rather than finesse. Once engaged, it may attempt to use its horns to hook and throw opponents or follow up a failed charge with repeated headbutts. The ram is not a tactical fighter and will not maneuver or use terrain strategically — it is straightforward violence. If pressed from the side, it will pivot and attack in a new direction.

## Attack Methods

### Charging Horn Strike

The ram builds running momentum and lowers its head, driving forward with its entire body weight concentrated behind its horns. On impact, the curled horns can pierce armor, the massive skull can shatter bones, and the creature's momentum can launch even armored opponents backward. This is the ram's signature attack, typically executed from a distance of 20+ feet for maximum effect.

### Headbutt

In close quarters where charging is impossible, the ram uses its incredibly thick skull as a bludgeoning weapon, driving its forehead and horns upward or forward into target flesh or bone. This is less devastating than the charge but is executed faster and repeats easily in melee range.

### Horn Hook

If the ram's horns connect with an opponent's torso, it may attempt to hook the horns around a limb or the torso and throw the victim, using its horns as leverage to displace the target.

## Special Abilities

### Mountain-Sure Footing

The ram is extraordinarily nimble on steep, rocky, and difficult terrain despite its heavy build. It can traverse slopes and uneven ground that would challenge a human, which makes it formidable in highland and mountainous country. It is nearly impossible to knock off balance on difficult ground.

### Charging Impact

The ram's bones are dense and incredibly thick, capable of withstanding and delivering impact forces that would shatter human bone. Its charge attack is devastating in effectiveness, converting its weight and momentum into concentrated force through its horns.

### Stubborn Determination

Once the ram commits to a charge or attack, it follows through with complete commitment, almost incapable of stopping or changing direction mid-motion. This makes it predictable but also very dangerous.

### Thermal Insulation

The thick wool coat insulates the ram against cold temperatures and provides minimal armor benefit — most attacks that penetrate the wool easily wound the creature beneath. However, in cold environments, the ram is unaffected by temperature conditions that might slow other creatures.

### Additional Information

Rams are most aggressive during autumn rutting season and less so during other times of year, though they remain inherently territorial. A castrated ram (a wether) loses much of its aggression and becomes a docile pack animal suitable for carrying loads. Rams can be lured or distracted with the presence of ewes in heat during breeding season, making such animals available as bait for hunters or a distraction tactic in combat. Rams remember previous encounters with humans and treat known aggressors with heightened suspicion and aggression on subsequent meetings.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 12-17 (1d6+11)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 15-20 (1d6+14)

- **Scent:** 3-6 (1d4+2)

- **Aura:** 2-5 (1d4+1)

- **Will:** 13-18 (1d6+12)

- **Reasoning:** 2-5 (1d4+1)

- **Creativity:** 2-5 (1d4+1)
