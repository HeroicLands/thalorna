---
tags:
  - paragon
  - heroes-of-asguard
  - mages
  - character
name:
  full: Hrafnleif the Wise
  title: null
  given: Hrafnleif
  clan: null
  aliases:
    - the Wise
  home: null
packFolder: ankarisnordlands
shortcode: hrafnlefws
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Seer and Runemaster
  stations: []
  lore:
    - nordheimnclt
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: male
  species: null
  born: 662/9/2
  height: 1.85
  weight: 99
  frame: heavy
  appearance:
    eye_color: green
    hair_color: gray
    skin_color: light
    complexion: freckled
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 13 } }
    - { model: affiliation-odinn }
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Arms
            shortcode: armszone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Legs
            shortcode: legszone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
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
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: null
        calc: "(9 * str) + 50"
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

Hrafnleif stands 6'1" with a heavy, slightly stooped frame, weighing around 215 pounds. His light skin is lined with age, and his steel gray hair is pulled back in a warrior's knot. His green eyes are sharp and penetrating, set deep beneath a furrowed brow. His features are long and angular, with a prominent aquiline nose, a thin-lipped mouth, and heavy brows that arch like a hawk's wings. Deep creases frame his eyes and mouth, carved by decades of squinting at ancient texts and furrowing his brow in thought. A pair of ravens are often seen nearby, perching on his shoulders or circling overhead. Hrafnleif dresses in layered woolen robes of muted grays and deep blues, with a heavy fur-lined cloak against the northern cold. A leather satchel at his hip is stuffed with rune-carved bones, bark scrolls, and fragments of ancient texts. His gnarled hands are stained with ink and the residue of ritual pigments.

# Dossier {#dossier}

Hrafnleif was born under a sky darkened by ravens, a sign that Ódinn himself was watching over his birth. As a child, he displayed an insatiable curiosity, often wandering far from his village to explore ancient ruins and forgotten forests. He claimed to hear the whispers of Huginn and Muninn in the wind, guiding him to hidden knowledge and lost lore. By the time he reached adulthood, Hrafnleif had become a renowned seer and runemaster, his wisdom sought by kings and warriors alike.

The most famous saga of Hrafnleif the Wise tells of the time he was called upon to save his people from an impending war. Two powerful jarls were on the brink of battle, their armies ready to clash, when Hrafnleif, guided by Ódinn's ravens, discovered an ancient rune that foretold the doom of both kingdoms if they went to war. With this knowledge, Hrafnleif ventured into the heart of the enemy camp alone, using his mastery of runes to weave illusions and speak directly to the jarl's fears and ambitions. He revealed the prophecy, convincing both leaders to lay down their arms and unite against a common enemy—a monstrous jotunn that threatened their lands. Hrafnleif's wisdom not only averted war but forged an alliance that saved countless lives, forever earning him the favor of Ódinn.

## Psyche

### Personality

Hrafnleif is contemplative and measured, speaking only when his words carry weight. He possesses a dry wit that surfaces unexpectedly, and his long silences can unsettle those who mistake stillness for inattention. He is deeply patient, willing to sit with a problem for days before acting. Though he projects calm authority, he struggles with the burden of foresight—knowing what may come yet being unable to prevent all suffering. He treats knowledge as sacred and hoards secrets not from greed but from the conviction that truth revealed too early can be as destructive as any blade.

### Motivation

Hrafnleif seeks to preserve the accumulated wisdom of the northern peoples and to avert catastrophes before they unfold. He fears that the old lore is dying as younger generations turn from the runes, and he quietly searches for an apprentice worthy of inheriting his knowledge. Beneath his scholarly exterior lies a deep longing to understand the will of Ódinn—whether the god truly speaks to him, or whether his visions are merely the projections of an old man's hopes.

### Strengths

Hrafnleif's runic mastery is unmatched in the northern lands; he can read omens in bird flight, weather, and the casting of carved bones. His diplomatic skill has ended conflicts that seemed intractable, and his reputation alone can open doors that would be barred to warriors. He possesses a near-eidetic memory for sagas, genealogies, and treaties, making him an invaluable counselor to any jarl wise enough to listen.

## Social

## Companions

### Patrons

**Jarl Ulfric of Stormsfjord**—A cautious ruler who relies on Hrafnleif's counsel before making any major decision. Ulfric provides Hrafnleif with shelter, resources, and access to his court in exchange for guidance on matters of war and diplomacy.

**The Raven Circle**—A secretive fellowship of runemasters and seers scattered across the northern realms who share forbidden knowledge through coded messages carved into waymarker stones.

### Enemies

**Grimvald Iron-Eye**—A rival seer who claims Hrafnleif is a fraud and that his prophecies are fabrications designed to manipulate jarls. Grimvald has placed bounties on Hrafnleif's head among mercenary bands.

**The Quaesitorium Arcanum**—The Ordo Arcanis enforcement arm has taken an interest in Hrafnleif's runic practices, viewing his unsanctioned magic as a potential threat to their monopoly on arcane knowledge.

## Plot Hooks

1. **The Shattered Rune**—Hrafnleif has discovered fragments of an ancient rune that, when assembled, could reveal the location of Ódinn's lost eye. Rival factions—including Grimvald Iron-Eye and agents of the Ordo Arcanis—are also hunting the fragments. The party must help Hrafnleif recover the pieces before they fall into the wrong hands.

2. **The Silent Ravens**—Huginn and Muninn have gone silent. Hrafnleif can no longer hear their whispers and fears something terrible has happened in the spirit realm. He needs companions to journey to the World Tree's roots and investigate what has disrupted the ravens' flight.

3. **The Jarl's Dilemma**—Jarl Ulfric's son has been accused of murder, and the evidence is damning. Ulfric begs Hrafnleif to use his sight to uncover the truth, but what Hrafnleif sees in the runes implicates someone far more dangerous than anyone suspected.

4. **The Apprentice's Betrayal**—A former student of Hrafnleif has begun using corrupted runes to enslave the minds of villagers. Hrafnleif must confront his own failure as a teacher while stopping the apprentice before the corruption spreads.
