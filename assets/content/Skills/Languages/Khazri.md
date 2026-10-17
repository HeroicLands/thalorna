---
shortcode: khazrilng
name: {full: Tellumi Language, aliases: []}
type: skill
subType: language
description: "The measured, liquid tongue of the Tellumi, the old oasis people at the foot of the Grazian Mountains."
tags: []
data:
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
      language: skill-khazrilng
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
    addresses: [skill-khazrilng, skill-sowideslng, skill-atarzadilng]
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
  fields:
    - name: Derived words
      holds: "The names and words built from the stems, each with the pieces it is made of."
    - name: "The household and its record"
      holds: "The household, its tablets, the names they record and the recitation of them."
    - {name: "Law, oath and debt", holds: "Law and custom, the oath and the debt."}
    - {name: "Exile and the return", holds: "The exile houses and the return they work for."}
    - name: "Day, greeting and the dead"
      holds: "The day, the free day of the greeting, and the dead."
  words:
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
    - {form: "dushmen", class: "n", field: "Law, oath and debt", gloss: "Debt", built: ["dushmen"]}
    - form: "gaben"
      class: "n"
      field: "Day, greeting and the dead"
      gloss: 'Day; in _lirun gaben_, "a free day", a greeting'
      built: ["gaben"]
    - form: "lirun"
      class: "adj"
      field: "Day, greeting and the dead"
      gloss: 'Free; in _lirun gaben_, "a free day", a greeting'
      built: ["lirun"]
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
  register:
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

Tellumi Language is the tongue of the [[lore-khazrynclt|Tellumi]], the old oasis people whose walled cities stand in a narrow belt along the north foot of [[place-graznmntns|The Grazian Mountains]], and it is the tongue of their clay archive. Their own name says where they came from: _Tellumi_ is "the people of the high springs", built from _te_ "high" and _lu_ "spring". Fluency measures the sophistication of expression in the language, from the halting phrases of a traveler to the nuanced discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## How Tellumi sounds

Tellumi is the measured, liquid tongue of the old oasis princes.

**The vowels.** _e_, _u_ and _a_ lead, with _i_. Final _-ay_ is common.

**The consonants.** _l_, _m_, _n_, _r_, _v_, _sh_, _ts_, _h_ and _b_.

**Clusters.** _lm_, _rv_, _sht_, _nt_ and _tsm_ meet inside a word.

**Endings.** Tellumi words end in _-ay_, _-esh_, _-un_, _-em_ or _-hur_. Names end in _-a_ or _-ah_.

**What Tellumi leaves out.** It has no _q_, _gh_ or _zh_, which belong to the desert tongues. It avoids compounds of more than four syllables.

## Sounds

Tellumi is soft and unhurried, with a hush in it. Every syllable opens on a single consonant, and it closes on a sonorant or on a quick stop or hiss, so words end in _-l_, _-m_, _-n_, _-r_, _-t_, _-d_, _-k_, _-s_ or _-sh_. Where two parts of a word meet, the consonant that opens the second doubles, so the doubled _ll_ of _Tellumi_ is the tongue's signature sound. There is no _o_, no _kh_, _gh_ or _zh_, and no _z_, and those are the sounds Tellumi speakers find hardest in [[skill-atarzadilng|Atárzadi Language]], the tongue of the people who took four of their cities.

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Syllables

```sql
SELECT "Rule", "Forms" FROM (
SELECT 0 AS o, 'Onsets' AS "Rule", CASE onsets WHEN 'single' THEN 'a single consonant' END AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-khazrilng'
UNION ALL
SELECT 1 AS o, 'Codas' AS "Rule", array_to_string(list_transform(codas, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-khazrilng'
UNION ALL
SELECT 2 AS o, 'Finals' AS "Rule", array_to_string(list_transform(finals, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-khazrilng'
UNION ALL
SELECT 3 AS o, 'Doubled' AS "Rule", array_to_string(list_transform(doubled, x -> '`' || x || '`'), ' ') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-khazrilng'
UNION ALL
SELECT 4 AS o, 'Vowel pairs' AS "Rule", coalesce(nullif(array_to_string(list_transform(vowelPairs, x -> '`' || x || '`'), ' '), ''), 'never') AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-khazrilng'
UNION ALL
SELECT 5 AS o, 'Initial vowel' AS "Rule", CASE WHEN initialVowel THEN 'yes' ELSE 'no' END AS "Forms" FROM syllables WHERE language = 'thalorna-note-skill-khazrilng'
) ORDER BY o
```

A syllable is a consonant and a vowel, or a consonant, a vowel and one closing consonant. So a word never begins with a vowel, never sets two vowels side by side, and ends either on a vowel or on one of the closings above. Two consonants meet only across a syllable break: _veshkun_ "lost" and _tashbem_ "tower" are sound.

### Stress

Stress falls on the syllable that a doubled consonant opens: te-**LLU**-mi, ten-**NE**-li-mash. A word with no doubled consonant is stressed on its first syllable: **NE**-lim, **TASH**-bem.

## Building words

Every Tellumi word is a stem, two or more stems set together, or a stem with a suffix after it. The stems and their senses are in the [[skill-khazrilng#lexicon|Khazryn Lexicon]]. A modifier comes before what it modifies: _te_ "high" before _lu_ "spring" makes the high spring.

### Joins

```sql
SELECT '`' || meeting || '`' AS "Meeting", '`' || rule || '`' AS "Rule", coalesce(array_to_string(list_transform(letters, x -> '`' || x || '`'), ' '), '') AS "Letters", coalesce("where", 'anywhere') AS "Where"
FROM joins WHERE language = 'thalorna-note-skill-khazrilng' ORDER BY position
```

Two rules work where two parts of a word meet:

- **A stem ending in a vowel doubles the single consonant that opens the next stem.** _te_ "high" and _lu_ "spring" make _tellu_; _te_ and _nelim_ "water" make _tennelim_ "high water". _sh_, _ts_, _h_ and _y_ do not double. A suffix is not a stem, so _tellu_ and _-mi_ make _Tellumi_ with a single _m_.
- **A vowel before a vowel drops.** The suffix _-el_ on _Tellumi_ makes _Tellumel_, the land of the Tellumi, with the _i_ gone.

Every other meeting leaves both parts as they are: _veshkun_ and _-ash_ make _veshkunash_.

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", gloss AS "Sense"
FROM affixes WHERE language = 'thalorna-note-skill-khazrilng' ORDER BY position
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

## Tellumi Lexicon {#lexicon}

This is the word-hoard of the three tongues of the [[place-khzryndsrtrgn|Khazryn Desert Region]]: every stem each tongue is known to use, what it means, and the names built from them. It is laid out for use at the table. A name needed in play can be built from it in a minute, and a word met in play can be taken apart and read.

The three tongues sound nothing alike, and every stem carries sounds that only its own tongue allows:

Tellumi, the tongue of the old oasis cities at the foot of the Grazian Mountains, is soft and hushed
: _sh_ and _ts_, syllables closing on a sonorant or a quick stop, any single consonant doubled where two stems meet, no _o_ and no marks. _Tellumi_, _Tennelimash_, _Tashbemun_.

[[skill-sowideslng|Sovidur Language]], the tongue of the steppe tribes, keeps two voices
: every stem takes its vowels from a back group (_a_, _o_, _u_) or a front group (_e_, _ö_, _ü_), with a throaty _q_ and _gh_ in the back stems and a lighter _k_ and _g_ in the front, long vowels written double, and no word opening on _r_. _Orkunoq_, _Koduyur_, _Diqraqor_.

[[skill-atarzadilng|Atárzadi]], the tongue of the twelve tribes who took four of the Tellumi cities, is harsh and long-voweled
: _kh_, _gh_, _sh_ and _zh_, long vowels, and every word closed by a consonant. _Zhoqarod_, _Shekhulez_, _Gherosor_.

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
FROM elements WHERE language = 'thalorna-note-skill-khazrilng' ORDER BY position
```

### Derived words

Worked names and words, each built from the stems above.

```sql
SELECT form AS "Word", '`' || 'tellumi' || '`' AS "Tongue", gloss AS "Gloss", array_to_string(list_transform(built, x -> '`' || x || '`'), ' + ') AS "Derivation"
FROM words WHERE language = 'thalorna-note-skill-khazrilng' AND field = 'Derived words' ORDER BY position
```

### Names older than the rules

The setting's names of places, peoples and persons are older than the three tongues' rules, and a name keeps its shape however the rules read. Only vocabulary (titles, offices, ranks and common terms) is held to them. A register row tagged `older` names a note whose name stands here.

```sql
SELECT form AS "Name", 'a name' AS "Kind"
FROM older WHERE language = 'thalorna-note-skill-khazrilng' ORDER BY position
```

### Scope

The register below holds every name of every note in the region. A note is in the region when one of these values names it:

```sql
SELECT CASE kind WHEN 'folders' THEN 'folder' WHEN 'cultures' THEN 'culture' WHEN 'lore' THEN 'lore' WHEN 'parents' THEN 'parent' ELSE 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind = 'addresses' THEN regexp_replace(value, '^thalorna-note-', '') ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-khazrilng'
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
FROM register WHERE language = 'thalorna-note-skill-khazrilng' ORDER BY position
```

#### Language tags

```sql
SELECT tag AS "Tag", meaning AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-khazrilng' ORDER BY position
```
