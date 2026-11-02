---
shortcode: coyote
name: {full: Coyote}
type: being
subType: creature
description: "A lean, quick, wary canine of the open plains and brush, a scavenger and small-game hunter that lives alone, in pairs or in loose family packs and is seldom caught."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-wolfhead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+5
    end: 1d6+11
    dex: 1d6+8
    agl: 1d6+12
    per: 1d6+13
    aur: 1d6+8
    wil: 1d6+9
    rea: 1d4+6
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 25}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -3, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, clench: true}
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
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
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
      weight: {base: 30, calc: "30"}
      reachBase: 0
      bodyScaleBase: 0.62
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 130
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

A thin, gray-yellow dog slips across the track ahead and stops with one forefoot raised. Its ears are too big for its narrow face, its tail hangs low, and its eyes are yellow. It looks at you for exactly as long as it takes to decide that you carry no meat, and then it trots off, glancing back over its shoulder. From the ridge behind it a high yipping voice rises, then a second, then a third, until the whole hillside seems to be laughing.

# Dossier {#dossier}

The Coyote is a lean, adaptable wild dog of twenty-five to thirty-five pounds, two feet at the shoulder, that hunts voles, rabbits and birds and takes carrion wherever it finds it. It ranges the grassland and brush of [[place-tenlayargn|Tenlaya Region]], the dry plateaus west of the mountains, and the mesa and canal country of the [[affiliation-teyumi|Turquoise People]] in [[place-teyumirgn|Teyumi Region]]. It is the animal painted on the shields of one warrior society of the Grass People, and the south names that whole nation after it.

## Presentation

A slender dog with a narrow muzzle, large upright ears and long legs, in a grizzled coat of buff and gray with rust on the legs and ears and a pale throat and belly. The bushy tail has a black tip and is carried low when the animal runs. The eyes are yellow, and the whole look of the animal is of something quick, thin and watchful.

## In the Land

Coyotes live wherever there is open ground and cover, on the grass, the brush, the edges of the mesas and the dry plateaus. They den in banks and hollows and old badger holes, and they follow the great herds to eat what the wolves and hunters leave. They come to the edges of villages and camps for scraps, drying racks and unguarded caches, and they live closer to people than any other wild canine.

## Key Behaviors

Coyotes hunt alone or in pairs, by listening for voles in the grass and pouncing, by running down rabbits, and by working a carcass over. A family pack of three to six brings down a fawn or a pronghorn calf by relay. They are wary: a coyote rarely stands to fight, and trots out of sight at the first sign of trouble. They call to one another at dusk and dawn with yips, barks and a rising howl, and a few animals can sound like a dozen. They steal from caches and racks, avoid traps and bait with great skill, and learn quickly. A cornered coyote or a mother at her den fights hard, and a pack does not tolerate a stranger at the den.

## What the Grass People Do

The [[affiliation-tenlaya|Grass People]] hold the coyote to be clever and unreliable. The Coyote band of the [[place-watotenlargn|Long Grass]], the greatest raiding band of that country, paints coyotes on its shields, and southern traders who met that band first named the whole nation the Ts'okum Ts'omalil, the Coyote People, after it. Villages keep coyotes from their drying racks and corn stores with fences, dogs and watchers, and the pelts are worn and traded as trim. The animal is rarely hunted for meat.

## Signs

- Narrow, oval tracks in a straight line, four toes with claw marks, smaller than a wolf's.
- Scat of hair, seed and small bone left on a trail crossing or a high rock.
- A cache dug open and the contents scattered, with a trail of tracks leading away.
- A chorus of yips and howls at dusk, far more voices than animals.
- A rabbit's remains beside a hole, neatly cleaned, the skin turned inside out.

## Combat Strategy

The coyote's strategy is to avoid a fight. It watches, circles and waits, and it takes what it can from a distance. When it must fight, it fights fast: a bite to the leg or hand and a retreat out of reach, then another. A pack harries a larger animal in relays, one or two rushing in while the others wait, and tires it out by repeated dashes. A coyote bitten or struck first runs. A single coyote that has bitten and been beaten off does not return.

## Attack Methods

### Bite

The coyote snaps at the nearest exposed limb, the hand, the calf or the throat of a small animal, holding for an instant and letting go. Its teeth are small and sharp, and it prefers a quick, repeated nip to a long grip.

### Hit and Run

The coyote dashes in, bites and is gone before a counterblow lands, circling for another run. Standing in the open against a coyote is a way to be bitten many times; a wall at the back and a stick in the hand end the matter.

### Pack Relay

Several coyotes take turns at a larger animal, each running in to snap and falling back as another comes. The prey tires, and the pack closes in at last on an animal that cannot defend its legs.

## Special Abilities

### Wary Instinct

The coyote notices a trap, a snare, a bait or an ambush with uncanny skill, and avoids it. It tests a strange scent before it trusts it, and does not go where it has been hurt.

### Chorus Voice

A few coyotes calling at dusk sound like a large pack. The animals use the effect to mark territory and to scatter prey, and it makes the real number of animals hard to judge.

### Scavenger's Stomach

A coyote eats carrion, rotten meat and refuse with no ill effect, and survives lean seasons that kill animals which need fresh kills.

## Attributes

Strength
: 6-11 (1d6+5) — Light and weak next to a wolf; bite is a nip, not a grip

Endurance
: 12-17 (1d6+11) — Trots for miles at a steady pace and lives lean in poor seasons

Dexterity
: 9-14 (1d6+8) — Pounces and digs with precision

Agility
: 13-18 (1d6+12) — Fast off the mark and quick to turn; one of the fastest wild dogs

Perception
: 14-19 (1d6+13) — Sharp hearing, smell and sight; finds a vole under snow by sound

Aura
: 9-14 (1d6+8) — A wild presence, but a small one; the Grass People attach a trickster's reputation to it

Will
: 10-15 (1d6+9) — Cautious rather than brave, but persistent about food

Reasoning
: 7-10 (1d4+6) — Learns traps, habits and the places where people leave scraps

Creativity
: 7-10 (1d4+6) — Adapts to new ground, new prey and the edges of villages
