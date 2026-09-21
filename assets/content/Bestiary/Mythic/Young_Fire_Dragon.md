---
tags:
  - mythic
  - image-needed
  - creature
name:
  full: Young Fire Dragon
  aliases: []
description: "A century-old fire dragon at its most volatile, killing with raw territorial ferocity as it carves out fresh land and hoard."
shortcode: yngfrdrg
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
    str: 1d6+33
    end: 1d6+24
    dex: 1d4+4
    agl: 1d6+7
    per: 1d6+12
    snt: 1d4+1
    aur: 1d6+9
    wil: 1d6+14
    rea: 1d6+8
    cre: 1d4+7
    emp: 1d4+5
    elo: 1d6+8
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 36 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 27 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 60 } }
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 71
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
            spread: 3
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 13
            aspect: piercing
          lengthBase: 5
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
        masteryLevelBase: 65
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
            spread: 6
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: 12
            aspect: edged
          lengthBase: 4
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
        masteryLevelBase: 52
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
            spread: 8
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 11
            aspect: blunt
          lengthBase: 6
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
        masteryLevelBase: 75
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
            modifier: 11
            aspect: fire
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 40
          drawBase: 0
          traits:
            breath: true
            impactBands: 11 · 7
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 4
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 4
          - name: Left Wing
            shortcode: lwingzone
            probWeight: 3
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Right Wing
            shortcode: rwingzone
            probWeight: 3
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 4
          - name: Tail
            shortcode: tailzone
            probWeight: 3
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
              blunt: 16
              edged: 18
              piercing: 17
              fire: 15
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
              blunt: 16
              edged: 18
              piercing: 17
              fire: 15
          - name: Left Fore Foot
            shortcode: lfftloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a3
              blunt: 14
              edged: 16
              piercing: 15
              fire: 13
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
              blunt: 10
              edged: 12
              piercing: 11
              fire: 9
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: &a4
              blunt: 16
              edged: 18
              piercing: 17
              fire: 15
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
              blunt: 16
              edged: 18
              piercing: 17
              fire: 15
          - name: Left Hind Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a7
              blunt: 14
              edged: 16
              piercing: 15
              fire: 13
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
              blunt: 14
              edged: 16
              piercing: 15
              fire: 13
      weight:
        base: 1000
        calc: "1000"
      reachBase: 0
      bodyScaleBase: 2.16
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 200
        leaguesPerWatch: 14
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

You round the outcrop of rust-coloured stone and freeze. The heat hits you first — a visible shimmer rising from the canyon floor, fierce enough to make your eyes water. Then you smell it: sulfur, and something older, something primal. Your skin prickles.

The young dragon is smaller than the legends promised, but the word _smaller_ holds no comfort as it shifts on the canyon ledge. It is coiled muscle and fury, longer than a hay-wain, with a wingspan that could eclipse the sun if it stretched. Its scales catch the light like hammered copper and burnished gold, each one overlapping the next. A thin column of smoke rises from its nostrils and curls into pale ribbons.

It has not seen you yet. But it will. It _will_.

Its movements are sharp, almost twitchy — the energy of adolescence barely held inside a body made for destruction. It paces the ledge like a caged beast, its claws scoring deep grooves in stone that should not take a mark. Everything about it is hunger: for the ground it stands on, for gold, for glory, for the chance to burn down whatever challenges it.

Its head snaps toward a distant sound — a rockslide, perhaps, or a frightened animal. It launches from the ledge with a roar that scorches the air, and you understand, sickeningly, that there are moments when the world remakes itself around something this primal.

# Dossier {#dossier}

The Young Fire Dragon is the dragon at its most violent and least careful. It is about a century old. It has only lately claimed ground and begun a hoard, and without the practised cruelty of an old wyrm it kills with plain ferocity and territorial rage. It has come through the years when larger things hunted it, and it now means to be the thing that hunts. It has everything to prove and nothing to lose, which makes it more dangerous than a cannier animal, not less.

## The Body

Sleek and muscular, built for speed as much as for power, in overlapping scales of crimson, copper and burnished gold with burned orange deepening toward the spine. The scales are warm to the touch even at rest. The eyes are molten amber and follow movement like a hawk's. It runs about 16 feet from nose to rump, with wings spreading nearly 24 feet — large for its body, and the source of the agility young dragons trade on — and it is lean beside an older dragon, the muscle showing under the armour of scales. The tail is thick and made for striking, and already scarred from fights with other big animals over ground. Heat shimmers off it always; its breath steams in warm weather; the ground darkens where it walks; the air grows hotter with every step toward it.

## Its Temper

Young fire dragons are impetuous. They attack without much of a plan. They speak in roars, in tremors through the ground, and in the smell of sulfur. They remember who wronged them and go after them: a dragon that has been wounded, or had its hoard touched, hunts the ones responsible with a single mind. It attacks anything it reads as a threat to its ground or its gold and does not parley — it has not yet learned that words can do more than fire. It hunts for food and for the sport of it, and will follow a fleeing animal a long way. The hoard is small beside a mature dragon's and guarded just as jealously; Hoard-Obsession comes early and never leaves. It is curious about the world and proud of itself, and it may spare a victim for a moment to gloat, though the moment rarely lasts. Any defiance brings immediate, explosive reprisal, and once it has taken offence there is no talking to it.

They lair in volcanic highlands, volcanic canyons and mountain country with deep cave systems. Merchants, travellers and the settlements of the mountain valleys reckon with periodic sightings and attacks.

## In a Fight

Speed and aggression, not tactics. Close, burn everything, chase whatever runs. It likes to fight from the air when it can, strafing from above where nothing can reach it. Cornered, or faced with numbers, it loosens a great gout of fire and then takes to the air to make distance; it is not yet wise enough to play for position or to feign a retreat, so when it leaves, it means to come back with more. It tries to cut one opponent out and destroy him before turning to the next rather than spread itself across a group, and it has little respect for human tactics or armour, believing its own hide cannot be pierced — a belief its recent victories over lesser predators have done nothing to correct.

The bite takes a limb off. It comes in with the whole body behind the strike, and it often bites to grip and pin before clawing or burning what it holds. The claws come in a blurring pair that shreds armour and flesh alike, a finishing move on a pinned opponent or the follow-up to a bite. The tail whips a wide arc, knocking the smaller flat or off balance and opening them to something worse. Its scales turn ordinary weapons; a magical blade or a long, concentrated attack is needed to hurt it badly.

## Flame and Heat

The breath is a cone of roiling flame 15 feet long that lights everything it touches at once and burns badly anyone caught in it. The dragon can breathe three times before it needs rest, and it can push past that at the cost of exhausting itself. Heat radiates from it without pause: within 30 feet the air is noticeably hotter, unpleasant to stand in and slow to cross, and staying in it long enough brings on exhaustion.

## Attributes

- **Strength:** 34-39 (1d6+33)

- **Endurance:** 25-30 (1d6+24)

- **Dexterity:** 5-8 (1d4+4)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 13-18 (1d6+12)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 10-15 (1d6+9)

- **Will:** 15-20 (1d6+14)

- **Reasoning:** 9-14 (1d6+8)

- **Creativity:** 8-11 (1d4+7)

- **Empathy:** 6-9 (1d4+5)

- **Eloquence:** 9-14 (1d6+8)
