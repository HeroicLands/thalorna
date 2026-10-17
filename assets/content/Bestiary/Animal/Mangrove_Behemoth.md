---
shortcode: mngbhmth
name: {full: Mangrove Behemoth, aliases: [Vaarvanu]}
type: being
subType: creature
description: "A reptilian predator of some fifteen hundred pounds and up to eighteen feet long, its mottled gray-green bulk topped by a broad head whose jaws unhinge alarmingly wide."
tags: [animal]
data:
  packFolder: animals
  culture: kaliharanclt
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
    str: 1d6+11
    end: 1d6+10
    dex: 1d6+7
    agl: 1d4+7
    per: 1d6+10
    aur: 1d4+6
    wil: 1d6+8
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Powerful Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Powerful Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Strike
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
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
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
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
            roles: [manipulator]
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
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
      weight: {base: 1500, calc: "1500"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 35
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[mngbhmth|Mangrove Behemoth]]{float=top-left}

The path along the mangrove edge is packed mud and roots, and halfway along it there is a log lying across it that was not there this morning. Then the log lifts a head as broad as a shield and looks at you. It is a lizard, gray-green and warty, as long as a fishing boat, and it does not hurry. A forked yellow tongue slides out, tastes the air in your direction, and slides back. The smell reaches you a moment later, sweet and rotten, like a carcass left a week in the sun, and you notice that the mud round its jaws is stained dark.

# Dossier {#dossier}

The Mangrove Behemoth, _vaarvanu_ in [[skill-kalihrlng|Kalihari Language]], "the one that holds the water", for an animal that lies still at the water's edge for a day, is the great monitor lizard of the coastal lowlands of [[place-kaliharargn|Kalihara Region]], fifteen to eighteen feet from snout to tail, with a broad flat head, a mouth that opens wider than the head looks able to, and a bite that poisons whatever it does not kill outright. It lives in the mangrove and the jungle edge behind the island's eastern shore, among the gardened villages, and it is one of the creatures the island is known for and nobody abroad has seen alive. It is patient, solitary and slow until it strikes, and then it is very fast for a few strides. It eats anything it can catch or find dead, from crabs to wild pigs to a buffalo calf, and a grown behemoth can swallow a goat whole. It holds the shore, and the [[being-mbrydct|Ember-eyed Cat]] holds the forest behind it; the cat is the only forest beast that competes with it for carcasses.

## Presentation

A low, heavy body slung between four bowed, thick-clawed legs, and a tail nearly as long again, carried dragging. The hide is coarse and warty, gray-green to near black, banded paler in the young and plain in the old, and it hangs in loose folds at the throat and the shoulders. The head is long and flat with small eyes set high, and the lips close over a row of curved, serrated teeth like a saw's. The yellow tongue flickers constantly. Close to, the animal smells of carrion, because its mouth always carries the remains of the last meal, and the saliva that drips from it is thick and pinkish. It looks sluggish because it mostly is: it lies in the sun for hours and walks with a swinging, deliberate gait. Its speed in the first rush, over a dozen yards, is what kills people.

## In the Land

Behemoths hold the coastal lowlands of eastern Kalihara, the strip of mangrove, mudflat and jungle edge between the sea and the steep ridges that close off the interior. They are thickest round the river mouths, where the tide strands fish and the villages' pigs and goats come down to drink, and on the islets off the eastern shore, where they swim across between the tides and share the beaches with the [[being-slndtrtl|Island Turtle]]. Each animal keeps a range of a few miles, with a burrow in a bank or under a root-mass for the cool of the night, and a few sunning places it uses every morning. They do not climb the ridges and they are not met in the terraced valleys above them. Round [[place-ilovanu|Ilovanu]] they come to the edge of the cleared ground and no further, but the harbor-wardens tell every foreign factor not to walk the mangrove path beyond the last warehouse at dusk, and the warning is about behemoths.

## Key Behaviors

A behemoth hunts by waiting. It lies beside a game trail, a wallow or a village's watering place, still as a log, sometimes for a whole day, and lunges when something passes within a few strides. It bites once, hard, and often lets go. The animal it has bitten runs off and does not get far: the bite festers and poisons, and within a day or two the victim is down, feverish and bleeding from a wound that will not close. The behemoth follows it by smell, tasting the air with its tongue, and feeds when it finds it. Several behemoths may gather at one large carcass, and the biggest eats first while the others wait their turn with a great deal of hissing. Young behemoths live in the trees for their first years to keep out of the way of the old ones, which eat them.

## What the Villages Do

The coastal villages live beside behemoths as they live beside the monsoon, as part of the island they are bound to keep in balance, and they do not hunt them out. They fence their gardens and pig-pens with a stake wall the height of a man's chest, cut from the dead prop roots of the [[lore-klhrflora|Stilt Tree]], whose stakes do not rot, keep children off the river paths at dawn and dusk, and draw water in company. A village that loses a person to a behemoth puts the matter to its council. The council decides whether that one animal has learned to take people, and if it has, the men kill it with long spears from behind a stake fence, and the village cleans and burns the body. The villages wash every behemoth bite at once with seawater and a bark poultice whose making they keep among themselves, and they do not let a bitten person sleep alone. Foreigners at Ilovanu have offered good prices for the hide and the skull. The harbor-wardens do not let either leave the island.

## Signs

- A broad, flattened drag-mark across mud or sand, with the clawed prints of four splayed feet on either side of it.
- A stench of carrion where nothing is visibly dead, strongest on still mornings near the water.
- Pigs, goats or deer found dead in the brush with a single deep, ragged bite, swollen and fly-blown.
- A burrow in a riverbank wide enough for a man to crawl into, with the earth outside it worn smooth.
- Hissing, low and long, from a thicket where carrion birds are gathering.

## Combat Strategy

A behemoth fights the way it hunts. It lets prey come to it, lunges from close range, bites once and tries to keep the bitten animal moving away so that the venom does the rest. Against a party it picks the nearest or the slowest, bites, and then backs off into cover with its tail swinging to keep the others at a distance. If it is pressed it stands and fights, and a behemoth that has stood its ground is hard to turn: it shrugs off cuts that would drive off a leopard and keeps coming. It does not chase anyone who has not been bitten. It does follow a trail of blood, sometimes for a day or more, and a party that has left a wounded companion's track behind it may find the behemoth waiting by its camp.

## Attack Methods

### Powerful Bite

The behemoth lunges with its jaws wide and closes them on a leg, an arm or a flank, and the serrated teeth tear as it pulls back. The wound is deep and ragged and bleeds heavily, and whatever the bite does at once is only part of the harm.

### Tail Strike

The tail swings sideways like a felled tree rolling, low and heavy, and knocks a man off his feet or breaks his shin. The behemoth uses it to clear space round itself when it is surrounded, and to sweep away whoever is behind it.

## Special Abilities

### Infectious Bite

The behemoth's mouth carries venom and rot together. A bitten man feels the wound burn and swell within the hour, runs a fever by nightfall, and keeps bleeding from a wound that will not clot. Untreated, the poisoning grows worse over days, and a bite that would be nothing from a dog can kill. Cleaning the wound at once and keeping it clean is the best defense against it.

### Stealth Predator

For an animal of its size the behemoth is very hard to see when it lies still. Its color matches mud, roots and shadow, it can wait without moving for hours, and in the mangrove or the jungle edge a traveler usually sees it only when it moves.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 11-16 (1d6+10)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 8-11 (1d4+7)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
