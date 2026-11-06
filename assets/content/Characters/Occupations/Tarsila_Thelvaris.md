---
shortcode: tarsilathelv
name: {full: Társila Thelvaris}
type: being
subType: npc
tags: [todo-warrior, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Man-at-Arms
  lore: []
  culture: tarvenanclt
  homes: [kavrenath]
  affiliations: {kngdmstrth: {rank: 2}, arldnpnthn: {rank: 1}}
  gender: female
  species: humanflk
  born: 694.207
  height: 6' 1"
  weight: 183 lbs
  frame: heavy
  appearance:
    eye_color: amber
    hair_color: auburn
    skin_color: medium
    complexion: [weathered]
    extra_features: [crooked nose]
  packFolder: aureldiatarvenia
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 41}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 20}}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: null, calc: "(9 * str) + 50"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
    defaultCombatGroup: null
---

# Appearance {#appearance}

Társila Thelvaris is a 25-year-old woman, tall for a woman at 6'1", with a heavy, powerful build that commands attention in any formation. Her auburn hair is tied back in a thick braid that reaches the middle of her back, and her honey-brown eyes carry the steady, appraising look of an officer who has learned to assess threats before they arrive. Her skin is weathered from years on the [[place-kavrenath|Kávrenath]] frontier, and her nose is crooked from a break she took during a border skirmish, since healed but never straightened. Her hands are large and calloused, and she moves with the deliberate economy of someone trained to carry armor over long distances. She wears a mail habergeon over a gambeson tunic, both bearing the dust and minor repairs of active frontier service, and keeps a broadsword and round shield within arm's reach at all times.

# Dossier {#dossier}

Társila comes from a family whose entire existence has been defined by the border. Her grandfather held a tower on the eastern road. Her father commanded a border garrison. Her mother was the daughter of a garrison commander, married into the family specifically to cement military-family ties. Társila was taught soldiering the way other children are taught language—immersion from infancy, with the expectation that it would become who she was.

Társila grew up in the garrison posts of the eastern march of [[place-asturath|Asturath]], along the road that climbs from Kávrenath toward the [[place-kervaron|Kervaron Spine]] and the frontier of the [[affiliation-vylarinmpr|Vilérian Empire]] beyond it. She received formal military training at fifteen and enlisted at eighteen, not because she needed to but because it was assumed. Her family has produced three garrison commanders and she is being groomed to become the fourth. She is also over six feet tall, 183 pounds of muscle and scar tissue, with a naturally authoritative bearing that makes people defer to her without thinking about it.

At twenty-two, Társila was assigned to the garrison at [[place-kavrenath|Kávrenath]], the most important and worst-manned posting on the frontier. The work is brutal: constant hunting of smugglers, the handling of refugees, the imperial deserters who come over the passes to sell their swords, and the bandits who prey on the mule trains. She has been in actual combat maybe forty times. She has killed nine people. Her crooked nose was broken two years ago by a smuggler's fist and never properly reset—she refused to leave her post to have it set.

Now at twenty-five, she holds the rank of captain and commands a mixed unit of fifty soldiers. She is already better at supplying a unit and leading it in the field than most senior officers. She is also deeply aware that her family's connections matter more than her actual competence, and this awareness is slowly poisoning her sense of who she is.

## Psyche

### Personality

Társila is direct and blunt to the point of tactlessness. She dislikes intrigue and finds the social games of officer culture exhausting. She leads from the front, which her soldiers respect absolutely. She is impatient with excuses and intolerant of laziness, but cares about her soldiers' safety and welfare. She has a crude sense of humor and drinks like a man half her size.

### Motivation

What drives Társila first is proving that she earned her position rather than inherited it. This drives everything she does at Kávrenath: she works twice as hard as any officer should have to, keeps her unit the readiest for combat on the frontier, and demonstrates a ruthlessness in command that unsettles some of her superiors. Second is protecting the border itself—not from ideology but from a conviction that the territories she commands require her specific kind of strength.

### Strengths

Her combat ability is far beyond the ordinary—she moves with a natural fluidity that suggests her body was built for violence. She is an inspired tactical commander who reads terrain instantly. She is physically brutal enough to command respect from veteran soldiers and officers twice her age.

## Social

Társila's social position is privileged and deeply uncomfortable. She is treated with deference because she is a Thelvaris, resented by ambitious officers who see her advancement as family favoritism, and secretly pitied by egalitarian-minded soldiers who assume her competence is secondary to her lineage. This mix of expectation and doubt defines her existence.

## Companions

### Patrons

**[[being-estarildomi|Estaril Dómivar]], Warden of the March**—The senior officer commanding the entire Kávrenath frontier sector. Dómivar is Társila's uncle by marriage and respects her abilities, but their dealings as officers are poisoned by the fact that nobody can ever quite believe his endorsements rest on merit. Dómivar desperately wants to see Társila knighted and eventually to command the entire frontier, but fears that doing so will undermine her credibility with the soldiers.

### Enemies

**Captain [[being-tholmargutha|Tholmar Gútharen]]**—A rival officer commanding the neighboring garrison sector. Gútharen is ambitious, politically connected, and seething with resentment that Társila (younger, female, and a Thelvaris) was given command of the more valuable Kávrenath posting. He has begun documenting every minor decision Társila makes, waiting for a mistake he can use. He spreads rumors that her unit's success comes from excessive brutality toward refugees and suspected collaborators.

## Plot Hooks

1. **The orders from Lezkora.** Two hundred refugees are camped below the town gate, and the month-old orders say to send them back over the Kervaron. Among them is an imperial clerk who once carried the governor's letters to the frontier, a man Társila respects, who asks for asylum knowing that granting it will ruin her. She asks a party to bring him to the Warden of the March before [[being-tholmargutha|Tholmar Gútharen]] learns he is in the camp.
2. **The deserters' armor.** The imperial deserters who have come over the passes want to sign with a valley company, and their armor is better than deserters' armor should be. Társila asks a party to learn who equipped them, and whether the band that raided the road last month was sent to draw her men away from the garrison.
3. **The captain's ledger.** Tholmar Gútharen writes down every decision Társila makes and tells the valleys that her unit is brutal with refugees. She asks a party to learn to whom he sends what he writes.
4. **A Thelvaris from over the mountain.** A man in the refugee camp says he is her father's son by a Vilérian woman, raised on the imperial side of the Kervaron. He has the family's bearing, and he may be an imperial agent. Her family wants him denied before anyone hears his claim, and Társila wants to know the truth first.
