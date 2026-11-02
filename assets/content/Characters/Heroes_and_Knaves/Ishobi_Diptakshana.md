---
shortcode: ishbdptkshn
name: {full: Ishobi Diptakshana}
type: being
subType: npc
tags: [heroes-and-knaves, administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [scholar, courtier]
  occupation: Ganoka (Court Astrologer)
  lore: []
  culture: vedyariclt
  homes: [suryagarha]
  affiliations: {shikhalaya: {rank: 5}, vrnkpnthn: {rank: 1}}
  gender: female
  species: humanflk
  born: "683.77"
  height: 5' 5"
  weight: 124 lbs
  frame: light
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: tawny
    complexion: [clear]
    extra_features: [Chalk-dust ground into the creases of her fingers]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 15}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-wdress}
    - {model: sohl-sohl-armorgear-wmntl}
    - {model: sohl-sohl-armorgear-ltcboot}
    - {model: sohl-sohl-armorgear-ltglove}
    - {model: sohl-sohl-miscgear-bookbase}
    - {model: sohl-sohl-miscgear-waxtablet}
    - {model: sohl-sohl-miscgear-inkblk}
    - {model: sohl-sohl-miscgear-penquill}
    - {model: sohl-sohl-miscgear-candlestal}
    - {model: sohl-sohl-containergear-satchltmd}
    - {model: sohl-sohl-miscgear-tndrbx}
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

Ishobi is a slight woman of thirty-seven, 5'5", with a tawny, clear-skinned face, a long jaw and dark brown eyes that narrow when she is working a figure in her head. Her black hair is pinned up out of the way. Chalk-dust has worked so deep into the creases of her fingers that it no longer washes out. She dresses plainly, in a wool dress and a good mantle against the citadel's drafts, and she carries her tables in a leather satchel that never leaves her.

Her wrist-line is uncovered and reads Ritrija. She has never had cause to wrap it.

# Dossier {#dossier}

## The Office

The **Ganoka** of [[affiliation-shikhalaya|Shikhalaya]] fixes the auspicious hour for campaigns, marriages and coronations. In the south the office is half ornament. In the highlands, where an ornamental priest is faintly ridiculous, a Ganoka is expected to be right, and a court that sends its host out at the wrong hour, or crowns a king on the wrong day, wants to know whose reckoning it was.

Ishobi was born to a Ritrija household of [[place-suryagarha|Suryagarha]] and trained on the slate floor of [[place-ganokahall|the Ganoka-shalda]] at [[place-chendrapur2|the Moon City]], whose graduates keep the accounts of every court in Vedyara. She came home at twenty-six and was given the office at thirty, over two older men, because the Maharava's Montrin had seen her work. She works the college's tables on a slate in her room in the citadel, sights from its roof on any clear night, and gives her hour with both reckonings set side by side when they disagree.

## The Hour Both Councils Want

[[being-vkrbrvrjyr|Vikrabir Virajyara]], the Maharava, means to have his son acclaimed as heir in his own lifetime, which the kingdom has never done. The [Martial Council]{.name data-type="affiliation/governmental"} is with him. The [Priestly Court]{.name data-type="affiliation/governmental"} is not, and will call the vote improper. An acclamation is a royal act, and its hour is the Ganoka's to fix.

Both sides have understood what that means. The Maharava's Montrin has let her know which months the far chieftains can reach the capital. The Rajagorva, who holds that the elder line was wronged, has let her know which hours the Court would find hard to accept. Neither has asked her for a particular answer. Both have made sure she knows the question.

She has done the reckoning. The hour she has found falls in the closed season, when the passes are shut and the far chieftains are snowed into their valleys and the capital belongs to the Court. She has not given it. She has checked it four times, against the college's tables and against her own sightings, and the answer has not moved.

## The Day Between

The reckoners of the Ganoka-shalda compute the year. The high priests of [[place-surtatempl|the Surta temple]] sight it. The two methods have differed by a day for as long as anyone has checked, and a day is enough to move a coronation. Ishobi's hour sits on that day. By the computed year it falls in the closed season. By the sighted year, if this year's sighting comes out as the last three did, it falls one day into the open season.

The Shikhalayan court follows the sighted year. The college she trained in does not. If she gives the hour by her tables, she hands the Court its acclamation. If she gives it by the Surta temple's sighting, and the sighting comes out as the last three did, she hands it to the Maharava. She wants the hour to stand as reckoned, whichever side it serves, and she wants to give it with nobody able to say she chose her year to order.

## Psyche

### Personality

Ishobi is exact, private and drily funny. She likes figures better than people and is honest about it. She dislikes being flattered and dislikes being threatened more, and has been both in the last year. She keeps her own counsel at court and talks freely only on the citadel roof, at night, to whoever is cold enough to stay up with her.

### Motivation

She wants the hour of the next acclamation fixed by her own reckoning and by no council's convenience.

### Strengths

The Tables
: She is the best reckoner in the highlands, and the college in Chendrapur would say so.

The Office
: Her hour is a royal instrument. Nobody at court can fix it but her.

The Two Reckonings
: She sets the computed and the sighted year side by side and says plainly where they differ, which no other Ganoka in the kingdom does.

### Weaknesses

No Faction
: She belongs to neither council and has no protection from either.

The Satchel
: Every reckoning she has made for the acclamation is in it, and she will not let it out of her sight.

## Social

### Patrons and Allies

The Maharava's Montrin
: Who gave her the office and would like to be thanked for it.

The reckoners of the Ganoka-shalda
: Her teachers, who send her the year's tables by the terrace road.

### Rivals

The Rajagorva
: The king's own teacher and Jagasvar's, who holds that the elder line is owed the throne.

The Purohata
: Who performs the rites of an acclamation and would rather the hour were his to name.

### Affiliations

[[affiliation-shikhalaya|Shikhalaya]]
: Ritrija, Ganoka of the Maharava's court.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: She keeps the household observances of her family and holds no rank in a school.

## Plot Hooks

The Tables from the Coast
: Next year's tables come up the terrace road every autumn with a courier of the Ganoka-shalda. This year he is a month late, and a letter from the college says he left on time. Ishobi needs the tables before she gives her hour, and she suspects someone at court would rather she gave it without them.

The Sighting
: She needs this year's sighting from the Surta temple, in the high priests' own words, before the court hears it from anyone else. She hires the party to carry her letter south and to bring the answer back faster than the court's own messenger.

The Widow's Hour
: Both councils argue from [[lore-widowaccl|the Widow's Acclamation]]. The record of the hour fixed for it is kept by the Priestly Court, and nobody has looked at it in a century. Ishobi wants to know whether her predecessor fixed that hour by his tables or by somebody's convenience, and the Court will not lend her the record.
