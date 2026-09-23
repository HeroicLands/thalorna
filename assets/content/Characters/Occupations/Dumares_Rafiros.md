---
tags:
  - todo
  - draft
  - clergy
  - character
name:
  full: Dûmàrês Râfîrôs
  title: ""
  given: Dûmàrês
  clan: Râfîrôs
  home: korinthea2
  aliases:
    - Sérolan Cedric Lightbringer
packFolder: helladhelionis
shortcode: dumarsrfrs
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Priest
  stations: []
  lore:
    - helioniteclt
    - landedlordrnk
  homes:
    - helionis
  affiliations:
    - korinthea
  gender: male
  species: null
  age: 40
  birthday: 684/6/12
  height: 1.75
  weight: 72
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: dark_brown
    skin_color: medium
    complexion: tanned
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 13 } }
    - { model: affiliation-janus }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-eng, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 39 } }
    - { model: skill-helnkscrpt, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-acro, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-cmcs, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-lock, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 16 } }
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

Dûmàrês Râfîrôs is a 40-year-old man who stands 5'9" tall and is of moderate build. He has a diamond face with angular cheekbones, a high forehead, and a sharp jaw that leads to a square chin. His wide-set hazel eyes sit beneath straight brows, lending him an open gaze. A prominent nose and expressive lips complete his features. He has medium-toned skin with a sun-tanned complexion. His dark brown hair is combed neatly to one side.

Everything about Dûmàrês speaks of careful cultivation. His bearing is almost impossibly upright, shoulders back, chin raised in what might be described as noble repose—or, less charitably, chronic condescension. His hands are long-fingered and strong, the hands of a swordsman, yet they gesture with practiced grace when he speaks, as though each motion has been rehearsed to emphasize a point. His attractive face—almost startlingly so—seems designed to inspire confidence and aspiration. He is the kind of man people want to follow, at least until they have been scorched by his judgment.

# Dossier {#dossier}

Dûmàrês Râfîrôs was born into one of [[place-korinthea2|Korinthea]]'s most prestigious noble houses, a family whose name appears in the city's civic records dating back centuries. His ascent into the priesthood of Jánus followed the path marked for a second son of notable lineage: at fourteen, marked as intellectually gifted but temperamentally unsuited for military service, he was offered to the Temple as a candidate for high office. The priests of Jánus recognized immediately what his tutors had identified: a young man of rare eloquence and natural authority, possessed of genuine conviction about the nature of justice and honor.

His education in the Temple proved transformative. Dûmàrês excelled in theological debate, mastered the complex jurisprudence that Jánus priests must understand to serve as judges and arbiters, and trained with such ferocity in martial arts that he became a danger with both rapier and ceremonial blade. More importantly, he embraced the ideals of Jánus with an almost zealous purity—the god's emphasis on honorable struggle, on the strong defending the weak, on contracts honored and oaths sworn before divine witness. Dûmàrês internalized these principles not as abstract philosophy but as living truth, a moral architecture upon which to build his life.

By his early thirties, Dûmàrês had become one of the Temple's chief judges, settling disputes between merchants and nobility alike, and serving as the ceremonial commander of the Temple's guard-knights. His record of judgment was swift and decisive, his duels during honor-trials famous throughout Korinthea. He began to participate in the great tournaments—not merely as a priest seeking martial excellence, but as a fundraiser for the Temple's charity works. That Dûmàrês was invariably victorious in these competitions, and that substantial amounts of tournament prize money made their way into the Temple's coffers, only increased his prestige.

Now at forty, Dûmàrês stands at the apex of secular influence for a priest of his age. He is consulted by the Council of Korinthea on matters of law and civic honor. He has established the Refuge of Jánus, an institution purportedly devoted to sheltering refugees and victims of injustice. He is spoken of as a future High Priest, perhaps even as an eventual Patriarch of the broader Helionite priestly establishment. His charisma and eloquence are nearly legendary; people listen to him with the attention usually reserved for philosophers and oracles.

Yet there are cracks in this gleaming facade. Those who work closely with Dûmàrês—his younger priests, the scribes in his chambers, the refuge workers—describe a man of brilliant conviction but limited empathy. He judges the poor harshly, always finding moral failing beneath the surface of material deprivation. He establishes rules in his refuge and pursues them rigidly, content if 80% of his charges emerge "reformed" by his standards, indifferent to those who remain broken. He is capable of extraordinary kindness toward those he considers worthy—fellow nobles, persons of learning, those who share his intellectual framework—and shocking coldness toward those he judges insufficient. The charitable works he champions are genuine, but they carry an edge of condescension, a sense that those he helps are elevated by his notice rather than elevated by their own inherent worth.

## Psyche

Dûmàrês genuinely believes in the ideals of Jánus. This is not mere lip service or political positioning; his commitment to justice, to the protection of the weak, to the sanctity of oaths is absolute. He would sacrifice personal wealth, comfort, and even life itself to uphold these principles against truly malign forces. He sees himself as an instrument of cosmic order, a mortal enforcer of the divine law that holds civilization together.

His fatal flaw is that this belief in universal principles has rendered him insensitive to particularity. He sees categories—the honorable, the dishonorable, the weak deserving protection, the weak culpable for their own weakness—rather than individual human beings with circumstances he cannot fully comprehend. When confronted with suffering that does not fit his framework, his response is to force-fit it: the starving woman must have squandered her inheritance; the crippled beggar must have wasted his youth; the child thief must be inherently criminal. He is not cruel by design, but his low empathy (9, in "Remote" range) means he cannot instinctively feel the weight of suffering he does not personally understand.

This blindness extends to his understanding of his own privilege. Dûmàrês was born into a world where his needs were always met, where doors opened for him, where his words carried weight. He has worked exceptionally hard—his martial prowess is genuine, his judicial acumen real, his spiritual commitment authentic—and he interprets this to mean that effort guarantees success for all. Those who fail, in his view, have failed in effort or character.

What drives Dûmàrês is a hunger for a very specific kind of admiration: the recognition that he is an exemplary man, that he embodies the highest ideals of civilization, that he is worthy of emulation. He pursues his charitable work partly from genuine moral conviction, but partly also from the knowledge that such work polishes his reputation into something almost divine. His greatest fear is not failure but irrelevance—the possibility that the world might discover that his elaborate architecture of justice and honor is built on a foundation of indifference.

Yet there is something human and even sympathetic in his construction. He is not malicious; he is trapped in a form of moral blindness that seems nearly incurable given his temperament and station. And underneath the aristocratic assurance, there is a man who genuinely wants to be what he claims to be: an agent of divine justice in a chaotic world.

## Social

Dûmàrês holds the rank of High Judge of the Temple of Jánus in Korinthea, a position of immense authority and prestige. He reports nominally to the Temple's Patriarch but exercises near-total autonomy in judicial and civic matters. The Temple itself operates as a de facto court system in Korinthea, and Dûmàrês's judgment is final in most disputes.

His social standing among the Helionite nobility is extraordinarily high. He is invited to every important council meeting, consulted on matters of civic honor, and treated with the deference usually reserved for the truly ancient. His word carries weight in ways that transcend his official position; when Dûmàrês speaks, Korinthea's elite listen.

Yet there is a peculiar quality to this respect. It is tinged with something akin to fear. Dûmàrês's reputation for honoring oaths also carries with it a reputation for inexorable judgment. No one wishes to be on the wrong side of his determination about what honor requires. As a result, many of the most powerful figures in Korinthea maintain a careful distance, relating to him with formal courtesy rather than genuine warmth.

Among the common people, his reputation is complicated. He is known as the judge who came from poverty—though this is partially false; his family was always comfortable—who champions the weak. But he is also known as the judge whose verdicts are harsh, who shows little mercy for those he judges morally deficient. The Refuge of Jánus, for all its genuine good work, is also known as the place where the weak are "reformed" according to Dûmàrês's rigorous standards.

## Companions

**Patrons:** Dûmàrês's primary patrons are the high nobility of Korinthea, particularly the merchant princes who have much to gain from his fair but firm interpretation of commercial law. Specifically, he maintains close relationships with Archon Therion of the Council of Korinthea (his primary political support), and with his own biological family, particularly his elder brother Aristides, who holds considerable influence in the Council. The Temple Patriarch, ancient Theodoros, relies heavily on Dûmàrês and has indicated that he may be groomed as successor.

**Enemies:** Dûmàrês's primary adversary is Father Malachi of the Temple's Western Chapter, a much older priest who views Dûmàrês's innovations in charitable work and civic law as corruptions of Jánus's warrior-nature and who actively schemes against Dûmàrês's advancement. More personally dangerous is Ekaterina, a woman from Dûmàrês's past—the daughter of a merchant house that he once ruled against in a legal dispute. Her father died in poverty, and Ekaterina has spent twenty years building a network specifically designed to expose Dûmàrês's blindness and bring down his reputation. The Black Flame (god of domination and strength), which Jánus opposes, maintains a shadowy priesthood in Korinthea that sees Dûmàrês as a direct spiritual opponent and seeks to undermine his authority.

## Plot Hooks

1. **The Judgment That Cannot Be Rendered** — A case lands in Dûmàrês's court that destroys his careful framework: a mother who stole bread to feed her children, but also stole a merchant's copper from his counting house in the process. By Dûmàrês's own laws, she should be sentenced harshly for theft; by Jánus's principles of compassion for the weak, she should be freed. The case becomes public, attracts attention from the Council, and threatens to expose the brittleness of his moral philosophy. Worse, Ekaterina has orchestrated the trial specifically to create this impossible choice.

2. **The Refuge Crisis** — One of Dûmàrês's reformed charges, a young woman he personally took under his wing, commits a serious crime while attempting to use her "reformed" status as a shield. When the crime comes to light, it suggests not only that Dûmàrês's judgments were wrong, but that his faith in his ability to judge human character is profoundly misplaced. The incident threatens to unravel his entire charitable enterprise and expose the coldness at its heart.

3. **The Heretic Scholar** — An itinerant scholar arrives in Korinthea and begins to publicly debate Dûmàrês's interpretation of Jánus's teachings, arguing that Dûmàrês has twisted honor into a tool of oppression and that true chivalry requires radical compassion rather than rigid justice. The scholar draws followers, and the philosophical debate threatens to become a genuine schism. Dûmàrês must either refute the scholar intellectually (difficult, as some of the scholar's points strike close to uncomfortable truths) or suppress the heresy (a path that would compromise his own principles).

4. **Family Betrayal** — Dûmàrês's brother Aristides becomes involved in a commercial scheme that borders on fraud, and asks Dûmàrês to use his judicial authority to ensure that any investigation is squashed or finds in his favor. Dûmàrês's refusal to use his position in this way creates a permanent breach with his family and threatens his standing in the Council, as Aristides possesses significant influence and bears a grudge. The conflict forces Dûmàrês to publicly choose between family loyalty and principle.

5. **The Unwelcome Successor** — Patriarch Theodoros, growing old, indicates privately that he wishes Dûmàrês to succeed him—but only if Dûmàrês can demonstrate genuine growth in his capacity for compassion. The Patriarch assigns Dûmàrês to live among the poorest quarter of Korinthea for a season, serving as a simple healing priest rather than a judge. The assignment is meant to be transformative, but it becomes instead a confrontation with the depths of Dûmàrês's empathy deficit. His efforts to help are often cruel despite his intentions, and he finds himself despised by those he meant to aid. He must either surrender the dream of becoming Patriarch or become, fundamentally, a different man.
