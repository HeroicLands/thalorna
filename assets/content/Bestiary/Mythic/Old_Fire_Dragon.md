---
tags:
  - mythic
  - image-needed
  - creature
name:
  full: Old Fire Dragon
  aliases:
    - Fire Wyrm
description: "A millennium-old fire-breathing wyrm of ash and calamity, sapient and vengeful, hoarding kingdom-bankrupting wealth over lands it conquers and razes."
shortcode: oldfrdrg
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
    str: 1d6+57
    end: 1d6+42
    dex: 1d4+6
    agl: 1d4+6
    per: 1d6+12
    snt: 1d4+1
    aur: 1d6+11
    wil: 1d6+18
    rea: 1d6+14
    cre: 1d6+10
    emp: 1d6+10
    elo: 1d6+14
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 60 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 45 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 21 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 17 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 90 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 95 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 90 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 93 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 68 } }
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 84
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
            spread: 12
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 25
            aspect: piercing
          lengthBase: 10
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
        masteryLevelBase: 80
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
            spread: 24
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: 24
            aspect: edged
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
    - name: Tail
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 75
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
            spread: 32
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 23
            aspect: blunt
          lengthBase: 11
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
        masteryLevelBase: 96
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
            modifier: 19
            aspect: fire
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 80
          drawBase: 0
          traits:
            breath: true
            impactBands: 19 · 15 · 11 · 7
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 16
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 16
          - name: Left Wing
            shortcode: lwingzone
            probWeight: 12
          - name: Torso
            shortcode: torsozone
            probWeight: 16
          - name: Right Wing
            shortcode: rwingzone
            probWeight: 12
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 16
          - name: Tail
            shortcode: tailzone
            probWeight: 12
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
              blunt: 28
              edged: 30
              piercing: 29
              fire: 27
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
              blunt: 28
              edged: 30
              piercing: 29
              fire: 27
          - name: Left Fore Foot
            shortcode: lfftloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a3
              blunt: 26
              edged: 28
              piercing: 27
              fire: 25
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
              blunt: 22
              edged: 24
              piercing: 23
              fire: 21
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: &a4
              blunt: 28
              edged: 30
              piercing: 29
              fire: 27
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
              blunt: 28
              edged: 30
              piercing: 29
              fire: 27
          - name: Left Hind Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a7
              blunt: 26
              edged: 28
              piercing: 27
              fire: 25
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
              blunt: 26
              edged: 28
              piercing: 27
              fire: 25
      weight:
        base: 8000
        calc: "8000"
      reachBase: 0
      bodyScaleBase: 3.01
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 180
        leaguesPerWatch: 18
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

You should have known. In every story, in every warning passed between settlements, in every omen the seers read in fire and bone — you should have known not to come here.

The moment you cross into the dragon's country the world changes. The air is suffocating, thick with heat and the acrid stink of sulfur that burns your nostrils. The ground under your feet is blackened to glass in places, scarred by old fire. The stone itself seems to remember pain. Ash drifts on the wind like snow in some nightmare of winter, and everything — _everything_ — is the colour of old blood and char.

And then the mountain _speaks_.

It is not a roar, not any more. What comes is a sound like an avalanche, like the earth splitting open, like the death-cry of everything you hold dear. It shakes your bones, the stone, the air itself. It is a voice that expects to be heard.

The dragon comes out of the volcanic haze as though stepping through a veil between worlds. It is longer than a keep is tall, and its wings, when they open, put out the sun. Its scales burn in colours that have no names — crimsons so deep they are almost black, golds so old they seem tarnished, oranges that pulse with a light of their own. Every scale is scarred and bevelled and layered thick as plate armour. Spines crown its back like a king's dagger-teeth, and its eyes — its eyes hold neither the hunger of a young beast nor the calculation of a grown one. Something older. Something that has seen things you cannot imagine, and has not forgotten any of them.

The heat is not a sensation any more. It is the whole of existence. Your skin blisters. Your lungs scream. Every breath is agony. And the dragon has not yet moved toward you.

It only watches. And in that watching you understand — with the crystal clarity of someone about to die — that you are nothing. An insect. A brief flicker that will not even register as it passes.

The dragon's mouth opens, and flame pools in its throat like the heart of a star.

# Dossier {#dossier}

The Old Fire Dragon is a force of nature with a mind and a will. In more than a thousand years it has gathered wealth that would beggar kingdoms, taken and retaken territory across several regions, and left a record written in ash. It is not a predator so much as a calamity — a disaster that remembers, thinks and intends.

Dragons of this age are people, in the way that matters. They speak, in voices with something infernal in them. They compose verse about their conquests. They negotiate with kingdoms, taking tribute in return for not burning them, and they hold grudges across centuries, remembering the name of a warrior who wounded them five hundred years ago and hunting his descendants for the fault of their birth. Such a dragon is often called by name; the legends treat it as a figure of history, not an animal. It has advised mages, bargained with the heads of churches, and argued philosophy with the best minds of its age — generally before burning their towers.

## Its Country

An old fire dragon's range takes in several valleys, or a mountain chain, or a stretch of badland. The dragon itself is seldom seen and always felt: smoke over its lair, ash on the wind from its flights, sulfur in the air. Whole cultures take their shape from it. Kingdoms build tribute systems to keep an uneasy peace. Religious orders grow up around its worship or its appeasement. Expeditions to old ruins plan around its known movements, since a disturbed site can bring it down on them. Every foot of the range is under its notice; anything that moves on the land or over it is seen and sorted into tribute-payer, prey or threat.

## The Body

Thirty-two feet from snout to rump, with wings nearly fifty feet across, the dragon dwarfs anything else that walks. The scales are thick, layered and bevelled to shed even a siege engine's stone, and every one of them carries the marks of some battle — gouges, burns, cracks healed crooked. The colours are ancient: crimsons on the edge of black, golds so tarnished they look silver in some lights, oranges that glow like embers at the joints and seams. A crown of spines runs from the head to the root of the tail, each as long as a man's arm. The eyes are large and intelligent, molten amber ringed in gold. Smoke curls from the nostrils without pause. The teeth are dagger-long and stained with the ash of a thousand fires. The wings are smaller in proportion than a younger dragon's and far stronger, made to carry great loads and to fly very high; the tail is enormous, muscular, and scarred from centuries of use as weapon and tool.

Nothing ordinary gets through the scales. Siege weapons, arrows and swords do next to nothing; a magical weapon can bite, with a great deal of work. Magic finds the dragon nearly as hard to reach — many spells fail on it partly or altogether, and workings that would wreck another creature are an irritation to it. Fire, heat and burning cannot touch it at all; it swims in lava, sleeps in a furnace, breathes superheated air, and its hoard and whatever it carries are as safe from fire as it is.

## Hoard, Grudges, Servants

The hoard is a library of conquest more than a treasury. Every piece has a story and a place in the dragon's memory, and it walks the hoard in sections and knows at once when anything has been moved. The theft of one copper coin can bring the whole region to ruin. The memory behind that is perfect and a thousand years deep: every warrior who ever wounded it, every dynasty that ever paid, the site of every settlement within a hundred miles, and an intellect to match the best scholars, fed for centuries. It deals with other thinking creatures, and it sets them in order — who pays, who may cross, who is warned — and its word, once given, is stone; whoever breaks an agreement is hunted to the ends of the earth. Its grudges pass down human generations. The great-grandson of a knight who once drew its blood will be destroyed for it, the steps of the revenge calculated across decades like a sum. The very oldest of these dragons take pupils, or set lesser creatures under them — wyverns, fire elementals, intelligent servant peoples — and send them on the small errands while keeping the important kills for themselves.

Terror is a weapon it uses on purpose. It lets travellers see its shadow pass over. It burns an outlying village to frighten a whole province. It sends a message to a city by burning a caravan on the road to it. By the time it comes in person, many of its enemies are already beaten.

## The War It Fights

A thousand years of battle have made it a master of the craft. It knows siege work, cavalry and what men's weapons can and cannot do; it takes ground that favours it and denies ground that does not; it feints and pretends to run so as to draw an enemy into a place it has prepared. It kills the leaders and the strongest first, from the air, with fire, before a defence can form. It stays high and strafes, and against a formed army it circles far above and rains fire until the formation breaks into groups it can destroy one at a time. Against spellcasters it either overwhelms them before they can work or withdraws to the lair and its protections; it knows it is not invulnerable and takes strong magic seriously. It uses servants to keep an enemy busy while it watches from a safe distance for the right moment — patience is something only a creature with centuries to spend can afford. Truly threatened, it goes home. The lair is volcanic, warded, arranged for defence, with ways out prepared, and from it the dragon can pour fire on anyone who comes in while staying nearly untouchable; inside the mountain it knows every stone, passage and chamber, feels every tremor and footfall as if through its own skin, and cannot be crept up on.

The bite goes through steel plate and shears stone; at full strength it takes limbs off large creatures or the head, wrecks siege engines, breaks castle gates and crumples armour like parchment. It rakes with all four limbs in quick sequence, a flurry nearly impossible to parry, each claw a sword's length and hard as adamant, and a full rake kills the unready. The wings sweep with enough force to bring down buildings, flatten men, scatter a formation and overturn a siege tower. The tail strikes a wide arc at full strength and shatters walls, overturns gates, and kills several at a blow.

## Flame and Heat

The breath is a cone of roiling fire 60 feet long, hot enough to melt stone to lava and turn water to steam on the instant, and buildings in its path come partly down. The dragon breathes as often as it pleases and does not tire of it; the fire is, for practical purposes, endless. It can shape the flame, sparing a chosen object in the middle of a conflagration and burning everything else.

Heat comes off the dragon in shimmering waves and is lethal for 100 feet around it. The air within 100 feet is dangerously hot; within 50 feet bare skin burns; within 20 feet metal grows too hot to hold and blisters what it touches. The dragon can damp the heat a little, and does, when it wants someone to walk up to it alive. Anything with a mind within 100 feet of it feels a dread that comes from knowing exactly what it is looking at; animals bolt, cavalry breaks, and most men feel the urge to run.

## Speech and Memory

It speaks human tongues, the speech of dragons, and languages dead for centuries, and it uses all of them — to bargain, to philosophise, to compose, to threaten. Words are a weapon it understands as well as fire. Its memory of a thousand years is perfect: the names of warriors long dead, the places of ancient treasures, the lines of kingdoms that are now history. There is no better source on the past than an old fire dragon, for anyone who survives the asking.

## Attributes

- **Strength:** 58-63 (1d6+57)

- **Endurance:** 43-48 (1d6+42)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 13-18 (1d6+12)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 12-17 (1d6+11)

- **Will:** 19-24 (1d6+18)

- **Reasoning:** 15-20 (1d6+14)

- **Creativity:** 11-16 (1d6+10)

- **Empathy:** 11-16 (1d6+10)

- **Eloquence:** 15-20 (1d6+14)
