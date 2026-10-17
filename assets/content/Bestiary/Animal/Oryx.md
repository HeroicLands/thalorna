---
shortcode: oryx
name: {full: Oryx, aliases: []}
type: being
subType: creature
description: "A large, powerful desert antelope surviving the most barren arid wastes where no other large herbivore can endure."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+10
    dex: 1d6+9
    agl: 1d6+10
    per: 1d6+11
    aur: 1d6+7
    wil: 1d6+11
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Horn Lance
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Horn Lance
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Trample
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Trample
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: blunt}
          lengthBase: 1
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
      weight: {base: 200, calc: "200"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 100
        leaguesPerWatch: 7
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[oryx|Oryx]]{float=top-left}

Out on the white gravel a single pale shape stands motionless on a dune-crest, long horns rising from its head in two straight, dark lines that seem to join into one. It is facing the sun, as if at ease. It watches you without moving. When you come within a stone's throw it lowers its head and presents the points, and does not give way.

# Dossier {#dossier}

The Oryx is the great antelope of the deep desert, three and a half to four feet at the shoulder and two hundred to four hundred fifty pounds, living in the sand seas and gravel wastes of the [[place-dunhardsrtrgn|Dunhara Desert]], the [[place-hekardesert|Desert of Hek'ar]] and the far [[place-khzryndsrtrgn|Khazryn]], where no other large herbivore survives. It can go weeks without water, takes its moisture from its food and lets its body heat rise to a level that would kill other animals. The desert tribes hold it sacred as a lesson in enduring what cannot be endured. A white desert animal with a single horn, in traveler's tales, is this animal seen from the side.

## Presentation

A large, heavily built antelope, white to cream with dark chocolate-brown or black markings: a broad blaze from the forehead through the eyes, dark patches on the nose and cheeks, a dark stripe along the flank and dark stockings on the lower legs, like a heraldic painting. The coat is short and dense and reflects heat. The horns are long and straight or nearly so, rising in near-parallel lines to sharp points, two and a half to three feet long, ridged on the lower half. Both sexes have them, and the female's are sometimes longer and thinner. The neck is thick and the legs sturdy, with broad hooves for soft sand. The tail is long, dark and tufted.

## In the Land

Oryx drift across the gravel plains, salt flats and dune margins of the Dunhara Desert, the Desert of Hek'ar and the far reaches of the Khazryn, following the rain that brings the desert grasses. A herd of ten to forty crosses hundreds of miles in a year. It grazes in the cool hours, rests through the heat in the open with its pale flank to the sun and gathers at the few remote oases in the driest months.

## Key Behaviors

Oryx live in herds of ten to forty, ranging hundreds of miles after the scant rain that brings up grass and herbs. Rank within a herd is kept by horn display and sparring, and both sexes fight, so a cow is nearly as dangerous as a bull. They store heat by day and shed it at night, pass thick urine and nearly dry dung, and reach deep desert where no water lies. They feed in the cool hours and rest in the open at midday facing the sun. An oryx that sees a predator often stands and presents its horns instead of running.

## What the Tribes Do

The desert tribes honor the oryx for its endurance. Poets use it in verses about perseverance, and the straight horns are hung in meeting-tents as a sign of steadfastness. It is also hunted: the quarry ranges over trackless wastes and stands to fight with three feet of horn, so a successful hunt is told for years. The hunters follow the herd on camels for days and carry water for the animals. The meat is dried for the road, the hide is made into water-skins and sandals, and the horns are carved into cups and tent-poles.

## Signs

- Cloven prints in a line across a gravel pan, deeper than a gazelle's and rounder.
- A pale animal standing motionless on a dune-crest with two long horns like a single line.
- A sun-bleached skull on the sand with its horns still whole.
- Dung dropped dry and hard, in a heap, at the edge of an oasis.
- A herd standing in the open at noon, all facing the sun.

## Combat Strategy

The oryx is one of the most dangerous antelopes in the world, and experienced predators treat it with considerable respect. When threatened, an oryx does not automatically flee. It turns to face the threat, lowering its head to bring the horns into a forward-facing defensive position, and waits. If the threat approaches, the oryx will charge — a short, explosive rush that drives the horns forward with the full power of the neck and shoulders. The horns are long enough and sharp enough to impale a lion, and documented kills of large predators by oryx horn strikes are not rare.

Against mounted hunters, the oryx's strategy is to outlast rather than outrun. It moves at a steady, ground-covering trot that it can sustain for hours — not fast enough to escape a galloping horse, but the horse cannot gallop for hours and the oryx can trot all day. Hunters who pursue an oryx into the deep desert often find themselves exhausted, dehydrated, and dangerously far from water, with the oryx still moving steadily ahead, apparently unaffected. Those who close the distance face an animal that has stopped running and is now facing them with lowered horns and no intention of retreating further.

In herd defense, oryx form a loose outward-facing line with calves behind them, presenting a wall of horns that deters all but the most desperate predators. A steppe lion or cheetah that attacks an alert oryx herd is taking a serious gamble.

## Attack Methods

### Horn Lance

The oryx's primary weapon. The animal charges with head lowered and drives one or both horns into the target in a powerful, lunging thrust. The horns are long enough to reach vital organs, and the point concentration means they can penetrate hide, muscle, and even light armor. A direct hit to the torso of a human or a predator can be immediately fatal. The strike is delivered with a snapping upward or lateral motion of the head that maximizes penetration and can lift a smaller target off the ground.

### Sweeping Slash

Rather than a direct thrust, the oryx sweeps its head laterally, using the length of the horns to slash across a wide arc. This attack is used against multiple threats or against an attacker attempting to circle to the flank. The horn tips are sharp enough to open deep, bleeding wounds even with a glancing contact.

### Trampling Charge

An oryx that has knocked its target down — whether through a horn strike or a collision — will trample with its broad hooves, stamping repeatedly on the fallen target. The hooves carry two to four hundred pounds of concentrated force, and an oryx that has committed to aggression does not stop until the threat stops moving.

## Special Abilities

### Desert Imperishable

The oryx's thermoregulatory and water-conservation adaptations make it effectively immune to the environmental conditions that limit every other large animal in the desert. It does not need to drink for weeks, it tolerates temperatures that would prostrate a horse or camel, and it can sustain a ground-covering pace across terrain that offers no shade, no water, and no forage visible to human eyes. In the deep desert, the oryx simply outlasts everything — predators, hunters, and the desert itself.

### Lethal Horns

The oryx's horns are among the most effective natural weapons carried by any herbivore. Unlike the curved horns of other antelope, which are designed for wrestling and display, the oryx's straight, pointed horns are optimized for penetration. They function as lances — rigid, sharp, and backed by a charging body weight that drives them deep into whatever they hit. Predators that have survived encounters with oryx carry the scars as evidence that this is not a prey animal to be taken lightly.

### Herd Vigilance

Like gazelles, oryx benefit from collective awareness — many eyes and ears scanning the sparse desert landscape where concealment is nearly impossible. The herd's alertness, combined with the individual oryx's willingness to stand and fight rather than scatter, makes a healthy oryx herd a poor target for any predator. Most predation occurs on calves, the elderly, or individuals separated from the herd by injury or drought.

### Unicorn Profile

When viewed from the side — the most common perspective at distance in flat desert terrain — the oryx's two parallel horns appear to merge into a single, long, spiraling lance rising from the forehead of a pale, almost white animal. This optical illusion, combined with the oryx's habitat in remote, shimmering desert landscapes where heat haze distorts vision, has generated centuries of traveler accounts describing single-horned beasts of supernatural beauty and grace. Whether true unicorns exist somewhere in the deep desert is a matter of theological debate in some circles; what is certain is that the oryx is responsible for most of the stories.

## Attributes

Strength
: 12-17 (1d6+11)

Endurance
: 11-16 (1d6+10)

Dexterity
: 10-15 (1d6+9)

Agility
: 11-16 (1d6+10)

Perception
: 12-17 (1d6+11)

Aura
: 8-13 (1d6+7)

Will
: 12-17 (1d6+11)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
