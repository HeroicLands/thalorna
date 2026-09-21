---
tags:
  - todo
  - draft
  - clergy
  - character
name:
  full: Émmanîôs Bàremzâtôr
  title: ""
  given: Émmanîôs
  clan: Bàremzâtôr
  home: valdosta
  aliases:
    - Reslâva Aiden Greenfield
packFolder: midhalionvylaria
shortcode: emnsbrmztr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Priest
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
  age: 38
  birthday: 686/6/15
  height: 1.73
  weight: 71
  frame: medium
  appearance:
    eye_color: brown
    hair_color: brown
    skin_color: light
    complexion: tanned
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-florania }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 39 } }
    - { model: skill-semrnscrpt, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-cmcs, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 39 } }
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

Émmanîôs Bàremzâtôr is a 38-year-old man who stands 5'8" tall and is of moderate build. He has a diamond face with sharp cheekbones, a lined forehead, and a square jaw that leads to a prominent chin. His round brown eyes sit beneath arched brows, lending him a candid gaze. A hawkish nose and firm lips complete his features. He has light skin with a sun-tanned complexion. His brown hair is kept practical and short.

What strikes those who meet Émmanîôs is the quality of his attention. His hawkish nose and sharp cheekbones suggest severity, yet his eyes—round and earnest—soften this impression. There is something almost birdlike about him, as though he is always slightly perched, ready to pivot toward someone in distress. The lines on his forehead speak of concentration and worry rather than age. His hands, often stained with earth or herbal powders, move with practiced gentleness when dealing with the sick or frightened. He dresses simply—robes of undyed linen, reinforced at the hems for travel—and his traveling bundle never seems to contain anything beyond what is necessary for his healing work.

# Dossier {#dossier}

Émmanîôs was born in a village near [[place-valdosta|Valdosta]] to a family of tenant farmers whose fortunes mirrored the slow collapse of [[affiliation-vylarinmpr|Vylaria]]'s imperial structure. His childhood was a study in slow scarcity: good harvests followed by lean years, the constant pressure of taxes rising on declining yields, the awareness that the empire that once guaranteed stability was itself dying. When a blight destroyed the village's fields in his twelfth year, his parents could not pay their tithes. The family fractured; his mother and younger sister fled to the capital seeking work, while his father remained on the land, broken by something more profound than mere hunger.

Émmanîôs might have followed his mother's path into the desperate economy of the capital's lower wards, but at fourteen, a visiting priestess of [[lore-floraniadty|Flórania]] identified something in the boy: a remarkable capacity for genuine empathy, a gift for being with the dying, and hands that seemed to understand herbal medicine almost intuitively. The priestess offered him a place in the Temple's training program, and he accepted with the relief of one who has been drowning.

His training in the priesthood was demanding but suited to his temperament. He excelled at the practical crafts—herbal remedy, animal husbandry, soil management—and at the emotional labor of attending to the suffering. But he struggled with formal theology, with ecclesiastical hierarchy, with the political maneuverings that occupied much of the Temple's institutional energy. More troublingly, he found himself increasingly alienated by what he perceived as the Temple's indifference to the accelerating crisis in rural Vylaria. The institution was focused on maintaining tradition and defending its prerogatives; Émmanîôs believed it should be mobilizing every resource to prevent mass starvation.

By his early thirties, Émmanîôs had petitioned to leave the Temple's structured hierarchy and adopt the life of a traveling circuit priest—essentially autonomous, but operating under the Temple's sanction and using its resources. He was granted permission, more because the Temple was grateful to be rid of a persistent voice of criticism than because it supported his vision. He established a circuit connecting twelve villages around Valdosta, traveling in a strict sequence that allowed him to monitor crops, check on the ill, conduct seasonal blessings, and carry messages between isolated communities.

Now, at thirty-eight, Émmanîôs is known throughout the Valdosta region as something close to essential. He has successfully promoted crop rotation techniques that preserve soil fertility despite imperial neglect. His herbal remedies have become legendary—mothers clutch their children to him as though he were a relic of Flórania herself. He delivers babies, tends the dying, and mediates disputes with a compassion that stands in stark contrast to the harsher judgment of settled priests. Yet he is acutely aware that he is holding back a tide that may be too vast to resist. Each year, more families abandon their farms. Each season, scarcity deepens. He works not from confidence that his efforts will transform the situation, but from a conviction that abandoning hope is a form of spiritual death he cannot accept.

His greatest secret is that he has begun to operate outside the Temple's official authority. He maintains a network of hidden grain caches, established redistribution channels that blur the line between charity and theft, and corresponding with radical reformist movements within the priesthood that the Temple hierarchy would certainly suppress if they knew. He is not yet a rebel, but he is becoming one.

## Psyche

Émmanîôs is defined by a profound and sometimes almost painful empathy. He does not merely understand intellectually that others suffer; he feels it viscerally. When he tends to a dying child, he experiences something very close to the child's pain. When he sees a farmer's field failing for the third consecutive year, it affects him as though it were his own ruin. This empathy is his greatest strength—it makes him an extraordinarily effective healer and a beloved figure in his communities—and his greatest vulnerability, as it can lead to compassion-fatigue and a sense of overwhelming helplessness.

This empathy is paired with an almost stubborn idealism about what compassion demands. Émmanîôs believes that genuine care for the poor requires not merely comfort but justice, not merely healing of symptoms but addressing of causes. This makes him increasingly uncomfortable with the Temple's institutional posture, which he sees as accepting the decline of Vylaria as inevitable and focusing instead on maintaining the priesthood's own security and prestige. In his more frustrated moments, he sees the Temple as complicit in the suffering it claims to alleviate.

Yet he is not naive about the world's hard edges. His high guile (45) and intrigue (48) scores reflect something that those who know him only superficially might not suspect: beneath the gentleness, there is strategic cunning. He understands power, knows how to navigate institutional hierarchies, and is capable of deception when he judges it necessary. He maintains his herbal remedy network partly through actual cultivation, but also partly through careful theft and black-market connections he has developed over years. He is an idealist who has learned that ideals sometimes require getting one's hands dirty.

What drives Émmanîôs is a conviction that has only deepened with time: that the dying empire's collapse creates a specific window of opportunity for those with vision and courage to build something better. The Temple is too invested in the old order to do this work. The local lords are too focused on preserving their own advantage. But the villages, organized around networks of mutual aid and guided by someone who truly cares about their survival, might be able to survive the coming darkness. He is moving gradually toward the conviction that he must choose between institutional loyalty and genuine help for his people—and he is beginning to suspect that no institution will ultimately matter when the empire finally breaks.

## Social

Officially, Émmanîôs holds the rank of Circuit Priest of Flórania for the Valdosta region, answerable to the regional Temple hierarchy but operating with significant autonomy in his day-to-day work. The Temple is content with this arrangement because he requires minimal administrative support and because his effectiveness in keeping rural populations calm and provisioned serves institutional interests.

Unofficially, Émmanîôs operates as something close to a civic leader for the villages of his circuit. Local councils consult him on major decisions. Disputes are brought to him for mediation. He is trusted with secrets, with resources, with the real concerns of communities that have learned not to fully trust imperial authority. His standing with the common people is nearly unassailable.

But his relationship with the wider priesthood is increasingly strained. More conservative priests view his radical charity and his willingness to challenge Temple orthodoxy as dangerous. More liberal priests, who might otherwise be his allies, are cautious of his growing independence from institutional structure. The Temple hierarchy tolerates him because removing him would generate significant backlash from his communities—but it is tolerance born of pragmatism, not support.

He is beginning to attract attention from radical reform movements within the priesthood, and also from lay communities organizing outside Church sanction. Some see him as a potential leader for a more distributed, community-based form of Floránia worship that would transcend the institutional Church. He has not committed to any such movement, but he is listening, and his resistance is weakening.

## Companions

**Patrons:** Mother Celene, an elderly priestess of Flórania in the Temple hierarchy, maintains institutional support for Émmanîôs's circuit, despite her private reservations about his radical sympathies. A shadowy figure known only as "the Gathering" appears to coordinate with Émmanîôs about resource redistribution—whether ally or potential manipulator is unclear even to Émmanîôs.

**Enemies:** The Temple's conservative faction views Émmanîôs as a threat to institutional stability and would remove him if they could do so without generating rural unrest. Bishop Morivan, an ambitious ecclesiastic in the capital, has marked Émmanîôs as a heretic-in-waiting and gathers evidence against him. Greedy regional lords see his charitable work as an obstacle to their own extraction of resources from the villages. A grain merchant named Solon, who has profited from village scarcity, despises Émmanîôs for disrupting the desperate desperation that makes the poor vulnerable to exploitation.

## Plot Hooks

1. **The Hidden Cache Discovered** — Soldiers conducting a random audit discover one of Émmanîôs's hidden grain caches, establishing proof that he has been stealing from Temple resources and redistributing them illegally. The Temple hierarchy demands his arrest; his villages threaten armed resistance. Émmanîôs must choose between flight, submission, or escalating into open rebellion against both the Temple and imperial authority.

2. **The Plague From the Capital** — A disease arrives in the Valdosta circuit from merchant caravans, spreading rapidly through the already-weakened population. Émmanîôs realizes it is not a natural illness but appears to be deliberately cultivated—evidence of biological warfare from the [[affiliation-cnfdrtnhrdnstts|Harad]] independence forces, meant to destabilize Vylaria's remaining heartland. He must mount a response that requires resources and authority far beyond his current position, and he must do it while keeping the cause secret, lest panic trigger total social collapse.

3. **The Radical Ultimatum** — The "Gathering" reveals itself to be a network seeking to establish autonomous communities independent of both the Temple and imperial authority. They want Émmanîôs to be the spiritual leader of their movement and are willing to provide resources and protection—but only if he commits to breaking entirely with the Church. His villages would support such a move, but it would mean sacrificing everything he has built within the institutional structure.

4. **The Heir Apparent** — A brilliant young woman from one of Émmanîôs's villages shows remarkable aptitude for both priestly work and for the kind of radical organizing he has been conducting. She asks him to train her to take over his circuit, which would free him to work at a larger scale. But Émmanîôs realizes that if he removes himself from day-to-day community work, he will inevitably be drawn into the larger political conflicts he has been managing to avoid.

5. **The Imperial Inspection** — A new imperial auditor, aggressively reforming Vylaria's administration, arrives in Valdosta and immediately begins investigating the Temple's resource allocation and charitable works. The auditor is neither corrupt nor sympathetic; she simply wants to understand where resources are going. Her investigation threatens to expose Émmanîôs's entire network while simultaneously creating a potential ally if he can convince her that the current system is failing and that only radical restructuring will prevent total collapse.
