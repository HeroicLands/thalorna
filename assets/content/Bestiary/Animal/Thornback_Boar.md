---
shortcode: thrnbckb
name: {full: Thornback Boar, aliases: []}
type: being
subType: creature
description: "A heavily built, ferociously territorial wild boar whose solitary males aggressively charge anything that trespasses on their forest ground."
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
    str: 1d6+13
    end: 1d6+12
    dex: 1d6+7
    agl: 1d6+7
    per: 1d6+8
    aur: 1d4+6
    wil: 1d6+10
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Goring Charge
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 59
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Goring Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Trampling Stomp
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Trampling Stomp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
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
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
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
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 1000, calc: "1000"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[thrnbckb|Thornback Boar]]{float=top-left}

The ride turns down into a hollow of oak and holly, and the ground there has been plowed: torn up in long furrows, the leaf litter flung aside, roots bitten through. At the far side of the hollow a boar lifts its head out of the furrow. It is black and bristled and as high at the shoulder as your horse's chest, with tusks curling up out of its jaw like two knives, and along its back from the nape to the rump runs a crest of jagged spines, each as long as your hand, that rises as it looks at you. It grunts once. Then it lowers its head and comes, and the hollow is very small.

# Dossier {#dossier}

The Thornback Boar is a big, black, savage wild boar, four to five feet at the shoulder, with long upcurved tusks and a crest of bony spines down its back that it raises when it is angry. The sows and young live in herds; the old males live alone and defend their ground against anything that comes into it, horse, hound or man, with a charge that guts a horse. On [[place-aelwyth|Aelwyth]] it is the great beast of the royal forest above [[place-kingsholow|Kingshollow]] in the [[place-wyndmarch|Wyndmarch]], where the kings of Aldorath hunt it, and it is the reason the forest's poachers prefer deer.

## Presentation

A thornback is built heavy in front and light behind, with a deep chest, a short thick neck, a long wedge-shaped head and short strong legs. Its hide is thick and its bristles are coarse, black or dark brown, caked with mud and often stiff with dried blood. The tusks of an old male curve up and back from the lower jaw, eight inches long and more, kept sharp against the upper tusks. The spines are its mark: a row of jagged, bony spikes, four to eight inches long, that runs down the spine from the nape to the root of the tail and lies flat when the boar is calm and stands up when it is roused. The eyes are small, dark and bad-tempered. It smells rank and musky, and an old male's smell hangs in a thicket long after it has left.

## In the Land

Thornbacks live in the oak, beech and holly forest of the Wyndmarch, the foothill woods that run from the approaches to the two passes down toward the [[place-hallowwood|Hallowwood]], and they are thickest in the royal forest above Kingshollow, where forest law has kept men from clearing, grazing and cutting for six centuries. They want mast, roots and wallows: acorns and beechnuts in autumn, roots and bulbs dug out of the forest floor the rest of the year, and mud to roll in. A sow herd ranges widely; an old male keeps a few square miles of thicket, water and rooting ground and stays in it. They push out into the forest-edge steadings in a bad mast year and dig up the tenants' fields overnight.

## Key Behaviors

Thornbacks feed at dawn, dusk and through the night and lie up by day in deep thickets. They root constantly, plowing up the forest floor in long furrows, and they wallow and then rub against trees, leaving them caked with mud and bristle. The sows live in herds with their young and defend them together; a sow with piglets charges anything that comes near. The old males are solitary except in the autumn rut, when they fight each other with their tusks and are more dangerous than at any other season. A thornback that has been hunted and escaped learns the sound of horns and hounds, and waits in a thicket for them to come to it.

## What the Aldorathi Do

The thornback is the king's beast. The royal forest above Kingshollow is under forest law, and taking a thornback in it is reserved to the king and those he names; the forest courts punish a poacher caught with a boar's carcass far harder than one caught with a deer. When the court comes down to Kingshollow for the midwinter feast, the boar hunt is the great event of the season, run with boar-hounds, mounted huntsmen and men on foot with heavy spears, and the head of the first boar is carried into the hall. Hunting a thornback on foot with the boar-spear, which has a crossbar to keep the boar from running up the shaft, is the test a young man of the court is expected to pass. The tenants on the forest edge have their own grievance: they may not cut the timber or graze the forest, and they may not kill the boars that dig up their fields, and every year the forest courts hear the complaint and every year nothing changes.

## Signs

- The forest floor plowed up in long furrows, leaf litter flung aside and roots bitten through.
- Tree trunks rubbed smooth and caked with dried mud and coarse black bristle at the height of a man's hip.
- Deep, muddy wallows at the edge of springs and streams, with cloven tracks all round them.
- Saplings and trunks with long gouges at knee height where a male has sharpened its tusks.
- A field at the forest edge dug over in a night, the crop rooted up and trampled.

## Combat Strategy

A thornback charges. It puts its head down and runs straight at the threat with its whole weight behind its tusks, hooks upward as it hits, and tries to rip open a belly or a thigh. If the man goes down it turns and comes back, tusking and trampling. It ignores wounds and keeps attacking, and a cornered or wounded boar does not stop until it is dead. The spines protect its back against blows from above and behind, and a man who tries to grapple it or come at it from behind is cut on them. It does not run from a single man. A boar that is not cornered and not defending its young may let a party pass, and a boar that has been hurt by hunters before may lie in wait for them.

## Attack Methods

### Goring Charge

The boar runs at its target with its head low and drives the tusks up into the body as it hits. The charge knocks a man off his feet, and the tusks open long, deep wounds in the thigh and belly. A horse caught by the charge is often gutted.

### Trampling Stomp

Once a man is down, the boar runs over him, stamping with its sharp hooves and its whole weight. The stomp breaks ribs and limbs and cuts.

## Special Abilities

### Armor Spines

The spines along the boar's back turn blows aimed at its back and cut anyone who grapples it or strikes it from behind or above.

### Relentless Charge

Once committed to a charge the boar does not turn aside, and it goes on through brush, shields and men, attacking even when badly wounded.

### Territorial Aggression

On its own ground, the boar strikes harder and more surely, and it attacks intruders without provocation.

### Rage Frenzy

Wounds make it more dangerous. A hurt thornback fights faster and more savagely, and it does not retreat however badly it is hurt.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 13-18 (1d6+12)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 9-14 (1d6+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 3-6 (1d4+2)
