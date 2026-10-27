---
shortcode: dunharlng
name: {full: Dunhari Language, aliases: []}
type: skill
subType: language
description: "The poetic tongue of the desert peoples, carried on recited verse far more often than on ink."
tags: []
data:
  roman: "abdefghijklmnopqrstuvwyzáéíóúë0123456789·-'"
  core: true
  abbreviation: Dun.
  fields:
    - name: "The Shebarader's court"
      holds: "The offices through which the Shebarader of Amradad governs his cities, markets and doors."
    - name: "Wind, rain and the storm cults"
      holds: "The lineages, ranks and followers of the storm cults of the tribes."
    - name: "Ground, water and settlement"
      holds: "The acts a settled place is named for: walling, threshing, pressing, sowing, drawing."
    - {name: Sayings, holds: "Words met in the proverbs and blessings the language note gives."}
    - name: "The Warrior's Circle"
      holds: "The marks, ranks and gatherings of the Warrior's Circle."
    - name: "Everyday speech"
      holds: "Ordinary words and complete spoken expressions for daily life."
  affixes:
    - form: "-ader"
      gloss: "the holder of an office, by grant"
      attaches: "added"
      examples: ["vazhm- > vazhmader, a judge"]
    - form: "-abun"
      gloss: "the keeper of a thing, a door or a household"
      attaches: "added"
      examples: ["gholv- > gholvabun, a chamberlain"]
    - form: "-ogar"
      gloss: "the one who does it, by calling or rank"
      attaches: "added"
      examples: ["zevr- > zevrogar, a wind-reader"]
    - form: "-i"
      gloss: "of it, marked by it; a clan of secondary descent"
      attaches: "added"
      examples: ["qeshv- > qeshvi, lightning-marked"]
    - form: "-esh"
      gloss: "a company of them, a following"
      attaches: "added"
      examples: ["vaduk- > vadukesh, the followers"]
    - form: "-avad"
      gloss: "watered ground: an oasis or a spring"
      attaches: "added"
      examples: ["ghavul- > ghavulavad, the drawing-place"]
    - form: "-akhend"
      gloss: "a town, a walled settlement"
      attaches: "added"
      examples: ["qarvel- > qarvelakhend, the walled city"]
    - form: "-akhem"
      gloss: "a camp, lived in for a season"
      attaches: "added"
      examples: ["kherzul- > kherzulakhem, the hunters' camp"]
    - form: "-adez"
      gloss: "a fort, a tower or a vault"
      attaches: "added"
      examples: ["qeshv- > qeshvadez, the lightning tower"]
    - form: "-an"
      gloss: "a man of the clan, a clan of primary descent"
      attaches: "added"
      examples: ["barmand- > barmandan"]
    - form: "-id"
      gloss: "the descendants of a founder"
      attaches: "added"
      examples: ["mazan- > mazanid"]
  words:
    - {form: "vazhm-", class: stem, field: "The Shebarader's court", gloss: "to weigh a claim"}
    - form: vazhmader
      class: "n"
      field: "The Shebarader's court"
      gloss: "a judge of a city, by law and custom"
      built: ["vazhm-", "-ader"]
    - form: "tagem-"
      class: stem
      field: "The Shebarader's court"
      gloss: "to hold in trust for another"
    - form: tagemader
      class: "n"
      field: "The Shebarader's court"
      gloss: "a governor of a city or oasis, in the Shebarader's name"
      built: ["tagem-", "-ader"]
    - {form: "nuzg-", class: stem, field: "The Shebarader's court", gloss: "to test a measure"}
    - form: nuzgader
      class: "n"
      field: "The Shebarader's court"
      gloss: "an inspector of markets, weights and public morals"
      built: ["nuzg-", "-ader"]
    - {form: "yorv-", class: stem, field: "The Shebarader's court", gloss: "to enter in the roll"}
    - form: yorvabun
      class: "n"
      field: "The Shebarader's court"
      gloss: "a keeper of the registers and the realm's revenue"
      built: ["yorv-", "-abun"]
    - form: "gholv-"
      class: stem
      field: "The Shebarader's court"
      gloss: "to keep the threshold"
    - form: gholvabun
      class: "n"
      field: "The Shebarader's court"
      gloss: "a chamberlain, who keeps the door to the Shebarader"
      built: ["gholv-", "-abun"]
    - form: "shebar-"
      class: stem
      field: "The Shebarader's court"
      gloss: "to sit in state, to hold court"
    - form: shebarader
      class: "n"
      field: "The Shebarader's court"
      gloss: "the sovereign, who sits in state over the realm"
      built: ["shebar-", "-ader"]
      concept: "ruler"
    - form: "mezhv-"
      class: stem
      field: "The Shebarader's court"
      gloss: "to keep the inner household"
    - form: mezhvabun
      class: "n"
      field: "The Shebarader's court"
      gloss: "the sovereign's principal wife, keeper of the inner household"
      built: ["mezhv-", "-abun"]
    - form: "vashk-"
      class: stem
      field: "The Shebarader's court"
      gloss: "to bear a charge of state for another"
    - form: vashkader
      class: "n"
      field: "The Shebarader's court"
      gloss: "a minister of one department of state; the Grand Vashkader heads them all"
      built: ["vashk-", "-ader"]
    - {form: "ghedv-", class: stem, field: "The Shebarader's court", gloss: "to lead a host"}
    - form: ghedvader
      class: "n"
      field: "The Shebarader's court"
      gloss: "a great officer commanding armies or provinces"
      built: ["ghedv-", "-ader"]
    - {form: "zevr-", class: stem, field: "Wind, rain and the storm cults", gloss: "wind"}
    - form: zevrogar
      class: "n"
      field: "Wind, rain and the storm cults"
      gloss: "a wind-reader"
      built: ["zevr-", "-ogar"]
    - {form: "belg-", class: stem, field: "Wind, rain and the storm cults", gloss: "to call rain"}
    - form: belgogar
      class: "n"
      field: "Wind, rain and the storm cults"
      gloss: "a rain-caller"
      built: ["belg-", "-ogar"]
    - {form: "qeshv-", class: stem, field: "Wind, rain and the storm cults", gloss: "lightning"}
    - form: qeshvi
      class: adj
      field: "Wind, rain and the storm cults"
      gloss: "lightning-marked"
      built: ["qeshv-", "-i"]
    - {form: "ghuzm-", class: stem, field: "Wind, rain and the storm cults", gloss: "storm"}
    - form: ghuzmogar
      class: "n"
      field: "Wind, rain and the storm cults"
      gloss: "a storm-walker"
      built: ["ghuzm-", "-ogar"]
    - {form: "sehv-", class: stem, field: "Wind, rain and the storm cults", gloss: "voice"}
    - form: sehvogar
      class: "n"
      field: "Wind, rain and the storm cults"
      gloss: "a voice-bearer"
      built: ["sehv-", "-ogar"]
    - form: "pevr-"
      class: stem
      field: "Wind, rain and the storm cults"
      gloss: "to read the sky"
    - form: pevrogar
      class: "n"
      field: "Wind, rain and the storm cults"
      gloss: "a recognized practitioner of a lineage"
      built: ["pevr-", "-ogar"]
    - {form: "ruzh-", class: stem, field: "Wind, rain and the storm cults", gloss: "to be eldest"}
    - form: ruzhogar
      class: "n"
      field: "Wind, rain and the storm cults"
      gloss: "the senior elder of a lineage"
      built: ["ruzh-", "-ogar"]
    - {form: "hamel-", class: stem, field: "Wind, rain and the storm cults", gloss: "to learn"}
    - form: hamelogar
      class: "n"
      field: "Wind, rain and the storm cults"
      gloss: "an apprentice"
      built: ["hamel-", "-ogar"]
    - {form: "vaduk-", class: stem, field: "Wind, rain and the storm cults", gloss: "to follow"}
    - form: vadukogar
      class: "n"
      field: "Wind, rain and the storm cults"
      gloss: "a follower"
      built: ["vaduk-", "-ogar"]
      concept: "follower"
    - form: vadukesh
      class: "n"
      field: "Wind, rain and the storm cults"
      gloss: "the followers: the Dunhari at large, as the cults count them"
      built: ["vaduk-", "-esh"]
    - {form: "qarvel-", class: stem, field: "Ground, water and settlement", gloss: "to wall in"}
    - form: qarvelakhend
      class: "n"
      field: "Ground, water and settlement"
      gloss: "the walled city"
      built: ["qarvel-", "-akhend"]
    - form: "tazhin-"
      class: stem
      field: "Ground, water and settlement"
      gloss: "to thresh grain"
    - form: tazhinakhend
      class: "n"
      field: "Ground, water and settlement"
      gloss: "the threshing town"
      built: ["tazhin-", "-akhend"]
    - {form: "venzel-", class: stem, field: "Ground, water and settlement", gloss: "to press oil"}
    - form: venzelakhend
      class: "n"
      field: "Ground, water and settlement"
      gloss: "the oil-pressing town"
      built: ["venzel-", "-akhend"]
    - {form: "sorvad-", class: stem, field: "Ground, water and settlement", gloss: "to sow"}
    - form: sorvadakhend
      class: "n"
      field: "Ground, water and settlement"
      gloss: "the sowing town"
      built: ["sorvad-", "-akhend"]
    - form: shebarakhend
      class: "n"
      field: "Ground, water and settlement"
      gloss: "the seat of the court"
      built: ["shebar-", "-akhend"]
    - form: "tevraz-"
      class: stem
      field: "Ground, water and settlement"
      gloss: "to well up without failing"
    - form: tevrazavad
      class: "n"
      field: "Ground, water and settlement"
      gloss: "the unfailing spring"
      built: ["tevraz-", "-avad"]
    - form: "kherzul-"
      class: stem
      field: "Ground, water and settlement"
      gloss: "to track game"
    - form: kherzulakhem
      class: "n"
      field: "Ground, water and settlement"
      gloss: "the hunters' camp"
      built: ["kherzul-", "-akhem"]
    - {form: "ghavul-", class: stem, field: "Ground, water and settlement", gloss: "to draw water"}
    - form: ghavulavad
      class: "n"
      field: "Ground, water and settlement"
      gloss: "the drawing-place, oasis seat of the tribes"
      built: ["ghavul-", "-avad"]
    - form: vazhmavad
      class: "n"
      field: "Ground, water and settlement"
      gloss: "the weighing-place"
      built: ["vazhm-", "-avad"]
    - form: mezhvadez
      class: "n"
      field: "Ground, water and settlement"
      gloss: "the vault of the inner household"
      built: ["mezhv-", "-adez"]
    - form: qeshvadez
      class: "n"
      field: "Ground, water and settlement"
      gloss: "the lightning tower"
      built: ["qeshv-", "-adez"]
    - "form": "velmuz"
      "class": "n"
      "field": "Sayings"
      "gloss": "knowledge"
      "concept": "knowledge"
    - {form: zorvun, class: v, field: Sayings, gloss: "inspires"}
    - form: "vast-bahar"
      class: "n"
      field: "The Warrior's Circle"
      gloss: '"Scar of the mighty": the indigo leather strip a member of the Warrior''s Circle wears on the upper left arm'
    - form: vev
      class: pron
      field: Everyday speech
      gloss: I; me, the speaker
      source: {kind: coined}
      concept: i
    - form: tesh
      class: pron
      field: Everyday speech
      gloss: you; the person addressed, without marking their number
      source: {kind: coined}
      concept: you-reference
    - form: yaz
      class: pron
      field: Everyday speech
      gloss: he; him
      source: {kind: coined}
      concept: he
    - form: yesh
      class: pron
      field: Everyday speech
      gloss: she; her
      source: {kind: coined}
      concept: she
    - form: vem
      class: pron
      field: Everyday speech
      gloss: it; the thing, matter or proposition already identified
      source: {kind: coined}
      concept: it
    - form: yazun
      class: pron
      field: Everyday speech
      gloss: they; them
      source: {kind: coined}
      concept: they
    - form: vazun
      class: pron
      field: Everyday speech
      gloss: we; us, the speaker and others
      source: {kind: coined}
      concept: we
    - form: vez
      class: part
      field: Everyday speech
      gloss: not; negates the following predicate or stated quality, as in vev tesh vez zarem, I do not see you; in the listed absence phrases it excludes the named thing or faculty
      source: {kind: coined}
      concept: not
    - form: vorem
      class: v
      field: Everyday speech
      gloss: to be; the present citation used in vev lavar vorem, I am well, with the stated condition before the verb
      source: {kind: coined}
      concept: be
    - form: varum
      class: v
      field: Everyday speech
      gloss: "to have; to possess or experience the object: vev vazar varum, I feel joy"
      source: {kind: coined}
      concept: have
    - form: narav
      class: n
      field: Everyday speech
      gloss: a person; a human being of any gender or age
      source: {kind: coined}
      concept: [person, human]
    - form: temvar
      class: n
      field: Everyday speech
      gloss: a thing; something referred to or considered
      source: {kind: coined}
      concept: thing
    - form: navov
      class: n
      field: Everyday speech
      gloss: an emotion; a feeling, distinct from physical sensation alone
      source: {kind: coined}
    - form: marven
      class: n
      field: Everyday speech
      gloss: love; affectionate concern and attachment, distinct from sexual appetite alone
      source: {kind: coined}
      concept: affection
    - form: marev
      class: n
      field: Everyday speech
      gloss: a romantic beloved; a person loved as a partner
      source: {kind: coined}
    - form: ravun
      class: n
      field: Everyday speech
      gloss: a friend
      source: {kind: coined}
      concept: friend
    - form: darven
      class: n
      field: Everyday speech
      gloss: kin; relatives, including relatives outside one's household
      source: {kind: coined}
      concept: kin
    - form: nerav
      class: n
      field: Everyday speech
      gloss: a companion; someone sharing company or an activity
      source: {kind: coined}
      concept: companion
    - form: ravaz
      class: n
      field: Everyday speech
      gloss: a desire; something wanted
      source: {kind: coined}
      concept: desire
    - form: ravend
      class: adj
      field: Everyday speech
      gloss: fulfilled; satisfied by attaining what was desired
      source: {kind: coined}
    - form: sedar
      class: adj
      field: Everyday speech
      gloss: settled; at ease rather than restless or disturbed
      source: {kind: coined}
    - form: lavar
      class: adj
      field: Everyday speech
      gloss:
        - well; healthy in body
        - good; of pleasing or beneficial quality, also used of bodily wellness
      source: {kind: coined}
      concept: [healthy, good]
    - form: lavaz
      class: adj
      field: Everyday speech
      gloss: bad; poor in quality or harmful in the stated respect
      source: {kind: coined}
      concept: bad
    - form: zevand
      class: adj
      field: Everyday speech
      gloss: all; the whole specified set without exception
      source: {kind: coined}
      concept: all
    - form: re
      class: part
      field: Everyday speech
      gloss: of; links a named thing or relation to its owner or object, as in dolvar re vev, my cup
      source: {kind: coined}
    - form: or
      class: part
      field: Everyday speech
      gloss: in; introduces an interior or containing place, as in or gharven, in the house
      source: {kind: coined}
      concept: in
    - form: ed
      class: part
      field: Everyday speech
      gloss: to; toward; introduces a recipient or destination
      source: {kind: coined}
      concept: [toward, to]
    - form: ve
      class: part
      field: Everyday speech
      gloss: at; introduces a location or occasion
      source: {kind: coined}
      concept: at
    - form: vosh
      class: part
      field: Everyday speech
      gloss: from; introduces a source
      source: {kind: coined}
      concept: from
    - form: ar
      class: part
      field: Everyday speech
      gloss: with; together with, or using the named instrument
      source: {kind: coined}
    - form: nev
      class: part
      field: Everyday speech
      gloss: without; lacking the named thing or faculty
      source: {kind: coined}
    - form: navrash
      class: n
      field: Everyday speech
      gloss: fear; the felt anticipation of danger
      source: {kind: coined}
      concept: fear
    - form: ravar
      class: adj
      field: Everyday speech
      gloss: more; greater in number or amount than the stated standard
      source: {kind: coined}
      concept: more
    - form: ravir
      class: adj
      field: Everyday speech
      gloss: less; smaller in number or amount than the stated standard
      source: {kind: coined}
      concept: less
    - form: zemar
      class: part
      field: Everyday speech
      gloss: than; introduces a stated comparison standard
      source: {kind: coined}
      concept: than
    - form: ev
      class: conj
      field: Everyday speech
      gloss: and; joins the named things or complete clauses
      source: {kind: coined}
      concept: and
    - form: oz
      class: conj
      field: Everyday speech
      gloss: or; offers the named alternatives
      source: {kind: coined}
      concept: or
    - form: vek
      class: conj
      field: Everyday speech
      gloss: but; contrasts the two complete clauses it joins
      source: {kind: coined}
      concept: but
    - form: zarem
      class: v
      field: Everyday speech
      gloss: to see; to discern with the eyes
      source: {kind: coined}
      concept: see-verb
    - form: zaram
      class: n
      field: Everyday speech
      gloss: a sight; what is seen, distinct from the ability to see
      source: {kind: coined}
      concept: see-noun
    - form: shevaz
      class: v
      field: Everyday speech
      gloss: to hear; to perceive sound with the ears
      source: {kind: coined}
      concept: hear-verb
    - form: shevar
      class: n
      field: Everyday speech
      gloss: a sound; something audible
      source: {kind: coined}
      concept: hear-noun
    - form: navir
      class: v
      field: Everyday speech
      gloss: to smell; to sense a scent with the nose
      source: {kind: coined}
      concept: smell-verb
    - form: navirash
      class: n
      field: Everyday speech
      gloss: a smell; a scent, pleasant or unpleasant
      source: {kind: coined}
      concept: smell-noun
    - form: lamoz
      class: v
      field: Everyday speech
      gloss: to taste; to sense a flavour
      source: {kind: coined}
      concept: taste-verb
    - form: lamar
      class: n
      field: Everyday speech
      gloss: a taste; a flavour
      source: {kind: coined}
      concept: taste-noun
    - form: mevad
      class: v
      field: Everyday speech
      gloss: to touch; to feel something with the hand
      source: {kind: coined}
      concept: touch-verb
    - form: mevar
      class: n
      field: Everyday speech
      gloss: a touch; an instance of physical contact
      source: {kind: coined}
      concept: touch-noun
    - form: zarav
      class: v
      field: Everyday speech
      gloss: to look; to direct one's eyes at the object
      source: {kind: coined}
      concept: look
    - form: zarvev
      class: v
      field: Everyday speech
      gloss: to watch; to keep an attentive gaze upon someone or something
      source: {kind: coined}
      concept: watch
    - form: zaram re temvar
      class: n
      field: Everyday speech
      gloss: appearance; the outward look of a thing, literally the sight of the thing; temvar is replaced by the named thing
      source: {kind: coined}
      concept: appearance
    - form: zarev
      class: adj
      field: Everyday speech
      gloss: visible; discernible to a situated observer with sight
      source: {kind: coined}
      concept: visible
    - form: vez zarev
      class: adj
      field: Everyday speech
      gloss: invisible; not discernible to a situated observer with sight
      source: {kind: coined}
      concept: invisible
    - form: shevaram
      class: v
      field: Everyday speech
      gloss: to listen; to direct attention to what is heard
      source: {kind: coined}
      concept: listen
    - form: shevram
      class: n
      field: Everyday speech
      gloss: noise; intrusive or irregular sound
      source: {kind: coined}
      concept: noise
    - form: sevar
      class: n
      field: Everyday speech
      gloss: a voice; sound produced by a speaker or animal; an individually coined ordinary citation related to the bound voice stem sehv-, not that stem used alone
      source: {kind: coined}
      concept: voice
    - form: nev shevar
      class: part
      field: Everyday speech
      gloss: silence; without audible sound in the situation
      source: {kind: coined}
      concept: silence
    - form: shevash
      class: adj
      field: Everyday speech
      gloss: loud; having great audible intensity
      source: {kind: coined}
      concept: loud
    - form: shevish
      class: adj
      field: Everyday speech
      gloss: quiet; making little or no sound
      source: {kind: coined}
      concept: quiet
    - form: navresh
      class: adj
      field: Everyday speech
      gloss: fragrant; having a pleasant scent
      source: {kind: coined}
      concept: fragrant
    - form: navrosh
      class: adj
      field: Everyday speech
      gloss: foul-smelling; having an unpleasant smell
      source: {kind: coined}
      concept: foul
    - form: lamav
      class: adj
      field: Everyday speech
      gloss: sweet
      source: {kind: coined}
      concept: sweet
    - form: lamev
      class: adj
      field: Everyday speech
      gloss: sour
      source: {kind: coined}
      concept: sour
    - form: lamord
      class: adj
      field: Everyday speech
      gloss: bitter
      source: {kind: coined}
      concept: bitter
    - form: lamash
      class: adj
      field: Everyday speech
      gloss: salty
      source: {kind: coined}
      concept: salty
    - form: navem
      class: v
      field: Everyday speech
      gloss: to feel a physical sensation, not merely hold a belief
      source: {kind: coined}
      concept: feel-verb
    - form: navor
      class: n
      field: Everyday speech
      gloss: a physical sensation; an experience through the senses
      source: {kind: coined}
      concept: sensation
    - form: mevaz
      class: adj
      field: Everyday speech
      gloss: smooth
      source: {kind: coined}
      concept: smooth
    - form: mevash
      class: adj
      field: Everyday speech
      gloss: rough
      source: {kind: coined}
      concept: rough
    - form: mevan
      class: adj
      field: Everyday speech
      gloss: soft
      source: {kind: coined}
      concept: soft
    - form: mevard
      class: adj
      field: Everyday speech
      gloss: hard to the touch; firm rather than soft
      source: {kind: coined}
      concept: hard-texture
    - form: zarvan
      class: v
      field: Everyday speech
      gloss: to notice
      source: {kind: coined}
      concept: notice
    - form: naver
      class: v
      field: Everyday speech
      gloss: to perceive; to become aware through the senses
      source: {kind: coined}
      concept: perceive
    - form: zarevar
      class: v
      field: Everyday speech
      gloss: to recognize; to identify something already known
      source: {kind: coined}
      concept: recognize
    - form: zavor
      class: v
      field: Everyday speech
      gloss: "to seem; to present the stated appearance: temvar mevaz zavor, the thing seems smooth"
      source: {kind: coined}
      concept: seem
    - form: ghavash
      class: n
      field: Everyday speech
      gloss: wrath; intense consuming anger
      source: {kind: coined}
      concept: wrath
    - form: varzhem
      class: n
      field: Everyday speech
      gloss: envy; distress at another's good fortune and a desire to possess it oneself
      source: {kind: coined}
      concept: envy
    - form: navrem
      class: n
      field: Everyday speech
      gloss: hope; desire for a good outcome accompanied by an expectation that it may occur
      source: {kind: coined}
      concept: hope
    - form: ravaz ravrad
      class: n
      field: Everyday speech
      gloss: greed; desire beyond a fitting share, including desire for wealth or power
      source: {kind: coined}
      concept: greed
    - form: sevrash
      class: n
      field: Everyday speech
      gloss: boasting; speech that displays one's own worth or achievements excessively
      source: {kind: coined}
      concept: boasting
    - form: darvem
      class: n
      field: Everyday speech
      gloss: pride; felt esteem in oneself or what one identifies with
      source: {kind: coined}
      concept: pride
    - form: marvaz
      class: n
      field: Everyday speech
      gloss: lust; sexual appetite, distinct from romantic or universal selfless love
      source: {kind: coined}
      concept: lust
    - form: nev navrem
      class: part
      field: Everyday speech
      gloss: despair; without hope in the felt sense of having lost it
      source: {kind: coined}
      concept: despair
    - form: navresham
      class: n
      field: Everyday speech
      gloss: disappointment; sadness at an expectation not being fulfilled
      source: {kind: coined}
      concept: disappointment
    - form: revdan
      class: n
      field: Everyday speech
      gloss: faith; committed trust in a person, teaching or sacred promise without requiring proof
      source: {kind: coined}
      concept: faith
    - form: vazar
      class: n
      field: Everyday speech
      gloss: joy; a keen feeling of gladness
      source: {kind: coined}
      concept: joy
    - form: vazhar
      class: n
      field: Everyday speech
      gloss: happiness; a sustained feeling of being happy and one's life going well
      source: {kind: coined}
      concept: happiness
    - form: lamvar
      class: n
      field: Everyday speech
      gloss: pleasure; felt enjoyment or delight
      source: {kind: coined}
      concept: pleasure
    - form: darvav sedar
      class: n
      field: Everyday speech
      gloss: contentment; a heart at ease with what it has, a conventional feeling rather than merely a settled quarrel
      source: {kind: coined}
      concept: contentment
    - form: ramev
      class: n
      field: Everyday speech
      gloss: gratitude; thankful recognition of a benefit received
      source: {kind: coined}
      concept: gratitude
    - form: darvem re narav
      class: n
      field: Everyday speech
      gloss: admiration; felt esteem directed toward another's qualities or deeds; the admired person may replace narav
      source: {kind: coined}
      concept: admiration
    - form: revam
      class: n
      field: Everyday speech
      gloss: trust; willing reliance on someone or something, without asserting that the reliance is justified
      source: {kind: coined}
      concept: trust
    - form: navrand
      class: n
      field: Everyday speech
      gloss: courage; resolve to act or endure despite fear, rather than an absence of fear
      source: {kind: coined}
      concept: courage
    - form: ghavaram
      class: n
      field: Everyday speech
      gloss: anger; a feeling of displeasure directed against someone or something
      source: {kind: coined}
      concept: anger
    - form: navrovar
      class: n
      field: Everyday speech
      gloss: hatred; enduring intense aversion
      source: {kind: coined}
      concept: hatred
    - form: ghavaram re marven
      class: n
      field: Everyday speech
      gloss: jealousy; anger and anxiety at the prospect of a rival taking a valued relationship, conventionally anger over love
      source: {kind: coined}
      concept: jealousy
    - form: navrash ravrad
      class: n
      field: Everyday speech
      gloss: terror; overwhelming fear, not necessarily fear of a supernatural being
      source: {kind: coined}
      concept: terror
    - form: navram
      class: n
      field: Everyday speech
      gloss: sadness
      source: {kind: coined}
      concept: sadness
    - form: navram re novar
      class: n
      field: Everyday speech
      gloss: grief; deep sadness at loss, the conventional sorrow over absence; the lost person or thing can be named after re
      source: {kind: coined}
      concept: grief
    - form: zarmesh
      class: n
      field: Everyday speech
      gloss: shame; painful awareness of being diminished in one's own or others' eyes
      source: {kind: coined}
      concept: shame
    - form: darvez
      class: n
      field: Everyday speech
      gloss: guilt; the felt recognition of one's own wrongdoing, distinct from a legal finding or a debt inherited through a feud
      source: {kind: coined}
      concept: guilt
    - form: darvam
      class: n
      field: Everyday speech
      gloss: regret; sorrow over what happened or what one did or failed to do
      source: {kind: coined}
      concept: regret
    - form: darvim
      class: n
      field: Everyday speech
      gloss: humility
      source: {kind: coined}
      concept: humility
    - form: revar
      class: n
      field: Everyday speech
      gloss: confidence; subjective assurance in one's capacity, an outcome or a claim, without guaranteeing truth
      source: {kind: coined}
      concept: confidence
    - form: zarmesh mevor
      class: n
      field: Everyday speech
      gloss: embarrassment; the conventional softer shame of awkward self-consciousness, without necessarily a moral fault
      source: {kind: coined}
      concept: embarrassment
    - form: marven re navram
      class: n
      field: Everyday speech
      gloss: compassion; concern for another's suffering and a wish to relieve it, conventionally love directed toward sorrow
      source: {kind: coined}
      concept: compassion
    - form: navram re narav
      class: n
      field: Everyday speech
      gloss: pity; sorrow at another's suffering or misfortune; the affected person may replace narav
      source: {kind: coined}
      concept: pity
    - form: navov re nerav
      class: n
      field: Everyday speech
      gloss: sympathy; sharing or understanding another's feeling, literally feeling of a companion; not restricted to friends
      source: {kind: coined}
      concept: sympathy
    - form: ghavaram sevard
      class: n
      field: Everyday speech
      gloss: resentment; enduring anger at a remembered injury or unfairness
      source: {kind: coined}
      concept: resentment
    - form: navrovar naverd
      class: n
      field: Everyday speech
      gloss: contempt; aversion joined to a judgement that its object is beneath regard
      source: {kind: coined}
      concept: contempt
    - form: ravmesh
      class: n
      field: Everyday speech
      gloss: forgiveness; release of blame or a claim against another, distinct from payment or the end of an angry feeling alone
      source: {kind: coined}
      concept: forgiveness
    - form: ravaz re novar
      class: n
      field: Everyday speech
      gloss: longing; a persistent desire for what is absent or unattained, not restricted to an absent person
      source: {kind: coined}
      concept: longing
    - form: navov re ravaz ravend
      class: n
      field: Everyday speech
      gloss: satisfaction; the felt fulfillment of a desire, not merely the completion of a task or settlement of a feud
      source: {kind: coined}
      concept: satisfaction
    - form: ravzham
      class: n
      field: Everyday speech
      gloss: frustration; distress at an obstructed desire or effort
      source: {kind: coined}
      concept: frustration
    - form: navelash
      class: n
      field: Everyday speech
      gloss: curiosity
      source: {kind: coined}
      concept: curiosity
    - form: navrez
      class: n
      field: Everyday speech
      gloss: confusion; inability to make sense of a situation or distinguish its parts
      source: {kind: coined}
      concept: confusion
    - form: revash
      class: n
      field: Everyday speech
      gloss: doubt; felt uncertainty about a claim or outcome
      source: {kind: coined}
      concept: doubt
    - form: revar zevand
      class: n
      field: Everyday speech
      gloss: certainty; complete subjective assurance, not an assertion of objective truth
      source: {kind: coined}
      concept: certainty
    - form: navramish
      class: n
      field: Everyday speech
      gloss: surprise; the feeling occasioned by something unexpected
      source: {kind: coined}
      concept: surprise
    - form: lamvash
      class: n
      field: Everyday speech
      gloss: boredom
      source: {kind: coined}
      concept: boredom
    - form: navren
      class: n
      field: Everyday speech
      gloss: anticipation; attentive expectation of something to come, pleasant or unpleasant
      source: {kind: coined}
      concept: anticipation
    - form: revan
      class: n
      field: Everyday speech
      gloss: belief; acceptance of a claim as true without guaranteeing its truth
      source: {kind: coined}
      concept: belief
    - form: darvem sevard
      class: n
      field: Everyday speech
      gloss: reverence; deep respectful regard toward someone or something revered, rather than status alone
      source: {kind: coined}
      concept: reverence
    - form: navramor
      class: n
      field: Everyday speech
      gloss: awe; humbled wonder before something overwhelming, which may include fear without being terror
      source: {kind: coined}
      concept: awe
    - form: marven re marev
      class: n
      field: Everyday speech
      gloss: romantic love; affectionate attachment to a beloved partner, distinct from sexual appetite alone
      source: {kind: coined}
      concept: love-eros
    - form: marven re ravun
      class: n
      field: Everyday speech
      gloss: friendship; affectionate regard between friends
      source: {kind: coined}
      concept: love-philia
    - form: marven re darven
      class: n
      field: Everyday speech
      gloss: family love; affectionate attachment between kin
      source: {kind: coined}
      concept: love-storge
    - form: marvash
      class: n
      field: Everyday speech
      gloss: selfless universal love; concern for the good of all without seeking kinship advantage, repayment, standing or sexual gratification; wider than the enforceable duties of salt hospitality
      source: {kind: coined}
      concept: love-agape
    - form: marevash
      class: n
      field: Everyday speech
      gloss: attraction; a felt pull toward someone or something, physical, romantic or otherwise
      source: {kind: coined}
      concept: attraction
    - form: darvash
      class: n
      field: Everyday speech
      gloss: intimacy; shared closeness and private mutual familiarity
      source: {kind: coined}
      concept: intimacy
    - form: marven sevard
      class: n
      field: Everyday speech
      gloss: devotion; enduring affectionate dedication to a person, undertaking or ideal
      source: {kind: coined}
      concept: devotion
    - form: revdan sevard
      class: n
      field: Everyday speech
      gloss: loyalty; steadfast allegiance to a person, group or commitment
      source: {kind: coined}
      concept: loyalty
    - form: neravam
      class: n
      field: Everyday speech
      gloss: companionship; sharing company or activity with a companion, including company without intimate friendship
      source: {kind: coined}
      concept: companionship
    - form: navrav
      class: n
      field: Everyday speech
      gloss: enmity; a relationship of hostility
      source: {kind: coined}
      concept: enmity
    - form: ravrad
      class: adj
      field: Everyday speech
      gloss: excessive; exceeding a fitting or intended limit
      source: {kind: coined}
    - form: darvav
      class: n
      field: Everyday speech
      gloss: the heart; the bodily organ, also the conventional seat of felt concern in the listed heart expressions
      source: {kind: coined}
      concept: heart
    - form: novar
      class: n
      field: Everyday speech
      gloss: absence; the condition of not being present or attained
      source: {kind: coined}
    - form: mevor
      class: adj
      field: Everyday speech
      gloss: gentle; mild in effect or intensity
      source: {kind: coined}
    - form: sevard
      class: adj
      field: Everyday speech
      gloss: enduring; continuing for a sustained time
      source: {kind: coined}
      concept: lasting-duration
    - form: naverd
      class: adj
      field: Everyday speech
      gloss: low; below the stated or ordinary level
      source: {kind: coined}
      concept: low
    - form: navred
      class: n
      field: Everyday speech
      gloss: the head
      source: {kind: coined}
      concept: head
    - form: shavem
      class: n
      field: Everyday speech
      gloss: hair; the strands growing on a person's head, distinct from sheep's fleece
      source: {kind: coined}
      concept: hair
    - form: zavram
      class: n
      field: Everyday speech
      gloss: the face
      source: {kind: coined}
      concept: face
    - form: zarim
      class: n
      field: Everyday speech
      gloss: the eye
      source: {kind: coined}
      concept: eye
    - form: shevam
      class: n
      field: Everyday speech
      gloss: the ear
      source: {kind: coined}
      concept: ear
    - form: navrim
      class: n
      field: Everyday speech
      gloss: the nose
      source: {kind: coined}
      concept: nose
    - form: lavor
      class: n
      field: Everyday speech
      gloss: the mouth
      source: {kind: coined}
      concept: mouth
    - form: lavev
      class: n
      field: Everyday speech
      gloss: the lip
      source: {kind: coined}
      concept: lip
    - form: qemar
      class: n
      field: Everyday speech
      gloss: the tooth
      source: {kind: coined}
      concept: tooth
    - form: lazhar
      class: n
      field: Everyday speech
      gloss: the tongue; the muscular organ inside the mouth, distinct from a language
      source: {kind: coined}
      concept: tongue
    - form: navrad
      class: n
      field: Everyday speech
      gloss: the neck
      source: {kind: coined}
      concept: neck
    - form: marvand
      class: n
      field: Everyday speech
      gloss: the shoulder
      source: {kind: coined}
      concept: shoulder
    - form: mervar
      class: n
      field: Everyday speech
      gloss: the arm
      source: {kind: coined}
      concept: arm
    - form: mervend
      class: n
      field: Everyday speech
      gloss: the elbow
      source: {kind: coined}
      concept: elbow
    - form: merav
      class: n
      field: Everyday speech
      gloss: the hand
      source: {kind: coined}
      concept: hand
    - form: merin
      class: n
      field: Everyday speech
      gloss: the finger
      source: {kind: coined}
      concept: finger
    - form: merzav re merav
      class: n
      field: Everyday speech
      gloss: a fingernail; a nail of the hand
      source: {kind: coined}
      concept: nail
    - form: darvar
      class: n
      field: Everyday speech
      gloss: the chest
      source: {kind: coined}
      concept: chest
    - form: marzav
      class: n
      field: Everyday speech
      gloss: a breast; an organ that produces milk, distinct from the chest as a whole
      source: {kind: coined}
      concept: breast
    - form: qomar
      class: n
      field: Everyday speech
      gloss: the belly
      source: {kind: coined}
      concept: belly
    - form: rovam
      class: n
      field: Everyday speech
      gloss: the back
      source: {kind: coined}
      concept: back
    - form: qarvez
      class: n
      field: Everyday speech
      gloss: the hip
      source: {kind: coined}
      concept: hip
    - form: ravom
      class: n
      field: Everyday speech
      gloss: the leg
      source: {kind: coined}
      concept: leg
    - form: ravon
      class: n
      field: Everyday speech
      gloss: the knee
      source: {kind: coined}
      concept: knee
    - form: pavem
      class: n
      field: Everyday speech
      gloss: the foot
      source: {kind: coined}
      concept: foot
    - form: pavin
      class: n
      field: Everyday speech
      gloss: the toe
      source: {kind: coined}
      concept: toe
    - form: sharav
      class: n
      field: Everyday speech
      gloss: the skin
      source: {kind: coined}
      concept: skin
    - form: qermav
      class: n
      field: Everyday speech
      gloss: the bone
      source: {kind: coined}
      concept: bone
    - form: hazvar
      class: n
      field: Everyday speech
      gloss: blood
      source: {kind: coined}
      concept: blood
    - form: mavor
      class: n
      field: Everyday speech
      gloss: flesh
      source: {kind: coined}
      concept: flesh
    - form: navred re zavram
      class: n
      field: Everyday speech
      gloss: the forehead; the conventional head of the face, meaning the region above the eyes
      source: {kind: coined}
      concept: forehead
    - form: qemvar
      class: n
      field: Everyday speech
      gloss: jaw
      source: {kind: coined}
      concept: jaw
    - form: zavrev
      class: n
      field: Everyday speech
      gloss: chin
      source: {kind: coined}
      concept: chin
    - form: zavrem
      class: n
      field: Everyday speech
      gloss: cheek
      source: {kind: coined}
      concept: cheek
    - form: lazvar
      class: n
      field: Everyday speech
      gloss: the throat; the inner passage through the neck
      source: {kind: coined}
      concept: throat
    - form: qomrav
      class: n
      field: Everyday speech
      gloss: the stomach; the digestive organ within the belly
      source: {kind: coined}
      concept: stomach
    - form: qomvar
      class: n
      field: Everyday speech
      gloss: waist
      source: {kind: coined}
      concept: waist
    - form: rovar
      class: n
      field: Everyday speech
      gloss: spine
      source: {kind: coined}
      concept: spine
    - form: rovash
      class: n
      field: Everyday speech
      gloss: buttock
      source: {kind: coined}
      concept: buttock
    - form: merend
      class: n
      field: Everyday speech
      gloss: wrist
      source: {kind: coined}
      concept: wrist
    - form: zavram re merav
      class: n
      field: Everyday speech
      gloss: the palm; the inner gripping face of the hand
      source: {kind: coined}
      concept: palm
    - form: merand
      class: n
      field: Everyday speech
      gloss: thumb
      source: {kind: coined}
      concept: thumb
    - form: ravomar
      class: n
      field: Everyday speech
      gloss: thigh
      source: {kind: coined}
      concept: thigh
    - form: pavend
      class: n
      field: Everyday speech
      gloss: ankle
      source: {kind: coined}
      concept: ankle
    - form: pavom
      class: n
      field: Everyday speech
      gloss: heel
      source: {kind: coined}
      concept: heel
    - form: pavash
      class: n
      field: Everyday speech
      gloss: sole
      source: {kind: coined}
      concept: sole
    - form: merzav re pavem
      class: n
      field: Everyday speech
      gloss: a toenail; a nail of the foot
      source: {kind: coined}
      concept: toenail
    - form: mervam
      class: n
      field: Everyday speech
      gloss: muscle
      source: {kind: coined}
      concept: muscle
    - form: mavam
      class: n
      field: Everyday speech
      gloss: fat; the bodily tissue and its fatty substance
      source: {kind: coined}
      concept: fat
    - form: shavaz
      class: n
      field: Everyday speech
      gloss: sweat (noun)
      source: {kind: coined}
      concept: sweat
    - form: zarvam
      class: n
      field: Everyday speech
      gloss: tears
      source: {kind: coined}
      concept: tears
    - form: lavam
      class: n
      field: Everyday speech
      gloss: saliva
      source: {kind: coined}
      concept: saliva
    - form: navrom
      class: n
      field: Everyday speech
      gloss: brain
      source: {kind: coined}
      concept: brain
    - form: vahrav
      class: n
      field: Everyday speech
      gloss: lung
      source: {kind: coined}
      concept: lung
    - form: hazmer
      class: n
      field: Everyday speech
      gloss: liver
      source: {kind: coined}
      concept: liver
    - form: hazven
      class: n
      field: Everyday speech
      gloss: kidney
      source: {kind: coined}
      concept: kidney
    - form: qomven
      class: n
      field: Everyday speech
      gloss: intestine
      source: {kind: coined}
      concept: intestine
    - form: marzhem
      class: n
      field: Everyday speech
      gloss: the genitals; the external reproductive parts
      source: {kind: coined}
      concept: genitals
    - form: marzhar
      class: n
      field: Everyday speech
      gloss: womb
      source: {kind: coined}
      concept: womb
    - form: marzher
      class: n
      field: Everyday speech
      gloss: penis
      source: {kind: coined}
      concept: penis
    - form: marzhir
      class: n
      field: Everyday speech
      gloss: vagina
      source: {kind: coined}
      concept: vagina
    - form: marzhun
      class: n
      field: Everyday speech
      gloss: testicle
      source: {kind: coined}
      concept: testicle
    - form: merzav
      class: n
      field: Everyday speech
      gloss: a nail; the hard plate at the end of a finger or toe
      source: {kind: coined}
    - form: tovav
      class: n
      field: Everyday speech
      gloss: food
      source: {kind: coined}
      concept: food
    - form: tovem
      class: v
      field: Everyday speech
      gloss: to eat
      source: {kind: coined}
      concept: eat
    - form: ghaver
      class: n
      field: Everyday speech
      gloss: a drink; a serving of liquid for drinking
      source: {kind: coined}
      concept: drink-noun
    - form: ghavam
      class: v
      field: Everyday speech
      gloss: to drink
      source: {kind: coined}
      concept: drink-verb
    - form: ghavar
      class: n
      field: Everyday speech
      gloss: water
      source: {kind: coined}
      concept: water
    - form: vahar
      class: n
      field: Everyday speech
      gloss: air
      source: {kind: coined}
      concept: air
    - form: vaham
      class: n
      field: Everyday speech
      gloss: breath
      source: {kind: coined}
      concept: breath
    - form: vavem
      class: v
      field: Everyday speech
      gloss: to breathe; to draw air into and let air out of the lungs
      source: {kind: coined}
      concept: breathe
    - form: sevam
      class: n
      field: Everyday speech
      gloss: sleep
      source: {kind: coined}
      concept: sleep-noun
    - form: sevem
      class: v
      field: Everyday speech
      gloss: to sleep
      source: {kind: coined}
      concept: sleep-verb
    - form: qomav
      class: n
      field: Everyday speech
      gloss: urine
      source: {kind: coined}
      concept: urine
    - form: qovam
      class: v
      field: Everyday speech
      gloss: to urinate
      source: {kind: coined}
      concept: urinate
    - form: qovad
      class: n
      field: Everyday speech
      gloss: dung
      source: {kind: coined}
      concept: dung
    - form: qovem
      class: v
      field: Everyday speech
      gloss: to defecate
      source: {kind: coined}
      concept: defecate
    - form: varoz
      class: n
      field: Everyday speech
      gloss: warmth
      source: {kind: coined}
      concept: warmth
    - form: gholvar
      class: n
      field: Everyday speech
      gloss: shelter; protection against exposure, and a place providing it
      source: {kind: coined}
      concept: shelter
    - form: tovraz
      class: n
      field: Everyday speech
      gloss: hunger
      source: {kind: coined}
      concept: hunger
    - form: tovrav
      class: adj
      field: Everyday speech
      gloss: hungry
      source: {kind: coined}
      concept: hungry
    - form: ghavraz
      class: n
      field: Everyday speech
      gloss: thirst
      source: {kind: coined}
      concept: thirst
    - form: ghavrav
      class: adj
      field: Everyday speech
      gloss: thirsty
      source: {kind: coined}
      concept: thirsty
    - form: vavand
      class: v
      field: Everyday speech
      gloss: to inhale; to draw air into the lungs
      source: {kind: coined}
      concept: inhale
    - form: vavaz
      class: v
      field: Everyday speech
      gloss: to exhale; to let air out of the lungs
      source: {kind: coined}
      concept: exhale
    - form: vahrash
      class: v
      field: Everyday speech
      gloss: to suffocate; to be unable to obtain breathable air because air is absent or breathing is obstructed
      source: {kind: coined}
      concept: suffocate
    - form: sevaram
      class: v
      field: Everyday speech
      gloss: to wake; to cease sleeping
      source: {kind: coined}
      concept: wake
    - form: sevarav
      class: adj
      field: Everyday speech
      gloss: awake
      source: {kind: coined}
      concept: awake
    - form: sevram
      class: n
      field: Everyday speech
      gloss: a dream; an experience during sleep, not a prediction by itself
      source: {kind: coined}
      concept: dream
    - form: sedam
      class: n
      field: Everyday speech
      gloss: rest; a pause in exertion that permits recovery
      source: {kind: coined}
      concept: rest
    - form: sedav
      class: adj
      field: Everyday speech
      gloss: tired
      source: {kind: coined}
      concept: tired
    - form: shavemaz
      class: v
      field: Everyday speech
      gloss: to sweat
      source: {kind: coined}
      concept: sweat-verb
    - form: varom
      class: n
      field: Everyday speech
      gloss: heat
      source: {kind: coined}
      concept: heat
    - form: sarvam
      class: n
      field: Everyday speech
      gloss: cold as a bodily need or temperature condition
      source: {kind: coined}
      concept: cold-noun
    - form: varav
      class: adj
      field: Everyday speech
      gloss: hot
      source: {kind: coined}
      concept: hot
    - form: varim
      class: adj
      field: Everyday speech
      gloss: warm; moderately hot, pleasantly or undesirably as context determines
      source: {kind: coined}
      concept: warm
    - form: sarvim
      class: adj
      field: Everyday speech
      gloss: cool; moderately cold
      source: {kind: coined}
      concept: cool
    - form: sarvem
      class: v
      field: Everyday speech
      gloss: to freeze; to turn to ice or become frozen
      source: {kind: coined}
      concept: freeze
    - form: varvem
      class: v
      field: Everyday speech
      gloss: to burn; to be consumed or damaged by fire or heat
      source: {kind: coined}
      concept: burn
    - form: gholav
      class: n
      field: Everyday speech
      gloss: safety
      source: {kind: coined}
      concept: safety
    - form: qazhar
      class: n
      field: Everyday speech
      gloss: danger
      source: {kind: coined}
      concept: danger
    - form: gholvaram
      class: n
      field: Everyday speech
      gloss: protection; guarding someone or something against harm, not restricted to a guest under the code of salt
      source: {kind: coined}
      concept: protection
    - form: marzam
      class: n
      field: Everyday speech
      gloss: sex; sexual intercourse
      source: {kind: coined}
      concept: sex
    - form: marzham
      class: v
      field: Everyday speech
      gloss: to conceive; to become pregnant, distinct from forming a plan
      source: {kind: coined}
      concept: conceive
    - form: marzhav
      class: n
      field: Everyday speech
      gloss: pregnancy
      source: {kind: coined}
      concept: pregnancy
    - form: marzhaver
      class: adj
      field: Everyday speech
      gloss: pregnant
      source: {kind: coined}
      concept: pregnant
    - form: marzhan
      class: n
      field: Everyday speech
      gloss: birth; the event of being born
      source: {kind: coined}
      concept: birth
    - form: marzhev
      class: v
      field: Everyday speech
      gloss: to give birth; the birthing parent's act
      source: {kind: coined}
      concept: give-birth
    - form: marzem
      class: v
      field: Everyday speech
      gloss: to nurse a child; to feed a child at the breast
      source: {kind: coined}
      concept: nurse
    - form: narvam
      class: v
      field: Everyday speech
      gloss: to grow; to increase in size or develop toward maturity
      source: {kind: coined}
      concept: grow
    - form: ruzhavam
      class: v
      field: Everyday speech
      gloss: to age; to grow older, an individually coined ordinary verb related to the bound eldest stem ruzh-
      source: {kind: coined}
      concept: [age-verb, aging]
    - form: novram
      class: n
      field: Everyday speech
      gloss: death
      source: {kind: coined}
      concept: death
    - form: novrav
      class: adj
      field: Everyday speech
      gloss: dead
      source: {kind: coined}
      concept: dead
    - form: narvamish
      class: adj
      field: Everyday speech
      gloss: sick; ill
      source: {kind: coined}
      concept: sick
    - form: hazvam
      class: adj
      field: Everyday speech
      gloss: injured; wounded
      source: {kind: coined}
      concept: injured
    - form: ghavard
      class: adj
      field: Everyday speech
      gloss: Strong
      source: {kind: coined}
      concept: strong
    - form: ghavir
      class: adj
      field: Everyday speech
      gloss: weak
      source: {kind: coined}
      concept: weak
    - form: sedav ravrad
      class: adj
      field: Everyday speech
      gloss: exhausted; tired to the point that one's strength is spent
      source: {kind: coined}
      concept: exhausted
    - form: tovrand
      class: adj
      field: Everyday speech
      gloss: sated; full after eating or drinking
      source: {kind: coined}
      concept: sated
    - form: sarvaz
      class: adj
      field: Everyday speech
      gloss: cold in temperature
      source: {kind: coined}
      concept: cold
    - form: varav ar navramad
      class: adj
      field: Everyday speech
      gloss: feverish; hot with illness, not merely hot from weather or exertion
      source: {kind: coined}
      concept: feverish
    - form: hazvamash
      class: n
      field: Everyday speech
      gloss: Pain
      source: {kind: coined}
      concept: pain
    - form: hazvem
      class: v
      field: Everyday speech
      gloss: to hurt someone; to cause pain or injury to the object
      source: {kind: coined}
      concept: hurt-verb
    - form: hazvaram
      class: n
      field: Everyday speech
      gloss: an ache; persistent dull bodily pain
      source: {kind: coined}
      concept: ache
    - form: hazrev
      class: v
      field: Everyday speech
      gloss: to suffer; to undergo pain or distress
      source: {kind: coined}
      concept: suffer
    - form: hazver
      class: v
      field: Everyday speech
      gloss: Bleed
      source: {kind: coined}
      concept: bleed
    - form: lavem
      class: v
      field: Everyday speech
      gloss: to heal; to restore an injured body or cause a wound to close
      source: {kind: coined}
      concept: heal
    - form: lavrem
      class: v
      field: Everyday speech
      gloss: to recover; to return toward health after illness or injury
      source: {kind: coined}
      concept: recover
    - form: nev zaremar
      class: part
      field: Everyday speech
      gloss: blind; without sight as a bodily incapacity, not merely unable to see one hidden object
      source: {kind: coined}
      concept: blind
    - form: nev shevamar
      class: part
      field: Everyday speech
      gloss: deaf; without hearing as a bodily incapacity, not simply inattentive
      source: {kind: coined}
      concept: deaf
    - form: pavish
      class: adj
      field: Everyday speech
      gloss: lame; having an impairment of the legs or feet that hinders walking
      source: {kind: coined}
      concept: lame
    - form: narvem
      class: adj
      field: Everyday speech
      gloss: Alive
      source: {kind: coined}
      concept: alive
    - form: navemav
      class: adj
      field: Everyday speech
      gloss: conscious; awake to one's surroundings and able to have sensory awareness
      source: {kind: coined}
      concept: conscious
    - form: vez navemav
      class: adj
      field: Everyday speech
      gloss: unconscious; lacking sensory awareness of one's surroundings
      source: {kind: coined}
      concept: unconscious
    - form: navremar
      class: adj
      field: Everyday speech
      gloss: Young
      source: {kind: coined}
      concept: young
    - form: ruzhen
      class: adj
      field: Everyday speech
      gloss: old in age, of a living being; an independent ordinary adjective beside the bound rank stem ruzh-
      source: {kind: coined}
      concept: old
    - form: hazrem
      class: v
      field: Everyday speech
      gloss: to hurt; to experience bodily pain, rather than cause it in another
      source: {kind: coined}
      concept: hurt-pain
    - form: zaremar
      class: n
      field: Everyday speech
      gloss: sight; the faculty of seeing
      source: {kind: coined}
    - form: shevamar
      class: n
      field: Everyday speech
      gloss: hearing; the faculty of hearing
      source: {kind: coined}
    - form: navramad
      class: n
      field: Everyday speech
      gloss: illness; a bodily condition of being sick
      source: {kind: coined}
    - form: mavun
      class: n
      field: Everyday speech
      gloss: mother
      source: {kind: coined}
      concept: mother
    - form: parun
      class: n
      field: Everyday speech
      gloss: father
      source: {kind: coined}
      concept: father
    - form: daruv
      class: n
      field: Everyday speech
      gloss: parent
      source: {kind: coined}
      concept: parent
    - form: navun
      class: n
      field: Everyday speech
      gloss: a child; a young person, and one's offspring where parentage is being discussed
      source: {kind: coined}
      concept: child
    - form: navun pavar
      class: n
      field: Everyday speech
      gloss: [a son; one's male child, a boy; a male child]
      source: {kind: coined}
      concept: [son, boy]
    - form: navun mavar
      class: n
      field: Everyday speech
      gloss: [a daughter; one's female child, a girl; a female child]
      source: {kind: coined}
      concept: [daughter, girl]
    - form: darvaner
      class: n
      field: Everyday speech
      gloss: a brother; a male sibling
      source: {kind: coined}
      concept: brother
    - form: darvanir
      class: n
      field: Everyday speech
      gloss: sister
      source: {kind: coined}
      concept: sister
    - form: mavun re daruv
      class: n
      field: Everyday speech
      gloss: a grandmother; a mother of one's parent
      source: {kind: coined}
      concept: grandmother
    - form: parun re daruv
      class: n
      field: Everyday speech
      gloss: a grandfather; a father of one's parent
      source: {kind: coined}
      concept: grandfather
    - form: navun re navun
      class: n
      field: Everyday speech
      gloss: a grandchild; a child of one's child
      source: {kind: coined}
      concept: grandchild
    - form: darvaner re daruv
      class: n
      field: Everyday speech
      gloss: an uncle; a parent's brother
      source: {kind: coined}
      concept: uncle
    - form: darvanir re daruv
      class: n
      field: Everyday speech
      gloss: an aunt; a parent's sister
      source: {kind: coined}
      concept: aunt
    - form: darvaram
      class: n
      field: Everyday speech
      gloss: a cousin; a child of a parent's sibling
      source: {kind: coined}
      concept: cousin
    - form: merun pavar
      class: n
      field: Everyday speech
      gloss: a husband; a male spouse
      source: {kind: coined}
      concept: husband
    - form: merun mavar
      class: n
      field: Everyday speech
      gloss: a wife; a female spouse, rather than property belonging to a husband
      source: {kind: coined}
      concept: wife
    - form: darvadar
      class: n
      field: Everyday speech
      gloss: ancestor
      source: {kind: coined}
      concept: ancestor
    - form: darvadun
      class: n
      field: Everyday speech
      gloss: descendant
      source: {kind: coined}
      concept: descendant
    - form: navun nev daruv
      class: n
      field: Everyday speech
      gloss: an orphan; a child without living parents
      source: {kind: coined}
      concept: orphan
    - form: mernov mavar
      class: n
      field: Everyday speech
      gloss: a widow; a woman whose spouse has died
      source: {kind: coined}
      concept: widow
    - form: darvarun
      class: n
      field: Everyday speech
      gloss: grandparent
      source: {kind: coined}
      concept: grandparent
    - form: navun pavar re darvanir
      class: n
      field: Everyday speech
      gloss: a nephew; a sibling's male child; darvaner replaces darvanir when the parent is one's brother
      source: {kind: coined}
      concept: nephew
    - form: navun mavar re darvanir
      class: n
      field: Everyday speech
      gloss: a niece; a sibling's female child; darvaner replaces darvanir when the parent is one's brother
      source: {kind: coined}
      concept: niece
    - form: merun
      class: n
      field: Everyday speech
      gloss: spouse
      source: {kind: coined}
      concept: spouse
    - form: meravan
      class: n
      field: Everyday speech
      gloss: marriage
      source: {kind: coined}
      concept: marriage
    - form: meravam
      class: v
      field: Everyday speech
      gloss: to marry; to enter a marriage with the person named as object
      source: {kind: coined}
      concept: marry
    - form: darvarum
      class: n
      field: Everyday speech
      gloss: a family; people joined by parentage, marriage or enduring family care
      source: {kind: coined}
      concept: family
    - form: darvadash
      class: n
      field: Everyday speech
      gloss: a lineage; a line of descent, without restricting it to an old named clan
      source: {kind: coined}
      concept: lineage
    - form: mernov pavar
      class: n
      field: Everyday speech
      gloss: a widower; a man whose spouse has died
      source: {kind: coined}
      concept: widower
    - form: navravar
      class: n
      field: Everyday speech
      gloss: enemy
      source: {kind: coined}
      concept: enemy
    - form: nevar
      class: n
      field: Everyday speech
      gloss: a stranger; a person not previously known to the speaker or household
      source: {kind: coined}
      concept: stranger
    - form: gholnar
      class: n
      field: Everyday speech
      gloss: neighbor
      source: {kind: coined}
      concept: neighbor
    - form: gholmer
      class: n
      field: Everyday speech
      gloss: a guest; someone received into another's hospitality, with or without a formal salt pledge
      source: {kind: coined}
      concept: guest
    - form: gholmar
      class: n
      field: Everyday speech
      gloss: a host; someone receiving or caring for a guest
      source: {kind: coined}
      concept: host
    - form: vadevar
      class: n
      field: Everyday speech
      gloss: a leader; someone who guides or directs a group, without requiring an office of state
      source: {kind: coined}
      concept: leader
    - form: varabun
      class: n
      field: Everyday speech
      gloss: a servant; someone serving another, without necessarily being a bondsman
      source: {kind: coined}
      concept: servant
    - form: varemar
      class: n
      field: Everyday speech
      gloss: a master; someone exercising authority over work or household service
      source: {kind: coined}
      concept: master
    - form: hamedar
      class: n
      field: Everyday speech
      gloss: a teacher; a person who gives teaching
      source: {kind: coined}
      concept: teacher
    - form: hamen
      class: n
      field: Everyday speech
      gloss: a student; a person learning from a teacher, including learners outside a storm-cult apprenticeship
      source: {kind: coined}
      concept: student
    - form: pavar
      class: adj
      field: Everyday speech
      gloss: male; of the male sex, including boys
      source: {kind: coined}
    - form: mavar
      class: adj
      field: Everyday speech
      gloss: female; of the female sex, including girls
      source: {kind: coined}
    - form: mernov
      class: n
      field: Everyday speech
      gloss: a bereaved spouse; a person whose spouse has died
      source: {kind: coined}
    - form: sedvar
      class: n
      field: Everyday speech
      gloss: a chair; a seat with a back for one person
      source: {kind: coined}
      concept: chair
    - form: sedram
      class: n
      field: Everyday speech
      gloss: a table
      source: {kind: coined}
      concept: table
    - form: sevmar
      class: n
      field: Everyday speech
      gloss: a bed
      source: {kind: coined}
      concept: bed
    - form: gholram
      class: n
      field: Everyday speech
      gloss: a floor
      source: {kind: coined}
      concept: floor
    - form: qarvam
      class: n
      field: Everyday speech
      gloss: a wall
      source: {kind: coined}
      concept: wall
    - form: gholrem
      class: n
      field: Everyday speech
      gloss: a roof
      source: {kind: coined}
      concept: roof
    - form: gharven
      class: n
      field: Everyday speech
      gloss: an abode; a house or home, including a tent lived in as a home
      source: {kind: coined}
      concept: abode
    - form: varash
      class: n
      field: Everyday speech
      gloss: fire
      source: {kind: coined}
      concept: fire
    - form: varghar
      class: n
      field: Everyday speech
      gloss: a hearth; the place prepared to contain a household fire
      source: {kind: coined}
      concept: hearth
    - form: gholver
      class: n
      field: Everyday speech
      gloss: a door
      source: {kind: coined}
      concept: door
    - form: qerver
      class: n
      field: Everyday speech
      gloss: a lock
      source: {kind: coined}
      concept: lock
    - form: qervar
      class: n
      field: Everyday speech
      gloss: a key
      source: {kind: coined}
      concept: key
    - form: zarmar
      class: n
      field: Everyday speech
      gloss: a window
      source: {kind: coined}
      concept: window
    - form: zarmaram
      class: n
      field: Everyday speech
      gloss: shutters
      source: {kind: coined}
      concept: shutters
    - form: dolvar
      class: n
      field: Everyday speech
      gloss: a cup
      source: {kind: coined}
      concept: cup
    - form: dolram
      class: n
      field: Everyday speech
      gloss: a bowl
      source: {kind: coined}
      concept: bowl
    - form: qerav
      class: n
      field: Everyday speech
      gloss: a knife
      source: {kind: coined}
      concept: knife
    - form: dolmer
      class: n
      field: Everyday speech
      gloss: a spoon
      source: {kind: coined}
      concept: spoon
    - form: dolmar
      class: n
      field: Everyday speech
      gloss: a pot
      source: {kind: coined}
      concept: pot
    - form: varmer
      class: n
      field: Everyday speech
      gloss: a lamp
      source: {kind: coined}
      concept: lamp
    - form: shalvar
      class: n
      field: Everyday speech
      gloss: cloth; woven fabric of any ordinary material
      source: {kind: coined}
      concept: cloth
    - form: shalvam
      class: n
      field: Everyday speech
      gloss: clothes; garments worn on the body
      source: {kind: coined}
      concept: clothes
    - form: ghalvar
      class: n
      field: Everyday speech
      gloss: room
      source: {kind: coined}
      concept: room
    - form: gholrev
      class: n
      field: Everyday speech
      gloss: ceiling
      source: {kind: coined}
      concept: ceiling
    - form: sedmar
      class: n
      field: Everyday speech
      gloss: a seat; a place or object for sitting
      source: {kind: coined}
      concept: seat
    - form: sedmar darom
      class: n
      field: Everyday speech
      gloss: a bench; a long seat for several people, with or without a back
      source: {kind: coined}
      concept: bench
    - form: dolvard
      class: n
      field: Everyday speech
      gloss: jar
      source: {kind: coined}
      concept: jar
    - form: dolven
      class: n
      field: Everyday speech
      gloss: bottle
      source: {kind: coined}
      concept: bottle
    - form: shalmer
      class: n
      field: Everyday speech
      gloss: basket
      source: {kind: coined}
      concept: basket
    - form: shalvor
      class: n
      field: Everyday speech
      gloss: bag
      source: {kind: coined}
      concept: bag
    - form: qervam
      class: n
      field: Everyday speech
      gloss: hammer
      source: {kind: coined}
      concept: hammer
    - form: shavram
      class: n
      field: Everyday speech
      gloss: rope
      source: {kind: coined}
      concept: rope
    - form: shavrim
      class: n
      field: Everyday speech
      gloss: cord
      source: {kind: coined}
      concept: cord
    - form: shazvar
      class: n
      field: Everyday speech
      gloss: needle
      source: {kind: coined}
      concept: needle
    - form: varver
      class: n
      field: Everyday speech
      gloss: flame
      source: {kind: coined}
      concept: flame
    - form: varmor
      class: n
      field: Everyday speech
      gloss: smoke
      source: {kind: coined}
      concept: smoke
    - form: varzam
      class: n
      field: Everyday speech
      gloss: ash
      source: {kind: coined}
      concept: ash
    - form: varzham
      class: n
      field: Everyday speech
      gloss: coal
      source: {kind: coined}
      concept: coal
    - form: varvan
      class: n
      field: Everyday speech
      gloss: torch
      source: {kind: coined}
      concept: torch
    - form: varmar
      class: n
      field: Everyday speech
      gloss: candle
      source: {kind: coined}
      concept: candle
    - form: shalvaram
      class: n
      field: Everyday speech
      gloss: a garment; one item of clothing
      source: {kind: coined}
      concept: garment
    - form: shalvaram re darvar
      class: n
      field: Everyday speech
      gloss: a shirt; a garment covering the trunk and arms, conventionally a chest garment
      source: {kind: coined}
      concept: shirt
    - form: shalvaz
      class: n
      field: Everyday speech
      gloss: cloak
      source: {kind: coined}
      concept: cloak
    - form: qomzar
      class: n
      field: Everyday speech
      gloss: belt
      source: {kind: coined}
      concept: belt
    - form: pavmar
      class: n
      field: Everyday speech
      gloss: shoe
      source: {kind: coined}
      concept: shoe
    - form: pavmar zavard
      class: n
      field: Everyday speech
      gloss: a boot; a shoe whose upper covers the ankle or higher, conventionally a high shoe
      source: {kind: coined}
      concept: boot
    - form: gholver navord
      class: n
      field: Everyday speech
      gloss: a gate; a large closure at an entrance, including an opening in a wall
      source: {kind: coined}
      concept: gate
    - form: qarvar
      class: n
      field: Everyday speech
      gloss: barrier
      source: {kind: coined}
      concept: barrier
    - form: mavor re darovar
      class: n
      field: Everyday speech
      gloss: wood; the solid material of a tree, including branches, fallen wood and prepared timber, conventionally tree flesh
      source: {kind: coined}
      concept: wood
    - form: qodar
      class: n
      field: Everyday speech
      gloss: stone
      source: {kind: coined}
      concept: stone
    - form: ghoram
      class: n
      field: Everyday speech
      gloss: metal
      source: {kind: coined}
      concept: metal
    - form: qodav
      class: n
      field: Everyday speech
      gloss: clay
      source: {kind: coined}
      concept: clay
    - form: sharvam
      class: n
      field: Everyday speech
      gloss: leather
      source: {kind: coined}
      concept: leather
    - form: shamvar
      class: n
      field: Everyday speech
      gloss: wool; the fleece fibre of sheep used in spinning and weaving, not head hair
      source: {kind: coined}
      concept: wool
    - form: shavrin
      class: n
      field: Everyday speech
      gloss: thread
      source: {kind: coined}
      concept: thread
    - form: dorav
      class: n
      field: Everyday speech
      gloss: earth; the material of the ground
      source: {kind: coined}
      concept: earth
    - form: dorem
      class: n
      field: Everyday speech
      gloss: soil; earth in which plants grow
      source: {kind: coined}
      concept: soil
    - form: qodvar
      class: n
      field: Everyday speech
      gloss: a rock; a large natural mass of stone
      source: {kind: coined}
      concept: rock
    - form: qodim
      class: n
      field: Everyday speech
      gloss: sand
      source: {kind: coined}
      concept: sand
    - form: qodvam
      class: n
      field: Everyday speech
      gloss: mud
      source: {kind: coined}
      concept: mud
    - form: qodmar
      class: n
      field: Everyday speech
      gloss: dust
      source: {kind: coined}
      concept: dust
    - form: dovar
      class: n
      field: Everyday speech
      gloss: land; ground or territory distinct from water, whether owned or not
      source: {kind: coined}
      concept: land
    - form: qodram
      class: n
      field: Everyday speech
      gloss: mountain
      source: {kind: coined}
      concept: mountain
    - form: qodrim
      class: n
      field: Everyday speech
      gloss: hill
      source: {kind: coined}
      concept: hill
    - form: qodven
      class: n
      field: Everyday speech
      gloss: valley
      source: {kind: coined}
      concept: valley
    - form: dovar mevaz
      class: n
      field: Everyday speech
      gloss: a plain; flat open land, conventionally smooth land
      source: {kind: coined}
      concept: plain-landform
    - form: darovam
      class: n
      field: Everyday speech
      gloss: forest
      source: {kind: coined}
      concept: forest
    - form: sorvan
      class: n
      field: Everyday speech
      gloss: field
      source: {kind: coined}
      concept: field
    - form: qodvaram
      class: n
      field: Everyday speech
      gloss: cave
      source: {kind: coined}
      concept: cave
    - form: ghavram
      class: n
      field: Everyday speech
      gloss: river
      source: {kind: coined}
      concept: river
    - form: ghavrim
      class: n
      field: Everyday speech
      gloss: stream
      source: {kind: coined}
      concept: stream
    - form: ghavmar
      class: n
      field: Everyday speech
      gloss: lake
      source: {kind: coined}
      concept: lake
    - form: ghavzar
      class: n
      field: Everyday speech
      gloss: sea
      source: {kind: coined}
      concept: sea
    - form: ghavzar navord
      class: n
      field: Everyday speech
      gloss: an ocean; a vast major expanse of salt water, conventionally a great sea
      source: {kind: coined}
      concept: ocean
    - form: ghavdar
      class: n
      field: Everyday speech
      gloss: shore
      source: {kind: coined}
      concept: shore
    - form: belgar
      class: n
      field: Everyday speech
      gloss: rain; an independently cited ordinary noun beside the bound rain-calling stem belg-
      source: {kind: coined}
      concept: rain
    - form: sarvamar
      class: n
      field: Everyday speech
      gloss: snow
      source: {kind: coined}
      concept: snow
    - form: sarvash
      class: n
      field: Everyday speech
      gloss: ice
      source: {kind: coined}
      concept: ice
    - form: pevar
      class: n
      field: Everyday speech
      gloss: the sky; an independently cited ordinary noun beside the bound sky-reading stem pevr-
      source: {kind: coined}
      concept: sky
    - form: nemar
      class: n
      field: Everyday speech
      gloss: sun
      source: {kind: coined}
      concept: sun
    - form: nemav
      class: n
      field: Everyday speech
      gloss: moon
      source: {kind: coined}
      concept: moon
    - form: nemash
      class: n
      field: Everyday speech
      gloss: star
      source: {kind: coined}
      concept: star
    - form: pevram
      class: n
      field: Everyday speech
      gloss: cloud
      source: {kind: coined}
      concept: cloud
    - form: zever
      class: n
      field: Everyday speech
      gloss: wind; an individually coined ordinary noun related to the bound zevr-, not that consonant cluster used alone
      source: {kind: coined}
      concept: wind
    - form: ghuzam
      class: n
      field: Everyday speech
      gloss: a storm; an individually coined ordinary noun beside the bound ghuzm-
      source: {kind: coined}
      concept: storm
    - form: ghuzvar
      class: n
      field: Everyday speech
      gloss: thunder
      source: {kind: coined}
      concept: thunder
    - form: qeshev
      class: n
      field: Everyday speech
      gloss: lightning; an individually coined ordinary noun beside the bound qeshv-
      source: {kind: coined}
      concept: lightning
    - form: darev
      class: n
      field: Everyday speech
      gloss: plant
      source: {kind: coined}
      concept: plant
    - form: darovar
      class: n
      field: Everyday speech
      gloss: tree
      source: {kind: coined}
      concept: tree
    - form: darov
      class: n
      field: Everyday speech
      gloss: leaf
      source: {kind: coined}
      concept: leaf
    - form: darver
      class: n
      field: Everyday speech
      gloss: a root; the anchoring and absorbing part of a plant
      source: {kind: coined}
      concept: root
    - form: daromar
      class: n
      field: Everyday speech
      gloss: branch
      source: {kind: coined}
      concept: branch
    - form: darevar
      class: n
      field: Everyday speech
      gloss: flower
      source: {kind: coined}
      concept: flower
    - form: darevam
      class: n
      field: Everyday speech
      gloss: fruit
      source: {kind: coined}
      concept: fruit
    - form: darevin
      class: n
      field: Everyday speech
      gloss: seed
      source: {kind: coined}
      concept: seed
    - form: daram
      class: n
      field: Everyday speech
      gloss: grass
      source: {kind: coined}
      concept: grass
    - form: narev
      class: n
      field: Everyday speech
      gloss: animal
      source: {kind: coined}
      concept: animal
    - form: narev navord
      class: n
      field: Everyday speech
      gloss: a beast; a large or formidable animal, often wild
      source: {kind: coined}
      concept: beast
    - form: pevnar
      class: n
      field: Everyday speech
      gloss: bird
      source: {kind: coined}
      concept: bird
    - form: ghavnar
      class: n
      field: Everyday speech
      gloss: fish
      source: {kind: coined}
      concept: fish
    - form: narevim
      class: n
      field: Everyday speech
      gloss: insect
      source: {kind: coined}
      concept: insect
    - form: dornar
      class: n
      field: Everyday speech
      gloss: worm
      source: {kind: coined}
      concept: worm
    - form: ghavev
      class: adj
      field: Everyday speech
      gloss: wet
      source: {kind: coined}
      concept: wet
    - form: sarvev
      class: adj
      field: Everyday speech
      gloss: dry
      source: {kind: coined}
      concept: dry
    - form: nemev
      class: adj
      field: Everyday speech
      gloss: bright
      source: {kind: coined}
      concept: bright
    - form: qozhar
      class: adj
      field: Everyday speech
      gloss: dark
      source: {kind: coined}
      concept: dark
    - form: pevar nev pevram
      class: n
      field: Everyday speech
      gloss: clear weather; a sky without clouds, used as a sky report
      source: {kind: coined}
      concept: clear-weather
    - form: pevar ar pevram
      class: n
      field: Everyday speech
      gloss: cloudy weather; a sky occupied by clouds, used as a sky report
      source: {kind: coined}
      concept: cloudy
    - form: nover
      class: n
      field: Everyday speech
      gloss: north
      source: {kind: coined}
      concept: north
    - form: sovem
      class: n
      field: Everyday speech
      gloss: south
      source: {kind: coined}
      concept: south
    - form: nemvar
      class: n
      field: Everyday speech
      gloss: east
      source: {kind: coined}
      concept: east
    - form: nemvor
      class: n
      field: Everyday speech
      gloss: west
      source: {kind: coined}
      concept: west
    - form: darom
      class: adj
      field: Everyday speech
      gloss: long in spatial length
      source: {kind: coined}
      concept: long
    - form: zavard
      class: adj
      field: Everyday speech
      gloss: high; at or extending to a great vertical level
      source: {kind: coined}
      concept: high
    - form: navord
      class: adj
      field: Everyday speech
      gloss: big; great in extent
      source: {kind: coined}
      concept: big
    - form: zavem
      class: num
      field: Everyday speech
      gloss: one
      source: {kind: coined}
      concept: one
    - form: dovam
      class: num
      field: Everyday speech
      gloss: two
      source: {kind: coined}
      concept: two
    - form: mevon
      class: num
      field: Everyday speech
      gloss: three
      source: {kind: coined}
      concept: three
    - form: revdar
      class: num
      field: Everyday speech
      gloss: four
      source: {kind: coined}
      concept: four
    - form: zavran
      class: num
      field: Everyday speech
      gloss: five
      source: {kind: coined}
      concept: five
    - form: voram
      class: num
      field: Everyday speech
      gloss: six
      source: {kind: coined}
      concept: six
    - form: nevram
      class: num
      field: Everyday speech
      gloss: seven
      source: {kind: coined}
      concept: seven
    - form: marzen
      class: num
      field: Everyday speech
      gloss: eight
      source: {kind: coined}
      concept: eight
    - form: shevan
      class: num
      field: Everyday speech
      gloss: nine
      source: {kind: coined}
      concept: nine
    - form: devav
      class: num
      field: Everyday speech
      gloss: ten
      source: {kind: coined}
      concept: ten
    - form: devav dovam
      class: num
      field: Everyday speech
      gloss: twenty; the conventional count of two tens, without asserting a general multiplication word order
      source: {kind: coined}
      concept: twenty
    - form: qavem
      class: num
      field: Everyday speech
      gloss: a hundred
      source: {kind: coined}
      concept: hundred
    - form: qavaram
      class: num
      field: Everyday speech
      gloss: a thousand
      source: {kind: coined}
      concept: thousand
    - form: zavmer
      class: adj
      field: Everyday speech
      gloss: first in an ordered sequence
      source: {kind: coined}
      concept: first
    - form: dovmer
      class: adj
      field: Everyday speech
      gloss: second in an ordered sequence
      source: {kind: coined}
      concept: second
    - form: mevmer
      class: adj
      field: Everyday speech
      gloss: third in an ordered sequence
      source: {kind: coined}
      concept: third
    - form: tevram
      class: n
      field: Everyday speech
      gloss: a half; one of two equal parts
      source: {kind: coined}
      concept: half
    - form: tavram
      class: adj
      field: Everyday speech
      gloss: many; a large number of countable things
      source: {kind: coined}
      concept: many
    - form: tavrim
      class: adj
      field: Everyday speech
      gloss: few; a small number of countable things
      source: {kind: coined}
      concept: few
    - form: nevan
      class: pron
      field: Everyday speech
      gloss: none; nothing, excluding any member or thing in the specified scope
      source: {kind: coined}
      concept: none
    - form: nevam
      class: num
      field: Everyday speech
      gloss: zero; the number or amount zero, distinct from an assertion that no thing exists
      source: {kind: coined}
      concept: zero
    - form: ve davren re nevram
      class: part
      field: Everyday speech
      gloss: seventh; at position seven of an ordered sequence; replace nevram by the position number, as in ve davren re marzen, at position eight
      source: {kind: coined}
      concept: ordinal-construction
    - form: tevrim
      class: n
      field: Everyday speech
      gloss: a quarter; one of four equal parts
      source: {kind: coined}
      concept: quarter
    - form: zemav
      class: adj
      field: Everyday speech
      gloss: whole; undivided or complete as one thing
      source: {kind: coined}
      concept: whole
    - form: zemun
      class: adj
      field: Everyday speech
      gloss: some; an unspecified nonzero portion or number
      source: {kind: coined}
      concept: some
    - form: tavav
      class: adj
      field: Everyday speech
      gloss: much; a large amount of an uncounted substance
      source: {kind: coined}
      concept: much
    - form: tavir
      class: adj
      field: Everyday speech
      gloss: little; a small amount of an uncounted substance
      source: {kind: coined}
      concept: little-quantity
    - form: qevam
      class: adj
      field: Everyday speech
      gloss: enough; sufficient for the stated need
      source: {kind: coined}
      concept: enough
    - form: ravar zemar temvar levar zevand
      class: adj
      field: Everyday speech
      gloss: most; more than every other item in the stated comparison set; temvar levar zevand names the other items, with the compared item excluded
      source: {kind: coined}
      concept: most
    - form: ravir zemar temvar levar zevand
      class: adj
      field: Everyday speech
      gloss: least; less than every other item in the stated comparison set
      source: {kind: coined}
      concept: least
    - form: qevard
      class: adj
      field: Everyday speech
      gloss: equal; the same in the respect being compared, including number, amount or size
      source: {kind: coined}
      concept: equal
    - form: zavim
      class: adj
      field: Everyday speech
      gloss: each; every individual member of the stated set, considered separately
      source: {kind: coined}
      concept: [each, every]
    - form: dovam zevand
      class: num
      field: Everyday speech
      gloss: both; the entire specified pair
      source: {kind: coined}
      concept: both
    - form: zavem re dovam
      class: n
      field: Everyday speech
      gloss: either; one of the two specified alternatives
      source: {kind: coined}
      concept: either
    - form: nevan re dovam
      class: pron
      field: Everyday speech
      gloss: neither; none of the two specified alternatives
      source: {kind: coined}
      concept: neither
    - form: ravev devav
      class: part
      field: Everyday speech
      gloss: about ten; close to ten in quantity on either side; replace devav by the approximate quantity
      source: {kind: coined}
      concept: about
    - form: ravev novir devav
      class: part
      field: Everyday speech
      gloss: almost ten; close to ten but below it; replace devav by the quantity approached; this is a scalar rather than temporal expression
      source: {kind: coined}
      concept: almost
    - form: dov devav
      class: part
      field: Everyday speech
      gloss: exactly ten; ten without approximation; replace devav by the exact number or amount
      source: {kind: coined}
      concept: exactly
    - form: tavren
      class: n
      field: Everyday speech
      gloss: number
      source: {kind: coined}
      concept: number
    - form: tavrem
      class: n
      field: Everyday speech
      gloss: amount
      source: {kind: coined}
      concept: amount
    - form: nuzgem
      class: v
      field: Everyday speech
      gloss: to measure; to find or state a thing's amount or extent, an independent ordinary citation beside the bound measure-testing stem nuzg-
      source: {kind: coined}
      concept: measure-verb
    - form: tavmaz
      class: v
      field: Everyday speech
      gloss: count
      source: {kind: coined}
      concept: count-verb
    - form: davren
      class: n
      field: Everyday speech
      gloss: a position; a numbered or otherwise identified place in an ordered arrangement
      source: {kind: coined}
      concept: position
    - form: levar
      class: adj
      field: Everyday speech
      gloss: other; different from the item currently considered
      source: {kind: coined}
      concept: other
    - form: ravev
      class: part
      field: Everyday speech
      gloss: near; close to the following place or quantity
      source: {kind: coined}
      concept: near
    - form: novir
      class: part
      field: Everyday speech
      gloss: below; lower than the following level or amount
      source: {kind: coined}
      concept: below
    - form: dov
      class: part
      field: Everyday speech
      gloss: exactly; excludes approximation in the number or amount that follows
      source: {kind: coined}
    - form: qazram
      class: adj
      field: Everyday speech
      gloss: black
      source: {kind: coined}
      concept: black
    - form: nevarav
      class: adj
      field: Everyday speech
      gloss: white
      source: {kind: coined}
      concept: white
    - form: hazrav
      class: adj
      field: Everyday speech
      gloss: red
      source: {kind: coined}
      concept: red
    - form: darevash
      class: adj
      field: Everyday speech
      gloss: green
      source: {kind: coined}
      concept: green
    - form: nemvam
      class: adj
      field: Everyday speech
      gloss: yellow
      source: {kind: coined}
      concept: yellow
    - form: ghavem
      class: adj
      field: Everyday speech
      gloss: blue
      source: {kind: coined}
      concept: blue
    - form: qazrim
      class: adj
      field: Everyday speech
      gloss: grey
      source: {kind: coined}
      concept: grey
    - form: dorvam
      class: adj
      field: Everyday speech
      gloss: brown
      source: {kind: coined}
      concept: brown
    - form: nevamar
      class: adj
      field: Everyday speech
      gloss: light in colour; containing much white or little dark pigment
      source: {kind: coined}
      concept: light-colour
    - form: nevamir
      class: adj
      field: Everyday speech
      gloss: pale; faint or washed out in colour, and of a face lacking its usual colour
      source: {kind: coined}
      concept: pale
    - form: zarevam
      class: adj
      field: Everyday speech
      gloss: clear in appearance; visually distinct and readily made out, as of a mark or outline
      source: {kind: coined}
      concept: clear-appearance
    - form: vez zavoram
      class: adj
      field: Everyday speech
      gloss: opaque; not allowing an observer to see through the material, even if its surface is bright
      source: {kind: coined}
      concept: opaque
    - form: zavoram
      class: adj
      field: Everyday speech
      gloss: transparent; allowing an observer to see through the material
      source: {kind: coined}
      concept: transparent
    - form: nemvaram
      class: adj
      field: Everyday speech
      gloss: shiny; reflecting light visibly
      source: {kind: coined}
      concept: shiny
    - form: vez nemvaram
      class: adj
      field: Everyday speech
      gloss: dull in appearance; lacking shine
      source: {kind: coined}
      concept: dull-appearance
    - form: shalvar nev zarvem
      class: n
      field: Everyday speech
      gloss: plain cloth; cloth without a pattern; replace shalvar with the named object to describe its lack of pattern
      source: {kind: coined}
      concept: plain-pattern
    - form: zarvemar
      class: adj
      field: Everyday speech
      gloss: spotted
      source: {kind: coined}
      concept: spotted
    - form: zarvemir
      class: adj
      field: Everyday speech
      gloss: striped
      source: {kind: coined}
      concept: striped
    - form: zarvem
      class: n
      field: Everyday speech
      gloss: a pattern; an arranged or repeated visible design
      source: {kind: coined}
    - form: ravrez
      class: v
      field: Everyday speech
      gloss: to go; to move away or toward the destination stated after ed
      source: {kind: coined}
      concept: go
    - form: revem
      class: v
      field: Everyday speech
      gloss: to come; to move toward the speaker or the named meeting place
      source: {kind: coined}
      concept: come
    - form: dovem
      class: v
      field: Everyday speech
      gloss: "to give; to transfer something to someone: vev dolvar ed tesh dovem, I give you a cup"
      source: {kind: coined}
      concept: give
    - form: qavram
      class: v
      field: Everyday speech
      gloss: to take; to obtain or remove the object
      source: {kind: coined}
      concept: take
    - form: tamvar
      class: v
      field: Everyday speech
      gloss:
        - to make; to produce or fashion something
        - to create; to bring a new thing or work into being
      source: {kind: coined}
      concept: [make, create]
    - form: tamvem
      class: v
      field: Everyday speech
      gloss: to do; to carry out an act, distinct from making a thing
      source: {kind: coined}
      concept: do
    - form: sevaz
      class: v
      field: Everyday speech
      gloss: to say; to utter the words or claim stated before the verb
      source: {kind: coined}
      concept: say
    - form: sevor
      class: v
      field: Everyday speech
      gloss: to speak; to use speech or converse
      source: {kind: coined}
      concept: speak
    - form: velmar
      class: v
      field: Everyday speech
      gloss: to know; to possess knowledge of a fact, thing or person; an ordinary verb beside velmuz, knowledge
      source: {kind: coined}
      concept: know
    - form: velmor
      class: v
      field: Everyday speech
      gloss: to think; to consider a matter or form a thought
      source: {kind: coined}
      concept: think
    - form: ravzem
      class: v
      field: Everyday speech
      gloss: to want; to desire the object or stated act
      source: {kind: coined}
      concept: want
    - form: narvaz
      class: v
      field: Everyday speech
      gloss: to live; to be alive, or dwell in a named place
      source: {kind: coined}
      concept: live
    - form: novem
      class: v
      field: Everyday speech
      gloss: to die; to cease being alive
      source: {kind: coined}
      concept: die
    - form: pavram
      class: v
      field: Everyday speech
      gloss: to walk
      source: {kind: coined}
      concept: walk
    - form: pavrav
      class: v
      field: Everyday speech
      gloss: to run
      source: {kind: coined}
      concept: run
    - form: sedem
      class: v
      field: Everyday speech
      gloss: to sit
      source: {kind: coined}
      concept: sit
    - form: seder
      class: v
      field: Everyday speech
      gloss: to stand
      source: {kind: coined}
      concept: stand
    - form: sevad
      class: v
      field: Everyday speech
      gloss: to lie down
      source: {kind: coined}
      concept: lie-down
    - form: varev
      class: v
      field: Everyday speech
      gloss: to hold
      source: {kind: coined}
      concept: hold
    - form: dovram
      class: v
      field: Everyday speech
      gloss: "to bring; to carry the object toward the named recipient or place: vev dolvar ed tesh dovram, I bring you a cup"
      source: {kind: coined}
      concept: bring
    - form: dovlem
      class: v
      field: Everyday speech
      gloss: to put; to place the object at the location introduced by ve
      source: {kind: coined}
      concept: put
    - form: zervam
      class: v
      field: Everyday speech
      gloss: to find
      source: {kind: coined}
      concept: find
    - form: zervem
      class: v
      field: Everyday speech
      gloss: to lose
      source: {kind: coined}
      concept: lose
    - form: gholvam
      class: v
      field: Everyday speech
      gloss: to open
      source: {kind: coined}
      concept: open
    - form: gholmaz
      class: v
      field: Everyday speech
      gloss: to close
      source: {kind: coined}
      concept: close
    - form: tarvem
      class: v
      field: Everyday speech
      gloss: to begin
      source: {kind: coined}
      concept: begin
    - form: tarvaz
      class: v
      field: Everyday speech
      gloss: to end
      source: {kind: coined}
      concept: end
    - form: veram
      class: v
      field: Everyday speech
      gloss: "to exist; to have actual being, whether here or elsewhere: gharven veram, a house exists"
      source: {kind: coined}
      concept: exist
    - form: varnav
      class: v
      field: Everyday speech
      gloss: "to belong; the thing comes first and the owner follows ed: dolvar ed vev varnav, the cup belongs to me"
      source: {kind: coined}
      concept: belong
    - form: voren
      class: v
      field: Everyday speech
      gloss: to become; to enter the condition stated before the verb
      source: {kind: coined}
      concept: become
    - form: sevrem
      class: v
      field: Everyday speech
      gloss: to remain
      source: {kind: coined}
      concept: remain
    - form: ravem
      class: v
      field: Everyday speech
      gloss: to leave; to depart from the person or place introduced by vosh
      source: {kind: coined}
      concept: leave
    - form: revaram
      class: v
      field: Everyday speech
      gloss: to arrive; to reach the destination introduced by ed
      source: {kind: coined}
      concept: arrive
    - form: pavrim
      class: v
      field: Everyday speech
      gloss: to crawl
      source: {kind: coined}
      concept: crawl
    - form: pavrand
      class: v
      field: Everyday speech
      gloss: to climb
      source: {kind: coined}
      concept: climb
    - form: pavraz
      class: v
      field: Everyday speech
      gloss: to jump
      source: {kind: coined}
      concept: jump
    - form: pavrem
      class: v
      field: Everyday speech
      gloss: to fall
      source: {kind: coined}
      concept: fall
    - form: sedvan
      class: v
      field: Everyday speech
      gloss: to rise
      source: {kind: coined}
      concept: rise
    - form: gholvaz
      class: v
      field: Everyday speech
      gloss: to enter
      source: {kind: coined}
      concept: enter
    - form: gholrav
      class: v
      field: Everyday speech
      gloss: to exit
      source: {kind: coined}
      concept: exit
    - form: revram
      class: v
      field: Everyday speech
      gloss: to return
      source: {kind: coined}
      concept: return
    - form: vadek
      class: v
      field: Everyday speech
      gloss: to follow; to move after or be guided by someone; an individually coined ordinary citation beside the bound vaduk-
      source: {kind: coined}
      concept: follow
    - form: vadam
      class: v
      field: Everyday speech
      gloss: to lead
      source: {kind: coined}
      concept: lead
    - form: dovrem
      class: v
      field: Everyday speech
      gloss: to carry
      source: {kind: coined}
      concept: carry
    - form: dorvem
      class: v
      field: Everyday speech
      gloss: to move; to change position or cause the object to change position
      source: {kind: coined}
      concept: move
    - form: dolrav
      class: v
      field: Everyday speech
      gloss: to push
      source: {kind: coined}
      concept: push
    - form: dolrev
      class: v
      field: Everyday speech
      gloss: to pull
      source: {kind: coined}
      concept: pull
    - form: dolrand
      class: v
      field: Everyday speech
      gloss: to lift
      source: {kind: coined}
      concept: lift
    - form: dolraz
      class: v
      field: Everyday speech
      gloss: to drop; to let the named object fall from one's grasp or support
      source: {kind: coined}
      concept: drop
    - form: qervem
      class: v
      field: Everyday speech
      gloss: to throw
      source: {kind: coined}
      concept: throw
    - form: qavrand
      class: v
      field: Everyday speech
      gloss: to catch; to take and retain an offered or moving object, including one tossed through the air
      source: {kind: coined}
      concept: catch
    - form: qarvem
      class: v
      field: Everyday speech
      gloss: to build; to construct the named thing, including a wall, tent or house
      source: {kind: coined}
      concept: build
    - form: qervaz
      class: v
      field: Everyday speech
      gloss: to break
      source: {kind: coined}
      concept: break
    - form: qervash
      class: v
      field: Everyday speech
      gloss: to destroy; to ruin a thing beyond its continued use or restoration
      source: {kind: coined}
      concept: destroy
    - form: qervad
      class: v
      field: Everyday speech
      gloss: to repair
      source: {kind: coined}
      concept: repair
    - form: dovmar
      class: v
      field: Everyday speech
      gloss: to change
      source: {kind: coined}
      concept: change-verb
    - form: sevrav
      class: v
      field: Everyday speech
      gloss: to tell; to give an account to the person introduced by ed
      source: {kind: coined}
      concept: tell
    - form: sevraz
      class: v
      field: Everyday speech
      gloss: to ask; to request an answer about the object or following question
      source: {kind: coined}
      concept: ask
    - form: sevramav
      class: v
      field: Everyday speech
      gloss: to answer
      source: {kind: coined}
      concept: answer
    - form: sevardam
      class: v
      field: Everyday speech
      gloss: to call; to summon someone or address them by name
      source: {kind: coined}
      concept: call
    - form: or sevar shevash sevor
      class: v
      field: Everyday speech
      gloss: "to shout; to speak in a loud voice: vev or sevar shevash sevor, I shout"
      source: {kind: coined}
      concept: shout
    - form: sevrim
      class: v
      field: Everyday speech
      gloss: to whisper; to speak with a breathy unvoiced sound, not merely speak softly
      source: {kind: coined}
      concept: whisper
    - form: velmaz
      class: v
      field: Everyday speech
      gloss: to explain
      source: {kind: coined}
      concept: explain
    - form: varnem
      class: v
      field: Everyday speech
      gloss: to name; to give or use a name for someone or something
      source: {kind: coined}
      concept: name-verb
    - form: revnam
      class: v
      field: Everyday speech
      gloss: to believe; to accept the stated claim as true
      source: {kind: coined}
      concept: believe
    - form: velvam
      class: v
      field: Everyday speech
      gloss: to understand
      source: {kind: coined}
      concept: understand
    - form: velvem
      class: v
      field: Everyday speech
      gloss: to remember
      source: {kind: coined}
      concept: remember
    - form: velvaz
      class: v
      field: Everyday speech
      gloss: to forget
      source: {kind: coined}
      concept: forget
    - form: hamelun
      class: v
      field: Everyday speech
      gloss: to learn; an independently cited ordinary present verb beside the bound learning stem hamel-
      source: {kind: coined}
      concept: learn
    - form: hamevar
      class: v
      field: Everyday speech
      gloss: to teach
      source: {kind: coined}
      concept: teach
    - form: revnem
      class: v
      field: Everyday speech
      gloss: to decide
      source: {kind: coined}
      concept: decide
    - form: velvash
      class: v
      field: Everyday speech
      gloss: to imagine
      source: {kind: coined}
      concept: imagine
    - form: ravnem
      class: v
      field: Everyday speech
      gloss: to need
      source: {kind: coined}
      concept: need-verb
    - form: ravnash
      class: v
      field: Everyday speech
      gloss: to wish
      source: {kind: coined}
      concept: wish-verb
    - form: navremav
      class: v
      field: Everyday speech
      gloss: to hope
      source: {kind: coined}
      concept: hope-verb
    - form: davrem
      class: v
      field: Everyday speech
      gloss: to intend
      source: {kind: coined}
      concept: intend
    - form: revnav
      class: v
      field: Everyday speech
      gloss: to choose
      source: {kind: coined}
      concept: choose
    - form: revnad
      class: v
      field: Everyday speech
      gloss: to prefer
      source: {kind: coined}
      concept: prefer
    - form: tavnem
      class: v
      field: Everyday speech
      gloss: to try
      source: {kind: coined}
      concept: try
    - form: zernav
      class: v
      field: Everyday speech
      gloss: to search
      source: {kind: coined}
      concept: search
    - form: revnar
      class: v
      field: Everyday speech
      gloss: to meet
      source: {kind: coined}
      concept: meet
    - form: ghovem
      class: v
      field: Everyday speech
      gloss: to help
      source: {kind: coined}
      concept: help
    - form: tevam
      class: v
      field: Everyday speech
      gloss: to share
      source: {kind: coined}
      concept: share
    - form: dover
      class: v
      field: Everyday speech
      gloss: to trade
      source: {kind: coined}
      concept: trade
    - form: dovrav
      class: v
      field: Everyday speech
      gloss: to buy
      source: {kind: coined}
      concept: buy
    - form: dovrev
      class: v
      field: Everyday speech
      gloss: to sell
      source: {kind: coined}
      concept: sell
    - form: revdam
      class: v
      field: Everyday speech
      gloss: to promise; to undertake an act or give an assurance to someone
      source: {kind: coined}
      concept: promise-verb
    - form: ramevar
      class: v
      field: Everyday speech
      gloss: to thank
      source: {kind: coined}
      concept: thank-verb
    - form: ravmash
      class: v
      field: Everyday speech
      gloss: to forgive; to release blame or a claim against someone, without requiring repayment
      source: {kind: coined}
      concept: forgive-verb
    - form: nevmash
      class: v
      field: Everyday speech
      gloss: to refuse
      source: {kind: coined}
      concept: refuse-verb
    - form: revdem
      class: v
      field: Everyday speech
      gloss: to agree
      source: {kind: coined}
      concept: agree-verb
    - form: qavresh
      class: v
      field: Everyday speech
      gloss: to fight
      source: {kind: coined}
      concept: fight
    - form: qavrem
      class: v
      field: Everyday speech
      gloss: to hit
      source: {kind: coined}
      concept: hit
    - form: qavraz
      class: v
      field: Everyday speech
      gloss: to kill; to cause the death of the named living being
      source: {kind: coined}
      concept: kill
    - form: gholvem
      class: v
      field: Everyday speech
      gloss: to defend; to guard someone or something against harm
      source: {kind: coined}
      concept: defend
    - form: qavrosh
      class: v
      field: Everyday speech
      gloss: to attack
      source: {kind: coined}
      concept: attack
    - form: ravnez
      class: v
      field: Everyday speech
      gloss: to flee; to escape from the danger or pursuer introduced by vosh
      source: {kind: coined}
      concept: flee
    - form: navraz
      class: v
      field: Everyday speech
      gloss: to threaten; to communicate one's own intention or power to cause harm, rather than merely warn of another danger
      source: {kind: coined}
      concept: threaten
    - form: sedvez
      class: v
      field: Everyday speech
      gloss: to stop
      source: {kind: coined}
      concept: stop
    - form: sevardem
      class: v
      field: Everyday speech
      gloss: to continue
      source: {kind: coined}
      concept: continue
    - form: sevnem
      class: v
      field: Everyday speech
      gloss: to wait
      source: {kind: coined}
      concept: wait
    - form: tavrev
      class: v
      field: Everyday speech
      gloss: to happen
      source: {kind: coined}
      concept: happen
    - form: pavred
      class: v
      field: Everyday speech
      gloss: to kneel
      source: {kind: coined}
      concept: kneel
    - form: mervem
      class: v
      field: Everyday speech
      gloss: to bend
      source: {kind: coined}
      concept: bend
    - form: mervaz
      class: v
      field: Everyday speech
      gloss: to lean
      source: {kind: coined}
      concept: lean
    - form: shavrem
      class: v
      field: Everyday speech
      gloss: to cover
      source: {kind: coined}
      concept: cover-verb
    - form: shavrav
      class: v
      field: Everyday speech
      gloss: to uncover
      source: {kind: coined}
      concept: uncover
    - form: zernem
      class: v
      field: Everyday speech
      gloss: to hide
      source: {kind: coined}
      concept: hide
    - form: zernad
      class: v
      field: Everyday speech
      gloss: to reveal
      source: {kind: coined}
      concept: reveal
    - form: qervesh
      class: v
      field: Everyday speech
      gloss: to lock
      source: {kind: coined}
      concept: lock-verb
    - form: qervish
      class: v
      field: Everyday speech
      gloss: to unlock
      source: {kind: coined}
      concept: unlock
    - form: hev
      class: adv
      field: Everyday speech
      gloss: here; at the speaker's location
      source: {kind: coined}
      concept: here
    - form: hevoz
      class: adv
      field: Everyday speech
      gloss: there; at the indicated other location
      source: {kind: coined}
      concept: there
    - form: ve dazvar zemun
      class: part
      field: Everyday speech
      gloss: somewhere; at some unspecified place
      source: {kind: coined}
      concept: somewhere
    - form: ve dazvar nevan
      class: part
      field: Everyday speech
      gloss: nowhere; at no place in the stated scope
      source: {kind: coined}
      concept: nowhere
    - form: ve dazvar zevand
      class: part
      field: Everyday speech
      gloss: everywhere; at every place in the stated scope
      source: {kind: coined}
      concept: everywhere
    - form: ravov
      class: part
      field: Everyday speech
      gloss: far from; distant from the named reference point
      source: {kind: coined}
      concept: far
    - form: marvev
      class: part
      field: Everyday speech
      gloss: beside; at the side of the following person or thing
      source: {kind: coined}
      concept: beside
    - form: davmar
      class: part
      field: Everyday speech
      gloss: between; in the interval separating the two named reference points
      source: {kind: coined}
      concept: between
    - form: davnar
      class: part
      field: Everyday speech
      gloss: among; within the following group or collection
      source: {kind: coined}
      concept: among
    - form: zaver
      class: part
      field: Everyday speech
      gloss: above; higher than the following reference point
      source: {kind: coined}
      concept: above
    - form: norav
      class: part
      field: Everyday speech
      gloss: under; beneath the following object, including where it covers the subject
      source: {kind: coined}
      concept: under
    - form: zaverar
      class: part
      field: Everyday speech
      gloss: over; above and across the following object or area
      source: {kind: coined}
      concept: over
    - form: or gharven
      class: part
      field: Everyday speech
      gloss: inside the house; replace gharven with the place or container whose interior is meant
      source: {kind: coined}
      concept: inside
    - form: noveram
      class: part
      field: Everyday speech
      gloss: outside; external to the following place or container
      source: {kind: coined}
      concept: outside
    - form: revarav
      class: part
      field: Everyday speech
      gloss: beyond; on the farther side of the following limit
      source: {kind: coined}
      concept: beyond
    - form: zavmar
      class: part
      field: Everyday speech
      gloss: in front of; at the front side of the following object or person
      source: {kind: coined}
      concept: before-spatial
    - form: novmar
      class: part
      field: Everyday speech
      gloss: behind; at the rear of the following object or person
      source: {kind: coined}
      concept: behind
    - form: meravish
      class: n
      field: Everyday speech
      gloss: the left side or leftward direction
      source: {kind: coined}
      concept: left-direction
    - form: meravash
      class: n
      field: Everyday speech
      gloss: the right side or rightward direction
      source: {kind: coined}
      concept: right-direction
    - form: davram
      class: n
      field: Everyday speech
      gloss: center
      source: {kind: coined}
      concept: center
    - form: zavemav
      class: adv
      field: Everyday speech
      gloss: up; toward a higher position, with the destination named when needed
      source: {kind: coined}
      concept: up
    - form: novirem
      class: adv
      field: Everyday speech
      gloss: down; toward a lower position, with the destination named when needed
      source: {kind: coined}
      concept: down
    - form: zavmarav
      class: adv
      field: Everyday speech
      gloss: forward; toward the front relative to the stated viewpoint
      source: {kind: coined}
      concept: forward
    - form: novmarav
      class: adv
      field: Everyday speech
      gloss: backward; toward the rear relative to the stated viewpoint
      source: {kind: coined}
      concept: backward
    - form: vosh hev
      class: part
      field: Everyday speech
      gloss: away; away from here; replace hev by a named reference point when needed
      source: {kind: coined}
      concept: away
    - form: dovraz
      class: part
      field: Everyday speech
      gloss: through; by way of the interior or an opening in the following object
      source: {kind: coined}
      concept: through
    - form: dovrash
      class: part
      field: Everyday speech
      gloss: across; from one side to another of the following surface or area
      source: {kind: coined}
      concept: across
    - form: davrosh
      class: part
      field: Everyday speech
      gloss: around; surrounding or taking a route about the following thing
      source: {kind: coined}
      concept: around
    - form: shev
      class: part
      field: Everyday speech
      gloss: on; in contact with or supported by the following surface
      source: {kind: coined}
      concept: on
    - form: dazvar
      class: n
      field: Everyday speech
      gloss: a place; a location, whether or not occupied by a settlement
      source: {kind: coined}
      concept: place-noun
    - form: ravren
      class: n
      field: Everyday speech
      gloss: direction
      source: {kind: coined}
      concept: direction
    - form: ravevar
      class: n
      field: Everyday speech
      gloss: distance
      source: {kind: coined}
      concept: distance
    - form: novam
      class: n
      field: Everyday speech
      gloss: time
      source: {kind: coined}
      concept: time
    - form: novim
      class: n
      field: Everyday speech
      gloss: moment
      source: {kind: coined}
      concept: moment
    - form: nemram
      class: n
      field: Everyday speech
      gloss: day
      source: {kind: coined}
      concept: day
    - form: qazvar
      class: n
      field: Everyday speech
      gloss: night
      source: {kind: coined}
      concept: night
    - form: nemarem
      class: n
      field: Everyday speech
      gloss: morning
      source: {kind: coined}
      concept: morning
    - form: nemaram
      class: n
      field: Everyday speech
      gloss: noon
      source: {kind: coined}
      concept: noon
    - form: nemovar
      class: n
      field: Everyday speech
      gloss: evening
      source: {kind: coined}
      concept: evening
    - form: davram re qazvar
      class: n
      field: Everyday speech
      gloss: midnight; the middle of the night, without requiring a precise clock
      source: {kind: coined}
      concept: midnight
    - form: novav
      class: adv
      field: Everyday speech
      gloss: now
      source: {kind: coined}
      concept: now
    - form: novaz
      class: adv
      field: Everyday speech
      gloss: then
      source: {kind: coined}
      concept: then
    - form: nemram re novav
      class: n
      field: Everyday speech
      gloss: today; the day containing now
      source: {kind: coined}
      concept: today
    - form: nemram novan nemram re novav
      class: n
      field: Everyday speech
      gloss: yesterday; the day immediately before today
      source: {kind: coined}
      concept: yesterday
    - form: nemram nevor nemram re novav
      class: n
      field: Everyday speech
      gloss: tomorrow; the day immediately after today
      source: {kind: coined}
      concept: tomorrow
    - form: novam novan novav
      class: n
      field: Everyday speech
      gloss: the past; time before now
      source: {kind: coined}
      concept: past
    - form: novam re novav
      class: n
      field: Everyday speech
      gloss: the present; time at now
      source: {kind: coined}
      concept: present
    - form: novam nevor novav
      class: n
      field: Everyday speech
      gloss: the future; time after now
      source: {kind: coined}
      concept: future
    - form: novan
      class: part
      field: Everyday speech
      gloss: before in time; precedes the following named time or event
      source: {kind: coined}
      concept: before-time
    - form: nevor
      class: part
      field: Everyday speech
      gloss: after in time; follows the named time or event
      source: {kind: coined}
      concept: after
    - form: or novam re sevvar
      class: part
      field: Everyday speech
      gloss: during a performance; replace sevvar by the named event, as in or novam re marzhan, during the birth
      source: {kind: coined}
      concept: during
    - form: or novam re tovaram re vev
      class: part
      field: Everyday speech
      gloss: while I eat; during the time of my eating; replace tovaram re vev by another named simultaneous activity
      source: {kind: coined}
      concept: while
    - form: nevrad
      class: part
      field: Everyday speech
      gloss: until; up to the named time or event, as in nevrad marzhan, until the birth
      source: {kind: coined}
      concept: until
    - form: vosh novam re marzhan
      class: part
      field: Everyday speech
      gloss: since the birth; from the birth as starting event continuing to the reference time; replace marzhan by the actual starting event
      source: {kind: coined}
      concept: since-time
    - form: ve novren zevand
      class: part
      field: Everyday speech
      gloss: always; on every occasion in the stated period
      source: {kind: coined}
      concept: always
    - form: ve novren tavram
      class: part
      field: Everyday speech
      gloss: [often; on many occasions, repeatedly; on many occasions]
      source: {kind: coined}
      concept: [often, repeatedly]
    - form: ve novren zemun
      class: part
      field: Everyday speech
      gloss: sometimes; on some occasions
      source: {kind: coined}
      concept: sometimes
    - form: ve novren tavrim
      class: part
      field: Everyday speech
      gloss: rarely; on few occasions
      source: {kind: coined}
      concept: rarely
    - form: ve novren nevan
      class: part
      field: Everyday speech
      gloss: never; on no occasion in the stated period
      source: {kind: coined}
      concept: never
    - form: novrand
      class: adj
      field: Everyday speech
      gloss: lasting a long time
      source: {kind: coined}
      concept: long-duration
    - form: novrind
      class: adj
      field: Everyday speech
      gloss: lasting a short time
      source: {kind: coined}
      concept: short-duration
    - form: novrind ghavor
      class: adj
      field: Everyday speech
      gloss: brief; extremely short in duration
      source: {kind: coined}
      concept: brief-duration
    - form: reva
      class: adv
      field: Everyday speech
      gloss:
        - again; once more, marking recurrence rather than a counted occasion
        - again; used alone as a request to repeat the act or utterance just made
      source: {kind: coined}
      concept: [again, expression-again]
    - form: ve novren zavem
      class: part
      field: Everyday speech
      gloss: once; on one occasion
      source: {kind: coined}
      concept: once
    - form: ve novren dovam
      class: part
      field: Everyday speech
      gloss: twice; on two occasions
      source: {kind: coined}
      concept: twice
    - form: vev tamvem tarvaz
      class: v
      field: Everyday speech
      gloss: I have already done it; the named act has finished before the reference point; replace vev and the named action tamvem for another actor or completed act
      source: {kind: coined}
      concept: already
    - form: vev tamvem sevardem
      class: v
      field: Everyday speech
      gloss: I am still doing it; the named action continues at the reference point
      source: {kind: coined}
      concept: still
    - form: vev tamvem vez tarvaz
      class: v
      field: Everyday speech
      gloss: I have not done it yet; an expected completion has not occurred at the reference point
      source: {kind: coined}
      concept: yet
    - form: ve novam ravev novav
      class: part
      field: Everyday speech
      gloss: soon; at a time close after now, looking forward from the present
      source: {kind: coined}
      concept: soon
    - form: ve novam nevor novav
      class: part
      field: Everyday speech
      gloss: later; at a time after the present reference point
      source: {kind: coined}
      concept: later
    - form: novan novam qevam
      class: part
      field: Everyday speech
      gloss: early; before the expected or suitable time
      source: {kind: coined}
      concept: early
    - form: nevor novam qevam
      class: part
      field: Everyday speech
      gloss: late; after the expected or suitable time
      source: {kind: coined}
      concept: late
    - form: ve novren zavmer
      class: part
      field: Everyday speech
      gloss: first in a sequence of events; on the first occasion
      source: {kind: coined}
      concept: first-sequence
    - form: ve novren dovmer
      class: part
      field: Everyday speech
      gloss: next; on the following occasion, conventionally the second relative to the current one
      source: {kind: coined}
      concept: next
    - form: tarvand
      class: adj
      field: Everyday speech
      gloss: last; final in the relevant ordered sequence
      source: {kind: coined}
      concept: last
    - form: ve novren tarvand
      class: part
      field: Everyday speech
      gloss: finally; on the final occasion, at the end of the event sequence
      source: {kind: coined}
      concept: finally
    - form: nemrash
      class: n
      field: Everyday speech
      gloss: season
      source: {kind: coined}
      concept: season
    - form: nemrand
      class: n
      field: Everyday speech
      gloss: year
      source: {kind: coined}
      concept: year
    - form: nemrav
      class: n
      field: Everyday speech
      gloss: month
      source: {kind: coined}
      concept: month
    - form: nemavem
      class: n
      field: Everyday speech
      gloss: dawn
      source: {kind: coined}
      concept: dawn
    - form: nemavash
      class: n
      field: Everyday speech
      gloss: dusk
      source: {kind: coined}
      concept: dusk
    - form: novren
      class: n
      field: Everyday speech
      gloss: an occasion; one occurrence of an event, distinct from time as a whole
      source: {kind: coined}
    - form: sevvar
      class: n
      field: Everyday speech
      gloss: a performance; an enactment or public presentation, including a recitation
      source: {kind: coined}
    - form: tovaram
      class: n
      field: Everyday speech
      gloss: eating; the activity of consuming food, an individual action noun beside tovem
      source: {kind: coined}
    - form: ghavor
      class: adv
      field: Everyday speech
      gloss: extremely; marks a very high degree in navord ghavor, extremely big, and naverim ghavor, extremely small
      source: {kind: coined}
      concept: extremely
    - form: re vev
      class: part
      field: Everyday speech
      gloss: "my; mine; belonging to me: dolvar re vev, my cup"
      source: {kind: coined}
      concept: my
    - form: re tesh
      class: part
      field: Everyday speech
      gloss: "your; yours; belonging to the person addressed: dolvar re tesh, your cup"
      source: {kind: coined}
      concept: your
    - form: re vazun
      class: part
      field: Everyday speech
      gloss: our; ours; belonging to the speaker and others
      source: {kind: coined}
      concept: our
    - form: evam
      class: dem
      field: Everyday speech
      gloss: This
      source: {kind: coined}
      concept: this
    - form: evor
      class: dem
      field: Everyday speech
      gloss: that
      source: {kind: coined}
      concept: that
    - form: evamun
      class: dem
      field: Everyday speech
      gloss: these
      source: {kind: coined}
      concept: these
    - form: evorun
      class: dem
      field: Everyday speech
      gloss: those
      source: {kind: coined}
      concept: those
    - form: narav zemun
      class: n
      field: Everyday speech
      gloss: someone; an unspecified person
      source: {kind: coined}
      concept: someone
    - form: narav zelem
      class: n
      field: Everyday speech
      gloss: anyone; any person without restriction of identity in a question, permission or general statement
      source: {kind: coined}
      concept: anyone
    - form: narav zevand
      class: n
      field: Everyday speech
      gloss: everyone; all people within the stated scope
      source: {kind: coined}
      concept: everyone
    - form: narav nevan
      class: n
      field: Everyday speech
      gloss: no one; no person in the stated scope
      source: {kind: coined}
      concept: no-one
    - form: temvar zemun
      class: n
      field: Everyday speech
      gloss: something; an unspecified thing
      source: {kind: coined}
      concept: something
    - form: temvar zelem
      class: n
      field: Everyday speech
      gloss: anything; any thing without restriction of identity in a question, permission or general statement
      source: {kind: coined}
      concept: anything
    - form: temvar zevand
      class: n
      field: Everyday speech
      gloss: everything; all things within the stated scope
      source: {kind: coined}
      concept: everything
    - form: qev
      class: pron
      field: Everyday speech
      gloss: "oneself; reflexive object tied to its clause's subject: vev qev zarem, I see myself; yesh qev zarem, she sees herself"
      source: {kind: coined}
      concept: self
    - form: zavem levar
      class: n
      field: Everyday speech
      gloss: another; one further or different member of the kind already under discussion
      source: {kind: coined}
      concept: another
    - form: qevav
      class: adj
      field: Everyday speech
      gloss: Same
      source: {kind: coined}
      concept: same
    - form: vez qevav
      class: adj
      field: Everyday speech
      gloss: different; not the same in identity or the stated respect
      source: {kind: coined}
      concept: different
    - form: yev
      class: pron
      field: Everyday speech
      gloss: who; asks for a person's identity, as in yev revem, who comes
      source: {kind: coined}
      concept: question-who
    - form: yem
      class: pron
      field: Everyday speech
      gloss:
        - what; asks for a thing or matter, as in tesh yem zarem, what do you see
        - what; used alone as a conversational question when the missing thing or content is recoverable
      source: {kind: coined}
      concept: [question-what, expression-what]
    - form: yer
      class: dem
      field: Everyday speech
      gloss: "which; asks the hearer to select a member of a known set: dolvar yer, which cup"
      source: {kind: coined}
      concept: question-which
    - form: ve yem dazvar
      class: part
      field: Everyday speech
      gloss: "where; at what place: gharven ve yem dazvar veram, where is there a house"
      source: {kind: coined}
      concept: question-where
    - form: ve yem novam
      class: part
      field: Everyday speech
      gloss: "when; at what time: tesh ve yem novam revem, when do you come"
      source: {kind: coined}
      concept: question-when
    - form: ed raverd re yem
      class: part
      field: Everyday speech
      gloss: "why; for what reason: tesh ed raverd re yem ravrez, why do you go"
      source: {kind: coined}
      concept: question-why
    - form: ar yem raver
      class: part
      field: Everyday speech
      gloss: "how; by what manner: tesh gharven ar yem raver qarvem, how do you build a house"
      source: {kind: coined}
      concept: question-how
    - form: tavren re dolvar yem vorem
      class: v
      field: Everyday speech
      gloss: "how many cups; what is the count of cups: tavren re dolvar yem vorem; replace dolvar with the counted thing"
      source: {kind: coined}
      concept: question-how-many
    - form: tavrem re ghavar yem vorem
      class: v
      field: Everyday speech
      gloss: "how much water; what is the amount of water: tavrem re ghavar yem vorem; replace ghavar by the measured substance"
      source: {kind: coined}
      concept: question-how-much
    - form: re yev
      class: part
      field: Everyday speech
      gloss: "whose; belonging to whom: dolvar re yev vorem, whose is the cup"
      source: {kind: coined}
      concept: question-whose
    - form: ed yev
      class: part
      field: Everyday speech
      gloss: "to whom: tesh dolvar ed yev dovem, to whom do you give a cup"
      source: {kind: coined}
      concept: question-to-whom
    - form: vosh yem dazvar
      class: part
      field: Everyday speech
      gloss: "from where: tesh vosh yem dazvar revem, from where do you come"
      source: {kind: coined}
      concept: question-from-where
    - form: ed yem davrun
      class: part
      field: Everyday speech
      gloss: "for what purpose: tesh gharven ed yem davrun qarvem, for what purpose do you build a house"
      source: {kind: coined}
      concept: question-for-what-purpose
    - form: tesh vem zarem
      class: v
      field: Everyday speech
      gloss: do you see it; the complete SOV clause is asked with the rising question pitch already used in Dunhari; replace its subject, object and present verb for another yes or no question
      source: {kind: coined}
      concept: question-polar
    - form: tesh yem sevaz
      class: v
      field: Everyday speech
      gloss: what do you say; asked with rising question pitch as a request to clarify or repeat the current utterance
      source: {kind: coined}
      concept: question-clarification
    - form: zelem
      class: adj
      field: Everyday speech
      gloss: any; unrestricted as to the identity of the person or thing
      source: {kind: coined}
    - form: raverd
      class: n
      field: Everyday speech
      gloss: a reason; a ground explaining or supporting an action or judgement
      source: {kind: coined}
      concept: reason
    - form: raver
      class: n
      field: Everyday speech
      gloss: a manner; a way of carrying out an act
      source: {kind: coined}
    - form: davrun
      class: n
      field: Everyday speech
      gloss: a purpose; an intended end of action
      source: {kind: coined}
      concept: purpose
    - form: he
      class: call
      field: Everyday speech
      gloss: yes; an affirmative answer to the question asked
      source: {kind: coined}
      concept: yes
    - form: noz
      class: call
      field: Everyday speech
      gloss: no; a negative answer to the question asked
      source: {kind: coined}
      concept: no
    - form: revad
      class: adj
      field: Everyday speech
      gloss:
        - true; agreeing with what actually is the case, rather than merely believed firmly
        - really; said alone with the existing rising question pitch to request confirmation of the immediately preceding claim, often with surprise
      source: {kind: coined}
      concept: ["true", expression-really]
    - form: vez revad
      class: adj
      field: Everyday speech
      gloss: false; not agreeing with what actually is the case
      source: {kind: coined}
      concept: "false"
    - form: revadash
      class: n
      field: Everyday speech
      gloss: truth; what actually is the case, and the quality of a true claim
      source: {kind: coined}
      concept: truth
    - form: sevrazam
      class: n
      field: Everyday speech
      gloss: a lie; a statement made with the intention of deceiving its hearer into accepting a false account
      source: {kind: coined}
      concept: lie-noun
    - form: revamad
      class: adv
      field: Everyday speech
      gloss: "really; truly; genuinely; affirms the reality or sincerity of what is said: vev revamad lavar vorem, I am truly well"
      source: {kind: coined}
      concept: sincerity
    - form: he revamad
      class: call
      field: Everyday speech
      gloss:
        - indeed; an emphatic confirmation of what was said
        - of course; a ready and emphatic assent
      source: {kind: coined}
      concept: [indeed, of-course]
    - form: revar zevand re vev
      class: n
      field: Everyday speech
      gloss: certainly; a conventional avowal of complete personal assurance, literally my complete confidence, which does not itself make a claim true
      source: {kind: coined}
      concept: certainly
    - form: lom
      class: part
      field: Everyday speech
      gloss: perhaps; placed before a complete SOV clause to mark it as possible without asserting it
      source: {kind: coined}
      concept: perhaps
    - form: lom revard
      class: part
      field: Everyday speech
      gloss: probably; marks the following clause as more likely than its contrary
      source: {kind: coined}
      concept: probably
    - form: lom revir
      class: part
      field: Everyday speech
      gloss: unlikely; marks the following clause as improbable
      source: {kind: coined}
      concept: unlikely
    - form: revarev
      class: adj
      field: Everyday speech
      gloss: certain; subjectively assured of a claim or outcome, not necessarily correct
      source: {kind: coined}
      concept: certain
    - form: vez revarev
      class: adj
      field: Everyday speech
      gloss: uncertain; not assured of a claim or outcome
      source: {kind: coined}
      concept: uncertain
    - form: zaram re vev
      class: n
      field: Everyday speech
      gloss: apparently; the conventional qualification from what the speaker has observed, literally the sight available to me; placed before the qualified claim
      source: {kind: coined}
      concept: apparently
    - form: yazun yaz revem sevaz
      class: v
      field: Everyday speech
      gloss: supposedly he comes; they say he comes, with the complete reported clause yaz revem before sevaz; replace that inner clause to report another claim without endorsing it
      source: {kind: coined}
      concept: supposedly
    - form: or revadash
      class: part
      field: Everyday speech
      gloss: in fact; according to what actually is the case rather than an earlier appearance or supposition
      source: {kind: coined}
      concept: in-fact
    - form: revasham
      class: v
      field: Everyday speech
      gloss: to doubt; to be uncertain whether the stated claim is true
      source: {kind: coined}
      concept: doubt-verb
    - form: revsham
      class: v
      field: Everyday speech
      gloss: to suspect; to consider a claim possible on limited grounds, whether welcome or unwelcome
      source: {kind: coined}
      concept: suspect
    - form: revnaz
      class: v
      field: Everyday speech
      gloss: to guess; to offer a conclusion without enough information to know
      source: {kind: coined}
      concept: guess-verb
    - form: revmav
      class: v
      field: Everyday speech
      gloss: to assume; to take a claim as a starting point without first establishing it
      source: {kind: coined}
      concept: assume-verb
    - form: reved
      class: adj
      field: Everyday speech
      gloss: correct; free from error in the stated task or account
      source: {kind: coined}
      concept: correct
    - form: vez reved
      class: adj
      field: Everyday speech
      gloss: incorrect; containing an error
      source: {kind: coined}
      concept: incorrect
    - form: vez revdem
      class: v
      field: Everyday speech
      gloss: to disagree; to withhold assent to the stated claim, rather than assert that two people jointly lack a belief
      source: {kind: coined}
      concept: disagree
    - form: sevrad vez revad
      class: n
      field: Everyday speech
      gloss: a falsehood; a false claim, whether intentional or mistaken
      source: {kind: coined}
      concept: falsehood
    - form: ev yesh vez revem
      class: conj
      field: Everyday speech
      gloss: "nor does she come; adds a denied alternative after a negative clause: yaz vez revem ev yesh vez revem, he does not come nor does she"
      source: {kind: coined}
      concept: nor
    - form: gharam
      class: conj
      field: Everyday speech
      gloss: because; introduces the complete clause giving a reason
      source: {kind: coined}
      concept: because
    - form: gharav
      class: conj
      field: Everyday speech
      gloss: therefore; introduces a complete clause as a consequence of the preceding one
      source: {kind: coined}
      concept: therefore
    - form: veva
      class: conj
      field: Everyday speech
      gloss: if; introduces the condition in veva P, daz Q, with P and Q replaced by complete SOV clauses
      source: {kind: coined}
      concept: if
    - form: daz
      class: conj
      field: Everyday speech
      gloss: then; introduces the consequence after the condition, as in veva tesh revem, daz vev ravrez, if you come then I go
      source: {kind: coined}
      concept: then-conditional
    - form: veva tesh vez revem daz vev ravrez
      class: conj
      field: Everyday speech
      gloss: unless you come, I go; if the complete condition tesh revem is false, the consequence vev ravrez follows
      source: {kind: coined}
      concept: unless
    - form: veva vem vez revad vorem daz vev ravrez
      class: conj
      field: Everyday speech
      gloss: otherwise I go; if the preceding proposition is not true, I go; vem refers back to that proposition
      source: {kind: coined}
      concept: otherwise
    - form: varmav
      class: conj
      field: Everyday speech
      gloss: although; introduces a true circumstance conceded before a contrasting main clause
      source: {kind: coined}
      concept: although
    - form: vek revamad
      class: conj
      field: Everyday speech
      gloss: however; introduces a contrasting assertion while acknowledging what precedes it
      source: {kind: coined}
      concept: however
    - form: vek daz
      class: conj
      field: Everyday speech
      gloss: nevertheless; introduces an assertion that holds despite a conceded circumstance
      source: {kind: coined}
      concept: nevertheless
    - form: novash
      class: part
      field: Everyday speech
      gloss: "despite; introduces the named obstacle or circumstance: novash navramad, despite illness"
      source: {kind: coined}
      concept: despite
    - form: ve davren re
      class: part
      field: Everyday speech
      gloss: "instead of; at the place of the named alternative: ghaver ve davren re tovav, a drink instead of food"
      source: {kind: coined}
      concept: instead
    - form: ed davrun re
      class: part
      field: Everyday speech
      gloss: "for the purpose of; names the intended end: ed davrun re dovarash, for the purpose of a gift"
      source: {kind: coined}
      concept: for-purpose
    - form: le
      class: part
      field: Everyday speech
      gloss: like; similar to the named comparison
      source: {kind: coined}
      concept: like
    - form: vez le
      class: part
      field: Everyday speech
      gloss: unlike; not similar to the named comparison
      source: {kind: coined}
      concept: unlike
    - form: le vev
      class: part
      field: Everyday speech
      gloss: "as I do; the fixed manner comparison like me follows the compared object: tesh gharven le vev qarvem, you build a house as I do"
      source: {kind: coined}
      concept: as
    - form: oz tesh revem oz vev ravrez
      class: conj
      field: Everyday speech
      gloss: either you come or I go; both alternatives are stated, each with its own subject and verb
      source: {kind: coined}
      concept: either-alternative
    - form: tesh vez revem ev vev vez ravrez
      class: conj
      field: Everyday speech
      gloss: neither you come nor I go; both complete alternatives are denied
      source: {kind: coined}
      concept: neither-alternative
    - form: ev tesh revem ev vev ravrez
      class: conj
      field: Everyday speech
      gloss: both you come and I go; both complete clauses are affirmed
      source: {kind: coined}
      concept: both-conjunction
    - form: tesh revem oz tesh vez revem
      class: conj
      field: Everyday speech
      gloss: "whether you come or do not come; supplies both alternatives under consideration: vev tesh revem oz tesh vez revem velmor, I consider whether you come or do not come"
      source: {kind: coined}
      concept: whether
    - form: vev sevaz
      class: v
      field: Everyday speech
      gloss: that is; literally I say, used before a rephrasing that clarifies the preceding expression
      source: {kind: coined}
      concept: that-is
    - form: varnamash
      class: part
      field: Everyday speech
      gloss: namely; introduces the specific names or items intended by the preceding general expression
      source: {kind: coined}
      concept: namely
    - form: navrev
      class: part
      field: Everyday speech
      gloss: for example; introduces a particular instance illustrating a preceding general statement
      source: {kind: coined}
      concept: for-example
    - form: vosh zevand nev
      class: part
      field: Everyday speech
      gloss: "except; from the whole set excluding the named member: vosh zevand nev tesh, except you"
      source: {kind: coined}
      concept: except
    - form: zav
      class: part
      field: Everyday speech
      gloss: only; limits the following item or clause to the stated one
      source: {kind: coined}
      concept: only
    - form: dazem
      class: part
      field: Everyday speech
      gloss: even; includes the following unexpected member or circumstance
      source: {kind: coined}
      concept: even
    - form: tev
      class: part
      field: Everyday speech
      gloss: also; adds the following item or clause to what has already been stated
      source: {kind: coined}
      concept: also
    - form: tevar
      class: part
      field: Everyday speech
      gloss: especially; singles out what follows as particularly relevant or prominent
      source: {kind: coined}
      concept: especially
    - form: revard
      class: adj
      field: Everyday speech
      gloss: likely; supported as probable by the present grounds
      source: {kind: coined}
    - form: revir
      class: adj
      field: Everyday speech
      gloss: improbable; not likely to occur
      source: {kind: coined}
    - form: sevrad
      class: n
      field: Everyday speech
      gloss: a claim; something asserted, whether true or false
      source: {kind: coined}
    - form: naverim
      class: adj
      field: Everyday speech
      gloss: small
      source: {kind: coined}
      concept: small
    - form: naverim ghavor
      class: adj
      field: Everyday speech
      gloss: tiny; extremely small in absolute extent, rather than merely smaller than a comparator
      source: {kind: coined}
      concept: tiny
    - form: navord ghavor
      class: adj
      field: Everyday speech
      gloss: huge; extremely big in absolute extent
      source: {kind: coined}
      concept: huge
    - form: dariv
      class: adj
      field: Everyday speech
      gloss: short in spatial length
      source: {kind: coined}
      concept: short
    - form: darom zavard
      class: adj
      field: Everyday speech
      gloss: tall; of great vertical height, including a standing person or upright thing
      source: {kind: coined}
      concept: tall
    - form: davrav
      class: adj
      field: Everyday speech
      gloss: wide
      source: {kind: coined}
      concept: wide
    - form: davriv
      class: adj
      field: Everyday speech
      gloss: narrow
      source: {kind: coined}
      concept: narrow
    - form: ghorev
      class: adj
      field: Everyday speech
      gloss: heavy
      source: {kind: coined}
      concept: heavy
    - form: ghorim
      class: adj
      field: Everyday speech
      gloss: light in weight
      source: {kind: coined}
      concept: light-weight
    - form: navev
      class: adj
      field: Everyday speech
      gloss: new
      source: {kind: coined}
      concept: new
    - form: novrem
      class: adj
      field: Everyday speech
      gloss: old; long existing, not newly made or acquired; for things rather than living age
      source: {kind: coined}
      concept: old-object
    - form: pavrev
      class: adj
      field: Everyday speech
      gloss: fast
      source: {kind: coined}
      concept: fast
    - form: pavirem
      class: adj
      field: Everyday speech
      gloss: slow
      source: {kind: coined}
      concept: slow
    - form: tamrev
      class: adj
      field: Everyday speech
      gloss: easy
      source: {kind: coined}
      concept: easy
    - form: tamriv
      class: adj
      field: Everyday speech
      gloss: difficult
      source: {kind: coined}
      concept: difficult
    - form: lavar ravar
      class: adj
      field: Everyday speech
      gloss: better; better than the stated standard introduced by zemar
      source: {kind: coined}
      concept: better
    - form: lavaz ravar
      class: adj
      field: Everyday speech
      gloss: worse; worse than the stated standard introduced by zemar
      source: {kind: coined}
      concept: worse
    - form: lavar ravar zemar temvar levar zevand
      class: adj
      field: Everyday speech
      gloss: best; better than every other member of the stated comparison set
      source: {kind: coined}
      concept: best
    - form: lavaz ravar zemar temvar levar zevand
      class: adj
      field: Everyday speech
      gloss: worst; worse than every other member of the stated comparison set
      source: {kind: coined}
      concept: worst
    - form: davaram
      class: adj
      field: Everyday speech
      gloss: important
      source: {kind: coined}
      concept: important
    - form: davarim
      class: adj
      field: Everyday speech
      gloss: trivial
      source: {kind: coined}
      concept: trivial
    - form: ravnemav
      class: adj
      field: Everyday speech
      gloss: necessary; needed for the stated purpose or circumstance
      source: {kind: coined}
      concept: necessary
    - form: dorvar
      class: adj
      field: Everyday speech
      gloss: valuable
      source: {kind: coined}
      concept: valuable
    - form: re dorevam nevam
      class: part
      field: Everyday speech
      gloss: "worthless; of zero worth: temvar re dorevam nevam vorem, the thing is of no worth; nevam is zero, not merely a small amount"
      source: {kind: coined}
      concept: worthless
    - form: tamvard
      class: adj
      field: Everyday speech
      gloss: useful
      source: {kind: coined}
      concept: useful
    - form: vez tamvard
      class: adj
      field: Everyday speech
      gloss: useless
      source: {kind: coined}
      concept: useless
    - form: qervav
      class: adj
      field: Everyday speech
      gloss: broken
      source: {kind: coined}
      concept: broken
    - form: tarvav
      class: adj
      field: Everyday speech
      gloss: complete; lacking no required part, distinct from a promise or feud merely being settled
      source: {kind: coined}
      concept: complete
    - form: vez tarvav
      class: adj
      field: Everyday speech
      gloss: incomplete
      source: {kind: coined}
      concept: incomplete
    - form: sevrev
      class: adj
      field: Everyday speech
      gloss: honest; sincere and unwilling to deceive, without requiring every statement to be factually correct
      source: {kind: coined}
      concept: honest
    - form: sevrosh
      class: adj
      field: Everyday speech
      gloss: dishonest; willing to deceive, rather than merely mistaken
      source: {kind: coined}
      concept: dishonest
    - form: ghev
      class: adv
      field: Everyday speech
      gloss: very; intensifies a quality in naverim ghev, very small
      source: {kind: coined}
      concept: very
    - form: zemim
      class: adv
      field: Everyday speech
      gloss: somewhat
      source: {kind: coined}
      concept: somewhat
    - form: zemiv
      class: adv
      field: Everyday speech
      gloss: slightly
      source: {kind: coined}
      concept: slightly
    - form: qevim
      class: adv
      field: Everyday speech
      gloss: barely; only just at the threshold of the stated quality or act
      source: {kind: coined}
      concept: barely
    - form: ravar zemar tavrem qevam
      class: adj
      field: Everyday speech
      gloss: too much; more than the sufficient amount for the stated need or purpose
      source: {kind: coined}
      concept: too-much
    - form: vez qevam
      class: adj
      field: Everyday speech
      gloss: too little; insufficient for the stated need
      source: {kind: coined}
      concept: too-little
    - form: lemav
      class: adj
      field: Everyday speech
      gloss: similar
      source: {kind: coined}
      concept: similar
    - form: lemir
      class: adj
      field: Everyday speech
      gloss: opposite
      source: {kind: coined}
      concept: opposite
    - form: dorevam
      class: n
      field: Everyday speech
      gloss: worth; the value attributed to a thing or act
      source: {kind: coined}
    - form: dovner
      class: v
      field: Everyday speech
      gloss: "can; be able to perform the named action: vev pavram dovner, I can walk, with the action before the modal predicate"
      source: {kind: coined}
      concept: can
    - form: vez dovner
      class: v
      field: Everyday speech
      gloss: "cannot; lack ability to perform the named action: vev pavram vez dovner, I cannot walk"
      source: {kind: coined}
      concept: cannot
    - form: dovnav
      class: adj
      field: Everyday speech
      gloss: possible; able to occur under the circumstances
      source: {kind: coined}
      concept: possible
    - form: vez dovnav
      class: adj
      field: Everyday speech
      gloss: impossible
      source: {kind: coined}
      concept: impossible
    - form: levem
      class: v
      field: Everyday speech
      gloss: "may; have permission to perform the named action: tesh ravrez levem, you may go"
      source: {kind: coined}
      concept: may-permission
    - form: lom yaz revem
      class: part
      field: Everyday speech
      gloss: he might come; the event is possible; replace the complete SOV clause yaz revem to qualify another event
      source: {kind: coined}
      concept: might-possibility
    - form: revder
      class: v
      field: Everyday speech
      gloss: "must; be obliged to perform the named action: vev ravrez revder, I must go"
      source: {kind: coined}
      concept: must
    - form: vev vez ravrez revder
      class: v
      field: Everyday speech
      gloss: I must not go; the obligation is to refrain from going, with vez negating the action rather than the obligation; replace vev and ravrez as needed
      source: {kind: coined}
      concept: must-not
    - form: laverem
      class: v
      field: Everyday speech
      gloss: "ought; be well advised to perform the named action, without necessarily being obliged: tesh sevem laverem, you should sleep"
      source: {kind: coined}
      concept: ought
    - form: revderav
      class: adj
      field: Everyday speech
      gloss: required; demanded by an obligation or applicable instruction
      source: {kind: coined}
      concept: required
    - form: levav vez revderav
      class: adj
      field: Everyday speech
      gloss: optional; permitted and not required, both properties holding together in this conventional expression
      source: {kind: coined}
      concept: optional
    - form: levav
      class: adj
      field: Everyday speech
      gloss: allowed; permitted by the relevant person or rule
      source: {kind: coined}
      concept: allowed
    - form: nevmav
      class: adj
      field: Everyday speech
      gloss: forbidden; expressly prohibited, not merely something for which permission has not been asked
      source: {kind: coined}
      concept: forbidden
    - form: levram
      class: v
      field: Everyday speech
      gloss: to permit; to authorize the person named as object to perform the action already under discussion
      source: {kind: coined}
      concept: permit
    - form: nevrem
      class: v
      field: Everyday speech
      gloss: to prohibit; to forbid the person named as object from the action already under discussion
      source: {kind: coined}
      concept: prohibit
    - form: varnev
      class: adj
      field: Everyday speech
      gloss: free to act; not constrained in the relevant action
      source: {kind: coined}
      concept: free
    - form: qavnev
      class: adj
      field: Everyday speech
      gloss: constrained; prevented or restricted from acting freely
      source: {kind: coined}
      concept: constrained
    - form: ravnav
      class: adj
      field: Everyday speech
      gloss: willing; ready to undertake the stated action by one's own choice
      source: {kind: coined}
      concept: willing
    - form: vez ravnav
      class: adj
      field: Everyday speech
      gloss: unwilling
      source: {kind: coined}
      concept: unwilling
    - form: davrev
      class: adj
      field: Everyday speech
      gloss: intended; resulting from an intention, not simply expected
      source: {kind: coined}
      concept: intended
    - form: vez davrev
      class: adj
      field: Everyday speech
      gloss: accidental; occurring without the relevant actor's intention
      source: {kind: coined}
      concept: accidental
    - form: gholav ar tesh
      class: call
      field: Everyday speech
      gloss: hello; the conventional greeting safety with you, offered on meeting someone
      source: {kind: coined}
      concept: hello
    - form: tesh ar gholav ravrez
      class: call
      field: Everyday speech
      gloss: goodbye; go with safety, a conventional wish on parting rather than a dismissal
      source: {kind: coined}
      concept: goodbye
    - form: tesh gholmer vorem
      class: call
      field: Everyday speech
      gloss: welcome; you are a guest here, a host's conventional reception of an arriving person
      source: {kind: coined}
      concept: expression-welcome
    - form: lamhev
      class: call
      field: Everyday speech
      gloss: please; a polite request marker used with a named action, without creating an imperative ending
      source: {kind: coined}
      concept: expression-please
    - form: vev ramev varum
      class: call
      field: Everyday speech
      gloss: thank you; I feel gratitude, said to the person thanked
      source: {kind: coined}
      concept: expression-thank-you
    - form: vev lamvar varum
      class: call
      field: Everyday speech
      gloss: you are welcome; the conventional my pleasure response to thanks, literally I feel pleasure
      source: {kind: coined}
      concept: expression-youre-welcome
    - form: lamhev pavren
      class: call
      field: Everyday speech
      gloss: excuse me; a polite request for room to pass or forbearance before an intrusion
      source: {kind: coined}
      concept: expression-excuse-me
    - form: vev darvam varum
      class: call
      field: Everyday speech
      gloss: sorry; I feel regret, acknowledging sorrow or responsibility as context determines
      source: {kind: coined}
      concept: expression-sorry
    - form: tesh vev ravmash
      class: call
      field: Everyday speech
      gloss: forgive me; a conventional request to the addressee to release blame against the speaker, using the cited present form
      source: {kind: coined}
      concept: expression-forgive-me
    - form: tesh shevaram
      class: call
      field: Everyday speech
      gloss: listen; a conventional request that the addressee listen
      source: {kind: coined}
      concept: expression-listen
    - form: tesh zarav
      class: call
      field: Everyday speech
      gloss: look; a conventional request that the addressee direct their eyes
      source: {kind: coined}
      concept: expression-look
    - form: tesh sevnem
      class: call
      field: Everyday speech
      gloss: wait; a conventional request to pause and wait
      source: {kind: coined}
      concept: expression-wait
    - form: tesh hev revem
      class: call
      field: Everyday speech
      gloss: come here; a conventional request with here naming the speaker's location
      source: {kind: coined}
      concept: expression-come-here
    - form: tesh vosh hev ravrez
      class: call
      field: Everyday speech
      gloss: go away; a conventional request to leave the speaker's location
      source: {kind: coined}
      concept: expression-go-away
    - form: tesh vev ghovem
      class: call
      field: Everyday speech
      gloss: help; a conventional urgent request for help from the addressee
      source: {kind: coined}
      concept: expression-help
    - form: tesh sedvez
      class: call
      field: Everyday speech
      gloss: stop; a conventional request to cease the action under discussion
      source: {kind: coined}
      concept: expression-stop
    - form: lamhev tesh reva sevaz
      class: call
      field: Everyday speech
      gloss: pardon; a courteous request that the addressee say it again
      source: {kind: coined}
      concept: expression-pardon
    - form: vev velvam
      class: v
      field: Everyday speech
      gloss: I understand; an acknowledgement of comprehension
      source: {kind: coined}
      concept: expression-i-understand
    - form: vev vez velvam
      class: v
      field: Everyday speech
      gloss: I do not understand; an acknowledgement that the current matter has not been understood
      source: {kind: coined}
      concept: expression-i-do-not-understand
    - form: tesh yem davrem
      class: v
      field: Everyday speech
      gloss: what do you mean; asked with rising question pitch about the addressee's intended meaning
      source: {kind: coined}
      concept: expression-what-do-you-mean
    - form: tesh evam ar yem raver sevaz
      class: v
      field: Everyday speech
      gloss: how do you say this; asks the manner of saying the expression indicated by evam; replace evam by the expression being asked about
      source: {kind: coined}
      concept: expression-how-do-you-say
    - form: varnam re evam yem vorem
      class: v
      field: Everyday speech
      gloss: what is this called; what is the name of this; evam may be replaced by the thing whose name is asked
      source: {kind: coined}
      concept: expression-what-is-this-called
    - form: noz revamad
      class: call
      field: Everyday speech
      gloss: not at all; an emphatic negative response to the degree asserted in the preceding question or claim
      source: {kind: coined}
      concept: expression-not-at-all
    - form: pavren
      class: n
      field: Everyday speech
      gloss: room to pass; clearance between people or objects
      source: {kind: coined}
    - form: naravun
      class: n
      field: Everyday speech
      gloss: people; a plurality of persons, without restricting them to one nation or rank
      source: {kind: coined}
      concept: people
    - form: narav pavar mavend
      class: n
      field: Everyday speech
      gloss: a man; an adult male person
      source: {kind: coined}
      concept: man
    - form: narav mavar mavend
      class: n
      field: Everyday speech
      gloss: a woman; an adult female person
      source: {kind: coined}
      concept: woman
    - form: narav mavend
      class: n
      field: Everyday speech
      gloss: an adult; a person who has reached bodily maturity
      source: {kind: coined}
      concept: adult
    - form: narav ruzhen
      class: n
      field: Everyday speech
      gloss: an elder; an old person, with or without a formal office
      source: {kind: coined}
      concept: elder
    - form: narav zavem
      class: n
      field: Everyday speech
      gloss: an individual; one person considered separately
      source: {kind: coined}
      concept: individual
    - form: navmar
      class: n
      field: Everyday speech
      gloss: group
      source: {kind: coined}
      concept: group
    - form: navzar
      class: n
      field: Everyday speech
      gloss: crowd
      source: {kind: coined}
      concept: crowd
    - form: darvamun
      class: n
      field: Everyday speech
      gloss: a clan; a group organized around acknowledged kinship, without requiring one named descent branch
      source: {kind: coined}
      concept: clan
    - form: darvaz
      class: n
      field: Everyday speech
      gloss: tribe
      source: {kind: coined}
      concept: tribe
    - form: gharvam
      class: n
      field: Everyday speech
      gloss: a community; people sharing a place or an enduring common life
      source: {kind: coined}
      concept: community
    - form: tamvemar
      class: n
      field: Everyday speech
      gloss: a worker; someone who performs work, not restricted to a bondsman's rank
      source: {kind: coined}
      concept: worker
    - form: tamvaram
      class: n
      field: Everyday speech
      gloss: an artisan; a maker skilled in a craft
      source: {kind: coined}
      concept: artisan
    - form: doveram
      class: n
      field: Everyday speech
      gloss: a merchant; someone who trades goods
      source: {kind: coined}
      concept: merchant
    - form: varnam
      class: n
      field: Everyday speech
      gloss: a name; the word by which someone or something is called
      source: {kind: coined}
      concept: name-noun
    - form: varnemar
      class: n
      field: Everyday speech
      gloss: a title; an identifying designation of office, status or work
      source: {kind: coined}
      concept: title
    - form: varaderam
      class: n
      field: Everyday speech
      gloss: rank; one's position in a social hierarchy, whether common or titled
      source: {kind: coined}
      concept: rank
    - form: darvarav
      class: n
      field: Everyday speech
      gloss: a custom; an established customary practice
      source: {kind: coined}
      concept: custom
    - form: darvarad
      class: n
      field: Everyday speech
      gloss: a tradition; a practice or account carried onward from earlier generations
      source: {kind: coined}
      concept: tradition
    - form: vazham
      class: n
      field: Everyday speech
      gloss: law; a publicly or institutionally binding body of norms, and a particular law
      source: {kind: coined}
      concept: law
    - form: vazhvar
      class: n
      field: Everyday speech
      gloss: a rule; an instruction or norm governing a stated activity
      source: {kind: coined}
      concept: rule
    - form: vazhnar
      class: n
      field: Everyday speech
      gloss: order; an arranged and coherent state, distinct from a command
      source: {kind: coined}
      concept: order-noun
    - form: sevardan
      class: n
      field: Everyday speech
      gloss: a command; an instruction given with authority
      source: {kind: coined}
      concept: command-noun
    - form: vadavam
      class: n
      field: Everyday speech
      gloss: obedience; acting in accordance with an authoritative instruction
      source: {kind: coined}
      concept: obedience
    - form: vazhmar
      class: n
      field: Everyday speech
      gloss: justice; fair treatment and the due ordering of claims, an ordinary noun beside the bound claim-weighing stem vazhm-
      source: {kind: coined}
      concept: justice
    - form: vez vazhmar
      class: n
      field: Everyday speech
      gloss: injustice; denial or violation of just treatment
      source: {kind: coined}
      concept: injustice
    - form: revadar
      class: adj
      field: Everyday speech
      gloss: right; morally acceptable
      source: {kind: coined}
      concept: right-ethical
    - form: vez revadar
      class: adj
      field: Everyday speech
      gloss: wrong; morally unacceptable
      source: {kind: coined}
      concept: wrong-ethical
    - form: gholvarad
      class: n
      field: Everyday speech
      gloss: peace; absence of active hostility and a condition of settled relations
      source: {kind: coined}
      concept: peace
    - form: qavramash
      class: n
      field: Everyday speech
      gloss: war; sustained armed conflict, distinct from one fight
      source: {kind: coined}
      concept: war
    - form: varnavam
      class: n
      field: Everyday speech
      gloss: freedom; the condition of being free to act
      source: {kind: coined}
      concept: freedom
    - form: qavnavam
      class: n
      field: Everyday speech
      gloss: captivity; being held against one's liberty, distinct from an ordinary locked object
      source: {kind: coined}
      concept: captivity
    - form: dovarash
      class: n
      field: Everyday speech
      gloss: a gift; something freely given, without requiring a reciprocal bargain
      source: {kind: coined}
      concept: gift
    - form: doverash
      class: n
      field: Everyday speech
      gloss: exchange
      source: {kind: coined}
      concept: exchange-noun
    - form: dorvaz
      class: n
      field: Everyday speech
      gloss: a debt; something owed, including an obligation carried through kin-credit
      source: {kind: coined}
      concept: debt
    - form: dorvaram
      class: n
      field: Everyday speech
      gloss: wealth; abundant material means or valued resources
      source: {kind: coined}
      concept: wealth
    - form: dorviram
      class: n
      field: Everyday speech
      gloss: poverty; a lack of sufficient material means
      source: {kind: coined}
      concept: poverty
    - form: varumash
      class: n
      field: Everyday speech
      gloss: property; possessions held by someone, distinct from the land itself
      source: {kind: coined}
      concept: property
    - form: varumav
      class: n
      field: Everyday speech
      gloss: ownership; the recognized relation of an owner to property
      source: {kind: coined}
      concept: ownership
    - form: darvamar
      class: n
      field: Everyday speech
      gloss: honor; esteem and acknowledged worth accorded to a person or conduct
      source: {kind: coined}
      concept: honor
    - form: temvar novremash
      class: n
      field: Everyday speech
      gloss: a secret; a hidden matter whose disclosure is withheld, whether sacred or ordinary
      source: {kind: coined}
      concept: secret
    - form: veramar
      class: n
      field: Everyday speech
      gloss: a being; something that exists, including a living or supernatural being
      source: {kind: coined}
      concept: being
    - form: narvazam
      class: n
      field: Everyday speech
      gloss: life; being alive, and the lived course of a living being
      source: {kind: coined}
      concept: life
    - form: tarvamar
      class: n
      field: Everyday speech
      gloss: origin; the source from which something first comes
      source: {kind: coined}
      concept: origin
    - form: tarvam
      class: n
      field: Everyday speech
      gloss: beginning
      source: {kind: coined}
      concept: beginning
    - form: tarvash
      class: n
      field: Everyday speech
      gloss: End
      source: {kind: coined}
      concept: end-noun
    - form: tarvemash
      class: n
      field: Everyday speech
      gloss: completion; the event or state of finishing, rather than necessarily emotional satisfaction
      source: {kind: coined}
      concept: completion
    - form: dovmaram
      class: n
      field: Everyday speech
      gloss: Change
      source: {kind: coined}
      concept: change-noun
    - form: dovmarash
      class: n
      field: Everyday speech
      gloss: transformation; a change of form or character
      source: {kind: coined}
      concept: transformation
    - form: tevmar
      class: n
      field: Everyday speech
      gloss: Part
      source: {kind: coined}
      concept: part
    - form: gharamash
      class: n
      field: Everyday speech
      gloss: a cause; something that brings about an event or state
      source: {kind: coined}
      concept: cause
    - form: gharavash
      class: n
      field: Everyday speech
      gloss: an effect; a result brought about by a cause
      source: {kind: coined}
      concept: effect
    - form: temvash
      class: n
      field: Everyday speech
      gloss: a kind; a class or sort sharing defining characteristics
      source: {kind: coined}
      concept: kind
    - form: verav
      class: adj
      field: Everyday speech
      gloss: real; actually existing or occurring
      source: {kind: coined}
      concept: real
    - form: vez verav
      class: adj
      field: Everyday speech
      gloss: unreal
      source: {kind: coined}
      concept: unreal
    - form: darovash
      class: adj
      field: Everyday speech
      gloss: natural; arising from the ordinary processes or character of nature
      source: {kind: coined}
      concept: natural
    - form: vez darovash
      class: adj
      field: Everyday speech
      gloss: unnatural
      source: {kind: coined}
      concept: unnatural
    - form: mavend
      class: adj
      field: Everyday speech
      gloss: mature; having reached bodily maturity
      source: {kind: coined}
    - form: novremash
      class: adj
      field: Everyday speech
      gloss: hidden; kept from sight or knowledge
      source: {kind: coined}
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: "{given} {clan}"
    given:
      female:
        - "fazhina"
        - "rosharan"
        - "azadam"
        - "shavineh"
        - "dehna"
        - "mazinan"
        - "mizhara"
        - "tavura"
        - "sharanaz"
        - "sameza"
        - "azarin"
        - "delanash"
        - "golran"
        - "yesera"
        - "zaranah"
        - "ashfan"
        - "kharanah"
        - "dervun"
        - "layah"
        - "nahedan"
        - "sormina"
        - "mahrush"
        - "shiran"
        - "deyena"
        - "farvan"
        - "nushir"
        - "khozura"
        - "zarham"
        - "parivin"
        - "biban"
        - "khavari"
        - "shirnah"
        - "forreh"
        - "rushanah"
        - "parnava"
        - "givanu"
      male:
        - "razashar"
        - "vahdarun"
        - "tirsad"
        - "korushan"
        - "mehrun"
        - "khordesh"
        - "yazharan"
        - "pashman"
        - "barmokh"
        - "artavin"
        - "farhazar"
        - "torvash"
        - "sivanash"
        - "shuvar"
        - "kavezhan"
        - "rostadar"
        - "samardan"
        - "harumaz"
        - "kamid"
        - "goshanad"
        - "jamaris"
        - "zarvash"
        - "valhamin"
        - "nersad"
        - "darizhan"
        - "ahrash"
        - "khoshar"
        - "bashvard"
        - "tahruz"
        - "khorman"
        - "shabar"
        - "azarvan"
        - "pardisak"
        - "kayvonad"
        - "mahvarad"
        - "shurnav"
    clan:
      - "afsheran"
      - "ferudan"
      - "vardozan"
      - "tamaran"
      - "barmandan"
      - "kaveran"
      - "parivan"
      - "azardan"
      - "girani"
      - "shadavan"
      - "gholshan"
      - "darvarid"
      - "golshani"
      - "bazakan"
      - "mazanid"
      - "goravan"
      - "sarani"
      - "parvaran"
      - "mahvaran"
      - "shamayan"
      - "varakan"
      - "kaviran"
      - "darvani"
      - "shirzari"
      - "perudan"
      - "gazvan"
      - "baravi"
      - "tamiran"
  sounds:
    edges:
      - {edge: closeConsonant, sounds: [n, r, d, z, sh, kh, k, m, h, v, s]}
      - {edge: closeCluster, sounds: [nd, rd]}
      - {edge: vowelPair, sounds: [ai, au, ei, ou, ia]}
    clusters: {max: 2}
  scope:
    folders: [dunhara, dunharadesert, dunharatribes, amradad, kingdomofamradad]
    cultures: [dunhariclt]
    lore: [dunhariclt]
    parents: [dunharargn, amradadrgn, dunhardsrtrgn]
    addresses:
      - lore-dunhariclt
      - skill-dunharlng
      - affiliation-kngdmmrdd
      - affiliation-dunhartrbs
      - affiliation-strmcltsbhrms
      - doc-dunharaadvguide
  tongues:
    - {tag: dunhari, meaning: a Dunhari name, language: skill-dunharlng}
    - tag: sovidur
      meaning: "a Sovidur name, carried by a Khazryn wanderer living among the tribes"
    - {tag: ashaian, meaning: "a name taken from the Ashaian faith, whose gods the tribes keep"}
    - {tag: translation, meaning: a name given in the language of these pages}
  register:
    - {name: afrun, tongue: dunhari}
    - {name: amradad, tongue: dunhari}
    - {name: Amradad Region, tongue: translation}
    - {name: atazkharu, tongue: sovidur}
    - {name: azardan, tongue: dunhari}
    - {name: baharami-vadukesh, tongue: dunhari}
    - {name: barmandan, tongue: dunhari}
    - {name: belgogar, tongue: dunhari, built: [belg-, -ogar]}
    - {name: Bondservant, tongue: translation}
    - {name: Bondsman, tongue: translation}
    - {name: Camp Practitioner, tongue: translation}
    - {name: Caravan-Master, tongue: translation}
    - {name: Chieftain, tongue: translation}
    - {name: chuel, tongue: sovidur}
    - {name: chuyelqiimod, tongue: sovidur}
    - {name: Court Astrologer, tongue: translation}
    - {name: Court Physician, tongue: translation}
    - {name: darzash, tongue: dunhari}
    - {name: delanash ferudan, tongue: dunhari}
    - {name: Delegate, tongue: translation}
    - {name: Denounced, tongue: translation}
    - {name: Dependent, tongue: translation}
    - {name: dunhara, tongue: dunhari}
    - {name: Dunhara Adventurer's Guide, tongue: translation}
    - {name: Dunhara Desert, tongue: translation}
    - {name: Dunhara Desert Region, tongue: translation}
    - {name: Dunhara Region, tongue: translation}
    - {name: Dunhara Tribes, tongue: translation}
    - {name: dunhari, tongue: dunhari}
    - {name: Dunhari Language, tongue: translation}
    - {name: Dunhari Lexicon, tongue: translation}
    - {name: Elder, tongue: translation}
    - {name: Envoy, tongue: translation}
    - {name: fakhrad, tongue: dunhari}
    - {name: farazun, tongue: dunhari}
    - {name: farrud, tongue: dunhari}
    - {name: firavad, tongue: dunhari}
    - {name: gazvan, tongue: dunhari}
    - {name: ghavulavad, tongue: dunhari, built: [ghavul-, -avad]}
    - {name: ghedvader, tongue: dunhari, built: [ghedv-, -ader]}
    - {name: Ghedvader of the Host, tongue: translation}
    - {name: gholvabun, tongue: dunhari, built: [gholv-, -abun]}
    - {name: ghuzmogar, tongue: dunhari, built: [ghuzm-, -ogar]}
    - {name: Grand Vashkader, tongue: translation}
    - {name: Guide, tongue: translation}
    - {name: gulranah, tongue: dunhari}
    - {name: hamelogar, tongue: dunhari, built: [hamel-, -ogar]}
    - {name: Host-Caller, tongue: translation}
    - {name: Householder, tongue: translation}
    - {name: kamruz, tongue: dunhari}
    - {name: Keeper of the Feud, tongue: translation}
    - {name: Keeper of the Marked Stones, tongue: translation}
    - {name: Keeper of the Wells, tongue: translation}
    - {name: kherzulakhem, tongue: dunhari, built: [kherzul-, -akhem]}
    - {name: Kherzulakhem Camp, tongue: translation}
    - {name: Barred from the Well, tongue: translation}
    - {name: Camper, tongue: translation}
    - {name: Kingdom of Amradad, tongue: translation}
    - {name: Kinless, tongue: translation}
    - {name: Kinsman, tongue: translation}
    - {name: Lawkeeper, tongue: translation}
    - {name: Master of the Post, tongue: translation}
    - {name: mazanid, tongue: dunhari}
    - {name: mezhvabun, tongue: dunhari, built: [mezhv-, -abun]}
    - {name: Notable, tongue: translation}
    - {name: nuzgader, tongue: dunhari, built: [nuzg-, -ader]}
    - {name: Oasis of Tevrazavad, tongue: translation}
    - {name: Tribe of Tevrazavad, tongue: translation}
    - {name: Tribesman, tongue: translation}
    - {name: Officer of the Court, tongue: translation}
    - {name: Outcast, tongue: translation}
    - {name: paresak, tongue: dunhari}
    - {name: paryan, tongue: dunhari}
    - {name: pevrogar, tongue: dunhari, built: [pevr-, -ogar]}
    - {name: qarvelakhend, tongue: dunhari, built: [qarvel-, -akhend]}
    - {name: qeshvi, tongue: dunhari, built: [qeshv-, -i]}
    - {name: rosharan, tongue: dunhari}
    - {name: rudavah, tongue: dunhari}
    - {name: ruzhogar, tongue: dunhari, built: [ruzh-, -ogar]}
    - {name: sahri, tongue: sovidur}
    - {name: sehvogar, tongue: dunhari, built: [sehv-, -ogar]}
    - {name: shadezan, tongue: dunhari}
    - {name: shavan, tongue: dunhari}
    - {name: shebarakhend, tongue: dunhari, built: [shebar-, -akhend]}
    - {name: shebarader, tongue: dunhari, built: [shebar-, -ader]}
    - {name: shiradar, tongue: dunhari}
    - {name: sorvadakhend, tongue: dunhari, built: [sorvad-, -akhend]}
    - {name: Speaker of the Council, tongue: translation}
    - {name: Stone of Ranaz, tongue: translation}
    - {name: Storm Cults of Bahramish, tongue: translation}
    - {name: Subject, tongue: translation}
    - {name: tagemader, tongue: dunhari, built: [tagem-, -ader]}
    - {name: tahrodan, tongue: dunhari}
    - {name: tamaran, tongue: dunhari}
    - {name: tazhinakhend, tongue: dunhari, built: [tazhin-, -akhend]}
    - {name: The Desert Wanderer, tongue: translation}
    - {name: The Followers of the Thundering Voice, tongue: translation}
    - {name: The Silent Jackal, tongue: translation}
    - {name: The Storm Cults, tongue: translation}
    - {name: tigh'baharan, tongue: dunhari}
    - {name: The Storm Cults of Báhramis, tongue: translation}
    - {name: torvash, tongue: dunhari}
    - {name: Truce-Warden, tongue: translation}
    - {name: vadukesh, tongue: dunhari, built: [vaduk-, -esh]}
    - {name: vashkader, tongue: dunhari, built: [vashk-, -ader]}
    - {name: vazhmader, tongue: dunhari, built: [vazhm-, -ader]}
    - {name: venrad, tongue: dunhari}
    - {name: venzelakhend, tongue: dunhari, built: [venzel-, -akhend]}
    - {name: Vessel, tongue: translation}
    - {name: Vessel of Báhramis, tongue: translation}
    - {name: Water-Warden, tongue: translation}
    - {name: yorvabun, tongue: dunhari, built: [yorv-, -abun]}
    - {name: zevrogar, tongue: dunhari, built: [zevr-, -ogar]}
    - {name: Tower of the Lightning-Marked, tongue: translation}
    - {name: qeshvadez, tongue: dunhari, built: [qeshv-, -adez]}
    - {name: The Glass Tower, tongue: translation}
    - {name: mezhvadez, tongue: dunhari, built: [mezhv-, -adez]}
    - {name: The Dry Stair, tongue: translation}
    - {name: The Keeper's Vault, tongue: translation}
    - {name: vazhmavad, tongue: dunhari, built: [vazhm-, -avad]}
    - {name: The Weighing-Place, tongue: translation}
    - {name: The Oasis of the Unrecited, tongue: translation}
    - {name: Associate, tongue: translation}
    - {name: Boss, tongue: translation}
    - {name: báhramis, tongue: ashaian}
    - {name: Caravan Priest, tongue: translation}
    - {name: Counsellor, tongue: translation}
    - {name: Courier, tongue: translation}
    - {name: Crew Boss, tongue: translation}
    - {name: delkoshekh, tongue: ashaian}
    - {name: Earner, tongue: translation}
    - {name: Enforcer, tongue: translation}
    - {name: Fence, tongue: translation}
    - {name: Fixer, tongue: translation}
    - {name: Flame-Denied, tongue: translation}
    - {name: Flame-Reader, tongue: translation}
    - {name: Hanger-on, tongue: translation}
    - {name: Keeper of the Fire-Lineage, tongue: translation}
    - {name: khórsadra, tongue: ashaian}
    - {name: Lay Faithful, tongue: translation}
    - {name: Made Member, tongue: translation}
    - {name: Marked, tongue: translation}
    - {name: Master of Lookouts, tongue: translation}
    - {name: míthara, tongue: ashaian}
    - {name: mórvahna, tongue: ashaian}
    - {name: roqeshekh, tongue: ashaian}
    - {name: shekhul, tongue: ashaian}
    - {name: Second, tongue: translation}
    - {name: The Ash Road, tongue: translation}
    - {name: The Twelve of the Flame, tongue: translation}
    - {name: Treasurer, tongue: translation}
    - {name: zárvanya, tongue: ashaian}
    - {name: zúrathra, tongue: ashaian}
    - {name: angaros, tongue: ashaian}
    - {name: aravesta, tongue: ashaian}
    - {name: azravan, tongue: ashaian}
    - {name: ahurdaen, tongue: ashaian}
    - {name: ashaian pantheon, tongue: ashaian}
    - {name: ataros, tongue: ashaian}
    - {name: sirvadar, tongue: ashaian}
    - {name: bashvard darvani, tongue: dunhari}
    - {name: Fortress Commander Bashvard Darvani, tongue: translation}
    - {name: Fortress Commander Bashvard, tongue: translation}
    - {name: deyena shamayan, tongue: dunhari}
    - {name: Captain Deyena Shamayan, tongue: translation}
    - {name: Captain Deyena, tongue: translation}
    - {name: ahrash tamiran, tongue: dunhari}
    - {name: Merchant-Prince Ahrash, tongue: translation}
    - {name: harumaz baravi, tongue: dunhari}
    - {name: Master Harumaz, tongue: translation}
    - {name: artavin kaviran, tongue: dunhari}
    - {name: Father Artavin, tongue: translation}
    - {name: razashar perudan, tongue: dunhari}
    - {name: Captain Razashar, tongue: translation}
    - {name: shiran golshani, tongue: dunhari}
    - {name: Lady Shiran Golshani, tongue: translation}
    - {name: Lady Shiran, tongue: translation}
    - {name: shuvar shavan, tongue: dunhari}
    - {name: shuvar, tongue: dunhari}
    - {name: yesera parivan, tongue: dunhari}
    - {name: Lady Yesera Parivan, tongue: translation}
    - {name: Lady Yesera, tongue: translation}
    - {name: zarvash kaveran, tongue: dunhari}
    - {name: Tribal Elder Zarvash Kaveran, tongue: translation}
    - {name: Tribal Elder Zarvash, tongue: translation}
    - {name: zaranah sarani, tongue: dunhari}
    - {name: Lady Zaranah Sarani, tongue: translation}
    - {name: Lady Zaranah, tongue: translation}
    - {name: valhamin goravan, tongue: dunhari}
    - {name: Merchant Lord Valhamin, tongue: translation}
    - {name: khavari varakan, tongue: dunhari}
    - {name: Warlord Khavari the Sorcerer, tongue: translation}
    - {name: Warlord Khavari, tongue: translation}
    - {name: mahvarad parvaran, tongue: dunhari}
    - {name: Chieftain Mahvarad, tongue: translation}
    - {name: tavura kamruz, tongue: dunhari}
    - {name: Shaman Tavura, tongue: translation}
    - {name: mazinan shirzari, tongue: dunhari}
    - {name: Inquisitor Mazinan, tongue: translation}
    - {name: tahruz girani, tongue: dunhari}
    - {name: Captain Tahruz the Venerable, tongue: translation}
    - {name: Captain Tahruz, tongue: translation}
    - {name: bahar, tongue: dunhari}
    - {name: vast, tongue: dunhari}
  retired:
    - {form: Qadi, instead: Vazhmader, why: "an Earth word, the judge of a city"}
    - {form: qadi, instead: vazhmader, why: "an Earth word, the judge of a city"}
    - {form: Wali, instead: Tagemader, why: "an Earth word, the governor of a city"}
    - {form: wali, instead: tagemader, why: "an Earth word, the governor of a city"}
    - {form: Muhtasib, instead: Nuzgader, why: "an Earth word, the market inspector"}
    - {form: muhtasib, instead: nuzgader, why: "an Earth word, the market inspector"}
    - {form: Defterdar, instead: Yorvabun, why: "an Earth word, the keeper of the registers"}
    - {form: Hajib, instead: Gholvabun, why: "an Earth word, the chamberlain"}
    - {form: Bâdkhwân, instead: Zevrogar, why: "an Earth word, the wind-reader"}
    - {form: bâdkhwân, instead: zevrogar, why: "an Earth word, the wind-reader"}
    - {form: Bârân-âvar, instead: Belgogar, why: "an Earth phrase, the rain-caller"}
    - {form: bârân-âvar, instead: belgogar, why: "an Earth phrase, the rain-caller"}
    - {form: Sang-zad, instead: Qeshvi, why: "an Earth phrase, the lightning-marked"}
    - {form: sang-zad, instead: qeshvi, why: "an Earth phrase, the lightning-marked"}
    - {form: Tufân-row, instead: Ghuzmogar, why: "an Earth phrase, the storm-walker"}
    - {form: tufân-row, instead: ghuzmogar, why: "an Earth phrase, the storm-walker"}
    - {form: Sokhan-bar, instead: Sehvogar, why: "an Earth phrase, the voice-bearer"}
    - {form: sokhan-bar, instead: sehvogar, why: "an Earth phrase, the voice-bearer"}
    - {form: Sar-pîr, instead: Ruzhogar, why: "an Earth phrase, the senior elder of a lineage"}
    - {form: sar-pîr, instead: ruzhogar, why: "an Earth phrase, the senior elder of a lineage"}
    - {form: Pîr, instead: Pevrogar, why: "an Earth word, the recognized practitioner"}
    - {form: pîr, instead: pevrogar, why: "an Earth word, the recognized practitioner"}
    - {form: Shâgerd, instead: Hamelogar, why: "an Earth word, the apprentice"}
    - {form: shâgerd, instead: hamelogar, why: "an Earth word, the apprentice"}
    - {form: Pîravân, instead: Vadukesh, why: "an Earth word, the followers"}
    - {form: pîravân, instead: vadukesh, why: "an Earth word, the followers"}
    - {form: Golshahr, instead: Qarvelakhend, why: "an Earth compound, a city of Amradad"}
    - {form: Mihrabad, instead: Tazhinakhend, why: "an Earth compound, a town of Amradad"}
    - {form: Zaristan, instead: Venzelakhend, why: "an Earth compound, a town of Amradad"}
    - form: Shamsûn
      instead: Shebarakhend
      why: "an Earth word and city name, the seat of the court"
    - {form: Sarath, instead: Sorvadakhend, why: "an Earth word, a farming settlement of Amradad"}
    - {form: Teyran, instead: Tevrazavad, why: "an Earth city name, an oasis of the desert"}
    - {form: Khar al-Sular, instead: Kherzulakhem, why: "an Earth phrase, the hunters' camp"}
    - {form: Dûn Ashir, instead: Ghavulavad, why: "an Earth phrase, the oasis seat of the tribes"}
    - {form: Mithran, instead: Torvash, why: an Earth word and given name}
    - {form: Mehrâd, instead: Venrad, why: an Earth given name}
    - {form: Faradân, instead: Ferudan, why: "an Earth word, a clan name"}
    - {form: Khalid, instead: [Kheldun, Bezdun], why: "an Earth given name, two men of Amradad"}
    - {form: Yasmin Mirza, instead: Yesera Parivan, why: an Earth name}
    - {form: Davoud, instead: [Pashvur, Ahrash], why: "an Earth given name, two men of Amradad"}
    - {form: Khalef ibn Rashid, instead: Bashvard Darvani, why: an Earth name}
    - {form: Saqqar, instead: Zarvash, why: an Earth given name}
    - {form: Saffan, instead: Yelmad, why: an Earth word}
    - {form: Rashid al-Kharazi, instead: Navresh Tahvan, why: an Earth name}
    - {form: Amir al-Rashid, instead: Deyena Shamayan, why: an Earth name}
    - {form: Zahra al-Mansur, instead: Zaranah Sarani, why: an Earth name}
    - {form: Hakkim, instead: Ruvesh, why: an Earth given name}
    - {form: Jamal, instead: Velkash, why: an Earth given name}
    - {form: Sarafina, instead: Shiran, why: an Earth given name}
    - {form: Rehman, instead: Khozdun, why: an Earth given name}
    - {form: Dhavani, instead: Beshrin, why: an Earth word}
    - {form: Farrokh, instead: Harumaz, why: an Earth given name}
    - {form: Sámir, instead: Tahruz, why: an Earth given name}
    - {form: Sayyid, instead: Tulvesh, why: an Earth word and title}
    - {form: Yasmine, instead: Pezhinah, why: an Earth given name}
    - {form: Rakesh, instead: Rozhvan, why: an Earth given name}
    - {form: Karamak, instead: Zalmor, why: an Earth word}
    - {form: Kazir, instead: Zanavi, why: "an Earth word, a herding clan"}
    - {form: Mâkir, instead: Yuzhvad, why: an Earth word}
    - {form: Estheva, instead: Vazhdun, why: an Earth word}
    - {form: Farina, instead: Fazhina, why: "an Earth word, in the name lists"}
    - {form: Shavûr, instead: Shuvar, why: "an Earth word, in the name lists"}
    - {form: Ahraz, instead: Ahrash, why: "an Earth word, in the name lists"}
    - {form: Sâlâkh, instead: Sezhakh, why: "an Earth word, in the name lists and a saying"}
    - {form: Namvar, instead: Nemver, why: "an Earth word, in the name lists"}
    - {form: Damân, instead: Damoz, why: "an Earth word, in the name lists"}
    - {form: Khîmar, instead: Khizhor, why: "an Earth word, in the name lists"}
    - {form: Kâmidan, instead: Kemudan, why: "an Earth word, in the name lists"}
    - {form: Samerâ, instead: Sameza, why: "an Earth word, in the name lists"}
    - {form: Yasâra, instead: Yesera, why: "an Earth word, in the name lists"}
    - {form: Darvîn, instead: Dervun, why: "an Earth word, in the name lists"}
    - {form: Dayanâ, instead: Deyena, why: "an Earth word, in the name lists"}
    - {form: Farrah, instead: Forreh, why: "an Earth word, in the name lists and a saying"}
    - {form: Tavâran, instead: Tevuran, why: "an Earth word, in the name lists"}
    - {form: Khorsân, instead: Khorsash, why: "an Earth word, in the name lists"}
    - {form: Yasrâ, instead: Yesre, why: "an Earth word, in the name lists"}
    - {form: Tîrva, instead: Tizhva, why: "an Earth word, in the name lists"}
    - {form: Tîrâs, instead: Tizhas, why: "an Earth word, in the name lists"}
    - {form: Namina, instead: Nomena, why: "an Earth word, in the name lists"}
    - {form: Lâmaza, instead: Lemeza, why: "an Earth word, in the name lists"}
    - {form: Kamûna, instead: Komena, why: "an Earth word, in the name lists"}
    - {form: Narmî, instead: Narzhi, why: "an Earth word, in the name lists"}
    - {form: Âshrâ, instead: Eshro, why: "an Earth word, in the name lists"}
    - {form: Navîna, instead: Nevuna, why: "an Earth word, in the name lists"}
    - {form: Kamûd, instead: Nemud, why: "an Earth word, in the name lists"}
    - {form: Sardâm, instead: Serdom, why: "an Earth word, in the name lists"}
    - {form: Mârân, instead: Mazhen, why: "an Earth word, in the name lists"}
    - {form: Paridan, instead: Perudan, why: "an Earth word, in the name lists"}
    - {form: Bârân, instead: Bazhon, why: "an Earth word, in the name lists"}
    - {form: Bargâz, instead: Bergoz, why: "an Earth word, in the name lists"}
    - {form: Balârî, instead: Beluri, why: "an Earth word, in the name lists"}
    - {form: Gîldân, instead: Gildash, why: "an Earth word, in the name lists"}
    - {form: Basra, instead: Shosra, why: "an Earth city name, in the name lists"}
    - {form: Khânân, instead: Khonash, why: "an Earth word, in the name lists"}
    - {form: Khazâra, instead: Khozura, why: "an Earth word, in the name lists"}
    - {form: Manânâ, instead: Menuna, why: "an Earth word, in the name lists"}
    - {form: marûn, instead: velmuz, why: "an Earth word, in a saying"}
    - {form: magûn, instead: zorvun, why: "an Earth word, in a saying"}
    - {form: Emir, instead: Ghedvader, why: "an Earth word, a great officer of the court"}
    - {form: Sultan, instead: Shebarader, why: "an Earth word, the sovereign of Amradad"}
    - {form: sultan, instead: shebarader, why: "an Earth word, the sovereign of Amradad"}
    - {form: Sultana, instead: Mezhvabun, why: "an Earth word, the sovereign's principal wife"}
    - {form: Sultanate, instead: Kingdom, why: "an Earth word, the realm of Amradad"}
    - {form: sultanate, instead: kingdom, why: "an Earth word, the realm of Amradad"}
    - {form: Vizier, instead: Vashkader, why: "an Earth word, a minister of state"}
    - {form: vizier, instead: vashkader, why: "an Earth word, a minister of state"}
    - {form: Vazhmôr, instead: Vazhmader, why: a form built on a retired ending}
    - {form: vazhmôr, instead: vazhmader, why: a form built on a retired ending}
    - {form: Tâgemôr, instead: Tagemader, why: a form built on a retired ending}
    - {form: tâgemôr, instead: tagemader, why: a form built on a retired ending}
    - {form: Nûzgôr, instead: Nuzgader, why: a form built on a retired ending}
    - {form: nûzgôr, instead: nuzgader, why: a form built on a retired ending}
    - {form: Yorvôr, instead: Yorvabun, why: a form built on a retired ending}
    - {form: yorvôr, instead: yorvabun, why: a form built on a retired ending}
    - {form: Gholvôr, instead: Gholvabun, why: a form built on a retired ending}
    - {form: gholvôr, instead: gholvabun, why: a form built on a retired ending}
    - {form: Shêbarôr, instead: Shebarader, why: a form built on a retired ending}
    - {form: shêbarôr, instead: shebarader, why: a form built on a retired ending}
    - {form: Mezhvôr, instead: Mezhvabun, why: a form built on a retired ending}
    - {form: mezhvôr, instead: mezhvabun, why: a form built on a retired ending}
    - {form: Vashkôr, instead: Vashkader, why: a form built on a retired ending}
    - {form: vashkôr, instead: vashkader, why: a form built on a retired ending}
    - {form: Ghedvôr, instead: Ghedvader, why: a form built on a retired ending}
    - {form: ghedvôr, instead: ghedvader, why: a form built on a retired ending}
    - {form: Zevrôr, instead: Zevrogar, why: a form built on a retired ending}
    - {form: zevrôr, instead: zevrogar, why: a form built on a retired ending}
    - {form: Belgôr, instead: Belgogar, why: a form built on a retired ending}
    - {form: belgôr, instead: belgogar, why: a form built on a retired ending}
    - {form: Ghuzmôr, instead: Ghuzmogar, why: a form built on a retired ending}
    - {form: ghuzmôr, instead: ghuzmogar, why: a form built on a retired ending}
    - {form: Sehvôr, instead: Sehvogar, why: a form built on a retired ending}
    - {form: sehvôr, instead: sehvogar, why: a form built on a retired ending}
    - {form: Pevrôr, instead: Pevrogar, why: a form built on a retired ending}
    - {form: pevrôr, instead: pevrogar, why: a form built on a retired ending}
    - {form: Rûzhôr, instead: Ruzhogar, why: a form built on a retired ending}
    - {form: rûzhôr, instead: ruzhogar, why: a form built on a retired ending}
    - {form: Hamelôr, instead: Hamelogar, why: a form built on a retired ending}
    - {form: hamelôr, instead: hamelogar, why: a form built on a retired ending}
    - {form: Vadukôr, instead: Vadukogar, why: a form built on a retired ending}
    - {form: vadukôr, instead: vadukogar, why: a form built on a retired ending}
    - {form: Kherzûlekh, instead: Kherzulakhem, why: a form built on a retired ending}
    - {form: Qeshvekh, instead: Qeshvadez, why: a form built on a retired ending}
    - {form: Mezhvekh, instead: Mezhvadez, why: a form built on a retired ending}
    - {form: Ghavûlekh, instead: Ghavulavad, why: a form built on a retired ending}
    - {form: Tevrazekh, instead: Tevrazavad, why: a form built on a retired ending}
    - {form: Vazhmekh, instead: Vazhmavad, why: a form built on a retired ending}
    - {form: Qarvelekh, instead: Qarvelakhend, why: a form built on a retired ending}
    - {form: Shêbarekh, instead: Shebarakhend, why: a form built on a retired ending}
    - {form: Sorvadekh, instead: Sorvadakhend, why: a form built on a retired ending}
    - {form: Tazhinekh, instead: Tazhinakhend, why: a form built on a retired ending}
    - {form: Venzelekh, instead: Venzelakhend, why: a form built on a retired ending}
    - {form: Faradûn, instead: Farazun, why: one sound from an Earth name}
    - {form: Daryash, instead: Darzash, why: one sound from an Earth name}
    - {form: Shâdezar, instead: Shadezan, why: one sound from an Earth name}
    - {form: Bahâram, instead: Bazharam, why: one sound from an Earth name}
    - {form: Khosrûn, instead: Khozrun, why: one sound from an Earth name}
    - {form: Eskandâm, instead: Eskaram, why: one sound from an Earth name}
    - {form: Manushir, instead: Maneshir, why: one sound from an Earth name}
    - {form: Kâvehân, instead: Kavezhan, why: one sound from an Earth name}
    - {form: Parvizhân, instead: Parvuzhan, why: one sound from an Earth name}
    - {form: Shahrânaz, instead: Sharanaz, why: one sound from an Earth name}
    - {form: Afsharan, instead: Afsheran, why: one sound from an Earth name}
    - {form: Rashad, instead: Rezhad, why: one sound from an Earth name}
    - {form: Khânumân, instead: Khareman, why: one sound from an Earth word}
    - {form: Khorsand, instead: Khorzand, why: one sound from an Earth word}
    - {form: Khâvand, instead: Khavend, why: one sound from an Earth word}
    - {form: Pâdishân, instead: Padeshun, why: one sound from an Earth word}
    - {form: Shuvôr, instead: Shuvar, why: a name closing on a man's ending of Atárzadi}
    - {form: Nemvôr, instead: Nemver, why: a name closing on a man's ending of Atárzadi}
    - {form: Atenheru, instead: Atazkharu, why: respelled to keep the rules of Sovidur}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Desert}}
---

Dunhari is a tongue of the Desert family. Fluency measures the sophistication of expression in Dunhari, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

The roman repertoire keeps the straight catch apostrophe in the registered name Tigh'Baharan.

## Overview

Dunhari is the melodic, poetic tongue of the desert peoples: the [[place-dunharargn|Dunhara Region]] tribes, the settled communities of the [[place-khzryndsrtrgn|Khazryn Desert Region]], and the urban centers of the [[affiliation-kngdmmrdd|Kingdom of Amradad]]. The language is fundamentally shaped by an oral tradition where poetry, song, and storytelling form the primary literary expression. Dunhari speakers value rhythm, metaphor, and the interplay of vowels above all else.

The language features extensive vocabulary for desert navigation, astronomy, water sources, kinship, honor, and the subtleties of weather and seasonal change. Dunhari is the voice of nomadic wisdom and courtly refinement.

## How Dunhari sounds

Dunhari is the recited verse-speech of the deep desert. It rolls on _v_ and _r_ and closes on long, chanted endings.

**The vowels.** _a_ leads, with _e_ and _o_. Long vowels are not written.

**The consonants.** _v_, _gh_, _q_, _sh_, _zh_, _r_, _m_, _d_ and _b_.

**Clusters.** _rv_, _zhv_, _lm_ and _rz_ meet inside a word.

**Endings.** Dunhari words end in _-ar_, _-er_, _-end_, _-vad_, _-bun_ or _-ader_.

**What Dunhari leaves out.** It has no _kh_ at the start of a word, which is [[skill-atarzadilng|Atárzadi Language]]'s, and no _-od_ or _-ekh_. It avoids words of more than four syllables.

## Phonology

### Consonant System

Dunhari employs a moderate consonant inventory with emphasis on continuants and softer articulations:

Stops
: /p/, /b/, /t/, /d/, /k/, /g/, /q/ (uvular)

Fricatives
: /f/, /v/, /s/, /z/, /h/, /sh/, /zh/, /kh/ (velar), /gh/ (voiced velar)

Affricate
: /j/

Nasals
: /m/, /n/

Liquids
: /r/, /l/

Semivowels
: /w/, /y/

Characteristic of Dunhari is the prevalence of continuants and approximants, creating a flowing, lyrical quality. Names like _Vahdarun, Korushan, Yazharan, Parvash, Givandar_ feature smooth transitions between consonants and vowels.

The velar fricatives _kh_ and _gh_ appear frequently in poetic registers but are often softened in ordinary speech, particularly in the **Amradi** courtly dialect.

### Vowel System

Dunhari employs a five-vowel system with contrastive length and quality:

a
: open front vowel (short or long)

e
: mid front vowel (short or long)

i
: close front vowel

o
: mid back vowel (short or long)

u
: close back vowel (short or long)

Long vowels carry significant semantic and poetic weight. The interplay of vowel length creates the characteristic rhythm of Dunhari poetry.

Diphthongs are common and phonologically significant:

ai
: as in _Jamaris, Afshanar_

au
: as in _Bahrazad, Qavadar_

ei
: as in _Farvan, Razanash_

ou
: as in _Goshanad, Rostadar_

These diphthongs are fundamental to the melodic quality of the language.

### Stress and Prosody

Dunhari exhibits a primarily stress-timed rhythm with stress typically falling on the first or penultimate syllable. Secondary stress often appears on thematic roots in longer words.

Examples from names:

- _VAH-dar-un_ (stress on first syllable)
- _KO-rush-an_ (stress on first, with long vowel emphasis)
- _par-VAN-dar_ (stress on second syllable in compound forms)

The language employs significant pitch variation in poetic and formal registers, with rising pitch marking questions and falling pitch marking declarations or emphatic statements.

## Grammar Notes

### Word Order and Structure

Dunhari follows a Subject-Object-Verb pattern in many narrative contexts, though poetic registers demonstrate considerable flexibility. This allows for greater emphasis on objects and actions in verse.

### Nominal System

Dunhari nouns are marked for gender (masculine/feminine/common), number (singular/plural). Clan and tribal names carry specific grammatical functions and are often employed as markers of identity and honor.

Clan names (tribal affiliations) frequently employ suffixes:

- **-an** (masculine tribal marker)—_Afsheran, Ferudan, Vardozan, Tamaran_
- **-i** or **-i** (common or feminine clan marker)—_Girani, Golshani, Sarani, Nazari_
- **-id** (descendant-of marker)—_Razdanak, Zarid, Darvarid, Mazanid_

These suffixes denote tribal and clan affiliation, which is central to Dunhari social identity.

### Endings

Every Dunhari stem closes on a consonant, so each ending opens on a vowel. The vowel joins the stem to the ending, and no word gathers more than two consonants together. Beside the clan endings above, six endings build the offices, callings and places of the tongue:

| Ending      | Makes                                           | Example                                             |
| ----------- | ----------------------------------------------- | --------------------------------------------------- |
| **-ader**   | the holder of an office, by grant               | _vazhmader_, a judge of a city                      |
| **-abun**   | the keeper of a thing, a door or a household    | _gholvabun_, a chamberlain                          |
| **-ogar**   | the one who does it, by calling or by cult rank | _zevrogar_, a wind-reader                           |
| **-avad**   | watered ground: an oasis or a spring            | _Ghavulavad_, the oasis where the tribes draw water |
| **-akhend** | a town, a walled settlement                     | _Qarvelakhend_, the walled city                     |
| **-akhem**  | a camp, lived in for a season                   | _Kherzulakhem_, the hunters' camp                   |
| **-adez**   | a fort, a tower or a vault                      | _Qeshvadez_, the lightning tower                    |

The offices of the Amradi court take _-ader_ and _-abun_: the sovereign is the _Shebarader_, and his ministers are _vashkader_. The storm cults take _-ogar_ for their lineages and their ranks, from the apprentice (_hamelogar_) to the senior elder (_ruzhogar_). The [[skill-dunharlng#lexicon|Dunhari Lexicon]] gives the stems and every built form.

## Everyday speech

_vev tesh zarem_ means “I see you”; _tesh
vev zarem_ means “you see me”. The examples put the person first,
the object or condition next, and the present verb last. _vev lavar
vorem_ means “I am well”, and _vev vazar varum_ means “I feel joy”.
These are ordinary spoken citations alongside the older offices and recited
sayings. The hyphenated stems retain their word-building use: _zever_ is the
ordinary word for wind, _ghuzam_ a storm and _qeshev_ lightning, each
listed as its own word rather than a bare name stem.

_vev_ is I or me, _tesh_ the person addressed, _yaz_ he,
_yesh_ she, _vem_ it, _yazun_ they and _vazun_ we. The addressee's
pronoun leaves their number unstated. _dolvar re vev_ is my cup,
_dolvar re tesh_ your cup and _dolvar re vazun_ our cup. _vev dolvar
varum_ means “I have a cup”; _dolvar ed vev varnav_ means “the cup
belongs to me”. _vev qev zarem_ means “I see myself” and
_yesh qev zarem_ “she sees herself”. The reflexive refers to
the subject of its own clause.

The short descriptions are whole expressions: _sedmar darom_ is a long seat,
_narav pavar mavend_ an adult man and _navun pavar_ a boy or one's son. The relationship
being discussed supplies the difference between a male child and a son.
_narav mavar mavend_ is an adult woman and _navun mavar_ a girl or one's daughter.
_mavun re daruv_ names a mother of either parent, and _navun re navun_ a child
of one's child. _navun pavar re darvanir_ names a sister's male child; replacing the sister
word with _darvaner_ names a brother's male child. The corresponding
female-child expressions name nieces. An orphan's _navun nev daruv_ describes
the absence of living parents rather than a judgement about clan standing.

_vev tesh vez zarem_ means “I do not see you”.
_vev nev zaremar vorem_ describes blindness and _vev nev shevamar vorem_
deafness. The absence is of the faculty, rather than one hidden object or an
ignored speaker. _zarev_ describes something a situated observer with
sight can discern. _zavoram_ describes material one can see through,
_vez zavoram_ material one cannot see through, and _zarevam_ a
visually distinct mark or outline. _zarvem zarevam vorem_
means “the pattern is clear”.

_vev vavand_ means “I inhale”, _vev vavaz_ “I exhale” and
_vev vahrash_ “I am suffocating”. Suffocation involves absent breathable
air or obstructed breathing. _vev tovrand vorem_ means “I am full” after
food or drink. _yesh marzham_ means “she conceives” and _yesh
marzhev_ “she gives birth”. _yesh navun marzem_ means “she
nurses a child at the breast”. _yaz ruzhavam_ means “he is growing older”.
_yaz vev hazvem_ means “he hurts me”; _vev hazrem_
“I hurt”. _vez navemav_ describes loss of sensory awareness.

_darvav sedar_ is a heart at ease with what it has. _navov re ravaz ravend_
names the feeling of a desire fulfilled; settling a feud does not itself
establish that feeling. _navrand_ is resolve to act or endure despite
fear. _marven re marev_ is romantic love, _marven re ravun_ the affection of
friends and _marven re darven_ family love. _marvash_ concerns everyone's
good without seeking repayment, standing or advantage for one's kin. It is
wider than the enforceable duty to protect a guest who has eaten one's salt.
_marvaz_ names sexual appetite. _neravam_ includes sharing company
or an activity without close friendship. _revam_ names reliance,
_revar_ subjective assurance and _revadash_ truth; assurance can be
misplaced. A poet's mistaken reading need not be _sevrazam_, an account
intended to deceive.

_vev dolvar ed tesh dovem_ means “I give you a cup”, and
_vev dolvar ed tesh dovram_ “I bring you a cup”.
_vev dolvar ve gharven dovlem_ means “I put the cup at the house”.
_vev vosh gharven ravem_ means “I leave the house”; _vev ed
gharven revaram_ “I arrive at the house”. _vev vosh navravar ravnez_
means “I flee from an enemy”. _vev dolvar dolraz_ means “I drop a cup”;
the cup is the thing allowed to fall. _vev or sevar shevash
sevor_ means “I shout”. _sevrim_ uses a breathy unvoiced sound.
_navraz_ communicates the speaker's own intention or power to harm,
rather than a warning about an unrelated danger.

_ravev gharven_ means near the house, _ravov gharven_ far from it,
_marvev gharven_ beside it and _davmar gharven ev qodram_
between the house and the mountain. _or gharven_ means inside the house;
_noveram gharven_ outside it; _revarav gharven_ beyond it.
_vev zavemav ed gharven ravam_ means “I go upward toward the house”;
_vev novirem ed gharven ravam_ gives downward movement toward it.
_zavmarav_ and _novmarav_ follow the stated viewpoint. _vosh hev_
means away from here; the actual reference place is named when “here” would
leave the direction unclear.

_ve davren re nevram_ means at position seven; _ve davren re
marzen_ at position eight. A stated position number supplies further
ordinals. _devav dovam_ is the listed count twenty. _zavem re dovam_ selects one
of a specified pair and _nevan re dovam_ excludes both. _ravev devav_ is about
ten, _ravev novir devav_ almost ten and _dov devav_ exactly ten. The near-below
expression stays below the stated amount; it does not describe a time that
has nearly arrived.

_tavren re dolvar ravar zemar tavren re sedvar vorem_ means
“the count of cups is greater than the count of chairs”. _tavrem re
ghavar ravir zemar tavrem re ghaver vorem_ means “the
amount of water is less than the amount of drink”. _ravar zemar temvar levar zevand_ compares an
item with every other item in the stated set, excluding the compared item
itself; _ravir zemar temvar levar zevand_ identifies the least. _lavar ravar zemar temvar levar zevand_ and _lavaz ravar zemar temvar levar zevand_ use
that same explicit other-member standard. Name counted objects, people or
measured amounts as appropriate. _ravar zemar tavrem qevam_ is more than the amount
fitting a stated need; _vez qevam_ is insufficient. _temvar
re dorevam nevam vorem_ means “the thing is of zero worth”.

_ve novren zavem_ is once, _ve novren dovam_ twice and _ve novren tavram_ repeatedly.
_reva_ marks recurrence rather than a count. _or novam re sevvar_ means during
a performance; replace the performance with _marzhan_ for during the birth.
_or novam re tovaram re vev_ means while I eat, literally during the time of my eating.
_nevrad marzhan_ means until the birth, and _vosh novam re marzhan_ since the
birth; replace the birth with the actual ending or starting event.
_vev tamvem tarvaz_ means “I have already done it”, _vev tamvem sevardem_ “I am still doing
it” and _vev tamvem vez tarvaz_ “I have not done it yet”. These citations use finishing
or continuing the named act. _nemram novan nemram re novav_ is yesterday and _nemram nevor nemram re novav_
tomorrow. They name days without introducing a new tense form.

_yev revem_ asks “who comes”; _tesh
yem zarem_ “what do you see”. _dolvar
yer_ selects which cup from a known set. _gharven
ve yem dazvar veram_ asks where a house exists, _tesh
ve yem novam revem_ when the addressee comes, and _tesh
ed raverd re yem ravam_ why they go. _tesh gharven
ar yem raver qarvem_ asks how they build the house.
_tavren re dolvar yem vorem_ asks the count of cups; _tavrem re ghavar yem vorem_ the
amount of water. Replace the counted object or measured substance to ask
about a different quantity.

_dolvar re yev vorem_ asks whose the cup is. _tesh
dolvar ed yev dovem_ asks to whom the addressee gives a cup.
_tesh vosh yem dazvar revem_ asks from where they come.
_tesh gharven ed yem davrun qarvem_ asks
for what purpose they build the house. The existing rising question pitch
turns the complete _tesh vem zarem_ into “do you see it”. Use the
complete subject, object or condition, and present verb of the question.
_tesh yem sevaz_ requests clarification of the current utterance.

_revamad_ affirms reality or sincerity. _revar zevand re vev_ avows the
speaker's complete assurance. _zaram re vev_ qualifies a claim by what the
speaker has observed. _yazun yaz revem sevaz_ means “they say he comes”: the coming
stays inside the report and need not be endorsed by the speaker. Replace
the inner clause to report another claim. _lom yaz revem_
means “perhaps he comes”; _lom revard yaz revem_ “he probably comes”;
_lom revir yaz revem_ “he is unlikely to come”. _sevrad vez revad_
can be a mistaken claim without deception.

_tesh revem ev vev ravam_ means “you come and I go”;
_oz_ offers alternatives and _vek_ contrasts the clauses. _yaz vez
revem ev yesh vez revem_ denies both arrivals. _veva tesh
revem, daz vev ravam_ means “if you come, then I go”.
_veva tesh vez revem daz vev ravam_ means “unless you come, I go”; the negation covers the
complete condition. _veva vem vez revad vorem daz vev ravam_ means “otherwise I go”, with the
pronoun referring back to the preceding proposition. _varmav vev
narvamish vorem, vev ravam_ means “although I am ill, I go”.
_novash navramad_ names the obstacle despite illness.
_vek daz vev ravam_ means “nevertheless I go”.
_ghaver ve davren re tovav_ names a drink instead of food.
_vev ed davrun re dovarash ravam_ means “I go for the purpose of a gift”.

_oz tesh revem oz vev ravam_ means “either you come or I go”; _tesh vez revem ev vev vez ravam_
“neither you come nor I go”; _ev tesh revem ev vev ravam_ “both you come and I go”.
_vev tesh revem oz tesh vez revem velmor_ means “I consider whether you come or do not
come”. Both alternatives keep the same subject. _tesh gharven
le vev qarvem_ compares the addressee's building with the speaker's:
“you build a house as I do”. _vosh zevand nev tesh_ means except you;
_zav tesh_ only you; _dazem tesh_ even you;
_tev tesh_ you also.

_vev pavram dovner_ means “I can walk”; _vev pavram vez dovner_
“I cannot walk”. _tesh ravrez levem_ gives
permission to go. _vev ravrez revder_ states an obligation to go;
_vev vez ravrez revder_ an obligation not to go. _vev ravrez vez revder_
denies the obligation. _tesh sevem laverem_
advises sleep. The named action precedes the modal predicate in these
citations. _vev tesh levram_ permits the addressee to
do the act already under discussion; _vev tesh nevrem_
prohibits it. _levav vez revderav_ is both permitted and not required;
_nevmav_ is forbidden. _vem dovnav vorem_ says the event
already under discussion is possible. _lom yaz revem_ states a
possible coming rather than granting someone leave to act.

_gholam ar tesh_ wishes safety on meeting someone and _tesh ar gholav ravam_ on parting.
A host's _tesh gholmer vorem_ receives someone as a guest.
_vev ramev varum_ expresses thanks; _vev lamvar varum_
responds with pleasure at helping. _vev darvam varum_ expresses regret;
_tesh vev ravmash_ asks forgiveness. _lamhev_ makes a
request courteous: _lamhev tesh shevaram_, please listen.
_lamhev pavren_ asks room to pass or forbearance for an intrusion.
_lamhev tesh reva sevaz_ asks that something be said again. _tesh sevnem_,
_tesh hev revem_, _tesh vosh hev ravam_, _tesh vev ghovem_ and
_tesh sedvez_ ask someone to wait, come here, go away, help and stop.
They are the listed conventional requests using the present citations.

_vev velvam_ acknowledges understanding;
_vev vez velvam_ its absence.
_tesh yem davrem_ asks the intended meaning.
_tesh evam ar yem raver sevaz_ asks how to say this; the expression being
asked about replaces the demonstrative. _varnam re evam yem vorem_
asks its name. _revad_ said alone with rising pitch requests
confirmation, often with conversational surprise.

_naverim ghev_ is very small, _naverim ghavor_ tiny and _navord ghavor_ huge.
_naverim zemim_ is somewhat small and _naverim zemiv_
slightly small. _mavor re darovar_ names wood as material, including branches,
fallen wood and timber; _shamvar_ names sheep's fleece fibre.

The ordinary citations use the tongue's Qalezu writing alongside its recited
tradition. The older sayings, names, endings and courtly or cult ranks keep
their recorded uses.

## Script and Literacy

Dunhari is an oral tongue. The tribes keep law, genealogy and treaty in memory and recite them, and a tribe's archive is what its people remember. Where Dunhari is set down at all, in the courts and cities of settled Amradad and the oasis belt, it is written in [[skill-qalzscrscrpt|Qalezu]], the consonantal alphabet of Au'Khelathu, from left to right.

Literacy among Dunhari nomadic populations centers on oral transmission; written literacy is highest in settled urban communities and courtly contexts. The primary literary form remains poetry and song, which are memorized and transmitted orally through generations.

## Historical Development

Dunhari evolved from ancient proto-Ankarian languages that developed in the desert regions over at least fifteen centuries. The language is marked by significant influence from neighboring Ankarian language families, particularly in vocabulary relating to trade and urban settlement. However, the core poetic structure and nomadic vocabulary remain distinctly archaic.

The systematization of Dunhari poetic meters and formal registers occurred during the rise of the Kingdom of Amradad approximately five centuries ago, when courtly poetry became a marker of elite status and refinement. This courtly register, known as **Amradi**, represents a formalization and refinement of standard Dunhari.

## Regional Dialects

### Nomadic Dunhari (Desert Dialect)

The dialect of the Dunhara tribes and desert peoples, featuring archaic grammatical forms, rich weather vocabulary, and star-navigation terminology. Pronunciation tends toward vowel lengthening and emphatic stress.

### Settled Dunhari (Khazryn Dialect)

Spoken in oasis towns and settled communities, this dialect shows simplified nominal inflection and borrowings from neighboring Ankarian languages. More conservative in poetic register preservation than Nomadic Dunhari.

### Amradi (Courtly Dialect)

The prestige dialect of the Kingdom of Amradad, spoken in [[place-tahrodan|Tahrodan]] and refined urban centers. Amradi is characterized by:

- Softening of velar fricatives (_kh_ > _kh_ or _h_, _gh_ > _g_ or _w_)
- Elaborate politeness markers and honorific forms
- Archaic verbal forms used for formal declarations
- Heavy emphasis on poetic meter and metaphor
- Extensive courtly vocabulary for state functions, diplomacy, and artistic patronage

Amradi is the register of poetry competitions, diplomatic negotiations, and court ritual. It is mutually intelligible with standard Dunhari but carries significant prestige markers.

## Sample Phrases

Khordesh-an velmuz danaz
: "The desert teaches patience" (lit. "Desert-place knowledge gives")

Shuvar khorvaz miran sezhakh
: "Honor flows like water through the seasons" (traditional nomadic saying)

Forreh golvan azardam
: "Beauty endures in memory" (poetic maxim)

Mehrun parvandar sazadar
: "The moon guides the truthful traveler" (navigational blessing)

Shirzari zorvun varidan
: "The lion's courage inspires generations" (courtly saying)

## Lexicon

The [[skill-dunharlng#lexicon|Dunhari Lexicon]] holds the stems of the tongue, the endings that build offices, lineages and place names from them, and the register of every name the setting gives in the Dunhara and Amradad.

## Related Languages

Dunhari is the primary member of the **Desert language family**, a classification that encompasses related languages of the central Ankarian desert regions. The family includes several extinct languages and at least one other modern language with limited speakers.

The language shows distant connections to [[skill-taruzelilng|Taruzeli]] through ancient shared vocabulary related to trade and navigation, but these represent contact rather than genetic relationship.

## Naming Traditions

### Structure

Dunhari names follow the pattern: **Given Name + Clan/Tribal Name**. Given names are personal identifiers emphasizing virtues, natural phenomena, or ancestral connections. Clan names mark tribal affiliation and social position.

Male given names tend toward:

- Open syllable patterns with frequent vowel sequences
- Root meanings emphasizing strength, virtue, royal lineage, or celestial bodies
- Diphthongs and long vowels in final positions (Razashar, Korushan, Yazharan)
- Compound structures reflecting ancestral lineages

Female given names tend toward:

- Melodic vowel sequences, particularly final **-a**, **-an**, **-ah**, **-in**
- Root meanings emphasizing grace, water, fire, stars, and protection
- More flowing consonant patterns with liquid and nasal emphasis

### Clan Names

Clan and tribal names are prestigious markers carrying genealogical and social significance. They function as identity markers in nomadic and courtly contexts alike:

- **-an** endings typically mark patrilineal or primary clan descent
- **-i** endings often mark sub-clans or secondary affiliations
- **-id** endings denote "descendants of" specific ancestors

Examples: _Afsheran_ (Afshar's tribe), _Girani_ (Giran's people), _Razdanak_ (descendants of Razdan)

### Courtly Register (Amradi)

In courtly settings, individuals may employ extended genealogical introductions incorporating multiple clan names and ancestral references, a practice central to Amradi diplomatic protocol.

## Name Lists

### Male Given Names

Razashar, Vahdarun, Tirsad, Korushan, Mehrun, Khordesh, Yazharan, Pashman, Barmokh, Artavin, Farhazar, Torvash, Sivanash, Shuvar, Kavezhan, Rostadar, Samardan, Harumaz, Kamid, Goshanad, Jamaris, Zarvash, Valhamin, Nersad, Darizhan, Ahrash, Khoshar, Bashvard, Tahruz, Khorman, Shabar, Azarvan, Pardisak, Kayvonad, Mahvarad, Shurnav, Eskaram, Parvuzhan, Behfard, Arshanak, Darmun, Rostash, Vardun, Firanash, Tirashan, Khorvaz, Qarmuz, Armanad, Firavad, Saidan, Venrad, Maneshir, Jamrosh, Fakhrad, Nimrash, Tavishar, Farazun, Zarmav, Nevaran, Rushak, Rezhad, Sezhakh, Parmor, Siram, Tohmar, Bahrazad, Parvash, Ashudar, Asfar, Givandar, Qavadar, Hamzun, Razan, Bafraz, Shahran, Pirvand, Davuran, Zamirad, Afshanar, Timan, Hurdan, Nemver, Farzahan, Bazudar, Damoz, Ramuz, Siaran, Azardam, Varinash, Shadezan, Khavend, Dashir, Tarnav, Eskiran, Zimran, Khizhor, Zandarud, Mehrunash, Hadushan, Kemudan

### Female Given Names

Fazhina, Rosharan, Azadam, Shavineh, Dehna, Mazinan, Mizhara, Tavura, Sharanaz, Sameza, Azarin, Delanash, Golran, Yesera, Zaranah, Ashfan, Kharanah, Dervun, Layah, Nahedan, Sormina, Mahrush, Shiran, Deyena, Farvan, Nushir, Khozura, Zarham, Parivin, Biban, Khavari, Shirnah, Forreh, Rushanah, Parnava, Givanu, Sarnish, Milasah, Razanash, Zaraneh, Marvinah, Gulranah, Tevuran, Mahsara, Arinah, Nazira, Khorsash, Tashneh, Rudavah, Bazharam, Girandan, Parvanan, Dunash, Afzandah, Shafin, Yesre, Aradun, Shosra, Golbara, Kaminah, Nirah, Paryan, Tizhva, Tuvan, Salmara, Girnah, Tizhas, Nomena, Parvarin, Sharminah, Sarmanaz, Mazanash, Zaribah, Shazin, Azanin, Borvah, Darzash, Lemeza, Durnash, Komena, Asharan, Divaran, Kavakht, Shakivah, Turanah, Banush, Menuna, Zalaran, Kamrin, Rozina, Farara, Gidana, Narzhi, Tarasha, Mardanah, Eshro, Shavri, Divanah, Shandara, Nevuna

### Clan and Tribal Names

Afsheran, Ferudan, Vardozan, Tamaran, Khavar, Zandun, Barmandan, Qarush, Kaveran, Razdanak, Durmand, Parivan, Azardan, Girani, Shadavan, Vahdrak, Zarnush, Gholshan, Darvarid, Nemud, Golshani, Paresak, Serdom, Khorzand, Zarid, Bazakan, Afrun, Mazanid, Goravan, Parvandar, Sarani, Turvand, Parvaran, Mahvaran, Shamayan, Razhak, Khonash, Varakan, Kaviran, Mazhen, Shiradar, Darvani, Khozrun, Gorgaz, Shirzari, Zarmana, Perudan, Gazvan, Farumak, Baravi, Tamiran, Dargan, Shivash, Mervaran, Goharan, Bakarin, Nazari, Padvan, Narshad, Sivadar, Arshin, Tamirh, Sobukan, Sahaz, Bazhon, Mahkun, Tavrud, Ashazad, Khavandar, Varidan, Kamruz, Tahvan, Darush, Shahran, Farrud, Padeshun, Khareman, Namirun, Shahrun, Gavandar, Narsafi, Mehrun, Shavan, Parnazar, Sharman, Bergoz, Zanavi, Beluri, Khafur, Khormaz, Shirana, Farumaz, Darkaran, Mushtan, Tahridan, Gildash, Namiran, Khusham, Sazadar, Parkad

## Dunhari Lexicon {#lexicon}

A caravan that crosses the [[place-dunharargn|Dunhara]] meets two registers of one tongue. At the wells and in the black tents the tribes speak Dunhari as the poets keep it, and the storm cults name their lineages in it: a _zevrogar_ reads the wind, a _belgogar_ calls the rain. In the walled cities of the [[affiliation-kngdmmrdd|Kingdom of Amradad]] the same words take the polish of the Amradi court, and the Shebarader's officers carry them as titles: the _vazhmader_ who judges a city and the _tagemader_ who governs it, the _gholvabun_ who keeps the door. This page is the word-hoard of both: the stems, what each ending makes of them, the rules a new word is built by, and the register of every name the setting gives in the Dunhara and Amradad.

A Dunhari stem names an act or a thing, and an ending says what part it plays. _Vazhm-_ is to weigh a claim; _vazhmader_ is the one who weighs it by office, the judge. The same handful of endings is laid on every stem, and a place is a stem with the ending that marks its kind of ground: _ghavul-_ is to draw water, and _Ghavulavad_ is the oasis where the tribes draw it.

The sound of Dunhari is open and flowing. Words open on a vowel or a single consonant, the rasping _kh_ and _gh_ fall anywhere, and long vowels carry the weight of a line of verse. Stress falls on the first syllable or the second-last.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited: a noun in its plain form, a verb in its present. A form that closes on a hyphen is a bound stem, which never stands alone. A word made of smaller parts names the stem and the ending the form is made of, joined by `+`, and the form is exactly what the suffix table makes of them.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-dunharlng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Word edges

A word opens on a vowel or a single consonant, and closes on a vowel, on one of the consonants below, or on one of the pairs below. A bound stem, written with a closing hyphen, closes on anything.

```sql
SELECT CASE edge WHEN 'closeConsonant' THEN 'Consonants that close a word' WHEN 'closeCluster' THEN 'Pairs that may close a word' WHEN 'vowelPair' THEN 'Vowels that may stand together' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-dunharlng' ORDER BY position
```

### Clusters

```sql
SELECT 'Most consonants together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-dunharlng'
```

## Building words {#building-words}

One move makes every built word on this page: **an ending on a stem.** The stem is bound, and each ending says what part the stem's act or thing plays. The clan endings _-an_, _-i_ and _-id_ are the ones the language note gives for tribal names; the others make offices, callings and places.

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", attaches AS "Stem", gloss AS "Makes", coalesce(nullif(array_to_string(list_transform(examples, e -> regexp_replace(e, '^(\S+) > ([^\s,;]+)', '_\1_ > _\2_')), ', '), ''), '—') AS "Example"
FROM affixes
WHERE language = 'thalorna-note-skill-dunharlng'
ORDER BY position
```

## Words {#words}

### The Shebarader's court

Every office of the Amradi court is a stem with an ending that says how its holder stands to the act. _-ader_ makes the one who holds an office by the Shebarader's grant: the judge weighs claims, the governor holds a city in trust, the market inspector tests a measure, and the great officers bear the charges of state and lead the host. _-abun_ makes the keeper: the registrar who enters a name or a sum in the roll, the chamberlain who keeps the threshold of the Shebarader's rooms, and the principal wife who keeps the inner household. The seat of the court is named for the stem of sitting in state.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-dunharlng' AND field = 'The Shebarader''s court' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### Wind, rain and the storm cults

The storm cults name their five lineages and their ranks with _-ogar_, the one who does a craft: a lineage is the one who does its craft, and a rank is the one who stands at it. The lightning-marked alone take _-i_, because nobody does lightning; it is done to them. The people at large, as the cults count them, are a following, _vadukesh_.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-dunharlng' AND field = 'Wind, rain and the storm cults' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### Ground, water and settlement

A settled place is named for the work done on its ground, and its ending says what kind of place it is: _-avad_ for an oasis or a spring, _-akhend_ for a town, _-akhem_ for a camp, _-adez_ for a fort, a tower or a vault. The names are old and say what the first settlers did there, not what the place does now.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-dunharlng' AND field = 'Ground, water and settlement' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

## Making names {#making-names}

**A Dunhari person** carries a given name and a clan name, the given name first: [[being-trvshshrdr|Torvash Shiradar]] is Torvash of the [Shiradar]{.name data-type="affiliation/lineage"}. The clan name carries the endings the language note gives, _-an_ for primary descent, _-i_ for a sub-clan and _-id_ for the descendants of a founder. Most given and clan names are older than the stems on this page, and the register shows `—` for them.

**A place** is a stem with an ending that marks its kind of ground, named for the work its first settlers did there: [[place-ghavulavad|Ghavulavad]], the oasis where the tribes draw water at the great well, [[place-qarvelakhend|Qarvelakhend]], the walled city, [[place-kherzulakhem|Kherzulakhem]], the hunters' camp, and [[place-twrlghtnmrkd|Tower of the Lightning-Marked]] (Qeshvadez), the lightning tower.

**An office** is a stem with _-ader_, _-abun_ or _-ogar_, written alone: the Shebarader's _vazhmader_ and _gholvabun_, the storm cults' _zevrogar_ and _ruzhogar_. The great offices of the court and the realm itself are named in the language of these pages.

## Scope {#scope}

The register below holds every name of every note in the Dunhara and Amradad. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'folders' THEN 'folder' WHEN 'cultures' THEN 'culture' WHEN 'lore' THEN 'lore' WHEN 'parents' THEN 'parent' WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-dunharlng'
GROUP BY kind ORDER BY CASE kind WHEN 'folders' THEN 0 WHEN 'cultures' THEN 1 WHEN 'lore' THEN 2 WHEN 'parents' THEN 3 WHEN 'addresses' THEN 4 END
```

## Attested names {#attested-names}

Every name the setting gives a person, place, polity, office or thing of the Dunhara and Amradad, with the note where it is met. A name built from this page shows how; a name the tongue uses that is not built from it shows `—`, and a name in the reader's tongue is tagged as such.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'dunhari' THEN ', [[' || tongue_language || '|Dunhari]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-dunharlng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-dunharlng' ORDER BY position
```

## Retired names {#retired-names}

A retired name is one the setting does not write: a word or a name of an Earth language, a Dunhari form built on an ending that belongs to another tongue, or a name one sound from an Earth name. Each stands below with the name written in its place, and no page writes it, however accented. A `terran_analog` comment names the Earth source on purpose and is not read.

```sql
SELECT '`' || form || '`' AS "Retired",
       coalesce(array_to_string(list_transform(instead, x -> '`' || x || '`'), ', '), '—') AS "Written instead",
       why AS "Why"
FROM retired WHERE language = 'thalorna-note-skill-dunharlng' ORDER BY position
```
