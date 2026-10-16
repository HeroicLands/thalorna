---
shortcode: erthchrg
name: {full: Earthcharger, aliases: []}
type: being
subType: creature
description: "A heavily armored cavern arthropod and living battering ram that breaks through doors and weakened stonework with unstoppable force."
tags: [dreadspawn]
data:
  packFolder: dreadspawn
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
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d6+15
    end: 1d6+14
    dex: 1d6+7
    agl: 1d6+7
    per: 1d6+9
    aur: 1d6+7
    wil: 1d6+15
    rea: 1d6+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 48}}
    - name: Crushing Mandibles
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: mandible
          name: Crushing Mandibles
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Carapace Charge
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 42
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Carapace Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 5}
          - {name: Thorax, shortcode: thoraxzone, probWeight: 6}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 5}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Thorax
            shortcode: thoraxpart
            bodyZoneCode: thoraxzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
      weight: {base: 1500, calc: "1500"}
      reachBase: 0
      bodyScaleBase: 1.43
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 6
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[erthchrg|Earthcharger]]{float=top-left}

The granary door is oak, banded with iron, and it is barred from inside. Something on the other side of the courtyard wall hits it. The whole gatehouse shakes, dust falls from the beams, and the bar cracks. A second blow, and the door comes in off its hinges, and through the gap comes a beetle the size of an ox cart, black-plated and gleaming copper and blue where the torchlight catches it, with jaws in front of it each as long as a man's arm. It does not stop for the door. It walks over it, splintering it, and turns its head toward the soldiers in the courtyard, and the jaws open.

# Dossier {#dossier}

The Earthcharger is a dreadspawn in the shape of a giant beetle: ten to twelve feet long and fifteen hundred pounds, armored in layered black chitin, with shearing jaws and a charge that breaks down timber doors, palisades and weak stone. It lives in caverns and the passages under hills and comes out to take what it wants. It is one of the dreadspawn that have appeared inside the borders of the [[affiliation-tantsouempr|Empire of Tantsou]] in recent years, more of them than anyone can account for, and the army that has to deal with them has found the earthcharger one of the hardest. Like every dreadspawn it was made, it is alive, and it does not breed. The [[lore-tanchei|Tanchéi]] have catalogued it with the rest.

## Presentation

The earthcharger is a beetle on a vast scale, broad and low, built like a wagon turned upside down. Its carapace is layered black plates flecked with iridescent copper and deep blue, scarred and cracked from use. Its head is armored and wedge-shaped, made for ramming, and carries a pair of serrated mandibles, each as long as a man's arm. Its six legs are thick, short and powerful, and its feet are hooked. It is fast for its size over a short run and tireless over a long one. It smells of turned earth and something sour, and it makes a dry clattering as its plates move.

## In the Land

The earthcharger came up out of the ground in one of the northwestern basins of the [[place-tantsouregin|Tantsou Region]], in the hill country where the river valleys give way to the mountains, and it lives in the caves and old mine-galleries under those hills. From them it comes out into the terraced valleys below to feed, breaking into granaries, storehouses and walled farmsteads for the grain and the stock inside them, and going back underground. It holds a stretch of hill and valley a day's walk across, and it breaks down anything that is built across its paths. Intact dressed stone holds it out; nothing less does.

## Key Behaviors

The earthcharger is solitary and fiercely territorial. It claims its passages and its valley as its own and attacks anything that enters them, and it remembers where it has fought before and goes back to finish the fight. It eats grain, roots, stock and carrion in great quantity. When it wants into something, it charges until it is in. It is not clever, but it is persistent past any animal's patience, and it pursues for miles anything that has hurt it, so long as the chase leads away from its ground and not into it.

## What the Empire Does

The Tanchéi entered the earthcharger in the register as _Tsai Wo Zha_ ("Sacred-Creation Life"), with its affinities, its observed capabilities, its range and its threat, and the district's [[lore-wohou|Wohou]] commander was given the task of removing it. He has not yet done so. The first company sent against it in open country was broken by its charge. The [[lore-wanduo|Wánduo]] assigned to him has had to assess its classification before a petition would bite, and it would not wait for the assessment. The district now rebuilds its granaries in dressed stone, which the creature cannot break, at the cost of a year's revenue, and the [[lore-nouwen|Nouwén]] who farm the valley keep their stock behind stone walls at night and leave their wooden storehouses empty. The commander has asked for fire-oil, which softens its plates, and for a second company. The provincial court has sent neither, because the soldiers are stretched thin by more dreadspawn than this one.

## Signs

- Wooden doors, palisades and storehouse walls broken in from outside, as if by a ram, with no other damage near them.
- Broad, six-footed tracks with deep hooked prints, leading from a hillside cave-mouth to a farmstead and back.
- Trenches plowed through terraced fields in straight lines, the terrace walls smashed where the line crosses them.
- A dry clattering in the hills at night, and the smell of turned earth.
- Stone walls with fresh scars and chips all along their base, and nothing behind them taken.

## Combat Strategy

The earthcharger charges. It lowers its armored head, builds speed and crashes into whatever is in front of it, a door, a shield wall or a man, and keeps going over it. Then it turns and uses its mandibles and its weight on whatever is still standing. It does not maneuver and does not retreat. When it is badly hurt it flies into a rage and attacks everything near it. It is slow to turn and can be outdistanced at a sustained run, but it does not give up, and a narrow gap in stone, too small for it, is safer than any amount of open ground.

## Attack Methods

### Crushing Mandibles

The jaws open wide and shut with force enough to shear a limb or break ribs through armor. If it gets a good grip it holds on and crushes, slowly.

### Carapace Charge

The beetle lowers its head and charges with its whole weight. The impact throws men off their feet and through doors, and its momentum carries it on over anyone it has knocked down.

## Special Abilities

### Trample

After a charge or in close fighting, the beetle walks over anyone under it, and its hooked feet and its weight crush and tear.

### Heavy Chitin

Cuts and thrusts against its plates glance off or barely bite; only a well-placed strike into a joint between plates lands cleanly. Heavy hammers, falling rock and siege engines do more, and fire softens the plates and the joints between them.

### Territorial Aggression

On its own ground it strikes harder and fights with growing fury, and an attack on its lair drives it close to frenzy.

### Hardened Mass

It shoulders through timber doors, palisades and poor stonework at a walking pace, as if they were not there. Dressed stone holds it, and against an intact stone wall it is persistent but not unstoppable. Its weight makes it nearly impossible to move against its will.

## Attributes

- **Strength:** 16-21 (1d6+15)

- **Endurance:** 15-20 (1d6+14)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 10-15 (1d6+9)

- **Aura:** 8-13 (1d6+7)

- **Will:** 16-21 (1d6+15)

- **Reasoning:** 6-11 (1d6+5)

- **Creativity:** 4-7 (1d4+3)
