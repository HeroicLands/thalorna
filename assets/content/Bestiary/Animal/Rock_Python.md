---
shortcode: rckpythn
name: {full: Rock Python, aliases: []}
type: being
subType: creature
description: "A massive constrictor serpent up to forty feet long, slow but unstoppable, ambushing prey in deep jungles, rocky highlands, and caves."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-snake, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+13
    end: 1d6+11
    dex: 1d6+9
    agl: 1d6+8
    per: 1d6+10
    aur: 1d4+5
    wil: 1d6+8
    rea: 1d4+3
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Lightning Strike
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Lightning Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Constricting Coils
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Constricting Coils
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 17, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, constrict: true, impTA: 6}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forebody, shortcode: torsozone, probWeight: 11}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles: [core, locomotor]
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            isStumble: true
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 200, calc: "200"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[rckpythn|Rock Python]]{float=top-left}

What you took for a boulder at the mouth of the cave is breathing. The brown-and-green patterning runs over it in great geometric loops, and where the coils pile on each other the pile is as high as your waist. A wedge-shaped head the size of a saddle lies on the stone, one yellow vertical-pupiled eye open, and a forked tongue slides out into the air between you and withdraws.

# Dossier {#dossier}

The Rock Python is the great constrictor of the deep jungle, rocky highlands and caves, thirty to forty feet long and one to two feet thick. It lies in the jungle and cave country of [[place-bharavavana|Bhāravavana]] in southern Vedyara and in the limestone caves and sink-holes of [[place-kankulrgn|K'ankul]]. It is slow, and once prey is located it is almost impossible to stop. It can wait at one boulder or cave-mouth for months.

## Presentation

A creature of immense mass. The scales form complex geometric patterns of earth-brown, mottled green and pale cream, which match rock, soil and leaves. The head is smaller than the body, with a jaw that opens enormously, and an unblinking yellow eye with a vertical pupil on each side. The mouth holds rows of small backward-pointing teeth that grip and guide prey down the throat. The tongue flickers constantly to taste the air and ground.

## In the Land

Rock pythons lie in the jungle, rocky highlands and cave country of [[place-bharavavana|Bhāravavana]] in southern Vedyara and in the limestone caves and sink-holes of [[place-kankulrgn|K'ankul]]. A snake keeps one boulder, one cave-mouth or one hollow bank for months, hunting from it at dusk. It takes pigs, deer and monkeys and may go weeks between meals. A big snake does not move far from its lair.

## Key Behaviors

Rock pythons ambush their prey, waiting still for days or weeks where prey regularly passes, so that a snake on a boulder or at a cave-mouth becomes part of the ground. It lives alone and holds a range, and a big python kills a smaller one that crosses into its feeding ground. It is most active at dawn and dusk. Its metabolism is slow: it takes a creature the size of a deer and then fasts for months while it digests.

## What the Hunters Do

Hunters and woodcutters know the lairs and go around them. A snake that has fed is slow and is taken with nets and spears, or burnt out of its hole. A village that loses a goat posts a watch for several nights. The hide is cut into belts, shield-covers and drum-heads, and the fat is rubbed on joints. Strangers are told where not to sit down. In K'ankul the cave pools are avoided, and a pilgrim to a sacred cenote goes in a party and carries a lamp.

## Signs

- A broad, flattened trail through the leaf litter, as wide as a man's body.
- A shed skin, longer than a boat, caught in a thicket.
- A boulder with a dark shape lying along it that is not rock.
- A deer or a pig gone from a game-trail with no blood to follow.
- A cave mouth worn smooth, with the smell of musk.

## Combat Strategy

The python's strategy is simplicity itself: wait motionless until prey approaches within striking range, then attack with explosive speed, wrap coils around the victim's body, and constrict with relentless pressure until the prey loses consciousness. Once wrapped, the python becomes nearly impossible to dislodge and will continue constriction for hours if necessary. If the initial strike fails, the python will retreat and wait for the next opportunity, unwilling to engage in prolonged combat. A python that has secured prey will not release it for any reason.

## Attack Methods

### Lightning Strike

The python uncoils with explosive speed and lashes forward, attempting to seize a target with its mouth and pull it back toward the coils. The strike is devastatingly quick for such a massive creature, and once contact is established, escape becomes nearly impossible.

### Constricting Coils

Once the python has wrapped around a victim, it uses muscular coils of tremendous force to restrict breathing and circulation. Each round, the pressure increases unless the victim manages to escape the grapple entirely. The coils can crush bone and burst blood vessels, causing internal injury even before the victim loses consciousness.

### Tail Whip

If the python uses its tail defensively, it can generate impacts with significant force, suitable for knocking opponents off balance or creating distance.

## Special Abilities

### Immovable Grapple

Once the python has coiled around a victim, the grapple is nearly impossible to escape through conventional means. The strength required to break free from python constriction exceeds the capability of most humanoids. Magical assistance or use of great strength is typically required.

### Natural Camouflage

The python's patterning is so effective that a motionless snake is nearly invisible when positioned in its natural rocky or jungle environment. Spotting a still python requires active searching rather than casual observation.

### Sensory Depth

The python's thermal sensing (heat pits along the jaw) and chemical sensing (through its flickering tongue) allow it to perceive prey with accuracy that approaches echolocation. The python can hunt in total darkness and detect prey buried in leaf litter or hidden in crevices.

### Slow Metabolism

The python requires far less food than a comparably sized mammalian predator, allowing it to survive months between feeding in environments where prey is scarce. This endurance allows pythons to persist in territories where other large predators would starve.

### Unhinging Jaw

The python's jaw can expand to great proportions, allowing it to consume prey nearly as large as itself. This capability means that prey items other creatures would consider too large to hunt are fair game for a rock python.

### Additional Information

Rock pythons are dangerous but predictable — they do not hunt opportunistically and will not pursue prey fleeing into open ground. A rock python can be avoided by carefully watching for its presence and maintaining distance. The creature's size makes it identifiable, and locals in areas with rock pythons develop awareness of where pythons are likely to be positioned. A rock python that has successfully hunted humanoids may develop the behavior of targeting humanoids specifically, making it a direct threat to settlements.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 12-17 (1d6+11)

- **Dexterity:** 10-15 (1d6+9)

- **Agility:** 9-14 (1d6+8)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 6-9 (1d4+5)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 3-6 (1d4+2)
