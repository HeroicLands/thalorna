---
shortcode: caracal
name: {full: Caracal, aliases: []}
type: being
subType: creature
description: "A powerfully built desert hunting cat of the arid steppe, prowling rocky scrubland and thorn thickets for prey it ambushes with explosive leaps."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-lynxhead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+6
    end: 1d4+7
    dex: 1d6+13
    agl: 1d6+14
    per: 1d6+12
    aur: 1d4+6
    wil: 1d4+8
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 25}}
    - name: Slashing Rake
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 76
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Slashing Rake
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -1, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Neck Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 76
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Neck Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 35, calc: "35"}
      reachBase: 0
      bodyScaleBase: 0.88
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 90
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[caracal|Caracal]]{float=top-left}

At the edge of the thorn scrub a dozen small birds go up from a bush at once, and something tawny rises among them from the ground, twice its own height, and strikes two of them down with its forepaws before it lands. It stands on the rock for a moment, narrow-faced and long-legged, with black tufts a finger's length above its ears, and looks at you with round amber eyes.

# Dossier {#dossier}

The Caracal is the desert cat of the dry steppe, sixteen to twenty inches at the shoulder and twenty-five to forty-five pounds, a hunter of birds, hares and small antelope. It lives in the rocky scrub and thorn thickets along the edge of the [[place-khzryndsrtrgn|Khazryn]] steppe, on the plateau of [[place-byzariargn|Bizaria]] and in the brush of the [[place-dunhardsrtrgn|Dunhara Desert]]. A caracal can leap straight up from a standing start to knock a bird out of the air. Steppe chiefs and wealthy merchants keep tamed cats for coursing.

## Presentation

A lean, muscular cat with a short, dense coat of reddish brown to tawny over the back and flanks, white on chin, throat and belly. The face is narrow, with dark lines running from the inner corners of the eyes beside the nose. The ears are tall and pointed, tipped with long black tufts and turning independently toward sounds. The hind legs are longer than the forelegs, which gives the leap its force. The paws are large with sharp, retractable claws, the tail is short, and the eyes are amber and round.

## In the Land

Caracals live in the rocky scrub, thorn thickets and dry grassland along the edge of the sand seas, in the steppe country of the [[place-khzryndsrtrgn|Khazryn]], on the plateau of [[place-byzariargn|Bizaria]] and in the brush of the [[place-dunhardsrtrgn|Dunhara Desert]]. A cat holds a territory of several miles, with a few rock shelters it hunts from. It lies up by day in a crevice or under a thorn bush and is seldom seen.

## Key Behaviors

Caracals live alone, mostly at dusk and in the dark, each holding five to fifteen square miles marked with scent, scat and claw-marks on rocks and trees. They are secretive, and a cat's presence is shown by its kills and tracks more often than by sight. It stalks to within a few body lengths and rushes. It takes birds from the ground in a leap and hares, rodents and gazelle fawns by the ordinary stalk and pounce. It hisses, growls and barks. A tamed cat bonds with its handler but hunts when it chooses, and not when it is told to.

## What the Nobles Do

Steppe nobles keep caracals as hunting animals, taking kittens from a den, feeding them by hand and training them to course birds and hares. The cats are never wholly tame. A hawk and a cat are carried together, one on the wrist and the other on a lead. The Bizarian lords of the Southern March run coursing cats beside their hounds and hawks in the hunts that decide League business. Herders on the steppe edge lose lambs and fowl to caracals, and kill a cat that has found the pen; they do not trouble one that stays in the rocks.

## Signs

- Small, round, four-toed prints on the dust of a rock ledge, without claw-marks.
- A scatter of feathers, torn from a bird that was taken in mid-leap, with a few fresh bones.
- A heap of covered scat at the foot of a boulder.
- A hare killed neatly at the throat and left half-eaten under a thorn bush.
- A tuft-eared silhouette on a ridge at dusk that is gone before it can be looked at twice.

## Combat Strategy

A caracal fights only when cornered or defending kittens — against larger threats, it vastly prefers to flee. When forced to fight, the caracal relies on speed, agility, and the ferocity that all cats bring to close combat when survival is at stake. It will hiss, flatten its ears, and deliver rapid swipes with its front claws, targeting the face and eyes of the attacker. If seized, a caracal fights with all four sets of claws and its teeth simultaneously, raking, biting, and twisting with a frenetic energy that makes it extremely difficult to hold. Against prey-sized opponents — dogs, jackals, other cats — a caracal is a dangerous combatant, faster and more agile than most animals its size and willing to escalate to lethal force immediately. It aims for the throat or the back of the neck, and its bite — while lacking the crushing power of larger cats — is precise and driven by proportionally strong jaw muscles.

## Attack Methods

### Bird Strike

The caracal's signature attack, used for hunting rather than defense. From a crouched position, the cat launches vertically — reaching heights of six feet or more from a standing start — and strikes with both forepaws simultaneously at a bird in flight. The claws are extended and the strike is delivered with enough force to stun or kill the bird on impact. The entire sequence — launch, strike, descent — takes less than a second.

### Slashing Rake

In defensive combat, the caracal delivers rapid, alternating swipes with its front claws, targeting the face, eyes, and throat of the attacker. The claws are sharp enough to cut through skin and light clothing, and the speed of delivery — three or four strikes in the time a human can throw one punch — makes defense difficult. The cat aims for the eyes with particular focus, an instinctive targeting of the most vulnerable point.

### Neck Bite

Against prey or in lethal combat, the caracal seizes the back of the neck or throat with its jaws and bites down, using its sharp canines to puncture and its jaw strength to crush. The bite is not as powerful as a leopard's but is delivered with precision, targeting the junction between skull and spine where even moderate force can be fatal to smaller animals.

## Special Abilities

### Explosive Vertical Leap

The caracal possesses the most powerful vertical leap of any cat relative to its body size. From a standing or crouched position, it can spring straight upward to heights exceeding six feet — three times its own shoulder height — with enough precision to strike a bird in flight. This ability is powered by proportionally massive hindquarter muscles and an elastic tendon system that stores and releases energy like a coiled spring. The leap is not merely high but fast — the acceleration from crouch to apex is virtually instantaneous, giving prey no time to react.

### Desert Stealth

The caracal's tawny coat provides excellent camouflage in the scrubland and rocky terrain it inhabits, and its movement through vegetation is as silent as any cat's. It can approach within striking distance of alert prey — birds, hares, even wary gazelle fawns — without being detected. In the arid scrublands, a caracal can be within arms' reach and remain invisible against the sun-bleached rock and dried grass.

### Acute Hearing

The caracal's distinctive ear tufts are more than ornamental — the tall, mobile ears provide keen hearing that allows the cat to locate prey by sound alone. A caracal can detect the rustling of a rodent in dry grass at considerable distance and can pinpoint a bird's wingbeats with enough accuracy to launch a blind strike into tall vegetation. This auditory acuity, combined with excellent night vision, makes the caracal a supremely effective crepuscular and nocturnal hunter.

### Trainable Hunter

Unlike most wild cats, caracals can be trained as hunting companions when captured young and raised by experienced handlers. A trained caracal will flush and catch game birds, hares, and even young gazelles on command — or rather, on suggestion, for a caracal cooperates rather than obeys. This trainability, combined with the cat's extraordinary hunting ability, has made it a prized asset among the steppe nobility, and a well-trained hunting caracal commands prices comparable to the finest falcons.

## Attributes

- **Strength:** 7-10 (1d4+6)

- **Endurance:** 8-11 (1d4+7)

- **Dexterity:** 14-19 (1d6+13)

- **Agility:** 15-20 (1d6+14)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-12 (1d4+8)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 5-8 (1d4+4)
