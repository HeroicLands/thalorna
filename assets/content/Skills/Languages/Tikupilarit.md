---
shortcode: tikupilaritlng
name: {full: Tikupilarit Language}
type: skill
subType: language
description: "The unwritten tongue of the Ice-Edge People of the far northwestern coast: long words ending on q and k, built from short roots, spoken in the men's houses from the walrus capes to the river villages of the Lake Tundra."
tags: []
data:
  roman: "aceghiklmnpqrstuvwyáéíú0123456789-"
  core: true
  abbreviation: Tiku.
  fields:
    - name: "Sea, ice and sky"
      holds: "The sea and the ice, the weather, the sky and its lights, the land and the directions."
    - name: "Kayak, harpoon and the hunt"
      holds: "The kayak and the skin boat, the harpoon and its float, the hunt and the gear for it."
    - name: "Seal, walrus and whale"
      holds: "The animals of sea, river and tundra, and what is made of them."
    - name: "The men's house and the masks"
      holds: "The men's house, the winter feasts, the masks, the souls, the names and the dead."
    - name: "Kin and village"
      holds: "Kin, the village and the men's house, and a person's standing."
    - {name: "Body and feeling", holds: "The body, the senses, health, needs and the passions."}
    - name: "Everyday speech"
      holds: "Ordinary words for daily life: numbers, pronouns, questions, time, place and the rest."
  affixes:
    - form: "-tiq"
      gloss: "one who does it or keeps it"
      attaches: "added"
      attachesTo: [n, v]
      examples: ["kuvla > kuvlatiq, a hunter", "talqun > talquntiq, a mask maker"]
    - form: "-qun"
      gloss: "the act or the thing of it: a noun made from a verb"
      attaches: "added"
      attachesTo: [v]
      examples: ["tayu > tayuqun, an asking", "simi > simiqun, an exchange"]
    - form: "-rit"
      gloss: "the people of it: a people, or the kin of a place"
      attaches: "added"
      attachesTo: [n]
      examples: ["tikupila > tikupilarit, the Ice-Edge People", "mapi > mapirit, the East People"]
    - form: "-miq"
      gloss: "the place of it"
      attaches: "added"
      attachesTo: [n]
      examples: ["kavru > kavrumiq, Walrus Place", "napa > napamiq, Cliff Place"]
    - form: "-tiaq"
      gloss: "the place in a count: an ordinal"
      attaches: "added"
      attachesTo: [num]
      examples: ["tavlu > tavlutiaq, third"]
  grammar:
    plural:
      - {ending: q, becomes: t}
      - {ending: k, becomes: t}
      - {ending: n, becomes: nit}
      - {ending: "", becomes: t}
    verbs: {invariant: true}
  words:
    - form: "tiku"
      class: n
      field: "Sea, ice and sky"
      gloss: "ice; the sea ice"
      concept: ice
      source: {kind: coined}
    - form: "pila"
      class: n
      field: "Sea, ice and sky"
      gloss: "an edge; the edge of anything"
      source: {kind: coined}
    - form: "tikupila"
      class: n
      field: "Sea, ice and sky"
      gloss: "the ice edge, where the ice fast to the shore meets open water"
      built: ["tiku", "pila"]
      source: {kind: coined}
    - form: "nalvaq"
      class: n
      field: "Sea, ice and sky"
      gloss: "the sea; open water"
      concept: [sea, ocean]
      source: {kind: coined}
    - form: "manik"
      class: n
      field: "Sea, ice and sky"
      gloss: "a shore; a beach"
      concept: shore
      source: {kind: coined}
    - form: "kitmak"
      class: n
      field: "Sea, ice and sky"
      gloss: "an island"
      source: {kind: coined}
    - form: "kagaq"
      class: n
      field: "Sea, ice and sky"
      gloss: "a cape; a point of land running out into the sea"
      source: {kind: coined}
    - form: "napa"
      class: n
      field: "Sea, ice and sky"
      gloss: "a cliff; a sea cliff"
      source: {kind: coined}
    - form: "vanik"
      class: n
      field: "Sea, ice and sky"
      gloss: "water; fresh water"
      concept: water
      source: {kind: coined}
    - form: "kigvaq"
      class: n
      field: "Sea, ice and sky"
      gloss: "a river"
      concept: river
      source: {kind: coined}
    - form: "taluq"
      class: n
      field: "Sea, ice and sky"
      gloss: "a lake; a tundra pond"
      concept: lake
      source: {kind: coined}
    - form: "mitak"
      class: n
      field: "Sea, ice and sky"
      gloss: "land; country; the ground under the snow"
      concept: land
      source: {kind: coined}
    - form: "napiq"
      class: n
      field: "Sea, ice and sky"
      gloss: "the tundra; open, treeless, flat country"
      concept: plain-landform
      source: {kind: coined}
    - form: "kalamiq"
      class: n
      field: "Sea, ice and sky"
      gloss: "the sky"
      concept: sky
      source: {kind: coined}
    - form: "piqan"
      class: n
      field: "Sea, ice and sky"
      gloss: "the sun"
      concept: sun
      source: {kind: coined}
    - form: "nalaq"
      class: n
      field: "Sea, ice and sky"
      gloss: "the moon; a month, from one new moon to the next"
      concept: [moon, month]
      source: {kind: coined}
    - form: "kilnaq"
      class: n
      field: "Sea, ice and sky"
      gloss: "a star"
      concept: star
      source: {kind: coined}
    - form: "nalik"
      class: n
      field: "Sea, ice and sky"
      gloss: "snow"
      concept: snow
      source: {kind: coined}
    - form: "pinaq"
      class: n
      field: "Sea, ice and sky"
      gloss: "wind"
      concept: wind
      source: {kind: coined}
    - form: "talmik"
      class: n
      field: "Sea, ice and sky"
      gloss: "night; the long dark of winter"
      concept: night
      source: {kind: coined}
    - form: "qalak"
      class: n
      field: "Sea, ice and sky"
      gloss: "a day; daylight"
      concept: day
      source: {kind: coined}
    - form: "matvak"
      class: n
      field: "Sea, ice and sky"
      gloss: "winter; a year, counted in winters"
      concept: year
      source: {kind: coined}
    - form: "aliq"
      class: n
      field: "Sea, ice and sky"
      gloss: "summer; the season of open water"
      source: {kind: coined}
    - form: "nagaq"
      class: n
      field: "Sea, ice and sky"
      gloss: "spring; the season of the ice edge and the walrus"
      source: {kind: coined}
    - form: "kitiq"
      class: n
      field: "Sea, ice and sky"
      gloss: "autumn; the freezing of the sea"
      source: {kind: coined}
    - form: "tikun"
      class: n
      field: "Sea, ice and sky"
      gloss: "the north; the way toward the ice"
      concept: north
      source: {kind: coined}
    - form: "qaltuk"
      class: n
      field: "Sea, ice and sky"
      gloss: "the south; the way toward the cedar country"
      concept: south
      source: {kind: coined}
    - form: "mapi"
      class: n
      field: "Sea, ice and sky"
      gloss: "the east; the way the kin have gone"
      concept: east
      source: {kind: coined}
    - form: "aliqun"
      class: n
      field: "Sea, ice and sky"
      gloss: "the west; the open sea, where the sun goes down"
      concept: west
      source: {kind: coined}
    - form: "qiraq"
      class: adj
      field: "Sea, ice and sky"
      gloss: "cold, of weather, water or a thing"
      concept: cold
      source: {kind: coined}
    - form: "ulvak"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a kayak: a boat for one hunter, of skin over a driftwood frame, closed but for the hole he sits in"
      source: {kind: coined}
    - form: "kalviaq"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a skin boat: an open boat of split walrus hide over a driftwood frame, carrying a crew or a family"
      source: {kind: coined}
    - form: "kalviaqtiq"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a boat-holder: the owner of a skin boat, who outfits its crew and shares out its catch"
      built: ["kalviaq", "-tiq"]
      source: {kind: coined}
    - form: "naqlik"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a harpoon"
      source: {kind: coined}
    - form: "pikluq"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a toggling head: the loose harpoon head of ivory and stone that turns sideways in the wound and holds"
      source: {kind: coined}
    - form: "tunak"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a float: a whole sealskin blown up and tied to the harpoon line"
      source: {kind: coined}
    - form: "tapluk"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a harpoon line, cut from one bearded-seal hide in a single spiral"
      source: {kind: coined}
    - form: "kuvla"
      class: v
      field: "Kayak, harpoon and the hunt"
      gloss: "to hunt"
      source: {kind: coined}
    - form: "kuvlatiq"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a hunter; a man with his own kayak"
      built: ["kuvla", "-tiq"]
      source: {kind: coined}
    - form: "nali"
      class: v
      field: "Kayak, harpoon and the hunt"
      gloss: "to feed; to provide for others"
      source: {kind: coined}
    - form: "nalitiq"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a provider: a hunter who feeds more houses than his own, the highest standing a man can earn"
      built: ["nali", "-tiq"]
      source: {kind: coined}
    - form: "malqa"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a first catch: a child's first seal, bird or fish, given away whole"
      source: {kind: coined}
    - form: "ivruk"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a gut parka: a hooded rain-shirt sewn from seal intestine, worn in the kayak"
      source: {kind: coined}
    - form: "nuplak"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a sled"
      source: {kind: coined}
    - form: "pimak"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a dog"
      source: {kind: coined}
    - form: "kiqlu"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a bow"
      source: {kind: coined}
    - form: "salaq"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "armor of bone and ivory plates laced together with thong"
      source: {kind: coined}
    - form: "taqva"
      class: n
      field: "Kayak, harpoon and the hunt"
      gloss: "a fish weir: a fence of stakes and willow across a stream, with a trap at its gap"
      source: {kind: coined}
    - form: "ivi"
      class: v
      field: "Kayak, harpoon and the hunt"
      gloss: "to give a drink of fresh water, as a woman gives one to each seal brought in"
      source: {kind: coined}
    - form: "simi"
      class: v
      field: "Kayak, harpoon and the hunt"
      gloss: "to trade; to exchange one thing for another"
      concept: trade
      source: {kind: coined}
    - form: "piluk"
      class: n
      field: "Seal, walrus and whale"
      gloss: "a seal"
      source: {kind: coined}
    - form: "qamik"
      class: n
      field: "Seal, walrus and whale"
      gloss: "a bearded seal, the great seal whose hide makes boot soles and boat lines"
      source: {kind: coined}
    - form: "kavru"
      class: n
      field: "Seal, walrus and whale"
      gloss: "a walrus"
      source: {kind: coined}
    - form: "imlak"
      class: n
      field: "Seal, walrus and whale"
      gloss: "a whale; the great whale of the northern leads"
      source: {kind: coined}
    - form: "nalgaq"
      class: n
      field: "Seal, walrus and whale"
      gloss: "ivory; a walrus tusk"
      source: {kind: coined}
    - form: "milgaq"
      class: n
      field: "Seal, walrus and whale"
      gloss: "seal oil, rendered from blubber, the fuel of every lamp and the sauce of every meal"
      source: {kind: coined}
    - form: "kuplaq"
      class: n
      field: "Seal, walrus and whale"
      gloss: "a bladder; the bladder of a seal, which holds its soul"
      source: {kind: coined}
    - form: "kivak"
      class: n
      field: "Seal, walrus and whale"
      gloss: "a lamp: a shallow dish of stone or clay burning seal oil on a moss wick"
      concept: lamp
      source: {kind: coined}
    - form: "aqtuk"
      class: n
      field: "Seal, walrus and whale"
      gloss: "a caribou"
      source: {kind: coined}
    - form: "pakaq"
      class: n
      field: "Seal, walrus and whale"
      gloss: "a bear; the white bear of the ice"
      source: {kind: coined}
    - form: "kalgaq"
      class: n
      field: "Seal, walrus and whale"
      gloss: "a raven; Raven, who made the land and lost the sun"
      source: {kind: coined}
    - form: "kaniaq"
      class: n
      field: "The men's house and the masks"
      gloss: "a men's house: the great half-buried house where men and boys sleep, work and bathe and the village holds its feasts"
      source: {kind: coined}
    - form: "pagik"
      class: n
      field: "The men's house and the masks"
      gloss: "a house; a sod house where women, girls and small children live"
      concept: abode
      source: {kind: coined}
    - form: "aqsun"
      class: n
      field: "The men's house and the masks"
      gloss: "a fire bath: the dry heat of the men's house fire, taken with the door shut"
      source: {kind: coined}
    - form: "talqun"
      class: n
      field: "The men's house and the masks"
      gloss: "a mask"
      source: {kind: coined}
    - form: "talquntiq"
      class: n
      field: "The men's house and the masks"
      gloss: "a mask maker, who carves a mask as a shaman describes it"
      built: ["talqun", "-tiq"]
      source: {kind: coined}
    - form: "aklu"
      class: v
      field: "The men's house and the masks"
      gloss: "to go beneath; to dive under the ice"
      source: {kind: coined}
    - form: "aklutiq"
      class: n
      field: "The men's house and the masks"
      gloss: "a shaman: one who goes beneath the sea to the houses of the animals"
      built: ["aklu", "-tiq"]
      source: {kind: coined}
    - form: "tinaq"
      class: n
      field: "The men's house and the masks"
      gloss: "a soul; the soul of a person or an animal"
      source: {kind: coined}
    - form: "kamuq"
      class: n
      field: "The men's house and the masks"
      gloss: "a ghost; one of the dead"
      source: {kind: coined}
    - form: "kilu"
      class: n
      field: "The men's house and the masks"
      gloss: "a name; a name that has been carried before"
      concept: name-noun
      source: {kind: coined}
    - form: "kilutiq"
      class: n
      field: "The men's house and the masks"
      gloss: "a namesake: one who carries a dead person's name, and with it something of that person"
      built: ["kilu", "-tiq"]
      source: {kind: coined}
    - form: "tamak"
      class: n
      field: "The men's house and the masks"
      gloss: "a feast; a gift feast"
      source: {kind: coined}
    - form: "malu"
      class: v
      field: "The men's house and the masks"
      gloss: "to run"
      concept: run
      source: {kind: coined}
    - form: "malutiq"
      class: n
      field: "The men's house and the masks"
      gloss: "a messenger: a runner who carries one village's invitation and requests to another"
      built: ["malu", "-tiq"]
      source: {kind: coined}
    - form: "kalvi"
      class: v
      field: "The men's house and the masks"
      gloss: "to dance"
      source: {kind: coined}
    - form: "tumvak"
      class: n
      field: "The men's house and the masks"
      gloss: "a drum: a hoop of driftwood covered with walrus stomach, struck from below with a wand"
      source: {kind: coined}
    - form: "tayu"
      class: v
      field: "The men's house and the masks"
      gloss: "to ask; to ask for something"
      concept: ask
      source: {kind: coined}
    - form: "tayuqun"
      class: n
      field: "The men's house and the masks"
      gloss: "an asking; the Asking, the masked dance that asks the animals to come"
      built: ["tayu", "-qun"]
      source: {kind: coined}
    - form: "nuqan"
      class: n
      field: "The men's house and the masks"
      gloss: "a rule; one of the Rules the elders teach"
      concept: rule
      source: {kind: coined}
    - form: "kipi"
      class: v
      field: "The men's house and the masks"
      gloss: "to give way; to step aside and make room"
      source: {kind: coined}
    - form: "kipirit"
      class: n
      field: "The men's house and the masks"
      gloss: "Those Who Give Way: the coast's name for the older people of the eastern tundra"
      built: ["kipi", "-rit"]
      source: {kind: coined}
    - form: "talik"
      class: n
      field: "Kin and village"
      gloss: "a person"
      concept: [person, human]
      source: {kind: coined}
    - form: "uvaq"
      class: n
      field: "Kin and village"
      gloss: "a man"
      concept: man
      source: {kind: coined}
    - form: "atvak"
      class: n
      field: "Kin and village"
      gloss: "a woman"
      concept: woman
      source: {kind: coined}
    - form: "kiliq"
      class: n
      field: "Kin and village"
      gloss: "a child"
      concept: child
      source: {kind: coined}
    - form: "umaq"
      class: n
      field: "Kin and village"
      gloss: "a mother"
      concept: mother
      source: {kind: coined}
    - form: "utak"
      class: n
      field: "Kin and village"
      gloss: "a father"
      concept: father
      source: {kind: coined}
    - form: "talvaq"
      class: n
      field: "Kin and village"
      gloss: "a village; the people of one men's house"
      concept: community
      source: {kind: coined}
    - form: "utkiq"
      class: n
      field: "Kin and village"
      gloss: "an elder"
      concept: elder
      source: {kind: coined}
    - form: "kali"
      class: v
      field: "Kin and village"
      gloss: "to speak; to say"
      concept: [speak, say]
      source: {kind: coined}
    - form: "kalitiq"
      class: n
      field: "Kin and village"
      gloss: "a speaker: the elder who speaks first and last at a men's house council"
      built: ["kali", "-tiq"]
      source: {kind: coined}
    - form: "ukanaq"
      class: n
      field: "Kin and village"
      gloss: "one without a provider: a widow, an orphan or an old person fed from the catch of others"
      source: {kind: coined}
    - form: "tiqlak"
      class: n
      field: "Kin and village"
      gloss: "a youth of the men's house: a boy who sleeps there and hunts, but has no wife and no kayak of his own"
      source: {kind: coined}
    - form: "tikupilarit"
      class: n
      field: "Kin and village"
      gloss: "the Ice-Edge People; one of them"
      built: ["tikupila", "-rit"]
      source: {kind: coined}
    - form: "mapirit"
      class: n
      field: "Kin and village"
      gloss: "the East People: the kin who have gone east along the ice"
      built: ["mapi", "-rit"]
      source: {kind: coined}
    - form: "naku"
      class: part
      field: "Everyday speech"
      gloss: "not; stands before the word it denies"
      concept: not
      source: {kind: coined}
    - form: "ika"
      class: pron
      field: "Everyday speech"
      gloss: "I; me"
      concept: i
      source: {kind: coined}
    - form: "aqi"
      class: pron
      field: "Everyday speech"
      gloss: "you, one person"
      concept: you-reference
      source: {kind: coined}
    - form: "ta"
      class: pron
      field: "Everyday speech"
      gloss: "he; she; it"
      concept: [he, she, it]
      source: {kind: coined}
    - form: "ikat"
      class: pron
      field: "Everyday speech"
      gloss: "we; us"
      concept: we
      source: {kind: coined}
    - form: "aqit"
      class: pron
      field: "Everyday speech"
      gloss: "you, more than one"
      source: {kind: coined}
    - form: "tat"
      class: pron
      field: "Everyday speech"
      gloss: "they; them"
      concept: they
      source: {kind: coined}
    - form: "ikan"
      class: pron
      field: "Everyday speech"
      gloss: "my; mine, standing before what is owned"
      concept: my
      source: {kind: coined}
    - form: "aqin"
      class: pron
      field: "Everyday speech"
      gloss: "your; yours, standing before what is owned"
      concept: your
      source: {kind: coined}
    - form: "ikatan"
      class: pron
      field: "Everyday speech"
      gloss: "our; ours, standing before what is owned"
      concept: our
      source: {kind: coined}
    - form: "qa"
      class: part
      field: "Everyday speech"
      gloss: "the word that opens a question asking yes or no"
      concept: question-polar
      source: {kind: coined}
    - form: "sakin"
      class: pron
      field: "Everyday speech"
      gloss: "who?"
      concept: question-who
      source: {kind: coined}
    - form: "sana"
      class: pron
      field: "Everyday speech"
      gloss: "what?"
      concept: question-what
      source: {kind: coined}
    - form: "simak"
      class: pron
      field: "Everyday speech"
      gloss: "which?"
      concept: question-which
      source: {kind: coined}
    - form: "sami"
      class: pron
      field: "Everyday speech"
      gloss: "where?"
      concept: question-where
      source: {kind: coined}
    - form: "siqa"
      class: pron
      field: "Everyday speech"
      gloss: "when?"
      concept: question-when
      source: {kind: coined}
    - form: "sapik"
      class: pron
      field: "Everyday speech"
      gloss: "why?"
      concept: question-why
      source: {kind: coined}
    - form: "satu"
      class: pron
      field: "Everyday speech"
      gloss: "how?"
      concept: question-how
      source: {kind: coined}
    - form: "sakaq"
      class: pron
      field: "Everyday speech"
      gloss: "how many? how much?"
      concept: [question-how-many, question-how-much]
      source: {kind: coined}
    - form: "ama"
      class: call
      field: "Everyday speech"
      gloss: "yes"
      concept: "yes"
      source: {kind: coined}
    - form: "kat"
      class: call
      field: "Everyday speech"
      gloss: "no"
      concept: "no"
      source: {kind: coined}
    - form: "tavi"
      class: call
      field: "Everyday speech"
      gloss: "the greeting at a door or a landing: you have come"
      concept: [hello, expression-welcome]
      source: {kind: coined}
    - form: "pinaku"
      class: call
      field: "Everyday speech"
      gloss: "goodbye; the word at parting"
      concept: goodbye
      source: {kind: coined}
    - form: "aqavi"
      class: call
      field: "Everyday speech"
      gloss: "thank you"
      concept: expression-thank-you
      source: {kind: coined}
    - form: "inak"
      class: num
      field: "Everyday speech"
      gloss: "one"
      concept: one
      source: {kind: coined}
    - form: "maqan"
      class: num
      field: "Everyday speech"
      gloss: "two"
      concept: two
      source: {kind: coined}
    - form: "tavlu"
      class: num
      field: "Everyday speech"
      gloss: "three"
      concept: three
      source: {kind: coined}
    - form: "siqan"
      class: num
      field: "Everyday speech"
      gloss: "four"
      concept: four
      source: {kind: coined}
    - form: "tamaq"
      class: num
      field: "Everyday speech"
      gloss: "five; a hand's count"
      concept: five
      source: {kind: coined}
    - form: "tamik"
      class: n
      field: "Body and feeling"
      gloss: "a hand"
      concept: hand
      source: {kind: coined}
    - form: "ipak"
      class: adv
      field: "Everyday speech"
      gloss: "across; over to the other side, as the count crosses to the second hand"
      concept: across
      source: {kind: coined}
    - form: "ipak inak"
      class: num
      field: "Everyday speech"
      gloss: "six"
      concept: six
      built: ["ipak", "inak"]
      source: {kind: coined}
    - form: "ipak maqan"
      class: num
      field: "Everyday speech"
      gloss: "seven"
      concept: seven
      built: ["ipak", "maqan"]
      source: {kind: coined}
    - form: "ipak tavlu"
      class: num
      field: "Everyday speech"
      gloss: "eight"
      concept: eight
      built: ["ipak", "tavlu"]
      source: {kind: coined}
    - form: "ipak siqan"
      class: num
      field: "Everyday speech"
      gloss: "nine"
      concept: nine
      built: ["ipak", "siqan"]
      source: {kind: coined}
    - form: "apqan"
      class: num
      field: "Everyday speech"
      gloss: "ten; both hands"
      concept: ten
      source: {kind: coined}
    - form: "nimak"
      class: adj
      field: "Everyday speech"
      gloss: "whole; all of one thing"
      concept: whole
      source: {kind: coined}
    - form: "talik nimak"
      class: num
      field: "Everyday speech"
      gloss: "twenty: a whole person, fingers and toes"
      concept: twenty
      built: ["talik", "nimak"]
      source: {kind: coined}
    - form: "itqaq"
      class: num
      field: "Everyday speech"
      gloss: "a hundred; a great count"
      concept: hundred
      source: {kind: coined}
    - form: "apqan itqaq"
      class: num
      field: "Everyday speech"
      gloss: "a thousand: ten hundreds"
      concept: thousand
      built: ["apqan", "itqaq"]
      source: {kind: coined}
    - form: "naku inak"
      class: num
      field: "Everyday speech"
      gloss: "none; nothing at all, as a count"
      concept: [zero, none]
      built: ["naku", "inak"]
      source: {kind: coined}
    - form: "inaktiaq"
      class: adj
      field: "Everyday speech"
      gloss: "first in ordinal position; first in a sequence"
      concept: [first, first-sequence]
      built: ["inak", "-tiaq"]
      source: {kind: coined}
    - form: "maqantiaq"
      class: adj
      field: "Everyday speech"
      gloss: "second"
      concept: second
      built: ["maqan", "-tiaq"]
      source: {kind: coined}
    - form: "tavlutiaq"
      class: adj
      field: "Everyday speech"
      gloss: "third"
      concept: third
      built: ["tavlu", "-tiaq"]
      source: {kind: coined}
    - form: "tamaqtiaq"
      class: adj
      field: "Everyday speech"
      gloss: "fifth; any number with -tiaq gives its place in a count"
      concept: ordinal-construction
      built: ["tamaq", "-tiaq"]
      source: {kind: coined}
    - form: "kiva"
      class: v
      field: "Everyday speech"
      gloss: "to see"
      concept: see-verb
      source: {kind: coined}
    - form: "amu"
      class: v
      field: "Everyday speech"
      gloss: "to eat"
      concept: eat
      source: {kind: coined}
    - form: "sapi"
      class: v
      field: "Everyday speech"
      gloss: "to drink"
      concept: drink-verb
      source: {kind: coined}
    - form: "kavi"
      class: v
      field: "Everyday speech"
      gloss: "to give"
      concept: give
      source: {kind: coined}
    - form: "pira"
      class: v
      field: "Everyday speech"
      gloss: "to take"
      concept: take
      source: {kind: coined}
    - form: "kati"
      class: v
      field: "Everyday speech"
      gloss: "to go"
      concept: go
      source: {kind: coined}
    - form: "maki"
      class: v
      field: "Everyday speech"
      gloss: "to come"
      concept: come
      source: {kind: coined}
    - form: "tuqan"
      class: n
      field: "Everyday speech"
      gloss: "fire"
      concept: fire
      source: {kind: coined}
    - form: "umik"
      class: adj
      field: "Everyday speech"
      gloss: "good"
      concept: good
      source: {kind: coined}
    - form: "qiliq"
      class: adj
      field: "Everyday speech"
      gloss: "bad"
      concept: bad
      source: {kind: coined}
    - form: "kalaq"
      class: adj
      field: "Everyday speech"
      gloss: "big; large"
      concept: big
      source: {kind: coined}
    - form: "nuka"
      class: adj
      field: "Everyday speech"
      gloss: "small; little"
      concept: small
      source: {kind: coined}
    - form: "talvi"
      class: adv
      field: "Everyday speech"
      gloss: "yesterday"
      concept: yesterday
      source: {kind: coined}
    - form: "kitva"
      class: adv
      field: "Everyday speech"
      gloss: "tomorrow"
      concept: tomorrow
      source: {kind: coined}
    - form: "aqavu"
      class: v
      field: "Everyday speech"
      gloss: "to thank"
      concept: thank-verb
      source: {kind: coined}
    - form: "tumaq"
      class: n
      field: "Seal, walrus and whale"
      gloss: "a fish"
      concept: fish
      source: {kind: coined}
    - form: "aqiyak"
      class: n
      field: "Seal, walrus and whale"
      gloss: "a bird"
      concept: bird
      source: {kind: coined}
    - form: "uyak"
      class: n
      field: "Sea, ice and sky"
      gloss: "a stone; a rock"
      concept: [stone, rock]
      source: {kind: coined}
    - form: "sakit"
      class: pron
      field: "Everyday speech"
      gloss: "whose?"
      concept: question-whose
      source: {kind: coined}
    - form: "sakimi"
      class: pron
      field: "Everyday speech"
      gloss: "to whom?"
      concept: question-to-whom
      source: {kind: coined}
    - form: "samivak"
      class: pron
      field: "Everyday speech"
      gloss: "from where?"
      concept: question-from-where
      source: {kind: coined}
    - form: "sanami"
      class: pron
      field: "Everyday speech"
      gloss: "what for? for what purpose?"
      concept: question-for-what-purpose
      source: {kind: coined}
    - form: "sana kali"
      class: call
      field: "Everyday speech"
      gloss: "what did you say? the question asking a speaker to say it again or plainer"
      concept: question-clarification
      built: ["sana", "kali"]
      source: {kind: coined}
    - form: "kivaqun"
      class: n
      field: "Body and feeling"
      gloss: "a sight; what is seen"
      concept: see-noun
      built: ["kiva", "-qun"]
      source: {kind: coined}
    - form: "sunga"
      class: v
      field: "Body and feeling"
      gloss: "to hear"
      concept: hear-verb
      source: {kind: coined}
    - form: "sungaqun"
      class: n
      field: "Body and feeling"
      gloss: "a sound"
      concept: hear-noun
      built: ["sunga", "-qun"]
      source: {kind: coined}
    - form: "paqvangya"
      class: v
      field: "Body and feeling"
      gloss: "to smell"
      concept: smell-verb
      source: {kind: coined}
    - form: "paqvangyaqun"
      class: n
      field: "Body and feeling"
      gloss: "a smell; a scent"
      concept: smell-noun
      built: ["paqvangya", "-qun"]
      source: {kind: coined}
    - form: "mapu"
      class: v
      field: "Body and feeling"
      gloss: "to taste"
      concept: taste-verb
      source: {kind: coined}
    - form: "mapuqun"
      class: n
      field: "Body and feeling"
      gloss: "a taste; a flavour"
      concept: taste-noun
      built: ["mapu", "-qun"]
      source: {kind: coined}
    - form: "kaqaruya"
      class: v
      field: "Body and feeling"
      gloss: "to touch; to feel with the hand"
      concept: touch-verb
      source: {kind: coined}
    - form: "kaqaruyaqun"
      class: n
      field: "Body and feeling"
      gloss: "a touch"
      concept: touch-noun
      built: ["kaqaruya", "-qun"]
      source: {kind: coined}
    - form: "tina"
      class: v
      field: "Body and feeling"
      gloss: "to look"
      concept: look
      source: {kind: coined}
    - form: "tinaki"
      class: v
      field: "Body and feeling"
      gloss: "to watch; to observe attentively"
      concept: watch
      source: {kind: coined}
    - form: "naspa"
      class: n
      field: "Body and feeling"
      gloss: "appearance"
      concept: appearance
      source: {kind: coined}
    - form: "telvuayita"
      class: adj
      field: "Body and feeling"
      gloss: "visible"
      concept: visible
      source: {kind: coined}
    - form: "naku telvuayita"
      class: adj
      field: "Body and feeling"
      gloss: "invisible"
      concept: invisible
      built: ["naku", "telvuayita"]
      source: {kind: coined}
    - form: "savtiktu"
      class: v
      field: "Body and feeling"
      gloss: "to listen"
      concept: listen
      source: {kind: coined}
    - form: "piset"
      class: n
      field: "Body and feeling"
      gloss: "noise"
      concept: noise
      source: {kind: coined}
    - form: "vavikak"
      class: n
      field: "Body and feeling"
      gloss: "voice"
      concept: voice
      source: {kind: coined}
    - form: "walmiakak"
      class: n
      field: "Body and feeling"
      gloss: "silence"
      concept: silence
      source: {kind: coined}
    - form: "yuchun"
      class: adj
      field: "Body and feeling"
      gloss: "loud"
      concept: loud
      source: {kind: coined}
    - form: "chupa"
      class: adj
      field: "Body and feeling"
      gloss: "quiet"
      concept: quiet
      source: {kind: coined}
    - form: "tara"
      class: adj
      field: "Body and feeling"
      gloss: "fragrant"
      concept: fragrant
      source: {kind: coined}
    - form: "aqeq"
      class: adj
      field: "Body and feeling"
      gloss: "foul-smelling; having an unpleasant smell"
      concept: foul
      source: {kind: coined}
    - form: "purapiq"
      class: adj
      field: "Body and feeling"
      gloss: "sweet"
      concept: sweet
      source: {kind: coined}
    - form: "sapu"
      class: adj
      field: "Body and feeling"
      gloss: "sour"
      concept: sour
      source: {kind: coined}
    - form: "qugakvin"
      class: adj
      field: "Body and feeling"
      gloss: "bitter"
      concept: bitter
      source: {kind: coined}
    - form: "tavugen"
      class: adj
      field: "Body and feeling"
      gloss: "salty"
      concept: salty
      source: {kind: coined}
    - form: "karvu"
      class: v
      field: "Body and feeling"
      gloss: "to feel a sensation"
      concept: feel-verb
      source: {kind: coined}
    - form: "kika"
      class: n
      field: "Body and feeling"
      gloss: "sensation"
      concept: sensation
      source: {kind: coined}
    - form: "kuga"
      class: adj
      field: "Body and feeling"
      gloss: "smooth"
      concept: smooth
      source: {kind: coined}
    - form: "umku"
      class: adj
      field: "Body and feeling"
      gloss: "rough"
      concept: rough
      source: {kind: coined}
    - form: "malak"
      class: adj
      field: "Body and feeling"
      gloss: "soft"
      concept: soft
      source: {kind: coined}
    - form: "uqunun"
      class: adj
      field: "Body and feeling"
      gloss: "hard to the touch; firm rather than soft"
      concept: hard-texture
      source: {kind: coined}
    - form: "ugivu"
      class: v
      field: "Body and feeling"
      gloss: "to notice"
      concept: notice
      source: {kind: coined}
    - form: "nita"
      class: v
      field: "Body and feeling"
      gloss: "perceive"
      concept: perceive
      source: {kind: coined}
    - form: "kaqsanga"
      class: v
      field: "Body and feeling"
      gloss: "recognize"
      concept: recognize
      source: {kind: coined}
    - form: "aktaltavqa"
      class: v
      field: "Body and feeling"
      gloss: "seem"
      concept: seem
      source: {kind: coined}
    - form: "kititaq"
      class: n
      field: "Body and feeling"
      gloss: "wrath; intense anger"
      concept: wrath
      source: {kind: coined}
    - form: "uqan"
      class: n
      field: "Body and feeling"
      gloss: "envy"
      concept: envy
      source: {kind: coined}
    - form: "pala"
      class: v
      field: "Everyday speech"
      gloss: "to hope"
      concept: hope-verb
      source: {kind: coined}
    - form: "palaqun"
      class: n
      field: "Body and feeling"
      gloss: "hope"
      concept: hope
      built: ["pala", "-qun"]
      source: {kind: coined}
    - form: "numiyaq"
      class: n
      field: "Body and feeling"
      gloss: "greed"
      concept: greed
      source: {kind: coined}
    - form: "vigukten"
      class: n
      field: "Body and feeling"
      gloss: "boasting"
      concept: boasting
      source: {kind: coined}
    - form: "tiapaq"
      class: n
      field: "Body and feeling"
      gloss: "pride"
      concept: pride
      source: {kind: coined}
    - form: "mapalin"
      class: n
      field: "Body and feeling"
      gloss: "lust"
      concept: lust
      source: {kind: coined}
    - form: "nalena"
      class: n
      field: "Body and feeling"
      gloss: "despair"
      concept: despair
      source: {kind: coined}
    - form: "katan"
      class: n
      field: "Body and feeling"
      gloss: "disappointment"
      concept: disappointment
      source: {kind: coined}
    - form: "tatuk"
      class: n
      field: "Body and feeling"
      gloss: "faith"
      concept: faith
      source: {kind: coined}
    - form: "tiyiti"
      class: n
      field: "Body and feeling"
      gloss: "joy"
      concept: joy
      source: {kind: coined}
    - form: "ulamkak"
      class: n
      field: "Body and feeling"
      gloss: "happiness"
      concept: happiness
      source: {kind: coined}
    - form: "kaniq"
      class: n
      field: "Body and feeling"
      gloss: "pleasure"
      concept: pleasure
      source: {kind: coined}
    - form: "tangu"
      class: n
      field: "Body and feeling"
      gloss: "contentment"
      concept: contentment
      source: {kind: coined}
    - form: "mekvakamak"
      class: n
      field: "Body and feeling"
      gloss: "gratitude"
      concept: gratitude
      source: {kind: coined}
    - form: "tuveriq"
      class: n
      field: "Body and feeling"
      gloss: "admiration"
      concept: admiration
      source: {kind: coined}
    - form: "mapasiyuk"
      class: n
      field: "Body and feeling"
      gloss: "trust"
      concept: trust
      source: {kind: coined}
    - form: "patamluvqaq"
      class: n
      field: "Body and feeling"
      gloss: "courage"
      concept: courage
      source: {kind: coined}
    - form: "qivun"
      class: n
      field: "Body and feeling"
      gloss: "anger"
      concept: anger
      source: {kind: coined}
    - form: "murqeq"
      class: n
      field: "Body and feeling"
      gloss: "hatred"
      concept: hatred
      source: {kind: coined}
    - form: "kiliriarik"
      class: n
      field: "Body and feeling"
      gloss: "jealousy"
      concept: jealousy
      source: {kind: coined}
    - form: "muspaq"
      class: n
      field: "Body and feeling"
      gloss: "fear"
      concept: fear
      source: {kind: coined}
    - form: "miraq"
      class: n
      field: "Body and feeling"
      gloss: "terror"
      concept: terror
      source: {kind: coined}
    - form: "akaq"
      class: n
      field: "Body and feeling"
      gloss: "sadness"
      concept: sadness
      source: {kind: coined}
    - form: "quyisulvaq"
      class: n
      field: "Body and feeling"
      gloss: "grief"
      concept: grief
      source: {kind: coined}
    - form: "yunuq"
      class: n
      field: "Body and feeling"
      gloss: "shame"
      concept: shame
      source: {kind: coined}
    - form: "nanarmula"
      class: n
      field: "Body and feeling"
      gloss: "guilt"
      concept: guilt
      source: {kind: coined}
    - form: "wiqan"
      class: n
      field: "Body and feeling"
      gloss: "regret"
      concept: regret
      source: {kind: coined}
    - form: "sisaq"
      class: n
      field: "Body and feeling"
      gloss: "humility"
      concept: humility
      source: {kind: coined}
    - form: "amuk"
      class: n
      field: "Body and feeling"
      gloss: "confidence"
      concept: confidence
      source: {kind: coined}
    - form: "itayak"
      class: n
      field: "Body and feeling"
      gloss: "embarrassment"
      concept: embarrassment
      source: {kind: coined}
    - form: "pigteq"
      class: n
      field: "Body and feeling"
      gloss: "compassion"
      concept: compassion
      source: {kind: coined}
    - form: "kulvigtengiq"
      class: n
      field: "Body and feeling"
      gloss: "pity"
      concept: pity
      source: {kind: coined}
    - form: "papivkicha"
      class: n
      field: "Body and feeling"
      gloss: "sympathy"
      concept: sympathy
      source: {kind: coined}
    - form: "qukivigi"
      class: n
      field: "Body and feeling"
      gloss: "resentment"
      concept: resentment
      source: {kind: coined}
    - form: "mulanqumuk"
      class: n
      field: "Body and feeling"
      gloss: "contempt"
      concept: contempt
      source: {kind: coined}
    - form: "pirupina"
      class: v
      field: "Everyday speech"
      gloss: "to forgive"
      concept: forgive-verb
      source: {kind: coined}
    - form: "pirupinaqun"
      class: n
      field: "Body and feeling"
      gloss: "forgiveness"
      concept: forgiveness
      built: ["pirupina", "-qun"]
      source: {kind: coined}
    - form: "tumirik"
      class: n
      field: "Body and feeling"
      gloss: "desire"
      concept: desire
      source: {kind: coined}
    - form: "ikalaq"
      class: n
      field: "Body and feeling"
      gloss: "longing"
      concept: longing
      source: {kind: coined}
    - form: "qungistak"
      class: n
      field: "Body and feeling"
      gloss: "satisfaction (desire fulfilled)"
      concept: satisfaction
      source: {kind: coined}
    - form: "cheluteq"
      class: n
      field: "Body and feeling"
      gloss: "frustration"
      concept: frustration
      source: {kind: coined}
    - form: "kukamik"
      class: n
      field: "Body and feeling"
      gloss: "curiosity"
      concept: curiosity
      source: {kind: coined}
    - form: "qamaspaq"
      class: n
      field: "Body and feeling"
      gloss: "confusion"
      concept: confusion
      source: {kind: coined}
    - form: "utamki"
      class: v
      field: "Everyday speech"
      gloss: "doubt"
      concept: doubt-verb
      source: {kind: coined}
    - form: "utamkiqun"
      class: n
      field: "Body and feeling"
      gloss: "doubt"
      concept: doubt
      built: ["utamki", "-qun"]
      source: {kind: coined}
    - form: "quqaq"
      class: n
      field: "Body and feeling"
      gloss: "certainty"
      concept: certainty
      source: {kind: coined}
    - form: "kukan"
      class: n
      field: "Body and feeling"
      gloss: "surprise"
      concept: surprise
      source: {kind: coined}
    - form: "karit"
      class: n
      field: "Body and feeling"
      gloss: "boredom"
      concept: boredom
      source: {kind: coined}
    - form: "ilatek"
      class: n
      field: "Body and feeling"
      gloss: "anticipation"
      concept: anticipation
      source: {kind: coined}
    - form: "kiru"
      class: v
      field: "Everyday speech"
      gloss: "to believe"
      concept: believe
      source: {kind: coined}
    - form: "kiruqun"
      class: n
      field: "Body and feeling"
      gloss: "belief"
      concept: belief
      built: ["kiru", "-qun"]
      source: {kind: coined}
    - form: "qavat"
      class: n
      field: "Body and feeling"
      gloss: "reverence"
      concept: reverence
      source: {kind: coined}
    - form: "tegalaq"
      class: n
      field: "Body and feeling"
      gloss: "awe"
      concept: awe
      source: {kind: coined}
    - form: "yugaleq"
      class: n
      field: "Body and feeling"
      gloss: "romantic love (eros)"
      concept: love-eros
      source: {kind: coined}
    - form: "qalivisik"
      class: n
      field: "Body and feeling"
      gloss: "friendship; affectionate regard between friends (philia)"
      concept: love-philia
      source: {kind: coined}
    - form: "ulan"
      class: n
      field: "Body and feeling"
      gloss: "the love of family (storge)"
      concept: love-storge
      source: {kind: coined}
    - form: "keskak"
      class: n
      field: "Body and feeling"
      gloss: "selfless, universal love (agape)"
      concept: love-agape
      source: {kind: coined}
    - form: "ichingiyi"
      class: n
      field: "Body and feeling"
      gloss: "affection"
      concept: affection
      source: {kind: coined}
    - form: "megu"
      class: n
      field: "Body and feeling"
      gloss: "attraction"
      concept: attraction
      source: {kind: coined}
    - form: "wikuk"
      class: n
      field: "Body and feeling"
      gloss: "intimacy"
      concept: intimacy
      source: {kind: coined}
    - form: "ari"
      class: n
      field: "Body and feeling"
      gloss: "devotion"
      concept: devotion
      source: {kind: coined}
    - form: "mamutuk"
      class: n
      field: "Body and feeling"
      gloss: "loyalty"
      concept: loyalty
      source: {kind: coined}
    - form: "tachalen"
      class: n
      field: "Body and feeling"
      gloss: "companionship; being together with a companion"
      concept: companionship
      source: {kind: coined}
    - form: "yangik"
      class: n
      field: "Body and feeling"
      gloss: "enmity"
      concept: enmity
      source: {kind: coined}
    - form: "kamamin"
      class: n
      field: "Body and feeling"
      gloss: "the head"
      concept: head
      source: {kind: coined}
    - form: "ulak"
      class: n
      field: "Body and feeling"
      gloss: "the hair"
      concept: hair
      source: {kind: coined}
    - form: "mukali"
      class: n
      field: "Body and feeling"
      gloss: "the face"
      concept: face
      source: {kind: coined}
    - form: "muma"
      class: n
      field: "Body and feeling"
      gloss: "the eye"
      concept: eye
      source: {kind: coined}
    - form: "uta"
      class: n
      field: "Body and feeling"
      gloss: "the ear"
      concept: ear
      source: {kind: coined}
    - form: "matengun"
      class: n
      field: "Body and feeling"
      gloss: "the nose"
      concept: nose
      source: {kind: coined}
    - form: "aviapuq"
      class: n
      field: "Body and feeling"
      gloss: "the mouth"
      concept: mouth
      source: {kind: coined}
    - form: "kenut"
      class: n
      field: "Body and feeling"
      gloss: "the lip"
      concept: lip
      source: {kind: coined}
    - form: "putangek"
      class: n
      field: "Body and feeling"
      gloss: "the tooth"
      concept: tooth
      source: {kind: coined}
    - form: "kiangepun"
      class: n
      field: "Body and feeling"
      gloss: "the tongue"
      concept: tongue
      source: {kind: coined}
    - form: "narak"
      class: n
      field: "Body and feeling"
      gloss: "the neck"
      concept: neck
      source: {kind: coined}
    - form: "musa"
      class: n
      field: "Body and feeling"
      gloss: "the shoulder"
      concept: shoulder
      source: {kind: coined}
    - form: "paluk"
      class: n
      field: "Body and feeling"
      gloss: "the arm"
      concept: arm
      source: {kind: coined}
    - form: "tuginguk"
      class: n
      field: "Body and feeling"
      gloss: "the elbow"
      concept: elbow
      source: {kind: coined}
    - form: "nupitu"
      class: n
      field: "Body and feeling"
      gloss: "the finger"
      concept: finger
      source: {kind: coined}
    - form: "pusapuq"
      class: n
      field: "Body and feeling"
      gloss: "the fingernail"
      concept: nail
      source: {kind: coined}
    - form: "utari"
      class: n
      field: "Body and feeling"
      gloss: "the chest"
      concept: chest
      source: {kind: coined}
    - form: "mikika"
      class: n
      field: "Body and feeling"
      gloss: "the breast"
      concept: breast
      source: {kind: coined}
    - form: "ipungaq"
      class: n
      field: "Body and feeling"
      gloss: "the heart"
      concept: heart
      source: {kind: coined}
    - form: "sigiya"
      class: n
      field: "Body and feeling"
      gloss: "the belly"
      concept: belly
      source: {kind: coined}
    - form: "angyik"
      class: n
      field: "Body and feeling"
      gloss: "the back"
      concept: back
      source: {kind: coined}
    - form: "mukak"
      class: n
      field: "Body and feeling"
      gloss: "the hip"
      concept: hip
      source: {kind: coined}
    - form: "nunqit"
      class: n
      field: "Body and feeling"
      gloss: "the leg"
      concept: leg
      source: {kind: coined}
    - form: "pagyisqi"
      class: n
      field: "Body and feeling"
      gloss: "the knee"
      concept: knee
      source: {kind: coined}
    - form: "muna"
      class: n
      field: "Body and feeling"
      gloss: "the foot"
      concept: foot
      source: {kind: coined}
    - form: "quta"
      class: n
      field: "Body and feeling"
      gloss: "the toe"
      concept: toe
      source: {kind: coined}
    - form: "iliya"
      class: n
      field: "Body and feeling"
      gloss: "the skin"
      concept: skin
      source: {kind: coined}
    - form: "taqavak"
      class: n
      field: "Body and feeling"
      gloss: "the bone"
      concept: bone
      source: {kind: coined}
    - form: "kaqiquq"
      class: n
      field: "Body and feeling"
      gloss: "blood"
      concept: blood
      source: {kind: coined}
    - form: "qataq"
      class: n
      field: "Body and feeling"
      gloss: "flesh"
      concept: flesh
      source: {kind: coined}
    - form: "maqin"
      class: n
      field: "Body and feeling"
      gloss: "forehead"
      concept: forehead
      source: {kind: coined}
    - form: "tami"
      class: n
      field: "Body and feeling"
      gloss: "jaw"
      concept: jaw
      source: {kind: coined}
    - form: "ilama"
      class: n
      field: "Body and feeling"
      gloss: "chin"
      concept: chin
      source: {kind: coined}
    - form: "mima"
      class: n
      field: "Body and feeling"
      gloss: "cheek"
      concept: cheek
      source: {kind: coined}
    - form: "ulina"
      class: n
      field: "Body and feeling"
      gloss: "throat"
      concept: throat
      source: {kind: coined}
    - form: "pilvuk"
      class: n
      field: "Body and feeling"
      gloss: "stomach"
      concept: stomach
      source: {kind: coined}
    - form: "vuvu"
      class: n
      field: "Body and feeling"
      gloss: "waist"
      concept: waist
      source: {kind: coined}
    - form: "amupiq"
      class: n
      field: "Body and feeling"
      gloss: "spine"
      concept: spine
      source: {kind: coined}
    - form: "yakinak"
      class: n
      field: "Body and feeling"
      gloss: "buttock"
      concept: buttock
      source: {kind: coined}
    - form: "kulvigla"
      class: n
      field: "Body and feeling"
      gloss: "wrist"
      concept: wrist
      source: {kind: coined}
    - form: "marnaq"
      class: n
      field: "Body and feeling"
      gloss: "palm"
      concept: palm
      source: {kind: coined}
    - form: "anguq"
      class: n
      field: "Body and feeling"
      gloss: "thumb"
      concept: thumb
      source: {kind: coined}
    - form: "intin"
      class: n
      field: "Body and feeling"
      gloss: "thigh"
      concept: thigh
      source: {kind: coined}
    - form: "viqan"
      class: n
      field: "Body and feeling"
      gloss: "ankle"
      concept: ankle
      source: {kind: coined}
    - form: "vatiq"
      class: n
      field: "Body and feeling"
      gloss: "heel"
      concept: heel
      source: {kind: coined}
    - form: "tulavaq"
      class: n
      field: "Body and feeling"
      gloss: "sole"
      concept: sole
      source: {kind: coined}
    - form: "mivaq"
      class: n
      field: "Body and feeling"
      gloss: "toenail"
      concept: toenail
      source: {kind: coined}
    - form: "negyan"
      class: n
      field: "Body and feeling"
      gloss: "muscle"
      concept: muscle
      source: {kind: coined}
    - form: "pulusqi"
      class: n
      field: "Body and feeling"
      gloss: "fat"
      concept: fat
      source: {kind: coined}
    - form: "qunga"
      class: n
      field: "Body and feeling"
      gloss: "sweat (noun)"
      concept: sweat
      source: {kind: coined}
    - form: "nulit"
      class: n
      field: "Body and feeling"
      gloss: "tears"
      concept: tears
      source: {kind: coined}
    - form: "uruq"
      class: n
      field: "Body and feeling"
      gloss: "saliva"
      concept: saliva
      source: {kind: coined}
    - form: "nagiq"
      class: n
      field: "Body and feeling"
      gloss: "brain"
      concept: brain
      source: {kind: coined}
    - form: "iratiq"
      class: n
      field: "Body and feeling"
      gloss: "lung"
      concept: lung
      source: {kind: coined}
    - form: "wapilqek"
      class: n
      field: "Body and feeling"
      gloss: "liver"
      concept: liver
      source: {kind: coined}
    - form: "yigilyan"
      class: n
      field: "Body and feeling"
      gloss: "kidney"
      concept: kidney
      source: {kind: coined}
    - form: "yivutun"
      class: n
      field: "Body and feeling"
      gloss: "intestine"
      concept: intestine
      source: {kind: coined}
    - form: "pivkiqaq"
      class: n
      field: "Body and feeling"
      gloss: "genitals"
      concept: genitals
      source: {kind: coined}
    - form: "piavagli"
      class: n
      field: "Body and feeling"
      gloss: "womb"
      concept: womb
      source: {kind: coined}
    - form: "turviq"
      class: n
      field: "Body and feeling"
      gloss: "penis"
      concept: penis
      source: {kind: coined}
    - form: "pisik"
      class: n
      field: "Body and feeling"
      gloss: "vagina"
      concept: vagina
      source: {kind: coined}
    - form: "agisuk"
      class: n
      field: "Body and feeling"
      gloss: "testicle"
      concept: testicle
      source: {kind: coined}
    - form: "marqa"
      class: n
      field: "Body and feeling"
      gloss: "food"
      concept: food
      source: {kind: coined}
    - form: "sapiqun"
      class: n
      field: "Body and feeling"
      gloss: "a drink"
      concept: drink-noun
      built: ["sapi", "-qun"]
      source: {kind: coined}
    - form: "vangit"
      class: n
      field: "Body and feeling"
      gloss: "air"
      concept: air
      source: {kind: coined}
    - form: "qalqu"
      class: v
      field: "Body and feeling"
      gloss: "to breathe"
      concept: breathe
      source: {kind: coined}
    - form: "qalququn"
      class: n
      field: "Body and feeling"
      gloss: "breath"
      concept: breath
      built: ["qalqu", "-qun"]
      source: {kind: coined}
    - form: "sapitu"
      class: v
      field: "Body and feeling"
      gloss: "to sleep"
      concept: sleep-verb
      source: {kind: coined}
    - form: "sapituqun"
      class: n
      field: "Body and feeling"
      gloss: "sleep"
      concept: sleep-noun
      built: ["sapitu", "-qun"]
      source: {kind: coined}
    - form: "qegyaq"
      class: n
      field: "Body and feeling"
      gloss: "urine"
      concept: urine
      source: {kind: coined}
    - form: "kequ"
      class: v
      field: "Body and feeling"
      gloss: "to urinate"
      concept: urinate
      source: {kind: coined}
    - form: "yilqan"
      class: n
      field: "Body and feeling"
      gloss: "dung"
      concept: dung
      source: {kind: coined}
    - form: "sangmuchukta"
      class: v
      field: "Body and feeling"
      gloss: "to defecate"
      concept: defecate
      source: {kind: coined}
    - form: "nama"
      class: n
      field: "Body and feeling"
      gloss: "warmth"
      concept: warmth
      source: {kind: coined}
    - form: "mangupi"
      class: n
      field: "Body and feeling"
      gloss: "shelter"
      concept: shelter
      source: {kind: coined}
    - form: "qangaq"
      class: n
      field: "Body and feeling"
      gloss: "hunger"
      concept: hunger
      source: {kind: coined}
    - form: "quyi"
      class: adj
      field: "Body and feeling"
      gloss: "hungry"
      concept: hungry
      source: {kind: coined}
    - form: "kimu"
      class: n
      field: "Body and feeling"
      gloss: "thirst"
      concept: thirst
      source: {kind: coined}
    - form: "nikan"
      class: adj
      field: "Body and feeling"
      gloss: "thirsty"
      concept: thirsty
      source: {kind: coined}
    - form: "kiqtak"
      class: n
      field: "Body and feeling"
      gloss: "inhale"
      concept: inhale
      source: {kind: coined}
    - form: "nuqik"
      class: n
      field: "Body and feeling"
      gloss: "exhale"
      concept: exhale
      source: {kind: coined}
    - form: "nalmaniq"
      class: n
      field: "Body and feeling"
      gloss: "suffocate"
      concept: suffocate
      source: {kind: coined}
    - form: "vivangmi"
      class: n
      field: "Body and feeling"
      gloss: "wake"
      concept: wake
      source: {kind: coined}
    - form: "paqi"
      class: adj
      field: "Body and feeling"
      gloss: "awake"
      concept: awake
      source: {kind: coined}
    - form: "kagli"
      class: n
      field: "Body and feeling"
      gloss: "a dream"
      concept: dream
      source: {kind: coined}
    - form: "salavqiq"
      class: n
      field: "Body and feeling"
      gloss: "rest (noun)"
      concept: rest
      source: {kind: coined}
    - form: "kagagtuq"
      class: adj
      field: "Body and feeling"
      gloss: "tired"
      concept: tired
      source: {kind: coined}
    - form: "qalya"
      class: v
      field: "Body and feeling"
      gloss: "to sweat"
      concept: sweat-verb
      source: {kind: coined}
    - form: "ilyegyu"
      class: n
      field: "Body and feeling"
      gloss: "heat"
      concept: heat
      source: {kind: coined}
    - form: "pugu"
      class: n
      field: "Body and feeling"
      gloss: "cold as a bodily need or temperature condition"
      concept: cold-noun
      source: {kind: coined}
    - form: "magu"
      class: adj
      field: "Body and feeling"
      gloss: "hot"
      concept: hot
      source: {kind: coined}
    - form: "kuku"
      class: adj
      field: "Body and feeling"
      gloss: "warm"
      concept: warm
      source: {kind: coined}
    - form: "irak"
      class: adj
      field: "Body and feeling"
      gloss: "cool"
      concept: cool
      source: {kind: coined}
    - form: "chetun"
      class: n
      field: "Body and feeling"
      gloss: "freeze"
      concept: freeze
      source: {kind: coined}
    - form: "payuk"
      class: n
      field: "Body and feeling"
      gloss: "burn"
      concept: burn
      source: {kind: coined}
    - form: "yulit"
      class: n
      field: "Body and feeling"
      gloss: "safety"
      concept: safety
      source: {kind: coined}
    - form: "sekva"
      class: n
      field: "Body and feeling"
      gloss: "danger"
      concept: danger
      source: {kind: coined}
    - form: "aktaq"
      class: n
      field: "Body and feeling"
      gloss: "protection"
      concept: protection
      source: {kind: coined}
    - form: "varma"
      class: n
      field: "Body and feeling"
      gloss: "sex"
      concept: sex
      source: {kind: coined}
    - form: "niqu"
      class: n
      field: "Body and feeling"
      gloss: "conceive"
      concept: conceive
      source: {kind: coined}
    - form: "niququn"
      class: n
      field: "Body and feeling"
      gloss: "pregnancy"
      concept: pregnancy
      built: ["niqu", "-qun"]
      source: {kind: coined}
    - form: "miki"
      class: adj
      field: "Body and feeling"
      gloss: "pregnant"
      concept: pregnant
      source: {kind: coined}
    - form: "tusqaq"
      class: n
      field: "Body and feeling"
      gloss: "give birth"
      concept: give-birth
      source: {kind: coined}
    - form: "urqaq"
      class: n
      field: "Body and feeling"
      gloss: "birth"
      concept: birth
      source: {kind: coined}
    - form: "kuva"
      class: v
      field: "Body and feeling"
      gloss: "to nurse a child; to feed a child at the breast"
      concept: nurse
      source: {kind: coined}
    - form: "vusa"
      class: n
      field: "Body and feeling"
      gloss: "grow"
      concept: grow
      source: {kind: coined}
    - form: "taginqi"
      class: v
      field: "Body and feeling"
      gloss: "to age; to grow older"
      concept: age-verb
      source: {kind: coined}
    - form: "kagiapu"
      class: v
      field: "Everyday speech"
      gloss: "to die"
      concept: die
      source: {kind: coined}
    - form: "kagiapuqun"
      class: n
      field: "Body and feeling"
      gloss: "death"
      concept: death
      built: ["kagiapu", "-qun"]
      source: {kind: coined}
    - form: "minqayuk"
      class: adj
      field: "Body and feeling"
      gloss: "dead"
      concept: dead
      source: {kind: coined}
    - form: "tataguaqa"
      class: adj
      field: "Body and feeling"
      gloss: "healthy; hale"
      concept: healthy
      source: {kind: coined}
    - form: "pakingiqun"
      class: adj
      field: "Body and feeling"
      gloss: "sick; ill"
      concept: sick
      source: {kind: coined}
    - form: "kena"
      class: adj
      field: "Body and feeling"
      gloss: "injured; wounded"
      concept: injured
      source: {kind: coined}
    - form: "igikuq"
      class: adj
      field: "Body and feeling"
      gloss: "Strong"
      concept: strong
      source: {kind: coined}
    - form: "unganu"
      class: adj
      field: "Body and feeling"
      gloss: "weak"
      concept: weak
      source: {kind: coined}
    - form: "kakivan"
      class: adj
      field: "Body and feeling"
      gloss: "exhausted"
      concept: exhausted
      source: {kind: coined}
    - form: "yayi"
      class: adj
      field: "Body and feeling"
      gloss: "full; satisfied after eating or drinking"
      concept: sated
      source: {kind: coined}
    - form: "vulu"
      class: adj
      field: "Body and feeling"
      gloss: "feverish"
      concept: feverish
      source: {kind: coined}
    - form: "navumin"
      class: n
      field: "Body and feeling"
      gloss: "Pain"
      concept: pain
      source: {kind: coined}
    - form: "niqa"
      class: v
      field: "Body and feeling"
      gloss: "to hurt; to cause pain or injury to someone"
      concept: hurt-verb
      source: {kind: coined}
    - form: "agesaq"
      class: adj
      field: "Body and feeling"
      gloss: "ache"
      concept: ache
      source: {kind: coined}
    - form: "tapapuk"
      class: adj
      field: "Body and feeling"
      gloss: "suffer"
      concept: suffer
      source: {kind: coined}
    - form: "tavin"
      class: adj
      field: "Body and feeling"
      gloss: "Bleed"
      concept: bleed
      source: {kind: coined}
    - form: "kekanupu"
      class: adj
      field: "Body and feeling"
      gloss: "heal"
      concept: heal
      source: {kind: coined}
    - form: "kiqinka"
      class: adj
      field: "Body and feeling"
      gloss: "recover"
      concept: recover
      source: {kind: coined}
    - form: "usuri"
      class: adj
      field: "Body and feeling"
      gloss: "Blind"
      concept: blind
      source: {kind: coined}
    - form: "saru"
      class: adj
      field: "Body and feeling"
      gloss: "deaf"
      concept: deaf
      source: {kind: coined}
    - form: "tulvirqi"
      class: adj
      field: "Body and feeling"
      gloss: "lame"
      concept: lame
      source: {kind: coined}
    - form: "aqanampa"
      class: adj
      field: "Body and feeling"
      gloss: "Alive"
      concept: alive
      source: {kind: coined}
    - form: "anilik"
      class: adj
      field: "Body and feeling"
      gloss: "conscious"
      concept: conscious
      source: {kind: coined}
    - form: "naku anilik"
      class: adj
      field: "Body and feeling"
      gloss: "unconscious"
      concept: unconscious
      built: ["naku", "anilik"]
      source: {kind: coined}
    - form: "mankaq"
      class: adj
      field: "Body and feeling"
      gloss: "Young"
      concept: young
      source: {kind: coined}
    - form: "chiyivquaqa"
      class: adj
      field: "Body and feeling"
      gloss: "old in age (a living being)"
      concept: old
      source: {kind: coined}
    - form: "nila"
      class: n
      field: "Body and feeling"
      gloss: "aging; growing older"
      concept: aging
      source: {kind: coined}
    - form: "paqeya"
      class: v
      field: "Body and feeling"
      gloss: "to hurt; to experience bodily pain"
      concept: hurt-pain
      source: {kind: coined}
    - form: "yarak"
      class: n
      field: "Kin and village"
      gloss: "parent"
      concept: parent
      source: {kind: coined}
    - form: "amin"
      class: n
      field: "Kin and village"
      gloss: "son"
      concept: son
      source: {kind: coined}
    - form: "vulit"
      class: n
      field: "Kin and village"
      gloss: "daughter"
      concept: daughter
      source: {kind: coined}
    - form: "yaminuk"
      class: n
      field: "Kin and village"
      gloss: "brother"
      concept: brother
      source: {kind: coined}
    - form: "migipu"
      class: n
      field: "Kin and village"
      gloss: "sister"
      concept: sister
      source: {kind: coined}
    - form: "armaq"
      class: n
      field: "Kin and village"
      gloss: "grandmother"
      concept: grandmother
      source: {kind: coined}
    - form: "kasuq"
      class: n
      field: "Kin and village"
      gloss: "grandfather"
      concept: grandfather
      source: {kind: coined}
    - form: "kaqukik"
      class: n
      field: "Kin and village"
      gloss: "grandchild"
      concept: grandchild
      source: {kind: coined}
    - form: "sutaq"
      class: n
      field: "Kin and village"
      gloss: "uncle"
      concept: uncle
      source: {kind: coined}
    - form: "tirunguq"
      class: n
      field: "Kin and village"
      gloss: "aunt"
      concept: aunt
      source: {kind: coined}
    - form: "nalkata"
      class: n
      field: "Kin and village"
      gloss: "cousin"
      concept: cousin
      source: {kind: coined}
    - form: "kuqta"
      class: n
      field: "Kin and village"
      gloss: "husband"
      concept: husband
      source: {kind: coined}
    - form: "salik"
      class: n
      field: "Kin and village"
      gloss: "wife"
      concept: wife
      source: {kind: coined}
    - form: "yervi"
      class: n
      field: "Kin and village"
      gloss: "ancestor"
      concept: ancestor
      source: {kind: coined}
    - form: "puatiq"
      class: n
      field: "Kin and village"
      gloss: "descendant"
      concept: descendant
      source: {kind: coined}
    - form: "qilmunkun"
      class: n
      field: "Kin and village"
      gloss: "orphan"
      concept: orphan
      source: {kind: coined}
    - form: "penan"
      class: n
      field: "Kin and village"
      gloss: "widow"
      concept: widow
      source: {kind: coined}
    - form: "nuyuk"
      class: n
      field: "Kin and village"
      gloss: "grandparent"
      concept: grandparent
      source: {kind: coined}
    - form: "chachiri"
      class: n
      field: "Kin and village"
      gloss: "nephew"
      concept: nephew
      source: {kind: coined}
    - form: "chirik"
      class: n
      field: "Kin and village"
      gloss: "niece"
      concept: niece
      source: {kind: coined}
    - form: "mikaq"
      class: n
      field: "Kin and village"
      gloss: "spouse"
      concept: spouse
      source: {kind: coined}
    - form: "nilu"
      class: v
      field: "Kin and village"
      gloss: "marry"
      concept: marry
      source: {kind: coined}
    - form: "niluqun"
      class: n
      field: "Kin and village"
      gloss: "marriage"
      concept: marriage
      built: ["nilu", "-qun"]
      source: {kind: coined}
    - form: "irkak"
      class: n
      field: "Kin and village"
      gloss: "family"
      concept: family
      source: {kind: coined}
    - form: "nivaq"
      class: n
      field: "Kin and village"
      gloss: "kin"
      concept: kin
      source: {kind: coined}
    - form: "sasqaq"
      class: n
      field: "Kin and village"
      gloss: "lineage"
      concept: lineage
      source: {kind: coined}
    - form: "kiti"
      class: n
      field: "Kin and village"
      gloss: "widower"
      concept: widower
      source: {kind: coined}
    - form: "ayisik"
      class: n
      field: "Kin and village"
      gloss: "friend"
      concept: friend
      source: {kind: coined}
    - form: "sungira"
      class: n
      field: "Kin and village"
      gloss: "enemy"
      concept: enemy
      source: {kind: coined}
    - form: "chiquqsiq"
      class: n
      field: "Kin and village"
      gloss: "stranger"
      concept: stranger
      source: {kind: coined}
    - form: "tatuaqak"
      class: n
      field: "Kin and village"
      gloss: "neighbor"
      concept: neighbor
      source: {kind: coined}
    - form: "chaqu"
      class: n
      field: "Kin and village"
      gloss: "companion"
      concept: companion
      source: {kind: coined}
    - form: "uman"
      class: n
      field: "Kin and village"
      gloss: "guest"
      concept: guest
      source: {kind: coined}
    - form: "saqita"
      class: n
      field: "Kin and village"
      gloss: "host"
      concept: host
      source: {kind: coined}
    - form: "qangak"
      class: n
      field: "Kin and village"
      gloss: "leader"
      concept: leader
      source: {kind: coined}
    - form: "qaviq"
      class: n
      field: "Kin and village"
      gloss: "follower"
      concept: follower
      source: {kind: coined}
    - form: "piguq"
      class: n
      field: "Kin and village"
      gloss: "servant"
      concept: servant
      source: {kind: coined}
    - form: "qirvan"
      class: n
      field: "Kin and village"
      gloss: "master"
      concept: master
      source: {kind: coined}
    - form: "kalta"
      class: n
      field: "Kin and village"
      gloss: "teacher"
      concept: teacher
      source: {kind: coined}
    - form: "yuleqin"
      class: n
      field: "Kin and village"
      gloss: "student"
      concept: student
      source: {kind: coined}
    - form: "kakirkeq"
      class: n
      field: "Everyday speech"
      gloss: "a chair"
      concept: chair
      source: {kind: coined}
    - form: "qaruamaq"
      class: n
      field: "Everyday speech"
      gloss: "a table"
      concept: table
      source: {kind: coined}
    - form: "qartuk"
      class: n
      field: "Everyday speech"
      gloss: "a bed"
      concept: bed
      source: {kind: coined}
    - form: "chiyi"
      class: n
      field: "Everyday speech"
      gloss: "a floor"
      concept: floor
      source: {kind: coined}
    - form: "qirva"
      class: n
      field: "Everyday speech"
      gloss: "a wall"
      concept: wall
      source: {kind: coined}
    - form: "saguapik"
      class: n
      field: "Everyday speech"
      gloss: "a roof"
      concept: roof
      source: {kind: coined}
    - form: "anqu"
      class: n
      field: "Everyday speech"
      gloss: "a hearth"
      concept: hearth
      source: {kind: coined}
    - form: "nalin"
      class: n
      field: "Everyday speech"
      gloss: "a door"
      concept: door
      source: {kind: coined}
    - form: "muriq"
      class: n
      field: "Everyday speech"
      gloss: "a lock"
      concept: lock
      source: {kind: coined}
    - form: "yisaq"
      class: n
      field: "Everyday speech"
      gloss: "a key"
      concept: key
      source: {kind: coined}
    - form: "mulviga"
      class: n
      field: "Everyday speech"
      gloss: "a window"
      concept: window
      source: {kind: coined}
    - form: "mugaran"
      class: n
      field: "Everyday speech"
      gloss: "shutters"
      concept: shutters
      source: {kind: coined}
    - form: "kayatin"
      class: n
      field: "Everyday speech"
      gloss: "a cup"
      concept: cup
      source: {kind: coined}
    - form: "pungya"
      class: n
      field: "Everyday speech"
      gloss: "a bowl"
      concept: bowl
      source: {kind: coined}
    - form: "nala"
      class: n
      field: "Everyday speech"
      gloss: "a knife"
      concept: knife
      source: {kind: coined}
    - form: "muvigni"
      class: n
      field: "Everyday speech"
      gloss: "a spoon"
      concept: spoon
      source: {kind: coined}
    - form: "parik"
      class: n
      field: "Everyday speech"
      gloss: "a pot"
      concept: pot
      source: {kind: coined}
    - form: "karasak"
      class: n
      field: "Everyday speech"
      gloss: "cloth"
      concept: cloth
      source: {kind: coined}
    - form: "kaqa"
      class: n
      field: "Everyday speech"
      gloss: "clothes"
      concept: clothes
      source: {kind: coined}
    - form: "pusanvuk"
      class: n
      field: "Everyday speech"
      gloss: "room"
      concept: room
      source: {kind: coined}
    - form: "viriq"
      class: n
      field: "Everyday speech"
      gloss: "ceiling"
      concept: ceiling
      source: {kind: coined}
    - form: "kinguk"
      class: n
      field: "Everyday speech"
      gloss: "seat"
      concept: seat
      source: {kind: coined}
    - form: "tegusak"
      class: n
      field: "Everyday speech"
      gloss: "bench"
      concept: bench
      source: {kind: coined}
    - form: "vitik"
      class: n
      field: "Everyday speech"
      gloss: "jar"
      concept: jar
      source: {kind: coined}
    - form: "amugaq"
      class: n
      field: "Everyday speech"
      gloss: "bottle"
      concept: bottle
      source: {kind: coined}
    - form: "chevalin"
      class: n
      field: "Everyday speech"
      gloss: "basket"
      concept: basket
      source: {kind: coined}
    - form: "utin"
      class: n
      field: "Everyday speech"
      gloss: "bag"
      concept: bag
      source: {kind: coined}
    - form: "utu"
      class: n
      field: "Everyday speech"
      gloss: "hammer"
      concept: hammer
      source: {kind: coined}
    - form: "serkukiq"
      class: n
      field: "Everyday speech"
      gloss: "rope"
      concept: rope
      source: {kind: coined}
    - form: "kulqak"
      class: n
      field: "Everyday speech"
      gloss: "cord"
      concept: cord
      source: {kind: coined}
    - form: "naga"
      class: n
      field: "Everyday speech"
      gloss: "needle"
      concept: needle
      source: {kind: coined}
    - form: "napuq"
      class: n
      field: "Everyday speech"
      gloss: "flame"
      concept: flame
      source: {kind: coined}
    - form: "qaqalpuq"
      class: n
      field: "Everyday speech"
      gloss: "smoke"
      concept: smoke
      source: {kind: coined}
    - form: "nuktumik"
      class: n
      field: "Everyday speech"
      gloss: "ash"
      concept: ash
      source: {kind: coined}
    - form: "agyiqin"
      class: n
      field: "Everyday speech"
      gloss: "coal"
      concept: coal
      source: {kind: coined}
    - form: "qipaya"
      class: n
      field: "Everyday speech"
      gloss: "torch"
      concept: torch
      source: {kind: coined}
    - form: "ninvak"
      class: n
      field: "Everyday speech"
      gloss: "candle"
      concept: candle
      source: {kind: coined}
    - form: "maquq"
      class: n
      field: "Everyday speech"
      gloss: "garment"
      concept: garment
      source: {kind: coined}
    - form: "nigama"
      class: n
      field: "Everyday speech"
      gloss: "shirt"
      concept: shirt
      source: {kind: coined}
    - form: "tanak"
      class: n
      field: "Everyday speech"
      gloss: "cloak"
      concept: cloak
      source: {kind: coined}
    - form: "chagnek"
      class: n
      field: "Everyday speech"
      gloss: "belt"
      concept: belt
      source: {kind: coined}
    - form: "uvi"
      class: n
      field: "Everyday speech"
      gloss: "shoe"
      concept: shoe
      source: {kind: coined}
    - form: "kaqek"
      class: n
      field: "Everyday speech"
      gloss: "boot"
      concept: boot
      source: {kind: coined}
    - form: "tesasi"
      class: n
      field: "Everyday speech"
      gloss: "gate"
      concept: gate
      source: {kind: coined}
    - form: "kavungyiq"
      class: n
      field: "Everyday speech"
      gloss: "barrier"
      concept: barrier
      source: {kind: coined}
    - form: "masuk"
      class: n
      field: "Everyday speech"
      gloss: "wood"
      concept: wood
      source: {kind: coined}
    - form: "muta"
      class: n
      field: "Everyday speech"
      gloss: "metal"
      concept: metal
      source: {kind: coined}
    - form: "mukaguk"
      class: n
      field: "Everyday speech"
      gloss: "clay"
      concept: clay
      source: {kind: coined}
    - form: "qulaqsi"
      class: n
      field: "Everyday speech"
      gloss: "leather"
      concept: leather
      source: {kind: coined}
    - form: "qiteq"
      class: n
      field: "Everyday speech"
      gloss: "wool"
      concept: wool
      source: {kind: coined}
    - form: "agtik"
      class: n
      field: "Everyday speech"
      gloss: "thread"
      concept: thread
      source: {kind: coined}
    - form: "agatit"
      class: n
      field: "Sea, ice and sky"
      gloss: "earth"
      concept: earth
      source: {kind: coined}
    - form: "nivin"
      class: n
      field: "Sea, ice and sky"
      gloss: "soil"
      concept: soil
      source: {kind: coined}
    - form: "anu"
      class: n
      field: "Sea, ice and sky"
      gloss: "sand"
      concept: sand
      source: {kind: coined}
    - form: "pangun"
      class: n
      field: "Sea, ice and sky"
      gloss: "mud"
      concept: mud
      source: {kind: coined}
    - form: "taglankiq"
      class: n
      field: "Sea, ice and sky"
      gloss: "dust"
      concept: dust
      source: {kind: coined}
    - form: "tukan"
      class: n
      field: "Sea, ice and sky"
      gloss: "mountain"
      concept: mountain
      source: {kind: coined}
    - form: "sisuq"
      class: n
      field: "Sea, ice and sky"
      gloss: "hill"
      concept: hill
      source: {kind: coined}
    - form: "nulin"
      class: n
      field: "Sea, ice and sky"
      gloss: "valley"
      concept: valley
      source: {kind: coined}
    - form: "saliq"
      class: n
      field: "Sea, ice and sky"
      gloss: "forest"
      concept: forest
      source: {kind: coined}
    - form: "wikan"
      class: n
      field: "Sea, ice and sky"
      gloss: "field"
      concept: field
      source: {kind: coined}
    - form: "puqarviq"
      class: n
      field: "Sea, ice and sky"
      gloss: "cave"
      concept: cave
      source: {kind: coined}
    - form: "itelmiq"
      class: n
      field: "Sea, ice and sky"
      gloss: "stream"
      concept: stream
      source: {kind: coined}
    - form: "talyukuq"
      class: n
      field: "Sea, ice and sky"
      gloss: "rain"
      concept: rain
      source: {kind: coined}
    - form: "kaqiq"
      class: n
      field: "Sea, ice and sky"
      gloss: "cloud"
      concept: cloud
      source: {kind: coined}
    - form: "vilpurnak"
      class: n
      field: "Sea, ice and sky"
      gloss: "storm"
      concept: storm
      source: {kind: coined}
    - form: "nisuga"
      class: n
      field: "Sea, ice and sky"
      gloss: "thunder"
      concept: thunder
      source: {kind: coined}
    - form: "chuken"
      class: n
      field: "Sea, ice and sky"
      gloss: "lightning"
      concept: lightning
      source: {kind: coined}
    - form: "qilpeliq"
      class: n
      field: "Sea, ice and sky"
      gloss: "plant"
      concept: plant
      source: {kind: coined}
    - form: "taniqik"
      class: n
      field: "Sea, ice and sky"
      gloss: "tree"
      concept: tree
      source: {kind: coined}
    - form: "aquk"
      class: n
      field: "Sea, ice and sky"
      gloss: "leaf"
      concept: leaf
      source: {kind: coined}
    - form: "nuqatuq"
      class: n
      field: "Sea, ice and sky"
      gloss: "root"
      concept: root
      source: {kind: coined}
    - form: "qasatiq"
      class: n
      field: "Sea, ice and sky"
      gloss: "branch"
      concept: branch
      source: {kind: coined}
    - form: "vaqu"
      class: n
      field: "Sea, ice and sky"
      gloss: "flower"
      concept: flower
      source: {kind: coined}
    - form: "pavusi"
      class: n
      field: "Sea, ice and sky"
      gloss: "fruit"
      concept: fruit
      source: {kind: coined}
    - form: "qipa"
      class: n
      field: "Sea, ice and sky"
      gloss: "seed"
      concept: seed
      source: {kind: coined}
    - form: "karti"
      class: n
      field: "Sea, ice and sky"
      gloss: "grass"
      concept: grass
      source: {kind: coined}
    - form: "purqaq"
      class: n
      field: "Sea, ice and sky"
      gloss: "animal"
      concept: animal
      source: {kind: coined}
    - form: "vakuqan"
      class: n
      field: "Sea, ice and sky"
      gloss: "beast"
      concept: beast
      source: {kind: coined}
    - form: "tugyuq"
      class: n
      field: "Sea, ice and sky"
      gloss: "insect"
      concept: insect
      source: {kind: coined}
    - form: "pelan"
      class: n
      field: "Sea, ice and sky"
      gloss: "worm"
      concept: worm
      source: {kind: coined}
    - form: "nuqa"
      class: adj
      field: "Sea, ice and sky"
      gloss: "wet"
      concept: wet
      source: {kind: coined}
    - form: "pagilumiq"
      class: adj
      field: "Sea, ice and sky"
      gloss: "dry"
      concept: dry
      source: {kind: coined}
    - form: "ivka"
      class: adj
      field: "Sea, ice and sky"
      gloss: "bright"
      concept: bright
      source: {kind: coined}
    - form: "tumami"
      class: adj
      field: "Sea, ice and sky"
      gloss: "dark"
      concept: dark
      source: {kind: coined}
    - form: "tustialak"
      class: adj
      field: "Sea, ice and sky"
      gloss: "clear weather; without clouds"
      concept: clear-weather
      source: {kind: coined}
    - form: "kasaq"
      class: adj
      field: "Sea, ice and sky"
      gloss: "cloudy"
      concept: cloudy
      source: {kind: coined}
    - form: "kilqiyaq"
      class: adj
      field: "Everyday speech"
      gloss: "half"
      concept: half
      source: {kind: coined}
    - form: "ayelka"
      class: adj
      field: "Everyday speech"
      gloss: "many"
      concept: many
      source: {kind: coined}
    - form: "kiangiyak"
      class: adj
      field: "Everyday speech"
      gloss: "few"
      concept: few
      source: {kind: coined}
    - form: "kavalin"
      class: adj
      field: "Everyday speech"
      gloss: "quarter"
      concept: quarter
      source: {kind: coined}
    - form: "tira"
      class: pron
      field: "Everyday speech"
      gloss: "all"
      concept: all
      source: {kind: coined}
    - form: "irmiru"
      class: pron
      field: "Everyday speech"
      gloss: "some"
      concept: some
      source: {kind: coined}
    - form: "vakekaq"
      class: adj
      field: "Everyday speech"
      gloss: "much"
      concept: much
      source: {kind: coined}
    - form: "titik"
      class: adj
      field: "Everyday speech"
      gloss: "little"
      concept: little-quantity
      source: {kind: coined}
    - form: "suchukik"
      class: adj
      field: "Everyday speech"
      gloss: "enough"
      concept: enough
      source: {kind: coined}
    - form: "alukan"
      class: adj
      field: "Everyday speech"
      gloss: "more"
      concept: more
      source: {kind: coined}
    - form: "niqi"
      class: adj
      field: "Everyday speech"
      gloss: "less"
      concept: less
      source: {kind: coined}
    - form: "kulti"
      class: adj
      field: "Everyday speech"
      gloss: "most"
      concept: most
      source: {kind: coined}
    - form: "avti"
      class: adj
      field: "Everyday speech"
      gloss: "least"
      concept: least
      source: {kind: coined}
    - form: "uvaqi"
      class: adj
      field: "Everyday speech"
      gloss: "equal"
      concept: equal
      source: {kind: coined}
    - form: "natilmu"
      class: pron
      field: "Everyday speech"
      gloss: "each"
      concept: each
      source: {kind: coined}
    - form: "nakvu"
      class: pron
      field: "Everyday speech"
      gloss: "every"
      concept: every
      source: {kind: coined}
    - form: "tuviq"
      class: pron
      field: "Everyday speech"
      gloss: "both"
      concept: both
      source: {kind: coined}
    - form: "nuntan"
      class: pron
      field: "Everyday speech"
      gloss: "either"
      concept: either
      source: {kind: coined}
    - form: "naku nuntan"
      class: pron
      field: "Everyday speech"
      gloss: "neither"
      concept: neither
      built: ["naku", "nuntan"]
      source: {kind: coined}
    - form: "ilavi"
      class: adv
      field: "Everyday speech"
      gloss: "about"
      concept: about
      source: {kind: coined}
    - form: "aqirvuk"
      class: adv
      field: "Everyday speech"
      gloss: "almost"
      concept: almost
      source: {kind: coined}
    - form: "mangaq"
      class: adv
      field: "Everyday speech"
      gloss: "exactly"
      concept: exactly
      source: {kind: coined}
    - form: "malkaq"
      class: n
      field: "Everyday speech"
      gloss: "number"
      concept: number
      source: {kind: coined}
    - form: "tarvana"
      class: n
      field: "Everyday speech"
      gloss: "amount"
      concept: amount
      source: {kind: coined}
    - form: "yiska"
      class: v
      field: "Everyday speech"
      gloss: "measure"
      concept: measure-verb
      source: {kind: coined}
    - form: "sava"
      class: v
      field: "Everyday speech"
      gloss: "count"
      concept: count-verb
      source: {kind: coined}
    - form: "wipiti"
      class: adj
      field: "Everyday speech"
      gloss: "black"
      concept: black
      source: {kind: coined}
    - form: "panguma"
      class: adj
      field: "Everyday speech"
      gloss: "white"
      concept: white
      source: {kind: coined}
    - form: "taspalugin"
      class: adj
      field: "Everyday speech"
      gloss: "red"
      concept: red
      source: {kind: coined}
    - form: "kaqva"
      class: adj
      field: "Everyday speech"
      gloss: "green"
      concept: green
      source: {kind: coined}
    - form: "palaq"
      class: adj
      field: "Everyday speech"
      gloss: "yellow"
      concept: yellow
      source: {kind: coined}
    - form: "yagyaga"
      class: adj
      field: "Everyday speech"
      gloss: "blue"
      concept: blue
      source: {kind: coined}
    - form: "kaquagu"
      class: adj
      field: "Everyday speech"
      gloss: "grey"
      concept: grey
      source: {kind: coined}
    - form: "avkika"
      class: adj
      field: "Everyday speech"
      gloss: "brown"
      concept: brown
      source: {kind: coined}
    - form: "kilpa"
      class: adj
      field: "Everyday speech"
      gloss: "light in colour"
      concept: light-colour
      source: {kind: coined}
    - form: "mavkuya"
      class: adj
      field: "Everyday speech"
      gloss: "pale"
      concept: pale
      source: {kind: coined}
    - form: "maru"
      class: adj
      field: "Everyday speech"
      gloss: "clear in appearance"
      concept: clear-appearance
      source: {kind: coined}
    - form: "ilkuk"
      class: adj
      field: "Everyday speech"
      gloss: "transparent"
      concept: transparent
      source: {kind: coined}
    - form: "naku ilkuk"
      class: adj
      field: "Everyday speech"
      gloss: "opaque"
      concept: opaque
      built: ["naku", "ilkuk"]
      source: {kind: coined}
    - form: "qakirkaq"
      class: adj
      field: "Everyday speech"
      gloss: "shiny"
      concept: shiny
      source: {kind: coined}
    - form: "ikasaq"
      class: adj
      field: "Everyday speech"
      gloss: "dull"
      concept: dull-appearance
      source: {kind: coined}
    - form: "tanvaq"
      class: adj
      field: "Everyday speech"
      gloss: "plain; without a pattern"
      concept: plain-pattern
      source: {kind: coined}
    - form: "suqapu"
      class: adj
      field: "Everyday speech"
      gloss: "spotted"
      concept: spotted
      source: {kind: coined}
    - form: "qaskigtutan"
      class: adj
      field: "Everyday speech"
      gloss: "striped"
      concept: striped
      source: {kind: coined}
    - form: "pasi"
      class: v
      field: "Everyday speech"
      gloss: "to be"
      concept: be
      source: {kind: coined}
    - form: "iganga"
      class: v
      field: "Everyday speech"
      gloss: "to have"
      concept: have
      source: {kind: coined}
    - form: "tirura"
      class: v
      field: "Everyday speech"
      gloss: "to make"
      concept: make
      source: {kind: coined}
    - form: "alaya"
      class: v
      field: "Everyday speech"
      gloss: "to do"
      concept: do
      source: {kind: coined}
    - form: "tilama"
      class: v
      field: "Everyday speech"
      gloss: "to know"
      concept: know
      source: {kind: coined}
    - form: "iqtiluqa"
      class: v
      field: "Everyday speech"
      gloss: "to think"
      concept: think
      source: {kind: coined}
    - form: "vengyu"
      class: v
      field: "Everyday speech"
      gloss: "to want"
      concept: want
      source: {kind: coined}
    - form: "kila"
      class: v
      field: "Everyday speech"
      gloss: "to live"
      concept: live
      source: {kind: coined}
    - form: "chaki"
      class: v
      field: "Everyday speech"
      gloss: "to walk"
      concept: walk
      source: {kind: coined}
    - form: "nima"
      class: v
      field: "Everyday speech"
      gloss: "to sit"
      concept: sit
      source: {kind: coined}
    - form: "pipa"
      class: v
      field: "Everyday speech"
      gloss: "to stand"
      concept: stand
      source: {kind: coined}
    - form: "kupiski"
      class: v
      field: "Everyday speech"
      gloss: "to lie down"
      concept: lie-down
      source: {kind: coined}
    - form: "tiquangu"
      class: v
      field: "Everyday speech"
      gloss: "to hold"
      concept: hold
      source: {kind: coined}
    - form: "kiqikaka"
      class: v
      field: "Everyday speech"
      gloss: "to bring"
      concept: bring
      source: {kind: coined}
    - form: "cheqimi"
      class: v
      field: "Everyday speech"
      gloss: "to put"
      concept: put
      source: {kind: coined}
    - form: "arevu"
      class: v
      field: "Everyday speech"
      gloss: "to find"
      concept: find
      source: {kind: coined}
    - form: "suqatu"
      class: v
      field: "Everyday speech"
      gloss: "to lose"
      concept: lose
      source: {kind: coined}
    - form: "miqtu"
      class: v
      field: "Everyday speech"
      gloss: "to open"
      concept: open
      source: {kind: coined}
    - form: "qiqtignu"
      class: v
      field: "Everyday speech"
      gloss: "to close"
      concept: close
      source: {kind: coined}
    - form: "yungu"
      class: v
      field: "Everyday speech"
      gloss: "to begin"
      concept: begin
      source: {kind: coined}
    - form: "niva"
      class: v
      field: "Everyday speech"
      gloss: "to end"
      concept: end
      source: {kind: coined}
    - form: "pipuna"
      class: v
      field: "Everyday speech"
      gloss: "to exist"
      concept: exist
      source: {kind: coined}
    - form: "katigu"
      class: v
      field: "Everyday speech"
      gloss: "to belong"
      concept: belong
      source: {kind: coined}
    - form: "wika"
      class: v
      field: "Everyday speech"
      gloss: "to become"
      concept: become
      source: {kind: coined}
    - form: "kavivta"
      class: v
      field: "Everyday speech"
      gloss: "to remain"
      concept: remain
      source: {kind: coined}
    - form: "punqi"
      class: v
      field: "Everyday speech"
      gloss: "to leave"
      concept: leave
      source: {kind: coined}
    - form: "navenga"
      class: v
      field: "Everyday speech"
      gloss: "to arrive"
      concept: arrive
      source: {kind: coined}
    - form: "natiaga"
      class: v
      field: "Everyday speech"
      gloss: "to crawl"
      concept: crawl
      source: {kind: coined}
    - form: "uri"
      class: v
      field: "Everyday speech"
      gloss: "to climb"
      concept: climb
      source: {kind: coined}
    - form: "ili"
      class: v
      field: "Everyday speech"
      gloss: "to jump"
      concept: jump
      source: {kind: coined}
    - form: "neksa"
      class: v
      field: "Everyday speech"
      gloss: "to fall"
      concept: fall
      source: {kind: coined}
    - form: "niqumuska"
      class: v
      field: "Everyday speech"
      gloss: "to rise"
      concept: rise
      source: {kind: coined}
    - form: "uluni"
      class: v
      field: "Everyday speech"
      gloss: "to enter"
      concept: enter
      source: {kind: coined}
    - form: "nigikarka"
      class: v
      field: "Everyday speech"
      gloss: "to exit"
      concept: exit
      source: {kind: coined}
    - form: "nasiga"
      class: v
      field: "Everyday speech"
      gloss: "to return"
      concept: return
      source: {kind: coined}
    - form: "pangi"
      class: v
      field: "Everyday speech"
      gloss: "to follow"
      concept: follow
      source: {kind: coined}
    - form: "mutaka"
      class: v
      field: "Everyday speech"
      gloss: "to lead"
      concept: lead
      source: {kind: coined}
    - form: "qakingi"
      class: v
      field: "Everyday speech"
      gloss: "to carry"
      concept: carry
      source: {kind: coined}
    - form: "niatavti"
      class: v
      field: "Everyday speech"
      gloss: "to move"
      concept: move
      source: {kind: coined}
    - form: "putminvu"
      class: v
      field: "Everyday speech"
      gloss: "to push"
      concept: push
      source: {kind: coined}
    - form: "kenipa"
      class: v
      field: "Everyday speech"
      gloss: "to pull"
      concept: pull
      source: {kind: coined}
    - form: "akalala"
      class: v
      field: "Everyday speech"
      gloss: "to lift"
      concept: lift
      source: {kind: coined}
    - form: "miganku"
      class: v
      field: "Everyday speech"
      gloss: "to drop"
      concept: drop
      source: {kind: coined}
    - form: "tuchavu"
      class: v
      field: "Everyday speech"
      gloss: "to throw"
      concept: throw
      source: {kind: coined}
    - form: "suksuqu"
      class: v
      field: "Everyday speech"
      gloss: "to catch"
      concept: catch
      source: {kind: coined}
    - form: "nakami"
      class: v
      field: "Everyday speech"
      gloss: "to build"
      concept: build
      source: {kind: coined}
    - form: "tugiavu"
      class: v
      field: "Everyday speech"
      gloss: "to create"
      concept: create
      source: {kind: coined}
    - form: "chigisa"
      class: v
      field: "Everyday speech"
      gloss: "to break"
      concept: break
      source: {kind: coined}
    - form: "qivtaga"
      class: v
      field: "Everyday speech"
      gloss: "to destroy"
      concept: destroy
      source: {kind: coined}
    - form: "antenu"
      class: v
      field: "Everyday speech"
      gloss: "to repair"
      concept: repair
      source: {kind: coined}
    - form: "magyavkuvi"
      class: v
      field: "Everyday speech"
      gloss: "to change"
      concept: change-verb
      source: {kind: coined}
    - form: "waguqa"
      class: v
      field: "Everyday speech"
      gloss: "to tell"
      concept: tell
      source: {kind: coined}
    - form: "seqta"
      class: v
      field: "Everyday speech"
      gloss: "to answer"
      concept: answer
      source: {kind: coined}
    - form: "suva"
      class: v
      field: "Everyday speech"
      gloss: "to call"
      concept: call
      source: {kind: coined}
    - form: "pumata"
      class: v
      field: "Everyday speech"
      gloss: "to shout"
      concept: shout
      source: {kind: coined}
    - form: "suta"
      class: v
      field: "Everyday speech"
      gloss: "to whisper"
      concept: whisper
      source: {kind: coined}
    - form: "vatika"
      class: v
      field: "Everyday speech"
      gloss: "to explain"
      concept: explain
      source: {kind: coined}
    - form: "kipima"
      class: v
      field: "Everyday speech"
      gloss: "to name"
      concept: name-verb
      source: {kind: coined}
    - form: "nilqavta"
      class: v
      field: "Everyday speech"
      gloss: "to understand"
      concept: understand
      source: {kind: coined}
    - form: "uvaga"
      class: v
      field: "Everyday speech"
      gloss: "to remember"
      concept: remember
      source: {kind: coined}
    - form: "ara"
      class: v
      field: "Everyday speech"
      gloss: "to forget"
      concept: forget
      source: {kind: coined}
    - form: "piguku"
      class: v
      field: "Everyday speech"
      gloss: "to learn"
      concept: learn
      source: {kind: coined}
    - form: "qirqali"
      class: v
      field: "Everyday speech"
      gloss: "to teach"
      concept: teach
      source: {kind: coined}
    - form: "yuki"
      class: v
      field: "Everyday speech"
      gloss: "to decide"
      concept: decide
      source: {kind: coined}
    - form: "ukirva"
      class: v
      field: "Everyday speech"
      gloss: "to imagine"
      concept: imagine
      source: {kind: coined}
    - form: "yachalti"
      class: v
      field: "Everyday speech"
      gloss: "to need"
      concept: need-verb
      source: {kind: coined}
    - form: "artiqvi"
      class: v
      field: "Everyday speech"
      gloss: "to wish"
      concept: wish-verb
      source: {kind: coined}
    - form: "tisa"
      class: v
      field: "Everyday speech"
      gloss: "to intend"
      concept: intend
      source: {kind: coined}
    - form: "vigirkisqi"
      class: v
      field: "Everyday speech"
      gloss: "to choose"
      concept: choose
      source: {kind: coined}
    - form: "ustu"
      class: v
      field: "Everyday speech"
      gloss: "to prefer"
      concept: prefer
      source: {kind: coined}
    - form: "yutana"
      class: v
      field: "Everyday speech"
      gloss: "to try"
      concept: try
      source: {kind: coined}
    - form: "qurara"
      class: v
      field: "Everyday speech"
      gloss: "to search"
      concept: search
      source: {kind: coined}
    - form: "sanali"
      class: v
      field: "Everyday speech"
      gloss: "to meet"
      concept: meet
      source: {kind: coined}
    - form: "ikuya"
      class: v
      field: "Everyday speech"
      gloss: "to help"
      concept: help
      source: {kind: coined}
    - form: "situka"
      class: v
      field: "Everyday speech"
      gloss: "to share"
      concept: share
      source: {kind: coined}
    - form: "angugtu"
      class: v
      field: "Everyday speech"
      gloss: "to buy"
      concept: buy
      source: {kind: coined}
    - form: "niyi"
      class: v
      field: "Everyday speech"
      gloss: "to sell"
      concept: sell
      source: {kind: coined}
    - form: "naqi"
      class: v
      field: "Everyday speech"
      gloss: "to promise"
      concept: promise-verb
      source: {kind: coined}
    - form: "nuti"
      class: v
      field: "Everyday speech"
      gloss: "to refuse"
      concept: refuse-verb
      source: {kind: coined}
    - form: "qungepa"
      class: v
      field: "Everyday speech"
      gloss: "to agree"
      concept: agree-verb
      source: {kind: coined}
    - form: "yiqu"
      class: v
      field: "Everyday speech"
      gloss: "to fight"
      concept: fight
      source: {kind: coined}
    - form: "chaga"
      class: v
      field: "Everyday speech"
      gloss: "to hit"
      concept: hit
      source: {kind: coined}
    - form: "uga"
      class: v
      field: "Everyday speech"
      gloss: "to kill"
      concept: kill
      source: {kind: coined}
    - form: "nina"
      class: v
      field: "Everyday speech"
      gloss: "to defend"
      concept: defend
      source: {kind: coined}
    - form: "pirka"
      class: v
      field: "Everyday speech"
      gloss: "to attack"
      concept: attack
      source: {kind: coined}
    - form: "wunguchemu"
      class: v
      field: "Everyday speech"
      gloss: "to flee"
      concept: flee
      source: {kind: coined}
    - form: "chuvinvi"
      class: v
      field: "Everyday speech"
      gloss: "to threaten"
      concept: threaten
      source: {kind: coined}
    - form: "qigavu"
      class: v
      field: "Everyday speech"
      gloss: "to stop"
      concept: stop
      source: {kind: coined}
    - form: "nuga"
      class: v
      field: "Everyday speech"
      gloss: "to continue"
      concept: continue
      source: {kind: coined}
    - form: "qasuga"
      class: v
      field: "Everyday speech"
      gloss: "to wait"
      concept: wait
      source: {kind: coined}
    - form: "chisa"
      class: v
      field: "Everyday speech"
      gloss: "to happen"
      concept: happen
      source: {kind: coined}
    - form: "paka"
      class: v
      field: "Everyday speech"
      gloss: "to kneel"
      concept: kneel
      source: {kind: coined}
    - form: "punagi"
      class: v
      field: "Everyday speech"
      gloss: "to bend"
      concept: bend
      source: {kind: coined}
    - form: "tuvagana"
      class: v
      field: "Everyday speech"
      gloss: "to lean"
      concept: lean
      source: {kind: coined}
    - form: "kayata"
      class: v
      field: "Everyday speech"
      gloss: "to cover"
      concept: cover-verb
      source: {kind: coined}
    - form: "naku kayata"
      class: v
      field: "Everyday speech"
      gloss: "to uncover"
      concept: uncover
      built: ["naku", "kayata"]
      source: {kind: coined}
    - form: "kiyi"
      class: v
      field: "Everyday speech"
      gloss: "to hide"
      concept: hide
      source: {kind: coined}
    - form: "mitayaka"
      class: v
      field: "Everyday speech"
      gloss: "to reveal"
      concept: reveal
      source: {kind: coined}
    - form: "qaka"
      class: v
      field: "Everyday speech"
      gloss: "to lock"
      concept: lock-verb
      source: {kind: coined}
    - form: "naku qaka"
      class: v
      field: "Everyday speech"
      gloss: "to unlock"
      concept: unlock
      built: ["naku", "qaka"]
      source: {kind: coined}
    - form: "taqin"
      class: adv
      field: "Everyday speech"
      gloss: "Here"
      concept: here
      source: {kind: coined}
    - form: "utiqik"
      class: adv
      field: "Everyday speech"
      gloss: "there"
      concept: there
      source: {kind: coined}
    - form: "angyun"
      class: adv
      field: "Everyday speech"
      gloss: "somewhere"
      concept: somewhere
      source: {kind: coined}
    - form: "naku angyun"
      class: adv
      field: "Everyday speech"
      gloss: "nowhere"
      concept: nowhere
      built: ["naku", "angyun"]
      source: {kind: coined}
    - form: "akuk"
      class: adv
      field: "Everyday speech"
      gloss: "everywhere"
      concept: everywhere
      source: {kind: coined}
    - form: "uskik"
      class: adv
      field: "Everyday speech"
      gloss: "Near"
      concept: near
      source: {kind: coined}
    - form: "uviti"
      class: adv
      field: "Everyday speech"
      gloss: "far"
      concept: far
      source: {kind: coined}
    - form: "silyun"
      class: part
      field: "Everyday speech"
      gloss: "beside"
      concept: beside
      source: {kind: coined}
    - form: "quk"
      class: part
      field: "Everyday speech"
      gloss: "between"
      concept: between
      source: {kind: coined}
    - form: "qali"
      class: part
      field: "Everyday speech"
      gloss: "among"
      concept: among
      source: {kind: coined}
    - form: "qikali"
      class: part
      field: "Everyday speech"
      gloss: "Above"
      concept: above
      source: {kind: coined}
    - form: "sagun"
      class: part
      field: "Everyday speech"
      gloss: "below"
      concept: below
      source: {kind: coined}
    - form: "chumaruq"
      class: part
      field: "Everyday speech"
      gloss: "under"
      concept: under
      source: {kind: coined}
    - form: "kukaq"
      class: part
      field: "Everyday speech"
      gloss: "over"
      concept: over
      source: {kind: coined}
    - form: "alak"
      class: part
      field: "Everyday speech"
      gloss: "Inside"
      concept: inside
      source: {kind: coined}
    - form: "qitak"
      class: part
      field: "Everyday speech"
      gloss: "outside"
      concept: outside
      source: {kind: coined}
    - form: "nipin"
      class: part
      field: "Everyday speech"
      gloss: "beyond"
      concept: beyond
      source: {kind: coined}
    - form: "tama"
      class: part
      field: "Everyday speech"
      gloss: "before; in front of (spatial)"
      concept: before-spatial
      source: {kind: coined}
    - form: "yagyikaq"
      class: part
      field: "Everyday speech"
      gloss: "behind"
      concept: behind
      source: {kind: coined}
    - form: "palmalkakiq"
      class: n
      field: "Everyday speech"
      gloss: "left (direction)"
      concept: left-direction
      source: {kind: coined}
    - form: "pakik"
      class: n
      field: "Everyday speech"
      gloss: "right (direction)"
      concept: right-direction
      source: {kind: coined}
    - form: "winak"
      class: n
      field: "Everyday speech"
      gloss: "center"
      concept: center
      source: {kind: coined}
    - form: "qinki"
      class: adv
      field: "Everyday speech"
      gloss: "Up"
      concept: up
      source: {kind: coined}
    - form: "maspu"
      class: adv
      field: "Everyday speech"
      gloss: "down"
      concept: down
      source: {kind: coined}
    - form: "qimiq"
      class: adv
      field: "Everyday speech"
      gloss: "forward"
      concept: forward
      source: {kind: coined}
    - form: "saku"
      class: adv
      field: "Everyday speech"
      gloss: "backward"
      concept: backward
      source: {kind: coined}
    - form: "pitak"
      class: part
      field: "Everyday speech"
      gloss: "Toward"
      concept: toward
      source: {kind: coined}
    - form: "kuqviqun"
      class: adv
      field: "Everyday speech"
      gloss: "away"
      concept: away
      source: {kind: coined}
    - form: "tiniku"
      class: part
      field: "Everyday speech"
      gloss: "through"
      concept: through
      source: {kind: coined}
    - form: "kavuk"
      class: part
      field: "Everyday speech"
      gloss: "around"
      concept: around
      source: {kind: coined}
    - form: "tukak"
      class: part
      field: "Everyday speech"
      gloss: "In"
      concept: in
      source: {kind: coined}
    - form: "tavan"
      class: part
      field: "Everyday speech"
      gloss: "on"
      concept: "on"
      source: {kind: coined}
    - form: "yapu"
      class: part
      field: "Everyday speech"
      gloss: "at"
      concept: at
      source: {kind: coined}
    - form: "nigi"
      class: part
      field: "Everyday speech"
      gloss: "from"
      concept: from
      source: {kind: coined}
    - form: "matasan"
      class: part
      field: "Everyday speech"
      gloss: "to"
      concept: to
      source: {kind: coined}
    - form: "tapuq"
      class: n
      field: "Everyday speech"
      gloss: "a place; a location"
      concept: place-noun
      source: {kind: coined}
    - form: "taq"
      class: n
      field: "Everyday speech"
      gloss: "position"
      concept: position
      source: {kind: coined}
    - form: "puasek"
      class: n
      field: "Everyday speech"
      gloss: "direction"
      concept: direction
      source: {kind: coined}
    - form: "kelen"
      class: n
      field: "Everyday speech"
      gloss: "distance"
      concept: distance
      source: {kind: coined}
    - form: "agtaquqan"
      class: n
      field: "Everyday speech"
      gloss: "time"
      concept: time
      source: {kind: coined}
    - form: "chapuq"
      class: n
      field: "Everyday speech"
      gloss: "moment"
      concept: moment
      source: {kind: coined}
    - form: "kagingaq"
      class: n
      field: "Everyday speech"
      gloss: "morning"
      concept: morning
      source: {kind: coined}
    - form: "teluti"
      class: n
      field: "Everyday speech"
      gloss: "noon"
      concept: noon
      source: {kind: coined}
    - form: "ungavaq"
      class: n
      field: "Everyday speech"
      gloss: "evening"
      concept: evening
      source: {kind: coined}
    - form: "yikuk"
      class: n
      field: "Everyday speech"
      gloss: "midnight"
      concept: midnight
      source: {kind: coined}
    - form: "wumin"
      class: adv
      field: "Everyday speech"
      gloss: "now"
      concept: now
      source: {kind: coined}
    - form: "yan"
      class: adv
      field: "Everyday speech"
      gloss: "then"
      concept: then
      source: {kind: coined}
    - form: "piaki"
      class: adv
      field: "Everyday speech"
      gloss: "today"
      concept: today
      source: {kind: coined}
    - form: "kakli"
      class: n
      field: "Everyday speech"
      gloss: "past"
      concept: past
      source: {kind: coined}
    - form: "qachiniskin"
      class: n
      field: "Everyday speech"
      gloss: "present"
      concept: present
      source: {kind: coined}
    - form: "tirqacheq"
      class: n
      field: "Everyday speech"
      gloss: "future"
      concept: future
      source: {kind: coined}
    - form: "kevtuq"
      class: conj
      field: "Everyday speech"
      gloss: "before (temporal)"
      concept: before-time
      source: {kind: coined}
    - form: "yuti"
      class: conj
      field: "Everyday speech"
      gloss: "after"
      concept: after
      source: {kind: coined}
    - form: "yaqtachuq"
      class: conj
      field: "Everyday speech"
      gloss: "during"
      concept: during
      source: {kind: coined}
    - form: "kutugya"
      class: conj
      field: "Everyday speech"
      gloss: "while"
      concept: while
      source: {kind: coined}
    - form: "quntik"
      class: conj
      field: "Everyday speech"
      gloss: "until"
      concept: until
      source: {kind: coined}
    - form: "piksaguk"
      class: conj
      field: "Everyday speech"
      gloss: "since a time"
      concept: since-time
      source: {kind: coined}
    - form: "kuaga"
      class: adv
      field: "Everyday speech"
      gloss: "always"
      concept: always
      source: {kind: coined}
    - form: "kimiqiq"
      class: adv
      field: "Everyday speech"
      gloss: "often"
      concept: often
      source: {kind: coined}
    - form: "nagyutuk"
      class: adv
      field: "Everyday speech"
      gloss: "sometimes"
      concept: sometimes
      source: {kind: coined}
    - form: "uktak"
      class: adv
      field: "Everyday speech"
      gloss: "rarely"
      concept: rarely
      source: {kind: coined}
    - form: "naku kuaga"
      class: adv
      field: "Everyday speech"
      gloss: "never"
      concept: never
      built: ["naku", "kuaga"]
      source: {kind: coined}
    - form: "nirak"
      class: adj
      field: "Everyday speech"
      gloss: "lasting a long time"
      concept: long-duration
      source: {kind: coined}
    - form: "ulava"
      class: adj
      field: "Everyday speech"
      gloss: "lasting a short time"
      concept: short-duration
      source: {kind: coined}
    - form: "amuvki"
      class: adj
      field: "Everyday speech"
      gloss: "brief in duration"
      concept: brief-duration
      source: {kind: coined}
    - form: "kuqiq"
      class: adj
      field: "Everyday speech"
      gloss: "lasting; continuing for a sustained time"
      concept: lasting-duration
      source: {kind: coined}
    - form: "yinkati"
      class: adv
      field: "Everyday speech"
      gloss: "again"
      concept: again
      source: {kind: coined}
    - form: "qasuq"
      class: adv
      field: "Everyday speech"
      gloss: "once"
      concept: once
      source: {kind: coined}
    - form: "qama"
      class: adv
      field: "Everyday speech"
      gloss: "twice"
      concept: twice
      source: {kind: coined}
    - form: "manva"
      class: adv
      field: "Everyday speech"
      gloss: "repeatedly"
      concept: repeatedly
      source: {kind: coined}
    - form: "vanvi"
      class: adv
      field: "Everyday speech"
      gloss: "already"
      concept: already
      source: {kind: coined}
    - form: "puqin"
      class: adv
      field: "Everyday speech"
      gloss: "still"
      concept: still
      source: {kind: coined}
    - form: "sirun"
      class: adv
      field: "Everyday speech"
      gloss: "yet"
      concept: yet
      source: {kind: coined}
    - form: "tuyu"
      class: adv
      field: "Everyday speech"
      gloss: "soon"
      concept: soon
      source: {kind: coined}
    - form: "yimaq"
      class: adv
      field: "Everyday speech"
      gloss: "later"
      concept: later
      source: {kind: coined}
    - form: "supuk"
      class: adj
      field: "Everyday speech"
      gloss: "early"
      concept: early
      source: {kind: coined}
    - form: "taluvigik"
      class: adj
      field: "Everyday speech"
      gloss: "late"
      concept: late
      source: {kind: coined}
    - form: "tangmi"
      class: adj
      field: "Everyday speech"
      gloss: "next"
      concept: next
      source: {kind: coined}
    - form: "panguq"
      class: adj
      field: "Everyday speech"
      gloss: "last"
      concept: last
      source: {kind: coined}
    - form: "kik"
      class: adv
      field: "Everyday speech"
      gloss: "finally"
      concept: finally
      source: {kind: coined}
    - form: "kapiguq"
      class: n
      field: "Everyday speech"
      gloss: "season"
      concept: season
      source: {kind: coined}
    - form: "yulilugin"
      class: n
      field: "Everyday speech"
      gloss: "dawn"
      concept: dawn
      source: {kind: coined}
    - form: "nuturuq"
      class: n
      field: "Everyday speech"
      gloss: "dusk"
      concept: dusk
      source: {kind: coined}
    - form: "kanak"
      class: dem
      field: "Everyday speech"
      gloss: "This"
      concept: this
      source: {kind: coined}
    - form: "vikvaga"
      class: dem
      field: "Everyday speech"
      gloss: "that"
      concept: that
      source: {kind: coined}
    - form: "kuquq"
      class: dem
      field: "Everyday speech"
      gloss: "these"
      concept: these
      source: {kind: coined}
    - form: "ukuk"
      class: dem
      field: "Everyday speech"
      gloss: "those"
      concept: those
      source: {kind: coined}
    - form: "ticheku"
      class: pron
      field: "Everyday speech"
      gloss: "Someone"
      concept: someone
      source: {kind: coined}
    - form: "maq"
      class: pron
      field: "Everyday speech"
      gloss: "anyone"
      concept: anyone
      source: {kind: coined}
    - form: "tisaq"
      class: pron
      field: "Everyday speech"
      gloss: "everyone"
      concept: everyone
      source: {kind: coined}
    - form: "naku ticheku"
      class: pron
      field: "Everyday speech"
      gloss: "no one"
      concept: no-one
      built: ["naku", "ticheku"]
      source: {kind: coined}
    - form: "chakin"
      class: pron
      field: "Everyday speech"
      gloss: "Something"
      concept: something
      source: {kind: coined}
    - form: "tanuq"
      class: pron
      field: "Everyday speech"
      gloss: "anything"
      concept: anything
      source: {kind: coined}
    - form: "kutuq"
      class: pron
      field: "Everyday speech"
      gloss: "everything"
      concept: everything
      source: {kind: coined}
    - form: "qipi"
      class: pron
      field: "Everyday speech"
      gloss: "self; oneself (reflexive reference)"
      concept: self
      source: {kind: coined}
    - form: "qiqiatan"
      class: adj
      field: "Everyday speech"
      gloss: "other"
      concept: other
      source: {kind: coined}
    - form: "paqvuk"
      class: adj
      field: "Everyday speech"
      gloss: "another"
      concept: another
      source: {kind: coined}
    - form: "amupuk"
      class: adj
      field: "Everyday speech"
      gloss: "Same"
      concept: same
      source: {kind: coined}
    - form: "vutaklamak"
      class: adj
      field: "Everyday speech"
      gloss: "different"
      concept: different
      source: {kind: coined}
    - form: "nugik"
      class: adj
      field: "Everyday speech"
      gloss: "True"
      concept: "true"
      source: {kind: coined}
    - form: "kuntiqu"
      class: adj
      field: "Everyday speech"
      gloss: "false"
      concept: "false"
      source: {kind: coined}
    - form: "manisesun"
      class: n
      field: "Everyday speech"
      gloss: "Truth"
      concept: truth
      source: {kind: coined}
    - form: "nekanquq"
      class: n
      field: "Everyday speech"
      gloss: "a lie; an intentionally deceptive statement"
      concept: lie-noun
      source: {kind: coined}
    - form: "atmuq"
      class: n
      field: "Everyday speech"
      gloss: "really; truly; genuinely; de veras (asserting sincerity or reality)"
      concept: sincerity
      source: {kind: coined}
    - form: "alaq"
      class: adv
      field: "Everyday speech"
      gloss: "Indeed"
      concept: indeed
      source: {kind: coined}
    - form: "namuq"
      class: adv
      field: "Everyday speech"
      gloss: "certainly"
      concept: certainly
      source: {kind: coined}
    - form: "umi"
      class: adv
      field: "Everyday speech"
      gloss: "Perhaps"
      concept: perhaps
      source: {kind: coined}
    - form: "yini"
      class: adv
      field: "Everyday speech"
      gloss: "Probably"
      concept: probably
      source: {kind: coined}
    - form: "naku yini"
      class: adj
      field: "Everyday speech"
      gloss: "unlikely"
      concept: unlikely
      built: ["naku", "yini"]
      source: {kind: coined}
    - form: "kulelta"
      class: adj
      field: "Everyday speech"
      gloss: "Sure"
      concept: certain
      source: {kind: coined}
    - form: "naku kulelta"
      class: adj
      field: "Everyday speech"
      gloss: "uncertain"
      concept: uncertain
      built: ["naku", "kulelta"]
      source: {kind: coined}
    - form: "agyu"
      class: adv
      field: "Everyday speech"
      gloss: "Apparently"
      concept: apparently
      source: {kind: coined}
    - form: "kengyuk"
      class: adv
      field: "Everyday speech"
      gloss: "supposedly"
      concept: supposedly
      source: {kind: coined}
    - form: "kavtalu"
      class: adv
      field: "Everyday speech"
      gloss: "Actually"
      concept: in-fact
      source: {kind: coined}
    - form: "kugyakik"
      class: adv
      field: "Everyday speech"
      gloss: "suspect"
      concept: suspect
      source: {kind: coined}
    - form: "piqililqa"
      class: v
      field: "Everyday speech"
      gloss: "guess"
      concept: guess-verb
      source: {kind: coined}
    - form: "narva"
      class: v
      field: "Everyday speech"
      gloss: "assume"
      concept: assume-verb
      source: {kind: coined}
    - form: "sigunguq"
      class: adj
      field: "Everyday speech"
      gloss: "Correct"
      concept: correct
      source: {kind: coined}
    - form: "naku sigunguq"
      class: adj
      field: "Everyday speech"
      gloss: "incorrect"
      concept: incorrect
      built: ["naku", "sigunguq"]
      source: {kind: coined}
    - form: "naku qungepa"
      class: v
      field: "Everyday speech"
      gloss: "disagree"
      concept: disagree
      built: ["naku", "qungepa"]
      source: {kind: coined}
    - form: "amlaq"
      class: n
      field: "Everyday speech"
      gloss: "a falsehood; a false claim, whether intentional or mistaken"
      concept: falsehood
      source: {kind: coined}
    - form: "suti"
      class: conj
      field: "Everyday speech"
      gloss: "And"
      concept: and
      source: {kind: coined}
    - form: "upik"
      class: conj
      field: "Everyday speech"
      gloss: "or"
      concept: or
      source: {kind: coined}
    - form: "aqtirma"
      class: conj
      field: "Everyday speech"
      gloss: "but"
      concept: but
      source: {kind: coined}
    - form: "naku upik"
      class: conj
      field: "Everyday speech"
      gloss: "nor"
      concept: nor
      built: ["naku", "upik"]
      source: {kind: coined}
    - form: "sumi"
      class: conj
      field: "Everyday speech"
      gloss: "Because"
      concept: because
      source: {kind: coined}
    - form: "yustu"
      class: conj
      field: "Everyday speech"
      gloss: "therefore"
      concept: therefore
      source: {kind: coined}
    - form: "nimi"
      class: conj
      field: "Everyday speech"
      gloss: "If"
      concept: if
      source: {kind: coined}
    - form: "kuniq"
      class: conj
      field: "Everyday speech"
      gloss: "then, in a condition and its consequence"
      concept: then-conditional
      source: {kind: coined}
    - form: "naku nimi"
      class: conj
      field: "Everyday speech"
      gloss: "unless"
      concept: unless
      built: ["naku", "nimi"]
      source: {kind: coined}
    - form: "inga"
      class: adv
      field: "Everyday speech"
      gloss: "otherwise"
      concept: otherwise
      source: {kind: coined}
    - form: "chatuga"
      class: conj
      field: "Everyday speech"
      gloss: "Although"
      concept: although
      source: {kind: coined}
    - form: "maqu"
      class: adv
      field: "Everyday speech"
      gloss: "however"
      concept: however
      source: {kind: coined}
    - form: "chiqtak"
      class: adv
      field: "Everyday speech"
      gloss: "nevertheless"
      concept: nevertheless
      source: {kind: coined}
    - form: "aruqtak"
      class: conj
      field: "Everyday speech"
      gloss: "despite"
      concept: despite
      source: {kind: coined}
    - form: "uru"
      class: adv
      field: "Everyday speech"
      gloss: "instead"
      concept: instead
      source: {kind: coined}
    - form: "iraq"
      class: conj
      field: "Everyday speech"
      gloss: "for; in order to; so that (purpose)"
      concept: for-purpose
      source: {kind: coined}
    - form: "viqik"
      class: part
      field: "Everyday speech"
      gloss: "Like"
      concept: like
      source: {kind: coined}
    - form: "naku viqik"
      class: part
      field: "Everyday speech"
      gloss: "unlike"
      concept: unlike
      built: ["naku", "viqik"]
      source: {kind: coined}
    - form: "piya"
      class: part
      field: "Everyday speech"
      gloss: "as"
      concept: as
      source: {kind: coined}
    - form: "katu"
      class: part
      field: "Everyday speech"
      gloss: "than"
      concept: than
      source: {kind: coined}
    - form: "chata"
      class: conj
      field: "Everyday speech"
      gloss: "Either"
      concept: either-alternative
      source: {kind: coined}
    - form: "naku chata"
      class: conj
      field: "Everyday speech"
      gloss: "neither"
      concept: neither-alternative
      built: ["naku", "chata"]
      source: {kind: coined}
    - form: "umeti"
      class: conj
      field: "Everyday speech"
      gloss: "both"
      concept: both-conjunction
      source: {kind: coined}
    - form: "qulya"
      class: conj
      field: "Everyday speech"
      gloss: "whether"
      concept: whether
      source: {kind: coined}
    - form: "tugnak"
      class: adv
      field: "Everyday speech"
      gloss: "That is"
      concept: that-is
      source: {kind: coined}
    - form: "niktastik"
      class: adv
      field: "Everyday speech"
      gloss: "namely"
      concept: namely
      source: {kind: coined}
    - form: "punguk"
      class: adv
      field: "Everyday speech"
      gloss: "for example"
      concept: for-example
      source: {kind: coined}
    - form: "ilti"
      class: adv
      field: "Everyday speech"
      gloss: "Except"
      concept: except
      source: {kind: coined}
    - form: "pusa"
      class: adv
      field: "Everyday speech"
      gloss: "only"
      concept: only
      source: {kind: coined}
    - form: "kutik"
      class: adv
      field: "Everyday speech"
      gloss: "even"
      concept: even
      source: {kind: coined}
    - form: "tatikvuq"
      class: adv
      field: "Everyday speech"
      gloss: "also"
      concept: also
      source: {kind: coined}
    - form: "sala"
      class: adv
      field: "Everyday speech"
      gloss: "especially"
      concept: especially
      source: {kind: coined}
    - form: "tilu"
      class: adj
      field: "Everyday speech"
      gloss: "tiny"
      concept: tiny
      source: {kind: coined}
    - form: "yavek"
      class: adj
      field: "Everyday speech"
      gloss: "huge"
      concept: huge
      source: {kind: coined}
    - form: "titacha"
      class: adj
      field: "Everyday speech"
      gloss: "long in spatial length"
      concept: long
      source: {kind: coined}
    - form: "yitamquq"
      class: adj
      field: "Everyday speech"
      gloss: "short in spatial length"
      concept: short
      source: {kind: coined}
    - form: "kaltayiga"
      class: adj
      field: "Everyday speech"
      gloss: "high"
      concept: high
      source: {kind: coined}
    - form: "kinana"
      class: adj
      field: "Everyday speech"
      gloss: "low"
      concept: low
      source: {kind: coined}
    - form: "yarik"
      class: adj
      field: "Everyday speech"
      gloss: "tall"
      concept: tall
      source: {kind: coined}
    - form: "yaki"
      class: adj
      field: "Everyday speech"
      gloss: "wide"
      concept: wide
      source: {kind: coined}
    - form: "qitagyan"
      class: adj
      field: "Everyday speech"
      gloss: "narrow"
      concept: narrow
      source: {kind: coined}
    - form: "nuvuyari"
      class: adj
      field: "Everyday speech"
      gloss: "heavy"
      concept: heavy
      source: {kind: coined}
    - form: "nakti"
      class: adj
      field: "Everyday speech"
      gloss: "light in weight"
      concept: light-weight
      source: {kind: coined}
    - form: "magak"
      class: adj
      field: "Everyday speech"
      gloss: "new"
      concept: new
      source: {kind: coined}
    - form: "kunan"
      class: adj
      field: "Everyday speech"
      gloss: "old; not new"
      concept: old-object
      source: {kind: coined}
    - form: "kivtuk"
      class: adj
      field: "Everyday speech"
      gloss: "fast"
      concept: fast
      source: {kind: coined}
    - form: "mayu"
      class: adj
      field: "Everyday speech"
      gloss: "slow"
      concept: slow
      source: {kind: coined}
    - form: "temkipiq"
      class: adj
      field: "Everyday speech"
      gloss: "easy"
      concept: easy
      source: {kind: coined}
    - form: "simkik"
      class: adj
      field: "Everyday speech"
      gloss: "difficult"
      concept: difficult
      source: {kind: coined}
    - form: "niqatetak"
      class: adj
      field: "Everyday speech"
      gloss: "better"
      concept: better
      source: {kind: coined}
    - form: "kialelkimiq"
      class: adj
      field: "Everyday speech"
      gloss: "worse"
      concept: worse
      source: {kind: coined}
    - form: "pulka"
      class: adj
      field: "Everyday speech"
      gloss: "best"
      concept: best
      source: {kind: coined}
    - form: "timisi"
      class: adj
      field: "Everyday speech"
      gloss: "worst"
      concept: worst
      source: {kind: coined}
    - form: "atulyu"
      class: adj
      field: "Everyday speech"
      gloss: "important"
      concept: important
      source: {kind: coined}
    - form: "navtikiq"
      class: adj
      field: "Everyday speech"
      gloss: "trivial"
      concept: trivial
      source: {kind: coined}
    - form: "niqan"
      class: adj
      field: "Everyday speech"
      gloss: "necessary"
      concept: necessary
      source: {kind: coined}
    - form: "mula"
      class: adj
      field: "Everyday speech"
      gloss: "valuable"
      concept: valuable
      source: {kind: coined}
    - form: "naku mula"
      class: adj
      field: "Everyday speech"
      gloss: "worthless"
      concept: worthless
      built: ["naku", "mula"]
      source: {kind: coined}
    - form: "nugiq"
      class: adj
      field: "Everyday speech"
      gloss: "useful"
      concept: useful
      source: {kind: coined}
    - form: "naku nugiq"
      class: adj
      field: "Everyday speech"
      gloss: "useless"
      concept: useless
      built: ["naku", "nugiq"]
      source: {kind: coined}
    - form: "piviq"
      class: adj
      field: "Everyday speech"
      gloss: "broken"
      concept: broken
      source: {kind: coined}
    - form: "uchati"
      class: adj
      field: "Everyday speech"
      gloss: "complete"
      concept: complete
      source: {kind: coined}
    - form: "naku uchati"
      class: adj
      field: "Everyday speech"
      gloss: "incomplete"
      concept: incomplete
      built: ["naku", "uchati"]
      source: {kind: coined}
    - form: "tuqsavqu"
      class: adj
      field: "Everyday speech"
      gloss: "honest"
      concept: honest
      source: {kind: coined}
    - form: "naku tuqsavqu"
      class: adj
      field: "Everyday speech"
      gloss: "dishonest"
      concept: dishonest
      built: ["naku", "tuqsavqu"]
      source: {kind: coined}
    - form: "chuyatun"
      class: adv
      field: "Everyday speech"
      gloss: "very"
      concept: very
      source: {kind: coined}
    - form: "vagta"
      class: adv
      field: "Everyday speech"
      gloss: "extremely"
      concept: extremely
      source: {kind: coined}
    - form: "miqa"
      class: adv
      field: "Everyday speech"
      gloss: "somewhat"
      concept: somewhat
      source: {kind: coined}
    - form: "taqsu"
      class: adv
      field: "Everyday speech"
      gloss: "slightly"
      concept: slightly
      source: {kind: coined}
    - form: "chuvikun"
      class: adv
      field: "Everyday speech"
      gloss: "barely"
      concept: barely
      source: {kind: coined}
    - form: "tulva"
      class: adv
      field: "Everyday speech"
      gloss: "too much"
      concept: too-much
      source: {kind: coined}
    - form: "kinten"
      class: adv
      field: "Everyday speech"
      gloss: "too little"
      concept: too-little
      source: {kind: coined}
    - form: "kugiti"
      class: adj
      field: "Everyday speech"
      gloss: "similar"
      concept: similar
      source: {kind: coined}
    - form: "naquvan"
      class: adj
      field: "Everyday speech"
      gloss: "opposite"
      concept: opposite
      source: {kind: coined}
    - form: "kutmumku"
      class: v
      field: "Everyday speech"
      gloss: "can; able to do something (ability)"
      concept: can
      source: {kind: coined}
    - form: "naku kutmumku"
      class: v
      field: "Everyday speech"
      gloss: "cannot; unable to do something (lack of ability)"
      concept: cannot
      built: ["naku", "kutmumku"]
      source: {kind: coined}
    - form: "timelin"
      class: adj
      field: "Everyday speech"
      gloss: "Possible"
      concept: possible
      source: {kind: coined}
    - form: "naku timelin"
      class: adj
      field: "Everyday speech"
      gloss: "impossible"
      concept: impossible
      built: ["naku", "timelin"]
      source: {kind: coined}
    - form: "qanviana"
      class: v
      field: "Everyday speech"
      gloss: "may; have permission to act"
      concept: may-permission
      source: {kind: coined}
    - form: "yangila"
      class: v
      field: "Everyday speech"
      gloss: "might; an event is possible"
      concept: might-possibility
      source: {kind: coined}
    - form: "chuchaki"
      class: v
      field: "Everyday speech"
      gloss: "Must"
      concept: must
      source: {kind: coined}
    - form: "naku chuchaki"
      class: v
      field: "Everyday speech"
      gloss: "must not"
      concept: must-not
      built: ["naku", "chuchaki"]
      source: {kind: coined}
    - form: "keta"
      class: v
      field: "Everyday speech"
      gloss: "Should"
      concept: ought
      source: {kind: coined}
    - form: "iya"
      class: adj
      field: "Everyday speech"
      gloss: "Required"
      concept: required
      source: {kind: coined}
    - form: "kurmu"
      class: adj
      field: "Everyday speech"
      gloss: "optional"
      concept: optional
      source: {kind: coined}
    - form: "tuareyun"
      class: adj
      field: "Everyday speech"
      gloss: "Allowed"
      concept: allowed
      source: {kind: coined}
    - form: "kilmuskak"
      class: adj
      field: "Everyday speech"
      gloss: "forbidden"
      concept: forbidden
      source: {kind: coined}
    - form: "alegyangi"
      class: v
      field: "Everyday speech"
      gloss: "Permit"
      concept: permit
      source: {kind: coined}
    - form: "nuremali"
      class: v
      field: "Everyday speech"
      gloss: "prohibit"
      concept: prohibit
      source: {kind: coined}
    - form: "kanatila"
      class: adj
      field: "Everyday speech"
      gloss: "free to act; unconstrained"
      concept: free
      source: {kind: coined}
    - form: "avangi"
      class: adj
      field: "Everyday speech"
      gloss: "constrained in action; not free to act"
      concept: constrained
      source: {kind: coined}
    - form: "yantaki"
      class: adj
      field: "Everyday speech"
      gloss: "Willing"
      concept: willing
      source: {kind: coined}
    - form: "naku yantaki"
      class: adj
      field: "Everyday speech"
      gloss: "unwilling"
      concept: unwilling
      built: ["naku", "yantaki"]
      source: {kind: coined}
    - form: "yalmaqvaman"
      class: adj
      field: "Everyday speech"
      gloss: "Intended"
      concept: intended
      source: {kind: coined}
    - form: "kilpivin"
      class: adj
      field: "Everyday speech"
      gloss: "accidental"
      concept: accidental
      source: {kind: coined}
    - form: "walka"
      class: call
      field: "Everyday speech"
      gloss: "Please"
      concept: expression-please
      source: {kind: coined}
    - form: "qik"
      class: call
      field: "Everyday speech"
      gloss: "You’re welcome"
      concept: expression-youre-welcome
      source: {kind: coined}
    - form: "takak"
      class: call
      field: "Everyday speech"
      gloss: "Excuse me"
      concept: expression-excuse-me
      source: {kind: coined}
    - form: "tasiru"
      class: call
      field: "Everyday speech"
      gloss: "Sorry"
      concept: expression-sorry
      source: {kind: coined}
    - form: "mavi"
      class: call
      field: "Everyday speech"
      gloss: "Forgive me"
      concept: expression-forgive-me
      source: {kind: coined}
    - form: "qagtiq"
      class: call
      field: "Everyday speech"
      gloss: "Of course"
      concept: of-course
      source: {kind: coined}
    - form: "puya"
      class: call
      field: "Everyday speech"
      gloss: "Listen"
      concept: expression-listen
      source: {kind: coined}
    - form: "sunvu"
      class: call
      field: "Everyday speech"
      gloss: "Look"
      concept: expression-look
      source: {kind: coined}
    - form: "kamu"
      class: call
      field: "Everyday speech"
      gloss: "Wait"
      concept: expression-wait
      source: {kind: coined}
    - form: "nara"
      class: call
      field: "Everyday speech"
      gloss: "Come here"
      concept: expression-come-here
      source: {kind: coined}
    - form: "vugiq"
      class: call
      field: "Everyday speech"
      gloss: "Go away"
      concept: expression-go-away
      source: {kind: coined}
    - form: "tuveq"
      class: call
      field: "Everyday speech"
      gloss: "Help!"
      concept: expression-help
      source: {kind: coined}
    - form: "suqarnu"
      class: call
      field: "Everyday speech"
      gloss: "Stop!"
      concept: expression-stop
      source: {kind: coined}
    - form: "nupa"
      class: call
      field: "Everyday speech"
      gloss: "What"
      concept: expression-what
      source: {kind: coined}
    - form: "qinun"
      class: call
      field: "Everyday speech"
      gloss: "Pardon"
      concept: expression-pardon
      source: {kind: coined}
    - form: "pegipa"
      class: call
      field: "Everyday speech"
      gloss: "Again"
      concept: expression-again
      source: {kind: coined}
    - form: "murka"
      class: call
      field: "Everyday speech"
      gloss: "I understand"
      concept: expression-i-understand
      source: {kind: coined}
    - form: "naku murka"
      class: call
      field: "Everyday speech"
      gloss: "I do not understand"
      concept: expression-i-do-not-understand
      built: ["naku", "murka"]
      source: {kind: coined}
    - form: "qungu"
      class: call
      field: "Everyday speech"
      gloss: "What do you mean"
      concept: expression-what-do-you-mean
      source: {kind: coined}
    - form: "puta"
      class: call
      field: "Everyday speech"
      gloss: "How do you say…"
      concept: expression-how-do-you-say
      source: {kind: coined}
    - form: "pinuchu"
      class: call
      field: "Everyday speech"
      gloss: "What is this called"
      concept: expression-what-is-this-called
      source: {kind: coined}
    - form: "sukuvak"
      class: call
      field: "Everyday speech"
      gloss: "Really? (conversational surprise or request for confirmation)"
      concept: expression-really
      source: {kind: coined}
    - form: "ikik"
      class: call
      field: "Everyday speech"
      gloss: "not at all (conversational response)"
      concept: expression-not-at-all
      source: {kind: coined}
    - form: "pituqaq"
      class: n
      field: "Kin and village"
      gloss: "people"
      concept: people
      source: {kind: coined}
    - form: "iterit"
      class: n
      field: "Kin and village"
      gloss: "boy"
      concept: boy
      source: {kind: coined}
    - form: "yasqeq"
      class: n
      field: "Kin and village"
      gloss: "girl"
      concept: girl
      source: {kind: coined}
    - form: "nakak"
      class: n
      field: "Kin and village"
      gloss: "Adult"
      concept: adult
      source: {kind: coined}
    - form: "simuyaq"
      class: n
      field: "Kin and village"
      gloss: "Individual"
      concept: individual
      source: {kind: coined}
    - form: "karak"
      class: n
      field: "Kin and village"
      gloss: "group"
      concept: group
      source: {kind: coined}
    - form: "kiakularkan"
      class: n
      field: "Kin and village"
      gloss: "crowd"
      concept: crowd
      source: {kind: coined}
    - form: "tinkik"
      class: n
      field: "Kin and village"
      gloss: "clan"
      concept: clan
      source: {kind: coined}
    - form: "yevamun"
      class: n
      field: "Kin and village"
      gloss: "tribe"
      concept: tribe
      source: {kind: coined}
    - form: "piaka"
      class: n
      field: "Kin and village"
      gloss: "ruler"
      concept: ruler
      source: {kind: coined}
    - form: "manvaman"
      class: n
      field: "Kin and village"
      gloss: "Worker"
      concept: worker
      source: {kind: coined}
    - form: "niregagtak"
      class: n
      field: "Kin and village"
      gloss: "artisan"
      concept: artisan
      source: {kind: coined}
    - form: "kupugiq"
      class: n
      field: "Kin and village"
      gloss: "merchant"
      concept: merchant
      source: {kind: coined}
    - form: "qalan"
      class: n
      field: "Kin and village"
      gloss: "title"
      concept: title
      source: {kind: coined}
    - form: "magin"
      class: n
      field: "Kin and village"
      gloss: "rank"
      concept: rank
      source: {kind: coined}
    - form: "kirnunik"
      class: n
      field: "Kin and village"
      gloss: "Custom"
      concept: custom
      source: {kind: coined}
    - form: "kiaruq"
      class: n
      field: "Kin and village"
      gloss: "tradition"
      concept: tradition
      source: {kind: coined}
    - form: "nuqsuq"
      class: n
      field: "Kin and village"
      gloss: "law"
      concept: law
      source: {kind: coined}
    - form: "qanak"
      class: n
      field: "Kin and village"
      gloss: "Order"
      concept: order-noun
      source: {kind: coined}
    - form: "qankasi"
      class: n
      field: "Kin and village"
      gloss: "command"
      concept: command-noun
      source: {kind: coined}
    - form: "parimak"
      class: n
      field: "Kin and village"
      gloss: "obedience"
      concept: obedience
      source: {kind: coined}
    - form: "chugiyiq"
      class: n
      field: "Kin and village"
      gloss: "Justice"
      concept: justice
      source: {kind: coined}
    - form: "naku chugiyiq"
      class: n
      field: "Kin and village"
      gloss: "injustice"
      concept: injustice
      built: ["naku", "chugiyiq"]
      source: {kind: coined}
    - form: "chulaq"
      class: n
      field: "Kin and village"
      gloss: "right; morally acceptable"
      concept: right-ethical
      source: {kind: coined}
    - form: "terqangimuq"
      class: n
      field: "Kin and village"
      gloss: "wrong; morally unacceptable"
      concept: wrong-ethical
      source: {kind: coined}
    - form: "miqaq"
      class: n
      field: "Kin and village"
      gloss: "Peace"
      concept: peace
      source: {kind: coined}
    - form: "quqenignu"
      class: n
      field: "Kin and village"
      gloss: "war"
      concept: war
      source: {kind: coined}
    - form: "akik"
      class: n
      field: "Kin and village"
      gloss: "Freedom"
      concept: freedom
      source: {kind: coined}
    - form: "nitik"
      class: n
      field: "Kin and village"
      gloss: "captivity"
      concept: captivity
      source: {kind: coined}
    - form: "altet"
      class: n
      field: "Kin and village"
      gloss: "Gift"
      concept: gift
      source: {kind: coined}
    - form: "simiqun"
      class: n
      field: "Kin and village"
      gloss: "exchange"
      concept: exchange-noun
      built: ["simi", "-qun"]
      source: {kind: coined}
    - form: "qikaq"
      class: n
      field: "Kin and village"
      gloss: "debt"
      concept: debt
      source: {kind: coined}
    - form: "turingaq"
      class: n
      field: "Kin and village"
      gloss: "Wealth"
      concept: wealth
      source: {kind: coined}
    - form: "tilangak"
      class: n
      field: "Kin and village"
      gloss: "poverty"
      concept: poverty
      source: {kind: coined}
    - form: "chuvavaq"
      class: n
      field: "Kin and village"
      gloss: "Property"
      concept: property
      source: {kind: coined}
    - form: "niraspugu"
      class: n
      field: "Kin and village"
      gloss: "ownership"
      concept: ownership
      source: {kind: coined}
    - form: "kepapegik"
      class: n
      field: "Kin and village"
      gloss: "Honor"
      concept: honor
      source: {kind: coined}
    - form: "kakagaq"
      class: n
      field: "Kin and village"
      gloss: "Secret"
      concept: secret
      source: {kind: coined}
    - form: "tilamaqun"
      class: n
      field: "Kin and village"
      gloss: "knowledge"
      concept: knowledge
      built: ["tilama", "-qun"]
      source: {kind: coined}
    - form: "uqayuk"
      class: n
      field: "Everyday speech"
      gloss: "Thing"
      concept: thing
      source: {kind: coined}
    - form: "kigatuk"
      class: n
      field: "Everyday speech"
      gloss: "being"
      concept: being
      source: {kind: coined}
    - form: "kilaqun"
      class: n
      field: "Everyday speech"
      gloss: "Life"
      concept: life
      built: ["kila", "-qun"]
      source: {kind: coined}
    - form: "payuq"
      class: n
      field: "Everyday speech"
      gloss: "origin"
      concept: origin
      source: {kind: coined}
    - form: "yunguqun"
      class: n
      field: "Everyday speech"
      gloss: "beginning"
      concept: beginning
      built: ["yungu", "-qun"]
      source: {kind: coined}
    - form: "nivaqun"
      class: n
      field: "Everyday speech"
      gloss: "End"
      concept: end-noun
      built: ["niva", "-qun"]
      source: {kind: coined}
    - form: "megigimet"
      class: n
      field: "Everyday speech"
      gloss: "completion"
      concept: completion
      source: {kind: coined}
    - form: "magyavkuviqun"
      class: n
      field: "Everyday speech"
      gloss: "Change"
      concept: change-noun
      built: ["magyavkuvi", "-qun"]
      source: {kind: coined}
    - form: "wikaqun"
      class: n
      field: "Everyday speech"
      gloss: "transformation"
      concept: transformation
      built: ["wika", "-qun"]
      source: {kind: coined}
    - form: "malik"
      class: n
      field: "Everyday speech"
      gloss: "Part"
      concept: part
      source: {kind: coined}
    - form: "sukli"
      class: n
      field: "Everyday speech"
      gloss: "Cause"
      concept: cause
      source: {kind: coined}
    - form: "kuvqiq"
      class: n
      field: "Everyday speech"
      gloss: "effect"
      concept: effect
      source: {kind: coined}
    - form: "urkiniq"
      class: n
      field: "Everyday speech"
      gloss: "Reason"
      concept: reason
      source: {kind: coined}
    - form: "yeni"
      class: n
      field: "Everyday speech"
      gloss: "purpose"
      concept: purpose
      source: {kind: coined}
    - form: "yuru"
      class: n
      field: "Everyday speech"
      gloss: "Kind"
      concept: kind
      source: {kind: coined}
    - form: "tikikiviq"
      class: adj
      field: "Everyday speech"
      gloss: "Real"
      concept: real
      source: {kind: coined}
    - form: "naku tikikiviq"
      class: adj
      field: "Everyday speech"
      gloss: "unreal"
      concept: unreal
      built: ["naku", "tikikiviq"]
      source: {kind: coined}
    - form: "kamamani"
      class: adj
      field: "Everyday speech"
      gloss: "Natural"
      concept: natural
      source: {kind: coined}
    - form: "naku kamamani"
      class: adj
      field: "Everyday speech"
      gloss: "unnatural"
      concept: unnatural
      built: ["naku", "kamamani"]
      source: {kind: coined}
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: ["{given}", "{given} of {village}"]
    given:
      female:
        - "taluqivi"
        - "kilnaqivi"
        - "pinaqaklu"
        - "nalaqkalvi"
        - "aliqkalvi"
        - "nalikmalu"
        - "qalaktayu"
        - "nagaqkali"
      male:
        - "kavrukuvla"
        - "piqanmalu"
        - "imlakaklu"
        - "tikumalu"
        - "nalaqmalu"
        - "kalgaqmalu"
        - "kilnaqaklu"
        - "nalvaqkuvla"
    village: ["kavrumiq", "napamiq", "taqvamiq", "imlak kagaq", "simi manik"]
  sounds:
    edges: [{edge: closeConsonant, sounds: [q, k, n, t]}]
    clusters: {max: 3}
    stress: {two: first, longer: penultimate, mark: acute}
  scope:
    folders: [tikupilarit]
    cultures: [tikupilaritclt]
    parents: [tikumanikrgn, taluqnapiqrgn]
    addresses:
      - affiliation-tikupilarit
      - lore-tikupilaritclt
      - skill-tikupilaritlng
      - place-tikumanikrgn
      - place-taluqnapiqrgn
      - place-kavrumiq
      - place-napamiq
      - place-imlakkagaq
      - place-taqvamiq
      - place-simimanik
  tongues:
    - {tag: tikupilarit, meaning: a Tikupilarit name, language: skill-tikupilaritlng}
    - {tag: translation, meaning: a name given in the language of these pages}
    - {tag: "exonym:<tongue>", meaning: "a name another people gives, in the tongue named"}
  register:
    - {name: tikupilarit, tongue: tikupilarit, built: [tikupila, -rit]}
    - {name: Ice-Edge People, tongue: translation}
    - {name: mapirit, tongue: tikupilarit, built: [mapi, -rit]}
    - {name: East People, tongue: translation}
    - {name: kipirit, tongue: tikupilarit, built: [kipi, -rit]}
    - {name: Those Who Give Way, tongue: translation}
    - {name: tiku manik, tongue: tikupilarit, built: [tiku, manik]}
    - {name: Ice Coast, tongue: translation}
    - {name: taluq napiq, tongue: tikupilarit, built: [taluq, napiq]}
    - {name: Lake Tundra, tongue: translation}
    - {name: kavrumiq, tongue: tikupilarit, built: [kavru, -miq]}
    - {name: Walrus Place, tongue: translation}
    - {name: napamiq, tongue: tikupilarit, built: [napa, -miq]}
    - {name: Cliff Place, tongue: translation}
    - {name: taqvamiq, tongue: tikupilarit, built: [taqva, -miq]}
    - {name: Weir Place, tongue: translation}
    - {name: imlak kagaq, tongue: tikupilarit, built: [imlak, kagaq]}
    - {name: Whale Point, tongue: translation}
    - {name: simi manik, tongue: tikupilarit, built: [simi, manik]}
    - {name: Trading Shore, tongue: translation}
    - {name: malutiq tamak, tongue: tikupilarit, built: [malutiq, tamak]}
    - {name: Messenger Feast, tongue: translation}
    - {name: kuplaq tamak, tongue: tikupilarit, built: [kuplaq, tamak]}
    - {name: Bladder Feast, tongue: translation}
    - {name: kamuq tamak, tongue: tikupilarit, built: [kamuq, tamak]}
    - {name: Feast of the Dead, tongue: translation}
    - {name: tayuqun, tongue: tikupilarit, built: [tayu, -qun]}
    - {name: Asking, tongue: translation}
    - {name: Rules of the Catch, tongue: translation}
    - {name: Taking, tongue: translation}
    - {name: taluqivi, tongue: tikupilarit, built: [taluq, ivi]}
    - {name: kilnaqivi, tongue: tikupilarit, built: [kilnaq, ivi]}
    - {name: pinaqaklu, tongue: tikupilarit, built: [pinaq, aklu]}
    - {name: nalaqkalvi, tongue: tikupilarit, built: [nalaq, kalvi]}
    - {name: aliqkalvi, tongue: tikupilarit, built: [aliq, kalvi]}
    - {name: nalikmalu, tongue: tikupilarit, built: [nalik, malu]}
    - {name: qalaktayu, tongue: tikupilarit, built: [qalak, tayu]}
    - {name: nagaqkali, tongue: tikupilarit, built: [nagaq, kali]}
    - {name: kavrukuvla, tongue: tikupilarit, built: [kavru, kuvla]}
    - {name: piqanmalu, tongue: tikupilarit, built: [piqan, malu]}
    - {name: imlakaklu, tongue: tikupilarit, built: [imlak, aklu]}
    - {name: tikumalu, tongue: tikupilarit, built: [tiku, malu]}
    - {name: nalaqmalu, tongue: tikupilarit, built: [nalaq, malu]}
    - {name: kalgaqmalu, tongue: tikupilarit, built: [kalgaq, malu]}
    - {name: kilnaqaklu, tongue: tikupilarit, built: [kilnaq, aklu]}
    - {name: nalvaqkuvla, tongue: tikupilarit, built: [nalvaq, kuvla]}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Tikupilarit}}

# terran_analog: "The Eskimo-Aleut languages, with Central Alaskan Yup'ik as the guide: its long words built from a short root and many endings, its weighting toward words of two, three and four syllables, its nouns ending on -q and -k, its plural in -t, its leading sounds k, q, t, n, m, p and v, its g, r and l found only inside a word, and its vowels a, i and u with a rarer e. Its voiceless laterals and nasals and its fricative g and r are said as plain l, n, g and r, its long vowels are left out, its ergative cases and its verb endings are left out, and none of its words, nor any Iñupiaq or Inuit word, is taken."
---

The Tikupilarit Language is the tongue of the [[affiliation-tikupilarit|Tikupilarit]], the Ice-Edge People of the far northwestern coast. Fluency measures the range of what a speaker can say in it, from a Cedar trader's few dozen words for ivory, oil and a fair count to the speech of an elder who can tell the Rules of the Catch, the stories of Raven and the history of every name in a village. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Every village of the Ice-Edge People speaks the Tikupilarit Language, from [[place-imlakkagaq|Imlak Kagaq]] at the northern tip of the coast to the river villages of the [[place-taluqnapiqrgn|Lake Tundra]]. Each of the dozen peoples of the coast speaks it its own way. The capes speak it fast and swallow the vowels between consonants; the river villages draw every vowel out, and the coast hears them as slow. The East People, who have gone east along the ice, have kept the speech of Whale Point as it was three generations ago, and a crew of them that comes home sounds old-fashioned to its own cousins.

The tongue is related to nothing the [[affiliation-kelwanuk|Cedar People]] speak, nor to the speech of the forest hunters up the rivers, and the south has never heard it. Trade at [[place-simimanik|Simi Manik]] is done with signs and a few dozen words each side has learned of the other's tongue, and the first words a Cedar trader learns are _nalgaq_, ivory, and _milgaq_, seal oil.

Nobody writes it. The Ice-Edge People keep their Rules, their names and their histories in memory, and the figures carved on a harpoon or a needle case mark whose it is without spelling a word.

## How the Tikupilarit Language sounds

The Tikupilarit Language is a tongue of long words with hard endings. A sentence sounds to a stranger like ice cracking: runs of _k_ and _q_ and _t_, with _a_, _i_ and _u_ between them and a word closing on a consonant at every pause. _Piluk_ is a seal, _kaniaq_ a men's house, and _tikupilarit_ the Ice-Edge People.

**The vowels.** _a_ leads, then _i_ and _u_, with _e_ far behind. There is no _o_. Each has its plain value. Two vowels stand together only as _ia_ or _ua_, and each is then said on its own: _kaniaq_ is ka-NI-aq, _kalviaq_ is kal-VI-aq.

**The consonants.** _k_, _q_, _t_, _n_, _m_ and _p_ lead, then _v_, _s_, _y_ and _ch_. _g_, _r_, _l_ and _ng_ are common inside a word and never open one. _q_ is a _k_ said farther back in the throat, and a plain _k_ is a good enough way to say it; _g_ is always hard, as in _go_, and _r_ may be rolled or not.

**Shapes and endings.** The commonest words have two syllables, many have three, and the built words run to four and five. A syllable opens on one consonant and may close on one, so that two consonants often meet inside a word: _naqlik_, a harpoon, _kalviaqtiq_, a boat-holder. More than half of all words end on a consonant, and nearly all of those on _q_, _k_ or _n_. A verb always ends on a vowel.

**What the Tikupilarit Language leaves out.** It has no _o_, no _b_, _d_, _f_, _j_ or _z_, and no _h_ except in _ch_. It has no _sh_, _th_ or _kh_, no _ts_ or _kw_, no doubled letters, and no catch in the throat. No word opens on two consonants, or on _g_, _r_, _l_ or _ng_.

## Phonology

### Consonant System

**Stops:** p, t, k, q, g

**Affricate:** ch

**Fricatives:** v, s

**Nasals:** m, n, ng

**Liquids and glides:** l, r, w, y

### Vowel System

**Vowels:** a, i, u and e, each with its plain value. The tongue has no long vowels. _ia_ and _ua_ are two vowels said one after the other, never run together.

### Stress

A word of two syllables is stressed on the first, and a longer word on the second-to-last, by the rule of [[doc-prnncthlrn|Pronouncing Thalorna]]: _piluk_ is PI-luk, _kaniaq_ is ka-NI-aq, _tikupilarit_ is ti-ku-pi-LA-rit. No word of the dictionary needs an accent.

## Grammar Notes

### Sentence Structure

The one who acts comes first, then whatever is acted on, and the verb comes last: _ika piluk kiva_, I see a seal, is "I seal see". _Naku_, not, stands immediately before the word it denies: _ika piluk naku kiva_, I do not see a seal. A word of time comes first of all: _talvi ika piluk kiva_, yesterday I saw a seal.

### Verbs

A verb does not change, and every verb ends on a vowel. _Kiva_ is to see, and _ika kiva_, _aqi kiva_ and _tat kiva_ are I see, you see and they see. Whether a thing happened, happens or will happen is said with a word of time when it matters, such as _talvi_, yesterday, or _kitva_, tomorrow.

### Nouns and the Plural

A noun takes _-t_ for more than one. A final _q_ or _k_ becomes _t_: _piluk_, a seal, _pilut_, seals; _kaniaq_, a men's house, _kaniat_, men's houses. A noun ending on _n_ adds _-it_: _talqun_, a mask, _talqunit_, masks. Any other noun adds _-t_: _napa_, a cliff, _napat_, cliffs. A number or a word of quantity leaves the noun as it is: _maqan piluk_, two seals.

The owner stands before what is owned, with nothing between them: _ikan pagik_ is my house, and _utkiq kaniaq_ the elder's men's house.

### Pronouns

_Ika_ is I, _aqi_ you and _ta_ he, she or it; _ikat_ is we, _aqit_ you, more than one, and _tat_ they. _Ikan_, _aqin_ and _ikatan_ are my, your and our. There is no separate word for a man or a woman spoken of.

### Questions

A question asking for a yes or a no opens with _qa_: _qa aqi piluk kiva_ is "do you see a seal?" Every other question word opens on _s_: _sakin_ who, _sana_ what, _simak_ which, _sami_ where, _siqa_ when, _sapik_ why, _satu_ how, _sakaq_ how many. The roman spelling marks the question with `?`, and the speaker marks it with the opening word.

### Building Words

Five endings make most of the built words. _-tiq_ makes a person of an act or a thing: _kuvla_, to hunt, gives _kuvlatiq_, a hunter, and _talqun_, a mask, gives _talquntiq_, a mask maker. _-qun_ makes a noun of a verb: _tayu_, to ask, gives _tayuqun_, an asking. _-rit_ makes a people: _tikupila_, the ice edge, gives _tikupilarit_, the people of the ice edge. _-miq_ makes a place: _kavru_, a walrus, gives _kavrumiq_, Walrus Place. _-tiaq_ makes an ordinal of a number. Two nouns set side by side make a compound, the first saying which: _imlak_, a whale, and _kagaq_, a cape, give _imlak kagaq_, Whale Point.

## Everyday speech

_Tavi_, "you have come", is the greeting at a door or a landing, and _pinaku_ the word at parting. _Aqavi_ thanks. _Ama_ is yes and _kat_ no.

A catch is shared with one word, _kavi_, give: the woman who cuts a seal says it as she hands a share to the child who carries it, and the house that receives it answers _aqavi_. A share is never refused. A guest is told _amu_, eat, before anything else is said.

_Ikan pagik_ is my house, and _utkiq kaniaq_ the elder's men's house. _Umaq_ is mother and _utak_ father, _kiliq_ a child.

Numbers count by hands and by persons: _inak_, _maqan_, _tavlu_, _siqan_, _tamaq_, one to five, _tamaq_ being a hand's count; _ipak inak_, across one, is six, and so on to _ipak siqan_, nine; _apqan_, both hands, is ten. Twenty is _talik nimak_, a whole person, fingers and toes. _Itqaq_ is a hundred and _apqan itqaq_ a thousand. A number takes _-tiaq_ to give its place: _inaktiaq_, first, _tavlutiaq_, third.

## Script and Literacy

The Tikupilarit Language has no script. A hunter carves his own mark on his harpoon heads, so that a seal found dead with a head in it is known as his, and a woman sews her family's pattern into the border of a parka. A speaker keeps a village's count of names and gifts in memory, and a mask shows what a shaman saw. None of these marks writes a word.

## Naming Traditions

A child is named for the most recent of the village's dead, or for one of its own family's, and is treated as that person come back: called by the kin words the dead person was called by, given their tools, and fed first by their widow. A name is two words set together, a thing of the world and an act: _Taluqivi_, Lake Giving Drink, _Kavrukuvla_, Walrus Hunting. Every name has been carried before, and a family knows the line of everyone who carried it. A person away from home adds the village: _Kavrukuvla of Kavrumiq_.

### Name Lists

**Women's names:** Taluqivi, Kilnaqivi, Pinaqaklu, Nalaqkalvi, Aliqkalvi, Nalikmalu, Qalaktayu, Nagaqkali

**Men's names:** Kavrukuvla, Piqanmalu, Imlakaklu, Tikumalu, Nalaqmalu, Kalgaqmalu, Kilnaqaklu, Nalvaqkuvla

**Villages:** Kavrumiq (Walrus Place), Napamiq (Cliff Place), Taqvamiq (Weir Place), Imlak Kagaq (Whale Point), Simi Manik (Trading Shore)

## Tikupilarit Lexicon {#lexicon}

A seal is _piluk_, a walrus _kavru_ and a whale _imlak_. A kayak is _ulvak_, a skin boat _kalviaq_, a harpoon _naqlik_, and the toggling head that holds in the wound _pikluq_. A men's house is _kaniaq_, a mask _talqun_, and a namesake _kilutiq_. This page is the word-hoard of the Tikupilarit: its words, the endings that build new ones, and the register of every name the setting gives the Ice-Edge People, their villages and their offices.

The Tikupilarit Language is unwritten, and the spellings on this page are the setting's one roman transcription of it. The tongue has no capital letters, so a word or a name stands here in lowercase; the prose of these pages capitalizes a name as it does any other.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited: a noun in its plain form for one, a verb in the form it never leaves. A word made of smaller parts names them, joined by `+`, and the form is exactly those parts set side by side, an ending added whole. A phrase of two words, such as _naku kuaga_, never, which is "not always", is cited as it is said.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-tikupilaritlng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide, Pronouncing Thalorna.

### Word edges

A word opens on a vowel or on a single consonant, _ch_ counting as one, but never on _g_, _r_, _l_ or _ng_. It closes on a vowel or on one of the consonants below.

```sql
SELECT CASE edge WHEN 'openCluster' THEN 'Pairs that may open a word' WHEN 'closeConsonant' THEN 'Consonants that close a word' WHEN 'vowelPair' THEN 'Vowels that run as one' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-tikupilaritlng' ORDER BY position
```

### Clusters

Two consonants meet inside a word where a syllable closes on _k_, _q_, _g_, _r_, _l_, _m_, _n_, _s_ or _v_ before the next. _ng_ is one sound written with two letters, so _ngy_ holds three letters together and two sounds.

```sql
SELECT 'Most consonant letters together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-tikupilaritlng'
```

## Building words {#building-words}

Two moves make every built word on this page. **Words set side by side** make a compound, the first marking the second: _tiku_, ice, and _pila_, an edge, give _tikupila_, the ice edge. **An ending on a word** makes a person, a people, a place, a noun or an ordinal of it.

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", attaches AS "Stem", gloss AS "Makes", coalesce(nullif(array_to_string(list_transform(examples, e -> regexp_replace(e, '^(\S+) > ([^\s,;]+)', '_\1_ > _\2_')), ', '), ''), '—') AS "Example"
FROM affixes
WHERE language = 'thalorna-note-skill-tikupilaritlng'
ORDER BY position
```

## Words {#words}

### Sea, ice and sky

The four quarters are named for what lies in them: _tikun_, the north, is the way toward the ice, and _mapi_, the east, the way the kin have gone.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tikupilaritlng' AND field = 'Sea, ice and sky'
ORDER BY position
```

### Kayak, harpoon and the hunt

Every keeper on the coast is a word built with _-tiq_: the hunter, the provider, the boat-holder and the shaman each do or keep something.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tikupilaritlng' AND field = 'Kayak, harpoon and the hunt'
ORDER BY position
```

### Seal, walrus and whale

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tikupilaritlng' AND field = 'Seal, walrus and whale'
ORDER BY position
```

### The men's house and the masks

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tikupilaritlng' AND field = 'The men''s house and the masks'
ORDER BY position
```

### Kin and village

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tikupilaritlng' AND field = 'Kin and village'
ORDER BY position
```

### Body and feeling

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tikupilaritlng' AND field = 'Body and feeling'
ORDER BY position
```

### Everyday speech

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tikupilaritlng' AND field = 'Everyday speech'
ORDER BY position
```

## Making names {#making-names}

**A person** carries two words set together, a thing of the world and an act, and the name has always been carried before: _taluqivi_ is _taluq_, a lake, and _ivi_, to give a drink. **A place** names what is there: _-miq_ makes a place of a thing, so Kavrumiq is _kavru_, a walrus, and _-miq_, Walrus Place, and two words side by side name a cape or a stretch of country, as _imlak kagaq_, Whale Point, and _tiku manik_, the Ice Coast. **A people** takes _-rit_: _mapirit_ are the East People.

**The people** are _tikupilarit_, the people of the ice edge, and the name these pages give them is the Ice-Edge People. They call the kin who have gone east _mapirit_, the East People, and the older people of the eastern tundra _kipirit_, Those Who Give Way. The south has no name for them.

## Scope {#scope}

The register below holds every name of every note of the Ice-Edge People. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'folders' THEN 'folder' WHEN 'cultures' THEN 'culture' WHEN 'parents' THEN 'parent' WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-tikupilaritlng'
GROUP BY kind ORDER BY CASE kind WHEN 'folders' THEN 0 WHEN 'cultures' THEN 1 WHEN 'parents' THEN 2 WHEN 'addresses' THEN 3 END
```

## Attested names {#attested-names}

Every name the setting gives the Ice-Edge People, their villages, their places and their feasts, with the note where it is met. A name built from this page shows how; a name in the reader's tongue, or in another people's, is tagged as such.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'tikupilarit' THEN ', [[' || tongue_language || '|Tikupilarit]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-tikupilaritlng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-tikupilaritlng' ORDER BY position
```
