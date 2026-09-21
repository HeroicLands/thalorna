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
  birthday: 677/4/15
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

Bélrik is a lean man of unremarkable height, and people look at him anyway, for the wrong reasons. His pale skin hangs a little loose on a medium frame and is marked with faint discolourations where reagents have stained it. The eyes are violet — an unsettling shade in an otherwise plain, scarred face, and people who knew him as a boy say they were brown. His black hair is pulled back in a low tail, often bound with cord soaked in some herbal preparation. He wears a leather apron stained by a thousand experiments, and his hands carry the calluses and small burns of a man who handles dangerous substances every day.

# Dossier {#dossier}

A tincture from Bélrik Fálwyn does what he says it will do, which in Liranel is the whole of his reputation and most of his danger. He can brew the thing that steadies a shaking hand or clears a fogged mind; he can also brew what is talked about rather than named — the draught that loosens a tongue, the one that sharpens wanting, the one that opens a mind to visions it does not come back from unchanged. He is exact at the bench and indifferent about the buyer, and he prices accordingly.

Bélrik was born in Liranel, a forest town deep in Élavendre, to a small guilded family with roots in the Áelendan tribal settlements of the interior. His father sold cloth; his mother came of the mountain communities and knew the old herb-lore, and she taught it to him on forest walks and at the kitchen table, which is how knowledge has always travelled in Élavendre's glens. He was seventeen when the Bardic Circle's archivists came to Liranel to catalogue old manuscripts and one of them, **Senedd ap Gwynedd**, a sharp-tongued scholar with an eye for a mind, decided his was worth five years of her time. She taught him script, mathematics, and the folklore under the folklore — the stories the Grove Council does not license — and one other thing: that knowledge has no morality, only consequences, and that the prettiest lies are told by people with power.

When Senedd went on to Béravel and the Circle's central archives, Bélrik stayed, and began going where the Grove Council says nobody goes: the fae-touched groves, the fungus that blooms by the old marked stones, the minerals near the Áelendi sacred sites. His mother, who might have stopped him, died in 699/8 of a wasting sickness that neither her herbs nor the Council's singers could touch. After that he stopped believing the old safeguards were anything but a way of agreeing to be helpless.

His alchemy is not the Ordo Arcanis's, all rule and registry. It comes out of Élavendre's own ground: druidic herbalism without the reverence for balance, the fae places approached as a scavenger and not a supplicant, the mountain knowledge with something harder folded into it. Some in Liranel say the violet eyes are the price the fae took for his trespasses. Others say he dosed himself on purpose, reaching for something past ordinary sight. He does not say.

By his early thirties he had a name in Liranel and the forest settlements, and around then he took a second one: **Aldric Fallow**. Inside Élavendre the alias keeps the Ordo Arcanis — whose University of Béravel and Sodalitas chapterhouses own the capital's learning — from attaching an unlicensed alchemist working fae-touched materials to a real man; a Quaesitorium inquiry follows that connection at once. Outside Élavendre, in Aelwyth and Dúnavarre where the Ordo's grip is tighter, Aldric Fallow is a travelling herbalist of no fixed address, convenient to nobles who need a discreet remedy, scholars who want a rare sample, merchants who want a quiet supplier. It pays very well and it can get him killed.

Now, at forty-three, he keeps both lives in balance. Bélrik Fálwyn practises openly in Liranel and is respected there, warily; he supplies the Grove Council with certain ingredients it asks for and is careful never to ask why; scholars of the Bardic Circle, Senedd among them, pay him for what he knows of the old lore. Under that runs Aldric Fallow's trade — the shadow-traders, the desperate, the ambitious — and he keeps his sources vague and his patrons uncertain of one another, never committed to any, always holding something back.

His conscience operates in a narrow band. He will not poison a child and he will not lay waste to a sacred grove, and neither is a moral position: both bring down forces larger than he is. Everything else is a matter of price.

## Psyche

Bélrik has an analytical mind that can hold a herbal recipe and a calculation in the same thought, and it cuts through flattery and lies as easily as it cuts through a problem. He sees the world as pressures and incentives and is usually three moves ahead of anyone trying to use him. The cost of that clarity is that he barely feels other people; they are variables — useful, useless, in the way.

His lack of scruple is not the stage villainy of a bard's tale. It is quieter: the reasoning of a man who has concluded that the old rules were written by people more timid than himself. He thinks he is cleverer than the Grove Council's prohibitions, sharper than the Bardic Circle's moralising, less deluded than anyone who trusts fae goodwill or natural balance. He is probably right about some of it, and the certainty is both what makes him and what will one day undo him.

What keeps him from being merely contemptible is that he loves the work. A tincture from Bélrik is exact, strong, and does what it says. His lies are precise, his promises kept unless the world makes them impossible, his word to a formal patron honoured — because a reputation is capital, not because he is good. He is, in his way, a craftsman.

## Social

In Élavendre proper Bélrik is a respected and slightly suspect craftsman, a man of the guilded class whose knowledge is worth enough to buy tolerance for his obvious flexibility. The Grove Council watches him, and some of its elders have argued that his trespasses in the groves warrant action; he has not yet openly defied the Council's authority, and in Élavendre that line matters. The Bardic Circle knows of him, chiefly through Senedd, and treats him as a source on what Liranel actually thinks and wants — useful, and not to be trusted.

His standing rests on three legs: his results; his obedience to the letter, if never the spirit, of the Council's restrictions; and a gap in the kingdom's magical order. In Béravel and the larger towns the Ordo Arcanis holds sway through the University and its chapterhouses, but in forest settlements like Liranel the Ordo's writ is a formality. The druidic arts are conservative because they must preserve balance; bardic magic is subtle and bound to language and history; the Ordo's scholars study magic by a theory that cannot cope with the fae-touched interior. Bélrik offers what none of them do — alchemy in the language of plain power and direct effect, rooted in the old ways and unbound by their piety — and that makes him indispensable to certain people and an affront to all three powers that claim to govern magic in Élavendre.

As Aldric Fallow he stands outside all of it, answerable to nothing but trade and mutual interest. The freedom is heady. It is also unprotected.

## Companions

### Patrons and Allies

**Senedd ap Gwynedd** — In her early seventies now and still one of the Bardic Circle's archivists in Béravel. She was his teacher and is the nearest thing he has to a peer or a friend. They write to each other irregularly and with a kind of affection; she sends rare texts and references, he sends specimens and observations she could get no other way. The Circle does not formally know of the connection, though some members suspect it. Senedd would deny it if asked, and would not let Bélrik be destroyed without a better reason than disapproval.

**Caldor** — A half-fae merchant of the Liranel borderlands who carries most of Aldric Fallow's cross-border trade. Caldor asks little, takes odd payment, and moves goods and people where they need to go with a facility nobody questions. The arrangement is purely business and entirely reliable. Bélrik suspects Caldor is a good deal older than he looks and bound to something in the Unseen, the fae-touched country, and neither of them has ever said so.

**Lady Eadrun of Cardeth** — A young noblewoman of Áelendan blood who has begun coming to Bélrik for discreet remedies. Intelligent, ambitious, and as clear-eyed as he is about the distance between public virtue and private need. Her patronage has come to matter to him, and he knows what that risks: a noble's favour goes as fast as it comes, and she may be sounding him out on the Bardic Circle's behalf.

### Enemies and Threats

**Torven Wyndes** — An elder of the Grove Council, about Bélrik's age, who has made watching him a personal duty. Torven is one of the few who understands both that Bélrik is dangerous and that suppressing him would cost the Council politically, so the war is fought by innuendo, pressure on his suppliers, and a quiet word to his patrons. The two have never spoken. Both know exactly what the other is. Torven would end him without a second thought, given the chance.

**The Áelendan Wardens** — A loose confederation of guardians from the mountain communities, to whom Bélrik is a grave transgressor. They have caught him in the sacred groves twice and he has talked his way out twice. The eldest of them, a woman named **Seonaid**, has started leaving warnings where he goes — carved marks in an old script — and their meaning is plain enough: go on, and it will not be talking next time.

## Plot Hooks

1. **The Sacred Grove's Shadow** — Bélrik has found the specimen he has hunted for years, a plant that grows only where the fae veil runs thin and that might carry a life, or a mind, past its natural limits. The Grove Council has forbidden any harvest from that place, and Seonaid and the Wardens have set a watch on it. The question is whether the knowledge is worth the confrontation, and whether there is a third way that avoids both being seen and drawing blood.
2. **Aldric Fallow's Creditors** — Dúnavarren customs have seized a shipment of Caldor's, and among the goods are bottles in Aldric Fallow's careful hand. The Ordo Arcanis has noticed, and discreet questions are being asked. Bélrik can cut Aldric Fallow loose entirely, call in favours from unlikely quarters to smother the inquiry, or try the dangerous thing: see that the evidence is gone before the Ordo examines it.
3. **The Circle's Bargain** — Senedd comes to him with a proposition. The Bardic Circle needs to know about a fae incursion in the borderlands near Liranel — not the usual thin-veil encounters, but something organised, with a purpose — and cannot investigate without being seen to. Bélrik, with his contacts and his willingness to go where the Circle will not, would be the ideal agent. It requires him to trust the Circle's intentions, which he has never once done.
4. **Violet Eyes, Violet Price** — A stranger comes to Liranel looking for Bélrik: a stranger with violet eyes, who says the alteration was done to them too, and speaks of others, a network, a design. Alliance or threat, the conversation unsettles him as few things do, because it raises the possibility that his change was no accident and that something has been steering him his whole life.
5. **Lady Eadrun's Ascending** — Lady Eadrun's position in the Bardic Circle has strengthened and she stands to inherit real influence. She proposes to make the arrangement formal: he becomes her private alchemist, her quiet advantage, her means of holding on in a shifting court. Security and resources beyond anything he has, at the price of binding his fortunes to hers — and if she falls, he falls with her, and everyone known to be her confidant becomes suspect.
