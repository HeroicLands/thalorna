---
shortcode: fordwarden
name: {full: Hretholvo, en: [The Ford-Warden]}
type: being
subType: creature
description: "A made thing in the shape of a calm, saddled horse that waits at the fords of Tarvénia, offers a crossing, and carries into deep water whoever rides it without paying."
tags: [dreadspawn, image-needed]
data:
  packFolder: dreadspawn
  icon: sohl-none-icon-horsehead
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
    str: 1d6+23
    end: 1d6+7
    agl: 1d6+8
    per: 1d6+14
    snt: 1d4+2
    aur: 1d4+2
    wil: 1d6+7
    rea: 1d4+2
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 26}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 36}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 44
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 6}
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
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
      weight: {base: 1000, calc: "1000"}
      reachBase: 0
      bodyScaleBase: 1.75
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: aquatic
        feetPerRound: 100
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The road comes down through alders to the river, and the ford is high with spring water, brown and quick over the stones. On the near bank a horse is waiting. It is a gray mare, sleek and quiet, saddled and bridled in dark leather that is wet through, with the reins looped over the pommel and no rider anywhere. She lifts her head as the party comes down the bank, and walks to meet them, and stands by the tallest of them with her flank turned, the stirrup hanging at his knee, the way a well-trained horse waits to be mounted. The water runs off her saddle. She does not smell of horse.

# Dossier {#dossier}

**Hretholvo** (the Ford-Warden) is a dreadspawn of river crossings, named in the [[skill-tarvenlng|Tarveni Language]] from _hreth_, a ford, and _holvo_, a comrade, one who rides beside another: _the ford-comrade_. It takes the shape of a calm riding horse, saddled and riderless, and it waits by fords. It offers a crossing to whoever comes, and it asks a toll for it. A rider who pays is carried across dry and set down on the far bank. A rider who does not pay is carried into the deepest water of the river and kept there. It is met at the fords of the [[place-tarvenirgn|Tarvénia Region]], where the roads between the fiefdoms and the free towns cross rivers that have no bridges. Like every dreadspawn it was made, it is alive, and it does not breed. A ford-warden keeps one ford, and the carters of Tarvénia know of more than one ford that has its own.

## Presentation

A hretholvo looks like a good riding horse, gray or dun or black, fifteen hands, with a fine head and a smooth gait, and its harness looks like good saddlery that has been in the river. Close to, the look does not hold. Its coat is always wet and always cold, and water runs from its mane in a steady trickle that never stops. Its eyes are a horse's eyes with no white showing, and they follow faces, not hands. The saddle, the bridle and the reins are not leather but a part of it, dark and slick, grown out of its back and its head, and the stirrups are its own hard tissue. It leaves hoofprints that fill with water. It makes no sound: no breath, no snort, no creak of harness.

## In the Land

Tarvénia is hill country, and its rivers come down hard out of the uplands and run broad and shallow through the valleys, so that most roads cross them at fords. A hretholvo keeps a ford with a deep pool or a fast channel close below it. It waits on the bank in the mornings and evenings, when carters and travelers cross, and it spends the rest of the day in the deep water, where nobody sees it. It never goes far from the river. A ford with a hretholvo in it has its price, known to everyone who uses the road, and the price is paid.

## Key Behaviors

A hretholvo wants its toll. It comes to meet whoever is about to cross, offers its back, and waits. It takes bread, coin or a story as a toll, and it does not take the toll from a hand: the toll is set down on a flat stone at the water's edge, the bread or the coin, or the story is told aloud on the bank, and the hretholvo bends its head to it before it lets anyone mount. A rider who has paid is carried across smoothly and set down on the far bank, and a party that pays for each of its riders crosses a river in flood without wetting a boot. A rider who mounts without paying finds that he cannot get down: his legs and seat hold to the saddle as if glued, and his hands to the reins, and the hretholvo walks into the ford, turns downstream, and goes under. The carters who pay it lose nothing. The ones who do not, and the strangers who do not know, are found downstream days later, or not at all.

## What the Carters Do

The carters and drovers of the Tarvénian roads pay. Every ford with a hretholvo in it has a flat stone on the near bank, and a carter puts a loaf or a coin on it as he comes down, whether or not the horse is waiting, and crosses with his wagon in the ordinary way. Children are taught never to mount a strange horse at a river, and a story told at a ford stone is a recognized courtesy on the roads, so that drovers keep a few stories ready for the purpose. A lord whose road has a hretholvo on it does not try to bridge the ford, because the bridges at such fords do not stand.

## Signs

- A flat stone at the edge of a ford with bread or coins lying on it, and nobody guarding it.
- Hoofprints coming up out of the water onto the bank and going back into it, each print full of water.
- A riderless saddled horse standing quietly at a ford, wet through, on a dry day.
- A road where the drovers stop at the river and tell each other a story before they cross.
- A drowned traveler found downstream of a ford with his hands closed hard, as if on reins.

## Combat Strategy

A hretholvo does not fight for its toll on the bank. It offers, it waits, and if it is refused it walks back into the water. Its weapon is the saddle: a rider on its back is held fast and carried under, and it fights only to keep him there, rolling and kicking in the deep water against anyone who swims out to cut him free. Attacked on the bank, it kicks and bites like a frightened horse and makes for the river at a walk, because it never runs on land.

## Attack Methods

### Kick

A hind kick, straight back, hard enough to break a man's leg or stave in a shield. It kicks at anyone who comes at a rider it is carrying.

### Bite

A horse's bite, with a grip that does not let go, used on a swimmer who reaches it in the water.

## Special Abilities

### The Saddle

Whoever sits on its back without having paid is held to the saddle and the reins and cannot let go or be pulled free by ordinary strength. The hold breaks when the hretholvo lets go of it.

### Water-Born

In the river it swims as fast as a fish and stays under as long as it likes, and the strongest current does not move it.

### Soundless

It makes no sound at all, in the water or out of it.

## Attributes

Strength
: 24-29 (1d6+23)

Endurance
: 8-13 (1d6+7)

Agility
: 9-14 (1d6+8)

Perception
: 15-20 (1d6+14)

Scent
: 3-6 (1d4+2)

Aura
: 3-6 (1d4+2)

Will
: 8-13 (1d6+7)

Reasoning
: 3-6 (1d4+2)

Creativity
: 3-6 (1d4+2)

## Plot Hooks

1. **The unpaid carter.** A young carter mounted a strange horse at a ford on a dare and went under with it, and his father wants his body back from the pool below the ford before the harvest wagons start using the road.
2. **A bridge that will not stand.** A lord has decided to bridge the ford on his road and end the toll, and his masons have twice seen their work pulled down overnight. He hires a party to guard the third attempt.
3. **The story owed.** A drover has paid the ford stone with a story he swore was true, and has crossed with his herd. A rival says the story was a lie, and every drover on the road wants to know whether the next crossing will be paid for in the river.
4. **Across in flood.** A party must cross a river in flood with a message that cannot wait, and the only way over is the back of the horse waiting at the ford.

:::secret {title="What beats a hretholvo"}

- **Refusing the saddle.** It has no power over anyone who does not mount it. A party that crosses on its own feet, or waits for the water to fall, is never touched, however long the horse stands by.
- **Dry ground.** It draws its strength from the river. Dragged or driven more than a few dozen paces from the water, it slows, its coat dries and cracks, and the hold of its saddle weakens and fails; on dry ground, kept from the water for an hour, it lies down and dies.
- **The toll itself.** Paying is always enough. It keeps its bargain exactly, and a rider who paid is set down on the far bank even if the rest of his party has been fighting it.

:::

## See Also

[[lore-dreadspawncrtr|Dreadspawn]]
: the made creatures, and how they differ from constructs and undead

[[place-tarvenirgn|Tarvénia Region]]
: the hill country whose fords it keeps
