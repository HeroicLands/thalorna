---
shortcode: gntjmpng
name: {full: Giant Jumping Spider, aliases: []}
type: being
subType: creature
description: "A foot-wide arachnid and active ambush hunter that stalks and pounces on prey with terrifying speed, intelligence, and accuracy rather than webs."
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
    str: 1d6+9
    end: 1d6+7
    dex: 1d6+12
    agl: 1d6+13
    per: 1d6+11
    aur: 1d4+5
    wil: 1d6+8
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Venomous Fangs
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Venomous Fangs
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: piercing}
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 10, calc: "10"}
      reachBase: 0
      bodyScaleBase: 1.11
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[gntjmpng|Giant Jumping Spider]]{float=top-left}

A patch of the rock beside the path has eight eyes. The two biggest, in the middle of its face, are the size of chestnuts and black and bright, and they are fixed on you with a steadiness no insect has. It is the size of a dog and furred in brown and gray mottling that was indistinguishable from the stone a moment ago. It does not run. It moves sideways a few inches, keeping those eyes on you, and the thick hind legs fold under it like a cat's.

# Dossier {#dossier}

The Giant Jumping Spider is a hunting spider with a body a foot across and a leg-span of more than two feet, which stalks by sight and kills by leaping, and lives on the sunny rock and dry hill country of the foothills of [[place-graznmntns|The Grazian Mountains]]: [[place-wstrndscnt|The Western Descent]] where the range breaks up into brown hills above the Dunhari margin, and the dry slopes of the marches of [[place-vedyarargn|Vedyara Region]] below. It hunts lizards, birds, rats and other spiders by day, it is as curious as a cat and far cleverer than a spider ought to be, and it leaps twenty feet onto a man's back if he turns away from it.

The hill people kill it when it comes into a house and otherwise watch it. It is not a thing that attacks a wary man; it is a thing that attacks the moment he stops being wary.

## Presentation

A compact, heavily furred spider in glossy black, brown or gray with a mottled pattern that matches dry rock and bark. The forebody is squat and muscular and the abdomen rounded. The legs are thick and strong, the hind pair most of all, and end in small claws and tufts of fine hair that grip glass-smooth stone. The face carries eight eyes in a row across the front, the two central ones very large, forward-set and reflective, and the whole animal gives the impression of looking at a person, because it is. The fangs are short, dark and strong.

## In the Land

Giant Jumping Spiders live on the dry southern slopes of the Grazian range, on the broken brown hills of the Western Descent, in the rock-walled gullies of the Vedyari march country, and in the ruined walls and terraces the hill-farmers have abandoned. They want sun, bare rock to hunt across and crevices to spin a silk sleeping-cell in, and they are commonest where lizards are. They are seen on the walls of hill villages and in the rafters of barns, and the farmers of the marches know the one that lives in their terrace-walls by sight.

## Key Behaviors

The spider hunts by day, in sunshine, by sight. It sees a lizard move at a hundred paces, works toward it in short runs from cover to cover, judges the last leap, and lands on the prey with its fangs already in. It anchors every leap with a silk line behind it so that a miss does not kill it, and the line is its road back up the rock. It builds no web, only a silk cell in a crevice to sleep and molt in. It keeps a hunting ground and does not fight for it; two spiders meeting merely watch each other and part. In the spring the males dance for the females on a flat rock in the sun, waving their forelegs in patterns the hill children know by name. It learns a route, remembers a hiding place, and works out how to get at a bird in a cage.

## What the Hill People Do

The march farmers kill a spider that moves into the house and let one that keeps to the terrace-walls stay, because it kills the rats. Children are taught never to turn their back on one and never to run, since a running thing is a thing to be jumped on; a spider met on a path is faced down, slowly, until it loses interest, which it does. Herdsmen on the Western Descent sleep with a fire and their faces covered. The venom is bought by the physicians of the Vedyari foothill towns, who use it in a dose that numbs a limb for surgery, and a hunter takes a spider for it with a long forked pole and a jar, in the cool of early morning when it is slow.

## Signs

- A silk line, fine and very strong, stretched from a rock to the ground where nothing walks.
- A lizard or a rat on a wall-top, dried and light, with two punctures in the back.
- A small silk cell the size of a fist in a crevice, with shed skin inside it.
- A patch of mottled rock that has turned to face the path.
- Birds that will not land on one stretch of wall.

## Combat Strategy

The spider waits for a back to be turned and leaps. It lands on the shoulders or the neck, grips with all eight legs, and bites at once, and it keeps biting as the venom takes hold. A man who turns and faces it before it leaps is usually not leaped on. If the prey fights hard it springs away on its line to a safe height, watches, and comes again when the man's attention goes elsewhere; it will do this several times. Cornered in a crevice it bites whatever reaches in. It cannot be outrun across rock, and it goes up a wall faster than a man can turn round, so the defense is to face it, keep facing it, and strike when it is on the ground between leaps.

## Attack Methods

### Venomous Fangs

The fangs go into the neck or the shoulder and the venom follows. The bite numbs first and paralyzes after; it kills a man only when he has taken several bites and no help.

## Special Abilities

### Leaping Strike

The spider leaps twenty feet from a standing start, onto a wall or a man, and a leap from behind is not dodged.

### Perfect Vision

Its eyes see movement at a great distance and judge a distance to the inch. It finds its prey by sight and never by chance.

### Silk Safety Line

Every leap trails a line anchored behind it. A missed leap is caught by the line, and the line is the spider's way back up the rock out of reach.

## Attributes

- **Strength:** 10-15 (1d6+9)

- **Endurance:** 8-13 (1d6+7)

- **Dexterity:** 13-18 (1d6+12)

- **Agility:** 14-19 (1d6+13)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 6-9 (1d4+5)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
