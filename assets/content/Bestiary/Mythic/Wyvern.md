---
tags:
  - mythic
  - image-needed
  - creature
name:
  full: Wyvern
  aliases: []
description: "A two-legged, dragon-like flier of mountain peaks and high plateaus, lacking true draconic cunning but formidably lethal on the wing."
shortcode: wyvern
type: being
data:
  icon: icon-wyvern
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: []
  gender: null
  species: null
  age: null
  birthday: null
  height: null
  weight: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: mythic
  attrRollFormula:
    str: 1d6+21
    end: 1d6+15
    agl: 1d6+7
    per: 1d6+14
    snt: 1d4+1
    aur: 1d4+1
    wil: 1d6+10
    rea: 1d4+2
    cre: 1d4
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 24 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 4 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 2 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 60 } }
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 3
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 7
            aspect: piercing
          lengthBase: 4
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
            armorReduction: 2
    - name: Talon
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 6
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: 6
            aspect: edged
          lengthBase: 2
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
    - name: Tail
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 8
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 3
            aspect: piercing
          lengthBase: 5
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
            poison: true
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 4
          - name: Left Wing
            shortcode: lwingzone
            probWeight: 3
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Right Wing
            shortcode: rwingzone
            probWeight: 3
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: rwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase:
              blunt: 7
              edged: 8
              piercing: 7
              fire: 9
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase:
              blunt: 8
              edged: 9
              piercing: 8
              fire: 10
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: &a2
              blunt: 4
              edged: 5
              piercing: 4
              fire: 6
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: &a1
              blunt: 8
              edged: 9
              piercing: 8
              fire: 10
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: *a1
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: *a2
          - name: Left Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 3
            protectionBase: &a3
              blunt: 8
              edged: 9
              piercing: 8
              fire: 10
          - name: Left Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 2
            protectionBase: &a4
              blunt: 7
              edged: 8
              piercing: 7
              fire: 9
          - name: Right Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 3
            protectionBase: *a3
          - name: Right Foot
            shortcode: rhftloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 2
            protectionBase: *a4
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 6
              edged: 7
              piercing: 6
              fire: 8
      weight:
        base: 600
        calc: "600"
      reachBase: 0
      bodyScaleBase: 1.66
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 150
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The cliff face erupts. What you took for stone and shadow unfolds as wings — great bat-like membranes stretched from foreleg to hind leg — and the creature launches into open air with an impossible grace for something so heavy. The body is obscene: a serpent's trunk scaled in sickly yellows and browns, ending in a barbed tail that curves like a scorpion's sting. The wings, fully spread, are wider than a house, thin-skinned but plainly strong enough to carry that bulk. The head is purely reptile, a hunter's wedge of bone and muscle with teeth made for tearing and eyes like molten gold, burning with the intelligence of a hunting animal. Smoke — actual smoke — seeps from its nostrils. It circles without any hurry, looking at you the way a hunter looks at prey already marked for death. Then the tail twitches, and you see the barb at its tip glistening with something thick that catches the light. The air smells of sulfur and copper and something organic and wrong. The wyvern makes a sound — not a roar but a steady rumbling hiss that shakes in your bones and carries a promise of fang and sting. It begins to dive.

# Dossier {#dossier}

The wyvern is a beast of the high air — a two-legged, dragon-shaped creature of five to eight hundred pounds with a wingspan of eighteen to twenty-four feet, met in mountains, on high plateaus and among lone peaks where the thermals will hold it up all day. It is not a dragon. It has no breath and no great intelligence; it is an animal, clever enough to hunt with a plan and to be very dangerous, but driven by appetite rather than by anything more complicated. Wyverns are solitary and hold vast vertical territories across several peaks and valleys. They keep no hoard, having no mind for one, but they do gather bright things to build and decorate the nest. They live past a century and breed perhaps once in ten years, so the young are precious and guarded fiercely. Travellers meet them crossing a high pass, climbing above the treeline, or approaching the old ruins on clifftops where wyverns like to nest, and a wyvern on its own ground is about as dangerous as an encounter gets.

## The Body

Everything on it is for the hunt. A serpentine body six to eight feet long under thick overlapping scales of yellowed amber, sick green or muddy brown, often banded or spotted darker — natural armour. A head too big for the body, wedge-shaped, heavy in the jaw, with forward-facing eyes for judging a dive; conical teeth for piercing and tearing. Two stout hind legs carry the front of the body and end in claws each as long as a finger. The wings are the forelimbs remade — bone struts stretched with leathery membrane in dusky colours, veined with blood vessels that glow faintly when the wing is spread. The tail is the third weapon: long, muscular, and tipped with a barb as long as a dagger that never stops dripping a neurotoxin strong enough that small animals caught in its fumes drop where they stand.

## The Sky

A wyvern roosts on a cliff face, in a high cave, or in an old building on a height, wherever the updrafts are good, because riding thermals is how it flies for hours without effort and how it climbs to heights where lesser creatures cannot breathe, and from there it can put itself anywhere in its territory at will. It hunts by day, when the thermals are strongest and it can see farthest. It climbs high, picks its prey, and comes down at better than eighty miles an hour on something that never saw it. It prefers big flyers — eagles, griffins, wyverns from the next territory — and takes ground prey when it offers. It herds: it drives an animal toward the killing ground it likes and strikes there. A wyvern eats an enormous meal at a sitting and may not hunt again for weeks. It learns. It remembers a hunter who has attacked it before, remembers where the game gathers, and works out its own variations on the hunt.

## The Hunt

It fights from above. It keeps its height, strikes from above and behind where the defence is weakest, and goes back up if pressed. Against something on the ground it makes pass after pass, each a wound rather than a commitment — the hind claws raking across the target at the speed of the dive, opening deep wounds — and it works the prey toward a cliff edge, a narrow valley, some obstacle that limits where it can run. Against another flyer of its own size it uses its agility and the reach of the tail to keep its distance while it hurts, or closes to grapple with hind claws and body and twist the opponent into a position where the tail can land. At close range the jaws bite for bare flesh, break bones, and can take a limb at one snap. Once the barb has gone in, the wyvern turns from careful to relentless and follows the prey as the venom takes its strength away. Only a desperate wyvern — starving, or defending a nest with young in it — gives up its height to fight on the ground, and then it uses teeth and claws and tail with nothing held back.

## The Barb

The tail moves faster than the eye. It whips round to drive the barb home and pump the venom in, and the venom paralyses, weakens and kills in minutes if nothing is done to counter it; those who survive the sting are left weak and easily hurt for some time after.

## Attributes

- **Strength:** 22-27 (1d6+21)

- **Endurance:** 16-21 (1d6+15)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 15-20 (1d6+14)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 2-5 (1d4+1)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 3-6 (1d4+2)

- **Creativity:** 1-4 (1d4)
