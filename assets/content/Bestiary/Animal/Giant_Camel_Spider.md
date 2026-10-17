---
shortcode: gntcmlsp
name: {full: Giant Camel Spider, aliases: []}
type: being
subType: creature
description: "A fox-sized desert solifugid, neither venomous nor web-spinning, that compensates with pale bristling chitin and overwhelming jaw muscle."
tags: [animal, image-needed]
data:
  packFolder: animals
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
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+6
    end: 1d4+5
    dex: 1d6+12
    agl: 1d6+13
    per: 1d6+10
    aur: 1d4+3
    wil: 1d4+7
    rea: 1d4+3
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 23}}
    - name: Shearing Jaws
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: mandible
          name: Shearing Jaws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Cephalothorax, shortcode: cephzone, probWeight: 1}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 1}
          - {name: Legs, shortcode: legszone, probWeight: 1}
        parts:
          - name: Cephalothorax
            shortcode: cephpart
            bodyZoneCode: cephzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Cephalothorax
            shortcode: cephloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 15, calc: "15"}
      reachBase: 0
      bodyScaleBase: 0.88
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[gntcmlsp|Giant Camel Spider]]{float=top-left}

Out past the firelight something is wheezing, fast and wet, like a bellows worked too hard. Then a dry rattle starts up under the wheeze and climbs in pitch until it buzzes. It comes into the light running: a pale thing the size of a fox, flat to the sand, its legs a blur, and two long forelimbs held up off the ground in front of it, reaching and groping at the air as if it were trying to touch you from across the fire. Most of the front of it is jaw, two amber shears as long as your finger that open and close with a clack you can hear over the wheezing. The joints of its legs are thin enough to show the firelight through them. It does not slow down.

# Dossier {#dossier}

The Giant Camel Spider is the common terror of the desert camps: a pale, bristled, ten-legged hunter the size of a fox, eleven to eighteen pounds and three or four feet across the legs, which has no venom and spins no web and makes up for both with speed, a pair of shearing jaws and no fear of anything. It lives at every well of the [[place-hskrrgn|Khoshiqor]], in the vaults and hollow walls of the dead cities, in the refuse pits at the rim of [[place-qisomrktcmp|Qiiso]] and on the margins of the dunes in the [[place-hekardesert|Desert of Hek'ar]] and [[place-dunharargn|Dunhara Region]], and at night it comes in to a camp's scraps and to whatever sleeps beside them. It is one of the three creatures a desert guide names first to a newcomer, with the [[being-bnscrpn|Bone Scorpion]] and the [[being-sndstlkr|Sand Stalker]], and it is the one he names first of the three, because it is the one that comes to the fire.

A Giant Camel Spider seldom kills a grown man. It takes a finger, a strip off a calf or the face of a sleeper, the wound festers, and the man dies of the wound a week later in the next stage of the road. It takes goats, dogs and, in the buried towns, small children.

## Presentation

The body is low and flat, a compact forepart and a bulbous rear joined by a narrow waist, covered all over in coarse pale bristles from sand-tan to dusty cream that feel for movement in the air and the ground. Under the bristles the chitin is bone-white, thin enough at the leg joints to show the dark blood moving through them in firelight. It has ten limbs. Eight are walking legs, long and angular, each tipped with a small claw. The front pair are feelers, held up and forward as it runs and never still, and they are the thing people remember. The jaws are two vertical pairs of shears, dark amber and harder than the rest of it, which work independently, one gripping while the other saws. A raised knob above them carries two small eyes, and the eyes over the working jaws make something very like a small, blank face. After a sprint the abdomen pumps visibly and the animal wheezes through the breathing-holes in its sides.

## In the Land

Camel spiders live wherever there is shade by day and food by night: under the trough-stones of [[place-yemokwell|Yemok]], in the hollow walls of the towers at [[place-wilud|Vulud]], in the buried streets of the [[place-ruinsarkor|Ruins of Arkor]], and in the old vaults under [[place-velkunar|Veshkun]], where they come up at dusk to hunt the settlement's goats and the people of [[place-vahurdash|Vahurdash]] keep their cellar doors barred. Each holds a small range round its shelter and walks it every night. A camp brings them in from a long way off, because a camp means scraps, warmth and the shade of tents and bodies, and the wells, where every caravan halts, have the most of them. They are found throughout the [[place-khzryndsrtrgn|Khazryn Desert Region]] and the Dunhara wherever there is stone or ruin to shelter in, and are rare on open sand far from water.

## Key Behaviors

A camel spider shelters through the heat of the day under a stone, in an old burrow, in a gap under fallen masonry, or inside a boot, a pack or a bedroll, and comes out at dusk. It hunts by running prey down: it feels a footfall through the ground, turns, and sprints, and it seizes with the feelers and starts sawing with the jaws before the prey has finished turning round. It eats lizards, rodents, birds, scorpions, snakes, carrion and camp scraps, and it walks into an occupied tent if it smells food there. In the heat it runs for the nearest shade, and on open sand the nearest shade is often a man, and so at noon it seems to chase people. Threatened, it rubs its jaws together into a buzzing rattle that rises as its temper does. A spider that is rattling has decided not to leave.

## What the Caravans Do

Every desert traveler learns the same habits on the first night: shake out the boots before putting them on, shake out the blanket before lying down on it, and bury the scraps or carry them well away from the sleepers. A camp at a well posts a man with a torch and a stick through the dark hours. At Yemok the bucket-men have a rhyme about the hour to draw, and they keep to it. At Qiiso a trader who walks out past the rim to relieve himself in the dark takes a light, and a few who did not have not come back. The [[lore-sowidesclt|Sovidur]] kill a camel spider on sight with a heel or a stick and do not give it a second thought; the bites they fear, because a bite is washed with salt water and burned with a hot knife-point the same night or it rots. The jaws of a big one are mounted by the armorers of the oasis towns as the blades of a shearing tool and sold to travelers who want a story.

## Signs

- A wet, rapid wheezing from the dark beyond the fire, stopping and starting.
- A dry buzzing rattle, rising in pitch, from under a stone or a pack.
- Small tracks of eight points around the scraps of last night's meal, and the scraps gone.
- A goat or a dog found at dawn with flesh sheared from its legs in neat strips.
- A boot that rattles when it is picked up.

## Combat Strategy

The spider rushes. It closes in a flat sprint faster than a man can run, grips with its feelers, and saws with its jaws at whatever is nearest: an ankle, a hand, a face on a bedroll. It does not bite once and let go. A cornered spider rattles, rears with its jaws spread, and charges if the threat stays. Its weakness is its wind: after half a minute of fighting it overheats, slows and wheezes, and that is the time to kill it or drive it off. A hurt or cornered spider grows wilder and fights to the death. A heavy boot, a stick and a torch are enough for one; the danger is the one nobody saw coming.

## Attack Methods

### Shearing Jaws

The jaws close on flesh and work, one shear holding while the other saws, crushing and tearing at once. They carry no venom. The wound is ragged and bleeds freely, and a finger is gone in a few strokes.

## Special Abilities

### Blinding Speed

From a standing start the spider runs faster than a man over fifteen or twenty yards. A man who hesitates for a breath has it on him.

### Shade-Seeker

In the heat it runs for the nearest shadow, which is often a man, a tent or a camel. The man it runs at cannot tell this from an attack, and for him there is little difference.

### Wound Fouling

The jaws carry the rot of the carrion it eats. An uncleaned bite reddens and swells within a day and spreads up the limb, and on the road, where water is short, a bite kills more men than a spider ever did.

### Tremorsense

The bristles and feelers read footfalls through the ground and movement in the air, so the spider hunts as well in full dark as by day, and nothing walks up on it unnoticed.

### Rattle

Rubbing the jaws together, the spider makes a harsh buzz heard thirty paces off, rising as its temper rises, with the body reared and the jaws spread to their full gape. It is a warning, and the charge follows it.

## Attributes

Strength
: 7-10 (1d4+6)

Endurance
: 6-9 (1d4+5)

Dexterity
: 13-18 (1d6+12)

Agility
: 14-19 (1d6+13)

Perception
: 11-16 (1d6+10)

Aura
: 4-7 (1d4+3)

Will
: 8-11 (1d4+7)

Reasoning
: 4-7 (1d4+3)

Creativity
: 3-6 (1d4+2)

## Variant: Deep Desert Patriarch

The guards of the Dunhari caravans tell of worse in the deep desert: camel spiders the size of a large dog or a small pony, thirty-five to fifty-five pounds, living in the cave systems under the great mesas and the vaults of buried cities, where the cool lets them grow for decades on bats and cave rodents. The oldest are said to be pale almost to transparency, with the organs moving visibly beneath the chitin. No one has brought one in alive.

A GM who uses one gives it Strength 1d6+9 and Endurance 1d6+8, Dexterity and Agility as the common spider, and Perception 1d6+12. Its jaws crush a forearm and its feelers hold a man who is trying to get away. The jaws of a confirmed patriarch are worth a good deal to the Dunhari armorers, who mount them as weapons, and to the alchemists, who grind them for compounds of heat and endurance; the few men who have shown such a pair have not wanted to talk about how they got them.
