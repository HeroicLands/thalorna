---
shortcode: hppptms
name: {full: Hippopotamus}
type: being
subType: creature
description: "A three-to-four-ton river herbivore of tropical marshes, more lethal and aggressive than any crocodile despite its herbivorous diet."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+19
    end: 1d6+18
    dex: 1d4+5
    agl: 1d4+5
    per: 1d6+8
    aur: 1d6+8
    wil: 1d6+13
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 23}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 22}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 58}}
    - name: Tusk Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Tusk Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 7, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Charging Slam
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 46
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Charging Slam
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: blunt}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Trample
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 46
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Trample
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 8}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 16}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 12}
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 4, fire: 6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 7, edged: 6, piercing: 4, fire: 6}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 4, fire: 6}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 4, fire: 6}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 7, edged: 6, piercing: 4, fire: 6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 4, fire: 6}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 7, edged: 6, piercing: 4, fire: 6}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 4, fire: 6}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 7, edged: 6, piercing: 4, fire: 6}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 4, fire: 6}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 4, fire: 6}
      weight: {base: 4000, calc: "4000"}
      reachBase: 0
      bodyScaleBase: 1.62
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: aquatic
        feetPerRound: 60
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[hppptms|Hippopotamus]]{float=top-left}

In the river bend the water has a slow, heavy swirl. Two ears and a pair of eyes break the surface, then a pair of nostrils, and a huge blunt head the color of a wet slate comes up behind them, wider than it is long. The jaws open to nearly a half circle, showing yellow tusks as long as your forearm, and a bellow like a laugh rolls over the water. The herd answers from upstream.

# Dossier {#dossier}

The Hippopotamus is the heaviest animal of the great rivers, five feet at the shoulder and twelve to fifteen feet long, three to four thousand pounds. A herd lies in the river pools and reed marshes of [[place-aukhelathrgq|Au'Khelathu]] and in the papyrus channels of the [[lore-nyalubaclt|Nyáluba]] river country. It eats grass, but it kills anything that enters its water, boats, swimmers and crocodiles alike, and takes more lives along the great rivers than any other animal. On the upper reaches of the great river the herds have grown faster than the local authorities can control them.

## Presentation

A barrel-shaped body of enormous mass, covered in smooth, almost hairless skin, gray-brown to dark purple-gray, mottled pink at the folds, the mouth and the belly. The skin secretes a reddish oil that guards against sun and infection. The head is huge and blunt, wider than long, with a jaw that opens to nearly a half circle. The lower canines grow up to twenty inches and sharpen themselves against the upper. The eyes, ears and nostrils are set on top of the head so the animal can see, hear and breathe while nearly submerged. The legs are short and thick. On land it can outrun a man over a short distance.

## In the Land

Hippopotami lie in the river pools and reed-marshes of Au'Khelathu, where the marsh around [[place-drownstones|the Drowned Stones]] is a maze of reed beds and mud islands, and in the papyrus channels and oxbow lakes of the Nyáluba river country. A herd of a dozen or more spends the day in the water and comes out at night to graze on the banks, following the same paths to the same fields. A bull holds a few hundred yards of river.

## Key Behaviors

Hippopotami spend the day in the water, out of the sun, and come out at dusk to graze the banks, sometimes several miles from the river, returning before dawn. Bulls hold a stretch of river and the cows in it, and settle disputes by gaping, bellowing and, if that fails, savage fights. A cow with a calf attacks without warning. Herds of ten to thirty keep a tense order, with the dominant bull enforcing it. They bellow, grunt and honk across the water, and a hippopotamus that has begun its warning bellow is seconds from a charge.

## What the Fishermen Do

The river villages cut their landing-places at a distance from the pools and cross the water by ferry or by raft with a pole. A fisherman who finds a hippopotamus in the reeds backs out. The crocodile-clan of the Nyáluba and the river-hunters of [[affiliation-garnul|Gar'Nul]], the Khelathi guild, take hippopotami with harpoons and bait, and a hunter who has killed one in open water has proved himself. The meat feeds a village, the hide is cut into whips and shields, and the tusks are carved. Fields beside the river are fenced with thorn and watched at night with fire and drums.

## Signs

- A pair of ears and a pair of eyes breaking the water and then sinking.
- A wide, trampled path from the river through the reeds into a field, scoured flat.
- A bellow like a laugh from a pool at dusk, and an answer from upstream.
- Dung scattered widely in a spray along a bank, marking a bull's range.
- A canoe overturned in midstream, with the paddle floating.

## Combat Strategy

A hippopotamus does not hunt, but it fights with a lethality that exceeds most dedicated predators. When a hippo perceives a territorial intrusion — a boat entering its stretch of river, a human approaching the water's edge, a crocodile venturing too close to calves — it submerges and approaches underwater with great stealth for an animal of its size. The first warning is often the eruption itself: the hippo surfaces explosively beneath or beside the target, mouth already open to its full gape. Against boats, the hippo bites directly into the hull, capsizing or shattering smaller vessels with jaw pressure sufficient to crack wooden planks. Against humans or animals, the bite is delivered with the full force of the jaw, driving tusks through flesh and bone with devastating effect. On land, the hippo charges with a straight-line sprint that covers ground faster than most humans can run. The charge is not subtle — it is a direct, overwhelming application of mass and momentum. A hippo that has committed to an attack does not bluff and does not stop. It will pursue a fleeing target for a considerable distance before breaking off, and a hippo defending calves may not break off at all.

## Attack Methods

### Jaw Gape and Tusk Strike

The primary attack. The hippo opens its jaw to its full extension — nearly 180 degrees — and drives the lower tusks forward and upward into the target. The tusks are self-sharpening ivory, capable of piercing hide, armor, and the wooden hulls of boats. The bite force is among the highest of any living animal, sufficient to sever a crocodile in half or crush a human torso. The jaw can close with enough force to snap a wooden oar or a human femur.

### Charging Slam

On land or in shallows, the hippo accelerates into a straight-line charge, using its full body mass as a battering ram. The impact can knock a man several yards, shatter wooden structures, and capsize boats. The charge is followed immediately by trampling or a bite.

### Boat Capsize

Against watercraft, the hippo attacks from below, surfacing beneath the hull or biting the gunwale to flip the vessel. Once occupants are in the water, they are in the hippo's element. Smaller reed boats are destroyed outright; larger wooden vessels may survive but will be damaged and destabilized. River hunters consider this the hippo's most dangerous tactic, because it puts hunters in the water where neither their weapons nor their footing can save them.

### Trampling

Once a target is down — knocked from a boat, thrown by a charge, or simply caught in the open — the hippo may trample with its full weight, driving its broad feet into the man on the ground repeatedly. The weight concentrated through each foot is sufficient to crush bone and rupture organs through armor.

## Special Abilities

### Aquatic Dominance

In water, the hippopotamus is functionally invincible against human-scale opponents. It can hold its breath for five minutes or more, moves through water with a speed and agility that contradicts its land-bound clumsiness, and can surface or submerge with minimal warning. A hippo attacking from underwater has complete surprise — the animal's approach is silent and invisible. Fighting a hippo in its own river is suicidal without specialized equipment and tactics.

### Devastating Bite Force

The hippopotamus possesses one of the most powerful bites of any living animal. The jaw muscles generate force sufficient to crush bone, shear through wood, and pierce the armored hide of crocodiles. The self-sharpening tusks maintain their edge through constant grinding, ensuring that the bite remains lethal regardless of the hippo's age. The combination of bite force and tusk length means that a single bite can inflict wounds that are immediately fatal.

### Thick Hide

Hippopotamus skin is approximately two inches thick across the back and flanks, providing natural armor that resists cutting and piercing weapons. Arrows and light spears may fail to penetrate; heavier weapons and harpoons are required to inflict meaningful wounds. The skin's thickness also provides some protection against blunt trauma, though the animal's vital organs remain vulnerable to sufficiently powerful impacts.

### Territorial Fury

A hippopotamus defending its territory or its young fights with a ferocity that borders on the mindless. It does not retreat, does not respond to pain signals that would cause other animals to disengage, and will continue attacking until the threat is destroyed or has fled entirely beyond the hippo's range. This territorial commitment makes hippos extraordinarily dangerous — there is no negotiation, no standoff, no moment of hesitation that a hunter can exploit. The animal commits fully to violence the instant it perceives a threat.

### Unexpected Speed

Despite weighing two tons, a hippopotamus can run at speeds exceeding twenty miles per hour over short distances — faster than most humans. This speed, combined with the animal's mass, makes a charging hippo on land nearly as dangerous as one in water. The acceleration is deceptive; the animal appears slow and ponderous until the moment it commits to a charge, at which point it covers ground with alarming speed.

## Attributes

Strength
: 20-25 (1d6+19)

Endurance
: 19-24 (1d6+18)

Dexterity
: 6-9 (1d4+5)

Agility
: 6-9 (1d4+5)

Perception
: 9-14 (1d6+8)

Aura
: 9-14 (1d6+8)

Will
: 14-19 (1d6+13)

Reasoning
: 5-8 (1d4+4)

Creativity
: 3-6 (1d4+2)
