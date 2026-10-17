---
shortcode: ostrich
name: {full: Ostrich, aliases: []}
type: being
subType: creature
description: "The largest living bird of the desert, a flightless seven-to-nine-foot desert runner carried on a pair of devastatingly powerful legs."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-cassowaryhead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+10
    end: 1d6+9
    dex: 1d6+10
    agl: 1d6+11
    per: 1d6+12
    aur: 1d4+5
    wil: 1d4+7
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Power Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Power Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Wing Buffet
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Wing Buffet
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
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
          - {name: Body, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreclaw
            shortcode: lforelegpart
            bodyZoneCode: torsozone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Foreclaw
            shortcode: rforelegpart
            bodyZoneCode: torsozone
            roles: *a1
            canHoldItem: false
            probWeight: 2
          - name: Left Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Right Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
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
          - name: Left Foreclaw
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreclaw
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Leg
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
      weight: {base: 250, calc: "250"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 100
        leaguesPerWatch: 8
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[ostrich|Ostrich]]{float=top-left}

Across the shimmering flat a flock of tall birds is walking with an absurd, stalking dignity, necks swaying, a herd of gazelle grazing among them. The biggest, a black bird with white plumes on its wings and tail, stops and stares in your direction with an enormous eye. Then it spreads its wings, lowers its head and breaks into a run, its legs covering fifteen feet at a stride, and the dust of its going hangs in the air.

# Dossier {#dossier}

The Ostrich is the largest bird, a flightless runner seven to nine feet tall and two hundred twenty to three hundred fifty pounds, on the open plains, gravel wastes and scrub margins of the [[place-dunhardsrtrgn|Dunhara Desert Region]], the dry edge of the [[place-khzryndsrtrgn|Khazryn Desert Region]] and the southern grass of the [[place-sthrnsvnhs|Southern Savannahs]]. It outruns a horse and a kick can kill a lion. The desert cities buy its plumes, eggs and leather, and some settlements keep tame birds. Attempts to ride them have injured more riders than they have carried.

## Presentation

A massive, oval body carried horizontally on two thick, powerful legs. The males are black with white plumes on wings and tail and the females and young dusty gray-brown. The wings are too small for flight and serve for balance in running and for display. The neck is long and flexible and nearly bare, and the head is small and flat with a broad, blunt beak and the largest eyes of any land animal. The feet have two toes, the inner one large with a heavy, straight claw three to four inches long. At a full sprint the stride is fourteen to sixteen feet.

## In the Land

Ostriches run the open plains, gravel wastes and scrub margins of the Dunhara Desert, the dry edge of the Khazryn and the southern grass of the Southern Savannahs. A flock of five to fifty walks together, often among gazelle or oryx, whose alertness it shares, and it sees threats from a long way off with its height. A male holds a nest-scrape in the sand, and several females lay in it.

## Key Behaviors

Ostriches live in loose flocks of five to fifty, often with gazelle or oryx, using the mammals' alertness and offering their own height. They eat seeds, shoots, grass, flowers, insects and small reptiles, and swallow stones to grind them, and they drink when they can but live long without. In the breeding season the male holds ground with a display, swaying his neck and waving his wings in turn and booming. He mates with several females, who all lay in a single scrape in the sand holding thirty to sixty eggs, three to five pounds each; the brown female sits by day and the black male at night. A nesting bird charges threats it would otherwise flee, and the male guards the chicks. A bird that lies flat with its neck along the ground at the sight of danger only looks as if it had buried its head.

## What the Desert Settlements Do

The desert cities buy the white plume feathers for fans and heraldry, and the eggs are carved and kept as water vessels. A single egg feeds a family. Some settlements keep tame birds for plumes and eggs and for the hides, which are tough and supple. Hunters cannot outrun a bird, so they set out at dawn, when it is cool, or drive it into a snare. A nesting bird charges anything that comes near, and the people keep away from nests. A kick from an ostrich breaks a man's leg.

## Signs

- Large, two-toed prints in a pair, widely spaced, in a line across a sand flat.
- A shallow scrape in the sand holding thirty or more cream-colored eggs.
- A tall shape on the skyline moving at a run with its wings half-open.
- A booming call at dawn, low and carrying, from a male in display.
- Pale feathers snagged in a thorn bush.

## Combat Strategy

An ostrich's first response to a threat is to run, and this response is extremely effective — at sustained running speeds, an ostrich outpaces any horse and most other land animals. The bird can maintain this speed for extended periods, covering miles without apparent fatigue. However, an ostrich that is cornered, defending a nest, or simply feeling aggressive (males in breeding condition are unpredictable) will stand and fight, and the fight is startlingly violent for an animal most people associate with eggs and feathers.

The attack is the kick — a single, devastating forward strike with one leg that delivers the bird's full body weight behind the heavy inner claw. The kick is aimed forward and downward, driven by the same massive thigh muscles that power the sprint. An ostrich kick to the torso of a human can break ribs and rupture organs; a kick to the head can be immediately fatal. The bird may also run at a target and deliver the kick at the end of a charging sprint, combining the momentum of a two-hundred-plus-pound body at full run with the focused force of the claw strike.

Against mounted attackers, an ostrich can be surprisingly tactical — it changes direction sharply, using its superior maneuverability at speed to evade the horse while looking for an opportunity to kick at the rider's exposed legs. A horse struck by an ostrich kick can be lamed or panicked, unseating the rider and creating an opportunity for a follow-up attack.

## Attack Methods

### Power Kick

The ostrich's primary and essentially only weapon. One leg drives forward in a snapping kick that delivers the full force of the bird's body weight behind the heavy inner claw. The kick targets whatever is closest — the torso, thighs, and head of a standing human, the legs and flanks of a horse. The claw can tear through leather and light armor, opening long, deep gashes, and the blunt force behind the kick is sufficient to break bones even if the claw doesn't connect cleanly. A single well-placed kick can incapacitate or kill a human.

### Charging Trample

A running ostrich that collides with a human-sized target delivers an impact equivalent to being struck by a large, fast-moving animal — because that is exactly what is happening. The bird's weight, combined with its running speed, generates enough force to knock a target flat, and the trampling that follows — broad feet with hard claws stamping down — compounds the initial damage.

### Wing Buffet

A minor attack used primarily in threat displays and close-quarters confrontations. The ostrich swings its vestigial wings in heavy, sweeping blows that lack the force of the kick but can stagger a target, obstruct vision, and create the space the bird needs to deliver the kick. The wing bones are surprisingly hard and the impact is comparable to being struck by a heavy, feathered club.

## Special Abilities

### Desert Runner

The ostrich is the fastest creature on two legs and one of the fastest sustained runners on land. At full sprint it achieves speeds that exceed a galloping horse, and it can maintain a fast running pace for far longer than any horse can sustain a gallop. The stride length — fourteen to sixteen feet — and the elastic tendon system in the legs allow the bird to cover ground with great energy efficiency. In the open desert, where terrain is flat and sight lines are long, an ostrich that has decided to leave simply cannot be caught by anything on hooves.

### Sentinel Height

At seven to nine feet tall, an ostrich's eyes are the highest natural vantage point on the open desert plain — higher than a mounted rider's. Combined with the largest eyes of any land animal, this height advantage gives the ostrich a detection range across flat terrain that exceeds anything else in the ecosystem. Herds of gazelles and oryx that associate with ostrich flocks benefit from this elevated surveillance, and experienced desert travelers read ostrich alarm behavior — the sudden raising of the head, the alert fixation in one direction — as an early warning of approaching danger.

### Egg and Feather Economy

The ostrich is one of the few wild animals that supports an active trade economy without being domesticated. Feather hunters, egg collectors, and leather traders all pursue ostriches, and the plume trade in particular connects desert hunters to luxury markets in the great trading cities and beyond. A single male ostrich's white plume feathers can be worth more than the animal's meat, making feather collection a specialized and sometimes dangerous profession — approaching a live ostrich closely enough to assess its plumage is an activity with a meaningful injury rate.

### Gizzard Stones

Ostriches deliberately swallow stones, which accumulate in their powerful gizzard and grind food mechanically. This adaptation allows them to digest tough, fibrous desert vegetation that other animals cannot process, extending their foraging range into areas where the available food is too coarse for mammals. Occasionally, an ostrich will swallow something more interesting than a stone — small metal objects, jewelry, coins, and other shiny items lost in the desert have been recovered from ostrich gizzards, making the birds the subject of both superstition (some nomads consider them lucky) and practical treasure-hunting.

## Attributes

Strength
: 11-16 (1d6+10)

Endurance
: 10-15 (1d6+9)

Dexterity
: 11-16 (1d6+10)

Agility
: 12-17 (1d6+11)

Perception
: 13-18 (1d6+12)

Aura
: 6-9 (1d4+5)

Will
: 8-11 (1d4+7)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
