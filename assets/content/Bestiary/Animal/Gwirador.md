---
shortcode: gwirador
name: {full: Gwirador, aliases: [The Wild Bull Camel]}
type: being
subType: creature
description: "The feral two-humped bull camel of the deep sands, a placid grazer for ten months of the year and a killer of riders in the cold months of rut."
tags: [animal, image-needed]
data:
  packFolder: animals
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
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
    str: 1d6+13
    end: 1d6+12
    dex: 1d6+7
    agl: 1d6+7
    per: 1d6+8
    aur: 1d4+6
    wil: 1d6+10
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Rending Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 59
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Rending Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Trample
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Trample
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 7}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
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
            roles: &a1 [locomotor]
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
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 600, calc: "600"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

You hear him before you see him: a deep, gargling roar from beyond the dune, like a barrel being filled through a hole in its side, and the string goes tense from the lead beast to the tail. Then he tops the crest, a bull camel the color of old rope, with a hump on his back swollen and tight with the fat of a good season and a hump forward of it that has been bitten to rags. Wet, red and shining, a bladder the size of a man's head hangs out of the side of his mouth and slaps against his jaw as he runs. He is not looking at you. He is looking at your lead camel, the bull of the string, and he is running with his neck stretched out low along the sand.

# Dossier {#dossier}

The Gwirador is the wild bull camel of the deep sands, descended from strings that escaped or were abandoned in the waste and bred true to the desert over a thousand years. It is bigger, leaner and far fiercer than any beast a caravan has led, and in the rutting season the bulls lose all fear of men. A Gwirador in rut kills riders, breaks the lead lines of strings and scatters a caravan across a dozen miles of dune, and the tribes number it with the sand wurm among the reasons the road is crossed in force. Its name is the word for a camel of the open range, "the range-camel", and the tribes use it for the bull alone: a cow with her herd is only a wild camel, and she is no danger unless she is cornered.

It is also the origin of the finest camels on the road. The tribes of the sands take young from the wild herds, and the hardiest strings of the Hosikor carry the Gwirador's blood.

## Presentation

A grown bull stands seven feet at the hump. The coat is shorter and darker than a tame camel's, a patchy gray-brown that lightens to cream along the belly, and the shoulders and neck are heavily muscled. The two humps are high and firm in a good year and slack in a bad one. The face is long and narrow, with a split upper lip, and the teeth, which a rutting bull keeps bared, are yellow tusks as long as a man's finger. In rut, the bull inflates a pink sac of skin from the roof of his mouth and lets it hang from the corner of the jaw; it is foam-flecked, red and gargling, and it is the sign that every driver on the road watches for.

The broad, two-toed foot spreads on the sand like a plate. A bull's track is half again the size of a string camel's and has the same shape, with the toes splayed and the claw-marks of the front pads cut deep. Herds of cows and young follow one bull for the season, and they move at a pace a tame camel cannot match across loose sand.

## In the Land

The Gwirador lives in the deep sands of the Hosikor, where the dunes are too high and the wells too far apart for a tribe to settle, and in the stony pastures of the Dikraqor. A herd keeps to a range of a hundred miles and moves from one hidden seep to the next, and the best of the Ruweles say that the herds know waters the guides do not. They are the only large animals that live in the sand year-round, and the herd-bulls of one range know one another by sight, since each season's fights settle which bull holds which waters.

A herd drinks at a seep for a day and moves on. The tribes that own the seeps watch for the bulls in autumn, as the cold comes in, and move their own camels away from the trails to the water.

## Key Behaviors

For ten months the Gwirador is a placid grazer, browsing thorn and saltbush in the early morning and evening and lying up in the shade of a dune through the heat. For the other two, the cold months, the bulls are in rut. A rutting bull stops eating and loses weight, he patrols the edge of his herd night and day, and he treats every male camel he sees as a rival, whether wild or tame, loose or in a string, and a tame bull carrying a load is a challenger like any other.

He screams a challenge from a distance, circles, and charges. The fight is wrestling and biting: neck against neck, the bulls trying to throw each other to the sand and bite the legs. A rutting bull reaches a tame bull in the same way, and the rider on the tame bull is part of the fight.

A rutting bull's attention is single and total. He ignores spears thrown at him from the side, and he does not stop for a fire.

## What the Tribes Do

The tribes geld every male camel they do not breed, and most strings are all geldings and cows. A caravan that crosses in autumn takes this seriously, because the lead animal of a string, which is usually an entire male, is the animal a Gwirador will charge. A careful master swaps his lead bull for a gelding at the last well before the deep sands.

Drivers watch for the sac. A bull showing it is a day from a fight, and a string that sees one at a distance turns at once, downwind, putting the cows between the string and the herd. If the bull comes anyway, the drovers cut loose the lead bull and let the Gwirador have him, because a bull that has beaten a rival is satisfied for the day and a bull that has not follows the string for a week. A tame bull that is cut loose is the price of the crossing. Some masters carry an old bull for the purpose.

The tribes also stalk the herds for young and for hides. A hunter who goes after a Gwirador wears the oldest clothes he owns and carries a rope, a net of braided hair and a long spear, and he does it in the warm months, when the bulls are quiet.

## Signs

- A track half again the size of a string camel's, with the front pads deeply scored.
- A trail of broken thorn and trampled saltbush, wide as a road, with piles of dung heaped at the crossings.
- Reddish-brown foam spattered on the sand and on the stems of the brush.
- A deep gargling roar after dark, carried on still air for a mile.
- A string's own bull that swings his head and strains toward a ridge a mile off.
- A lone dead camel on a dune crest, its neck torn open and its hump chewed, with no rider.

## Combat Strategy

A rutting Gwirador attacks to bite and to bowl over. He closes at a run, lowers his head and slams the shoulder into the opposing animal, and when the opponent falls he bites at the legs and the neck. Against a rider he is no less dangerous: he knocks the mount down, then goes for the rider on the ground. Trampling and biting follow the first charge, and a bull is hard to dislodge once he has hold of a limb.

Out of rut he flees the sight of people and will not turn on a party that keeps its distance. The Gwirador's weakness is its single-mindedness. A rutting bull follows the nearest rival and pays little attention to a party that stays out of the line, and a bull led off after a loose gelding can be separated from a string by a rider who can ride.

## Attack Methods

### Rending Bite

The long yellow teeth meet in a shearing grip that can crush a forearm and strip the flesh from a leg. Bulls in rut bite deliberately at the legs and the neck.

### Trample

The bull rears, or runs a fallen creature down, and drives the broad pads into the body. A creature on the ground when he arrives is pinned and stamped.

## Special Abilities

### Rutting Frenzy

In the cold months a bull cannot be frightened off. He disregards pain, noise and fire as long as a rival is in sight, and he continues to attack until he is dead or the rival is out of reach.

### Sand Runner

The broad foot holds on loose sand, and the Gwirador crosses dunes at a speed a tame camel cannot sustain. A rider on a tame mount cannot outrun one over open sand.

### Desert Endurance

It goes a week without drinking and lives on dry thorn. A herd in a dry year thins to the strongest.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 13-18 (1d6+12)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 9-14 (1d6+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 3-6 (1d4+2)

## A Hook

A caravan master in the market-camp of Qìso has bought a young cow in season at an extravagant price, a wild-blood animal from the finest herd in the sands, to be delivered to a court in the east. The cow is in a closed pen, and every Gwirador for twenty miles has smelled her. The master needs the party to guard the pen through the next week, and the master's own men are already deserting. The bulls begin to gather at dusk on the ridge, and the old lead bull of the string, the master's pride, is screaming back.
