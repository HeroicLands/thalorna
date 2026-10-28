---
shortcode: khzrncml
name: {full: Khazryn Camel}
type: being
subType: creature
description: "A hardy, two-humped pack animal of remarkable endurance, carrying merchants and soldiers across frozen passes and bitter deserts."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-camelhead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+12
    end: 1d6+15
    dex: 1d4+7
    agl: 1d4+6
    per: 1d6+8
    aur: 1d4+5
    wil: 1d6+9
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 6}
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
      bodyScaleBase: 1.28
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 8
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[khzrncml|Khazryn Camel]]{float=top-left}

The string of camels comes down the pass through the first snow, each shaggy animal tied to the one in front, each hump standing high and firm. Their breath smokes. The leader stops at the ice-glazed stones of the ford, groans, and lowers its long neck to look at the water. Behind it the whole string stops. They smell of sweat and wet wool and acid.

# Dossier {#dossier}

The Khazryn Camel is the two-humped camel of the cold desert and steppe, seven to eleven feet at the shoulder and over a thousand pounds, bred for endurance on frozen passes, wind-scoured plateaus and bitter deserts. It carries merchants and soldiers across the [[place-khzryndsrtrgn|Khazryn]] and through the passes of [[place-graznmntns|the Grazian Mountains]]. It is more docile than the one-humped dromedary, though a frightened one is as dangerous as any hoofed animal. Herds that have gone feral hold the abandoned reaches of old trade routes.

## Presentation

A long-necked, long-legged animal with a compact, muscular body and two high humps over the shoulders, full of fat for lean seasons. The coat is thick and shaggy, dun, brown or gray, shed in matted clumps in warm weather. The face is long and narrow, with a split upper lip, high-set dark eyes and small pointed ears. The feet are broad and two-toed with leathery pads that grip rock and snow. Its smell is sweat, urine and acid saliva, stronger when it is agitated.

## In the Land

Two-humped camels are bred and herded across the steppe and cold desert of the Khazryn, and they are driven through the high passes of the Grazian Mountains and over the plateau of the northern road. A herd grazes the thorn and the tough grass of the margins and winters in the sheltered valleys, growing a thick coat that it sheds in clumps in spring. A few herds that have gone feral hold the abandoned reaches of old trade routes.

## Key Behaviors

Khazryn camels live in herds or work as beasts of burden. In the wild they graze on low shrubs and tough grasses few animals will eat. Cows guard their calves but run if they can. Bulls are territorial and fierce in the autumn rut, bellowing and wrestling with their necks. Feral camels gather in groups of five to fifteen. They live fifty years or more and form strong bonds, and an animal separated from its herd searches for it. A camel that loses a companion may be so distressed that it turns dangerous and unpredictable.

## What the Caravans Do

The Khazryn tribes sell the camel road by the mile, and it is crossed by camel strings. A caravan master chooses the two-humped camel for cold and for long stages, and a string of fifty carries a merchant's whole stock. Soldiers use them for baggage. A camel is better tempered than a dromedary, but a startled one bites and kicks, and a bull in the autumn rut is kept apart from the string. The wool is combed in spring and spun into rope and tent-cloth. Camel-dung is the fuel of the steppe, and a camel is the measure of a man's wealth.

## Signs

- A long string of shaggy animals strung out across a ridge, each tied to the one before.
- Two-toed, broad tracks in the dust of a pass, with the drag-marks of a load behind them.
- Clumps of brown wool snagged on thorn bushes along the road.
- A camel lying on its chest in a camp at dusk, chewing and groaning.
- A wild herd standing on a skyline, watching and unmoving.

## Combat Strategy

A Khazryn camel is generally passive and prefers flight to fight. Only when cornered, protecting offspring, or defending a herd does it become aggressive. When it does attack, it does so with the force of an animal many times larger than it: the full weight of its body and the power of legs built to traverse mountains. An aggressor should expect powerful kicks aimed at the legs and torso, and bites delivered with surprising force. Multiple Khazryn camels acting together are a serious threat—they may surround a mounted rider and work to unseat or injure the horse as well as the human. In mountainous terrain, a frightened herd can trigger rockslides or avalanches, making the camel itself incidental to the real danger.

## Attack Methods

### Hind-leg Kick

With a warning bellow and a slight rear, the camel drives both hind legs backward in a devastating double kick. The force is enough to knock a mounted rider from a saddle or topple an unarmored human entirely. These kicks are often preceded by a brief moment of stillness, giving attackers a split second to recognize the danger before the camel moves.

### Neck and Shoulder Slam

The Khazryn swings its long neck with surprising force, using its considerable mass to batter an opponent against its shoulder or slam them directly with the meaty part of its neck. This attack is less precise than a bite but effective against multiple foes in close quarters.

### Bite

When pressed into close combat, a Khazryn will bite with considerable force. Its teeth are blunt enough to crush bone, and its jaw leverage allows it to hang onto an opponent and shake violently.

## Special Abilities

### Cold Resistance and Endurance

A Khazryn camel's thick double coat and efficient metabolism allow it to thrive in frozen environments where other beasts quickly succumb to cold. It requires far less water and food than animals of comparable size, storing energy in its humps with great efficiency. This makes it an invaluable desert or mountain animal, capable of surviving weeks with minimal sustenance.

### Keen Senses and Navigation

Despite appearing placid, Khazryn camels possess excellent hearing and a keen sense of smell. They can navigate by scent and sound alone, finding water sources from miles away and detecting threats long before they become visible. In desert or mountain environments, a herd of these creatures is often more reliable than a human scout.

### Thick Hide

Generations of natural selection for harsh environments have resulted in thick, tough skin overlaid with protective fur. Slashing weapons are notably less effective than piercing attacks, and the animal's sheer bulk gives it significant resilience to blunt trauma.

## Attributes

Strength
: 13-18 (1d6+12)

Endurance
: 16-21 (1d6+15)

Dexterity
: 8-11 (1d4+7)

Agility
: 7-10 (1d4+6)

Perception
: 9-14 (1d6+8)

Aura
: 6-9 (1d4+5)

Will
: 10-15 (1d6+9)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
