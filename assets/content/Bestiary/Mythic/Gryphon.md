---
tags:
  - mythic
  - image-needed
  - creature
name:
  full: Gryphon
  aliases: []
description: "A three-hundred-pound eagle-lion predator of legend, lean and supremely muscled, blending the majesty of birds with the ferocity of beasts."
shortcode: gryphon
type: being
data:
  icon: icon-griffinsymbol
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
  kbcat: mythic
  attrRollFormula:
    str: 1d6+14
    end: 1d6+10
    agl: 1d6+11
    per: 1d6+16
    snt: 1d4+1
    aur: 1d4+5
    wil: 1d6+10
    rea: 1d4+6
    cre: 1d4+5
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 19 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 7 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 62 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 66 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 70 } }
    - name: Beak
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 75
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 3
            aspect: piercing
          lengthBase: 1
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
    - name: Talon
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: 2
            aspect: edged
          lengthBase: 1
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
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 2
            aspect: edged
          lengthBase: 1
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
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 2
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 1
          - name: Left Wing
            shortcode: lwingzone
            probWeight: 2
          - name: Torso
            shortcode: torsozone
            probWeight: 3
          - name: Right Wing
            shortcode: rwingzone
            probWeight: 2
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 2
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 1
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: rwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
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
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 2
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 3
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: &a1
              blunt: 2
              edged: 1
              piercing: 0
              fire: 1
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a1
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: &a2
              blunt: 2
              edged: 1
              piercing: 0
              fire: 1
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 3
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 3
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: *a2
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 3
            protectionBase: &a3
              blunt: 4
              edged: 3
              piercing: 2
              fire: 3
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 6
            protectionBase: &a4
              blunt: 3
              edged: 2
              piercing: 1
              fire: 2
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 3
            protectionBase: *a3
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 6
            protectionBase: *a4
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 2
              edged: 1
              piercing: 0
              fire: 1
      weight:
        base: 300
        calc: "300"
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 200
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The first warning is the cry — a sound somewhere between a raptor's shriek and a lion's roar, echoing across the mountainside and setting your teeth on edge. Then you see it. The creature launches from its perch with a terrible grace, its huge feathered wings catching the wind and carrying it higher than any eagle could climb. Yet this is no eagle. Where a bird's body should taper into a tail, a great cat takes over — a lion's muscled frame, powerful haunches, and a tail that lashes the air with a lion's authority. The contrast is startling: the fierce, exact attention of a bird of prey joined to the raw power of a hunting cat.

As it comes down toward you — if it has chosen you as quarry — you see the whole of it. The eagle's head turns with an unnatural freedom, and the golden eyes settle on you with intelligence and a cruel amusement. The talons, each the size of a scimitar's blade, flex. The forelegs that carry them are corded with muscle under the weight of those wings, and the hindquarters ripple with a cat's readiness to spring. Its plumage runs bronze and deep gold, and where feather meets fur you cannot find the join. Its breath comes in heavy huffs, each one carrying the heat of a furnace and the musky smell of high peaks and wild hunting grounds.

# Dossier {#dossier}

The gryphon joins the king of birds to the king of beasts. A grown one stands three to four feet at the shoulder, runs five to six feet from the grip of its forelegs to the tip of its tail, and weighs about three hundred pounds — lean, muscled, built like the predator it is. The join of eagle and lion is so clean that the old argument about whether some sorcerer made them has mostly given way to the view that they came into the world whole.

## The Animal

The eagle half is huge. The head is as large as a shield, with eyes that take and throw back light like polished amber and a beak that curves to a point sharp enough to pierce armour. The neck is thick, heavily feathered, strong enough to carry that head. The body behind it is muscle, feathered brown and gold down to about where a lion's ribs would be, and there the feathers stop and tawny fur begins, and from there back the animal is a lion — lithe and powerful, made for the burst and the long chase, with a lion's thick tail carried high for balance and for signalling. The wings open to twenty feet and more and lift the whole weight without strain; a gryphon in flight rarely beats them, riding the thermals and correcting with small, exact movements. The forelegs end in true talons, huge and curved, that tear through a warrior's mail or score stone. The hind legs are a lion's, with retractable claws, less terrible than the talons and still lethal.

Its senses are an eagle's eyes and a lion's nose and ears together. It sees movement miles off, smells prey through a forest, and hears riders coming from a great way, and in a fight it keeps track of several opponents at once.

## The Eyrie

Gryphons live fifty to eighty years and hold vast mountain ranges as their own. They pair for breeding and stay paired, though for much of the year each is alone. The nest is built where nothing else can reach it — the highest peak that offers both the eagle's ledge and the lion's defensible den — and it is kept with care and decorated with what the gryphon finds beautiful. They hunt big game — elk, ibex, wild horses — with the eagle's ambush from the air and the lion's pursuit on the ground, diving to drive an animal toward a cliff or striking from a high circle. A kill lasts several days, and between kills a gryphon sits in its eyrie, grooms its feathers, watches the sky and appears to think about its country.

A pair raises one young a season and both parents guard it; a nesting pair fights as one and is more dangerous than any lone gryphon. The unpaired wander, looking for ground or a mate, and are the ones most often met. Territorially, a gryphon will not have another gryphon in its range — fights between rivals are rare and terrible, hours long and high in the air. Eagles and great hawks are tolerated, and so are deer and mountain goats, which a gryphon will not hunt in company even though they are its usual food. Interestingly, gryphons seem to have taste: some fly particular routes for the view, some collect bright things, and most take an interest in anything unusual in their country — a lightning storm, a rare bird, people doing something strange.

Their minds are about those of a very bright child, with feelings more like an adult's. They hold grudges, feel pride, know individuals, and some have been seen to mourn. Threats do nothing with them. Respect does, and now and then in history someone has managed to bond with one, and the pair have made a name that outlived them both; such pairs have served as elite mounts and as scouts, their strength and eyesight together worth a great deal in war and in exploring.

## In a Fight

A Gryphon fights as both halves at once. It opens from the air, using height to weigh up the threat and choose its moment, then stoops with talons out, rakes on the pass and climbs away on the momentum. If the opponent stands up to that, it may land and close, balancing on its hind legs with its wings so that both forelegs are free — and on the ground it is a cyclone, circling, striking from every side, using its wings to hit and to shield, rising onto its hind legs and dropping to all fours as the moment needs, and always using the ground: a rise for vantage, a cliff edge to push toward, a drop to dive from. Against several opponents it grows careful, keeping height, picking off the weak and leaving if it seems likely to be trapped. Gryphons are not suicidal; they value their lives and break off a losing fight. Over its territory or its young it fights on through wounds that should have stopped it.

The dive brings three hundred pounds down at speed with both sets of talons leading; it pierces armour, breaks bones, opens wounds that kill, and knocks the struck flat or staggering. On the ground the talons rake fast and repeatedly, and a stroke to the head or face lays it open to the bone; even a glancing blow draws blood. The beak is used less often and is every bit as dangerous — it pierces and tears where a lion's jaws crush, and it can crack bone or take a limb, usually once a strike has already broken an opponent's guard or when the gryphon has decided to finish him. A full stroke of a wing throws a standing man off his feet or spoils his swing, and the gryphon uses its wings that way to make room or break an attack.

In the air it does what should not be possible — straight vertical climbs, turns without warning, hanging in place — and it lands on cliff faces, turns its whole body over in mid-flight, and judges distance from height without error. Its cry is loud enough and pitched so that it shakes bone and air alike: it warns another gryphon from a great distance, leaves an opponent stunned and confused for a moment, and declares a territory for miles around. There is meaning in it, not just noise.

## The Bond

Rarely, and on its own terms, a gryphon will bind itself for life to a person — never under compulsion, always its own choice, usually after months or years of acquaintance in which the person has earned it. What it recognises is bravery, or honour, or a wildness like its own. Once bonded it is mount, companion and guard; the person shares its eyes, its speed and its judgement in a fight, and the gryphon will die before it lets its person be killed. The bond outlasts the person. A gryphon whose partner has died turns savage over its territory, or, in a few cases, sinks into a grief that goes on for years.

## Attributes

- **Strength:** 15-20 (1d6+14)

- **Endurance:** 11-16 (1d6+10)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 17-22 (1d6+16)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 6-9 (1d4+5)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 6-9 (1d4+5)
