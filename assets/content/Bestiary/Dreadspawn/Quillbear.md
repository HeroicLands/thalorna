---
tags:
  - dreadspawn
  - creature
name:
  full: Quillbear
  aliases: []
description: "A reclusive abomination of bear strength and porcupine quills that lairs in deep burrows and turns explosively aggressive when threatened."
shortcode: qllbr
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
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d6+18
    end: 1d6+14
    dex: 1d4+9
    agl: 1d6+6
    per: 1d6+10
    aur: 1d6+6
    wil: 1d4+13
    rea: 1d6+4
    cre: 1d4+5
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 22 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 8 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 50 } }
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 5
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
    - name: Quill Barrage
      type: skill
      system:
        shortcode: quill
        subType: combattechnique
        masteryLevelBase: 57
        combatCategory: melee
        impairedByRoles:
          - core
        strikeMode:
          type: melee
          shortcode: quill
          name: Quill Barrage
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 5
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
    - name: Pile-Driver Charge
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles:
          - core
        strikeMode:
          type: melee
          shortcode: ram
          name: Pile-Driver Charge
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 5
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
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 2
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 2
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 2
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1
              - locomotor
              - manipulator
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
            probWeight: 6
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 5
              fire: 7
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 5
              fire: 7
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 5
              fire: 7
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 5
              fire: 7
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 5
              fire: 7
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 5
              fire: 7
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 5
              fire: 7
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 5
              fire: 7
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 5
              fire: 7
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 5
              fire: 7
      weight:
        base: 300
        calc: "300"
      reachBase: 0
      bodyScaleBase: 1.57
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

![[qllbr|Quillbear]]{float: top-left}

The forest floor cracks and splinters as something massive erupts from the earth—an explosion of dirt and debris that blocks your vision. Through the dust, you see it: a creature that resembles a bear in gross shape alone, but its entire body is encased in thousands of spear-like quills that shimmer with sickly luminescence. The beast's fur bristles around the quills like some nightmare fusion of porcupine and ursine horror, and as it shakes itself clear of the soil, individual quills vibrate with an audible, high-pitched keening. Its low growl is the rumble of earth and stone, and you can see the venom glistening on each quill's barbed tip. The creature's eyes lock on you with feral intelligence, and you smell the burning-metal stench of its venom on the air.

# Dossier {#dossier}

Quillbears are predatory abominations that represent the worst marriage of apex bear strength and porcupine's defensive weaponry. These creatures roam forested and mountainous regions, always maintaining burrows of great depth and complexity where they lair and breed. A Quillbear is naturally reclusive but becomes explosively aggressive when its territory is threatened or when hunger drives it to hunt. The venom coating its quills is potent enough to kill a human in hours if untreated, and the creatures seem to understand this advantage, using it with calculated deliberation. Ancient Quillbears develop territories spanning dozens of miles, and other large predators learn to avoid them entirely.

## Presentation

A Quillbear measures roughly 10 to 14 feet in length and stands 7 to 9 feet when fully upright, its body mass exceeding that of a natural bear of equivalent size. Its underlying form is ursine, powerfully muscled with a thick frame and massive limbs, but nearly every inch of its body is covered in long, barbed quills that extend 6 to 12 inches from its skin. These quills are dark green or brown in color, banded with stripes of a sickly yellow-white, and they are segmented like insect chitin, allowing for slight flexibility. The tips glisten constantly with venom so potent that it seems to steam in warm air. Its fur between the quills is coarse and matted, brown or gray in color, and bears the scars of countless territorial conflicts. Its eyes are small, dark, and possess an unsettling predatory intelligence. When agitated, its quills rattle and quiver, creating a sound like thousands of tiny bones striking each other.

## Key Behaviors

Quillbears are solitary, fiercely territorial creatures that claim and defend a range spanning several miles of forest or mountainous terrain. They are excellent engineers, digging burrow systems of considerable complexity with multiple entrances, vaulted chambers for sleeping, and dedicated areas for hoarding food. A Quillbear spends much of its time in or near its burrow, emerging to hunt or patrol its territory on a regular schedule. They are primarily nocturnal but will hunt during the day if motivated by hunger or territorial defense. A gravid female becomes doubly protective of her burrow and will attack anything that approaches within sight of the entrance. Quillbears breed slowly and live for decades; an ancient Quillbear may have held the same territory for forty years or more.

## Combat Strategy

A Quillbear typically initiates combat by charging with its full mass and speed, attempting to bowl over opponents and impale them on its quill-covered body. Once engaged, it shifts to rapid claw strikes combined with attempted grappling. At range, it can launch its quills as projectile weapons, though it does not appear to "run out" of quills for long—they seem to regenerate or be continuously produced. The creature is intelligent enough to recognize when an opponent is particularly dangerous and will attempt to use burrows or rough terrain to control the engagement. A cornered or defending Quillbear fights with ferocious determination, and it has been known to fight through severe wounds rather than retreat.

## Attack Methods

### Pile-Driver Charge

The Quillbear hurls its massive, quill-covered body forward at tremendous speed, attempting to knock opponents down and impale them at once. The force of the charge alone can break bones, and the quills add terrible wounds of their own.

### Quill Barrage

The creature vibrates and flexes, launching multiple quills from its body with ballistic speed and accuracy. The quills can strike from surprising distance and seem nearly guided in their flight, often targeting vital areas.

### Raking Claws

The creature's forelimbs, though covered in quills, can still rake with terrible effect. The claws alone are enormous and sharp enough to tear through armor, and they work in coordinated combinations that are nearly impossible to defend against.

## Special Abilities

### Quill Regeneration

The Quillbear's quills continuously regenerate, allowing it to launch them repeatedly without becoming depleted. A single creature can launch dozens of quills in combat and still maintain full coverage of its body.

### Paralyzing Venom

The venom coating each quill is a complex cocktail of neurotoxins that begin their work immediately upon contact with blood. Victims are paralyzed by degrees, beginning at the injection site and spreading throughout the body, eventually leading to complete immobility and death if untreated.

### Burrow Network

The Quillbear is a superb builder and digger, capable of creating complex burrow systems with multiple exits and chambers. It can retreat through burrows, seal entrances, or even cause targeted collapses to trap pursuers.

### Venom Immunity

The Quillbear is naturally immune to its own venom and to most other toxic substances, allowing it to feed on animals and plants that would be lethal to other creatures.

## Additional Information

Fire is the Quillbear's greatest weakness—flames damage its quill covering directly, can ignite the venom causing painful explosions, and burn the creature's underlying fur. Smoke and heat also seem to cause it distress and disorientation. Its burrows can be rendered uninhabitable by fire or flooding, forcing a Quillbear to abandon its territory. The creature's quills, if harvested properly, are extraordinarily valuable—they can be fashioned into natural weapons that retain their venom for months or years, or processed into powerful poisons for sale on the black market. The hide under the quills is thick and can be crafted into armor of fine quality. Some desperate communities hire Quillbear hunters, paying substantial sums for the removal of problem creatures; these hunts are among the most dangerous undertakings a mortal can pursue, and many hunters do not survive their pursuit.

## Attributes

- **Strength:** 19-24 (1d6+18)

- **Endurance:** 15-20 (1d6+14)

- **Dexterity:** 10-13 (1d4+9)

- **Agility:** 7-12 (1d6+6)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 7-12 (1d6+6)

- **Will:** 14-17 (1d4+13)

- **Reasoning:** 5-10 (1d6+4)

- **Creativity:** 6-9 (1d4+5)
