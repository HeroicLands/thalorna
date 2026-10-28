---
shortcode: tokchilng
name: {full: Tokchili Language, tokc: [tokchili]}
type: skill
subType: language
description: "The unwritten tongue of the One Fire, spoken in the mound towns of the great river and, with a salt accent, on the shell islands of the gulf coast."
tags: []
data:
  roman: "abcefhiklmnopstuwyáéíóú0123456789()–-"
  core: true
  abbreviation: Tok.
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  fields:
    - name: "Fire, maize and mound"
      holds: "The fire every town keeps, the maize that feeds it, and the earth the towns carry up into mounds."
    - name: Rank and office
      holds: "The standings of the One Fire, from captive to Sun, and the words its offices are built from."
    - name: The stone game and war
      holds: "The rolling-stone game, the falcon dancers and the copper of the war chiefs."
    - {name: The dead, holds: "The words of a Sun's funeral and of those who die with him."}
    - name: The coast
      holds: "Shell, canal and canoe: the words the shell towns of the gulf give the rest of the tongue."
    - {name: Kin and clan, holds: "The beasts the mothers' clans are named for."}
    - name: Everyday speech
      holds: "Ordinary words for the senses, the passions, the body, the household, the land, numbers, time and talk."
  grammar:
    verbs: {replaces: a, persons: {I: ali, you: ishi, heShe: a, we: iko, youAll: achi, they: aki}}
  affixes:
    - form: "-ilo"
      gloss: "one who does it: a doer, a keeper, a carrier"
      attaches: "replaces the final vowel"
      replaces: vowel
      examples: ["hapa > hapilo", "tiwa > tiwilo"]
    - form: "-li"
      gloss: "of it; belonging to it"
      attaches: "added"
      examples: ["tokchi > tokchili", "koyo > koyoli"]
    - form: "-ka"
      gloss: "the state or the thing of it: a noun made from a word"
      attaches: "added"
      examples: ["ilampo > ilampoka", "isapa > isapaka"]
  words:
    - form: osaki
      class: n
      field: "Fire, maize and mound"
      gloss: "maize; the grain that feeds the towns"
      source: {kind: coined}
    - form: hapa
      class: v
      field: "Fire, maize and mound"
      gloss: "to keep; to tend a fire, a field or a grave"
      source: {kind: coined}
    - form: hapilo
      class: n
      field: "Fire, maize and mound"
      gloss: "a keeper; one who tends"
      built: ["hapa", "-ilo"]
      source: {kind: coined}
    - form: tokchili
      class: adj
      field: "Fire, maize and mound"
      gloss: "of the fire; belonging to the One Fire; the speech of its people"
      built: ["tokchi", "-li"]
      source: {kind: coined}
    - form: amoka
      class: n
      field: "Fire, maize and mound"
      gloss: "a load of earth carried to a mound in a basket"
      source: {kind: coined}
    - form: amokilo
      class: n
      field: "Fire, maize and mound"
      gloss: "a basket-carrier; one who carries earth to a mound"
      built: ["amoka", "-ilo"]
      source: {kind: coined}
    - form: tamoli
      class: n
      field: "Rank and office"
      gloss: "a Noble; one of the ranked lineages below the Suns"
      source: {kind: coined}
    - form: amosi
      class: n
      field: "Rank and office"
      gloss: "an Honored; a commoner raised for a deed"
      source: {kind: coined}
    - form: omika
      class: n
      field: "Rank and office"
      gloss: "a commoner; one who owes maize, labor and war"
      source: {kind: coined}
    - form: ilampo
      class: n
      field: "Rank and office"
      gloss: "a captive; one taken in war and owed nothing"
      source: {kind: coined}
    - form: poktimala
      class: n
      field: "Rank and office"
      gloss: "a Mound Chief; the Noble who holds a town from the house on its mound"
      built: ["pokta", "imala"]
      source: {kind: coined}
    - form: tasko
      class: n
      field: "The stone game and war"
      gloss: "copper; the beaten red metal of plates and blades"
      source: {kind: coined}
    - form: kiyo
      class: n
      field: "The stone game and war"
      gloss: "a falcon; the bird of the war dancers"
      source: {kind: coined}
    - form: sakkowa
      class: n
      field: "The stone game and war"
      gloss: "the rolling-stone game, and the yard it is played on"
      source: {kind: coined}
    - form: salaka
      class: v
      field: "The stone game and war"
      gloss: "to dance"
      source: {kind: coined}
    - form: tiwilo
      class: n
      field: "The dead"
      gloss: "one who walks with a dead Sun; a funeral attendant who dies with the Sun"
      built: ["tiwa", "-ilo"]
      source: {kind: coined}
    - form: koyo
      class: n
      field: "The coast"
      gloss: "a shell; the shell of the coast heaps"
      source: {kind: coined}
    - form: koyoli
      class: adj
      field: "The coast"
      gloss: "of the shell; of the coast towns"
      built: ["koyo", "-li"]
      source: {kind: coined}
    - form: wahko
      class: n
      field: "The coast"
      gloss: "a dug canal; a canoe road cut through shell and marsh"
      source: {kind: coined}
    - form: pihko
      class: n
      field: "The coast"
      gloss: "a canoe; a dugout"
      source: {kind: coined}
    - form: hopa
      class: n
      field: "The coast"
      gloss: "a road; a path; a way between towns"
      source: {kind: coined}
    - form: alopa
      class: n
      field: "Kin and clan"
      gloss: "a deer; and the Deer clan"
      source: {kind: coined}
    - form: kalamo
      class: n
      field: "Kin and clan"
      gloss: "a bear; and the Bear clan"
      source: {kind: coined}
    - form: yohaka
      class: n
      field: "Kin and clan"
      gloss: "a panther; and the Panther clan"
      source: {kind: coined}
    - form: hayo
      class: n
      field: Everyday speech
      gloss: "the sun; also a Sun, one of the paramount house"
      concept: "sun"
      source: {kind: coined}
    - form: tokchi
      class: n
      field: Everyday speech
      gloss: "fire"
      concept: "fire"
      source: {kind: coined}
    - form: tokchoma
      class: n
      field: Everyday speech
      gloss: "a flame; a tongue of fire"
      concept: "flame"
      source: {kind: coined}
    - form: aska
      class: num
      field: Everyday speech
      gloss: "one"
      concept: "one"
      source: {kind: coined}
    - form: hokpa
      class: n
      field: Everyday speech
      gloss: "a river; the great river"
      concept: "river"
      source: {kind: coined}
    - form: sakko
      class: n
      field: Everyday speech
      gloss: "a stone; the polished stone of the rolling game"
      concept: ["stone", "rock"]
      source: {kind: coined}
    - form: wiko
      class: n
      field: Everyday speech
      gloss: "water"
      concept: "water"
      source: {kind: coined}
    - form: holaha
      class: n
      field: Everyday speech
      gloss: "sky"
      concept: "sky"
      source: {kind: coined}
    - form: alisa
      class: n
      field: Everyday speech
      gloss: "the moon; a month"
      concept: ["moon", "month"]
      source: {kind: coined}
    - form: fochi
      class: n
      field: Everyday speech
      gloss: "star"
      concept: "star"
      source: {kind: coined}
    - form: yamoki
      class: n
      field: Everyday speech
      gloss: "earth; soil; the ground"
      concept: ["earth", "soil"]
      source: {kind: coined}
    - form: yamasi
      class: n
      field: Everyday speech
      gloss: "land; a country"
      concept: "land"
      source: {kind: coined}
    - form: pokta
      class: n
      field: Everyday speech
      gloss: "a hill; a raised mound of earth"
      concept: "hill"
      source: {kind: coined}
    - form: poktasko
      class: n
      field: Everyday speech
      gloss: "a mountain; literally a great mound"
      concept: "mountain"
      built: ["pokta", "hasko"]
      source: {kind: coined}
    - form: omasi
      class: n
      field: Everyday speech
      gloss: "rain"
      concept: "rain"
      source: {kind: coined}
    - form: hoyali
      class: n
      field: Everyday speech
      gloss: "wind"
      concept: "wind"
      source: {kind: coined}
    - form: tikpola
      class: n
      field: Everyday speech
      gloss: "thunder"
      concept: "thunder"
      source: {kind: coined}
    - form: tikpoli
      class: n
      field: Everyday speech
      gloss: "lightning"
      concept: "lightning"
      source: {kind: coined}
    - form: hoyaska
      class: n
      field: Everyday speech
      gloss: "storm"
      concept: "storm"
      source: {kind: coined}
    - form: itako
      class: n
      field: Everyday speech
      gloss: "tree"
      concept: "tree"
      source: {kind: coined}
    - form: itakoki
      class: n
      field: Everyday speech
      gloss: "forest"
      concept: "forest"
      source: {kind: coined}
    - form: takofa
      class: n
      field: Everyday speech
      gloss: "leaf"
      concept: "leaf"
      source: {kind: coined}
    - form: takoyo
      class: n
      field: Everyday speech
      gloss: "root"
      concept: "root"
      source: {kind: coined}
    - form: kalaso
      class: n
      field: Everyday speech
      gloss: "fish"
      concept: "fish"
      source: {kind: coined}
    - form: tasoki
      class: n
      field: Everyday speech
      gloss: "bird"
      concept: "bird"
      source: {kind: coined}
    - form: nalaki
      class: n
      field: Everyday speech
      gloss: "an animal; a beast"
      concept: ["animal", "beast"]
      source: {kind: coined}
    - form: wikasko
      class: n
      field: Everyday speech
      gloss: "the sea; the great water"
      concept: ["sea", "ocean"]
      built: ["wiko", "hasko"]
      source: {kind: coined}
    - form: wikali
      class: n
      field: Everyday speech
      gloss: "lake"
      concept: "lake"
      source: {kind: coined}
    - form: koyalo
      class: n
      field: Everyday speech
      gloss: "a shore; the shell beach"
      concept: "shore"
      source: {kind: coined}
    - form: koyasa
      class: n
      field: Everyday speech
      gloss: "sand"
      concept: "sand"
      source: {kind: coined}
    - form: ikpa
      class: n
      field: Everyday speech
      gloss: "the head"
      concept: "head"
      source: {kind: coined}
    - form: ikpasi
      class: n
      field: Everyday speech
      gloss: "the hair"
      concept: "hair"
      source: {kind: coined}
    - form: ichalo
      class: n
      field: Everyday speech
      gloss: "the face"
      concept: "face"
      source: {kind: coined}
    - form: chilaki
      class: n
      field: Everyday speech
      gloss: "the eye"
      concept: "eye"
      source: {kind: coined}
    - form: hakfo
      class: n
      field: Everyday speech
      gloss: "the ear"
      concept: "ear"
      source: {kind: coined}
    - form: ambo
      class: n
      field: Everyday speech
      gloss: "the mouth"
      concept: "mouth"
      source: {kind: coined}
    - form: ilachi
      class: n
      field: Everyday speech
      gloss: "the hand"
      concept: "hand"
      source: {kind: coined}
    - form: iyopa
      class: n
      field: Everyday speech
      gloss: "the foot"
      concept: "foot"
      source: {kind: coined}
    - form: chinoko
      class: n
      field: Everyday speech
      gloss: "the heart"
      concept: "heart"
      source: {kind: coined}
    - form: issaka
      class: n
      field: Everyday speech
      gloss: "blood"
      concept: "blood"
      source: {kind: coined}
    - form: fokkalo
      class: n
      field: Everyday speech
      gloss: "the bone"
      concept: "bone"
      source: {kind: coined}
    - form: ilipa
      class: n
      field: Everyday speech
      gloss: "the skin"
      concept: "skin"
      source: {kind: coined}
    - form: hanna
      class: n
      field: Everyday speech
      gloss: "a mother; a mother's sister"
      concept: ["mother", "aunt"]
      source: {kind: coined}
    - form: pawa
      class: n
      field: Everyday speech
      gloss: "father"
      concept: "father"
      source: {kind: coined}
    - form: alosi
      class: n
      field: Everyday speech
      gloss: "child"
      concept: "child"
      source: {kind: coined}
    - form: "alosi nakso"
      class: n
      field: Everyday speech
      gloss: "a son; a male child"
      concept: "son"
      source: {kind: coined}
    - form: "alosi tayo"
      class: n
      field: Everyday speech
      gloss: "a daughter; a female child"
      concept: "daughter"
      source: {kind: coined}
    - form: nakso
      class: n
      field: Everyday speech
      gloss: "a man; a male"
      concept: "man"
      source: {kind: coined}
    - form: tayo
      class: n
      field: Everyday speech
      gloss: "a woman; a female"
      concept: "woman"
      source: {kind: coined}
    - form: honti
      class: n
      field: Everyday speech
      gloss: "a person; a human being"
      concept: ["person", "human", "individual"]
      source: {kind: coined}
    - form: hontaki
      class: n
      field: Everyday speech
      gloss: "people; a people"
      concept: "people"
      source: {kind: coined}
    - form: hoshalo
      class: n
      field: Everyday speech
      gloss: "an elder; old in age"
      concept: ["elder", "old"]
      source: {kind: coined}
    - form: imoka
      class: n
      field: Everyday speech
      gloss: "a clan, counted through the mother"
      concept: "clan"
      source: {kind: coined}
    - form: chiyopa
      class: n
      field: Everyday speech
      gloss: "a family; kin"
      concept: ["family", "kin"]
      source: {kind: coined}
    - form: anoka
      class: n
      field: Everyday speech
      gloss: "an abode; a house; a home"
      concept: "abode"
      source: {kind: coined}
    - form: talko
      class: n
      field: Everyday speech
      gloss: "a town; a community and the fire it keeps"
      concept: "community"
      source: {kind: coined}
    - form: imala
      class: n
      field: Everyday speech
      gloss: "a chief; a head; one who leads"
      concept: ["ruler", "leader"]
      source: {kind: coined}
    - form: ammoli
      class: n
      field: Everyday speech
      gloss: "friend"
      concept: "friend"
      source: {kind: coined}
    - form: hachoko
      class: n
      field: Everyday speech
      gloss: "enemy"
      concept: "enemy"
      source: {kind: coined}
    - form: isaplo
      class: n
      field: Everyday speech
      gloss: "stranger"
      concept: "stranger"
      source: {kind: coined}
    - form: isapla
      class: n
      field: Everyday speech
      gloss: "a guest; a stranger fed at one's fire"
      concept: "guest"
      source: {kind: coined}
    - form: nashiko
      class: n
      field: Everyday speech
      gloss: "war"
      concept: "war"
      source: {kind: coined}
    - form: aloyo
      class: n
      field: Everyday speech
      gloss: "peace"
      concept: "peace"
      source: {kind: coined}
    - form: isapaka
      class: n
      field: Everyday speech
      gloss: "a gift"
      concept: "gift"
      built: ["isapa", "-ka"]
      source: {kind: coined}
    - form: hokpili
      class: n
      field: Everyday speech
      gloss: "a debt; what is owed"
      concept: "debt"
      source: {kind: coined}
    - form: ifoki
      class: n
      field: Everyday speech
      gloss: "a law; a custom; the way a thing has always been done"
      concept: ["law", "custom", "tradition"]
      source: {kind: coined}
    - form: ohalo
      class: n
      field: Everyday speech
      gloss: "honor; the standing others grant"
      concept: "honor"
      source: {kind: coined}
    - form: hochifa
      class: n
      field: Everyday speech
      gloss: "name"
      concept: "name-noun"
      source: {kind: coined}
    - form: ilampoka
      class: n
      field: Everyday speech
      gloss: "captivity"
      concept: "captivity"
      built: ["ilampo", "-ka"]
      source: {kind: coined}
    - form: hosa
      class: num
      field: Everyday speech
      gloss: "two"
      concept: "two"
      source: {kind: coined}
    - form: tachi
      class: num
      field: Everyday speech
      gloss: "three"
      concept: "three"
      source: {kind: coined}
    - form: osko
      class: num
      field: Everyday speech
      gloss: "four"
      concept: "four"
      source: {kind: coined}
    - form: chakpi
      class: num
      field: Everyday speech
      gloss: "five"
      concept: "five"
      source: {kind: coined}
    - form: himpo
      class: num
      field: Everyday speech
      gloss: "six"
      concept: "six"
      source: {kind: coined}
    - form: kaliha
      class: num
      field: Everyday speech
      gloss: "seven"
      concept: "seven"
      source: {kind: coined}
    - form: ponti
      class: num
      field: Everyday speech
      gloss: "eight"
      concept: "eight"
      source: {kind: coined}
    - form: sakali
      class: num
      field: Everyday speech
      gloss: "nine"
      concept: "nine"
      source: {kind: coined}
    - form: lokmi
      class: num
      field: Everyday speech
      gloss: "ten"
      concept: "ten"
      source: {kind: coined}
    - form: "hosa lokmi"
      class: num
      field: Everyday speech
      gloss: "twenty; two tens"
      concept: "twenty"
      source: {kind: coined}
    - form: talchi
      class: num
      field: Everyday speech
      gloss: "a hundred"
      concept: "hundred"
      source: {kind: coined}
    - form: "hasko talchi"
      class: num
      field: Everyday speech
      gloss: "a thousand; a great hundred"
      concept: "thousand"
      source: {kind: coined}
    - form: achala
      class: num
      field: Everyday speech
      gloss: "first"
      concept: ["first", "first-sequence"]
      source: {kind: coined}
    - form: "ayo hosa"
      class: num
      field: Everyday speech
      gloss: "second"
      concept: "second"
      source: {kind: coined}
    - form: "ayo tachi"
      class: num
      field: Everyday speech
      gloss: "third"
      concept: "third"
      source: {kind: coined}
    - form: "ayo osko"
      class: num
      field: Everyday speech
      gloss: "fourth; ayo before a number gives its place in order. Ayo lokmi is tenth."
      concept: "ordinal-construction"
      source: {kind: coined}
    - form: ilko
      class: num
      field: Everyday speech
      gloss: "none; nothing; zero"
      concept: ["none", "zero"]
      source: {kind: coined}
    - form: hokso
      class: num
      field: Everyday speech
      gloss: "many; much"
      concept: ["many", "much"]
      source: {kind: coined}
    - form: chapi
      class: num
      field: Everyday speech
      gloss: "few; little"
      concept: ["few", "little-quantity"]
      source: {kind: coined}
    - form: moma
      class: num
      field: Everyday speech
      gloss: "all; the whole; every"
      concept: ["all", "whole", "every"]
      source: {kind: coined}
    - form: ikasa
      class: num
      field: Everyday speech
      gloss: "half"
      concept: "half"
      source: {kind: coined}
    - form: ama
      class: pron
      field: Everyday speech
      gloss: "I; me"
      concept: "i"
      source: {kind: coined}
    - form: ichi
      class: pron
      field: Everyday speech
      gloss: "you"
      concept: "you-reference"
      source: {kind: coined}
    - form: oma
      class: pron
      field: Everyday speech
      gloss: "he; she; that person"
      concept: ["he", "she"]
      source: {kind: coined}
    - form: omi
      class: pron
      field: Everyday speech
      gloss: "it"
      concept: "it"
      source: {kind: coined}
    - form: amiko
      class: pron
      field: Everyday speech
      gloss: "we; us"
      concept: "we"
      source: {kind: coined}
    - form: omaki
      class: pron
      field: Everyday speech
      gloss: "they; them"
      concept: "they"
      source: {kind: coined}
    - form: amali
      class: pron
      field: Everyday speech
      gloss: "my; mine"
      concept: "my"
      built: ["ama", "-li"]
      source: {kind: coined}
    - form: ichili
      class: pron
      field: Everyday speech
      gloss: "your; yours"
      concept: "your"
      built: ["ichi", "-li"]
      source: {kind: coined}
    - form: amikoli
      class: pron
      field: Everyday speech
      gloss: "our; ours"
      concept: "our"
      built: ["amiko", "-li"]
      source: {kind: coined}
    - form: ina
      class: dem
      field: Everyday speech
      gloss: "this"
      concept: "this"
      source: {kind: coined}
    - form: omo
      class: dem
      field: Everyday speech
      gloss: "that"
      concept: "that"
      source: {kind: coined}
    - form: inaki
      class: dem
      field: Everyday speech
      gloss: "these"
      concept: "these"
      source: {kind: coined}
    - form: omoki
      class: dem
      field: Everyday speech
      gloss: "those"
      concept: "those"
      source: {kind: coined}
    - form: ilaho
      class: pron
      field: Everyday speech
      gloss: "oneself; the self"
      concept: "self"
      source: {kind: coined}
    - form: olto
      class: part
      field: Everyday speech
      gloss: "not; follows the word it denies"
      concept: "not"
      source: {kind: coined}
    - form: olta
      class: call
      field: Everyday speech
      gloss: "no"
      concept: "no"
      source: {kind: coined}
    - form: hoya
      class: call
      field: Everyday speech
      gloss: "yes"
      concept: "yes"
      source: {kind: coined}
    - form: hoka
      class: part
      field: Everyday speech
      gloss: "marks a yes-or-no question at the end of a clause"
      concept: "question-polar"
      source: {kind: coined}
    - form: mako
      class: conj
      field: Everyday speech
      gloss: "and"
      concept: "and"
      source: {kind: coined}
    - form: amba
      class: conj
      field: Everyday speech
      gloss: "but"
      concept: "but"
      source: {kind: coined}
    - form: kamba
      class: conj
      field: Everyday speech
      gloss: "or"
      concept: "or"
      source: {kind: coined}
    - form: hayi
      class: conj
      field: Everyday speech
      gloss: "if"
      concept: "if"
      source: {kind: coined}
    - form: ofali
      class: conj
      field: Everyday speech
      gloss: "because"
      concept: "because"
      source: {kind: coined}
    - form: kosa
      class: part
      field: Everyday speech
      gloss: "who?"
      concept: "question-who"
      source: {kind: coined}
    - form: nako
      class: part
      field: Everyday speech
      gloss: "what?"
      concept: "question-what"
      source: {kind: coined}
    - form: kosako
      class: part
      field: Everyday speech
      gloss: "where?"
      concept: "question-where"
      source: {kind: coined}
    - form: nasiko
      class: part
      field: Everyday speech
      gloss: "when?"
      concept: "question-when"
      source: {kind: coined}
    - form: nasofa
      class: part
      field: Everyday speech
      gloss: "why?"
      concept: "question-why"
      source: {kind: coined}
    - form: kosali
      class: part
      field: Everyday speech
      gloss: "how?"
      concept: "question-how"
      source: {kind: coined}
    - form: "aloyo ichi"
      class: call
      field: Everyday speech
      gloss: "hello; literally peace to you"
      concept: "hello"
      source: {kind: coined}
    - form: "aloyo hopa"
      class: call
      field: Everyday speech
      gloss: "goodbye; literally peace on the road"
      concept: "goodbye"
      source: {kind: coined}
    - form: "ichalo hasko"
      class: call
      field: Everyday speech
      gloss: "thank you; literally great face, said to the one who gave"
      concept: "expression-thank-you"
      source: {kind: coined}
    - form: loka
      class: v
      field: Everyday speech
      gloss: "to see; to look"
      concept: ["see-verb", "look"]
      source: {kind: coined}
    - form: hakfa
      class: v
      field: Everyday speech
      gloss: "to hear"
      concept: "hear-verb"
      source: {kind: coined}
    - form: lapa
      class: v
      field: Everyday speech
      gloss: "to eat"
      concept: "eat"
      source: {kind: coined}
    - form: wika
      class: v
      field: Everyday speech
      gloss: "to drink"
      concept: "drink-verb"
      source: {kind: coined}
    - form: nopa
      class: v
      field: Everyday speech
      gloss: "to sleep"
      concept: "sleep-verb"
      source: {kind: coined}
    - form: aya
      class: v
      field: Everyday speech
      gloss: "to go"
      concept: "go"
      source: {kind: coined}
    - form: ataka
      class: v
      field: Everyday speech
      gloss: "to come"
      concept: "come"
      source: {kind: coined}
    - form: isapa
      class: v
      field: Everyday speech
      gloss: "to give"
      concept: "give"
      source: {kind: coined}
    - form: hochaka
      class: v
      field: Everyday speech
      gloss: "to take"
      concept: "take"
      source: {kind: coined}
    - form: tokpa
      class: v
      field: Everyday speech
      gloss: "to make; to build"
      concept: ["make", "build"]
      source: {kind: coined}
    - form: ompa
      class: v
      field: Everyday speech
      gloss: "to speak; to say"
      concept: ["say", "speak"]
      source: {kind: coined}
    - form: ikla
      class: v
      field: Everyday speech
      gloss: "to know"
      concept: "know"
      source: {kind: coined}
    - form: iloka
      class: v
      field: Everyday speech
      gloss: "to die"
      concept: "die"
      source: {kind: coined}
    - form: hantola
      class: v
      field: Everyday speech
      gloss: "to live"
      concept: "live"
      source: {kind: coined}
    - form: tiwa
      class: v
      field: Everyday speech
      gloss: "to walk; to walk with someone"
      concept: "walk"
      source: {kind: coined}
    - form: wasa
      class: v
      field: Everyday speech
      gloss: "to carry; to bring"
      concept: ["carry", "bring"]
      source: {kind: coined}
    - form: ahila
      class: v
      field: Everyday speech
      gloss: "to kill"
      concept: "kill"
      source: {kind: coined}
    - form: nashika
      class: v
      field: Everyday speech
      gloss: "to fight"
      concept: "fight"
      source: {kind: coined}
    - form: hasko
      class: adj
      field: Everyday speech
      gloss: "big; great"
      concept: "big"
      source: {kind: coined}
    - form: falisi
      class: adj
      field: Everyday speech
      gloss: "new"
      concept: "new"
      source: {kind: coined}
    - form: nalo
      class: n
      field: Everyday speech
      gloss: "a day"
      concept: "day"
      source: {kind: coined}
    - form: oyaki
      class: n
      field: Everyday speech
      gloss: "night"
      concept: "night"
      source: {kind: coined}
    - form: "nalo ina"
      class: adv
      field: Everyday speech
      gloss: "today; literally this day"
      concept: "today"
      source: {kind: coined}
    - form: lenkisa
      class: adv
      field: Everyday speech
      gloss: "yesterday"
      concept: "yesterday"
      source: {kind: coined}
    - form: piti
      class: adv
      field: Everyday speech
      gloss: "tomorrow"
      concept: "tomorrow"
      source: {kind: coined}
    - form: folaki
      class: n
      field: Everyday speech
      gloss: "morning"
      concept: "morning"
      source: {kind: coined}
    - form: samoki
      class: n
      field: Everyday speech
      gloss: "evening"
      concept: "evening"
      source: {kind: coined}
    - form: falimo
      class: n
      field: Everyday speech
      gloss: "a year; one round from New Fire to New Fire"
      concept: "year"
      source: {kind: coined}
    - form: imoli
      class: adj
      field: Everyday speech
      gloss: "good"
      concept: "good"
      source: {kind: coined}
    - form: sakli
      class: adj
      field: Everyday speech
      gloss: "bad"
      concept: "bad"
      source: {kind: coined}
    - form: ikosi
      class: adj
      field: Everyday speech
      gloss: "small"
      concept: "small"
      source: {kind: coined}
    - form: kitessaho
      class: n
      field: Everyday speech
      gloss: "a sight; what is seen"
      concept: "see-noun"
      source: {kind: coined}
    - form: leshi
      class: n
      field: Everyday speech
      gloss: "a sound"
      concept: "hear-noun"
      source: {kind: coined}
    - form: mohta
      class: v
      field: Everyday speech
      gloss: "to smell"
      concept: "smell-verb"
      source: {kind: coined}
    - form: soka
      class: n
      field: Everyday speech
      gloss: "a smell; a scent"
      concept: "smell-noun"
      source: {kind: coined}
    - form: panita
      class: v
      field: Everyday speech
      gloss: "to taste"
      concept: "taste-verb"
      source: {kind: coined}
    - form: kali
      class: n
      field: Everyday speech
      gloss: "a taste; a flavour"
      concept: "taste-noun"
      source: {kind: coined}
    - form: holka
      class: v
      field: Everyday speech
      gloss: "to touch; to feel with the hand"
      concept: "touch-verb"
      source: {kind: coined}
    - form: owa
      class: n
      field: Everyday speech
      gloss: "a touch"
      concept: "touch-noun"
      source: {kind: coined}
    - form: chakopa
      class: v
      field: Everyday speech
      gloss: "to watch; to observe attentively"
      concept: "watch"
      source: {kind: coined}
    - form: nossa
      class: n
      field: Everyday speech
      gloss: "appearance"
      concept: "appearance"
      source: {kind: coined}
    - form: kawake
      class: adj
      field: Everyday speech
      gloss: "visible"
      concept: "visible"
      source: {kind: coined}
    - form: michoho
      class: adj
      field: Everyday speech
      gloss: "invisible"
      concept: "invisible"
      source: {kind: coined}
    - form: hola
      class: v
      field: Everyday speech
      gloss: "to listen"
      concept: "listen"
      source: {kind: coined}
    - form: keha
      class: n
      field: Everyday speech
      gloss: "noise"
      concept: "noise"
      source: {kind: coined}
    - form: chepatto
      class: n
      field: Everyday speech
      gloss: "voice"
      concept: "voice"
      source: {kind: coined}
    - form: wapse
      class: n
      field: Everyday speech
      gloss: "silence"
      concept: "silence"
      source: {kind: coined}
    - form: kapi
      class: adj
      field: Everyday speech
      gloss: "loud"
      concept: "loud"
      source: {kind: coined}
    - form: hokike
      class: adj
      field: Everyday speech
      gloss: "quiet"
      concept: "quiet"
      source: {kind: coined}
    - form: minteshi
      class: adj
      field: Everyday speech
      gloss: "fragrant"
      concept: "fragrant"
      source: {kind: coined}
    - form: nihasti
      class: adj
      field: Everyday speech
      gloss: "foul-smelling; having an unpleasant smell"
      concept: "foul"
      source: {kind: coined}
    - form: alachitte
      class: adj
      field: Everyday speech
      gloss: "sweet"
      concept: "sweet"
      source: {kind: coined}
    - form: hosashino
      class: adj
      field: Everyday speech
      gloss: "sour"
      concept: "sour"
      source: {kind: coined}
    - form: kimmo
      class: adj
      field: Everyday speech
      gloss: "bitter"
      concept: "bitter"
      source: {kind: coined}
    - form: laltako
      class: adj
      field: Everyday speech
      gloss: "salty"
      concept: "salty"
      source: {kind: coined}
    - form: layakowa
      class: v
      field: Everyday speech
      gloss: "to feel a sensation"
      concept: "feel-verb"
      source: {kind: coined}
    - form: piksofacho
      class: n
      field: Everyday speech
      gloss: "sensation"
      concept: "sensation"
      source: {kind: coined}
    - form: lafeno
      class: adj
      field: Everyday speech
      gloss: "smooth"
      concept: "smooth"
      source: {kind: coined}
    - form: osape
      class: adj
      field: Everyday speech
      gloss: "rough"
      concept: "rough"
      source: {kind: coined}
    - form: italki
      class: adj
      field: Everyday speech
      gloss: "soft"
      concept: "soft"
      source: {kind: coined}
    - form: wanolashi
      class: adj
      field: Everyday speech
      gloss: "hard to the touch; firm rather than soft"
      concept: "hard-texture"
      source: {kind: coined}
    - form: haka
      class: v
      field: Everyday speech
      gloss: "to notice"
      concept: "notice"
      source: {kind: coined}
    - form: ika
      class: v
      field: Everyday speech
      gloss: "to perceive"
      concept: "perceive"
      source: {kind: coined}
    - form: tihita
      class: v
      field: Everyday speech
      gloss: "to recognize"
      concept: "recognize"
      source: {kind: coined}
    - form: fapohta
      class: v
      field: Everyday speech
      gloss: "to seem"
      concept: "seem"
      source: {kind: coined}
    - form: chokapi
      class: n
      field: Everyday speech
      gloss: "wrath; intense anger"
      concept: "wrath"
      source: {kind: coined}
    - form: illoti
      class: n
      field: Everyday speech
      gloss: "envy"
      concept: "envy"
      source: {kind: coined}
    - form: kafo
      class: n
      field: Everyday speech
      gloss: "hope"
      concept: "hope"
      source: {kind: coined}
    - form: shelohki
      class: n
      field: Everyday speech
      gloss: "greed"
      concept: "greed"
      source: {kind: coined}
    - form: mopo
      class: n
      field: Everyday speech
      gloss: "boasting"
      concept: "boasting"
      source: {kind: coined}
    - form: ollako
      class: n
      field: Everyday speech
      gloss: "pride"
      concept: "pride"
      source: {kind: coined}
    - form: chancho
      class: n
      field: Everyday speech
      gloss: "lust"
      concept: "lust"
      source: {kind: coined}
    - form: kesa
      class: n
      field: Everyday speech
      gloss: "despair"
      concept: "despair"
      source: {kind: coined}
    - form: chasi
      class: n
      field: Everyday speech
      gloss: "disappointment"
      concept: "disappointment"
      source: {kind: coined}
    - form: kissa
      class: n
      field: Everyday speech
      gloss: "faith"
      concept: "faith"
      source: {kind: coined}
    - form: honahafu
      class: n
      field: Everyday speech
      gloss: "joy"
      concept: "joy"
      source: {kind: coined}
    - form: hecha
      class: n
      field: Everyday speech
      gloss: "happiness"
      concept: "happiness"
      source: {kind: coined}
    - form: hitolki
      class: n
      field: Everyday speech
      gloss: "pleasure"
      concept: "pleasure"
      source: {kind: coined}
    - form: apo
      class: n
      field: Everyday speech
      gloss: "contentment"
      concept: "contentment"
      source: {kind: coined}
    - form: misha
      class: n
      field: Everyday speech
      gloss: "gratitude"
      concept: "gratitude"
      source: {kind: coined}
    - form: tashisa
      class: n
      field: Everyday speech
      gloss: "admiration"
      concept: "admiration"
      source: {kind: coined}
    - form: napi
      class: n
      field: Everyday speech
      gloss: "trust"
      concept: "trust"
      source: {kind: coined}
    - form: nashimo
      class: n
      field: Everyday speech
      gloss: "courage"
      concept: "courage"
      source: {kind: coined}
    - form: poke
      class: n
      field: Everyday speech
      gloss: "anger"
      concept: "anger"
      source: {kind: coined}
    - form: lapaka
      class: n
      field: Everyday speech
      gloss: "hatred"
      concept: "hatred"
      source: {kind: coined}
    - form: hanko
      class: n
      field: Everyday speech
      gloss: "jealousy"
      concept: "jealousy"
      source: {kind: coined}
    - form: akasha
      class: n
      field: Everyday speech
      gloss: "fear"
      concept: "fear"
      source: {kind: coined}
    - form: nipa
      class: n
      field: Everyday speech
      gloss: "terror"
      concept: "terror"
      source: {kind: coined}
    - form: sacha
      class: n
      field: Everyday speech
      gloss: "sadness"
      concept: "sadness"
      source: {kind: coined}
    - form: miha
      class: n
      field: Everyday speech
      gloss: "grief"
      concept: "grief"
      source: {kind: coined}
    - form: tineho
      class: n
      field: Everyday speech
      gloss: "shame"
      concept: "shame"
      source: {kind: coined}
    - form: winti
      class: n
      field: Everyday speech
      gloss: "guilt"
      concept: "guilt"
      source: {kind: coined}
    - form: wilitto
      class: n
      field: Everyday speech
      gloss: "regret"
      concept: "regret"
      source: {kind: coined}
    - form: sillocho
      class: n
      field: Everyday speech
      gloss: "humility"
      concept: "humility"
      source: {kind: coined}
    - form: lahtifi
      class: n
      field: Everyday speech
      gloss: "confidence"
      concept: "confidence"
      source: {kind: coined}
    - form: sostaho
      class: n
      field: Everyday speech
      gloss: "embarrassment"
      concept: "embarrassment"
      source: {kind: coined}
    - form: yasa
      class: n
      field: Everyday speech
      gloss: "compassion"
      concept: "compassion"
      source: {kind: coined}
    - form: kattayo
      class: n
      field: Everyday speech
      gloss: "pity"
      concept: "pity"
      source: {kind: coined}
    - form: sotahtoke
      class: n
      field: Everyday speech
      gloss: "sympathy"
      concept: "sympathy"
      source: {kind: coined}
    - form: lomiha
      class: n
      field: Everyday speech
      gloss: "resentment"
      concept: "resentment"
      source: {kind: coined}
    - form: abo
      class: n
      field: Everyday speech
      gloss: "contempt"
      concept: "contempt"
      source: {kind: coined}
    - form: toshi
      class: n
      field: Everyday speech
      gloss: "forgiveness"
      concept: "forgiveness"
      source: {kind: coined}
    - form: yapako
      class: n
      field: Everyday speech
      gloss: "desire"
      concept: "desire"
      source: {kind: coined}
    - form: yopomi
      class: n
      field: Everyday speech
      gloss: "longing"
      concept: "longing"
      source: {kind: coined}
    - form: yasto
      class: n
      field: Everyday speech
      gloss: "satisfaction (desire fulfilled)"
      concept: "satisfaction"
      source: {kind: coined}
    - form: pinato
      class: n
      field: Everyday speech
      gloss: "frustration"
      concept: "frustration"
      source: {kind: coined}
    - form: shanna
      class: n
      field: Everyday speech
      gloss: "curiosity"
      concept: "curiosity"
      source: {kind: coined}
    - form: shahipi
      class: n
      field: Everyday speech
      gloss: "confusion"
      concept: "confusion"
      source: {kind: coined}
    - form: chikki
      class: n
      field: Everyday speech
      gloss: "doubt"
      concept: "doubt"
      source: {kind: coined}
    - form: simpo
      class: n
      field: Everyday speech
      gloss: "certainty"
      concept: "certainty"
      source: {kind: coined}
    - form: asosa
      class: n
      field: Everyday speech
      gloss: "surprise"
      concept: "surprise"
      source: {kind: coined}
    - form: oto
      class: n
      field: Everyday speech
      gloss: "boredom"
      concept: "boredom"
      source: {kind: coined}
    - form: hasta
      class: n
      field: Everyday speech
      gloss: "anticipation"
      concept: "anticipation"
      source: {kind: coined}
    - form: yomo
      class: n
      field: Everyday speech
      gloss: "belief"
      concept: "belief"
      source: {kind: coined}
    - form: seti
      class: n
      field: Everyday speech
      gloss: "reverence"
      concept: "reverence"
      source: {kind: coined}
    - form: silolto
      class: n
      field: Everyday speech
      gloss: "awe"
      concept: "awe"
      source: {kind: coined}
    - form: tipala
      class: n
      field: Everyday speech
      gloss: "romantic love (eros)"
      concept: "love-eros"
      source: {kind: coined}
    - form: shapomiha
      class: n
      field: Everyday speech
      gloss: "friendship; affectionate regard between friends (philia)"
      concept: "love-philia"
      source: {kind: coined}
    - form: mita
      class: n
      field: Everyday speech
      gloss: "the love of family (storge)"
      concept: "love-storge"
      source: {kind: coined}
    - form: ashotama
      class: n
      field: Everyday speech
      gloss: "selfless, universal love (agape)"
      concept: "love-agape"
      source: {kind: coined}
    - form: heko
      class: n
      field: Everyday speech
      gloss: "affection"
      concept: "affection"
      source: {kind: coined}
    - form: tittashi
      class: n
      field: Everyday speech
      gloss: "attraction"
      concept: "attraction"
      source: {kind: coined}
    - form: tanaki
      class: n
      field: Everyday speech
      gloss: "intimacy"
      concept: "intimacy"
      source: {kind: coined}
    - form: tima
      class: n
      field: Everyday speech
      gloss: "devotion"
      concept: "devotion"
      source: {kind: coined}
    - form: hisu
      class: n
      field: Everyday speech
      gloss: "loyalty"
      concept: "loyalty"
      source: {kind: coined}
    - form: tiho
      class: n
      field: Everyday speech
      gloss: "companionship; being together with a companion"
      concept: "companionship"
      source: {kind: coined}
    - form: palino
      class: n
      field: Everyday speech
      gloss: "enmity"
      concept: "enmity"
      source: {kind: coined}
    - form: apiti
      class: n
      field: Everyday speech
      gloss: "the nose"
      concept: "nose"
      source: {kind: coined}
    - form: kapa
      class: n
      field: Everyday speech
      gloss: "the lip"
      concept: "lip"
      source: {kind: coined}
    - form: wawani
      class: n
      field: Everyday speech
      gloss: "the tooth"
      concept: "tooth"
      source: {kind: coined}
    - form: koppa
      class: n
      field: Everyday speech
      gloss: "the tongue"
      concept: "tongue"
      source: {kind: coined}
    - form: chapas
      class: n
      field: Everyday speech
      gloss: "the neck"
      concept: "neck"
      source: {kind: coined}
    - form: sonko
      class: n
      field: Everyday speech
      gloss: "the shoulder"
      concept: "shoulder"
      source: {kind: coined}
    - form: fopanchi
      class: n
      field: Everyday speech
      gloss: "the arm"
      concept: "arm"
      source: {kind: coined}
    - form: wannifiti
      class: n
      field: Everyday speech
      gloss: "the elbow"
      concept: "elbow"
      source: {kind: coined}
    - form: chopa
      class: n
      field: Everyday speech
      gloss: "the finger"
      concept: "finger"
      source: {kind: coined}
    - form: sohtema
      class: n
      field: Everyday speech
      gloss: "the fingernail"
      concept: "nail"
      source: {kind: coined}
    - form: haksa
      class: n
      field: Everyday speech
      gloss: "the chest"
      concept: "chest"
      source: {kind: coined}
    - form: monnak
      class: n
      field: Everyday speech
      gloss: "the breast"
      concept: "breast"
      source: {kind: coined}
    - form: inchifocho
      class: n
      field: Everyday speech
      gloss: "the belly"
      concept: "belly"
      source: {kind: coined}
    - form: kocha
      class: n
      field: Everyday speech
      gloss: "the back"
      concept: "back"
      source: {kind: coined}
    - form: chalo
      class: n
      field: Everyday speech
      gloss: "the hip"
      concept: "hip"
      source: {kind: coined}
    - form: kikafa
      class: n
      field: Everyday speech
      gloss: "the leg"
      concept: "leg"
      source: {kind: coined}
    - form: pahtipi
      class: n
      field: Everyday speech
      gloss: "the knee"
      concept: "knee"
      source: {kind: coined}
    - form: mopasi
      class: n
      field: Everyday speech
      gloss: "the toe"
      concept: "toe"
      source: {kind: coined}
    - form: apsa
      class: n
      field: Everyday speech
      gloss: "flesh"
      concept: "flesh"
      source: {kind: coined}
    - form: hahki
      class: n
      field: Everyday speech
      gloss: "forehead"
      concept: "forehead"
      source: {kind: coined}
    - form: pimpo
      class: n
      field: Everyday speech
      gloss: "jaw"
      concept: "jaw"
      source: {kind: coined}
    - form: tahohokki
      class: n
      field: Everyday speech
      gloss: "chin"
      concept: "chin"
      source: {kind: coined}
    - form: ihtami
      class: n
      field: Everyday speech
      gloss: "cheek"
      concept: "cheek"
      source: {kind: coined}
    - form: ohtoche
      class: n
      field: Everyday speech
      gloss: "throat"
      concept: "throat"
      source: {kind: coined}
    - form: yankoha
      class: n
      field: Everyday speech
      gloss: "stomach"
      concept: "stomach"
      source: {kind: coined}
    - form: aliho
      class: n
      field: Everyday speech
      gloss: "waist"
      concept: "waist"
      source: {kind: coined}
    - form: hinno
      class: n
      field: Everyday speech
      gloss: "spine"
      concept: "spine"
      source: {kind: coined}
    - form: shekimo
      class: n
      field: Everyday speech
      gloss: "buttock"
      concept: "buttock"
      source: {kind: coined}
    - form: laltala
      class: n
      field: Everyday speech
      gloss: "wrist"
      concept: "wrist"
      source: {kind: coined}
    - form: atohi
      class: n
      field: Everyday speech
      gloss: "palm"
      concept: "palm"
      source: {kind: coined}
    - form: moyo
      class: n
      field: Everyday speech
      gloss: "thumb"
      concept: "thumb"
      source: {kind: coined}
    - form: piwita
      class: n
      field: Everyday speech
      gloss: "thigh"
      concept: "thigh"
      source: {kind: coined}
    - form: bistaya
      class: n
      field: Everyday speech
      gloss: "ankle"
      concept: "ankle"
      source: {kind: coined}
    - form: shicho
      class: n
      field: Everyday speech
      gloss: "heel"
      concept: "heel"
      source: {kind: coined}
    - form: chala
      class: n
      field: Everyday speech
      gloss: "sole"
      concept: "sole"
      source: {kind: coined}
    - form: hawala
      class: n
      field: Everyday speech
      gloss: "toenail"
      concept: "toenail"
      source: {kind: coined}
    - form: kecho
      class: n
      field: Everyday speech
      gloss: "muscle"
      concept: "muscle"
      source: {kind: coined}
    - form: shechok
      class: n
      field: Everyday speech
      gloss: "fat"
      concept: "fat"
      source: {kind: coined}
    - form: hashelta
      class: n
      field: Everyday speech
      gloss: "sweat (noun)"
      concept: "sweat"
      source: {kind: coined}
    - form: fitakihti
      class: n
      field: Everyday speech
      gloss: "tears"
      concept: "tears"
      source: {kind: coined}
    - form: chisopo
      class: n
      field: Everyday speech
      gloss: "saliva"
      concept: "saliva"
      source: {kind: coined}
    - form: moku
      class: n
      field: Everyday speech
      gloss: "brain"
      concept: "brain"
      source: {kind: coined}
    - form: nonapsolo
      class: n
      field: Everyday speech
      gloss: "lung"
      concept: "lung"
      source: {kind: coined}
    - form: pomi
      class: n
      field: Everyday speech
      gloss: "liver"
      concept: "liver"
      source: {kind: coined}
    - form: chama
      class: n
      field: Everyday speech
      gloss: "kidney"
      concept: "kidney"
      source: {kind: coined}
    - form: niki
      class: n
      field: Everyday speech
      gloss: "intestine"
      concept: "intestine"
      source: {kind: coined}
    - form: kattihi
      class: n
      field: Everyday speech
      gloss: "genitals"
      concept: "genitals"
      source: {kind: coined}
    - form: chikeso
      class: n
      field: Everyday speech
      gloss: "womb"
      concept: "womb"
      source: {kind: coined}
    - form: kofohe
      class: n
      field: Everyday speech
      gloss: "penis"
      concept: "penis"
      source: {kind: coined}
    - form: tani
      class: n
      field: Everyday speech
      gloss: "vagina"
      concept: "vagina"
      source: {kind: coined}
    - form: nosho
      class: n
      field: Everyday speech
      gloss: "testicle"
      concept: "testicle"
      source: {kind: coined}
    - form: apeti
      class: n
      field: Everyday speech
      gloss: "food"
      concept: "food"
      source: {kind: coined}
    - form: yakke
      class: n
      field: Everyday speech
      gloss: "a drink"
      concept: "drink-noun"
      source: {kind: coined}
    - form: misa
      class: n
      field: Everyday speech
      gloss: "air"
      concept: "air"
      source: {kind: coined}
    - form: kihifo
      class: n
      field: Everyday speech
      gloss: "breath"
      concept: "breath"
      source: {kind: coined}
    - form: kachaska
      class: v
      field: Everyday speech
      gloss: "to breathe"
      concept: "breathe"
      source: {kind: coined}
    - form: ippibo
      class: n
      field: Everyday speech
      gloss: "sleep"
      concept: "sleep-noun"
      source: {kind: coined}
    - form: nite
      class: n
      field: Everyday speech
      gloss: "urine"
      concept: "urine"
      source: {kind: coined}
    - form: tohkipa
      class: v
      field: Everyday speech
      gloss: "to urinate"
      concept: "urinate"
      source: {kind: coined}
    - form: opachinka
      class: n
      field: Everyday speech
      gloss: "dung"
      concept: "dung"
      source: {kind: coined}
    - form: kilinala
      class: v
      field: Everyday speech
      gloss: "to defecate"
      concept: "defecate"
      source: {kind: coined}
    - form: pasibo
      class: n
      field: Everyday speech
      gloss: "warmth"
      concept: "warmth"
      source: {kind: coined}
    - form: kippana
      class: n
      field: Everyday speech
      gloss: "shelter"
      concept: "shelter"
      source: {kind: coined}
    - form: hipsaki
      class: n
      field: Everyday speech
      gloss: "hunger"
      concept: "hunger"
      source: {kind: coined}
    - form: mepichi
      class: adj
      field: Everyday speech
      gloss: "hungry"
      concept: "hungry"
      source: {kind: coined}
    - form: pikihi
      class: n
      field: Everyday speech
      gloss: "thirst"
      concept: "thirst"
      source: {kind: coined}
    - form: saniko
      class: adj
      field: Everyday speech
      gloss: "thirsty"
      concept: "thirsty"
      source: {kind: coined}
    - form: likoka
      class: v
      field: Everyday speech
      gloss: "to inhale"
      concept: "inhale"
      source: {kind: coined}
    - form: ipa
      class: v
      field: Everyday speech
      gloss: "to exhale"
      concept: "exhale"
      source: {kind: coined}
    - form: bipota
      class: v
      field: Everyday speech
      gloss: "to suffocate"
      concept: "suffocate"
      source: {kind: coined}
    - form: kilaya
      class: v
      field: Everyday speech
      gloss: "to wake"
      concept: "wake"
      source: {kind: coined}
    - form: tolile
      class: adj
      field: Everyday speech
      gloss: "awake"
      concept: "awake"
      source: {kind: coined}
    - form: fafowi
      class: n
      field: Everyday speech
      gloss: "a dream"
      concept: "dream"
      source: {kind: coined}
    - form: mappe
      class: n
      field: Everyday speech
      gloss: "rest (noun)"
      concept: "rest"
      source: {kind: coined}
    - form: kitto
      class: adj
      field: Everyday speech
      gloss: "tired"
      concept: "tired"
      source: {kind: coined}
    - form: kanifa
      class: v
      field: Everyday speech
      gloss: "to sweat"
      concept: "sweat-verb"
      source: {kind: coined}
    - form: solta
      class: n
      field: Everyday speech
      gloss: "heat"
      concept: "heat"
      source: {kind: coined}
    - form: sofo
      class: adj
      field: Everyday speech
      gloss: "cold as a bodily need or temperature condition"
      concept: "cold-noun"
      source: {kind: coined}
    - form: santi
      class: adj
      field: Everyday speech
      gloss: "hot"
      concept: "hot"
      source: {kind: coined}
    - form: loti
      class: adj
      field: Everyday speech
      gloss: "warm"
      concept: "warm"
      source: {kind: coined}
    - form: kishompi
      class: adj
      field: Everyday speech
      gloss: "cool"
      concept: "cool"
      source: {kind: coined}
    - form: hoponka
      class: v
      field: Everyday speech
      gloss: "to freeze"
      concept: "freeze"
      source: {kind: coined}
    - form: ninafa
      class: v
      field: Everyday speech
      gloss: "to burn"
      concept: "burn"
      source: {kind: coined}
    - form: kepsi
      class: n
      field: Everyday speech
      gloss: "safety"
      concept: "safety"
      source: {kind: coined}
    - form: inkoyo
      class: n
      field: Everyday speech
      gloss: "danger"
      concept: "danger"
      source: {kind: coined}
    - form: shata
      class: n
      field: Everyday speech
      gloss: "protection"
      concept: "protection"
      source: {kind: coined}
    - form: ane
      class: n
      field: Everyday speech
      gloss: "sex"
      concept: "sex"
      source: {kind: coined}
    - form: napa
      class: v
      field: Everyday speech
      gloss: "to conceive"
      concept: "conceive"
      source: {kind: coined}
    - form: pifakso
      class: n
      field: Everyday speech
      gloss: "pregnancy"
      concept: "pregnancy"
      source: {kind: coined}
    - form: alke
      class: adj
      field: Everyday speech
      gloss: "pregnant"
      concept: "pregnant"
      source: {kind: coined}
    - form: wishipi
      class: n
      field: Everyday speech
      gloss: "birth"
      concept: "birth"
      source: {kind: coined}
    - form: pottasepa
      class: v
      field: Everyday speech
      gloss: "to give birth"
      concept: "give-birth"
      source: {kind: coined}
    - form: chassa
      class: v
      field: Everyday speech
      gloss: "to nurse a child; to feed a child at the breast"
      concept: "nurse"
      source: {kind: coined}
    - form: teppa
      class: v
      field: Everyday speech
      gloss: "to grow"
      concept: "grow"
      source: {kind: coined}
    - form: lanimpa
      class: v
      field: Everyday speech
      gloss: "to age; to grow older"
      concept: "age-verb"
      source: {kind: coined}
    - form: tanka
      class: n
      field: Everyday speech
      gloss: "death"
      concept: "death"
      source: {kind: coined}
    - form: nifilipo
      class: adj
      field: Everyday speech
      gloss: "dead"
      concept: "dead"
      source: {kind: coined}
    - form: ilolki
      class: adj
      field: Everyday speech
      gloss: "healthy; hale"
      concept: "healthy"
      source: {kind: coined}
    - form: kehti
      class: adj
      field: Everyday speech
      gloss: "sick; ill"
      concept: "sick"
      source: {kind: coined}
    - form: potipi
      class: adj
      field: Everyday speech
      gloss: "injured; wounded"
      concept: "injured"
      source: {kind: coined}
    - form: ako
      class: adj
      field: Everyday speech
      gloss: "strong"
      concept: "strong"
      source: {kind: coined}
    - form: shale
      class: adj
      field: Everyday speech
      gloss: "weak"
      concept: "weak"
      source: {kind: coined}
    - form: shilkome
      class: adj
      field: Everyday speech
      gloss: "exhausted"
      concept: "exhausted"
      source: {kind: coined}
    - form: chopse
      class: adj
      field: Everyday speech
      gloss: "full; satisfied after eating or drinking"
      concept: "sated"
      source: {kind: coined}
    - form: kohahi
      class: adj
      field: Everyday speech
      gloss: "cold in temperature"
      concept: "cold"
      source: {kind: coined}
    - form: nusti
      class: adj
      field: Everyday speech
      gloss: "feverish"
      concept: "feverish"
      source: {kind: coined}
    - form: shampi
      class: n
      field: Everyday speech
      gloss: "pain"
      concept: "pain"
      source: {kind: coined}
    - form: hakoya
      class: v
      field: Everyday speech
      gloss: "to hurt; to cause pain or injury to someone"
      concept: "hurt-verb"
      source: {kind: coined}
    - form: shopsa
      class: v
      field: Everyday speech
      gloss: "to ache"
      concept: "ache"
      source: {kind: coined}
    - form: koka
      class: v
      field: Everyday speech
      gloss: "to suffer"
      concept: "suffer"
      source: {kind: coined}
    - form: opaska
      class: v
      field: Everyday speech
      gloss: "to bleed"
      concept: "bleed"
      source: {kind: coined}
    - form: onasa
      class: v
      field: Everyday speech
      gloss: "to heal"
      concept: "heal"
      source: {kind: coined}
    - form: nentofa
      class: v
      field: Everyday speech
      gloss: "to recover"
      concept: "recover"
      source: {kind: coined}
    - form: tihi
      class: adj
      field: Everyday speech
      gloss: "blind"
      concept: "blind"
      source: {kind: coined}
    - form: pawami
      class: adj
      field: Everyday speech
      gloss: "deaf"
      concept: "deaf"
      source: {kind: coined}
    - form: tohaltato
      class: adj
      field: Everyday speech
      gloss: "lame"
      concept: "lame"
      source: {kind: coined}
    - form: peki
      class: adj
      field: Everyday speech
      gloss: "alive"
      concept: "alive"
      source: {kind: coined}
    - form: onissi
      class: adj
      field: Everyday speech
      gloss: "conscious"
      concept: "conscious"
      source: {kind: coined}
    - form: sonni
      class: adj
      field: Everyday speech
      gloss: "unconscious"
      concept: "unconscious"
      source: {kind: coined}
    - form: chillifi
      class: adj
      field: Everyday speech
      gloss: "young"
      concept: "young"
      source: {kind: coined}
    - form: kollok
      class: n
      field: Everyday speech
      gloss: "aging; growing older"
      concept: "aging"
      source: {kind: coined}
    - form: koksataka
      class: v
      field: Everyday speech
      gloss: "to hurt; to experience bodily pain"
      concept: "hurt-pain"
      source: {kind: coined}
    - form: kisha
      class: n
      field: Everyday speech
      gloss: "parent"
      concept: "parent"
      source: {kind: coined}
    - form: askola
      class: n
      field: Everyday speech
      gloss: "brother"
      concept: "brother"
      source: {kind: coined}
    - form: hapofa
      class: n
      field: Everyday speech
      gloss: "sister"
      concept: "sister"
      source: {kind: coined}
    - form: ami
      class: n
      field: Everyday speech
      gloss: "grandmother"
      concept: "grandmother"
      source: {kind: coined}
    - form: afilipi
      class: n
      field: Everyday speech
      gloss: "grandfather"
      concept: "grandfather"
      source: {kind: coined}
    - form: lasancheti
      class: n
      field: Everyday speech
      gloss: "grandchild"
      concept: "grandchild"
      source: {kind: coined}
    - form: kanki
      class: n
      field: Everyday speech
      gloss: "uncle"
      concept: "uncle"
      source: {kind: coined}
    - form: sopaska
      class: n
      field: Everyday speech
      gloss: "cousin"
      concept: "cousin"
      source: {kind: coined}
    - form: homi
      class: n
      field: Everyday speech
      gloss: "husband"
      concept: "husband"
      source: {kind: coined}
    - form: haloski
      class: n
      field: Everyday speech
      gloss: "wife"
      concept: "wife"
      source: {kind: coined}
    - form: tomme
      class: n
      field: Everyday speech
      gloss: "ancestor"
      concept: "ancestor"
      source: {kind: coined}
    - form: pesika
      class: n
      field: Everyday speech
      gloss: "descendant"
      concept: "descendant"
      source: {kind: coined}
    - form: ilattofo
      class: n
      field: Everyday speech
      gloss: "orphan"
      concept: "orphan"
      source: {kind: coined}
    - form: tafalichi
      class: n
      field: Everyday speech
      gloss: "widow"
      concept: "widow"
      source: {kind: coined}
    - form: ihkaya
      class: n
      field: Everyday speech
      gloss: "grandparent"
      concept: "grandparent"
      source: {kind: coined}
    - form: shita
      class: n
      field: Everyday speech
      gloss: "nephew"
      concept: "nephew"
      source: {kind: coined}
    - form: shaksiha
      class: n
      field: Everyday speech
      gloss: "niece"
      concept: "niece"
      source: {kind: coined}
    - form: chokahi
      class: n
      field: Everyday speech
      gloss: "spouse"
      concept: "spouse"
      source: {kind: coined}
    - form: molkachiko
      class: n
      field: Everyday speech
      gloss: "marriage"
      concept: "marriage"
      source: {kind: coined}
    - form: halisiska
      class: v
      field: Everyday speech
      gloss: "to marry"
      concept: "marry"
      source: {kind: coined}
    - form: sata
      class: n
      field: Everyday speech
      gloss: "lineage"
      concept: "lineage"
      source: {kind: coined}
    - form: pilokso
      class: n
      field: Everyday speech
      gloss: "widower"
      concept: "widower"
      source: {kind: coined}
    - form: hipahta
      class: n
      field: Everyday speech
      gloss: "neighbor"
      concept: "neighbor"
      source: {kind: coined}
    - form: fillopa
      class: n
      field: Everyday speech
      gloss: "companion"
      concept: "companion"
      source: {kind: coined}
    - form: posta
      class: n
      field: Everyday speech
      gloss: "host"
      concept: "host"
      source: {kind: coined}
    - form: lakahi
      class: n
      field: Everyday speech
      gloss: "follower"
      concept: "follower"
      source: {kind: coined}
    - form: shoma
      class: n
      field: Everyday speech
      gloss: "servant"
      concept: "servant"
      source: {kind: coined}
    - form: nonnahe
      class: n
      field: Everyday speech
      gloss: "master"
      concept: "master"
      source: {kind: coined}
    - form: halkomi
      class: n
      field: Everyday speech
      gloss: "teacher"
      concept: "teacher"
      source: {kind: coined}
    - form: yamahanke
      class: n
      field: Everyday speech
      gloss: "student"
      concept: "student"
      source: {kind: coined}
    - form: kepikomi
      class: n
      field: Everyday speech
      gloss: "a chair"
      concept: "chair"
      source: {kind: coined}
    - form: pompo
      class: n
      field: Everyday speech
      gloss: "a table"
      concept: "table"
      source: {kind: coined}
    - form: ishani
      class: n
      field: Everyday speech
      gloss: "a bed"
      concept: "bed"
      source: {kind: coined}
    - form: kicho
      class: n
      field: Everyday speech
      gloss: "a floor"
      concept: "floor"
      source: {kind: coined}
    - form: petiki
      class: n
      field: Everyday speech
      gloss: "a wall"
      concept: "wall"
      source: {kind: coined}
    - form: annami
      class: n
      field: Everyday speech
      gloss: "a roof"
      concept: "roof"
      source: {kind: coined}
    - form: chashe
      class: n
      field: Everyday speech
      gloss: "a hearth"
      concept: "hearth"
      source: {kind: coined}
    - form: tapi
      class: n
      field: Everyday speech
      gloss: "a door"
      concept: "door"
      source: {kind: coined}
    - form: lika
      class: n
      field: Everyday speech
      gloss: "a lock"
      concept: "lock"
      source: {kind: coined}
    - form: aso
      class: n
      field: Everyday speech
      gloss: "a key"
      concept: "key"
      source: {kind: coined}
    - form: chayopa
      class: n
      field: Everyday speech
      gloss: "a window"
      concept: "window"
      source: {kind: coined}
    - form: chanchito
      class: n
      field: Everyday speech
      gloss: "shutters"
      concept: "shutters"
      source: {kind: coined}
    - form: patosha
      class: n
      field: Everyday speech
      gloss: "a cup"
      concept: "cup"
      source: {kind: coined}
    - form: holla
      class: n
      field: Everyday speech
      gloss: "a bowl"
      concept: "bowl"
      source: {kind: coined}
    - form: lassocho
      class: n
      field: Everyday speech
      gloss: "a knife"
      concept: "knife"
      source: {kind: coined}
    - form: litahka
      class: n
      field: Everyday speech
      gloss: "a spoon"
      concept: "spoon"
      source: {kind: coined}
    - form: kapso
      class: n
      field: Everyday speech
      gloss: "a pot"
      concept: "pot"
      source: {kind: coined}
    - form: cheta
      class: n
      field: Everyday speech
      gloss: "a lamp"
      concept: "lamp"
      source: {kind: coined}
    - form: kalkayo
      class: n
      field: Everyday speech
      gloss: "cloth"
      concept: "cloth"
      source: {kind: coined}
    - form: yasama
      class: n
      field: Everyday speech
      gloss: "clothes"
      concept: "clothes"
      source: {kind: coined}
    - form: shotte
      class: n
      field: Everyday speech
      gloss: "room"
      concept: "room"
      source: {kind: coined}
    - form: ahiko
      class: n
      field: Everyday speech
      gloss: "ceiling"
      concept: "ceiling"
      source: {kind: coined}
    - form: saksa
      class: n
      field: Everyday speech
      gloss: "seat"
      concept: "seat"
      source: {kind: coined}
    - form: piche
      class: n
      field: Everyday speech
      gloss: "bench"
      concept: "bench"
      source: {kind: coined}
    - form: kokapa
      class: n
      field: Everyday speech
      gloss: "jar"
      concept: "jar"
      source: {kind: coined}
    - form: techo
      class: n
      field: Everyday speech
      gloss: "bottle"
      concept: "bottle"
      source: {kind: coined}
    - form: heseho
      class: n
      field: Everyday speech
      gloss: "basket"
      concept: "basket"
      source: {kind: coined}
    - form: ahini
      class: n
      field: Everyday speech
      gloss: "bag"
      concept: "bag"
      source: {kind: coined}
    - form: chashi
      class: n
      field: Everyday speech
      gloss: "hammer"
      concept: "hammer"
      source: {kind: coined}
    - form: fashaksa
      class: n
      field: Everyday speech
      gloss: "rope"
      concept: "rope"
      source: {kind: coined}
    - form: nikkafe
      class: n
      field: Everyday speech
      gloss: "cord"
      concept: "cord"
      source: {kind: coined}
    - form: kakko
      class: n
      field: Everyday speech
      gloss: "needle"
      concept: "needle"
      source: {kind: coined}
    - form: ono
      class: n
      field: Everyday speech
      gloss: "smoke"
      concept: "smoke"
      source: {kind: coined}
    - form: ishochi
      class: n
      field: Everyday speech
      gloss: "ash"
      concept: "ash"
      source: {kind: coined}
    - form: tako
      class: n
      field: Everyday speech
      gloss: "coal"
      concept: "coal"
      source: {kind: coined}
    - form: chono
      class: n
      field: Everyday speech
      gloss: "torch"
      concept: "torch"
      source: {kind: coined}
    - form: shoshi
      class: n
      field: Everyday speech
      gloss: "candle"
      concept: "candle"
      source: {kind: coined}
    - form: ohilla
      class: n
      field: Everyday speech
      gloss: "garment"
      concept: "garment"
      source: {kind: coined}
    - form: lamaha
      class: n
      field: Everyday speech
      gloss: "shirt"
      concept: "shirt"
      source: {kind: coined}
    - form: pohiti
      class: n
      field: Everyday speech
      gloss: "cloak"
      concept: "cloak"
      source: {kind: coined}
    - form: patolta
      class: n
      field: Everyday speech
      gloss: "belt"
      concept: "belt"
      source: {kind: coined}
    - form: yocha
      class: n
      field: Everyday speech
      gloss: "shoe"
      concept: "shoe"
      source: {kind: coined}
    - form: simo
      class: n
      field: Everyday speech
      gloss: "boot"
      concept: "boot"
      source: {kind: coined}
    - form: bipso
      class: n
      field: Everyday speech
      gloss: "gate"
      concept: "gate"
      source: {kind: coined}
    - form: lohepi
      class: n
      field: Everyday speech
      gloss: "barrier"
      concept: "barrier"
      source: {kind: coined}
    - form: sola
      class: n
      field: Everyday speech
      gloss: "wood"
      concept: "wood"
      source: {kind: coined}
    - form: ihka
      class: n
      field: Everyday speech
      gloss: "metal"
      concept: "metal"
      source: {kind: coined}
    - form: huke
      class: n
      field: Everyday speech
      gloss: "clay"
      concept: "clay"
      source: {kind: coined}
    - form: imoppifo
      class: n
      field: Everyday speech
      gloss: "leather"
      concept: "leather"
      source: {kind: coined}
    - form: sannani
      class: n
      field: Everyday speech
      gloss: "wool"
      concept: "wool"
      source: {kind: coined}
    - form: tontaya
      class: n
      field: Everyday speech
      gloss: "thread"
      concept: "thread"
      source: {kind: coined}
    - form: hatafi
      class: n
      field: Everyday speech
      gloss: "mud"
      concept: "mud"
      source: {kind: coined}
    - form: halla
      class: n
      field: Everyday speech
      gloss: "dust"
      concept: "dust"
      source: {kind: coined}
    - form: sompiliha
      class: n
      field: Everyday speech
      gloss: "valley"
      concept: "valley"
      source: {kind: coined}
    - form: yataste
      class: n
      field: Everyday speech
      gloss: "a plain; flat open land"
      concept: "plain-landform"
      source: {kind: coined}
    - form: opaho
      class: n
      field: Everyday speech
      gloss: "field"
      concept: "field"
      source: {kind: coined}
    - form: pafo
      class: n
      field: Everyday speech
      gloss: "cave"
      concept: "cave"
      source: {kind: coined}
    - form: nalina
      class: n
      field: Everyday speech
      gloss: "stream"
      concept: "stream"
      source: {kind: coined}
    - form: oppo
      class: n
      field: Everyday speech
      gloss: "snow"
      concept: "snow"
      source: {kind: coined}
    - form: moninka
      class: n
      field: Everyday speech
      gloss: "ice"
      concept: "ice"
      source: {kind: coined}
    - form: wino
      class: n
      field: Everyday speech
      gloss: "cloud"
      concept: "cloud"
      source: {kind: coined}
    - form: halesho
      class: n
      field: Everyday speech
      gloss: "plant"
      concept: "plant"
      source: {kind: coined}
    - form: finnahiwi
      class: n
      field: Everyday speech
      gloss: "branch"
      concept: "branch"
      source: {kind: coined}
    - form: kakkak
      class: n
      field: Everyday speech
      gloss: "flower"
      concept: "flower"
      source: {kind: coined}
    - form: taltesasi
      class: n
      field: Everyday speech
      gloss: "fruit"
      concept: "fruit"
      source: {kind: coined}
    - form: siti
      class: n
      field: Everyday speech
      gloss: "seed"
      concept: "seed"
      source: {kind: coined}
    - form: hoshabo
      class: n
      field: Everyday speech
      gloss: "grass"
      concept: "grass"
      source: {kind: coined}
    - form: chunisko
      class: n
      field: Everyday speech
      gloss: "insect"
      concept: "insect"
      source: {kind: coined}
    - form: channamala
      class: n
      field: Everyday speech
      gloss: "worm"
      concept: "worm"
      source: {kind: coined}
    - form: wipsiki
      class: adj
      field: Everyday speech
      gloss: "wet"
      concept: "wet"
      source: {kind: coined}
    - form: chakkache
      class: adj
      field: Everyday speech
      gloss: "dry"
      concept: "dry"
      source: {kind: coined}
    - form: illo
      class: adj
      field: Everyday speech
      gloss: "bright"
      concept: "bright"
      source: {kind: coined}
    - form: pihipo
      class: adj
      field: Everyday speech
      gloss: "dark"
      concept: "dark"
      source: {kind: coined}
    - form: onni
      class: adj
      field: Everyday speech
      gloss: "clear weather; without clouds"
      concept: "clear-weather"
      source: {kind: coined}
    - form: tasanche
      class: adj
      field: Everyday speech
      gloss: "cloudy"
      concept: "cloudy"
      source: {kind: coined}
    - form: choko
      class: n
      field: Everyday speech
      gloss: "north"
      concept: "north"
      source: {kind: coined}
    - form: lommasi
      class: n
      field: Everyday speech
      gloss: "south"
      concept: "south"
      source: {kind: coined}
    - form: saluho
      class: n
      field: Everyday speech
      gloss: "east"
      concept: "east"
      source: {kind: coined}
    - form: pano
      class: n
      field: Everyday speech
      gloss: "west"
      concept: "west"
      source: {kind: coined}
    - form: fopino
      class: num
      field: Everyday speech
      gloss: "quarter"
      concept: "quarter"
      source: {kind: coined}
    - form: chifa
      class: num
      field: Everyday speech
      gloss: "some"
      concept: "some"
      source: {kind: coined}
    - form: chanesi
      class: num
      field: Everyday speech
      gloss: "enough"
      concept: "enough"
      source: {kind: coined}
    - form: petinti
      class: num
      field: Everyday speech
      gloss: "more"
      concept: "more"
      source: {kind: coined}
    - form: shellate
      class: num
      field: Everyday speech
      gloss: "less"
      concept: "less"
      source: {kind: coined}
    - form: kemiki
      class: num
      field: Everyday speech
      gloss: "most"
      concept: "most"
      source: {kind: coined}
    - form: tola
      class: num
      field: Everyday speech
      gloss: "least"
      concept: "least"
      source: {kind: coined}
    - form: ishiki
      class: num
      field: Everyday speech
      gloss: "equal"
      concept: "equal"
      source: {kind: coined}
    - form: keskok
      class: num
      field: Everyday speech
      gloss: "each"
      concept: "each"
      source: {kind: coined}
    - form: hoki
      class: num
      field: Everyday speech
      gloss: "both"
      concept: "both"
      source: {kind: coined}
    - form: shisha
      class: num
      field: Everyday speech
      gloss: "either"
      concept: "either"
      source: {kind: coined}
    - form: mopi
      class: num
      field: Everyday speech
      gloss: "neither"
      concept: "neither"
      source: {kind: coined}
    - form: yasak
      class: num
      field: Everyday speech
      gloss: "about"
      concept: "about"
      source: {kind: coined}
    - form: focha
      class: num
      field: Everyday speech
      gloss: "almost"
      concept: "almost"
      source: {kind: coined}
    - form: onappi
      class: num
      field: Everyday speech
      gloss: "exactly"
      concept: "exactly"
      source: {kind: coined}
    - form: toka
      class: num
      field: Everyday speech
      gloss: "number"
      concept: "number"
      source: {kind: coined}
    - form: tenos
      class: num
      field: Everyday speech
      gloss: "amount"
      concept: "amount"
      source: {kind: coined}
    - form: sopa
      class: v
      field: Everyday speech
      gloss: "to measure"
      concept: "measure-verb"
      source: {kind: coined}
    - form: lacha
      class: v
      field: Everyday speech
      gloss: "to count"
      concept: "count-verb"
      source: {kind: coined}
    - form: yakefipi
      class: adj
      field: Everyday speech
      gloss: "black"
      concept: "black"
      source: {kind: coined}
    - form: tehe
      class: adj
      field: Everyday speech
      gloss: "white"
      concept: "white"
      source: {kind: coined}
    - form: honale
      class: adj
      field: Everyday speech
      gloss: "red"
      concept: "red"
      source: {kind: coined}
    - form: kochi
      class: adj
      field: Everyday speech
      gloss: "green"
      concept: "green"
      source: {kind: coined}
    - form: shine
      class: adj
      field: Everyday speech
      gloss: "yellow"
      concept: "yellow"
      source: {kind: coined}
    - form: tanto
      class: adj
      field: Everyday speech
      gloss: "blue"
      concept: "blue"
      source: {kind: coined}
    - form: oshiwine
      class: adj
      field: Everyday speech
      gloss: "grey"
      concept: "grey"
      source: {kind: coined}
    - form: tesitanti
      class: adj
      field: Everyday speech
      gloss: "brown"
      concept: "brown"
      source: {kind: coined}
    - form: soli
      class: adj
      field: Everyday speech
      gloss: "light in colour"
      concept: "light-colour"
      source: {kind: coined}
    - form: holkime
      class: adj
      field: Everyday speech
      gloss: "pale"
      concept: "pale"
      source: {kind: coined}
    - form: imipe
      class: adj
      field: Everyday speech
      gloss: "clear in appearance"
      concept: "clear-appearance"
      source: {kind: coined}
    - form: ahkaho
      class: adj
      field: Everyday speech
      gloss: "opaque"
      concept: "opaque"
      source: {kind: coined}
    - form: shaso
      class: adj
      field: Everyday speech
      gloss: "transparent"
      concept: "transparent"
      source: {kind: coined}
    - form: safi
      class: adj
      field: Everyday speech
      gloss: "shiny"
      concept: "shiny"
      source: {kind: coined}
    - form: tanasse
      class: adj
      field: Everyday speech
      gloss: "dull"
      concept: "dull-appearance"
      source: {kind: coined}
    - form: feche
      class: adj
      field: Everyday speech
      gloss: "plain; without a pattern"
      concept: "plain-pattern"
      source: {kind: coined}
    - form: lohi
      class: adj
      field: Everyday speech
      gloss: "spotted"
      concept: "spotted"
      source: {kind: coined}
    - form: olasho
      class: adj
      field: Everyday speech
      gloss: "striped"
      concept: "striped"
      source: {kind: coined}
    - form: pifa
      class: v
      field: Everyday speech
      gloss: "to be"
      concept: "be"
      source: {kind: coined}
    - form: konna
      class: v
      field: Everyday speech
      gloss: "to have"
      concept: "have"
      source: {kind: coined}
    - form: okababa
      class: v
      field: Everyday speech
      gloss: "to do"
      concept: "do"
      source: {kind: coined}
    - form: sisa
      class: v
      field: Everyday speech
      gloss: "to think"
      concept: "think"
      source: {kind: coined}
    - form: kafaniya
      class: v
      field: Everyday speech
      gloss: "to want"
      concept: "want"
      source: {kind: coined}
    - form: chota
      class: v
      field: Everyday speech
      gloss: "to run"
      concept: "run"
      source: {kind: coined}
    - form: pekipa
      class: v
      field: Everyday speech
      gloss: "to sit"
      concept: "sit"
      source: {kind: coined}
    - form: chatta
      class: v
      field: Everyday speech
      gloss: "to stand"
      concept: "stand"
      source: {kind: coined}
    - form: pona
      class: v
      field: Everyday speech
      gloss: "to lie down"
      concept: "lie-down"
      source: {kind: coined}
    - form: chesa
      class: v
      field: Everyday speech
      gloss: "to hold"
      concept: "hold"
      source: {kind: coined}
    - form: chitahta
      class: v
      field: Everyday speech
      gloss: "to put"
      concept: "put"
      source: {kind: coined}
    - form: tapifa
      class: v
      field: Everyday speech
      gloss: "to find"
      concept: "find"
      source: {kind: coined}
    - form: tiksafa
      class: v
      field: Everyday speech
      gloss: "to lose"
      concept: "lose"
      source: {kind: coined}
    - form: hahka
      class: v
      field: Everyday speech
      gloss: "to open"
      concept: "open"
      source: {kind: coined}
    - form: ohkewisha
      class: v
      field: Everyday speech
      gloss: "to close"
      concept: "close"
      source: {kind: coined}
    - form: ahoshapa
      class: v
      field: Everyday speech
      gloss: "to begin"
      concept: "begin"
      source: {kind: coined}
    - form: tancha
      class: v
      field: Everyday speech
      gloss: "to end"
      concept: "end"
      source: {kind: coined}
    - form: wimpa
      class: v
      field: Everyday speech
      gloss: "to exist"
      concept: "exist"
      source: {kind: coined}
    - form: hosta
      class: v
      field: Everyday speech
      gloss: "to belong"
      concept: "belong"
      source: {kind: coined}
    - form: chahota
      class: v
      field: Everyday speech
      gloss: "to become"
      concept: "become"
      source: {kind: coined}
    - form: tataka
      class: v
      field: Everyday speech
      gloss: "to remain"
      concept: "remain"
      source: {kind: coined}
    - form: liksicha
      class: v
      field: Everyday speech
      gloss: "to leave"
      concept: "leave"
      source: {kind: coined}
    - form: hima
      class: v
      field: Everyday speech
      gloss: "to arrive"
      concept: "arrive"
      source: {kind: coined}
    - form: pehella
      class: v
      field: Everyday speech
      gloss: "to crawl"
      concept: "crawl"
      source: {kind: coined}
    - form: filla
      class: v
      field: Everyday speech
      gloss: "to climb"
      concept: "climb"
      source: {kind: coined}
    - form: hihisa
      class: v
      field: Everyday speech
      gloss: "to jump"
      concept: "jump"
      source: {kind: coined}
    - form: mampaya
      class: v
      field: Everyday speech
      gloss: "to fall"
      concept: "fall"
      source: {kind: coined}
    - form: choha
      class: v
      field: Everyday speech
      gloss: "to rise"
      concept: "rise"
      source: {kind: coined}
    - form: lishasa
      class: v
      field: Everyday speech
      gloss: "to enter"
      concept: "enter"
      source: {kind: coined}
    - form: lohasta
      class: v
      field: Everyday speech
      gloss: "to exit"
      concept: "exit"
      source: {kind: coined}
    - form: onakkosha
      class: v
      field: Everyday speech
      gloss: "to return"
      concept: "return"
      source: {kind: coined}
    - form: channa
      class: v
      field: Everyday speech
      gloss: "to follow"
      concept: "follow"
      source: {kind: coined}
    - form: sowa
      class: v
      field: Everyday speech
      gloss: "to lead"
      concept: "lead"
      source: {kind: coined}
    - form: aha
      class: v
      field: Everyday speech
      gloss: "to move"
      concept: "move"
      source: {kind: coined}
    - form: tiksapa
      class: v
      field: Everyday speech
      gloss: "to push"
      concept: "push"
      source: {kind: coined}
    - form: ineya
      class: v
      field: Everyday speech
      gloss: "to pull"
      concept: "pull"
      source: {kind: coined}
    - form: moya
      class: v
      field: Everyday speech
      gloss: "to lift"
      concept: "lift"
      source: {kind: coined}
    - form: osha
      class: v
      field: Everyday speech
      gloss: "to drop"
      concept: "drop"
      source: {kind: coined}
    - form: ochisa
      class: v
      field: Everyday speech
      gloss: "to throw"
      concept: "throw"
      source: {kind: coined}
    - form: kotiha
      class: v
      field: Everyday speech
      gloss: "to catch"
      concept: "catch"
      source: {kind: coined}
    - form: icha
      class: v
      field: Everyday speech
      gloss: "to create"
      concept: "create"
      source: {kind: coined}
    - form: sassa
      class: v
      field: Everyday speech
      gloss: "to break"
      concept: "break"
      source: {kind: coined}
    - form: hata
      class: v
      field: Everyday speech
      gloss: "to destroy"
      concept: "destroy"
      source: {kind: coined}
    - form: littata
      class: v
      field: Everyday speech
      gloss: "to repair"
      concept: "repair"
      source: {kind: coined}
    - form: kila
      class: v
      field: Everyday speech
      gloss: "to change"
      concept: "change-verb"
      source: {kind: coined}
    - form: ilta
      class: v
      field: Everyday speech
      gloss: "to tell"
      concept: "tell"
      source: {kind: coined}
    - form: chafuka
      class: v
      field: Everyday speech
      gloss: "to ask"
      concept: "ask"
      source: {kind: coined}
    - form: alowa
      class: v
      field: Everyday speech
      gloss: "to answer"
      concept: "answer"
      source: {kind: coined}
    - form: yahta
      class: v
      field: Everyday speech
      gloss: "to call"
      concept: "call"
      source: {kind: coined}
    - form: pasha
      class: v
      field: Everyday speech
      gloss: "to shout"
      concept: "shout"
      source: {kind: coined}
    - form: hasemisha
      class: v
      field: Everyday speech
      gloss: "to whisper"
      concept: "whisper"
      source: {kind: coined}
    - form: pomisa
      class: v
      field: Everyday speech
      gloss: "to explain"
      concept: "explain"
      source: {kind: coined}
    - form: wihohka
      class: v
      field: Everyday speech
      gloss: "to name"
      concept: "name-verb"
      source: {kind: coined}
    - form: koliha
      class: v
      field: Everyday speech
      gloss: "to believe"
      concept: "believe"
      source: {kind: coined}
    - form: ahasa
      class: v
      field: Everyday speech
      gloss: "to understand"
      concept: "understand"
      source: {kind: coined}
    - form: yahasa
      class: v
      field: Everyday speech
      gloss: "to remember"
      concept: "remember"
      source: {kind: coined}
    - form: ahkola
      class: v
      field: Everyday speech
      gloss: "to forget"
      concept: "forget"
      source: {kind: coined}
    - form: tawa
      class: v
      field: Everyday speech
      gloss: "to learn"
      concept: "learn"
      source: {kind: coined}
    - form: layala
      class: v
      field: Everyday speech
      gloss: "to teach"
      concept: "teach"
      source: {kind: coined}
    - form: micha
      class: v
      field: Everyday speech
      gloss: "to decide"
      concept: "decide"
      source: {kind: coined}
    - form: fapsa
      class: v
      field: Everyday speech
      gloss: "to imagine"
      concept: "imagine"
      source: {kind: coined}
    - form: lema
      class: v
      field: Everyday speech
      gloss: "to need"
      concept: "need-verb"
      source: {kind: coined}
    - form: kokokona
      class: v
      field: Everyday speech
      gloss: "to wish"
      concept: "wish-verb"
      source: {kind: coined}
    - form: apa
      class: v
      field: Everyday speech
      gloss: "to hope"
      concept: "hope-verb"
      source: {kind: coined}
    - form: sihkolota
      class: v
      field: Everyday speech
      gloss: "to intend"
      concept: "intend"
      source: {kind: coined}
    - form: fakohoka
      class: v
      field: Everyday speech
      gloss: "to choose"
      concept: "choose"
      source: {kind: coined}
    - form: yata
      class: v
      field: Everyday speech
      gloss: "to prefer"
      concept: "prefer"
      source: {kind: coined}
    - form: ahona
      class: v
      field: Everyday speech
      gloss: "to try"
      concept: "try"
      source: {kind: coined}
    - form: hanka
      class: v
      field: Everyday speech
      gloss: "to search"
      concept: "search"
      source: {kind: coined}
    - form: litoha
      class: v
      field: Everyday speech
      gloss: "to meet"
      concept: "meet"
      source: {kind: coined}
    - form: takilaha
      class: v
      field: Everyday speech
      gloss: "to help"
      concept: "help"
      source: {kind: coined}
    - form: kikoha
      class: v
      field: Everyday speech
      gloss: "to share"
      concept: "share"
      source: {kind: coined}
    - form: chilla
      class: v
      field: Everyday speech
      gloss: "to trade"
      concept: "trade"
      source: {kind: coined}
    - form: noppa
      class: v
      field: Everyday speech
      gloss: "to buy"
      concept: "buy"
      source: {kind: coined}
    - form: himma
      class: v
      field: Everyday speech
      gloss: "to sell"
      concept: "sell"
      source: {kind: coined}
    - form: hostoya
      class: v
      field: Everyday speech
      gloss: "to promise"
      concept: "promise-verb"
      source: {kind: coined}
    - form: hitana
      class: v
      field: Everyday speech
      gloss: "to thank"
      concept: "thank-verb"
      source: {kind: coined}
    - form: lilkoha
      class: v
      field: Everyday speech
      gloss: "to forgive"
      concept: "forgive-verb"
      source: {kind: coined}
    - form: lopsa
      class: v
      field: Everyday speech
      gloss: "to refuse"
      concept: "refuse-verb"
      source: {kind: coined}
    - form: hokila
      class: v
      field: Everyday speech
      gloss: "to agree"
      concept: "agree-verb"
      source: {kind: coined}
    - form: ofifa
      class: v
      field: Everyday speech
      gloss: "to hit"
      concept: "hit"
      source: {kind: coined}
    - form: pika
      class: v
      field: Everyday speech
      gloss: "to defend"
      concept: "defend"
      source: {kind: coined}
    - form: fashichanka
      class: v
      field: Everyday speech
      gloss: "to attack"
      concept: "attack"
      source: {kind: coined}
    - form: pimupa
      class: v
      field: Everyday speech
      gloss: "to flee"
      concept: "flee"
      source: {kind: coined}
    - form: pala
      class: v
      field: Everyday speech
      gloss: "to threaten"
      concept: "threaten"
      source: {kind: coined}
    - form: hekasha
      class: v
      field: Everyday speech
      gloss: "to stop"
      concept: "stop"
      source: {kind: coined}
    - form: ocha
      class: v
      field: Everyday speech
      gloss: "to continue"
      concept: "continue"
      source: {kind: coined}
    - form: onipa
      class: v
      field: Everyday speech
      gloss: "to wait"
      concept: "wait"
      source: {kind: coined}
    - form: isomecha
      class: v
      field: Everyday speech
      gloss: "to happen"
      concept: "happen"
      source: {kind: coined}
    - form: yapa
      class: v
      field: Everyday speech
      gloss: "to kneel"
      concept: "kneel"
      source: {kind: coined}
    - form: allasa
      class: v
      field: Everyday speech
      gloss: "to bend"
      concept: "bend"
      source: {kind: coined}
    - form: wisota
      class: v
      field: Everyday speech
      gloss: "to lean"
      concept: "lean"
      source: {kind: coined}
    - form: kihipa
      class: v
      field: Everyday speech
      gloss: "to cover"
      concept: "cover-verb"
      source: {kind: coined}
    - form: fakka
      class: v
      field: Everyday speech
      gloss: "to uncover"
      concept: "uncover"
      source: {kind: coined}
    - form: hesha
      class: v
      field: Everyday speech
      gloss: "to hide"
      concept: "hide"
      source: {kind: coined}
    - form: chaya
      class: v
      field: Everyday speech
      gloss: "to reveal"
      concept: "reveal"
      source: {kind: coined}
    - form: kilka
      class: v
      field: Everyday speech
      gloss: "to lock"
      concept: "lock-verb"
      source: {kind: coined}
    - form: fimpa
      class: v
      field: Everyday speech
      gloss: "to unlock"
      concept: "unlock"
      source: {kind: coined}
    - form: shatacho
      class: adv
      field: Everyday speech
      gloss: "here"
      concept: "here"
      source: {kind: coined}
    - form: mihte
      class: adv
      field: Everyday speech
      gloss: "there"
      concept: "there"
      source: {kind: coined}
    - form: laha
      class: adv
      field: Everyday speech
      gloss: "somewhere"
      concept: "somewhere"
      source: {kind: coined}
    - form: kela
      class: adv
      field: Everyday speech
      gloss: "nowhere"
      concept: "nowhere"
      source: {kind: coined}
    - form: anno
      class: adv
      field: Everyday speech
      gloss: "everywhere"
      concept: "everywhere"
      source: {kind: coined}
    - form: moko
      class: adv
      field: Everyday speech
      gloss: "near"
      concept: "near"
      source: {kind: coined}
    - form: hilko
      class: adv
      field: Everyday speech
      gloss: "far"
      concept: "far"
      source: {kind: coined}
    - form: himawi
      class: adv
      field: Everyday speech
      gloss: "beside"
      concept: "beside"
      source: {kind: coined}
    - form: kihka
      class: adv
      field: Everyday speech
      gloss: "between"
      concept: "between"
      source: {kind: coined}
    - form: mashala
      class: adv
      field: Everyday speech
      gloss: "among"
      concept: "among"
      source: {kind: coined}
    - form: ketino
      class: adv
      field: Everyday speech
      gloss: "above"
      concept: "above"
      source: {kind: coined}
    - form: tontobe
      class: adv
      field: Everyday speech
      gloss: "below"
      concept: "below"
      source: {kind: coined}
    - form: shosala
      class: adv
      field: Everyday speech
      gloss: "under"
      concept: "under"
      source: {kind: coined}
    - form: shompi
      class: adv
      field: Everyday speech
      gloss: "over"
      concept: "over"
      source: {kind: coined}
    - form: ancha
      class: adv
      field: Everyday speech
      gloss: "inside"
      concept: "inside"
      source: {kind: coined}
    - form: homumpa
      class: adv
      field: Everyday speech
      gloss: "outside"
      concept: "outside"
      source: {kind: coined}
    - form: hawa
      class: adv
      field: Everyday speech
      gloss: "beyond"
      concept: "beyond"
      source: {kind: coined}
    - form: toninke
      class: adv
      field: Everyday speech
      gloss: "before; in front of (spatial)"
      concept: "before-spatial"
      source: {kind: coined}
    - form: lipok
      class: adv
      field: Everyday speech
      gloss: "behind"
      concept: "behind"
      source: {kind: coined}
    - form: faha
      class: adv
      field: Everyday speech
      gloss: "left (direction)"
      concept: "left-direction"
      source: {kind: coined}
    - form: chisami
      class: adv
      field: Everyday speech
      gloss: "right (direction)"
      concept: "right-direction"
      source: {kind: coined}
    - form: sana
      class: n
      field: Everyday speech
      gloss: "center"
      concept: "center"
      source: {kind: coined}
    - form: kilohi
      class: adv
      field: Everyday speech
      gloss: "up"
      concept: "up"
      source: {kind: coined}
    - form: itiwi
      class: adv
      field: Everyday speech
      gloss: "down"
      concept: "down"
      source: {kind: coined}
    - form: mopoka
      class: adv
      field: Everyday speech
      gloss: "forward"
      concept: "forward"
      source: {kind: coined}
    - form: miwi
      class: adv
      field: Everyday speech
      gloss: "backward"
      concept: "backward"
      source: {kind: coined}
    - form: sapsi
      class: adv
      field: Everyday speech
      gloss: "toward"
      concept: "toward"
      source: {kind: coined}
    - form: yolta
      class: adv
      field: Everyday speech
      gloss: "away"
      concept: "away"
      source: {kind: coined}
    - form: tohaha
      class: adv
      field: Everyday speech
      gloss: "through"
      concept: "through"
      source: {kind: coined}
    - form: asto
      class: adv
      field: Everyday speech
      gloss: "across"
      concept: "across"
      source: {kind: coined}
    - form: koshummo
      class: adv
      field: Everyday speech
      gloss: "around"
      concept: "around"
      source: {kind: coined}
    - form: kacho
      class: adv
      field: Everyday speech
      gloss: "in"
      concept: "in"
      source: {kind: coined}
    - form: pimpifo
      class: adv
      field: Everyday speech
      gloss: "on"
      concept: "on"
      source: {kind: coined}
    - form: ipekso
      class: adv
      field: Everyday speech
      gloss: "at"
      concept: "at"
      source: {kind: coined}
    - form: hatti
      class: adv
      field: Everyday speech
      gloss: "from"
      concept: "from"
      source: {kind: coined}
    - form: hisa
      class: adv
      field: Everyday speech
      gloss: "to"
      concept: "to"
      source: {kind: coined}
    - form: hitilo
      class: n
      field: Everyday speech
      gloss: "a place; a location"
      concept: "place-noun"
      source: {kind: coined}
    - form: shachimmi
      class: n
      field: Everyday speech
      gloss: "position"
      concept: "position"
      source: {kind: coined}
    - form: chamaha
      class: n
      field: Everyday speech
      gloss: "direction"
      concept: "direction"
      source: {kind: coined}
    - form: halo
      class: n
      field: Everyday speech
      gloss: "distance"
      concept: "distance"
      source: {kind: coined}
    - form: pisito
      class: n
      field: Everyday speech
      gloss: "time"
      concept: "time"
      source: {kind: coined}
    - form: yosome
      class: n
      field: Everyday speech
      gloss: "moment"
      concept: "moment"
      source: {kind: coined}
    - form: timoko
      class: n
      field: Everyday speech
      gloss: "noon"
      concept: "noon"
      source: {kind: coined}
    - form: tokopo
      class: n
      field: Everyday speech
      gloss: "midnight"
      concept: "midnight"
      source: {kind: coined}
    - form: chossowa
      class: adv
      field: Everyday speech
      gloss: "now"
      concept: "now"
      source: {kind: coined}
    - form: toyo
      class: adv
      field: Everyday speech
      gloss: "then"
      concept: "then"
      source: {kind: coined}
    - form: sasa
      class: n
      field: Everyday speech
      gloss: "past"
      concept: "past"
      source: {kind: coined}
    - form: kicha
      class: n
      field: Everyday speech
      gloss: "present"
      concept: "present"
      source: {kind: coined}
    - form: yanasi
      class: n
      field: Everyday speech
      gloss: "future"
      concept: "future"
      source: {kind: coined}
    - form: hihepo
      class: adv
      field: Everyday speech
      gloss: "before (temporal)"
      concept: "before-time"
      source: {kind: coined}
    - form: afo
      class: adv
      field: Everyday speech
      gloss: "after"
      concept: "after"
      source: {kind: coined}
    - form: nonnipa
      class: adv
      field: Everyday speech
      gloss: "during"
      concept: "during"
      source: {kind: coined}
    - form: ochito
      class: adv
      field: Everyday speech
      gloss: "while"
      concept: "while"
      source: {kind: coined}
    - form: fano
      class: adv
      field: Everyday speech
      gloss: "until"
      concept: "until"
      source: {kind: coined}
    - form: yokoko
      class: adv
      field: Everyday speech
      gloss: "since a time"
      concept: "since-time"
      source: {kind: coined}
    - form: fapato
      class: adv
      field: Everyday speech
      gloss: "always"
      concept: "always"
      source: {kind: coined}
    - form: yahkoha
      class: adv
      field: Everyday speech
      gloss: "often"
      concept: "often"
      source: {kind: coined}
    - form: osa
      class: adv
      field: Everyday speech
      gloss: "sometimes"
      concept: "sometimes"
      source: {kind: coined}
    - form: fopi
      class: adv
      field: Everyday speech
      gloss: "rarely"
      concept: "rarely"
      source: {kind: coined}
    - form: cholikko
      class: adv
      field: Everyday speech
      gloss: "never"
      concept: "never"
      source: {kind: coined}
    - form: faho
      class: adv
      field: Everyday speech
      gloss: "lasting a long time"
      concept: "long-duration"
      source: {kind: coined}
    - form: shalo
      class: adv
      field: Everyday speech
      gloss: "lasting a short time"
      concept: "short-duration"
      source: {kind: coined}
    - form: ihino
      class: adv
      field: Everyday speech
      gloss: "brief in duration"
      concept: "brief-duration"
      source: {kind: coined}
    - form: moshe
      class: adv
      field: Everyday speech
      gloss: "lasting; continuing for a sustained time"
      concept: "lasting-duration"
      source: {kind: coined}
    - form: pasi
      class: adv
      field: Everyday speech
      gloss: "again"
      concept: "again"
      source: {kind: coined}
    - form: fofa
      class: adv
      field: Everyday speech
      gloss: "once"
      concept: "once"
      source: {kind: coined}
    - form: asu
      class: adv
      field: Everyday speech
      gloss: "twice"
      concept: "twice"
      source: {kind: coined}
    - form: kifo
      class: adv
      field: Everyday speech
      gloss: "repeatedly"
      concept: "repeatedly"
      source: {kind: coined}
    - form: lihka
      class: adv
      field: Everyday speech
      gloss: "already"
      concept: "already"
      source: {kind: coined}
    - form: hillasi
      class: adv
      field: Everyday speech
      gloss: "still"
      concept: "still"
      source: {kind: coined}
    - form: shinihi
      class: adv
      field: Everyday speech
      gloss: "yet"
      concept: "yet"
      source: {kind: coined}
    - form: hichaska
      class: adv
      field: Everyday speech
      gloss: "soon"
      concept: "soon"
      source: {kind: coined}
    - form: lilto
      class: adv
      field: Everyday speech
      gloss: "later"
      concept: "later"
      source: {kind: coined}
    - form: michi
      class: adv
      field: Everyday speech
      gloss: "early"
      concept: "early"
      source: {kind: coined}
    - form: imi
      class: adv
      field: Everyday speech
      gloss: "late"
      concept: "late"
      source: {kind: coined}
    - form: fahi
      class: adv
      field: Everyday speech
      gloss: "next"
      concept: "next"
      source: {kind: coined}
    - form: lintako
      class: adv
      field: Everyday speech
      gloss: "last"
      concept: "last"
      source: {kind: coined}
    - form: hossi
      class: adv
      field: Everyday speech
      gloss: "finally"
      concept: "finally"
      source: {kind: coined}
    - form: ine
      class: n
      field: Everyday speech
      gloss: "season"
      concept: "season"
      source: {kind: coined}
    - form: hake
      class: n
      field: Everyday speech
      gloss: "dawn"
      concept: "dawn"
      source: {kind: coined}
    - form: nikaya
      class: n
      field: Everyday speech
      gloss: "dusk"
      concept: "dusk"
      source: {kind: coined}
    - form: mela
      class: pron
      field: Everyday speech
      gloss: "someone"
      concept: "someone"
      source: {kind: coined}
    - form: toha
      class: pron
      field: Everyday speech
      gloss: "anyone"
      concept: "anyone"
      source: {kind: coined}
    - form: ime
      class: pron
      field: Everyday speech
      gloss: "everyone"
      concept: "everyone"
      source: {kind: coined}
    - form: nikassi
      class: pron
      field: Everyday speech
      gloss: "no one"
      concept: "no-one"
      source: {kind: coined}
    - form: tipo
      class: pron
      field: Everyday speech
      gloss: "something"
      concept: "something"
      source: {kind: coined}
    - form: kotolli
      class: pron
      field: Everyday speech
      gloss: "anything"
      concept: "anything"
      source: {kind: coined}
    - form: achipe
      class: pron
      field: Everyday speech
      gloss: "everything"
      concept: "everything"
      source: {kind: coined}
    - form: hinchaka
      class: pron
      field: Everyday speech
      gloss: "other"
      concept: "other"
      source: {kind: coined}
    - form: histofa
      class: pron
      field: Everyday speech
      gloss: "another"
      concept: "another"
      source: {kind: coined}
    - form: hiki
      class: pron
      field: Everyday speech
      gloss: "same"
      concept: "same"
      source: {kind: coined}
    - form: achaho
      class: pron
      field: Everyday speech
      gloss: "different"
      concept: "different"
      source: {kind: coined}
    - form: lafi
      class: part
      field: Everyday speech
      gloss: "which (question)"
      concept: "question-which"
      source: {kind: coined}
    - form: kosotu
      class: part
      field: Everyday speech
      gloss: "how many (question)"
      concept: "question-how-many"
      source: {kind: coined}
    - form: pata
      class: part
      field: Everyday speech
      gloss: "how much (question)"
      concept: "question-how-much"
      source: {kind: coined}
    - form: chihi
      class: part
      field: Everyday speech
      gloss: "whose (question)"
      concept: "question-whose"
      source: {kind: coined}
    - form: chiyole
      class: part
      field: Everyday speech
      gloss: "to whom (question)"
      concept: "question-to-whom"
      source: {kind: coined}
    - form: tihka
      class: part
      field: Everyday speech
      gloss: "from where (question)"
      concept: "question-from-where"
      source: {kind: coined}
    - form: nika
      class: part
      field: Everyday speech
      gloss: "for what purpose (question)"
      concept: "question-for-what-purpose"
      source: {kind: coined}
    - form: hotti
      class: part
      field: Everyday speech
      gloss: "requesting clarification (question)"
      concept: "question-clarification"
      source: {kind: coined}
    - form: tohki
      class: n
      field: Everyday speech
      gloss: "true"
      concept: "true"
      source: {kind: coined}
    - form: chanampe
      class: n
      field: Everyday speech
      gloss: "false"
      concept: "false"
      source: {kind: coined}
    - form: papsi
      class: n
      field: Everyday speech
      gloss: "truth"
      concept: "truth"
      source: {kind: coined}
    - form: kawi
      class: n
      field: Everyday speech
      gloss: "a lie; an intentionally deceptive statement"
      concept: "lie-noun"
      source: {kind: coined}
    - form: yosho
      class: n
      field: Everyday speech
      gloss: "really; truly; genuinely; de veras (asserting sincerity or reality)"
      concept: "sincerity"
      source: {kind: coined}
    - form: hichi
      class: n
      field: Everyday speech
      gloss: "indeed"
      concept: "indeed"
      source: {kind: coined}
    - form: ittaha
      class: n
      field: Everyday speech
      gloss: "certainly"
      concept: "certainly"
      source: {kind: coined}
    - form: kalami
      class: n
      field: Everyday speech
      gloss: "perhaps"
      concept: "perhaps"
      source: {kind: coined}
    - form: lahko
      class: n
      field: Everyday speech
      gloss: "probably"
      concept: "probably"
      source: {kind: coined}
    - form: lokone
      class: n
      field: Everyday speech
      gloss: "unlikely"
      concept: "unlikely"
      source: {kind: coined}
    - form: ahkachawi
      class: n
      field: Everyday speech
      gloss: "sure"
      concept: "certain"
      source: {kind: coined}
    - form: hotoko
      class: n
      field: Everyday speech
      gloss: "uncertain"
      concept: "uncertain"
      source: {kind: coined}
    - form: mallepa
      class: n
      field: Everyday speech
      gloss: "apparently"
      concept: "apparently"
      source: {kind: coined}
    - form: chapa
      class: n
      field: Everyday speech
      gloss: "supposedly"
      concept: "supposedly"
      source: {kind: coined}
    - form: lapati
      class: n
      field: Everyday speech
      gloss: "actually"
      concept: "in-fact"
      source: {kind: coined}
    - form: taskasha
      class: v
      field: Everyday speech
      gloss: "to doubt"
      concept: "doubt-verb"
      source: {kind: coined}
    - form: honchima
      class: v
      field: Everyday speech
      gloss: "to suspect"
      concept: "suspect"
      source: {kind: coined}
    - form: hapahoma
      class: v
      field: Everyday speech
      gloss: "to guess"
      concept: "guess-verb"
      source: {kind: coined}
    - form: tipacha
      class: v
      field: Everyday speech
      gloss: "to assume"
      concept: "assume-verb"
      source: {kind: coined}
    - form: hakkata
      class: n
      field: Everyday speech
      gloss: "correct"
      concept: "correct"
      source: {kind: coined}
    - form: olloha
      class: n
      field: Everyday speech
      gloss: "incorrect"
      concept: "incorrect"
      source: {kind: coined}
    - form: pota
      class: v
      field: Everyday speech
      gloss: "to disagree"
      concept: "disagree"
      source: {kind: coined}
    - form: nomalika
      class: n
      field: Everyday speech
      gloss: "a falsehood; a false claim, whether intentional or mistaken"
      concept: "falsehood"
      source: {kind: coined}
    - form: petana
      class: conj
      field: Everyday speech
      gloss: "nor"
      concept: "nor"
      source: {kind: coined}
    - form: tahi
      class: conj
      field: Everyday speech
      gloss: "therefore"
      concept: "therefore"
      source: {kind: coined}
    - form: hiyo
      class: conj
      field: Everyday speech
      gloss: "then, in a condition and its consequence"
      concept: "then-conditional"
      source: {kind: coined}
    - form: isa
      class: conj
      field: Everyday speech
      gloss: "unless"
      concept: "unless"
      source: {kind: coined}
    - form: tocha
      class: conj
      field: Everyday speech
      gloss: "otherwise"
      concept: "otherwise"
      source: {kind: coined}
    - form: loya
      class: conj
      field: Everyday speech
      gloss: "although"
      concept: "although"
      source: {kind: coined}
    - form: tilase
      class: conj
      field: Everyday speech
      gloss: "however"
      concept: "however"
      source: {kind: coined}
    - form: kamas
      class: conj
      field: Everyday speech
      gloss: "nevertheless"
      concept: "nevertheless"
      source: {kind: coined}
    - form: paha
      class: conj
      field: Everyday speech
      gloss: "despite"
      concept: "despite"
      source: {kind: coined}
    - form: chochunka
      class: conj
      field: Everyday speech
      gloss: "instead"
      concept: "instead"
      source: {kind: coined}
    - form: tikima
      class: conj
      field: Everyday speech
      gloss: "for; in order to; so that (purpose)"
      concept: "for-purpose"
      source: {kind: coined}
    - form: wimpe
      class: conj
      field: Everyday speech
      gloss: "like"
      concept: "like"
      source: {kind: coined}
    - form: moshohta
      class: conj
      field: Everyday speech
      gloss: "unlike"
      concept: "unlike"
      source: {kind: coined}
    - form: kosi
      class: conj
      field: Everyday speech
      gloss: "as"
      concept: "as"
      source: {kind: coined}
    - form: nosa
      class: conj
      field: Everyday speech
      gloss: "than"
      concept: "than"
      source: {kind: coined}
    - form: lafe
      class: conj
      field: Everyday speech
      gloss: "either"
      concept: "either-alternative"
      source: {kind: coined}
    - form: sasolo
      class: conj
      field: Everyday speech
      gloss: "neither"
      concept: "neither-alternative"
      source: {kind: coined}
    - form: mokosho
      class: conj
      field: Everyday speech
      gloss: "both"
      concept: "both-conjunction"
      source: {kind: coined}
    - form: hiwipi
      class: conj
      field: Everyday speech
      gloss: "whether"
      concept: "whether"
      source: {kind: coined}
    - form: yokita
      class: conj
      field: Everyday speech
      gloss: "that is"
      concept: "that-is"
      source: {kind: coined}
    - form: lasosko
      class: conj
      field: Everyday speech
      gloss: "namely"
      concept: "namely"
      source: {kind: coined}
    - form: tamimpi
      class: conj
      field: Everyday speech
      gloss: "for example"
      concept: "for-example"
      source: {kind: coined}
    - form: loha
      class: conj
      field: Everyday speech
      gloss: "except"
      concept: "except"
      source: {kind: coined}
    - form: fomasso
      class: conj
      field: Everyday speech
      gloss: "only"
      concept: "only"
      source: {kind: coined}
    - form: lanta
      class: conj
      field: Everyday speech
      gloss: "even"
      concept: "even"
      source: {kind: coined}
    - form: hoti
      class: conj
      field: Everyday speech
      gloss: "also"
      concept: "also"
      source: {kind: coined}
    - form: nippe
      class: conj
      field: Everyday speech
      gloss: "especially"
      concept: "especially"
      source: {kind: coined}
    - form: pottofi
      class: adj
      field: Everyday speech
      gloss: "tiny"
      concept: "tiny"
      source: {kind: coined}
    - form: shoho
      class: adj
      field: Everyday speech
      gloss: "huge"
      concept: "huge"
      source: {kind: coined}
    - form: honoho
      class: adj
      field: Everyday speech
      gloss: "long in spatial length"
      concept: "long"
      source: {kind: coined}
    - form: sachishe
      class: adj
      field: Everyday speech
      gloss: "short in spatial length"
      concept: "short"
      source: {kind: coined}
    - form: loshawi
      class: adj
      field: Everyday speech
      gloss: "high"
      concept: "high"
      source: {kind: coined}
    - form: lihko
      class: adj
      field: Everyday speech
      gloss: "low"
      concept: "low"
      source: {kind: coined}
    - form: kahkati
      class: adj
      field: Everyday speech
      gloss: "tall"
      concept: "tall"
      source: {kind: coined}
    - form: teme
      class: adj
      field: Everyday speech
      gloss: "wide"
      concept: "wide"
      source: {kind: coined}
    - form: hasosso
      class: adj
      field: Everyday speech
      gloss: "narrow"
      concept: "narrow"
      source: {kind: coined}
    - form: chinkoki
      class: adj
      field: Everyday speech
      gloss: "heavy"
      concept: "heavy"
      source: {kind: coined}
    - form: ose
      class: adj
      field: Everyday speech
      gloss: "light in weight"
      concept: "light-weight"
      source: {kind: coined}
    - form: saksashe
      class: adj
      field: Everyday speech
      gloss: "old; not new"
      concept: "old-object"
      source: {kind: coined}
    - form: tesomi
      class: adj
      field: Everyday speech
      gloss: "fast"
      concept: "fast"
      source: {kind: coined}
    - form: kikoti
      class: adj
      field: Everyday speech
      gloss: "slow"
      concept: "slow"
      source: {kind: coined}
    - form: yakache
      class: adj
      field: Everyday speech
      gloss: "easy"
      concept: "easy"
      source: {kind: coined}
    - form: kakokkahi
      class: adj
      field: Everyday speech
      gloss: "difficult"
      concept: "difficult"
      source: {kind: coined}
    - form: lankipe
      class: adj
      field: Everyday speech
      gloss: "better"
      concept: "better"
      source: {kind: coined}
    - form: mihe
      class: adj
      field: Everyday speech
      gloss: "worse"
      concept: "worse"
      source: {kind: coined}
    - form: shasi
      class: adj
      field: Everyday speech
      gloss: "best"
      concept: "best"
      source: {kind: coined}
    - form: sekkatami
      class: adj
      field: Everyday speech
      gloss: "worst"
      concept: "worst"
      source: {kind: coined}
    - form: topahi
      class: adj
      field: Everyday speech
      gloss: "important"
      concept: "important"
      source: {kind: coined}
    - form: lasimo
      class: adj
      field: Everyday speech
      gloss: "trivial"
      concept: "trivial"
      source: {kind: coined}
    - form: nomi
      class: adj
      field: Everyday speech
      gloss: "necessary"
      concept: "necessary"
      source: {kind: coined}
    - form: yanno
      class: adj
      field: Everyday speech
      gloss: "valuable"
      concept: "valuable"
      source: {kind: coined}
    - form: yanamo
      class: adj
      field: Everyday speech
      gloss: "worthless"
      concept: "worthless"
      source: {kind: coined}
    - form: chofi
      class: adj
      field: Everyday speech
      gloss: "useful"
      concept: "useful"
      source: {kind: coined}
    - form: shachabo
      class: adj
      field: Everyday speech
      gloss: "useless"
      concept: "useless"
      source: {kind: coined}
    - form: monopi
      class: adj
      field: Everyday speech
      gloss: "broken"
      concept: "broken"
      source: {kind: coined}
    - form: hipi
      class: adj
      field: Everyday speech
      gloss: "complete"
      concept: "complete"
      source: {kind: coined}
    - form: nipalisi
      class: adj
      field: Everyday speech
      gloss: "incomplete"
      concept: "incomplete"
      source: {kind: coined}
    - form: kammoki
      class: adj
      field: Everyday speech
      gloss: "honest"
      concept: "honest"
      source: {kind: coined}
    - form: tiwihki
      class: adj
      field: Everyday speech
      gloss: "dishonest"
      concept: "dishonest"
      source: {kind: coined}
    - form: takishelti
      class: adj
      field: Everyday speech
      gloss: "very"
      concept: "very"
      source: {kind: coined}
    - form: shate
      class: adj
      field: Everyday speech
      gloss: "extremely"
      concept: "extremely"
      source: {kind: coined}
    - form: sippani
      class: adj
      field: Everyday speech
      gloss: "somewhat"
      concept: "somewhat"
      source: {kind: coined}
    - form: henchi
      class: adj
      field: Everyday speech
      gloss: "slightly"
      concept: "slightly"
      source: {kind: coined}
    - form: lononko
      class: adj
      field: Everyday speech
      gloss: "barely"
      concept: "barely"
      source: {kind: coined}
    - form: hosani
      class: adj
      field: Everyday speech
      gloss: "too much"
      concept: "too-much"
      source: {kind: coined}
    - form: sommi
      class: adj
      field: Everyday speech
      gloss: "too little"
      concept: "too-little"
      source: {kind: coined}
    - form: sappo
      class: adj
      field: Everyday speech
      gloss: "similar"
      concept: "similar"
      source: {kind: coined}
    - form: kimonipi
      class: adj
      field: Everyday speech
      gloss: "opposite"
      concept: "opposite"
      source: {kind: coined}
    - form: ahanki
      class: adj
      field: Everyday speech
      gloss: "can; able to do something (ability)"
      concept: "can"
      source: {kind: coined}
    - form: yante
      class: adj
      field: Everyday speech
      gloss: "cannot; unable to do something (lack of ability)"
      concept: "cannot"
      source: {kind: coined}
    - form: tise
      class: adj
      field: Everyday speech
      gloss: "possible"
      concept: "possible"
      source: {kind: coined}
    - form: wasommi
      class: adj
      field: Everyday speech
      gloss: "impossible"
      concept: "impossible"
      source: {kind: coined}
    - form: oshe
      class: adj
      field: Everyday speech
      gloss: "may; have permission to act"
      concept: "may-permission"
      source: {kind: coined}
    - form: napope
      class: adj
      field: Everyday speech
      gloss: "might; an event is possible"
      concept: "might-possibility"
      source: {kind: coined}
    - form: kichalki
      class: adj
      field: Everyday speech
      gloss: "must"
      concept: "must"
      source: {kind: coined}
    - form: kihe
      class: adj
      field: Everyday speech
      gloss: "must not"
      concept: "must-not"
      source: {kind: coined}
    - form: happe
      class: adj
      field: Everyday speech
      gloss: "should"
      concept: "ought"
      source: {kind: coined}
    - form: sheyocho
      class: adj
      field: Everyday speech
      gloss: "required"
      concept: "required"
      source: {kind: coined}
    - form: channo
      class: adj
      field: Everyday speech
      gloss: "optional"
      concept: "optional"
      source: {kind: coined}
    - form: shomi
      class: adj
      field: Everyday speech
      gloss: "allowed"
      concept: "allowed"
      source: {kind: coined}
    - form: afe
      class: adj
      field: Everyday speech
      gloss: "forbidden"
      concept: "forbidden"
      source: {kind: coined}
    - form: samamma
      class: v
      field: Everyday speech
      gloss: "to permit"
      concept: "permit"
      source: {kind: coined}
    - form: honchinka
      class: v
      field: Everyday speech
      gloss: "to prohibit"
      concept: "prohibit"
      source: {kind: coined}
    - form: hime
      class: adj
      field: Everyday speech
      gloss: "free to act; unconstrained"
      concept: "free"
      source: {kind: coined}
    - form: fochapeho
      class: adj
      field: Everyday speech
      gloss: "constrained in action; not free to act"
      concept: "constrained"
      source: {kind: coined}
    - form: hicho
      class: adj
      field: Everyday speech
      gloss: "willing"
      concept: "willing"
      source: {kind: coined}
    - form: wikse
      class: adj
      field: Everyday speech
      gloss: "unwilling"
      concept: "unwilling"
      source: {kind: coined}
    - form: sasi
      class: adj
      field: Everyday speech
      gloss: "intended"
      concept: "intended"
      source: {kind: coined}
    - form: lihi
      class: adj
      field: Everyday speech
      gloss: "accidental"
      concept: "accidental"
      source: {kind: coined}
    - form: saso
      class: call
      field: Everyday speech
      gloss: "welcome"
      concept: "expression-welcome"
      source: {kind: coined}
    - form: chipi
      class: call
      field: Everyday speech
      gloss: "please"
      concept: "expression-please"
      source: {kind: coined}
    - form: yosapo
      class: call
      field: Everyday speech
      gloss: "you’re welcome"
      concept: "expression-youre-welcome"
      source: {kind: coined}
    - form: sima
      class: call
      field: Everyday speech
      gloss: "excuse me"
      concept: "expression-excuse-me"
      source: {kind: coined}
    - form: ammawa
      class: call
      field: Everyday speech
      gloss: "sorry"
      concept: "expression-sorry"
      source: {kind: coined}
    - form: tafehi
      class: call
      field: Everyday speech
      gloss: "forgive me"
      concept: "expression-forgive-me"
      source: {kind: coined}
    - form: soshik
      class: call
      field: Everyday speech
      gloss: "of course"
      concept: "of-course"
      source: {kind: coined}
    - form: wifako
      class: call
      field: Everyday speech
      gloss: "listen"
      concept: "expression-listen"
      source: {kind: coined}
    - form: nilu
      class: call
      field: Everyday speech
      gloss: "look"
      concept: "expression-look"
      source: {kind: coined}
    - form: halok
      class: call
      field: Everyday speech
      gloss: "wait"
      concept: "expression-wait"
      source: {kind: coined}
    - form: hantaka
      class: call
      field: Everyday speech
      gloss: "come here"
      concept: "expression-come-here"
      source: {kind: coined}
    - form: hatona
      class: call
      field: Everyday speech
      gloss: "go away"
      concept: "expression-go-away"
      source: {kind: coined}
    - form: nili
      class: call
      field: Everyday speech
      gloss: "help!"
      concept: "expression-help"
      source: {kind: coined}
    - form: altopa
      class: call
      field: Everyday speech
      gloss: "stop!"
      concept: "expression-stop"
      source: {kind: coined}
    - form: apso
      class: call
      field: Everyday speech
      gloss: "what"
      concept: "expression-what"
      source: {kind: coined}
    - form: shami
      class: call
      field: Everyday speech
      gloss: "pardon"
      concept: "expression-pardon"
      source: {kind: coined}
    - form: mahi
      class: call
      field: Everyday speech
      gloss: "again"
      concept: "expression-again"
      source: {kind: coined}
    - form: hihaka
      class: call
      field: Everyday speech
      gloss: "I understand"
      concept: "expression-i-understand"
      source: {kind: coined}
    - form: acho
      class: call
      field: Everyday speech
      gloss: "I do not understand"
      concept: "expression-i-do-not-understand"
      source: {kind: coined}
    - form: nopoma
      class: call
      field: Everyday speech
      gloss: "what do you mean"
      concept: "expression-what-do-you-mean"
      source: {kind: coined}
    - form: pokkoka
      class: call
      field: Everyday speech
      gloss: "how do you say…"
      concept: "expression-how-do-you-say"
      source: {kind: coined}
    - form: fesa
      class: call
      field: Everyday speech
      gloss: "what is this called"
      concept: "expression-what-is-this-called"
      source: {kind: coined}
    - form: tinata
      class: call
      field: Everyday speech
      gloss: "really? (conversational surprise or request for confirmation)"
      concept: "expression-really"
      source: {kind: coined}
    - form: shifi
      class: call
      field: Everyday speech
      gloss: "not at all (conversational response)"
      concept: "expression-not-at-all"
      source: {kind: coined}
    - form: sishe
      class: n
      field: Everyday speech
      gloss: "boy"
      concept: "boy"
      source: {kind: coined}
    - form: tachili
      class: n
      field: Everyday speech
      gloss: "girl"
      concept: "girl"
      source: {kind: coined}
    - form: tahta
      class: n
      field: Everyday speech
      gloss: "adult"
      concept: "adult"
      source: {kind: coined}
    - form: piloli
      class: n
      field: Everyday speech
      gloss: "group"
      concept: "group"
      source: {kind: coined}
    - form: petacha
      class: n
      field: Everyday speech
      gloss: "crowd"
      concept: "crowd"
      source: {kind: coined}
    - form: fikachatte
      class: n
      field: Everyday speech
      gloss: "tribe"
      concept: "tribe"
      source: {kind: coined}
    - form: hassa
      class: n
      field: Everyday speech
      gloss: "worker"
      concept: "worker"
      source: {kind: coined}
    - form: nommocha
      class: n
      field: Everyday speech
      gloss: "artisan"
      concept: "artisan"
      source: {kind: coined}
    - form: kimasha
      class: n
      field: Everyday speech
      gloss: "merchant"
      concept: "merchant"
      source: {kind: coined}
    - form: yako
      class: n
      field: Everyday speech
      gloss: "title"
      concept: "title"
      source: {kind: coined}
    - form: lofak
      class: n
      field: Everyday speech
      gloss: "rank"
      concept: "rank"
      source: {kind: coined}
    - form: sheyolo
      class: n
      field: Everyday speech
      gloss: "rule"
      concept: "rule"
      source: {kind: coined}
    - form: walo
      class: n
      field: Everyday speech
      gloss: "order"
      concept: "order-noun"
      source: {kind: coined}
    - form: oksi
      class: n
      field: Everyday speech
      gloss: "command"
      concept: "command-noun"
      source: {kind: coined}
    - form: hikimo
      class: n
      field: Everyday speech
      gloss: "obedience"
      concept: "obedience"
      source: {kind: coined}
    - form: noti
      class: n
      field: Everyday speech
      gloss: "justice"
      concept: "justice"
      source: {kind: coined}
    - form: ahachi
      class: n
      field: Everyday speech
      gloss: "injustice"
      concept: "injustice"
      source: {kind: coined}
    - form: shannashi
      class: n
      field: Everyday speech
      gloss: "right; morally acceptable"
      concept: "right-ethical"
      source: {kind: coined}
    - form: asseme
      class: n
      field: Everyday speech
      gloss: "wrong; morally unacceptable"
      concept: "wrong-ethical"
      source: {kind: coined}
    - form: aksema
      class: n
      field: Everyday speech
      gloss: "freedom"
      concept: "freedom"
      source: {kind: coined}
    - form: linchi
      class: n
      field: Everyday speech
      gloss: "exchange"
      concept: "exchange-noun"
      source: {kind: coined}
    - form: ilillasa
      class: n
      field: Everyday speech
      gloss: "wealth"
      concept: "wealth"
      source: {kind: coined}
    - form: tapano
      class: n
      field: Everyday speech
      gloss: "poverty"
      concept: "poverty"
      source: {kind: coined}
    - form: kapsishoka
      class: n
      field: Everyday speech
      gloss: "property"
      concept: "property"
      source: {kind: coined}
    - form: nahossohi
      class: n
      field: Everyday speech
      gloss: "ownership"
      concept: "ownership"
      source: {kind: coined}
    - form: fotuchi
      class: n
      field: Everyday speech
      gloss: "secret"
      concept: "secret"
      source: {kind: coined}
    - form: lila
      class: n
      field: Everyday speech
      gloss: "knowledge"
      concept: "knowledge"
      source: {kind: coined}
    - form: tikso
      class: n
      field: Everyday speech
      gloss: "thing"
      concept: "thing"
      source: {kind: coined}
    - form: sisha
      class: n
      field: Everyday speech
      gloss: "being"
      concept: "being"
      source: {kind: coined}
    - form: innos
      class: n
      field: Everyday speech
      gloss: "life"
      concept: "life"
      source: {kind: coined}
    - form: lofihi
      class: n
      field: Everyday speech
      gloss: "origin"
      concept: "origin"
      source: {kind: coined}
    - form: ilkaha
      class: n
      field: Everyday speech
      gloss: "beginning"
      concept: "beginning"
      source: {kind: coined}
    - form: koyaka
      class: n
      field: Everyday speech
      gloss: "end"
      concept: "end-noun"
      source: {kind: coined}
    - form: shapama
      class: n
      field: Everyday speech
      gloss: "completion"
      concept: "completion"
      source: {kind: coined}
    - form: sili
      class: n
      field: Everyday speech
      gloss: "change"
      concept: "change-noun"
      source: {kind: coined}
    - form: pucho
      class: n
      field: Everyday speech
      gloss: "transformation"
      concept: "transformation"
      source: {kind: coined}
    - form: mappisa
      class: n
      field: Everyday speech
      gloss: "part"
      concept: "part"
      source: {kind: coined}
    - form: mokkohi
      class: n
      field: Everyday speech
      gloss: "cause"
      concept: "cause"
      source: {kind: coined}
    - form: yati
      class: n
      field: Everyday speech
      gloss: "effect"
      concept: "effect"
      source: {kind: coined}
    - form: hati
      class: n
      field: Everyday speech
      gloss: "reason"
      concept: "reason"
      source: {kind: coined}
    - form: oti
      class: n
      field: Everyday speech
      gloss: "purpose"
      concept: "purpose"
      source: {kind: coined}
    - form: toya
      class: n
      field: Everyday speech
      gloss: "kind"
      concept: "kind"
      source: {kind: coined}
    - form: mashoncho
      class: n
      field: Everyday speech
      gloss: "real"
      concept: "real"
      source: {kind: coined}
    - form: chitana
      class: n
      field: Everyday speech
      gloss: "unreal"
      concept: "unreal"
      source: {kind: coined}
    - form: kopenni
      class: n
      field: Everyday speech
      gloss: "natural"
      concept: "natural"
      source: {kind: coined}
    - form: sempiyo
      class: n
      field: Everyday speech
      gloss: "unnatural"
      concept: "unnatural"
      source: {kind: coined}
  names:
    pattern: ["{given}"]
    given:
      female:
        - "chikoke"
        - "fayanna"
        - "hoyani"
        - "ichasa"
        - "ikohe"
        - "kachima"
        - "kahati"
        - "kelkawa"
        - "kihina"
        - "kipaki"
        - "lahile"
        - "ohomi"
        - "onka"
        - "pahese"
        - "pishaya"
        - "sastoma"
        - "shayowa"
        - "shimaya"
        - "tahe"
        - "tinkapi"
        - "yakaska"
      male:
        - "ammafe"
        - "apiyo"
        - "chasise"
        - "ikinko"
        - "ikoho"
        - "ipasho"
        - "koshali"
        - "lapali"
        - "lilanki"
        - "liyahi"
        - "lofamme"
        - "naksochi"
        - "opahiko"
        - "otoki"
        - "pakalo"
        - "shiko"
        - "sohiyo"
        - "tamoska"
        - "tiloho"
  sounds:
    stress: {two: first, longer: penultimate, mark: acute}
    edges:
      - {edge: openCluster, sounds: []}
      - {edge: closeConsonant, sounds: [k, s]}
      - edge: innerCluster
        sounds:
          - kk
          - pp
          - tt
          - ll
          - mm
          - nn
          - ss
          - hk
          - ht
          - sk
          - st
          - ks
          - ps
          - lk
          - lt
          - lch
          - mp
          - mb
          - nt
          - nk
          - nch
          - kp
          - kt
          - kch
          - kf
          - km
          - kl
          - pl
      - {edge: vowelPair, sounds: [ai]}
    clusters: {max: 2}
  scope:
    folders: [tokchiaska]
    cultures: [tokchiliclt]
    addresses:
      - lore-tokchiliclt
      - skill-tokchilng
      - affiliation-tokchiaska
      - place-tokchiaskargn
      - place-hayopokta
  tongues:
    - {tag: tokchili, meaning: a Tokchili name, language: skill-tokchilng}
    - {tag: translation, meaning: a name given in the language of these pages}
    - {tag: "exonym:<tongue>", meaning: "a name another people gives, in the tongue named"}
  register:
    - {name: amosi, tongue: tokchili, built: ["amosi"]}
    - {name: Falcon Chief, tongue: translation}
    - {name: Funeral of the Hundred, tongue: translation}
    - {name: Great Sun, tongue: translation}
    - {name: hayo, tongue: tokchili, built: ["hayo"]}
    - {name: hayo hanna, tongue: tokchili, built: ["hayo", "hanna"]}
    - {name: hayo hasko, tongue: tokchili, built: ["hayo", "hasko"]}
    - {name: hayo pokta, tongue: tokchili, built: ["hayo", "pokta"]}
    - {name: hoyani, tongue: tokchili}
    - {name: ichasa, tongue: tokchili}
    - {name: ilampo, tongue: tokchili, built: ["ilampo"]}
    - {name: Keeper of the Fire, tongue: translation}
    - {name: Keeper of the Yard, tongue: translation}
    - {name: kiyo imala, tongue: tokchili, built: ["kiyo", "imala"]}
    - {name: koyo imala, tongue: tokchili, built: ["koyo", "imala"]}
    - {name: lapali, tongue: tokchili}
    - {name: Mound Chief, tongue: translation}
    - {name: New Fire, tongue: translation}
    - {name: Old Mound, tongue: translation}
    - {name: omika, tongue: tokchili, built: ["omika"]}
    - {name: opahiko, tongue: tokchili}
    - {name: pakalo, tongue: tokchili}
    - {name: pokta hoshalo, tongue: tokchili, built: ["pokta", "hoshalo"]}
    - {name: poktimala, tongue: tokchili, built: ["pokta", "imala"]}
    - {name: sakko hapilo, tongue: tokchili, built: ["sakko", "hapilo"]}
    - {name: Shell Chief, tongue: translation}
    - {name: Shell Promise, tongue: translation}
    - {name: shimaya, tongue: tokchili}
    - {name: Sun Mother, tongue: translation}
    - {name: tamoli, tongue: tokchili, built: ["tamoli"]}
    - {name: tamoska, tongue: tokchili}
    - {name: tokchi aska, tongue: tokchili, built: ["tokchi", "aska"]}
    - {name: tokchi falisi, tongue: tokchili, built: ["tokchi", "falisi"]}
    - {name: tokchi hapilo, tongue: tokchili, built: ["tokchi", "hapilo"]}
    - {name: tokchili, tongue: tokchili, built: ["tokchi", "-li"]}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Tokchili}}

# terran_analog: the Muskogean languages, with Mvskoke (Creek) and Choctaw as the guide for syllable shape, word length and sound weighting. The voiceless l of both is left out, and no word on this page is the Creek, Choctaw or Chickasaw word for its meaning.
# terran_analog: the coastal accent stands for the Calusa, whose own language is unrecorded; it is given no separate tongue.
---

Tokchili is a tongue of the Tokchili family. Fluency measures the sophistication of expression in Tokchili, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Tokchili is the speech of the [[affiliation-tokchiaska|Tokchi Aska]], the One Fire: about 1,500,000 people in the mound towns of the great river valley, the old eastern ranges and the shell islands of the gulf coast. Its name means "of the fire". A speaker of Tokchili is someone whose hearth was lit from the fire on the great mound at [[place-hayopokta|Hayo Pokta]], and the word for the tongue and the word for belonging to the nation are the same word.

Nobody writes it. The One Fire keeps its law, its genealogies and its treaties in memory, and the Keepers of the Fire recite the line of the Suns aloud at every New Fire. The southern city-states write about the One Fire in their own glyphs and call it Ts'uma No'tun, and no Tokchili speaker reads what they write.

The tongue is spoken in two accents that understand each other easily. The heartland accent of the river towns is the speech of the court, the Keepers and the rolling-stone yards. The coastal accent of the shell towns is quicker and drops the breath before a consonant, so that _hokpa_ (river) comes out nearer _okpa_. The coast also gives the rest of the tongue its words for shell, canal and canoe, and a heartland noble who uses them too freely is mocked at court for sounding like a fisherman.

## How Tokchili sounds

Tokchili is open and even, with words of two and three syllables that end on a vowel: _hayo_ (sun), _tokchi_ (fire), _pokta_ (mound), _imala_ (chief).

**The vowels.** _a_, _i_ and _o_ carry most words, _e_ is less common, and _u_ is rare. Each has its plain value: _a_ as in _father_, _i_ as in _machine_, _o_ as in _go_, _e_ as in _bet_. The only vowel pair is _ai_.

**The consonants.** _p_, _t_, _k_, _ch_, _f_, _s_, _sh_, _h_, _m_, _n_, _l_, _w_ and _y_, with _b_ in a handful of words. A word opens on one consonant or a vowel, never on two consonants together.

**Clusters.** Two consonants meet inside a word, never more. The commonest pairs are a doubled consonant, said held a little, as in _sakko_ (stone) and _hanna_ (mother); a breath before a stop, as in _hokpa_ (river); and _s_, _l_, _m_ or _n_ before a stop, as in _hasko_ (great), _talko_ (town), _ambo_ (mouth) and _talchi_ (a hundred).

**Endings.** Nearly every word ends in a vowel. Verbs end in _-a_. Most nouns end in _-a_, _-i_ or _-o_, and most describing words in _-i_ or _-e_. A few words close on _-k_ or _-s_.

**Stress.** A word of two syllables is stressed on the first, _HA-yo_, and a longer word on the second-to-last, _to-KCHI-li_ said _tok-CHI-li_, _i-MA-la_.

**What Tokchili leaves out.** It has no _r_, no _d_, _g_, _j_, _v_ or _z_, no _th_ and no _kh_. It never opens a word on a cluster and never ends one on a cluster. It has no catch in the throat, which the southern tongue is full of. The breathy _l_ of old river speech is said as a plain _l_.

## Phonology

### Consonants

Stops
: _p_, _t_, _k_, and _b_ in a few words. They are released gently, never with a catch.

Affricate
: _ch_, as in _church_.

Fricatives
: _f_, _s_, _sh_ and _h_. An _h_ before a consonant is a breath, as in _hokpa_.

Nasals
: _m_ and _n_.

Liquid
: _l_. Tokchili has no _r_.

Glides
: _w_ and _y_, only before a vowel.

### Vowels

_a_, _i_, _o_ and _e_ are the working vowels, and _u_ turns up in a few words. Length is not written. The pair _ai_ is one syllable; any other two vowels never stand together, because no syllable after the first opens on a vowel.

### Syllables and length

A syllable is a consonant and a vowel, or a vowel alone at the start of a word. A consonant may close a syllable inside a word when another consonant follows it. Most words have two or three syllables, a few have four, and the commonest words have two. A long word is usually a joined pair: _poktasko_ (mountain) is _pokta_ and _hasko_, "great mound".

## Grammar Notes

### Word order

The verb comes last. The doer comes first, then what is done to, then the verb: _ama tokchi hapali_, "I keep the fire". A describing word follows its noun, so _tokchi falisi_ is "new fire". A possessor comes before what it owns, so _hayo pokta_ is "the Sun's mound".

### Verbs

A verb is cited in its plain form, which is also the form for _he_ or _she_, and every plain verb ends in _-a_. The other persons take the _-a_ off and add an ending: _hapa_ (keeps) gives _hapali_ (I keep), _hapishi_ (you keep), _hapa_ (he or she keeps), _hapiko_ (we keep), _hapachi_ (you all keep) and _hapaki_ (they keep). Every verb follows the pattern, and the same form serves for what is happening and what is usual. Time is said with a time word: _lenkisa_ (yesterday), _piti_ (tomorrow).

### Nouns

Nouns do not change for number. _Talko_ is a town or the towns, and a count or _hokso_ (many) says how many.

### Endings that make words

Three endings make new words from old ones.

- _-ilo_ makes the doer of a verb, and takes the place of its last vowel: _hapa_ (to keep) gives _hapilo_ (a keeper), and _tiwa_ (to walk) gives _tiwilo_ (one who walks with a dead Sun).
- _-li_ makes "of it" or "belonging to it": _tokchi_ (fire) gives _tokchili_ (of the fire), and _koyo_ (shell) gives _koyoli_ (of the shell).
- _-ka_ makes the state or the thing of a word: _ilampo_ (a captive) gives _ilampoka_ (captivity).

### Saying no, and asking

_Olto_ follows the word it denies: _lokali olto_, "I do not see". A yes-or-no question ends with _hoka_: _ichi atakishi hoka_, "are you coming?" Other questions use their question word, which stands where the answer would: _kosa atakishi_, "who comes?"

## Everyday speech

The greeting is _aloyo ichi_, "peace to you", and the parting is _aloyo hopa_, "peace on the road". A guest who has been fed says _ichalo hasko_, "great face", to the one who fed him: the face of the giver is made great by the gift. _Hoya_ is yes, and _olta_ is no.

Pronouns are short and regular: _ama_ (I), _ichi_ (you), _oma_ (he or she), _omi_ (it), _amiko_ (we) and _omaki_ (they). The endings in _-li_ make the possessives: _amali_ (my), _ichili_ (your), _amikoli_ (our). _Ina_ is "this" and _omo_ "that".

Numbers count by tens. _Aska_ (one), _hosa_ (two), _tachi_ (three), _osko_ (four) and _chakpi_ (five) are the first five; _lokmi_ is ten, _hosa lokmi_ (two tens) twenty, _talchi_ a hundred and _hasko talchi_, "a great hundred", a thousand. _Ayo_ before a number gives its place in a row: _ayo hosa_ is second and _ayo lokmi_ tenth. A town's tribute is counted in baskets, a game's wagers in copper plates, and both are counted aloud by tens, with a stick laid down at each ten.

## Script and Literacy

Tokchili has no script and no writing tradition. The One Fire keeps its records in memory, and its Keepers of the Fire carry the longest of them: the line of the Suns, the agreements of past Great Suns with the towns, and the count of what each town owes. A notched stick tallies a town's baskets of maize or earth, and a Keeper reads it as a reminder of a count already known.

The carvings on shell gorgets and copper plates are emblems, never words. A falcon dancer on a gorget names no one; it shows what its wearer belongs to.

The parallel readings on these pages transcribe speech. They use the editorial punctuation of the common transcription, and a question still ends with _hoka_ or opens with its question word.

## Naming Traditions

A child is named at the first New Fire after its birth by its mother's brother, who chooses the name and owns the right to change it. A boy's name commonly ends in _-o_ and a girl's in _-a_ or _-i_, but nothing forbids the other ending. A man earns a war name for a deed, and a war name replaces his child's name in public. Nobody uses a Sun's child name after the Sun takes office; a Great Sun is addressed as _Hayo Hasko_ (Great Sun) and spoken of by the name of his mound.

Clans are counted through the mother, and each is named for a beast or a power: the Wind (_hoyali_), the Bird (_tasoki_), the Deer (_alopa_), the Bear (_kalamo_) and the Panther (_yohaka_) are the five largest. A clan name is never part of a personal name, and a stranger who asks a person's clan is asking whom the person may marry.

## Tokchili Lexicon {#lexicon}

The One Fire keeps no books, and this page is the nearest thing to one: the words of Tokchili, the endings that make new words from old, and the register of every name the setting gives in the One Fire.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited: a noun in its plain form, a verb in its plain form, which is also its _he_ or _she_ form. A word made of smaller parts names them, joined by `+`, and the form is exactly what the endings make of them.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-tokchilng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Word edges

A word opens on a single consonant or a vowel and closes on a vowel, or on _k_ or _s_. Inside a word two consonants may meet, and the pairs below are the ones the tongue uses.

```sql
SELECT CASE edge WHEN 'openCluster' THEN 'Pairs that may open a word' WHEN 'closeConsonant' THEN 'Consonants that close a word' WHEN 'innerCluster' THEN 'Pairs that may stand inside a word' WHEN 'vowelPair' THEN 'Vowels that may stand together' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-tokchilng' ORDER BY position
```

### Clusters

```sql
SELECT 'Most consonants together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-tokchilng'
```

## Building words {#building-words}

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", attaches AS "Stem", gloss AS "Makes", coalesce(nullif(array_to_string(list_transform(examples, e -> regexp_replace(e, '^(\S+) > ([^\s,;]+)', '_\1_ > _\2_')), ', '), ''), '—') AS "Example"
FROM affixes
WHERE language = 'thalorna-note-skill-tokchilng'
ORDER BY position
```

## Words {#words}

### Fire, maize and mound

Every town keeps a fire, _tokchi_, lit from the fire on the great mound at each New Fire. Its people carry earth to the mound in baskets, each load an _amoka_, and the carriers are _amokilo_.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tokchilng' AND field = 'Fire, maize and mound'
ORDER BY position
```

### Rank and office

The standings run from the _ilampo_ (captive) to the _hayo_ (Sun), and the offices are built by putting a word before _imala_ (chief) or _hapilo_ (keeper).

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tokchilng' AND field = 'Rank and office'
ORDER BY position
```

### The stone game and war

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tokchilng' AND field = 'The stone game and war'
ORDER BY position
```

### The dead

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tokchilng' AND field = 'The dead'
ORDER BY position
```

### The coast

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tokchilng' AND field = 'The coast'
ORDER BY position
```

### Kin and clan

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tokchilng' AND field = 'Kin and clan'
ORDER BY position
```

### Everyday speech

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from"
FROM words
WHERE language = 'thalorna-note-skill-tokchilng' AND field = 'Everyday speech'
ORDER BY position
```

## Making names {#making-names}

**A person** carries one given name, and a man who earns a war name carries that instead. The name lists hold the names in use.

**A place** is named by a possessor and what it owns, or by a noun and the word that describes it: _Hayo Pokta_ is the Sun's Mound, and _Pokta Hoshalo_ is the Old Mound.

**An office** is named the same way, by the thing kept or led and the word for keeper or chief: _Tokchi Hapilo_, the Keeper of the Fire, and _Koyo Imala_, the Shell Chief.

## Scope {#scope}

The register below holds every name of every note of the One Fire, its culture and its tongue. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'folders' THEN 'folder' WHEN 'cultures' THEN 'culture' WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-tokchilng'
GROUP BY kind ORDER BY CASE kind WHEN 'folders' THEN 0 WHEN 'cultures' THEN 1 WHEN 'addresses' THEN 2 END
```

## Attested names {#attested-names}

Every name the setting gives a person, place, polity, office or thing of the One Fire, with the note where it is met. A name built from this page shows how; a name in the reader's tongue is listed so that the register is complete.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'tokchili' THEN ', [[' || tongue_language || '|Tokchili]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-tokchilng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-tokchilng' ORDER BY position
```
