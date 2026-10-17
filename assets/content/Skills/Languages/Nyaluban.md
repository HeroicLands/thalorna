---
shortcode: nyalbnlng
name: {full: Nyáluban Language, aliases: []}
type: skill
subType: language
description: "The Nyáluban oral speech, whose keepers carry messages across miles by drum and pitch as readily as by voice."
tags: []
data:
  abbreviation: Nyal.
  fields:
    - name: Clan and totem
      holds: "The five clans, the totems they are named for, and the ending that makes a clan."
    - name: The Pact and the council
      holds: "The council of the five, its ground, and the words of rank spoken there."
    - name: The Brightness and the guides
      holds: "The source beneath which the guides stand, the guides, and the words of the rites."
    - {name: Given names, holds: "The roots that given names are built on."}
    - {name: Grammar words, holds: "The particles, the pointing words and the prefixes."}
  affixes:
    - form: "-zi"
      gloss: "the people of it: a clan, named for its totem"
      attaches: "added"
      examples: ["ruwo > Ruwozi, the lion-clan"]
    - form: "-inya"
      gloss: "the quality of it: a noun of what a thing is"
      attaches: "added"
      examples: ["shor- > shorinya, brightness"]
    - {form: "-o", gloss: "a man's name", attaches: "added", examples: ["tabes- > Tabeso"]}
    - {form: "-a", gloss: "a woman's name", attaches: "added", examples: ["lushey- > Lusheya"]}
  words:
    - {form: ruwo, class: "n", field: Clan and totem, gloss: "the lion"}
    - form: ruwozi
      class: "n"
      field: Clan and totem
      gloss: "the lion-clan"
      built: [ruwo, "-zi"]
    - {form: kolembo, class: "n", field: Clan and totem, gloss: "the crocodile"}
    - form: kolembozi
      class: "n"
      field: Clan and totem
      gloss: "the crocodile-clan"
      built: [kolembo, "-zi"]
    - {form: "ngon-", class: stem, field: Clan and totem, gloss: "the eagle"}
    - form: ngonzi
      class: "n"
      field: Clan and totem
      gloss: "the eagle-clan"
      built: ["ngon-", "-zi"]
    - {form: lobwe, class: "n", field: Clan and totem, gloss: "the baobab"}
    - form: lobwezi
      class: "n"
      field: Clan and totem
      gloss: "the baobab-clan"
      built: [lobwe, "-zi"]
    - {form: sengala, class: "n", field: Clan and totem, gloss: "the leopard-clan"}
    - form: lubemo
      class: "n"
      field: The Pact and the council
      gloss: "a council, a sitting that talks until no one objects"
    - form: heto
      class: "n"
      field: The Pact and the council
      gloss: "a stone enclosure, an Old Heto"
    - {form: nyoli, class: "n", field: The Pact and the council, gloss: "a daughter"}
    - {form: ndafo, class: adj, field: The Pact and the council, gloss: "great, senior"}
    - {form: nkulu, class: "n", field: The Pact and the council, gloss: "an elder"}
    - {form: "shor-", class: stem, field: The Brightness and the guides, gloss: "to shine"}
    - form: shorinya
      class: "n"
      field: The Brightness and the guides
      gloss: "brightness"
      built: ["shor-", "-inya"]
    - form: zherami
      class: "n"
      field: The Brightness and the guides
      gloss: "the spirits, the guides"
    - {form: zhone, class: v, field: The Brightness and the guides, gloss: "abides, stays near"}
    - {form: seleme, class: v, field: The Brightness and the guides, gloss: "witnesses"}
    - form: "tabes-"
      class: stem
      field: Given names
      gloss: "to follow a trail; a root of men's names"
    - form: "lushey-"
      class: stem
      field: Given names
      gloss: "to fall as rain; a root of women's names"
    - form: nu
      class: part
      field: Grammar words
      gloss: "of: joins a person to a clan, set before the clan"
    - {form: le, class: adj, field: Grammar words, gloss: "good"}
    - {form: enyi, class: pron, field: Grammar words, gloss: "you, the one honored"}
    - {form: "mi-", class: pref, field: Grammar words, gloss: "I: set before the verb"}
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: "{given} {clan}"
    given:
      female:
        - "Adenza"
        - "Aíbesa"
        - "Akisa"
        - "Amífeli"
        - "Ándiya"
        - "Azímela"
        - "Bálesha"
        - "Bénduya"
        - "Búndeya"
        - "Daliba"
        - "Díngoya"
        - "Dombesa"
        - "Éduma"
        - "Fádewa"
        - "Féliwa"
        - "Gaja"
        - "Góndesi"
        - "Habishe"
        - "Háyeba"
        - "Jenda"
        - "Juma"
        - "Kaja"
        - "Káleshi"
        - "Kénzowa"
        - "Kíshela"
        - "Kóbesa"
        - "Lálija"
        - "Lanja"
        - "Lenza"
        - "Lólewa"
        - "Malya"
        - "Méshola"
        - "Mídewa"
        - "Míndeli"
        - "Móndawe"
        - "Múndewa"
        - "Ndaka"
        - "Néntoli"
        - "Nija"
        - "Níseta"
        - "Njuma"
        - "Núremi"
        - "Panja"
        - "Píkesa"
        - "Raja"
        - "Rálesi"
        - "Sálua"
        - "Sándeyo"
        - "Sáwemi"
        - "Séndowe"
        - "Sílowe"
        - "Súnemi"
        - "Táliba"
        - "Témoyi"
        - "Téndoli"
        - "Túndaye"
        - "Wanja"
        - "Wéndasi"
        - "Yaja"
        - "Záyeli"
      male:
        - "Amaleso"
        - "Bákeni"
        - "Bálesho"
        - "Dámbani"
        - "Fódemi"
        - "Gaduno"
        - "Gongwelo"
        - "Jao"
        - "Jelo"
        - "Kádewo"
        - "Kásimo"
        - "Kisado"
        - "Lálumo"
        - "Lóbezo"
        - "Máshelo"
        - "Mbuka"
        - "Mondú"
        - "Ndáfiyo"
        - "Njaka"
        - "Panza"
        - "Rábesi"
        - "Sálumo"
        - "Sandé"
        - "Sandó"
        - "Tálemo"
        - "Tamasé"
        - "Tímbelo"
        - "Tóbesho"
        - "Yámeto"
        - "Zákesho"
    clan:
      - "Árambu"
      - "Bándala"
      - "Béndawe"
      - "Dándira"
      - "Dóbalanda"
      - "Édumba"
      - "Fámangalí"
      - "Gúndala"
      - "Índawe"
      - "Jándaka"
      - "Kásiramba"
      - "Kéndalu"
      - "Kómaludi"
      - "Kúbola"
      - "Lándala"
      - "Lúsani"
      - "Málazuli"
      - "Mbándala"
      - "Mpanza"
      - "Múgandala"
      - "Ndálude"
      - "Ndánga-Sólembe"
      - "Nkúndala"
      - "Nómaledi"
      - "Ntalandi"
      - "Nyámelo"
      - "Óbandala"
      - "Ódawe"
      - "Ódúmbala"
      - "Ófawe"
      - "Ólambala"
      - "Ómalesí"
      - "Ómaletu"
      - "Ópala"
      - "Órindi"
      - "Ótandala"
      - "Pálambe"
      - "Pándazuli"
      - "Péndala"
      - "Rábandala"
      - "Róbandala"
      - "Sábandala"
      - "Sándambala"
      - "Shándiro"
      - "Sónkelada"
      - "Tábandala"
      - "Tálamba"
      - "Tándizuli"
      - "Téndiro"
      - "Tómalinde"
      - "Túbandala"
      - "Udandala"
      - "Úlambo"
      - "Úndala"
      - "Utúndala"
      - "Wánduri"
      - "Yándala"
      - "Yómasunde"
      - "Zákedala"
      - "Zímbala"
  sounds:
    edges:
      - {edge: openCluster, sounds: [mb, mp, nd, nt, nk, nj, nz]}
      - {edge: closeConsonant, sounds: []}
      - {edge: innerCluster, sounds: [mb, mp, nd, nt, nk, nj, nz]}
      - {edge: glide, sounds: [w, y]}
      - {edge: vowelPair, sounds: [ai, au, ei, eu, oi, ou]}
    clusters: {max: 2}
  scope:
    folders: [nyaluba, politiesnyaluba, deitiesnyaluba, lorespiritsnyaluba, spiritskillsnyaluba]
    cultures: [nyalubaclt]
    addresses:
      - lore-nyalubaclt
      - lore-nyalbsprts
      - skill-nyalbnlng
      - skill-nyalbdrm
      - skill-griot
      - doc-nyalubaadvguide
      - place-hetolubemo
      - place-ekundavlg
      - place-fenjaravlg
  tongues:
    - {tag: nyaluban, meaning: a Nyáluban name, language: skill-nyalbnlng}
    - tag: kept
      meaning: "a name the Nyáluba share with Okharis, which stands outside the tongue"
    - {tag: translation, meaning: a name given in the language of these pages}
  register:
    - {name: Baobab of the Lobwezi, tongue: translation}
    - {name: Baobab Spirit, tongue: translation}
    - {name: Baobab Spirit Power, tongue: translation}
    - {name: Baobab Totem, tongue: translation}
    - {name: Bondservant, tongue: translation}
    - {name: Chieftain, tongue: translation}
    - {name: Crocodile of the Kolembozi, tongue: translation}
    - {name: Crocodile Spirit, tongue: translation}
    - {name: Crocodile Spirit Power, tongue: translation}
    - {name: Crocodile Totem, tongue: translation}
    - {name: Delegate, tongue: translation}
    - {name: Dependent, tongue: translation}
    - {name: Drum-Speaker, tongue: translation}
    - {name: Drum-Speaking, tongue: translation}
    - {name: Drum-Speech, tongue: translation}
    - {name: Eagle of the Ngonzi, tongue: translation}
    - {name: Eagle Spirit, tongue: translation}
    - {name: Eagle Spirit Power, tongue: translation}
    - {name: Eagle Totem, tongue: translation}
    - {name: Ékunda, tongue: nyaluban}
    - {name: Ékunda Tribe, tongue: translation}
    - {name: Ékunda Village, tongue: translation}
    - {name: Elder, tongue: translation}
    - {name: Elder Shaman, tongue: translation}
    - {name: Envoy, tongue: translation}
    - {name: Fénjara, tongue: nyaluban}
    - {name: Fénjara Tribe, tongue: translation}
    - {name: Fénjara Village, tongue: translation}
    - {name: Griot, tongue: translation}
    - {name: Griot of the Kolembozi, tongue: translation}
    - {name: Griot of the Ngonzi, tongue: translation}
    - {name: Griot of the Ruwozi, tongue: translation}
    - {name: Griot of the Sengala, tongue: translation}
    - {name: Griot Tradition, tongue: translation}
    - {name: Guardian of a Crossing, tongue: translation}
    - {name: Guardian of a Forest Path, tongue: translation}
    - {name: Guardian of a Sacred Site, tongue: translation}
    - {name: Guardian of a Town Baobab, tongue: translation}
    - {name: Guardian of an Old Heto, tongue: translation}
    - {name: Guardian of the Pact-Baobab, tongue: translation}
    - {name: Guide, tongue: translation}
    - {name: Heto Lubemo, tongue: nyaluban, built: [heto, lubemo]}
    - {name: Host-Caller, tongue: translation}
    - {name: Householder, tongue: translation}
    - {name: Initiate, tongue: translation}
    - {name: Initiator, tongue: translation}
    - {name: Keeper of Memory, tongue: translation}
    - {name: Keeper of the Feud, tongue: translation}
    - {name: Keeper of the Tally, tongue: translation}
    - {name: Kinless, tongue: translation}
    - {name: Kinsman, tongue: translation}
    - {name: Kolembozi Crocodile, tongue: translation}
    - {name: Kolembozi Totem, tongue: translation}
    - {name: Kwendari Zohiring, tongue: kept}
    - {name: Lawkeeper, tongue: translation}
    - {name: Leopard of the Sengala, tongue: translation}
    - {name: Leopard Spirit, tongue: translation}
    - {name: Leopard Spirit Power, tongue: translation}
    - {name: Leopard Totem, tongue: translation}
    - {name: Lion of the Ruwozi, tongue: translation}
    - {name: Lion Spirit, tongue: translation}
    - {name: Lion Spirit Power, tongue: translation}
    - {name: Lion Totem, tongue: translation}
    - {name: Lobwezi Baobab, tongue: translation}
    - {name: Lobwezi Totem, tongue: translation}
    - {name: Mask-Maker, tongue: translation}
    - {name: Master of the Hunt, tongue: translation}
    - {name: Ndawelari Thakwaring, tongue: kept}
    - {name: Ngonzi Eagle, tongue: translation}
    - {name: Ngonzi Totem, tongue: translation}
    - {name: Nyáluba, tongue: nyaluban}
    - {name: Nyáluba Adventurer's Guide, tongue: translation}
    - {name: Nyáluba Faith, tongue: translation}
    - {name: Nyáluba Pantheon, tongue: translation}
    - {name: Nyáluba Spirits, tongue: translation}
    - {name: Nyáluba Tribal Nation, tongue: translation}
    - {name: Nyáluban, tongue: translation}
    - {name: Nyáluban Drum-Speech, tongue: translation}
    - {name: Nyáluban Language, tongue: translation}
    - {name: Nyáluban Lexicon, tongue: translation}
    - {name: Observant, tongue: translation}
    - {name: Ruwozi Lion, tongue: translation}
    - {name: Ruwozi Totem, tongue: translation}
    - {name: Sengala Leopard, tongue: translation}
    - {name: Sengala Totem, tongue: translation}
    - {name: Senior Griot, tongue: translation}
    - {name: Shorinya Ndafo, tongue: nyaluban, built: [shor-, -inya, ndafo]}
    - {name: Speaker of the Council, tongue: translation}
    - {name: Spirit-shunned, tongue: translation}
    - {name: Spirit-Speaker, tongue: translation}
    - {name: Tabeso, tongue: nyaluban, built: [tabes-, -o]}
    - {name: The Baobab Guide, tongue: translation}
    - {name: The Crocodile Guide, tongue: translation}
    - {name: The Eagle Guide, tongue: translation}
    - {name: The Ékunda, tongue: translation}
    - {name: The Fénjara, tongue: translation}
    - {name: The Five Who Walk Together, tongue: translation}
    - {name: The Great Brightness, tongue: translation}
    - {name: The Guides, tongue: translation}
    - {name: The Leopard Guide, tongue: translation}
    - {name: The Lion Guide, tongue: translation}
    - {name: The Long Pact, tongue: translation}
    - {name: The Nyáluba Way, tongue: translation}
    - {name: The Spirit Tracker, tongue: translation}
    - {name: The Stone Tongue, tongue: translation}
    - {name: The Swearing Under the Baobab, tongue: translation}
    - {name: The Totems and Spirits, tongue: translation}
    - {name: The Totems of the Nyáluba, tongue: translation}
    - {name: The Trackers, tongue: translation}
    - {name: Trail-Reader, tongue: translation}
    - {name: Truce-Warden, tongue: translation}
    - {name: Uninitiated, tongue: translation}
    - {name: Water-Warden, tongue: translation}
  retired:
    - {form: Mvuzi, instead: Ruwozi, why: "built on an Earth word, the lion-clan"}
    - {form: Kambezi, instead: Kolembozi, why: "built on an Earth place name, the crocodile-clan"}
    - {form: Bombwe, instead: Lobwezi, why: "an Earth word, the baobab-clan"}
    - {form: Indaba, instead: Lubemo, why: "an Earth word, the council of the five"}
    - {form: Indabas, instead: Lubemos, why: "an Earth word, the councils of the five"}
    - {form: Mwánga-Kúbwa, instead: Shorinya Ndafo, why: "an Earth phrase, the Great Brightness"}
    - {form: Mwána-Mvuzi, instead: Nyoli Ruwozi, why: "an Earth phrase, the Daughter of the Lion"}
    - {form: Mvura, instead: Lusheya, why: "an Earth word, a spirit-speaker's name"}
    - {form: Gahiji, instead: Tabeso, why: "an Earth given name, a tracker of the Fénjara"}
    - form: Indala-Bomba
      instead: Heto Lubemo
      why: "built on Earth words, the ground of the council"
    - form: Tambá le ína
      instead: Zherami le zhone
      why: "an Earth phrase, the blessing invocation"
    - form: Nkúlu ngá-kî
      instead: Nkulu enyi-ki
      why: "an Earth word, in the statement of respect"
    - {form: Djámbà sángo, instead: Jamba selemé, why: "an Earth word, in the oath formula"}
    - {form: Ndánga-Sámbo, instead: Ndánga-Sólembe, why: "an Earth word, in the name lists"}
    - {form: Amadú, instead: Amaleso, why: "an Earth given name, in the name lists"}
    - {form: Bákari, instead: Bákeni, why: "an Earth given name, in the name lists"}
    - {form: Bálkiso, instead: Bálesho, why: "an Earth given name, in the name lists"}
    - {form: Fódé, instead: Fódemi, why: "an Earth given name, in the name lists"}
    - {form: Gòngo, instead: Gongwelo, why: "an Earth word, in the name lists"}
    - {form: Jáme, instead: Yámeto, why: "an Earth word, in the name lists"}
    - {form: Kádé, instead: Kádewo, why: "an Earth word, in the name lists"}
    - {form: Lálú, instead: Lálumo, why: "an Earth word, in the name lists"}
    - {form: Lóbó, instead: Lóbezo, why: "an Earth word, in the name lists"}
    - {form: Máji, instead: Máshelo, why: "an Earth word, in the name lists"}
    - {form: Ndági, instead: Ndáfiyo, why: "an Earth word, in the name lists"}
    - {form: Rába, instead: Rábesi, why: "an Earth word, in the name lists"}
    - {form: Tímba, instead: Tímbelo, why: "an Earth word, in the name lists"}
    - {form: Tóbó, instead: Tóbesho, why: "an Earth word, in the name lists"}
    - {form: Zákari, instead: Zákesho, why: "an Earth given name, in the name lists"}
    - {form: Aísha, instead: Aíbesa, why: "an Earth given name, in the name lists"}
    - {form: Amíta, instead: Amífeli, why: "an Earth given name, in the name lists"}
    - {form: Azína, instead: Azímela, why: "an Earth word, in the name lists"}
    - {form: Bálkisa, instead: Bálesha, why: "an Earth given name, in the name lists"}
    - {form: Bénda, instead: Bénduya, why: "an Earth word, in the name lists"}
    - {form: Búnda, instead: Búndeya, why: "an Earth word, in the name lists"}
    - {form: Dínga, instead: Díngoya, why: "an Earth word, in the name lists"}
    - {form: Dòmba, instead: Dombesa, why: "an Earth word, in the name lists"}
    - {form: Fádíma, instead: Fádewa, why: "an Earth given name, in the name lists"}
    - {form: Félicia, instead: Féliwa, why: "an Earth given name, in the name lists"}
    - {form: Gónda, instead: Góndesi, why: "an Earth word, in the name lists"}
    - {form: Habída, instead: Habishe, why: "an Earth given name, in the name lists"}
    - {form: Hájya, instead: Háyeba, why: "an Earth word, in the name lists"}
    - {form: Kénza, instead: Kénzowa, why: "an Earth word, in the name lists"}
    - {form: Kída, instead: Kíshela, why: "an Earth word, in the name lists"}
    - {form: Kóbá, instead: Kóbesa, why: "an Earth word, in the name lists"}
    - {form: Lólá, instead: Lólewa, why: "an Earth given name, in the name lists"}
    - {form: Mádina, instead: Máderi, why: "an Earth given name, in the name lists"}
    - {form: Méja, instead: Méshola, why: "an Earth word, in the name lists"}
    - {form: Mídja, instead: Mídewa, why: "an Earth word, in the name lists"}
    - {form: Mínda, instead: Míndeli, why: "an Earth word, in the name lists"}
    - {form: Mónda, instead: Móndawe, why: "an Earth word, in the name lists"}
    - {form: Múnda, instead: Múndewa, why: "an Earth word, in the name lists"}
    - {form: Nénta, instead: Néntoli, why: "an Earth word, in the name lists"}
    - {form: Nísa, instead: Níseta, why: "an Earth given name, in the name lists"}
    - {form: Núra, instead: Núremi, why: "an Earth given name, in the name lists"}
    - {form: Píka, instead: Píkesa, why: "an Earth word, in the name lists"}
    - {form: Rálya, instead: Rálesi, why: "an Earth word, in the name lists"}
    - {form: Sáída, instead: Sáwemi, why: "an Earth given name, in the name lists"}
    - {form: Sándja, instead: Sándeyo, why: "an Earth word, in the name lists"}
    - {form: Sándra, instead: Sándewa, why: "an Earth given name, in the name lists"}
    - {form: Sénda, instead: Séndowe, why: "an Earth word, in the name lists"}
    - {form: Sílía, instead: Sílowe, why: "an Earth word, in the name lists"}
    - {form: Téma, instead: Témoyi, why: "an Earth word, in the name lists"}
    - {form: Ténda, instead: Téndoli, why: "an Earth word, in the name lists"}
    - {form: Túnda, instead: Túndaye, why: "an Earth word, in the name lists"}
    - {form: Vénda, instead: Wéndasi, why: "an Earth word, in the name lists"}
    - {form: Záida, instead: Záyeli, why: "an Earth given name, in the name lists"}
    - {form: Dómandala, instead: Dóbalanda, why: "an Earth word, in the name lists"}
    - {form: Jómanda, instead: Yómasunde, why: "an Earth word, in the name lists"}
    - {form: Kándala, instead: Kéndalu, why: "an Earth word, in the name lists"}
    - {form: Kómandala, instead: Kómaludi, why: "an Earth word, in the name lists"}
    - {form: Njámala, instead: Nyámelo, why: "an Earth word, in the name lists"}
    - {form: Nómandala, instead: Nómaledi, why: "an Earth word, in the name lists"}
    - {form: Ómandala, instead: Ómaletu, why: "an Earth word, in the name lists"}
    - {form: Ómandalí, instead: Ómalesí, why: "an Earth word, in the name lists"}
    - {form: Sónkandala, instead: Sónkelada, why: "an Earth word, in the name lists"}
    - {form: Tándira, instead: Téndiro, why: "an Earth word, in the name lists"}
    - {form: Tómandala, instead: Tómalinde, why: "an Earth word, in the name lists"}
    - {form: Zákandala, instead: Zákedala, why: "an Earth word, in the name lists"}
    - {form: Zúmandala, instead: Zúmaledi, why: "an Earth word, in the name lists"}
    - {form: Djáo, instead: Jao, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Djéllo, instead: Jelo, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Pándza, instead: Panza, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Gádja, instead: Gaja, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Kádja, instead: Kaja, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Lándja, instead: Lanja, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Nídja, instead: Nija, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Pándja, instead: Panja, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Rádja, instead: Raja, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Tjúma, instead: Juma, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Wándja, instead: Wanja, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Yádja, instead: Yaja, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Málazul, instead: Málazuli, why: "a closing the tongue lacks, in the name lists"}
    - {form: Mphándza, instead: Mpanza, why: "a cluster the tongue lacks, in the name lists"}
    - {form: Pándazul, instead: Pándazuli, why: "a closing the tongue lacks, in the name lists"}
    - {form: Tándizul, instead: Tándizuli, why: "a closing the tongue lacks, in the name lists"}
    - {form: Djámbà, instead: Jamba, why: "a cluster the tongue lacks, in the name lists"}
    - form: Old Kraal
      instead: Old Heto
      why: "an Earth word, the stone enclosures of the lost builders"
    - form: Old Kraals
      instead: Old Hetos
      why: "an Earth word, the stone enclosures of the lost builders"
    - {form: Kraal, instead: Heto, why: "an Earth word, a stone enclosure"}
    - {form: kraal, instead: cattle-fold, why: "an Earth word, a homestead's cattle enclosure"}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Nyáluban (isolate)}}

# terran_analog: the speculative distant connections are to the languages of sub-equatorial Africa
---

Nyáluban is a tongue of the Nyáluban (isolate) family. Fluency measures the sophistication of expression in Nyáluban, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Nyáluban is the principal language of the [[affiliation-nylbtrblntn|Nyáluba Tribal Nation]], a confederation of communities occupying the southern reaches of the [[place-xerathia|Zerathia]] continent. Spoken by an estimated 2-3 million people across dispersed communities, Nyáluban remains primarily an oral language, transmitted through memory, song, and ceremonial recitation rather than through written texts. This linguistic orientation reflects a cultural emphasis on the spoken word, memory, and communal participation in the creation and preservation of knowledge.

The language is remarkable for its sophisticated system of drum and tone communication, which permits long-distance transmission of complex messages across the savanna and through forested regions. This feature, combined with its tonal phonology and rich metaphorical vocabulary, gives Nyáluban a distinctive character among the world's languages.

## How Nyáluban sounds

Nyáluban is pitched and even, spoken as readily as it is drummed.

**The vowels.** _a_, _o_, _e_, _i_ and _u_, all open. One acute marks a high stressed syllable.

**The consonants.** _ny_, _ng_, _mb_, _nd_, _nk_, _sh_, _l_, _b_, _d_ and _w_.

**Clusters.** _ng_, _mb_, _nd_ and _nk_ open syllables.

**Endings.** Nyáluban words end in _-a_, _-o_, _-i_, _-we_, _-la_ or _-zi_.

**What Nyáluban leaves out.** It has no second mark in a word and no closed syllable.

## Phonology

### Consonant System

Nyáluban employs a rich consonantal inventory shaped by areal contact with neighboring language zones and adapted to its characteristic drum and tone communication system:

**Stops:**

Unvoiced
: p, t, k

Voiced
: b, d, g

Affricate
: j (as in "judge")

Implosive
: b', d', g'—voiced stops drawn inward instead of released outward, giving them a hollow, popping quality

**Fricatives:**

Unvoiced
: f, s, sh (as in "ship"), h

Voiced
: z, zh (as the "s" in "measure"), x (velar fricative)

**Nasals:** m, n, ny, ng

**Liquids:** l, r

**Approximants:** w, y

**Distinctive Features:**

- The implosive consonants (b', d', g') create a striking rhythmic pattern and carry grammatical weight
- Vowel length is phonemically significant and frequently marks verb tenses or plurality
- Nasal consonants are numerous and productive in morphological processes
- The language possesses a high degree of consonantal richness, particularly in fricatives and nasals

### Vowel System

Nyáluban distinguishes five cardinal vowels with length distinctions:

**Vowels:** a, e, i, o and u, each short or long

**Diphthongs:** ai, au, ei, eu, oi, ou; these typically function as vowel sequences with distinct syllabic status

**Nasalization:** Vowels can be nasalized; nasalized vowels are phonemically distinct from their oral counterparts and carry grammatical significance (often marking voice)

### Tonal System

Nyáluban is a sophisticated **multi-level tone language** with four to seven contrastive tones depending on analysis:

Pitch is numbered on a five-step scale, 1 the lowest register and 5 the highest—the notation Thaloran scribes use when transcribing drum-speech.

High Tone (5)
: A high, level pitch

Mid-High Tone (4)
: Between high and mid

Mid Tone (3)
: A neutral, middle register

Mid-Low Tone (2)
: Between mid and low

Low Tone (1)
: A low, level pitch

Rising Tone (2–4 or 3–5)
: Rises from a lower register to a higher one

Falling Tone (5–1 or 4–2)
: Falls from a higher register to a lower one

**Grammatical Functions of Tone:**

- Marks word class distinctions (noun vs. verb vs. adjective vs. modifier)
- Indicates subject and object relationships in some contexts
- Carries emotional or pragmatic content (assertion vs. question, politeness, urgency)

### Drum Communication

Nyáluban possesses a sophisticated system of long-distance communication through drum patterns that encode tonal and phonological information. The drum patterns follow the tonal melody of the language, permitting skilled drummers to transmit complex messages over distances of up to 10-20 kilometers. This system encodes:

- Personal names and titles
- Clan affiliations
- Categorical information (warnings, celebrations, calls to assembly)
- Poetic formulae and proverbs
- Historical narratives and genealogies

Different drum types (bass drums, talking drums, pitch-varying drums) produce distinct tonal ranges, and skilled practitioners can transmit messages with considerable nuance and subtlety.

### Phonotactic Patterns

Analysis reveals:

Initial Clusters
: Only a nasal followed by a stop or affricate: mb-, mp-, nd-, nt-, nk-, nj-, nz-. No word opens on a fricative and a stop (sp-, st-, sk-) or on a fricative and a nasal

Syllable Structure
: Open: every syllable is a consonant and a vowel (CV) or a vowel alone (V). A nasal before a stop is the onset of the syllable that follows it, so mb, nd, nk and nj open syllables rather than close them. A consonant may take a glide (w or y) after it, as in bw or ly. No cluster joins a fricative to a stop

Final Consonants
: None; every word closes on a vowel

Word Length
: Moderate; compounds and affixed words create polysyllabic formations, but roots tend toward bisyllabic or monosyllabic forms

Stress Patterns
: Primary stress typically falls on the initial syllable; secondary stress may occur on alternate syllables in longer words. Stress interacts complexly with tonal patterns.

## Grammar Notes

### Word Order

Nyáluban exhibits **Subject-Verb-Object (SVO)** order in main clauses, though pragmatic marking and topicalization can create variation.

### Nominal System

Number
: Singular and plural are marked through a prefix, and sometimes through vowel lengthening or vowel changes

Definiteness
: Articles (demonstratives and identifiality markers) precede the noun

Possession
: Inalienable possession (body parts, kinship relations) is marked through a prefix; alienable possession uses adpositional constructions

### Incorporation and Compounding

The language readily incorporates objects and modifiers directly into verbal and nominal stems, creating complex words that would be expressed as phrases in other languages. This process is productive and semantically transparent.

## Script & Literacy

**Oral Tradition:** Nyáluban is primarily an oral language. Knowledge, history, genealogy, and wisdom are preserved through mnemonic poetic formulae, rhythmic recitation, and drum communication rather than written text. Trained speakers (griots, drummers, storytellers) serve as living repositories of cultural knowledge.

**Recent Written Systems:** In the last 300-400 years, contact with neighboring writing systems has led to sporadic attempts to write Nyáluban. Two systems have emerged:

Syllabic Adaptation
: Some scholars have adapted the scripts of neighboring peoples—chiefly [[skill-qalzscrscrpt|Qalezu Script]] and the voweled [[skill-okhthztscrpt|Okhatha-zethu Script]]—to represent Nyáluban on syllabic principles. This has met with limited adoption.

Phonetic Innovations
: Merchants and some educated individuals have experimented with phonetic systems (approaching alphabetic principles) to record contracts, names, and trade information. These remain marginal.

**Literacy:** Formal literacy in Nyáluban is extremely low, estimated at 1-3% of the population. The cultural emphasis on oral transmission has historically rendered writing unnecessary for the preservation of knowledge. However, as contact intensifies and trade demands increase, interest in written Nyáluban has grown.

## Historical Development

### Proto-Nyáluban

Nyáluban has no known sister language. Its neighbors share some of its sounds through contact, not through descent, so a scholar tracing its words backward finds the trail ending with the language itself.

### Continuity of Oral Tradition

The historical record of Nyáluban is preserved almost entirely through oral tradition. Genealogies and historical narratives maintained by specialized griots provide accounts of linguistic developments and social changes over centuries. These accounts are difficult to date with precision but suggest considerable linguistic stability over the past 1,000 years.

### Contact-Induced Change

In the last 500 years, intensifying contact with neighboring peoples (particularly peoples speaking [[skill-okharclng|Okharik Language]] to the north) has introduced loanwords, particularly in the domains of trade, warfare, and new technologies. These loanwords are often phonetically adapted to fit Nyáluban phonotactic patterns.

### Modern Dialect Variation

Contemporary Nyáluban shows some dialectal variation, though the oral tradition and cultural emphasis on standardized forms has maintained remarkable coherence across dispersed communities:

Urban Dialects
: In larger settlements with more intensive contact, some tone merging and simplification has occurred; loanword frequencies are higher

Rural Dialects
: More conservative; tonal distinctions are more precisely maintained; less extensive borrowing

Merchant Dialects
: More extensively influenced by trade languages; showing some structural simplification and code-switching

## Regional Dialects

### Northern Nyáluban (Northern Savannah Belt)

- Moderate divergence from the prestige standard
- More extensive borrowing from Okharik and trade pidgins
- Slightly reduced tonal complexity; some tone merging in casual speech
- More rapid speech with occasional phonological reduction

### Central Nyáluban (Core Region)

- Most conservative; closest to the prestige standard maintained by griots
- All tonal distinctions are precisely maintained
- Extensive use of elaborate poetic and formulaic speech
- Drum communication systems are highly developed

### Southern Nyáluban (Coastal & Trade Communities)

- Greater innovation; more extensive simplification
- Tone merging more pronounced; approaching a four-tone system
- Significant code-switching with maritime trade pidgins
- More rapid phonological change

## Sample Phrases

Nyalu mi-bóo
: _Greeting; literally "Nyáluba I-greet" (high tone on mi marks greeting register)_

Zherami le zhone
: _Blessing invocation; "Spirits good abide" (formulaic expression of peaceful greeting)_

Nkulu enyi-ki
: _Statement of respect; "Elder [you]-honor" (mid tone marks deference)_

Kabishi njira
: _Trade expression; "merchandise-precious bring-hither" (rising tone marks urgency)_

Jamba selemé
: _Oath formula; "Ancestors witness" (falling tone marks solemnity and finality)_

## Related Languages

Nyáluban maintains linguistic contacts with several neighboring languages:

Okharik
: Historical contact; some loanwords in trade and political vocabulary

Trade Pidgins
: Nyáluban has been a substrate language in the development of maritime pidgins; some influence is visible in coastal dialects

Distant Relationships
: Some scholars propose ancient connections to languages of the far south or east, but evidence is minimal

## Naming Traditions

### Cultural Significance

In Nyáluban culture, names are sacred utterances tied to genealogy, spiritual forces, and environmental signs. The bestowal of a name is a significant communal event, often conducted by elders or griots who consult astrological signs, ancestral guidance, and the circumstances of the child's birth. Names encapsulate individual destiny and familial history, creating a chain of identity that links the person to ancestors and to future generations.

Secret names, known only to close family or spiritual advisors, are believed to provide spiritual protection and power. Public names serve social and ceremonial functions while secret names carry inner significance.

### Naming Patterns

**Given Names (Male):**

- Often reference virtues valued in the culture: courage, wisdom, strength, generosity, honor
- Many incorporate elements marking the season or circumstances of birth
- Frequently bisyllabic with marked tonal patterns
- Common elements include action verbs, animal names (as metaphors for qualities), and celestial references
- Examples: _Kásimo_ (fighter), _Njaka_ (lion-like), _Moboya_ (one-who-brings-light)

**Given Names (Female):**

- Similarly incorporate virtuous qualities; often reference fertility, grace, wisdom, or natural phenomena
- Many contain diminutive or endearing suffixes
- Often employ melodious tonal patterns
- Examples: _Taliba_ (beautiful), _Sándewa_ (graceful), _Zenda_ (morning-brightness)

**Clan Names:**

- Reference the ancestral founder, a geographical feature of significance, or a historical event
- Often elaborate compounds with lengthy histories and associated genealogies
- May include honorific prefixes marking the clan's status or spiritual affiliations
- Examples: _Mpanza_ (river-watchers), _Kúbola_ (mountain-dwellers), _Ndánga-Sólembe_ (the-ancient-gatherers)

### Titles and Honorifics

Individuals of rank accumulate titles reflecting their accomplishments, spiritual status, and role in the community. These titles are often recited in formal contexts as part of the full name and genealogy.

---

## Example Name Lists

_Note: These examples are creations derived from phonetic patterns observed in Nyáluban, incorporating the language's characteristic tonal patterns, implosives, and emphasis on melodious sound._

### Male Given Names (Example Set)

- Amaleso (one-who-stands)
- Bákeni (noble)
- Bálesho (strong-one)
- Dámbani (worthy)
- Fódemi (learned)
- Gaduno (generous)
- Gongwelo (victorious)
- Jao (lion)
- Jelo (skillful)
- Kádewo (brave)
- Kásimo (fighter)
- Kisado (protector)
- Lálumo (bold)
- Lóbezo (powerful)
- Máshelo (one-from-water)
- Mbuka (swift)
- Mondú (wise)
- Ndáfiyo (noble-born)
- Njaka (lion-like)
- Panza (wanderer)
- Rábesi (respected)
- Sálumo (fortunate)
- Sandé (truthful)
- Sandó (strong)
- Tálemo (tall)
- Tamasé (celebrated)
- Tímbelo (worthy)
- Tóbesho (prosperous)
- Yámeto (steadfast)
- Zákesho (remembered)

### Female Given Names (Example Set)

- Adenza (joy-bringer)
- Aíbesa (alive/lively)
- Akisa (graceful)
- Amífeli (beloved)
- Ándiya (precious)
- Azímela (beautiful)
- Bálesha (strong-woman)
- Bénduya (blessed)
- Búndeya (gifted)
- Daliba (elegant)
- Díngoya (shining)
- Dombesa (peaceful)
- Éduma (jewel)
- Fádewa (distinguished)
- Féliwa (happy)
- Gaja (gracious)
- Góndesi (noble)
- Habishe (well-loved)
- Háyeba (excellent)
- Jenda (gentle)
- Juma (beloved)
- Kaja (capable)
- Káleshi (valuable)
- Kénzowa (pure)
- Kíshela (beautiful-one)
- Kóbesa (strong)
- Lálija (dancing)
- Lanja (fair)
- Lenza (bright)
- Lólewa (luminous)
- Máderi (inspired)
- Malya (blessed)
- Méshola (radiant)
- Mídewa (thoughtful)
- Míndeli (devoted)
- Móndawe (wise)
- Múndewa (merciful)
- Ndaka (honorable)
- Néntoli (graceful)
- Nija (noble)
- Níseta (brilliant)
- Njuma (blessed)
- Núremi (light)
- Panja (steadfast)
- Píkesa (excellent)
- Raja (royal)
- Rálesi (celebrated)
- Sálua (peaceful)
- Sándeyo (gracious)
- Sáwemi (fortunate)
- Séndowe (serene)
- Sílowe (faithful)
- Súnemi (gentle)
- Táliba (beautiful)
- Témoyi (steadfast)
- Téndoli (worthy)
- Túndaye (strong)
- Wanja (beloved)
- Wéndasi (victorious)
- Yaja (precious)
- Záyeli (flowering)
- Zenda (morning-brightness)

### Clan Names (Example Set)

- Árambu (the-river-walkers)
- Bándala (the-gatherers)
- Béndawe (the-blessed-ones)
- Dándira (the-defenders)
- Dóbalanda (the-wise-ones)
- Édumba (the-gem-keepers)
- Fámangalí (the-honored-ancestors)
- Gúndala (the-mountain-folk)
- Índawe (the-river-blessed)
- Jándaka (the-skilled-makers)
- Kásiramba (the-lion-hearted)
- Kéndalu (the-keepers)
- Kómaludi (the-wise-council)
- Kúbola (the-mountain-dwellers)
- Lándala (the-travelers)
- Lómbala (the-memory-keepers)
- Lúsani (the-radiant-ones)
- Málazuli (the-bright-hearts)
- Mbándala (the-gatherers)
- Mpanza (the-river-watchers)
- Múgandala (the-strong-ones)
- Ndálude (the-noble-line)
- Ndánga-Sólembe (the-ancient-gatherers)
- Nkúndala (the-hunters)
- Nómaledi (the-peace-keepers)
- Ntalandi (the-speaking-ones)
- Nyámelo (the-warrior-tribe)
- Óbandala (the-unified-line)
- Ódawe (the-blessed-kinship)
- Ódúmbala (the-gem-tribe)
- Ófawe (the-learned-ones)
- Ógandala (the-mighty-ones)
- Ólambala (the-eloquent-ones)
- Ómalesí (the-honored-wise)
- Ómaletu (the-leadership-line)
- Ópala (the-people-of-pride)
- Órindi (the-singers)
- Ótandala (the-standing-firm)
- Pálambe (the-peaceful-folk)
- Pándazuli (the-wandering-blessed)
- Péndala (the-dancers)
- Rábandala (the-respected-line)
- Róbandala (the-powerful-ones)
- Sábandala (the-truth-keepers)
- Sándambala (the-gracious-ones)
- Shándiro (the-moon-watchers)
- Sónkelada (the-singing-tribe)
- Súlamba (the-gentle-speakers)
- Tábandala (the-foundation-keepers)
- Tálamba (the-eloquent-ones)
- Tándizuli (the-firm-blessed)
- Téndiro (the-standing-watchers)
- Tómalinde (the-wise-speakers)
- Túbandala (the-strong-line)
- Udandala (the-united-ones)
- Úlambo (the-wise-counselors)
- Úndala (the-watchers)
- Utúndala (the-protectors)
- Wánduri (the-travelers)
- Yándala (the-joyful-ones)
- Yómasunde (the-warrior-line)
- Zákedala (the-remembered-ones)
- Zímbala (the-shelter-givers)
- Zúmaledi (the-gathering-folk)

## Nyáluban Lexicon {#lexicon}

The five clans of the [[affiliation-nylbtrblntn|Nyáluba Tribal Nation]] keep no books, and this page is the nearest thing to one: the word-hoard of Nyáluban and of its [[skill-nyalbdrm|Drum-Speech]], the stems the griots and the drum-speakers use, what each ending and prefix makes of them, the rules a new word is built by, and the register of every name the setting gives among the five clans.

A Nyáluban noun stands in a class its prefix marks, and an ending says what a word has become: _ruwo_ is the lion, and _[Ruwozi]{.name data-type="affiliation/lineage"}_ is the clan of the lion, the people who are _of_ it. A name of rank is two words, the head first and the thing it stands for after: _Nyoli Ruwozi_ is the Daughter of the Lion, and _[[lore-shorinyadty|Shorinya Ndafo]]_ is the Great Brightness.

The sound of Nyáluban is open and sung. Every syllable is a consonant and a vowel or a vowel alone, every word closes on a vowel, and a nasal before a stop opens many words and stands inside many more: _mb_, _nd_, _nk_, _nj_. No word has a fricative and a stop together, so none opens on _sp_, _st_ or _sk_. Pitch carries meaning, which is what lets a drum speak it; the pages mark a high tone with the acute and a low one with the grave, and neither changes the letter beneath it.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited: a noun in its plain form, a verb in its plain present. A form that closes on a hyphen is a bound stem or prefix, which never stands alone. A word made of smaller parts names the stem or word and the ending the form is made of, joined by `+`, and the form is exactly what the suffix table makes of them.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-nyalbnlng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Word edges

Every syllable is a consonant and a vowel, or a vowel alone. A word opens on a vowel, a single consonant or one of the nasal pairs below, and closes on a vowel. Inside a word a run of two consonants is a nasal pair below, or a consonant with a glide after it, as in _lobwe_; the nasal belongs to the syllable that follows it, so no syllable closes on a consonant. No pair is a fricative with a stop. A bound stem, written with a closing hyphen, closes on anything.

```sql
SELECT CASE edge WHEN 'openCluster' THEN 'Pairs that may open a word' WHEN 'closeConsonant' THEN 'Consonants that close a word' WHEN 'innerCluster' THEN 'Pairs that may stand inside a word' WHEN 'glide' THEN 'Glides that may follow a consonant' WHEN 'vowelPair' THEN 'Vowels that may stand together' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-nyalbnlng' ORDER BY position
```

### Clusters

```sql
SELECT 'Most consonants together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-nyalbnlng'
```

## Building words {#building-words}

Nouns fall into classes marked by prefixes, and a nasal prefix before a stop is how many words come to open on _mb_, _nd_ or _nk_; this note sets the classes out. Two moves make every built word on this page. **An ending on a stem:** each ending says what the stem has become. **A head and what it stands for:** a name of rank or of a place sets the head word first and the word it stands for after it, with no ending between them, and _nu_ joins a person to a clan.

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", attaches AS "Stem", gloss AS "Makes", coalesce(nullif(array_to_string(list_transform(examples, e -> regexp_replace(e, '^(\S+) > ([^\s,;]+)', '_\1_ > _\2_')), ', '), ''), '—') AS "Example"
FROM affixes
WHERE language = 'thalorna-note-skill-nyalbnlng'
ORDER BY position
```

## Words {#words}

### Clan and totem

Four of the five clans the [Long Pact]{.name data-type="lore/law"} binds are named for their totems with _-zi_: the lion-clan are the _Ruwozi_, the crocodile-clan the _[Kolembozi]{.name data-type="affiliation/lineage"}_, the eagle-clan the _[Ngonzi]{.name data-type="affiliation/lineage"}_ and the baobab-clan the _[Lobwezi]{.name data-type="affiliation/lineage"}_. The leopard-clan, the _[Sengala]{.name data-type="affiliation/lineage"}_, carry a name that no ending on this page reaches.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-nyalbnlng' AND field = 'Clan and totem' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### The Pact and the council

The council of the five is a _lubemo_, a sitting that talks until the objections stop, and the [Great Lubemo]{.name data-type="affiliation/governmental"} is the one that renews the Pact. It meets at _[[place-hetolubemo|Heto Lubemo]]_, the enclosure of the council, one of the Old Hetos of the stone-builders.

### The Brightness and the guides

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-nyalbnlng' AND field = 'The Brightness and the guides' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### Given names

A given name is a root with the man's ending _-o_ or the woman's _-a_, and the root is a thing hoped for the child: the tracker [[being-tabesnfnjr|Tabeso nu Fénjara]]'s given name _Tabeso_ is built on following a trail, and the spirit-speaker [Lusheya nu Kolembozi]{.name data-type="being/npc"}'s given name _Lusheya_ on the rain.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-nyalbnlng' AND field = 'Given names' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### Grammar words

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-nyalbnlng' AND field = 'Grammar words' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

## Making names {#making-names}

**A person** carries a given name and a clan or tribe, joined by _nu_: [[being-tabesnfnjr|Tabeso nu Fénjara]] is Tabeso, of the [[affiliation-fenjara|Fénjara]]. A man's given name commonly closes on _-o_, and a woman's on _-a_; the name lists above hold the names in use, and a name of standing such as _Nyoli Ruwozi_ passes from one holder to the next.

**A clan** of the Pact is named for its totem with _-zi_, the Sengala apart. **A place** is named by a head word and what it stands for: _Heto Lubemo_, the enclosure of the council.

**The source** is named the same way: _Shorinya Ndafo_, the Great Brightness, a quality and the word that says how far it reaches.

## Scope {#scope}

The register below holds every name of every note among the five clans, their faith and their tongue. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'folders' THEN 'folder' WHEN 'cultures' THEN 'culture' WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-nyalbnlng'
GROUP BY kind ORDER BY CASE kind WHEN 'folders' THEN 0 WHEN 'cultures' THEN 1 WHEN 'addresses' THEN 2 END
```

## Attested names {#attested-names}

Every name the setting gives a person, place, polity, office or thing among the five clans, with the note where it is met. A name built from this page shows how; a name the tongue uses that is not yet built from it shows `—`, and a name in the reader's tongue is listed so that the register is complete.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'nyaluban' THEN ', [[' || tongue_language || '|Nyáluban]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-nyalbnlng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-nyalbnlng' ORDER BY position
```

## Retired names {#retired-names}

A retired name is one the setting does not write: a word or a name of an Earth language. Each stands below with the name written in its place, and no page writes it, however accented. A `terran_analog` comment names the Earth source on purpose and is not read.

```sql
SELECT '`' || form || '`' AS "Retired",
       coalesce(array_to_string(list_transform(instead, x -> '`' || x || '`'), ', '), '—') AS "Written instead",
       why AS "Why"
FROM retired WHERE language = 'thalorna-note-skill-nyalbnlng' ORDER BY position
```
