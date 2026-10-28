---
shortcode: sowideslng
name: {full: Sovidur Language}
type: skill
subType: language
description: "The hard, clipped tongue of the steppe tribes of the Khazryn, spoken from the cold northern coast to the stone desert before Tantsou."
tags: []
data:
  roman: "abcdeghijklmnoqrstuvyzABCDEGHIJKLMNOQRSTUVYZöüÖÜ0123456789()–-"
  core: true
  abbreviation: Sov.
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  grammar: {verbs: {invariant: true}}
  names:
    pattern: "{given} {tribe}"
    given:
      female:
        - "Tijodlun"
        - "Savaghlun"
        - "Khilodlun"
        - "Jilaqlun"
        - "Koyozlun"
        - "Voyerlun"
        - "Evodlun"
        - "Jiboqlun"
        - "Vilaqlun"
        - "Numaqlun"
        - "Atazlun"
        - "Khuvanlun"
        - "Soqritlun"
        - "Orqazlun"
        - "Gorenlun"
        - "Vuraqlun"
        - "Khaaqidlun"
        - "Iqodlun"
        - "Uruchaqlun"
        - "Diqkhunlun"
        - "Yodvirlun"
        - "Kharulun"
      male:
        - "Voghaltoliz"
        - "Voghalghakhiq"
        - "Budaqghakhiq"
        - "Budaqjilaq"
        - "Yovaqsovid"
        - "Yovaqtoliz"
        - "Naqkhaqyaqnar"
        - "Naqkhaqyitboq"
        - "Khuvankharu"
        - "Khuvanghakhiq"
        - "Bujalqiimod"
        - "Bujalyitboq"
        - "Gorenyemok"
        - "Bulaqsovid"
        - "Khilodbiiloq"
        - "Khilodtoliz"
        - "Khilodkharu"
        - "Savaghjilaq"
        - "Savaghbiiloq"
        - "Tijodkharu"
        - "Tijodorkun"
        - "Atazdovaq"
        - "Atazyaqnar"
        - "Orqazjilaq"
        - "Orqazdovaq"
        - "Koduvulud"
        - "Kodubeyuk"
        - "Guredkenod"
    tribe:
      - "Voghalur"
      - "Kesukur"
      - "Budakur"
      - "Yovakur"
      - "Naqkhakur"
      - "Khuvanur"
      - "Chuyelur"
      - "Guredur"
      - "Qodirur"
      - "Diqrakur"
      - "Khilodur"
      - "Savaghur"
      - "Tijodur"
      - "Bujalur"
      - "Gorenur"
      - "Soqritur"
      - "Ghotakur"
      - "Mirjolur"
      - "Biilokur"
      - "Bodekur"
      - "Khaaqidur"
      - "Vurakur"
  sounds:
    syllables:
      onsets: single
      codas: [b, d, t, k, g, q, gh, kh, j, ch, s, sh, z, m, n, l, r, v, y]
      finals: [d, t, k, q, kh, ch, s, sh, z, m, n, l, r, y]
      doubled: []
      vowelPairs: [aa, ii, uu]
      initialVowel: true
      neverInitial: [r]
      harmony: {back: [a, o, u], front: [e, ö, ü], neutral: [i], neutralAs: front}
      signature: [q, gh, kh, ch, j, z, o, ö, ü]
    joins: [{meeting: V+V, rule: insert, letters: [y]}, {meeting: C+C, rule: merge}]
  affixes:
    - {form: -ur, front: -ur, gloss: a people or tribe}
    - {form: -oq, front: -ok, gloss: "a union, a binding"}
    - {form: -or, front: -or, gloss: a range or grazing}
    - {form: -ud, front: -ud, gloss: one who does}
    - {form: -lun, front: -lun, gloss: a woman's given name, kind: name, given: woman}
  tongues:
    - {tag: kept, meaning: an older name retained by the Sovidur}
    - tag: sowides
      meaning: "a Sovidur name, built from Sovidur stems"
      language: skill-sowideslng
    - tag: gloss
      meaning: a glossed name or epithet; any in-world word it quotes is registered too
  scope:
    folders: [khazryndesert, ankariskhazryndesert]
    cultures: [khazrynclt]
    lore: [khazrynclt]
    parents: [khzryndsrtrgn, swoasisbelt, hekardesert]
    addresses: [skill-khazrilng, skill-sowideslng, skill-atarzadilng]
  elements:
    - {form: uruvol, sense: water}
    - {form: kelod, sense: well}
    - {form: jedor, sense: road}
    - {form: khoshiq, sense: sand}
    - {form: yolaq, sense: salt}
    - {form: kodu, sense: horse}
    - {form: gured, sense: camel}
    - {form: jobiz, sense: "kin, clan"}
    - {form: semok, sense: guest}
    - {form: jibun, sense: debt}
    - {form: koser, sense: "passage, safe-conduct, toll"}
    - {form: evur, sense: sky}
    - {form: uruvaq, sense: wind}
    - {form: bolid, sense: tower}
    - {form: jeske, sense: city}
    - {form: qodir, sense: mountain}
    - {form: vomek, sense: the dead}
    - {form: dolqon, sense: north}
    - {form: vaayaq, sense: south}
    - {form: idvaq, sense: east}
    - {form: orjaz, sense: west}
    - {form: orkun, sense: paramount chief}
    - {form: dovaq, sense: chief of a tribe}
    - {form: biiloq, sense: banner}
    - {form: mirjol, sense: herd}
    - {form: sovid, sense: "rider, escort"}
    - {form: qibud, sense: token}
    - {form: bodek, sense: "owned water, a tribe's oasis"}
    - {form: diqraq, sense: stone}
    - {form: khamaq, sense: skull}
    - {form: jivoq, sense: pole}
    - {form: vilaq, sense: cloth}
    - {form: volket, sense: grass}
    - {form: bulaq, sense: dust}
    - {form: goren, sense: storm}
    - {form: khilod, sense: sun}
    - {form: savagh, sense: moon}
    - {form: tijod, sense: star}
    - {form: numaq, sense: night}
    - {form: yodvir, sense: day}
    - {form: ataz, sense: dusk}
    - {form: votri, sense: cold}
    - {form: orqaz, sense: heat}
    - {form: bovi, sense: snow}
    - {form: uruukhiq, sense: blood}
    - {form: oshiq, sense: bone}
    - {form: bodva, sense: "feud, vengeance"}
    - {form: jadaq, sense: raid}
    - {form: lushiq, sense: ransom}
    - {form: kenod, sense: sword}
    - {form: toliz, sense: spear}
    - {form: ghakhiq, sense: bow}
    - {form: kuuyo, sense: arrow}
    - {form: voghal, sense: wolf}
    - {form: kesuk, sense: eagle}
    - {form: budaq, sense: vulture}
    - {form: yovaq, sense: dog}
    - {form: naqkhaq, sense: sheep}
    - {form: jeko, sense: goat}
    - {form: lekjek, sense: meat}
    - {form: voyer, sense: milk}
    - {form: ghotaz, sense: tent}
    - {form: oroqid, sense: camp}
    - {form: otviil, sense: "fire, hearth"}
    - {form: dujar, sense: smoke}
    - {form: yeloz, sense: laying-out ground}
    - {form: oqlaq, sense: "spirit, soul"}
    - {form: akhaq, sense: father}
    - {form: ekon, sense: mother}
    - {form: boyad, sense: son}
    - {form: minju, sense: daughter}
    - {form: todva, sense: elder}
    - {form: ghachaa, sense: child}
    - {form: orolqi, sense: "people, folk"}
    - {form: soqir, sense: tribe}
    - {form: juchon, sense: "moot, council"}
    - {form: yadqit, sense: market}
    - {form: qiiso, sense: price}
    - {form: vuraq, sense: silver}
    - {form: khaaqid, sense: gold}
    - {form: dichul, sense: silk}
    - {form: iqod, sense: white}
    - {form: uruchaq, sense: black}
    - {form: diqkhun, sense: red}
    - {form: evod, sense: lake}
    - {form: jiboq, sense: ice}
    - {form: tuvaq, sense: fur}
    - {form: khuvan, sense: deer}
    - {form: bujal, sense: seal}
    - {form: soqrit, sense: fish}
    - {form: ghotaq, sense: forest}
    - {form: yiqnot, sense: hunt}
    - {form: beyuk, sense: gift}
    - {form: yemok, sense: "word, oath"}
    - {form: aqril, sense: "peace, road-peace"}
    - {form: yaqnar, sense: great}
    - {form: yitboq, sense: first}
    - {form: jilaq, sense: "lantern, light"}
    - {form: bodiq, sense: ruin}
    - {form: kuyad, sense: buried}
    - {form: vulud, sense: wonder}
    - {form: jonkhiq, sense: "ground, earth"}
    - {form: kholqon, sense: "unification, a gathering of tribes"}
    - {form: qiimod, sense: "silent, still"}
    - {form: kharu, sense: patience}
    - {form: qojid, sense: "cursed, forbidden"}
    - {form: kedok, sense: "blood-ground, a blood-field"}
    - {form: vesuk, sense: "cursed ground, a thin blood-field"}
    - {form: oqod, sense: "calling, the naming of the dead"}
    - {form: koyoz, sense: song}
    - {form: chuyel, sense: jackal}
  fields:
    - name: Derived words
      holds: "The names and words built from the stems, each with the pieces it is made of."
    - name: "The moot, the feud and the raid"
      holds: "The moot of elders, the blood-feud and its settlement, the raid and the ransom."
    - name: "Water, salt and passage"
      holds: "Owned water, the salt given a guest, and the token that grants passage."
    - {name: "The dead", holds: "The laying-out ground and the words for the dead."}
    - "name": "Ordinary inherited stems"
      "holds": "The existing free stems cited as ordinary speech, preserving their established meanings and sound groups."
    - "name": "Everyday grammar"
      "holds": "The invariant linking words used by the ordinary clause constructions."
    - {"name": "Everyday senses", "holds": "Ordinary vocabulary for senses."}
    - {"name": "Everyday passions", "holds": "Ordinary vocabulary for passions."}
    - {"name": "Everyday loves", "holds": "Ordinary vocabulary for loves."}
    - {"name": "Everyday body", "holds": "Ordinary vocabulary for body."}
    - {"name": "Everyday needs", "holds": "Ordinary vocabulary for needs."}
    - {"name": "Everyday health", "holds": "Ordinary vocabulary for health."}
    - {"name": "Everyday kinship", "holds": "Ordinary vocabulary for kinship."}
    - {"name": "Everyday things", "holds": "Ordinary vocabulary for things."}
    - {"name": "Everyday nature", "holds": "Ordinary vocabulary for nature."}
    - {"name": "Everyday numbers", "holds": "Ordinary vocabulary for numbers."}
    - {"name": "Everyday colours", "holds": "Ordinary vocabulary for colours."}
    - {"name": "Everyday verbs", "holds": "Ordinary vocabulary for verbs."}
    - {"name": "Everyday space", "holds": "Ordinary vocabulary for space."}
    - {"name": "Everyday time", "holds": "Ordinary vocabulary for time."}
    - {"name": "Everyday reference", "holds": "Ordinary vocabulary for reference."}
    - {"name": "Everyday questions", "holds": "Ordinary vocabulary for questions."}
    - {"name": "Everyday truth", "holds": "Ordinary vocabulary for truth."}
    - {"name": "Everyday logic", "holds": "Ordinary vocabulary for logic."}
    - {"name": "Everyday qualities", "holds": "Ordinary vocabulary for qualities."}
    - {"name": "Everyday modality", "holds": "Ordinary vocabulary for modality."}
    - {"name": "Everyday conversation", "holds": "Ordinary vocabulary for conversation."}
    - {"name": "Everyday society", "holds": "Ordinary vocabulary for society."}
    - {"name": "Everyday existence", "holds": "Ordinary vocabulary for existence."}
  words:
    - form: Sovidur
      class: name
      field: Derived words
      gloss: "the riders, the steppe peoples' name for themselves"
      built: [sovid, -ur]
    - form: Orkunoq
      class: name
      field: Derived words
      gloss: the union an orkun forces over tribes
      built: [orkun, -oq]
    - form: Koduyur
      class: name
      field: Derived words
      gloss: the horse people
      built: [kodu, -ur]
    - form: Koduyuruvaq
      class: name
      field: Derived words
      gloss: horse of the wind
      built: [kodu, uruvaq]
    - form: Jedororoqid
      class: name
      field: Derived words
      gloss: "road camp, a caravan halt"
      built: [jedor, oroqid]
    - form: Diqraqor
      class: name
      field: Derived words
      gloss: the stone range
      built: [diqraq, -or]
    - {form: Jadakud, class: name, field: Derived words, gloss: a raider, built: [jadaq, -ud]}
    - form: Voghaltoliz
      class: name
      field: Derived words
      gloss: "a man's name: wolf-spear"
      built: [voghal, toliz]
    - form: Tijodlun
      class: name
      field: Derived words
      gloss: "a woman's name: star"
      built: [tijod, -lun]
    - form: Atazkharu
      class: name
      field: Derived words
      gloss: "a man's name: dusk-patience"
      built: [ataz, kharu]
    - form: Chuyelqiimod
      class: name
      field: Derived words
      gloss: "a title: jackal-silent, what the steppe calls Atazkharu"
      built: [chuyel, qiimod]
    - form: Uruvolur
      class: name
      field: Derived words
      gloss: "the water people: the hidden-water bands of the Central Sands"
      built: [uruvol, -ur]
    - form: Ghotaqor
      class: name
      field: Derived words
      gloss: "the forest range: the northern taiga"
      built: [ghotaq, -or]
    - form: Volketor
      class: name
      field: Derived words
      gloss: "the grass range: the Western Margin"
      built: [volket, -or]
    - form: Khoshiqor
      class: name
      field: Derived words
      gloss: "the sand range: the Central Sands"
      built: [khoshiq, -or]
    - form: Idvaqor
      class: name
      field: Derived words
      gloss: "the east range: the Eastern Stone Desert"
      built: [idvaq, -or]
    - form: Bolid
      class: name
      field: Derived words
      gloss: "tower: the buried tower city of the western margin"
      built: [bolid]
    - form: Jilaq
      class: name
      field: Derived words
      gloss: "lantern: the tower league's chief city"
      built: [jilaq]
    - form: Vulud
      class: name
      field: Derived words
      gloss: "wonder: the half-buried tower city"
      built: [vulud]
    - form: Evod
      class: name
      field: Derived words
      gloss: "lake: the dry salt lake"
      built: [evod]
    - form: Kelod
      class: name
      field: Derived words
      gloss: "well: the stepped well"
      built: [kelod]
    - form: Vomek
      class: name
      field: Derived words
      gloss: "the dead: the oasis nobody uses"
      built: [vomek]
    - form: Qiimod
      class: name
      field: Derived words
      gloss: "silent: the sacked caravan town on the spur"
      built: [qiimod]
    - form: Oshiqor
      class: name
      field: Derived words
      gloss: "the bone range: the rock-cut tombs of the uplands"
      built: [oshiq, -or]
    - form: Uruvaq
      class: name
      field: Derived words
      gloss: "wind: the hollow hills"
      built: [uruvaq]
    - form: Oroqid
      class: name
      field: Derived words
      gloss: "camp: the Vylarian fort"
      built: [oroqid]
    - form: Qiiso
      class: name
      field: Derived words
      gloss: "price: the Central Road's seasonal market-camp"
      built: [qiiso]
    - form: Yemok
      class: name
      field: Derived words
      gloss: "oath: the hand-off well at the west of the Central Sands"
      built: [yemok]
    - form: Sovid
      class: name
      field: Derived words
      gloss: "rider: the hand-off well at the east of the Central Sands"
      built: [sovid]
    - form: Kelodud
      class: name
      field: Derived words
      gloss: "well-doer: the well-lurker"
      built: [kelod, -ud]
    - form: Orqazud
      class: name
      field: Derived words
      gloss: "heat-doer: the mirage-stalker"
      built: [orqaz, -ud]
    - form: Khoshikud
      class: name
      field: Derived words
      gloss: "sand-doer: the pit-maker"
      built: [khoshiq, -ud]
    - form: Budaq
      class: name
      field: Derived words
      gloss: "vulture: the road-vulture"
      built: [budaq]
    - form: Guredor
      class: name
      field: Derived words
      gloss: "camel of the range: the wild bull camel"
      built: [gured, -or]
    - form: Yolakud
      class: name
      field: Derived words
      gloss: "salt-doer: the salt-dust spirit"
      built: [yolaq, -ud]
    - form: Numaq
      class: name
      field: Derived words
      gloss: "night: the tower-roost colony"
      built: [numaq]
    - form: Yiqnotud
      class: name
      field: Derived words
      gloss: "the hunter: the steppe hunter"
      built: [yiqnot, -ud]
    - form: Kedok
      class: name
      field: Derived words
      gloss: "blood-ground: a blood-field"
      built: [kedok]
    - form: Vesuk
      class: name
      field: Derived words
      gloss: "cursed ground: a thin blood-field"
      built: [vesuk]
    - form: Vomekoqod
      class: name
      field: Derived words
      gloss: "the calling at Vomek: the names held for the dead of the oasis"
      built: [vomek, oqod]
    - form: Uruvolkuyad
      class: name
      field: Derived words
      gloss: "the buried water: the Sahri star-song of the lake under the sand"
      built: [uruvol, kuyad]
    - form: Gorentoliz
      class: name
      field: Derived words
      gloss: "a man's name: storm-spear; the dovaq made to watch at Vomek"
      built: [goren, toliz]
    - form: Khuvanur
      class: name
      field: Derived words
      gloss: "the deer people: the tribe killed at Vomek"
      built: [khuvan, -ur]
    - form: Kesukur
      class: name
      field: Derived words
      gloss: "the eagle people: the tribe that took in the survivors of Vomek"
      built: [kesuk, -ur]
    - form: Savaghlun
      class: name
      field: Derived words
      gloss: "a woman's name: moon"
      built: [savagh, -lun]
    - form: Bovilun
      class: name
      field: Derived words
      gloss: "a woman's name: snow"
      built: [bovi, -lun]
    - form: Voyerlun
      class: name
      field: Derived words
      gloss: "a woman's name: milk"
      built: [voyer, -lun]
    - form: Uruvolun
      class: name
      field: Derived words
      gloss: "a woman's name: water; a guide of the hidden-water bands"
      built: [uruvol, -lun]
    - form: Khilodtoliz
      class: name
      field: Derived words
      gloss: "a man's name: sun-spear; a rider of the Shirzari"
      built: [khilod, toliz]
    - form: Kelodekon
      class: name
      field: Derived words
      gloss: "the well-mother: the keeper at the bottom of the stepped well"
      built: [kelod, ekon]
    - form: Khamaqjivoq
      class: name
      field: Derived words
      gloss: "the skull-pole: a star the Sahri steer by"
      built: [khamaq, jivoq]
    - form: Khilodlun
      class: name
      field: Derived words
      gloss: "a woman's name: sun; the chief of the Azardan"
      built: [khilod, -lun]
    - form: Kesukyemok
      class: name
      field: Derived words
      gloss: "a man's name: eagle-oath; a shaman of the Azardan; `Darius` is retired"
      built: [kesuk, yemok]
    - form: Khuvankenod
      class: name
      field: Derived words
      gloss: "a man's name: deer-sword; a desert lord who races camels"
      built: [khuvan, kenod]
    - form: Kelodvotri
      class: name
      field: Derived words
      gloss: "the cold well: an owned spring of the Kuuyoyur"
      built: [kelod, votri]
    - form: Kuuyoyur
      class: name
      field: Derived words
      gloss: "the arrow people: the tribe that owns the cold well"
      built: [kuuyo, -ur]
    - form: Bodekud
      class: name
      field: Derived words
      gloss: "the one who owns the water: the thing in the cistern of the cold well"
      built: [bodek, -ud]
    - form: Gorenghakhiq
      class: name
      field: Derived words
      gloss: "a man's name: storm-bow; a caravan guide of the grass"
      built: [goren, ghakhiq]
    - form: Numaqlun
      class: name
      field: Derived words
      gloss: "a woman's name: night; the wife of the warden of the cold well"
      built: [numaq, -lun]
    - form: Budaqtoliz
      class: name
      field: Derived words
      gloss: "a man's name: vulture-spear; a rider of the Kuuyoyur"
      built: [budaq, toliz]
    - form: Voghalkenod
      class: name
      field: Derived words
      gloss: "a man's name: wolf-sword; the water-warden of the cold well"
      built: [voghal, kenod]
    - form: Bolidqiiso
      class: name
      field: Derived words
      gloss: "the price-tower: a counting-house tower of Vulud"
      built: [bolid, qiiso]
    - form: Sovidiqraq
      class: name
      field: Derived words
      gloss: "the stone escort: the watchman of the price-tower"
      built: [sovid, diqraq]
    - form: Kesukenod
      class: name
      field: Derived words
      gloss: "a man's name: eagle-sword; a hired hand at the price-tower"
      built: [kesuk, kenod]
    - form: "bodva"
      class: "n"
      field: "The moot, the feud and the raid"
      gloss: "A blood-feud between two kindreds, closed by a payment of horses or a marriage"
      built: ["bodva"]
    - form: "bodek"
      class: "n"
      field: "Water, salt and passage"
      gloss: "Owned water: a spring or seep too small to settle, the property of one tribe"
      built: ["bodek"]
    - form: "jadaq"
      class: "n"
      field: "The moot, the feud and the raid"
      gloss: "A raid, planned in moot and led by a war captain"
      built: ["jadaq"]
    - form: "juchon"
      class: "n"
      field: "The moot, the feud and the raid"
      gloss: "A moot of elders, a tribe's own or that of the tribes whose ranges meet at a well"
      built: ["juchon"]
    - form: "qibud"
      class: "n"
      field: "Water, salt and passage"
      gloss: "The token a tribe issues for passage, a tally of cord or clay cut with its sign"
      built: ["qibud"]
    - form: "lushiq"
      class: "n"
      field: "The moot, the feud and the raid"
      gloss: "A ransom, the price for which a captive taken in a raid goes home"
      built: ["lushiq"]
    - form: "yeloz"
      class: "n"
      field: "The dead"
      gloss: "The laying-out ground, where the dead are left to the four winds"
      built: ["yeloz"]
    - form: "yolaq"
      class: "n"
      field: "Water, salt and passage"
      gloss: "Salt, the first thing a tribe gives a guest"
      built: ["yolaq"]
    - "form": "uruvol"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "water"
      "built": ["uruvol"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["water"]
    - "form": "kelod"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "well"
      "built": ["kelod"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "jedor"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "road"
      "built": ["jedor"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "khoshiq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "sand"
      "built": ["khoshiq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "kodu"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "horse"
      "built": ["kodu"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "gured"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "camel"
      "built": ["gured"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "jobiz"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "kin, clan"
      "built": ["jobiz"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["kin", "clan"]
    - "form": "semok"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "guest"
      "built": ["semok"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["guest"]
    - "form": "jibun"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "debt"
      "built": ["jibun"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["debt"]
    - "form": "koser"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "passage, safe-conduct, toll"
      "built": ["koser"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "evur"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "sky"
      "built": ["evur"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["sky"]
    - "form": "uruvaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "wind"
      "built": ["uruvaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["wind"]
    - "form": "bolid"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "tower"
      "built": ["bolid"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "jeske"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "city"
      "built": ["jeske"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "qodir"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "mountain"
      "built": ["qodir"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["mountain"]
    - "form": "vomek"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "the dead"
      "built": ["vomek"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "dolqon"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "north"
      "built": ["dolqon"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["north"]
    - "form": "vaayaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "south"
      "built": ["vaayaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["south"]
    - "form": "idvaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "east"
      "built": ["idvaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["east"]
    - "form": "orjaz"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "west"
      "built": ["orjaz"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["west"]
    - "form": "orkun"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "paramount chief"
      "built": ["orkun"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "dovaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "chief of a tribe"
      "built": ["dovaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "biiloq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "banner"
      "built": ["biiloq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "mirjol"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "herd"
      "built": ["mirjol"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "sovid"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "rider, escort"
      "built": ["sovid"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "diqraq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "stone"
      "built": ["diqraq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["stone", "rock"]
    - "form": "khamaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "skull"
      "built": ["khamaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "jivoq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "pole"
      "built": ["jivoq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "vilaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "cloth"
      "built": ["vilaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["cloth"]
    - "form": "volket"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "grass"
      "built": ["volket"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["grass"]
    - "form": "bulaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "dust"
      "built": ["bulaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["dust"]
    - "form": "goren"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "storm"
      "built": ["goren"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["storm"]
    - "form": "khilod"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "sun"
      "built": ["khilod"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["sun"]
    - "form": "savagh"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "moon"
      "built": ["savagh"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["moon"]
    - "form": "tijod"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "star"
      "built": ["tijod"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["star"]
    - "form": "numaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "night"
      "built": ["numaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["night"]
    - "form": "yodvir"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "day"
      "built": ["yodvir"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["day"]
    - "form": "ataz"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "dusk"
      "built": ["ataz"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["dusk"]
    - "form": "votri"
      "class": "adj"
      "field": "Ordinary inherited stems"
      "gloss": "cold"
      "built": ["votri"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["cold"]
    - "form": "orqaz"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "heat"
      "built": ["orqaz"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["heat"]
    - "form": "bovi"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "snow"
      "built": ["bovi"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["snow"]
    - "form": "uruukhiq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "blood"
      "built": ["uruukhiq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["blood"]
    - "form": "oshiq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "bone"
      "built": ["oshiq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["bone"]
    - "form": "kenod"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "sword"
      "built": ["kenod"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "toliz"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "spear"
      "built": ["toliz"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "ghakhiq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "bow"
      "built": ["ghakhiq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "kuuyo"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "arrow"
      "built": ["kuuyo"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "voghal"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "wolf"
      "built": ["voghal"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "kesuk"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "eagle"
      "built": ["kesuk"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "budaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "vulture"
      "built": ["budaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "yovaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "dog"
      "built": ["yovaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "naqkhaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "sheep"
      "built": ["naqkhaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "jeko"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "goat"
      "built": ["jeko"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "lekjek"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "meat"
      "built": ["lekjek"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "voyer"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "milk"
      "built": ["voyer"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "ghotaz"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "tent"
      "built": ["ghotaz"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "oroqid"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "camp"
      "built": ["oroqid"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "otviil"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "fire, hearth"
      "built": ["otviil"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["fire", "hearth"]
    - "form": "dujar"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "smoke"
      "built": ["dujar"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["smoke"]
    - "form": "oqlaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "spirit, soul"
      "built": ["oqlaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "akhaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "father"
      "built": ["akhaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["father"]
    - "form": "ekon"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "mother"
      "built": ["ekon"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["mother"]
    - "form": "boyad"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "son"
      "built": ["boyad"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["son"]
    - "form": "minju"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "daughter"
      "built": ["minju"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["daughter"]
    - "form": "todva"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "elder"
      "built": ["todva"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["elder"]
    - "form": "ghachaa"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "child"
      "built": ["ghachaa"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["child"]
    - "form": "orolqi"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "people, folk"
      "built": ["orolqi"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["people"]
    - "form": "soqir"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "tribe"
      "built": ["soqir"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["tribe"]
    - "form": "yadqit"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "market"
      "built": ["yadqit"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "qiiso"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "price"
      "built": ["qiiso"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "vuraq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "silver"
      "built": ["vuraq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "khaaqid"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "gold"
      "built": ["khaaqid"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "dichul"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "silk"
      "built": ["dichul"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "iqod"
      "class": "adj"
      "field": "Ordinary inherited stems"
      "gloss": "white"
      "built": ["iqod"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["white"]
    - "form": "uruchaq"
      "class": "adj"
      "field": "Ordinary inherited stems"
      "gloss": "black"
      "built": ["uruchaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["black"]
    - "form": "diqkhun"
      "class": "adj"
      "field": "Ordinary inherited stems"
      "gloss": "red"
      "built": ["diqkhun"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["red"]
    - "form": "evod"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "lake"
      "built": ["evod"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["lake"]
    - "form": "jiboq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "ice"
      "built": ["jiboq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["ice"]
    - "form": "tuvaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "fur"
      "built": ["tuvaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "khuvan"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "deer"
      "built": ["khuvan"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "bujal"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "seal"
      "built": ["bujal"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "soqrit"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "fish"
      "built": ["soqrit"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["fish"]
    - "form": "ghotaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "forest"
      "built": ["ghotaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["forest"]
    - "form": "yiqnot"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "hunt"
      "built": ["yiqnot"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "beyuk"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "gift"
      "built": ["beyuk"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["gift"]
    - "form": "yemok"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "word, oath"
      "built": ["yemok"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "aqril"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "peace, road-peace"
      "built": ["aqril"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["peace"]
    - "form": "yaqnar"
      "class": "adj"
      "field": "Ordinary inherited stems"
      "gloss": "great"
      "built": ["yaqnar"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["big"]
    - "form": "yitboq"
      "class": "adj"
      "field": "Ordinary inherited stems"
      "gloss": "first"
      "built": ["yitboq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["first"]
    - "form": "jilaq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "lantern, light"
      "built": ["jilaq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["lamp"]
    - "form": "bodiq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "ruin"
      "built": ["bodiq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "kuyad"
      "class": "adj"
      "field": "Ordinary inherited stems"
      "gloss": "buried"
      "built": ["kuyad"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "vulud"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "wonder"
      "built": ["vulud"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "jonkhiq"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "ground, earth"
      "built": ["jonkhiq"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "kholqon"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "unification, a gathering of tribes"
      "built": ["kholqon"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "qiimod"
      "class": "adj"
      "field": "Ordinary inherited stems"
      "gloss": "silent, still"
      "built": ["qiimod"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["quiet"]
    - "form": "kharu"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "patience"
      "built": ["kharu"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "qojid"
      "class": "adj"
      "field": "Ordinary inherited stems"
      "gloss": "cursed, forbidden"
      "built": ["qojid"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
      "concept": ["forbidden"]
    - "form": "kedok"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "blood-ground, a blood-field"
      "built": ["kedok"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "vesuk"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "cursed ground, a thin blood-field"
      "built": ["vesuk"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "oqod"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "calling, the naming of the dead"
      "built": ["oqod"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "koyoz"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "song"
      "built": ["koyoz"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "chuyel"
      "class": "n"
      "field": "Ordinary inherited stems"
      "gloss": "jackal"
      "built": ["chuyel"]
      "note": "An ordinary citation of the existing free stem; its established sound group and meaning are retained."
    - "form": "jiven"
      "class": "part"
      "gloss": "of; follows a possessor after the possessed head: kodu zilir jiven, my horse."
      "field": "Everyday grammar"
      "source": {"kind": "coined"}
    - "form": "chovin"
      "class": "part"
      "gloss": "with; follows the accompanying person or thing."
      "field": "Everyday grammar"
      "source": {"kind": "coined"}
    - "form": "jilar"
      "class": "part"
      "gloss": "ordinal position marker before a stated number, after its head noun; jilar shokhun is fourth."
      "field": "Everyday grammar"
      "source": {"kind": "coined"}
    - "form": "qaviz"
      "class": "v"
      "gloss": "mean; intend the meaning stated as its object."
      "field": "Everyday grammar"
      "source": {"kind": "coined"}
    - "form": "zokhun"
      "class": "part"
      "gloss": "finite relative-clause opener after the head noun; the clause ends at zökhen."
      "field": "Everyday grammar"
      "source": {"kind": "coined"}
    - "form": "zökhen"
      "class": "part"
      "gloss": "end of a finite relative description or an embedded reported clause."
      "field": "Everyday grammar"
      "source": {"kind": "coined"}
    - "form": "jidir"
      "class": "part"
      "gloss": "opens the complete proposition being reported or considered."
      "field": "Everyday grammar"
      "source": {"kind": "coined"}
    - "form": "chüdir"
      "class": "part"
      "gloss": "end of a coordinated noun group when its boundary must be made explicit."
      "field": "Everyday grammar"
      "source": {"kind": "coined"}
    - "form": "zöken"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "to see"
      "concept": "see-verb"
      "source": {"kind": "coined"}
    - "form": "ghayim"
      "class": "n"
      "field": "Everyday senses"
      "gloss": "a sight; what is seen"
      "concept": "see-noun"
      "source": {"kind": "coined"}
    - "form": "chömel"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "to hear"
      "concept": "hear-verb"
      "source": {"kind": "coined"}
    - "form": "ghachush"
      "class": "n"
      "field": "Everyday senses"
      "gloss": "a sound"
      "concept": "hear-noun"
      "source": {"kind": "coined"}
    - "form": "qukhon"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "to smell"
      "concept": "smell-verb"
      "source": {"kind": "coined"}
    - "form": "zolitus"
      "class": "n"
      "field": "Everyday senses"
      "gloss": "a smell; a scent"
      "concept": "smell-noun"
      "source": {"kind": "coined"}
    - "form": "jeyem"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "to taste"
      "concept": "taste-verb"
      "source": {"kind": "coined"}
    - "form": "joruqos"
      "class": "n"
      "field": "Everyday senses"
      "gloss": "a taste; a flavour"
      "concept": "taste-noun"
      "source": {"kind": "coined"}
    - "form": "zaqun"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "to touch; to feel with the hand"
      "concept": "touch-verb"
      "source": {"kind": "coined"}
    - "form": "khochum"
      "class": "n"
      "field": "Everyday senses"
      "gloss": "a touch"
      "concept": "touch-noun"
      "source": {"kind": "coined"}
    - "form": "chödir"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "to look"
      "concept": "look"
      "source": {"kind": "coined"}
    - "form": "zenökh"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "to watch; to observe attentively"
      "concept": "watch"
      "source": {"kind": "coined"}
    - "form": "zochulay"
      "class": "n"
      "field": "Everyday senses"
      "gloss": "appearance"
      "concept": "appearance"
      "source": {"kind": "coined"}
    - "form": "khüner"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "visible"
      "concept": "visible"
      "source": {"kind": "coined"}
    - "form": "juyokhan"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "invisible"
      "concept": "invisible"
      "source": {"kind": "coined"}
    - "form": "zekhir"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "to listen"
      "concept": "listen"
      "source": {"kind": "coined"}
    - "form": "qorish"
      "class": "n"
      "field": "Everyday senses"
      "gloss": "noise"
      "concept": "noise"
      "source": {"kind": "coined"}
    - "form": "jüyech"
      "class": "n"
      "field": "Everyday senses"
      "gloss": "voice"
      "concept": "voice"
      "source": {"kind": "coined"}
    - "form": "jüyemüz"
      "class": "n"
      "field": "Everyday senses"
      "gloss": "silence"
      "concept": "silence"
      "source": {"kind": "coined"}
    - "form": "junin"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "loud"
      "concept": "loud"
      "source": {"kind": "coined"}
    - "form": "ghughuyar"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "fragrant"
      "concept": "fragrant"
      "source": {"kind": "coined"}
    - "form": "jedöm"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "foul-smelling; having an unpleasant smell"
      "concept": "foul"
      "source": {"kind": "coined"}
    - "form": "ghonor"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "sweet"
      "concept": "sweet"
      "source": {"kind": "coined"}
    - "form": "chokhad"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "sour"
      "concept": "sour"
      "source": {"kind": "coined"}
    - "form": "qokhos"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "bitter"
      "concept": "bitter"
      "source": {"kind": "coined"}
    - "form": "khülez"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "salty"
      "concept": "salty"
      "source": {"kind": "coined"}
    - "form": "chayokh"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "to feel a sensation"
      "concept": "feel-verb"
      "source": {"kind": "coined"}
    - "form": "qoqum"
      "class": "n"
      "field": "Everyday senses"
      "gloss": "sensation"
      "concept": "sensation"
      "source": {"kind": "coined"}
    - "form": "chaqot"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "smooth"
      "concept": "smooth"
      "source": {"kind": "coined"}
    - "form": "ghokhirun"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "rough"
      "concept": "rough"
      "source": {"kind": "coined"}
    - "form": "zorotoq"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "soft"
      "concept": "soft"
      "source": {"kind": "coined"}
    - "form": "qoghid"
      "class": "adj"
      "field": "Everyday senses"
      "gloss": "hard to the touch; firm rather than soft, without meaning difficult"
      "concept": "hard-texture"
      "source": {"kind": "coined"}
    - "form": "khuyiyod"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "to notice"
      "concept": "notice"
      "source": {"kind": "coined"}
    - "form": "jüchekhem"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "perceive"
      "concept": "perceive"
      "source": {"kind": "coined"}
    - "form": "qoruzir"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "recognize"
      "concept": "recognize"
      "source": {"kind": "coined"}
    - "form": "jönit"
      "class": "v"
      "field": "Everyday senses"
      "gloss": "seem"
      "concept": "seem"
      "source": {"kind": "coined"}
    - "form": "jolil"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "wrath; intense anger"
      "concept": "wrath"
      "source": {"kind": "coined"}
    - "form": "jubut"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "envy; distress at another person's good fortune"
      "concept": "envy"
      "source": {"kind": "coined"}
    - "form": "ghobish"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "hope"
      "concept": "hope"
      "source": {"kind": "coined"}
    - "form": "jükhükh"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "greed"
      "concept": "greed"
      "source": {"kind": "coined"}
    - "form": "jüzüm"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "boasting"
      "concept": "boasting"
      "source": {"kind": "coined"}
    - "form": "zalighich"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "pride"
      "concept": "pride"
      "source": {"kind": "coined"}
    - "form": "qovash"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "lust; sexual appetite, without implying affection or commitment"
      "concept": "lust"
      "source": {"kind": "coined"}
    - "form": "zataz"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "despair"
      "concept": "despair"
      "source": {"kind": "coined"}
    - "form": "chechil"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "disappointment"
      "concept": "disappointment"
      "source": {"kind": "coined"}
    - "form": "chayurud"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "faith; committed trust without requiring demonstrated proof"
      "concept": "faith"
      "source": {"kind": "coined"}
    - "form": "zökem"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "joy"
      "concept": "joy"
      "source": {"kind": "coined"}
    - "form": "khöchöz"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "happiness"
      "concept": "happiness"
      "source": {"kind": "coined"}
    - "form": "cholar"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "pleasure"
      "concept": "pleasure"
      "source": {"kind": "coined"}
    - "form": "zolitid"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "contentment"
      "concept": "contentment"
      "source": {"kind": "coined"}
    - "form": "qakhuch"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "gratitude"
      "concept": "gratitude"
      "source": {"kind": "coined"}
    - "form": "ghusam"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "admiration"
      "concept": "admiration"
      "source": {"kind": "coined"}
    - "form": "khachun"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "trust"
      "concept": "trust"
      "source": {"kind": "coined"}
    - "form": "chachud"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "courage"
      "concept": "courage"
      "source": {"kind": "coined"}
    - "form": "jümöch"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "anger"
      "concept": "anger"
      "source": {"kind": "coined"}
    - "form": "khuruy"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "hatred"
      "concept": "hatred"
      "source": {"kind": "coined"}
    - "form": "ghochuz"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "jealousy; fear and anger over losing a valued relationship to a rival"
      "concept": "jealousy"
      "source": {"kind": "coined"}
    - "form": "zümön"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "fear"
      "concept": "fear"
      "source": {"kind": "coined"}
    - "form": "ghazur"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "terror"
      "concept": "terror"
      "source": {"kind": "coined"}
    - "form": "khugham"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "sadness"
      "concept": "sadness"
      "source": {"kind": "coined"}
    - "form": "qokhul"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "grief"
      "concept": "grief"
      "source": {"kind": "coined"}
    - "form": "khökekh"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "shame"
      "concept": "shame"
      "source": {"kind": "coined"}
    - "form": "chodom"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "guilt"
      "concept": "guilt"
      "source": {"kind": "coined"}
    - "form": "zünes"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "regret"
      "concept": "regret"
      "source": {"kind": "coined"}
    - "form": "züvüzes"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "humility"
      "concept": "humility"
      "source": {"kind": "coined"}
    - "form": "ghutiz"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "confidence; felt assurance in one's ability or likely outcome, without establishing truth"
      "concept": "confidence"
      "source": {"kind": "coined"}
    - "form": "chegegikh"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "embarrassment"
      "concept": "embarrassment"
      "source": {"kind": "coined"}
    - "form": "joloq"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "compassion"
      "concept": "compassion"
      "source": {"kind": "coined"}
    - "form": "khorush"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "pity"
      "concept": "pity"
      "source": {"kind": "coined"}
    - "form": "chüyökh"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "sympathy"
      "concept": "sympathy"
      "source": {"kind": "coined"}
    - "form": "zachol"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "resentment"
      "concept": "resentment"
      "source": {"kind": "coined"}
    - "form": "zoghos"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "contempt"
      "concept": "contempt"
      "source": {"kind": "coined"}
    - "form": "chömüsil"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "forgiveness"
      "concept": "forgiveness"
      "source": {"kind": "coined"}
    - "form": "qazis"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "desire"
      "concept": "desire"
      "source": {"kind": "coined"}
    - "form": "chuzus"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "longing"
      "concept": "longing"
      "source": {"kind": "coined"}
    - "form": "jürit"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "satisfaction at fulfilling a desire, distinct from contentment with what one already has"
      "concept": "satisfaction"
      "source": {"kind": "coined"}
    - "form": "chaqadaz"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "frustration"
      "concept": "frustration"
      "source": {"kind": "coined"}
    - "form": "jüsöd"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "curiosity"
      "concept": "curiosity"
      "source": {"kind": "coined"}
    - "form": "zeküch"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "confusion"
      "concept": "confusion"
      "source": {"kind": "coined"}
    - "form": "qoghuy"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "doubt"
      "concept": "doubt"
      "source": {"kind": "coined"}
    - "form": "chozon"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "certainty; complete assurance about a claim, distinct from the claim's actual truth"
      "concept": "certainty"
      "source": {"kind": "coined"}
    - "form": "chorasich"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "surprise"
      "concept": "surprise"
      "source": {"kind": "coined"}
    - "form": "qumud"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "boredom"
      "concept": "boredom"
      "source": {"kind": "coined"}
    - "form": "züliz"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "anticipation"
      "concept": "anticipation"
      "source": {"kind": "coined"}
    - "form": "qachash"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "belief; accepting a proposition as true"
      "concept": "belief"
      "source": {"kind": "coined"}
    - "form": "khörel"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "reverence"
      "concept": "reverence"
      "source": {"kind": "coined"}
    - "form": "gharokh"
      "class": "n"
      "field": "Everyday passions"
      "gloss": "awe"
      "concept": "awe"
      "source": {"kind": "coined"}
    - "form": "jovaan"
      "class": "n"
      "field": "Everyday loves"
      "gloss": "romantic love; affection for a beloved partner, distinct from sexual appetite"
      "concept": "love-eros"
      "source": {"kind": "coined"}
    - "form": "chezin"
      "class": "n"
      "field": "Everyday loves"
      "gloss": "friendship; affectionate regard between friends"
      "concept": "love-philia"
      "source": {"kind": "coined"}
    - "form": "ghavun"
      "class": "n"
      "field": "Everyday loves"
      "gloss": "family love; affectionate attachment to kin"
      "concept": "love-storge"
      "source": {"kind": "coined"}
    - "form": "ghavuur"
      "class": "n"
      "field": "Everyday loves"
      "gloss": "selfless universal love; concern for others without repayment, sexual desire or kinship advantage"
      "concept": "love-agape"
      "source": {"kind": "coined"}
    - "form": "khöbed"
      "class": "n"
      "field": "Everyday loves"
      "gloss": "affection"
      "concept": "affection"
      "source": {"kind": "coined"}
    - "form": "qoqot"
      "class": "n"
      "field": "Everyday loves"
      "gloss": "attraction"
      "concept": "attraction"
      "source": {"kind": "coined"}
    - "form": "chamul"
      "class": "n"
      "field": "Everyday loves"
      "gloss": "intimacy"
      "concept": "intimacy"
      "source": {"kind": "coined"}
    - "form": "ghoquz"
      "class": "n"
      "field": "Everyday loves"
      "gloss": "devotion"
      "concept": "devotion"
      "source": {"kind": "coined"}
    - "form": "qadol"
      "class": "n"
      "field": "Everyday loves"
      "gloss": "loyalty"
      "concept": "loyalty"
      "source": {"kind": "coined"}
    - "form": "qosuy"
      "class": "n"
      "field": "Everyday loves"
      "gloss": "companionship; being together with a companion"
      "concept": "companionship"
      "source": {"kind": "coined"}
    - "form": "chakhish"
      "class": "n"
      "field": "Everyday loves"
      "gloss": "enmity"
      "concept": "enmity"
      "source": {"kind": "coined"}
    - "form": "junosh"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the head"
      "concept": "head"
      "source": {"kind": "coined"}
    - "form": "chaqur"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the hair"
      "concept": "hair"
      "source": {"kind": "coined"}
    - "form": "khozul"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the face"
      "concept": "face"
      "source": {"kind": "coined"}
    - "form": "jelüd"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the eye"
      "concept": "eye"
      "source": {"kind": "coined"}
    - "form": "zughikhokh"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the ear"
      "concept": "ear"
      "source": {"kind": "coined"}
    - "form": "ghusus"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the nose"
      "concept": "nose"
      "source": {"kind": "coined"}
    - "form": "zebüd"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the mouth"
      "concept": "mouth"
      "source": {"kind": "coined"}
    - "form": "khüziy"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the lip"
      "concept": "lip"
      "source": {"kind": "coined"}
    - "form": "jonach"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the tooth"
      "concept": "tooth"
      "source": {"kind": "coined"}
    - "form": "qaqit"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the tongue"
      "concept": "tongue"
      "source": {"kind": "coined"}
    - "form": "khezir"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the neck"
      "concept": "neck"
      "source": {"kind": "coined"}
    - "form": "khodor"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the shoulder"
      "concept": "shoulder"
      "source": {"kind": "coined"}
    - "form": "chaghoz"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the arm"
      "concept": "arm"
      "source": {"kind": "coined"}
    - "form": "jüchet"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the elbow"
      "concept": "elbow"
      "source": {"kind": "coined"}
    - "form": "züzin"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the hand"
      "concept": "hand"
      "source": {"kind": "coined"}
    - "form": "javat"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the finger"
      "concept": "finger"
      "source": {"kind": "coined"}
    - "form": "zövey"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the fingernail"
      "concept": "nail"
      "source": {"kind": "coined"}
    - "form": "khosad"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the chest"
      "concept": "chest"
      "source": {"kind": "coined"}
    - "form": "joyoqul"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the breast"
      "concept": "breast"
      "source": {"kind": "coined"}
    - "form": "khatokh"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the heart"
      "concept": "heart"
      "source": {"kind": "coined"}
    - "form": "jürör"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the belly"
      "concept": "belly"
      "source": {"kind": "coined"}
    - "form": "jüvelekh"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the back"
      "concept": "back"
      "source": {"kind": "coined"}
    - "form": "chüdem"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the hip"
      "concept": "hip"
      "source": {"kind": "coined"}
    - "form": "jetökör"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the leg"
      "concept": "leg"
      "source": {"kind": "coined"}
    - "form": "zokhaz"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the knee"
      "concept": "knee"
      "source": {"kind": "coined"}
    - "form": "chöyikh"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the foot"
      "concept": "foot"
      "source": {"kind": "coined"}
    - "form": "khulad"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the toe"
      "concept": "toe"
      "source": {"kind": "coined"}
    - "form": "jöbümil"
      "class": "n"
      "field": "Everyday body"
      "gloss": "the skin"
      "concept": "skin"
      "source": {"kind": "coined"}
    - "form": "chabuch"
      "class": "n"
      "field": "Everyday body"
      "gloss": "flesh"
      "concept": "flesh"
      "source": {"kind": "coined"}
    - "form": "khötish"
      "class": "n"
      "field": "Everyday body"
      "gloss": "forehead"
      "concept": "forehead"
      "source": {"kind": "coined"}
    - "form": "qochidakh"
      "class": "n"
      "field": "Everyday body"
      "gloss": "jaw"
      "concept": "jaw"
      "source": {"kind": "coined"}
    - "form": "josaq"
      "class": "n"
      "field": "Everyday body"
      "gloss": "chin"
      "concept": "chin"
      "source": {"kind": "coined"}
    - "form": "khölim"
      "class": "n"
      "field": "Everyday body"
      "gloss": "cheek"
      "concept": "cheek"
      "source": {"kind": "coined"}
    - "form": "ghoyich"
      "class": "n"
      "field": "Everyday body"
      "gloss": "throat"
      "concept": "throat"
      "source": {"kind": "coined"}
    - "form": "chumoy"
      "class": "n"
      "field": "Everyday body"
      "gloss": "stomach"
      "concept": "stomach"
      "source": {"kind": "coined"}
    - "form": "churis"
      "class": "n"
      "field": "Everyday body"
      "gloss": "waist"
      "concept": "waist"
      "source": {"kind": "coined"}
    - "form": "chüsüküd"
      "class": "n"
      "field": "Everyday body"
      "gloss": "spine"
      "concept": "spine"
      "source": {"kind": "coined"}
    - "form": "khochot"
      "class": "n"
      "field": "Everyday body"
      "gloss": "buttock"
      "concept": "buttock"
      "source": {"kind": "coined"}
    - "form": "chözüy"
      "class": "n"
      "field": "Everyday body"
      "gloss": "wrist"
      "concept": "wrist"
      "source": {"kind": "coined"}
    - "form": "qozom"
      "class": "n"
      "field": "Everyday body"
      "gloss": "palm"
      "concept": "palm"
      "source": {"kind": "coined"}
    - "form": "zoghash"
      "class": "n"
      "field": "Everyday body"
      "gloss": "thumb"
      "concept": "thumb"
      "source": {"kind": "coined"}
    - "form": "ghosinikh"
      "class": "n"
      "field": "Everyday body"
      "gloss": "thigh"
      "concept": "thigh"
      "source": {"kind": "coined"}
    - "form": "jukhoyim"
      "class": "n"
      "field": "Everyday body"
      "gloss": "ankle"
      "concept": "ankle"
      "source": {"kind": "coined"}
    - "form": "jükhem"
      "class": "n"
      "field": "Everyday body"
      "gloss": "heel"
      "concept": "heel"
      "source": {"kind": "coined"}
    - "form": "zodod"
      "class": "n"
      "field": "Everyday body"
      "gloss": "sole"
      "concept": "sole"
      "source": {"kind": "coined"}
    - "form": "jachayoch"
      "class": "n"
      "field": "Everyday body"
      "gloss": "toenail"
      "concept": "toenail"
      "source": {"kind": "coined"}
    - "form": "joviy"
      "class": "n"
      "field": "Everyday body"
      "gloss": "muscle"
      "concept": "muscle"
      "source": {"kind": "coined"}
    - "form": "züzez"
      "class": "n"
      "field": "Everyday body"
      "gloss": "fat; bodily fatty tissue"
      "concept": "fat"
      "source": {"kind": "coined"}
    - "form": "qanoboz"
      "class": "n"
      "field": "Everyday body"
      "gloss": "sweat (noun)"
      "concept": "sweat"
      "source": {"kind": "coined"}
    - "form": "khoqokham"
      "class": "n"
      "field": "Everyday body"
      "gloss": "tears"
      "concept": "tears"
      "source": {"kind": "coined"}
    - "form": "jovaz"
      "class": "n"
      "field": "Everyday body"
      "gloss": "saliva"
      "concept": "saliva"
      "source": {"kind": "coined"}
    - "form": "khoghun"
      "class": "n"
      "field": "Everyday body"
      "gloss": "brain"
      "concept": "brain"
      "source": {"kind": "coined"}
    - "form": "khoghaq"
      "class": "n"
      "field": "Everyday body"
      "gloss": "lung"
      "concept": "lung"
      "source": {"kind": "coined"}
    - "form": "ghovur"
      "class": "n"
      "field": "Everyday body"
      "gloss": "liver"
      "concept": "liver"
      "source": {"kind": "coined"}
    - "form": "qoduz"
      "class": "n"
      "field": "Everyday body"
      "gloss": "kidney"
      "concept": "kidney"
      "source": {"kind": "coined"}
    - "form": "qoghuroz"
      "class": "n"
      "field": "Everyday body"
      "gloss": "intestine"
      "concept": "intestine"
      "source": {"kind": "coined"}
    - "form": "qodivon"
      "class": "n"
      "field": "Everyday body"
      "gloss": "genitals"
      "concept": "genitals"
      "source": {"kind": "coined"}
    - "form": "khetiz"
      "class": "n"
      "field": "Everyday body"
      "gloss": "womb"
      "concept": "womb"
      "source": {"kind": "coined"}
    - "form": "ghomachuch"
      "class": "n"
      "field": "Everyday body"
      "gloss": "penis"
      "concept": "penis"
      "source": {"kind": "coined"}
    - "form": "jaqinus"
      "class": "n"
      "field": "Everyday body"
      "gloss": "vagina"
      "concept": "vagina"
      "source": {"kind": "coined"}
    - "form": "zayas"
      "class": "n"
      "field": "Everyday body"
      "gloss": "testicle"
      "concept": "testicle"
      "source": {"kind": "coined"}
    - "form": "khochaq"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "food"
      "concept": "food"
      "source": {"kind": "coined"}
    - "form": "qazim"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "to eat"
      "concept": "eat"
      "source": {"kind": "coined"}
    - "form": "ghatusot"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "a drink"
      "concept": "drink-noun"
      "source": {"kind": "coined"}
    - "form": "ghunir"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "to drink"
      "concept": "drink-verb"
      "source": {"kind": "coined"}
    - "form": "ghobakh"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "air"
      "concept": "air"
      "source": {"kind": "coined"}
    - "form": "qunut"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "breath"
      "concept": "breath"
      "source": {"kind": "coined"}
    - "form": "jürüm"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "to breathe"
      "concept": "breathe"
      "source": {"kind": "coined"}
    - "form": "ghosaq"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "sleep"
      "concept": "sleep-noun"
      "source": {"kind": "coined"}
    - "form": "khogham"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "to sleep"
      "concept": "sleep-verb"
      "source": {"kind": "coined"}
    - "form": "chüchem"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "urine"
      "concept": "urine"
      "source": {"kind": "coined"}
    - "form": "jakhuch"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "to urinate"
      "concept": "urinate"
      "source": {"kind": "coined"}
    - "form": "chümövüs"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "dung"
      "concept": "dung"
      "source": {"kind": "coined"}
    - "form": "khezüch"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "to defecate"
      "concept": "defecate"
      "source": {"kind": "coined"}
    - "form": "khöyegöt"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "warmth"
      "concept": "warmth"
      "source": {"kind": "coined"}
    - "form": "zayam"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "shelter"
      "concept": "shelter"
      "source": {"kind": "coined"}
    - "form": "ghoyurit"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "hunger"
      "concept": "hunger"
      "source": {"kind": "coined"}
    - "form": "zoghil"
      "class": "adj"
      "field": "Everyday needs"
      "gloss": "hungry"
      "concept": "hungry"
      "source": {"kind": "coined"}
    - "form": "ghoyach"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "thirst"
      "concept": "thirst"
      "source": {"kind": "coined"}
    - "form": "zuqat"
      "class": "adj"
      "field": "Everyday needs"
      "gloss": "thirsty"
      "concept": "thirsty"
      "source": {"kind": "coined"}
    - "form": "chökhöchöy"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "inhale"
      "concept": "inhale"
      "source": {"kind": "coined"}
    - "form": "zotuch"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "exhale"
      "concept": "exhale"
      "source": {"kind": "coined"}
    - "form": "chöken"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "suffocate"
      "concept": "suffocate"
      "source": {"kind": "coined"}
    - "form": "ghabus"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "wake"
      "concept": "wake"
      "source": {"kind": "coined"}
    - "form": "khetön"
      "class": "adj"
      "field": "Everyday needs"
      "gloss": "awake"
      "concept": "awake"
      "source": {"kind": "coined"}
    - "form": "zukhizosh"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "a dream"
      "concept": "dream"
      "source": {"kind": "coined"}
    - "form": "chasolim"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "rest (noun)"
      "concept": "rest"
      "source": {"kind": "coined"}
    - "form": "ghaliz"
      "class": "adj"
      "field": "Everyday needs"
      "gloss": "tired"
      "concept": "tired"
      "source": {"kind": "coined"}
    - "form": "jorosan"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "to sweat"
      "concept": "sweat-verb"
      "source": {"kind": "coined"}
    - "form": "khachil"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "cold as a bodily condition or need"
      "concept": "cold-noun"
      "source": {"kind": "coined"}
    - "form": "jolutosh"
      "class": "adj"
      "field": "Everyday needs"
      "gloss": "hot"
      "concept": "hot"
      "source": {"kind": "coined"}
    - "form": "ghaqom"
      "class": "adj"
      "field": "Everyday needs"
      "gloss": "warm"
      "concept": "warm"
      "source": {"kind": "coined"}
    - "form": "khodat"
      "class": "adj"
      "field": "Everyday needs"
      "gloss": "cool"
      "concept": "cool"
      "source": {"kind": "coined"}
    - "form": "jeyil"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "freeze"
      "concept": "freeze"
      "source": {"kind": "coined"}
    - "form": "zozonun"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "burn"
      "concept": "burn"
      "source": {"kind": "coined"}
    - "form": "khaqich"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "safety"
      "concept": "safety"
      "source": {"kind": "coined"}
    - "form": "zöliz"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "danger"
      "concept": "danger"
      "source": {"kind": "coined"}
    - "form": "joquliy"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "protection"
      "concept": "protection"
      "source": {"kind": "coined"}
    - "form": "cheched"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "sex"
      "concept": "sex"
      "source": {"kind": "coined"}
    - "form": "qokhit"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "conceive"
      "concept": "conceive"
      "source": {"kind": "coined"}
    - "form": "qaduloch"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "pregnancy"
      "concept": "pregnancy"
      "source": {"kind": "coined"}
    - "form": "chomaz"
      "class": "adj"
      "field": "Everyday needs"
      "gloss": "pregnant"
      "concept": "pregnant"
      "source": {"kind": "coined"}
    - "form": "chögönöm"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "birth"
      "concept": "birth"
      "source": {"kind": "coined"}
    - "form": "zokham"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "give birth"
      "concept": "give-birth"
      "source": {"kind": "coined"}
    - "form": "zöchül"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "to nurse a child; to feed a child at the breast"
      "concept": "nurse"
      "source": {"kind": "coined"}
    - "form": "kheyey"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "grow"
      "concept": "grow"
      "source": {"kind": "coined"}
    - "form": "züles"
      "class": "v"
      "field": "Everyday needs"
      "gloss": "to age; to grow older"
      "concept": "age-verb"
      "source": {"kind": "coined"}
    - "form": "khaghuz"
      "class": "n"
      "field": "Everyday needs"
      "gloss": "death"
      "concept": "death"
      "source": {"kind": "coined"}
    - "form": "cheneren"
      "class": "adj"
      "field": "Everyday needs"
      "gloss": "dead"
      "concept": "dead"
      "source": {"kind": "coined"}
    - "form": "chüzirey"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "healthy; hale"
      "concept": "healthy"
      "source": {"kind": "coined"}
    - "form": "jalus"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "sick; ill"
      "concept": "sick"
      "source": {"kind": "coined"}
    - "form": "chübicher"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "injured; wounded"
      "concept": "injured"
      "source": {"kind": "coined"}
    - "form": "chutuz"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "Strong"
      "concept": "strong"
      "source": {"kind": "coined"}
    - "form": "qobivash"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "weak"
      "concept": "weak"
      "source": {"kind": "coined"}
    - "form": "zoror"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "exhausted"
      "concept": "exhausted"
      "source": {"kind": "coined"}
    - "form": "ghutir"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "sated; full after food or drink, rather than emotionally satisfied"
      "concept": "sated"
      "source": {"kind": "coined"}
    - "form": "khomiy"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "feverish"
      "concept": "feverish"
      "source": {"kind": "coined"}
    - "form": "zuziq"
      "class": "n"
      "field": "Everyday health"
      "gloss": "Pain"
      "concept": "pain"
      "source": {"kind": "coined"}
    - "form": "chuniq"
      "class": "v"
      "field": "Everyday health"
      "gloss": "to hurt; to cause pain or injury to someone"
      "concept": "hurt-verb"
      "source": {"kind": "coined"}
    - "form": "khükhüküy"
      "class": "v"
      "field": "Everyday health"
      "gloss": "ache"
      "concept": "ache"
      "source": {"kind": "coined"}
    - "form": "zemiküm"
      "class": "v"
      "field": "Everyday health"
      "gloss": "suffer"
      "concept": "suffer"
      "source": {"kind": "coined"}
    - "form": "qosay"
      "class": "v"
      "field": "Everyday health"
      "gloss": "Bleed"
      "concept": "bleed"
      "source": {"kind": "coined"}
    - "form": "chevös"
      "class": "v"
      "field": "Everyday health"
      "gloss": "heal"
      "concept": "heal"
      "source": {"kind": "coined"}
    - "form": "khükhich"
      "class": "v"
      "field": "Everyday health"
      "gloss": "recover"
      "concept": "recover"
      "source": {"kind": "coined"}
    - "form": "chunikh"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "Blind"
      "concept": "blind"
      "source": {"kind": "coined"}
    - "form": "khekhem"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "deaf"
      "concept": "deaf"
      "source": {"kind": "coined"}
    - "form": "jochirod"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "lame"
      "concept": "lame"
      "source": {"kind": "coined"}
    - "form": "chüvekhez"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "Alive"
      "concept": "alive"
      "source": {"kind": "coined"}
    - "form": "jümesh"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "conscious"
      "concept": "conscious"
      "source": {"kind": "coined"}
    - "form": "khoyash"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "unconscious"
      "concept": "unconscious"
      "source": {"kind": "coined"}
    - "form": "joghatar"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "Young"
      "concept": "young"
      "source": {"kind": "coined"}
    - "form": "jögish"
      "class": "adj"
      "field": "Everyday health"
      "gloss": "old in age (a living being)"
      "concept": "old"
      "source": {"kind": "coined"}
    - "form": "khötil"
      "class": "n"
      "field": "Everyday health"
      "gloss": "aging; the process of growing older"
      "concept": "aging"
      "source": {"kind": "coined"}
    - "form": "khökes"
      "class": "v"
      "field": "Everyday health"
      "gloss": "to hurt; to experience bodily pain"
      "concept": "hurt-pain"
      "source": {"kind": "coined"}
    - "form": "zülimiz"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "parent; a mother or father, without specifying which"
      "concept": "parent"
      "source": {"kind": "coined"}
    - "form": "jakhakh"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "brother"
      "concept": "brother"
      "source": {"kind": "coined"}
    - "form": "zetöküs"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "sister"
      "concept": "sister"
      "source": {"kind": "coined"}
    - "form": "ghotulud"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "grandmother"
      "concept": "grandmother"
      "source": {"kind": "coined"}
    - "form": "khodoy"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "grandfather"
      "concept": "grandfather"
      "source": {"kind": "coined"}
    - "form": "choghayud"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "grandchild"
      "concept": "grandchild"
      "source": {"kind": "coined"}
    - "form": "khobat"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "uncle"
      "concept": "uncle"
      "source": {"kind": "coined"}
    - "form": "khasad"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "aunt"
      "concept": "aunt"
      "source": {"kind": "coined"}
    - "form": "ghozuy"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "cousin; the child of a parent's sibling"
      "concept": "cousin"
      "source": {"kind": "coined"}
    - "form": "khobod"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "husband"
      "concept": "husband"
      "source": {"kind": "coined"}
    - "form": "chökhes"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "wife"
      "concept": "wife"
      "source": {"kind": "coined"}
    - "form": "jösör"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "ancestor"
      "concept": "ancestor"
      "source": {"kind": "coined"}
    - "form": "zükhel"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "descendant"
      "concept": "descendant"
      "source": {"kind": "coined"}
    - "form": "ghoquzush"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "orphan"
      "concept": "orphan"
      "source": {"kind": "coined"}
    - "form": "joqam"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "widow"
      "concept": "widow"
      "source": {"kind": "coined"}
    - "form": "ghamukh"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "grandparent; a parent's parent of either sex"
      "concept": "grandparent"
      "source": {"kind": "coined"}
    - "form": "zönöt"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "nephew; a sibling's son"
      "concept": "nephew"
      "source": {"kind": "coined"}
    - "form": "jökinüz"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "niece; a sibling's daughter"
      "concept": "niece"
      "source": {"kind": "coined"}
    - "form": "chovush"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "spouse"
      "concept": "spouse"
      "source": {"kind": "coined"}
    - "form": "chorozukh"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "marriage"
      "concept": "marriage"
      "source": {"kind": "coined"}
    - "form": "qulich"
      "class": "v"
      "field": "Everyday kinship"
      "gloss": "marry"
      "concept": "marry"
      "source": {"kind": "coined"}
    - "form": "ghadim"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "family"
      "concept": "family"
      "source": {"kind": "coined"}
    - "form": "jayom"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "lineage"
      "concept": "lineage"
      "source": {"kind": "coined"}
    - "form": "khüzey"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "widower"
      "concept": "widower"
      "source": {"kind": "coined"}
    - "form": "zanidiy"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "friend"
      "concept": "friend"
      "source": {"kind": "coined"}
    - "form": "kheyesh"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "enemy"
      "concept": "enemy"
      "source": {"kind": "coined"}
    - "form": "chaqush"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "stranger"
      "concept": "stranger"
      "source": {"kind": "coined"}
    - "form": "chayayod"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "neighbor"
      "concept": "neighbor"
      "source": {"kind": "coined"}
    - "form": "zötöy"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "companion"
      "concept": "companion"
      "source": {"kind": "coined"}
    - "form": "jodish"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "host"
      "concept": "host"
      "source": {"kind": "coined"}
    - "form": "chekün"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "leader"
      "concept": "leader"
      "source": {"kind": "coined"}
    - "form": "ghuchiz"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "follower"
      "concept": "follower"
      "source": {"kind": "coined"}
    - "form": "ghokhum"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "servant"
      "concept": "servant"
      "source": {"kind": "coined"}
    - "form": "züchöchüs"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "master"
      "concept": "master"
      "source": {"kind": "coined"}
    - "form": "khochador"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "teacher"
      "concept": "teacher"
      "source": {"kind": "coined"}
    - "form": "choniy"
      "class": "n"
      "field": "Everyday kinship"
      "gloss": "student"
      "concept": "student"
      "source": {"kind": "coined"}
    - "form": "qosokhokh"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a chair"
      "concept": "chair"
      "source": {"kind": "coined"}
    - "form": "qachiy"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a table"
      "concept": "table"
      "source": {"kind": "coined"}
    - "form": "quvit"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a bed"
      "concept": "bed"
      "source": {"kind": "coined"}
    - "form": "zaman"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a floor"
      "concept": "floor"
      "source": {"kind": "coined"}
    - "form": "qunon"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a wall"
      "concept": "wall"
      "source": {"kind": "coined"}
    - "form": "khacham"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a roof"
      "concept": "roof"
      "source": {"kind": "coined"}
    - "form": "jamom"
      "class": "n"
      "field": "Everyday things"
      "gloss": "an abode; a house; a home"
      "concept": "abode"
      "source": {"kind": "coined"}
    - "form": "chalul"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a door"
      "concept": "door"
      "source": {"kind": "coined"}
    - "form": "qadis"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a lock"
      "concept": "lock"
      "source": {"kind": "coined"}
    - "form": "chochuyiy"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a key"
      "concept": "key"
      "source": {"kind": "coined"}
    - "form": "zöbölir"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a window"
      "concept": "window"
      "source": {"kind": "coined"}
    - "form": "joduviq"
      "class": "n"
      "field": "Everyday things"
      "gloss": "shutters"
      "concept": "shutters"
      "source": {"kind": "coined"}
    - "form": "chachamod"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a cup"
      "concept": "cup"
      "source": {"kind": "coined"}
    - "form": "jonokh"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a bowl"
      "concept": "bowl"
      "source": {"kind": "coined"}
    - "form": "khümel"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a knife"
      "concept": "knife"
      "source": {"kind": "coined"}
    - "form": "jünid"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a spoon"
      "concept": "spoon"
      "source": {"kind": "coined"}
    - "form": "jayus"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a pot"
      "concept": "pot"
      "source": {"kind": "coined"}
    - "form": "zumat"
      "class": "n"
      "field": "Everyday things"
      "gloss": "clothes"
      "concept": "clothes"
      "source": {"kind": "coined"}
    - "form": "qokhoch"
      "class": "n"
      "field": "Everyday things"
      "gloss": "room"
      "concept": "room"
      "source": {"kind": "coined"}
    - "form": "zochiq"
      "class": "n"
      "field": "Everyday things"
      "gloss": "ceiling"
      "concept": "ceiling"
      "source": {"kind": "coined"}
    - "form": "zünüd"
      "class": "n"
      "field": "Everyday things"
      "gloss": "seat"
      "concept": "seat"
      "source": {"kind": "coined"}
    - "form": "jökhüt"
      "class": "n"
      "field": "Everyday things"
      "gloss": "bench"
      "concept": "bench"
      "source": {"kind": "coined"}
    - "form": "khuyakh"
      "class": "n"
      "field": "Everyday things"
      "gloss": "jar"
      "concept": "jar"
      "source": {"kind": "coined"}
    - "form": "khudan"
      "class": "n"
      "field": "Everyday things"
      "gloss": "bottle"
      "concept": "bottle"
      "source": {"kind": "coined"}
    - "form": "qotoz"
      "class": "n"
      "field": "Everyday things"
      "gloss": "basket"
      "concept": "basket"
      "source": {"kind": "coined"}
    - "form": "chuyus"
      "class": "n"
      "field": "Everyday things"
      "gloss": "bag"
      "concept": "bag"
      "source": {"kind": "coined"}
    - "form": "zügüniz"
      "class": "n"
      "field": "Everyday things"
      "gloss": "hammer"
      "concept": "hammer"
      "source": {"kind": "coined"}
    - "form": "khukhas"
      "class": "n"
      "field": "Everyday things"
      "gloss": "rope"
      "concept": "rope"
      "source": {"kind": "coined"}
    - "form": "qoqit"
      "class": "n"
      "field": "Everyday things"
      "gloss": "cord"
      "concept": "cord"
      "source": {"kind": "coined"}
    - "form": "züvün"
      "class": "n"
      "field": "Everyday things"
      "gloss": "needle"
      "concept": "needle"
      "source": {"kind": "coined"}
    - "form": "chütiy"
      "class": "n"
      "field": "Everyday things"
      "gloss": "flame"
      "concept": "flame"
      "source": {"kind": "coined"}
    - "form": "zuqaq"
      "class": "n"
      "field": "Everyday things"
      "gloss": "ash"
      "concept": "ash"
      "source": {"kind": "coined"}
    - "form": "zorach"
      "class": "n"
      "field": "Everyday things"
      "gloss": "coal"
      "concept": "coal"
      "source": {"kind": "coined"}
    - "form": "zovud"
      "class": "n"
      "field": "Everyday things"
      "gloss": "torch"
      "concept": "torch"
      "source": {"kind": "coined"}
    - "form": "khoyir"
      "class": "n"
      "field": "Everyday things"
      "gloss": "candle"
      "concept": "candle"
      "source": {"kind": "coined"}
    - "form": "khütes"
      "class": "n"
      "field": "Everyday things"
      "gloss": "garment"
      "concept": "garment"
      "source": {"kind": "coined"}
    - "form": "khurokhikh"
      "class": "n"
      "field": "Everyday things"
      "gloss": "shirt"
      "concept": "shirt"
      "source": {"kind": "coined"}
    - "form": "ghunachon"
      "class": "n"
      "field": "Everyday things"
      "gloss": "cloak"
      "concept": "cloak"
      "source": {"kind": "coined"}
    - "form": "jomuzor"
      "class": "n"
      "field": "Everyday things"
      "gloss": "belt"
      "concept": "belt"
      "source": {"kind": "coined"}
    - "form": "ghozudis"
      "class": "n"
      "field": "Everyday things"
      "gloss": "shoe"
      "concept": "shoe"
      "source": {"kind": "coined"}
    - "form": "quzis"
      "class": "n"
      "field": "Everyday things"
      "gloss": "boot"
      "concept": "boot"
      "source": {"kind": "coined"}
    - "form": "chalikh"
      "class": "n"
      "field": "Everyday things"
      "gloss": "gate"
      "concept": "gate"
      "source": {"kind": "coined"}
    - "form": "zoghuq"
      "class": "n"
      "field": "Everyday things"
      "gloss": "barrier"
      "concept": "barrier"
      "source": {"kind": "coined"}
    - "form": "jüküt"
      "class": "n"
      "field": "Everyday things"
      "gloss": "wood"
      "concept": "wood"
      "source": {"kind": "coined"}
    - "form": "züyüch"
      "class": "n"
      "field": "Everyday things"
      "gloss": "metal"
      "concept": "metal"
      "source": {"kind": "coined"}
    - "form": "zabakh"
      "class": "n"
      "field": "Everyday things"
      "gloss": "clay"
      "concept": "clay"
      "source": {"kind": "coined"}
    - "form": "quyuq"
      "class": "n"
      "field": "Everyday things"
      "gloss": "leather"
      "concept": "leather"
      "source": {"kind": "coined"}
    - "form": "zavadud"
      "class": "n"
      "field": "Everyday things"
      "gloss": "wool"
      "concept": "wool"
      "source": {"kind": "coined"}
    - "form": "ququt"
      "class": "n"
      "field": "Everyday things"
      "gloss": "thread"
      "concept": "thread"
      "source": {"kind": "coined"}
    - "form": "zotil"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "earth"
      "concept": "earth"
      "source": {"kind": "coined"}
    - "form": "jokhiq"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "soil"
      "concept": "soil"
      "source": {"kind": "coined"}
    - "form": "chözemey"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "sand"
      "concept": "sand"
      "source": {"kind": "coined"}
    - "form": "khödüt"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "mud"
      "concept": "mud"
      "source": {"kind": "coined"}
    - "form": "juvutul"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "land"
      "concept": "land"
      "source": {"kind": "coined"}
    - "form": "ghayiq"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "hill"
      "concept": "hill"
      "source": {"kind": "coined"}
    - "form": "khudad"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "valley"
      "concept": "valley"
      "source": {"kind": "coined"}
    - "form": "ghotovin"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "a plain; flat open land"
      "concept": "plain-landform"
      "source": {"kind": "coined"}
    - "form": "ghokhaq"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "field"
      "concept": "field"
      "source": {"kind": "coined"}
    - "form": "zosanur"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "cave"
      "concept": "cave"
      "source": {"kind": "coined"}
    - "form": "khaghokh"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "river"
      "concept": "river"
      "source": {"kind": "coined"}
    - "form": "chochadid"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "stream"
      "concept": "stream"
      "source": {"kind": "coined"}
    - "form": "qolon"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "sea"
      "concept": "sea"
      "source": {"kind": "coined"}
    - "form": "chüvön"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "ocean"
      "concept": "ocean"
      "source": {"kind": "coined"}
    - "form": "khübüsh"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "shore"
      "concept": "shore"
      "source": {"kind": "coined"}
    - "form": "khosovom"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "rain"
      "concept": "rain"
      "source": {"kind": "coined"}
    - "form": "ghayuruy"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "cloud"
      "concept": "cloud"
      "source": {"kind": "coined"}
    - "form": "qozaq"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "thunder"
      "concept": "thunder"
      "source": {"kind": "coined"}
    - "form": "khelid"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "lightning"
      "concept": "lightning"
      "source": {"kind": "coined"}
    - "form": "judiqiq"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "plant"
      "concept": "plant"
      "source": {"kind": "coined"}
    - "form": "khonoz"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "tree"
      "concept": "tree"
      "source": {"kind": "coined"}
    - "form": "qoniyor"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "leaf"
      "concept": "leaf"
      "source": {"kind": "coined"}
    - "form": "khosarom"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "root"
      "concept": "root"
      "source": {"kind": "coined"}
    - "form": "zaduch"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "branch"
      "concept": "branch"
      "source": {"kind": "coined"}
    - "form": "khasuy"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "flower"
      "concept": "flower"
      "source": {"kind": "coined"}
    - "form": "qokhot"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "fruit"
      "concept": "fruit"
      "source": {"kind": "coined"}
    - "form": "zumut"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "seed"
      "concept": "seed"
      "source": {"kind": "coined"}
    - "form": "zoghal"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "animal"
      "concept": "animal"
      "source": {"kind": "coined"}
    - "form": "chuyom"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "beast"
      "concept": "beast"
      "source": {"kind": "coined"}
    - "form": "ghochirun"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "bird"
      "concept": "bird"
      "source": {"kind": "coined"}
    - "form": "cheyen"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "insect"
      "concept": "insect"
      "source": {"kind": "coined"}
    - "form": "chokhuy"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "worm"
      "concept": "worm"
      "source": {"kind": "coined"}
    - "form": "jüchich"
      "class": "adj"
      "field": "Everyday nature"
      "gloss": "wet"
      "concept": "wet"
      "source": {"kind": "coined"}
    - "form": "jütin"
      "class": "adj"
      "field": "Everyday nature"
      "gloss": "dry"
      "concept": "dry"
      "source": {"kind": "coined"}
    - "form": "chochin"
      "class": "adj"
      "field": "Everyday nature"
      "gloss": "bright"
      "concept": "bright"
      "source": {"kind": "coined"}
    - "form": "zezökükh"
      "class": "adj"
      "field": "Everyday nature"
      "gloss": "dark"
      "concept": "dark"
      "source": {"kind": "coined"}
    - "form": "chenil"
      "class": "adj"
      "field": "Everyday nature"
      "gloss": "clear weather; without clouds"
      "concept": "clear-weather"
      "source": {"kind": "coined"}
    - "form": "khüsit"
      "class": "adj"
      "field": "Everyday nature"
      "gloss": "cloudy"
      "concept": "cloudy"
      "source": {"kind": "coined"}
    - "form": "zidun"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "one"
      "concept": "one"
      "source": {"kind": "coined"}
    - "form": "chovur"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "two"
      "concept": "two"
      "source": {"kind": "coined"}
    - "form": "qazin"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "three"
      "concept": "three"
      "source": {"kind": "coined"}
    - "form": "shokhun"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "four"
      "concept": "four"
      "source": {"kind": "coined"}
    - "form": "jumaq"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "five"
      "concept": "five"
      "source": {"kind": "coined"}
    - "form": "zolun"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "six"
      "concept": "six"
      "source": {"kind": "coined"}
    - "form": "qorad"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "seven"
      "concept": "seven"
      "source": {"kind": "coined"}
    - "form": "chuzan"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "eight"
      "concept": "eight"
      "source": {"kind": "coined"}
    - "form": "ghodil"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "nine"
      "concept": "nine"
      "source": {"kind": "coined"}
    - "form": "qozur"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "ten"
      "concept": "ten"
      "source": {"kind": "coined"}
    - "form": "qozur chovur"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "twenty; two tens, with the larger counting unit before its multiplier"
      "concept": "twenty"
      "source": {"kind": "coined"}
      "built": ["qozur", "chovur"]
    - "form": "jodun"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "a hundred"
      "concept": "hundred"
      "source": {"kind": "coined"}
    - "form": "gholun"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "a thousand"
      "concept": "thousand"
      "source": {"kind": "coined"}
    - "form": "jilar chovur"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "second; in ordinal position two"
      "concept": "second"
      "source": {"kind": "coined"}
      "built": ["jilar", "chovur"]
    - "form": "jilar qazin"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "third; in ordinal position three"
      "concept": "third"
      "source": {"kind": "coined"}
      "built": ["jilar", "qazin"]
    - "form": "chüsed"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "half"
      "concept": "half"
      "source": {"kind": "coined"}
    - "form": "juchaz"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "many"
      "concept": "many"
      "source": {"kind": "coined"}
    - "form": "chügös"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "few"
      "concept": "few"
      "source": {"kind": "coined"}
    - "form": "khenech"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "none; nothing"
      "concept": "none"
      "source": {"kind": "coined"}
    - "form": "zomutoch"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "zero"
      "concept": "zero"
      "source": {"kind": "coined"}
    - "form": "jilar shokhun"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "fourth; jilar followed by any stated number supplies its ordinal position beyond third"
      "concept": "ordinal-construction"
      "source": {"kind": "coined"}
      "built": ["jilar", "shokhun"]
    - "form": "qorid"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "quarter"
      "concept": "quarter"
      "source": {"kind": "coined"}
    - "form": "khobud"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "whole"
      "concept": "whole"
      "source": {"kind": "coined"}
    - "form": "jorun"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "all"
      "concept": "all"
      "source": {"kind": "coined"}
    - "form": "chotar"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "some"
      "concept": "some"
      "source": {"kind": "coined"}
    - "form": "chosoq"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "much"
      "concept": "much"
      "source": {"kind": "coined"}
    - "form": "khüvösiz"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "little"
      "concept": "little-quantity"
      "source": {"kind": "coined"}
    - "form": "khöred"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "enough"
      "concept": "enough"
      "source": {"kind": "coined"}
    - "form": "qazod"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "more"
      "concept": "more"
      "source": {"kind": "coined"}
    - "form": "jüzik"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "less"
      "concept": "less"
      "source": {"kind": "coined"}
    - "form": "qazom"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "most"
      "concept": "most"
      "source": {"kind": "coined"}
    - "form": "chülik"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "least"
      "concept": "least"
      "source": {"kind": "coined"}
    - "form": "jökherör"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "equal"
      "concept": "equal"
      "source": {"kind": "coined"}
    - "form": "zanim"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "each"
      "concept": "each"
      "source": {"kind": "coined"}
    - "form": "zokhir"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "every"
      "concept": "every"
      "source": {"kind": "coined"}
    - "form": "khonaq"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "both"
      "concept": "both"
      "source": {"kind": "coined"}
    - "form": "jüden"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "either"
      "concept": "either"
      "source": {"kind": "coined"}
    - "form": "qayid"
      "class": "num"
      "field": "Everyday numbers"
      "gloss": "neither"
      "concept": "neither"
      "source": {"kind": "coined"}
    - "form": "khochuz"
      "class": "adv"
      "field": "Everyday numbers"
      "gloss": "about; approximately the stated quantity"
      "concept": "about"
      "source": {"kind": "coined"}
    - "form": "jölön"
      "class": "adv"
      "field": "Everyday numbers"
      "gloss": "almost; close to but below the stated amount or completion"
      "concept": "almost"
      "source": {"kind": "coined"}
    - "form": "qosin"
      "class": "adv"
      "field": "Everyday numbers"
      "gloss": "exactly"
      "concept": "exactly"
      "source": {"kind": "coined"}
    - "form": "jodir"
      "class": "n"
      "field": "Everyday numbers"
      "gloss": "number"
      "concept": "number"
      "source": {"kind": "coined"}
    - "form": "qozin"
      "class": "n"
      "field": "Everyday numbers"
      "gloss": "amount"
      "concept": "amount"
      "source": {"kind": "coined"}
    - "form": "khükhöyöm"
      "class": "v"
      "field": "Everyday numbers"
      "gloss": "measure"
      "concept": "measure-verb"
      "source": {"kind": "coined"}
    - "form": "khamas"
      "class": "v"
      "field": "Everyday numbers"
      "gloss": "count"
      "concept": "count-verb"
      "source": {"kind": "coined"}
    - "form": "ghaniyush"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "green"
      "concept": "green"
      "source": {"kind": "coined"}
    - "form": "qomikh"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "yellow"
      "concept": "yellow"
      "source": {"kind": "coined"}
    - "form": "qayur"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "blue"
      "concept": "blue"
      "source": {"kind": "coined"}
    - "form": "chelölöl"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "grey"
      "concept": "grey"
      "source": {"kind": "coined"}
    - "form": "ghayush"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "brown"
      "concept": "brown"
      "source": {"kind": "coined"}
    - "form": "jubam"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "light in colour, distinct from light in weight"
      "concept": "light-colour"
      "source": {"kind": "coined"}
    - "form": "joruy"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "pale"
      "concept": "pale"
      "source": {"kind": "coined"}
    - "form": "julikhokh"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "clear in appearance"
      "concept": "clear-appearance"
      "source": {"kind": "coined"}
    - "form": "jurol"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "opaque"
      "concept": "opaque"
      "source": {"kind": "coined"}
    - "form": "khügid"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "transparent"
      "concept": "transparent"
      "source": {"kind": "coined"}
    - "form": "chekhösh"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "shiny"
      "concept": "shiny"
      "source": {"kind": "coined"}
    - "form": "juvuz"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "dull"
      "concept": "dull-appearance"
      "source": {"kind": "coined"}
    - "form": "khalal"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "plain; without a visible pattern"
      "concept": "plain-pattern"
      "source": {"kind": "coined"}
    - "form": "jodakh"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "spotted"
      "concept": "spotted"
      "source": {"kind": "coined"}
    - "form": "zözül"
      "class": "adj"
      "field": "Everyday colours"
      "gloss": "striped"
      "concept": "striped"
      "source": {"kind": "coined"}
    - "form": "jochun"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to be"
      "concept": "be"
      "source": {"kind": "coined"}
    - "form": "qonir"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to have"
      "concept": "have"
      "source": {"kind": "coined"}
    - "form": "qavun"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to go"
      "concept": "go"
      "source": {"kind": "coined"}
    - "form": "jodur"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to come"
      "concept": "come"
      "source": {"kind": "coined"}
    - "form": "zovad"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to give"
      "concept": "give"
      "source": {"kind": "coined"}
    - "form": "qotim"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to take"
      "concept": "take"
      "source": {"kind": "coined"}
    - "form": "qazodir"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to make"
      "concept": "make"
      "source": {"kind": "coined"}
    - "form": "chomur"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to do"
      "concept": "do"
      "source": {"kind": "coined"}
    - "form": "javal"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to say"
      "concept": "say"
      "source": {"kind": "coined"}
    - "form": "qojir"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to speak"
      "concept": "speak"
      "source": {"kind": "coined"}
    - "form": "kholiqin"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to know"
      "concept": "know"
      "source": {"kind": "coined"}
    - "form": "churul"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to think"
      "concept": "think"
      "source": {"kind": "coined"}
    - "form": "khüket"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to want"
      "concept": "want"
      "source": {"kind": "coined"}
    - "form": "khosulul"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to live"
      "concept": "live"
      "source": {"kind": "coined"}
    - "form": "zödösh"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to die"
      "concept": "die"
      "source": {"kind": "coined"}
    - "form": "zösit"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to walk"
      "concept": "walk"
      "source": {"kind": "coined"}
    - "form": "khötünür"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to run"
      "concept": "run"
      "source": {"kind": "coined"}
    - "form": "ghusid"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to sit"
      "concept": "sit"
      "source": {"kind": "coined"}
    - "form": "zovuz"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to stand"
      "concept": "stand"
      "source": {"kind": "coined"}
    - "form": "khekhül"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to lie down"
      "concept": "lie-down"
      "source": {"kind": "coined"}
    - "form": "jalud"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to hold"
      "concept": "hold"
      "source": {"kind": "coined"}
    - "form": "jeböd"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to bring"
      "concept": "bring"
      "source": {"kind": "coined"}
    - "form": "qodol"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to put"
      "concept": "put"
      "source": {"kind": "coined"}
    - "form": "jeyes"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to find"
      "concept": "find"
      "source": {"kind": "coined"}
    - "form": "khezön"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to lose"
      "concept": "lose"
      "source": {"kind": "coined"}
    - "form": "chokham"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to open"
      "concept": "open"
      "source": {"kind": "coined"}
    - "form": "ghoquq"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to close"
      "concept": "close"
      "source": {"kind": "coined"}
    - "form": "jümey"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to begin"
      "concept": "begin"
      "source": {"kind": "coined"}
    - "form": "züliyüz"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to end"
      "concept": "end"
      "source": {"kind": "coined"}
    - "form": "ghukhod"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to exist"
      "concept": "exist"
      "source": {"kind": "coined"}
    - "form": "khütich"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to belong"
      "concept": "belong"
      "source": {"kind": "coined"}
    - "form": "zuruch"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to become"
      "concept": "become"
      "source": {"kind": "coined"}
    - "form": "ghachomum"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to remain"
      "concept": "remain"
      "source": {"kind": "coined"}
    - "form": "khoqoz"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to leave"
      "concept": "leave"
      "source": {"kind": "coined"}
    - "form": "züyön"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to arrive"
      "concept": "arrive"
      "source": {"kind": "coined"}
    - "form": "jügül"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to crawl"
      "concept": "crawl"
      "source": {"kind": "coined"}
    - "form": "chuchor"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to climb"
      "concept": "climb"
      "source": {"kind": "coined"}
    - "form": "jüyiz"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to jump"
      "concept": "jump"
      "source": {"kind": "coined"}
    - "form": "khukhughaq"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to fall"
      "concept": "fall"
      "source": {"kind": "coined"}
    - "form": "khevel"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to rise"
      "concept": "rise"
      "source": {"kind": "coined"}
    - "form": "jekes"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to enter"
      "concept": "enter"
      "source": {"kind": "coined"}
    - "form": "qobin"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to exit"
      "concept": "exit"
      "source": {"kind": "coined"}
    - "form": "chaghoy"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to return"
      "concept": "return"
      "source": {"kind": "coined"}
    - "form": "chokhoq"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to follow"
      "concept": "follow"
      "source": {"kind": "coined"}
    - "form": "qolaz"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to lead"
      "concept": "lead"
      "source": {"kind": "coined"}
    - "form": "qomat"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to carry"
      "concept": "carry"
      "source": {"kind": "coined"}
    - "form": "khonid"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to move"
      "concept": "move"
      "source": {"kind": "coined"}
    - "form": "zesüvin"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to push"
      "concept": "push"
      "source": {"kind": "coined"}
    - "form": "zutokh"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to pull"
      "concept": "pull"
      "source": {"kind": "coined"}
    - "form": "qoloq"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to lift"
      "concept": "lift"
      "source": {"kind": "coined"}
    - "form": "chukhiyukh"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to drop"
      "concept": "drop"
      "source": {"kind": "coined"}
    - "form": "zozum"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to throw"
      "concept": "throw"
      "source": {"kind": "coined"}
    - "form": "jüvekh"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to catch"
      "concept": "catch"
      "source": {"kind": "coined"}
    - "form": "jotiz"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to build"
      "concept": "build"
      "source": {"kind": "coined"}
    - "form": "qaghibich"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to create"
      "concept": "create"
      "source": {"kind": "coined"}
    - "form": "züsüvöy"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to break"
      "concept": "break"
      "source": {"kind": "coined"}
    - "form": "chobuy"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to destroy"
      "concept": "destroy"
      "source": {"kind": "coined"}
    - "form": "gholaz"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to repair"
      "concept": "repair"
      "source": {"kind": "coined"}
    - "form": "qobul"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to change"
      "concept": "change-verb"
      "source": {"kind": "coined"}
    - "form": "jeleböl"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to tell"
      "concept": "tell"
      "source": {"kind": "coined"}
    - "form": "chezir"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to ask"
      "concept": "ask"
      "source": {"kind": "coined"}
    - "form": "chocholush"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to answer"
      "concept": "answer"
      "source": {"kind": "coined"}
    - "form": "ghutar"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to call"
      "concept": "call"
      "source": {"kind": "coined"}
    - "form": "chülöz"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to shout"
      "concept": "shout"
      "source": {"kind": "coined"}
    - "form": "ghaqol"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to whisper"
      "concept": "whisper"
      "source": {"kind": "coined"}
    - "form": "quqos"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to explain"
      "concept": "explain"
      "source": {"kind": "coined"}
    - "form": "khazil"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to name"
      "concept": "name-verb"
      "source": {"kind": "coined"}
    - "form": "jozachosh"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to believe"
      "concept": "believe"
      "source": {"kind": "coined"}
    - "form": "zömir"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to understand"
      "concept": "understand"
      "source": {"kind": "coined"}
    - "form": "zolor"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to remember"
      "concept": "remember"
      "source": {"kind": "coined"}
    - "form": "khüdüyiy"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to forget"
      "concept": "forget"
      "source": {"kind": "coined"}
    - "form": "khüben"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to learn"
      "concept": "learn"
      "source": {"kind": "coined"}
    - "form": "qoyum"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to teach"
      "concept": "teach"
      "source": {"kind": "coined"}
    - "form": "chuchir"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to decide"
      "concept": "decide"
      "source": {"kind": "coined"}
    - "form": "khunoq"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to imagine"
      "concept": "imagine"
      "source": {"kind": "coined"}
    - "form": "chochivuq"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to need"
      "concept": "need-verb"
      "source": {"kind": "coined"}
    - "form": "zelükh"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to wish"
      "concept": "wish-verb"
      "source": {"kind": "coined"}
    - "form": "ghabozun"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to hope"
      "concept": "hope-verb"
      "source": {"kind": "coined"}
    - "form": "cheyitin"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to intend"
      "concept": "intend"
      "source": {"kind": "coined"}
    - "form": "jenöd"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to choose"
      "concept": "choose"
      "source": {"kind": "coined"}
    - "form": "züsesh"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to prefer"
      "concept": "prefer"
      "source": {"kind": "coined"}
    - "form": "khuqay"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to try"
      "concept": "try"
      "source": {"kind": "coined"}
    - "form": "chedüy"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to search"
      "concept": "search"
      "source": {"kind": "coined"}
    - "form": "zütin"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to meet"
      "concept": "meet"
      "source": {"kind": "coined"}
    - "form": "qorim"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to help"
      "concept": "help"
      "source": {"kind": "coined"}
    - "form": "ghadash"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to share"
      "concept": "share"
      "source": {"kind": "coined"}
    - "form": "zotan"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to trade"
      "concept": "trade"
      "source": {"kind": "coined"}
    - "form": "cholis"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to buy"
      "concept": "buy"
      "source": {"kind": "coined"}
    - "form": "zubiz"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to sell"
      "concept": "sell"
      "source": {"kind": "coined"}
    - "form": "zodum"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to promise"
      "concept": "promise-verb"
      "source": {"kind": "coined"}
    - "form": "chochisosh"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to thank"
      "concept": "thank-verb"
      "source": {"kind": "coined"}
    - "form": "chosich"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to forgive"
      "concept": "forgive-verb"
      "source": {"kind": "coined"}
    - "form": "chüremüm"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to refuse"
      "concept": "refuse-verb"
      "source": {"kind": "coined"}
    - "form": "khulol"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to agree"
      "concept": "agree-verb"
      "source": {"kind": "coined"}
    - "form": "khözin"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to fight"
      "concept": "fight"
      "source": {"kind": "coined"}
    - "form": "qaghay"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to hit"
      "concept": "hit"
      "source": {"kind": "coined"}
    - "form": "qanaq"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to kill"
      "concept": "kill"
      "source": {"kind": "coined"}
    - "form": "khuchar"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to defend"
      "concept": "defend"
      "source": {"kind": "coined"}
    - "form": "quzosh"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to attack"
      "concept": "attack"
      "source": {"kind": "coined"}
    - "form": "chüyöch"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to flee"
      "concept": "flee"
      "source": {"kind": "coined"}
    - "form": "qayis"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to threaten"
      "concept": "threaten"
      "source": {"kind": "coined"}
    - "form": "qazur"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to stop"
      "concept": "stop"
      "source": {"kind": "coined"}
    - "form": "khusoy"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to continue"
      "concept": "continue"
      "source": {"kind": "coined"}
    - "form": "khuzir"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to wait"
      "concept": "wait"
      "source": {"kind": "coined"}
    - "form": "jarin"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to happen"
      "concept": "happen"
      "source": {"kind": "coined"}
    - "form": "chümikül"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to kneel"
      "concept": "kneel"
      "source": {"kind": "coined"}
    - "form": "qotiq"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to bend"
      "concept": "bend"
      "source": {"kind": "coined"}
    - "form": "jomighum"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to lean"
      "concept": "lean"
      "source": {"kind": "coined"}
    - "form": "jaloq"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to cover"
      "concept": "cover-verb"
      "source": {"kind": "coined"}
    - "form": "chönez"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to uncover"
      "concept": "uncover"
      "source": {"kind": "coined"}
    - "form": "chokhash"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to hide"
      "concept": "hide"
      "source": {"kind": "coined"}
    - "form": "joghil"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to reveal"
      "concept": "reveal"
      "source": {"kind": "coined"}
    - "form": "chulokh"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to lock"
      "concept": "lock-verb"
      "source": {"kind": "coined"}
    - "form": "jucholom"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to unlock"
      "concept": "unlock"
      "source": {"kind": "coined"}
    - "form": "chikin"
      "class": "adv"
      "field": "Everyday space"
      "gloss": "Here"
      "concept": "here"
      "source": {"kind": "coined"}
    - "form": "qoduyuz"
      "class": "adv"
      "field": "Everyday space"
      "gloss": "there"
      "concept": "there"
      "source": {"kind": "coined"}
    - "form": "khoyiz"
      "class": "adv"
      "field": "Everyday space"
      "gloss": "somewhere; at an unspecified place"
      "concept": "somewhere"
      "source": {"kind": "coined"}
    - "form": "qozachoz"
      "class": "adv"
      "field": "Everyday space"
      "gloss": "nowhere"
      "concept": "nowhere"
      "source": {"kind": "coined"}
    - "form": "juzoq"
      "class": "adv"
      "field": "Everyday space"
      "gloss": "everywhere"
      "concept": "everywhere"
      "source": {"kind": "coined"}
    - "form": "chömey"
      "class": "part"
      "field": "Everyday space"
      "gloss": "Near"
      "concept": "near"
      "source": {"kind": "coined"}
    - "form": "khemish"
      "class": "part"
      "field": "Everyday space"
      "gloss": "far"
      "concept": "far"
      "source": {"kind": "coined"}
    - "form": "khechid"
      "class": "part"
      "field": "Everyday space"
      "gloss": "beside"
      "concept": "beside"
      "source": {"kind": "coined"}
    - "form": "choyad"
      "class": "part"
      "field": "Everyday space"
      "gloss": "between"
      "concept": "between"
      "source": {"kind": "coined"}
    - "form": "khovuq"
      "class": "part"
      "field": "Everyday space"
      "gloss": "among"
      "concept": "among"
      "source": {"kind": "coined"}
    - "form": "qaqobaq"
      "class": "part"
      "field": "Everyday space"
      "gloss": "Above"
      "concept": "above"
      "source": {"kind": "coined"}
    - "form": "zönekh"
      "class": "part"
      "field": "Everyday space"
      "gloss": "below"
      "concept": "below"
      "source": {"kind": "coined"}
    - "form": "qozabum"
      "class": "part"
      "field": "Everyday space"
      "gloss": "under"
      "concept": "under"
      "source": {"kind": "coined"}
    - "form": "khanalod"
      "class": "part"
      "field": "Everyday space"
      "gloss": "over"
      "concept": "over"
      "source": {"kind": "coined"}
    - "form": "züdes"
      "class": "part"
      "field": "Everyday space"
      "gloss": "Inside"
      "concept": "inside"
      "source": {"kind": "coined"}
    - "form": "zomim"
      "class": "part"
      "field": "Everyday space"
      "gloss": "outside"
      "concept": "outside"
      "source": {"kind": "coined"}
    - "form": "jusakhiz"
      "class": "part"
      "field": "Everyday space"
      "gloss": "beyond"
      "concept": "beyond"
      "source": {"kind": "coined"}
    - "form": "khuqikhash"
      "class": "part"
      "field": "Everyday space"
      "gloss": "before; in front of (spatial)"
      "concept": "before-spatial"
      "source": {"kind": "coined"}
    - "form": "chovom"
      "class": "part"
      "field": "Everyday space"
      "gloss": "behind"
      "concept": "behind"
      "source": {"kind": "coined"}
    - "form": "züziyüt"
      "class": "n"
      "field": "Everyday space"
      "gloss": "left (direction)"
      "concept": "left-direction"
      "source": {"kind": "coined"}
    - "form": "ghochich"
      "class": "n"
      "field": "Everyday space"
      "gloss": "right (direction)"
      "concept": "right-direction"
      "source": {"kind": "coined"}
    - "form": "zotidikh"
      "class": "n"
      "field": "Everyday space"
      "gloss": "center"
      "concept": "center"
      "source": {"kind": "coined"}
    - "form": "zubosh"
      "class": "adv"
      "field": "Everyday space"
      "gloss": "Up"
      "concept": "up"
      "source": {"kind": "coined"}
    - "form": "jaziy"
      "class": "adv"
      "field": "Everyday space"
      "gloss": "down"
      "concept": "down"
      "source": {"kind": "coined"}
    - "form": "qozan"
      "class": "adv"
      "field": "Everyday space"
      "gloss": "forward"
      "concept": "forward"
      "source": {"kind": "coined"}
    - "form": "jochat"
      "class": "adv"
      "field": "Everyday space"
      "gloss": "backward"
      "concept": "backward"
      "source": {"kind": "coined"}
    - "form": "züchir"
      "class": "part"
      "field": "Everyday space"
      "gloss": "Toward"
      "concept": "toward"
      "source": {"kind": "coined"}
    - "form": "qorun"
      "class": "adv"
      "field": "Everyday space"
      "gloss": "away"
      "concept": "away"
      "source": {"kind": "coined"}
    - "form": "zughish"
      "class": "part"
      "field": "Everyday space"
      "gloss": "through"
      "concept": "through"
      "source": {"kind": "coined"}
    - "form": "qughun"
      "class": "part"
      "field": "Everyday space"
      "gloss": "across"
      "concept": "across"
      "source": {"kind": "coined"}
    - "form": "jörüsikh"
      "class": "part"
      "field": "Everyday space"
      "gloss": "around"
      "concept": "around"
      "source": {"kind": "coined"}
    - "form": "jömik"
      "class": "part"
      "field": "Everyday space"
      "gloss": "In"
      "concept": "in"
      "source": {"kind": "coined"}
    - "form": "khödir"
      "class": "part"
      "field": "Everyday space"
      "gloss": "on"
      "concept": "on"
      "source": {"kind": "coined"}
    - "form": "zökir"
      "class": "part"
      "field": "Everyday space"
      "gloss": "at"
      "concept": "at"
      "source": {"kind": "coined"}
    - "form": "ghozun"
      "class": "part"
      "field": "Everyday space"
      "gloss": "from"
      "concept": "from"
      "source": {"kind": "coined"}
    - "form": "qotur"
      "class": "part"
      "field": "Everyday space"
      "gloss": "to"
      "concept": "to"
      "source": {"kind": "coined"}
    - "form": "chadash"
      "class": "n"
      "field": "Everyday space"
      "gloss": "a place; a location"
      "concept": "place-noun"
      "source": {"kind": "coined"}
    - "form": "qazukh"
      "class": "n"
      "field": "Everyday space"
      "gloss": "position"
      "concept": "position"
      "source": {"kind": "coined"}
    - "form": "ghovikhaz"
      "class": "n"
      "field": "Everyday space"
      "gloss": "direction"
      "concept": "direction"
      "source": {"kind": "coined"}
    - "form": "zotosh"
      "class": "n"
      "field": "Everyday space"
      "gloss": "distance"
      "concept": "distance"
      "source": {"kind": "coined"}
    - "form": "chükhechön"
      "class": "n"
      "field": "Everyday time"
      "gloss": "time"
      "concept": "time"
      "source": {"kind": "coined"}
    - "form": "zozoz"
      "class": "n"
      "field": "Everyday time"
      "gloss": "moment"
      "concept": "moment"
      "source": {"kind": "coined"}
    - "form": "ghunoq"
      "class": "n"
      "field": "Everyday time"
      "gloss": "morning"
      "concept": "morning"
      "source": {"kind": "coined"}
    - "form": "julash"
      "class": "n"
      "field": "Everyday time"
      "gloss": "noon"
      "concept": "noon"
      "source": {"kind": "coined"}
    - "form": "zaqid"
      "class": "n"
      "field": "Everyday time"
      "gloss": "evening"
      "concept": "evening"
      "source": {"kind": "coined"}
    - "form": "khachis"
      "class": "n"
      "field": "Everyday time"
      "gloss": "midnight"
      "concept": "midnight"
      "source": {"kind": "coined"}
    - "form": "zusar"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "now"
      "concept": "now"
      "source": {"kind": "coined"}
    - "form": "jalivas"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "then"
      "concept": "then"
      "source": {"kind": "coined"}
    - "form": "khorud"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "today"
      "concept": "today"
      "source": {"kind": "coined"}
    - "form": "zorut"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "yesterday"
      "concept": "yesterday"
      "source": {"kind": "coined"}
    - "form": "chunaron"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "tomorrow"
      "concept": "tomorrow"
      "source": {"kind": "coined"}
    - "form": "ghoghinoz"
      "class": "n"
      "field": "Everyday time"
      "gloss": "past"
      "concept": "past"
      "source": {"kind": "coined"}
    - "form": "jügökh"
      "class": "n"
      "field": "Everyday time"
      "gloss": "present"
      "concept": "present"
      "source": {"kind": "coined"}
    - "form": "ghomich"
      "class": "n"
      "field": "Everyday time"
      "gloss": "future"
      "concept": "future"
      "source": {"kind": "coined"}
    - "form": "jorukhoz"
      "class": "part"
      "field": "Everyday time"
      "gloss": "before (temporal)"
      "concept": "before-time"
      "source": {"kind": "coined"}
    - "form": "zömem"
      "class": "part"
      "field": "Everyday time"
      "gloss": "after"
      "concept": "after"
      "source": {"kind": "coined"}
    - "form": "ghuyuz"
      "class": "part"
      "field": "Everyday time"
      "gloss": "during"
      "concept": "during"
      "source": {"kind": "coined"}
    - "form": "ghanim"
      "class": "conj"
      "field": "Everyday time"
      "gloss": "while"
      "concept": "while"
      "source": {"kind": "coined"}
    - "form": "ghunolil"
      "class": "part"
      "field": "Everyday time"
      "gloss": "until"
      "concept": "until"
      "source": {"kind": "coined"}
    - "form": "züyedüy"
      "class": "part"
      "field": "Everyday time"
      "gloss": "since a time"
      "concept": "since-time"
      "source": {"kind": "coined"}
    - "form": "ghochikh"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "always"
      "concept": "always"
      "source": {"kind": "coined"}
    - "form": "chokhoqon"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "often"
      "concept": "often"
      "source": {"kind": "coined"}
    - "form": "jügör"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "sometimes"
      "concept": "sometimes"
      "source": {"kind": "coined"}
    - "form": "chüris"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "rarely"
      "concept": "rarely"
      "source": {"kind": "coined"}
    - "form": "züyüy"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "never"
      "concept": "never"
      "source": {"kind": "coined"}
    - "form": "zukhaloq"
      "class": "adj"
      "field": "Everyday time"
      "gloss": "long-lasting; continuing through a large span of time"
      "concept": "long-duration"
      "source": {"kind": "coined"}
    - "form": "ghubaq"
      "class": "adj"
      "field": "Everyday time"
      "gloss": "short in duration; lasting a small span of time"
      "concept": "short-duration"
      "source": {"kind": "coined"}
    - "form": "chatiq"
      "class": "adj"
      "field": "Everyday time"
      "gloss": "brief in duration; soon over"
      "concept": "brief-duration"
      "source": {"kind": "coined"}
    - "form": "zabat"
      "class": "adj"
      "field": "Everyday time"
      "gloss": "lasting; continuing for a sustained period"
      "concept": "lasting-duration"
      "source": {"kind": "coined"}
    - "form": "zömin"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "again"
      "concept": ["again", "expression-again"]
      "source": {"kind": "coined"}
    - "form": "zudukh"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "once"
      "concept": "once"
      "source": {"kind": "coined"}
    - "form": "juyatud"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "twice"
      "concept": "twice"
      "source": {"kind": "coined"}
    - "form": "qudizul"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "repeatedly"
      "concept": "repeatedly"
      "source": {"kind": "coined"}
    - "form": "khosamud"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "already"
      "concept": "already"
      "source": {"kind": "coined"}
    - "form": "khokhoy"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "still; the named action or condition continues"
      "concept": "still"
      "source": {"kind": "coined"}
    - "form": "qusish"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "yet; by the reference time, chiefly with a negative to say the action has not happened"
      "concept": "yet"
      "source": {"kind": "coined"}
    - "form": "ghovosh"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "soon"
      "concept": "soon"
      "source": {"kind": "coined"}
    - "form": "qasosh"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "later"
      "concept": "later"
      "source": {"kind": "coined"}
    - "form": "qomol"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "early"
      "concept": "early"
      "source": {"kind": "coined"}
    - "form": "khuchirar"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "late"
      "concept": "late"
      "source": {"kind": "coined"}
    - "form": "zeyüd"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "first; before the other named events in a sequence"
      "concept": "first-sequence"
      "source": {"kind": "coined"}
    - "form": "zadaq"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "next"
      "concept": "next"
      "source": {"kind": "coined"}
    - "form": "qoqam"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "last"
      "concept": "last"
      "source": {"kind": "coined"}
    - "form": "chumach"
      "class": "adv"
      "field": "Everyday time"
      "gloss": "finally"
      "concept": "finally"
      "source": {"kind": "coined"}
    - "form": "zazim"
      "class": "n"
      "field": "Everyday time"
      "gloss": "season"
      "concept": "season"
      "source": {"kind": "coined"}
    - "form": "zaqin"
      "class": "n"
      "field": "Everyday time"
      "gloss": "year"
      "concept": "year"
      "source": {"kind": "coined"}
    - "form": "qozokh"
      "class": "n"
      "field": "Everyday time"
      "gloss": "month"
      "concept": "month"
      "source": {"kind": "coined"}
    - "form": "juqom"
      "class": "n"
      "field": "Everyday time"
      "gloss": "dawn"
      "concept": "dawn"
      "source": {"kind": "coined"}
    - "form": "zilir"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "I; me (the speaker)"
      "concept": "i"
      "source": {"kind": "coined"}
    - "form": "zilir jiven"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "my; mine; of the speaker"
      "concept": "my"
      "source": {"kind": "coined"}
      "built": ["zilir", "jiven"]
    - "form": "khilin"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "you (person addressed; number as the language permits)"
      "concept": "you-reference"
      "source": {"kind": "coined"}
    - "form": "khilin jiven"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "your; yours; of the person addressed"
      "concept": "your"
      "source": {"kind": "coined"}
      "built": ["khilin", "jiven"]
    - "form": "qadir"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "He"
      "concept": "he"
      "source": {"kind": "coined"}
    - "form": "qadul"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "she"
      "concept": "she"
      "source": {"kind": "coined"}
    - "form": "qadiz"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "it"
      "concept": "it"
      "source": {"kind": "coined"}
    - "form": "qaduch"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "they"
      "concept": "they"
      "source": {"kind": "coined"}
    - "form": "zilich"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "we; us (the speaker and others)"
      "concept": "we"
      "source": {"kind": "coined"}
    - "form": "zilich jiven"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "our; ours; of the speaker and companions"
      "concept": "our"
      "source": {"kind": "coined"}
      "built": ["zilich", "jiven"]
    - "form": "khizin"
      "class": "dem"
      "field": "Everyday reference"
      "gloss": "This"
      "concept": "this"
      "source": {"kind": "coined"}
    - "form": "qazun"
      "class": "dem"
      "field": "Everyday reference"
      "gloss": "that"
      "concept": "that"
      "source": {"kind": "coined"}
    - "form": "khizich"
      "class": "dem"
      "field": "Everyday reference"
      "gloss": "these"
      "concept": "these"
      "source": {"kind": "coined"}
    - "form": "qazuch"
      "class": "dem"
      "field": "Everyday reference"
      "gloss": "those"
      "concept": "those"
      "source": {"kind": "coined"}
    - "form": "jusoz"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "Someone"
      "concept": "someone"
      "source": {"kind": "coined"}
    - "form": "zughach"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "anyone; any person within the relevant scope, including questions and negatives"
      "concept": "anyone"
      "source": {"kind": "coined"}
    - "form": "zudum"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "everyone"
      "concept": "everyone"
      "source": {"kind": "coined"}
    - "form": "zudom"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "no one"
      "concept": "no-one"
      "source": {"kind": "coined"}
    - "form": "zötel"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "Something"
      "concept": "something"
      "source": {"kind": "coined"}
    - "form": "khoyuy"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "anything"
      "concept": "anything"
      "source": {"kind": "coined"}
    - "form": "jüchekh"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "everything"
      "concept": "everything"
      "source": {"kind": "coined"}
    - "form": "qonoq"
      "class": "pron"
      "field": "Everyday reference"
      "gloss": "self; oneself (reflexive reference)"
      "concept": "self"
      "source": {"kind": "coined"}
    - "form": "zulod"
      "class": "adj"
      "field": "Everyday reference"
      "gloss": "other"
      "concept": "other"
      "source": {"kind": "coined"}
    - "form": "zechökh"
      "class": "adj"
      "field": "Everyday reference"
      "gloss": "another"
      "concept": "another"
      "source": {"kind": "coined"}
    - "form": "chüyözükh"
      "class": "adj"
      "field": "Everyday reference"
      "gloss": "Same"
      "concept": "same"
      "source": {"kind": "coined"}
    - "form": "khübir"
      "class": "adj"
      "field": "Everyday reference"
      "gloss": "different"
      "concept": "different"
      "source": {"kind": "coined"}
    - "form": "jimiz"
      "class": "pron"
      "field": "Everyday questions"
      "gloss": "Who (question)"
      "concept": "question-who"
      "source": {"kind": "coined"}
    - "form": "chivil"
      "class": "pron"
      "field": "Everyday questions"
      "gloss": "What (question)"
      "concept": ["question-what", "expression-what"]
      "source": {"kind": "coined"}
    - "form": "zikir"
      "class": "part"
      "field": "Everyday questions"
      "gloss": "Which (question)"
      "concept": "question-which"
      "source": {"kind": "coined"}
    - "form": "qovar"
      "class": "pron"
      "field": "Everyday questions"
      "gloss": "Where (question)"
      "concept": "question-where"
      "source": {"kind": "coined"}
    - "form": "zömik"
      "class": "pron"
      "field": "Everyday questions"
      "gloss": "When (question)"
      "concept": "question-when"
      "source": {"kind": "coined"}
    - "form": "qavud"
      "class": "pron"
      "field": "Everyday questions"
      "gloss": "Why (question)"
      "concept": "question-why"
      "source": {"kind": "coined"}
    - "form": "chirim"
      "class": "part"
      "field": "Everyday questions"
      "gloss": "How (question)"
      "concept": "question-how"
      "source": {"kind": "coined"}
    - "form": "jodir chivil"
      "class": "part"
      "field": "Everyday questions"
      "gloss": "how many; what count, after the thing counted"
      "concept": "question-how-many"
      "source": {"kind": "coined"}
      "built": ["jodir", "chivil"]
    - "form": "qozin chivil"
      "class": "part"
      "field": "Everyday questions"
      "gloss": "how much; what amount, after the substance measured"
      "concept": "question-how-much"
      "source": {"kind": "coined"}
      "built": ["qozin", "chivil"]
    - "form": "jimiz jiven"
      "class": "pron"
      "field": "Everyday questions"
      "gloss": "whose; of whom, after the possessed head"
      "concept": "question-whose"
      "source": {"kind": "coined"}
      "built": ["jimiz", "jiven"]
    - "form": "jimiz qotur"
      "class": "pron"
      "field": "Everyday questions"
      "gloss": "to whom; a questioned recipient or destination"
      "concept": "question-to-whom"
      "source": {"kind": "coined"}
      "built": ["jimiz", "qotur"]
    - "form": "qovar ghozun"
      "class": "pron"
      "field": "Everyday questions"
      "gloss": "from where; a questioned source"
      "concept": "question-from-where"
      "source": {"kind": "coined"}
      "built": ["qovar", "ghozun"]
    - "form": "chivil zodin"
      "class": "part"
      "field": "Everyday questions"
      "gloss": "for what purpose; for what intended end"
      "concept": "question-for-what-purpose"
      "source": {"kind": "coined"}
      "built": ["chivil", "zodin"]
    - "form": "chidir"
      "class": "part"
      "field": "Everyday questions"
      "gloss": "forming yes/no questions (question)"
      "concept": "question-polar"
      "source": {"kind": "coined"}
    - "form": "khilin chivil javal"
      "class": "call"
      "field": "Everyday questions"
      "gloss": "what do you say; a request to repeat or clarify the words just spoken"
      "concept": "question-clarification"
      "source": {"kind": "coined"}
      "built": ["khilin", "chivil", "javal"]
    - "form": "zoqur"
      "class": "call"
      "field": "Everyday truth"
      "gloss": "Yes"
      "concept": "yes"
      "source": {"kind": "coined"}
    - "form": "chövik"
      "class": "call"
      "field": "Everyday truth"
      "gloss": "no"
      "concept": "no"
      "source": {"kind": "coined"}
    - "form": "zevik"
      "class": "part"
      "field": "Everyday truth"
      "gloss": "Not"
      "concept": "not"
      "source": {"kind": "coined"}
    - "form": "qusil"
      "class": "adj"
      "field": "Everyday truth"
      "gloss": "True"
      "concept": "true"
      "source": {"kind": "coined"}
    - "form": "qovim"
      "class": "adj"
      "field": "Everyday truth"
      "gloss": "false"
      "concept": "false"
      "source": {"kind": "coined"}
    - "form": "jobach"
      "class": "n"
      "field": "Everyday truth"
      "gloss": "Truth"
      "concept": "truth"
      "source": {"kind": "coined"}
    - "form": "chücherich"
      "class": "n"
      "field": "Everyday truth"
      "gloss": "a lie; an intentionally deceptive statement"
      "concept": "lie-noun"
      "source": {"kind": "coined"}
    - "form": "qusil jochun"
      "class": "call"
      "field": "Everyday truth"
      "gloss": "it is true; affirms the sincerity or reality of the preceding claim"
      "concept": "sincerity"
      "source": {"kind": "coined"}
      "built": ["qusil", "jochun"]
    - "form": "judos"
      "class": "call"
      "field": "Everyday truth"
      "gloss": "Indeed"
      "concept": "indeed"
      "source": {"kind": "coined"}
    - "form": "zöker"
      "class": "adv"
      "field": "Everyday truth"
      "gloss": "certainly"
      "concept": "certainly"
      "source": {"kind": "coined"}
    - "form": "chuzir"
      "class": "adv"
      "field": "Everyday truth"
      "gloss": "perhaps; possibly; places uncertainty over the entire following proposition"
      "concept": ["perhaps", "might-possibility"]
      "source": {"kind": "coined"}
    - "form": "ghosor"
      "class": "adv"
      "field": "Everyday truth"
      "gloss": "Probably"
      "concept": "probably"
      "source": {"kind": "coined"}
    - "form": "khöchüzech"
      "class": "adv"
      "field": "Everyday truth"
      "gloss": "unlikely"
      "concept": "unlikely"
      "source": {"kind": "coined"}
    - "form": "jözish"
      "class": "adj"
      "field": "Everyday truth"
      "gloss": "certain; fully sure of a claim, which can still be mistaken"
      "concept": "certain"
      "source": {"kind": "coined"}
    - "form": "zaghin"
      "class": "adj"
      "field": "Everyday truth"
      "gloss": "uncertain"
      "concept": "uncertain"
      "source": {"kind": "coined"}
    - "form": "jusoyim"
      "class": "adv"
      "field": "Everyday truth"
      "gloss": "Apparently"
      "concept": "apparently"
      "source": {"kind": "coined"}
    - "form": "jölikh"
      "class": "adv"
      "field": "Everyday truth"
      "gloss": "supposedly"
      "concept": "supposedly"
      "source": {"kind": "coined"}
    - "form": "zayus"
      "class": "adv"
      "field": "Everyday truth"
      "gloss": "Actually"
      "concept": "in-fact"
      "source": {"kind": "coined"}
    - "form": "ghodiqoq"
      "class": "v"
      "field": "Everyday truth"
      "gloss": "doubt"
      "concept": "doubt-verb"
      "source": {"kind": "coined"}
    - "form": "khakhot"
      "class": "v"
      "field": "Everyday truth"
      "gloss": "suspect"
      "concept": "suspect"
      "source": {"kind": "coined"}
    - "form": "qotas"
      "class": "v"
      "field": "Everyday truth"
      "gloss": "guess"
      "concept": "guess-verb"
      "source": {"kind": "coined"}
    - "form": "khürös"
      "class": "v"
      "field": "Everyday truth"
      "gloss": "assume"
      "concept": "assume-verb"
      "source": {"kind": "coined"}
    - "form": "quchich"
      "class": "adj"
      "field": "Everyday truth"
      "gloss": "Correct"
      "concept": "correct"
      "source": {"kind": "coined"}
    - "form": "jügülech"
      "class": "adj"
      "field": "Everyday truth"
      "gloss": "incorrect"
      "concept": "incorrect"
      "source": {"kind": "coined"}
    - "form": "jübüz"
      "class": "v"
      "field": "Everyday truth"
      "gloss": "disagree"
      "concept": "disagree"
      "source": {"kind": "coined"}
    - "form": "qamod"
      "class": "n"
      "field": "Everyday truth"
      "gloss": "a false claim, whether intentionally deceptive or mistaken"
      "concept": "falsehood"
      "source": {"kind": "coined"}
    - "form": "jiviz"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "And"
      "concept": "and"
      "source": {"kind": "coined"}
    - "form": "zovul"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "or"
      "concept": "or"
      "source": {"kind": "coined"}
    - "form": "khazur"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "but"
      "concept": "but"
      "source": {"kind": "coined"}
    - "form": "jiviz zevik"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "nor; and not, continuing a preceding negative statement"
      "concept": "nor"
      "source": {"kind": "coined"}
      "built": ["jiviz", "zevik"]
    - "form": "qavar"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "Because"
      "concept": "because"
      "source": {"kind": "coined"}
    - "form": "zayoch"
      "class": "adv"
      "field": "Everyday logic"
      "gloss": "therefore"
      "concept": "therefore"
      "source": {"kind": "coined"}
    - "form": "jivun"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "If"
      "concept": "if"
      "source": {"kind": "coined"}
    - "form": "qazul"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "then, in a condition and its consequence"
      "concept": "then-conditional"
      "source": {"kind": "coined"}
    - "form": "jivun zevik"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "unless; if the following complete proposition is not the case"
      "concept": "unless"
      "source": {"kind": "coined"}
      "built": ["jivun", "zevik"]
    - "form": "jivun zevik khizin qazul"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "otherwise; if the preceding proposition is not so, then"
      "concept": "otherwise"
      "source": {"kind": "coined"}
      "built": ["jivun", "zevik", "khizin", "qazul"]
    - "form": "jüvüt"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "Although"
      "concept": "although"
      "source": {"kind": "coined"}
    - "form": "khukhukhosh"
      "class": "adv"
      "field": "Everyday logic"
      "gloss": "however"
      "concept": "however"
      "source": {"kind": "coined"}
    - "form": "qumiy"
      "class": "adv"
      "field": "Everyday logic"
      "gloss": "nevertheless"
      "concept": "nevertheless"
      "source": {"kind": "coined"}
    - "form": "choghivir"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "despite"
      "concept": "despite"
      "source": {"kind": "coined"}
    - "form": "ghutur"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "instead"
      "concept": "instead"
      "source": {"kind": "coined"}
    - "form": "zodin"
      "class": "part"
      "field": "Everyday logic"
      "gloss": "for; in order to; so that (purpose)"
      "concept": "for-purpose"
      "source": {"kind": "coined"}
    - "form": "chübish"
      "class": "part"
      "field": "Everyday logic"
      "gloss": "Like"
      "concept": "like"
      "source": {"kind": "coined"}
    - "form": "zevik chübish"
      "class": "part"
      "field": "Everyday logic"
      "gloss": "unlike; not like the following comparison"
      "concept": "unlike"
      "source": {"kind": "coined"}
      "built": ["zevik", "chübish"]
    - "form": "züser"
      "class": "part"
      "field": "Everyday logic"
      "gloss": "as"
      "concept": "as"
      "source": {"kind": "coined"}
    - "form": "ghozir"
      "class": "part"
      "field": "Everyday logic"
      "gloss": "than"
      "concept": "than"
      "source": {"kind": "coined"}
    - "form": "ghaghachus"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "Either"
      "concept": "either-alternative"
      "source": {"kind": "coined"}
    - "form": "ghudush"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "neither"
      "concept": "neither-alternative"
      "source": {"kind": "coined"}
    - "form": "khozisil"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "both"
      "concept": "both-conjunction"
      "source": {"kind": "coined"}
    - "form": "chidir jodur zovul zevik jodur"
      "class": "conj"
      "field": "Everyday logic"
      "gloss": "whether coming or not coming; an embedded alternative question with the same subject; the actual action replaces jodur"
      "concept": "whether"
      "source": {"kind": "coined"}
      "built": ["chidir", "jodur", "zovul", "zevik", "jodur"]
    - "form": "qunukh"
      "class": "adv"
      "field": "Everyday logic"
      "gloss": "That is"
      "concept": "that-is"
      "source": {"kind": "coined"}
    - "form": "khochutas"
      "class": "adv"
      "field": "Everyday logic"
      "gloss": "namely"
      "concept": "namely"
      "source": {"kind": "coined"}
    - "form": "ghoyur"
      "class": "adv"
      "field": "Everyday logic"
      "gloss": "for example"
      "concept": "for-example"
      "source": {"kind": "coined"}
    - "form": "jüzövey"
      "class": "part"
      "field": "Everyday logic"
      "gloss": "Except"
      "concept": "except"
      "source": {"kind": "coined"}
    - "form": "ghuchon"
      "class": "adv"
      "field": "Everyday logic"
      "gloss": "only"
      "concept": "only"
      "source": {"kind": "coined"}
    - "form": "zusoz"
      "class": "adv"
      "field": "Everyday logic"
      "gloss": "even"
      "concept": "even"
      "source": {"kind": "coined"}
    - "form": "qovighit"
      "class": "adv"
      "field": "Everyday logic"
      "gloss": "also"
      "concept": "also"
      "source": {"kind": "coined"}
    - "form": "ghorish"
      "class": "adv"
      "field": "Everyday logic"
      "gloss": "especially"
      "concept": "especially"
      "source": {"kind": "coined"}
    - "form": "chekil"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "small"
      "concept": "small"
      "source": {"kind": "coined"}
    - "form": "zotuchit"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "tiny"
      "concept": "tiny"
      "source": {"kind": "coined"}
    - "form": "jenis"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "huge"
      "concept": "huge"
      "source": {"kind": "coined"}
    - "form": "ghuzoch"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "long in spatial length"
      "concept": "long"
      "source": {"kind": "coined"}
    - "form": "zoyuch"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "short in spatial length"
      "concept": "short"
      "source": {"kind": "coined"}
    - "form": "zügöt"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "high"
      "concept": "high"
      "source": {"kind": "coined"}
    - "form": "chonotoz"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "low"
      "concept": "low"
      "source": {"kind": "coined"}
    - "form": "jözezüd"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "tall"
      "concept": "tall"
      "source": {"kind": "coined"}
    - "form": "kheriles"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "wide"
      "concept": "wide"
      "source": {"kind": "coined"}
    - "form": "zoton"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "narrow"
      "concept": "narrow"
      "source": {"kind": "coined"}
    - "form": "zorubid"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "heavy"
      "concept": "heavy"
      "source": {"kind": "coined"}
    - "form": "khüber"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "light in weight"
      "concept": "light-weight"
      "source": {"kind": "coined"}
    - "form": "jotum"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "new"
      "concept": "new"
      "source": {"kind": "coined"}
    - "form": "chomoy"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "old; not new"
      "concept": "old-object"
      "source": {"kind": "coined"}
    - "form": "qolun"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "fast"
      "concept": "fast"
      "source": {"kind": "coined"}
    - "form": "zölin"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "slow"
      "concept": "slow"
      "source": {"kind": "coined"}
    - "form": "zodivan"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "easy"
      "concept": "easy"
      "source": {"kind": "coined"}
    - "form": "jochan"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "difficult"
      "concept": "difficult"
      "source": {"kind": "coined"}
    - "form": "jilod"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "good"
      "concept": "good"
      "source": {"kind": "coined"}
    - "form": "ghomur"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "bad"
      "concept": "bad"
      "source": {"kind": "coined"}
    - "form": "jilod qazod"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "better; good to a greater degree than the stated comparison"
      "concept": "better"
      "source": {"kind": "coined"}
      "built": ["jilod", "qazod"]
    - "form": "ghomur qazod"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "worse; bad to a greater degree than the stated comparison"
      "concept": "worse"
      "source": {"kind": "coined"}
      "built": ["ghomur", "qazod"]
    - "form": "jilod qazom"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "best; good to the greatest degree within the stated comparison set"
      "concept": "best"
      "source": {"kind": "coined"}
      "built": ["jilod", "qazom"]
    - "form": "ghomur qazom"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "worst; bad to the greatest degree within the stated comparison set"
      "concept": "worst"
      "source": {"kind": "coined"}
      "built": ["ghomur", "qazom"]
    - "form": "jükhiy"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "important"
      "concept": "important"
      "source": {"kind": "coined"}
    - "form": "qozum"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "trivial"
      "concept": "trivial"
      "source": {"kind": "coined"}
    - "form": "khünükh"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "necessary"
      "concept": "necessary"
      "source": {"kind": "coined"}
    - "form": "khömüy"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "valuable"
      "concept": "valuable"
      "source": {"kind": "coined"}
    - "form": "züdey"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "worthless"
      "concept": "worthless"
      "source": {"kind": "coined"}
    - "form": "khükheney"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "useful"
      "concept": "useful"
      "source": {"kind": "coined"}
    - "form": "züben"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "useless"
      "concept": "useless"
      "source": {"kind": "coined"}
    - "form": "ghalosh"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "broken"
      "concept": "broken"
      "source": {"kind": "coined"}
    - "form": "züyid"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "complete"
      "concept": "complete"
      "source": {"kind": "coined"}
    - "form": "zuvut"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "incomplete"
      "concept": "incomplete"
      "source": {"kind": "coined"}
    - "form": "zetel"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "honest"
      "concept": "honest"
      "source": {"kind": "coined"}
    - "form": "khoquq"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "dishonest"
      "concept": "dishonest"
      "source": {"kind": "coined"}
    - "form": "qomoch"
      "class": "adv"
      "field": "Everyday qualities"
      "gloss": "very"
      "concept": "very"
      "source": {"kind": "coined"}
    - "form": "chukhiziz"
      "class": "adv"
      "field": "Everyday qualities"
      "gloss": "extremely"
      "concept": "extremely"
      "source": {"kind": "coined"}
    - "form": "zutin"
      "class": "adv"
      "field": "Everyday qualities"
      "gloss": "somewhat"
      "concept": "somewhat"
      "source": {"kind": "coined"}
    - "form": "ghokhikhor"
      "class": "adv"
      "field": "Everyday qualities"
      "gloss": "slightly"
      "concept": "slightly"
      "source": {"kind": "coined"}
    - "form": "zötöl"
      "class": "adv"
      "field": "Everyday qualities"
      "gloss": "barely; only just meeting the stated degree"
      "concept": "barely"
      "source": {"kind": "coined"}
    - "form": "qasul"
      "class": "adv"
      "field": "Everyday qualities"
      "gloss": "too much"
      "concept": "too-much"
      "source": {"kind": "coined"}
    - "form": "jöyez"
      "class": "adv"
      "field": "Everyday qualities"
      "gloss": "too little"
      "concept": "too-little"
      "source": {"kind": "coined"}
    - "form": "quvam"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "similar"
      "concept": "similar"
      "source": {"kind": "coined"}
    - "form": "chudul"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "opposite"
      "concept": "opposite"
      "source": {"kind": "coined"}
    - "form": "qomul"
      "class": "v"
      "field": "Everyday modality"
      "gloss": "can; be able to perform the preceding action, without granting permission"
      "concept": "can"
      "source": {"kind": "coined"}
    - "form": "zevik qomul"
      "class": "v"
      "field": "Everyday modality"
      "gloss": "cannot; lack the ability to perform the preceding action"
      "concept": "cannot"
      "source": {"kind": "coined"}
      "built": ["zevik", "qomul"]
    - "form": "jüven"
      "class": "adj"
      "field": "Everyday modality"
      "gloss": "possible; an event can occur, without granting anyone permission"
      "concept": "possible"
      "source": {"kind": "coined"}
    - "form": "zevik jüven"
      "class": "adj"
      "field": "Everyday modality"
      "gloss": "impossible; not possible, without denying permission alone"
      "concept": "impossible"
      "source": {"kind": "coined"}
      "built": ["zevik", "jüven"]
    - "form": "jökir"
      "class": "v"
      "field": "Everyday modality"
      "gloss": "may; have permission to perform the preceding act, without asserting ability"
      "concept": "may-permission"
      "source": {"kind": "coined"}
    - "form": "zödir"
      "class": "v"
      "field": "Everyday modality"
      "gloss": "must; be obliged to perform the preceding action"
      "concept": "must"
      "source": {"kind": "coined"}
    - "form": "zevik qavun zödir"
      "class": "v"
      "field": "Everyday modality"
      "gloss": "must not go; negation before the action, followed by zödir, obliges refraining from it; replace qavun with the actual action"
      "concept": "must-not"
      "source": {"kind": "coined"}
      "built": ["zevik", "qavun", "zödir"]
    - "form": "jökhen"
      "class": "v"
      "field": "Everyday modality"
      "gloss": "ought; be well advised to perform the preceding action, without imposing an obligation"
      "concept": "ought"
      "source": {"kind": "coined"}
    - "form": "jachun"
      "class": "adj"
      "field": "Everyday modality"
      "gloss": "Required"
      "concept": "required"
      "source": {"kind": "coined"}
    - "form": "zarakh"
      "class": "adj"
      "field": "Everyday modality"
      "gloss": "optional"
      "concept": "optional"
      "source": {"kind": "coined"}
    - "form": "khödüzel"
      "class": "adj"
      "field": "Everyday modality"
      "gloss": "Allowed"
      "concept": "allowed"
      "source": {"kind": "coined"}
    - "form": "zughuqat"
      "class": "v"
      "field": "Everyday modality"
      "gloss": "Permit"
      "concept": "permit"
      "source": {"kind": "coined"}
    - "form": "chobom"
      "class": "v"
      "field": "Everyday modality"
      "gloss": "prohibit"
      "concept": "prohibit"
      "source": {"kind": "coined"}
    - "form": "jedey"
      "class": "adj"
      "field": "Everyday modality"
      "gloss": "free to act; not restrained in the relevant action"
      "concept": "free"
      "source": {"kind": "coined"}
    - "form": "zunadim"
      "class": "adj"
      "field": "Everyday modality"
      "gloss": "constrained in action; not free to act"
      "concept": "constrained"
      "source": {"kind": "coined"}
    - "form": "khükhech"
      "class": "adj"
      "field": "Everyday modality"
      "gloss": "Willing"
      "concept": "willing"
      "source": {"kind": "coined"}
    - "form": "qolor"
      "class": "adj"
      "field": "Everyday modality"
      "gloss": "unwilling"
      "concept": "unwilling"
      "source": {"kind": "coined"}
    - "form": "khüneyis"
      "class": "adj"
      "field": "Everyday modality"
      "gloss": "Intended"
      "concept": "intended"
      "source": {"kind": "coined"}
    - "form": "khükit"
      "class": "adj"
      "field": "Everyday modality"
      "gloss": "accidental"
      "concept": "accidental"
      "source": {"kind": "coined"}
    - "form": "züvid"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "Hello"
      "concept": "hello"
      "source": {"kind": "coined"}
    - "form": "khilin khaqich qonir"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "go safely; a parting wish that the addressee has safety"
      "concept": "goodbye"
      "source": {"kind": "coined"}
      "built": ["khilin", "khaqich", "qonir"]
    - "form": "khilin semok jochun"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "welcome; you are a guest here, under the speaker's hospitality"
      "concept": "expression-welcome"
      "source": {"kind": "coined"}
      "built": ["khilin", "semok", "jochun"]
    - "form": "zölik"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "Please"
      "concept": "expression-please"
      "source": {"kind": "coined"}
    - "form": "zilir qakhuch qonir"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "thank you; I have gratitude for your act"
      "concept": "expression-thank-you"
      "source": {"kind": "coined"}
      "built": ["zilir", "qakhuch", "qonir"]
    - "form": "beyuk zevik jibun"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "a gift, not a debt; releases any expectation of repayment for the benefit"
      "concept": "expression-youre-welcome"
      "source": {"kind": "coined"}
      "built": ["beyuk", "zevik", "jibun"]
    - "form": "zölik khilin zilir zughuqat"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "excuse me; please allow me the passage or intrusion under discussion"
      "concept": "expression-excuse-me"
      "source": {"kind": "coined"}
      "built": ["zölik", "khilin", "zilir", "zughuqat"]
    - "form": "zilir zünes qonir"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "I am sorry; I feel regret for what happened or for my part in it"
      "concept": "expression-sorry"
      "source": {"kind": "coined"}
      "built": ["zilir", "zünes", "qonir"]
    - "form": "khilin zilir chosich"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "forgive me; asks the addressee to release blame against the speaker"
      "concept": "expression-forgive-me"
      "source": {"kind": "coined"}
      "built": ["khilin", "zilir", "chosich"]
    - "form": "zöker zoqur"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "of course; certainly yes"
      "concept": "of-course"
      "source": {"kind": "coined"}
      "built": ["zöker", "zoqur"]
    - "form": "khilin zekhir"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "listen; the ordinary request naming the addressee and listening"
      "concept": "expression-listen"
      "source": {"kind": "coined"}
      "built": ["khilin", "zekhir"]
    - "form": "khilin chödir"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "look; the ordinary request naming the addressee and looking"
      "concept": "expression-look"
      "source": {"kind": "coined"}
      "built": ["khilin", "chödir"]
    - "form": "khilin khuzir"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "wait; a direct request"
      "concept": "expression-wait"
      "source": {"kind": "coined"}
      "built": ["khilin", "khuzir"]
    - "form": "khilin chikin jodur"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "come here; a request to approach the speaker"
      "concept": "expression-come-here"
      "source": {"kind": "coined"}
      "built": ["khilin", "chikin", "jodur"]
    - "form": "khilin qorun qavun"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "go away; a request to leave the reference place"
      "concept": "expression-go-away"
      "source": {"kind": "coined"}
      "built": ["khilin", "qorun", "qavun"]
    - "form": "khilin zilir qorim"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "help me; an urgent request for assistance"
      "concept": "expression-help"
      "source": {"kind": "coined"}
      "built": ["khilin", "zilir", "qorim"]
    - "form": "khilin qazur"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "stop; a request to cease the act under discussion"
      "concept": "expression-stop"
      "source": {"kind": "coined"}
      "built": ["khilin", "qazur"]
    - "form": "zölik khilin zömin javal"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "please say it again; a request to repeat unheard speech"
      "concept": "expression-pardon"
      "source": {"kind": "coined"}
      "built": ["zölik", "khilin", "zömin", "javal"]
    - "form": "zilir zömir"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "I understand"
      "concept": "expression-i-understand"
      "source": {"kind": "coined"}
      "built": ["zilir", "zömir"]
    - "form": "zilir zevik zömir"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "I do not understand"
      "concept": "expression-i-do-not-understand"
      "source": {"kind": "coined"}
      "built": ["zilir", "zevik", "zömir"]
    - "form": "khilin chivil qaviz"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "what do you mean; asks the meaning intended by the addressee"
      "concept": "expression-what-do-you-mean"
      "source": {"kind": "coined"}
      "built": ["khilin", "chivil", "qaviz"]
    - "form": "khilin khizin chirim javal"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "how do you say this; khizin names the expression to be rendered"
      "concept": "expression-how-do-you-say"
      "source": {"kind": "coined"}
      "built": ["khilin", "khizin", "chirim", "javal"]
    - "form": "jilin khizin jiven chivil jochun"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "what is this called; what is the name of this"
      "concept": "expression-what-is-this-called"
      "source": {"kind": "coined"}
      "built": ["jilin", "khizin", "jiven", "chivil", "jochun"]
    - "form": "chidir qusil"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "really; a surprised request to confirm the preceding claim"
      "concept": "expression-really"
      "source": {"kind": "coined"}
      "built": ["chidir", "qusil"]
    - "form": "chövik zusoz khüvösiz"
      "class": "call"
      "field": "Everyday conversation"
      "gloss": "not at all; not even a little, an emphatic conversational denial"
      "concept": "expression-not-at-all"
      "source": {"kind": "coined"}
      "built": ["chövik", "zusoz", "khüvösiz"]
    - "form": "jobuyan"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Person"
      "concept": "person"
      "source": {"kind": "coined"}
    - "form": "khalash"
      "class": "n"
      "field": "Everyday society"
      "gloss": "human"
      "concept": "human"
      "source": {"kind": "coined"}
    - "form": "qovikh"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Man"
      "concept": "man"
      "source": {"kind": "coined"}
    - "form": "khügibil"
      "class": "n"
      "field": "Everyday society"
      "gloss": "woman"
      "concept": "woman"
      "source": {"kind": "coined"}
    - "form": "chutakh"
      "class": "n"
      "field": "Everyday society"
      "gloss": "boy"
      "concept": "boy"
      "source": {"kind": "coined"}
    - "form": "zonazin"
      "class": "n"
      "field": "Everyday society"
      "gloss": "girl"
      "concept": "girl"
      "source": {"kind": "coined"}
    - "form": "khoqat"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Adult"
      "concept": "adult"
      "source": {"kind": "coined"}
    - "form": "jönür"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Individual"
      "concept": "individual"
      "source": {"kind": "coined"}
    - "form": "qorukh"
      "class": "n"
      "field": "Everyday society"
      "gloss": "group"
      "concept": "group"
      "source": {"kind": "coined"}
    - "form": "judimokh"
      "class": "n"
      "field": "Everyday society"
      "gloss": "crowd"
      "concept": "crowd"
      "source": {"kind": "coined"}
    - "form": "zöchön"
      "class": "n"
      "field": "Everyday society"
      "gloss": "community"
      "concept": "community"
      "source": {"kind": "coined"}
    - "form": "chabuzom"
      "class": "n"
      "field": "Everyday society"
      "gloss": "ruler"
      "concept": "ruler"
      "source": {"kind": "coined"}
    - "form": "chesöböm"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Worker"
      "concept": "worker"
      "source": {"kind": "coined"}
    - "form": "charuz"
      "class": "n"
      "field": "Everyday society"
      "gloss": "artisan"
      "concept": "artisan"
      "source": {"kind": "coined"}
    - "form": "jaghash"
      "class": "n"
      "field": "Everyday society"
      "gloss": "merchant"
      "concept": "merchant"
      "source": {"kind": "coined"}
    - "form": "jilin"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Name"
      "concept": "name-noun"
      "source": {"kind": "coined"}
    - "form": "zözedit"
      "class": "n"
      "field": "Everyday society"
      "gloss": "title"
      "concept": "title"
      "source": {"kind": "coined"}
    - "form": "zoqiz"
      "class": "n"
      "field": "Everyday society"
      "gloss": "rank"
      "concept": "rank"
      "source": {"kind": "coined"}
    - "form": "zachoq"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Custom"
      "concept": "custom"
      "source": {"kind": "coined"}
    - "form": "chuchish"
      "class": "n"
      "field": "Everyday society"
      "gloss": "tradition"
      "concept": "tradition"
      "source": {"kind": "coined"}
    - "form": "jelür"
      "class": "n"
      "field": "Everyday society"
      "gloss": "law"
      "concept": "law"
      "source": {"kind": "coined"}
    - "form": "chöbüd"
      "class": "n"
      "field": "Everyday society"
      "gloss": "rule"
      "concept": "rule"
      "source": {"kind": "coined"}
    - "form": "zögör"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Order"
      "concept": "order-noun"
      "source": {"kind": "coined"}
    - "form": "zomus"
      "class": "n"
      "field": "Everyday society"
      "gloss": "command"
      "concept": "command-noun"
      "source": {"kind": "coined"}
    - "form": "jükher"
      "class": "n"
      "field": "Everyday society"
      "gloss": "obedience"
      "concept": "obedience"
      "source": {"kind": "coined"}
    - "form": "zutaz"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Justice"
      "concept": "justice"
      "source": {"kind": "coined"}
    - "form": "kherikhökh"
      "class": "n"
      "field": "Everyday society"
      "gloss": "injustice"
      "concept": "injustice"
      "source": {"kind": "coined"}
    - "form": "zübügim"
      "class": "adj"
      "field": "Everyday society"
      "gloss": "right; morally acceptable rather than a spatial direction"
      "concept": "right-ethical"
      "source": {"kind": "coined"}
    - "form": "jelüt"
      "class": "adj"
      "field": "Everyday society"
      "gloss": "wrong; morally unacceptable rather than merely factually incorrect"
      "concept": "wrong-ethical"
      "source": {"kind": "coined"}
    - "form": "ghazam"
      "class": "n"
      "field": "Everyday society"
      "gloss": "war"
      "concept": "war"
      "source": {"kind": "coined"}
    - "form": "zozol"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Freedom"
      "concept": "freedom"
      "source": {"kind": "coined"}
    - "form": "qanalan"
      "class": "n"
      "field": "Everyday society"
      "gloss": "captivity"
      "concept": "captivity"
      "source": {"kind": "coined"}
    - "form": "jövitir"
      "class": "n"
      "field": "Everyday society"
      "gloss": "exchange"
      "concept": "exchange-noun"
      "source": {"kind": "coined"}
    - "form": "jonat"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Wealth"
      "concept": "wealth"
      "source": {"kind": "coined"}
    - "form": "ghuvozuy"
      "class": "n"
      "field": "Everyday society"
      "gloss": "poverty"
      "concept": "poverty"
      "source": {"kind": "coined"}
    - "form": "qoyoy"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Property"
      "concept": "property"
      "source": {"kind": "coined"}
    - "form": "khemüm"
      "class": "n"
      "field": "Everyday society"
      "gloss": "ownership"
      "concept": "ownership"
      "source": {"kind": "coined"}
    - "form": "ghonum"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Honor"
      "concept": "honor"
      "source": {"kind": "coined"}
    - "form": "choqut"
      "class": "n"
      "field": "Everyday society"
      "gloss": "Secret"
      "concept": "secret"
      "source": {"kind": "coined"}
    - "form": "zadut"
      "class": "n"
      "field": "Everyday society"
      "gloss": "knowledge"
      "concept": "knowledge"
      "source": {"kind": "coined"}
    - "form": "ghozuch"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "Thing"
      "concept": "thing"
      "source": {"kind": "coined"}
    - "form": "chobid"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "being"
      "concept": "being"
      "source": {"kind": "coined"}
    - "form": "jomod"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "Life"
      "concept": "life"
      "source": {"kind": "coined"}
    - "form": "jonin"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "origin"
      "concept": "origin"
      "source": {"kind": "coined"}
    - "form": "zughitach"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "beginning"
      "concept": "beginning"
      "source": {"kind": "coined"}
    - "form": "joyut"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "End"
      "concept": "end-noun"
      "source": {"kind": "coined"}
    - "form": "zoghid"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "completion"
      "concept": "completion"
      "source": {"kind": "coined"}
    - "form": "khözey"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "Change"
      "concept": "change-noun"
      "source": {"kind": "coined"}
    - "form": "zabom"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "transformation"
      "concept": "transformation"
      "source": {"kind": "coined"}
    - "form": "choboch"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "Part"
      "concept": "part"
      "source": {"kind": "coined"}
    - "form": "qoruz"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "Cause"
      "concept": "cause"
      "source": {"kind": "coined"}
    - "form": "kholid"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "effect"
      "concept": "effect"
      "source": {"kind": "coined"}
    - "form": "zunoq"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "Reason"
      "concept": "reason"
      "source": {"kind": "coined"}
    - "form": "khünör"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "purpose"
      "concept": "purpose"
      "source": {"kind": "coined"}
    - "form": "jeböch"
      "class": "n"
      "field": "Everyday existence"
      "gloss": "Kind"
      "concept": "kind"
      "source": {"kind": "coined"}
    - "form": "qoyulil"
      "class": "adj"
      "field": "Everyday existence"
      "gloss": "Real"
      "concept": "real"
      "source": {"kind": "coined"}
    - "form": "zaqikh"
      "class": "adj"
      "field": "Everyday existence"
      "gloss": "unreal"
      "concept": "unreal"
      "source": {"kind": "coined"}
    - "form": "khobaghoy"
      "class": "adj"
      "field": "Everyday existence"
      "gloss": "Natural"
      "concept": "natural"
      "source": {"kind": "coined"}
    - "form": "khodavuz"
      "class": "adj"
      "field": "Everyday existence"
      "gloss": "unnatural"
      "concept": "unnatural"
      "source": {"kind": "coined"}
    - "form": "joghur"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "a dune"
      "source": {"kind": "coined"}
    - "form": "qozol"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a canal; a channel cut to conduct water"
      "source": {"kind": "coined"}
    - "form": "jözel"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a stair; a stairway or flight of steps"
      "source": {"kind": "coined"}
    - "form": "zövek"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a brick; a shaped masonry block"
      "source": {"kind": "coined"}
    - "form": "qotash"
      "class": "n"
      "field": "Everyday things"
      "gloss": "oil"
      "source": {"kind": "coined"}
    - "form": "zünen"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to write"
      "source": {"kind": "coined"}
    - "form": "qovor"
      "class": "n"
      "field": "Everyday society"
      "gloss": "a king"
      "source": {"kind": "coined"}
    - "form": "jönek"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a litter for carrying a person"
      "source": {"kind": "coined"}
    - "form": "zöret"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "a palm tree"
      "source": {"kind": "coined"}
    - "form": "ghosun"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a horn; a horn sounded as a signal"
      "source": {"kind": "coined"}
    - "form": "khözen"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "a reed"
      "source": {"kind": "coined"}
    - "form": "qonar"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "a mare; a female horse"
      "source": {"kind": "coined"}
    - "form": "zökhem"
      "class": "n"
      "field": "Everyday society"
      "gloss": "a shaman of the steppe rites"
      "source": {"kind": "coined"}
    - "form": "qozat"
      "class": "n"
      "field": "Everyday society"
      "gloss": "a war captain"
      "source": {"kind": "coined"}
    - "form": "chezek"
      "class": "n"
      "field": "Everyday body"
      "gloss": "a scar"
      "source": {"kind": "coined"}
    - "form": "jozul"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "a pool"
      "source": {"kind": "coined"}
    - "form": "chövem"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to strain liquid through a cloth or sieve"
      "source": {"kind": "coined"}
    - "form": "jotok"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to tie; to fasten with a knot"
      "source": {"kind": "coined"}
    - "form": "jozon"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to untie; to release a knot"
      "source": {"kind": "coined"}
    - "form": "jözir"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to dig"
      "source": {"kind": "coined"}
    - "form": "chöze"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to cut"
      "source": {"kind": "coined"}
    - "form": "qojom"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to pay; to discharge a stated debt or price"
      "source": {"kind": "coined"}
    - "form": "zövet"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a line; a row"
      "source": {"kind": "coined"}
    - "form": "qozit"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a foot as a unit of length"
      "source": {"kind": "coined"}
    - "form": "zodol"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a mile as a unit of distance"
      "source": {"kind": "coined"}
    - "form": "jozim"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a drain; an outlet for water"
      "source": {"kind": "coined"}
    - "form": "ghuzum"
      "class": "n"
      "field": "Everyday nature"
      "gloss": "a drought"
      "source": {"kind": "coined"}
    - "form": "qozach"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a hole; an opening through a surface"
      "source": {"kind": "coined"}
    - "form": "jöchen"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to paint"
      "source": {"kind": "coined"}
    - "form": "jozad"
      "class": "n"
      "field": "Everyday things"
      "gloss": "bread"
      "source": {"kind": "coined"}
    - "form": "jozulud"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a bucket"
      "source": {"kind": "coined"}
    - "form": "qozuk"
      "class": "n"
      "field": "Everyday body"
      "gloss": "a claw"
      "source": {"kind": "coined"}
    - "form": "zovot"
      "class": "adj"
      "field": "Everyday qualities"
      "gloss": "full of contents; filled to capacity"
      "source": {"kind": "coined"}
    - "form": "zömol"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a boat"
      "source": {"kind": "coined"}
    - "form": "qozud"
      "class": "n"
      "field": "Everyday society"
      "gloss": "a trading caravan"
      "source": {"kind": "coined"}
    - "form": "zudol"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a saddle"
      "source": {"kind": "coined"}
    - "form": "chödel"
      "class": "n"
      "field": "Everyday things"
      "gloss": "a waterskin; a skin container for carrying water"
      "source": {"kind": "coined"}
    - "form": "zöder"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to spare a person from death or punishment"
      "source": {"kind": "coined"}
    - "form": "qoshur"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to pour out a liquid"
      "source": {"kind": "coined"}
    - "form": "qozon"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to foretell; to predict"
      "source": {"kind": "coined"}
    - "form": "zökhil"
      "class": "v"
      "field": "Everyday verbs"
      "gloss": "to tremble; to shiver"
      "source": {"kind": "coined"}
    - {form: qodiror, class: n, field: Derived words, gloss: a mountain range, built: [qodir, -or]}
    - form: jelüdchaqur
      class: n
      field: Everyday body
      gloss: eyebrow; the hair of the eye
      built: [jelüd, chaqur]
    - form: josaqchaqur
      class: n
      field: Everyday body
      gloss: beard; the hair of the chin
      built: [josaq, chaqur]
  register:
    - {name: Sahri, tongue: kept}
    - {name: Sovidur Language, tongue: gloss, built: [Sovidur]}
    - {name: Sovidur, tongue: sowides, built: [sovid, -ur]}
    - {name: Ghotaqor, tongue: sowides, built: [ghotaq, -or]}
    - {name: The Northern Taiga, tongue: gloss, built: [Ghotaqor]}
    - {name: Volketor, tongue: sowides, built: [volket, -or]}
    - {name: The Western Margin, tongue: gloss, built: [Volketor]}
    - {name: Khoshiqor, tongue: sowides, built: [khoshiq, -or]}
    - {name: The Central Sands, tongue: gloss, built: [Khoshiqor]}
    - {name: Diqraqor, tongue: sowides, built: [diqraq, -or]}
    - {name: The Stone Uplands, tongue: gloss, built: [Diqraqor]}
    - {name: Idvaqor, tongue: sowides, built: [idvaq, -or]}
    - {name: The Eastern Stone Desert, tongue: gloss, built: [Idvaqor]}
    - {name: Qiiso, tongue: sowides, built: [qiiso]}
    - {name: The Central Market-Camp, tongue: gloss, built: [Qiiso]}
    - {name: Yemok, tongue: sowides, built: [yemok]}
    - {name: The Oath Well, tongue: gloss, built: [Yemok]}
    - {name: Sovid, tongue: sowides, built: [sovid]}
    - {name: The Riders' Well, tongue: gloss, built: [Sovid]}
    - {name: The Sovidur Reckoning, tongue: gloss, built: [Sovidur]}
    - {name: Steppe Reckoning, tongue: gloss, built: [Sovidur]}
    - {name: Vulud, tongue: sowides, built: [vulud]}
    - {name: The Half-Buried Towers, tongue: gloss, built: [Vulud]}
    - {name: Kelodvotri, tongue: sowides, built: [kelod, votri]}
    - {name: The Cold Well, tongue: gloss, built: [Kelodvotri]}
    - {name: Bolidqiiso, tongue: sowides, built: [bolid, qiiso]}
    - {name: The Counting-House Tower, tongue: gloss, built: [Bolidqiiso]}
    - {name: The Price-Tower, tongue: gloss, built: [Bolidqiiso]}
    - {name: Jilaq, tongue: sowides, built: [jilaq]}
    - {name: The Lantern City, tongue: gloss, built: [Jilaq]}
    - {name: Vomek, tongue: sowides, built: [vomek]}
    - {name: The Green Oasis, tongue: gloss, built: [Vomek]}
    - {name: Qiimod, tongue: sowides, built: [qiimod]}
    - {name: The Silent Market, tongue: gloss, built: [Qiimod]}
    - {name: Evod, tongue: sowides, built: [evod]}
    - {name: The Salt Basin, tongue: gloss, built: [Evod]}
    - {name: Kelod, tongue: sowides, built: [kelod]}
    - {name: The Stepped Well, tongue: gloss, built: [Kelod]}
    - {name: Oshiqor, tongue: sowides, built: [oshiq, -or]}
    - {name: The Sunken Kings' Steps, tongue: gloss, built: [Oshiqor]}
    - {name: Uruvaq, tongue: sowides, built: [uruvaq]}
    - {name: The Hollow Hills, tongue: gloss, built: [Uruvaq]}
    - {name: Oroqid, tongue: sowides, built: [oroqid]}
    - {name: The Legion Fort, tongue: gloss, built: [Oroqid]}
    - {name: Bolid, tongue: sowides, built: [bolid]}
    - {name: The Buried Tower City, tongue: gloss, built: [Bolid]}
    - {name: Old Holds of the Northern Taiga, tongue: gloss, built: [Ghotaqor]}
    - {name: The Taiga Holds, tongue: gloss, built: [Ghotaqor]}
    - {name: Uruvolur, tongue: sowides, built: [uruvol, -ur]}
    - {name: The Calling at Vomek, tongue: gloss, built: [Vomekoqod]}
    - {name: Vomekoqod, tongue: sowides, built: [vomek, oqod]}
    - {name: The Buried Water, tongue: gloss, built: [Uruvolkuyad]}
    - {name: Uruvolkuyad, tongue: sowides, built: [uruvol, kuyad]}
    - {name: Bulaqsovid, tongue: sowides, built: [bulaq, sovid]}
    - {name: Yovakur, tongue: sowides, built: [yovaq, -ur]}
    - {name: Bulaqsovid Yovakur, tongue: gloss, built: [Bulaqsovid, Yovakur]}
    - {name: Administrator Bulaqsovid, tongue: gloss, built: [Bulaqsovid]}
    - {name: Town Administrator Bulaqsovid, tongue: gloss, built: [Bulaqsovid]}
    - {name: Tijodorkun, tongue: sowides, built: [tijod, orkun]}
    - {name: Savaghur, tongue: sowides, built: [savagh, -ur]}
    - {name: Tijodorkun Savaghur, tongue: gloss, built: [Tijodorkun, Savaghur]}
    - {name: Elder Shaman Tijodorkun, tongue: gloss, built: [Tijodorkun]}
    - {name: Khilodlun, tongue: sowides, built: [khilod, -lun]}
    - {name: Biilokur, tongue: sowides, built: [biiloq, -ur]}
    - {name: Khilodlun Biilokur, tongue: gloss, built: [Khilodlun, Biilokur]}
    - {name: Chief Khilodlun, tongue: gloss, built: [Khilodlun]}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Sovidur (isolate)}}
---

Sovidur is the tongue of the herding tribes of the [[place-khzryndsrtrgn|Khazryn Desert Region]], who call themselves _[[lore-sowidesclt|Sovidur]]_, "the riders", from _sovid_ "rider" and _-ur_ "a people". Each tribe speaks it with its own turns of phrase, and a rider of one tribe is understood in all the others. It is the tongue in which caravan passage is bargained for, so a caravan-master who crosses the Khazryn learns its numbers and its courtesies first. Fluency measures the sophistication of expression in the language, from the halting phrases of a traveler to the nuanced discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## How Sovidur sounds

Sovidur is the clipped speech of the steppe tribes: short syllables and back-of-the-mouth consonants.

**The vowels.** _o_, _u_ and _a_ lead in one word, or _e_ and _i_ lead together. A word keeps to one set.

**The consonants.** _q_, _kh_, _gh_, _d_, _l_, _b_, _v_, _y_ and _j_.

**Clusters.** Few: _lq_, _rq_ and _gh_ before a vowel.

**Endings.** Sovidur words end in _-od_, _-ur_, _-aq_, _-iq_, _-lun_ or _-oliz_.

**What Sovidur leaves out.** It has no word of more than four syllables.

## Sounds

Sovidur is a tongue of two voices. Every stem keeps to one: a back stem is made of _a_, _o_ and _u_ and the throaty _q_ and _gh_; a front stem is made of _e_, _ö_ and _ü_ and the lighter _k_ and _g_; and _i_ sits with either. Round it run the scraped _kh_, the hissing _sh_ and _z_, the affricates _ch_ and _j_, and long vowels. Words close on a consonant or a vowel and never open on _r_. It has no _p_, no _h_, no _f_, no _w_ and no _ts_.

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Syllables

```sql
SELECT "Rule", "Forms" FROM (
SELECT 0 AS o, 'Onsets' AS "Rule", CASE onsets WHEN 'single' THEN 'a single consonant' END AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-sowideslng'
UNION ALL
SELECT 1 AS o, 'Codas' AS "Rule", array_to_string(list_transform(codas, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-sowideslng'
UNION ALL
SELECT 2 AS o, 'Finals' AS "Rule", array_to_string(list_transform(finals, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-sowideslng'
UNION ALL
SELECT 3 AS o, 'Doubled' AS "Rule", coalesce(nullif(array_to_string(list_transform(doubled, x -> '`' || x || '`'), ' '), ''), 'none') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-sowideslng'
UNION ALL
SELECT 4 AS o, 'Vowel pairs' AS "Rule", array_to_string(list_transform(vowelPairs, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-sowideslng'
UNION ALL
SELECT 5 AS o, 'Initial vowel' AS "Rule", CASE WHEN initialVowel THEN 'yes' ELSE 'no' END AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-sowideslng'
UNION ALL
SELECT 6 AS o, 'Never initial' AS "Rule", array_to_string(list_transform(neverInitial, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-sowideslng'
UNION ALL
SELECT 7 AS o, 'Harmony' AS "Rule", 'back ' || array_to_string(list_transform(harmony_back, x -> '`' || x || '`'), ' ') || ' / front ' || array_to_string(list_transform(harmony_front, x -> '`' || x || '`'), ' ') || ' / neutral ' || array_to_string(list_transform(harmony_neutral, x -> '`' || x || '`'), ' ') || ', which alone counts as ' || harmony_neutralAs AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-sowideslng'
UNION ALL
SELECT 8 AS o, 'Signature' AS "Rule", array_to_string(list_transform(signature, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-sowideslng'
) ORDER BY o
```

A syllable opens on one consonant or on nothing and closes on nothing or on one consonant. A word may begin with a vowel (_orkun_, _otviil_) but never with _r_, never sets two different vowels side by side, never doubles a consonant, and ends on a vowel or on one of the finals above.

**Every stem takes its vowels from one group.** _kodu_ "horse", _jedor_ "road" and _kelod_ "well" are front stems; _khoshiq_ "sand", _qodir_ "mountain" and _bolid_ "tower" are back stems. A stem of _i_ alone counts as front. A compound keeps each stem's own group, so _Kelodvotri_ holds a front half and a back half, and a suffix takes the group of the stem before it.

**The velars follow the group.** _q_ and _gh_ belong to back stems and _k_ and _g_ to front ones: _qodir_ and _kelod_, _savagh_ "moon" and _goren_ "storm".

**Every stem carries a signature sound:** a _q_, _gh_, _kh_, _ch_, _j_ or _z_, an _o_, an _ö_ or a _ü_. The _kh_ of _khamaq_ "skull", the _j_ of _jilaq_ "lantern" and the _o_ of _jedor_ "road" mark a word as Sovidur even when it is heard alone.

### Stress

Stress falls on a doubled vowel where a word has one, and otherwise on the last syllable of the word: **QII**-mod, ko-**DU**, u-ru-**VAQ**.

## Building words

Every Sovidur word is a stem, two stems set together, or a stem with a suffix after it. The stems and their senses are in the [[skill-khazrilng#lexicon|Khazryn Lexicon]]. The thing described comes first and the word describing it second: _kodu_ "horse" and _uruvaq_ "wind" make _koduyuruvaq_ "horse of the wind".

### Joins

```sql
SELECT '`' || meeting || '`' AS "Meeting", '`' || rule || '`' AS "Rule", coalesce(array_to_string(list_transform(letters, x -> '`' || x || '`'), ' '), '') AS "Letters"
FROM joins WHERE language = 'thalorna-note-skill-sowideslng' ORDER BY position
```

- **Two vowels are held apart by _y_.** _kodu_ and _-ur_ make _Koduyur_, "the horse people".
- **Two of the same consonant become one.** _sovid_ "rider" and _diqraq_ "stone" make _sovidiqraq_, "stone escort".

Every other meeting leaves both parts as they are.

### Suffixes

Each suffix has a back form and a front form; a stem takes the form of its own group.

```sql
SELECT '`' || form || '`' AS "Back", '`' || front || '`' AS "Front", gloss AS "Sense"
FROM affixes WHERE language = 'thalorna-note-skill-sowideslng' ORDER BY position
```

### The paramount chief

Each tribe has its chief, the _dovaq_. The tribes stand alone. Now and then a dictator, the _orkun_, forces several of them together by the sword, and the binding he holds over them is his _orkunoq_. It lasts only as long as he lives: when the _orkun_ dies, the union dies with him and every tribe goes its own way again.

### Names

| Name        | Built from         | Meaning                   |
| ----------- | ------------------ | ------------------------- |
| Sovidur     | _sovid_ + _-ur_    | the riders                |
| Koduyur     | _kodu_ + _-ur_     | the horse people          |
| Orkunoq     | _orkun_ + _-oq_    | the union an orkun forces |
| Diqraqor    | _diqraq_ + _-or_   | the stone range           |
| Jadakud     | _jadaq_ + _-ud_    | a raider                  |
| Voghaltoliz | _voghal_ + _toliz_ | a man's name: wolf-spear  |
| Tijodlun    | _tijod_ + _-lun_   | a woman's name: star      |

**A union** is named by the stem of its emblem or its country with _-oq_ or _-ok_, and a tribe by the same stem with _-ur_. **A range** takes _-or_ after what marks it: stone, grass, salt. **A man's name** is two stems with no suffix, a beast or a weather and then a weapon or a virtue; **a woman's name** is one stem with _-lun_.

## Writing

The Sovidur write nothing but signs. Each tribe has a mark, cut into the stone over its wells and the trunks of its oldest palms, and a rider carries his tribe's passage-token, which bears the sign of the tribe that issued it. Records, treaties and debts are kept in memory and witnessed aloud.

## Everyday speech

### Ordinary words and pronunciation

The older stem list also supplies ordinary free words. The new ordinary citations state their class and keep the old senses: _kodu_ is a horse, _uruvol_ water, _akhaq_ a father and _semok_ a guest. A personal or place name remains a name; its ordinary stem is cited separately where needed. No older word, name or register entry is respelled here.

Keep the established sound group of an existing stem, including a legacy spelling that does not look regular beside a new coin. New stems use one front or back group, with _i_ neutral. In ordinary reading, _ö_ is _e_ said with rounded lips, and _ü_ is _i_ said with rounded lips. Plain _e_ and _i_ are also fine for players. These letters identify vowels, not pitch or stress. Hold a doubled vowel; otherwise stress the final syllable, as the earlier sound rules state. No extra accent is required.

An ordinary word has at most four syllables. Use separate head and modifier words when joining them would exceed that limit. Existing proper names retain their recorded forms. Each part of an actual compound keeps its own harmony; vowel meetings take _y_, equal consonants merge, and suffixes use their stated front or back form. The endings _-ur_, _-oq/-ok_, _-or_, _-ud_ and _-lun_ retain their listed meanings. None is a general plural or a verb ending.

### The ordinary clause

Ordinary clauses put the subject first, the object next and the verb last: SOV. This clause frame is stated here alongside the existing head-before-modifier rule; modifier order alone does not determine it. Verbs have one form for every person and number.

_zilir uruvol ghunir_ means “I drink water”.

_khilin zilir zöken_ means “you see me”.

_zilir khilin zöken_ means “I see you”.

The same form can describe a present, past or future act when its time is stated or understood. A time word normally begins the clause. It does not change the verb. _zorut zilir uruvol ghunir_ means “yesterday I drank water”. _chunaron zilir qavun_ means “tomorrow I go”.

A state or identity ends in _jochun_, be. _zilir semok jochun_ means “I am a guest”. _kodu yaqnar jochun_ means “the horse is big”.

A noun stays unchanged after a number. Without a number it can refer to one or several when the context supplies the count. _kodu chovur_ means “two horses”. _kodu juchaz_ means “many horses”. There is no required article and no new gender agreement.

### Reference, possession and description

_zilir kodu qonir_ means “I have a horse”.

_Zilir_ names the speaker, _khilin_ the person addressed, _qadir_ he, _qadul_ she, _qadiz_ it, _qaduch_ they and _zilich_ we. The addressee's number can remain unstated. These pronouns do not inflect the verb. An omitted subject is recovered only from a clear conversational referent; full clauses are the ordinary teaching form.

Put the head before its description: _kodu yaqnar_ means “a big horse”. _kodu khizin_ means “this horse”. Separate modifiers remain separate words; they are not new compound roots.

Possession places _jiven_ after the possessor, with the possessed head first. _kodu zilir jiven_ means “my horse”. _kodu khilin jiven_ means “your horse”. _kodu akhaq jiven_ means “father's horse”. _ghotaz zilich jiven_ means “our tent”.

A locative relation can express belonging without turning the ordinary have verb into a new case form. _kodu zilir jiven jochun_ means “the horse is mine”. The separately cited verb for belong takes the possessor as its object.

Use the reflexive word for the subject's own person; it is not a new possessive suffix. _zilir qonoq zöken_ means “I see myself”. _qadul qonoq zöken_ means “she sees herself”.

A finite description can follow its head between _zokhun_ and _zökhen_. Repeat the head's reference with an ordinary pronoun inside that clause. _kodu zokhun zilir qadiz zöken zökhen_ means “the horse that I see”. Here _qadiz_ refers back to _kodu_. The closing word makes the end audible.

### Place, recipients and accompaniment

Relation words follow their noun or pronoun. Put those groups before the final verb. _zilir khilin qotur uruvol zovad_ means “I give water to you”. _zilir kelod qotur qavun_ means “I go to the well”. _zilir ghotaz ghozun jodur_ means “I come from the tent”.

_zilir ghotaz jömik jochun_ means “I am in the tent”. _qibud diqraq khödir jochun_ means “the token is on the stone”.

Space and time use distinct citations. The words for spatial front, temporal before, up, high, and greater quantity are not interchangeable. Use a named reference with a spatial relation when here would leave it unclear.

_Chovin_ follows a companion or accompanying object. _zilir khilin chovin qavun_ means “I go with you”. The question _jimiz qotur_ asks a recipient, and _qovar ghozun_ asks a source.

### Negatives and questions

Put _zevik_ immediately before the verb or property being denied. _zilir khilin zevik zöken_ means “I do not see you”. _kodu zevik yaqnar jochun_ means “the horse is not big”.

_Chövik_ is a negative answer, not a general negator inside a clause. _Zoqur_ is an affirmative answer. _Chidir_ at the beginning asks whether the complete following proposition holds. _chidir khilin zilir zöken_ means “do you see me”.

An information question leaves the questioned expression in its ordinary place and does not add _chidir_. _khilin chivil zöken_ means “what do you see”. _jimiz jodur_ means “who comes”. _khilin qovar qotur qavun_ means “where are you going”. _zömik khilin jodur_ means “when do you come”.

_kodu jimiz jiven jochun_ means “whose horse is it”. _kodu jodir chivil jochun_ means “how many horses are there”. _uruvol qozin chivil jochun_ means “how much water is there”.

Clarification is an actual request: _khilin chivil javal_ means “what do you say”. To ask intended meaning, say _khilin chivil qaviz_ means “what do you mean”. Replace _khizin_ with the actual expression in _khilin khizin chirim javal_ means “how do you say this”. _jilin khizin jiven chivil jochun_ means “what is this called”.

### Numbers and comparison

Number heads precede their multipliers: _qozur chovur_, two tens, is twenty. An additive _jiviz_ links remaining units: _qozur jiviz chovur_, ten and two, is twelve; _qozur chovur jiviz shokhun_ is twenty-four. A larger named counting unit works the same way: _jodun chovur_, two hundreds.

_Yitboq_ is first. The productive ordinal construction places _jilar_ before a number: _jilar chovur_, second; _jilar qazin_, third; _jilar shokhun_, fourth. _kodu jilar shokhun_ means “the fourth horse”. Any stated number can fill that position, including a multiword count.

Quantity modifiers follow the item counted. Approximate, almost and exactly modify a stated quantity; almost stays below it. Their numerical use does not mean recently or nearby in time.

_Ghozir_ follows the comparison standard. Degree follows the quality. _kodu khizin kodu qazun ghozir qolun qazod jochun_ means “this horse is faster than that horse”. _kodu khizin kodu qazun ghozir jilod qazod jochun_ means “this horse is better than that horse”.

The separate greatest and least degree words apply within the comparison set supplied in speech. _kodu jilod qazom_ means “the best horse”. State the comparison group when it is not already known. Long and short spatial length, duration, colour lightness and weight lightness have separate dictionary entries.

### Joining, conditions and reports

_Jiviz_ joins named things or complete clauses; _zovul_ offers alternatives and _khazur_ contrasts them. _zilir jodur jiviz khilin qavun_ means “I come and you go”. _kodu jiviz gured_ means “horse and camel”. Use _chüdir_ after a coordinated noun group when the next words could otherwise be mistaken for another member.

_Qavar_ introduces the reason after the assertion it explains. _zilir qavun qavar khilin jodur_ means “I go because you come”.

A condition begins with _jivun_; _qazul_ introduces its consequence. _jivun khilin jodur, qazul zilir qavun_ means “if you come, then I go”. In the fixed conjunction _jivun zevik_, the negative covers the complete following condition: _jivun zevik khilin jodur, qazul zilir qavun_ means “unless you come, I go”. The words for temporal then and conditional consequence remain distinct.

A reported proposition begins with _jidir_ and ends with _zökhen_, and occupies an ordinary object position. _zilir jidir khilin jodur zökhen kholiqin_ means “I know that you come”. _qaduch jidir khilin jodur zökhen javal_ means “they say that you come”. The report does not establish the reported claim as true.

_Chuzir_ marks uncertainty over the complete following clause: _chuzir khilin jodur_ means “perhaps you come; you might come”. Belief, confidence, complete assurance and truth have different words; a speaker's certainty does not turn a false claim into truth.

### Ability, permission and obligation

A modal follows the action, at the end of the clause. _zilir uruvol ghunir qomul_ means “I can drink water”. _zilir uruvol ghunir zevik qomul_ means “I cannot drink water”. This is ability, not permission.

_khilin qavun jökir_ means “you may go”. Permission can be granted without asserting ability. The ordinary permit and prohibit verbs name the person as object when the proposed action is already under discussion.

_zilir qavun zödir_ means “I must go”. _zilir zevik qavun zödir_ means “I must not go”. _zilir qavun zevik zödir_ means “I do not have to go”. Negating the action and negating the obligation have different scopes.

_khilin khogham jökhen_ means “you ought to sleep”. Advice does not impose the obligation expressed by _zödir_.

Possible and impossible describe whether an event can happen. Allowed and forbidden describe permission; optional describes an act that is allowed without being required. These are separately usable state words with _jochun_. A modal of ability never supplies a moral or legal permission.

### Requests, courtesy and registers

A request uses the ordinary addressee and action with no special verb ending. _khilin zekhir_ means “listen”. _khilin chikin jodur_ means “come here”. _khilin zilir qorim_ means “help me”. Add _zölik_ for please. Context distinguishes the direct request from an assertion about the addressee.

Conventional calls are cited whole. _khilin semok jochun_ means “welcome”. _zilir qakhuch qonir_ means “thank you”. _beyuk zevik jibun_ means “you are welcome”. The gift-and-debt wording is a fixed courtesy; it does not turn every emotion into an account.

_zilir zünes qonir_ means “I am sorry”. _khilin zilir chosich_ means “forgive me”. _zölik khilin zömin javal_ means “please say that again”.

Formal witnessed speech keeps the same ordinary grammar. It states the participants, quantity, place and time explicitly and repeats the actual promise aloud. An undertaking is expressed with the ordinary promise verb; no new tense, case or ceremonial verb ending is required. Everyday speech can omit what both parties already know.

Punctuation in the common transcription is editorial guidance for a reader. Tribal marks identify tribes and passage-tokens; they are not an alphabet, a script map or a font. The words remain oral Sovidur, with spoken questions, negation and remembered witnessing.

## Sovidur Lexicon {#lexicon}

The stems of Sovidur, the names built from them and the register of its names. The rules the three tongues share, and the senses every tongue has a stem for, stand in the [[skill-khazrilng#lexicon|Khazryn Lexicon]].

### Stems

```sql
SELECT '`' || form || '`' AS "Stem", sense AS "Sense"
FROM elements WHERE language = 'thalorna-note-skill-sowideslng' ORDER BY position
```

### Derived words

Worked names and words, each built from the stems above.

```sql
SELECT form AS "Word", '`' || 'sowides' || '`' AS "Tongue", gloss AS "Gloss", array_to_string(list_transform(built, x -> '`' || x || '`'), ' + ') AS "Derivation"
FROM words WHERE language = 'thalorna-note-skill-sowideslng' AND field = 'Derived words' ORDER BY position
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
FROM register WHERE language = 'thalorna-note-skill-sowideslng' ORDER BY position
```

#### Language tags

```sql
SELECT tag AS "Tag", meaning AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-sowideslng' ORDER BY position
```
