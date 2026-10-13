---
shortcode: snwlprd
name: {full: Snow Leopard, aliases: []}
type: being
subType: creature
description: "A solitary, thick-coated mountain predator and peerless climber, hunting goats and sheep in high peaks where no rivals compete."
tags: [animal, creature]
data: {packFolder: animals, icon: feline, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+12
    end: 1d4+10
    dex: 1d4+16
    agl: 1d4+16
    per: 1d4+12
    aur: 1d4+5
    wil: 1d4+10
    rea: 1d4+6
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Suffocating Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 78
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Suffocating Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Claw Rake
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 78
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw Rake
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
          lengthBase: 1
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
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
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
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
      weight: {base: 60, calc: "60"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[snwlprd|Snow Leopard]]{float=top-left}

High on the rock face above the snowline, among the grays and creams of the scree, a patch of the rock is a different gray. A thick, smoky coat marked with dark rosettes moves slightly, and a broad face with pale blue-green eyes looks down at you from sixty feet above. A tail as thick as your arm is wound round its body like a scarf. It does not seem to be afraid. After a while it rises, stretches and walks away along the ledge.

# Dossier {#dossier}

The Snow Leopard is the lone hunter of the high mountains, two and a half to three feet at the shoulder and four to five feet long, living above the tree-line in the [[place-graznmntns|Grazian Mountains]], where no other large predator competes. It hunts wild goats and sheep, and will take larger prey. It comes down in the severest winters, when the game does. It is not afraid of people unless it is provoked or defending its range.

## Presentation

A muscular cat, more compact than a leopard, built for snow and rock. The coat is thick, smoky gray to pale cream, marked with dark rosettes and irregular spots that match snow, rock and shadow. The eyes are pale blue-green and face forward. The face is broad and the jaw strong. The limbs are longer than a leopard's, for climbing and leaping across crevasses. The big paws are furred underneath for grip and warmth. The tail is long, bushy and often wrapped around the body for warmth.

## In the Land

Snow leopards live above the tree-line in the high ranges of the [[place-graznmntns|Grazian Mountains]], on the rock walls and snow-fields where the wild goats and sheep graze. A cat holds a thinly stocked range of many miles of ridge and ravine, rests in a cave or a crevice by day and hunts at twilight and in the early morning. It climbs and leaps across gaps, and its smoke-gray coat disappears against the rock.

## Key Behaviors

Snow leopards live alone, each in a high range where prey is scarce and meetings are few. They are active at twilight and in the early morning, and rest in the heat of the day and the cold of the night. They eat wild goats and sheep, and almost any meat that offers, small predators and people included. They are intelligent and learn: they remember dangerous hunters and productive hunting grounds.

## What the Mountain People Do

The Ösket herders of the high valleys, such as [[place-tsokhar|Tsökhar]], lose goats and young yaks to a snow leopard and watch the ledges at dusk. They are seen by few and are known by their tracks and kills. A pelt is a chief's gift, and the long tail is worn as a collar. Guides lead parties over the passes by day and camp below the cliffs. A hunter who follows a track into a ravine goes with others. The bones are sold to the healers of the lowland cities.

## Signs

- Round pug-marks, with a tail-line between them, in fresh snow on a ledge.
- A wild sheep carcass hidden under rocks high above the valley, with the throat torn.
- A scrape on a rock where the cat marks its range, with a sharp, musky smell.
- A low, moaning call at night from the cliffs above a camp.
- A gray shape that crosses a snow-field and is gone.

## Combat Strategy

The snow leopard ambushes prey using terrain to close distance undetected, then launches an explosive attack using powerful hind legs to leap toward the target. Once engaged, the leopard uses its strength and claws to grapple and its powerful jaw to deliver a killing bite to the throat or spine. If the initial attack fails, the leopard may retreat to high ground where pursuit is difficult. A snow leopard defending territory or young becomes more aggressive and persistent but still prefers to fight on terrain of its choosing.

## Attack Methods

### Explosive Pounce

The snow leopard launches from a distance using powerful hind legs, covering surprising distance in a single leap. The attack combines momentum with claws and jaws for maximum impact and is designed to knock prey off balance and position the leopard for a killing bite.

### Suffocating Bite

Once engaged, the snow leopard attempts to bite the throat or neck, using its powerful jaw to cut off air and blood flow. The bite is precise and powerful, capable of severing the carotid artery or crushing the trachea.

### Claw Rake

During grappling, the snow leopard uses its powerful forelimbs and sharp claws to rake and tear at opponents, creating additional trauma and wounds. The claws can penetrate leather and light armor.

### Crushing Body Weight

The snow leopard uses its muscular body to pin opponents, relying on weight and strength to hold prey in place while attempting a killing bite.

## Special Abilities

### Mountain Camouflage

The snow leopard's coloration is extraordinarily effective in alpine environments. It is hard to see in mountain country, particularly in snow and among rocks.

### Expert Climber

The snow leopard is supremely adapted to vertical and near-vertical terrain, capable of scaling sheer cliffs and boulders that humanoids would find impossible. It fights best on steep or uneven ground, where its footing is surer than its enemy's.

### Cold Adaptation

The snow leopard is perfectly adapted to freezing conditions and suffers no penalty for extreme cold. The thick fur provides insulation equivalent to heavy winter clothing.

### Explosive Power

The snow leopard's hind legs are extraordinarily powerful, allowing it to leap extraordinary distances and heights. The creature's jumping and climbing abilities far exceed what humanoids can achieve.

### Keen Senses

The snow leopard's hearing, vision, and smell are all adapted for mountain hunting. The creature can detect movement and scent across significant distances.

### Additional Information

Snow Leopards are most dangerous in their native mountain terrain where nothing can follow them. In open or low-altitude country the cat is far less dangerous. The creatures are solitary and avoiding already-claimed territory prevents encounters. A snow leopard that has successfully hunted humanoids becomes more bold in approaching humans, making it a potential threat to isolated mountain settlements. The creature's pelt is extraordinarily valuable and can be harvested after death to create winter clothing or insulation.

## Attributes

- **Strength:** 13-16 (1d4+12)

- **Endurance:** 11-14 (1d4+10)

- **Dexterity:** 17-20 (1d4+16)

- **Agility:** 17-20 (1d4+16)

- **Perception:** 13-16 (1d4+12)

- **Aura:** 6-9 (1d4+5)

- **Will:** 11-14 (1d4+10)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 7-10 (1d4+6)
