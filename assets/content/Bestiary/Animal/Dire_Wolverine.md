---
shortcode: drwlvrn
name: {full: Dire Wolverine, aliases: []}
type: being
subType: creature
description: "A solitary dire mustelid of cold forests and tundra, fearless and unstoppably persistent, among the deadliest predators pound for pound."
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
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+23
    end: 1d6+21
    dex: 1d6+11
    agl: 1d6+11
    per: 1d6+12
    aur: 1d6+11
    wil: 1d6+19
    rea: 1d4+6
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 27}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 25}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 23}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 95}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 95}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 57}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 65}}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 8, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Crushing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Crushing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 9, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1 [locomotor, manipulator]
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
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
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
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 3, fire: 5}
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.79
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[drwlvrn|Dire Wolverine]]{float=top-left}

The trap-line runs along the frozen stream, and the third set is sprung, the bait gone and the snow trampled flat around it. The fourth is sprung too. At the fifth the trapper stops and lifts his head, because the smell has reached him: rank musk, thick enough to taste. On the far bank, squat and dark against the snow, a shape the height of a man's hip is standing over the sixth trap with the fox from it in its jaws. It does not run. It watches you over the fox, growls low enough to feel in the chest, and goes on eating.

# Dossier {#dossier}

The Dire Wolverine is the big wolverine of the far north, three feet at the shoulder, a hundred and fifty pounds and more, found in the boreal forest and the high plateaus of the [[place-nrdlndsrgn|Nordlands Region]], the taiga and frozen coast of [[place-gwtkrrgn|Ghotaqor]], and the northern spruce belt of [[place-vrystwald|Vristwald]]. It is a solitary animal that holds twenty or thirty square miles of cold country, eats anything it can kill or find dead, and will not be driven off what it has claimed by a bear, a wolf pack or a man with a spear. Trappers hate it more than any other animal in the forest, because it follows a trap-line and eats the catch.

It kills men seldom and only when crossed, and the people who cross it are the trappers and hunters who live by the forest and meet it every winter.

## Presentation

A low, broad, heavy mustelid, wider than it is tall, on short thick legs set wide. The head is small and blunt with powerful jaws and small dark eyes; the ears are round and close to the skull. The coat is dense and dark brown to black, with a pale band running along each flank, and it sheds frost and water. The foreclaws are curved, fixed and two inches long. The tail is short and bushy. The whole animal is built for strength and endurance and not at all for speed or grace, and it smells of musk at a distance.

## In the Land

Dire Wolverines range the spruce and pine forests south and east of the fjords, the caribou plateaus behind them where the reclusive clans live, and the bog and taiga of Ghotaqor to the east, and they are met in the northern taiga of Vristwald where the trapper clans run their lines. They are commonest where the caribou winter and where wolves make kills to steal. A wolverine's range is a circuit it walks over a week or two, and it caches what it cannot eat under snow or rock and comes back for it.

## Key Behaviors

The wolverine is out by night and in the gray hours and sleeps through the middle of the day in a den under a windfall or a rock. It takes carrion by preference, drives wolves and bears off their kills, and hunts hares, birds, marmots and, in deep snow, caribou that cannot run. It caches food and remembers the caches. It breeds once a year, and a female with kits in her den is the most dangerous wolverine there is. It lives twenty years. It does not flee anything, and the forest peoples count that as its defining fact: a wolverine that has decided a kill or a cache or a trap-line is its own stands on it.

## What the Trappers Do

A trapper who finds a wolverine on his line pulls the line and moves it twenty miles, because the animal will walk the whole of it every night for as long as it finds anything. Where the line cannot be moved, the sets are hung from trees and the baits are poisoned, and even then a wolverine often takes the bait and lives. Nobody sends a dog at it. The pelt is the best fur in the north for a hood-ruff, because frost from the breath does not freeze to it, and a prime one brings more at the fur markets of the fjords than two bear hides. The hunters who take them do it in deep snow, on skis, when the animal's short legs sink and theirs do not.

## Signs

- Trap after trap sprung along a line, the bait gone and the catch eaten or carried off.
- A cache of meat under snow with a strong musk on it, and tracks returning to it from several directions.
- Five-toed prints as wide as a man's palm, claws showing, in a loping gait that does not change pace.
- A wolf kill with the wolves sitting fifty yards from it, waiting.
- A low growl from under a windfall that does not stop at a shout.

## Combat Strategy

The wolverine charges, claws, bites and holds. It does not use ground or feint; it comes straight at whatever has provoked it and keeps coming, and pain makes it fiercer. It goes for the legs first and then the throat. A man on skis with a long spear can hold it off and strike as it comes through deep snow; a man on foot in the forest cannot outrun it and cannot make it stop. It leaves a fight only when the thing it was defending is gone or the enemy is.

## Attack Methods

### Raking Claws

The forepaws rake with two-inch claws that open leather and flesh. Several rakes together leave deep, heavily bleeding wounds.

### Crushing Bite

The jaws crush bone. A bite on an arm or a leg breaks it, and a bite on the throat kills.

## Special Abilities

### Throwing and Pinning

The animal's strength is far beyond its size: it throws a man down with a rush of the shoulder and holds him under its weight and grip while it bites.

### Fearless Aggression and Pain Immunity

The wolverine attacks animals many times its own size without hesitation and keeps fighting with wounds that would stop a bear. A wolverine that is dying is more dangerous than one that is whole.

### Overwhelming Strength and Durability

It drags a caribou carcass through snow, breaks a wolf's back in its jaws, and goes on fighting with a leg disabled.

### Thick Hide and Insulation

The dense coat and tough hide turn a glancing cut and blunt a bite, and the animal works in cold that stops every other hunter in the forest.

## Attributes

Strength
: 24-29 (1d6+23)

Endurance
: 22-27 (1d6+21)

Dexterity
: 12-17 (1d6+11)

Agility
: 12-17 (1d6+11)

Perception
: 13-18 (1d6+12)

Aura
: 12-17 (1d6+11)

Will
: 20-25 (1d6+19)

Reasoning
: 7-10 (1d4+6)

Creativity
: 6-9 (1d4+5)

### Iron Hide

Its dense fur and skin reduce damage from attacks.
