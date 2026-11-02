---
shortcode: moose
name: {full: Moose}
type: being
subType: creature
description: "The largest deer of the northern forests, a long-legged, humped, broad-antlered browser of lakes and muskeg that is dangerous in the rut and with a calf."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-staghead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+19
    end: 1d6+14
    dex: 1d4+3
    agl: 1d6+8
    per: 1d6+10
    aur: 1d6+6
    wil: 1d6+10
    rea: 1d4+3
    cre: 1d4+1
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 23}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Antler Gore
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Antler Gore
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
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
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
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
          - name: Flank
            shortcode: flkloc
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
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 1100, calc: "1100"}
      reachBase: 0
      bodyScaleBase: 1.15
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: aquatic
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

The lake is white with mist and perfectly still, and something is standing in the shallows with its head under the water. It lifts: a long, drooping face, a flap of skin hanging from the throat, water streaming from a mouthful of pondweed. Above it spreads a pair of flat antlers wider than a canoe. It looks at you without hurry, chewing, and then it lowers its head and the long ears go flat back.

# Dossier {#dossier}

The Moose is the largest of the deer, six feet at the shoulder and eight hundred to twelve hundred pounds, a solitary browser of lakeshore, willow flat and spruce bog. It lives in the northern forests: the muskeg and lake country of [[place-kawiskakrgn|Kawiskak Region]], the hills of [[place-tsitarargn|Pine Country]] and the spruce hills behind [[place-tsiorhenrgn|Dawn Shore]]. The forest nations know it as the animal that feeds a family for a winter.

## Presentation

A tall, ungainly animal, humped at the shoulders and carried on long, pale legs that clear the snow and the water. The coat is dark brown, nearly black, with a long, drooping upper lip and a fold of skin, the bell, hanging from the throat. Bulls carry broad, flat antlers with many points, shed each winter and regrown in the spring; cows carry none. A calf is reddish brown and stands on legs too long for it.

## In the Land

Moose live where water, willow and young forest meet. In summer they stand in lakes and slow rivers to feed on pondweed, and the blackflies and mosquitoes that rise from the muskeg drive them deeper into the water, where only the head shows. In autumn they come ashore to the willow flats and birch hills for the rut. In winter they move into the spruce stands, where the snow lies shallow, and browse twigs and bark. A moose crosses a lake rather than walk round it.

## Key Behaviors

Moose are solitary except for a cow and her calf. They browse shoots, leaves and bark and dive for water plants, staying under for a minute at a time. They swim strongly and fast, and cross lakes more than a mile wide. Their eyes are poor, their ears and noses excellent, and a moose that cannot identify a sound often walks toward it. In the autumn rut bulls bellow, thrash bushes with their antlers, and fight one another in earnest. A moose that is alarmed lays its ears back and raises the hair along its hump, and the next step is a charge. A cow with a calf and a bull in the rut attack readily and are more dangerous than any bear.

## What the Forest Peoples Do

The [[affiliation-osetakona|Maple People]] hunt moose and deer in the hills of Pine Country and Dawn Shore, and the [[lore-kawiskakclt|Spruce People]] take them from the lakes of Kawiskak, where the flies drive the animals into the water and a hunter in a birch-bark canoe can come alongside. One moose feeds a family band for weeks. The meat is dried for winter, the hide becomes clothing, boots and lodge covers, and the bones and antlers become tools. The ungainly animal is a respected one, and hunters give a moose a quick death and treat the remains with care.

## Signs

- Tracks like a large cow's, cloven and deep, with the dewclaws showing in soft ground.
- Browsed willow and birch, the twigs stripped and bark scraped from the trunks to shoulder height.
- A wallow of trampled mud and torn sedge at the edge of a lake, with flies in clouds above it.
- A bull's antler scars, bright and splintered, on small trees along a game trail.
- A deep, groaning call that carries across the water at dusk in the autumn.

## Combat Strategy

The moose's strategy is to stand its ground. A moose that is alarmed does not flee if it can avoid it. It faces the threat, lays its ears back, and attacks with its forehooves, rearing and striking downward in a flurry of blows, with a kick to the side or rear for anything that comes round behind. A bull in the rut adds the antlers, lowering them and driving forward to gore and fling. A moose that is hard pressed goes into deep water, where it swims faster than a man can paddle, or into thick brush where its long legs clear a path that its pursuers cannot follow. It does not tire easily and does not give up a charge once begun.

## Attack Methods

### Antler Gore

A bull lowers its broad antlers and drives forward, using the points to gore and the wide palm to sweep. The antlers are used mostly against other bulls, but a bull in the rut turns them on a man as readily.

### Kick

The moose's long legs give its kicks a long reach. It strikes forward with a forehoof or lashes backward, and a kick to the head or ribs can kill.

### Stomping Down

A moose that has knocked an enemy down rears and strikes with both forefeet, driving the sharp-edged hooves into the body. This is the moose's most feared attack and the one that kills most hunters.

### Water Retreat

A moose pressed hard on a shore wades or plunges into deep water and swims away, leaving a pursuer on foot behind. In shallow water, it turns and fights with the legs freed of the weight of the ground.

## Special Abilities

### Swimmer and Diver

The moose swims for miles, dives for water plants, and holds its breath for a minute or more. It moves through water faster than most people can paddle, and a pursuer cannot catch it on a lake.

### Long Legs

The moose's long legs carry it through deep snow, muskeg and bog where shorter animals flounder. It covers rough ground at a steady pace for hours.

### Rut Fury

A bull in the rut is reckless. It attacks without warning and ignores injuries that would stop another animal, and a cow with a calf shows the same ferocity.

## Attributes

Strength
: 20-25 (1d6+19) — Among the largest and strongest deer; its kicks and charges are powerful enough to kill

Endurance
: 15-20 (1d6+14) — Wades, swims and browses through long winters and covers miles at a steady pace

Dexterity
: 4-7 (1d4+3) — Controlled use of its lips and legs, but nothing delicate

Agility
: 9-14 (1d6+8) — Surprisingly agile for a giant, and sure-footed in bog and snow

Perception
: 11-16 (1d6+10) — Excellent hearing and smell; poor sight

Aura
: 7-12 (1d6+6) — A large, solitary presence of the forest, treated with caution

Will
: 11-16 (1d6+10) — Stands its ground rather than flees, and does not abandon a charge

Reasoning
: 4-7 (1d4+3) — Remembers feeding grounds and migration routes

Creativity
: 2-5 (1d4+1) — Little improvisation; relies on standing, kicking and swimming
