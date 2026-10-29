---
shortcode: tellumilng
name: {full: Tellumi Language}
type: skill
subType: language
description: "The measured, liquid tongue of the Tellumi, the old oasis people at the foot of the Grazian Mountains."
tags: []
data:
  roman: "abdefghiklmnoprstuvyABDEFGHIKLMNOPRSTUVY0123456789()–-zZáÁíÍ'"
  core: true
  abbreviation: Tell.
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: ["{given} {house}", "{given}"]
    given:
      female:
        - "Lisena"
        - "Minesha"
        - "Hulena"
        - "Yashgema"
        - "Talvuta"
        - "Birvata"
        - "Reluma"
        - "Gilsuma"
        - "Sunhema"
        - "Nimesha"
        - "Yermima"
        - "Viluna"
        - "Perima"
        - "Daneta"
        - "Muresha"
        - "Hiresha"
        - "Liruna"
        - "Vemuna"
        - "Valsuma"
        - "Mavesha"
        - "Yeluna"
        - "Berhina"
        - "Talhisha"
        - "Hevuna"
        - "Karvema"
      male:
        - "Vurinay"
        - "Teyutay"
        - "Garmeshay"
        - "Kenbeshay"
        - "Lirunay"
        - "Hevunay"
        - "Talhishay"
        - "Gureshay"
        - "Pedunay"
        - "Kireshay"
        - "Karvemay"
        - "Kervishay"
        - "Tenhuray"
        - "Vemunay"
        - "Garvanay"
        - "Tarlimay"
        - "Revunay"
        - "Budishay"
        - "Hageshay"
        - "Bamdenay"
    house:
      - "Tashbemun"
      - "Nineshun"
      - "Gudeshun"
      - "Himbarun"
      - "Hireshun"
      - "Helrimun"
      - "Gerhenun"
      - "Kishneshun"
      - "Karvemun"
      - "Sunhemun"
      - "Nimeshun"
      - "Tamkerun"
      - "Talvutun"
      - "Birvatun"
      - "Berhinun"
      - "Yashgemun"
      - "Perimun"
      - "Bulamun"
      - "Valsumun"
      - "Kervishun"
      - "Budemun"
  sounds:
    syllables:
      onsets: single
      codas: [l, m, n, r, t, d, k, s, sh]
      finals: [l, m, n, r, t, d, k, s, sh, y]
      doubled: [bb, dd, gg, kk, ll, mm, nn, pp, rr, ss, tt, vv]
      vowelPairs: []
      initialVowel: false
    joins:
      - {meeting: V+V, rule: drop}
      - meeting: V+C
        rule: double
        letters: [p, t, k, b, d, g, m, n, l, r, s, v]
        where: between stems
  affixes:
    - {form: -mi, gloss: a people}
    - {form: -el, gloss: a land or country}
    - {form: -ash, gloss: a city or town}
    - {form: -un, gloss: a house or line}
    - {form: -ay, gloss: a man's given name, kind: name, given: man}
    - {form: -a, gloss: a woman's given name, kind: name, given: woman}
  tongues:
    - tag: tellumi
      meaning: "a Tellumi name, built from Tellumi stems"
      language: skill-tellumilng
    - tag: khazryn
      meaning: "a name the Khazryn tongues share, from the shared stems"
      language: skill-tellumilng
    - tag: sowides
      meaning: "a Sovidur name, built from Sovidur stems"
      language: skill-sowideslng
    - tag: atarzadi
      meaning: "an Atárzadi name, built from Atárzadi stems"
      language: skill-atarzadilng
    - tag: gloss
      meaning: a glossed name or epithet; any in-world word it quotes is registered too
    - {tag: kept, meaning: a name that stands outside the three tongues by the owner's ruling}
    - {tag: faith, meaning: a name built on a word of the Ashaian faith}
    - tag: older
      meaning: "a name older than the rules, kept as it stands; it is listed under Names older than the rules"
    - {tag: pending, meaning: a name that keeps no rule of the three tongues}
  scope:
    folders: [khazryndesert, ankariskhazryndesert]
    cultures: [khazrynclt]
    lore: [khazrynclt]
    parents: [khzryndsrtrgn, swoasisbelt, hekardesert]
    addresses: [skill-tellumilng, skill-sowideslng, skill-atarzadilng]
  elements:
    - {form: te, sense: "high, upper"}
    - {form: lu, sense: "spring, source"}
    - {form: nelim, sense: water}
    - {form: peshden, sense: well}
    - {form: tarlim, sense: road}
    - {form: tsemkin, sense: sand}
    - {form: yisur, sense: salt}
    - {form: garvan, sense: horse}
    - {form: bashgur, sense: camel}
    - {form: kishnesh, sense: "kin, family"}
    - {form: neyin, sense: guest}
    - {form: dushmen, sense: debt}
    - {form: sulvun, sense: "passage, safe-conduct, toll"}
    - {form: helrim, sense: sky}
    - {form: vurse, sense: wind}
    - {form: tashbem, sense: tower}
    - {form: gerhen, sense: city}
    - {form: dalyim, sense: mountain}
    - {form: nilvur, sense: the dead}
    - {form: tsenmat, sense: north}
    - {form: yendur, sense: south}
    - {form: vengun, sense: east}
    - {form: hemvan, sense: west}
    - {form: nivun, sense: seven}
    - {form: kenbesh, sense: "first, eldest"}
    - {form: vurin, sense: holy}
    - {form: teyut, sense: old}
    - {form: garmesh, sense: great}
    - {form: nimya, sense: small}
    - {form: nerir, sense: mother}
    - {form: bamden, sense: father}
    - {form: ninesh, sense: "house, household"}
    - {form: relvan, sense: "prince, lord"}
    - {form: tselvun, sense: council}
    - {form: tenyut, sense: "tablet, record"}
    - {form: budem, sense: clay}
    - {form: tsergim, sense: "to write, to cut signs"}
    - {form: muresh, sense: "memory, to remember"}
    - {form: yashgem, sense: garden}
    - {form: talvut, sense: palm}
    - {form: birvat, sense: date}
    - {form: berhin, sense: grain}
    - {form: yelun, sense: canal}
    - {form: hiresh, sense: "stream, snowmelt"}
    - {form: gilsum, sense: snow}
    - {form: kervish, sense: cliff}
    - {form: karvem, sense: stone}
    - {form: sunhem, sense: gold}
    - {form: nimesh, sense: silver}
    - {form: tamker, sense: copper}
    - {form: kulsam, sense: black}
    - {form: vilun, sense: white}
    - {form: darher, sense: red}
    - {form: yermim, sense: green}
    - {form: talhish, sense: sun}
    - {form: lisen, sense: moon}
    - {form: minesh, sense: star}
    - {form: nurmesh, sense: night}
    - {form: gaben, sense: day}
    - {form: hulen, sense: dawn}
    - {form: perim, sense: "fire, hearth"}
    - {form: gudesh, sense: wall}
    - {form: vartun, sense: gate}
    - {form: himbar, sense: market}
    - {form: pelim, sense: "trade, exchange"}
    - {form: danet, sense: gift}
    - {form: bulam, sense: bread}
    - {form: samlesh, sense: milk}
    - {form: nebat, sense: sheep}
    - {form: hudesh, sense: goat}
    - {form: yepish, sense: dog}
    - {form: derat, sense: "dry, drought"}
    - {form: veshkun, sense: lost}
    - {form: turem, sense: "to break, breaking"}
    - {form: hagesh, sense: "held, kept"}
    - {form: lirun, sense: free}
    - {form: balem, sense: exile}
    - {form: revun, sense: to return}
    - {form: genbun, sense: "to come down, descent"}
    - {form: tenhur, sense: peak}
    - {form: vurdish, sense: pass}
    - {form: dimen, sense: "people, folk"}
    - {form: yumesh, sense: name}
    - {form: narvun, sense: "word, speech"}
    - {form: relum, sense: song}
    - {form: nartem, sense: "law, custom"}
    - {form: bernir, sense: oath}
    - {form: henhut, sense: blood}
    - {form: vesut, sense: bone}
    - {form: hevun, sense: "life, living"}
    - {form: timlan, sense: child}
    - {form: nesur, sense: daughter}
    - {form: bihen, sense: son}
    - {form: guresh, sense: "war, battle"}
    - {form: pedun, sense: sword}
    - {form: kiresh, sense: spear}
    - {form: budish, sense: shield}
    - {form: yelhut, sense: shade}
    - {form: karhum, sense: heat}
    - {form: silum, sense: cold}
    - {form: mavesh, sense: "grass, pasture"}
    - {form: vemun, sense: river}
    - {form: valsum, sense: lake}
    - {form: pedin, sense: field}
    - {form: harmin, sense: "waste, desert"}
    - {form: sirvesh, sense: "cursed, forbidden"}
    - {form: pirsesh, sense: painted cloth}
    - {form: lavun, sense: "telling, performance"}
    - {form: tsemhat, sense: recitation}
  grammar: {verbs: {invariant: true}}
  fields:
    - name: Derived words
      holds: "The names and words built from the stems, each with the pieces it is made of."
    - name: "The household and its record"
      holds: "The household, its tablets, the names they record and the recitation of them."
    - {name: "Law, oath and debt", holds: "Law and custom, the oath and the debt."}
    - {name: "Exile and the return", holds: "The exile houses and the return they work for."}
    - name: "Day, greeting and the dead"
      holds: "The day, the free day of the greeting, and the dead."
    - name: Ordinary lexical stems
      holds: Existing free lexical stems in ordinary speech, preserving the earlier elements and names.
    - name: Ordinary usage
      holds: Invariant grammar words and supporting words used in the worked constructions.
    - {name: Core senses, holds: Ordinary expressions for the senses category of Core Vocabulary.}
    - name: Core passions
      holds: Ordinary expressions for the passions category of Core Vocabulary.
    - {name: Core loves, holds: Ordinary expressions for the loves category of Core Vocabulary.}
    - {name: Core body, holds: Ordinary expressions for the body category of Core Vocabulary.}
    - {name: Core needs, holds: Ordinary expressions for the needs category of Core Vocabulary.}
    - {name: Core health, holds: Ordinary expressions for the health category of Core Vocabulary.}
    - name: Core kinship
      holds: Ordinary expressions for the kinship category of Core Vocabulary.
    - {name: Core things, holds: Ordinary expressions for the things category of Core Vocabulary.}
    - {name: Core nature, holds: Ordinary expressions for the nature category of Core Vocabulary.}
    - name: Core numbers
      holds: Ordinary expressions for the numbers category of Core Vocabulary.
    - name: Core colours
      holds: Ordinary expressions for the colours category of Core Vocabulary.
    - {name: Core verbs, holds: Ordinary expressions for the verbs category of Core Vocabulary.}
    - {name: Core space, holds: Ordinary expressions for the space category of Core Vocabulary.}
    - {name: Core time, holds: Ordinary expressions for the time category of Core Vocabulary.}
    - name: Core reference
      holds: Ordinary expressions for the reference category of Core Vocabulary.
    - name: Core questions
      holds: Ordinary expressions for the questions category of Core Vocabulary.
    - {name: Core truth, holds: Ordinary expressions for the truth category of Core Vocabulary.}
    - {name: Core logic, holds: Ordinary expressions for the logic category of Core Vocabulary.}
    - name: Core qualities
      holds: Ordinary expressions for the qualities category of Core Vocabulary.
    - name: Core modality
      holds: Ordinary expressions for the modality category of Core Vocabulary.
    - name: Core conversation
      holds: Ordinary expressions for the conversation category of Core Vocabulary.
    - name: Core society
      holds: Ordinary expressions for the society category of Core Vocabulary.
    - name: Core existence
      holds: Ordinary expressions for the existence category of Core Vocabulary.
  words:
    - form: Delkoshekh
      class: n
      field: Law, oath and debt
      gloss: "The Ashaian teacher-priest who keeps a community's law and custom"
      source: {kind: borrowed, language: skill-atarzadilng}
    - form: Tellumi
      class: name
      field: Derived words
      gloss: the people of the high springs
      built: [te, lu, -mi]
    - form: Tellumel
      class: name
      field: Derived words
      gloss: the land of the Tellumi
      built: [te, lu, -mi, -el]
    - form: Tennelimash
      class: name
      field: Derived words
      gloss: high-water town
      built: [te, nelim, -ash]
    - form: Tashbemun
      class: name
      field: Derived words
      gloss: the house of the tower
      built: [tashbem, -un]
    - form: Turem
      class: name
      field: Derived words
      gloss: "the Breaking: the Atarzád conquest, as the Tellumi call it"
      built: [turem]
    - form: Veshkun
      class: name
      field: Derived words
      gloss: "the lost one: the ruin of old Vahurdash"
      built: [veshkun]
    - form: Vurinay
      class: name
      field: Derived words
      gloss: "a man's name: holy"
      built: [vurin, -ay]
    - form: Lisena
      class: name
      field: Derived words
      gloss: "a woman's name: moon"
      built: [lisen, -a]
    - form: Vurdish
      class: name
      field: Derived words
      gloss: "the pass: the passages in the Grazian north face; `Gurdi` is retired"
      built: [vurdish]
    - form: Henhutpedin
      class: name
      field: Derived words
      gloss: "blood-field: the field of the Breaking outside Zargandur"
      built: [henhut, pedin]
    - form: Sirveshpedin
      class: name
      field: Derived words
      gloss: "cursed field: a thin blood-field"
      built: [sirvesh, pedin]
    - form: Veshkunrelum
      class: name
      field: Derived words
      gloss: "the song of the lost town: the Tellumi epic of old Vahurdash"
      built: [veshkun, relum]
    - form: Genbuntsemhat
      class: name
      field: Derived words
      gloss: "the recitation of the descent: the roll of the seven peaks"
      built: [genbun, tsemhat]
    - form: Turemtsemhat
      class: name
      field: Derived words
      gloss: the recitation of the Breaking
      built: [turem, tsemhat]
    - form: Tarlimnurmesh
      class: name
      field: Derived words
      gloss: "road-nights: a caravan-master's tales told stage by stage"
      built: [tarlim, nurmesh]
    - form: Berniray
      class: name
      field: Derived words
      gloss: "a man's name: oath; the champion of the song of the lost town"
      built: [bernir, -ay]
    - form: Revunay
      class: name
      field: Derived words
      gloss: "a man's name: return; Berniray's son"
      built: [revun, -ay]
    - form: Sunhemay
      class: name
      field: Derived words
      gloss: "a man's name: gold; the last prince of old Vahurdash"
      built: [sunhem, -ay]
    - form: Minesha
      class: name
      field: Derived words
      gloss: "a woman's name: star; Berniray's wife"
      built: [minesh, -a]
    - form: Tarlimay
      class: name
      field: Derived words
      gloss: "a man's name: road; a caravan-master of Kethramír"
      built: [tarlim, -ay]
    - form: Kireshay
      class: name
      field: Derived words
      gloss: "a man's name: spear; a rider of the war-house"
      built: [kiresh, -ay]
    - form: Budishay
      class: name
      field: Derived words
      gloss: "a man's name: shield; a rider of the war-house"
      built: [budish, -ay]
    - form: Pedunay
      class: name
      field: Derived words
      gloss: "a man's name: sword; a rider of the war-house"
      built: [pedun, -ay]
    - form: Garvanay
      class: name
      field: Derived words
      gloss: "a man's name: horse; a rider of the war-house"
      built: [garvan, -ay]
    - form: Perimay
      class: name
      field: Derived words
      gloss: "a man's name: hearth; a rider of the war-house"
      built: [perim, -ay]
    - form: Hageshay
      class: name
      field: Derived words
      gloss: "a man's name: kept; a rider of the war-house"
      built: [hagesh, -ay]
    - form: Lirunay
      class: name
      field: Derived words
      gloss: "a man's name: free; a rider of the war-house"
      built: [lirun, -ay]
    - form: Gilsumtenhur
      class: name
      field: Derived words
      gloss: "snow peak: the peak of the House of Shirvan"
      built: [gilsum, tenhur]
    - form: Viluntenhur
      class: name
      field: Derived words
      gloss: "white peak: the peak of the House of Ashkarad"
      built: [vilun, tenhur]
    - form: Kulsamtenhur
      class: name
      field: Derived words
      gloss: "black peak: the peak of the House of Zargandur"
      built: [kulsam, tenhur]
    - form: Talhishtenhur
      class: name
      field: Derived words
      gloss: "sun peak: the peak of the House of Kethramír"
      built: [talhish, tenhur]
    - form: Darhertenhur
      class: name
      field: Derived words
      gloss: "red peak: the peak of the House of Vahurdash"
      built: [darher, tenhur]
    - form: Vursettenhur
      class: name
      field: Derived words
      gloss: "wind peak: the peak of the House of Mernagord"
      built: [vurse, tenhur]
    - form: Yermimtenhur
      class: name
      field: Derived words
      gloss: "green peak: the peak of the House of Ushtra-ber"
      built: [yermim, tenhur]
    - form: Vurinkarvem
      class: name
      field: Derived words
      gloss: "holy stone: the cliff over the great spring of Shirvan; `Moravar` is retired"
      built: [vurin, karvem]
    - form: Veshkunvartun
      class: name
      field: Derived words
      gloss: "the gate of the lost one: the night gate of the settlement among the ruins of old Vahurdash"
      built: [veshkun, vartun]
    - form: Tashbemsirvesh
      class: name
      field: Derived words
      gloss: "the forbidden tower: the Tower of Silence north of Ashkarad that no priest approaches"
      built: [tashbem, sirvesh]
    - form: Relvanvesut
      class: name
      field: Derived words
      gloss: "the princes' bones: the grave of the palace household of Zargandur"
      built: [relvan, vesut]
    - form: Relvanninesh
      class: name
      field: Derived words
      gloss: "the princes' house: the palace of the cadet house of Nimeshun"
      built: [relvan, ninesh]
    - form: Nimeshun
      class: name
      field: Derived words
      gloss: "the house of silver: a cadet line of the craft house of Ashkarad"
      built: [nimesh, -un]
    - form: Peshdenderat
      class: name
      field: Derived words
      gloss: "the dry well: the shaft below the lower basin of Shirvan"
      built: [peshden, derat]
    - form: "balem"
      class: "n"
      field: "Exile and the return"
      gloss: "Exile; a princely house that keeps its court abroad while it claims its city"
      built: ["balem"]
    - form: "nartem"
      class: "n"
      field: "Law, oath and debt"
      gloss: "Law and custom, as a community's Delkoshekh keeps them"
      built: ["nartem"]
      concept: ["custom", "law"]
    - form: "ninesh"
      class: "n"
      field: "The household and its record"
      gloss: "A household, which keeps its own tablets"
      built: ["ninesh"]
    - form: "revun"
      class: "n"
      field: "Exile and the return"
      gloss: "The return: the recovery of the lost cities that the exile houses work for"
      built: ["revun"]
    - form: "tenyut"
      class: "n"
      field: "The household and its record"
      gloss: "A clay tablet; a household's or a house's written record"
      built: ["tenyut"]
    - {form: "bernir", class: "n", field: "Law, oath and debt", gloss: "Oath", built: ["bernir"]}
    - form: "dushmen"
      class: "n"
      field: "Law, oath and debt"
      gloss: "Debt"
      built: ["dushmen"]
      concept: ["debt"]
    - form: "gaben"
      class: "n"
      field: "Day, greeting and the dead"
      gloss: 'Day; in _lirun gaben_, "a free day", a greeting'
      built: ["gaben"]
      concept: ["day"]
    - form: "lirun"
      class: "adj"
      field: "Day, greeting and the dead"
      gloss: 'Free; in _lirun gaben_, "a free day", a greeting'
      built: ["lirun"]
      concept: ["free"]
    - form: "nilvur"
      class: "n"
      field: "Day, greeting and the dead"
      gloss: "The dead"
      built: ["nilvur"]
    - form: "tsemhat"
      class: "n"
      field: "The household and its record"
      gloss: "Recitation"
      built: ["tsemhat"]
    - form: "yumesh"
      class: "n"
      field: "The household and its record"
      gloss: "Name"
      built: ["yumesh"]
      concept: ["name-noun"]
    - form: te
      class: adj
      field: Ordinary lexical stems
      gloss: high, upper
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: high
    - form: lu
      class: n
      field: Ordinary lexical stems
      gloss: spring, source
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: nelim
      class: n
      field: Ordinary lexical stems
      gloss: water
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: water
    - form: peshden
      class: n
      field: Ordinary lexical stems
      gloss: well
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: tarlim
      class: n
      field: Ordinary lexical stems
      gloss: road
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: tsemkin
      class: n
      field: Ordinary lexical stems
      gloss: sand
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: sand
    - form: yisur
      class: n
      field: Ordinary lexical stems
      gloss: salt
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: garvan
      class: n
      field: Ordinary lexical stems
      gloss: horse
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: bashgur
      class: n
      field: Ordinary lexical stems
      gloss: camel
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: kishnesh
      class: n
      field: Ordinary lexical stems
      gloss: kin, family
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: [family, kin]
    - form: neyin
      class: n
      field: Ordinary lexical stems
      gloss: guest
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: guest
    - form: sulvun
      class: n
      field: Ordinary lexical stems
      gloss: passage, safe-conduct, toll
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: helrim
      class: n
      field: Ordinary lexical stems
      gloss: sky
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: sky
    - form: vurse
      class: n
      field: Ordinary lexical stems
      gloss: wind
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: wind
    - form: tashbem
      class: n
      field: Ordinary lexical stems
      gloss: tower
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: gerhen
      class: n
      field: Ordinary lexical stems
      gloss: city
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: dalyim
      class: n
      field: Ordinary lexical stems
      gloss: mountain
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: mountain
    - form: tsenmat
      class: n
      field: Ordinary lexical stems
      gloss: north
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: north
    - form: yendur
      class: n
      field: Ordinary lexical stems
      gloss: south
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: south
    - form: vengun
      class: n
      field: Ordinary lexical stems
      gloss: east
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: east
    - form: hemvan
      class: n
      field: Ordinary lexical stems
      gloss: west
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: west
    - form: nivun
      class: num
      field: Ordinary lexical stems
      gloss: seven
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: seven
    - form: kenbesh
      class: adj
      field: Ordinary lexical stems
      gloss: first, eldest
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: first
    - form: vurin
      class: adj
      field: Ordinary lexical stems
      gloss: holy
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: teyut
      class: adj
      field: Ordinary lexical stems
      gloss: old
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: old-object
    - form: garmesh
      class: adj
      field: Ordinary lexical stems
      gloss: great
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: big
    - form: nimya
      class: adj
      field: Ordinary lexical stems
      gloss: small
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: small
    - form: nerir
      class: n
      field: Ordinary lexical stems
      gloss: mother
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: mother
    - form: bamden
      class: n
      field: Ordinary lexical stems
      gloss: father
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: father
    - form: relvan
      class: n
      field: Ordinary lexical stems
      gloss: prince, lord
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: tselvun
      class: n
      field: Ordinary lexical stems
      gloss: council
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: budem
      class: n
      field: Ordinary lexical stems
      gloss: clay
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: clay
    - form: tsergim
      class: v
      field: Ordinary lexical stems
      gloss: to write, to cut signs
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: muresh
      class: v
      field: Ordinary lexical stems
      gloss: remember; recall or retain the named matter
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: remember
    - form: yashgem
      class: n
      field: Ordinary lexical stems
      gloss: garden
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: talvut
      class: n
      field: Ordinary lexical stems
      gloss: palm
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: birvat
      class: n
      field: Ordinary lexical stems
      gloss: date
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: berhin
      class: n
      field: Ordinary lexical stems
      gloss: grain
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: yelun
      class: n
      field: Ordinary lexical stems
      gloss: canal
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: hiresh
      class: n
      field: Ordinary lexical stems
      gloss: stream, snowmelt
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: stream
    - form: gilsum
      class: n
      field: Ordinary lexical stems
      gloss: snow
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: snow
    - form: kervish
      class: n
      field: Ordinary lexical stems
      gloss: cliff
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: karvem
      class: n
      field: Ordinary lexical stems
      gloss: stone
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: stone
    - form: sunhem
      class: n
      field: Ordinary lexical stems
      gloss: gold
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: nimesh
      class: n
      field: Ordinary lexical stems
      gloss: silver
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: tamker
      class: n
      field: Ordinary lexical stems
      gloss: copper
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: kulsam
      class: adj
      field: Ordinary lexical stems
      gloss: black
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: black
    - form: vilun
      class: adj
      field: Ordinary lexical stems
      gloss: white
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: white
    - form: darher
      class: adj
      field: Ordinary lexical stems
      gloss: red
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: red
    - form: yermim
      class: adj
      field: Ordinary lexical stems
      gloss: green
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: green
    - form: talhish
      class: n
      field: Ordinary lexical stems
      gloss: sun
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: sun
    - form: lisen
      class: n
      field: Ordinary lexical stems
      gloss: moon
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: moon
    - form: minesh
      class: n
      field: Ordinary lexical stems
      gloss: star
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: star
    - form: nurmesh
      class: n
      field: Ordinary lexical stems
      gloss: night
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: night
    - form: hulen
      class: n
      field: Ordinary lexical stems
      gloss: dawn
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: dawn
    - form: perim
      class: n
      field: Ordinary lexical stems
      gloss: fire, hearth
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: [fire, hearth]
    - form: gudesh
      class: n
      field: Ordinary lexical stems
      gloss: wall
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: wall
    - form: vartun
      class: n
      field: Ordinary lexical stems
      gloss: gate
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: gate
    - form: himbar
      class: n
      field: Ordinary lexical stems
      gloss: market
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: pelim
      class: n
      field: Ordinary lexical stems
      gloss: trade, exchange
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: exchange-noun
    - form: danet
      class: n
      field: Ordinary lexical stems
      gloss: gift
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: gift
    - form: bulam
      class: n
      field: Ordinary lexical stems
      gloss: bread
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: samlesh
      class: n
      field: Ordinary lexical stems
      gloss: milk
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: nebat
      class: n
      field: Ordinary lexical stems
      gloss: sheep
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: hudesh
      class: n
      field: Ordinary lexical stems
      gloss: goat
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: yepish
      class: n
      field: Ordinary lexical stems
      gloss: dog
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: derat
      class: adj
      field: Ordinary lexical stems
      gloss: dry, drought
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: dry
    - form: veshkun
      class: adj
      field: Ordinary lexical stems
      gloss: lost
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: turem
      class: v
      field: Ordinary lexical stems
      gloss: to break, breaking
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: break
    - form: hagesh
      class: adj
      field: Ordinary lexical stems
      gloss: held, kept
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: genbun
      class: v
      field: Ordinary lexical stems
      gloss: to come down, descent
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: tenhur
      class: n
      field: Ordinary lexical stems
      gloss: peak
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: vurdish
      class: n
      field: Ordinary lexical stems
      gloss: pass
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: dimen
      class: n
      field: Ordinary lexical stems
      gloss: people, folk
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: people
    - form: narvun
      class: n
      field: Ordinary lexical stems
      gloss: word, speech
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: relum
      class: n
      field: Ordinary lexical stems
      gloss: song
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: henhut
      class: n
      field: Ordinary lexical stems
      gloss: blood
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: blood
    - form: vesut
      class: n
      field: Ordinary lexical stems
      gloss: bone
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: bone
    - form: hevun
      class: n
      field: Ordinary lexical stems
      gloss: life, living
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: life
    - form: timlan
      class: n
      field: Ordinary lexical stems
      gloss: a child or one's offspring
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: child
    - form: nesur
      class: n
      field: Ordinary lexical stems
      gloss: daughter
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: daughter
    - form: bihen
      class: n
      field: Ordinary lexical stems
      gloss: son
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: son
    - form: guresh
      class: n
      field: Ordinary lexical stems
      gloss: war, battle
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: war
    - form: pedun
      class: n
      field: Ordinary lexical stems
      gloss: sword
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: kiresh
      class: n
      field: Ordinary lexical stems
      gloss: spear
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: budish
      class: n
      field: Ordinary lexical stems
      gloss: shield
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: yelhut
      class: n
      field: Ordinary lexical stems
      gloss: shade
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: karhum
      class: n
      field: Ordinary lexical stems
      gloss: heat
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: heat
    - form: silum
      class: n
      field: Ordinary lexical stems
      gloss: cold
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: cold-noun
    - form: mavesh
      class: n
      field: Ordinary lexical stems
      gloss: grass, pasture
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: grass
    - form: vemun
      class: n
      field: Ordinary lexical stems
      gloss: river
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: river
    - form: valsum
      class: n
      field: Ordinary lexical stems
      gloss: lake
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: lake
    - form: pedin
      class: n
      field: Ordinary lexical stems
      gloss: field
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: field
    - form: harmin
      class: n
      field: Ordinary lexical stems
      gloss: waste, desert
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: sirvesh
      class: adj
      field: Ordinary lexical stems
      gloss: cursed, forbidden
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
      concept: forbidden
    - form: pirsesh
      class: n
      field: Ordinary lexical stems
      gloss: painted cloth
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: lavun
      class: n
      field: Ordinary lexical stems
      gloss: telling, performance
      note: An ordinary free stem under the existing Tellumi charter; the older element and name uses are unchanged.
    - form: miver
      class: pron
      field: Ordinary usage
      gloss: I or me, the speaker
      source: {kind: coined}
      concept: i
    - form: nemi
      class: part
      field: Ordinary usage
      gloss: of, linking a possessed head to its following possessor
      source: {kind: coined}
    - form: tiver
      class: pron
      field: Ordinary usage
      gloss: you, the person addressed
      source: {kind: coined}
      concept: you-reference
    - form: hunen
      class: pron
      field: Ordinary usage
      gloss: he or him
      source: {kind: coined}
      concept: he
    - form: hiner
      class: pron
      field: Ordinary usage
      gloss: she or her
      source: {kind: coined}
      concept: she
    - form: hudem
      class: pron
      field: Ordinary usage
      gloss: it, the thing or proposition referred to
      source: {kind: coined}
      concept: it
    - form: diven
      class: pron
      field: Ordinary usage
      gloss: they or them
      source: {kind: coined}
      concept: they
    - form: mener
      class: pron
      field: Ordinary usage
      gloss: we or us
      source: {kind: coined}
      concept: we
    - form: veme
      class: v
      field: Ordinary usage
      gloss: be, linking a subject to its condition or identity
      source: {kind: coined}
      concept: [be, exist]
    - form: hurem
      class: v
      field: Ordinary usage
      gloss: have or possess
      source: {kind: coined}
      concept: have
    - form: nesh
      class: part
      field: Ordinary usage
      gloss: not, immediately before the predicate or quality denied
      source: {kind: coined}
      concept: not
    - form: mibil
      class: part
      field: Ordinary usage
      gloss: with, accompanying or using the named thing
      source: {kind: coined}
    - form: dener
      class: part
      field: Ordinary usage
      gloss: to or toward the following goal
      source: {kind: coined}
      concept: [toward, to]
    - form: vanel
      class: part
      field: Ordinary usage
      gloss: from the following source
      source: {kind: coined}
      concept: from
    - form: benu
      class: part
      field: Ordinary usage
      gloss: in or inside the following enclosure
      source: {kind: coined}
      concept: [inside, in]
    - form: tarem
      class: part
      field: Ordinary usage
      gloss: at the following location
      source: {kind: coined}
      concept: at
    - form: nurel
      class: part
      field: Ordinary usage
      gloss: on a supporting surface
      source: {kind: coined}
      concept: on
    - form: hamil
      class: part
      field: Ordinary usage
      gloss: under the following thing
      source: {kind: coined}
      concept: under
    - form: hemun
      class: part
      field: Ordinary usage
      gloss: above or over the named thing, without a supporting-surface claim
      source: {kind: coined}
      concept: [above, over]
    - form: navel
      class: part
      field: Ordinary usage
      gloss: that, introducing the content of speech or thought
      source: {kind: coined}
    - form: shenir
      class: rel
      field: Ordinary usage
      gloss: relative marker after a noun, followed by a complete clause and virem
      source: {kind: coined}
    - form: virem
      class: part
      field: Ordinary usage
      gloss: end of the embedded clause introduced by navel or shenir
      source: {kind: coined}
    - form: sali
      class: part
      field: Ordinary usage
      gloss: more than one, before an otherwise unchanged count noun
      source: {kind: coined}
    - form: parim
      class: n
      field: Ordinary usage
      gloss: beloved or romantic partner
      source: {kind: coined}
    - form: merin
      class: n
      field: Ordinary usage
      gloss: friend
      source: {kind: coined}
      concept: friend
    - form: nire
      class: part
      field: Ordinary usage
      gloss: in numbered position, before a cardinal
      source: {kind: coined}
    - form: berem
      class: v
      field: Ordinary usage
      gloss: make an object, create something or perform the named work
      source: {kind: coined}
      concept: [make, do, create]
    - form: miran
      class: n
      field: Ordinary usage
      gloss: a person
      source: {kind: coined}
      concept: person
    - form: her
      class: n
      field: Ordinary usage
      gloss: a building or built dwelling
      source: {kind: coined}
    - form: pel
      class: num
      field: Ordinary usage
      gloss: one
      source: {kind: coined}
      concept: one
    - form: nin
      class: num
      field: Ordinary usage
      gloss: two
      source: {kind: coined}
      concept: two
    - form: tes
      class: num
      field: Ordinary usage
      gloss: three
      source: {kind: coined}
      concept: three
    - form: har
      class: num
      field: Ordinary usage
      gloss: four
      source: {kind: coined}
      concept: four
    - form: lem
      class: num
      field: Ordinary usage
      gloss: five
      source: {kind: coined}
      concept: five
    - form: yas
      class: num
      field: Ordinary usage
      gloss: six
      source: {kind: coined}
      concept: six
    - form: val
      class: num
      field: Ordinary usage
      gloss: eight
      source: {kind: coined}
      concept: eight
    - form: bur
      class: num
      field: Ordinary usage
      gloss: nine
      source: {kind: coined}
      concept: nine
    - form: nidem
      class: num
      field: Ordinary usage
      gloss: ten
      source: {kind: coined}
      concept: ten
    - form: hemut
      class: num
      field: Ordinary usage
      gloss: a hundred
      source: {kind: coined}
      concept: hundred
    - form: mishen
      class: num
      field: Ordinary usage
      gloss: a thousand
      source: {kind: coined}
      concept: thousand
    - form: tul
      class: num
      field: Ordinary usage
      gloss: zero
      source: {kind: coined}
      concept: zero
    - form: herim
      class: n
      field: Ordinary usage
      gloss: a sibling of either sex
      source: {kind: coined}
    - {form: varli, class: adj, field: Ordinary usage, gloss: male, source: {kind: coined}}
    - {form: nirli, class: adj, field: Ordinary usage, gloss: female, source: {kind: coined}}
    - form: kenen
      class: n
      field: Ordinary usage
      gloss: an adult person
      source: {kind: coined}
      concept: adult
    - form: bennil
      class: adv
      field: Ordinary usage
      gloss: inward, into the subject's body in a breathing expression
      source: {kind: coined}
    - form: vannil
      class: adv
      field: Ordinary usage
      gloss: outward or away from here; out of the body in a breathing expression
      source: {kind: coined}
      concept: away
    - form: shelun
      class: n
      field: Ordinary usage
      gloss: a physical body
      source: {kind: coined}
    - form: tarli
      class: adj
      field: Ordinary usage
      gloss: long in spatial extent
      source: {kind: coined}
      concept: long
    - form: ser
      class: n
      field: Ordinary usage
      gloss: a part or share of a whole; ninser and harser name equal subdivisions
      source: {kind: coined}
      concept: part
    - form: nali
      class: part
      field: Ordinary usage
      gloss: than, before the standard of a comparison
      source: {kind: coined}
      concept: than
    - form: nedim
      class: pron
      field: Ordinary usage
      gloss: another or the other, excluding the referent being compared
      source: {kind: coined}
      concept: other
    - form: het
      class: n
      field: Ordinary usage
      gloss: a place
      source: {kind: coined}
      concept: place-noun
    - form: lemir
      class: conj
      field: Ordinary usage
      gloss: and, joining words or complete clauses
      source: {kind: coined}
      concept: and
    - form: heri
      class: dem
      field: Ordinary usage
      gloss: this, before a nearby noun
      source: {kind: coined}
      concept: this
    - form: huri
      class: dem
      field: Ordinary usage
      gloss: that, before a distant or previously identified noun
      source: {kind: coined}
      concept: that
    - form: herin
      class: dem
      field: Ordinary usage
      gloss: these, before a nearby plural reference
      source: {kind: coined}
      concept: these
    - form: hurin
      class: dem
      field: Ordinary usage
      gloss: those, before a distant plural reference
      source: {kind: coined}
      concept: those
    - form: darem
      class: n
      field: Ordinary usage
      gloss: an occasion or instance of an event
      source: {kind: coined}
    - form: vel
      class: adj
      field: Ordinary usage
      gloss: any, without restriction to a particular member
      source: {kind: coined}
    - form: denem
      class: n
      field: Ordinary usage
      gloss: a thing or entity
      source: {kind: coined}
      concept: thing
    - form: verhet
      class: pron
      field: Ordinary usage
      gloss: what place, as the unknown object of a location or source relation
      source: {kind: coined}
    - form: danel
      class: part
      field: Ordinary usage
      gloss: because of the following named cause or reason
      source: {kind: coined}
    - form: peril
      class: part
      field: Ordinary usage
      gloss: for the purpose or intended outcome stated next
      source: {kind: coined}
      concept: for-purpose
    - form: virdem
      class: n
      field: Ordinary usage
      gloss: worth or value in a stated evaluation
      source: {kind: coined}
    - form: menir
      class: v
      field: Ordinary usage
      gloss: mean; intend a meaning by words or an act
      source: {kind: coined}
    - form: diram
      class: n
      field: Ordinary usage
      gloss: a degree or extent on a scale
      source: {kind: coined}
    - form: lasem
      class: v
      field: Core senses
      gloss: to see
      source: {kind: coined}
      concept: see-verb
    - form: lasek
      class: n
      field: Core senses
      gloss: a sight; what is seen
      source: {kind: coined}
      concept: see-noun
    - form: hunem
      class: v
      field: Core senses
      gloss: to hear
      source: {kind: coined}
      concept: hear-verb
    - form: hunel
      class: n
      field: Core senses
      gloss: a sound
      source: {kind: coined}
      concept: hear-noun
    - form: sunem
      class: v
      field: Core senses
      gloss: to smell
      source: {kind: coined}
      concept: smell-verb
    - form: sunel
      class: n
      field: Core senses
      gloss: a smell; a scent
      source: {kind: coined}
      concept: smell-noun
    - form: tumes
      class: v
      field: Core senses
      gloss: to taste
      source: {kind: coined}
      concept: taste-verb
    - form: tumel
      class: n
      field: Core senses
      gloss: a taste; a flavour
      source: {kind: coined}
      concept: taste-noun
    - form: limer
      class: v
      field: Core senses
      gloss: to touch; to feel with the hand
      source: {kind: coined}
      concept: touch-verb
    - form: limel
      class: n
      field: Core senses
      gloss: a touch
      source: {kind: coined}
      concept: touch-noun
    - form: lashem
      class: v
      field: Core senses
      gloss: to look
      source: {kind: coined}
      concept: [look, expression-look]
    - form: lasun
      class: v
      field: Core senses
      gloss: to watch; to observe attentively
      source: {kind: coined}
      concept: watch
    - form: laram
      class: n
      field: Core senses
      gloss: appearance
      source: {kind: coined}
      concept: appearance
    - form: laski
      class: adj
      field: Core senses
      gloss: visible
      source: {kind: coined}
      concept: visible
    - form: nesh laski
      class: adj
      field: Core senses
      gloss: invisible
      source: {kind: coined}
      concept: invisible
    - form: hulim
      class: v
      field: Core senses
      gloss: to listen
      source: {kind: coined}
      concept: [listen, expression-listen]
    - form: hurnesh
      class: n
      field: Core senses
      gloss: noise
      source: {kind: coined}
      concept: noise
    - form: narlem
      class: n
      field: Core senses
      gloss: voice
      source: {kind: coined}
      concept: voice
    - form: hushen
      class: n
      field: Core senses
      gloss: silence
      source: {kind: coined}
      concept: silence
    - form: hurlem
      class: adj
      field: Core senses
      gloss: loud
      source: {kind: coined}
      concept: loud
    - form: hushli
      class: adj
      field: Core senses
      gloss: quiet
      source: {kind: coined}
      concept: quiet
    - form: sunseli
      class: adj
      field: Core senses
      gloss: fragrant
      source: {kind: coined}
      concept: fragrant
    - form: sunver
      class: adj
      field: Core senses
      gloss: foul-smelling; having an unpleasant smell
      source: {kind: coined}
      concept: foul
    - form: meshli
      class: adj
      field: Core senses
      gloss: sweet
      source: {kind: coined}
      concept: sweet
    - form: darshel
      class: adj
      field: Core senses
      gloss: sour
      source: {kind: coined}
      concept: sour
    - form: peshri
      class: adj
      field: Core senses
      gloss: bitter
      source: {kind: coined}
      concept: bitter
    - form: yisri
      class: adj
      field: Core senses
      gloss: salty
      source: {kind: coined}
      concept: salty
    - form: serhem
      class: v
      field: Core senses
      gloss: to feel a sensation
      source: {kind: coined}
      concept: feel-verb
    - form: serhel
      class: n
      field: Core senses
      gloss: sensation
      source: {kind: coined}
      concept: sensation
    - form: limli
      class: adj
      field: Core senses
      gloss: smooth
      source: {kind: coined}
      concept: smooth
    - form: kermesh
      class: adj
      field: Core senses
      gloss: rough
      source: {kind: coined}
      concept: rough
    - form: nimli
      class: adj
      field: Core senses
      gloss: soft
      source: {kind: coined}
      concept: soft
    - form: karli
      class: adj
      field: Core senses
      gloss: hard to the touch; firm rather than soft
      source: {kind: coined}
      concept: hard-texture
    - form: lasven
      class: v
      field: Core senses
      gloss: to notice
      source: {kind: coined}
      concept: notice
    - form: lamvir
      class: v
      field: Core senses
      gloss: perceive
      source: {kind: coined}
      concept: perceive
    - form: murlas
      class: v
      field: Core senses
      gloss: recognize
      source: {kind: coined}
      concept: recognize
    - form: lerem
      class: v
      field: Core senses
      gloss: seem
      source: {kind: coined}
      concept: seem
    - form: garmesh derum
      class: n
      field: Core passions
      gloss: wrath; intense anger
      source: {kind: coined}
      concept: wrath
    - form: varnem
      class: n
      field: Core passions
      gloss: envy
      source: {kind: coined}
      concept: envy
    - form: nimer
      class: n
      field: Core passions
      gloss: hope
      source: {kind: coined}
      concept: hope
    - form: ranesh
      class: n
      field: Core passions
      gloss: greed
      source: {kind: coined}
      concept: greed
    - form: ralshem
      class: n
      field: Core passions
      gloss: boasting
      source: {kind: coined}
      concept: boasting
    - form: benvar
      class: n
      field: Core passions
      gloss: pride
      source: {kind: coined}
      concept: pride
    - form: kirmesh
      class: n
      field: Core passions
      gloss: lust
      source: {kind: coined}
      concept: lust
    - form: nemresh
      class: n
      field: Core passions
      gloss: despair
      source: {kind: coined}
      concept: despair
    - form: nirvesh
      class: n
      field: Core passions
      gloss: disappointment
      source: {kind: coined}
      concept: disappointment
    - form: nervum
      class: n
      field: Core passions
      gloss: faith
      source: {kind: coined}
      concept: faith
    - form: hemli
      class: n
      field: Core passions
      gloss: joy
      source: {kind: coined}
      concept: joy
    - form: helmur
      class: n
      field: Core passions
      gloss: happiness
      source: {kind: coined}
      concept: happiness
    - form: veshel
      class: n
      field: Core passions
      gloss: pleasure
      source: {kind: coined}
      concept: pleasure
    - form: nashmer
      class: n
      field: Core passions
      gloss: contentment
      source: {kind: coined}
      concept: contentment
    - form: danir
      class: n
      field: Core passions
      gloss: gratitude
      source: {kind: coined}
      concept: gratitude
    - form: virmel
      class: n
      field: Core passions
      gloss: admiration
      source: {kind: coined}
      concept: admiration
    - form: namer
      class: n
      field: Core passions
      gloss: trust
      source: {kind: coined}
      concept: trust
    - form: birshel
      class: n
      field: Core passions
      gloss: courage
      source: {kind: coined}
      concept: courage
    - form: derum
      class: n
      field: Core passions
      gloss: anger
      source: {kind: coined}
      concept: anger
    - form: harsen
      class: n
      field: Core passions
      gloss: hatred
      source: {kind: coined}
      concept: hatred
    - form: nervam
      class: n
      field: Core passions
      gloss: jealousy
      source: {kind: coined}
      concept: jealousy
    - form: hervesh
      class: n
      field: Core passions
      gloss: fear
      source: {kind: coined}
      concept: fear
    - form: garmesh hervesh
      class: n
      field: Core passions
      gloss: terror
      source: {kind: coined}
      concept: terror
    - form: murhel
      class: n
      field: Core passions
      gloss: sadness
      source: {kind: coined}
      concept: sadness
    - form: nirhel
      class: n
      field: Core passions
      gloss: grief
      source: {kind: coined}
      concept: grief
    - form: surnem
      class: n
      field: Core passions
      gloss: shame
      source: {kind: coined}
      concept: shame
    - form: marnesh
      class: n
      field: Core passions
      gloss: guilt
      source: {kind: coined}
      concept: guilt
    - form: remhel
      class: n
      field: Core passions
      gloss: regret
      source: {kind: coined}
      concept: regret
    - form: nimvar
      class: n
      field: Core passions
      gloss: humility
      source: {kind: coined}
      concept: humility
    - form: nervir
      class: n
      field: Core passions
      gloss: confidence
      source: {kind: coined}
      concept: confidence
    - form: sernim
      class: n
      field: Core passions
      gloss: embarrassment
      source: {kind: coined}
      concept: embarrassment
    - form: mirshel
      class: n
      field: Core passions
      gloss: compassion
      source: {kind: coined}
      concept: compassion
    - form: murnel
      class: n
      field: Core passions
      gloss: pity
      source: {kind: coined}
      concept: pity
    - form: sernel
      class: n
      field: Core passions
      gloss: sympathy
      source: {kind: coined}
      concept: sympathy
    - form: dernem
      class: n
      field: Core passions
      gloss: resentment
      source: {kind: coined}
      concept: resentment
    - form: sarvem
      class: n
      field: Core passions
      gloss: contempt
      source: {kind: coined}
      concept: contempt
    - form: mirel
      class: n
      field: Core passions
      gloss: forgiveness
      source: {kind: coined}
      concept: forgiveness
    - form: nemvar
      class: n
      field: Core passions
      gloss: desire
      source: {kind: coined}
      concept: desire
    - form: farnem
      class: n
      field: Core passions
      gloss: longing
      source: {kind: coined}
      concept: longing
    - form: telmar
      class: n
      field: Core passions
      gloss: satisfaction (desire fulfilled)
      source: {kind: coined}
      concept: satisfaction
    - form: nemturem
      class: n
      field: Core passions
      gloss: frustration
      source: {kind: coined}
      concept: frustration
    - form: yermesh
      class: n
      field: Core passions
      gloss: curiosity
      source: {kind: coined}
      concept: curiosity
    - form: murdim
      class: n
      field: Core passions
      gloss: confusion
      source: {kind: coined}
      concept: confusion
    - form: nerhes
      class: n
      field: Core passions
      gloss: doubt
      source: {kind: coined}
      concept: doubt
    - form: hernen
      class: n
      field: Core passions
      gloss: certainty
      source: {kind: coined}
      concept: certainty
    - form: pirmesh
      class: n
      field: Core passions
      gloss: surprise
      source: {kind: coined}
      concept: surprise
    - form: nirtam
      class: n
      field: Core passions
      gloss: boredom
      source: {kind: coined}
      concept: boredom
    - form: vernam
      class: n
      field: Core passions
      gloss: anticipation
      source: {kind: coined}
      concept: anticipation
    - form: nermul
      class: n
      field: Core passions
      gloss: belief
      source: {kind: coined}
      concept: belief
    - form: vurshem
      class: n
      field: Core passions
      gloss: reverence
      source: {kind: coined}
      concept: reverence
    - form: vurnesh
      class: n
      field: Core passions
      gloss: awe
      source: {kind: coined}
      concept: awe
    - form: parimlumer
      class: n
      field: Core loves
      gloss: romantic love (eros)
      source: {kind: coined}
      concept: love-eros
    - form: merinlumer
      class: n
      field: Core loves
      gloss: friendship; affectionate regard between friends (philia)
      source: {kind: coined}
      concept: love-philia
    - form: kishneshlumer
      class: n
      field: Core loves
      gloss: the love of family (storge)
      source: {kind: coined}
      concept: love-storge
    - form: dimenlumer
      class: n
      field: Core loves
      gloss: selfless, universal love (agape)
      source: {kind: coined}
      concept: love-agape
    - form: lumer
      class: n
      field: Core loves
      gloss: affection
      source: {kind: coined}
      concept: affection
    - form: ludrim
      class: n
      field: Core loves
      gloss: attraction
      source: {kind: coined}
      concept: attraction
    - form: mirnam
      class: n
      field: Core loves
      gloss: intimacy
      source: {kind: coined}
      concept: intimacy
    - form: lumhagesh
      class: n
      field: Core loves
      gloss: devotion
      source: {kind: coined}
      concept: devotion
    - form: bernem
      class: n
      field: Core loves
      gloss: loyalty
      source: {kind: coined}
      concept: loyalty
    - form: mirvem
      class: n
      field: Core loves
      gloss: companionship; being together with a companion
      source: {kind: coined}
      concept: companionship
    - form: harnem
      class: n
      field: Core loves
      gloss: enmity
      source: {kind: coined}
      concept: enmity
    - form: helmut
      class: n
      field: Core body
      gloss: the head
      source: {kind: coined}
      concept: head
    - form: sirmen
      class: n
      field: Core body
      gloss: the hair
      source: {kind: coined}
      concept: hair
    - form: lasrim
      class: n
      field: Core body
      gloss: the face
      source: {kind: coined}
      concept: face
    - form: lasin
      class: n
      field: Core body
      gloss: the eye
      source: {kind: coined}
      concept: eye
    - form: huner
      class: n
      field: Core body
      gloss: the ear
      source: {kind: coined}
      concept: ear
    - form: sunir
      class: n
      field: Core body
      gloss: the nose
      source: {kind: coined}
      concept: nose
    - form: narhum
      class: n
      field: Core body
      gloss: the mouth
      source: {kind: coined}
      concept: mouth
    - form: narhul
      class: n
      field: Core body
      gloss: the lip
      source: {kind: coined}
      concept: lip
    - form: kitsem
      class: n
      field: Core body
      gloss: the tooth
      source: {kind: coined}
      concept: tooth
    - form: narshil
      class: n
      field: Core body
      gloss: the tongue
      source: {kind: coined}
      concept: tongue
    - form: tirmesh
      class: n
      field: Core body
      gloss: the neck
      source: {kind: coined}
      concept: neck
    - form: varhum
      class: n
      field: Core body
      gloss: the shoulder
      source: {kind: coined}
      concept: shoulder
    - form: limun
      class: n
      field: Core body
      gloss: the arm
      source: {kind: coined}
      concept: arm
    - form: limten
      class: n
      field: Core body
      gloss: the elbow
      source: {kind: coined}
      concept: elbow
    - form: limur
      class: n
      field: Core body
      gloss: the hand
      source: {kind: coined}
      concept: hand
    - form: limet
      class: n
      field: Core body
      gloss: the finger
      source: {kind: coined}
      concept: finger
    - form: limkesh
      class: n
      field: Core body
      gloss: the fingernail
      source: {kind: coined}
      concept: nail
    - form: harsem
      class: n
      field: Core body
      gloss: the chest
      source: {kind: coined}
      concept: chest
    - form: samli
      class: n
      field: Core body
      gloss: the breast
      source: {kind: coined}
      concept: breast
    - form: herdan
      class: n
      field: Core body
      gloss: the heart
      source: {kind: coined}
      concept: heart
    - form: bernum
      class: n
      field: Core body
      gloss: the belly
      source: {kind: coined}
      concept: belly
    - form: remvar
      class: n
      field: Core body
      gloss: the back
      source: {kind: coined}
      concept: back
    - form: harmen
      class: n
      field: Core body
      gloss: the hip
      source: {kind: coined}
      concept: hip
    - form: tarven
      class: n
      field: Core body
      gloss: the leg
      source: {kind: coined}
      concept: leg
    - form: tarten
      class: n
      field: Core body
      gloss: the knee
      source: {kind: coined}
      concept: knee
    - form: tarmesh
      class: n
      field: Core body
      gloss: the foot
      source: {kind: coined}
      concept: foot
    - form: taret
      class: n
      field: Core body
      gloss: the toe
      source: {kind: coined}
      concept: toe
    - form: hilmen
      class: n
      field: Core body
      gloss: the skin
      source: {kind: coined}
      concept: skin
    - form: mirven
      class: n
      field: Core body
      gloss: flesh
      source: {kind: coined}
      concept: flesh
    - form: kerhan
      class: n
      field: Core body
      gloss: forehead
      source: {kind: coined}
      concept: forehead
    - {form: kirmel, class: n, field: Core body, gloss: jaw, source: {kind: coined}, concept: jaw}
    - form: kirmun
      class: n
      field: Core body
      gloss: chin
      source: {kind: coined}
      concept: chin
    - form: larsen
      class: n
      field: Core body
      gloss: cheek
      source: {kind: coined}
      concept: cheek
    - form: narsen
      class: n
      field: Core body
      gloss: throat
      source: {kind: coined}
      concept: throat
    - form: benhum
      class: n
      field: Core body
      gloss: stomach
      source: {kind: coined}
      concept: stomach
    - form: nirmet
      class: n
      field: Core body
      gloss: waist
      source: {kind: coined}
      concept: waist
    - form: remvarvesut
      class: n
      field: Core body
      gloss: the backbone or spine
      source: {kind: coined}
      built: [remvar, vesut]
      concept: spine
    - form: remlum
      class: n
      field: Core body
      gloss: buttock
      source: {kind: coined}
      concept: buttock
    - form: lirtem
      class: n
      field: Core body
      gloss: wrist
      source: {kind: coined}
      concept: wrist
    - form: kerlim
      class: n
      field: Core body
      gloss: the palm of the hand, not the palm tree talvut
      source: {kind: coined}
      concept: palm
    - form: kerlet
      class: n
      field: Core body
      gloss: thumb
      source: {kind: coined}
      concept: thumb
    - form: tarhum
      class: n
      field: Core body
      gloss: thigh
      source: {kind: coined}
      concept: thigh
    - form: tarsen
      class: n
      field: Core body
      gloss: ankle
      source: {kind: coined}
      concept: ankle
    - form: tarhel
      class: n
      field: Core body
      gloss: heel
      source: {kind: coined}
      concept: heel
    - form: tarlum
      class: n
      field: Core body
      gloss: sole
      source: {kind: coined}
      concept: sole
    - form: tarkesh
      class: n
      field: Core body
      gloss: toenail
      source: {kind: coined}
      concept: toenail
    - form: hirmul
      class: n
      field: Core body
      gloss: muscle
      source: {kind: coined}
      concept: muscle
    - {form: bemlur, class: n, field: Core body, gloss: fat, source: {kind: coined}, concept: fat}
    - form: nelsam
      class: n
      field: Core body
      gloss: sweat (noun)
      source: {kind: coined}
      concept: sweat
    - form: lasinnelim
      class: n
      field: Core body
      gloss: tears, the liquid shed by the eyes
      source: {kind: coined}
      built: [lasin, nelim]
      concept: tears
    - form: narhumnelim
      class: n
      field: Core body
      gloss: saliva, the liquid in the mouth
      source: {kind: coined}
      built: [narhum, nelim]
      concept: saliva
    - form: helmim
      class: n
      field: Core body
      gloss: brain
      source: {kind: coined}
      concept: brain
    - {form: hulem, class: n, field: Core body, gloss: lung, source: {kind: coined}, concept: lung}
    - form: berhil
      class: n
      field: Core body
      gloss: liver
      source: {kind: coined}
      concept: liver
    - form: nelkum
      class: n
      field: Core body
      gloss: kidney
      source: {kind: coined}
      concept: kidney
    - form: berlim
      class: n
      field: Core body
      gloss: intestine
      source: {kind: coined}
      concept: intestine
    - form: kirnum
      class: n
      field: Core body
      gloss: genitals
      source: {kind: coined}
      concept: genitals
    - form: timlumar
      class: n
      field: Core body
      gloss: womb
      source: {kind: coined}
      concept: womb
    - form: karmin
      class: n
      field: Core body
      gloss: penis
      source: {kind: coined}
      concept: penis
    - form: nurmel
      class: n
      field: Core body
      gloss: vagina
      source: {kind: coined}
      concept: vagina
    - form: bernuk
      class: n
      field: Core body
      gloss: testicle
      source: {kind: coined}
      concept: testicle
    - form: melun
      class: n
      field: Core needs
      gloss: food
      source: {kind: coined}
      concept: food
    - form: melir
      class: v
      field: Core needs
      gloss: to eat
      source: {kind: coined}
      concept: eat
    - form: nilshem
      class: n
      field: Core needs
      gloss: a drink
      source: {kind: coined}
      concept: drink-noun
    - form: nilsher
      class: v
      field: Core needs
      gloss: to drink
      source: {kind: coined}
      concept: drink-verb
    - {form: hurbem, class: n, field: Core needs, gloss: air, source: {kind: coined}, concept: air}
    - form: hurnel
      class: n
      field: Core needs
      gloss: breath
      source: {kind: coined}
      concept: breath
    - form: hurnem
      class: v
      field: Core needs
      gloss: to breathe
      source: {kind: coined}
      concept: breathe
    - form: dunel
      class: n
      field: Core needs
      gloss: sleep
      source: {kind: coined}
      concept: sleep-noun
    - form: dunem
      class: v
      field: Core needs
      gloss: to sleep
      source: {kind: coined}
      concept: sleep-verb
    - form: nulshem
      class: n
      field: Core needs
      gloss: urine
      source: {kind: coined}
      concept: urine
    - form: nulsher
      class: v
      field: Core needs
      gloss: to urinate
      source: {kind: coined}
      concept: urinate
    - form: mursem
      class: n
      field: Core needs
      gloss: dung
      source: {kind: coined}
      concept: dung
    - form: mursher
      class: v
      field: Core needs
      gloss: to defecate
      source: {kind: coined}
      concept: defecate
    - form: terhil
      class: n
      field: Core needs
      gloss: warmth
      source: {kind: coined}
      concept: warmth
    - form: hernim
      class: n
      field: Core needs
      gloss: shelter
      source: {kind: coined}
      concept: shelter
    - form: melnem
      class: n
      field: Core needs
      gloss: hunger
      source: {kind: coined}
      concept: hunger
    - form: melni
      class: adj
      field: Core needs
      gloss: hungry
      source: {kind: coined}
      concept: hungry
    - form: nilnem
      class: n
      field: Core needs
      gloss: thirst
      source: {kind: coined}
      concept: thirst
    - form: nilni
      class: adj
      field: Core needs
      gloss: thirsty
      source: {kind: coined}
      concept: thirsty
    - form: hurnem bennil
      class: v
      field: Core needs
      gloss: breathe inward; inhale
      source: {kind: coined}
      built: [hurnem, bennil]
      concept: inhale
    - form: hurnem vannil
      class: v
      field: Core needs
      gloss: breathe outward; exhale
      source: {kind: coined}
      built: [hurnem, vannil]
      concept: exhale
    - form: hurlim
      class: v
      field: Core needs
      gloss: suffocate
      source: {kind: coined}
      concept: suffocate
    - form: dunvar
      class: v
      field: Core needs
      gloss: wake
      source: {kind: coined}
      concept: wake
    - form: dunvi
      class: adj
      field: Core needs
      gloss: awake
      source: {kind: coined}
      concept: awake
    - form: duneshel
      class: n
      field: Core needs
      gloss: a dream
      source: {kind: coined}
      concept: dream
    - form: hinnem
      class: n
      field: Core needs
      gloss: rest (noun)
      source: {kind: coined}
      concept: rest
    - form: hinnesh
      class: adj
      field: Core needs
      gloss: tired
      source: {kind: coined}
      concept: tired
    - form: nelsher
      class: v
      field: Core needs
      gloss: to sweat
      source: {kind: coined}
      concept: sweat-verb
    - form: karhi
      class: adj
      field: Core needs
      gloss: hot
      source: {kind: coined}
      concept: hot
    - form: terhi
      class: adj
      field: Core needs
      gloss: warm
      source: {kind: coined}
      concept: warm
    - form: silni
      class: adj
      field: Core needs
      gloss: cool
      source: {kind: coined}
      concept: cool
    - form: silber
      class: v
      field: Core needs
      gloss: freeze
      source: {kind: coined}
      concept: freeze
    - form: perven
      class: v
      field: Core needs
      gloss: burn
      source: {kind: coined}
      concept: burn
    - form: venmur
      class: n
      field: Core needs
      gloss: safety
      source: {kind: coined}
      concept: safety
    - form: harsum
      class: n
      field: Core needs
      gloss: danger
      source: {kind: coined}
      concept: danger
    - form: vermil
      class: n
      field: Core needs
      gloss: protection
      source: {kind: coined}
      concept: protection
    - {form: kirmen, class: n, field: Core needs, gloss: sex, source: {kind: coined}, concept: sex}
    - form: timven
      class: v
      field: Core needs
      gloss: conceive
      source: {kind: coined}
      concept: conceive
    - form: timnen
      class: n
      field: Core needs
      gloss: pregnancy
      source: {kind: coined}
      concept: pregnancy
    - form: timni
      class: adj
      field: Core needs
      gloss: pregnant
      source: {kind: coined}
      concept: pregnant
    - form: timsen
      class: n
      field: Core needs
      gloss: birth
      source: {kind: coined}
      concept: birth
    - form: timber
      class: v
      field: Core needs
      gloss: give birth
      source: {kind: coined}
      concept: give-birth
    - form: samler
      class: v
      field: Core needs
      gloss: to nurse a child; to feed a child at the breast
      source: {kind: coined}
      concept: nurse
    - form: vulmer
      class: v
      field: Core needs
      gloss: grow
      source: {kind: coined}
      concept: grow
    - form: tenmer
      class: v
      field: Core needs
      gloss: to age; to grow older
      source: {kind: coined}
      concept: age-verb
    - form: nilsem
      class: n
      field: Core needs
      gloss: death
      source: {kind: coined}
      concept: death
    - form: nilvi
      class: adj
      field: Core needs
      gloss: no longer alive; dead, distinct from the collective nilvur
      source: {kind: coined}
      concept: dead
    - form: hevil
      class: adj
      field: Core health
      gloss: healthy; hale
      source: {kind: coined}
      concept: healthy
    - form: varhesh
      class: adj
      field: Core health
      gloss: sick; ill
      source: {kind: coined}
      concept: sick
    - form: harsil
      class: adj
      field: Core health
      gloss: injured; wounded
      source: {kind: coined}
      concept: injured
    - form: birmesh
      class: adj
      field: Core health
      gloss: Strong
      source: {kind: coined}
      concept: strong
    - form: birni
      class: adj
      field: Core health
      gloss: weak
      source: {kind: coined}
      concept: weak
    - form: birsun
      class: adj
      field: Core health
      gloss: exhausted
      source: {kind: coined}
      concept: exhausted
    - form: melhum
      class: adj
      field: Core health
      gloss: full after eating or drinking, not general completeness
      source: {kind: coined}
      concept: sated
    - form: silmi
      class: adj
      field: Core health
      gloss: cold in temperature
      source: {kind: coined}
      concept: cold
    - form: karhel
      class: adj
      field: Core health
      gloss: feverish
      source: {kind: coined}
      concept: feverish
    - form: harsim
      class: n
      field: Core health
      gloss: Pain
      source: {kind: coined}
      concept: pain
    - form: harsir
      class: v
      field: Core health
      gloss: cause pain or injury to the named person
      source: {kind: coined}
      concept: hurt-verb
    - form: harsun
      class: n
      field: Core health
      gloss: ache
      source: {kind: coined}
      concept: ache
    - form: harshel
      class: v
      field: Core health
      gloss: suffer
      source: {kind: coined}
      concept: suffer
    - form: henhir
      class: v
      field: Core health
      gloss: Bleed
      source: {kind: coined}
      concept: bleed
    - form: hevir
      class: v
      field: Core health
      gloss: heal
      source: {kind: coined}
      concept: heal
    - form: henver
      class: v
      field: Core health
      gloss: recover
      source: {kind: coined}
      concept: recover
    - form: lasnil
      class: adj
      field: Core health
      gloss: unable to see because of bodily loss of sight
      source: {kind: coined}
      concept: blind
    - form: hunnil
      class: adj
      field: Core health
      gloss: unable to hear because of bodily loss of hearing
      source: {kind: coined}
      concept: deaf
    - form: tarnir
      class: adj
      field: Core health
      gloss: impaired in the use of a leg or legs
      source: {kind: coined}
      concept: lame
    - form: hevuni
      class: adj
      field: Core health
      gloss: Alive
      source: {kind: coined}
      concept: alive
    - form: hirmi
      class: adj
      field: Core health
      gloss: conscious
      source: {kind: coined}
      concept: conscious
    - form: nesh hirmi
      class: adj
      field: Core health
      gloss: not conscious; lacking awareness
      source: {kind: coined}
      built: [nesh, hirmi]
      concept: unconscious
    - form: yurmi
      class: adj
      field: Core health
      gloss: Young
      source: {kind: coined}
      concept: young
    - form: tenlir
      class: adj
      field: Core health
      gloss: old in age, of a living being; distinct from teyut, old or ancient
      source: {kind: coined}
      concept: old
    - form: tenmel
      class: n
      field: Core health
      gloss: aging; the process of growing older
      source: {kind: coined}
      concept: aging
    - form: hurem harsim
      class: v
      field: Core health
      gloss: experience bodily pain, literally have pain
      source: {kind: coined}
      built: [hurem, harsim]
      concept: hurt-pain
    - form: namil
      class: n
      field: Core kinship
      gloss: parent
      source: {kind: coined}
      concept: parent
    - form: berim
      class: n
      field: Core kinship
      gloss: brother
      source: {kind: coined}
      concept: brother
    - form: mirsel
      class: n
      field: Core kinship
      gloss: sister
      source: {kind: coined}
      concept: sister
    - form: nerir nemi namil
      class: n
      field: Core kinship
      gloss: a parent's mother, on either side
      source: {kind: coined}
      built: [nerir, nemi, namil]
      concept: grandmother
    - form: bamden nemi namil
      class: n
      field: Core kinship
      gloss: a parent's father, on either side
      source: {kind: coined}
      built: [bamden, nemi, namil]
      concept: grandfather
    - form: timlan nemi timlan
      class: n
      field: Core kinship
      gloss: a child's child
      source: {kind: coined}
      built: [timlan, nemi, timlan]
      concept: grandchild
    - form: berim nemi namil
      class: n
      field: Core kinship
      gloss: a parent's brother, on either side
      source: {kind: coined}
      built: [berim, nemi, namil]
      concept: uncle
    - form: mirsel nemi namil
      class: n
      field: Core kinship
      gloss: a parent's sister, on either side
      source: {kind: coined}
      built: [mirsel, nemi, namil]
      concept: aunt
    - form: timlan nemi herim nemi namil
      class: n
      field: Core kinship
      gloss: the child of a parent's sibling, on either side
      source: {kind: coined}
      built: [timlan, nemi, herim, nemi, namil]
      concept: cousin
    - form: harum
      class: n
      field: Core kinship
      gloss: husband
      source: {kind: coined}
      concept: husband
    - form: merish
      class: n
      field: Core kinship
      gloss: wife
      source: {kind: coined}
      concept: wife
    - form: benden
      class: n
      field: Core kinship
      gloss: ancestor
      source: {kind: coined}
      concept: ancestor
    - form: timmer
      class: n
      field: Core kinship
      gloss: descendant
      source: {kind: coined}
      concept: descendant
    - form: nenlam
      class: n
      field: Core kinship
      gloss: orphan
      source: {kind: coined}
      concept: orphan
    - form: mersun
      class: n
      field: Core kinship
      gloss: widow
      source: {kind: coined}
      concept: widow
    - form: namil nemi namil
      class: n
      field: Core kinship
      gloss: a parent's parent
      source: {kind: coined}
      built: [namil, nemi, namil]
      concept: grandparent
    - form: varli timlan nemi herim
      class: n
      field: Core kinship
      gloss: a sibling's male child, including an adult offspring
      source: {kind: coined}
      built: [varli, timlan, nemi, herim]
      concept: nephew
    - form: nirli timlan nemi herim
      class: n
      field: Core kinship
      gloss: a sibling's female child, including an adult offspring
      source: {kind: coined}
      built: [nirli, timlan, nemi, herim]
      concept: niece
    - form: navur
      class: n
      field: Core kinship
      gloss: spouse
      source: {kind: coined}
      concept: spouse
    - form: narvem
      class: n
      field: Core kinship
      gloss: marriage
      source: {kind: coined}
      concept: marriage
    - form: berem narvem
      class: v
      field: Core kinship
      gloss: enter marriage, literally make a marriage
      source: {kind: coined}
      built: [berem, narvem]
      concept: marry
    - form: narvim
      class: n
      field: Core kinship
      gloss: lineage
      source: {kind: coined}
      concept: lineage
    - form: harnum
      class: n
      field: Core kinship
      gloss: widower
      source: {kind: coined}
      concept: widower
    - form: harsin
      class: n
      field: Core kinship
      gloss: enemy
      source: {kind: coined}
      concept: enemy
    - form: neyem
      class: n
      field: Core kinship
      gloss: stranger
      source: {kind: coined}
      concept: stranger
    - form: nineshel
      class: n
      field: Core kinship
      gloss: neighbor
      source: {kind: coined}
      concept: neighbor
    - form: mirmel
      class: n
      field: Core kinship
      gloss: companion
      source: {kind: coined}
      concept: companion
    - form: neyelun
      class: n
      field: Core kinship
      gloss: host
      source: {kind: coined}
      concept: host
    - form: fernem
      class: n
      field: Core kinship
      gloss: leader
      source: {kind: coined}
      concept: leader
    - form: felnem
      class: n
      field: Core kinship
      gloss: follower
      source: {kind: coined}
      concept: follower
    - form: tarnem
      class: n
      field: Core kinship
      gloss: servant
      source: {kind: coined}
      concept: servant
    - form: darvem
      class: n
      field: Core kinship
      gloss: master
      source: {kind: coined}
      concept: master
    - form: lernem
      class: n
      field: Core kinship
      gloss: teacher
      source: {kind: coined}
      concept: teacher
    - form: yirnem
      class: n
      field: Core kinship
      gloss: student
      source: {kind: coined}
      concept: student
    - form: suren
      class: n
      field: Core things
      gloss: a chair
      source: {kind: coined}
      concept: chair
    - form: ternel
      class: n
      field: Core things
      gloss: a table
      source: {kind: coined}
      concept: table
    - form: dunhet
      class: n
      field: Core things
      gloss: a bed
      source: {kind: coined}
      concept: bed
    - form: hernal
      class: n
      field: Core things
      gloss: a floor
      source: {kind: coined}
      concept: floor
    - form: hurlam
      class: n
      field: Core things
      gloss: a roof
      source: {kind: coined}
      concept: roof
    - form: nineshher
      class: n
      field: Core things
      gloss: a physical house or home, distinct from ninesh as a household
      source: {kind: coined}
      built: [ninesh, her]
      concept: abode
    - form: lasher
      class: n
      field: Core things
      gloss: a window
      source: {kind: coined}
      concept: window
    - form: vartem
      class: n
      field: Core things
      gloss: a door
      source: {kind: coined}
      concept: door
    - form: karnesh
      class: n
      field: Core things
      gloss: a lock
      source: {kind: coined}
      concept: lock
    - form: kirnem
      class: n
      field: Core things
      gloss: a key
      source: {kind: coined}
      concept: key
    - form: lashergudesh
      class: n
      field: Core things
      gloss: movable covers closing a window
      source: {kind: coined}
      built: [lasher, gudesh]
      concept: shutters
    - form: nelbar
      class: n
      field: Core things
      gloss: a cup
      source: {kind: coined}
      concept: cup
    - form: melbar
      class: n
      field: Core things
      gloss: a bowl
      source: {kind: coined}
      concept: bowl
    - form: pedil
      class: n
      field: Core things
      gloss: a knife
      source: {kind: coined}
      concept: knife
    - form: melsum
      class: n
      field: Core things
      gloss: a spoon
      source: {kind: coined}
      concept: spoon
    - form: bunem
      class: n
      field: Core things
      gloss: a pot
      source: {kind: coined}
      concept: pot
    - form: pernil
      class: n
      field: Core things
      gloss: a lamp
      source: {kind: coined}
      concept: lamp
    - form: pirem
      class: n
      field: Core things
      gloss: cloth
      source: {kind: coined}
      concept: cloth
    - form: pirnem
      class: n
      field: Core things
      gloss: clothes
      source: {kind: coined}
      concept: clothes
    - form: herun
      class: n
      field: Core things
      gloss: room
      source: {kind: coined}
      concept: room
    - form: hurnim
      class: n
      field: Core things
      gloss: ceiling
      source: {kind: coined}
      concept: ceiling
    - form: surun
      class: n
      field: Core things
      gloss: seat
      source: {kind: coined}
      concept: seat
    - form: tarli surun
      class: n
      field: Core things
      gloss: a bench, literally a long seat
      source: {kind: coined}
      built: [tarli, surun]
      concept: bench
    - {form: bumel, class: n, field: Core things, gloss: jar, source: {kind: coined}, concept: jar}
    - form: bumir
      class: n
      field: Core things
      gloss: bottle
      source: {kind: coined}
      concept: bottle
    - form: vimel
      class: n
      field: Core things
      gloss: basket
      source: {kind: coined}
      concept: basket
    - form: pirsun
      class: n
      field: Core things
      gloss: bag
      source: {kind: coined}
      concept: bag
    - form: karmut
      class: n
      field: Core things
      gloss: hammer
      source: {kind: coined}
      concept: hammer
    - form: sirbul
      class: n
      field: Core things
      gloss: rope
      source: {kind: coined}
      concept: rope
    - form: sirbil
      class: n
      field: Core things
      gloss: cord
      source: {kind: coined}
      concept: cord
    - form: pirtel
      class: n
      field: Core things
      gloss: needle
      source: {kind: coined}
      concept: needle
    - form: perhil
      class: n
      field: Core things
      gloss: flame
      source: {kind: coined}
      concept: flame
    - form: pernim
      class: n
      field: Core things
      gloss: smoke
      source: {kind: coined}
      concept: smoke
    - form: persem
      class: n
      field: Core things
      gloss: ash
      source: {kind: coined}
      concept: ash
    - form: permel
      class: n
      field: Core things
      gloss: coal
      source: {kind: coined}
      concept: coal
    - form: perun
      class: n
      field: Core things
      gloss: torch
      source: {kind: coined}
      concept: torch
    - form: pirmil
      class: n
      field: Core things
      gloss: candle
      source: {kind: coined}
      concept: candle
    - form: piren
      class: n
      field: Core things
      gloss: garment
      source: {kind: coined}
      concept: garment
    - form: pirun
      class: n
      field: Core things
      gloss: shirt
      source: {kind: coined}
      concept: shirt
    - form: pirhel
      class: n
      field: Core things
      gloss: cloak
      source: {kind: coined}
      concept: cloak
    - form: pirtam
      class: n
      field: Core things
      gloss: belt
      source: {kind: coined}
      concept: belt
    - form: tarpir
      class: n
      field: Core things
      gloss: shoe
      source: {kind: coined}
      concept: shoe
    - form: tettarpir
      class: n
      field: Core things
      gloss: a boot, the high shoe covering the lower leg
      source: {kind: coined}
      built: [te, tarpir]
      concept: boot
    - form: gudeshel
      class: n
      field: Core things
      gloss: barrier
      source: {kind: coined}
      concept: barrier
    - form: varhen
      class: n
      field: Core things
      gloss: wood
      source: {kind: coined}
      concept: wood
    - form: tamlur
      class: n
      field: Core things
      gloss: metal
      source: {kind: coined}
      concept: metal
    - form: hilmer
      class: n
      field: Core things
      gloss: leather
      source: {kind: coined}
      concept: leather
    - form: nebel
      class: n
      field: Core things
      gloss: wool
      source: {kind: coined}
      concept: wool
    - form: sirvem
      class: n
      field: Core things
      gloss: thread
      source: {kind: coined}
      concept: thread
    - form: bermun
      class: n
      field: Core nature
      gloss: earth
      source: {kind: coined}
      concept: earth
    - form: bermel
      class: n
      field: Core nature
      gloss: soil
      source: {kind: coined}
      concept: soil
    - form: karvut
      class: n
      field: Core nature
      gloss: rock
      source: {kind: coined}
      concept: rock
    - form: nelimbudem
      class: n
      field: Core nature
      gloss: wet soft earth or clay; mud
      source: {kind: coined}
      built: [nelim, budem]
      concept: mud
    - form: bermil
      class: n
      field: Core nature
      gloss: dust
      source: {kind: coined}
      concept: dust
    - form: velnur
      class: n
      field: Core nature
      gloss: land
      source: {kind: coined}
      concept: land
    - form: dalnim
      class: n
      field: Core nature
      gloss: hill
      source: {kind: coined}
      concept: hill
    - form: damlir
      class: n
      field: Core nature
      gloss: valley
      source: {kind: coined}
      concept: valley
    - form: velnim
      class: n
      field: Core nature
      gloss: a plain; flat open land
      source: {kind: coined}
      concept: plain-landform
    - form: varhun
      class: n
      field: Core nature
      gloss: forest
      source: {kind: coined}
      concept: forest
    - form: karhun
      class: n
      field: Core nature
      gloss: cave
      source: {kind: coined}
      concept: cave
    - form: nelsun
      class: n
      field: Core nature
      gloss: sea
      source: {kind: coined}
      concept: sea
    - form: nelsum
      class: n
      field: Core nature
      gloss: ocean
      source: {kind: coined}
      concept: ocean
    - form: nelran
      class: n
      field: Core nature
      gloss: shore
      source: {kind: coined}
      concept: shore
    - form: hushem
      class: n
      field: Core nature
      gloss: rain
      source: {kind: coined}
      concept: rain
    - form: silnel
      class: n
      field: Core nature
      gloss: ice
      source: {kind: coined}
      concept: ice
    - form: helmen
      class: n
      field: Core nature
      gloss: cloud
      source: {kind: coined}
      concept: cloud
    - form: vursem
      class: n
      field: Core nature
      gloss: storm
      source: {kind: coined}
      concept: storm
    - form: gurlem
      class: n
      field: Core nature
      gloss: thunder
      source: {kind: coined}
      concept: thunder
    - form: helvir
      class: n
      field: Core nature
      gloss: lightning
      source: {kind: coined}
      concept: lightning
    - form: yalem
      class: n
      field: Core nature
      gloss: plant
      source: {kind: coined}
      concept: plant
    - form: varsel
      class: n
      field: Core nature
      gloss: tree
      source: {kind: coined}
      concept: tree
    - form: yalsem
      class: n
      field: Core nature
      gloss: leaf
      source: {kind: coined}
      concept: leaf
    - form: yalnur
      class: n
      field: Core nature
      gloss: root
      source: {kind: coined}
      concept: root
    - form: varnil
      class: n
      field: Core nature
      gloss: branch
      source: {kind: coined}
      concept: branch
    - form: yalmel
      class: n
      field: Core nature
      gloss: flower
      source: {kind: coined}
      concept: flower
    - form: birel
      class: n
      field: Core nature
      gloss: fruit
      source: {kind: coined}
      concept: fruit
    - form: birnel
      class: n
      field: Core nature
      gloss: seed
      source: {kind: coined}
      concept: seed
    - form: gurmen
      class: n
      field: Core nature
      gloss: animal
      source: {kind: coined}
      concept: animal
    - form: gurnal
      class: n
      field: Core nature
      gloss: beast
      source: {kind: coined}
      concept: beast
    - form: firvem
      class: n
      field: Core nature
      gloss: bird
      source: {kind: coined}
      concept: bird
    - form: nelhir
      class: n
      field: Core nature
      gloss: fish
      source: {kind: coined}
      concept: fish
    - form: yirsem
      class: n
      field: Core nature
      gloss: insect
      source: {kind: coined}
      concept: insect
    - form: gurnil
      class: n
      field: Core nature
      gloss: worm
      source: {kind: coined}
      concept: worm
    - form: nelni
      class: adj
      field: Core nature
      gloss: wet
      source: {kind: coined}
      concept: wet
    - form: helmi
      class: adj
      field: Core nature
      gloss: bright
      source: {kind: coined}
      concept: bright
    - form: nurmi
      class: adj
      field: Core nature
      gloss: dark
      source: {kind: coined}
      concept: dark
    - form: helnir
      class: adj
      field: Core nature
      gloss: clear of clouds, of sky or weather
      source: {kind: coined}
      concept: clear-weather
    - form: helmun
      class: adj
      field: Core nature
      gloss: cloudy
      source: {kind: coined}
      concept: cloudy
    - form: ninnidem
      class: num
      field: Core numbers
      gloss: twenty
      source: {kind: coined}
      built: [nin, nidem]
      concept: twenty
    - form: nire nin
      class: part
      field: Core numbers
      gloss: in numbered position two; second
      source: {kind: coined}
      built: [nire, nin]
      concept: second
    - form: nire tes
      class: part
      field: Core numbers
      gloss: in numbered position three; third
      source: {kind: coined}
      built: [nire, tes]
      concept: third
    - form: ninser
      class: n
      field: Core numbers
      gloss: one of two equal shares; a half
      source: {kind: coined}
      built: [nin, ser]
      concept: half
    - form: palem
      class: adj
      field: Core numbers
      gloss: many with counted things; much with measured substances
      source: {kind: coined}
      concept: [many, much]
    - form: nevim
      class: adj
      field: Core numbers
      gloss: few
      source: {kind: coined}
      concept: few
    - form: nul
      class: pron
      field: Core numbers
      gloss: none or nothing in the stated set, distinct from the numeral zero
      source: {kind: coined}
      concept: none
    - form: nire nivun
      class: part
      field: Core numbers
      gloss: in numbered position seven; further positions replace nivun with the stated cardinal
      source: {kind: coined}
      built: [nire, nivun]
      concept: ordinal-construction
    - form: harser
      class: n
      field: Core numbers
      gloss: one of four equal shares; a quarter
      source: {kind: coined}
      built: [har, ser]
      concept: quarter
    - form: sumet
      class: adj
      field: Core numbers
      gloss: whole
      source: {kind: coined}
      concept: whole
    - form: dimal
      class: adj
      field: Core numbers
      gloss: every member of the stated set; all without exception
      source: {kind: coined}
      concept: [all, every]
    - form: nemil
      class: adj
      field: Core numbers
      gloss: some
      source: {kind: coined}
      concept: some
    - form: nevel
      class: adj
      field: Core numbers
      gloss: a little in quantity, not small in spatial size
      source: {kind: coined}
      concept: little-quantity
    - form: marnil
      class: adj
      field: Core numbers
      gloss: enough
      source: {kind: coined}
      concept: enough
    - form: palen
      class: adj
      field: Core numbers
      gloss: more
      source: {kind: coined}
      concept: more
    - form: neven
      class: adj
      field: Core numbers
      gloss: less
      source: {kind: coined}
      concept: less
    - form: palen nali dimal nedim
      class: adj
      field: Core numbers
      gloss: more in number or amount than all the other compared members
      source: {kind: coined}
      built: [palen, nali, dimal, nedim]
      concept: most
    - form: neven nali dimal nedim
      class: adj
      field: Core numbers
      gloss: less in number or amount than all the other compared members
      source: {kind: coined}
      built: [neven, nali, dimal, nedim]
      concept: least
    - form: samrel
      class: adj
      field: Core numbers
      gloss: equal
      source: {kind: coined}
      concept: equal
    - form: dimel
      class: adj
      field: Core numbers
      gloss: each
      source: {kind: coined}
      concept: each
    - form: dimal nin
      class: pron
      field: Core numbers
      gloss: both members of the stated pair, literally all two
      source: {kind: coined}
      built: [dimal, nin]
      concept: both
    - form: pel vanel nin
      class: pron
      field: Core numbers
      gloss: either member of a pair, literally one from two
      source: {kind: coined}
      built: [pel, vanel, nin]
      concept: either
    - form: nul vanel nin
      class: pron
      field: Core numbers
      gloss: neither member of a pair, literally none from two
      source: {kind: coined}
      built: [nul, vanel, nin]
      concept: neither
    - form: narli
      class: adv
      field: Core numbers
      gloss: approximately the named number or amount
      source: {kind: coined}
      concept: about
    - form: narnir
      class: adv
      field: Core numbers
      gloss: near but below a numerical or scalar threshold, not soon in time
      source: {kind: coined}
      concept: almost
    - form: tsemir
      class: adv
      field: Core numbers
      gloss: exactly
      source: {kind: coined}
      concept: exactly
    - form: tavem
      class: n
      field: Core numbers
      gloss: the number of counted individuals
      source: {kind: coined}
      concept: number
    - form: tavel
      class: n
      field: Core numbers
      gloss: the amount of a measured substance
      source: {kind: coined}
      concept: amount
    - form: tavur
      class: v
      field: Core numbers
      gloss: measure
      source: {kind: coined}
      concept: measure-verb
    - form: tavim
      class: v
      field: Core numbers
      gloss: count
      source: {kind: coined}
      concept: count-verb
    - form: yarmil
      class: adj
      field: Core colours
      gloss: yellow
      source: {kind: coined}
      concept: yellow
    - form: nelvur
      class: adj
      field: Core colours
      gloss: blue
      source: {kind: coined}
      concept: blue
    - form: silvar
      class: adj
      field: Core colours
      gloss: grey
      source: {kind: coined}
      concept: grey
    - form: bermal
      class: adj
      field: Core colours
      gloss: brown
      source: {kind: coined}
      concept: brown
    - form: vilmi
      class: adj
      field: Core colours
      gloss: light in colour
      source: {kind: coined}
      concept: light-colour
    - form: vilni
      class: adj
      field: Core colours
      gloss: pale
      source: {kind: coined}
      concept: pale
    - form: laskel
      class: adj
      field: Core colours
      gloss: clear or distinct in visible appearance, not cloudless weather
      source: {kind: coined}
      concept: clear-appearance
    - form: laskum
      class: adj
      field: Core colours
      gloss: opaque
      source: {kind: coined}
      concept: opaque
    - form: laskir
      class: adj
      field: Core colours
      gloss: transparent
      source: {kind: coined}
      concept: transparent
    - form: helni
      class: adj
      field: Core colours
      gloss: shiny
      source: {kind: coined}
      concept: shiny
    - form: nesh helni
      class: adj
      field: Core colours
      gloss: not shiny; dull in surface appearance
      source: {kind: coined}
      built: [nesh, helni]
      concept: dull-appearance
    - form: talnim
      class: adj
      field: Core colours
      gloss: plain; without a pattern
      source: {kind: coined}
      concept: plain-pattern
    - form: pirmun
      class: adj
      field: Core colours
      gloss: spotted
      source: {kind: coined}
      concept: spotted
    - form: sirmun
      class: adj
      field: Core colours
      gloss: striped
      source: {kind: coined}
      concept: striped
    - form: geshem
      class: v
      field: Core verbs
      gloss: to go
      source: {kind: coined}
      concept: go
    - form: venem
      class: v
      field: Core verbs
      gloss: to come
      source: {kind: coined}
      concept: come
    - form: danem
      class: v
      field: Core verbs
      gloss: to give
      source: {kind: coined}
      concept: give
    - form: nemur
      class: v
      field: Core verbs
      gloss: to take
      source: {kind: coined}
      concept: take
    - form: narem
      class: v
      field: Core verbs
      gloss: speak or state words; tell a matter to a recipient introduced by dener
      source: {kind: coined}
      concept: [say, speak, tell]
    - form: hurnir
      class: v
      field: Core verbs
      gloss: to know
      source: {kind: coined}
      concept: know
    - form: murdem
      class: v
      field: Core verbs
      gloss: to think
      source: {kind: coined}
      concept: think
    - form: nemvir
      class: v
      field: Core verbs
      gloss: to want
      source: {kind: coined}
      concept: want
    - form: hever
      class: v
      field: Core verbs
      gloss: to live
      source: {kind: coined}
      concept: live
    - form: nilver
      class: v
      field: Core verbs
      gloss: to die
      source: {kind: coined}
      concept: die
    - form: tarim
      class: v
      field: Core verbs
      gloss: to walk
      source: {kind: coined}
      concept: walk
    - form: tarsher
      class: v
      field: Core verbs
      gloss: to run
      source: {kind: coined}
      concept: run
    - form: surer
      class: v
      field: Core verbs
      gloss: to sit
      source: {kind: coined}
      concept: sit
    - form: tursem
      class: v
      field: Core verbs
      gloss: to stand
      source: {kind: coined}
      concept: stand
    - form: dunir
      class: v
      field: Core verbs
      gloss: to lie down
      source: {kind: coined}
      concept: lie-down
    - form: hager
      class: v
      field: Core verbs
      gloss: to hold
      source: {kind: coined}
      concept: hold
    - form: berner
      class: v
      field: Core verbs
      gloss: to bring
      source: {kind: coined}
      concept: bring
    - form: ladem
      class: v
      field: Core verbs
      gloss: to put
      source: {kind: coined}
      concept: put
    - form: venhir
      class: v
      field: Core verbs
      gloss: to find
      source: {kind: coined}
      concept: find
    - form: veshner
      class: v
      field: Core verbs
      gloss: to lose
      source: {kind: coined}
      concept: lose
    - form: varter
      class: v
      field: Core verbs
      gloss: to open
      source: {kind: coined}
      concept: open
    - form: vartir
      class: v
      field: Core verbs
      gloss: to close
      source: {kind: coined}
      concept: close
    - form: kinver
      class: v
      field: Core verbs
      gloss: to begin
      source: {kind: coined}
      concept: begin
    - form: telver
      class: v
      field: Core verbs
      gloss: to end
      source: {kind: coined}
      concept: end
    - form: veme nemi miver
      class: v
      field: Core verbs
      gloss: belong to me; replace miver with the actual owner
      source: {kind: coined}
      built: [veme, nemi, miver]
      concept: belong
    - form: venmi
      class: v
      field: Core verbs
      gloss: to become
      source: {kind: coined}
      concept: become
    - form: hagen
      class: v
      field: Core verbs
      gloss: to remain
      source: {kind: coined}
      concept: remain
    - form: tarmer
      class: v
      field: Core verbs
      gloss: to leave
      source: {kind: coined}
      concept: leave
    - form: venmer
      class: v
      field: Core verbs
      gloss: to arrive
      source: {kind: coined}
      concept: arrive
    - form: tarnel
      class: v
      field: Core verbs
      gloss: to crawl
      source: {kind: coined}
      concept: crawl
    - form: dalmer
      class: v
      field: Core verbs
      gloss: to climb
      source: {kind: coined}
      concept: climb
    - form: tarlem
      class: v
      field: Core verbs
      gloss: to jump
      source: {kind: coined}
      concept: jump
    - form: genmer
      class: v
      field: Core verbs
      gloss: to fall
      source: {kind: coined}
      concept: fall
    - form: turmer
      class: v
      field: Core verbs
      gloss: to rise
      source: {kind: coined}
      concept: rise
    - form: hinter
      class: v
      field: Core verbs
      gloss: to enter
      source: {kind: coined}
      concept: enter
    - form: hunver
      class: v
      field: Core verbs
      gloss: to exit
      source: {kind: coined}
      concept: exit
    - form: revin
      class: v
      field: Core verbs
      gloss: return to a place; distinct from revun, the political recovery of the lost cities
      source: {kind: coined}
      concept: return
    - form: felmer
      class: v
      field: Core verbs
      gloss: to follow
      source: {kind: coined}
      concept: follow
    - form: fermer
      class: v
      field: Core verbs
      gloss: to lead
      source: {kind: coined}
      concept: lead
    - form: berven
      class: v
      field: Core verbs
      gloss: to carry
      source: {kind: coined}
      concept: carry
    - form: rurem
      class: v
      field: Core verbs
      gloss: to move
      source: {kind: coined}
      concept: move
    - form: barmer
      class: v
      field: Core verbs
      gloss: to push
      source: {kind: coined}
      concept: push
    - form: darmel
      class: v
      field: Core verbs
      gloss: to pull
      source: {kind: coined}
      concept: pull
    - form: tever
      class: v
      field: Core verbs
      gloss: to lift
      source: {kind: coined}
      concept: lift
    - form: genvir
      class: v
      field: Core verbs
      gloss: to drop
      source: {kind: coined}
      concept: drop
    - form: karshem
      class: v
      field: Core verbs
      gloss: to throw
      source: {kind: coined}
      concept: throw
    - form: nemshir
      class: v
      field: Core verbs
      gloss: to catch
      source: {kind: coined}
      concept: catch
    - form: herem
      class: v
      field: Core verbs
      gloss: to build
      source: {kind: coined}
      concept: build
    - form: turmesh
      class: v
      field: Core verbs
      gloss: to destroy
      source: {kind: coined}
      concept: destroy
    - form: tursel
      class: v
      field: Core verbs
      gloss: to repair
      source: {kind: coined}
      concept: repair
    - form: vernem
      class: v
      field: Core verbs
      gloss: to change
      source: {kind: coined}
      concept: change-verb
    - form: narsher
      class: v
      field: Core verbs
      gloss: to ask
      source: {kind: coined}
      concept: ask
    - form: narsel
      class: v
      field: Core verbs
      gloss: to answer
      source: {kind: coined}
      concept: answer
    - form: narkem
      class: v
      field: Core verbs
      gloss: to call
      source: {kind: coined}
      concept: call
    - form: narem hurlem
      class: v
      field: Core verbs
      gloss: shout; speak in a loud voice
      source: {kind: coined}
      built: [narem, hurlem]
      concept: shout
    - form: hushmer
      class: v
      field: Core verbs
      gloss: whisper with an unvoiced breath, rather than merely speak quietly
      source: {kind: coined}
      concept: whisper
    - form: narsum
      class: v
      field: Core verbs
      gloss: to explain
      source: {kind: coined}
      concept: explain
    - form: yumir
      class: v
      field: Core verbs
      gloss: to name
      source: {kind: coined}
      concept: name-verb
    - form: nurmer
      class: v
      field: Core verbs
      gloss: to believe
      source: {kind: coined}
      concept: believe
    - form: hursel
      class: v
      field: Core verbs
      gloss: to understand
      source: {kind: coined}
      concept: understand
    - form: murnesh
      class: v
      field: Core verbs
      gloss: to forget
      source: {kind: coined}
      concept: forget
    - form: yirhem
      class: v
      field: Core verbs
      gloss: to learn
      source: {kind: coined}
      concept: learn
    - form: lerhem
      class: v
      field: Core verbs
      gloss: to teach
      source: {kind: coined}
      concept: teach
    - form: velmer
      class: v
      field: Core verbs
      gloss: to decide
      source: {kind: coined}
      concept: decide
    - form: murven
      class: v
      field: Core verbs
      gloss: to imagine
      source: {kind: coined}
      concept: imagine
    - form: marnem
      class: v
      field: Core verbs
      gloss: to need
      source: {kind: coined}
      concept: need-verb
    - form: nemhel
      class: v
      field: Core verbs
      gloss: to wish
      source: {kind: coined}
      concept: wish-verb
    - form: nimver
      class: v
      field: Core verbs
      gloss: to hope
      source: {kind: coined}
      concept: hope-verb
    - form: ferhel
      class: v
      field: Core verbs
      gloss: to intend
      source: {kind: coined}
      concept: intend
    - form: velnir
      class: v
      field: Core verbs
      gloss: to choose
      source: {kind: coined}
      concept: choose
    - form: nemlim
      class: v
      field: Core verbs
      gloss: to prefer
      source: {kind: coined}
      concept: prefer
    - form: perhel
      class: v
      field: Core verbs
      gloss: to try
      source: {kind: coined}
      concept: try
    - form: sarhem
      class: v
      field: Core verbs
      gloss: to search
      source: {kind: coined}
      concept: search
    - form: mirher
      class: v
      field: Core verbs
      gloss: to meet
      source: {kind: coined}
      concept: meet
    - form: helmer
      class: v
      field: Core verbs
      gloss: to help
      source: {kind: coined}
      concept: [help, expression-help]
    - form: sermer
      class: v
      field: Core verbs
      gloss: to share
      source: {kind: coined}
      concept: share
    - form: berem pelim
      class: v
      field: Core verbs
      gloss: trade, literally make an exchange; a partner follows mibil
      source: {kind: coined}
      built: [berem, pelim]
      concept: trade
    - form: pernem
      class: v
      field: Core verbs
      gloss: to buy
      source: {kind: coined}
      concept: buy
    - form: pelner
      class: v
      field: Core verbs
      gloss: to sell
      source: {kind: coined}
      concept: sell
    - form: benrer
      class: v
      field: Core verbs
      gloss: to promise
      source: {kind: coined}
      concept: promise-verb
    - form: danver
      class: v
      field: Core verbs
      gloss: to thank
      source: {kind: coined}
      concept: thank-verb
    - form: mirver
      class: v
      field: Core verbs
      gloss: to forgive
      source: {kind: coined}
      concept: forgive-verb
    - form: nershem
      class: v
      field: Core verbs
      gloss: to refuse
      source: {kind: coined}
      concept: refuse-verb
    - form: samner
      class: v
      field: Core verbs
      gloss: to agree
      source: {kind: coined}
      concept: agree-verb
    - form: gurmer
      class: v
      field: Core verbs
      gloss: to fight
      source: {kind: coined}
      concept: fight
    - form: tarsem
      class: v
      field: Core verbs
      gloss: to hit
      source: {kind: coined}
      concept: hit
    - form: nilmer
      class: v
      field: Core verbs
      gloss: to kill
      source: {kind: coined}
      concept: kill
    - form: vermur
      class: v
      field: Core verbs
      gloss: to defend
      source: {kind: coined}
      concept: defend
    - form: gurver
      class: v
      field: Core verbs
      gloss: to attack
      source: {kind: coined}
      concept: attack
    - form: hertar
      class: v
      field: Core verbs
      gloss: to flee
      source: {kind: coined}
      concept: flee
    - form: harnur
      class: v
      field: Core verbs
      gloss: to threaten
      source: {kind: coined}
      concept: threaten
    - form: telnir
      class: v
      field: Core verbs
      gloss: to stop
      source: {kind: coined}
      concept: [stop, expression-stop]
    - form: germur
      class: v
      field: Core verbs
      gloss: to continue
      source: {kind: coined}
      concept: continue
    - form: hinver
      class: v
      field: Core verbs
      gloss: to wait
      source: {kind: coined}
      concept: [wait, expression-wait]
    - form: renver
      class: v
      field: Core verbs
      gloss: to happen
      source: {kind: coined}
      concept: happen
    - form: tarnim
      class: v
      field: Core verbs
      gloss: to kneel
      source: {kind: coined}
      concept: kneel
    - form: kurnem
      class: v
      field: Core verbs
      gloss: to bend
      source: {kind: coined}
      concept: bend
    - form: harnel
      class: v
      field: Core verbs
      gloss: to lean
      source: {kind: coined}
      concept: lean
    - form: hulmer
      class: v
      field: Core verbs
      gloss: to cover
      source: {kind: coined}
      concept: cover-verb
    - form: hulver
      class: v
      field: Core verbs
      gloss: to uncover
      source: {kind: coined}
      concept: uncover
    - form: felmur
      class: v
      field: Core verbs
      gloss: to hide
      source: {kind: coined}
      concept: hide
    - form: lasmer
      class: v
      field: Core verbs
      gloss: to reveal
      source: {kind: coined}
      concept: reveal
    - form: karner
      class: v
      field: Core verbs
      gloss: to lock
      source: {kind: coined}
      concept: lock-verb
    - form: kirner
      class: v
      field: Core verbs
      gloss: to unlock
      source: {kind: coined}
      concept: unlock
    - form: hene
      class: adv
      field: Core space
      gloss: Here
      source: {kind: coined}
      concept: here
    - form: hune
      class: adv
      field: Core space
      gloss: there
      source: {kind: coined}
      concept: there
    - form: tarem nemil het
      class: adv
      field: Core space
      gloss: at some unspecified place
      source: {kind: coined}
      built: [tarem, nemil, het]
      concept: somewhere
    - form: tarem nul het
      class: adv
      field: Core space
      gloss: at no place
      source: {kind: coined}
      built: [tarem, nul, het]
      concept: nowhere
    - form: tarem dimal het
      class: adv
      field: Core space
      gloss: at every place
      source: {kind: coined}
      built: [tarem, dimal, het]
      concept: everywhere
    - form: nerem
      class: part
      field: Core space
      gloss: near the following person or place
      source: {kind: coined}
      concept: near
    - form: ferul
      class: adj
      field: Core space
      gloss: far in spatial distance, not late in time
      source: {kind: coined}
      concept: far
    - form: semel
      class: part
      field: Core space
      gloss: beside
      source: {kind: coined}
      concept: beside
    - form: terem
      class: part
      field: Core space
      gloss: between the two references joined by lemir
      source: {kind: coined}
      concept: between
    - form: dimer
      class: part
      field: Core space
      gloss: among
      source: {kind: coined}
      concept: among
    - form: henil
      class: part
      field: Core space
      gloss: below
      source: {kind: coined}
      concept: below
    - form: varil
      class: part
      field: Core space
      gloss: outside
      source: {kind: coined}
      concept: outside
    - form: denir
      class: part
      field: Core space
      gloss: beyond
      source: {kind: coined}
      concept: beyond
    - form: fermil
      class: part
      field: Core space
      gloss: in front of the named thing, not earlier in time
      source: {kind: coined}
      concept: before-spatial
    - form: bamir
      class: part
      field: Core space
      gloss: behind
      source: {kind: coined}
      concept: behind
    - form: leshun
      class: n
      field: Core space
      gloss: left (direction)
      source: {kind: coined}
      concept: left-direction
    - form: neshun
      class: n
      field: Core space
      gloss: right (direction)
      source: {kind: coined}
      concept: right-direction
    - form: merun
      class: n
      field: Core space
      gloss: center
      source: {kind: coined}
      concept: center
    - {form: tenil, class: adv, field: Core space, gloss: Up, source: {kind: coined}, concept: up}
    - form: genil
      class: adv
      field: Core space
      gloss: down
      source: {kind: coined}
      concept: down
    - form: fermin
      class: adv
      field: Core space
      gloss: forward
      source: {kind: coined}
      concept: forward
    - form: bamin
      class: adv
      field: Core space
      gloss: backward
      source: {kind: coined}
      concept: backward
    - form: tseril
      class: part
      field: Core space
      gloss: through
      source: {kind: coined}
      concept: through
    - form: tserun
      class: part
      field: Core space
      gloss: across
      source: {kind: coined}
      concept: across
    - form: rumer
      class: part
      field: Core space
      gloss: around
      source: {kind: coined}
      concept: around
    - form: niret
      class: n
      field: Core space
      gloss: position
      source: {kind: coined}
      concept: position
    - form: vemir
      class: n
      field: Core space
      gloss: direction
      source: {kind: coined}
      concept: direction
    - form: fernul
      class: n
      field: Core space
      gloss: distance
      source: {kind: coined}
      concept: distance
    - form: yermun
      class: n
      field: Core time
      gloss: time
      source: {kind: coined}
      concept: time
    - form: yermil
      class: n
      field: Core time
      gloss: moment
      source: {kind: coined}
      concept: moment
    - form: hulvir
      class: n
      field: Core time
      gloss: morning
      source: {kind: coined}
      concept: morning
    - form: talhishmerun
      class: n
      field: Core time
      gloss: noon, the middle of the sun's day
      source: {kind: coined}
      built: [talhish, merun]
      concept: noon
    - form: garhel
      class: n
      field: Core time
      gloss: evening
      source: {kind: coined}
      concept: evening
    - form: nurmeshmerun
      class: n
      field: Core time
      gloss: midnight, the middle of the night
      source: {kind: coined}
      built: [nurmesh, merun]
      concept: midnight
    - {form: yune, class: adv, field: Core time, gloss: now, source: {kind: coined}, concept: now}
    - form: hame
      class: adv
      field: Core time
      gloss: then, at the time already identified; distinct from a conditional consequence
      source: {kind: coined}
      concept: then
    - form: heri gaben
      class: adv
      field: Core time
      gloss: this day; today
      source: {kind: coined}
      built: [heri, gaben]
      concept: today
    - form: gabenir
      class: adv
      field: Core time
      gloss: yesterday
      source: {kind: coined}
      concept: yesterday
    - form: gabenur
      class: adv
      field: Core time
      gloss: tomorrow
      source: {kind: coined}
      concept: tomorrow
    - form: yermat
      class: n
      field: Core time
      gloss: past
      source: {kind: coined}
      concept: past
    - form: yermet
      class: n
      field: Core time
      gloss: present
      source: {kind: coined}
      concept: present
    - form: yermut
      class: n
      field: Core time
      gloss: future
      source: {kind: coined}
      concept: future
    - form: hamin
      class: part
      field: Core time
      gloss: earlier than the named time or event
      source: {kind: coined}
      concept: before-time
    - form: hamun
      class: part
      field: Core time
      gloss: after
      source: {kind: coined}
      concept: after
    - form: yeril
      class: part
      field: Core time
      gloss: during
      source: {kind: coined}
      concept: during
    - form: yernem
      class: conj
      field: Core time
      gloss: while; introduces a complete simultaneous clause
      source: {kind: coined}
      concept: while
    - form: yermir
      class: part
      field: Core time
      gloss: until
      source: {kind: coined}
      concept: until
    - form: yernel
      class: part
      field: Core time
      gloss: from the named starting time or event through the reference time
      source: {kind: coined}
      concept: since-time
    - form: tarem dimal yermun
      class: adv
      field: Core time
      gloss: at every relevant time
      source: {kind: coined}
      built: [tarem, dimal, yermun]
      concept: always
    - form: tarem palem darem
      class: adv
      field: Core time
      gloss: on many occasions
      source: {kind: coined}
      built: [tarem, palem, darem]
      concept: often
    - form: tarem nemil darem
      class: adv
      field: Core time
      gloss: on some occasions
      source: {kind: coined}
      built: [tarem, nemil, darem]
      concept: sometimes
    - form: tarem nevim darem
      class: adv
      field: Core time
      gloss: on few occasions
      source: {kind: coined}
      built: [tarem, nevim, darem]
      concept: rarely
    - form: tarem nul darem
      class: adv
      field: Core time
      gloss: on no occasion
      source: {kind: coined}
      built: [tarem, nul, darem]
      concept: never
    - form: durmel
      class: adj
      field: Core time
      gloss: lasting a long time, not spatially long
      source: {kind: coined}
      concept: long-duration
    - form: durmil
      class: adj
      field: Core time
      gloss: brief or short in duration, not spatially short
      source: {kind: coined}
      concept: [short-duration, brief-duration]
    - form: durnel
      class: adj
      field: Core time
      gloss: lasting; continuing for a sustained time
      source: {kind: coined}
      concept: lasting-duration
    - form: gerni
      class: adv
      field: Core time
      gloss: again
      source: {kind: coined}
      concept: [again, expression-again]
    - form: tarem pel darem
      class: adv
      field: Core time
      gloss: on one occasion
      source: {kind: coined}
      built: [tarem, pel, darem]
      concept: once
    - form: tarem nin darem
      class: adv
      field: Core time
      gloss: on two occasions
      source: {kind: coined}
      built: [tarem, nin, darem]
      concept: twice
    - form: gerni gerni
      class: adv
      field: Core time
      gloss: again and again
      source: {kind: coined}
      built: [gerni, gerni]
      concept: repeatedly
    - form: hageni
      class: adv
      field: Core time
      gloss: already
      source: {kind: coined}
      concept: already
    - form: hagenir
      class: adv
      field: Core time
      gloss: still
      source: {kind: coined}
      concept: still
    - {form: nemgi, class: adv, field: Core time, gloss: yet, source: {kind: coined}, concept: yet}
    - form: hunnir
      class: adv
      field: Core time
      gloss: soon in time, not nearly reaching a number
      source: {kind: coined}
      concept: soon
    - form: hamuni
      class: adv
      field: Core time
      gloss: later
      source: {kind: coined}
      concept: later
    - form: hamili
      class: adv
      field: Core time
      gloss: early
      source: {kind: coined}
      concept: early
    - form: hamuli
      class: adv
      field: Core time
      gloss: late
      source: {kind: coined}
      concept: late
    - form: hamin dimal nedim darem
      class: adv
      field: Core time
      gloss: before every other occasion in the sequence
      source: {kind: coined}
      built: [hamin, dimal, nedim, darem]
      concept: first-sequence
    - form: genir
      class: adj
      field: Core time
      gloss: next
      source: {kind: coined}
      concept: next
    - form: genur
      class: adj
      field: Core time
      gloss: last
      source: {kind: coined}
      concept: last
    - form: tarem genur darem
      class: adv
      field: Core time
      gloss: at the last occasion or final stage
      source: {kind: coined}
      built: [tarem, genur, darem]
      concept: finally
    - form: yarnem
      class: n
      field: Core time
      gloss: season
      source: {kind: coined}
      concept: season
    - form: yarnim
      class: n
      field: Core time
      gloss: year
      source: {kind: coined}
      concept: year
    - form: lisenmil
      class: n
      field: Core time
      gloss: month
      source: {kind: coined}
      concept: month
    - form: garnim
      class: n
      field: Core time
      gloss: dusk
      source: {kind: coined}
      concept: dusk
    - form: nemi miver
      class: part
      field: Core reference
      gloss: my or mine; place after the possessed head
      source: {kind: coined}
      built: [nemi, miver]
      concept: my
    - form: nemi tiver
      class: part
      field: Core reference
      gloss: your or yours; place after the possessed head
      source: {kind: coined}
      built: [nemi, tiver]
      concept: your
    - form: nemi mener
      class: part
      field: Core reference
      gloss: our or ours; place after the possessed head
      source: {kind: coined}
      built: [nemi, mener]
      concept: our
    - form: nemil miran
      class: pron
      field: Core reference
      gloss: some unspecified person
      source: {kind: coined}
      built: [nemil, miran]
      concept: someone
    - form: vel miran
      class: pron
      field: Core reference
      gloss: any person without restriction
      source: {kind: coined}
      built: [vel, miran]
      concept: anyone
    - form: dimal miran
      class: pron
      field: Core reference
      gloss: every person in the stated set
      source: {kind: coined}
      built: [dimal, miran]
      concept: everyone
    - form: nul miran
      class: pron
      field: Core reference
      gloss: no person in the stated set
      source: {kind: coined}
      built: [nul, miran]
      concept: no-one
    - form: nemil denem
      class: pron
      field: Core reference
      gloss: some unspecified thing
      source: {kind: coined}
      built: [nemil, denem]
      concept: something
    - form: vel denem
      class: pron
      field: Core reference
      gloss: any thing without restriction
      source: {kind: coined}
      built: [vel, denem]
      concept: anything
    - form: dimal denem
      class: pron
      field: Core reference
      gloss: everything in the stated set
      source: {kind: coined}
      built: [dimal, denem]
      concept: everything
    - form: shernil
      class: pron
      field: Core reference
      gloss: the subject of this same clause as its own object
      source: {kind: coined}
      concept: self
    - form: pel nedim denem
      class: pron
      field: Core reference
      gloss: one additional or different entity
      source: {kind: coined}
      built: [pel, nedim, denem]
      concept: another
    - form: samnil
      class: adj
      field: Core reference
      gloss: Same
      source: {kind: coined}
      concept: same
    - form: nesh samnil
      class: adj
      field: Core reference
      gloss: not identical in the relevant identity or property
      source: {kind: coined}
      built: [nesh, samnil]
      concept: different
    - form: verin
      class: pron
      field: Core questions
      gloss: Who (question)
      source: {kind: coined}
      concept: question-who
    - form: verum
      class: pron
      field: Core questions
      gloss: What (question)
      source: {kind: coined}
      concept: [question-what, expression-what]
    - form: virnil
      class: part
      field: Core questions
      gloss: which, before the named kind being selected
      source: {kind: coined}
      concept: question-which
    - form: tarem verhet
      class: part
      field: Core questions
      gloss: at what place; where
      source: {kind: coined}
      built: [tarem, verhet]
      concept: question-where
    - form: vermun
      class: adv
      field: Core questions
      gloss: When (question)
      source: {kind: coined}
      concept: question-when
    - form: danel verum
      class: part
      field: Core questions
      gloss: because of what cause or reason; why
      source: {kind: coined}
      built: [danel, verum]
      concept: question-why
    - form: verlim
      class: adv
      field: Core questions
      gloss: How (question)
      source: {kind: coined}
      concept: question-how
    - form: verum tavem
      class: part
      field: Core questions
      gloss: what number; how many of the counted kind that follows
      source: {kind: coined}
      built: [verum, tavem]
      concept: question-how-many
    - form: verum tavel
      class: part
      field: Core questions
      gloss: what amount; how much of the measured substance that follows
      source: {kind: coined}
      built: [verum, tavel]
      concept: question-how-much
    - form: nemi verin
      class: part
      field: Core questions
      gloss: of whom; whose
      source: {kind: coined}
      built: [nemi, verin]
      concept: question-whose
    - form: dener verin
      class: part
      field: Core questions
      gloss: to whom
      source: {kind: coined}
      built: [dener, verin]
      concept: question-to-whom
    - form: vanel verhet
      class: part
      field: Core questions
      gloss: from what place; from where
      source: {kind: coined}
      built: [vanel, verhet]
      concept: question-from-where
    - form: peril verum
      class: part
      field: Core questions
      gloss: for what intended purpose
      source: {kind: coined}
      built: [peril, verum]
      concept: question-for-what-purpose
    - form: havi
      class: part
      field: Core questions
      gloss: requests yes or no after the complete clause
      source: {kind: coined}
      concept: question-polar
    - form: nerhum
      class: call
      field: Core questions
      gloss: pardon; repeat or clarify the unclear utterance
      source: {kind: coined}
      concept: [question-clarification, expression-pardon]
    - form: yemi
      class: call
      field: Core truth
      gloss: Yes
      source: {kind: coined}
      concept: yes
    - {form: neshi, class: call, field: Core truth, gloss: no, source: {kind: coined}, concept: no}
    - form: sanhel
      class: adj
      field: Core truth
      gloss: "True"
      source: {kind: coined}
      concept: "true"
    - form: nesh sanhel
      class: adj
      field: Core truth
      gloss: not true; false of the asserted claim
      source: {kind: coined}
      built: [nesh, sanhel]
      concept: "false"
    - form: sanhem
      class: n
      field: Core truth
      gloss: Truth
      source: {kind: coined}
      concept: truth
    - form: narvesh
      class: n
      field: Core truth
      gloss: an intentionally deceptive statement
      source: {kind: coined}
      concept: lie-noun
    - form: sanmil
      class: adv
      field: Core truth
      gloss: truly or sincerely, asserting the speaker's genuine intent
      source: {kind: coined}
      concept: sincerity
    - form: yemi sanhel
      class: call
      field: Core truth
      gloss: indeed; yes, that is true
      source: {kind: coined}
      built: [yemi, sanhel]
      concept: indeed
    - form: mibil hernen
      class: adv
      field: Core truth
      gloss: with certainty in the claim; this can be mistaken
      source: {kind: coined}
      built: [mibil, hernen]
      concept: certainly
    - form: merni
      class: adv
      field: Core truth
      gloss: perhaps; marks the following complete event as possible, not permitted
      source: {kind: coined}
      concept: [perhaps, might-possibility]
    - form: murni
      class: adv
      field: Core truth
      gloss: Probably
      source: {kind: coined}
      concept: probably
    - form: murnul
      class: adv
      field: Core truth
      gloss: unlikely
      source: {kind: coined}
      concept: unlikely
    - form: hurnen
      class: adj
      field: Core truth
      gloss: subjectively sure; not a guarantee of truth
      source: {kind: coined}
      concept: certain
    - form: nesh hurnen
      class: adj
      field: Core truth
      gloss: not subjectively sure
      source: {kind: coined}
      built: [nesh, hurnen]
      concept: uncertain
    - form: lasmil
      class: adv
      field: Core truth
      gloss: Apparently
      source: {kind: coined}
      concept: apparently
    - form: narmil
      class: adv
      field: Core truth
      gloss: supposedly
      source: {kind: coined}
      concept: supposedly
    - form: sanmir
      class: adv
      field: Core truth
      gloss: Actually
      source: {kind: coined}
      concept: in-fact
    - form: nerhir
      class: v
      field: Core truth
      gloss: doubt
      source: {kind: coined}
      concept: doubt-verb
    - form: murhes
      class: v
      field: Core truth
      gloss: consider the named claim possible on limited evidence, without requiring wrongdoing
      source: {kind: coined}
      concept: suspect
    - form: ramner
      class: v
      field: Core truth
      gloss: guess
      source: {kind: coined}
      concept: guess-verb
    - form: murset
      class: v
      field: Core truth
      gloss: assume
      source: {kind: coined}
      concept: assume-verb
    - form: darmil
      class: adj
      field: Core truth
      gloss: Correct
      source: {kind: coined}
      concept: correct
    - form: nesh darmil
      class: adj
      field: Core truth
      gloss: not correct
      source: {kind: coined}
      built: [nesh, darmil]
      concept: incorrect
    - form: nesh samner
      class: v
      field: Core truth
      gloss: not agree with the stated claim or person
      source: {kind: coined}
      built: [nesh, samner]
      concept: disagree
    - form: narvel
      class: n
      field: Core truth
      gloss: a false claim, whether intentionally deceptive or honestly mistaken
      source: {kind: coined}
      concept: falsehood
    - {form: lemur, class: conj, field: Core logic, gloss: or, source: {kind: coined}, concept: or}
    - form: damir
      class: conj
      field: Core logic
      gloss: but
      source: {kind: coined}
      concept: but
    - form: neshir
      class: conj
      field: Core logic
      gloss: after a negative clause, introduces a second negated clause
      source: {kind: coined}
      concept: nor
    - form: danil
      class: conj
      field: Core logic
      gloss: Because
      source: {kind: coined}
      concept: because
    - form: danuli
      class: conj
      field: Core logic
      gloss: therefore
      source: {kind: coined}
      concept: therefore
    - {form: dinel, class: conj, field: Core logic, gloss: If, source: {kind: coined}, concept: if}
    - form: dinir
      class: conj
      field: Core logic
      gloss: then, in a condition and its consequence
      source: {kind: coined}
      concept: then-conditional
    - form: dinul
      class: conj
      field: Core logic
      gloss: unless
      source: {kind: coined}
      concept: unless
    - form: dinur
      class: conj
      field: Core logic
      gloss: otherwise
      source: {kind: coined}
      concept: otherwise
    - form: damil
      class: conj
      field: Core logic
      gloss: Although
      source: {kind: coined}
      concept: although
    - form: damul
      class: conj
      field: Core logic
      gloss: however
      source: {kind: coined}
      concept: however
    - form: damni
      class: conj
      field: Core logic
      gloss: nevertheless
      source: {kind: coined}
      concept: nevertheless
    - form: damel
      class: part
      field: Core logic
      gloss: despite
      source: {kind: coined}
      concept: despite
    - form: nedel
      class: adv
      field: Core logic
      gloss: instead
      source: {kind: coined}
      concept: instead
    - form: leshim
      class: part
      field: Core logic
      gloss: Like
      source: {kind: coined}
      concept: like
    - form: nesh leshim
      class: part
      field: Core logic
      gloss: not resembling the following reference
      source: {kind: coined}
      built: [nesh, leshim]
      concept: unlike
    - form: lerim
      class: part
      field: Core logic
      gloss: as, in the role or capacity named; distinct from resemblance
      source: {kind: coined}
      concept: as
    - form: lemvel
      class: conj
      field: Core logic
      gloss: introduces the first alternative, with lemur before the second
      source: {kind: coined}
      concept: either-alternative
    - form: lemnul
      class: conj
      field: Core logic
      gloss: introduces each of two excluded alternatives
      source: {kind: coined}
      concept: neither-alternative
    - form: lemnin
      class: conj
      field: Core logic
      gloss: introduces the first included clause, with lemir before the second
      source: {kind: coined}
      concept: both-conjunction
    - form: lenvir
      class: conj
      field: Core logic
      gloss: whether
      source: {kind: coined}
      concept: whether
    - form: namir
      class: part
      field: Core logic
      gloss: That is
      source: {kind: coined}
      concept: that-is
    - form: yumil
      class: part
      field: Core logic
      gloss: namely
      source: {kind: coined}
      concept: namely
    - form: neril
      class: part
      field: Core logic
      gloss: for example
      source: {kind: coined}
      concept: for-example
    - form: ternul
      class: part
      field: Core logic
      gloss: Except
      source: {kind: coined}
      concept: except
    - form: perni
      class: adv
      field: Core logic
      gloss: only
      source: {kind: coined}
      concept: only
    - form: gernil
      class: adv
      field: Core logic
      gloss: even
      source: {kind: coined}
      concept: even
    - form: lerni
      class: adv
      field: Core logic
      gloss: also
      source: {kind: coined}
      concept: also
    - form: sernil
      class: adv
      field: Core logic
      gloss: especially
      source: {kind: coined}
      concept: especially
    - form: nimnil
      class: adj
      field: Core qualities
      gloss: tiny
      source: {kind: coined}
      concept: tiny
    - form: garmul
      class: adj
      field: Core qualities
      gloss: huge
      source: {kind: coined}
      concept: huge
    - form: tarki
      class: adj
      field: Core qualities
      gloss: short in spatial length
      source: {kind: coined}
      concept: short
    - form: genli
      class: adj
      field: Core qualities
      gloss: low
      source: {kind: coined}
      concept: low
    - form: terli
      class: adj
      field: Core qualities
      gloss: tall
      source: {kind: coined}
      concept: tall
    - form: virel
      class: adj
      field: Core qualities
      gloss: wide
      source: {kind: coined}
      concept: wide
    - form: virnel
      class: adj
      field: Core qualities
      gloss: narrow
      source: {kind: coined}
      concept: narrow
    - form: barmil
      class: adj
      field: Core qualities
      gloss: heavy
      source: {kind: coined}
      concept: heavy
    - form: barni
      class: adj
      field: Core qualities
      gloss: light in weight
      source: {kind: coined}
      concept: light-weight
    - form: verli
      class: adj
      field: Core qualities
      gloss: new
      source: {kind: coined}
      concept: new
    - form: tarsil
      class: adj
      field: Core qualities
      gloss: fast
      source: {kind: coined}
      concept: fast
    - form: tarni
      class: adj
      field: Core qualities
      gloss: slow
      source: {kind: coined}
      concept: slow
    - form: nemli
      class: adj
      field: Core qualities
      gloss: easy
      source: {kind: coined}
      concept: easy
    - form: karmil
      class: adj
      field: Core qualities
      gloss: difficult
      source: {kind: coined}
      concept: difficult
    - form: leril
      class: adj
      field: Core qualities
      gloss: good
      source: {kind: coined}
      concept: good
    - form: lemvesh
      class: adj
      field: Core qualities
      gloss: bad
      source: {kind: coined}
      concept: bad
    - form: palen leril
      class: adj
      field: Core qualities
      gloss: better; more good in the comparison being made
      source: {kind: coined}
      built: [palen, leril]
      concept: better
    - form: palen lemvesh
      class: adj
      field: Core qualities
      gloss: worse; more bad in the comparison being made
      source: {kind: coined}
      built: [palen, lemvesh]
      concept: worse
    - form: palen leril nali dimal nedim
      class: adj
      field: Core qualities
      gloss: better than all the other compared members
      source: {kind: coined}
      built: [palen, leril, nali, dimal, nedim]
      concept: best
    - form: palen lemvesh nali dimal nedim
      class: adj
      field: Core qualities
      gloss: worse than all the other compared members
      source: {kind: coined}
      built: [palen, lemvesh, nali, dimal, nedim]
      concept: worst
    - form: vardem
      class: adj
      field: Core qualities
      gloss: important
      source: {kind: coined}
      concept: important
    - form: vardil
      class: adj
      field: Core qualities
      gloss: trivial
      source: {kind: coined}
      concept: trivial
    - form: damnel
      class: adj
      field: Core qualities
      gloss: necessary or required under the stated need or obligation
      source: {kind: coined}
      concept: [necessary, required]
    - form: sunmir
      class: adj
      field: Core qualities
      gloss: valuable
      source: {kind: coined}
      concept: valuable
    - form: hurem tul virdem
      class: v
      field: Core qualities
      gloss: have zero worth in the stated valuation; be worthless
      source: {kind: coined}
      built: [hurem, tul, virdem]
      concept: worthless
    - form: karmir
      class: adj
      field: Core qualities
      gloss: useful
      source: {kind: coined}
      concept: useful
    - form: nesh karmir
      class: adj
      field: Core qualities
      gloss: not useful for the stated purpose
      source: {kind: coined}
      built: [nesh, karmir]
      concept: useless
    - form: turemi
      class: adj
      field: Core qualities
      gloss: broken
      source: {kind: coined}
      concept: broken
    - form: temvish
      class: adj
      field: Core qualities
      gloss: complete
      source: {kind: coined}
      concept: complete
    - form: nesh temvish
      class: adj
      field: Core qualities
      gloss: not complete
      source: {kind: coined}
      built: [nesh, temvish]
      concept: incomplete
    - form: narsan
      class: adj
      field: Core qualities
      gloss: honest
      source: {kind: coined}
      concept: honest
    - form: narshim
      class: adj
      field: Core qualities
      gloss: dishonest
      source: {kind: coined}
      concept: dishonest
    - form: darli
      class: adv
      field: Core qualities
      gloss: very
      source: {kind: coined}
      concept: very
    - form: dardem
      class: adv
      field: Core qualities
      gloss: extremely
      source: {kind: coined}
      concept: extremely
    - form: darnim
      class: adv
      field: Core qualities
      gloss: somewhat
      source: {kind: coined}
      concept: somewhat
    - form: darni
      class: adv
      field: Core qualities
      gloss: slightly
      source: {kind: coined}
      concept: slightly
    - form: darnir
      class: adv
      field: Core qualities
      gloss: barely
      source: {kind: coined}
      concept: barely
    - form: palen nali marnil
      class: adj
      field: Core qualities
      gloss: more than enough for the stated purpose
      source: {kind: coined}
      built: [palen, nali, marnil]
      concept: too-much
    - form: neven nali marnil
      class: adj
      field: Core qualities
      gloss: less than enough for the stated purpose
      source: {kind: coined}
      built: [neven, nali, marnil]
      concept: too-little
    - form: leshil
      class: adj
      field: Core qualities
      gloss: similar
      source: {kind: coined}
      concept: similar
    - form: vernil
      class: adj
      field: Core qualities
      gloss: opposite
      source: {kind: coined}
      concept: opposite
    - form: gaven
      class: v
      field: Core modality
      gloss: can; able to do something (ability)
      source: {kind: coined}
      concept: can
    - form: nesh gaven
      class: v
      field: Core modality
      gloss: lack ability to perform the following action
      source: {kind: coined}
      built: [nesh, gaven]
      concept: cannot
    - form: gaveni
      class: adj
      field: Core modality
      gloss: Possible
      source: {kind: coined}
      concept: possible
    - form: nesh gaveni
      class: adj
      field: Core modality
      gloss: not possible
      source: {kind: coined}
      built: [nesh, gaveni]
      concept: impossible
    - form: hesir
      class: v
      field: Core modality
      gloss: may; have permission to act
      source: {kind: coined}
      concept: may-permission
    - form: damer
      class: v
      field: Core modality
      gloss: Must
      source: {kind: coined}
      concept: must
    - form: damer nesh
      class: v
      field: Core modality
      gloss: must refrain from the following action; nesh negates the action
      source: {kind: coined}
      built: [damer, nesh]
      concept: must-not
    - form: damher
      class: v
      field: Core modality
      gloss: Should
      source: {kind: coined}
      concept: ought
    - form: hesnil
      class: adj
      field: Core modality
      gloss: optional
      source: {kind: coined}
      concept: optional
    - form: hesni
      class: adj
      field: Core modality
      gloss: Allowed
      source: {kind: coined}
      concept: allowed
    - form: hesver
      class: v
      field: Core modality
      gloss: Permit
      source: {kind: coined}
      concept: permit
    - form: neshver
      class: v
      field: Core modality
      gloss: prohibit
      source: {kind: coined}
      concept: prohibit
    - form: hannes
      class: adj
      field: Core modality
      gloss: constrained in action; not free to act
      source: {kind: coined}
      concept: constrained
    - form: nemni
      class: adj
      field: Core modality
      gloss: Willing
      source: {kind: coined}
      concept: willing
    - form: nesh nemni
      class: adj
      field: Core modality
      gloss: not willing to perform the stated action
      source: {kind: coined}
      built: [nesh, nemni]
      concept: unwilling
    - form: ferili
      class: adj
      field: Core modality
      gloss: Intended
      source: {kind: coined}
      concept: intended
    - form: feruni
      class: adj
      field: Core modality
      gloss: accidental
      source: {kind: coined}
      concept: accidental
    - form: lirun gaben
      class: call
      field: Core conversation
      gloss: a free day; the established Tellumi greeting
      source: {kind: coined}
      built: [lirun, gaben]
      concept: hello
    - form: leril tarlim
      class: call
      field: Core conversation
      gloss: a good road; a parting wish
      source: {kind: coined}
      built: [leril, tarlim]
      concept: goodbye
    - form: venem neyin
      class: call
      field: Core conversation
      gloss: come, guest; the welcome offered to a visitor
      source: {kind: coined}
      built: [venem, neyin]
      concept: expression-welcome
    - form: mibil nimvar
      class: call
      field: Core conversation
      gloss: with humility; please
      source: {kind: coined}
      built: [mibil, nimvar]
      concept: expression-please
    - form: miver danver tiver
      class: call
      field: Core conversation
      gloss: I thank you
      source: {kind: coined}
      built: [miver, danver, tiver]
      concept: expression-thank-you
    - form: nesh dushmen
      class: call
      field: Core conversation
      gloss: no debt; the response to thanks
      source: {kind: coined}
      built: [nesh, dushmen]
      concept: expression-youre-welcome
    - form: miver narsher
      class: call
      field: Core conversation
      gloss: I ask; a courteous request for attention
      source: {kind: coined}
      built: [miver, narsher]
      concept: expression-excuse-me
    - form: miver hurem remhel
      class: call
      field: Core conversation
      gloss: I feel regret for my action; sorry
      source: {kind: coined}
      built: [miver, hurem, remhel]
      concept: expression-sorry
    - form: tiver mirver miver
      class: call
      field: Core conversation
      gloss: you forgive me; the addressed request for forgiveness
      source: {kind: coined}
      built: [tiver, mirver, miver]
      concept: expression-forgive-me
    - form: yemi mibil hernen
      class: call
      field: Core conversation
      gloss: yes, with certainty; of course
      source: {kind: coined}
      built: [yemi, mibil, hernen]
      concept: of-course
    - form: venem hene
      class: call
      field: Core conversation
      gloss: come here
      source: {kind: coined}
      built: [venem, hene]
      concept: expression-come-here
    - form: geshem vannil
      class: call
      field: Core conversation
      gloss: go away
      source: {kind: coined}
      built: [geshem, vannil]
      concept: expression-go-away
    - form: miver hursel
      class: call
      field: Core conversation
      gloss: I understand
      source: {kind: coined}
      built: [miver, hursel]
      concept: expression-i-understand
    - form: miver nesh hursel
      class: call
      field: Core conversation
      gloss: I do not understand
      source: {kind: coined}
      built: [miver, nesh, hursel]
      concept: expression-i-do-not-understand
    - form: tiver menir verum
      class: call
      field: Core conversation
      gloss: you mean what; what do you mean
      source: {kind: coined}
      built: [tiver, menir, verum]
      concept: expression-what-do-you-mean
    - form: tiver narem hudem verlim
      class: call
      field: Core conversation
      gloss: you say it how; how do you say it
      source: {kind: coined}
      built: [tiver, narem, hudem, verlim]
      concept: expression-how-do-you-say
    - form: yumesh nemi heri denem veme verum
      class: call
      field: Core conversation
      gloss: what is the name of this thing
      source: {kind: coined}
      built: [yumesh, nemi, heri, denem, veme, verum]
      concept: expression-what-is-this-called
    - form: hudem veme sanhel havi
      class: call
      field: Core conversation
      gloss: is it true; really, seeking confirmation
      source: {kind: coined}
      built: [hudem, veme, sanhel, havi]
      concept: expression-really
    - form: nul diram
      class: call
      field: Core conversation
      gloss: no degree at all; an emphatic negative response
      source: {kind: coined}
      built: [nul, diram]
      concept: expression-not-at-all
    - form: mirin
      class: adj
      field: Core society
      gloss: human
      source: {kind: coined}
      concept: human
    - form: varli kenen
      class: n
      field: Core society
      gloss: a male adult human person
      source: {kind: coined}
      built: [varli, kenen]
      concept: man
    - form: nirli kenen
      class: n
      field: Core society
      gloss: a female adult human person
      source: {kind: coined}
      built: [nirli, kenen]
      concept: woman
    - form: varli timlan
      class: n
      field: Core society
      gloss: a male child
      source: {kind: coined}
      built: [varli, timlan]
      concept: boy
    - form: nirli timlan
      class: n
      field: Core society
      gloss: a female child
      source: {kind: coined}
      built: [nirli, timlan]
      concept: girl
    - form: tenner
      class: n
      field: Core society
      gloss: elder
      source: {kind: coined}
      concept: elder
    - form: pel miran
      class: n
      field: Core society
      gloss: one person considered individually
      source: {kind: coined}
      built: [pel, miran]
      concept: individual
    - form: salmir
      class: n
      field: Core society
      gloss: group
      source: {kind: coined}
      concept: group
    - form: dimbel
      class: n
      field: Core society
      gloss: crowd
      source: {kind: coined}
      concept: crowd
    - form: kishnun
      class: n
      field: Core society
      gloss: clan
      source: {kind: coined}
      concept: clan
    - form: dimnun
      class: n
      field: Core society
      gloss: tribe
      source: {kind: coined}
      concept: tribe
    - form: dimher
      class: n
      field: Core society
      gloss: community
      source: {kind: coined}
      concept: community
    - form: gerun
      class: n
      field: Core society
      gloss: ruler
      source: {kind: coined}
      concept: ruler
    - form: beremri
      class: n
      field: Core society
      gloss: Worker
      source: {kind: coined}
      concept: worker
    - form: bermir
      class: n
      field: Core society
      gloss: artisan
      source: {kind: coined}
      concept: artisan
    - form: pelmir
      class: n
      field: Core society
      gloss: merchant
      source: {kind: coined}
      concept: merchant
    - form: yummir
      class: n
      field: Core society
      gloss: title
      source: {kind: coined}
      concept: title
    - form: nermil
      class: n
      field: Core society
      gloss: rank
      source: {kind: coined}
      concept: rank
    - form: temmur
      class: n
      field: Core society
      gloss: tradition
      source: {kind: coined}
      concept: tradition
    - form: nartim
      class: n
      field: Core society
      gloss: rule
      source: {kind: coined}
      concept: rule
    - form: nerdim
      class: n
      field: Core society
      gloss: Order
      source: {kind: coined}
      concept: order-noun
    - form: nardem
      class: n
      field: Core society
      gloss: command
      source: {kind: coined}
      concept: command-noun
    - form: narmel
      class: n
      field: Core society
      gloss: obedience
      source: {kind: coined}
      concept: obedience
    - form: narsil
      class: n
      field: Core society
      gloss: Justice
      source: {kind: coined}
      concept: justice
    - form: nesh narsil
      class: n
      field: Core society
      gloss: absence of fair treatment or fair application of law
      source: {kind: coined}
      built: [nesh, narsil]
      concept: injustice
    - form: nermesh
      class: adj
      field: Core society
      gloss: morally acceptable under the ethical judgment being made
      source: {kind: coined}
      concept: right-ethical
    - form: nesh nermesh
      class: adj
      field: Core society
      gloss: morally unacceptable under the ethical judgment being made
      source: {kind: coined}
      built: [nesh, nermesh]
      concept: wrong-ethical
    - form: gurhil
      class: n
      field: Core society
      gloss: Peace
      source: {kind: coined}
      concept: peace
    - form: lirmesh
      class: n
      field: Core society
      gloss: Freedom
      source: {kind: coined}
      concept: freedom
    - form: hannem
      class: n
      field: Core society
      gloss: captivity
      source: {kind: coined}
      concept: captivity
    - form: sunmer
      class: n
      field: Core society
      gloss: Wealth
      source: {kind: coined}
      concept: wealth
    - form: sunmil
      class: n
      field: Core society
      gloss: poverty
      source: {kind: coined}
      concept: poverty
    - form: hurlen
      class: n
      field: Core society
      gloss: Property
      source: {kind: coined}
      concept: property
    - form: hurmen
      class: n
      field: Core society
      gloss: ownership
      source: {kind: coined}
      concept: ownership
    - form: vursel
      class: n
      field: Core society
      gloss: Honor
      source: {kind: coined}
      concept: honor
    - form: narhim
      class: n
      field: Core society
      gloss: Secret
      source: {kind: coined}
      concept: secret
    - form: hurnil
      class: n
      field: Core society
      gloss: knowledge
      source: {kind: coined}
      concept: knowledge
    - form: hevem
      class: n
      field: Core existence
      gloss: being
      source: {kind: coined}
      concept: being
    - form: lumir
      class: n
      field: Core existence
      gloss: origin
      source: {kind: coined}
      concept: origin
    - form: kinvem
      class: n
      field: Core existence
      gloss: beginning
      source: {kind: coined}
      concept: beginning
    - form: telvem
      class: n
      field: Core existence
      gloss: End
      source: {kind: coined}
      concept: end-noun
    - form: temvim
      class: n
      field: Core existence
      gloss: completion
      source: {kind: coined}
      concept: completion
    - form: vernal
      class: n
      field: Core existence
      gloss: Change
      source: {kind: coined}
      concept: change-noun
    - form: vernas
      class: n
      field: Core existence
      gloss: transformation
      source: {kind: coined}
      concept: transformation
    - form: danhel
      class: n
      field: Core existence
      gloss: Cause
      source: {kind: coined}
      concept: cause
    - form: danmul
      class: n
      field: Core existence
      gloss: effect
      source: {kind: coined}
      concept: effect
    - form: darmun
      class: n
      field: Core existence
      gloss: Reason
      source: {kind: coined}
      concept: reason
    - form: ferhum
      class: n
      field: Core existence
      gloss: purpose
      source: {kind: coined}
      concept: purpose
    - form: denmil
      class: n
      field: Core existence
      gloss: Kind
      source: {kind: coined}
      concept: kind
    - form: sanvur
      class: adj
      field: Core existence
      gloss: Real
      source: {kind: coined}
      concept: real
    - form: nesh sanvur
      class: adj
      field: Core existence
      gloss: not real or actually existing
      source: {kind: coined}
      built: [nesh, sanvur]
      concept: unreal
    - form: bermi
      class: adj
      field: Core existence
      gloss: Natural
      source: {kind: coined}
      concept: natural
    - form: nesh bermi
      class: adj
      field: Core existence
      gloss: not arising from the ordinary natural processes in question
      source: {kind: coined}
      built: [nesh, bermi]
      concept: unnatural
    - form: nerbem
      class: n
      field: Ordinary usage
      gloss: "a legal case kept for hearing"
      source: {kind: coined}
    - form: lemhur
      class: n
      field: Ordinary usage
      gloss: "a claim of right or title"
      source: {kind: coined}
    - form: nerber
      class: v
      field: Ordinary usage
      gloss: "prove a stated claim by evidence"
      source: {kind: coined}
    - form: tenem
      class: v
      field: Ordinary usage
      gloss: "read written signs or a recorded text"
      source: {kind: coined}
    - form: buder
      class: v
      field: Ordinary usage
      gloss: "press a sign into a surface"
      source: {kind: coined}
    - {form: relmer, class: v, field: Ordinary usage, gloss: "sing a song", source: {kind: coined}}
    - form: perner
      class: v
      field: Ordinary usage
      gloss: "kindle a lamp or fire"
      source: {kind: coined}
    - form: karnel
      class: n
      field: Ordinary usage
      gloss: "a doorway's lintel"
      source: {kind: coined}
    - form: nelhur
      class: n
      field: Ordinary usage
      gloss: "a water basin or collecting pool"
      source: {kind: coined}
    - {form: larnem, class: n, field: Ordinary usage, gloss: "a chisel", source: {kind: coined}}
    - form: pirvem
      class: n
      field: Ordinary usage
      gloss: "a reed used for writing or pointing"
      source: {kind: coined}
    - form: telnem
      class: n
      field: Ordinary usage
      gloss: "a terrace or level ledge"
      source: {kind: coined}
    - form: nelgur
      class: n
      field: Ordinary usage
      gloss: "a weir controlling a watercourse"
      source: {kind: coined}
    - form: varshim
      class: n
      field: Ordinary usage
      gloss: "cedar wood or a cedar tree"
      source: {kind: coined}
    - {form: tamnel, class: n, field: Ordinary usage, gloss: "bronze", source: {kind: coined}}
    - {form: berbun, class: n, field: Ordinary usage, gloss: "an adze", source: {kind: coined}}
    - form: pirshel
      class: n
      field: Ordinary usage
      gloss: "linen cloth"
      source: {kind: coined}
    - {form: pirnur, class: n, field: Ordinary usage, gloss: "a face veil", source: {kind: coined}}
    - form: karvash
      class: n
      field: Ordinary usage
      gloss: "a crag lurker, the ceiling-hunting creature"
      source: {kind: coined}
    - {form: sirhel, class: n, field: Ordinary usage, gloss: "a spider", source: {kind: coined}}
    - {form: nersum, class: n, field: Ordinary usage, gloss: "lamp oil", source: {kind: coined}}
    - form: vurnem
      class: v
      field: Ordinary usage
      gloss: "worship a deity"
      source: {kind: coined}
    - form: nemtar
      class: n
      field: Ordinary usage
      gloss: "a tax assessed by a ruler"
      source: {kind: coined}
    - form: pelten
      class: n
      field: Ordinary usage
      gloss: "a receipt recording payment"
      source: {kind: coined}
    - {form: vimher, class: n, field: Ordinary usage, gloss: "a shrine", source: {kind: coined}}
    - form: narhet
      class: n
      field: Ordinary usage
      gloss: "a court, its assembly or place of hearing"
      source: {kind: coined}
    - form: dimhet
      class: n
      field: Ordinary usage
      gloss: "a city's residential quarter"
      source: {kind: coined}
    - {form: tenvar, class: n, field: Ordinary usage, gloss: "a shelf", source: {kind: coined}}
    - form: tenesh
      class: n
      field: Ordinary usage
      gloss: "a written sign or emblem"
      source: {kind: coined}
    - form: varhil
      class: n
      field: Ordinary usage
      gloss: "the bark of a tree"
      source: {kind: coined}
    - form: varhur
      class: n
      field: Ordinary usage
      gloss: "a carrying pole or staff"
      source: {kind: coined}
    - form: narshel
      class: n
      field: Ordinary usage
      gloss: "a finding in a legal case"
      source: {kind: coined}
    - {form: nemhelun, class: n, field: Ordinary usage, gloss: "a tithe", source: {kind: coined}}
    - form: kargen
      class: v
      field: Ordinary usage
      gloss: "dig or excavate earth"
      source: {kind: coined}
    - form: nilbar
      class: n
      field: Ordinary usage
      gloss: "a grave pit or trench"
      source: {kind: coined}
    - form: hurshel
      class: n
      field: Ordinary usage
      gloss: "a payment or price"
      source: {kind: coined}
    - form: karsen
      class: n
      field: Ordinary usage
      gloss: "a seal authenticating a command or record"
      source: {kind: coined}
    - {form: neltar, class: n, field: Ordinary usage, gloss: "a waterskin", source: {kind: coined}}
    - form: ternesh
      class: n
      field: Ordinary usage
      gloss: "a step in a stair"
      source: {kind: coined}
    - form: henbar
      class: n
      field: Ordinary usage
      gloss: "mortar binding masonry"
      source: {kind: coined}
    - {form: hernur, class: n, field: Ordinary usage, gloss: "a cellar", source: {kind: coined}}
    - {form: nilhem, class: n, field: Ordinary usage, gloss: "a funeral", source: {kind: coined}}
    - form: virdun
      class: n
      field: Ordinary usage
      gloss: "a mile of distance"
      source: {kind: coined}
    - {form: vurnel, class: n, field: Ordinary usage, gloss: "a deity", source: {kind: coined}}
    - {form: bernel, class: n, field: Ordinary usage, gloss: "a promise", source: {kind: coined}}
    - form: nemun
      class: n
      field: Ordinary usage
      gloss: "an hour of time"
      source: {kind: coined}
    - form: helun
      class: n
      field: Ordinary usage
      gloss: "light or illumination"
      source: {kind: coined}
  register:
    - {name: Atarzád, tongue: faith}
    - {name: Ahurdaen, tongue: faith}
    - {name: Tellumi Language, tongue: gloss, built: [Tellumi]}
    - {name: Tellumi, tongue: tellumi, built: [te, lu, -mi]}
    - {name: Khazryn Lexicon, tongue: gloss, built: [Khazryn]}
    - {name: Khazryn Word List, tongue: gloss, built: [Khazryn]}
    - {name: Tellumi Adventurer's Guide, tongue: gloss, built: [Tellumi]}
    - {name: Khazryn Desert Region, tongue: gloss, built: [Khazryn]}
    - {name: Khazryn Desert, tongue: gloss, built: [Khazryn]}
    - name: Khazryn
      tongue: kept
      why: "the region's name, which stands outside the three tongues"
    - {name: Tellumel, tongue: tellumi, built: [te, lu, -mi, -el]}
    - {name: Dranavár, tongue: khazryn}
    - {name: Tellumi Confederation, tongue: gloss, built: [Tellumi]}
    - {name: Princes of Tellumel, tongue: gloss, built: [Tellumel]}
    - {name: The Tellumi Calendar, tongue: gloss, built: [Tellumi]}
    - {name: Tellumi Calendar, tongue: gloss, built: [Tellumi]}
    - {name: Ashkarad, tongue: older}
    - {name: Kaldar, tongue: older}
    - {name: Desert of Hek'ar, tongue: older}
    - {name: Kethramír, tongue: older}
    - {name: Mernagord, tongue: older}
    - {name: Mount Shofar, tongue: older}
    - {name: Mt. Shofar, tongue: older}
    - {name: Beit-Shofár, tongue: older}
    - {name: Oasis of Shirvan, tongue: older}
    - {name: Ruins of Arkor, tongue: older}
    - {name: Ushtra-ber, tongue: older}
    - {name: Vahurdash, tongue: older}
    - {name: Zargandur, tongue: older}
    - {name: Afzandah Parnazar, tongue: older}
    - {name: Bazudar Shahrun, tongue: older}
    - {name: Kamid Khavandar, tongue: older}
    - {name: Kayvonad Zarid, tongue: older}
    - {name: Kharanah Khafur, tongue: older}
    - {name: Nari Sahravan, tongue: older}
    - {name: Nushir Narsafi, tongue: older}
    - {name: Razanash Mervaran, tongue: older}
    - {name: Sharminah Tahvan, tongue: older}
    - {name: Zevarad Dathvarun, tongue: older}
    - {name: Henhutpedin, tongue: tellumi, built: [henhut, pedin]}
    - {name: The Blood-field of the Breaking, tongue: gloss, built: [Henhutpedin]}
    - {name: Veshkun, tongue: tellumi, built: [veshkun]}
    - {name: The Lost Town, tongue: gloss, built: [Veshkun]}
    - {name: Vurdish, tongue: tellumi, built: [vurdish]}
    - {name: The Way Down, tongue: gloss, built: [Vurdish]}
    - {name: Ruins and Labyrinths of the Grazian Mountains, tongue: gloss, built: [Vurdish]}
    - {name: The Forgotten Caverns, tongue: gloss, built: [Vurdish]}
    - {name: The League of Princely Houses, tongue: gloss}
    - {name: The Desert Mystic, tongue: gloss}
    - {name: The Flame-born, tongue: gloss}
    - {name: The Twelve Tribes, tongue: gloss}
    - {name: The Twelve Years, tongue: gloss}
    - {name: Azardan, tongue: older}
    - {name: Durmand, tongue: older}
    - {name: Sahri, tongue: older}
    - {name: Shirzari, tongue: older}
    - {name: Zarnush, tongue: older}
    - {name: Hidden-Water Bands, tongue: gloss}
    - {name: The Song of the Lost Town, tongue: gloss, built: [Veshkunrelum]}
    - {name: Veshkunrelum, tongue: tellumi, built: [veshkun, relum]}
    - {name: The Coming Down, tongue: gloss, built: [Genbuntsemhat]}
    - {name: Genbuntsemhat, tongue: tellumi, built: [genbun, tsemhat]}
    - {name: The Recitation of the Breaking, tongue: gloss, built: [Turemtsemhat]}
    - {name: Turemtsemhat, tongue: tellumi, built: [turem, tsemhat]}
    - {name: The Nights of the Road, tongue: gloss, built: [Tarlimnurmesh]}
    - {name: Tarlimnurmesh, tongue: tellumi, built: [tarlim, nurmesh]}
    - {name: Veshkunvartun, tongue: tellumi, built: [veshkun, vartun]}
    - {name: The Gate of Veshkun, tongue: gloss, built: [Veshkunvartun]}
    - {name: The Barred Gate, tongue: gloss, built: [Veshkunvartun]}
    - {name: Tashbemsirvesh, tongue: tellumi, built: [tashbem, sirvesh]}
    - {name: The Empty Tower, tongue: gloss, built: [Tashbemsirvesh]}
    - {name: Relvanvesut, tongue: tellumi, built: [relvan, vesut]}
    - {name: Zargandur's Trench, tongue: gloss, built: [Relvanvesut]}
    - {name: The Princes' Bones, tongue: gloss, built: [Relvanvesut]}
    - {name: Relvanninesh, tongue: tellumi, built: [relvan, ninesh]}
    - {name: The Glass Princes' Palace, tongue: gloss, built: [Relvanninesh]}
    - {name: The Palace of Glass, tongue: gloss, built: [Relvanninesh]}
    - {name: Peshdenderat, tongue: tellumi, built: [peshden, derat]}
    - {name: The Dry Well of Shirvan, tongue: gloss, built: [Peshdenderat]}
    - {name: The Dry Well, tongue: gloss, built: [Peshdenderat]}
    - {name: Kenbeshay, tongue: tellumi, built: [kenbesh, -ay]}
    - {name: Priest Kenbeshay, tongue: gloss, built: [Kenbeshay]}
    - {name: Mavesha, tongue: tellumi, built: [mavesh, -a]}
    - {name: Prophet Mavesha, tongue: gloss, built: [Mavesha]}
    - {name: Valsuma, tongue: tellumi, built: [valsum, -a]}
    - {name: High Priestess Valsuma, tongue: gloss, built: [Valsuma]}
    - {name: Pedunay, tongue: tellumi, built: [pedun, -ay]}
    - {name: Bulamun, tongue: tellumi, built: [bulam, -un]}
    - {name: Pedunay Bulamun, tongue: gloss, built: [Pedunay, Bulamun]}
    - {name: Kireshay, tongue: tellumi, built: [kiresh, -ay]}
    - {name: Captain Kireshay, tongue: gloss, built: [Kireshay]}
    - {name: Vurinay, tongue: tellumi, built: [vurin, -ay]}
    - {name: Saint Vurinay the Ascendant, tongue: gloss, built: [Vurinay]}
    - {name: Saint Vurinay, tongue: gloss, built: [Vurinay]}
    - {name: Sunhema, tongue: tellumi, built: [sunhem, -a]}
    - {name: Karvemun, tongue: tellumi, built: [karvem, -un]}
    - {name: Sunhema Karvemun, tongue: gloss, built: [Sunhema, Karvemun]}
    - {name: Merchant Princess Sunhema, tongue: gloss, built: [Sunhema]}
    - {name: Revunay, tongue: tellumi, built: [revun, -ay]}
    - {name: Kishneshun, tongue: tellumi, built: [kishnesh, -un]}
    - {name: Revunay Kishneshun, tongue: gloss, built: [Revunay, Kishneshun]}
    - {name: Duke Revunay, tongue: gloss, built: [Revunay]}
    - {name: Vemuna, tongue: tellumi, built: [vemun, -a]}
    - {name: Tamkerun, tongue: tellumi, built: [tamker, -un]}
    - {name: Vemuna Tamkerun, tongue: gloss, built: [Vemuna, Tamkerun]}
    - {name: High Artisan Vemuna Tamkerun, tongue: gloss, built: [Vemuna, Tamkerun]}
    - {name: High Artisan Vemuna, tongue: gloss, built: [Vemuna]}
  older:
    - {form: Ashkarad}
    - {form: Kaldar}
    - {form: Desert of Hek'ar}
    - {form: Kethramír}
    - {form: Mernagord}
    - {form: Mount Shofar}
    - {form: Mt. Shofar}
    - {form: Beit-Shofár}
    - {form: Oasis of Shirvan}
    - {form: Ruins of Arkor}
    - {form: Ushtra-ber}
    - {form: Vahurdash}
    - {form: Zargandur}
    - {form: Afzandah Parnazar}
    - {form: Bazudar Shahrun}
    - {form: Kamid Khavandar}
    - {form: Kayvonad Zarid}
    - {form: Kharanah Khafur}
    - {form: Nari Sahravan}
    - {form: Nushir Narsafi}
    - {form: Razanash Mervaran}
    - {form: Sharminah Tahvan}
    - {form: Zevarad Dathvarun}
    - {form: Azardan}
    - {form: Durmand}
    - {form: Sahri}
    - {form: Shirzari}
    - {form: Zarnush}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Tellumi (isolate)}}
---

Tellumi is the tongue of the [[lore-khazrynclt|Tellumi]], the old oasis people whose walled cities stand in a narrow belt along the north foot of [[place-graznmntns|the Grazian Mountains]], and it is the tongue of their clay archive. Their own name says where they came from: _Tellumi_ is "the people of the high springs", built from _te_ "high" and _lu_ "spring". Fluency measures the sophistication of expression in the language, from the halting phrases of a traveler to the nuanced discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

The roman inventory includes `o` and `O` for surviving older names such as Mernagord, recorded in the older-name lists below. This does not add an `o` to ordinary Tellumi word formation.

The surviving older-name repertoire also keeps `z` and `Z`, acute `á` and `í` with their capitals, and the straight catch apostrophe, as in Zargandur, Beit-Shofár, Kethramír and Hek'ar. These are recorded older spellings, not additions to ordinary Tellumi word formation.

## How Tellumi sounds

Tellumi is the measured, liquid tongue of the old oasis princes.

**The vowels.** _e_, _u_ and _a_ lead, with _i_. Final _-ay_ is common.

**The consonants.** _l_, _m_, _n_, _r_, _v_, _sh_, _ts_, _h_ and _b_.

**Clusters.** _lm_, _rv_, _sht_, _nt_ and _tsm_ meet inside a word.

**Endings.** Tellumi words end in _-ay_, _-esh_, _-un_, _-em_ or _-hur_. Names end in _-a_ or _-ah_.

**What Tellumi leaves out.** It has no _q_, _gh_ or _zh_, which belong to the desert tongues. It avoids compounds of more than four syllables.

## Sounds

Tellumi is soft and unhurried, with a hush in it. Every syllable opens on a single consonant, and it closes on a sonorant or on a quick stop or hiss, so words end in _-l_, _-m_, _-n_, _-r_, _-t_, _-d_, _-k_, _-s_ or _-sh_. Where two parts of a word meet, the consonant that opens the second doubles, so the doubled _ll_ of _Tellumi_ is the tongue's signature sound. There is no _o_, no _kh_, _gh_ or _zh_, and no _z_, and those are the sounds Tellumi speakers find hardest in [[skill-atarzadilng|Atárzadi]], the tongue of the people who took four of their cities.

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Syllables

```sql
SELECT "Rule", "Forms" FROM (
SELECT 0 AS o, 'Onsets' AS "Rule", CASE onsets WHEN 'single' THEN 'a single consonant' END AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-tellumilng'
UNION ALL
SELECT 1 AS o, 'Codas' AS "Rule", array_to_string(list_transform(codas, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-tellumilng'
UNION ALL
SELECT 2 AS o, 'Finals' AS "Rule", array_to_string(list_transform(finals, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-tellumilng'
UNION ALL
SELECT 3 AS o, 'Doubled' AS "Rule", array_to_string(list_transform(doubled, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-tellumilng'
UNION ALL
SELECT 4 AS o, 'Vowel pairs' AS "Rule", coalesce(nullif(array_to_string(list_transform(vowelPairs, x -> '`' || x || '`'), ' '), ''), 'never') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-tellumilng'
UNION ALL
SELECT 5 AS o, 'Initial vowel' AS "Rule", CASE WHEN initialVowel THEN 'yes' ELSE 'no' END AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-tellumilng'
) ORDER BY o
```

A syllable is a consonant and a vowel, or a consonant, a vowel and one closing consonant. So a word never begins with a vowel, never sets two vowels side by side, and ends either on a vowel or on one of the closings above. Two consonants meet only across a syllable break: _veshkun_ "lost" and _tashbem_ "tower" are sound.

### Stress

Stress falls on the syllable that a doubled consonant opens: te-**LLU**-mi, ten-**NE**-li-mash. A word with no doubled consonant is stressed on its first syllable: **NE**-lim, **TASH**-bem.

## Building words

Every Tellumi word is a stem, two or more stems set together, or a stem with a suffix after it. The stems and their senses are in the [[skill-tellumilng#lexicon|Khazryn Lexicon]]. A modifier comes before what it modifies: _te_ "high" before _lu_ "spring" makes the high spring.

### Joins

```sql
SELECT '`' || meeting || '`' AS "Meeting", '`' || rule || '`' AS "Rule", coalesce(array_to_string(list_transform(letters, x -> '`' || x || '`'), ' '), '') AS "Letters", coalesce("where", 'anywhere') AS "Where"
FROM joins WHERE language = 'thalorna-note-skill-tellumilng' ORDER BY position
```

Two rules work where two parts of a word meet:

- **A stem ending in a vowel doubles the single consonant that opens the next stem.** _te_ "high" and _lu_ "spring" make _tellu_; _te_ and _nelim_ "water" make _tennelim_ "high water". _sh_, _ts_, _h_ and _y_ do not double. A suffix is not a stem, so _tellu_ and _-mi_ make _Tellumi_ with a single _m_.
- **A vowel before a vowel drops.** The suffix _-el_ on _Tellumi_ makes _Tellumel_, the land of the Tellumi, with the _i_ gone.

Every other meeting leaves both parts as they are: _veshkun_ and _-ash_ make _veshkunash_.

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", gloss AS "Sense"
FROM affixes WHERE language = 'thalorna-note-skill-tellumilng' ORDER BY position
```

### Names

A Tellumi name is built in the same few moves as any other word, and it can be read back the same way:

| Name        | Built from                  | Meaning                        |
| ----------- | --------------------------- | ------------------------------ |
| Tellumi     | _te_ + _lu_ + _-mi_         | the people of the high springs |
| Tellumel    | _te_ + _lu_ + _-mi_ + _-el_ | the land of the Tellumi        |
| Tennelimash | _te_ + _nelim_ + _-ash_     | high-water town                |
| Tashbemun   | _tashbem_ + _-un_           | the house of the tower         |
| Vurinay     | _vurin_ + _-ay_             | a man's name: holy             |
| Lisena      | _lisen_ + _-a_              | a woman's name: moon           |

**Places** take _-ash_ for a city or town and _-el_ for a land, after one or two stems that say what the place has: its water, its height, its tower. **Houses** take _-un_ after the stem of a founder's name or the house's emblem. **Given names** take _-ay_ for a man and _-a_ for a woman, after one stem; a second stem in front of it is a mark of an old house.

## Writing

The Tellumi keep their records on baked-clay tablets in a syllabary they brought down from the mountains, and the tablet-keepers of each city can read a tablet two thousand years old. A sign stands for a consonant and its vowel, and a small stroke under a sign marks the closing sonorant, so the script's sign list follows the syllable rules above exactly.

## Everyday speech

Ordinary clauses put the subject first, the verb second and its object third. This sentence order is a separate rule from the older modifier-before-head rule: _miver lasem nelim_, I see water; _tiver hunem narlem_, you hear a voice. Verbs keep the same citation with every person. Nouns likewise keep their citation: _sali ninesh_ means several households, while a numeral supplies an exact count without another plural marker. There is no obligatory article. A modifier still precedes its head: _garmesh ninesh_, a great household.

_Miver_, _tiver_, _hunen_, _hiner_, _hudem_, _diven_ and _mener_ are I, you, he, she, it, they and we, as subject or object. A possession places its head before _nemi_ and its owner: _ninesh nemi miver_, my household; _tenyut nemi nerir nemi miver_, my mother's tablet. The last owner belongs inside the preceding relationship. Body and kin expressions use this same explicit construction; no unstated case or person ending is required.

A description uses _veme_: _nelim veme silmi_, the water is cold. _Ninesh veme_ states that a household exists. _Miver hurem nelim_ means I have water. Negation precedes the predicate or stated quality: _miver nesh lasem nelim_, I do not see water; _nesh laski_, not visible. _Miver hurem nervir_ describes confidence; _hernen_ names settled subjective certainty, and neither asserts that the claim is true. The sensory predicate _serhem_ takes a bodily sensation, while _hurem_ can hold an emotion: _miver hurem hemli_, I feel joy.

The four loves have their own citations. _Parimlumer_ is romantic love for a beloved, _merinlumer_ affectionate friendship, _kishneshlumer_ kin love and _dimenlumer_ selfless love for human beings whether or not they return it. Their ordinary head is _lumer_, affection. _Kirmesh_ is lust, not another name for any of the four. _Miver hurem parimlumer dener parim_ means I feel romantic love toward a beloved; _miver hurem dimenlumer dener dimen_ extends care to people without a kinship or repayment condition.

A content clause begins with _navel_ and ends with _virem_. A relative follows its noun with _shenir_, a complete clause and the same closing word. These boundaries keep a long legal statement readable without a case system. Their worked ordinary utterances follow with the speech and reference vocabulary below. The clay syllabary remains the writing described above; these transcribed examples do not claim an implemented script map or font.

### Body, household and kin

_Miver harsir tiver_ means I hurt you, causing pain. _Miver hurem harsim_ means I hurt, experiencing pain; _miver serhem harsim_ explicitly describes the bodily sensation. _Hiner veme timni_ says she is pregnant, _hiner timber timlan_ that she gives birth to a child, and _hiner samler timlan mibil samlesh_ that she nurses a child with milk. In breathing, _miver hurnem bennil_ is I inhale and _miver hurnem vannil_ I exhale. _Hurlim_ specifically means suffocate through lack of breathable air or blocked breathing; ordinary exertion alone does not assert it.

_Tenlir_ is old in age, while the inherited _teyut_ describes something old or ancient. _Tenmel_ names aging and _tenmer_ the act of growing older. _Melhum_ is bodily fullness after food or drink, not the general completion _temvim_. _Kerlim_ is the palm of a hand; the inherited _talvut_ is the palm tree. _Harsem_ is the chest, _samli_ the breast, _benhum_ the stomach and _timlumar_ the womb. The anatomy words name these parts individually rather than treating one as a gloss for another.

_Namil_ is a parent of either sex and _herim_ a sibling of either sex. _Nerir nemi namil_ is a grandmother, the mother of a parent; _bamden nemi namil_ is a grandfather. _Timlan nemi herim nemi namil nemi miver_ is my cousin, the child of a sibling of my parent. _Varli timlan nemi herim_ and _nirli timlan nemi herim_ name a nephew and niece through either sibling. _Timlan_ can name an offspring after childhood; _varli_ and _nirli_ supply male and female without changing a noun ending. An adult is _kenen_: _varli kenen_ is a man and _nirli kenen_ a woman. No noun-class or gender-agreement table is implied.

The old _ninesh_ remains the household that keeps its tablets. _Nineshher_ is its physical house or home. _Miver hurem tenyut_ means I have a tablet; _miver tsergim tenyut_ says I write a tablet. _Miver revin dener nineshher_ says I return home. The ordinary verb _revin_ does not replace _revun_, the old noun for the recovery of the lost cities.

### Count, degree and comparison

A number or other quantity precedes the unchanged noun: _nin bunem_, two pots; _palem bunem_, many pots; _palem nelim_, much water. _Tavem nemi bunem_ is the number of pots; _tavel nemi nelim_ the amount of water. _Tiver tavim bunem_ means you count pots, and _tiver tavur nelim mibil nelbar_ you measure water with a cup. _Nul_ states none of the relevant kind, while _tul_ is the number zero. _Dimel_ selects each member individually; _dimal_ includes the entire set and also supplies every.

_Nire_ before a cardinal makes a numbered-position modifier: _nire nin bunem_ is the second pot, _nire tes bunem_ the third and _nire nivun bunem_ the seventh. The same construction uses _nire har_ for fourth or _nire hemut_ for hundredth. The older _kenbesh_ remains first or eldest. _Ninser_ and _harser_ name one of two or four equal shares. _Dimal nin_ takes both of a pair, _pel vanel nin_ either member and _nul vanel nin_ neither.

A comparison places its standard after _nali_. _Heri nelim veme palen nali huri nelim_ means this water is more in amount than that water. _Heri her veme palen tarli nali huri her_ means this building is longer than that building. Here _palen_ increases the degree of the named quality; with a counted or measured kind it increases quantity. _Neven_ decreases it. _Heri her veme palen tarli nali dimal nedim her_ makes this building the longest, explicitly excluding itself from the other buildings. _Samir_ states equality of the quantity or quality, while _samnil_ states identity.

_Narli_, _narnir_ and _tsemir_ before a number give approximation, almost reaching it and exactness: _narli nidem bunem_, about ten pots; _narnir nidem bunem_, almost ten; _tsemir nidem bunem_, exactly ten. _Marnil_ is enough for the purpose currently being discussed. _Palen nali marnil_ is too much and _neven nali marnil_ too little. A merely modest value is not worthlessness: _heri bunem hurem tul virdem_ means this pot has zero worth in the stated evaluation. _Nesh sunmir_ would merely deny that it is valuable.

### Space and time

Relation words introduce their named reference: _miver veme benu nineshher_, I am inside the house; _miver veme semel vartem_, beside the door; _miver veme terem vartem lemir perim_, between the door and the hearth. _Dimer_ is among a group. _Nurel_ claims contact with a supporting surface; _hemun_ only says above or over it. _Fermil_ is in front in space, while _hamin_ is earlier in time. _Ferul_ is far away, not late.

Time words identify an ordinary event without inflecting its verb. _Gabenir miver lasem tiver_ says I saw you yesterday; _gabenur miver venem_ says I will come tomorrow. _Heri gaben_ is today. _Miver venem hamin hushem_ is I come before the rain; _miver hagen yernel hushem_ I remain from the rain onward, and _miver hinver yermir hushem_ I wait until the rain. _Miver hager bunem yernem tiver narem_ means I hold the pot while you speak: the complete simultaneous clause follows _yernem_.

An occasion is a _darem_. _Tarem pel darem_ and _tarem nin darem_ count once and twice; _gerni gerni_ is again and again. _Palem_, _nemil_, _nevim_ and _nul_ in the same occasion construction supply often, sometimes, rarely and never. _Durmel_ and _durmil_ describe long and brief duration; _tarli_ and _tarki_ describe spatial length. _Hageni_ means already, _hagenir_ still and _nemgi_ yet: _miver hageni melir_, I have already eaten; _miver nesh melir nemgi_, I have not eaten yet. These time words do not assert a hidden past or future conjugation.

### Questions, speech and reference

A question leaves the unknown in its ordinary role. _Verin lasem tiver_ asks who sees you; _tiver lasem verum_ what you see. _Virnil bunem veme leril_ asks which pot is good. _Tiver veme tarem verhet_ asks where you are, _tiver venem vermun_ when you come, _tiver geshem danel verum_ why you go, and _tiver geshem peril verum_ for what intended purpose. A cause and an aim are not the same question. _Tiver varter vartem verlim_ asks how you open the door.

_Verum tavem bunem_ asks how many pots, and _verum tavel nelim_ how much water. _Heri bunem veme nemi verin_ asks whose pot this is; _tiver danem bunem dener verin_ to whom you give a pot, and _tiver venem vanel verhet_ from where you come. _Havi_ after a complete ordinary clause requests yes or no: _tiver hurem nelim havi_, do you have water? _Yemi_ affirms, _neshi_ denies, and _nerhum_ asks that unclear speech be repeated or clarified.

_Heri_ and _huri_ precede a nearby and a distant or previously identified noun. _Herin_ and _hurin_ give the plural reference without inflecting the noun. _Miver lasem shernil_ means I see myself; _hiner lasem miver_ she sees me. _Shernil_ always points back to the subject of its own clause.

_Miver narem navel hiner venem virem_ means I say that she comes. _Miver lasem miran shenir hunen hurem tenyut virem_ means I see the person who has a tablet. The subject inside the relative is stated explicitly, and _virem_ closes that clause. The content marker reports what someone says or thinks; it does not make the report true. Direct speech can instead state a speaker and then give their words: _hunen narem. Miver revin._ He speaks: I return. Ordinary punctuation in the common transcription helps a reader, but the Tellumi clay syllabary has no implemented map here, and these examples claim no conversion to native signs.

### Conditions, choice and obligation

_Hushem renver, danuli miver hagen benu nineshher_ means rain happens, therefore I remain inside the house. _Miver hagen danil hushem renver_ gives the reason: I remain because it rains. _Dinel hushem renver, dinir miver hagen_ states if it rains, then I remain. _Dinul hushem renver, dinir miver geshem_ says unless it rains, I go; _dinur_ introduces what happens otherwise. _Damil hushem renver, miver geshem_ is although it rains, I go. _Damel hushem_ says despite the rain, without making a full clause.

_Lemvel miver melir lemur miver nilsher_ offers either eating or drinking. _Lemnul miver melir lemnul miver nilsher_ excludes both. _Lemnin miver melir lemir miver nilsher_ includes both. After a negative clause, _neshir_ continues another negative: _miver nesh melir neshir miver nesh nilsher_, neither do I eat nor drink. _Miver murdem lenvir tiver venem lemur tiver hagen_ considers whether you come or remain. The clause boundaries and repeated subjects keep the alternatives explicit.

_Miver gaven geshem_ is I can go, an ability. _Miver hesir geshem_ is I may go, a permission. _Merni hunen venem_ means he might come, asserting a possibility rather than a permit. _Miver damer geshem_ requires me to go. _Miver damer nesh geshem_ requires me not to go, while _miver nesh damer geshem_ says I am not required to go. _Miver damher geshem_ advises that I ought to go.

_Miver hesver tiver geshem_ grants you permission to go; _miver neshver tiver geshem_ prohibits you from going. These two verbs take the person, then the named action. _Miver veme lirun_ says I am free to act; _miver veme hannes_ says my action is constrained. Being _hesni_ for one act does not assert general freedom. _Nemni_ and _nesh nemni_ distinguish willingness from unwillingness, and _ferili_ and _feruni_ distinguish intended from accidental action. None supplies a new inflected mood.

### Calling and courtesy

The established _lirun gaben_, a free day, remains the greeting. _Leril tarlim_, a good road, is the parting wish, and _venem neyin_, come, guest, welcomes someone. Ordinary invariant verbs can be direct calls with the addressed person understood: _hulim_, listen; _lashem_, look; _hinver_, wait; _helmer_, help; _telnir_, stop. _Narem hurlem_ is the cited loud-voice expression, shout; _hushmer_ instead uses an unvoiced whisper.

_Mibil nimvar_, with humility, makes a request courteous. _Miver narsher_ asks for attention; _miver danver tiver_ thanks the hearer and _nesh dushmen_, no debt, answers the thanks. _Miver hurem remhel_ expresses regret and _tiver mirver miver_ asks forgiveness. _Nul diram_, no degree at all, is an emphatic negative reply. _Tiver menir verum_ asks what you mean, and _tiver narem hudem verlim_ how you say it. _Yumesh nemi heri denem veme verum_ asks what this thing is called. These are complete ordinary utterances, not instructions to add an unlisted person ending.

### Ordinary word-hoard

The ordinary citations below include every category of the Core Vocabulary. An inherited element can still stand as a free word; a proper name and a bound suffix are not counted as substitutes for an ordinary citation. Spaces in an expression keep separate words: the stem-joining rules apply when a compound is written as one word, not across an ordinary sentence. No new suffix, case system or tonal distinction is required by these entries.

```sql
SELECT field AS "Field", form AS "Form", class AS "Class", gloss AS "Meaning"
FROM words
WHERE language = 'thalorna-note-skill-tellumilng' AND split_part(class, ' ', 1) NOT IN ('name', 'stem', 'pref')
ORDER BY position
```

## Tellumi Lexicon {#lexicon}

This is the word-hoard of the three tongues of the [[place-khzryndsrtrgn|Khazryn Desert Region]]: every stem each tongue is known to use, what it means, and the names built from them. It is laid out for use at the table. A name needed in play can be built from it in a minute, and a word met in play can be taken apart and read.

The three tongues sound nothing alike, and every stem carries sounds that only its own tongue allows:

- Tellumi, the tongue of the old oasis cities at the foot of the Grazian Mountains, is soft and hushed: _sh_ and _ts_, syllables closing on a sonorant or a quick stop, any single consonant doubled where two stems meet, no _o_ and no marks. _Tellumi_, _Tennelimash_, _Tashbemun_.

- [[skill-sowideslng|Sovidur]], the tongue of the steppe tribes, keeps two voices: every stem takes its vowels from a back group (_a_, _o_, _u_) or a front group (_e_, _ö_, _ü_), with a throaty _q_ and _gh_ in the back stems and a lighter _k_ and _g_ in the front, long vowels written double, and no word opening on _r_. _Orkunoq_, _Koduyur_, _Diqraqor_.

- [[skill-atarzadilng|Atárzadi]], the tongue of the twelve tribes who took four of the Tellumi cities, is harsh and long-voweled: _kh_, _gh_, _sh_ and _zh_, long vowels, and every word closed by a consonant. _Zhoqarod_, _Shekhulez_, _Gherosor_.

Each language note sets out its tongue's sounds, its syllables, how its parts join and the suffixes names use. Each language page holds its tongue's stems, what has been built on them, and the register of the names the setting gives in that tongue; this page also holds the names that belong to none of the three.

### Required senses

Every tongue has a stem for each of these: `water` `well` `road` `sand` `salt` `horse` `camel` `kin` `guest` `debt` `passage` `sky` `wind` `tower` `city` `mountain` `dead` `north` `south` `east` `west`.

They are the words a traveler in the Khazryn needs first, and the words most names in the region are built from.

### How a name is made

A name is a stem, two stems set together, or a stem with a suffix after it, joined by its tongue's rules. In Tellumi, _te_ "high" and _lu_ "spring" make _tellu_, because a stem ending in a vowel doubles the sonorant that opens the next stem, and the people suffix _-mi_ makes _Tellumi_. In Sovidur, _orkun_ "paramount chief" and the union suffix _-oq_ make _Orkunoq_; a front stem such as _kodu_ "horse" takes the front form of a suffix, so _kodu_ and the people suffix _-ur_ make _Koduyur_. In Atárzadi, _zhoqar_ "war" and the tribe suffix _-od_ make _Zhoqarod_, "the sons of war".

A word no table lists is still good in its tongue if it is a listed stem through that tongue's joins and suffixes. A meaning no stem covers needs a new stem, and a new stem is added here, with its sense, before any name uses it. No stem is a word of any language outside the setting.

### Stems

```sql
SELECT '`' || form || '`' AS "Stem", sense AS "Sense"
FROM elements WHERE language = 'thalorna-note-skill-tellumilng' ORDER BY position
```

### Derived words

Worked names and words, each built from the stems above.

```sql
SELECT form AS "Word", '`' || 'tellumi' || '`' AS "Tongue", gloss AS "Gloss", array_to_string(list_transform(built, x -> '`' || x || '`'), ' + ') AS "Derivation"
FROM words WHERE language = 'thalorna-note-skill-tellumilng' AND field = 'Derived words' ORDER BY position
```

### Names older than the rules

The setting's names of places, peoples and persons are older than the three tongues' rules, and a name keeps its shape however the rules read. Only vocabulary (titles, offices, ranks and common terms) is held to them. A register row tagged `older` names a note whose name stands here.

```sql
SELECT form AS "Name", 'a name' AS "Kind"
FROM older WHERE language = 'thalorna-note-skill-tellumilng' ORDER BY position
```

### Scope

The register below holds every name of every note in the region. A note is in the region when one of these values names it:

```sql
SELECT CASE kind WHEN 'folders' THEN 'folder' WHEN 'cultures' THEN 'culture' WHEN 'lore' THEN 'lore' WHEN 'parents' THEN 'parent' ELSE 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind = 'addresses' THEN regexp_replace(value, '^thalorna-note-', '') ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-tellumilng'
GROUP BY kind ORDER BY CASE kind WHEN 'folders' THEN 0 WHEN 'cultures' THEN 1 WHEN 'lore' THEN 2 WHEN 'parents' THEN 3 ELSE 4 END
```

The three language notes are in it as well.

### Attested names

Every name of every note in the region stands in the register of the tongue it belongs to, with the note it names and its tag. A name in one of the three tongues carries its derivation.

```sql
SELECT name AS "Name", coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|]]'), ', '), '—') AS "Address", '`' || tongue || '`' AS "Language",
       CASE WHEN why IS NOT NULL THEN why
            WHEN tongue = 'older' THEN 'a name older than the rules'
            WHEN tongue = 'gloss' THEN CASE WHEN built IS NULL THEN '—' ELSE 'a glossed name on ' || array_to_string(list_transform(built, x -> '`' || x || '`'), ' and ') END
            WHEN built IS NOT NULL THEN array_to_string(list_transform(built, x -> '`' || x || '`'), ' + ')
            ELSE '—' END AS "Derivation"
FROM register WHERE language = 'thalorna-note-skill-tellumilng' ORDER BY position
```

#### Language tags

```sql
SELECT tag AS "Tag", meaning AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-tellumilng' ORDER BY position
```
