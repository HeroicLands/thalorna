---
tags:
  - dreadspawn
  - creature
name:
  full: Venomspitter
  aliases: []
description: "An acid-bodied ambush predator of warm jungles and humid caves, built entirely around producing and spitting corrosive toxins."
shortcode: vnmspttr
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
    str: 1d4+5
    end: 1d4+6
    dex: 1d4+12
    agl: 1d4+10
    per: 1d4+8
    aur: 1d4+8
    wil: 1d4+6
    rea: 1d4+6
    cre: 1d4+8
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 23 } }
    - name: Venomous Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: -1
            aspect: piercing
          lengthBase: 0
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
    - name: Corrosive Venom Spray
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: missile
        impairedByRoles:
          - manipulator
        strikeMode:
          type: missile
          shortcode: spray
          name: Corrosive Venom Spray
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 0
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: -1
            aspect: fire
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 15
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 2
          - name: Forebody
            shortcode: torsozone
            probWeight: 5
          - name: Hindbody
            shortcode: hindbodyzone
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
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles:
              - core
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles:
              - core
              - locomotor
            canHoldItem: false
            probWeight: 6
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindbodyzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
      weight:
        base: 100
        calc: "100"
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[vnmspttr|Venomspitter]]{float: top-left}

A shape moves at the corner of your eye — something serpentine and sinuous sliding across the stone with impossible grace. Then you see it whole and you freeze: a creature like a cobra crossed with something altogether more alien, its scales shimmering in colours that should not sit together — deep purples bleeding into sickly greens, reds burning where no red should be. The patterns seem to shift as you watch them, a dissonance that makes your eyes water. It raises its head, and you see the fangs — enormous hollow points from which a fluid drips and sizzles, leaving char on the stone. Its eyes are dark and intelligent and fixed on you with a hunter's certainty. Then the reek hits you, something acrid and burning, and you realise with a slow horror that the creature is already moving.

# Dossier {#dossier}

Venomspitters are living acid on a predator's frame. Everything in their bodies is arranged around making corrosive poison and delivering it, and they live where it is warm and wet enough for that poison to develop — jungle ruins, desert caves, deep humid caverns. They are solitary and hold a territory, and a Venomspitter thinks about its ground: it chooses its ambush points, it improves them over the years, and it plans. One can make a whole district impassable, which is why towns pay bounty hunters to go in after them.

## The Animal

A venomspitter is 8 to 12 feet long and hard to classify — serpent and spider both, with a segmented body that bends where a snake's would not. The scales carry iridescent warning colours, purples and greens and reds and sickly yellows, that seem to move as it moves. The head is flattened and vaguely reptilian, the mouth enormous, opening nearly square to the body, and in it sit huge hollow fangs that never stop dripping venom strong enough to smoke and to scar stone. The eyes are dark and ringed in contrasting colour. The whole body glistens with a slick secretion, part venom and part something else, that lets it move fluidly and near silently. The air is colder near it, and it stinks of chemicals.

## Its Ground

It waits. A venomspitter establishes its territory, builds good ambush positions inside it, and lies in one of them without moving for hours or days, having apparently worked out that waiting in the right place is more reliable than hunting. Some spin webs — the habit varies, and some do not spin at all — and those that do use them to mark the ground and as extra snares. It eats whatever it can paralyse and dissolve, from insects to people. A gravid female turns much more aggressive and may push her territory out a long way while she carries.

## The Spray

Its first weapon is distance. It projects streams of venom with surprising accuracy at targets 20 to 30 feet away, and the venom eats through armour and then through the flesh under it, leaving chemical burns of the worst kind. It is precise enough to aim for the gaps in mail or for a face, to blind. Pressed harder, it throws things — stones coated in venom, gouts of regurgitated acid, whatever comes to hand — fast and true. Only in close quarters does it bite, and the bite delivers the venom straight into the body: a paralysis that spreads from the wound and ends in death if nothing is done. The supply of venom appears to have no bottom. It can spray, coat, or concentrate the stuff for stronger effect, as the moment needs.

It fights at range for as long as it can, moving with real speed to angles where it can strike and not be struck. It is clever enough to go for the least dangerous target first and to single out mages, archers and anyone else who can hurt it from a distance. In melee it bites and slips away rather than staying in reach. Seriously wounded, it retreats to ground where it holds the advantage, or leaves altogether. Everything it touches is left tainted with its secretions, which go on eating armour and gear until they are neutralised, and equipment that has taken its venom may never be sound again.

## Hunting One

Cold is its weakness. In sustained cold its body slows and its venom production falls off sharply; in real cold it goes torpid. Fire works too, though the venom can quench some of the heat. Dry air is bad for it — it needs humidity to keep the venom coming — and cutting it off from water blunts it. The venom, carefully collected and kept, is worth a great deal to alchemists, poisoners and dark sorcerers alike; a single vial of the pure stuff commands a fortune from the right buyer, and the hide has alchemical value too. Hunting one calls for great care and proper protective gear. Mere contact with the venom is a serious injury.

## Attributes

- **Strength:** 6-9 (1d4+5)

- **Endurance:** 7-10 (1d4+6)

- **Dexterity:** 13-16 (1d4+12)

- **Agility:** 11-14 (1d4+10)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 9-12 (1d4+8)

- **Will:** 7-10 (1d4+6)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 9-12 (1d4+8)
