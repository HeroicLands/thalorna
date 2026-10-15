---
shortcode: jackal
name: {full: Jackal, aliases: []}
type: being
subType: creature
description: "A small, adaptable canid of the river lowlands that hunts and scavenges along riverbanks, village middens, and necropolis complexes among the dead."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-hound, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+5
    end: 1d4+6
    dex: 1d6+10
    agl: 1d6+11
    per: 1d6+12
    aur: 1d4+4
    wil: 1d4+8
    rea: 1d4+7
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 23}}
    - name: Darting Bite
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
          name: Darting Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
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
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
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
      weight: {base: 25, calc: "25"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[jackal|Jackal]]{float=top-left}

At dusk a thin, wailing cry rises from the dry channel beyond the last field. It is answered at once from the cemetery wall, and then by the village dogs. A slender gold-gray shape is trotting along the top of the wall, long-legged, with oversized ears and a black-tipped tail held low. It stops, looks back with amber eyes that shine green in the lamplight, and goes on.

# Dossier {#dossier}

The Jackal is the small wild dog of the river lowlands, sixteen to twenty inches at the shoulder and fifteen to thirty-five pounds, living along the river and channels of [[place-aukhelathrgq|Aû'Khelâthu]], in the desert margins, around village middens and among the tombs of the necropolis cities. It scavenges first and hunts second, alone, in pairs or in loose packs of up to a dozen. Jackals are sacred to the lord of the dead, and killing one near a tomb is a serious offense, which the farmers who lose livestock to them feel differently about.

## Presentation

A slender, long-legged wild dog, built for endurance. The coat is short and coarse, a blend of tawny gold, russet and pale cream, with a darker saddle and black tips to the ears and tail. The face is narrow and fox-like, with a pointed muzzle, amber or golden eyes and large ears. The legs are long for a trot over open ground. The bushy tail is held low when the animal is relaxed. At night the eyes shine gold-green in firelight.

## In the Land

Jackals live along the river and the irrigation channels of [[place-aukhelathrgq|Aû'Khelâthu]], in the scrub at the edge of the desert, around village middens and among the tombs of the necropolis cities. A pair or a family shelters in a shallow den or a rock crevice by day and hunts at dusk and dawn. They are wary, quick and adaptable, and feed on carrion, fruit, rodents, insects and whatever people throw away.

## Key Behaviors

Jackals are active at dawn, dusk and night and rest by day in shallow dens, rock crevices or thick scrub. They eat carrion, insects, fruit, small mammals, birds, reptiles and refuse. A pair hunts together, one driving small prey toward the other, and a bigger pack can wear down a young gazelle or a sick animal. They mark their ranges with urine and scat and drive off rivals with calls and, if needed, a fight. They mate for life, and both parents raise the pups, helped by the older young. Near settlements they grow bolder, raiding middens and camps.

## What the Necropolis Keepers Do

[[lore-hezmuiridty|Hezmu'îri]], the Keeper of Transitions, is shown with a jackal's head, and the embalmers who work the drying beds hold the animal in respect for the care it seems to take of the dead. The necropolis keepers feed the jackals that live in the cemetery walls and drive them from freshly sealed tombs. Farmers shoot or trap the ones that take poultry. The Houseless warband of exiled Bethûan women in the South Marches takes the jackal's name. A jackal's call at night is a village's sign that a death is near, and a dog's reply is not welcomed.

## Signs

- A thin, wailing chorus at dusk that sets every dog in the village barking.
- A lean, gold-gray shape slipping along a wall between two tombs, with something in its mouth.
- Small, neat tracks along the margin of a channel, with a tail-brush in the sand.
- A scatter of bones around the base of a cemetery wall.
- Eyes shining at the edge of a lamp in the desert, in pairs.

## Combat Strategy

A jackal avoids direct combat with anything larger than itself whenever possible. Against larger threats, a lone jackal will bark, feint, and retreat, attempting to draw the threat away from pups or food rather than engaging directly. However, a pack of jackals facing a vulnerable target — a wounded animal, a sleeping human, an isolated young child — will coordinate with surprising effectiveness. The pack circles, darting in to nip at legs and flanks from multiple directions, retreating when the target turns, and pressing again from behind. This harassment continues until the target collapses from exhaustion or blood loss. Against humans, jackals almost never attack the healthy and alert, but they are bold scavengers of the battlefield and will approach the wounded with increasing confidence as weakness becomes apparent.

## Attack Methods

### Darting Bite

The jackal lunges forward with a quick, snapping bite aimed at exposed extremities — ankles, calves, hands, and faces of those on the ground. The bite itself is relatively weak compared to larger canids, but the teeth are sharp and the jaw quick, inflicting ragged wounds that bleed freely and are prone to infection.

### Pack Harassment

Multiple jackals coordinate attacks from different angles, darting in to bite and retreating before the target can retaliate. The psychological effect of being surrounded by multiple fast-moving attackers is often more debilitating than any individual bite, and the cumulative blood loss from dozens of small wounds can be life-threatening.

## Special Abilities

### Desert Adaptation

The jackal is superbly adapted to arid environments. It can survive on minimal water, deriving much of its moisture from food. It tolerates heat that would prostrate larger animals and can sustain a ground-covering trot for hours across open terrain. In desert and scrubland environments, the jackal's endurance exceeds that of much larger predators.

### Keen Senses

The jackal's hearing is keen — those oversized ears detect the movement of insects beneath sand and the footsteps of approaching creatures at considerable distance. Its sense of smell, while not as developed as a wolf's, is still very acute, allowing it to locate carrion from miles away on the wind. At night, the jackal's vision is excellent, adapted for low-light hunting.

### Cunning and Adaptability

Jackals are among the most intelligent of the smaller canids, capable of learning from observation, remembering productive scavenging sites across seasons, and adapting behavior to exploit human activity. A jackal that has successfully stolen food from a campsite will develop increasingly sophisticated methods of distraction and theft. They learn the patterns of human settlements — when refuse is dumped, when guards change, when livestock is unattended — and exploit these patterns with patient precision.

### Necropolis Haunter

In the river kingdoms, jackals are associated with the dead and the boundary between the living and spirit worlds. Whether this association reflects real supernatural sensitivity or merely the jackal's preference for carrion near burial sites is debated by priests and scholars alike. What is certain is that jackals are always present near necropolises, that they seem drawn to sites of recent death, and that their howling chorus near a settlement is considered an omen — sometimes of death approaching, sometimes of the lord of the dead extending protection.

## Attributes

- **Strength:** 6-9 (1d4+5)

- **Endurance:** 7-10 (1d4+6)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 5-8 (1d4+4)

- **Will:** 9-12 (1d4+8)

- **Reasoning:** 8-11 (1d4+7)

- **Creativity:** 7-10 (1d4+6)
