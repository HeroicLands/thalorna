---
shortcode: teyumilng
name: {full: Teyumi Language, aliases: []}
type: skill
subType: language
description: "The unwritten tongue of the Turquoise People of the desert's northern rim: open, soft and long-voweled, spoken in the canyons and along the canals."
tags: []
data:
  roman: "aeghiklmnopstuvwyáéíóú0123456789.,?!“”—…-'"
  core: true
  abbreviation: Tey.
  fields:
    - name: "Rain, sky and stone"
      holds: "Weather, the sky and its lights, the land, and the stone the people hold sacred."
    - {name: Field and canal, holds: "Corn, the field crops, the canals and the growing things."}
    - name: The house and the road
      holds: "The great houses, their rooms and stores, the roads, and the goods that travel on them."
    - name: Chamber and rite
      holds: "The sunken chambers, their offices, and the dances that call the rain."
    - {name: Kin and town, holds: "Kin, clan and household, and a person's standing in a town."}
    - {name: Body and feeling, holds: "The body, the senses, health, needs and the passions."}
    - name: Everyday speech
      holds: "Ordinary words for daily life: numbers, pronouns, questions, time, place and the rest."
  affixes:
    - form: "-ni"
      gloss: "the act or state of it: a noun made from a verb or a quality"
      attaches: "added"
      examples: ["tauvo > tauvoni, a sight", "pesa > pesani, drought"]
    - form: "-yo"
      gloss: "one who belongs to it, keeps it or does it"
      attaches: "added"
      attachesTo: [n]
      examples: ["pelu > peluyo, an initiate of a chamber", "kwatu > kwatuyo, the southerner"]
    - form: "-mi"
      gloss: "the people of it: a clan, or a whole people"
      attaches: "added"
      attachesTo: [n]
      examples: ["teyu > teyumi, the Turquoise People", "omalo > omalomi, the Cloud clan"]
    - form: "-sa"
      gloss: "the place in a count: an ordinal"
      attaches: "added"
      attachesTo: [num]
      examples: ["keli > kelisa, fourth"]
  grammar:
    plural:
      - {ending: a, becomes: am}
      - {ending: e, becomes: em}
      - {ending: i, becomes: im}
      - {ending: o, becomes: om}
      - {ending: u, becomes: um}
      - {ending: "", becomes: im}
    verbs: {invariant: true}
  words:
    - form: "teyu"
      class: n
      field: "Rain, sky and stone"
      gloss: "turquoise; rain made stone, the sacred stone"
      source: {kind: coined}
    - form: "luma"
      class: n
      field: "Rain, sky and stone"
      gloss: "rain"
      concept: rain
      source: {kind: coined}
    - form: "omalo"
      class: n
      field: "Rain, sky and stone"
      gloss: "a cloud; the dead come back as rain-bearers"
      concept: cloud
      source: {kind: coined}
    - form: "muva"
      class: n
      field: "Rain, sky and stone"
      gloss: "water"
      concept: water
      source: {kind: coined}
    - form: "waima"
      class: n
      field: "Rain, sky and stone"
      gloss: "the sun"
      concept: sun
      source: {kind: coined}
    - form: "yalu"
      class: n
      field: "Rain, sky and stone"
      gloss: "the moon"
      concept: moon
      source: {kind: coined}
    - form: "hesi"
      class: n
      field: "Rain, sky and stone"
      gloss: "a star"
      concept: star
      source: {kind: coined}
    - form: "pesa"
      class: adj
      field: "Rain, sky and stone"
      gloss: "dry; without rain"
      concept: dry
      source: {kind: coined}
    - form: "pesani"
      class: n
      field: "Rain, sky and stone"
      gloss: "drought; the dry years"
      built: ["pesa", "-ni"]
      source: {kind: coined}
    - form: "huvo"
      class: n
      field: "Rain, sky and stone"
      gloss: "a mesa; a flat-topped hill with cliff sides"
      source: {kind: coined}
    - form: "oyala"
      class: n
      field: "Rain, sky and stone"
      gloss: "a canyon; a valley"
      concept: valley
      source: {kind: coined}
    - form: "kwatu"
      class: n
      field: "Rain, sky and stone"
      gloss: "the south"
      concept: south
      source: {kind: coined}
    - form: "kovaa"
      class: n
      field: "Rain, sky and stone"
      gloss: "earth"
      concept: earth
      source: {kind: coined}
    - form: "aneiten"
      class: n
      field: "Rain, sky and stone"
      gloss: "rock"
      concept: rock
      source: {kind: coined}
    - form: "luya"
      class: n
      field: "Rain, sky and stone"
      gloss: "sand"
      concept: sand
      source: {kind: coined}
    - form: "titii"
      class: n
      field: "Rain, sky and stone"
      gloss: "dust"
      concept: dust
      source: {kind: coined}
    - form: "lamupo"
      class: n
      field: "Rain, sky and stone"
      gloss: "land"
      concept: land
      source: {kind: coined}
    - form: "vetanta"
      class: n
      field: "Rain, sky and stone"
      gloss: "mountain"
      concept: mountain
      source: {kind: coined}
    - form: "potama"
      class: n
      field: "Rain, sky and stone"
      gloss: "hill"
      concept: hill
      source: {kind: coined}
    - form: "soko"
      class: n
      field: "Rain, sky and stone"
      gloss: "a plain; flat open land"
      concept: plain-landform
      source: {kind: coined}
    - form: "seni"
      class: n
      field: "Rain, sky and stone"
      gloss: "forest"
      concept: forest
      source: {kind: coined}
    - form: "wahaula"
      class: n
      field: "Rain, sky and stone"
      gloss: "cave"
      concept: cave
      source: {kind: coined}
    - form: "mauta"
      class: n
      field: "Rain, sky and stone"
      gloss: "river"
      concept: river
      source: {kind: coined}
    - form: "vauseke"
      class: n
      field: "Rain, sky and stone"
      gloss: "stream"
      concept: stream
      source: {kind: coined}
    - form: "walki"
      class: n
      field: "Rain, sky and stone"
      gloss: "lake"
      concept: lake
      source: {kind: coined}
    - form: "viku"
      class: n
      field: "Rain, sky and stone"
      gloss: "sea"
      concept: sea
      source: {kind: coined}
    - form: "posahetso"
      class: n
      field: "Rain, sky and stone"
      gloss: "ocean"
      concept: ocean
      source: {kind: coined}
    - form: "vuvihisak"
      class: n
      field: "Rain, sky and stone"
      gloss: "shore"
      concept: shore
      source: {kind: coined}
    - form: "likwoyat"
      class: n
      field: "Rain, sky and stone"
      gloss: "snow"
      concept: snow
      source: {kind: coined}
    - form: "tuyuuke"
      class: n
      field: "Rain, sky and stone"
      gloss: "ice"
      concept: ice
      source: {kind: coined}
    - form: "toipakalo"
      class: n
      field: "Rain, sky and stone"
      gloss: "sky"
      concept: sky
      source: {kind: coined}
    - form: "kaama"
      class: n
      field: "Rain, sky and stone"
      gloss: "wind"
      concept: wind
      source: {kind: coined}
    - form: "hono"
      class: n
      field: "Rain, sky and stone"
      gloss: "storm"
      concept: storm
      source: {kind: coined}
    - form: "tatiivisi"
      class: n
      field: "Rain, sky and stone"
      gloss: "thunder"
      concept: thunder
      source: {kind: coined}
    - form: "kwayau"
      class: n
      field: "Rain, sky and stone"
      gloss: "lightning"
      concept: lightning
      source: {kind: coined}
    - form: "ivo"
      class: n
      field: "Rain, sky and stone"
      gloss: "animal"
      concept: animal
      source: {kind: coined}
    - form: "silupa"
      class: n
      field: "Rain, sky and stone"
      gloss: "beast"
      concept: beast
      source: {kind: coined}
    - form: "numonatu"
      class: n
      field: "Rain, sky and stone"
      gloss: "bird"
      concept: bird
      source: {kind: coined}
    - form: "kwike"
      class: n
      field: "Rain, sky and stone"
      gloss: "fish"
      concept: fish
      source: {kind: coined}
    - form: "me'u"
      class: n
      field: "Rain, sky and stone"
      gloss: "insect"
      concept: insect
      source: {kind: coined}
    - form: "vii"
      class: n
      field: "Rain, sky and stone"
      gloss: "worm"
      concept: worm
      source: {kind: coined}
    - form: "paaya"
      class: adj
      field: "Rain, sky and stone"
      gloss: "wet"
      concept: wet
      source: {kind: coined}
    - form: "niipan"
      class: adj
      field: "Rain, sky and stone"
      gloss: "bright"
      concept: bright
      source: {kind: coined}
    - form: "mukopuho"
      class: adj
      field: "Rain, sky and stone"
      gloss: "dark"
      concept: dark
      source: {kind: coined}
    - form: "luvula"
      class: n
      field: "Rain, sky and stone"
      gloss: "clear weather; without clouds"
      concept: clear-weather
      source: {kind: coined}
    - form: "keiwa"
      class: adj
      field: "Rain, sky and stone"
      gloss: "cloudy"
      concept: cloudy
      source: {kind: coined}
    - form: "kano"
      class: n
      field: "Rain, sky and stone"
      gloss: "north"
      concept: north
      source: {kind: coined}
    - form: "pova"
      class: n
      field: "Rain, sky and stone"
      gloss: "east"
      concept: east
      source: {kind: coined}
    - form: "mait"
      class: n
      field: "Rain, sky and stone"
      gloss: "west"
      concept: west
      source: {kind: coined}
    - form: "tseya"
      class: n
      field: "Field and canal"
      gloss: "corn; maize"
      source: {kind: coined}
    - {form: "molo", class: n, field: "Field and canal", gloss: "a bean", source: {kind: coined}}
    - form: "ilavu"
      class: n
      field: "Field and canal"
      gloss: "a squash"
      source: {kind: coined}
    - form: "kenuva"
      class: n
      field: "Field and canal"
      gloss: "a canal; a ditch that leads water to a field"
      source: {kind: coined}
    - form: "lani"
      class: n
      field: "Field and canal"
      gloss: "soil"
      concept: soil
      source: {kind: coined}
    - form: "tupong"
      class: n
      field: "Field and canal"
      gloss: "mud"
      concept: mud
      source: {kind: coined}
    - form: "tipei"
      class: n
      field: "Field and canal"
      gloss: "field"
      concept: field
      source: {kind: coined}
    - form: "popatet"
      class: n
      field: "Field and canal"
      gloss: "plant"
      concept: plant
      source: {kind: coined}
    - form: "mivi"
      class: n
      field: "Field and canal"
      gloss: "tree"
      concept: tree
      source: {kind: coined}
    - form: "sumu"
      class: n
      field: "Field and canal"
      gloss: "leaf"
      concept: leaf
      source: {kind: coined}
    - form: "kakau'en"
      class: n
      field: "Field and canal"
      gloss: "root"
      concept: root
      source: {kind: coined}
    - form: "tokami"
      class: n
      field: "Field and canal"
      gloss: "branch"
      concept: branch
      source: {kind: coined}
    - form: "kwa"
      class: n
      field: "Field and canal"
      gloss: "flower"
      concept: flower
      source: {kind: coined}
    - form: "hapamai"
      class: n
      field: "Field and canal"
      gloss: "fruit"
      concept: fruit
      source: {kind: coined}
    - form: "lumanamo"
      class: n
      field: "Field and canal"
      gloss: "seed"
      concept: seed
      source: {kind: coined}
    - form: "tseka"
      class: n
      field: "Field and canal"
      gloss: "grass"
      concept: grass
      source: {kind: coined}
    - form: "hosa"
      class: n
      field: "The house and the road"
      gloss: "a great house: a terraced block of many rooms that stores a town's grain and hosts its rites"
      source: {kind: coined}
    - form: "wala"
      class: n
      field: "The house and the road"
      gloss: "a house; a home; the rooms of one household"
      concept: abode
      source: {kind: coined}
    - form: "ponu"
      class: n
      field: "The house and the road"
      gloss: "a road; a straight road between great houses"
      source: {kind: coined}
    - form: "mehu"
      class: n
      field: "The house and the road"
      gloss: "a storeroom; the grain-room of a great house"
      source: {kind: coined}
    - form: "seluki"
      class: n
      field: "The house and the road"
      gloss: "a grinding stone; the slab a woman grinds corn on"
      source: {kind: coined}
    - form: "hepu"
      class: n
      field: "The house and the road"
      gloss: "a door; a doorway"
      concept: door
      source: {kind: coined}
    - form: "kowa"
      class: n
      field: "The house and the road"
      gloss: "fire"
      concept: fire
      source: {kind: coined}
    - form: "tilin"
      class: n
      field: "The house and the road"
      gloss: "a copper bell from the south"
      source: {kind: coined}
    - form: "vaiya"
      class: n
      field: "The house and the road"
      gloss: "copper; any metal"
      concept: metal
      source: {kind: coined}
    - form: "sumi"
      class: n
      field: "The house and the road"
      gloss: "cotton; cotton cloth"
      source: {kind: coined}
    - form: "aalo"
      class: n
      field: "The house and the road"
      gloss: "a macaw, the southern bird kept alive for its feathers"
      source: {kind: coined}
    - form: "humoli"
      class: n
      field: "The house and the road"
      gloss: "cacao, the bitter southern bean drunk at feasts"
      source: {kind: coined}
    - form: "hosamota"
      class: n
      field: "The house and the road"
      gloss: "the head of a great house"
      built: ["hosa", "mota"]
      source: {kind: coined}
    - form: "kwatuyo"
      class: n
      field: "The house and the road"
      gloss: "the keeper of the south road; the southerner"
      built: ["kwatu", "-yo"]
      source: {kind: coined}
    - form: "sek"
      class: n
      field: "The house and the road"
      gloss: "a chair"
      concept: chair
      source: {kind: coined}
    - form: "vamei"
      class: n
      field: "The house and the road"
      gloss: "a table"
      concept: table
      source: {kind: coined}
    - form: "tayotatat"
      class: n
      field: "The house and the road"
      gloss: "a bed"
      concept: bed
      source: {kind: coined}
    - form: "kopu"
      class: n
      field: "The house and the road"
      gloss: "a floor"
      concept: floor
      source: {kind: coined}
    - form: "tilama"
      class: n
      field: "The house and the road"
      gloss: "a wall"
      concept: wall
      source: {kind: coined}
    - form: "mavanik"
      class: n
      field: "The house and the road"
      gloss: "a roof"
      concept: roof
      source: {kind: coined}
    - form: "kutavo"
      class: n
      field: "The house and the road"
      gloss: "a hearth"
      concept: hearth
      source: {kind: coined}
    - form: "uten"
      class: n
      field: "The house and the road"
      gloss: "a lock"
      concept: lock
      source: {kind: coined}
    - form: "kuule"
      class: n
      field: "The house and the road"
      gloss: "a key"
      concept: key
      source: {kind: coined}
    - form: "muskuso"
      class: n
      field: "The house and the road"
      gloss: "a window"
      concept: window
      source: {kind: coined}
    - form: "panong"
      class: n
      field: "The house and the road"
      gloss: "shutters"
      concept: shutters
      source: {kind: coined}
    - form: "vinehi"
      class: n
      field: "The house and the road"
      gloss: "a cup"
      concept: cup
      source: {kind: coined}
    - form: "vawo"
      class: n
      field: "The house and the road"
      gloss: "a bowl"
      concept: bowl
      source: {kind: coined}
    - form: "mosautset"
      class: n
      field: "The house and the road"
      gloss: "a knife"
      concept: knife
      source: {kind: coined}
    - form: "yuu"
      class: n
      field: "The house and the road"
      gloss: "a spoon"
      concept: spoon
      source: {kind: coined}
    - form: "tsolu"
      class: n
      field: "The house and the road"
      gloss: "a pot"
      concept: pot
      source: {kind: coined}
    - form: "nupuu"
      class: n
      field: "The house and the road"
      gloss: "a lamp"
      concept: lamp
      source: {kind: coined}
    - form: "nipok"
      class: n
      field: "The house and the road"
      gloss: "cloth"
      concept: cloth
      source: {kind: coined}
    - form: "toyu"
      class: n
      field: "The house and the road"
      gloss: "clothes"
      concept: clothes
      source: {kind: coined}
    - form: "kiik"
      class: n
      field: "The house and the road"
      gloss: "room"
      concept: room
      source: {kind: coined}
    - form: "hini"
      class: n
      field: "The house and the road"
      gloss: "ceiling"
      concept: ceiling
      source: {kind: coined}
    - form: "nutosau"
      class: n
      field: "The house and the road"
      gloss: "seat"
      concept: seat
      source: {kind: coined}
    - form: "sahi"
      class: n
      field: "The house and the road"
      gloss: "bench"
      concept: bench
      source: {kind: coined}
    - form: "puniko"
      class: n
      field: "The house and the road"
      gloss: "jar"
      concept: jar
      source: {kind: coined}
    - form: "vaaki"
      class: n
      field: "The house and the road"
      gloss: "bottle"
      concept: bottle
      source: {kind: coined}
    - form: "wa'at"
      class: n
      field: "The house and the road"
      gloss: "basket"
      concept: basket
      source: {kind: coined}
    - form: "kilopuu"
      class: n
      field: "The house and the road"
      gloss: "bag"
      concept: bag
      source: {kind: coined}
    - form: "omo"
      class: n
      field: "The house and the road"
      gloss: "hammer"
      concept: hammer
      source: {kind: coined}
    - form: "kaitsapa"
      class: n
      field: "The house and the road"
      gloss: "rope"
      concept: rope
      source: {kind: coined}
    - form: "kwautala"
      class: n
      field: "The house and the road"
      gloss: "cord"
      concept: cord
      source: {kind: coined}
    - form: "piihang"
      class: n
      field: "The house and the road"
      gloss: "needle"
      concept: needle
      source: {kind: coined}
    - form: "sana"
      class: n
      field: "The house and the road"
      gloss: "flame"
      concept: flame
      source: {kind: coined}
    - form: "tiku"
      class: n
      field: "The house and the road"
      gloss: "smoke"
      concept: smoke
      source: {kind: coined}
    - form: "kwiwitsu"
      class: n
      field: "The house and the road"
      gloss: "ash"
      concept: ash
      source: {kind: coined}
    - form: "mikalan"
      class: n
      field: "The house and the road"
      gloss: "coal"
      concept: coal
      source: {kind: coined}
    - form: "kulotsa"
      class: n
      field: "The house and the road"
      gloss: "torch"
      concept: torch
      source: {kind: coined}
    - form: "taki"
      class: n
      field: "The house and the road"
      gloss: "candle"
      concept: candle
      source: {kind: coined}
    - form: "kaaka"
      class: n
      field: "The house and the road"
      gloss: "garment"
      concept: garment
      source: {kind: coined}
    - form: "siluun"
      class: n
      field: "The house and the road"
      gloss: "shirt"
      concept: shirt
      source: {kind: coined}
    - form: "luhu"
      class: n
      field: "The house and the road"
      gloss: "cloak"
      concept: cloak
      source: {kind: coined}
    - form: "nu'imu"
      class: n
      field: "The house and the road"
      gloss: "belt"
      concept: belt
      source: {kind: coined}
    - form: "lita"
      class: n
      field: "The house and the road"
      gloss: "shoe"
      concept: shoe
      source: {kind: coined}
    - form: "kukuu"
      class: n
      field: "The house and the road"
      gloss: "boot"
      concept: boot
      source: {kind: coined}
    - form: "tutuu"
      class: n
      field: "The house and the road"
      gloss: "gate"
      concept: gate
      source: {kind: coined}
    - form: "taluve"
      class: n
      field: "The house and the road"
      gloss: "barrier"
      concept: barrier
      source: {kind: coined}
    - form: "hiha"
      class: n
      field: "The house and the road"
      gloss: "wood"
      concept: wood
      source: {kind: coined}
    - form: "hutana"
      class: n
      field: "The house and the road"
      gloss: "stone"
      concept: stone
      source: {kind: coined}
    - form: "lutsai"
      class: n
      field: "The house and the road"
      gloss: "clay"
      concept: clay
      source: {kind: coined}
    - form: "naa'u"
      class: n
      field: "The house and the road"
      gloss: "leather"
      concept: leather
      source: {kind: coined}
    - form: "navatu"
      class: n
      field: "The house and the road"
      gloss: "wool"
      concept: wool
      source: {kind: coined}
    - form: "sikin"
      class: n
      field: "The house and the road"
      gloss: "thread"
      concept: thread
      source: {kind: coined}
    - form: "pelu"
      class: n
      field: "Chamber and rite"
      gloss: "a sunken ritual chamber, round and roofed, entered by a ladder through its roof"
      source: {kind: coined}
    - form: "halu"
      class: n
      field: "Chamber and rite"
      gloss: "a dance; a rite danced in the plaza"
      source: {kind: coined}
    - form: "omaloyo"
      class: n
      field: "Chamber and rite"
      gloss: "a cloud dancer, a masked dancer who stands for the cloud-dead"
      built: ["omalo", "-yo"]
      source: {kind: coined}
    - form: "pukiya"
      class: n
      field: "Chamber and rite"
      gloss: "a clown of the rites, who mocks wrongdoing in the plaza"
      source: {kind: coined}
    - form: "pesatasi"
      class: n
      field: "Chamber and rite"
      gloss: "a dry heart; one whose bitterness is held to keep the rain away"
      built: ["pesa", "tasi"]
      source: {kind: coined}
    - form: "pelumota"
      class: n
      field: "Chamber and rite"
      gloss: "a chamber elder, who leads the rites of a chamber"
      built: ["pelu", "mota"]
      source: {kind: coined}
    - form: "lumamota"
      class: n
      field: "Chamber and rite"
      gloss: "a rain chief, who keeps the rain rites of a town and orders its year"
      built: ["luma", "mota"]
      source: {kind: coined}
    - form: "waimayo"
      class: n
      field: "Chamber and rite"
      gloss: "a sun watcher, who reads the sunrise against a great house wall"
      built: ["waima", "-yo"]
      source: {kind: coined}
    - form: "peluyo"
      class: n
      field: "Chamber and rite"
      gloss: "an initiate of a chamber"
      built: ["pelu", "-yo"]
      source: {kind: coined}
    - form: "matsau"
      class: n
      field: "Chamber and rite"
      gloss: "a bear, the healer and guardian painted on chamber walls"
      source: {kind: coined}
    - form: "pesayo"
      class: n
      field: "Kin and town"
      gloss: "one of the Dry, put out of every town and refused water"
      built: ["pesa", "-yo"]
      source: {kind: coined}
    - form: "walayo"
      class: n
      field: "Kin and town"
      gloss: "a member of a household; a townsperson"
      built: ["wala", "-yo"]
      source: {kind: coined}
    - form: "hosayo"
      class: n
      field: "Kin and town"
      gloss: "great-house kin"
      built: ["hosa", "-yo"]
      source: {kind: coined}
    - form: "vailatini"
      class: n
      field: "Kin and town"
      gloss: "exchange"
      concept: exchange-noun
      built: ["vailati", "-ni"]
      source: {kind: coined}
    - form: "vopini"
      class: n
      field: "Kin and town"
      gloss: "freedom"
      concept: freedom
      built: ["vopi", "-ni"]
      source: {kind: coined}
    - form: "lisko"
      class: n
      field: "Kin and town"
      gloss: "justice"
      concept: justice
      source: {kind: coined}
    - form: "ota lisko"
      class: n
      field: "Kin and town"
      gloss: "injustice"
      concept: injustice
      built: ["ota", "lisko"]
      source: {kind: coined}
    - form: "ema"
      class: n
      field: "Kin and town"
      gloss: "mother"
      concept: mother
      source: {kind: coined}
    - form: "yema"
      class: n
      field: "Kin and town"
      gloss: "father"
      concept: father
      source: {kind: coined}
    - form: "tsaa"
      class: n
      field: "Kin and town"
      gloss: "parent"
      concept: parent
      source: {kind: coined}
    - form: "atai"
      class: n
      field: "Kin and town"
      gloss: "child"
      concept: child
      source: {kind: coined}
    - form: "moto"
      class: n
      field: "Kin and town"
      gloss: "son"
      concept: son
      source: {kind: coined}
    - form: "piwiina"
      class: n
      field: "Kin and town"
      gloss: "daughter"
      concept: daughter
      source: {kind: coined}
    - form: "kwalapan"
      class: n
      field: "Kin and town"
      gloss: "brother"
      concept: brother
      source: {kind: coined}
    - form: "wivan"
      class: n
      field: "Kin and town"
      gloss: "sister"
      concept: sister
      source: {kind: coined}
    - form: "yaa"
      class: n
      field: "Kin and town"
      gloss: "grandmother"
      concept: grandmother
      source: {kind: coined}
    - form: "lotsa"
      class: n
      field: "Kin and town"
      gloss: "grandfather"
      concept: grandfather
      source: {kind: coined}
    - form: "nakikwi"
      class: n
      field: "Kin and town"
      gloss: "grandchild"
      concept: grandchild
      source: {kind: coined}
    - form: "lasingo"
      class: n
      field: "Kin and town"
      gloss: "uncle"
      concept: uncle
      source: {kind: coined}
    - form: "sinau"
      class: n
      field: "Kin and town"
      gloss: "aunt"
      concept: aunt
      source: {kind: coined}
    - form: "tsii"
      class: n
      field: "Kin and town"
      gloss: "cousin"
      concept: cousin
      source: {kind: coined}
    - form: "meivun"
      class: n
      field: "Kin and town"
      gloss: "husband"
      concept: husband
      source: {kind: coined}
    - form: "talayo"
      class: n
      field: "Kin and town"
      gloss: "wife"
      concept: wife
      source: {kind: coined}
    - form: "panokin"
      class: n
      field: "Kin and town"
      gloss: "ancestor"
      concept: ancestor
      source: {kind: coined}
    - form: "piwa"
      class: n
      field: "Kin and town"
      gloss: "descendant"
      concept: descendant
      source: {kind: coined}
    - form: "vipuukik"
      class: n
      field: "Kin and town"
      gloss: "orphan"
      concept: orphan
      source: {kind: coined}
    - form: "mikwang"
      class: n
      field: "Kin and town"
      gloss: "widow"
      concept: widow
      source: {kind: coined}
    - form: "tosavu"
      class: n
      field: "Kin and town"
      gloss: "grandparent"
      concept: grandparent
      source: {kind: coined}
    - form: "kaayuli"
      class: n
      field: "Kin and town"
      gloss: "nephew"
      concept: nephew
      source: {kind: coined}
    - form: "vuupopu"
      class: n
      field: "Kin and town"
      gloss: "niece"
      concept: niece
      source: {kind: coined}
    - form: "koya"
      class: n
      field: "Kin and town"
      gloss: "spouse"
      concept: spouse
      source: {kind: coined}
    - form: "pohan"
      class: n
      field: "Kin and town"
      gloss: "marriage"
      concept: marriage
      source: {kind: coined}
    - form: "kangaitat"
      class: v
      field: "Kin and town"
      gloss: "marry"
      concept: marry
      source: {kind: coined}
    - form: "aloita"
      class: n
      field: "Kin and town"
      gloss: "family"
      concept: family
      source: {kind: coined}
    - form: "kwitsin"
      class: n
      field: "Kin and town"
      gloss: "kin"
      concept: kin
      source: {kind: coined}
    - form: "latahan"
      class: n
      field: "Kin and town"
      gloss: "lineage"
      concept: lineage
      source: {kind: coined}
    - form: "utsaa"
      class: n
      field: "Kin and town"
      gloss: "widower"
      concept: widower
      source: {kind: coined}
    - form: "meskaa"
      class: n
      field: "Kin and town"
      gloss: "friend"
      concept: friend
      source: {kind: coined}
    - form: "nawi"
      class: n
      field: "Kin and town"
      gloss: "enemy"
      concept: enemy
      source: {kind: coined}
    - form: "kilung"
      class: n
      field: "Kin and town"
      gloss: "stranger"
      concept: stranger
      source: {kind: coined}
    - form: "tai'uka"
      class: n
      field: "Kin and town"
      gloss: "neighbor"
      concept: neighbor
      source: {kind: coined}
    - form: "asu"
      class: n
      field: "Kin and town"
      gloss: "companion"
      concept: companion
      source: {kind: coined}
    - form: "kayat"
      class: n
      field: "Kin and town"
      gloss: "guest"
      concept: guest
      source: {kind: coined}
    - form: "tankai"
      class: n
      field: "Kin and town"
      gloss: "host"
      concept: host
      source: {kind: coined}
    - form: "tayang"
      class: n
      field: "Kin and town"
      gloss: "leader"
      concept: leader
      source: {kind: coined}
    - form: "wiisepe'o"
      class: n
      field: "Kin and town"
      gloss: "follower"
      concept: follower
      source: {kind: coined}
    - form: "mavalu"
      class: n
      field: "Kin and town"
      gloss: "servant"
      concept: servant
      source: {kind: coined}
    - form: "wisanok"
      class: n
      field: "Kin and town"
      gloss: "master"
      concept: master
      source: {kind: coined}
    - form: "wamuuman"
      class: n
      field: "Kin and town"
      gloss: "teacher"
      concept: teacher
      source: {kind: coined}
    - form: "novait"
      class: n
      field: "Kin and town"
      gloss: "student"
      concept: student
      source: {kind: coined}
    - form: "hivilun"
      class: n
      field: "Kin and town"
      gloss: "person"
      concept: person
      source: {kind: coined}
    - form: "tsoto"
      class: n
      field: "Kin and town"
      gloss: "people"
      concept: people
      source: {kind: coined}
    - form: "tupeko"
      class: n
      field: "Kin and town"
      gloss: "human"
      concept: human
      source: {kind: coined}
    - form: "kikasa"
      class: n
      field: "Kin and town"
      gloss: "man"
      concept: man
      source: {kind: coined}
    - form: "saameyu"
      class: n
      field: "Kin and town"
      gloss: "woman"
      concept: woman
      source: {kind: coined}
    - form: "paayomuk"
      class: n
      field: "Kin and town"
      gloss: "boy"
      concept: boy
      source: {kind: coined}
    - form: "sahaasin"
      class: n
      field: "Kin and town"
      gloss: "girl"
      concept: girl
      source: {kind: coined}
    - form: "kukango"
      class: n
      field: "Kin and town"
      gloss: "adult"
      concept: adult
      source: {kind: coined}
    - form: "kaku"
      class: n
      field: "Kin and town"
      gloss: "elder"
      concept: elder
      source: {kind: coined}
    - form: "monguu"
      class: n
      field: "Kin and town"
      gloss: "individual"
      concept: individual
      source: {kind: coined}
    - form: "ke'ava"
      class: n
      field: "Kin and town"
      gloss: "group"
      concept: group
      source: {kind: coined}
    - form: "ponutakwe"
      class: n
      field: "Kin and town"
      gloss: "crowd"
      concept: crowd
      source: {kind: coined}
    - form: "lowai"
      class: n
      field: "Kin and town"
      gloss: "clan"
      concept: clan
      source: {kind: coined}
    - form: "naito"
      class: n
      field: "Kin and town"
      gloss: "tribe"
      concept: tribe
      source: {kind: coined}
    - form: "kuho"
      class: n
      field: "Kin and town"
      gloss: "community"
      concept: community
      source: {kind: coined}
    - form: "topika"
      class: n
      field: "Kin and town"
      gloss: "ruler"
      concept: ruler
      source: {kind: coined}
    - form: "tuto"
      class: n
      field: "Kin and town"
      gloss: "worker"
      concept: worker
      source: {kind: coined}
    - form: "mupik"
      class: n
      field: "Kin and town"
      gloss: "artisan"
      concept: artisan
      source: {kind: coined}
    - form: "moheseisu"
      class: n
      field: "Kin and town"
      gloss: "merchant"
      concept: merchant
      source: {kind: coined}
    - form: "pivotasau"
      class: n
      field: "Kin and town"
      gloss: "name"
      concept: name-noun
      source: {kind: coined}
    - form: "sutukila"
      class: n
      field: "Kin and town"
      gloss: "title"
      concept: title
      source: {kind: coined}
    - form: "wakwii"
      class: n
      field: "Kin and town"
      gloss: "rank"
      concept: rank
      source: {kind: coined}
    - form: "tihoha"
      class: n
      field: "Kin and town"
      gloss: "custom"
      concept: custom
      source: {kind: coined}
    - form: "tukakeiha"
      class: n
      field: "Kin and town"
      gloss: "tradition"
      concept: tradition
      source: {kind: coined}
    - form: "wahanpipe"
      class: n
      field: "Kin and town"
      gloss: "law"
      concept: law
      source: {kind: coined}
    - form: "tsu'omi"
      class: n
      field: "Kin and town"
      gloss: "rule"
      concept: rule
      source: {kind: coined}
    - form: "matsupun"
      class: n
      field: "Kin and town"
      gloss: "order"
      concept: order-noun
      source: {kind: coined}
    - form: "mikapa"
      class: n
      field: "Kin and town"
      gloss: "command"
      concept: command-noun
      source: {kind: coined}
    - form: "tsevetava"
      class: n
      field: "Kin and town"
      gloss: "obedience"
      concept: obedience
      source: {kind: coined}
    - form: "taye"
      class: n
      field: "Kin and town"
      gloss: "right; morally acceptable"
      concept: right-ethical
      source: {kind: coined}
    - form: "ninavu"
      class: n
      field: "Kin and town"
      gloss: "wrong; morally unacceptable"
      concept: wrong-ethical
      source: {kind: coined}
    - form: "natsun"
      class: n
      field: "Kin and town"
      gloss: "peace"
      concept: peace
      source: {kind: coined}
    - form: "tahe"
      class: n
      field: "Kin and town"
      gloss: "war"
      concept: war
      source: {kind: coined}
    - form: "yula"
      class: n
      field: "Kin and town"
      gloss: "captivity"
      concept: captivity
      source: {kind: coined}
    - form: "wakwipa"
      class: n
      field: "Kin and town"
      gloss: "gift"
      concept: gift
      source: {kind: coined}
    - form: "pokati"
      class: n
      field: "Kin and town"
      gloss: "debt"
      concept: debt
      source: {kind: coined}
    - form: "matsa"
      class: n
      field: "Kin and town"
      gloss: "wealth"
      concept: wealth
      source: {kind: coined}
    - form: "yumala"
      class: n
      field: "Kin and town"
      gloss: "poverty"
      concept: poverty
      source: {kind: coined}
    - form: "tupipan"
      class: n
      field: "Kin and town"
      gloss: "property"
      concept: property
      source: {kind: coined}
    - form: "taisi"
      class: n
      field: "Kin and town"
      gloss: "ownership"
      concept: ownership
      source: {kind: coined}
    - form: "kosot"
      class: n
      field: "Kin and town"
      gloss: "honor"
      concept: honor
      source: {kind: coined}
    - form: "niitikon"
      class: n
      field: "Kin and town"
      gloss: "secret"
      concept: secret
      source: {kind: coined}
    - form: "tasi"
      class: n
      field: "Body and feeling"
      gloss: "the heart; the seat of a person's temper"
      concept: heart
      source: {kind: coined}
    - form: "mota"
      class: n
      field: "Body and feeling"
      gloss: "the head; the head of a body of people"
      concept: head
      source: {kind: coined}
    - form: "tauvo"
      class: v
      field: "Body and feeling"
      gloss: "to see"
      concept: see-verb
      source: {kind: coined}
    - form: "tauvoni"
      class: n
      field: "Body and feeling"
      gloss: "a sight; what is seen"
      concept: see-noun
      built: ["tauvo", "-ni"]
      source: {kind: coined}
    - form: "nasu"
      class: v
      field: "Body and feeling"
      gloss: "to hear"
      concept: hear-verb
      source: {kind: coined}
    - form: "nasuni"
      class: n
      field: "Body and feeling"
      gloss: "a sound; what is heard"
      concept: hear-noun
      built: ["nasu", "-ni"]
      source: {kind: coined}
    - form: "miya"
      class: v
      field: "Body and feeling"
      gloss: "to die"
      concept: die
      source: {kind: coined}
    - form: "miyani"
      class: n
      field: "Body and feeling"
      gloss: "death"
      concept: death
      built: ["miya", "-ni"]
      source: {kind: coined}
    - form: "taavu"
      class: v
      field: "Body and feeling"
      gloss: "to live"
      concept: live
      source: {kind: coined}
    - form: "taavuni"
      class: n
      field: "Body and feeling"
      gloss: "life"
      concept: life
      built: ["taavu", "-ni"]
      source: {kind: coined}
    - form: "hasa"
      class: v
      field: "Body and feeling"
      gloss: "to smell"
      concept: smell-verb
      source: {kind: coined}
    - form: "hasani"
      class: n
      field: "Body and feeling"
      gloss: "a smell; a scent"
      concept: smell-noun
      built: ["hasa", "-ni"]
      source: {kind: coined}
    - form: "mepu"
      class: v
      field: "Body and feeling"
      gloss: "to taste"
      concept: taste-verb
      source: {kind: coined}
    - form: "mepuni"
      class: n
      field: "Body and feeling"
      gloss: "a taste; a flavour"
      concept: taste-noun
      built: ["mepu", "-ni"]
      source: {kind: coined}
    - form: "nonauvi"
      class: v
      field: "Body and feeling"
      gloss: "to touch; to feel with the hand"
      concept: touch-verb
      source: {kind: coined}
    - form: "nonauvini"
      class: n
      field: "Body and feeling"
      gloss: "a touch"
      concept: touch-noun
      built: ["nonauvi", "-ni"]
      source: {kind: coined}
    - form: "hila"
      class: v
      field: "Body and feeling"
      gloss: "to drink"
      concept: drink-verb
      source: {kind: coined}
    - form: "hilani"
      class: n
      field: "Body and feeling"
      gloss: "a drink"
      concept: drink-noun
      built: ["hila", "-ni"]
      source: {kind: coined}
    - form: "kika"
      class: v
      field: "Body and feeling"
      gloss: "to sleep"
      concept: sleep-verb
      source: {kind: coined}
    - form: "kikani"
      class: n
      field: "Body and feeling"
      gloss: "sleep"
      concept: sleep-noun
      built: ["kika", "-ni"]
      source: {kind: coined}
    - form: "hiki"
      class: v
      field: "Body and feeling"
      gloss: "to sweat"
      concept: sweat-verb
      source: {kind: coined}
    - form: "hikini"
      class: n
      field: "Body and feeling"
      gloss: "sweat (noun)"
      concept: sweat
      built: ["hiki", "-ni"]
      source: {kind: coined}
    - form: "laivani"
      class: n
      field: "Body and feeling"
      gloss: "hope"
      concept: hope
      built: ["laiva", "-ni"]
      source: {kind: coined}
    - form: "kami"
      class: v
      field: "Body and feeling"
      gloss: "to feel a sensation"
      concept: feel-verb
      source: {kind: coined}
    - form: "kamini"
      class: n
      field: "Body and feeling"
      gloss: "sensation"
      concept: sensation
      built: ["kami", "-ni"]
      source: {kind: coined}
    - form: "muni"
      class: v
      field: "Body and feeling"
      gloss: "to breathe"
      concept: breathe
      source: {kind: coined}
    - form: "munini"
      class: n
      field: "Body and feeling"
      gloss: "breath"
      concept: breath
      built: ["muni", "-ni"]
      source: {kind: coined}
    - form: "seho"
      class: v
      field: "Body and feeling"
      gloss: "give birth"
      concept: give-birth
      source: {kind: coined}
    - form: "sehoni"
      class: n
      field: "Body and feeling"
      gloss: "birth"
      concept: birth
      built: ["seho", "-ni"]
      source: {kind: coined}
    - form: "vanini"
      class: n
      field: "Body and feeling"
      gloss: "forgiveness"
      concept: forgiveness
      built: ["vani", "-ni"]
      source: {kind: coined}
    - form: "vuluni"
      class: n
      field: "Body and feeling"
      gloss: "belief"
      concept: belief
      built: ["vulu", "-ni"]
      source: {kind: coined}
    - form: "maliini"
      class: n
      field: "Body and feeling"
      gloss: "doubt"
      concept: doubt
      built: ["malii", "-ni"]
      source: {kind: coined}
    - form: "panu"
      class: adj
      field: "Body and feeling"
      gloss: "hungry"
      concept: hungry
      source: {kind: coined}
    - form: "panuni"
      class: n
      field: "Body and feeling"
      gloss: "hunger"
      concept: hunger
      built: ["panu", "-ni"]
      source: {kind: coined}
    - form: "yatsukaa"
      class: adj
      field: "Body and feeling"
      gloss: "thirsty"
      concept: thirsty
      source: {kind: coined}
    - form: "yatsukaani"
      class: n
      field: "Body and feeling"
      gloss: "thirst"
      concept: thirst
      built: ["yatsukaa", "-ni"]
      source: {kind: coined}
    - form: "noki"
      class: adj
      field: "Body and feeling"
      gloss: "warm"
      concept: warm
      source: {kind: coined}
    - form: "nokini"
      class: n
      field: "Body and feeling"
      gloss: "warmth"
      concept: warmth
      built: ["noki", "-ni"]
      source: {kind: coined}
    - form: "mevu"
      class: adj
      field: "Body and feeling"
      gloss: "hot"
      concept: hot
      source: {kind: coined}
    - form: "mevuni"
      class: n
      field: "Body and feeling"
      gloss: "heat"
      concept: heat
      built: ["mevu", "-ni"]
      source: {kind: coined}
    - form: "puti"
      class: adj
      field: "Body and feeling"
      gloss: "pregnant"
      concept: pregnant
      source: {kind: coined}
    - form: "putini"
      class: n
      field: "Body and feeling"
      gloss: "pregnancy"
      concept: pregnancy
      built: ["puti", "-ni"]
      source: {kind: coined}
    - form: "kuhuk"
      class: adj
      field: "Body and feeling"
      gloss: "visible"
      concept: visible
      source: {kind: coined}
    - form: "ota kuhuk"
      class: adj
      field: "Body and feeling"
      gloss: "invisible"
      concept: invisible
      built: ["ota", "kuhuk"]
      source: {kind: coined}
    - form: "vaipapa"
      class: adj
      field: "Body and feeling"
      gloss: "conscious"
      concept: conscious
      source: {kind: coined}
    - form: "ota vaipapa"
      class: adj
      field: "Body and feeling"
      gloss: "unconscious"
      concept: unconscious
      built: ["ota", "vaipapa"]
      source: {kind: coined}
    - form: "pikwong"
      class: v
      field: "Body and feeling"
      gloss: "to look"
      concept: look
      source: {kind: coined}
    - form: "takiling"
      class: v
      field: "Body and feeling"
      gloss: "to watch; to observe attentively"
      concept: watch
      source: {kind: coined}
    - form: "lailon"
      class: n
      field: "Body and feeling"
      gloss: "appearance"
      concept: appearance
      source: {kind: coined}
    - form: "vanutsa"
      class: v
      field: "Body and feeling"
      gloss: "to listen"
      concept: listen
      source: {kind: coined}
    - form: "kito"
      class: n
      field: "Body and feeling"
      gloss: "noise"
      concept: noise
      source: {kind: coined}
    - form: "ve'onai"
      class: n
      field: "Body and feeling"
      gloss: "voice"
      concept: voice
      source: {kind: coined}
    - form: "tsenuuho"
      class: n
      field: "Body and feeling"
      gloss: "silence"
      concept: silence
      source: {kind: coined}
    - form: "pumun"
      class: adj
      field: "Body and feeling"
      gloss: "loud"
      concept: loud
      source: {kind: coined}
    - form: "vutsuk"
      class: adj
      field: "Body and feeling"
      gloss: "quiet"
      concept: quiet
      source: {kind: coined}
    - form: "laangu"
      class: adj
      field: "Body and feeling"
      gloss: "fragrant"
      concept: fragrant
      source: {kind: coined}
    - form: "viimu"
      class: adj
      field: "Body and feeling"
      gloss: "foul-smelling; having an unpleasant smell"
      concept: foul
      source: {kind: coined}
    - form: "tuu"
      class: adj
      field: "Body and feeling"
      gloss: "sweet"
      concept: sweet
      source: {kind: coined}
    - form: "vonkisasa"
      class: adj
      field: "Body and feeling"
      gloss: "sour"
      concept: sour
      source: {kind: coined}
    - form: "kwivime"
      class: adj
      field: "Body and feeling"
      gloss: "bitter"
      concept: bitter
      source: {kind: coined}
    - form: "lakong"
      class: adj
      field: "Body and feeling"
      gloss: "salty"
      concept: salty
      source: {kind: coined}
    - form: "maka"
      class: adj
      field: "Body and feeling"
      gloss: "smooth"
      concept: smooth
      source: {kind: coined}
    - form: "hoimen"
      class: adj
      field: "Body and feeling"
      gloss: "rough"
      concept: rough
      source: {kind: coined}
    - form: "nule"
      class: adj
      field: "Body and feeling"
      gloss: "soft"
      concept: soft
      source: {kind: coined}
    - form: "opo"
      class: adj
      field: "Body and feeling"
      gloss: "hard to the touch; firm rather than soft"
      concept: hard-texture
      source: {kind: coined}
    - form: "nu'a"
      class: v
      field: "Body and feeling"
      gloss: "to notice"
      concept: notice
      source: {kind: coined}
    - form: "veye"
      class: v
      field: "Body and feeling"
      gloss: "perceive"
      concept: perceive
      source: {kind: coined}
    - form: "pahovi"
      class: v
      field: "Body and feeling"
      gloss: "recognize"
      concept: recognize
      source: {kind: coined}
    - form: "itik"
      class: v
      field: "Body and feeling"
      gloss: "seem"
      concept: seem
      source: {kind: coined}
    - form: "loti"
      class: n
      field: "Body and feeling"
      gloss: "wrath; intense anger"
      concept: wrath
      source: {kind: coined}
    - form: "yakatise"
      class: n
      field: "Body and feeling"
      gloss: "envy"
      concept: envy
      source: {kind: coined}
    - form: "tevek"
      class: n
      field: "Body and feeling"
      gloss: "greed"
      concept: greed
      source: {kind: coined}
    - form: "wohipen"
      class: n
      field: "Body and feeling"
      gloss: "boasting"
      concept: boasting
      source: {kind: coined}
    - form: "yovula"
      class: n
      field: "Body and feeling"
      gloss: "pride"
      concept: pride
      source: {kind: coined}
    - form: "mukipi"
      class: n
      field: "Body and feeling"
      gloss: "lust"
      concept: lust
      source: {kind: coined}
    - form: "kweliku"
      class: n
      field: "Body and feeling"
      gloss: "despair"
      concept: despair
      source: {kind: coined}
    - form: "kotutsi"
      class: n
      field: "Body and feeling"
      gloss: "disappointment"
      concept: disappointment
      source: {kind: coined}
    - form: "vivakau"
      class: n
      field: "Body and feeling"
      gloss: "faith"
      concept: faith
      source: {kind: coined}
    - form: "tepu"
      class: n
      field: "Body and feeling"
      gloss: "joy"
      concept: joy
      source: {kind: coined}
    - form: "natsunu"
      class: n
      field: "Body and feeling"
      gloss: "happiness"
      concept: happiness
      source: {kind: coined}
    - form: "makwa"
      class: n
      field: "Body and feeling"
      gloss: "pleasure"
      concept: pleasure
      source: {kind: coined}
    - form: "ma'ai"
      class: n
      field: "Body and feeling"
      gloss: "contentment"
      concept: contentment
      source: {kind: coined}
    - form: "lututaamo"
      class: n
      field: "Body and feeling"
      gloss: "gratitude"
      concept: gratitude
      source: {kind: coined}
    - form: "hontan"
      class: n
      field: "Body and feeling"
      gloss: "admiration"
      concept: admiration
      source: {kind: coined}
    - form: "uupa"
      class: n
      field: "Body and feeling"
      gloss: "trust"
      concept: trust
      source: {kind: coined}
    - form: "tsuve"
      class: n
      field: "Body and feeling"
      gloss: "courage"
      concept: courage
      source: {kind: coined}
    - form: "nateimu"
      class: n
      field: "Body and feeling"
      gloss: "anger"
      concept: anger
      source: {kind: coined}
    - form: "solapa"
      class: n
      field: "Body and feeling"
      gloss: "hatred"
      concept: hatred
      source: {kind: coined}
    - form: "lopu"
      class: n
      field: "Body and feeling"
      gloss: "jealousy"
      concept: jealousy
      source: {kind: coined}
    - form: "taasonkok"
      class: n
      field: "Body and feeling"
      gloss: "fear"
      concept: fear
      source: {kind: coined}
    - form: "wevo"
      class: n
      field: "Body and feeling"
      gloss: "terror"
      concept: terror
      source: {kind: coined}
    - form: "sawikuu"
      class: n
      field: "Body and feeling"
      gloss: "sadness"
      concept: sadness
      source: {kind: coined}
    - form: "vonasin"
      class: n
      field: "Body and feeling"
      gloss: "grief"
      concept: grief
      source: {kind: coined}
    - form: "kwililu"
      class: n
      field: "Body and feeling"
      gloss: "shame"
      concept: shame
      source: {kind: coined}
    - form: "pomusuhi"
      class: n
      field: "Body and feeling"
      gloss: "guilt"
      concept: guilt
      source: {kind: coined}
    - form: "nenavon"
      class: n
      field: "Body and feeling"
      gloss: "regret"
      concept: regret
      source: {kind: coined}
    - form: "talavusu"
      class: n
      field: "Body and feeling"
      gloss: "humility"
      concept: humility
      source: {kind: coined}
    - form: "saitapo"
      class: n
      field: "Body and feeling"
      gloss: "confidence"
      concept: confidence
      source: {kind: coined}
    - form: "sesaivu"
      class: n
      field: "Body and feeling"
      gloss: "embarrassment"
      concept: embarrassment
      source: {kind: coined}
    - form: "laya"
      class: n
      field: "Body and feeling"
      gloss: "compassion"
      concept: compassion
      source: {kind: coined}
    - form: "mohalumi"
      class: n
      field: "Body and feeling"
      gloss: "pity"
      concept: pity
      source: {kind: coined}
    - form: "pulun"
      class: n
      field: "Body and feeling"
      gloss: "sympathy"
      concept: sympathy
      source: {kind: coined}
    - form: "nuti'e"
      class: n
      field: "Body and feeling"
      gloss: "resentment"
      concept: resentment
      source: {kind: coined}
    - form: "tsi'enun"
      class: n
      field: "Body and feeling"
      gloss: "contempt"
      concept: contempt
      source: {kind: coined}
    - form: "sesiku"
      class: n
      field: "Body and feeling"
      gloss: "desire"
      concept: desire
      source: {kind: coined}
    - form: "kivusi"
      class: n
      field: "Body and feeling"
      gloss: "longing"
      concept: longing
      source: {kind: coined}
    - form: "hakaa"
      class: n
      field: "Body and feeling"
      gloss: "satisfaction (desire fulfilled)"
      concept: satisfaction
      source: {kind: coined}
    - form: "luketu"
      class: n
      field: "Body and feeling"
      gloss: "frustration"
      concept: frustration
      source: {kind: coined}
    - form: "tiiwatehi"
      class: n
      field: "Body and feeling"
      gloss: "curiosity"
      concept: curiosity
      source: {kind: coined}
    - form: "hatuhin"
      class: n
      field: "Body and feeling"
      gloss: "confusion"
      concept: confusion
      source: {kind: coined}
    - form: "vumakek"
      class: n
      field: "Body and feeling"
      gloss: "certainty"
      concept: certainty
      source: {kind: coined}
    - form: "otsupai"
      class: n
      field: "Body and feeling"
      gloss: "surprise"
      concept: surprise
      source: {kind: coined}
    - form: "kikeka"
      class: n
      field: "Body and feeling"
      gloss: "boredom"
      concept: boredom
      source: {kind: coined}
    - form: "misemaka"
      class: n
      field: "Body and feeling"
      gloss: "anticipation"
      concept: anticipation
      source: {kind: coined}
    - form: "mapave"
      class: n
      field: "Body and feeling"
      gloss: "reverence"
      concept: reverence
      source: {kind: coined}
    - form: "towak"
      class: n
      field: "Body and feeling"
      gloss: "awe"
      concept: awe
      source: {kind: coined}
    - form: "suko"
      class: n
      field: "Body and feeling"
      gloss: "romantic love (eros)"
      concept: love-eros
      source: {kind: coined}
    - form: "tsasawasi"
      class: n
      field: "Body and feeling"
      gloss: "friendship; affectionate regard between friends (philia)"
      concept: love-philia
      source: {kind: coined}
    - form: "kipoku"
      class: n
      field: "Body and feeling"
      gloss: "the love of family (storge)"
      concept: love-storge
      source: {kind: coined}
    - form: "ketsoning"
      class: n
      field: "Body and feeling"
      gloss: "selfless, universal love (agape)"
      concept: love-agape
      source: {kind: coined}
    - form: "kapetso"
      class: n
      field: "Body and feeling"
      gloss: "affection"
      concept: affection
      source: {kind: coined}
    - form: "makwapi"
      class: n
      field: "Body and feeling"
      gloss: "attraction"
      concept: attraction
      source: {kind: coined}
    - form: "wokopa"
      class: n
      field: "Body and feeling"
      gloss: "intimacy"
      concept: intimacy
      source: {kind: coined}
    - form: "uhoti"
      class: n
      field: "Body and feeling"
      gloss: "devotion"
      concept: devotion
      source: {kind: coined}
    - form: "ponekak"
      class: n
      field: "Body and feeling"
      gloss: "loyalty"
      concept: loyalty
      source: {kind: coined}
    - form: "pukasa"
      class: n
      field: "Body and feeling"
      gloss: "companionship; being together with a companion"
      concept: companionship
      source: {kind: coined}
    - form: "hikuvak"
      class: n
      field: "Body and feeling"
      gloss: "enmity"
      concept: enmity
      source: {kind: coined}
    - form: "wokwatsan"
      class: n
      field: "Body and feeling"
      gloss: "the hair"
      concept: hair
      source: {kind: coined}
    - form: "muuki"
      class: n
      field: "Body and feeling"
      gloss: "the face"
      concept: face
      source: {kind: coined}
    - form: "vulat"
      class: n
      field: "Body and feeling"
      gloss: "the eye"
      concept: eye
      source: {kind: coined}
    - form: "suvamo"
      class: n
      field: "Body and feeling"
      gloss: "the ear"
      concept: ear
      source: {kind: coined}
    - form: "lauma"
      class: n
      field: "Body and feeling"
      gloss: "the nose"
      concept: nose
      source: {kind: coined}
    - form: "saapuhet"
      class: n
      field: "Body and feeling"
      gloss: "the mouth"
      concept: mouth
      source: {kind: coined}
    - form: "putsu"
      class: n
      field: "Body and feeling"
      gloss: "the lip"
      concept: lip
      source: {kind: coined}
    - form: "sinila"
      class: n
      field: "Body and feeling"
      gloss: "the tooth"
      concept: tooth
      source: {kind: coined}
    - form: "lupa"
      class: n
      field: "Body and feeling"
      gloss: "the tongue"
      concept: tongue
      source: {kind: coined}
    - form: "yahano"
      class: n
      field: "Body and feeling"
      gloss: "the neck"
      concept: neck
      source: {kind: coined}
    - form: "pavotai"
      class: n
      field: "Body and feeling"
      gloss: "the shoulder"
      concept: shoulder
      source: {kind: coined}
    - form: "kuvo"
      class: n
      field: "Body and feeling"
      gloss: "the arm"
      concept: arm
      source: {kind: coined}
    - form: "vavak"
      class: n
      field: "Body and feeling"
      gloss: "the elbow"
      concept: elbow
      source: {kind: coined}
    - form: "tuyatuuka"
      class: n
      field: "Body and feeling"
      gloss: "the hand"
      concept: hand
      source: {kind: coined}
    - form: "maupun"
      class: n
      field: "Body and feeling"
      gloss: "the finger"
      concept: finger
      source: {kind: coined}
    - form: "munku"
      class: n
      field: "Body and feeling"
      gloss: "the fingernail"
      concept: nail
      source: {kind: coined}
    - form: "mehaviit"
      class: n
      field: "Body and feeling"
      gloss: "the chest"
      concept: chest
      source: {kind: coined}
    - form: "watsiik"
      class: n
      field: "Body and feeling"
      gloss: "the breast"
      concept: breast
      source: {kind: coined}
    - form: "sakun"
      class: n
      field: "Body and feeling"
      gloss: "the belly"
      concept: belly
      source: {kind: coined}
    - form: "kusu"
      class: n
      field: "Body and feeling"
      gloss: "the back"
      concept: back
      source: {kind: coined}
    - form: "kwina"
      class: n
      field: "Body and feeling"
      gloss: "the hip"
      concept: hip
      source: {kind: coined}
    - form: "setak"
      class: n
      field: "Body and feeling"
      gloss: "the leg"
      concept: leg
      source: {kind: coined}
    - form: "monta"
      class: n
      field: "Body and feeling"
      gloss: "the knee"
      concept: knee
      source: {kind: coined}
    - form: "tahon"
      class: n
      field: "Body and feeling"
      gloss: "the foot"
      concept: foot
      source: {kind: coined}
    - form: "tsosat"
      class: n
      field: "Body and feeling"
      gloss: "the toe"
      concept: toe
      source: {kind: coined}
    - form: "uluk"
      class: n
      field: "Body and feeling"
      gloss: "the skin"
      concept: skin
      source: {kind: coined}
    - form: "tsato"
      class: n
      field: "Body and feeling"
      gloss: "the bone"
      concept: bone
      source: {kind: coined}
    - form: "litaha"
      class: n
      field: "Body and feeling"
      gloss: "blood"
      concept: blood
      source: {kind: coined}
    - form: "lohapotau"
      class: n
      field: "Body and feeling"
      gloss: "flesh"
      concept: flesh
      source: {kind: coined}
    - form: "ipu"
      class: n
      field: "Body and feeling"
      gloss: "forehead"
      concept: forehead
      source: {kind: coined}
    - form: "lisi"
      class: n
      field: "Body and feeling"
      gloss: "jaw"
      concept: jaw
      source: {kind: coined}
    - form: "husen"
      class: n
      field: "Body and feeling"
      gloss: "chin"
      concept: chin
      source: {kind: coined}
    - form: "kihumo"
      class: n
      field: "Body and feeling"
      gloss: "cheek"
      concept: cheek
      source: {kind: coined}
    - form: "kau'a"
      class: n
      field: "Body and feeling"
      gloss: "throat"
      concept: throat
      source: {kind: coined}
    - form: "towei"
      class: n
      field: "Body and feeling"
      gloss: "stomach"
      concept: stomach
      source: {kind: coined}
    - form: "yaweyun"
      class: n
      field: "Body and feeling"
      gloss: "waist"
      concept: waist
      source: {kind: coined}
    - form: "posu"
      class: n
      field: "Body and feeling"
      gloss: "spine"
      concept: spine
      source: {kind: coined}
    - form: "vaasike"
      class: n
      field: "Body and feeling"
      gloss: "buttock"
      concept: buttock
      source: {kind: coined}
    - form: "kak"
      class: n
      field: "Body and feeling"
      gloss: "wrist"
      concept: wrist
      source: {kind: coined}
    - form: "kwi"
      class: n
      field: "Body and feeling"
      gloss: "palm"
      concept: palm
      source: {kind: coined}
    - form: "tuk"
      class: n
      field: "Body and feeling"
      gloss: "thumb"
      concept: thumb
      source: {kind: coined}
    - form: "naho"
      class: n
      field: "Body and feeling"
      gloss: "thigh"
      concept: thigh
      source: {kind: coined}
    - form: "vitsak"
      class: n
      field: "Body and feeling"
      gloss: "ankle"
      concept: ankle
      source: {kind: coined}
    - form: "momisonpi"
      class: n
      field: "Body and feeling"
      gloss: "heel"
      concept: heel
      source: {kind: coined}
    - form: "kisan"
      class: n
      field: "Body and feeling"
      gloss: "sole"
      concept: sole
      source: {kind: coined}
    - form: "vanayu"
      class: n
      field: "Body and feeling"
      gloss: "toenail"
      concept: toenail
      source: {kind: coined}
    - form: "taaka"
      class: n
      field: "Body and feeling"
      gloss: "muscle"
      concept: muscle
      source: {kind: coined}
    - form: "mi'uu"
      class: n
      field: "Body and feeling"
      gloss: "fat"
      concept: fat
      source: {kind: coined}
    - form: "nunuk"
      class: n
      field: "Body and feeling"
      gloss: "tears"
      concept: tears
      source: {kind: coined}
    - form: "hiko"
      class: n
      field: "Body and feeling"
      gloss: "saliva"
      concept: saliva
      source: {kind: coined}
    - form: "kuviso"
      class: n
      field: "Body and feeling"
      gloss: "brain"
      concept: brain
      source: {kind: coined}
    - form: "kalosik"
      class: n
      field: "Body and feeling"
      gloss: "lung"
      concept: lung
      source: {kind: coined}
    - form: "akwa"
      class: n
      field: "Body and feeling"
      gloss: "liver"
      concept: liver
      source: {kind: coined}
    - form: "wakwin"
      class: n
      field: "Body and feeling"
      gloss: "kidney"
      concept: kidney
      source: {kind: coined}
    - form: "hasuko"
      class: n
      field: "Body and feeling"
      gloss: "intestine"
      concept: intestine
      source: {kind: coined}
    - form: "kwopa"
      class: n
      field: "Body and feeling"
      gloss: "genitals"
      concept: genitals
      source: {kind: coined}
    - form: "kwola"
      class: n
      field: "Body and feeling"
      gloss: "womb"
      concept: womb
      source: {kind: coined}
    - form: "tokak"
      class: n
      field: "Body and feeling"
      gloss: "penis"
      concept: penis
      source: {kind: coined}
    - form: "tatuu'apat"
      class: n
      field: "Body and feeling"
      gloss: "vagina"
      concept: vagina
      source: {kind: coined}
    - form: "laa"
      class: n
      field: "Body and feeling"
      gloss: "testicle"
      concept: testicle
      source: {kind: coined}
    - form: "lulvan"
      class: n
      field: "Body and feeling"
      gloss: "food"
      concept: food
      source: {kind: coined}
    - form: "vakwo"
      class: v
      field: "Body and feeling"
      gloss: "to eat"
      concept: eat
      source: {kind: coined}
    - form: "huli"
      class: n
      field: "Body and feeling"
      gloss: "air"
      concept: air
      source: {kind: coined}
    - form: "kwanesaa"
      class: n
      field: "Body and feeling"
      gloss: "urine"
      concept: urine
      source: {kind: coined}
    - form: "nalaki"
      class: v
      field: "Body and feeling"
      gloss: "to urinate"
      concept: urinate
      source: {kind: coined}
    - form: "votsa"
      class: n
      field: "Body and feeling"
      gloss: "dung"
      concept: dung
      source: {kind: coined}
    - form: "ninet"
      class: v
      field: "Body and feeling"
      gloss: "to defecate"
      concept: defecate
      source: {kind: coined}
    - form: "viha"
      class: n
      field: "Body and feeling"
      gloss: "shelter"
      concept: shelter
      source: {kind: coined}
    - form: "eila"
      class: v
      field: "Body and feeling"
      gloss: "inhale"
      concept: inhale
      source: {kind: coined}
    - form: "laaketson"
      class: v
      field: "Body and feeling"
      gloss: "exhale"
      concept: exhale
      source: {kind: coined}
    - form: "konii"
      class: v
      field: "Body and feeling"
      gloss: "suffocate"
      concept: suffocate
      source: {kind: coined}
    - form: "kwakakwa"
      class: v
      field: "Body and feeling"
      gloss: "wake"
      concept: wake
      source: {kind: coined}
    - form: "ha'a"
      class: adj
      field: "Body and feeling"
      gloss: "awake"
      concept: awake
      source: {kind: coined}
    - form: "sokwonung"
      class: n
      field: "Body and feeling"
      gloss: "a dream"
      concept: dream
      source: {kind: coined}
    - form: "kipu"
      class: n
      field: "Body and feeling"
      gloss: "rest (noun)"
      concept: rest
      source: {kind: coined}
    - form: "ohan"
      class: adj
      field: "Body and feeling"
      gloss: "tired"
      concept: tired
      source: {kind: coined}
    - form: "salo'oi"
      class: n
      field: "Body and feeling"
      gloss: "cold as a bodily need or temperature condition"
      concept: cold-noun
      source: {kind: coined}
    - form: "kusok"
      class: adj
      field: "Body and feeling"
      gloss: "cool"
      concept: cool
      source: {kind: coined}
    - form: "liita"
      class: v
      field: "Body and feeling"
      gloss: "freeze"
      concept: freeze
      source: {kind: coined}
    - form: "soha"
      class: v
      field: "Body and feeling"
      gloss: "burn"
      concept: burn
      source: {kind: coined}
    - form: "lungva"
      class: n
      field: "Body and feeling"
      gloss: "safety"
      concept: safety
      source: {kind: coined}
    - form: "lakin"
      class: n
      field: "Body and feeling"
      gloss: "danger"
      concept: danger
      source: {kind: coined}
    - form: "wawino"
      class: n
      field: "Body and feeling"
      gloss: "protection"
      concept: protection
      source: {kind: coined}
    - form: "husu"
      class: n
      field: "Body and feeling"
      gloss: "sex"
      concept: sex
      source: {kind: coined}
    - form: "muli"
      class: v
      field: "Body and feeling"
      gloss: "conceive"
      concept: conceive
      source: {kind: coined}
    - form: "tsise"
      class: v
      field: "Body and feeling"
      gloss: "to nurse a child; to feed a child at the breast"
      concept: nurse
      source: {kind: coined}
    - form: "nonkin"
      class: v
      field: "Body and feeling"
      gloss: "grow"
      concept: grow
      source: {kind: coined}
    - form: "kuu"
      class: v
      field: "Body and feeling"
      gloss: "to age; to grow older"
      concept: age-verb
      source: {kind: coined}
    - form: "kwei"
      class: n
      field: "Body and feeling"
      gloss: "dead"
      concept: dead
      source: {kind: coined}
    - form: "matu"
      class: adj
      field: "Body and feeling"
      gloss: "healthy; hale"
      concept: healthy
      source: {kind: coined}
    - form: "lihu"
      class: adj
      field: "Body and feeling"
      gloss: "sick; ill"
      concept: sick
      source: {kind: coined}
    - form: "atosak"
      class: adj
      field: "Body and feeling"
      gloss: "injured; wounded"
      concept: injured
      source: {kind: coined}
    - form: "paahon"
      class: adj
      field: "Body and feeling"
      gloss: "strong"
      concept: strong
      source: {kind: coined}
    - form: "yewito"
      class: adj
      field: "Body and feeling"
      gloss: "weak"
      concept: weak
      source: {kind: coined}
    - form: "te'aka"
      class: adj
      field: "Body and feeling"
      gloss: "exhausted"
      concept: exhausted
      source: {kind: coined}
    - form: "meiliting"
      class: adj
      field: "Body and feeling"
      gloss: "full; satisfied after eating or drinking"
      concept: sated
      source: {kind: coined}
    - form: "kovewo"
      class: adj
      field: "Body and feeling"
      gloss: "cold in temperature"
      concept: cold
      source: {kind: coined}
    - form: "maatopi"
      class: adj
      field: "Body and feeling"
      gloss: "feverish"
      concept: feverish
      source: {kind: coined}
    - form: "hekwolo"
      class: n
      field: "Body and feeling"
      gloss: "pain"
      concept: pain
      source: {kind: coined}
    - form: "sikau"
      class: v
      field: "Body and feeling"
      gloss: "to hurt; to cause pain or injury to someone"
      concept: hurt-verb
      source: {kind: coined}
    - form: "yuumonka"
      class: v
      field: "Body and feeling"
      gloss: "ache"
      concept: ache
      source: {kind: coined}
    - form: "hoimu"
      class: v
      field: "Body and feeling"
      gloss: "suffer"
      concept: suffer
      source: {kind: coined}
    - form: "votutsa"
      class: v
      field: "Body and feeling"
      gloss: "bleed"
      concept: bleed
      source: {kind: coined}
    - form: "peivi"
      class: v
      field: "Body and feeling"
      gloss: "heal"
      concept: heal
      source: {kind: coined}
    - form: "tuukan"
      class: v
      field: "Body and feeling"
      gloss: "recover"
      concept: recover
      source: {kind: coined}
    - form: "muuta"
      class: adj
      field: "Body and feeling"
      gloss: "blind"
      concept: blind
      source: {kind: coined}
    - form: "siipi"
      class: adj
      field: "Body and feeling"
      gloss: "deaf"
      concept: deaf
      source: {kind: coined}
    - form: "taya"
      class: adj
      field: "Body and feeling"
      gloss: "lame"
      concept: lame
      source: {kind: coined}
    - form: "usahu"
      class: adj
      field: "Body and feeling"
      gloss: "alive"
      concept: alive
      source: {kind: coined}
    - form: "tsosuse"
      class: adj
      field: "Body and feeling"
      gloss: "young"
      concept: young
      source: {kind: coined}
    - form: "lu'anang"
      class: adj
      field: "Body and feeling"
      gloss: "old in age (a living being)"
      concept: old
      source: {kind: coined}
    - form: "pailiva"
      class: n
      field: "Body and feeling"
      gloss: "aging; growing older"
      concept: aging
      source: {kind: coined}
    - form: "wapakwa"
      class: v
      field: "Body and feeling"
      gloss: "to hurt; to experience bodily pain"
      concept: hurt-pain
      source: {kind: coined}
    - form: "ne"
      class: pron
      field: "Everyday speech"
      gloss: "I, me; my, mine, set before the noun"
      concept: [i, my]
      source: {kind: coined}
    - form: "ho"
      class: pron
      field: "Everyday speech"
      gloss: "you, one or more; your, yours, set before the noun"
      concept: [you-reference, your]
      source: {kind: coined}
    - form: "ya"
      class: pron
      field: "Everyday speech"
      gloss: "he, she or it; the one spoken of; his, hers, its"
      concept: [he, she, it]
      source: {kind: coined}
    - form: "neyu"
      class: pron
      field: "Everyday speech"
      gloss: "we, us; our, ours, set before the noun"
      concept: [we, our]
      source: {kind: coined}
    - form: "yayu"
      class: pron
      field: "Everyday speech"
      gloss: "they, them; their, theirs"
      concept: they
      source: {kind: coined}
    - form: "ivi"
      class: dem
      field: "Everyday speech"
      gloss: "this, here by the speaker"
      concept: this
      source: {kind: coined}
    - form: "ava"
      class: dem
      field: "Everyday speech"
      gloss: "that, away from the speaker"
      concept: that
      source: {kind: coined}
    - form: "ivim"
      class: dem
      field: "Everyday speech"
      gloss: "these"
      concept: these
      source: {kind: coined}
    - form: "avam"
      class: dem
      field: "Everyday speech"
      gloss: "those"
      concept: those
      source: {kind: coined}
    - form: "ka"
      class: part
      field: "Everyday speech"
      gloss: "the question word, set first: ka ho tauvo, do you see?"
      concept: question-polar
      source: {kind: coined}
    - form: "kayo"
      class: pron
      field: "Everyday speech"
      gloss: "who?"
      concept: question-who
      source: {kind: coined}
    - form: "kaha"
      class: pron
      field: "Everyday speech"
      gloss: "what?"
      concept: question-what
      source: {kind: coined}
    - form: "kame"
      class: pron
      field: "Everyday speech"
      gloss: "which?"
      concept: question-which
      source: {kind: coined}
    - form: "kapa"
      class: adv
      field: "Everyday speech"
      gloss: "where?"
      concept: question-where
      source: {kind: coined}
    - form: "kaina"
      class: adv
      field: "Everyday speech"
      gloss: "when?"
      concept: question-when
      source: {kind: coined}
    - form: "kasu"
      class: adv
      field: "Everyday speech"
      gloss: "why?"
      concept: question-why
      source: {kind: coined}
    - form: "kamo"
      class: adv
      field: "Everyday speech"
      gloss: "how?"
      concept: question-how
      source: {kind: coined}
    - form: "kasi"
      class: adv
      field: "Everyday speech"
      gloss: "how many?"
      concept: question-how-many
      source: {kind: coined}
    - form: "kasiva"
      class: adv
      field: "Everyday speech"
      gloss: "how much?"
      concept: question-how-much
      source: {kind: coined}
    - form: "kayota"
      class: pron
      field: "Everyday speech"
      gloss: "whose?"
      concept: question-whose
      source: {kind: coined}
    - form: "kayoma"
      class: pron
      field: "Everyday speech"
      gloss: "to whom?"
      concept: question-to-whom
      source: {kind: coined}
    - form: "kapalo"
      class: adv
      field: "Everyday speech"
      gloss: "from where?"
      concept: question-from-where
      source: {kind: coined}
    - form: "kahasu"
      class: adv
      field: "Everyday speech"
      gloss: "what for? to what end?"
      concept: question-for-what-purpose
      source: {kind: coined}
    - form: "kahe"
      class: call
      field: "Everyday speech"
      gloss: "what was that? say it again"
      concept: question-clarification
      source: {kind: coined}
    - form: "mai"
      class: call
      field: "Everyday speech"
      gloss: "yes"
      concept: "yes"
      source: {kind: coined}
    - form: "umu"
      class: call
      field: "Everyday speech"
      gloss: "no"
      concept: "no"
      source: {kind: coined}
    - form: "ota"
      class: part
      field: "Everyday speech"
      gloss: "not; set before what it denies"
      concept: not
      source: {kind: coined}
    - form: "ni"
      class: conj
      field: "Everyday speech"
      gloss: "and"
      concept: and
      source: {kind: coined}
    - form: "heta"
      class: num
      field: "Everyday speech"
      gloss: "one"
      concept: one
      source: {kind: coined}
    - form: "tolai"
      class: num
      field: "Everyday speech"
      gloss: "two"
      concept: two
      source: {kind: coined}
    - form: "vuna"
      class: num
      field: "Everyday speech"
      gloss: "three"
      concept: three
      source: {kind: coined}
    - form: "keli"
      class: num
      field: "Everyday speech"
      gloss: "four, the whole number of the quarters"
      concept: four
      source: {kind: coined}
    - form: "teni"
      class: num
      field: "Everyday speech"
      gloss: "five"
      concept: five
      source: {kind: coined}
    - form: "naku"
      class: num
      field: "Everyday speech"
      gloss: "six"
      concept: six
      source: {kind: coined}
    - form: "ilu"
      class: num
      field: "Everyday speech"
      gloss: "seven"
      concept: seven
      source: {kind: coined}
    - form: "kwesa"
      class: num
      field: "Everyday speech"
      gloss: "eight"
      concept: eight
      source: {kind: coined}
    - form: "maalo"
      class: num
      field: "Everyday speech"
      gloss: "nine"
      concept: nine
      source: {kind: coined}
    - form: "tupa"
      class: num
      field: "Everyday speech"
      gloss: "ten"
      concept: ten
      source: {kind: coined}
    - form: "tolai tupa"
      class: num
      field: "Everyday speech"
      gloss: "twenty; two tens"
      concept: twenty
      built: ["tolai", "tupa"]
      source: {kind: coined}
    - form: "tauva"
      class: num
      field: "Everyday speech"
      gloss: "a hundred"
      concept: hundred
      source: {kind: coined}
    - form: "tupa tauva"
      class: num
      field: "Everyday speech"
      gloss: "a thousand; ten hundreds"
      concept: thousand
      built: ["tupa", "tauva"]
      source: {kind: coined}
    - form: "hetasa"
      class: adj
      field: "Everyday speech"
      gloss: "first"
      concept: first
      built: ["heta", "-sa"]
      source: {kind: coined}
    - form: "tolaisa"
      class: adj
      field: "Everyday speech"
      gloss: "second"
      concept: second
      built: ["tolai", "-sa"]
      source: {kind: coined}
    - form: "vunasa"
      class: adj
      field: "Everyday speech"
      gloss: "third"
      concept: third
      built: ["vuna", "-sa"]
      source: {kind: coined}
    - form: "kelisa"
      class: adj
      field: "Everyday speech"
      gloss: "fourth; any number takes -sa to count its place: tenisa, fifth"
      concept: ordinal-construction
      built: ["keli", "-sa"]
      source: {kind: coined}
    - form: "temi"
      class: v
      field: "Everyday speech"
      gloss: "to know"
      concept: know
      source: {kind: coined}
    - form: "temini"
      class: n
      field: "Everyday speech"
      gloss: "knowledge; what is known"
      concept: knowledge
      built: ["temi", "-ni"]
      source: {kind: coined}
    - form: "lavu"
      class: adj
      field: "Everyday speech"
      gloss: "big; great"
      concept: big
      source: {kind: coined}
    - form: "laiva"
      class: v
      field: "Everyday speech"
      gloss: "to hope"
      concept: hope-verb
      source: {kind: coined}
    - form: "vani"
      class: v
      field: "Everyday speech"
      gloss: "to forgive"
      concept: forgive-verb
      source: {kind: coined}
    - form: "tsatu"
      class: v
      field: "Everyday speech"
      gloss: "to change"
      concept: change-verb
      source: {kind: coined}
    - form: "tsatuni"
      class: n
      field: "Everyday speech"
      gloss: "change"
      concept: change-noun
      built: ["tsatu", "-ni"]
      source: {kind: coined}
    - form: "hi'u"
      class: v
      field: "Everyday speech"
      gloss: "to end"
      concept: end
      source: {kind: coined}
    - form: "hi'uni"
      class: n
      field: "Everyday speech"
      gloss: "end"
      concept: end-noun
      built: ["hi'u", "-ni"]
      source: {kind: coined}
    - form: "kuutunpi"
      class: v
      field: "Everyday speech"
      gloss: "to begin"
      concept: begin
      source: {kind: coined}
    - form: "kuutunpini"
      class: n
      field: "Everyday speech"
      gloss: "beginning"
      concept: beginning
      built: ["kuutunpi", "-ni"]
      source: {kind: coined}
    - form: "vailati"
      class: v
      field: "Everyday speech"
      gloss: "to trade"
      concept: trade
      source: {kind: coined}
    - form: "vulu"
      class: v
      field: "Everyday speech"
      gloss: "to believe"
      concept: believe
      source: {kind: coined}
    - form: "malii"
      class: v
      field: "Everyday speech"
      gloss: "doubt"
      concept: doubt-verb
      source: {kind: coined}
    - form: "vopi"
      class: adj
      field: "Everyday speech"
      gloss: "free to act; unconstrained"
      concept: free
      source: {kind: coined}
    - form: "vaso"
      class: adj
      field: "Everyday speech"
      gloss: "true"
      concept: "true"
      source: {kind: coined}
    - form: "vasoni"
      class: n
      field: "Everyday speech"
      gloss: "truth"
      concept: truth
      built: ["vaso", "-ni"]
      source: {kind: coined}
    - form: "sekwehon"
      class: adj
      field: "Everyday speech"
      gloss: "possible"
      concept: possible
      source: {kind: coined}
    - form: "ota sekwehon"
      class: adj
      field: "Everyday speech"
      gloss: "impossible"
      concept: impossible
      built: ["ota", "sekwehon"]
      source: {kind: coined}
    - form: "nivuvo"
      class: adj
      field: "Everyday speech"
      gloss: "complete"
      concept: complete
      source: {kind: coined}
    - form: "ota nivuvo"
      class: adj
      field: "Everyday speech"
      gloss: "incomplete"
      concept: incomplete
      built: ["ota", "nivuvo"]
      source: {kind: coined}
    - form: "yakit"
      class: adj
      field: "Everyday speech"
      gloss: "correct"
      concept: correct
      source: {kind: coined}
    - form: "ota yakit"
      class: adj
      field: "Everyday speech"
      gloss: "incorrect"
      concept: incorrect
      built: ["ota", "yakit"]
      source: {kind: coined}
    - form: "wativai"
      class: adj
      field: "Everyday speech"
      gloss: "willing"
      concept: willing
      source: {kind: coined}
    - form: "ota wativai"
      class: adj
      field: "Everyday speech"
      gloss: "unwilling"
      concept: unwilling
      built: ["ota", "wativai"]
      source: {kind: coined}
    - form: "tsoitahi"
      class: adj
      field: "Everyday speech"
      gloss: "natural"
      concept: natural
      source: {kind: coined}
    - form: "ota tsoitahi"
      class: adj
      field: "Everyday speech"
      gloss: "unnatural"
      concept: unnatural
      built: ["ota", "tsoitahi"]
      source: {kind: coined}
    - form: "sayun"
      class: adj
      field: "Everyday speech"
      gloss: "real"
      concept: real
      source: {kind: coined}
    - form: "ota sayun"
      class: adj
      field: "Everyday speech"
      gloss: "unreal"
      concept: unreal
      built: ["ota", "sayun"]
      source: {kind: coined}
    - form: "vohuu"
      class: adj
      field: "Everyday speech"
      gloss: "sure"
      concept: certain
      source: {kind: coined}
    - form: "ota vohuu"
      class: adj
      field: "Everyday speech"
      gloss: "uncertain"
      concept: uncertain
      built: ["ota", "vohuu"]
      source: {kind: coined}
    - form: "sa'e"
      class: adj
      field: "Everyday speech"
      gloss: "honest"
      concept: honest
      source: {kind: coined}
    - form: "ota sa'e"
      class: adj
      field: "Everyday speech"
      gloss: "dishonest"
      concept: dishonest
      built: ["ota", "sa'e"]
      source: {kind: coined}
    - form: "yalin"
      class: adj
      field: "Everyday speech"
      gloss: "useful"
      concept: useful
      source: {kind: coined}
    - form: "ota yalin"
      class: adj
      field: "Everyday speech"
      gloss: "useless"
      concept: useless
      built: ["ota", "yalin"]
      source: {kind: coined}
    - form: "paka"
      class: adj
      field: "Everyday speech"
      gloss: "valuable"
      concept: valuable
      source: {kind: coined}
    - form: "ota paka"
      class: adj
      field: "Everyday speech"
      gloss: "worthless"
      concept: worthless
      built: ["ota", "paka"]
      source: {kind: coined}
    - form: "kuti"
      class: adj
      field: "Everyday speech"
      gloss: "allowed"
      concept: allowed
      source: {kind: coined}
    - form: "ota kuti"
      class: adj
      field: "Everyday speech"
      gloss: "forbidden"
      concept: forbidden
      built: ["ota", "kuti"]
      source: {kind: coined}
    - form: "mangik"
      class: v
      field: "Everyday speech"
      gloss: "to agree"
      concept: agree-verb
      source: {kind: coined}
    - form: "ota mangik"
      class: v
      field: "Everyday speech"
      gloss: "disagree"
      concept: disagree
      built: ["ota", "mangik"]
      source: {kind: coined}
    - form: "katevoito"
      class: adj
      field: "Everyday speech"
      gloss: "transparent"
      concept: transparent
      source: {kind: coined}
    - form: "ota katevoito"
      class: adj
      field: "Everyday speech"
      gloss: "opaque"
      concept: opaque
      built: ["ota", "katevoito"]
      source: {kind: coined}
    - form: "kukulauvi"
      class: adj
      field: "Everyday speech"
      gloss: "intended"
      concept: intended
      source: {kind: coined}
    - form: "ota kukulauvi"
      class: adj
      field: "Everyday speech"
      gloss: "accidental"
      concept: accidental
      built: ["ota", "kukulauvi"]
      source: {kind: coined}
    - form: "ota vopi"
      class: adj
      field: "Everyday speech"
      gloss: "constrained in action; not free to act"
      concept: constrained
      built: ["ota", "vopi"]
      source: {kind: coined}
    - form: "pe"
      class: adj
      field: "Everyday speech"
      gloss: "more"
      concept: more
      source: {kind: coined}
    - form: "pokut"
      class: adj
      field: "Everyday speech"
      gloss: "most"
      concept: most
      source: {kind: coined}
    - form: "suso"
      class: adj
      field: "Everyday speech"
      gloss: "good"
      concept: good
      source: {kind: coined}
    - form: "nowe"
      class: adj
      field: "Everyday speech"
      gloss: "bad"
      concept: bad
      source: {kind: coined}
    - form: "pe suso"
      class: adj
      field: "Everyday speech"
      gloss: "better"
      concept: better
      built: ["pe", "suso"]
      source: {kind: coined}
    - form: "pe nowe"
      class: adj
      field: "Everyday speech"
      gloss: "worse"
      concept: worse
      built: ["pe", "nowe"]
      source: {kind: coined}
    - form: "pokut suso"
      class: adj
      field: "Everyday speech"
      gloss: "best"
      concept: best
      built: ["pokut", "suso"]
      source: {kind: coined}
    - form: "pokut nowe"
      class: adj
      field: "Everyday speech"
      gloss: "worst"
      concept: worst
      built: ["pokut", "nowe"]
      source: {kind: coined}
    - form: "maa"
      class: part
      field: "Everyday speech"
      gloss: "can; able to do something (ability)"
      concept: can
      source: {kind: coined}
    - form: "ota maa"
      class: part
      field: "Everyday speech"
      gloss: "cannot; unable to do something (lack of ability)"
      concept: cannot
      built: ["ota", "maa"]
      source: {kind: coined}
    - form: "pisen"
      class: part
      field: "Everyday speech"
      gloss: "must"
      concept: must
      source: {kind: coined}
    - form: "ota pisen"
      class: part
      field: "Everyday speech"
      gloss: "must not; it is forbidden to"
      concept: must-not
      built: ["ota", "pisen"]
      source: {kind: coined}
    - form: "vute"
      class: v
      field: "Everyday speech"
      gloss: "to lock"
      concept: lock-verb
      source: {kind: coined}
    - form: "voisi"
      class: v
      field: "Everyday speech"
      gloss: "to cover"
      concept: cover-verb
      source: {kind: coined}
    - form: "kun"
      class: n
      field: "Everyday speech"
      gloss: "half"
      concept: half
      source: {kind: coined}
    - form: "nakwo"
      class: adj
      field: "Everyday speech"
      gloss: "many"
      concept: many
      source: {kind: coined}
    - form: "titanako"
      class: adj
      field: "Everyday speech"
      gloss: "few"
      concept: few
      source: {kind: coined}
    - form: "katsi"
      class: adj
      field: "Everyday speech"
      gloss: "none; nothing"
      concept: none
      source: {kind: coined}
    - form: "kwisuuha"
      class: n
      field: "Everyday speech"
      gloss: "zero"
      concept: zero
      source: {kind: coined}
    - form: "kenka"
      class: n
      field: "Everyday speech"
      gloss: "quarter"
      concept: quarter
      source: {kind: coined}
    - form: "pakik"
      class: n
      field: "Everyday speech"
      gloss: "whole"
      concept: whole
      source: {kind: coined}
    - form: "umang"
      class: adj
      field: "Everyday speech"
      gloss: "all"
      concept: all
      source: {kind: coined}
    - form: "vesik"
      class: adj
      field: "Everyday speech"
      gloss: "some"
      concept: some
      source: {kind: coined}
    - form: "wola"
      class: adj
      field: "Everyday speech"
      gloss: "much"
      concept: much
      source: {kind: coined}
    - form: "sotut"
      class: adj
      field: "Everyday speech"
      gloss: "little"
      concept: little-quantity
      source: {kind: coined}
    - form: "sela"
      class: adj
      field: "Everyday speech"
      gloss: "enough"
      concept: enough
      source: {kind: coined}
    - form: "tsopu"
      class: adj
      field: "Everyday speech"
      gloss: "less"
      concept: less
      source: {kind: coined}
    - form: "nolok"
      class: adj
      field: "Everyday speech"
      gloss: "least"
      concept: least
      source: {kind: coined}
    - form: "vakaki"
      class: adj
      field: "Everyday speech"
      gloss: "equal"
      concept: equal
      source: {kind: coined}
    - form: "vehuung"
      class: adj
      field: "Everyday speech"
      gloss: "each"
      concept: each
      source: {kind: coined}
    - form: "tsuyopa"
      class: adj
      field: "Everyday speech"
      gloss: "every"
      concept: every
      source: {kind: coined}
    - form: "wihok"
      class: adj
      field: "Everyday speech"
      gloss: "both"
      concept: both
      source: {kind: coined}
    - form: "haipu"
      class: adj
      field: "Everyday speech"
      gloss: "either"
      concept: either
      source: {kind: coined}
    - form: "poi'etitu"
      class: adj
      field: "Everyday speech"
      gloss: "neither"
      concept: neither
      source: {kind: coined}
    - form: "tokwalu"
      class: adv
      field: "Everyday speech"
      gloss: "about"
      concept: about
      source: {kind: coined}
    - form: "tsak"
      class: adv
      field: "Everyday speech"
      gloss: "almost"
      concept: almost
      source: {kind: coined}
    - form: "tanpaa"
      class: adv
      field: "Everyday speech"
      gloss: "exactly"
      concept: exactly
      source: {kind: coined}
    - form: "yami"
      class: n
      field: "Everyday speech"
      gloss: "number"
      concept: number
      source: {kind: coined}
    - form: "tu'ei"
      class: n
      field: "Everyday speech"
      gloss: "amount"
      concept: amount
      source: {kind: coined}
    - form: "vapailu"
      class: v
      field: "Everyday speech"
      gloss: "measure"
      concept: measure-verb
      source: {kind: coined}
    - form: "lukwit"
      class: v
      field: "Everyday speech"
      gloss: "count"
      concept: count-verb
      source: {kind: coined}
    - form: "muyuya"
      class: adj
      field: "Everyday speech"
      gloss: "black"
      concept: black
      source: {kind: coined}
    - form: "tsau"
      class: adj
      field: "Everyday speech"
      gloss: "white"
      concept: white
      source: {kind: coined}
    - form: "ipi"
      class: adj
      field: "Everyday speech"
      gloss: "red"
      concept: red
      source: {kind: coined}
    - form: "tawauvi"
      class: adj
      field: "Everyday speech"
      gloss: "green"
      concept: green
      source: {kind: coined}
    - form: "nuvihaya"
      class: adj
      field: "Everyday speech"
      gloss: "yellow"
      concept: yellow
      source: {kind: coined}
    - form: "puyotsat"
      class: adj
      field: "Everyday speech"
      gloss: "blue"
      concept: blue
      source: {kind: coined}
    - form: "papaat"
      class: adj
      field: "Everyday speech"
      gloss: "grey"
      concept: grey
      source: {kind: coined}
    - form: "uu"
      class: adj
      field: "Everyday speech"
      gloss: "brown"
      concept: brown
      source: {kind: coined}
    - form: "vapina"
      class: adj
      field: "Everyday speech"
      gloss: "light in colour"
      concept: light-colour
      source: {kind: coined}
    - form: "mapa"
      class: adj
      field: "Everyday speech"
      gloss: "pale"
      concept: pale
      source: {kind: coined}
    - form: "aakwi"
      class: adj
      field: "Everyday speech"
      gloss: "clear in appearance"
      concept: clear-appearance
      source: {kind: coined}
    - form: "lesuu"
      class: adj
      field: "Everyday speech"
      gloss: "shiny"
      concept: shiny
      source: {kind: coined}
    - form: "kowe"
      class: adj
      field: "Everyday speech"
      gloss: "dull"
      concept: dull-appearance
      source: {kind: coined}
    - form: "kiikuki"
      class: adj
      field: "Everyday speech"
      gloss: "plain; without a pattern"
      concept: plain-pattern
      source: {kind: coined}
    - form: "uukwa"
      class: adj
      field: "Everyday speech"
      gloss: "spotted"
      concept: spotted
      source: {kind: coined}
    - form: "noyai"
      class: adj
      field: "Everyday speech"
      gloss: "striped"
      concept: striped
      source: {kind: coined}
    - form: "tu'oku"
      class: v
      field: "Everyday speech"
      gloss: "to be"
      concept: be
      source: {kind: coined}
    - form: "monpo"
      class: v
      field: "Everyday speech"
      gloss: "to have"
      concept: have
      source: {kind: coined}
    - form: "haalo"
      class: v
      field: "Everyday speech"
      gloss: "to go"
      concept: go
      source: {kind: coined}
    - form: "hakwe"
      class: v
      field: "Everyday speech"
      gloss: "to come"
      concept: come
      source: {kind: coined}
    - form: "lohen"
      class: v
      field: "Everyday speech"
      gloss: "to give"
      concept: give
      source: {kind: coined}
    - form: "uula"
      class: v
      field: "Everyday speech"
      gloss: "to take"
      concept: take
      source: {kind: coined}
    - form: "nutu"
      class: v
      field: "Everyday speech"
      gloss: "to make"
      concept: make
      source: {kind: coined}
    - form: "hivak"
      class: v
      field: "Everyday speech"
      gloss: "to do"
      concept: do
      source: {kind: coined}
    - form: "yaulong"
      class: v
      field: "Everyday speech"
      gloss: "to say"
      concept: say
      source: {kind: coined}
    - form: "tukatik"
      class: v
      field: "Everyday speech"
      gloss: "to speak"
      concept: speak
      source: {kind: coined}
    - form: "sauhu"
      class: v
      field: "Everyday speech"
      gloss: "to think"
      concept: think
      source: {kind: coined}
    - form: "tantu"
      class: v
      field: "Everyday speech"
      gloss: "to want"
      concept: want
      source: {kind: coined}
    - form: "wesa"
      class: v
      field: "Everyday speech"
      gloss: "to walk"
      concept: walk
      source: {kind: coined}
    - form: "vemoi"
      class: v
      field: "Everyday speech"
      gloss: "to run"
      concept: run
      source: {kind: coined}
    - form: "kakonait"
      class: v
      field: "Everyday speech"
      gloss: "to sit"
      concept: sit
      source: {kind: coined}
    - form: "yung"
      class: v
      field: "Everyday speech"
      gloss: "to stand"
      concept: stand
      source: {kind: coined}
    - form: "tikiki"
      class: v
      field: "Everyday speech"
      gloss: "to lie down"
      concept: lie-down
      source: {kind: coined}
    - form: "hakwi"
      class: v
      field: "Everyday speech"
      gloss: "to hold"
      concept: hold
      source: {kind: coined}
    - form: "tepiti"
      class: v
      field: "Everyday speech"
      gloss: "to bring"
      concept: bring
      source: {kind: coined}
    - form: "oipu"
      class: v
      field: "Everyday speech"
      gloss: "to put"
      concept: put
      source: {kind: coined}
    - form: "niimin"
      class: v
      field: "Everyday speech"
      gloss: "to find"
      concept: find
      source: {kind: coined}
    - form: "ituu"
      class: v
      field: "Everyday speech"
      gloss: "to lose"
      concept: lose
      source: {kind: coined}
    - form: "ihan"
      class: v
      field: "Everyday speech"
      gloss: "to open"
      concept: open
      source: {kind: coined}
    - form: "yaku"
      class: v
      field: "Everyday speech"
      gloss: "to close"
      concept: close
      source: {kind: coined}
    - form: "lapi"
      class: v
      field: "Everyday speech"
      gloss: "to exist"
      concept: exist
      source: {kind: coined}
    - form: "anpau"
      class: v
      field: "Everyday speech"
      gloss: "to belong"
      concept: belong
      source: {kind: coined}
    - form: "haalat"
      class: v
      field: "Everyday speech"
      gloss: "to become"
      concept: become
      source: {kind: coined}
    - form: "yetako"
      class: v
      field: "Everyday speech"
      gloss: "to remain"
      concept: remain
      source: {kind: coined}
    - form: "puhut"
      class: v
      field: "Everyday speech"
      gloss: "to leave"
      concept: leave
      source: {kind: coined}
    - form: "kase"
      class: v
      field: "Everyday speech"
      gloss: "to arrive"
      concept: arrive
      source: {kind: coined}
    - form: "kuun"
      class: v
      field: "Everyday speech"
      gloss: "to crawl"
      concept: crawl
      source: {kind: coined}
    - form: "wimai"
      class: v
      field: "Everyday speech"
      gloss: "to climb"
      concept: climb
      source: {kind: coined}
    - form: "mitsa"
      class: v
      field: "Everyday speech"
      gloss: "to jump"
      concept: jump
      source: {kind: coined}
    - form: "tinumi"
      class: v
      field: "Everyday speech"
      gloss: "to fall"
      concept: fall
      source: {kind: coined}
    - form: "kaumon"
      class: v
      field: "Everyday speech"
      gloss: "to rise"
      concept: rise
      source: {kind: coined}
    - form: "topaupo"
      class: v
      field: "Everyday speech"
      gloss: "to enter"
      concept: enter
      source: {kind: coined}
    - form: "maapu"
      class: v
      field: "Everyday speech"
      gloss: "to exit"
      concept: exit
      source: {kind: coined}
    - form: "hihaumi"
      class: v
      field: "Everyday speech"
      gloss: "to return"
      concept: return
      source: {kind: coined}
    - form: "punai"
      class: v
      field: "Everyday speech"
      gloss: "to follow"
      concept: follow
      source: {kind: coined}
    - form: "pakai"
      class: v
      field: "Everyday speech"
      gloss: "to lead"
      concept: lead
      source: {kind: coined}
    - form: "mawa"
      class: v
      field: "Everyday speech"
      gloss: "to carry"
      concept: carry
      source: {kind: coined}
    - form: "puu"
      class: v
      field: "Everyday speech"
      gloss: "to move"
      concept: move
      source: {kind: coined}
    - form: "alavo"
      class: v
      field: "Everyday speech"
      gloss: "to push"
      concept: push
      source: {kind: coined}
    - form: "miin"
      class: v
      field: "Everyday speech"
      gloss: "to pull"
      concept: pull
      source: {kind: coined}
    - form: "wasuu"
      class: v
      field: "Everyday speech"
      gloss: "to lift"
      concept: lift
      source: {kind: coined}
    - form: "uung"
      class: v
      field: "Everyday speech"
      gloss: "to drop"
      concept: drop
      source: {kind: coined}
    - form: "wasin"
      class: v
      field: "Everyday speech"
      gloss: "to throw"
      concept: throw
      source: {kind: coined}
    - form: "nelaa"
      class: v
      field: "Everyday speech"
      gloss: "to catch"
      concept: catch
      source: {kind: coined}
    - form: "setse"
      class: v
      field: "Everyday speech"
      gloss: "to build"
      concept: build
      source: {kind: coined}
    - form: "nati"
      class: v
      field: "Everyday speech"
      gloss: "to create"
      concept: create
      source: {kind: coined}
    - form: "niilu"
      class: v
      field: "Everyday speech"
      gloss: "to break"
      concept: break
      source: {kind: coined}
    - form: "winka"
      class: v
      field: "Everyday speech"
      gloss: "to destroy"
      concept: destroy
      source: {kind: coined}
    - form: "potingya"
      class: v
      field: "Everyday speech"
      gloss: "to repair"
      concept: repair
      source: {kind: coined}
    - form: "suhi"
      class: v
      field: "Everyday speech"
      gloss: "to tell"
      concept: tell
      source: {kind: coined}
    - form: "kwon"
      class: v
      field: "Everyday speech"
      gloss: "to ask"
      concept: ask
      source: {kind: coined}
    - form: "lapun"
      class: v
      field: "Everyday speech"
      gloss: "to answer"
      concept: answer
      source: {kind: coined}
    - form: "paya"
      class: v
      field: "Everyday speech"
      gloss: "to call"
      concept: call
      source: {kind: coined}
    - form: "piva"
      class: v
      field: "Everyday speech"
      gloss: "to shout"
      concept: shout
      source: {kind: coined}
    - form: "kilu"
      class: v
      field: "Everyday speech"
      gloss: "to whisper"
      concept: whisper
      source: {kind: coined}
    - form: "penung"
      class: v
      field: "Everyday speech"
      gloss: "to explain"
      concept: explain
      source: {kind: coined}
    - form: "mumama"
      class: v
      field: "Everyday speech"
      gloss: "to name"
      concept: name-verb
      source: {kind: coined}
    - form: "tolanpun"
      class: v
      field: "Everyday speech"
      gloss: "to understand"
      concept: understand
      source: {kind: coined}
    - form: "aakon"
      class: v
      field: "Everyday speech"
      gloss: "to remember"
      concept: remember
      source: {kind: coined}
    - form: "puumun"
      class: v
      field: "Everyday speech"
      gloss: "to forget"
      concept: forget
      source: {kind: coined}
    - form: "puuku"
      class: v
      field: "Everyday speech"
      gloss: "to learn"
      concept: learn
      source: {kind: coined}
    - form: "kemuha"
      class: v
      field: "Everyday speech"
      gloss: "to teach"
      concept: teach
      source: {kind: coined}
    - form: "pankakwo"
      class: v
      field: "Everyday speech"
      gloss: "to decide"
      concept: decide
      source: {kind: coined}
    - form: "tii"
      class: v
      field: "Everyday speech"
      gloss: "to imagine"
      concept: imagine
      source: {kind: coined}
    - form: "natut"
      class: v
      field: "Everyday speech"
      gloss: "to need"
      concept: need-verb
      source: {kind: coined}
    - form: "siwin"
      class: v
      field: "Everyday speech"
      gloss: "to wish"
      concept: wish-verb
      source: {kind: coined}
    - form: "opite"
      class: v
      field: "Everyday speech"
      gloss: "to intend"
      concept: intend
      source: {kind: coined}
    - form: "sunku"
      class: v
      field: "Everyday speech"
      gloss: "to choose"
      concept: choose
      source: {kind: coined}
    - form: "ulo"
      class: v
      field: "Everyday speech"
      gloss: "to prefer"
      concept: prefer
      source: {kind: coined}
    - form: "mokaho"
      class: v
      field: "Everyday speech"
      gloss: "to try"
      concept: try
      source: {kind: coined}
    - form: "nokii"
      class: v
      field: "Everyday speech"
      gloss: "to search"
      concept: search
      source: {kind: coined}
    - form: "tsupali"
      class: v
      field: "Everyday speech"
      gloss: "to meet"
      concept: meet
      source: {kind: coined}
    - form: "yopaakon"
      class: v
      field: "Everyday speech"
      gloss: "to help"
      concept: help
      source: {kind: coined}
    - form: "talavu"
      class: v
      field: "Everyday speech"
      gloss: "to share"
      concept: share
      source: {kind: coined}
    - form: "nuta"
      class: v
      field: "Everyday speech"
      gloss: "to buy"
      concept: buy
      source: {kind: coined}
    - form: "tasaa"
      class: v
      field: "Everyday speech"
      gloss: "to sell"
      concept: sell
      source: {kind: coined}
    - form: "misuk"
      class: v
      field: "Everyday speech"
      gloss: "to promise"
      concept: promise-verb
      source: {kind: coined}
    - form: "hapik"
      class: v
      field: "Everyday speech"
      gloss: "to thank"
      concept: thank-verb
      source: {kind: coined}
    - form: "vaangi"
      class: v
      field: "Everyday speech"
      gloss: "to refuse"
      concept: refuse-verb
      source: {kind: coined}
    - form: "loni"
      class: v
      field: "Everyday speech"
      gloss: "to fight"
      concept: fight
      source: {kind: coined}
    - form: "uhan"
      class: v
      field: "Everyday speech"
      gloss: "to hit"
      concept: hit
      source: {kind: coined}
    - form: "wi'o"
      class: v
      field: "Everyday speech"
      gloss: "to kill"
      concept: kill
      source: {kind: coined}
    - form: "lelu"
      class: v
      field: "Everyday speech"
      gloss: "to defend"
      concept: defend
      source: {kind: coined}
    - form: "vahai"
      class: v
      field: "Everyday speech"
      gloss: "to attack"
      concept: attack
      source: {kind: coined}
    - form: "lowon"
      class: v
      field: "Everyday speech"
      gloss: "to flee"
      concept: flee
      source: {kind: coined}
    - form: "tsait"
      class: v
      field: "Everyday speech"
      gloss: "to threaten"
      concept: threaten
      source: {kind: coined}
    - form: "tsitaman"
      class: v
      field: "Everyday speech"
      gloss: "to stop"
      concept: stop
      source: {kind: coined}
    - form: "wosoi"
      class: v
      field: "Everyday speech"
      gloss: "to continue"
      concept: continue
      source: {kind: coined}
    - form: "taweha"
      class: v
      field: "Everyday speech"
      gloss: "to wait"
      concept: wait
      source: {kind: coined}
    - form: "kutong"
      class: v
      field: "Everyday speech"
      gloss: "to happen"
      concept: happen
      source: {kind: coined}
    - form: "tsola"
      class: v
      field: "Everyday speech"
      gloss: "to kneel"
      concept: kneel
      source: {kind: coined}
    - form: "tola"
      class: v
      field: "Everyday speech"
      gloss: "to bend"
      concept: bend
      source: {kind: coined}
    - form: "mawek"
      class: v
      field: "Everyday speech"
      gloss: "to lean"
      concept: lean
      source: {kind: coined}
    - form: "tsopuung"
      class: v
      field: "Everyday speech"
      gloss: "to uncover"
      concept: uncover
      source: {kind: coined}
    - form: "mapupo"
      class: v
      field: "Everyday speech"
      gloss: "to hide"
      concept: hide
      source: {kind: coined}
    - form: "sailama"
      class: v
      field: "Everyday speech"
      gloss: "to reveal"
      concept: reveal
      source: {kind: coined}
    - form: "kwik"
      class: v
      field: "Everyday speech"
      gloss: "to unlock"
      concept: unlock
      source: {kind: coined}
    - form: "kwitsek"
      class: adv
      field: "Everyday speech"
      gloss: "here"
      concept: here
      source: {kind: coined}
    - form: "nitakun"
      class: adv
      field: "Everyday speech"
      gloss: "there"
      concept: there
      source: {kind: coined}
    - form: "petaa"
      class: adv
      field: "Everyday speech"
      gloss: "somewhere"
      concept: somewhere
      source: {kind: coined}
    - form: "ota petaa"
      class: adv
      field: "Everyday speech"
      gloss: "nowhere"
      concept: nowhere
      built: ["ota", "petaa"]
      source: {kind: coined}
    - form: "piilamu"
      class: adv
      field: "Everyday speech"
      gloss: "everywhere"
      concept: everywhere
      source: {kind: coined}
    - form: "iletsi"
      class: adv
      field: "Everyday speech"
      gloss: "near"
      concept: near
      source: {kind: coined}
    - form: "pavun"
      class: adv
      field: "Everyday speech"
      gloss: "far"
      concept: far
      source: {kind: coined}
    - form: "lingu"
      class: part
      field: "Everyday speech"
      gloss: "beside"
      concept: beside
      source: {kind: coined}
    - form: "mutsaak"
      class: part
      field: "Everyday speech"
      gloss: "between"
      concept: between
      source: {kind: coined}
    - form: "usan"
      class: part
      field: "Everyday speech"
      gloss: "among"
      concept: among
      source: {kind: coined}
    - form: "kwau"
      class: part
      field: "Everyday speech"
      gloss: "above"
      concept: above
      source: {kind: coined}
    - form: "tsukwo"
      class: part
      field: "Everyday speech"
      gloss: "below"
      concept: below
      source: {kind: coined}
    - form: "pusa"
      class: part
      field: "Everyday speech"
      gloss: "under"
      concept: under
      source: {kind: coined}
    - form: "ka'ing"
      class: part
      field: "Everyday speech"
      gloss: "over"
      concept: over
      source: {kind: coined}
    - form: "tisi"
      class: part
      field: "Everyday speech"
      gloss: "inside"
      concept: inside
      source: {kind: coined}
    - form: "piimu"
      class: part
      field: "Everyday speech"
      gloss: "outside"
      concept: outside
      source: {kind: coined}
    - form: "sekin"
      class: part
      field: "Everyday speech"
      gloss: "beyond"
      concept: beyond
      source: {kind: coined}
    - form: "huu"
      class: part
      field: "Everyday speech"
      gloss: "before; in front of (spatial)"
      concept: before-spatial
      source: {kind: coined}
    - form: "papin"
      class: part
      field: "Everyday speech"
      gloss: "behind"
      concept: behind
      source: {kind: coined}
    - form: "kikuuma"
      class: adv
      field: "Everyday speech"
      gloss: "left (direction)"
      concept: left-direction
      source: {kind: coined}
    - form: "luu"
      class: adv
      field: "Everyday speech"
      gloss: "right (direction)"
      concept: right-direction
      source: {kind: coined}
    - form: "nuvoma"
      class: n
      field: "Everyday speech"
      gloss: "center"
      concept: center
      source: {kind: coined}
    - form: "votaisala"
      class: adv
      field: "Everyday speech"
      gloss: "up"
      concept: up
      source: {kind: coined}
    - form: "hito"
      class: adv
      field: "Everyday speech"
      gloss: "down"
      concept: down
      source: {kind: coined}
    - form: "kiit"
      class: adv
      field: "Everyday speech"
      gloss: "forward"
      concept: forward
      source: {kind: coined}
    - form: "kwok"
      class: adv
      field: "Everyday speech"
      gloss: "backward"
      concept: backward
      source: {kind: coined}
    - form: "lesi"
      class: part
      field: "Everyday speech"
      gloss: "toward"
      concept: toward
      source: {kind: coined}
    - form: "kaa"
      class: part
      field: "Everyday speech"
      gloss: "away"
      concept: away
      source: {kind: coined}
    - form: "vilii"
      class: part
      field: "Everyday speech"
      gloss: "through"
      concept: through
      source: {kind: coined}
    - form: "moma"
      class: part
      field: "Everyday speech"
      gloss: "across"
      concept: across
      source: {kind: coined}
    - form: "tsehoi"
      class: part
      field: "Everyday speech"
      gloss: "around"
      concept: around
      source: {kind: coined}
    - form: "sivo"
      class: part
      field: "Everyday speech"
      gloss: "in"
      concept: in
      source: {kind: coined}
    - form: "kwilan"
      class: part
      field: "Everyday speech"
      gloss: "on"
      concept: "on"
      source: {kind: coined}
    - form: "tsakaa"
      class: part
      field: "Everyday speech"
      gloss: "at"
      concept: at
      source: {kind: coined}
    - form: "pu'o"
      class: part
      field: "Everyday speech"
      gloss: "from"
      concept: from
      source: {kind: coined}
    - form: "mimaa"
      class: part
      field: "Everyday speech"
      gloss: "to"
      concept: to
      source: {kind: coined}
    - form: "kaman"
      class: n
      field: "Everyday speech"
      gloss: "a place; a location"
      concept: place-noun
      source: {kind: coined}
    - form: "kapo"
      class: n
      field: "Everyday speech"
      gloss: "position"
      concept: position
      source: {kind: coined}
    - form: "yanii"
      class: n
      field: "Everyday speech"
      gloss: "direction"
      concept: direction
      source: {kind: coined}
    - form: "valan"
      class: n
      field: "Everyday speech"
      gloss: "distance"
      concept: distance
      source: {kind: coined}
    - form: "kini"
      class: n
      field: "Everyday speech"
      gloss: "time"
      concept: time
      source: {kind: coined}
    - form: "iwawe"
      class: n
      field: "Everyday speech"
      gloss: "moment"
      concept: moment
      source: {kind: coined}
    - form: "tavapi"
      class: n
      field: "Everyday speech"
      gloss: "day"
      concept: day
      source: {kind: coined}
    - form: "ahepo"
      class: n
      field: "Everyday speech"
      gloss: "night"
      concept: night
      source: {kind: coined}
    - form: "kaavisa"
      class: n
      field: "Everyday speech"
      gloss: "morning"
      concept: morning
      source: {kind: coined}
    - form: "peng"
      class: n
      field: "Everyday speech"
      gloss: "noon"
      concept: noon
      source: {kind: coined}
    - form: "wino"
      class: n
      field: "Everyday speech"
      gloss: "evening"
      concept: evening
      source: {kind: coined}
    - form: "musi"
      class: n
      field: "Everyday speech"
      gloss: "midnight"
      concept: midnight
      source: {kind: coined}
    - form: "tinaanta"
      class: adv
      field: "Everyday speech"
      gloss: "now"
      concept: now
      source: {kind: coined}
    - form: "pipu"
      class: adv
      field: "Everyday speech"
      gloss: "then"
      concept: then
      source: {kind: coined}
    - form: "vin"
      class: adv
      field: "Everyday speech"
      gloss: "today"
      concept: today
      source: {kind: coined}
    - form: "takovu"
      class: adv
      field: "Everyday speech"
      gloss: "yesterday"
      concept: yesterday
      source: {kind: coined}
    - form: "kaula"
      class: adv
      field: "Everyday speech"
      gloss: "tomorrow"
      concept: tomorrow
      source: {kind: coined}
    - form: "hanaa'u"
      class: n
      field: "Everyday speech"
      gloss: "past"
      concept: past
      source: {kind: coined}
    - form: "pokaa"
      class: n
      field: "Everyday speech"
      gloss: "present"
      concept: present
      source: {kind: coined}
    - form: "yaiwa"
      class: n
      field: "Everyday speech"
      gloss: "future"
      concept: future
      source: {kind: coined}
    - form: "pehat"
      class: part
      field: "Everyday speech"
      gloss: "before (temporal)"
      concept: before-time
      source: {kind: coined}
    - form: "muu"
      class: part
      field: "Everyday speech"
      gloss: "after"
      concept: after
      source: {kind: coined}
    - form: "kupi"
      class: part
      field: "Everyday speech"
      gloss: "during"
      concept: during
      source: {kind: coined}
    - form: "mok"
      class: part
      field: "Everyday speech"
      gloss: "while"
      concept: while
      source: {kind: coined}
    - form: "niho"
      class: part
      field: "Everyday speech"
      gloss: "until"
      concept: until
      source: {kind: coined}
    - form: "kwe"
      class: part
      field: "Everyday speech"
      gloss: "since a time"
      concept: since-time
      source: {kind: coined}
    - form: "sulo"
      class: adv
      field: "Everyday speech"
      gloss: "always"
      concept: always
      source: {kind: coined}
    - form: "songan"
      class: adv
      field: "Everyday speech"
      gloss: "often"
      concept: often
      source: {kind: coined}
    - form: "sahuk"
      class: adv
      field: "Everyday speech"
      gloss: "sometimes"
      concept: sometimes
      source: {kind: coined}
    - form: "tsungu"
      class: adv
      field: "Everyday speech"
      gloss: "rarely"
      concept: rarely
      source: {kind: coined}
    - form: "puti'ata"
      class: adv
      field: "Everyday speech"
      gloss: "never"
      concept: never
      source: {kind: coined}
    - form: "patsiva"
      class: adj
      field: "Everyday speech"
      gloss: "lasting a long time"
      concept: long-duration
      source: {kind: coined}
    - form: "vo"
      class: adj
      field: "Everyday speech"
      gloss: "lasting a short time"
      concept: short-duration
      source: {kind: coined}
    - form: "pitai"
      class: adj
      field: "Everyday speech"
      gloss: "brief in duration"
      concept: brief-duration
      source: {kind: coined}
    - form: "kii"
      class: adj
      field: "Everyday speech"
      gloss: "lasting; continuing for a sustained time"
      concept: lasting-duration
      source: {kind: coined}
    - form: "milosa"
      class: adv
      field: "Everyday speech"
      gloss: "again"
      concept: again
      source: {kind: coined}
    - form: "vuko"
      class: adv
      field: "Everyday speech"
      gloss: "once"
      concept: once
      source: {kind: coined}
    - form: "hiho"
      class: adv
      field: "Everyday speech"
      gloss: "twice"
      concept: twice
      source: {kind: coined}
    - form: "tiitapun"
      class: adv
      field: "Everyday speech"
      gloss: "repeatedly"
      concept: repeatedly
      source: {kind: coined}
    - form: "katsa"
      class: adv
      field: "Everyday speech"
      gloss: "already"
      concept: already
      source: {kind: coined}
    - form: "nai'i"
      class: adv
      field: "Everyday speech"
      gloss: "still"
      concept: still
      source: {kind: coined}
    - form: "kehehi"
      class: adv
      field: "Everyday speech"
      gloss: "yet"
      concept: yet
      source: {kind: coined}
    - form: "hayaskau"
      class: adv
      field: "Everyday speech"
      gloss: "soon"
      concept: soon
      source: {kind: coined}
    - form: "tsuuti"
      class: adv
      field: "Everyday speech"
      gloss: "later"
      concept: later
      source: {kind: coined}
    - form: "pisaiti"
      class: adj
      field: "Everyday speech"
      gloss: "early"
      concept: early
      source: {kind: coined}
    - form: "yapu"
      class: adj
      field: "Everyday speech"
      gloss: "late"
      concept: late
      source: {kind: coined}
    - form: "tikolang"
      class: adv
      field: "Everyday speech"
      gloss: "first; before the other events in a sequence"
      concept: first-sequence
      source: {kind: coined}
    - form: "mokitu"
      class: adj
      field: "Everyday speech"
      gloss: "next"
      concept: next
      source: {kind: coined}
    - form: "tuu'apa"
      class: adj
      field: "Everyday speech"
      gloss: "last"
      concept: last
      source: {kind: coined}
    - form: "maatsinak"
      class: adv
      field: "Everyday speech"
      gloss: "finally"
      concept: finally
      source: {kind: coined}
    - form: "holalu"
      class: n
      field: "Everyday speech"
      gloss: "season"
      concept: season
      source: {kind: coined}
    - form: "otuli"
      class: n
      field: "Everyday speech"
      gloss: "year"
      concept: year
      source: {kind: coined}
    - form: "sahuusa"
      class: n
      field: "Everyday speech"
      gloss: "month"
      concept: month
      source: {kind: coined}
    - form: "puuk"
      class: n
      field: "Everyday speech"
      gloss: "dawn"
      concept: dawn
      source: {kind: coined}
    - form: "mekwa"
      class: n
      field: "Everyday speech"
      gloss: "dusk"
      concept: dusk
      source: {kind: coined}
    - form: "kama"
      class: pron
      field: "Everyday speech"
      gloss: "someone"
      concept: someone
      source: {kind: coined}
    - form: "tuhan"
      class: pron
      field: "Everyday speech"
      gloss: "anyone"
      concept: anyone
      source: {kind: coined}
    - form: "minko"
      class: pron
      field: "Everyday speech"
      gloss: "everyone"
      concept: everyone
      source: {kind: coined}
    - form: "ota kama"
      class: pron
      field: "Everyday speech"
      gloss: "no one"
      concept: no-one
      built: ["ota", "kama"]
      source: {kind: coined}
    - form: "haa"
      class: pron
      field: "Everyday speech"
      gloss: "something"
      concept: something
      source: {kind: coined}
    - form: "lii"
      class: pron
      field: "Everyday speech"
      gloss: "anything"
      concept: anything
      source: {kind: coined}
    - form: "pii"
      class: pron
      field: "Everyday speech"
      gloss: "everything"
      concept: everything
      source: {kind: coined}
    - form: "tiik"
      class: pron
      field: "Everyday speech"
      gloss: "self; oneself (reflexive reference)"
      concept: self
      source: {kind: coined}
    - form: "tsoi"
      class: adj
      field: "Everyday speech"
      gloss: "other"
      concept: other
      source: {kind: coined}
    - form: "kahuu"
      class: adj
      field: "Everyday speech"
      gloss: "another"
      concept: another
      source: {kind: coined}
    - form: "siha'o"
      class: adj
      field: "Everyday speech"
      gloss: "same"
      concept: same
      source: {kind: coined}
    - form: "samaa"
      class: adj
      field: "Everyday speech"
      gloss: "different"
      concept: different
      source: {kind: coined}
    - form: "pulikoi"
      class: adj
      field: "Everyday speech"
      gloss: "false"
      concept: "false"
      source: {kind: coined}
    - form: "yanghi"
      class: n
      field: "Everyday speech"
      gloss: "a lie; an intentionally deceptive statement"
      concept: lie-noun
      source: {kind: coined}
    - form: "tsaki"
      class: adv
      field: "Everyday speech"
      gloss: "really; truly; genuinely; de veras (asserting sincerity or reality)"
      concept: sincerity
      source: {kind: coined}
    - form: "hamevak"
      class: adv
      field: "Everyday speech"
      gloss: "indeed"
      concept: indeed
      source: {kind: coined}
    - form: "upan"
      class: adv
      field: "Everyday speech"
      gloss: "certainly"
      concept: certainly
      source: {kind: coined}
    - form: "sunomi"
      class: adv
      field: "Everyday speech"
      gloss: "perhaps"
      concept: perhaps
      source: {kind: coined}
    - form: "lilpa"
      class: adv
      field: "Everyday speech"
      gloss: "probably"
      concept: probably
      source: {kind: coined}
    - form: "wiito"
      class: adj
      field: "Everyday speech"
      gloss: "unlikely"
      concept: unlikely
      source: {kind: coined}
    - form: "tsuta"
      class: adv
      field: "Everyday speech"
      gloss: "apparently"
      concept: apparently
      source: {kind: coined}
    - form: "vunaavaku"
      class: adv
      field: "Everyday speech"
      gloss: "supposedly"
      concept: supposedly
      source: {kind: coined}
    - form: "nalpo"
      class: adv
      field: "Everyday speech"
      gloss: "actually"
      concept: in-fact
      source: {kind: coined}
    - form: "siset"
      class: v
      field: "Everyday speech"
      gloss: "suspect"
      concept: suspect
      source: {kind: coined}
    - form: "huyo"
      class: v
      field: "Everyday speech"
      gloss: "guess"
      concept: guess-verb
      source: {kind: coined}
    - form: "piwo"
      class: v
      field: "Everyday speech"
      gloss: "assume"
      concept: assume-verb
      source: {kind: coined}
    - form: "ovuskuma"
      class: n
      field: "Everyday speech"
      gloss: "a falsehood; a false claim, whether intentional or mistaken"
      concept: falsehood
      source: {kind: coined}
    - form: "tsepi"
      class: conj
      field: "Everyday speech"
      gloss: "or"
      concept: or
      source: {kind: coined}
    - form: "kau"
      class: conj
      field: "Everyday speech"
      gloss: "but"
      concept: but
      source: {kind: coined}
    - form: "pamuu"
      class: conj
      field: "Everyday speech"
      gloss: "nor"
      concept: nor
      source: {kind: coined}
    - form: "yovo"
      class: conj
      field: "Everyday speech"
      gloss: "because"
      concept: because
      source: {kind: coined}
    - form: "lohai"
      class: adv
      field: "Everyday speech"
      gloss: "therefore"
      concept: therefore
      source: {kind: coined}
    - form: "vupaat"
      class: conj
      field: "Everyday speech"
      gloss: "if"
      concept: if
      source: {kind: coined}
    - form: "kok"
      class: conj
      field: "Everyday speech"
      gloss: "then, in a condition and its consequence"
      concept: then-conditional
      source: {kind: coined}
    - form: "yuha"
      class: conj
      field: "Everyday speech"
      gloss: "unless"
      concept: unless
      source: {kind: coined}
    - form: "maposape"
      class: adv
      field: "Everyday speech"
      gloss: "otherwise"
      concept: otherwise
      source: {kind: coined}
    - form: "siwa"
      class: conj
      field: "Everyday speech"
      gloss: "although"
      concept: although
      source: {kind: coined}
    - form: "mik"
      class: adv
      field: "Everyday speech"
      gloss: "however"
      concept: however
      source: {kind: coined}
    - form: "nemilen"
      class: adv
      field: "Everyday speech"
      gloss: "nevertheless"
      concept: nevertheless
      source: {kind: coined}
    - form: "vutet"
      class: conj
      field: "Everyday speech"
      gloss: "despite"
      concept: despite
      source: {kind: coined}
    - form: "lasat"
      class: adv
      field: "Everyday speech"
      gloss: "instead"
      concept: instead
      source: {kind: coined}
    - form: "kwii"
      class: conj
      field: "Everyday speech"
      gloss: "for; in order to; so that (purpose)"
      concept: for-purpose
      source: {kind: coined}
    - form: "yuuha"
      class: part
      field: "Everyday speech"
      gloss: "like"
      concept: like
      source: {kind: coined}
    - form: "mumaak"
      class: part
      field: "Everyday speech"
      gloss: "unlike"
      concept: unlike
      source: {kind: coined}
    - form: "ongu"
      class: part
      field: "Everyday speech"
      gloss: "as"
      concept: as
      source: {kind: coined}
    - form: "yau"
      class: part
      field: "Everyday speech"
      gloss: "than"
      concept: than
      source: {kind: coined}
    - form: "supi"
      class: conj
      field: "Everyday speech"
      gloss: "either"
      concept: either-alternative
      source: {kind: coined}
    - form: "nekon"
      class: conj
      field: "Everyday speech"
      gloss: "neither"
      concept: neither-alternative
      source: {kind: coined}
    - form: "vika"
      class: conj
      field: "Everyday speech"
      gloss: "both"
      concept: both-conjunction
      source: {kind: coined}
    - form: "taang"
      class: conj
      field: "Everyday speech"
      gloss: "whether"
      concept: whether
      source: {kind: coined}
    - form: "poma"
      class: adv
      field: "Everyday speech"
      gloss: "that is"
      concept: that-is
      source: {kind: coined}
    - form: "pok"
      class: adv
      field: "Everyday speech"
      gloss: "namely"
      concept: namely
      source: {kind: coined}
    - form: "pihi"
      class: adv
      field: "Everyday speech"
      gloss: "for example"
      concept: for-example
      source: {kind: coined}
    - form: "pami"
      class: part
      field: "Everyday speech"
      gloss: "except"
      concept: except
      source: {kind: coined}
    - form: "siitse"
      class: adv
      field: "Everyday speech"
      gloss: "only"
      concept: only
      source: {kind: coined}
    - form: "litaan"
      class: adv
      field: "Everyday speech"
      gloss: "even"
      concept: even
      source: {kind: coined}
    - form: "sohi"
      class: adv
      field: "Everyday speech"
      gloss: "also"
      concept: also
      source: {kind: coined}
    - form: "so'owek"
      class: adv
      field: "Everyday speech"
      gloss: "especially"
      concept: especially
      source: {kind: coined}
    - form: "ka'a"
      class: adj
      field: "Everyday speech"
      gloss: "small"
      concept: small
      source: {kind: coined}
    - form: "esan"
      class: adj
      field: "Everyday speech"
      gloss: "tiny"
      concept: tiny
      source: {kind: coined}
    - form: "metsu"
      class: adj
      field: "Everyday speech"
      gloss: "huge"
      concept: huge
      source: {kind: coined}
    - form: "palaan"
      class: adj
      field: "Everyday speech"
      gloss: "long in spatial length"
      concept: long
      source: {kind: coined}
    - form: "puhu"
      class: adj
      field: "Everyday speech"
      gloss: "short in spatial length"
      concept: short
      source: {kind: coined}
    - form: "namawa"
      class: adj
      field: "Everyday speech"
      gloss: "high"
      concept: high
      source: {kind: coined}
    - form: "kutsi"
      class: adj
      field: "Everyday speech"
      gloss: "low"
      concept: low
      source: {kind: coined}
    - form: "tatsa"
      class: adj
      field: "Everyday speech"
      gloss: "tall"
      concept: tall
      source: {kind: coined}
    - form: "kwiku"
      class: adj
      field: "Everyday speech"
      gloss: "wide"
      concept: wide
      source: {kind: coined}
    - form: "wovei"
      class: adj
      field: "Everyday speech"
      gloss: "narrow"
      concept: narrow
      source: {kind: coined}
    - form: "potaye"
      class: adj
      field: "Everyday speech"
      gloss: "heavy"
      concept: heavy
      source: {kind: coined}
    - form: "namuu"
      class: adj
      field: "Everyday speech"
      gloss: "light in weight"
      concept: light-weight
      source: {kind: coined}
    - form: "mukaapa"
      class: adj
      field: "Everyday speech"
      gloss: "new"
      concept: new
      source: {kind: coined}
    - form: "puyu"
      class: adj
      field: "Everyday speech"
      gloss: "old; not new"
      concept: old-object
      source: {kind: coined}
    - form: "makayu"
      class: adj
      field: "Everyday speech"
      gloss: "fast"
      concept: fast
      source: {kind: coined}
    - form: "nopani"
      class: adj
      field: "Everyday speech"
      gloss: "slow"
      concept: slow
      source: {kind: coined}
    - form: "yasokapu"
      class: adj
      field: "Everyday speech"
      gloss: "easy"
      concept: easy
      source: {kind: coined}
    - form: "ine'upi"
      class: adj
      field: "Everyday speech"
      gloss: "difficult"
      concept: difficult
      source: {kind: coined}
    - form: "hautipa"
      class: adj
      field: "Everyday speech"
      gloss: "important"
      concept: important
      source: {kind: coined}
    - form: "wakiila"
      class: adj
      field: "Everyday speech"
      gloss: "trivial"
      concept: trivial
      source: {kind: coined}
    - form: "muska"
      class: adj
      field: "Everyday speech"
      gloss: "necessary"
      concept: necessary
      source: {kind: coined}
    - form: "soitsanat"
      class: adj
      field: "Everyday speech"
      gloss: "broken"
      concept: broken
      source: {kind: coined}
    - form: "haupon"
      class: adv
      field: "Everyday speech"
      gloss: "very"
      concept: very
      source: {kind: coined}
    - form: "takwit"
      class: adv
      field: "Everyday speech"
      gloss: "extremely"
      concept: extremely
      source: {kind: coined}
    - form: "piinelta"
      class: adv
      field: "Everyday speech"
      gloss: "somewhat"
      concept: somewhat
      source: {kind: coined}
    - form: "kwaloi"
      class: adv
      field: "Everyday speech"
      gloss: "slightly"
      concept: slightly
      source: {kind: coined}
    - form: "ena"
      class: adv
      field: "Everyday speech"
      gloss: "barely"
      concept: barely
      source: {kind: coined}
    - form: "mihu"
      class: adv
      field: "Everyday speech"
      gloss: "too much"
      concept: too-much
      source: {kind: coined}
    - form: "hanto"
      class: adv
      field: "Everyday speech"
      gloss: "too little"
      concept: too-little
      source: {kind: coined}
    - form: "lapik"
      class: adj
      field: "Everyday speech"
      gloss: "similar"
      concept: similar
      source: {kind: coined}
    - form: "kwokii"
      class: adj
      field: "Everyday speech"
      gloss: "opposite"
      concept: opposite
      source: {kind: coined}
    - form: "kila"
      class: part
      field: "Everyday speech"
      gloss: "may; have permission to act"
      concept: may-permission
      source: {kind: coined}
    - form: "tipoi"
      class: part
      field: "Everyday speech"
      gloss: "might; an event is possible"
      concept: might-possibility
      source: {kind: coined}
    - form: "nanot"
      class: part
      field: "Everyday speech"
      gloss: "should"
      concept: ought
      source: {kind: coined}
    - form: "yavaaha"
      class: adj
      field: "Everyday speech"
      gloss: "required"
      concept: required
      source: {kind: coined}
    - form: "wohapa"
      class: adj
      field: "Everyday speech"
      gloss: "optional"
      concept: optional
      source: {kind: coined}
    - form: "amapun"
      class: v
      field: "Everyday speech"
      gloss: "permit"
      concept: permit
      source: {kind: coined}
    - form: "sunu"
      class: v
      field: "Everyday speech"
      gloss: "prohibit"
      concept: prohibit
      source: {kind: coined}
    - form: "kawisa"
      class: call
      field: "Everyday speech"
      gloss: "hello"
      concept: hello
      source: {kind: coined}
    - form: "nusan"
      class: call
      field: "Everyday speech"
      gloss: "goodbye"
      concept: goodbye
      source: {kind: coined}
    - form: "kupo"
      class: call
      field: "Everyday speech"
      gloss: "welcome"
      concept: expression-welcome
      source: {kind: coined}
    - form: "tinuka"
      class: call
      field: "Everyday speech"
      gloss: "please"
      concept: expression-please
      source: {kind: coined}
    - form: "wita"
      class: call
      field: "Everyday speech"
      gloss: "thank you"
      concept: expression-thank-you
      source: {kind: coined}
    - form: "havuvuk"
      class: call
      field: "Everyday speech"
      gloss: "you’re welcome"
      concept: expression-youre-welcome
      source: {kind: coined}
    - form: "lau'iha"
      class: call
      field: "Everyday speech"
      gloss: "excuse me"
      concept: expression-excuse-me
      source: {kind: coined}
    - form: "niika"
      class: call
      field: "Everyday speech"
      gloss: "sorry"
      concept: expression-sorry
      source: {kind: coined}
    - form: "pukwii"
      class: call
      field: "Everyday speech"
      gloss: "forgive me"
      concept: expression-forgive-me
      source: {kind: coined}
    - form: "kwopipek"
      class: call
      field: "Everyday speech"
      gloss: "of course"
      concept: of-course
      source: {kind: coined}
    - form: "tutak"
      class: call
      field: "Everyday speech"
      gloss: "listen"
      concept: expression-listen
      source: {kind: coined}
    - form: "haupi"
      class: call
      field: "Everyday speech"
      gloss: "look"
      concept: expression-look
      source: {kind: coined}
    - form: "vovi"
      class: call
      field: "Everyday speech"
      gloss: "wait"
      concept: expression-wait
      source: {kind: coined}
    - form: "tsihu"
      class: call
      field: "Everyday speech"
      gloss: "come here"
      concept: expression-come-here
      source: {kind: coined}
    - form: "nanpo"
      class: call
      field: "Everyday speech"
      gloss: "go away"
      concept: expression-go-away
      source: {kind: coined}
    - form: "towaakek"
      class: call
      field: "Everyday speech"
      gloss: "help!"
      concept: expression-help
      source: {kind: coined}
    - form: "watsa"
      class: call
      field: "Everyday speech"
      gloss: "stop!"
      concept: expression-stop
      source: {kind: coined}
    - form: "tetseho"
      class: call
      field: "Everyday speech"
      gloss: "what"
      concept: expression-what
      source: {kind: coined}
    - form: "yangova"
      class: call
      field: "Everyday speech"
      gloss: "pardon"
      concept: expression-pardon
      source: {kind: coined}
    - form: "kake"
      class: call
      field: "Everyday speech"
      gloss: "again"
      concept: expression-again
      source: {kind: coined}
    - form: "tikwama"
      class: call
      field: "Everyday speech"
      gloss: "I understand"
      concept: expression-i-understand
      source: {kind: coined}
    - form: "saso"
      class: call
      field: "Everyday speech"
      gloss: "I do not understand"
      concept: expression-i-do-not-understand
      source: {kind: coined}
    - form: "novi"
      class: call
      field: "Everyday speech"
      gloss: "what do you mean"
      concept: expression-what-do-you-mean
      source: {kind: coined}
    - form: "ho'o"
      class: call
      field: "Everyday speech"
      gloss: "how do you say…"
      concept: expression-how-do-you-say
      source: {kind: coined}
    - form: "tati"
      class: call
      field: "Everyday speech"
      gloss: "what is this called"
      concept: expression-what-is-this-called
      source: {kind: coined}
    - form: "lokangpi"
      class: call
      field: "Everyday speech"
      gloss: "really? (conversational surprise or request for confirmation)"
      concept: expression-really
      source: {kind: coined}
    - form: "vapok"
      class: call
      field: "Everyday speech"
      gloss: "not at all (conversational response)"
      concept: expression-not-at-all
      source: {kind: coined}
    - form: "wamo"
      class: n
      field: "Everyday speech"
      gloss: "thing"
      concept: thing
      source: {kind: coined}
    - form: "natsii"
      class: n
      field: "Everyday speech"
      gloss: "being"
      concept: being
      source: {kind: coined}
    - form: "newa"
      class: n
      field: "Everyday speech"
      gloss: "origin"
      concept: origin
      source: {kind: coined}
    - form: "vomosemin"
      class: n
      field: "Everyday speech"
      gloss: "completion"
      concept: completion
      source: {kind: coined}
    - form: "tapi"
      class: n
      field: "Everyday speech"
      gloss: "transformation"
      concept: transformation
      source: {kind: coined}
    - form: "kasuta"
      class: n
      field: "Everyday speech"
      gloss: "part"
      concept: part
      source: {kind: coined}
    - form: "tseku"
      class: n
      field: "Everyday speech"
      gloss: "cause"
      concept: cause
      source: {kind: coined}
    - form: "pihinuk"
      class: n
      field: "Everyday speech"
      gloss: "effect"
      concept: effect
      source: {kind: coined}
    - form: "muvin"
      class: n
      field: "Everyday speech"
      gloss: "reason"
      concept: reason
      source: {kind: coined}
    - form: "heiwati"
      class: n
      field: "Everyday speech"
      gloss: "purpose"
      concept: purpose
      source: {kind: coined}
    - form: "maivutsa"
      class: n
      field: "Everyday speech"
      gloss: "kind"
      concept: kind
      source: {kind: coined}
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: ["{given}", "{given} of the {clan}"]
    given:
      female:
        - "tseyahesi"
        - "hepuluma"
        - "omalohesi"
        - "yalutseya"
        - "lumasana"
        - "sumihesi"
        - "muvasana"
        - "teyuhesi"
      male:
        - "lumawesa"
        - "teyuwesa"
        - "waimahalu"
        - "omalohalu"
        - "huvowesa"
        - "kowahesi"
        - "ponuwesa"
        - "kenuvawesa"
    clan: ["omalomi", "tseyami", "lumami", "waimami", "matsaumi", "hesimi"]
  sounds:
    edges:
      - {edge: openCluster, sounds: [kw]}
      - {edge: closeConsonant, sounds: [n, ng, t, k, m]}
      - {edge: vowelPair, sounds: [ai, au, ei, oi]}
    clusters: {max: 3}
    stress: {two: first, longer: penultimate, mark: acute}
    syllables: {vowelPairs: [aa, ii, uu, ai, au, ei, oi]}
  scope:
    cultures: [teyumiclt]
    parents: [teyumirgn]
    addresses:
      - affiliation-teyumi
      - lore-teyumiclt
      - skill-teyumilng
      - place-teyumirgn
      - place-kwatuhosa
  tongues:
    - {tag: teyumi, meaning: a Teyumi name, language: skill-teyumilng}
    - {tag: translation, meaning: a name given in the language of these pages}
    - {tag: exonym:<tongue>, meaning: "a name another people gives, in the tongue named"}
  register:
    - {name: teyumi, tongue: teyumi, built: [teyu, -mi]}
    - {name: Turquoise People, tongue: translation}
    - {name: Ishtem Tsul, tongue: exonym:kiichek}
    - {name: Teyumi Language, tongue: translation}
    - {name: Teyumi Region, tongue: translation}
    - {name: kwatuhosa, tongue: teyumi, built: [kwatu, hosa]}
    - {name: South House, tongue: translation}
    - {name: hosa oyala, tongue: teyumi, built: [hosa, oyala]}
    - {name: Canyon of Houses, tongue: translation}
    - {name: Old Houses, tongue: translation}
    - {name: Year of Shut Doors, tongue: translation}
    - {name: Far Rising, tongue: translation}
    - {name: tseyahesi, tongue: teyumi, built: [tseya, hesi]}
    - {name: hepuluma, tongue: teyumi, built: [hepu, luma]}
    - {name: omalohesi, tongue: teyumi, built: [omalo, hesi]}
    - {name: yalutseya, tongue: teyumi, built: [yalu, tseya]}
    - {name: lumasana, tongue: teyumi, built: [luma, sana]}
    - {name: sumihesi, tongue: teyumi, built: [sumi, hesi]}
    - {name: muvasana, tongue: teyumi, built: [muva, sana]}
    - {name: teyuhesi, tongue: teyumi, built: [teyu, hesi]}
    - {name: lumawesa, tongue: teyumi, built: [luma, wesa]}
    - {name: teyuwesa, tongue: teyumi, built: [teyu, wesa]}
    - {name: waimahalu, tongue: teyumi, built: [waima, halu]}
    - {name: omalohalu, tongue: teyumi, built: [omalo, halu]}
    - {name: huvowesa, tongue: teyumi, built: [huvo, wesa]}
    - {name: kowahesi, tongue: teyumi, built: [kowa, hesi]}
    - {name: ponuwesa, tongue: teyumi, built: [ponu, wesa]}
    - {name: kenuvawesa, tongue: teyumi, built: [kenuva, wesa]}
    - {name: omalomi, tongue: teyumi, built: [omalo, -mi]}
    - {name: tseyami, tongue: teyumi, built: [tseya, -mi]}
    - {name: lumami, tongue: teyumi, built: [luma, -mi]}
    - {name: waimami, tongue: teyumi, built: [waima, -mi]}
    - {name: matsaumi, tongue: teyumi, built: [matsau, -mi]}
    - {name: hesimi, tongue: teyumi, built: [hesi, -mi]}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Rim}}

# terran_analog: "Hopi, of the Uto-Aztecan family: its syllable structure (open syllables, long vowels, a glottal stop between vowels), its weighting toward words of two and three syllables, and its leading sounds p, t, k, kw, m, n, l, s, h, w, y and v. Its long and falling vowels are reduced to the doubled vowels of the spelling guide, its front rounded vowel and uvular stop are left out, and none of its words is taken."
---

The Teyumi Language is the tongue of the [[affiliation-teyumi|Teyumi]], the Turquoise People of the desert's northern rim. Fluency measures the range of what a speaker can say in it, from a southern trader's few dozen words of price and water to the speech of someone raised in a great house and taught the songs of a chamber. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Every town of the Turquoise People speaks the Teyumi Language, and no two speak it quite alike. The canyon towns around [Hosa Oyala]{.name data-type="place/region"}, the Canyon of Houses, keep the long vowels long and the catch clear. The canal towns of the southern lowlands clip the long vowels short and run their words together, and a canyon elder can tell a lowlander by the third word. Neither form is the correct one, and the songs of the chambers are sung the same way in both.

The tongue is related to nothing in the south. A southern trader who has learned [[skill-kiichek|Ki'i'chek]] from childhood hears nothing he knows in it, and the Turquoise People take some care that he learns little more. The traders who come out of the desert at [[place-kwatuhosa|Kwatuhosa]] are taught the words for water, corn, price, rest and the road, and the Keeper of the South Road does the rest of the talking himself.

Nobody writes it. The Turquoise People keep their law, their songs and the count of their years in memory, and the marks they peck into the cliffs are signs, never words.

## How the Teyumi Language sounds

The Teyumi Language is open and soft, and it lingers on its vowels. A Turquoise speaker sounds unhurried to a southern ear, and the long vowels are the reason: _muva_ is water and _taavu_ to live, and the held _aa_ of the second is half its sound.

**The vowels.** _a_, _i_, _o_ and _u_ lead, with _e_ well behind them. The long vowels _aa_, _ii_ and _uu_ are frequent, and _ai_, _au_, _oi_ and _ei_ run as single sounds.

**The consonants.** _p_, _t_, _k_, _m_, _n_, _l_, _s_, _h_, _w_, _y_ and _v_, with _kw_ and _ts_ at the start of a syllable and _ng_ inside a word or at its end.

**The catch.** Between two vowels a word may break with a catch in the throat, written `'`: _hi'u_, to end. A word holds at most one catch, and most words hold none.

**Shapes and endings.** Most words have two syllables, many three, and few more; a frequent word is short. Nearly every syllable closes on its vowel. A word ends on a vowel, most often _a_, _i_, _o_ or _u_, or on _n_, _ng_, _t_ or _k_; a plural ends on _m_.

**What the Teyumi Language leaves out.** It has no _b_, _d_, _g_, _f_, _r_, _z_ or _j_, none of the rasping _kh_, _gh_ or _q_ of the mountain tongues, no _sh_, _ch_ or _th_, and none of the ejective pops of Ki'i'chek. No word opens on two consonants except _kw_ and _ts_, and three never stand together.

## Phonology

### Consonant System

**Stops:** p, t, k, kw

**Affricate:** ts

**Fricatives:** s, h, v

**Nasals:** m, n, ng

**Liquid and glides:** l, w, y

**The catch:** a stop in the throat between two vowels, written `'`

### Vowel System

**Vowels:** a, e, i, o, u

**Long vowels:** aa, ii, uu, each held a little longer than the short vowel; the short vowel is understood

**Vowel pairs:** ai, au, ei, oi, each one syllable

### Stress

A word of two syllables is stressed on the first, and a longer word on the second-to-last, by the rule of [[doc-prnncthlrn|Pronouncing Thalorna]]: _waima_ is WAI-ma, _hosamota_ is ho-sa-MO-ta. No word of the dictionary needs an accent.

## Grammar Notes

### Sentence Structure

The verb comes last. The one who acts comes first, then whatever is acted on, then the verb: _ne ho tauvo_, I see you. A word of time or place comes before the verb, and _ota_, not, stands immediately before the word it denies: _luma ota hakwe_, the rain does not come.

### Verbs

A verb does not change. _Tauvo_ is to see, and _ne tauvo_, _ho tauvo_ and _yayu tauvo_ are I see, you see and they see. Whether a thing happened, happens or will happen is said with a word of time when it matters, and left to the listener when it does not.

### Nouns and Possession

A noun takes _-m_ for more than one, after its final vowel, or _-im_ after a consonant: _hosa_, a great house, _hosam_, great houses. A speaker uses the plural mostly for people and living things, and counts a heap of corn or a row of rooms with a number. The owner stands before what is owned, with nothing between them: _ne wala_ is my house, and _hosa mehu_ the storeroom of the great house.

### Pronouns

_Ne_ is I and _neyu_ we; _ho_ is you, whether one or many; _ya_ is he, she or it, and _yayu_ they. There is no separate word for a man or a woman spoken of, and a listener who needs to know asks.

### Questions

A question opens with _ka_ or with one of the question words built on it: _kayo_ who, _kaha_ what, _kapa_ where, _kaina_ when, _kasu_ why. _Ka ho muva hila_ is "do you drink water?" The roman spelling marks the question with `?`, and the speaker marks it with the opening word.

### Building Words

Four endings make most of the built words. _-ni_ makes a noun of an act or a quality: _tauvo_, to see, gives _tauvoni_, a sight, and _pesa_, dry, gives _pesani_, drought. _-yo_ makes a person of a thing: _pelu_, a sunken chamber, gives _peluyo_, an initiate. _-mi_ makes a people or a clan: _teyu_, turquoise, gives _teyumi_. _-sa_ makes an ordinal of a number. Two nouns set side by side make a compound, the first saying which: _pelu_ and _mota_, head, give _pelumota_, a chamber elder.

## Everyday speech

_Kawisa_ is the greeting at a door, and _nusan_ the word at parting. _Wita_ thanks. _Mai_ is yes and _umu_ no, and a refusal is softened by saying nothing for a while before it.

_Ne ho tauvo_ means "I see you", and it is what a host says to a guest who has come a long way: the guest is seen, and so is safe. _Ka ho muva hila_ asks whether a guest will drink water, and it is asked before anything else. _Luma hakwe_, "the rain comes", is said when the first drops fall, and nothing else is said until the shower ends.

_Ne wala_ is my house, and a man who says it means his wife's or his mother's, because the house belongs to the women. _Ema_ is mother and _yema_ father, _atai_ a child, _yaa_ a grandmother and _lotsa_ a grandfather. _Lowai_ is a clan, and every Turquoise speaker can name theirs.

Numbers count by tens: _heta_, _tolai_, _vuna_, _keli_, _teni_, one to five; _tupa_ is ten, _tolai tupa_ twenty, _tauva_ a hundred. A number takes _-sa_ to give its place: _hetasa_, first, _kelisa_, fourth.

## Script and Literacy

The Teyumi Language has no script. The Turquoise People count the days against marks pecked on the walls of the great houses and the cliffs, where a shaft of sunrise strikes a spiral on the morning of a festival, and they peck clan signs beside the roads and the springs. These marks name a clan or a day. None of them writes a word.

The southern traders carry writing with them, and the Turquoise People have seen it for generations. No Teyumi has learned it, and the Keepers of the South Road prefer it that way: what passes through Kwatuhosa is counted in the Keeper's head, and nobody in the south holds a record of it.

## Naming Traditions

A child is named by the women of its father's clan on the morning it is first shown to the sun, and the name is two words of the dictionary set together, most often a thing of the sky or the field and a thing it does: _Lumawesa_, rain walking, _Tseyahesi_, corn star. The name says nothing of the child and something of the clan that gave it. The clan itself comes from the mother, and is named with _-mi_ on the thing it keeps: the _Omalomi_ are the Cloud clan and the _Matsaumi_ the Bear clan.

A person who is initiated into a chamber takes a second name there, used only inside the chamber and never told to an outsider. The first name is the one the town uses for life.

### Name Lists

**Women's names:** Tseyahesi, Hepuluma, Omalohesi, Yalutseya, Lumasana, Sumihesi, Muvasana, Teyuhesi

**Men's names:** Lumawesa, Teyuwesa, Waimahalu, Omalohalu, Huvowesa, Kowahesi, Ponuwesa, Kenuvawesa

**Clans:** Omalomi (Cloud), Tseyami (Corn), Lumami (Rain), Waimami (Sun), Matsaumi (Bear), Hesimi (Star)

## Teyumi Lexicon {#lexicon}

A great house is _hosa_, its storeroom _mehu_, and the round chamber sunk into its plaza _pelu_. The rain is _luma_, a cloud _omalo_, and turquoise, rain made stone, _teyu_. This page is the word-hoard of the Teyumi: its words, the endings that build new ones, and the register of every name the setting gives the Turquoise People, their towns and their offices.

The Teyumi Language is unwritten, and the spellings on this page are the setting's one roman transcription of it. The tongue has no capital letters, so a word or a name stands here in lowercase; the prose of these pages capitalizes a name as it does any other.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited: a noun in its plain form, a verb in the form it never leaves. A word made of smaller parts names them, joined by `+`, and the form is exactly those parts set side by side, an ending added whole. A phrase of two words, such as _ota kuhuk_, invisible, is cited as it is said.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-teyumilng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide, Pronouncing Thalorna.

### Word edges

A word opens on a vowel, a single consonant, _ts_ or the pair below, and closes on a vowel or on one of the consonants below.

```sql
SELECT CASE edge WHEN 'openCluster' THEN 'Pairs that may open a word' WHEN 'closeConsonant' THEN 'Consonants that close a word' WHEN 'vowelPair' THEN 'Vowels that run as one' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-teyumilng' ORDER BY position
```

### Clusters

Consonants stand apart, a vowel between each, in most words. Two meet where a syllable closes on _n_, _m_ or _s_ before the next; _ng_ is one sound, so _lungva_ holds two.

```sql
SELECT 'Most consonant letters together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-teyumilng'
```

## Building words {#building-words}

Two moves make every built word on this page. **Words set side by side** make a compound, the first marking the second: _hosa_ and _mota_ give _hosamota_, the head of a great house. **An ending on a word** makes a noun, a person, a people or an ordinal of it.

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", attaches AS "Stem", gloss AS "Makes", coalesce(nullif(array_to_string(list_transform(examples, e -> regexp_replace(e, '^(\S+) > ([^\s,;]+)', '_\1_ > _\2_')), ', '), ''), '—') AS "Example"
FROM affixes
WHERE language = 'thalorna-note-skill-teyumilng'
ORDER BY position
```

## Words {#words}

### Rain, sky and stone

The rain words are the oldest of the tongue and the ones a child learns first. _Pesa_, dry, is a word a Turquoise speaker uses carefully, and _pesani_, the dry years, is said low.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-teyumilng' AND field = 'Rain, sky and stone'
ORDER BY position
```

### Field and canal

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-teyumilng' AND field = 'Field and canal'
ORDER BY position
```

### The house and the road

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-teyumilng' AND field = 'The house and the road'
ORDER BY position
```

### Chamber and rite

Every office of a town is a word of this field or of the last: a head (_mota_) of something, or one who keeps it (_-yo_).

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-teyumilng' AND field = 'Chamber and rite'
ORDER BY position
```

### Kin and town

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-teyumilng' AND field = 'Kin and town'
ORDER BY position
```

### Body and feeling

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-teyumilng' AND field = 'Body and feeling'
ORDER BY position
```

### Everyday speech

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-teyumilng' AND field = 'Everyday speech'
ORDER BY position
```

## Making names {#making-names}

**A person** carries two words set together, given by the father's clan: _lumawesa_ is _luma_, rain, and _wesa_, to walk. **A clan** is a word of the sky or the field with _-mi_: _omalomi_, the Cloud clan. **A place** names what it is or where it stands: Kwatuhosa is _kwatu_, the south, and _hosa_, a great house, the South House at the desert's edge, and _hosa oyala_ is the Canyon of Houses.

**The people** are _teyumi_, the people of the turquoise, and the name these pages give them is the Turquoise People. The south calls them _Ishtem Tsul_, the Bear People, after the bears painted on their chamber walls.

## Scope {#scope}

The register below holds every name of every note of the Turquoise People. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'cultures' THEN 'culture' WHEN 'parents' THEN 'parent' WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-teyumilng'
GROUP BY kind ORDER BY CASE kind WHEN 'cultures' THEN 0 WHEN 'parents' THEN 1 WHEN 'addresses' THEN 2 END
```

## Attested names {#attested-names}

Every name the setting gives the Turquoise People, their clans, their towns and their offices, with the note where it is met. A name built from this page shows how; a name in the reader's tongue, or in another people's, is tagged as such.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'teyumi' THEN ', [[' || tongue_language || '|Teyumi]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-teyumilng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-teyumilng' ORDER BY position
```
