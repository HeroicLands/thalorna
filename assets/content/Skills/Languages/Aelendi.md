---
shortcode: aelendlng
name: {full: Áelendi Language}
type: skill
subType: language
description: "The old Pelwar tongue of the Áelendan highlanders, unchanged in its mountain valleys for hundreds of years and heavily marked by Sinale."
tags: []
data:
  roman: "adeghiklmnoprstuáéíóúë-"
  core: true
  abbreviation: Ael.
  classModifiers: [m, f, "n"]
  fields:
    - name: "The Pact, the oath and the keeping"
      holds: "The Kindred Pact and the words that bind under it: oaths, vows, curses, forfeits, the council's judgment, and the keeping of a place."
    - name: "Kin, the clan and the name"
      holds: "Kin and the clan, brothers and sisters, children, inheritance, the clan name and the earned name, and the genealogies the Tradition Keepers recite."
    - name: "The lodge, the fire and the guest"
      holds: "The lodge and its kept fire, the order of seats, the giver of a feast, the guest and what is owed him, bread, friendship and accord."
    - name: "Herds, pasture and the high grass"
      holds: "Sheep and horses, the high pasture and the walled field, hay, salt, and the summer move up the mountain."
    - name: "Mountain, snow and stone"
      holds: "The Spine and its valleys, snow, winter, tarns and torrents, water, and the stone the Áelendan cut and raise."
    - name: "The body, life and death"
      holds: "The senses, the passions and the loves, the parts of the body, food, drink, sleep and breath, blood, wounds and healers, living and falling, the cairn and the field of cairns."
    - name: "Light, sky and the turning year"
      holds: "The sun, the moon and the stars, the day and its parts, the months, the seasons, feasts and ages, and the reckoning from the crossing."
    - name: "Water and the wood's weather"
      holds: "Rivers, springs and lakes below the snow line, rain, frost, fog, wind and cloud."
    - name: Trees and the living wood
      holds: "The trees by kind, the grove and the stand, leaf, seed, moss and berry, and the wood as a living thing."
    - name: "The fae, the thin places and the wards"
      holds: "The veil and the places it wears thin, spirits and the fae, dreams and visions, wards and the art."
    - name: Rite and the dead
      holds: "The rites of the Old Way, death and the dead, grief and laments, binding, and the burial ground."
    - name: "Song, speech and the letters"
      holds: "Song and singer, speech and recitation, memory and lore, words and staves, the rune-row and the Veldikko."
    - name: The Wardens and the border
      holds: "Fighting and its gear, the war band and its leader, the hill fort and the held pass, war and peace."
    - name: Craft and the metals
      holds: "The forge and the hammer, the metals, glass, and the craft kept closed."
    - name: "Doing, going and being"
      holds: "The verbs of ordinary speech, cited by the infinitive."
    - name: Numbers and grammar words
      holds: "The numbers, the pronouns, the article, the pointing words and the particles."
    - name: "Colour and the look of things"
      holds: "The colours: black, white, red, green, yellow, blue, grey and brown."
  affixes:
    - form: "-and"
      gloss: "one who does it, or keeps it"
      attaches: "added"
      examples: ["sálpurn- > sálpurnand"]
    - form: "-alon"
      gloss: "the whole of it: a body, a duty, a herd"
      attaches: "added"
      examples: ["drun > drúnalon"]
    - form: "-andi"
      gloss: "those of: a clan name, after a stem whose last vowel is _a_"
      attaches: "added"
      examples: ["dhargan > dhárgandi"]
    - form: "-endi"
      gloss: "those of, after _e_"
      attaches: "added"
      examples: ["khalden > kháldendi"]
    - {form: "-indi", gloss: "those of, after _i_", attaches: "added", examples: ["kir > kírindi"]}
    - form: "-ondi"
      gloss: "those of, after _o_"
      attaches: "added"
      examples: ["ghor > ghorondi"]
    - {form: "-undi", gloss: "those of, after _u_", attaches: "added", examples: ["dul > dulundi"]}
    - {form: "-ndi", gloss: "those of, after a vowel", attaches: "added"}
    - {form: "-di", gloss: "those of, after _n_", attaches: "added", examples: ["dhan > dhandi"]}
    - {form: "an-", gloss: "not; un-", attaches: "added", examples: ["írthathen > ánirthathen"]}
  words:
    - form: ghélathen
      class: v
      field: "The Pact, the oath and the keeping"
      gloss: "to keep; to hold a place as the Pact holds it, and answer for it"
      source: {kind: inherited}
    - form: gheland
      class: n m
      field: "The Pact, the oath and the keeping"
      gloss: "a keeper; a Warden; one who holds a sacred site for the kin"
      built: ["ghel-", "-and"]
    - form: ghélalon
      class: n n
      field: "The Pact, the oath and the keeping"
      gloss: "the keeping; the whole duty of the Wardens, from the tree line up"
      built: ["ghel-", "-alon"]
    - form: théndathen
      class: v
      field: "The Pact, the oath and the keeping"
      gloss: "to stand before; to put oneself between a thing and harm"
      source: {kind: inherited}
      concept: defend
    - form: dhárela
      class: n f
      field: "The Pact, the oath and the keeping"
      gloss: "a compact; a binding between two kins, sworn before the valley"
      source: {kind: inherited}
    - form: nolgra
      class: n f
      field: "The Pact, the oath and the keeping"
      gloss: "a vow; a binding laid on oneself alone, outside the Pact"
      source: {kind: inherited}
    - form: gurthon
      class: n n
      field: "The Pact, the oath and the keeping"
      gloss: "a curse; the words that put a kinsman outside the Pact"
      source: {kind: inherited}
    - form: khelmarth
      class: adj
      field: "The Pact, the oath and the keeping"
      gloss: "accursed; put outside the Pact and the kin's protection"
      source: {kind: inherited}
    - form: thengra
      class: n f
      field: "The Pact, the oath and the keeping"
      gloss: "a forfeit; what a kin pays with one of its own who broke his word"
      source: {kind: inherited}
    - form: ghorna
      class: n f
      field: "The Pact, the oath and the keeping"
      gloss: "guilt; the weight a broken oath leaves on a name"
      source: {kind: inherited}
    - form: ánkenis
      class: n f
      field: "The Pact, the oath and the keeping"
      gloss: "outlawry; the sentence that walks a man past the tree line"
      source: {kind: inherited}
    - form: thargis
      class: n f
      field: "The Pact, the oath and the keeping"
      gloss: "a judgment; what the elders decide in council"
      source: {kind: inherited}
    - form: thárgalon
      class: n n
      field: "The Pact, the oath and the keeping"
      gloss: "the council of elders sitting in judgment"
      built: ["tharg-", "-alon"]
    - form: úrdalon
      class: n n
      field: "The Pact, the oath and the keeping"
      gloss: "custom; the whole of what is done because it has always been done"
      source: {kind: inherited}
      concept: [custom, tradition]
    - form: kernon
      class: n n
      field: "The Pact, the oath and the keeping"
      gloss: "a mark; the sign cut in a boundary stone"
      source: {kind: inherited}
    - form: laghis
      class: n f
      field: "The Pact, the oath and the keeping"
      gloss: "a grant of grazing; ground given to a kin under the Pact"
      source: {kind: inherited}
    - form: írthathen
      class: v
      field: "The Pact, the oath and the keeping"
      gloss: "to hallow; to set a place under the Pact"
      source: {kind: inherited}
    - form: irthon
      class: n n
      field: "The Pact, the oath and the keeping"
      gloss: "a hallowing; the rite that sets a place under the Pact"
      source: {kind: inherited}
    - form: ánirthathen
      class: v
      field: "The Pact, the oath and the keeping"
      gloss: "to unhallow; to strike a place out of the Pact, which is done once in a lifetime if at all"
      built: ["an-", írthathen]
    - form: ruthis
      class: n f
      field: "The Pact, the oath and the keeping"
      gloss: "the bound of a hallowed place, which no blade crosses drawn"
      source: {kind: inherited}
    - form: mirgon
      class: n n
      field: "The Pact, the oath and the keeping"
      gloss: "a boundary shrine; the cairn where a valley's ground begins"
      source: {kind: inherited}
    - form: ughra
      class: n f
      field: "The Pact, the oath and the keeping"
      gloss: "an offering stone; the flat rock where the first of a harvest is left"
      source: {kind: inherited}
    - form: ilda
      class: n f
      field: "The Pact, the oath and the keeping"
      gloss: "a prayer; anything said to the land aloud"
      source: {kind: inherited}
    - form: odhethand
      class: n m
      field: "The Pact, the oath and the keeping"
      gloss: "a reader of signs; one who reads the weather and the birds for the council"
      source: {kind: inherited}
    - form: molthon
      class: n n
      field: "The Pact, the oath and the keeping"
      gloss: "a debt of honor; a thing done that must be repaid in kind"
      source: {kind: inherited}
    - form: mólthathen
      class: v
      field: "The Pact, the oath and the keeping"
      gloss: "to owe; to stand under a debt of honor"
      source: {kind: inherited}
    - form: kurthand
      class: n m
      field: "The Pact, the oath and the keeping"
      gloss: "an elder; one who sits in the council of a valley"
      source: {kind: inherited}
    - form: mendis
      class: n f
      field: "The Pact, the oath and the keeping"
      gloss: "the council of a valley; the elders sitting together"
      source: {kind: inherited}
    - form: méndalon
      class: n n
      field: "The Pact, the oath and the keeping"
      gloss: "a council; any gathering that sits and decides"
      built: ["mend-", "-alon"]
    - form: mendra
      class: n f
      field: "The Pact, the oath and the keeping"
      gloss: "a voice in council; one elder's word in a decision"
      source: {kind: inherited}
    - form: ághrathen
      class: v
      field: "The Pact, the oath and the keeping"
      gloss: "to bring a grievance before the elders"
      source: {kind: inherited}
    - form: losand
      class: n m
      field: "The Pact, the oath and the keeping"
      gloss: "a speaker for another; one who carries a kinsman's grievance to the elders"
      source: {kind: inherited}
    - form: kernand
      class: n m
      field: "The Pact, the oath and the keeping"
      gloss: "a keeper of the boundary marks"
      built: ["kern-", "-and"]
    - form: dharthon
      class: n n
      field: "The Pact, the oath and the keeping"
      gloss: "the Warden's oath; the oath that makes a Warden"
      source: {kind: inherited}
    - form: dharthand
      class: n m
      field: "The Pact, the oath and the keeping"
      gloss: "a sworn Warden"
      built: ["dharth-", "-and"]
    - form: sorethendi
      class: n m
      field: "Kin, the clan and the name"
      gloss: "kin; those of one blood"
      source: {kind: inherited}
      concept: [family, kin]
    - form: ondren
      class: n m
      field: "Kin, the clan and the name"
      gloss: "a brother"
      concept: brother
      source: {kind: inherited}
    - form: ondra
      class: n f
      field: "Kin, the clan and the name"
      gloss: "a sister"
      concept: sister
      source: {kind: inherited}
    - form: lughon
      class: n n
      field: "Kin, the clan and the name"
      gloss: "a child; one not yet given a name"
      source: {kind: inherited}
    - form: sorkhand
      class: n m
      field: "Kin, the clan and the name"
      gloss: "the head of a household; the one who speaks for a hearth in council"
      source: {kind: inherited}
    - form: úrkenon
      class: n n
      field: "Kin, the clan and the name"
      gloss: "an old line; a family the genealogies carry back to the crossing"
      source: {kind: inherited}
    - form: arlendi
      class: n n
      field: "Kin, the clan and the name"
      gloss: "a clan name; the name of those of a founder"
      source: {kind: inherited}
    - form: sílderon
      class: n n
      field: "Kin, the clan and the name"
      gloss: "an earned name; the name sung at the gathering after a deed"
      source: {kind: inherited}
    - form: dhurnon
      class: n n
      field: "Kin, the clan and the name"
      gloss: "an inheritance; what passes to the clan at a death"
      source: {kind: inherited}
    - form: dhuskis
      class: n f
      field: "Kin, the clan and the name"
      gloss: "a release; the sending of a fosterling home to its own clan"
      source: {kind: inherited}
    - form: uron
      class: n n
      field: "Kin, the clan and the name"
      gloss: "an elder; one old enough to have heard the genealogies from the last Keeper"
      source: {kind: inherited}
      concept: elder
    - form: telgon
      class: n n
      field: "Kin, the clan and the name"
      gloss: "a possession; what a man owns outside the clan's common"
      source: {kind: inherited}
      concept: property
    - form: mírdalon
      class: n n
      field: "Kin, the clan and the name"
      gloss: "a share; a household's right in the common grazing"
      source: {kind: inherited}
    - form: dhónkathen
      class: v
      field: "Kin, the clan and the name"
      gloss: "to go to the ancestors; to die, as the Keepers say it"
      concept: die
      source: {kind: inherited}
    - form: íthanersa
      class: n f
      field: "Kin, the clan and the name"
      gloss: "fosterage; the raising of a child of another clan, or of the Sinale"
      source: {kind: borrowed, language: skill-sinalelng, form: ittanersa}
    - form: érnapisa
      class: adj
      field: "Kin, the clan and the name"
      gloss: "of one kin; said of two clans who share a founder"
      source: {kind: borrowed, language: skill-sinalelng, form: ernattisa}
    - form: kárathon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "the kept fire; the fire of a lodge, banked at night and never let die"
      source: {kind: inherited}
    - form: máldathen
      class: v
      field: "The lodge, the fire and the guest"
      gloss: "to seat; to give a guest his place at the fire"
      source: {kind: inherited}
    - form: máldalon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "the order of the seats; worked out again at every gathering"
      built: ["mald-", "-alon"]
    - form: laghand
      class: n m
      field: "The lodge, the fire and the guest"
      gloss: "a giver; the one who sets a feast and sits at its head"
      built: ["lagh-", "-and"]
    - form: lághathen
      class: v
      field: "The lodge, the fire and the guest"
      gloss: "to give; to set food before a guest"
      concept: give
      source: {kind: inherited}
    - form: khálalon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "guest-right; what the hall owes the one under its roof"
      source: {kind: inherited}
    - form: kurnis
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "a feast; a gathering with food, at which the genealogies are sung"
      source: {kind: inherited}
    - form: tirna
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "a summer steading; the huts on the high pasture"
      source: {kind: inherited}
    - form: ánmaldar
      class: adj
      field: "The lodge, the fire and the guest"
      gloss: "unseated; of a guest whose place at the fire nobody has settled"
      built: ["an-", "mald-", "-ar"]
    - form: lághalon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "the giving of a feast"
      built: ["lagh-", "-alon"]
    - form: súnalon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "a following; the young men who sit below a leader at the fire"
      source: {kind: inherited}
    - form: trénkira
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "the greeting at a lodge door at first light"
      source: {kind: inherited}
    - form: ghalnis
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "the gathering ground before a lodge"
      source: {kind: inherited}
    - form: khenthra
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "a lamp"
      concept: lamp
      source: {kind: inherited}
    - form: korthon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "mead; the old word for wine, kept for the drink the highlands make"
      source: {kind: inherited}
    - form: éllepirsa
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "guest-right, as the Sinale give it; the welcome between the kin and the wood"
      source: {kind: borrowed, language: skill-sinalelng, form: ellevirsa}
    - form: tárnepi
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "bread; the loaf of the offering"
      source: {kind: borrowed, language: skill-sinalelng, form: tarnevi}
    - form: tárnepinu
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "a loaf"
      source: {kind: borrowed, language: skill-sinalelng, form: tarnevinu}
    - form: ánsepi
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "a friend; one outside the kin who is owed as kin"
      source: {kind: borrowed, language: skill-sinalelng, form: ansekki}
      concept: friend
    - form: ánsepirsa
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "friendship"
      concept: love-philia
      source: {kind: borrowed, language: skill-sinalelng, form: ansekkirsa}
    - form: séimara
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "accord; what a council reaches when nobody is left speaking against"
      source: {kind: borrowed, language: skill-sinalelng, form: seimaka}
    - form: náupessi
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "a usage; the way a thing is done among the Sinale, which the kin copies"
      source: {kind: borrowed, language: skill-sinalelng, form: nauvessi}
    - form: óirapa
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "a debt owed to the wood"
      source: {kind: borrowed, language: skill-sinalelng, form: oirava}
    - form: drun
      class: n m
      field: "Herds, pasture and the high grass"
      gloss: "a horse; the small hill horse of the Spine"
      source: {kind: inherited}
    - form: drunand
      class: n m
      field: "Herds, pasture and the high grass"
      gloss: "a rider; a herder on horseback"
      built: [drun, "-and"]
    - form: drúnalon
      class: n n
      field: "Herds, pasture and the high grass"
      gloss: "the horse herd of a clan"
      built: [drun, "-alon"]
    - form: omris
      class: n f
      field: "Herds, pasture and the high grass"
      gloss: "a sheep"
      source: {kind: inherited}
    - form: athra
      class: n f
      field: "Herds, pasture and the high grass"
      gloss: "the hay harvest"
      source: {kind: inherited}
    - form: mirla
      class: n f
      field: "Herds, pasture and the high grass"
      gloss: "land; the ground a clan grazes"
      source: {kind: inherited}
    - form: ilmis
      class: n f
      field: "Herds, pasture and the high grass"
      gloss: "a field; the walled ground below a lodge"
      source: {kind: inherited}
      concept: field
    - form: sulmis
      class: n m
      field: "Herds, pasture and the high grass"
      gloss: "salt; the lick set out on the high pasture"
      source: {kind: inherited}
    - form: tírnalon
      class: n n
      field: "Herds, pasture and the high grass"
      gloss: "the summer move; the going up to the high pastures with the herds"
      built: ["tirn-", "-alon"]
    - form: dhelnis
      class: n f
      field: "Herds, pasture and the high grass"
      gloss: "the spring count; the counting of a clan's herds after the winter"
      source: {kind: inherited}
    - form: dhelnand
      class: n m
      field: "Herds, pasture and the high grass"
      gloss: "the counter of the herds"
      built: ["dheln-", "-and"]
    - form: dhólgalon
      class: n n
      field: "Herds, pasture and the high grass"
      gloss: "the common store; the grain a clan holds against the winter"
      built: ["dholg-", "-alon"]
    - form: gherkand
      class: n m
      field: "Herds, pasture and the high grass"
      gloss: "the keeper of the common store"
      built: ["gherk-", "-and"]
    - form: dholga
      class: n f
      field: "Herds, pasture and the high grass"
      gloss: "a grain store"
      source: {kind: inherited}
    - form: ulmedhera
      class: n f
      field: "Herds, pasture and the high grass"
      gloss: "a leat; water led along a hillside to a field"
      source: {kind: inherited}
    - form: dorla
      class: n f
      field: "Herds, pasture and the high grass"
      gloss: "a ditch"
      source: {kind: inherited}
    - form: renthis
      class: n f
      field: "Herds, pasture and the high grass"
      gloss: "a horse race; the race at the summer gathering"
      source: {kind: inherited}
    - form: drunsa
      class: n f
      field: "Herds, pasture and the high grass"
      gloss: "a riding; a band of mounted Wardens"
      source: {kind: inherited}
    - form: nelis
      class: n f
      field: "Mountain, snow and stone"
      gloss: "snow"
      source: {kind: inherited}
      concept: snow
    - form: neldra
      class: n f
      field: "Mountain, snow and stone"
      gloss: "winter; the snow-time"
      source: {kind: inherited}
    - form: dulgis
      class: n f
      field: "Mountain, snow and stone"
      gloss: "a valley; a clan's ground between two ridges"
      source: {kind: inherited}
      concept: valley
    - form: dulna
      class: n f
      field: "Mountain, snow and stone"
      gloss: "a tarn; a lake held in a corrie"
      source: {kind: inherited}
    - form: sirthal
      class: n n
      field: "Mountain, snow and stone"
      gloss: "a torrent; a river in spate off the snowfields"
      source: {kind: inherited}
    - form: sira
      class: n f
      field: "Mountain, snow and stone"
      gloss: "water"
      concept: water
      source: {kind: inherited}
    - form: dhumeson
      class: n n
      field: "Mountain, snow and stone"
      gloss: "a rock basin; a spring caught in cut stone"
      source: {kind: inherited}
    - form: khalmon
      class: n n
      field: "Mountain, snow and stone"
      gloss: "white stone; the pale marble of the Spine"
      source: {kind: inherited}
    - form: tálkeron
      class: n n
      field: "Mountain, snow and stone"
      gloss: "a stone cut; the place a ring's stones were taken from, left open"
      source: {kind: inherited}
    - form: kerthis
      class: n f
      field: "Mountain, snow and stone"
      gloss: "a dressed stone"
      source: {kind: inherited}
    - form: talgis
      class: n f
      field: "Mountain, snow and stone"
      gloss: "a pillar of stone"
      source: {kind: inherited}
    - form: lonku
      class: n n
      field: "Mountain, snow and stone"
      gloss: "the wood below the snow line"
      source: {kind: borrowed, language: skill-sinalelng, form: lonku}
      concept: forest
    - form: ghersa
      class: n f
      field: "Mountain, snow and stone"
      gloss: "an island in a tarn"
      source: {kind: inherited}
    - form: raumel
      class: n m
      field: "Mountain, snow and stone"
      gloss: "an eagle"
      source: {kind: borrowed, language: skill-sinalelng, form: raumel}
    - form: auldi
      class: n n
      field: "Mountain, snow and stone"
      gloss: "a hill"
      source: {kind: borrowed, language: skill-sinalelng, form: auldi}
      concept: hill
    - form: áuldalon
      class: n n
      field: "Mountain, snow and stone"
      gloss: "the hill country; the whole of the hills"
      built: ["áuld-", "-alon"]
    - form: sórpanda
      class: n f
      field: "Mountain, snow and stone"
      gloss: "a mountain"
      source: {kind: borrowed, language: skill-sinalelng, form: sorkanda}
      concept: mountain
    - form: ánkenathen
      class: v
      field: "Mountain, snow and stone"
      gloss: "to stand empty; said of a lodge whose kin are gone"
      source: {kind: inherited}
    - form: rudhamis
      class: n f
      field: "The body, life and death"
      gloss: "blood"
      concept: blood
      source: {kind: inherited}
    - form: ruskon
      class: n n
      field: "The body, life and death"
      gloss: "a wound"
      source: {kind: inherited}
    - form: ruskand
      class: n m
      field: "The body, life and death"
      gloss: "a healer; one who closes wounds"
      built: ["rusk-", "-and"]
    - form: élthethen
      class: v
      field: "The body, life and death"
      gloss: "to live"
      concept: live
      source: {kind: inherited}
    - form: lúrgathen
      class: v
      field: "The body, life and death"
      gloss: "to fall"
      source: {kind: inherited}
      concept: fall
    - form: ghromon
      class: n n
      field: "The body, life and death"
      gloss: "a cairn; a grave under stones"
      source: {kind: inherited}
    - form: ghrómalon
      class: n n
      field: "The body, life and death"
      gloss: "a field of cairns at the edge of a valley"
      built: ["ghrom-", "-alon"]
    - form: khirkel
      class: n m
      field: "Light, sky and the turning year"
      gloss: "the sun"
      source: {kind: borrowed, language: skill-sinalelng, form: hirkel}
      concept: sun
    - form: sotel
      class: n m
      field: "Light, sky and the turning year"
      gloss: "the moon"
      source: {kind: borrowed, language: skill-sinalelng, form: sotel}
      concept: moon
    - form: núpanu
      class: n n
      field: "Light, sky and the turning year"
      gloss: "a star"
      source: {kind: borrowed, language: skill-sinalelng, form: nuuvanu}
      concept: star
    - form: kiron
      class: n n
      field: "Light, sky and the turning year"
      gloss: "a day"
      source: {kind: inherited}
      concept: day
    - form: óskena
      class: n f
      field: "Light, sky and the turning year"
      gloss: "a month"
      source: {kind: inherited}
      concept: month
    - form: móghalon
      class: n n
      field: "Light, sky and the turning year"
      gloss: "an age; as long back as a living Keeper remembers"
      built: [mogh, "-alon"]
    - form: ganthis
      class: n f
      field: "Light, sky and the turning year"
      gloss: "the crossing; the year the band came over the pass, from which the years are counted"
      source: {kind: inherited}
    - form: írthalon
      class: n n
      field: "Light, sky and the turning year"
      gloss: "the neuter; the gender of what lasts, which was once the gender of the hallowed"
      built: ["irth-", "-alon"]
    - form: nuparno
      class: n n
      field: "Light, sky and the turning year"
      gloss: "a cluster of stars"
      source: {kind: borrowed, language: skill-sinalelng, form: nuuvakko}
    - form: náldursa
      class: n f
      field: "Light, sky and the turning year"
      gloss: "darkness; the quality of the dark"
      source: {kind: borrowed, language: skill-sinalelng, form: naldursa}
    - form: áulira
      class: n f
      field: "Light, sky and the turning year"
      gloss: "light"
      source: {kind: borrowed, language: skill-sinalelng, form: aulira}
    - form: áuliranu
      class: n n
      field: "Light, sky and the turning year"
      gloss: "a ray of light"
      source: {kind: borrowed, language: skill-sinalelng, form: auliranu}
    - form: éllipe
      class: adj
      field: "Light, sky and the turning year"
      gloss: "bright"
      source: {kind: borrowed, language: skill-sinalelng, form: ekkyve}
      concept: bright
    - form: nupa
      class: n f
      field: "Light, sky and the turning year"
      gloss: "starlight"
      source: {kind: borrowed, language: skill-sinalelng, form: nuuva}
    - form: nupasto
      class: n n
      field: "Light, sky and the turning year"
      gloss: "a place of starlight; a high clearing where the stars are watched"
      source: {kind: borrowed, language: skill-sinalelng, form: nuuvasto}
    - form: nupasa
      class: adj
      field: "Light, sky and the turning year"
      gloss: "starlit"
      source: {kind: borrowed, language: skill-sinalelng, form: nuuvasa}
    - form: éilapa
      class: n f
      field: "Light, sky and the turning year"
      gloss: "the wide sky"
      source: {kind: borrowed, language: skill-sinalelng, form: eilava}
      concept: sky
    - form: írpalo
      class: n n
      field: "Light, sky and the turning year"
      gloss: "dawn"
      source: {kind: borrowed, language: skill-sinalelng, form: irvatto}
      concept: dawn
    - form: séiranda
      class: n f
      field: "Light, sky and the turning year"
      gloss: "noon"
      source: {kind: borrowed, language: skill-sinalelng, form: seikanda}
      concept: noon
    - form: ólpessa
      class: n f
      field: "Light, sky and the turning year"
      gloss: "the long dusk"
      source: {kind: borrowed, language: skill-sinalelng, form: oltessa}
      concept: dusk
    - form: ólparne
      class: n n
      field: "Light, sky and the turning year"
      gloss: "evening, as the wood reckons it"
      source: {kind: borrowed, language: skill-sinalelng, form: oltarne}
      concept: evening
    - form: úlpessen
      class: n m
      field: "Light, sky and the turning year"
      gloss: "the deep of night"
      source: {kind: borrowed, language: skill-sinalelng, form: ulkessen}
    - form: olthe
      class: n n
      field: "Light, sky and the turning year"
      gloss: "a cast shadow"
      source: {kind: borrowed, language: skill-sinalelng, form: olte}
    - form: ilpe
      class: n n
      field: "Light, sky and the turning year"
      gloss: "the high air"
      source: {kind: borrowed, language: skill-sinalelng, form: ylpe}
    - form: írpalosto
      class: n n
      field: "Light, sky and the turning year"
      gloss: "the east, where the dawn is"
      source: {kind: borrowed, language: skill-sinalelng, form: irvattosto}
      concept: east
    - form: ólpessasto
      class: n n
      field: "Light, sky and the turning year"
      gloss: "the west, where the dusk is"
      source: {kind: borrowed, language: skill-sinalelng, form: oltessasto}
      concept: west
    - form: áuremel
      class: n m
      field: "Light, sky and the turning year"
      gloss: "summer"
      source: {kind: borrowed, language: skill-sinalelng, form: autemel}
    - form: pérranel
      class: n m
      field: "Light, sky and the turning year"
      gloss: "autumn"
      source: {kind: borrowed, language: skill-sinalelng, form: vekkanel}
    - form: tálparo
      class: n n
      field: "Light, sky and the turning year"
      gloss: "a long age; one the Sinale count"
      source: {kind: borrowed, language: skill-sinalelng, form: talkaro}
    - form: lánthapo
      class: n n
      field: "Water and the wood's weather"
      gloss: "the slow river"
      source: {kind: borrowed, language: skill-sinalelng, form: lantavo}
    - form: lánthepi
      class: n n
      field: "Water and the wood's weather"
      gloss: "a river below the tree line"
      source: {kind: borrowed, language: skill-sinalelng, form: lanteppi}
    - form: lánthepilu
      class: n n
      field: "Water and the wood's weather"
      gloss: "a stream"
      source: {kind: borrowed, language: skill-sinalelng, form: lanteppikki}
      concept: stream
    - form: kélpasi
      class: n n
      field: "Water and the wood's weather"
      gloss: "the cold spring"
      source: {kind: borrowed, language: skill-sinalelng, form: kelkasi}
    - form: gáinessa
      class: n f
      field: "Water and the wood's weather"
      gloss: "a lake in the wood"
      source: {kind: borrowed, language: skill-sinalelng, form: vainessa}
    - form: sálenda
      class: n f
      field: "Water and the wood's weather"
      gloss: "a waterfall"
      source: {kind: borrowed, language: skill-sinalelng, form: sattenda}
    - form: líseri
      class: n n
      field: "Water and the wood's weather"
      gloss: "still water"
      source: {kind: borrowed, language: skill-sinalelng, form: liseri}
    - form: lirpi
      class: n n
      field: "Water and the wood's weather"
      gloss: "a shore"
      source: {kind: borrowed, language: skill-sinalelng, form: lirty}
      concept: shore
    - form: sólmeri
      class: n n
      field: "Water and the wood's weather"
      gloss: "the smell of rain coming"
      source: {kind: borrowed, language: skill-sinalelng, form: solmeri}
    - form: ilpi
      class: n n
      field: "Water and the wood's weather"
      gloss: "thin ice"
      source: {kind: borrowed, language: skill-sinalelng, form: ilvy}
    - form: nélipe
      class: n n
      field: "Water and the wood's weather"
      gloss: "the first frost"
      source: {kind: borrowed, language: skill-sinalelng, form: nelyve}
    - form: gilpai
      class: n n
      field: "Water and the wood's weather"
      gloss: "a wind in the wood"
      source: {kind: borrowed, language: skill-sinalelng, form: vilkai}
    - form: gílpaisto
      class: n n
      field: "Water and the wood's weather"
      gloss: "a windy place"
      source: {kind: borrowed, language: skill-sinalelng, form: vilkaisto}
    - form: élpane
      class: n n
      field: "Water and the wood's weather"
      gloss: "weather"
      source: {kind: borrowed, language: skill-sinalelng, form: eltane}
    - form: rápalonu
      class: n n
      field: "Water and the wood's weather"
      gloss: "a raindrop"
      source: {kind: borrowed, language: skill-sinalelng, form: ravattonu}
    - form: rápalosa
      class: adj
      field: "Water and the wood's weather"
      gloss: "rainy"
      source: {kind: borrowed, language: skill-sinalelng, form: ravattosa}
    - form: pélpailu
      class: n n
      field: "Water and the wood's weather"
      gloss: "a wisp of cloud"
      source: {kind: borrowed, language: skill-sinalelng, form: pelvaikki}
    - form: móllursa
      class: n f
      field: "Water and the wood's weather"
      gloss: "depth; the depth of a pool"
      source: {kind: borrowed, language: skill-sinalelng, form: mollursa}
    - form: mélpesa
      class: adj
      field: "Water and the wood's weather"
      gloss: "watery"
      source: {kind: borrowed, language: skill-sinalelng, form: melkesa}
    - form: únturosa
      class: adj
      field: "Water and the wood's weather"
      gloss: "wintry"
      source: {kind: borrowed, language: skill-sinalelng, form: unturosa}
    - form: rískalo
      class: n n
      field: "Water and the wood's weather"
      gloss: "lightning"
      source: {kind: borrowed, language: skill-sinalelng, form: riskatto}
      concept: lightning
    - form: torpel
      class: n m
      field: Trees and the living wood
      gloss: "an oak"
      source: {kind: borrowed, language: skill-sinalelng, form: torvel}
    - form: khersel
      class: n m
      field: Trees and the living wood
      gloss: "a pine"
      source: {kind: borrowed, language: skill-sinalelng, form: hersel}
    - form: eipa
      class: n f
      field: Trees and the living wood
      gloss: "a yew"
      source: {kind: borrowed, language: skill-sinalelng, form: eikka}
    - form: lámaine
      class: n n
      field: Trees and the living wood
      gloss: "an apple"
      source: {kind: borrowed, language: skill-sinalelng, form: lamaine}
    - form: ossel
      class: n m
      field: Trees and the living wood
      gloss: "a reed"
      source: {kind: borrowed, language: skill-sinalelng, form: ossel}
    - form: morpel
      class: n m
      field: Trees and the living wood
      gloss: "berries"
      source: {kind: borrowed, language: skill-sinalelng, form: morpel}
    - form: ólmasi
      class: n n
      field: Trees and the living wood
      gloss: "moss on stone"
      source: {kind: borrowed, language: skill-sinalelng, form: olmasi}
    - form: ólmarna
      class: n f
      field: Trees and the living wood
      gloss: "the heartwood"
      source: {kind: borrowed, language: skill-sinalelng, form: olmarna}
    - form: kálpirno
      class: n n
      field: Trees and the living wood
      gloss: "a stand of birch"
      source: {kind: borrowed, language: skill-sinalelng, form: kalpikko}
    - form: khálpilonpu
      class: n n
      field: Trees and the living wood
      gloss: "a birch stand within the deep wood"
      source: {kind: borrowed, language: skill-sinalelng, form: halpilonku}
    - form: sálpurno
      class: n n
      field: Trees and the living wood
      gloss: "a grove"
      source: {kind: borrowed, language: skill-sinalelng, form: salpukko}
    - form: láupinu
      class: n n
      field: Trees and the living wood
      gloss: "a single leaf"
      source: {kind: borrowed, language: skill-sinalelng, form: lauppinu}
      concept: leaf
    - form: láupisa
      class: adj
      field: Trees and the living wood
      gloss: "leafy"
      source: {kind: borrowed, language: skill-sinalelng, form: lauppisa}
    - form: áimelinu
      class: n n
      field: Trees and the living wood
      gloss: "a single seed"
      source: {kind: borrowed, language: skill-sinalelng, form: aimettinu}
      concept: seed
    - form: pálsairsa
      class: n f
      field: Trees and the living wood
      gloss: "greenness; the green of the wood in spring"
      source: {kind: borrowed, language: skill-sinalelng, form: valsairsa}
    - form: sírreluro
      class: n n
      field: Trees and the living wood
      gloss: "birdsong"
      source: {kind: borrowed, language: skill-sinalelng, form: sytteluuro}
    - form: ílsepi
      class: n n
      field: Trees and the living wood
      gloss: "a deer"
      source: {kind: borrowed, language: skill-sinalelng, form: ilsetti}
    - form: ílsepilu
      class: n n
      field: Trees and the living wood
      gloss: "a fawn"
      source: {kind: borrowed, language: skill-sinalelng, form: ilsettikki}
    - form: pórsarno
      class: n n
      field: Trees and the living wood
      gloss: "a wolf pack"
      source: {kind: borrowed, language: skill-sinalelng, form: vorsakko}
    - form: úrthapen
      class: n m
      field: Trees and the living wood
      gloss: "a wild beast of the wood"
      source: {kind: borrowed, language: skill-sinalelng, form: urtappen}
    - form: porsa
      class: n f
      field: Trees and the living wood
      gloss: "a wolf"
      source: {kind: borrowed, language: skill-sinalelng, form: vorsa}
    - form: urnel
      class: n m
      field: Trees and the living wood
      gloss: "a bear"
      source: {kind: borrowed, language: skill-sinalelng, form: urnel}
    - form: tipel
      class: n m
      field: Trees and the living wood
      gloss: "a hawk"
      source: {kind: borrowed, language: skill-sinalelng, form: tihvel}
    - form: óssenda
      class: n f
      field: Trees and the living wood
      gloss: "night"
      source: {kind: borrowed, language: skill-sinalelng, form: ossenda}
      concept: night
    - form: kiltas
      class: adj
      field: Trees and the living wood
      gloss: "quick"
      source: {kind: borrowed, language: skill-sinalelng, form: kiltas}
      concept: fast
    - form: tekhi
      class: n n
      field: Trees and the living wood
      gloss: "the clearing round a single tree"
      source: {kind: borrowed, language: skill-sinalelng, form: tehy}
    - form: súldinno
      class: n n
      field: Trees and the living wood
      gloss: "a hunter in the wood"
      source: {kind: borrowed, language: skill-sinalelng, form: suldinno}
    - form: ílsepand
      class: n m
      field: Trees and the living wood
      gloss: "a deer stalker; one who hunts the deer of the wood for the lodge"
      built: ["ílsep-", "-and"]
    - form: tírpali
      class: n n
      field: Trees and the living wood
      gloss: "the long road; a path through the deep wood"
      source: {kind: borrowed, language: skill-sinalelng, form: tirvali}
    - form: audhi
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "the veil between the worlds"
      source: {kind: borrowed, language: skill-sinalelng, form: audhi}
    - form: sírnasto
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "a thin place; where the veil wears"
      source: {kind: borrowed, language: skill-sinalelng, form: sirnasto}
    - form: sírnalta
      class: v
      field: "The fae, the thin places and the wards"
      gloss: "to wear thin; said of the veil"
      source: {kind: borrowed, language: skill-sinalelng, form: sirnata}
    - form: sálpurnand
      class: n m
      field: "The fae, the thin places and the wards"
      gloss: "a grove keeper; the Warden who answers for one grove"
      built: ["sálpurn-", "-and"]
    - form: áldepan
      class: n m
      field: "The fae, the thin places and the wards"
      gloss: "the far side; what lies beyond the veil"
      source: {kind: borrowed, language: skill-sinalelng, form: aldevan}
    - form: úlpaldepan
      class: n m
      field: "The fae, the thin places and the wards"
      gloss: "what lies beyond the veil, as the Sinale name it"
      source: {kind: borrowed, language: skill-sinalelng, form: ultasaldevan}
    - form: áithepi
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "a spirit"
      source: {kind: borrowed, language: skill-sinalelng, form: aittevi}
    - form: áithepisto
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "the place of spirits"
      source: {kind: borrowed, language: skill-sinalelng, form: aittevisto}
    - form: pénallanu
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "one of the fae"
      source: {kind: borrowed, language: skill-sinalelng, form: venattanu}
    - form: orthi
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "a ward"
      source: {kind: borrowed, language: skill-sinalelng, form: orti}
    - form: simme
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "the art; what the lowlands call magic"
      source: {kind: borrowed, language: skill-sinalelng, form: symme}
    - form: ólpeira
      class: n f
      field: "The fae, the thin places and the wards"
      gloss: "a dream"
      source: {kind: borrowed, language: skill-sinalelng, form: olpeira}
      concept: dream
    - form: ólpeiranno
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "a dreamer; one whose dreams the council hears"
      source: {kind: borrowed, language: skill-sinalelng, form: olpeiranno}
    - form: ílthori
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "a vision"
      source: {kind: borrowed, language: skill-sinalelng, form: iltori}
    - form: ílthorinno
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "a seer"
      source: {kind: borrowed, language: skill-sinalelng, form: iltorin}
    - form: séisalpurno
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "a hallowed grove"
      source: {kind: borrowed, language: skill-sinalelng, form: seirasalpukko}
    - form: áulirarno
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "a gathering of light; the open circle where the wood is bright"
      source: {kind: borrowed, language: skill-sinalelng, form: aulirakko}
    - form: ánsoru
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "the long watch"
      source: {kind: borrowed, language: skill-sinalelng, form: ansoru}
    - form: ánsorunno
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "one who keeps the long watch at a thin place"
      source: {kind: borrowed, language: skill-sinalelng, form: ansorun}
    - form: pálmirno
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "a ring of standing stones"
      source: {kind: borrowed, language: skill-sinalelng, form: valkikko}
    - form: sínalo
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "one of the Sinale"
      source: {kind: borrowed, language: skill-sinalelng, form: sinalo}
    - form: khépimupu
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "the near people; the Sinale name for the Áelendan, which the Áelendan use of themselves in the wood"
      source: {kind: borrowed, language: skill-sinalelng, form: hepymuuvu}
    - form: mupu
      class: n n
      field: "The fae, the thin places and the wards"
      gloss: "humans; the people beyond the wood"
      source: {kind: borrowed, language: skill-sinalelng, form: muuvu}
      concept: human
    - form: lonthand
      class: n m
      field: "The fae, the thin places and the wards"
      gloss: "a druid; one who keeps the rites of a grove"
      built: ["lónthe-", "-and"]
    - form: lónthanda
      class: n f
      field: "The fae, the thin places and the wards"
      gloss: "a druid, a woman"
      built: ["lónthe-", "-and", "-a"]
    - form: kithe
      class: n f
      field: "The fae, the thin places and the wards"
      gloss: "a working; one act of the art as the lowland mages do it"
      source: {kind: borrowed, language: skill-sinalelng, form: kiette}
    - form: símmenne
      class: n m
      field: "The fae, the thin places and the wards"
      gloss: "a lowland mage"
      source: {kind: borrowed, language: skill-sinalelng, form: symmenne}
    - form: sélporo
      class: n n
      field: Rite and the dead
      gloss: "death"
      source: {kind: borrowed, language: skill-sinalelng, form: selkoro}
      concept: death
    - form: sélporosa
      class: adj
      field: Rite and the dead
      gloss: "dead"
      source: {kind: borrowed, language: skill-sinalelng, form: selkorosa}
      concept: dead
    - form: ílparo
      class: n n
      field: Rite and the dead
      gloss: "grief"
      source: {kind: borrowed, language: skill-sinalelng, form: ilkaro}
      concept: grief
    - form: nélthapa
      class: n f
      field: Rite and the dead
      gloss: "a lament; the song at the cairn"
      source: {kind: borrowed, language: skill-sinalelng, form: neltava}
    - form: réndalo
      class: n n
      field: Rite and the dead
      gloss: "rot; the corruption in a thing gone wrong"
      source: {kind: borrowed, language: skill-sinalelng, form: rendatto}
    - form: áipelo
      class: n n
      field: Rite and the dead
      gloss: "a lingering spirit; one of the dead who will not go on"
      source: {kind: borrowed, language: skill-sinalelng, form: aivetto}
    - form: óllepinu
      class: n n
      field: Rite and the dead
      gloss: "one of the dead"
      source: {kind: borrowed, language: skill-sinalelng, form: ollevinu}
    - form: náuldinno
      class: n n
      field: Rite and the dead
      gloss: "a binder of the dead, among the Sinale"
      source: {kind: borrowed, language: skill-sinalelng, form: nauldinno}
    - form: náuldisto
      class: n n
      field: Rite and the dead
      gloss: "a place of binding, among the Sinale"
      source: {kind: borrowed, language: skill-sinalelng, form: nauldisto}
    - form: sáuldisto
      class: n n
      field: Rite and the dead
      gloss: "a burial ground"
      source: {kind: borrowed, language: skill-sinalelng, form: sauldisto}
    - form: sáuldilonthe
      class: n n
      field: Rite and the dead
      gloss: "a burial rite"
      source: {kind: borrowed, language: skill-sinalelng, form: sauldilonte}
    - form: sélposalpu
      class: n n
      field: Rite and the dead
      gloss: "a tree planted for one of the dead"
      source: {kind: borrowed, language: skill-sinalelng, form: selkorosalpu}
    - form: lónthesto
      class: n n
      field: Rite and the dead
      gloss: "a place of rites"
      source: {kind: borrowed, language: skill-sinalelng, form: lontesto}
    - form: ólpairsa
      class: n f
      field: Rite and the dead
      gloss: "a walking away; the desertion of one's kin"
      source: {kind: borrowed, language: skill-sinalelng, form: olkairsa}
    - form: luro
      class: v
      field: "Song, speech and the letters"
      gloss: "to sing"
      source: {kind: borrowed, language: skill-sinalelng, form: luuro}
    - form: lúronno
      class: n n
      field: "Song, speech and the letters"
      gloss: "a singer; one who sings at the gathering"
      source: {kind: borrowed, language: skill-sinalelng, form: luuronno}
    - form: rúnathen
      class: v
      field: "Song, speech and the letters"
      gloss: "to speak; to say before the council"
      concept: [speak, say]
      source: {kind: inherited}
    - form: óstila
      class: n f
      field: "Song, speech and the letters"
      gloss: "a tongue; a language"
      source: {kind: inherited}
    - form: lethon
      class: n n
      field: "Song, speech and the letters"
      gloss: "a word"
      source: {kind: inherited}
    - form: lórnethen
      class: v
      field: "Song, speech and the letters"
      gloss: "to recite; to say the old words exactly as they were said"
      source: {kind: inherited}
    - form: lornand
      class: n m
      field: "Song, speech and the letters"
      gloss: "a Tradition Keeper; a reciter of the Pact and the genealogies"
      built: ["lorn-", "-and"]
    - form: moghon
      class: n n
      field: "Song, speech and the letters"
      gloss: "a recitation; an account of what was done, never written"
      source: {kind: inherited}
    - form: sáumirsa
      class: n f
      field: "Song, speech and the letters"
      gloss: "wisdom"
      source: {kind: borrowed, language: skill-sinalelng, form: saumirsa}
    - form: sárgathen
      class: v
      field: "Song, speech and the letters"
      gloss: "to know"
      concept: know
      source: {kind: inherited}
    - form: ugrin
      class: n n
      field: "Song, speech and the letters"
      gloss: "a stave; one sign of the rune-row"
      source: {kind: inherited}
    - form: grathon
      class: n n
      field: "Song, speech and the letters"
      gloss: "a cutting; a thing graven in stone"
      source: {kind: inherited}
    - form: runon
      class: n n
      field: "Song, speech and the letters"
      gloss: "a speech before the council"
      source: {kind: inherited}
    - form: saumi
      class: n n
      field: "Song, speech and the letters"
      gloss: "the Keepers' teaching; the years a child spends learning the genealogies"
      source: {kind: borrowed, language: skill-sinalelng, form: saumi}
    - form: sáuminno
      class: n m
      field: "Song, speech and the letters"
      gloss: "a teacher; a Keeper who teaches the genealogies"
      source: {kind: borrowed, language: skill-sinalelng, form: sauminno}
    - form: ólnaro
      class: n n
      field: "Song, speech and the letters"
      gloss: "a song, as the Sinale sing"
      source: {kind: borrowed, language: skill-sinalelng, form: olnaro}
    - form: sérdalo
      class: n n
      field: "Song, speech and the letters"
      gloss: "memory"
      source: {kind: borrowed, language: skill-sinalelng, form: serdatto}
    - form: sérdalorno
      class: n n
      field: "Song, speech and the letters"
      gloss: "lore; what memory holds together"
      source: {kind: borrowed, language: skill-sinalelng, form: serdattokko}
    - form: példirno
      class: n n
      field: "Song, speech and the letters"
      gloss: "the Veldikko; the Sinale hand, and anything written in it"
      source: {kind: borrowed, language: skill-sinalelng, form: veldikko}
    - form: példinno
      class: n n
      field: "Song, speech and the letters"
      gloss: "a scribe"
      source: {kind: borrowed, language: skill-sinalelng, form: veldinno}
    - form: sírnerno
      class: n n
      field: "Song, speech and the letters"
      gloss: "a roll of names"
      source: {kind: borrowed, language: skill-sinalelng, form: sirnekko}
    - form: khálthepeldi
      class: n n
      field: "Song, speech and the letters"
      gloss: "an inscription"
      source: {kind: borrowed, language: skill-sinalelng, form: halteveldi}
    - form: thénnairsa
      class: n f
      field: "Song, speech and the letters"
      gloss: "truth"
      source: {kind: borrowed, language: skill-sinalelng, form: tennairsa}
      concept: truth
    - form: épesirno
      class: n n
      field: "Song, speech and the letters"
      gloss: "a speech; a hoard of words"
      source: {kind: borrowed, language: skill-sinalelng, form: evesikko}
    - form: sáunarinu
      class: n n
      field: "Song, speech and the letters"
      gloss: "a saying"
      source: {kind: borrowed, language: skill-sinalelng, form: saunarinu}
    - form: áurenthe
      class: n n
      field: "Song, speech and the letters"
      gloss: "a turning; one part of a long song"
      source: {kind: borrowed, language: skill-sinalelng, form: aurente}
    - form: órrisanno
      class: n n
      field: "Song, speech and the letters"
      gloss: "one who foretells"
      source: {kind: borrowed, language: skill-sinalelng, form: orrisanno}
    - form: drúgathen
      class: v
      field: The Wardens and the border
      gloss: "to fight"
      source: {kind: inherited}
      concept: fight
    - form: ghresa
      class: n f
      field: The Wardens and the border
      gloss: "war"
      source: {kind: inherited}
      concept: war
    - form: redha
      class: n f
      field: The Wardens and the border
      gloss: "peace; the quiet between neighbors"
      source: {kind: inherited}
      concept: peace
    - form: úldathen
      class: v
      field: The Wardens and the border
      gloss: "to lead"
      source: {kind: inherited}
      concept: lead
    - form: uldar
      class: n m
      field: The Wardens and the border
      gloss: "a war leader; the one who leads a valley's Wardens"
      built: ["uld-", "-ar"]
    - form: ghenta
      class: n f
      field: The Wardens and the border
      gloss: "a spear"
      source: {kind: inherited}
    - form: thorgon
      class: n n
      field: The Wardens and the border
      gloss: "a shield"
      source: {kind: inherited}
    - form: kaipes
      class: n f
      field: The Wardens and the border
      gloss: "a bow"
      source: {kind: borrowed, language: skill-sinalelng, form: kaives}
    - form: dhelkon
      class: n n
      field: The Wardens and the border
      gloss: "a long knife"
      source: {kind: inherited}
    - form: ghorthis
      class: n f
      field: The Wardens and the border
      gloss: "a hill fort; a walled place above a valley"
      source: {kind: inherited}
    - form: gandurth
      class: n n
      field: The Wardens and the border
      gloss: "a held pass; the holding of a way against whoever comes up it"
      source: {kind: inherited}
    - form: takhesand
      class: n m
      field: The Wardens and the border
      gloss: "a captain; one who leads ten"
      built: [takhes, "-and"]
    - form: dhúrgala
      class: n f
      field: Craft and the metals
      gloss: "a forge"
      source: {kind: inherited}
    - form: thruk
      class: n f
      field: Craft and the metals
      gloss: "a hammer"
      source: {kind: inherited}
      concept: hammer
    - form: rúdhamon
      class: n n
      field: Craft and the metals
      gloss: "copper"
      source: {kind: inherited}
    - form: kranon
      class: n n
      field: Craft and the metals
      gloss: "bronze"
      source: {kind: inherited}
    - form: éltheson
      class: n n
      field: Craft and the metals
      gloss: "gold"
      source: {kind: inherited}
    - form: ánkhrason
      class: n n
      field: Craft and the metals
      gloss: "silver"
      source: {kind: inherited}
    - form: ghilson
      class: n n
      field: Craft and the metals
      gloss: "glass"
      source: {kind: inherited}
    - form: ghársalon
      class: n n
      field: Craft and the metals
      gloss: "a work; a thing made by hand"
      built: ["ghárs-", "-alon"]
    - form: múghathen
      class: v
      field: Craft and the metals
      gloss: "to keep a craft in one family"
      source: {kind: inherited}
    - form: thelgis
      class: n f
      field: Craft and the metals
      gloss: "a bench; a craftsman's place"
      source: {kind: inherited}
      concept: bench
    - form: thelgand
      class: n m
      field: Craft and the metals
      gloss: "a master of a craft"
      built: ["thelg-", "-and"]
    - form: ghrelon
      class: n n
      field: Craft and the metals
      gloss: "steel; bought from below, and prized"
      source: {kind: inherited}
    - form: menthon
      class: n n
      field: Craft and the metals
      gloss: "a weight"
      source: {kind: inherited}
    - form: sorgis
      class: n f
      field: Craft and the metals
      gloss: "a scale; a balance for weighing"
      source: {kind: inherited}
    - form: gherdon
      class: n n
      field: Craft and the metals
      gloss: "a trading ground; where the valleys meet to trade at midsummer"
      source: {kind: inherited}
    - form: dhesna
      class: n f
      field: Craft and the metals
      gloss: "a price"
      source: {kind: inherited}
    - form: ghenkon
      class: n n
      field: Craft and the metals
      gloss: "a wedge"
      source: {kind: inherited}
    - form: lórrami
      class: n n
      field: Craft and the metals
      gloss: "woven cloth"
      source: {kind: borrowed, language: skill-sinalelng, form: lorrami}
    - form: lórramipi
      class: n n
      field: Craft and the metals
      gloss: "a loom"
      source: {kind: borrowed, language: skill-sinalelng, form: lorramipi}
    - form: lórraminno
      class: n n
      field: Craft and the metals
      gloss: "a weaver"
      source: {kind: borrowed, language: skill-sinalelng, form: lorraminno}
    - form: pirnis
      class: n m
      field: Craft and the metals
      gloss: "a thread"
      source: {kind: borrowed, language: skill-sinalelng, form: virnis}
      concept: thread
    - form: sárnoli
      class: n n
      field: Craft and the metals
      gloss: "a knot"
      source: {kind: borrowed, language: skill-sinalelng, form: sarnotti}
    - form: khálthenno
      class: n n
      field: Craft and the metals
      gloss: "a carver of wood"
      source: {kind: borrowed, language: skill-sinalelng, form: haltenno}
    - form: árnathen
      class: v
      field: "Doing, going and being"
      gloss: "to come"
      concept: come
      source: {kind: inherited}
    - form: rógathen
      class: v
      field: "Doing, going and being"
      gloss: "to go"
      concept: go
      source: {kind: inherited}
    - form: nórethen
      class: v
      field: "Doing, going and being"
      gloss: "to see"
      concept: see-verb
      source: {kind: inherited}
    - form: thélkathen
      class: v
      field: "Doing, going and being"
      gloss: "to carry"
      source: {kind: inherited}
      concept: carry
    - form: rónithen
      class: v
      field: "Doing, going and being"
      gloss: "to rise"
      source: {kind: inherited}
      concept: rise
    - form: khálathen
      class: v
      field: "Doing, going and being"
      gloss: "to build"
      source: {kind: inherited}
      concept: build
    - form: mésathen
      class: v
      field: "Doing, going and being"
      gloss: "to send"
      source: {kind: inherited}
    - form: ghéthathen
      class: v
      field: "Doing, going and being"
      gloss: "to set over; to put someone in charge of a thing"
      built: [gheth, "-athen"]
    - form: ghérkathen
      class: v
      field: "Doing, going and being"
      gloss: "to see to; to look after a thing for another"
      source: {kind: inherited}
    - form: drósathen
      class: v
      field: "Doing, going and being"
      gloss: "to command; said of a war leader in the field and of nobody else"
      source: {kind: inherited}
    - form: tenthar
      class: adj
      field: "Doing, going and being"
      gloss: "enduring"
      source: {kind: inherited}
    - form: thinen
      class: adv
      field: "Doing, going and being"
      gloss: "less"
      source: {kind: inherited}
      concept: less
    - form: ordhur
      class: num
      field: Numbers and grammar words
      gloss: "four"
      concept: four
      source: {kind: inherited}
    - form: rethik
      class: num
      field: Numbers and grammar words
      gloss: "five"
      concept: five
      source: {kind: inherited}
    - form: methur
      class: num
      field: Numbers and grammar words
      gloss: "seven"
      concept: seven
      source: {kind: inherited}
    - form: dhorgen
      class: num
      field: Numbers and grammar words
      gloss: "eight"
      concept: eight
      source: {kind: inherited}
    - form: takhes
      class: num
      field: Numbers and grammar words
      gloss: "ten"
      concept: ten
      source: {kind: inherited}
    - form: krenis
      class: num
      field: Numbers and grammar words
      gloss: "twelve"
      source: {kind: inherited}
    - form: mórdamon
      class: num
      field: Numbers and grammar words
      gloss: "a thousand"
      concept: thousand
      source: {kind: inherited}
    - form: mund
      class: pron
      field: Numbers and grammar words
      gloss: "I"
      source: {kind: inherited}
      concept: i
    - form: tos
      class: pron
      field: Numbers and grammar words
      gloss: "you, one person"
      source: {kind: inherited}
      concept: you-reference
    - form: nus
      class: pron
      field: Numbers and grammar words
      gloss: "we"
      source: {kind: inherited}
      concept: we
    - form: rek
      class: part
      field: Numbers and grammar words
      gloss: "and"
      source: {kind: inherited}
      concept: and
    - form: nond
      class: part
      field: Numbers and grammar words
      gloss: "not"
      source: {kind: inherited}
      concept: not
    - form: ses
      class: part
      field: Numbers and grammar words
      gloss: "that, so that"
      source: {kind: inherited}
      concept: [then-conditional, for-purpose]
    - form: ris
      class: part
      field: Numbers and grammar words
      gloss: "in, into"
      source: {kind: inherited}
      concept: [inside, in]
    - form: gheth
      class: part
      field: Numbers and grammar words
      gloss: "over"
      source: {kind: inherited}
      concept: [above, over]
    - form: al
      class: part
      field: Numbers and grammar words
      gloss: "the; the article, from the old yonder"
      source: {kind: inherited}
    - form: uk
      class: num
      field: Numbers and grammar words
      gloss: "one"
      concept: one
      source: {kind: inherited}
    - form: ta
      class: num
      field: Numbers and grammar words
      gloss: "two"
      concept: two
      source: {kind: inherited}
    - form: kha
      class: num
      field: Numbers and grammar words
      gloss: "three"
      concept: three
      source: {kind: inherited}
    - form: dírmalis
      class: n f
      field: "The body, life and death"
      gloss: "a sight; a thing seen; the look of a thing"
      concept: [see-noun, appearance]
      source: {kind: inherited}
    - form: sóldithen
      class: v
      field: "The body, life and death"
      gloss: "to hear"
      concept: hear-verb
      source: {kind: inherited}
    - form: sóldaris
      class: n f
      field: "The body, life and death"
      gloss: "a sound; a thing heard"
      concept: hear-noun
      source: {kind: inherited}
    - form: múnsathen
      class: v
      field: "The body, life and death"
      gloss: "to smell; to catch the smell of a thing"
      concept: smell-verb
      source: {kind: inherited}
    - form: múnsala
      class: n f
      field: "The body, life and death"
      gloss: "a smell; a scent"
      concept: smell-noun
      source: {kind: inherited}
    - form: lóskathen
      class: v
      field: "The body, life and death"
      gloss: "to taste"
      concept: taste-verb
      source: {kind: inherited}
    - form: lóskima
      class: n f
      field: "The body, life and death"
      gloss: "a taste; a flavour"
      concept: taste-noun
      source: {kind: inherited}
    - form: gríthathen
      class: v
      field: "The body, life and death"
      gloss: "to feel; to touch"
      concept: touch-verb
      source: {kind: inherited}
    - form: gríthalis
      class: n f
      field: "The body, life and death"
      gloss: "a touch; the feel of a thing"
      concept: touch-noun
      source: {kind: inherited}
    - form: ghórasa
      class: n f
      field: "The body, life and death"
      gloss: "wrath; anger that burns"
      concept: wrath
      source: {kind: inherited}
    - form: dhérgamon
      class: n n
      field: "The body, life and death"
      gloss: "envy; the want of what another has"
      concept: envy
      source: {kind: inherited}
    - form: sénthira
      class: n f
      field: "The body, life and death"
      gloss: "hope"
      concept: hope
      source: {kind: inherited}
    - form: ghúlthesa
      class: n f
      field: "The body, life and death"
      gloss: "greed; the want of more than a thing is worth"
      concept: greed
      source: {kind: inherited}
    - form: ghárdimon
      class: n n
      field: "The body, life and death"
      gloss: "boasting; a speech made in one's own praise"
      concept: boasting
      source: {kind: inherited}
    - form: rónkalis
      class: n f
      field: "The body, life and death"
      gloss: "pride; honour a man claims for himself"
      concept: pride
      source: {kind: inherited}
    - form: ghérmisa
      class: n f
      field: "The body, life and death"
      gloss: "lust; the heat of the blood"
      concept: lust
      source: {kind: inherited}
    - form: ánsenthira
      class: n f
      field: "The body, life and death"
      gloss: "despair; hope given up"
      concept: despair
      built: ["an-", sénthira]
    - form: lúrgsenthira
      class: n f
      field: "The body, life and death"
      gloss: "disappointment; a hope that has fallen"
      concept: disappointment
      built: [lúrgathen, sénthira]
    - form: dhárison
      class: n n
      field: "The body, life and death"
      gloss: "faith; trust; the holding of the Pact true"
      concept: [faith, trust]
      source: {kind: inherited}
    - form: méldaris
      class: n f
      field: "The body, life and death"
      gloss: "romantic love; the love between lovers"
      concept: love-eros
      source: {kind: inherited}
    - form: kénalis
      class: n f
      field: "The body, life and death"
      gloss: "storge; the love of kin, of parent and child"
      concept: love-storge
      source: {kind: inherited}
    - form: ílthamon
      class: n n
      field: "The body, life and death"
      gloss: "agape; hallowed love, given to all without asking"
      concept: love-agape
      source: {kind: inherited}
    - form: ghoran
      class: n m
      field: "The body, life and death"
      gloss: "a head"
      concept: head
      source: {kind: inherited}
    - form: tharsa
      class: n f
      field: "The body, life and death"
      gloss: "the hair of the head"
      concept: hair
      source: {kind: inherited}
    - form: ghélmira
      class: n f
      field: "The body, life and death"
      gloss: "a face"
      concept: face
      source: {kind: inherited}
    - form: dulin
      class: n m
      field: "The body, life and death"
      gloss: "an eye"
      concept: eye
      source: {kind: inherited}
    - form: ósala
      class: n f
      field: "The body, life and death"
      gloss: "the ear"
      concept: ear
      source: {kind: inherited}
    - form: runkis
      class: n f
      field: "The body, life and death"
      gloss: "the nose"
      concept: nose
      source: {kind: inherited}
    - form: ghama
      class: n f
      field: "The body, life and death"
      gloss: "the mouth"
      concept: mouth
      source: {kind: inherited}
    - form: mersa
      class: n f
      field: "The body, life and death"
      gloss: "a lip"
      concept: lip
      source: {kind: inherited}
    - form: kelsis
      class: n f
      field: "The body, life and death"
      gloss: "a tooth"
      concept: tooth
      source: {kind: inherited}
    - form: khórtima
      class: n f
      field: "The body, life and death"
      gloss: "the neck"
      concept: neck
      source: {kind: inherited}
    - form: gárthemon
      class: n n
      field: "The body, life and death"
      gloss: "the shoulder"
      concept: shoulder
      source: {kind: inherited}
    - form: drámelis
      class: n f
      field: "The body, life and death"
      gloss: "the arm"
      concept: arm
      source: {kind: inherited}
    - form: kúrdela
      class: n f
      field: "The body, life and death"
      gloss: "the elbow"
      concept: elbow
      source: {kind: inherited}
    - form: thramis
      class: n f
      field: "The body, life and death"
      gloss: "a hand"
      concept: hand
      source: {kind: inherited}
    - form: lundis
      class: n f
      field: "The body, life and death"
      gloss: "a finger"
      concept: finger
      source: {kind: inherited}
    - form: drésala
      class: n f
      field: "The body, life and death"
      gloss: "a fingernail; a toenail"
      concept: [nail, toenail]
      source: {kind: inherited}
    - form: thórkalon
      class: n n
      field: "The body, life and death"
      gloss: "the chest"
      concept: chest
      source: {kind: inherited}
    - form: múnara
      class: n f
      field: "The body, life and death"
      gloss: "a breast"
      concept: breast
      source: {kind: inherited}
    - form: khámira
      class: n f
      field: "The body, life and death"
      gloss: "a heart"
      concept: heart
      source: {kind: inherited}
    - form: múrkalon
      class: n n
      field: "The body, life and death"
      gloss: "the belly"
      concept: belly
      source: {kind: inherited}
    - form: ránthemon
      class: n n
      field: "The body, life and death"
      gloss: "the back"
      concept: back
      source: {kind: inherited}
    - form: mórgila
      class: n f
      field: "The body, life and death"
      gloss: "the hip; the waist"
      concept: [hip, waist]
      source: {kind: inherited}
    - form: ghúrthamon
      class: n n
      field: "The body, life and death"
      gloss: "the leg"
      concept: leg
      source: {kind: inherited}
    - form: gúrdamon
      class: n n
      field: "The body, life and death"
      gloss: "the knee"
      concept: knee
      source: {kind: inherited}
    - form: thodra
      class: n f
      field: "The body, life and death"
      gloss: "the foot"
      concept: foot
      source: {kind: inherited}
    - form: thódrundis
      class: n f
      field: "The body, life and death"
      gloss: "a toe"
      concept: toe
      built: [thodra, lundis]
    - form: lúmrisa
      class: n f
      field: "The body, life and death"
      gloss: "the skin; a hide"
      concept: skin
      source: {kind: inherited}
    - form: kulthon
      class: n n
      field: "The body, life and death"
      gloss: "a bone"
      concept: bone
      source: {kind: inherited}
    - form: dúmeris
      class: n f
      field: "The body, life and death"
      gloss: "flesh; meat"
      concept: flesh
      source: {kind: inherited}
    - form: tamris
      class: n f
      field: "The body, life and death"
      gloss: "food; a meal"
      concept: food
      source: {kind: inherited}
    - form: támrathen
      class: v
      field: "The body, life and death"
      gloss: "to eat"
      concept: eat
      source: {kind: inherited}
    - form: lúnthema
      class: n f
      field: "The body, life and death"
      gloss: "a drink"
      concept: drink-noun
      source: {kind: inherited}
    - form: lúnthathen
      class: v
      field: "The body, life and death"
      gloss: "to drink"
      concept: drink-verb
      source: {kind: inherited}
    - form: thérsala
      class: n f
      field: "The body, life and death"
      gloss: "air"
      concept: air
      source: {kind: inherited}
    - form: nimon
      class: n n
      field: "The body, life and death"
      gloss: "breath; a breath"
      concept: breath
      source: {kind: inherited}
    - form: nímathen
      class: v
      field: "The body, life and death"
      gloss: "to breathe"
      concept: breathe
      source: {kind: inherited}
    - form: dursa
      class: n f
      field: "The body, life and death"
      gloss: "sleep"
      concept: sleep-noun
      source: {kind: inherited}
    - form: dúrsathen
      class: v
      field: "The body, life and death"
      gloss: "to sleep"
      concept: sleep-verb
      source: {kind: inherited}
    - form: ghúrlena
      class: n f
      field: "The body, life and death"
      gloss: "urine"
      concept: urine
      source: {kind: inherited}
    - form: ghúrlathen
      class: v
      field: "The body, life and death"
      gloss: "to urinate"
      concept: urinate
      source: {kind: inherited}
    - form: múrkison
      class: n n
      field: "The body, life and death"
      gloss: "dung"
      concept: dung
      source: {kind: inherited}
    - form: múrkathen
      class: v
      field: "The body, life and death"
      gloss: "to defecate"
      concept: defecate
      source: {kind: inherited}
    - form: dhálmesa
      class: n f
      field: "The body, life and death"
      gloss: "warmth"
      concept: warmth
      source: {kind: inherited}
    - form: ródhalis
      class: n f
      field: "The body, life and death"
      gloss: "shelter; a place under a roof"
      concept: shelter
      source: {kind: inherited}
    - form: maldon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "a chair"
      concept: chair
      source: {kind: inherited}
    - form: tháldema
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "a table"
      concept: table
      source: {kind: inherited}
    - form: dhurin
      class: n m
      field: "The lodge, the fire and the guest"
      gloss: "a bed"
      concept: bed
      source: {kind: inherited}
    - form: ghérmalon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "a floor"
      concept: floor
      source: {kind: inherited}
    - form: dhúrmera
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "a wall; a lodge wall or a field wall"
      concept: wall
      source: {kind: inherited}
    - form: kheldon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "a roof"
      concept: roof
      source: {kind: inherited}
    - form: khalthon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "a lodge; a house; a home"
      concept: abode
      source: {kind: inherited}
    - form: khenda
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "fire; a fire"
      concept: fire
      source: {kind: inherited}
    - form: ganda
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "a door"
      concept: door
      source: {kind: inherited}
    - form: grúndalon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "a lock"
      concept: lock
      source: {kind: inherited}
    - form: dornis
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "a key"
      concept: key
      source: {kind: inherited}
    - form: thúrnela
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "a window"
      concept: window
      source: {kind: inherited}
    - form: thárkison
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "shutters; the boards of a window"
      concept: shutters
      source: {kind: inherited}
    - form: thulon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "a cup"
      concept: cup
      source: {kind: inherited}
    - form: ólkhena
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "a bowl"
      concept: bowl
      source: {kind: inherited}
    - form: ghursis
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "a knife"
      concept: knife
      source: {kind: inherited}
    - form: sármela
      class: n f
      field: "The lodge, the fire and the guest"
      gloss: "a spoon"
      concept: spoon
      source: {kind: inherited}
    - form: dhórthemon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "a pot"
      concept: pot
      source: {kind: inherited}
    - form: ghélthamon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "cloth"
      concept: cloth
      source: {kind: inherited}
    - form: sórkalon
      class: n n
      field: "The lodge, the fire and the guest"
      gloss: "clothes; what is worn"
      concept: clothes
      source: {kind: inherited}
    - form: dontur
      class: num
      field: "Numbers and grammar words"
      gloss: "six"
      concept: six
      source: {kind: inherited}
    - form: ghondis
      class: num
      field: "Numbers and grammar words"
      gloss: "nine"
      concept: nine
      source: {kind: inherited}
    - form: tátakhes
      class: num
      field: "Numbers and grammar words"
      gloss: "twenty; two tens"
      concept: twenty
      built: [ta, takhes]
    - form: dhórkamon
      class: num
      field: "Numbers and grammar words"
      gloss: "a hundred"
      concept: hundred
      source: {kind: inherited}
    - form: trenen
      class: adj
      field: "Numbers and grammar words"
      gloss: "first"
      concept: first
      source: {kind: inherited}
    - form: dálamen
      class: adj
      field: "Numbers and grammar words"
      gloss: "second; next in rank"
      concept: second
      source: {kind: inherited}
    - form: khárinen
      class: adj
      field: "Numbers and grammar words"
      gloss: "third"
      concept: third
      source: {kind: inherited}
    - form: dhima
      class: n f
      field: "Numbers and grammar words"
      gloss: "a half"
      concept: half
      source: {kind: inherited}
    - form: ghurnar
      class: adj
      field: "Numbers and grammar words"
      gloss: "many"
      concept: many
      source: {kind: inherited}
    - form: sendar
      class: adj
      field: "Numbers and grammar words"
      gloss: "few"
      concept: few
      source: {kind: inherited}
    - form: nonduk
      class: pron
      field: "Numbers and grammar words"
      gloss: "none; nothing; not one"
      concept: none
      built: [nond, uk]
    - form: thanar
      class: adj
      field: "Colour and the look of things"
      gloss: "black; dark"
      concept: [black, dark]
      source: {kind: inherited}
    - form: khalmar
      class: adj
      field: "Colour and the look of things"
      gloss: "white"
      concept: white
      source: {kind: inherited}
    - form: rudhar
      class: adj
      field: "Colour and the look of things"
      gloss: "red"
      concept: red
      source: {kind: inherited}
    - form: mírnaren
      class: adj
      field: "Colour and the look of things"
      gloss: "green"
      concept: green
      source: {kind: inherited}
    - form: sótharen
      class: adj
      field: "Colour and the look of things"
      gloss: "yellow"
      concept: yellow
      source: {kind: inherited}
    - form: dhéndaren
      class: adj
      field: "Colour and the look of things"
      gloss: "blue; the colour of the high sky"
      concept: blue
      source: {kind: inherited}
    - form: ghéstaren
      class: adj
      field: "Colour and the look of things"
      gloss: "grey; ash-coloured"
      concept: grey
      source: {kind: inherited}
    - form: khóldaren
      class: adj
      field: "Colour and the look of things"
      gloss: "brown"
      concept: brown
      source: {kind: inherited}
    - form: ámmira
      class: n f
      field: "Kin, the clan and the name"
      gloss: "a mother"
      concept: mother
      source: {kind: inherited}
    - form: dathar
      class: n m
      field: "Kin, the clan and the name"
      gloss: "a father"
      concept: father
      source: {kind: inherited}
    - form: kénalor
      class: n m
      field: "Kin, the clan and the name"
      gloss: "a parent"
      concept: parent
      source: {kind: inherited}
    - form: khelnor
      class: n m
      field: "Kin, the clan and the name"
      gloss: "a son"
      concept: son
      source: {kind: inherited}
    - form: khélnora
      class: n f
      field: "Kin, the clan and the name"
      gloss: "a daughter"
      concept: daughter
      source: {kind: inherited}
    - form: úrammira
      class: n f
      field: "Kin, the clan and the name"
      gloss: "a grandmother"
      concept: grandmother
      built: [uron, ámmira]
    - form: úrdathar
      class: n m
      field: "Kin, the clan and the name"
      gloss: "a grandfather"
      concept: grandfather
      built: [uron, dathar]
    - form: sénkhinon
      class: n n
      field: "Kin, the clan and the name"
      gloss: "a grandchild"
      concept: grandchild
      source: {kind: inherited}
    - form: gháldoran
      class: n m
      field: "Kin, the clan and the name"
      gloss: "an uncle"
      concept: uncle
      source: {kind: inherited}
    - form: gháldora
      class: n f
      field: "Kin, the clan and the name"
      gloss: "an aunt"
      concept: aunt
      source: {kind: inherited}
    - form: kénthilar
      class: n m
      field: "Kin, the clan and the name"
      gloss: "a cousin"
      concept: cousin
      source: {kind: inherited}
    - form: thalmand
      class: n m
      field: "Kin, the clan and the name"
      gloss: "a husband"
      concept: husband
      source: {kind: inherited}
    - form: thálmanda
      class: n f
      field: "Kin, the clan and the name"
      gloss: "a wife"
      concept: wife
      source: {kind: inherited}
    - form: úrkenand
      class: n m
      field: "Kin, the clan and the name"
      gloss: "an ancestor; one of the dead a clan still counts"
      concept: ancestor
      source: {kind: inherited}
    - form: núrendar
      class: n m
      field: "Kin, the clan and the name"
      gloss: "a descendant"
      concept: descendant
      source: {kind: inherited}
    - form: ánkenon
      class: n n
      field: "Kin, the clan and the name"
      gloss: "an orphan; a child with no kin to keep it"
      concept: orphan
      source: {kind: inherited}
    - form: dhélsara
      class: n f
      field: "Kin, the clan and the name"
      gloss: "a widow"
      concept: widow
      source: {kind: inherited}
    - form: ónathen
      class: v
      field: "Doing, going and being"
      gloss: "to be"
      concept: be
      source: {kind: inherited}
    - form: dhárkathen
      class: v
      field: "Doing, going and being"
      gloss: "to hold; to have"
      concept: [have, hold]
      source: {kind: inherited}
    - form: ghóldathen
      class: v
      field: "Doing, going and being"
      gloss: "to take"
      concept: take
      source: {kind: inherited}
    - form: ghársathen
      class: v
      field: "Doing, going and being"
      gloss: "to make; to do"
      concept: [make, do, create]
      source: {kind: inherited}
    - form: khórmathen
      class: v
      field: "Doing, going and being"
      gloss: "to think"
      concept: think
      source: {kind: inherited}
    - form: ílnathen
      class: v
      field: "Doing, going and being"
      gloss: "to want; to desire"
      concept: [want, wish-verb]
      source: {kind: inherited}
    - form: sénkathen
      class: v
      field: "Doing, going and being"
      gloss: "to walk"
      concept: walk
      source: {kind: inherited}
    - form: ghírdathen
      class: v
      field: "Doing, going and being"
      gloss: "to run"
      concept: run
      source: {kind: inherited}
    - form: khóthathen
      class: v
      field: "Doing, going and being"
      gloss: "to sit"
      concept: sit
      source: {kind: inherited}
    - form: róndathen
      class: v
      field: "Doing, going and being"
      gloss: "to stand"
      concept: stand
      source: {kind: inherited}
    - form: ghórnathen
      class: v
      field: "Doing, going and being"
      gloss: "to lie down"
      concept: lie-down
      source: {kind: inherited}
    - form: dórgathen
      class: v
      field: "Doing, going and being"
      gloss: "to bring"
      concept: bring
      source: {kind: inherited}
    - form: thíldathen
      class: v
      field: "Doing, going and being"
      gloss: "to set; to lay a thing in its place"
      concept: put
      source: {kind: inherited}
    - form: sórkathen
      class: v
      field: "Doing, going and being"
      gloss: "to find"
      concept: find
      source: {kind: inherited}
    - form: ánsorkathen
      class: v
      field: "Doing, going and being"
      gloss: "to lose"
      concept: lose
      built: ["an-", sórkathen]
    - form: gárdathen
      class: v
      field: "Doing, going and being"
      gloss: "to open"
      concept: open
      source: {kind: inherited}
    - form: ángardathen
      class: v
      field: "Doing, going and being"
      gloss: "to close"
      concept: close
      built: ["an-", gárdathen]
    - form: thrénathen
      class: v
      field: "Doing, going and being"
      gloss: "to begin"
      concept: begin
      source: {kind: inherited}
    - form: dhúlkathen
      class: v
      field: "Doing, going and being"
      gloss: "to end"
      concept: end
      source: {kind: inherited}
    - form: durnathen
      class: v
      field: The body, life and death
      gloss: to look; to direct one's gaze
      source: {kind: inherited}
      concept: look
    - form: dheldathen
      class: v
      field: The body, life and death
      gloss: to watch; to observe attentively
      source: {kind: inherited}
      concept: watch
    - form: norar
      class: adj
      field: The body, life and death
      gloss: visible; able to be seen
      source: {kind: inherited}
      concept: visible
    - form: annorar
      class: adj
      field: The body, life and death
      gloss: invisible; unable to be seen
      built: [an-, norar]
      concept: invisible
    - form: salkathen
      class: v
      field: The body, life and death
      gloss: to listen; to attend to a sound
      source: {kind: inherited}
      concept: listen
    - form: soldron
      class: n n
      field: The body, life and death
      gloss: noise; unwanted or confused sound
      source: {kind: inherited}
      concept: noise
    - form: rundis
      class: n f
      field: The body, life and death
      gloss: a voice; the bodily sound of a speaker
      source: {kind: inherited}
      concept: voice
    - form: saldren
      class: n f
      field: The body, life and death
      gloss: silence; absence of sound
      source: {kind: inherited}
      concept: silence
    - form: soldar
      class: adj
      field: The body, life and death
      gloss: loud; strong in sound
      source: {kind: inherited}
      concept: loud
    - form: seldar
      class: adj
      field: The body, life and death
      gloss: quiet; low in sound
      source: {kind: inherited}
      concept: quiet
    - form: munsar
      class: adj
      field: The body, life and death
      gloss: fragrant; pleasantly scented
      source: {kind: inherited}
      concept: fragrant
    - form: gorsar
      class: adj
      field: The body, life and death
      gloss: foul-smelling; having an unpleasant smell
      source: {kind: inherited}
      concept: foul
    - form: meldar
      class: adj
      field: The body, life and death
      gloss: sweet to the taste
      source: {kind: inherited}
      concept: sweet
    - form: kirsar
      class: adj
      field: The body, life and death
      gloss: sour to the taste
      source: {kind: inherited}
      concept: sour
    - form: ghorsar
      class: adj
      field: The body, life and death
      gloss: bitter to the taste
      source: {kind: inherited}
      concept: bitter
    - form: sulmar
      class: adj
      field: The body, life and death
      gloss: salty; tasting of salt
      source: {kind: inherited}
      concept: salty
    - form: grunathen
      class: v
      field: The body, life and death
      gloss: to feel a bodily sensation; to experience warmth, pain or pressure
      source: {kind: inherited}
      concept: feel-verb
    - form: grunis
      class: n f
      field: The body, life and death
      gloss: a bodily sensation; an experience of the senses
      source: {kind: inherited}
      concept: sensation
    - form: lendar
      class: adj
      field: The body, life and death
      gloss: smooth; even to the touch
      source: {kind: inherited}
      concept: smooth
    - form: kherdar
      class: adj
      field: The body, life and death
      gloss: rough; uneven to the touch
      source: {kind: inherited}
      concept: rough
    - form: malnar
      class: adj
      field: The body, life and death
      gloss: soft; yielding to the touch
      source: {kind: inherited}
      concept: soft
    - form: kardar
      class: adj
      field: The body, life and death
      gloss: hard to the touch; firm rather than soft
      source: {kind: inherited}
      concept: hard-texture
    - form: nordathen
      class: v
      field: The body, life and death
      gloss: to notice; to become aware of something
      source: {kind: inherited}
      concept: notice
    - form: grendathen
      class: v
      field: The body, life and death
      gloss: to perceive; to apprehend through a sense
      source: {kind: inherited}
      concept: perceive
    - form: sargnathen
      class: v
      field: The body, life and death
      gloss: to recognize; to identify something known
      source: {kind: inherited}
      concept: recognize
    - form: dornathen
      class: v
      field: The body, life and death
      gloss: to seem; to appear to be without asserting that it is
      source: {kind: inherited}
      concept: seem
    - form: ghárasa
      class: n f
      field: The body, life and death
      gloss: anger; displeasure at a wrong or obstruction
      source: {kind: inherited}
      concept: anger
    - form: merlis
      class: n f
      field: The body, life and death
      gloss: joy; a sudden strong gladness
      source: {kind: inherited}
      concept: joy
    - form: merlon
      class: n n
      field: The body, life and death
      gloss: happiness; an enduring state of gladness
      source: {kind: inherited}
      concept: happiness
    - form: losnis
      class: n f
      field: The body, life and death
      gloss: pleasure; a pleasant feeling
      source: {kind: inherited}
      concept: pleasure
    - form: tendaris
      class: n f
      field: The body, life and death
      gloss: contentment; being at peace with what one has
      source: {kind: inherited}
      concept: contentment
    - form: laghnis
      class: n f
      field: The body, life and death
      gloss: gratitude; grateful feeling for something received
      source: {kind: inherited}
      concept: gratitude
    - form: rondis
      class: n f
      field: The body, life and death
      gloss: admiration; warm esteem for another's qualities
      source: {kind: inherited}
      concept: admiration
    - form: ghendaris
      class: n f
      field: The body, life and death
      gloss: courage; readiness to face fear
      source: {kind: inherited}
      concept: courage
    - form: khernis
      class: n f
      field: The body, life and death
      gloss: hatred; enduring hostile feeling
      source: {kind: inherited}
      concept: hatred
    - form: kendaris
      class: n f
      field: The body, life and death
      gloss: jealousy; fear of losing another's affection or place to a rival
      source: {kind: inherited}
      concept: jealousy
    - form: dhoris
      class: n f
      field: The body, life and death
      gloss: fear; apprehension of danger
      source: {kind: inherited}
      concept: fear
    - form: ghur dhoris
      class: n f
      field: The body, life and death
      gloss: terror; overwhelming fear
      built: [ghur, dhoris]
      concept: terror
    - form: melthis
      class: n f
      field: The body, life and death
      gloss: sadness; an unhappy feeling
      source: {kind: inherited}
      concept: sadness
    - form: ghaldis
      class: n f
      field: The body, life and death
      gloss: shame; the feeling of having fallen short of one's own or others' standards
      source: {kind: inherited}
      concept: shame
    - form: dharnis
      class: n f
      field: The body, life and death
      gloss: guilt; the troubled feeling that one has done wrong
      source: {kind: inherited}
      concept: guilt
    - form: ghornis
      class: n f
      field: The body, life and death
      gloss: regret; sorrow over something done or missed
      source: {kind: inherited}
      concept: regret
    - form: mirdis
      class: n f
      field: The body, life and death
      gloss: humility; a modest judgment of oneself
      source: {kind: inherited}
      concept: humility
    - form: tenghis
      class: n f
      field: The body, life and death
      gloss: confidence; trust in one's own ability or success
      source: {kind: inherited}
      concept: confidence
    - form: gheldis
      class: n f
      field: The body, life and death
      gloss: embarrassment; discomfort at unwanted attention or social awkwardness
      source: {kind: inherited}
      concept: embarrassment
    - form: kenris
      class: n f
      field: The body, life and death
      gloss: compassion; concern for suffering with a wish to relieve it
      source: {kind: inherited}
      concept: compassion
    - form: murdis
      class: n f
      field: The body, life and death
      gloss: pity; sorrow for another's misfortune
      source: {kind: inherited}
      concept: pity
    - form: semris
      class: n f
      field: The body, life and death
      gloss: sympathy; fellow feeling with another's emotion
      source: {kind: inherited}
      concept: sympathy
    - form: ghren ghárasa
      class: n f
      field: The body, life and death
      gloss: resentment; anger kept over a perceived wrong
      built: [ghren, ghárasa]
      concept: resentment
    - form: ghirdis
      class: n f
      field: The body, life and death
      gloss: contempt; the feeling that another is beneath regard
      source: {kind: inherited}
      concept: contempt
    - form: dhelmis
      class: n f
      field: The body, life and death
      gloss: forgiveness; letting go of blame for a wrong
      source: {kind: inherited}
      concept: forgiveness
    - form: ilnis
      class: n f
      field: The body, life and death
      gloss: desire; a wish to have or do something
      source: {kind: inherited}
      concept: desire
    - form: ghren ilnis
      class: n f
      field: The body, life and death
      gloss: longing; a sustained yearning for something absent
      built: [ghren, ilnis]
      concept: longing
    - form: ilndaris
      class: n f
      field: The body, life and death
      gloss: satisfaction; the feeling of a desire fulfilled
      source: {kind: inherited}
      concept: satisfaction
    - form: angrilis
      class: n f
      field: The body, life and death
      gloss: frustration; distress at being prevented from fulfilling a wish
      source: {kind: inherited}
      concept: frustration
    - form: sarglis
      class: n f
      field: The body, life and death
      gloss: curiosity; a desire to find out
      source: {kind: inherited}
      concept: curiosity
    - form: ghendris
      class: n f
      field: The body, life and death
      gloss: confusion; inability to make sense of something
      source: {kind: inherited}
      concept: confusion
    - form: tharnis
      class: n f
      field: The body, life and death
      gloss: doubt; uncertainty whether something is true
      source: {kind: inherited}
      concept: doubt
    - form: tendris
      class: n f
      field: The body, life and death
      gloss: certainty; being fully convinced that something is true
      source: {kind: inherited}
      concept: certainty
    - form: nordis
      class: n f
      field: The body, life and death
      gloss: surprise; a feeling caused by something unexpected
      source: {kind: inherited}
      concept: surprise
    - form: dursnis
      class: n f
      field: The body, life and death
      gloss: boredom; weary lack of interest
      source: {kind: inherited}
      concept: boredom
    - form: arnis
      class: n f
      field: The body, life and death
      gloss: anticipation; expectant feeling toward a coming event
      source: {kind: inherited}
      concept: anticipation
    - form: sarnis
      class: n f
      field: The body, life and death
      gloss: belief; acceptance that a claim is true
      source: {kind: inherited}
      concept: belief
    - form: irthnis
      class: n f
      field: The body, life and death
      gloss: reverence; profound respect for what is held sacred
      source: {kind: inherited}
      concept: reverence
    - form: ghur rondis
      class: n f
      field: The body, life and death
      gloss: awe; wonder and admiration so great that they humble the person feeling them
      built: [ghur, rondis]
      concept: awe
    - form: meldis
      class: n f
      field: The body, life and death
      gloss: affection; fond regard for someone
      source: {kind: inherited}
      concept: affection
    - form: ilnris
      class: n f
      field: The body, life and death
      gloss: attraction; a feeling of being drawn to someone
      source: {kind: inherited}
      concept: attraction
    - form: kenlis
      class: n f
      field: The body, life and death
      gloss: intimacy; emotional closeness and shared private understanding
      source: {kind: inherited}
      concept: intimacy
    - form: ghelnis
      class: n f
      field: The body, life and death
      gloss: devotion; sustained loving commitment
      source: {kind: inherited}
      concept: devotion
    - form: dharnon
      class: n n
      field: The body, life and death
      gloss: loyalty; steadfast allegiance to someone or a cause
      source: {kind: inherited}
      concept: loyalty
    - form: semron
      class: n n
      field: The body, life and death
      gloss: companionship; the comfort of being with a companion
      source: {kind: inherited}
      concept: companionship
    - form: khernalon
      class: n n
      field: The body, life and death
      gloss: enmity; a state of mutual hostility
      source: {kind: inherited}
      concept: enmity
    - form: ghur
      class: adj
      field: Doing, going and being
      gloss: overwhelming; immense in size or degree
      source: {kind: inherited}
      concept: huge
    - form: ghren
      class: adj
      field: Doing, going and being
      gloss: sustained; kept over a long time
      source: {kind: inherited}
    - form: ghalis
      class: n f
      field: The body, life and death
      gloss: the tongue; the organ inside the mouth used in tasting and speaking
      source: {kind: inherited}
      concept: tongue
    - form: tharnon
      class: n n
      field: The body, life and death
      gloss: the forehead
      source: {kind: inherited}
      concept: forehead
    - form: karnis
      class: n f
      field: The body, life and death
      gloss: the jaw
      source: {kind: inherited}
      concept: jaw
    - form: dranis
      class: n f
      field: The body, life and death
      gloss: the chin
      source: {kind: inherited}
      concept: chin
    - form: ghernis
      class: n f
      field: The body, life and death
      gloss: a cheek
      source: {kind: inherited}
      concept: cheek
    - form: khurnis
      class: n f
      field: The body, life and death
      gloss: the throat; the passage behind the mouth
      source: {kind: inherited}
      concept: throat
    - form: tumron
      class: n n
      field: The body, life and death
      gloss: the stomach; the digestive organ
      source: {kind: inherited}
      concept: stomach
    - form: rangelon
      class: n n
      field: The body, life and death
      gloss: the spine; the backbone
      source: {kind: inherited}
      concept: spine
    - form: durnis
      class: n f
      field: The body, life and death
      gloss: a buttock
      source: {kind: inherited}
      concept: buttock
    - form: tharlon
      class: n n
      field: The body, life and death
      gloss: a wrist
      source: {kind: inherited}
      concept: wrist
    - form: thalnis
      class: n f
      field: The body, life and death
      gloss: the palm of the hand
      source: {kind: inherited}
      concept: palm
    - form: lurnon
      class: n n
      field: The body, life and death
      gloss: a thumb
      source: {kind: inherited}
      concept: thumb
    - form: ghurnis
      class: n f
      field: The body, life and death
      gloss: a thigh
      source: {kind: inherited}
      concept: thigh
    - form: thodnis
      class: n f
      field: The body, life and death
      gloss: an ankle
      source: {kind: inherited}
      concept: ankle
    - form: thodron
      class: n n
      field: The body, life and death
      gloss: a heel
      source: {kind: inherited}
      concept: heel
    - form: thodlis
      class: n f
      field: The body, life and death
      gloss: the sole of the foot
      source: {kind: inherited}
      concept: sole
    - form: ghelmon
      class: n n
      field: The body, life and death
      gloss: a muscle; bodily tissue that contracts to move a limb
      source: {kind: inherited}
      concept: muscle
    - form: murnis
      class: n f
      field: The body, life and death
      gloss: fat; bodily fat
      source: {kind: inherited}
      concept: fat
    - form: thurnis
      class: n f
      field: The body, life and death
      gloss: sweat; moisture shed by the skin
      source: {kind: inherited}
      concept: sweat
    - form: dunnis
      class: n f
      field: The body, life and death
      gloss: tears; liquid shed from the eyes
      source: {kind: inherited}
      concept: tears
    - form: ghamris
      class: n f
      field: The body, life and death
      gloss: saliva; liquid in the mouth
      source: {kind: inherited}
      concept: saliva
    - form: ghornon
      class: n n
      field: The body, life and death
      gloss: the brain
      source: {kind: inherited}
      concept: brain
    - form: nimron
      class: n n
      field: The body, life and death
      gloss: a lung
      source: {kind: inherited}
      concept: lung
    - form: dhermon
      class: n n
      field: The body, life and death
      gloss: the liver
      source: {kind: inherited}
      concept: liver
    - form: gurmon
      class: n n
      field: The body, life and death
      gloss: a kidney
      source: {kind: inherited}
      concept: kidney
    - form: tumnis
      class: n f
      field: The body, life and death
      gloss: the intestine; the gut
      source: {kind: inherited}
      concept: intestine
    - form: kurnon
      class: n n
      field: The body, life and death
      gloss: the genitals; the external sexual organs
      source: {kind: inherited}
      concept: genitals
    - form: kenmon
      class: n n
      field: The body, life and death
      gloss: the womb
      source: {kind: inherited}
      concept: womb
    - form: gharnon
      class: n n
      field: The body, life and death
      gloss: the penis
      source: {kind: inherited}
      concept: penis
    - form: kurnelis
      class: n f
      field: The body, life and death
      gloss: the vagina; the internal passage from the external opening to the womb
      source: {kind: inherited}
      concept: vagina
    - form: gurnis
      class: n f
      field: The body, life and death
      gloss: a testicle
      source: {kind: inherited}
      concept: testicle
    - form: tamnis
      class: n f
      field: The body, life and death
      gloss: hunger; the bodily need for food
      source: {kind: inherited}
      concept: hunger
    - form: tamnar
      class: adj
      field: The body, life and death
      gloss: hungry; needing food
      source: {kind: inherited}
      concept: hungry
    - form: lunthis
      class: n f
      field: The body, life and death
      gloss: thirst; the bodily need for a drink
      source: {kind: inherited}
      concept: thirst
    - form: lunthar
      class: adj
      field: The body, life and death
      gloss: thirsty; needing a drink
      source: {kind: inherited}
      concept: thirsty
    - form: ris nímathen
      class: v
      field: The body, life and death
      gloss: to inhale; to draw breath in
      built: [ris, nímathen]
      concept: inhale
    - form: ghol nímathen
      class: v
      field: The body, life and death
      gloss: to exhale; to let breath out
      built: [ghol, nímathen]
      concept: exhale
    - form: nimon ghóldathen nond ghendathen
      class: v
      field: The body, life and death
      gloss: to suffocate; to be unable to take breath
      built: [nimon, ghóldathen, nond, ghendathen]
      concept: suffocate
    - form: durnethen
      class: v
      field: The body, life and death
      gloss: to wake; to become awake or wake someone from sleep
      source: {kind: inherited}
      concept: wake
    - form: durnar
      class: adj
      field: The body, life and death
      gloss: awake; out of sleep
      source: {kind: inherited}
      concept: awake
    - form: dhelon
      class: n n
      field: The body, life and death
      gloss: rest; a pause in exertion for recovery
      source: {kind: inherited}
      concept: rest
    - form: dhelar
      class: adj
      field: The body, life and death
      gloss: tired; needing rest
      source: {kind: inherited}
      concept: tired
    - form: thurnathen
      class: v
      field: The body, life and death
      gloss: to sweat; to give off moisture through the skin
      source: {kind: inherited}
      concept: sweat-verb
    - form: ghalmis
      class: n f
      field: The body, life and death
      gloss: heat; high temperature
      source: {kind: inherited}
      concept: heat
    - form: nelmis
      class: n f
      field: The body, life and death
      gloss: cold; low temperature felt by the body
      source: {kind: inherited}
      concept: cold-noun
    - form: ghalmar
      class: adj
      field: The body, life and death
      gloss: hot; high in temperature
      source: {kind: inherited}
      concept: hot
    - form: dhalmar
      class: adj
      field: The body, life and death
      gloss: warm; comfortably above cool in temperature
      source: {kind: inherited}
      concept: warm
    - form: nelmar
      class: adj
      field: The body, life and death
      gloss: cool; mildly cold
      source: {kind: inherited}
      concept: cool
    - form: nelgathen
      class: v
      field: The body, life and death
      gloss: to freeze; to become or make frozen
      source: {kind: inherited}
      concept: freeze
    - form: khendathen
      class: v
      field: The body, life and death
      gloss: to burn; to consume or be consumed by fire, or to injure with heat
      source: {kind: inherited}
      concept: burn
    - form: ghelnon
      class: n n
      field: The body, life and death
      gloss: safety; freedom from danger
      source: {kind: inherited}
      concept: safety
    - form: dhornon
      class: n n
      field: The body, life and death
      gloss: danger; a condition in which harm threatens
      source: {kind: inherited}
      concept: danger
    - form: thendalon
      class: n n
      field: The body, life and death
      gloss: protection; the whole work of standing between someone and harm
      built: [théndathen, -alon]
      concept: protection
    - form: kurlis
      class: n f
      field: The body, life and death
      gloss: sex; sexual activity between people
      source: {kind: inherited}
      concept: sex
    - form: kenmathen
      class: v
      field: The body, life and death
      gloss: to conceive; to become pregnant
      source: {kind: inherited}
      concept: conceive
    - form: kenmis
      class: n f
      field: The body, life and death
      gloss: pregnancy; carrying a developing child in the womb
      source: {kind: inherited}
      concept: pregnancy
    - form: kenmar
      class: adj
      field: The body, life and death
      gloss: pregnant; carrying a child in the womb
      source: {kind: inherited}
      concept: pregnant
    - form: lughis
      class: n f
      field: The body, life and death
      gloss: birth; the coming of a child from the womb
      source: {kind: inherited}
      concept: birth
    - form: lugathen
      class: v
      field: The body, life and death
      gloss: to give birth; to bring a child into the world
      source: {kind: inherited}
      concept: give-birth
    - form: munathen
      class: v
      field: The body, life and death
      gloss: to nurse a child; to feed a child at the breast
      source: {kind: inherited}
      concept: nurse
    - form: tirgathen
      class: v
      field: The body, life and death
      gloss: to grow; to increase in size or develop
      source: {kind: inherited}
      concept: grow
    - form: urgathen
      class: v
      field: The body, life and death
      gloss: to age; to grow older
      source: {kind: inherited}
      concept: [age-verb, aging]
    - form: elthar
      class: adj
      field: The body, life and death
      gloss: healthy; hale in body
      source: {kind: inherited}
      concept: healthy
    - form: rusnar
      class: adj
      field: The body, life and death
      gloss: sick; ill
      source: {kind: inherited}
      concept: sick
    - form: ruskar
      class: adj
      field: The body, life and death
      gloss: injured; wounded
      source: {kind: inherited}
      concept: injured
    - form: ghendar
      class: adj
      field: The body, life and death
      gloss: strong; able to exert great bodily force
      source: {kind: inherited}
      concept: strong
    - form: anghendar
      class: adj
      field: The body, life and death
      gloss: weak; lacking strength
      built: [an-, ghendar]
      concept: weak
    - form: ghuri ghuri dhelar
      class: adj
      field: The body, life and death
      gloss: exhausted; extremely tired
      built: [ghuri, ghuri, dhelar]
      concept: exhausted
    - form: tamdar
      class: adj
      field: The body, life and death
      gloss: sated; full after eating or drinking
      source: {kind: inherited}
      concept: sated
    - form: neldar
      class: adj
      field: The body, life and death
      gloss: cold in temperature
      source: {kind: inherited}
      concept: cold
    - form: rusnar ghalmar
      class: adj
      field: The body, life and death
      gloss: feverish; hot from illness
      built: [rusnar, ghalmar]
      concept: feverish
    - form: ruskis
      class: n f
      field: The body, life and death
      gloss: pain; bodily hurt
      source: {kind: inherited}
      concept: pain
    - form: ruskathen
      class: v
      field: The body, life and death
      gloss: to hurt; to cause pain or injury to someone
      source: {kind: inherited}
      concept: hurt-verb
    - form: ruslen
      class: n n
      field: The body, life and death
      gloss: an ache; a persistent dull bodily pain
      source: {kind: inherited}
      concept: ache
    - form: rusnathen
      class: v
      field: The body, life and death
      gloss: to suffer; to endure pain or distress
      source: {kind: inherited}
      concept: suffer
    - form: rudhathen
      class: v
      field: The body, life and death
      gloss: to bleed; to lose blood
      source: {kind: inherited}
      concept: bleed
    - form: rusgethen
      class: v
      field: The body, life and death
      gloss: to heal; to close a wound or restore health
      source: {kind: inherited}
      concept: heal
    - form: elthenathen
      class: v
      field: The body, life and death
      gloss: to recover; to regain health or strength
      source: {kind: inherited}
      concept: recover
    - form: andulnar
      class: adj
      field: The body, life and death
      gloss: blind; unable to see
      source: {kind: inherited}
      concept: blind
    - form: suldar
      class: adj
      field: The body, life and death
      gloss: deaf; unable to hear
      source: {kind: inherited}
      concept: deaf
    - form: thodgar
      class: adj
      field: The body, life and death
      gloss: lame; having an impairment of walking
      source: {kind: inherited}
      concept: lame
    - form: elthnar
      class: adj
      field: The body, life and death
      gloss: alive; living
      source: {kind: inherited}
      concept: alive
    - form: grunnar
      class: adj
      field: The body, life and death
      gloss: conscious; awake and aware of oneself and surroundings
      source: {kind: inherited}
      concept: conscious
    - form: angrunnar
      class: adj
      field: The body, life and death
      gloss: unconscious; without awareness of oneself or surroundings
      built: [an-, grunnar]
      concept: unconscious
    - form: lughar
      class: adj
      field: The body, life and death
      gloss: young; early in life
      source: {kind: inherited}
      concept: young
    - form: urnar
      class: adj
      field: The body, life and death
      gloss: old in age; said of a living being
      source: {kind: inherited}
      concept: old
    - form: ruskis grunathen
      class: v
      field: The body, life and death
      gloss: to hurt; to experience bodily pain
      built: [ruskis, grunathen]
      concept: hurt-pain
    - form: úrkenalor
      class: n
      field: Kin, the clan and the name
      gloss: a grandparent; a parent of one's parent
      built: [uron, kénalor]
      concept: grandparent
    - form: semkhelon
      class: n m
      field: Kin, the clan and the name
      gloss: a nephew; the son of one's sibling
      source: {kind: inherited}
      concept: nephew
    - form: semkhela
      class: n f
      field: Kin, the clan and the name
      gloss: a niece; the daughter of one's sibling
      source: {kind: inherited}
      concept: niece
    - form: thalen
      class: n
      field: Kin, the clan and the name
      gloss: a spouse; a husband or wife
      source: {kind: inherited}
      concept: spouse
    - form: thalmon
      class: n n
      field: Kin, the clan and the name
      gloss: marriage; the recognized union of spouses
      source: {kind: inherited}
      concept: marriage
    - form: thalmathen
      class: v
      field: Kin, the clan and the name
      gloss: to marry; to enter a recognized union as spouses
      source: {kind: inherited}
      concept: marry
    - form: kenrison
      class: n n
      field: Kin, the clan and the name
      gloss: a lineage; a line of descent from ancestors, whether long or short
      source: {kind: inherited}
      concept: lineage
    - form: dhelsan
      class: n m
      field: Kin, the clan and the name
      gloss: a widower; a man whose spouse has died
      source: {kind: inherited}
      concept: widower
    - form: khernand
      class: n
      field: Kin, the clan and the name
      gloss: an enemy; a person opposed to or hostile to one
      source: {kind: inherited}
      concept: enemy
    - form: ankendar
      class: n
      field: Kin, the clan and the name
      gloss: a stranger; someone not known to one
      source: {kind: inherited}
      concept: stranger
    - form: mirand
      class: n
      field: Kin, the clan and the name
      gloss: a neighbor; someone dwelling nearby
      source: {kind: inherited}
      concept: neighbor
    - form: semrand
      class: n
      field: Kin, the clan and the name
      gloss: a companion; someone accompanying another
      source: {kind: inherited}
      concept: companion
    - form: maldand
      class: n
      field: Kin, the clan and the name
      gloss: a guest; someone received into another's home
      source: {kind: inherited}
      concept: guest
    - form: khalthand
      class: n
      field: Kin, the clan and the name
      gloss: a host; the person receiving a guest
      source: {kind: inherited}
      concept: host
    - form: uldand
      class: n
      field: Kin, the clan and the name
      gloss: a leader; someone who leads others
      built: [úldathen, -and]
      concept: leader
    - form: sendand
      class: n
      field: Kin, the clan and the name
      gloss: a follower; someone who follows another
      source: {kind: inherited}
      concept: follower
    - form: ghelrand
      class: n
      field: Kin, the clan and the name
      gloss: a servant; someone working in another's service
      source: {kind: inherited}
      concept: servant
    - form: ghethand
      class: n
      field: Kin, the clan and the name
      gloss: a master; a person having authority over another's service
      source: {kind: inherited}
      concept: master
    - form: sargand
      class: n
      field: Kin, the clan and the name
      gloss: a teacher; someone who helps another learn knowledge or a skill
      built: [sargethen, -and]
      concept: teacher
    - form: sargnand
      class: n
      field: Kin, the clan and the name
      gloss: a student; someone engaged in learning
      built: [sargnethen, -and]
      concept: student
    - form: khalnis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a room; an enclosed space within a building
      source: {kind: inherited}
      concept: room
    - form: kheldis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a ceiling; the inner upper surface of a room
      source: {kind: inherited}
      concept: ceiling
    - form: maldin
      class: n n
      field: The lodge, the fire and the guest
      gloss: a seat; a place or support for sitting
      source: {kind: inherited}
      concept: seat
    - form: dhornis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a jar; a broad-mouthed storage vessel
      source: {kind: inherited}
      concept: jar
    - form: sirthon
      class: n n
      field: The lodge, the fire and the guest
      gloss: a bottle; a narrow-necked vessel for liquids
      source: {kind: inherited}
      concept: bottle
    - form: lorghis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a basket; an open container woven from flexible strips
      source: {kind: inherited}
      concept: basket
    - form: ghilmon
      class: n n
      field: The lodge, the fire and the guest
      gloss: a bag; a flexible container carried with its contents
      source: {kind: inherited}
      concept: bag
    - form: ghordis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a rope; a thick twisted line for hauling or binding
      source: {kind: inherited}
      concept: rope
    - form: lordis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a cord; a thin twisted line for tying
      source: {kind: inherited}
      concept: cord
    - form: dirnis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a needle; a pointed tool for sewing
      source: {kind: inherited}
      concept: needle
    - form: khendris
      class: n f
      field: The lodge, the fire and the guest
      gloss: a flame; the visible burning part of a fire
      source: {kind: inherited}
      concept: flame
    - form: khendon
      class: n n
      field: The lodge, the fire and the guest
      gloss: smoke; the drifting product of a fire
      source: {kind: inherited}
      concept: smoke
    - form: ghesna
      class: n f
      field: The lodge, the fire and the guest
      gloss: ash; the fine residue of a burned thing
      source: {kind: inherited}
      concept: ash
    - form: khendul
      class: n n
      field: The lodge, the fire and the guest
      gloss: a coal; a piece of fuel glowing in a fire
      source: {kind: inherited}
      concept: coal
    - form: kirthon
      class: n n
      field: The lodge, the fire and the guest
      gloss: a torch; a carried stick bearing a flame
      source: {kind: inherited}
      concept: torch
    - form: murnon
      class: n n
      field: The lodge, the fire and the guest
      gloss: a candle; a wick set in a solid body of wax or fat
      source: {kind: inherited}
      concept: candle
    - form: sorkis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a garment; a single item of clothing
      source: {kind: inherited}
      concept: garment
    - form: thorkis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a shirt; a garment worn over the chest
      source: {kind: inherited}
      concept: shirt
    - form: ghalkis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a cloak; an outer cloth thrown over the shoulders
      source: {kind: inherited}
      concept: cloak
    - form: mordis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a belt; a band worn around the waist
      source: {kind: inherited}
      concept: belt
    - form: thodkis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a shoe; a covering for a foot
      source: {kind: inherited}
      concept: shoe
    - form: ghorth thodkis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a boot; a shoe with a high covering for the ankle or lower leg
      built: [ghorth, thodkis]
      concept: boot
    - form: gandon
      class: n n
      field: The lodge, the fire and the guest
      gloss: a gate; a barrier opened to let people or animals through
      source: {kind: inherited}
      concept: gate
    - form: grundis
      class: n f
      field: The lodge, the fire and the guest
      gloss: a barrier; something that blocks passage
      source: {kind: inherited}
      concept: barrier
    - form: saldon
      class: n n
      field: The lodge, the fire and the guest
      gloss: wood; timber as a material for craft or fuel
      source: {kind: inherited}
      concept: wood
    - form: kergis
      class: n f
      field: The lodge, the fire and the guest
      gloss: stone; rock as a material or a piece of it
      source: {kind: inherited}
      concept: [stone, rock]
    - form: gheron
      class: n n
      field: The lodge, the fire and the guest
      gloss: metal; the material worked at a forge
      source: {kind: inherited}
      concept: metal
    - form: mundis
      class: n f
      field: The lodge, the fire and the guest
      gloss: clay; fine earth that can be shaped when wet
      source: {kind: inherited}
      concept: clay
    - form: lurmon
      class: n n
      field: The lodge, the fire and the guest
      gloss: leather; animal hide prepared as a material
      source: {kind: inherited}
      concept: leather
    - form: omrila
      class: n f
      field: The lodge, the fire and the guest
      gloss: wool; the soft fleece fiber of a sheep, used in spinning and weaving
      source: {kind: inherited}
      concept: wool
    - form: ghol
      class: part
      field: Doing, going and being
      gloss: out; outside; outward from an interior; a named place follows it, while ghol nímathen means to exhale
      source: {kind: inherited}
      concept: outside
    - form: ghorth
      class: adj
      field: Doing, going and being
      gloss: high; reaching well above its base, in ghorth thodkis, a boot
      source: {kind: inherited}
      concept: [high, tall]
    - form: mirlis
      class: n f
      field: Mountain, snow and stone
      gloss: earth; soil; the loose ground in which plants grow
      source: {kind: inherited}
      concept: [earth, soil]
    - form: kerlis
      class: n f
      field: Mountain, snow and stone
      gloss: sand; loose grains of worn rock
      source: {kind: inherited}
      concept: sand
    - form: sira mirlis
      class: n f
      field: Mountain, snow and stone
      gloss: mud; earth saturated with water
      built: [sira, mirlis]
      concept: mud
    - form: kermis
      class: n f
      field: Mountain, snow and stone
      gloss: dust; very fine dry particles of earth or other matter
      source: {kind: inherited}
      concept: dust
    - form: mirlon
      class: n n
      field: Mountain, snow and stone
      gloss: land; ground or country considered apart from water, whether used by a clan or not
      source: {kind: inherited}
      concept: land
    - form: tirgon
      class: n n
      field: Mountain, snow and stone
      gloss: a plain; a broad expanse of flat open land
      source: {kind: inherited}
      concept: plain-landform
    - form: kerlon
      class: n f
      field: Mountain, snow and stone
      gloss: a cave; a natural hollow extending into rock
      source: {kind: inherited}
      concept: cave
    - form: sirnon
      class: n n
      field: Mountain, snow and stone
      gloss: a river; a substantial natural course of running water, above or below the tree line
      source: {kind: inherited}
      concept: river
    - form: dulnon
      class: n n
      field: Mountain, snow and stone
      gloss: a lake; a body of standing inland water of any size or location
      source: {kind: inherited}
      concept: lake
    - form: siraalon
      class: n n
      field: Mountain, snow and stone
      gloss: the sea; the ocean; the great body of salt water beyond the land
      built: [sira, -alon]
      concept: [sea, ocean]
    - form: rápalo
      class: n n
      field: Mountain, snow and stone
      gloss: rain; water falling from clouds
      source: {kind: borrowed, language: skill-sinalelng, form: ravatto}
      concept: rain
    - form: nelthon
      class: n n
      field: Mountain, snow and stone
      gloss: ice; frozen water
      source: {kind: inherited}
      concept: ice
    - form: pelpai
      class: n n
      field: Mountain, snow and stone
      gloss: a cloud; any mass of visible moisture suspended in the sky in ordinary Áelendi usage; the Sinale source pelvai specifically names low cloud
      source: {kind: borrowed, language: skill-sinalelng, form: pelvai}
      concept: cloud
    - form: sathron
      class: n n
      field: Mountain, snow and stone
      gloss: wind; moving air
      source: {kind: inherited}
      concept: wind
    - form: ghursthon
      class: n n
      field: Mountain, snow and stone
      gloss: a storm; violent wind with rain, snow or thunder
      source: {kind: inherited}
      concept: storm
    - form: dranon
      class: n n
      field: Mountain, snow and stone
      gloss: thunder; the rumbling sound following lightning
      source: {kind: inherited}
      concept: thunder
    - form: mirnon
      class: n n
      field: Mountain, snow and stone
      gloss: a plant; a growing thing rooted in the ground
      source: {kind: inherited}
      concept: plant
    - form: salpu
      class: n n
      field: Mountain, snow and stone
      gloss: a tree; a tall woody plant with a main trunk
      source: {kind: borrowed, language: skill-sinalelng, form: salpu}
      concept: tree
    - form: nilki
      class: n n
      field: Mountain, snow and stone
      gloss: a root; any part of a plant growing into the ground in ordinary Áelendi usage; the Sinale source nylki specifically names the deep root
      source: {kind: borrowed, language: skill-sinalelng, form: nylki}
      concept: root
    - form: pattel
      class: n m
      field: Mountain, snow and stone
      gloss: a branch; a woody limb of a tree
      source: {kind: borrowed, language: skill-sinalelng, form: vattel}
      concept: branch
    - form: saiki
      class: n n
      field: Mountain, snow and stone
      gloss: a flower; the blossom of a plant
      source: {kind: borrowed, language: skill-sinalelng, form: saiki}
      concept: flower
    - form: marnis
      class: n f
      field: Mountain, snow and stone
      gloss: fruit; the seed-bearing produce of a plant, especially when edible
      source: {kind: inherited}
      concept: fruit
    - form: ghirna
      class: n f
      field: Mountain, snow and stone
      gloss: grass; low narrow-leaved plants eaten by grazing herds
      source: {kind: inherited}
      concept: grass
    - form: ghurnon
      class: n n
      field: Mountain, snow and stone
      gloss: an animal; a beast; a living creature that moves and feeds
      source: {kind: inherited}
      concept: [animal, beast]
    - form: rinnis
      class: n f
      field: Mountain, snow and stone
      gloss: a bird; a feathered animal with wings
      source: {kind: inherited}
      concept: bird
    - form: selkon
      class: n n
      field: Mountain, snow and stone
      gloss: a fish; a finned animal living in water
      source: {kind: inherited}
      concept: fish
    - form: kethnis
      class: n f
      field: Mountain, snow and stone
      gloss: an insect; a small six-legged creature
      source: {kind: inherited}
      concept: insect
    - form: mulnis
      class: n f
      field: Mountain, snow and stone
      gloss: a worm; a small soft-bodied creeping creature without legs
      source: {kind: inherited}
      concept: worm
    - form: sirnar
      class: adj
      field: Mountain, snow and stone
      gloss: wet; covered with or containing water
      source: {kind: inherited}
      concept: wet
    - form: dhalnar
      class: adj
      field: Mountain, snow and stone
      gloss: dry; free of moisture
      source: {kind: inherited}
      concept: dry
    - form: nonduk pelpai elnathen
      class: v
      field: Mountain, snow and stone
      gloss: clear weather; no cloud exists; a weather report on the present sky
      built: [nonduk, pelpai, elnathen]
      concept: clear-weather
    - form: ghurnar pelpai elnathen
      class: v
      field: Mountain, snow and stone
      gloss: cloudy; many clouds exist; a weather report on the present sky
      built: [ghurnar, pelpai, elnathen]
      concept: cloudy
    - form: nelgon
      class: n n
      field: Mountain, snow and stone
      gloss: north; the direction northward
      source: {kind: inherited}
      concept: north
    - form: dhalgon
      class: n n
      field: Mountain, snow and stone
      gloss: south; the direction southward
      source: {kind: inherited}
      concept: south
    - form: elnathen
      class: v
      field: Doing, going and being
      gloss: to exist; to be present in the world
      source: {kind: inherited}
      concept: exist
    - form: telgathen
      class: v
      field: Doing, going and being
      gloss: to belong; to be someone's possession or part of a group
      source: {kind: inherited}
      concept: belong
    - form: ternathen
      class: v
      field: Doing, going and being
      gloss: to become; to come to be something
      source: {kind: inherited}
      concept: become
    - form: tendathen
      class: v
      field: Doing, going and being
      gloss: to remain; to stay where or as one is
      source: {kind: inherited}
      concept: remain
    - form: darnathen
      class: v
      field: Doing, going and being
      gloss: to leave; to depart from a place
      source: {kind: inherited}
      concept: leave
    - form: garnathen
      class: v
      field: Doing, going and being
      gloss: to arrive; to reach a destination
      source: {kind: inherited}
      concept: arrive
    - form: murnathen
      class: v
      field: Doing, going and being
      gloss: to crawl; to move close to the ground on the limbs
      source: {kind: inherited}
      concept: crawl
    - form: ronkathen
      class: v
      field: Doing, going and being
      gloss: to climb; to ascend using one's limbs
      source: {kind: inherited}
      concept: climb
    - form: thorgathen
      class: v
      field: Doing, going and being
      gloss: to jump; to spring clear of the ground
      source: {kind: inherited}
      concept: jump
    - form: ris rógathen
      class: v
      field: Doing, going and being
      gloss: to enter; to go into a place
      built: [ris, rógathen]
      concept: enter
    - form: ghol rógathen
      class: v
      field: Doing, going and being
      gloss: to exit; to go out of a place
      built: [ghol, rógathen]
      concept: exit
    - form: rengathen
      class: v
      field: Doing, going and being
      gloss: to return; to go or come back
      source: {kind: inherited}
      concept: return
    - form: sendathen
      class: v
      field: Doing, going and being
      gloss: to follow; to move after someone or take their lead
      source: {kind: inherited}
      concept: follow
    - form: gerathen
      class: v
      field: Doing, going and being
      gloss: to move; to change position or make something change position
      source: {kind: inherited}
      concept: move
    - form: thurnethen
      class: v
      field: Doing, going and being
      gloss: to push; to press something away
      source: {kind: inherited}
      concept: push
    - form: dromathen
      class: v
      field: Doing, going and being
      gloss: to pull; to draw something toward oneself
      source: {kind: inherited}
      concept: pull
    - form: rongethen
      class: v
      field: Doing, going and being
      gloss: to lift; to raise something
      source: {kind: inherited}
      concept: lift
    - form: lurgethen
      class: v
      field: Doing, going and being
      gloss: to drop; to let something fall
      source: {kind: inherited}
      concept: drop
    - form: ghentathen
      class: v
      field: Doing, going and being
      gloss: to throw; to cast something through the air
      source: {kind: inherited}
      concept: throw
    - form: grondathen
      class: v
      field: Doing, going and being
      gloss: to catch; to seize something moving
      source: {kind: inherited}
      concept: catch
    - form: kergathen
      class: v
      field: Doing, going and being
      gloss: to break; to separate or damage something so that it is not whole
      source: {kind: inherited}
      concept: break
    - form: ghurgethen
      class: v
      field: Doing, going and being
      gloss: to destroy; to ruin something beyond use or restoration
      source: {kind: inherited}
      concept: destroy
    - form: kergethen
      class: v
      field: Doing, going and being
      gloss: to repair; to restore something damaged to working order
      source: {kind: inherited}
      concept: repair
    - form: tergathen
      class: v
      field: Doing, going and being
      gloss: to change; to become different or make something different
      source: {kind: inherited}
      concept: change-verb
    - form: ronathen
      class: v
      field: Doing, going and being
      gloss: to tell; to communicate an account or information to someone
      source: {kind: inherited}
      concept: tell
    - form: kernathen
      class: v
      field: Doing, going and being
      gloss: to ask; to request an answer or something wanted
      source: {kind: inherited}
      concept: ask
    - form: kelnathen
      class: v
      field: Doing, going and being
      gloss: to answer; to respond to a question or request
      source: {kind: inherited}
      concept: answer
    - form: rundathen
      class: v
      field: Doing, going and being
      gloss: to call; to address or summon someone aloud
      source: {kind: inherited}
      concept: call
    - form: ris soldar rundis rúnathen
      class: v
      field: Doing, going and being
      gloss: to shout; to speak in a loud voice
      built: [ris, soldar, rundis, rúnathen]
      concept: shout
    - form: ris nimon rundis rúnathen
      class: v
      field: Doing, going and being
      gloss: to whisper; to speak in the breath voice, an unvoiced voice
      built: [ris, nimon, rundis, rúnathen]
      concept: whisper
    - form: sargrethen
      class: v
      field: Doing, going and being
      gloss: to explain; to make a meaning or reason understandable
      source: {kind: inherited}
      concept: explain
    - form: lenthathen
      class: v
      field: Doing, going and being
      gloss: to name; to give or state a name
      source: {kind: inherited}
      concept: name-verb
    - form: sarnis dhárkathen
      class: v
      field: Doing, going and being
      gloss: to believe; to hold a belief that a claim is true
      built: [sarnis, dhárkathen]
      concept: believe
    - form: sarnathen
      class: v
      field: Doing, going and being
      gloss: to understand; to grasp the meaning of something
      source: {kind: inherited}
      concept: understand
    - form: moghathen
      class: v
      field: Doing, going and being
      gloss: to remember; to bring or keep something in memory
      source: {kind: inherited}
      concept: remember
    - form: anmoghathen
      class: v
      field: Doing, going and being
      gloss: to forget; to fail to retain or recall something in memory
      built: [an-, moghathen]
      concept: forget
    - form: sargnethen
      class: v
      field: Doing, going and being
      gloss: to learn; to acquire knowledge or a skill
      source: {kind: inherited}
      concept: learn
    - form: sargethen
      class: v
      field: Doing, going and being
      gloss: to teach; to help someone acquire knowledge or a skill
      source: {kind: inherited}
      concept: teach
    - form: thargathen
      class: v
      field: Doing, going and being
      gloss: to decide; to settle a choice or question
      source: {kind: inherited}
      concept: decide
    - form: dirmathen
      class: v
      field: Doing, going and being
      gloss: to imagine; to form a picture or possibility in the mind
      source: {kind: inherited}
      concept: imagine
    - form: tarnathen
      class: v
      field: Doing, going and being
      gloss: to need; to require something for life or a purpose
      source: {kind: inherited}
      concept: need-verb
    - form: sénthira dhárkathen
      class: v
      field: Doing, going and being
      gloss: to hope; to hold hope for something
      built: [sénthira, dhárkathen]
      concept: hope-verb
    - form: dhernathen
      class: v
      field: Doing, going and being
      gloss: to intend; to mean to do something
      source: {kind: inherited}
      concept: intend
    - form: dalgathen
      class: v
      field: Doing, going and being
      gloss: to choose; to select from alternatives
      source: {kind: inherited}
      concept: choose
    - form: dalgethen
      class: v
      field: Doing, going and being
      gloss: to prefer; to choose or favor one thing over another
      source: {kind: inherited}
      concept: prefer
    - form: ghernathen
      class: v
      field: Doing, going and being
      gloss: to try; to make an attempt
      source: {kind: inherited}
      concept: try
    - form: sornathen
      class: v
      field: Doing, going and being
      gloss: to search; to look for something
      source: {kind: inherited}
      concept: search
    - form: semnathen
      class: v
      field: Doing, going and being
      gloss: to meet; to come together with someone
      source: {kind: inherited}
      concept: meet
    - form: kenthathen
      class: v
      field: Doing, going and being
      gloss: to help; to give aid
      source: {kind: inherited}
      concept: help
    - form: mirdathen
      class: v
      field: Doing, going and being
      gloss: to share; to divide something for others to use or receive
      source: {kind: inherited}
      concept: share
    - form: gherdathen
      class: v
      field: Doing, going and being
      gloss: to trade; to exchange goods or services
      source: {kind: inherited}
      concept: trade
    - form: dhesathen
      class: v
      field: Doing, going and being
      gloss: to buy; to acquire something for a price
      source: {kind: inherited}
      concept: buy
    - form: dhesgethen
      class: v
      field: Doing, going and being
      gloss: to sell; to give something in return for a price
      source: {kind: inherited}
      concept: sell
    - form: nolgrathen
      class: v
      field: Doing, going and being
      gloss: to promise; to give one's word to do something
      source: {kind: inherited}
      concept: promise-verb
    - form: laghnathen
      class: v
      field: Doing, going and being
      gloss: to thank; to express gratitude to someone
      source: {kind: inherited}
      concept: thank-verb
    - form: dhelmethen
      class: v
      field: Doing, going and being
      gloss: to forgive; to let go of blame for a wrong
      source: {kind: inherited}
      concept: forgive-verb
    - form: nongathen
      class: v
      field: Doing, going and being
      gloss: to refuse; to decline a request, offer or action
      source: {kind: inherited}
      concept: refuse-verb
    - form: semgathen
      class: v
      field: Doing, going and being
      gloss: to agree; to hold the same view or accept a proposal
      source: {kind: inherited}
      concept: agree-verb
    - form: thrukathen
      class: v
      field: Doing, going and being
      gloss: to hit; to strike a blow
      source: {kind: inherited}
      concept: hit
    - form: dhongethen
      class: v
      field: Doing, going and being
      gloss: to kill; to cause death
      source: {kind: inherited}
      concept: kill
    - form: drangathen
      class: v
      field: Doing, going and being
      gloss: to attack; to begin using force against someone or something
      source: {kind: inherited}
      concept: attack
    - form: ghirnathen
      class: v
      field: Doing, going and being
      gloss: to flee; to run away from danger
      source: {kind: inherited}
      concept: flee
    - form: dhornathen
      class: v
      field: Doing, going and being
      gloss: to threaten; to indicate an intention to cause harm
      source: {kind: inherited}
      concept: threaten
    - form: taldathen
      class: v
      field: Doing, going and being
      gloss: to stop; to cease moving or acting, or make something cease
      source: {kind: inherited}
      concept: stop
    - form: tengathen
      class: v
      field: Doing, going and being
      gloss: to continue; to carry on an action
      source: {kind: inherited}
      concept: continue
    - form: ghaldathen
      class: v
      field: Doing, going and being
      gloss: to wait; to stay until something happens
      source: {kind: inherited}
      concept: wait
    - form: eldathen
      class: v
      field: Doing, going and being
      gloss: to happen; to occur
      source: {kind: inherited}
      concept: happen
    - form: gurdathen
      class: v
      field: Doing, going and being
      gloss: to kneel; to rest on the knees
      source: {kind: inherited}
      concept: kneel
    - form: kurdathen
      class: v
      field: Doing, going and being
      gloss: to bend; to curve or fold from a straight position
      source: {kind: inherited}
      concept: bend
    - form: renthathen
      class: v
      field: Doing, going and being
      gloss: to lean; to incline while supported
      source: {kind: inherited}
      concept: lean
    - form: sorkethen
      class: v
      field: Doing, going and being
      gloss: to cover; to place something over a thing
      source: {kind: inherited}
      concept: cover-verb
    - form: ansorkethen
      class: v
      field: Doing, going and being
      gloss: to uncover; to remove a covering
      built: [an-, sorkethen]
      concept: uncover
    - form: thalkathen
      class: v
      field: Doing, going and being
      gloss: to hide; to keep from being seen or found
      source: {kind: inherited}
      concept: hide
    - form: anthalkathen
      class: v
      field: Doing, going and being
      gloss: to reveal; to make something hidden known or visible
      built: [an-, thalkathen]
      concept: reveal
    - form: grundathen
      class: v
      field: Doing, going and being
      gloss: to lock; to secure with a lock
      source: {kind: inherited}
      concept: lock-verb
    - form: angrundathen
      class: v
      field: Doing, going and being
      gloss: to unlock; to release a lock
      built: [an-, grundathen]
      concept: unlock
    - form: mundri
      class: pron
      field: Numbers and grammar words
      gloss: my; mine; belonging to the speaker
      source: {kind: inherited}
      concept: my
    - form: tosri
      class: pron
      field: Numbers and grammar words
      gloss: your; yours; belonging to the person addressed
      source: {kind: inherited}
      concept: your
    - form: nusri
      class: pron
      field: Numbers and grammar words
      gloss: our; ours; belonging to the speaker and others
      source: {kind: inherited}
      concept: our
    - form: ghen
      class: pron
      field: Numbers and grammar words
      gloss: he; she; it; a single person or thing already mentioned
      source: {kind: inherited}
      concept: [he, she, it]
    - form: ghenra
      class: pron
      field: Numbers and grammar words
      gloss: they; the people or things already mentioned
      source: {kind: inherited}
      concept: they
    - form: ti
      class: dem
      field: Numbers and grammar words
      gloss: this; the single thing close to the speaker
      source: {kind: inherited}
      concept: this
    - form: to
      class: dem
      field: Numbers and grammar words
      gloss: that; the single thing away from the speaker
      source: {kind: inherited}
      concept: that
    - form: tira
      class: dem
      field: Numbers and grammar words
      gloss: these; the things close to the speaker
      source: {kind: inherited}
      concept: these
    - form: tora
      class: dem
      field: Numbers and grammar words
      gloss: those; the things away from the speaker
      source: {kind: inherited}
      concept: those
    - form: kendar
      class: pron
      field: Numbers and grammar words
      gloss: someone; an unspecified person
      source: {kind: inherited}
      concept: someone
    - form: kendar neli
      class: pron
      field: Numbers and grammar words
      gloss: anyone; any person without restriction
      built: [kendar, neli]
      concept: anyone
    - form: ghenal
      class: pron
      field: Numbers and grammar words
      gloss: everyone; all persons in the group meant
      source: {kind: inherited}
      concept: everyone
    - form: nond kendar
      class: pron
      field: Numbers and grammar words
      gloss: no one; no person
      built: [nond, kendar]
      concept: no-one
    - form: tendar
      class: pron
      field: Numbers and grammar words
      gloss: something; an unspecified thing
      source: {kind: inherited}
      concept: something
    - form: tendar neli
      class: pron
      field: Numbers and grammar words
      gloss: anything; any thing without restriction
      built: [tendar, neli]
      concept: anything
    - form: tendal
      class: pron
      field: Numbers and grammar words
      gloss: everything; all things in the scope meant
      source: {kind: inherited}
      concept: everything
    - form: ghir
      class: pron
      field: Numbers and grammar words
      gloss: self; oneself; as object, refers back to the subject of the same clause, as mund ghir nórethen, I see myself
      source: {kind: inherited}
      concept: self
    - form: derar
      class: adj
      field: Numbers and grammar words
      gloss: other; different from the one mentioned
      source: {kind: inherited}
      concept: other
    - form: uk derar
      class: pron
      field: Numbers and grammar words
      gloss: another; one other person or thing
      built: [uk, derar]
      concept: another
    - form: semar
      class: adj
      field: Numbers and grammar words
      gloss: the same; identical with the thing mentioned
      source: {kind: inherited}
      concept: same
    - form: ansemar
      class: adj
      field: Numbers and grammar words
      gloss: different; not the same
      built: [an-, semar]
      concept: different
    - form: neli
      class: part
      field: Doing, going and being
      gloss: without restriction; follows kendar or tendar in anyone and anything
      source: {kind: inherited}
    - form: tis
      class: adv
      field: Numbers and grammar words
      gloss: here; at the speaker's place
      source: {kind: inherited}
      concept: here
    - form: ghor
      class: adv
      field: Numbers and grammar words
      gloss: there; at a place away from the speaker
      source: {kind: inherited}
      concept: there
    - form: ris kren miron
      class: part
      field: Numbers and grammar words
      gloss: somewhere; in some unspecified place
      built: [ris, kren, miron]
      concept: somewhere
    - form: ris nonduk miron
      class: part
      field: Numbers and grammar words
      gloss: nowhere; in no place
      built: [ris, nonduk, miron]
      concept: nowhere
    - form: ris alnar miron
      class: part
      field: Numbers and grammar words
      gloss: everywhere; in all places in the scope meant
      built: [ris, alnar, miron]
      concept: everywhere
    - form: kenri
      class: adj
      field: Numbers and grammar words
      gloss: near; close in distance
      source: {kind: inherited}
      concept: near
    - form: dular
      class: adj
      field: Numbers and grammar words
      gloss: far; distant
      source: {kind: inherited}
      concept: far
    - form: thes
      class: part
      field: Numbers and grammar words
      gloss: beside; at the side of, placed before the reference noun
      source: {kind: inherited}
      concept: beside
    - form: ghuth
      class: part
      field: Numbers and grammar words
      gloss: between named things; among a named group; placed before the reference noun or list of things
      source: {kind: inherited}
      concept: [between, among]
    - form: ghith
      class: part
      field: Numbers and grammar words
      gloss: below; under; lower than the reference noun that follows
      source: {kind: inherited}
      concept: [below, under]
    - form: ghoth
      class: part
      field: Numbers and grammar words
      gloss: beyond; on the farther side of the place named after it
      source: {kind: inherited}
      concept: beyond
    - form: thren
      class: part
      field: Numbers and grammar words
      gloss: in front of in space; before in time; precedes the reference noun or time
      source: {kind: inherited}
      concept: [before-spatial, before-time]
    - form: dren
      class: part
      field: Numbers and grammar words
      gloss: behind in space; after in time; precedes the reference noun or time
      source: {kind: inherited}
      concept: [behind, after]
    - form: ghil
      class: n n
      field: Numbers and grammar words
      gloss: the left; the direction to the left side
      source: {kind: inherited}
      concept: left-direction
    - form: gholm
      class: n n
      field: Numbers and grammar words
      gloss: the right; the direction to the right side
      source: {kind: inherited}
      concept: right-direction
    - form: murnel
      class: n n
      field: Numbers and grammar words
      gloss: the center; the middle place
      source: {kind: inherited}
      concept: center
    - form: ghrin
      class: adv
      field: Numbers and grammar words
      gloss: up; toward a higher place
      source: {kind: inherited}
      concept: up
    - form: lur
      class: adv
      field: Numbers and grammar words
      gloss: down; toward a lower place
      source: {kind: inherited}
      concept: down
    - form: threnar
      class: adv
      field: Numbers and grammar words
      gloss: forward; toward the space in front
      source: {kind: inherited}
      concept: forward
    - form: drenar
      class: adv
      field: Numbers and grammar words
      gloss: backward; toward the space behind
      source: {kind: inherited}
      concept: backward
    - form: ghirth
      class: part
      field: Numbers and grammar words
      gloss: to; toward; precedes a destination
      source: {kind: inherited}
      concept: [toward, to]
    - form: ghurth
      class: adv
      field: Numbers and grammar words
      gloss: away; farther from the present place
      source: {kind: inherited}
      concept: away
    - form: ghrel
      class: part
      field: Numbers and grammar words
      gloss: through; by way of an interior; precedes the thing passed through
      source: {kind: inherited}
      concept: through
    - form: ghand
      class: part
      field: Numbers and grammar words
      gloss: across; from one side to the other of the thing named after it
      source: {kind: inherited}
      concept: across
    - form: krel
      class: part
      field: Numbers and grammar words
      gloss: around; on all sides of or circling the thing named after it
      source: {kind: inherited}
      concept: around
    - form: ghal
      class: part
      field: Numbers and grammar words
      gloss: on; supported by the surface of the noun that follows
      source: {kind: inherited}
      concept: on
    - form: nal
      class: part
      field: Numbers and grammar words
      gloss: at; located at the place or event named after it
      source: {kind: inherited}
      concept: at
    - form: threl
      class: part
      field: Numbers and grammar words
      gloss: from; precedes a source or point of departure
      source: {kind: inherited}
      concept: from
    - form: miron
      class: n n
      field: Numbers and grammar words
      gloss: a place; a location
      source: {kind: inherited}
      concept: place-noun
    - form: taldis
      class: n f
      field: Numbers and grammar words
      gloss: a position; a place in a physical arrangement or ordered series
      source: {kind: inherited}
      concept: position
    - form: terdis
      class: n f
      field: Numbers and grammar words
      gloss: a direction; the way toward which something faces or moves
      source: {kind: inherited}
      concept: direction
    - form: dulnis
      class: n f
      field: Numbers and grammar words
      gloss: distance; the space separating things or places
      source: {kind: inherited}
      concept: distance
    - form: nul
      class: num
      field: Numbers and grammar words
      gloss: zero; the number for no quantity
      source: {kind: inherited}
      concept: zero
    - form: ris ordhur taldis
      class: part
      field: Numbers and grammar words
      gloss: fourth; in position four; replace ordhur with any numeral to express that ordinal position, as ris rethik taldis, fifth
      built: [ris, ordhur, taldis]
      concept: ordinal-construction
    - form: dhima dhima
      class: n f
      field: Numbers and grammar words
      gloss: a quarter; half of a half
      built: [dhima, dhima]
      concept: quarter
    - form: alnar
      class: adj
      field: Numbers and grammar words
      gloss: whole; entire and undivided; all of a stated set or quantity
      source: {kind: inherited}
      concept: [whole, all]
    - form: kren
      class: pron
      field: Numbers and grammar words
      gloss: some; an unspecified portion or number
      source: {kind: inherited}
      concept: some
    - form: ghul
      class: adj
      field: Numbers and grammar words
      gloss: much; a large quantity of an uncounted thing
      source: {kind: inherited}
      concept: much
    - form: send
      class: adj
      field: Numbers and grammar words
      gloss: little; a small quantity of an uncounted thing
      source: {kind: inherited}
      concept: little-quantity
    - form: tamar
      class: adj
      field: Numbers and grammar words
      gloss: enough; sufficient for the need or purpose
      source: {kind: inherited}
      concept: enough
    - form: gherin
      class: adv
      field: Numbers and grammar words
      gloss: more; in greater quantity or degree
      source: {kind: inherited}
      concept: more
    - form: gherin thinar ukal derar gharon
      class: adv
      field: Numbers and grammar words
      gloss: most; more in quantity or degree than each other thing in the comparison
      built: [gherin, thinar, ukal, derar, gharon]
      concept: most
    - form: thinen thinar ukal derar gharon
      class: adv
      field: Numbers and grammar words
      gloss: least; less in quantity or degree than each other thing in the comparison
      built: [thinen, thinar, ukal, derar, gharon]
      concept: least
    - form: semnar
      class: adj
      field: Numbers and grammar words
      gloss: equal; the same in quantity, measure or degree
      source: {kind: inherited}
      concept: equal
    - form: ukal
      class: pron
      field: Numbers and grammar words
      gloss: each; every; each member of the set taken individually
      source: {kind: inherited}
      concept: [each, every]
    - form: thend
      class: pron
      field: Numbers and grammar words
      gloss: both; the two of the pair taken together
      source: {kind: inherited}
      concept: both
    - form: uk threl thend
      class: pron
      field: Numbers and grammar words
      gloss: either; one chosen from the two of a pair
      built: [uk, threl, thend]
      concept: either
    - form: nonduk threl thend
      class: pron
      field: Numbers and grammar words
      gloss: neither; no member chosen from the two of a pair
      built: [nonduk, threl, thend]
      concept: neither
    - form: narin
      class: adv
      field: Numbers and grammar words
      gloss: about; approximately a stated quantity
      source: {kind: inherited}
      concept: about
    - form: ghenin
      class: adv
      field: Numbers and grammar words
      gloss: almost; near to the stated quantity or condition but short of it
      source: {kind: inherited}
      concept: almost
    - form: temin
      class: adv
      field: Numbers and grammar words
      gloss: exactly; with no difference from the stated quantity or meaning
      source: {kind: inherited}
      concept: exactly
    - form: dhelnon
      class: n n
      field: Numbers and grammar words
      gloss: a number; a value in counting
      source: {kind: inherited}
      concept: number
    - form: menthis
      class: n f
      field: Numbers and grammar words
      gloss: an amount; a quantity of something
      source: {kind: inherited}
      concept: amount
    - form: menthathen
      class: v
      field: Numbers and grammar words
      gloss: to measure; to determine an amount or extent by a standard
      source: {kind: inherited}
      concept: measure-verb
    - form: dhelnathen
      class: v
      field: Numbers and grammar words
      gloss: to count; to determine how many there are
      source: {kind: inherited}
      concept: count-verb
    - form: kirdis
      class: n f
      field: Light, sky and the turning year
      gloss: time; the passage or duration in which events occur
      source: {kind: inherited}
      concept: time
    - form: kirlis
      class: n f
      field: Light, sky and the turning year
      gloss: a moment; a very short span of time
      source: {kind: inherited}
      concept: moment
    - form: kirnis
      class: n f
      field: Light, sky and the turning year
      gloss: morning; the early part of the day
      source: {kind: inherited}
      concept: morning
    - form: murnel óssenda
      class: n f
      field: Light, sky and the turning year
      gloss: midnight; the middle of the night
      built: [murnel, óssenda]
      concept: midnight
    - form: ghin
      class: adv
      field: Light, sky and the turning year
      gloss: now; at the present time
      source: {kind: inherited}
      concept: now
    - form: ghond
      class: adv
      field: Light, sky and the turning year
      gloss: then; at that time
      source: {kind: inherited}
      concept: then
    - form: ti kiron
      class: n n
      field: Light, sky and the turning year
      gloss: today; this day
      built: [ti, kiron]
      concept: today
    - form: thernir
      class: n n
      field: Light, sky and the turning year
      gloss: yesterday; the day before today
      source: {kind: inherited}
      concept: yesterday
    - form: dernir
      class: n n
      field: Light, sky and the turning year
      gloss: tomorrow; the day after today
      source: {kind: inherited}
      concept: tomorrow
    - form: moghra
      class: n f
      field: Light, sky and the turning year
      gloss: the past; the time before the present
      source: {kind: inherited}
      concept: past
    - form: ghindon
      class: n n
      field: Light, sky and the turning year
      gloss: the present; the current time
      source: {kind: inherited}
      concept: present
    - form: ghernon
      class: n n
      field: Light, sky and the turning year
      gloss: the future; time after the present
      source: {kind: inherited}
      concept: future
    - form: ris kirdis
      class: part
      field: Light, sky and the turning year
      gloss: during; within the time of the event named before kirdis
      built: [ris, kirdis]
      concept: during
    - form: sendrel
      class: conj
      field: Light, sky and the turning year
      gloss: while; during the time that the following clause is true
      source: {kind: inherited}
      concept: while
    - form: tend
      class: part
      field: Light, sky and the turning year
      gloss: until; up to the time or event named after it
      source: {kind: inherited}
      concept: until
    - form: ghrend
      class: part
      field: Light, sky and the turning year
      gloss: since; from the time or event named after it through the present
      source: {kind: inherited}
      concept: since-time
    - form: algin
      class: adv
      field: Light, sky and the turning year
      gloss: always; at every time in the scope meant
      source: {kind: inherited}
      concept: always
    - form: ghurnin
      class: adv
      field: Light, sky and the turning year
      gloss: often; on many occasions
      source: {kind: inherited}
      concept: often
    - form: kren kirdis
      class: n f
      field: Light, sky and the turning year
      gloss: sometimes; at some times
      built: [kren, kirdis]
      concept: sometimes
    - form: sendin
      class: adv
      field: Light, sky and the turning year
      gloss: rarely; on few occasions
      source: {kind: inherited}
      concept: rarely
    - form: nengin
      class: adv
      field: Light, sky and the turning year
      gloss: never; at no time
      source: {kind: inherited}
      concept: never
    - form: ghrenar
      class: adj
      field: Light, sky and the turning year
      gloss: lasting; continuing for a long or sustained time
      source: {kind: inherited}
      concept: [long-duration, lasting-duration]
    - form: sendren
      class: adj
      field: Light, sky and the turning year
      gloss: short in duration; brief
      source: {kind: inherited}
      concept: [short-duration, brief-duration]
    - form: grend
      class: adv
      field: Light, sky and the turning year
      gloss: again; another time
      source: {kind: inherited}
      concept: [again, expression-again]
    - form: nal uk kirdin
      class: part
      field: Light, sky and the turning year
      gloss: once; on one occasion
      built: [nal, uk, kirdin]
      concept: once
    - form: nal ta kirdin
      class: part
      field: Light, sky and the turning year
      gloss: twice; on two occasions
      built: [nal, ta, kirdin]
      concept: twice
    - form: nal ghurnar kirdin
      class: part
      field: Light, sky and the turning year
      gloss: repeatedly; on many occasions
      built: [nal, ghurnar, kirdin]
      concept: repeatedly
    - form: ghend
      class: adv
      field: Light, sky and the turning year
      gloss: already; before the time expected or in question
      source: {kind: inherited}
      concept: already
    - form: tengin
      class: adv
      field: Light, sky and the turning year
      gloss: still; continuing at the time in question
      source: {kind: inherited}
      concept: still
    - form: nond ghend
      class: adv
      field: Light, sky and the turning year
      gloss: yet; not already, in a negative statement about an expected event
      built: [nond, ghend]
      concept: yet
    - form: arnin
      class: adv
      field: Light, sky and the turning year
      gloss: soon; after a short time
      source: {kind: inherited}
      concept: soon
    - form: drengin
      class: adv
      field: Light, sky and the turning year
      gloss: later; after the time in question
      source: {kind: inherited}
      concept: later
    - form: threngin
      class: adv
      field: Light, sky and the turning year
      gloss: early; before the usual or expected time
      source: {kind: inherited}
      concept: early
    - form: darngin
      class: adv
      field: Light, sky and the turning year
      gloss: late; after the usual or expected time
      source: {kind: inherited}
      concept: late
    - form: nal trenen kirdin
      class: part
      field: Light, sky and the turning year
      gloss: first; at the first occasion in the sequence
      built: [nal, trenen, kirdin]
      concept: first-sequence
    - form: nal dálamen kirdin
      class: part
      field: Light, sky and the turning year
      gloss: next; at the following occasion in the sequence
      built: [nal, dálamen, kirdin]
      concept: next
    - form: dulkren
      class: adv
      field: Light, sky and the turning year
      gloss: last; after all others in a sequence
      source: {kind: inherited}
      concept: last
    - form: nal dhulon
      class: part
      field: Light, sky and the turning year
      gloss: finally; at the ending of a sequence
      built: [nal, dhulon]
      concept: finally
    - form: kirgon
      class: n n
      field: Light, sky and the turning year
      gloss: a season; a recurring division of the year
      source: {kind: inherited}
      concept: season
    - form: kirdon
      class: n n
      field: Light, sky and the turning year
      gloss: a year; a full turning of the seasons
      source: {kind: inherited}
      concept: year
    - form: dhulon
      class: n n
      field: Doing, going and being
      gloss: an ending; the last point of an event or sequence
      source: {kind: inherited}
      concept: end-noun
    - form: khalnar
      class: adj
      field: Colour and the look of things
      gloss: light in colour; pale; having little depth of colour
      source: {kind: inherited}
      concept: [light-colour, pale]
    - form: nirar
      class: adj
      field: Colour and the look of things
      gloss: clear; transparent; allowing an object behind it to be seen
      source: {kind: inherited}
      concept: [clear-appearance, transparent]
    - form: annirar
      class: adj
      field: Colour and the look of things
      gloss: opaque; not allowing an object behind it to be seen
      built: [an-, nirar]
      concept: opaque
    - form: kirnar
      class: adj
      field: Colour and the look of things
      gloss: shiny; reflecting a bright gleam
      source: {kind: inherited}
      concept: shiny
    - form: ankirnar
      class: adj
      field: Colour and the look of things
      gloss: dull in appearance; lacking a shine
      built: [an-, kirnar]
      concept: dull-appearance
    - form: kemar
      class: adj
      field: Colour and the look of things
      gloss: plain; without a pattern
      source: {kind: inherited}
      concept: plain-pattern
    - form: kernar
      class: adj
      field: Colour and the look of things
      gloss: spotted; marked with small contrasting patches
      source: {kind: inherited}
      concept: spotted
    - form: rendar
      class: adj
      field: Colour and the look of things
      gloss: striped; marked with contrasting bands
      source: {kind: inherited}
      concept: striped
    - form: gharnar
      class: adj
      field: Colour and the look of things
      gloss: big; large in size
      source: {kind: inherited}
      concept: big
    - form: lunnar
      class: adj
      field: Colour and the look of things
      gloss: small; little in size
      source: {kind: inherited}
      concept: small
    - form: ghuri ghuri lunnar
      class: adj
      field: Colour and the look of things
      gloss: tiny; extremely small
      built: [ghuri, ghuri, lunnar]
      concept: tiny
    - form: tharnar
      class: adj
      field: Colour and the look of things
      gloss: long in spatial length
      source: {kind: inherited}
      concept: long
    - form: sennar
      class: adj
      field: Colour and the look of things
      gloss: short in spatial length
      source: {kind: inherited}
      concept: short
    - form: durnel
      class: adj
      field: Colour and the look of things
      gloss: low; not high above a base or reference point
      source: {kind: inherited}
      concept: low
    - form: marnar
      class: adj
      field: Colour and the look of things
      gloss: wide; broad across
      source: {kind: inherited}
      concept: wide
    - form: seldnar
      class: adj
      field: Colour and the look of things
      gloss: narrow; having little width
      source: {kind: inherited}
      concept: narrow
    - form: menthar
      class: adj
      field: Colour and the look of things
      gloss: heavy; great in weight
      source: {kind: inherited}
      concept: heavy
    - form: senmenthar
      class: adj
      field: Colour and the look of things
      gloss: light in weight
      source: {kind: inherited}
      concept: light-weight
    - form: terlar
      class: adj
      field: Colour and the look of things
      gloss: new; recently made or encountered
      source: {kind: inherited}
      concept: new
    - form: moghlar
      class: adj
      field: Colour and the look of things
      gloss: old; having existed for a long time; said of a thing
      source: {kind: inherited}
      concept: old-object
    - form: durmar
      class: adj
      field: Colour and the look of things
      gloss: slow; moving or happening at little speed
      source: {kind: inherited}
      concept: slow
    - form: londar
      class: adj
      field: Colour and the look of things
      gloss: easy; requiring little effort
      source: {kind: inherited}
      concept: easy
    - form: karnar
      class: adj
      field: Colour and the look of things
      gloss: difficult; requiring much effort
      source: {kind: inherited}
      concept: difficult
    - form: gheldar
      class: adj
      field: Colour and the look of things
      gloss: good; sound or desirable in the respect meant
      source: {kind: inherited}
      concept: good
    - form: angheldar
      class: adj
      field: Colour and the look of things
      gloss: bad; unsound or undesirable in the respect meant
      built: [an-, gheldar]
      concept: bad
    - form: gherin gheldar
      class: adj
      field: Colour and the look of things
      gloss: better; good to a greater degree than the thing compared
      built: [gherin, gheldar]
      concept: better
    - form: gherin angheldar
      class: adj
      field: Colour and the look of things
      gloss: worse; bad to a greater degree than the thing compared
      built: [gherin, angheldar]
      concept: worse
    - form: gherin gheldar thinar ukal derar gharon
      class: adj
      field: Colour and the look of things
      gloss: best; better than each other thing in the comparison
      built: [gherin, gheldar, thinar, ukal, derar, gharon]
      concept: best
    - form: gherin angheldar thinar ukal derar gharon
      class: adj
      field: Colour and the look of things
      gloss: worst; worse than each other thing in the comparison
      built: [gherin, angheldar, thinar, ukal, derar, gharon]
      concept: worst
    - form: ghalnar
      class: adj
      field: Colour and the look of things
      gloss: important; having great consequence or significance
      source: {kind: inherited}
      concept: important
    - form: anghalnar
      class: adj
      field: Colour and the look of things
      gloss: trivial; of little consequence or significance
      built: [an-, ghalnar]
      concept: trivial
    - form: tarnar
      class: adj
      field: Colour and the look of things
      gloss: necessary; needed for a purpose or condition
      source: {kind: inherited}
      concept: necessary
    - form: dhesnar
      class: adj
      field: Colour and the look of things
      gloss: valuable; having worth
      source: {kind: inherited}
      concept: valuable
    - form: andhesnar
      class: adj
      field: Colour and the look of things
      gloss: worthless; having no worth
      built: [an-, dhesnar]
      concept: worthless
    - form: gharsar
      class: adj
      field: Colour and the look of things
      gloss: useful; serving a purpose
      source: {kind: inherited}
      concept: useful
    - form: angharsar
      class: adj
      field: Colour and the look of things
      gloss: useless; serving no purpose
      built: [an-, gharsar]
      concept: useless
    - form: kergar
      class: adj
      field: Colour and the look of things
      gloss: broken; damaged or separated so that it is not whole
      source: {kind: inherited}
      concept: broken
    - form: tenghar
      class: adj
      field: Colour and the look of things
      gloss: complete; containing all that it needs or is meant to contain
      source: {kind: inherited}
      concept: complete
    - form: antenghar
      class: adj
      field: Colour and the look of things
      gloss: incomplete; lacking some required part
      built: [an-, tenghar]
      concept: incomplete
    - form: rundar
      class: adj
      field: Colour and the look of things
      gloss: honest; intending to speak and act truthfully
      source: {kind: inherited}
      concept: honest
    - form: anrundar
      class: adj
      field: Colour and the look of things
      gloss: dishonest; intending to mislead
      built: [an-, rundar]
      concept: dishonest
    - form: ghuri
      class: adv
      field: Colour and the look of things
      gloss: very; to a high degree
      source: {kind: inherited}
      concept: very
    - form: ghuri ghuri
      class: adv
      field: Colour and the look of things
      gloss: extremely; to an exceptionally high degree
      built: [ghuri, ghuri]
      concept: extremely
    - form: senri
      class: adv
      field: Colour and the look of things
      gloss: somewhat; to a moderate degree
      source: {kind: inherited}
      concept: somewhat
    - form: sendri
      class: adv
      field: Colour and the look of things
      gloss: slightly; to a small degree
      source: {kind: inherited}
      concept: slightly
    - form: sendi
      class: adv
      field: Colour and the look of things
      gloss: barely; only just to the degree needed
      source: {kind: inherited}
      concept: barely
    - form: ghul antemar
      class: adj
      field: Colour and the look of things
      gloss: too much; more in quantity or degree than is suitable
      built: [ghul, antemar]
      concept: too-much
    - form: send antemar
      class: adj
      field: Colour and the look of things
      gloss: too little; less in quantity or degree than is needed
      built: [send, antemar]
      concept: too-little
    - form: semlar
      class: adj
      field: Colour and the look of things
      gloss: similar; resembling something without necessarily being equal or identical
      source: {kind: inherited}
      concept: similar
    - form: ghornar
      class: adj
      field: Colour and the look of things
      gloss: opposite; facing the contrary way or at the other extreme
      source: {kind: inherited}
      concept: opposite
    - form: antemar
      class: adj
      field: Doing, going and being
      gloss: incorrect; unsuitable; failing the needed or fitting measure
      source: {kind: inherited}
      concept: incorrect
    - form: ghes
      class: pron
      field: Numbers and grammar words
      gloss: who; asks for a person's identity
      source: {kind: inherited}
      concept: question-who
    - form: gher
      class: pron
      field: Numbers and grammar words
      gloss: what; asks for a thing, action or meaning; gher alone is What? as a request to repeat or explain
      source: {kind: inherited}
      concept: [question-what, expression-what]
    - form: ghis
      class: pron
      field: Numbers and grammar words
      gloss: which; asks for a selection from a known set
      source: {kind: inherited}
      concept: question-which
    - form: gher miron
      class: n n
      field: Numbers and grammar words
      gloss: where; what place
      built: [gher, miron]
      concept: question-where
    - form: gher kirdis
      class: n f
      field: Numbers and grammar words
      gloss: when; what time
      built: [gher, kirdis]
      concept: question-when
    - form: gher ghoris
      class: n f
      field: Numbers and grammar words
      gloss: why; what reason
      built: [gher, ghoris]
      concept: question-why
    - form: ghesin
      class: adv
      field: Numbers and grammar words
      gloss: how; in what manner
      source: {kind: inherited}
      concept: question-how
    - form: gher dhelnon
      class: n n
      field: Numbers and grammar words
      gloss: how many; what number
      built: [gher, dhelnon]
      concept: question-how-many
    - form: gher menthis
      class: n f
      field: Numbers and grammar words
      gloss: how much; what amount
      built: [gher, menthis]
      concept: question-how-much
    - form: ghesri
      class: pron
      field: Numbers and grammar words
      gloss: whose; asks who possesses the thing in question
      source: {kind: inherited}
      concept: question-whose
    - form: ghirth ghes
      class: part
      field: Numbers and grammar words
      gloss: to whom; asks the recipient or person toward whom an action is directed
      built: [ghirth, ghes]
      concept: question-to-whom
    - form: threl gher miron
      class: part
      field: Numbers and grammar words
      gloss: from where; from what place
      built: [threl, gher, miron]
      concept: question-from-where
    - form: gher dhernis
      class: n f
      field: Numbers and grammar words
      gloss: for what purpose; asks the intended purpose
      built: [gher, dhernis]
      concept: question-for-what-purpose
    - form: khe
      class: part
      field: Numbers and grammar words
      gloss: whether; opens a yes or no question before the subject
      source: {kind: inherited}
      concept: [question-polar, whether]
    - form: gher rúnathen
      class: v
      field: Numbers and grammar words
      gloss: what do you say; a request to repeat or clarify an utterance
      built: [gher, rúnathen]
      concept: [question-clarification, expression-pardon]
    - form: drin
      class: part
      field: Song, speech and the letters
      gloss: yes; an affirmative answer
      source: {kind: coined}
      concept: yes
    - form: noth
      class: part
      field: Song, speech and the letters
      gloss: no; a negative answer to a question or proposal
      source: {kind: inherited}
      concept: no
    - form: tenar
      class: adj
      field: Song, speech and the letters
      gloss: true; agreeing with reality
      source: {kind: inherited}
      concept: "true"
    - form: antenar
      class: adj
      field: Song, speech and the letters
      gloss: false; not agreeing with reality
      built: [an-, tenar]
      concept: "false"
    - form: rulthon
      class: n n
      field: Song, speech and the letters
      gloss: a lie; a statement intended to deceive
      source: {kind: inherited}
      concept: lie-noun
    - form: tenri
      class: adv
      field: Song, speech and the letters
      gloss: truly; genuinely; indeed; in fact; asserts the sincerity or actual reality of a claim
      source: {kind: inherited}
      concept: [sincerity, indeed, in-fact]
    - form: tendri
      class: adv
      field: Song, speech and the letters
      gloss: certainly; with full conviction that a claim is true
      source: {kind: inherited}
      concept: certainly
    - form: kherin
      class: adv
      field: Song, speech and the letters
      gloss: perhaps; possibly, without asserting likelihood
      source: {kind: inherited}
      concept: perhaps
    - form: tenrin
      class: adv
      field: Song, speech and the letters
      gloss: probably; more likely true than false
      source: {kind: inherited}
      concept: probably
    - form: antenrin
      class: adv
      field: Song, speech and the letters
      gloss: unlikely; probably not true or not expected to occur
      built: [an-, tenrin]
      concept: unlikely
    - form: tendrar
      class: adj
      field: Song, speech and the letters
      gloss: certain; fully convinced that a claim is true
      source: {kind: inherited}
      concept: certain
    - form: antendrar
      class: adj
      field: Song, speech and the letters
      gloss: uncertain; not fully convinced whether a claim is true
      built: [an-, tendrar]
      concept: uncertain
    - form: dirmin
      class: adv
      field: Song, speech and the letters
      gloss: apparently; according to appearances, with truth left open
      source: {kind: inherited}
      concept: apparently
    - form: ronin
      class: adv
      field: Song, speech and the letters
      gloss: supposedly; according to what is said, without endorsing the claim
      source: {kind: inherited}
      concept: supposedly
    - form: tharnis dhárkathen
      class: v
      field: Song, speech and the letters
      gloss: to doubt; to hold doubt about a claim
      built: [tharnis, dhárkathen]
      concept: doubt-verb
    - form: tharnathen
      class: v
      field: Song, speech and the letters
      gloss: to suspect; to think something may be so without sufficient grounds for certainty
      source: {kind: inherited}
      concept: suspect
    - form: darnethen
      class: v
      field: Song, speech and the letters
      gloss: to guess; to give an answer without knowing
      source: {kind: inherited}
      concept: guess-verb
    - form: sarnethen
      class: v
      field: Song, speech and the letters
      gloss: to assume; to accept something as a basis without first establishing its truth
      source: {kind: inherited}
      concept: assume-verb
    - form: temar
      class: adj
      field: Song, speech and the letters
      gloss: correct; conforming to the relevant fact, measure or requirement
      source: {kind: inherited}
      concept: correct
    - form: nonsemgathen
      class: v
      field: Song, speech and the letters
      gloss: to disagree; to hold a different view
      source: {kind: inherited}
      concept: disagree
    - form: rulnis
      class: n f
      field: Song, speech and the letters
      gloss: a falsehood; an assertion that is false, whether intentionally deceptive or mistaken
      source: {kind: inherited}
      concept: falsehood
    - form: ghos
      class: conj
      field: Numbers and grammar words
      gloss: or; joins alternatives
      source: {kind: inherited}
      concept: or
    - form: ghas
      class: conj
      field: Numbers and grammar words
      gloss: but; joins contrasting claims
      source: {kind: inherited}
      concept: but
    - form: nond ghos
      class: conj
      field: Numbers and grammar words
      gloss: nor; joins a further negative alternative after a negative claim
      built: [nond, ghos]
      concept: nor
    - form: gharnen
      class: conj
      field: Numbers and grammar words
      gloss: because; introduces the reason for the main claim
      source: {kind: inherited}
      concept: because
    - form: gharnin
      class: adv
      field: Numbers and grammar words
      gloss: therefore; as a consequence of the stated reason
      source: {kind: inherited}
      concept: therefore
    - form: ghus
      class: conj
      field: Numbers and grammar words
      gloss: if; introduces a condition
      source: {kind: inherited}
      concept: if
    - form: ghus nond
      class: conj
      field: Numbers and grammar words
      gloss: unless; if not; ghus nond P, ses Q means if P is not true, Q follows
      built: [ghus, nond]
      concept: unless
    - form: dergin
      class: adv
      field: Numbers and grammar words
      gloss: otherwise; in the other case
      source: {kind: inherited}
      concept: otherwise
    - form: ghas ghus
      class: conj
      field: Numbers and grammar words
      gloss: although; the following fact holds despite the expectation it raises against the main claim
      built: [ghas, ghus]
      concept: although
    - form: ghas tenri
      class: adv
      field: Numbers and grammar words
      gloss: however; nevertheless; affirms the following claim despite the preceding contrast
      built: [ghas, tenri]
      concept: [however, nevertheless]
    - form: khelis
      class: part
      field: Numbers and grammar words
      gloss: despite; in spite of the noun or event named after it
      source: {kind: inherited}
      concept: despite
    - form: dergin gherth
      class: adv
      field: Numbers and grammar words
      gloss: instead; in the place of the rejected alternative
      built: [dergin, gherth]
      concept: instead
    - form: ghath
      class: part
      field: Numbers and grammar words
      gloss: like; resembling the person or thing named after it
      source: {kind: inherited}
      concept: like
    - form: anghath
      class: part
      field: Numbers and grammar words
      gloss: unlike; not resembling the person or thing named after it
      built: [an-, ghath]
      concept: unlike
    - form: ghath nal
      class: part
      field: Numbers and grammar words
      gloss: as; in the capacity or manner of the role or action named after it
      built: [ghath, nal]
      concept: as
    - form: thinar
      class: part
      field: Numbers and grammar words
      gloss: than; precedes the standard in a comparison
      source: {kind: inherited}
      concept: than
    - form: ghos ghos
      class: conj
      field: Numbers and grammar words
      gloss: either ... or; place ghos before each of the two alternatives
      built: [ghos, ghos]
      concept: either-alternative
    - form: nond ghos nond ghos
      class: conj
      field: Numbers and grammar words
      gloss: neither ... nor; place nond ghos before each rejected alternative
      built: [nond, ghos, nond, ghos]
      concept: neither-alternative
    - form: rek rek
      class: conj
      field: Numbers and grammar words
      gloss: both ... and; place rek before each item to affirm both together
      built: [rek, rek]
      concept: both-conjunction
    - form: gher temar
      class: adv
      field: Numbers and grammar words
      gloss: that is; namely; introduces a precise restatement or identification
      built: [gher, temar]
      concept: [that-is, namely]
    - form: uk dírmalis
      class: n f
      field: Numbers and grammar words
      gloss: for example; a single illustration of the claim
      built: [uk, dírmalis]
      concept: for-example
    - form: dheks
      class: part
      field: Numbers and grammar words
      gloss: except; excludes the person or thing named after it
      source: {kind: inherited}
      concept: except
    - form: uken
      class: adv
      field: Numbers and grammar words
      gloss: only; solely; excludes alternatives
      source: {kind: inherited}
      concept: only
    - form: gheri
      class: adv
      field: Numbers and grammar words
      gloss: even; marks an included case that exceeds expectation
      source: {kind: inherited}
      concept: even
    - form: rekin
      class: adv
      field: Numbers and grammar words
      gloss: also; in addition
      source: {kind: inherited}
      concept: also
    - form: ghalnin
      class: adv
      field: Numbers and grammar words
      gloss: especially; with particular emphasis or degree
      source: {kind: inherited}
      concept: especially
    - form: gherth
      class: part
      field: Doing, going and being
      gloss: in place of; substitutes the noun or action named after it
      source: {kind: inherited}
    - form: ghendathen
      class: v
      field: Doing, going and being
      gloss: can; to be able to perform the action cited before this verb
      source: {kind: inherited}
      concept: can
    - form: nond ghendathen
      class: v
      field: Doing, going and being
      gloss: cannot; to be unable to perform the action cited before this negative modal expression
      built: [nond, ghendathen]
      concept: cannot
    - form: khernar
      class: adj
      field: Doing, going and being
      gloss: possible; able to occur under the conditions in question
      source: {kind: inherited}
      concept: possible
    - form: ankhernar
      class: adj
      field: Doing, going and being
      gloss: impossible; unable to occur under the conditions in question
      built: [an-, khernar]
      concept: impossible
    - form: ghalgathen
      class: v
      field: Doing, going and being
      gloss: may; to have permission to perform the action cited before this verb
      source: {kind: inherited}
      concept: may-permission
    - form: kherin eldathen
      class: v
      field: Doing, going and being
      gloss: might happen; the event named as subject is possible, with its truth left open
      built: [kherin, eldathen]
      concept: might-possibility
    - form: targathen
      class: v
      field: Doing, going and being
      gloss: must; to be obliged to perform the action cited before this verb
      source: {kind: inherited}
      concept: must
    - form: norgathen
      class: v
      field: Doing, going and being
      gloss: must not; to be prohibited from performing the action cited before this verb
      source: {kind: inherited}
      concept: must-not
    - form: ghalnathen
      class: v
      field: Doing, going and being
      gloss: ought; to have good reason or duty to perform the action cited before this verb, without absolute obligation
      source: {kind: inherited}
      concept: ought
    - form: targar
      class: adj
      field: Doing, going and being
      gloss: required; obligatory
      source: {kind: inherited}
      concept: required
    - form: dalgmar
      class: adj
      field: Doing, going and being
      gloss: optional; open to choice without obligation
      source: {kind: inherited}
      concept: optional
    - form: ghalgar
      class: adj
      field: Doing, going and being
      gloss: allowed; permitted by a person, rule or custom
      source: {kind: inherited}
      concept: allowed
    - form: norgar
      class: adj
      field: Doing, going and being
      gloss: forbidden; prohibited by a person, rule or custom
      source: {kind: inherited}
      concept: forbidden
    - form: ghalgethen
      class: v
      field: Doing, going and being
      gloss: to permit; to give someone permission to act
      source: {kind: inherited}
      concept: permit
    - form: norgethen
      class: v
      field: Doing, going and being
      gloss: to prohibit; to forbid someone to act
      source: {kind: inherited}
      concept: prohibit
    - form: gholnar
      class: adj
      field: Doing, going and being
      gloss: free to act; unconstrained in the action in question
      source: {kind: inherited}
      concept: free
    - form: angholnar
      class: adj
      field: Doing, going and being
      gloss: constrained in action; not free to act
      built: [an-, gholnar]
      concept: constrained
    - form: ilnar
      class: adj
      field: Doing, going and being
      gloss: willing; ready to act by one's own desire
      source: {kind: inherited}
      concept: willing
    - form: anilnar
      class: adj
      field: Doing, going and being
      gloss: unwilling; not ready to act by one's own desire
      built: [an-, ilnar]
      concept: unwilling
    - form: dhernar
      class: adj
      field: Doing, going and being
      gloss: intended; meant to happen through someone's purpose
      source: {kind: inherited}
      concept: intended
    - form: andhernar
      class: adj
      field: Doing, going and being
      gloss: accidental; happening without intention
      built: [an-, dhernar]
      concept: accidental
    - form: kendon
      class: n
      field: The Pact, the oath and the keeping
      gloss: a person; a single human individual
      source: {kind: inherited}
      concept: person
    - form: kendonalon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: people; a body of persons considered together
      built: [kendon, -alon]
      concept: people
    - form: tharan
      class: n m
      field: The Pact, the oath and the keeping
      gloss: a man; an adult male human
      source: {kind: inherited}
      concept: man
    - form: thara
      class: n f
      field: The Pact, the oath and the keeping
      gloss: a woman; an adult female human
      source: {kind: inherited}
      concept: woman
    - form: kenlon
      class: n
      field: Kin, the clan and the name
      gloss: a child; a young person, whether named or unnamed
      source: {kind: inherited}
      concept: child
    - form: kenlon tharan
      class: n m
      field: The Pact, the oath and the keeping
      gloss: a boy; a male child
      built: [kenlon, tharan]
      concept: boy
    - form: kenlon thara
      class: n f
      field: The Pact, the oath and the keeping
      gloss: a girl; a female child
      built: [kenlon, thara]
      concept: girl
    - form: ghendaron
      class: n
      field: The Pact, the oath and the keeping
      gloss: an adult; a person who has reached maturity
      source: {kind: inherited}
      concept: adult
    - form: uk kendon
      class: n
      field: The Pact, the oath and the keeping
      gloss: an individual; one person taken separately
      built: [uk, kendon]
      concept: individual
    - form: kentalon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: a group; people or things considered together
      source: {kind: inherited}
      concept: group
    - form: ghurnar kendon
      class: n
      field: The Pact, the oath and the keeping
      gloss: a crowd; many people gathered in one place
      built: [ghurnar, kendon]
      concept: crowd
    - form: kenron
      class: n n
      field: The Pact, the oath and the keeping
      gloss: a clan; a kin group reckoning descent from a common founder
      source: {kind: inherited}
      concept: clan
    - form: kenralon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: a tribe; a community of related clans
      source: {kind: inherited}
      concept: tribe
    - form: khalron
      class: n n
      field: The Pact, the oath and the keeping
      gloss: a community; people joined by shared daily life or place
      source: {kind: inherited}
      concept: community
    - form: uldren
      class: n
      field: The Pact, the oath and the keeping
      gloss: a ruler; a person exercising authority over a community or realm
      source: {kind: inherited}
      concept: ruler
    - form: gharsand
      class: n
      field: The Pact, the oath and the keeping
      gloss: a worker; someone who does work
      built: [ghársathen, -and]
      concept: worker
    - form: thelgon
      class: n
      field: The Pact, the oath and the keeping
      gloss: an artisan; someone skilled in making things by hand
      source: {kind: inherited}
      concept: artisan
    - form: gherdand
      class: n
      field: The Pact, the oath and the keeping
      gloss: a merchant; someone who trades for a living
      built: [gherdathen, -and]
      concept: merchant
    - form: lenthon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: a name; the word by which a person or thing is called
      source: {kind: inherited}
      concept: name-noun
    - form: lenthis
      class: n f
      field: The Pact, the oath and the keeping
      gloss: a title; a word marking someone's office, standing or role
      source: {kind: inherited}
      concept: title
    - form: uldnis
      class: n f
      field: The Pact, the oath and the keeping
      gloss: rank; a position in an order of authority or standing
      source: {kind: inherited}
      concept: rank
    - form: dharnalon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: law; the recognized body of binding rules of a community
      source: {kind: inherited}
      concept: law
    - form: dharon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: a rule; a stated requirement governing conduct or practice
      source: {kind: inherited}
      concept: rule
    - form: taldalon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: order; the arrangement of things in their proper or intended places
      source: {kind: inherited}
      concept: order-noun
    - form: ghroson
      class: n n
      field: The Pact, the oath and the keeping
      gloss: a command; an instruction given with authority
      source: {kind: inherited}
      concept: command-noun
    - form: sendalon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: obedience; doing what an authority commands
      source: {kind: inherited}
      concept: obedience
    - form: thargnis
      class: n f
      field: The Pact, the oath and the keeping
      gloss: justice; fair treatment according to what is owed
      source: {kind: inherited}
      concept: justice
    - form: anthargnis
      class: n f
      field: The Pact, the oath and the keeping
      gloss: injustice; unfair treatment that denies what is owed
      built: [an-, thargnis]
      concept: injustice
    - form: dharnar
      class: adj
      field: The Pact, the oath and the keeping
      gloss: right; morally acceptable
      source: {kind: inherited}
      concept: right-ethical
    - form: andharnar
      class: adj
      field: The Pact, the oath and the keeping
      gloss: wrong; morally unacceptable
      built: [an-, dharnar]
      concept: wrong-ethical
    - form: gholnis
      class: n f
      field: The Pact, the oath and the keeping
      gloss: freedom; the condition of being free to act
      source: {kind: inherited}
      concept: freedom
    - form: grundelon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: captivity; being held and prevented from leaving
      source: {kind: inherited}
      concept: captivity
    - form: laghon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: a gift; something freely given
      source: {kind: inherited}
      concept: gift
    - form: gherdnis
      class: n f
      field: The Pact, the oath and the keeping
      gloss: an exchange; giving and receiving things in return
      source: {kind: inherited}
      concept: exchange-noun
    - form: malthon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: a debt; something owed in goods, service or money
      source: {kind: inherited}
      concept: debt
    - form: ghulnis
      class: n n
      field: The Pact, the oath and the keeping
      gloss: wealth; an abundance of valuable possessions or resources
      source: {kind: inherited}
      concept: wealth
    - form: sendnis
      class: n f
      field: The Pact, the oath and the keeping
      gloss: poverty; lack of resources needed for daily life
      source: {kind: inherited}
      concept: poverty
    - form: telgonalon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: ownership; the recognized right to possess something; it does not make land ownable in Áelendan custom
      built: [telgon, -alon]
      concept: ownership
    - form: ronkathon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: honor; standing earned or upheld through worthy conduct
      source: {kind: inherited}
      concept: honor
    - form: thalkon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: a secret; something kept from others' knowledge
      source: {kind: inherited}
      concept: secret
    - form: sargon
      class: n n
      field: The Pact, the oath and the keeping
      gloss: knowledge; what someone knows
      source: {kind: inherited}
      concept: knowledge
    - form: gharon
      class: n n
      field: Doing, going and being
      gloss: a thing; any object, matter or item under discussion
      source: {kind: inherited}
      concept: thing
    - form: elthon
      class: n n
      field: Doing, going and being
      gloss: a being; something that exists, especially a living creature
      source: {kind: inherited}
      concept: being
    - form: elthis
      class: n f
      field: Doing, going and being
      gloss: life; the condition or course of being alive
      source: {kind: inherited}
      concept: life
    - form: arnel
      class: n n
      field: Doing, going and being
      gloss: an origin; the source from which something begins
      source: {kind: inherited}
      concept: origin
    - form: threnon
      class: n n
      field: Doing, going and being
      gloss: a beginning; the first point or part of something
      source: {kind: inherited}
      concept: beginning
    - form: tenghon
      class: n n
      field: Doing, going and being
      gloss: completion; the state or event of reaching all that is required
      source: {kind: inherited}
      concept: completion
    - form: tergon
      class: n n
      field: Doing, going and being
      gloss: a change; a difference brought about in a thing or situation
      source: {kind: inherited}
      concept: change-noun
    - form: ghur tergon
      class: n n
      field: Doing, going and being
      gloss: a transformation; a change that gives a substantially different form or nature
      built: [ghur, tergon]
      concept: transformation
    - form: mirdon
      class: n n
      field: Doing, going and being
      gloss: a part; a portion or component of a whole
      source: {kind: inherited}
      concept: part
    - form: gharron
      class: n n
      field: Doing, going and being
      gloss: a cause; something that brings an event or condition about
      source: {kind: inherited}
      concept: cause
    - form: gharnis
      class: n f
      field: Doing, going and being
      gloss: an effect; a result brought about by a cause
      source: {kind: inherited}
      concept: effect
    - form: ghoris
      class: n f
      field: Doing, going and being
      gloss: a reason; a consideration that explains or supports a claim or action
      source: {kind: inherited}
      concept: reason
    - form: dhernis
      class: n f
      field: Doing, going and being
      gloss: a purpose; the aim for which an action is done or a thing used
      source: {kind: inherited}
      concept: purpose
    - form: ternis
      class: n f
      field: Doing, going and being
      gloss: a kind; a class of things sharing relevant qualities
      source: {kind: inherited}
      concept: kind
    - form: elnar
      class: adj
      field: Doing, going and being
      gloss: real; actually existing rather than imagined
      source: {kind: inherited}
      concept: real
    - form: anelnar
      class: adj
      field: Doing, going and being
      gloss: unreal; imagined or not actually existing
      built: [an-, elnar]
      concept: unreal
    - form: mirnar
      class: adj
      field: Doing, going and being
      gloss: natural; arising through the ordinary growth and processes of the world
      source: {kind: inherited}
      concept: natural
    - form: anmirnar
      class: adj
      field: Doing, going and being
      gloss: unnatural; contrary to the world's ordinary growth or processes
      built: [an-, mirnar]
      concept: unnatural
    - form: redha ghirth tos
      class: n f
      field: The lodge, the fire and the guest
      gloss: hello; peace to you; a fixed greeting on meeting someone
      built: [redha, ghirth, tos]
      concept: hello
    - form: redha ris tos
      class: n f
      field: The lodge, the fire and the guest
      gloss: goodbye; peace in you; a fixed leave-taking wish
      built: [redha, ris, tos]
      concept: goodbye
    - form: mund tos tis máldathen
      class: v
      field: The lodge, the fire and the guest
      gloss: welcome; I give you your place here; a fixed seating offer spoken by the host to a guest
      built: [mund, tos, tis, máldathen]
      concept: expression-welcome
    - form: mund kernathen
      class: v
      field: The lodge, the fire and the guest
      gloss: please; I ask; a fixed courteous preface to a request
      built: [mund, kernathen]
      concept: expression-please
    - form: mund tos laghnathen
      class: v
      field: The lodge, the fire and the guest
      gloss: thank you; I thank you
      built: [mund, tos, laghnathen]
      concept: expression-thank-you
    - form: nond molthon
      class: n n
      field: The lodge, the fire and the guest
      gloss: you're welcome; no debt of honor; a response releasing the recipient from any claim of repayment
      built: [nond, molthon]
      concept: expression-youre-welcome
    - form: mund ghrel rógathen ghalgathen
      class: v
      field: The lodge, the fire and the guest
      gloss: excuse me; may I pass through; a fixed request to pass, also used before an interruption
      built: [mund, ghrel, rógathen, ghalgathen]
      concept: expression-excuse-me
    - form: mund ghornis dhárkathen
      class: v
      field: The lodge, the fire and the guest
      gloss: sorry; I hold regret
      built: [mund, ghornis, dhárkathen]
      concept: expression-sorry
    - form: tos mund dhelmethen
      class: v
      field: The lodge, the fire and the guest
      gloss: forgive me; a fixed request that you forgive me
      built: [tos, mund, dhelmethen]
      concept: expression-forgive-me
    - form: drin tenri
      class: part
      field: The lodge, the fire and the guest
      gloss: of course; yes indeed; affirms that the answer follows readily
      built: [drin, tenri]
      concept: of-course
    - form: tos salkathen
      class: v
      field: The lodge, the fire and the guest
      gloss: listen; a direct request to the person addressed
      built: [tos, salkathen]
      concept: expression-listen
    - form: tos durnathen
      class: v
      field: The lodge, the fire and the guest
      gloss: look; a direct request to the person addressed
      built: [tos, durnathen]
      concept: expression-look
    - form: tos ghaldathen
      class: v
      field: The lodge, the fire and the guest
      gloss: wait; a direct request to the person addressed
      built: [tos, ghaldathen]
      concept: expression-wait
    - form: tos tis árnathen
      class: v
      field: The lodge, the fire and the guest
      gloss: come here; a direct request to the person addressed
      built: [tos, tis, árnathen]
      concept: expression-come-here
    - form: tos ghurth rógathen
      class: v
      field: The lodge, the fire and the guest
      gloss: go away; a direct request to the person addressed
      built: [tos, ghurth, rógathen]
      concept: expression-go-away
    - form: tos mund kenthathen
      class: v
      field: The lodge, the fire and the guest
      gloss: help; help me; an urgent request for aid
      built: [tos, mund, kenthathen]
      concept: expression-help
    - form: tos taldathen
      class: v
      field: The lodge, the fire and the guest
      gloss: stop; a direct request to the person addressed
      built: [tos, taldathen]
      concept: expression-stop
    - form: mund sarnathen
      class: v
      field: The lodge, the fire and the guest
      gloss: I understand; I grasp the meaning
      built: [mund, sarnathen]
      concept: expression-i-understand
    - form: mund nond sarnathen
      class: v
      field: The lodge, the fire and the guest
      gloss: I do not understand; I do not grasp the meaning
      built: [mund, nond, sarnathen]
      concept: expression-i-do-not-understand
    - form: tos gher dhernathen
      class: v
      field: The lodge, the fire and the guest
      gloss: what do you mean; what do you intend by your words
      built: [tos, gher, dhernathen]
      concept: expression-what-do-you-mean
    - form: tos ghesin rúnathen
      class: v
      field: The lodge, the fire and the guest
      gloss: how do you say; asks for the words used to express a stated meaning
      built: [tos, ghesin, rúnathen]
      concept: expression-how-do-you-say
    - form: ti gher lenthon dhárkathen
      class: v
      field: The lodge, the fire and the guest
      gloss: what is this called; what name does this have
      built: [ti, gher, lenthon, dhárkathen]
      concept: expression-what-is-this-called
    - form: khe tenar
      class: adj
      field: The lodge, the fire and the guest
      gloss: really; is that true; a fixed surprised request for confirmation
      built: [khe, tenar]
      concept: expression-really
    - form: noth ghuri
      class: part
      field: The lodge, the fire and the guest
      gloss: not at all; a fixed emphatic conversational denial
      built: [noth, ghuri]
      concept: expression-not-at-all
    - form: khendron
      class: n n
      field: The lodge, the fire and the guest
      gloss: a hearth; the physical place where a house fire is kept, including its floor or stone surround
      source: {kind: inherited}
      concept: hearth
    - form: kirdin
      class: n n
      field: Doing, going and being
      gloss: an occasion; one occurrence of an event
      source: {kind: inherited}
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: ["{given}", "{given} {clan}"]
    given:
      female:
        - "álsira"
        - "ánthela"
        - "ástrela"
        - "dalmira"
        - "dárnoka"
        - "dhálisa"
        - "dhenusa"
        - "doleta"
        - "dránela"
        - "dúmrana"
        - "gánthira"
        - "ghálosa"
        - "ghórmela"
        - "gódrusa"
        - "gólmena"
        - "kánthora"
        - "khálisa"
        - "khorsena"
        - "kársela"
        - "kéldira"
        - "kírnala"
        - "komsatha"
        - "kélmisa"
        - "lórantha"
        - "lúmreda"
        - "máldura"
        - "mérkasa"
        - "móghora"
        - "nálketa"
        - "néldrama"
        - "norgatha"
        - "rándira"
        - "rendusa"
        - "rónkala"
        - "sákhora"
        - "sánduthra"
        - "silmara"
        - "sóratha"
        - "tálgura"
        - "tálmena"
        - "ténkala"
        - "térgada"
        - "thálmora"
        - "thánduka"
        - "thergala"
        - "thórnasa"
        - "tirlaga"
        - "túrnada"
        - "ulmaka"
        - "urgadha"
      male:
        - "álkir"
        - "ándathal"
        - "ansel"
        - "ástheren"
        - "dalmoren"
        - "dárnokel"
        - "dhargan"
        - "dhenkalur"
        - "dolmir"
        - "dranketh"
        - "dúlmaren"
        - "gánthelar"
        - "ghalmir"
        - "ghórendal"
        - "gódranath"
        - "gólmaren"
        - "kándeleth"
        - "khalden"
        - "khoradel"
        - "karnoth"
        - "kéldarin"
        - "kírnasal"
        - "korsathan"
        - "lóranthek"
        - "lúmradan"
        - "máldureth"
        - "mérkantal"
        - "móghoren"
        - "nálketur"
        - "néldramar"
        - "norgathel"
        - "rándokir"
        - "rendulas"
        - "rónkaleth"
        - "sákhoran"
        - "sánduthar"
        - "silmaren"
        - "sórathek"
        - "tálgureth"
        - "taldor"
        - "ténkalor"
        - "térgadan"
        - "thálmoren"
        - "thándukar"
        - "thergalan"
        - "thórnasil"
        - "tirlagan"
        - "túrnadeth"
        - "ulmakar"
        - "urgadhen"
    clan:
      - "álkirindi"
      - "dhárgandi"
      - "dulundi"
      - "dránandi"
      - "ghórondi"
      - "gólondi"
      - "kháldendi"
      - "khorondi"
      - "kírindi"
      - "kárandi"
      - "mirindi"
      - "móghorendi"
      - "ronondi"
      - "sáthandi"
      - "silmarendi"
      - "thanandi"
      - "táldorondi"
      - "ténendi"
      - "térgadandi"
      - "tírindi"
  sounds:
    stress: {two: first, longer: first}
    edges:
      - {edge: openCluster, sounds: [tr, dr, kr, gr, thr, khr, ghr]}
      - {edge: closeConsonant, sounds: [k, l, n, r, s, ks, lm, nd, th, rth]}
    clusters: {max: 3}
  tongues:
    - {tag: aelendi, meaning: an Áelendi name, language: skill-aelendlng}
    - {tag: translation, meaning: a name given in the language of these pages}
    - {tag: exonym:<tongue>, meaning: "a name another people gives, in the tongue named"}
    - tag: other:<tongue>
      meaning: "a name in another tongue of the setting, as its speakers give it"
  register:
    - {name: Áelendan Wardens, tongue: translation}
    - {name: The Wardens, tongue: translation}
    - {name: Guardians of the Pact, tongue: translation}
    - {name: Cast Out, tongue: translation}
    - {name: Warden, tongue: translation}
    - {name: Elder Warden, tongue: translation}
    - {name: Runner, tongue: translation}
    - {name: Sálenda of the Long Stair, tongue: translation}
    - {name: sálenda, tongue: aelendi}
    - {name: "Urnel, the Bear of the High Corries", tongue: translation}
    - {name: urnel, tongue: aelendi}
    - {name: "Gildand, the West Wind", tongue: translation}
    - {name: gildand, tongue: aelendi}
    - {name: "Korsand, the Grey Wolf of the Ridge", tongue: translation}
    - {name: korsand, tongue: aelendi}
    - {name: "Timel, the Hawk of the Spine", tongue: translation}
    - {name: timel, tongue: aelendi}
    - {name: "Óssenda, the White Owl of the Hollow", tongue: translation}
    - {name: óssenda, tongue: aelendi}
    - {name: "Kiltas, the Red Fox of the Lower Wood", tongue: translation}
    - {name: kiltas, tongue: aelendi}
    - {name: "Tena, the Hearth of Ésalosa", tongue: translation}
    - {name: The Hearth, tongue: translation}
    - {name: tena, tongue: aelendi}
    - {name: the uron tekhi, tongue: aelendi}
    - {name: Áelendan People, tongue: translation}
    - {name: People of the Pact, tongue: translation}
    - {name: Áelendan Tribal Lands, tongue: translation}
    - {name: Tribal Lands, tongue: translation}
    - {name: The Interior, tongue: translation}
    - {name: The Drenavar Spine, tongue: translation}
    - {name: The Drenavar, tongue: translation}
    - {name: Drenavar Mountains, tongue: translation}
    - {name: Ésalosa Lodge, tongue: translation}
    - {name: ésalosa, tongue: aelendi}
    - {name: The Long Stair, tongue: translation}
    - {name: Sálenda's Stair, tongue: translation}
    - {name: The Owl Hollow, tongue: translation}
    - {name: Óssenda's Hollow, tongue: translation}
    - {name: Áelendi Language, tongue: translation}
    - {name: áelendi, tongue: aelendi}
    - {name: Thurarth Script, tongue: translation}
    - {name: thurarth, tongue: aelendi}
    - {name: dhargan, tongue: aelendi}
    - {name: nela, tongue: aelendi}
    - {name: silor, tongue: aelendi}
    - {name: ansel, tongue: aelendi}
    - {name: dranketh, tongue: aelendi}
    - {name: tala, tongue: aelendi}
    - {name: ghalmir, tongue: aelendi}
    - {name: mogha, tongue: aelendi}
    - {name: dulthan, tongue: aelendi}
    - {name: nelgan, tongue: aelendi}
    - {name: kírtala, tongue: aelendi}
    - {name: sírtala, tongue: aelendi}
    - {name: ronken, tongue: aelendi}
    - {name: tháurmira, tongue: aelendi}
    - {name: kélpasi, tongue: aelendi}
    - {name: khálpilonpu, tongue: aelendi}
    - {name: pálmirno, tongue: aelendi}
    - {name: dáimela, tongue: aelendi}
  retired:
    - {form: Aranwy, instead: Sálenda, why: a name borrowed from an Earth tongue}
    - {form: Arthgen, instead: Urnel, why: a name borrowed from an Earth tongue}
    - {form: Awelon, instead: Gildand, why: a name borrowed from an Earth tongue}
    - {form: Cadwyr, instead: Korsand, why: a name borrowed from an Earth tongue}
    - {form: Gwalchen, instead: Timel, why: a name borrowed from an Earth tongue}
    - {form: Nyfain, instead: Óssenda, why: a name borrowed from an Earth tongue}
    - {form: Rhysgen, instead: Kiltas, why: a name borrowed from an Earth tongue}
    - {form: Tanwen, instead: Tena, why: a name borrowed from an Earth tongue}
    - {form: At'aan Wyrd, instead: Uron Tekhi, why: a name borrowed from an Earth tongue}
    - {form: At'aan, instead: Uron, why: a name borrowed from an Earth tongue}
    - {form: Wyrd, instead: Tekhi, why: a name borrowed from an Earth tongue}
    - {form: wyrd, instead: nelth, why: an Earth word; the Nordmal word is written instead}
    - {form: Ceridwen's Hollow, instead: Kélpasi, why: a name borrowed from an Earth tongue}
    - {form: Gílpand, instead: Gildand, why: a name with a lip sound the tongue does not make}
    - {form: Pórsand, instead: Korsand, why: a name with a lip sound the tongue does not make}
    - {form: Tîpel, instead: Timel, why: a name with a lip sound the tongue does not make}
    - {form: Eshálosha, instead: Ésalosa, why: a name with a letter and a stress the tongue lacks}
    - {form: Thúravardh, instead: Thurarth, why: a name with a lip sound the tongue does not make}
    - form: kálmethathen
      instead: dhónkathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kaldrema
      instead: lonku
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - form: orkhaima
      instead: raumel
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - form: korathis
      instead: khirkel
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - form: alsemis
      instead: sotel
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - form: ílthera
      instead: núpanu
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - {form: ilthera, instead: ólparne, why: "the evening is written with the Sinale loan"}
    - form: sorimathen
      instead: luro
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - form: sorimand
      instead: lúronno
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - form: dokhathen
      instead: rúnathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: tharlema
      instead: óstila
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: marendis
      instead: sáumirsa
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - form: marendalon
      instead: saumi
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - form: marendand
      instead: sáuminno
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - form: tháurathen
      instead: ghélathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: tháuralon
      instead: ghélalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: lusathen
      instead: théndathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: semnalis
      instead: dhárela
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: khelmaron
      instead: gurthon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: últhathen
      instead: írthathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: últhandon
      instead: irthon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ánulthathen
      instead: ánirthathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thrima
      instead: ruthis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: nekhaimon
      instead: mirgon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kúrthema
      instead: mendis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kúrthalon
      instead: méndalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: semrotha
      instead: ondra
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kondamon
      instead: dhurnon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: liskaima
      instead: dhuskis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: dáimela
      instead: laghand
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: dáimathen
      instead: lághathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: lordemon
      instead: kurnis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: komrela
      instead: tirna
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: dáimelalon
      instead: lághalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thélmalon
      instead: súnalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: íthrola
      instead: khenthra
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: khedrilis
      instead: omris
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kholsama
      instead: athra
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: komrelalon
      instead: tírnalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: therona
      instead: dhelnis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: tarkhelon
      instead: dhólgalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: selkhora
      instead: dholga
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: rathauna
      instead: renthis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: nélamis
      instead: nelis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: tholmara
      instead: dulna
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ulmera
      instead: sira
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: dorkima
      instead: talgis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thersolis
      instead: ghersa
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thernathen
      instead: élthethen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: nardelon
      instead: kiron
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: oltrema
      instead: óskena
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thurkelon
      instead: móghalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: últhalon
      instead: írthalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: sarkhenanda
      instead: lónthanda
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thordima
      instead: kithe
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - form: thilandon
      instead: grathon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: dokhemon
      instead: runon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kordathen
      instead: drúgathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thrumathen
      instead: úldathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thrumar
      instead: uldar
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thárkelon
      instead: thorgon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: gáimela
      instead: kaipes
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - form: thurdimon
      instead: kranon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ulthimon
      instead: ghilson
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kelthathen
      instead: múghathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: solkimon
      instead: menthon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thradina
      instead: sorgis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: delalon
      instead: gherdon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: lokhathen
      instead: árnathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: tigathen
      instead: rógathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: okhethen
      instead: nórethen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: usathen
      instead: ghéthathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: dorandar
      instead: tenthar
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ránethur
      instead: methur
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: dorekhis
      instead: krenis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: en
      instead: mund
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kho
      instead: tos
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: enoi
      instead: nus
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ul
      instead: rek
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ar
      instead: nond
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: tha
      instead: ses
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ir
      instead: ris
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: us
      instead: gheth
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thaurand
      instead: gheland
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: semroth
      instead: ondren
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: sarkhenand
      instead: lonthand
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thordimand
      instead: símmenne
      why: "a word of the Sinale's own domains; the Sinale loan is written instead"
    - form: aruk
      instead: nonduk
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: tholmesa
      instead: nolgra
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kuthresa
      instead: thengra
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: dhámolis
      instead: ghorna
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: enthodis
      instead: ánkenis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: nasdis
      instead: thargis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: nasdalon
      instead: thárgalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ornalon
      instead: úrdalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thidharon
      instead: kernon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thidharand
      instead: kernand
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: dhaktela
      instead: laghis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kurdhalis
      instead: ughra
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: álthesa
      instead: ilda
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: orenon
      instead: molthon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: orenathen
      instead: mólthathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: dhílmara
      instead: mendra
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kresulathen
      instead: ághrathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thrameson
      instead: dharthon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thramesand
      instead: dharthand
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: nurison
      instead: lughon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thelaralon
      instead: úrkenon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kíramarlen
      instead: sílderon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: renkhon
      instead: telgon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: erosalon
      instead: mírdalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: káralson
      instead: kárathon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: sirothathen
      instead: máldathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: sirothalon
      instead: máldalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: sírothon
      instead: maldon
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: ánsiroth
      instead: ánmaldar
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: dumaralon
      instead: khálalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ramolsa
      instead: trénkira
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: remalis
      instead: ghalnis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: enthison
      instead: korthon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ghulm
      instead: drun
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: ghulmand
      instead: drunand
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: ghulmalon
      instead: drúnalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: gulmesa
      instead: drunsa
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ormalis
      instead: mirla
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: olthamis
      instead: ilmis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thremusis
      instead: sulmis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: sodhrakis
      instead: dorla
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: nélamesa
      instead: neldra
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: theronand
      instead: dhelnand
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: neralis
      instead: dulgis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ilaras
      instead: sirthal
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: khalmesar
      instead: khalmon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: grumalon
      instead: tálkeron
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: althokis
      instead: kerthis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: umelthathen
      instead: ánkenathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ritheson
      instead: ruskon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: rithesand
      instead: ruskand
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: nemethen
      instead: lúrgathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: némsenthira
      instead: lúrgsenthira
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: dhemrolon
      instead: ghromon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: dhemrolara
      instead: ghrómalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: serthasis
      instead: ganthis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: lamison
      instead: lethon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: loresathen
      instead: lórnethen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: loresand
      instead: lornand
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: oldhemon
      instead: moghon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: khésdathen
      instead: sárgathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: semarson
      instead: ugrin
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: grumesa
      instead: ghresa
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ghretala
      instead: ghenta
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: khadsimon
      instead: dhelkon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: dhurgalis
      instead: ghorthis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thurgeson
      instead: gandurth
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: thumalis
      instead: dhúrgala
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: malkhesa
      instead: thruk
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: radsimon
      instead: rúdhamon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: tamandon
      instead: ghársalon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ghartema
      instead: thelgis
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ghartand
      instead: thelgand
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: tháleson
      instead: ghrelon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: erdakis
      instead: dhesna
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: khésilon
      instead: ghenkon
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: losethen
      instead: thélkathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: ursithen
      instead: rónithen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: gháurathen
      instead: khálathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: elsathen
      instead: mésathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kháresathen
      instead: ghérkathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: kháresand
      instead: gherkand
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: orsathen
      instead: drósathen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: niseron
      instead: thinen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: elsur
      instead: ordhur
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: olemiks
      instead: rethik
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: sorimaks
      instead: dhorgen
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: umaris
      instead: takhes
      why: "a word that reads as a Vylari word; the native word is written instead"
    - form: táumaris
      instead: tátakhes
      why: "a word built on one that reads as a Vylari word; the new word is written instead"
    - form: thamesur
      instead: mórdamon
      why: "a word that reads as a Vylari word; the native word is written instead"
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Pelwar}}

# terran_analog: Áelendi is patterned on a conservative mountain branch of a family whose lowland daughters changed fast, with a deep layer of borrowings from a neighbor it shares nothing else with, in the way the Celtic tongues of the uplands kept old sounds and took words from their neighbors. Every loan is taken from a row of the Sinale lexicon, and every word is checked against Earth word lists.
---

Áelendi is a tongue of the [Pelwar Family]{.name data-type="lore"}. Fluency measures the sophistication of expression in Áelendi, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill; see below for the linguistic and cultural background of the tongue itself.

Áelendi is the most conservative member of the entire Pelwar language family, preserved and spoken by the [[lore-aelendnppl|Áelendan people]]—the "People of the Pact", whose culture is described in [[lore-aelendanclt|Áelendan]]—who dwell in the mountains of central [[place-elavendre|Élavendre]]. The Áelendan consider themselves the guardians of an ancient compact with the land itself, and their language reflects this sacred role.

## Overview

Áelendi descends from a Proto-Pelwar tongue (see [[lore-pelwarpepl|Pelwar People]]) and has been heavily influenced by [[skill-sinalelng|Sinale]], from which it has many loanwords (see [[skill-aelendlng#the-sinale-loans|the Sinale loans]]). Its speakers do not speak Sinale.

The Áelendan are [[lore-aelendanclt#the-unchanging|deeply conservative]]. Their language and their writing systems have not changed in hundreds of years. They deliberately minimize linguistic change as a matter of cultural practice, viewing language change as a form of cultural loss, and new concepts are made from ancient roots.

The [[skill-aelendlng#lexicon|Áelendi Lexicon]] gives the words with their sources and the elements the names are built from.

## How Áelendi sounds

Áelendi is the conservative highland tongue that [[skill-elvndrlng|Élavendri]] came from. It keeps the old, hard sounds that the lowland softened.

**The vowels.** _a_, _o_, _e_ and _i_ are held single and full.

**The consonants.** _dh_, _gh_ and _th_ carry the old sound, beside _r_, _l_, _n_, _d_, _g_ and _k_.

**Clusters.** _rg_, _rn_, _ld_, _nd_ and _rth_ meet inside a word. A word may close on _-n_, _-r_, _-d_ or _-th_.

**Endings.** Áelendi words end in _-on_, _-and_, _-is_, _-en_, _-i_ or _-a_.

**What Áelendi leaves out.** It has no apostrophe and none of the lowland vowel pairs (_ou_, _ae_). It avoids words of more than four syllables.

## Phonology

Áelendi preserves a complex phonemic inventory lost in younger Pelwar languages:

**Consonants:** Áelendi distinguishes plain, aspirated, and ejective consonants for most stop consonants (t/th/t', d/dh/d', k/kh/k', g/gh/g'). These distinctions, which have merged or been abandoned in Élavendri proper, remain phonemic and meaningful. The language employs only one fricative (s), one liquid of each type (l, r), and the nasals m and n, with other Pelwar fricatives represented as secondary articulations of stops.

**Vowels:** Áelendi maintains eight vowel positions with clear length distinctions. The nasal vowels of Élavendri are not true phonemes in Áelendi but rather the result of n dropping out after a vowel. The vowel inventory is more stable and resistant to diphthongization than in Élavendri.

**Stress:** Stress consistently falls on the first syllable of roots, following a clear predictable pattern. This predictability, combined with conservative phonetics, makes Áelendi relatively easy to learn despite its phonetic complexity.

### Áelendi and Élavendri

The two tongues descend from one, and nearly every difference between them is a distinction Élavendri has given up rather than one Áelendi has invented. This is what makes a conservative language conservative, and it is the most useful thing to know about Áelendi: hearing it, a lowlander is hearing his own speech with the losses put back.

**The ejectives.** Proto-Pelwar held three stop series, and Áelendi holds all three. Élavendri holds two: its ejectives have fallen together with the plain stops, which is why its inventory runs to four common stops where Áelendi's runs to twelve.

**The aspirates.** Where Áelendi closes the mouth, Élavendri opens it. Its th is breath rather than closure, and it has lost _kh_, _gh_ and _dh_. Áelendi keeps all four as stops, and is left with a single fricative for the whole language.

**The long vowels.** An Áelendi long vowel is held on one colour and let go. Élavendri broke those vowels into the diphthongs it is admired for, so an Áelendi long _a_ stands where Élavendri has _ae_, a long _i_ where it has _ia_ or _ie_, and a long _u_ where it has _ye_.

**The stress.** Áelendi has not moved its stress off the first syllable in the whole of its recorded life. Élavendri traded fixed stress for the melodic accent it sings by, pitch carrying as much as weight, which is the feature that defeats learners of the lowland tongue and the one an Áelendan finds hardest to take seriously.

Cognate pairs, the Áelendi form beside the Élavendri one:

| Áelendi  | Élavendri | What Élavendri let go                 |
| -------- | --------- | ------------------------------------- |
| Taldor   | Taldor    | the ejective, merged with the stop    |
| Khalden  | Halden    | the aspirated stop, weakened to h     |
| Móghoren | Moren     | gh, dropped between the vowels        |
| Deran    | Deren     | the long vowel, broken to a diphthong |

## Grammar Notes

**Word Order:** Áelendi employs a rigid SOV word order that has remained constant throughout its history. Poetic reordering is permitted but rare and marked as archaic even in ancient poetry.

**Gender:** Áelendi maintains three genders (masculine, feminine, neuter). The gender system correlates closely with semantic features (masculine = strength/light; feminine = growth/darkness; neuter = static/eternal).

**Articles:** Áelendi employs a simpler article system than Élavendri, with only definite and indefinite forms. The demonstrative system is more elaborate, reflecting Áelendan concerns with spatial and temporal precision.

### Ordinary expressions

The dictionary includes fixed expressions as well as single words. Their order and sense belong to the whole expression; a space does not turn two words into a new ending. In _ghur dhoris_, "terror", _ghur_ intensifies _dhoris_, "fear". The same intensifier gives _ghur rondis_, "awe", from admiration. _Ghren_ describes something sustained: _ghren ghárasa_ is resentment, anger kept over a wrong, and _ghren ilnis_ is longing, desire held toward something absent. These are feelings in ordinary human life. They name no additional rite or Sinale teaching.

_Dhárison_ is reliance on a word held true, with the Pact at its heart. _Mund ghirth tos dhárison dhárkathen_, "I hold trust in you", introduces the person relied on with _ghirth_, "toward", before the trust held. It says that the speaker relies on the other's keeping of their word. _Tenghis_ is confidence in one's ability or success; _tendris_ is conviction that a claim is true. Neither makes the claim _tenar_, true in fact. The physical tongue is _ghalis_; _óstila_ names speech and language.

The short bodily expressions keep their objects before the verb: _ruskis grunathen_, "to feel pain", and _sénthira dhárkathen_, "to hold hope". The place or direction words in _ris nímathen_, "to breathe in", _ghol nímathen_, "to breathe out", _ris rógathen_, "to go in", and _ghol rógathen_, "to go out", likewise stand before the action. _Nimon ghóldathen nond ghendathen_, "to suffocate", says that breath cannot be taken, using the negative ability expression. _Urgathen_ names the process of aging, growing older.

_Omrila_ names wool, the sheep fleece used for spinning; _tharsa_ remains the hair of the head. _Sira mirlis_, "mud", names water-soaked earth. _Ghorth thodkis_, "boot", names the high covering of the foot. _Kenlon tharan_ and _kenlon thara_ name a male and a female child; _kenlon_ includes named children as well as the unnamed child called _lughon_. These whole expressions give their own order; the name-building rules do not supply a general rule for every noun phrase. A grandparent, _úrkenalor_, follows the same established joining as _úrammira_ and _úrdathar_.

The place words give concrete locations: _ris kren miron_, "in some place", _ris nonduk miron_, "in no place", and _ris alnar miron_, "in all places". _Ghuth_ precedes what bounds the place: _ghuth tharan rek thara_, "between the man and the woman", or _ghuth sorethendi_, "among the kin". In _ris ordhur taldis_, "in position four; fourth", a numeral stands between _ris_ and _taldis_. Any numeral can name its own position there: _ris rethik taldis_, "fifth", and _ris takhes taldis_, "tenth". This positional expression adds no ordinal ending. _Dhima dhima_, "a quarter", is half of a half.

The quantity and comparison expressions state their full scope. _Gherin gheldar_ means "better", good to a greater degree; _gherin gheldar thinar ukal derar gharon_ means "best", better than each other thing in the comparison. _Gherin thinar ukal derar gharon_ and _thinen thinar ukal derar gharon_ say "most" and "least": more or less than each other thing. The words after _thinar_ name the comparison set, _ukal derar gharon_, "each other thing". _Thinar_ introduces the comparison standard: _gherin gheldar thinar to_, "better than that". _Ghuri ghuri_ gives emphatic degree, "extremely". _Ghul antemar_ and _send antemar_ name too much and too little: a great or small quantity that fails the fitting measure.

These expressions name a time or an occasion. _Ti kiron_ is "today", this day, and _murnel óssenda_ is "midnight", the middle of the night. _Ris kurnis kirdis_ is "during the feast", in the feast's time. _Kren kirdis_ means "sometimes"; _nal uk kirdin_, _nal ta kirdin_ and _nal ghurnar kirdin_ mean "once", "twice" and "repeatedly": on one, two or many occasions. _Nal trenen kirdin_ and _nal dálamen kirdin_ put an event at the first and next occasion in sequence, while _nal dhulon_, "at the ending", marks its final point. _Grend_ means "again", a recurrence of the action in question. _Nond ghend_ says that an expected event has not happened yet.

Questions use the words whose meanings they ask for: _gher miron_, "what place; where", _gher kirdis_, "what time; when", _gher dhelnon_, "what number; how many", _gher menthis_, "what amount; how much", and _gher ghoris_, "what reason; why". _Ghes_ asks who; _ghesri_ asks whose. _Khe_ opens a question that takes yes or no: _khe tos tis ónathen_, "are you here?". A question of manner uses _ghesin_: _tos ghesin rúnathen_, "how do you say it?". A questioning _gher rúnathen_ asks the speaker to repeat or explain.

The conversational entries give the whole utterance. Their subject and any object precede the cited verb form: _mund tos laghnathen_, "I thank you", _mund sarnathen_, "I understand", and _mund nond sarnathen_, "I do not understand". These plain utterances use the dictionary's cited verb form without person endings. A direct request names the person addressed: _tos tis árnathen_, "come here", and _tos mund kenthathen_, "help me". _Mund kernathen_, "I ask", is a courteous preface. _Nond molthon_, "no debt of honor", answers thanks by releasing the recipient from repayment. _Redha ghirth tos_, "peace to you", greets; _redha ris tos_, "peace in you", takes leave. The lodge-door greeting at first light keeps its own word, _trénkira_.

The modal entries give different kinds of limit. In _mund sénkathen ghendathen_, "I can walk", _ghendathen_ states bodily ability; _mund sénkathen nond ghendathen_ says that ability is lacking. _Mund sénkathen ghalgathen_ gives permission to walk. _Mund sénkathen targathen_ states an obligation, while _mund sénkathen norgathen_ states a prohibition. The requested action precedes its modal verb. _Mund ghrel rógathen ghalgathen_, "may I pass through", is the fixed courteous request used to pass or interrupt. Possibility is separate: _kherin eldathen_ says that the event named might happen. No permission follows from that uncertainty.

For linked alternatives, _ghos ... ghos_ marks "either ... or", _nond ghos ... nond ghos_ marks "neither ... nor", and _rek ... rek_ affirms both items. Each marker stands before its own item. _Ghus_ opens a condition; _ses_ introduces what follows from it. _Ghus nond_ opens the negative condition in "unless". _Ghus nond tos tis ónathen, ses mund ghurth rógathen_ means "unless you are here, I go away": if your being here is false, my going away follows. The negation in the joining expression applies to the entire condition that follows it. _Ghas ghus_ grants a fact despite its apparent conflict with the main claim, "although". _Ghas tenri_ affirms the main claim across that contrast, "nevertheless". These are joining expressions, not endings on the words they join.

The broad country words keep the local ones precise. _Dulnon_ names a lake in any setting, while _dulna_ is the tarn in its corrie. _Sirnon_ names a river above or below the tree line; _lánthepi_ remains the river below it. _Mirlon_ is land in general, while _mirla_ is a clan's grazing ground. _Kenrison_ is any line of descent; _úrkenon_ is the old line carried back to the crossing. The physical hearth is _khendron_; the fire kept there is _kárathon_.

The Sinale source and its Áelendi use need not have the same breadth. Sinale _pelvai_ names low cloud; Áelendi _pelpai_ is the ordinary word for any cloud. Sinale _nylki_ names the deep root; Áelendi _nilki_ names a plant root at any depth. These ordinary physical uses concern the wood and its weather, within the teaching open to humans.

_Either_ selects from the actual pair: _uk threl thend_, "one from the two", while _nonduk threl thend_ is "none from the two; neither". _Ghuri ghuri dhelar_, "exhausted", and _ghuri ghuri lunnar_, "tiny", use the degree adverb _ghuri_, repeated for extreme degree. The adjective _ghur_ describes a noun, as in _ghur dhoris_, "overwhelming fear". In _ris soldar rundis rúnathen_, "to shout", _ris_ introduces the loud voice in which the speech is made. _Ris nimon rundis rúnathen_ means "to whisper": _nimon rundis_, "breath voice", names the unvoiced manner of speech.

A weather report can be a complete clause: _nonduk pelpai elnathen_, "no cloud exists; the weather is clear", or _ghurnar pelpai elnathen_, "many clouds exist; it is cloudy". Each puts its cloud subject before _elnathen_, "to exist"; each serves as a report of sky conditions.

_Ghir_ links an object to the subject of the same clause: _mund ghir nórethen_, "I see myself", and _ghen ghir nórethen_, "he, she or it sees itself". The lexical possessives have concrete uses in _mundri khalthon_, "my house", _tosri ghenta_, "your spear", and _nusri omris_, "our sheep". These examples use the stated possessive word before the thing possessed.

The welcome offer keeps the host as the person giving a seat: _mund tos tis máldathen_, "I give you your place here; welcome". _Mund ghornis dhárkathen_, "I hold regret; sorry", names an emotional state held by the speaker. _Sendri_ states a small degree, "slightly"; _senri_ states a moderate degree, "somewhat".

## Liturgical Role

While Áelendi is a living language among the Áelendan, it also serves a sacred function for the broader Élavendre realm. Magical texts of great antiquity are written in Áelendi, and scholars of magic often learn Áelendi specifically to read these texts in their original form. The language is used in the highest magical workings, as the Áelendan believe it carries greater power due to its connection to ancient pact-making.

## Mutual Intelligibility

An Élavendri speaker cannot understand Áelendi without study. The phonetic differences alone create comprehension barriers, and the grammatical divergences multiply the difficulty. However, shared roots and similar overall structure allow motivated learners to acquire Áelendi, and many educated Élavendri speakers maintain passive comprehension of at least formal Áelendi.

Áelendi speakers generally understand Élavendri quite well from long contact, though their own speech takes nothing from it. Educated Áelendan often code-switch between Áelendi and Élavendri for pragmatic reasons.

## Script & Literacy

The settlers who came over the pass had only the [[skill-thrvrdhscrpt|Thurarth]] runes, the old rune-row of the highlands—the western, lenited branch of the same Proto-Pelwar graven work that gives the [[lore-nordheimnclt|Nordheimn]] their [[skill-thuravarkscript|Thuravark Runic Script]] and the [[affiliation-vylarinmpr|Vylarian Empire]] its [[skill-thrvrknscrpt|Tharavarkon Script]]. Thurarth is for carving, and they had nothing to write with in the ordinary way. Monuments, old magic and poetry are still cut in it, and its cuttings hold separate staves for the ejectives and the aspirated stops that [[skill-elvndrlng|Élavendri]] has let fall together, so a lowland scholar reading an old inscription is spelling sounds his own mouth no longer makes.

What is written rather than cut is written in the [[skill-clthndscrpt|Veldikko]], the Sinale starlight-hand, which the Áelendan took from their neighbours rather than received from any ancestor. Writing Áelendi in the Veldikko is not writing [[skill-sinalelng|Sinale]]: the script came across and the tongue did not. Áelendi is Pelwar in descent, takes its loanwords from Sinale without sharing its grammar, and is the language of every page set down in the hand. Anything old enough to be ancient in the region is therefore Áelendi, written in the Veldikko, and carved work is in Thurarth. The [[lore-flksinale|Sinale]] enclaves are near, old, and on terms with the highlands they keep with nobody else, and the hand came across the way everything else between them has. Why the Sinale opened it to these neighbours and not to others is the same question their whole closeness raises, and it has never been answered by either side.

[[skill-elvndrlng|Élavendri]] did not take it. The lowlands went the other way and adopted the [[skill-semrnscrpt|Semaron]], the working alphabet of the Vylarian Empire, and an Élavendri book is in imperial letters. So the two branches borrowed their writing from opposite neighbours, and that is the whole account of how they came to differ: one people stayed in the Sinale's orbit and took what the Sinale had, the other moved into Vylaria's and took what Vylaria had, and the speech of each went the way of the company it kept.

What the two hands reach is not comparable. An Élavendri page can be read by anyone holding the Semaron, which is most of the educated across [[place-midhalnrgn|Mídhalión Region]] and the western [[place-ankrscntnnt|Ankaris Continent]]; an Áelendi page can be read by the Sinale and by almost nobody else alive. And the two peoples can speak and cannot read—the tongues are near enough for a conversation, and the highlander commonly has the lowland one besides, but neither makes out a line the other has set down. Only in the carved work of magic and old poetry, which the Élavendri read as a learned skill, do they meet on a page.

The Áelendan hand is the same letters in an older, plainer ductus than the Sinale now write, and it has not changed in centuries. A borrowed script never fits, and this one misfits in both directions at once. Veldikko was made for a clean-consonant tongue and has no letter for an ejective or for an aspirated stop, so Áelendan scribes write both as ligatures—the hand's constant ligaturing put to a job Sinale never asked of it, and the first thing a Sinale reader notices. Running the other way, the marks the hand keeps for pitch have little to mark in a tongue whose stress never moves off the first syllable; the scribes spend them on vowel length instead, where eight positions and a length distinction need more than Sinale ever asked the marks to carry.

The Áelendan nonetheless write very little. The [Kindred Pact]{.name data-type="lore/law"} is deliberately unwritten, and the tradition holds that a thing committed to stone stops being renewed in the mouth. What is cut in Thurarth is therefore exceptional by definition: wards, boundary and grave markers, and the magical texts of great antiquity that draw mages up out of the lowlands to read them in the original. True literacy is confined to those training in the magical arts, a portion of the elders, and the occasional antiquarian from the [[affiliation-ordoarcanis|Thordimalon]] (the Arcane Order) who has been permitted—rarely, and under watch—to copy an inscription.

## Sample Phrases

"Áulira rónithen, náldursa úlpessen."
: "Light rises; darkness is the deep of night." (Ancient creation phrase, perfectly balanced.)

"Dhárison ghélathen ris tálparo."
: "Faith holds through a long age." (Oath formula.)

"Sorethendi áulira, sorethendi náldursa."
: "The kin of light, the kin of darkness." (Archaic dualistic reference.)

## Naming Traditions

A name is inherited. A child receives the name of an honoured ancestor and is expected to carry what came with it, and the Áelendan do not coin new ones lightly—a name entering a lineage for the first time is an event the Tradition Keepers record and recite afterward among the genealogies.

**A given name is a root, or two roots set together, and nothing else.** It carries one mark, over its first syllable, because that is where the stress falls. Masculine names close on a consonant and feminine names on -a; the neuter takes no personal names at all, belonging in the grammar to what is static and eternal.

**A clan name is the founder's name with an ending**—"those of X"—and that ending is the whole difference between the two lists. After a vowel it is -ndi; after n it is -di, the nasals fusing; after any other consonant it is -andi, -endi, -indi, -ondi or -undi, taking its vowel from the last full vowel of the stem. No given name ends this way and no clan name fails to, so a highlander never has to ask which he has been told. The tongue's own name is built by the rule: ael, "first light", with the ending gives Áelendi, "those of the Ael", and the people are the Áelendan by the same stem under the collective ending.

The roots are ordinary vocabulary, and a speaker hears the sense as he hears the name:

| Root | Sense          | Root | Sense            |
| ---- | -------------- | ---- | ---------------- |
| ael  | first light    | mir  | ground, footing  |
| kir  | light          | ron  | summit, horn     |
| sil  | song           | ken  | kindred          |
| sir  | living water   | dhar | oath, the Pact   |
| than | the deep dark  | gan  | pass, gate       |
| dul  | deep           | k'ar | kept fire        |
| thal | shadow         | t'en | unbroken         |
| tal  | standing stone | g'ol | root             |
| nel  | snow           | sath | wind off the ice |
| khal | hall           | tir  | pasture          |
| mogh | memory         | ur   | elder            |
| dran | thunder        | lor  | keeper           |

Élavendri names are the lowlanders' own and are not taken up here. An Áelendan meeting one places its bearer below the tree line before the second syllable is out.

## Male Given Names

Álkir, Ándathal, Ansel, Ástheren, Dalmoren, Dárnokel, Dhargan, Dhenkalur, Dolmir, Dranketh, Dúlmaren, Gánthelar, Ghalmir, Ghórendal, Gódranath, Gólmaren, Kándeleth, Khalden, Khoradel, Karnoth, Kéldarin, Kírnasal, Korsathan, Lóranthek, Lúmradan, Máldureth, Mérkantal, Móghoren, Nálketur, Néldramar, Norgathel, Rándokir, Rendulas, Rónkaleth, Sákhoran, Sánduthar, Silmaren, Sórathek, Tálgureth, Taldor, Ténkalor, Térgadan, Thálmoren, Thándukar, Thergalan, Thórnasil, Tirlagan, Túrnadeth, Ulmakar, Urgadhen

## Female Given Names

Álsira, Ánthela, Ástrela, Dalmira, Dárnoka, Dhálisa, Dhenusa, Doleta, Dránela, Dúmrana, Gánthira, Ghálosa, Ghórmela, Gódrusa, Gólmena, Kánthora, Khálisa, Khorsena, Kársela, Kéldira, Kírnala, Komsatha, Kélmisa, Lórantha, Lúmreda, Máldura, Mérkasa, Móghora, Nálketa, Néldrama, Norgatha, Rándira, Rendusa, Rónkala, Sákhora, Sánduthra, Silmara, Sóratha, Tálgura, Tálmena, Ténkala, Térgada, Thálmora, Thánduka, Thergala, Thórnasa, Tirlaga, Túrnada, Ulmaka, Urgadha

## Clan Names

Álkirindi, Dhárgandi, Dulundi, Dránandi, Ghórondi, Gólondi, Kháldendi, Khorondi, Kírindi, Kárandi, Mirindi, Móghorendi, Ronondi, Sáthandi, Silmarendi, Thanandi, Táldorondi, Ténendi, Térgadandi, Tírindi

## Áelendi Lexicon {#lexicon}

At a gathering in [[place-eshalshldg|Ésalosa]], before anything is decided, a Tradition Keeper stands and recites the names. He begins with the band that crossed the eastern pass and comes down, founder by founder and clan by clan, to the people sitting at the fire, and he does not hurry, because a name left out has stopped existing. Every name he says is an Áelendi word, and so is every word he uses to join them. Half the words for the wood outside came from the Sinale, and the Áelendan count them as their own.

This is the word-hoard of Áelendi, the tongue of the [[lore-aelendnppl|Áelendan]]. It is the Pelwar tongue that changed least: it still says the clicked stops the lowland speech gave up, and it makes no sound with the lips but _m_. It is also the only Pelwar tongue that took a whole second layer of words from a neighbor. The [[lore-flksinale|Sinale]] of the deep wood taught the band that crossed the pass how to keep the wood, and the words came with the keeping: the trees, the water below the snow line, the veil and the thin places, the rites and the hand the Áelendan write in. This page gives every word with its source, the pieces the names are built from.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited: a noun in its basic form, an adjective in its masculine, a verb in its infinitive. An inherited word is native Proto-Pelwar and names no source form, and a loan names its Sinale form, marked as the table of sources below sets out. Its meaning is given in Áelendi. A word made of smaller parts names the Áelendi words and suffixes it is made of.

### Sources

| Source    | From                                        | Meaning                                                                      |
| --------- | ------------------------------------------- | ---------------------------------------------------------------------------- |
| `*`       | —                                           | inherited: native Proto-Pelwar; no source form is given                      |
| `sinale:` | [[skill-sinalelng#lexicon\|Sinale Lexicon]] | a loan from Sinale: the Sinale form, as the Sinale lexicon gives it          |
| `built`   | —                                           | made in Áelendi from the words of this lexicon; the Built from cell says how |

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-aelendlng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

The tongue has no `f`, no `v`, no `b`, no `h` alone and no `w`: the only sound it makes with the lips is `m`. A Sinale `v` is said `p`, the one other lip sound the Áelendan learned to make for their neighbors' words, and a Sinale `w` is said `g`. So the yew, _eiva_ in the Sinale's mouth, is _eipa_ in an Áelendan's.

### Word edges

A word opens on a vowel, on one consonant, or on a stop with `r` after it. It closes on a vowel or on the consonants and pairs below; the pairs are what the ancient endings left when they fell.

```sql
SELECT CASE edge WHEN 'openCluster' THEN 'Pairs that may open a word' WHEN 'closeConsonant' THEN 'Consonants that close a word' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-aelendlng' ORDER BY position
```

### Clusters

No more than three consonants stand together, and a pair of letters such as `th` or `k'` counts as one.

```sql
SELECT 'Most consonants together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-aelendlng'
```

## The Sinale loans {#the-sinale-loans}

When the band came over the eastern pass, about two thousand one hundred years ago, the Sinale met them at the lowest pool and set a watch at [Talve]{.name data-type="place/site"}, and what they taught was the wood: "You learn it: tree, path, pool. And there are places where it's thin." The words came with the teaching. They are thickest where the teaching was, in the trees, the water below the snow line, the veil and the rites, and they are absent from the herds, the kin, the body, the numbers and the oath, which the band brought with it. A second band of loans came later with the [[skill-clthndscrpt|Veldikko]], the Sinale hand. The loans are almost all nouns. No pronoun, number, kin word, part of the body or ending was ever borrowed, and no given name, because names are inherited.

A loan noun takes its gender from its last sound: feminine on `-a`, neuter on any other vowel, masculine on a consonant.

The Áelendan do not count these words as borrowed. Asked, a Keeper says that they came with the keeping of the wood, and that a thing kept is part of the people who keep it. What the Áelendan refuse are the lowland words and the empire's: for a new thing from below they coin a word from their own roots, and a lowland word said in council is said once and corrected.

## Building words {#building-words}

### Suffixes

A few endings still make new words from old ones, and the clan endings make every clan name.

```sql
SELECT '`' || form || '`' AS "Suffix", attaches AS "Stem", gloss AS "Makes", coalesce(nullif(array_to_string(list_transform(examples, e -> regexp_replace(e, '^(\S+) > ([^\s,;]+)', '_\1_ > _\2_')), ', '), ''), '—') AS "Example"
FROM affixes
WHERE language = 'thalorna-note-skill-aelendlng'
ORDER BY position
```

### Given names

A given name is a name element, or two set together, with nothing added: the name element table below lists them.

| Ending | Who     | Class    |
| ------ | ------- | -------- |
| `-a`   | a woman | feminine |

A man's name closes on a consonant, as the masculine does, and needs no ending; a woman's closes on _-a_. The neuter takes no personal name.

### Clan names

| Ending                                      | Who                                              |
| ------------------------------------------- | ------------------------------------------------ |
| `-andi`, `-endi`, `-indi`, `-ondi`, `-undi` | a clan, named for its founder, after a consonant |
| `-ndi`                                      | a clan whose founder's name ends on a vowel      |
| `-di`                                       | a clan whose founder's name ends on _n_          |

### Name elements

The names are older than most of the words. A name element is the stem of a word, often a word the tongue has since lost or let shrink to the name alone, and the Tradition Keepers hold the meaning of each. The table gives each with its sense, and with the word it is the stem of where the lexicon has that word.

| Element | Sense            | Word       |
| ------- | ---------------- | ---------- |
| `ael`   | first light      | —          |
| `kir`   | light            | `kiron`    |
| `sil`   | song             | `sílderon` |
| `sir`   | living water     | `sira`     |
| `than`  | the deep dark    | —          |
| `dul`   | deep             | `dulna`    |
| `thal`  | shadow           | —          |
| `tal`   | standing stone   | `talgis`   |
| `nel`   | snow             | `nelis`    |
| `khal`  | hall             | `khálalon` |
| `mogh`  | memory           | `móghalon` |
| `mir`   | ground, footing  | `mirgon`   |
| `ron`   | summit, horn     | `rónithen` |
| `ken`   | kindred          | —          |
| `dhar`  | oath, the Pact   | `dharthon` |
| `gan`   | pass, gate       | `ganthis`  |
| `k'ar`  | kept fire        | `kárathon` |
| `t'en`  | unbroken         | `tenthar`  |
| `g'ol`  | root             | —          |
| `sath`  | wind off the ice | —          |
| `tir`   | pasture          | —          |
| `ur`    | elder            | `uron`     |
| `lor`   | keeper           | `lornand`  |
| `dran`  | thunder          | —          |
| `red`   | peace            | `redha`    |
| `thaur` | keeping          | —          |
| `ghulm` | horse            | —          |
| `semr`  | brother, sister  | —          |

## Words {#words}

### The Pact, the oath and the keeping

The Pact is never written, so the words for it are the oldest in the tongue and the most carefully said. An Áelendan who swears does not promise to do a thing; he puts himself under _dhárela_, a compact between two kins that the whole valley is witness to, and a man who breaks one owes _thengra_, a forfeit his kin pays with him. The worst sentence the elders can give is _ánkenis_, outlawry: being walked past the tree line and not let back, which is a death that takes longer.

The verb at the heart of the field is _ghélathen_, to keep. It is what a Warden does to a spring, a grove or a cairn: stands by it, turns away whoever comes for it, and answers for it to the kin. A keeper is _gheland_, and his duty, the whole of it, is _ghélalon_.

### Kin, the clan and the name

A clan is its founder's name with an ending, "those of" him, and the word for kin is built the same way: _sorethendi_, those of one blood. Nobody in the highlands belongs to a household the way a Vylarian belongs to one, under a master who answers for him. The head of a household is _sorkhand_, a man who speaks for the hearth in council, and the council can overrule him.

A child is _lughon_ until it is named, and the naming is the event. The genealogies, recited by the Tradition Keepers at every gathering, are lists of names and nothing else, and to have a name in them is to exist. An earned name, _sílderon_, is sung once at the gathering after the deed and is the bearer's from then on. A name inherited through a clan is _arlendi_, the same ending again. The lowland houses that claim Áelendan descent claim it in exactly these words, and the Keepers are the only people who can say whether the claim is true.

### The lodge, the fire and the guest

The lodge is a fire with a roof over it. Every hearth keeps _kárathon_, the kept fire, which is banked at night and never let die, and a household whose fire goes out borrows a coal from a neighbor and owes for it. Where a guest sits is settled before he is fed: _máldathen_ is to give a man his place at the fire, and _máldalon_ is the order of the seats, worked out again for every gathering.

Half the courtesy in this field came over the eastern pass from the [[lore-flksinale|Sinale]], and the loans are the gentler half. The native _khálalon_ is guest-right as a duty: what the hall owes the man under its roof. The loan _éllepirsa_ is guest-right as a welcome, the word the Áelendan use for what passes between them and their neighbors in the wood. _Tárnepi_, bread, is a loan as well, because the first bread the band was given on the far side of the pass was Sinale bread, and the offering is still made with it.

### Herds, pasture and the high grass

The Pelwar came out of the grasslands, and the highlands kept the grass words when they had little grass left to use them on. _Drun_, the horse, is the small hard-footed beast a herder rides up to the summer grazing in a valley of the Spine, and the herd a clan keeps between its valleys is _drúnalon_. The move up the mountain each spring, sheep and horses and families together, is _tírnalon_.

### Mountain, snow and stone

The Áelendan live where the snow lies half the year, and the snow word is _nelis_. It is the condition of life from autumn to the thaw, and winter is simply _neldra_, the snow-time. A valley is _dulgis_, a tarn in its corrie _dulna_, and a torrent in spate _sirthal_.

Stone is cut for two purposes, to raise as a boundary and to cover the dead. _Talgis_ is a pillar, _kerthis_ a dressed block, and _tálkeron_ the cut in a hillside where the stones for a ring were taken, which is left open and never quarried again.

### The body, life and death

The dead are buried under cairns, a stone for each kinsman who comes to the burial, so the size of a cairn is the size of a life. A single grave is _ghromon_. The field of cairns at the edge of a valley is _ghrómalon_. The Sinale words for death and grief, which the Áelendan use beside these, stand under the rites.

### Light, sky and the turning year

Here the two layers of the tongue lie side by side. The day and the month are inherited words, the ones the band brought over the pass. The sun and the moon, the light itself and the hours when it changes are Sinale: _khirkel_, the sun, _sotel_, the moon, _áulira_, light, _írpalo_, dawn, _ólpessa_, the long dusk, and _nupa_, starlight, the Sinale's own word for what they are. An Áelendan says _núpanu_ for a star and _nupa_ for the light it gives, and does not hear the two as belonging to different tongues.

The year is counted from the crossing, _ganthis_.

### Water and the wood's weather

Above the tree line the water is inherited and the weather is the mountain's: snow, the torrent, the tarn. Below it, in the wood the band was taught to keep, nearly every word is Sinale, because the Sinale named that water first and the newcomers learned it from them. The slow river is _lánthapo_ and the cold spring _kélpasi_, and the smell of rain coming, for which the grassland tongue had no word at all, is _sólmeri_.

### Trees and the living wood

The wood itself is _lonku_, the deep wood, the Sinale's word. Every tree that grows in it is called by a Sinale name. _Torpel_ is the oak, _khersel_ the pine, _eipa_ the yew, and a stand of birch is _kálpirno_. This is the field where the loans are thickest, because the trees were what the Sinale taught first: "You learn it: tree, path, pool." A birch stand within the deep wood, _khálpilonpu_, is a Sinale compound the Áelendan say whole and never take apart.

### The fae, the thin places and the wards

Nearly every word here is Sinale, and the Áelendan do not count a single one of them as foreign. The lore of the veil came with the keeping of the wood, and a thing that is kept is part of the people that keeps it. _Audhi_ is the veil, _sírnasto_ a thin place where it wears, and _orthi_ a ward. The fae themselves are _pénallanu_, one at a time; the tongue has a plural for them and the highlands do not say it.

The art the empire calls magic is _simme_ here, the Sinale word, and the Áelendi words for it share nothing with the [[affiliation-ordoarcanis|Thordimalon]]'s. These words, like the others for [[lore-flksinale#the-numinous|the numinous]], are Sinale loans for its outer fringe, which is all the Áelendan are taught. Áelendi has no word for the inner Sinale ways: the Áelendan have the concept and cannot fully apprehend it. The Arcane Order's scholars, who come up the valleys to study what the tribes exist to keep, have never been taught these words, and this is the field they most want.

### Rite and the dead

A rite is done the way the Sinale showed it, so its words are theirs, and the burial of the dead is a rite. _Sélporo_ is death, _ílparo_ grief, and _nélthapa_ the lament sung at the cairn. The Sinale plant a tree for each of their dead, and the Áelendan have kept the custom and its word, _sélposalpu_, beside their own cairns. A lingering spirit, one that will not go on, is _áipelo_. The binder who settles one is _náuldinno_, and the highlands keep two or three in every generation and do not speak of them.

### Song, speech and the letters

The Kindred Pact lives in the mouth, and the people who carry it are the Tradition Keepers, the _lornand_: a reciter, one who says the old words aloud at the gathering exactly as they were said to him. To recite is _lórnethen_; an account of what was done is _moghon_, a recitation that is never written down.

Letters are a borrowing, and late. The Áelendan cut a few words in [[skill-thrvrdhscrpt|Thurarth]], their own rune-row, and a stave of it is _ugrin_. What they write with ink they write in the Sinale hand, the [[skill-clthndscrpt|Veldikko]], which they call _példirno_; its scribe is _példinno_, and a roll of names kept in it _sírnerno_. These words came with the hand, a band of loans later than the rest.

### The Wardens and the border

The Áelendan keep no army and have needed one rarely, and the war words they inherited have shrunk to the size of the border they hold. The _uldar_ is the one who leads the Wardens of a valley. _Gandurth_ is the holding of a pass against whoever is coming up it. The word for peace is the one the whole family shares, _redha_, and in the highlands it means the quiet between neighbors more than the end of a war.

### Craft and the metals

A smith in the highlands works bronze and copper more than iron, and the metal words are the inherited ones. The verb _múghathen_ means to keep a craft in one family, taught to sons and daughters and to nobody else.

### Doing, going and being

The verbs are almost all inherited, and every inherited verb closes on the old infinitive ending, as _rógathen_ (to go) and _nórethen_ (to see) do. The few Sinale verbs in the tongue belong to the veil and the wood, and keep the Sinale shape.

### Numbers and grammar words

The numbers and the small words are the most worn part of any tongue, and Áelendi is no exception. The article _al_ is the old "yonder" worn to its first syllable, the same word imperial Vylari is wearing down in the streets of [[place-alyssa|Alessa]].

### Colour and the look of things

The colours are plain adjectives, each cited in its masculine.

## Attested names {#attested-names}

Every name in the scope of the Áelendi tongue—the Áelendan, their spirits and wardens, their lodge and mountains, the tongue and its rune-row—with every note where it is met. A name in the reader's tongue is listed so that the register is complete, and it is not built. An Áelendi name whose **Built from** cell shows `—` is one the lexicon does not yet make.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-aelendlng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-aelendlng' ORDER BY position
```

### Retired names

A retired name is one the setting does not write. Each stands below with the name written in its place, and no page writes it.

```sql
SELECT '`' || form || '`' AS "Retired",
       coalesce(array_to_string(list_transform(instead, x -> '`' || x || '`'), ', '), '—') AS "Written instead",
       why AS "Why"
FROM retired WHERE language = 'thalorna-note-skill-aelendlng' ORDER BY position
```
