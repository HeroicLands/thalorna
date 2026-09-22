---
tags:
  - undead
  - creature
name:
  full: Tereb
  aliases:
    - Terebu
    - Nightwight
    - Nightwights
description: "The cloaked one — the sentient, self-directed undead that wears its former self as a garment: vampires, dread-priests, and sorcerer-emperors who persist past death through deliberate, prepared ritual."
shortcode: nghtwght
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: []
  gender: null
  species: null
  age: null
  birthday: null
  height: null
  weight: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: helspawn
  attrRollFormula:
    str: 1d4+13
    end: 1d4+13
    dex: 1d4+13
    agl: 1d4+13
    per: 1d4+13
    pal: 1d4+13
    wil: 1d6+14
    rea: 1d8+10
    cre: 1d4+13
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-pal, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 16 } }
    - { model: sohl-sohl-skill-bflkbite }
    - { model: sohl-sohl-skill-bflkgrab }
    - { model: sohl-sohl-skill-bflkheadbutt }
    - { model: sohl-sohl-skill-bflkkick }
    - { model: sohl-sohl-skill-limbblock }
    - { model: sohl-sohl-skill-press }
    - { model: sohl-sohl-skill-bflkpunch }
    - { model: sohl-sohl-skill-trip }
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
        base: 150
        calc: "150"
      reachBase: 0
      bodyScaleBase: 1.28
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[nghtwght|Tereb]]{float: top-left}

As night falls, the temperature drops and the darkness becomes attentive. A figure emerges from shadow—beautiful and terrible, perfect in form and proportion like a god’s statue brought to life, yet wrong. It is a human shape, but humanity has been refined away, leaving only an ideal that no living person could match. Its skin is pale but luminous, and its eyes burn with dark light. Where it stands, shadows deepen and cold settles. Looking upon it for too long fills you with an aching despair, as though witnessing something you were never meant to see.

# Dossier {#dossier}

**Tereb** (plural _terebu_; "terebs" at the table) is the learned name for the intelligent undead, from the Kheperi root _t-r-b_, to wear, to cloak: _the cloaked one_. A tereb is a powerful individual who has undergone deliberate, prepared rituals to persist past death — a vampire, an undying lord, a dread-priest, a sorcerer-emperor who rules from beyond the grave, or a similar figure — and who wears its former self as a garment. The cloak holds for a short time and not too closely: a tereb can pass for a living person across a room or through a brief exchange, but under close eyes and long company the cloak frays, because nothing wears it from inside but the will. See [[lore-helspawncrtr|Undead]] for the learned terms and the folk names.

## The Creation Process

Becoming a tereb requires _preparation during life_. The candidate undergoes rituals — a process that may take months or years — that align their soul, body, and circumstances for the transition. The rituals are part of a framework specifically designed for this purpose, typically held by particular dark traditions. They are not casual to perform; they require deep practitioner skill, expensive materials, specific timing, and other elaborate conditions.

The rituals inevitably end in the candidate's death. This is the critical point: the rituals do not merely prepare the candidate for some later transformation. They kill them. The candidate dies, and dies as a result of the ritual, and is dead afterwards in a meaningful sense.

After death — and this is the second critical point — the candidate is _not_ immediately reanimated by an attending agent. The arising happens later. Sometimes immediately, sometimes hours, sometimes days, sometimes weeks or months. The timing depends on the specific ritual, the candidate's nature, and the conditions. The arising does not require the original ritual-performer to be present. A vampire who bites and kills a victim does not need to stick around for the victim's eventual rising; the ritual was completed at the moment of biting and the framework continues to operate independently.

The newly arisen tereb is back in the world — animated, moving, conscious, often confused or grieving or exhilarated depending on the circumstances. The person who arose is not exactly the person who died, but the continuity is much higher than for any [[being-hlthrls|damut]]. The soul is more or less intact; the personality is more or less preserved; the memories are more or less retained.

## Consent and Quality

The candidate's state of mind during the ritual matters enormously. Three patterns are common.

**Consenting and well-prepared.** A candidate who wants the transformation, who has worked through the rituals deliberately, who has prepared themselves spiritually for the death and the arising, produces a strong tereb. Their soul has a high likelihood of making the transition with maximum coherence preserved. The resulting tereb may be powerful, retains maximum identity and capacities at near-full or possibly beyond-full strength, and degrades slowly over time. This is the ideal tereb from the candidate's own perspective.

**Non-consenting and fighting.** A candidate who fights the process — actively resists the transformation as it happens, struggles against the ritual's effects, tries to refuse the death — damages their soul during the transition. The result varies depending on how much damage is done.

If the damage is moderate, the candidate may emerge as a weak tereb — lacking many of the capacities that fuller terebu have, their mind perhaps fragmenting faster than usual, the cloak thin from the first. They are terebu only marginally. The worst part of this is the self-horror and self-loathing that comes along with this knowledge of what they have become, and the horror that awaits them.

If the damage is severe, the candidate emerges as a damut instead — a [[being-hlthrls|failed-ritual damut]]. The tereb transformation has failed, but the body still rises, animated by the partial soul that remains.

If the damage is catastrophic, the candidate may not arise at all. The body remains dead. The soul, fragmented and damaged, dissolves and disperses in the spirit realm, gone and irredeemably unrecoverable.

## Power and Capacities

A successful tereb retains much of what they were in life, and often more. Capacities they had may be enhanced — a warrior's strength becomes supernatural, a sorcerer's framework-magic becomes more potent (drawing on the increased Aura that the transformation has unlocked), a charismatic leader's presence becomes overwhelming. The specific enhancements vary by tradition and by individual; not all terebu have the same gifts.

Common capacities across most terebu include:

- **Greatly extended lifespan** — terebu persist for centuries if not interrupted.

- **Enhanced physical strength** in many traditions, though not all.

- **Heightened senses or unusual perceptual abilities.**

- **Immunity to many of the limitations that constrain the living** — they do not tire as readily, do not need to eat ordinary food, do not age in the standard biological way (though see degradation, below).

- **Resistance to harm** — terebu can absorb injuries that would kill the living, and may regenerate damage that would be permanent on a mortal.

Specific tereb traditions have specific capacities. Vampire-tradition terebu commonly have abilities relating to blood, transformation, and influence over the living. Sorcerer-tradition terebu may retain and amplify their magical capacities. Priestly terebu of dark traditions may continue to perform their religion's thaumaturgy, often with greater power than they had in life. The variation is broad, and specific tereb types are best treated in their own bestiary entries.

Appearance varies, and the cloak is what varies. Some terebu look nearly normal — pale, slightly cold, perhaps a faint wrongness perceptible to those who linger. Some look unnaturally beautiful, in ways the living find both attractive and disquieting. Some look obviously inhuman — withered, monstrous, or marked by their dark transformation. The appearance often reflects the tereb's specific tradition and the conditions of their creation.

## Degradation

Terebu, like damutu, eventually degrade. The process occurs over a period of weeks, with the tereb originally appearing quite like a normal person, but over time becoming pallid and grey, smelling of decay, and unable to tolerate daylight — the cloak wearing through. If left unchecked, the tereb will eventually degrade to the level of a damut, and ultimately rot away completely.

## Rebirth

Terebu have 13 lives. When a tereb is finally destroyed, either through total destruction of the body or through complete decay, the animating force of the tereb dissolves for a time before reassembling itself. This process takes anywhere from 1-12 months. When the time period has expired, the tereb is restored to life in a new body in their hallowed ground, identical to their prior body except physically somewhat degraded. The new body can never attain the level of physical capacity as their prior body, although their mental capabilities and aura are more pronounced. A body a few generations old may faintly smell, or look perpetually pallid, but can otherwise pass as normal folk. A body many generations old will be difficult to pass as normal folk to close scrutiny even in the dimmest light.

After the 13th life is complete, the tereb is completely destroyed, the soul dissolved, and irredeemably gone. This is the ultimate fate that awaits all terebu.

## Hallowed Ground

All terebu have a "base", or Hallowed Ground, where they will eventually return if catastrophe strikes and their body is destroyed. The tereb takes care to choose this location with prudence, so that it is safe and hidden. The tereb may change the location at will, but only one location may be chosen at any time, and the tereb must be physically present to designate a spot as their Hallowed Ground.

## Regeneration

To halt or reverse the degradation, terebu must _regenerate_ — and regeneration is universally predatory. Different traditions of tereb regenerate by different mechanisms, but all involve harm to the living. Specifics include:

- **Drinking the blood of the living** — the most familiar mechanism, characteristic of the vampire traditions. The tereb feeds on living blood, drawing into themselves the vitality that the blood carries. Regular feeding sustains them; long abstinence accelerates degradation; gluttonous feeding may produce stronger or more rapid restoration.

- **Feeding on the flesh of the living** - Some terebu sustain themselves with the flesh of living victims rather than simply the blood. This is functionally similar to drinking blood.

- **Consuming Aura directly** — some terebu draw the soul-substance out of living victims, leaving the body intact but the person diminished. Victims may survive but with reduced Aura, often permanently. It is rarer than blood-feeding but produces a tereb whose presence is detectable in different ways and whose victims show different signs.

- **Feeding on emotions or specific kinds of mental experience** — fear, despair, ecstasy. Some tereb traditions cultivate this and require victims who can produce the specific emotion in sufficient quantity. These terebu are often skilled manipulators, since they need to engineer the emotional state of their prey.

All regeneration mechanisms involve harm. There is no benign tereb feeding pattern. The cosmology does not provide for an ethical undead.

Regeneration only occurs after feeding and spending time in their Hallowed Ground.

## GM Notes: Running the Undead

Several practical consequences follow from the cosmology established here.

**Damutu are tragic.** A damut that retains fragments of identity is tragic. The being that remains is a damaged person, not a monster — at least at first. Encounters with recently returned damutu should be played for the emotional weight they deserve. The grieving necromancer who has pulled their lost child back, only to watch the child slowly deteriorate over weeks, is a story Thalorna's cosmology supports and rewards developing. Players who are made to feel the loss are players who understand why necromancy is treated as it is.

**Terebu are people with terrible appetites.** A tereb is not a moustache-twirling villain in undead form. They are persons — frequently cultivated persons, often educated, often with long memory and developed aesthetics — whose existence requires harming the living. The horror of a tereb is partly their power and partly the disconnect between their continued personhood and their predatory necessity. The vampire lord who hosts elegant gatherings, conducts intellectually engaging conversations, and quietly drains a servant in the cellars before retiring is a more disturbing figure than a snarling beast. The cosmology supports the former; the GM should lean into it.

**Tereb politics are real and developable.** The control relationships, the lineage structures, the conflict between creators and creations — these can be developed into substantial campaign material. A campaign that involves the players' characters opposing a vampire court is also a campaign about the court's internal politics, which include real factions, real grievances, and real struggles for power. Some terebu may even be allies of convenience for the players, against rivals among their own kind.

**Failed-ritual damutu raise the stakes for tereb encounters.** When a tereb ritual fails badly, the result is not "nothing happens." It is a failed-ritual damut, possibly intelligent enough at first to be confused for a tereb. This means encounters with the aftermath of a failed ritual can be ambiguous — is this person a damaged tereb, a failed-ritual damut, or something else? — and the answer takes time to become clear. Used sparingly, this is a useful narrative tool.

**The dark theology of the cosmology applies.** The undead exist because mortal souls have been removed from their proper post-mortem trajectory. Every damut is a soul that should have transitioned; every tereb is a soul that arranged to refuse the proper passage. The cosmological-religious frameworks of most Thalornan cultures treat this as a deep disorder — not just because the undead are dangerous to the living, but because they are _out of place_ in the order of things. Adherents of religions that take post-mortem destinations seriously will treat the undead with particular horror.

**The Quaesitorium's hunting of necromancers includes the undead.** The Ordo's enforcement arm pursues necromancers because they are unsanctioned framework-mages doing soul-work the Ordo does not approve. The Quaesitorium also pursues the undead — particularly terebu — wherever they can be found. The hunt is dangerous (terebu are often more powerful than the Quaesitorium's investigators), and the Ordo accepts losses among its hunters as a cost of the work. Some Quaesitorium specialists have spent their lives chasing specific terebu across decades; their motivations may be religious, political, personal, or some combination.

**Undead-hunters as a profession.** Across Thalorna, several established traditions exist for hunting the undead — typically employing some combination of framework-magic (priestly or arcane), specialised weapons, ritual knowledge, and mundane investigation. The Quaesitorium maintains formal hunters within the Ordo's structure. Independent hunters operate in regions where the Ordo has limited reach. Folk traditions in some areas raise particular families or lineages as undead-hunters. Campaigns can centre on such hunters — their methods, their training, their losses, their occasional triumphs.

**Specific undead types belong in the bestiary.** This document covers the cosmological foundation. Specific named undead — particular vampire courts, particular tereb lineages, particular damut variants associated with certain regions or traditions — belong in their own bestiary entries, with statistics, lore, and adventure hooks. The cosmology established here applies to all of them; the specifics are individual.

### Daylight Penalties

- Suffer -4 to all physical attributes, and -2 to all mental attributes

## Attributes

- **Strength:** 14-17 (1d4+13)

- **Endurance:** 14-17 (1d4+13)

- **Dexterity:** 14-17 (1d4+13)

- **Agility:** 14-17 (1d4+13)

- **Perception:** 14-17 (1d4+13)

- **Shadow:** 14-17 (1d4+13)

- **Will:** 15-20 (1d6+14)

- **Reasoning:** 11-18 (1d8+10)

- **Creativity:** 14-17 (1d4+13)

## See Also

- [[lore-helspawncrtr|Undead]] — The undead as a class, the learned terms and the folk names, and the Spirits-versus-undead distinction

- [[being-hlthrls|Damut]] — The driven one: the mindless undead

- [[lore-soulspirts|Souls and Spirits]] — The underlying cosmology of souls, the spirit realm, death and transit, and related material

- [[lore-magictruth|Magic Truth]] — The metaphysics of magic, Aura, frameworks, and thin places

- [[lore-godsrelign|Gods and Religion]] — Priestly thaumaturgy, including the framework-magic effective against the undead

- [[lore-divineactn|Divine Action]] — Divine agents, including those that may be involved in tereb creation in some traditions
-
-
