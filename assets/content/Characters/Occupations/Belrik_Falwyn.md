---
tags:
  - draft
  - guilded
  - mages
  - character
name:
  full: Bélrik Fálwyn
  title: ""
  given: Bélrik
  clan: Fálwyn
  home: liranel
  aliases:
    - Aldric Fallow
packFolder: aureldiaelavendre
shortcode: belrkflwyn
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Alchemist
  stations: []
  lore:
    - elavendriclt
    - commonerrnk
  homes:
    - elavendre
  affiliations:
    - kngdmlvndr
  gender: male
  species: null
  age: 43
  born: 677/4/15
  height: 1.63
  weight: 58
  frame: medium
  appearance:
    eye_color: violet
    hair_color: black
    skin_color: fair
    complexion: pale
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-menerva }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 32 } }
    - { model: skill-thrvrdhscrpt, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-mnrl, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-slng, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-mysticalability-alch, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 26 } }
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

Bélrik is a lean man of unremarkable height, yet his appearance commands attention for all the wrong reasons. His pale skin hangs slightly loose on a medium frame, marked with faint discolorations where alchemical reagents have stained his flesh. Most striking are his violet eyes—an unsettling shade that dominates an otherwise plain, scarred face; according to those who knew him in his youth, they were once brown. His black hair is pulled back in a practical low tail, often wrapped with cord soaked in herbal preparations. He habitually wears a leather apron stained with the residue of a thousand experiments, and his hands bear the calluses and minor burns of someone who works routinely with dangerous substances.

# Dossier {#dossier}

Bélrik Fálwyn was born in [[place-liranel|Liranel]], a forest town deep within [[place-elavendre|Élavendre]], to a minor but respected guilded family with roots reaching back to the Áelendan tribal settlements of the interior. His father was a cloth-merchant; his mother claimed descent from the mountain communities and knew the old herb-lores intimately. From her, Bélrik learned the fundamentals—not from any formal academy, but from forest walks and kitchen experiments, the way knowledge has always moved through Élavendre's winding glens.

Bélrik was seventeen when the Bardic Circle's archivists came to Liranel seeking to catalog old manuscripts. Among them was **Senedd ap Gwynedd**, a sharp-tongued scholar who marked him at once as someone worth teaching. Senedd recognized in the boy a mind sharp enough to cut glass and a curiosity that bordered on dangerous. Over five years, she taught him script, mathematics, and the deeper folklore—the true stories, not the sanitized versions the Grove Council permitted for public consumption. She also taught him something else: that knowledge itself has no morality, only consequences, and that the prettiest lies are the ones told by those with power.

When Senedd moved on to [[place-beravel|Béravel]] and the heart of the Bardic Circle's archives, Bélrik remained in Liranel. But he did not remain idle. He began seeking out the Grove Council's forbidden specimens—the plants that grew only in fae-touched groves, the fungi that bloomed in places marked with ancient stones, the rare minerals found near Áelendi sacred sites. His mother, who might have stopped him, died in 699/8—a wasting sickness that neither herbalism nor the Grove Council's singers could cure. Her death crystallized something in him: a conviction that the traditional safeguards and restrictions were merely excuses for accepting powerlessness.

His alchemy owes nothing to the rigid, bureaucratic art of [[affiliation-ordoarcanis|the Ordo Arcanis]]; it flows from Élavendre's deeper currents. He studies druidic herbalism but rejects its reverence for balance. He understands the fae-touched places but approaches them as a scavenger, not a supplicant. His recipes combine the old mountain knowledge with something harsher, more cutting. His violet eyes are explained in Liranel either as the price the fae demanded for his trespasses or as a dose he gave himself deliberately, seeking to touch something beyond human perception.

By his early thirties, Bélrik had earned a reputation in Liranel and the surrounding forest settlements: he could brew potions and distillations that produced results. A tincture that steadied a trembling hand. Elixirs that brought clarity to a clouded mind. But also darker wares, whispered about rather than named—substances that loosened the tongue, sharpened desire, or opened consciousness to visions that left the user changed. He is exact, even brilliant, in his work. He is also entirely pragmatic about whom he sells to and at what cost.

Around this same time, Bélrik adopted the alias **Aldric Fallow**. The name serves him in two arenas. Within Élavendre, it shields him from the attention of the Ordo Arcanis, whose University of Béravel and Sodalitas chapterhouses dominate the capital's intellectual life; an unlicensed alchemist operating with fae-touched materials would draw immediate Quaesitorium scrutiny if connected to his real name. Beyond Élavendre's borders—in [[place-aelwyth|Aelwyth]] and [[affiliation-kingdmdnvr|Dúnavarre]], where the Ordo's grip is tighter still—Aldric Fallow is a useful fiction: a traveling herbalist of no fixed address, useful to nobles seeking discreet remedies, scholars wanting samples of rare substances, and merchants with discreet sources of supply. The work is as lucrative as it is dangerous.

Now at forty-three, Bélrik exists in a complicated equilibrium. He maintains his legitimate practice in Liranel, where he is respected—cautiously—for his knowledge and results. He supplies the Grove Council with certain ingredients they request (though he is careful never to ask their purposes), and he entertains occasional patronage from Bardic Circle scholars like Senedd, who value his insights into old folklore. Alongside this runs a parallel network: Aldric Fallow's clientele, the shadow-traders, the desperate, the ambitious. He cultivates an air of mystery about his sources, and he has become skilled at playing one potential patron against another, never quite committing, always maintaining leverage.

His conscience, such as it is, operates within a narrow band. He will not poison a child, nor will he deliberately devastate a sacred grove—not because of morality, but because such acts invite retaliation from forces more powerful than himself. Everything else, he has learned, is negotiable.

## Psyche

Bélrik possesses a brilliant analytical mind, the kind that can hold complex herb-lore and mathematical precision in the same thought. His reasoning is sharp enough to cut through flattery and deception—he sees the world as a system of pressures and incentives, and he is typically three steps ahead of those trying to manipulate him. Yet this same clarity of vision has a cost: he feels little for anyone. Others are primarily variables in his calculations, useful or not, positioned on a spectrum between assets and obstacles.

His unscrupulous nature is not the theatrical evil of a villain in a bard's tale. It is quieter, more insidious—the reasoned pragmatism of someone who has decided that the old rules were written by people more cautious than himself. He believes he is smarter than the Grove Council's restrictions, more perceptive than the Bardic Circle's moral posturing, less deluded than those who trust in fae goodwill or natural balance. He is probably right about some of these things. This certainty is both his strength and his greatest vulnerability.

What saves him from being merely contemptible is his real passion for knowledge and his craftsmanship. He takes pride in his work. A tincture made by Bélrik is precise, powerful, and will do exactly what it claims. His lies are told with precision, his promises kept unless circumstances render them impossible, his word to a formal patron honored—not from virtue, but from understanding that reputation is capital. He is, in his way, a man of his trade.

## Social

In Élavendre proper, Bélrik occupies the position of a respected if slightly suspicious craftsman—a member of the guilded class whose special knowledge is valuable enough to warrant continued tolerance despite his obvious moral flexibility. The Grove Council watches him, certainly, and there are elders who have debated whether his trespasses in sacred groves warrant intervention. But he has not yet crossed the line into open violation of their authority, and in Élavendre's careful balance of powers, that matters. The Bardic Circle knows of him—particularly through Senedd—and sees him as a source of information about the real thoughts and desires of Liranel's people, a useful if morally ambiguous informant.

His legitimacy rests on three pillars: his results, his careful obedience to the letter (if not the spirit) of Grove Council restrictions, and his exploitation of a gap in how magic is governed in Élavendre. In Béravel and the larger towns, the Ordo Arcanis holds considerable sway through the University and its chapterhouses—but in the forest settlements like Liranel, the Ordo's writ carries little practical weight. The druidic arts are conservative by necessity—they must preserve balance. Bardic magic is subtle and tied to language and history. The Ordo's scholars study magic through rigid theory that struggles with the fae-touched chaos of Élavendre's interior. Bélrik offers something different: alchemy that speaks in the language of raw power and direct effect, rooted in the old traditions but unbound by their reverence. This makes him indispensable to certain circles—and puts him at odds with all three of the powers that claim authority over magic in this kingdom.

As Aldric Fallow, he operates entirely outside such structures, answerable to no one but the code of commerce and mutual interest. This freedom is intoxicating—it is also precarious.

## Companions

### Patrons and Allies

**Senedd ap Gwynedd**—Now in her early seventies, Senedd remains one of the archivists of the Bardic Circle in Béravel. She was Bélrik's teacher and remains perhaps his only true intellectual peer and closest thing to a friend. Their correspondence is sporadic but affectionate in its way; she supplies him with rare texts and references, and he provides her with specimens and observations she could not access otherwise. The Circle does not formally know of their relationship, though certain members suspect it. Senedd would deny it if asked, but she also would not allow Bélrik to be destroyed—at least not without cause that rose above the level of moral disapproval.

**Caldor**—A half-fae merchant from the Liranel borderlands who handles much of Aldric Fallow's cross-border trade. Caldor asks few questions, accepts unusual payment, and possesses an uncanny ability to move goods and people where they need to go. The relationship is purely transactional, but reliable. Bélrik suspects Caldor may be significantly older than he appears and possibly bound to something in the Unseen—the fae-touched territories—but this is never mentioned aloud.

**Lady Eadrun of Cardeth**—A young noblewoman with Áelendan ancestry who has begun seeking Bélrik out for discrete remedies. She is intelligent, ambitious, and shares his pragmatism about the gap between public virtue and private necessity. This patronage has become important to him, though he recognizes it as potentially dangerous: noble favor can be withdrawn as quickly as it is granted, and she may be testing his loyalty for the Bardic Circle.

### Enemies and Threats

**Torven Wyndes**—An elder of the Grove Council, approximately Bélrik's age, who has made it his personal mission to monitor Bélrik's activities. Torven is one of the few people who understands both that Bélrik is dangerous and that direct suppression would be politically costly. Their conflict is therefore conducted through innuendo, carefully placed pressure on Bélrik's suppliers, and the quiet discouragement of his patronage. They have never directly spoken, but both understand they are adversaries. Torven would eliminate Bélrik without hesitation if circumstances permitted it.

**[[affiliation-alndnwrdns|The Áelendan Wardens]]**—A loose confederation of guardians from the mountain communities who regard Bélrik as a grave transgressor. They have caught him trespassing in sacred groves twice, and he has managed to talk or negotiate his way free both times. The next encounter may not go as smoothly. The eldest of the Wardens, a woman named **Seonaid**, has begun leaving warnings in places she knows he frequents—physical markers, carved signs in an old script. The message is clear: continue, and the consequences will escalate.

## Plot Hooks

1. **The Sacred Grove's Shadow**—Bélrik has located a specimen he has been seeking for years: a plant that grows only in places where the fae veil runs thin, something that might truly extend life or consciousness beyond normal human limits. The problem: the Grove Council has explicitly forbidden any harvesting from this location. The secondary problem: Seonaid and the Áelendan Wardens have set a watch. The question becomes whether the knowledge is worth the almost-certain confrontation—and whether Bélrik can find a third path that avoids both detection and direct violence.

2. **Aldric Fallow's Creditors**—A shipment from Caldor has been intercepted by Dúnavarren customs authorities, and among the seized goods are bottles bearing Aldric Fallow's careful labeling. The Ordo Arcanis has noticed. Discreet inquiries are being made. Bélrik can distance himself from Aldric Fallow entirely, call in favors from surprising quarters to suppress the investigation, or attempt something far riskier: seeing that the evidence disappears before the Ordo can examine it closely.

3. **The Circle's Bargain**—Senedd approaches Bélrik with an unusual proposition. The Bardic Circle needs information about a fae incursion in the borderlands near Liranel—not the routine thin-veil encounters, but something organized, something with purpose. Senedd cannot investigate directly without raising questions. Bélrik, with his network and his willingness to venture into places the Circle cannot, would be the perfect agent. But the task requires him to trust the Circle's intentions, which goes against every instinct he possesses.

4. **Violet Eyes, Violet Price**—A stranger arrives in Liranel seeking Bélrik out, someone with violet eyes who claims to have undergone similar alchemical alteration. They speak of others like them, a network, a conspiracy. Are they offering alliance or threat? The conversation unsettles Bélrik in a way few things do—the possibility that his changes were not accidental, that forces beyond his understanding have been moving him toward something his entire life.

5. **Lady Eadrun's Ascending**—Lady Eadrun's position within the Bardic Circle has strengthened, and she is now positioned to eventually inherit significant influence. She proposes to Bélrik that they formalize their relationship: he becomes her private alchemist, her source of discrete advantage, her key to holding power as the kingdom's politics shift. The arrangement offers security and resources beyond his current reach. But it also means binding himself to her fortunes entirely, and should she fall from favor, he falls with her—and anyone she knows to be her confidant becomes suspect.
