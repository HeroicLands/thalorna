---
tags:
  - heroes-and-knaves
  - administration
  - character
name:
  full: Mithran Shiradar
  title: ""
  given: Mithran
  clan: Shiradar
  home: oasisteyrn
  aliases: []
packFolder: dunharatribes
shortcode: mthrnshrdr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Chieftain
  stations: []
  lore:
    - commonerrnk
  homes:
    - dunhardsrtrgn
  affiliations:
    - dunhartrbs
  gender: male
  species: humanflk
  born: 664/12/18
  height: 1.88
  weight: 85.7
  frame: heavy
  appearance:
    eye_color: dark_brown
    hair_color: gray
    skin_color: tanned
    complexion: weathered
    extra_features:
      - a scar from forehead to cheek across the left eye
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-zurathra }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 9 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-weapongear-baxe }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-ltstunic }
    - { model: sohl-sohl-armorgear-ltbrch }
    - { model: sohl-sohl-armorgear-bvmntl }
    - { model: sohl-sohl-armorgear-bvcap }
    - { model: sohl-sohl-armorgear-ltkboot }
    - name: Tribal insignia pendant
      type: miscgear
      system:
        shortcode: tribalinsigni
        weight: 1
        value: 100
        durability: 3
    - name: War horn (bone and copper)
      type: miscgear
      system:
        shortcode: warhorn
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-liteblkt, system: { quantity: 2 } }
    - { model: sohl-sohl-miscgear-frtns }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-containergear-wtrskin }
    - { model: sohl-sohl-containergear-bglgcvs }
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

![[mthrnshrdr|Mithran Shiradar]]{float: top-left}

Mithran stands 6'2" tall with a heavy build. He has tanned weathered skin, gray hair, and dark brown eyes. His features include a diamond-shaped face, a prominent nose, a strong jawline, slightly pursed lips, and dark brows. He has a scar from forehead to cheek across his left eye.

# Dossier {#dossier}

Mithran Shiradar was born into the warrior caste of the [[affiliation-dunhartrbs|Dunhara Tribes]], the third son of Chieftain Rashad. Unlike his older brothers, who fought endlessly over matters of status and honor, Mithran proved himself through practical mastery rather than political maneuvering. He earned his first war wounds at sixteen, his first killing at seventeen. By his early twenties, he had established himself as a warrior whose prowess could not be questioned.

When tribal leadership fell vacant at his father's death, his two older brothers began a civil conflict that threatened to tear the entire tribe apart. Mithran, recognizing the danger, orchestrated a reconciliation that elevated neither of his brothers but instead unified the tribe under a council structure. Both brothers agreed to this arrangement—one died in a subsequent border conflict, the other accepted a position of honor without political authority. Mithran thus became chieftain not through right of succession but through demonstrated wisdom and, importantly, through the consensus of the tribe's elders and council.

For over thirty years, Mithran has held leadership, managing the relationships between the Dunhara and the settled kingdoms, apportioning his tribe's resources, and defending his territory against encroachment. He has faced assassination attempts, rival chieftains seeking to prove themselves against him, and the constant pressure of maintaining authority in a society that respects only strength and cunning. The scar across his eye is a reminder of a poison attempt by a rival that left him disfigured but alive—and significantly more paranoid.

## Psyche

### Personality

Mithran is a man carved from difficult circumstances, pragmatic to the point of ruthlessness and cautious to the point of paranoia. He speaks with authority born of experience, his words often few but always carrying weight. He makes decisions based on thorough analysis of advantage and risk, and he commits to those decisions completely. Yet he is not cold or unfeeling; those few he trusts know him to be capable of deep loyalty and unexpected gentleness.

His paranoia is not irrational but born of real dangers he has survived. He trusts no one implicitly, extends trust only to those who have proven themselves repeatedly, and remains perpetually alert to the possibility of betrayal. This has made him an effective leader but an exhausting presence, as everyone around him is perpetually aware that they are being assessed and judged. He holds grudges with a clarity of focus that is almost frightening—if someone wrongs him, they have marked themselves as his enemy until death, and he will pursue that vendetta with the patience of a man who measures time in decades.

### Motivation

Mithran is driven by a single, all-consuming purpose: the survival and dominance of his tribe. Every decision he makes is filtered through this lens. He is not ambitious for personal power but for tribal security and strength. He serves Zúráthrä, god of fertility and abundance, not through worship but through the practical work of securing his tribe's continuation and prosperity. His motivation is rooted in a deep, almost spiritual belief that his role is to be the shield between his people and the countless dangers arrayed against them.

### Strengths

- **Master of Warfare**: Mithran's skill in combat is famous throughout the region. He has killed more enemies than many warriors have faced, and his tactics are studied by military strategists across multiple realms.
- **Exceptional Leadership**: He commands loyalty not through cruelty but through demonstrated competence and a real commitment to his tribe's welfare. His decisions have consistently preserved and strengthened the Dunhara.
- **Political Acumen**: Despite his tribal origins, Mithran understands the political realities of the settled kingdoms. He negotiates with empire ambassadors with the skill of a born diplomat.
- **Unassailable Authority**: His position as chieftain is secure not through force but through the consensus of his people. Even rivals acknowledge his right to lead.
- **Survival Instinct**: Mithran has survived assassination attempts, treachery, and combat that would have killed ordinary men. His instinct for danger is almost preternatural.

### Weaknesses

- **Paralyzing Paranoia**: His caution has sometimes prevented necessary action. His suspicion of others' motives can blind him to real opportunities for alliance.
- **Limited Understanding of Complex Politics**: While he understands tribal politics and military strategy, he sometimes struggles with the labyrinthine politics of settled kingdoms and their courts.
- **Emotional Restraint Taken Too Far**: His unwillingness to extend trust has isolated him personally. He maintains few close relationships and is vulnerable to loneliness disguised as duty.
- **Aging Warrior**: While still dangerous, his physical abilities have begun to decline. A younger, stronger opponent could potentially defeat him through attrition.
- **Threat to Stability**: His very dominance and warrior nature mean that his death would likely trigger succession conflicts. He has no clear heir, and the question of his successor has become a source of increasing anxiety among his people.

## Social

### Patrons

- **The Council of Dunhara Tribal Elders**: The council that shares leadership responsibility with Mithran and provides legitimacy for his rule.
- **The Spirit Keepers**: The shamans and ritual specialists of the tribe who maintain Mithran's spiritual authority and advise on matters of religious significance.

### Enemies

- **Kethrak the Challenger**: A rival chieftain from the neighboring Valdun tribes who has been systematically consolidating power and openly positioning himself as a future threat to Mithran's dominion. The two have never directly fought, but each respects the other's capabilities and recognizes that conflict is eventually inevitable.
- **The Imperial Garrison at [[place-khstmhttrgn|Khaset-Mehtet]]**: The military outpost maintains nominal peace with the Dunhara, but recent commanders have proven hostile to tribal interests, leading to multiple border skirmishes and failed negotiations.
- **Estheva, the Returning Son**: Mithran's youngest son, once considered his heir, abandoned tribal life twenty years ago to live among the settled kingdoms. He has recently returned with outsider ideas about governance and change, threatening Mithran's traditionalist authority.

### Affiliations

- **The Dunhara Tribes**: His primary affiliation and the source of his identity and authority.
- **The Council of Tribal Leaders**: A confederation of the Dunhara chieftains and war leaders who collectively advise on tribal matters.
- **The Temple of Zúráthrä**: A devotional order dedicated to the god of fertility, prosperity, and abundance.

## Plot Hooks

1. **The Succession Question**: After more than three decades of leadership, Mithran is beginning to face the mortality he has so far evaded. The tribal council has begun, carefully and tactfully, to raise the question of succession. Mithran has resisted acknowledging this question, but the council's pressure is mounting. The obvious choices are all problematic: his eldest son is a brilliant administrator but lacks martial prowess; his youngest son, the returned outsider, represents everything Mithran has fought against. Meanwhile, ambitious war leaders are positioning themselves as potential alternatives. Mithran faces the impossible task of choosing a successor without surrendering authority or creating a succession conflict that will tear his tribe apart.

2. **The Prophecy from the Oracle**: A wandering oracle arrives at the Dunhara encampment with a dire prophecy: within three years, Mithran will face the greatest threat to his leadership he has yet encountered. The threat will come from within the tribe. The oracle will not provide details, cannot be pressed for specifics, and departs as mysteriously as she arrived. Mithran's paranoia, already considerable, escalates dramatically. He begins viewing every confidant, every council member, every ambitious warrior as a potential threat. His attempts to root out the supposed threat create the very instability and resentment that might actually produce the dangerous situation the prophecy described.

3. **The Unexpected Alliance**: A representative from a distant empire arrives with a proposal: the empire faces a threat from a confederation of hostile nomadic tribes and seeks to ally with the Dunhara to oppose them. The terms offered are generous—trade agreements, military support, and recognition of Mithran's expanded authority. Yet Mithran's instinct screams that this is a trap. The representative seems too comfortable with his suspicious nature, too readily accepting of his demands. It may be a real opportunity for the Dunhara to increase their power and security, or a subtle scheme to maneuver his tribe into a vulnerable position.

4. **The Returning Exile**: Estheva, Mithran's youngest son, has been away for twenty years. He returns not as a supplicant seeking forgiveness but as a changed man, educated, articulate, and full of ideas about how the Dunhara should change. More troubling, he has brought with him a wife from the settled kingdoms and a child born into that world. He seeks acceptance and a role in tribal governance. For Mithran, this represents everything he has fought against—the contamination of pure tribal tradition with outsider corruption. Yet Estheva is brilliant and capable, and his ideas—while terrifying to Mithran—hold real merit. The conflict between father and son becomes the focal point of tribal tension.

5. **The Assassination Plot Unraveled**: Mithran's scouts capture an assassin who was clearly moving toward the chieftain's encampment. Under questioning, the assassin reveals that he was hired by someone within the tribal leadership, though he doesn't know who. The money came through intermediaries, the contracts were signed with seals that could be anyone's. Mithran must conduct an investigation that could implicate his most trusted lieutenants, knowing that the investigation itself will create the distrust and resentment that could destabilize his leadership. He can pursue the truth, knowing it might destroy the tribe, or quietly eliminate the assassin and pretend the incident never occurred.

6. **The Frontier Crisis**: A natural disaster—a massive flood or earthquake—has devastated the borderlands between Dunhara territory and the settled kingdoms. Thousands are homeless, food supplies are destroyed, and disease threatens to spread. The imperial authorities are overwhelmed and have, surprisingly, turned to Mithran for assistance. The Dunhara tribes could help, but doing so would require allowing outsiders into their territory, sharing resources meant for the tribe, and establishing a precedent of cooperation with the Empire. Mithran faces a choice between tribal interest and the duty to help, between maintaining isolation and stepping into a larger role on the regional stage—a role that might elevate his status or completely destroy tribal independence.
