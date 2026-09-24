---
tags:
  - todo
  - draft
  - clergy
  - character
name:
  full: Dháran Véldarin
  title: ""
  given: Dháran
  clan: Véldarin
  home: elanmere
  aliases:
    - Viriâhn Roderick Flamebearer
packFolder: aureldiaelavendre
shortcode: dharnvldrn
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Priest
  stations: []
  lore:
    - elavendriclt
    - landedlordrnk
  homes:
    - elavendre
  affiliations:
    - kngdmlvndr
  gender: male
  species: null
  born: 679/4/17
  height: 1.91
  weight: 88
  frame: heavy
  appearance:
    eye_color: gray
    hair_color: auburn
    skin_color: pale
    complexion: smooth
    extra_features:
      - >-
        a brand of the Black Flame scarred into the skin above the heart, always concealed beneath
        clothing
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 14 } }
    - { model: affiliation-blackflame }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 18 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 75 } }
    - { model: skill-thrvrdhscrpt, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 38 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 25 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 72 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-mysticalability-summ, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 14 } }
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

Dháran Véldarin is a 45-year-old man who stands 6'3" tall and is broad and solidly built, the kind of frame earned through years of drill and hard riding rather than careful diet. He has a diamond face with defined cheekbones, a lined forehead, and a rounded jaw that leads to a blunt chin. His piercing gray eyes sit beneath heavy brows, and he has the steady, appraising stare of a man accustomed to sizing people up quickly. A nose broken and set at least once and firm, unyielding lips complete his features. He has pale skin, weathered from years spent on patrol in all seasons. His auburn hair is cropped short in military fashion. He wears a mail shirt under a surcoat bearing the Elanmere Wardens' sigil as a matter of course, and carries his warhammer as naturally as other men carry a walking stick. Beneath his mail, above his heart, the brand of the Black Flame is scarred into his skin—the one secret his armor always covers.

# Dossier {#dossier}

Dháran Véldarin was born to House Véldarin, a minor noble family of the Élavendri with a long tradition of military service along the kingdom's borders. His father commanded a garrison; his grandfather died fighting border raiders. The expectation was always that Dháran would follow the sword, and he took to it with an aptitude that surprised no one. He was strong, aggressive, and possessed of the kind of commanding presence that makes other men fall in line without quite knowing why.

He was sent to train with the border garrisons at sixteen, and by twenty he had distinguished himself well enough to earn a commission. But it was during those early years of service that the seeds of his true allegiance were planted. Stationed at a frontier post, Dháran saw firsthand how the kingdom's enemies—raiders, bandits, the occasional warband from less civilized lands—respected nothing but force. He watched the Bardic Circle send emissaries to negotiate with men who understood only the blade, watched the Grove Council debate proper responses while villages burned. The Élavendri way of wisdom and contemplation struck him not as noble but as a form of cowardice—beautiful ideas held by people too weak to do what strength demanded.

A sellsword captain passing through the garrison spoke openly of [[affiliation-blackflame|The Black Flame]] around the campfire one night. Not recruiting—just talking, the way soldiers talk about what they believe when the wine is flowing and the fire is low. But what he said hit Dháran like a blow: that mercy without strength is surrender, that the world belongs to those willing to seize it, that fire does not ask permission to burn. Dháran sought the man out privately the next morning. Within a year, he had traveled beyond Élavendre's borders during a leave of absence, received the brand, and been ordained as a priest of the Black Flame.

He returned to his post and continued to serve. He served well. That was the point.

Over the following two decades, Dháran rose through the ranks of the Elanmere Wardens—the military force responsible for maintaining order in the region around Elanmere and patrolling the surrounding wilderness. He earned his captaincy through genuine competence: he is a formidable fighter, a decisive commander, and his men respect him because he leads from the front and does not ask them to do anything he would not do himself. None of this is pretense. Dháran is, by any honest measure, a capable and effective military officer.

He has also, by any honest measure, reached his ceiling.

The Élavendri are a people who prize eloquence, artistic sensibility, and a certain grace of manner. Nobody expects a soldier to be a courtier—the kingdom has always needed men who can swing a warhammer as much as men who can compose verse—but officers who wish to advance beyond a certain rank must demonstrate that they can navigate the political landscape as well as the physical one. Dháran possesses none of these qualities and makes only a token effort to express them. He attends the functions he is expected to attend. He says the correct things, mostly, in the correct order. But the effort is transparent; the courtesies sit on him like borrowed clothing, and everyone in the room can see it. He is not rude so much as visibly uncomfortable with the performance, and in Élavendri society, where grace is valued as highly as competence, that discomfort reads as a kind of deficiency.

He has been reprimanded on several occasions—once for excessive force during a questioning that left the suspect unable to stand for his own trial, once for a curt exchange with a Bardic Circle envoy that crossed the line from blunt into discourteous. Each time, his record saved him from real consequence. The Wardens under his command catch more bandits, recover more stolen goods, and maintain better order in their territory than any comparable unit in the region. His superiors value what he does. They simply cannot see a path to entrusting him with more.

He reached the rank of captain eight years ago and will rise no further. Everyone involved understands this without it needing to be said. The regional commander has passed him over for promotion twice, citing concerns about "readiness for broader responsibilities"—the kind of diplomatic language that means one thing and says another, which is itself an example of the very skill Dháran lacks. He is not disliked, exactly. He is respected for his effectiveness and valued for his results. But he is not consulted on matters that require diplomacy, and the feasts where policy is discussed tend to happen on evenings when he has not been invited.

Dháran tells himself this does not bother him—that the approval of men and women who have never drawn blood means nothing. This is not entirely true. The ceiling on his career is a quiet, persistent reminder that Élavendri society will never fully accept what he is, and it feeds the very contempt for that society that put him on the Black Flame's path in the first place. The cycle is self-reinforcing and he does not see it.

He is also a priest of a proscribed faith who uses his position to shield a network of dangerous men and women from the consequences of their devotion.

His followers are violent, committed believers—ex-soldiers, mercenaries, enforcers, and hard men from the frontier—who conduct rites of fire and dominance in the deep forest and who have, on more than one occasion, left bodies behind. Dháran does not restrain them so much as direct them. When the Grove Council or the Bardic Circle receives reports of Black Flame activity in the region, it is the Wardens who are tasked with investigating. And it is Captain Véldarin who leads those investigations.

He is very good at not finding anything.

Witness testimony gets garbled in his reports. Physical evidence—charred ritual circles, branded corpses, scorched offerings—is attributed to bandits, wildfires, or animal predation. Investigations stall, witnesses recant or disappear, and the reports that reach the authorities in Elanmere conclude that the rumors of Black Flame activity are exaggerated, the work of superstitious peasants. When a follower does something too blatant to bury, Dháran has been known to find a convenient scapegoat—a drifter, a madman, once a genuinely unrelated criminal who happened to be in the wrong place—and deliver them to justice with great ceremony, closing the case.

Under the alias Viriâhn Roderick Flamebearer, he leads the rites himself. There is no separation between the man who commands the Wardens by day and the man who stands before the sacred fire by night. The warhammer he carries on patrol is the same one he raises in invocation. His sermons are not whispered—they are bellowed, fierce and physical, delivered with the same force he uses to rally his soldiers before a fight. His followers do not cower before him; they are emboldened by him. He preaches that the strong should rule, and then he demonstrates it, every day, in both of his lives.

## Psyche

### Personality

Dháran is direct, forceful, and impatient with inefficiency. He does not pretend to be something he is not—he simply omits the part of himself that would get him killed. As Captain Véldarin, he is exactly the man he appears to be: hard, competent, demanding, respected by his troops. He pays lip service to the social graces expected of an Élavendri officer—he attends the right gatherings, makes the right noises, observes the forms—but it is plainly not natural to him, and no one is fooled. He is a soldier doing his best impression of a gentleman, and the impression is merely adequate. This is, paradoxically, what makes him so effective as a cover. No one suspects a man whose limitations are so visible of concealing anything more interesting than a lack of refinement. The idea that Captain Véldarin might harbor a secret devotion seems faintly absurd—the man can barely manage a toast at a formal dinner without sounding like he is addressing a formation. That is his greatest deception.

He has a soldier's dark humor and a commanding officer's instinct for loyalty. He rewards those who serve him well and punishes failure harshly but not capriciously. He inspires devotion in his men, both the Wardens who serve him openly and the Black Flame faithful who serve him in secret, because he embodies the philosophy he preaches: strength earns authority, and authority must be exercised or it means nothing.

What he lacks is a sense of proportion in the application of force, and the political awareness to understand when that matters. He views compassion as a luxury that the frontier cannot afford, and he does not always recognize when he has crossed the line from firm into excessive. He does not set out to brutalize—he is not gratuitously cruel—but he solves problems with the tools he understands best, and those tools leave marks. His superiors know this about him. They accept it as the cost of his effectiveness, but it is the reason his career has stalled, and on some level he knows it.

### Motivation

Dháran believes the Black Flame's philosophy is simply the truth that civilized people are too comfortable to admit. The strong rule. The weak serve or die. Fire purifies. Everything else is decoration. He does not seek to destroy Élavendre so much as to burn away what he sees as its rot—the endless deliberation, the reverence for tradition over action, the assumption that beauty and wisdom are substitutes for strength. He wants to see a kingdom that fights for what it has instead of assuming the old ways will protect it forever.

More immediately, he wants to build the Black Flame's power in Élavendre to the point where it can operate openly—not through some patient multi-generational plan, but because his people are strong enough and numerous enough that the authorities cannot afford to move against them. He is not interested in waiting for a perfect moment. He is interested in making his side too powerful to be denied.

### Strengths

Dháran is a genuinely dangerous fighter—strong, heavily built, skilled with his warhammer, and experienced from years of real combat on the frontier. His command skill is extraordinary; men follow him because he projects absolute certainty and backs it up with action. His position as Captain of the Wardens gives him direct control over the very apparatus that would be used to hunt his followers, making him almost impossible to catch through normal channels. He knows the terrain around Elanmere intimately, controls the patrol routes, and has final say over which reports reach the authorities and what they contain. He is also a powerful ritual leader—his iron will and booming voice make his ceremonies viscerally compelling, and his followers would die for him without hesitation.

### Weaknesses

Dháran's core limitation is that he cannot operate effectively outside his element. He is excellent at command, at frontier justice, at leading men in the field—but anything requiring political navigation, diplomatic nuance, or social performance exposes the gap between what he is and what Élavendri society expects of its leaders. This gap is not dramatic enough to make him a pariah, but it is persistent enough to cap his advancement and to ensure that sensitive matters are routed around him rather than through him. He is aware of this dynamic in a general way but attributes it to the softness of the culture rather than to any deficiency in himself.

His private contempt for the Élavendri way of life blinds him to its real strengths. The Grove Council and the Bardic Circle have survived for millennia precisely because they are more resilient than he gives them credit for, and the quiet social networks of the nobility are far more perceptive than he assumes. He underestimates how much people notice and remember in a society built on relationships and reputation.

He also has a growing problem with his own people: the more violent and emboldened his followers become, the harder it is to contain the evidence, and he is beginning to run out of convenient scapegoats. His followers see his stalled career as proof that the system is rotten, which emboldens them further—a feedback loop he has encouraged but may not be able to control. Finally, his low empathy makes him a poor judge of loyalty. He assumes everyone is motivated by strength and ambition, which means he cannot see betrayal coming from someone motivated by conscience.

## Social

Dháran occupies a position of real but circumscribed authority in the Elanmere region. As Captain of the Wardens, he commands roughly forty soldiers and is responsible for law enforcement, border security, and investigation of criminal and heretical activity across a wide rural territory. His operational record is excellent. His social reputation is more complicated.

Among the nobility, he is respected for his competence but not sought out for his company. He is the kind of officer who gets a polite nod at a gathering and then finds that conversations have moved on without him. The stories about him—the suspect who could not stand for trial, the curt exchange with the Bardic envoy—are known, and while nobody considers them disqualifying for a man in his role, they color how he is perceived. He is regarded as someone who is good at a hard job and probably not suited for anything else. The Grove Council deals with him cordially but without warmth. The Bardic Circle is largely indifferent to him, which in a culture that values being noticed, is its own kind of judgment.

His own soldiers, by contrast, are fiercely loyal. They serve in a thankless post, dealing with bandits and border trouble that the rest of the kingdom prefers to ignore, and they follow a captain who shares every hardship and never asks more of them than he gives himself. This loyalty is genuine and it extends, in the case of several trusted men, into his other life. His Black Flame congregation numbers around a dozen hardened followers, plus a wider circle of sympathizers and informants who may not participate in rites but share the philosophy and provide information, shelter, or alibis when needed. Several of his followers are embedded in his own Warden company—soldiers who answer to him in both capacities and who see his stalled career as confirmation of everything the Black Flame teaches about the strong being held down by the timid.

## Companions

### Patrons

Within the Black Flame's hierarchy, Dháran reports to a senior priest operating out of a neighboring realm who coordinates the faith's covert presence across the region. This handler values Dháran's position highly—a Black Flame captain running the very force tasked with hunting the Black Flame is an asset beyond price. In his public life, Dháran has the backing of House Véldarin's military connections, modest but sufficient to maintain his commission. His family name still carries enough weight to shield him from the worst consequences of his reputation, though his father—retired and deeply traditional—has made it privately clear that the family's patience is not inexhaustible.

### Enemies

The most immediate threat comes from within the system. A young Warden lieutenant named Caelith has begun to notice discrepancies—investigations that go nowhere, reports that don't match what he saw on the ground, witnesses who change their stories after speaking privately with the captain. Caelith is not yet sure what he is looking at, but he is honest, stubborn, and increasingly troubled. If he takes his concerns to the Grove Council rather than up the chain of command, Dháran's control over the investigation process breaks down.

A druid named Aelineth, attached to a grove near several sites of Black Flame activity, has been conducting her own quiet inquiry into the burned shrines and scorched clearings that keep appearing in the forest. She does not trust the Wardens' explanations. She has not connected this to Dháran specifically, but she is thorough and has the institutional patience that he lacks.

## Plot Hooks

1. **The Honest Lieutenant**—Caelith has written a private letter to a Grove Council elder detailing the pattern of botched investigations under Dháran's command. The letter has not been sent yet—it sits in Caelith's quarters. Dháran has learned of its existence through a loyal Warden. He must decide how to handle a man who is both his subordinate and a genuine threat: destroy the letter, discredit Caelith, transfer him to a remote posting, or silence him permanently—each option carrying different risks.

2. **The Burned Grove**—One of Dháran's followers has killed a woodsman who stumbled onto a rite in progress and left the body at the edge of a sacred grove. The Grove Council is outraged and demanding a full investigation with an outside observer present. Dháran must lead the investigation convincingly while ensuring it points anywhere but at his people—and he must discipline the follower responsible without fracturing the group's loyalty.

3. **The Sellsword Company**—A mercenary band passing through the region includes several open adherents of the Black Flame, bold enough to wear the sigil in the borderlands. Their presence is drawing exactly the kind of attention Dháran cannot afford. The Grove Council expects Captain Véldarin to arrest them. His own followers expect him to recruit them. The mercenaries themselves answer to a different branch of the hierarchy and may not respect his authority.

4. **Aelineth's Map**—The druid Aelineth has been quietly mapping the locations of scorched sites, unusual fires, and reported Black Flame sightings across the region. The pattern, when viewed together, points directly at the areas Dháran's Wardens patrol most frequently. She has requested a meeting with the captain to share her findings and ask for his help interpreting them. He will be staring at a map of his own operations.

5. **The Reckoning Fire**—Word arrives from the hierarchy: a senior Black Flame priest is coming to Élavendre to personally assess Dháran's cell and determine whether the region is ready for escalation. The visitor expects to see strength, discipline, and a congregation prepared for open confrontation. Dháran must present his people at their most impressive while preventing the visitor from doing anything reckless enough to bring the full weight of Élavendri authority down on all of them.
