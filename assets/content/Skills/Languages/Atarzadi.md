---
shortcode: atarzadilng
name: {full: Atárzadi Language, aliases: []}
type: skill
subType: language
description: "The harsh, long-voweled tongue of the Atarzád, a Desert-family cousin of Dunhari."
tags: []
data:
  core: true
  abbreviation: Atz.
  writtenIn: {map: qalezu, font: qalezu-hand}
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: "{given} {tribe}"
    given:
      female:
        - "Yuremat"
        - "Leqoshat"
        - "Amulezat"
        - "Sekholat"
        - "Hozhirat"
        - "Zoghelat"
        - "Keshumat"
        - "Helbazat"
        - "Zuqelat"
        - "Koshinat"
        - "Aqeshat"
        - "Lekhimat"
        - "Huleshat"
        - "Tolezat"
        - "Niqoshat"
        - "Emuzhat"
        - "Yalishat"
        - "Kurbelat"
        - "Uzhemat"
        - "Khumezat"
        - "Zhurikat"
        - "Nileshat"
        - "Yelqimat"
        - "Eshurat"
        - "Lozhekat"
        - "Qimurat"
        - "Oshenat"
        - "Yotekhat"
        - "Teqemat"
        - "Gizhelat"
      male:
        - "Gherosor"
        - "Zhoqaror"
        - "Khemozor"
        - "Bizhunor"
        - "Gholutor"
        - "Tulqenor"
        - "Shekhulor"
        - "Yotekhor"
        - "Zhudekor"
        - "Rezhulor"
        - "Sighotor"
        - "Nozhikor"
        - "Khorbetor"
        - "Keloshor"
        - "Ghodenor"
        - "Burqalor"
        - "Teqemor"
        - "Zelumor"
        - "Ghazrelor"
        - "Eshuror"
        - "Oshenor"
        - "Zhurikor"
        - "Kelumor"
        - "Zhimelor"
        - "Ghuzolor"
        - "Noghezor"
        - "Helbazor"
        - "Zuqelor"
        - "Koshinor"
        - "Aqeshor"
        - "Qimuror"
        - "Lozhekor"
        - "Dokhimor"
        - "Yelqimor"
        - "Bozekhor"
        - "Nulezhor"
        - "Qeshumor"
        - "Azhuror"
        - "Deghoshor"
        - "Ebozor"
        - "Burekhor"
    tribe:
      - "Gherosod"
      - "Bozekhod"
      - "Kelumod"
      - "Zhimelod"
      - "Ghuzolod"
      - "Noghezod"
      - "Helbazod"
      - "Zuqelod"
      - "Koshinod"
      - "Zhoqarod"
      - "Shekhulod"
      - "Toshelod"
      - "Ezhirod"
      - "Ghodenod"
      - "Burqalod"
      - "Keloshod"
      - "Oshenod"
      - "Zhurikod"
      - "Umrelod"
      - "Zhudekod"
      - "Rezhulod"
      - "Sighotod"
      - "Khemozod"
      - "Bizhunod"
      - "Gholutod"
      - "Tulqenod"
      - "Hozhirod"
      - "Yotekhod"
      - "Nozhikod"
      - "Zoghelod"
      - "Keshumod"
  sounds:
    syllables:
      onsets: single
      codas: [b, t, d, k, g, q, m, n, r, l, s, z, sh, zh, kh, gh]
      finals: [t, d, k, q, m, n, r, l, s, z, sh, kh]
      doubled: []
      vowelPairs: []
      initialVowel: true
      finalVowel: false
      signature: [a, ē, i, ō, ū]
    joins: [{meeting: C+C, rule: merge}]
  affixes:
    - {form: -un, gloss: a people}
    - {form: -od, gloss: a tribe}
    - {form: -ez, gloss: a place or holding}
    - {form: -ekh, gloss: one who does}
    - {form: -or, gloss: a man's given name, kind: name, given: man}
    - {form: -at, gloss: a woman's given name, kind: name, given: woman}
  tongues:
    - tag: atarzadi
      meaning: "an Atárzadi name, built from Atárzadi stems"
      language: skill-atarzadilng
    - {tag: faith, meaning: a name built on a word of the Ashaian faith}
  scope:
    folders: [khazryndesert, ankariskhazryndesert]
    cultures: [khazrynclt]
    lore: [khazrynclt]
    parents: [khzryndsrtrgn, swoasisbelt, hekardesert]
    addresses: [skill-khazrilng, skill-sowideslng, skill-atarzadilng]
  elements:
    - {form: uzhem, sense: water}
    - {form: kurbel, sense: well}
    - {form: deshak, sense: road}
    - {form: khumez, sense: sand}
    - {form: yalish, sense: salt}
    - {form: gheros, sense: horse}
    - {form: bozekh, sense: camel}
    - {form: toshel, sense: "kin, clan"}
    - {form: ezhir, sense: guest}
    - {form: qaltum, sense: debt}
    - {form: yudesh, sense: "passage, safe-conduct, toll"}
    - {form: oshen, sense: sky}
    - {form: zhurik, sense: wind}
    - {form: kelosh, sense: tower}
    - {form: ghoden, sense: city}
    - {form: burqal, sense: mountain}
    - {form: mozhel, sense: the dead}
    - {form: qeshum, sense: north}
    - {form: nulezh, sense: south}
    - {form: azhur, sense: east}
    - {form: deghosh, sense: west}
    - {form: shekhul, sense: flame}
    - {form: yotekh, sense: "promise, covenant"}
    - {form: ghizol, sense: twelve}
    - {form: umrel, sense: tribe}
    - {form: zhudek, sense: judge}
    - {form: rezhul, sense: prince of a tribe}
    - {form: sighot, sense: elder}
    - {form: lukhem, sense: council}
    - {form: tozhir, sense: law}
    - {form: elkush, sense: oath}
    - {form: kholib, sense: bondage}
    - {form: zelum, sense: "freedom, going out"}
    - {form: hamekh, sense: to wander}
    - {form: kunesh, sense: black}
    - {form: gizhel, sense: "stone, rock"}
    - {form: teqem, sense: holy}
    - {form: olgez, sense: "house, seat"}
    - {form: zhoqar, sense: war}
    - {form: khemoz, sense: sword}
    - {form: bizhun, sense: spear}
    - {form: gholut, sense: bow}
    - {form: tulqen, sense: shield}
    - {form: noghez, sense: herd}
    - {form: kelum, sense: sheep}
    - {form: zhimel, sense: goat}
    - {form: ghuzol, sense: dog}
    - {form: hozhir, sense: date palm}
    - {form: leqosh, sense: garden}
    - {form: amulez, sense: oasis}
    - {form: sekhol, sense: spring}
    - {form: zoghel, sense: gold}
    - {form: keshum, sense: silver}
    - {form: dumekh, sense: blood}
    - {form: ghesur, sense: bone}
    - {form: eboz, sense: father}
    - {form: emuzh, sense: mother}
    - {form: burekh, sense: son}
    - {form: tolez, sense: daughter}
    - {form: niqosh, sense: child}
    - {form: homzel, sense: "people, folk"}
    - {form: shumek, sense: name}
    - {form: delkosh, sense: word}
    - {form: yurem, sense: song}
    - {form: lozhek, sense: night}
    - {form: qimur, sense: day}
    - {form: helbaz, sense: sun}
    - {form: zuqel, sense: moon}
    - {form: koshin, sense: star}
    - {form: aqesh, sense: dawn}
    - {form: duzhel, sense: smoke}
    - {form: roqesh, sense: ash}
    - {form: khorbet, sense: iron}
    - {form: nezhol, sense: copper}
    - {form: tumoz, sense: clay}
    - {form: qembur, sense: wall}
    - {form: sholqet, sense: gate}
    - {form: bushkel, sense: market}
    - {form: teghum, sense: trade}
    - {form: ezbol, sense: gift}
    - {form: lekhim, sense: bread}
    - {form: hulesh, sense: milk}
    - {form: qozhur, sense: meat}
    - {form: ghazrel, sense: great}
    - {form: nilesh, sense: small}
    - {form: dokhim, sense: old}
    - {form: yelqim, sense: new}
    - {form: eshur, sense: first}
    - {form: zurkhem, sense: "to conquer, to take"}
    - {form: toqel, sense: "to hold, to keep"}
    - {form: khezul, sense: to break}
    - {form: urtekh, sense: "land, ground"}
    - {form: bayel, sense: "waste, desert"}
    - {form: ghisham, sense: fear}
    - {form: nozhik, sense: victory}
  fields:
    - name: Derived words
      holds: "The names and words built from the stems, each with the pieces it is made of."
    - name: Everyday speech
      holds: "Ordinary words and expressions for bodily life, relationships, things, actions and conversation."
  words:
    - form: Kurbelukhem
      class: name
      field: Derived words
      gloss: the council of the well
      built: [kurbel, lukhem]
    - form: Zhoqarod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of war; the largest tribe, the war-tribe; `Bahram` is retired"
      built: [zhoqar, -od]
    - form: Homzelun
      class: name
      field: Derived words
      gloss: the whole people
      built: [homzel, -un]
    - form: Shekhulez
      class: name
      field: Derived words
      gloss: the place of the flame
      built: [shekhul, -ez]
    - {form: Zhoqarekh, class: name, field: Derived words, gloss: a warrior, built: [zhoqar, -ekh]}
    - form: Gherosor
      class: name
      field: Derived words
      gloss: "a man's name: horse"
      built: [gheros, -or]
    - form: Yuremat
      class: name
      field: Derived words
      gloss: "a woman's name: song"
      built: [yurem, -at]
    - form: Toqel
      class: name
      field: Derived words
      gloss: "to keep: Keeper of the Unconsuming Flame"
      built: [toqel]
    - form: Zhudek
      class: name
      field: Derived words
      gloss: "judge: the leader acclaimed in a crisis; `Dukhen` is retired"
      built: [zhudek]
    - form: Rezhul
      class: name
      field: Derived words
      gloss: "prince of a tribe: a tribe's hereditary chieftain"
      built: [rezhul]
    - form: Shekhulat
      class: name
      field: Derived words
      gloss: "a woman's name: flame"
      built: [shekhul, -at]
    - form: Ezbolor
      class: name
      field: Derived words
      gloss: "a man's name: gift"
      built: [ezbol, -or]
    - form: Qemburor
      class: name
      field: Derived words
      gloss: "a man's name: wall; `Darius` is retired"
      built: [qembur, -or]
    - form: Gholutod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the bow"
      built: [gholut, -od]
    - form: Teghumod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of trade; the merchant-tribe of Ashkarad; `Ardashír` is retired"
      built: [teghum, -od]
    - form: Burqalod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the mountain; the keeper-tribe of Mount Shofar; `Khorshad` is retired"
      built: [burqal, -od]
    - form: Tozhirod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the law; the scholar-tribe of Kethramír; `Zarvan` is retired"
      built: [tozhir, -od]
    - form: Teqemod
      class: name
      field: Derived words
      gloss: "a tribe: the holy sons; the militant tribe of Shirvan; `Mihran` is retired"
      built: [teqem, -od]
    - form: Kelumod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the sheep; `Vaspur` is retired"
      built: [kelum, -od]
    - form: Zhimelod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the goat; `Savash` is retired"
      built: [zhimel, -od]
    - form: Hozhirod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the date palm; `Yazdanbar` is retired"
      built: [hozhir, -od]
    - form: Noghezod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the herd; `Parmida` is retired"
      built: [noghez, -od]
    - form: Bizhunod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the spear; `Darvaz` is retired"
      built: [bizhun, -od]
    - form: Ghuzolod
      class: name
      field: Derived words
      gloss: "a tribe: the sons of the dog; `Ardvi` is retired"
      built: [ghuzol, -od]
    - form: Ebozor
      class: name
      field: Derived words
      gloss: "a man's name: father; the patriarch of the twelve tribes; `Atarpat` is retired"
      built: [eboz, -or]
    - form: Yotekhor
      class: name
      field: Derived words
      gloss: "a man's name: covenant; the prophet of the Exodus; `Mushara` is retired"
      built: [yotekh, -or]
    - form: Nozhikor
      class: name
      field: Derived words
      gloss: "a man's name: victory; the Zhudek of the Conquest; `Yáhoshí` is retired"
      built: [nozhik, -or]
    - form: Sighotor
      class: name
      field: Derived words
      gloss: "a man's name: elder; the Toqel, son of Nozhikor; `Aspansár` is retired"
      built: [sighot, -or]
    - form: Khemozor
      class: name
      field: Derived words
      gloss: "a man's name: sword; the Rezhul of the Zhoqarod; `Yázdarmid` is retired"
      built: [khemoz, -or]
    - form: Tulqenor
      class: name
      field: Derived words
      gloss: "a man's name: shield; the war-leader exiled for reaching for a crown; `Artáz` is retired"
      built: [tulqen, -or]
    - form: Zelumor
      class: name
      field: Derived words
      gloss: "a man's name: freedom; the renegade merchant-prince in Amradad; `Parviz` is retired"
      built: [zelum, -or]
    - form: Aqeshat
      class: name
      field: Derived words
      gloss: "a woman's name: dawn; the young prophet; `Hana` is retired"
      built: [aqesh, -at]
    - form: Khemozekh
      class: name
      field: Derived words
      gloss: "sword-bearer: the warrior society of the Zhoqarod; `Sardá` is retired"
      built: [khemoz, -ekh]
    - form: Tulqenekh
      class: name
      field: Derived words
      gloss: "shield-bearer: the warrior society of the Burqalod; `Armán` is retired"
      built: [tulqen, -ekh]
    - form: Ghishamekh
      class: name
      field: Derived words
      gloss: "fear-bringer: the warrior society of the Teqemod; `Zharván` is retired"
      built: [ghisham, -ekh]
    - form: Roqeshekh
      class: name
      field: Derived words
      gloss: "ash-keeper: the Fire-Keeper, the first rung of the Ashaian priesthood; `Athravan` is retired"
      built: [roqesh, -ekh]
    - form: Delkoshekh
      class: name
      field: Derived words
      gloss: "word-bearer: the teacher-priest, the working Ashaian priesthood; `Herbad` is retired"
      built: [delkosh, -ekh]
    - form: Shekhul
      class: name
      field: Derived words
      gloss: "elder of the flame: the senior priest of a major fire-temple; `Mobad` is retired"
      built: [shekhul, sighot]
    - form: Shekhulukhem
      class: name
      field: Derived words
      gloss: "council of the flame: the body of the priesthood; `Mobadate` is retired"
      built: [shekhul, lukhem]
    - form: Leqoshzuqel
      class: name
      field: Derived words
      gloss: "the garden moon: the priesthood's name for the Tellumi Fourth month"
      built: [leqosh, zuqel]
    - form: dumekh
      class: n
      field: Everyday speech
      gloss: blood
      concept: blood
      built: [dumekh]
    - form: mezboz ul toshum
      class: n
      field: Everyday speech
      gloss: an ancestor; a forebear in one’s line of descent, literally parent of the lineage. The phrase includes forebears across earlier generations.
      concept: ancestor
    - form: rozhetul
      class: n
      field: Everyday speech
      gloss: a cord, a knotted string
      concept: cord
    - {form: ruzhem, class: n, field: Everyday speech, gloss: a river, concept: river}
    - {form: ruzhum, class: n, field: Everyday speech, gloss: a lake, concept: lake}
    - {form: burekh, class: n, field: Everyday speech, gloss: son, concept: son, built: [burekh]}
    - form: tolez
      class: n
      field: Everyday speech
      gloss: daughter
      concept: daughter
      built: [tolez]
    - form: olqez
      class: n
      field: Everyday speech
      gloss: a master or mistress of a household; the person who has authority over the household
      concept: master
    - form: meruq toshil
      class: n
      field: Everyday speech
      gloss: a brother, a kinsman within the kindred's peace
      concept: brother
    - {form: emureq toshil, class: n, field: Everyday speech, gloss: a sister, concept: sister}
    - form: qesh
      class: v
      field: Everyday speech
      gloss: "to see; to look; to watch by keeping one's attention on a person, thing or event. Eq qesh burzhek: I see the boar; eq qesh burzhek temil: I watch the boar for a while. Said as a call, qesh means look!"
      concept: [see-verb, look, watch, expression-look]
    - form: qeshumel
      class: n
      field: Everyday speech
      gloss: a sight; what is seen; the visible appearance of a person or thing
      concept: [see-noun, appearance]
    - {form: ghum, class: v, field: Everyday speech, gloss: to hear a sound, concept: hear-verb}
    - form: ghumel
      class: n
      field: Everyday speech
      gloss: a sound; something heard
      concept: hear-noun
    - form: nuzhem
      class: v
      field: Everyday speech
      gloss: to smell; to perceive a scent with the nose
      concept: smell-verb
    - form: nuzhul
      class: n
      field: Everyday speech
      gloss: a smell; a scent
      concept: smell-noun
    - form: mezhel
      class: v
      field: Everyday speech
      gloss: to taste; to perceive a flavour in the mouth
      concept: taste-verb
    - form: mezhum
      class: n
      field: Everyday speech
      gloss: a taste; a flavour
      concept: taste-noun
    - form: tukhel
      class: v
      field: Everyday speech
      gloss: to touch; to feel with the hand
      concept: touch-verb
    - form: tukhum
      class: n
      field: Everyday speech
      gloss: a touch; contact with a hand or another part of the body
      concept: touch-noun
    - form: qeshek
      class: adj
      field: Everyday speech
      gloss: "visible; able to be discerned by sight in the stated conditions. Burzhek esh qeshek: the boar is visible."
      concept: visible
    - form: mut qeshek
      class: adj
      field: Everyday speech
      gloss: "invisible; unable to be discerned by sight in the stated conditions. Burzhek esh mut qeshek: the boar is invisible."
      concept: invisible
    - form: ghumez
      class: v
      field: Everyday speech
      gloss: to listen; to attend to a sound rather than merely hear it. Said as a call, ghumez means listen!
      concept: [listen, expression-listen]
    - form: ghomesh
      class: n
      field: Everyday speech
      gloss: noise; disturbing or irregular sound
      concept: noise
    - form: ozhel
      class: n
      field: Everyday speech
      gloss: a voice; the sound made in speaking or singing
      concept: voice
    - form: ghumet
      class: n
      field: Everyday speech
      gloss: silence; absence of audible sound
      concept: silence
    - form: ghozhel
      class: adj
      field: Everyday speech
      gloss: loud; strong in audible volume
      concept: loud
    - form: ghumish
      class: adj
      field: Everyday speech
      gloss: quiet; low in audible volume
      concept: quiet
    - form: nuzhek
      class: adj
      field: Everyday speech
      gloss: fragrant; pleasant to smell
      concept: fragrant
    - form: nuzhok
      class: adj
      field: Everyday speech
      gloss: foul-smelling; unpleasant to smell
      concept: foul
    - form: mezhiq
      class: adj
      field: Everyday speech
      gloss: sweet in taste, as honey is
      concept: sweet
    - form: mezhet
      class: adj
      field: Everyday speech
      gloss: sour in taste, as a tart berry is
      concept: sour
    - {form: mezhor, class: adj, field: Everyday speech, gloss: bitter in taste, concept: bitter}
    - {form: yalishuq, class: adj, field: Everyday speech, gloss: salty in taste, concept: salty}
    - form: lozhem
      class: v
      field: Everyday speech
      gloss: to feel a bodily sensation, including warmth, pressure or pain
      concept: feel-verb
    - form: lozhum
      class: n
      field: Everyday speech
      gloss: a bodily sensation; an experience of warmth, pressure, pain or another physical stimulus
      concept: sensation
    - form: tukheq
      class: adj
      field: Everyday speech
      gloss: smooth to the touch; even and free of roughness
      concept: smooth
    - form: tukhor
      class: adj
      field: Everyday speech
      gloss: rough to the touch; uneven or abrasive
      concept: rough
    - form: moluk
      class: adj
      field: Everyday speech
      gloss: soft; yielding to pressure
      concept: soft
    - form: durqel
      class: adj
      field: Everyday speech
      gloss: hard to the touch; firm and resistant to pressure
      concept: hard-texture
    - form: qeshem
      class: v
      field: Everyday speech
      gloss: to notice; to become aware of something
      concept: notice
    - form: lozhiq
      class: v
      field: Everyday speech
      gloss: to perceive; to become aware through one or more senses
      concept: perceive
    - form: minkhel
      class: v
      field: Everyday speech
      gloss: to recognize a person or thing as already known
      concept: recognize
    - form: qeshor
      class: v
      field: Everyday speech
      gloss: "to seem; to give an impression. Rozhetul qeshor durqel: the cord seems hard."
      concept: seem
    - form: rozhum
      class: n
      field: Everyday speech
      gloss: anger; the feeling of being affronted or opposed
      concept: anger
    - form: ghazrem rozhum
      class: n
      field: Everyday speech
      gloss: wrath; intense, consuming anger
      concept: wrath
    - form: khulet
      class: n
      field: Everyday speech
      gloss: envy; discontent at another person's good fortune or possessions
      concept: envy
    - form: uzhret
      class: n
      field: Everyday speech
      gloss: hope; desire for a possible good outcome, with some expectation of it
      concept: hope
    - form: qozhum
      class: n
      field: Everyday speech
      gloss: greed; an excessive desire to possess or consume
      concept: greed
    - form: bozhel
      class: n
      field: Everyday speech
      gloss: boasting; speech that displays or exaggerates one's own merits
      concept: boasting
    - form: bozhum
      class: n
      field: Everyday speech
      gloss: pride; a feeling of worth or satisfaction in oneself or one's people
      concept: pride
    - {form: lezhur, class: n, field: Everyday speech, gloss: lust; sexual desire, concept: lust}
    - form: qeshokum ul uzhret
      class: n
      field: Everyday speech
      gloss: despair; the felt loss of hope, literally loss of hope. The phrase names a feeling of hopelessness.
      concept: despair
    - form: uzhkor
      class: n
      field: Everyday speech
      gloss: disappointment; sadness when a hoped-for outcome fails
      concept: disappointment
    - form: yozhem
      class: n
      field: Everyday speech
      gloss: faith; trust placed in a person, undertaking or sacred power
      concept: [faith, trust]
    - form: lemukh
      class: n
      field: Everyday speech
      gloss: joy; happiness; a glad state of feeling
      concept: [joy, happiness]
    - form: mezhrul
      class: n
      field: Everyday speech
      gloss: pleasure; agreeable feeling from an experience
      concept: pleasure
    - form: lomesh
      class: n
      field: Everyday speech
      gloss: contentment; feeling at ease with what one has
      concept: contentment
    - form: zherum
      class: n
      field: Everyday speech
      gloss: gratitude; thankful feeling for a benefit received
      concept: gratitude
    - form: qezhum
      class: n
      field: Everyday speech
      gloss: admiration; appreciative regard for someone's qualities or deeds
      concept: admiration
    - form: ghishor
      class: n
      field: Everyday speech
      gloss: courage; keeping one's purpose while afraid
      concept: courage
    - form: rozhok
      class: n
      field: Everyday speech
      gloss: hatred; enduring hostile feeling toward someone or something
      concept: hatred
    - form: yozhkor
      class: n
      field: Everyday speech
      gloss: jealousy; fear or resentment that a valued relationship or place will be taken by another
      concept: jealousy
    - form: ghisham
      class: n
      field: Everyday speech
      gloss: fear
      concept: fear
      built: [ghisham]
    - form: ghazrem ghisham
      class: n
      field: Everyday speech
      gloss: terror; overwhelming fear
      concept: terror
    - form: murqel
      class: n
      field: Everyday speech
      gloss: sadness; an inward heaviness of feeling
      concept: sadness
    - form: murqel ul qeshokum
      class: n
      field: Everyday speech
      gloss: grief; deep sorrow at loss, especially at a death
      concept: grief
    - form: shezhol
      class: n
      field: Everyday speech
      gloss: shame; painful feeling that one is exposed as unworthy
      concept: shame
    - form: shezhek
      class: n
      field: Everyday speech
      gloss: guilt; the feeling of responsibility for a wrong one has done
      concept: guilt
    - form: murnekh
      class: n
      field: Everyday speech
      gloss: regret; sorrow at one's past act or a missed possibility
      concept: regret
    - form: nilqem
      class: n
      field: Everyday speech
      gloss: humility; modest regard for one's own importance
      concept: humility
    - form: yezhur
      class: n
      field: Everyday speech
      gloss: confidence in one's capacity or an outcome; subjective certainty that a belief is right. Yezhur can be mistaken; it does not mean truth.
      concept: [confidence, certainty]
    - form: shezhum
      class: n
      field: Everyday speech
      gloss: embarrassment; self-conscious discomfort in a social situation
      concept: embarrassment
    - form: mulekh
      class: n
      field: Everyday speech
      gloss: compassion; pity; sympathetic concern for another's suffering, with a wish to relieve it
      concept: [compassion, pity, sympathy]
    - form: rozhum ul minkhum
      class: n
      field: Everyday speech
      gloss: resentment; lingering anger over a remembered injury or unfairness, literally anger of memory
      concept: resentment
    - form: qezhok
      class: n
      field: Everyday speech
      gloss: contempt; regarding someone or something as beneath respect
      concept: contempt
    - form: lezhek
      class: n
      field: Everyday speech
      gloss: forgiveness; release of resentment or a claim to punish someone for a wrong
      concept: forgiveness
    - form: lezhem
      class: n
      field: Everyday speech
      gloss: desire; wanting a person, thing or outcome
      concept: desire
    - form: lezhem ul zormul
      class: n
      field: Everyday speech
      gloss: longing; persistent desire for an absent person or something beyond reach. Zormul names the absent person or thing desired.
      concept: longing
    - form: lemukh ul lozhutum ul lezhem
      class: n
      field: Everyday speech
      gloss: satisfaction; the glad feeling that a desire has been fulfilled, literally joy of fulfillment of desire. The fulfillment relation belongs inside the joy relation.
      concept: satisfaction
    - form: lezkor
      class: n
      field: Everyday speech
      gloss: frustration; distress when a desire or intended act is obstructed
      concept: frustration
    - form: qeshur
      class: n
      field: Everyday speech
      gloss: curiosity; desire to find out about something
      concept: curiosity
    - form: menkor
      class: n
      field: Everyday speech
      gloss: confusion; inability to make sense of a matter
      concept: confusion
    - form: yezhkor
      class: n
      field: Everyday speech
      gloss: doubt; uncertainty whether a claim or expectation is right
      concept: doubt
    - form: ozhrum
      class: n
      field: Everyday speech
      gloss: surprise; the startled response to something unexpected, pleasant or unpleasant
      concept: surprise
    - form: lomkor
      class: n
      field: Everyday speech
      gloss: boredom; weary lack of interest in what is happening
      concept: boredom
    - form: uzhemor
      class: n
      field: Everyday speech
      gloss: anticipation; looking forward in feeling or thought to an expected event
      concept: anticipation
    - form: yezhem
      class: n
      field: Everyday speech
      gloss: belief; accepting a claim or explanation as true
      concept: belief
    - form: teqor
      class: n
      field: Everyday speech
      gloss: reverence; deep respectful regard, especially toward the sacred
      concept: reverence
    - form: teqesh
      class: n
      field: Everyday speech
      gloss: awe; wonder mixed with fear before something powerful or vast
      concept: awe
    - form: lezhum
      class: n
      field: Everyday speech
      gloss: affection; warm, caring regard for someone
      concept: affection
    - form: lezhum ul lezhrun
      class: n
      field: Everyday speech
      gloss: romantic love; affection for a desired or beloved partner, distinguished from sexual desire alone
      concept: love-eros
    - form: lezhum ul mulez
      class: n
      field: Everyday speech
      gloss: friendship; the affectionate regard friends have for one another
      concept: love-philia
    - form: lezhum ul toshem
      class: n
      field: Everyday speech
      gloss: family love; the caring attachment among family members
      concept: love-storge
    - form: lezhum ul omul om
      class: n
      field: Everyday speech
      gloss: selfless, universal love; caring regard for every human being without seeking a return. The phrase names an inclusive ethical attitude.
      concept: love-agape
    - form: lezhiq
      class: n
      field: Everyday speech
      gloss: attraction; the felt pull toward a person one finds appealing
      concept: attraction
    - form: lezhun
      class: n
      field: Everyday speech
      gloss: intimacy; personal closeness in which people share private feelings or bodily affection
      concept: intimacy
    - form: lezhekhor
      class: n
      field: Everyday speech
      gloss: devotion; sustained, committed attachment to a person or cause
      concept: devotion
    - form: yozhek
      class: n
      field: Everyday speech
      gloss: loyalty; keeping faith with a person or group through difficulty
      concept: loyalty
    - form: murel
      class: n
      field: Everyday speech
      gloss: companionship; the state of being together with a companion
      concept: companionship
    - form: rozhun
      class: n
      field: Everyday speech
      gloss: enmity; a relationship of enduring hostility
      concept: enmity
    - form: khorum
      class: n
      field: Everyday speech
      gloss: the head of a person or animal
      concept: head
    - {form: khorim, class: n, field: Everyday speech, gloss: hair on the head, concept: hair}
    - form: zheqel
      class: n
      field: Everyday speech
      gloss: the face; the front of the head bearing the eyes, nose and mouth
      concept: face
    - form: qeshul
      class: n
      field: Everyday speech
      gloss: an eye; the organ of sight
      concept: eye
    - form: ghumul
      class: n
      field: Everyday speech
      gloss: an ear; the organ of hearing
      concept: ear
    - form: nuzhuluk
      class: n
      field: Everyday speech
      gloss: the nose; the organ of smell
      concept: nose
    - form: mezhol
      class: n
      field: Everyday speech
      gloss: the mouth; the opening used for eating and speaking
      concept: mouth
    - form: mezhelum
      class: n
      field: Everyday speech
      gloss: a lip; either fleshy edge of the mouth
      concept: lip
    - {form: qelut, class: n, field: Everyday speech, gloss: a tooth, concept: tooth}
    - form: mezhen
      class: n
      field: Everyday speech
      gloss: the tongue; the muscular organ inside the mouth
      concept: tongue
    - form: khorun
      class: n
      field: Everyday speech
      gloss: the neck; the part connecting the head and trunk
      concept: neck
    - form: zhekum
      class: n
      field: Everyday speech
      gloss: a shoulder; the region where the arm meets the trunk
      concept: shoulder
    - {form: zhekur, class: n, field: Everyday speech, gloss: an arm, concept: arm}
    - form: zheket
      class: n
      field: Everyday speech
      gloss: an elbow; the joint in the middle of the arm
      concept: elbow
    - {form: tukhol, class: n, field: Everyday speech, gloss: a hand, concept: hand}
    - form: tukhil
      class: n
      field: Everyday speech
      gloss: a finger; a digit of the hand
      concept: finger
    - form: tukhet
      class: n
      field: Everyday speech
      gloss: a fingernail; the hard plate on the end of a finger
      concept: nail
    - form: ghorun
      class: n
      field: Everyday speech
      gloss: the chest; the upper front region of the trunk
      concept: chest
    - form: melukh
      class: n
      field: Everyday speech
      gloss: a breast; the milk-producing part of the chest
      concept: breast
    - form: ghorim
      class: n
      field: Everyday speech
      gloss: the heart; the organ that pumps blood
      concept: heart
    - form: molun
      class: n
      field: Everyday speech
      gloss: the belly; the front region below the chest
      concept: belly
    - form: hurqel
      class: n
      field: Everyday speech
      gloss: the back; the rear of the trunk
      concept: back
    - form: hurqim
      class: n
      field: Everyday speech
      gloss: a hip; the side of the pelvis
      concept: hip
    - {form: luqem, class: n, field: Everyday speech, gloss: a leg, concept: leg}
    - form: luqet
      class: n
      field: Everyday speech
      gloss: a knee; the joint in the middle of the leg
      concept: knee
    - {form: lughem, class: n, field: Everyday speech, gloss: a foot, concept: foot}
    - form: lughil
      class: n
      field: Everyday speech
      gloss: a toe; a digit of the foot
      concept: toe
    - form: shuzhel
      class: n
      field: Everyday speech
      gloss: skin; the outer living covering of a body
      concept: skin
    - {form: ghesur, class: n, field: Everyday speech, gloss: bone, concept: bone, built: [ghesur]}
    - form: mezgul
      class: n
      field: Everyday speech
      gloss: flesh; the soft bodily tissue beneath the skin
      concept: flesh
    - form: khorut
      class: n
      field: Everyday speech
      gloss: the forehead; the face above the eyes
      concept: forehead
    - form: mezhetum
      class: n
      field: Everyday speech
      gloss: a jaw; the bony structure that opens and closes the mouth
      concept: jaw
    - form: mezheq
      class: n
      field: Everyday speech
      gloss: the chin; the projecting lower front of the jaw
      concept: chin
    - form: zheqim
      class: n
      field: Everyday speech
      gloss: a cheek; either side of the face below an eye
      concept: cheek
    - form: khorul
      class: n
      field: Everyday speech
      gloss: the throat; the passage through the neck for air and swallowed food
      concept: throat
    - form: mezghem
      class: n
      field: Everyday speech
      gloss: the stomach; the digestive organ
      concept: stomach
    - form: molukhem
      class: n
      field: Everyday speech
      gloss: the waist; the narrow region between ribs and hips
      concept: waist
    - form: hurqur
      class: n
      field: Everyday speech
      gloss: the spine; the backbone
      concept: spine
    - form: hurqol
      class: n
      field: Everyday speech
      gloss: a buttock; either fleshy part on which a person sits
      concept: buttock
    - form: tukhur
      class: n
      field: Everyday speech
      gloss: a wrist; the joint between arm and hand
      concept: wrist
    - form: tukhal
      class: n
      field: Everyday speech
      gloss: the palm; the inner face of the hand
      concept: palm
    - form: tukhun
      class: n
      field: Everyday speech
      gloss: a thumb; the opposed digit of the hand
      concept: thumb
    - form: luqor
      class: n
      field: Everyday speech
      gloss: a thigh; the upper portion of the leg
      concept: thigh
    - form: lughur
      class: n
      field: Everyday speech
      gloss: an ankle; the joint between leg and foot
      concept: ankle
    - form: lughum
      class: n
      field: Everyday speech
      gloss: the heel; the rear portion of the foot
      concept: heel
    - form: lughal
      class: n
      field: Everyday speech
      gloss: the sole; the underside of the foot
      concept: sole
    - form: lughet
      class: n
      field: Everyday speech
      gloss: a toenail; the hard plate at the end of a toe
      concept: toenail
    - form: durqem
      class: n
      field: Everyday speech
      gloss: a muscle; bodily tissue that contracts to move or support the body
      concept: muscle
    - form: mezhul
      class: n
      field: Everyday speech
      gloss: fat; the soft oily tissue of a body
      concept: fat
    - form: zhorum
      class: n
      field: Everyday speech
      gloss: sweat; moisture given off through the skin
      concept: sweat
    - form: uzhem ul qeshul
      class: n
      field: Everyday speech
      gloss: tears; drops of fluid shed by the eyes, literally water of the eye
      concept: tears
    - form: uzhem ul mezhol
      class: n
      field: Everyday speech
      gloss: saliva; the fluid secreted in the mouth, literally water of the mouth
      concept: saliva
    - form: khorghum
      class: n
      field: Everyday speech
      gloss: the brain; the organ within the skull
      concept: brain
    - form: ghenul
      class: n
      field: Everyday speech
      gloss: a lung; an organ used in breathing
      concept: lung
    - form: mezhur
      class: n
      field: Everyday speech
      gloss: the liver; the large internal organ that processes nutrients and blood
      concept: liver
    - form: zhuqel
      class: n
      field: Everyday speech
      gloss: a kidney; an organ that filters the blood and produces urine
      concept: kidney
    - form: mezghel
      class: n
      field: Everyday speech
      gloss: an intestine; the long digestive passage below the stomach
      concept: intestine
    - form: lezhul
      class: n
      field: Everyday speech
      gloss: genitals; the sexual organs
      concept: genitals
    - form: lezhom
      class: n
      field: Everyday speech
      gloss: the womb; the uterus in which a child develops
      concept: womb
    - {form: lezhim, class: n, field: Everyday speech, gloss: a penis, concept: penis}
    - form: lezhen
      class: n
      field: Everyday speech
      gloss: a vagina; the internal passage from vulva to womb
      concept: vagina
    - form: lezhet
      class: n
      field: Everyday speech
      gloss: a testicle; either male reproductive gland within the scrotum
      concept: testicle
    - form: muzhel
      class: n
      field: Everyday speech
      gloss: food; something eaten for nourishment
      concept: food
    - {form: muzhek, class: v, field: Everyday speech, gloss: to eat food, concept: eat}
    - form: dozhum
      class: n
      field: Everyday speech
      gloss: a drink; liquid for drinking
      concept: drink-noun
    - {form: dozhek, class: v, field: Everyday speech, gloss: to drink liquid, concept: drink-verb}
    - {form: uzhem, class: n, field: Everyday speech, gloss: water, concept: water, built: [uzhem]}
    - form: ghen
      class: n
      field: Everyday speech
      gloss: air; the physical substance breathed and moved by wind
      concept: air
    - form: ghenum
      class: n
      field: Everyday speech
      gloss: a breath; an inhalation or exhalation of air
      concept: breath
    - form: ghenek
      class: v
      field: Everyday speech
      gloss: to breathe; to draw air into and out of the lungs
      concept: breathe
    - form: shumel
      class: n
      field: Everyday speech
      gloss: sleep; the bodily state of sleeping
      concept: sleep-noun
    - {form: shumrek, class: v, field: Everyday speech, gloss: to sleep, concept: sleep-verb}
    - {form: zuzhem, class: n, field: Everyday speech, gloss: urine, concept: urine}
    - {form: zuzhek, class: v, field: Everyday speech, gloss: to urinate, concept: urinate}
    - {form: murzhel, class: n, field: Everyday speech, gloss: dung; feces, concept: dung}
    - {form: murzhek, class: v, field: Everyday speech, gloss: to defecate, concept: defecate}
    - form: kholum
      class: n
      field: Everyday speech
      gloss: warmth; heat; the condition or energy that warms a body
      concept: [warmth, heat]
    - form: olgesh
      class: n
      field: Everyday speech
      gloss: shelter; a place or covering giving protection from exposure
      concept: shelter
    - form: muzhor
      class: n
      field: Everyday speech
      gloss: hunger; the bodily need to eat
      concept: hunger
    - form: olzhek muzhor
      class: v
      field: Everyday speech
      gloss: "to be hungry; to have hunger. Eq olzhek muzhor: I am hungry."
      concept: hungry
    - form: dozhor
      class: n
      field: Everyday speech
      gloss: thirst; the bodily need to drink
      concept: thirst
    - form: olzhek dozhor
      class: v
      field: Everyday speech
      gloss: "to be thirsty; to have thirst. Eq olzhek dozhor: I am thirsty."
      concept: thirsty
    - form: ghenek el
      class: v
      field: Everyday speech
      gloss: "to inhale; to draw a breath in. Eq ghenek el: I breathe in."
      concept: inhale
    - form: ghenek ot
      class: v
      field: Everyday speech
      gloss: "to exhale; to let a breath out. Eq ghenek ot: I breathe out."
      concept: exhale
    - form: ghenkor
      class: v
      field: Everyday speech
      gloss: to suffocate; to be deprived of the air needed to breathe
      concept: suffocate
    - form: shuzhek
      class: v
      field: Everyday speech
      gloss: to wake; to pass from sleep into wakefulness
      concept: wake
    - form: shuzheq
      class: adj
      field: Everyday speech
      gloss: awake; not sleeping
      concept: awake
    - form: shumesh
      class: n
      field: Everyday speech
      gloss: a dream; an experience of images or events during sleep
      concept: dream
    - form: lomul
      class: n
      field: Everyday speech
      gloss: rest; a pause from effort for bodily recovery
      concept: rest
    - form: lomur
      class: adj
      field: Everyday speech
      gloss: tired; in need of rest
      concept: tired
    - form: zhorek
      class: v
      field: Everyday speech
      gloss: to sweat; to give off sweat through the skin
      concept: sweat-verb
    - form: zhequm
      class: n
      field: Everyday speech
      gloss: cold; low temperature as a bodily condition or need for warmth
      concept: cold-noun
    - form: khush
      class: adj
      field: Everyday speech
      gloss: hot; high in temperature
      concept: hot
    - form: molet khush
      class: adj
      field: Everyday speech
      gloss: "warm; pleasantly or moderately hot. Uzhem esh molet khush: the water is warm."
      concept: warm
    - form: molet zheq
      class: adj
      field: Everyday speech
      gloss: "cool; moderately cold. Uzhem esh molet zheq: the water is cool."
      concept: cool
    - form: zheqek
      class: v
      field: Everyday speech
      gloss: to freeze; to become frozen solid
      concept: freeze
    - form: shekhur
      class: v
      field: Everyday speech
      gloss: to burn; to be consumed or damaged by fire or heat
      concept: burn
    - form: shelum
      class: n
      field: Everyday speech
      gloss: safety; protection; the safe state and the care that maintains someone free from harm
      concept: [safety, protection]
    - form: shelkor
      class: n
      field: Everyday speech
      gloss: danger; a condition in which harm is possible
      concept: danger
    - {form: lezhut, class: n, field: Everyday speech, gloss: sex; sexual activity, concept: sex}
    - form: lezhekh
      class: v
      field: Everyday speech
      gloss: to conceive; to begin carrying a developing child
      concept: conceive
    - form: lezhmul
      class: n
      field: Everyday speech
      gloss: pregnancy; carrying a developing child in the womb
      concept: pregnancy
    - form: olzhek lezhmul
      class: v
      field: Everyday speech
      gloss: "to be pregnant; to carry a developing child. Eq olzhek lezhmul: I am pregnant."
      concept: pregnant
    - form: elzum
      class: n
      field: Everyday speech
      gloss: a birth; the arrival of a child from the womb
      concept: birth
    - form: ezbek elzum
      class: v
      field: Everyday speech
      gloss: "to give birth to a child. Emuzh ezbek elzum: the mother gives birth."
      concept: give-birth
    - form: muzhrek im melukh
      class: v
      field: Everyday speech
      gloss: "to nurse a child at the breast. Emuzh muzhrek burekh im melukh: the mother nurses her son at the breast."
      concept: nurse
    - form: zelukh
      class: v
      field: Everyday speech
      gloss: to grow; to increase in size or develop toward maturity
      concept: grow
    - form: dokhek
      class: v
      field: Everyday speech
      gloss: to age; to grow older
      concept: age-verb
    - form: mozhem
      class: n
      field: Everyday speech
      gloss: death; the end of a living being's life
      concept: death
    - form: mozhuk
      class: adj
      field: Everyday speech
      gloss: dead; no longer living
      concept: dead
    - form: sulqem
      class: adj
      field: Everyday speech
      gloss: healthy; hale; in good bodily condition
      concept: healthy
    - {form: sulkor, class: adj, field: Everyday speech, gloss: sick; ill, concept: sick}
    - {form: shelok, class: adj, field: Everyday speech, gloss: injured; wounded, concept: injured}
    - form: durqor
      class: adj
      field: Everyday speech
      gloss: strong; physically able to exert much force
      concept: strong
    - form: durqish
      class: adj
      field: Everyday speech
      gloss: weak; lacking physical strength
      concept: weak
    - form: lomkorum
      class: adj
      field: Everyday speech
      gloss: exhausted; extremely tired
      concept: exhausted
    - form: muzhul
      class: adj
      field: Everyday speech
      gloss: sated; bodily full after enough food or drink
      concept: sated
    - {form: zheq, class: adj, field: Everyday speech, gloss: cold in temperature, concept: cold}
    - form: kholkor
      class: adj
      field: Everyday speech
      gloss: feverish; abnormally hot from illness
      concept: feverish
    - form: shelor
      class: n
      field: Everyday speech
      gloss: pain; an ache; bodily hurt, including a dull continuing pain
      concept: [pain, ache]
    - form: shelrek
      class: v
      field: Everyday speech
      gloss: to hurt someone; to cause bodily pain or injury
      concept: hurt-verb
    - form: shelzhek
      class: v
      field: Everyday speech
      gloss: to suffer; to undergo pain, distress or hardship
      concept: suffer
    - form: dumrek
      class: v
      field: Everyday speech
      gloss: to bleed; to shed blood
      concept: bleed
    - form: sulekh
      class: v
      field: Everyday speech
      gloss: to heal; to make or become sound after a wound
      concept: heal
    - form: sulzhek
      class: v
      field: Everyday speech
      gloss: to recover; to regain health after illness or injury
      concept: recover
    - form: qeshkor
      class: adj
      field: Everyday speech
      gloss: blind; unable to see through a lasting or bodily loss of sight
      concept: blind
    - form: ghumkor
      class: adj
      field: Everyday speech
      gloss: deaf; unable to hear through a lasting or bodily loss of hearing
      concept: deaf
    - form: luqkor
      class: adj
      field: Everyday speech
      gloss: lame; physically impaired in walking
      concept: lame
    - form: zelumek
      class: adj
      field: Everyday speech
      gloss: alive; living rather than dead
      concept: alive
    - form: lozhuk
      class: adj
      field: Everyday speech
      gloss: conscious; awake and aware of oneself or one's surroundings
      concept: conscious
    - form: mut lozhuk
      class: adj
      field: Everyday speech
      gloss: unconscious; lacking awareness of oneself and one's surroundings
      concept: unconscious
    - form: yelukh
      class: adj
      field: Everyday speech
      gloss: young; early in a living being's life
      concept: young
    - form: dokhim
      class: adj
      field: Everyday speech
      gloss: old
      concept: [old, old-object]
      built: [dokhim]
    - form: dokhish
      class: adj
      field: Everyday speech
      gloss: aging; growing older
      concept: aging
    - form: olzhek shelor
      class: v
      field: Everyday speech
      gloss: "to hurt; to experience bodily pain. Eq olzhek shelor: I am in pain."
      concept: hurt-pain
    - {form: eboz, class: n, field: Everyday speech, gloss: father, concept: father, built: [eboz]}
    - form: mezboz
      class: n
      field: Everyday speech
      gloss: a parent; a mother or father
      concept: parent
    - form: niqosh
      class: n
      field: Everyday speech
      gloss: child
      concept: child
      built: [niqosh]
    - form: emuzh ul mezboz
      class: n
      field: Everyday speech
      gloss: a grandmother; the mother of one's mother or father
      concept: grandmother
    - form: eboz ul mezboz
      class: n
      field: Everyday speech
      gloss: a grandfather; the father of one's mother or father
      concept: grandfather
    - form: niqosh ul niqosh
      class: n
      field: Everyday speech
      gloss: a grandchild; the child of one's child
      concept: grandchild
    - form: meruq toshil ul mezboz
      class: n
      field: Everyday speech
      gloss: an uncle; a brother of one's mother or father. For the spouse of an aunt, use lozhekhem ul emureq toshil ul mezboz.
      concept: uncle
    - form: emureq toshil ul mezboz
      class: n
      field: Everyday speech
      gloss: an aunt; a sister of one's mother or father. For the spouse of an uncle, use lozhekhem ul meruq toshil ul mezboz.
      concept: aunt
    - form: niqosh ul toshil ul mezboz
      class: n
      field: Everyday speech
      gloss: a cousin; the child of a sibling of one's parent. The sibling-of-parent relation belongs inside the child relation.
      concept: cousin
    - form: meruq lozhekhem
      class: n
      field: Everyday speech
      gloss: a husband; a male spouse
      concept: husband
    - form: emureq lozhekhem
      class: n
      field: Everyday speech
      gloss: a wife; a female spouse
      concept: wife
    - form: toshen
      class: n
      field: Everyday speech
      gloss: a descendant; a person of a later generation in someone's line
      concept: descendant
    - form: niqosh mezbozkor
      class: n
      field: Everyday speech
      gloss: an orphan; a child whose parents have died
      concept: orphan
    - form: emureq lozhekhem mozhuk
      class: n
      field: Everyday speech
      gloss: a widow; a woman whose spouse has died
      concept: widow
    - form: mezboz ul mezboz
      class: n
      field: Everyday speech
      gloss: a grandparent; a parent of one's parent
      concept: grandparent
    - form: meruq niqosh ul toshil
      class: n
      field: Everyday speech
      gloss: a nephew; the male child of one's sibling
      concept: nephew
    - form: emureq niqosh ul toshil
      class: n
      field: Everyday speech
      gloss: a niece; the female child of one's sibling
      concept: niece
    - form: lozhekhem
      class: n
      field: Everyday speech
      gloss: a spouse; a partner joined in marriage
      concept: spouse
    - form: lozhekhum
      class: n
      field: Everyday speech
      gloss: marriage; the recognized union of spouses
      concept: marriage
    - form: lozhekhek
      class: v
      field: Everyday speech
      gloss: "to marry; to enter marriage with someone. Eq lozhekhek lezhrun: I marry my beloved."
      concept: marry
    - form: toshel
      class: n
      field: Everyday speech
      gloss: kin, clan
      concept: [kin, clan]
      built: [toshel]
    - form: toshum
      class: n
      field: Everyday speech
      gloss: a lineage; a line of descent from remembered ancestors
      concept: lineage
    - form: meruq lozhekhem mozhuk
      class: n
      field: Everyday speech
      gloss: a widower; a man whose spouse has died
      concept: widower
    - form: rozhunekh
      class: n
      field: Everyday speech
      gloss: an enemy; a person or group in a relationship of hostility
      concept: enemy
    - form: ezhorukh
      class: n
      field: Everyday speech
      gloss: a stranger; a person one does not know
      concept: stranger
    - form: olgezur
      class: n
      field: Everyday speech
      gloss: a neighbor; a person living nearby
      concept: neighbor
    - form: murekh
      class: n
      field: Everyday speech
      gloss: a companion; someone together with or accompanying another
      concept: companion
    - {form: ezhir, class: n, field: Everyday speech, gloss: guest, concept: guest, built: [ezhir]}
    - form: ezhirol
      class: n
      field: Everyday speech
      gloss: a host; a person who receives a guest
      concept: host
    - form: rezhur
      class: n
      field: Everyday speech
      gloss: a leader; one who guides or directs others
      concept: leader
    - form: rezhekh
      class: n
      field: Everyday speech
      gloss: a follower; one who goes after or accepts the direction of a leader
      concept: follower
    - form: olgekhen
      class: n
      field: Everyday speech
      gloss: a servant; someone who serves another person or household
      concept: servant
    - form: yezhrekekh
      class: n
      field: Everyday speech
      gloss: a teacher; someone who helps another learn
      concept: teacher
      built: [yezhrek, -ekh]
    - form: yezhukhekh
      class: n
      field: Everyday speech
      gloss: a student; someone learning from a teacher
      concept: student
      built: [yezhukh, -ekh]
    - form: zulqem
      class: n
      field: Everyday speech
      gloss: a chair; a seat with a back
      concept: chair
    - {form: tezhol, class: n, field: Everyday speech, gloss: a table, concept: table}
    - form: olgez ul shumel
      class: n
      field: Everyday speech
      gloss: a bed; the place furnished for sleeping. Olgez ul shumel is the conventional sleep-seat expression.
      concept: bed
    - form: urtekh ul olgez
      class: n
      field: Everyday speech
      gloss: a floor; the lower surface of a room, literally ground of the house
      concept: floor
    - {form: qembur, class: n, field: Everyday speech, gloss: wall, concept: wall, built: [qembur]}
    - form: olghum
      class: n
      field: Everyday speech
      gloss: a roof; the outer covering above a building
      concept: roof
    - form: olgez
      class: n
      field: Everyday speech
      gloss: house, seat
      concept: [abode, seat]
      built: [olgez]
    - form: shekhum
      class: n
      field: Everyday speech
      gloss: fire; combustion giving heat and light
      concept: fire
    - form: ol ul shekhum olgez
      class: n
      field: Everyday speech
      gloss: a hearth; the place in a house where the fire is kept, literally the place of the household fire
      concept: hearth
    - form: dozhel
      class: n
      field: Everyday speech
      gloss: a door; the movable closure of an entrance
      concept: door
    - form: dozhet
      class: n
      field: Everyday speech
      gloss: a lock; a fastening opened with a key
      concept: lock
    - form: dozheq
      class: n
      field: Everyday speech
      gloss: a key; the implement that opens a lock
      concept: key
    - form: dozhel ul qeshul
      class: n
      field: Everyday speech
      gloss: a window; an opening that admits light and a view. Dozhel ul qeshul, door of the eye, is the ordinary household phrase for it.
      concept: window
    - form: qeshozhet
      class: n
      field: Everyday speech
      gloss: shutters; movable covers closing a window
      concept: shutters
    - form: dozhul
      class: n
      field: Everyday speech
      gloss: a cup; a vessel for drinking
      concept: cup
    - form: muzhuq
      class: n
      field: Everyday speech
      gloss: a bowl; an open vessel wider than it is deep
      concept: bowl
    - {form: kezhol, class: n, field: Everyday speech, gloss: a knife, concept: knife}
    - {form: muzhil, class: n, field: Everyday speech, gloss: a spoon, concept: spoon}
    - form: muzhet
      class: n
      field: Everyday speech
      gloss: a pot; a vessel for cooking or storage
      concept: pot
    - form: olqem ul shekhul
      class: n
      field: Everyday speech
      gloss: a lamp; a vessel holding a fuel and flame to give light, literally vessel of flame
      concept: lamp
    - {form: zhelum, class: n, field: Everyday speech, gloss: cloth; woven fabric, concept: cloth}
    - form: zhelun
      class: n
      field: Everyday speech
      gloss: clothes; the garments a person wears
      concept: clothes
    - form: olqesh
      class: n
      field: Everyday speech
      gloss: a room; an enclosed space within a building
      concept: room
    - form: el olghum
      class: n
      field: Everyday speech
      gloss: a ceiling; the inward-facing overhead surface of a room. This household phrase names the roof as seen from within.
      concept: ceiling
    - form: lorqem olgez
      class: n
      field: Everyday speech
      gloss: a bench; a long seat for several people
      concept: bench
    - form: muzhoreq
      class: n
      field: Everyday speech
      gloss: a jar; a broad-mouthed storage vessel
      concept: jar
    - form: dozhur
      class: n
      field: Everyday speech
      gloss: a bottle; a narrow-necked liquid container
      concept: bottle
    - {form: tuzhel, class: n, field: Everyday speech, gloss: a basket, concept: basket}
    - form: tuzhum
      class: n
      field: Everyday speech
      gloss: a bag; a flexible container
      concept: bag
    - {form: duzhek, class: n, field: Everyday speech, gloss: a hammer, concept: hammer}
    - form: rozhem
      class: n
      field: Everyday speech
      gloss: a rope; a thick twisted line for hauling or tying
      concept: rope
    - {form: zhelit, class: n, field: Everyday speech, gloss: a needle, concept: needle}
    - form: shekhul
      class: n
      field: Everyday speech
      gloss: flame
      concept: flame
      built: [shekhul]
    - form: duzhel
      class: n
      field: Everyday speech
      gloss: smoke
      concept: smoke
      built: [duzhel]
    - {form: roqesh, class: n, field: Everyday speech, gloss: ash, concept: ash, built: [roqesh]}
    - form: shekhureq
      class: n
      field: Everyday speech
      gloss: a coal; a lump of carbon fuel or a glowing ember
      concept: coal
    - form: shekhul rozhet
      class: n
      field: Everyday speech
      gloss: a torch; a portable burning light
      concept: torch
    - form: shekhul mezhul
      class: n
      field: Everyday speech
      gloss: a candle; a wax or tallow light with a wick
      concept: candle
    - form: zhelut
      class: n
      field: Everyday speech
      gloss: a garment; one piece of clothing
      concept: garment
    - form: zhelut ghorun
      class: n
      field: Everyday speech
      gloss: a shirt; a garment covering the trunk and arms
      concept: shirt
    - form: zhelut hurqel
      class: n
      field: Everyday speech
      gloss: a cloak; a loose outer garment
      concept: cloak
    - form: rozhem molukhem
      class: n
      field: Everyday speech
      gloss: a belt; a band worn around the waist
      concept: belt
    - form: zhelut lughem
      class: n
      field: Everyday speech
      gloss: a shoe; a covering for the foot
      concept: shoe
    - form: lorqem zhelut lughem
      class: n
      field: Everyday speech
      gloss: a boot; a foot covering extending up the lower leg
      concept: boot
    - form: sholqet
      class: n
      field: Everyday speech
      gloss: gate
      concept: gate
      built: [sholqet]
    - form: qembesh
      class: n
      field: Everyday speech
      gloss: a barrier; something that blocks passage
      concept: barrier
    - form: rozhet
      class: n
      field: Everyday speech
      gloss: wood; the material of a tree's trunk and branches
      concept: wood
    - form: gizhel
      class: n
      field: Everyday speech
      gloss: stone, rock
      concept: [stone, rock]
      built: [gizhel]
    - form: khoruleq
      class: n
      field: Everyday speech
      gloss: metal; a hard material worked by heating and hammering or casting
      concept: metal
    - {form: tumoz, class: n, field: Everyday speech, gloss: clay, concept: clay, built: [tumoz]}
    - form: shuzhul
      class: n
      field: Everyday speech
      gloss: leather; animal skin prepared for use by tanning or another curing process
      concept: leather
    - form: zhelumet ul kelum
      class: n
      field: Everyday speech
      gloss: wool; the soft textile fibers of a sheep’s fleece, before or after spinning, literally fiber of sheep
      concept: wool
    - form: zhelim
      class: n
      field: Everyday speech
      gloss: thread; a fine spun line used for weaving or sewing
      concept: thread
    - form: urtekh
      class: n
      field: Everyday speech
      gloss: land, ground
      concept: [earth, land]
      built: [urtekh]
    - form: urtekh ul zelumet
      class: n
      field: Everyday speech
      gloss: soil; the earth in which plants root and grow, literally ground of a plant
      concept: soil
    - {form: khumez, class: n, field: Everyday speech, gloss: sand, concept: sand, built: [khumez]}
    - form: tumoz uzhem
      class: n
      field: Everyday speech
      gloss: mud; wet soft earth
      concept: mud
    - form: khumesh
      class: n
      field: Everyday speech
      gloss: dust; fine dry particles on a surface or in air
      concept: dust
    - form: burqal
      class: n
      field: Everyday speech
      gloss: mountain
      concept: mountain
      built: [burqal]
    - form: burqil
      class: n
      field: Everyday speech
      gloss: a hill; a rounded or sloping natural rise of land
      concept: hill
    - form: burqel
      class: n
      field: Everyday speech
      gloss: a valley; low land between higher slopes
      concept: valley
    - form: burqesh
      class: n
      field: Everyday speech
      gloss: a plain; broad flat open land
      concept: plain-landform
    - form: rozhen
      class: n
      field: Everyday speech
      gloss: a forest; a large tract covered by trees
      concept: forest
    - form: urtekh muzhel
      class: n
      field: Everyday speech
      gloss: a field; open ground used for grazing or cultivation
      concept: field
    - form: olgez ul gizhel
      class: n
      field: Everyday speech
      gloss: a cave; a natural hollow in rock or earth, conventionally a house of stone. It names the natural hollow rather than a constructed building.
      concept: cave
    - form: ruzhel
      class: n
      field: Everyday speech
      gloss: a stream; a small natural flowing watercourse
      concept: stream
    - form: uzhum
      class: n
      field: Everyday speech
      gloss: the sea; the ocean; the great open salt water
      concept: [sea, ocean]
    - form: uzhur
      class: n
      field: Everyday speech
      gloss: a shore; the edge where land meets a sea or lake
      concept: shore
    - form: oshuzhem
      class: n
      field: Everyday speech
      gloss: rain; water falling from clouds
      concept: rain
    - form: oshzheq
      class: n
      field: Everyday speech
      gloss: snow; frozen flakes falling from clouds or lying on the ground
      concept: snow
    - {form: uzheq, class: n, field: Everyday speech, gloss: ice; frozen water, concept: ice}
    - {form: oshen, class: n, field: Everyday speech, gloss: sky, concept: sky, built: [oshen]}
    - {form: helbaz, class: n, field: Everyday speech, gloss: sun, concept: sun, built: [helbaz]}
    - {form: zuqel, class: n, field: Everyday speech, gloss: moon, concept: moon, built: [zuqel]}
    - {form: koshin, class: n, field: Everyday speech, gloss: star, concept: star, built: [koshin]}
    - form: oshel
      class: n
      field: Everyday speech
      gloss: a cloud; a visible mass of suspended water in the sky
      concept: cloud
    - {form: zhurik, class: n, field: Everyday speech, gloss: wind, concept: wind, built: [zhurik]}
    - form: oshkor
      class: n
      field: Everyday speech
      gloss: a storm; violent weather with strong wind and often rain or snow
      concept: storm
    - form: oshghum
      class: n
      field: Everyday speech
      gloss: thunder; the sound following lightning
      concept: thunder
    - form: oshkhol
      class: n
      field: Everyday speech
      gloss: lightning; a flash of electricity in the sky
      concept: lightning
    - form: zelumet
      class: n
      field: Everyday speech
      gloss: a plant; a growing living thing rooted in or drawing nourishment from soil or water
      concept: plant
    - {form: rozhel, class: n, field: Everyday speech, gloss: a tree, concept: tree}
    - {form: rozhil, class: n, field: Everyday speech, gloss: a leaf, concept: leaf}
    - form: rozhetum
      class: n
      field: Everyday speech
      gloss: a root; the part of a plant growing into the ground
      concept: root
    - form: rozhur
      class: n
      field: Everyday speech
      gloss: a branch; an arm growing from a tree's trunk
      concept: branch
    - {form: rozhumel, class: n, field: Everyday speech, gloss: a flower, concept: flower}
    - form: rozhemul
      class: n
      field: Everyday speech
      gloss: a fruit; a seed-bearing part of a plant, especially one eaten
      concept: fruit
    - {form: rozhit, class: n, field: Everyday speech, gloss: a seed, concept: seed}
    - {form: zelim, class: n, field: Everyday speech, gloss: grass, concept: grass}
    - form: ghorem
      class: n
      field: Everyday speech
      gloss: an animal; a beast; a living creature that feeds and moves rather than a plant
      concept: [animal, beast]
    - {form: oshekh, class: n, field: Everyday speech, gloss: a bird, concept: bird}
    - {form: uzhekhem, class: n, field: Everyday speech, gloss: a fish, concept: fish}
    - form: qezhel
      class: n
      field: Everyday speech
      gloss: an insect; a small six-legged creature
      concept: insect
    - form: qezhur
      class: n
      field: Everyday speech
      gloss: a worm; a soft long-bodied creeping animal
      concept: worm
    - form: uzheqem
      class: adj
      field: Everyday speech
      gloss: wet; covered or soaked with liquid
      concept: wet
    - form: khumor
      class: adj
      field: Everyday speech
      gloss: dry; free of moisture
      concept: dry
    - form: helbesh
      class: adj
      field: Everyday speech
      gloss: bright; giving or reflecting much light
      concept: bright
    - {form: lozhor, class: adj, field: Everyday speech, gloss: dark; lacking light, concept: dark}
    - form: mut olzhek oshel
      class: v
      field: Everyday speech
      gloss: "to be clear of clouds; said of the sky or weather. Oshen mut olzhek oshel: the sky has no clouds."
      concept: clear-weather
    - form: olzhek oshel
      class: v
      field: Everyday speech
      gloss: "to be cloudy; to have clouds. Oshen olzhek oshel: the sky is cloudy."
      concept: cloudy
    - form: qeshum
      class: n
      field: Everyday speech
      gloss: north
      concept: north
      built: [qeshum]
    - form: nulezh
      class: n
      field: Everyday speech
      gloss: south
      concept: south
      built: [nulezh]
    - {form: azhur, class: n, field: Everyday speech, gloss: east, concept: east, built: [azhur]}
    - form: deghosh
      class: n
      field: Everyday speech
      gloss: west
      concept: west
      built: [deghosh]
    - form: on
      class: num
      field: Everyday speech
      gloss: one; the count of a single thing
      concept: one
    - {form: oq, class: num, field: Everyday speech, gloss: two, concept: two}
    - {form: em, class: num, field: Everyday speech, gloss: three, concept: three}
    - {form: zhek, class: num, field: Everyday speech, gloss: four, concept: four}
    - {form: zhel, class: num, field: Everyday speech, gloss: five, concept: five}
    - {form: ush, class: num, field: Everyday speech, gloss: six, concept: six}
    - {form: ghoz, class: num, field: Everyday speech, gloss: seven, concept: seven}
    - {form: ozum, class: num, field: Everyday speech, gloss: eight, concept: eight}
    - {form: nez, class: num, field: Everyday speech, gloss: nine, concept: nine}
    - {form: zhut, class: num, field: Everyday speech, gloss: ten, concept: ten}
    - {form: oq zhut, class: num, field: Everyday speech, gloss: twenty; two tens, concept: twenty}
    - {form: tuzhumet, class: num, field: Everyday speech, gloss: one hundred, concept: hundred}
    - {form: tuzhul, class: num, field: Everyday speech, gloss: one thousand, concept: thousand}
    - form: ruq on
      class: num
      field: Everyday speech
      gloss: first in a numbered order; ordinal position one
      concept: first
    - form: ruq oq
      class: num
      field: Everyday speech
      gloss: second in a numbered order; ordinal position two
      concept: second
    - form: ruq em
      class: num
      field: Everyday speech
      gloss: third in a numbered order; ordinal position three
      concept: third
    - form: ozhem
      class: num
      field: Everyday speech
      gloss: half; one of two equal portions
      concept: half
    - form: ghuz
      class: num
      field: Everyday speech
      gloss: "many when counting things; much when measuring a substance. Ghuz muzhet: many pots; ghuz uzhem: much water."
      concept: [many, much]
    - form: neq
      class: num
      field: Everyday speech
      gloss: "few when counting things; little when measuring a substance. Neq muzhet: few pots; neq uzhem: little water."
      concept: [few, little-quantity]
    - form: mutum
      class: num
      field: Everyday speech
      gloss: "none; zero; no members or quantity of the stated set. Mutum muzhet: no pots."
      concept: [none, zero]
    - form: ruq zhek
      class: num
      field: Everyday speech
      gloss: "fourth; ruq before a cardinal gives its ordinal position. Muzhet esh ruq zhek: the pot is fourth in the row; ruq tuzhumet is hundredth."
      concept: ordinal-construction
    - form: zurem
      class: num
      field: Everyday speech
      gloss: one quarter; one of four equal portions
      concept: quarter
    - form: ulum
      class: adj
      field: Everyday speech
      gloss: whole; comprising every part without division or loss
      concept: whole
    - form: zhul
      class: num
      field: Everyday speech
      gloss: some; an unspecified portion or number
      concept: some
    - form: ghez
      class: num
      field: Everyday speech
      gloss: "enough; as many or as much as needed for the stated purpose. Ghez uzhem qosh muzhel: enough water for the food."
      concept: enough
    - form: ghezur
      class: num
      field: Everyday speech
      gloss: "more; a greater number or amount. Ghezur uzhem ghor eshesh: more water than this."
      concept: more
    - form: nuzhur
      class: num
      field: Everyday speech
      gloss: "less; a smaller number or amount. Nuzhur uzhem ghor eshesh: less water than this."
      concept: less
    - form: ghezur ghor omul uzhul
      class: num
      field: Everyday speech
      gloss: "most; more than every other member of the comparison set. Muzhet eshesh olzhek ghezur uzhem ghor omul uzhul muzhet: this pot has more water than all the other pots. Uzhul excludes the target pot."
      concept: most
    - form: nuzhur ghor omul uzhul
      class: num
      field: Everyday speech
      gloss: "least; less than every other member of the comparison set. Muzhet eshesh olzhek nuzhur uzhem ghor omul uzhul muzhet: this pot has less water than all the other pots."
      concept: least
    - form: ozheleq
      class: adj
      field: Everyday speech
      gloss: "equal; the same in number, measure or standing. Oq muzhet esh ozheleq ul uzhem: the two pots are equal in their water quantity."
      concept: equal
    - form: en
      class: num
      field: Everyday speech
      gloss: "each; every member considered separately. En muzhet olzhek uzhem: each pot contains water."
      concept: each
    - form: ozhen
      class: num
      field: Everyday speech
      gloss: both; the two together. Ozhen uzhem mulat muzhel esh huz means both water and food are here; the paired things follow ozhen and are joined by mulat.
      concept: [both, both-conjunction]
    - form: on ul ozhen
      class: num
      field: Everyday speech
      gloss: "either one of the two; one selected from that pair. Ezbek on ul ozhen muzhet: give either of the two pots."
      concept: either
    - form: mutum ul ozhen
      class: num
      field: Everyday speech
      gloss: "neither of the two; no member selected from the pair. Mutum ul ozhen muzhet esh uzheqem: neither pot is wet."
      concept: neither
    - form: qozhel
      class: adv
      field: Everyday speech
      gloss: "about; approximately, before a quantity. Qozhel zhut muzhet esh huz: about ten pots are here."
      concept: about
    - form: ner zhok
      class: adv
      field: Everyday speech
      gloss: "almost; just short of the stated quantity or completion, literally near below. Ner zhok zhut muzhet esh huz: almost ten pots are here, with the count still below ten."
      concept: almost
    - form: zeqem
      class: adv
      field: Everyday speech
      gloss: "exactly; precisely at the stated number or measure. Zeqem zhut muzhet: exactly ten pots."
      concept: exactly
    - form: uzhet
      class: n
      field: Everyday speech
      gloss: "a number or amount; a counted or measured quantity. Uzhet ul muzhet esh zhut: the number of pots is ten; uzhet ul uzhem esh oq dozhul: the amount of water is two cups."
      concept: [number, amount]
    - form: uzhetek
      class: v
      field: Everyday speech
      gloss: "to measure a quantity, length or other dimension. Eq uzhetek uzhem im dozhul: I measure the water with a cup."
      concept: measure-verb
    - form: uzhek
      class: v
      field: Everyday speech
      gloss: "to count things. Eq uzhek muzhet: I count the pots."
      concept: count-verb
    - form: kunesh
      class: adj
      field: Everyday speech
      gloss: black
      concept: black
      built: [kunesh]
    - {form: uzhesh, class: adj, field: Everyday speech, gloss: white in colour, concept: white}
    - {form: roqem, class: adj, field: Everyday speech, gloss: red in colour, concept: red}
    - {form: zhelush, class: adj, field: Everyday speech, gloss: green in colour, concept: green}
    - {form: zogheq, class: adj, field: Everyday speech, gloss: yellow in colour, concept: yellow}
    - {form: osheq, class: adj, field: Everyday speech, gloss: blue in colour, concept: blue}
    - {form: roqeshul, class: adj, field: Everyday speech, gloss: grey in colour, concept: grey}
    - {form: tumozeq, class: adj, field: Everyday speech, gloss: brown in colour, concept: brown}
    - form: helbuk
      class: adj
      field: Everyday speech
      gloss: light in colour; toward white rather than dark
      concept: light-colour
    - form: nilroq
      class: adj
      field: Everyday speech
      gloss: pale; weak or washed-out in colour
      concept: pale
    - form: qeshel
      class: adj
      field: Everyday speech
      gloss: clear in appearance; distinct and easy to discern, as a clean outline or plainly visible mark
      concept: clear-appearance
    - form: qeshok
      class: adj
      field: Everyday speech
      gloss: opaque; not allowing sight through it
      concept: opaque
    - form: qeshtum
      class: adj
      field: Everyday speech
      gloss: transparent; allowing objects beyond it to be seen through it
      concept: transparent
    - form: zoghiq
      class: adj
      field: Everyday speech
      gloss: shiny; reflecting light with a gleam
      concept: shiny
    - form: zoghok
      class: adj
      field: Everyday speech
      gloss: dull; lacking a gleam on the surface
      concept: dull-appearance
    - form: zheluk
      class: adj
      field: Everyday speech
      gloss: plain; without a decorative pattern
      concept: plain-pattern
    - form: zhelushum
      class: adj
      field: Everyday speech
      gloss: spotted; marked with spots
      concept: spotted
    - form: zhelushur
      class: adj
      field: Everyday speech
      gloss: striped; marked with stripes
      concept: striped
    - form: zhem
      class: v
      field: Everyday speech
      gloss: "to go; to move from one place to another; to walk when travelling on foot. Eq zhem ter olgez: I walk toward the house."
      concept: [go, walk]
    - form: zhoq
      class: v
      field: Everyday speech
      gloss: "to come; to arrive at the speaker's place or a stated destination. Eq zhoq ter olgez: I arrive at the house."
      concept: [come, arrive]
    - form: zurkhem
      class: v
      field: Everyday speech
      gloss: to conquer, to take
      concept: take
      built: [zurkhem]
    - form: sozhel
      class: v
      field: Everyday speech
      gloss: "to make; to do; to create something. Eq sozhel tezhol: I make a table; eq sozhel sozhet: I do the work."
      concept: [make, do, create]
    - form: delqem
      class: v
      field: Everyday speech
      gloss: "to say; to speak; to tell someone a matter. Eq delqem ter az: I speak to you; eq delqem delzhem ter az: I tell you a tale."
      concept: [say, speak, tell]
    - form: yezhul
      class: v
      field: Everyday speech
      gloss: "to know a person, fact or practice. Eq yezhul az: I know you."
      concept: know
    - form: mezhoreq
      class: v
      field: Everyday speech
      gloss: to think; to consider a matter
      concept: think
    - form: lezhekhem
      class: v
      field: Everyday speech
      gloss: "to want; to wish for a person, thing or outcome. Eq lezhekhem uzhem: I want water."
      concept: [want, wish-verb]
    - {form: zeluk, class: v, field: Everyday speech, gloss: to live; to be alive, concept: live}
    - form: mozhekhem
      class: v
      field: Everyday speech
      gloss: to die; to cease living
      concept: die
    - form: zhemet
      class: v
      field: Everyday speech
      gloss: to run; to move quickly on foot
      concept: run
    - form: zulek
      class: v
      field: Everyday speech
      gloss: to sit; to rest one's weight on a seat or the ground
      concept: sit
    - form: durekh
      class: v
      field: Everyday speech
      gloss: to stand; to be upright on one's feet
      concept: stand
    - form: loqesh
      class: v
      field: Everyday speech
      gloss: to lie down; to take a reclining position
      concept: lie-down
    - form: toqel
      class: v
      field: Everyday speech
      gloss: to hold, to keep
      concept: hold
      built: [toqel]
    - form: zhoqel
      class: v
      field: Everyday speech
      gloss: "to bring; to carry or lead something toward the speaker or a stated destination adopted as the viewpoint. Eq zhoqel muzhet ter az: I bring the pot to you."
      concept: bring
    - form: lozheq
      class: v
      field: Everyday speech
      gloss: "to put; to set someone or something in a place. Eq lozheq muzhet otem tezhol: I put the pot at the table."
      concept: put
    - form: qeshekhem
      class: v
      field: Everyday speech
      gloss: to find; to discover or come upon something sought or previously unnoticed
      concept: find
    - form: qeshukh
      class: v
      field: Everyday speech
      gloss: to lose; to cease having or be unable to find something
      concept: lose
    - form: dozhekh
      class: v
      field: Everyday speech
      gloss: to open; to uncover or free an entrance or container
      concept: open
    - form: dozhuk
      class: v
      field: Everyday speech
      gloss: "to close an opening or container; to end an activity. Eq dozhuk dozhel: I close the door; delzhem dozhuk: the tale ends."
      concept: [close, end]
    - form: kelzhem
      class: v
      field: Everyday speech
      gloss: to begin; to start happening or doing something
      concept: begin
    - form: esh ul eq
      class: v
      field: Everyday speech
      gloss: "to belong to me; to be mine. Muzhet esh ul eq: the pot is mine. Muzhet ul eq means my pot; replace muzhet with the thing owned and eq with another possessor as needed."
      concept: belong
    - form: muzhet ul eq
      class: n
      field: Everyday speech
      gloss: "my pot; a pot belonging to the speaker. Replace muzhet with the possessed noun: dozhul ul eq means my cup."
      concept: my
    - form: zhelor
      class: v
      field: Everyday speech
      gloss: "to become; to change into a new state. Uzhem zhelor uzheq: the water becomes ice."
      concept: [become, change-verb]
    - form: lozhemek
      class: v
      field: Everyday speech
      gloss: to remain; to stay in the same place or state
      concept: remain
    - form: zhemoq
      class: v
      field: Everyday speech
      gloss: "to leave; to depart from a place or person. Eq zhemoq olgez: I leave the house."
      concept: leave
    - form: luqesh
      class: v
      field: Everyday speech
      gloss: to crawl; to move close to the ground using hands and knees or a low body
      concept: crawl
    - form: burqek
      class: v
      field: Everyday speech
      gloss: to climb; to move upward using hands, feet or bodily grip
      concept: climb
    - form: luqekh
      class: v
      field: Everyday speech
      gloss: to jump; to spring away from a supporting surface
      concept: jump
    - form: loqet
      class: v
      field: Everyday speech
      gloss: to fall; to move downward without support
      concept: fall
    - form: loqur
      class: v
      field: Everyday speech
      gloss: to rise; to move upward or stand up
      concept: rise
    - form: zhem el
      class: v
      field: Everyday speech
      gloss: "to enter; to go inside. Eq zhem el olgez: I enter the house."
      concept: enter
    - form: zhem ot
      class: v
      field: Everyday speech
      gloss: "to exit; to go out. Eq zhem ot olgez: I exit the house."
      concept: exit
    - form: zhoq bolet
      class: v
      field: Everyday speech
      gloss: "to return; to come back. Eq zhoq bolet ter olgez: I return to the house."
      concept: return
    - form: rezheq
      class: v
      field: Everyday speech
      gloss: to follow; to go after someone or accept their direction
      concept: follow
    - form: rezhesh
      class: v
      field: Everyday speech
      gloss: to lead; to guide someone on a route or direct their action
      concept: lead
    - form: borzhem
      class: v
      field: Everyday speech
      gloss: to carry; to bear someone or something while moving
      concept: carry
    - form: zheluq
      class: v
      field: Everyday speech
      gloss: to move; to change position or move something to another position
      concept: move
    - form: tukhesh
      class: v
      field: Everyday speech
      gloss: to push; to apply force that moves something away from the point of pressure
      concept: push
    - form: tukhureq
      class: v
      field: Everyday speech
      gloss: to pull; to draw something toward the point of force
      concept: pull
    - form: borzheq
      class: v
      field: Everyday speech
      gloss: to lift; to raise something from a lower position
      concept: lift
    - form: loqekh
      class: v
      field: Everyday speech
      gloss: to drop; to let something fall
      concept: drop
    - form: tukhuk
      class: v
      field: Everyday speech
      gloss: to throw; to send something through the air by a movement of the hand or body
      concept: throw
    - form: sozhel olgez
      class: v
      field: Everyday speech
      gloss: "to build a house; to make a structure by joining materials. Eq sozhel olgez: I build a house; replace olgez with the structure being built."
      concept: build
    - form: khezul
      class: v
      field: Everyday speech
      gloss: to break
      concept: break
      built: [khezul]
    - form: khezhor
      class: v
      field: Everyday speech
      gloss: to destroy; to ruin something beyond its continued existence or use
      concept: destroy
    - form: sozhur
      class: v
      field: Everyday speech
      gloss: to repair; to restore a damaged thing to working order
      concept: repair
    - form: delqesh
      class: v
      field: Everyday speech
      gloss: to ask; to request an answer or a thing from someone
      concept: ask
    - form: delqosh
      class: v
      field: Everyday speech
      gloss: to answer; to give a reply to a question or request
      concept: answer
    - form: delqur
      class: v
      field: Everyday speech
      gloss: to call; to summon someone or hail them by voice
      concept: call
    - form: delqem im ghozhel ozhel
      class: v
      field: Everyday speech
      gloss: "to shout; to speak in a loud voice. Eq delqem im ghozhel ozhel: I shout."
      concept: shout
    - form: delghum
      class: v
      field: Everyday speech
      gloss: to whisper; to speak softly using unvoiced breath rather than an ordinary voiced murmur
      concept: whisper
    - form: delqez
      class: v
      field: Everyday speech
      gloss: to explain; to make a matter clear in words
      concept: explain
    - form: shumekhem
      class: v
      field: Everyday speech
      gloss: to name; to give or state a name for someone or something
      concept: name-verb
    - form: yezhek
      class: v
      field: Everyday speech
      gloss: to believe; to accept a claim as true
      concept: believe
    - form: mezheqem
      class: v
      field: Everyday speech
      gloss: to understand; to grasp the meaning of a word, act or situation
      concept: understand
    - form: minkhek
      class: v
      field: Everyday speech
      gloss: to remember; to bring or keep something in memory
      concept: remember
    - form: minkhuk
      class: v
      field: Everyday speech
      gloss: to forget; to lose the ability to recall something known
      concept: forget
    - form: yezhukh
      class: v
      field: Everyday speech
      gloss: to learn; to acquire knowledge or skill
      concept: learn
    - form: yezhrek
      class: v
      field: Everyday speech
      gloss: to teach; to help someone acquire knowledge or skill
      concept: teach
    - form: mezhetor
      class: v
      field: Everyday speech
      gloss: to decide; to choose one course or thing among possibilities
      concept: [decide, choose]
    - form: mezhoq
      class: v
      field: Everyday speech
      gloss: to imagine; to form a mental picture or conception of something absent or not actual
      concept: imagine
    - form: buzhek
      class: v
      field: Everyday speech
      gloss: to need; to require something for a purpose or for living
      concept: need-verb
    - form: uzhrez
      class: v
      field: Everyday speech
      gloss: to hope; to desire and look for a possible good outcome
      concept: hope-verb
    - form: mezhrat
      class: v
      field: Everyday speech
      gloss: to intend; to have a purpose of acting in a stated way
      concept: intend
    - form: lezhreq
      class: v
      field: Everyday speech
      gloss: "to prefer; to choose one thing ahead of another. Eq lezhreq uzhem ghor dozhum: I prefer water to the other drink."
      concept: prefer
    - form: sozhesh
      class: v
      field: Everyday speech
      gloss: to try; to make an effort toward an act or result
      concept: try
    - form: qeshruk
      class: v
      field: Everyday speech
      gloss: to search; to look actively for someone or something
      concept: search
    - form: mureq
      class: v
      field: Everyday speech
      gloss: to meet; to come together with or encounter someone
      concept: meet
    - form: murez
      class: v
      field: Everyday speech
      gloss: to help; to give support that assists someone in an act or difficulty. Said as an urgent call, murez means help!
      concept: [help, expression-help]
    - form: muzhem
      class: v
      field: Everyday speech
      gloss: to share; to give or use part of something with others
      concept: share
    - form: teghumek
      class: v
      field: Everyday speech
      gloss: to trade; to exchange goods or services by agreement
      concept: trade
    - form: teghuq
      class: v
      field: Everyday speech
      gloss: to buy; to obtain something in return for a payment
      concept: buy
    - form: teghur
      class: v
      field: Everyday speech
      gloss: to sell; to provide something in return for a payment
      concept: sell
    - form: yotekhem
      class: v
      field: Everyday speech
      gloss: to promise; to commit oneself to an act or outcome
      concept: promise-verb
    - form: zherek
      class: v
      field: Everyday speech
      gloss: to thank; to express gratitude to someone
      concept: thank-verb
    - form: lezhetem
      class: v
      field: Everyday speech
      gloss: to forgive; to release resentment or a claim to punish someone for a wrong
      concept: forgive-verb
    - form: delmut
      class: v
      field: Everyday speech
      gloss: to refuse; to decline a request, offer or proposed action
      concept: refuse-verb
    - form: deloz
      class: v
      field: Everyday speech
      gloss: to agree; to accept a claim or join another's choice
      concept: agree-verb
    - form: zhoqesh
      class: v
      field: Everyday speech
      gloss: to fight; to struggle against someone by bodily force or weapons
      concept: fight
    - form: tukhrek
      class: v
      field: Everyday speech
      gloss: to hit; to strike with a bodily part, tool or weapon
      concept: hit
    - form: mozher
      class: v
      field: Everyday speech
      gloss: to kill; to cause a living being's death
      concept: kill
    - form: shelrekhem
      class: v
      field: Everyday speech
      gloss: to defend; to resist an attack or protect someone or something from harm
      concept: defend
    - form: zhoqek
      class: v
      field: Everyday speech
      gloss: to attack; to begin hostile force against a target
      concept: attack
    - form: ghishek
      class: v
      field: Everyday speech
      gloss: to flee; to escape or run from danger
      concept: flee
    - form: ghishrek
      class: v
      field: Everyday speech
      gloss: to threaten; to state or signal an intention to cause harm
      concept: threaten
    - form: lozhut
      class: v
      field: Everyday speech
      gloss: to stop; to cease an activity or bring it to a halt. Said as a command, lozhut means stop!
      concept: [stop, expression-stop]
    - form: lozhur
      class: v
      field: Everyday speech
      gloss: to continue; to keep an act or state going
      concept: continue
    - form: lozhesh
      class: v
      field: Everyday speech
      gloss: to wait; to remain until an expected person, event or time. Said as a call, lozhesh means wait!
      concept: [wait, expression-wait]
    - form: zhemor
      class: v
      field: Everyday speech
      gloss: to happen; to take place as an event
      concept: happen
    - form: lozheq luqet
      class: v
      field: Everyday speech
      gloss: "to kneel; to put one or both knees on the ground in a lowered posture. Eq lozheq luqet otem urtekh: I kneel on the ground."
      concept: kneel
    - form: luqoreq
      class: v
      field: Everyday speech
      gloss: to bend; to curve or fold a body or object
      concept: bend
    - form: luqum
      class: v
      field: Everyday speech
      gloss: to lean; to incline one's body or rest it against a support
      concept: lean
    - form: zhelek
      class: v
      field: Everyday speech
      gloss: to cover; to put something over a surface or object
      concept: cover-verb
    - form: zhelukh
      class: v
      field: Everyday speech
      gloss: to uncover; to take a covering off
      concept: uncover
    - form: zhelok
      class: v
      field: Everyday speech
      gloss: to hide; to put someone or something out of sight or knowledge
      concept: hide
    - form: qeshrek
      class: v
      field: Everyday speech
      gloss: to reveal; to make something hidden visible or known
      concept: reveal
    - form: dozhetekh
      class: v
      field: Everyday speech
      gloss: to lock; to fasten something with a lock
      concept: lock-verb
    - form: dozhetukh
      class: v
      field: Everyday speech
      gloss: to unlock; to release a lock with its key or mechanism
      concept: unlock
    - form: huz
      class: adv
      field: Everyday speech
      gloss: "here; in this place. Eq esh huz: I am here."
      concept: here
    - form: hez
      class: adv
      field: Everyday speech
      gloss: "there; in that place. Eq esh hez: I am there."
      concept: there
    - form: zhul ol
      class: n
      field: Everyday speech
      gloss: "somewhere; an unspecified place. Eq zhem ter zhul ol: I go somewhere."
      concept: somewhere
    - form: mutum ol
      class: n
      field: Everyday speech
      gloss: "nowhere; no place. Mutum ol olzhek uzhem: nowhere has water."
      concept: nowhere
    - form: omul ol
      class: n
      field: Everyday speech
      gloss: "everywhere; all places in the stated area. Omul ol olzhek uzhem: everywhere has water."
      concept: everywhere
    - form: ner
      class: part
      field: Everyday speech
      gloss: "near; at a short distance from the following place or object. Muzhet esh ner tezhol: the pot is near the table."
      concept: near
    - form: nor
      class: adv
      field: Everyday speech
      gloss: "far; at a great distance. Olgez esh nor: the house is far away; nor zoq olgez, far from the house."
      concept: far
    - form: zhur
      class: part
      field: Everyday speech
      gloss: "beside; at the side of. Muzhet esh zhur tezhol: the pot is beside the table."
      concept: beside
    - form: zol
      class: part
      field: Everyday speech
      gloss: "between; in the interval separating two stated things. Muzhet esh zol tezhol mulat olgez: the pot is between the table and the seat."
      concept: between
    - form: muq
      class: part
      field: Everyday speech
      gloss: "among; within a group or set. Muzhet esh muq uzhul muzhet: the pot is among other pots."
      concept: among
    - form: bok
      class: part
      field: Everyday speech
      gloss: "above; over; higher than the stated object, with or without contact. Dozhel ul qeshul esh bok tezhol: the window is above the table; oshekh zhem bok olgez: a bird goes over the house."
      concept: [above, over]
    - form: zhok
      class: part
      field: Everyday speech
      gloss: "below; under; lower than the stated object. Muzhet esh zhok tezhol: the pot is under the table."
      concept: [below, under]
    - form: burul
      class: part
      field: Everyday speech
      gloss: "beyond; farther along than a stated boundary or reference. Olgez esh burul qembesh: the house is beyond the barrier."
      concept: beyond
    - form: boq
      class: part
      field: Everyday speech
      gloss: "before; in front of a stated person or thing. Muzhet esh boq tezhol: the pot is in front of the table."
      concept: before-spatial
    - form: bosh
      class: part
      field: Everyday speech
      gloss: "behind; at the rear of a stated person or thing. Muzhet esh bosh tezhol: the pot is behind the table."
      concept: behind
    - form: ilesh
      class: n
      field: Everyday speech
      gloss: the left; the direction on one's left side
      concept: left-direction
    - form: uresh
      class: n
      field: Everyday speech
      gloss: the right; the direction on one's right side
      concept: right-direction
    - form: muqel
      class: n
      field: Everyday speech
      gloss: the center; the middle of a place or group
      concept: center
    - form: burel
      class: adv
      field: Everyday speech
      gloss: up; toward a higher position
      concept: up
    - form: nurel
      class: adv
      field: Everyday speech
      gloss: down; toward a lower position
      concept: down
    - form: boret
      class: adv
      field: Everyday speech
      gloss: forward; toward the front
      concept: forward
    - form: zoq huz
      class: part
      field: Everyday speech
      gloss: "away; from here or from the context's point of reference. Eq zhem zoq huz: I go away."
      concept: away
    - form: torel
      class: part
      field: Everyday speech
      gloss: "through; entering and passing inside a place or opening. Eq zhem torel dozhel: I go through the doorway."
      concept: through
    - form: ozhelor
      class: part
      field: Everyday speech
      gloss: "across; from one side to the other of a stated place. Eq zhem ozhelor urtekh muzhel: I go across the field."
      concept: across
    - form: qorel
      class: part
      field: Everyday speech
      gloss: "around; along the outside of a stated object or place. Eq zhem qorel olgez: I go around the house."
      concept: around
    - form: ut
      class: part
      field: Everyday speech
      gloss: "on; upon a supporting surface. Muzhet esh ut tezhol: the pot is on the table."
      concept: on
    - form: zoq
      class: part
      field: Everyday speech
      gloss: "from; away out of a stated source. Eq zhoq zoq olgez: I come from the house."
      concept: from
    - form: temul
      class: n
      field: Everyday speech
      gloss: time; the dimension in which events occur and endure
      concept: time
    - form: temish
      class: n
      field: Everyday speech
      gloss: a moment; a very short stretch or point of time
      concept: moment
    - {form: qimur, class: n, field: Everyday speech, gloss: day, concept: day, built: [qimur]}
    - form: lozhek
      class: n
      field: Everyday speech
      gloss: night
      concept: night
      built: [lozhek]
    - form: aqeshul
      class: n
      field: Everyday speech
      gloss: morning; the early part of the day
      concept: morning
    - form: muqel ul qimur
      class: n
      field: Everyday speech
      gloss: noon; the middle of the day around the sun’s highest daily position, literally center of the day
      concept: noon
    - form: lozheqem
      class: n
      field: Everyday speech
      gloss: evening; the latter part of the day as night approaches
      concept: evening
    - form: muqel ul lozhek
      class: n
      field: Everyday speech
      gloss: midnight; the middle of the night, literally center of the night
      concept: midnight
    - form: emul
      class: adv
      field: Everyday speech
      gloss: now; at the time of speaking
      concept: now
    - form: emor
      class: adv
      field: Everyday speech
      gloss: then; at the time already indicated
      concept: then
    - form: qimur eshesh
      class: n
      field: Everyday speech
      gloss: "today; this day. Eq zhoq qimur eshesh: I come today."
      concept: today
    - form: qimur borum
      class: n
      field: Everyday speech
      gloss: yesterday; the day before today
      concept: yesterday
    - form: qimur zhum
      class: n
      field: Everyday speech
      gloss: tomorrow; the day after today
      concept: tomorrow
    - form: temul borum
      class: n
      field: Everyday speech
      gloss: the past; time before now
      concept: past
    - form: temul emul
      class: n
      field: Everyday speech
      gloss: the present; the current time
      concept: present
    - form: temul zhum
      class: n
      field: Everyday speech
      gloss: the future; time after now
      concept: future
    - form: boq elzum
      class: part
      field: Everyday speech
      gloss: "before a birth; before a stated event. Eq zhoq boq elzum: I arrive before the birth. Replace elzum with the reference event or time."
      concept: before-time
    - form: zhumel elzum
      class: part
      field: Everyday speech
      gloss: "after a birth; after a stated event. Eq zhoq zhumel elzum: I arrive after the birth."
      concept: after
    - form: el elzum
      class: part
      field: Everyday speech
      gloss: "during a birth; within the duration of a stated event. Eq lozhesh el elzum: I wait during the birth."
      concept: during
    - form: el muzhemul ul eq
      class: part
      field: Everyday speech
      gloss: "while I eat; during my eating. Eq ghumez el muzhemul ul eq: I listen while I eat. The person after ul is the eater."
      concept: while
    - form: ter elzum
      class: part
      field: Everyday speech
      gloss: "until the birth; up to a stated time or event. Eq lozhesh ter elzum: I wait until the birth."
      concept: until
    - form: zoq elzum
      class: part
      field: Everyday speech
      gloss: "since the birth; from a stated time or event onward. Eq esh huz zoq elzum: I have been here since the birth."
      concept: since-time
    - form: omul temul
      class: n
      field: Everyday speech
      gloss: "always; at every relevant time. Eq esh huz omul temul: I am always here."
      concept: always
    - form: ghuz zhemum
      class: n
      field: Everyday speech
      gloss: "often; on many occasions. Eq zhoq ghuz zhemum: I often come."
      concept: often
    - form: zhul zhemum
      class: n
      field: Everyday speech
      gloss: "sometimes; on some occasions. Eq zhoq zhul zhemum: I sometimes come."
      concept: sometimes
    - form: neq zhemum
      class: n
      field: Everyday speech
      gloss: "rarely; on few occasions. Eq zhoq neq zhemum: I rarely come."
      concept: rarely
    - form: mutum zhemum
      class: n
      field: Everyday speech
      gloss: "never; on no occasion. Eq zhoq mutum zhemum: I never come."
      concept: never
    - form: temur
      class: adj
      field: Everyday speech
      gloss: long-lasting; continuing for a long time
      concept: [long-duration, lasting-duration]
    - form: temishor
      class: adj
      field: Everyday speech
      gloss: short in duration; brief
      concept: [short-duration, brief-duration]
    - form: zhemul
      class: adv
      field: Everyday speech
      gloss: again; one more time. Said alone as a request, zhemul means again; please repeat it.
      concept: [again, expression-again]
    - form: on zhemum
      class: n
      field: Everyday speech
      gloss: "once; on one occasion. Eq zhoq on zhemum: I come once."
      concept: once
    - form: oq zhemum
      class: n
      field: Everyday speech
      gloss: "twice; on two occasions. Eq zhoq oq zhemum: I come twice."
      concept: twice
    - form: ghuz zhemul
      class: adv
      field: Everyday speech
      gloss: "repeatedly; again many times. Eq zhoq ghuz zhemul: I come repeatedly."
      concept: repeatedly
    - form: nozhel
      class: adv
      field: Everyday speech
      gloss: "already; before now or before the expected reference time. Eq esh huz nozhel: I am already here."
      concept: already
    - form: bozhem
      class: adv
      field: Everyday speech
      gloss: "still; continuing through the reference time. Eq lozhesh bozhem: I am still waiting."
      concept: still
    - form: mut nozhel
      class: adv
      field: Everyday speech
      gloss: "not yet; the act has not occurred by the reference time. Eq mut zhoq nozhel: I have not come yet. Said alone, mut nozhel means not yet."
      concept: yet
    - form: nerzhem
      class: adv
      field: Everyday speech
      gloss: soon; after only a short interval from the reference time
      concept: soon
    - form: zhumat
      class: adv
      field: Everyday speech
      gloss: later; after the stated or understood reference time
      concept: later
    - form: borish
      class: adv
      field: Everyday speech
      gloss: early; before the expected or usual time
      concept: early
    - form: zhumish
      class: adv
      field: Everyday speech
      gloss: late; after the expected or usual time
      concept: late
    - form: boq omul uzhul zhemum
      class: part
      field: Everyday speech
      gloss: "first; before every other event in the sequence. Eq muzhek boq omul uzhul zhemum: I eat first, before the other events."
      concept: first-sequence
    - form: zhum
      class: adj
      field: Everyday speech
      gloss: next; immediately following in a sequence
      concept: next
    - form: borum
      class: adj
      field: Everyday speech
      gloss: last; coming after all the others in a sequence
      concept: last
    - form: otem lozhun
      class: part
      field: Everyday speech
      gloss: "finally; at the end of the sequence or after waiting. Eq zhoq otem lozhun: I finally arrive."
      concept: finally
    - form: temqesh
      class: n
      field: Everyday speech
      gloss: a season; a recurring part of the year
      concept: season
    - {form: temoreq, class: n, field: Everyday speech, gloss: a year, concept: year}
    - form: zuqet
      class: n
      field: Everyday speech
      gloss: a month; a lunar or calendar division of a year
      concept: month
    - {form: aqesh, class: n, field: Everyday speech, gloss: dawn, concept: dawn, built: [aqesh]}
    - form: lozheshum
      class: n
      field: Everyday speech
      gloss: dusk; the fading of daylight into night
      concept: dusk
    - form: ul az
      class: part
      field: Everyday speech
      gloss: "your; yours; belonging to the addressee. Muzhet ul az: your pot."
      concept: your
    - form: um
      class: pron
      field: Everyday speech
      gloss: "he; she; it; the already indicated person or being. The referent supplies the sex or kind: um zhoq, he or she comes; um esh uzheqem, it is wet."
      concept: [he, she, it]
    - form: umesh
      class: pron
      field: Everyday speech
      gloss: they; them; the indicated people or things
      concept: they
    - form: emesh
      class: pron
      field: Everyday speech
      gloss: we; us; the speaker together with other people
      concept: we
    - form: ul emesh
      class: part
      field: Everyday speech
      gloss: "our; ours; belonging to the speaker and others. Olgez ul emesh: our house."
      concept: our
    - form: osh
      class: dem
      field: Everyday speech
      gloss: "that; the farther or previously indicated thing. Muzhet osh: that pot."
      concept: that
    - form: eshel
      class: dem
      field: Everyday speech
      gloss: "these; the nearby or indicated things. Muzhet eshel: these pots."
      concept: these
    - form: oshelum
      class: dem
      field: Everyday speech
      gloss: "those; the farther or previously indicated things. Muzhet oshelum: those pots."
      concept: those
    - form: zhul om
      class: n
      field: Everyday speech
      gloss: "someone; an unspecified person. Zhul om zhoq: someone comes."
      concept: someone
    - form: oz om
      class: n
      field: Everyday speech
      gloss: "anyone; any person without restricting who. Oz om ken zhoq: anyone can come."
      concept: anyone
    - form: omul om
      class: n
      field: Everyday speech
      gloss: "everyone; all the people in the stated context. Omul om zhoq: everyone comes."
      concept: everyone
    - form: mutum om
      class: n
      field: Everyday speech
      gloss: "no one; not a single person. Mutum om zhoq: no one comes."
      concept: no-one
    - form: zhul teq
      class: n
      field: Everyday speech
      gloss: "something; an unspecified thing. Zhul teq loqet: something falls."
      concept: something
    - form: oz teq
      class: n
      field: Everyday speech
      gloss: "anything; any thing without restricting which. Eq ken sozhel oz teq: I can make anything."
      concept: anything
    - form: omul teq
      class: n
      field: Everyday speech
      gloss: "everything; all things in the stated context. Omul teq esh huz: everything is here."
      concept: everything
    - form: ulmesh
      class: pron
      field: Everyday speech
      gloss: "self; oneself; the object refers back to the clause's subject. Eq qesh ulmesh: I see myself; um qesh ulmesh: that person sees themself."
      concept: self
    - form: uzhel
      class: dem
      field: Everyday speech
      gloss: "another; one more or a different one. Ezbek uzhel muzhet: give another pot."
      concept: another
    - form: uzhumek
      class: adj
      field: Everyday speech
      gloss: the same; identical with the person, thing or kind already indicated
      concept: same
    - form: qez
      class: pron
      field: Everyday speech
      gloss: "who; the unknown person in a question. Qez zhoq: who comes?"
      concept: question-who
    - form: qit
      class: pron
      field: Everyday speech
      gloss: "what; the unknown thing in a question. Qit loqet: what falls? Said alone, qit asks what was said or expresses surprise: what?"
      concept: [question-what, expression-what]
    - form: qil
      class: dem
      field: Everyday speech
      gloss: "which; selecting from a stated set. Qil muzhet olzhek uzhem: which pot has water?"
      concept: question-which
    - form: zhil
      class: adv
      field: Everyday speech
      gloss: "where. Az esh zhil: where are you?"
      concept: question-where
    - form: zhan
      class: adv
      field: Everyday speech
      gloss: "when. Az zhoq zhan: when do you come?"
      concept: question-when
    - form: qoz
      class: adv
      field: Everyday speech
      gloss: "why; for what reason. Az zhoq qoz: why do you come?"
      concept: question-why
    - form: qeshumet
      class: adv
      field: Everyday speech
      gloss: "how; in what manner. Az sozhel teq qeshumet: how do you make the thing?"
      concept: question-how
    - form: uzhet ul muzhet esh qit
      class: call
      field: Everyday speech
      gloss: how many pots are there? Literally the number of pots is what; replace muzhet with the things being counted.
      concept: question-how-many
    - form: uzhet ul uzhem esh qit
      class: call
      field: Everyday speech
      gloss: how much water is there? Literally the amount of water is what; replace uzhem with the substance being measured.
      concept: question-how-much
    - form: ul qez
      class: part
      field: Everyday speech
      gloss: "whose; belonging to whom. Muzhet eshesh esh ul qez: whose is this pot?"
      concept: question-whose
    - form: ter qez
      class: part
      field: Everyday speech
      gloss: "to whom. Az ezbek muzhet ter qez: to whom do you give the pot?"
      concept: question-to-whom
    - form: zoq zhil
      class: part
      field: Everyday speech
      gloss: "from where. Az zhoq zoq zhil: from where do you come?"
      concept: question-from-where
    - form: qosh qit
      class: part
      field: Everyday speech
      gloss: "for what purpose. Az sozhel muzhet qosh qit: for what purpose do you make the pot?"
      concept: question-for-what-purpose
    - form: qen
      class: part
      field: Everyday speech
      gloss: "question particle after a clause; asks for confirmation or denial. Az zhoq qen: are you coming?"
      concept: question-polar
    - form: az delmez qit
      class: call
      field: Everyday speech
      gloss: what do you mean; what meaning do you intend? Az delmez qit asks the speaker to clarify the meaning of their words.
      concept: [question-clarification, expression-what-do-you-mean]
    - form: ozhuk
      class: part
      field: Everyday speech
      gloss: yes; affirmation of a question or proposal
      concept: yes
    - form: mutuk
      class: part
      field: Everyday speech
      gloss: no; denial of a question or rejection of a proposal
      concept: no
    - form: suzhek
      class: adj
      field: Everyday speech
      gloss: true; real; corresponding to what actually is the case. A suzhek claim can be doubted; certainty alone does not make it true.
      concept: ["true", real]
    - form: mut suzhek
      class: adj
      field: Everyday speech
      gloss: false; unreal; not corresponding to what actually is the case
      concept: ["false", unreal]
    - form: suzhum
      class: n
      field: Everyday speech
      gloss: truth; what is actually the case
      concept: truth
    - form: suzhok
      class: n
      field: Everyday speech
      gloss: a lie; a statement made with the intention of deceiving someone about what is true
      concept: lie-noun
    - form: suzhek ul mezghum
      class: adv
      field: Everyday speech
      gloss: "really; truly; genuinely; said to affirm the sincerity of one's words. Suzhek ul mezghum, eq lezhekhem murez: truly, I want to help. The fixed assertion formula means true in mind."
      concept: sincerity
    - form: suzhet
      class: part
      field: Everyday speech
      gloss: "indeed; in fact; affirms the reality of what is asserted. Suzhet, uzhem esh zheq: indeed, the water is cold."
      concept: [indeed, in-fact]
    - form: yezhumet
      class: adv
      field: Everyday speech
      gloss: "certainly; with the speaker's full conviction. Yezhumet, um zhoq: certainly, that person is coming. The speaker's confidence may be mistaken."
      concept: certainly
    - form: hezhel
      class: adv
      field: Everyday speech
      gloss: "perhaps; might; presents an event as possible rather than certain. Um zhoq hezhel: that person might come."
      concept: [perhaps, might-possibility]
    - form: hezhur
      class: adv
      field: Everyday speech
      gloss: "probably; the event is judged more likely than not. Um zhoq hezhur: that person will probably come."
      concept: probably
    - form: hezhish
      class: adv
      field: Everyday speech
      gloss: "unlikely; the event is judged less likely than not. Um zhoq hezhish: that person is unlikely to come."
      concept: unlikely
    - form: olzhek yezhur
      class: v
      field: Everyday speech
      gloss: "to be sure; to have subjective certainty. Eq olzhek yezhur: I am sure."
      concept: certain
    - form: olzhek yezhkor
      class: v
      field: Everyday speech
      gloss: "to be uncertain; to have doubt. Eq olzhek yezhkor: I am uncertain."
      concept: uncertain
    - form: qeshmet
      class: adv
      field: Everyday speech
      gloss: "apparently; on the evidence of appearances. Um esh sulkor qeshmet: apparently, that person is ill."
      concept: apparently
    - form: delqet
      class: adv
      field: Everyday speech
      gloss: "supposedly; according to what someone says, without the speaker's endorsement. Um esh sulkor delqet: supposedly, that person is ill."
      concept: supposedly
    - form: yezhmut
      class: v
      field: Everyday speech
      gloss: to doubt; to be uncertain whether a claim is right
      concept: doubt-verb
    - form: qeshqem
      class: v
      field: Everyday speech
      gloss: "to suspect; to consider a claim possible on limited indications. Eq qeshqem oshuzhem zhumat: I suspect rain later; the suspected matter can be welcome, unwelcome or neutral."
      concept: suspect
    - form: mezhrum
      class: v
      field: Everyday speech
      gloss: to guess; to offer a judgment without sufficient knowledge
      concept: guess-verb
    - form: mezhetuk
      class: v
      field: Everyday speech
      gloss: to assume; to accept a claim as a starting point without first proving it
      concept: assume-verb
    - form: zuqesh
      class: adj
      field: Everyday speech
      gloss: correct; accurate or in agreement with the relevant fact or rule
      concept: correct
    - form: mut zuqesh
      class: adj
      field: Everyday speech
      gloss: incorrect; inaccurate or at odds with the relevant fact or rule
      concept: incorrect
    - form: mut deloz
      class: v
      field: Everyday speech
      gloss: "to disagree; not to accept another's claim or choice. Eq mut deloz im az: I disagree with you."
      concept: disagree
    - form: mut suzhek delzum
      class: n
      field: Everyday speech
      gloss: a falsehood; an untrue statement, whether deliberately deceptive or mistaken
      concept: falsehood
    - form: ushum
      class: conj
      field: Everyday speech
      gloss: "or; joins alternatives. Eq lezhekhem uzhem ushum muzhel: I want water or food. Ushum uzhem ushum muzhel means either water or food."
      concept: [or, either-alternative]
    - form: azhesh
      class: conj
      field: Everyday speech
      gloss: "but; however; nevertheless; joins a contrasting continuation. Eq esh lomur azhesh eq zhem: I am tired, but I go."
      concept: [but, however, nevertheless]
    - form: mutush
      class: conj
      field: Everyday speech
      gloss: "neither; nor; denies the joined alternatives. Mutush uzhem mutush muzhel esh huz: neither water nor food is here."
      concept: [nor, neither-alternative]
    - form: mezum
      class: conj
      field: Everyday speech
      gloss: "because; introduces a reason. Eq dozhek mezum eq olzhek dozhor: I drink because I am thirsty."
      concept: because
    - form: mezat
      class: conj
      field: Everyday speech
      gloss: "therefore; the following clause is a consequence. Eq olzhek dozhor; mezat eq dozhek: I am thirsty; therefore I drink."
      concept: therefore
    - form: ikhel
      class: conj
      field: Everyday speech
      gloss: "if; introduces a condition. Ikhel oshuzhem zhemor, eq lozhemek el: if rain comes, I stay inside."
      concept: if
    - form: ikhor
      class: conj
      field: Everyday speech
      gloss: "then; introduces the consequence of a condition. Ikhel oshuzhem zhemor, ikhor eq lozhemek el: if rain comes, then I stay inside."
      concept: then-conditional
    - form: mutikhel
      class: conj
      field: Everyday speech
      gloss: "unless; the main clause applies if the stated exception does not occur. Mutikhel az zhoq, eq zhem: unless you come, I go."
      concept: unless
    - form: ushor
      class: conj
      field: Everyday speech
      gloss: "otherwise; if the preceding condition does not hold. Eq lozhesh ikhel az zhoq; ushor eq zhem: I wait if you come; otherwise I go."
      concept: otherwise
    - form: azheq
      class: conj
      field: Everyday speech
      gloss: "although; introduces a conceded fact. Azheq eq esh lomur, eq zhem: although I am tired, I go."
      concept: although
    - form: azher
      class: part
      field: Everyday speech
      gloss: "despite; even with the stated obstacle. Eq zhem azher sulkor: I go despite being ill. In this cited use sulkor states the person's illness as the obstacle."
      concept: despite
    - form: otem ol ul
      class: part
      field: Everyday speech
      gloss: "instead of; in place of the following alternative. Eq zurkhem uzhem otem ol ul dozhum: I take water instead of the other drink."
      concept: instead
    - form: luq
      class: part
      field: Everyday speech
      gloss: "like; as; in the manner or role of. Eq sozhel luq yezhrekekh: I work as a teacher; muzhet esh luq dozhul: the pot is like a cup."
      concept: [like, as]
    - form: mut luq
      class: part
      field: Everyday speech
      gloss: "unlike; without the stated resemblance. Muzhet esh mut luq dozhul: the pot is unlike a cup."
      concept: unlike
    - form: qenul
      class: conj
      field: Everyday speech
      gloss: "whether; introduces a polar matter being considered. Eq mezhoreq qenul az zhoq: I consider whether you are coming. The considered subject is explicitly az, you."
      concept: whether
    - form: delul
      class: part
      field: Everyday speech
      gloss: "that is; namely; introduces a restatement or explicit name. Eq lezhekhem on teq, delul uzhem: I want one thing, namely water."
      concept: [that-is, namely]
    - form: luq eshesh
      class: part
      field: Everyday speech
      gloss: "for example; introduces a specimen. Ghuz teq esh uzheqem, luq eshesh muzhet: many things are wet, for example this pot."
      concept: for-example
    - form: mutul
      class: part
      field: Everyday speech
      gloss: "except; excluding the following member. Omul muzhet esh huz mutul muzhet osh: all the pots are here except that pot."
      concept: except
    - form: unul
      class: adv
      field: Everyday speech
      gloss: "only; restricts the following constituent. Unul eq esh huz: only I am here."
      concept: only
    - form: uzhelum
      class: adv
      field: Everyday speech
      gloss: "even; includes an unexpected case. Uzhelum niqosh ken yezhukh: even a child can learn."
      concept: even
    - form: ozhet
      class: adv
      field: Everyday speech
      gloss: "also; adds another matching case. Eq zhoq ozhet: I come too."
      concept: also
    - form: ghazhet
      class: adv
      field: Everyday speech
      gloss: "especially; marks the case given particular weight. Eq lezhekhem muzhel, ghazhet rozhit: I want food, especially seeds."
      concept: especially
    - form: ghazrel
      class: adj
      field: Everyday speech
      gloss: great
      concept: big
      built: [ghazrel]
    - form: nilesh
      class: adj
      field: Everyday speech
      gloss: small
      concept: small
      built: [nilesh]
    - form: ghazhetum nilesh
      class: adj
      field: Everyday speech
      gloss: tiny; very small
      concept: tiny
    - form: ghazhetum ghazrel
      class: adj
      field: Everyday speech
      gloss: huge; very large
      concept: huge
    - form: nilukh
      class: adj
      field: Everyday speech
      gloss: short in physical length
      concept: short
    - form: burqor
      class: adj
      field: Everyday speech
      gloss: high; tall; extending far upward or standing far above the reference level
      concept: [high, tall]
    - form: nurqor
      class: adj
      field: Everyday speech
      gloss: low; close to the ground or lower reference level
      concept: low
    - form: olqur
      class: adj
      field: Everyday speech
      gloss: wide; extending far from side to side
      concept: wide
    - form: nilqur
      class: adj
      field: Everyday speech
      gloss: narrow; small from side to side
      concept: narrow
    - form: durqol
      class: adj
      field: Everyday speech
      gloss: heavy; great in weight
      concept: heavy
    - form: nilqol
      class: adj
      field: Everyday speech
      gloss: light; small in weight
      concept: light-weight
    - {form: yelqim, class: adj, field: Everyday speech, gloss: new, concept: new, built: [yelqim]}
    - form: zhemir
      class: adj
      field: Everyday speech
      gloss: fast; quick in movement or occurrence
      concept: fast
    - form: zhemoreq
      class: adj
      field: Everyday speech
      gloss: slow; taking much time in movement or occurrence
      concept: slow
    - form: molqem
      class: adj
      field: Everyday speech
      gloss: easy; requiring little effort or difficulty
      concept: easy
    - form: durqesh
      class: adj
      field: Everyday speech
      gloss: difficult; requiring considerable effort or skill
      concept: difficult
    - form: gulqem
      class: adj
      field: Everyday speech
      gloss: good; desirable or beneficial in the relevant respect; ethically right when judging conduct
      concept: [good, right-ethical]
    - form: gulkor
      class: adj
      field: Everyday speech
      gloss: bad; undesirable or harmful in the relevant respect; ethically wrong when judging conduct
      concept: [bad, wrong-ethical]
    - form: gulqur
      class: adj
      field: Everyday speech
      gloss: "better; more good or beneficial than the comparison. Uzhem esh gulqur ghor dozhum: the water is better than the other drink."
      concept: better
    - form: gulkorum
      class: adj
      field: Everyday speech
      gloss: "worse; more bad or harmful than the comparison. Dozhum esh gulkorum ghor uzhem: the drink is worse than the water."
      concept: worse
    - form: gulqur ghor omul uzhul
      class: adj
      field: Everyday speech
      gloss: "best; better than every other member of the comparison set. Muzhet eshesh esh gulqur ghor omul uzhul muzhet: this pot is better than all the other pots. Uzhul excludes this pot from the standards."
      concept: best
    - form: gulkorum ghor omul uzhul
      class: adj
      field: Everyday speech
      gloss: "worst; worse than every other member of the comparison set. Muzhet eshesh esh gulkorum ghor omul uzhul muzhet: this pot is worse than all the other pots."
      concept: worst
    - form: ghazror
      class: adj
      field: Everyday speech
      gloss: important; carrying great consequence or significance
      concept: important
    - form: nilqesh
      class: adj
      field: Everyday speech
      gloss: trivial; of little significance or consequence
      concept: trivial
    - form: buzheq
      class: adj
      field: Everyday speech
      gloss: necessary; needed for the stated purpose or situation
      concept: necessary
    - form: zoghur
      class: adj
      field: Everyday speech
      gloss: valuable; having worth for use, exchange or personal regard
      concept: valuable
    - form: olzhek mutum zoghum
      class: v
      field: Everyday speech
      gloss: "to be worthless; to have no worth in the stated respect. Muzhet olzhek mutum zoghum: the pot has no worth."
      concept: worthless
    - form: sozhum
      class: adj
      field: Everyday speech
      gloss: useful; serving a purpose or helping an act
      concept: useful
    - form: mut sozhum
      class: adj
      field: Everyday speech
      gloss: useless; serving no useful purpose in the stated context
      concept: useless
    - form: khezheq
      class: adj
      field: Everyday speech
      gloss: broken; damaged so that the thing no longer holds together or works
      concept: broken
    - form: lozhuq
      class: adj
      field: Everyday speech
      gloss: complete; having every required part or stage finished
      concept: complete
    - form: mut lozhuq
      class: adj
      field: Everyday speech
      gloss: incomplete; lacking a required part or unfinished stage
      concept: incomplete
    - form: suzhel
      class: adj
      field: Everyday speech
      gloss: honest; truthful and sincere rather than deceptive
      concept: honest
    - form: suzhor
      class: adj
      field: Everyday speech
      gloss: dishonest; intending to mislead or defraud
      concept: dishonest
    - form: ghazhetum
      class: adv
      field: Everyday speech
      gloss: "very; intensifies the following quality. Muzhet esh ghazhetum uzheqem: the pot is very wet."
      concept: very
    - form: ghazhok
      class: adv
      field: Everyday speech
      gloss: "extremely; to an exceptional degree. Uzhem esh ghazhok zheq: the water is extremely cold."
      concept: extremely
    - form: molqet
      class: adv
      field: Everyday speech
      gloss: "somewhat; to a moderate extent. Uzhem esh molqet zheq: the water is somewhat cold."
      concept: somewhat
    - form: nilet
      class: adv
      field: Everyday speech
      gloss: "slightly; to a small extent. Uzhem esh nilet zheq: the water is slightly cold."
      concept: slightly
    - form: neret
      class: adv
      field: Everyday speech
      gloss: "barely; only just reaching the required point or degree. Uzhem esh neret khush: the water is barely hot enough."
      concept: barely
    - form: ghezur ghor uzhet buzhek
      class: num
      field: Everyday speech
      gloss: "too much; more than the needed quantity. Muzhet olzhek ghezur uzhem ghor uzhet buzhek: the pot has too much water for the stated purpose."
      concept: too-much
    - form: nuzhur ghor uzhet buzhek
      class: num
      field: Everyday speech
      gloss: "too little; less than the needed quantity. Muzhet olzhek nuzhur uzhem ghor uzhet buzhek: the pot has too little water for the stated purpose."
      concept: too-little
    - form: luqush
      class: adj
      field: Everyday speech
      gloss: similar; sharing relevant qualities without being identical
      concept: similar
    - form: uzhumok
      class: adj
      field: Everyday speech
      gloss: opposite; contrary in position, direction or relevant quality
      concept: opposite
    - form: ken
      class: v
      field: Everyday speech
      gloss: "can; be able to do something. Eq ken zhem: I can walk. This verb names ability, not permission."
      concept: can
    - form: mut ken
      class: v
      field: Everyday speech
      gloss: "cannot; be unable to do something. Eq mut ken zhem: I cannot walk."
      concept: cannot
    - form: hezheq
      class: adj
      field: Everyday speech
      gloss: possible; able to happen or be done
      concept: possible
    - form: mut hezheq
      class: adj
      field: Everyday speech
      gloss: impossible; unable to happen or be done
      concept: impossible
    - form: olzhek lushum
      class: v
      field: Everyday speech
      gloss: "to have permission to act. Eq olzhek lushum zhem: I may go. Lushum zhem is the cited permission-to-go expression, distinct from bodily ability."
      concept: may-permission
    - form: toled
      class: v
      field: Everyday speech
      gloss: "must; be obliged to perform the following act. Eq toled zhem: I must go."
      concept: must
    - form: toled mut
      class: v
      field: Everyday speech
      gloss: "must not; be obliged to refrain from the following act. Eq toled mut zhem: I must not go."
      concept: must-not
    - form: tolqesh
      class: v
      field: Everyday speech
      gloss: "ought; should; be advised by duty or good judgment to perform the act. Eq tolqesh zhem: I should go."
      concept: ought
    - form: toldeq
      class: adj
      field: Everyday speech
      gloss: required; demanded by an authority or rule
      concept: required
    - form: ozheq
      class: adj
      field: Everyday speech
      gloss: optional; left to choice rather than required
      concept: optional
    - form: lusheq
      class: adj
      field: Everyday speech
      gloss: allowed; permitted by the relevant person or rule
      concept: allowed
    - form: lushok
      class: adj
      field: Everyday speech
      gloss: forbidden; prohibited by the relevant person or rule
      concept: forbidden
    - form: lushek
      class: v
      field: Everyday speech
      gloss: "to permit; to give someone permission to act. Eq lushek az zhem: I permit you to go."
      concept: permit
    - form: lushuk
      class: v
      field: Everyday speech
      gloss: "to prohibit; to forbid an act. Eq lushuk zhem: I prohibit going."
      concept: prohibit
    - form: zelush
      class: adj
      field: Everyday speech
      gloss: free to act; not subject to the relevant restraint
      concept: free
    - form: kholish
      class: adj
      field: Everyday speech
      gloss: constrained; limited in action by a bond, force or rule
      concept: constrained
    - form: lezheq
      class: adj
      field: Everyday speech
      gloss: willing; ready to act by one's own desire or consent
      concept: willing
    - form: mut lezheq
      class: adj
      field: Everyday speech
      gloss: unwilling; not ready to act by one's own desire or consent
      concept: unwilling
    - form: mezhrak
      class: adj
      field: Everyday speech
      gloss: intended; done or planned on purpose
      concept: intended
    - form: mezhruk
      class: adj
      field: Everyday speech
      gloss: accidental; occurring without the relevant person's intention
      concept: accidental
    - form: zhoqmut ter az
      class: call
      field: Everyday speech
      gloss: hello; peace to you; a greeting addressed to another person
      concept: hello
    - form: zhem im zhoqmut
      class: call
      field: Everyday speech
      gloss: goodbye; go in peace; a farewell to a departing person
      concept: goodbye
    - form: zhoq el
      class: call
      field: Everyday speech
      gloss: welcome; come inside; a formula receiving someone as a guest
      concept: expression-welcome
    - form: eq delqesh
      class: call
      field: Everyday speech
      gloss: "please; I ask; introduces a courteous request. Eq delqesh, ezbek uzhem: please give water."
      concept: expression-please
    - form: eq zherek az
      class: call
      field: Everyday speech
      gloss: thank you; I give you thanks
      concept: expression-thank-you
    - form: im lemukh
      class: call
      field: Everyday speech
      gloss: you're welcome; gladly; a courteous response to thanks, literally with joy
      concept: expression-youre-welcome
    - form: eq delqesh lushum
      class: call
      field: Everyday speech
      gloss: excuse me; I ask permission; said when requesting someone's attention or room to pass
      concept: expression-excuse-me
    - form: eq olzhek murnekh
      class: call
      field: Everyday speech
      gloss: sorry; I feel regret; said as an apology for one's act or its effect
      concept: expression-sorry
    - form: lezhetem eq
      class: call
      field: Everyday speech
      gloss: forgive me; a request to release resentment or blame for one's wrong
      concept: expression-forgive-me
    - form: ozhuk yezhumet
      class: call
      field: Everyday speech
      gloss: of course; a confident affirmative response
      concept: of-course
    - form: zhoq huz
      class: call
      field: Everyday speech
      gloss: come here; a request or call to approach the speaker
      concept: expression-come-here
    - form: zhem zoq huz
      class: call
      field: Everyday speech
      gloss: go away; a request or command to leave the speaker's place
      concept: expression-go-away
    - form: delqem zhemul
      class: call
      field: Everyday speech
      gloss: pardon; say it again; a request to repeat speech that was not heard or understood
      concept: expression-pardon
    - form: eq mezheqem
      class: call
      field: Everyday speech
      gloss: I understand; an acknowledgment that the meaning is clear
      concept: expression-i-understand
    - form: eq mut mezheqem
      class: call
      field: Everyday speech
      gloss: I do not understand; a response asking for clearer explanation
      concept: expression-i-do-not-understand
    - form: az delqem eshesh qeshumet
      class: call
      field: Everyday speech
      gloss: how do you say this? A request for wording, said while indicating the thing or meaning to express. Replace eshesh with the meaning being asked about.
      concept: expression-how-do-you-say
    - form: shumek ul eshesh esh qit
      class: call
      field: Everyday speech
      gloss: what is this called? Literally the name of this is what; said while indicating the thing to be named
      concept: expression-what-is-this-called
    - form: suzhet qen
      class: call
      field: Everyday speech
      gloss: really? A surprised request to confirm that what was said is actually the case
      concept: expression-really
    - form: mutuk mutum
      class: call
      field: Everyday speech
      gloss: not at all; an emphatic denial of the presence or degree just suggested, literally no, zero
      concept: expression-not-at-all
    - form: homzel
      class: n
      field: Everyday speech
      gloss: people, folk
      concept: people
      built: [homzel]
    - {form: merukh, class: n, field: Everyday speech, gloss: a male human being}
    - {form: emurukh, class: n, field: Everyday speech, gloss: a female human being}
    - form: meqesh merukh
      class: n
      field: Everyday speech
      gloss: a man; an adult male human being
      concept: man
    - form: meqesh emurukh
      class: n
      field: Everyday speech
      gloss: a woman; an adult female human being
      concept: woman
    - form: yelukh merukh
      class: n
      field: Everyday speech
      gloss: a boy; a young male human who has not reached adulthood
      concept: boy
    - form: yelukh emurukh
      class: n
      field: Everyday speech
      gloss: a girl; a young female human who has not reached adulthood
      concept: girl
    - form: meqesh
      class: n
      field: Everyday speech
      gloss: an adult; a person who has reached maturity
      concept: adult
    - form: dokhim om
      class: n
      field: Everyday speech
      gloss: an elder; an old person, especially one respected for age and experience
      concept: elder
    - form: on om
      class: n
      field: Everyday speech
      gloss: an individual; one person considered separately
      concept: individual
    - form: mulqem
      class: n
      field: Everyday speech
      gloss: a group; people or things considered together
      concept: group
    - form: homzhem
      class: n
      field: Everyday speech
      gloss: a crowd; a dense gathering of people
      concept: crowd
    - {form: umrel, class: n, field: Everyday speech, gloss: tribe, concept: tribe, built: [umrel]}
    - form: homzel ul olgez
      class: n
      field: Everyday speech
      gloss: a community; people sharing a place and an ongoing common life, conventionally the people of a common home
      concept: community
    - form: rezhum
      class: n
      field: Everyday speech
      gloss: a ruler; someone exercising governing authority over a people or territory
      concept: ruler
    - form: sozhul
      class: n
      field: Everyday speech
      gloss: a worker; someone who performs work
      concept: worker
    - form: sozhureq
      class: n
      field: Everyday speech
      gloss: an artisan; a worker skilled in making useful or beautiful things by hand
      concept: artisan
    - form: teghumekh
      class: n
      field: Everyday speech
      gloss: a merchant; someone who trades goods as an occupation
      concept: merchant
    - form: shumek
      class: n
      field: Everyday speech
      gloss: name
      concept: name-noun
      built: [shumek]
    - form: shumet
      class: n
      field: Everyday speech
      gloss: a title; a word expressing office, recognized standing or a formal claim
      concept: title
    - form: shumor
      class: n
      field: Everyday speech
      gloss: a rank; a recognized position in an ordered body
      concept: rank
    - form: toshir
      class: n
      field: Everyday speech
      gloss: a custom; an established habitual way of acting in a group
      concept: custom
    - form: toshdokh
      class: n
      field: Everyday speech
      gloss: a tradition; a custom or practice handed down between generations
      concept: tradition
    - {form: tozhir, class: n, field: Everyday speech, gloss: law, concept: law, built: [tozhir]}
    - form: tozhet
      class: n
      field: Everyday speech
      gloss: a rule; a stated requirement guiding conduct or procedure
      concept: rule
    - form: lozhumat
      class: n
      field: Everyday speech
      gloss: order; a coherent arrangement of things rather than disorder
      concept: order-noun
    - form: delqor
      class: n
      field: Everyday speech
      gloss: a command; an instruction given with authority
      concept: command-noun
    - form: delqorek
      class: n
      field: Everyday speech
      gloss: obedience; acting as commanded or required
      concept: obedience
    - form: zhudum
      class: n
      field: Everyday speech
      gloss: justice; fair judgment and treatment according to what is due
      concept: justice
    - form: zhudkor
      class: n
      field: Everyday speech
      gloss: injustice; unfair treatment or a violation of what is due
      concept: injustice
    - form: zhoqmut
      class: n
      field: Everyday speech
      gloss: peace; absence of war or hostile disturbance; a relationship in which people refrain from harm
      concept: peace
    - {form: zhoqar, class: n, field: Everyday speech, gloss: war, concept: war, built: [zhoqar]}
    - form: zelum
      class: n
      field: Everyday speech
      gloss: freedom, going out
      concept: freedom
      built: [zelum]
    - form: kholib
      class: n
      field: Everyday speech
      gloss: bondage
      concept: captivity
      built: [kholib]
    - {form: ezbol, class: n, field: Everyday speech, gloss: gift, concept: gift, built: [ezbol]}
    - form: teghum ul ezbol
      class: n
      field: Everyday speech
      gloss: an exchange; a reciprocal transfer of goods, acts or services
      concept: exchange-noun
    - {form: qaltum, class: n, field: Everyday speech, gloss: debt, concept: debt, built: [qaltum]}
    - form: zoghem
      class: n
      field: Everyday speech
      gloss: wealth; an abundance of valued goods or resources
      concept: wealth
    - form: zoghkor
      class: n
      field: Everyday speech
      gloss: poverty; lacking the resources needed for an adequate life
      concept: poverty
    - form: olzum
      class: n
      field: Everyday speech
      gloss: property; things or land owned by someone
      concept: property
    - form: olzhem
      class: n
      field: Everyday speech
      gloss: ownership; the recognized relation of having a thing as one's own
      concept: ownership
    - form: qezhurum
      class: n
      field: Everyday speech
      gloss: honor; recognized worth and the respect accorded to it
      concept: honor
    - form: zhelom
      class: n
      field: Everyday speech
      gloss: a secret; something known but intentionally kept from others
      concept: secret
    - form: yezhum
      class: n
      field: Everyday speech
      gloss: knowledge; what someone knows, or the state of knowing it
      concept: knowledge
    - form: elum
      class: n
      field: Everyday speech
      gloss: a being; an entity that exists
      concept: being
    - form: zelumut
      class: n
      field: Everyday speech
      gloss: life; the living condition or course of a living being
      concept: life
    - form: zorul
      class: n
      field: Everyday speech
      gloss: an origin; the source from which something arises
      concept: origin
    - form: kelzhum
      class: n
      field: Everyday speech
      gloss: a beginning; the point or stage at which something starts
      concept: beginning
    - form: lozhutem
      class: n
      field: Everyday speech
      gloss: completion; the finishing of all required parts or stages
      concept: completion
    - form: zhelorum
      class: n
      field: Everyday speech
      gloss: a change; a transformation; an alteration of state, shape or character
      concept: [change-noun, transformation]
    - form: dolum
      class: n
      field: Everyday speech
      gloss: a part; a portion or constituent of a whole
      concept: part
    - form: mezul
      class: n
      field: Everyday speech
      gloss: a cause; something that brings about an event or condition
      concept: cause
    - form: mezut
      class: n
      field: Everyday speech
      gloss: an effect; an outcome brought about by a cause
      concept: effect
    - form: mezun
      class: n
      field: Everyday speech
      gloss: a reason; an explanation or ground for an act, claim or event
      concept: reason
    - form: mezhruleq
      class: n
      field: Everyday speech
      gloss: a purpose; the result an act is intended to bring about
      concept: purpose
    - form: sulum
      class: n
      field: Everyday speech
      gloss: a kind; a type or category sharing relevant qualities
      concept: kind
    - form: zelumes
      class: adj
      field: Everyday speech
      gloss: natural; arising through the ordinary workings of living things or the physical world
      concept: natural
    - form: mut zelumes
      class: adj
      field: Everyday speech
      gloss: unnatural; contrary to the ordinary workings of living things or the physical world
      concept: unnatural
    - {form: eq, class: pron, field: Everyday speech, gloss: I; me; the speaker, concept: i}
    - form: esh
      class: v
      field: Everyday speech
      gloss: "to be; links a subject to an identity or quality. Burzhek esh qeshek: the boar is visible. In an absolute utterance, olgez esh means a house exists; there is a house."
      concept: [be, exist]
    - form: mut
      class: part
      field: Everyday speech
      gloss: "not; negates the following predicate or quality. Eq mut qesh burzhek: I do not see the boar."
      concept: not
    - form: temil
      class: adv
      field: Everyday speech
      gloss: "for a while; through a stretch of time. Eq qesh burzhek temil: I watch the boar for a while."
    - form: ghazrem
      class: adj
      field: Everyday speech
      gloss: intense; strong in degree; before an emotion noun, as in ghazrem rozhum, wrath
    - form: ul
      class: part
      field: Everyday speech
      gloss: "of; belonging to or concerning, as stated by the noun phrase. Lezhum ul mulez: affection for a friend."
    - form: qeshokum
      class: n
      field: Everyday speech
      gloss: loss; the absence left by something lost
    - form: minkhum
      class: n
      field: Everyday speech
      gloss: memory; what one recalls or the faculty of recalling it
    - form: zormul
      class: n
      field: Everyday speech
      gloss: an absent person or thing; someone or something not present or beyond reach
    - form: lozhutum
      class: n
      field: Everyday speech
      gloss: fulfillment; achieving what was desired or required
    - form: lezhrun
      class: n
      field: Everyday speech
      gloss: a romantic partner; one's beloved in a romantic relationship
    - form: mulez
      class: n
      field: Everyday speech
      gloss: a friend; a person held in mutual affectionate regard
      concept: friend
    - form: toshem
      class: n
      field: Everyday speech
      gloss: family; people related by birth, marriage or adopted household ties
      concept: family
    - form: om
      class: n
      field: Everyday speech
      gloss: a person; a human being
      concept: [person, human]
    - form: omul
      class: num
      field: Everyday speech
      gloss: "all; every member of the stated set. Omul om: every human being."
      concept: [all, every]
    - form: eshesh
      class: dem
      field: Everyday speech
      gloss: "this; the nearby or indicated thing. Muzhet eshesh: this pot."
      concept: this
    - {form: ulek, class: adj, field: Everyday speech, gloss: alone; without others}
    - form: olzhek
      class: v
      field: Everyday speech
      gloss: "to have; to possess or contain. Eq olzhek uzhem: I have water."
      concept: have
    - form: el
      class: part
      field: Everyday speech
      gloss: "in; inside; inward. Eq ghenek el: I breathe in."
      concept: [in, inside]
    - form: ot
      class: part
      field: Everyday speech
      gloss: "out; outside; outward. Eq ghenek ot: I breathe out."
      concept: outside
    - form: molet
      class: adv
      field: Everyday speech
      gloss: moderately; mildly; before a temperature adjective, as in molet khush, warm
    - form: ezbek
      class: v
      field: Everyday speech
      gloss: "to give something to someone. Eq ezbek uzhem ter az: I give water to you."
      concept: give
    - {form: muzhrek, class: v, field: Everyday speech, gloss: to feed someone with food or milk}
    - form: im
      class: part
      field: Everyday speech
      gloss: "with; by means of. Eq tukhel rozhetul im tukhol: I touch the cord with a hand."
    - form: emuzh
      class: n
      field: Everyday speech
      gloss: mother
      concept: mother
      built: [emuzh]
    - form: az
      class: pron
      field: Everyday speech
      gloss: you; the person addressed
      concept: you-reference
    - form: ter
      class: part
      field: Everyday speech
      gloss: "to; toward the stated recipient or goal. Eq ezbek uzhem ter az: I give water to you."
      concept: [to, toward]
    - {form: toshil, class: n, field: Everyday speech, gloss: a sibling; a brother or sister}
    - form: meruq
      class: adj
      field: Everyday speech
      gloss: male; before a kinship or person noun, as in meruq lozhekhem, husband
    - form: emureq
      class: adj
      field: Everyday speech
      gloss: female; before a kinship or person noun, as in emureq lozhekhem, wife
    - form: lozhekhem mozhuk
      class: n
      field: Everyday speech
      gloss: a person whose spouse has died
    - form: lorqem
      class: adj
      field: Everyday speech
      gloss: long in physical length
      concept: long
    - {form: ol, class: n, field: Everyday speech, gloss: a place; a location, concept: place-noun}
    - form: ruq
      class: part
      field: Everyday speech
      gloss: in numbered position; before a cardinal, as in ruq zhek, fourth
    - form: qosh
      class: part
      field: Everyday speech
      gloss: "for; for the benefit or purpose of. Ghez uzhem qosh muzhel: enough water for the food; eq zhem qosh dozhek: I go in order to drink."
      concept: for-purpose
    - form: ghor
      class: part
      field: Everyday speech
      gloss: "than; introduces the standard after a comparison. Ghezur uzhem ghor eshesh: more water than this."
      concept: than
    - form: uzhul
      class: adj
      field: Everyday speech
      gloss: other; different from the person or thing already mentioned. Omul uzhul muzhet excludes the pot currently being compared.
      concept: [other, different]
    - {form: sozhet, class: n, field: Everyday speech, gloss: a task; work to be done}
    - form: otem
      class: part
      field: Everyday speech
      gloss: "at; in the stated location. Eq lozheq muzhet otem tezhol: I put the pot at the table."
      concept: at
    - form: bolet
      class: adv
      field: Everyday speech
      gloss: backward; back toward the previous place or position
      concept: backward
    - form: zhumel
      class: part
      field: Everyday speech
      gloss: after; later than the following event or time, as in zhumel elzum, after the birth
    - form: muzhemul
      class: n
      field: Everyday speech
      gloss: "eating; the act of taking food for nourishment. Muzhemul ul eq: my eating."
    - form: zhemum
      class: n
      field: Everyday speech
      gloss: an event; an occasion on which something happens
    - form: lozhun
      class: n
      field: Everyday speech
      gloss: an end; the point at which something stops
      concept: end-noun
    - form: oz
      class: num
      field: Everyday speech
      gloss: "any; whichever member or amount is selected, without restriction. Oz muzhet: any pot."
    - form: teq
      class: n
      field: Everyday speech
      gloss: a thing; an object or matter of thought
      concept: thing
    - form: delmez
      class: v
      field: Everyday speech
      gloss: to mean; to intend a meaning by a word or act
    - form: mezghum
      class: n
      field: Everyday speech
      gloss: mind; the seat of thought, attention and inward feeling
    - form: delzum
      class: n
      field: Everyday speech
      gloss: a statement; something said as a claim
    - form: zoghum
      class: n
      field: Everyday speech
      gloss: worth; value in use, exchange or personal regard
    - form: uzhet buzhek
      class: n
      field: Everyday speech
      gloss: the quantity needed for the stated purpose; the required amount of something
    - form: lushum
      class: n
      field: Everyday speech
      gloss: "permission; consent to an act. Lushum zhem: permission to go."
    - form: oltem
      class: n
      field: Everyday speech
      gloss: a position; the place occupied or relation in which something stands
      concept: position
    - form: zhemetum
      class: n
      field: Everyday speech
      gloss: a direction; an orientation or course toward a place
      concept: direction
    - form: norum
      class: n
      field: Everyday speech
      gloss: distance; the interval between two places or things
      concept: distance
    - form: mulat
      class: conj
      field: Everyday speech
      gloss: "and; joins words or clauses. Tezhol mulat olgez: the table and the seat; eq qesh burzhek mulat az ghum ghumel: I see the boar and you hear a sound."
      concept: and
    - {form: kurbel, class: n, field: Everyday speech, gloss: well, built: [kurbel]}
    - {form: deshak, class: n, field: Everyday speech, gloss: road, built: [deshak]}
    - {form: yalish, class: n, field: Everyday speech, gloss: salt, built: [yalish]}
    - {form: gheros, class: n, field: Everyday speech, gloss: horse, built: [gheros]}
    - {form: bozekh, class: n, field: Everyday speech, gloss: camel, built: [bozekh]}
    - form: yudesh
      class: n
      field: Everyday speech
      gloss: passage, safe-conduct, toll
      built: [yudesh]
    - {form: kelosh, class: n, field: Everyday speech, gloss: tower, built: [kelosh]}
    - {form: ghoden, class: n, field: Everyday speech, gloss: city, built: [ghoden]}
    - {form: mozhel, class: n, field: Everyday speech, gloss: the dead, built: [mozhel]}
    - {form: yotekh, class: n, field: Everyday speech, gloss: "promise, covenant", built: [yotekh]}
    - {form: ghizol, class: num, field: Everyday speech, gloss: twelve, built: [ghizol]}
    - {form: zhudek, class: n, field: Everyday speech, gloss: judge, built: [zhudek]}
    - {form: rezhul, class: n, field: Everyday speech, gloss: prince of a tribe, built: [rezhul]}
    - {form: sighot, class: n, field: Everyday speech, gloss: elder, built: [sighot]}
    - {form: lukhem, class: n, field: Everyday speech, gloss: council, built: [lukhem]}
    - {form: elkush, class: n, field: Everyday speech, gloss: oath, built: [elkush]}
    - {form: hamekh, class: v, field: Everyday speech, gloss: to wander, built: [hamekh]}
    - {form: teqem, class: adj, field: Everyday speech, gloss: holy, built: [teqem]}
    - {form: khemoz, class: n, field: Everyday speech, gloss: sword, built: [khemoz]}
    - {form: bizhun, class: n, field: Everyday speech, gloss: spear, built: [bizhun]}
    - {form: gholut, class: n, field: Everyday speech, gloss: bow, built: [gholut]}
    - {form: tulqen, class: n, field: Everyday speech, gloss: shield, built: [tulqen]}
    - {form: noghez, class: n, field: Everyday speech, gloss: herd, built: [noghez]}
    - {form: kelum, class: n, field: Everyday speech, gloss: sheep, built: [kelum]}
    - {form: zhimel, class: n, field: Everyday speech, gloss: goat, built: [zhimel]}
    - {form: ghuzol, class: n, field: Everyday speech, gloss: dog, built: [ghuzol]}
    - {form: hozhir, class: n, field: Everyday speech, gloss: date palm, built: [hozhir]}
    - {form: leqosh, class: n, field: Everyday speech, gloss: garden, built: [leqosh]}
    - {form: amulez, class: n, field: Everyday speech, gloss: oasis, built: [amulez]}
    - {form: sekhol, class: n, field: Everyday speech, gloss: spring, built: [sekhol]}
    - {form: zoghel, class: n, field: Everyday speech, gloss: gold, built: [zoghel]}
    - {form: keshum, class: n, field: Everyday speech, gloss: silver, built: [keshum]}
    - {form: delkosh, class: n, field: Everyday speech, gloss: word, built: [delkosh]}
    - {form: yurem, class: n, field: Everyday speech, gloss: song, built: [yurem]}
    - {form: khorbet, class: n, field: Everyday speech, gloss: iron, built: [khorbet]}
    - {form: nezhol, class: n, field: Everyday speech, gloss: copper, built: [nezhol]}
    - {form: bushkel, class: n, field: Everyday speech, gloss: market, built: [bushkel]}
    - {form: teghum, class: n, field: Everyday speech, gloss: trade, built: [teghum]}
    - {form: lekhim, class: n, field: Everyday speech, gloss: bread, built: [lekhim]}
    - {form: hulesh, class: n, field: Everyday speech, gloss: milk, built: [hulesh]}
    - {form: qozhur, class: n, field: Everyday speech, gloss: meat, built: [qozhur]}
    - {form: eshur, class: adj, field: Everyday speech, gloss: first, built: [eshur]}
    - {form: bayel, class: n, field: Everyday speech, gloss: "waste, desert", built: [bayel]}
    - {form: nozhik, class: n, field: Everyday speech, gloss: victory, built: [nozhik]}
    - form: mezbozkor
      class: adj
      field: Everyday speech
      gloss: parentless; having no living parent
    - {form: olqem, class: n, field: Everyday speech, gloss: a vessel; a container for a substance}
    - form: zurkhem muzhet
      class: v
      field: Everyday speech
      gloss: to catch a moving pot; to receive it in one’s hands as it comes toward one. Eq zurkhem muzhet, said of a pot being tossed to me, means I catch the pot. Replace muzhet with the moving object.
      concept: catch
    - form: zhelumet
      class: n
      field: Everyday speech
      gloss: a fiber; a slender natural strand, such as one of the strands making up wool, before or after spinning
  register:
    - {name: Atárzadi Language, tongue: faith, why: built on the people's name}
    - {name: Atarzadi Language, tongue: faith, why: an unmarked spelling of the above}
    - {name: Tribes of Atarzád, tongue: faith}
    - {name: Atárzádegan, tongue: faith}
    - {name: Atarzád, tongue: faith}
    - {name: Atarzad, tongue: faith}
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

Atárzadi is the tongue of the [[affiliation-tribestrzd|Tribes of Atarzád]], the twelve tribes who took four of the [[lore-khazrynclt|Tellumi]] cities in the oasis belt at the foot of [[place-graznmntns|the Grazian Mountains]]. It is a tongue of the Desert family, a cousin of [[skill-dunharlng|Dunhari]], and like Dunhari it is an oral tongue, kept in memory and recitation, and written only in the settled courts, in [[skill-qalzscrscrpt|Qalezu]]. Fluency measures the sophistication of expression in the language, from the halting phrases of a traveler to the nuanced discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## How Atárzadi sounds

Atárzadi is the harsh cousin of Dunhari, with longer vowels and endings that close hard.

**The vowels.** _o_, _e_ and _u_ lead, unlike Dunhari's _a_.

**The consonants.** _zh_, _gh_, _q_, _kh_, _sh_, _l_, _m_ and _r_.

**Clusters.** Few: _lq_, _rb_ and _zh_ before a vowel.

**Endings.** Atárzadi words end in _-od_, _-or_, _-at_, _-ekh_ or _-ul_.

**What Atárzadi leaves out.** It has no _v_ and no Dunhari _-vad_ or _-bun_.

## Sounds

Atárzadi is the harshest tongue of the belt: full of _kh_, _gh_, _sh_ and _zh_, heavy with long vowels, and closed at the end of every word by a consonant. It shares Dunhari's fricatives and its uvular _q_ but none of its gliding vowels, and it lacks Dunhari's _p_, _f_ and _w_. The two build offices and places on different endings, and one pair looks regular: the place ending _-ez_ answers Dunhari _-adez_, the fort. Speakers of the two tongues understand each other's numbers, kin-words and a good part of their trade talk, and very little else.

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Syllables

```sql
SELECT "Rule", "Forms" FROM (
SELECT 0 AS o, 'Onsets' AS "Rule", CASE onsets WHEN 'single' THEN 'a single consonant' END AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 1 AS o, 'Codas' AS "Rule", array_to_string(list_transform(codas, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 2 AS o, 'Finals' AS "Rule", array_to_string(list_transform(finals, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 3 AS o, 'Doubled' AS "Rule", coalesce(nullif(array_to_string(list_transform(doubled, x -> '`' || x || '`'), ' '), ''), 'none') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 4 AS o, 'Vowel pairs' AS "Rule", coalesce(nullif(array_to_string(list_transform(vowelPairs, x -> '`' || x || '`'), ' '), ''), 'never') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 5 AS o, 'Initial vowel' AS "Rule", CASE WHEN initialVowel THEN 'yes' ELSE 'no' END AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 6 AS o, 'Final vowel' AS "Rule", CASE WHEN finalVowel THEN 'yes' ELSE 'no' END AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
UNION ALL
SELECT 7 AS o, 'Signature' AS "Rule", array_to_string(list_transform(signature, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-atarzadilng'
) ORDER BY o
```

A syllable opens on one consonant or on nothing and closes on any consonant but _h_ or _y_. A word never sets two vowels side by side, never doubles a letter, and **always ends on a consonant**: _uzhem_ "water", _deshak_ "road", _khumez_ "sand". **Every stem holds a long vowel**, so a name built from Atárzadi stems always carries a long vowel.

### Stress

Stress falls on the last long vowel of a word: de-**SHAK**, **UZH**-em. A word with no long vowel is stressed on its last syllable.

## Building words

Every Atárzadi word is a stem, two stems set together, or a stem with a suffix after it. The stems and their senses are in the [[skill-khazrilng#lexicon|Khazryn Lexicon]]. The thing described comes first: _kurbel_ "well" and _lukhem_ "council" make _kurbelukhem_, the council of the well.

### Joins

```sql
SELECT '`' || meeting || '`' AS "Meeting", '`' || rule || '`' AS "Rule", coalesce(array_to_string(list_transform(letters, x -> '`' || x || '`'), ' '), '') AS "Letters"
FROM joins WHERE language = 'thalorna-note-skill-atarzadilng' ORDER BY position
```

Two of the same consonant meeting become one, as the _l_ of _kurbel_ and _lukhem_ does. Every other meeting leaves both parts as they are.

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", gloss AS "Sense"
FROM affixes WHERE language = 'thalorna-note-skill-atarzadilng' ORDER BY position
```

### Names

| Name      | Built from        | Meaning                  |
| --------- | ----------------- | ------------------------ |
| Zhoqarod  | _zhoqar_ + _-od_  | a tribe: the sons of war |
| Homzelun  | _homzel_ + _-un_  | the whole people         |
| Shekhulez | _shekhul_ + _-ez_ | the place of the flame   |
| Zhoqarekh | _zhoqar_ + _-ekh_ | a warrior                |
| Gherosor  | _gheros_ + _-or_  | a man's name: horse      |
| Yuremat   | _yurem_ + _-at_   | a woman's name: song     |

**A tribe** is named by the stem of its founder or its emblem with _-od_, "the sons of". **A holding** takes _-ez_ after what it holds: a spring, a garden, a flame. **A given name** is one stem with _-or_ for a man or _-at_ for a woman; a tribe's name follows it.

## Atárzadi Lexicon {#lexicon}

The stems of Atárzadi, the names built from them and the register of its names. The rules the three tongues share, and the senses every tongue has a stem for, stand in the [[skill-khazrilng#lexicon|Khazryn Lexicon]].

### Stems

```sql
SELECT '`' || form || '`' AS "Stem", sense AS "Sense"
FROM elements WHERE language = 'thalorna-note-skill-atarzadilng' ORDER BY position
```

### Derived words

Worked names and words, each built from the stems above.

```sql
SELECT form AS "Word", '`' || 'atarzadi' || '`' AS "Tongue", gloss AS "Gloss", array_to_string(list_transform(built, x -> '`' || x || '`'), ' + ') AS "Derivation"
FROM words WHERE language = 'thalorna-note-skill-atarzadilng' AND field = 'Derived words' ORDER BY position
```

### Attested names

Every name of every note in the region stands in the register of the tongue it belongs to, with the note it names and its tag. A name in one of the three tongues carries its derivation.

```sql
SELECT name AS "Name", coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|]]'), ', '), '—') AS "Address", '`' || tongue || '`' AS "Language",
       CASE WHEN why IS NOT NULL THEN why
            WHEN tongue = 'older' THEN 'a name older than the rules'
            WHEN tongue = 'gloss' THEN CASE WHEN built IS NULL THEN '—' ELSE 'a glossed name on ' || array_to_string(list_transform(built, x -> '`' || x || '`'), ' and ') END
            WHEN built IS NOT NULL THEN array_to_string(list_transform(built, x -> '`' || x || '`'), ' + ')
            ELSE '—' END AS "Derivation"
FROM register WHERE language = 'thalorna-note-skill-atarzadilng' ORDER BY position
```

#### Language tags

```sql
SELECT tag AS "Tag", meaning AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-atarzadilng' ORDER BY position
```

## Everyday speech

The lexical stems below can stand as words, as the shared lexicon describes. _Uzhem_ is water, _ghesur_ a bone and _toqel_ means hold or keep. The separately listed _qesh_, see, and _qeshumel_, a sight, give a verb and a noun to use directly. Name endings keep their stated uses; _yezhrekekh_, a teacher, uses _yezhrek_, teach, with the existing doer ending _-ekh_.

_Eq qesh burzhek_ means I see the boar. _Eq olzhek uzhem_ means I have water. _Uzhem esh zheq_ means the water is cold; _olgez esh_ means a house exists. _Eq mut qesh burzhek_ means I do not see the boar. The speaker is _eq_, the person addressed _az_, and _um_ an indicated person or thing. _Eq qesh ulmesh_ means I see myself, with the object referring back to the speaker. _Qesh_ alone calls look; _ghumez_ calls listen.

_Ul_ links the following noun to the head: _muzhet ul eq_, my pot; _emuzh ul eboz_, the mother of the father. _Muzhet esh ul eq_ says the pot is mine. _Ter_ supplies the recipient or goal, _zoq_ the source, and _im_ a companion or means: _eq ezbek uzhem ter az_, I give water to you. _Eq tukhel rozhetul im tukhol_ means I touch the cord with a hand. The phrases retain spaces between their words. The established joins still govern single compound words, including _kurbelukhem_.

_Meruq toshil_ is a brother and _emureq toshil_ a sister. The kin expression _niqosh ul toshil ul mezboz_ is a cousin: the child of the sibling of a parent. _Mezboz ul toshum_ is an ancestor, the parent of the lineage across earlier generations. _Olgez ul shumel_ is the sleep-seat, a bed; _dozhel ul qeshul_, the door of the eye, is a window. _Olqem ul shekhul_, vessel of flame, names a lamp. _Zhelumet ul kelum_, fiber of sheep, is wool, including the unspun fleece. These household expressions have their listed ordinary meanings.

_Ruq zhek_ is fourth, with the numbered-position word before the number. _Ghezur uzhem ghor eshesh_ means more water than this; _ghezur ghor omul uzhul muzhet_ compares against every other pot, leaving the current pot out. _Uzhet buzhek_ is the quantity needed, the standard in too much or too little. _Uzhet ul uzhem esh qit_ asks what amount of water; _uzhet ul muzhet esh qit_ asks how many pots. _Eq zhem ter sholqet_ means I go toward the gate, and _eq zhem zoq sholqet_ I go from the gate.

Time can be named by an event: _eq lozhesh ter elzum_, I wait until the birth; _eq esh huz zoq elzum_, I have been here since the birth. _Eq ghumez el muzhemul ul eq_ means I listen while I eat. _Eq mut zhoq nozhel_ means I have not come yet; _eq lozhesh bozhem_, I am still waiting. _Az zhoq qen_ asks are you coming; _qez zhoq_ asks who comes.

_Suzhum_ names truth, while _yezhur_ is confidence that can be mistaken. _Ken_ states ability, _lushum_ permission, _hezhel_ possibility and _toled_ obligation. _Eq ken zhem_ means I can walk; _lushum zhem_, permission to go; _um zhoq hezhel_, that person might come; _eq toled zhem_, I must go. _Mut lushum zhem_ says going is not permitted. _Ikhel oshuzhem zhemor, eq lozhemek el_ means if rain comes, I stay inside.

_Lezhum ul lezhrun_ is romantic love, _lezhum ul mulez_ friendship, and _lezhum ul toshem_ family love. _Lezhum ul omul om_ is care for every human being without seeking a return. _Lezhur_ names sexual desire. _Lemukh ul lozhutum ul lezhem_ is the glad feeling that a desire has been fulfilled; _lomesh_ is contentment with one's situation.
