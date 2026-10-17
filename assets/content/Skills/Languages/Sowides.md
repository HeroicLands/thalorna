---
shortcode: sowideslng
name: {full: Sovidur Language, aliases: []}
type: skill
subType: language
description: "The hard, clipped tongue of the steppe tribes of the Khazryn, spoken from the cold northern coast to the stone desert before Tantsou."
tags: []
data:
  abbreviation: Sov.
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: "{given} {tribe}"
    given:
      female:
        - "Tijoodlun"
        - "Savaghlun"
        - "Khilodlun"
        - "Jilaqlun"
        - "Koyozlun"
        - "Vooyerlun"
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
        - "Tijoodkharu"
        - "Tijoodorkun"
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
      - "Tijoodur"
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
      vowelPairs: [aa, ee, ii, oo, uu, oo, uu]
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
    - {form: eevur, sense: sky}
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
    - {form: tijood, sense: star}
    - {form: numaq, sense: night}
    - {form: yodvir, sense: day}
    - {form: ataz, sense: dusk}
    - {form: vootri, sense: cold}
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
    - {form: vooyer, sense: milk}
    - {form: ghotaz, sense: tent}
    - {form: oroqid, sense: camp}
    - {form: otviil, sense: "fire, hearth"}
    - {form: dujar, sense: smoke}
    - {form: yeloz, sense: laying-out ground}
    - {form: ooqlaq, sense: "spirit, soul"}
    - {form: akhaq, sense: father}
    - {form: ekoon, sense: mother}
    - {form: boyad, sense: son}
    - {form: minju, sense: daughter}
    - {form: todva, sense: elder}
    - {form: ghachaa, sense: child}
    - {form: oroolqi, sense: "people, folk"}
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
    - {form: qoojid, sense: "cursed, forbidden"}
    - {form: keedok, sense: "blood-ground, a blood-field"}
    - {form: veesuk, sense: "cursed ground, a thin blood-field"}
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
    - form: Tijoodlun
      class: name
      field: Derived words
      gloss: "a woman's name: star"
      built: [tijood, -lun]
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
    - form: Keedok
      class: name
      field: Derived words
      gloss: "blood-ground: a blood-field"
      built: [keedok]
    - form: Veesuk
      class: name
      field: Derived words
      gloss: "cursed ground: a thin blood-field"
      built: [veesuk]
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
    - form: Vooyerlun
      class: name
      field: Derived words
      gloss: "a woman's name: milk"
      built: [vooyer, -lun]
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
    - form: Kelodekoon
      class: name
      field: Derived words
      gloss: "the well-mother: the keeper at the bottom of the stepped well"
      built: [kelod, ekoon]
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
    - form: Kelodvootri
      class: name
      field: Derived words
      gloss: "the cold well: an owned spring of the Kuuyoyur"
      built: [kelod, vootri]
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
  register:
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
    - {name: Kelodvootri, tongue: sowides, built: [kelod, vootri]}
    - {name: The Cold Well, tongue: gloss, built: [Kelodvootri]}
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
    - {name: Tijoodorkun, tongue: sowides, built: [tijood, orkun]}
    - {name: Savaghur, tongue: sowides, built: [savagh, -ur]}
    - {name: Tijoodorkun Savaghur, tongue: gloss, built: [Tijoodorkun, Savaghur]}
    - {name: Elder Shaman Tijoodorkun, tongue: gloss, built: [Tijoodorkun]}
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

Sovidur Language is the tongue of the herding tribes of the [[place-khzryndsrtrgn|Khazryn Desert Region]], who call themselves _[[lore-sowidesclt|Sovidur]]_, "the riders", from _sovid_ "rider" and _-ur_ "a people". Each tribe speaks it with its own turns of phrase, and a rider of one tribe is understood in all the others. It is the tongue in which caravan passage is bargained for, so a caravan-master who crosses the Khazryn learns its numbers and its courtesies first. Fluency measures the sophistication of expression in the language, from the halting phrases of a traveler to the nuanced discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## How Sovidur sounds

Sovidur is the clipped speech of the steppe tribes: short syllables and back-of-the-mouth consonants.

**The vowels.** _o_, _u_ and _a_ lead in one word, or _e_ and _i_ lead together. A word keeps to one set.

**The consonants.** _q_, _kh_, _gh_, _d_, _l_, _b_, _v_, _y_ and _j_.

**Clusters.** Few: _lq_, _rq_ and _gh_ before a vowel.

**Endings.** Sovidur words end in _-od_, _-ur_, _-aq_, _-iq_, _-lun_ or _-oliz_.

**What Sovidur leaves out.** It has no doubled vowels (_ii_, _oo_) and no word of more than four syllables.

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

**Every stem takes its vowels from one group.** _kodu_ "horse", _jedor_ "road" and _kelod_ "well" are front stems; _khoshiq_ "sand", _qodir_ "mountain" and _bolid_ "tower" are back stems. A stem of _i_ alone counts as front. A compound keeps each stem's own group, so _Kelodvootri_ holds a front half and a back half, and a suffix takes the group of the stem before it.

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
| Tijoodlun   | _tijood_ + _-lun_  | a woman's name: star      |

**A union** is named by the stem of its emblem or its country with _-oq_ or _-ok_, and a tribe by the same stem with _-ur_. **A range** takes _-or_ after what marks it: stone, grass, salt. **A man's name** is two stems with no suffix, a beast or a weather and then a weapon or a virtue; **a woman's name** is one stem with _-lun_.

## Writing

The Sovidur write nothing but signs. Each tribe has a mark, cut into the stone over its wells and the trunks of its oldest palms, and a rider carries his tribe's passage-token, which bears the sign of the tribe that issued it. Records, treaties and debts are kept in memory and witnessed aloud.

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
