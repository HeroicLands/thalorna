---
shortcode: rnthrprdln
name: {full: Ranthor Párdalen, given: Ranthor, clan: Párdalen}
type: being
subType: character
description: "A former knight of the march turned healer and spirit-worker at Valdun, counselor to an Áelendan chieftain and the crown's go-between at the margin."
tags: [heroes-and-knaves, clergy]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [cleric, warrior]
  occupation: Shaman
  lore: []
  culture: elavendriclt
  homes: [valdun]
  affiliations: {kngdmlvndr: {rank: 4}, brazemas: {rank: 1}}
  gender: male
  species: humanflk
  born: 672.138
  height: 5' 9"
  weight: 154 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: dark_brown
    skin_color: tanned
    complexion: [weathered]
    face_shape: long
    extra_features: [a tattoo of a crown on the chest]
  packFolder: aureldiaelavendre
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 65}}
    - {model: skill-thrvrdhscrpt, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-txtl, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-mysticalability-trnc, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-weapongear-stf}
    - {model: sohl-sohl-armorgear-ltshirt}
    - {model: sohl-sohl-armorgear-ltbrch}
    - {model: sohl-sohl-armorgear-rhshoe}
    - {model: sohl-sohl-armorgear-bvcloak}
    - {model: sohl-sohl-armorgear-bvcap}
    - name: Leather ritual satchel
      type: miscgear
      system: {shortcode: leatherritualsatchel, weight: 1.5, value: 100, durability: 3}
    - name: Bundle of medicinal herbs (dried)
      type: miscgear
      system: {shortcode: bundleofmedicinal, weight: 0.8, value: 100, durability: 3}
    - name: Hand drum (deer hide, carved wood)
      type: miscgear
      system: {shortcode: handdrum, weight: 0.7, value: 100, durability: 3}
    - name: Set of carved bone and wooden totems
      type: miscgear
      system: {shortcode: setofcarvedbone, weight: 0.5, value: 100, durability: 3}
    - name: Small carved fetish (personal spiritual item)
      type: miscgear
      system: {shortcode: smallcarvedfetish, weight: 0.2, value: 100, durability: 3}
    - {model: sohl-sohl-miscgear-tndrbx}
    - {model: sohl-sohl-miscgear-stdrtns, system: {quantity: 5}}
    - {model: sohl-sohl-containergear-wtrskin, system: {quantity: 1}}
    - {model: sohl-sohl-containergear-backpk}
    - {model: sohl-sohl-containergear-wtrskin, system: {shortcode: wtrskin2}}
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

![[rnthrprdln|Ranthor Párdalen]]{float=top-left}

Ranthor Párdalen is a 47-year-old man who stands 5'9" tall and is of medium build. He has a long face with a button nose, a prominent chin, dark brows and rounded cheeks. His brown eyes are patient, and his tanned skin is weathered by years of riding the march. His dark brown hair is tied back with a thong, and a tattoo of a crown shows on his chest at the open neck of his shirt.

# Dossier {#dossier}

**Service in Arms**

Ranthor Párdalen came to the spirit-ways by a road of soldiering, hard experience and need. In his youth he served the [[affiliation-kngdmlvndr|Kingdom of Élavendre]] in arms on the eastern march and rose to knighthood and a captain's charge. During a campaign against [[lore-grukarfolk|Grukar]] bands in the hills he was wounded and lost beyond the tree line, and he was found dying by [[lore-aelendnppl|Áelendan]] hunters. Their healers, the elder [[being-serdaleliser|Sérdale Lísernde]] among them, kept him through a winter, and saw in him a sensitivity to the spirits that his soldiering had buried. They taught him what a lowlander may be taught. When he came back down to the march in the spring, he could no longer serve purely as a soldier, nor ignore what he had begun to perceive.

**The Practical Path**

He left the crown's service and settled at [[place-valdun|Valdun]], and built a practice as a healer and spirit-worker that bridges the soldier's world and the shaman's. Where other spirit-workers seek ecstasy, communion and secret lore, Ranthor uses what he learned for practical ends: healing wounds, settling disputes, steadying fighters before a fight, and carrying word between the march and the tribes with the cunning he learned in two kinds of service. Now in his late forties, he counsels the chieftain [[being-ulmeraosseln|Úlmera Ósselnde]] and sits by her side at the great council at [[place-eshalshldg|Ésalosa Lodge]] when it hears the crown's business, and he is the man the crown's officers on the march send for when a quarrel with the tribes must not become a fight.

**The Crown and the Question**

The tattoo of a crown on his chest is a matter of speculation in Valdun. One story makes him of noble or even royal blood, a man who gave up his place for the spirits; another says the crown is something the spirits gave him. Ranthor says only that he once served crowns and now serves the tribes as well, and that this is growth and not loss.

Valdun is long on opinions this year. Men hired by the [[affiliation-ordoarcanis|Order]] come back over the margin hurt and complain to the royal court that they were never warned, and [[being-vargenhalmes|Lord Vargen Hálmesende]] says in company that the tribes' ground should be opened to the crown's roads. Both put Ranthor's work at risk.

## Psyche

### Personality

Ranthor is a man of few words and direct speech; he does not traffic in spiritual pretense or mystical obscurantism. When asked for guidance, he provides practical, actionable counsel rather than cryptic prophecies. This makes him immensely popular with warriors, hunters, and practical people while earning him dismissal or contempt from more traditionally mystical shamans who view his approach as reductive. He possesses a subtle dry humor, often directed at the grandiosity of other shamans or the follies of nobility and hierarchy.

He has a sharp intelligence and real compassion for those who suffer, though he expresses it through action rather than words. He respects competence and honesty in all people regardless of station, and he has little patience for pretense, self-deception, or cruelty. He is not warm but he is fair, and those who work with him develop deep respect for his integrity. There is a melancholy to him—the sense of a man who has survived things that changed him, who has seen the worst of both civilization and wilderness, and who has made peace with neither but simply accepts them as facts of existence.

### Motivation

Ranthor is motivated by a commitment to prevent the suffering he experienced in the conflicts between his former military service and the shamanic communities. He works tirelessly to build peace and understanding between the crown and the tribes, believing that spiritual wisdom and martial strength can and should be integrated rather than placed in opposition. He is driven by pragmatic belief that the shamanic arts are most valuable when applied to real human problems—healing injuries, resolving conflicts, preparing minds and spirits for necessary struggle—rather than being divorced into pure mysticism. Beyond these larger commitments, he is motivated by personal loyalty to those who have aided him, and by a quiet desire to mentor younger shamans (both traditional and pragmatic) in the integration of martial discipline with spiritual practice.

### Strengths

Combat-Ready Spiritual Training
: Unlike most shamans, Ranthor is a dangerous physical combatant; he can fight effectively in melee or from range and weaves shamanic techniques into his martial skill.

Mediation
: Ranthor has brokered peace between groups that seemed implacably opposed; his ability to understand both sides of a dispute and find face-saving compromises is rare.

Practical Ritual Mastery
: His rituals are designed to have measurable, practical effects—they heal injuries, calm anxious minds, steel warriors' resolve—rather than seeking communion with abstract spiritual forces.

Strategic Political Understanding
: His years in royal service combined with shamanic training give him a deep understanding of how power works in both court and tribe; he handles political tangles with considerable skill.

Unshakeable Moral Authority
: Ranthor's reputation for absolute integrity gives his words and judgments enormous weight; even those who dislike him respect his honesty and consistency.

Mixed Heritage Insight
: His background spanning both civilization and shamanic tradition, military and mystical training, gives him unique perspective on seemingly irreconcilable conflicts.

### Weaknesses

Dismissal of Mysticism
: His grounding in pragmatism can prevent him from recognizing or accepting true mystical phenomena that don't fit his rational framework; he may dismiss real spiritual threats as superstition.

Limitations in Work
: He is significantly less capable than purely mystical shamans at accessing the deepest levels of spirit realm communion, astral projection, or pure visionary work.

Isolation Among Peers
: His plainness and skepticism leave him isolated among the spirit-workers of the tribes, and he lacks the support among them that a born Áelendan would have.

Vulnerability to Emotional Isolation
: His commitment to pragmatism and distance can mask deep loneliness; he allows few people close enough to truly know him.

Past Conflicts Unresolved
: His history of serving both kingdom and tribe, and his mysterious past symbolized by the crown, suggests unresolved conflicts or secrets that could become liabilities if exposed.

Underestimation of Subtle Threats
: His tendency to value what is concrete and observable can cause him to miss elaborate conspiracies, subtle magic, or threats that operate through indirection rather than direct confrontation.

## Social

### Patrons

[[being-ulmeraosseln|Chief Úlmera Ósselnde]]
: The chieftain who relies on Ranthor for counsel on matters both spiritual and martial. They have worked together for two decades and trust each other deeply despite their different tempers.

[[being-chenirahares|Captain Chénira Háresende]]
: The crown's Liaison to the Tribes, a decorated officer who carries the crown's word to the Áelendan from the gate-house at Gandelis. She and Ranthor keep a formal relationship with hints of deeper respect, and perhaps of an unresolved history.

[[being-serdaleliser|Elder Healer Sérdale Lísernde]]
: The oldest and most respected healer of Úlmera's tribe, who nursed him through his winter beyond the tree line. She refers patients to him for practical healing when her own work is not enough, and he is the one lowland healer she trusts.

### Enemies

The elders of the fire
: Elders of the tribes, led by the old spirit-keeper [Dolmir]{.name data-type="being/npc"}, who hold that no lowlander should sit at the council fire and ask whether the crown on his chest marks a man who still serves the kingdom.

The hard men of the march
: Officers and lords of the eastern march who think Ranthor's bridging work disloyal and his spirit-work a desertion of his old oath.

[[being-vargenhalmes|Lord Vargen Hálmesende]]
: An ambitious lord of the march, rumored to have ties to dark magic, who wants the tribes' ground opened to the crown's roads and sees Ranthor's peace-brokering as the obstacle. He has twice tried to have Ranthor discredited or removed.

### Affiliations

[[affiliation-kngdmlvndr|Kingdom of Élavendre]]
: Ranthor holds a knight's standing from his service, and the crown's officers on the march recognize and sometimes pay for his work with the tribes.

[[affiliation-brazemas|Faith of Brazemas]]
: He keeps the storm god's rites, as a soldier of the march does.

## Plot Hooks

The Crown's True Story
: An envoy from the court at Péravel has come to Valdun seeking Ranthor's help with a quarrel at the margin, and in passing mentions details of his old service that he has never told. The envoy hints that Ranthor left the crown's service under a cloud, and the party is drawn into learning what the crown on his chest means. The truth could vindicate him or end the peace he has built.

A Complaint the Court Does Not Hear
: A hired guard back from the interior with a Warden's arrow-wound wants witnesses to swear before [[being-ilseviletirv|Magistrate Ílsevile Tírvalnde]] that he was never warned. Ranthor knows the Warden who shot him, and asks a party to go with him to the margin and find the warning-mark before the court sits.

The Road Beyond the Tree Line
: Lord Vargen has brought an Order surveyor to Valdun and means to send him beyond the margin with an armed escort to "prove the ground". Ranthor asks a party to go with the escort and bring it back before it reaches a place where the Wardens will not ask twice.

The Elders' Challenge
: Dolmir and the elders of the fire have asked the great council to bar Ranthor from it. He will not argue for himself, and Úlmera asks a party to learn who among the lowlanders has been feeding Dolmir stories about the tattoo.

The Spirit's Debt
: A spirit that says it watched over Ranthor in his winter beyond the tree line has come to call in a debt: a rite that will cost him dearly and change the balance between the march and the tribes. It will not say why. Ranthor cannot tell whether he is being used by something hostile or owes more than he knows.
