---
tags:
  - mythic
  - image-needed
  - creature
name:
  full: Unicorn
  aliases: []
description: "An impossibly rare and elusive mythic beast of incorruptible purity, so seldom seen that scholars doubt its existence altogether."
shortcode: unicorn
type: being
data:
  icon: icon-unicorn
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
    end: 1d6+13
    agl: 1d6+7
    per: 1d6+16
    snt: 1d4+3
    aur: 1d6+12
    wil: 1d6+12
    rea: 1d4+6
    cre: 1d4+6
    emp: 1d6+7
    mor: 1d6+8
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 24 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 19 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 5 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 11 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 66 } }
    - name: Horn
      type: skill
      system:
        shortcode: horn
        subType: combattechnique
        masteryLevelBase: 71
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: horn
          name: Horn
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 6
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 11
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
            enchanted: true
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 8
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 5
            aspect: blunt
          lengthBase: 3
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
            trample: true
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 52
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
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 4
            modifier: 4
            aspect: piercing
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
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 3
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 2
          - name: Torso
            shortcode: torsozone
            probWeight: 7
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 4
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 1
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
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
            probWeight: 3
            protectionBase: &a1
              blunt: 4
              edged: 3
              piercing: 1
              fire: 3
          - name: Horn
            shortcode: hornloc
            bodyPartCode: headpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 0
            probWeight: 1
            protectionBase: *a1
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: &a2
              blunt: 5
              edged: 4
              piercing: 2
              fire: 4
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a1
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a1
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: *a2
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: *a2
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: *a2
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 5
            protectionBase: *a1
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: *a2
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 5
            protectionBase: *a1
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 0
              fire: 2
      weight:
        base: 700
        calc: "700"
      reachBase: 0
      bodyScaleBase: 1.66
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 160
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

There is a moment before you see it when you feel the forest go wrong — not dangerous, but strange, as if something has stepped into it that does not belong to the ordinary run of things. The light bends a little. For an instant you cannot make your eyes focus on the space between the trees. Then she steps through, and the world settles.

She is a horse — that is your first and lasting impression — a horse of such absolute perfection that every horse you have ever seen becomes, in memory, a rough sketch. Her coat is a white so pure it seems to glow in the green-dappled shade, without blemish, with a sheen that shifts between silver and soft pearl as the light touches her. Her mane and tail move like spun silk, and every step is liquid; there is no wasted motion in her and nothing earthy. Neither the hard perfection of a war-horse nor the beauty of a noble's palfrey: something outside those categories altogether.

And then you see the horn. It rises from the centre of her brow in a spiral, ivory shot through with veins of pale gold, tapering to a point so sharp you cannot bear to look straight at it, and it shifts as you watch — now solid, now half-translucent, now carrying a faint light of its own that has nothing to do with the sun. She turns her head toward you and the horn turns with her, and you understand, with a certainty that goes around reason, that you are in the presence of something magical in the old sense: a being that lives partly outside the world's rules. Her eyes meet yours. There is intelligence in them, and it is not a horse's clever awareness but something far older and more knowing. She does not look at you as prey, or as herd. She looks at you as one thinking creature looks at another, and in that look is the weight of centuries and a kind of endless, patient sadness.

# Dossier {#dossier}

The unicorn is the rarest of the mythic beasts, so rare that there are scholars who doubt it exists outside the wish that it should. Those who have met one do not doubt. A grown animal stands about four feet eight inches at the shoulder, runs about seven feet from nose to tail and weighs some seven hundred pounds — a horse of fine breeding in every measurement, built for distance and speed rather than for pulling, and so exactly proportioned that a sculptor could take it for a standard. The horn is eighteen inches to two feet long. It is neither bone nor mineral; nothing a smith or a mage has tried on a shed fragment has told them what it is.

## The Horn

The horn is the seat of whatever the animal is. Touched to water it makes the water clean — brackish water sweetens, poisoned water clears. Touched to food it takes out rot and poison. Touched to a person it cures sickness, draws poison from the blood and closes wounds, and it is not healing as a physician or a priest understands healing: the thing touched is changed toward purity rather than repaired. A unicorn can do this to each thing or person once in a day, and no one has found a limit to how many things it can do it to; one with reason enough could clean the wells of a city. It works only on what is bodily fouled. It does not mend a conscience, it does not lift a curse of the spirit, and it does not raise the dead.

## Where It Goes

Unicorns live three hundred years and more. They keep to the oldest forests, the high valleys and the deep places people have not reached, and a single animal may range over hundreds of square miles on a circuit that follows the seasons and the sky rather than hunger. They are solitary without being unfriendly to each other; two that meet touch horns and part. The young stay with the mother about five years. They do not graze. They eat particular things — rare herbs, flowers that open only under certain moons, a high-altitude moss that grows on old stones — and the scholarly guess is that the diet keeps the animal what it is, and that one kept from it long enough would slowly become only a horse.

They are drawn to unspoiled places and leave spoiled ones. There are accounts of unicorns quitting a valley after a massacre in it, and of one lingering for years where a village was at peace. They watch people from a distance with what looks like curiosity, and very rarely let one come close — the kind of person, the accounts say, who has never been cruel and has some respect for the ground under them. To hurt or trap one is held to curse the whole line of the one who tried.

## The Ward

Around a unicorn, for thirty to fifty feet, hostile magic weakens, curses thin, and the undead grow uneasy without being driven off. The animal does not raise this; it is simply there, though the unicorn can damp it when it chooses. The likeliest explanation for why no cage or chain holds one is this ward — a bond of magic does not take, and a fence is somehow not quite a fence. Poison, sickness and age do not touch it either, and neither does a spell meant to harm it. A blade turns or bites shallow. The only harm a unicorn takes is harm it has accepted by choosing to fight.

It almost never chooses to. A threatened unicorn runs, and it runs through close forest as if across a meadow, leaps what cannot be leapt and climbs slopes that stop a gryphon. Cornered, or standing over a foal, or holding its ground for reasons of its own, it becomes something else: the horn used as a lance, on the charge or in a rearing downward stroke; the hooves, hard as stone, breaking shields and bones; a full-gallop charge through a line of men that leaves the line broken. There are stories of wicked men whose blades would not bite and whose wounds would not open, worn down by something that was not a blow at all. Whatever is true in those stories, the ending is the same in all of them.

## The Bond

A unicorn may bind itself to one person — perhaps one person in a generation in a large realm — who has shown it a wholly clean heart. The bond is a partnership and not a service; the bonded animal carries its rider, shares what it knows through a wordless understanding, protects the person as it would a foal, and refuses an order it thinks unjust. The person changes too: sickness and poison take less hold, the speech of horses and some other animals becomes plain, hostile magic finds less purchase, wounds close faster, age comes slower, and the places they stay in grow greener. The bond outlasts the person. Unicorns have been found standing guard over a grave for centuries.

The animal is intelligent — not clever in a horse's way but aware of itself, holding centuries of memory, capable of language and of reasoning through a hard question, and capable of judging what a person has done. That judgement is what makes it dangerous to some and a great ally to a very few.

## Attributes

- **Strength:** 22-27 (1d6+21)

- **Endurance:** 14-19 (1d6+13)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 17-22 (1d6+16)

- **Scent:** 4-7 (1d4+3)

- **Aura:** 13-18 (1d6+12)

- **Will:** 13-18 (1d6+12)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 7-10 (1d4+6)

- **Empathy:** 8-13 (1d6+7)

- **Morality:** 9-14 (1d6+8)
