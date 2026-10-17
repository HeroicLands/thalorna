---
shortcode: bnscrpn
name: {full: Bone Scorpion, aliases: []}
type: being
subType: creature
description: "A massive pale desert scorpion up to nine feet long, an ambush predator of supernatural patience that hibernates through weeks of famine."
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
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+9
    dex: 1d6+10
    agl: 1d6+8
    per: 1d6+11
    aur: 1d4+5
    wil: 1d6+7
    rea: 1d4+3
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Stinger Strike
      type: skill
      system:
        shortcode: sting
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: sting
          name: Stinger Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Pincer Crush
      type: skill
      system:
        shortcode: pincer
        subType: combattechnique
        masteryLevelBase: 53
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: pincer
          name: Pincer Crush
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
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
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[bnscrpn|Bone Scorpion]]{float=top-left}

The well-head is a ring of cut stone with a strip of shade on its eastern side, and the shade is the first thing anyone wants after the march. Your guide stops you at the edge of it with the butt of his staff. He points. What you took for a drift of pale sand against the stone has a tail, held in a high curve over a body the color of old bone, and the two pincers resting in front of it are as long as your forearms. It has not moved. The guide says it will not move for you either, as long as you keep off the shade, and he walks the string round to the sunlit side to water.

# Dossier {#dossier}

The Bone Scorpion is the large scorpion of the [[place-khzryndsrtrgn|Khazryn Desert Region]], seven to nine feet from the tip of the raised tail to the reach of the pincers and three feet tall on its legs, colored the pale cream of weathered bone so that it matches the sand and the stone it rests on. It lives at the wells and along the camel road, in the shade of any wall, and it is one of the three creatures a desert guide names first to a newcomer, with the [[being-gntcmlsp|Giant Camel Spider]] and the [[being-sndstlkr|Sand Stalker]]. Those two come to a camp. The scorpion stays where it is and lets the camp come to it.

It is an ambush hunter with a long patience. A scorpion that has fed sleeps under the sand for weeks, and one that is hungry sits in the shade of a well-ring or a tumbled wall from dusk until the heat of the next morning and takes what comes to drink: hares, foxes, a stray goat, a camel's foreleg, a man who sat down in the shade without looking.

## Presentation

The body is a broad, plated thorax and a segmented abdomen that curves up and back into the tail. Every plate is chitin, cream or sickly yellow-white, thin enough at the joints to show a little light through. Six to eight small black eyes sit in clusters on the head and move constantly. The pincers are heavy and toothed along their inner edges, made for crushing and shearing; the tail segments shrink toward the tip, where the stinger is a tapering shaft of hard chitin as long as a dagger, with a bead of clear venom at its point. At rest the animal is nearly invisible against pale rock. Moving, it is silent, and the one sound it makes is the pincers rattling together, like dice in a cup.

## In the Land

Bone Scorpions live throughout the sand seas and gravel reaches of the [[place-hskrrgn|Khoshiqor]] and along the whole length of the camel road, wherever there is water and shade within a night's walk of each other. The deep wells of the road, the ruined walls of the dead cities and the stone rings of [[lore-ownedoasis|an owned oasis]] all shelter them. The tribes know the hours when a scorpion is out and keep their own camps well back from a pool; the owners of a spring lid a shaft that one lives in, and say so when asked.

Each adult holds a range of four to six miles and walks it at night on a regular round, so a well that had a scorpion last season has one this season, and a guide who knows the road knows which side of which wall to keep off.

## Key Behaviors

A Bone Scorpion spends the day buried in a burrow under a rock or a drift, fifteen to twenty feet deep and only as wide as its body, and comes out at dusk. It hunts by feel: the hairs on its legs read a footfall through the ground from forty feet, and it tastes the air for blood. It takes living prey where it can, follows a wounded animal for a long way, and drags a kill back to the burrow to eat over several days. It fights until it cannot move; pain does not turn it. The scorpions mate once a year in spring, and a female carrying eggs is bolder than any other scorpion and attacks a man on sight.

## What the Tribes Do

The [[lore-sowidesclt|Sovidur]] do not kill a scorpion that keeps to its wall. A string waters on the sunlit side of a well and nobody sits in a strip of shade he has not looked at. A camp is pitched two hundred paces from the water, and the night-herd keeps the animals from drifting back to drink.

The venom sells. A full sac, taken fresh and sealed in wax, is bought at [[place-qisomrktcmp|Qiiso]] by factors who carry it south to the alchemical faculty at [[place-caldar|Kaldar]], where it is a paralytic in small doses and a poison in large ones. A scorpion is taken for its venom by a hunter working alone with a long forked pole and a sack, in the last hour before dawn when the animal is slowest, and most of the men who do it have been stung once.

## Signs

- A strip of shade at a well that the camels will not walk into, however thirsty.
- Drag-marks in the sand leading under a rock, with a scatter of small bones at the mouth of the hole.
- A hare or a fox lying dead beside water with no mark on it but a single puncture.
- A faint, dry rattle from a wall at dusk, like dice shaken in a cup.
- A burrow mouth no wider than a man's thigh, going down steeply under a boulder.

## Combat Strategy

The scorpion strikes from stillness. It waits in the shade or under a hand's depth of sand with only the eyes and the tail-tip exposed, lets the prey come within reach, and drives the stinger into it. Against several opponents it keeps them off with the tail and takes them one at a time, and it learns a shield-arm or a spear-side within a few passes and strikes round it. Outnumbered or hurt, it runs for the burrow over sand or broken rock faster than a man can follow, and nothing gets it out of the burrow once it is in.

Its weak points are the leg joints and the soft folds between the tail segments, and a scorpion out on open sand in daylight is sluggish and half blind.

## Attack Methods

### Stinger Strike

The tail snaps forward over the body and drives the stinger into the target. The point goes through leather and finds the gaps in mail, and the venom follows it. The wound weeps venom for some minutes afterward, so a victim who struggles against the tail takes more than one dose.

### Pincer Crush

The pincers close on a limb or a body and shear. A man held in one pincer has a broken arm; a man held in both is pulled toward the mouthparts and torn.

## Special Abilities

### Tail Whip

Against an opponent at its side or rear, the scorpion swings the tail flat without using the sting, hard enough to knock a man down.

### Neurotoxic Venom

The venom deadens the nerves and then the muscles. One sting weakens a man within minutes and a second or third leaves him unable to stand; a horse or a camel takes longer to go down and goes down just the same. The paralysis passes in a day or two if the dose was small.

### Sand Camouflage and Burrowing

At rest against pale stone or sand the scorpion is nearly invisible. It digs with the pincers and the forelegs, fast enough to be under the surface in a few breaths, and its burrows are long, narrow and hard to find.

### Sensory Acuity

It reads footfalls through the ground, warmth through the air and blood on the wind. In its own country nothing walks up to it unnoticed.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 10-15 (1d6+9)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 9-14 (1d6+8)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 6-9 (1d4+5)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 3-6 (1d4+2)
