---
tags:
  - draft
  - mages
  - character
name:
  full: Alfred Barnwell
  title: ""
  given: Alfred
  clan: Barnwell
  home: kingsholow
  aliases:
    - Thalos Graymoor
packFolder: aureldiaaelwyth
shortcode: alfrdbrnwl
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Alchemist
  stations: []
  lore:
    - aelwythanclt
    - commonerrnk
  homes:
    - aelwyth
  affiliations:
    - kngdmldrth
  gender: male
  species: null
  born: 678/10/12
  height: 1.75
  weight: 65
  frame: medium
  appearance:
    eye_color: brown
    hair_color: red
    skin_color: light
    complexion: pale
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 14 } }
    - { model: affiliation-menerva }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 16 } }
    - { model: skill-thrvrdhscrpt, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-fltch, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-mysticalability-tarot, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-mysticalability-alch, system: { masteryLevelBase: 68 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 42 } }
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

Alfred Barnwell cuts an unassuming figure—a lean man of moderate height with the pale, weather-worn complexion of someone more comfortable in laboratories and wild places than in sunlit halls. His sharp, angular features are framed by striking red hair, swept back in a practical manner, and his piercing brown eyes miss nothing. There is an intensity in his gaze that suggests constant calculation, and the thin set of his lips hints at carefully guarded secrets. Despite his modest dress and worn traveler's cloak, he carries himself with the assurance of a man who understands dangerous things.

# Dossier {#dossier}

Alfred Barnwell was born in [[place-kingsholow|Kingshollow]], a smaller settlement in the wilder reaches of [[place-aelwyth|Aelwyth]], to a freeman's family with no connections to [[affiliation-ordoarcanis|the Ordo Arcanis]] or any formal magical institution. His early aptitude for herbalism and mineral lore was unremarkable until a wandering scholar from the Panepistemium recognized something deeper—a gift for understanding the old ways of making, the marriage of folk tradition and systematic inquiry. By his mid-twenties, he had secured a place as a lay apprentice within the Epistemium's eastern chapter, and for ten years he immersed himself in the Sodalitas Physéra, the Earth school of alchemy.

In his mid-thirties, Alfred's course took a sudden turn. The Ordo's demands for doctrinal purity and monopolistic control over all magical practice began to feel suffocating to a man raised on Aelwyth's foggy, liminal shores where the boundary between folk magic and learned sorcery had always been permeable. He began quietly gathering forbidden texts—records of pre-Ordo alchemy, techniques preserved by village cunning-folk, runecraft inscribed in stones. When the Quaesitorium began investigating unauthorized practitioners in the borderlands, Alfred made his choice: he left the Epistemium quietly, taking with him his accumulated knowledge and his considerable arsenal of herbal recipes, mineral elixirs, and enchanted stones.

For the past seven years, he has lived as what most know him as: a traveling healer and scholar named Thalos Graymoor, moving through the less-settled regions of Aelwyth—the deep forests, the misty moorlands, the fishing villages that the Ordo's reach only touches lightly. He supplies remedies, crafts bespoke alchemical aids for local craftsfolk and hunters, reads old texts for those who need guidance with the unseen, and conducts his deeper work in candlelit cellars and forest clearings where few ask questions. His knowledge of folklore makes him a trusted advisor on matters of local tradition, and he keeps a careful awareness of political currents that might threaten his precarious independence.

He is faithful to Ménérva—the goddess of knowledge and wisdom—not the communal faith of his birth, but a personal devotion born from his conviction that true understanding does not stop at an institution's walls.

## Psyche

Alfred is a man torn between two worlds. Part of him remains the dutiful, theory-hungry scholar who was once proud to wear the Epistemium's mark; the other part is the cunning, independent practitioner who understands that knowledge guarded is knowledge dead. His worldview is fundamentally skeptical of authority—not out of mere rebellion, but from hard-won experience that the most important truths are rarely the ones institutions want publicized. He is naturally reserved, preferring observation to conversation, and his humor runs dark and quick. Those who mistake his quietness for timidity have misjudged gravely.

Alfred's core strength is adaptability rooted in deep understanding. His perception and reasoning allow him to diagnose problems others miss and devise solutions that work with rather than against natural systems. His will means he does not bend easily, and his conscience keeps him from becoming a mere mercenary charlatan. He is perceptive of feeling, which makes him care about the people he helps—a vulnerability in a dangerous world.

His weaknesses are equally real. His physical frailty is no liability for an alchemist, but it means direct confrontation is a poor strategy for him. More critically, his past—his departure from the Ordo, the texts he took, the practices he has maintained—is a constant shadow. He lives with the knowledge that the Quaesitorium does not forget, and that his safety depends on remaining obscure and useful rather than famous. This has made him wary to the bone; he trusts few, commits fully to none, and always keeps exit routes in mind.

## Social

Alfred's official affiliation is formally severed from the Panepistemium, though he maintains clandestine correspondence with one of its more liberal-minded archivists in the [[affiliation-kingdmdnvr|Dúnavarre]] chapterhouse. Should he ever be discovered, he would be considered a lapsed Adept operating without sanction—a serious violation in Dúnavarre's Ordo-dominated society.

Locally, in the scattered settlements and forest communities of the borderlands where he now works, he is known as a valuable resource. Village chieftains, hedge witches, master craftsfolk, and respected elders know him as someone who can be trusted with a problem and whose discretion is absolute. He has also cultivated selective relationships with other independent practitioners—smugglers of forbidden texts, practitioners of older seidr traditions, scholars of the natural world who work outside the institutions. These are not friendships so much as networks of mutual aid, held together by shared wariness of the Ordo's expanding reach.

His status as a freeman and an outsider to formal Aelwythan power structures actually provides him protection; he is too minor to interest the nobility, and too useful to the common folk to simply disappear.

## Companions

### Patrons and Allies

**Aldus Thorne**, elderly master craftsfolk of Kingshollow and the closest thing Alfred has to a patron, provides shelter and discreet access to his extensive workshop. Their relationship predates Alfred's departure from the Epistemium; Aldus has long been sympathetic to folk practitioners and quietly funded Alfred's research into traditional methods. The bond is strong but carefully maintained.

**The Archivist**, a mysterious figure within the Epistemium's Dúnavarre chapter known only to Alfred by coded letters, supplies carefully laundered copies of restricted texts and is a backstop—someone who, should the worst occur, might provide refuge or warning. This relationship is fragile, held together only by shared intellectual conviction and the Archivist's own private doubts about the Ordo's direction.

### Enemies and Threats

**Magister Sákhoran**, an austere enforcer for the Quaesitorium's western investigations, has taken particular interest in "irregular practices" in the Aelwyth borderlands. He does not yet know Alfred by name, but he is asking the right questions. The tension between them is building steadily.

**The Jealous Circle**, a coterie of independent practitioners in the larger towns who resent Alfred's discretion and growing reputation. They would not hesitate to betray him to the Ordo if they believed it would eliminate a rival—or at minimum, to undercut his standing with shared clients.

## Plot Hooks

1. **The Quaesitorium's Attention**—Magister Sákhoran has begun interviewing the inhabitants of villages where "Thalos Graymoor" is known to operate. A villager has already described Alfred in passing detail, and Sákhoran is correlating the description with old Epistemium records. Alfred learns of this threat through his network of contacts, and can disappear, establish an alibi, or take a more dangerous path—offering the Magister something he cannot refuse.

2. **The Forbidden Text**—A desperate craftmaster comes to Alfred with a crisis: his daughter was poisoned by a rare substance, and the only effective cure lies in an alchemical procedure described in one of the restricted texts Alfred took from the Epistemium when he left. Making the cure would require harvesting ingredients that are monitored by Ordo guilds. Alfred must weigh the daughter's life against the risk of exposure.

3. **The Scholar from Dúnavarre**—The Archivist reaches out with urgent warning: the Ordo has discovered gaps in the restricted archive, and they suspect someone from within the chapter. The Archivist will be scrutinized heavily, and may not survive the investigation. Alfred is offered a terrible choice: help the Archivist disappear (risking everything) or allow the man who protected him to be destroyed.

4. **The Elder's Successor**—Aldus Thorne is dying, and he means to pass his workshop—and all its dangerous knowledge—to Alfred. But Aldus has an ambitious grandson who has recently made connections with Ordo merchant guilds and believes the workshop should be "brought into proper order." Alfred must either accept the inheritance and the visibility it brings, or refuse and watch another man control the very resources he depends upon.

5. **The Outsider's Gambit**—A mysterious collector from far southern lands arrives in Aelwyth seeking specific alchemical texts and willing to pay extraordinary sums. The collector claims to represent scholars who wish to preserve knowledge beyond the Ordo's reach. The price offered is enough to fund Alfred's independence for years—but accepting it would require him to acknowledge his role as a keeper of forbidden lore, and the collector is almost certainly more than they appear.
