---
tags:
  - draft
  - guilded
  - mages
  - character
name:
  full: Azatô Dâemzânis
  title: ""
  given: Azatô
  clan: Dâemzânis
  home: tyrellan
  aliases:
    - Oswin Crey
packFolder: midhalionvylaria
shortcode: azatodmzns
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Alchemist
  stations: []
  lore:
    - vylarianclt
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - vylarinmpr
  gender: male
  species: null
  age: 50
  birthday: 670/5/25
  height: 1.63
  weight: 51
  frame: medium
  appearance:
    eye_color: blue
    hair_color: brown
    skin_color: medium
    complexion: weathered
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 13 } }
    - { model: affiliation-menerva }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 45 } }
    - { model: skill-semrnscrpt, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-mnrl, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-pilt, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 8 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 9 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 18 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-jewl, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 8 } }
    - { model: sohl-sohl-mysticalability-alch, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 15 } }
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

At fifty, Azatô Dâemzânis cuts a sparse, scholarly figure — barely five and a half feet, lean to the point of frailty, a man built by a workbench rather than by labour. His medium-toned skin is weathered past his years and scored with the fine lines of decades bent over crystal and volatile mixtures by candlelight. The pale blue eyes are the thing: sharp, lit with an intelligence that unsettles, the look of something watching prey through glass, brilliant and entirely without warmth. His brown hair, once thick, has thinned to close-cropped curls swept back from a high narrow forehead. A hawkish nose and thin, exact lips finish a face whose expressions rarely go beyond restraint.

# Dossier {#dossier}

Two men live at the rented estate on the edge of Tyrellan. Azatô Dâemzânis, Magister of the Sodalitas Physéra, conducts sanctioned research through the Epistemium's channels and answers to the Ordo Arcanis. Oswin Crey, scholar-merchant of independent means, buys rare minerals through coastal trading contacts and pursues the inquiries the Quaesitorium would not sanction. They have the same hands.

Azatô was born into the Dâemzânis family of Tyrellan, one of Vylaria's merchant-patrician houses — gilded enough to open the Panepistemium to him, not enough to count for anything in the senatorial hierarchies that rule the realm. He showed early gifts in mathematics and the study of substances, and gifted children in Vylaria are marked for the Ordo Arcanis. His talent pointed past the six magical schools to the alchemist's rarer insight, the joining of exact analysis, mineral knowledge and herb-craft that sets alchemists apart even inside the Ordo. By his thirties he held the Magistri rank in the Sodalitas Physéra, the fellowship of earth and substance, after a climb slower and more contested than his gifts would have predicted.

His reputation rests on two things: a command of mineral transmutation that verges on the uncanny, and a scholar's grasp of herbal lore and funerary practice. The embalming is the part colleagues notice — a preoccupation with preservation, with stopping time, with the line between living substance and dead matter. In argument he is articulate and commanding, and those who know him recognise it as performance; he is capable of brilliant discourse and incapable of warmth. The alias came out of a contentious passage with the Quaesitorium, the Ordo's enforcement arm, roughly fifteen years ago. A fellow Magister, Quintus Aerius, had published theories that Azatô took apart in public as "fundamentally confused about the nature of mineral essence." Aerius then died in circumstances never fully explained. Azatô moved his laboratory to the rented estate outside Tyrellan, took the name Oswin Crey for certain company, and has kept both ever since.

Stranger still, for an alchemist of Vylaria's inland valleys, he can pilot a river. Ten years ago a trading venture down the Veridian River after crystalline samples obliged him to learn navigation and the handling of a boat, and the currents, the coastal landmarks and the sea-trade routes have stayed in his memory with a currency that is hard to account for.

His conscience sits at the threshold. The ruthlessness his investigations require pulls one way and a thinning commitment to principle the other. He has not crossed into the plainly amoral. The gap narrows every year.

## Psyche

Azatô's mind is a tower with nobody living in it. It works with the clarity of polished steel, breaking a problem to its elements; his creativity shows as sideways leaps of insight, approaches to transmutation that colleagues cannot reproduce. And it is alone. Other people reach him as obstacles, instruments or background; he can lay out their motives exactly and does not feel them at all.

The sheet says it plainly: reasoning 17, creativity 14, will 13, eloquence 13, morality 11, and an empathy of 8; the talent of 42 that marked him for the Ordo as a boy; mineral craft and discourse both at 60; embalming and river piloting both at 30. It is the profile of a man who can make you feel understood and has never once understood anybody.

That is the dissonance in his company. The eloquence and the discourse let him project warmth, concern, even intimacy, and all of it is built — a mask worn so long that in his rarer quiet moments he wonders whether there is anything under it. His will has carried him through long nights at the bench, through setbacks, through the slow erosion of age; untempered by feeling, it has begun to set into something like obsession.

He tells himself the work matters — that the secrets in a crystal's lattice, in the slow rot of buried things, in flesh kept past death, will one day justify the years of solitude and cold exactness. Whether he believes it, or whether the belief is one more elegant construction kept for his own comfort, he has not settled.

## Social

Within Vylarian society Azatô holds the privileged, constrained place of a guilded-class scholar. The family name carries weight in Tyrellan's merchant councils; real power stays with the senatorial houses above. Within the Ordo Arcanis and the Epistemium he is a Magister of the Sodalitas Physéra, with considerable authority over junior alchemists and apprentices — authority increasingly resented, because the young detect the cold under the eloquence and chafe at exacting, unsympathetic instruction.

The alias has become routine in certain academic circles and with certain contacts. He keeps the two lives carefully apart: Azatô Dâemzânis does authorised research through Epistemium channels; Oswin Crey does the more delicate work that skirts what the Quaesitorium would officially permit. The compartments are as exact as anything in his laboratory.

He keeps cordial, distant relations with the senatorial families whose money funds most alchemical research, House Valerion above all — the dominant patron of the Epistemium's mineral programme.

## Companions

### Patrons and Allies

**Senator Marcus Valerion** — The most influential of the three senior senators who govern Tyrellan, and Azatô's principal patron for twelve years. The arrangement is a transaction, carefully kept: Valerion funds the mineral research and expects first sight of any compound with a use in war or trade. Azatô has learned to deliver enough to satisfy that expectation while keeping his most valuable discoveries to himself.

**Brother Aurelius** — A Ménérvan priest of the Temple of Wisdom in Tyrellan who hears the confessions of several Epistemium scholars, and one of the few people Azatô speaks to with anything near candour. They meet monthly, ostensibly on theology; both know that the conversations are what keeps Azatô's detachment from tipping over into something worse. Aurelius has no illusions about his penitent's capacity for warmth. He regards the work as keeping a brilliant mind steady enough to go on adding to human knowledge.

**Lena Moretti** — A widow of lower equestrian standing who runs her late husband's trading concern and has contracted with Azatô for five years to find and authenticate rare mineral specimens through the coastal trade. She knows him only as Oswin Crey, a scholar-merchant of independent means. The arrangement has held precisely because nothing personal has ever entered it.

### Enemies and Threats

**Magistra Corinna Sextus** — A fellow Magister of the Sodalitas Physéra whose theory of mineral essences Azatô dismantled in a published response thirteen years ago. She has not forgiven it, and her standing in the Epistemium has grown: she now chairs the Sodalitas examination board and has begun quiet inquiries into his unconventional methods. She suspects, correctly, that some of his research lies outside the Ordo's sanction.

**The Quaesitorium Inquiry** — A dormant matter. Fifteen years ago the death of Magister Quintus Aerius brought an internal investigation that touched Azatô at its edge. It was closed. Certain agents within the Quaesitorium kept their suspicions, and though there is no proof and he has been scrupulous since, the knowledge that those files exist with his name in them has never left him.

**Decurion Gavius Celsus** — A Quaesitorium field investigator with a name for not letting go. Celsus has lately taken an interest in mineral thefts from Epistemium stores and in the novel compounds turning up in black-market channels. He has nothing on Azatô. Their paths cross more often than chance would explain.

## Plot Hooks

**The Codex Problem** — A merchant ship carrying a rare alchemical codex from the coastal holdings was intercepted and its cargo scattered. Lena Moretti has contracted "Oswin Crey" to recover pages from a private collector in a neighbouring realm, without official sanction. The fee is extraordinary. The retrieval, if it is noticed, brings the Quaesitorium.

**Quintus Redivivus** — An apprentice has found references in old Epistemium records to a secret project Azatô ran with the late Magister Quintus Aerius before their public break, and, knowing nothing, asks innocent questions about it. Suppress the inquiry, or let a closed chapter open.

**The Transmutation of Iron** — Senator Valerion has heard rumours of the secrets behind Vylarian Steel and suspects an alchemical process the Steel Houses themselves do not understand. He has set Azatô to find it, and will fund any expedition or inquiry it takes. An enormous opportunity, and an invitation to espionage against the realm's most jealously guarded monopoly.

**Brother Aurelius's Successor** — The ageing priest has begun training a young ecclesiast to take over Azatô's monthly confessions. The replacement is idealistic, feeling, and concerned for Azatô's soul rather than his steadiness — which is to say the one thing Azatô has spent fifty years keeping out: a real human connection.

**The Preservation Question** — His research into herbal preservatives and funerary embalming has drawn the notice of the Ordo's mortality scholars and of a shadowy faction inside the Epistemium that studies the boundary between death and restoration. Anonymous inquiries have begun arriving, asking whether he would consider a collaboration of considerable scope and extraordinary risk.
