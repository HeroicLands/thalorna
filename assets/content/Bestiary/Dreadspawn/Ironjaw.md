---
tags:
  - dreadspawn
  - creature
name:
  full: Ironjaw
  aliases: []
description: "A metal-fused pack predator corrupted by dark magic that hunts mountains and industrial wastes, marking territory with bones and claw-scratches."
shortcode: ironjaw
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
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d4+12
    end: 1d4+12
    dex: 1d4+6
    agl: 1d4+8
    per: 1d4+8
    aur: 1d4+6
    wil: 1d4+10
    rea: 1d4+5
    cre: 1d4+5
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 8 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 38 } }
    - name: Metal-Edged Bite
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
          name: Metal-Edged Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 3
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
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 62
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
            modifier: 2
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
    - name: Armour Charge
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles:
          - core
        strikeMode:
          type: melee
          shortcode: ram
          name: Armour Charge
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 2
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
              - manipulator
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
              blunt: 10
              edged: 9
              piercing: 8
              fire: 10
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase:
              blunt: 10
              edged: 9
              piercing: 8
              fire: 10
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 10
              edged: 9
              piercing: 8
              fire: 10
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 10
              edged: 9
              piercing: 8
              fire: 10
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase:
              blunt: 10
              edged: 9
              piercing: 8
              fire: 10
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase:
              blunt: 10
              edged: 9
              piercing: 8
              fire: 10
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase:
              blunt: 10
              edged: 9
              piercing: 8
              fire: 10
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 10
              edged: 9
              piercing: 8
              fire: 10
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 10
              edged: 9
              piercing: 8
              fire: 10
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 10
              edged: 9
              piercing: 8
              fire: 10
      weight:
        base: 250
        calc: "250"
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[ironjaw|Ironjaw]]{float: top-left}

The thing moves like a wolf but built from armor and malice. Its entire body is covered in interlocking metal scales that catch light with a dull, threatening gleam. The jaw juts forward unnaturally, lined with teeth that gleam like steel and appear far too numerous for any natural animal. Its eyes are cold and bright, burning with a hunger that feels deliberate and cruel. When it breathes, sparks catch in its nostrils. It walks with deliberate slowness, confident, each step sinking slightly into the ground under its weight.

# Dossier {#dossier}

Ironjaws are predatory, pack-based hunters corrupted by dark magic and fused with metallic material, creatures of burden and violence. These armored predators hunt in coordinated packs across mountain regions and barren wastes, following territories marked by claw-scratches and the bones of previous kills. Adventurers encounter them in mountains, abandoned mines, stone deserts, and places where corruption has taken hold of wildlife.

## Presentation

The Ironjaw resembles a large hunting dog or wolf in basic shape, but it is covered entirely in overlapping metal scales that appear fused to its skin. The scales range in color from cold gray to bronze to sickly verdigris – some are polished and gleaming, others are corroded and pitted. The creature's head is disproportionately large, dominated by a protruding jaw lined with teeth that appear metallic and far too numerous for any natural animal. The jaws themselves are capable of closing with grinding, metal-on-metal force. Its eyes burn with intelligence and malevolence, bright points of unnatural color. Its claws are metal-edged, capable of sparking off stone. The creature's entire body radiates heat – its breath carries warmth and the scent of forge-smoke. When it moves, metal grinds against metal in a sound like distant war.

## Key Behaviors

Ironjaws hunt in organized packs of four to eight individuals, coordinating tactics with surprising cunning. They are absolutely territorial and will attack anything that enters their claimed regions with relentless determination. They mark territory through claw-scratchings on stone and the deliberate scattering of bones. The creatures are intelligent enough to recognize individuals and remember previous conflicts. They hunt actively, pursuing prey relentlessly once engaged. When pack members are killed, the survivors show what looks like grief before attacking with increased ferocity. Outside their territories, they become less aggressive; they will flee to home ground rather than pursue indefinitely.

## Combat Strategy

Ironjaws use coordinated pack tactics, attempting to surround prey and drive it toward chosen kill zones. The pack's strategy is to wound and exhaust prey, with multiple members attacking in rotation while others circle to prevent escape. Individual Ironjaws, separated from pack support, rely on brute strength and durability to overcome opponents. The creatures charge when they judge themselves to have advantage, using their heavy weight as a weapon. When badly wounded, a separated Ironjaw may retreat to rejoin pack support; if pack support cannot reach the isolated creature, it fights with desperate ferocity until destroyed or victorious.

## Attack Methods

### Metal-Edged Bite

The Ironjaw's jaws snap forward with tremendous force, capable of crushing through bone and armor. The metallic nature of the teeth and jaw structure allows it to bite through materials that would blunt normal fangs.

### Armor Charge

The creature lowers its head and charges at high speed, using its metallic armor as both battering ram and blade. Targets struck are battered and knocked off their feet; the charge can drive targets backward into hazards.

### Raking Claw Strikes

The Ironjaw slashes with its metal-edged claws, attempting to open wounds and tear armor apart. The metal edges catch on armor, potentially ripping away pieces.

## Special Abilities

### Metallic Plating

The Ironjaw's scales are fused with metallic material, providing heavy protection against physical attacks. Cuts and thrusts do little against it; blunt force and crushing blows are more effective.

### Pack Coordination

Pack members fight better together than apart when within sight or hearing of one another. The death of a pack leader throws the pack into brief confusion; it reestablishes hierarchy and regains coordination after some moments.

### Heat Resistance

The Ironjaw's internal nature allows it to function in high-temperature environments and to resist fire and heat. However, extreme cold damages the metallic structure and slows the creature.

### Temporary Hardening

The creature can deliberately reinforce its metallic scales, increasing its resistance to damage. The hardening lasts only a short while; once used, it needs time before it can be used again.

## Additional Information

Acid and corrosion-based attacks are particularly effective against Ironjaws, as they degrade the metallic components of the creature's armor. Extreme cold similarly weakens it and can cause its plating to fail. Separating pack members and preventing coordination significantly reduces their effectiveness. By some accounts, Ironjaws can survive for extended periods with heavy damage to their bodies, as long as their central vital areas remain intact.

## Attributes

- **Strength:** 13-16 (1d4+12)

- **Endurance:** 13-16 (1d4+12)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 9-12 (1d4+8)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 11-14 (1d4+10)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 6-9 (1d4+5)
