---
shortcode: sndstlkr
name: {full: Sand Stalker, aliases: []}
type: being
subType: creature
description: "A lithe nocturnal desert feline up to seven feet long, stalking dune fields and rocky wastes for small prey through the cool night hours."
tags: [animal]
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
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+9
    end: 1d6+7
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+12
    aur: 1d4+6
    wil: 1d6+8
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Swift Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Swift Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 0
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
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
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
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
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
      weight: {base: 130, calc: "130"}
      reachBase: 0
      bodyScaleBase: 1.11
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: [{scope: surface_cover, key: mixed_forest, mode: add, textValue: "0"}]
        disabled: false
---

# Appearance {#appearance}

![[sndstlkr|Sand Stalker]]{float=top-left}

The pool at the oasis is a sheet of black under the stars, and the goats have been drinking at its edge in a line. One of them lifts its head. Across the water a ripple of pale sand stands up and becomes a cat: long-legged, lean as a hound, the color of the dune behind it, with two amber eyes that hold the starlight and do not blink. It makes no sound. It takes three steps along the far shore, low, its wide paws leaving almost no mark, and its tail goes once from side to side. Then it is not there, and the goats are running.

# Dossier {#dossier}

The Sand Stalker is the hunting cat of the Khazryn: six to seven feet from nose to tail-tip, three feet at the shoulder, about a hundred and thirty pounds, sand-colored with faint darker markings, and very nearly invisible on the desert at night. It hunts what comes to drink. Every well, seep and [[lore-ownedoasis|owned oasis]] in the sands and the gravel reaches has a sand stalker within a night's walk of it, and the cat lies up through the day in a cave or a crevice and comes down to the water at dark for the gazelle, the hares, the birds and the stray goat that come down too. It is one of the three creatures a desert guide names first to a newcomer, with the [[being-gntcmlsp|giant camel spider]] and the [[being-bnscrpn|bone scorpion]].

It does not hunt men by habit. It hunts a man who is alone, asleep or hurt, and a cat that has once taken a man learns that men are slow.

## Presentation

A lean, long-legged cat built for a sprint and a long walk: narrow through the chest and hips, deep through the shoulder, with long legs and paws that spread wide and padded to carry it on loose sand. The coat is short and fine, pale gold or sandy tan, broken by faint darker spots along the flanks that vanish at a distance. The head is small, with large forward-set amber eyes made for the dark and tall pointed ears that turn independently. The tail is long and thick and does the work of a balancing pole at a run. It moves without a sound, and at night it is a shape the eye slides off.

## In the Land

Sand stalkers live throughout the [[place-hskrrgn|Khoshiqor]] and the [[place-khzryndsrtrgn|Khazryn]]'s other sands and gravel reaches, in the stone uplands of the [[place-dkrqrrgn|Diqraqor]] where the ravines give them cover, and along the length of the road wherever water and broken rock lie within a few miles of each other. Each cat holds a range that takes in one or two waters, marks it with scent on the prominent rocks and claw-scores on the soft stone, and drives other stalkers out. The owners of a spring know which cat waters there and at what hour, and keep their own camps well back from the pool after dark. They are seldom seen by day. A stalker seen at noon is sick, starving or guarding young.

## Key Behaviors

The cat sleeps through the heat in a cave, a crevice or a hollow under an overhang, and comes out at dusk. It goes to the water first, lies up within sight of it, and waits for something to come down and drink; when nothing comes, it walks its range through the night and hunts by scent along the trails. It takes gazelle, hares, jerboas, ground birds, lizards and the young of wild camels, and a goat or a calf from a herd that waters at night. It learns: a cat that has found a camp's goats unguarded comes back, and a cat that has killed a man watches for men. Females raise two or three kittens in a cave over a year and teach them the range.

## What the Tribes Do

The tribes water their herds by day and pen them at night inside a thorn ring with a fire and a boy awake beside it, and they do not let a goat drift down to the pool after dark. A tribe that owns a spring keeps its own sleepers well away from the water and sends nobody down alone to fill the skins at night. A cat that has started taking goats is hunted by day at its lie-up, with dogs to find the cave and three or four men with spears, and the men say a stalker in its cave fights like two cats. The pelt is the finest of the desert's furs, soft and the color of sand, and a cloak-lining of it is worth a camel at [[place-qisomrktcmp|Qiiso]]; the claws are strung as charms for children, against the dark.

## Signs

- Prints at the edge of a pool as wide as a man's palm, with no claw marks, half filled by drifting sand.
- Scent-marked rocks above a well, and fresh claw-scores on the soft stone beneath them.
- A gazelle carcass dragged into a crevice, eaten from the haunch, with the head untouched.
- Goats that bunch and face the same way at the water's edge after dark.
- A cough from the dark above the oasis, once, and then silence.

## Combat Strategy

The cat comes from behind and from cover, in silence, and the first thing its prey knows of it is the weight landing on its back. It drives a man down with the pounce, rakes with the forepaws and bites for the neck and the face, and if the man is down and still it drags him away from the firelight. If the first rush fails it breaks off at once, circles out of the light, and tries again from another side; it does not stand and trade blows with anything that can hurt it. A party that keeps its fire high, its backs together and its watch awake loses nothing to a sand stalker but sleep. A cat with kittens in the cave, or one that has been cornered, fights to the end.

## Attack Methods

### Raking Claws

The forepaws rake in quick, hooking strokes at the back, the arms and the face, opening leather and the flesh beneath. The rake comes with the pounce, and a man knocked down takes several before he can turn.

### Swift Bite

The bite goes for the throat, the face or the hand that comes up to protect them, sharp and quick, and the cat lets go and bites again rather than holding.

## Special Abilities

### Explosive Pounce

The cat launches from a crouch over twenty feet of ground and lands with its whole weight on the prey's back. A man struck from behind is usually on the ground before he knows what has hit him.

### Desert Camouflage

Still, on sand or pale rock, the stalker is invisible at a dozen paces; moving at night it is a shadow the eye cannot hold.

### Silent Prowl

The wide padded feet make no sound on sand or stone, and the cat crosses open ground at speed without a whisper.

### Night Sight and Scent

It sees in starlight as a man sees at dusk, follows a trail by smell that is days old, and knows a man it has met before by his scent.

### Reflexive Evasion

Quick and light, the stalker twists away from a thrust or an arrow that would strike a slower animal, and it is seldom where a blow arrives.

## Attributes

- **Strength:** 10-15 (1d6+9)

- **Endurance:** 8-13 (1d6+7)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 13-18 (1d6+12)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 5-8 (1d4+4)
