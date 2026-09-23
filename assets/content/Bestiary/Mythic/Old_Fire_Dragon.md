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

Inside the dragon's domain the air is suffocating, thick with heat and the acrid stench of sulfur that burns your nostrils. The ground under your feet is blackened to glass in places, scarred by centuries of fire. The stone itself seems to remember pain. Ash drifts on the wind like snow in some nightmare of winter, and everything – _everything_ – is the color of old blood and char.

And then the mountain _speaks_.

It is more than a roar. The Old Fire Dragon announces itself with a sound like an avalanche, like the earth splitting open. The sound reverberates through your bones, through stone, through the air itself – a voice that has been speaking for a thousand years and expects to be heard.

The dragon emerges from the volcanic haze as though stepping through a veil between worlds. Thirty-two feet from snout to rump, with wings that span nearly fifty feet and block out the sun. Its scales burn in colors that have no names – crimsons so deep they're almost black, golds so ancient they seem tarnished, oranges that pulse with inner light. Every scale is scarred and beveled and layered thick as plate armor. Spines crown its spine like a king's dagger-teeth, and its eyes hold the weight of centuries – not the hunger of youth or the calculation of maturity, but something older, that has seen civilizations rise and collapse, that remembers the names of kingdoms now dust, and that knows the taste of your kind's fear across generations.

The heat is everywhere. Your skin blisters, and every breath is agony. The dragon has not yet moved toward you.

It only watches, the way one might watch an insect.

The dragon's mouth opens, and flame pools in its throat like the heart of a star.

# Dossier {#dossier}

The Old Fire Dragon is a force of nature given consciousness and will. Over a thousand years old, it has accumulated wealth that would bankrupt kingdoms, conquered and reconquered territory across multiple regions, and left a legacy written in ash and legend. An old fire dragon is a calamity: a natural disaster with intelligence, memory, and purpose.

Dragons of this age are sapient in ways that younger dragons are not. They speak, in voices that resonate with infernal power. They compose poetry about conquest. They create elaborate diplomatic arrangements with human kingdoms, extracting tribute in exchange for not burning them. They hold grudges that span centuries and remember the names of warriors who wounded them five hundred years prior, hunting down descendants for the crime of being born into the wrong family.

An old fire dragon's territory is typically a vast region encompassing multiple valleys, mountain ranges, or badlands. The dragon itself is rarely seen but constantly felt – smoke from its lair, ash from its flying, the scent of sulfur on the wind. Its presence shapes entire cultures. Kingdoms invest in tribute systems to maintain fragile peace. Religious orders form around the worship or appeasement of the dragon. Archaeological expeditions plan carefully around confirmed dragon activity, knowing that disturbing ancient sites may trigger catastrophic retaliation.

The dragon at this age is sometimes called by name. Legends speak of it as a historical figure rather than an animal. It has counseled with mages, negotiated with church leaders, and engaged in philosophical debates with the greatest minds of the age – usually before burning their towers.

## Presentation

An old fire dragon is a creature of terrifying majesty. Thirty-two feet in length from snout to rump, with wings spanning nearly fifty feet, the dragon dwarfs every other creature. Its scales are thick and layered like plate armor, with beveling and angles that deflect even siege weapons. The coloration is ancient – crimsons so dark they border on black, golds so tarnished they seem silver in certain light, oranges that pulse with ember-light at joints and seams. Every scale bears scars: deep gouges, burn marks, small fractures that have healed imperfectly. These scars are earned, each one a trophy from some forgotten battle or conquest.

A crown of massive spines runs from the dragon's head to the base of its tail, each spine as long as a man's arm and wickedly sharp. The dragon's eyes are large and intelligent, burning with molten amber surrounded by golden irises. Smoke curls perpetually from its nostrils. Its teeth are long as daggers and stained with the ash of a thousand fires.

The dragon's wings are proportionally smaller than those of younger dragons but far more powerful, built for carrying enormous loads and enduring extreme altitudes. The tail is massive and muscular, scarred from centuries of use as a weapon and tool. The entire creature radiates age, power, and a predatory menace so heavy that the sight of it causes primal fear.

Heat radiates from the dragon in shimmering waves. The ambient temperature within 100 feet of the creature is dangerously high. Within 50 feet, unprotected humans begin to burn. The dragon's presence literally scorches the earth.

## Key Behaviors

**Absolute Territorial Dominance:** Every square foot of the dragon's claimed territory is under its awareness and dominion. It knows every cave, every stream, every animal within its range. Anything moving on or above its land is noted and classified as either tribute-payer, prey, or threat.

**Meticulous Hoard Management:** The dragon's hoard is a library of conquest as much as a treasure. Each piece has a story, a context, a place in the dragon's vast memory. The dragon visits sections of the hoard regularly and knows instantly if anything is disturbed or missing. Theft of even a single copper coin may trigger apocalyptic retaliation.

**Perfect Memory and Vast Intellect:** The dragon remembers every significant event in its thousand-year existence with perfect clarity. It recalls the names of warriors who wounded it, the lineages of kingdoms that paid tribute, the locations of every settlement within a hundred miles. Its intellect rivals the greatest scholars, and it has accumulated knowledge across centuries.

**Negotiation and Hierarchy:** Unlike younger dragons, an old fire dragon engages with other sapient creatures. It establishes hierarchies – who must pay tribute, who may traverse its lands, who receives threats. These arrangements are binding; the dragon's word is as immutable as stone. Those who break agreements are hunted unto the ends of the earth.

**Psychological Warfare:** The dragon uses terror as a weapon. It allows travelers to see its shadow passing overhead. It burns isolated settlements to drive entire regions into fear. It sends messages to cities through the immolation of caravans. By the time it appears for a direct confrontation, many enemies are already broken.

**Immortal Grudges:** The dragon holds grudges across human generations. The great-grandson of a knight who once wounded it will face destruction, not for his own actions, but for the crime of ancestry. These grudges are pursued with mathematical precision, each step calculated across decades.

**Teaching and Delegation:** The very oldest dragons sometimes take students or establish hierarchies among lesser creatures – wyverns, fire elementals, or even intelligent servant species. The Old Fire Dragon may delegate lesser tasks to these subordinates while reserving the most important kills for itself.

## Combat Strategy

An old fire dragon is a master tactician with a thousand years of battle experience. It understands siege warfare, cavalry tactics, and the limitations of human weapons. It positions itself to maximize terrain advantage and minimize vulnerability. It uses feints and false retreats to lure enemies into prepared positions.

The dragon will typically target the leadership and most powerful combatants first, using fire breath to kill them before they can organize a coordinated defense. It uses flight to maintain elevation advantage while strafe-attacking with breath weapons. Against organized forces, it will circle at extreme altitude, raining fire on formations, breaking them into scattered groups that can be destroyed piecemeal.

Against spellcasters, the dragon uses overwhelming offense to prevent casting, or it may retreat to lair and unleash spell resistance or magical defenses. It understands that it is not invulnerable and respects powerful magic.

The old dragon may employ servants or subordinate creatures to harass enemies, keeping them occupied while the dragon itself observes from safe distance, waiting for the right moment to strike. Patience is a tool available only to creatures with centuries of time.

If truly threatened, the old dragon will retreat to its volcanic lair, where it has established magical defenses, prepared terrain advantages, and escape routes. From the lair, it can rain down catastrophic fire on invaders while remaining relatively safe. A dragon in its own volcanic castle is nearly unassailable.

## Attack Methods

### Bite

The old dragon's bite is apocalyptic in force. The teeth can pierce through steel plate and shear stone. A bite at full strength can sever limbs or decapitate large creatures. The dragon's bite is powerful enough to destroy siege equipment, demolish castle gates, and crush armor as though it were parchment.

### Claw Rake

The dragon rakes with all four limbs in rapid sequence, a flurry of attacks that is nearly impossible to defend against. Each claw is as long as a sword and hard as adamant. A full claw rake from an old dragon can be absolutely fatal to unprepared opponents.

### Wing Buffet

The dragon sweeps its massive wings with enough force to topple buildings. This attack can knock creatures down, scatter formations, and even overturn siege equipment. The force is hurricane-strength.

### Tail Sweep

The dragon's tail is a weapon unto itself – thick, powerful, and capable of striking a wide area in a sweeping arc. A full strength tail strike can shatter walls or overturn castle gates. Multiple creatures can be struck and potentially killed by a single tail sweep.

### Fire Breath

The dragon exhales a spreading gout of roiling flame, reaching 60 feet, so hot it melts stone and vaporizes water instantly. The fire is hot enough to reduce solid stone to lava. Structures in the path of the breath weapon may partially collapse. The dragon can use this ability repeatedly, and its fires are effectively endless – it will not tire from using this weapon.

## Special Abilities

### Fire Breath

The old dragon's flame reaches 60 feet in a spreading gout. The fire is hot enough to melt castle stone, vaporize water, and reduce fortifications to rubble. It can be used repeatedly without fatigue. The flames can be directed in specific patterns, allowing the dragon to spare specific objects while incinerating everything else.

### Flight

The dragon is an incomparably powerful flier, capable of sustained flight at extreme altitudes and in severe weather. It can carry enormous loads – the ruins of a tower, a felled giant, or treasures beyond count. The dragon can engage in aerial combat against flying foes while maintaining superior positioning.

### Armored Scales

The dragon's scales are all but proof against ordinary weapons. Siege weapons, arrows, and swords inflict minimal damage. Magical weapons can penetrate, but extensive effort is required. The dragon's age has made it armor itself – a living fortress.

### Heat Aura

Intense, lethal heat radiates from the dragon for 100 feet around it. Within 50 feet, unprotected flesh burns. Within 20 feet, metal becomes hot enough to blister skin. The dragon can modulate this aura somewhat, allowing selected individuals safe passage if it chooses.

### Draconic Presence

The dragon radiates absolute predatory dominance. Intelligent creatures within 100 feet are filled with dread and terror, recognizing the dragon as an apex threat beyond their capability to defeat. Animals panic, cavalry breaks, and many combatants experience overwhelming urges to flee.

### Fire Immunity

The dragon is completely immune to all fire and heat. It can swim through lava, rest in infernos, and breathe superheated air. Its immunity extends to its hoard and possessions.

### Spell Resistance

The dragon has developed resistance to magic across its millennium of existence. Many magical effects are partially or completely ineffective against it. Spells that would devastate other creatures are merely inconveniences.

### Lair Awareness

The dragon knows every stone, passage, and chamber within its lair. It knows the precise location of every object, every treasure, every corner. It can sense tremors and movement throughout the lair as though it were a direct extension of its senses. Sneaking within the dragon's own mountain is nearly impossible.

### Speech and Sapience

The old dragon speaks. It speaks human languages, draconic speech, and languages that have been dead for centuries. It can engage in negotiation, philosophy, poetry, and threats. It uses language as a weapon, understanding how to work on a mind and the power of words.

### Immortal Memory

The dragon remembers every significant event from over a thousand years of existence. It recalls the names of long-dead warriors, the locations of ancient treasures, the bloodlines of kingdoms now reduced to history. This perfect memory makes it a priceless source of historical knowledge – should one survive negotiating with it.

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
