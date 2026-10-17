---
shortcode: unicorn
name: {full: Unicorn, aliases: []}
type: being
subType: creature
description: "An impossibly rare and elusive mythic beast of incorruptible purity, so seldom seen that scholars doubt its existence altogether."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: icon-unicorn
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
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 24}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 66}}
    - name: Horn
      type: skill
      system:
        shortcode: horn
        subType: combattechnique
        masteryLevelBase: 71
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: horn
          name: Horn
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 11, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, enchanted: true}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, trample: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 7}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
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
            roles: [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor]
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
            probWeight: 3
            protectionBase: &a1 {blunt: 4, edged: 3, piercing: 1, fire: 3}
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
            protectionBase: &a2 {blunt: 5, edged: 4, piercing: 2, fire: 4}
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
            protectionBase: {blunt: 3, edged: 2, piercing: 0, fire: 2}
      weight: {base: 700, calc: "700"}
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

The stream in the hollow runs clearer than any stream has a right to, and the birds have stopped. Between two beeches on the far bank stands a white horse that was not there a breath ago, with a spiral horn of pale gold rising two feet from the center of its brow. It is drinking. When it lifts its head the water runs off its muzzle in drops that catch light the sun is not giving, and it looks at you across the stream, steadily, for as long as it takes you to understand that it has decided to let you see it.

# Dossier {#dossier}

The Unicorn is a white horse of perfect proportion, four feet eight inches at the shoulder, seven feet long, seven hundred pounds, with a single spiral horn of eighteen inches to two feet rising from the center of its brow, and it is met, when it is met at all, in the thin places of [[place-elavendre|Élavendre]]: the deep forest and the mountain valleys where the material world and the spirit world lie close, and the fae are met more often than anywhere else. It is so seldom seen that the scholars of the lowland kingdom doubt it, and the [[lore-aelendnppl|Áelendan People]] who live beside the [[lore-aralwen|Aralwen]] do not. Its horn makes foul water clean and draws poison from a wound, and nothing made by men holds it.

What it is—a beast of this world, a thing of the aralwen that walks in from the other side, or one of the fae in a shape the fae chose—the Áelendan do not say and the [[affiliation-ordoarcanis|Thordimalon]] (the Arcane Order) has not found out. What is agreed is that it comes and goes where the world is thin, and that a place it has been in is better for it.

## Presentation

A horse of the finest make rendered without flaw: a coat of pure white with a sheen that shifts between silver and pearl as it moves, a mane and tail like floss that stir when there is no wind, large dark eyes under long lashes, a pale muzzle, and legs straight and clean with hooves as hard and dark as flint. The horn is a single tight spiral of a substance like ivory veined with gold, which no smith or alchemist has been able to name, and it carries a faint light of its own in shade. The unicorn moves without sound, through brush that does not stir and over leaves that do not break.

## In the Land

Unicorns are met in the oldest forest of Élavendre's interior, in the high valleys of its mountains, and along the arálwen-waters that run partly in the material world and partly in the other: the country of the [[affiliation-aelndntrbs|Áelendan Tribes]] and the [[affiliation-alndnwrdns|Áelendan Wardens]], where [[place-silvrfrsts|The Silver Forests]] stand and [[lore-faecourts|The Fae Courts]] are said to hold. A unicorn ranges across hundreds of square miles on a round that seems to answer to the seasons and the moon, and it is seen twice in the same place only by people the Áelendan say it has chosen to be seen by. It leaves a country where blood has been shed in wrong and lingers where the land is at peace, and a stretch of forest that has had a unicorn in it that year has clean springs and no sickness in its villages.

## Key Behaviors

A unicorn goes alone. Two meeting touch horns and part. It eats as no horse eats, choosing particular herbs, flowers that open in certain moons and a moss of the high stones, and the Áelendan hold that it eats to keep its nature rather than to fill its belly. It watches people from the edge of sight the way a person watches birds, and once in a long while it lets one come near, and the one it lets near is never a cruel one. It is not territorial and it does not fight for food. A mare keeps her foal five years and then it goes alone. It lives three centuries or more, and the oldest Áelendan songs name a unicorn that the oldest singer's grandmother's grandmother saw.

## What the Áelendan Do

The Áelendan tribes do not hunt the unicorn, do not speak of where one was last seen to anyone outside the tribe, and hold a man who has tried to take one to be cursed with his line; the Wardens have turned back more than one party from the lowlands that came with nets and a lord's writ, and did not turn them back gently. An Áelendan healer who has found a unicorn's drinking-pool draws water there for the dying. In the lowland kingdom the horn is the stuff of a hundred false relics and the court physicians test every one; a true horn would buy a county, and the Áelendan say that a man who sold one would not live to spend the price, because the unicorn's kin would know.

## Signs

- A spring or a pool in deep forest that runs clear when every other is brown with the autumn, with no track in the mud but a single line of hoofprints that do not sink.
- A stretch of woodland where nothing is sick: no blight on the trees, no fever in the clearing.
- Birds and deer that go quiet and still together, unafraid, all looking the same way.
- A single white hair, longer than any horse's, caught on a thorn, that shines in shade.
- An Áelendan guide who will take a party no further.

## Combat Strategy

A unicorn does not fight if it can leave, and it can almost always leave: it is faster than any horse, silent, goes through forest as over open ground and up a mountainside no horse could climb, and once it has turned away it is not caught. It stands when its foal is threatened, when it is cornered in a place with no way out, or for a reason of its own that nobody has been able to predict, and then it is a different animal. It fights with the horn as a lance, rearing and driving down, and with its hooves, and those who have fought one and lived say that their blades would not bite and their wounds would not close. It does not fight to kill when it can fight to drive off, and it does not pursue.

## Attack Methods

### Horn

The horn is driven like a lance, at the charge or in a rearing downward thrust with the weight of the body behind it, and it goes through mail, plate and bone, and through wards that would turn a spear.

### Kick

The forehooves strike down in a rear and the hind hooves kick behind, and the hooves are hard as stone; a kick breaks a shield and the arm behind it.

### Bite

The teeth close on an arm or a shoulder with a horse's strength and hold a man for the horn.

## Special Abilities

### Magical Purification

A touch of the horn makes brackish or poisoned water clean and sweet, draws poison and sickness from food, and drives disease and venom out of a body and closes its wounds. It does this once in a day for any one person or thing, and no more is known of its limit. It mends what is poisoned and sick and nothing else: not a crime, not a curse on the spirit, not the dead.

### Magical Resistance and Ward

Around a unicorn, for thirty to fifty feet, hostile magic weakens, curses lose their hold and the undead are uneasy. This is always so unless the unicorn wills otherwise, and it is why no binding, rope, wall or spell has ever held one.

### Incorruptibility

Poison, disease and age do not touch a unicorn, and a spell meant to harm it fails unless it permits the harm. A blade turns on it or bites shallow. It can be hurt only in a fight it has chosen to stand in.

### Unmatchable Speed and Agility

It outruns any horse, turns in less than its own length, moves without a sound and goes through the thickest forest as over a road. In flight it is not caught, and in a fight it is where the blow is not.

### Sentience and Volition

The unicorn thinks as a person thinks, with a memory of centuries, and it judges what a person is. It understands speech and answers none. A person it has befriended it guards as its own foal, for the rest of that person's life.

### Willing Bond

Once in a generation in a large realm, a unicorn chooses a person whose heart it finds clean and lets them ride, shares what it knows without words, and stays with them. It is a partnership and not a service; the unicorn refuses what it finds unjust. The chosen one sickens less, ages slower, understands the speech of horses and brings quiet to the places they stay, and when they die the unicorn has been known to keep the grave for a hundred years.

## Attributes

Strength
: 22-27 (1d6+21)

Endurance
: 14-19 (1d6+13)

Agility
: 8-13 (1d6+7)

Perception
: 17-22 (1d6+16)

Scent
: 4-7 (1d4+3)

Aura
: 13-18 (1d6+12)

Will
: 13-18 (1d6+12)

Reasoning
: 7-10 (1d4+6)

Creativity
: 7-10 (1d4+6)

Empathy
: 8-13 (1d6+7)

Morality
: 9-14 (1d6+8)
