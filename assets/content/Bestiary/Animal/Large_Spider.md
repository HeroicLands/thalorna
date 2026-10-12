---
shortcode: lrgspdr
name: {full: Large Spider, aliases: []}
type: being
subType: creature
description: "A dark-chitined arachnid with an eighteen-to-thirty-inch leg span, its bristled body armed with sensory hairs for stalking small prey."
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
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+5
    end: 1d4+6
    dex: 1d4+14
    agl: 1d4+12
    per: 1d4+8
    aur: 1d4+6
    wil: 1d4+8
    rea: 1d4+6
    cre: 1d4+12
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 23}}
    - name: Venomous Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
  system:
    body:
      structure:
        zones:
          - {name: Cephalothorax, shortcode: cephzone, probWeight: 1}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 1}
          - {name: Legs, shortcode: legszone, probWeight: 1}
        parts:
          - name: Cephalothorax
            shortcode: cephpart
            bodyZoneCode: cephzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: legszone
            roles: [locomotor]
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
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 15, calc: "15"}
      reachBase: 0
      bodyScaleBase: 0.81
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

![[lrgspdr|Large Spider]]{float=top-left}

The passage into the old grave is low, and you go in stooping, with the lamp held out in front of you. Silk brushes your face, dry and strong as thread, and when you lift the lamp the whole roof of the passage is gray with it, sheets and funnels of it, and something on the far side of the sheets is the size of a dinner plate. It is black and glossy, with legs banded faintly brown, and it is not moving. Then it is, very fast, along the roof toward you, upside down, and the lamplight catches a cluster of eyes at the front of it like wet beads.

# Dossier {#dossier}

The Large Spider is a hunting spider with a leg span of eighteen inches to thirty, heavy-bodied, glossy brown to black, with a venomous bite that numbs and then paralyzes. It weighs about fifteen pounds, as much as a fat goose. It lives in damp, sheltered, dark places with something to eat in them, and in [[place-galvaren|Galváren]], where the rain and fog keep everything damp and the coast is crowded with the stone circles and passage graves of a people older than the Tarvéni, it is the creature the old stones are known for. It hunts rats, birds, lizards, bats and anything else it can hold, it does not hunt men, and it bites anyone who puts a hand where it lives.

## Presentation

A large spider has a small, angular front body and a round abdomen nearly as big, both furred with short, fine bristles, on eight long legs that each end in a pad and a pair of small hooks. Eight eyes sit in a cluster at the front, two of them larger than the rest. The fangs are short, curved and black, and a drop of clear venom often hangs at their tips. At rest it holds its legs folded close and looks smaller than it is; when it moves, it spreads to its full width at once, which is what most people remember. It walks on walls and ceilings as easily as on the floor. It makes no sound, except for a dry rustle when it moves over its own silk.

## In the Land

Large spiders live all down the wet western coast of Tarvénia, and they are commonest in Galváren: in the deep coastal forests, under overhanging rock on the sea-cliffs, and above all in the passage graves, cairns and chambered mounds that stand in every parish of the coast. A grave holds them because it is dark, damp, still and full of the bats and rats that use it. In [[place-marendal|Maréndal]] they live in the net lofts and the rope-walks and in the cellars under the fish market, where the rats are. Each spider holds one place, a passage, a cellar corner or a crack in a cliff, and lays its silk across it in sheets and funnels that it walks over to feel what has come in. Spiders that are not crowded live for many years, and an old grave may have one spider in it the size of a shield, known by name in the parish.

## Key Behaviors

A large spider waits in the mouth of its funnel and feels the silk. When something crosses the sheets, it runs out, bites, and runs back, and comes out again when the struggling stops. It also hunts away from its silk at night, walking along walls and roofs and dropping onto whatever it finds. It eats often and needs a great deal. It is shy of light and of people, and will usually retreat into a crack if it can. It is most dangerous where it cannot retreat: when a hand goes into its crack, a foot onto its funnel, or a body between it and its only way out. The females guard their egg-sacs, round bundles of silk as big as a fist, and stand over them and bite anything that comes near.

## What the Galváreni Do

The coast's folk belief holds that the passage graves are where the mortal world thins, and that a spider in a grave keeps the door. Nobody in a fishing village clears a grave of its spider, and a family that needs to go into one for a burial or a rite of their own goes with a smoking torch of green wood, which the spider dislikes, and leaves a dead fish at the entrance on the way out. Maréndal's net-menders keep cats and do not complain of spiders, which kill more rats than the cats do. The harbor town's physicians keep a remedy for the bite, a paste of salt and crushed seaweed bound over the wound, and send the bitten man to bed with a watcher, because the paralysis comes on at night. [[affiliation-arldnpnthn|Aurèldían]] priests have preached against the dead fish without much success.

## Signs

- Gray silk laid in wide sheets across a passage, a roof or the mouth of a crack, with a funnel leading back into the dark.
- The husks of beetles, the wings of bats and the dry skins of rats lying under a ledge.
- An egg-sac like a ball of dirty wool tucked into a corner, guarded.
- Bats leaving a grave at dusk in fewer numbers each evening.
- Silence where there should be rats.

## Combat Strategy

A large spider fights only to defend itself, its silk or its eggs. It runs at the intruder, bites once, aiming for the hand, the face or the neck, and runs back into cover to let the venom work. If it is cornered it rears with its front legs raised and its fangs bared, and then bites again and again. On its own silk it has every advantage, because it feels every step a man takes on the sheets and he cannot see where it will come from. It prefers to attack from above, dropping off a roof or out of a crack onto the head and shoulders.

## Attack Methods

### Venomous Bite

The spider strikes with both fangs together, quickly, and lets go. The bite is deep for its size and burns at once. The real harm is the venom, which works over the next hours.

## Special Abilities

### Wall Crawler

The spider runs on walls, ceilings and overhangs at full speed, which lets it attack a man from above and escape where he cannot follow.

### Paralytic Venom

The venom attacks the nerves. A bitten man feels pain and numbness spread from the bite, then weakness, and if the dose is strong and he is not strong, a paralysis that can leave him unable to move for hours. A child or a sick man bitten on the neck can stop breathing.

### Web Weaver

The spider lays strong, sticky silk across its ground, as a trap and an alarm. A man who walks into the sheets is slowed and caught, and on the silk a spider can wrap an arm, a leg or a whole small animal before it bites. Silk is hard to cut and tougher to tear, and burns readily.

## Attributes

- **Strength:** 6-9 (1d4+5)

- **Endurance:** 7-10 (1d4+6)

- **Dexterity:** 15-18 (1d4+14)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-12 (1d4+8)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 13-16 (1d4+12)
