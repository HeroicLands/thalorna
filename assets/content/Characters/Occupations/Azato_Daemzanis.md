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

At fifty, Azatô Dâemzânis cuts a sparse, scholarly figure — barely five and a half feet tall, with the lean, almost frail frame of a man whose life revolves around careful work at a workbench rather than physical toil. His medium-toned skin is weathered beyond his years, scored with fine lines that speak of decades spent poring over crystalline structures and volatile mixtures by candlelight. Most striking are his pale blue eyes, sharp and luminous with an intense, unsettling intellect; they hold the quality of a predator watching prey through glass, brilliant but wholly dispassionate. His brown hair, once thick, has thinned to a crown of close-cropped curls swept back from a high, narrow forehead. A hawkish nose and thin, precise lips complete the picture of a man whose expressions rarely venture beyond measured restraint.

# Dossier {#dossier}

Azatô Dâemzânis was born into the Dâemzânis family in [[place-tyrellan|Tyrellan]], one of [[affiliation-vylarinmpr|Vylaria]]'s merchant-patrician houses whose gilded status granted him access to [[affiliation-panepistmm|the Panepistemium]] but little true power in the senatorial hierarchies that rule the realm. As a child showing precocious intellectual gifts—particularly in mathematics and the study of natural substances—he was marked for [[affiliation-ordoarcanis|the Ordo Arcanis]], as all gifted children are marked in Vylaria. However, his talent suggested an aptitude for something beyond the six magical schools: he possessed the rare insight of an alchemist, that peculiar blend of analytical precision, mineral knowledge, and herbal craft that places alchemists apart even within the Ordo's ranks. By his thirties, he had earned his Magistri rank within the Sodalitas Physéra—the fellowship of earth and substance—though his ascent was slower and more contentious than his intellectual gifts alone would suggest.

His reputation rests on two abilities: a mastery of mineral transmutation that borders on the uncanny, and an encyclopedic knowledge of herbal lore and funeral practices. The latter—his skill in embalming—points to a deeper fascination with preservation, with stopping time itself, with understanding the boundary between living substance and inert matter. His discourse with colleagues is articulate and commanding, yet those who know him recognize it as performance rather than connection; he feels almost nothing for other people, which leaves him capable of brilliant argument but incapable of human warmth. This peculiarity earned him the alias "Oswin Crey," adopted quietly during a contentious period with the Quaesitorium—the Ordo's enforcement arm—roughly fifteen years ago. The nature of that conflict remains opaque, though it involved a fellow Magister named Quintus Aerius, whose theories Azatô publicly demolished as "fundamentally confused about the nature of mineral essence." Aerius died under circumstances never fully clarified; Azatô moved his main laboratory to a rented estate on the outskirts of Tyrellan and has maintained the alias ever since.

More peculiar still is his skill in piloting—unusual for an alchemist rooted in the inland valleys of Vylaria. Ten years prior, a trading venture down the Veridian River to purchase rare crystalline samples required him to master navigation and river piloting. The experience left him with knowledge of currents, coastal landmarks, and maritime trade routes that remain curiously current in his memory.

His conscience wavers, pulled between the ruthless pragmatism required by his investigations and an increasingly insubstantial commitment to principle. He has never crossed into outright amorality, but the gap narrows with each year.

## Psyche

Azatô's inner life is one of towering intellect untethered from any feeling for others. His mind operates with the clarity of polished steel, analyzing problems down to their elemental components. His creativity shows in unexpected leaps of insight, in novel approaches to transmutation that colleagues struggle to replicate. Yet this same mind is fundamentally isolated: he experiences others largely as obstacles, instruments, or irrelevant background detail. He can articulate their motivations with precision; he simply does not feel them.

This creates a peculiar dissonance in his social presentation. His eloquence and discourse allow him to project warmth, concern, even intimacy. But it is entirely constructed—a mask worn so consistently that even Azatô has begun to wonder, in rare quiet moments, whether anything beneath it remains. His will is resolute, driving him through long nights of experimentation, through setbacks in his work, through the slow corrosion of aging. Yet that same will, untempered by any real feeling, has begun to calcify into something approaching obsession.

He tells himself his work matters. That the secrets hidden in mineral crystal structures, in the slow rot of buried matter, in the preservation of flesh beyond death, will ultimately vindicate the years of solitude and cold precision. Whether he truly believes this, or whether the belief itself is simply another elegant construct he maintains for his own reassurance, remains unanswered.

## Social

Within Vylarian society, Azatô occupies the privileged but constrained position of the guilded class. His family name carries weight in Tyrellan's merchant councils, but true political power remains the province of the senatorial families above. Within the Ordo Arcanis and the Epistemium, he holds the rank of Magister in the Sodalitas Physéra, a position of considerable authority over junior alchemists and apprentices—though his authority is increasingly resented, as younger practitioners detect the coldness beneath his eloquence and bridle under his exacting, unsympathetic instruction.

His use of the alias "Oswin Crey" in certain academic circles and with certain contacts has become almost routine. He maintains a carefully bifurcated existence: Azatô Dâemzânis conducts authorized research through Epistemium channels, while Oswin Crey pursues more delicate investigations that skirt the edges of what the Quaesitorium would officially sanction. This duality has become second nature, a compartmentalization as precise as any of his laboratory work.

He maintains cordial but distant relations with the senatorial families whose patronage funds much alchemical research, including House Valerion, the dominant merchant-patron of the Epistemium's mineral research program.

## Companions

### Patrons and Allies

**Senator Marcus Valerion** — The most influential of the three senior senators who govern Tyrellan, Valerion has become Azatô's primary patron over the past twelve years. Their relationship is transactional and carefully maintained: Valerion funds Azatô's mineral research with the expectation of first access to any compounds of use in war or manufacture. Azatô has learned to deliver results that satisfy this arrangement while keeping his most proprietary discoveries sequestered.

**Brother Aurelius** — A Ménérvan priest of the Temple of Wisdom in Tyrellan, Aurelius is confessor to several Epistemium scholars and has become one of the few people Azatô engages with something approaching candor. Their conversations occur monthly and ostensibly concern theological matters, but both understand that Aurelius is a necessary anchor, keeping Azatô's detachment from slipping into something worse. Brother Aurelius harbors no illusions about his colleague's capacity for warmth; he simply views the work as maintaining a brilliant mind in sufficient equilibrium to continue contributing to human knowledge.

**Lena Moretti** — A merchant's widow of lower equestrian standing, Lena manages her late husband's trading concerns and has contracted with Azatô for the past five years to source and authenticate rare mineral specimens across coastal trade networks. She knows him only as Oswin Crey and believes him to be a scholar-merchant of independent means. Their dealings have remained stable precisely because no personal connection threatens it.

### Enemies and Threats

**Magistra Corinna Sextus** — A fellow Magister in the Sodalitas Physéra whose theoretical framework on mineral essences Azatô systematically disassembled in a published response thirteen years ago. Corinna has never forgiven him, and her influence within the Epistemium has grown considerably; she now chairs the Sodalitas examination board and has begun initiating subtle investigations into Azatô's unconventional methods. She suspects—correctly—that some of his research exists outside official Ordo sanction.

**The Quaesitorium Inquiry** — A quiet, ongoing concern. Fifteen years ago, the death of Magister Quintus Aerius created an internal investigation that touched Azatô peripherally. The matter was officially closed, but file agents within the Quaesitorium maintain certain suspicions. These remain dormant—there is no proof, and Azatô has been scrupulously careful since—but the knowledge that those files exist, that they contain his name, has never truly left him.

**Decurion Gavius Celsus** — A Quaesitorium field investigator with a reputation for dogged persistence. Celsus has recently taken interest in certain mineral thefts from Epistemium stores and the emergence of novel alchemical compounds in black-market channels. He has no direct evidence against Azatô, but their paths have begun to cross with uncomfortable frequency.

## Plot Hooks

**The Codex Problem** — A merchant ship carrying a rare alchemical codex from the coastal holdings was intercepted and its cargo scattered. Lena Moretti has contracted "Oswin Crey" to retrieve pages from a private collector in a neighboring realm without official sanction. The cost offered is extraordinary, but the retrieval would almost certainly trigger Quaesitorium scrutiny if discovered.

**Quintus Redivivus** — An apprentice has discovered references in old Epistemium records to a secret project Azatô conducted with the late Magister Quintus Aerius before their public rupture. The apprentice, lacking context, asks innocent questions about the work. Azatô can suppress the inquiry or allow a dormant chapter of his past to reopen.

**The Transmutation of Iron** — Senator Valerion has learned rumors of Vylarian Steel's forging secrets and suspects they involve alchemical processing unknown to the Steel Houses. He has tasked Azatô with discovering these secrets through research, willing to fund any necessary expedition or investigation. The request is both an enormous opportunity and an invitation to espionage against Vylaria's most jealously guarded monopoly.

**Brother Aurelius's Successor** — The aging priest has begun mentoring a young ecclesiast to eventually hear Azatô's monthly confessions. This replacement—idealistic, warm, and concerned with Azatô's spiritual welfare rather than his usefulness—poses an unexpected threat: the kind of human connection Azatô has spent fifty years avoiding.

**The Preservation Question** — Azatô's research into herbal preservatives and funeral embalming has attracted unexpected attention from the Ordo's mortality scholars and a shadowy faction within the Epistemium that studies the boundary between death and restoration. They have begun leaving anonymous inquiries asking whether he would be interested in a collaborative project of considerable scope and extraordinary risk.
