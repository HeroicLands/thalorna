---
shortcode: blckbr
name: {full: Black Bear, aliases: []}
type: being
subType: creature
description: "A strong, surprisingly intelligent forest predator and scavenger of temperate woods that usually avoids humans but turns dangerous when provoked."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-bearhead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+13
    end: 1d6+9
    agl: 1d6+10
    per: 1d6+11
    snt: 1d4+4
    aur: 1d4+2
    wil: 1d6+9
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 56}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 1}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 500, calc: "500"}
      reachBase: 0
      bodyScaleBase: 1.28
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 100
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[blckbr|Black Bear]]{float=top-left}

The berry thicket has been torn open at head height, with branches bent down and the ground beneath them heaped with purple dung. Fifty paces on, a black shape stands up on its hind legs at the edge of the trees, taller than you, and turns its broad head to sample the air. Its coat is glossy, the ears are round and set well back, and the small dark eyes are fixed on you.

# Dossier {#dossier}

The Black Bear is a strong, adaptable bear of the oak, beech and mixed woods of [[place-vrystwald|Vristwald]], the forested hills of the [[place-nrdlndsrgn|Nordlands Region]] and the forests of [[place-velanthrgn|Velanthia Region]], four to six hundred pounds and five or six feet tall on its hind legs. It eats berries, nuts, roots, fish, small animals and carrion, and keeps away from people until it learns that they carry food. A bear that has been rewarded at a camp or a bee-tree comes back, and grows bolder each time.

## Presentation

A powerful bear on short, sturdy legs. The coat is thick and glossy, usually jet black, sometimes dark brown or cinnamon. The head is broad, with rounded ears set midway back, a short muzzle and small, dark eyes. Each paw carries five long, curved claws, good for climbing, digging and fighting. The animal moves lightly for its bulk and can charge a short distance very fast. When it is agitated it gives off a heavy musk.

## In the Land

Black bears live in the oak, beech and mixed woods of Vristwald and the forested hills of the Nordlands and Velanthia, and they are thinner in the high taiga where nothing fruits. A bear's range takes in a berry glade, a stream with a fish run, and a den in a hollow tree or under a root-mass. Bears dig in on the edge of settled country, near orchards and bee-trees, more readily than the larger brown bear does, and the same animal is met year after year on the same few miles.

## Key Behaviors

Black bears are solitary, apart from a sow and her cubs, who stay together for one or two years. They feed on dozens of foods and go back to any rich source until they are driven off it hard. They swim well and fish in the runs. In winter they sleep for months in a hollow tree or a cave. A sow with cubs attacks at once at any threat.

## What the Villages Do

The [[lore-varokhiclt|Varokhi]] villages tolerate a black bear that keeps to the deep woods and take the bear wesk's rites as a reason to leave it alone. They hunt one that has learned to raid, in autumn when it is fat, with dogs and boar-spears. Beekeepers set their hives in the crowns of trees, or inside a stockade of sharpened stakes. A farmer in a cleared valley leaves nothing edible on the ground at night and does not let children gather berries alone. The hide makes a heavy cloak and the grease keeps a boot supple; the fat is sold to apothecaries for chest-salves.

## Signs

- A tree with long, parallel claw-scores at the height of a man's head, and tufts of black hair in the bark.
- A rotten log torn apart, the insects gone, with the pieces thrown a body-length away.
- Dung full of berry-seed and hazelnut shells, in a heap on a game-trail.
- A broken-open bee-tree, with wax scattered below it and the hive gone.
- Round tracks with five toes and claw-marks well ahead of them, heel-deep in a stream bank.

## Combat Strategy

A black bear's strategy depends on context. If cornered or defending food or cubs, it will attack with overwhelming ferocity, using its weight and strength to overpower and immobilize threats. Against multiple opponents, it may charge the closest one with intent to seize and crush, ignoring other attackers temporarily. It will rear onto its hind legs to maximize reach and striking power, then crash down in powerful swipes. Bears are also excellent climbers despite their mass—a wounded or threatened bear may retreat up a tree to escape threats or ambush from an elevated position. In forests, bears use terrain to their advantage, attacking from behind obstacles or using dense vegetation to conceal approach.

## Attack Methods

### Claw Swipe

The bear rises slightly and delivers a devastating horizontal slash with one foreleg, its claws raking across multiple targets or concentrating force on a single opponent. The force is sufficient to penetrate armor and cause severe lacerations. A bear skilled in combat (usually from repeated encounters with humans) will often lead with this attack, clearing space and assessing the opponent's defenses.

### Mauling Charge

The bear lowers its head and charges forward with full weight behind it, intending to knock the target down and maul it while it's prone. The impact alone can break bones, and once an opponent is on the ground, the bear uses its weight and claws to inflict maximum damage.

### Bite

When at close quarters, the bear snaps with powerful jaws, attempting to seize a limb, shoulder, or head. Its bite force is sufficient to crush bone and tear large amounts of meat. A bear that has subdued an opponent may bite and shake violently, multiplying the damage.

## Special Abilities

### Strength and Resilience

Black bears possess powerful muscles and dense bone structure. They are capable of moving boulders weighing hundreds of pounds to access roots and insects beneath, and their physical resilience allows them to absorb impacts that would disable human-sized opponents. Blunt force trauma is notably less effective than cutting or piercing attacks.

### Keen Senses

A bear's sense of smell is famed—it can detect food sources miles away on the wind and can distinguish scents that would be undetectable to humans. Its hearing is equally acute, capable of detecting the crackle of a campfire or the rustle of prey in undergrowth. Vision is the weakest sense, but it remains adequate for detecting movement and estimating distance.

### Climbing and Swimming

Despite their mass, black bears are surprisingly agile climbers. They can ascend trees to pursue prey, escape threats, or forage for nuts and insects. They are also strong swimmers and will pursue prey into water. A wounded bear may retreat into water to cool its body and clean wounds, then hunt from the shoreline or mid-stream.

### Thick Hide and Fat Layer

A bear's skin is tough and its body is insulated by a thick layer of subcutaneous fat that provides both thermal protection and trauma resistance. Slashing weapons are less effective than piercing attacks, and the fat layer provides some resistance to blood loss.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 10-15 (1d6+9)

- **Agility:** 11-16 (1d6+10)

- **Perception:** 12-17 (1d6+11)

- **Scent:** 5-8 (1d4+4)

- **Aura:** 3-6 (1d4+2)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 4-7 (1d4+3)
