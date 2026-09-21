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

What people notice first about Émmanîôs is the quality of his attention. He is 38, 5'8" and of moderate build, with a diamond face, sharp cheekbones and a hawkish nose that together suggest severity, and round, earnest brown eyes under arched brows that undo the suggestion. The forehead is lined with concentration and worry rather than years; the jaw is square, the chin prominent, the mouth firm. Light skin tanned by the road; brown hair kept short and practical. There is something of a bird about him, always a little perched, ready to turn toward whoever in the room is in trouble.

His hands are usually stained with earth or herbal powder, and they are gentle with the sick and the frightened from long practice. He dresses in undyed linen robes reinforced at the hem for walking, and his bundle never seems to hold anything but what the healing needs.

# Dossier {#dossier}

Twelve villages around Valdosta, in a fixed order, in every season: that is Émmanîôs's circuit, and he has walked it for the better part of a decade. In each he looks at the crops, sees the sick, says the seasonal blessings, carries the letters to the next, and moves on. He is Circuit Priest of Flórania for the Valdosta region, which means a priest with no temple and a great deal of road.

Émmanîôs Bàremzâtôr was born in a village near Valdosta to tenant farmers whose fortunes fell with Vylaria's, a little each year — a good harvest, then two lean ones, the tithes rising as the yields fell, and the plain knowledge that the empire which had once guaranteed the order of things was dying. In his twelfth year a blight took the village's fields and his parents could not pay. The family broke: his mother and younger sister went to the capital to find work, his father stayed on the land, and something in the man was gone that hunger alone did not account for.

At fourteen a visiting priestess of Flórania saw what he was — a boy who felt the dying as if it were his own, who could sit with them, whose hands seemed to know herbs before he was taught — and offered him the Temple's training. He took it the way a drowning man takes a rope. The practical crafts came easily: remedies, animal husbandry, the management of soil, and the harder labour of attending the suffering. Theology did not, nor hierarchy, nor the politics that take up most of a temple's energy; and what estranged him was the Temple's calm in the face of the countryside's collapse. It was defending its traditions and its prerogatives. He thought it should be pouring everything it had into keeping people alive.

By his early thirties he had petitioned to leave the Temple's structure for the life of a circuit priest — autonomous in practice, under the Temple's sanction and drawing on its stores — and was granted it, less because the Temple believed in the idea than because it was glad to be rid of a persistent critic. He laid out the circuit and has kept it since.

Around Valdosta he is now something close to necessary. He has taught the villages a rotation of crops that keeps the soil alive despite imperial neglect. His remedies are talked about as if they were relics; mothers hold their children out to him. He delivers babies, sits with the dying, and settles quarrels with a gentleness the settled priests do not show. He also knows that he is holding back a tide. Every year more farms are abandoned. Every season the want is deeper. He works not because he expects to turn it but because giving up hope is a kind of death he will not accept.

His secret is that he has stopped waiting for the Temple. He keeps a network of hidden grain caches. He has built channels of redistribution that sit on the line between charity and theft. He corresponds with radical reformers inside the priesthood whom the hierarchy would certainly silence if it knew. He is not a rebel yet. He is becoming one.

## Psyche

Émmanîôs feels other people's suffering as a physical thing. He does not know in the abstract that a child is dying; he feels something very near the child's pain. A farmer's field failing for the third year affects him like his own ruin. It is what makes him a healer people will walk a day to reach, and it is what wears him down — the fatigue of too much feeling, the sense that nothing he does is enough.

Paired with it is a stubborn idealism about what compassion requires. Comfort is not enough; the causes must be addressed, and the Temple's posture — that Vylaria's decline is to be accepted and the priesthood's own safety secured — looks to him more and more like complicity in the suffering it claims to ease.

He is not naive. His guile is 45 and his intrigue 48, which people who know only the gentle priest would not guess. He understands power, knows how an institution is worked from inside, and will deceive when he judges it necessary. The remedy network runs partly on what he grows and partly on careful theft and black-market friendships built over years. He is an idealist who has learned that ideals require dirty hands.

What drives him has only hardened: the empire's collapse opens a window for people with vision and nerve to build something better. The Temple is too bound to the old order to do it, the lords too busy protecting their own share; but the villages, knit together in mutual aid and led by someone who cares whether they live, might come through the dark. He is moving, slowly, toward the conclusion that he will have to choose between the institution and the people, and toward the suspicion that when the empire finally breaks no institution will matter at all.

## Social

Officially, Émmanîôs is Circuit Priest of Flórania for the Valdosta region, answerable to the regional Temple hierarchy and largely left to himself. The Temple is content: he costs almost nothing to administer, and a countryside kept calm and fed serves the institution's interests.

Unofficially he is the nearest thing his twelve villages have to a civic leader. Councils consult him before they decide. Disputes are brought to him. He is trusted with secrets, with stores, with the real worries of communities that have learned not to trust imperial authority. Among the common people his standing is nearly beyond challenge.

With the wider priesthood it is another matter. The conservatives see his radical charity and his challenges to orthodoxy as dangerous. The liberals, who might be allies, are wary of how far he has drifted from the structure. The hierarchy tolerates him because removing him would set his villages alight, and that is pragmatism, not support.

He has begun to draw the attention of radical reform movements inside the priesthood and of lay groups organising outside Church sanction. Some of them see in him the leader of a Floránia worship without a Church — distributed, rooted in the villages. He has committed to none of it. He is listening, and his resistance is thinning.

## Companions

**Patrons:** The farmers and village elders of the Valdosta circuit are his true patrons. Among them Elder Theron of Millhaven — a former militia officer, and patron also to Azéndas Dâemâtôr, though the two priests have never met — gives him shelter and local political cover. Mother Celene, an elderly priestess of Flórania within the hierarchy, keeps institutional support behind the circuit despite her private misgivings about his sympathies. And a shadowy figure known only as "the Gathering" coordinates with him on redistribution; whether ally or manipulator, even Émmanîôs cannot say.

**Enemies:** The Temple's conservative faction sees him as a threat to stability and would remove him if it could be done without rural unrest. Bishop Morivan, an ambitious churchman in the capital, has marked him as a heretic in waiting and is gathering evidence. The greedier regional lords find his charity an obstacle to squeezing the villages. And a grain merchant named Solon, who has done well out of scarcity, hates him for spoiling the desperation that makes the poor easy to exploit.

## Plot Hooks

1. **The Hidden Cache Discovered** — Soldiers on a routine audit find one of the grain caches, and with it proof that Émmanîôs has been taking from Temple stores and giving it away. The hierarchy demands his arrest; his villages threaten to resist with arms. Flight, submission, or open rebellion against Temple and empire both.
2. **The Plague From the Capital** — A sickness comes into the circuit with the merchant caravans and runs through a population that has nothing left to fight it with. Émmanîôs sees that it is no natural fever but something cultivated — a weapon of the Harad independence forces, meant to break what remains of Vylaria's heartland. He has to answer it with resources and authority far beyond a circuit priest's, and keep the cause secret, because panic would finish what the fever started.
3. **The Radical Ultimatum** — The Gathering shows its face: a network working to found communities independent of Temple and empire alike. They want him as the spiritual head of the movement and will give him stores and protection — if he breaks with the Church for good. His villages would follow him. Everything he has built inside the structure would be gone.
4. **The Heir Apparent** — A brilliant young woman from one of his villages shows a gift for the priestly work and for the quieter organising he has been doing. She asks him to train her to take the circuit, which would free him for something larger. He knows that the moment he steps out of the daily work of the villages he is in the political fight he has spent years avoiding.
5. **The Imperial Inspection** — A new imperial auditor, bent on reforming Vylaria's administration, arrives in Valdosta and begins at once on the Temple's stores and charities. She is neither corrupt nor sympathetic; she wants to know where the grain goes. Her inquiry can expose his whole network — or make her an ally, if he can convince her the present order is failing and only a radical rebuilding will hold.
