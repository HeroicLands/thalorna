---
shortcode: dvrnvrshpr
name: {full: Dvurnvir the Shaper, given: Dvurnvir, aliases: [the Shaper]}
type: being
subType: character
tags: [paragon, heroes-of-asguard, mages]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [mage, scholar]
  occupation: Alchemist and Scholar
  stations: []
  lore: [commonerrnk]
  culture: nordheimnclt
  homes: [vrystwald]
  affiliations: [vrystwldtrbs]
  gender: male
  species: humanflk
  born: 668.146
  height: 1.79
  weight: 95
  frame: heavy
  appearance:
    eye_color: gray
    hair_color: silver
    skin_color: light
    complexion: freckled
    extra_features: []
  packFolder: ankarisvrystwald
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 8}}
    - {model: affiliation-motefnir}
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

Dvurnvir stands 5'7" with a thin, almost gaunt frame, weighing about 140 pounds. His pale skin has an unhealthy pallor, and his dark blonde hair is wild and uncombed, sticking out at odd angles. His green eyes have a feverish intensity, darting constantly as though tracking things invisible to others. His features are sharp and pinched, with a narrow face, a pointed nose, hollow cheeks, thin lips that move constantly in muttered calculations, and brows knit in perpetual concentration. His hands are stained with alchemical reagents in a dozen different colors, and chemical burns dot his fingers. Dvurnvir wears a stained leather apron over threadbare scholar's robes, with pouches and vials dangling from every available surface. He smells faintly of sulfur and something metallic. The Forsaken Guardian—his created companion—is often lurking nearby, casting a monstrous shadow that contrasts sharply with Dvurnvir's slight form.

# Dossier {#dossier}

Dvurnvir was born to a clan of wanderers who revered [[lore-motefnirdty|Mótefnir]] for his creative genius, despite the god's indifference. From an early age, Dvurnvir was fascinated by the Dreadspawn—creations of Mótefnir that were both awe-inspiring and terrifying. While others feared these beings, Dvurnvir saw them as manifestations of Mótefnir's brilliance and sought to understand their nature. As he grew older, Dvurnvir became known as the Shaper for his ability to manipulate and alter these creations, seeking to perfect what Mótefnir had left incomplete. His experiments were dangerous and often led to disaster, but Dvurnvir was relentless in his pursuit of Mótefnir's ideals.

The saga of Dvurnvir the Shaper tells of his most ambitious experiment, where he attempted to combine the essence of two powerful Dreadspawn to create a new, more perfect being. The process was fraught with peril, as the Dreadspawn were unpredictable and volatile. Dvurnvir spent weeks preparing for the fusion, using ancient texts and forbidden knowledge to guide him. When the time came, he succeeded in merging the two beings, creating a new Dreadspawn that was both beautiful and terrifying—the Forsaken Guardian. This creation became a symbol of Dvurnvir's devotion to Mótefnir and his ability to bring order to chaos.

## Psyche

### Personality

Dvurnvir is obsessive and brilliant, a man whose mind operates on a different plane from ordinary people. He speaks in rapid, tangential bursts, jumping between subjects in ways that leave listeners bewildered. He is deeply uncomfortable with social interaction and prefers the company of his creations to that of people. Despite his eccentricity, Dvurnvir possesses a genuine desire to make the world better through his work, though his definition of 'better' often alarms those around him. He has no sense of personal danger and will cheerfully walk into life-threatening situations if they promise interesting results.

### Motivation

Dvurnvir seeks to complete what Mótefnir began—to perfect the art of creation itself. He believes that the Dreadspawn are not monsters but unfinished masterworks, and that with enough knowledge and skill, they can be elevated to something magnificent. His deeper drive is a need for meaning: if Mótefnir created without purpose, perhaps Dvurnvir can give that creation purpose after the fact.

### Strengths

Dvurnvir's understanding of the Dreadspawn is unparalleled; he can predict their behavior, communicate with them to some degree, and modify their physical forms. His alchemical and scholarly knowledge is vast, spanning disciplines that most scholars would consider mutually exclusive. The Forsaken Guardian he created serves as both protector and companion, a formidable creature that obeys his commands with surprising loyalty.

## Social

## Companions

### Patrons

**The Wanderers of Mótefnir**—The scattered followers of the Maker who abandons his work, who see Dvurnvir as the most promising practitioner of Mótefnir's creative arts and supply him with rare materials and forbidden texts.

**Aldric of the Panepistemium**—A Panepistemium scholar who secretly funds Dvurnvir's research, fascinated by the practical applications of his work with the Dreadspawn despite the ethical concerns.

### Enemies

**The Ordo Arcanis**—The Ordo views Dvurnvir's unsanctioned manipulation of magical creatures as a serious threat and has dispatched Quaesitors to investigate his activities.

**The Dreadspawn Hunters**—A vigilante group dedicated to destroying all Dreadspawn, who view Dvurnvir as a dangerous madman whose work creates more monsters for the world to suffer.

## Plot Hooks

1. **The Unfinished Creation**—Dvurnvir has discovered the remains of one of Mótefnir's original laboratories and believes he can reactivate it. The knowledge within could revolutionize his work—or unleash something terrible.

2. **The Guardian's Awakening**—The Forsaken Guardian has begun displaying independent thought and emotions. Dvurnvir must decide whether this is a breakthrough or a catastrophe.

3. **The Ordo's Ultimatum**—Quaesitors have arrived with an ultimatum: submit to the Ordo's authority or be destroyed. Dvurnvir must choose between his independence and his survival, or find a third option.
