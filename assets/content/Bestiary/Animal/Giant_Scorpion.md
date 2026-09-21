---
tags:
  - animal
  - creature
name:
  full: Giant Scorpion
  aliases: []
description: "A ten-foot armored arachnid ambusher that waits motionless for prey, combining crushing claws with lethal venom across a multi-mile territory."
shortcode: gntscrpn
type: being
data:
  icon: icon-person
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
  kbcat: animal
  attrRollFormula:
    str: 1d6+13
    end: 1d6+15
    dex: 1d6+8
    agl: 1d6+7
    per: 1d6+9
    aur: 1d6+7
    wil: 1d6+10
    rea: 1d4+4
    cre: 1d4+3
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 19 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 6 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 45 } }
    - name: Pincer Crush
      type: skill
      system:
        shortcode: pincer
        subType: combattechnique
        masteryLevelBase: 51
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: pincer
          name: Pincer Crush
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 3
            aspect: blunt
          lengthBase: 1
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
    - name: Tail Sting
      type: skill
      system:
        shortcode: sting
        subType: combattechnique
        masteryLevelBase: 54
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: sting
          name: Tail Sting
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 4
            aspect: piercing
          lengthBase: 1
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
          - name: Cephalothorax
            shortcode: cephzone
            probWeight: 1
          - name: Abdomen
            shortcode: abdomenzone
            probWeight: 1
          - name: Legs
            shortcode: legszone
            probWeight: 1
        parts:
          - name: Cephalothorax
            shortcode: cephpart
            bodyZoneCode: cephzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 5
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: legszone
            roles:
              - locomotor
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
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 7
              edged: 6
              piercing: 5
              fire: 7
      weight:
        base: 2
        calc: "2"
      reachBase: 0
      bodyScaleBase: 1.33
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

![[gntscrpn|Giant Scorpion]]{float: top-left}

Movement at the edge of vision makes you turn—and a chill of primal horror runs down your spine. Out from under a rock outcropping comes a creature easily ten feet long from the tip of its pincers to the end of its tail. The exoskeleton gleams in shades of dark brown and rust, armored like a knight in chitinous plate. The pincers are massive and cruel, each one ending in a curved point sharp enough to pierce armor. But worse is the tail—it curves high above the creature's body, segmented and sinuous, and at its tip a stinger glints with clear, oily venom that drips to the ground and hisses where it falls. The creature's multiple eyes fix on you, and you have the absolute conviction that you are being measured, evaluated, and found edible.

# Dossier {#dossier}

The Giant Scorpion is a predatory arachnid combining overwhelming armor, crushing strength, and lethal venom. Reaching ten feet in total length, a single giant scorpion claims a territory of several square miles and defends it with territorial aggression. These are ambush hunters that spend much of their time perfectly motionless, waiting for prey to wander within striking distance. Adventurers most commonly encounter them in rocky deserts, canyon systems, and badlands where the scorpion's coloration provides effective camouflage.

## Presentation

The Giant Scorpion is a heavily armored creature with a body profile that is recognizable but scaled to monstrous proportions. The cephalothorax (head-body region) is squat and heavily muscled, covered in overlapping plates of thick chitin in shades of dark brown, rust, or nearly black. The abdomen is segmented and curves upward in a vicious arc, ending in a stinger. The creature is supported on eight jointed legs that position it slightly above the ground, allowing movement across rough terrain. The pincers are massive, each longer than a human arm, capable of independent movement and controlled with frightening precision. The eyes are multiple—arranged around the front of the head to provide excellent sensory coverage. The overall impression is of a creature designed entirely for predation.

## Key Behaviors

Giant Scorpions are perfectly adapted ambush predators that remain motionless for hours or days, waiting for prey. They prefer rocky, arid environments where their coloration provides camouflage and where prey is abundant. They are strictly solitary except during breeding, and they aggressively defend territory against rivals and intruders. A scorpion will attack anything within its territory that it perceives as either prey or threat—it does not distinguish. The creature hunts primarily insects, lizards, small mammals, and birds, but a hungry or threatened scorpion will attack humanoids.

## Combat Strategy

A Giant Scorpion's preferred method is complete surprise—a target is completely unaware of the scorpion until it strikes. The initial attack combines pincer grapple with tail strike, attempting to immobilize and inject venom simultaneously. Once prey is held by the pincers, the tail can be brought to bear repeatedly, delivering multiple stings. A scorpion that misses its initial ambush is less effective in direct combat but retains significant advantage through armor and strength. A scorpion will continue attacking until prey is dead or until the scorpion itself is seriously wounded—they show no instinct to retreat.

## Attack Methods

### Pincer Crush

The massive pincers deliver a crushing force capable of splintering bones and breaking armor. A target caught by the pincers is held fast and crushed harder the longer it is held.

### Tail Sting

Once prey is grappled or helpless, the tail can strike repeatedly—injecting a fast-acting venom designed to paralyze or kill. The venom is potent enough to incapacitate humanoids.

## Special Abilities

### Exoskeletal Armor

The Giant Scorpion's chitin provides superb protection against slashing and piercing weapons, deflecting many attacks entirely. Blunt weapons are more effective than edged ones. The soft undersides and joints between segments are more vulnerable.

### Ambush Predator

A scorpion that remains motionless gains near-invisibility—particularly in rocky terrain where its coloration matches stone. A target caught unaware by a scorpion strike has little chance to defend itself.

## Additional Information

Giant Scorpion venom is extremely valuable to alchemists and poisoners—a single sting's venom can sell for significant coin. Harvesting venom is extraordinarily dangerous. The scorpion's exoskeleton can be worked into armor. A scorpion's territory is recognizable by bleached bones and exoskeletons of previous kills scattered around the ambush site.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 16-21 (1d6+15)

- **Dexterity:** 9-14 (1d6+8)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 10-15 (1d6+9)

- **Aura:** 8-13 (1d6+7)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
