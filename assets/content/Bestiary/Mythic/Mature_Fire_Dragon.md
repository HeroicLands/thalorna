---
tags:
  - mythic
  - image-needed
  - creature
name:
  full: Mature Fire Dragon
  aliases: []
description: "A calculating apex fire dragon of three or four centuries, cruel and supreme, selecting its prey with deliberate predatory strategy."
shortcode: mtrfrdrg
type: being
data:
  icon: icon-dragonheadft
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
    str: 1d6+45
    end: 1d6+33
    dex: 1d4+5
    agl: 1d4+7
    per: 1d6+12
    snt: 1d4+1
    aur: 1d6+10
    wil: 1d6+16
    rea: 1d6+10
    cre: 1d6+8
    emp: 1d6+7
    elo: 1d6+10
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 48 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 36 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 19 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 13 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 84 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 66 } }
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 80
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
            spread: 6
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 19
            aspect: piercing
          lengthBase: 8
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
            armorReduction: 3
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 75
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 12
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: 18
            aspect: edged
          lengthBase: 7
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
    - name: Tail
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 16
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 17
            aspect: blunt
          lengthBase: 9
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
    - name: Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 84
        combatCategory: missile
        impairedByRoles:
          - manipulator
        strikeMode:
          type: missile
          shortcode: breath
          name: Breath
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 0
            modifier: 0
          impactBase:
            numDice: 1
            die: 4
            modifier: 15
            aspect: fire
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 60
          drawBase: 0
          traits:
            breath: true
            impactBands: 15 · 11 · 7
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 8
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 8
          - name: Left Wing
            shortcode: lwingzone
            probWeight: 6
          - name: Torso
            shortcode: torsozone
            probWeight: 8
          - name: Right Wing
            shortcode: rwingzone
            probWeight: 6
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 8
          - name: Tail
            shortcode: tailzone
            probWeight: 6
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
              - manipulator
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 1
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: rwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 1
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 1
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: tailzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: &a1
              blunt: 22
              edged: 24
              piercing: 23
              fire: 21
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 7
            protectionBase: *a1
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 7
            protectionBase: &a2
              blunt: 22
              edged: 24
              piercing: 23
              fire: 21
          - name: Left Fore Foot
            shortcode: lfftloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a3
              blunt: 20
              edged: 22
              piercing: 21
              fire: 19
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 7
            protectionBase: *a2
          - name: Right Fore Foot
            shortcode: rfftloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: *a3
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: &a5
              blunt: 16
              edged: 18
              piercing: 17
              fire: 15
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: &a4
              blunt: 22
              edged: 24
              piercing: 23
              fire: 21
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: *a4
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: *a5
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 7
            protectionBase: &a6
              blunt: 22
              edged: 24
              piercing: 23
              fire: 21
          - name: Left Hind Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a7
              blunt: 20
              edged: 22
              piercing: 21
              fire: 19
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 7
            protectionBase: *a6
          - name: Right Hind Foot
            shortcode: rhftloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: *a7
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 20
              edged: 22
              piercing: 21
              fire: 19
      weight:
        base: 3000
        calc: "3000"
      reachBase: 0
      bodyScaleBase: 2.61
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 65
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 190
        leaguesPerWatch: 16
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The mountain seems to be holding its breath.

You climb through the pass at dawn, not knowing that every stone under your feet, every drift of ash on the wind, belongs to something vast and breathing. The sky ahead is wrong — hazier than it should be, dark at the edges as if a storm were gathering. But there are no clouds. Instead the air thickens with heat and the stink of sulfur, a presence so heavy it presses on your skin like a living thing.

Then you hear it. Not a roar — something deeper. A rumble that comes up through the stone under your boots and shakes loose gravel from the cliffs above. Your body knows the sound before your mind does: _mine_. This place belongs to something, and you are trespassing.

The dragon comes out of the heat-haze like a god made flesh. It is longer than a merchant's barge, with wings that catch the light like molten copper. Its scales burn crimson and gold, colours so vivid they seem impossible, patterns that shift in the shimmer so that the creature looks larger than it is. A crown of spines runs down its back, each one wickedly sharp. Its eyes are ancient. The air around it writhes with heat, and the heat is enough to make breathing hurt.

It has not seen you yet. But the moment stretches. When it does notice you — and it will — there will be no escape, no mercy, no negotiation. Only the understanding of how small you are.

The dragon shifts, and the whole mountain trembles.

# Dossier {#dossier}

Between three and four hundred years old, the Mature Fire Dragon has claimed its ground, held it, gathered a hoard it knows piece by piece, and learned to hunt with a plan. It is calculating, cruel and entirely certain of itself, and it no longer hunts from hunger; it hunts because it chooses to, because the country is its own and everything in it lives at its pleasure. Where a young dragon strikes on impulse, a mature one chooses. It understands trade — which roads carry what, where the wealth goes — and it governs its region by burning caravans that would bring traffic where it does not want traffic, or letting merchants through for a price. It remembers a favour, a debt and an insult for decades, exactly.

## The Body

Heavily muscled, with the muscle visible under thick, overlapping, bevelled scales that turn most blows. The colour is deeper than a young dragon's — crimsons, burnished gold, oranges that seem to hold live flame. The spines are pointed enough to go through armour. The wings carry it easily, prey and all, for long stretches. The tail is thick and muscular and scarred from centuries of fights over territory. Heat comes off the dragon in visible waves; the ground where it walks is scorched black, its breath steams in warm weather, and a wavering light hangs about it always.

## The Hoard and the Arrangements

The hoard is large and kept in order. Every piece was chosen and every piece is accounted for; the dragon goes through it regularly and comes down on any disturbance with the fury of a natural disaster. It is not entirely solitary. Mature fire dragons take consorts, though the courtship is dangerous for both, lay their eggs in defended chambers and guard them, and keep other creatures as sentries or servants in return for protection. A mature dragon will talk to intelligent creatures when there is something in it for the dragon. It expects obedience and it expects the truth; a lie to it is a death sentence. It kills rival predators in its country, and above all other dragons — a territorial war between two mature dragons is a regional catastrophe. Now and then it spares someone, to be a messenger or a servant or a tool, and the mercy is never free.

## In a Fight

The dragon chooses its ground: somewhere it can rain fire and be hard to reach. It knows what men and their weapons can and cannot do and uses that knowledge without pity. It kills the dangerous first — spellcasters, the heavily armed — with breath and with teeth, and it uses the air to keep the position it wants, diving to strike and climbing out of reach before the answer comes. Against a large force it burns the ground to pen its enemies where it wants them. It will withdraw when badly hurt, but the withdrawal is a manoeuvre: it circles and comes in again from a direction nobody was watching. And it knows what fear does. It will show itself, and wait, and let the fear do half the work before it closes.

The bite takes limbs off and has taken heads; the teeth are as long as daggers and go through plate. The dragon often bites to grip and pin and then goes to work with the claws or the flame. The claws come in measured pairs, forcing an opponent onto the defensive and opening him for something worse; they shred plate and pierce scale. A sweep of the wings knocks men flat or throws them where the flame is about to fall. The tail sweeps wide, hits several at once, is strong enough to topple a wall or flip a wagon, and breaks bones where it lands.

## Flame and Heat

The breath is a cone of roiling flame that reaches 30 feet. It melts stone, sets everything that can burn alight at once, and cracks earth and masonry so that a building in its path may come partly down. The dragon can breathe again and again, though it paces itself rather than exhaust the fire.

Within 60 feet of the dragon the air is a furnace. Creatures there tire quickly and, kept there, suffer heat exhaustion and burns on any bare skin; plants wilt, standing water boils away, and stone begins to split. Within the same distance any thinking creature feels the dread of something much larger and older than itself, and horses, dogs and other animals panic outright. Fire of any kind does the dragon no harm. It swims in lava, sleeps on coals and breathes superheated air, and whatever it carries or wears is as safe from fire as it is.

## Attributes

- **Strength:** 46-51 (1d6+45)

- **Endurance:** 34-39 (1d6+33)

- **Dexterity:** 6-9 (1d4+5)

- **Agility:** 8-11 (1d4+7)

- **Perception:** 13-18 (1d6+12)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 11-16 (1d6+10)

- **Will:** 17-22 (1d6+16)

- **Reasoning:** 11-16 (1d6+10)

- **Creativity:** 9-14 (1d6+8)

- **Empathy:** 8-13 (1d6+7)

- **Eloquence:** 11-16 (1d6+10)
