---
shortcode: hvarnlng
name: {full: Hvarn Language, aliases: []}
type: skill
subType: language
description: "The tongue of the guide-people of the Eastern Reach—unrelated to any lowland family, unwritten, and the one trans-Grazian language a lowlander occasionally learns."
tags: []
data:
  roman: "abdefghiklmnoprstuvwzABDEFGHIKLMNOPRSTUVWZáéíóúëÁÉÍÓÚË0123456789()–-"
  core: true
  abbreviation: Hv.
  fields:
    - name: The people and the house
      holds: "The people, the long house, its hearths and what the hearths owe one another."
    - name: The road and the party
      holds: "The crossings of the Eastern Reach, the rope and the party that walks on it."
    - name: The roll
      holds: "The dead, the places they were found, and the recitation that keeps both."
    - name: The winter council
      holds: "The offices of the council, each a compound of two words."
    - name: Everyday speech
      holds: "Ordinary expressions for perception, bodily life, relationships, things, actions and conversation."
  words:
    - form: hvarn
      class: "n"
      field: The people and the house
      gloss: "the people, the Hvarn as they name themselves"
    - form: vharn
      class: "n"
      field: The people and the house
      gloss: "the long house, one roof over the whole people"
    - form: kuzh
      class: "n"
      field: The people and the house
      gloss: "a hearth, a household at one fire"
      concept: hearth
    - form: douzen
      class: "n"
      field: The people and the house
      gloss: "winter, the closed months"
    - form: ruven
      class: "n"
      field: The people and the house
      gloss: "a debt between hearths"
      concept: debt
    - form: sevd
      class: "n"
      field: The people and the house
      gloss: "the turn, the rotation by which the crossings are shared"
    - {form: vosh, class: "n", field: The road and the party, gloss: "a crossing of the Reach"}
    - form: geiv
      class: "n"
      field: The road and the party
      gloss: "a shelf, the ledge a crossing follows above a gorge"
    - {form: wuvd, class: "n", field: The road and the party, gloss: "a gorge"}
    - form: kleizd
      class: "n"
      field: The road and the party
      gloss: "a storm of the Reach"
      concept: storm
    - {form: zvazd, class: "n", field: The road and the party, gloss: "a rope", concept: rope}
    - form: muven
      class: "n"
      field: The road and the party
      gloss: "a party, those who walk on one rope"
    - {form: rouzen, class: "n", field: The roll, gloss: "the roll of the dead"}
    - {form: hozd, class: "n", field: The roll, gloss: "the place where one of the dead was found"}
    - {form: dzevd, class: "n", field: The roll, gloss: "a bone", concept: bone}
    - {form: poudz, class: v, field: The roll, gloss: "bring up from below"}
    - {form: zourd, class: v, field: The roll, gloss: "recite, say aloud before the council"}
    - {form: nezen, class: v, field: The roll, gloss: "read the weather"}
    - form: dzevdpoudz
      class: "n"
      field: The winter council
      gloss: "the bone-bringer, who recovers the dead and keeps the roll"
      built: [dzevd, poudz]
    - form: kleizdnezen
      class: "n"
      field: The winter council
      gloss: "the storm-reader, whose refusal ends a day's travel"
      built: [kleizd, nezen]
    - form: douzenzourd
      class: "n"
      field: The winter council
      gloss: "the winter-speaker, who presides over the council"
      built: [douzen, zourd]
    - {form: hvord, class: n, field: Everyday speech, gloss: fire, concept: fire}
    - {form: dzeng, class: n, field: Everyday speech, gloss: "metal, gold", concept: metal}
    - {form: vroun, class: n, field: Everyday speech, gloss: wood, concept: wood}
    - form: vezd
      class: n
      field: Everyday speech
      gloss: water, river
      concept: [water, river]
    - form: verned
      class: n
      field: Everyday speech
      gloss: earth, soil
      concept: [earth, soil]
    - {form: rheiv, class: n, field: Everyday speech, gloss: wind, concept: wind}
    - form: hvol
      class: n
      field: Everyday speech
      gloss: a place; a location
      concept: [place-noun]
    - {form: zhoun, class: n, field: Everyday speech, gloss: cloud, concept: cloud}
    - {form: zheiv, class: n, field: Everyday speech, gloss: star, concept: star}
    - {form: zhuv, class: n, field: Everyday speech, gloss: "moon, month", concept: [moon, month]}
    - form: vrez
      class: n
      field: Everyday speech
      gloss: "a flower; the bloom of a plant"
      concept: flower
    - {form: brend, class: n, field: Everyday speech, gloss: "field, garden", concept: field}
    - {form: vour, class: n, field: Everyday speech, gloss: "sea, ocean", concept: [sea, ocean]}
    - {form: zhend, class: n, field: Everyday speech, gloss: snow, concept: snow}
    - {form: drouzd, class: n, field: Everyday speech, gloss: thunder, concept: thunder}
    - {form: dzern, class: n, field: Everyday speech, gloss: lightning, concept: lightning}
    - form: hven
      class: n
      field: Everyday speech
      gloss: the sky; the visible expanse above the land
      concept: sky
    - {form: vren, class: adj, field: Everyday speech, gloss: green, concept: green}
    - {form: dzein, class: adj, field: Everyday speech, gloss: blue in color, concept: blue}
    - {form: rhazd, class: adj, field: Everyday speech, gloss: "red, vermilion", concept: red}
    - form: vhez
      class: adj
      field: Everyday speech
      gloss: white; silvery white in color
      concept: white
    - form: zhurn
      class: adj
      field: Everyday speech
      gloss: dark; black; hidden from view
      concept: [black, dark]
    - {form: hvein, class: adj, field: Everyday speech, gloss: bright; radiant, concept: bright}
    - {form: neir, class: num, field: Everyday speech, gloss: nine, concept: nine}
    - {form: vund, class: num, field: Everyday speech, gloss: five, concept: five}
    - {form: zhenv, class: num, field: Everyday speech, gloss: ten, concept: ten}
    - {form: rhend, class: n, field: Everyday speech, gloss: "sovereign, ruler", concept: ruler}
    - form: drevl
      class: n
      field: Everyday speech
      gloss: a teacher; someone who teaches a craft or practice
      concept: [teacher]
    - form: vhin
      class: n
      field: Everyday speech
      gloss: a child; offspring; a son in the kinship context that distinguishes sons and daughters
      concept: [son, child]
    - {form: vher, class: n, field: Everyday speech, gloss: "person, folk", concept: person}
    - form: mourn
      class: n
      field: Everyday speech
      gloss: tribe, group, people
      concept: [people, group, tribe]
    - form: zharn
      class: n
      field: Everyday speech
      gloss: house, clan, family
      concept: [family, clan]
    - {form: hvel, class: n, field: Everyday speech, gloss: hand, concept: hand}
    - form: hvev
      class: n
      field: Everyday speech
      gloss: a breath; one drawing in or release of air
      concept: breath
    - {form: dreiv, class: n, field: Everyday speech, gloss: "law, rule", concept: [law, rule]}
    - form: rheln
      class: n
      field: Everyday speech
      gloss: balance, harmony, calm; peace; a condition of calm without fighting
      concept: peace
    - {form: dourn, class: n, field: Everyday speech, gloss: death, concept: death}
    - {form: zhivn, class: n, field: Everyday speech, gloss: "life, birth", concept: [birth, life]}
    - {form: dzenv, class: n, field: Everyday speech, gloss: "wealth, fortune", concept: wealth}
    - form: zevn
      class: n
      field: Everyday speech
      gloss: knowledge; lore; an account kept in memory or recitation
      concept: knowledge
    - form: zelv
      class: n
      field: Everyday speech
      gloss: self, own; as a reflexive object, ev zelv hvaz means I see myself, and oz vher zelv hvaz means that person sees themself. In each clause the self is the subject of that clause
      concept: self
    - form: zeil
      class: n
      field: Everyday speech
      gloss: account, reckoning, tally; the numerical count or measured amount shown by a tally
      concept: [number, amount]
    - {form: nevd, class: n, field: Everyday speech, gloss: year, concept: year}
    - {form: mouv, class: n, field: Everyday speech, gloss: dream, concept: dream}
    - form: vherd
      class: n
      field: Everyday speech
      gloss: a bird; an animal with feathers and wings
      concept: bird
    - {form: vourd, class: v, field: Everyday speech, gloss: "to rise, to ascend", concept: rise}
    - {form: vould, class: v, field: Everyday speech, gloss: "to fall, to descend", concept: fall}
    - {form: vrend, class: v, field: Everyday speech, gloss: to freeze; winter, concept: freeze}
    - form: zhev
      class: v
      field: Everyday speech
      gloss: to answer, to echo. This is the form for the named participant’s own act or experience.
      concept: answer
    - form: vhar
      class: adj
      field: Everyday speech
      gloss: great, supreme; large in physical size, with repetition expressing a very great or huge size
      concept: big
    - form: vrun
      class: adj
      field: Everyday speech
      gloss: old, ancient, eternal
      concept: old-object
    - form: niv
      class: adj
      field: Everyday speech
      gloss: new, lesser, small
      concept: [small, new]
    - form: hvaz
      class: v
      field: Everyday speech
      gloss: "to see, look or watch personally. Ev drak hvaz: I see the mountain myself. As a request for personal attention, hvaz means look. The paired party-observation form is dzav. This is the form for the named participant’s own act or experience."
      concept: [see-verb, look, watch, expression-look]
    - form: hveiz
      class: n
      field: Everyday speech
      gloss: sight, view; what is seen
      concept: see-noun
    - form: dzoun
      class: v
      field: Everyday speech
      gloss: to hear, to listen; to listen deliberately as well as hear; as a call for attention, listen. This is the form for the named participant’s own act or experience.
      concept: [hear-verb, listen, expression-listen]
    - form: dzovn
      class: n
      field: Everyday speech
      gloss: sound, voice; a voice as well as other audible sound
      concept: [hear-noun, voice]
    - form: nouz
      class: v
      field: Everyday speech
      gloss: to smell. This is the form for the named participant’s own act or experience.
      concept: smell-verb
    - form: noul
      class: n
      field: Everyday speech
      gloss: smell, scent, odour
      concept: smell-noun
    - form: mezh
      class: v
      field: Everyday speech
      gloss: to taste. This is the form for the named participant’s own act or experience.
      concept: taste-verb
    - {form: meid, class: n, field: Everyday speech, gloss: "taste, flavour", concept: taste-noun}
    - form: hvul
      class: v
      field: Everyday speech
      gloss: to touch, to feel with the hand. This is the form for the named participant’s own act or experience.
      concept: touch-verb
    - {form: rhen, class: n, field: Everyday speech, gloss: head, concept: head}
    - {form: rhenv, class: n, field: Everyday speech, gloss: hair of the head, concept: hair}
    - {form: vhel, class: n, field: Everyday speech, gloss: face, concept: face}
    - {form: hvezh, class: n, field: Everyday speech, gloss: eye, concept: eye}
    - {form: dzun, class: n, field: Everyday speech, gloss: ear, concept: ear}
    - {form: nourn, class: n, field: Everyday speech, gloss: nose, concept: nose}
    - {form: mezv, class: n, field: Everyday speech, gloss: mouth, concept: mouth}
    - {form: kenv, class: n, field: Everyday speech, gloss: tooth, concept: tooth}
    - {form: meilv, class: n, field: Everyday speech, gloss: tongue, concept: tongue}
    - form: rhoun
      class: n
      field: Everyday speech
      gloss: neck, throat
      concept: [neck, throat]
    - {form: brelzh, class: n, field: Everyday speech, gloss: shoulder, concept: shoulder}
    - {form: breiv, class: n, field: Everyday speech, gloss: arm, concept: arm}
    - {form: hvil, class: n, field: Everyday speech, gloss: finger, concept: finger}
    - {form: rhouv, class: n, field: Everyday speech, gloss: "chest, breast-bone", concept: chest}
    - {form: mevl, class: n, field: Everyday speech, gloss: breast, concept: breast}
    - form: dzeln
      class: n
      field: Everyday speech
      gloss: heart; seat of feeling
      concept: heart
    - {form: mournv, class: n, field: Everyday speech, gloss: belly, concept: belly}
    - {form: vheld, class: n, field: Everyday speech, gloss: back, concept: back}
    - {form: voulzh, class: n, field: Everyday speech, gloss: hip, concept: hip}
    - {form: vrel, class: n, field: Everyday speech, gloss: leg, concept: leg}
    - {form: vrol, class: n, field: Everyday speech, gloss: foot, concept: foot}
    - {form: zhelv, class: n, field: Everyday speech, gloss: "skin, hide", concept: skin}
    - {form: dzerv, class: n, field: Everyday speech, gloss: blood, concept: blood}
    - {form: mev, class: n, field: Everyday speech, gloss: "flesh, meat", concept: flesh}
    - {form: mezd, class: n, field: Everyday speech, gloss: "food, meal", concept: food}
    - form: meld
      class: v
      field: Everyday speech
      gloss: to eat. This is the form for the named participant’s own act or experience.
      concept: eat
    - {form: drouv, class: n, field: Everyday speech, gloss: drink, concept: drink-noun}
    - form: droun
      class: v
      field: Everyday speech
      gloss: to drink. This is the form for the named participant’s own act or experience.
      concept: drink-verb
    - form: hvevr
      class: v
      field: Everyday speech
      gloss: to breathe. This is the form for the named participant’s own act or experience.
      concept: breathe
    - form: moun
      class: v
      field: Everyday speech
      gloss: to sleep. This is the form for the named participant’s own act or experience.
      concept: sleep-verb
    - {form: zouvr, class: n, field: Everyday speech, gloss: urine, concept: urine}
    - {form: murn, class: n, field: Everyday speech, gloss: "dung, excrement", concept: dung}
    - form: hvorn
      class: n
      field: Everyday speech
      gloss: warmth; a warm temperature
      concept: warmth
    - {form: treiv, class: n, field: Everyday speech, gloss: table, concept: table}
    - {form: vhard, class: n, field: Everyday speech, gloss: floor, concept: floor}
    - {form: zheld, class: n, field: Everyday speech, gloss: wall, concept: wall}
    - {form: vhol, class: n, field: Everyday speech, gloss: roof, concept: roof}
    - form: vern
      class: n
      field: Everyday speech
      gloss: a house; an abode or home
      concept: abode
    - {form: delv, class: n, field: Everyday speech, gloss: "door, gate", concept: [door, gate]}
    - form: delzd
      class: n
      field: Everyday speech
      gloss: a lock; a fastening opened by a key
      concept: lock
    - {form: dreln, class: n, field: Everyday speech, gloss: cup, concept: cup}
    - {form: melv, class: n, field: Everyday speech, gloss: bowl, concept: bowl}
    - {form: meil, class: n, field: Everyday speech, gloss: spoon, concept: spoon}
    - {form: mevzd, class: n, field: Everyday speech, gloss: pot, concept: pot}
    - {form: zheivn, class: n, field: Everyday speech, gloss: cloth, concept: cloth}
    - {form: en, class: num, field: Everyday speech, gloss: one, concept: one}
    - {form: ouz, class: num, field: Everyday speech, gloss: two, concept: two}
    - {form: ved, class: num, field: Everyday speech, gloss: three, concept: three}
    - {form: vul, class: num, field: Everyday speech, gloss: four, concept: four}
    - {form: shev, class: num, field: Everyday speech, gloss: six, concept: six}
    - {form: zhel, class: num, field: Everyday speech, gloss: seven, concept: seven}
    - {form: oum, class: num, field: Everyday speech, gloss: eight, concept: eight}
    - {form: geivn, class: num, field: Everyday speech, gloss: hundred, concept: hundred}
    - {form: vung, class: num, field: Everyday speech, gloss: thousand, concept: thousand}
    - {form: ouzn, class: num, field: Everyday speech, gloss: half, concept: half}
    - {form: mav, class: adj, field: Everyday speech, gloss: "many, much", concept: [many, much]}
    - form: nel
      class: adj
      field: Everyday speech
      gloss: few, little
      concept: [few, little-quantity]
    - {form: muln, class: adj, field: Everyday speech, gloss: "none, nothing; not", concept: none}
    - {form: dzour, class: adj, field: Everyday speech, gloss: yellow, concept: yellow}
    - form: drelzh
      class: adj
      field: Everyday speech
      gloss: grey, ash-coloured
      concept: grey
    - {form: brouv, class: adj, field: Everyday speech, gloss: brown, concept: brown}
    - {form: mezhn, class: n, field: Everyday speech, gloss: mother, concept: mother}
    - {form: bozhn, class: n, field: Everyday speech, gloss: father, concept: father}
    - {form: brezd, class: n, field: Everyday speech, gloss: brother, concept: brother}
    - {form: breln, class: n, field: Everyday speech, gloss: sister, concept: sister}
    - form: ezv
      class: v
      field: Everyday speech
      gloss: to be; to exist, as well as to be
      concept: [be, exist]
    - {form: havd, class: v, field: Everyday speech, gloss: to have, concept: have}
    - form: vrek
      class: v
      field: Everyday speech
      gloss: "to go in one’s own individual capacity. Ev hvol uz vrek: I go to the place personally. The paired party form is vhord. This is the form for the named participant’s own act or experience."
      concept: go
    - form: vrok
      class: v
      field: Everyday speech
      gloss: to come. This is the form for the named participant’s own act or experience.
      concept: come
    - form: zhav
      class: v
      field: Everyday speech
      gloss: to give. This is the form for the named participant’s own act or experience.
      concept: give
    - form: drev
      class: v
      field: Everyday speech
      gloss: to take. This is the form for the named participant’s own act or experience.
      concept: take
    - form: vhedz
      class: v
      field: Everyday speech
      gloss: to make. This is the form for the named participant’s own act or experience.
      concept: make
    - form: drevn
      class: v
      field: Everyday speech
      gloss: to do. This is the form for the named participant’s own act or experience.
      concept: do
    - form: dzel
      class: v
      field: Everyday speech
      gloss: to say. This is the form for the named participant’s own act or experience.
      concept: say
    - form: dzelnv
      class: v
      field: Everyday speech
      gloss: to speak, to talk. This is the form for the named participant’s own act or experience.
      concept: speak
    - form: zevd
      class: v
      field: Everyday speech
      gloss: to know. This is the form for the named participant’s own act or experience.
      concept: know
    - form: mend
      class: v
      field: Everyday speech
      gloss: to think. This is the form for the named participant’s own act or experience.
      concept: think
    - form: lev
      class: v
      field: Everyday speech
      gloss: to want, to desire. This is the form for the named participant’s own act or experience.
      concept: [want, wish-verb]
    - form: zhevn
      class: v
      field: Everyday speech
      gloss: to live; to be alive
      concept: [live, alive]
    - {form: dourk, class: v, field: Everyday speech, gloss: to die, concept: die}
    - form: vral
      class: v
      field: Everyday speech
      gloss: to walk. This is the form for the named participant’s own act or experience.
      concept: walk
    - form: vreik
      class: v
      field: Everyday speech
      gloss: to run. This is the form for the named participant’s own act or experience.
      concept: run
    - form: zeld
      class: v
      field: Everyday speech
      gloss: to sit. This is the form for the named participant’s own act or experience.
      concept: sit
    - form: drevk
      class: v
      field: Everyday speech
      gloss: to stand. This is the form for the named participant’s own act or experience.
      concept: stand
    - form: mold
      class: v
      field: Everyday speech
      gloss: to lie down. This is the form for the named participant’s own act or experience.
      concept: lie-down
    - form: gevn
      class: v
      field: Everyday speech
      gloss: to hold. This is the form for the named participant’s own act or experience.
      concept: hold
    - form: brouzd
      class: v
      field: Everyday speech
      gloss: to carry; to bring toward the speaker or named destination. Ev mevzd ez hvol uz brouzd means I bring the pot to this place. This is the personal-act form, paired with bravn for carrying as a party member. This is the form for the named participant’s own act or experience.
      concept: [bring, carry]
    - form: ledv
      class: v
      field: Everyday speech
      gloss: to put, to set down. This is the form for the named participant’s own act or experience.
      concept: put
    - form: hvouz
      class: v
      field: Everyday speech
      gloss: to find. This is the form for the named participant’s own act or experience.
      concept: find
    - form: hvoun
      class: v
      field: Everyday speech
      gloss: to lose. This is the form for the named participant’s own act or experience.
      concept: lose
    - form: drezl
      class: v
      field: Everyday speech
      gloss: to open. This is the form for the named participant’s own act or experience.
      concept: open
    - form: delvn
      class: v
      field: Everyday speech
      gloss: to close, to shut. This is the form for the named participant’s own act or experience.
      concept: close
    - form: drevz
      class: v
      field: Everyday speech
      gloss: to begin. This is the form for the named participant’s own act or experience.
      concept: begin
    - form: vold
      class: v
      field: Everyday speech
      gloss: to end, to finish. This is the form for the named participant’s own act or experience.
      concept: end
    - form: mezhd
      class: n
      field: Everyday speech
      gloss: "A woman; an adult female human. Before another person, kinship or body word in a compound, it marks female sex without requiring adulthood of the compound’s referent."
      concept: woman
    - form: bozhd
      class: n
      field: Everyday speech
      gloss: "A man; an adult male human. Before another person, kinship or body word in a compound, it marks male sex without requiring adulthood of the compound’s referent."
      concept: man
    - form: redv
      class: num
      field: Everyday speech
      gloss: rank, place in order
      concept: rank
    - form: hvulhvel
      class: n
      field: Everyday speech
      gloss: touch
      concept: touch-noun
      built: [hvul, hvel]
    - form: hvorddzeln
      class: n
      field: Everyday speech
      gloss: wrath
      concept: wrath
      built: [hvord, dzeln]
    - form: zhurndzeln
      class: n
      field: Everyday speech
      gloss: envy
      concept: envy
      built: [zhurn, dzeln]
    - form: hveindzeln
      class: n
      field: Everyday speech
      gloss: hope
      concept: hope
      built: [hvein, dzeln]
    - form: levvourn
      class: n
      field: Everyday speech
      gloss: greed
      concept: greed
      built: [lev, vourn]
    - {form: vourn, class: num, field: Everyday speech, gloss: "ten thousand, a myriad"}
    - form: vharmezv
      class: n
      field: Everyday speech
      gloss: boasting
      concept: boasting
      built: [vhar, mezv]
    - form: vharzelv
      class: n
      field: Everyday speech
      gloss: pride
      concept: pride
      built: [vhar, zelv]
    - form: rhazdlev
      class: n
      field: Everyday speech
      gloss: lust; strong sexual desire, distinct from romantic attachment
      concept: lust
      built: [rhazd, lev]
    - form: dourndzeln
      class: n
      field: Everyday speech
      gloss: despair
      concept: despair
      built: [dourn, dzeln]
    - form: voulddzeln
      class: n
      field: Everyday speech
      gloss: disappointment
      concept: disappointment
      built: [vould, dzeln]
    - form: dzelrn
      class: n
      field: Everyday speech
      gloss: faith; deep trust or commitment to a belief beyond what present evidence establishes
      concept: faith
    - form: rhazdhviln
      class: n
      field: Everyday speech
      gloss: romantic love; affection and attachment toward a romantic beloved, distinct from sexual lust
      concept: love-eros
      built: [rhazd, hviln]
    - form: hviln
      class: n
      field: Everyday speech
      gloss: love; affection; fondness and attachment toward another
    - form: vrodhviln
      class: n
      field: Everyday speech
      gloss: friendship; loving regard toward chosen friends and companions, conventionally path-love
      concept: love-philia
      built: [vrod, hviln]
    - {form: vrod, class: n, field: Everyday speech, gloss: "path, road, journey"}
    - form: kuzhhviln
      class: n
      field: Everyday speech
      gloss: family love; the loving attachment of kin and household members, conventionally hearth-love
      concept: love-storge
      built: [kuzh, hviln]
    - form: vournhviln
      class: n
      field: Everyday speech
      gloss: universal selfless love; care for all people without demanding return, conventionally myriad-love
      concept: love-agape
      built: [vourn, hviln]
    - form: mezvvrez
      class: n
      field: Everyday speech
      gloss: lip
      concept: lip
      built: [mezv, vrez]
    - form: breivgezv
      class: n
      field: Everyday speech
      gloss: elbow
      concept: elbow
      built: [breiv, gezv]
    - {form: gezv, class: n, field: Everyday speech, gloss: "joint, knot; where a limb bends"}
    - form: hvildzeil
      class: n
      field: Everyday speech
      gloss: fingernail
      concept: nail
      built: [hvil, dzeil]
    - form: dzeil
      class: n
      field: Everyday speech
      gloss: "horn; hard keratinous material, including the covering of a nail"
    - form: vrelgezv
      class: n
      field: Everyday speech
      gloss: knee
      concept: knee
      built: [vrel, gezv]
    - form: vrolhvil
      class: n
      field: Everyday speech
      gloss: toe
      concept: toe
      built: [vrol, hvil]
    - form: hvenhvev
      class: n
      field: Everyday speech
      gloss: air; the gases around us, needed for breathing
      concept: air
      built: [hven, hvev]
    - form: mounmouv
      class: n
      field: Everyday speech
      gloss: sleep
      concept: sleep-noun
      built: [moun, mouv]
    - form: zouvrvould
      class: v
      field: Everyday speech
      gloss: to urinate. This is the form for the named participant’s own act or experience.
      concept: urinate
      built: [zouvr, vould]
    - form: murnvould
      class: v
      field: Everyday speech
      gloss: to defecate. This is the form for the named participant’s own act or experience.
      concept: defecate
      built: [murn, vould]
    - form: vholrheln
      class: n
      field: Everyday speech
      gloss: shelter
      concept: shelter
      built: [vhol, rheln]
    - form: zeldvroun
      class: n
      field: Everyday speech
      gloss: chair
      concept: chair
      built: [zeld, vroun]
    - form: moldvroun
      class: n
      field: Everyday speech
      gloss: bed
      concept: bed
      built: [mold, vroun]
    - form: delzdkleiv
      class: n
      field: Everyday speech
      gloss: key
      concept: key
      built: [delzd, kleiv]
    - {form: kleiv, class: n, field: Everyday speech, gloss: blade}
    - form: hveindelv
      class: n
      field: Everyday speech
      gloss: window
      concept: window
      built: [hvein, delv]
    - form: zhurndelv
      class: n
      field: Everyday speech
      gloss: shutters
      concept: shutters
      built: [zhurn, delv]
    - form: nivkleiv
      class: n
      field: Everyday speech
      gloss: knife
      concept: knife
      built: [niv, kleiv]
    - form: hveinhvord
      class: n
      field: Everyday speech
      gloss: lamp
      concept: lamp
      built: [hvein, hvord]
    - form: zhelvzheivn
      class: n
      field: Everyday speech
      gloss: clothes
      concept: clothes
      built: [zhelv, zheivn]
    - form: ouzzhenv
      class: num
      field: Everyday speech
      gloss: twenty
      concept: twenty
      built: [ouz, zhenv]
    - form: redven
      class: num
      field: Everyday speech
      gloss: first
      concept: first
      built: [redv, en]
    - form: redvouz
      class: num
      field: Everyday speech
      gloss: second
      concept: second
      built: [redv, ouz]
    - form: redvved
      class: num
      field: Everyday speech
      gloss: third
      concept: third
      built: [redv, ved]
    - form: zhivnzhav
      class: n
      field: Everyday speech
      gloss: parent
      concept: parent
      built: [zhivn, zhav]
    - form: mezhdvhin
      class: n
      field: Everyday speech
      gloss: a female child; a girl when age is meant, and a daughter when kinship is meant
      concept: [daughter, girl]
      built: [mezhd, vhin]
    - form: vrunmezhn
      class: n
      field: Everyday speech
      gloss: grandmother
      concept: grandmother
      built: [vrun, mezhn]
    - form: vrunbozhn
      class: n
      field: Everyday speech
      gloss: grandfather
      concept: grandfather
      built: [vrun, bozhn]
    - form: nivvhin
      class: n
      field: Everyday speech
      gloss: grandchild
      concept: grandchild
      built: [niv, vhin]
    - form: bozhnbrezd
      class: n
      field: Everyday speech
      gloss: uncle
      concept: uncle
      built: [bozhn, brezd]
    - form: bozhnbreln
      class: n
      field: Everyday speech
      gloss: aunt
      concept: aunt
      built: [bozhn, breln]
    - form: zharnbrezd
      class: n
      field: Everyday speech
      gloss: cousin
      concept: cousin
      built: [zharn, brezd]
    - form: kuzhbozhd
      class: n
      field: Everyday speech
      gloss: husband
      concept: husband
      built: [kuzh, bozhd]
    - form: kuzhmezhd
      class: n
      field: Everyday speech
      gloss: wife
      concept: wife
      built: [kuzh, mezhd]
    - form: dzourn
      class: n
      field: Everyday speech
      gloss: an ancestor; a forebear from whom a person is descended
      concept: ancestor
    - form: dzouvn
      class: n
      field: Everyday speech
      gloss: a descendant; a person born from one’s line in a later generation
      concept: descendant
    - form: mulnvhin
      class: n
      field: Everyday speech
      gloss: orphan
      concept: orphan
      built: [muln, vhin]
    - form: enmezhd
      class: n
      field: Everyday speech
      gloss: widow
      concept: widow
      built: [en, mezhd]
    - form: hviz
      class: n
      field: Everyday speech
      gloss: sensation; sensory awareness of an impression
      concept: sensation
    - form: hvelzh
      class: n
      field: Everyday speech
      gloss: joy; felt delight and happiness
      concept: [joy, happiness]
    - form: derd
      class: n
      field: Everyday speech
      gloss: pain; physical hurting and, in compounds of the heart, emotional distress
      concept: pain
    - form: sern
      class: adj
      field: Everyday speech
      gloss: true; real; corresponding to what actually is
      concept: ["true", real]
    - form: vrem
      class: adj
      field: Everyday speech
      gloss: good; favorable or ethically right in the context named
      concept: [good, right-ethical]
    - form: vrelk
      class: adj
      field: Everyday speech
      gloss: bad; harmful or ethically wrong in the context named
      concept: [bad, wrong-ethical]
    - form: edv
      class: n
      field: Everyday speech
      gloss: occasion; a particular moment or instance
      concept: moment
    - {form: ezd, class: n, field: Everyday speech, gloss: time; duration, concept: time}
    - form: tevd
      class: n
      field: Everyday speech
      gloss: thing; an object, matter or affair
      concept: thing
    - form: zern
      class: n
      field: Everyday speech
      gloss: cause; reason that explains an event
      concept: [cause, reason]
    - form: menzd
      class: n
      field: Everyday speech
      gloss: intention; an aim deliberately held; a deliberate aim or an intended act, named as the intention itself
      concept: purpose
    - form: hvizd
      class: v
      field: Everyday speech
      gloss: to feel; to experience a bodily or emotional impression. This is the form for the named participant’s own act or experience.
      concept: feel-verb
    - form: dzarn
      class: n
      field: Everyday speech
      gloss: fear; apprehension of danger
      concept: fear
    - {form: durn, class: n, field: Everyday speech, gloss: sadness; sorrow, concept: sadness}
    - {form: rouzd, class: n, field: Everyday speech, gloss: anger; angry feeling, concept: anger}
    - form: rouln
      class: n
      field: Everyday speech
      gloss: hatred; lasting hostile feeling
      concept: hatred
    - form: zhelt
      class: n
      field: Everyday speech
      gloss: shame; felt dishonor or humiliation
      concept: shame
    - form: zeln
      class: n
      field: Everyday speech
      gloss: conviction; subjective certainty, whether the belief is true or false; confidence in one's own capacity or an expected outcome
      concept: [confidence, certainty]
    - form: dolv
      class: n
      field: Everyday speech
      gloss: part; portion of a whole
      concept: part
    - form: veln
      class: n
      field: Everyday speech
      gloss: side; a direction or aspect relative to something
      concept: direction
    - form: nemv
      class: n
      field: Everyday speech
      gloss: name; the word or words by which someone or something is called
      concept: name-noun
    - form: nerd
      class: n
      field: Everyday speech
      gloss: extent; length or reach along an axis; the distance or spatial extent between two points
      concept: distance
    - form: bev
      class: v
      field: Everyday speech
      gloss: to need; to require for a purpose or for wellbeing. This is the form for the named participant’s own act or experience.
      concept: need-verb
    - form: vrekd
      class: v
      field: Everyday speech
      gloss: to stop; to cease an act or motion; as an urgent request, stop. This is the form for the named participant’s own act or experience.
      concept: [stop, expression-stop]
    - form: vreln
      class: v
      field: Everyday speech
      gloss: to wait; to stay while expecting someone or something; as a request, wait. This is the form for the named participant’s own act or experience.
      concept: [wait, expression-wait]
    - form: veld
      class: v
      field: Everyday speech
      gloss: to remain; to stay as or where one is. This is the form for the named participant’s own act or experience.
      concept: remain
    - form: muvek
      class: v
      field: Everyday speech
      gloss: to help; to assist another in doing or enduring something; as an urgent request, help. This is the form for the named participant’s own act or experience.
      concept: [help, expression-help]
    - form: hvizn
      class: v
      field: Everyday speech
      gloss: to seek; to search for someone or something. This is the form for the named participant’s own act or experience.
      concept: search
    - form: dzolv
      class: n
      field: Everyday speech
      gloss: command; an instruction that someone is to obey
      concept: command-noun
    - form: dourv
      class: adj
      field: Everyday speech
      gloss: hard; resistant to pressure or bending
      concept: hard-texture
    - form: meiv
      class: adj
      field: Everyday speech
      gloss: soft; yielding to pressure
      concept: soft
    - form: vrevd
      class: adj
      field: Everyday speech
      gloss: quick; fast in movement or in carrying out an act
      concept: fast
    - form: vrouzd
      class: adj
      field: Everyday speech
      gloss: slow; taking much time to move or act
      concept: slow
    - form: loun
      class: adj
      field: Everyday speech
      gloss: long; extending far in space or time
      concept: long
    - form: lun
      class: adj
      field: Everyday speech
      gloss: short; extending little in space or time
      concept: short
    - form: bouv
      class: adj
      field: Everyday speech
      gloss: wide; broad from side to side
      concept: wide
    - form: nouv
      class: adj
      field: Everyday speech
      gloss: narrow; restricted from side to side
      concept: narrow
    - form: vrendz
      class: adj
      field: Everyday speech
      gloss: cold; at a low temperature
      concept: cold
    - form: hvond
      class: adj
      field: Everyday speech
      gloss: hot; at a high temperature
      concept: hot
    - form: souzd
      class: adj
      field: Everyday speech
      gloss: healthy; hale, bodily well
      concept: healthy
    - {form: sourv, class: adj, field: Everyday speech, gloss: sick; ill, concept: sick}
    - form: derdzen
      class: v
      field: Everyday speech
      gloss: to injure; to cause bodily damage or pain. This is the form for the named participant’s own act or experience.
      concept: hurt-verb
    - form: zhenk
      class: v
      field: Everyday speech
      gloss: to grow; to increase in size or develop with life
      concept: grow
    - form: vrelz
      class: v
      field: Everyday speech
      gloss: to leave; to depart a place or person. This is the form for the named participant’s own act or experience.
      concept: leave
    - {form: zhevnd, class: v, field: Everyday speech, gloss: to happen; to occur, concept: happen}
    - form: veizk
      class: v
      field: Everyday speech
      gloss: to trade; to exchange goods or services. This is the form for the named participant’s own act or experience.
      concept: trade
    - form: hvazhveln
      class: n
      field: Everyday speech
      gloss: appearance; the visible form or look of someone or something
      concept: appearance
      built: [hvaz, hveln]
    - {form: hveln, class: n, field: Everyday speech, gloss: shape; form or outward configuration}
    - form: vhezrndzovn
      class: n
      field: Everyday speech
      gloss: noise; irregular or unwanted sound
      concept: noise
      built: [vhezrn, dzovn]
    - {form: vhezrn, class: n, field: Everyday speech, gloss: "chaos, disorder"}
    - form: mulndzovn
      class: n
      field: Everyday speech
      gloss: silence; absence of audible sound
      concept: silence
      built: [muln, dzovn]
    - form: niv tevd hvaz
      class: v
      field: Everyday speech
      gloss: to notice a detail or occurrence; literally to see a small matter. This is the form for the named participant’s own act or experience.
      concept: notice
    - form: hviz zevd
      class: v
      field: Everyday speech
      gloss: to perceive; to become aware of an impression through the senses. This is the form for the named participant’s own act or experience.
      concept: perceive
    - form: vrun zevn zevd
      class: v
      field: Everyday speech
      gloss: to recognize someone or something through prior knowledge; old knowledge is the modifying context, not a claim of certainty. This is the form for the named participant’s own act or experience.
      concept: recognize
    - form: hveln ezv
      class: v
      field: Everyday speech
      gloss: to seem; to present an appearance. Vrem hveln ezv, present a good appearance, means seem good without asserting goodness
      concept: seem
    - form: vremhviz
      class: n
      field: Everyday speech
      gloss: pleasure; a pleasant experienced sensation
      concept: pleasure
      built: [vrem, hviz]
    - form: rhelndzeln
      class: n
      field: Everyday speech
      gloss: contentment; a settled feeling that what one has is enough
      concept: contentment
      built: [rheln, dzeln]
    - form: zhav zevn dzeln
      class: n
      field: Everyday speech
      gloss: gratitude; appreciative feeling toward a giver or helper, literally gift-aware heart
      concept: gratitude
    - form: vhar hvaz dzeln
      class: n
      field: Everyday speech
      gloss: admiration; an appreciative feeling of esteem at another's qualities or acts, literally great-viewing heart
      concept: admiration
    - form: vherzeln
      class: n
      field: Everyday speech
      gloss: trust; confidence placed in a person's honesty, care or reliability
      concept: trust
      built: [vher, zeln]
    - form: dzarn gev
      class: v
      field: Everyday speech
      gloss: to be courageous; the conventional fear-keeping expression means keeping one's purpose while afraid. Dzarn gev names endurance of fear while maintaining the course. This is the form for the named participant’s own act or experience.
      concept: courage
    - form: gev
      class: v
      field: Everyday speech
      gloss: to keep; to preserve or maintain. This is the form for the named participant’s own act or experience.
    - form: hviln hvoun dzarn
      class: n
      field: Everyday speech
      gloss: jealousy; fear of losing a loved person's affection to a rival
      concept: jealousy
    - form: vhardzarn
      class: n
      field: Everyday speech
      gloss: terror; overwhelming fear
      concept: terror
      built: [vhar, dzarn]
    - form: hvoundurn
      class: n
      field: Everyday speech
      gloss: grief; sorrow at a person's death or another deep loss
      concept: grief
      built: [hvoun, durn]
    - form: zelv vrelk drevn zhelt
      class: n
      field: Everyday speech
      gloss: guilt; shame or remorse at one's own wrongdoing, literally own bad deed shame
      concept: guilt
    - form: vrun drevn durn
      class: n
      field: Everyday speech
      gloss: regret; distress about an earlier act, choice or omission
      concept: regret
    - form: nivzelv
      class: n
      field: Everyday speech
      gloss: humility; a modest estimation of one's own importance, the conventional small-self attitude
      concept: humility
      built: [niv, zelv]
    - form: vher hvaz zhelt
      class: n
      field: Everyday speech
      gloss: embarrassment; shame or social discomfort felt under others' attention
      concept: embarrassment
    - form: vher derd mevn
      class: n
      field: Everyday speech
      gloss: compassion; sympathy and caring concern for another's suffering, including a wish to relieve it
      concept: [compassion, sympathy]
    - form: mevn
      class: n
      field: Everyday speech
      gloss: concern; caring attention to another's welfare
    - form: derd vher mevn
      class: n
      field: Everyday speech
      gloss: pity; sorrowful concern for a suffering or unfortunate person
      concept: pity
    - form: vrun derd rouzd
      class: n
      field: Everyday speech
      gloss: resentment; lingering anger about a felt wrong or injury
      concept: resentment
    - form: vrelk vher hvaz
      class: v
      field: Everyday speech
      gloss: to hold someone in contempt; conventionally to regard a person as beneath respect, not merely to notice a bad person. This is the form for the named participant’s own act or experience.
      concept: contempt
    - form: vrelk drevn drevzh
      class: v
      field: Everyday speech
      gloss: to forgive a wrong; conventionally to let the wrong go instead of keeping resentment or punishment against its doer. This is the form for the named participant’s own act or experience.
      concept: forgive-verb
    - form: drevzh
      class: v
      field: Everyday speech
      gloss: to separate; to part or release one thing from another. This is the form for the named participant’s own act or experience.
    - form: vrelk drevn drevzh dzeln
      class: n
      field: Everyday speech
      gloss: forgiveness; the attitude of releasing resentment or a claim to punishment for a wrong
      concept: forgiveness
    - form: levdzeln
      class: n
      field: Everyday speech
      gloss: desire; wanting felt as an urge or inclination
      concept: desire
      built: [lev, dzeln]
    - form: vrelz vher lev dzeln
      class: n
      field: Everyday speech
      gloss: longing for an absent person; a persistent aching desire for someone who is away. An absent thing can replace vher, person
      concept: longing
    - form: lev vold hvelzh
      class: n
      field: Everyday speech
      gloss: satisfaction; the pleased feeling that a desire has been fulfilled, distinct from general pleasure and from mere completion of a task
      concept: satisfaction
    - form: lev vrekd derd
      class: n
      field: Everyday speech
      gloss: frustration; distress felt when a desire or effort is blocked
      concept: frustration
    - form: niv zevn lev
      class: v
      field: Everyday speech
      gloss: to be curious; to want further knowledge of a detail or matter. This is the form for the named participant’s own act or experience.
      concept: curiosity
    - form: vhezrnmenv
      class: n
      field: Everyday speech
      gloss: confusion; disordered thought or lack of a clear understanding
      concept: confusion
      built: [vhezrn, menv]
    - form: menv
      class: n
      field: Everyday speech
      gloss: thought; an idea entertained in the mind
    - form: mulnzeln
      class: n
      field: Everyday speech
      gloss: doubt; lack of conviction or certainty
      concept: doubt
      built: [muln, zeln]
    - form: muln zevn hviz
      class: n
      field: Everyday speech
      gloss: surprise; the startled sensory or emotional response to something unexpected, conventionally no-prior-knowledge impression. It can be pleasant or unpleasant
      concept: surprise
    - form: drevn muln lev
      class: v
      field: Everyday speech
      gloss: to be bored; to lack interest in what one is doing; to be unwilling; not to want or consent to perform the stated act. This is the form for the named participant’s own act or experience.
      concept: [boredom, unwilling]
    - form: brouln edv menv
      class: n
      field: Everyday speech
      gloss: anticipation; thought and feeling directed toward an expected later occasion
      concept: anticipation
    - form: brouln
      class: n
      field: Everyday speech
      gloss: rear; region behind; in time compounds, the later part
    - form: sernmenv
      class: n
      field: Everyday speech
      gloss: belief; a thought held as true, whether it actually is true or false
      concept: belief
      built: [sern, menv]
    - form: rhezdmevn
      class: n
      field: Everyday speech
      gloss: reverence; profound respect and careful regard, often toward the sacred
      concept: reverence
      built: [rhezd, mevn]
    - {form: rhezd, class: adj, field: Everyday speech, gloss: "divine, sacred"}
    - form: vhar hviz dzeln
      class: n
      field: Everyday speech
      gloss: awe; astonished wonder at something felt as vast or powerful, which may mingle fear with admiration
      concept: awe
    - form: meivhviln
      class: n
      field: Everyday speech
      gloss: affection; tender fondness and warm regard
      concept: affection
      built: [meiv, hviln]
    - form: hviln lev
      class: v
      field: Everyday speech
      gloss: to feel attraction; to desire closeness to someone, emotionally or physically according to context. This is the form for the named participant’s own act or experience.
      concept: attraction
    - form: envmuvel
      class: n
      field: Everyday speech
      gloss: intimacy; close personal association admitting another to one's private life
      concept: intimacy
      built: [env, muvel]
    - {form: env, class: n, field: Everyday speech, gloss: inside; interior}
    - form: muvel
      class: n
      field: Everyday speech
      gloss: association; company; a bond between people
    - form: hviln gev dzeln
      class: n
      field: Everyday speech
      gloss: devotion; enduring dedicated attachment to a person, calling or sacred commitment
      concept: devotion
    - form: muvel gev dzeln
      class: n
      field: Everyday speech
      gloss: loyalty; steadfast commitment to a person or group and its bond
      concept: loyalty
    - form: muvelrheln
      class: n
      field: Everyday speech
      gloss: companionship; the state and comfort of being together with companions
      concept: companionship
      built: [muvel, rheln]
    - form: roulnmuvel
      class: n
      field: Everyday speech
      gloss: enmity; a hostile relationship between persons or groups
      concept: enmity
      built: [rouln, muvel]
    - form: delrn
      class: n
      field: Everyday speech
      gloss: stone; rock, the hard mineral material
      concept: [stone, rock]
    - form: hvald
      class: n
      field: Everyday speech
      gloss: sun; the sun seen in the sky
      concept: sun
    - form: zheivl
      class: n
      field: Everyday speech
      gloss: plant; a living thing that grows rooted in the ground
      concept: plant
    - form: vredn
      class: n
      field: Everyday speech
      gloss: animal; beast, an animal other than a person in ordinary usage
      concept: [animal, beast]
    - form: vein
      class: n
      field: Everyday speech
      gloss: fish; an animal that lives in water and swims with fins
      concept: fish
    - form: zhein
      class: n
      field: Everyday speech
      gloss: seed; a reproductive seed of a plant
      concept: seed
    - form: drouk
      class: v
      field: Everyday speech
      gloss: to strike; to hit with a blow. This is the form for the named participant’s own act or experience.
      concept: hit
    - form: zhendv
      class: v
      field: Everyday speech
      gloss: to change; to turn into a different state or form. This is the form for the named participant’s own act or experience.
      concept: change-verb
    - form: vher kleiv hvaz kenz havd
      class: v
      field: Everyday speech
      gloss: "An ordinary sighted person can discern the blade in the stated viewing conditions: the blade is visible. Replace kleiv, blade, with the target object; this concerns its present discernibility, not an eyesight examination"
      concept: visible
    - {form: kenz, class: n, field: Everyday speech, gloss: ability; capacity to perform an act}
    - form: vher kleiv hvaz kenz muln havd
      class: v
      field: Everyday speech
      gloss: "An ordinary sighted person cannot discern the blade in the stated viewing conditions: the blade is invisible. Replace kleiv, blade, with the target object; the negation concerns that object in those conditions, not the observer's eyesight"
      concept: invisible
    - form: vhar dzovn havd
      class: v
      field: Everyday speech
      gloss: to be loud; to have a great volume of sound
      concept: loud
    - form: niv dzovn havd
      class: v
      field: Everyday speech
      gloss: to be quiet; to have a small volume of sound
      concept: quiet
    - form: vrem noul havd
      class: v
      field: Everyday speech
      gloss: to be fragrant; to have a pleasant smell
      concept: fragrant
    - form: vrelk noul havd
      class: v
      field: Everyday speech
      gloss: to be foul-smelling; to have an unpleasant odor
      concept: foul
    - form: mezl meid havd
      class: v
      field: Everyday speech
      gloss: to be sweet; to have a honey-like flavor
      concept: sweet
    - {form: mezl, class: n, field: Everyday speech, gloss: honey}
    - form: vrond meid havd
      class: v
      field: Everyday speech
      gloss: to be sour; to have a tart flavor, including fresh sour fruit
      concept: sour
    - form: vrond
      class: n
      field: Everyday speech
      gloss: "Rot or decay; also tart sourness in food, including the natural sourness of fresh fruit."
    - form: derd meid havd
      class: v
      field: Everyday speech
      gloss: to be bitter; to have the sharp flavor conventionally called pain-flavor
      concept: bitter
    - form: seil meid havd
      class: v
      field: Everyday speech
      gloss: to be salty; to have the flavor of salt
      concept: salty
    - form: seil
      class: n
      field: Everyday speech
      gloss: salt; the edible mineral used to season food
    - form: rheln zhelv havd
      class: v
      field: Everyday speech
      gloss: to be smooth; to have an even surface without rough projections
      concept: smooth
    - form: vhezrn zhelv havd
      class: v
      field: Everyday speech
      gloss: to be rough; to have an irregular projecting surface
      concept: rough
    - form: hourdvhel
      class: n
      field: Everyday speech
      gloss: upper face; forehead, the face above the eyebrows
      concept: forehead
      built: [hourd, vhel]
    - {form: hourd, class: n, field: Everyday speech, gloss: upper part; region above}
    - form: kenvdzevd
      class: n
      field: Everyday speech
      gloss: tooth bone; the jaw that holds the teeth
      concept: jaw
      built: [kenv, dzevd]
    - form: lourdvhel
      class: n
      field: Everyday speech
      gloss: lower face; chin, the front below the lower lip
      concept: chin
      built: [lourd, vhel]
    - {form: lourd, class: n, field: Everyday speech, gloss: lower part; region below}
    - form: vheldolv
      class: n
      field: Everyday speech
      gloss: side portion of the face; cheek
      concept: cheek
      built: [vhel, dolv]
    - form: mezdenv
      class: n
      field: Everyday speech
      gloss: food interior; the stomach organ that receives swallowed food
      concept: stomach
      built: [mezd, env]
    - form: meirmavd
      class: n
      field: Everyday speech
      gloss: middle of the body; waist between ribs and hips
      concept: waist
      built: [meir, mavd]
    - {form: meir, class: n, field: Everyday speech, gloss: "centre, middle"}
    - form: mavd
      class: n
      field: Everyday speech
      gloss: body; the physical body of a living being
    - form: vhelddzevd
      class: n
      field: Everyday speech
      gloss: back bone; the vertebral column
      concept: spine
      built: [vheld, dzevd]
    - form: zeldmev
      class: n
      field: Everyday speech
      gloss: sitting flesh; a buttock
      concept: buttock
      built: [zeld, mev]
    - form: hvelgezv
      class: n
      field: Everyday speech
      gloss: hand joint; wrist
      concept: wrist
      built: [hvel, gezv]
    - form: hvelenv
      class: n
      field: Everyday speech
      gloss: inside of the hand; palm
      concept: palm
      built: [hvel, env]
    - form: vharhvil
      class: n
      field: Everyday speech
      gloss: great finger; thumb, the opposed digit of the hand
      concept: thumb
      built: [vhar, hvil]
    - form: hourdvrel
      class: n
      field: Everyday speech
      gloss: upper leg; thigh
      concept: thigh
      built: [hourd, vrel]
    - form: vrolgezv
      class: n
      field: Everyday speech
      gloss: foot joint; ankle
      concept: ankle
      built: [vrol, gezv]
    - form: broulnvrol
      class: n
      field: Everyday speech
      gloss: rear foot; heel
      concept: heel
      built: [brouln, vrol]
    - form: lourdvrol
      class: n
      field: Everyday speech
      gloss: underside of the foot; sole
      concept: sole
      built: [lourd, vrol]
    - form: vrol hvil dzeil
      class: n
      field: Everyday speech
      gloss: toe horn; toenail, the hard covering of a toe
      concept: toenail
    - form: brenvmev
      class: n
      field: Everyday speech
      gloss: strength flesh; muscle tissue that contracts to move the body
      concept: muscle
      built: [brenv, mev]
    - form: brenv
      class: n
      field: Everyday speech
      gloss: strength; physical power or capacity to exert force
    - form: meivmev
      class: n
      field: Everyday speech
      gloss: soft flesh; bodily fat rather than muscular tissue
      concept: fat
      built: [meiv, mev]
    - form: zhelvvezd
      class: n
      field: Everyday speech
      gloss: skin water; perspiration
      concept: sweat
      built: [zhelv, vezd]
    - form: hvezhvezd
      class: n
      field: Everyday speech
      gloss: eye water; tears
      concept: tears
      built: [hvezh, vezd]
    - form: mezvvezd
      class: n
      field: Everyday speech
      gloss: mouth water; saliva
      concept: saliva
      built: [mezv, vezd]
    - form: rhenzevn
      class: n
      field: Everyday speech
      gloss: head knowledge; the brain, the organ within the skull
      concept: brain
      built: [rhen, zevn]
    - form: hvevdolv
      class: n
      field: Everyday speech
      gloss: breath part; a lung, the organ that takes air into the body
      concept: lung
      built: [hvev, dolv]
    - form: dzerv gev dolv
      class: n
      field: Everyday speech
      gloss: blood-keeping part; the liver, the large organ beneath the ribs
      concept: liver
    - form: zouvr vhedz dolv
      class: n
      field: Everyday speech
      gloss: urine-making part; a kidney, the organ that filters blood and forms urine
      concept: kidney
    - form: murnvrod
      class: n
      field: Everyday speech
      gloss: dung path; the intestine, the gut beyond the stomach
      concept: intestine
      built: [murn, vrod]
    - form: zhivndolv
      class: n
      field: Everyday speech
      gloss: life-generating parts; the reproductive organs
      concept: genitals
      built: [zhivn, dolv]
    - form: vhinenv
      class: n
      field: Everyday speech
      gloss: child interior; womb, the uterus in which a pregnancy grows
      concept: womb
      built: [vhin, env]
    - form: bozhd zhivn dolv
      class: n
      field: Everyday speech
      gloss: male reproductive part; penis
      concept: penis
    - form: mezhd zhivn vrod
      class: n
      field: Everyday speech
      gloss: female reproductive passage; vagina
      concept: vagina
    - form: bozhdzhein
      class: n
      field: Everyday speech
      gloss: male seed; a testicle, the organ that produces sperm
      concept: testicle
      built: [bozhd, zhein]
    - form: mezd lev dzeln
      class: n
      field: Everyday speech
      gloss: hunger; the bodily desire for food
      concept: hunger
    - form: mezd lev
      class: v
      field: Everyday speech
      gloss: to be hungry; to want food because the body needs nourishment. This is the form for the named participant’s own act or experience.
      concept: hungry
    - form: vezd lev dzeln
      class: n
      field: Everyday speech
      gloss: thirst; the bodily desire for water
      concept: thirst
    - form: vezd lev
      class: v
      field: Everyday speech
      gloss: to be thirsty; to want water because the body needs fluid. This is the form for the named participant’s own act or experience.
      concept: thirsty
    - form: env hvevr
      class: v
      field: Everyday speech
      gloss: to inhale; the conventional interior-breathing expression means drawing air inward. This is the form for the named participant’s own act or experience.
      concept: inhale
    - form: ouvd hvevr
      class: v
      field: Everyday speech
      gloss: to exhale; the conventional exterior-breathing expression means sending air outward. This is the form for the named participant’s own act or experience.
      concept: exhale
    - {form: ouvd, class: n, field: Everyday speech, gloss: outside; exterior}
    - form: hvev muln havd
      class: v
      field: Everyday speech
      gloss: to suffocate; to be deprived of the air needed to breathe and live, conventionally have no breath, as when a mouth is obstructed or no breathable air is present
      concept: suffocate
    - form: moun vrekd
      class: v
      field: Everyday speech
      gloss: to wake; to stop sleeping. This is the form for the named participant’s own act or experience.
      concept: wake
    - form: muln moun
      class: v
      field: Everyday speech
      gloss: to be awake; to be not sleeping. This is the form for the named participant’s own act or experience.
      concept: awake
    - form: vrelv havd
      class: v
      field: Everyday speech
      gloss: to be tired; to have bodily fatigue
      concept: tired
    - form: vrelv
      class: n
      field: Everyday speech
      gloss: fatigue; bodily weariness after effort or loss of rest
    - form: zhelv vezd zhav
      class: v
      field: Everyday speech
      gloss: to sweat; to give off perspiration through the skin. This is the form for the named participant’s own act or experience.
      concept: sweat-verb
    - form: vharhvorn
      class: n
      field: Everyday speech
      gloss: heat; strong warmth, including the heat of a fire or hot weather
      concept: heat
      built: [vhar, hvorn]
    - form: vrendzhviz
      class: n
      field: Everyday speech
      gloss: cold; a sensation or condition of low temperature
      concept: cold-noun
      built: [vrendz, hviz]
    - form: hvorn havd
      class: v
      field: Everyday speech
      gloss: to be warm; to have moderate bodily or material warmth
      concept: warm
    - form: niv vrendz
      class: adj
      field: Everyday speech
      gloss: cool; mildly cold, pleasantly low in temperature. Here small modifies cold in the ordinary modifier-first compound
      concept: cool
    - form: hvord drevn
      class: v
      field: Everyday speech
      gloss: to burn; to undergo combustion or be damaged by fire according to the named subject. This is the form for the named participant’s own act or experience.
      concept: burn
    - form: vremrheln
      class: n
      field: Everyday speech
      gloss: safety; a secure condition free of immediate danger
      concept: safety
      built: [vrem, rheln]
    - form: derdzern
      class: n
      field: Everyday speech
      gloss: danger; a source or circumstance of possible harm
      concept: danger
      built: [derd, zern]
    - form: zhivnmuvel
      class: n
      field: Everyday speech
      gloss: sex; sexual union or intercourse, conventionally generative association whether or not conception results
      concept: sex
      built: [zhivn, muvel]
    - form: vhin havd drevz
      class: v
      field: Everyday speech
      gloss: to conceive; to begin carrying a child in the womb, literally begin having a child. This is the form for the named participant’s own act or experience.
      concept: conceive
    - form: vhin env ezd
      class: n
      field: Everyday speech
      gloss: pregnancy; the period in which a child develops in the womb
      concept: pregnancy
    - form: env vhin havd
      class: v
      field: Everyday speech
      gloss: to be pregnant; to have a child within the womb
      concept: pregnant
    - form: vhin zhav
      class: v
      field: Everyday speech
      gloss: to give birth; to bring a child from the womb into independent life, literally give a child. This is the form for the named participant’s own act or experience.
      concept: give-birth
    - form: mevl zhav
      class: v
      field: Everyday speech
      gloss: to nurse a baby; to give the breast for feeding. This is the form for the named participant’s own act or experience.
      concept: nurse
    - form: vrun zhenk
      class: v
      field: Everyday speech
      gloss: to age; to grow older. This is the form for the named participant’s own act or experience.
      concept: age-verb
    - form: dourn havd
      class: v
      field: Everyday speech
      gloss: to be dead; the conventional have-death expression for a life that has ended
      concept: dead
    - form: derdzen sourv
      class: adj
      field: Everyday speech
      gloss: injured; unwell from bodily injury rather than from illness alone
      concept: injured
    - form: brenv meln
      class: adj
      field: Everyday speech
      gloss: strong; full of bodily strength
      concept: strong
    - {form: meln, class: adj, field: Everyday speech, gloss: full; filled to capacity}
    - form: brenv niv
      class: adj
      field: Everyday speech
      gloss: weak; small in bodily strength
      concept: weak
    - form: vhar vrelv havd
      class: v
      field: Everyday speech
      gloss: to be exhausted; to have extreme bodily fatigue
      concept: exhausted
    - form: sourv hvond
      class: adj
      field: Everyday speech
      gloss: feverish; sick-hot, having a raised bodily temperature from illness
      concept: feverish
    - form: veld derd havd
      class: v
      field: Everyday speech
      gloss: to ache; to have a persistent dull bodily pain
      concept: ache
    - form: derd hvizd
      class: v
      field: Everyday speech
      gloss: to suffer; to experience bodily pain or emotional distress. This is the form for the named participant’s own act or experience.
      concept: suffer
    - form: dzerv zhav
      class: v
      field: Everyday speech
      gloss: to bleed; to give off blood from a wound or bodily opening. This is the form for the named participant’s own act or experience.
      concept: bleed
    - form: souzd vhedz
      class: v
      field: Everyday speech
      gloss: to heal; to make a person or wound healthy. This is the form for the named participant’s own act or experience.
      concept: heal
    - form: souzd zhenk
      class: v
      field: Everyday speech
      gloss: to recover; to grow healthy again after illness or injury. This is the form for the named participant’s own act or experience.
      concept: recover
    - form: hvaz kenz muln havd
      class: v
      field: Everyday speech
      gloss: to be blind; to lack the bodily ability to see
      concept: blind
    - form: dzoun kenz muln havd
      class: v
      field: Everyday speech
      gloss: to be deaf; to lack the bodily ability to hear
      concept: deaf
    - form: vral kenz niv
      class: adj
      field: Everyday speech
      gloss: lame; limited in the bodily capacity to walk
      concept: lame
    - form: hviz zevd veld
      class: v
      field: Everyday speech
      gloss: to be conscious; to retain awareness of sensory impressions. This is the form for the named participant’s own act or experience.
      concept: conscious
    - form: niv nevd havd
      class: v
      field: Everyday speech
      gloss: to be young; to have lived few years
      concept: young
    - form: mav nevd havd
      class: v
      field: Everyday speech
      gloss: to be old in age; to have lived many years
      concept: old
    - form: vrun zhenk veld
      class: v
      field: Everyday speech
      gloss: to be aging; to remain in the process of growing old. This is the form for the named participant’s own act or experience.
      concept: aging
    - form: derd havd
      class: v
      field: Everyday speech
      gloss: to hurt; to have or experience pain. The person or body part in pain is the subject
      concept: hurt-pain
    - form: vrun zhivn zhav
      class: n
      field: Everyday speech
      gloss: grandparent; an older generation's parent
      concept: grandparent
    - form: brezd bozhd vhin
      class: n
      field: Everyday speech
      gloss: nephew; a sibling's male child. Breln, sister, can replace brezd, brother
      concept: nephew
    - form: brezd mezhd vhin
      class: n
      field: Everyday speech
      gloss: niece; a sibling's female child. Breln, sister, can replace brezd, brother
      concept: niece
    - form: kuzh muvel vher
      class: n
      field: Everyday speech
      gloss: spouse; a person joined in the household bond of marriage
      concept: spouse
    - form: kuzhmuvel
      class: n
      field: Everyday speech
      gloss: marriage; the recognized bond joining spouses into a household
      concept: marriage
      built: [kuzh, muvel]
    - form: zharnvher
      class: n
      field: Everyday speech
      gloss: kin; persons related through family or clan
      concept: kin
      built: [zharn, vher]
    - form: zharnvrod
      class: n
      field: Everyday speech
      gloss: lineage; the succession or path of family descent
      concept: lineage
      built: [zharn, vrod]
    - form: enbozhd
      class: n
      field: Everyday speech
      gloss: widower; a man whose spouse has died, the conventional single-man kin term
      concept: widower
      built: [en, bozhd]
    - form: vrod hviln vher
      class: n
      field: Everyday speech
      gloss: friend; a person in a bond of affectionate friendship
      concept: friend
    - form: muln zevn vher
      class: n
      field: Everyday speech
      gloss: stranger; a person one does not know
      concept: stranger
    - form: vern muvel vher
      class: n
      field: Everyday speech
      gloss: neighbor; a person associated through adjacent dwellings
      concept: neighbor
    - form: muvelvher
      class: n
      field: Everyday speech
      gloss: companion; a person who is together with another
      concept: companion
      built: [muvel, vher]
    - form: vrokvher
      class: n
      field: Everyday speech
      gloss: guest; a visitor received by a household, conventionally the coming person
      concept: guest
      built: [vrok, vher]
    - form: kuzh gev vher
      class: n
      field: Everyday speech
      gloss: host; the person who keeps the household and receives a guest
      concept: host
    - form: brevnvher
      class: n
      field: Everyday speech
      gloss: leader; the person at the front of a group or undertaking
      concept: leader
      built: [brevn, vher]
    - form: brevn
      class: n
      field: Everyday speech
      gloss: front; region in front; in time compounds, the earlier part
    - form: broulnvher
      class: n
      field: Everyday speech
      gloss: follower; a person who goes behind or supports a leader
      concept: follower
      built: [brouln, vher]
    - form: kuzh drelv vher
      class: n
      field: Everyday speech
      gloss: servant; a person doing household work in service to another
      concept: servant
    - form: drelv
      class: n
      field: Everyday speech
      gloss: work; an activity or task performed with effort
    - form: drevl dzoun vher
      class: n
      field: Everyday speech
      gloss: student; a person listening to a teacher for instruction
      concept: student
    - form: kuzh muvel muvez
      class: v
      field: Everyday speech
      gloss: to marry; to join in the recognized marital household bond. This is the form for the named participant’s own act or experience.
      concept: marry
    - form: muvez
      class: v
      field: Everyday speech
      gloss: to join; to connect things or come together. This is the form for the named participant’s own act or experience.
    - form: roulnvher
      class: n
      field: Everyday speech
      gloss: enemy; a person with whom one has a hostile relationship
      concept: enemy
      built: [rouln, vher]
    - form: verndolv
      class: n
      field: Everyday speech
      gloss: room; a distinct interior part of a dwelling
      concept: room
      built: [vern, dolv]
    - form: envvhol
      class: n
      field: Everyday speech
      gloss: ceiling; the inside overhead surface, the interior roof
      concept: ceiling
      built: [env, vhol]
    - form: zeldtevd
      class: n
      field: Everyday speech
      gloss: seat; a thing made or used for sitting
      concept: seat
      built: [zeld, tevd]
    - form: loun zeld vroun
      class: n
      field: Everyday speech
      gloss: bench; a long wooden seat for more than one sitter
      concept: bench
    - form: vezdmevzd
      class: n
      field: Everyday speech
      gloss: jar; a storage vessel, conventionally water pot, with a mouth broad enough for filling
      concept: jar
      built: [vezd, mevzd]
    - form: nouv rhoun mevzd
      class: n
      field: Everyday speech
      gloss: bottle; a container with a narrow neck
      concept: bottle
    - form: vrounmevzd
      class: n
      field: Everyday speech
      gloss: basket; a container woven from wooden strips or stems
      concept: basket
      built: [vroun, mevzd]
    - form: zheivnmevzd
      class: n
      field: Everyday speech
      gloss: bag; a flexible container made of cloth or similar material
      concept: bag
      built: [zheivn, mevzd]
    - form: drouktevd
      class: n
      field: Everyday speech
      gloss: hammer; a tool made for striking
      concept: hammer
      built: [drouk, tevd]
    - form: zheln
      class: n
      field: Everyday speech
      gloss: fiber; a slender strand, including a textile thread
    - form: nivzheln
      class: n
      field: Everyday speech
      gloss: cord; a slender twisted fiber line
      concept: cord
      built: [niv, zheln]
    - form: zheivnkleiv
      class: n
      field: Everyday speech
      gloss: needle; the cloth blade, a small pointed sewing tool
      concept: needle
      built: [zheivn, kleiv]
    - form: hvordhveln
      class: n
      field: Everyday speech
      gloss: flame; the moving luminous form of burning fire
      concept: flame
      built: [hvord, hveln]
    - form: hvordzhoun
      class: n
      field: Everyday speech
      gloss: smoke; the visible cloud rising from burning material
      concept: smoke
      built: [hvord, zhoun]
    - form: hvordmelnv
      class: n
      field: Everyday speech
      gloss: ash; the powder left by burned matter
      concept: ash
      built: [hvord, melnv]
    - form: melnv
      class: n
      field: Everyday speech
      gloss: grain; a small discrete particle or speck
    - form: zhurn hvord delrn
      class: n
      field: Everyday speech
      gloss: coal; black fire-stone used as fuel
      concept: coal
    - form: brouzdhvord
      class: n
      field: Everyday speech
      gloss: torch; a carried fire, a burning stick or bundle used for light
      concept: torch
      built: [brouzd, hvord]
    - form: mezl zhelv hvord
      class: n
      field: Everyday speech
      gloss: candle; honey-skin fire, a wick burning in wax, conventionally named for beeswax
      concept: candle
    - form: en zhelv zheivn
      class: n
      field: Everyday speech
      gloss: garment; one item of clothing
      concept: garment
    - form: rhouvzheivn
      class: n
      field: Everyday speech
      gloss: shirt; a cloth garment covering the chest and upper body
      concept: shirt
      built: [rhouv, zheivn]
    - form: vheldzheivn
      class: n
      field: Everyday speech
      gloss: cloak; an outer cloth garment draped over the back and shoulders
      concept: cloak
      built: [vheld, zheivn]
    - form: meirzheln
      class: n
      field: Everyday speech
      gloss: belt; a cord or band worn around the waist
      concept: belt
      built: [meir, zheln]
    - form: vrolzhelv
      class: n
      field: Everyday speech
      gloss: shoe; a covering for the foot
      concept: shoe
      built: [vrol, zhelv]
    - form: loun vrol zhelv
      class: n
      field: Everyday speech
      gloss: boot; a foot covering extending up the leg
      concept: boot
    - form: vrekdtevd
      class: n
      field: Everyday speech
      gloss: barrier; a thing that stops or blocks passage
      concept: barrier
      built: [vrekd, tevd]
    - form: meivverned
      class: n
      field: Everyday speech
      gloss: clay; soft fine earth that can be shaped when wet
      concept: clay
      built: [meiv, verned]
    - form: vrednzhelv
      class: n
      field: Everyday speech
      gloss: leather; prepared animal hide
      concept: leather
      built: [vredn, zhelv]
    - form: niv zheivn zheln
      class: n
      field: Everyday speech
      gloss: thread; a fine textile fiber used in sewing or weaving
      concept: thread
    - form: delrnmelnv
      class: n
      field: Everyday speech
      gloss: sand; small loose grains of stone
      concept: sand
      built: [delrn, melnv]
    - form: vezdverned
      class: n
      field: Everyday speech
      gloss: mud; wet earth mixed with water
      concept: mud
      built: [vezd, verned]
    - form: vernedmelnv
      class: n
      field: Everyday speech
      gloss: dust; fine loose particles of earth
      concept: dust
      built: [verned, melnv]
    - form: muln vezd verned
      class: n
      field: Everyday speech
      gloss: land; ground that is not covered by water
      concept: land
    - form: nivhvol
      class: n
      field: Everyday speech
      gloss: hill; a small raised landform below the scale of a mountain
      concept: hill
      built: [niv, hvol]
    - form: hvolenv
      class: n
      field: Everyday speech
      gloss: valley; the lower interior between heights
      concept: valley
      built: [hvol, env]
    - form: rhelnverned
      class: n
      field: Everyday speech
      gloss: plain; a broad even tract of land
      concept: plain-landform
      built: [rheln, verned]
    - form: mav vroun zheivl
      class: n
      field: Everyday speech
      gloss: forest; a large tract of closely growing trees
      concept: forest
    - form: hvol env vern
      class: n
      field: Everyday speech
      gloss: cave; a natural hollow dwelling-space within rock or a mountain
      concept: cave
    - form: nivvezd
      class: n
      field: Everyday speech
      gloss: stream; a small flowing watercourse
      concept: stream
      built: [niv, vezd]
    - form: verned env vezd
      class: n
      field: Everyday speech
      gloss: lake; an inland body of standing water surrounded by land
      concept: lake
    - form: vezdgend
      class: n
      field: Everyday speech
      gloss: shore; the boundary where water meets land
      concept: shore
      built: [vezd, gend]
    - form: gend
      class: n
      field: Everyday speech
      gloss: limit; boundary or point beyond which something does not extend
    - form: zhounvezd
      class: n
      field: Everyday speech
      gloss: rain; water falling from clouds
      concept: rain
      built: [zhoun, vezd]
    - form: vrendvezd
      class: n
      field: Everyday speech
      gloss: ice; water frozen solid
      concept: ice
      built: [vrend, vezd]
    - form: vrounzheivl
      class: n
      field: Everyday speech
      gloss: tree; a woody plant with a lasting trunk
      concept: tree
      built: [vroun, zheivl]
    - form: zheivlzheivn
      class: n
      field: Everyday speech
      gloss: leaf; plant cloth, the broad thin growth that takes in light
      concept: leaf
      built: [zheivl, zheivn]
    - form: zheivlvrol
      class: n
      field: Everyday speech
      gloss: root; plant foot, the part anchored below ground
      concept: root
      built: [zheivl, vrol]
    - form: vrounbreiv
      class: n
      field: Everyday speech
      gloss: branch; a woody arm growing from a tree
      concept: branch
      built: [vroun, breiv]
    - form: voldvrez
      class: n
      field: Everyday speech
      gloss: fruit; the mature seed-bearing growth that follows a flower
      concept: fruit
      built: [vold, vrez]
    - form: meivzheivl
      class: n
      field: Everyday speech
      gloss: grass; the slender soft-stemmed plants forming a low ground cover
      concept: grass
      built: [meiv, zheivl]
    - form: shev vrol niv vredn
      class: n
      field: Everyday speech
      gloss: insect; a small six-legged animal
      concept: insect
    - form: muln vrol niv vredn
      class: n
      field: Everyday speech
      gloss: worm; the conventional no-foot small animal, a slender soft-bodied crawling creature
      concept: worm
    - form: vezd havd
      class: v
      field: Everyday speech
      gloss: to be wet; to have water on or within the surface
      concept: wet
    - form: vezd muln havd
      class: v
      field: Everyday speech
      gloss: to be dry; to have no moisture on or within the surface
      concept: dry
    - form: zhoun muln havd
      class: v
      field: Everyday speech
      gloss: to be clear in weather; to have no cloud in the sky
      concept: clear-weather
    - form: zhoun havd
      class: v
      field: Everyday speech
      gloss: to be cloudy; to have clouds in the sky
      concept: cloudy
    - form: vrendzveln
      class: n
      field: Everyday speech
      gloss: north; the conventional coldward compass direction
      concept: north
      built: [vrendz, veln]
    - form: hvondveln
      class: n
      field: Everyday speech
      gloss: south; the conventional heatward compass direction
      concept: south
      built: [hvond, veln]
    - form: hvald vourd veln
      class: n
      field: Everyday speech
      gloss: east; the sunrise compass direction
      concept: east
    - form: hvald vould veln
      class: n
      field: Everyday speech
      gloss: west; the sunset compass direction
      concept: west
    - {form: ev, class: pron, field: Everyday speech, gloss: "I; me, the speaker", concept: i}
    - form: zhiv
      class: pron
      field: Everyday speech
      gloss: you; the person or persons addressed
      concept: you-reference
    - form: ez
      class: dem
      field: Everyday speech
      gloss: this; these, the near or currently indicated referent
      concept: [this, these]
    - form: oz
      class: dem
      field: Everyday speech
      gloss: that; those, a farther or previously indicated referent
      concept: [that, those]
    - form: uzv
      class: adj
      field: Everyday speech
      gloss: other; additional or distinct from the person or thing in question
      concept: other
    - form: uzd
      class: adj
      field: Everyday speech
      gloss: different; unlike in identity, form or quality
      concept: different
    - form: zoum
      class: adj
      field: Everyday speech
      gloss: same; identical in identity or in the respect being compared
      concept: same
    - form: somn
      class: adj
      field: Everyday speech
      gloss: whole; all, the complete thing or the entire relevant set
      concept: [whole, all]
    - form: meiz
      class: adj
      field: Everyday speech
      gloss: more; greater in quantity or degree
      concept: more
    - form: nezv
      class: adj
      field: Everyday speech
      gloss: less; smaller in quantity or degree
      concept: less
    - form: dorz
      class: part
      field: Everyday speech
      gloss: "than; compared with. The comparison standard precedes dorz: ouz dorz meiz vher means more people than two"
      concept: than
    - form: imz
      class: part
      field: Everyday speech
      gloss: "for; for the sake or purpose of. The beneficiary or purpose precedes imz: vhin imz, for the child"
      concept: for-purpose
    - form: vuz
      class: conj
      field: Everyday speech
      gloss: and; linking the two named items or clauses
      concept: and
    - form: voz
      class: conj
      field: Everyday speech
      gloss: or; marking alternatives
      concept: or
    - form: vouz
      class: conj
      field: Everyday speech
      gloss: but; contrasting the two named items or clauses
      concept: but
    - form: drez
      class: conj
      field: Everyday speech
      gloss: because; following the cause clause. Zhoun vezd vould drez vher vern veld means because rain falls, people stay home
      concept: because
    - form: izv
      class: conj
      field: Everyday speech
      gloss: if; following the condition. Zhoun vezd vould izv vher vern veld means if rain falls, people stay home
      concept: if
    - form: drel
      class: pron
      field: Everyday speech
      gloss: "what; the unknown person, thing or value asked about. A following noun specifies its kind: drel vher, what person, asks who"
      concept: [question-what, expression-what]
    - form: zevl
      class: num
      field: Everyday speech
      gloss: some; an unspecified nonzero portion or number
      concept: some
    - form: kezv
      class: part
      field: Everyday speech
      gloss: whether; the closing marker of a yes-or-no question. Zhiv vrok kezv means do you come?
      concept: question-polar
    - form: ezn
      class: call
      field: Everyday speech
      gloss: yes; affirmation of a question or acceptance of a proposal
      concept: yes
    - form: muln zeil
      class: num
      field: Everyday speech
      gloss: zero; a tally containing no units
      concept: zero
    - form: redv vul
      class: num
      field: Everyday speech
      gloss: "fourth; rank four in a sequence. Replace vul with any cardinal to name that ordinal: redv zhel, seventh"
      concept: ordinal-construction
    - form: ouzn ouzn
      class: num
      field: Everyday speech
      gloss: a quarter; half of a half
      concept: quarter
    - form: bev somn
      class: adj
      field: Everyday speech
      gloss: enough; complete relative to the amount needed. Bev somn mezd means enough food.
      concept: enough
    - form: somn dorz meiz
      class: adj
      field: Everyday speech
      gloss: most; greater in quantity than all the others in the comparison. Somn dorz meiz mezd, the most food, compares the stated portions. Here somn ranges over all the other relevant alternatives and excludes the item being described.
      concept: most
    - form: somn dorz nezv
      class: adj
      field: Everyday speech
      gloss: least; smaller in quantity than all the others in the comparison. Somn dorz nezv mezd, the least food, compares the stated portions. Here somn ranges over all the other relevant alternatives and excludes the item being described.
      concept: least
    - form: en en
      class: num
      field: Everyday speech
      gloss: each; every, considering the members one by one. En en vher means each or every person in the stated set
      concept: [each, every]
    - form: somn ouz
      class: num
      field: Everyday speech
      gloss: both; the full set of two. Somn ouz vher means both people
      concept: both
    - form: ouz en
      class: num
      field: Everyday speech
      gloss: either one of two. Ouz en vher names either person when the two alternatives are understood
      concept: either
    - form: ouz muln
      class: adj
      field: Everyday speech
      gloss: neither of two. Ouz muln vher means neither person in the stated pair
      concept: neither
    - form: nel dolv lun
      class: adj
      field: Everyday speech
      gloss: almost; short by only a small part. Nel dolv lun zhenv vher means almost ten people, fewer than ten by a small amount
      concept: almost
    - form: zoum zeil en
      class: num
      field: Everyday speech
      gloss: "exactly one; the same tally as one with no excess or shortfall. Replace en by the stated number: zoum zeil zhenv vher, exactly ten people"
      concept: exactly
    - form: nerd zevd
      class: v
      field: Everyday speech
      gloss: to measure; to determine the extent or size of something by a stated unit. This is the form for the named participant’s own act or experience.
      concept: measure-verb
    - form: zeil drevn
      class: v
      field: Everyday speech
      gloss: to count; to reckon the number of units in a set. This is the form for the named participant’s own act or experience.
      concept: count-verb
    - form: niv rhazd havd
      class: v
      field: Everyday speech
      gloss: to be pale; the conventional have-little-red expression describes a weak or washed-out hue. The whole idiom extends to other hues; bare rhazd retains red
      concept: pale
    - form: en rhazd hveln havd
      class: v
      field: Everyday speech
      gloss: to be plain or unpatterned; the conventional have-one-red-form expression describes a surface of one color without contrasting marks. The whole idiom extends to other hues; bare rhazd retains red
      concept: plain-pattern
    - form: rhazd melnv havd
      class: v
      field: Everyday speech
      gloss: to be spotted; the conventional have-red-specks expression describes a surface with contrasting spots. The whole idiom extends to spots of other hues; bare rhazd retains red
      concept: spotted
    - form: loun rhazd dolv havd
      class: v
      field: Everyday speech
      gloss: to be striped; the conventional have-long-red-portions expression describes a surface with contrasting bands. The whole idiom extends to bands of other hues; bare rhazd retains red
      concept: striped
    - form: vher havd tevd ezv
      class: v
      field: Everyday speech
      gloss: to belong to a person; to be a person's possessed thing. In this complete predicate, replace vher by the owner
      concept: belong
    - form: hveln zhendv
      class: v
      field: Everyday speech
      gloss: to become; to change into the state or form named. Souzd hveln zhendv means become healthy. This is the form for the named participant’s own act or experience.
      concept: become
    - form: vrod vold
      class: v
      field: Everyday speech
      gloss: to arrive; to complete the journey to the stated destination. This is the form for the named participant’s own act or experience.
      concept: arrive
    - form: hvel vrol vral
      class: v
      field: Everyday speech
      gloss: to crawl; to move on hands and feet. This is the form for the named participant’s own act or experience.
      concept: crawl
    - form: hourd vourd
      class: v
      field: Everyday speech
      gloss: to climb; to ascend a slope or object by bodily effort. This is the form for the named participant’s own act or experience.
      concept: climb
    - form: vrol vourd
      class: v
      field: Everyday speech
      gloss: to jump; to rise from the feet in a leap. This is the form for the named participant’s own act or experience.
      concept: jump
    - form: env vrok
      class: v
      field: Everyday speech
      gloss: to enter; to come into the interior. This is the form for the named participant’s own act or experience.
      concept: enter
    - form: ouvd vrek
      class: v
      field: Everyday speech
      gloss: to exit; to go into the exterior. This is the form for the named participant’s own act or experience.
      concept: exit
    - form: vrun hvol vrok
      class: v
      field: Everyday speech
      gloss: to return; to come to the place one occupied before. This is the form for the named participant’s own act or experience.
      concept: return
    - form: brouln vrek
      class: v
      field: Everyday speech
      gloss: to follow; to go behind another along the same course. This is the form for the named participant’s own act or experience.
      concept: follow
    - form: brevn vrek
      class: v
      field: Everyday speech
      gloss: to lead; to go at the front and guide others along a course. This is the form for the named participant’s own act or experience.
      concept: lead
    - form: hvol zhendv
      class: v
      field: Everyday speech
      gloss: to move; to change location. This is the form for the named participant’s own act or experience.
      concept: move
    - form: hvel zelv uz brouzd
      class: v
      field: Everyday speech
      gloss: to pull; to draw something toward oneself with hand or body. This is the form for the named participant’s own act or experience.
      concept: pull
    - form: uz
      class: part
      field: Everyday speech
      gloss: "to; toward. The goal precedes uz: vern uz, toward the house"
    - form: hourd brouzd
      class: v
      field: Everyday speech
      gloss: to lift; to carry or raise something upward. This is the form for the named participant’s own act or experience.
      concept: lift
    - form: vould ledv
      class: v
      field: Everyday speech
      gloss: to drop; to set something into a fall, releasing it downward. This is the form for the named participant’s own act or experience.
      concept: drop
    - form: ouvd dreik
      class: v
      field: Everyday speech
      gloss: to throw; to send an object outward through the air by bodily force. This is the form for the named participant’s own act or experience.
      concept: throw
    - form: dreik
      class: v
      field: Everyday speech
      gloss: to send; to cause a person or thing to go to a destination. This is the form for the named participant’s own act or experience.
    - form: vould tevd drev
      class: v
      field: Everyday speech
      gloss: to catch; to take a falling or flying object into one's grasp. This is the form for the named participant’s own act or experience.
      concept: catch
    - form: vern vhedz
      class: v
      field: Everyday speech
      gloss: to build; to make a structure. Vern, dwelling, gives the ordinary construction example and can be replaced by the structure named. This is the form for the named participant’s own act or experience.
      concept: build
    - form: niv tevd vhedz
      class: v
      field: Everyday speech
      gloss: to create; to make a new thing. This is the form for the named participant’s own act or experience.
      concept: create
    - form: somn drevzh
      class: v
      field: Everyday speech
      gloss: to break; to separate a whole into damaged parts. This is the form for the named participant’s own act or experience.
      concept: break
    - form: hveln muln vhedz
      class: v
      field: Everyday speech
      gloss: to destroy; to make the existing form cease to be, the conventional unmaking expression. This is the form for the named participant’s own act or experience.
      concept: destroy
    - form: vrem hveln vhedz
      class: v
      field: Everyday speech
      gloss: to repair; to make a damaged thing's form good again. This is the form for the named participant’s own act or experience.
      concept: repair
    - form: vher dzel
      class: v
      field: Everyday speech
      gloss: to tell someone; to direct a statement to a person. In ev zhiv tevd dzel, I tell you the matter, the addressee and matter stand before dzel. This is the form for the named participant’s own act or experience.
      concept: tell
    - form: drel dzel
      class: v
      field: Everyday speech
      gloss: to ask; to say a question or request for an unknown answer. This is the form for the named participant’s own act or experience.
      concept: ask
    - form: nemv dzel
      class: v
      field: Everyday speech
      gloss: to call; to say someone's name to summon their attention. This is the form for the named participant’s own act or experience.
      concept: call
    - form: vhar dzovn dzelnv
      class: v
      field: Everyday speech
      gloss: to shout; to speak with a great volume of voice. This is the form for the named participant’s own act or experience.
      concept: shout
    - form: niv dzovn dzelnv
      class: v
      field: Everyday speech
      gloss: to whisper; to speak with a deliberately low voice. This is the form for the named participant’s own act or experience.
      concept: whisper
    - form: zern dzel
      class: v
      field: Everyday speech
      gloss: to explain; to state the reason or account that makes a matter understandable. This is the form for the named participant’s own act or experience.
      concept: explain
    - form: nemv zhav
      class: v
      field: Everyday speech
      gloss: to name; to give a name to a person or thing. This is the form for the named participant’s own act or experience.
      concept: name-verb
    - form: sern menv havd
      class: v
      field: Everyday speech
      gloss: to believe; to hold a thought as true, whether or not it is true in fact
      concept: believe
    - form: zern zevd
      class: v
      field: Everyday speech
      gloss: to understand; to know how or why a matter fits together. This is the form for the named participant’s own act or experience.
      concept: understand
    - form: vrun zevn gev
      class: v
      field: Everyday speech
      gloss: to remember; to retain prior knowledge in the mind. This is the form for the named participant’s own act or experience.
      concept: remember
    - form: vrun zevn hvoun
      class: v
      field: Everyday speech
      gloss: to forget; to lose prior knowledge from memory. This is the form for the named participant’s own act or experience.
      concept: forget
    - form: niv zevn drev
      class: v
      field: Everyday speech
      gloss: to learn; to acquire new knowledge. This is the form for the named participant’s own act or experience.
      concept: learn
    - form: zevn zhav
      class: v
      field: Everyday speech
      gloss: to teach; to give knowledge or instruction to another. This is the form for the named participant’s own act or experience.
      concept: teach
    - form: menzd ledv
      class: v
      field: Everyday speech
      gloss: to decide; to set a deliberate intention after considering a matter. This is the form for the named participant’s own act or experience.
      concept: decide
    - form: mouv vhedz
      class: v
      field: Everyday speech
      gloss: to imagine; to make a dream-like image or possibility in thought without asserting it as fact. This is the form for the named participant’s own act or experience.
      concept: imagine
    - form: hveindzeln havd
      class: v
      field: Everyday speech
      gloss: to hope; to have hope for the outcome named
      concept: hope-verb
    - form: menzd havd
      class: v
      field: Everyday speech
      gloss: to intend; to hold a deliberate aim to act
      concept: intend
    - form: ouz en drev
      class: v
      field: Everyday speech
      gloss: to choose; to take one of two or more alternatives. Ouz gives a pair as the ordinary example. This is the form for the named participant’s own act or experience.
      concept: choose
    - form: meiz lev
      class: v
      field: Everyday speech
      gloss: to prefer; to want the named alternative more than another. This is the form for the named participant’s own act or experience.
      concept: prefer
    - form: drelv drevz
      class: v
      field: Everyday speech
      gloss: to try; to begin an effort toward an intended act without claiming success. This is the form for the named participant’s own act or experience.
      concept: try
    - form: muvel vrok
      class: v
      field: Everyday speech
      gloss: to meet; to come into company with another. This is the form for the named participant’s own act or experience.
      concept: meet
    - form: dolv zhav
      class: v
      field: Everyday speech
      gloss: to share; to give another a portion of what one has. This is the form for the named participant’s own act or experience.
      concept: share
    - form: vernd zhav drev
      class: v
      field: Everyday speech
      gloss: to buy; to take goods by giving their price. This is the form for the named participant’s own act or experience.
      concept: buy
    - {form: vernd, class: n, field: Everyday speech, gloss: value; worth in use or exchange}
    - form: vernd drev zhav
      class: v
      field: Everyday speech
      gloss: to sell; to give goods by receiving their price. This is the form for the named participant’s own act or experience.
      concept: sell
    - form: menzd dzel gev
      class: v
      field: Everyday speech
      gloss: to promise; to state an intention and undertake to keep it. This is the form for the named participant’s own act or experience.
      concept: promise-verb
    - form: zhav zevn dzel
      class: v
      field: Everyday speech
      gloss: to thank; to voice appreciation of a gift or help. This is the form for the named participant’s own act or experience.
      concept: thank-verb
    - form: muln lev dzel
      class: v
      field: Everyday speech
      gloss: to refuse; to state that one does not want or accept what is offered or requested. This is the form for the named participant’s own act or experience.
      concept: refuse-verb
    - form: zoum menv dzel
      class: v
      field: Everyday speech
      gloss: to agree; to say that one holds the same view or accepts the same proposal. This is the form for the named participant’s own act or experience.
      concept: agree-verb
    - form: rouln drouk
      class: v
      field: Everyday speech
      gloss: to fight; to strike or contend against an opponent in hostility. This is the form for the named participant’s own act or experience.
      concept: fight
    - form: dourn vhedz
      class: v
      field: Everyday speech
      gloss: to kill; to cause death. This is the form for the named participant’s own act or experience.
      concept: kill
    - form: brevn drouk
      class: v
      field: Everyday speech
      gloss: to attack; to initiate a hostile blow or assault. This is the form for the named participant’s own act or experience.
      concept: attack
    - form: dzarn vreik
      class: v
      field: Everyday speech
      gloss: to flee; to run away from a feared danger. This is the form for the named participant’s own act or experience.
      concept: flee
    - form: derd menzd dzel
      class: v
      field: Everyday speech
      gloss: to threaten; to state an intention to cause harm. This is the form for the named participant’s own act or experience.
      concept: threaten
    - form: drelv veld
      class: v
      field: Everyday speech
      gloss: to continue; to keep an act or undertaking going. This is the form for the named participant’s own act or experience.
      concept: continue
    - form: vrelgezv lourd ledv
      class: v
      field: Everyday speech
      gloss: to kneel; to put the knees down. This is the form for the named participant’s own act or experience.
      concept: kneel
    - form: gezv hveln vhedz
      class: v
      field: Everyday speech
      gloss: to bend; to make an angled or curved shape like a bent joint. This is the form for the named participant’s own act or experience.
      concept: bend
    - form: veln zeld
      class: v
      field: Everyday speech
      gloss: to lean; to rest one's weight at an angle to a side or supporting surface. This is the form for the named participant’s own act or experience.
      concept: lean
    - form: hourd zheivn ledv
      class: v
      field: Everyday speech
      gloss: to cover; to put a cloth or covering over something. Zheivn is the ordinary covering example and may be replaced by another material. This is the form for the named participant’s own act or experience.
      concept: cover-verb
    - form: hourd zheivn drevzh
      class: v
      field: Everyday speech
      gloss: to uncover; to part a cloth or other covering from what lies below it. This is the form for the named participant’s own act or experience.
      concept: uncover
    - form: zhurn ledv
      class: v
      field: Everyday speech
      gloss: to hide; to set a person or thing out of view, conventionally into darkness. This is the form for the named participant’s own act or experience.
      concept: hide
    - form: hvein ledv
      class: v
      field: Everyday speech
      gloss: to reveal; to set a person or thing into view, conventionally into light. This is the form for the named participant’s own act or experience.
      concept: reveal
    - form: delzd ledv
      class: v
      field: Everyday speech
      gloss: to lock; to put a lock into its securing position. This is the form for the named participant’s own act or experience.
      concept: lock-verb
    - form: delzd drezl
      class: v
      field: Everyday speech
      gloss: to unlock; to open or release a lock. This is the form for the named participant’s own act or experience.
      concept: unlock
    - form: ez hvol az
      class: part
      field: Everyday speech
      gloss: at this place; here
      concept: here
    - form: az
      class: part
      field: Everyday speech
      gloss: "at; in; on. A place or spatial noun precedes this particle: the house interior followed by this particle means inside the house"
    - form: oz hvol az
      class: part
      field: Everyday speech
      gloss: at that place; there
      concept: there
    - form: zevl hvol az
      class: part
      field: Everyday speech
      gloss: at some place; somewhere
      concept: somewhere
    - form: muln hvol az
      class: part
      field: Everyday speech
      gloss: at no place; nowhere
      concept: nowhere
    - form: somn hvol az
      class: part
      field: Everyday speech
      gloss: at all places; everywhere
      concept: everywhere
    - form: lun nerd az
      class: part
      field: Everyday speech
      gloss: at a short distance; near
      concept: near
    - form: loun nerd az
      class: part
      field: Everyday speech
      gloss: at a long distance; far
      concept: far
    - form: veln az
      class: part
      field: Everyday speech
      gloss: at the side; beside. Vern veln az means beside the house
      concept: beside
    - form: ouz env az
      class: part
      field: Everyday speech
      gloss: in the interior of the pair; between. Ouz vern env az means between the two houses
      concept: between
    - form: mourn env az
      class: part
      field: Everyday speech
      gloss: within the group; among. Vher mourn env az means among a group of people
      concept: among
    - form: hourd az
      class: part
      field: Everyday speech
      gloss: at the upper region; above. Vern hourd az means above the house
      concept: above
    - form: lourd az
      class: part
      field: Everyday speech
      gloss: at the lower region; below. Vern lourd az means below the house
      concept: below
    - form: vhol lourd az
      class: part
      field: Everyday speech
      gloss: beneath the roof; under. The thing above replaces vhol as needed
      concept: under
    - form: vhol hourd az
      class: part
      field: Everyday speech
      gloss: above the roof; over. The thing below replaces vhol as needed
      concept: over
    - form: env az
      class: part
      field: Everyday speech
      gloss: in the interior; inside. Vern env az means inside the house
      concept: inside
    - form: ouvd az
      class: part
      field: Everyday speech
      gloss: in the exterior; outside. Vern ouvd az means outside the house
      concept: outside
    - form: gend brouln az
      class: part
      field: Everyday speech
      gloss: at the far side of a limit; beyond. Vern gend brouln az means beyond the house boundary
      concept: beyond
    - form: brevn az
      class: part
      field: Everyday speech
      gloss: at the front; before or in front of. Vern brevn az means in front of the house
      concept: before-spatial
    - form: brouln az
      class: part
      field: Everyday speech
      gloss: at the rear; behind. Vern brouln az means behind the house
      concept: behind
    - form: dzeln veln az
      class: part
      field: Everyday speech
      gloss: on the heart side; to the left, the conventional leftward relation
      concept: left-direction
    - form: dzeln uzv veln az
      class: part
      field: Everyday speech
      gloss: on the side other than the heart side; to the right
      concept: right-direction
    - form: meir az
      class: part
      field: Everyday speech
      gloss: at the middle; in the center
      concept: center
    - form: hourd uz
      class: part
      field: Everyday speech
      gloss: toward the upper region; up
      concept: up
    - form: lourd uz
      class: part
      field: Everyday speech
      gloss: toward the lower region; down
      concept: down
    - form: brevn uz
      class: part
      field: Everyday speech
      gloss: toward the front; forward
      concept: forward
    - form: brouln uz
      class: part
      field: Everyday speech
      gloss: toward the rear; backward
      concept: backward
    - form: vern uz
      class: part
      field: Everyday speech
      gloss: toward the house. Replace vern by the goal named
      concept: toward
    - form: vern urz
      class: part
      field: Everyday speech
      gloss: away from the house. Replace vern by the point of departure
      concept: away
    - form: urz
      class: part
      field: Everyday speech
      gloss: "from; out of. The source precedes urz: vern urz, from the house"
    - form: env vrod az
      class: part
      field: Everyday speech
      gloss: along the interior path; through. Vern env vrod az means through the house
      concept: through
    - form: uzv veln uz
      class: part
      field: Everyday speech
      gloss: toward the other side; across. Vezd uzv veln uz means across the river
      concept: across
    - form: somn veln az
      class: part
      field: Everyday speech
      gloss: at the surrounding sides; around. Vern somn veln az means around the house
      concept: around
    - form: vern env az
      class: part
      field: Everyday speech
      gloss: in the house; inside the named place. Replace vern with the place named
      concept: in
    - form: vern hourd zhelv az
      class: part
      field: Everyday speech
      gloss: on the upper surface of the house; on. The supporting thing replaces vern
      concept: on
    - form: vern az
      class: part
      field: Everyday speech
      gloss: at the house; at a named place. Replace vern by that place
      concept: at
    - form: hvol urz
      class: part
      field: Everyday speech
      gloss: from the place named. A particular source replaces hvol
      concept: from
    - form: hvol uz
      class: part
      field: Everyday speech
      gloss: to the place named. A particular goal replaces hvol
      concept: to
    - form: hvolzeiv
      class: n
      field: Everyday speech
      gloss: position; the particular point a person or thing occupies
      concept: position
      built: [hvol, zeiv]
    - {form: zeiv, class: n, field: Everyday speech, gloss: point; a particular spot or position}
    - form: hvaldezd
      class: n
      field: Everyday speech
      gloss: day; a daylight period or the full daily cycle in counting
      concept: day
      built: [hvald, ezd]
    - form: zhurnezd
      class: n
      field: Everyday speech
      gloss: night; the dark period between dusk and dawn
      concept: night
      built: [zhurn, ezd]
    - form: hvald vourd ezd
      class: n
      field: Everyday speech
      gloss: morning; the time of the rising sun
      concept: morning
    - form: hvald hourd ezd
      class: n
      field: Everyday speech
      gloss: noon; the time when the sun is high
      concept: noon
    - form: hvald vould ezd
      class: n
      field: Everyday speech
      gloss: evening; the time of the setting sun
      concept: evening
    - form: zhurn ezd meir
      class: n
      field: Everyday speech
      gloss: midnight; the middle of the night
      concept: midnight
    - form: ezedv
      class: n
      field: Everyday speech
      gloss: now; this moment
      concept: now
      built: [ez, edv]
    - form: ozedv
      class: n
      field: Everyday speech
      gloss: then; that moment, earlier or later as the context states
      concept: then
      built: [oz, edv]
    - form: ez hvald ezd
      class: n
      field: Everyday speech
      gloss: today; this day
      concept: today
    - form: brevn hvald ezd
      class: n
      field: Everyday speech
      gloss: yesterday; the previous day
      concept: yesterday
    - form: brouln hvald ezd
      class: n
      field: Everyday speech
      gloss: tomorrow; the following day
      concept: tomorrow
    - form: brevnezd
      class: n
      field: Everyday speech
      gloss: the past; earlier time
      concept: past
      built: [brevn, ezd]
    - form: ezezd
      class: n
      field: Everyday speech
      gloss: the present; the current time
      concept: present
      built: [ez, ezd]
    - form: broulnezd
      class: n
      field: Everyday speech
      gloss: the future; later time
      concept: future
      built: [brouln, ezd]
    - form: brevnedv
      class: n
      field: Everyday speech
      gloss: before; an earlier occasion. Moun brevn edv means before sleep in the ordinary sleep example
      concept: before-time
      built: [brevn, edv]
    - form: broulnedv
      class: n
      field: Everyday speech
      gloss: after; a later occasion. Mezd meld brouln edv means after eating food
      concept: after
      built: [brouln, edv]
    - form: edv env az
      class: part
      field: Everyday speech
      gloss: during; within the occasion. Moun edv env az means during the occasion of sleep
      concept: during
    - form: moun edv env az
      class: part
      field: Everyday speech
      gloss: while sleeping; during the sleeping occasion. Replace moun by the act named; moun edv is the conventional occasion of sleeping
      concept: while
    - form: edv gend uz
      class: part
      field: Everyday speech
      gloss: until; toward the limit of an occasion. Hvald vould edv gend uz ev drelv drevn means I work until sunset
      concept: until
    - form: edv gend urz
      class: part
      field: Everyday speech
      gloss: since; from the boundary of an occasion. Hvald vourd edv gend urz ev drelv drevn means I work from sunrise onward
      concept: since-time
    - form: somnedv
      class: n
      field: Everyday speech
      gloss: always; on all relevant occasions
      concept: always
      built: [somn, edv]
    - form: mavedv
      class: n
      field: Everyday speech
      gloss: often; on many occasions
      concept: often
      built: [mav, edv]
    - form: zevledv
      class: n
      field: Everyday speech
      gloss: sometimes; on some occasions
      concept: sometimes
      built: [zevl, edv]
    - form: neledv
      class: n
      field: Everyday speech
      gloss: rarely; on few occasions
      concept: rarely
      built: [nel, edv]
    - form: mulnedv
      class: n
      field: Everyday speech
      gloss: never; on no occasion
      concept: never
      built: [muln, edv]
    - form: lounezd
      class: n
      field: Everyday speech
      gloss: a long duration; a long time
      concept: long-duration
      built: [loun, ezd]
    - form: lunezd
      class: n
      field: Everyday speech
      gloss: a short duration; a short time
      concept: short-duration
      built: [lun, ezd]
    - form: niv lun ezd
      class: n
      field: Everyday speech
      gloss: a very brief duration; a small short time
      concept: brief-duration
    - form: loun veld ezd
      class: n
      field: Everyday speech
      gloss: a lasting duration; time that remains long
      concept: lasting-duration
    - form: brouln en edv
      class: n
      field: Everyday speech
      gloss: again; on a further single occasion
      concept: again
    - form: enedv
      class: n
      field: Everyday speech
      gloss: once; on one occasion
      concept: once
      built: [en, edv]
    - form: ouzedv
      class: n
      field: Everyday speech
      gloss: twice; on two occasions
      concept: twice
      built: [ouz, edv]
    - form: edvedv
      class: n
      field: Everyday speech
      gloss: repeatedly; occasion after occasion
      concept: repeatedly
      built: [edv, edv]
    - form: brevn edv vold
      class: v
      field: Everyday speech
      gloss: already; completed by an earlier occasion. Mezd meld brevn edv vold states that eating is already completed. This is the form for the named participant’s own act or experience.
      concept: already
    - form: ez edv veld
      class: v
      field: Everyday speech
      gloss: still; remaining so at this moment. Vern ez edv veld states that someone still stays home. This is the form for the named participant’s own act or experience.
      concept: still
    - form: ez edv muln vold
      class: v
      field: Everyday speech
      gloss: yet in a negative statement; not completed by this moment. Mezd meld ez edv muln vold means the eating is not finished yet. This is the form for the named participant’s own act or experience.
      concept: yet
    - form: lun ezd brouln edv
      class: n
      field: Everyday speech
      gloss: soon; on a later occasion after a short interval
      concept: soon
    - form: brouln edv az
      class: part
      field: Everyday speech
      gloss: later; at a subsequent occasion
      concept: later
    - form: brevn edv az
      class: part
      field: Everyday speech
      gloss: early; at an occasion before the expected one
      concept: early
    - form: gend brouln edv
      class: n
      field: Everyday speech
      gloss: late; on an occasion beyond the expected limit
      concept: late
    - form: redv en edv
      class: n
      field: Everyday speech
      gloss: first in sequence; on the occasion ranked one
      concept: first-sequence
    - form: broulnen
      class: n
      field: Everyday speech
      gloss: next; the following one in the understood sequence
      concept: next
      built: [brouln, en]
    - form: gendedv
      class: n
      field: Everyday speech
      gloss: last; the occasion at the end boundary of the sequence
      concept: last
      built: [gend, edv]
    - form: voldedv
      class: n
      field: Everyday speech
      gloss: finally; on the completing occasion
      concept: finally
      built: [vold, edv]
    - form: nevddolv
      class: n
      field: Everyday speech
      gloss: season; a recurring part of the year
      concept: season
      built: [nevd, dolv]
    - form: hveinedv
      class: n
      field: Everyday speech
      gloss: dawn; the occasion of first daylight
      concept: dawn
      built: [hvein, edv]
    - form: zhurn drevz edv
      class: n
      field: Everyday speech
      gloss: dusk; the occasion when darkness begins
      concept: dusk
    - form: evtevd
      class: n
      field: Everyday speech
      gloss: "my thing; mine. Ev, the speaker, before any possessed noun gives my: ev vern, my home"
      concept: my
      built: [ev, tevd]
    - form: zhivtevd
      class: n
      field: Everyday speech
      gloss: "your thing; yours. Zhiv before any possessed noun gives your: zhiv vern, your home"
      concept: your
      built: [zhiv, tevd]
    - form: ozbozhd
      class: n
      field: Everyday speech
      gloss: he; him, the man already indicated. Bozhd here identifies a male referent without imposing gender on other nouns
      concept: he
      built: [oz, bozhd]
    - form: ozmezhd
      class: n
      field: Everyday speech
      gloss: she; her, the woman already indicated
      concept: she
      built: [oz, mezhd]
    - form: oztevd
      class: n
      field: Everyday speech
      gloss: it; that thing already indicated
      concept: it
      built: [oz, tevd]
    - form: ozmourn
      class: n
      field: Everyday speech
      gloss: they; them, the group already indicated
      concept: they
      built: [oz, mourn]
    - form: evmourn
      class: n
      field: Everyday speech
      gloss: we; us, the group including the speaker
      concept: we
      built: [ev, mourn]
    - form: ev mourn tevd
      class: n
      field: Everyday speech
      gloss: our thing; ours. Ev mourn before any possessed noun marks the speaker's group as possessor
      concept: our
    - form: zevlvher
      class: n
      field: Everyday speech
      gloss: someone; an unspecified person
      concept: someone
      built: [zevl, vher]
    - form: en vher voz uzv vher
      class: n
      field: Everyday speech
      gloss: anyone; one person or another, with no restriction on which person
      concept: anyone
    - form: somnvher
      class: n
      field: Everyday speech
      gloss: everyone; all persons in the stated domain
      concept: everyone
      built: [somn, vher]
    - form: mulnvher
      class: n
      field: Everyday speech
      gloss: no one; no person
      concept: no-one
      built: [muln, vher]
    - form: zevltevd
      class: n
      field: Everyday speech
      gloss: something; an unspecified thing
      concept: something
      built: [zevl, tevd]
    - form: en tevd voz uzv tevd
      class: n
      field: Everyday speech
      gloss: anything; one thing or another, without restriction on which thing
      concept: anything
    - form: somntevd
      class: n
      field: Everyday speech
      gloss: everything; all things in the stated domain
      concept: everything
      built: [somn, tevd]
    - form: uzv en
      class: num
      field: Everyday speech
      gloss: another; an additional or different one
      concept: another
    - form: drelvher
      class: n
      field: Everyday speech
      gloss: who; what person. Drel vher vrok means who comes?
      concept: question-who
      built: [drel, vher]
    - form: dreltevd
      class: n
      field: Everyday speech
      gloss: which thing; which one among the alternatives. Zhiv drel tevd lev means which thing do you want?
      concept: question-which
      built: [drel, tevd]
    - form: drelhvol
      class: n
      field: Everyday speech
      gloss: where; what place. Zhiv drel hvol az veld means where do you stay?
      concept: question-where
      built: [drel, hvol]
    - form: dreledv
      class: n
      field: Everyday speech
      gloss: when; what occasion. Zhiv drel edv vrok means when do you come?
      concept: question-when
      built: [drel, edv]
    - form: drelzern
      class: n
      field: Everyday speech
      gloss: why; what cause or reason. Zhiv drel zern az vrelz means for what reason do you leave?
      concept: question-why
      built: [drel, zern]
    - form: drelvrod
      class: n
      field: Everyday speech
      gloss: how; by what path or method. Zhiv drel vrod az drelv drevn means how do you do the work?
      concept: question-how
      built: [drel, vrod]
    - form: drelzeil
      class: n
      field: Everyday speech
      gloss: how many; how much, the count or measured quantity asked about. Zhiv drel zeil kleiv havd asks how many blades you have; zhiv drel zeil vezd havd asks how much water you have
      concept: [question-how-many, question-how-much]
      built: [drel, zeil]
    - form: drel vher uz
      class: part
      field: Everyday speech
      gloss: to whom; toward what person. Zhiv mezd drel vher uz zhav means to whom do you give food?
      concept: question-to-whom
    - form: drel hvol urz
      class: part
      field: Everyday speech
      gloss: from where; from what place. Zhiv drel hvol urz vrok means from where do you come?
      concept: question-from-where
    - form: drel menzd imz
      class: part
      field: Everyday speech
      gloss: for what purpose; for the sake of what aim. Zhiv drel menzd imz drelv drevn means for what purpose do you do the work?
      concept: question-for-what-purpose
    - form: zerl
      class: adj
      field: Everyday speech
      gloss: false; untrue; unreal when describing an apparent thing that does not exist
      concept: ["false", unreal]
    - form: muvn
      class: n
      field: Everyday speech
      gloss: a human; a member of humankind, as distinct from the other speaking folk
      concept: human
    - form: vrenzd
      class: adj
      field: Everyday speech
      gloss: natural; arising through the ordinary workings of living things or the physical world
      concept: natural
    - form: muln ezv
      class: call
      field: Everyday speech
      gloss: no; a general negative reply, literally is not so, used to deny an answer or reject a proposal
      concept: no
    - form: vher muln vrok
      class: v
      field: Everyday speech
      gloss: a person does not come; a complete clause showing not before the denied verb. Replace vher vrok by the subject and act being denied. This is the form for the named participant’s own act or experience.
      concept: not
    - form: serntevd
      class: n
      field: Everyday speech
      gloss: truth; what actually is the case, a true matter
      concept: truth
      built: [sern, tevd]
    - form: menzd zerl dzel zevn
      class: n
      field: Everyday speech
      gloss: a lie; an account deliberately spoken falsely with the intention of making the hearer believe it true, deceiving them
      concept: lie-noun
    - form: sern ezv
      class: call
      field: Everyday speech
      gloss: indeed; it is so in fact, a reply affirming the claim just made
      concept: [indeed, of-course]
    - form: zeln havd
      class: v
      field: Everyday speech
      gloss: certainly; I am certain of the claim in question, the conventional have-conviction response
      concept: [certainly, certain]
    - form: hevd havd
      class: v
      field: Everyday speech
      gloss: perhaps; the event has a possibility of occurring
      concept: [perhaps, possible]
    - form: hevd
      class: n
      field: Everyday speech
      gloss: possibility; a chance that an event can occur, independent of anyone's ability or permission
    - form: meiz hevd havd
      class: v
      field: Everyday speech
      gloss: probably; the event has the greater chance, the conventional expression for being more likely to happen than not
      concept: probably
    - form: nel hevd havd
      class: v
      field: Everyday speech
      gloss: to be unlikely; to have only a small chance of occurring
      concept: unlikely
    - form: zeln muln havd
      class: v
      field: Everyday speech
      gloss: to be uncertain; to lack conviction about the claim. As an act of mental reservation, to doubt the claim
      concept: [uncertain, doubt-verb]
    - form: hveln az
      class: part
      field: Everyday speech
      gloss: apparently; according to outward appearance. Hveln az souzd ezv means apparently the person is healthy
      concept: apparently
    - form: vher dzel zevn az
      class: part
      field: Everyday speech
      gloss: supposedly; according to a person's spoken account, without endorsing it as true
      concept: supposedly
    - form: sern tevd az
      class: part
      field: Everyday speech
      gloss: in fact; according to what actually is the case; really; truly; genuinely, asserting actual reality rather than pretense. Sern tevd az ev souzd ezv means I am truly healthy
      concept: [in-fact, sincerity]
    - form: niv hvezdn sern menv vhedz
      class: v
      field: Everyday speech
      gloss: to guess; to form a belief with little supporting evidence. This is the form for the named participant’s own act or experience.
      concept: guess-verb
    - form: hvezdn
      class: n
      field: Everyday speech
      gloss: evidence; an observation or account that supports a claim
    - form: hvezdn muln havd sern menv havd
      class: v
      field: Everyday speech
      gloss: to assume; the conventional have-no-evidence, hold-as-true expression for taking a premise as true without establishing it
      concept: assume-verb
    - form: sern hveln havd
      class: v
      field: Everyday speech
      gloss: to be correct; to have the form that fits the fact, answer or standard being checked
      concept: correct
    - form: zerl hveln havd
      class: v
      field: Everyday speech
      gloss: to be incorrect; to have a form that does not fit the fact, answer or standard being checked
      concept: incorrect
    - form: uzd menv dzel
      class: v
      field: Everyday speech
      gloss: to disagree; to express a differing view or rejection of another's claim. This is the form for the named participant’s own act or experience.
      concept: disagree
    - form: zerlzevn
      class: n
      field: Everyday speech
      gloss: falsehood; an untrue account or proposition, whether mistaken or deliberately deceptive
      concept: falsehood
      built: [zerl, zevn]
    - form: muln ez vuz muln oz
      class: conj
      field: Everyday speech
      gloss: nor; neither this nor that. The repeated negatives connect the denied alternatives
      concept: [nor, neither-alternative]
    - form: ez zern az
      class: part
      field: Everyday speech
      gloss: therefore; for this reason. Ez zern az ev vrelz means therefore I leave
      concept: therefore
    - form: oz edv az
      class: part
      field: Everyday speech
      gloss: then, in that case; at the occasion established by the preceding condition
      concept: then-conditional
    - form: muln ezv izv
      class: conj
      field: Everyday speech
      gloss: unless; if it is not so. Zhoun vezd vould muln ezv izv ev vrek means unless rain falls, I go
      concept: unless
    - form: uzv hveln az
      class: part
      field: Everyday speech
      gloss: otherwise; in the other case or manner
      concept: otherwise
    - form: sern ezv vouz
      class: conj
      field: Everyday speech
      gloss: although; it is so, but. Zhoun vezd vould sern ezv vouz ev vrek means although rain falls, I go
      concept: although
    - form: uzv menv az
      class: part
      field: Everyday speech
      gloss: however; from another side of the matter, introducing a contrasting statement
      concept: however
    - form: oz gev
      class: v
      field: Everyday speech
      gloss: nevertheless; the conventional keep-that expression maintains the stated course despite a contrary fact. Zhoun vezd vould, ev vrek oz gev means rain falls; nevertheless I go. This is the form for the named participant’s own act or experience.
      concept: nevertheless
    - form: oz tevd havd vouz
      class: conj
      field: Everyday speech
      gloss: despite that matter; that circumstance is present, but. Zhoun vezd vould tevd havd vouz ev vrek means despite the rain falling, I go
      concept: despite
    - form: uzv dolv az
      class: part
      field: Everyday speech
      gloss: instead; in the other's place, substituting one alternative for another
      concept: instead
    - form: zoum hveln az
      class: part
      field: Everyday speech
      gloss: like; in the same manner or form. Drevl zoum hveln az ev drelv drevn means I do the work like the teacher
      concept: [like, as]
    - form: uzd hveln az
      class: part
      field: Everyday speech
      gloss: unlike; in a different manner or form. Drevl uzd hveln az ev drelv drevn means I do the work unlike the teacher
      concept: unlike
    - form: ez voz oz
      class: conj
      field: Everyday speech
      gloss: either this or that; the two alternatives are offered without choosing one
      concept: either-alternative
    - form: ez vuz oz
      class: conj
      field: Everyday speech
      gloss: both this and that; the two named alternatives are included
      concept: both-conjunction
    - form: vrok kezv
      class: v
      field: Everyday speech
      gloss: whether to come; the come-question as the matter considered. Ev vrok kezv mend means I consider whether I come; the speaker is the person considering and coming. This is the form for the named participant’s own act or experience.
      concept: whether
    - form: eznemv
      class: n
      field: Everyday speech
      gloss: that is; namely, the conventional this-name introduction that specifies the referent. Ez nemv drevl means that is, the teacher
      concept: [that-is, namely]
      built: [ez, nemv]
    - form: en tevd hvaz
      class: v
      field: Everyday speech
      gloss: for example; look at one matter, the conventional invitation to consider the example named. This is the form for the named participant’s own act or experience.
      concept: for-example
    - form: uzv dolv gev
      class: v
      field: Everyday speech
      gloss: except; keep the other portion, the conventional exception instruction. Drevl drevzh, uzv vher gev means except the teacher, retain the other people. This is the form for the named participant’s own act or experience.
      concept: except
    - form: endolv
      class: n
      field: Everyday speech
      gloss: only the stated portion; the conventional one-portion restriction. En dolv drevl vrok means only the teacher comes
      concept: only
      built: [en, dolv]
    - form: oz vuz
      class: conj
      field: Everyday speech
      gloss: even that; that too, with emphasis that the included case is unexpected. Oz vuz vhin zevd means even the child knows
      concept: even
    - form: oz dolv vuz
      class: conj
      field: Everyday speech
      gloss: also; that portion too, adding the next stated item or claim
      concept: also
    - form: vhar mevn az
      class: part
      field: Everyday speech
      gloss: especially; with great attention to the case singled out
      concept: especially
    - form: niv niv
      class: adj
      field: Everyday speech
      gloss: tiny; small-small, a very small size
      concept: tiny
    - form: niv hourd nerd havd
      class: v
      field: Everyday speech
      gloss: to be low; to have only a small upward extent
      concept: low
    - form: vhar merv havd
      class: v
      field: Everyday speech
      gloss: to be heavy; to have great weight
      concept: heavy
    - {form: merv, class: n, field: Everyday speech, gloss: weight; heaviness}
    - form: niv merv havd
      class: v
      field: Everyday speech
      gloss: to be light in weight; to have little weight
      concept: light-weight
    - form: niv drelv bev
      class: v
      field: Everyday speech
      gloss: to be easy; to need little effort to do. This is the form for the named participant’s own act or experience.
      concept: easy
    - form: vhar drelv bev
      class: v
      field: Everyday speech
      gloss: to be difficult; to need great effort to do. This is the form for the named participant’s own act or experience.
      concept: difficult
    - form: oz dorz meiz vrem
      class: adj
      field: Everyday speech
      gloss: better; more good than the other stated alternative. Replace oz by the comparison standard
      concept: better
    - form: oz dorz meiz vrelk
      class: adj
      field: Everyday speech
      gloss: worse; more bad than the other stated alternative. Replace oz by the comparison standard
      concept: worse
    - form: somn dorz meiz vrem
      class: adj
      field: Everyday speech
      gloss: best; better than all other relevant alternatives. Here somn ranges over all the other relevant alternatives and excludes the item being described.
      concept: best
    - form: somn dorz meiz vrelk
      class: adj
      field: Everyday speech
      gloss: worst; worse than all other relevant alternatives. Here somn ranges over all the other relevant alternatives and excludes the item being described.
      concept: worst
    - form: vhar vernd havd
      class: v
      field: Everyday speech
      gloss: to be important; to have great value or consequence for the matter at hand
      concept: important
    - form: niv vernd havd
      class: v
      field: Everyday speech
      gloss: to be trivial; to have little value or consequence for the matter at hand
      concept: trivial
    - form: bev tevd ezv
      class: v
      field: Everyday speech
      gloss: to be necessary; to be a thing needed for the stated purpose
      concept: necessary
    - form: vernd havd
      class: v
      field: Everyday speech
      gloss: to be valuable; to have worth in use or exchange
      concept: valuable
    - form: vernd muln havd
      class: v
      field: Everyday speech
      gloss: to be worthless; to have no worth in the stated context
      concept: worthless
    - form: drelv vrem
      class: adj
      field: Everyday speech
      gloss: useful; good for carrying out a task
      concept: useful
    - form: drelv muln vrem
      class: adj
      field: Everyday speech
      gloss: useless; the conventional task-not-good description means serving no useful purpose in the context
      concept: useless
    - form: somn drevzh hveln havd
      class: v
      field: Everyday speech
      gloss: to be broken; to have the damaged form of a whole separated into parts
      concept: broken
    - form: vold hveln havd
      class: v
      field: Everyday speech
      gloss: to be complete; to have the finished form required by the aim
      concept: complete
    - form: muln vold hveln havd
      class: v
      field: Everyday speech
      gloss: to be incomplete; to lack the finished form required by the aim
      concept: incomplete
    - form: vhar dolv
      class: adv
      field: Everyday speech
      gloss: very; to a great degree. Vhar dolv vrem means very good
      concept: very
    - form: vhar vhar dolv
      class: adv
      field: Everyday speech
      gloss: extremely; to a very great degree. Vhar vhar dolv vrem means extremely good
      concept: extremely
    - form: zevl dolv
      class: adv
      field: Everyday speech
      gloss: somewhat; to some degree. Zevl dolv vrem means somewhat good
      concept: somewhat
    - form: nel dolv
      class: adv
      field: Everyday speech
      gloss: slightly; to a small degree. Nel dolv hvond means slightly hot
      concept: slightly
    - form: gend nel dolv
      class: adv
      field: Everyday speech
      gloss: barely; by a small margin at the relevant limit. Gend nel dolv bev somn means barely enough.
      concept: barely
    - form: bev dorz meiz
      class: adj
      field: Everyday speech
      gloss: too much; more than needed in the stated context
      concept: too-much
    - form: bev dorz nezv
      class: adj
      field: Everyday speech
      gloss: too little; less than needed in the stated context
      concept: too-little
    - form: zevl zoum hveln havd
      class: v
      field: Everyday speech
      gloss: to be similar; to have some shared form or quality
      concept: similar
    - form: uzv veln ezv
      class: v
      field: Everyday speech
      gloss: to be opposite; to be on or represent the other side in the comparison
      concept: opposite
    - form: vral kenz havd
      class: v
      field: Everyday speech
      gloss: can walk; to have the bodily ability to walk. Replace vral with the act whose ability is asserted
      concept: can
    - form: vral kenz muln havd
      class: v
      field: Everyday speech
      gloss: cannot walk; to lack the bodily ability to walk. Replace vral with the act whose ability is denied
      concept: cannot
    - form: hevd muln havd
      class: v
      field: Everyday speech
      gloss: to be impossible; to have no possibility of occurring
      concept: impossible
    - form: vral luzn havd
      class: v
      field: Everyday speech
      gloss: may walk; to have permission to walk. Replace vral by the permitted act
      concept: may-permission
    - form: luzn
      class: n
      field: Everyday speech
      gloss: permission; leave granted to perform an act
    - form: vrok hevd havd
      class: v
      field: Everyday speech
      gloss: might come; the event of coming has a possibility. Replace vrok by the event in question
      concept: might-possibility
    - form: drevn devn havd
      class: v
      field: Everyday speech
      gloss: must act; to have an obligation to perform the stated act
      concept: must
    - {form: devn, class: n, field: Everyday speech, gloss: duty; obligation to perform an act}
    - form: muln drevn dzolv havd
      class: v
      field: Everyday speech
      gloss: must not act; to have a command forbidding the stated act, not merely a lack of ability
      concept: must-not
    - form: muvek drevn vrem ezv
      class: v
      field: Everyday speech
      gloss: ought to help; it is good or advisable to perform the act of helping. Replace muvek by the advised act
      concept: ought
    - form: devn havd
      class: v
      field: Everyday speech
      gloss: to be required; to have an obligation attached to the stated act
      concept: required
    - form: drevn voz muln drevn luzn havd
      class: v
      field: Everyday speech
      gloss: to be optional; to have permission either to perform the act or not perform it
      concept: optional
    - form: luzn havd
      class: v
      field: Everyday speech
      gloss: to be allowed; to have permission for the stated act
      concept: allowed
    - form: muln drevn dzolv ezv
      class: v
      field: Everyday speech
      gloss: to be forbidden; a do-not-act command applies to the stated act
      concept: forbidden
    - form: luzn zhav
      class: v
      field: Everyday speech
      gloss: to permit; to give permission for the stated act. This is the form for the named participant’s own act or experience.
      concept: permit
    - form: muln drevn dzolv zhav
      class: v
      field: Everyday speech
      gloss: to prohibit; to give a command not to perform the stated act. This is the form for the named participant’s own act or experience.
      concept: prohibit
    - form: drevn gend muln havd
      class: v
      field: Everyday speech
      gloss: to be free to act; to have no constraint or limiting barrier upon the stated act
      concept: free
    - form: drevn gend havd
      class: v
      field: Everyday speech
      gloss: to be constrained; to have a limit or barrier upon the stated act
      concept: constrained
    - form: drevn lev
      class: v
      field: Everyday speech
      gloss: to be willing; to want or consent to perform the stated act. This is the form for the named participant’s own act or experience.
      concept: willing
    - form: menzd tevd ezv
      class: v
      field: Everyday speech
      gloss: to be intended; to be the matter or act deliberately aimed at
      concept: intended
    - form: menzd muln havd zhevnd
      class: v
      field: Everyday speech
      gloss: to be accidental; to happen without an intention directing the event
      concept: accidental
    - form: vrem edv
      class: call
      field: Everyday speech
      gloss: hello; good occasion, the ordinary friendly greeting when meeting
      concept: hello
    - form: vrem vrod
      class: call
      field: Everyday speech
      gloss: goodbye; good journey, said when parting
      concept: goodbye
    - form: vrem vrok
      class: call
      field: Everyday speech
      gloss: welcome; good coming, greeting a person received into one's company
      concept: expression-welcome
    - form: mevn imz
      class: call
      field: Everyday speech
      gloss: please; for consideration, a courteous request formula. Zhiv mevn imz kleiv zhav means please give the blade
      concept: expression-please
    - form: zhav zevn dzeln havd
      class: v
      field: Everyday speech
      gloss: thank you; I have gratitude for the gift or help, the ordinary expression of thanks
      concept: expression-thank-you
    - form: niv drelv
      class: call
      field: Everyday speech
      gloss: you are welcome; a small task, the conventional modest reply to thanks
      concept: expression-youre-welcome
    - form: lun edv luzn
      class: call
      field: Everyday speech
      gloss: excuse me; permission for a brief moment, requesting leave to interrupt or pass
      concept: expression-excuse-me
    - form: zhelt havd
      class: v
      field: Everyday speech
      gloss: sorry; I feel shame or remorse for the wrong, the ordinary apology formula
      concept: expression-sorry
    - form: ev vrelk drevn drevzh
      class: v
      field: Everyday speech
      gloss: forgive me; release my wrongdoing, a request for forgiveness. This is the form for the named participant’s own act or experience.
      concept: expression-forgive-me
    - form: ez hvol vrok
      class: v
      field: Everyday speech
      gloss: come here; come to this place. This is the form for the named participant’s own act or experience.
      concept: expression-come-here
    - form: ez hvol urz vrek
      class: v
      field: Everyday speech
      gloss: go away; go from this place. This is the form for the named participant’s own act or experience.
      concept: expression-go-away
    - form: brouln en edv dzel
      class: v
      field: Everyday speech
      gloss: pardon; say it on another occasion, a courteous request to repeat what was said. This is the form for the named participant’s own act or experience.
      concept: expression-pardon
    - form: brouln en edv drevn
      class: v
      field: Everyday speech
      gloss: again; do it on another occasion, a request for repetition. This is the form for the named participant’s own act or experience.
      concept: expression-again
    - form: ev zern zevd
      class: v
      field: Everyday speech
      gloss: I understand; I know how the matter fits together. This is the form for the named participant’s own act or experience.
      concept: expression-i-understand
    - form: ev zern muln zevd
      class: v
      field: Everyday speech
      gloss: I do not understand; I do not know how the matter fits together. This is the form for the named participant’s own act or experience.
      concept: expression-i-do-not-understand
    - form: zhiv ez drel vrod dzel
      class: v
      field: Everyday speech
      gloss: how do you say this? A complete question; replace ez by the matter whose expression is requested. This is the form for the named participant’s own act or experience.
      concept: expression-how-do-you-say
    - form: ez drel nemv havd
      class: v
      field: Everyday speech
      gloss: what is this called? Literally this has what name
      concept: expression-what-is-this-called
    - form: sern ezv kezv
      class: call
      field: Everyday speech
      gloss: really? Is it true? A conversational request for confirmation, often with surprise
      concept: expression-really
    - form: muln dolv
      class: call
      field: Everyday speech
      gloss: not at all; no portion, the emphatic conversational rejection of the amount or claim at issue
      concept: expression-not-at-all
    - form: bozhdvhin
      class: n
      field: Everyday speech
      gloss: boy; a male child
      concept: boy
      built: [bozhd, vhin]
    - form: vold zhenk vher
      class: n
      field: Everyday speech
      gloss: adult; a person whose bodily growing has reached maturity
      concept: adult
    - form: vrunvher
      class: n
      field: Everyday speech
      gloss: elder; a person of advanced age
      concept: elder
      built: [vrun, vher]
    - form: envher
      class: n
      field: Everyday speech
      gloss: individual; a single person considered separately
      concept: individual
      built: [en, vher]
    - form: mav vher mourn
      class: n
      field: Everyday speech
      gloss: crowd; a large gathered group of persons
      concept: crowd
    - form: vern muvel mourn
      class: n
      field: Everyday speech
      gloss: community; people linked through shared dwelling and common life
      concept: community
    - form: drelvvher
      class: n
      field: Everyday speech
      gloss: worker; a person carrying out work
      concept: worker
      built: [drelv, vher]
    - form: veid drelv vher
      class: n
      field: Everyday speech
      gloss: artisan; a person skilled in craft work
      concept: artisan
    - {form: veid, class: n, field: Everyday speech, gloss: "creation, craft"}
    - form: veizdvher
      class: n
      field: Everyday speech
      gloss: merchant; a person who trades goods
      concept: merchant
      built: [veizd, vher]
    - {form: veizd, class: n, field: Everyday speech, gloss: trade}
    - form: redvnemv
      class: n
      field: Everyday speech
      gloss: title; the name of an office or place in the rank order
      concept: title
      built: [redv, nemv]
    - form: vrun drevn vrod
      class: n
      field: Everyday speech
      gloss: custom; an established path of doing things in a community
      concept: custom
    - form: vrun zevn vrod
      class: n
      field: Everyday speech
      gloss: tradition; a path of knowledge and practice handed down through generations
      concept: tradition
    - form: rhelnhveln
      class: n
      field: Everyday speech
      gloss: order; an arrangement of things in a coherent pattern rather than disorder
      concept: order-noun
      built: [rheln, hveln]
    - form: dzolv gev drelv
      class: n
      field: Everyday speech
      gloss: obedience; conduct that keeps or carries out a command
      concept: obedience
    - form: vremdreiv
      class: n
      field: Everyday speech
      gloss: justice; right and fair law or judgment in dealings between persons
      concept: justice
      built: [vrem, dreiv]
    - form: vrelkdreiv
      class: n
      field: Everyday speech
      gloss: injustice; harmful or unfair law, judgment or treatment
      concept: injustice
      built: [vrelk, dreiv]
    - form: vhezddrelv
      class: n
      field: Everyday speech
      gloss: war; organized fighting between peoples or rulers, conventionally warrior work
      concept: war
      built: [vhezd, drelv]
    - {form: vhezd, class: n, field: Everyday speech, gloss: "warrior, soldier"}
    - form: gend muln havd ezd
      class: n
      field: Everyday speech
      gloss: freedom; a period or condition of having no constraining limit upon action
      concept: freedom
    - form: gevndezd
      class: n
      field: Everyday speech
      gloss: captivity; the condition or period of being bound or held by another
      concept: captivity
      built: [gevnd, ezd]
    - {form: gevnd, class: adj, field: Everyday speech, gloss: "bound, enslaved"}
    - form: zhavtevd
      class: n
      field: Everyday speech
      gloss: gift; a thing given freely to another
      concept: gift
      built: [zhav, tevd]
    - form: veizkedv
      class: n
      field: Everyday speech
      gloss: exchange; an occasion of giving and receiving between parties
      concept: exchange-noun
      built: [veizk, edv]
    - form: dzenv mulv ezd
      class: n
      field: Everyday speech
      gloss: poverty; a condition of lacking material wealth
      concept: poverty
    - form: mulv
      class: adj
      field: Everyday speech
      gloss: empty; containing none of the thing in question
    - form: havdtevd
      class: n
      field: Everyday speech
      gloss: property; a thing possessed
      concept: property
      built: [havd, tevd]
    - form: havdmuvel
      class: n
      field: Everyday speech
      gloss: ownership; the recognized possessive relation between owner and thing
      concept: ownership
      built: [havd, muvel]
    - form: vremnemv
      class: n
      field: Everyday speech
      gloss: honor; a good name or respected standing in the eyes of one's community
      concept: honor
      built: [vrem, nemv]
    - form: zhurnzevn
      class: n
      field: Everyday speech
      gloss: secret; hidden knowledge, a matter kept from general notice
      concept: secret
      built: [zhurn, zevn]
    - form: ezvtevd
      class: n
      field: Everyday speech
      gloss: being; an entity that exists, whether living or not
      concept: being
      built: [ezv, tevd]
    - form: brevnzern
      class: n
      field: Everyday speech
      gloss: origin; the initial source or cause from which a thing arises
      concept: origin
      built: [brevn, zern]
    - form: drevzedv
      class: n
      field: Everyday speech
      gloss: beginning; the occasion at which a thing starts
      concept: beginning
      built: [drevz, edv]
    - form: voldgend
      class: n
      field: Everyday speech
      gloss: end; the terminal boundary of a thing or event
      concept: end-noun
      built: [vold, gend]
    - form: voldhveln
      class: n
      field: Everyday speech
      gloss: completion; the finished state or form of an undertaking
      concept: completion
      built: [vold, hveln]
    - form: zhendvedv
      class: n
      field: Everyday speech
      gloss: change; an occurrence of becoming different
      concept: change-noun
      built: [zhendv, edv]
    - form: hveln zhendv edv
      class: n
      field: Everyday speech
      gloss: transformation; a change of form or character
      concept: transformation
    - form: zern brouln tevd
      class: n
      field: Everyday speech
      gloss: effect; the matter that follows from a cause
      concept: effect
    - form: hvelnmourn
      class: n
      field: Everyday speech
      gloss: kind; a class grouped by shared form or character
      concept: kind
      built: [hveln, mourn]
    - form: muln vrenzd
      class: adj
      field: Everyday speech
      gloss: unnatural; outside the ordinary workings of living things or the physical world
      concept: unnatural
    - form: drelv vrekd ezd
      class: n
      field: Everyday speech
      gloss: rest; a pause or period free of effort that allows recovery
      concept: rest
    - form: vher gev drelv
      class: n
      field: Everyday speech
      gloss: protection; work preserving a person against harm. Replace vher with the person, creature or thing protected
      concept: protection
    - form: vher gev
      class: v
      field: Everyday speech
      gloss: to defend; to preserve a person against harm or attack. Replace vher with the person or thing protected. This is the form for the named participant’s own act or experience.
      concept: defend
    - form: mezd voz drouv meln
      class: adj
      field: Everyday speech
      gloss: sated; full of food or drink, with the bodily desire to eat or drink satisfied
      concept: sated
    - form: meiv vredn zheln
      class: n
      field: Everyday speech
      gloss: wool; soft animal textile fiber, the fleece shorn or gathered for spinning
      concept: wool
    - form: hviz muln havd
      class: v
      field: Everyday speech
      gloss: to be unconscious; to lack present sensory awareness
      concept: unconscious
    - form: zoum zeil havd
      class: v
      field: Everyday speech
      gloss: to be equal in quantity; to have the same count or measure as the comparison standard
      concept: equal
    - form: meir zeil zhenv vher
      class: n
      field: Everyday speech
      gloss: about ten people; the conventional middle-count construction gives an approximation around the stated number. Replace zhenv by the number and vher by the counted noun
      concept: about
    - form: hvel imv ouvd dreik
      class: v
      field: Everyday speech
      gloss: to push; to send an object outward with the hand by steady pressure. Hvel imv marks the hand as the instrument. This is the form for the named participant’s own act or experience.
      concept: push
    - form: imv
      class: part
      field: Everyday speech
      gloss: "with; together with. The companion precedes imv: drevl imv, with the teacher"
    - form: vher hveln hvaz kenz havd
      class: v
      field: Everyday speech
      gloss: "An ordinary sighted person can clearly discern the form in the stated viewing conditions: its appearance is clear. Hveln names the form whose clarity is assessed"
      concept: clear-appearance
    - form: vher tevd env hvaz kenz havd
      class: v
      field: Everyday speech
      gloss: "An ordinary sighted person can see the interior or the thing beyond through the material: it is transparent. Tevd names the material being looked through in the stated viewing conditions"
      concept: transparent
    - form: vher tevd env hvaz kenz muln havd
      class: v
      field: Everyday speech
      gloss: "An ordinary sighted person cannot see the interior or the thing beyond through the material: it is opaque. Tevd names the material in the stated viewing conditions"
      concept: opaque
    - form: hvein hveln havd
      class: v
      field: Everyday speech
      gloss: to be light in color; to have a bright form in the stated hue
      concept: light-colour
    - form: hvein hveln zhav
      class: v
      field: Everyday speech
      gloss: to be shiny; to give off a bright appearance by reflection from a surface. This is the form for the named participant’s own act or experience.
      concept: shiny
    - form: hvein hveln zhav kenz muln havd
      class: v
      field: Everyday speech
      gloss: to be dull in appearance; to lack the surface capacity to give off a bright appearance by reflection
      concept: dull-appearance
    - form: vhar vhar
      class: adj
      field: Everyday speech
      gloss: huge; very great in physical size, with repetition intensifying the ordinary size adjective
      concept: huge
    - form: vhar hourd nerd havd
      class: v
      field: Everyday speech
      gloss: to be high or tall; to have a great upward extent. Drak vhar hourd nerd havd describes a high mountain; vher vhar hourd nerd havd a tall person.
      concept: [high, tall]
    - form: sern dzeln havd
      class: v
      field: Everyday speech
      gloss: to be honest; to have a sincere heart and deal without pretense or intended deception
      concept: honest
    - form: menzd zerl dzel veld
      class: v
      field: Everyday speech
      gloss: to be dishonest; to persist in deliberately false speech in the dealings at issue. This is the form for the named participant’s own act or experience.
      concept: dishonest
    - form: zhiv drel tevd dzel
      class: v
      field: Everyday speech
      gloss: What matter are you stating? A complete SOV clarification question asking what the other person means. This is the form for the named participant’s own act or experience.
      concept: [question-clarification, expression-what-do-you-mean]
    - form: tevd hevd menv havd
      class: v
      field: Everyday speech
      gloss: to suspect; to hold a tentative belief that a matter or claim may be true, without certainty. The matter can be favorable, unfavorable or neutral; zhoun vezd vould tevd hevd menv havd gives suspect that rain is falling
      concept: suspect
    - form: ez drel vher kleiv ezv
      class: v
      field: Everyday speech
      gloss: Whose blade is this? A complete question with ez, this, as subject and drel vher, what person, as the blade's possessor. Replace kleiv with the possessed noun
      concept: question-whose
    - form: drak
      class: n
      gloss: a mountain; a high mass of land
      concept: mountain
      field: Everyday speech
    - form: kuzhrhen
      class: n
      gloss: a master or mistress of a household; its head with authority over the household
      built: [kuzh, rhen]
      concept: master
      field: Everyday speech
    - form: hvordhvol
      class: n
      gloss: a physical hearth; the place where a fire is maintained
      built: [hvord, hvol]
      concept: hearth
      field: Everyday speech
    - form: vhord
      class: v
      gloss: "to go as a participating member of a party; paired with vrek, to go in one’s own individual capacity. Ev hvol uz vhord: I go to the place as one of the party."
      field: Everyday speech
    - form: bravn
      class: v
      gloss: "to carry as a participating member of a party; paired with brouzd, to carry personally. Ev mevzd bravn: I carry the pot as one of the carrying party."
      field: Everyday speech
    - form: dzav
      class: v
      gloss: "to see or observe as a participating member of a party; paired with hvaz, to see personally. Ev drak dzav: I observe the mountain as part of the party."
      field: Everyday speech
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: "{given} {hearth}"
    given:
      female:
        - "Hvrel"
        - "Tsevrel"
        - "Rhanvi"
        - "Delzh"
        - "Vurn"
        - "Shemli"
        - "Berdnu"
        - "Zhavel"
        - "Ourn"
        - "Klemsi"
        - "Rhevzhen"
        - "Tudzelv"
        - "Vnesh"
        - "Melerhu"
        - "Dzorin"
        - "Habvern"
        - "Sulzhe"
        - "Termen"
        - "Ovru"
        - "Rhistne"
      male:
        - "Hvrel"
        - "Tsevrel"
        - "Rhanvi"
        - "Delzh"
        - "Vurn"
        - "Shemli"
        - "Berdnu"
        - "Zhavel"
        - "Ourn"
        - "Klemsi"
        - "Rhevzhen"
        - "Tudzelv"
        - "Vnesh"
        - "Melerhu"
        - "Dzorin"
        - "Habvern"
        - "Sulzhe"
        - "Termen"
        - "Ovru"
        - "Rhistne"
    hearth:
      - "Nurvharn"
      - "Tsedvern"
      - "Rhonzhel"
      - "Klemverd"
      - "Hvurnash"
      - "Dzelbern"
      - "Vrestun"
      - "Shulner"
  sounds:
    stress: {two: first, longer: first}
    edges:
      - {edge: openCluster, sounds: [hv, hvr, vh, vr, vn, kl, tr, br, dr, zv]}
      - {edge: closeConsonant, sounds: any}
      - edge: closeCluster
        sounds: [rn, rd, rzh, lv, lk, nk, sk, vd, zd, zn, lzh, rv, nd, vn, dn, rk, lt]
      - {edge: vowelPair, sounds: [ei, ou]}
    clusters: {max: 3}
  scope:
    lore: [hvarnclt]
    addresses:
      - lore-hvarnclt
      - skill-hvarnlng
      - affiliation-hvarnguides
      - place-nurvhrn
      - doc-hvarnadvguide
  tongues:
    - {tag: hvarn, meaning: a Hvarn name, language: skill-hvarnlng}
    - {tag: translation, meaning: a name given in the language of these pages}
  register:
    - {name: Bone-bringer, tongue: translation}
    - {name: Drover, tongue: translation}
    - {name: Fort-carrier, tongue: translation}
    - {name: Hearth-head, tongue: translation}
    - {name: Hearth-kin, tongue: translation}
    - {name: Hvarn, tongue: hvarn}
    - {name: Hvarn Adventurer's Guide, tongue: translation}
    - {name: Hvarn Language, tongue: translation}
    - {name: Hvarn Lexicon, tongue: translation}
    - {name: Nurvharn, tongue: hvarn}
    - {name: Reach-guide, tongue: translation}
    - {name: Roadwalker, tongue: translation}
    - {name: Storm-Reader, tongue: translation}
    - {name: Taken-in, tongue: translation}
    - {name: The Hvarn, tongue: translation}
    - {name: Turn-keeper, tongue: translation}
    - {name: Unhoused, tongue: translation}
    - {name: Winter-speaker, tongue: translation}
  retired:
    - {form: Tudra, instead: Tudzelv, why: "an Earth word, in the name lists"}
    - {form: Tsune, instead: Tsevrel, why: "an Earth given name, in the name lists"}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Trans-Grazian}}
---

Hvarn is the tongue of [[affiliation-hvarnguides|the Hvarn]] of [[place-estrnreach|the Eastern Reach]]. Fluency measures how much of it a speaker commands, from the fort-contract vocabulary a lowland factor picks up to the full speech of the winter house. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Hvarn is not related to [[skill-osketlng|Osket]], which surprises everyone who has assumed it must be. The two peoples live three hundred miles apart along the same wall, do much the same work, marry across the gap occasionally, and speak languages with no demonstrable common stock—a fact both peoples state without interest and lowland scholars find difficult to accept.

It is the trans-Grazian language outsiders most often learn, which is to say that perhaps forty lowlanders speak it. They are the factors who renegotiate the garrison contract, a handful of eastern janapada clerks, and the occasional soldier of [[place-sangrafort|the Sangha-fort]] who has wintered at [[place-nurvhrn|Nurvharn]] and come back fluent and strange.

## How Hvarn sounds

Hvarn is the dense, short speech of the eastern guide-people. Most of its words are one syllable.

**The vowels.** _e_, _a_, _o_ and _u_, with _ou_ and _ei_ common. Every word has a vowel.

**The consonants.** _hv_, _dz_, _zh_, _v_, _z_, _r_, _l_, _n_ and _d_.

**Clusters.** _hv-_ and _dz-_ open words, and _-zd_ closes them; _-ven_ and _-zen_ end many.

**Endings.** Hvarn words end on _-n_, _-d_, _-v_ or _-l_. Names add _-i_ or _-el_.

**What Hvarn leaves out.** It has no word without a vowel, and no _r_ standing for a vowel between consonants.

## Phonology

### Consonant System

**Unvoiced:** p, t, k

**Voiced:** b, d, g

**Affricates:** ts, dz

**Fricatives:** f, v, s, z, sh, zh, h

**Nasals:** m, n

**Liquids & Approximants:** l, r, rh (voiceless), w

### Vowel System

**Vowels:** a, e, i, o, u, and a front rounded vowel, said with the tongue forward and the lips rounded

**Diphthongs:** ei, ou

_hvarn_ is the people's own word for themselves, and the one lowlanders use.

### Phonotactic Patterns

Consonant Clusters
: Heavy in every position, and the initial cluster _hv-_ is the people's own name

Syllable Structure
: Closed; stress falls on the first syllable without exception

Final Consonants
: Unrestricted, and a final cluster of three is ordinary

Word Length
: Short and dense; a two-syllable Hvarn word routinely carries what [[skill-vedyarlng|Vedyari]] needs five for

## Grammar Notes

Word order is verb-final. Verbs do not mark tense; when an action happened is left to the adverbs. Nouns are not inflected for number. The most elaborated part of the grammar is a system of paired forms distinguishing what a speaker has done himself from what he has done as one of a party, which is exactly the distinction a people who work in roped groups would elaborate.

## Script & Literacy

There is no script and there is no cord. What the Hvarn keep, they keep by recitation: the roll of the dead and where each was found, the rotation of the crossings, the debts between hearths. The Bone-bringer recites the roll at the winter council each year, and a fault in the recitation is corrected from the floor by anyone who catches it.

## Naming Traditions

A person carries a given name and a hearth name, and the hearth name changes if he is taken into another hearth. Given names are drawn from the roll: a child is named for a person in it, and the naming carries the obligation to know where that person was found.

### Name Lists

**Given Names:** Hvrel, Tsevrel, Rhanvi, Delzh, Vurn, Shemli, Berdnu, Zhavel, Ourn, Klemsi, Rhevzhen, Tudzelv, Vnesh, Melerhu, Dzorin, Habvern, Sulzhe, Termen, Ovru, Rhistne

**Hearth Names:** Nurvharn, Tsedvern, Rhonzhel, Klemverd, Hvurnash, Dzelbern, Vrestun, Shulner

## Hvarn Lexicon {#lexicon}

The [[affiliation-hvarnguides|Hvarn]] call themselves _hvarn_, which is also the word lowlanders use. Hvarn is short and heavy: a word of one syllable carries what Vedyari says in a phrase, and a compound of two such words names an office of the winter council. This page is the word-hoard of the tongue: its words, the rules a new word is built by, and the register of every name the setting gives the Hvarn and the places they hold.

A Hvarn compound sets two words side by side, the first saying which and the second saying what: _dzevd_ is bone and _poudz_ is to bring up from below, so _dzevdpoudz_ is the bone-bringer, who recovers the dead from the eastern gorges. The words are written whole at the seam, however many consonants meet there.

The sound of Hvarn is dense. Clusters stand at the start and the end of a word, a final cluster of three is ordinary. Stress falls on the first syllable without exception.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited. A word made of smaller parts names the words the form is made of, joined by `+`, and the form is exactly those words set side by side.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-hvarnlng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Word edges

A word opens on a vowel, a single consonant, or one of the clusters below, and closes on any consonant or one of the clusters below.

```sql
SELECT CASE edge WHEN 'openCluster' THEN 'Pairs that may open a word, and three' WHEN 'closeConsonant' THEN 'Consonants that close a word' WHEN 'closeCluster' THEN 'Pairs that may close a word' WHEN 'vowelPair' THEN 'Vowels that may stand together' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-hvarnlng' ORDER BY position
```

### Clusters

```sql
SELECT 'Most consonants together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-hvarnlng'
```

## Words {#words}

### The people and the house

The long house at [[place-nurvhrn|Nurvharn]] is _vharn_, the roof that holds the whole people through the closed months, and every household along it is a _kuzh_, a hearth. The name _Nurvharn_ is older than the words on this page.

## Making names {#making-names}

**A person** carries a given name and a hearth name, the given name first: _Hvrel, of the Klemverd hearth_. A given name comes off the roll, so it is as old as the person it remembers and is not built from the words on this page. A hearth name is the winter house's, and changes when a person is taken into another hearth.

**An office** of the winter council is a compound of what the holder handles and what he does with it, as _dzevdpoudz_, the bone-bringer, is. The notes give the offices in the reader's tongue, and the register tags them so.

## Scope {#scope}

The register below holds every name of every note of the Hvarn. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'lore' THEN 'lore' WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-hvarnlng'
GROUP BY kind ORDER BY CASE kind WHEN 'lore' THEN 0 WHEN 'addresses' THEN 1 END
```

## Attested names {#attested-names}

Every name the setting gives the Hvarn, their offices and the places they hold, with the note where it is met. A name built from this page shows how; a name the tongue uses that is not built from it shows `—`, and a name in the reader's tongue is tagged as such.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'hvarn' THEN ', [[' || tongue_language || '|Hvarn]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-hvarnlng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-hvarnlng' ORDER BY position
```

## Retired names {#retired-names}

A retired name is one the setting does not write: a word or a name of an Earth language. Each stands below with the name written in its place, and no page writes it, however accented. A `terran_analog` comment names the Earth source on purpose and is not read.

```sql
SELECT '`' || form || '`' AS "Retired",
       coalesce(array_to_string(list_transform(instead, x -> '`' || x || '`'), ', '), '—') AS "Written instead",
       why AS "Why"
FROM retired WHERE language = 'thalorna-note-skill-hvarnlng' ORDER BY position
```

## Everyday speech

The new action entries give the participant's personal use explicitly. Three pairs show the party distinction in ordinary speech: _vrek_, go personally, and _vhord_, go as one of a party; _brouzd_, carry personally, and _bravn_, carry as one of a carrying party; _hvaz_, see personally, and _dzav_, observe as one of the party. Each pair is listed in full. The existing _poudz_, _zourd_ and _nezen_ keep their established uses.

_Ev hvol uz vrek_ means I go to the place in my own capacity; _ev hvol uz vhord_ means I go there as one of the party. _Ev mevzd brouzd_ means I carry the pot myself; _ev mevzd bravn_ means I carry it as one of the party doing the carrying. In both statements the speaker takes part in the named act. A person who stayed behind does not claim the party's crossing. _Ev drak hvaz_ means I see the mountain personally; _ev drak dzav_ places the speaker among the party observing it.

The verb comes last: _ev vezd droun_, I drink water; _zhiv mevzd ev uz zhav_, you give the pot to me. _Ev dreiv zevd_ means I know the rule; _ev dreiv muln zevd_, I do not know it. _Az_ follows a place or point, _uz_ a goal or recipient, _urz_ a source, and _imv_ a companion or means: _ev mevzd treiv az ledv_, I put the pot at the table. _Vezd vrendz ezv_ means the water is cold; _vern ezv_ says a house exists. These descriptions of states do not claim a shared act. Time words supply when an act occurs; the cited verbs do not change for tense, and the nouns keep their forms when the count changes.

A compound keeps its whole words at the seam, with the describing part first: _hvordhvol_, fire-place, is the physical hearth, while _kuzh_ also names the household at one fire. _Kuzhrhen_, hearth-head, names the household's master or mistress. _Dzourn_ is an ancestor and _dzouvn_ a descendant. _Drevl_ is a teacher; _vern_ a house, beside the established _vharn_, the long house of the people.

_Rhazdhviln_ names romantic love; _vrodhviln_ friendship, affection for chosen friends and companions; _kuzhhviln_ family love. _Vournhviln_, myriad-love, names selfless care for all people without demanding a return. _Rhazdlev_ is sexual lust. _Zeln_ is conviction or confidence, which may be mistaken; _serntevd_ is truth, what actually is the case.

_Imz_ marks a purpose after the purpose phrase, _dorz_ a comparison standard after the standard: _oz dorz meiz vrem_, better than that. _Ez mezd somn dorz meiz vrem ezv_ says this food is best: _somn_ ranges over the other relevant foods and leaves this food out. _Drel vher vrok_ asks who comes in their own capacity. _Zhiv drel hvol az veld_ asks where you stay. _Ev vral kenz havd_ means I can walk; _ev vral luzn havd_ says I have permission to walk. Ability and permission are different words. _Ev drevn devn havd_ says I am obliged to act. _Ev vrok hevd havd_ says my coming is possible.
