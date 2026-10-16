---
shortcode: nmspt
name: {full: Nemespite, aliases: []}
type: being
subType: creature
description: "An intelligent, venomous insectoid predator that hunts in coordinated packs across warm highlands, caves, and blighted lands."
tags: [dreadspawn]
data:
  packFolder: dreadspawn
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    end: 1d4+5
    dex: 1d4+10
    agl: 1d4+12
    per: 1d4+8
    aur: 1d4+5
    wil: 1d4+6
    rea: 1d4+5
    cre: 1d4+5
    str: 1d4
  items:
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 2}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 13}}
    - name: Venomous Sting
      type: skill
      system:
        shortcode: sting
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: sting
          name: Venomous Sting
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -4, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Thorax, shortcode: thoraxzone, probWeight: 1}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Thorax
            shortcode: thoraxpart
            bodyZoneCode: thoraxzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 8
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
          - name: Sting
            shortcode: stingloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: -4, edged: -5, piercing: -6, fire: -4}
      weight: {base: 0.1, calc: "0.1"}
      reachBase: 0
      bodyScaleBase: 0.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 80
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[nmspt|Nemespite]]{float=top-left}

The heat comes up off the rocks in waves, and the slope is loud with insects. One of them lands on the stone beside your hand: a thing no longer than your finger, shaped like a wasp with a scorpion's curled tail, banded electric blue and acid green and blood red, and the bands seem to crawl. It does not fly off when you move. It turns, and raises the tail. Then you hear it, under the general noise of the slope: a rising hum, coming from every crevice at once, and the air above the rocks begins to glitter with wings, dozens of them, hundreds, all turning toward you together.

# Dossier {#dossier}

The Nemespite is a small dreadspawn, four to six inches long, half wasp and half scorpion, banded in bright warning colors, with a sting that numbs, then paralyzes. One alone is a vicious insect. A hive of them is something else: a dozen to several hundred acting as one mind, herding prey, choosing the weakest and stinging it helpless. They live in warm, rocky highlands, and a great hive holds the lower slopes of the [[place-yandazhrng|Yanda Zohiring]], the high range on the Okharik frontier that the tribes say is the dwelling of the gods. Like every dreadspawn they were made and they cannot breed. A hive was made all at once; it does not grow, and every nemespite killed is gone for good.

## Presentation

A nemespite is a narrow, segmented body sheathed in iridescent chitin, with two pairs of clear wings and a long tail that curls up over the back to a curved stinger. It is banded in electric blue, acid green, blood red and sickly yellow, and the bands shift slightly even when it is still. Its eyes are large and faceted, its legs long and fine. Alone it buzzes like any wasp; a hive hums, a rising, falling drone that comes from everywhere at once, and when the hive is roused the hum climbs to a whine. A crushed nemespite smells sharp and bitter.

## In the Land

The Yanda Zohiring rises beyond the settled Okharik country, and the shamans of the [[affiliation-yenorzhrng|Yenor Zohiring]] say it is where the spirit world lies closest to the mortal one. The nemespite hive holds the hot, broken lower slopes on its approaches: ravines, boulder-fields and sun-baked rock walls, full of crevices to shelter in. They hunt in the heat of the day, when they are fastest, taking lizards, birds, rock hyraxes and goats, and anything else that climbs through. In the cool of the night and the chill of the high slopes they are sluggish and stay in the rock. Above a certain height, where the cold comes, there are none.

## Key Behaviors

Nemespites hunt by day. A few scouts range ahead, and when they find prey the hive comes, and it fights as one: the swarm brackets its prey, herds it toward bad ground, picks out the weakest animal and stings it again and again until it cannot move, and then feeds on it, alive, slowly. A stung animal stays conscious while it is eaten. Threatened, the hive releases a bitter-smelling cloud that blinds, confuses, and calls every nemespite within a long way. It defends its slopes against everything that comes, and it tells the difference between something passing through and something coming up.

## What the Shamans Do

Few of the Yenor Zohiring shamans go to the Yanda Zohiring at all, and the ones who do go up through the hive's slopes before dawn, in the cold, when the nemespites are torpid in the rock, and they are above the hive's ground by the time the sun warms the stone. A herder who loses goats on the lower slopes moves his herd and does not go after them. The accounts of shamans who claim to have reached the [[lore-orclbonesspr|Oracle of Bones]] do not agree on where it is, and the herders of the frontier say one reason is that every shaman takes a different way round the hive. Okharik healers buy the stingers of dead nemespites, ground fine, to deaden the pain of setting a bone.

## Signs

- A rising, falling hum on a hot slope that comes from the rocks themselves.
- Goats, hyraxes and birds lying on the rocks alive and unable to move, covered in small puncture marks.
- Small husks of brightly banded insects in a crevice, and nothing else living there.
- A sharp, bitter smell in the air of a ravine, strongest on the hottest days.
- Herders' paths that go far round a stretch of mountainside for no visible reason.

## Combat Strategy

A single nemespite strikes fast, stings, and withdraws to let the venom work. A few work in pairs to bracket their prey. A whole hive fights with a cunning that seems more than an insect's: it herds a party toward ravines and loose rock, concentrates on whoever is slowest or most hurt, and shifts to protect the hive's crevices. It releases its pheromone cloud to blind and confuse and to call more of itself. Cold breaks it: at night or in a chill wind the swarm slows and falls apart. Smoke and fire scatter it.

## Attack Methods

### Venomous Sting

The tail lashes down and the stinger drives in, fast and deep, and injects venom. The sting itself is no worse than a hornet's; the venom is what matters, and a swarm stings many times.

## Special Abilities

### Pheromone Cloud

A threatened hive releases a bitter cloud that stings the eyes and the lungs and confuses the senses, and calls every nemespite within a long way to the place.

### Hive Coordination

Three or more nemespites together act as one predatory mind, coordinating their attacks with a precision no swarm of insects should have.

### Rapid Regeneration

For its size, a nemespite heals very fast. Small punctures and tears close within heartbeats; only a grave wound or burning stops it.

### Paralytic Venom

The venom does not kill quickly. It numbs and then paralyzes, and a victim stung many times lies helpless and fully aware while the hive feeds.

### Cold Torpor

Cold makes nemespites sluggish and torpid. In the cold before dawn they barely move, and heat makes them faster and fiercer.

## Attributes

- **Endurance:** 6-9 (1d4+5)

- **Dexterity:** 11-14 (1d4+10)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 6-9 (1d4+5)

- **Will:** 7-10 (1d4+6)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 6-9 (1d4+5)

- **Strength:** 1-4 (1d4)
